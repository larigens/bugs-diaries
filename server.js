const path = require('path');
const express = require('express'); // Framework for Node.js.
const session = require('express-session'); // Package to add authentication.
const exphbs = require('express-handlebars'); // View Engine.
const routes = require('./controllers'); // Import routes.
const sequelize = require('./config/connection'); // Imports sequelize connection.
// Create a new sequelize store using the express-session package.
const SequelizeStore = require('connect-session-sequelize')(session.Store);
const helpers = require('./utils/auth'); // Import the custom helper methods.
require("dotenv").config(); // To use environment variables.

const app = express();
const PORT = process.env.PORT || 5500;

const hbs = exphbs.create({
  helpers, // Incorporate the custom helper methods.
  layoutsDir: __dirname + '/views/layouts',
  partialsDir: __dirname + '/views/partials',
  extname: 'hbs', // Changes the extension of the files to hbs.
});

// Set up session middleware.
const sess = {
  secret: process.env.SESSION_SECRET,
  cookie: {},
  resave: false,
  saveUninitialized: false,
  store: new SequelizeStore({
    db: sequelize,
  })
}

// Define the middleware.
app.use(session(sess)) // Stores user data between HTTP requests. It creates a new session for the user and assigns them a cookie. 

app.set('view engine', 'hbs'); // Set Handlebars as the default template engine.
app.engine('hbs', hbs.engine); // Sets handlebars configurations.

app.use(express.json()); // Parsing the incoming request bodies in a middleware before you handle it.
app.use(express.urlencoded({ extended: true })); // Allows for rich objects and arrays to be encoded into the URL-encoded format.
app.use(express.static(path.join(__dirname, 'public'))); // Serve static files. 

// Turn on routes.
app.use(routes);

// Syncs sequelize models to the database, then starts the Express.js server.
sequelize.sync({ force: false }).then(() => {
  // Force false so data doesn't get dropped on every sync.
  app.listen(PORT, () => console.log(`Now listening on Port ${PORT} 🐾`));
});
