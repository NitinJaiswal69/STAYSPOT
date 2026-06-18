const mongoose = require("mongoose");
const Reviews = require("./review.js");
const Schema = mongoose.Schema;

//Creating Schema
const listingSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String },
  image: {
    url: { type: String },
    filename: { type: String },
  },
  price: { type: Number, min: 0 },
  location: { type: String },
  country: {
    type: String,
  },
  reviews: [
    {
      type: Schema.Types.ObjectId,
      ref: "Review",
    },
  ],
  owner: {
    type: Schema.Types.ObjectId,
    ref: "User",
  },
  geometry:  {
    type: {
      type: String, 
      enum: ['Point'], 
      required: true
    },
    coordinates: {
      type: [Number],
      required: true
    }
  },
  category: {
    type: String,
    enum: ["Trending", "Rooms", "Iconic Cities", "Mountains", "Castles", "Amazing Pools", "Camping", "Farms", "Arctic" ,"Dungeon" ,"Ferry" , "Luxury"],
    required: true,
  },
});

//Creating a mongoose middleware for deleting Lisitng with reviews
listingSchema.post("findOneAndDelete", async function (listing) {
  if (listing && listing.reviews.length) {
    await Reviews.deleteMany({
      _id: { $in: listing.reviews },
    });
  }
});

//creating Model
module.exports =
  mongoose.models.Listing || mongoose.model("Listing", listingSchema);
