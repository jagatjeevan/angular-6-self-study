(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var routes = [];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-header title={{title}}></app-header>\n<div class=\"app-content\">\n  <app-navbar (changed)=\"deteRow($event)\"></app-navbar>\n  <app-customer-listing [customers]=\"people\"></app-customer-listing>\n</div>\n\n<router-outlet></router-outlet>\n"

/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".app-content {\n  grid-column: 1 / -1;\n  padding: 15px;\n  overflow: auto; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3RyYXZpcy9idWlsZC9qYWdhdGplZXZhbi9hbmd1bGFyLTYtc2VsZi1zdHVkeS9zcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLG9CQUFtQjtFQUNuQixjQUFhO0VBQ2IsZUFBYyxFQUNmIiwiZmlsZSI6InNyYy9hcHAvYXBwLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmFwcC1jb250ZW50IHtcbiAgZ3JpZC1jb2x1bW46IDEgLyAtMTtcbiAgcGFkZGluZzogMTVweDtcbiAgb3ZlcmZsb3c6IGF1dG87XG59XG4iXX0= */"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _core_customer_data_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./core/customer-data.service */ "./src/app/core/customer-data.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AppComponent = /** @class */ (function () {
    function AppComponent(_custDataService) {
        this._custDataService = _custDataService;
        this.title = 'angular-self-study';
        this.people = [];
    }
    AppComponent.prototype.changePeople = function () {
        this.people = this._custDataService.getData();
    };
    AppComponent.prototype.deteRow = function (data) {
        this._custDataService.deleteData(data);
        this.changePeople();
    };
    AppComponent.prototype.ngOnInit = function () {
        this.changePeople();
    };
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")]
        }),
        __metadata("design:paramtypes", [_core_customer_data_service__WEBPACK_IMPORTED_MODULE_1__["CustomerDataService"]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _customers_customers_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./customers/customers.module */ "./src/app/customers/customers.module.ts");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _core_core_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./core/core.module */ "./src/app/core/core.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./header/header.component */ "./src/app/header/header.component.ts");
/* harmony import */ var _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./navbar/navbar.component */ "./src/app/navbar/navbar.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};









var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"],
                _header_header_component__WEBPACK_IMPORTED_MODULE_7__["HeaderComponent"],
                _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_8__["NavbarComponent"],
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"],
                _customers_customers_module__WEBPACK_IMPORTED_MODULE_3__["CustomersModule"],
                _core_core_module__WEBPACK_IMPORTED_MODULE_5__["CoreModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/core/core.module.ts":
/*!*************************************!*\
  !*** ./src/app/core/core.module.ts ***!
  \*************************************/
/*! exports provided: CoreModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CoreModule", function() { return CoreModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _customer_data_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./customer-data.service */ "./src/app/core/customer-data.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var CoreModule = /** @class */ (function () {
    function CoreModule() {
    }
    CoreModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: [],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]
            ],
            providers: [_customer_data_service__WEBPACK_IMPORTED_MODULE_2__["CustomerDataService"]]
        })
    ], CoreModule);
    return CoreModule;
}());



/***/ }),

/***/ "./src/app/core/customer-data.service.ts":
/*!***********************************************!*\
  !*** ./src/app/core/customer-data.service.ts ***!
  \***********************************************/
