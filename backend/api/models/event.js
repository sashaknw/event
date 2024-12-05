const { DataTypes } = require("sequelize");
const { sequelize } = require("../../database");

const Event = sequelize.define(
  "Event",
  {
    
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    date_time: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    image_path: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    timestamps: false,
  }
);

module.exports = Event;
