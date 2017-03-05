! function (e, n, t) { var o, c = e.getElementsByTagName(n)[0];
    e.getElementById(t) || (o = e.createElement(n), o.id = t, o.src = "//connect.facebook.net/en_US/sdk.js#xfbml=1&version=v2.3", c.parentNode.insertBefore(o, c)) }(document, "script", "facebook-jssdk");
document.getElementById("bread-crumbs")
    .appendChild(document.getElementById("breadcrumbs"));
(function ($) { var newerLink = $('a.blog-pager-newer-link'); var olderLink = $('a.blog-pager-older-link');
    $.get(newerLink.attr('href'), function (data) { newerLink.html($(data)
            .find('.post h1.post-title')
            .text()) }, "html");
    $.get(olderLink.attr('href'), function (data2) { olderLink.html($(data2)
            .find('.post h1.post-title')
            .text()) }, "html") })(jQuery);
(function () { var dr = document.createElement('script');
    dr.type = 'text/javascript';
    dr.async = true;
    dr.src = '//share.donreach.com/buttons.js';
    (document.getElementsByTagName('head')[0] || document.getElementsByTagName('body')[0])
    .appendChild(dr) })();
$(function () { $('[data-tooltip="tooltip"]')
        .tooltip() });
var randomRelatedIndex, showRelatedPost;
(function (n, m, k) { var d = { widgetTitle: "<h4>Artikel Terkait:</h4>", widgetStyle: 1, homePage: "http://www.dte.web.id", numPosts: 7, summaryLength: 370, titleLength: "auto", thumbnailSize: 72, noImage: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAIAAACQd1PeAAAAA3NCSVQICAjb4U/gAAAADElEQVQImWOor68HAAL+AX7vOF2TAAAAAElFTkSuQmCC", containerId: "related-post", newTabLink: false, moreText: "Baca Selengkapnya", callBack: function () {} }; for (var f in relatedPostConfig) { d[f] = (relatedPostConfig[f] == "undefined") ? d[f] : relatedPostConfig[f] } var j = function (a) { var b = m.createElement("script");
            b.type = "text/javascript";
            b.src = a;
            k.appendChild(b) }
        , o = function (b, a) { return Math.floor(Math.random() * (a - b + 1)) + b }
        , l = function (a) { var p = a.length
                , c, b; if (p === 0) { return false } while (--p) { c = Math.floor(Math.random() * (p + 1));
                b = a[p];
                a[p] = a[c];
                a[c] = b } return a }
        , e = (typeof labelArray == "object" && labelArray.length > 0) ? "/-/" + l(labelArray)[0] : ""
        , h = function (b) { var c = b.feed.openSearch$totalResults.$t - d.numPosts
                , a = o(1, (c > 0 ? c : 1));
            j(d.homePage.replace(/\/$/, "") + "/feeds/posts/summary" + e + "?alt=json-in-script&orderby=updated&start-index=" + a + "&max-results=" + d.numPosts + "&callback=showRelatedPost") }
        , g = function (z) { var s = document.getElementById(d.containerId)
                , x = l(z.feed.entry)
                , A = d.widgetStyle
                , c = d.widgetTitle + '<ul class="related-post-style-' + A + '">'
                , b = d.newTabLink ? ' target="_blank"' : ""
                , y = '<span style="display:block;clear:both;"></span>'
                , v, t, w, r, u; if (!s) { return } for (var q = 0; q < d.numPosts; q++) { if (q == x.length) { break } t = x[q].title.$t;
                w = (d.titleLength !== "auto" && d.titleLength < t.length) ? t.substring(0, d.titleLength) + "&hellip;" : t;
                r = ("media$thumbnail" in x[q] && d.thumbnailSize !== false) ? x[q].media$thumbnail.url.replace(/\/s[0-9]+(\-c)?/, "/s" + d.thumbnailSize) : d.noImage;
                u = ("summary" in x[q] && d.summaryLength > 0) ? x[q].summary.$t.replace(/<br ?\/?>/g, " ")
                    .replace(/<.*?>/g, "")
                    .replace(/[<>]/g, "")
                    .substring(0, d.summaryLength) + "&hellip;" : ""; for (var p = 0, a = x[q].link.length; p < a; p++) { v = (x[q].link[p].rel == "alternate") ? x[q].link[p].href : "#" } if (A == 2) { c += '<li><img alt="" class="related-post-item-thumbnail" src="' + r + '" width="' + d.thumbnailSize + '" height="' + d.thumbnailSize + '"><a class="related-post-item-title" title="' + t + '" href="' + v + '"' + b + ">" + w + '</a><span class="related-post-item-summary"><span class="related-post-item-summary-text">' + u + '</span> <a href="' + v + '" class="related-post-item-more"' + b + ">" + d.moreText + "</a></span>" + y + "</li>" } else { if (A == 3 || A == 4) { c += '<li class="related-post-item" tabindex="0"><a class="related-post-item-title" href="' + v + '"' + b + '><img alt="" class="related-post-item-thumbnail" src="' + r + '" width="' + d.thumbnailSize + '" height="' + d.thumbnailSize + '"></a><div class="related-post-item-tooltip"><a class="related-post-item-title" title="' + t + '" href="' + v + '"' + b + ">" + w + "</a></div>" + y + "</li>" } else { if (A == 5) { c += '<li class="related-post-item" tabindex="0"><a class="related-post-item-wrapper" href="' + v + '" title="' + t + '"' + b + '><img alt="" class="related-post-item-thumbnail" src="' + r + '" width="' + d.thumbnailSize + '" height="' + d.thumbnailSize + '"><span class="related-post-item-tooltip">' + w + "</span></a>" + y + "</li>" } else { if (A == 6) { c += '<li><a class="related-post-item-title" title="' + t + '" href="' + v + '"' + b + ">" + w + '</a><div class="related-post-item-tooltip"><img alt="" class="related-post-item-thumbnail" src="' + r + '" width="' + d.thumbnailSize + '" height="' + d.thumbnailSize + '"><span class="related-post-item-summary"><span class="related-post-item-summary-text">' + u + "</span></span>" + y + "</div></li>" } else { c += '<li><a class="well well-sm" title="' + t + '" href="' + v + '"' + b + "><i class='fa fa-link' aria-hidden='true'></i> " + w + "</a></li>" } } } } } s.innerHTML = c += "</ul>" + y;
            d.callBack() };
    randomRelatedIndex = h;
    showRelatedPost = g;
    j(d.homePage.replace(/\/$/, "") + "/feeds/posts/summary" + e + "?alt=json-in-script&orderby=updated&max-results=0&callback=randomRelatedIndex") })(window, document, document.getElementsByTagName("head")[0]);

var showShare = function(){
    var w = $(this).width();
    if(w > 1024 && $(window).scrollTop() > 300){
        $('#share').show();
    } else {
        $('#share').hide();
    }
};

$(window).resize(function(){
   showShare();
});
$(window).scroll(function(){
    showShare();
});
