const { DataTypes, INTEGER } = require("sequelize");

module.exports = (sequelize) => {
  //se define el modelo
  sequelize.define(
    "Diet",
    {
      id: {
        type: INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false,
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    },
    {
      timestamps: false,
    }
  );
};