/*! exports provided: CustomerDataService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomerDataService", function() { return CustomerDataService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var CustomerDataService = /** @class */ (function () {
    function CustomerDataService() {
        this._recordList = [
            { id: 1, name: 'john doe', city: 'Phoenix', orderTotal: 9.99, customerSince: new Date(2014, 7, 10) },
            { id: 2, name: 'Jane doe', city: 'Chandler', orderTotal: 19.99, customerSince: new Date(2017, 2, 22) },
            { id: 3, name: 'Michelle thomas', city: 'Seattle', orderTotal: 99.99, customerSince: new Date(2002, 10, 31) },
            { id: 4, name: 'Jim thomas', city: 'New York', orderTotal: 599.99, customerSince: new Date(2002, 10, 31) },
            { id: 11, name: 'jeevan', city: 'Cuttack', orderTotal: 1279.99, customerSince: new Date(2018, 7, 10) },
            { id: 12, name: 'john doe', city: 'Phoenix', orderTotal: 9.99, customerSince: new Date(2014, 7, 10) },
            { id: 32, name: 'Jane doe', city: 'Chandler', orderTotal: 19.99, customerSince: new Date(2017, 2, 22) },
            { id: 34, name: 'Michelle thomas', city: 'Seattle', orderTotal: 99.99, customerSince: new Date(2002, 10, 31) },
            { id: 41, name: 'Jim Thomas', city: 'New York', orderTotal: 599.99, customerSince: new Date(2002, 10, 31) },
            { id: 121, name: 'jeevan', city: 'Cuttack', orderTotal: 1279.99, customerSince: new Date(2018, 7, 10) },
            { id: 1212, name: 'john doe', city: 'Phoenix', orderTotal: 9.99, customerSince: new Date(2014, 7, 10) },
            { id: 24, name: 'Jane doe', city: 'Chandler', orderTotal: 19.99, customerSince: new Date(2017, 2, 22) },
            { id: 43, name: 'Michelle thomas', city: 'Seattle', orderTotal: 99.99, customerSince: new Date(2002, 10, 31) },
            { id: 54, name: 'Jim Thomas', city: 'New York', orderTotal: 599.99, customerSince: new Date(2002, 10, 31) },
            { id: 1210, name: 'jagat jeevan', city: 'Cuttack', orderTotal: 1279.99, customerSince: new Date(2018, 7, 10) },
        ];
        this.records = this._recordList;
    }
    CustomerDataService.prototype.getData = function () {
        return this.records;
    };
    CustomerDataService.prototype.deleteData = function (id) {
        this.records = this.records.filter(function (item) { return item.id != id; });
    };
    CustomerDataService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [])
    ], CustomerDataService);
    return CustomerDataService;
}());



/***/ }),

/***/ "./src/app/customers/customer-listing/customer-listing.component.html":
/*!****************************************************************************!*\
  !*** ./src/app/customers/customer-listing/customer-listing.component.html ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-filter-customers (changed)=\"inputChanged($event)\"></app-filter-customers>\n\n<div class=\"customer-display header\">\n  <div>ID</div>\n  <div (click)=\"sort('name')\">Name</div>\n  <div (click)=\"sort('city')\">City</div>\n  <div (click)=\"sort('orderTotal')\">Order total</div>\n  <div>Customer since</div>\n</div>\n<div *ngFor=\"let customer of filteredCustomers\" class=\"customer-display\">\n  <div>{{ customer.id }}</div>\n  <div>{{ customer.name | capitaliseAll }}</div>\n  <div>{{ customer.city }}</div>\n  <div>{{ customer.orderTotal | currency:currencyCode:'symbol' }}</div>\n  <div>{{ customer.customerSince | date }}</div>\n</div>\n<div *ngIf=\"!filteredCustomers.length\"  class=\"align-center\">\n  No customers found.\n</div>\n<div class=\"customer-display footer\" *ngIf=\"filteredCustomers.length\">\n  <div></div>\n  <div>No. of customers : <strong>{{filteredCustomers.length}}</strong></div>\n  <div class=\"align-right\">Total Order : </div>\n  <div><strong>{{ totalOrder | currency:currencyCode:'code' }}</strong></div>\n  <div></div>\n</div>\n"

/***/ }),

