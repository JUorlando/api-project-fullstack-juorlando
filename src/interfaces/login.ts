import { loginSchema } from "../schemas/login";
import { z } from "zod";

type ILogin = z.infer<typeof loginSchema>;

export { ILogin };
