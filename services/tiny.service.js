angular
  .module('etsy')
  .service('TinyService', function($http){

    function getCart(){
      return $http.get("https://tiny-tiny.herokuapp.com/collections/shoppingcart");
    }
    function postCart(post){
      return $http.post("https://tiny-tiny.herokuapp.com/collections/shoppingcart", post);
    }
    function deleteProduct(id){
      return $http.delete("https://tiny-tiny.herokuapp.com/collections/shoppingcart/" + id);
    }
    return {
      getCart: getCart,
      postCart: postCart,
      deleteProduct: deleteProduct
    };
  })
