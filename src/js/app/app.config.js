'use strict';

angular.module('random').config(function($routeProvider){
    
   debugger;
    $routeProvider.when('/test', {template: 'salut'})
        .otherwise({
        template: "Not found"
    })
    
});