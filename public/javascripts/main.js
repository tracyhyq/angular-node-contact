require.config({
	paths: {
		'jquery': 'lib/jquery-1.11.1',
		'angular': 'lib/angular'
	},
	shim: {
		'jquery': {
			exports: '$'
		},
		'angular': {
			exports: 'angular'
		}
	},
	baseUrl: '/javascripts'
});
require([
	'app'
], function(App){
	console.log(App);
});