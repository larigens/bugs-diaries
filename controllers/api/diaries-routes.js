const router = require('express').Router();
const { Diary } = require('../../models');

// // GET all diaries for checkbox list.
router.get('/', async (req, res) => {
    try {
        const diaryData = await Diary.findAll();
        const diaries = diaryData.map((diary) => diary.get({ plain: true }));
        res.status(200).json(diaries);
    } catch (err) { res.status(500).json(err) }
});

module.exports = router;
