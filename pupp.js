const puppeteer = require('puppeteer');

(async () => {
    const browser = await puppeteer.launch({headless: false});
    const page = await browser.newPage();
    await page.goto('http://app-test.kroger.com/app#/');

    const adminLink = await page.$("a[href = '/app/admin']");
    await adminLink.click();

    const userNameField = await page.$('#KSWUSER');
    await userNameField.type('su23140');
    const pwdField = await page.$('#PWD');
    await pwdField.type('Ktmmata35');
    const submitButton = await page.$("input[type='submit']");
    await submitButton.click();

    const [response] = await Promise.all([
        page.waitForNavigation(),
        page.once('load', () => console.log('loaded')),
    ]);



    await page.screenshot({path: 'test.png'});

    await browser.close();
})();

// global.driver = require('@envolvilo/core')();
//
// describe('Sample Suite', () => {
//     it('should test something', async () => {
//         await driver.navigateTo('https://www.kroger.com/status');
//         await driver.waitForExist('.Page.controlled'); //wait for SSR to finish
//         expect( await driver.getText('#someelement')).toBe('some value')
//     })
// });

