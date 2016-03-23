angular
  .module('etsy')
  .controller('ProductsController', function($scope, $location, EtsyService, $routeParams) {

    EtsyService.getProducts()
      .then(function(data){
        // console.log(data);
        $scope.products = data.data.results;
      });

    console.log($routeParams.id);

    // if($routeParams.id){
      EtsyService.showProduct($routeParams.id)
        .then(function(product){
          console.log("INFO", product);
          $scope.product = product.data.results[0];
        });
    // }
  })
