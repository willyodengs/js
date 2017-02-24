(function() { var po = document.createElement('script'); po.type = 'text/javascript'; po.async = true; po.src = 'https://apis.google.com/js/platform.js'; var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(po, s); })();

document.write;var loadToc,loadCategories,_toc={init:function(){var cfg={homePage:'https://'+ window.location.hostname,maxResults:3,numChars:270,thumbWidth:250,thumbHeight:140,navText:"Tampilkan artikel selanjutnya &#9660;",resetToc:"Kembali ke Awal",noImage:"httsp://2.bp.blogspot.com/-11FkySHGB5Y/TpZ6SSbsF2I/AAAAAAAAA94/zK10UaL7jgo/s1600/images.jpeg",loading:"<span>Memuat...</span>",counting:"<div>Memuat artikel...</div>",searching:"<span>Mencari...</span>"},w=window,d=document,el=function(id){return d.getElementById(id);},o={a:el('feed-order'),b:el('label-sorter').parentNode,c:el('post-searcher'),d:el('feed-q'),e:el('result-desc'),f:el('feed-container'),g:el('feed-nav'),h:d.getElementsByTagName('head')[0],i:0,j:null,k:'published',l:0,m:""},fn={a:function(){old=el('temporer-script');old.parentNode.removeChild(old);},b:function(param){var script=d.createElement('script');script.type="text/javascript";script.id="temporer-script";script.src=param;if(el('temporer-script'))fn.a();o.h.appendChild(script);},c:function(mode,tag,order){o.i++;o.e.innerHTML=cfg.counting;o.g.innerHTML=cfg[mode==1?"searching":"loading"];if(mode===0){fn.b(tag!==null?cfg.homePage+'/feeds/posts/summary/-/'+ tag+'?alt=json-in-script&start-index='+((o.i*cfg.maxResults)+ 1)+'&max-results='+ cfg.maxResults+'&orderby='+ order+'&callback=loadToc':cfg.homePage+'/feeds/posts/summary?alt=json-in-script&start-index='+((o.i*cfg.maxResults)+ 1)+'&max-results='+ cfg.maxResults+'&orderby='+ order+'&callback=loadToc');}else if(mode==1){fn.b(cfg.homePage+'/feeds/posts/summary?alt=json-in-script&start-index='+((o.i*cfg.maxResults)+ 1)+'&max-results='+ cfg.maxResults+'&q='+ tag+'&orderby='+ order+'&callback=loadToc');}
o.j=(tag!==null)?tag:null;o.l=mode;o.a.disabled=true;o.b.children[0].disabled=true;},d:function(json){var _h;o.g.innerHTML="";o.e.innerHTML=o.l==1?'<span>Hasil penelusuran untuk kata kunci <b>&#8220;'+ o.m+'&#8221;</b> ('+ json.feed.openSearch$totalResults.$t+' Hasil)</span>':'<strong>Total: '+ json.feed.openSearch$totalResults.$t+' Artikel</strong>';if("entry"in json.feed){var a=json.feed.entry,b,c,_d,e="0 Komentar",f="",g;for(var i=0;i<cfg.maxResults;i++){if(i==a.length)break;b=a[i].title.$t;_d=("summary"in a[i])?a[i].summary.$t.replace(/<br ?\/?>/ig," ").replace(/<(.*?)>/g,"").replace(/<iframe/ig,"").substring(0,cfg.numChars):"";g=("media$thumbnail"in a[i])?a[i].media$thumbnail.url.replace(/\/s[0-9]+\-c/,"\/s"+ cfg.thumbWidth+""):cfg.noImage.replace(/\/s[0-9]+\-c/,"\/s"+ cfg.thumbWidth+"");for(var j=0,jen=a[i].link.length;j<jen;j++){c=(a[i].link[j].rel=="alternate")?a[i].link[j].href:"#";}
for(var k=0,ken=a[i].link.length;k<ken;k++){if(a[i].link[k].rel=="replies"&&a[i].link[k].type=="text/html"){e=a[i].link[k].title;break;}}
_h=d.createElement('li');_h.innerHTML='<div class="col-sm-6 col-md-4"><div class="thumbnail"><div class="caption"><a class="toc-title" href="'+ c+'" target="_blank" title="'+ b+'">'+ b+'</a><p>'+ _d+'&hellip;</p></div></div></div>';o.f.appendChild(_h);}
_h=d.createElement('a');_h.href='#load-more';_h.innerHTML=cfg.navText;_h.onclick=function(){fn.c(o.l,o.j,o.k);return false;};}else{_h=d.createElement('a');_h.href='#reset-content';_h.innerHTML=cfg.resetToc;_h.onclick=function(){o.i=-1;o.e.innerHTML=cfg.counting;o.f.innerHTML="";fn.c(0,null,'published');o.a.innerHTML=o.a.innerHTML;o.b.children[0].innerHTML=o.b.children[0].innerHTML;return false;};}
o.g.appendChild(_h);o.a.disabled=false;o.b.children[0].disabled=false;},e:function(json){var a=json.feed.category,b='<select id="label-sorter"><option value="" selected disabled>Pilih Kategori...</option>';for(var i=0,len=a.length;i<len;i++){b+='<option value="'+ encodeURIComponent(a[i].term)+'">'+ encodeURIComponent(a[i].term)+'</option>';}
b+='</select>';o.b.innerHTML=b;o.b.children[0].onchange=function(){o.i=-1;o.f.innerHTML="";o.g.innerHTML=cfg.loading;fn.c(0,this.value,o.k);};}};loadToc=fn.d;loadCategories=fn.e;fn.b(cfg.homePage+'/feeds/posts/summary?alt=json-in-script&start-index='+(o.i+ 1)+'&max-results='+ cfg.maxResults+'&orderby=published&callback=loadToc');fn.b(cfg.homePage+'/feeds/posts/summary?alt=json-in-script&max-results=0&orderby=published&callback=loadCategories');o.a.onchange=function(){o.i=-1;o.f.innerHTML="";o.g.innerHTML=cfg.counting;o.b.children[0].innerHTML=o.b.children[0].innerHTML;fn.c(0,null,this.value);o.k=this.value;};o.c.onsubmit=function(){o.i=-1;o.f.innerHTML="";o.m=o.d.value;fn.c(1,o.d.value,o.k);return false;};}};_toc.init();

$(function(){ // document ready
   if ($('#sidebar1,#sidebar3').length) { // make sure "#sticky" element exists
      var el = $('#sidebar1,#sidebar3');
      var stickyTop = $('#sidebar1,#sidebar3').offset().top; // returns number
      var stickyHeight = $('#sidebar1,#sidebar3').height();

      $(window).scroll(function(){ // scroll event
          var limit = $('#sticky_stoper').offset().top - stickyHeight - 20;

          var windowTop = $(window).scrollTop(); // returns number

          if (stickyTop < windowTop){
             el.css({ position: 'fixed', top: '65px' });
             el.addClass("sticky_widget");
          }
          else {
             el.css('position','static');
             el.removeClass("sticky_widget");
          }

          if (limit < windowTop) {
          var diff = limit - windowTop;
          el.css({top: diff});
          el.removeClass("sticky_widget");
          }
        });
   }
});

var showNavbar = function(){
    var w = $(this).width();
    if(w > 640 && $(window).scrollTop() > 100){
        $('.navbar-header').show();
    } else {
        $('.navbar-header').hide();
    }
};

$(window).resize(function(){
   showNavbar();
});
$(window).scroll(function(){
    showNavbar();
});
