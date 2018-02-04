webpackJsonp(["main"],{

/***/ "../../../../../src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "../../../../../src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "../../../../../src/app/accounts/account-detail/account-detail.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/accounts/account-detail/account-detail.component.html":
/***/ (function(module, exports) {

module.exports = "<form class=\"form-horizontal\">\n  <div class=\"form-group\">\n    <label for=\"inputID3\" class=\"col-sm-2 control-label\">ID</label>\n    <div class=\"col-sm-10\">\n      <input type=\"text\" class=\"form-control\" id=\"inputID3\" placeholder=\"ID\" [(ngModel)]=\"account.ID\" name=\"ID\" readonly>\n    </div>\n  </div>\n\n  <div class=\"form-group\">\n    <label for=\"inputName3\" class=\"col-sm-2 control-label\">Name</label>\n    <div class=\"col-sm-10\">\n      <input type=\"text\" class=\"form-control\" id=\"inputName3\" placeholder=\"Name\" [(ngModel)]=\"account.Name\" name=\"Name\">\n    </div>\n  </div>\n\n  <div class=\"form-group\">\n    <label for=\"inputName4\" class=\"col-sm-2 control-label\">Expense</label>\n    <div class=\"col-sm-10\">\n      <input type=\"checkbox\" [(ngModel)]=\"account.Expense\" name=\"Expense\">\n    </div>\n  </div>\n\n  <div class=\"form-group\">\n    <div class=\"col-sm-offset-10 col-sm-1\">\n      <button class=\"btn btn-default\" [routerLink]=\"[ '/accounts']\">Cancel</button>\n    </div>\n    <div class=\"col-sm-1\">\n      <button type=\"submit\" class=\"btn btn-default\" (click)=\"saveAcct()\">Save</button>\n    </div>\n  </div>\n</form>"

/***/ }),

/***/ "../../../../../src/app/accounts/account-detail/account-detail.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AccountDetailComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__account_service__ = __webpack_require__("../../../../../src/app/accounts/account.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AccountDetailComponent = (function () {
    function AccountDetailComponent(service, route) {
        this.service = service;
        this.route = route;
        this.account = { ID: 0, Name: "", Expense: false, ActivatedOn: new Date(), Deprecated: false };
    }
    AccountDetailComponent.prototype.ngOnInit = function () {
        var _this = this;
        var id = this.route.snapshot.params["id"];
        if (id != 0) {
            this.service
                .getAccount(this.route.snapshot.params["id"])
                .subscribe(function (acct) { return (_this.account = acct); });
        }
    };
    AccountDetailComponent.prototype.saveAcct = function () {
        if (this.account.ID == 0) {
            this.service.insertAccount(this.account);
        }
        else {
            this.service.updateAccount(this.account);
        }
    };
    AccountDetailComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: "app-account-detail",
            template: __webpack_require__("../../../../../src/app/accounts/account-detail/account-detail.component.html"),
            styles: [__webpack_require__("../../../../../src/app/accounts/account-detail/account-detail.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__account_service__["a" /* AccountsService */],
            __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */]])
    ], AccountDetailComponent);
    return AccountDetailComponent;
}());



/***/ }),

/***/ "../../../../../src/app/accounts/account.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AccountsService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AccountsService = (function () {
    function AccountsService(httpClient) {
        this.httpClient = httpClient;
        this.accounts = null;
    }
    AccountsService.prototype.getAccounts = function () {
        return this.httpClient.get(__WEBPACK_IMPORTED_MODULE_2__environments_environment__["a" /* environment */].apiUrl + "api/accounts");
    };
    AccountsService.prototype.getAccount = function (id) {
        return this.httpClient.get(__WEBPACK_IMPORTED_MODULE_2__environments_environment__["a" /* environment */].apiUrl + "api/accounts/" + id);
    };
    AccountsService.prototype.insertAccount = function (acct) {
        this.httpClient.post(__WEBPACK_IMPORTED_MODULE_2__environments_environment__["a" /* environment */].apiUrl + "api/accounts", acct).subscribe(function () { return console.log("acct inserted"); });
    };
    AccountsService.prototype.updateAccount = function (acct) {
        this.httpClient.put(__WEBPACK_IMPORTED_MODULE_2__environments_environment__["a" /* environment */].apiUrl + "api/accounts", acct).subscribe(function () { return console.log("acct updated"); });
    };
    AccountsService.prototype.deleteAccount = function (acct) {
        this.httpClient.delete(__WEBPACK_IMPORTED_MODULE_2__environments_environment__["a" /* environment */].apiUrl + "api/accounts/" + acct.ID).subscribe(function () { return console.log("acct deleted"); });
    };
    AccountsService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */]])
    ], AccountsService);
    return AccountsService;
}());



/***/ }),

/***/ "../../../../../src/app/accounts/accounts-list.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/accounts/accounts-list.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"inner-panel\">  \r\n  <div>\r\n    <table class=\"table table-striped\">\r\n        <colgroup>\r\n          <col style=\"width: 5%\">          \r\n          <col style=\"width: 40%\">\r\n          <col style=\"width: 10%\">\r\n          <col style=\"width: 10%\">\r\n          <col style=\"width: 10%\">\r\n          <col style=\"width: 7.5%\">\r\n          <col style=\"width: 7.5%\">\r\n        </colgroup>\r\n      <thead>\r\n          <tr>\r\n            <th>ID</th>\r\n            <th>Name</th>\r\n            <th>Expense</th>            \r\n            <th>Activated On</th>\r\n            <th>Deprecated</th>\r\n            <th></th>\r\n            <th></th>\r\n          </tr>\r\n      </thead>\r\n        <tbody>\r\n          <tr *ngFor=\"let a of accounts\" (click)=\"showAccount(a.ID)\">\r\n            <td>{{a.ID}}</td>\r\n            <td>{{a.Name}}</td>\r\n            <td><span [innerHTML]=\"a.Expense | checked\"></span></td>\r\n            <td>{{a.ActivatedOn | date:'shortDate'}}</td>\r\n            <td><span [innerHTML]=\"a.Deprecated | checked\"></span></td>\r\n            <td><a class=\"table-cmd\" (click)=\"deleteAcccount(a)\" >Delete</a></td>\r\n            <td><a class=\"table-cmd\" [routerLink]=\"[ '/accounts', a.ID ]\">Edit</a></td>            \r\n          </tr>    \r\n    </tbody>\r\n    </table>\r\n  </div>\r\n</div>\r\n\r\n"

/***/ }),

/***/ "../../../../../src/app/accounts/accounts-list.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AccountsListComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__account_service__ = __webpack_require__("../../../../../src/app/accounts/account.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_index__ = __webpack_require__("../../../../../src/app/shared/index.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AccountsListComponent = (function () {
    function AccountsListComponent(router, service, Store) {
        this.router = router;
        this.service = service;
        this.Store = Store;
    }
    AccountsListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.service.getAccounts().subscribe(function (data) { return _this.accounts = data; });
        this.Store.setSideCMDs([{ title: "Add Account", evt: this.addAccount }]);
    };
    AccountsListComponent.prototype.showAccount = function (id) {
        this.router.navigate(['/accounts/' + id]);
    };
    AccountsListComponent.prototype.deleteAcccount = function (acct) {
        this.service.deleteAccount(acct);
        this.router.navigate(['/accounts/']);
    };
    AccountsListComponent.prototype.addAccount = function () {
        console.log("adding account");
        //this.router.navigate(['/accounts/' + 0]);
    };
    AccountsListComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["n" /* Component */])({
            selector: 'app-accounts-list',
            template: __webpack_require__("../../../../../src/app/accounts/accounts-list.component.html"),
            styles: [__webpack_require__("../../../../../src/app/accounts/accounts-list.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */], __WEBPACK_IMPORTED_MODULE_0__account_service__["a" /* AccountsService */], __WEBPACK_IMPORTED_MODULE_3__shared_index__["a" /* DataStoreService */]])
    ], AccountsListComponent);
    return AccountsListComponent;
}());



/***/ }),

/***/ "../../../../../src/app/admin/admin.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/admin/admin.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"section\">\r\n  <h4>Vouchers Administration</h4>     \r\n  Data passed: {{ msg | json }}\r\n</div>\r\n<router-outlet name=\"bottom\"></router-outlet>"

/***/ }),

/***/ "../../../../../src/app/admin/admin.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AdminComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AdminComponent = (function () {
    function AdminComponent(route) {
        this.route = route;
        this.msg = null;
        this.msg = route.snapshot.data;
    }
    AdminComponent.prototype.ngOnInit = function () {
    };
    AdminComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-admin',
            template: __webpack_require__("../../../../../src/app/admin/admin.component.html"),
            styles: [__webpack_require__("../../../../../src/app/admin/admin.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */]])
    ], AdminComponent);
    return AdminComponent;
}());



