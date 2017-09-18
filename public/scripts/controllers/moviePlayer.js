'use strict';

/**
 * @ngdoc function
 * @name prototipoApp.controller:moviePlayerCtrl
 * @description
 * Controller of the prototipoApp
 */
angular.module('prototipoApp')
.controller('moviePlayerCtrl',["$sce",'serviceMovie',"$window",function ($sce, serviceMovie, $window) {

	        var controller = this;
			controller.API = null;
 
			controller.onPlayerReady = function(API) {
				controller.API = API;
  				controller.API.toggleFullScreen();			
			};
	
            var movie = serviceMovie.getSlide(); 
 
			controller.videos = [
				{
					sources: [
						{src: $sce.trustAsResourceUrl(movie.video), type: "video/mp4"},
					]
				}
			];
 
			controller.config = {
				autoHide: false,
				autoHideTime: 3000,
				autoPlay: false,
				sources: controller.videos[0].sources,
				theme: {
					url: "http://www.videogular.com/styles/themes/default/latest/videogular.css"
				},
				plugins: {
					poster: "http://www.videogular.com/assets/images/videogular.png"
				}
			};
 
			controller.setVideo = function(index) {
				controller.API.stop();
				controller.config.sources = controller.videos[index].sources;
			};
			
			controller.backHome = function(path) {
				$window.location.href = path;				 					
			};			
			
		}]
	);