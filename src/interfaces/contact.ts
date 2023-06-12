import { z } from "zod";
import { contactsSchema, contactsSchemaReturn } from "../schemas/contacts";

type IContacts = z.infer<typeof contactsSchema>;

type IContactsReturn = z.infer<typeof contactsSchemaReturn>;

export { IContacts, IContactsReturn };
