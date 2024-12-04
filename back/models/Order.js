const { DataTypes, Model } = require('sequelize');

module.exports = (sequelize) => {
  class Order extends Model {}
  Order.init(
    {
      OrderId: {
        type: DataTypes.BIGINT,
        autoIncrement: true,
        primaryKey: true,
        field: 'order_id',
      },
      OrderDate: {
        type: DataTypes.DATE,
        field: 'order_date',
      },
      OrderStatus: {
        // type: DataTypes.ENUM('pending', 'processing', 'completed', 'cancelled'),
        type: DataTypes.STRING,
        field: 'order_status',
      },
      CustomerID: {
        type: DataTypes.BIGINT,
        field: 'customer_id',
        references: {
          model: 'Customers', //thế lại tên customer table 
          key: 'customer_id',
        },
      },
    },
    {
      sequelize,
      modelName: 'Order',
      tableName: 'Orders',
      timestamps: false,
    }
  );
  return Order;
};
