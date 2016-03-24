angular
  .module('etsy', ['ngRoute'])
  .config(function($routeProvider){
    $routeProvider
      .when('/', {
        templateUrl: "templates/home.html",
        // controller: "HomeController"
      })
      .when('/products', {
        templateUrl: "templates/products.html",
        controller: "ProductsController"
      })
      .when('/product/:id', {
        templateUrl: "templates/product.html",
        controller: "ProductsController"
      })
      .when('/cart', {
        templateUrl: "templates/cart.html",
        controller: "CartController"
      })
      .when('/404', {
        template: '<h1> Error </h1>',
        controller: 'ShoppingController'
      })
      .otherwise({
        redirectTo: '/404'
      })
  })
