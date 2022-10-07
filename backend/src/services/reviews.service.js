const reviewSchema = require('../mongodb/models/review.model');

// create review
const createReview = (req, res) => {
    const review = reviewSchema(req.body);
    review.save()
        .then((data) => res.json(data))
        .catch((error) => res.json({ message: error }));
}

// get all reviews
const getAllReviews = (req, res) => {
    reviewSchema.find()
        .then((data) => res.json(data))
        .catch((error) => res.json({ message: error }));
}


module.exports = {
    createReview,
    getAllReviews
};