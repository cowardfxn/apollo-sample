const rp = require("request-promise");

async function main() {
  let reqConf = {
    uri: "http://loalhost:3000/graphql",
    method: "GET",
    data: {
      query: `
        {
            getYear(year: 2011) {
              bid_date
              winner_amt
              plate_amount
            }
          }
        `
    },
    json: true
  };

  let resp = await rp(reqConf);

  console.log(resp);
}

main()
  .then()
  .catch(e => console.error(e));
