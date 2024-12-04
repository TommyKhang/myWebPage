const { DataTypes, Model } = require("sequelize");
const sequelize = require("../utilities/Database.js")

class User extends Model {}
User.init({
    userId: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
      field: 'user_id',
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: 'NA',
    },
    gender: {
      type: DataTypes.STRING,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: 'NA',
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: 'NA',
    },
    phoneNumber: {
      type: DataTypes.BIGINT,
      field: 'phone_number',
    },
    dateOfBirth: {
      type: DataTypes.DATEONLY,
      field: 'date_of_birth',
    },
    address: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: 'NA',
    },
    tier: {
      // type: DataTypes.ENUM('bronze', 'silver', 'gold', 'platinum'),
      type: DataTypes.STRING
    },
  },
  {
    sequelize, // Pass the connection instance
    modelName: 'User', // Choose the model name
    tableName: 'users', // Specify the table name if needed
    timestamps: true,
  }
);
module.export = User;