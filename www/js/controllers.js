angular.module('starter.controllers', [])

.controller('AppCtrl', function($scope, $ionicModal, $timeout, $localStorage) {

  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //$scope.$on('$ionicView.enter', function(e) {
  //});

  // Save down
  //$scope.monthlyGoal = angular.fromJson(window.localStorage['$scope.monthlyGoal'] || '0');
  $scope.monthlyGoal = $localStorage.monthlyGoal;
  // Save down
  $scope.workedDays = $localStorage.workedDays;
  // Save down
  $scope.sellPerDay = $localStorage.sellPerDay;
  // Save down
  $scope.goalCurrent = $localStorage.goalCurrent || 0;
  // Save down
  $scope.percentageCommission = $localStorage.percentageCommission;
  // Save down
  $scope.commissionWon = $localStorage.commissionWon;
  
  $scope.saleValue = 0;


  $scope.SellPerDay = function(monthlyGoal, workedDays, percentageCommission){
    $scope.sellPerDay = monthlyGoal / workedDays;

    $localStorage.monthlyGoal = monthlyGoal;
    $localStorage.workedDays = workedDays;
    $localStorage.percentageCommission = percentageCommission;
    $localStorage.sellPerDay = $scope.sellPerDay;
    
  };

  $scope.SumValues = function(saleValue, percentageCommission){
    if(saleValue == undefined){
      $scope.saleValue = 0;
    }else{
      
      $scope.goalCurrent += saleValue;

      $scope.commissionWon += (saleValue * percentageCommission) / 100;

      $localStorage.goalCurrent = $scope.goalCurrent;
      $localStorage.commissionWon = $scope.commissionWon;
    }
  };

  // Form data for the login modal
  $scope.loginData = {};

  // Create the login modal that we will use later
  $ionicModal.fromTemplateUrl('templates/login.html', {
    scope: $scope
  }).then(function(modal) {
    $scope.modal = modal;
  });

  // Triggered in the login modal to close it
  $scope.closeLogin = function() {
    $scope.modal.hide();
  };

  // Open the login modal
  $scope.login = function() {
    $scope.modal.show();
  };

  // Perform the login action when the user submits the login form
  $scope.doLogin = function() {
    console.log('Doing login', $scope.loginData);

    // Simulate a login delay. Remove this and replace with your login
    // code if using a login system
    $timeout(function() {
      $scope.closeLogin();
    }, 1000);
  };
});