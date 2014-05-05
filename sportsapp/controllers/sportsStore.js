angular.module("sportsStore")
.constant("dataUrl", "http://localhost:2403/products")
.controller("sportsStoreCntrl", ["$scope", "dataUrl", "$http", function($scope, dataUrl, $http){


		$scope.data = {}

		$http.get(dataUrl)
            .success(function (data) {
                $scope.data.products = data;
            })
            .error(function (error) {
                $scope.data.error = error;
            });

				



		


}])