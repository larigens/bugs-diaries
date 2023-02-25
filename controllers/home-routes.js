const router = require('express').Router();
const { Post, User, Diary, PostDiary } = require('../models');
const withAuth = require('../utils/auth');

// // GET all diaries for homepage
router.get('/', async (req, res) => {
    try {
        const diaryData = await Diary.findAll({
            include: [
                {
                    model: Post,
                    as: 'posts',
                    through: { attributes: [] } // This will exclude the PostDiary join table attributes from the query result
                },
            ],
        });
        const diaries = diaryData.map((diary) =>
            diary.get({ plain: true })
        );
        res.render('homepage', {
            diaries,
            logged_in: req.session.logged_in,
        });
    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
});

// Get diary
router.get('/diary', async (req, res) => {
    try {
        const diariesData = await Diary.findAll({
            include: [
                {
                    model: Post,
                    as: 'posts',
                    through: { attributes: [] }, // This will exclude the PostDiary join table attributes from the query result
                    include: [{ model: User }]
                }
            ],
        });
        const diaries = diariesData.map((diary) => {
            const diaryObj = diary.get({ plain: true });
            const username = diaryObj.posts[0].user.username;
            return { ...diaryObj, user_id: username };
        });
        res.render('diary', {
            diaries,
            logged_in: req.session.logged_in,
        });
    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
});

// GET one diary
router.get('/diary/:id', withAuth, async (req, res) => {
    try {
        const diaryData = await Diary.findByPk(req.params.id, {
            include: [
                {
                    model: Post,
                    attributes: ['title', 'content', 'date'],
                },
                {
                    model: User,
                    attributes: ['username'],
                },
            ],
        });
        const diaries = diaryData.get({ plain: true });
        res.render('diary', { diaries });
    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
});

router.get('/post', async (req, res) => {
    try {
        const postData = await Post.findAll({
            include: [
                {
                    model: User,
                    attributes: ['username'],
                },
                {
                    model: Diary,
                    attributes: ['name'],
                },
            ],
        });
        const posts = postData.map((post) =>
            post.get({ plain: true }),
        );
        res.render('post', {
            posts,
            logged_in: req.session.logged_in,
        });
    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
});

// GET one post
router.get('/post/:id', withAuth, async (req, res) => {
    try {
        const postData = await Post.findByPk(req.params.id);
        const posts = postData.get({ plain: true });
        const user = await User.findByPk({
            attributes: {
                include: [[sequelize.literal(
                    `(SELECT username FROM user WHERE id = ${postData.user_id})`
                ), 'username']]
            }
        })
        res.render('post', { posts, user });
    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
});

// GET Route for signup page.
router.get('/signup', async (req, res) => {
    try {
        // Logs the request to the terminal.
        console.info(`${req.method} request received for ${req.path}`);
        res.render('signup');
    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
});

// GET Route for login page.
router.get('/login', async (req, res) => {
    try {
        // Logs the request to the terminal.
        console.info(`${req.method} request received for ${req.path}`);
        // If the user is already logged in.
        if (req.session.logged_in) {
            res.redirect('/');
            return;
        }
        else {
            res.render('login');
        }
    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
});

// GET Route for dashboard page.
router.get('/dashboard', withAuth, async (req, res) => {
    try {
        // Logs the request to the terminal.
        console.info(`${req.method} request received for ${req.path}`);
        res.render('dashboard', {
            logged_in: req.session.logged_in,
        });
    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
});

// GET Route for logout page.
router.get('/logout', async (req, res) => {
    try {
        req.session.destroy(function (err) {
            res.redirect('/');
        });
    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
});

module.exports = router;
