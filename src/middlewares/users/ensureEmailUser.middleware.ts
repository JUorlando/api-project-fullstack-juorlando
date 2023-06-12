import { User } from "../../entities";
import { AppError } from "../../errors";
import { Repository } from "typeorm";
import { Request, Response, NextFunction } from "express";
import { AppDataSource } from "../../data-source";

async function ensureEmailUser(
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> {
  const usersRepo: Repository<User> = AppDataSource.getRepository(User);

  if (req.body.email) {
    const searchEmail = await usersRepo.findOne({
      where: {
        email: req.body.email,
      },
    });

    if (searchEmail) {
      throw new AppError("Email already exists", 409);
    }
  }

  return next();
}

export { ensureEmailUser };
