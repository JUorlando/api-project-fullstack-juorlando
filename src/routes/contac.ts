import { Router } from "express";
import { ensureValidToken } from "../middlewares/login/loginMiddleware";
import { ensureEmailContact } from "../middlewares/contact/ensureEmailContact.middleware";
import { ensureNumberContact } from "../middlewares/contact/ensureNumberContact.middleware";
import {
  createContactsController,
  deleteContactController,
  listContactController,
  updateContactController,
} from "../controllers/contact";
import { ensureDataIsValidMiddleware } from "../middlewares/ensureValidData.middleware";
import { contactsSchema, updateContactSchema } from "../schemas/contacts";
import { ensureContactExists } from "../middlewares/contact/ensureContactExist.middleware";

const contactsRoutes: Router = Router();

contactsRoutes.post(
  "",
  ensureValidToken,
  ensureEmailContact,
  ensureDataIsValidMiddleware(contactsSchema),
  ensureNumberContact,
  createContactsController
);

contactsRoutes.get("", ensureValidToken, listContactController);

contactsRoutes.patch(
  "/:id",
  ensureValidToken,
  ensureContactExists,
  ensureDataIsValidMiddleware(updateContactSchema),
  updateContactController
);

contactsRoutes.delete(
  "/:id",
  ensureValidToken,
  ensureContactExists,
  deleteContactController
);

export { contactsRoutes };
