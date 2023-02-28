const { Model, DataTypes } = require('sequelize'); // Imports important parts of Sequelize library.
const sequelize = require('../config/connection'); // Imports the database connection.

// Initialize Comment model (table) by extending off Sequelize's Model class.
class Comment extends Model { }

Comment.init(
    // Set up fields and rules for Comment model.
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        comment: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        date: {
            type: DataTypes.DATEONLY,
            allowNull: false,
            defaultValue: DataTypes.NOW,
        },
        post_id: {
            type: DataTypes.INTEGER,
            references: {
                model: "post",
                key: "id",
            }
        },
        user_id: {
            type: DataTypes.INTEGER,
            references: {
                model: "user",
                key: "id",
            }
        },
    },
    {
        sequelize, // Links to database connection.
        timestamps: true, // Set to true to add `created_at` and `updated_at` fields.
        freezeTableName: true, // Prevents sequelize from renaming the table.
        underscored: true, // Makes all variables that have 2 names to be separated by an underscore.
        modelName: "comment",
    }
);

module.exports = Comment;