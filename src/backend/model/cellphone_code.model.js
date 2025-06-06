module.exports = (sequelize, DataTypes) => {
  const Cellphone_code = sequelize.define(
    "cellphone_code",
    {
      // Model attributes are defined here
      cellphone: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      code: {
        type: DataTypes.INTEGER,
        // allowNull defaults to true
      },
      is_used: {
        type: DataTypes.STRING,
        // allowNull defaults to true
      },
      createdAt: { type: DataTypes.DATE, field: "created" },
      updatedAt: { type: DataTypes.DATE, field: "updated" },
    },
    {
      tableName: "cellphone_code",
    }
  );

  return Cellphone_code;
};
