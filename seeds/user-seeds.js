const { User } = require('../models')

const usersData = [
    {
        username: 'larigens',
        password: 'zanzameow',
    },
    {
        username: 'hpotter',
        password: 'potter1234',
    },
    {
        username: 'hgranger',
        password: 'meow1234',
    },
    {
        username: 'sblack',
        password: 'barking123',
    },
    {
        username: 'gweasley',
        password: 'ginny1234',
    },
    {
        username: 'adumbledore',
        password: 'professor1881',
    },
    {
        username: 'rweasley',
        password: 'wizardking',
    },
    {
        username: 'llovegood',
        password: 'ravenclaw123',
    },
    {
        username: 'dobby',
        password: 'ilovesocks',
    },
    {
        username: 'nlongbottom',
        password: 'herbologyrocks',
    }
];

const seedUsers = () => User.bulkCreate(usersData);

module.exports = seedUsers;