import { Column, DataType, Model, Table } from "sequelize-typescript";

interface RosterCreationAttrs {
  id_chat: number,
  id_user: number,
}

@Table({ tableName: "roster" })
export class Roster extends Model<Roster, RosterCreationAttrs> {
  @Column({ type: DataType.INTEGER, unique: true })
  id_chat: number;
  @Column({ type: DataType.INTEGER, unique: true })
  id_user: number;
}