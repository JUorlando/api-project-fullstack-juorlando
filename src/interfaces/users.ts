import { z } from "zod";
import { usersSchema, usersSchemaReturn } from "../schemas/users";

type IUsers = z.infer<typeof usersSchema>;

type IUsersReturn = z.infer<typeof usersSchemaReturn>;

export { IUsers, IUsersReturn };
