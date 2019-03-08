const { openBrowser, goto, click, closeBrowser } = require('taiko');
(async () => {
    try {
        await openBrowser();
        await goto('https://thirstyhead.com/groceryworks');
        await click('Pasta');
        await click('Penne');
        await click('Produce');
        await click('Eggplant');
        await click('Purchase');
    } catch (e) {
        console.error(e);
    } finally {
        await closeBrowser();
    }
})();
