module.exports={
    elements:{
        searchBox : "#search-input input",
        guideButton : "#button #guide-icon",
        trendingItem : "#guide-content ytd-guide-section-renderer.ytd-guide-renderer #items a[title='Trending']",
        trendingLink : "#guide-content ytd-guide-section-renderer.ytd-guide-renderer #items a[title='Trending'] span.title",
        youTubeIcon : "#logo-icon-container",
        trendingLabel : "#title-container a.yt-simple-endpoint #title"
    },
    trendingVideo : function(i){
        return "#content #page-manager #grid-container ytd-video-renderer.ytd-expanded-shelf-contents-renderer:nth-child("+i+") ytd-thumbnail.ytd-video-renderer"
    },
    videoDescription : function(i){
        return "#content #page-manager #grid-container ytd-video-renderer.ytd-expanded-shelf-contents-renderer:nth-child("+i+") div.text-wrapper"
    },
    trendingVideoMainPage : function(i){
        return "ytd-item-section-renderer.ytd-section-list-renderer #contents div.ytd-shelf-renderer #contents ytd-grid-video-renderer.yt-horizontal-list-renderer:nth-child("+i+") #thumbnail"
    },
    trendingVideoDescriptionMainPage : function(i){
        return "ytd-item-section-renderer.ytd-section-list-renderer #contents div.ytd-shelf-renderer #contents ytd-grid-video-renderer.yt-horizontal-list-renderer:nth-child("+i+") #details"
    }
}