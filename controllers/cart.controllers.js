angular
  .module('etsy')
  .controller('CartController', function($scope, $location, TinyService, $routeParams){

    TinyService.getCart()
      .then(function(data){
        $scope.products = data.data;

      var total = 0;
      $scope.products.forEach(function(el){
        total += parseFloat(el.price);
      })
      $scope.subTotal = total;
    });

    $scope.deleteFromCart = function(obj){
      TinyService.deleteProduct(obj._id)
        .then(function(data){
          var objId = data.data._id
          var objPlace = $scope.products.findIndex(function(el,idx,arr){
            return el._id === objId
          });
          $scope.products.splice(objPlace,1)
        });
    }
  })
