module.exports = function(){
  var $ = require("jquery");
  var tags =[];
  var links =[];
  $.getJSON( "/links", function( json ) {
  links = json.data;
  json.data.forEach(function(entry) {
    var res = entry.tags.split(" ");
    afficherLinks(entry,res);
      res.forEach(function(entryy){
          tags.push(entryy);
      });
    });
    var uniqueTag = filterDouble(tags);
    console.log(uniqueTag);
 });

 function afficherLinks(entry,res){
       $( "#listLinks" ).append( "<li id='"+entry.hash+"' class='list-group-item'><a href='"+entry.href+"'>"+entry.description+"</a></li>");
      res.forEach(function(entryy){
        $( "#"+entry.hash ).append("<span class='badge'>"+entryy+"</span>");
      });
 }

  function filterDouble(tags){
    var uniqueNames = [];
    $.each(tags, function(i, el){
      if($.inArray(el, uniqueNames) === -1) uniqueNames.push(el);
    });
    return uniqueNames;
  }

  function filtrer(tags){
    console.log(tags);
    console.log(links);
    $( "#listLinks" ).empty();
    links.forEach(function(link){
      var result = true
      tags.forEach(function(tag){

        if(link.tags.indexOf(tag) === -1){
          result = false;
        }
      });
      if(result){
        var res = link.tags.split(" ");
        afficherLinks(link,res);
      }
    });
  }


/*Form part*/

$(document).ready(function(){

    $("#button").click(function(){
      var tags = $("#tagSearch").val().split(" ");
      filtrer(tags);

    });
  });
};
