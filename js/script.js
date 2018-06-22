var app = angular.module('myApp',[]);

app.controller("myCtrl",function($scope){
  $scope.fruits = [
    {
      name: "Apple",
      quality: "A",
      price: "150"
    },
    {
      name: "Orange",
      quality: "B",
      price: "120"
    },
    {
      name: "Banana",
      quality: "A",
      price: "100"
    },
    {
      name: "Grape",
      quality: "C",
      price: "130"
    },
    {
      name: "Mango",
      quality: "A",
      price: "110"
    }
  ];
  $scope.showSubMenu = function(){
    let menu = document.getElementsByClassName("nav-submenu")[0];
    console.log("Clicked!",menu.style.display);
    if(menu.style.display=="" || menu.style.display == "none")
      menu.style.display = "block";
    else
      menu.style.display = "none";
  };
});
