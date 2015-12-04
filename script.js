var app = angular.module('bowling', []);


app.controller('MainController', ['$scope', function($scope){
	//working on hiding the 3rd ball - ran out of time.
	// $scope.ballThree = !$scope.ballThree;
	
	$scope.frameNumber = 0;
	//working on hiding the 3rd ball - ran out of time.
	// if ($scope.frameNumber = 9){
	// 	!$scope.ballThree = $scope.ballThree;
 //    };

	$scope.scores = [];

	//still working on excluding or hiding strings from the calculation during game.
	$scope.total = 0; 

	$scope.enterScore = function(a,b,c){
		var i = $scope.frameNumber;
		if ($scope.frameNumber == 9){
			$scope.frameTen(a,b,c);
		} else if (a == 10 && $scope.scores[i-2] == 'X' && $scope.scores[i-1] == 'X'){
			$scope.scores[i-2] = 30;
			$scope.scores.push('X');
		} else if (a != 10 && $scope.scores[i-2] == 'X' && $scope.scores[i-1] == 'X' && (a+b) == 10){
			$scope.scores[i-2] = 20 + a;
			$scope.scores[i-1] = 20;
			$scope.scores.push('/');
		} else if (a != 10 && $scope.scores[i-2] == 'X' && $scope.scores[i-1] == 'X' && (a+b) < 10){ 
			$scope.scores[i-2] = 20 + a;
			$scope.scores[i-1] = 10 + (a+b);
			$scope.scores.push(a+b);
		} else if (a == 10 && $scope.scores[i-1] == '/'){
			$scope.scores[i-1] = 20;
			$scope.scores.push('X');
		} else if (a == 10) {
			$scope.scores.push('X');
		} else if ($scope.scores[i-1] == 'X' && (a+b) == 10){
			$scope.scores[i-1] = 20;
			$scope.scores.push('/');
		} else if ($scope.scores[i-1] == 'X' && (a+b) < 10) {
			$scope.scores[i-1] = (10 + (a+b));
			$scope.scores.push(a+b);
		} else if ($scope.scores[i-1] == '/' && (a+b) == 10){
			$scope.scores[i-1] = (10 + a);
			$scope.scores.push('/');
		} else if ($scope.scores[i-1] == '/' && (a+b) < 10){
			$scope.scores[i-1] = (10 + a);
			$scope.scores.push(a + b);
		} else if (a+b ==10) {
			$scope.scores.push('/');
		} else if (a+b < 10) {
			$scope.scores.push(a+b);
		} else {
			alert("Total must be 10 or less!");
			$scope.frameNumber--;
		}
		$scope.frameNumber++;
		$scope.total = $scope.scores.reduce(function (a,b) {
	  		return a+b;
	  	}, 0);
	  		//have not tested and resolved all conditional aspects of frameTen.  Some seem to be missing.
		  	$scope.frameTen = function(a,b,c){
			var i = 9;
			$scope.toggle();
			if (a == 10 && $scope.scores[i-2] == 'X' && $scope.scores[i-1] == 'X'){
				$scope.scores[i-2] = 30;
				$scope.scores[i-1]= 10 + (a+b);
				$scope.scores.push(a+b+c);
			} else if (a == 10 && $scope.scores[i-1] == 'X'){
				$scope.scores[i-1] = 10 + (a+b);
				$scope.scores.push(a+b+c);
			} else if ($scope.scores[i-1] == '/'){
				$scope.scores[i-1] = 10 + a;
				$scope.scores.push(a+b+c);
			} else {
				$scope.scores.push(a+b+c);
			}
			$scope.total = $scope.scores.reduce(function (a,b) {
		  		return a+b;
		  	}, 0);
		}
			$scope.toggle = function() {
        		$scope.myVar = !$scope.myVar;
    		};
	};

	$scope.newGame = function(){
		$scope.scores=[]
		frameNumber=0;
		$scope.total = $scope.scores.reduce(function (a,b) {
	  		return a+b;
	  	}, 0);
	  	//need to fix the toggle() to return the enter score button
		//would like to add a clear input boxes functionality here
	};

}]);