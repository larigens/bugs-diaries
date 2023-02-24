const Sequelize = require("sequelize"); // to connect to the MySQL database.
require("dotenv").config(); // to use environment variables.

// Creates a connection object.
const sequelize = process.env.JAWSDB_URL
  ? new Sequelize(process.env.JAWSDB_URL)
  : new Sequelize(
      process.env.DB_NAME,
      process.env.DB_USER,
      process.env.DB_PASSWORD,
      {
        host: "localhost",
        dialect: "mysql",
        port: 3306,
        dialectOptions: {
          decimalNumbers: true,
        },
      }
    );

module.exports = sequelize;