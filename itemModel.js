const { DataTypes } = require("sequelize");
const { sequelize } = require("./conn");

const Item = sequelize.define("item", {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
}, {
    timestamps: false
});

module.exports = Item;