angular.module("sportsStoreAdmin")
.constant("authUrl", "http://localhost:2403/users")
.constant("ordersUrl", "http://localhost:2403/orders")
.controller("authCtrl", function($scope, $http, $location, authUrl) {
 
    $scope.authenticate = function (user, pass) {
        $http.post(authUrl, {
            username: user,
            password: pass
        }, {
            withCredentials: true //this is done for cross orign request where angjs expects cookie from the server if
            //set to true
        }).success(function (data) {
            $location.path("/main");
        }).error(function (error) {
            $scope.authenticationError = error;
        });
    }
}).controller("mainCtrl", function($scope) {
 
    $scope.screens = ["Products", "Orders"];
    $scope.current = $scope.screens[0];
 
    $scope.setScreen = function (index) {
        $scope.current = $scope.screens[index];
    };
 
    $scope.getScreen = function () {
        console.log($scope.current)
        return $scope.current == "Products"
            ? "/views/adminProducts.html" : "/views/adminOrders.html";
    };
}).controller("ordersCtrl", function ($scope, $http, ordersUrl) {
 
    $http.get(ordersUrl, {withCredentials : true})
        .success(function (data) {
            console.log("got the orders")
            $scope.orders = data;
            console.log($scope.orders)
        })
        .error(function (error) {
            $scope.error = error;
        });
 
    $scope.selectedOrder;
 
    $scope.selectOrder = function(order) {
        $scope.selectedOrder = order;
    };
 
    $scope.calcTotal = function(order) {
        var total = 0;
        for (var i = 0; i < order.products.length; i++) {
            total +=
                order.products[i].count * order.products[i].price;
        }
        return total;
    }
});