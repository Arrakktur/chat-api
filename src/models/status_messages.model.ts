import { Column, DataType, Model, Table } from "sequelize-typescript";

interface StatusMessagesCreationAttrs {
  id_message: number,
  id_user: number,
  isRead: boolean,
  isNotified: boolean,
}

@Table({ tableName: "status_messages" })
export class StatusMessage extends Model<StatusMessage, StatusMessagesCreationAttrs> {
  @Column({ type: DataType.INTEGER, unique: true })
  id_message: number;
  @Column({ type: DataType.INTEGER, unique: true })
  id_user: number;
  @Column({ type: DataType.BOOLEAN, unique: true })
  isRead: boolean;
  @Column({ type: DataType.BOOLEAN, unique: true })
  isNotified: boolean;
}