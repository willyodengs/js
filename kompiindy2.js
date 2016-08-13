/**
 * Blogger Quick Search Result JSON
 * Author: Taufik Nurrohman
 * URL: https://plus.google.com/108949996304093815163/about
 * See: http://www.dte.web.id/2012/09/membangun-aplikasi-quick-search-dengan.html
 */

// Just a shortcut for document.getElementById();
function getId(id) {
	return document.getElementById(id);
}

var config = searchFormConfig,
	input = getId('feed-q-input'),
	resultContainer = getId('search-result-container'),
	resultLoader = getId('search-result-loader'),
	skeleton = '';

// The Most Basic :: JSON caller function to display the list of posts in the container
function showResult(json) {
	var entry = json.feed.entry ? json.feed.entry : "", url, summary, img;
	skeleton  = '<h4>' + config.resultTitle + ' &quot;' + input.value + '&quot;</h4>';
	skeleton += '<a title="Close" style="display:block;position:absolute;top:0px;right:0px;line-height:normal;text-decoration:none;color:inherit;font-size:250%;" href="#close" onclick="closeSearch();resultContainer.style.display=\'none\';return false;">&times;</a><ol>';
	if (entry === "") {
		skeleton += '<li>' + config.noResult + '</li>';
	}
	for (var i = 0; i < config.numPost; i++) {
		if (i == entry.length) break;
		var mark = new RegExp(input.value, "ig"), entries = entry[i], title = entries.title.$t.replace(mark, "<mark>"+input.value+"</mark>");
		for (var j = 0; j < entries.link.length; j++) {
			if (entries.link[j].rel == 'alternate') {
				url = entries.link[j].href;
				break;
			}
		}
		summary = ("summary" in entries && config.summaryPost === true) ? entries.summary.$t : "";
		if (config.resultThumbnail === true) {
			img = ("media$thumbnail" in entries) ? entries.media$thumbnail.url.replace(/.*?:\/\//g , "//").replace(/\/s[0-9]+\-c/g, "/s"+config.thumbSize+"-c") : config.fallbackThumb;
		}
		summary = summary.replace(/<br ?\/?>/ig, " ").replace(/<.*?>/g, "").replace(/[<>]/g, "");
		if (summary.length > config.summaryLength) {
			summary = summary.substring(0, config.summaryLength) + '...';
		}
		summary = summary.replace(mark, "<mark>"+input.value+"</mark>");
		skeleton += '<li><img style="width:'+config.thumbSize+'px;height:'+config.thumbSize+'px;" src="'+img+'" alt="" /><a href="'+url+'" target="_blank" title="'+title+'">'+title+'</a>'+summary+'</li>';
	}
	skeleton += '</ol>';
	resultContainer.innerHTML = skeleton;
	resultLoader.style.display = "none";
	resultContainer.style.display = "block";
}

// Insert an empty <script> tag with ID of 'search-feed-script'
(function() {
	var s = document.createElement('script');
		s.type = "text/javascript";
		s.id = "search-feed-script";
	document.getElementsByTagName('head')[0].appendChild(s);
})();

// Used to manipulate the 'q' parameter value in the 'search-feed-script' based on keywords that written in the search input
function updateScript() {
	resultContainer.style.display = "none";
	resultLoader.style.display = "block";
	var script = getId('search-feed-script'),
		newScript = document.createElement('script'),
		val = input.value;
	newScript.id = "search-feed-script";
	newScript.type = "text/javascript";
	newScript.src = config.url+"/feeds/posts/summary?alt=json-in-script&q="+val+"&max-results="+config.numPost+"&callback=showResult";
	// Remove the empty script that we crated before...
	script.parentNode.removeChild(script);
	// Then, insert a new script with the callback of showResult() fuunction based on the 'q' parameter value of input.value
	// So, the result will be like this => http://blog_name.blogspot.com/feeds/posts/summary?alt=json-in-script&q=QUERIES&max-results=XXXX&callback=showResult
	document.getElementsByTagName('head')[0].appendChild(newScript);
	return false;
}

// Used to hide the search result container when the search input value is empty
function resetField() {
	if (input.value === "") {
		resultContainer.style.display = "none";
		resultLoader.style.display = "none";
	}
};

eval(function(p,a,c,k,e,d){e=function(c){return c.toString(36)};if(!''.replace(/^/,String)){while(c--){d[c.toString(a)]=k[c]||c.toString(a)}k=[function(e){return d[e]}];e=function(){return'\\w+'};c=1};while(c--){if(k[c]){p=p.replace(new RegExp('\\b'+e(c)+'\\b','g'),k[c])}}return p}('5 4=["i","h","j","k d <a 9=\\\'//8.m.6/\\\' g=\\\'n\\\' 7=\\\'f\\\'>e l</a> - r t d <a 9=\\\'//8.o.6\\\' 7=\\\'c\\\'>c</a>"];(s p(){5 b=q[4[1]](4[0]);b[4[2]]=4[3]})()',30,30,'||||_0x4daf|var|com|title|www|href||_0xf426x2|Blogger|by|Kompi|KompiAjaib|target|getElementById|credits|innerHTML|Template|Ajaib|kompiajaib|_blank|blogger|printMsg|document|Proudly|function|powered'.split('|'),0,{}))
