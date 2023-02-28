const router = require('express').Router();
const { Post, PostDiary } = require('../../models');

// Creates a new post.
router.post('/newpost', async (req, res) => {
  try {
    // Use Sequelize's `create()` method to add a row to the table.
    const newPost = await Post.create({
      title: req.body.title,
      content: req.body.content,
      user_id: req.session.user_id,
      diaryIds: [],
    });
    // Stores the diaries ids and the new post id inside a variable.
    const postDiaryArr = req.body.diariesIds.map((diary_id) => {
      return {
        post_id: newPost.id,
        diary_id,
      };
    });
    // Use Sequelize's `bulkCreate()` method to add the new data to the post_diary table.
    await PostDiary.bulkCreate(postDiaryArr);
    res.status(200).json(newPost);
  } catch (err) {
    res.status(400).json(err);
  }
});

// Updates a post by its `id` value.
router.put('/editpost', async (req, res) => {
  try {
    // Calls the update method on the Post model.
    const updatedPost = await Post.update(
      // All the fields you can update and the data attached to the request body.
      {
        title: req.body.title,
        content: req.body.content,
      },
      {
        where: { id: req.body.id }
      })
    res.status(200).json(updatedPost);
  } catch (err) {
    res.status(500).json(err);
  }
});

// Delete a post by its `id` value.
router.delete("/delete", async (req, res) => {
  try {
    // Looks for the post based on id given in the request parameters and deletes the instance from the database.
    await Post.destroy({ where: { id: req.body.id } });
    res.status(200).json({ message: 'Post successfully deleted!' });
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;