/***/ "./src/app/customers/customer-listing/customer-listing.component.scss":
/*!****************************************************************************!*\
  !*** ./src/app/customers/customer-listing/customer-listing.component.scss ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".customer-display {\n  display: grid;\n  grid-template-columns: 50px repeat(4, 1fr);\n  grid-gap: 10px;\n  padding: 5px 2px; }\n  .customer-display:nth-child(2n+1) {\n    background: var(--grey100); }\n  .header {\n  font-weight: var(--bold-font-weight);\n  border-bottom: 1px solid var(--grey200);\n  margin-bottom: 1px; }\n  .align-right {\n  text-align: right; }\n  .align-center {\n  text-align: center; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3RyYXZpcy9idWlsZC9qYWdhdGplZXZhbi9hbmd1bGFyLTYtc2VsZi1zdHVkeS9zcmMvYXBwL2N1c3RvbWVycy9jdXN0b21lci1saXN0aW5nL2N1c3RvbWVyLWxpc3RpbmcuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxjQUFhO0VBQ2IsMkNBQTBDO0VBQzFDLGVBQWM7RUFDZCxpQkFBZ0IsRUFJakI7RUFSRDtJQU1JLDJCQUEwQixFQUMzQjtFQUdIO0VBQ0UscUNBQW9DO0VBQ3BDLHdDQUF1QztFQUN2QyxtQkFBa0IsRUFDbkI7RUFFRDtFQUNFLGtCQUFpQixFQUNsQjtFQUVEO0VBQ0UsbUJBQWtCLEVBQ25CIiwiZmlsZSI6InNyYy9hcHAvY3VzdG9tZXJzL2N1c3RvbWVyLWxpc3RpbmcvY3VzdG9tZXItbGlzdGluZy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jdXN0b21lci1kaXNwbGF5IHtcbiAgZGlzcGxheTogZ3JpZDtcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiA1MHB4IHJlcGVhdCg0LCAxZnIpO1xuICBncmlkLWdhcDogMTBweDtcbiAgcGFkZGluZzogNXB4IDJweDtcbiAgJjpudGgtY2hpbGQoMm4rMSkge1xuICAgIGJhY2tncm91bmQ6IHZhcigtLWdyZXkxMDApO1xuICB9XG59XG5cbi5oZWFkZXIge1xuICBmb250LXdlaWdodDogdmFyKC0tYm9sZC1mb250LXdlaWdodCk7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCB2YXIoLS1ncmV5MjAwKTtcbiAgbWFyZ2luLWJvdHRvbTogMXB4O1xufVxuXG4uYWxpZ24tcmlnaHQge1xuICB0ZXh0LWFsaWduOiByaWdodDtcbn1cblxuLmFsaWduLWNlbnRlciB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbiJdfQ== */"

/***/ }),

/***/ "./src/app/customers/customer-listing/customer-listing.component.ts":
/*!**************************************************************************!*\
  !*** ./src/app/customers/customer-listing/customer-listing.component.ts ***!
  \**************************************************************************/
/*! exports provided: CustomerListingComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomerListingComponent", function() { return CustomerListingComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var CustomerListingComponent = /** @class */ (function () {
    function CustomerListingComponent() {
        this.input = '';
        this.totalOrder = 0;
        this.currencyCode = '£';
    }
    CustomerListingComponent.prototype.calculateTotalOrder = function () {
        if (this.filteredCustomers && this.filteredCustomers.length) {
            this.totalOrder = this.filteredCustomers
                .map(function (person) { return person.orderTotal; })
                .reduce(function (acc, currItem) { return acc + currItem; });
        }
        else {
            this.totalOrder = 0;
        }
    };
    CustomerListingComponent.prototype.filterCustomer = function (people) {
        var _this = this;
        if (this.input === '') {
            return people;
        }
        else {
            return people.filter(function (person) {
                var filterInput = _this.input.toLowerCase();
                return person.name.toLowerCase().includes(filterInput) ||
                    person.city.toLowerCase().includes(filterInput) ||
                    person.orderTotal.toString().toLowerCase().includes(filterInput);
            });
        }
    };
    CustomerListingComponent.prototype.ngOnChanges = function (changes) {
        console.log("changes should reflect here", changes);
        this.filteredCustomers = changes.customers.currentValue;
    };
    CustomerListingComponent.prototype.compare = function (a, b, prop) {
        if (a[prop] < b[prop])
            return -1;
        if (a[prop] > b[prop])
            return 1;
        return 0;
    };
    CustomerListingComponent.prototype.sort = function (prop) {
        var _this = this;
        this.filteredCustomers = this.filteredCustomers.sort(function (a, b) { return _this.compare(a, b, prop); });
    };
    CustomerListingComponent.prototype.inputChanged = function (data) {
        this.input = data;
        this.filteredCustomers = this.filterCustomer(this.customers);
        this.calculateTotalOrder();
    };
    CustomerListingComponent.prototype.ngOnInit = function () {
        this.filteredCustomers = this.customers;
        this.calculateTotalOrder();
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Array)
    ], CustomerListingComponent.prototype, "customers", void 0);
    CustomerListingComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-customer-listing',
            template: __webpack_require__(/*! ./customer-listing.component.html */ "./src/app/customers/customer-listing/customer-listing.component.html"),
            styles: [__webpack_require__(/*! ./customer-listing.component.scss */ "./src/app/customers/customer-listing/customer-listing.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], CustomerListingComponent);
    return CustomerListingComponent;
}());



/***/ }),

/***/ "./src/app/customers/customers.module.ts":
/*!***********************************************!*\
  !*** ./src/app/customers/customers.module.ts ***!
  \***********************************************/
