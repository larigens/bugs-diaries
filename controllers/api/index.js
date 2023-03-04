const router = require('express').Router();
// Imports sets of routes:
const userRoutes = require('./user-routes');
const postsRoutes = require('./posts-routes');
const diariesRoutes = require('./diaries-routes');
const commentsRotes = require('./comments-routes');

// Uses the router to define the routes.
router.use('/users', userRoutes);
router.use('/posts', postsRoutes);
router.use('/diaries', diariesRoutes);
router.use('/comments', commentsRotes);

module.exports = router;
