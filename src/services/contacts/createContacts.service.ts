import { AppDataSource } from "../../data-source";
import { Repository } from "typeorm";
import { Contacts } from "../../entities";
import { contactsSchemaReturn } from "../../schemas/contacts";
import { IContacts, IContactsReturn } from "../../interfaces/contact";

async function createContactsService(
  data: IContacts
): Promise<IContactsReturn> {
  const contactRepo: Repository<Contacts> =
    AppDataSource.getRepository(Contacts);

  const contact = contactRepo.create(data);

  await contactRepo.save(contact);

  const newcontact = contactsSchemaReturn.parse(contact);

  return newcontact;
}

export { createContactsService };
