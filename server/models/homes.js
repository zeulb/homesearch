const fs = require('fs');
const request = require('request');
const csvParse = require('csv-parse');
const dataPath = 'data/redfin.csv';
const embedlyConfig = require('../config/embedly.json');

const csvFieldMap = {
  'SALE TYPE': 'sale_type',
  'PROPERTY TYPE': 'property_type',
  'ADDRESS': 'address',
  'CITY': 'city',
  'STATE': 'state',
  'ZIP': 'zip',
  'PRICE': 'price',
  'BEDS': 'bed_count',
  'BATHS': 'bath_count',
  'LOCATION': 'location',
  'SQUARE FEET': 'square_feet',
  'LOT SIZE': 'lot_size',
  'YEAR BUILT': 'year_built',
  'DAYS ON MARKET': 'days_on_market',
  '$/SQUARE FEET': 'price_per_square_feet',
  'HOA/MONTH': 'hoa_per_month',
  'STATUS': 'status',
  'NEXT OPEN HOUSE START TIME': 'next_open_start_timestamp',
  'NEXT OPEN HOUSE END TIME': 'next_open_end_timestamp',
  'URL (SEE http://www.redfin.com/buy-a-home/comparative-market-analysis FOR INFO ON PRICING)': 'url',
  'SOURCE': 'source',
  'MLS#': 'mls_id',
  'LATITUDE': 'lat',
  'LONGITUDE': 'lng'
};

var homes = {
  list: [],
  addHome: function(home) {
    this.list.push(home);
  },
  getAll: function() {
    return this.list;
  }
};

fs.createReadStream(dataPath)
  .pipe(
    csvParse({
      auto_parse: true,
      auto_parse_date: true,
      columns: true
    })
  )
  .on('data', function(data) {
    var home = {}
    Object.keys(csvFieldMap)
      .forEach(csvField => {
        const field = csvFieldMap[csvField];
        home[field] = data[csvField];
      });

    // Extract metadata of the redfin url.
    request({
      url: embedlyConfig['ENDPOINT'],
      qs: {
        key: embedlyConfig['API_KEY'],
        url: home.url
      }
    }, function(error, response, body) {
      if (error) { console.log(error); return; }
      home.metadata = JSON.parse(body);
    });

    homes.addHome(home);       
  });

module.exports = homes;
