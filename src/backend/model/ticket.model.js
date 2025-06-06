module.exports = (sequelize, DataTypes) => {
  const Ticket = sequelize.define(
    "ticket",
    {
      // Model attributes are defined here
      serviceUniqueId: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      sansUniqueId: {
        type: DataTypes.STRING,
        // allowNull defaults to true
      },
      licenseUniqueId: {
        type: DataTypes.STRING,
        // allowNull defaults to true
      },
      ticketTypeUniqueId: {
        type: DataTypes.STRING,
        // allowNull defaults to true
      },
      title: {
        type: DataTypes.STRING,
        // allowNull defaults to true
      },
      link: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      invoice_id: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      createdAt: { type: DataTypes.DATE, field: "created" },
      updatedAt: { type: DataTypes.DATE, field: "updated" },
    },
    {
      tableName: "ticket",
    }
  );

  return Ticket;
};
