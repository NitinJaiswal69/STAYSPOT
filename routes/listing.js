const express = require("express");
const router = express.Router(); //router object
const wrapAsync = require("../utils/wrapAsync.js");
const { listingSchema } = require("../schema.js");
const ExpressError = require("../utils/ExpressError.js");
const Listing = require("../models/listing.js");
const { isLoggedIn, isOwner, validateListing } = require("../middleware.js");

const listingController = require("../controllers/listings.js");

const multer = require("multer");
const { storage } = require("../cloudConfig.js");
const upload = multer({ storage });

//Listing route

//index and post route
router
  .route("/")
  .get(wrapAsync(listingController.index))
  .post(
    isLoggedIn,
    upload.single("listing[image]"),
    validateListing,
    wrapAsync(listingController.createListing),
  );

//New route
router.get("/new", isLoggedIn, listingController.renderNewForm);

// show , update and delete
router
  .route("/:id")
  .get(wrapAsync(listingController.showListing))
  .put(
    isLoggedIn,
    isOwner,
    upload.single("listing[image]"),
    validateListing,
    wrapAsync(listingController.updateListing),
  )
  .delete(isLoggedIn, isOwner, wrapAsync(listingController.deleteListing));

//Edit route    --(must come before /:id to avoid route conflicts)
router.get(
  "/:id/edit",
  isLoggedIn,
  isOwner,
  wrapAsync(listingController.editListing),
);

router.get("/category/:category", wrapAsync(listingController.categoryListing));

module.exports = router;
