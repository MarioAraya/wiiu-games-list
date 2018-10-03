(function(){
  var juegos = { juegos: juegosJson }

  var source   = document.getElementById("tr-template").innerHTML;
  var template = Handlebars.compile(source);
  var html = template(juegos)
  document.getElementById("output").innerHTML = html

  linkClick = function(el, url){
    var wnd = window.open(url);
    setTimeout(function() {
      wnd.close();
      document.execCommand("paste");
    }, 3000);
    el.nextElementSibling.select()
    document.execCommand("copy");
    return false;
  } 
})();
