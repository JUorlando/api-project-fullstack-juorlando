import { z } from "zod";

const usersSchema = z.object({
    name: z.string().max(120),
    email: z.string().email().max(60),
    password: z.string().max(120),
    admin: z.boolean().default(false).optional(),
    phone: z.string().max(13)
})

const usersSchemaReturn = z.object({
    id: z.number(),
    name: z.string().max(120),
    email: z.string().email().max(60),
    admin: z.boolean().default(false).optional(),
    createdAt: z.string(),
    phone: z.string().max(13)
})

export { usersSchema, usersSchemaReturn }