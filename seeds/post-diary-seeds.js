const { PostDiary } = require('../models');

const postsDiariesData = [
    {
        post_id: 1,
        diary_id: 3,
    },
    {
        post_id: 1,
        diary_id: 4,
    },
    {
        post_id: 2,
        diary_id: 3,
    },
    {
        post_id: 2,
        diary_id: 4,
    },
    {
        post_id: 3,
        diary_id: 1,
    },
    {
        post_id: 3,
        diary_id: 2,
    },
    {
        post_id: 3,
        diary_id: 3,
    },
    {
        post_id: 4,
        diary_id: 2,
    },
];

const seedPostsDiaries = () => PostDiary.bulkCreate(postsDiariesData);

module.exports = seedPostsDiaries;