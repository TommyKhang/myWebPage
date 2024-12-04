const { DataTypes, Model } = require('sequelize');

module.exports = (sequelize) => {
  class Fruit extends Model {}
  Fruit.init(
    {
      FruitId: {
        type: DataTypes.BIGINT,
        autoIncrement: true,
        primaryKey: true,
        field: 'fruit_id',
      },
      FruitName: {
        type: DataTypes.STRING,
        allowNull: false,
        defaultValue: 'NA',
        field: 'fruit_name',
      },
      FruitStock: {
        type: DataTypes.BIGINT,
        allowNull: false,
        defaultValue: 0,
        field: 'fruit_stock',
      },
      FruitPrice: {
        type: DataTypes.DECIMAL,
        allowNull: false,
        defaultValue: 0,
        field: 'fruit_price',
      },
      SupplierID: {
        type: DataTypes.BIGINT,
        field: 'supplier_id',
        references: {
          model: 'Suppliers', 
          key: 'supplier_id', 
        },
      },
    },
    {
      sequelize,
      modelName: 'Fruit',
      tableName: 'Fruits',
      timestamps: false,
    }
  );
  return Fruit;
};
