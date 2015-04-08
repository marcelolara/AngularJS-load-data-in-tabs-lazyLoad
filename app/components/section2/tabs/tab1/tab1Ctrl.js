angular.module('tab1', ["dataService"])
  .controller("Tab1Ctrl", function ($scope, DataModel) {
    DataModel.getNumbers('json/data1.json')
      .then(function (result) {
        $scope.numbers = result;
      });
  });
