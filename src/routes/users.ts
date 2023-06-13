import { Router } from "express";
import {
  createUsersController,
  deleteUsersController,
  listUsersController,
  updateUsersController,
} from "../controllers/users";
import { ensureEmailUser } from "../middlewares/users/ensureEmailUser.middleware";
import { ensureDataIsValidMiddleware } from "../middlewares/ensureValidData.middleware";
import { updateUsersSchema, usersSchema } from "../schemas/users";
import { ensureNumberUser } from "../middlewares/users/ensureNumberUser.middleware";
import { ensureValidToken } from "../middlewares/login/loginMiddleware";

const usersRoutes: Router = Router();

usersRoutes.post(
  "",
  ensureEmailUser,
  ensureDataIsValidMiddleware(usersSchema),
  ensureNumberUser,
  createUsersController
);

usersRoutes.get("", listUsersController);

usersRoutes.patch(
  "/:id",
  ensureValidToken,
  ensureEmailUser,
  ensureDataIsValidMiddleware(updateUsersSchema),
  ensureNumberUser,
  updateUsersController
);

usersRoutes.delete("/:id", ensureValidToken, deleteUsersController);

export { usersRoutes };
