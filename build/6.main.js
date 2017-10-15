webpackJsonp([6],{

/***/ 675:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReadingBookPageModule", function() { return ReadingBookPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__reading_book__ = __webpack_require__(842);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var ReadingBookPageModule = (function () {
    function ReadingBookPageModule() {
    }
    return ReadingBookPageModule;
}());
ReadingBookPageModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["a" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__reading_book__["a" /* ReadingBookPage */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__reading_book__["a" /* ReadingBookPage */]),
        ],
        exports: [
            __WEBPACK_IMPORTED_MODULE_2__reading_book__["a" /* ReadingBookPage */]
        ]
    })
], ReadingBookPageModule);

//# sourceMappingURL=reading-book.module.js.map

/***/ }),

/***/ 842:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ReadingBookPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_twitter_connect__ = __webpack_require__(312);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__utils__ = __webpack_require__(145);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};







var ReadingBookPage = (function () {
    function ReadingBookPage(params, navCtrl, alertCtrl, loading, datePipe, twitter) {
        this.params = params;
        this.navCtrl = navCtrl;
        this.alertCtrl = alertCtrl;
        this.loading = loading;
        this.datePipe = datePipe;
        this.twitter = twitter;
        this.isNeedCheckCanLeave = true;
        this._isReading = false;
        this.book = params.data.book;
        this.callback = params.data.callback;
    }
    ReadingBookPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        this.setInitData();
        this.timer = __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__["Observable"].timer(0, 500);
        this.subscription = this.timer.subscribe(function (t) {
            if (_this.isReading()) {
                _this.timerString = _this.getTimerString();
            }
            else {
                var date = new Date();
                _this.startTime = _this.datePipe.transform(date, 'HH:mm:ss');
            }
        });
    };
    ReadingBookPage.prototype.ionViewDidEnter = function () {
        this.isNeedCheckCanLeave = true;
    };
    ReadingBookPage.prototype.ionViewCanLeave = function () {
        var _this = this;
        return new Promise(function (resolve) {
            if (!_this.isNeedCheckCanLeave) {
                resolve(true);
            }
            else if (_this.isReading()) {
                var confirm_1 = _this.alertCtrl.create({
                    title: '戻る',
                    message: '読書を中断して一覧画面に戻ります。よろしいですか？',
                    buttons: [
                        {
                            text: 'はい',
                            handler: function () {
                                _this.callback(_this.book);
                                _this.stopReading();
                                resolve(true);
                            }
                        },
                        {
                            text: 'いいえ',
                            handler: function () {
                                resolve(false);
                            }
                        }
                    ]
                });
                confirm_1.present();
            }
            else {
                _this.callback(_this.book);
                resolve(true);
            }
        });
    };
    ReadingBookPage.prototype.isReading = function () {
        return this._isReading;
    };
    ReadingBookPage.prototype.startReading = function () {
        this._isReading = true;
    };
    ReadingBookPage.prototype.stopReading = function () {
        this._isReading = false;
        this.timerString = null;
    };
    ReadingBookPage.prototype.doStartReading = function (event) {
        this.startReading();
    };
    ReadingBookPage.prototype.doStopReading = function (event) {
        var _this = this;
        this.isNeedCheckCanLeave = false;
        this.navCtrl.push('ReadingLogPage', {
            startDate: this.startDate,
            startTime: this.startTime,
            startPage: this.startPage,
            book: this.book,
            callback: function (book, cancelled) {
                if (!cancelled) {
                    _this.book = book;
                    _this.setInitData();
                    _this.stopReading();
                }
            }
        });
    };
    ReadingBookPage.prototype.chart = function (event) {
        this.isNeedCheckCanLeave = false;
        this.navCtrl.push('ReadingChartPage', this.book);
    };
    ReadingBookPage.prototype.tweetReading = function (event) {
        this.isNeedCheckCanLeave = false;
        this.navCtrl.push('TweetReadingPage', this.book);
    };
    ReadingBookPage.prototype.getTimerString = function () {
        console.log(this.startTime);
        var startDatetime = new Date(this.startDate + 'T' + this.startTime + __WEBPACK_IMPORTED_MODULE_6__utils__["a" /* DateUtils */].getTimezoneOffsetStr());
        var time = new Date().getTime() - startDatetime.getTime();
        var h = Math.floor(time / (60 * 60 * 1000));
        var m = Math.floor((time % (60 * 60 * 1000)) / (60 * 1000));
        var s = Math.floor((time % (60 * 1000)) / 1000);
        var hh = ('0' + h).slice(-2);
        var mm = ('0' + m).slice(-2);
        var ss = ('0' + s).slice(-2);
        return hh + ':' + mm + ':' + ss;
    };
    ReadingBookPage.prototype.setInitData = function () {
        var date = new Date();
        this.startDate = this.datePipe.transform(date, 'y-MM-dd');
        this.startTime = this.datePipe.transform(date, 'HH:mm:ss');
        var lastReadingLog = this.book.getLastReadingLog();
        this.startPage = lastReadingLog != null ? lastReadingLog.endPage : 1;
    };
    return ReadingBookPage;
}());
ReadingBookPage = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["h" /* IonicPage */])({
        name: 'ReadingBookPage',
        segment: 'reading-book'
    }),
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_6" /* Component */])({
        selector: 'reading-book',template:/*ion-inline-start:"/Users/s_kozake/develop/yomoo/yomoo/src/pages/reading-book/reading-book.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>Yomoo!</ion-title>\n    <ion-buttons end>\n      <button ion-button icon-only clear (click)="tweetReading($event)">\n        <ion-icon name="logo-twitter"></ion-icon>\n      </button>\n      <button ion-button icon-only clear (click)="chart($event)">\n        <ion-icon name="ios-stats"></ion-icon>\n      </button>\n    </ion-buttons>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n  <ion-list>\n    <ion-item>\n      <ion-thumbnail item-start>\n        <img src="{{book.imageUrl}}">\n      </ion-thumbnail>\n      <h2 style="white-space:normal">\n        <a href="{{book.detailPageUrl ? book.detailPageUrl: \'#\'}}">{{book.bookTitle}}</a>\n      </h2>\n      <p>({{book.getReadPages()}} / {{book.pages}}) ページ</p>\n      <p>前回：{{book.getLastReadingStartDate() | date:\'y年M月d日(EEE)\'}}</p>\n    </ion-item>\n  </ion-list>\n  <form #editForm="ngForm">\n    <ion-list>\n      <ion-item>\n        <ion-label>開始日</ion-label>\n        <ion-datetime name="startDate" displayFormat="YYYY年MM月DD日" [ngModel]="startDate" [disabled]="true"></ion-datetime>\n      </ion-item>\n      <ion-item>\n        <ion-label>開始時間</ion-label>\n        <ion-datetime name="startTime" displayFormat="HH:mm:ss" [(ngModel)]="startTime" [disabled]="!isReading()"></ion-datetime>\n      </ion-item>\n      <ion-item>\n        <ion-label>開始ページ</ion-label>\n        <ion-input name="startPage" required type="number" min="0" inputmode="numeric" pattern="[0-9]*" [(ngModel)]="startPage" [disabled]="false"></ion-input> \n      </ion-item>\n    </ion-list>\n    <div style="text-align: center">\n        <button ion-button icon-only *ngIf="!isReading()" [disabled]="editForm.invalid" (click)="doStartReading($event)">\n          <ion-icon name="ios-play"></ion-icon>\n        </button>\n        <button ion-button icon-only *ngIf="isReading()" [disabled]="editForm.invalid" (click)="doStopReading($event)">\n          <ion-icon name="ios-pause"></ion-icon>\n        </button>\n    </div>\n  </form>\n  <div style="text-align: center; font-size: 70px; font-family: Helvetica, sans-serif;font-weight: bold;line-height: 190px;" *ngIf="isReading">\n    {{timerString}}\n  </div>\n\n</ion-content>\n'/*ion-inline-end:"/Users/s_kozake/develop/yomoo/yomoo/src/pages/reading-book/reading-book.html"*/
    }),
    __param(5, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["i" /* Optional */])()),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["i" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["j" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["k" /* AlertController */],
        __WEBPACK_IMPORTED_MODULE_4__providers__["a" /* AppLoadingProvider */],
        __WEBPACK_IMPORTED_MODULE_1__angular_common__["a" /* DatePipe */],
        __WEBPACK_IMPORTED_MODULE_5__ionic_native_twitter_connect__["a" /* TwitterConnect */]])
], ReadingBookPage);

//# sourceMappingURL=reading-book.js.map

/***/ })

});
//# sourceMappingURL=6.main.js.map