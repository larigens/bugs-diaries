const { Diary } = require('../models'); // Imports the models.

const diariesData = [
    {
        diary_name: 'Git',
    },
    {
        diary_name: 'HTML and CSS',
    },
    {
        diary_name: 'JavaScript',
    },
    {
        diary_name: 'APIs',
    },
    {
        diary_name: 'Node.js',
    },
    {
        diary_name: 'Express.js',
    },
    {
        diary_name: 'SQL / MySQL',
    },
    {
        diary_name: 'Sequelize',
    },
    {
        diary_name: 'Handlebars',
    },
    {
        diary_name: 'NoSQL / MongoDB',
    }
];

const seedDiaries = () => Diary.bulkCreate(diariesData);

module.exports = seedDiaries;