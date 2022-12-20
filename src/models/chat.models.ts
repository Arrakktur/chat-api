import { Column, DataType, Model, Table } from "sequelize-typescript";

interface ChatCreationAttrs {
  name: string,
  id_user: number,
}

@Table({ tableName: "chats" })
export class Chat extends Model<Chat, ChatCreationAttrs> {
  @Column({ type: DataType.INTEGER, unique: true, autoIncrement: true, primaryKey: true })
  id: number;
  @Column({ type: DataType.STRING, unique: true, allowNull: false })
  title: string;
  @Column({ type: DataType.INTEGER, unique: true })
  id_user: string;
  @Column({ type: DataType.STRING })
  lastMessage: string;
  @Column({ type: DataType.STRING })
  avatar: string;
}