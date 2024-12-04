const { DataTypes, Model } = require('sequelize');

module.exports = (sequelize) => {
  class Employee extends Model {}
  Employee.init(
    {
      EmployeeID: {
        type: DataTypes.BIGINT,
        autoIncrement: true,
        primaryKey: true,
        field: 'employee_id',
      },
      EmployeeName: {
        type: DataTypes.STRING,
        allowNull: false,
        defaultValue: 'NA',
        field: 'employee_name',
      },
      EmployeeRole: {
        type: DataTypes.STRING,
        allowNull: false,
        defaultValue: 'NA',
        field: 'employee_role',
      },
    },
    {
      sequelize,
      modelName: 'Employee',
      tableName: 'Employees',
      timestamps: false,
    }
  );
  return Employee;
};
