const router = require('express').Router(); // Imports the Router object from the express module.
// Imports two sets of routes:
const apiRoutes = require('./api');
const homeRoutes = require('./home-routes.js');

// Uses the router to define the routes.
router.use('/', homeRoutes); // Handles requests for the root URL path '/'.
router.use('/api', apiRoutes); // Prefix all routes defined in the api directory with `/api`.

// Exports the router so it can be used in the server.js.
module.exports = router;