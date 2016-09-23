angular.module('BeerLeague.it', [
  'ngRoute',
  'mobile-angular-ui',
  'BeerLeague.it.controllers.Main'
])

.config(function($routeProvider) {
  $routeProvider.when('/', {templateUrl:'home.html',  reloadOnSearch: false});
});