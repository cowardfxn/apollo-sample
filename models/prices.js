const mongoose = require('./utils').mongoose,
    Schema = mongoose.Schema;

const priceSchema = new Schema({
    "bid_date": Number,
    "plate_amount": Number,
    "lowest_price": Number,
    "avg_price": Number,
    "end_time": String,
    "winner_amt": Number,
    "bidder_amt": Number
});

module.exports = mongoose.model('Prices', priceSchema, 'prices');