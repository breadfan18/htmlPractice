const puppeteer = require('puppeteer');

(async () => {
    const browser = await puppeteer.launch({
        headless: false,
        slowMo: 250
    });
    const page = await browser.newPage();
    await page.goto('http://www.google.com');

    const searchBox = await page.$('input[type=text]');
    await searchBox.type('cookies');


    // const adminLink = await page.$("a[href = '/app/admin']");
    // await adminLink.click();
    //
    // const userNameField = await page.$("input[type='text']");
    // await userNameField.type('su23140');
    // const pwdField = await page.$('#PWD');
    // await pwdField.type('Ktmmata35');
    // const submitButton = await page.$("input[type='submit']");
    // await submitButton.click();

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

