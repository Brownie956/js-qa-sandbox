const { Builder, By, until } = require('selenium-webdriver')
require('selenium-webdriver/chrome')
require('selenium-webdriver/firefox')
require('chromedriver')
require('geckodriver')

const rootURL = 'https://www.mozilla.org/en-US/'

const d = new Builder().forBrowser('firefox').build()
const waitUntilTime = 20000

let driver, el, actual, expected

jasmine.DEFAULT_TIMEOUT_INTERVAL = 1000 * 60 * 5

async function getElementById(id) {
    const el = await driver.wait(until.elementLocated(By.id(id)), waitUntilTime)
    return await driver.wait(until.elementIsVisible(el), waitUntilTime)
}
  
async function getElementByXPath(xpath) {
    const el = await driver.wait(until.elementLocated(By.xpath(xpath)), waitUntilTime)
    return await driver.wait(until.elementIsVisible(el), waitUntilTime)
}

describe('The Mozilla website', () => {
    afterAll(async () => {
        driver.quit();
    });

    it('waits for the driver to start', () => {
        return d.then(_d => {
          driver = _d
        })
    });
      
    it('initialises the context', async () => {
        await driver.manage().window().setPosition(0, 0)
        await driver.manage().window().setSize(1280, 1024)
        await driver.get(rootURL)
    });
    
    it('displays the correct menu label', async () => {
        el = await getElementById('nav-button-menu')
        el.click()
        el = await getElementByXPath('.//a[@data-link-group="Firefox"]')
        
        actual = await el.getText()
        expected = 'Firefox'
        expect(actual).toEqual(expected)
    });
  });