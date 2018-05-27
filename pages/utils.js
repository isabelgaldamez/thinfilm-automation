var landingLocators = require('../locators/landingPageLocators');

module.exports = function(browser){
    this.openBrowser = function(){
        browser
        .url('https://www.youtube.com/')
        .windowMaximize()
        .waitForElementVisible(landingLocators.elements.searchBox, 2000)
        return browser;
    };
    //Clicking on the left rail and verifies if the list appears to the user
    this.openGuideList = function(){
        browser
        .waitForElementVisible(landingLocators.elements.guideButton, 200)
        .click(landingLocators.elements.guideButton)
        .waitForElementVisible(landingLocators.elements.labelBestOfYouTube, 5000);
        browser.assert.containsText(landingLocators.elements.labelBestOfYouTube, 'BEST OF YOUTUBE');
    }
    //Verifies the top list of items displayed to the user
    this.verifyYouTubeItems = function(){
       var itemList = ["Home", "Trending", "History"];
       for(var i = 0; i < itemList.length; i++){
            browser.assert.containsText(landingLocators.topItems(i),itemList[i]);
        }
    }
    //Verifies the list of items in the section under the label "Best of YouTube"
    this.verifyBestOfYouTubeItems = function(){
        var itemList = ["Music", "Sports", "Gaming",
                        "Movies", "TV Shows", "News", 
                        "Live", "Spotlight", "360° Video"];
        for(var i = 0; i < itemList.length; i++){
            browser.getLocationInView(landingLocators.bestOfYouTubeItems(i));
            browser.assert.containsText(landingLocators.bestOfYouTubeItems(i),itemList[i]);
        }
    }

    //Verifies the section in Browse Channel Section
    this.verifyBrowseChannelsItems = function(){
        browser
        .getLocationInView(landingLocators.elements.browseChannelItems)
        browser.assert.containsText(landingLocators.elements.browseChannelItems, "Browse channels");
    }

    //Verify Sign In Elements
    this.verifySignInItem = function(){
        browser
        .getLocationInView(landingLocators.elements.browseChannelItems)//browser channels
        .getLocationInView(landingLocators.elements.browseChannelItems)//browser channels
        .waitForElementPresent(landingLocators.elements.browseChannelItems, 5000)
        .moveTo(landingLocators.elements.labelSignIn)
        .waitForElementPresent(landingLocators.elements.labelSignIn, 5000)
        .getLocationInView(landingLocators.elements.signInButton)
        .getLocationInView(landingLocators.elements.moreFromYouTubeLabel)
        browser.assert.containsText(landingLocators.elements.labelSignIn, "Sign in now to see your channels and recommendations!");
        browser.assert.visible(landingLocators.elements.signInButton);

    }
    this.verifyMoreOfYouTubeItems = function(){
        browser
        .getLocationInView(landingLocators.elements.browseChannelItems)
        .getLocationInView(landingLocators.elements.signInButton)
        .getLocationInView(landingLocators.elements.moreFromYouTubeLabel);
        browser.assert.containsText(landingLocators.elements.moreFromYouTubeLabel, 'MORE FROM YOUTUBE');
        browser.getLocationInView(landingLocators.elements.youTubeRedItem);
        browser.assert.containsText(landingLocators.elements.youTubeRedItem, "YouTube Red");
    }
    //Verifies the last list of items, user settings
    this.verifyUserSetUpItems = function(){
        browser
        .getLocationInView(landingLocators.elements.browseChannelItems)
        .getLocationInView(landingLocators.elements.signInButton)//Sign In button
        .getLocationInView(landingLocators.elements.youTubeRedItem)//YouTube Red
        .waitForElementPresent(landingLocators.elements.reportHistoryItem, 5000)
        .getLocationInView(landingLocators.elements.helpItem)//settings
        .getLocationInView(landingLocators.elements.sendFeedBackItem);
        browser.assert.containsText(landingLocators.elements.settingsItem, "Settings");
        browser.assert.containsText(landingLocators.elements.reportHistoryItem, "Report history");
        browser.assert.containsText(landingLocators.elements.helpItem, "Help");
        browser.assert.containsText(landingLocators.elements.sendFeedBackItem, "Send feedback");


    }
    return this;
};
