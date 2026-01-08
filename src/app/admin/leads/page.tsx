import { db } from '@/db';
import { leads } from '@/db/schema';
import { desc, eq } from 'drizzle-orm';
import { revalidatePath } from 'next/cache';

export default async function AdminLeadsPage() {
    const allLeads = await db.select().from(leads).orderBy(desc(leads.createdAt));

    async function markContacted(formData: FormData) {
        'use server';
        const id = Number(formData.get('id'));
        await db.update(leads).set({ status: 'contacted' }).where(eq(leads.id, id));
        revalidatePath('/admin/leads');
    }

    return (
        <div className="container mx-auto px-4 py-12">
            <h1 className="text-3xl font-bold mb-8 text-slate-900">Leads Dashboard</h1>

            <div className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden">
                <div className="overflow-x-auto">
                    <table className="w-full text-left text-sm">
                        <thead className="bg-slate-50 text-slate-600 font-medium border-b border-slate-200">
                            <tr>
                                <th className="px-6 py-4">Date</th>
                                <th className="px-6 py-4">Name</th>
                                <th className="px-6 py-4">Contact</th>
                                <th className="px-6 py-4">Service</th>
                                <th className="px-6 py-4">Message</th>
                                <th className="px-6 py-4">Status</th>
                                <th className="px-6 py-4">Action</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-slate-100">
                            {allLeads.map((lead) => (
                                <tr key={lead.id} className="hover:bg-slate-50/50">
                                    <td className="px-6 py-4 whitespace-nowrap text-slate-500">
                                        {new Date(lead.createdAt).toLocaleDateString()}
                                    </td>
                                    <td className="px-6 py-4 font-medium text-slate-900">{lead.name}</td>
                                    <td className="px-6 py-4">
                                        <div className="text-slate-900">{lead.email}</div>
                                        <div className="text-slate-500 text-xs">{lead.phone}</div>
                                    </td>
                                    <td className="px-6 py-4 text-slate-600">
                                        <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                                            {lead.service}
                                        </span>
                                    </td>
                                    <td className="px-6 py-4 text-slate-600 max-w-xs truncate" title={lead.message}>
                                        {lead.message}
                                    </td>
                                    <td className="px-6 py-4">
                                        <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${lead.status === 'new'
                                                ? 'bg-green-100 text-green-800'
                                                : 'bg-slate-100 text-slate-800'
                                            }`}>
                                            {lead.status.toUpperCase()}
                                        </span>
                                    </td>
                                    <td className="px-6 py-4">
                                        {lead.status === 'new' && (
                                            <form action={markContacted}>
                                                <input type="hidden" name="id" value={lead.id} />
                                                <button type="submit" className="text-blue-600 hover:text-blue-800 font-medium text-xs">
                                                    Mark Contacted
                                                </button>
                                            </form>
                                        )}
                                    </td>
                                </tr>
                            ))}
                            {allLeads.length === 0 && (
                                <tr>
                                    <td colSpan={7} className="px-6 py-12 text-center text-slate-500">
                                        No leads found yet.
                                    </td>
                                </tr>
                            )}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}
