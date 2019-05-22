/* global $ */

$(document).ready(function() {
    

$(".click").click(function() {
        var searchTerm =$(".enter").val();
        var musicList = "https://api.soundcloud.com/tracks?q="+searchTerm+" &client_id=5aa8e389ba4e24b6106af5159ab3e344";
        
        console.log(searchTerm);
        
      
        
        
        
        
        
        $.ajax({
          url: musicList,
          method: "GET",
          success: function(response) {
              var imageSrc= response[0].artwork_url;
              var imageHtml= "<img src='"+imageSrc+"'>" ;
              
            console.log(imageSrc);
              $("#names").html(imageHtml);
          }
        }); 
    });
    
    
    
});