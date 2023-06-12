import { Contacts } from "../../entities";
import { AppError } from "../../errors";
import { Repository } from "typeorm";
import { Request, Response, NextFunction } from "express";
import { AppDataSource } from "../../data-source";

async function ensureEmailContact(
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> {
  const contactRepo: Repository<Contacts> =
    AppDataSource.getRepository(Contacts);

  if (req.body.email) {
    const searchEmail = await contactRepo.findOne({
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

export { ensureEmailContact };
