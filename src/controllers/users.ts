import { Request, Response } from "express";
import { createUsersService } from "../services/users/createUsers.service";
import { IupdateUsers } from "../interfaces/users";
import { listUsersService } from "../services/users/retrieveUsers.service";
import { deleteUserService } from "../services/users/deleteUsers.service";
import { updateUserService } from "../services/users/updateUsers.service";

async function createUsersController(
  req: Request,
  res: Response
): Promise<Response> {
  const data = req.body;

  const createUser = await createUsersService(data);

  return res.status(201).json(createUser);
}

const listUsersController = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const getUser: any = await listUsersService();

  return res.status(200).json(getUser);
};

const updateUsersController = async (req: Request, res: Response) => {
  const userData: IupdateUsers = req.body;
  const userId = parseInt(req.params.id);

  const updatedUsers = await updateUserService(userData, userId);

  return res.json(updatedUsers);
};
const deleteUsersController = async (req: Request, res: Response) => {
  const usersId = parseInt(req.params.id);

  await deleteUserService(usersId);

  return res.status(204).send();
};

export {
  createUsersController,
  listUsersController,
  updateUsersController,
  deleteUsersController,
};
