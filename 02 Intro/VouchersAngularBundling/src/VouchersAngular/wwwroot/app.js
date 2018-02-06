var voucherApp = angular.module('voucherApp', ['ngRoute', 'ngResource', 'mgcrea.ngStrap']);

voucherApp.config(function ($routeProvider) {
    $routeProvider
    .when('/home', { controller: 'homeController', templateUrl: "views/home.html" })
    .when('/vouchers', { controller: 'voucherController', templateUrl: "views/vouchers.html" })
    .when('/vdetails/:ID', { controller: 'voucherDetailsController', templateUrl: "views/voucherDetails.html" })
    .when('/statistics', { controller: 'statisticsController', templateUrl: "views/statistics.html" })
    .when('/accounts', { controller: 'accountController', templateUrl: "views/accounts.html" })
    .when('/accounts/:ID', { controller: 'accountDetailController', templateUrl: "views/accountDetails.html" })
    .otherwise({ redirectTo: '/home' });
});
