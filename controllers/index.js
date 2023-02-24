const router = require('express').Router();

const apiRoutes = require('./api');
const homeRoutes = require('./home-routes.js');

// Prefix all routes defined in the api directory with `/api`.
router.use('/', homeRoutes);
router.use('/api', apiRoutes);

module.exports = router;