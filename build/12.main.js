webpackJsonp([12],{

/***/ 667:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BookListPageModule", function() { return BookListPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__book_list__ = __webpack_require__(834);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var BookListPageModule = (function () {
    function BookListPageModule() {
    }
    return BookListPageModule;
}());
BookListPageModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["a" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__book_list__["a" /* BookListPage */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__book_list__["a" /* BookListPage */]),
        ],
        exports: [
            __WEBPACK_IMPORTED_MODULE_2__book_list__["a" /* BookListPage */]
        ]
    })
], BookListPageModule);

//# sourceMappingURL=book-list.module.js.map

/***/ }),

/***/ 834:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BookListPage; });
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




var BookListPage = (function () {
    function BookListPage(navCtrl, popoverCtrl, modalCtrl, alertCtrl, menuCtrl, appReadingBookProvider, loading) {
        this.navCtrl = navCtrl;
        this.popoverCtrl = popoverCtrl;
        this.modalCtrl = modalCtrl;
        this.alertCtrl = alertCtrl;
        this.menuCtrl = menuCtrl;
        this.appReadingBookProvider = appReadingBookProvider;
        this.loading = loading;
        this.statusEnum = __WEBPACK_IMPORTED_MODULE_3__models__["a" /* AppReadingBook */].ReadingStatusEnum;
        this.readingState = this.statusEnum.UNREAD;
        this.books = [];
    }
    BookListPage.prototype.ionViewDidLoad = function () {
        this.loadBooks();
    };
    BookListPage.prototype.getBooks = function () {
        var _this = this;
        this.books = this.books.sort(function (a, b) {
            if (!a.getLastReadingLog() || !b.getLastReadingLog()) {
                return null;
            }
            else {
                return b.getLastReadingLog().compareTo(a.getLastReadingLog());
            }
        });
        return this.books.filter(function (books) { return books.readingStatus === _this.readingState; });
    };
    BookListPage.prototype.doAdd = function (event) {
        // let howToAddBookPopup = this.popoverCtrl.create(
        //   HowToAddBookPage, {}, {cssClass: "app-popover-box-shadow-none"});
        // howToAddBookPopup.present();
        // howToAddBookPopup.onDidDismiss((data: any, role: any) => {
        //   console.log(data);
        //   if (data == 'hand') {
        //     this.goToBookPage();
        //   } else if (data == 'amazon') {
        //     this.goToBookSearchPage();
        //   }
        // })
        // TODO
        // 時間もないので、一旦Amazon限定
        this.goToBookSearchPage();
    };
    BookListPage.prototype.doSelect = function (event, book) {
        var _this = this;
        this.navCtrl.push('ReadingBookPage', { book: book, callback: function (book) {
                var index = _this.books.findIndex(function (b) { return b.id == book.id; });
                if (index != -1) {
                    _this.books.splice(index, 1, book);
                }
            } });
    };
    BookListPage.prototype.doEdit = function (event, slidingItem, book) {
        this.goToBookPage(book).then(function () {
            slidingItem.close();
        });
    };
    BookListPage.prototype.doDelete = function (event, slidingItem, book) {
        var _this = this;
        slidingItem.close();
        var confirm = this.alertCtrl.create({
            title: '削除',
            message: '読書履歴を含む全てのデータを削除します。よろしいですか？',
            buttons: [
                {
                    text: 'はい',
                    handler: function () {
                        _this.deleteBook(book);
                    }
                },
                {
                    text: 'いいえ',
                    handler: function () {
                    }
                }
            ]
        });
        confirm.present();
    };
    BookListPage.prototype.doRefresh = function (refresher) {
        this.loadBooks().then(function (any) {
            refresher.complete();
        });
    };
    BookListPage.prototype.doUnread = function (event, slidingItem, book) {
        var _this = this;
        slidingItem.close();
        var confirm = this.alertCtrl.create({
            title: '未読',
            message: '全ての読書履歴を削除して未読にします。よろしいですか？',
            buttons: [
                {
                    text: 'はい',
                    handler: function () {
                        book.appReadingLogs = new Array();
                        book.readingStatus = __WEBPACK_IMPORTED_MODULE_3__models__["a" /* AppReadingBook */].ReadingStatusEnum.UNREAD;
                        _this.updateBook(book);
                    }
                },
                {
                    text: 'いいえ',
                    handler: function () {
                    }
                }
            ]
        });
        confirm.present();
    };
    BookListPage.prototype.doReading = function (event, slidingItem, book) {
        var _this = this;
        slidingItem.close();
        var confirm = this.alertCtrl.create({
            title: '読書中',
            message: '読書中にします。よろしいですか？',
            buttons: [
                {
                    text: 'はい',
                    handler: function () {
                        book.readingStatus = __WEBPACK_IMPORTED_MODULE_3__models__["a" /* AppReadingBook */].ReadingStatusEnum.READING;
                        _this.updateBook(book);
                    }
                },
                {
                    text: 'いいえ',
                    handler: function () {
                    }
                }
            ]
        });
        confirm.present();
    };
    BookListPage.prototype.doFinished = function (event, slidingItem, book) {
        var _this = this;
        slidingItem.close();
        var confirm = this.alertCtrl.create({
            title: '読了',
            message: '読了にします。よろしいですか？',
            buttons: [
                {
                    text: 'はい',
                    handler: function () {
                        book.readingStatus = __WEBPACK_IMPORTED_MODULE_3__models__["a" /* AppReadingBook */].ReadingStatusEnum.FINISHED;
                        _this.updateBook(book);
                    }
                },
                {
                    text: 'いいえ',
                    handler: function () {
                    }
                }
            ]
        });
        confirm.present();
    };
    BookListPage.prototype.goToBookPage = function (book) {
        var _this = this;
        return this.navCtrl.push('BookPage', { book: book, callback: function (book) {
                var index = _this.books.findIndex(function (b) { return b.id == book.id; });
                if (index != -1) {
                    _this.books.splice(index, 1, book);
                }
            } });
    };
    BookListPage.prototype.goToBookSearchPage = function () {
        var _this = this;
        var bookSearchPage = this.modalCtrl.create('BookSearchPage');
        bookSearchPage.present();
        bookSearchPage.onDidDismiss(function (data, role) {
            if (data) {
                var readingBook = new __WEBPACK_IMPORTED_MODULE_3__models__["a" /* AppReadingBook */]({
                    bookTitle: data.title,
                    imageUrl: data.mediumImageURL,
                    isbn: data.asin,
                    pages: data.numberOfPages ? data.numberOfPages : 0,
                    appReadingLogs: [],
                    readingStatus: __WEBPACK_IMPORTED_MODULE_3__models__["a" /* AppReadingBook */].ReadingStatusEnum.UNREAD,
                    detailPageUrl: data.detailPageURL
                });
                _this.createBook(readingBook);
            }
        });
    };
    BookListPage.prototype.createBook = function (book) {
        var _this = this;
        this.loading.start(function () {
            return _this.appReadingBookProvider.create(book).toPromise()
                .then(function (book) {
                _this.loadBooks();
            }).catch(function () {
                var alert = _this.alertCtrl.create({
                    title: 'エラー',
                    subTitle: '保存に失敗しました。',
                    buttons: ['OK']
                });
                alert.present();
            });
        });
    };
    BookListPage.prototype.updateBook = function (book) {
        var _this = this;
        this.loading.start(function () {
            return _this.appReadingBookProvider.update(book).toPromise()
                .then(function (response) { return _this.loadBooks(); }).catch(function () {
                var alert = _this.alertCtrl.create({
                    title: 'エラー',
                    subTitle: '保存に失敗しました。',
                    buttons: ['OK']
                });
                alert.present();
            });
        });
    };
    BookListPage.prototype.deleteBook = function (book) {
        var _this = this;
        this.loading.start(function () {
            return _this.appReadingBookProvider.delete(book.id).toPromise()
                .then(function (response) { return _this.loadBooks(); }).catch(function () {
                var alert = _this.alertCtrl.create({
                    title: 'エラー',
                    subTitle: '削除に失敗しました。',
                    buttons: ['OK']
                });
                alert.present();
            });
        });
    };
    BookListPage.prototype.loadBooks = function () {
        var _this = this;
        return this.loading.start(function () {
            return _this.appReadingBookProvider.getAll().toPromise().then(function (books) {
                _this.books = books;
                return Promise.resolve(books);
            }).catch(function (err) {
                // 上に投げると画面がエラーなるね
                // return Promise.reject(err);
                console.log("ERROR!!!");
                console.log(err);
                return null;
            });
        });
    };
    return BookListPage;
}());
BookListPage = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* IonicPage */])({
        name: 'BookListPage',
        segment: 'book-list'
    }),
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_6" /* Component */])({
        selector: 'page-book-list',template:/*ion-inline-start:"/Users/s_kozake/develop/yomoo/yomoo/src/pages/book-list/book-list.html"*/'<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-segment [(ngModel)]="readingState">\n      <ion-segment-button [value]="statusEnum.UNREAD">\n        未読\n      </ion-segment-button>\n      <ion-segment-button [value]="statusEnum.READING">\n        読書中\n      </ion-segment-button>\n      <ion-segment-button [value]="statusEnum.FINISHED">\n        読了\n      </ion-segment-button>\n    </ion-segment>\n    <ion-buttons end>\n      <button ion-button icon-only (click)="doAdd($event)">\n        <ion-icon name="ios-add-circle-outline"></ion-icon>\n      </button>\n    </ion-buttons>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  <ion-refresher (ionRefresh)="doRefresh($event)">\n    <ion-refresher-content>\n    </ion-refresher-content>\n  </ion-refresher>\n\n  <ion-list>\n    <ion-item-sliding #slidingItem *ngFor="let book of getBooks()">\n      <ion-item>\n        <ion-thumbnail item-start>\n          <img src="{{book.imageUrl}}">\n        </ion-thumbnail>\n        <h2 style="white-space:normal">{{book.bookTitle}}</h2>\n        <p>({{book.getReadPages()}} / {{book.pages}}) ページ</p>\n        <p>前回：{{book.getLastReadingStartDate() | date:\'y年M月d日(EEE)\'}}</p>\n        <button ion-button clear item-end (click)="doSelect($event, book)">\n          Yomoo!\n        </button>\n      </ion-item>\n      <ion-item-options side="left">\n        <button ion-button color="light" (click)="doUnread($event, slidingItem, book)" *ngIf="readingState == statusEnum.READING || readingState == statusEnum.FINISHED">\n          <ion-icon name="list"></ion-icon>\n          未読\n        </button>\n        <button ion-button color="primary" (click)="doReading($event, slidingItem, book)" *ngIf="readingState == statusEnum.FINISHED">\n          <ion-icon name="list"></ion-icon>\n          読書中\n        </button>\n        <button ion-button color="secondary" (click)="doFinished($event, slidingItem, book)" *ngIf="readingState == statusEnum.UNREAD || readingState == statusEnum.READING">\n          <ion-icon name="list"></ion-icon>\n          読了\n        </button>\n      </ion-item-options>\n      <ion-item-options side="right">\n        <button ion-button color="primary" (click)="doEdit($event, slidingItem, book)">\n          <ion-icon name="create"></ion-icon>\n          編集\n        </button>\n        <button ion-button color="danger" (click)="doDelete($event, slidingItem, book)">\n          <ion-icon name="trash"></ion-icon>\n          削除\n        </button>\n      </ion-item-options>\n    </ion-item-sliding>\n  </ion-list>\n</ion-content>\n'/*ion-inline-end:"/Users/s_kozake/develop/yomoo/yomoo/src/pages/book-list/book-list.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* PopoverController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* ModalController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* AlertController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* MenuController */],
        __WEBPACK_IMPORTED_MODULE_2__providers__["d" /* AppReadingBookProvider */],
        __WEBPACK_IMPORTED_MODULE_2__providers__["a" /* AppLoadingProvider */]])
], BookListPage);

//# sourceMappingURL=book-list.js.map

/***/ })

});
//# sourceMappingURL=12.main.js.map