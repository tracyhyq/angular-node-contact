/* App Module */
define([
	'angular'
], function(angular){
	'use strict'

	var app = angular.module('contact', []);
	/*app.config(['$routeProvider', 
		function($routeProvider) {
        	$routeProvider.
            	when('/phones', { templateUrl: '/phoneList',   controller: PhoneListCtrl}).
            	when('/phones/:phoneId', {templateUrl: '/phoneDetail', controller: PhoneDetailCtrl}).
            	otherwise({redirectTo: '/phones'});
        }
    ]);*/

	return app;
});

