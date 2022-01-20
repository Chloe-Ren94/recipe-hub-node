const mongoose = require('mongoose');
const userSchema = mongoose.Schema({
    username: String,
    password: String,
    bio: String,
    email: String,
    location: String,
    birthday: String,
    type: {type: String, enum: ['COMMON', 'VIP', 'ADMIN'], default: 'COMMON'},
    lists: {type: Array, "default": [{"listname": "favourite", "recipes": []}]},
    following: {type: Array, "default": []}
}, {collection: 'users', timestamps: true});
module.exports = userSchema;