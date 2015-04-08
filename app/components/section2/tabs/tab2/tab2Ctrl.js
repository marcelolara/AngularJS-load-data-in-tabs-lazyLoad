angular.module('tab2', ['dataService'])
  .controller("Tab2Ctrl", function ($scope, DataModel) {
    DataModel.getNumbers('json/data2.json')
      .then(function (result) {
        $scope.numbers = result;
      })
  });
