const { DataTypes, Model } = require('sequelize');

module.exports = (sequelize) => {
  class Payment extends Model {}
  Payment.init(
    {
      PaymentID: {
        type: DataTypes.BIGINT,
        autoIncrement: true,
        primaryKey: true,
        field: 'payment_id',
      },
      OrderID: {
        type: DataTypes.BIGINT,
        field: 'order_id',
        references: {
          model: 'Orders',
          key: 'order_id',
        },
      },
      PaymentDate: {
        type: DataTypes.DATE,
        field: 'payment_date',
      },
      PaymentAmount: {
        type: DataTypes.DECIMAL,
        field: 'payment_amount',
      },
    },
    {
      sequelize,
      modelName: 'Payment',
      tableName: 'Payments',
      timestamps: false,
    }
  );
  return Payment;
};
