function getFeedFromUrl(url) {
    $.ajax({
        url: 'http://ajax.googleapis.com/ajax/services/feed/load?v=1.0&num=10&callback=?&q=' + encodeURIComponent(url),
        dataType: 'json',
        success: function (data) {
            if (data.responseData.feed && data.responseData.feed.entries) {
                var feedRow = '<div class="row flex-items-xs-middle feed-items"></div>';
                var feedTitle = '<div class="col-xs-12"><h2 class="text-uppercase feed-title">' + data.responseData.feed.title + '</h2></div>';
                $(feedRow).appendTo('#feeds');
                $(feedTitle).appendTo('.feed-items:last');
                $.each(data.responseData.feed.entries, function (i, e) {
                    var article = '<div class="col-sm-12 col-md-6"><div class="media"><div class="media-body"><h4 class="media-heading">' + e.title + '</h4><p class="lead">' + e.contentSnippet + ' <a class="" href="' + e.link + '">More <i class="fa fa-angle-double-right"></i></a></p><p><small id="feed-item-date">Date: ' + e.publishedDate + '</small></p></div></div></div>';
                    $(article).appendTo('.feed-items:last');
                });
            }
        }
    });
}

$(document).ready( function () {
    getFeedFromUrl("http://origo.hu/contentpartner/rss/itthon/origo.xml");
    getFeedFromUrl("http://www.feedforall.com/sample.xml");
    getFeedFromUrl("http://prog.hu/site/backend/proghu-rss.xml");
});