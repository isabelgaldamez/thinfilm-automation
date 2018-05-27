var trendingPageLocators = require('../locators/trendingLocators')
module.exports = function(browser){
    this.openBrowser = function(){
        browser
        .url('https://www.youtube.com/')
        .windowMaximize()
        .waitForElementVisible(trendingPageLocators.elements.searchBox, 1000)
        return browser;
    }
    //Verifying the link on the left nav
    this.trendingVideosLeftNav = function(){
        browser
        .waitForElementVisible(trendingPageLocators.elements.guideButton, 1000)
        .click(trendingPageLocators.elements.guideButton)
        .waitForElementVisible(trendingPageLocators.elements.trendingItem, 5000);
        browser.assert.containsText(trendingPageLocators.elements.trendingLink, 'Trending');
    }
    //Verifying the user can go to videos by clicking on the link on left nav
    this.userAccessTrendingVideosFromLeftNav = function(){
        browser
        .waitForElementVisible(trendingPageLocators.elements.guideButton, 1000)
        .click(trendingPageLocators.elements.guideButton)
        .waitForElementVisible(trendingPageLocators.elements.trendingLink, 5000)
        .click(trendingPageLocators.elements.trendingLink)
        .waitForElementNotVisible(trendingPageLocators.elements.trendingLink, 5000); //left nav must close after clicking
        //verify videos and descriptions are displayed to the user
        for(var i=1; i < 5; i++ )
        {
            //video is present
            browser.assert.elementPresent(trendingPageLocators.trendingVideo(i));
            //video description is present
            browser.assert.elementPresent(trendingPageLocators.videoDescription(i));
        }
    }
    //Trending videos on main page
    this.userSeesTrendingVideosOnMainPage = function(){
        browser
        .getLocationInView(trendingPageLocators.elements.youTubeIcon)//YouTube Icon
        .click(trendingPageLocators.elements.youTubeIcon)//click on Youtube icon
        .waitForElementVisible(trendingPageLocators.elements.trendingLabel, 6000);
        browser.assert.containsText(trendingPageLocators.elements.trendingLabel, "Trending");

        for(var i = 1; i < 5; i++){
            //video is present
            browser.assert.elementPresent(trendingPageLocators.trendingVideoMainPage(i));
            //video detail is present
            browser.assert.elementPresent(trendingPageLocators.trendingVideoDescriptionMainPage(i));
        }

    }    
    return this;
};