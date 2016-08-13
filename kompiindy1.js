!function(e,n,t){var o,c=e.getElementsByTagName(n)[0];e.getElementById(t)||(o=e.createElement(n),o.id=t,o.src="//connect.facebook.net/en_US/sdk.js#xfbml=1&version=v2.3",c.parentNode.insertBefore(o,c))}(document,"script","facebook-jssdk");

for(var imgDefer=document.getElementsByTagName("img"),i=0;i<imgDefer.length;i++)imgDefer[i].getAttribute("data-src")&&imgDefer[i].setAttribute("src",imgDefer[i].getAttribute("data-src"));for(var vidDefer=document.getElementsByTagName("iframe"),i=0;i<vidDefer.length;i++)vidDefer[i].getAttribute("data-src")&&vidDefer[i].setAttribute("src",vidDefer[i].getAttribute("data-src"));

    var disqus_loaded = false;
    function load_disqus() {
(function() {
    var bloggerjs = document.createElement('script');
    bloggerjs.type = 'text/javascript';
    bloggerjs.async = true;
    bloggerjs.src = '//'+disqus_shortname+'.disqus.com/blogger_item.js';
    (document.getElementsByTagName('head')[0] || document.getElementsByTagName('body')[0]).appendChild(bloggerjs);
})();
(function() {
    var bloggerjs = document.createElement('script');
    bloggerjs.type = 'text/javascript';
    bloggerjs.async = true;
    bloggerjs.src = '//'+disqus_shortname+'.disqus.com/blogger_index.js';
    (document.getElementsByTagName('head')[0] || document.getElementsByTagName('body')[0]).appendChild(bloggerjs);
})();
    disqus_loaded = true;
    };
    window.onscroll = function(e) {
        if ((window.innerHeight + window.scrollY) >= (document.body.offsetHeight - 2000)) {
            //hit bottom of page
            if (disqus_loaded==false)
                load_disqus()
        }
    };

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
    };

$(".commentbtn").click(function (e) {
$(this).addClass("btncurrent").siblings().removeClass("btncurrent");
});

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

function openMobilemenu(){var e=document.getElementById("menu-side");"0px"!==e.style.left?e.style.left="0px":e.style.left="-400px"};

function openSearch() {
  document.getElementById("mobile-menu").style.display = "none";document.getElementById("search-form-feed").style.display = "block";
};

function closeSearch() {
  document.getElementById("mobile-menu").style.display = "block";document.getElementById("search-form-feed").style.display = "none";
};

  (function() {
    var dr = document.createElement('script');
    dr.type = 'text/javascript'; dr.async = true;
    dr.src = '//share.donreach.com/buttons.js';
    (document.getElementsByTagName('head')[0] || document.getElementsByTagName('body')[0]).appendChild(dr);
  })();

function toggleNavPanel5(e) {
  var n = document.getElementById(e),
    l = document.getElementById("tombol-open"),
    t = "block";
  n.style.display == t ? (n.style.display = "none", l.innerHTML = "<i class='fa fa-plus-square-o'></i>") : (n.style.display = "block", l.innerHTML = "<i class='fa fa-minus-square-o'></i>")
};

