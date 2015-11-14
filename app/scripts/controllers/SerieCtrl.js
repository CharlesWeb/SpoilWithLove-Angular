angular.module('starter.controllers').controller('SerieCtrl', [
  '$scope', 'TmdbService', '$stateParams',
  function ($scope, TmdbService, $stateParams) {


    $scope.baseImageUrl = 'http://image.tmdb.org/t/p/w500';

    TmdbService.getSerie($stateParams.id).then(function(serie){
      $scope.serie = serie;
    });
  }
]);
