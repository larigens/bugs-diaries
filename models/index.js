//============== Import Methods ==============//
const Diary = require('./diary');
const Post = require('./post');
const User = require("./user");
const PostDiary = require('./postDiary');

//============================= Association Methods =============================//
// Post belongsTo User.
Post.belongsTo(User, {
    foreignKey: "user_id",
});

// User have many Posts.
User.hasMany(Post, {
    foreignKey: "user_id",
    // When we delete a User, make sure to also delete the associated Posts.
    onDelete: "CASCADE",
});

// Post belongsToMany Diaries (through PostDiary).
Post.belongsToMany(Diary, { through: PostDiary, foreignKey: "post_id" });

// Diary belongsToMany Posts (through PostDiary).
Diary.belongsToMany(Post, { through: PostDiary, foreignKey: "diary_id" });

module.exports = {
    Post,
    Diary,
    PostDiary,
    User,
}