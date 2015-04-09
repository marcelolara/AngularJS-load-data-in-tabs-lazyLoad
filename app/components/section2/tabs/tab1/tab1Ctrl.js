angular.module('tab1', ["dataService"])
  .controller("Tab1Ctrl", function ($scope, DataModel) {
    DataModel.getTab1()
      .then(function (result) {
        $scope.numbers = result;
      });
  });
