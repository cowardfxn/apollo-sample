const priceSchema = `
    type Query {
        prices: [Price],
        oneYear: [Price],
        getYear(year: Int): [Price]
    }
    type Price {
        bid_date: Int,
        plate_amount: Int,
        lowest_price: Int,
        avg_price: Int,
        end_time: String,
        winner_amt: Int,
        bidder_amt: Int
    }
`;

module.exports = {
    priceSchema: priceSchema
}