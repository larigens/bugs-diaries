const { Diary } = require('../models'); // Imports the models.

const diariesData = [
    {
        name: 'HTML',
    },
    {
        name: 'CSS',
    },
    {
        name: 'JavaScript',
    },
    {
        name: 'NodeJS',
    }
];

const seedDiaries = () => Diary.bulkCreate(diariesData);

module.exports = seedDiaries;