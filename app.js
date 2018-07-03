var app=angular.module('myApp',['ui.router']);

app.config(function($stateProvider, $urlRouterProvider) {


$urlRouterProvider.otherwise("/");
$stateProvider
.state('home',{
	url:"/",
	templateUrl:"Templates/home.html"
})
.state('login',{
	url:"/login",
	templateUrl:"Templates/login.html",
	controller:"loginCtrl"
})
.state('signup',{
	url:"/signup",
	templateUrl:"Templates/signup.html",
	controller:"signupCtrl"
});
});
app.controller('myCtrl',function($scope){

$scope.message=" Welcome to AngularJS Bot ";
$scope.fruits=['Banana','Pear','Orange','Pineapple','Apple'];
$scope.numbers=[1,2,3,4,5,6,7,8,9,10,12,13,14,15];
});


app.controller('loginCtrl',function($scope){

});
app.controller('signupCtrl',function($scope){

	$scope.newuser={};
	$scope.signup=function(){
	if($scope.newuser.email && $scope.newuser.firstname&& $scope.newuser.lastname&& $scope.newuser.pwd&&$scope.newuser.repwd){
		config.log("All fields are set");
		if($scope.newuser.pwd==$scope.newuser.repwd){
			config.log("Password match");
		}else{
		config.log("Password doesn't match");
	}
	}
	else{
	config.log("Some fields are invalid");
	}
	};
});
