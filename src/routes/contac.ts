import { Router } from "express";
import { ensureValidToken } from "../middlewares/login/loginMiddleware";
import { ensureEmailContact } from "../middlewares/contact/ensureEmailContact.middleware";
import { ensureNumberContact } from "../middlewares/contact/ensureNumberContact.middleware";
import { createContactsController } from "../controllers/contact";
import { ensureDataIsValidMiddleware } from "../middlewares/ensureValidData.middleware";
import { contactsSchema } from "../schemas/contacts";

const contacRoutes: Router = Router();

contacRoutes.post(
  "",
  ensureValidToken,
  ensureEmailContact,
  ensureDataIsValidMiddleware(contactsSchema),
  ensureNumberContact,
  createContactsController
);

export { contacRoutes };
