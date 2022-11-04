(function(c, a, m) {
  var title = (c || document.title) + " " + (a || " ") + " ";
  setInterval(function() {
    title = title.substring(1) + title.charAt(0);
    document.title = title;
  }, m || 150);
})(
  "69420 music.com",
  "-",150);