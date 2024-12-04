const { DataTypes, Model } = require('sequelize');

module.exports = (sequelize) => {
  class Inventory extends Model {}
  Inventory.init(
    {
      FruitID: {
        type: DataTypes.BIGINT,
        primaryKey: true,
        field: 'fruit_id',
        references: {
          model: 'Fruits',
          key: 'fruit_id',
        },
      },
      FruitStock: {
        type: DataTypes.BIGINT,
        allowNull: false,
        defaultValue: 0,
        field: 'fruit_stock',
      },
    },
    {
      sequelize,
      modelName: 'Inventory',
      tableName: 'Inventories',
      timestamps: false,
    }
  );
  return Inventory;
};
    