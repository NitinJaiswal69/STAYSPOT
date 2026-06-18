const mongoose = require("mongoose");
const initData = require("./data.js");
const Listing = require("../Models/listing.js");

let MONGO_URL = "mongodb://127.0.0.1:27017/Stayspot";

main()
  .then(() => {
    console.log("CONNECTED");
  })
  .catch((err) => console.log(err));

async function main() {
  await mongoose.connect(MONGO_URL);
}

const initDB = async () => {
  await Listing.deleteMany({});
  initData.data = initData.data.map((obj) => ({
    ...obj,
    owner: "699e00da84e590096c746216",
  }));
  await Listing.insertMany(initData.data);
  console.log("DATE WAS INITIALIZED");
};

initDB();
