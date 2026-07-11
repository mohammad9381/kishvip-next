module.exports = (sequelize, DataTypes) => {
  const Payment = sequelize.define(
    "payment",
    {
      // Model attributes are defined here
      cellphone: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      total_price: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      track_id: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      gateway: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      status: {
        type: DataTypes.ENUM("send", "success", "fail", "return"),
        allowNull: true,
      },
      comment: {
        type: DataTypes.TEXT,
        allowNull: true,
      },

      uniq_code: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      paidAt: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      amount: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      result: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      status_zibal: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      message: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      statusMessage: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      invoice_id: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      createdAt: { type: DataTypes.DATE, field: "created" },
      updatedAt: { type: DataTypes.DATE, field: "updated" },
    },
    {
      tableName: "payment",
    }
  );

  return Payment;
};
