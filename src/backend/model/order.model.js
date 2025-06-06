module.exports = (sequelize, DataTypes) => {
  const Order = sequelize.define(
    "order",
    {
      // Model attributes are defined here
      is_trashed: {
        type: DataTypes.INTEGER,
      },
      product_parent_id: {
        type: DataTypes.INTEGER,
        // allowNull defaults to true
      },
      product_id: {
        type: DataTypes.INTEGER,
        // allowNull defaults to true
      },
      user_id: {
        type: DataTypes.INTEGER,
        // allowNull defaults to true
      },
      forosh: {
        type: DataTypes.TEXT,
        // allowNull defaults to true
      },
      address_mahal: {
        type: DataTypes.TEXT,
        // allowNull defaults to true
      },
      tamas: {
        type: DataTypes.TEXT,
        // allowNull defaults to true
      },
      tedad: {
        type: DataTypes.INTEGER,
        // allowNull defaults to true
      },
      name_mehman: {
        type: DataTypes.STRING,
      },
      mob: {
        type: DataTypes.INTEGER,
      },
      date_mehman: {
        type: DataTypes.STRING,
      },
      uniq_code: {
        type: DataTypes.STRING,
      },
      canceler: {
        type: DataTypes.STRING,
      },
      cancel_detail: {
        type: DataTypes.STRING,
      },
      is_enable: {
        type: DataTypes.INTEGER,
      },
      ticket_num: {
        type: DataTypes.STRING,
      },
      parent_id: {
        type: DataTypes.INTEGER,
      },
      price: {
        type: DataTypes.STRING,
      },
      date_visit: {
        type: DataTypes.STRING,
      },
      visit_comment: {
        type: DataTypes.STRING,
      },
      comment: {
        type: DataTypes.STRING,
      },
      description: {
        type: DataTypes.STRING,
      },
      is_del: {
        type: DataTypes.INTEGER,
      },
      is_visit: {
        type: DataTypes.INTEGER,
      },
      is_online: {
        type: DataTypes.INTEGER,
      },
      is_transfer: {
        type: DataTypes.INTEGER,
      },
      forosh_id: {
        type: DataTypes.INTEGER,
      },
      createdAt: { type: DataTypes.DATE, field: "created" },
      updatedAt: { type: DataTypes.DATE, field: "updated" },
    },
    {
      tableName: "orders",
    }
  );

  return Order;
};
