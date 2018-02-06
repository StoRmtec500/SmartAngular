
module.exports = function (app) {
    app.controller('voucherController', function ($scope) {
        $scope.vouchers = [
            { Text: 'Expensive', Amount: 77 },
            { Text: 'Cheap', Amount: 22 }
        ];
    });
}