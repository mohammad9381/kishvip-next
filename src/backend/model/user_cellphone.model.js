module.exports = (sequelize, DataTypes) => {
  const User_cllphone = sequelize.define(
    "user_cellphone",
    {
      // Model attributes are defined here
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      cellphone: {
        type: DataTypes.STRING,
        // allowNull defaults to true
      },
      createdAt: { type: DataTypes.DATE, field: "created" },
      updatedAt: { type: DataTypes.DATE, field: "modified" },
    },
    {
      tableName: "user_cellphone",
    }
  );

  return User_cllphone;
};
