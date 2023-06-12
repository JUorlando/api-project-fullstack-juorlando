import { Repository } from "typeorm";
import { AppDataSource } from "../../data-source";
import { Contacts } from "../../entities";

const deleteContactService = async (idUser: number): Promise<void> => {
  const contactRepository: Repository<Contacts> =
    AppDataSource.getRepository(Contacts);

  const contact = await contactRepository.findOneBy({
    id: idUser,
  });

  await contactRepository.remove(contact!);
};

export { deleteContactService };
