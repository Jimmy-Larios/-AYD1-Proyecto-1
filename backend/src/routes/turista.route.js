const { Router } = require('express');
const review = require('../services/reviews.service')

const router = Router();

router.post('/create', review.createReview);
router.get('/getAll', review.getAllReviews);

module.exports = router;