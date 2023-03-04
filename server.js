const path = require('path');
const express = require('express'); // Framework for Node.js.
const session = require('express-session'); // Package to add authentication.
const exphbs = require('express-handlebars'); // View Engine.
const handlebars = require('handlebars'); // View Engine.
const routes = require('./controllers'); // Import routes.
const sequelize = require('./config/connection'); // Imports sequelize connection.
// Create a new sequelize store using the express-session package.
const SequelizeStore = require('connect-session-sequelize')(session.Store);
const resetSessionTimeout = require('./utils/timeout'); // Imports middleware function.
require("dotenv").config(); // To use environment variables.

const app = express();
const PORT = process.env.PORT || 5500;

const hbs = exphbs.create({
  handlebars: handlebars,
  layoutsDir: __dirname + '/views/layouts',
  partialsDir: __dirname + '/views/partials',
  extname: 'hbs', // Changes the extension of the files to hbs.
});

// Register a helper function to replace newlines with <br> tags.
handlebars.registerHelper('breaklines', function (text) {
  text = handlebars.Utils.escapeExpression(text);
  text = text.replace(/(\r\n|\n|\r)/gm, '<br>');
  return new handlebars.SafeString(text);
});

// Set up session middleware.
const sess = {
  secret: process.env.SESSION_SECRET,
  cookie: { maxAge: 600 * 1000 }, // 10 min (in milliseconds).
  resave: false, // Implemented the touch method.
  saveUninitialized: false, // false is useful for implementing login sessions and reducing server storage usage.
  store: new SequelizeStore({ // Configure the session store.
    db: sequelize,
  })
}

app.set('view engine', 'hbs'); // Set Handlebars as the default template engine.
app.engine('hbs', hbs.engine); // Sets handlebars configurations.

// Define the middlewares.
app.use(session(sess)) // Stores user data between HTTP requests. It creates a new session for the user and assigns them a cookie. 
app.use(resetSessionTimeout); // This ensures that the session timeout is reset on each request, so the user is not logged out while they are active on the site.
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