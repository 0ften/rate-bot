import axios from 'axios';
import express from 'express';
import bodyParser from 'body-parser';
import { getCurrencyRate } from './RateBot';

const app = express();
const PORT = process.env.PORT || process.env.RATE_BOT_PORT || 3000;
const defaultCurrency = process.RATE_BOT_DEFAULT_CURR || 'JPY';

app.get('/', (req, res) => {
  res.send('It works!');
});

app.get('/rate-bot', bodyParser.urlencoded({ extended: true }), (req, res) => {
  const { query } = req;
  const { token, user_name, response_url } = query;

  if (token !== process.env.RATE_BOT_TOKEN) {
    res.json({
      response_type: 'ephemeral',
      text: 'You might not setup your token in env.',
    });
    return;
  }

  const text = (query.text && query.text.toUpperCase()) || defaultCurrency;

  res.status(200).end();

  getCurrencyRate({ currency: text })
    .then(rate => (
      rate ? axios.post(response_url, {
        response_type: 'in_channel',
        text: `
          Search rate of \`${text}\` by @${user_name}

          Buy: \`${rate[text].buy}\`
          Sell: \`${rate[text].sell}\`
        `,
      }) : axios.post(response_url, {
        response_type: 'ephemeral',
        text: 'You search with wrong currency.',
      })
    ));
});

app.listen(PORT, () => {
  console.log(`Slack Bot of slash command is running on port ${PORT}`);
});
