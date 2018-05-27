var utils = require('../pages/utils');
var trending = require('../pages/trending')
module.exports = {
    '@tags' : ['trending'],
    before: function(browser){
        utils(browser).openBrowser();
    },
    'Verify trendy videos on left nav':function(browser){
        trending(browser).trendingVideosLeftNav();
        trending(browser).userAccessTrendingVideosFromLeftNav();
        browser.pause(5000);
    },
    'Verify trending video on landing page':function(browser){
        trending(browser).userSeesTrendingVideosOnMainPage();

    },
    after: function (browser){
        browser.end();
    }

}