import { Repository } from "typeorm";
import { AppDataSource } from "../../data-source";
import { Contacts } from "../../entities";

const deleteContactService = async (idContact: number): Promise<void> => {
  const contactRepository: Repository<Contacts> =
    AppDataSource.getRepository(Contacts);

  const contact = await contactRepository.findOneBy({
    id: idContact,
  });

  await contactRepository.remove(contact!);
};

export { deleteContactService };
