angular.module('dataService', [])
  .service('DataModel', function($http) {
    var model = this,
        numbers;

    function extract(result) {
      return result.data;
    }

    function cacheNumbers(result) {
      numbers = extract(result);
      return numbers;
    }
    model.getNumbers = function (URL) {
      return $http.get(URL).then(cacheNumbers);
    }
  });
