
voucherApp.service("accountsService", ["$http",function ($http) {
        this.getAccounts = function() {
            return $http.get("/api/accounts");
        };
        return {
            getAccounts: this.getAccounts
        };
    }
])