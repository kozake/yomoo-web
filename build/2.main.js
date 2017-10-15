webpackJsonp([2],{

/***/ 676:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReadingChartPageModule", function() { return ReadingChartPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_chart_chart_module__ = __webpack_require__(830);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__reading_chart__ = __webpack_require__(843);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var ReadingChartPageModule = (function () {
    function ReadingChartPageModule() {
    }
    return ReadingChartPageModule;
}());
ReadingChartPageModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["a" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_3__reading_chart__["a" /* ReadingChartPage */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_3__reading_chart__["a" /* ReadingChartPage */]),
            __WEBPACK_IMPORTED_MODULE_2__components_chart_chart_module__["a" /* ChartComponentModule */],
        ],
        exports: [
            __WEBPACK_IMPORTED_MODULE_3__reading_chart__["a" /* ReadingChartPage */]
        ]
    })
], ReadingChartPageModule);

//# sourceMappingURL=reading-chart.module.js.map

/***/ }),

/***/ 830:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChartComponentModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__chart__ = __webpack_require__(831);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var ChartComponentModule = (function () {
    function ChartComponentModule() {
    }
    return ChartComponentModule;
}());
ChartComponentModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["a" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__chart__["a" /* ChartComponent */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* IonicModule */],
        ],
        exports: [
            __WEBPACK_IMPORTED_MODULE_2__chart__["a" /* ChartComponent */]
        ]
    })
], ChartComponentModule);

//# sourceMappingURL=chart.module.js.map

/***/ }),

/***/ 831:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChartComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__utils_DateUtils__ = __webpack_require__(313);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ChartComponent = (function () {
    function ChartComponent(el) {
        this.el = el;
        this.groups = {};
    }
    ChartComponent.prototype.ngAfterViewInit = function () {
        this.initChart();
        this.initialized = true;
    };
    ChartComponent.prototype.initChart = function () {
        var container = this.el.nativeElement.children[0];
        this.options.moment = function (date) {
            return vis.moment(date).utcOffset(__WEBPACK_IMPORTED_MODULE_1__utils_DateUtils__["a" /* DateUtils */].getTimezoneOffsetStr());
        };
        var graph2d = new vis.Graph2d(container, new vis.DataSet(this.items), new vis.DataSet(this.groups), this.options);
    };
    return ChartComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* Input */])(),
    __metadata("design:type", String)
], ChartComponent.prototype, "style", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* Input */])(),
    __metadata("design:type", String)
], ChartComponent.prototype, "chartId", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* Input */])(),
    __metadata("design:type", Object)
], ChartComponent.prototype, "items", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* Input */])(),
    __metadata("design:type", Object)
], ChartComponent.prototype, "groups", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* Input */])(),
    __metadata("design:type", Object)
], ChartComponent.prototype, "options", void 0);
ChartComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_6" /* Component */])({
        selector: 'chart',template:/*ion-inline-start:"/Users/s_kozake/develop/yomoo/yomoo/src/components/chart/chart.html"*/'<div [attr.id]="chartId" [ngStyle]="style"></div>\n'/*ion-inline-end:"/Users/s_kozake/develop/yomoo/yomoo/src/components/chart/chart.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["s" /* ElementRef */]])
], ChartComponent);

//# sourceMappingURL=chart.js.map

/***/ }),

/***/ 843:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ReadingChartPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(49);
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




var ReadingChartPage = (function () {
    function ReadingChartPage(params, navCtrl, datePipe) {
        var _this = this;
        this.params = params;
        this.navCtrl = navCtrl;
        this.datePipe = datePipe;
        if (params.data) {
            this.book = params.data;
        }
        this.items = [];
        var totalPageRange = new __WEBPACK_IMPORTED_MODULE_3__models__["e" /* PageRanges */]();
        this.book.getReadPageRanges().forEach(function (readPage) {
            totalPageRange.margeAll(readPage.pageRanges);
            _this.items.push({
                x: _this.datePipe.transform(readPage.startDate, 'y-MM-ddTHH:mm:ss'),
                end: _this.datePipe.transform(readPage.endDate, 'y-MM-ddTHH:mm:ss'),
                y: readPage.pageRanges.getReadPages(),
                group: 0
            });
            _this.items.push({
                x: _this.datePipe.transform(readPage.endDate, 'y-MM-ddTHH:mm:ss'),
                y: totalPageRange.getReadPages(),
                group: 1
            });
        });
        this.groups = [
            {
                id: 0,
                content: '読書ページ数',
                options: {
                    style: 'bar'
                }
            },
            {
                id: 1,
                content: '読書済みページ数',
                options: {}
            }
        ];
        var minDate = this.book.getMinReadingDate();
        var maxDate = this.book.getMaxReadingDate();
        this.options = {
            width: '100%',
            legend: {
                left: {
                    position: "top-left"
                },
                right: {
                    position: "top-right"
                }
            },
            dataAxis: {
                left: {
                    range: {
                        min: 0, max: this.book.pages
                    }
                }
            },
            drawPoints: false,
            interpolation: {
                enabled: false,
            },
            // locale: navigator.language,
            start: this.datePipe.transform(minDate, 'y-MM-ddT00:00'),
            end: this.datePipe.transform(maxDate, 'y-MM-ddT23:59')
        };
    }
    return ReadingChartPage;
}());
ReadingChartPage = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["h" /* IonicPage */])({
        name: 'ReadingChartPage',
        segment: 'reading-chart'
    }),
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_6" /* Component */])({
        selector: 'reading-chart',template:/*ion-inline-start:"/Users/s_kozake/develop/yomoo/yomoo/src/pages/reading-chart/reading-chart.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>読書グラフ</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n  <ion-list>\n    <ion-item>\n      <ion-thumbnail item-start>\n        <img src="{{book.imageUrl}}">\n      </ion-thumbnail>\n      <h2 style="white-space:normal">\n        <a href="{{book.detailPageUrl ? book.detailPageUrl: \'#\'}}">{{book.bookTitle}}</a>\n      </h2>\n      <p>({{book.getReadPages()}} / {{book.pages}}) ページ</p>\n      <p>前回：{{book.getLastReadingStartDate() | date:\'y年M月d日(EEE)\'}}</p>\n    </ion-item>\n  </ion-list>\n\n  <chart chartId="chart" style="" [items]="items" [groups]="groups" [options]="options"></chart>\n  <!-- <p-chart type="bar" [data]="data"></p-chart> -->\n\n</ion-content>\n'/*ion-inline-end:"/Users/s_kozake/develop/yomoo/yomoo/src/pages/reading-chart/reading-chart.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["i" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["j" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_1__angular_common__["a" /* DatePipe */]])
], ReadingChartPage);

//# sourceMappingURL=reading-chart.js.map

/***/ })

});
//# sourceMappingURL=2.main.js.map