import { Contacts } from "../../entities";
import { AppError } from "../../errors";
import { Repository } from "typeorm";
import { Request, Response, NextFunction } from "express";
import { AppDataSource } from "../../data-source";

async function ensureNumberContact(
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> {
  const contactRepo: Repository<Contacts> =
    AppDataSource.getRepository(Contacts);

  if (req.body.phone) {
    const searchPhone = await contactRepo.findOne({
      where: {
        phone: req.body.phone,
      },
    });

    if (searchPhone) {
      throw new AppError("Phone already exists", 409);
    }
  }

  return next();
}

export { ensureNumberContact };
