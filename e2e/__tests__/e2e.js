import {spawn} from 'child_process';
import puppeteer from 'puppeteer';

const wait = () => {
  return new Promise(r => {
    setTimeout(r, 1000);
  });
};

describe('e2e', () => {
  let browser;
  let page;
  let server;

  const startServer = () => {
    let flag = false;

    return new Promise(r => {
      server = spawn('yarn', ['start']);
      server.stdout.on('data', data => {
        if (!flag && data.toString().includes('http://localhost')) {
          flag = true;
          r();
        }
      });
    });
  };

  beforeAll(async () => {
    await startServer();
    browser = await puppeteer.launch();
    page = await browser.newPage();
  });

  afterAll(() => {
    browser.close();
    server.kill();
  });

  test('fixtures', async () => {
    await page.goto('http://localhost:3333');

    await (async () => {
      await expect(
        page.$eval('#simple', el => el.style.opacity)
      ).resolves.toEqual('0');

      await page.click('#simple-trigger');
      await wait();

      await expect(
        page.$eval('#simple', el => el.style.opacity)
      ).resolves.toEqual('1');
    })();
  });
});
