(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/animals.ts":
/*!****************************!*\
  !*** ./src/app/animals.ts ***!
  \****************************/
/*! exports provided: ANIMALS */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ANIMALS", function() { return ANIMALS; });
const ANIMALS = [
    { id: 1, leftpart: 'dog', rightpart: 'mammal' },
    { id: 2, leftpart: 'blickbird', rightpart: 'bird' },
    { id: 3, leftpart: 'spider', rightpart: 'insect' },
    { id: 4, leftpart: 'turtle', rightpart: 'reptile' },
    { id: 5, leftpart: 'guppy', rightpart: 'fish' },
];


/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");




const routes = [];
class AppRoutingModule {
}
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _game2_game2_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./game2/game2.component */ "./src/app/game2/game2.component.ts");



class AppComponent {
    constructor() {
        this.title = 'game';
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 4, vars: 0, consts: [[2, "text-align", "center"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Learning is fun!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "app-game2");
    } }, directives: [_game2_game2_component__WEBPACK_IMPORTED_MODULE_1__["Game2Component"]], styles: ["h1[_ngcontent-%COMP%] {\n  background-color: grey;\n  margin-top: 0;\n  padding: 20px;\n  font-size: 1.6em;\n  font-family: Arial;\n  color: white;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Msc0JBQUE7RUFDQSxhQUFBO0VBQ0EsYUFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0FBQ0QiLCJmaWxlIjoic3JjL2FwcC9hcHAuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJoMXtcblx0YmFja2dyb3VuZC1jb2xvcjogZ3JleTtcblx0bWFyZ2luLXRvcDowO1xuXHRwYWRkaW5nOiAyMHB4O1xuXHRmb250LXNpemU6MS42ZW07XG5cdGZvbnQtZmFtaWx5OiBBcmlhbDtcblx0Y29sb3I6d2hpdGU7XG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-root',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.scss']
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _matching_game_matching_game_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./matching-game/matching-game.component */ "./src/app/matching-game/matching-game.component.ts");
/* harmony import */ var _game1_game1_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./game1/game1.component */ "./src/app/game1/game1.component.ts");
/* harmony import */ var _game2_game2_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./game2/game2.component */ "./src/app/game2/game2.component.ts");
/* harmony import */ var _shuffle_pipe__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./shuffle.pipe */ "./src/app/shuffle.pipe.ts");









class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
        _matching_game_matching_game_component__WEBPACK_IMPORTED_MODULE_4__["MatchingGameComponent"],
        _game1_game1_component__WEBPACK_IMPORTED_MODULE_5__["Game1Component"],
        _game2_game2_component__WEBPACK_IMPORTED_MODULE_6__["Game2Component"],
        _shuffle_pipe__WEBPACK_IMPORTED_MODULE_7__["ShufflePipe"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [
                    _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
                    _matching_game_matching_game_component__WEBPACK_IMPORTED_MODULE_4__["MatchingGameComponent"],
                    _game1_game1_component__WEBPACK_IMPORTED_MODULE_5__["Game1Component"],
                    _game2_game2_component__WEBPACK_IMPORTED_MODULE_6__["Game2Component"],
                    _shuffle_pipe__WEBPACK_IMPORTED_MODULE_7__["ShufflePipe"]
                ],
                imports: [
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                    _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
                ],
                providers: [],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/game1/game1.component.ts":
/*!******************************************!*\
  !*** ./src/app/game1/game1.component.ts ***!
  \******************************************/
/*! exports provided: Game1Component */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Game1Component", function() { return Game1Component; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _animals__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../animals */ "./src/app/animals.ts");
/* harmony import */ var _matching_game_matching_game_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../matching-game/matching-game.component */ "./src/app/matching-game/matching-game.component.ts");




