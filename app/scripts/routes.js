'use strict';

var routes = function ($stateProvider, $urlRouterProvider) {

  $urlRouterProvider.otherwise('/');

  $stateProvider
	  .state('home', {
	    url: '/',
	    controller: 'HomeCtrl',
	    templateUrl: 'templates/home.html'
	  }),

    $stateProvider
  	  .state('serie', {
  	    url: '/serie/:id',
  	    controller: 'SerieCtrl',
  	    templateUrl: 'templates/serie.html'
  	  })
}

angular
	.module('starter')
	.config(routes);
