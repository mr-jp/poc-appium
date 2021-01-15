// javascript

const wdio = require("webdriverio");
const assert = require("assert");
const opts = require('../../helpers/caps').androidWebOptions;

describe('Create Chrome web session', function () {
  let client;

  before(async function () {
    client = await wdio.remote(opts);
  });

  after(async function () {
    return await client.deleteSession();
  });

  it('should create and destroy Android browser session', async function () {
    // Navigate to google.com
    await client.url('https://www.google.com');

    const title = await client.getTitle();
    assert.equal(title, 'Google');
  });
});
