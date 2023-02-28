// Imports important parts of Sequelize library.
const { Model, DataTypes } = require("sequelize");
// Imports the database connection.
const sequelize = require("../config/connection");

// Initialize postDiary model (table) by extending off Sequelize's Model class.
class postDiary extends Model { }
// Set up fields and rules for postDiary model.
postDiary.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    post_id: {
      type: DataTypes.INTEGER,
      references: {
        model: "post",
        key: "id",
      },
    },
    diary_id: {
      type: DataTypes.INTEGER,
      references: {
        model: "diary",
        key: "id",
      },
    },
  },
  {
    sequelize, // Links to database connection.
    timestamps: true, // Set to true to remove `created_at` and `updated_at` fields.
    freezeTableName: true, // Prevents sequelize from renaming the table.
    underscored: true, // Makes all variables that have 2 names to be separated by an underscore.
    modelName: "post_diary",
  }
);

module.exports = postDiary;