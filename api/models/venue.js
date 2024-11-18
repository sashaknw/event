const { DataTypes } = require("sequelize");
const { sequelize } = require("../../database");

const Venue = sequelize.define(
  "Venue",
  {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    }
  },
  {
    timestamps: false,
  }
);

module.exports = Venue;