/*! exports provided: CustomersModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomersModule", function() { return CustomersModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _customer_listing_customer_listing_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./customer-listing/customer-listing.component */ "./src/app/customers/customer-listing/customer-listing.component.ts");
/* harmony import */ var _filter_customers_filter_customers_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./filter-customers/filter-customers.component */ "./src/app/customers/filter-customers/filter-customers.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var CustomersModule = /** @class */ (function () {
    function CustomersModule() {
    }
    CustomersModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: [_customer_listing_customer_listing_component__WEBPACK_IMPORTED_MODULE_4__["CustomerListingComponent"], _filter_customers_filter_customers_component__WEBPACK_IMPORTED_MODULE_5__["FilterCustomersComponent"]],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _shared_shared_module__WEBPACK_IMPORTED_MODULE_3__["SharedModule"],
            ],
            exports: [_customer_listing_customer_listing_component__WEBPACK_IMPORTED_MODULE_4__["CustomerListingComponent"]]
        })
    ], CustomersModule);
    return CustomersModule;
}());



/***/ }),

/***/ "./src/app/customers/filter-customers/filter-customers.component.html":
/*!****************************************************************************!*\
  !*** ./src/app/customers/filter-customers/filter-customers.component.html ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<label for=\"filter\">\n  <span>Filter by:</span>\n  <input type=\"text\" [(ngModel)]=\"input\" id=\"filter\" placeholder={{placeholder}} />\n</label>\n"

/***/ }),

/***/ "./src/app/customers/filter-customers/filter-customers.component.scss":
/*!****************************************************************************!*\
  !*** ./src/app/customers/filter-customers/filter-customers.component.scss ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "label {\n  position: relative;\n  display: flex;\n  margin: 20px 0; }\n  label input {\n    flex: 1;\n    margin-left: 10px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3RyYXZpcy9idWlsZC9qYWdhdGplZXZhbi9hbmd1bGFyLTYtc2VsZi1zdHVkeS9zcmMvYXBwL2N1c3RvbWVycy9maWx0ZXItY3VzdG9tZXJzL2ZpbHRlci1jdXN0b21lcnMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxtQkFBa0I7RUFDbEIsY0FBYTtFQUNiLGVBQWMsRUFLZjtFQVJEO0lBS0ksUUFBTztJQUNQLGtCQUFpQixFQUNsQiIsImZpbGUiOiJzcmMvYXBwL2N1c3RvbWVycy9maWx0ZXItY3VzdG9tZXJzL2ZpbHRlci1jdXN0b21lcnMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJsYWJlbCB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgZGlzcGxheTogZmxleDtcbiAgbWFyZ2luOiAyMHB4IDA7XG4gIGlucHV0IHtcbiAgICBmbGV4OiAxO1xuICAgIG1hcmdpbi1sZWZ0OiAxMHB4O1xuICB9XG59XG4iXX0= */"

/***/ }),

/***/ "./src/app/customers/filter-customers/filter-customers.component.ts":
/*!**************************************************************************!*\
  !*** ./src/app/customers/filter-customers/filter-customers.component.ts ***!
  \**************************************************************************/
/*! exports provided: FilterCustomersComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FilterCustomersComponent", function() { return FilterCustomersComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var FilterCustomersComponent = /** @class */ (function () {
    function FilterCustomersComponent() {
        this.placeholder = 'Name / City / Order total';
        this.changed = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    Object.defineProperty(FilterCustomersComponent.prototype, "input", {
        get: function () {
            return this._filter;
        },
        set: function (val) {
            this._filter = val;
            this.changed.emit(this.input); // Raise the changed event
        },
        enumerable: true,
        configurable: true
    });
    FilterCustomersComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String),
        __metadata("design:paramtypes", [String])
    ], FilterCustomersComponent.prototype, "input", null);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])
    ], FilterCustomersComponent.prototype, "changed", void 0);
    FilterCustomersComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-filter-customers',
            template: __webpack_require__(/*! ./filter-customers.component.html */ "./src/app/customers/filter-customers/filter-customers.component.html"),
            styles: [__webpack_require__(/*! ./filter-customers.component.scss */ "./src/app/customers/filter-customers/filter-customers.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], FilterCustomersComponent);
    return FilterCustomersComponent;
}());



/***/ }),

/***/ "./src/app/header/header.component.html":
/*!**********************************************!*\
  !*** ./src/app/header/header.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<header>{{ title }}</header>\n"

/***/ }),

