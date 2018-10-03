(function(){
  var juegos = { juegos: juegosJson }

  var source   = document.getElementById("tr-template").innerHTML;
  var template = Handlebars.compile(source);
  var html = template(juegos)
  document.getElementById("output").innerHTML = html

  linkClick = function(el){
    el.nextElementSibling.select()
    document.execCommand("copy");
  } 
})();
