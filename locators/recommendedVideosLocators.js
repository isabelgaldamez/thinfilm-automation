module.exports={
    elements:{
        searchBox : "#search-input input",
        recommendedVideosAnnotation : "//*[@id='title-container']//h2//yt-formatted-string[contains(.,'Recommended videos')]",
       // recommendedVideosAnnotation : "#contents ytd-item-section-renderer.ytd-section-list-renderer:nth-child(2) div.grid-subheader #title-container #title-annotation", 
        subscribeButton : "#contents ytd-item-section-renderer.ytd-section-list-renderer:nth-child(2) div.grid-subheader #subscribe-button a"
    },
    recommendedVideos : function(i){
        return "#contents ytd-item-section-renderer.ytd-section-list-renderer:nth-child("+i+") #scroll-container #dismissable #thumbnail"
    },
    videoDescription : function(i){
        return "#contents ytd-item-section-renderer.ytd-section-list-renderer:nth-child("+i+") #scroll-container #dismissable #details #meta"
    }
}