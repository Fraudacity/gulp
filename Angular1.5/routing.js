var app = angular.module('app', ['ngRoute']);

app.config(['$routeProvider', function($routeProvider){
    // $routeProvider.when('/first-msg',{
    //     // template:'<strong> this is the first message</strong>'
    //     templateUrl:'msg1.html',
    //     controller:'message1'
    // })

    $routeProvider
    .when('/sumurl/:a/:b',{
        templateUrl:'sumurl.html',
        controller:'sumurl'
    })
    .when('/suminput',{
        templateUrl:'suminput.html',
        controller:'suminput'
    })
    .when('/',{
        template:'Welcome <br><i>Click on the link on the left</i>'
    })
    .otherwise('/',{
        template:'<strong> No Content <br><i>Click on the link on the left</i></strong>'
    })
}])
app.controller("sumurl", ['$scope','$routeParams', function($scope, $routeParams){
    $scope.a = $routeParams.a;
    $scope.b = $routeParams.b;
}])
app.controller("suminput", ['$scope','$location','$interpolate', function($scope,$location,$interpolate){
    $scope.a = 0;
    $scope.b = 0;

    $scope.doSum = function(){
        var url  = $interpolate('/sumurl/{{a}}/{{b}}')($scope)
        
        $location.path(url);
        console.log(url)
    }
}])


// app.controller("message1", ['$scope', function($scope){
//     $scope.a = 10;
//     $scope.b = 20;
// }])

