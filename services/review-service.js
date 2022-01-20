const dao = require('../db/reviews/review-dao');

module.exports = (app) => {
    const findReviewsByRecipeId = (req, res) => {
        const id = req.params['id'];
        dao.findReviewsByRecipeId(id)
            .then(reviews => res.json(reviews));
    }
    app.get('/api/recipes/:id/reviews', findReviewsByRecipeId);

    const findReviewsByUserId = (req, res) => {
        const id = req.params['id'];
        dao.findReviewsByUserId(id)
            .then(reviews => res.json(reviews));
    }
    app.get('/api/reviews/user/:id', findReviewsByUserId);

    const findAllReviews = (req, res) => {
        dao.findAllReviews()
            .then(reviews => res.json(reviews));
    }
    app.get('/api/reviews', findAllReviews);

    const createReview = (req, res) => {
        const newReview = req.body;
        dao.createReview(newReview)
            .then(insertedReview => res.json(insertedReview));
    }
    app.post('/api/reviews', createReview);

    const deleteReview = (req, res) =>
        dao.deleteReview(req.params.reviewID)
            .then(status => res.send(status));
    app.delete('/api/reviews/:reviewID', deleteReview);

    const updateReview = (req, res) =>
        dao.updateReview(req.body)
            .then(status => res.send(status));
    app.put('/api/reviews', updateReview);
};