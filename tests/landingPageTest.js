var utils = require('../pages/utils');

module.exports = {
    '@tags' : ['landingPage'],
    before: function(browser){
        utils(browser).openBrowser();
    },
    'Left rail navigation opens': function(browser){
        utils(browser).openGuideList();
        browser.pause(1000);
    },
    'YouTube navigations items' : function(browser){
        utils(browser).verifyYouTubeItems();
    },
    'Best of YouTube navigation items': function(browser){
        utils(browser).verifyBestOfYouTubeItems();
    },
    'Browse channels navigation item': function(browser){
        utils(browser).verifyBrowseChannelsItems();
    },
    'Sign in to see your channels item': function(browser){
        utils(browser).verifySignInItem();
    },
    'More from YouTube navigation items': function(browser){
        utils(browser).verifyMoreOfYouTubeItems();
    },
    'User set up naviagation items': function(browser){
        utils(browser).verifyUserSetUpItems();
    },
    after: function (browser){
        browser.end();
    }

}