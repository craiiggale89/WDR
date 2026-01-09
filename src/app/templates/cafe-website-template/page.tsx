import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';

export const metadata: Metadata = {
    title: 'Cornerstone Café | Example Template',
    description: 'A simple, practical website template for independent cafés and restaurants.',
};

const menuItems = {
    breakfast: [
        { name: 'Full English', price: '9.50' },
        { name: 'Eggs on toast', price: '6.00' },
        { name: 'Porridge with honey', price: '4.50' },
        { name: 'Bacon sandwich', price: '5.50' },
    ],
    lunch: [
        { name: 'Soup of the day', price: '5.50' },
        { name: 'Ham and cheese toastie', price: '7.00' },
        { name: 'Chicken salad', price: '8.50' },
        { name: 'Fish finger sandwich', price: '8.00' },
    ],
    drinks: [
        { name: 'Filter coffee', price: '2.50' },
        { name: 'Latte / Cappuccino', price: '3.20' },
        { name: 'Tea', price: '2.00' },
        { name: 'Fresh orange juice', price: '3.50' },
    ],
};

const faqs = [
    {
        question: 'Do you take bookings?',
        answer: 'Yes. Call us or use the form below. For groups of 6 or more, we ask for at least 24 hours notice.',
    },
    {
        question: 'Do you cater for dietary requirements?',
        answer: 'Yes. We can accommodate vegetarian, vegan and gluten-free requests. Please let us know when you book.',
    },
    {
        question: 'Can you accommodate groups?',
        answer: 'Yes, up to 20 people. For larger groups, please call to discuss.',
    },
    {
        question: 'Is the venue accessible?',
        answer: 'Yes. Step-free access at the front entrance, accessible toilets available.',
    },
];

