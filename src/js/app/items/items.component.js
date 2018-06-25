'use strict';

angular.module('items')
    .controller('ItemsController', function($scope){
    console.log('hi');
    
    $scope.title ='Hi There';
    $scope.click = 0;
    
    $scope.someClickTest = function(){
        $scope.title = 'Am schimbat titlul';
        $scope.click ++;
        console.log($scope.click);
        
        if($scope.click > 0){
            $scope.title = 'Hi there ('+$scope.click+')';
        }
    };
    
});
    //.component('items');