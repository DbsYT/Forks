$(document).ready(function(){
    var hqforks = 0;
    var hqmoney = 0;
    var hqforksPlus = 1;
    var hqautoForkerPlus = 0;
    var hqautoForkerPrice= 100;
    var hqforkPrice = 1;
    var menu;

    $("#forks").click(function(){
      hqforks += hqforksPlus;
      changeinventory();
      changemarket();
    });

    $("#visit").click(function(){
        menu = switchMenu("marketplace");
        changeMarket();
    });

    $("#return").click(function(){
       menu = switchMenu("main");
    });
  
  function changeinventory(){
      $("#tmoney").html("Money: $", hqmoney);
      if(hqforks == 1){
        $("#tforks").html("You now own " + hqforks + " fork.");
      }else{
         $("#tforks").html("You now own " + hqforks + " forks.");
      }
  }

  function changemarket(){
    if(hqforks > 0){
    $("#sellAll").css("display", "block");
    }else{
      $("#sellAll").css("display", "none");
    }
    if(hqforks >= 1){
      $("#sell1").css("display", "block");
    }else{
      $("#sell1").css("display", "none");
    }
    if(hqforks >= 10){
      $("#sell10").css("display", "block");
    }else{
      $("#sell10").css("display", "none");
    }
    if(hqforks > 100){
      $("#sell100").css("display", "block");
    }else{
      $("#sell100").css("display", "none");
    }

  }

    function switchMenu(menu){
        $(".menus").children().css("display", "none");
        $("." + menu).css("display", "block");
        return menu;
    }
});
