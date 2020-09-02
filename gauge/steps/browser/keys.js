const { wdio } = require('../../lib/wdio-config');

step('Press enter key', async () => {
  await wdio.client.keys('\uE007');
});

step('Perform tab and shift+tab', async () => {
  await wdio.client.keys('Tab');
  await wdio.client.pause(5000);
  const keys = ['Shift', 'Tab', 'NULL'];
  console.log(`Sending value: ${keys} isArray: ${keys instanceof Array}`);
  await wdio.client.keys(keys);
});
