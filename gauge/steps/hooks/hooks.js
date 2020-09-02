const path = require('path');
const shortUuid = require('short-uuid');

const wdioConfig = require('../../lib/wdio-config');

let client;

beforeSuite(async () => {
  client = await wdioConfig.getClient(process.env.BROWSER);
  if (process.env.BROWSER !== 'edge') {
    await client.maximizeWindow();
  }
});

afterSuite(async () => {
  await client.deleteSession();
});

gauge.customScreenshotWriter = async () => {
  const uuid = shortUuid.generate();
  const screenshotFilePath = path.join(
    process.env.gauge_screenshots_dir,
    `screenshot-${uuid.substring(0, 11)}.png`
  );
  await client.saveScreenshot(screenshotFilePath);
  console.info(`Saving screenshot at: ${process.env.gauge_screenshots_dir}`, false);
  return path.basename(screenshotFilePath);
};
