webpackJsonp([11],{

/***/ 669:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BookPageModule", function() { return BookPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__book__ = __webpack_require__(837);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var BookPageModule = (function () {
    function BookPageModule() {
    }
    return BookPageModule;
}());
BookPageModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["a" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__book__["a" /* BookPage */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__book__["a" /* BookPage */]),
        ],
        exports: [
            __WEBPACK_IMPORTED_MODULE_2__book__["a" /* BookPage */]
        ]
    })
], BookPageModule);

//# sourceMappingURL=book.module.js.map

/***/ }),

/***/ 837:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BookPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__models__ = __webpack_require__(87);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var BookPage = (function () {
    function BookPage(params, 
        // private viewCtrl: ViewController,
        navCtrl, alertCtrl, appReadingBookProvider, loading) {
        this.params = params;
        this.navCtrl = navCtrl;
        this.alertCtrl = alertCtrl;
        this.appReadingBookProvider = appReadingBookProvider;
        this.loading = loading;
        this.book = new __WEBPACK_IMPORTED_MODULE_3__models__["a" /* AppReadingBook */](params.data.book);
        this.callback = params.data.callback;
    }
    BookPage.prototype.doSave = function (event) {
        var _this = this;
        this.loading.start(function () {
            if (_this.book.id) {
                return _this.appReadingBookProvider.update(_this.book).toPromise().then(function (book) {
                    _this.callback(_this.book);
                    _this.navCtrl.pop();
                }).catch(function () {
                    var alert = _this.alertCtrl.create({
                        title: 'エラー',
                        subTitle: '保存に失敗しました。',
                        buttons: ['OK']
                    });
                    alert.present();
                });
            }
            else {
                return _this.appReadingBookProvider.create(_this.book).toPromise().then(function (book) {
                    _this.callback(_this.book);
                    _this.navCtrl.pop();
                }).catch(function () {
                    var alert = _this.alertCtrl.create({
                        title: 'エラー',
                        subTitle: '保存に失敗しました。',
                        buttons: ['OK']
                    });
                    alert.present();
                });
            }
        });
    };
    BookPage.prototype.doAdd = function (event, book) {
        this.navCtrl.push('LogPage', { log: null, callback: function (log) {
                book.appReadingLogs.push(log);
            } });
    };
    BookPage.prototype.doEdit = function (event, slidingItem, book, log) {
        this.navCtrl.push('LogPage', { log: log, callback: function (log) {
                var index = book.appReadingLogs.findIndex(function (l) { return l.id == log.id; });
                if (index != -1) {
                    book.appReadingLogs.splice(index, 1, log);
                }
            } }).then(function () {
            slidingItem.close();
        });
    };
    BookPage.prototype.doDelete = function (event, slidingItem, book, log) {
        slidingItem.close();
        var index = book.appReadingLogs.findIndex(function (l) { return l.id == log.id; });
        if (index != -1) {
            book.appReadingLogs.splice(index, 1);
        }
    };
    return BookPage;
}());
BookPage = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* IonicPage */])({
        name: 'BookPage',
        segment: 'book'
    }),
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_6" /* Component */])({
        selector: 'page-book',template:/*ion-inline-start:"/Users/s_kozake/develop/yomoo/yomoo/src/pages/book/book.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>\n      編集\n    </ion-title>\n    <ion-buttons end>\n      <button ion-button icon-only clear [disabled]="editForm.invalid" (click)="doSave($event)">\n        <ion-icon name="ios-checkmark"></ion-icon>\n      </button>\n    </ion-buttons>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n  <ion-list>\n    <ion-item>\n      <ion-thumbnail item-start>\n        <img src="{{book.imageUrl}}">\n      </ion-thumbnail>\n      <h2 style="white-space:normal">\n        <a href="{{book.detailPageUrl ? book.detailPageUrl: \'#\'}}">{{book.bookTitle}}</a>\n      </h2>\n      <p>ISBN：{{this.book.isbn}}</p>\n    </ion-item>\n  </ion-list>\n  <form #editForm="ngForm">\n    <ion-list>\n      <ion-item>\n        <ion-label>タイトル</ion-label>\n        <ion-input name="bookTitle" type="text" required [(ngModel)]="book.bookTitle"></ion-input>\n      </ion-item>\n      <ion-item>\n        <ion-label>ページ数</ion-label>\n        <ion-input name="pages" type="number" required min="0" inputmode="numeric" pattern="[0-9]*" [(ngModel)]="book.pages"></ion-input>\n      </ion-item>\n      <ion-list-header>\n        <ion-toolbar>\n          読書履歴\n          <ion-buttons end>\n            <button ion-button icon-only clear\n                    (click)="doAdd($event, book)">\n              <ion-icon name="ios-add-circle-outline"></ion-icon>\n            </button>\n          </ion-buttons>\n        </ion-toolbar>\n      </ion-list-header>\n      <ion-item-sliding #slidingItem *ngFor="let log of book.getSortedAppReadingLogs().reverse()">\n        <ion-item>\n          <p>{{log.startDate | date:\'y年M月d日(EEE) HH:mm:ss\'}} 〜 {{log.endDate | date:\'y年M月d日(EEE) HH:mm:ss\'}}</p>\n          <p>{{log.startPage}}ページ 〜 {{log.endPage}}ページ</p>\n        </ion-item>\n        <ion-item-options side="right">\n          <button ion-button color="primary" (click)="doEdit($event, slidingItem, book, log)">\n            <ion-icon name="create"></ion-icon>\n            編集\n          </button>\n          <button ion-button color="danger" (click)="doDelete($event, slidingItem, book, log)">\n            <ion-icon name="trash"></ion-icon>\n            削除\n          </button>\n        </ion-item-options>\n      </ion-item-sliding>\n    </ion-list>\n  </form>\n</ion-content>\n'/*ion-inline-end:"/Users/s_kozake/develop/yomoo/yomoo/src/pages/book/book.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* AlertController */],
        __WEBPACK_IMPORTED_MODULE_2__providers__["d" /* AppReadingBookProvider */],
        __WEBPACK_IMPORTED_MODULE_2__providers__["a" /* AppLoadingProvider */]])
], BookPage);

//# sourceMappingURL=book.js.map

/***/ })

});
//# sourceMappingURL=11.main.js.map