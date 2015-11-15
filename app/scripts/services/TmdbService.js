'use strict';
angular.module('starter.services').service('TmdbService', [ '$q', '$http',
  function ($q, $http) {

    // INIT
    var baseUrl = "http://api.themoviedb.org/3";
    var apiKey = "2ab523578f2edd5c0fb434eabd66830e";


    var tmdbService = {
      // METHODS

      // Get Popular Series
      getPopular: function () {
        //Init
        var q = $q.defer();

        //Request
        $http({
          method: 'GET',
          url: baseUrl + '/tv/popular',
          params: {
            api_key : apiKey
          }
        }).then(function(response){
          //Success
          var series = response.data.results;
          q.resolve(series);

        }, function(response){
          //Error
          q.reject;
        });
        return q.promise;
      },

      // Search
      searchSerie: function (searchTerm) {
        //Init
        var q = $q.defer();

        //Request
        $http({
          method: 'GET',
          url: baseUrl + '/search/tv',
          params: {
            api_key : apiKey,
            query : searchTerm
          }
        }).then(function(response){
          //Success
          var series = response.data.results;
          q.resolve(series);

        }, function(response){
          //Error
          q.reject;
        });
        return q.promise;
      },

      //Return serie ID
      getSerie: function (id) {
        var q = $q.defer();

        $http({
          method: 'GET',
          url: baseUrl + '/tv/' + id,
          params: {
            api_key : apiKey
          }
        }).then(function(response) {
       // Success
       var serie = response.data;
       q.resolve(serie);

        }, function(response) {
          // Error
          q.reject;
        });
        return q.promise;
      },


    };
    return tmdbService;
  }
]);
