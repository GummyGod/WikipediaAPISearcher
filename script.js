$(document).ready(function(){
 $("#submitSearch").on("click",function(){
   var searchedArticle = $("#userInput").val();
  var api = "https://en.wikipedia.org/w/api.php?action=opensearch&search=" + searchedArticle + "&format=json&origin=*";
    $.ajax({
      url:api,
      success: function(data){ 
       /** console.log(data[1]); // title
        console.log(data[2]); //description
        console.log(data[3]); // link **/
        $("#results").html("");
        for(i=0;i<data[i].length;i++){
        $("#results").append("<li><a href ="+ data[3][i]+">"+data[1][i] +"<a><p>"+data[2][i]+"</p><li>");
        }
      },
      error: function(error){
      alert("There was an error")
     }
  });
 }); 
  $("#userInput").keypress(function(e){
     if(e.which == 13){
      $("#submitSearch").click(); 
     }
   });
});