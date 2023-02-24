//============== Import Methods ==============//
const Post = require('./post');
const User = require("./user");

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

module.exports = {
    Post,
    User,
}