'use strict';

angular.module('random').config(['$stateProvider', function($stateProvider){

  
    $stateProvider.state('asd', {
        url: '/logs',
        template: '<items-list></items-list>',
    }).state('login', {
        url: '/login',
        templateUrl: 'js/app/templates/login.html',
    }).state('track', {
        url: '/track',
        templateUrl: 'js/app/templates/track.html'
    }).state('otherwise', {
        url: '*path',
        template: "not found",
    })
    
    
}])

