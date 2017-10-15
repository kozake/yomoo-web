webpackJsonp([8],{

/***/ 673:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginPageModule", function() { return LoginPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__login__ = __webpack_require__(840);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var LoginPageModule = (function () {
    function LoginPageModule() {
    }
    return LoginPageModule;
}());
LoginPageModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["a" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__login__["a" /* LoginPage */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__login__["a" /* LoginPage */]),
        ],
        exports: [
            __WEBPACK_IMPORTED_MODULE_2__login__["a" /* LoginPage */]
        ]
    })
], LoginPageModule);

//# sourceMappingURL=login.module.js.map

/***/ }),

/***/ 840:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginPage; });
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




var LoginPage = (function () {
    function LoginPage(eventManager, viewCtrl, alertCtrl, loading, loginProvider) {
        this.eventManager = eventManager;
        this.viewCtrl = viewCtrl;
        this.alertCtrl = alertCtrl;
        this.loading = loading;
        this.loginProvider = loginProvider;
        this.account = {};
    }
    LoginPage.prototype.doLogin = function () {
        var _this = this;
        this.loading.start(function () {
            _this.account.rememberMe = true;
            return _this.loginProvider.login(_this.account).then(function () {
                _this.viewCtrl.dismiss('login');
                _this.eventManager.broadcast({
                    name: 'authenticationSuccess',
                    content: 'Sending Authentication Success'
                });
            }).catch(function () {
                var alert = _this.alertCtrl.create({
                    title: 'エラー',
                    subTitle: 'ログインに失敗しました。入力をお確かめの上、再度実行してください。',
                    buttons: ['OK']
                });
                alert.present();
            });
        });
    };
    LoginPage.prototype.requestResetPassword = function () {
        this.viewCtrl.dismiss('resetPassword');
    };
    LoginPage.prototype.dismiss = function (data) {
        this.viewCtrl.dismiss('cancel');
    };
    return LoginPage;
}());
LoginPage = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* IonicPage */])({
        name: 'LoginPage',
        segment: 'login'
    }),
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_6" /* Component */])({
        selector: 'page-login',template:/*ion-inline-start:"/Users/s_kozake/develop/yomoo/yomoo/src/pages/login/login.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-buttons start>\n      <button ion-button (click)="dismiss()">Cancel</button>\n    </ion-buttons>\n    <ion-title>ログイン</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n  <form #loginForm="ngForm" novalidate>\n    <ion-list>\n      <ion-item>\n        <ion-icon name="person" item-start></ion-icon>\n        <ion-label floating>ユーザー名</ion-label>\n        <ion-input type="text" [(ngModel)]="account.username" name="username" #username="ngModel"\n                   required></ion-input>\n      </ion-item>\n      <ion-item no-lines *ngIf="username.dirty && username.invalid">\n        <div *ngIf="username.errors?.required">\n          <p ion-text color="danger">ユーザー名を入力してください。<p>\n        </div>\n      </ion-item>\n  \n      <ion-item>\n        <ion-icon name="key" item-start></ion-icon>\n        <ion-label floating>パスワード</ion-label>\n        <ion-input type="password" required [(ngModel)]="account.password" name="password" #password="ngModel"\n                   required></ion-input>\n      </ion-item>\n      <ion-item no-lines *ngIf="password.dirty && password.invalid">\n        <div *ngIf="password.errors.required">\n          <p ion-text color="danger">パスワードを入力してください。<p>\n        </div>\n      </ion-item>\n  \n      <div padding>\n        <button ion-button color="primary" block [disabled]="loginForm.invalid" (click)="doLogin()">ログイン</button>\n      </div>\n\n    </ion-list>\n    <div padding>\n      <a (click)="requestResetPassword()">パスワードをお忘れの場合はこちらへ</a>\n    </div>\n  </form> \n</ion-content>\n'/*ion-inline-end:"/Users/s_kozake/develop/yomoo/yomoo/src/pages/login/login.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ng_jhipster__["b" /* JhiEventManager */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* ViewController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* AlertController */], __WEBPACK_IMPORTED_MODULE_3__providers__["a" /* AppLoadingProvider */], __WEBPACK_IMPORTED_MODULE_3__providers__["f" /* LoginProvider */]])
], LoginPage);

//# sourceMappingURL=login.js.map

/***/ })

});
//# sourceMappingURL=8.main.js.map