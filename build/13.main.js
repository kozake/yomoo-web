webpackJsonp([13],{

/***/ 666:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthPageModule", function() { return AuthPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__auth__ = __webpack_require__(834);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var AuthPageModule = (function () {
    function AuthPageModule() {
    }
    return AuthPageModule;
}());
AuthPageModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["a" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__auth__["a" /* AuthPage */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__auth__["a" /* AuthPage */]),
        ],
        exports: [
            __WEBPACK_IMPORTED_MODULE_2__auth__["a" /* AuthPage */]
        ]
    })
], AuthPageModule);

//# sourceMappingURL=auth.module.js.map

/***/ }),

/***/ 834:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthPage; });
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




var AuthPage = (function () {
    function AuthPage(navCtrl, navParams, eventManager, modalCtrl, loginProvider) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.eventManager = eventManager;
        this.modalCtrl = modalCtrl;
        this.loginProvider = loginProvider;
    }
    AuthPage.prototype.ionViewDidLoad = function () {
    };
    AuthPage.prototype.doLogin = function () {
        var _this = this;
        var modal = this.modalCtrl.create('LoginPage');
        modal.onDidDismiss(function (data) {
            if (data == 'login') {
                _this.navCtrl.setRoot('BookListPage');
            }
            else if (data == 'resetPassword') {
                _this.navCtrl.push('ResetPasswordPage');
            }
        });
        modal.present();
    };
    AuthPage.prototype.doRegister = function () {
        var _this = this;
        var modal = this.modalCtrl.create('RegisterPage');
        modal.onDidDismiss(function (data) {
            if (data.result == 'registed') {
                _this.loginProvider.login({
                    username: data.registerAccount.login,
                    password: data.registerAccount.password,
                    rememberMe: true
                }).then(function () {
                    _this.navCtrl.setRoot('BookListPage');
                    _this.eventManager.broadcast({
                        name: 'authenticationSuccess',
                        content: 'Sending Authentication Success'
                    });
                }).catch(function (e) {
                    // error
                });
            }
        });
        modal.present();
    };
    return AuthPage;
}());
AuthPage = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* IonicPage */])({
        name: 'AuthPage',
        segment: 'auth'
    }),
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_6" /* Component */])({
        selector: 'page-auth',template:/*ion-inline-start:"/Users/s_kozake/develop/yomoo/yomoo/src/pages/auth/auth.html"*/'<!--\n  Generated template for the AuthPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>認証</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n  <ion-list>\n    <div padding>\n      <button ion-button icon-start color="primary" block (click)="doLogin()">\n        <ion-icon name="person"></ion-icon>\n        ログイン\n      </button>\n    </div>\n    <div padding>\n      <button ion-button icon-start color="secondary" block (click)="doRegister()">\n        <ion-icon name="person-add"></ion-icon>\n        ユーザー登録\n      </button>\n    </div>\n  </ion-list>\n</ion-content>\n'/*ion-inline-end:"/Users/s_kozake/develop/yomoo/yomoo/src/pages/auth/auth.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_2_ng_jhipster__["b" /* JhiEventManager */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* ModalController */],
        __WEBPACK_IMPORTED_MODULE_3__providers__["f" /* LoginProvider */]])
], AuthPage);

//# sourceMappingURL=auth.js.map

/***/ })

});
//# sourceMappingURL=13.main.js.map