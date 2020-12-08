(function () {
  function _get(target, property, receiver) { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get; } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(receiver); } return desc.value; }; } return _get(target, property, receiver || target); }

  function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }

  function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

  function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

  function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

  function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

  function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

  function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

  function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

  function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

  function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

  function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

  function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

  function _possibleConstructorReturn(self, call) { if (call && (typeof call === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

  function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

  function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

  function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

  function _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e2) { throw _e2; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e3) { didErr = true; err = _e3; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

  function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

  function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
    /***/
    "./$$_lazy_route_resource lazy recursive":
    /*!******************************************************!*\
      !*** ./$$_lazy_route_resource lazy namespace object ***!
      \******************************************************/

    /*! no static exports found */

    /***/
    function $$_lazy_route_resourceLazyRecursive(module, exports) {
      function webpackEmptyAsyncContext(req) {
        // Here Promise.resolve().then() is used instead of new Promise() to prevent
        // uncaught exception popping up in devtools
        return Promise.resolve().then(function () {
          var e = new Error("Cannot find module '" + req + "'");
          e.code = 'MODULE_NOT_FOUND';
          throw e;
        });
      }

      webpackEmptyAsyncContext.keys = function () {
        return [];
      };

      webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
      module.exports = webpackEmptyAsyncContext;
      webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
      /***/
    },

    /***/
    "./src/app/app.component.ts":
    /*!**********************************!*\
      !*** ./src/app/app.component.ts ***!
      \**********************************/

    /*! exports provided: AppComponent */

    /***/
    function srcAppAppComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
        return AppComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _utils_verovio__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./utils/verovio */
      "./src/app/utils/verovio.ts");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/router */
      "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

      var AppComponent = function AppComponent() {
        _classCallCheck(this, AppComponent);

        _utils_verovio__WEBPACK_IMPORTED_MODULE_1__["vrvToolkit"].setup();
      };

      AppComponent.ɵfac = function AppComponent_Factory(t) {
        return new (t || AppComponent)();
      };

      AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: AppComponent,
        selectors: [["app-root"]],
        decls: 16,
        vars: 0,
        consts: [["id", "mainNav", 1, "navbar", "navbar-expand-lg", "navbar-light"], ["href", "https://measuringpolyphony.org", 1, "navbar-brand"], ["src", "assets/img/thumbnail.png", "id", "thumbnail"], ["id", "navTitle"], ["id", "navDescription"], [1, "clearfix"], ["id", "additionalButtons"], ["href", "https://measuringpolyphony.org/transcriptions.html", 1, "additionalButtons"], ["href", "./", 1, "additionalButtons"], ["href", "https://measuringpolyphony.org", 1, "additionalButtons"]],
        template: function AppComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nav", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Measuring Polyphony");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Digital encodings of late medieval music");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "a", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, " Browse ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "a", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, " Transcribe ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "a", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "About");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "router-outlet");
          }
        },
        directives: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterOutlet"]],
        styles: ["@import url(\"https://unpkg.com/browse/startbootstrap-grayscale@4.0.0/css/grayscale.min.css\");\n\nbody[_ngcontent-%COMP%] {\n  font-family: 'Roboto', sans-serif;\n  position: relative;\n  width: 100%;\n  height: 100%;\n  color: white;\n  background-color: white; }\n\nhtml[_ngcontent-%COMP%] {\n  font-family: 'Roboto', sans-serif;\n  width: 100%;\n  height: 100%; }\n\nh1[_ngcontent-%COMP%], h2[_ngcontent-%COMP%], h3[_ngcontent-%COMP%], h4[_ngcontent-%COMP%], h5[_ngcontent-%COMP%], h6[_ngcontent-%COMP%] {\n  font-family: 'Roboto', sans-serif;\n  font-weight: 700;\n  margin: 0 0 35px;\n  letter-spacing: 1px;\n }\n\ntable[_ngcontent-%COMP%], th[_ngcontent-%COMP%], td[_ngcontent-%COMP%] {\n  font-family: 'Roboto', sans-serif;\n     border: 1px solid white;\n  }\n\np[_ngcontent-%COMP%]\n{\n\tfont-family: 'Roboto', sans-serif;\n\tfont-size: 12px;\n\tline-height: 1.3;\n\tmargin: 0 0 25px;\n}\n\n@media (min-width: 768px)\n{\n\tp[_ngcontent-%COMP%]\n\t{\n\t\tfont-size: 14px;\n\t\tline-height: 1.4;\n\t\tmargin: 0 0 35px;\n\t}\n}\n\n#mainNav[_ngcontent-%COMP%]\n{\n\tfont-family: 'Merriweather', serif;\n\tmargin-bottom: 20px;\n\ttext-transform: uppercase;\n\tborder-bottom: 1px solid rgba(255, 255, 255, 0.3);\n\tbackground-color:\t#9D2322;\n\tcolor: white;\n\tpadding: 4px;\n\tpadding-left: 8px;\n\tpadding-right: 8px;\n}\n\n#mainNav[_ngcontent-%COMP%]   #navDescription[_ngcontent-%COMP%]\n{\n\tfont-family: Merriweather, serif;\n\tfont-size: 12px;\n\tfont-weight: normal;\n}\n\n#mainNav[_ngcontent-%COMP%]   #navTitle[_ngcontent-%COMP%]\n{\n\tfont-family: Merriweather, serif;\n\tmargin-top: 4px;\n}\n\n#mainNav[_ngcontent-%COMP%]   .navbar-toggler[_ngcontent-%COMP%]\n{\n\tfont-size: 14px;\n\tcolor: white;\n\tborder: 1px solid white;\n\tpadding: 8px;\n\tmargin-right: 10px;\n}\n\n#mainNav[_ngcontent-%COMP%]   .navbar-brand[_ngcontent-%COMP%]\n{\n\tfont-weight: bold;\n\tfont-size: 22px;\n\tmargin-left: 10px;\n\tcolor: white !important;\n\tdisplay: block;\n}\n\n#mainNav[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]\n{\n\t#loadOverlay\n\t{\n\t\tdisplay: none\n\t}\n\n    color: white;\n}\n\n#mainNav[_ngcontent-%COMP%]   .navbar-nav[_ngcontent-%COMP%]   .nav-item[_ngcontent-%COMP%]\n{\n\ttransition: background 0.3s ease-in-out;\n}\n\n#mainNav[_ngcontent-%COMP%]   .navbar-nav[_ngcontent-%COMP%]   .nav-item[_ngcontent-%COMP%]:hover\n{\n\tcolor: fade(white, 80%);\n\toutline: none;\n\tbackground-color: #9D2322;\n}\n\n#mainNav[_ngcontent-%COMP%]   .navbar-nav[_ngcontent-%COMP%]   .nav-item[_ngcontent-%COMP%]:active, #mainNav[_ngcontent-%COMP%]   .navbar-nav[_ngcontent-%COMP%]   .nav-item[_ngcontent-%COMP%]:focus\n{\n\toutline: none;\n\tbackground-color: transparent;\n}\n\n.nav-item[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:link, .nav-item[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:visited, .nav-item[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover, .nav-item[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:active\n{\n\tcolor: white !important;\n}\n\n#mainNav[_ngcontent-%COMP%]   .nav-link[_ngcontent-%COMP%]\n{\n\tfont-family: Merriweather, serif;\n\tfont-size: 12px;\n\tmargin-top: 28px;\n}\n\n#additionalButtons[_ngcontent-%COMP%] {\n    display: flex;\n    margin-left: auto;\n}\n\n.additionalButtons[_ngcontent-%COMP%] {\n    color: white;\n    padding-left: 1rem;\n}\n\n@media (min-width: 992px)\n{\n\t#mainNav[_ngcontent-%COMP%]\n\t{\n\t\ttransition: background 0.3s ease-in-out, padding-top 0.3s ease-in-out, padding-bottom 0.3s;\n\t\tletter-spacing: 1px;\n\t\tborder-bottom: none;\n\t}\n\n\t#mainNav.navbar-shrink[_ngcontent-%COMP%]\n\t{\n\t\tpadding-top: 6px;\n\t\tpadding-bottom: 6px;\n\t\tborder-bottom: 1px solid rgba(255, 255, 255, 0.3);\n\t\tbackground: black;\n\t}\n\n\t#mainNav[_ngcontent-%COMP%]   .nav-link.active[_ngcontent-%COMP%]\n\t{\n\t\toutline: none;\n\t\tbackground-color: rgba(255, 255, 255, 0.3);\n\t}\n\n\t#mainNav[_ngcontent-%COMP%]   .nav-link.active[_ngcontent-%COMP%]:hover\n\t{\n\t\tcolor: white;\n\t}\n\n\t#mainNav[_ngcontent-%COMP%], #browse[_ngcontent-%COMP%]\n\t{\n\t\tfont-size: 20px;\n\t\tpadding-right: 50px;\n\t\tcolor:white !important;\n\t}\n\n\t#mainNav[_ngcontent-%COMP%], #about[_ngcontent-%COMP%]\n\t{\n\t\tfont-size: 20px;\n\t\tcolor:white !important;\n\t}\n}\n\n#thumbnail[_ngcontent-%COMP%]\n{\n\tmargin-right: 15px;\n\tfloat: left;\n\tvertical-align: center;\n}\n\n@media (min-width: 768px)\n{\n\t#mainNav[_ngcontent-%COMP%]   .navbar-brand[_ngcontent-%COMP%]\n\t{\n\t\tmargin-left: 20px;\n\t}\n\n\t#mainNav[_ngcontent-%COMP%]   .navbar-toggler[_ngcontent-%COMP%]\n\t{\n\t\tmargin-right: 20px;\n\t}\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsNEZBQTRGOztBQUU1RjtFQUNFLGlDQUFpQztFQUNqQyxrQkFBa0I7RUFDbEIsV0FBVztFQUNYLFlBQVk7RUFDWixZQUFZO0VBQ1osdUJBQXVCLEVBQUU7O0FBRTNCO0VBQ0UsaUNBQWlDO0VBQ2pDLFdBQVc7RUFDWCxZQUFZLEVBQUU7O0FBRWhCOzs7Ozs7RUFNRSxpQ0FBaUM7RUFDakMsZ0JBQWdCO0VBQ2hCLGdCQUFnQjtFQUNoQixtQkFBbUI7Q0FDcEI7O0FBQ0M7RUFDQSxpQ0FBaUM7S0FDOUIsdUJBQXVCO0VBQzFCOztBQUVGOztDQUVDLGlDQUFpQztDQUNqQyxlQUFlO0NBQ2YsZ0JBQWdCO0NBQ2hCLGdCQUFnQjtBQUNqQjs7QUFFQTs7Q0FFQzs7RUFFQyxlQUFlO0VBQ2YsZ0JBQWdCO0VBQ2hCLGdCQUFnQjtDQUNqQjtBQUNEOztBQUVBOztDQUVDLGtDQUFrQztDQUNsQyxtQkFBbUI7Q0FDbkIseUJBQXlCO0NBQ3pCLGlEQUFpRDtDQUNqRCx5QkFBeUI7Q0FDekIsWUFBWTtDQUNaLFlBQVk7Q0FDWixpQkFBaUI7Q0FDakIsa0JBQWtCO0FBQ25COztBQUVBOztDQUVDLGdDQUFnQztDQUNoQyxlQUFlO0NBQ2YsbUJBQW1CO0FBQ3BCOztBQUVBOztDQUVDLGdDQUFnQztDQUNoQyxlQUFlO0FBQ2hCOztBQUVBOztDQUVDLGVBQWU7Q0FDZixZQUFZO0NBQ1osdUJBQXVCO0NBQ3ZCLFlBQVk7Q0FDWixrQkFBa0I7QUFDbkI7O0FBRUE7O0NBRUMsaUJBQWlCO0NBQ2pCLGVBQWU7Q0FDZixpQkFBaUI7Q0FDakIsdUJBQXVCO0NBQ3ZCLGNBQWM7QUFDZjs7QUFFQTs7Q0FFQzs7RUFFQztDQUNEOztJQUVHLFlBQVk7QUFDaEI7O0FBRUE7O0NBSUMsdUNBQXVDO0FBQ3hDOztBQUVBOztDQUVDLHVCQUF1QjtDQUN2QixhQUFhO0NBQ2IseUJBQXlCO0FBQzFCOztBQUVBOztDQUVDLGFBQWE7Q0FDYiw2QkFBNkI7QUFDOUI7O0FBRUE7O0NBRUMsdUJBQXVCO0FBQ3hCOztBQUVBOztDQUVDLGdDQUFnQztDQUNoQyxlQUFlO0NBQ2YsZ0JBQWdCO0FBQ2pCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLGlCQUFpQjtBQUNyQjs7QUFFQTtJQUNJLFlBQVk7SUFDWixrQkFBa0I7QUFDdEI7O0FBRUE7O0NBRUM7O0VBSUMsMEZBQTBGO0VBQzFGLG1CQUFtQjtFQUNuQixtQkFBbUI7Q0FDcEI7O0NBRUE7O0VBRUMsZ0JBQWdCO0VBQ2hCLG1CQUFtQjtFQUNuQixpREFBaUQ7RUFDakQsaUJBQWlCO0NBQ2xCOztDQUVBOztFQUVDLGFBQWE7RUFDYiwwQ0FBMEM7Q0FDM0M7O0NBRUE7O0VBRUMsWUFBWTtDQUNiOztDQUVBOztFQUVDLGVBQWU7RUFDZixtQkFBbUI7RUFDbkIsc0JBQXNCO0NBQ3ZCOztDQUVBOztFQUVDLGVBQWU7RUFDZixzQkFBc0I7Q0FDdkI7QUFDRDs7QUFFQTs7Q0FFQyxrQkFBa0I7Q0FDbEIsV0FBVztDQUNYLHNCQUFzQjtBQUN2Qjs7QUFFQTs7Q0FFQzs7RUFFQyxpQkFBaUI7Q0FDbEI7O0NBRUE7O0VBRUMsa0JBQWtCO0NBQ25CO0FBQ0QiLCJmaWxlIjoic3JjL2FwcC9hcHAuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgdXJsKFwiaHR0cHM6Ly91bnBrZy5jb20vYnJvd3NlL3N0YXJ0Ym9vdHN0cmFwLWdyYXlzY2FsZUA0LjAuMC9jc3MvZ3JheXNjYWxlLm1pbi5jc3NcIik7XG5cbmJvZHkge1xuICBmb250LWZhbWlseTogJ1JvYm90bycsIHNhbnMtc2VyaWY7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgY29sb3I6IHdoaXRlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTsgfVxuXG5odG1sIHtcbiAgZm9udC1mYW1pbHk6ICdSb2JvdG8nLCBzYW5zLXNlcmlmO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlOyB9XG5cbmgxLFxuaDIsXG5oMyxcbmg0LFxuaDUsXG5oNiB7XG4gIGZvbnQtZmFtaWx5OiAnUm9ib3RvJywgc2Fucy1zZXJpZjtcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgbWFyZ2luOiAwIDAgMzVweDtcbiAgbGV0dGVyLXNwYWNpbmc6IDFweDtcbiB9XG4gIHRhYmxlLCB0aCwgdGQge1xuICBmb250LWZhbWlseTogJ1JvYm90bycsIHNhbnMtc2VyaWY7XG4gICAgIGJvcmRlcjogMXB4IHNvbGlkIHdoaXRlO1xuICB9XG5cbnBcbntcblx0Zm9udC1mYW1pbHk6ICdSb2JvdG8nLCBzYW5zLXNlcmlmO1xuXHRmb250LXNpemU6IDEycHg7XG5cdGxpbmUtaGVpZ2h0OiAxLjM7XG5cdG1hcmdpbjogMCAwIDI1cHg7XG59XG5cbkBtZWRpYSAobWluLXdpZHRoOiA3NjhweClcbntcblx0cFxuXHR7XG5cdFx0Zm9udC1zaXplOiAxNHB4O1xuXHRcdGxpbmUtaGVpZ2h0OiAxLjQ7XG5cdFx0bWFyZ2luOiAwIDAgMzVweDtcblx0fVxufVxuXG4jbWFpbk5hdlxue1xuXHRmb250LWZhbWlseTogJ01lcnJpd2VhdGhlcicsIHNlcmlmO1xuXHRtYXJnaW4tYm90dG9tOiAyMHB4O1xuXHR0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuXHRib3JkZXItYm90dG9tOiAxcHggc29saWQgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjMpO1xuXHRiYWNrZ3JvdW5kLWNvbG9yOlx0IzlEMjMyMjtcblx0Y29sb3I6IHdoaXRlO1xuXHRwYWRkaW5nOiA0cHg7XG5cdHBhZGRpbmctbGVmdDogOHB4O1xuXHRwYWRkaW5nLXJpZ2h0OiA4cHg7XG59XG5cbiNtYWluTmF2ICNuYXZEZXNjcmlwdGlvblxue1xuXHRmb250LWZhbWlseTogTWVycml3ZWF0aGVyLCBzZXJpZjtcblx0Zm9udC1zaXplOiAxMnB4O1xuXHRmb250LXdlaWdodDogbm9ybWFsO1xufVxuXG4jbWFpbk5hdiAjbmF2VGl0bGVcbntcblx0Zm9udC1mYW1pbHk6IE1lcnJpd2VhdGhlciwgc2VyaWY7XG5cdG1hcmdpbi10b3A6IDRweDtcbn1cblxuI21haW5OYXYgLm5hdmJhci10b2dnbGVyXG57XG5cdGZvbnQtc2l6ZTogMTRweDtcblx0Y29sb3I6IHdoaXRlO1xuXHRib3JkZXI6IDFweCBzb2xpZCB3aGl0ZTtcblx0cGFkZGluZzogOHB4O1xuXHRtYXJnaW4tcmlnaHQ6IDEwcHg7XG59XG5cbiNtYWluTmF2IC5uYXZiYXItYnJhbmRcbntcblx0Zm9udC13ZWlnaHQ6IGJvbGQ7XG5cdGZvbnQtc2l6ZTogMjJweDtcblx0bWFyZ2luLWxlZnQ6IDEwcHg7XG5cdGNvbG9yOiB3aGl0ZSAhaW1wb3J0YW50O1xuXHRkaXNwbGF5OiBibG9jaztcbn1cblxuI21haW5OYXYgYVxue1xuXHQjbG9hZE92ZXJsYXlcblx0e1xuXHRcdGRpc3BsYXk6IG5vbmVcblx0fVxuXG4gICAgY29sb3I6IHdoaXRlO1xufVxuXG4jbWFpbk5hdiAubmF2YmFyLW5hdiAubmF2LWl0ZW1cbntcblx0LXdlYmtpdC10cmFuc2l0aW9uOiBiYWNrZ3JvdW5kIDAuM3MgZWFzZS1pbi1vdXQ7XG5cdC1tb3otdHJhbnNpdGlvbjogYmFja2dyb3VuZCAwLjNzIGVhc2UtaW4tb3V0O1xuXHR0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kIDAuM3MgZWFzZS1pbi1vdXQ7XG59XG5cbiNtYWluTmF2IC5uYXZiYXItbmF2IC5uYXYtaXRlbTpob3Zlclxue1xuXHRjb2xvcjogZmFkZSh3aGl0ZSwgODAlKTtcblx0b3V0bGluZTogbm9uZTtcblx0YmFja2dyb3VuZC1jb2xvcjogIzlEMjMyMjtcbn1cblxuI21haW5OYXYgLm5hdmJhci1uYXYgLm5hdi1pdGVtOmFjdGl2ZSwgI21haW5OYXYgLm5hdmJhci1uYXYgLm5hdi1pdGVtOmZvY3VzXG57XG5cdG91dGxpbmU6IG5vbmU7XG5cdGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xufVxuXG4ubmF2LWl0ZW0gYTpsaW5rLCAubmF2LWl0ZW0gYTp2aXNpdGVkLCAubmF2LWl0ZW0gYTpob3ZlciwgLm5hdi1pdGVtIGE6YWN0aXZlXG57XG5cdGNvbG9yOiB3aGl0ZSAhaW1wb3J0YW50O1xufVxuXG4jbWFpbk5hdiAubmF2LWxpbmtcbntcblx0Zm9udC1mYW1pbHk6IE1lcnJpd2VhdGhlciwgc2VyaWY7XG5cdGZvbnQtc2l6ZTogMTJweDtcblx0bWFyZ2luLXRvcDogMjhweDtcbn1cblxuI2FkZGl0aW9uYWxCdXR0b25zIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xufVxuXG4uYWRkaXRpb25hbEJ1dHRvbnMge1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICBwYWRkaW5nLWxlZnQ6IDFyZW07XG59XG5cbkBtZWRpYSAobWluLXdpZHRoOiA5OTJweClcbntcblx0I21haW5OYXZcblx0e1xuXHRcdC13ZWJraXQtdHJhbnNpdGlvbjogYmFja2dyb3VuZCAwLjNzIGVhc2UtaW4tb3V0LCBwYWRkaW5nLXRvcCAwLjNzIGVhc2UtaW4tb3V0LCBwYWRkaW5nLWJvdHRvbSAwLjNzO1xuXHRcdC1tb3otdHJhbnNpdGlvbjogYmFja2dyb3VuZCAwLjNzIGVhc2UtaW4tb3V0LCBwYWRkaW5nLXRvcCAwLjNzIGVhc2UtaW4tb3V0LCBwYWRkaW5nLWJvdHRvbSAwLjNzO1xuXHRcdHRyYW5zaXRpb246IGJhY2tncm91bmQgMC4zcyBlYXNlLWluLW91dCwgcGFkZGluZy10b3AgMC4zcyBlYXNlLWluLW91dCwgcGFkZGluZy1ib3R0b20gMC4zcztcblx0XHRsZXR0ZXItc3BhY2luZzogMXB4O1xuXHRcdGJvcmRlci1ib3R0b206IG5vbmU7XG5cdH1cblxuXHQjbWFpbk5hdi5uYXZiYXItc2hyaW5rXG5cdHtcblx0XHRwYWRkaW5nLXRvcDogNnB4O1xuXHRcdHBhZGRpbmctYm90dG9tOiA2cHg7XG5cdFx0Ym9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4zKTtcblx0XHRiYWNrZ3JvdW5kOiBibGFjaztcblx0fVxuXG5cdCNtYWluTmF2IC5uYXYtbGluay5hY3RpdmVcblx0e1xuXHRcdG91dGxpbmU6IG5vbmU7XG5cdFx0YmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjMpO1xuXHR9XG5cblx0I21haW5OYXYgLm5hdi1saW5rLmFjdGl2ZTpob3ZlclxuXHR7XG5cdFx0Y29sb3I6IHdoaXRlO1xuXHR9XG5cblx0I21haW5OYXYsICNicm93c2Vcblx0e1xuXHRcdGZvbnQtc2l6ZTogMjBweDtcblx0XHRwYWRkaW5nLXJpZ2h0OiA1MHB4O1xuXHRcdGNvbG9yOndoaXRlICFpbXBvcnRhbnQ7XG5cdH1cblxuXHQjbWFpbk5hdiwgI2Fib3V0XG5cdHtcblx0XHRmb250LXNpemU6IDIwcHg7XG5cdFx0Y29sb3I6d2hpdGUgIWltcG9ydGFudDtcblx0fVxufVxuXG4jdGh1bWJuYWlsXG57XG5cdG1hcmdpbi1yaWdodDogMTVweDtcblx0ZmxvYXQ6IGxlZnQ7XG5cdHZlcnRpY2FsLWFsaWduOiBjZW50ZXI7XG59XG5cbkBtZWRpYSAobWluLXdpZHRoOiA3NjhweClcbntcblx0I21haW5OYXYgLm5hdmJhci1icmFuZFxuXHR7XG5cdFx0bWFyZ2luLWxlZnQ6IDIwcHg7XG5cdH1cblxuXHQjbWFpbk5hdiAubmF2YmFyLXRvZ2dsZXJcblx0e1xuXHRcdG1hcmdpbi1yaWdodDogMjBweDtcblx0fVxufVxuIl19 */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-root',
            templateUrl: './app.component.html',
            styleUrls: ['./app.component.css']
          }]
        }], function () {
          return [];
        }, null);
      })();
      /***/

    },

    /***/
    "./src/app/app.module.ts":
    /*!*******************************!*\
      !*** ./src/app/app.module.ts ***!
      \*******************************/

    /*! exports provided: AppModule */

    /***/
    function srcAppAppModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AppModule", function () {
        return AppModule;
      });
      /* harmony import */


      var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/platform-browser */
      "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/forms */
      "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/router */
      "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
      /* harmony import */


      var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/material/tabs */
      "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/tabs.js");
      /* harmony import */


      var _angular_material_button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/material/button */
      "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
      /* harmony import */


      var _angular_material_divider__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/material/divider */
      "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/divider.js");
      /* harmony import */


      var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/material/form-field */
      "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/form-field.js");
      /* harmony import */


      var _angular_material_select__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/material/select */
      "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/select.js");
      /* harmony import */


      var _input_input_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ./input/input.module */
      "./src/app/input/input.module.ts");
      /* harmony import */


      var _input_input_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ./input/input.component */
      "./src/app/input/input.component.ts");
      /* harmony import */


      var _app_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! ./app.component */
      "./src/app/app.component.ts");
      /* harmony import */


      var _select_document_select_document_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! ./select-document/select-document.component */
      "./src/app/select-document/select-document.component.ts");
      /* harmony import */


      var _score_editor_score_editor_module__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! ./score-editor/score-editor.module */
      "./src/app/score-editor/score-editor.module.ts");
      /* harmony import */


      var _score_editor_score_editor_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! ./score-editor/score-editor.component */
      "./src/app/score-editor/score-editor.component.ts");

      var routes = [{
        path: 'input/:source/:identifier',
        component: _input_input_component__WEBPACK_IMPORTED_MODULE_10__["InputComponent"]
      }, {
        path: 'score/:source/:identifier',
        component: _score_editor_score_editor_component__WEBPACK_IMPORTED_MODULE_14__["ScoreEditorComponent"]
      }, {
        path: '',
        // redirectTo: '/input/gallica/12148%2Fbtv1b8454675g',
        component: _select_document_select_document_component__WEBPACK_IMPORTED_MODULE_12__["SelectDocumentComponent"],
        pathMatch: 'full'
      }];

      var AppModule = function AppModule() {
        _classCallCheck(this, AppModule);
      };

      AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
        type: AppModule,
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_11__["AppComponent"]]
      });
      AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
        factory: function AppModule_Factory(t) {
          return new (t || AppModule)();
        },
        providers: [],
        imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forRoot(routes, {
          useHash: true
        } //{ enableTracing: true }
        ), _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"], _angular_material_tabs__WEBPACK_IMPORTED_MODULE_4__["MatTabsModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_5__["MatButtonModule"], _angular_material_divider__WEBPACK_IMPORTED_MODULE_6__["MatDividerModule"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__["MatFormFieldModule"], _angular_material_select__WEBPACK_IMPORTED_MODULE_8__["MatSelectModule"], _input_input_module__WEBPACK_IMPORTED_MODULE_9__["InputModule"], _score_editor_score_editor_module__WEBPACK_IMPORTED_MODULE_13__["ScoreEditorModule"]]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, {
          declarations: [_app_component__WEBPACK_IMPORTED_MODULE_11__["AppComponent"], _select_document_select_document_component__WEBPACK_IMPORTED_MODULE_12__["SelectDocumentComponent"]],
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"], _angular_material_tabs__WEBPACK_IMPORTED_MODULE_4__["MatTabsModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_5__["MatButtonModule"], _angular_material_divider__WEBPACK_IMPORTED_MODULE_6__["MatDividerModule"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__["MatFormFieldModule"], _angular_material_select__WEBPACK_IMPORTED_MODULE_8__["MatSelectModule"], _input_input_module__WEBPACK_IMPORTED_MODULE_9__["InputModule"], _score_editor_score_editor_module__WEBPACK_IMPORTED_MODULE_13__["ScoreEditorModule"]]
        });
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
          args: [{
            declarations: [_app_component__WEBPACK_IMPORTED_MODULE_11__["AppComponent"], _select_document_select_document_component__WEBPACK_IMPORTED_MODULE_12__["SelectDocumentComponent"]],
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forRoot(routes, {
              useHash: true
            } //{ enableTracing: true }
            ), _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"], _angular_material_tabs__WEBPACK_IMPORTED_MODULE_4__["MatTabsModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_5__["MatButtonModule"], _angular_material_divider__WEBPACK_IMPORTED_MODULE_6__["MatDividerModule"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__["MatFormFieldModule"], _angular_material_select__WEBPACK_IMPORTED_MODULE_8__["MatSelectModule"], _input_input_module__WEBPACK_IMPORTED_MODULE_9__["InputModule"], _score_editor_score_editor_module__WEBPACK_IMPORTED_MODULE_13__["ScoreEditorModule"]],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_11__["AppComponent"]]
          }]
        }], null, null);
      })();
      /***/

    },

    /***/
    "./src/app/input/diva-view/diva-view.component.ts":
    /*!********************************************************!*\
      !*** ./src/app/input/diva-view/diva-view.component.ts ***!
      \********************************************************/

    /*! exports provided: DivaViewComponent */

    /***/
    function srcAppInputDivaViewDivaViewComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "DivaViewComponent", function () {
        return DivaViewComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _utils_definitions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../../utils/definitions */
      "./src/app/utils/definitions.ts");
      /* harmony import */


      var _utils_system__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../../utils/system */
      "./src/app/utils/system.ts");
      /* harmony import */


      var diva_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! diva.js */
      "./node_modules/diva.js/source/js/diva.js");
      /* harmony import */


      var _input_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../input.service */
      "./src/app/input/input.service.ts");
      /* harmony import */


      var _state_service_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../../state-service.service */
      "./src/app/state-service.service.ts");
      /**
       * This component contains diva.js and has the staff bounding boxes
       * rendered over it. This is always visible.
       */


      var DivaViewComponent = /*#__PURE__*/function () {
        function DivaViewComponent(selectedSystem, stateService) {
          _classCallCheck(this, DivaViewComponent);

          this.selectedSystem = selectedSystem;
          this.stateService = stateService;
          this.creatingStaff = false;
          this.firstPoint = null;
        }

        _createClass(DivaViewComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this = this;

            this.diva = new diva_js__WEBPACK_IMPORTED_MODULE_3__["default"]('diva-wrapper', {
              objectData: this.iiifManifest
            });
            diva_js__WEBPACK_IMPORTED_MODULE_3__["default"].Events.subscribe('ActivePageDidChange', this.refreshOverlay.bind(this), this.diva.settings.ID);
            diva_js__WEBPACK_IMPORTED_MODULE_3__["default"].Events.subscribe('DocumentDidLoad', this.refreshOverlay.bind(this), this.diva.settings.ID);
            diva_js__WEBPACK_IMPORTED_MODULE_3__["default"].Events.subscribe('ZoomLevelDidChange', this.handleZoom.bind(this), this.diva.settings.ID); // this.diva.disableDragScrollable();

            this.selectedSystem.subscribe(function () {
              _this.refreshOverlay(_this.diva.getActivePageIndex());
            });
          }
        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            this.selectedSystem.selected = null;

            try {
              this.diva.deactivate();
              this.diva.destroy();
            } catch (e) {
              console.warn(e);
            }
          }
        }, {
          key: "handleKeydown",
          value: function handleKeydown() {
            this.diva.disableDragScrollable();
          }
        }, {
          key: "handleKeyup",
          value: function handleKeyup() {
            if (!this.creatingStaff) {
              this.diva.enableDragScrollable();
            }
          }
        }, {
          key: "clickHandler",
          value: function clickHandler(evt) {
            var target = evt.target;

            if (target.tagName === 'rect') {
              // Unselect previously selected staff.
              Array.from(document.getElementsByClassName("selectedZone")).forEach(function (elem) {
                elem.classList.remove("selectedZone");
              });
              var staff = this.stateService.mei.getSystem(target.id);

              if (staff !== null) {
                this.selectedSystem.selected = staff;
                target.classList.add("selectedZone");
              }
            }
          }
        }, {
          key: "mousedownHandler",
          value: function mousedownHandler(evt) {
            if (evt.shiftKey) {
              this.creatingStaff = true;
              var activeContainer = document.getElementById('editor-container-' + this.diva.getActivePageIndex().toString()).firstElementChild;
              var clientPoint = activeContainer.createSVGPoint();
              clientPoint.x = evt.clientX;
              clientPoint.y = evt.clientY;
              var transformMatrix = activeContainer.getScreenCTM();
              this.firstPoint = clientPoint.matrixTransform(transformMatrix.inverse()); // Create the initial drawing rect

              var rect = document.createElementNS('http://www.w3.org/2000/svg', 'rect');
              rect.setAttribute('x', this.firstPoint.x.toString());
              rect.setAttribute('y', this.firstPoint.y.toString());
              rect.setAttribute('width', '0');
              rect.setAttribute('height', '0');
              rect.classList.add("zoneRect");
              rect.id = 'drawing-rect';
              activeContainer.appendChild(rect);
            }
          }
        }, {
          key: "mousemoveHandler",
          value: function mousemoveHandler(evt) {
            if (this.creatingStaff) {
              var drawingRect = document.getElementById('drawing-rect');

              if (drawingRect !== null) {
                var container = drawingRect.viewportElement;
                var currentPoint = container.createSVGPoint();
                currentPoint.x = evt.clientX;
                currentPoint.y = evt.clientY;
                var transformedPoint = currentPoint.matrixTransform(container.getScreenCTM().inverse());
                drawingRect.setAttribute('x', Math.min(transformedPoint.x, this.firstPoint.x).toString());
                drawingRect.setAttribute('y', Math.min(transformedPoint.y, this.firstPoint.y).toString());
                drawingRect.setAttribute('width', Math.abs(transformedPoint.x - this.firstPoint.x).toString());
                drawingRect.setAttribute('height', Math.abs(transformedPoint.y - this.firstPoint.y).toString());
              }
            }
          }
        }, {
          key: "mouseupHandler",
          value: function mouseupHandler(evt) {
            if (this.creatingStaff) {
              this.diva.enableDragScrollable();
              this.creatingStaff = false;
              var pageIndex = this.diva.getActivePageIndex();
              var activeContainer = document.getElementById('editor-container-' + pageIndex.toString()).firstElementChild;
              var clientPoint = activeContainer.createSVGPoint();
              clientPoint.x = evt.clientX;
              clientPoint.y = evt.clientY;
              var transformMatrix = activeContainer.getScreenCTM();
              var secondPoint = clientPoint.matrixTransform(transformMatrix.inverse()); // Get Pb element if one exists

              var pb = this.stateService.mei.getPb(pageIndex);

              if (pb === null) {
                // Make new Pb
                pb = new _utils_system__WEBPACK_IMPORTED_MODULE_2__["Pb"](this.diva.getCurrentCanvas());
                pb.index = pageIndex;
              } // Create sb


              var sb = new _utils_system__WEBPACK_IMPORTED_MODULE_2__["Sb"]({
                ulx: Math.min(this.firstPoint.x, secondPoint.x),
                uly: Math.min(this.firstPoint.y, secondPoint.y),
                lrx: Math.max(secondPoint.x, this.firstPoint.x),
                lry: Math.max(secondPoint.y, this.firstPoint.y)
              }); // Determine Part

              var part;

              if (this.selectedSystem.selected !== null) {
                part = this.selectedSystem.selected.parent;
              } else {
                part = this.stateService.mei.getOrCreatePart(_utils_definitions__WEBPACK_IMPORTED_MODULE_1__["Voice"].triplum);
              }

              var newSystem = new _utils_system__WEBPACK_IMPORTED_MODULE_2__["System"]();
              newSystem.pb = pb;
              newSystem.sb = sb;
              part.addSystem(newSystem); // Mark as selected

              this.selectedSystem.selected = newSystem; // Clean up

              this.refreshOverlay(pageIndex);
              this.firstPoint = null;
            }
          }
        }, {
          key: "refreshOverlay",
          value: function refreshOverlay(pageIndex) {
            // Get some features from the diva viewer
            var inner = this.diva.settings.innerElement;
            var dimensions = this.diva.getPageDimensionsAtCurrentZoomLevel(pageIndex);

            var offset = this.diva.settings.viewHandler._viewerCore.getPageRegion(pageIndex, {
              includePadding: true,
              incorporateViewport: true
            });

            var marginLeft = getComputedStyle(inner, null).getPropertyValue('margin-left'); // Check if we have a div for this page. Otherwise create one.

            var pageContainer = document.getElementById('editor-container-' + pageIndex.toString());

            if (pageContainer === null) {
              //pageContainer = document.createElement('div');
              pageContainer = document.createElement('div');
              pageContainer.id = 'editor-container-' + pageIndex.toString();
              pageContainer.classList.add('editor-container'); // For future use

              inner.appendChild(pageContainer); // Add the container to the DOM
            } // Create SVG container


            var svgParent = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
            var maxZoom = this.diva.getPageDimensionsAtZoomLevel(pageIndex, Number.MAX_SAFE_INTEGER);
            svgParent.setAttribute('width', dimensions.width.toString());
            svgParent.setAttribute('height', dimensions.height.toString());
            svgParent.setAttribute('viewBox', '0 0 ' + maxZoom.width + ' ' + maxZoom.height);
            pageContainer.style.position = 'absolute';
            pageContainer.style.top = "".concat(offset.top, "px");
            pageContainer.style.left = "".concat(offset.left - parseInt(marginLeft), "px");

            while (pageContainer.firstChild !== null) {
              pageContainer.firstChild.remove();
            }

            var systemsOnPage = this.stateService.mei.getSystems().filter(function (system) {
              return system.pb.index === pageIndex;
            });

            var _iterator = _createForOfIteratorHelper(systemsOnPage),
                _step;

            try {
              for (_iterator.s(); !(_step = _iterator.n()).done;) {
                var staff = _step.value;
                var item = staff.sb.svg;
                svgParent.appendChild(item);

                if (this.selectedSystem.selected === staff) {
                  item.classList.add("selectedZone");
                }
              }
            } catch (err) {
              _iterator.e(err);
            } finally {
              _iterator.f();
            }

            pageContainer.appendChild(svgParent);
          }
        }, {
          key: "handleZoom",
          value: function handleZoom() {
            var _this2 = this;

            new Promise(function (resolve) {
              Array.from(document.getElementsByClassName('editor-container')).forEach(function (elem) {
                elem.style.display = 'none';
              });
              setTimeout(resolve, _this2.diva.settings.zoomDuration + 100);
            }).then(function () {
              _this2.refreshOverlay(_this2.diva.getActivePageIndex());

              Array.from(document.getElementsByClassName('editor-container')).forEach(function (elem) {
                elem.style.display = '';
              });
            });
          }
        }]);

        return DivaViewComponent;
      }();

      DivaViewComponent.ɵfac = function DivaViewComponent_Factory(t) {
        return new (t || DivaViewComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_input_service__WEBPACK_IMPORTED_MODULE_4__["InputService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_state_service_service__WEBPACK_IMPORTED_MODULE_5__["StateService"]));
      };

      DivaViewComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: DivaViewComponent,
        selectors: [["app-diva-view"]],
        hostBindings: function DivaViewComponent_HostBindings(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("keydown.shift", function DivaViewComponent_keydown_shift_HostBindingHandler() {
              return ctx.handleKeydown();
            }, false, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresolveWindow"])("keyup.shift", function DivaViewComponent_keyup_shift_HostBindingHandler() {
              return ctx.handleKeyup();
            }, false, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresolveWindow"]);
          }
        },
        inputs: {
          iiifManifest: "iiifManifest"
        },
        decls: 1,
        vars: 0,
        consts: [["id", "diva-wrapper", 3, "mousedown", "mousemove", "click", "mouseup"]],
        template: function DivaViewComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("mousedown", function DivaViewComponent_Template_div_mousedown_0_listener($event) {
              return ctx.mousedownHandler($event);
            })("mousemove", function DivaViewComponent_Template_div_mousemove_0_listener($event) {
              return ctx.mousemoveHandler($event);
            })("click", function DivaViewComponent_Template_div_click_0_listener($event) {
              return ctx.clickHandler($event);
            })("mouseup", function DivaViewComponent_Template_div_mouseup_0_listener($event) {
              return ctx.mouseupHandler($event);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }
        },
        styles: ["@import url('https://unpkg.com/diva.js@6.0.2/build/diva.css');\n\n#diva-wrapper {\n    height: calc(100% - 80px);\n}\n\nrect.zoneRect {\n    fill: black;\n    fill-opacity: 0;\n    stroke: black;\n    stroke-dasharray: 25,25;\n    stroke-width: 0.25em;\n}\n\nrect.selectedZone {\n    stroke-dasharray: none;\n    stroke: black;\n    opacity: 0.75;\n    fill: none;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaW5wdXQvZGl2YS12aWV3L2RpdmEtdmlldy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLDZEQUE2RDs7QUFFN0Q7SUFDSSx5QkFBeUI7QUFDN0I7O0FBRUE7SUFDSSxXQUFXO0lBQ1gsZUFBZTtJQUNmLGFBQWE7SUFDYix1QkFBdUI7SUFDdkIsb0JBQW9CO0FBQ3hCOztBQUVBO0lBQ0ksc0JBQXNCO0lBQ3RCLGFBQWE7SUFDYixhQUFhO0lBQ2IsVUFBVTtBQUNkIiwiZmlsZSI6InNyYy9hcHAvaW5wdXQvZGl2YS12aWV3L2RpdmEtdmlldy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCB1cmwoJ2h0dHBzOi8vdW5wa2cuY29tL2RpdmEuanNANi4wLjIvYnVpbGQvZGl2YS5jc3MnKTtcblxuI2RpdmEtd3JhcHBlciB7XG4gICAgaGVpZ2h0OiBjYWxjKDEwMCUgLSA4MHB4KTtcbn1cblxucmVjdC56b25lUmVjdCB7XG4gICAgZmlsbDogYmxhY2s7XG4gICAgZmlsbC1vcGFjaXR5OiAwO1xuICAgIHN0cm9rZTogYmxhY2s7XG4gICAgc3Ryb2tlLWRhc2hhcnJheTogMjUsMjU7XG4gICAgc3Ryb2tlLXdpZHRoOiAwLjI1ZW07XG59XG5cbnJlY3Quc2VsZWN0ZWRab25lIHtcbiAgICBzdHJva2UtZGFzaGFycmF5OiBub25lO1xuICAgIHN0cm9rZTogYmxhY2s7XG4gICAgb3BhY2l0eTogMC43NTtcbiAgICBmaWxsOiBub25lO1xufVxuIl19 */"],
        encapsulation: 2
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DivaViewComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-diva-view',
            templateUrl: './diva-view.component.html',
            styleUrls: ['./diva-view.component.css'],
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None
          }]
        }], function () {
          return [{
            type: _input_service__WEBPACK_IMPORTED_MODULE_4__["InputService"]
          }, {
            type: _state_service_service__WEBPACK_IMPORTED_MODULE_5__["StateService"]
          }];
        }, {
          iiifManifest: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          handleKeydown: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
            args: ['window:keydown.shift', []]
          }],
          handleKeyup: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
            args: ['window:keyup.shift', []]
          }]
        });
      })();
      /***/

    },

    /***/
    "./src/app/input/input.component.ts":
    /*!******************************************!*\
      !*** ./src/app/input/input.component.ts ***!
      \******************************************/

    /*! exports provided: InputComponent */

    /***/
    function srcAppInputInputComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "InputComponent", function () {
        return InputComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/forms */
      "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
      /* harmony import */


      var _utils_mei__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../utils/mei */
      "./src/app/utils/mei.ts");
      /* harmony import */


      var _tools__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../tools */
      "./src/app/tools.ts");
      /* harmony import */


      var _state_service_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../state-service.service */
      "./src/app/state-service.service.ts");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/router */
      "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
      /* harmony import */


      var _diva_view_diva_view_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./diva-view/diva-view.component */
      "./src/app/input/diva-view/diva-view.component.ts");
      /* harmony import */


      var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/material/tabs */
      "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/tabs.js");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/common */
      "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
      /* harmony import */


      var _angular_material_divider__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @angular/material/divider */
      "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/divider.js");
      /* harmony import */


      var _angular_material_button__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @angular/material/button */
      "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
      /* harmony import */


      var _toolbar_toolbar_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! ./toolbar/toolbar.component */
      "./src/app/input/toolbar/toolbar.component.ts");
      /* harmony import */


      var _staff_select_staff_select_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! ./staff-select/staff-select.component */
      "./src/app/input/staff-select/staff-select.component.ts");

      function InputComponent_mat_tab_4_form_1_div_39_Template(rf, ctx) {
        if (rf & 1) {
          var _r46 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](1, 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "label", 31);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Contributor:\xA0 ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "select", 32);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "option", 33);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Encoder");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "option", 34);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Proofreader");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "option", 35);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Editor");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "input", 36);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, " \xA0 ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "button", 37);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function InputComponent_mat_tab_4_form_1_div_39_Template_button_click_13_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r46);

            var i_r44 = ctx.index;

            var ctx_r45 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);

            return ctx_r45.removeContributor(i_r44);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Remove");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var contributor_r43 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", contributor_r43);
        }
      }

      function InputComponent_mat_tab_4_form_1_Template(rf, ctx) {
        if (rf & 1) {
          var _r48 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "form", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("submit", function InputComponent_mat_tab_4_form_1_Template_form_submit_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r48);

            var ctx_r47 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

            return ctx_r47.onSetMetadata();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h1", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Enter Metadata");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "label", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Short title:\xA0 ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "input", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "label", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Composer name:\xA0 ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "input", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "label", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Notation:\xA0 ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "select", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "option", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Black Mensural \u2014 Ars antiqua");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "option", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Black Mensural \u2014 Ars nova");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "option", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "White Mensural");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "label", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "Manuscript Siglum:\xA0 ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](23, "input", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](24, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "label", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "Genre:\xA0 ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "select", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "option", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "Motet");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "option", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "Song");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "option", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "Conductus");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "option", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, "Mass Movement");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "option", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, "Plainchant");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](38, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](39, InputComponent_mat_tab_4_form_1_div_39_Template, 15, 1, "div", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "button", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function InputComponent_mat_tab_4_form_1_Template_button_click_41_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r48);

            var ctx_r49 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

            return ctx_r49.addContributor();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42, "Add Contributor");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](43, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "button", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45, "Continue to Music Input");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r41 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx_r41.metadataForm);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](39);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r41.temp.controls);
        }
      }

      function InputComponent_mat_tab_4_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-tab", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, InputComponent_mat_tab_4_form_1_Template, 46, 2, "form", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r39 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r39.inputStep === 0);
        }
      }

      function InputComponent_mat_tab_5_app_toolbar_2_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-toolbar");
        }
      }

      function InputComponent_mat_tab_5_app_staff_select_4_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-staff-select");
        }
      }

      function InputComponent_mat_tab_5_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-tab", 38);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "mat-divider");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, InputComponent_mat_tab_5_app_toolbar_2_Template, 1, 0, "app-toolbar", 39);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "mat-divider");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, InputComponent_mat_tab_5_app_staff_select_4_Template, 1, 0, "app-staff-select", 39);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r40 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r40.inputStep === 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r40.inputStep === 1);
        }
      }

      var InputComponent = /*#__PURE__*/function () {
        function InputComponent(stateService, route) {
          _classCallCheck(this, InputComponent);

          this.stateService = stateService;
          this.route = route; // Metadata for MEI header

          this.metadataForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
            shortTitle: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]),
            composerName: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]),
            contributors: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormArray"]([]),
            notationSubtype: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]),
            siglum: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]),
            genre: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required])
          });
          this.inputStep = InputComponent.InputStep.METADATA;
          this.source = this.route.snapshot.paramMap.get('source');
          this.identifier = decodeURIComponent(this.route.snapshot.paramMap.get('identifier'));
          this.iiifManifest = Object(_tools__WEBPACK_IMPORTED_MODULE_3__["formIIIFManifest"])(this.source, this.identifier);

          if (!this.stateService.mei) {
            this.stateService.mei = new _utils_mei__WEBPACK_IMPORTED_MODULE_2__["MEIDocument"](this.iiifManifest);
          }

          if (this.stateService.mei.metadata != undefined) {
            this.metadataForm.controls.shortTitle.setValue(this.stateService.mei.metadata.shortTitle);
            this.metadataForm.controls.composerName.setValue(this.stateService.mei.metadata.composerName);
            this.metadataForm.controls.notationSubtype.setValue(this.stateService.mei.notationSubtype);
            this.metadataForm.controls.siglum.setValue(this.stateService.mei.metadata.siglum);
            this.metadataForm.controls.genre.setValue(this.stateService.mei.metadata.genre);
            var contributors = this.metadataForm.get('contributors');

            var _iterator2 = _createForOfIteratorHelper(this.stateService.mei.metadata.contributors),
                _step2;

            try {
              for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
                var contributor = _step2.value;
                var temp = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
                  type: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](contributor.type, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
                  name: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](contributor.name, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required)
                });
                contributors.push(temp);
              }
            } catch (err) {
              _iterator2.e(err);
            } finally {
              _iterator2.f();
            }
          }

          this.temp = this.metadataForm.get('contributors');
          console.debug(this.iiifManifest);
          console.debug(this.metadataForm.controls.contributors);
        }

        _createClass(InputComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.stateService.editorialMode = false;
          }
        }, {
          key: "onSetMetadata",
          value: function onSetMetadata() {
            var value = this.metadataForm.value;
            this.stateService.mei.metadata = {
              shortTitle: value.shortTitle,
              composerName: value.composerName,
              contributors: value.contributors.filter(function (entry) {
                return entry.type.length > 0 && entry.name.length > 0;
              }).map(function (entry) {
                return entry;
              }),
              sourceIRI: this.iiifManifest,
              siglum: value.siglum,
              genre: value.genre
            };
            this.stateService.mei.notationSubtype = value.notationSubtype;
            this.inputStep = InputComponent.InputStep.INPUT;
          }
        }, {
          key: "addContributor",
          value: function addContributor() {
            this.temp.push(new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
              type: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]),
              name: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required])
            }));
          }
        }, {
          key: "removeContributor",
          value: function removeContributor(index) {
            this.temp.removeAt(index);
          }
        }]);

        return InputComponent;
      }();

      InputComponent.ɵfac = function InputComponent_Factory(t) {
        return new (t || InputComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_state_service_service__WEBPACK_IMPORTED_MODULE_4__["StateService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"]));
      };

      InputComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: InputComponent,
        selectors: [["app-input"]],
        decls: 237,
        vars: 3,
        consts: [["id", "editor-container"], [3, "iiifManifest"], ["id", "right-side"], ["label", "Metadata Input", 4, "ngIf"], ["label", "Music Input", 4, "ngIf"], ["label", "General Help"], ["label", "Music Input Help"], [1, "hi"], [1, "hi2"], ["label", "Metadata Input"], [3, "formGroup", "submit", 4, "ngIf"], [3, "formGroup", "submit"], ["id", "metadata-header"], [1, "metadataInput"], ["id", "shortTitle", "formControlName", "shortTitle", "required", ""], ["id", "composerName", "formControlName", "composerName", "required", ""], ["id", "notationSubtype", "formControlName", "notationSubtype", "required", ""], ["value", "Ars_antiqua"], ["value", "Ars_nova"], ["value", ""], ["id", "siglum", "formControlName", "siglum", "required", ""], ["id", "genre", "formControlName", "genre", "required", ""], ["value", "Motet"], ["value", "Song"], ["value", "Conductus"], ["value", "Mass Movement"], ["value", "Plainchant"], [4, "ngFor", "ngForOf"], ["color", "primary", "mat-stroked-button", "", "type", "button", 1, "primary-button", 3, "click"], ["color", "primary", "mat-stroked-button", "", "type", "submit", 1, "primary-button"], [3, "formGroup"], [1, "contributor"], ["formControlName", "type", "required", ""], ["value", "encoder"], ["value", "proofreader"], ["value", "editor"], ["formControlName", "name", "required", ""], ["color", "secondary", "mat-stroked-button", "", "type", "button", 1, "secondary-button", 3, "click"], ["label", "Music Input"], [4, "ngIf"]],
        template: function InputComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-diva-view", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-tab-group");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, InputComponent_mat_tab_4_Template, 2, 1, "mat-tab", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, InputComponent_mat_tab_5_Template, 5, 2, "mat-tab", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "mat-tab", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "h2");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Manuscript Navigation");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "ul");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, " To select the page of the manuscript you want to work on, either use the scrollbar to the right of the manuscript or type the folio number in the box and click the ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Go");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, " button. ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, " Click the magnifying boxes for the appropriate zoom level and move around the manuscript using your mouse or the trackpad. ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "mat-divider");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "h2");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Metadata Entry");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, " First enter basic metadata about the document. This includes the name of the work, composer name, and your name. If there is something you don't know, you can leave it as is and continue. ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, " Metadata must be entered before staff input can fully begin. ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](24, "mat-divider");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "h2");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "Staff Entry");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "ul");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, " To select an area for a new staff, hold ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "Shift");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, " and click-and-drag an area for the staff on the Diva.js viewer. When you release the mouse, a staff is added. ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, " To select a staff, click on the bounding box on the viewer. ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, " When a staff is selected, the voice it belongs to and mensuration of that voice can be set on the right. This information is saved automatically. ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, " To add musical components, begin typing. This will add musical elements to the staff below the voice and mensuration options. Information on this is available under the \"Music Input Help\" Tab. ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, " To delete a staff, first select it and then click the \"Delete Staff\" button under the \"Staff Input\" tab. ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](41, "mat-divider");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "h2");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43, "Saving Work for Later");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45, " Work can be saved for later using the ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "em");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](47, "Download MEI File");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](48, " button. This will download the file as a parts-based MEI file that can be reloaded at a later point from the home screen. ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "mat-tab", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "h2");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](51, "Music Input Instructions");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "ul");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "b");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](55, " Adding clef");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "ul");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](58, " Type ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "span", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](60, "C");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](61, " to insert C3 clef, or ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "span", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](63, "F");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](64, " to insert F4 clef.");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](66, " Press the up or down arrows to move the clef to another line.");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "b");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](69, " Adding key signatures");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](70, "ul");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](71, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](72, " Type ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](73, "span", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](74, "k");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](75, " to enter key signature mode after adding a clef.");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](76, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](77, " Then enter the pitch name letter and accidental to add to key signature.");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](78, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](79, " To remove from a key signature, enter the same pitch letter and accidental again.");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](80, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](81, " Example: For F-sharp, type ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](82, "span", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](83, "k f #");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](84, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](85, "b");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](86, " Adding pitches");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](87, "ul");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](88, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](89, " Type pitch ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](90, "span", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](91, "letter");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](92, " name of each note to add them to the line: ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](93, "span", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](94, "f.ed.efgagfgedderfag");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](95, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](96, " Type \"");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](97, "span", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](98, ".");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](99, "\" to add dot after note.");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](100, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](101, " Type \"");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](102, "span", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](103, "r");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](104, "\" to add a rest.");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](105, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](106, " Type ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](107, "span", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](108, "backspace");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](109, " to delete note.");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](110, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](111, " Use capital letters to choose the larger interval for the next pitch. So if you are on `d` and want to go to the `a` a fifth above, type capital A rather than lowercase (which would give the `a` that is a fourth below).");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](112, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](113, "span", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](114, "Up/down");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](115, " arrows transpose last pitch up/down a step.");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](116, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](117, "span", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](118, "Shift-up/down");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](119, " arrows transpose last pitch up/down an octave.");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](120, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](121, "b");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](122, " Adding Accidentals");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](123, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](124, " After adding a note: ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](125, "ul");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](126, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](127, " press ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](128, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](129, "-");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](130, " to add a flat.");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](131, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](132, " press ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](133, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](134, "#");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](135, " to add a sharp.");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](136, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](137, " press ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](138, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](139, "n");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](140, " to add a natural.");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](141, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](142, " press ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](143, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](144, "N");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](145, " to clear accidentals.");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](146, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](147, "b");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](148, " Adding ligatures");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](149, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](150, "Note that while duration of pitches in ligatures can be changed after the fact, ligatures must be specified as pitches are added. ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](151, "ul");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](152, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](153, " After adding a note, press ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](154, "span", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](155, "[");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](156, " to start a ligature.");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](157, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](158, " After adding a note, press ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](159, "span", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](160, "]");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](161, " to end a ligature.");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](162, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](163, "b");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](164, " Adding rhythm");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](165, "ul");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](166, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](167, "span", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](168, "1");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](169, " semibreve, ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](170, "span", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](171, "2");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](172, " minim, ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](173, "span", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](174, "4");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](175, " semiminim, ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](176, "span", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](177, "8");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](178, " fusa, ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](179, "span", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](180, "6");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](181, " semifusa, ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](182, "span", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](183, "0");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](184, " breve, ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](185, "span", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](186, "9");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](187, " long, ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](188, "span", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](189, "7");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](190, " maxima. ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](191, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](192, "i");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](193, "Interleaved method");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](194, ": type (new) rhythm before adding a note. The default rhythm is whole note (semibreve).");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](195, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](196, "i");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](197, "Second-pass method");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](198, ": type pitches first, then select first note and type rhythms to update note rhythms.");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](199, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](200, "i");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](201, "Selective second-pass method");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](202, ": type clef, then most common rhythm, then notes, then click on notes that need rhythms to fix. Typing rhythm number will change rhythm and advance to next note.");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](203, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](204, " left/right arrow keys or tab/shift-tab moves to next/previous note/rest/clef.");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](205, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](206, "b");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](207, " Adding text");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](208, "ul");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](209, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](210, "Click on a note (or left/right arrows or tab/shift-tab to move to target note).");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](211, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](212, "Type text for note, then press tab or right arrow key or click to go to next note.");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](213, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](214, "span", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](215, "backspace");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](216, " delete last letter.");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](217, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](218, "span", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](219, "shift-backspace");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](220, " deletes entire syllable.");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](221, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](222, " Adding a dash at the end of text input for a note marks that this is part of a word that continues to the next note.");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](223, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](224, " To correct mistyped text, click the note to highlight it and press backspace. Then type the new text that belongs to that note.");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](225, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](226, "b");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](227, " Repeating tenor");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](228, "ul");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](229, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](230, "When a staff that belongs to the tenor part is selected, the number of statements can be indicated.");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](231, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](232, "If more than one tenor statement is indicated, a repeating tenor will be generated.");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](233, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](234, "Where the tenor repeats from can be set after entering that element by pressing the \"Set End of Repeating Tenor\" button. The ending will be highlighted in blue. ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](235, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](236, "If no end point is specified, the entire tenor will repeat by default.");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("iiifManifest", ctx.iiifManifest);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.inputStep === 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.inputStep === 1);
          }
        },
        directives: [_diva_view_diva_view_component__WEBPACK_IMPORTED_MODULE_6__["DivaViewComponent"], _angular_material_tabs__WEBPACK_IMPORTED_MODULE_7__["MatTabGroup"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgIf"], _angular_material_tabs__WEBPACK_IMPORTED_MODULE_7__["MatTab"], _angular_material_divider__WEBPACK_IMPORTED_MODULE_9__["MatDivider"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["RequiredValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["SelectControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_x"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgForOf"], _angular_material_button__WEBPACK_IMPORTED_MODULE_10__["MatButton"], _toolbar_toolbar_component__WEBPACK_IMPORTED_MODULE_11__["ToolbarComponent"], _staff_select_staff_select_component__WEBPACK_IMPORTED_MODULE_12__["StaffSelectComponent"]],
        styles: ["#editor-container[_ngcontent-%COMP%] {\n    display: grid;\n    grid-template-columns: repeat(10, 1fr);\n}\n\napp-diva-view[_ngcontent-%COMP%] {\n    grid-column: 1 / 7;\n}\n\n#metadata-header[_ngcontent-%COMP%] {\n    padding-top: 15px;\n    padding-bottom: 15px;\n}\n\n#right-side[_ngcontent-%COMP%] {\n    overflow-y: scroll;\n    grid-column: 7 / 11;\n    margin: 1em;\n    margin-right: 0em;\n}\n\n.metadataInput[_ngcontent-%COMP%] {\n    width: 30em;\n}\n\n.metadataInput[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n    float: right;\n}\n\n.metadataInput[_ngcontent-%COMP%]   select[_ngcontent-%COMP%] {\n    float: right;\n    width: 17em;\n}\n\n.contributor[_ngcontent-%COMP%] {\n    width: 30em;\n}\n\n.contributor[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n    float: right;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaW5wdXQvaW5wdXQuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGFBQWE7SUFDYixzQ0FBc0M7QUFDMUM7O0FBRUE7SUFDSSxrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxpQkFBaUI7SUFDakIsb0JBQW9CO0FBQ3hCOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLG1CQUFtQjtJQUNuQixXQUFXO0lBQ1gsaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0ksV0FBVztBQUNmOztBQUVBO0lBQ0ksWUFBWTtBQUNoQjs7QUFFQTtJQUNJLFlBQVk7SUFDWixXQUFXO0FBQ2Y7O0FBRUE7SUFDSSxXQUFXO0FBQ2Y7O0FBRUE7SUFDSSxZQUFZO0FBQ2hCOztBQUVBOzs7Ozs7RUFNRSIsImZpbGUiOiJzcmMvYXBwL2lucHV0L2lucHV0LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIjZWRpdG9yLWNvbnRhaW5lciB7XG4gICAgZGlzcGxheTogZ3JpZDtcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgxMCwgMWZyKTtcbn1cblxuYXBwLWRpdmEtdmlldyB7XG4gICAgZ3JpZC1jb2x1bW46IDEgLyA3O1xufVxuXG4jbWV0YWRhdGEtaGVhZGVyIHtcbiAgICBwYWRkaW5nLXRvcDogMTVweDtcbiAgICBwYWRkaW5nLWJvdHRvbTogMTVweDtcbn1cblxuI3JpZ2h0LXNpZGUge1xuICAgIG92ZXJmbG93LXk6IHNjcm9sbDtcbiAgICBncmlkLWNvbHVtbjogNyAvIDExO1xuICAgIG1hcmdpbjogMWVtO1xuICAgIG1hcmdpbi1yaWdodDogMGVtO1xufVxuXG4ubWV0YWRhdGFJbnB1dCB7XG4gICAgd2lkdGg6IDMwZW07XG59XG5cbi5tZXRhZGF0YUlucHV0IGlucHV0IHtcbiAgICBmbG9hdDogcmlnaHQ7XG59XG5cbi5tZXRhZGF0YUlucHV0IHNlbGVjdCB7XG4gICAgZmxvYXQ6IHJpZ2h0O1xuICAgIHdpZHRoOiAxN2VtO1xufVxuXG4uY29udHJpYnV0b3Ige1xuICAgIHdpZHRoOiAzMGVtO1xufVxuXG4uY29udHJpYnV0b3IgaW5wdXQge1xuICAgIGZsb2F0OiByaWdodDtcbn1cblxuLyphcHAtdG9vbGJhciB7XG4gICAgZ3JpZC1jb2x1bW46IDMgLyA1O1xufVxuXG5hcHAtc3RhZmYtc2VsZWN0IHtcbiAgICBncmlkLWNvbHVtbjogMyAvIDU7XG59Ki9cbiJdfQ== */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](InputComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-input',
            templateUrl: './input.component.html',
            styleUrls: ['./input.component.css']
          }]
        }], function () {
          return [{
            type: _state_service_service__WEBPACK_IMPORTED_MODULE_4__["StateService"]
          }, {
            type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"]
          }];
        }, null);
      })();

      (function (InputComponent) {
        var InputStep;

        (function (InputStep) {
          InputStep[InputStep["METADATA"] = 0] = "METADATA";
          InputStep[InputStep["INPUT"] = 1] = "INPUT";
        })(InputStep = InputComponent.InputStep || (InputComponent.InputStep = {}));
      })(InputComponent || (InputComponent = {}));
      /***/

    },

    /***/
    "./src/app/input/input.module.ts":
    /*!***************************************!*\
      !*** ./src/app/input/input.module.ts ***!
      \***************************************/

    /*! exports provided: InputModule */

    /***/
    function srcAppInputInputModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "InputModule", function () {
        return InputModule;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/common */
      "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/forms */
      "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
      /* harmony import */


      var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/material/tabs */
      "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/tabs.js");
      /* harmony import */


      var _angular_material_button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/material/button */
      "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
      /* harmony import */


      var _angular_material_divider__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/material/divider */
      "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/divider.js");
      /* harmony import */


      var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/material/dialog */
      "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/dialog.js");
      /* harmony import */


      var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/material/form-field */
      "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/form-field.js");
      /* harmony import */


      var _angular_material_select__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/material/select */
      "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/select.js");
      /* harmony import */


      var _diva_view_diva_view_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ./diva-view/diva-view.component */
      "./src/app/input/diva-view/diva-view.component.ts");
      /* harmony import */


      var _staff_select_staff_select_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ./staff-select/staff-select.component */
      "./src/app/input/staff-select/staff-select.component.ts");
      /* harmony import */


      var _toolbar_toolbar_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! ./toolbar/toolbar.component */
      "./src/app/input/toolbar/toolbar.component.ts");
      /* harmony import */


      var _input_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! ./input.component */
      "./src/app/input/input.component.ts");
      /* harmony import */


      var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! @angular/platform-browser/animations */
      "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/animations.js");

      var InputModule = function InputModule() {
        _classCallCheck(this, InputModule);
      };

      InputModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
        type: InputModule
      });
      InputModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
        factory: function InputModule_Factory(t) {
          return new (t || InputModule)();
        },
        imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_13__["BrowserAnimationsModule"], _angular_material_tabs__WEBPACK_IMPORTED_MODULE_3__["MatTabsModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_4__["MatButtonModule"], _angular_material_divider__WEBPACK_IMPORTED_MODULE_5__["MatDividerModule"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__["MatDialogModule"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__["MatFormFieldModule"], _angular_material_select__WEBPACK_IMPORTED_MODULE_8__["MatSelectModule"]]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](InputModule, {
          declarations: [_diva_view_diva_view_component__WEBPACK_IMPORTED_MODULE_9__["DivaViewComponent"], _staff_select_staff_select_component__WEBPACK_IMPORTED_MODULE_10__["StaffSelectComponent"], _staff_select_staff_select_component__WEBPACK_IMPORTED_MODULE_10__["StaffSelectComponent"], _toolbar_toolbar_component__WEBPACK_IMPORTED_MODULE_11__["ToolbarComponent"], _input_component__WEBPACK_IMPORTED_MODULE_12__["InputComponent"]],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_13__["BrowserAnimationsModule"], _angular_material_tabs__WEBPACK_IMPORTED_MODULE_3__["MatTabsModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_4__["MatButtonModule"], _angular_material_divider__WEBPACK_IMPORTED_MODULE_5__["MatDividerModule"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__["MatDialogModule"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__["MatFormFieldModule"], _angular_material_select__WEBPACK_IMPORTED_MODULE_8__["MatSelectModule"]],
          exports: [_input_component__WEBPACK_IMPORTED_MODULE_12__["InputComponent"]]
        });
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](InputModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
          args: [{
            declarations: [_diva_view_diva_view_component__WEBPACK_IMPORTED_MODULE_9__["DivaViewComponent"], _staff_select_staff_select_component__WEBPACK_IMPORTED_MODULE_10__["StaffSelectComponent"], _staff_select_staff_select_component__WEBPACK_IMPORTED_MODULE_10__["StaffSelectComponent"], _toolbar_toolbar_component__WEBPACK_IMPORTED_MODULE_11__["ToolbarComponent"], _input_component__WEBPACK_IMPORTED_MODULE_12__["InputComponent"]],
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_13__["BrowserAnimationsModule"], _angular_material_tabs__WEBPACK_IMPORTED_MODULE_3__["MatTabsModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_4__["MatButtonModule"], _angular_material_divider__WEBPACK_IMPORTED_MODULE_5__["MatDividerModule"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__["MatDialogModule"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__["MatFormFieldModule"], _angular_material_select__WEBPACK_IMPORTED_MODULE_8__["MatSelectModule"]],
            exports: [_input_component__WEBPACK_IMPORTED_MODULE_12__["InputComponent"]]
          }]
        }], null, null);
      })();
      /***/

    },

    /***/
    "./src/app/input/input.service.ts":
    /*!****************************************!*\
      !*** ./src/app/input/input.service.ts ***!
      \****************************************/

    /*! exports provided: InputService */

    /***/
    function srcAppInputInputServiceTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "InputService", function () {
        return InputService;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! rxjs */
      "./node_modules/rxjs/_esm2015/index.js");

      var InputService = /*#__PURE__*/function (_rxjs__WEBPACK_IMPORT) {
        _inherits(InputService, _rxjs__WEBPACK_IMPORT);

        var _super = _createSuper(InputService);

        function InputService() {
          var _this3;

          _classCallCheck(this, InputService);

          _this3 = _super.call(this);
          _this3._selected = null;
          return _this3;
        }

        _createClass(InputService, [{
          key: "selected",
          get: function get() {
            return this._selected;
          },
          set: function set(system) {
            this._selected = system;
            this.next(this._selected);
          }
        }]);

        return InputService;
      }(rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]);

      InputService.ɵfac = function InputService_Factory(t) {
        return new (t || InputService)();
      };

      InputService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
        token: InputService,
        factory: InputService.ɵfac,
        providedIn: 'root'
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](InputService, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
          args: [{
            providedIn: 'root'
          }]
        }], function () {
          return [];
        }, null);
      })();
      /***/

    },

    /***/
    "./src/app/input/staff-select/staff-select.component.ts":
    /*!**************************************************************!*\
      !*** ./src/app/input/staff-select/staff-select.component.ts ***!
      \**************************************************************/

    /*! exports provided: StaffSelectComponent */

    /***/
    function srcAppInputStaffSelectStaffSelectComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "StaffSelectComponent", function () {
        return StaffSelectComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/forms */
      "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
      /* harmony import */


      var _utils_MusicItem__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../../utils/MusicItem */
      "./src/app/utils/MusicItem.ts");
      /* harmony import */


      var _utils_verovio__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../../utils/verovio */
      "./src/app/utils/verovio.ts");
      /* harmony import */


      var _utils_definitions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../../utils/definitions */
      "./src/app/utils/definitions.ts");
      /* harmony import */


      var _input_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../input.service */
      "./src/app/input/input.service.ts");
      /* harmony import */


      var _state_service_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../../state-service.service */
      "./src/app/state-service.service.ts");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/router */
      "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/common */
      "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
      /* harmony import */


      var _angular_material_button__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @angular/material/button */
      "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");

      var _c0 = ["example"];

      function StaffSelectComponent_form_0_option_7_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "option", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var voice_r6 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("value", voice_r6[0]);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](voice_r6[1]);
        }
      }

      function StaffSelectComponent_form_0_Template(rf, ctx) {
        if (rf & 1) {
          var _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "form", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h1");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Enter Music");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "fieldset");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "label", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Voice:\xA0 ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "select", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function StaffSelectComponent_form_0_Template_select_ngModelChange_6_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r8);

            var ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r7.selected.voice = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, StaffSelectComponent_form_0_option_7_Template, 2, 2, "option", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "h3", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Select Initial Mensuration:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "fieldset");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "legend", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "modus");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "input", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function StaffSelectComponent_form_0_Template_input_ngModelChange_14_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r8);

            var ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r9.selected.parent.modus = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "label", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "3");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, " \xA0 ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "input", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function StaffSelectComponent_form_0_Template_input_ngModelChange_18_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r8);

            var ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r10.selected.parent.modus = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "label", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "2");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, " \xA0 ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "input", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function StaffSelectComponent_form_0_Template_input_ngModelChange_22_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r8);

            var ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r11.selected.parent.modus = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "label", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "N/A");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "fieldset");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "legend", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "tempus");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "input", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function StaffSelectComponent_form_0_Template_input_ngModelChange_28_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r8);

            var ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r12.selected.parent.tempus = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "label", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "3");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, " \xA0 ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "input", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function StaffSelectComponent_form_0_Template_input_ngModelChange_32_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r8);

            var ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r13.selected.parent.tempus = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "label", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, "2");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, " \xA0 ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "input", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function StaffSelectComponent_form_0_Template_input_ngModelChange_36_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r8);

            var ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r14.selected.parent.tempus = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "label", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, "N/A");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "fieldset");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "legend", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, "prolatio");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "input", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function StaffSelectComponent_form_0_Template_input_ngModelChange_42_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r8);

            var ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r15.selected.parent.prolatio = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "label", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44, "3");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45, " \xA0 ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "input", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function StaffSelectComponent_form_0_Template_input_ngModelChange_46_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r8);

            var ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r16.selected.parent.prolatio = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "label", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](48, "2");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](49, " \xA0 ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "input", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function StaffSelectComponent_form_0_Template_input_ngModelChange_50_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r8);

            var ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r17.selected.parent.prolatio = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "label", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](52, "N/A");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx_r0.staffForm);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r0.selected.voice);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r0.voices);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r0.selected.parent.modus);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r0.selected.parent.modus);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r0.selected.parent.modus);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r0.selected.parent.tempus);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r0.selected.parent.tempus);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r0.selected.parent.tempus);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r0.selected.parent.prolatio);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r0.selected.parent.prolatio);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r0.selected.parent.prolatio);
        }
      }

      function StaffSelectComponent_div_3_Template(rf, ctx) {
        if (rf & 1) {
          var _r19 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 31);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "form", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "fieldset");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "legend", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "modus");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "input", 32);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function StaffSelectComponent_div_3_Template_input_ngModelChange_5_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r19);

            var ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r18.selected.contents.m_list[ctx_r18.selected.contents.m_index].m_modus = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "label", 33);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "3");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, " \xA0 ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "input", 34);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function StaffSelectComponent_div_3_Template_input_ngModelChange_9_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r19);

            var ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r20.selected.contents.m_list[ctx_r20.selected.contents.m_index].m_modus = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "label", 35);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "2");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, " \xA0 ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "input", 36);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function StaffSelectComponent_div_3_Template_input_ngModelChange_13_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r19);

            var ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r21.selected.contents.m_list[ctx_r21.selected.contents.m_index].m_modus = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "label", 37);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "N/A");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "fieldset");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "legend", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "tempus");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "input", 38);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function StaffSelectComponent_div_3_Template_input_ngModelChange_19_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r19);

            var ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r22.selected.contents.m_list[ctx_r22.selected.contents.m_index].m_tempus = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "label", 39);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "3");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, " \xA0 ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "input", 40);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function StaffSelectComponent_div_3_Template_input_ngModelChange_23_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r19);

            var ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r23.selected.contents.m_list[ctx_r23.selected.contents.m_index].m_tempus = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "label", 41);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "2");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, " \xA0 ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "input", 42);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function StaffSelectComponent_div_3_Template_input_ngModelChange_27_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r19);

            var ctx_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r24.selected.contents.m_list[ctx_r24.selected.contents.m_index].m_tempus = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "label", 43);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "N/A");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "fieldset");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "legend", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "prolatio");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "input", 44);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function StaffSelectComponent_div_3_Template_input_ngModelChange_33_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r19);

            var ctx_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r25.selected.contents.m_list[ctx_r25.selected.contents.m_index].m_prolatio = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "label", 45);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, "3");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, " \xA0 ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "input", 46);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function StaffSelectComponent_div_3_Template_input_ngModelChange_37_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r19);

            var ctx_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r26.selected.contents.m_list[ctx_r26.selected.contents.m_index].m_prolatio = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "label", 47);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, "2");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, " \xA0 ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "input", 48);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function StaffSelectComponent_div_3_Template_input_ngModelChange_41_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r19);

            var ctx_r27 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r27.selected.contents.m_list[ctx_r27.selected.contents.m_index].m_prolatio = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "label", 49);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43, "N/A");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx_r2.mensurForm);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r2.selected.contents.m_list[ctx_r2.selected.contents.m_index].m_modus);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r2.selected.contents.m_list[ctx_r2.selected.contents.m_index].m_modus);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r2.selected.contents.m_list[ctx_r2.selected.contents.m_index].m_modus);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r2.selected.contents.m_list[ctx_r2.selected.contents.m_index].m_tempus);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r2.selected.contents.m_list[ctx_r2.selected.contents.m_index].m_tempus);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r2.selected.contents.m_list[ctx_r2.selected.contents.m_index].m_tempus);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r2.selected.contents.m_list[ctx_r2.selected.contents.m_index].m_prolatio);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r2.selected.contents.m_list[ctx_r2.selected.contents.m_index].m_prolatio);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r2.selected.contents.m_list[ctx_r2.selected.contents.m_index].m_prolatio);
        }
      }

      function StaffSelectComponent_div_4_Template(rf, ctx) {
        if (rf & 1) {
          var _r29 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 50);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " If the piece has repetitions of the tenor that are not written out in full, please specify here. See \"Music Input Help\" for details. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "button", 51);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function StaffSelectComponent_div_4_Template_button_click_3_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r29);

            var ctx_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r28.repTenorButton();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Set End of Repeating Tenor");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, " \xA0 ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Total Number of Tenor Statements:\xA0 ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "input", 52);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function StaffSelectComponent_div_4_Template_input_ngModelChange_8_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r29);

            var ctx_r30 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r30.selected.parent.repetitions = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r3.selected.parent.repetitions);
        }
      }

      function StaffSelectComponent_button_5_Template(rf, ctx) {
        if (rf & 1) {
          var _r32 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 53);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function StaffSelectComponent_button_5_Template_button_click_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r32);

            var ctx_r31 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r31.finishStep();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Continue to Score Editor\n");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      var StaffSelectComponent = /*#__PURE__*/function () {
        function StaffSelectComponent(selectedSystem, stateService, route, router) {
          _classCallCheck(this, StaffSelectComponent);

          this.selectedSystem = selectedSystem;
          this.stateService = stateService;
          this.route = route;
          this.router = router;
          this.voices = Object.entries(_utils_definitions__WEBPACK_IMPORTED_MODULE_4__["Voice"]);
          this.keySigMode = false;
          this.pitchSig = null;
          this.accidSig = null;
          this.selected = null;
          this.staffForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
            voice: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](''),
            modus: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](''),
            tempus: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](''),
            prolatio: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('')
          });
          this.mensurForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
            modus2: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](''),
            tempus2: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](''),
            prolatio2: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('')
          });
        }

        _createClass(StaffSelectComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this4 = this;

            this.selectedSystem.subscribe({
              next: function next(staff) {
                _this4.selected = staff;
                _this4.container.nativeElement.innerHTML = '';
                if (staff === null) return;

                var element = _utils_verovio__WEBPACK_IMPORTED_MODULE_3__["vrvToolkit"].humdrumToSVG(staff.contents.getHumdrumScore());

                _this4.container.nativeElement.appendChild(element);
              }
            });
          }
        }, {
          key: "updateSVG",
          value: function updateSVG() {
            var white = this.selectedSystem.selected.parent.parent.notationType === "mensural.white";

            var element = _utils_verovio__WEBPACK_IMPORTED_MODULE_3__["vrvToolkit"].humdrumToSVG(this.selectedSystem.selected.contents.getHumdrumScore({
              white: white
            }));

            this.container.nativeElement.innerHTML = '';
            this.container.nativeElement.appendChild(element);

            if (/^[tT]enor/.test(this.selectedSystem.selected.parent.voice)) {
              var tenor = this.selectedSystem.selected.parent;

              if (tenor.endingId !== undefined) {
                var endNote = element.getElementById(tenor.endingId);

                if (endNote !== null) {
                  endNote.setAttribute('fill', '#00f');
                }
              }
            }
          }
        }, {
          key: "handleClick",
          value: function handleClick(event) {
            var target = event.target;

            while (target) {
              if (target.nodeName === 'g') {
                var matches = void 0;

                if (matches = target.id.match(/-.*L(\d+)/)) {
                  this.selectedSystem.selected.contents.selectItemByLine(parseInt(matches[1]));
                  this.updateSVG();
                  break;
                }
              }

              target = target.parentNode;
            }
          }
        }, {
          key: "finishStep",
          value: function finishStep() {
            // const mei = this.meiService.generateFullMEI();
            var type = this.route.snapshot.paramMap.get('source');
            var identifier = this.route.snapshot.paramMap.get('identifier'); // this.stateService.mei = mei;

            this.router.navigate(['/score', type, identifier]);
          }
        }, {
          key: "repTenorButton",
          value: function repTenorButton() {
            var tenor = this.stateService.mei.getPart(_utils_definitions__WEBPACK_IMPORTED_MODULE_4__["Voice"].tenor);

            try {
              var layer = this.container.nativeElement.querySelector('.layer');
              var id = layer.lastElementChild.id;
              var regexpInfo = id.match(/L(\d+)[\w\d]+$/);
              var line = parseInt(regexpInfo[1]);
              var match = this.selectedSystem.selected.contents.m_list.filter(function (el) {
                return el.m_line === line;
              });
              tenor.endingId = match[0].m_id;
            } catch (e) {
              console.debug(e);
              tenor.endingId = undefined;
            }

            this.updateSVG();
          }
        }, {
          key: "handleKeyPress",
          value: function handleKeyPress(event) {
            if (this.selectedSystem.selected == null) return;

            if (this.keySigMode) {
              this.handleKeySigPress(event);
              event.preventDefault();
              this.updateSVG();
              return;
            } // Based on processKeypress function in mensural-input


            if (event.metaKey) return;
            var musicList = this.selectedSystem.selected.contents;

            if (musicList.m_index >= 0 && event.key.length === 1) {
              if (event.key >= '0' && event.key <= '9') {
                this.processDigit(Number(event.key), event);
                event.preventDefault();
                this.updateSVG();
                return;
              }

              if (event.key !== ' ') {
                var state = musicList.addTextToCurrentItem(event.key);

                if (state) {
                  event.preventDefault();
                  this.updateSVG();
                  return;
                }
              }
            }

            if (musicList.m_index >= 0 && event.key === 'Backspace') {
              if (event.shiftKey) {
                musicList.clearTextOnCurrentItem();
              } else {
                musicList.deleteCharacterOnCurrentItem();
              }

              event.preventDefault();
            } else if (musicList.m_index < 0 && event.key === 'Backspace') {
              musicList.removeLastItem();
              event.preventDefault();
            } else {
              switch (event.key) {
                case 'k':
                  this.keySigMode = true;
                  console.debug("Set keySigMode");
                  event.preventDefault();
                  break;

                case 'C':
                  musicList.addPitchFar(_utils_MusicItem__WEBPACK_IMPORTED_MODULE_2__["PitchClass"].C);
                  event.preventDefault();
                  break;

                case 'c':
                  musicList.addPitchNear(_utils_MusicItem__WEBPACK_IMPORTED_MODULE_2__["PitchClass"].C);
                  event.preventDefault();
                  break;

                case 'D':
                  musicList.addPitchFar(_utils_MusicItem__WEBPACK_IMPORTED_MODULE_2__["PitchClass"].D);
                  event.preventDefault();
                  break;

                case 'd':
                  musicList.addPitchNear(_utils_MusicItem__WEBPACK_IMPORTED_MODULE_2__["PitchClass"].D);
                  event.preventDefault();
                  break;

                case 'E':
                  musicList.addPitchFar(_utils_MusicItem__WEBPACK_IMPORTED_MODULE_2__["PitchClass"].E);
                  event.preventDefault();
                  break;

                case 'e':
                  musicList.addPitchNear(_utils_MusicItem__WEBPACK_IMPORTED_MODULE_2__["PitchClass"].E);
                  event.preventDefault();
                  break;

                case 'F':
                  musicList.addPitchFar(_utils_MusicItem__WEBPACK_IMPORTED_MODULE_2__["PitchClass"].F);
                  event.preventDefault();
                  break;

                case 'f':
                  musicList.addPitchNear(_utils_MusicItem__WEBPACK_IMPORTED_MODULE_2__["PitchClass"].F);
                  event.preventDefault();
                  break;

                case 'G':
                  musicList.addPitchFar(_utils_MusicItem__WEBPACK_IMPORTED_MODULE_2__["PitchClass"].G);
                  event.preventDefault();
                  break;

                case 'g':
                  musicList.addPitchNear(_utils_MusicItem__WEBPACK_IMPORTED_MODULE_2__["PitchClass"].G);
                  event.preventDefault();
                  break;

                case 'A':
                  musicList.addPitchFar(_utils_MusicItem__WEBPACK_IMPORTED_MODULE_2__["PitchClass"].A);
                  event.preventDefault();
                  break;

                case 'a':
                  musicList.addPitchNear(_utils_MusicItem__WEBPACK_IMPORTED_MODULE_2__["PitchClass"].A);
                  event.preventDefault();
                  break;

                case 'B':
                  musicList.addPitchFar(_utils_MusicItem__WEBPACK_IMPORTED_MODULE_2__["PitchClass"].B);
                  event.preventDefault();
                  break;

                case 'b':
                  musicList.addPitchNear(_utils_MusicItem__WEBPACK_IMPORTED_MODULE_2__["PitchClass"].B);
                  event.preventDefault();
                  break;

                case 'm':
                case 'M':
                  if (!musicList.hasOpenLigature()) {
                    musicList.addMensur();
                  }

                  event.preventDefault();
                  break;

                case 'p':
                case 'P':
                  this.processPlica(event.key);
                  event.preventDefault();
                  break;

                case 'r':
                case 'R':
                  if (!musicList.hasOpenLigature()) {
                    musicList.addRest();
                  } else {
                    alert("Can't enter a rest in an open ligature! Please close first.");
                  }

                  event.preventDefault();
                  break;

                case '.':
                  this.processDotKey();
                  event.preventDefault();
                  break;

                case '0':
                case '1':
                case '2':
                case '3':
                case '4':
                case '5':
                case '6':
                case '7':
                case '8':
                case '9':
                  this.processDigit(Number(event.key), event);
                  event.preventDefault();
                  break;

                case 'Tab':
                  if (event.shiftKey) {
                    musicList.selectBackward();
                  } else {
                    musicList.selectForward();
                  }

                  event.preventDefault();
                  break;

                case ' ':
                case 'ArrowRight':
                  musicList.selectForward();
                  event.preventDefault();
                  break;

                case 'ArrowLeft':
                  musicList.selectBackward();
                  event.preventDefault();
                  break;

                case 'ArrowUp':
                  musicList.raisePitch(event.shiftKey ? 7 : 1);
                  event.preventDefault();
                  break;

                case 'ArrowDown':
                  musicList.lowerPitch(event.shiftKey ? 7 : 1);
                  event.preventDefault();
                  break;

                case 'End':
                  musicList.goToEndOfList();
                  event.preventDefault();
                  break;

                case '[':
                  if (!musicList.hasOpenLigature()) {
                    this.processLig(true);
                  } else {
                    alert("A ligature is already open!");
                  }

                  event.preventDefault();
                  break;

                case ']':
                  if (musicList.hasOpenLigature()) {
                    this.processLig(false);
                  } else {
                    alert("No open ligature to close!");
                  }

                  event.preventDefault();
                  break;

                case '#':
                case '-':
                case 'N':
                case 'n':
                  this.processAccidental(event.key);
                  event.preventDefault();
                  break;
              }
            }

            this.updateSVG();
          }
        }, {
          key: "processDigit",
          value: function processDigit(digit, _event) {
            var musicList = this.selectedSystem.selected.contents;

            if (musicList.m_list.length === 0) {
              if (digit !== 3) {
                musicList.m_rhythm = digit;
              }

              return;
            }

            var index = musicList.m_index;
            var ending = false;

            if (index < 0) {
              index = musicList.m_list.length - 1;
              ending = true;
            }

            var item = musicList.m_list[index];

            if (item.m_type === 'clef') {
              if (digit !== 3) {
                musicList.m_rhythm = digit;
              }

              musicList.runNotationCallback();
              return;
            } else if (ending) {
              musicList.m_rhythm = digit;
            } else if (item.m_type === 'note' || item.m_type === 'rest') {
              if (!ending) {
                if (digit !== 3) {
                  if (item.m_type === "note") {
                    item.m_rhythm = digit;
                  } else {
                    item.m_rhythm = digit;
                  }

                  musicList.m_index += 1;
                  musicList.m_rhythm = digit;
                  musicList.runNotationCallback();
                }

                if (musicList.m_index >= musicList.m_list.length) {
                  musicList.m_index = -1;
                }
              }
            }
          }
        }, {
          key: "processDotKey",
          value: function processDotKey() {
            var musicList = this.selectedSystem.selected.contents;

            if (musicList.m_list.length === 0) {
              return;
            }

            var index = musicList.m_index;

            if (index < 0) {
              index = musicList.m_list.length - 1;
            }

            var item = musicList.m_list[index];

            if (item.m_type === 'note') {
              var note = item;
              note.m_dot = !note.m_dot;
              musicList.runNotationCallback();
              return;
            }
          }
        }, {
          key: "processLig",
          value: function processLig(isStart) {
            var musicList = this.selectedSystem.selected.contents;

            if (musicList.m_list.length === 0) {
              return;
            }

            var index = musicList.m_index;

            if (index < 0) {
              index = musicList.m_list.length - 1;
            }

            var item = musicList.m_list[index];

            if (item.m_type === 'note') {
              var note = item;

              if (isStart) {
                note.m_lig = note.m_lig === _utils_MusicItem__WEBPACK_IMPORTED_MODULE_2__["LigStatus"].START ? _utils_MusicItem__WEBPACK_IMPORTED_MODULE_2__["LigStatus"].NONE : _utils_MusicItem__WEBPACK_IMPORTED_MODULE_2__["LigStatus"].START;
              } else {
                note.m_lig = note.m_lig === _utils_MusicItem__WEBPACK_IMPORTED_MODULE_2__["LigStatus"].END ? _utils_MusicItem__WEBPACK_IMPORTED_MODULE_2__["LigStatus"].NONE : _utils_MusicItem__WEBPACK_IMPORTED_MODULE_2__["LigStatus"].END;
              }

              musicList.runNotationCallback();
              return;
            }
          }
        }, {
          key: "processPlica",
          value: function processPlica(key) {
            var musicList = this.selectedSystem.selected.contents;

            if (musicList.m_list.length === 0) {
              return;
            }

            var index = musicList.m_index;

            if (index < 0) {
              index = musicList.m_list.length - 1;
            }

            var item = musicList.m_list[index];

            if (item.m_type === 'note') {
              var note = item;

              if (key === 'p') {
                note.m_plica = note.m_plica === _utils_MusicItem__WEBPACK_IMPORTED_MODULE_2__["PlicaStatus"].DOWN ? _utils_MusicItem__WEBPACK_IMPORTED_MODULE_2__["PlicaStatus"].NONE : _utils_MusicItem__WEBPACK_IMPORTED_MODULE_2__["PlicaStatus"].DOWN;
              } else {
                note.m_plica = note.m_plica === _utils_MusicItem__WEBPACK_IMPORTED_MODULE_2__["PlicaStatus"].UP ? _utils_MusicItem__WEBPACK_IMPORTED_MODULE_2__["PlicaStatus"].NONE : _utils_MusicItem__WEBPACK_IMPORTED_MODULE_2__["PlicaStatus"].UP;
              }

              musicList.runNotationCallback();
              return;
            }
          }
        }, {
          key: "handleKeySigPress",
          value: function handleKeySigPress(event) {
            switch (event.key) {
              case 'a':
              case 'A':
              case 'b':
              case 'B':
              case 'c':
              case 'C':
              case 'd':
              case 'D':
              case 'e':
              case 'E':
              case 'f':
              case 'F':
              case 'g':
              case 'G':
                if (this.pitchSig === null) {
                  this.pitchSig = event.key;
                } else {
                  this.pitchSig = null;
                  this.accidSig = null;
                  this.keySigMode = false;
                  console.debug("unset keySigMode");
                }

                break;

              case '#':
              case '-':
              case 'n':
                if (this.pitchSig !== null && this.accidSig === null) {
                  this.accidSig = event.key;
                  var musicList = this.selectedSystem.selected.contents;
                  musicList.processKeySig(this.pitchSig, this.accidSig);
                  console.debug("Process with " + this.pitchSig + " and " + this.accidSig);
                }

                this.pitchSig = null;
                this.accidSig = null;
                this.keySigMode = false;
                console.debug("unset keySigMode");
                break;
            }
          }
        }, {
          key: "processAccidental",
          value: function processAccidental(accid) {
            var musicList = this.selectedSystem.selected.contents;

            if (musicList.m_list.length === 0) {
              return;
            }

            var index = musicList.m_index;

            if (index < 0) {
              index = musicList.m_list.length - 1;
            }

            var item = musicList.m_list[index];

            if (item.m_type === 'note') {
              var note = item;

              switch (accid) {
                case 'N':
                  note.m_accid = _utils_MusicItem__WEBPACK_IMPORTED_MODULE_2__["Accid"].NONE;
                  break;

                case '#':
                  note.m_accid = _utils_MusicItem__WEBPACK_IMPORTED_MODULE_2__["Accid"].SHARP;
                  break;

                case '-':
                  note.m_accid = _utils_MusicItem__WEBPACK_IMPORTED_MODULE_2__["Accid"].FLAT;
                  break;

                case 'n':
                  note.m_accid = _utils_MusicItem__WEBPACK_IMPORTED_MODULE_2__["Accid"].NATURAL;
                  break;
              }

              musicList.runNotationCallback();
            }
          }
        }]);

        return StaffSelectComponent;
      }();

      StaffSelectComponent.ɵfac = function StaffSelectComponent_Factory(t) {
        return new (t || StaffSelectComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_input_service__WEBPACK_IMPORTED_MODULE_5__["InputService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_state_service_service__WEBPACK_IMPORTED_MODULE_6__["StateService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_7__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"]));
      };

      StaffSelectComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: StaffSelectComponent,
        selectors: [["app-staff-select"]],
        viewQuery: function StaffSelectComponent_Query(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, true);
          }

          if (rf & 2) {
            var _t;

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.container = _t.first);
          }
        },
        hostBindings: function StaffSelectComponent_HostBindings(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("keydown", function StaffSelectComponent_keydown_HostBindingHandler($event) {
              return ctx.handleKeyPress($event);
            }, false, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresolveDocument"]);
          }
        },
        decls: 6,
        vars: 4,
        consts: [[3, "formGroup", 4, "ngIf"], [3, "click"], ["example", ""], ["id", "mensur-change", 4, "ngIf"], ["id", "tenor-section", 4, "ngIf"], ["color", "primary", "class", "primary-button", "mat-stroked-button", "", 3, "click", 4, "ngIf"], [3, "formGroup"], [1, "music-subentry"], ["formControlName", "voice", 3, "ngModel", "ngModelChange"], [3, "value", 4, "ngFor", "ngForOf"], [1, "flex-container"], [1, "mensuration"], ["type", "radio", "id", "modus-3", "formControlName", "modus", "value", "3", 3, "ngModel", "ngModelChange"], ["for", "modus-3"], ["type", "radio", "id", "modus-2", "formControlName", "modus", "value", "2", 3, "ngModel", "ngModelChange"], ["for", "modus-2"], ["type", "radio", "id", "modus-na", "formControlName", "modus", "value", "N/A", 3, "ngModel", "ngModelChange"], ["for", "modus-na"], ["type", "radio", "id", "tempus-3", "formControlName", "tempus", "value", "3", 3, "ngModel", "ngModelChange"], ["for", "tempus-3"], ["type", "radio", "id", "tempus-2", "formControlName", "tempus", "value", "2", 3, "ngModel", "ngModelChange"], ["for", "tempus-2"], ["type", "radio", "id", "tempus-na", "formControlName", "tempus", "value", "N/A", 3, "ngModel", "ngModelChange"], ["for", "tempus-na"], ["type", "radio", "id", "prolatio-3", "formControlName", "prolatio", "value", "3", 3, "ngModel", "ngModelChange"], ["for", "prolatio-3"], ["type", "radio", "id", "prolatio-2", "formControlName", "prolatio", "value", "2", 3, "ngModel", "ngModelChange"], ["for", "prolatio-2"], ["type", "radio", "id", "prolatio-na", "formControlName", "prolatio", "value", "N/A", 3, "ngModel", "ngModelChange"], ["for", "prolatio-na"], [3, "value"], ["id", "mensur-change"], ["type", "radio", "id", "modus2-3", "formControlName", "modus2", "value", "3", 3, "ngModel", "ngModelChange"], ["for", "modus2-3"], ["type", "radio", "id", "modus2-2", "formControlName", "modus2", "value", "2", 3, "ngModel", "ngModelChange"], ["for", "modus2-2"], ["type", "radio", "id", "modus2-na", "formControlName", "modus2", "value", "N/A", 3, "ngModel", "ngModelChange"], ["for", "modus2-na"], ["type", "radio", "id", "tempus2-3", "formControlName", "tempus2", "value", "3", 3, "ngModel", "ngModelChange"], ["for", "tempus2-3"], ["type", "radio", "id", "tempus2-2", "formControlName", "tempus2", "value", "2", 3, "ngModel", "ngModelChange"], ["for", "tempus2-2"], ["type", "radio", "id", "tempus2-na", "formControlName", "tempus2", "value", "N/A", 3, "ngModel", "ngModelChange"], ["for", "tempus2-na"], ["type", "radio", "id", "prolatio2-3", "formControlName", "prolatio2", "value", "3", 3, "ngModel", "ngModelChange"], ["for", "prolatio2-3"], ["type", "radio", "id", "prolatio2-2", "formControlName", "prolatio2", "value", "2", 3, "ngModel", "ngModelChange"], ["for", "prolatio2-2"], ["type", "radio", "id", "prolatio2-na", "formControlName", "prolatio2", "value", "N/A", 3, "ngModel", "ngModelChange"], ["for", "prolatio2-na"], ["id", "tenor-section"], ["mat-stroked-button", "", 1, "primary-button", 3, "click"], ["type", "number", "min", "1", 3, "ngModel", "ngModelChange"], ["color", "primary", "mat-stroked-button", "", 1, "primary-button", 3, "click"]],
        template: function StaffSelectComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, StaffSelectComponent_form_0_Template, 53, 12, "form", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1, 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function StaffSelectComponent_Template_div_click_1_listener($event) {
              return ctx.handleClick($event);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, StaffSelectComponent_div_3_Template, 44, 10, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, StaffSelectComponent_div_4_Template, 9, 1, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, StaffSelectComponent_button_5_Template, 2, 0, "button", 5);
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.selected);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.selected && ctx.selected.contents.m_index >= 0 && ctx.selected.contents.m_list[ctx.selected.contents.m_index].m_type == "mensur");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.selected && ctx.selected.voice === "tenor");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.selected);
          }
        },
        directives: [_angular_common__WEBPACK_IMPORTED_MODULE_8__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["SelectControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgForOf"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["RadioControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_x"], _angular_material_button__WEBPACK_IMPORTED_MODULE_9__["MatButton"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NumberValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgModel"]],
        styles: [".flex-container[_ngcontent-%COMP%] {\n    display: flex;\n}\n\nform[_ngcontent-%COMP%] {\n    padding-top: 0.5em;\n}\n\n.music-subentry[_ngcontent-%COMP%] {\n    font-size: 1.75rem;\n    font-weight: 500;\n    margin-top: 0.75rem;\n}\n\n.mensuration[_ngcontent-%COMP%] {\n    font-size: 1.25rem;\n}\n\n#tenor-section[_ngcontent-%COMP%] {\n    \n    background-color: #f9f0dc;\n    border-style: solid;\n    border-width: 1px;\n    padding-left: 10px;\n    padding-right: 10px;\n    margin-bottom: 1rem;\n}\n\n\n\nfieldset[_ngcontent-%COMP%] {\n    padding-right: 2.5em;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaW5wdXQvc3RhZmYtc2VsZWN0L3N0YWZmLXNlbGVjdC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksYUFBYTtBQUNqQjs7QUFFQTtJQUNJLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixnQkFBZ0I7SUFDaEIsbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksNkJBQTZCO0lBQzdCLHlCQUF5QjtJQUN6QixtQkFBbUI7SUFDbkIsaUJBQWlCO0lBQ2pCLGtCQUFrQjtJQUNsQixtQkFBbUI7SUFDbkIsbUJBQW1CO0FBQ3ZCOztBQUVBOzs7RUFHRTs7QUFFRjtJQUNJLG9CQUFvQjtBQUN4QiIsImZpbGUiOiJzcmMvYXBwL2lucHV0L3N0YWZmLXNlbGVjdC9zdGFmZi1zZWxlY3QuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5mbGV4LWNvbnRhaW5lciB7XG4gICAgZGlzcGxheTogZmxleDtcbn1cblxuZm9ybSB7XG4gICAgcGFkZGluZy10b3A6IDAuNWVtO1xufVxuXG4ubXVzaWMtc3ViZW50cnkge1xuICAgIGZvbnQtc2l6ZTogMS43NXJlbTtcbiAgICBmb250LXdlaWdodDogNTAwO1xuICAgIG1hcmdpbi10b3A6IDAuNzVyZW07XG59XG5cbi5tZW5zdXJhdGlvbiB7XG4gICAgZm9udC1zaXplOiAxLjI1cmVtO1xufVxuXG4jdGVub3Itc2VjdGlvbiB7XG4gICAgLypiYWNrZ3JvdW5kLWNvbG9yOiAjREJEMUMxOyovXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2Y5ZjBkYztcbiAgICBib3JkZXItc3R5bGU6IHNvbGlkO1xuICAgIGJvcmRlci13aWR0aDogMXB4O1xuICAgIHBhZGRpbmctbGVmdDogMTBweDtcbiAgICBwYWRkaW5nLXJpZ2h0OiAxMHB4O1xuICAgIG1hcmdpbi1ib3R0b206IDFyZW07XG59XG5cbi8qZm9ybSB7XG4gICAgcGFkZGluZy1sZWZ0OiAxLjVlbTtcbiAgICBwYWRkaW5nLXJpZ2h0OiAxLjVlbTtcbn0qL1xuXG5maWVsZHNldCB7XG4gICAgcGFkZGluZy1yaWdodDogMi41ZW07XG59XG4iXX0= */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](StaffSelectComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-staff-select',
            templateUrl: './staff-select.component.html',
            styleUrls: ['./staff-select.component.css']
          }]
        }], function () {
          return [{
            type: _input_service__WEBPACK_IMPORTED_MODULE_5__["InputService"]
          }, {
            type: _state_service_service__WEBPACK_IMPORTED_MODULE_6__["StateService"]
          }, {
            type: _angular_router__WEBPACK_IMPORTED_MODULE_7__["ActivatedRoute"]
          }, {
            type: _angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"]
          }];
        }, {
          container: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['example']
          }],
          handleKeyPress: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
            args: ['document:keydown', ['$event']]
          }]
        });
      })();
      /***/

    },

    /***/
    "./src/app/input/toolbar/toolbar.component.ts":
    /*!****************************************************!*\
      !*** ./src/app/input/toolbar/toolbar.component.ts ***!
      \****************************************************/

    /*! exports provided: ToolbarComponent */

    /***/
    function srcAppInputToolbarToolbarComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ToolbarComponent", function () {
        return ToolbarComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var vkbeautify__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! vkbeautify */
      "./node_modules/vkbeautify/index.js");
      /* harmony import */


      var vkbeautify__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(vkbeautify__WEBPACK_IMPORTED_MODULE_1__);
      /* harmony import */


      var _input_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../input.service */
      "./src/app/input/input.service.ts");
      /* harmony import */


      var _state_service_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../../state-service.service */
      "./src/app/state-service.service.ts");
      /* harmony import */


      var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/material/dialog */
      "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/dialog.js");
      /* harmony import */


      var _angular_material_button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/material/button */
      "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/common */
      "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

      function ToolbarComponent_button_4_Template(rf, ctx) {
        if (rf & 1) {
          var _r36 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ToolbarComponent_button_4_Template_a_click_1_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r36);

            var ctx_r35 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r35.saveHumdrumClick($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " Download System Humdrum ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function ToolbarComponent_button_5_Template(rf, ctx) {
        if (rf & 1) {
          var _r38 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ToolbarComponent_button_5_Template_button_click_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r38);

            var ctx_r37 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r37.deleteStaff();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Delete Staff ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      var ToolbarComponent = /*#__PURE__*/function () {
        function ToolbarComponent(selectedSystem, stateService, dialog) {
          _classCallCheck(this, ToolbarComponent);

          this.selectedSystem = selectedSystem;
          this.stateService = stateService;
          this.dialog = dialog;
        }

        _createClass(ToolbarComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this5 = this;

            this.selectedSystem.subscribe(function (system) {
              _this5.currentStaff = system;
            });
          }
        }, {
          key: "saveClick",
          value: function saveClick(evt) {
            var target = evt.target;
            var mei = this.stateService.mei.generateXML();
            var serializer = new XMLSerializer();
            var content = vkbeautify__WEBPACK_IMPORTED_MODULE_1__["xml"](serializer.serializeToString(mei));
            var blob = new Blob([content], {
              type: 'application/xml'
            });
            target.setAttribute('href', window.URL.createObjectURL(blob));
          }
        }, {
          key: "saveHumdrumClick",
          value: function saveHumdrumClick(evt) {
            var target = evt.target;
            var white = this.currentStaff.parent.parent.notationType === "mensural.white";
            var content = this.currentStaff.contents.getHumdrumScore({
              white: white
            });
            var blob = new Blob([content], {
              type: 'text/plain'
            });
            target.setAttribute('href', window.URL.createObjectURL(blob));
          }
        }, {
          key: "deleteStaff",
          value: function deleteStaff() {
            var system = this.currentStaff;
            var part = system.parent;
            part.removeSystem(system.id);
            this.selectedSystem.next(null);
          }
        }]);

        return ToolbarComponent;
      }();

      ToolbarComponent.ɵfac = function ToolbarComponent_Factory(t) {
        return new (t || ToolbarComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_input_service__WEBPACK_IMPORTED_MODULE_2__["InputService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_state_service_service__WEBPACK_IMPORTED_MODULE_3__["StateService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__["MatDialog"]));
      };

      ToolbarComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: ToolbarComponent,
        selectors: [["app-toolbar"]],
        decls: 6,
        vars: 2,
        consts: [[1, "toolbar-container"], ["mat-stroked-button", ""], ["download", "", "type", "application/xml", 3, "click"], ["mat-stroked-button", "", 4, "ngIf"], ["mat-stroked-button", "", 3, "click", 4, "ngIf"], ["download", "", "type", "text/plain", 3, "click"], ["mat-stroked-button", "", 3, "click"]],
        template: function ToolbarComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "a", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ToolbarComponent_Template_a_click_2_listener($event) {
              return ctx.saveClick($event);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " Download MEI File ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, ToolbarComponent_button_4_Template, 3, 0, "button", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, ToolbarComponent_button_5_Template, 2, 0, "button", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.currentStaff);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.currentStaff);
          }
        },
        directives: [_angular_material_button__WEBPACK_IMPORTED_MODULE_5__["MatButton"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"]],
        styles: [".toolbar-container[_ngcontent-%COMP%] {\n    display: flex;\n    flex-wrap: wrap;\n    padding-top: 0.5em;\n    padding-bottom: 0.5em;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaW5wdXQvdG9vbGJhci90b29sYmFyLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxhQUFhO0lBQ2IsZUFBZTtJQUNmLGtCQUFrQjtJQUNsQixxQkFBcUI7QUFDekIiLCJmaWxlIjoic3JjL2FwcC9pbnB1dC90b29sYmFyL3Rvb2xiYXIuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi50b29sYmFyLWNvbnRhaW5lciB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LXdyYXA6IHdyYXA7XG4gICAgcGFkZGluZy10b3A6IDAuNWVtO1xuICAgIHBhZGRpbmctYm90dG9tOiAwLjVlbTtcbn1cbiJdfQ== */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ToolbarComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-toolbar',
            templateUrl: './toolbar.component.html',
            styleUrls: ['./toolbar.component.css']
          }]
        }], function () {
          return [{
            type: _input_service__WEBPACK_IMPORTED_MODULE_2__["InputService"]
          }, {
            type: _state_service_service__WEBPACK_IMPORTED_MODULE_3__["StateService"]
          }, {
            type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__["MatDialog"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "./src/app/score-editor/doc.service.ts":
    /*!*********************************************!*\
      !*** ./src/app/score-editor/doc.service.ts ***!
      \*********************************************/

    /*! exports provided: DocService */

    /***/
    function srcAppScoreEditorDocServiceTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "DocService", function () {
        return DocService;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! rxjs */
      "./node_modules/rxjs/_esm2015/index.js");

      var DocService = /*#__PURE__*/function () {
        function DocService() {
          _classCallCheck(this, DocService);

          this._parts = null;
          this._score = null;
          this._partsSubject = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
          this._scoreSubject = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
        }

        _createClass(DocService, [{
          key: "parts",
          get: function get() {
            return this._parts;
          },
          set: function set(doc) {
            this._parts = doc;

            this._partsSubject.next(this._parts);
          }
        }, {
          key: "score",
          get: function get() {
            return this._score;
          },
          set: function set(doc) {
            this._score = doc;

            this._scoreSubject.next(this._score);
          }
        }]);

        return DocService;
      }();

      DocService.ɵfac = function DocService_Factory(t) {
        return new (t || DocService)();
      };

      DocService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
        token: DocService,
        factory: DocService.ɵfac,
        providedIn: 'root'
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DocService, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
          args: [{
            providedIn: 'root'
          }]
        }], function () {
          return [];
        }, null);
      })();
      /***/

    },

    /***/
    "./src/app/score-editor/score-diva-view/score-diva-view.component.ts":
    /*!***************************************************************************!*\
      !*** ./src/app/score-editor/score-diva-view/score-diva-view.component.ts ***!
      \***************************************************************************/

    /*! exports provided: ScoreDivaViewComponent */

    /***/
    function srcAppScoreEditorScoreDivaViewScoreDivaViewComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ScoreDivaViewComponent", function () {
        return ScoreDivaViewComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var diva_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! diva.js */
      "./node_modules/diva.js/source/js/diva.js");
      /* harmony import */


      var _selected_staff_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../selected-staff.service */
      "./src/app/score-editor/selected-staff.service.ts");

      var ScoreDivaViewComponent = /*#__PURE__*/function () {
        function ScoreDivaViewComponent(staffService) {
          _classCallCheck(this, ScoreDivaViewComponent);

          this.staffService = staffService;
          this.pageToCanvasMap = new Map();
        }

        _createClass(ScoreDivaViewComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this6 = this;

            this.diva = new diva_js__WEBPACK_IMPORTED_MODULE_1__["default"]('diva-score-wrapper', {
              objectData: this.iiifManifest
            });
            diva_js__WEBPACK_IMPORTED_MODULE_1__["default"].Events.subscribe('ManifestDidLoad', this.parseCanvases.bind(this), this.diva.settings.ID);
            diva_js__WEBPACK_IMPORTED_MODULE_1__["default"].Events.subscribe('ZoomLevelDidChange', this.handleZoom.bind(this), this.diva.settings.ID);
            this.staffService.getStaffLocation().subscribe(function (_ref) {
              var _ref2 = _slicedToArray(_ref, 2),
                  iri = _ref2[0],
                  bbox = _ref2[1];

              _this6.iri = iri;
              _this6.bbox = bbox;
              console.debug(iri);
              console.debug(bbox);

              _this6.redraw();
            });
          }
        }, {
          key: "handleZoom",
          value: function handleZoom() {
            var _this7 = this;

            new Promise(function (resolve) {
              document.getElementById("score-editor-container").style.display = "none";
              setTimeout(resolve, _this7.diva.settings.zoomDuration + 100);
            }).then(function () {
              _this7.redraw();

              document.getElementById("score-editor-container").style.display = "";
            });
          }
        }, {
          key: "redraw",
          value: function redraw() {
            var index = this.pageToCanvasMap.get(this.iri);

            if (index === undefined) {
              return;
            } // Change to correct folio if necessary


            if (!this.diva.getCurrentPageIndices().includes(index)) {
              this.diva.gotoPageByIndex(index);
            } // Get the inner element and dimensions


            var inner = this.diva.settings.innerElement;
            var dimensions = this.diva.getPageDimensionsAtCurrentZoomLevel(index);

            var offset = this.diva.settings.viewHandler._viewerCore.getPageRegion(index, {
              includePadding: true,
              incorporateViewport: true
            });

            var marginLeft = getComputedStyle(inner, null).getPropertyValue('margin-left'); // Check for the container div or create one

            var container = document.getElementById("score-editor-container");

            if (container === null) {
              container = document.createElement("div");
              container.id = "score-editor-container";
              inner.appendChild(container);
            } // Create SVG container


            var svgParent = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
            var maxZoom = this.diva.getPageDimensionsAtZoomLevel(index, Number.MAX_SAFE_INTEGER);
            svgParent.setAttribute('width', dimensions.width.toString());
            svgParent.setAttribute('height', dimensions.height.toString());
            svgParent.setAttribute('viewBox', '0 0 ' + maxZoom.width + ' ' + maxZoom.height);
            container.style.position = 'absolute';
            container.style.top = "".concat(offset.top, "px");
            container.style.left = "".concat(offset.left - parseInt(marginLeft), "px");

            while (container.firstChild !== null) {
              container.firstChild.remove();
            }

            var rect = document.createElementNS("http://www.w3.org/2000/svg", "rect");
            rect.setAttribute("x", this.bbox.ulx);
            rect.setAttribute("y", this.bbox.uly);
            rect.setAttribute("width", (Number(this.bbox.lrx) - Number(this.bbox.ulx)).toString());
            rect.setAttribute("height", (Number(this.bbox.lry) - Number(this.bbox.uly)).toString());
            rect.classList.add("zoneRect");
            svgParent.appendChild(rect);
            container.appendChild(svgParent);
          }
        }, {
          key: "parseCanvases",
          value: function parseCanvases(manifest) {
            var _iterator3 = _createForOfIteratorHelper(manifest.sequences),
                _step3;

            try {
              for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
                var sequence = _step3.value;

                var _iterator4 = _createForOfIteratorHelper(sequence.canvases),
                    _step4;

                try {
                  for (_iterator4.s(); !(_step4 = _iterator4.n()).done;) {
                    var canvas = _step4.value;
                    this.pageToCanvasMap.set(canvas['@id'], sequence.canvases.indexOf(canvas));
                  }
                } catch (err) {
                  _iterator4.e(err);
                } finally {
                  _iterator4.f();
                }
              }
            } catch (err) {
              _iterator3.e(err);
            } finally {
              _iterator3.f();
            }
          }
        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            try {
              this.diva.deactivate();
              this.diva.destroy();
            } catch (e) {
              console.warn(e);
            }
          }
        }]);

        return ScoreDivaViewComponent;
      }();

      ScoreDivaViewComponent.ɵfac = function ScoreDivaViewComponent_Factory(t) {
        return new (t || ScoreDivaViewComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_selected_staff_service__WEBPACK_IMPORTED_MODULE_2__["SelectedStaffService"]));
      };

      ScoreDivaViewComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: ScoreDivaViewComponent,
        selectors: [["app-score-diva-view"]],
        inputs: {
          iiifManifest: "iiifManifest"
        },
        decls: 1,
        vars: 0,
        consts: [["id", "diva-score-wrapper"]],
        template: function ScoreDivaViewComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "div", 0);
          }
        },
        styles: ["@import url('https://unpkg.com/diva.js@6.0.2/build/diva.css');\n\nrect.selectedZone[_ngcontent-%COMP%] {\n    stroke-dasharray: none;\n    fill-opacity: 0;\n    stroke-width: 0.45em;\n    stroke: black;\n    opacity: 0.75;\n    fill: none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2NvcmUtZWRpdG9yL3Njb3JlLWRpdmEtdmlldy9zY29yZS1kaXZhLXZpZXcuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSw2REFBNkQ7O0FBRTdEO0lBQ0ksc0JBQXNCO0lBQ3RCLGVBQWU7SUFDZixvQkFBb0I7SUFDcEIsYUFBYTtJQUNiLGFBQWE7SUFDYixVQUFVO0FBQ2QiLCJmaWxlIjoic3JjL2FwcC9zY29yZS1lZGl0b3Ivc2NvcmUtZGl2YS12aWV3L3Njb3JlLWRpdmEtdmlldy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCB1cmwoJ2h0dHBzOi8vdW5wa2cuY29tL2RpdmEuanNANi4wLjIvYnVpbGQvZGl2YS5jc3MnKTtcblxucmVjdC5zZWxlY3RlZFpvbmUge1xuICAgIHN0cm9rZS1kYXNoYXJyYXk6IG5vbmU7XG4gICAgZmlsbC1vcGFjaXR5OiAwO1xuICAgIHN0cm9rZS13aWR0aDogMC40NWVtO1xuICAgIHN0cm9rZTogYmxhY2s7XG4gICAgb3BhY2l0eTogMC43NTtcbiAgICBmaWxsOiBub25lO1xufVxuIl19 */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ScoreDivaViewComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-score-diva-view',
            templateUrl: './score-diva-view.component.html',
            styleUrls: ['./score-diva-view.component.css']
          }]
        }], function () {
          return [{
            type: _selected_staff_service__WEBPACK_IMPORTED_MODULE_2__["SelectedStaffService"]
          }];
        }, {
          iiifManifest: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }]
        });
      })();
      /***/

    },

    /***/
    "./src/app/score-editor/score-editor.component.ts":
    /*!********************************************************!*\
      !*** ./src/app/score-editor/score-editor.component.ts ***!
      \********************************************************/

    /*! exports provided: ScoreEditorComponent */

    /***/
    function srcAppScoreEditorScoreEditorComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ScoreEditorComponent", function () {
        return ScoreEditorComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _tools__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../tools */
      "./src/app/tools.ts");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/router */
      "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
      /* harmony import */


      var _state_service_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../state-service.service */
      "./src/app/state-service.service.ts");
      /* harmony import */


      var _score_diva_view_score_diva_view_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./score-diva-view/score-diva-view.component */
      "./src/app/score-editor/score-diva-view/score-diva-view.component.ts");
      /* harmony import */


      var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/material/tabs */
      "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/tabs.js");
      /* harmony import */


      var _score_toolbar_score_toolbar_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./score-toolbar/score-toolbar.component */
      "./src/app/score-editor/score-toolbar/score-toolbar.component.ts");
      /* harmony import */


      var _angular_material_divider__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/material/divider */
      "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/divider.js");
      /* harmony import */


      var _score_verovio_view_score_verovio_view_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ./score-verovio-view/score-verovio-view.component */
      "./src/app/score-editor/score-verovio-view/score-verovio-view.component.ts");

      var ScoreEditorComponent = /*#__PURE__*/function () {
        function ScoreEditorComponent(router, route, stateService) {
          _classCallCheck(this, ScoreEditorComponent);

          this.router = router;
          this.route = route;
          this.stateService = stateService;
          this.source = this.route.snapshot.paramMap.get('source');
          this.identifier = decodeURIComponent(this.route.snapshot.paramMap.get('identifier'));
          this.iiifManifest = Object(_tools__WEBPACK_IMPORTED_MODULE_1__["formIIIFManifest"])(this.source, this.identifier);
          this.meiDoc = this.stateService.mei;

          if (this.meiDoc === null) {
            this.router.navigate(['/input', this.source, this.identifier]);
          }
        }

        _createClass(ScoreEditorComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return ScoreEditorComponent;
      }();

      ScoreEditorComponent.ɵfac = function ScoreEditorComponent_Factory(t) {
        return new (t || ScoreEditorComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_state_service_service__WEBPACK_IMPORTED_MODULE_3__["StateService"]));
      };

      ScoreEditorComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: ScoreEditorComponent,
        selectors: [["app-score-editor"]],
        decls: 114,
        vars: 1,
        consts: [["id", "score-container"], [3, "iiifManifest"], ["id", "right"], ["label", "Score Editor"], ["label", "Score Editor Help"], ["href", "https://verovio.humdrum.org", "target", "_blank"], ["href", "https://editor.verovio.org", "target", "_blank"]],
        template: function ScoreEditorComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-score-diva-view", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-tab-group");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "mat-tab", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "app-score-toolbar");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "mat-divider");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "app-score-verovio-view");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "mat-tab", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "h2");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "About the Score Editor");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, " The ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "strong");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Score Editor");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, " is for making simple edits in order to align the parts in your score. In other words, if you made mistakes in your initial entry of the music on the previous screen (the ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "strong");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Music Input");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, " screen) the score will not align properly and you may need to make adjustments to the note durations or add dots in order to get the proper alignment. ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "mat-divider");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "h2");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Making Simple Edits");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, " When you click on a pitch, the staff to which that pitch belongs will be highlighted with a dashed box in the manuscript image in the left of the screen. This is to help you check the accuracy of the edits you make. ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, " You can make simple edits directly as follows. By clicking on a pitch to highlight it you can edit: ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "ul");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "strong");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "Pitch: ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, " Use up/down arrow keys to change pitch. ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "strong");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "Rhythm: ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, " Type a number key to alter its rhythm (1 semibreve, 2 minim, 4 semiminim, 8 fusa, 6 semifusa, 0 breve, 9 long, 7 maxima). Scoring-up will rerun after a rhythmic value changes. ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "strong");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, "Dots: ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, " Typing a period will add or remove the dot from the highlighted pitch. Scoring-up will automatically rerun. ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "strong");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, "Accidentals: ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42, " To add a flat, press ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44, "-");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45, ". To add a sharp, press ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](47, "#");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](48, ". To add a natural, press ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](50, "n");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](51, ". To clear accidentals, press ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](53, "N");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](54, ". ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "strong");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](57, "Cloning and Deleting Elements: ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](58, " Elements can be cloned by selecting one and pressing the ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](60, "I");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](61, " key. Elements can be deleted by pressing ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](63, "Backspace");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](64, ". ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](66, " You can also use the \"Return to Music Input\" button to return to the ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "strong");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](68, "Music Input");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](69, " screen and make more significant edits, but any changes made in the ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](70, "strong");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](71, "Score Editor");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](72, " thus far will be lost! ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](73, "mat-divider");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](74, "h2");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](75, "Moving to Editorial Mode");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](76, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](77, " When making corrections in the ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](78, "strong");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](79, "Score Editor");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](80, " it is assumed that you are correcting mistakes ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](81, "em");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](82, "you");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](83, " made, and both the MEI Parts and MEI Score files will be updated with these changes. However, once you move to ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](84, "strong");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](85, "Editorial Mode");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](86, ", the MEI Parts file will no longer be updated since this is a record of the music ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](87, "em");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](88, "exactly");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](89, " as it was recorded in the original manuscript. Any further corrections made in ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](90, "strong");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](91, "Editorial Mode");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](92, " will be encoded in the MEI Score file as ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](93, "strong");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](94, "editorial");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](95, " corrections. For example, when a dot is added in ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](96, "strong");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](97, "Editorial Mode");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](98, ": ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](99, "pre");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](100, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](101, "\n                    <choice>\n                        <corr>\n                            <note dur=\"semibrevis\" oct=\"3\" pname=\"a\" dur.quality=\"minor\"/>\n                            <dot form=\"div\"/>\n                        </corr>\n                        <sic>\n                            <note dur=\"semibrevis\" oct=\"3\" pname=\"a\"/>\n                        </sic>\n                    </choice>\n                ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](102, "mat-divider");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](103, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](104, " The purpose of the ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](105, "strong");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](106, "Score Editor");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](107, " is to do enough editing to enable the correct alignment of the score and edit while viewing the manuscript. For more fine-grained editing, it is recommended to download the MEI file and open it in a tool that allows direct editing of the MEI file such as ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](108, "a", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](109, " the Verovio Humdrum Viewer");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](110, " or ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](111, "a", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](112, "the Verovio Editor");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](113, ". ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("iiifManifest", ctx.iiifManifest);
          }
        },
        directives: [_score_diva_view_score_diva_view_component__WEBPACK_IMPORTED_MODULE_4__["ScoreDivaViewComponent"], _angular_material_tabs__WEBPACK_IMPORTED_MODULE_5__["MatTabGroup"], _angular_material_tabs__WEBPACK_IMPORTED_MODULE_5__["MatTab"], _score_toolbar_score_toolbar_component__WEBPACK_IMPORTED_MODULE_6__["ScoreToolbarComponent"], _angular_material_divider__WEBPACK_IMPORTED_MODULE_7__["MatDivider"], _score_verovio_view_score_verovio_view_component__WEBPACK_IMPORTED_MODULE_8__["ScoreVerovioViewComponent"]],
        styles: ["#score-container[_ngcontent-%COMP%] {\n    display: grid;\n    grid-template-columns: repeat(3, 1fr);\n}\n\napp-score-diva-view[_ngcontent-%COMP%] {\n    grid-column: 1 / 2;\n}\n\napp-score-verovio-view[_ngcontent-%COMP%] {\n    display: block;\n    width: 100%;\n}\n\n#right[_ngcontent-%COMP%] {\n    grid-column: 2 / 4;\n    padding: 1em;\n    width: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2NvcmUtZWRpdG9yL3Njb3JlLWVkaXRvci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksYUFBYTtJQUNiLHFDQUFxQztBQUN6Qzs7QUFFQTtJQUNJLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLGNBQWM7SUFDZCxXQUFXO0FBQ2Y7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsWUFBWTtJQUNaLFdBQVc7QUFDZiIsImZpbGUiOiJzcmMvYXBwL3Njb3JlLWVkaXRvci9zY29yZS1lZGl0b3IuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIiNzY29yZS1jb250YWluZXIge1xuICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMywgMWZyKTtcbn1cblxuYXBwLXNjb3JlLWRpdmEtdmlldyB7XG4gICAgZ3JpZC1jb2x1bW46IDEgLyAyO1xufVxuXG5hcHAtc2NvcmUtdmVyb3Zpby12aWV3IHtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICB3aWR0aDogMTAwJTtcbn1cblxuI3JpZ2h0IHtcbiAgICBncmlkLWNvbHVtbjogMiAvIDQ7XG4gICAgcGFkZGluZzogMWVtO1xuICAgIHdpZHRoOiAxMDAlO1xufVxuIl19 */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ScoreEditorComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-score-editor',
            templateUrl: './score-editor.component.html',
            styleUrls: ['./score-editor.component.css']
          }]
        }], function () {
          return [{
            type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
          }, {
            type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]
          }, {
            type: _state_service_service__WEBPACK_IMPORTED_MODULE_3__["StateService"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "./src/app/score-editor/score-editor.module.ts":
    /*!*****************************************************!*\
      !*** ./src/app/score-editor/score-editor.module.ts ***!
      \*****************************************************/

    /*! exports provided: ScoreEditorModule */

    /***/
    function srcAppScoreEditorScoreEditorModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ScoreEditorModule", function () {
        return ScoreEditorModule;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/common */
      "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/forms */
      "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
      /* harmony import */


      var _angular_material_button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/material/button */
      "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
      /* harmony import */


      var _angular_material_divider__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/material/divider */
      "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/divider.js");
      /* harmony import */


      var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/material/tabs */
      "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/tabs.js");
      /* harmony import */


      var _score_editor_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./score-editor.component */
      "./src/app/score-editor/score-editor.component.ts");
      /* harmony import */


      var _score_diva_view_score_diva_view_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ./score-diva-view/score-diva-view.component */
      "./src/app/score-editor/score-diva-view/score-diva-view.component.ts");
      /* harmony import */


      var _score_verovio_view_score_verovio_view_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ./score-verovio-view/score-verovio-view.component */
      "./src/app/score-editor/score-verovio-view/score-verovio-view.component.ts");
      /* harmony import */


      var _score_toolbar_score_toolbar_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ./score-toolbar/score-toolbar.component */
      "./src/app/score-editor/score-toolbar/score-toolbar.component.ts");

      var ScoreEditorModule = function ScoreEditorModule() {
        _classCallCheck(this, ScoreEditorModule);
      };

      ScoreEditorModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
        type: ScoreEditorModule
      });
      ScoreEditorModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
        factory: function ScoreEditorModule_Factory(t) {
          return new (t || ScoreEditorModule)();
        },
        imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_3__["MatButtonModule"], _angular_material_divider__WEBPACK_IMPORTED_MODULE_4__["MatDividerModule"], _angular_material_tabs__WEBPACK_IMPORTED_MODULE_5__["MatTabsModule"]]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](ScoreEditorModule, {
          declarations: [_score_diva_view_score_diva_view_component__WEBPACK_IMPORTED_MODULE_7__["ScoreDivaViewComponent"], _score_verovio_view_score_verovio_view_component__WEBPACK_IMPORTED_MODULE_8__["ScoreVerovioViewComponent"], _score_editor_component__WEBPACK_IMPORTED_MODULE_6__["ScoreEditorComponent"], _score_toolbar_score_toolbar_component__WEBPACK_IMPORTED_MODULE_9__["ScoreToolbarComponent"]],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_3__["MatButtonModule"], _angular_material_divider__WEBPACK_IMPORTED_MODULE_4__["MatDividerModule"], _angular_material_tabs__WEBPACK_IMPORTED_MODULE_5__["MatTabsModule"]],
          exports: [_score_editor_component__WEBPACK_IMPORTED_MODULE_6__["ScoreEditorComponent"]]
        });
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ScoreEditorModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
          args: [{
            declarations: [_score_diva_view_score_diva_view_component__WEBPACK_IMPORTED_MODULE_7__["ScoreDivaViewComponent"], _score_verovio_view_score_verovio_view_component__WEBPACK_IMPORTED_MODULE_8__["ScoreVerovioViewComponent"], _score_editor_component__WEBPACK_IMPORTED_MODULE_6__["ScoreEditorComponent"], _score_toolbar_score_toolbar_component__WEBPACK_IMPORTED_MODULE_9__["ScoreToolbarComponent"]],
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_3__["MatButtonModule"], _angular_material_divider__WEBPACK_IMPORTED_MODULE_4__["MatDividerModule"], _angular_material_tabs__WEBPACK_IMPORTED_MODULE_5__["MatTabsModule"]],
            exports: [_score_editor_component__WEBPACK_IMPORTED_MODULE_6__["ScoreEditorComponent"]]
          }]
        }], null, null);
      })();
      /***/

    },

    /***/
    "./src/app/score-editor/score-toolbar/score-toolbar.component.ts":
    /*!***********************************************************************!*\
      !*** ./src/app/score-editor/score-toolbar/score-toolbar.component.ts ***!
      \***********************************************************************/

    /*! exports provided: ScoreToolbarComponent */

    /***/
    function srcAppScoreEditorScoreToolbarScoreToolbarComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ScoreToolbarComponent", function () {
        return ScoreToolbarComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var scoring_up__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! scoring-up */
      "./node_modules/scoring-up/entry.js");
      /* harmony import */


      var scoring_up__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(scoring_up__WEBPACK_IMPORTED_MODULE_1__);
      /* harmony import */


      var vkbeautify__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! vkbeautify */
      "./node_modules/vkbeautify/index.js");
      /* harmony import */


      var vkbeautify__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(vkbeautify__WEBPACK_IMPORTED_MODULE_2__);
      /* harmony import */


      var _state_service_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../../state-service.service */
      "./src/app/state-service.service.ts");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/router */
      "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
      /* harmony import */


      var _doc_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../doc.service */
      "./src/app/score-editor/doc.service.ts");
      /* harmony import */


      var _angular_material_button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/material/button */
      "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");

      var ScoreToolbarComponent = /*#__PURE__*/function () {
        function ScoreToolbarComponent(stateService, route, router, doc) {
          _classCallCheck(this, ScoreToolbarComponent);

          this.stateService = stateService;
          this.route = route;
          this.router = router;
          this.doc = doc;
          this.currentDoc = null;
        }

        _createClass(ScoreToolbarComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this8 = this;

            this.doc._scoreSubject.subscribe(function (doc) {
              _this8.currentDoc = doc;
            });
          }
        }, {
          key: "saveClick",
          value: function saveClick(event) {
            if (this.currentDoc !== null) {
              var target = event.target;
              var refinedDoc = Object(scoring_up__WEBPACK_IMPORTED_MODULE_1__["refineScore"])(this.currentDoc.cloneNode(true), this.stateService.scoreOptions.modernClefs, this.stateService.scoreOptions.barlines);
              var serializer = new XMLSerializer();
              var content = vkbeautify__WEBPACK_IMPORTED_MODULE_2__["xml"](serializer.serializeToString(refinedDoc));
              var blob = new Blob([content], {
                type: 'application/xml'
              });
              target.setAttribute('href', URL.createObjectURL(blob));
            }
          }
        }, {
          key: "savePartsClick",
          value: function savePartsClick(event) {
            if (this.stateService.mei != null) {
              var target = event.target;
              var serializer = new XMLSerializer();
              var content = vkbeautify__WEBPACK_IMPORTED_MODULE_2__["xml"](serializer.serializeToString(this.doc.parts));
              var blob = new Blob([content], {
                type: 'application/xml'
              });
              target.setAttribute('href', URL.createObjectURL(blob));
            }
          }
        }, {
          key: "goToInputEditor",
          value: function goToInputEditor() {
            if (confirm("Warning: Edits made on this page will be lost. Return to input editor?")) {
              var source = this.route.snapshot.paramMap.get('source');
              var identifier = this.route.snapshot.paramMap.get('identifier');
              this.router.navigate(['/input', source, identifier]);
            }
          }
        }, {
          key: "copyToClipboard",
          value: function copyToClipboard() {
            if (this.currentDoc !== null) {
              var serializer = new XMLSerializer();
              var refinedDoc = Object(scoring_up__WEBPACK_IMPORTED_MODULE_1__["refineScore"])(this.currentDoc.cloneNode(true), this.stateService.scoreOptions.modernClefs, this.stateService.scoreOptions.barlines);
              var content = vkbeautify__WEBPACK_IMPORTED_MODULE_2__["xml"](serializer.serializeToString(refinedDoc));
              navigator.clipboard.writeText(content).then(function () {
                alert("MEI Score Copied!");
              })["catch"](function (err) {
                console.debug(err);
                alert("Copy failed :(");
              });
            }
          }
        }]);

        return ScoreToolbarComponent;
      }();

      ScoreToolbarComponent.ɵfac = function ScoreToolbarComponent_Factory(t) {
        return new (t || ScoreToolbarComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_state_service_service__WEBPACK_IMPORTED_MODULE_3__["StateService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_doc_service__WEBPACK_IMPORTED_MODULE_5__["DocService"]));
      };

      ScoreToolbarComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: ScoreToolbarComponent,
        selectors: [["app-score-toolbar"]],
        decls: 11,
        vars: 0,
        consts: [[1, "toolbar-container"], ["mat-stroked-button", "", 3, "click"], ["mat-stroked-button", ""], ["download", "", "type", "application/xml", 3, "click"]],
        template: function ScoreToolbarComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ScoreToolbarComponent_Template_button_click_1_listener() {
              return ctx.goToInputEditor();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " Return to Music Input ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "button", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "a", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ScoreToolbarComponent_Template_a_click_4_listener($event) {
              return ctx.saveClick($event);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, " Download MEI Score ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "button", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "a", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ScoreToolbarComponent_Template_a_click_7_listener($event) {
              return ctx.savePartsClick($event);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, " Download MEI Parts ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "button", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ScoreToolbarComponent_Template_button_click_9_listener() {
              return ctx.copyToClipboard();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, " Copy MEI Score to Clipboard ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }
        },
        directives: [_angular_material_button__WEBPACK_IMPORTED_MODULE_6__["MatButton"]],
        styles: [".toolbar-container[_ngcontent-%COMP%] {\n    display: flex;\n    flex-wrap: wrap;\n    padding-top: 0.5em;\n    padding-bottom: 0.5em;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2NvcmUtZWRpdG9yL3Njb3JlLXRvb2xiYXIvc2NvcmUtdG9vbGJhci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksYUFBYTtJQUNiLGVBQWU7SUFDZixrQkFBa0I7SUFDbEIscUJBQXFCO0FBQ3pCIiwiZmlsZSI6InNyYy9hcHAvc2NvcmUtZWRpdG9yL3Njb3JlLXRvb2xiYXIvc2NvcmUtdG9vbGJhci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnRvb2xiYXItY29udGFpbmVyIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtd3JhcDogd3JhcDtcbiAgICBwYWRkaW5nLXRvcDogMC41ZW07XG4gICAgcGFkZGluZy1ib3R0b206IDAuNWVtO1xufVxuIl19 */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ScoreToolbarComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-score-toolbar',
            templateUrl: './score-toolbar.component.html',
            styleUrls: ['./score-toolbar.component.css']
          }]
        }], function () {
          return [{
            type: _state_service_service__WEBPACK_IMPORTED_MODULE_3__["StateService"]
          }, {
            type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]
          }, {
            type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]
          }, {
            type: _doc_service__WEBPACK_IMPORTED_MODULE_5__["DocService"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "./src/app/score-editor/score-verovio-view/score-verovio-view.component.ts":
    /*!*********************************************************************************!*\
      !*** ./src/app/score-editor/score-verovio-view/score-verovio-view.component.ts ***!
      \*********************************************************************************/

    /*! exports provided: ScoreVerovioViewComponent */

    /***/
    function srcAppScoreEditorScoreVerovioViewScoreVerovioViewComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ScoreVerovioViewComponent", function () {
        return ScoreVerovioViewComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var uuid__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! uuid */
      "./node_modules/uuid/index.js");
      /* harmony import */


      var uuid__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(uuid__WEBPACK_IMPORTED_MODULE_1__);
      /* harmony import */


      var scoring_up__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! scoring-up */
      "./node_modules/scoring-up/entry.js");
      /* harmony import */


      var scoring_up__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(scoring_up__WEBPACK_IMPORTED_MODULE_2__);
      /* harmony import */


      var _utils_verovio__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../../utils/verovio */
      "./src/app/utils/verovio.ts");
      /* harmony import */


      var _utils_mei__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../../utils/mei */
      "./src/app/utils/mei.ts");
      /* harmony import */


      var _state_service_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../../state-service.service */
      "./src/app/state-service.service.ts");
      /* harmony import */


      var _selected_staff_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../selected-staff.service */
      "./src/app/score-editor/selected-staff.service.ts");
      /* harmony import */


      var _doc_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ../doc.service */
      "./src/app/score-editor/doc.service.ts");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/forms */
      "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @angular/common */
      "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
      /* harmony import */


      var _angular_material_button__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @angular/material/button */
      "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");

      var _c0 = ["verovio"];

      function ScoreVerovioViewComponent_button_11_Template(rf, ctx) {
        if (rf & 1) {
          var _r56 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ScoreVerovioViewComponent_button_11_Template_button_click_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r56);

            var ctx_r55 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r55.setEditorialMode();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Continue in Editorial Mode ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      var pnameOrder = ['c', 'd', 'e', 'f', 'g', 'a', 'b'];

      function recurseXmlId(element) {
        if (element.hasAttribute('xml:id')) {
          element.setAttribute('xml:id', 'm-' + Object(uuid__WEBPACK_IMPORTED_MODULE_1__["v4"])());
        }

        for (var i = 0; i < element.children.length; i++) {
          recurseXmlId(element.children[i]);
        }
      }

      var ScoreVerovioViewComponent = /*#__PURE__*/function () {
        function ScoreVerovioViewComponent(stateService, staffService, doc) {
          _classCallCheck(this, ScoreVerovioViewComponent);

          this.stateService = stateService;
          this.staffService = staffService;
          this.doc = doc;
          this.selectedId = null;
          this.corrToSicMap = new Map();
        }

        _createClass(ScoreVerovioViewComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this9 = this;

            this.doc.parts = this.stateService.mei.generateXML();

            this.doc._scoreSubject.subscribe(function (doc) {
              _this9.container.nativeElement.innerHTML = '';

              var svg = _utils_verovio__WEBPACK_IMPORTED_MODULE_3__["vrvToolkit"].meiToSVG(doc);

              _this9.container.nativeElement.appendChild(svg);

              _this9.setSelected();
            });
          }
        }, {
          key: "setEditorialMode",
          value: function setEditorialMode() {
            if (confirm("Edits in editorial mode reflect cases where there is a problem with the manuscript. You cannot exit editorial mode. Do you want to continue?")) {
              this.stateService.editorialMode = true;
            }
          }
        }, {
          key: "setSelected",
          value: function setSelected() {
            if (this.selectedId !== null) {
              Array.from(document.getElementsByClassName("selected")).forEach(function (elem) {
                elem.classList.remove("selected");
                elem.setAttribute("fill", "");
              });

              try {
                document.getElementById(this.selectedId).classList.add("selected");
                document.getElementById(this.selectedId).setAttribute("fill", "#d00");
              } catch (_e) {
                console.debug(_e);
                this.selectedId = null;
                return;
              }

              try {
                // Convert ID to sic ID if applicable
                var partsId = this.selectedId;

                if (this.corrToSicMap.has(partsId)) {
                  partsId = this.corrToSicMap.get(partsId);
                } // Get nearest pb  and sb


                var resolver = this.doc.parts.createNSResolver(this.doc.parts.ownerDocument == null ? this.doc.parts.documentElement : this.doc.parts.ownerDocument.documentElement);

                var meiRes = function meiRes() {
                  return 'http://www.music-encoding.org/ns/mei';
                };

                var ref = this.doc.parts.evaluate("//*[@xml:id='" + partsId + "']", this.doc.parts, resolver, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue;
                var result = this.doc.parts.evaluate("./preceding::mei:pb", ref, meiRes, XPathResult.ORDERED_NODE_SNAPSHOT_TYPE, null);
                var pb = result.snapshotItem(result.snapshotLength - 1);
                result = this.doc.parts.evaluate("./preceding::mei:sb", ref, meiRes, XPathResult.ORDERED_NODE_SNAPSHOT_TYPE, null);
                var sb = result.snapshotItem(result.snapshotLength - 1); // Get corresponding zones (strip away fragment symbol)

                var pbFacsId = pb.getAttribute("facs")[0] === "#" ? pb.getAttribute("facs").substring(1) : pb.getAttribute("facs");
                var sbFacsId = sb.getAttribute("facs")[0] === "#" ? sb.getAttribute("facs").substring(1) : sb.getAttribute("facs");
                console.debug(sbFacsId); // The following SHOULD use XPath but I haven't been able to get it to work

                var pbGraphic = Array.from(this.doc.parts.getElementsByTagName("surface")).filter(function (el) {
                  return el.getAttribute("xml:id") === pbFacsId;
                }).pop().querySelector("graphic");
                var sbZone = Array.from(pbGraphic.children).filter(function (el) {
                  return el.getAttribute("xml:id") === sbFacsId;
                }).pop();
                var iri = pbGraphic.getAttribute("target");
                var bbox = {
                  ulx: sbZone.getAttribute("ulx"),
                  uly: sbZone.getAttribute("uly"),
                  lrx: sbZone.getAttribute("lrx"),
                  lry: sbZone.getAttribute("lry")
                };
                console.debug(iri);
                this.staffService.staffLocation = [iri, bbox];
              } catch (_e) {
                console.debug(_e);
              }
            }
          }
        }, {
          key: "ngAfterViewInit",
          value: function ngAfterViewInit() {
            this.doc.score = this.runScoringUp(this.doc.parts);
          }
        }, {
          key: "handleClick",
          value: function handleClick(event) {
            var target = event.target;

            while (target) {
              if (target.nodeName === 'g') {
                if (target.classList.contains('note') || target.classList.contains('rest')) {
                  this.selectedId = target.id;
                  this.setSelected();
                  break;
                }
              }

              target = target.parentElement;
            }
          }
        }, {
          key: "handleKeyPress",
          value: function handleKeyPress(event) {
            if (this.selectedId !== null) {
              var doc;
              var resolver = this.doc.parts.createNSResolver(this.doc.parts.ownerDocument == null ? this.doc.parts.documentElement : this.doc.parts.ownerDocument.documentElement);
              var result = this.doc.parts.evaluate("//*[@xml:id='" + this.selectedId + "']", this.doc.parts, resolver, XPathResult.FIRST_ORDERED_NODE_TYPE, null);
              if (!result.singleNodeValue) return;
              var target = result.singleNodeValue; // Ensure corrected element in MEI

              if (this.stateService.editorialMode) {
                target = this.ensureCorrElement(target, this.doc.parts);
              }

              if (target.tagName === "note") {
                switch (event.key) {
                  case '.':
                    var sibling = target.nextElementSibling;

                    if (sibling !== null && sibling.tagName === 'dot') {
                      target.nextSibling.remove();

                      if (target.hasAttribute("dots")) {
                        target.setAttribute("dots", "0");
                      }
                    } else {
                      var dot = this.doc.parts.createElementNS("http://www.music-encoding.org/ns/mei", "dot");
                      dot.setAttribute("xml:id", "m-" + Object(uuid__WEBPACK_IMPORTED_MODULE_1__["v4"])());
                      target.insertAdjacentElement("afterend", dot);
                    }

                    break;

                  case 'ArrowUp':
                    if (target.hasAttribute('pname')) {
                      var currentPname = target.getAttribute('pname');
                      var idx = pnameOrder.indexOf(currentPname);

                      if (idx + 1 < pnameOrder.length) {
                        target.setAttribute('pname', pnameOrder[idx + 1]);
                      } else {
                        target.setAttribute('pname', pnameOrder[0]);
                        target.setAttribute('oct', (parseInt(target.getAttribute('oct')) + 1).toString());
                      }
                    }

                    break;

                  case 'ArrowDown':
                    if (target.hasAttribute('pname')) {
                      var _currentPname = target.getAttribute('pname');

                      var _idx = pnameOrder.indexOf(_currentPname);

                      if (_idx - 1 > 0) {
                        target.setAttribute('pname', pnameOrder[_idx - 1]);
                      } else {
                        target.setAttribute('pname', pnameOrder[pnameOrder.length - 1]);
                        target.setAttribute('oct', (parseInt(target.getAttribute('oct')) - 1).toString());
                      }
                    }

                    break;

                  case '1':
                    target.setAttribute('dur', 'semibrevis');
                    break;

                  case '2':
                    target.setAttribute('dur', 'minima');
                    break;

                  case '4':
                    target.setAttribute('dur', 'semiminima');
                    break;

                  case '8':
                    target.setAttribute('dur', 'fusa');
                    break;

                  case '6':
                    target.setAttribute('dur', 'semifusa');
                    break;

                  case '7':
                    target.setAttribute('dur', 'maxima');
                    break;

                  case '9':
                    target.setAttribute('dur', 'longa');
                    break;

                  case '0':
                    target.setAttribute('dur', 'brevis');
                    break;

                  case '#':
                    target.setAttribute('accid', 's');
                    break;

                  case '-':
                    target.setAttribute('accid', 'f');
                    break;

                  case 'n':
                    target.setAttribute('accid', 'n');
                    break;

                  case 'N':
                    target.removeAttribute('accid');
                    break;

                  case 'I':
                    var clone = target.cloneNode(true);
                    recurseXmlId(clone);

                    if (target.nextElementSibling && target.nextElementSibling.tagName === 'dot') {
                      var cloneDot = target.nextElementSibling.cloneNode(true);
                      recurseXmlId(cloneDot);
                      target.nextElementSibling.insertAdjacentElement('afterend', clone);
                      clone.insertAdjacentElement('afterend', cloneDot);
                    } else {
                      target.insertAdjacentElement('beforebegin', clone);
                    }

                    break;

                  case 'p':
                  case 'P':
                    var plica;

                    if (target.querySelector('plica')) {
                      plica = target.querySelector('plica');
                    } else {
                      plica = this.doc.parts.createElementNS(_utils_mei__WEBPACK_IMPORTED_MODULE_4__["NAMESPACE"], 'plica');
                      target.appendChild(plica);
                    }

                    if (event.key === 'P') {
                      if (plica.getAttribute('dir') === 'down') {
                        plica.remove();
                      } else {
                        plica.setAttribute('dir', 'down');
                      }
                    } else {
                      if (plica.getAttribute('dir') === 'up') {
                        plica.remove();
                      } else {
                        plica.setAttribute('dir', 'up');
                      }
                    }

                    break;

                  case 'Backspace':
                    if (target.nextElementSibling && target.nextElementSibling.tagName === 'dot') {
                      target.nextElementSibling.remove();
                    }

                    target.remove();
                    break;

                  default:
                    return;
                }
              } else if (target.tagName === "rest") {
                switch (event.key) {
                  case '1':
                    target.setAttribute('dur', 'semibrevis');
                    break;

                  case '2':
                    target.setAttribute('dur', 'minima');
                    break;

                  case '4':
                    target.setAttribute('dur', 'semiminima');
                    break;

                  case '8':
                    target.setAttribute('dur', 'fusa');
                    break;

                  case '6':
                    target.setAttribute('dur', 'semifusa');
                    break;

                  case '7':
                    target.setAttribute('dur', 'maxima');
                    break;

                  case '9':
                    target.setAttribute('dur', 'longa');
                    break;

                  case '0':
                    target.setAttribute('dur', 'brevis');
                    break;

                  case 'I':
                    var _clone = target.cloneNode(true);

                    recurseXmlId(_clone);
                    target.insertAdjacentElement('beforebegin', _clone);
                    break;

                  case 'Backspace':
                    target.remove();
                    break;

                  default:
                    return;
                }
              }

              event.preventDefault();
              this.doc.score = this.runScoringUp(this.doc.parts);
            }
          }
        }, {
          key: "runScoringUp",
          value: function runScoringUp(meiDoc) {
            var output = null;

            try {
              var staffDef = meiDoc.getElementsByTagName("staffDef")[0];
              var quasiDoc;
              quasiDoc = scoring_up__WEBPACK_IMPORTED_MODULE_2__["merge"](meiDoc.cloneNode(true));

              switch (staffDef.getAttribute("notationtype")) {
                case "mensural.white":
                  output = scoring_up__WEBPACK_IMPORTED_MODULE_2__["ArsNova"].lining_up(quasiDoc);
                  break;

                case "mensural.black":
                  switch (staffDef.getAttribute("notationsubtype")) {
                    case "Ars_antiqua":
                      output = scoring_up__WEBPACK_IMPORTED_MODULE_2__["ArsAntiqua"].lining_up(quasiDoc);
                      break;

                    case "Ars_nova":
                      output = scoring_up__WEBPACK_IMPORTED_MODULE_2__["ArsNova"].lining_up(quasiDoc);
                      break;

                    default:
                      console.warn("Only 'Ars antiqua' and 'Ars nova' are supported!");
                  }

                  break;

                default:
                  console.warn("Only mensural notation types are supported.");
                  break;
              }

              if (output !== null) {
                scoring_up__WEBPACK_IMPORTED_MODULE_2__["PostProcessing"].replace_ligatures_by_brackets(output); // ScoringUp.PostProcessing.remove_num_and_numbase(output);
              }
            } catch (e) {
              console.error(e);
              alert("Error in scoring up tool! " + e);
              output = null;
            } finally {
              return output;
            }
          }
        }, {
          key: "ensureCorrElement",
          value: function ensureCorrElement(target, meiDoc) {
            if (target.closest('corr')) {
              return target;
            }

            var choice = meiDoc.createElementNS('http://www.music-encoding.org/ns/mei', 'choice');
            var corr = meiDoc.createElementNS('http://www.music-encoding.org/ns/mei', 'corr');
            var sic = meiDoc.createElementNS('http://www.music-encoding.org/ns/mei', 'sic');
            var sibling = target.nextElementSibling;
            target.insertAdjacentElement('beforebegin', choice);
            choice.appendChild(corr);
            choice.appendChild(sic);
            sic.appendChild(target);
            var corrTarget = target.cloneNode(true);
            recurseXmlId(corrTarget);
            corr.appendChild(corrTarget);
            this.corrToSicMap.set(corrTarget.getAttribute("xml:id"), target.getAttribute("xml:id"));

            if (sibling !== null && sibling.tagName === 'dot') {
              sic.appendChild(sibling);
              var sibCorr = sibling.cloneNode(true);
              recurseXmlId(sibCorr);
              corr.appendChild(sibCorr);
            }

            return corrTarget;
          }
        }]);

        return ScoreVerovioViewComponent;
      }();

      ScoreVerovioViewComponent.ɵfac = function ScoreVerovioViewComponent_Factory(t) {
        return new (t || ScoreVerovioViewComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_state_service_service__WEBPACK_IMPORTED_MODULE_5__["StateService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_selected_staff_service__WEBPACK_IMPORTED_MODULE_6__["SelectedStaffService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_doc_service__WEBPACK_IMPORTED_MODULE_7__["DocService"]));
      };

      ScoreVerovioViewComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: ScoreVerovioViewComponent,
        selectors: [["app-score-verovio-view"]],
        viewQuery: function ScoreVerovioViewComponent_Query(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, true);
          }

          if (rf & 2) {
            var _t;

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.container = _t.first);
          }
        },
        hostBindings: function ScoreVerovioViewComponent_HostBindings(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("keydown", function ScoreVerovioViewComponent_keydown_HostBindingHandler($event) {
              return ctx.handleKeyPress($event);
            }, false, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresolveDocument"]);
          }
        },
        decls: 12,
        vars: 3,
        consts: [["id", "verovio", 3, "click"], ["verovio", ""], ["type", "checkbox", 3, "ngModel", "ngModelChange"], ["color", "primary", "class", "primary-button", "mat-stroked-button", "", 3, "click", 4, "ngIf"], ["color", "primary", "mat-stroked-button", "", 1, "primary-button", 3, "click"]],
        template: function ScoreVerovioViewComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0, 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ScoreVerovioViewComponent_Template_div_click_0_listener($event) {
              return ctx.handleClick($event);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "label");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, " Generate Barlines on Export ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "input", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ScoreVerovioViewComponent_Template_input_ngModelChange_5_listener($event) {
              return ctx.stateService.scoreOptions.barlines = $event;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, " \xA0 ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "label");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, " Switch to Modern Clefs on Export ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "input", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ScoreVerovioViewComponent_Template_input_ngModelChange_9_listener($event) {
              return ctx.stateService.scoreOptions.modernClefs = $event;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, ScoreVerovioViewComponent_button_11_Template, 2, 0, "button", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.stateService.scoreOptions.barlines);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.stateService.scoreOptions.modernClefs);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.stateService.editorialMode);
          }
        },
        directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_8__["CheckboxControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["NgModel"], _angular_common__WEBPACK_IMPORTED_MODULE_9__["NgIf"], _angular_material_button__WEBPACK_IMPORTED_MODULE_10__["MatButton"]],
        styles: ["#verovio[_ngcontent-%COMP%] {\n    overflow-x: scroll;\n    margin-bottom: 1em;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2NvcmUtZWRpdG9yL3Njb3JlLXZlcm92aW8tdmlldy9zY29yZS12ZXJvdmlvLXZpZXcuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGtCQUFrQjtJQUNsQixrQkFBa0I7QUFDdEIiLCJmaWxlIjoic3JjL2FwcC9zY29yZS1lZGl0b3Ivc2NvcmUtdmVyb3Zpby12aWV3L3Njb3JlLXZlcm92aW8tdmlldy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiI3Zlcm92aW8ge1xuICAgIG92ZXJmbG93LXg6IHNjcm9sbDtcbiAgICBtYXJnaW4tYm90dG9tOiAxZW07XG59XG4iXX0= */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ScoreVerovioViewComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-score-verovio-view',
            templateUrl: './score-verovio-view.component.html',
            styleUrls: ['./score-verovio-view.component.css']
          }]
        }], function () {
          return [{
            type: _state_service_service__WEBPACK_IMPORTED_MODULE_5__["StateService"]
          }, {
            type: _selected_staff_service__WEBPACK_IMPORTED_MODULE_6__["SelectedStaffService"]
          }, {
            type: _doc_service__WEBPACK_IMPORTED_MODULE_7__["DocService"]
          }];
        }, {
          container: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['verovio']
          }],
          handleKeyPress: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
            args: ['document:keydown', ['$event']]
          }]
        });
      })();
      /***/

    },

    /***/
    "./src/app/score-editor/selected-staff.service.ts":
    /*!********************************************************!*\
      !*** ./src/app/score-editor/selected-staff.service.ts ***!
      \********************************************************/

    /*! exports provided: SelectedStaffService */

    /***/
    function srcAppScoreEditorSelectedStaffServiceTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SelectedStaffService", function () {
        return SelectedStaffService;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! rxjs */
      "./node_modules/rxjs/_esm2015/index.js");

      var SelectedStaffService = /*#__PURE__*/function () {
        function SelectedStaffService() {
          _classCallCheck(this, SelectedStaffService);

          this._staffLoc = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
        }

        _createClass(SelectedStaffService, [{
          key: "getStaffLocation",
          value: function getStaffLocation() {
            return this._staffLoc;
          }
        }, {
          key: "staffLocation",
          set: function set(loc) {
            this._staffLoc.next(loc);
          }
        }]);

        return SelectedStaffService;
      }();

      SelectedStaffService.ɵfac = function SelectedStaffService_Factory(t) {
        return new (t || SelectedStaffService)();
      };

      SelectedStaffService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
        token: SelectedStaffService,
        factory: SelectedStaffService.ɵfac,
        providedIn: 'root'
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SelectedStaffService, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
          args: [{
            providedIn: 'root'
          }]
        }], function () {
          return [];
        }, null);
      })();
      /***/

    },

    /***/
    "./src/app/select-document/select-document.component.ts":
    /*!**************************************************************!*\
      !*** ./src/app/select-document/select-document.component.ts ***!
      \**************************************************************/

    /*! exports provided: SelectDocumentComponent */

    /***/
    function srcAppSelectDocumentSelectDocumentComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SelectDocumentComponent", function () {
        return SelectDocumentComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/forms */
      "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
      /* harmony import */


      var _rxweb_reactive_form_validators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @rxweb/reactive-form-validators */
      "./node_modules/@rxweb/reactive-form-validators/__ivy_ngcc__/fesm2015/rxweb-reactive-form-validators.js");
      /* harmony import */


      var _utils_mei__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../utils/mei */
      "./src/app/utils/mei.ts");
      /* harmony import */


      var _tools__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../tools */
      "./src/app/tools.ts");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/router */
      "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
      /* harmony import */


      var _state_service_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../state-service.service */
      "./src/app/state-service.service.ts");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/common */
      "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
      /* harmony import */


      var _angular_material_button__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/material/button */
      "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");

      function SelectDocumentComponent_small_21_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "small");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "URL is unexpected for this source!");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      var SelectDocumentComponent = /*#__PURE__*/function () {
        function SelectDocumentComponent(router, stateService) {
          _classCallCheck(this, SelectDocumentComponent);

          this.router = router;
          this.stateService = stateService;
          this.type = 'gallica';
          this.identifier = '12148/btv1b8454675g';
          this.file = null;
          this.invalid = false;
          this.selectionForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
            source: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('gallica', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
            resourceURL: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _rxweb_reactive_form_validators__WEBPACK_IMPORTED_MODULE_2__["RxwebValidators"].url()])
          });
          this.loadMEIForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
            fileInput: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required)
          });
        }

        _createClass(SelectDocumentComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "submit",
          value: function submit() {
            console.debug("Submit");
            var source = this.selectionForm.controls['source'].value;
            var resourceURL = this.selectionForm.controls['resourceURL'].value;
            this.invalid = false;
            var identifier;

            switch (source) {
              case 'gallica':
                console.debug("gallica");

                if (_tools__WEBPACK_IMPORTED_MODULE_4__["gallicaRegexp"].test(resourceURL)) {
                  console.debug("true");
                  identifier = resourceURL.match(_tools__WEBPACK_IMPORTED_MODULE_4__["gallicaRegexp"])[1];
                } else {
                  console.debug("false");
                  this.invalid = true;
                  return;
                }

                break;

              case 'ecodices':
                if (_tools__WEBPACK_IMPORTED_MODULE_4__["ecodicesRegexp"].test(resourceURL)) {
                  console.debug("Regular ecodices");
                  var matches = resourceURL.match(_tools__WEBPACK_IMPORTED_MODULE_4__["ecodicesRegexp"]);
                  identifier = matches[1] + '-' + matches[2];
                } else if (_tools__WEBPACK_IMPORTED_MODULE_4__["ecodicesIIIFRegexp"].test(resourceURL)) {
                  console.debug("IIIF ecodices");
                  identifier = resourceURL.match(_tools__WEBPACK_IMPORTED_MODULE_4__["ecodicesIIIFRegexp"])[1];
                } else {
                  this.invalid = true;
                  return;
                }

                break;

              case 'iiif':
                console.debug('iiif case');

                if (_tools__WEBPACK_IMPORTED_MODULE_4__["genericIIIFRegexp"].test(resourceURL)) {
                  console.debug("generic iiif");
                  identifier = encodeURIComponent(resourceURL);
                }

                break;

              default:
                console.debug(source);
                this.invalid = true;
                return;
            }

            console.debug(identifier);
            this.router.navigate(['/input', source, encodeURIComponent(identifier)]);
          }
        }, {
          key: "meiSubmit",
          value: function meiSubmit() {
            var _this10 = this;

            console.debug("MEI Submit");
            console.debug(this.file);

            if (this.file === null) {
              return;
            }

            var reader = new FileReader();
            reader.addEventListener("load", function () {
              var rawText = reader.result;
              var parser = new DOMParser();
              var doc = parser.parseFromString(rawText, "application/xml");

              var mei = _utils_mei__WEBPACK_IMPORTED_MODULE_3__["MEIDocument"].fromXML(doc);

              console.debug(mei); // Try to determine IIIF

              var iiif = mei.metadata.sourceIRI;
              var source, identifier;

              if (_tools__WEBPACK_IMPORTED_MODULE_4__["gallicaIIIFRegexp"].test(iiif)) {
                source = "gallica";
                identifier = iiif.match(_tools__WEBPACK_IMPORTED_MODULE_4__["gallicaIIIFRegexp"])[1];
              } else if (_tools__WEBPACK_IMPORTED_MODULE_4__["ecodicesIIIFRegexp"].test(iiif)) {
                source = "ecodices";
                identifier = iiif.match(_tools__WEBPACK_IMPORTED_MODULE_4__["ecodicesIIIFRegexp"])[1];
              } else if (_tools__WEBPACK_IMPORTED_MODULE_4__["genericIIIFRegexp"].test(iiif)) {
                source = "iiif";
                identifier = encodeURIComponent(iiif);
              } else {
                window.alert("Sorry! This seems to be a valid file, but this IIIF manifest cannot be loaded.");
                return;
              }

              _this10.stateService.mei = mei;

              _this10.router.navigate(['/input', source, encodeURIComponent(identifier)]);
            });
            reader.readAsText(this.file);
          }
        }, {
          key: "onFileChange",
          value: function onFileChange(evt) {
            this.file = evt.target['files'][0];
          }
        }, {
          key: "encodedIdSample",
          get: function get() {
            return encodeURIComponent(this.identifier);
          }
        }]);

        return SelectDocumentComponent;
      }();

      SelectDocumentComponent.ɵfac = function SelectDocumentComponent_Factory(t) {
        return new (t || SelectDocumentComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_state_service_service__WEBPACK_IMPORTED_MODULE_6__["StateService"]));
      };

      SelectDocumentComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: SelectDocumentComponent,
        selectors: [["app-select-document"]],
        decls: 63,
        vars: 5,
        consts: [["id", "document-select"], ["id", "load-manuscript"], [3, "formGroup", "submit"], [2, "display", "block"], [1, "label"], ["formControlName", "source"], ["value", "gallica", "selected", ""], ["value", "ecodices"], ["value", "diamm", "disabled", ""], ["value", "iiif"], ["type", "url", "formControlName", "resourceURL"], [4, "ngIf"], ["type", "submit", "mat-stroked-button", "", 3, "disabled"], ["id", "load-mei"], ["type", "file", "formControlName", "fileInput", "accept", "application/mei+xml, application/xml, .mei, .xml", 3, "change"], ["id", "prototype-message"], ["href", "https://www.brandeis.edu"], ["href", "https://www.neh.gov"], ["href", "https://measuringpolyphony.org"], ["id", "funder-logos"], ["src", "assets/img/NEH-Preferred-Seal820.jpg", "alt", "National Endowment for the Humanities Logo", 1, "funder-logo"], ["src", "assets/img/brandeis-logo-stacked-seal-blue-digital.png", "alt", "Brandeis University Logo", 1, "funder-logo"]],
        template: function SelectDocumentComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h1");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Load a manuscript");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "form", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("submit", function SelectDocumentComponent_Template_form_submit_4_listener() {
              return ctx.submit();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "label", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Manuscript Repository:\xA0 ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "select", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "option", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Gallica");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "option", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "eCodices");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "option", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "DIAMM");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "option", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Generic IIIF");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, " \xA0 ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "label", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "URL:\xA0 ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "input", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](21, SelectDocumentComponent_small_21_Template, 2, 0, "small", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "button", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "Submit");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](25, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, " For example, to transcribe a piece from the famous Roman de Fauvel manuscript, choose ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "em");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "Gallica");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, " in the dropdown and paste this URL: ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](31, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "https://gallica.bnf.fr/ark:/12148/btv1b8454675g");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "div", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "h1");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, "Load an .mei file");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "form", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("submit", function SelectDocumentComponent_Template_form_submit_37_listener() {
              return ctx.meiSubmit();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "label", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, "Compatible Parts-MEI File:\xA0 ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "input", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function SelectDocumentComponent_Template_input_change_41_listener($event) {
              return ctx.onFileChange($event);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "button", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44, "Load File");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "div", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](47, " This prototype for an online mensural music editor, funded by ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "a", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](49, "Brandeis University");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](50, " and the ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "a", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](52, "National Endowment for the Humanities");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](53, ", allows students and experts alike to encode transcriptions of polyphony directly into mensural notation, and links the music transcriptions to zones of the digital images of the medieval manuscripts. For more information about this project, click ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "a", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](55, "here");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](56, ". ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](57, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "div", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "a", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](60, "img", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "a", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](62, "img", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.selectionForm);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](17);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.invalid);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", !ctx.selectionForm.valid);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.loadMEIForm);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", !ctx.loadMEIForm.valid);
          }
        },
        directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["SelectControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_x"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgIf"], _angular_material_button__WEBPACK_IMPORTED_MODULE_8__["MatButton"]],
        styles: ["#document-select[_ngcontent-%COMP%] {\n    display: grid;\n    grid-template-columns: repeat(3, 1fr);\n}\n\n#document-select[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%] {\n    grid-column: 2;\n    display: grid;\n    padding-bottom: 5em;\n}\n\n#document-select[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]   *[_ngcontent-%COMP%] {\n    justify-self: center;\n}\n\n#prototype-message[_ngcontent-%COMP%] {\n    display: grid;\n    grid-template-columns: repeat(4, 1fr);\n}\n\n#prototype-message[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n    grid-column: 2 / 4;\n    text-align: center;\n}\n\n#prototype-message[_ngcontent-%COMP%]   #funder-logos[_ngcontent-%COMP%] {\n    grid-column: 4;\n    display: flex;\n    margin-left: auto;\n    padding-right: 1rem;\n}\n\n#load-manuscript[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n    text-align: center;\n}\n\nform[_ngcontent-%COMP%] {\n    display: grid;\n}\n\nform[_ngcontent-%COMP%]   *[_ngcontent-%COMP%] {\n    justify-self: center;\n}\n\na[_ngcontent-%COMP%] {\n    margin-top: 2em;\n}\n\nh1[_ngcontent-%COMP%] {\n  font-size: 2rem;\n}\n\n.funder-logo[_ngcontent-%COMP%] {\n  height: 4rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2VsZWN0LWRvY3VtZW50L3NlbGVjdC1kb2N1bWVudC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksYUFBYTtJQUNiLHFDQUFxQztBQUN6Qzs7QUFFQTtJQUNJLGNBQWM7SUFDZCxhQUFhO0lBQ2IsbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksb0JBQW9CO0FBQ3hCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLHFDQUFxQztBQUN6Qzs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxjQUFjO0lBQ2QsYUFBYTtJQUNiLGlCQUFpQjtJQUNqQixtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxhQUFhO0FBQ2pCOztBQUVBO0lBQ0ksb0JBQW9CO0FBQ3hCOztBQUVBO0lBQ0ksZUFBZTtBQUNuQjs7QUFFQTtFQUNFLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxZQUFZO0FBQ2QiLCJmaWxlIjoic3JjL2FwcC9zZWxlY3QtZG9jdW1lbnQvc2VsZWN0LWRvY3VtZW50LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIjZG9jdW1lbnQtc2VsZWN0IHtcbiAgICBkaXNwbGF5OiBncmlkO1xuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDMsIDFmcik7XG59XG5cbiNkb2N1bWVudC1zZWxlY3QgPiBkaXYge1xuICAgIGdyaWQtY29sdW1uOiAyO1xuICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgcGFkZGluZy1ib3R0b206IDVlbTtcbn1cblxuI2RvY3VtZW50LXNlbGVjdCBkaXYgKiB7XG4gICAganVzdGlmeS1zZWxmOiBjZW50ZXI7XG59XG5cbiNwcm90b3R5cGUtbWVzc2FnZSB7XG4gICAgZGlzcGxheTogZ3JpZDtcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCg0LCAxZnIpO1xufVxuXG4jcHJvdG90eXBlLW1lc3NhZ2UgcCB7XG4gICAgZ3JpZC1jb2x1bW46IDIgLyA0O1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuI3Byb3RvdHlwZS1tZXNzYWdlICNmdW5kZXItbG9nb3Mge1xuICAgIGdyaWQtY29sdW1uOiA0O1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgbWFyZ2luLWxlZnQ6IGF1dG87XG4gICAgcGFkZGluZy1yaWdodDogMXJlbTtcbn1cblxuI2xvYWQtbWFudXNjcmlwdCBwIHtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbmZvcm0ge1xuICAgIGRpc3BsYXk6IGdyaWQ7XG59XG5cbmZvcm0gKiB7XG4gICAganVzdGlmeS1zZWxmOiBjZW50ZXI7XG59XG5cbmEge1xuICAgIG1hcmdpbi10b3A6IDJlbTtcbn1cblxuaDEge1xuICBmb250LXNpemU6IDJyZW07XG59XG5cbi5mdW5kZXItbG9nbyB7XG4gIGhlaWdodDogNHJlbTtcbn1cbiJdfQ== */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SelectDocumentComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-select-document',
            templateUrl: './select-document.component.html',
            styleUrls: ['./select-document.component.css']
          }]
        }], function () {
          return [{
            type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]
          }, {
            type: _state_service_service__WEBPACK_IMPORTED_MODULE_6__["StateService"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "./src/app/state-service.service.ts":
    /*!******************************************!*\
      !*** ./src/app/state-service.service.ts ***!
      \******************************************/

    /*! exports provided: StateService */

    /***/
    function srcAppStateServiceServiceTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "StateService", function () {
        return StateService;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

      var StateService = /*#__PURE__*/function () {
        function StateService() {
          _classCallCheck(this, StateService);

          this.meiDoc = null;
          this.editorialMode = false;
          this.scoreOptions = {
            barlines: false,
            modernClefs: false
          };
        }

        _createClass(StateService, [{
          key: "mei",
          get: function get() {
            return this.meiDoc;
          },
          set: function set(document) {
            this.meiDoc = document;
          }
        }]);

        return StateService;
      }();

      StateService.ɵfac = function StateService_Factory(t) {
        return new (t || StateService)();
      };

      StateService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
        token: StateService,
        factory: StateService.ɵfac,
        providedIn: 'root'
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](StateService, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
          args: [{
            providedIn: 'root'
          }]
        }], function () {
          return [];
        }, null);
      })();
      /***/

    },

    /***/
    "./src/app/tools.ts":
    /*!**************************!*\
      !*** ./src/app/tools.ts ***!
      \**************************/

    /*! exports provided: formIIIFManifest, gallicaRegexp, gallicaIIIFRegexp, ecodicesRegexp, ecodicesIIIFRegexp, genericIIIFRegexp */

    /***/
    function srcAppToolsTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "formIIIFManifest", function () {
        return formIIIFManifest;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "gallicaRegexp", function () {
        return gallicaRegexp;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "gallicaIIIFRegexp", function () {
        return gallicaIIIFRegexp;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ecodicesRegexp", function () {
        return ecodicesRegexp;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ecodicesIIIFRegexp", function () {
        return ecodicesIIIFRegexp;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "genericIIIFRegexp", function () {
        return genericIIIFRegexp;
      });

      function formIIIFManifest(source, identifier) {
        switch (source) {
          case 'gallica':
            return 'https://gallica.bnf.fr/iiif/ark:/' + identifier + '/manifest.json';

          case 'ecodices':
            return 'https://www.e-codices.unifr.ch/metadata/iiif/' + identifier + '/manifest.json';

          case 'iiif':
            return decodeURIComponent(identifier);

          default:
            return '';
        }
      } //https://gallica.bnf.fr/ark:/12148/btv1b8454675g


      var gallicaRegexp = new RegExp("https?:\/\/gallica\.bnf\.fr\/ark:\/([a-z0-9]+\/[a-z0-9]+)");
      var gallicaIIIFRegexp = new RegExp("https?:\/\/gallica\.bnf\.fr\/iiif\/ark:\/([a-z0-9]+\/[a-z0-9]+)\/manifest.json"); //https://www.e-codices.unifr.ch/en/list/one/bbb/0218

      var ecodicesRegexp = new RegExp("https?:\/\/www\.e-codices\.unifr\.ch\/[a-z]{2}\/list\/one\/([a-z]+)\/([-a-zA-Z0-9]+)"); //https://www.e-codices.unifr.ch/metadata/iiif/bbb-0218/manifest.json

      var ecodicesIIIFRegexp = new RegExp("https?:\/\/www\.e-codices\.unifr\.ch\/metadata\/iiif\/([-a-zA-Z0-9]+)\/manifest\.json");
      var genericIIIFRegexp = new RegExp("https?:\/\/.*\/manifest\.json");
      /***/
    },

    /***/
    "./src/app/utils/MusicItem.ts":
    /*!************************************!*\
      !*** ./src/app/utils/MusicItem.ts ***!
      \************************************/

    /*! exports provided: PitchClass, Accid, LigStatus, PlicaStatus, ClefItem, RestItem, MensurItem, NoteItem, MusicList */

    /***/
    function srcAppUtilsMusicItemTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PitchClass", function () {
        return PitchClass;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "Accid", function () {
        return Accid;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "LigStatus", function () {
        return LigStatus;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PlicaStatus", function () {
        return PlicaStatus;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ClefItem", function () {
        return ClefItem;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "RestItem", function () {
        return RestItem;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MensurItem", function () {
        return MensurItem;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "NoteItem", function () {
        return NoteItem;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MusicList", function () {
        return MusicList;
      });
      /* harmony import */


      var uuid__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! uuid */
      "./node_modules/uuid/index.js");
      /* harmony import */


      var uuid__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(uuid__WEBPACK_IMPORTED_MODULE_0__);
      /* harmony import */


      var _definitions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./definitions */
      "./src/app/utils/definitions.ts");
      /**
       * Based on musiclist.js by Craig Sapp
       * From: https://github.com/craigsapp/mensural-input/blob/master/scripts/musiclist.js
       */


      function parseRhythm(rhythm) {
        var val;

        switch (rhythm) {
          case "semibrevis":
            val = 1;
            break;

          case "brevis":
            val = 0;
            break;

          case "maxima":
            val = 7;
            break;

          case "longa":
            val = 9;
            break;

          case "minima":
            val = 2;
            break;

          case "semiminima":
            val = 4;
            break;

          case "fusa":
            val = 8;
            break;

          case "semifusa":
            val = 6;
            break;
        }

        return val;
      }

      var PitchClass;

      (function (PitchClass) {
        PitchClass[PitchClass["C"] = 0] = "C";
        PitchClass[PitchClass["D"] = 1] = "D";
        PitchClass[PitchClass["E"] = 2] = "E";
        PitchClass[PitchClass["F"] = 3] = "F";
        PitchClass[PitchClass["G"] = 4] = "G";
        PitchClass[PitchClass["A"] = 5] = "A";
        PitchClass[PitchClass["B"] = 6] = "B";
      })(PitchClass || (PitchClass = {}));

      var Accid;

      (function (Accid) {
        Accid[Accid["NONE"] = 0] = "NONE";
        Accid["SHARP"] = "#";
        Accid["FLAT"] = "-";
        Accid["NATURAL"] = "n";
      })(Accid || (Accid = {}));

      var LigStatus;

      (function (LigStatus) {
        LigStatus[LigStatus["NONE"] = 0] = "NONE";
        LigStatus[LigStatus["START"] = 1] = "START";
        LigStatus[LigStatus["END"] = 2] = "END";
      })(LigStatus || (LigStatus = {}));

      var PlicaStatus;

      (function (PlicaStatus) {
        PlicaStatus[PlicaStatus["NONE"] = 0] = "NONE";
        PlicaStatus[PlicaStatus["UP"] = 1] = "UP";
        PlicaStatus[PlicaStatus["DOWN"] = 2] = "DOWN";
      })(PlicaStatus || (PlicaStatus = {}));

      var ClefItem = /*#__PURE__*/function () {
        function ClefItem() {
          _classCallCheck(this, ClefItem);

          this.m_type = "clef";
          this.m_line = -1;
          this.m_pname = PitchClass.C;
          this.m_clefLine = 3;
          this.m_keySig = new Map();
        }

        _createClass(ClefItem, [{
          key: "raisePitch",
          value: function raisePitch() {
            this.m_clefLine += 1;

            if (this.m_clefLine > 5) {
              this.m_clefLine = 5;
            }
          }
        }, {
          key: "lowerPitch",
          value: function lowerPitch() {
            this.m_clefLine -= 1;

            if (this.m_clefLine < 1) {
              this.m_clefLine = 1;
            }
          }
        }, {
          key: "getHumdrumLine",
          value: function getHumdrumLine() {
            var output = "*clef";

            switch (this.m_pname) {
              case PitchClass.G:
                output += "G";
                break;

              case PitchClass.F:
                output += "F";
                break;

              default:
                output += "C";
                break;
            }

            output += this.m_clefLine;
            output += "\t";
            output += "*";

            if (this.m_keySig.size > 0) {
              output += "\n";
              output += "*k[";

              var _iterator5 = _createForOfIteratorHelper(this.m_keySig),
                  _step5;

              try {
                for (_iterator5.s(); !(_step5 = _iterator5.n()).done;) {
                  var _step5$value = _slicedToArray(_step5.value, 2),
                      pitch = _step5$value[0],
                      accid = _step5$value[1];

                  output += pitch;
                  output += accid;
                }
              } catch (err) {
                _iterator5.e(err);
              } finally {
                _iterator5.f();
              }

              output += "]\t*";
            }

            return output;
          }
        }], [{
          key: "parseXML",
          value: function parseXML(element) {
            var clef = new ClefItem();

            if (element.hasAttribute("xml:id")) {
              clef.m_id = element.getAttribute("xml:id");
            }

            switch (element.getAttribute("shape")) {
              case "F":
                clef.m_pname = PitchClass.F;
                break;

              case "G":
                clef.m_pname = PitchClass.G;
                break;

              case "C":
              default:
                break;
            }

            try {
              var line = parseInt(element.getAttribute("line"));
              clef.m_clefLine = line;
            } catch (e) {}

            return clef;
          }
        }]);

        return ClefItem;
      }();

      var RestItem = /*#__PURE__*/function () {
        function RestItem(rhythm) {
          _classCallCheck(this, RestItem);

          this.m_type = "rest";
          this.m_line = -1;
          this.m_dot = false;

          if (rhythm !== undefined) {
            this.m_rhythm = rhythm;
          } else {
            this.m_rhythm = 1;
          }
        }

        _createClass(RestItem, [{
          key: "getHumdrumLine",
          value: function getHumdrumLine(options) {
            var output = "";

            switch (this.m_rhythm) {
              case 7:
                output += "X";
                break;

              case 9:
                output += "L";
                break;

              case 0:
                output += "S";
                break;

              case 1:
                output += "s";
                break;

              case 2:
                output += "M";
                break;

              case 4:
                output += "m";
                break;

              case 6:
                output += "u";
                break;

              case 8:
                output += "U";
                break;
            }

            if (this.m_dot) {
              output += ":";
            }

            output += "r";

            if (options["mark"]) {
              output += "@";
            }

            output += "\t.";
            return output;
          }
        }], [{
          key: "parseXML",
          value: function parseXML(element) {
            var rest = new RestItem();

            if (element.hasAttribute("xml:id")) {
              rest.m_id = element.getAttribute("xml:id");
            }

            if (element.hasAttribute("dur")) {
              rest.m_rhythm = parseRhythm(element.getAttribute("dur"));
            }

            return rest;
          }
        }]);

        return RestItem;
      }();

      var MensurItem = /*#__PURE__*/function () {
        function MensurItem() {
          _classCallCheck(this, MensurItem);

          this.m_type = "mensur";
          this.m_line = -1;
          this.m_modus = _definitions__WEBPACK_IMPORTED_MODULE_1__["Mensuration"].NA;
          this.m_tempus = _definitions__WEBPACK_IMPORTED_MODULE_1__["Mensuration"].NA;
          this.m_prolatio = _definitions__WEBPACK_IMPORTED_MODULE_1__["Mensuration"].NA;
        }

        _createClass(MensurItem, [{
          key: "getHumdrumLine",
          value: function getHumdrumLine() {
            if (this.m_tempus === _definitions__WEBPACK_IMPORTED_MODULE_1__["Mensuration"].Two && this.m_prolatio === _definitions__WEBPACK_IMPORTED_MODULE_1__["Mensuration"].Two) return "*met(C)\t*";
            if (this.m_tempus === _definitions__WEBPACK_IMPORTED_MODULE_1__["Mensuration"].Three && this.m_prolatio === _definitions__WEBPACK_IMPORTED_MODULE_1__["Mensuration"].Two) return "*met(O)\t*";
            if (this.m_tempus === _definitions__WEBPACK_IMPORTED_MODULE_1__["Mensuration"].Two && this.m_prolatio === _definitions__WEBPACK_IMPORTED_MODULE_1__["Mensuration"].Three) return "*met(C.)\t*";
            if (this.m_tempus === _definitions__WEBPACK_IMPORTED_MODULE_1__["Mensuration"].Three && this.m_prolatio === _definitions__WEBPACK_IMPORTED_MODULE_1__["Mensuration"].Three) return "*met(O.)\t*";else return "*met(C)\t*";
          }
        }], [{
          key: "parseXML",
          value: function parseXML(element) {
            var mensur = new MensurItem();

            if (element.hasAttribute("xml:id")) {
              mensur.m_id = element.getAttribute("xml:id");
            }

            if (element.hasAttribute("modusminor")) {
              mensur.m_modus = element.getAttribute("modus");
            }

            if (element.hasAttribute("tempus")) {
              mensur.m_tempus = element.getAttribute("tempus");
            }

            if (element.hasAttribute("prolatio")) {
              mensur.m_prolatio = element.getAttribute("prolatio");
            }

            return mensur;
          }
        }]);

        return MensurItem;
      }();

      var NoteItem = /*#__PURE__*/function () {
        function NoteItem() {
          _classCallCheck(this, NoteItem);

          this.m_type = "note";
          this.m_line = -1;
          this.m_pname = PitchClass.C;
          this.m_accid = Accid.NONE;
          this.m_oct = 4;
          this.m_rhythm = 1;
          this.m_dot = false;
          this.m_text = "";
          this.m_lig = LigStatus.NONE;
          this.m_plica = PlicaStatus.NONE;
        }

        _createClass(NoteItem, [{
          key: "raisePitch",
          value: function raisePitch(amount) {
            if (amount === undefined) {
              amount = 1;
            }

            if (amount >= 7) {
              this.m_oct += amount % 7;
              amount -= 7 * (amount % 7);
            }

            this.m_pname += amount;

            if (this.m_pname > 6) {
              this.m_pname -= 7;
              this.m_oct += 1;
            }
          }
        }, {
          key: "lowerPitch",
          value: function lowerPitch(amount) {
            if (amount === undefined) {
              amount = 1;
            }

            if (amount >= 7) {
              this.m_oct -= amount % 7;
              amount -= 7 * (amount % 7);
            }

            this.m_pname -= amount;

            if (this.m_pname < 0) {
              this.m_pname += 7;
              this.m_oct -= 1;
            }
          }
        }, {
          key: "getHumdrumLine",
          value: function getHumdrumLine(options) {
            var output = "";

            if (this.m_lig === LigStatus.START) {
              output += "[";
            }

            switch (this.m_rhythm) {
              case 7:
                output += "X";
                break;

              case 9:
                output += "L";
                break;

              case 0:
                output += "S";
                break;

              case 1:
                output += "s";
                break;

              case 2:
                output += "M";
                break;

              case 4:
                output += "m";
                break;

              case 6:
                output += "u";
                break;

              case 8:
                output += "U";
                break;
            }

            if (this.m_dot) {
              output += ":";
            }

            var pname;

            switch (this.m_pname) {
              case PitchClass.C:
                pname = "c";
                break;

              case PitchClass.D:
                pname = "d";
                break;

              case PitchClass.E:
                pname = "e";
                break;

              case PitchClass.F:
                pname = "f";
                break;

              case PitchClass.G:
                pname = "g";
                break;

              case PitchClass.A:
                pname = "a";
                break;

              case PitchClass.B:
                pname = "b";
                break;
            }

            if (this.m_oct >= 4) {
              for (var i = 4; i <= this.m_oct; i++) {
                output += pname;
              }
            } else {
              pname = pname.toUpperCase();

              for (var _i2 = 3; _i2 >= this.m_oct; _i2--) {
                output += pname;
              }
            }

            if (this.m_plica === PlicaStatus.DOWN) {
              output += "p";
            } else if (this.m_plica === PlicaStatus.UP) {
              output += "P";
            }

            if (this.m_accid !== Accid.NONE) {
              output += this.m_accid.toString();
            }

            if (this.m_lig === LigStatus.END) {
              output += "]";
            }

            if (options["mark"]) {
              output += "@";
            }

            output += "\t";

            if (this.m_text) {
              if (options["hyphen"]) {
                output += "-";
              }

              output += this.m_text;
            } else {
              output += ".";
            }

            return output;
          }
        }], [{
          key: "parseXML",
          value: function parseXML(element) {
            var note = new NoteItem(); // Set info from element attributes

            if (element.hasAttribute("xml:id")) {
              note.m_id = element.getAttribute("xml:id");
            }

            if (element.hasAttribute("oct")) {
              note.m_oct = parseInt(element.getAttribute("oct"));
            }

            if (element.hasAttribute("dur")) {
              note.m_rhythm = parseRhythm(element.getAttribute("dur"));
            }

            if (element.hasAttribute("pname")) {
              note.m_pname = PitchClass[element.getAttribute("pname").toUpperCase()];
            } // Check children for a plica


            if (element.querySelector("plica")) {
              var plica = element.querySelector("plica");

              if (element.hasAttribute("dir") && element.getAttribute("dir") == "up") {
                note.m_plica = PlicaStatus.UP;
              } else {
                note.m_plica = PlicaStatus.DOWN;
              }
            } // Check next sibling for dot


            if (element.nextElementSibling && element.nextElementSibling.tagName === "dot") {
              note.m_dot = true;
            } // Check children for accid, text


            if (element.querySelector("accid")) {
              var accid = element.querySelector("accid");

              switch (accid.getAttribute("accid")) {
                case "s":
                  note.m_accid = Accid.SHARP;
                  break;

                case "f":
                  note.m_accid = Accid.FLAT;
                  break;

                case "n":
                  note.m_accid = Accid.NATURAL;
                  break;

                default:
                  break;
              }
            }

            if (element.querySelector("syl")) {
              var syl = element.querySelector("syl");
              note.m_text = syl.textContent;
            } // Check parent for ligature


            if (element.parentElement.tagName === "ligature") {
              if (element === element.parentElement.firstElementChild) {
                note.m_lig = LigStatus.START;
              } else if (element === element.parentElement.lastElementChild) {
                note.m_lig = LigStatus.END;
              }
            }

            return note;
          }
        }]);

        return NoteItem;
      }();

      var MusicList = /*#__PURE__*/function () {
        function MusicList() {
          _classCallCheck(this, MusicList);

          this.m_list = [];
          this.m_index = -1;
          this.m_rhythm = 1;
          this.m_notationCallback = null;
        }

        _createClass(MusicList, [{
          key: "addClef",
          value: function addClef(dpc) {
            var item = new ClefItem();

            if (dpc === PitchClass.G) {
              item.m_pname = PitchClass.G;
              item.m_clefLine = 2;
            } else if (dpc === PitchClass.F) {
              item.m_pname = PitchClass.F;
              item.m_clefLine = 4;
            } else {
              item.m_pname = PitchClass.C;
              item.m_clefLine = 3;
            }

            this.m_list.push(item);
            this.runNotationCallback();
          }
        }, {
          key: "addRest",
          value: function addRest() {
            if (this.m_list.length === 0) return;
            this.m_list.push(new RestItem(this.m_rhythm));
            this.runNotationCallback();
          }
        }, {
          key: "addMensur",
          value: function addMensur() {
            this.m_list.push(new MensurItem());
            this.runNotationCallback();
          }
        }, {
          key: "addPitchFar",
          value: function addPitchFar(dpc) {
            if (this.m_list.length === 0) {
              this.addClef(dpc);
              return;
            }

            dpc = (dpc + 7000) % 7;
            var ln = this.getLastNote();

            if (!ln) {
              ln = new NoteItem();
              ln.m_pname = PitchClass.C;
              ln.m_oct = 4;
              ln.m_rhythm = 1;
            }

            var oct = ln.m_oct;
            var pitch = ln.m_pname + 7 * oct;
            var candidate = [];
            candidate[0] = (oct - 1) * 7 + dpc;
            candidate[1] = (oct + 0) * 7 + dpc;
            candidate[2] = (oct + 1) * 7 + dpc;
            var best = -1;

            for (var i = 0; i < candidate.length; i++) {
              if (Math.abs(pitch - candidate[i]) > 3 && Math.abs(pitch - candidate[i]) < 8) {
                best = i;
                break;
              }
            }

            var newnote = new NoteItem();
            newnote.m_rhythm = this.m_rhythm;
            newnote.m_pname = dpc;

            switch (best) {
              case 0:
                newnote.m_oct = oct - 1;
                break;

              case 1:
                newnote.m_oct = oct;
                break;

              case 2:
                newnote.m_oct = oct + 1;
                break;
            }

            this.m_list.push(newnote);
            this.runNotationCallback();
          }
        }, {
          key: "addPitchNear",
          value: function addPitchNear(dpc) {
            if (this.m_list.length == 0) {
              this.addClef(dpc);
              return;
            }

            dpc = (dpc + 7000) % 7;
            var ln = this.getLastNote();

            if (!ln) {
              ln = new NoteItem();
              ln.m_pname = 0;
              ln.m_oct = 4;
              ln.m_rhythm = 1;
            }

            var oct = ln.m_oct;
            var pitch = ln.m_pname + 7 * oct;
            var candidate = [];
            candidate[0] = (oct - 1) * 7 + dpc;
            candidate[1] = (oct + 0) * 7 + dpc;
            candidate[2] = (oct + 1) * 7 + dpc;
            var best = -1;

            for (var i = 0; i < candidate.length; i++) {
              if (Math.abs(pitch - candidate[i]) < 4) {
                best = i;
                break;
              }
            }

            var newnote = new NoteItem();
            newnote.m_rhythm = this.m_rhythm;
            newnote.m_pname = dpc;

            switch (best) {
              case 0:
                newnote.m_oct = oct - 1;
                break;

              case 1:
                newnote.m_oct = oct;
                break;

              case 2:
                newnote.m_oct = oct + 1;
                break;
            }

            this.m_list.push(newnote);
            this.runNotationCallback();
          }
        }, {
          key: "getLastNote",
          value: function getLastNote() {
            for (var i = this.m_list.length - 1; i >= 0; i--) {
              if (this.m_list[i].m_type === "note") {
                return this.m_list[i];
              }
            }

            return null;
          }
        }, {
          key: "removeLastItem",
          value: function removeLastItem() {
            this.m_list.pop();
            this.runNotationCallback();
          }
        }, {
          key: "hasOpenLigature",
          value: function hasOpenLigature() {
            var open = false;

            var _iterator6 = _createForOfIteratorHelper(this.m_list),
                _step6;

            try {
              for (_iterator6.s(); !(_step6 = _iterator6.n()).done;) {
                var item = _step6.value;

                if (item.m_type === "note") {
                  var note = item;

                  if (note.m_lig === LigStatus.START) {
                    open = true;
                  } else if (note.m_lig === LigStatus.END) {
                    open = false;
                  }
                }
              }
            } catch (err) {
              _iterator6.e(err);
            } finally {
              _iterator6.f();
            }

            return open;
          }
        }, {
          key: "selectBackward",
          value: function selectBackward() {
            if (this.m_index > 0) {
              this.m_index--;
            } else if (this.m_index === 0) {
              this.m_index = -1;
            } else if (this.m_index < 0) {
              this.m_index = this.m_list.length - 1;
            }

            this.runNotationCallback();
          }
        }, {
          key: "selectForward",
          value: function selectForward() {
            if (this.m_index < this.m_list.length - 1) {
              this.m_index++;
            } else if (this.m_index == this.m_list.length - 1) {
              this.m_index = -1;
            } else if (this.m_index < 0) {
              this.m_index = 0;
            }

            this.runNotationCallback();
          }
        }, {
          key: "runNotationCallback",
          value: function runNotationCallback() {
            if (this.m_notationCallback) {
              var score = this.getHumdrumScore({});
              this.m_notationCallback(score);
            }
          }
        }, {
          key: "addTextToCurrentItem",
          value: function addTextToCurrentItem(text) {
            if (this.m_list.length === 0) {
              return false;
            }

            var index = this.m_index;

            if (index < 0) {
              index = this.m_list.length - 1;
            }

            if (index < 0) {
              return false;
            }

            var item = this.m_list[index];

            if (item.m_type === "note") {
              item.m_text += text;

              if (text === "-") {
                this.m_index += 1;

                if (this.m_index >= this.m_list.length) {
                  this.m_index = -1;
                }
              }
            }

            this.runNotationCallback();
            return true;
          }
        }, {
          key: "goToEndOfList",
          value: function goToEndOfList() {
            this.m_index = -1;
            this.runNotationCallback();
          }
        }, {
          key: "lowerPitch",
          value: function lowerPitch(amount) {
            if (this.m_list.length === 0) return;
            var index = this.m_index;
            if (index < 0) index = this.m_list.length - 1;

            if (this.m_list[index].m_type === "note") {
              this.m_list[index].lowerPitch(amount);
            } else if (this.m_list[index].m_type === "clef") {
              this.m_list[index].lowerPitch();
            }

            this.runNotationCallback();
          }
        }, {
          key: "raisePitch",
          value: function raisePitch(amount) {
            if (this.m_list.length === 0) return;
            var index = this.m_index;
            if (index < 0) index = this.m_list.length - 1;

            if (this.m_list[index].m_type === "note") {
              this.m_list[index].raisePitch(amount);
            } else if (this.m_list[index].m_type === "clef") {
              this.m_list[index].raisePitch();
            }

            this.runNotationCallback();
          }
        }, {
          key: "deleteCharacterOnCurrentItem",
          value: function deleteCharacterOnCurrentItem() {
            var index = this.m_index;
            if (index < 0) index = this.m_list.length - 1;

            try {
              var item = this.m_list[index];
              if (item.m_text.length === 0) return;
              item.m_text = item.m_text.substring(0, item.m_text.length - 1);
              this.runNotationCallback();
            } catch (e) {}
          }
        }, {
          key: "clearTextOnCurrentItem",
          value: function clearTextOnCurrentItem() {
            var index = this.m_index;

            if (index < 0 || index >= this.m_list.length) {
              return;
            }

            var item = this.m_list[index];
            if (!item) return;

            try {
              var note = item;
              note.m_text = "";
              this.runNotationCallback();
            } catch (e) {}
          }
        }, {
          key: "clear",
          value: function clear() {
            this.m_list = [];
            this.m_index = -1;
            this.runNotationCallback();
          }
        }, {
          key: "getHumdrumScore",
          value: function getHumdrumScore(opts) {
            if (!opts) {
              opts = {};
            }

            var output = [];
            output.push("**mens\t**text");

            if (opts['white'] !== true) {
              output.push("*black\t*");
            }

            var i;
            var lines;
            var noteCounter = 0;
            var restCounter = 0;
            var hyphen = false;
            var options = opts;

            for (i = 0; i < this.m_list.length; i++) {
              var item = this.m_list[i];

              if (item.m_type == "note") {
                noteCounter += 1;
              } else if (item.m_type == "rest") {
                restCounter += 1;
              }

              options["mark"] = false;
              options["hyphen"] = hyphen;

              if (i == this.m_index) {
                options["mark"] = true;
              }

              if (options["export"]) {
                options["mark"] = false;
              }

              if (item.m_id === undefined) {
                item.m_id = 'm-' + Object(uuid__WEBPACK_IMPORTED_MODULE_0__["v4"])();
              }

              lines = item.getHumdrumLine(options);

              if (item.m_type === "note") {
                if (item.m_text.match(/-$/)) {
                  hyphen = true;
                } else {
                  hyphen = false;
                }
              }

              this.m_list[i].m_line = output.length + 1;
              output.push(lines);
            }

            if (noteCounter + restCounter == 0) {
              // need to add a dummy rest to force display of clef
              output.push("4ryy\t.");
            }

            output.push("=-\t=-");
            output.push("*-\t*-");

            if (!options["export"]) {
              output.push("!!!RDF**kern: @ = marked note"); // output.push("!!!RDF**kern: & = marked note, color=green")
              //output.push("!!!RDF**kern: i = marked note, color=blue");
              //output.push("!!!RDF**mens: @ = marked note");
            }

            var output2 = "";

            for (i = 0; i < output.length; i++) {
              output2 += output[i] + "\n";
            }

            return output2;
          }
        }, {
          key: "selectItemByLine",
          value: function selectItemByLine(lineNumber) {
            for (var i = 0; i < this.m_list.length; i++) {
              if (this.m_list[i].m_line === lineNumber) {
                this.m_index = i;
                this.runNotationCallback();
                return;
              }
            }
          }
        }, {
          key: "processKeySig",
          value: function processKeySig(pitch, accid) {
            if (this.m_list.length > 0) {
              var first = this.m_list[0];

              if (first.m_type !== "clef") {
                console.debug("First was not a clef!!!");
                return false;
              }

              if (first.m_keySig.has(pitch)) {
                if (first.m_keySig.get(pitch) === accid) {
                  first.m_keySig["delete"](pitch);
                } else {
                  first.m_keySig.set(pitch, accid);
                }
              } else {
                first.m_keySig.set(pitch, accid);
              }

              this.runNotationCallback();
              return true;
            }
          }
        }]);

        return MusicList;
      }();
      /***/

    },

    /***/
    "./src/app/utils/definitions.ts":
    /*!**************************************!*\
      !*** ./src/app/utils/definitions.ts ***!
      \**************************************/

    /*! exports provided: Voice, voiceToOrdinal, Mensuration, Staff */

    /***/
    function srcAppUtilsDefinitionsTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "Voice", function () {
        return Voice;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "voiceToOrdinal", function () {
        return voiceToOrdinal;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "Mensuration", function () {
        return Mensuration;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "Staff", function () {
        return Staff;
      });
      /* harmony import */


      var uuid__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! uuid */
      "./node_modules/uuid/index.js");
      /* harmony import */


      var uuid__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(uuid__WEBPACK_IMPORTED_MODULE_0__);
      /* harmony import */


      var _MusicItem__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./MusicItem */
      "./src/app/utils/MusicItem.ts"); // The voice a staff belongs to


      var Voice;

      (function (Voice) {
        Voice["altus"] = "altus";
        Voice["cantus"] = "cantus";
        Voice["contratenor"] = "contratenor";
        Voice["contratenor1"] = "contratenor I";
        Voice["contratenor2"] = "contratenor II";
        Voice["discantus"] = "discantus";
        Voice["duplum"] = "duplum";
        Voice["lowervoice1"] = "lower voice I";
        Voice["lowervoice2"] = "lower voice II";
        Voice["motetus"] = "motetus";
        Voice["quadruplum"] = "quadruplum";
        Voice["quintus"] = "quintus";
        Voice["superius"] = "superius";
        Voice["uppervoice1"] = "upper voice I";
        Voice["uppervoice2"] = "uppervoice II";
        Voice["tenor"] = "tenor";
        Voice["triplum"] = "triplum";
        Voice["bassus"] = "bassus";
      })(Voice || (Voice = {})); // comparator for voices


      function voiceToOrdinal(v) {
        switch (v) {
          case Voice.altus:
            return 8;

          case Voice.cantus:
            return 5;

          case Voice.contratenor:
            return 10;

          case Voice.contratenor1:
            return 10.1;

          case Voice.contratenor2:
            return 10.2;

          case Voice.discantus:
            return 5;

          case Voice.duplum:
            return 3;

          case Voice.lowervoice1:
            return 100;

          case Voice.lowervoice2:
            return 100.1;

          case Voice.motetus:
            return 3;

          case Voice.quadruplum:
            return 1;

          case Voice.quintus:
            return 8;

          case Voice.superius:
            return 5;

          case Voice.uppervoice1:
            return -1.1;

          case Voice.uppervoice2:
            return -1;

          case Voice.tenor:
            return 9;

          case Voice.triplum:
            return 2;

          case Voice.bassus:
            return 20;

          default:
            return 0;
        }
      } // Values for modus, tempus, and prolatio


      var Mensuration;

      (function (Mensuration) {
        Mensuration["Three"] = "3";
        Mensuration["Two"] = "2";
        Mensuration["NA"] = "N/A";
      })(Mensuration || (Mensuration = {}));
      /**
       * Class representing a staff that is selected on a canvas.
       * Should contain all the information about a staff that is available.
       */


      var Staff = /*#__PURE__*/function () {
        function Staff(ulx, uly, lrx, lry, canvas, index, voice, id, musicList) {
          _classCallCheck(this, Staff);

          if (id) {
            this.id = id;
          } else {
            this.id = Object(uuid__WEBPACK_IMPORTED_MODULE_0__["v4"])();
          }

          this.bbox = {
            ulx: ulx,
            uly: uly,
            lrx: lrx,
            lry: lry
          };
          this.canvas = canvas;
          this.index = index;

          if (voice) {
            this.voice = voice;
          } else {
            this.voice = Voice.triplum;
          }

          if (musicList) {
            this.musicList = musicList;
          } else {
            this.musicList = new _MusicItem__WEBPACK_IMPORTED_MODULE_1__["MusicList"]();
          }
        }

        _createClass(Staff, [{
          key: "svg",
          get: function get() {
            var rect = document.createElementNS('http://www.w3.org/2000/svg', 'rect');
            rect.setAttribute('x', this.bbox.ulx.toString());
            rect.setAttribute('y', this.bbox.uly.toString());
            rect.id = this.id;
            rect.setAttribute('width', (this.bbox.lrx - this.bbox.ulx).toString());
            rect.setAttribute('height', (this.bbox.lry - this.bbox.uly).toString());
            rect.classList.add("zoneRect");
            return rect;
          }
        }], [{
          key: "compare",
          value: function compare(staffA, staffB) {
            var indexDiff = staffA.index - staffB.index;

            if (indexDiff !== 0) {
              return indexDiff;
            } else {
              return staffA.bbox.uly - staffB.bbox.uly;
            }
          }
        }]);

        return Staff;
      }();
      /***/

    },

    /***/
    "./src/app/utils/mei.ts":
    /*!******************************!*\
      !*** ./src/app/utils/mei.ts ***!
      \******************************/

    /*! exports provided: NAMESPACE, MEIDocument */

    /***/
    function srcAppUtilsMeiTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "NAMESPACE", function () {
        return NAMESPACE;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MEIDocument", function () {
        return MEIDocument;
      });
      /* harmony import */


      var _part__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./part */
      "./src/app/utils/part.ts");
      /* harmony import */


      var _system__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./system */
      "./src/app/utils/system.ts");
      /* harmony import */


      var _MusicItem__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./MusicItem */
      "./src/app/utils/MusicItem.ts");
      /* harmony import */


      var _definitions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./definitions */
      "./src/app/utils/definitions.ts");

      var NAMESPACE = 'http://www.music-encoding.org/ns/mei';

      var MEIDocument = /*#__PURE__*/function () {
        function MEIDocument(manuscriptIRI) {
          _classCallCheck(this, MEIDocument);

          this.metadata = new Metadata();
          this.metadata.sourceIRI = manuscriptIRI;
          this.parts = [];

          this._createSkeletonMEI();
        }

        _createClass(MEIDocument, [{
          key: "generateXML",
          value: function generateXML() {
            this.parts.sort(_part__WEBPACK_IMPORTED_MODULE_0__["Part"].compare);

            this._createSkeletonMEI();

            var parts = this._meiDoc.querySelector('parts');

            var _iterator7 = _createForOfIteratorHelper(this.parts),
                _step7;

            try {
              for (_iterator7.s(); !(_step7 = _iterator7.n()).done;) {
                var part = _step7.value;

                if (part.systems.length === 0) {
                  continue;
                }

                var partElement = /^[tT]enor/.test(part.voice) ? part.generatePartXML() : part.generatePartXML();
                if (partElement.querySelector('layer').children.length === 0) continue;
                parts.appendChild(partElement);
              }
            } catch (err) {
              _iterator7.e(err);
            } finally {
              _iterator7.f();
            }

            return this._meiDoc;
          }
        }, {
          key: "_createSkeletonMEI",
          value: function _createSkeletonMEI() {
            this._meiDoc = document.implementation.createDocument(NAMESPACE, 'mei', null);
            var mei = this._meiDoc.documentElement;
            mei.setAttribute('meiversion', '4.0.1'); // Create Header

            var head = this._generateHeader(); // TODO Add more to header


            mei.appendChild(head); // Create music skeleton

            var music = this._meiDoc.createElementNS(NAMESPACE, 'music');

            var facsimile = this._meiDoc.createElementNS(NAMESPACE, 'facsimile');

            var body = this._meiDoc.createElementNS(NAMESPACE, 'body');

            var mdiv = this._meiDoc.createElementNS(NAMESPACE, 'mdiv');

            var parts = this._meiDoc.createElementNS(NAMESPACE, 'parts');

            mei.appendChild(music);
            music.appendChild(facsimile);
            music.appendChild(body);
            body.appendChild(mdiv);
            mdiv.appendChild(parts);
          }
        }, {
          key: "_generateHeader",
          value: function _generateHeader() {
            var meiHead = this._meiDoc.createElementNS(NAMESPACE, "meiHead");

            var fileDesc = this._meiDoc.createElementNS(NAMESPACE, "fileDesc");

            meiHead.appendChild(fileDesc);

            var titleStmt = this._meiDoc.createElementNS(NAMESPACE, "titleStmt");

            fileDesc.appendChild(titleStmt);

            var title = this._meiDoc.createElementNS(NAMESPACE, "title");

            title.textContent = this.metadata.shortTitle;
            titleStmt.appendChild(title);

            var respStmt = this._meiDoc.createElementNS(NAMESPACE, "respStmt");

            titleStmt.appendChild(respStmt);

            var _iterator8 = _createForOfIteratorHelper(this.metadata.contributors),
                _step8;

            try {
              for (_iterator8.s(); !(_step8 = _iterator8.n()).done;) {
                var contributor = _step8.value;

                var persName = this._meiDoc.createElementNS(NAMESPACE, "persName");

                persName.textContent = contributor.name;
                persName.setAttribute("role", contributor.type);
                respStmt.appendChild(persName);
              }
            } catch (err) {
              _iterator8.e(err);
            } finally {
              _iterator8.f();
            }

            var pubStmt = this._meiDoc.createElementNS(NAMESPACE, "pubStmt");

            fileDesc.appendChild(pubStmt);

            var sourceDesc = this._meiDoc.createElementNS(NAMESPACE, "sourceDesc");

            fileDesc.appendChild(sourceDesc);

            var source = this._meiDoc.createElementNS(NAMESPACE, "source");

            sourceDesc.appendChild(source);

            var titleStmt2 = this._meiDoc.createElementNS(NAMESPACE, "titleStmt");

            source.appendChild(titleStmt2);

            var title3 = this._meiDoc.createElementNS(NAMESPACE, "title");

            titleStmt2.appendChild(title3);

            var identifier = this._meiDoc.createElementNS(NAMESPACE, "identifier");

            identifier.textContent = this.metadata.siglum;
            title3.appendChild(identifier);

            var itemList = this._meiDoc.createElementNS(NAMESPACE, "itemList");

            source.appendChild(itemList);

            var item = this._meiDoc.createElementNS(NAMESPACE, "item");

            itemList.appendChild(item);
            item.setAttribute("target", this.metadata.sourceIRI);
            item.setAttribute("targettype", "IIIF");

            var workDesc = this._meiDoc.createElementNS(NAMESPACE, "workDesc");

            var work = this._meiDoc.createElementNS(NAMESPACE, "work");

            workDesc.appendChild(work);

            var title2 = this._meiDoc.createElementNS(NAMESPACE, "title");

            title2.textContent = this.metadata.shortTitle;
            work.appendChild(title2);

            var composer = this._meiDoc.createElementNS(NAMESPACE, "composer");

            composer.textContent = this.metadata.composerName;
            work.appendChild(composer);

            var classification = this._meiDoc.createElementNS(NAMESPACE, "classification");

            work.appendChild(classification);

            var termList = this._meiDoc.createElementNS(NAMESPACE, "termList");

            classification.appendChild(termList);

            var term = this._meiDoc.createElementNS(NAMESPACE, "term");

            term.textContent = this.metadata.genre;
            termList.appendChild(term);
            meiHead.appendChild(workDesc);
            return meiHead;
          }
        }, {
          key: "getSystems",
          value: function getSystems() {
            var allSystems = [];

            var _iterator9 = _createForOfIteratorHelper(this.parts),
                _step9;

            try {
              for (_iterator9.s(); !(_step9 = _iterator9.n()).done;) {
                var part = _step9.value;
                allSystems.unshift.apply(allSystems, _toConsumableArray(part.systems));
              }
            } catch (err) {
              _iterator9.e(err);
            } finally {
              _iterator9.f();
            }

            return allSystems;
          }
        }, {
          key: "getSystem",
          value: function getSystem(id) {
            var allSystems = this.getSystems();
            var systemList = allSystems.filter(function (system) {
              return system.id === id;
            });
            return systemList.length > 0 ? systemList[0] : null;
          }
        }, {
          key: "getPart",
          value: function getPart(voice) {
            var partlist = this.parts.filter(function (part) {
              return part.voice === voice;
            });
            return partlist.length > 0 ? partlist[0] : null;
          }
        }, {
          key: "getOrCreatePart",
          value: function getOrCreatePart(voice) {
            if (this.parts.some(function (part) {
              return part.voice === voice;
            })) {
              return this.getPart(voice);
            }

            var part = /^[tT]enor/.test(voice) ? new _part__WEBPACK_IMPORTED_MODULE_0__["Tenor"](this) : new _part__WEBPACK_IMPORTED_MODULE_0__["Part"](this);
            part.voice = voice;
            this.parts.push(part);
            this.parts.sort(_part__WEBPACK_IMPORTED_MODULE_0__["Part"].compare);
            return part;
          }
        }, {
          key: "getPb",
          value: function getPb(index) {
            var pbs = new Set();

            var _iterator10 = _createForOfIteratorHelper(this.parts),
                _step10;

            try {
              for (_iterator10.s(); !(_step10 = _iterator10.n()).done;) {
                var part = _step10.value;
                part.systems.forEach(function (system) {
                  pbs.add(system.pb);
                });
              }
            } catch (err) {
              _iterator10.e(err);
            } finally {
              _iterator10.f();
            }

            var _iterator11 = _createForOfIteratorHelper(pbs.values()),
                _step11;

            try {
              for (_iterator11.s(); !(_step11 = _iterator11.n()).done;) {
                var pb = _step11.value;
                if (pb.index === index) return pb;
              }
            } catch (err) {
              _iterator11.e(err);
            } finally {
              _iterator11.f();
            }

            return null;
          }
        }, {
          key: "notationType",
          get: function get() {
            if (/Ars[_ ](antiqua|nova)/.test(this.notationSubtype)) {
              return "mensural.black";
            } else {
              return "mensural.white";
            }
          }
        }], [{
          key: "fromXML",
          value: function fromXML(source) {
            var _a, _b;

            var doc = source.documentElement;
            var iiif = "";

            try {
              var sourceElements = doc.querySelectorAll("source");

              for (var _i3 = 0, _Array$from = Array.from(sourceElements); _i3 < _Array$from.length; _i3++) {
                var s = _Array$from[_i3];

                for (var _i4 = 0, _Array$from2 = Array.from(s.querySelectorAll("item")); _i4 < _Array$from2.length; _i4++) {
                  var item = _Array$from2[_i4];
                  if (iiif !== "") break;

                  if (item.getAttribute("targettype") === "IIIF") {
                    iiif = item.getAttribute("target");
                    break;
                  }
                }
              }
            } catch (e) {
              console.debug(e);
            }

            var mei = new MEIDocument(iiif); // Try to get metadata

            for (var _i5 = 0, _Array$from3 = Array.from(doc.querySelectorAll("source")); _i5 < _Array$from3.length; _i5++) {
              var _s2 = _Array$from3[_i5];

              if (_s2.querySelector("titleStmt")) {
                var identifier = (_b = (_a = _s2.querySelector("titleStmt")) === null || _a === void 0 ? void 0 : _a.querySelector("title")) === null || _b === void 0 ? void 0 : _b.querySelector("identifier");

                if (identifier) {
                  mei.metadata.siglum = identifier.textContent;
                  break;
                }
              }
            }

            var titleStmt = doc.querySelector("titleStmt");

            if (titleStmt) {
              if (titleStmt.querySelector("title")) {
                mei.metadata.shortTitle = titleStmt.querySelector("title").textContent;
              }

              for (var _i6 = 0, _Array$from4 = Array.from(titleStmt.querySelectorAll("persName")); _i6 < _Array$from4.length; _i6++) {
                var contributor = _Array$from4[_i6];

                switch (contributor.getAttribute("role").toLowerCase()) {
                  case "encoder":
                  case "proofreader":
                  case "editor":
                    var c = {
                      name: contributor.textContent,
                      type: contributor.getAttribute("role").toLowerCase()
                    };
                    mei.metadata.contributors.push(c);
                }
              }
            }

            var workDesc = doc.querySelector("workDesc");

            if (workDesc) {
              var work = doc.querySelector("work");

              if (work) {
                if (work.querySelector("title")) {
                  mei.metadata.shortTitle = work.querySelector("title").textContent;
                }

                if (work.querySelector("composer")) {
                  mei.metadata.composerName = work.querySelector("composer").textContent;
                }

                if (work.querySelector("classification")) {
                  var terms = work.querySelector("classification").querySelector("termList");

                  if (terms) {
                    for (var _i7 = 0, _Array$from5 = Array.from(terms.querySelectorAll("term")); _i7 < _Array$from5.length; _i7++) {
                      var term = _Array$from5[_i7];

                      switch (term.textContent) {
                        case "Motet":
                        case "Song":
                        case "Conductus":
                        case "Mass Movement":
                        case "Plainchant":
                          mei.metadata.genre = term.textContent;
                      }

                      if (mei.metadata.genre !== "") break;
                    }
                  }
                }
              }
            }

            var facsimile = doc.querySelector("facsimile");
            var surfaces = Array.from(facsimile.querySelectorAll("surface"));
            var zones = Array.from(facsimile.querySelectorAll("zone")); // Start processing parts

            var parts = Array.from(doc.querySelectorAll("part"));

            for (var _i8 = 0, _parts = parts; _i8 < _parts.length; _i8++) {
              var part = _parts[_i8];
              var staffDef = part.querySelector("staffDef");
              console.assert(staffDef.hasAttribute("label"));
              var voice = staffDef.getAttribute("label");
              var partObj = /^[tT]enor/.test(voice) ? new _part__WEBPACK_IMPORTED_MODULE_0__["Tenor"](mei, part.getAttribute("xml:id")) : new _part__WEBPACK_IMPORTED_MODULE_0__["Part"](mei, part.getAttribute("xml:id"));
              partObj.voice = _definitions__WEBPACK_IMPORTED_MODULE_3__["Voice"][voice];
              mei.parts.push(partObj);
              var mensur = staffDef.querySelector("mensur");

              if (staffDef.hasAttribute("notationsubtype")) {
                mei.notationSubtype = staffDef.getAttribute("notationsubtype");
              } else {
                mei.notationSubtype = "";
              }

              if (staffDef.hasAttribute("modusminor")) {
                partObj.modus = staffDef.getAttribute("modusminor");
              } else if (mensur && mensur.hasAttribute("modusminor")) {
                partObj.modus = mensur.getAttribute("modusminor");
              }

              if (staffDef.hasAttribute("tempus")) {
                partObj.tempus = staffDef.getAttribute("tempus");
              } else if (mensur && mensur.hasAttribute("tempus")) {
                partObj.tempus = mensur.getAttribute("tempus");
              }

              if (staffDef.hasAttribute("prolatio")) {
                partObj.prolatio = staffDef.getAttribute("prolatio");
              } else if (mensur && mensur.hasAttribute("prolatio")) {
                partObj.prolatio = mensur.getAttribute("prolatio");
              }

              var layer = part.querySelector("layer"); // Handle repeating tenor if tenor

              if (/^[tT]enor/.test(partObj.voice)) {
                var dir = part.querySelector("dir");

                if (dir) {
                  var tenorObj = partObj;
                  tenorObj.repetitions = Number(dir.getAttribute("n")) + 1;
                  var matchResults = dir.getAttribute("plist").match(/^#[-\w\d]+ #([-\w\d]+)$/);

                  if (matchResults.length > 1) {
                    tenorObj.endingId = matchResults[1];
                  }
                }
              } // Handle regular children


              var layerChildren = Array.from(layer.querySelectorAll("pb,sb,clef,note,rest,mensur"));
              var activePb = null;
              var activeSystem = null;

              for (var _i9 = 0, _layerChildren = layerChildren; _i9 < _layerChildren.length; _i9++) {
                var child = _layerChildren[_i9];

                if (child.tagName === "pb") {
                  (function () {
                    // Determine Pb index
                    var setIndex = function setIndex(pb) {
                      fetch(iiif).then(function (response) {
                        return response.json();
                      }).then(function (manifest) {
                        var canvases = manifest["sequences"][0]["canvases"];
                        pb.index = canvases.findIndex(function (canvas) {
                          return canvas["@id"] === pb.canvasIRI;
                        });
                      });
                    };

                    var facs = child.getAttribute("facs").split("#")[1];
                    console.assert(surfaces.some(function (el) {
                      return el.getAttribute("xml:id") === facs;
                    }));
                    var surface = surfaces.find(function (el) {
                      return el.getAttribute("xml:id") === facs;
                    });
                    var graphic = surface.querySelector("graphic");
                    activePb = new _system__WEBPACK_IMPORTED_MODULE_1__["Pb"](graphic.getAttribute("target"), child.getAttribute("xml:id"));
                    setIndex(activePb);
                  })();
                } else if (child.tagName === "sb") {
                  var sb = void 0;

                  if (child.hasAttribute("facs")) {
                    (function () {
                      var facs = child.getAttribute("facs").split("#")[1];
                      console.assert(zones.some(function (el) {
                        return el.getAttribute("xml:id") === facs;
                      }));
                      var zone = zones.find(function (el) {
                        return el.getAttribute("xml:id") === facs;
                      });
                      sb = new _system__WEBPACK_IMPORTED_MODULE_1__["Sb"]({
                        ulx: Number(zone.getAttribute("ulx")),
                        uly: Number(zone.getAttribute("uly")),
                        lrx: Number(zone.getAttribute("lrx")),
                        lry: Number(zone.getAttribute("lry"))
                      }, child.getAttribute("xml:id"));
                    })();
                  } else {
                    sb = new _system__WEBPACK_IMPORTED_MODULE_1__["Sb"]({
                      ulx: 0,
                      uly: 0,
                      lrx: 0,
                      lry: 0
                    }, child.getAttribute("xml:id"));
                  }

                  activeSystem = new _system__WEBPACK_IMPORTED_MODULE_1__["System"]();
                  activeSystem.sb = sb;
                  activeSystem.pb = activePb;
                  partObj.addSystem(activeSystem);
                } else if (child.tagName === "clef") {
                  var clef = _MusicItem__WEBPACK_IMPORTED_MODULE_2__["ClefItem"].parseXML(child);

                  activeSystem.contents.m_list.push(clef);
                } else if (child.tagName === "rest") {
                  var rest = _MusicItem__WEBPACK_IMPORTED_MODULE_2__["RestItem"].parseXML(child);

                  activeSystem.contents.m_list.push(rest);
                } else if (child.tagName === "note") {
                  var note = _MusicItem__WEBPACK_IMPORTED_MODULE_2__["NoteItem"].parseXML(child);

                  activeSystem.contents.m_list.push(note);
                } else if (child.tagName === "mensur") {
                  var _mensur = _MusicItem__WEBPACK_IMPORTED_MODULE_2__["MensurItem"].parseXML(child);

                  activeSystem.contents.m_list.push(_mensur);
                }
              }
            }

            return mei;
          }
        }]);

        return MEIDocument;
      }();

      var Metadata = function Metadata() {
        _classCallCheck(this, Metadata);

        this.contributors = [];
      };
      /***/

    },

    /***/
    "./src/app/utils/part.ts":
    /*!*******************************!*\
      !*** ./src/app/utils/part.ts ***!
      \*******************************/

    /*! exports provided: Part, Tenor */

    /***/
    function srcAppUtilsPartTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "Part", function () {
        return Part;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "Tenor", function () {
        return Tenor;
      });
      /* harmony import */


      var uuid__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! uuid */
      "./node_modules/uuid/index.js");
      /* harmony import */


      var uuid__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(uuid__WEBPACK_IMPORTED_MODULE_0__);
      /* harmony import */


      var _definitions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./definitions */
      "./src/app/utils/definitions.ts");
      /* harmony import */


      var _system__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./system */
      "./src/app/utils/system.ts");
      /* harmony import */


      var _mei__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./mei */
      "./src/app/utils/mei.ts");

      var Part = /*#__PURE__*/function () {
        function Part(doc, id) {
          _classCallCheck(this, Part);

          this.parent = doc;

          if (id) {
            this.id = id;
          } else {
            id = 'm-' + Object(uuid__WEBPACK_IMPORTED_MODULE_0__["v4"])();
          }

          this.systems = [];
          this.modus = _definitions__WEBPACK_IMPORTED_MODULE_1__["Mensuration"].NA;
          this.tempus = _definitions__WEBPACK_IMPORTED_MODULE_1__["Mensuration"].NA;
          this.prolatio = _definitions__WEBPACK_IMPORTED_MODULE_1__["Mensuration"].NA;
        }

        _createClass(Part, [{
          key: "addSystem",
          value: function addSystem(system) {
            system.parent = this;
            this.systems.push(system);
          }
        }, {
          key: "removeSystem",
          value: function removeSystem(id) {
            var matches = this.systems.filter(function (system) {
              return system.id === id;
            });

            if (matches.length > 0) {
              var index = this.systems.indexOf(matches[0]);
              var removed = this.systems.splice(index, 1);
              return removed[0];
            }

            return null;
          }
        }, {
          key: "generatePartXML",
          value: function generatePartXML() {
            var _this11 = this;

            this.systems.sort(_system__WEBPACK_IMPORTED_MODULE_2__["System"].compare);

            var part = this.parent._meiDoc.createElementNS(_mei__WEBPACK_IMPORTED_MODULE_3__["NAMESPACE"], 'part');

            var scoreDef = this._generateScoreDef();

            part.appendChild(scoreDef);
            var staffDef = scoreDef.querySelector('staffDef');
            staffDef.setAttribute('label', this.voice.toString());

            var mensur = this.parent._meiDoc.createElementNS(_mei__WEBPACK_IMPORTED_MODULE_3__["NAMESPACE"], 'mensur');

            staffDef.appendChild(mensur);

            if (this.modus !== _definitions__WEBPACK_IMPORTED_MODULE_1__["Mensuration"].NA) {
              mensur.setAttribute('modusminor', this.modus.toString());
            }

            if (this.tempus !== _definitions__WEBPACK_IMPORTED_MODULE_1__["Mensuration"].NA) {
              mensur.setAttribute('tempus', this.tempus.toString());
            }

            if (this.prolatio !== _definitions__WEBPACK_IMPORTED_MODULE_1__["Mensuration"].NA) {
              mensur.setAttribute('prolatio', this.prolatio.toString());
            }

            var section = this.parent._meiDoc.createElementNS(_mei__WEBPACK_IMPORTED_MODULE_3__["NAMESPACE"], 'section');

            part.appendChild(section);

            var staff = this.parent._meiDoc.createElementNS(_mei__WEBPACK_IMPORTED_MODULE_3__["NAMESPACE"], 'staff');

            staff.setAttribute('n', '1');
            section.appendChild(staff);

            var layer = this.parent._meiDoc.createElementNS(_mei__WEBPACK_IMPORTED_MODULE_3__["NAMESPACE"], 'layer');

            layer.setAttribute('n', '1');
            staff.appendChild(layer);
            var currentPage = null;
            var graphic = null;

            var facsimile = this.parent._meiDoc.querySelector('facsimile');

            var _iterator12 = _createForOfIteratorHelper(this.systems),
                _step12;

            try {
              var _loop = function _loop() {
                var system = _step12.value;
                var contents = system.getContents();
                console.debug(contents);

                if (contents.filter(function (el) {
                  return el.tagName !== 'clef' && el.tagName !== 'rest';
                }).length === 0) {
                  return "continue";
                } // Handle paging


                if (system.pb.canvasIRI !== currentPage) {
                  var pb = _this11.parent._meiDoc.createElementNS(_mei__WEBPACK_IMPORTED_MODULE_3__["NAMESPACE"], 'pb');

                  var temp = Array.from(facsimile.querySelectorAll('graphic')).filter(function (graphic) {
                    return graphic.getAttribute('target') === system.pb.canvasIRI;
                  });

                  if (temp.length > 0) {
                    // Use existing page in mei
                    graphic = temp[0];
                  } else {
                    // Create new page
                    var _surface = _this11.parent._meiDoc.createElementNS(_mei__WEBPACK_IMPORTED_MODULE_3__["NAMESPACE"], 'surface');

                    _surface.setAttribute('xml:id', 'm-' + Object(uuid__WEBPACK_IMPORTED_MODULE_0__["v4"])());

                    graphic = _this11.parent._meiDoc.createElementNS(_mei__WEBPACK_IMPORTED_MODULE_3__["NAMESPACE"], 'graphic');
                    graphic.setAttribute('xml:id', 'm-' + Object(uuid__WEBPACK_IMPORTED_MODULE_0__["v4"])());
                    graphic.setAttribute('target', system.pb.canvasIRI);

                    _surface.appendChild(graphic);

                    facsimile.appendChild(_surface);
                  }

                  var surface = graphic.closest("surface");
                  pb.setAttribute('facs', '#' + surface.getAttribute('xml:id'));
                  pb.setAttribute('xml:id', system.pb.id);
                  currentPage = system.pb.canvasIRI;
                  layer.appendChild(pb);
                } // Handle sb


                var zone = _this11.parent._meiDoc.createElementNS(_mei__WEBPACK_IMPORTED_MODULE_3__["NAMESPACE"], 'zone');

                var zoneId = 'm' + Object(uuid__WEBPACK_IMPORTED_MODULE_0__["v4"])();
                zone.setAttribute('xml:id', zoneId);
                zone.setAttribute('ulx', Math.round(system.sb.zone.ulx).toString());
                zone.setAttribute('uly', Math.round(system.sb.zone.uly).toString());
                zone.setAttribute('lrx', Math.round(system.sb.zone.lrx).toString());
                zone.setAttribute('lry', Math.round(system.sb.zone.lry).toString());
                graphic.appendChild(zone);

                var sb = _this11.parent._meiDoc.createElementNS(_mei__WEBPACK_IMPORTED_MODULE_3__["NAMESPACE"], 'sb');

                sb.setAttribute('facs', '#' + zone.getAttribute('xml:id'));
                sb.setAttribute('xml:id', system.sb.id);
                layer.appendChild(sb); // Add contents. Child here should have correct xml:id including children

                contents.forEach(function (child) {
                  // Remove @color and @marked
                  if (child.hasAttribute('color')) child.removeAttribute('color');
                  if (child.hasAttribute('type')) child.removeAttribute('type');

                  if (child.tagName === 'ligature') {
                    child.removeAttribute('form');
                  }

                  layer.appendChild(child);
                });
              };

              for (_iterator12.s(); !(_step12 = _iterator12.n()).done;) {
                var _ret = _loop();

                if (_ret === "continue") continue;
              }
            } catch (err) {
              _iterator12.e(err);
            } finally {
              _iterator12.f();
            }

            return part;
          }
        }, {
          key: "_generateScoreDef",
          value: function _generateScoreDef() {
            var scoreDef = this.parent._meiDoc.createElementNS(_mei__WEBPACK_IMPORTED_MODULE_3__["NAMESPACE"], 'scoreDef');

            var staffGrp = this.parent._meiDoc.createElementNS(_mei__WEBPACK_IMPORTED_MODULE_3__["NAMESPACE"], 'staffGrp');

            scoreDef.appendChild(staffGrp);

            var staffDef = this.parent._meiDoc.createElementNS(_mei__WEBPACK_IMPORTED_MODULE_3__["NAMESPACE"], 'staffDef');

            staffDef.setAttribute('n', '1');
            staffDef.setAttribute('lines', '5');
            staffDef.setAttribute('notationtype', this.parent.notationType);
            staffDef.setAttribute('notationsubtype', this.parent.notationSubtype);
            staffGrp.appendChild(staffDef);
            return scoreDef;
          }
        }], [{
          key: "compare",
          value: function compare(a, b) {
            return Object(_definitions__WEBPACK_IMPORTED_MODULE_1__["voiceToOrdinal"])(a.voice) - Object(_definitions__WEBPACK_IMPORTED_MODULE_1__["voiceToOrdinal"])(b.voice);
          }
        }]);

        return Part;
      }();

      var Tenor = /*#__PURE__*/function (_Part) {
        _inherits(Tenor, _Part);

        var _super2 = _createSuper(Tenor);

        function Tenor(doc, id) {
          var _this12;

          _classCallCheck(this, Tenor);

          _this12 = _super2.call(this, doc, id);
          _this12.voice = _definitions__WEBPACK_IMPORTED_MODULE_1__["Voice"].tenor;
          _this12.repetitions = 1; // default

          return _this12;
        }

        _createClass(Tenor, [{
          key: "generatePartXML",
          value: function generatePartXML() {
            var _this13 = this;

            var part = _get(_getPrototypeOf(Tenor.prototype), "generatePartXML", this).call(this); // Set repeating tenor if necessary


            if (this.repetitions > 1) {
              /* IMPORTANT NOTE */

              /* The "n" attribute here is used to represent the number of repetitions */

              /* It does NOT mean this is the nth directive of the piece */

              /* This should be replaced with a correct MEI attribute when possible */
              var dir = this.parent._meiDoc.createElementNS(_mei__WEBPACK_IMPORTED_MODULE_3__["NAMESPACE"], 'dir');

              dir.setAttribute('n', (this.repetitions - 1).toString());
              dir.setAttribute('layer', '1');
              console.debug(part);
              console.debug(part.querySelector('note,ligature,rest'));
              var firstNoteId = part.querySelector('note,ligature,rest').getAttribute('xml:id'); // let endingId = (this.endingId !== undefined) ? this.endingId : part.querySelector('layer').lastElementChild.getAttribute('xml:id');
              // Get ending ligature if it's in one

              console.debug(part);
              console.debug(this.endingId);
              var endItem = this.endingId !== undefined ? Array.from(part.querySelectorAll('note')).find(function (el) {
                return el.getAttribute('xml:id') === _this13.endingId;
              }) : part.querySelector('layer').lastElementChild;
              var endingId = endItem.closest('ligature') === null ? endItem.getAttribute('xml:id') : endItem.closest('ligature').getAttribute('xml:id');
              dir.setAttribute('plist', '#' + firstNoteId + ' #' + endingId);
              dir.setAttribute('follows', '#' + endingId);
              var staff = part.querySelector('staff');
              staff.appendChild(dir);
              dir.insertAdjacentHTML('beforebegin', '<!-- The @n attribute on <dir> is used to represent the number of repetitions in a machine readable format. -->');
            }

            return part;
          }
        }]);

        return Tenor;
      }(Part);
      /***/

    },

    /***/
    "./src/app/utils/system.ts":
    /*!*********************************!*\
      !*** ./src/app/utils/system.ts ***!
      \*********************************/

    /*! exports provided: Pb, Sb, System */

    /***/
    function srcAppUtilsSystemTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "Pb", function () {
        return Pb;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "Sb", function () {
        return Sb;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "System", function () {
        return System;
      });
      /* harmony import */


      var _definitions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./definitions */
      "./src/app/utils/definitions.ts");
      /* harmony import */


      var _MusicItem__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./MusicItem */
      "./src/app/utils/MusicItem.ts");
      /* harmony import */


      var uuid__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! uuid */
      "./node_modules/uuid/index.js");
      /* harmony import */


      var uuid__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(uuid__WEBPACK_IMPORTED_MODULE_2__);
      /* harmony import */


      var _verovio__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./verovio */
      "./src/app/utils/verovio.ts");
      /* harmony import */


      var _mei__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./mei */
      "./src/app/utils/mei.ts");

      var Pb = function Pb(iri, id) {
        _classCallCheck(this, Pb);

        this.canvasIRI = iri;

        if (id) {
          this.id = id;
        } else {
          this.id = 'm-' + Object(uuid__WEBPACK_IMPORTED_MODULE_2__["v4"])();
        }
      };

      var Sb = /*#__PURE__*/function () {
        function Sb(zone, id) {
          _classCallCheck(this, Sb);

          if (id) {
            this.id = id;
          } else {
            this.id = 'm-' + Object(uuid__WEBPACK_IMPORTED_MODULE_2__["v4"])();
          }

          this.zone = zone;
        }

        _createClass(Sb, [{
          key: "svg",
          get: function get() {
            var rect = document.createElementNS('http://www.w3.org/2000/svg', 'rect');
            rect.setAttribute('x', this.zone.ulx.toString());
            rect.setAttribute('y', this.zone.uly.toString());
            rect.id = this.id;
            rect.setAttribute('width', (this.zone.lrx - this.zone.ulx).toString());
            rect.setAttribute('height', (this.zone.lry - this.zone.uly).toString());
            rect.classList.add('zoneRect');
            return rect;
          }
        }]);

        return Sb;
      }();

      var System = /*#__PURE__*/function () {
        function System(contents) {
          _classCallCheck(this, System);

          if (contents) {
            this.contents = contents;
          } else {
            this.contents = new _MusicItem__WEBPACK_IMPORTED_MODULE_1__["MusicList"]();
          }
        }

        _createClass(System, [{
          key: "getContents",
          value: function getContents() {
            var whiteMensural = this.parent.parent.notationType === "mensural.white";
            console.debug(this.parent.parent.notationType);

            var rawMei = _verovio__WEBPACK_IMPORTED_MODULE_3__["vrvToolkit"].humdrumToMEI(this.contents.getHumdrumScore({
              white: whiteMensural
            }));

            var parser = new DOMParser();
            var elements = [];
            var humdrumMei = parser.parseFromString(rawMei, 'application/xml');
            var clef = humdrumMei.querySelector('clef');

            if (clef !== null) {
              this._recurseId(clef);

              elements.push(clef);
            }

            var mensur = humdrumMei.querySelector('mensur');

            if (mensur !== null && mensur.closest('layer') === null) {
              this._recurseId(mensur);

              elements.push(mensur);
            }

            var layer = humdrumMei.querySelector('layer');
            console.debug(layer);

            if (layer !== null) {
              for (var _i10 = 0, _Array$from6 = Array.from(layer.children); _i10 < _Array$from6.length; _i10++) {
                var child = _Array$from6[_i10];

                this._recurseId(child);

                if (child.tagName === "note" && child.hasAttribute("dots")) {
                  child.removeAttribute("dots");
                }

                elements.push(child);
              }
            }

            return elements;
          }
        }, {
          key: "_recurseId",
          value: function _recurseId(element) {
            var id = element.getAttribute('xml:id');
            var found = false;

            if (id && /(note|rest|clef|pb|sb|mensur)/.test(element.tagName)) {
              var regexpInfo = id.match(/L(\d+)[\w\d]+$/);

              if (regexpInfo) {
                var line = parseInt(regexpInfo[1]);
                var match = this.contents.m_list.filter(function (el) {
                  return el.m_line === line;
                });

                if (match.length > 0) {
                  found = true;
                  element.setAttribute('xml:id', match[0].m_id);

                  if (match[0].m_type === "mensur") {
                    var mensur = match[0];

                    if (mensur.m_modus !== _definitions__WEBPACK_IMPORTED_MODULE_0__["Mensuration"].NA) {
                      element.setAttribute("modusminor", mensur.m_modus.toString());
                    }

                    if (mensur.m_tempus !== _definitions__WEBPACK_IMPORTED_MODULE_0__["Mensuration"].NA) {
                      element.setAttribute("tempus", mensur.m_tempus.toString());
                    }

                    if (mensur.m_prolatio !== _definitions__WEBPACK_IMPORTED_MODULE_0__["Mensuration"].NA) {
                      element.setAttribute("prolatio", mensur.m_prolatio.toString());
                    }

                    if (element.hasAttribute('sign')) {
                      element.removeAttribute('sign');
                    }

                    if (element.hasAttribute('dot')) {
                      element.removeAttribute('dot');
                    }
                  } else if (match[0].m_type === 'note') {
                    var note = match[0]; // Ensure child is followed by a dot. If not, ad one.

                    if (element.hasAttribute('dots') && (!element.nextElementSibling || element.nextElementSibling.tagName !== 'dot')) {
                      var dot = element.ownerDocument.createElementNS(_mei__WEBPACK_IMPORTED_MODULE_4__["NAMESPACE"], 'dot');
                      element.insertAdjacentElement('afterend', dot);
                      element.removeAttribute('dots');
                    }
                  }
                }
              }
            }

            if (!found) {
              element.setAttribute('xml:id', 'm-' + Object(uuid__WEBPACK_IMPORTED_MODULE_2__["v4"])());
            }

            for (var _i11 = 0, _Array$from7 = Array.from(element.children); _i11 < _Array$from7.length; _i11++) {
              var child = _Array$from7[_i11];

              this._recurseId(child);
            }
          }
        }, {
          key: "id",
          get: function get() {
            return this.sb.id;
          }
        }, {
          key: "voice",
          get: function get() {
            return this.parent.voice;
          },
          set: function set(voice) {
            if (voice !== this.parent.voice) {
              var newPart = this.parent.parent.getOrCreatePart(voice);
              var idx = this.parent.systems.indexOf(this);
              this.parent.systems.splice(idx, 1);
              newPart.addSystem(this);
            }
          }
        }], [{
          key: "compare",
          value: function compare(a, b) {
            var diff = a.pb.index - b.pb.index;
            if (diff !== 0) return diff; // Check for intersection on y-axis. If so, left-most. Else highest.

            var aZone = a.sb.zone;
            var bZone = b.sb.zone;
            var threshold = 0.25;
            var diff1 = aZone.lry - bZone.uly;
            var diff2 = bZone.lry - aZone.uly;

            if (diff1 > 0 && diff2 > 0) {
              var overlap = Math.min(diff1, diff2);
              var avHeight = (aZone.lry - aZone.uly + bZone.lry - bZone.uly) / 2;

              if (overlap > threshold * avHeight) {
                return aZone.ulx - bZone.ulx;
              }
            }

            return a.sb.zone.uly - b.sb.zone.uly;
          }
        }]);

        return System;
      }();
      /***/

    },

    /***/
    "./src/app/utils/verovio.ts":
    /*!**********************************!*\
      !*** ./src/app/utils/verovio.ts ***!
      \**********************************/

    /*! exports provided: vrvToolkit */

    /***/
    function srcAppUtilsVerovioTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "vrvToolkit", function () {
        return vrvToolkit;
      });

      var VrvObj = /*#__PURE__*/function () {
        function VrvObj() {
          _classCallCheck(this, VrvObj);

          this.vrvToolkit = null;
          this.options = null;
          this.options = {
            humType: 0,
            scale: 90,
            spacingNonLinear: 0.35,
            lyricSize: 3,
            breaks: 'none',
            choiceXPathQuery: './corr'
          };
        }

        _createClass(VrvObj, [{
          key: "setup",
          value: function setup() {
            if (!this.vrvToolkit) {
              this.vrvToolkit = new verovio.toolkit();
              this.vrvToolkit.setOptions(this.options);
            }
          }
        }, {
          key: "humdrumToMEI",
          value: function humdrumToMEI(data) {
            this.vrvToolkit.loadData(data);
            return this.vrvToolkit.getMEI({
              pageNo: 0,
              scoreBased: true
            });
          }
        }, {
          key: "humdrumToSVG",
          value: function humdrumToSVG(humdrumData) {
            this.vrvToolkit.loadData(humdrumData);
            var data = this.vrvToolkit.renderToSVG(1);
            var parser = new DOMParser();
            return parser.parseFromString(data, 'image/svg+xml').documentElement;
          }
        }, {
          key: "meiToSVG",
          value: function meiToSVG(meiDoc) {
            var serializer = new XMLSerializer();
            var serializedMei = serializer.serializeToString(meiDoc);
            var parser = new DOMParser();
            this.vrvToolkit.loadData(serializedMei);
            var svgRaw = this.vrvToolkit.renderToSVG(1);
            return parser.parseFromString(svgRaw, 'image/svg+xml').documentElement;
          }
        }]);

        return VrvObj;
      }();

      var vrvToolkit = new VrvObj();
      /***/
    },

    /***/
    "./src/environments/environment.ts":
    /*!*****************************************!*\
      !*** ./src/environments/environment.ts ***!
      \*****************************************/

    /*! exports provided: environment */

    /***/
    function srcEnvironmentsEnvironmentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "environment", function () {
        return environment;
      }); // This file can be replaced during build by using the `fileReplacements` array.
      // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
      // The list of file replacements can be found in `angular.json`.


      var environment = {
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

      /***/
    },

    /***/
    "./src/main.ts":
    /*!*********************!*\
      !*** ./src/main.ts ***!
      \*********************/

    /*! no exports provided */

    /***/
    function srcMainTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./environments/environment */
      "./src/environments/environment.ts");
      /* harmony import */


      var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./app/app.module */
      "./src/app/app.module.ts");
      /* harmony import */


      var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/platform-browser */
      "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");

      if (_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].production) {
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
      }

      init().then(function () {
        _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])["catch"](function (err) {
          return console.error(err);
        });
      });

      function init() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
          return regeneratorRuntime.wrap(function _callee$(_context) {
            while (1) {
              switch (_context.prev = _context.next) {
                case 0:
                  console.debug('check');

                case 1:
                  if (verovioReady) {
                    _context.next = 7;
                    break;
                  }

                  console.debug('wait');
                  _context.next = 5;
                  return new Promise(function (r) {
                    setTimeout(r, 250);
                  });

                case 5:
                  _context.next = 1;
                  break;

                case 7:
                  console.debug('done');

                case 8:
                case "end":
                  return _context.stop();
              }
            }
          }, _callee);
        }));
      }
      /***/

    },

    /***/
    0:
    /*!***************************!*\
      !*** multi ./src/main.ts ***!
      \***************************/

    /*! no static exports found */

    /***/
    function _(module, exports, __webpack_require__) {
      module.exports = __webpack_require__(
      /*! /home/juliette/Documents/Measuring-Polyphony/editor/src/main.ts */
      "./src/main.ts");
      /***/
    }
  }, [[0, "runtime", "vendor"]]]);
})();
//# sourceMappingURL=main-es5.js.map