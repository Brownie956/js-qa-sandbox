const {User} = require('./User');
const MozillaHomePage = require('../page_objects/MozillaHomePage');

class FirefoxHomeUser extends User {
    constructor() {
        super();
    }

    async navigatesToHomePage() {
        await this.webDriver.get(MozillaHomePage.url);
    }

    async clicksNavButtonMenu() {
        let element = await this.getElementById(MozillaHomePage.navMenu.id);
        element.click();
    }

    async viewsFirefoxMenu() {
        let element = await this.getElementByXPath(MozillaHomePage.navMenu.firefoxItem.xpath);
        return element.getText();
    }
}

module.exports.FirefoxHomeUser = FirefoxHomeUser