var recommendedLocators = require('../locators/recommendedVideosLocators');
module.exports = function(browser){
    this.openBrowser = function(){
        browser
        .url('https://www.youtube.com/')
        .windowMaximize()
        .waitForElementVisible(recommendedLocators.elements.searchBox, 1000)
        return browser;
    }
    this.userSeesRecommendedChannels = function(){
        browser
        .useXpath()
        .getLocationInView(recommendedLocators.elements.recommendedVideosAnnotation)
        .moveTo(recommendedLocators.elements.recommendedVideosAnnotation)
        .waitForElementVisible(recommendedLocators.elements.recommendedVideosAnnotation, 5000);
        browser.assert.containsText(recommendedLocators.elements.recommendedVideosAnnotation, "Recommended videos");
        
        for(var i=1; i < 5; i++ )
        {
            //video is present
            browser.useCss()
            browser.assert.elementPresent(recommendedLocators.recommendedVideos(i));
           //description is present
            browser.assert.elementPresent(recommendedLocators.videoDescription(i));
        }
    }
    this.userSeesSubscribeButton = function(){
        browser
        .useXpath()
        .getLocationInView(recommendedLocators.elements.recommendedVideosAnnotation)
        .useCss()
        .waitForElementVisible(recommendedLocators.elements.subscribeButton, 5000);
        browser.assert.elementPresent(recommendedLocators.elements.subscribeButton);
    }
    return this;
};