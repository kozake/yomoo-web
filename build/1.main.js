webpackJsonp([1],{

/***/ 668:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BookSearchPageModule", function() { return BookSearchPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__book_search__ = __webpack_require__(836);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__directives_keyboard_attach_keyboard_attach_module__ = __webpack_require__(736);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var BookSearchPageModule = (function () {
    function BookSearchPageModule() {
    }
    return BookSearchPageModule;
}());
BookSearchPageModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["a" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__book_search__["a" /* BookSearchPage */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__book_search__["a" /* BookSearchPage */]),
            __WEBPACK_IMPORTED_MODULE_3__directives_keyboard_attach_keyboard_attach_module__["a" /* KeyboardAttachDirectiveModule */],
        ],
        exports: [
            __WEBPACK_IMPORTED_MODULE_2__book_search__["a" /* BookSearchPage */]
        ]
    })
], BookSearchPageModule);

//# sourceMappingURL=book-search.module.js.map

/***/ }),

/***/ 736:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return KeyboardAttachDirectiveModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__keyboard_attach__ = __webpack_require__(737);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var KeyboardAttachDirectiveModule = (function () {
    function KeyboardAttachDirectiveModule() {
    }
    return KeyboardAttachDirectiveModule;
}());
KeyboardAttachDirectiveModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["a" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__keyboard_attach__["a" /* KeyboardAttachDirective */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__keyboard_attach__["a" /* KeyboardAttachDirective */]),
        ],
        exports: [
            __WEBPACK_IMPORTED_MODULE_2__keyboard_attach__["a" /* KeyboardAttachDirective */]
        ]
    })
], KeyboardAttachDirectiveModule);

//# sourceMappingURL=keyboard-attach.module.js.map

/***/ }),

/***/ 737:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return KeyboardAttachDirective; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ionic_native_keyboard__ = __webpack_require__(146);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(49);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/**
 * @name KeyboardAttachDirective
 * @source https://gist.github.com/Manduro/bc121fd39f21558df2a952b39e907754
 * @description
 * The `keyboardAttach` directive will cause an element to float above the
 * keyboard when the keyboard shows. Currently only supports the `ion-footer` element.
 *
 * ### Notes
 * - This directive requires [Ionic Native](https://github.com/driftyco/ionic-native)
 * and the [Ionic Keyboard Plugin](https://github.com/driftyco/ionic-plugin-keyboard).
 * - Currently only tested to work on iOS.
 * - If there is an input in your footer, you will need to set
 *   `Keyboard.disableScroll(true)`.
 *
 * @usage
 *
 * ```html
 * <ion-content #content>
 * </ion-content>
 *
 * <ion-footer [keyboardAttach]="content">
 *   <ion-toolbar>
 *     <ion-item>
 *       <ion-input></ion-input>
 *     </ion-item>
 *   </ion-toolbar>
 * </ion-footer>
 * ```
 */
var KeyboardAttachDirective = (function () {
    function KeyboardAttachDirective(elementRef, keyboard, platform) {
        this.elementRef = elementRef;
        this.keyboard = keyboard;
        this.platform = platform;
    }
    KeyboardAttachDirective.prototype.ngOnInit = function () {
        var _this = this;
        if (this.platform.is('cordova') && this.platform.is('ios')) {
            this.onShowSubscription = this.keyboard.onKeyboardShow().subscribe(function (e) { return _this.onShow(e); });
            this.onHideSubscription = this.keyboard.onKeyboardHide().subscribe(function () { return _this.onHide(); });
        }
    };
    KeyboardAttachDirective.prototype.ngOnDestroy = function () {
        if (this.onShowSubscription) {
            this.onShowSubscription.unsubscribe();
        }
        if (this.onHideSubscription) {
            this.onHideSubscription.unsubscribe();
        }
    };
    KeyboardAttachDirective.prototype.onShow = function (e) {
        var keyboardHeight = e.keyboardHeight || (e.detail && e.detail.keyboardHeight);
        this.setElementPosition(keyboardHeight);
    };
    ;
    KeyboardAttachDirective.prototype.onHide = function () {
        this.setElementPosition(0);
    };
    ;
    KeyboardAttachDirective.prototype.setElementPosition = function (pixels) {
        this.elementRef.nativeElement.style.paddingBottom = pixels + 'px';
        this.content.resize();
    };
    return KeyboardAttachDirective;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* Input */])('keyboardAttach'),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["f" /* Content */])
], KeyboardAttachDirective.prototype, "content", void 0);
KeyboardAttachDirective = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["p" /* Directive */])({
        selector: '[keyboardAttach]'
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["s" /* ElementRef */],
        __WEBPACK_IMPORTED_MODULE_1__ionic_native_keyboard__["a" /* Keyboard */],
        __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["g" /* Platform */]])
], KeyboardAttachDirective);

