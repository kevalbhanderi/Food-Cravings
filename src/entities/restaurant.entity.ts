import {
  Column,
  CreatedAt,
  DataType,
  DeletedAt,
  Model,
  Table,
  UpdatedAt,
} from 'sequelize-typescript';

@Table({
  tableName: 'restaurant',
  timestamps: true,
})
export class Restaurant extends Model<Restaurant> {
  @Column({
    type: DataType.UUID,
    unique: true,
    primaryKey: true,
    defaultValue: DataType.UUIDV4,
  })
  id: string;

  @Column({
    type: DataType.STRING(255),
    allowNull: false,
  })
  restaurantname: string;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  foodtype: string;

  @CreatedAt
  createddate: Date;

  @UpdatedAt
  updateddate: Date;

  @DeletedAt
  deleteddate: Date;
}
