window.addEventListener("scroll", myFunction);

function myFunction() {
  var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
  var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  var scrolled = (winScroll / height) * 0;
  document.getElementById("progressbar").style.width = scrolled + "%";
}