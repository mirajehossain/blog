webpackJsonp(["contact.module"],{

/***/ "../../../../../src/app/layout/contact/contact-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContactRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__contact_component__ = __webpack_require__("../../../../../src/app/layout/contact/contact.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [
    { path: '', component: __WEBPACK_IMPORTED_MODULE_2__contact_component__["a" /* ContactComponent */] }
];
var ContactRoutingModule = /** @class */ (function () {
    function ContactRoutingModule() {
    }
    ContactRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["d" /* RouterModule */].forChild(routes)],
            exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["d" /* RouterModule */]]
        })
    ], ContactRoutingModule);
    return ContactRoutingModule;
}());



/***/ }),

/***/ "../../../../../src/app/layout/contact/contact.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/layout/contact/contact.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- Blog Post -->\r\n<div class=\"card mb-4 my-4\">\r\n\r\n\r\n  <form class=\"form-horizontal\" action=\"\" method=\"post\">\r\n    <fieldset>\r\n      <legend class=\"text-center card-header\">Contact Me</legend>\r\n\r\n      <!-- Name input-->\r\n      <div class=\"form-group\">\r\n        <label class=\"col-md-3 control-label\" for=\"name\">Name</label>\r\n        <div class=\"col-md-9\">\r\n          <input id=\"name\" name=\"name\" type=\"text\" placeholder=\"Your name\" class=\"form-control\">\r\n        </div>\r\n      </div>\r\n\r\n      <!-- Email input-->\r\n      <div class=\"form-group\">\r\n        <label class=\"col-md-3 control-label\" for=\"email\">Your E-mail</label>\r\n        <div class=\"col-md-9\">\r\n          <input id=\"email\" name=\"email\" type=\"text\" placeholder=\"Your email\" class=\"form-control\">\r\n        </div>\r\n      </div>\r\n\r\n      <!-- Message body -->\r\n      <div class=\"form-group\">\r\n        <label class=\"col-md-3 control-label\" for=\"message\">Your message</label>\r\n        <div class=\"col-md-9\">\r\n          <textarea class=\"form-control\" id=\"message\" name=\"message\" placeholder=\"Please enter your message here...\" rows=\"5\"></textarea>\r\n        </div>\r\n      </div>\r\n\r\n      <!-- Form actions -->\r\n      <div class=\"form-group\">\r\n        <div class=\"col-md-12 text-right\">\r\n          <button type=\"submit\" class=\"btn btn-primary btn-lg\">Submit</button>\r\n        </div>\r\n      </div>\r\n    </fieldset>\r\n  </form>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/layout/contact/contact.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContactComponent; });
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

var ContactComponent = /** @class */ (function () {
    function ContactComponent() {
    }
    ContactComponent.prototype.ngOnInit = function () {
    };
    ContactComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-contact',
            template: __webpack_require__("../../../../../src/app/layout/contact/contact.component.html"),
            styles: [__webpack_require__("../../../../../src/app/layout/contact/contact.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ContactComponent);
    return ContactComponent;
}());



/***/ }),

/***/ "../../../../../src/app/layout/contact/contact.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactModule", function() { return ContactModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__contact_routing_module__ = __webpack_require__("../../../../../src/app/layout/contact/contact-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__contact_component__ = __webpack_require__("../../../../../src/app/layout/contact/contact.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var ContactModule = /** @class */ (function () {
    function ContactModule() {
    }
    ContactModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["b" /* CommonModule */],
                __WEBPACK_IMPORTED_MODULE_2__contact_routing_module__["a" /* ContactRoutingModule */]
            ],
            declarations: [__WEBPACK_IMPORTED_MODULE_3__contact_component__["a" /* ContactComponent */]]
        })
    ], ContactModule);
    return ContactModule;
}());



/***/ })

});
//# sourceMappingURL=contact.module.chunk.js.map