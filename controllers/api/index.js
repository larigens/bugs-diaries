const router = require('express').Router();
const userRoutes = require('./user-routes');
const postsRoutes = require('./posts-routes');
const diariesRoutes = require('./diaries-routes');
const commentsRotes = require('./comments-routes');

router.use('/users', userRoutes);
router.use('/posts', postsRoutes);
router.use('/diaries', diariesRoutes);
router.use('/comments', commentsRotes);

module.exports = router;
