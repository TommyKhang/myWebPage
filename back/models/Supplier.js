const { DataTypes, Model } = require('sequelize');

module.exports = (sequelize) => {
  class Supplier extends Model {}
  Supplier.init(
    {
      SupplierId: {
        type: DataTypes.BIGINT,
        autoIncrement: true,
        primaryKey: true,
        field: 'supplier_id',
      },
      SupplierName: {
        type: DataTypes.STRING,
        allowNull: false,
        defaultValue: 'NA',
        field: 'supplier_name',
      },
      SupplierContact: {
        type: DataTypes.BIGINT,
        allowNull: false,
        defaultValue: 'NA',
        field: 'supplier_contact',
      },
    },
    {
      sequelize,
      modelName: 'Supplier',
      tableName: 'Suppliers',
      timestamps: false,
    }
  );
  return Supplier;
};
