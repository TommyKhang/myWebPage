const { DataTypes, Model } = require('sequelize');

module.exports = (sequelize) => {
  class Admin extends Model {}
  Admin.init(
    {
      AdminID: {
        type: DataTypes.BIGINT,
        autoIncrement: true,
        primaryKey: true,
        field: 'admin_id',
      },
      AdminName: {
        type: DataTypes.STRING,
        allowNull: false,
        defaultValue: 'NA',
        field: 'admin_name',
      },
      AdminRole: {
        type: DataTypes.STRING,
        allowNull: false,
        defaultValue: 'NA',
        field: 'admin_role',
      },
    },
    {
      sequelize,
      modelName: 'Admin',
      tableName: 'Admins',
      timestamps: false,
    }
  );
  return Admin;
};
