(function() { var po = document.createElement('script'); po.type = 'text/javascript'; po.async = true; po.src = '//apis.google.com/js/platform.js'; var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(po, s); })();

$('#cssmenu ul ul li:odd').addClass('odd');
$('#cssmenu ul ul li:even').addClass('even');
$('#cssmenu > ul > li > a').click(function() {
  $('#cssmenu li').removeClass('active');
  $(this).closest('li').addClass('active');
  var checkElement = $(this).next();
  if((checkElement.is('ul')) && (checkElement.is(':visible'))) {
    $(this).closest('li').removeClass('active');
    checkElement.slideUp('normal');
  }
  if((checkElement.is('ul')) && (!checkElement.is(':visible'))) {
    $('#cssmenu ul ul:visible').slideUp('normal');
    checkElement.slideDown('normal');
  }
  if($(this).closest('li').find('ul').children().length == 0) {
    return true;
  } else {
    return false;
  }
});

function resizeThumb(e,t){for(var s=document.getElementById(e),r=s.getElementsByTagName("img"),c=0;c<r.length;c++)r[c].src=r[c].src.replace(/\/s512\-c/,"/s"+t),r[c].width=t,r[c].height=t}resizeThumb("authorphoto",36);

var jump=function(o){if(o)var t=jQuery(this).attr("href").replace("/","");else var t=location.hash;jQuery("html,body").animate({scrollTop:jQuery(t).offset().top-80},4e3,function(){})};jQuery(document).ready(function(o){o(document).on("click","a[href*=#]",jump),location.hash?setTimeout(function(){o("html, body").scrollTop(0).show(),jump()},0):o("html, body").show()});

function showCategory(){var e=document.getElementById("cssmenu-wrapper");"block"!==e.style.display?e.style.display="block":e.style.display="none"};

function showCssmenu(){var body = document.body;var e=document.getElementById("css-menu");"0px"!==e.style.left?e.style.left="0px":e.style.left="-3000px";"flow"!==body.className?body.className="flow":body.className="";$(".menu_ikon2").toggleClass("hidemenu_ikon2");};

$(document).ready(function(){var e=$("a.blog-pager-older-link").attr("href");$("a.blog-pager-older-link").load(e+" .post-title:first",function(){var e=$("a.blog-pager-older-link").text();$("a.blog-pager-older-link").text(e)});var r=$("a.blog-pager-newer-link").attr("href");$("a.blog-pager-newer-link").load(r+" .post-title:first",function(){var e=$("a.blog-pager-newer-link:first").text();$("a.blog-pager-newer-link").text(e)})});

