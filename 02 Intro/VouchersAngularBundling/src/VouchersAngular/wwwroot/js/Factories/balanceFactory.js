
voucherApp.factory("balanceFactory", [
    "$http",
    function ($http) {
        return {
            getSum: function (expenses) {
                return $http.get("/api/vouchers/GetSum/" + expenses);
            }
        };
    }
])



