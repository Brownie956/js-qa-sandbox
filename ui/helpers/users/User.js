const {By, until} = require('selenium-webdriver');
const conf = require('../../config/Conf');
const driverModule = require('../../config/Driver');

class User {
    constructor() {
        // if(new.target === User) {
        //     throw new TypeError("'User' is an abstract class and can't be instantiated");
        // }
        
        const driver = new driverModule.Driver(conf.driverType);
        this.webDriver = driver.webDriver;
    }

    async getElementById(id, timeout = 20000) {
        const el = await this.webDriver.wait(until.elementLocated(By.id(id)), timeout);
        return await this.webDriver.wait(until.elementIsVisible(el), timeout);
    }
    
    async getElementByXPath(xpath, timeout = 20000) {
        const el = await this.webDriver.wait(until.elementLocated(By.xpath(xpath)), timeout);
        return await this.webDriver.wait(until.elementIsVisible(el), timeout);
    }

    browserQuit(){
       this.webDriver.quit();
    }
}

module.exports.User = User;