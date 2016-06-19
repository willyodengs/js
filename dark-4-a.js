(function() { var po = document.createElement('script'); po.type = 'text/javascript'; po.async = true; po.src = 'https://apis.google.com/js/platform.js'; var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(po, s); })();

function makemeSticky(e){function t(){var e=s.getBoundingClientRect();e.top<0?(n.className=a+" makesticking",n.style.width=i+"px"):n.className=a}var n=document.getElementById(e),s=document.createElement("div");n.parentNode.insertBefore(s,n);var i=n.offsetWidth,a=n.className+" makesticky";window.addEventListener("scroll",t,!1)}makemeSticky("judulblog");

var button=document.querySelector("#menu-search");button.addEventListener("click",function(){var t=document.querySelector(button.getAttribute("data-target"));t.style.right="0"==t.style.display?"-340px":"0"});
var button=document.querySelector("#close-menu");button.addEventListener("click",function(){var t=document.querySelector(button.getAttribute("data-target"));t.style.right="-340px"==t.style.display?"0":"-340px"});

var vidDefer = document.getElementsByTagName('iframe');
for (var i=0; i<vidDefer.length; i++) {
if(vidDefer[i].getAttribute('data-src')) {
vidDefer[i].setAttribute('src',vidDefer[i].getAttribute('data-src'));
} };

  function openSosprofil() {
    var e = document.getElementById("sos-profil");
    "none" !== e.style.display ? e.style.display = "none" : e.style.display = "block";
    var e = document.getElementById("search-box");
    "block" !== e.style.display ? e.style.display = "block" : e.style.display = "none";
    var e = document.getElementById("search-icon");
    "none" !== e.style.display ? e.style.display = "none" : e.style.display = "block";
    var e = document.getElementById("close-icon");
    "block" !== e.style.display ? e.style.display = "block" : e.style.display = "none";
  };
function openMobilemenu(){var e=document.getElementById("mobile-menu-nav");"block"!==e.style.display?e.style.display="block":e.style.display="none"};

  function openMenu() {
    var e = document.getElementById("cssmenu");
    "inline-block" !== e.style.display ? e.style.display = "inline-block" : e.style.display = "none";
    var e = document.getElementById("menu-icon");
    "none" !== e.style.display ? e.style.display = "none" : e.style.display = "block";
    var e = document.getElementById("close-menu-icon");
    "block" !== e.style.display ? e.style.display = "block" : e.style.display = "none";
    var e = document.getElementById("search-sosprofil");
    "none" !== e.style.display ? e.style.display = "none" : e.style.display = "block";
    var e = document.getElementById("search-icon");
    "none" !== e.style.display ? e.style.display = "none" : e.style.display = "block";
  };
  
