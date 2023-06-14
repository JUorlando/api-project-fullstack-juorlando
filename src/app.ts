import "express-async-errors";
import { handleErrors } from "./errors";
import express from "express";
import { loginRoutes } from "./routes/login";
import { usersRoutes } from "./routes/users";
import { contactsRoutes } from "./routes/contac";
import cors from "cors";
import swaggerUi from "swagger-ui-express";
import swaggerDocs from "./swagger.json";

const app = express();
app.use(express.json());

app.use(cors())

app.use("/docs", swaggerUi.serve, swaggerUi.setup(swaggerDocs));

app.use("/users", usersRoutes);
app.use("/login", loginRoutes);
app.use("/contacts", contactsRoutes);

app.use(handleErrors);

export default app;
