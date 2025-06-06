module.exports = (sequelize, DataTypes) => {
  const Service = sequelize.define(
    "service",
    {
      // Model attributes are defined here
      eventCategory: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      title: {
        type: DataTypes.STRING,
        // allowNull defaults to true
      },
      serviceUniqueId: {
        type: DataTypes.STRING,
        // allowNull defaults to true
      },
      description: {
        type: DataTypes.TEXT,
        // allowNull defaults to true
      },
      rules: {
        type: DataTypes.TEXT,
        // allowNull defaults to true
      },
      coverImage: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      gallery: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      isManifestNeeded: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      isManifestUniqueNumberNeeded: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      enumEventCategory: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      stateCode: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      CityCode: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      price: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      priceDiscount: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      is_trashed: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      createdAt: { type: DataTypes.DATE, field: "created" },
      updatedAt: { type: DataTypes.DATE, field: "updated" },
    },
    {
      tableName: "services",
    }
  );

  return Service;
};
