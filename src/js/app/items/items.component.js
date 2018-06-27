'use strict';

angular.module('items')
    .component('itemsList', {
        ///template: "",
        templateUrl: 'js/app/templates/items-list.html',
        controller: function($scope){   
            var items = [
                {rating: 3, 'date': 1529447101},
                {rating: 5, 'date': 1529447101},
                {rating: 4, 'date': 1529447101},
                
            ]
            
            $scope.items = items;
            
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
            
        }
    })
    //.component('items');