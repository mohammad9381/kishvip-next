module.exports = (sequelize, DataTypes) => {
  const Product = sequelize.define(
    "product",
    {
      // Model attributes are defined here
      is_trashed: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      title: {
        type: DataTypes.STRING,
        // allowNull defaults to true
      },
      description: {
        type: DataTypes.STRING,
        // allowNull defaults to true
      },
      owner_name: {
        type: DataTypes.TEXT,
        // allowNull defaults to true
      },
      capacity: {
        type: DataTypes.INTEGER,
        // allowNull defaults to true
      },
      img_tmp: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      is_enable: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      addr: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      price: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      type: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      is_etebar: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      ticket_comment: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      ticket_logo: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      tel: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      mob: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      website: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      email: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      parent_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      createdAt: { type: DataTypes.DATE, field: "created" },
      updatedAt: { type: DataTypes.DATE, field: "updated" },
    },
    {
      tableName: "products",
    }
  );

  return Product;
};
