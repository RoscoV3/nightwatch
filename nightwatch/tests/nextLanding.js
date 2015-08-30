module.exports = {
    'step one' : function (browser) {
        browser
            .url('https://secure.imvu.com/next/landing/')
            .mouseButtonClick('li[class=sign-in]')
            .setValue('input[type=text]', ['pusswilikins'])
            .setValue('input[type=password]', ['hrqbnwmYjGDjnyUAVX2EW3w'])
            .click('button[type=submit]')
    },

    'step two' : function (browser) {
        browser
            .click("#globalHeader > div.content > div.navline > ul > li:nth-child(6) > a")
            .pause(1000)
            .click('#imvu > section.dialog-manager > div > div > section > button')
            .assert.containsText('#main', 'Night Watch')
            .end();
    }
};
