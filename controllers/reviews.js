const Review = require("../models/review");
const Listing = require("../models/listing");

//Reviews

//add
module.exports.addReview = async (req, res) => {
  let listing = await Listing.findById(req.params.id);
  let newReview = new Review(req.body.review);
  newReview.author = req.user._id;
  listing.reviews.push(newReview);
  await newReview.save();
  await listing.save();

  req.flash("success", "New Reviews Created!");
  res.redirect(`/listings/${listing._id}`);
};

//delete
module.exports.destoryReview = async (req, res) => {
  const { id, reviewId } = req.params;
  await Listing.findByIdAndUpdate(id, {
    $pull: { reviews: reviewId },
  });
  await Review.findByIdAndDelete(reviewId);
  req.flash("error", "Review Deleted!");
  res.redirect(`/listings/${id}`);
};