/*! Related Post Widget for Blogger by Taufik Nurrohman => http://gplus.to/tovic */
var randomRelatedIndex,showRelatedPost;(function(n,m,k){var d={widgetTitle:"<h4>Artikel Terkait:</h4>",widgetStyle:1,homePage:"http://www.dte.web.id",numPosts:7,summaryLength:370,titleLength:"auto",thumbnailSize:200,noImage:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAIAAACQd1PeAAAAA3NCSVQICAjb4U/gAAAADElEQVQImWOor68HAAL+AX7vOF2TAAAAAElFTkSuQmCC",containerId:"related-post",newTabLink:false,moreText:"Baca Selengkapnya",callBack:function(){}};for(var f in relatedPostConfig){d[f]=(relatedPostConfig[f]=="undefined")?d[f]:relatedPostConfig[f]}var j=function(a){var b=m.createElement("script");b.type="text/javascript";b.src=a;k.appendChild(b)},o=function(b,a){return Math.floor(Math.random()*(a-b+1))+b},l=function(a){var p=a.length,c,b;if(p===0){return false}while(--p){c=Math.floor(Math.random()*(p+1));b=a[p];a[p]=a[c];a[c]=b}return a},e=(typeof labelArray=="object"&&labelArray.length>0)?"/-/"+l(labelArray)[0]:"",h=function(b){var c=b.feed.openSearch$totalResults.$t-d.numPosts,a=o(1,(c>0?c:1));j(d.homePage.replace(/\/$/,"")+"/feeds/posts/summary"+e+"?alt=json-in-script&orderby=updated&start-index="+a+"&max-results="+d.numPosts+"&callback=showRelatedPost")},g=function(z){var s=document.getElementById(d.containerId),x=l(z.feed.entry),A=d.widgetStyle,c=d.widgetTitle+'<ul class="related-post-style-'+A+'">',b=d.newTabLink?' target="_blank"':"",y='<span style="display:block;clear:both;"></span>',v,t,w,r,u;if(!s){return}for(var q=0;q<d.numPosts;q++){if(q==x.length){break}t=x[q].title.$t;w=(d.titleLength!=="auto"&&d.titleLength<t.length)?t.substring(0,d.titleLength)+"&hellip;":t;r=("media$thumbnail" in x[q]&&d.thumbnailSize!==false)?x[q].media$thumbnail.url.replace(/\/s[0-9]+(\-c)?/,"/s"+d.thumbnailSize):d.noImage;u=("summary" in x[q]&&d.summaryLength>0)?x[q].summary.$t.replace(/<br ?\/?>/g," ").replace(/<.*?>/g,"").replace(/[<>]/g,"").substring(0,d.summaryLength)+"&hellip;":"";for(var p=0,a=x[q].link.length;p<a;p++){v=(x[q].link[p].rel=="alternate")?x[q].link[p].href:"#"}if(A==2){c+='<li><img alt="" class="related-post-item-thumbnail" src="'+r+'" width="'+d.thumbnailSize+'" height="'+d.thumbnailSize+'"><a class="related-post-item-title" title="'+t+'" href="'+v+'"'+b+">"+w+'</a><span class="related-post-item-summary"><span class="related-post-item-summary-text">'+u+'</span> <a href="'+v+'" class="related-post-item-more"'+b+">"+d.moreText+"</a></span>"+y+"</li>"}else{if(A==3||A==4){c+='<li class="related-post-item" tabindex="0"><a class="related-post-item-title" href="'+v+'"'+b+'><img alt="" class="related-post-item-thumbnail lazyload" src="'+r+'" width="'+d.thumbnailSize+'" height="'+d.thumbnailSize+'"></a><div class="related-post-item-tooltip"><a class="related-post-item-title" title="'+t+'" href="'+v+'"'+b+">"+w+"</a></div>"+y+"</li>"}else{if(A==5){c+='<li class="related-post-item" tabindex="0"><a class="related-post-item-wrapper" href="'+v+'" title="'+t+'"'+b+'><img alt="" class="related-post-item-thumbnail" src="'+r+'" width="'+d.thumbnailSize+'" height="'+d.thumbnailSize+'"><span class="related-post-item-tooltip">'+w+"</span></a>"+y+"</li>"}else{if(A==6){c+='<li><a class="related-post-item-title" title="'+t+'" href="'+v+'"'+b+">"+w+'</a><div class="related-post-item-tooltip"><img alt="" class="related-post-item-thumbnail" src="'+r+'" width="'+d.thumbnailSize+'" height="'+d.thumbnailSize+'"><span class="related-post-item-summary"><span class="related-post-item-summary-text">'+u+"</span></span>"+y+"</div></li>"}else{c+='<li><a title="'+t+'" href="'+v+'"'+b+">"+w+"</a></li>"}}}}}s.innerHTML=c+="</ul>"+y;d.callBack()};randomRelatedIndex=h;showRelatedPost=g;j(d.homePage.replace(/\/$/,"")+"/feeds/posts/summary"+e+"?alt=json-in-script&orderby=updated&max-results=0&callback=randomRelatedIndex")})(window,document,document.getElementsByTagName("head")[0]);
    
function openSosprofil(){var e=document.getElementById("search-box");"block"!==e.style.display?e.style.display="block":e.style.display="none";var e=document.getElementById("close-icon");"block"!==e.style.display?e.style.display="block":e.style.display="none";var e=document.getElementById("sos-profil");"none"!==e.style.display?e.style.display="none":e.style.display="block";var e=document.getElementById("search-icon");"none"!==e.style.display?e.style.display="none":e.style.display="block"};

function resetScroller(e){var o=window.pageYOffset,n=document.getElementById(e).offsetTop,r=setTimeout("resetScroller('"+e+"')",speed);o>n?(scrollY=o-distance,window.scroll(0,scrollY)):clearTimeout(r)}var appended=!1,bookmark=document.createElement("div");bookmark.id="backto-top",bookmark.innerHTML='<div id="backtotop" onclick="return false;" onmousedown="resetScroller(&quot;sticky&quot;);"></div>',onscroll=function(){var e=document.documentElement.scrollTop||document.body.scrollTop;e>600?appended||(document.body.appendChild(bookmark),appended=!0):appended&&(document.body.removeChild(bookmark),appended=!1)};var scrollY=0,distance=40,speed=24;

function showPagemenu(){var e=document.getElementById("page-menu");"block"!==e.style.display?e.style.display="block":e.style.display="none";$(".menu_ikon").toggleClass("hidemenu_ikon");};