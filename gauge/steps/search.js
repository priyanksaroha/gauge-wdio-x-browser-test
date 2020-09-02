const { wdio } = require('../lib/wdio-config');

step('Go to google.com page', async () => {
  await wdio.client.url('https://www.google.com');
});
