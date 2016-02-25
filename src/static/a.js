module.exports = function(){
  var $ = require("jquery");

  $.getJSON( "/links", function( json ) {
  json.data.forEach(function(entry) {
    $( "#listLinks" ).append( "<li class='list-group-item'><div class='row'><a href='"+entry.href+"'>"+entry.href+"</a></div><div class='row'><span class='badge'>"+entry.tags+"</span></div></li>" );
});

 });
};
