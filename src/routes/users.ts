import { Router } from "express";
import { createUsersController } from "../controllers/users";
import { ensureEmailUser } from "../middlewares/users/ensureEmailUser.middleware";
import { ensureDataIsValidMiddleware } from "../middlewares/ensureValidData.middleware";
import { usersSchema } from "../schemas/users";
import { ensureNumberUser } from "../middlewares/users/ensureNumberUser.middleware";

const usersRoutes: Router = Router();

usersRoutes.post(
  "",
  ensureEmailUser,
  ensureDataIsValidMiddleware(usersSchema),
  ensureNumberUser,
  createUsersController
);

export { usersRoutes };
