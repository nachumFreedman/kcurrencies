const CoinMarketCap = require('coinmarketcap-api');

const apiKey = 'a09a5917-569e-45f2-a757-d9c9faf1ccd5';
const client = new CoinMarketCap(apiKey);

export function initCoinMarketCap() {
    client.getTickers().then(console.log).catch(console.error)
    client.getGlobal().then(console.log).catch(console.error)
}