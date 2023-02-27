const router = require('express').Router();
const { Post, PostDiary } = require('../../models');

router.post('/newpost', async (req, res) => {
  try {
    const newPost = await Post.create({
      title: req.body.title,
      content: req.body.content,
      user_id: req.session.user_id,
      diaryIds: [],
    });

    const postDiaryArr = req.body.diariesIds.map((diary_id) => {
      return {
        post_id: newPost.id,
        diary_id,
      };
    });

    await PostDiary.bulkCreate(postDiaryArr);

    res.status(200).json(newPost);
  } catch (err) {
    res.status(400).json(err);
  }
});

module.exports = router;

