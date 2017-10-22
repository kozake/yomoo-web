webpackJsonp([3],{

/***/ 678:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResetPasswordPageModule", function() { return ResetPasswordPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__reset_password__ = __webpack_require__(845);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var ResetPasswordPageModule = (function () {
    function ResetPasswordPageModule() {
    }
    return ResetPasswordPageModule;
}());
ResetPasswordPageModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["a" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__reset_password__["a" /* ResetPasswordPage */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__reset_password__["a" /* ResetPasswordPage */]),
        ],
        exports: [
            __WEBPACK_IMPORTED_MODULE_2__reset_password__["a" /* ResetPasswordPage */]
        ]
    })
], ResetPasswordPageModule);

//# sourceMappingURL=reset-password.module.js.map

/***/ }),

/***/ 845:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ResetPasswordPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers__ = __webpack_require__(50);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ResetPasswordPage = (function () {
    function ResetPasswordPage(navCtrl, navParams, alertCtrl, loading, passwordService) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.alertCtrl = alertCtrl;
        this.loading = loading;
        this.passwordService = passwordService;
        this.resetAccount = {};
    }
    ResetPasswordPage.prototype.doRequest = function () {
        var _this = this;
        this.loading.start(function () {
            return _this.passwordService.reset(_this.resetAccount.email).toPromise()
                .then(function () {
                var alert = _this.alertCtrl.create({
                    title: '情報',
                    subTitle: 'パスワードのリセットを受付ました。メールを確認して、パスワードを再登録してください。',
                    buttons: ['OK']
                });
                alert.present();
            }).catch(function (response) {
                var alert = _this.alertCtrl.create({
                    title: 'エラー',
                    subTitle: 'パスワードのリセットに失敗しました。',
                    buttons: ['OK']
                });
                alert.present();
            });
        });
    };
    return ResetPasswordPage;
}());
ResetPasswordPage = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* IonicPage */])({
        name: 'ResetPasswordPage',
        segment: 'reset-password'
    }),
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_6" /* Component */])({
        selector: 'page-reset-password',template:/*ion-inline-start:"/Users/s_kozake/develop/yomoo/yomoo/src/pages/reset-password/reset-password.html"*/'<ion-header>\n\n  <ion-navbar>\n    <ion-title>パスワードリセット</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n<ion-content padding>\n  <div>\n    パスワードをリセットします。<br>\n    ユーザ登録したメールアドレスを入力してください。\n  </div>\n  <form #form="ngForm" novalidate>\n    <ion-list>\n      <ion-item>\n          <ion-icon name="mail" item-start></ion-icon>\n          <ion-label floating>メールアドレス</ion-label>\n        <ion-input type="email" name="email" [(ngModel)]="resetAccount.email" #email="ngModel"\n                    required minlength="5" maxlength="100" email></ion-input>\n      </ion-item>\n      <ion-item no-lines *ngIf="email.dirty && email.invalid">\n        <div *ngIf="email.errors?.required">\n          <p ion-text color="danger">メールアドレスを入力してください。<p>\n        </div>\n        <div *ngIf="email.errors?.minlength">\n            <p ion-text color="danger">メールアドレスは{{email.errors.minlength.requiredLength}}文字以上で入力してください。<p>\n        </div>\n        <div *ngIf="email.errors?.maxlength">\n          <p ion-text color="danger">メールアドレスは{{email.errors.maxlength.requiredLength}}文字以内で入力してください。<p>\n        </div>\n        <div *ngIf="!email.errors?.required && email.errors?.email">\n          <p ion-text color="danger">メールアドレスの形式で入力してください。<p>\n        </div>\n      </ion-item>\n\n      <div padding>\n        <button [disabled]="form.invalid" ion-button color="primary" block (click)="doRequest()">\n          リセット\n        </button>\n      </div>\n  \n    </ion-list>\n  </form>\n</ion-content>\n'/*ion-inline-end:"/Users/s_kozake/develop/yomoo/yomoo/src/pages/reset-password/reset-password.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* AlertController */], __WEBPACK_IMPORTED_MODULE_2__providers__["a" /* AppLoadingProvider */], __WEBPACK_IMPORTED_MODULE_2__providers__["c" /* PasswordServiceProvider */]])
], ResetPasswordPage);

//# sourceMappingURL=reset-password.js.map

/***/ })

});
//# sourceMappingURL=3.main.js.map