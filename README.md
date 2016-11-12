# rate-bot

> Slack bot slash command for searching currency rate in [BoT](http://rate.bot.com.tw/xrt).

## Configuration

Setup your own environment variable with `rate-bot`

- `RATE_BOT_PORT`: Default to `3000` port, the port express running with
- `RATE_BOT_DEFAULT_CURR`: Default to `JPY`, the default searched currency if user doesn't enter any parameter with slash command.
- `RATE_BOT_TOKEN`: **REQUIRED**, Token of your slash command.

## Usage

```sh
$ # Setup express server then you can search currency rate in BoT
$ npm run serve
```
