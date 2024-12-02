const { DataTypes } = require("sequelize");
const { sequelize } = require("../../database/index");

const Artist = sequelize.define(
  "Artist",
  {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    description: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    timestamps: false,
  }
);

module.exports = Artist;
