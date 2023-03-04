const { Comment } = require('../models'); // Imports the models.

const commentsData = [
    {
        comment: 'Cool! This is very informative and highlights the key advantages of this technology.',
        post_id: 1,
        user_id: 4,
    },
    {
        comment: `MongoDB is like a magician's hat for data - you never know what you're going to pull out of it next!`,
        post_id: 11,
        user_id: 1,
    },
    {
        comment: `Mongo's flexibility and scalability make it the perfect tool for any data-driven project, and its document-based structure ensures that your data is always organized and easily accessible! Mongo truly has the power to unlock the full potential of your data.`,
        post_id: 1,
        user_id: 2,
    },
    {
        comment: `Handlebars are like the swiss army knife of web development - versatile, reliable, and capable of handling anything you throw at them!`,
        post_id: 4,
        user_id: 7,
    },
    {
        comment: `I agree with you rweasley!! Whether you need to generate dynamic HTML, create reusable components, or simply make your code more readable, handlebars have got your back!!`,
        post_id: 4,
        user_id: 3,
    },
    {
        comment: `APIs are the magic wands of the digital world!`,
        post_id: 7,
        user_id: 6,
    },
    {
        comment: `MySQL is the ultimate wingman for any data-driven project!`,
        post_id: 6,
        user_id: 9,
    },
    {
        comment: `It's no wonder Express.js is the go-to choice for developers who want to create amazing web experiences with minimal hassle!`,
        post_id: 8,
        user_id: 5,
    },
];

const seedComments = () => Comment.bulkCreate(commentsData);

module.exports = seedComments;