// Initialize Packages
const express = require('express');
const bodyParser = require('body-parser');
const session = require('express-session');
const exphbs = require('express-handlebars');
const sequelize = require('./config/connection'); // Imports sequelize connection.
// Create a new sequelize store using the express-session package
const SequelizeStore = require('connect-session-sequelize')(session.Store);
const path = require('path');


const PORT = process.env.PORT || 5500;
const app = express();
const hbs = exphbs.create({
  layoutsDir: __dirname + '/views/layouts',
  extname: 'hbs', // Changes the extension of the files to hbs.
});

const sess = {
  secret: 'session_cookie_secret',
  cookie: {},
  resave: false,
  saveUninitialized: false,
  store: new SequelizeStore({
    db: sequelize,
  })
}

// Define the middleware.
app.use(session(sess)) // Stores user data between HTTP requests. It creates a new session for the user and assigns them a cookie. 
// Parsing the incoming request bodies in a middleware before you handle it.
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(express.urlencoded({ extended: true }));
// Serve static files. 
app.use(express.static(path.join(__dirname, 'public')));

app.set('view engine', 'hbs'); // Set Handlebars as the default template engine.
app.engine('hbs', hbs.engine); // Sets handlebars configurations.

// Turn on routes.
// app.use(routes);

// Syncs sequelize models to the database, then starts the Express.js server.
sequelize.sync({ force: false }).then(() => {
  // Force false so data doesn't get dropped on every sync.
  app.listen(PORT, () => console.log(`Now listening on Port ${PORT} 🐾`));
});
