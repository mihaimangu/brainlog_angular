'use strict';

angular.module('items')
    .component('itemsList', {
        ///template: "",
        templateUrl: 'js/app/templates/items-list.html',
        controller: function($http, $scope){   
//            var items = [
//                {rating: 3, 'date': 1529447101},
//                {rating: 5, 'date': 1529447101},
//                {rating: 4, 'date': 1529447101},
//                
//            ]
            var items = [];
            
            $http.get("http://localhost/brain_log/api/logs").then(successCallback, errorCallback);
            
            function successCallback(response, status, conf){
                
                var items = response.data;
                
                angular.forEach(items, function(item){
                    item.computedDate = new Date(item.time * 1000);                
                })
                
                $scope.items = items;
                console.log(items);
            }
            
            function errorCallback(data){
                
            }
            
            $scope.items = items;
        }
    })
