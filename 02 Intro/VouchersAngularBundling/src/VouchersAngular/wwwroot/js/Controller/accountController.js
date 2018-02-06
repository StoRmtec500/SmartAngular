voucherApp.controller('accountController',
    function($scope, $location, $http, $routeParams, accountsService) {
    //accountsService.getAccounts()
    //        .success(function (accts) {
    //            $scope.Accounts = accts;
    //        })
    //        .error(function (error) {
    //            console.log("error fetching accts " + error.message);
    //        });

    $http.get("/api/accounts/")
       .then(function (response) {
           $scope.Accounts = response.data;
       });

    $scope.showAccount = function(acct) {
        var ap = '/accounts/' + acct.ID;
        $location.path(ap);
    }
});