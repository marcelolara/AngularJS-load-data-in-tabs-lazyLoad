angular.module('section2', [])
  .controller("Section2Ctrl", function ($scope, $state) {

    var parentState = 'section2',
      defaultChildState = 'section2.tab1';

    if($state.current.name.substr(-parentState.length) === parentState) {
      $state.go(defaultChildState);
    }

  });
