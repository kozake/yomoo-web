webpackJsonp([15],{

/***/ 664:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AccountSettingPageModule", function() { return AccountSettingPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__account_setting__ = __webpack_require__(831);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var AccountSettingPageModule = (function () {
    function AccountSettingPageModule() {
    }
    return AccountSettingPageModule;
}());
AccountSettingPageModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["a" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__account_setting__["a" /* AccountSettingPage */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__account_setting__["a" /* AccountSettingPage */]),
        ],
        exports: [
            __WEBPACK_IMPORTED_MODULE_2__account_setting__["a" /* AccountSettingPage */]
        ]
    })
], AccountSettingPageModule);

//# sourceMappingURL=account-setting.module.js.map

/***/ }),

/***/ 831:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AccountSettingPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services__ = __webpack_require__(51);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AccountSettingPage = (function () {
    function AccountSettingPage(navCtrl, navParams, alertCtrl, loading, principal, acountresourceApi) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.alertCtrl = alertCtrl;
        this.loading = loading;
        this.principal = principal;
        this.acountresourceApi = acountresourceApi;
        this.settingsAccount = {};
    }
    AccountSettingPage.prototype.ionViewCanEnter = function () {
        return this.principal.identity().then(function (value) {
            return value !== null;
        });
    };
    AccountSettingPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        this.principal.identity().then(function (account) {
            _this.settingsAccount = _this.copyAccount(account);
        });
    };
    AccountSettingPage.prototype.doSave = function () {
        var _this = this;
        this.loading.start(function () {
            return _this.acountresourceApi.saveAccountUsingPOSTWithHttpInfo(_this.settingsAccount).toPromise()
                .then(function () {
                return _this.principal.identity(true).then(function (account) {
                    _this.settingsAccount = _this.copyAccount(account);
                    var alert = _this.alertCtrl.create({
                        title: '情報',
                        subTitle: '保存しました',
                        buttons: ['OK']
                    });
                    alert.present();
                });
            }).catch(function (response) {
                var alert = _this.alertCtrl.create({
                    title: 'エラー',
                    subTitle: '保存に失敗しました。',
                    buttons: ['OK']
                });
                alert.present();
            });
        });
    };
    AccountSettingPage.prototype.copyAccount = function (account) {
        return {
            activated: account.activated,
            email: account.email,
            firstName: account.firstName,
            langKey: account.langKey,
            lastName: account.lastName,
            login: account.login,
            imageUrl: account.imageUrl
        };
    };
    return AccountSettingPage;
}());
AccountSettingPage = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* IonicPage */])({
        name: 'AccountSettingPage',
        segment: 'account-setting'
    }),
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_6" /* Component */])({
        selector: 'page-account-setting',template:/*ion-inline-start:"/Users/s_kozake/develop/yomoo/yomoo/src/pages/account-setting/account-setting.html"*/'<ion-header>\n\n  <ion-navbar>\n    <ion-title>アカウント設定</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n<ion-content padding>\n  <form #form="ngForm" novalidate>\n    <ion-list>\n      <ion-item>\n          <ion-icon name="mail" item-start></ion-icon>\n          <ion-label floating>メールアドレス</ion-label>\n        <ion-input type="email" name="email" [(ngModel)]="settingsAccount.email" #email="ngModel"\n                   required minlength="5" maxlength="100" email></ion-input>\n      </ion-item>\n      <ion-item no-lines *ngIf="email.dirty && email.invalid">\n        <div *ngIf="email.errors?.required">\n          <p ion-text color="danger">メールアドレスを入力してください。<p>\n        </div>\n        <div *ngIf="email.errors?.minlength">\n            <p ion-text color="danger">メールアドレスは{{email.errors.minlength.requiredLength}}文字以上で入力してください。<p>\n        </div>\n        <div *ngIf="email.errors?.maxlength">\n          <p ion-text color="danger">メールアドレスは{{email.errors.maxlength.requiredLength}}文字以内で入力してください。<p>\n        </div>\n        <div *ngIf="!email.errors?.required && email.errors?.email">\n          <p ion-text color="danger">メールアドレスの形式で入力してください。<p>\n        </div>\n      </ion-item>\n\n      <div padding>\n        <button [disabled]="form.invalid" ion-button color="primary" block (click)="doSave()">\n          保存\n        </button>\n      </div>\n  \n    </ion-list>\n  </form>\n</ion-content>\n'/*ion-inline-end:"/Users/s_kozake/develop/yomoo/yomoo/src/pages/account-setting/account-setting.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* AlertController */], __WEBPACK_IMPORTED_MODULE_2__providers__["a" /* AppLoadingProvider */], __WEBPACK_IMPORTED_MODULE_2__providers__["e" /* PrincipalProvider */], __WEBPACK_IMPORTED_MODULE_3__services__["a" /* AccountresourceApi */]])
], AccountSettingPage);

//# sourceMappingURL=account-setting.js.map

/***/ })

});
//# sourceMappingURL=15.main.js.map