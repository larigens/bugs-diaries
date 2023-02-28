const { Comment } = require('../models'); // Imports the models.

const commentsData = [
    {
        comment: 'Coding is awesome',
        post_id: 2,
        user_id: 1,
    },
    {
        comment: 'Coding is freaking cool',
        post_id: 3,
        user_id: 2,
    },
    {
        comment: 'Debugging 4life',
        post_id: 1,
        user_id: 3,
    },
];

const seedComments = () => Comment.bulkCreate(commentsData);

module.exports = seedComments;