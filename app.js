(function(){
  var juegos = { juegos: juegosJson }

  var source   = document.getElementById("tr-template").innerHTML;
  var template = Handlebars.compile(source);
  var html = template(juegos)
  document.getElementById("output").innerHTML = html

  linkClick = function(el, url){
    el.nextElementSibling.select()
    document.execCommand("copy");
    
    var wnd = window.open(url);
    setTimeout(function() {
      wnd.close();
    }, 3000);
    return false;
  } 
})();
