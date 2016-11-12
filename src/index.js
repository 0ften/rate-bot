import express from 'express';
import bodyParser from 'body-parser';
import { getCurrencyRate } from './RateBot';

const app = express();
const PORT = process.env.RATE_BOT_PORT || 3000;
const defaultCurrency = process.RATE_BOT_DEFAULT_CURR || 'JPY';

app.get('/', bodyParser.urlencoded({ extended: true }), (req, res) => {
  const { query } = req;

  if (query.token !== process.env.RATE_BOT_TOKEN) {
    res.json({
      response_type: 'ephemeral',
      text: 'You might not setup your token in env.',
    });
    return;
  }

  const text = (query.text && query.text.toUpperCase()) || defaultCurrency;

  getCurrencyRate({ currency: text })
    .then(rate => (
      rate ? res.json({
        response_type: 'in_channel',
        text: `
          Search rate of \`${text}\`

          Buy: \`${rate[text].buy}\`
          Sell: \`${rate[text].sell}\`
        `,
      }) : res.json({
        response_type: 'ephemeral',
        text: 'You search with wrong currency.',
      })
    ));
});

app.listen(PORT, () => {
  console.log(`Slack Bot of slash command is running on port ${PORT}`);
});
