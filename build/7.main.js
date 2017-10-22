webpackJsonp([7],{

/***/ 673:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PasswordPageModule", function() { return PasswordPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__password__ = __webpack_require__(840);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var PasswordPageModule = (function () {
    function PasswordPageModule() {
    }
    return PasswordPageModule;
}());
PasswordPageModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["a" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__password__["a" /* PasswordPage */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__password__["a" /* PasswordPage */]),
        ],
        exports: [
            __WEBPACK_IMPORTED_MODULE_2__password__["a" /* PasswordPage */]
        ]
    })
], PasswordPageModule);

//# sourceMappingURL=password.module.js.map

/***/ }),

/***/ 840:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PasswordPage; });
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



/**
 * Generated class for the PasswordPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var PasswordPage = (function () {
    function PasswordPage(navCtrl, navParams, alertCtrl, loading, principal, passwordService) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.alertCtrl = alertCtrl;
        this.loading = loading;
        this.principal = principal;
        this.passwordService = passwordService;
        this.formData = {};
    }
    PasswordPage.prototype.doSave = function () {
        var _this = this;
        if (this.formData.password !== this.formData.confirmPassword) {
            var alert_1 = this.alertCtrl.create({
                title: 'エラー',
                subTitle: 'パスワードが一致しません。',
                buttons: ['OK']
            });
            alert_1.present();
            return;
        }
        this.loading.start(function () {
            return _this.passwordService.save(_this.formData.password).toPromise()
                .then(function () {
                var alert = _this.alertCtrl.create({
                    title: '情報',
                    subTitle: 'パスワードを変更しました。',
                    buttons: ['OK']
                });
                alert.present();
            }).catch(function (response) {
                var alert = _this.alertCtrl.create({
                    title: 'エラー',
                    subTitle: 'パスワード変更に失敗しました。',
                    buttons: ['OK']
                });
                alert.present();
            });
        });
    };
    return PasswordPage;
}());
PasswordPage = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* IonicPage */])({
        name: 'PasswordPage',
        segment: 'password'
    }),
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_6" /* Component */])({
        selector: 'page-password',template:/*ion-inline-start:"/Users/s_kozake/develop/yomoo/yomoo/src/pages/password/password.html"*/'<ion-header>\n\n  <ion-navbar>\n    <ion-title>パスワード</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n  <form #form="ngForm" novalidate>\n    <ion-list>\n\n      <ion-item>\n          <ion-icon name="key" item-start></ion-icon>\n          <ion-label floating>新しいパスワード</ion-label>\n        <ion-input type="password" name="password" [(ngModel)]="formData.password" #password="ngModel"\n                    required minlength="4" maxlength="50"></ion-input>\n      </ion-item>\n      <ion-item no-lines *ngIf="password.dirty && password.invalid">\n        <div *ngIf="password.errors.required">\n          <p ion-text color="danger">新しいパスワードを入力してください。<p>\n        </div>\n        <div *ngIf="password.errors.minlength">\n            <p ion-text color="danger">新しいパスワードは{{password.errors.minlength.requiredLength}}文字以上で入力してください。<p>\n        </div>\n        <div *ngIf="password.errors.maxlength">\n          <p ion-text color="danger">新しいパスワードは{{password.errors.maxlength.requiredLength}}文字以内で入力してください。<p>\n        </div>\n      </ion-item>\n  \n      <ion-item>\n        <ion-icon name="key" item-start></ion-icon>\n        <ion-label floating>新しいパスワード(確認)</ion-label>\n        <ion-input type="password" name="confirmPassword" [(ngModel)]="formData.confirmPassword" #confirmPw="ngModel"\n                    required minlength="4" maxlength="50"></ion-input>\n      </ion-item>\n      <ion-item no-lines *ngIf="confirmPw.dirty && confirmPw.invalid">\n        <div *ngIf="confirmPw.errors.required">\n          <p ion-text color="danger">新しいパスワード(確認)を入力してください。<p>\n        </div>\n        <div *ngIf="confirmPw.errors.minlength">\n            <p ion-text color="danger">新しいパスワード(確認)は{{confirmPw.errors.minlength.requiredLength}}文字以上で入力してください。<p>\n        </div>\n        <div *ngIf="confirmPw.errors.maxlength">\n          <p ion-text color="danger">新しいパスワード(確認)は{{confirmPw.errors.maxlength.requiredLength}}文字以内で入力してください。<p>\n        </div>\n      </ion-item>\n\n      <div padding>\n        <button [disabled]="form.invalid" ion-button color="primary" block (click)="doSave()">\n          保存\n        </button>\n      </div>\n  \n    </ion-list>\n  </form>\n</ion-content>\n'/*ion-inline-end:"/Users/s_kozake/develop/yomoo/yomoo/src/pages/password/password.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* AlertController */], __WEBPACK_IMPORTED_MODULE_2__providers__["a" /* AppLoadingProvider */], __WEBPACK_IMPORTED_MODULE_2__providers__["e" /* PrincipalProvider */], __WEBPACK_IMPORTED_MODULE_2__providers__["c" /* PasswordServiceProvider */]])
], PasswordPage);

//# sourceMappingURL=password.js.map

/***/ })

});
//# sourceMappingURL=7.main.js.map