angular.module('starter.controllers', [])

.controller('AppCtrl', function($scope, $timeout, $localStorage, $ionicPopup) {

  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //$scope.$on('$ionicView.enter', function(e) {
  //});

  // Save down
  //$scope.monthlyGoal = angular.fromJson(window.localStorage['$scope.monthlyGoal'] || '0');
  $scope.monthlyGoal = $localStorage.monthlyGoal || 0;
  // Save down
  $scope.workedDays = $localStorage.workedDays;
  // Save down
  $scope.sellPerDay = $localStorage.sellPerDay || 0;
  // Save down
  $scope.goalCurrent = $localStorage.goalCurrent || 0;
  // Save down
  $scope.percentageCommission = $localStorage.percentageCommission;
  // Save down
  $scope.commissionWon = $localStorage.commissionWon || 0;


  $scope.SellPerDay = function(monthlyGoal, workedDays, percentageCommission){
    $scope.sellPerDay = monthlyGoal / workedDays;

    $localStorage.monthlyGoal = monthlyGoal;
    $localStorage.workedDays = workedDays;
    $localStorage.percentageCommission = percentageCommission;
    $localStorage.sellPerDay = $scope.sellPerDay;
    
    window.location.reload();
  };

  // An alert dialog
   var showAlert1 = function() {
     var alertPopup = $ionicPopup.alert({
       title: 'Alerta',
       template: 'Defina o valor da porcemtagem em configurações <br> <a class="button button-block button-positive" href="#/app/setup"> configurações </a>'
     });
     alertPopup.then(function(res) {
       console.log('Thank you for not eating my delicious ice cream cone');
     });
   };

   // An alert dialog
   var showAlert2 = function() {
     var alertPopup = $ionicPopup.alert({
       title: 'Alerta',
       template: 'Defina um valor para a venda'
     });
     alertPopup.then(function(res) {
       console.log('Thank you for not eating my delicious ice cream cone');
     });
   };

  $scope.SumValues = function(saleValue, percentageCommission){
    if(percentageCommission == 0 || percentageCommission == null){
      showAlert1();
    }else if(saleValue == null){
      showAlert2();
    }else{
      console.log("commissionWon = " + $localStorage.commissionWon);
      $scope.goalCurrent += saleValue;

      $scope.commissionWon += (saleValue * percentageCommission) / 100;

      $localStorage.goalCurrent = $scope.goalCurrent;
      $localStorage.commissionWon = $scope.commissionWon;

      window.location.reload();
    }    

    
  };

  $scope.test = false;

  $scope.login = function() {
    //window.location.reload();
    $scope.test = true;
    console.log("Reload now");
    console.log("$scope.test = " + $scope.test);
  };

  // Perform the login action when the user submits the login form
  $scope.doLogin = function() {
    // Simulate a login delay. Remove this and replace with your login
    // code if using a login system
    $timeout(function() {
      $scope.closeLogin();
    }, 1000);
  };
  
});