function Game1Component_ng_template_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const animalPair_r4 = ctx.contextPair;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("selected", ctx_r1.leftpartSelectedId == animalPair_r4.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", animalPair_r4.leftpart, " ");
} }
function Game1Component_ng_template_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const animalPair_r5 = ctx.contextPair;
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("selected", ctx_r3.rightpartSelectedId == animalPair_r5.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", animalPair_r5.rightpart, " ");
} }
class Game1Component {
    constructor() {
        this.animals = _animals__WEBPACK_IMPORTED_MODULE_1__["ANIMALS"];
        this.leftpartSelectedId = -1;
        this.rightpartSelectedId = -1;
    }
    ngOnInit() {
    }
    onLeftpartSelected(id) {
        this.leftpartSelectedId = id;
    }
    onRightpartSelected(id) {
        this.rightpartSelectedId = id;
    }
    onLeftpartUnselected() {
        this.leftpartSelectedId = -1;
    }
    onRightpartUnselected() {
        this.rightpartSelectedId = -1;
    }
}
Game1Component.ɵfac = function Game1Component_Factory(t) { return new (t || Game1Component)(); };
Game1Component.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: Game1Component, selectors: [["app-game1"]], decls: 5, vars: 1, consts: [[3, "pairs", "leftpartSelected", "rightpartSelected", "leftpartUnselected", "rightpartUnselected"], ["leftpart", ""], ["rightpart", ""]], template: function Game1Component_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "app-matching-game", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("leftpartSelected", function Game1Component_Template_app_matching_game_leftpartSelected_0_listener($event) { return ctx.onLeftpartSelected($event); })("rightpartSelected", function Game1Component_Template_app_matching_game_rightpartSelected_0_listener($event) { return ctx.onRightpartSelected($event); })("leftpartUnselected", function Game1Component_Template_app_matching_game_leftpartUnselected_0_listener() { return ctx.onLeftpartUnselected(); })("rightpartUnselected", function Game1Component_Template_app_matching_game_rightpartUnselected_0_listener() { return ctx.onRightpartUnselected(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, Game1Component_ng_template_1_Template, 2, 3, "ng-template", null, 1, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, Game1Component_ng_template_3_Template, 2, 3, "ng-template", null, 2, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("pairs", ctx.animals);
    } }, directives: [_matching_game_matching_game_component__WEBPACK_IMPORTED_MODULE_2__["MatchingGameComponent"]], styles: [".selected[_ngcontent-%COMP%] {\n  font-weight: bold;\n}\n\nbutton[_ngcontent-%COMP%] {\n  width: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZ2FtZTEvZ2FtZTEuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDQyxpQkFBQTtBQUNEOztBQUdBO0VBQ0MsV0FBQTtBQUFEIiwiZmlsZSI6InNyYy9hcHAvZ2FtZTEvZ2FtZTEuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuc2VsZWN0ZWR7XG5cdGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuXG5cbmJ1dHRvbntcblx0d2lkdGg6IDEwMCU7XG59XG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](Game1Component, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-game1',
                templateUrl: './game1.component.html',
                styleUrls: ['./game1.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/game2/game2.component.ts":
/*!******************************************!*\
  !*** ./src/app/game2/game2.component.ts ***!
  \******************************************/
/*! exports provided: Game2Component */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Game2Component", function() { return Game2Component; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _animals__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../animals */ "./src/app/animals.ts");
/* harmony import */ var _matching_game_matching_game_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../matching-game/matching-game.component */ "./src/app/matching-game/matching-game.component.ts");




function Game2Component_ng_template_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const animalPair_r4 = ctx.contextPair;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("selected", ctx_r1.leftpartSelectedId == animalPair_r4.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](animalPair_r4.leftpart);
} }
function Game2Component_ng_template_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const animalPair_r5 = ctx.contextPair;
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("selected", ctx_r3.rightpartSelectedId == animalPair_r5.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](animalPair_r5.rightpart);
} }
class Game2Component {
    constructor() {
        this.animals = _animals__WEBPACK_IMPORTED_MODULE_1__["ANIMALS"];
        this.leftpartSelectedId = -1;
        this.rightpartSelectedId = -1;
    }
    ngOnInit() {
    }
    onLeftpartSelected(id) {
        this.leftpartSelectedId = id;
    }
    onRightpartSelected(id) {
        this.rightpartSelectedId = id;
    }
    onLeftpartUnselected() {
        this.leftpartSelectedId = -1;
    }
    onRightpartUnselected() {
        this.rightpartSelectedId = -1;
    }
}
Game2Component.ɵfac = function Game2Component_Factory(t) { return new (t || Game2Component)(); };
Game2Component.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: Game2Component, selectors: [["app-game2"]], decls: 5, vars: 1, consts: [[3, "pairs", "leftpartSelected", "rightpartSelected", "leftpartUnselected", "rightpartUnselected"], ["leftpart", ""], ["rightpart", ""], [1, "myAnimal", "left"], [1, "myAnimal", "right"]], template: function Game2Component_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "app-matching-game", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("leftpartSelected", function Game2Component_Template_app_matching_game_leftpartSelected_0_listener($event) { return ctx.onLeftpartSelected($event); })("rightpartSelected", function Game2Component_Template_app_matching_game_rightpartSelected_0_listener($event) { return ctx.onRightpartSelected($event); })("leftpartUnselected", function Game2Component_Template_app_matching_game_leftpartUnselected_0_listener() { return ctx.onLeftpartUnselected(); })("rightpartUnselected", function Game2Component_Template_app_matching_game_rightpartUnselected_0_listener() { return ctx.onRightpartUnselected(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, Game2Component_ng_template_1_Template, 2, 3, "ng-template", null, 1, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, Game2Component_ng_template_3_Template, 2, 3, "ng-template", null, 2, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("pairs", ctx.animals);
    } }, directives: [_matching_game_matching_game_component__WEBPACK_IMPORTED_MODULE_2__["MatchingGameComponent"]], styles: [".myAnimal[_ngcontent-%COMP%] {\n  width: 80px;\n  height: 80px;\n  color: white;\n  border-radius: 50%;\n  line-height: 80px;\n  text-align: center;\n  cursor: pointer;\n}\n\n.left[_ngcontent-%COMP%] {\n  background-color: #68ad68;\n}\n\n.right[_ngcontent-%COMP%] {\n  background-color: #a83295;\n}\n\n.selected[_ngcontent-%COMP%] {\n  background-color: grey;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZ2FtZTIvZ2FtZTIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0E7RUFDQyxXQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDRyxlQUFBO0FBQUo7O0FBR0E7RUFDQyx5QkFBQTtBQUFEOztBQUlBO0VBQ0MseUJBQUE7QUFERDs7QUFJQTtFQUNDLHNCQUFBO0FBREQiLCJmaWxlIjoic3JjL2FwcC9nYW1lMi9nYW1lMi5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi8vICoge3RleHQtYWxpZ246IGNlbnRlcjt9XG4ubXlBbmltYWx7XG5cdHdpZHRoOiA4MHB4O1xuXHRoZWlnaHQ6IDgwcHg7XG5cdGNvbG9yOiB3aGl0ZTtcblx0Ym9yZGVyLXJhZGl1czogNTAlO1xuXHRsaW5lLWhlaWdodDogODBweDtcblx0dGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLmxlZnR7XHRcblx0YmFja2dyb3VuZC1jb2xvcjogIzY4YWQ2ODtcbn1cblxuXG4ucmlnaHR7XHRcblx0YmFja2dyb3VuZC1jb2xvcjogI2E4MzI5NTtcbn1cblxuLnNlbGVjdGVke1xuXHRiYWNrZ3JvdW5kLWNvbG9yOiBncmV5O1xufVxuXG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](Game2Component, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-game2',
                templateUrl: './game2.component.html',
                styleUrls: ['./game2.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/matching-game/matching-game.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/matching-game/matching-game.component.ts ***!
  \**********************************************************/
/*! exports provided: MatchingGameComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatchingGameComponent", function() { return MatchingGameComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _shuffle_pipe__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../shuffle.pipe */ "./src/app/shuffle.pipe.ts");






const _c0 = ["leftpart"];
const _c1 = ["rightpart"];
function MatchingGameComponent_div_1_div_2_ng_template_1_Template(rf, ctx) { }
const _c2 = function (a0) { return { contextPair: a0 }; };
function MatchingGameComponent_div_1_div_2_Template(rf, ctx) { if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MatchingGameComponent_div_1_div_2_Template_div_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r7); const pair_r4 = ctx.$implicit; const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r6.assignmentStream.next({ pair: pair_r4, side: "left" }); })("mousedown", function MatchingGameComponent_div_1_div_2_Template_div_mousedown_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r7); const pair_r4 = ctx.$implicit; const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r8.leftpartSelected.emit(pair_r4.id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, MatchingGameComponent_div_1_div_2_ng_template_1_Template, 0, 0, "ng-template", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const pair_r4 = ctx.$implicit;
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", ctx_r2.leftpart_temp)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](2, _c2, pair_r4));
} }
function MatchingGameComponent_div_1_div_4_ng_template_1_Template(rf, ctx) { }
function MatchingGameComponent_div_1_div_4_Template(rf, ctx) { if (rf & 1) {
    const _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MatchingGameComponent_div_1_div_4_Template_div_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r12); const pair_r9 = ctx.$implicit; const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r11.assignmentStream.next({ pair: pair_r9, side: "right" }); })("mousedown", function MatchingGameComponent_div_1_div_4_Template_div_mousedown_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r12); const pair_r9 = ctx.$implicit; const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r13.rightpartSelected.emit(pair_r9.id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, MatchingGameComponent_div_1_div_4_ng_template_1_Template, 0, 0, "ng-template", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const pair_r9 = ctx.$implicit;
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", ctx_r3.rightpart_temp)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](2, _c2, pair_r9));
} }
function MatchingGameComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, MatchingGameComponent_div_1_div_2_Template, 2, 4, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, MatchingGameComponent_div_1_div_4_Template, 2, 4, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](5, "shuffle");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r0.unsolvedPairs);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](5, 2, ctx_r0.unsolvedPairs, ctx_r0.test));
} }
function MatchingGameComponent_div_2_div_1_ng_template_1_Template(rf, ctx) { }
function MatchingGameComponent_div_2_div_1_ng_template_3_Template(rf, ctx) { }
function MatchingGameComponent_div_2_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, MatchingGameComponent_div_2_div_1_ng_template_1_Template, 0, 0, "ng-template", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, MatchingGameComponent_div_2_div_1_ng_template_3_Template, 0, 0, "ng-template", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const pair_r15 = ctx.$implicit;
    const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", ctx_r14.leftpart_temp)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](4, _c2, pair_r15));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", ctx_r14.rightpart_temp)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](6, _c2, pair_r15));
} }
function MatchingGameComponent_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, MatchingGameComponent_div_2_div_1_Template, 4, 8, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r1.solvedPairs);
} }
class MatchingGameComponent {
    constructor() {
        this.solvedPairs = [];
        this.unsolvedPairs = [];
        this.leftpartSelected = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.rightpartSelected = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.leftpartUnselected = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.rightpartUnselected = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.assignmentStream = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
        this.solvedStream = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Observable"]();
        this.failedStream = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Observable"]();
    }
    ngOnInit() {
        for (let i = 0; i < this.pairs.length; i++) {
            this.unsolvedPairs.push(this.pairs[i]);
        }
        const stream = this.assignmentStream.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["pairwise"])(), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["filter"])(comb => comb[0].side != comb[1].side));
        const [stream1, stream2] = Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["partition"])(comb => comb[0].pair === comb[1].pair)(stream);
        this.solvedStream = stream1.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(comb => comb[0].pair));
        this.failedStream = stream2.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(comb => comb[0].side));
        this.s_Subscription = this.solvedStream.subscribe(pair => this.handleSolvedAssignment(pair));
        this.f_Subscription = this.failedStream.subscribe((side) => this.handleFailedAssignment(side));
    }
    ngOnDestroy() {
        this.s_Subscription.unsubscribe();
        this.f_Subscription.unsubscribe();
    }
    handleSolvedAssignment(pair) {
        this.solvedPairs.push(pair);
        this.remove(this.unsolvedPairs, pair);
        this.leftpartUnselected.emit();
        this.rightpartUnselected.emit();
        //workaround to force update of the shuffle pipe
        this.test = Math.random() * 10;
    }
    handleFailedAssignment(side1) {
        if (side1 == "left") {
            this.leftpartUnselected.emit();
        }
        else {
            this.rightpartUnselected.emit();
        }
    }
    remove(array, pair) {
        let index = array.indexOf(pair);
        if (index > -1) {
            array.splice(index, 1);
        }
    }
}
MatchingGameComponent.ɵfac = function MatchingGameComponent_Factory(t) { return new (t || MatchingGameComponent)(); };
MatchingGameComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: MatchingGameComponent, selectors: [["app-matching-game"]], contentQueries: function MatchingGameComponent_ContentQueries(rf, ctx, dirIndex) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵcontentQuery"](dirIndex, _c0, true);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵcontentQuery"](dirIndex, _c1, true);
    } if (rf & 2) {
        var _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.leftpart_temp = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.rightpart_temp = _t.first);
    } }, inputs: { pairs: "pairs" }, outputs: { leftpartSelected: "leftpartSelected", rightpartSelected: "rightpartSelected", leftpartUnselected: "leftpartUnselected", rightpartUnselected: "rightpartUnselected" }, decls: 3, vars: 2, consts: [["id", "game"], ["class", "container unsolved", 4, "ngIf"], ["class", "container solved", 4, "ngIf"], [1, "container", "unsolved"], [1, "pair_items", "left"], ["class", "item", 3, "click", "mousedown", 4, "ngFor", "ngForOf"], [1, "pair_items", "right"], [1, "item", 3, "click", "mousedown"], [3, "ngTemplateOutlet", "ngTemplateOutletContext"], [1, "container", "solved"], ["class", "pair", 4, "ngFor", "ngForOf"], [1, "pair"], [1, "connector"]], template: function MatchingGameComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, MatchingGameComponent_div_1_Template, 6, 5, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, MatchingGameComponent_div_2_Template, 2, 1, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.unsolvedPairs.length > 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.solvedPairs.length > 0);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgTemplateOutlet"]], pipes: [_shuffle_pipe__WEBPACK_IMPORTED_MODULE_4__["ShufflePipe"]], styles: ["#game[_ngcontent-%COMP%] {\n  width: 90%;\n  margin: 0 auto;\n}\n\n.container[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  flex-wrap: wrap;\n}\n\n.unsolved[_ngcontent-%COMP%] {\n  margin-bottom: 25px;\n  justify-content: center;\n}\n\n.solved[_ngcontent-%COMP%] {\n  margin-right: 25px;\n}\n\n.pair_items[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n  flex-wrap: wrap;\n  justify-content: center;\n  margin: auto;\n  margin-bottom: 25px;\n  padding: 25px;\n  border-radius: 5px;\n  border: 1px solid black;\n}\n\n.item[_ngcontent-%COMP%] {\n  margin-right: 10px;\n}\n\n.pair[_ngcontent-%COMP%] {\n  margin-bottom: 25px;\n}\n\n.connector[_ngcontent-%COMP%] {\n  height: 5px;\n  background-color: lightgreen;\n}\n\n@media screen and (min-width: 600px) {\n  #game[_ngcontent-%COMP%] {\n    width: 50%;\n    margin: 0 auto;\n  }\n\n  .container[_ngcontent-%COMP%] {\n    flex-direction: row;\n  }\n\n  .solved[_ngcontent-%COMP%] {\n    margin-right: 10px;\n  }\n\n  .pair_items[_ngcontent-%COMP%] {\n    width: 30%;\n    flex-direction: column;\n  }\n\n  .item[_ngcontent-%COMP%] {\n    margin-right: 0;\n    margin-left: 100px;\n    margin-bottom: 10px;\n  }\n\n  .pair[_ngcontent-%COMP%] {\n    margin-right: 25px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWF0Y2hpbmctZ2FtZS9tYXRjaGluZy1nYW1lLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0MsVUFBQTtFQUNBLGNBQUE7QUFDRDs7QUFFQTtFQUNDLGFBQUE7RUFDQSxzQkFBQTtFQUNBLGVBQUE7QUFDRDs7QUFJQTtFQUNDLG1CQUFBO0VBQ0EsdUJBQUE7QUFERDs7QUFLQTtFQUNDLGtCQUFBO0FBRkQ7O0FBS0E7RUFFQyxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0VBQ0EsdUJBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7RUFDQSxhQUFBO0VBQ0Esa0JBQUE7RUFDQSx1QkFBQTtBQUhEOztBQU1BO0VBQ0Msa0JBQUE7QUFIRDs7QUFNQTtFQUdDLG1CQUFBO0FBTEQ7O0FBUUE7RUFHQyxXQUFBO0VBQ0EsNEJBQUE7QUFQRDs7QUFXQTtFQUVDO0lBQ0MsVUFBQTtJQUNBLGNBQUE7RUFUQTs7RUFZRDtJQUNDLG1CQUFBO0VBVEE7O0VBWUQ7SUFDQyxrQkFBQTtFQVRBOztFQVlEO0lBQ0MsVUFBQTtJQUNBLHNCQUFBO0VBVEE7O0VBWUQ7SUFDQyxlQUFBO0lBQ0Esa0JBQUE7SUFDQSxtQkFBQTtFQVRBOztFQVlEO0lBQ0Msa0JBQUE7RUFUQTtBQUNGIiwiZmlsZSI6InNyYy9hcHAvbWF0Y2hpbmctZ2FtZS9tYXRjaGluZy1nYW1lLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiI2dhbWV7XHRcblx0d2lkdGg6IDkwJTtcblx0bWFyZ2luOiAwIGF1dG87XG59XG5cbi5jb250YWluZXJ7XHRcblx0ZGlzcGxheTpmbGV4O1xuXHRmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuXHRmbGV4LXdyYXA6IHdyYXA7XG5cdC8vIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcblx0Ly8gYm9yZGVyLXN0eWxlOiBkYXNoZWQ7XG59XG5cbi51bnNvbHZlZHtcblx0bWFyZ2luLWJvdHRvbToyNXB4O1xuXHRqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcblx0Ly8gYm9yZGVyLXN0eWxlOiBkYXNoZWQ7XG59XG5cbi5zb2x2ZWR7XG5cdG1hcmdpbi1yaWdodDogMjVweDtcbn1cblxuLnBhaXJfaXRlbXN7XG5cdC8vIG1hcmdpbi1sZWZ0OiAyMDBweDtcblx0ZGlzcGxheTogZmxleDtcblx0ZmxleC1kaXJlY3Rpb246IHJvdztcblx0ZmxleC13cmFwOiB3cmFwO1xuXHRqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcblx0bWFyZ2luOiBhdXRvO1xuXHRtYXJnaW4tYm90dG9tOjI1cHg7XG5cdHBhZGRpbmc6IDI1cHg7XG5cdGJvcmRlci1yYWRpdXM6IDVweDtcblx0Ym9yZGVyOiAxcHggc29saWQgYmxhY2s7XG59XG5cbi5pdGVte1x0XG5cdG1hcmdpbi1yaWdodDogMTBweDtcbn1cblxuLnBhaXJ7XG5cdC8vIHdpZHRoOiA1MCU7XG5cdC8vIG1hcmdpbjogYXV0bztcblx0bWFyZ2luLWJvdHRvbTogMjVweDtcbn1cblxuLmNvbm5lY3Rvcntcblx0XG5cdFxuXHRoZWlnaHQ6NXB4O1xuXHRiYWNrZ3JvdW5kLWNvbG9yOiBsaWdodGdyZWVuO1xufVxuXG5cbkBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDYwMHB4KXtcblx0XG5cdCNnYW1le1x0XG5cdFx0d2lkdGg6IDUwJTtcblx0XHRtYXJnaW46IDAgYXV0bztcblx0fVxuXHRcblx0LmNvbnRhaW5lcntcblx0XHRmbGV4LWRpcmVjdGlvbjogcm93O1xuXHR9XG5cdFxuXHQuc29sdmVke1xuXHRcdG1hcmdpbi1yaWdodDoxMHB4O1xuXHR9XG5cdFxuXHQucGFpcl9pdGVtc3tcblx0XHR3aWR0aDogMzAlO1xuXHRcdGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG5cdH1cblx0XG5cdC5pdGVte1x0XHRcblx0XHRtYXJnaW4tcmlnaHQ6IDA7IFxuXHRcdG1hcmdpbi1sZWZ0OiAxMDBweDsgLy8vLy8vLy8vLy8vLy8vLy8vLy8vSEVSRS8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cblx0XHRtYXJnaW4tYm90dG9tOjEwcHg7XG5cdH1cblx0XG5cdC5wYWlye1xuXHRcdG1hcmdpbi1yaWdodDoyNXB4O1xuXHR9XG5cdFxuXG59XG5cblxuIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MatchingGameComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-matching-game',
                templateUrl: './matching-game.component.html',
                styleUrls: ['./matching-game.component.scss']
            }]
    }], function () { return []; }, { pairs: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], leftpart_temp: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ContentChild"],
            args: ['leftpart', { static: false }]
        }], rightpart_temp: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ContentChild"],
            args: ['rightpart', { static: false }]
        }], leftpartSelected: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], rightpartSelected: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], leftpartUnselected: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], rightpartUnselected: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }] }); })();


/***/ }),

/***/ "./src/app/shuffle.pipe.ts":
/*!*********************************!*\
  !*** ./src/app/shuffle.pipe.ts ***!
  \*********************************/
/*! exports provided: ShufflePipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShufflePipe", function() { return ShufflePipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class ShufflePipe {
    transform(a, args) {
        let b = [];
        for (let i = 0; i < a.length; i++) {
            b.push(a[i]);
        }
        for (let i = b.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [b[i], b[j]] = [b[j], b[i]];
        }
        return b;
    }
}
ShufflePipe.ɵfac = function ShufflePipe_Factory(t) { return new (t || ShufflePipe)(); };
ShufflePipe.ɵpipe = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({ name: "shuffle", type: ShufflePipe, pure: true });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ShufflePipe, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"],
        args: [{
                name: 'shuffle'
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/arian/Tutorials/Angular/Other/game/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map