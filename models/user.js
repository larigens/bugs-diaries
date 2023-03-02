const { Model, DataTypes } = require('sequelize'); // Imports important parts of Sequelize library.
const bcrypt = require('bcrypt'); // to hash passwords.
const sequelize = require('../config/connection'); // Imports the database connection.

// Initialize User model (table) by extending off Sequelize's Model class.
class User extends Model {
    validatePassword(loginData) {
        return bcrypt.compareSync(loginData, this.password);
    }
}

User.init(
    // Set up fields and rules for User model.
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        username: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [8],
            },
        },
    },
    {
        hooks: {
            beforeCreate: async (newUserData) => {
                newUserData.password = await bcrypt.hash(newUserData.password, 10);
                return newUserData;
            },
        },
        sequelize, // Links to database connection.
        timestamps: true, // Set to true to add `created_at` and `updated_at` fields.
        freezeTableName: true, // Prevents sequelize from renaming the table.
        underscored: true, // Makes all variables that have 2 names to be separated by an underscore.
        modelName: 'user',
    }
);

module.exports = User;