//# sourceMappingURL=keyboard-attach.js.map

/***/ }),

/***/ 836:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BookSearchPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ng_jhipster__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers__ = __webpack_require__(50);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var BookSearchPage = (function () {
    function BookSearchPage(navCtrl, viewCtrl, alertCtrl, loading, parseLinks, amazonProvider) {
        this.navCtrl = navCtrl;
        this.viewCtrl = viewCtrl;
        this.alertCtrl = alertCtrl;
        this.loading = loading;
        this.parseLinks = parseLinks;
        this.amazonProvider = amazonProvider;
        this.books = [];
        this.keywards = "";
        this._searchKeywards = "";
    }
    BookSearchPage.prototype.selectBook = function (event, book) {
        this.viewCtrl.dismiss(book);
    };
    BookSearchPage.prototype.onSearch = function (page) {
        if (this.keywards === "") {
            return;
        }
        this._searchKeywards = this.keywards;
        this.searchBook(page);
    };
    BookSearchPage.prototype.onPrev = function (event) {
        this.searchBook(this.prev);
    };
    BookSearchPage.prototype.onNext = function (event) {
        this.searchBook(this.next);
    };
    BookSearchPage.prototype.searchBook = function (page) {
        var _this = this;
        this.loading.start(function () {
            return _this.amazonProvider.searchBooks(_this._searchKeywards, page).toPromise()
                .then(function (response) {
                var links = _this.parseLinks.parse(response.headers.get('Link'));
                _this.prev = links.prev;
                _this.next = links.next;
                _this.books = response.json() || {};
            }).catch(function () {
                var alert = _this.alertCtrl.create({
                    title: 'エラー',
                    subTitle: '検索に失敗しました。時間をおいてから再度検索してください。',
                    buttons: ['OK']
                });
                alert.present();
            });
        });
    };
    BookSearchPage.prototype.dismiss = function (data) {
        this.viewCtrl.dismiss(null);
    };
    return BookSearchPage;
}());
BookSearchPage = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* IonicPage */])({
        name: 'BookSearchPage',
        segment: 'book-search'
    }),
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_6" /* Component */])({
        selector: 'page-book-search',template:/*ion-inline-start:"/Users/s_kozake/develop/yomoo/yomoo/src/pages/book-search/book-search.html"*/'<ion-header>\n  <form #editForm="ngForm" (keydown.enter)="onSearch(0)">\n    <ion-navbar>\n      <ion-buttons start>\n        <button ion-button (click)="dismiss()">Cancel</button>\n      </ion-buttons>\n      <ion-searchbar name="keywards" required [(ngModel)]="keywards"></ion-searchbar>\n    </ion-navbar>\n  </form>\n</ion-header>\n\n<ion-content padding>\n  <ion-list>\n    <ion-item-sliding #slidingItem *ngFor="let book of books">\n      <ion-item>\n        <ion-thumbnail item-start>\n          <img src="{{book.mediumImageURL}}">\n        </ion-thumbnail>\n        <h2 style="white-space:normal"><a href="{{book.detailPageURL}}">{{book.title}}</a></h2>\n        <p>{{book.numberOfPages}} ページ</p>\n        <button ion-button clear item-end (click)="selectBook($event, book)">\n          select\n        </button>\n      </ion-item>\n    </ion-item-sliding>\n  </ion-list>\n</ion-content>\n\n<ion-footer [keyboardAttach]="content">\n  <ion-toolbar>\n    <ion-buttons start>\n      <button ion-button icon-only *ngIf="prev !== undefined" (click)="onPrev($event)">\n        <ion-icon name="arrow-back"></ion-icon>\n      </button>\n    </ion-buttons>\n    <ion-buttons end>\n      <button ion-button icon-only  *ngIf="next !== undefined" (click)="onNext($event)">\n        <ion-icon name="arrow-forward"></ion-icon>\n      </button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-footer>\n'/*ion-inline-end:"/Users/s_kozake/develop/yomoo/yomoo/src/pages/book-search/book-search.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* ViewController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* AlertController */],
        __WEBPACK_IMPORTED_MODULE_3__providers__["a" /* AppLoadingProvider */],
        __WEBPACK_IMPORTED_MODULE_2_ng_jhipster__["c" /* JhiParseLinks */],
        __WEBPACK_IMPORTED_MODULE_3__providers__["g" /* AmazonProvider */]])
], BookSearchPage);

//# sourceMappingURL=book-search.js.map

/***/ })

});
//# sourceMappingURL=1.main.js.map