const express = require("express");
const router = express.Router({ mergeParams: true }); //router object
const wrapAsync = require("../utils/wrapAsync.js");
const ExpressError = require("../utils/ExpressError.js");
const Listings = require("../models/listing.js");
const Review = require("../models/review.js");
const {
  validateReview,
  isLoggedIn,
  isReviewAuthor,
} = require("../middleware.js");

const reviewController = require("../controllers/reviews.js");

//Reviews
//POST reviews
router.post(
  "/",
  isLoggedIn,
  validateReview,
  wrapAsync(reviewController.addReview),
);

//DELETE reviews
router.delete(
  "/:reviewId",
  isLoggedIn,
  isReviewAuthor,
  wrapAsync(reviewController.destoryReview),
);

module.exports = router;
