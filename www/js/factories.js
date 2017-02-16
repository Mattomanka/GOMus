angular.module('starter.factories', ['ngResource'])
	
	.factory('ToursPost', function($resource) {
		return $resource('http://mattomanka.esy.es/gomus/api/tours.php');
	})

	.factory('LocationsPost', function($resource) {
		return $resource('http://mattomanka.esy.es/gomus/api/locations.php');
	});
	