/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".flexcontainer {\r\n    display: -webkit-box;\r\n    display: -ms-flexbox;\r\n    display: flex;\r\n    -ms-flex-wrap: nowrap;\r\n        flex-wrap: nowrap;\r\n    -ms-flex-pack: distribute;\r\n        justify-content: space-around;\r\n }\r\n\r\n .flexMainBig{    \r\n    -webkit-box-flex: 2;    \r\n        -ms-flex-positive: 2;    \r\n            flex-grow: 2;\r\n}\r\n\r\n.flexSideHidden{\r\n    display: none;   \r\n}\r\n\r\n .flexMain{\r\n    -webkit-box-flex: 800;\r\n        -ms-flex: 800;\r\n            flex: 800;      \r\n }\r\n\r\n .flexSide{\r\n    -webkit-box-flex: 100;\r\n        -ms-flex: 100;\r\n            flex: 100;     \r\n}\r\n\r\n.flexSpacer{\r\n    -webkit-box-flex: 10;\r\n        -ms-flex: 10;\r\n            flex: 10;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\">\r\n  <div class=\"row\">\r\n    <app-navbar></app-navbar>\r\n  </div>\r\n  <div class=\"row\" [MatchHeight]=\"'panel'\">\r\n    <div class=\"flexcontainer\">\r\n      <div [class]=\"setMainDivWidth()\">\r\n        <router-outlet></router-outlet>\r\n      </div>\r\n      <div [class]=\"setSpacer()\"></div>\r\n      <div [class]=\"setSideDivWidth()\">\r\n        <app-side-panel></app-side-panel>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <div class=\"row\" [style.display]=\"isDemo ? 'none' : 'block'\">\r\n    <app-kpi-bar></app-kpi-bar>\r\n  </div>"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AppComponent = (function () {
    function AppComponent(router, route) {
        this.router = router;
        this.route = route;
    }
    AppComponent.prototype.ngOnInit = function () {
        this.evalScreen();
    };
    AppComponent.prototype.evalScreen = function () {
        var _this = this;
        this.children = this.router.config[0].children.map(function (item) {
            return item.path;
        });
        this.router.events.subscribe(function (evt) {
            if (evt.url != undefined) {
                var isChildRoute = _this.children.find(function (item) { return evt.url.includes(item); }) != undefined;
                _this.isDemo = evt.url == "/" || isChildRoute ? true : false;
            }
        });
    };
    AppComponent.prototype.setSideDivWidth = function () {
        return this.isDemo ? "flexSideHidden" : "panel flexSide";
    };
    AppComponent.prototype.setSpacer = function () {
        return this.isDemo ? "" : "flexSpacer";
    };
    AppComponent.prototype.setMainDivWidth = function () {
        return this.isDemo ? "flexMainBig" : "panel flexMain";
    };
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: "vouchers-app",
            template: __webpack_require__("../../../../../src/app/app.component.html"),
            styles: [__webpack_require__("../../../../../src/app/app.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */], __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__demos_control_messages_component__ = __webpack_require__("../../../../../src/app/demos/control-messages.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__accounts_accounts_list_component__ = __webpack_require__("../../../../../src/app/accounts/accounts-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_routing_module__ = __webpack_require__("../../../../../src/app/app.routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_platform_browser__ = __webpack_require__("../../../platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__demos_demos_component__ = __webpack_require__("../../../../../src/app/demos/demos.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__vouchers_voucher_voucher_component__ = __webpack_require__("../../../../../src/app/vouchers/voucher/voucher.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__vouchers_vouchers_list_component__ = __webpack_require__("../../../../../src/app/vouchers/vouchers-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__vouchers_voucher_service__ = __webpack_require__("../../../../../src/app/vouchers/voucher.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__demos_template_driven_template_driven_component__ = __webpack_require__("../../../../../src/app/demos/template-driven/template-driven.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__demos_reative_forms_reative_forms_component__ = __webpack_require__("../../../../../src/app/demos/reative-forms/reative-forms.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__demos_template_validation_template_validation_component__ = __webpack_require__("../../../../../src/app/demos/template-validation/template-validation.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__demos_reative_validation_reative_validation_component__ = __webpack_require__("../../../../../src/app/demos/reative-validation/reative-validation.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__demos_forms_builder_forms_builder_component__ = __webpack_require__("../../../../../src/app/demos/forms-builder/forms-builder.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__demos_two_way_person_two_way_person_component__ = __webpack_require__("../../../../../src/app/demos/two-way-person/two-way-person.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__demos_two_way_person_persons_persons_component__ = __webpack_require__("../../../../../src/app/demos/two-way-person/persons/persons.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__demos_two_way_person_person_person_component__ = __webpack_require__("../../../../../src/app/demos/two-way-person/person/person.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__shared_index__ = __webpack_require__("../../../../../src/app/shared/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__vouchers_voucher_voucher_detail_voucher_detail_component__ = __webpack_require__("../../../../../src/app/vouchers/voucher/voucher-detail/voucher-detail.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__vouchers_voucher_voucher_details_list_voucher_details_list_component__ = __webpack_require__("../../../../../src/app/vouchers/voucher/voucher-details-list/voucher-details-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__route_guard_service__ = __webpack_require__("../../../../../src/app/route.guard.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__angular_platform_browser_animations__ = __webpack_require__("../../../platform-browser/esm5/animations.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27_ngx_bootstrap__ = __webpack_require__("../../../../ngx-bootstrap/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__admin_admin_component__ = __webpack_require__("../../../../../src/app/admin/admin.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__accounts_account_service__ = __webpack_require__("../../../../../src/app/accounts/account.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30__accounts_account_detail_account_detail_component__ = __webpack_require__("../../../../../src/app/accounts/account-detail/account-detail.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_31__shared_side_panel_side_panel_component__ = __webpack_require__("../../../../../src/app/shared/side-panel/side-panel.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_32__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_33__angular_common_locales_de__ = __webpack_require__("../../../common/locales/de.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_34__shared_check_pipe__ = __webpack_require__("../../../../../src/app/shared/check.pipe.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



































Object(__WEBPACK_IMPORTED_MODULE_32__angular_common__["j" /* registerLocaleData */])(__WEBPACK_IMPORTED_MODULE_33__angular_common_locales_de__["a" /* default */]);
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_9__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_12__vouchers_vouchers_list_component__["a" /* VouchersListComponent */],
                __WEBPACK_IMPORTED_MODULE_28__admin_admin_component__["a" /* AdminComponent */],
                __WEBPACK_IMPORTED_MODULE_2__accounts_accounts_list_component__["a" /* AccountsListComponent */],
                __WEBPACK_IMPORTED_MODULE_30__accounts_account_detail_account_detail_component__["a" /* AccountDetailComponent */],
                __WEBPACK_IMPORTED_MODULE_11__vouchers_voucher_voucher_component__["a" /* VoucherComponent */],
                __WEBPACK_IMPORTED_MODULE_23__vouchers_voucher_voucher_detail_voucher_detail_component__["a" /* VoucherDetailComponent */],
                __WEBPACK_IMPORTED_MODULE_24__vouchers_voucher_voucher_details_list_voucher_details_list_component__["a" /* VoucherDetailsListComponent */],
                __WEBPACK_IMPORTED_MODULE_6__demos_demos_component__["a" /* DemosComponent */],
                __WEBPACK_IMPORTED_MODULE_14__demos_template_driven_template_driven_component__["a" /* TemplateDrivenComponent */],
                __WEBPACK_IMPORTED_MODULE_15__demos_reative_forms_reative_forms_component__["a" /* ReativeFormsComponent */],
                __WEBPACK_IMPORTED_MODULE_16__demos_template_validation_template_validation_component__["a" /* TemplateValidationComponent */],
                __WEBPACK_IMPORTED_MODULE_17__demos_reative_validation_reative_validation_component__["a" /* ReativeValidationComponent */],
                __WEBPACK_IMPORTED_MODULE_1__demos_control_messages_component__["a" /* ControlMessagesComponent */],
                __WEBPACK_IMPORTED_MODULE_18__demos_forms_builder_forms_builder_component__["a" /* FormsBuilderComponent */],
                __WEBPACK_IMPORTED_MODULE_19__demos_two_way_person_two_way_person_component__["a" /* TwoWayPersonComponent */],
                __WEBPACK_IMPORTED_MODULE_20__demos_two_way_person_persons_persons_component__["b" /* PersonsComponent */],
                __WEBPACK_IMPORTED_MODULE_21__demos_two_way_person_person_person_component__["a" /* PersonComponent */],
                __WEBPACK_IMPORTED_MODULE_22__shared_index__["d" /* NavbarComponent */],
                __WEBPACK_IMPORTED_MODULE_22__shared_index__["c" /* MatchHeightDirective */],
                __WEBPACK_IMPORTED_MODULE_31__shared_side_panel_side_panel_component__["a" /* SidePanelComponent */],
                __WEBPACK_IMPORTED_MODULE_22__shared_index__["b" /* KpiBarComponent */],
                __WEBPACK_IMPORTED_MODULE_34__shared_check_pipe__["a" /* CheckPipe */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_7__angular_forms__["d" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_7__angular_forms__["h" /* ReactiveFormsModule */],
                __WEBPACK_IMPORTED_MODULE_0__angular_http__["a" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_8__angular_common_http__["b" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_5__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_10__angular_router__["c" /* RouterModule */],
                __WEBPACK_IMPORTED_MODULE_4__app_routing_module__["a" /* AppRoutingModule */],
                [__WEBPACK_IMPORTED_MODULE_26__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */]],
                __WEBPACK_IMPORTED_MODULE_27_ngx_bootstrap__["a" /* BsDatepickerModule */].forRoot()
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_22__shared_index__["a" /* DataStoreService */],
                __WEBPACK_IMPORTED_MODULE_13__vouchers_voucher_service__["a" /* VouchersService */],
                __WEBPACK_IMPORTED_MODULE_29__accounts_account_service__["a" /* AccountsService */],
                { provide: __WEBPACK_IMPORTED_MODULE_9__angular_core__["G" /* LOCALE_ID */], useValue: "de-DE" },
                __WEBPACK_IMPORTED_MODULE_25__route_guard_service__["a" /* RouteGuard */]
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "../../../../../src/app/app.routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__demos_two_way_person_two_way_person_component__ = __webpack_require__("../../../../../src/app/demos/two-way-person/two-way-person.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__demos_forms_builder_forms_builder_component__ = __webpack_require__("../../../../../src/app/demos/forms-builder/forms-builder.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__demos_reative_validation_reative_validation_component__ = __webpack_require__("../../../../../src/app/demos/reative-validation/reative-validation.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__demos_template_validation_template_validation_component__ = __webpack_require__("../../../../../src/app/demos/template-validation/template-validation.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__demos_reative_forms_reative_forms_component__ = __webpack_require__("../../../../../src/app/demos/reative-forms/reative-forms.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__demos_template_driven_template_driven_component__ = __webpack_require__("../../../../../src/app/demos/template-driven/template-driven.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__demos_demos_component__ = __webpack_require__("../../../../../src/app/demos/demos.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__vouchers_vouchers_list_component__ = __webpack_require__("../../../../../src/app/vouchers/vouchers-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__vouchers_voucher_voucher_component__ = __webpack_require__("../../../../../src/app/vouchers/voucher/voucher.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__accounts_accounts_list_component__ = __webpack_require__("../../../../../src/app/accounts/accounts-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__admin_admin_component__ = __webpack_require__("../../../../../src/app/admin/admin.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__route_guard_service__ = __webpack_require__("../../../../../src/app/route.guard.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__accounts_account_detail_account_detail_component__ = __webpack_require__("../../../../../src/app/accounts/account-detail/account-detail.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};















var appRoutes = [
    {
        path: "",
        component: __WEBPACK_IMPORTED_MODULE_6__demos_demos_component__["a" /* DemosComponent */],
        children: [
            { path: "templatedriven", component: __WEBPACK_IMPORTED_MODULE_5__demos_template_driven_template_driven_component__["a" /* TemplateDrivenComponent */] },
            { path: "reactiveforms", component: __WEBPACK_IMPORTED_MODULE_4__demos_reative_forms_reative_forms_component__["a" /* ReativeFormsComponent */] },
            { path: "formsbuilder", component: __WEBPACK_IMPORTED_MODULE_1__demos_forms_builder_forms_builder_component__["a" /* FormsBuilderComponent */] },
            { path: "templatevalidation", component: __WEBPACK_IMPORTED_MODULE_3__demos_template_validation_template_validation_component__["a" /* TemplateValidationComponent */] },
            { path: "reactivevalidation", component: __WEBPACK_IMPORTED_MODULE_2__demos_reative_validation_reative_validation_component__["a" /* ReativeValidationComponent */] },
            { path: "twoway", component: __WEBPACK_IMPORTED_MODULE_0__demos_two_way_person_two_way_person_component__["a" /* TwoWayPersonComponent */] }
        ]
    },
    {
        path: "vouchers",
        component: __WEBPACK_IMPORTED_MODULE_7__vouchers_vouchers_list_component__["a" /* VouchersListComponent */]
    },
    {
        path: "vouchers/:id",
        component: __WEBPACK_IMPORTED_MODULE_8__vouchers_voucher_voucher_component__["a" /* VoucherComponent */]
    },
    {
        path: "accounts",
        component: __WEBPACK_IMPORTED_MODULE_9__accounts_accounts_list_component__["a" /* AccountsListComponent */]
    },
    {
        path: "accounts/:id",
        component: __WEBPACK_IMPORTED_MODULE_14__accounts_account_detail_account_detail_component__["a" /* AccountDetailComponent */]
    },
    {
        path: "admin",
        component: __WEBPACK_IMPORTED_MODULE_12__admin_admin_component__["a" /* AdminComponent */],
        data: { title: "The protected Admin Page" },
        canActivate: [__WEBPACK_IMPORTED_MODULE_13__route_guard_service__["a" /* RouteGuard */]]
    },
    { path: "**", component: __WEBPACK_IMPORTED_MODULE_6__demos_demos_component__["a" /* DemosComponent */] }
];
var AppRoutingModule = (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_11__angular_core__["I" /* NgModule */])({
            imports: [__WEBPACK_IMPORTED_MODULE_10__angular_router__["c" /* RouterModule */].forRoot(appRoutes, { enableTracing: false })],
            exports: [__WEBPACK_IMPORTED_MODULE_10__angular_router__["c" /* RouterModule */]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "../../../../../src/app/demos/control-messages.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ControlMessagesComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__validation_service__ = __webpack_require__("../../../../../src/app/demos/validation.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ControlMessagesComponent = (function () {
    function ControlMessagesComponent() {
    }
    Object.defineProperty(ControlMessagesComponent.prototype, "errorMessage", {
        get: function () {
            for (var propertyName in this.control.errors) {
                if (this.control.errors.hasOwnProperty(propertyName) && this.control.touched) {
                    return __WEBPACK_IMPORTED_MODULE_2__validation_service__["a" /* ValidationService */].getValidatorErrorMessage(propertyName, this.control.errors[propertyName]);
                }
            }
            return null;
        },
        enumerable: true,
        configurable: true
    });
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormControl */])
    ], ControlMessagesComponent.prototype, "control", void 0);
    ControlMessagesComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'control-messages',
            template: "<div *ngIf=\"errorMessage !== null\">{{errorMessage}}</div>"
        }),
        __metadata("design:paramtypes", [])
    ], ControlMessagesComponent);
    return ControlMessagesComponent;
}());



/***/ }),

/***/ "../../../../../src/app/demos/demo.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DemoService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_toPromise__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/toPromise.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_toPromise__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var DemoService = (function () {
    function DemoService(httpClient) {
        this.httpClient = httpClient;
    }
    DemoService.prototype.getItems = function () {
        return this.httpClient.get('/assets/demos.json').toPromise();
    };
    DemoService.prototype.getItemsObs = function () {
        return this.httpClient.get('/assets/demos.json');
    };
    DemoService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */]])
    ], DemoService);
    return DemoService;
}());



/***/ }),

/***/ "../../../../../src/app/demos/demos.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "a {\r\n    display: block;\r\n    text-decoration: none;    \r\n    cursor: pointer;\r\n    padding-bottom: 3px;\r\n}\r\n\r\n\r\n\r\n.imgCell{\r\n    padding-top: 5px;\r\n    vertical-align: middle;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/demos/demos.component.html":
/***/ (function(module, exports) {

module.exports = "<div id=\"demoContainer\" class=\"container-fluid\">\r\n    <div class=\"row\" [MatchHeight]=\"'panel'\">\r\n        <div class=\"panel col-md-3\">\r\n            <h4>{{title}}</h4>\r\n            <div>\r\n                <a *ngFor=\"let item of demos\" [routerLink]=\"['', item.url]\" [queryParams]=\"{title: item.title}\">{{item.title}}</a>\r\n            </div>\r\n        </div>\r\n\r\n        <div class=\"panel col-md-8 col-md-offset-1\">\r\n            <h4>{{demoName}}</h4>\r\n            <div>\r\n               <router-outlet></router-outlet>\r\n             </div>\r\n        </div>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/demos/demos.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DemosComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__demo_service__ = __webpack_require__("../../../../../src/app/demos/demo.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var DemosComponent = (function () {
    function DemosComponent(route, router, demoService) {
        this.route = route;
        this.router = router;
        this.demoService = demoService;
        this.title = '';
        this.demoName = '';
        this.componentName = '';
        this.title = 'Forms & Validation';
    }
    DemosComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.demoService.getItems()
            .then(function (result) { _this.demos = result; });
        this.route.queryParams
            .subscribe(function (params) {
            var c = _this.getComponent(params['title']);
            _this.demoName = params['title'] != null ? "Demo: " + params['title'] + " - Component: " + (c != undefined ? c.component : '') : 'Please select a demo';
        });
    };
    DemosComponent.prototype.getComponent = function (val) {
        if (this.demos != undefined && this.demos != null) {
            return this.demos.find(function (el) { return el.title === val; });
        }
    };
    DemosComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["n" /* Component */])({
            selector: 'app-demos',
            template: __webpack_require__("../../../../../src/app/demos/demos.component.html"),
            styles: [__webpack_require__("../../../../../src/app/demos/demos.component.css")],
            providers: [__WEBPACK_IMPORTED_MODULE_0__demo_service__["a" /* DemoService */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */],
            __WEBPACK_IMPORTED_MODULE_0__demo_service__["a" /* DemoService */]])
    ], DemosComponent);
    return DemosComponent;
}());



/***/ }),

/***/ "../../../../../src/app/demos/forms-builder/forms-builder.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/demos/forms-builder/forms-builder.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"section\">\r\n  <h4>Voucher Form - Reactive FormBuilder</h4><br>\r\n  <form [formGroup]=\"personForm\" (ngSubmit)=\"savePerson(personForm.value)\" novalidate>\r\n    <div class=\"form-group\">\r\n      <label for=\"name\">Name</label>\r\n      <input type=\"text\" class=\"form-control\" placeholder=\"Enter name\"\r\n       formControlName=\"personName\" name=\"personName\" >\r\n    </div>\r\n    <div class=\"form-group\">\r\n      <label for=\"age\">Age</label>\r\n      <input type=\"number\" class=\"form-control\" placeholder=\"Enter age\"\r\n       formControlName=\"personAge\" id=\"age\" name=\"personAge\">\r\n    </div>\r\n    <div class=\"form-group\">\r\n      <label>Gender</label><br/>\r\n      <input type=\"radio\" value=\"male\" id=\"gender\" formControlName=\"personGender\"> Male\r\n      <input type=\"radio\" value=\"female\" id=\"gender\" formControlName=\"personGender\"> Female\r\n    </div>  \r\n    <div>\r\n      <button type=\"submit\" class=\"btn btn-primary\">Submit</button>\r\n    </div>\r\n  </form>  \r\n</div>"

/***/ }),

/***/ "../../../../../src/app/demos/forms-builder/forms-builder.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FormsBuilderComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var FormsBuilderComponent = (function () {
    function FormsBuilderComponent(fb) {
        this.fb = fb;
        this.person = { name: "Heinz", gender: "male", age: 12, mail: "derschoeneheinz@xyz.at" };
    }
    FormsBuilderComponent.prototype.ngOnInit = function () {
        this.personForm = this.fb.group({
            personName: [this.person.name, __WEBPACK_IMPORTED_MODULE_0__angular_forms__["i" /* Validators */].required],
            personAge: [this.person.age],
            personGender: [this.person.gender]
        });
    };
    FormsBuilderComponent.prototype.savePerson = function (formValues) {
        console.log('saving person with values: ');
        console.log(formValues);
        //does not work because of current structure of person obj
        //let person: Person = <Person>formValues; 
    };
    FormsBuilderComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["n" /* Component */])({
            selector: 'app-forms-builder',
            template: __webpack_require__("../../../../../src/app/demos/forms-builder/forms-builder.component.html"),
            styles: [__webpack_require__("../../../../../src/app/demos/forms-builder/forms-builder.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_forms__["a" /* FormBuilder */]])
    ], FormsBuilderComponent);
    return FormsBuilderComponent;
}());



/***/ }),

/***/ "../../../../../src/app/demos/reative-forms/reative-forms.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "em {float:right; color:#E05C65; padding-left: 10px;}\r\n.error input {background-color:#E3C3C5;}\r\n.error ::-webkit-input-placeholder { color: #999; }\r\n.error ::-moz-placeholder { color: #999; }\r\n.error :-moz-placeholder { color:#999; }\r\n.error :ms-input-placeholder { color: #999; }", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/demos/reative-forms/reative-forms.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"section\">\r\n  <h4>Voucher Form - Reactive (Model) Bound</h4>\r\n  <span>Make sure you only have one Submit in the form</span><br>\r\n  <form [formGroup]=\"personForm\" (ngSubmit)=\"savePerson(personForm.value)\" novalidate>\r\n    <div class=\"form-group\">\r\n      <label for=\"name\">Name</label>\r\n      <input type=\"text\" class=\"form-control\" placeholder=\"Enter name\"\r\n       formControlName=\"pName\" id=\"name\" name=\"personName\" >\r\n    </div>\r\n    <div class=\"form-group\">\r\n      <label for=\"age\">Age</label>\r\n      <input type=\"number\" class=\"form-control\" placeholder=\"Enter age\"\r\n       formControlName=\"pAge\" id=\"age\" name=\"personAge\">\r\n    </div>\r\n    <div class=\"form-group\">\r\n      <label>Gender</label><br/>\r\n      <input type=\"radio\" value=\"male\" id=\"gender\" formControlName=\"pGender\"> Male\r\n      <input type=\"radio\" value=\"female\" id=\"gender\" formControlName=\"pGender\"> Female\r\n    </div>  \r\n    <div>\r\n      <button type=\"submit\" class=\"btn btn-primary\" (click)=\"savePerson(personForm)\" >Submit</button>\r\n    </div>\r\n  </form>  \r\n</div>"

/***/ }),

/***/ "../../../../../src/app/demos/reative-forms/reative-forms.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ReativeFormsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ReativeFormsComponent = (function () {
    function ReativeFormsComponent() {
        this.person = { name: "Heinz", gender: "male", age: 12, mail: "derschoeneheinz@xyz.at" };
    }
    ReativeFormsComponent.prototype.ngOnInit = function () {
        this.personName = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormControl */](this.person.name);
        this.personAge = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormControl */](this.person.age);
        this.personGender = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormControl */](this.person.gender);
        this.personForm = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* FormGroup */]({
            pName: this.personName,
            pAge: this.personAge,
            pGender: this.personGender
        });
    };
    ReativeFormsComponent.prototype.savePerson = function (formValues) {
        console.log('saving person with values: ');
        console.log(formValues);
        //does not work because of curren structure of person obj
        //let person: Person = <Person>formValues; 
    };
    ReativeFormsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-reative-forms',
            template: __webpack_require__("../../../../../src/app/demos/reative-forms/reative-forms.component.html"),
            styles: [__webpack_require__("../../../../../src/app/demos/reative-forms/reative-forms.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ReativeFormsComponent);
    return ReativeFormsComponent;
}());



