define([
	'angular'
], function(angular){
	'use strict';

	var controllers = angular.module('controllers', []).
		controller('PhoneListCtrl', ['$scope', 'Phone', function($scope, Phone){
			$scope.phones = Phone.query();
			$scope.order  = 'age';
		}]).
		controller('PhoneDetailCtrl', ['$scope', '$routeParams', 'Phone', function($scope, $routeParams, Phone){
			$scope.phone = Phone.get({phoneId: $routeParams.phoneId}, function(phone){
		    	$scope.mainImageUrl = phone.images[0];
		    });

		    $scope.setImage = function(imageUrl) {
		        $scope.mainImageUrl = imageUrl;
		    }
		}]);

	return controllers;
});