export default function CafeTemplatePage() {
    return (
        <div className="bg-white">
            {/* Example Label */}
            <div className="bg-amber-50 border-b border-amber-200 py-2 text-center">
                <p className="text-sm text-amber-800">
                    This is an example template. <Link href="/contact" className="underline font-medium">Request this template</Link>
                </p>
            </div>

            {/* Hero */}
            <section className="py-16 md:py-24 border-b border-slate-200">
                <div className="container mx-auto px-4 lg:px-8">
                    <div className="grid md:grid-cols-2 gap-12 items-center">
                        <div className="text-center md:text-left">
                            <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
                                Cornerstone Café
                            </h1>
                            <p className="text-xl text-slate-600 mb-2">
                                Honest food, good coffee, open all day
                            </p>
                            <p className="text-slate-500 mb-8">
                                Birmingham city centre
                            </p>
                            <div className="flex justify-center md:justify-start gap-4">
                                <a href="#menu" className="bg-amber-600 hover:bg-amber-700 text-white font-medium py-3 px-8 rounded transition-colors">
                                    View Menu
                                </a>
                                <a href="#book" className="border border-slate-300 hover:border-slate-400 text-slate-700 font-medium py-3 px-8 rounded transition-colors">
                                    Book a Table
                                </a>
                            </div>
                        </div>
                        <div className="relative h-64 md:h-96 rounded-lg overflow-hidden bg-slate-100 shadow-lg">
                            <Image
                                src="/images/templates/cafe-hero.png"
                                alt="Cornerstone Café interior"
                                fill
                                className="object-cover"
                                priority
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* Menu */}
            <section id="menu" className="py-16 md:py-20">
                <div className="container mx-auto px-4 lg:px-8">
                    <h2 className="text-3xl font-bold text-slate-900 mb-12 text-center">Menu</h2>

                    <div className="max-w-2xl mx-auto space-y-12">
                        {/* Breakfast */}
                        <div>
                            <h3 className="text-xl font-semibold text-slate-800 mb-4 pb-2 border-b border-slate-200">Breakfast</h3>
                            <ul className="space-y-3">
                                {menuItems.breakfast.map((item) => (
                                    <li key={item.name} className="flex justify-between text-slate-700">
                                        <span>{item.name}</span>
                                        <span className="text-slate-500">£{item.price}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Lunch */}
                        <div>
                            <h3 className="text-xl font-semibold text-slate-800 mb-4 pb-2 border-b border-slate-200">Lunch</h3>
                            <ul className="space-y-3">
                                {menuItems.lunch.map((item) => (
                                    <li key={item.name} className="flex justify-between text-slate-700">
                                        <span>{item.name}</span>
                                        <span className="text-slate-500">£{item.price}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Drinks */}
                        <div>
                            <h3 className="text-xl font-semibold text-slate-800 mb-4 pb-2 border-b border-slate-200">Drinks</h3>
                            <ul className="space-y-3">
                                {menuItems.drinks.map((item) => (
                                    <li key={item.name} className="flex justify-between text-slate-700">
                                        <span>{item.name}</span>
                                        <span className="text-slate-500">£{item.price}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* Opening Hours */}
            <section className="py-16 md:py-20 bg-slate-50">
                <div className="container mx-auto px-4 lg:px-8">
                    <h2 className="text-3xl font-bold text-slate-900 mb-8 text-center">Opening Hours</h2>
                    <div className="max-w-md mx-auto text-center">
                        <div className="space-y-4">
                            <div className="flex justify-between text-lg">
                                <span className="text-slate-700 font-medium">Monday – Friday</span>
                                <span className="text-slate-600">7:30am – 5:00pm</span>
                            </div>
                            <div className="flex justify-between text-lg">
                                <span className="text-slate-700 font-medium">Saturday</span>
                                <span className="text-slate-600">8:30am – 4:00pm</span>
                            </div>
                            <div className="flex justify-between text-lg">
                                <span className="text-slate-700 font-medium">Sunday</span>
                                <span className="text-slate-600">9:00am – 3:00pm</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Location */}
            <section className="py-16 md:py-20">
                <div className="container mx-auto px-4 lg:px-8">
                    <h2 className="text-3xl font-bold text-slate-900 mb-8 text-center">Find Us</h2>
                    <div className="max-w-2xl mx-auto">
                        <div className="grid md:grid-cols-2 gap-8">
                            <div>
                                <h3 className="font-semibold text-slate-800 mb-3">Address</h3>
                                <p className="text-slate-600 mb-4">
                                    42 High Street<br />
                                    Birmingham<br />
                                    B4 7SL
                                </p>
                                <p className="text-sm text-slate-500">
                                    Street parking available. Nearest car park: Digbeth NCP (5 min walk).
                                </p>
                            </div>
                            <div>
                                {/* Map placeholder */}
                                <div className="bg-slate-200 h-48 rounded flex items-center justify-center">
                                    <span className="text-slate-500 text-sm">Map placeholder</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Booking / Contact */}
            <section id="book" className="py-16 md:py-20 bg-slate-50">
                <div className="container mx-auto px-4 lg:px-8">
                    <h2 className="text-3xl font-bold text-slate-900 mb-4 text-center">Book a Table</h2>
                    <p className="text-slate-600 text-center mb-8 max-w-md mx-auto">
                        Call us on <strong>0121 456 7890</strong> or fill in the form below.
                    </p>
                    <form className="max-w-md mx-auto space-y-4">
                        <div>
                            <label htmlFor="name" className="block text-sm font-medium text-slate-700 mb-1">Name</label>
                            <input type="text" id="name" className="w-full border border-slate-300 rounded px-4 py-2 focus:outline-none focus:border-amber-500" />
                        </div>
                        <div>
                            <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-1">Email</label>
                            <input type="email" id="email" className="w-full border border-slate-300 rounded px-4 py-2 focus:outline-none focus:border-amber-500" />
                        </div>
                        <div>
                            <label htmlFor="date" className="block text-sm font-medium text-slate-700 mb-1">Date</label>
                            <input type="date" id="date" className="w-full border border-slate-300 rounded px-4 py-2 focus:outline-none focus:border-amber-500" />
                        </div>
                        <div>
                            <label htmlFor="message" className="block text-sm font-medium text-slate-700 mb-1">Message (optional)</label>
                            <textarea id="message" rows={3} className="w-full border border-slate-300 rounded px-4 py-2 focus:outline-none focus:border-amber-500"></textarea>
                        </div>
                        <button type="submit" className="w-full bg-amber-600 hover:bg-amber-700 text-white font-medium py-3 px-8 rounded transition-colors">
                            Send Booking Request
                        </button>
                    </form>
                </div>
            </section>

            {/* About */}
            <section className="py-16 md:py-20">
                <div className="container mx-auto px-4 lg:px-8">
                    <h2 className="text-3xl font-bold text-slate-900 mb-6 text-center">About Us</h2>
                    <div className="max-w-xl mx-auto text-center">
                        <p className="text-slate-600 leading-relaxed">
                            Cornerstone Café has been serving Birmingham since 2018. We make simple food from good ingredients and serve proper coffee. Run by Mark and Sarah, we're open seven days a week.
                        </p>
                    </div>
                </div>
            </section>

            {/* FAQs */}
            <section className="py-16 md:py-20 bg-slate-50">
                <div className="container mx-auto px-4 lg:px-8">
                    <h2 className="text-3xl font-bold text-slate-900 mb-8 text-center">FAQs</h2>
                    <div className="max-w-2xl mx-auto space-y-6">
                        {faqs.map((faq) => (
                            <div key={faq.question}>
                                <h3 className="font-semibold text-slate-800 mb-2">{faq.question}</h3>
                                <p className="text-slate-600">{faq.answer}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Footer */}
            <footer className="py-12 border-t border-slate-200">
                <div className="container mx-auto px-4 lg:px-8">
                    <div className="max-w-2xl mx-auto text-center">
                        <h3 className="font-bold text-slate-900 mb-4">Cornerstone Café</h3>
                        <div className="space-y-1 text-slate-600 mb-6">
                            <p>0121 456 7890</p>
                            <p>hello@cornerstonecafe.co.uk</p>
                            <p>42 High Street, Birmingham, B4 7SL</p>
                        </div>
                        <div className="text-sm text-slate-500">
                            <a href="#" className="hover:underline">Instagram</a>
                            <span className="mx-2">·</span>
                            <a href="#" className="hover:underline">Facebook</a>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    );
}
