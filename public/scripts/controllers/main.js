'use strict';

/**
 * @ngdoc function
 * @name prototipoApp.controller:homeCtrl
 * @description
 * Controller of the prototipoApp
 */

angular.module('prototipoApp').controller('homeCtrl', function($scope, $http, serviceMovie, $cookieStore) {
    $http({
        method : "GET",
        url : "/getMovies"
    }).then(function mySuccess(response) {
        
    	 var movies = response.data; 
          var moviesSize = movies.length;

          $scope.slides = []; 
         
         for (var i = 0; i < moviesSize; i++){

                $scope.slides.push({
                 title: movies[i].title,
                 image: movies[i].images[0].url, 
                 video: movies[i].contents[0].url});

         }
 	   
    	  
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
    	  
    }, function myError(response) {
        alert("Error");
    });
});


angular.module('prototipoApp').factory("serviceMovie", function() {
   var slide;   
    return {

        getSlide: function() {          
            return slide;
        },
        setSlide: function(value) {         
            slide = value;
        }
    };
});





