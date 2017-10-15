webpackJsonp([4],{

/***/ 678:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterPageModule", function() { return RegisterPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__register__ = __webpack_require__(845);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var RegisterPageModule = (function () {
    function RegisterPageModule() {
    }
    return RegisterPageModule;
}());
RegisterPageModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["a" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__register__["a" /* RegisterPage */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__register__["a" /* RegisterPage */]),
        ],
        exports: [
            __WEBPACK_IMPORTED_MODULE_2__register__["a" /* RegisterPage */]
        ]
    })
], RegisterPageModule);

//# sourceMappingURL=register.module.js.map

/***/ }),

/***/ 845:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegisterPage; });
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




var RegisterPage = (function () {
    function RegisterPage(viewCtrl, alertCtrl, loading, acountresourceApi) {
        this.viewCtrl = viewCtrl;
        this.alertCtrl = alertCtrl;
        this.loading = loading;
        this.acountresourceApi = acountresourceApi;
        this.confirmPassword = "";
        this.account = {};
    }
    RegisterPage.prototype.ngOnInit = function () {
    };
    RegisterPage.prototype.doRegister = function () {
        var _this = this;
        if (this.account.password !== this.confirmPassword) {
            var alert_1 = this.alertCtrl.create({
                title: 'エラー',
                subTitle: 'パスワードが一致しません。',
                buttons: ['OK']
            });
            alert_1.present();
            return;
        }
        this.account.langKey = 'ja';
        this.loading.start(function () {
            return _this.acountresourceApi.registerAccountUsingPOSTWithHttpInfo(_this.account).toPromise()
                .then(function () {
                var alert = _this.alertCtrl.create({
                    title: '情報',
                    subTitle: 'ユーザ登録を受付ました。メールを確認して、ユーザ登録を完了してください。',
                    buttons: ['OK']
                });
                alert.present();
                _this.viewCtrl.dismiss({ 'result': 'registed', 'registerAccount': _this.account });
            }).catch(function (response) {
                return _this.processError(response);
            });
        });
    };
    RegisterPage.prototype.processError = function (response) {
        if (response.status === 400 && response._body === 'login already in use') {
            var alert_2 = this.alertCtrl.create({
                title: 'エラー',
                subTitle: 'ユーザ名は既に使用されています。',
                buttons: ['OK']
            });
            alert_2.present();
        }
        else if (response.status === 400 && response._body === 'email address already in use') {
            var alert_3 = this.alertCtrl.create({
                title: 'エラー',
                subTitle: 'メールアドレスは既に使用されています。',
                buttons: ['OK']
            });
            alert_3.present();
        }
        else {
            var alert_4 = this.alertCtrl.create({
                title: 'エラー',
                subTitle: '登録に失敗しました。時間をおいてから再度実行してください。',
                buttons: ['OK']
            });
            alert_4.present();
        }
    };
    RegisterPage.prototype.dismiss = function (data) {
        this.viewCtrl.dismiss({ 'result': 'cancel' });
    };
    return RegisterPage;
}());
RegisterPage = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* IonicPage */])({
        name: 'RegisterPage',
        segment: 'register'
    }),
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_6" /* Component */])({
        selector: 'page-register',template:/*ion-inline-start:"/Users/s_kozake/develop/yomoo/yomoo/src/pages/register/register.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-buttons start>\n      <button ion-button (click)="dismiss()">Cancel</button>\n    </ion-buttons>\n    <ion-title>ユーザー登録</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n  <form #form="ngForm" novalidate>\n    <ion-list>\n\n      <ion-item>\n        <ion-icon name="person" item-start></ion-icon>\n        <ion-label floating>ユーザー名</ion-label>\n        <ion-input type="text" name="login" [(ngModel)]="account.login" #login="ngModel"\n                   required minlength="1" maxlength="50" pattern="^[_\'.@A-Za-z0-9-]*$"></ion-input>\n      </ion-item>\n      <ion-item no-lines *ngIf="login.dirty && login.invalid">\n        <div *ngIf="login.errors?.required">\n          <p ion-text color="danger">ユーザー名を入力してください。<p>\n        </div>\n        <div *ngIf="login.errors?.maxlength">\n          <p ion-text color="danger">ユーザー名は{{login.errors.maxlength.requiredLength}}文字以内で入力してください。<p>\n        </div>\n        <div *ngIf="login.errors?.pattern">\n            <p ion-text color="danger">ユーザー名は英数字で入力してください。<p>\n        </div>\n      </ion-item>\n\n      <ion-item>\n          <ion-icon name="mail" item-start></ion-icon>\n          <ion-label floating>メールアドレス</ion-label>\n        <ion-input type="email" name="email" [(ngModel)]="account.email" #email="ngModel"\n                   required minlength="5" maxlength="100" email></ion-input>\n      </ion-item>\n      <ion-item no-lines *ngIf="email.dirty && email.invalid">\n        <div *ngIf="email.errors?.required">\n          <p ion-text color="danger">メールアドレスを入力してください。<p>\n        </div>\n        <div *ngIf="email.errors?.minlength">\n            <p ion-text color="danger">メールアドレスは{{email.errors.minlength.requiredLength}}文字以上で入力してください。<p>\n        </div>\n        <div *ngIf="email.errors?.maxlength">\n          <p ion-text color="danger">メールアドレスは{{email.errors.maxlength.requiredLength}}文字以内で入力してください。<p>\n        </div>\n        <div *ngIf="!email.errors?.required && email.errors?.email">\n          <p ion-text color="danger">メールアドレスの形式で入力してください。<p>\n        </div>\n      </ion-item>\n  \n      <ion-item>\n          <ion-icon name="key" item-start></ion-icon>\n          <ion-label floating>パスワード</ion-label>\n        <ion-input type="password" name="password" [(ngModel)]="account.password" #password="ngModel"\n                   required minlength="4" maxlength="50"></ion-input>\n      </ion-item>\n      <ion-item no-lines *ngIf="password.dirty && password.invalid">\n        <div *ngIf="password.errors.required">\n          <p ion-text color="danger">パスワードを入力してください。<p>\n        </div>\n        <div *ngIf="password.errors.minlength">\n            <p ion-text color="danger">パスワードは{{password.errors.minlength.requiredLength}}文字以上で入力してください。<p>\n        </div>\n        <div *ngIf="password.errors.maxlength">\n          <p ion-text color="danger">パスワードは{{password.errors.maxlength.requiredLength}}文字以内で入力してください。<p>\n        </div>\n      </ion-item>\n  \n      <ion-item>\n        <ion-icon name="key" item-start></ion-icon>\n        <ion-label floating>パスワード(確認)</ion-label>\n        <ion-input type="password" name="confirmPassword" [(ngModel)]="confirmPassword" #confirmPw="ngModel"\n                   required minlength="4" maxlength="50"></ion-input>\n      </ion-item>\n      <ion-item no-lines *ngIf="confirmPw.dirty && confirmPw.invalid">\n        <div *ngIf="confirmPw.errors.required">\n          <p ion-text color="danger">パスワード(確認)を入力してください。<p>\n        </div>\n        <div *ngIf="confirmPw.errors.minlength">\n            <p ion-text color="danger">パスワード(確認)は{{confirmPw.errors.minlength.requiredLength}}文字以上で入力してください。<p>\n        </div>\n        <div *ngIf="confirmPw.errors.maxlength">\n          <p ion-text color="danger">パスワード(確認)は{{confirmPw.errors.maxlength.requiredLength}}文字以内で入力してください。<p>\n        </div>\n      </ion-item>\n  \n      <div padding>\n        <button [disabled]="form.invalid" ion-button color="primary" block (click)="doRegister()">\n          登録\n        </button>\n      </div>\n  \n    </ion-list>\n  </form> \n</ion-content>\n'/*ion-inline-end:"/Users/s_kozake/develop/yomoo/yomoo/src/pages/register/register.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* ViewController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* AlertController */], __WEBPACK_IMPORTED_MODULE_2__providers__["a" /* AppLoadingProvider */], __WEBPACK_IMPORTED_MODULE_3__services__["a" /* AccountresourceApi */]])
], RegisterPage);

//# sourceMappingURL=register.js.map

/***/ })

});
//# sourceMappingURL=4.main.js.map