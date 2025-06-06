module.exports = (sequelize, DataTypes) => {
  const Invoice = sequelize.define(
    "invoice",
    {
      // Model attributes are defined here
      fullname: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      cellphone: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      licenseUniqueId: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      sansUniqueId: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      ticketTypeUniqueId: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      number: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      tempBookingReference: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      expireDateTime: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      expireDateTimeUTC: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      tempShoppingCartUniqueId: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      status: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      bookingReference: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      price: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      total_price: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      ticketsLink: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      eventsTickets: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      serviceUniqueId: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      createdAt: { type: DataTypes.DATE, field: "created" },
      updatedAt: { type: DataTypes.DATE, field: "updated" },
    },
    {
      tableName: "invoice",
    }
  );

  return Invoice;
};
