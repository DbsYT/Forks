$(document).ready(function(){
  var hqforks = 0;
  var hqmoney = 0;
  var hqforksPlus = -1;
  var hqautoForkerPlus = 0;
  var hqautoForkerPrice=100;
  var hqforkPrice = 1;
  var menu;
  $("#forks").click(function(){
    var hqforks += var hqforksPlus;
    changeinventory();
    changemarket();
  });

  function changeinventory(){
    $("#hqmoney").html("Money: $", var hqmoney;
    if(var forks == 1){
      $("#hqforks").html("You now own " + var hqforks + "fork.");
    }else{
       $("#hqforks").html("You now own " + var hqforks + "forks.");
    }
  }
});
