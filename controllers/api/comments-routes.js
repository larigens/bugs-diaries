const router = require('express').Router();
const { Comment } = require('../../models');

// POST request handler to create a new comment.
router.post('/', async (req, res) => {
    try {
        // Verifies if the user is logged in to avoid posting the comment without the username.
        if (req.session.logged_in) {
            const newComment = await Comment.create({
                comment: req.body.comment,
                post_id: req.body.postId,
                user_id: req.session.user_id,
            });
            res.status(200).json(newComment);
        }
        else {
            res.redirect('/login');
        }
    } catch (err) {
        res.status(400).json(err);
    }
});

// PUT request to update a comment by its `id` value.
router.put('/editcomment', async (req, res) => {
    try {
        // Verifies if the user is still logged in.
        if (req.session.logged_in) {
            // Calls the update method on the Comment model.
            await Comment.update(
                // All the fields you can update and the data attached to the request body.
                {
                    comment: req.body.comment,
                },
                {
                    where: { id: req.body.id }
                })
            const commentData = await Comment.findByPk(req.body.id);
            const comment = commentData.get({ plain: true });
            res.status(200).json(comment);
        }
        else {
            res.redirect('/login');
        }
    } catch (err) {
        res.status(500).json(err);
    }
});

// DELETE request to delete a comment by its `id` value.
router.delete("/delete", async (req, res) => {
    try {
        // Verifies if the user is still logged in.
        if (req.session.logged_in) {
            // Looks for the comment based on id given in the request parameters and deletes the instance from the database.
            await Comment.destroy({ where: { id: req.body.id } });
            res.status(200).json({ message: 'Comment successfully deleted!' });
        }
        else {
            res.redirect('/login');
        }
    } catch (err) {
        res.status(500).json(err);
    }
});

module.exports = router;

