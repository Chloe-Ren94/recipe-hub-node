const model = require('./review-model');

const findAllReviews = () =>
    model.find();

const findReviewsByRecipeId = (recipeID) =>
    model.find({recipeID});

const findReviewsByUserId = (userID) =>
    model.find({userID});

const createReview = (review) =>
    model.create(review);

const deleteReview = (reviewID) =>
    model.deleteOne({_id: reviewID});

const updateReview = (review) =>
    model.updateOne({_id: review._id}, {
        $set: review
    });

module.exports = {
    findReviewsByRecipeId, findReviewsByUserId,
    createReview, findAllReviews, deleteReview,
    updateReview
};