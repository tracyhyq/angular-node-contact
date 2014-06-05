require.config({
	paths: {
		'jquery': 'lib/jquery-1.11.1',
		'angular': 'lib/angular',
		'angular-resource': 'lib/angular-resource.min'
	},
	shim: {
		'jquery': {
			exports: '$'
		},
		'angular': {
			exports: 'angular'
		},
		'angular-resource': {
			deps: ['angular'],
			exports: 'angular-resource'
		}
	},
	baseUrl: '/javascripts'
});
require([
	'angular',
	'app',
	'controllers',
	'services',
	'filters'
], function(angular, App){
	App.init();
});