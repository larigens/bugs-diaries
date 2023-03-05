const router = require('express').Router(); // Returns a new router object that can be used to handle HTTP requests.
const { Post, User, Diary, Comment } = require('../models'); // Imports model objects.
const withAuth = require('../utils/auth'); // Imports custom middleware function for authentication.

// GET request handler for the homepage
router.get('/', async (req, res) => {
    // Asynchronous function that will attempt to retrieve the most recent 4 posts.
    try {
        const postData = await Post.findAll({
            order: [['createdAt', 'DESC']], // Specifies that the results should be ordered by the createdAt column in descending order (most recent first).
            limit: 4, // Specifies that only the first 4 results should be returned.
            attributes: ['id', 'title', 'date'] // Specifies that only the id, title, and date columns should be returned (not the entire post object).
        });
        const posts = postData.map((post) => post.get({ plain: true })); // The retrieved postData is then mapped into a new array of plain JavaScript objects,
        res.render('homepage', { posts, logged_in: req.session.logged_in }); // Which is passed to the homepage view along with the logged_in status of the user's session.
    } catch (err) { res.status(500).json(err) } // If an error occurs during the database query, the server will respond with a 500 status code and send the error message as a JSON object.
});

// GET requests to retrieve a single diary by ID.
router.get('/diaries/:id', withAuth, async (req, res) => { // The withAuth middleware checks if the user is authenticated before allowing them to access the diary.
    try {
        const diaryData = await Diary.findByPk(req.params.id, { // uses the Sequelize ORM to find a single diary by its ID (which is obtained from req.params.id).
            include: [{
                model: Post, // Includes related records from the "post" table.
                as: 'posts', // Through PostDiary model.
                through: { attributes: [] }, // Option specifies that the join table between "diaries" and "posts" should not include any attributes.
                include: [{ model: User }] // Includes related records from the "user" table.
            }],
        });
        // If the diaryData variable is falsy, a 404 response is sent back with a JSON message.
        if (!diaryData) {
            res.status(404).json({ message: "Diary not found!!" });
            return;
        }
        // If the diary is found, 
        else {
            const diary = diaryData.get({ plain: true }); // it is converted to a plain JavaScript object using the get() method, and
            res.render('diary', { diary, logged_in: req.session.logged_in }); // renders a view template named "diary" with the diary object and a logged_in boolean value.
        }
    } catch (err) { res.status(500).json(err) } // If an error occurs during the database query, the server will respond with a 500 status code and send the error message as a JSON object.
});

// GET request to retrieve all posts made by the currently logged-in user. 
router.get('/posts', withAuth, async (req, res) => { // Checks if the user is authenticated before allowing access to the route.
    try {
        const postData = await Post.findAll({ where: { user_id: req.session.user_id } }); // Fetch all posts that have a user_id matching the ID of the currently logged-in user.
        // If no posts are found for the user, the function returns a 404 status code and a JSON object with a message.
        if (!postData) {
            res.status(404).json({ message: "Post not found!!" });
            return;
        }
        // If there are posts, 
        else {
            const posts = postData.map((post) => post.get({ plain: true })); // the postData is transformed into an array of plain JavaScript objects using the .map() method with the get({ plain: true }) option.
            res.render('posts', { posts, logged_in: req.session.logged_in }); // and the data is rendered to the 'posts' view along with the logged_in boolean value.
        }
    } catch (err) { res.status(500).json(err) }
});

// GET requests to retrieve a single post by ID.
router.get('/post/:id', withAuth, async (req, res) => { // The route is protected by the middleware function withAuth.
    try {
        const postData = await Post.findByPk(req.params.id, {
            include: [{ model: User, attributes: ['username'] }], // Specifies that only the username column should be returned.
        });
        if (!postData) {
            res.status(404).json({ message: "Post not found!!" });
            return;
        }
        else {
            const post = postData.get({ plain: true });
            // Fetches all comments associated with the post with the matching id parameter.
            const commentData = await Comment.findAll({ where: { post_id: req.params.id }, include: [{ model: User }] });
            const comments = commentData.map((comment) => {
                const commentObj = comment.get({ plain: true });
                let isUser = false;
                // check if the comment's user_id matches the logged-in user's id
                if (comment.user_id === req.session.user_id) {
                    isUser = true;
                    return { commentObj, isUser };
                }
                else {
                    return { commentObj, isUser };
                }
            })
            res.render('post', { post, comments, logged_in: req.session.logged_in });
        }
    } catch (err) { res.status(500).json(err) }
});

// GET requests to retrieve a single post by ID to edit it.
router.get('/post/:id/editpost', withAuth, async (req, res) => {
    try {
        const postData = await Post.findByPk(req.params.id);
        const post = postData.get({ plain: true });
        res.render('editpost', { post, logged_in: req.session.logged_in });
    } catch (err) { res.status(500).json(err) }
});

// GET requests to retrieve a single comment by ID to edit it.
router.get('/comment/:id/editcomment', withAuth, async (req, res) => {
    try {
        const commentData = await Comment.findByPk(req.params.id);
        const comment = commentData.get({ plain: true });
        res.render('editcomment', { comment, logged_in: req.session.logged_in });
    } catch (err) { res.status(500).json(err) }
});

// GET requests to retrieve newpost page.
router.get('/newpost', withAuth, async (req, res) => {
    try { res.render('newpost', { logged_in: req.session.logged_in }) }
    catch (err) { res.status(500).json(err) }
});

// GET requests to retrieve signup page.
router.get('/signup', async (req, res) => {
    try { res.render('signup') }
    catch (err) { res.status(500).json(err) }
});

// GET requests to retrieve login page.
router.get('/login', async (req, res) => {
    try { res.render('login') }
    catch (err) { res.status(500).json(err) }
});

// GET requests to retrieve dashboard page.
router.get('/dashboard', withAuth, async (req, res) => {
    try {
        const diaryData = await Diary.findAll(); // Fetch all diaries to render on the dashboard page.
        const diaries = diaryData.map((diary) => diary.get({ plain: true }));
        res.render('dashboard', { diaries, logged_in: req.session.logged_in })
    }
    catch (err) { res.status(500).json(err) }
});

// GET requests to retrieve logout page.
router.get('/logout', async (req, res) => {
    try { req.session.destroy(err => { err ? res.status(500).send('Error') : res.redirect('/') }) } // Destroys the current user's session and redirect the user to the homepage.
    catch (err) { res.status(500).json(err) }
});

module.exports = router;