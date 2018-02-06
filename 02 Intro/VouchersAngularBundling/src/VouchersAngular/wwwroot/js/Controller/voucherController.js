voucherApp.controller('voucherController', function ($scope, $location, $http, balanceFactory) {

    $http.get("/api/vouchers").then(function (response) {
        $scope.vouchers = response.data;
    });

    balanceFactory.getSum(false).then(function (response) {
        $scope.sumIncome = response.data;
    });
    balanceFactory.getSum(true).then(function (response) {
        $scope.sumExpenses = response.data;
    });

    $scope.showVoucher = function (voucher) {
        var vdp = '/vdetails/' + voucher.ID;
        $location.path(vdp);
    }

    $scope.newVoucher = function () {
        var vdp = '/vdetails/0';
        $location.path(vdp);
    }
});