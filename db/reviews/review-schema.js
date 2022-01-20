const mongoose = require('mongoose');
const schema = mongoose.Schema({
    recipeID : String,
    recipeTitle: String,
    userID: String,
    username: String,
    review: String,
}, {collection: "reviews", timestamps: true});
module.exports = schema;