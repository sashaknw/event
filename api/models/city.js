const { DataTypes } = require("sequelize");
const { sequelize } = require("../../database");

const City = sequelize.define(
    "City",
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

module.exports = City;