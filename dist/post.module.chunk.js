webpackJsonp(["post.module"],{

/***/ "../../../../../src/app/layout/post/post-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PostRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__post_component__ = __webpack_require__("../../../../../src/app/layout/post/post.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [
    { path: '', component: __WEBPACK_IMPORTED_MODULE_2__post_component__["a" /* PostComponent */] }
];
var PostRoutingModule = /** @class */ (function () {
    function PostRoutingModule() {
    }
    PostRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["d" /* RouterModule */].forChild(routes)],
            exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["d" /* RouterModule */]]
        })
    ], PostRoutingModule);
    return PostRoutingModule;
}());



/***/ }),

/***/ "../../../../../src/app/layout/post/post.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/layout/post/post.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- Post Content Column -->\r\n<div >\r\n\r\n  <!-- Title -->\r\n  <h1 class=\"mt-4\">{{Post.title}}</h1>\r\n\r\n  <!-- Author -->\r\n  <p class=\"lead\">\r\n    By\r\n    <a href=\"#\">{{Post.author}}</a>  |  {{Post.date}} | {{ Post.ctitle }}\r\n  </p>\r\n\r\n  <!--\r\n\r\n        <hr>\r\n\r\n        &lt;!&ndash; Preview Image &ndash;&gt;\r\n        <img class=\"img-fluid rounded\" src=\"{{Post.images}}\" alt=\"\">\r\n  -->\r\n\r\n  <hr>\r\n\r\n  <!-- Post Content -->\r\n  <p class=\"lead \"><span [innerHTML]=\"Post.description | sanitizeHtml\"></span></p>\r\n  <hr>\r\n\r\n\r\n  <disqus [identifier]=\"'mirajehossain/'+Post.id\"></disqus>\r\n  <!--<a class=\"fb-comments\" data-href=\"http://mirajehossain.com/{{Post.id}}\" data-numposts=\"4\">-->\r\n  <!--</a>-->\r\n\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/layout/post/post.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PostComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__api_service__ = __webpack_require__("../../../../../src/app/api.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__highlight_service__ = __webpack_require__("../../../../../src/app/highlight.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var PostComponent = /** @class */ (function () {
    function PostComponent(route, apiService, highlightService) {
        this.route = route;
        this.apiService = apiService;
        this.highlightService = highlightService;
        this.Post = new Object();
        this.highlighted = false;
    }
    PostComponent.prototype.ngOnInit = function () {
        this.getPost();
    };
    PostComponent.prototype.ngAfterViewChecked = function () {
        if (this.Post && !this.highlighted) {
            this.highlightService.highlightAll();
            this.highlighted = true;
            console.log(this.highlighted);
        }
    };
    PostComponent.prototype.getPost = function () {
        var _this = this;
        var id = +this.route.snapshot.paramMap.get('id');
        this.apiService.getPost(id)
            .subscribe(function (post) {
            _this.Post = post.data[0];
            console.log(_this.Post);
        }, function (error) { return console.log(error); });
    };
    PostComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-post',
            template: __webpack_require__("../../../../../src/app/layout/post/post.component.html"),
            styles: [__webpack_require__("../../../../../src/app/layout/post/post.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */], __WEBPACK_IMPORTED_MODULE_1__api_service__["a" /* ApiService */], __WEBPACK_IMPORTED_MODULE_3__highlight_service__["a" /* HighlightService */]])
    ], PostComponent);
    return PostComponent;
}());



/***/ }),

/***/ "../../../../../src/app/layout/post/post.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PostModule", function() { return PostModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__post_routing_module__ = __webpack_require__("../../../../../src/app/layout/post/post-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__post_component__ = __webpack_require__("../../../../../src/app/layout/post/post.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__directives_pipe_module__ = __webpack_require__("../../../../../src/app/directives/pipe.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ngx_disqus__ = __webpack_require__("../../../../ngx-disqus/esm5/ngx-disqus.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_angular_froala_wysiwyg__ = __webpack_require__("../../../../angular-froala-wysiwyg/index.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var PostModule = /** @class */ (function () {
    function PostModule() {
    }
    PostModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["b" /* CommonModule */],
                __WEBPACK_IMPORTED_MODULE_2__post_routing_module__["a" /* PostRoutingModule */],
                __WEBPACK_IMPORTED_MODULE_4__directives_pipe_module__["a" /* PipeModule */],
                __WEBPACK_IMPORTED_MODULE_5_ngx_disqus__["a" /* DisqusModule */].forRoot('mirajehossain'),
                __WEBPACK_IMPORTED_MODULE_6_angular_froala_wysiwyg__["a" /* FroalaEditorModule */].forRoot(),
                __WEBPACK_IMPORTED_MODULE_6_angular_froala_wysiwyg__["b" /* FroalaViewModule */].forRoot()
            ],
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__post_component__["a" /* PostComponent */],
            ],
            exports: [__WEBPACK_IMPORTED_MODULE_2__post_routing_module__["a" /* PostRoutingModule */]]
        })
    ], PostModule);
    return PostModule;
}());



/***/ }),

/***/ "../../../../ngx-disqus/esm5/ngx-disqus.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DisqusModule; });
/* unused harmony export ɵb */
/* unused harmony export ɵa */
/* unused harmony export ɵc */
/* unused harmony export ɵd */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var SHORTNAME = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* InjectionToken */]('SHORTNAME');
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var DisqusService = (function () {
    /**
     * @param {?} shortname
     */
    function DisqusService(shortname) {
        this.shortname = shortname;
    }
    Object.defineProperty(DisqusService.prototype, "window", {
        /**
         * @return {?}
         */
        get: function () {
            return _window();
        },
        enumerable: true,
        configurable: true
    });
    return DisqusService;
}());
DisqusService.decorators = [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */] },
];
/** @nocollapse */
DisqusService.ctorParameters = function () { return [
    { type: undefined, decorators: [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["z" /* Inject */], args: [SHORTNAME,] },] },
]; };
/**
 * @return {?}
 */
