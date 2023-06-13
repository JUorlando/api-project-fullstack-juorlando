import { Repository } from "typeorm";
import { AppDataSource } from "../../data-source";
import { User } from "../../entities";
import { retrieveUsersSchema } from "../../schemas/users";
import { IUsersReturn } from "../../interfaces/users";

const listUsersService = async (): Promise<IUsersReturn[]> => {
  const usersRepository: Repository<User> =
    AppDataSource.getRepository(User);

  const findUser: Array<User> = await usersRepository.find();

  const users = retrieveUsersSchema.parse(findUser);

  return users;
};

export { listUsersService };