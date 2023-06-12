import { Router } from "express";
import { createLoginController } from "../controllers/login";
import { ensureDataIsValidMiddleware } from "../middlewares/ensureValidData.middleware";
import { loginSchema } from "../schemas/login";

const loginRoutes: Router = Router();

loginRoutes.post(
  "",
  ensureDataIsValidMiddleware(loginSchema),
  createLoginController
);

export { loginRoutes };
