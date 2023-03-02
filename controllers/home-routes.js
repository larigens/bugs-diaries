const router = require('express').Router();
const { Post, User, Diary, Comment } = require('../models');
const withAuth = require('../utils/auth');

// GET all diaries for homepage.
router.get('/', async (req, res) => {
    try {
        const postData = await Post.findAll({
            order: [['createdAt', 'DESC']],
            limit: 4,
            attributes: ['id', 'title', 'date']
        });
        const posts = postData.map((post) => post.get({ plain: true }));
        res.render('homepage', { posts, logged_in: req.session.logged_in });
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

// GET all of the user's post.
router.get('/posts', withAuth, async (req, res) => {
    try {
        const postData = await Post.findAll({ where: { user_id: req.session.user_id } });
        if (!postData) {
            res.status(404).json({ message: "Post not found!!" });
            return;
        }
        const posts = postData.map((post) => post.get({ plain: true }));
        res.render('posts', { posts, logged_in: req.session.logged_in });
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

        const commentData = await Comment.findAll({
            where: { post_id: req.params.id },
            include: [{ model: User, attributes: ['username'] }],
        })
        const comments = commentData.map((comment) => comment.get({ plain: true }));
        res.render('post', { post, comments, logged_in: req.session.logged_in });
    } catch (err) { res.status(500).json(err) }
});

// GET one post to edit.
router.get('/post/:id/editpost', withAuth, async (req, res) => {
    try {
        const postData = await Post.findByPk(req.params.id, {
            include: [{ model: User, attributes: ['username'] }],
        });
        const post = postData.get({ plain: true });
        res.render('editpost', { post, logged_in: req.session.logged_in });
    } catch (err) { res.status(500).json(err) }
});

// GET Route for newpost page.
router.get('/newpost', withAuth, async (req, res) => {
    try { res.render('newpost', { logged_in: req.session.logged_in }) }
    catch (err) { res.status(500).json(err) }
});

// GET Route for signup page.
router.get('/signup', async (req, res) => {
    try { res.render('signup') }
    catch (err) { res.status(500).json(err) }
});

// GET Route for login page.
router.get('/login', async (req, res) => {
    try { res.render('login') }
    catch (err) { res.status(500).json(err) }
});

// GET Route for dashboard page.
router.get('/dashboard', withAuth, async (req, res) => {
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
        res.render('dashboard', { diaries, logged_in: req.session.logged_in })
    }
    catch (err) { res.status(500).json(err) }
});

// GET Route for logout page.
router.get('/logout', async (req, res) => {
    try { req.session.destroy(err => { err ? res.status(500).send('Error') : res.redirect('/') }) }
    catch (err) { res.status(500).json(err) }
});

module.exports = router;
