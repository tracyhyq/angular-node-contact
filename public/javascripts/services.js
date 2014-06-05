define([
	'angular',
	'angular-resource'
], function(angular, angularResource){
	'use strict';

	var services = angular.module('phonecatServices', ['ngResource'])
	    .factory('Phone', function($resource){
	        return $resource('data/:phoneId.json', {}, {
	            query: {
	            	method:'GET', 
	            	params:{
	            		phoneId: 'phones'
	            	}, 
	            	isArray:true
	            }
	        })
	    });

	return services;
});