angular.module("customFilters",[]).filter("unique", function(){


		return function(data, property){

			

				if(angular.isArray(data) && angular.isString(property)){

						var results = [];
						var keys = {};

						for(var i=0;i<data.length;i++){

							var val = data[i][property]
							if(angular.isUndefined(keys[val])){
								keys[val] = true;
								results.push(val)
							}
						}
						console.log(results)
						return results;

				}else{

					return data;
				}

		}


})
.filter("range", function ($filter){

			return function(data, selectedPage, pageSize){

				if (angular.isArray(data) && angular.isNumber(selectedPage) &&angular.isNumber(pageSize)) {

						//calculate the range, from start index to end index
						var startIndex = (selectedPage -1) * pageSize;
						
						console.log(startIndex)
						console.log(pageSize)

						if(data.length < startIndex){
							return [];
						}else{
							return $filter("limitTo")(data.splice(startIndex), pageSize)
						}
						

				}else{

					return data;
				}

			}
})

.filter("pageCount", function(){

	return function (data, pageSize){

		if (angular.isArray(data)) {

			var result = [];

			for (var i = 0; i < Math.ceil(data.length / pageSize) ; i++) {
                result.push(i);
            }

			return result
		}

		else{
			return data
		}

	}
})