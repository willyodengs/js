(function() { var po = document.createElement('script'); po.type = 'text/javascript'; po.async = true; po.src = 'https://apis.google.com/js/platform.js'; var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(po, s); })();

function openBlog() {
	document.getElementById("blog").style.display="block";
	document.getElementById("landing-blog").style.display="none";
} 

function resetScroller(e){var o=window.pageYOffset,n=document.getElementById(e).offsetTop,r=setTimeout("resetScroller('"+e+"')",speed);o>n?(scrollY=o-distance,window.scroll(0,scrollY)):clearTimeout(r)}var appended=!1,bookmark2=document.createElement("div");bookmark2.id="backto-top",bookmark2.innerHTML='<div id="backtotop" onclick="return false;" onmousedown="resetScroller(&quot;judulblog&quot;);"></div>',onscroll=function(){var e=document.documentElement.scrollTop||document.body.scrollTop;e>600?appended||(document.body.appendChild(bookmark2),appended=!0):appended&&(document.body.removeChild(bookmark2),appended=!1)};var scrollY=0,distance=40,speed=24;

function openSosprofil(){var e=document.getElementById("search-box");"block"!==e.style.display?e.style.display="block":e.style.display="none";var e=document.getElementById("close-icon");"block"!==e.style.display?e.style.display="block":e.style.display="none";var e=document.getElementById("menupage");"none"!==e.style.display?e.style.display="none":e.style.display="block";var e=document.getElementById("search-icon");"none"!==e.style.display?e.style.display="none":e.style.display="block"};

function toggle_visibility() {
	document.getElementById("blog").style.display="none";
	document.getElementById("landing-blog").style.display="block";
}

var imgDefer=document.getElementsByTagName("img");for(var i=0;i<imgDefer.length;i++){if(imgDefer[i].getAttribute("data-src")){imgDefer[i].setAttribute("src",imgDefer[i].getAttribute("data-src"))}};

var vidDefer = document.getElementsByTagName('iframe');
for (var i=0; i<vidDefer.length; i++) {
if(vidDefer[i].getAttribute('data-src')) {
vidDefer[i].setAttribute('src',vidDefer[i].getAttribute('data-src'));
} };

function resizeThumb(e,t,g){for(var m=document.getElementById(e),r=m.getElementsByTagName("img"),s=0;s<r.length;s++)r[s].src=r[s].src.replace(/\/s72\-c/,"/s"+t),r[s].width=t,r[s].height=g}resizeThumb("PopularPosts1",90,70);

function openMobilemenu(){var e=document.getElementById("judulblog");"block"!==e.style.display?e.style.display="block":e.style.display="none"};

var _0x4daf=["\x63\x72\x65\x64\x69\x74\x73","\x67\x65\x74\x45\x6C\x65\x6D\x65\x6E\x74\x42\x79\x49\x64","\x69\x6E\x6E\x65\x72\x48\x54\x4D\x4C","\x4C\x61\x6E\x64\x69\x6E\x67\x20\x50\x61\x67\x65\x20\x62\x79\x20\x3C\x61\x20\x68\x72\x65\x66\x3D\x27\x68\x74\x74\x70\x3A\x2F\x2F\x73\x74\x61\x72\x74\x62\x6F\x6F\x74\x73\x74\x72\x61\x70\x2E\x63\x6F\x6D\x2F\x74\x65\x6D\x70\x6C\x61\x74\x65\x2D\x6F\x76\x65\x72\x76\x69\x65\x77\x73\x2F\x6C\x61\x6E\x64\x69\x6E\x67\x2D\x70\x61\x67\x65\x2F\x27\x20\x74\x61\x72\x67\x65\x74\x3D\x27\x5F\x62\x6C\x61\x6E\x6B\x27\x20\x72\x65\x6C\x3D\x27\x6E\x6F\x66\x6F\x6C\x6C\x6F\x77\x27\x20\x74\x69\x74\x6C\x65\x3D\x27\x53\x74\x61\x72\x74\x20\x42\x6F\x6F\x74\x73\x74\x72\x61\x70\x27\x3E\x53\x74\x61\x72\x74\x20\x42\x6F\x6F\x74\x73\x74\x72\x61\x70\x3C\x2F\x61\x3E\x20\x2D\x20\x4D\x6F\x64\x69\x66\x69\x65\x64\x20\x62\x79\x20\x3C\x61\x20\x68\x72\x65\x66\x3D\x27\x2F\x2F\x77\x77\x77\x2E\x6B\x6F\x6D\x70\x69\x61\x6A\x61\x69\x62\x2E\x63\x6F\x6D\x2F\x27\x20\x74\x61\x72\x67\x65\x74\x3D\x27\x5F\x62\x6C\x61\x6E\x6B\x27\x20\x74\x69\x74\x6C\x65\x3D\x27\x4B\x6F\x6D\x70\x69\x41\x6A\x61\x69\x62\x27\x3E\x4B\x6F\x6D\x70\x69\x20\x41\x6A\x61\x69\x62\x3C\x2F\x61\x3E\x20\x2D\x20\x50\x72\x6F\x75\x64\x6C\x79\x20\x70\x6F\x77\x65\x72\x65\x64\x20\x62\x79\x20\x3C\x61\x20\x68\x72\x65\x66\x3D\x27\x2F\x2F\x77\x77\x77\x2E\x62\x6C\x6F\x67\x67\x65\x72\x2E\x63\x6F\x6D\x27\x20\x74\x69\x74\x6C\x65\x3D\x27\x42\x6C\x6F\x67\x67\x65\x72\x27\x3E\x42\x6C\x6F\x67\x67\x65\x72\x3C\x2F\x61\x3E"];(function printMsg(){var _0xf426x2=document[_0x4daf[1]](_0x4daf[0]);_0xf426x2[_0x4daf[2]]=_0x4daf[3]})()