/***/ "./src/app/header/header.component.scss":
/*!**********************************************!*\
  !*** ./src/app/header/header.component.scss ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "header {\n  align-items: center;\n  display: flex;\n  font-weight: var(--bold-font-weight);\n  font-size: 1.8em;\n  height: 100%;\n  justify-content: center;\n  text-transform: capitalize;\n  text-shadow: #c39962 1px 1px 2px;\n  box-shadow: #d6d6d6 0 0 5px 5px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3RyYXZpcy9idWlsZC9qYWdhdGplZXZhbi9hbmd1bGFyLTYtc2VsZi1zdHVkeS9zcmMvYXBwL2hlYWRlci9oZWFkZXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxvQkFBbUI7RUFDbkIsY0FBYTtFQUVYLHFDQUErQjtFQUMvQixpQkFBVztFQUViLGFBQVk7RUFDWix3QkFBdUI7RUFDdkIsMkJBQTBCO0VBQzFCLGlDQUFnQztFQUNoQyxnQ0FBK0IsRUFDaEMiLCJmaWxlIjoic3JjL2FwcC9oZWFkZXIvaGVhZGVyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaGVhZGVyIHtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZGlzcGxheTogZmxleDtcbiAgZm9udDoge1xuICAgIHdlaWdodDogdmFyKC0tYm9sZC1mb250LXdlaWdodCk7XG4gICAgc2l6ZTogMS44ZW07XG4gIH1cbiAgaGVpZ2h0OiAxMDAlO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XG4gIHRleHQtc2hhZG93OiAjYzM5OTYyIDFweCAxcHggMnB4O1xuICBib3gtc2hhZG93OiAjZDZkNmQ2IDAgMCA1cHggNXB4O1xufVxuIl19 */"

/***/ }),

/***/ "./src/app/header/header.component.ts":
/*!********************************************!*\
  !*** ./src/app/header/header.component.ts ***!
  \********************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HeaderComponent = /** @class */ (function () {
    function HeaderComponent() {
    }
    HeaderComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], HeaderComponent.prototype, "title", void 0);
    HeaderComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-header',
            template: __webpack_require__(/*! ./header.component.html */ "./src/app/header/header.component.html"),
            styles: [__webpack_require__(/*! ./header.component.scss */ "./src/app/header/header.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], HeaderComponent);
    return HeaderComponent;
}());



/***/ }),

/***/ "./src/app/navbar/navbar.component.html":
/*!**********************************************!*\
  !*** ./src/app/navbar/navbar.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<label for=\"filter\">\n  <span>Enter the ID of the record to delete:</span>\n  <input type=\"text\" [(ngModel)]=\"input\" id=\"filter\" />\n  <button (click)=\"delteRow()\">Delete Row</button>\n</label>\n"

/***/ }),

/***/ "./src/app/navbar/navbar.component.scss":
/*!**********************************************!*\
  !*** ./src/app/navbar/navbar.component.scss ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "label {\n  position: relative;\n  display: flex;\n  margin: 20px 0; }\n  label input {\n    flex: 1;\n    margin-left: 10px; }\n  input {\n  margin: 0 20px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3RyYXZpcy9idWlsZC9qYWdhdGplZXZhbi9hbmd1bGFyLTYtc2VsZi1zdHVkeS9zcmMvYXBwL2N1c3RvbWVycy9maWx0ZXItY3VzdG9tZXJzL2ZpbHRlci1jdXN0b21lcnMuY29tcG9uZW50LnNjc3MiLCIvaG9tZS90cmF2aXMvYnVpbGQvamFnYXRqZWV2YW4vYW5ndWxhci02LXNlbGYtc3R1ZHkvc3JjL2FwcC9uYXZiYXIvbmF2YmFyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsbUJBQWtCO0VBQ2xCLGNBQWE7RUFDYixlQUFjLEVBS2Y7RUFSRDtJQUtJLFFBQU87SUFDUCxrQkFBaUIsRUFDbEI7RUNMSDtFQUNFLGVBQWMsRUFDZiIsImZpbGUiOiJzcmMvYXBwL25hdmJhci9uYXZiYXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJsYWJlbCB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgZGlzcGxheTogZmxleDtcbiAgbWFyZ2luOiAyMHB4IDA7XG4gIGlucHV0IHtcbiAgICBmbGV4OiAxO1xuICAgIG1hcmdpbi1sZWZ0OiAxMHB4O1xuICB9XG59XG4iLCJAaW1wb3J0ICcuLi9jdXN0b21lcnMvZmlsdGVyLWN1c3RvbWVycy9maWx0ZXItY3VzdG9tZXJzLmNvbXBvbmVudCc7XG5cbmlucHV0IHtcbiAgbWFyZ2luOiAwIDIwcHg7XG59XG4iXX0= */"

