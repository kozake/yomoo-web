webpackJsonp([5],{

/***/ 676:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReadingLogPageModule", function() { return ReadingLogPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__reading_log__ = __webpack_require__(843);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var ReadingLogPageModule = (function () {
    function ReadingLogPageModule() {
    }
    return ReadingLogPageModule;
}());
ReadingLogPageModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["a" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__reading_log__["a" /* ReadingLogPage */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__reading_log__["a" /* ReadingLogPage */]),
        ],
        exports: [
            __WEBPACK_IMPORTED_MODULE_2__reading_log__["a" /* ReadingLogPage */]
        ]
    })
], ReadingLogPageModule);

//# sourceMappingURL=reading-log.module.js.map

/***/ }),

/***/ 843:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ReadingLogPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__models__ = __webpack_require__(87);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__utils__ = __webpack_require__(145);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var ReadingLogPage = (function () {
    function ReadingLogPage(params, navCtrl, alertCtrl, appReadingBookProvider, loading, datePipe) {
        this.params = params;
        this.navCtrl = navCtrl;
        this.alertCtrl = alertCtrl;
        this.appReadingBookProvider = appReadingBookProvider;
        this.loading = loading;
        this.datePipe = datePipe;
        this.book = params.data.book;
        this.callback = params.data.callback;
        // let datePipe = new DatePipe('en-US');
        var endDatetime = new Date();
        this.startDate = params.data.startDate;
        this.startTime = params.data.startTime;
        this.endTime = datePipe.transform(endDatetime, 'HH:mm:ss');
        this.pages = [{ start: params.data.startPage, end: params.data.startPage }];
    }
    ReadingLogPage.prototype.addPage = function (event) {
        this.pages.push({ start: 0, end: 0 });
    };
    ReadingLogPage.prototype.deletePage = function (event) {
        this.pages.pop();
    };
    ReadingLogPage.prototype.doAdd = function (event) {
        var _this = this;
        var startDt = new Date(this.startDate + 'T' + this.startTime + __WEBPACK_IMPORTED_MODULE_5__utils__["a" /* DateUtils */].getTimezoneOffsetStr());
        var endDt = new Date(this.startDate + 'T' + this.endTime + __WEBPACK_IMPORTED_MODULE_5__utils__["a" /* DateUtils */].getTimezoneOffsetStr());
        if (startDt.getTime() > endDt.getTime()) {
            endDt.setDate(endDt.getDate() + 1);
        }
        this.book.appReadingLogs = this.book.appReadingLogs || new Array();
        this.pages.forEach(function (page) {
            _this.book.appReadingLogs.push(new __WEBPACK_IMPORTED_MODULE_3__models__["c" /* AppReadingLog */]({
                startDate: startDt,
                endDate: endDt,
                startPage: page.start,
                endPage: page.end
            }));
        });
        if (this.book.readingStatus == __WEBPACK_IMPORTED_MODULE_3__models__["a" /* AppReadingBook */].ReadingStatusEnum.UNREAD) {
            this.book.readingStatus = __WEBPACK_IMPORTED_MODULE_3__models__["a" /* AppReadingBook */].ReadingStatusEnum.READING;
        }
        if (this.book.readingStatus == __WEBPACK_IMPORTED_MODULE_3__models__["a" /* AppReadingBook */].ReadingStatusEnum.READING
            && this.book.getReadPages() >= this.book.pages) {
            var confirm_1 = this.alertCtrl.create({
                title: '読了',
                message: '全てのページを読みました。読了としますか？',
                buttons: [
                    {
                        text: 'はい',
                        handler: function () {
                            _this.book.readingStatus = __WEBPACK_IMPORTED_MODULE_3__models__["a" /* AppReadingBook */].ReadingStatusEnum.FINISHED;
                            _this.updateBook();
                        }
                    },
                    {
                        text: 'いいえ',
                        handler: function () {
                            _this.updateBook();
                        }
                    }
                ]
            });
            confirm_1.present();
        }
        else {
            this.updateBook();
        }
    };
    ReadingLogPage.prototype.updateBook = function () {
        var _this = this;
        this.loading.start(function () {
            return _this.appReadingBookProvider.update(_this.book).toPromise();
        }).then(function (book) {
            _this.callback(book, false);
            _this.navCtrl.pop();
        }).catch(function () {
            var alert = _this.alertCtrl.create({
                title: 'エラー',
                subTitle: '保存に失敗しました。',
                buttons: ['OK']
            });
            alert.present();
        });
    };
    return ReadingLogPage;
}());
ReadingLogPage = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["h" /* IonicPage */])({
        name: 'ReadingLogPage',
        segment: 'reading-log'
    }),
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_6" /* Component */])({
        selector: 'reading-log',template:/*ion-inline-start:"/Users/s_kozake/develop/yomoo/yomoo/src/pages/reading-log/reading-log.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>読書履歴登録</ion-title>\n    <ion-buttons end>\n      <button ion-button icon-only clear [disabled]="editForm.invalid" (click)="doAdd($event)">\n        <ion-icon name="ios-checkmark"></ion-icon>\n      </button>\n    </ion-buttons>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n  <form #editForm="ngForm">\n    <ion-list>\n      <ion-list-header>\n        <ion-toolbar>\n          期間\n        </ion-toolbar>\n      </ion-list-header>\n      <ion-item>\n        <ion-label>開始日</ion-label>\n        <ion-datetime name="startDate" displayFormat="YYYY年MM月DD日" [(ngModel)]="startDate"></ion-datetime>\n      </ion-item>\n      <ion-item>\n        <ion-label>開始時間</ion-label>\n        <ion-datetime name="startTime" displayFormat="HH:mm:ss" [(ngModel)]="startTime"></ion-datetime>\n      </ion-item>\n      <ion-item>\n        <ion-label>終了時間</ion-label>\n        <ion-datetime name="endTime" displayFormat="HH:mm:ss" [(ngModel)]="endTime"></ion-datetime>\n      </ion-item>\n    </ion-list>\n    <ion-list *ngFor="let page of pages; let idx = index">\n      <ion-list-header>\n        <ion-toolbar>\n          ページ\n          <ion-buttons end>\n            <button ion-button icon-only clear\n                    *ngIf="pages.length === (idx + 1)"\n                    (click)="addPage($event)">\n              <ion-icon name="ios-add-circle-outline"></ion-icon>\n            </button>\n            <button ion-button icon-only clear\n                    *ngIf="pages.length > 1 && pages.length === (idx + 1)"\n                    (click)="deletePage($event)">\n              <ion-icon name="ios-remove-circle-outline"></ion-icon>\n            </button>\n          </ion-buttons>\n        </ion-toolbar>\n      </ion-list-header>\n      <ion-item>\n        <ion-label>開始ページ</ion-label>\n        <input type="number" >\n        <ion-input name="startPage" required type="number" min="0" inputmode="numeric" pattern="[0-9]*" [(ngModel)]="page.start"></ion-input>\n      </ion-item>\n      <ion-item>\n        <ion-label>終了ページ</ion-label>\n        <ion-input name="endPage" required type="number" min="0" inputmode="numeric" pattern="[0-9]*" [(ngModel)]="page.end"></ion-input>\n      </ion-item>\n    </ion-list>\n  </form>\n    \n</ion-content>\n'/*ion-inline-end:"/Users/s_kozake/develop/yomoo/yomoo/src/pages/reading-log/reading-log.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["i" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["j" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["k" /* AlertController */],
        __WEBPACK_IMPORTED_MODULE_4__providers__["d" /* AppReadingBookProvider */],
        __WEBPACK_IMPORTED_MODULE_4__providers__["a" /* AppLoadingProvider */],
        __WEBPACK_IMPORTED_MODULE_1__angular_common__["a" /* DatePipe */]])
], ReadingLogPage);

//# sourceMappingURL=reading-log.js.map

/***/ })

});
//# sourceMappingURL=5.main.js.map