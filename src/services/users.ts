import { AppDataSource } from "../data-source";
import { Repository } from "typeorm";
import { User } from "../entities";
import { IUsers, IUsersReturn } from "../interfaces/users";
import { usersSchemaReturn } from "../schemas/users";

async function createUsersService(data: any): Promise<IUsersReturn> {
  const userRepo: Repository<User> = AppDataSource.getRepository(User);

  const users = userRepo.create(data);

  await userRepo.save(users);

  const newUser = usersSchemaReturn.parse(users);

  return newUser;
}

export { createUsersService };
