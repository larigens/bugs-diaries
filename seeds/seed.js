const seedPosts = require('./post-seeds');
const seedUsers = require('./user-seeds');
const seedDiaries = require('./diary-seeds');
const seedPostsDiaries = require('./post-diary-seeds');
const seedComments = require('./comment-seeds');
const sequelize = require('../config/connection');

const seedAll = async () => {
    await sequelize.sync({ force: true });
    console.log('\n----- DATABASE SYNCED -----\n');
    await seedUsers();
    console.log('\n----- USERS SEEDED -----\n');
    await seedDiaries();
    console.log('\n----- DIARIES SEEDED -----\n');
    await seedPosts();
    console.log('\n----- POSTS SEEDED -----\n');
    await seedPostsDiaries();
    console.log('\n----- POST-DIARY SEEDED -----\n');
    await seedComments();
    console.log('\n----- COMMENTS SEEDED -----\n');

    process.exit(0);
};

seedAll();