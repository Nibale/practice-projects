var app = angular.module("myApp", []);
app.controller("mainCtrl", function ($scope) {
    $scope.person= {};
    $scope.people=[];
    $scope.submit = function () {
        $scope.person= {
            name: $scope.name,
            age: $scope.age,
            phone: $scope.phone,
            address: $scope.address,
            work: $scope.work,
            hoppy: $scope.hoppy,
            text: $scope.text,
        }
        $scope.people.push($scope.person);
        $scope.person={};
    }
});
