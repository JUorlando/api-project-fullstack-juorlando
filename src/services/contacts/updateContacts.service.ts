import { Repository } from "typeorm";
import { IupdateContacts } from "../../interfaces/contact";
import { Contacts } from "../../entities";
import { AppDataSource } from "../../data-source";
import { contactsSchema, updateContactSchema } from "../../schemas/contacts";

const updateContactService = async (
  contactData: IupdateContacts,
  idContact: number
): Promise<IupdateContacts> => {
  const contactRepository: Repository<Contacts> =
    AppDataSource.getRepository(Contacts);

  const oldContactData: any = await contactRepository.findOneBy({
    id: idContact,
  });

  const contact = contactRepository.create({
    ...oldContactData,
    ...contactData,
  });

  await contactRepository.save(contact);

  const updateContact = contactsSchema.parse(contact);

  return updateContact;
};

export { updateContactService };
