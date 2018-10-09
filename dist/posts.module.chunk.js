webpackJsonp(["posts.module"],{

/***/ "../../../../../src/app/layout/posts/posts-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PostsRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__posts_component__ = __webpack_require__("../../../../../src/app/layout/posts/posts.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [
    { path: '', component: __WEBPACK_IMPORTED_MODULE_2__posts_component__["a" /* PostsComponent */] }
];
var PostsRoutingModule = /** @class */ (function () {
    function PostsRoutingModule() {
    }
    PostsRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["d" /* RouterModule */].forChild(routes)],
            exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["d" /* RouterModule */]]
        })
    ], PostsRoutingModule);
    return PostsRoutingModule;
}());



/***/ }),

/***/ "../../../../../src/app/layout/posts/posts.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/layout/posts/posts.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- Blog Entries Column -->\r\n\r\n\r\n<!-- Blog Post -->\r\n<div class=\"card my-4 mb-4\" *ngFor=\"let post of Posts | slice: 0:10\">\r\n  <!--<img class=\"card-img-top\" src=\"{{post.images}}\" alt=\"Card image cap\">-->\r\n  <div class=\"card-body\">\r\n    <h2 class=\"card-title\">{{post.title}}</h2>\r\n    <p class=\"card-text line-clamp bangla-font\"> <span [innerHTML]=\"post.description | sanitizeHtml\" ></span></p>\r\n    <a routerLink=\"/post/{{post.id}}\"   class=\"btn btn-primary float-right\">Read More &rarr;</a>\r\n  </div>\r\n  <div class=\"card-footer text-muted\">\r\n    Posted on {{post.date}} |\r\n    <a routerLink=\"/about\">{{post.author}}</a> | {{post.ctitle }}\r\n  </div>\r\n</div>\r\n\r\n<!-- Pagination -->\r\n<ul class=\"pagination justify-content-center mb-4\">\r\n  <li class=\"page-item\">\r\n    <a class=\"page-link\" href=\"#\">&larr; Older</a>\r\n  </li>\r\n  <li class=\"page-item disabled\">\r\n    <a class=\"page-link\" href=\"#\">Newer &rarr;</a>\r\n  </li>\r\n</ul>\r\n\r\n\r\n"

/***/ }),

/***/ "../../../../../src/app/layout/posts/posts.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PostsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__api_service__ = __webpack_require__("../../../../../src/app/api.service.ts");
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



var PostsComponent = /** @class */ (function () {
    function PostsComponent(route, apiService, router) {
        this.route = route;
        this.apiService = apiService;
        this.router = router;
    }
    PostsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.router.events.subscribe(function (e) {
            if (e instanceof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* NavigationEnd */]) {
                var id_1 = _this.route.snapshot.paramMap.get('id');
                console.log(id_1);
                _this.getPost(id_1);
            }
        });
        var id = this.route.snapshot.paramMap.get('id');
        this.getPost(id);
    };
    PostsComponent.prototype.getPost = function (id) {
        var _this = this;
        this.apiService.getPostByCategory(id)
            .subscribe(function (post) {
            _this.Posts = post.data;
            console.log(post);
        }, function (error) { return console.log(error); });
    };
    PostsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-posts',
            template: __webpack_require__("../../../../../src/app/layout/posts/posts.component.html"),
            styles: [__webpack_require__("../../../../../src/app/layout/posts/posts.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */], __WEBPACK_IMPORTED_MODULE_1__api_service__["a" /* ApiService */], __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* Router */]])
    ], PostsComponent);
    return PostsComponent;
}());



/***/ }),

/***/ "../../../../../src/app/layout/posts/posts.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PostsModule", function() { return PostsModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__posts_routing_module__ = __webpack_require__("../../../../../src/app/layout/posts/posts-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__posts_component__ = __webpack_require__("../../../../../src/app/layout/posts/posts.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__directives_pipe_module__ = __webpack_require__("../../../../../src/app/directives/pipe.module.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var PostsModule = /** @class */ (function () {
    function PostsModule() {
    }
    PostsModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["b" /* CommonModule */],
                __WEBPACK_IMPORTED_MODULE_2__posts_routing_module__["a" /* PostsRoutingModule */],
                __WEBPACK_IMPORTED_MODULE_4__directives_pipe_module__["a" /* PipeModule */]
            ],
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__posts_component__["a" /* PostsComponent */],
            ],
            exports: [__WEBPACK_IMPORTED_MODULE_2__posts_routing_module__["a" /* PostsRoutingModule */]]
        })
    ], PostsModule);
    return PostsModule;
}());



/***/ })

});
//# sourceMappingURL=posts.module.chunk.js.map