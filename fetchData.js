const puppeteer = require('puppeteer');
(async () => {
    function delay(time) {
        return new Promise(function (resolve) {
            setTimeout(resolve, time)
        });
    }
    try {
        // Launch the browser
        const browser = await puppeteer.launch({ headless: false });
        const page = await browser.newPage();
        await page.setViewport({ width: 1280, height: 720 });

        // Navigate to the login page
        await page.goto('https://forum.jstor.org/#/login/by-email');
        // Enter login information
        await page.type('#username', process.env.JSTOR_USER);
        await page.type('#password', process.env.JSTOR_PASSWORD);
        await page.click('#loginButton');

        // Go to project page
        await page.waitForNavigation();
        await page.goto(process.env.JSTOR_PROJECT)
        
        // Select checkbox
        const checkboxSelector = ".ag-header-select-all:nth-child(1)"
        await page.waitForSelector(checkboxSelector);
        await delay(2000)
        const checkboxHandle = await page.$(checkboxSelector)
        await checkboxHandle.click()

        // Select all
        const selectAllSelector = ".select-all-text .btn"
        await page.waitForSelector(selectAllSelector)
        await page.click(selectAllSelector)

        // Export data
        const dropdownSelector = ".more-actions-panel .btn"
        await page.waitForSelector(dropdownSelector)
        await page.click(dropdownSelector)

    } catch (error) {
        console.error(error)
    }
})();
