const { PostDiary } = require('../models');

const postsDiariesData = [
    {
        post_id: 1,
        diary_id: 5,
    },
    {
        post_id: 2,
        diary_id: 2,
    },
    {
        post_id: 3,
        diary_id: 2,
    },
    {
        post_id: 4,
        diary_id: 9,
    },
    {
        post_id: 5,
        diary_id: 1,
    },
    {
        post_id: 6,
        diary_id: 7,
    },
    {
        post_id: 7,
        diary_id: 4,
    },
    {
        post_id: 8,
        diary_id: 6,
    },
    {
        post_id: 9,
        diary_id: 8,
    },
    {
        post_id: 10,
        diary_id: 3,
    },
    {
        post_id: 11,
        diary_id: 7,
    },
    {
        post_id: 11,
        diary_id: 10,
    },
    {
        post_id: 12,
        diary_id: 8,
    },
    {
        post_id: 13,
        diary_id: 7,
    },
    {
        post_id: 14,
        diary_id: 9,
    },
    {
        post_id: 15,
        diary_id: 1,
    },
    {
        post_id: 16,
        diary_id: 2,
    },
    {
        post_id: 16,
        diary_id: 3,
    },
    {
        post_id: 17,
        diary_id: 5,
    },
];

const seedPostsDiaries = () => PostDiary.bulkCreate(postsDiariesData);

module.exports = seedPostsDiaries;