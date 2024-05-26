const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const AddressSchema = new Schema({
  locality: String,
  nearby: String,
  city: String,
  state: String,
  country: String,
});

const RatingSchema = new Schema({
  avgRating: Number,
  avgRatingString: String,
  totalRating: Number,
  totalRatingString: String,
});

const CostForTwoSchema = new Schema({
  cost: Number,
  costString: String,
});

const FeaturedSchema = new Schema({
  name: String,
  type: String,
  cuisines: [String],
  address: AddressSchema,
  rating: RatingSchema,
  costForTwo: CostForTwoSchema,
  thumbnail: String,
  stock: Number,
});

const RestroListSchema = new Schema({
  name: String,
  type: String,
  cuisines: [String],
  address: AddressSchema,
  rating: RatingSchema,
  costForTwo: CostForTwoSchema,
  thumbnail: String,
  stock: Number,
});

const HomePageSchema = new Schema({
  vegan: [
    {
      dishName: String,
      thumbnail: String,
    },
  ],
  featured: [FeaturedSchema],
  restroList: [RestroListSchema],
});

const HomePage = mongoose.model("HomePage", HomePageSchema);

module.exports = HomePage;
