define([
	'angular'
], function(angular){
	'use strict';

	/* Filters */

	var filters = angular.module('phonecatFilters', []).filter('checkmark', function () {
	    return function(input) {
	        return input ? '\u2713' : '\u2718';
	    }
	});

	return filters;
});