import {
  Column,
  CreatedAt,
  DataType,
  DeletedAt,
  Model,
  Table,
  UpdatedAt,
  ForeignKey,
  HasMany,
} from 'sequelize-typescript';
import { Restaurant } from './restaurant.entity';

@Table({
  tableName: 'fooditem',
  timestamps: true,
})
export class FoodItem extends Model<FoodItem> {
  @Column({
    type: DataType.UUID,
    unique: true,
    primaryKey: true,
    defaultValue: DataType.UUIDV4,
  })
  id: string;

  @ForeignKey(() => Restaurant)
  @Column({
    type: DataType.UUID,
    allowNull: false,
  })
  restaurantId: string;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  foodtype: string;

  @HasMany(() => Restaurant)
  restaurant: Restaurant[];

  @CreatedAt
  createddate: Date;

  @UpdatedAt
  updateddate: Date;

  @DeletedAt
  deleteddate: Date;
}
