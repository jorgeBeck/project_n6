ticketroll.controller('home-controller', ['$http', '$scope', '$timeout', '$q', '$log', '$state', function($http, $scope, $timeout, $q, $log, $state){

  $scope.click = function(){
    $http({
    method: 'POST',
    url: 'click',
   }).then(function successCallback(response) {
      if (response.data.code == 200){
        alert('backend '+response.data.backend);
      }else{
        console.warn('Hay un problema en backend');
      }
    }, function errorCallback(response) {

      console.warn('Hubo un error en la conexión');
    });
  }

}]);
