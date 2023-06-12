import "express-async-errors";
import { handleErrors } from "./errors";
import express from "express";
import { loginRoutes } from "./routes/login";
import { usersRoutes } from "./routes/users";
import { contactsRoutes } from "./routes/contac";

const app = express();
app.use(express.json());

app.use("/users", usersRoutes);
app.use("/login", loginRoutes);
app.use("/contacts", contactsRoutes);

app.use(handleErrors);

export default app;
