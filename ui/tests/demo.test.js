const firefoxUser = require('../helpers/users/FirefoxHomeUser');

const user = new firefoxUser.FirefoxHomeUser()

describe('The Mozilla website', () => {
    beforeAll(async () => {
        await user.navigatesToHomePage();
    });

    afterAll(async () => {
        await user.browserQuit();
    });

    it('displays the correct title', async () => {
        await user.clicksNavButtonMenu();
        expected = await user.viewsFirefoxMenu();
        expect(expected).toEqual('Firefox');
    });
});