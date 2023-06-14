import { z } from "zod";
import {
  contactsSchema,
  contactsSchemaReturn,
  updateContactSchema,
  retrieveContactsSchema,
} from "../schemas/contacts";

type IContacts = z.infer<typeof contactsSchema>;
type IContactsReturn = z.infer<typeof contactsSchemaReturn>;
type IupdateContacts = z.infer<typeof updateContactSchema>;
type IretrieveContacts = z.infer<typeof retrieveContactsSchema>;

export { IContacts, IContactsReturn, IupdateContacts, IretrieveContacts };
