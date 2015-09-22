
var app = angular.module( 'german-flash-cards', [] );

// Routes
app.config( function( $routeProvider ) {
  $routeProvider
    .otherwise({
      controller: 'MainController',
      templateUrl: '/app/partials/main.html'
    });
});