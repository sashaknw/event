
const { DataTypes } = require("sequelize");
const { sequelize } = require("../../database");

const User = sequelize.define(
  "User",
  {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    role: {
      type: DataTypes.ENUM("User", "Admin", "Artist"),
      defaultValue: "User",
    },
  },
  { timestamps: false }
);

module.exports = User;