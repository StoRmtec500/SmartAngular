
voucherApp.controller('voucherDetailsController', function ($scope, $http, $routeParams, $resource, $location, $route) {

    $http.get("/api/vouchers/vm/" + $routeParams.ID)
        .then(function (response) {
            $scope.VVM = response.data;
        });

    $scope.showVouchers = function() {
        $location.path("/vouchers");
    }

    $scope.saveVoucher = function (voucher) {
        $http.post("/api/vouchers/", voucher)
        .then(function (response) {
            $scope.VVM.CurrentVoucher.ID = response.data;
        });
    }

    $scope.saveVoucherDetail = function (detail) {
        var res = $resource("/api/VoucherDetails/");
        res.save(detail);
        $route.reload();
    }

    $scope.deleteDetail = function(detail) {
        var res = $resource("/api/VoucherDetails/" + detail.ID);
        res.delete(detail.ID);
        $route.reload();
    }

    $scope.editDetail = function (detail) {
        $scope.VVM.EditDetail = detail;
    }
    
    $scope.newDetail = function () {
        $scope.VVM.EditDetail = { "ID": 0, "VoucherID": $scope.VVM.CurrentVoucher.ID, "AccountID": 0, "Text": "", "Amount": 0, "Comment": null };
    }
});