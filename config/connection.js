const Sequelize = require("sequelize"); // To connect to the MySQL database.
require("dotenv").config(); // To use environment variables.

// Creates a connection object.
const sequelize = process.env.JAWSDB_URL
  ? new Sequelize(process.env.JAWSDB_URL) // If process.env.JAWSDB_URL exists (if the app is running on Heroku).
  // Otherwise it will use the environment variables to connect to the local MySQL server.
  : new Sequelize(
    process.env.DB_NAME,
    process.env.DB_USER,
    process.env.DB_PASSWORD,
    {
      host: "localhost",
      dialect: "mysql",
      port: 3306,
    }
  );

// Exports the sequelize object so that it can be used in other parts of the application.
module.exports = sequelize;