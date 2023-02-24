const router = require('express').Router();
const { Post, User } = require('../models');
const withAuth = require('../utils/auth');

// // GET Route for home page.
router.get('/', async (req, res) => {
    try {
        // Logs the request to the terminal.
        console.info(`${req.method} request received for ${req.path}`);
        res.render('homepage');
    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
});

// // GET all posts for homepage
// router.get('/', async (req, res) => {
//     try {
//         const postsData = await Post.findAll({
//             include: [
//                 {
//                     model: User,
//                     attributes: ['username'],
//                 },
//             ],
//         });

//         const posts = postsData.map((post) =>
//             post.get({ plain: true })
//         );

//         res.render('homepage', {
//             posts,
//             loggedIn: req.session.loggedIn,
//         });
//     } catch (err) {
//         console.log(err);
//         res.status(500).json(err);
//     }
// });

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
        res.render('dashboard');
    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
});

module.exports = router;
