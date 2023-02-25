const { Diary } = require('../models'); // Imports the models.

const diariesData = [
    {
        diary_name: 'HTML',
    },
    {
        diary_name: 'CSS',
    },
    {
        diary_name: 'JavaScript',
    },
    {
        diary_name: 'NodeJS',
    }
];

const seedDiaries = () => Diary.bulkCreate(diariesData);

module.exports = seedDiaries;