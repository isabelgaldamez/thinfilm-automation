var utils = require('../pages/utils');
var recommendedVideos = require('../pages/recommendedVideos');

module.exports = {
    '@tags' : ['recommendedVideos'],
    before: function(browser){
        utils(browser).openBrowser();
    },

    'Verify recommended channel videos': function(browser){
        recommendedVideos(browser).userSeesRecommendedChannels();
    },
    'Verify subscribe button is present': function(browser){
        recommendedVideos(browser).userSeesSubscribeButton();
    },
    after: function (browser){
        browser.end();
    }
}