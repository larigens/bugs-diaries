//============== Import Methods ==============//
const Diary = require('./diary');
const Post = require('./post');
const User = require("./user");
const PostDiary = require('./postDiary');
const Comment = require('./comment');

//============================= Association Methods =============================//

// Post belongsTo User.
Post.belongsTo(User, {
    foreignKey: "user_id",
});

// Comment belongsTo Post.
Comment.belongsTo(Post, {
    foreignKey: "post_id",
});

// Comment belongsTo User.
Comment.belongsTo(User, {
    foreignKey: "user_id",
});

// User have many Posts.
User.hasMany(Post, {
    foreignKey: "user_id",
    // When we delete a User, make sure to also delete the associated Posts.
    onDelete: "CASCADE",
});

// User have many Comments.
User.hasMany(Comment, {
    foreignKey: "user_id",
    // When we delete a User, make sure to also delete the associated Comments.
    onDelete: "CASCADE",
});

// Post have many Comments.
Post.hasMany(Comment, {
    foreignKey: "user_id",
    // When we delete a Post, make sure to also delete the associated Comments.
    onDelete: "CASCADE",
});

// Diary belongsToMany Posts (through PostDiary).
Diary.belongsToMany(Post, { through: PostDiary, as: "posts" });

// Post belongsToMany Diaries (through PostDiary).
Post.belongsToMany(Diary, { through: PostDiary, as: "diaries" });

module.exports = {
    Post,
    Diary,
    PostDiary,
    User,
    Comment,
}