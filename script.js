var app = angular.module('bowling', []);


app.controller('MainController', ['$scope', function($scope){

	var frameNumber = 0;

	$scope.scores = [];
	     
	$scope.enterScore = function(a,b,c){
		var i = frameNumber;
		if (frameNumber == 9){
			frameTen(a,b,c);
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
			frameNumber--;
		}
		frameNumber++;
	};

	$scope.frameTen = function(a,b,c){
		var i = 9;
		if (a == 10 && $scope.scores[i-2] == 'X' && $scope.scores[i-1] == 'X'){
			$scope.scores[i-2] = 30;
			$scope.scores[i-1]= 10 + (a+b);
			$scope.scores.push(a+b+c);
		} else if (a == 10 && $scope.scores[i-1] == 'X'){
			$scope.scores[i-1] = 10 + (a+b);
			$scope.scores.push(a+b+c);
		} else if ($scope.scores[i-1] == '/'){
			$scope.scores[i-1] = 10 + a;
			$scope.scores.push(a+b)+c;
		} else {
			$scope.scores.push(a+b)+c;
		}
		$scope.overallTotal = function(){
			var total = parsefloat(0);
			for (var j=0; j < $scope.scores.length; j++){
				total += $scope.scores[i].total;
			} return total;
		}
	};

	$scope.newGame = function(){
		$scope.scores=[]
	};

}]);