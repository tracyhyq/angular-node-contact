/* App Module */
define([
	'angular'
], function(angular){
	'use strict'

	var app = angular.module('contact', ['phonecatServices','controllers','phonecatFilters']);

	app.init = function(){
		angular.bootstrap(document, ['contact']);
	};

	app.config(['$routeProvider', function($routeProvider) {
        	$routeProvider.
            	when('/phones', { templateUrl: '/phone-list',   controller: 'PhoneListCtrl'}).
            	when('/phones/:phoneId', {templateUrl: '/phone-detail', controller: 'PhoneDetailCtrl'}).
            	otherwise({redirectTo: '/phones'});
        }
    ]);

	return app;
});