/***/ }),

/***/ "../../../../../src/app/demos/reative-validation/reative-validation.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/demos/reative-validation/reative-validation.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"section\">\r\n  <h4>Voucher Form - Reactive Validation</h4><br>\r\n  <form [formGroup]=\"personForm\" (ngSubmit)=\"savePerson(personForm.value)\" novalidate>\r\n    <div class=\"form-group\">\r\n      <label for=\"name\">Name</label>\r\n      <input type=\"text\" class=\"form-control\" placeholder=\"Enter name\"\r\n       formControlName=\"pName\" id=\"name\" name=\"personName\" >\r\n       <em *ngIf=\"personForm.get('pName').errors!= undefined && personForm.get('pName').errors['hugoNotAllowed']\">\r\n          The Name Hugo is not allowed\r\n       </em>\r\n       <em *ngIf=\"personForm.get('pName').errors!= undefined && personForm.get('pName').errors['UserExists']\">\r\n          This username is already taken\r\n      </em>\r\n      <em *ngIf=\"!validateName()\">\r\n        Name is required (minimum 4 characters).\r\n     </em>\r\n    </div>\r\n    <div class=\"form-group\">\r\n      <label for=\"age\">Age</label>\r\n      <input type=\"number\" class=\"form-control\" placeholder=\"Enter age\"\r\n       formControlName=\"pAge\" id=\"age\" name=\"personAge\">\r\n       <em *ngIf=\"personForm.get('pAge').valid && personForm.get('pAge').touched\">\r\n          We dont support Undeads - Pls a value smaller than 120\r\n       </em>\r\n    </div>\r\n    <div class=\"form-group\">\r\n      <label>Gender</label><br/>\r\n      <input type=\"radio\" value=\"male\" id=\"gender\" formControlName=\"pGender\"> Male\r\n      <input type=\"radio\" value=\"female\" id=\"gender\" formControlName=\"pGender\"> Female\r\n    </div>  \r\n    <div>\r\n      <button class=\"btn btn-primary\" (click)=\"validateForm(personForm)\" >Validate</button>\r\n      <button type=\"submit\" class=\"btn btn-primary\">Submit</button>\r\n    </div>\r\n  </form>  \r\n</div>\r\n\r\n"

