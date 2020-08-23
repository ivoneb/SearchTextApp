var app = angular.module('searchTextApp', []);

app.service("service", function($http){

    var service = {};
	service.searchItems = [];

	service.ContainsSubtext = function(a, b) {
		strText = a.toLowerCase();
		strSubtext = b.toLowerCase();
		var positionMatches = "";
		var startFromPos = 0;	
		do {
			var position = strText.indexOf(strSubtext, startFromPos);			
			if ( position > -1){
				positionMatches += (position + " ");
				startFromPos = position + 1;
			}

		} while (position > -1 && startFromPos <= strText.length)
		if (positionMatches=="") {
			positionMatches = "No matches found";
		} else {
			positionMatches = ("Matching positions: " + positionMatches);
		}
		return positionMatches;
	}

    return service;

});

app.controller("HomeController", ["$scope", "service", function($scope, service) {	

    $scope.ContainsSubtext = function(){
        $scope.output = service.ContainsSubtext($scope.searchItems.fullText, $scope.searchItems.subText);
    };

}]);
