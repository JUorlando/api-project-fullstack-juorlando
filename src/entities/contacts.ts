import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  ManyToOne,
} from "typeorm";
import { User } from "./users";

@Entity("contacts")
class Contacts {
  @PrimaryGeneratedColumn("increment")
  id: number;

  @Column({ length: 120 })
  name: string;

  @Column({ length: 60, unique: true })
  email: string;

  @Column({ length: 13, unique: true })
  phone: string;

  @CreateDateColumn({ type: "date" })
  createdAt: string;

  @ManyToOne(() => User, (user) => user.contacts)
  user: User;
}

export { Contacts };
