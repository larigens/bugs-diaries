const { Model, DataTypes } = require('sequelize'); // Imports important parts of Sequelize library.
const sequelize = require('../config/connection'); // Imports the database connection.

// Initialize Diary model (table) by extending off Sequelize's Model class.
class Diary extends Model { }

Diary.init(
    // Set up fields and rules for Diary model.
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        diary_name: {
            type: DataTypes.STRING,
            allowNull: false,
        }
    },
    {
        sequelize, // Links to database connection.
        timestamps: true, // Set to true to add `created_at` and `updated_at` fields.
        freezeTableName: true, // Prevents sequelize from renaming the table.
        underscored: true, // Makes all variables that have 2 names to be separated by an underscore.
        modelName: "diary",
    }
);

module.exports = Diary;