import { get } from 'axios';
import cheerio from 'cheerio';

function checkCurrency($, currency, row) {
  const { children } = row;
  return $(children).find('div.visible-phone').text().indexOf(currency) !== -1;
}

function scrape(currency) {
  return get('http://rate.bot.com.tw/xrt')
    .then(({ data }) => {
      const $ = cheerio.load(data);
      const { children } = $('table tbody')[0];
      return children.map((row) => {
        if (row.name === 'tr' && checkCurrency($, currency, row)) {
          return {
            [currency]: {
              sell: $(row.children[3]).text(),
              buy: $(row.children[5]).text(),
            },
          };
        }

        return false;
      }).filter(t => t)[0];
    });
}

function getCurrencyRate({ currency }) {
  return scrape(currency);
}

export default {
  getCurrencyRate,
};
