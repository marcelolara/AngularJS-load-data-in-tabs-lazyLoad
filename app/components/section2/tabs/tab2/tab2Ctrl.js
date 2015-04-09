angular.module('tab2', ['dataService'])
  .controller("Tab2Ctrl", function ($scope, DataModel) {
    DataModel.getTab2()
      .then(function (result) {
        $scope.numbers = result;
      })
  });
