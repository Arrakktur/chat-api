import { Column, DataType, Model, Table } from "sequelize-typescript";

interface MessageCreationAttrs {
  id_chat: number,
  id_user: number,
  text: string,
}

@Table({ tableName: "messages" })
export class Message extends Model<Message, MessageCreationAttrs> {
  @Column({ type: DataType.INTEGER, unique: true, autoIncrement: true, primaryKey: true })
  id: number;
  @Column({ type: DataType.INTEGER, unique: true })
  id_chat: number;
  @Column({ type: DataType.STRING, unique: true, allowNull: false })
  date: string;
  @Column({ type: DataType.INTEGER, unique: true })
  id_user: string;
  @Column({ type: DataType.STRING, unique: true, allowNull: false })
  text: string;
}