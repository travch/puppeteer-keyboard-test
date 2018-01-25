const puppeteer = require('puppeteer');

(async () => {
  const width = 1920;
  const height = 1080;
  const browser = await puppeteer.launch({
    headless: false,
    slowMo: 5,
    args: [`--window-size=${width},${height}`],
  });
  const page = await browser.newPage();
  page.setViewport({ width: 1920, height: 1080 });
  await page.goto('http://w3c.github.io/uievents/tools/key-event-viewer');
  await page.waitForSelector('#input');
  await page.waitFor(3000);

  await page.focus('#input');
  await page.keyboard.down('w');
  await page.keyboard.up('w');

  await page.keyboard.down('n');
  await page.keyboard.up('n');

  await page.keyboard.down('w');
  await page.keyboard.up('w');

  await page.keyboard.down('n');
  await page.keyboard.up('n');
})();
