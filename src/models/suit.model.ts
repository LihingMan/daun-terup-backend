import { Model, DataTypes } from "sequelize";
import { sequelize } from ".";

export interface SuitAttributes {
  id: number;
  suit: string;
}

class Suit extends Model<SuitAttributes> implements SuitAttributes {
  id!: number;
  suit!: string;

  static associate(models: any) {
    // define associations here
  }
}

Suit.init(
  {
    id: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      primaryKey: true,
    },
    suit: {
      type: DataTypes.STRING(10),
      allowNull: false,
    },
  },
  {
    sequelize,
    tableName: "suits",
  }
);

export default Suit;