/***/ }),

/***/ "../../../../../src/app/demos/reative-validation/reative-validation.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ReativeValidationComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ReativeValidationComponent = (function () {
    function ReativeValidationComponent() {
        this.person = { name: "Heinz", gender: "male", age: 12, mail: "derschoeneheinz@xyz.at" };
    }
    ReativeValidationComponent.prototype.ngOnInit = function () {
        this.personName = new __WEBPACK_IMPORTED_MODULE_0__angular_forms__["b" /* FormControl */](this.person.name, [__WEBPACK_IMPORTED_MODULE_0__angular_forms__["i" /* Validators */].required,
            __WEBPACK_IMPORTED_MODULE_0__angular_forms__["i" /* Validators */].minLength(4),
            this.validateNotHugo], this.validateNamesExist);
        this.personAge = new __WEBPACK_IMPORTED_MODULE_0__angular_forms__["b" /* FormControl */](this.person.age, __WEBPACK_IMPORTED_MODULE_0__angular_forms__["i" /* Validators */].min(120));
        this.personGender = new __WEBPACK_IMPORTED_MODULE_0__angular_forms__["b" /* FormControl */](this.person.gender);
        this.personForm = new __WEBPACK_IMPORTED_MODULE_0__angular_forms__["c" /* FormGroup */]({
            pName: this.personName,
            pAge: this.personAge,
            pGender: this.personGender
        });
    };
    ReativeValidationComponent.prototype.savePerson = function (formValues) {
        console.log('saving person with values: ');
        console.log(formValues);
    };
    ReativeValidationComponent.prototype.validateName = function () {
        return this.personName.valid || this.personName.untouched;
    };
    ReativeValidationComponent.prototype.validateNotHugo = function (control) {
        if (control.value === "Hugo") {
            return { 'hugoNotAllowed': true };
        }
        return null;
    };
    ReativeValidationComponent.prototype.validateNamesExist = function (control) {
        //Mocking Http Call to service to check weather user exists
        var result = new Promise(function (resolve, reject) {
            setTimeout(function () {
                if (control.value === "Alexander") {
                    resolve({ 'UserExists': true });
                }
                else {
                    resolve(null);
                }
            }, 1500);
        });
        return result;
    };
    ReativeValidationComponent.prototype.validateForm = function (form) {
        form.updateValueAndValidity();
        form.controls['pName'].updateValueAndValidity();
    };
    ReativeValidationComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["n" /* Component */])({
            selector: 'app-reative-validation',
            template: __webpack_require__("../../../../../src/app/demos/reative-validation/reative-validation.component.html"),
            styles: [__webpack_require__("../../../../../src/app/demos/reative-validation/reative-validation.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ReativeValidationComponent);
    return ReativeValidationComponent;
}());



/***/ }),

/***/ "../../../../../src/app/demos/template-driven/template-driven.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "em { float:right; color:#E05C65; padding-left:10px; }", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/demos/template-driven/template-driven.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"section\">\r\n  <h4>Voucher Form - Template Driven</h4><br>\r\n  <form #personForm=\"ngForm\" (ngSubmit)=\"savePerson(personForm)\" role=\"form\" novalidate>\r\n    <div id=\"user-data\" ngModelGroup=\"userData\">\r\n      <div class=\"form-group\">\r\n        <label for=\"name\">Name</label>\r\n        <input type=\"text\" class=\"form-control\" id=\"name\" name=\"personName\" placeholder=\"Enter name\" [(ngModel)]=\"person.name\">\r\n      </div>\r\n      <div class=\"form-group\">\r\n        <label for=\"age\">Age</label>\r\n        <input type=\"number\" class=\"form-control\" id=\"age\" name=\"personAge\" placeholder=\"Enter age\" [(ngModel)]=\"person.age\">\r\n      </div>\r\n    </div>  \r\n    <div class=\"form-group\">\r\n      <label>Gender</label><br/>\r\n      <input type=\"radio\" value=\"male\" name=\"personGender\" [(ngModel)]=\"person.gender\" > Male\r\n      <input type=\"radio\" value=\"female\" name=\"personGender\" [(ngModel)]=\"person.gender\" > Female\r\n    </div>\r\n    <div class=\"form-group\">\r\n        <label>Wealth</label><br/>\r\n        <select name=\"personWealth\" [(ngModel)]=\"person.wealth\">\r\n          <option *ngFor=\"let ws of wealth\" [ngValue]=\"ws\">{{ws}}</option>\r\n        </select>\r\n    </div>\r\n    <div class=\"form-group\">\r\n        <label>Wealth Radio Buttons</label><br/>\r\n        <div *ngFor=\"let rw of wealth\">\r\n            <input type=\"radio\" value=\"rw\" name=\"personGenderRB\" [(ngModel)]=\"person.gender\" > {{rw}}\r\n        </div>\r\n    </div>\r\n    <div class=\"form-group\">\r\n        <label>State of Mind</label><br/>\r\n        <select name=\"personState\" [(ngModel)]=\"person.state\">\r\n          <option *ngFor=\"let s of states\" [ngValue]=\"s\">{{s}}</option>\r\n        </select>\r\n    </div>\r\n    <div>  \r\n      <button type=\"submit\" class=\"btn btn-primary\">Submit</button>\r\n    </div>\r\n  </form>  \r\n</div>"

/***/ }),

/***/ "../../../../../src/app/demos/template-driven/template-driven.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TemplateDrivenComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__shared__ = __webpack_require__("../../../../../src/app/shared/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var TemplateDrivenComponent = (function () {
    function TemplateDrivenComponent() {
        this.person = { name: "Heinz", gender: "male", age: 12, mail: "derschoeneheinz@xyz.at", wealth: "poor", state: __WEBPACK_IMPORTED_MODULE_0__shared__["f" /* WorkLifeBalance */].Happy }; //Cast required because nullable prop
        this.wealth = ['poor', 'rich', 'middle class'];
        this.states = Object.keys(__WEBPACK_IMPORTED_MODULE_0__shared__["f" /* WorkLifeBalance */]).slice(Object.keys(__WEBPACK_IMPORTED_MODULE_0__shared__["f" /* WorkLifeBalance */]).length / 2); //Gets Enum values as string array
    }
    TemplateDrivenComponent.prototype.ngOnInit = function () {
    };
    TemplateDrivenComponent.prototype.savePerson = function (formValues) {
        console.log('saving person with values: ');
        console.log(formValues);
    };
    TemplateDrivenComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["n" /* Component */])({
            selector: 'app-template-driven',
            template: __webpack_require__("../../../../../src/app/demos/template-driven/template-driven.component.html"),
            styles: [__webpack_require__("../../../../../src/app/demos/template-driven/template-driven.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], TemplateDrivenComponent);
    return TemplateDrivenComponent;
}());



/***/ }),

/***/ "../../../../../src/app/demos/template-validation/template-validation.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "input.ng-invalid.ng-touched, select.ng-invalid.ng-touched{\r\n    border: 1px solid red;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/demos/template-validation/template-validation.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"section\">\r\n  <h4>Voucher Form - Template Driven Validation</h4><br>\r\n  <form #personForm=\"ngForm\" (ngSubmit)=\"savePerson(personForm)\" role=\"form\" novalidate>\r\n    <div class=\"form-group\">\r\n      <label for=\"name\">Name</label>\r\n      <input type=\"text\" class=\"form-control\" placeholder=\"Enter name\" id=\"name\" \r\n        name=\"personName\" [(ngModel)]=\"person.name\" required minlength=\"4\">\r\n      <em *ngIf=\"personForm.controls['personName']?.invalid\">\r\n        Name is required (minimum 4 characters).\r\n      </em>\r\n    </div>\r\n    <div class=\"form-group\">\r\n      <label for=\"email\">E-Mail</label>\r\n      <input type=\"text\" class=\"form-control\" placeholder=\"Enter E-Mail\" id=\"email\" \r\n        name=\"personMail\" [(ngModel)]=\"person.mail\" required email>\r\n      <em *ngIf=\"personForm.controls['personMail']?.invalid\">\r\n        E-Mail is required and must be a valid E-Mail.\r\n      </em>\r\n    </div>\r\n    <div class=\"form-group\">\r\n      <label for=\"age\">Age</label>\r\n      <input type=\"number\" class=\"form-control\" placeholder=\"Enter age\" id=\"age\" \r\n       name=\"personAge\" [(ngModel)]=\"person.age\" required min=\"0\" max=\"120\">\r\n       <em *ngIf=\"personForm.controls['personAge']?.invalid\">\r\n        Age is required and must be between 0 and 120.\r\n      </em>\r\n    </div>\r\n    <div class=\"form-group\">\r\n      <label>Gender</label><br/>\r\n      <input type=\"radio\" value=\"male\" name=\"personGender\" [(ngModel)]=\"person.gender\" required> Male\r\n      <input type=\"radio\" value=\"female\" name=\"personGender\" [(ngModel)]=\"person.gender\" required> Female\r\n    </div>  \r\n    <div>\r\n      <button type=\"submit\" class=\"btn btn-primary\"\r\n      [disabled]=\"!personForm.valid\"\r\n      >Submit</button>\r\n    </div>\r\n  </form>  \r\n</div>\r\n\r\n\r\n<div class=\"row section\">\r\n  <div class=\"col-md-6\">\r\n    <h4>Form State</h4><br>\r\n    Form is dirty: {{personForm.dirty}}<br>\r\n    Form is pristine ('unberührt'): {{personForm.pristine}}<br><br>  \r\n    Form is valid: {{personForm.valid}}<br>\r\n    Form is invalid: {{personForm.invalid}}<br><br>\r\n    Form is touched: {{personForm.touched}}<br>\r\n    Form is untouched: {{personForm.untouched}}<br><br>\r\n    Form is submitted: {{personForm.submitted}}<br>\r\n  </div>\r\n  <div class=\"col-md-6\">\r\n    <h4>Control State - i.e. \"Name\" Field</h4><br>\r\n    Name Fld is dirty: {{personForm.controls['personName']?.dirty}}<br>\r\n    Name Fld is pristine: {{personForm.controls['personName']?.pristine}}<br><br>\r\n    Name Fld is valid: {{personForm.controls['personName']?.valid}}<br>\r\n    Name Fld is invalid: {{personForm.controls['personName']?.invalid}}<br><br>\r\n    Name Fld is touched: {{personForm.controls['personName']?.touched}}<br>\r\n    Name Fld is untouched: {{personForm.controls['personName']?.untouched}}<br>      \r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/demos/template-validation/template-validation.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TemplateValidationComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var TemplateValidationComponent = (function () {
    function TemplateValidationComponent() {
        this.person = { name: "Heinz", gender: "male", age: 12, mail: "derschoeneheinz@xyz.at" };
    }
    TemplateValidationComponent.prototype.ngOnInit = function () {
        // this.form.valueChanges.subscribe(data => console.log('Form values changed', data));
        // this.form.statusChanges.subscribe(data => console.log('Form status changed', data));
        // this.form.errors.subscribe(data => console.log('Form errors:', data));
    };
    TemplateValidationComponent.prototype.savePerson = function (personForm) {
        console.log('saving person with values: ');
        console.log("Current personForm: ");
        console.log(personForm);
        console.log("Current personForm using ViewChild: ");
        console.log(this.form);
        console.log(this.form.controls["personName"].value);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_10" /* ViewChild */])('personForm'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1__angular_forms__["g" /* NgForm */])
    ], TemplateValidationComponent.prototype, "form", void 0);
    TemplateValidationComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-template-validation',
            template: __webpack_require__("../../../../../src/app/demos/template-validation/template-validation.component.html"),
            styles: [__webpack_require__("../../../../../src/app/demos/template-validation/template-validation.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], TemplateValidationComponent);
    return TemplateValidationComponent;
}());



/***/ }),

