const { DataTypes } = require("sequelize");
const { sequelize } = require("../../database");

const Style = sequelize.define(
  "Style",
  {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    
  },
  {
    timestamps: false,
  }
);

module.exports = Style;
