import { Repository } from "typeorm";
import { User } from "../../entities";
import { AppDataSource } from "../../data-source";
import { usersSchema } from "../../schemas/users";
import { IupdateUsers } from "../../interfaces/users";

const updateUserService = async (
  userData: IupdateUsers,
  idUser: number
): Promise<IupdateUsers> => {
  const userRepository: Repository<User> = AppDataSource.getRepository(User);

  const oldUserData: any = await userRepository.findOneBy({
    id: idUser,
  });

  const user = userRepository.create({
    ...oldUserData,
    ...userData,
  });

  await userRepository.save(user);

  const updateUser = usersSchema.parse(user);

  return updateUser;
};

export { updateUserService };