/***/ "../../../../../src/app/demos/two-way-person/person/person.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "a{\r\n    cursor: pointer;   \r\n}\r\n\r\ninput.ng-invalid.ng-touched, select.ng-invalid.ng-touched{\r\n    border: 1px solid red;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/demos/two-way-person/person/person.component.html":
/***/ (function(module, exports) {

module.exports = "<form #personForm=\"ngForm\" role=\"form\" novalidate>\r\n  <div class=\"form-group\">\r\n    <label for=\"name\">Name</label>\r\n    <input type=\"text\" class=\"form-control\" id=\"name\" placeholder=\"Enter name\" \r\n      name=\"name\" [(ngModel)]=\"person.name\" required minlength=\"4\">\r\n  </div>\r\n  <div class=\"form-group\">\r\n    <label for=\"age\">Age</label>\r\n    <input type=\"number\" class=\"form-control\" id=\"age\" placeholder=\"Enter age\" name=\"age\" [(ngModel)]=\"person.age\">\r\n  </div>\r\n  <div class=\"form-group\">\r\n    <label>Gender</label><br/>\r\n    <input type=\"radio\" value=\"male\" name=\"gender\" [(ngModel)]=\"person.gender\" > Male\r\n    <input type=\"radio\" value=\"female\" name=\"gender\" [(ngModel)]=\"person.gender\" > Female\r\n  </div>  \r\n  <div *ngIf=\"edit\">\r\n    <a (click)=\"doSave()\" class=\"btn btn-default\">Submit</a>\r\n  </div>\r\n</form>\r\n"

/***/ }),

/***/ "../../../../../src/app/demos/two-way-person/person/person.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PersonComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__persons_persons_component__ = __webpack_require__("../../../../../src/app/demos/two-way-person/persons/persons.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var PersonComponent = (function () {
    function PersonComponent() {
        this.savePerson = new __WEBPACK_IMPORTED_MODULE_1__angular_core__["v" /* EventEmitter */]();
    }
    PersonComponent.prototype.ngOnInit = function () {
        console.log(this.person);
    };
    PersonComponent.prototype.doSave = function () {
        this.savePerson.emit(this.person);
    };
    PersonComponent.prototype.doDelete = function () {
        console.log("deleting " + this.person.name);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["D" /* Input */])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__persons_persons_component__["a" /* Person */])
    ], PersonComponent.prototype, "person", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["D" /* Input */])(),
        __metadata("design:type", Boolean)
    ], PersonComponent.prototype, "edit", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["P" /* Output */])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1__angular_core__["v" /* EventEmitter */])
    ], PersonComponent.prototype, "savePerson", void 0);
    PersonComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["n" /* Component */])({
            selector: 'app-person',
            template: __webpack_require__("../../../../../src/app/demos/two-way-person/person/person.component.html"),
            styles: [__webpack_require__("../../../../../src/app/demos/two-way-person/person/person.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], PersonComponent);
    return PersonComponent;
}());



/***/ }),

/***/ "../../../../../src/app/demos/two-way-person/persons/persons.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "hr{\r\n    margin-top: 20px;\r\n    margin-bottom: 20px;\r\n    border: 0;\r\n    border-top: 1px solid black !important\r\n}\r\n\r\na{\r\n    cursor: pointer;   \r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/demos/two-way-person/persons/persons.component.html":
/***/ (function(module, exports) {

module.exports = "\r\n<div>\r\n  <table class=\"table\">\r\n    <thead>\r\n        <tr>\r\n          <th>ID</th>\r\n          <th>Text</th>\r\n          <th>Age</th>\r\n        </tr>\r\n    </thead>\r\n      <tbody>\r\n        <tr *ngFor=\"let p of persons\">\r\n          <td>{{p.name}}</td>\r\n          <td>{{p.gender}}</td>\r\n          <td>{{p.age}}</td>\r\n          <td><a (click)=\"selectPerson(p)\">Select</a></td>\r\n        </tr>    \r\n  </tbody>\r\n  </table>\r\n</div>\r\n\r\n<hr>\r\n<div>\r\n  <h4>Details</h4>\r\n  <app-person [person]=\"current\" [edit]=\"true\" (savePerson)=\"sendtoService($event)\" ></app-person>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/demos/two-way-person/persons/persons.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return PersonsComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Person; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var PersonsComponent = (function () {
    function PersonsComponent() {
        this.persons = [
            { name: "Heinz", gender: "male", age: 12 },
            { name: "Brunhilde", gender: "female", age: 22 },
            { name: "Susi", gender: "female", age: 45 }
        ];
    }
    PersonsComponent.prototype.ngOnInit = function () {
        this.current = this.persons[0];
    };
    PersonsComponent.prototype.selectPerson = function (p) {
        this.current = p;
    };
    PersonsComponent.prototype.sendtoService = function (p) {
        console.log("saving to service");
        console.log(p);
    };
    PersonsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-persons',
            template: __webpack_require__("../../../../../src/app/demos/two-way-person/persons/persons.component.html"),
            styles: [__webpack_require__("../../../../../src/app/demos/two-way-person/persons/persons.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], PersonsComponent);
    return PersonsComponent;
}());

var Person = (function () {
    function Person() {
    }
    return Person;
}());



/***/ }),

/***/ "../../../../../src/app/demos/two-way-person/two-way-person.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/demos/two-way-person/two-way-person.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"section\">\r\n<h4>List of Persons - Two Way Binding Recap</h4>\r\nChange Name to Heinzi and watch parent tbl<br>\r\nDo we want such a thing to happen?\r\n<app-persons></app-persons>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/demos/two-way-person/two-way-person.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TwoWayPersonComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var TwoWayPersonComponent = (function () {
    function TwoWayPersonComponent() {
    }
    TwoWayPersonComponent.prototype.ngOnInit = function () {
    };
    TwoWayPersonComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-two-way-person',
            template: __webpack_require__("../../../../../src/app/demos/two-way-person/two-way-person.component.html"),
            styles: [__webpack_require__("../../../../../src/app/demos/two-way-person/two-way-person.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], TwoWayPersonComponent);
    return TwoWayPersonComponent;
}());



/***/ }),

/***/ "../../../../../src/app/demos/validation.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ValidationService; });
var ValidationService = (function () {
    function ValidationService() {
    }
    ValidationService.getValidatorErrorMessage = function (validatorName, validatorValue) {
        var config = {
            'required': 'Required',
            'invalidCreditCard': 'Is invalid credit card number',
            'invalidEmailAddress': 'Invalid email address',
            'invalidPassword': 'Invalid password. Password must be at least 6 characters long, and contain a number.',
            'minlength': "Minimum length " + validatorValue.requiredLength
        };
        return config[validatorName];
    };
    ValidationService.creditCardValidator = function (control) {
        // Visa, MasterCard, American Express, Diners Club, Discover, JCB
        if (control.value.match(/^(?:4[0-9]{12}(?:[0-9]{3})?|5[1-5][0-9]{14}|6(?:011|5[0-9][0-9])[0-9]{12}|3[47][0-9]{13}|3(?:0[0-5]|[68][0-9])[0-9]{11}|(?:2131|1800|35\d{3})\d{11})$/)) {
            return null;
        }
        else {
            return { 'invalidCreditCard': true };
        }
    };
    ValidationService.emailValidator = function (control) {
        // RFC 2822 compliant regex
        if (control.value.match(/[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/)) {
            return null;
        }
        else {
            return { 'invalidEmailAddress': true };
        }
    };
    ValidationService.passwordValidator = function (control) {
        // {6,100}           - Assert password is between 6 and 100 characters
        // (?=.*[0-9])       - Assert a string has at least one number
        if (control.value.match(/^(?=.*[0-9])[a-zA-Z0-9!@#$%^&*]{6,100}$/)) {
            return null;
        }
        else {
            return { 'invalidPassword': true };
        }
    };
    return ValidationService;
}());



/***/ }),

/***/ "../../../../../src/app/route.guard.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RouteGuard; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var RouteGuard = (function () {
    function RouteGuard(router) {
        this.router = router;
        this.allow = !__WEBPACK_IMPORTED_MODULE_2_environments_environment__["a" /* environment */].authEnabled;
    }
    RouteGuard.prototype.canActivate = function (route, state) {
        if (this.allow) {
            return true;
        }
        else {
            this.router.navigate(['/']);
        }
    };
    RouteGuard.prototype.canActivateChild = function (route, state) {
        return this.canActivate(route, state);
    };
    RouteGuard = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_router__["b" /* Router */]])
    ], RouteGuard);
    return RouteGuard;
}());



