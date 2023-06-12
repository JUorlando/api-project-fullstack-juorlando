import { Request, Response } from "express";
import { createContactsService } from "../services/contacts";

async function createContactsController(
  req: Request,
  res: Response
): Promise<Response> {
  const data = req.body;

  const createUser = await createContactsService(data);

  return res.status(201).json(createUser);
}

export { createContactsController };
