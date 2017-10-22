webpackJsonp([9],{

/***/ 671:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LogPageModule", function() { return LogPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__log__ = __webpack_require__(838);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var LogPageModule = (function () {
    function LogPageModule() {
    }
    return LogPageModule;
}());
LogPageModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["a" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__log__["a" /* LogPage */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__log__["a" /* LogPage */]),
        ],
        exports: [
            __WEBPACK_IMPORTED_MODULE_2__log__["a" /* LogPage */]
        ]
    })
], LogPageModule);

//# sourceMappingURL=log.module.js.map

/***/ }),

/***/ 838:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LogPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__models__ = __webpack_require__(87);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__utils__ = __webpack_require__(145);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var LogPage = (function () {
    function LogPage(params, navCtrl, datePipe) {
        this.params = params;
        this.navCtrl = navCtrl;
        this.datePipe = datePipe;
        if (params.data.log != null) {
            this.appLog = params.data.log;
        }
        else {
            var now = new Date();
            this.appLog = new __WEBPACK_IMPORTED_MODULE_3__models__["c" /* AppReadingLog */]({
                startDate: now,
                endDate: now,
                startPage: 1,
                endPage: 1
            });
        }
        this.startDate = datePipe.transform(this.appLog.startDate, 'y-MM-dd');
        this.startTime = datePipe.transform(this.appLog.startDate, 'HH:mm:ss');
        this.endTime = datePipe.transform(this.appLog.endDate, 'HH:mm:ss');
        this.startPage = this.appLog.startPage;
        this.endPage = this.appLog.endPage;
        this.callback = params.data.callback;
    }
    LogPage.prototype.doAdd = function (event) {
        this.appLog.startDate = new Date(this.startDate + 'T' + this.startTime + __WEBPACK_IMPORTED_MODULE_4__utils__["a" /* DateUtils */].getTimezoneOffsetStr());
        this.appLog.endDate = new Date(this.startDate + 'T' + this.endTime + __WEBPACK_IMPORTED_MODULE_4__utils__["a" /* DateUtils */].getTimezoneOffsetStr());
        if (this.appLog.startDate.getTime() > this.appLog.endDate.getTime()) {
            this.appLog.endDate.setDate(this.appLog.endDate.getDate() + 1);
        }
        this.appLog.startPage = this.startPage;
        this.appLog.endPage = this.endPage;
        this.callback(this.appLog);
        this.navCtrl.pop();
    };
    return LogPage;
}());
LogPage = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["h" /* IonicPage */])({
        name: 'LogPage',
        segment: 'log'
    }),
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_6" /* Component */])({
        selector: 'page-log',template:/*ion-inline-start:"/Users/s_kozake/develop/yomoo/yomoo/src/pages/log/log.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>読書履歴編集</ion-title>\n    <ion-buttons end>\n      <button ion-button icon-only clear [disabled]="editForm.invalid" (click)="doAdd($event)">\n        <ion-icon name="ios-checkmark"></ion-icon>\n      </button>\n    </ion-buttons>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n  <form #editForm="ngForm">\n    <ion-list>\n      <ion-list-header>\n        <ion-toolbar>\n          期間\n        </ion-toolbar>\n      </ion-list-header>\n      <ion-item>\n        <ion-label>開始日</ion-label>\n        <ion-datetime name="startDate" displayFormat="YYYY年MM月DD日" [(ngModel)]="startDate"></ion-datetime>\n      </ion-item>\n      <ion-item>\n        <ion-label>開始時間</ion-label>\n        <ion-datetime name="startTime" displayFormat="HH:mm:ss" [(ngModel)]="startTime"></ion-datetime>\n      </ion-item>\n      <ion-item>\n        <ion-label>終了時間</ion-label>\n        <ion-datetime name="endTime" displayFormat="HH:mm:ss" [(ngModel)]="endTime"></ion-datetime>\n      </ion-item>\n    </ion-list>\n    <ion-list>\n      <ion-item>\n        <ion-label>開始ページ</ion-label>\n        <ion-input type="number" name="startPage" required min="0" inputmode="numeric" pattern="[0-9]*" [(ngModel)]="startPage"></ion-input>\n      </ion-item>\n      <ion-item>\n        <ion-label>終了ページ</ion-label>\n        <ion-input type="number" name="endPage" required min="0" inputmode="numeric" pattern="[0-9]*" [(ngModel)]="endPage"></ion-input>\n      </ion-item>\n    </ion-list>\n  </form>\n</ion-content>\n'/*ion-inline-end:"/Users/s_kozake/develop/yomoo/yomoo/src/pages/log/log.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["i" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["j" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_1__angular_common__["a" /* DatePipe */]])
], LogPage);

//# sourceMappingURL=log.js.map

/***/ })

});
//# sourceMappingURL=9.main.js.map