/***/ }),

/***/ "../../../../../src/app/shared/check.pipe.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CheckPipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var CheckPipe = (function () {
    function CheckPipe() {
    }
    CheckPipe.prototype.transform = function (checked, args) {
        var result = !checked ? "<img src=\"/assets/images/check.png\"></img>" : "";
        return result;
    };
    CheckPipe = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["T" /* Pipe */])({
            name: 'checked'
        })
    ], CheckPipe);
    return CheckPipe;
}());



/***/ }),

/***/ "../../../../../src/app/shared/data-store.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DataStoreService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__vouchers_voucher_service__ = __webpack_require__("../../../../../src/app/vouchers/voucher.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs__ = __webpack_require__("../../../../rxjs/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var DataStoreService = (function () {
    function DataStoreService(vs) {
        this.vs = vs;
        this.vouchersArray = [];
        this.vouchers = new __WEBPACK_IMPORTED_MODULE_2_rxjs__["BehaviorSubject"](this.vouchersArray);
        this.Vouchers = this.vouchers.asObservable();
        this.sideCMDsArray = [];
        this.sideCMDs = new __WEBPACK_IMPORTED_MODULE_2_rxjs__["BehaviorSubject"](this.sideCMDsArray);
        this.SideCMDs = this.sideCMDs.asObservable();
        this.initVouchers();
        this.addLateVoucher();
    }
    DataStoreService.prototype.initVouchers = function () {
        var _this = this;
        this.vs.getVouchers().subscribe(function (data) {
            _this.vouchersArray = data;
            _this.vouchers.next(_this.vouchersArray);
        });
    };
    DataStoreService.prototype.addLateVoucher = function () {
        var _this = this;
        setTimeout(function () {
            var v = {
                "ID": 99,
                "Text": "Late Voucher",
                "Date": new Date().toString(),
                "Amount": 1000,
                "Paid": false,
                "Expense": false,
                "Remark": true,
                "Details": [
                    {
                        "ID": 4,
                        "VoucherID": 2,
                        "AccountID": 2,
                        "Account": null,
                        "Text": "Diesel",
                        "Amount": 45,
                        "Comment": null
                    },
                    {
                        "ID": 6,
                        "VoucherID": 2,
                        "AccountID": 2,
                        "Account": null,
                        "Text": "Reifenwechsel",
                        "Amount": 20,
                        "Comment": null
                    }
                ]
            };
            _this.vouchersArray.push(v);
            _this.vouchers.next(_this.vouchersArray);
        }, 10000);
    };
    DataStoreService.prototype.setSideCMDs = function (items) {
        this.sideCMDsArray = items;
        this.sideCMDs.next(items);
    };
    DataStoreService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__vouchers_voucher_service__["a" /* VouchersService */]])
    ], DataStoreService);
    return DataStoreService;
}());



/***/ }),

/***/ "../../../../../src/app/shared/index.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__data_store_service__ = __webpack_require__("../../../../../src/app/shared/data-store.service.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__data_store_service__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__model_model__ = __webpack_require__("../../../../../src/app/shared/model/model.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "e", function() { return __WEBPACK_IMPORTED_MODULE_1__model_model__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__match_height_match_height_directive__ = __webpack_require__("../../../../../src/app/shared/match-height/match-height.directive.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "c", function() { return __WEBPACK_IMPORTED_MODULE_2__match_height_match_height_directive__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__navbar_navbar_component__ = __webpack_require__("../../../../../src/app/shared/navbar/navbar.component.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "d", function() { return __WEBPACK_IMPORTED_MODULE_3__navbar_navbar_component__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__model_person__ = __webpack_require__("../../../../../src/app/shared/model/person.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "f", function() { return __WEBPACK_IMPORTED_MODULE_4__model_person__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__kpi_bar_kpi_bar_component__ = __webpack_require__("../../../../../src/app/shared/kpi-bar/kpi-bar.component.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_5__kpi_bar_kpi_bar_component__["a"]; });








/***/ }),

/***/ "../../../../../src/app/shared/kpi-bar/kpi-bar.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"cmdPanel\">\r\n  Voucher KPIs: {{runningSum | currency:'EUR':true }}\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/shared/kpi-bar/kpi-bar.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/shared/kpi-bar/kpi-bar.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return KpiBarComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__data_store_service__ = __webpack_require__("../../../../../src/app/shared/data-store.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var KpiBarComponent = (function () {
    function KpiBarComponent(dataStore) {
        this.dataStore = dataStore;
        this.runningSum = 0;
    }
    KpiBarComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.dataStore.Vouchers.subscribe(function (vouchers) {
            _this.runningSum = 0;
            vouchers.forEach(function (item) {
                console.log("Adding " + item.Amount + "\u20AC from voucher with text '" + item.Text + "' to current Total " + _this.runningSum + " - New Total: " + (item.Amount + _this.runningSum));
                _this.runningSum += item.Amount;
            });
        });
    };
    KpiBarComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-kpi-bar',
            template: __webpack_require__("../../../../../src/app/shared/kpi-bar/kpi-bar.component.html"),
            styles: [__webpack_require__("../../../../../src/app/shared/kpi-bar/kpi-bar.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__data_store_service__["a" /* DataStoreService */]])
    ], KpiBarComponent);
    return KpiBarComponent;
}());



/***/ }),

/***/ "../../../../../src/app/shared/match-height/match-height.directive.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MatchHeightDirective; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var MatchHeightDirective = (function () {
    function MatchHeightDirective(el) {
        this.el = el;
    }
    Object.defineProperty(MatchHeightDirective.prototype, "MatchHeight", {
        // class name to match height
        set: function (css) {
            this.cssSelector = css;
        },
        enumerable: true,
        configurable: true
    });
    MatchHeightDirective.prototype.ngAfterViewChecked = function () {
        // call our matchHeight function here later
        this.matchHeight(this.el.nativeElement, this.cssSelector);
    };
    MatchHeightDirective.prototype.onResize = function () {
        // call our matchHeight function here later
        this.matchHeight(this.el.nativeElement, this.cssSelector);
    };
    MatchHeightDirective.prototype.matchHeight = function (parent, className) {
        // match height logic here
        if (!parent)
            return;
        var children = parent.getElementsByClassName(className);
        if (!children)
            return;
        // reset all children height
        Array.from(children).forEach(function (x) {
            x.style.height = 'initial';
        });
        // gather all height
        var itemHeights = Array.from(children)
            .map(function (x) { return x.getBoundingClientRect().height; });
        // find max height
        var maxHeight = itemHeights.reduce(function (prev, curr) {
            return curr > prev ? curr : prev;
        }, 0);
        // apply max height
        Array.from(children)
            .forEach(function (x) { return x.style.height = maxHeight + "px"; });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", String),
        __metadata("design:paramtypes", [String])
    ], MatchHeightDirective.prototype, "MatchHeight", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["y" /* HostListener */])('window:resize'),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], MatchHeightDirective.prototype, "onResize", null);
    MatchHeightDirective = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["s" /* Directive */])({
            selector: '[MatchHeight]'
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* ElementRef */]])
    ], MatchHeightDirective);
    return MatchHeightDirective;
}());



/***/ }),

/***/ "../../../../../src/app/shared/model/model.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return VoucherDetail; });
/* unused harmony export BalanceAccount */
/* unused harmony export Voucher */
var VoucherDetail = (function () {
    function VoucherDetail() {
    }
    return VoucherDetail;
}());

var BalanceAccount = (function () {
    function BalanceAccount() {
    }
    return BalanceAccount;
}());

var Voucher = (function () {
    function Voucher() {
    }
    return Voucher;
}());



/***/ }),

/***/ "../../../../../src/app/shared/model/person.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WorkLifeBalance; });
var WorkLifeBalance;
(function (WorkLifeBalance) {
    WorkLifeBalance[WorkLifeBalance["Happy"] = 0] = "Happy";
    WorkLifeBalance[WorkLifeBalance["Unsatisfied"] = 1] = "Unsatisfied";
    WorkLifeBalance[WorkLifeBalance["ReadyForRevolution"] = 2] = "ReadyForRevolution";
})(WorkLifeBalance || (WorkLifeBalance = {}));


/***/ }),

/***/ "../../../../../src/app/shared/navbar/navbar.component.html":
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-inverse\">\r\n    <div class=\"navbar-header\">\r\n      <a class=\"navbar-brand\" >\r\n          <div class='row'>\r\n              <div class='col-xs-1'>\r\n                  <img width=\"50\" src=\"data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4NCjwhLS0gR2VuZXJhdG9yOiBBZG9iZSBJbGx1c3RyYXRvciAxOS4xLjAsIFNWRyBFeHBvcnQgUGx1Zy1JbiAuIFNWRyBWZXJzaW9uOiA2LjAwIEJ1aWxkIDApICAtLT4NCjxzdmcgdmVyc2lvbj0iMS4xIiBpZD0iTGF5ZXJfMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgeD0iMHB4IiB5PSIwcHgiDQoJIHZpZXdCb3g9IjAgMCAyNTAgMjUwIiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCAyNTAgMjUwOyIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSI+DQo8c3R5bGUgdHlwZT0idGV4dC9jc3MiPg0KCS5zdDB7ZmlsbDojREQwMDMxO30NCgkuc3Qxe2ZpbGw6I0MzMDAyRjt9DQoJLnN0MntmaWxsOiNGRkZGRkY7fQ0KPC9zdHlsZT4NCjxnPg0KCTxwb2x5Z29uIGNsYXNzPSJzdDAiIHBvaW50cz0iMTI1LDMwIDEyNSwzMCAxMjUsMzAgMzEuOSw2My4yIDQ2LjEsMTg2LjMgMTI1LDIzMCAxMjUsMjMwIDEyNSwyMzAgMjAzLjksMTg2LjMgMjE4LjEsNjMuMiAJIi8+DQoJPHBvbHlnb24gY2xhc3M9InN0MSIgcG9pbnRzPSIxMjUsMzAgMTI1LDUyLjIgMTI1LDUyLjEgMTI1LDE1My40IDEyNSwxNTMuNCAxMjUsMjMwIDEyNSwyMzAgMjAzLjksMTg2LjMgMjE4LjEsNjMuMiAxMjUsMzAgCSIvPg0KCTxwYXRoIGNsYXNzPSJzdDIiIGQ9Ik0xMjUsNTIuMUw2Ni44LDE4Mi42aDBoMjEuN2gwbDExLjctMjkuMmg0OS40bDExLjcsMjkuMmgwaDIxLjdoMEwxMjUsNTIuMUwxMjUsNTIuMUwxMjUsNTIuMUwxMjUsNTIuMQ0KCQlMMTI1LDUyLjF6IE0xNDIsMTM1LjRIMTA4bDE3LTQwLjlMMTQyLDEzNS40eiIvPg0KPC9nPg0KPC9zdmc+DQo=\">\r\n              </div>  \r\n              <div class='col-xs-11' >\r\n                  \r\n                      <h4 class=\"nav-heading-text\">smart Angular Single Page Application Development</h4>\r\n                  \r\n              </div>    \r\n          </div>\r\n      </a>\r\n    </div>\r\n\r\n    <div class=\"collapse navbar-collapse\">\r\n      <ul class=\"nav navbar-nav\">\r\n        <li>\r\n            <a routerLink=\"/\" routerLinkActive=\"active\" [routerLinkActiveOptions]=\"{ exact: true }\">Demos</a>            \r\n        </li>\r\n        <li>\r\n            <a routerLink=\"/vouchers\" routerLinkActive=\"active\">Vouchers</a>\r\n        </li>\r\n        <li>\r\n            <a routerLink=\"/accounts\" routerLinkActive=\"active\">Accounts</a>\r\n        </li>\r\n        <li>\r\n          <a routerLink=\"/admin\" routerLinkActive=\"active\">Admin</a>\r\n        </li>\r\n      </ul>\r\n      <div class=\"navbar-header navbar-right\">\r\n        <!-- <ul class=\"nav navbar-nav\">\r\n          <li>\r\n            <a>Welcome $(Username)</a>\r\n          </li>\r\n        </ul> -->\r\n      </div>\r\n      <form id=\"searchForm\"  class=\"navbar-form navbar-right\"  >\r\n        <!-- <div class=\"form-group\">\r\n          <input type=\"text\" class=\"form-control\" placeholder=\"Search Vouchers\" >\r\n        </div>\r\n        <button class=\"btn btn-default\" >\r\n          Search\r\n        </button> -->\r\n      </form>\r\n    </div>\r\n\r\n</nav>"

