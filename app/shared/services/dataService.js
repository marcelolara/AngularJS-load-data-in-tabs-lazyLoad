angular.module('dataService', [])
  .service('DataModel', function($http) {
    var model = this,
        URLS = {
          TAB1: 'json/data1.json',
          TAB2: 'json/data2.json'
        },
        numbers;


    function extract(result) {
      return result.data;
    }

    function cacheNumbers(result) {
      numbers = extract(result);
      return numbers;
    }

    model.getTab1 = function () {
      return $http.get(URLS.TAB1).then(cacheNumbers);
    }
    model.getTab2 = function () {
      return $http.get(URLS.TAB2).then(cacheNumbers);
    }
  });
