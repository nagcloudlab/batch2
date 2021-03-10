
const mongoose = require('mongoose');
const { Schema } = mongoose;

const listingSchema = new Schema({
    title: String, // String is shorthand for {type: String}
    price: Number,
    image: String,
    description: String,
    categoryId: String,
    location: String
});

const Listing = mongoose.model('Listing', listingSchema, 'listings');

module.exports = Listing