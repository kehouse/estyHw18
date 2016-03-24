angular
  .module('etsy')
  .service('EtsyService', function($http){
    var key = '1udd8sscjbtb4hm6yuylg9p7';
    var cors = 'https://free-cors-server.herokuapp.com/any-request/';
    var url = encodeURIComponent('https://openapi.etsy.com/v2/listings/active?api_key=' + key + '&includes=MainImage');

    function getProducts() {
      return $http.get(cors + url);
    }
    function showProduct(id){
      return $http.get(cors + encodeURIComponent('https://openapi.etsy.com/v2/listings/' + id + '?api_key=' + key + '&includes=MainImage'));
    }
    function getCart(){
      return $http.get("https://tiny-tiny.herokuapp.com/collections/cart");
    }
    function postCart(post){
      return $http.post("https://tiny-tiny.herokuapp.com/collections/cart", post);
    }
    function deleteProduct(id){
      return $http.delete("https://tiny-tiny.herokuapp.com/collections/cart/" + id);
    }
    return {
      getProducts: getProducts,
      showProduct: showProduct,
      getCart: getCart,
      postCart: postCart,
      deleteProduct: deleteProduct
    };
  })
