import { NextResponse } from 'next/server';
import { db } from '@/db';
import { leads } from '@/db/schema';

interface ContactFormData {
    name: string;
    email: string;
    phone?: string;
    service?: string;
    message: string;
}

export async function POST(request: Request) {
    try {
        const data: ContactFormData = await request.json();

        // Validate required fields
        if (!data.name || !data.email || !data.message) {
            return NextResponse.json(
                { error: 'Please fill in all required fields.' },
                { status: 400 }
            );
        }

        // Validate email format
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(data.email)) {
            return NextResponse.json(
                { error: 'Please enter a valid email address.' },
                { status: 400 }
            );
        }

        // Log the submission (in production, this would send an email)
        // Log the submission (in production, this would send an email)
        const logData = {
            name: data.name,
            email: data.email,
            phone: data.phone || 'Not provided',
            service: data.service || 'Not specified',
            message: data.message,
            timestamp: new Date().toISOString(),
        };
        console.log('Contact form submission:', logData);

        // Save to Database
        try {
            await db.insert(leads).values({
                name: data.name,
                email: data.email,
                phone: data.phone,
                service: data.service,
                message: data.message,
            });
            console.log('Lead saved to database successfully');
        } catch (dbError) {
            console.error('Failed to save lead to database:', dbError);
            // We still return success to the user so they don't think it failed,
            // but we log the error for investigation.
        }

        // In production, you would send an email here using a service like:
        // - Resend
        // - SendGrid
        // - Postmark
        // - Nodemailer with SMTP
        //
        // Example with Resend:
        // 
        // import { Resend } from 'resend';
        // const resend = new Resend(process.env.RESEND_API_KEY);
        // 
        // await resend.emails.send({
        //   from: 'noreply@wdr.co.uk',
        //   to: 'hello@wdr.co.uk',
        //   subject: `New enquiry from ${data.name}`,
        //   text: `
        //     Name: ${data.name}
        //     Email: ${data.email}
        //     Phone: ${data.phone || 'Not provided'}
        //     Service: ${data.service || 'Not specified'}
        //     
        //     Message:
        //     ${data.message}
        //   `,
        // });

        return NextResponse.json(
            { success: true, message: 'Message sent successfully.' },
            { status: 200 }
        );
    } catch (error) {
        console.error('Contact form error:', error);
        return NextResponse.json(
            { error: 'Something went wrong. Please try again.' },
            { status: 500 }
        );
    }
}