/***/ }),

/***/ "./src/app/navbar/navbar.component.ts":
/*!********************************************!*\
  !*** ./src/app/navbar/navbar.component.ts ***!
  \********************************************/
/*! exports provided: NavbarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavbarComponent", function() { return NavbarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var NavbarComponent = /** @class */ (function () {
    function NavbarComponent() {
        this.placeholder = 'Delete the record';
        this.changed = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    Object.defineProperty(NavbarComponent.prototype, "input", {
        get: function () {
            return this._deletedItem;
        },
        set: function (val) {
            this._deletedItem = val;
        },
        enumerable: true,
        configurable: true
    });
    NavbarComponent.prototype.delteRow = function () {
        this.changed.emit(this.input);
        this._deletedItem = null;
    };
    NavbarComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Number),
        __metadata("design:paramtypes", [Number])
    ], NavbarComponent.prototype, "input", null);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])
    ], NavbarComponent.prototype, "changed", void 0);
    NavbarComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-navbar',
            template: __webpack_require__(/*! ./navbar.component.html */ "./src/app/navbar/navbar.component.html"),
            styles: [__webpack_require__(/*! ./navbar.component.scss */ "./src/app/navbar/navbar.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], NavbarComponent);
    return NavbarComponent;
}());



/***/ }),

/***/ "./src/app/shared/capitalise-all.pipe.ts":
/*!***********************************************!*\
  !*** ./src/app/shared/capitalise-all.pipe.ts ***!
  \***********************************************/
/*! exports provided: CapitaliseAllPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CapitaliseAllPipe", function() { return CapitaliseAllPipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var CapitaliseAllPipe = /** @class */ (function () {
    function CapitaliseAllPipe() {
    }
    CapitaliseAllPipe.prototype.transform = function (value, args) {
        if (value) {
            return value.split(' ')
                .map(function (word) { return word.charAt(0).toUpperCase() + word.slice(1); })
                .join(' ');
        }
        return null;
    };
    CapitaliseAllPipe = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"])({
            name: 'capitaliseAll'
        })
    ], CapitaliseAllPipe);
    return CapitaliseAllPipe;
}());



/***/ }),

/***/ "./src/app/shared/capitalise.pipe.ts":
/*!*******************************************!*\
  !*** ./src/app/shared/capitalise.pipe.ts ***!
  \*******************************************/
/*! exports provided: CapitalisePipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CapitalisePipe", function() { return CapitalisePipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var CapitalisePipe = /** @class */ (function () {
    function CapitalisePipe() {
    }
    CapitalisePipe.prototype.transform = function (value, args) {
        if (value) {
            return value.charAt(0).toUpperCase() + value.slice(1);
        }
        return value;
    };
    CapitalisePipe = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"])({
            name: 'capitalise'
        })
    ], CapitalisePipe);
    return CapitalisePipe;
}());



/***/ }),

/***/ "./src/app/shared/shared.module.ts":
/*!*****************************************!*\
  !*** ./src/app/shared/shared.module.ts ***!
  \*****************************************/
/*! exports provided: SharedModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SharedModule", function() { return SharedModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _capitalise_pipe__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./capitalise.pipe */ "./src/app/shared/capitalise.pipe.ts");
/* harmony import */ var _capitalise_all_pipe__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./capitalise-all.pipe */ "./src/app/shared/capitalise-all.pipe.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var SharedModule = /** @class */ (function () {
    function SharedModule() {
    }
    SharedModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: [
                _capitalise_pipe__WEBPACK_IMPORTED_MODULE_1__["CapitalisePipe"],
                _capitalise_all_pipe__WEBPACK_IMPORTED_MODULE_2__["CapitaliseAllPipe"],
            ],
            exports: [
                _capitalise_pipe__WEBPACK_IMPORTED_MODULE_1__["CapitalisePipe"],
                _capitalise_all_pipe__WEBPACK_IMPORTED_MODULE_2__["CapitaliseAllPipe"],
            ],
        })
    ], SharedModule);
    return SharedModule;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/travis/build/jagatjeevan/angular-6-self-study/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map