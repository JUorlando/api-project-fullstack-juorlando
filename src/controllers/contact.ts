import { Request, Response } from "express";
import { createContactsService } from "../services/contacts/createContacts.service";
import {
  listContactService,
} from "../services/contacts/retrieveContacts.service";
import { updateContactService } from "../services/contacts/updateContacts.service";
import { deleteContactService } from "../services/contacts/deleteContacts.service";
import { IContacts, IContactsReturn, IupdateContacts } from "../interfaces/contact";

async function createContactsController(
  req: Request,
  res: Response
): Promise<Response> {
  const data = req.body;

  const createUser = await createContactsService(data);

  return res.status(201).json(createUser);
}

const listContactController = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const getContacts: any = await listContactService();

  return res.status(200).json(getContacts);
};

const updateContactController = async (req: Request, res: Response) => {
  const contactData: IupdateContacts = req.body;
  const contactId = parseInt(req.params.id);

  const updatedContact = await updateContactService(contactData, contactId);

  return res.json(updatedContact);
};
const deleteContactController = async (req: Request, res: Response) => {
  const contactId = parseInt(req.params.id);

  await deleteContactService(contactId);

  return res.status(204).send();
};

export {
  createContactsController,
  listContactController,
  updateContactController,
  deleteContactController,
};