function _window() {
    return typeof window !== 'undefined' ? window : global;
}
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var DisqusComponent = (function () {
    /**
     * @param {?} renderer
     * @param {?} el
     * @param {?} dService
     */
    function DisqusComponent(renderer, el, dService) {
        this.renderer = renderer;
        this.el = el;
        this.dService = dService;
        /**
         * DISQUS events
         */
        this.newComment = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* EventEmitter */](true);
        this.ready = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* EventEmitter */](true);
        this.paginate = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* EventEmitter */](true);
    }
    /**
     * @return {?}
     */
    DisqusComponent.prototype.ngOnChanges = function () {
        /** Reset Disqus if any input changed */
        if (!this.dService.window.DISQUS) {
            this.addDisqusScript();
        }
        else {
            this.reset();
        }
    };
    /**
     * Add DISQUS script
     * @return {?}
     */
    DisqusComponent.prototype.addDisqusScript = function () {
        /** Set DISQUS config */
        this.dService.window.disqus_config = this.getConfig();
        var /** @type {?} */ disqusScript = this.renderer.createElement('script');
        disqusScript.src = "//" + this.dService.shortname + ".disqus.com/embed.js";
        disqusScript.async = true;
        disqusScript.type = 'text/javascript';
        this.renderer.setAttribute(disqusScript, 'data-timestamp', new Date().getTime().toString());
        this.renderer.appendChild(this.el.nativeElement, disqusScript);
    };
    /**
     * Reset DISQUS with the new config
     * @return {?}
     */
    DisqusComponent.prototype.reset = function () {
        this.dService.window.DISQUS.reset({
            reload: true,
            config: this.getConfig()
        });
    };
    /**
     * Create DISQUS config from inputs
     * @return {?}
     */
    DisqusComponent.prototype.getConfig = function () {
        var /** @type {?} */ self = this;
        return function () {
            this.page.identifier = self.identifier;
            this.page.url = self.validateUrl(self.url);
            this.page.title = self.title;
            this.category_id = self.category;
            this.language = self.language;
            /* Available callbacks are afterRender, onInit, onNewComment, onPaginate, onReady, preData, preInit, preReset */
            this.callbacks.onNewComment = [function (e) {
                    self.newComment.emit(e);
                }];
            this.callbacks.onReady = [function (e) {
                    self.ready.emit(e);
                }];
            this.callbacks.onPaginate = [function (e) {
                    self.paginate.emit(e);
                }];
        };
    };
    /**
     * @param {?} url
     * @return {?}
     */
    DisqusComponent.prototype.validateUrl = function (url) {
        /** Validate URL input */
        if (url) {
            var /** @type {?} */ r = /(http|https):\/\/(\w+:{0,1}\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-\/]))?/;
            if (r.test(url)) {
                return url;
            }
            else {
                console.warn('[Disqus]: Invalid URL, return undefined');
            }
        }
        /** DISQUS will fallback to "Window.location.href" when URL is undefined */
        return undefined;
    };
    /**
     * @return {?}
     */
    DisqusComponent.prototype.ngOnDestroy = function () {
        this.dService.window.DISQUS = undefined;
        this.dService.window.disqus_config = undefined;
    };
    return DisqusComponent;
}());
DisqusComponent.decorators = [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */], args: [{
                selector: 'disqus',
                template: '<div id="disqus_thread"></div>',
                changeDetection: __WEBPACK_IMPORTED_MODULE_0__angular_core__["j" /* ChangeDetectionStrategy */].OnPush
            },] },
];
/** @nocollapse */
DisqusComponent.ctorParameters = function () { return [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["W" /* Renderer2 */], },
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* ElementRef */], },
    { type: DisqusService, },
]; };
DisqusComponent.propDecorators = {
    "url": [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */] },],
    "identifier": [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */] },],
    "title": [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */] },],
    "category": [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */] },],
    "language": [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */] },],
    "newComment": [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["P" /* Output */] },],
    "ready": [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["P" /* Output */] },],
    "paginate": [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["P" /* Output */] },],
};
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * Initialize Disqus with shortname
 * @param {?} shortname
 * @return {?}
 */
function DisqusFactory(shortname) {
    return new DisqusService(shortname);
}
var DisqusModule = (function () {
    function DisqusModule() {
    }
    /**
     * @param {?} shortname
     * @return {?}
     */
    DisqusModule.forRoot = function (shortname) {
        return {
            ngModule: DisqusModule,
            providers: [
                { provide: SHORTNAME, useValue: shortname },
                {
                    provide: DisqusService,
                    useFactory: DisqusFactory,
                    deps: [SHORTNAME]
                }
            ]
        };
    };
    return DisqusModule;
}());
DisqusModule.decorators = [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */], args: [{
                declarations: [DisqusComponent],
                exports: [DisqusComponent]
            },] },
];
/** @nocollapse */
DisqusModule.ctorParameters = function () { return []; };
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * Generated bundle index. Do not edit.
 */

//# sourceMappingURL=ngx-disqus.js.map

/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__("../../../../webpack/buildin/global.js")))

/***/ })

});
//# sourceMappingURL=post.module.chunk.js.map