import { Column, DataType, Model, Table } from "sequelize-typescript";

interface UserCreationAttrs {
  login: string;
  password: string;
  name: string;
  lastEnter: string;
}

@Table({ tableName: "users" })
export class User extends Model<User, UserCreationAttrs> {
  @Column({ type: DataType.INTEGER, unique: true, autoIncrement: true, primaryKey: true })
  id: number;
  @Column({ type: DataType.STRING, unique: true, allowNull: false })
  name: string;
  @Column({ type: DataType.STRING, allowNull: true })
  lastEnter: string;
  @Column({ type: DataType.STRING, unique: true, allowNull: false })
  login: string;
  @Column({ type: DataType.STRING, allowNull: false })
  password: string;
  @Column({ type: DataType.STRING, unique: true })
  token: string;
}