angular.module('starter.factories', ['ngResource'])
	
	.factory('ToursPost', function($resource) {
		return $resource('http://gid.areyoualive.ru/api/tours.php');
	})

	.factory('LocationsPost', function($resource) {
		return $resource('http://gid.areyoualive.ru/api/locations.php');
	})

	.factory('InnerLocationsPost', function($resource) {
		return $resource('http://gid.areyoualive.ru/api/inner_locations.php');
	});
	
