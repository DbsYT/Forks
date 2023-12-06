$(document).ready(function(){
  var hqforks = 0;
  var hqmoney = 0;
  var hqforksPlus = -1;
  var hqautoPlasticPlus = 0;
  var hqautoForkerPrice=100;
  var hqPlasticPrice = 1;
  var menu;
  $("#forks").click(function(){
    hqforks += hqforksPlus;
    changeinventory();
    changemarket();
  });

  function changeinventory(){
    $("#hqmoney").html("Money: $0", hqmoney);
    if(hqforks == 1){
      $("#hqforks").html("You now own " + hqforks + "fork.");
    }else{
       $("#hqforks").html("You now own " + hqforks + "forks.");
    }
  }
});
