import { Repository } from "typeorm";
import { AppDataSource } from "../../data-source";
import { Contacts } from "../../entities";
import { retrieveContactsSchema } from "../../schemas/contacts";
import { IContactsReturn } from "../../interfaces/contact";

const listContactService = async (): Promise<IContactsReturn[]> => {
  const contactRepository: Repository<Contacts> =
    AppDataSource.getRepository(Contacts);

  const findContact: Array<Contacts> = await contactRepository.find();

  const contacts = retrieveContactsSchema.parse(findContact);

  return contacts;
};

export { listContactService };
