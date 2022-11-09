/* $(document).ready(function(){
    $("#terreo").click(function(){
      $(".elevador").animate({top: '400px'}),

    });
  }); */

/*   $(document).ready(function(){
    $("#primeiro").click(function(){
      $(".elevador").animate({top: '270px'});
    });
  });

  $(document).ready(function(){
    $("#segundo").click(function(){
      $(".elevador").animate({top: '140px'});
    });
  });

  $(document).ready(function(){
    $("#terceiro").click(function(){
      $(".elevador").animate({top: '10px'});
    });
  }); 
  $(document).ready(function(){
    $("#terceiro").click(function(){
      var div = $(".elevador");
      div.animate({opacity: '1.0'}, "slow");
      div.animate({top:'10px'}, "slow");
      div.animate({opacity: '0.2'}, "slow");
    });
    });

  $(document).ready(function(){
    $("#segundo").click(function(){
      var div = $(".elevador");
      div.animate({opacity: '1.0'}, "slow");
      div.animate({top:'140px'}, "slow");
      div.animate({opacity: '0.2'}, "slow");
    });
    });

  $(document).ready(function(){
    $("#primeiro").click(function(){

      $("#portaDireita").removeClass("active-right");   
      $("#portaEsquerda").removeClass("active-left"); 

      var div = $(".elevador");
      div.animate({opacity: '1.0'}, "slow");
      div.animate({top:'270px'}, "slow");
      div.animate({opacity: '0.2'}, "slow");



    });
    });

  $(document).ready(function(){
    $("#terreo").click(function(){

      $("#portaDireita").removeClass("active-right");   
      $("#portaEsquerda").removeClass("active-left"); 

      var div = $(".elevador");
      div.animate({opacity: '1.0'}, "slow");
      div.animate({top:'400px'}, "slow");
      div.animate({opacity: '0.2'}, "slow"); 

    });
    });


    $("#portaDireita").addClass("active-right");   
    $("#portaEsquerda").addClass("active-left"); 

    */
    var current = 0;
    $(document).ready(function(){
    
      $("#floorSelect li").click(function(){
      
        var floor = parseInt($(this).data("floor")),
         height = floor*20,
         animate = Math.abs(current-floor)*1000;
       if(floor == current) return;
    $("#rightDoor").removeClass("active-right");   
        $("#leftDoor").removeClass("active-left");  
        setTimeout(function(){$("#elevatorContainer").css("transition","all "+animate+"ms linear");
        $("#elevatorContainer").css("bottom",height+"%");
        current = floor;
        setTimeout(function(){
        
        $("#rightDoor").addClass("active-right");   
        $("#leftDoor").addClass("active-left");  
        
        },animate);},300);
      });
    
    });