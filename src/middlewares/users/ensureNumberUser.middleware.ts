import { User } from "../../entities";
import { AppError } from "../../errors";
import { Repository } from "typeorm";
import { Request, Response, NextFunction } from "express";
import { AppDataSource } from "../../data-source";

async function ensureNumberUser(
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> {
  const usersRepo: Repository<User> = AppDataSource.getRepository(User);

  if (req.body.phone) {
    const searchPhone = await usersRepo.findOne({
      where: {
        phone: req.body.phone,
      },
    });

    if (searchPhone) {
      throw new AppError("Number already exists", 409);
    }
  }

  return next();
}

export { ensureNumberUser };
