angular.module('starter.controllers').controller('HomeCtrl', [
  '$scope', '$timeout', 'TmdbService',
  function ($scope, $timeout, TmdbService) {


    $scope.baseImageUrl = 'http://image.tmdb.org/t/p/w500';

    TmdbService.getPopular().then(function(series){
      $scope.popularSeries = series;
    });

    // Methods

    //Search Movies
    $scope.searchMovies = function(searchTerm){
      TmdbService.searchMSerie(searchTerm).then(function(series){
        $scope.searchedSeries = series;
      });
    };
    //Search Movie no Submit
    $scope.$watch('searchTerm', function(newValue){
      TmdbService.searchSerie(newValue).then(function(series){
        $scope.searchedSeries = series;
      });
    });
  }
]);
