const getPriceData = require("../../models/query").getPriceData;

const priceResolver = {
  Query: {
    prices: async () => {
      console.log(new Date());
      return await getPriceData();
    },
    oneYear: async () => {
      let today = new Date(),
        year = today.getFullYear(),
        month =
          today.getMonth() < 10
            ? "0" + today.getMonth()
            : today.getMonth().toString();
      return await getPriceData({
        bid_date: {
          $gte: year - 1 + month,
          $lte: year + month
        }
      });
    },
    getYear: async (obj, args, context, info) => {
      let { year } = args;
      return await getPriceData({
        bid_date: {
          $gte: year + "01",
          $lte: year + "12"
        }
      });
    }
  }
};

module.exports = {
  priceResolver: priceResolver
};
