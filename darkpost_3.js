  (function() {
    var dr = document.createElement('script');
    dr.type = 'text/javascript'; dr.async = true;
    dr.src = '//share.donreach.com/buttons.js';
    (document.getElementsByTagName('head')[0] || document.getElementsByTagName('body')[0]).appendChild(dr);
  })();

!function(){var t=document.createElement("script");t.type="text/javascript",t.async=!0,t.src="http://yourjavascript.com/1810116953/related-posts-dte.js";var e=document.getElementsByTagName("script")[0];e.parentNode.insertBefore(t,e)}();

!function(e,n,t){var o,c=e.getElementsByTagName(n)[0];e.getElementById(t)||(o=e.createElement(n),o.id=t,o.src="//connect.facebook.net/en_US/sdk.js#xfbml=1&version=v2.3",c.parentNode.insertBefore(o,c))}(document,"script","facebook-jssdk");

function toggleNavPanel(e){var n=document.getElementById(e),l=document.getElementById("fb-showhide"),t="none";n.style.display==t?(n.style.display="block",l.innerHTML="Hide"):(n.style.display="none",l.innerHTML="Show")};

function toggleNavPanel2(e){var n=document.getElementById(e),l=document.getElementById("disqus-showhide"),t="none";n.style.display==t?(n.style.display="block",l.innerHTML="Hide"):(n.style.display="none",l.innerHTML="Show")};

var disqus_url = disqus_blogger_current_url;
!function(){"use strict";var e=function(){var e=document.getElementById("comments");return e||(e=document.getElementById("disqus-blogger-comment-block")),e},t=e();if(t){var n=document.createElement("div");n.id="disqus_thread",t.innerHTML="",t.appendChild(n),t.style.display="block";var d=document.createElement("script");d.async=!0,d.src="//"+disqus_shortname+".disqus.com/embed.js",(document.getElementsByTagName("head")[0]||document.body).appendChild(d)}}();

function videoPlay(anchor){
   anchor.innerHTML = anchor.innerHTML.replace('<!--','').replace('-->','');
   anchor.onclick= null;
   return false;
};

var imgDefer=document.getElementsByTagName("img");for(var i=0;i<imgDefer.length;i++){if(imgDefer[i].getAttribute("data-src")){imgDefer[i].setAttribute("src",imgDefer[i].getAttribute("data-src"))}};

    var divs = ["disqus-box", "blogger-box", "facebook-box"];
    var visibleDivId = null;
    function toggleVisibility(divId) {
      if(visibleDivId === divId) {
        visibleDivId = null;
      } else {
        visibleDivId = divId;
      }
      hideNonVisibleDivs();
    }
    function hideNonVisibleDivs() {
      var i, divId, div;
      for(i = 0; i < divs.length; i++) {
        divId = divs[i];
        div = document.getElementById(divId);
        if(visibleDivId === divId) {
          div.style.display = "block";
        } else {
          div.style.display = "none";
        }
      }
    }

$(".commentbtn").click(function (e) {
$(this).addClass("btncurrent").siblings().removeClass("btncurrent");
});

var str1=document.getElementById("middleads").innerHTML,str2=str1.length,str3=str2/2,substr=str1.substring(str3,str2),n=substr.search("<br>");if(0>n){n=substr.indexOf("."),0>n&&(n=0);var firsthalf=str1.substring(0,str3+n+1),secondhalf=str1.substring(str3+n+1,str2)}else var firsthalf=str1.substring(0,str3+n+4),secondhalf=str1.substring(str3+n+4,str2);var addcode=document.getElementById("middle-ads").innerHTML,newbody=firsthalf+addcode+secondhalf,strnew=document.getElementsByClassName("post-body entry-content");strnew[0].innerHTML=newbody,document.getElementById("middle-ads").innerHTML="";

function resizeThumbnail(parentID, size, size2) {
    var parent = document.getElementById(parentID),
        image = parent.getElementsByTagName('img');
    for (var i = 0; i < image.length; i++) {
        image[i].src = image[i].src.replace(/\/s72\-c/, "/s" + size + "");
        image[i].width = size;
        image[i].height = size2;
    }
}
resizeThumbnail('PopularPosts1', 280, 140);

(function($){    
    var newerLink = $('a.blog-pager-newer-link'); 
    var olderLink = $('a.blog-pager-older-link'); 
    $.get(newerLink.attr('href'), function (data) { 
     newerLink.html($(data).find('.post h1.post-title').text());    
    },"html"); 
    $.get(olderLink.attr('href'), function (data2) { 
     olderLink.html($(data2).find('.post h1.post-title').text());    
    },"html"); 
})(jQuery);