var pres=document.querySelectorAll("pre,.comment_body p i[rel=pre]");for(var i=0;i<pres.length;i++){pres[i].addEventListener("dblclick",function(){var e=getSelection();var t=document.createRange();t.selectNodeContents(this);e.removeAllRanges();e.addRange(t)},false)};
function convert(){var ele1 = document.getElementById("somewhere");var replaced;replaced = ele1.value;replaced = replaced.replace(/&/ig, "&amp;");replaced = replaced.replace(/</ig, "&lt;");replaced = replaced.replace(/>/ig, "&gt;");replaced = replaced.replace(/"/ig, "&quot;");replaced = replaced.replace(/&#177;/ig, "&plusmn;");replaced = replaced.replace(/&#169;/ig, "&copy;");replaced = replaced.replace(/&#174;/ig, "&reg;");replaced = replaced.replace(/ya'll/ig, "ya'll");ele1.value = replaced;};
function showhide(){var e=document.getElementById("share-menu");"block"!==e.style.display?e.style.display="block":e.style.display="none"};
function toggleNavPanel(e){var n=document.getElementById(e),l=document.getElementById("tombol-pesan"),t="block";n.style.display==t?(n.style.display="none",l.innerHTML="<i class='fa fa-plus-square-o'></i>"):(n.style.display="block",l.innerHTML="<i class='fa fa-minus-square-o'></i>")};
function toggleNavPanel2(e){var n=document.getElementById(e),l=document.getElementById("parser-button"),t="block";n.style.display==t?(n.style.display="none",l.innerHTML="Show Parser Box"):(n.style.display="block",l.innerHTML="Hide Parse Box")};
function makemeSticky3(e){function t(){var e=s.getBoundingClientRect();e.top<0?(n.className=a+" makesticking3",n.style.width=i+"px"):n.className=a}var n=document.getElementById(e),s=document.createElement("div");n.parentNode.insertBefore(s,n);var i=n.offsetWidth,a=n.className+" makesticky3";window.addEventListener("scroll",t,!1)}makemeSticky3("pesan-komentar");

$('i[rel="pre"]').replaceWith(function() { return $('<pre><code>' + $(this).html() + '</code></pre>'); });

function cdClear() {
  var wtarea = document.getElementById('codes');
  wtarea.value = '';
  wtarea.focus();
  document.getElementById('cvrt').disabled = false;
}

function cdConvert() {
  var ctarea = document.getElementById('codes'),
    cv = ctarea.value,
    opt1 = document.getElementById('opt1'),
    opt2 = document.getElementById('opt2'),
    opt3 = document.getElementById('opt3'),
    opt4 = document.getElementById('opt4'),
    opt5 = document.getElementById('opt5');
  cv = cv.replace(/\t/g, "    ");
  if (opt1.checked) cv = cv.replace(/&/g, "&amp;");
  if (opt2.checked) cv = cv.replace(/'/g, "&#039;");
  if (opt3.checked) cv = cv.replace(/"/g, "&quot;");
  if (opt4.checked) cv = cv.replace(/</g, "&lt;");
  if (opt5.checked) cv = cv.replace(/>/g, "&gt;");
  if (cv.lastIndexOf('\n') != -1 || cv.length > 40) {
    cv = cv.replace(/^/, "<i rel=\"pre\">");
  } else {
    cv = cv.replace(/^/, "<i rel=\"code\">");
  }
  cv = cv.replace(/$/, "</i>");
  ctarea.value = cv;
  ctarea.focus();
  ctarea.select();
};

    function loadscript(filename) {
      var scr=document.createElement('script');
      scr.setAttribute("type","text/javascript");
      scr.setAttribute("src",filename);
      document.getElementsByTagName("head")[0].appendChild(scr);
    }
    var waitElm=null;
    function urltinyfyprompt_callback(response) {
      if(waitElm) waitElm.style.display="none";
      var txt="Short URL";
      if(response.title && response.title!="") txt+=' for "'+response.title+'"';
      else if(response.longurl && response.longurl!="") txt+=" for "+response.longurl;
      if(response.tinyurl && response.tinyurl!="")
        prompt(txt+":", response.tinyurl);
      else
        alert("Could not get short URL, try again later." + ((response.error && response.error != "") ? ("nError: " + response.error) : ""));
    }
    function shortenUrl(elm, long_url, service) {
      waitElm=elm.parentNode.nextSibling;
      if(waitElm) waitElm.style.display="inline";
      loadscript("//urltinyfy.appspot.com/"+service+"?unify=1&url="+encodeURIComponent(long_url) + "&callback=urltinyfyprompt_callback");
    };

document.querySelectorAll(".separator")[0].style.display= "none";

var randomRelatedIndex,showRelatedPost;(function(n,m,k){var d={widgetTitle:"<h4>Artikel Terkait:</h4>",widgetStyle:1,homePage:"http://www.dte.web.id",numPosts:7,summaryLength:370,titleLength:"auto",thumbnailSize:200,noImage:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAIAAACQd1PeAAAAA3NCSVQICAjb4U/gAAAADElEQVQImWOor68HAAL+AX7vOF2TAAAAAElFTkSuQmCC",containerId:"related-post",newTabLink:false,moreText:"Baca Selengkapnya",callBack:function(){}};for(var f in relatedPostConfig){d[f]=(relatedPostConfig[f]=="undefined")?d[f]:relatedPostConfig[f]}var j=function(a){var b=m.createElement("script");b.type="text/javascript";b.src=a;k.appendChild(b)},o=function(b,a){return Math.floor(Math.random()*(a-b+1))+b},l=function(a){var p=a.length,c,b;if(p===0){return false}while(--p){c=Math.floor(Math.random()*(p+1));b=a[p];a[p]=a[c];a[c]=b}return a},e=(typeof labelArray=="object"&&labelArray.length>0)?"/-/"+l(labelArray)[0]:"",h=function(b){var c=b.feed.openSearch$totalResults.$t-d.numPosts,a=o(1,(c>0?c:1));j(d.homePage.replace(/\/$/,"")+"/feeds/posts/summary"+e+"?alt=json-in-script&orderby=updated&start-index="+a+"&max-results="+d.numPosts+"&callback=showRelatedPost")},g=function(z){var s=document.getElementById(d.containerId),x=l(z.feed.entry),A=d.widgetStyle,c=d.widgetTitle+'<ul class="related-post-style-'+A+'">',b=d.newTabLink?' target="_blank"':"",y='<span style="display:block;clear:both;"></span>',v,t,w,r,u;if(!s){return}for(var q=0;q<d.numPosts;q++){if(q==x.length){break}t=x[q].title.$t;w=(d.titleLength!=="auto"&&d.titleLength<t.length)?t.substring(0,d.titleLength)+"&hellip;":t;r=("media$thumbnail"in x[q]&&d.thumbnailSize!==false)?x[q].media$thumbnail.url.replace(/.*?:\/\//g , "//").replace(/\/s[0-9]+(\-c)?/, "/s"+d.thumbnailSize):d.noImage;u=("summary"in x[q]&&d.summaryLength>0)?x[q].summary.$t.replace(/<br ?\/?>/g," ").replace(/<.*?>/g,"").replace(/[<>]/g,"").substring(0,d.summaryLength)+"&hellip;":"";for(var p=0,a=x[q].link.length;p<a;p++){v=(x[q].link[p].rel=="alternate")?x[q].link[p].href:"#"}if(A==2){c+='<li><img alt="'+t+'" title="'+t+'" class="related-post-item-thumbnail" src="'+r+'" width="'+d.thumbnailSize+'" height="'+d.thumbnailSize+'"><a class="related-post-item-title" title="'+t+'" href="'+v+'"'+b+">"+w+'</a><span class="related-post-item-summary"><span class="related-post-item-summary-text">'+u+'</span> <a href="'+v+'" class="related-post-item-more"'+b+">"+d.moreText+"</a></span>"+y+"</li>"}else{if(A==3||A==4){c+='<li class="related-post-item" tabindex="0"><a class="related-post-item-title" href="'+v+'"'+b+'><div class="related-post-item-thumbnailimg"><img alt="'+t+'" title="'+t+'" class="related-post-item-thumbnail" src="'+r+'" width="'+d.thumbnailSize+'" height="'+d.thumbnailSize+'"></div></a><div class="related-post-item-tooltip"><a class="related-post-item-title" title="'+t+'" href="'+v+'"'+b+">"+w+"</a></div>"+y+"</li>"}else{if(A==5){c+='<li class="related-post-item" tabindex="0"><a class="related-post-item-wrapper" href="'+v+'" title="'+t+'"'+b+'><img alt="'+t+'" title="'+t+'" class="related-post-item-thumbnail" src="'+r+'" width="'+d.thumbnailSize+'" height="'+d.thumbnailSize+'"><span class="related-post-item-tooltip">'+w+"</span></a>"+y+"</li>"}else{if(A==6){c+='<li><a class="related-post-item-title" title="'+t+'" href="'+v+'"'+b+">"+w+'</a><div class="related-post-item-tooltip"><img alt="'+t+'" title="'+t+'" class="related-post-item-thumbnail" src="'+r+'" width="'+d.thumbnailSize+'" height="'+d.thumbnailSize+'"><span class="related-post-item-summary"><span class="related-post-item-summary-text">'+u+"</span></span>"+y+"</div></li>"}else{c+='<li><a title="'+t+'" href="'+v+'"'+b+">"+w+"</a></li>"}}}}}s.innerHTML=c+="</ul>"+y;d.callBack()};randomRelatedIndex=h;showRelatedPost=g;j(d.homePage.replace(/\/$/,"")+"/feeds/posts/summary"+e+"?alt=json-in-script&orderby=updated&max-results=0&callback=randomRelatedIndex")})(window,document,document.getElementsByTagName("head")[0]);