/***/ }),

/***/ "../../../../../src/app/shared/navbar/navbar.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".nav.navbar-nav {\n  font-size: 15px; }\n\n#searchForm {\n  margin-right: 100px; }\n\n@media (max-width: 1280px) {\n  #searchForm {\n    display: none; } }\n\n.navbar-inverse .navbar-nav > li > a, .navbar-header .navbar-brand {\n  color: white; }\n\n.navbar-inverse {\n  border-color: #848080; }\n\n.navbar {\n  border-radius: 0; }\n\n.nav-heading-text {\n  line-height: 1.6;\n  margin-left: 7px; }\n\n.navbar-brand {\n  padding: 0 !important; }\n\n.active {\n  color: red !important; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/shared/navbar/navbar.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NavbarComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var NavbarComponent = (function () {
    function NavbarComponent() {
    }
    NavbarComponent.prototype.ngOnInit = function () {
    };
    NavbarComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-navbar',
            template: __webpack_require__("../../../../../src/app/shared/navbar/navbar.component.html"),
            styles: [__webpack_require__("../../../../../src/app/shared/navbar/navbar.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], NavbarComponent);
    return NavbarComponent;
}());



/***/ }),

/***/ "../../../../../src/app/shared/side-panel/side-panel.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".cmds {\r\n  display: -webkit-box;\r\n  display: -ms-flexbox;\r\n  display: flex;\r\n  -webkit-box-orient: vertical;\r\n  -webkit-box-direction: normal;\r\n      -ms-flex-direction: column;\r\n          flex-direction: column;\r\n}\r\n\r\n.cmd {\r\n  min-width: 100px;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/shared/side-panel/side-panel.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"cmds\">\n  <div *ngFor=\"let c of cmds\" class=\"item\">\n    <a class=\"table-cmd\" (click)=\"executeAction(c.evt)\" >{{c.title}}</a>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/shared/side-panel/side-panel.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SidePanelComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__index__ = __webpack_require__("../../../../../src/app/shared/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var SidePanelComponent = (function () {
    function SidePanelComponent(router, Store) {
        this.router = router;
        this.Store = Store;
    }
    SidePanelComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.Store.SideCMDs.subscribe(function (items) { return _this.cmds = items; });
    };
    SidePanelComponent.prototype.executeAction = function (action) {
        action();
    };
    SidePanelComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-side-panel',
            template: __webpack_require__("../../../../../src/app/shared/side-panel/side-panel.component.html"),
            styles: [__webpack_require__("../../../../../src/app/shared/side-panel/side-panel.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */], __WEBPACK_IMPORTED_MODULE_1__index__["a" /* DataStoreService */]])
    ], SidePanelComponent);
    return SidePanelComponent;
}());



/***/ }),

/***/ "../../../../../src/app/vouchers/voucher.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return VouchersService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var VouchersService = (function () {
    function VouchersService(httpClient) {
        this.httpClient = httpClient;
    }
    VouchersService.prototype.getVouchers = function () {
        return this.httpClient.get(__WEBPACK_IMPORTED_MODULE_2__environments_environment__["a" /* environment */].apiUrl + "api/vouchers");
    };
    VouchersService.prototype.getVoucher = function (id) {
        return this.httpClient.get(__WEBPACK_IMPORTED_MODULE_2__environments_environment__["a" /* environment */].apiUrl + "api/vouchers/getvm/" + id);
    };
    VouchersService.prototype.insertVoucher = function (voucher) {
        this.httpClient
            .post(__WEBPACK_IMPORTED_MODULE_2__environments_environment__["a" /* environment */].apiUrl + "api/vouchers", voucher)
            .subscribe(function () { return console.log("voucher with id " + voucher.ID + " inserted"); }, function (err) { return console.log(err); });
    };
    VouchersService.prototype.updateVoucher = function (voucher) {
        return this.httpClient.put(__WEBPACK_IMPORTED_MODULE_2__environments_environment__["a" /* environment */].apiUrl + "api/vouchers", voucher);
    };
    VouchersService.prototype.deleteVoucher = function (id) {
        return this.httpClient.delete(__WEBPACK_IMPORTED_MODULE_2__environments_environment__["a" /* environment */].apiUrl + "api/vouchers/" + id);
    };
    VouchersService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */]])
    ], VouchersService);
    return VouchersService;
}());



/***/ }),

/***/ "../../../../../src/app/vouchers/voucher/voucher-detail/voucher-detail.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/vouchers/voucher/voucher-detail/voucher-detail.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"cmdPanelSmall\">\r\n    <div class=\"row\">\r\n        <div class=\"col-md-8\">\r\n            <span>Selected Detail:</span>\r\n        </div>\r\n        <div class=\"col-md-4 rightCell\">\r\n            <span class=\"right\">\r\n                <a (click)=\"saveDetail()\" class=\"btn btn-xs btn-default\">Save Detail</a>\r\n            </span>\r\n        </div>\r\n    </div>\r\n</div>\r\n\r\n<div>\r\n    <div class=\"row spacedRow\">\r\n        <div class=\"col-md-1\">\r\n            <input type=\"text\" [(ngModel)]=\"detail.ID\" readonly class=\"form-control input-sm\" />\r\n        </div>\r\n\r\n        <div class=\"col-md-5\">\r\n            <input type=\"text\" [(ngModel)]=\"detail.Text\" size=\"40\" placeholder=\"Text:\" class=\"form-control input-sm\" />\r\n        </div>\r\n\r\n        <div class=\"col-md-2\">\r\n            <input type=\"number\" [(ngModel)]=\"detail.Amount\" size=\"15\" class=\"form-control input-sm vdElement\" />\r\n        </div>\r\n\r\n        <div class=\"col-md-4\">\r\n            <select [(ngModel)]=\"detail.AccountID\" class=\"form-control input-sm\">\r\n                <option *ngFor=\"let a of accounts\" [ngValue]=\"a.ID\">{{a.Name}}</option>\r\n            </select>\r\n        </div>\r\n    </div>\r\n\r\n    <div class=\"row spacedRow\">\r\n        <div class=\"col-md-12\">\r\n            <textarea [(ngModel)]=\"detail.Comment\" class=\"form-control vdElement\" rows=\"4\" placeholder=\"Comment\"></textarea>\r\n        </div>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/vouchers/voucher/voucher-detail/voucher-detail.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return VoucherDetailComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_index__ = __webpack_require__("../../../../../src/app/shared/index.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var VoucherDetailComponent = (function () {
    function VoucherDetailComponent() {
        this.detailSaved = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* EventEmitter */]();
    }
    VoucherDetailComponent.prototype.ngOnInit = function () {
    };
    VoucherDetailComponent.prototype.saveDetail = function () {
        this.detailSaved.emit(this.detail);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1__shared_index__["e" /* VoucherDetail */])
    ], VoucherDetailComponent.prototype, "detail", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", Array)
    ], VoucherDetailComponent.prototype, "accounts", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["P" /* Output */])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* EventEmitter */])
    ], VoucherDetailComponent.prototype, "detailSaved", void 0);
    VoucherDetailComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-voucher-detail',
            template: __webpack_require__("../../../../../src/app/vouchers/voucher/voucher-detail/voucher-detail.component.html"),
            styles: [__webpack_require__("../../../../../src/app/vouchers/voucher/voucher-detail/voucher-detail.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], VoucherDetailComponent);
    return VoucherDetailComponent;
}());



/***/ }),

/***/ "../../../../../src/app/vouchers/voucher/voucher-details-list/voucher-details-list.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/vouchers/voucher/voucher-details-list/voucher-details-list.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"cmdPanelSmall\">\r\n    <div class=\"row\">\r\n        <div class=\"col-md-8\">\r\n            <span>Details</span>\r\n        </div>\r\n        <div class=\"col-md-4 rightCell\">\r\n            <a (click)=\"selectDetail(null)\" class=\"btn btn-xs btn-default\">New</a>\r\n        </div>\r\n    </div>\r\n</div>\r\n\r\n<div class=\"spacer\">    \r\n    <div class=\"table-responsive\">\r\n        <table cellspacing=\"0\" cellpadding=\"0\" class=\"table table-hover\">\r\n            <colgroup>\r\n                <col style=\"width: 5%\"/>\r\n                <col style=\"width: 40%\"/>\r\n                <col style=\"width: 15%\"/>\r\n                <col style=\"width: 30%\"/>\r\n                <col style=\"width: 5%\"/>\r\n                <col style=\"width: 5%\"/>\r\n            </colgroup>\r\n            <thead>\r\n            <tr>\r\n                <th scope=\"col\">ID</th>\r\n                <th scope=\"col\">Text</th>\r\n                <th scope=\"col\">Amount</th>\r\n                <th scope=\"col\">Account</th>\r\n                <th colspan=\"2\" scope=\"col\">\r\n                    \r\n                </th>\r\n            </tr>\r\n            </thead>\r\n            <tbody id=\"tblVoucherDetailsBody\">\r\n            <tr *ngFor=\"let vd of details\">\r\n                <td class=\"readonlyID\">{{vd.ID}}</td>\r\n                <td> {{vd.Text}}</td>\r\n                <td class=\"detailsAmountItem\">{{vd.Amount}}</td>\r\n                <td> {{ vd.Account!=null? vd.Account.Name : \"\"}}</td>\r\n                <td>\r\n                    <a ng-click=\"deleteDetail(vd)\" class=\"btn btn-xs btn-default\">Delete</a>\r\n                </td>\r\n                <td>\r\n                    <a (click)=\"selectDetail(vd)\" class=\"btn btn-xs btn-default\">Edit</a>\r\n                </td>\r\n            </tr>\r\n            </tbody>\r\n        </table>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/vouchers/voucher/voucher-details-list/voucher-details-list.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return VoucherDetailsListComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var VoucherDetailsListComponent = (function () {
    function VoucherDetailsListComponent() {
        this.detailSelected = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* EventEmitter */]();
        this.detailDeleted = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* EventEmitter */]();
    }
    VoucherDetailsListComponent.prototype.ngOnInit = function () { };
    VoucherDetailsListComponent.prototype.selectDetail = function (d) {
        this.detailSelected.emit(d);
    };
    VoucherDetailsListComponent.prototype.deleteDetail = function (d) {
        this.detailDeleted.emit(d);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", Array)
    ], VoucherDetailsListComponent.prototype, "details", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["P" /* Output */])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* EventEmitter */])
    ], VoucherDetailsListComponent.prototype, "detailSelected", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["P" /* Output */])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* EventEmitter */])
    ], VoucherDetailsListComponent.prototype, "detailDeleted", void 0);
    VoucherDetailsListComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-voucher-details-list',
            template: __webpack_require__("../../../../../src/app/vouchers/voucher/voucher-details-list/voucher-details-list.component.html"),
            styles: [__webpack_require__("../../../../../src/app/vouchers/voucher/voucher-details-list/voucher-details-list.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], VoucherDetailsListComponent);
    return VoucherDetailsListComponent;
}());



