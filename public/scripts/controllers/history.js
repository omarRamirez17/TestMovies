'use strict';

/**
 * @ngdoc function
 * @name prototipoApp.controller:HistoryCtrl
 * @description
 * # HistoryCtrl
 * Controller of the prototipoApp
 */
angular.module('prototipoApp')
  .controller('historyCtrl', function ($scope, $cookieStore, serviceMovie) {

     $scope.historyMovies = $cookieStore.get('history');

     $scope.send = function (slide) {   

            serviceMovie.setSlide(slide);
              var history = $cookieStore.get('history');
              if (history == null){
                 history = [];
                 history.push(slide);
                    $cookieStore.put('history', history);
              }

              else{
                var array = $cookieStore.get('history');
                   array.push(slide);
                    $cookieStore.put('history', array);
              }                     
          }
    });



