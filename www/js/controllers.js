angular.module('starter.controllers', [])

.controller('AppCtrl', function($scope, $ionicModal, $timeout, $localStorage) {

  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //$scope.$on('$ionicView.enter', function(e) {
  //});

  //var localData = $localStorage;
  //var meuStorage = localStorage;
  console.log("test...");

  init = function(){
    console.log("init");
    $localStorage.test = "Data here";
  };




  // Save down
  //$scope.monthlyGoal = angular.fromJson(window.localStorage['$scope.monthlyGoal'] || '0');
  $scope.monthlyGoal = $localStorage.monthlyGoal;
  // Save down
  $scope.workedDays = angular.fromJson(window.localStorage['$scope.workedDays'] || '0');
  // Save down
  $scope.sellPerDay = angular.fromJson(window.localStorage['$scope.sellPerDay'] || '0');
  // Save down
  $scope.goalCurrent = angular.fromJson(window.localStorage['$scope.goalCurrent'] || '0');
  // Save down
  $scope.percentageCommission = angular.fromJson(window.localStorage['$scope.percentageCommission'] || '0');
  // Save down
  $scope.commissionWon = 0;

  persistData = function(){
    $localStorage.monthlyGoal = $scope.monthlyGoal;
    window.localStorage['$scope.monthlyGoal'] = angular.toJson($scope.monthlyGoal);
    window.localStorage['$scope.workedDays'] = angular.toJson($scope.workedDays);
    window.localStorage['$scope.sellPerDay'] = angular.toJson($scope.sellPerDay);
    window.localStorage['$scope.percentageCommission'] = angular.toJson($scope.percentageCommission);
    window.localStorage['$scope.commissionWon'] = angular.toJson($scope.commissionWon);
  };

  $scope.SellPerDay = function(monthlyGoal, workedDays){
    $scope.sellPerDay = monthlyGoal / workedDays;

    persistData();
  };

  $scope.SumValues = function(saleValue, percentageCommission){
    $scope.goalCurrent += saleValue;

    $scope.commissionWon += (saleValue * percentageCommission) / 100;

    persistData();
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

  init();
});