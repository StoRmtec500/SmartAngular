
voucherApp.controller('accountDetailController', function ($scope, $http, $routeParams) {

    $http.get("/api/accounts/" + $routeParams.ID)
        .then(function (response) {
            $scope.account = response.data;
            console.log($scope.account);
        });
});