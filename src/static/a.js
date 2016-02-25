module.exports = function(){
  console.log('hello');

  $.getJSON( "http://localhost:8080/lists", function( json ) {
  json.data.forEach(function(entry) {
    console.log(entry.href);
    $( "#listLinks" ).append( "  <li class='list-group-item'><a href='"+entry.href+"'>"+entry.href+"</a></li>" );
});

 });
};
