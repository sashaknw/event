
const { DataTypes } = require("sequelize");
const { sequelize } = require("../../database");

const User = sequelize.define(
  "User",
  {
    username: {
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
      type: DataTypes.ENUM("Member", "Admin"),
      defaultValue: "Member",
    },
  },
  { timestamps: false }
);

module.exports = User;