/***/ }),

/***/ "../../../../../src/app/vouchers/voucher/voucher.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".bd-voucherBox-row .row+.row{\r\n    margin-top: 1rem;\r\n}\r\n.btnBoxPadding {\r\n    padding-top: 15px;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/vouchers/voucher/voucher.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"cmdPanel\">\r\n    <div class=\"row\">\r\n        <div class=\"col-md-8\">\r\n            <span>Voucher {{voucher?.ID}}</span>\r\n        </div>\r\n        <div class=\"col-md-4 rightCell\">\r\n            <a routerLink=\"/vouchers\" class=\"btn btn-xs btn-default\">Cancel / Back</a>\r\n            <a (click)=\"saveVoucher()\" class=\"btn btn-xs btn-default\">Save Voucher</a>\r\n        </div>\r\n    </div>\r\n</div>\r\n\r\n\r\n<div class=\"btnBoxPadding\">\r\n    <div class=\"row\">\r\n        <div class=\"col-md-4\">\r\n            <input id=\"VoucherText\" [ngModel]=\"voucher?.Text\" size=\"40\" type=\"text\" placeholder=\"Text:\" class=\"form-control input-sm\" />\r\n        </div>\r\n\r\n        <div class=\"col-md-2\">\r\n            <input type=\"text\" class=\"form-control input-sm\" #dp=\"bsDatepicker\" bsDatepicker  [ngModel]=\"voucher.Date\">\r\n        </div>\r\n\r\n        <div class=\"col-md-2\">\r\n            <input [ngModel]=\"voucher?.Amount\" size=\"15\" type=\"text\" placeholder=\"0\" class=\"span7 form-control input-sm\" />\r\n        </div>\r\n\r\n        <div class=\"col-md-4\">\r\n            <ul class=\"nav\">\r\n                <li class=\"col-md-4\">\r\n                    <label class=\"radio-inline\" for=\"rbExpense\">\r\n                            <input type=\"radio\" name=\"Expense\" [value]=true [(ngModel)]=\"voucher.Expense\"/>\r\n                            Expense:\r\n                        </label>\r\n                </li>\r\n                <li class=\"col-md-4\">\r\n                    <label class=\"radio-inline\" for=\"rbIncome\">\r\n                            <input type=\"radio\" name=\"Expense\" [value]=false [(ngModel)]=\"voucher.Expense\"/>\r\n                            Income:\r\n                        </label>\r\n                </li>\r\n                <li class=\"col-md-4\">\r\n                    <label class=\"checkbox-inline\" for=\"chkPaid\">\r\n                            <input [(ngModel)]=\"voucher.Paid\" type=\"checkbox\" name=\"Paid\" />\r\n                            Paid:\r\n                        </label>\r\n                </li>\r\n            </ul>\r\n        </div>\r\n    </div>\r\n\r\n    <div class=\"row\">&nbsp;</div>\r\n\r\n    <app-voucher-details-list [details]=\"voucher==undefined?null:voucher.Details\" (detailSelected)=\"selectDetail($event)\"></app-voucher-details-list>\r\n\r\n    <div *ngIf=\"currentDetail!=undefined\">\r\n        <app-voucher-detail [detail]=\"currentDetail\" [accounts]=\"accounts\" (detailSaved)=\"saveDetail($event)\"></app-voucher-detail>\r\n    </div>\r\n\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/vouchers/voucher/voucher.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return VoucherComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__voucher_service__ = __webpack_require__("../../../../../src/app/vouchers/voucher.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_index__ = __webpack_require__("../../../../../src/app/shared/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var VoucherComponent = (function () {
    function VoucherComponent(vs, route, router, Store, fb) {
        this.vs = vs;
        this.route = route;
        this.router = router;
        this.Store = Store;
        this.fb = fb;
        this.voucher = {
            ID: 0,
            Text: "",
            Date: new Date().toString(),
            Amount: 0,
            Paid: false,
            Expense: false,
            Remark: false
        };
    }
    VoucherComponent.prototype.ngOnInit = function () {
        this.loadData();
        this.setCMDs();
    };
    VoucherComponent.prototype.loadData = function () {
        var _this = this;
        var id = this.route.snapshot.params["id"];
        if (id != 0) {
            this.vs.getVoucher(id).subscribe(function (data) {
                _this.voucher = data.CurrentVoucher;
                _this.accounts = data.Accounts;
                if (_this.voucher.Details != null) {
                    _this.currentDetail = _this.voucher.Details[0];
                }
            });
        }
    };
    VoucherComponent.prototype.setCMDs = function () {
        this.Store.setSideCMDs([
            { title: "Save Voucher", evt: this.saveVoucher },
            { title: "New Detail", evt: this.saveVoucher },
            { title: "Save Detail", evt: this.saveVoucher },
            { title: "Show Vouchers", evt: this.showVouchers }
        ]);
    };
    VoucherComponent.prototype.showVouchers = function () {
    };
    VoucherComponent.prototype.saveVoucher = function () {
        if (this.voucher.ID == 0) {
            this.vs.insertVoucher(this.voucher);
        }
        else {
            this.vs.updateVoucher(this.voucher);
        }
        this.router.navigate(["/vouchers/"]);
    };
    VoucherComponent.prototype.selectDetail = function (detail) {
        this.currentDetail = detail;
    };
    VoucherComponent.prototype.saveDetail = function (detail) {
        if (detail.ID != 0) {
            detail.Account = this.accounts.find(function (a) { return a.ID == detail.AccountID; });
        }
        else {
            if (this.voucher.Details == null) {
                this.voucher.Details = new Array();
            }
            this.voucher.Details.push(detail);
        }
    };
    VoucherComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["n" /* Component */])({
            selector: "app-voucher",
            template: __webpack_require__("../../../../../src/app/vouchers/voucher/voucher.component.html"),
            styles: [__webpack_require__("../../../../../src/app/vouchers/voucher/voucher.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__voucher_service__["a" /* VouchersService */],
            __WEBPACK_IMPORTED_MODULE_0__angular_router__["a" /* ActivatedRoute */],
            __WEBPACK_IMPORTED_MODULE_0__angular_router__["b" /* Router */],
            __WEBPACK_IMPORTED_MODULE_3__shared_index__["a" /* DataStoreService */],
            __WEBPACK_IMPORTED_MODULE_4__angular_forms__["a" /* FormBuilder */]])
    ], VoucherComponent);
    return VoucherComponent;
}());



/***/ }),

/***/ "../../../../../src/app/vouchers/vouchers-list.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "tr{\r\n    cursor: pointer;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/vouchers/vouchers-list.component.html":
/***/ (function(module, exports) {

module.exports = "<div>\r\n  <table class=\"table table-striped\">\r\n    <colgroup>\r\n      <col style=\"width: 5%\">\r\n      <col style=\"width: 10%\">\r\n      <col style=\"width: 60%\">\r\n      <col style=\"width: 10%\">\r\n      <col style=\"width: 7.5%\">\r\n      <col style=\"width: 7.5%\">\r\n    </colgroup>\r\n    <thead>\r\n      <tr>\r\n        <th>ID</th>\r\n        <th>Date</th>\r\n        <th>Text</th>\r\n        <th>Amount</th>\r\n        <th></th>\r\n        <th></th>\r\n      </tr>\r\n    </thead>\r\n    <tbody>\r\n      <tr *ngFor=\"let v of vouchers\" (click)=\"showVoucher(v.ID)\">\r\n        <td>{{v.ID}}</td>\r\n        <td>{{v.Date | date:'shortDate'}}</td>\r\n        <td>{{v.Text}}</td>\r\n        <td>{{v.Amount | currency:'EUR':true}} </td>\r\n        <td>\r\n          <a class=\"table-cmd\" (click)=\"deleteVoucher(v)\">Delete</a>\r\n        </td>\r\n        <td>\r\n          <a class=\"table-cmd\" [routerLink]=\"[ '/vouchers', v.ID ]\">Edit</a>\r\n        </td>\r\n      </tr>\r\n    </tbody>\r\n  </table>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/vouchers/vouchers-list.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return VouchersListComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__voucher_service__ = __webpack_require__("../../../../../src/app/vouchers/voucher.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_index__ = __webpack_require__("../../../../../src/app/shared/index.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var VouchersListComponent = (function () {
    function VouchersListComponent(router, vs, Store) {
        this.router = router;
        this.vs = vs;
        this.Store = Store;
    }
    VouchersListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.vs.getVouchers().subscribe(function (data) { return _this.vouchers = data; });
        this.Store.setSideCMDs([{ title: "Add Voucher", evt: this.addVoucher }]);
    };
    VouchersListComponent.prototype.showVoucher = function (id) {
        this.router.navigate(['/vouchers/' + id]);
    };
    VouchersListComponent.prototype.deleteVoucher = function (v) {
        var _this = this;
        this.vs.deleteVoucher(v.ID).subscribe(function (data) { return _this.router.navigate(['/vouchers/']); });
    };
    VouchersListComponent.prototype.addVoucher = function () {
        console.log("adding a voucher");
        this.router.navigate(['/vouchers/' + 0]);
    };
    VouchersListComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["n" /* Component */])({
            selector: 'app-vouchers-list',
            template: __webpack_require__("../../../../../src/app/vouchers/vouchers-list.component.html"),
            styles: [__webpack_require__("../../../../../src/app/vouchers/vouchers-list.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */], __WEBPACK_IMPORTED_MODULE_0__voucher_service__["a" /* VouchersService */], __WEBPACK_IMPORTED_MODULE_3__shared_index__["a" /* DataStoreService */]])
    ], VouchersListComponent);
    return VouchersListComponent;
}());



/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false,
    authEnabled: false,
    apiUrl: "http://localhost:5000/"
};


/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_16" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map