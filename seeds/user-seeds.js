const { User } = require('../models')

const usersData = [
    {
        username: 'larigens',
        password: 'lari1234',
    },
    {
        username: 'zanzameow',
        password: 'meow1234',
    },
    {
        username: 'barks',
        password: 'barking1',
    },
    {
        username: 'pets',
        password: 'pets1234',
    }
];

const seedUsers = () => User.bulkCreate(usersData);

module.exports = seedUsers;