import { pgTable, text, timestamp, serial } from 'drizzle-orm/pg-core';

export const leads = pgTable('leads', {
    id: serial('id').primaryKey(),
    name: text('name').notNull(),
    email: text('email').notNull(),
    phone: text('phone'),
    service: text('service'),
    message: text('message').notNull(),
    status: text('status').default('new').notNull(), // new, contacted, closed
    createdAt: timestamp('created_at').defaultNow().notNull(),
});
