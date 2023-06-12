import { z } from "zod";

const contactsSchema = z.object({
  name: z.string().max(120),
  email: z.string().email().max(60),
  phone: z.string().max(13),
});

const contactsSchemaReturn = z.object({
  id: z.number(),
  name: z.string().max(120),
  email: z.string().email().max(60),
  createdAt: z.string(),
  phone: z.string().max(13),
});

export { contactsSchema, contactsSchemaReturn };
