webpackJsonp(["home.module"],{

/***/ "../../../../../src/app/layout/home/home-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__home_component__ = __webpack_require__("../../../../../src/app/layout/home/home.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [
    { path: '', component: __WEBPACK_IMPORTED_MODULE_2__home_component__["a" /* HomeComponent */] }
];
var HomeRoutingModule = /** @class */ (function () {
    function HomeRoutingModule() {
    }
    HomeRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["d" /* RouterModule */].forChild(routes)],
            exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["d" /* RouterModule */]]
        })
    ], HomeRoutingModule);
    return HomeRoutingModule;
}());



/***/ }),

/***/ "../../../../../src/app/layout/home/home.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/layout/home/home.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- Blog Entries Column -->\r\n\r\n\r\n<!-- Blog Post -->\r\n<div class=\"card my-4 mb-4\" *ngFor=\"let post of Posts | slice: startAt:endAt\">\r\n  <!--<img class=\"card-img-top\" src=\"{{post.images}}\" alt=\"Card image cap\">-->\r\n  <div class=\"card-body\">\r\n    <h2 class=\"card-title\">{{post.title}}</h2>\r\n    <p class=\"card-text line-clamp bangla-font\"> <span [innerHTML]=\"post.description | sanitizeHtml\" ></span></p>\r\n    <a routerLink=\"/post/{{post.id}}\"   class=\"btn btn-primary float-right\">Read More &rarr;</a>\r\n  </div>\r\n  <div class=\"card-footer text-muted\">\r\n    Posted on {{post.date}} |\r\n    <a routerLink=\"/about\">{{post.author}}</a> | {{post.ctitle }}\r\n  </div>\r\n</div>\r\n\r\n<!-- Pagination -->\r\n<ul class=\"pagination justify-content-center mb-4\">\r\n  <li class=\"page-item\" *ngIf=\"currentPage < totalPage\">\r\n    <a class=\"page-link\" (click)=\"previous()\" >&larr; Older</a>\r\n  </li>\r\n  <li *ngIf=\"startAt\"  class=\"page-item\">\r\n    <a class=\"page-link\" (click)=\"next()\">Newer &rarr;</a>\r\n  </li>\r\n</ul>\r\n\r\n\r\n"

/***/ }),

/***/ "../../../../../src/app/layout/home/home.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__api_service__ = __webpack_require__("../../../../../src/app/api.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var HomeComponent = /** @class */ (function () {
    function HomeComponent(apiService) {
        this.apiService = apiService;
        this.startAt = 0;
        this.currentPage = 1;
    }
    HomeComponent.prototype.ngOnInit = function () {
        this.getPost();
    };
    HomeComponent.prototype.getPost = function () {
        var _this = this;
        this.apiService.getPosts()
            .subscribe(function (post) {
            console.log(post);
            _this.Posts = post.data;
            var len = post.data.length;
            _this.startAt = 0;
            _this.currentPage = 1;
            _this.totalPage = Math.ceil(len / 10);
            _this.endAt = _this.currentPage * 10;
        }, function (error) { return console.log(error); });
    };
    HomeComponent.prototype.previous = function () {
        this.currentPage++;
        this.startAt += 10;
        this.endAt = this.currentPage * 10;
        // window.scroll(0,0);
        var scrollToTop = window.setInterval(function () {
            var pos = window.pageYOffset;
            if (pos > 0) {
                window.scrollTo(0, pos - 20); // how far to scroll on each step
            }
            else {
                window.clearInterval(scrollToTop);
            }
        }, 16);
    };
    HomeComponent.prototype.next = function () {
        if (this.currentPage <= this.totalPage) {
            this.currentPage--;
            this.startAt -= 10;
            this.endAt = this.currentPage - 10;
            // window.scroll(0,0);
            var scrollToTop_1 = window.setInterval(function () {
                var pos = window.pageYOffset;
                if (pos > 0) {
                    window.scrollTo(0, pos - 20); // how far to scroll on each step
                }
                else {
                    window.clearInterval(scrollToTop_1);
                }
            }, 16);
        }
        else {
            this.currentPage--;
            this.startAt -= 10;
            this.endAt = this.currentPage - 10;
            var scrollToTop_2 = window.setInterval(function () {
                var pos = window.pageYOffset;
                if (pos > 0) {
                    window.scrollTo(0, pos - 20); // how far to scroll on each step
                }
                else {
                    window.clearInterval(scrollToTop_2);
                }
            }, 16);
        }
    };
    HomeComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-home',
            template: __webpack_require__("../../../../../src/app/layout/home/home.component.html"),
            styles: [__webpack_require__("../../../../../src/app/layout/home/home.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__api_service__["a" /* ApiService */]])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "../../../../../src/app/layout/home/home.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeModule", function() { return HomeModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__home_routing_module__ = __webpack_require__("../../../../../src/app/layout/home/home-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__home_component__ = __webpack_require__("../../../../../src/app/layout/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__directives_pipe_module__ = __webpack_require__("../../../../../src/app/directives/pipe.module.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var HomeModule = /** @class */ (function () {
    function HomeModule() {
    }
    HomeModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["b" /* CommonModule */],
                __WEBPACK_IMPORTED_MODULE_2__home_routing_module__["a" /* HomeRoutingModule */],
                __WEBPACK_IMPORTED_MODULE_4__directives_pipe_module__["a" /* PipeModule */]
            ],
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__home_component__["a" /* HomeComponent */],
            ],
            exports: [__WEBPACK_IMPORTED_MODULE_2__home_routing_module__["a" /* HomeRoutingModule */]]
        })
    ], HomeModule);
    return HomeModule;
}());



/***/ })

});
//# sourceMappingURL=home.module.chunk.js.map