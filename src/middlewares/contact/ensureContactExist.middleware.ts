import { Request, Response, NextFunction } from "express";
import { Repository } from "typeorm";
import { AppDataSource } from "../../data-source";
import { Contacts } from "../../entities";
import { AppError } from "../../errors";

const ensureContactExists = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  const contactRepository: Repository<Contacts> =
    AppDataSource.getRepository(Contacts);

  const findContact = await contactRepository.findOne({
    where: {
      id: parseInt(req.params.id),
    },
  });
  if (!findContact) {
    throw new AppError("Contact not found", 404);
  }

  return next();
};

export { ensureContactExists };
