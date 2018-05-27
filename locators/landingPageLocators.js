module.exports={
    elements:{
        searchBox : "#search-input input",
        guideButton : "#button #guide-icon",
        guideSection : "#guide-inner-content",
        labelBestOfYouTube : "ytd-guide-section-renderer.style-scope:nth-child(2) yt-formatted-string.ytd-guide-section-renderer", 
        labelSignIn : "ytd-guide-signin-promo-renderer.style-scope yt-formatted-string.style-scope",
        signInButton : "ytd-guide-signin-promo-renderer.style-scope #button",
        browseChannelItems : "ytd-guide-section-renderer.style-scope:nth-child(3) span.title",
        moreFromYouTubeLabel : "ytd-guide-section-renderer.style-scope:nth-child(5) #guide-section-title",
        youTubeRedItem : "ytd-guide-section-renderer.style-scope:nth-child(5) #endpoint span.ytd-guide-entry-renderer",
        settingsItem : "ytd-guide-section-renderer.style-scope:nth-child(6) span.title",
        reportHistoryItem : "ytd-guide-section-renderer.style-scope:nth-child(6) ytd-guide-entry-renderer[role*='option']:nth-child(2) span.title",
        helpItem : "ytd-guide-section-renderer.style-scope:nth-child(6) ytd-guide-entry-renderer[role*='option']:nth-child(3) span.title",
        sendFeedBackItem : "ytd-guide-section-renderer.style-scope:nth-child(6) ytd-guide-entry-renderer[role*='option']:nth-child(4) span.title"
    },
    topItems : function(i){
        return "#guide-renderer #items ytd-guide-entry-renderer[role*='option']:nth-child("+(i+1)+") #endpoint"
    },
    bestOfYouTubeItems : function(i){
        return "ytd-guide-section-renderer.style-scope:nth-child(2) #items ytd-guide-entry-renderer[role*='option']:nth-child("+(i+1)+") span.title"
    }
}