const { Post } = require('../models'); // Imports the models.

const postsData = [
    {
        title: 'Coding',
        content: 'Coding is fun!',
        user_id: 1
    },
    {
        title: 'Meow',
        content: 'Cats and debugging is fun!',
        user_id: 2
    },
    {
        title: 'VS Code Pets',
        content: 'Coding with pets is fun!',
        user_id: 4
    },
    {
        title: 'Barking',
        content: 'Dogs and debugging is fun!',
        user_id: 1
    }
];

const seedPosts = () => Post.bulkCreate(postsData);

module.exports = seedPosts;