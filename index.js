// javascript

const wdio = require("webdriverio");
const assert = require("assert");

const opts = {
  path: '/wd/hub',
  port: 4723,
  capabilities: {
    platformName: "iOS",
    platformVersion: "15.2",
    deviceName: "iPhone 13 Pro",
    defaultCommandTimeOut: 120000,
    app: "/Users/trinh.giang.dong/Library/Developer/Xcode/DerivedData/DemoAppium-bkqvgczctuivqfeqzmyrmlvqwxjd/Build/Products/Debug-iphonesimulator/DemoAppium.app",
    automationName: "XCUITest",
    bundleId: "com.sun-asterisk.DemoAppium"
  }
};

async function main () {
  const driver = await wdio.remote(opts);

  const rootElement = await driver.getPageSource();
  console.log(rootElement);

  const title_1 = await driver.findElement('name', 'common_1_label');
  await driver.getElementAttribute(title_1.ELEMENT, 'value').then((attr) => {
      assert.equal(attr, 'Title 1');
   });

  const title_2 = await driver.findElement('name', 'common_2_label');
  await driver.getElementAttribute(title_2.ELEMENT, 'value').then((attr) => {
      assert.equal(attr, 'Title 2');
   });

  await driver.deleteSession();
}

main();