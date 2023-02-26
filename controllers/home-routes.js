const router = require('express').Router();
const { Post, User, Diary } = require('../models');
const withAuth = require('../utils/auth');

// // GET all diaries for homepage.
router.get('/', async (req, res) => {
    try {
        const diaryData = await Diary.findAll({
            include: [
                {
                    model: Post,
                    as: 'posts',
                    through: { attributes: [] } // This will exclude the PostDiary join table attributes from the query result.
                },
            ],
        });
        const diaries = diaryData.map((diary) => diary.get({ plain: true }));
        res.render('homepage', { diaries, logged_in: req.session.logged_in });
    } catch (err) { res.status(500).json(err) }
});

// Get all diaries with more details for users who are logged in.
router.get('/diaries', withAuth, async (req, res) => {
    try {
        const diariesData = await Diary.findAll({
            include: [
                { model: Post, as: 'posts', through: { attributes: [] }, include: [{ model: User }] }
            ],
        });
        const diaries = diariesData.map((diary) => {
            const diaryObj = diary.get({ plain: true });
            const username = diaryObj.posts[0].user.username; // Extract the username from the first Post object associated with each Diary.
            return { ...diaryObj, username: username }; // Creates and return a new object with the same properties as the original Diary object, but with an additional username property that contains the extracted username value. 
        });
        res.render('diaries', { diaries, logged_in: req.session.logged_in });
    } catch (err) { res.status(500).json(err) }
});

// GET one diary.
router.get('/diaries/:id', withAuth, async (req, res) => {
    try {
        const diaryData = await Diary.findByPk(req.params.id, {
            include: [
                { model: Post, as: 'posts', through: { attributes: [] }, include: [{ model: User }] }
            ],
        });
        if (!diaryData) {
            res.status(404).json({ message: "Diary not found!!" });
            return;
        }
        const diary = diaryData.get({ plain: true });
        res.render('diary', { diary, logged_in: req.session.logged_in });
    } catch (err) { res.status(500).json(err) }
});

// GET one post.
router.get('/post/:id', withAuth, async (req, res) => {
    try {
        const postData = await Post.findByPk(req.params.id, {
            include: [{ model: User, attributes: ['username'] }],
        });
        if (!postData) {
            res.status(404).json({ message: "Post not found!!" });
            return;
        }
        const post = postData.get({ plain: true });
        console.log(post)
        res.render('post', { post, logged_in: req.session.logged_in });
    } catch (err) { res.status(500).json(err) }
});

// GET Route for signup page.
router.get('/signup', async (req, res) => {
    try {
        console.info(`${req.method} request received for ${req.path}`); // Logs the request to the terminal.
        res.render('signup');
    } catch (err) { res.status(500).json(err) }
});

// GET Route for login page.
router.get('/login', async (req, res) => {
    try {
        console.info(`${req.method} request received for ${req.path}`); // Logs the request to the terminal.
        res.render('login');
    } catch (err) { res.status(500).json(err) }
});

// GET Route for dashboard page.
router.get('/dashboard', withAuth, async (req, res) => {
    try {
        // Logs the request to the terminal.
        console.info(`${req.method} request received for ${req.path}`);
        res.render('dashboard', { logged_in: req.session.logged_in });
    } catch (err) { res.status(500).json(err) }
});

// GET Route for logout page.
router.get('/logout', async (req, res) => {
    try {
        // Destroys the session.
        req.session.destroy(err => { err ? res.status(500).send('Error') : res.redirect('/') });
    } catch (err) { res.status(500).json(err) }
});

module.exports = router;
