app.config(function($stateProvider, $urlRouterProvider){

  $urlRouterProvider.otherwise("/section1");

  $stateProvider
    .state("section1", {
      url: "/section1",
      templateUrl: "app/components/section1/section1View.html",
      controller: "Section1Ctrl",
      resolve: {
        section1: function ($ocLazyLoad) {
          return $ocLazyLoad.load({
            name: 'section1',
            files: ['app/components/section1/section1Ctrl.js']
          });
        }
      }
    })
    .state("section2", {
      url: "/section2",
      templateUrl: "app/components/section2/section2View.html",
      controller: "Section2Ctrl",
      resolve: {
        section2: function ($ocLazyLoad) {
          return $ocLazyLoad.load({
            files: ['app/components/section2/section2Ctrl.js']
          });
        }
      }
    })
      .state("section2.tab1", {
        url: "/tab1",
        templateUrl: "app/components/section2/tabs/tab1/tab1View.html",
        controller: "Tab1Ctrl",
        resolve: {
          tab1: function ($ocLazyLoad) {
            return $ocLazyLoad.load({
              files: ['app/shared/services/dataService.js',
                      'app/components/section2/tabs/tab1/tab1Ctrl.js']
            })
          }
        }
      })
      .state("section2.tab2", {
        url: "/tab2",
        templateUrl: "app/components/section2/tabs/tab2/tab2View.html",
        controller: "Tab2Ctrl as tab2",
        resolve: {
          tab2: function ($ocLazyLoad) {
            return $ocLazyLoad.load({
              files: ['app/shared/services/dataService.js',
                      'app/components/section2/tabs/tab2/tab2Ctrl.js']
            })
          }
        }
      });
});
