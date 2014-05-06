angular.module("sportsStore")
.constant("productListActiveClass", "btn-primary")
.constant("productListPageCount", 2)

.controller("productListCtrl", ["$scope", "$filter", "productListActiveClass", "productListPageCount",
	"cart",function($scope,$filter,productListActiveClass,productListPageCount, cart){


		var selectedCategory = null;

		$scope.selectedPage = 1;
		$scope.pageSize = productListPageCount;

		$scope.selectCategory = function(newCategory){

			console.log(newCategory)

				selectedCategory = newCategory;
				$scope.selectedPage = 1;
		}

		$scope.selectPage = function (newPage) {
            $scope.selectedPage = newPage;
        }

        $scope.getPageClass = function (page) {
            return $scope.selectedPage == page ? productListActiveClass : "";
        } 


		$scope.categoryFilterFun = function(product){
			return selectedCategory == null || product.category == selectedCategory
		}


		$scope.getCategoryClass = function (category) {
			console.log(category)
            return selectedCategory == category ? productListActiveClass : "";
        }

        $scope.addProductToCart  = function(product){

        	cart.addProduct(product.id, product.name, product.price);	
        }
        


}])