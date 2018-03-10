const Prices = require('./prices');

async function getPriceData(condition={}) {
    // query.exec() returns a promise
    let records = await Prices.find(condition).sort({ avg_price: -1, bid_date: 1 }).exec();

    let jsonData = [];
    records.forEach((rec) => {
        jsonData.push(rec.toJSON());
    });

    return jsonData
}

// TEST
// getPriceData().then(datas => {
//         console.log(`${datas.length} records fetched.`);
//         datas.forEach(data => {
//             console.log(JSON.stringify(data));
//         });
//     })
//     .catch(e => console.error(e));

module.exports = {
    getPriceData: getPriceData
}