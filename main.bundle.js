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

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "section { margin-top: 30px; }\r\n\r\n#totalsTable {\r\n\tmargin-top: 25px;\r\n\twidth: 30%;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<section class=\"container\">\n\t<form [formGroup]=\"form\" (submit)=\"addItem()\" novalidate>\n\t\t<article class=\"table-responsive\">\n\t\t\t<table class=\"table table-sm\">\n\t\t\t\t<thead>\n\t\t\t\t\t<tr>\n\t\t\t\t\t\t<th scope=\"col\">Item</th>\n\t\t\t\t\t\t<th scope=\"col\">Quantity</th>\n\t\t\t\t\t\t<th scope=\"col\" class=\"text-right\">Price</th>\n\t\t\t\t\t\t<th scope=\"col\" class=\"text-right\">Total</th>\n\t\t\t\t\t\t<th></th>\n\t\t\t\t\t</tr>\n\t\t\t\t</thead>\n\t\t\t\t<tbody>\n\t\t\t\t\t<!-- Saved items... -->\n\t\t\t\t\t<tr *ngFor=\"let item of items; let idx = index\">\n\t\t\t\t\t\t<th>{{ item.name }}</th>\n\t\t\t\t\t\t<td>{{ item.quantity }}</td>\n\t\t\t\t\t\t<td class=\"text-right\">{{ item.price | currency:'MXN':'symbol-narrow' }}</td>\n\t\t\t\t\t\t<td class=\"text-right\">{{ item.quantity * item.price | currency:'MXN':'symbol-narrow' }}</td>\n\t\t\t\t\t\t<td>\n\t\t\t\t\t\t\t<button type=\"button\" class=\"close text-danger\" aria-label=\"Close\" (click)=\"removeItem(idx)\">\n\t\t\t\t\t\t\t\t<span aria-hidden=\"true\">&times;</span>\n\t\t\t\t\t\t\t</button>\n\t\t\t\t\t\t</td>\n\t\t\t\t\t</tr>\n\t\t\t\t\t\n\t\t\t\t\t<!-- New item... -->\n\t\t\t\t\t<tr>\n\t\t\t\t\t\t<td>\n\t\t\t\t\t\t\t<input type=\"text\" class=\"form-control\" placeholder=\"New Item\" formControlName=\"name\">\n\t\t\t\t\t\t</td>\n\t\t\t\t\t\t<td>\n\t\t\t\t\t\t\t<input type=\"text\" class=\"form-control\" formControlName=\"quantity\">\n\t\t\t\t\t\t</td>\n\t\t\t\t\t\t<td>\n\t\t\t\t\t\t\t<input type=\"text\" class=\"form-control\" formControlName=\"price\">\n\t\t\t\t\t\t</td>\n\t\t\t\t\t\t<td class=\"text-right\">\n\t\t\t\t\t\t\t{{ this.form.get('quantity').valid && this.form.get('price').valid ? (form.get('quantity').value * form.get('price').value | currency:'MXN':'symbol-narrow') : 0 | currency:'MXN':'symbol-narrow' }}\n\t\t\t\t\t\t</td>\n\t\t\t\t\t\t<td>\n\t\t\t\t\t\t\t<button type=\"button\" class=\"close text-primary\" aria-label=\"Close\" (click)=\"addItem()\">\n\t\t\t\t\t\t\t\t<span aria-hidden=\"true\">+</span>\n\t\t\t\t\t\t\t</button>\n\t\t\t\t\t\t</td>\n\t\t\t\t\t</tr>\n\t\t\t\t</tbody>\n\t\t\t</table>\n\t\t</article>\n\t</form>\n\n\t<!-- Subtotal, Tax & Total box -->\n\t<article id=\"totalsTable\" class=\"float-right\">\n\t\t<table class=\"table table-sm\">\n\t\t\t<tr>\n\t\t\t\t<th class=\"text-left\">Subtotal</th>\n\t\t\t\t<td class=\"text-right\">{{ getSubtotal() | currency:'MXN':'symbol-narrow' }}</td>\n\t\t\t</tr>\n\t\t\t<tr>\n\t\t\t\t<th class=\"text-left\">Tax (5%)</th>\n\t\t\t\t<td class=\"text-right\">{{ getTaxes() | currency:'MXN':'symbol-narrow' }}</td>\n\t\t\t</tr>\n\t\t\t<tr>\n\t\t\t\t<th class=\"text-left\">Total</th>\n\t\t\t\t<td class=\"text-right\">{{ getTotal() | currency:'MXN':'symbol-narrow' }}</td>\n\t\t\t</tr>\n\t\t</table>\n\t</article>\n</section>"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
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


var TAX_PERCENTAGE = 0.05;
var AppComponent = /** @class */ (function () {
    function AppComponent(_fb) {
        this._fb = _fb;
        this.items = [];
        this.items.push({
            name: 'Widget',
            quantity: 2,
            price: 5
        }, {
            name: 'Cog',
            quantity: 2,
            price: 15.994
        });
        this.bindForm();
    }
    AppComponent.prototype.bindForm = function () {
        this.form = this._fb.group({
            'name': ['', [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* Validators */].pattern('([A-Z|a-z|Á-Ú|á-ú|.|-]+[ ]?)*')]],
            'quantity': [0, [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* Validators */].min(1), __WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* Validators */].pattern('[0-9]+')]],
            'price': [0, [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* Validators */].pattern('[0-9]+([.]{1}[0-9]+){0,1}')]]
        });
    };
    AppComponent.prototype.removeItem = function (index) {
        this.items.splice(index, 1);
    };
    AppComponent.prototype.addItem = function () {
        if (this.form.valid) {
            var item = this.form.value;
            this.form.reset();
            this.items.push(item);
        }
        else {
            alert('This item cannot be added. Please make sure all the information is correct.');
        }
    };
    AppComponent.prototype.getSubtotal = function () {
        var subtotal = 0;
        this.items.forEach(function (item) { return subtotal += item.price * item.quantity; });
        if (this.form.get('quantity').valid && this.form.get('price').valid) {
            subtotal += this.form.get('quantity').value * this.form.get('price').value;
        }
        return subtotal;
    };
    AppComponent.prototype.getTaxes = function () {
        return this.getSubtotal() * TAX_PERCENTAGE;
    };
    AppComponent.prototype.getTotal = function () {
        return this.getSubtotal() + this.getTaxes();
    };
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__("../../../../../src/app/app.component.html"),
            styles: [__webpack_require__("../../../../../src/app/app.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormBuilder */]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["E" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* AppComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["c" /* ReactiveFormsModule */],
            ],
            providers: [],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
var environment = {
    production: true
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
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_7" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map