import { z } from "zod";
import {
  usersSchema,
  usersSchemaReturn,
  updateUsersSchema,
  retrieveUsersSchema,
} from "../schemas/users";

type IUsers = z.infer<typeof usersSchema>;
type IUsersReturn = z.infer<typeof usersSchemaReturn>;
type IupdateUsers = z.infer<typeof updateUsersSchema>;
type IretrieveUsers = z.infer<typeof retrieveUsersSchema>;

export { IUsers, IUsersReturn, IupdateUsers, IretrieveUsers };
