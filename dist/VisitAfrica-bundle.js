(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["VisitAfrica"],{

/***/ "./src/components/VisitAfrica.jsx":
/*!****************************************!*\
  !*** ./src/components/VisitAfrica.jsx ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return VisitAfrica; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _NavigationBar_jsx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./NavigationBar.jsx */ \"./src/components/NavigationBar.jsx\");\n/* harmony import */ var _Footer_jsx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Footer.jsx */ \"./src/components/Footer.jsx\");\n/* harmony import */ var _images_visit_jpg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../images/visit.jpg */ \"./src/images/visit.jpg\");\n/* harmony import */ var _images_visit_jpg__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_images_visit_jpg__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _images_visit1_jpg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../images/visit1.jpg */ \"./src/images/visit1.jpg\");\n/* harmony import */ var _images_visit1_jpg__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_images_visit1_jpg__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _images_visit2_jpg__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../images/visit2.jpg */ \"./src/images/visit2.jpg\");\n/* harmony import */ var _images_visit2_jpg__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_images_visit2_jpg__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var _images_visit3_jpg__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../images/visit3.jpg */ \"./src/images/visit3.jpg\");\n/* harmony import */ var _images_visit3_jpg__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_images_visit3_jpg__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var _images_visit4_jpg__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../images/visit4.jpg */ \"./src/images/visit4.jpg\");\n/* harmony import */ var _images_visit4_jpg__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_images_visit4_jpg__WEBPACK_IMPORTED_MODULE_8__);\n/* harmony import */ var _images_visit5_jpg__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../images/visit5.jpg */ \"./src/images/visit5.jpg\");\n/* harmony import */ var _images_visit5_jpg__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_images_visit5_jpg__WEBPACK_IMPORTED_MODULE_9__);\n/* harmony import */ var _images_visit6_jpg__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../images/visit6.jpg */ \"./src/images/visit6.jpg\");\n/* harmony import */ var _images_visit6_jpg__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_images_visit6_jpg__WEBPACK_IMPORTED_MODULE_10__);\n/* harmony import */ var _images_africa1_jpg__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../images/africa1.jpg */ \"./src/images/africa1.jpg\");\n/* harmony import */ var _images_africa1_jpg__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_images_africa1_jpg__WEBPACK_IMPORTED_MODULE_11__);\n/* harmony import */ var _images_africa2_jpg__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../images/africa2.jpg */ \"./src/images/africa2.jpg\");\n/* harmony import */ var _images_africa2_jpg__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_images_africa2_jpg__WEBPACK_IMPORTED_MODULE_12__);\n/* harmony import */ var _images_africa4_jpg__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../images/africa4.jpg */ \"./src/images/africa4.jpg\");\n/* harmony import */ var _images_africa4_jpg__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(_images_africa4_jpg__WEBPACK_IMPORTED_MODULE_13__);\n/* harmony import */ var _images_africa6_jpg__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../images/africa6.jpg */ \"./src/images/africa6.jpg\");\n/* harmony import */ var _images_africa6_jpg__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(_images_africa6_jpg__WEBPACK_IMPORTED_MODULE_14__);\n/* harmony import */ var _images_africa8_jpg__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../images/africa8.jpg */ \"./src/images/africa8.jpg\");\n/* harmony import */ var _images_africa8_jpg__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(_images_africa8_jpg__WEBPACK_IMPORTED_MODULE_15__);\n/* harmony import */ var _images_africa9_jpg__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../images/africa9.jpg */ \"./src/images/africa9.jpg\");\n/* harmony import */ var _images_africa9_jpg__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(_images_africa9_jpg__WEBPACK_IMPORTED_MODULE_16__);\n/* harmony import */ var _ScrollToTop_jsx__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./ScrollToTop.jsx */ \"./src/components/ScrollToTop.jsx\");\nfunction _typeof(obj) { if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof(obj); }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nfunction _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === \"object\" || typeof call === \"function\")) { return call; } return _assertThisInitialized(self); }\n\nfunction _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return self; }\n\nfunction _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function\"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }\n\nfunction _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\nvar VisitAfrica =\n/*#__PURE__*/\nfunction (_Component) {\n  _inherits(VisitAfrica, _Component);\n\n  function VisitAfrica(props) {\n    var _this;\n\n    _classCallCheck(this, VisitAfrica);\n\n    _this = _possibleConstructorReturn(this, _getPrototypeOf(VisitAfrica).call(this, props));\n    _this.state = {\n      meet: [_images_visit_jpg__WEBPACK_IMPORTED_MODULE_4___default.a, _images_visit1_jpg__WEBPACK_IMPORTED_MODULE_5___default.a, _images_visit2_jpg__WEBPACK_IMPORTED_MODULE_6___default.a, _images_visit3_jpg__WEBPACK_IMPORTED_MODULE_7___default.a, _images_visit4_jpg__WEBPACK_IMPORTED_MODULE_8___default.a, _images_visit5_jpg__WEBPACK_IMPORTED_MODULE_9___default.a, _images_visit6_jpg__WEBPACK_IMPORTED_MODULE_10___default.a],\n      meetCurrent: 0,\n      africa: [_images_africa1_jpg__WEBPACK_IMPORTED_MODULE_11___default.a, _images_africa2_jpg__WEBPACK_IMPORTED_MODULE_12___default.a, _images_africa4_jpg__WEBPACK_IMPORTED_MODULE_13___default.a, _images_africa6_jpg__WEBPACK_IMPORTED_MODULE_14___default.a, _images_africa8_jpg__WEBPACK_IMPORTED_MODULE_15___default.a, _images_africa9_jpg__WEBPACK_IMPORTED_MODULE_16___default.a],\n      expAfrica: 0\n    };\n    return _this;\n  }\n\n  _createClass(VisitAfrica, [{\n    key: \"handleNextMeetArrow\",\n    value: function handleNextMeetArrow() {\n      if (this.state.meetCurrent === this.state.meet.length - 1) {\n        this.setState({\n          meetCurrent: 0\n        });\n      } else {\n        this.setState({\n          meetCurrent: this.state.meetCurrent + 1\n        });\n      }\n    }\n  }, {\n    key: \"handlePrevMeetArrow\",\n    value: function handlePrevMeetArrow() {\n      if (this.state.meetCurrent === 0) {\n        this.setState({\n          meetCurrent: this.state.meet.length - 1\n        });\n      } else {\n        this.setState({\n          meetCurrent: this.state.meetCurrent - 1\n        });\n      }\n    }\n  }, {\n    key: \"handleNextAfricaArrow\",\n    value: function handleNextAfricaArrow() {\n      if (this.state.expAfrica === this.state.africa.length - 1) {\n        this.setState({\n          expAfrica: 0\n        });\n      } else {\n        this.setState({\n          expAfrica: this.state.expAfrica + 1\n        });\n      }\n    }\n  }, {\n    key: \"handlePrevAfricaArrow\",\n    value: function handlePrevAfricaArrow() {\n      if (this.state.expAfrica === 0) {\n        this.setState({\n          expAfrica: this.state.africa.length - 1\n        });\n      } else {\n        this.setState({\n          expAfrica: this.state.expAfrica - 1\n        });\n      }\n    }\n  }, {\n    key: \"render\",\n    value: function render() {\n      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_ScrollToTop_jsx__WEBPACK_IMPORTED_MODULE_17__[\"default\"], null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_NavigationBar_jsx__WEBPACK_IMPORTED_MODULE_2__[\"default\"], null)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"main\", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n        className: \"visitHeader\"\n      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n        className: \"visitBanner\"\n      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n        className: \"primaryHeading\"\n      }, \"An inspiration vacation\"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n        className: \"secondaryHeading\"\n      }, \"Book a life changing visit to the children at Jijenge @ Nairobi.\"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n        className: \"secondaryHeading\"\n      }, \"Meet the children yourself while experiencing the world's best Safari tours and beach vacations!\"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n        className: \"visitBanner__container\"\n      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"a\", {\n        href: \"http://eepurl.com/dH3L6b\",\n        className: \"visitBanner__container--btn\"\n      }, \"Tailor a trip to Kenya\")))))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"section\", {\n        className: \"section-slides\"\n      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n        className: \"section-slides__heading\"\n      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n        className: \"primaryHeading\"\n      }, \"Meet the children\")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n        className: \"slideshow-container\"\n      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n        className: \"mySlides fade\"\n      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"img\", {\n        className: \"image\",\n        src: this.state.meet[this.state.meetCurrent]\n      })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n        className: \"prev\",\n        onClick: this.handlePrevMeetArrow.bind(this)\n      }, \"\\u276E\"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n        className: \"next\",\n        onClick: this.handleNextMeetArrow.bind(this)\n      }, \"\\u276F\"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"section\", {\n        className: \"section-slides\"\n      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n        className: \"section-slides__heading\"\n      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n        className: \"primaryHeading\"\n      }, \"Experience Africa\")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n        className: \"slideshow-container\"\n      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n        className: \"mySlides fade\"\n      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"img\", {\n        className: \"image\",\n        src: this.state.africa[this.state.expAfrica]\n      })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n        className: \"prev\",\n        onClick: this.handlePrevAfricaArrow.bind(this)\n      }, \"\\u276E\"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n        className: \"next\",\n        onClick: this.handleNextAfricaArrow.bind(this)\n      }, \"\\u276F\"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"section\", {\n        className: \"section-experience\"\n      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n        className: \"section-experience__heading\"\n      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n        className: \"primaryHeading\"\n      }, \"Experience the trip of a lifetime\")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n        className: \"section-experience__container\"\n      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n        className: \"section-experience__container--form\"\n      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"a\", {\n        className: \"section-experience__container--btn\",\n        href: \"http://eepurl.com/dH3L6b\"\n      }, \"Tailor a trip to Kenya\")))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"footer\", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Footer_jsx__WEBPACK_IMPORTED_MODULE_3__[\"default\"], null)));\n    }\n  }]);\n\n  return VisitAfrica;\n}(react__WEBPACK_IMPORTED_MODULE_0__[\"Component\"]);\n\n\n\n//# sourceURL=webpack:///./src/components/VisitAfrica.jsx?");

/***/ }),

/***/ "./src/images/africa1.jpg":
/*!********************************!*\
  !*** ./src/images/africa1.jpg ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"images/africa1.jpg\";\n\n//# sourceURL=webpack:///./src/images/africa1.jpg?");

/***/ }),

/***/ "./src/images/africa2.jpg":
/*!********************************!*\
  !*** ./src/images/africa2.jpg ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"images/africa2.jpg\";\n\n//# sourceURL=webpack:///./src/images/africa2.jpg?");

/***/ }),

/***/ "./src/images/africa4.jpg":
/*!********************************!*\
  !*** ./src/images/africa4.jpg ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"images/africa4.jpg\";\n\n//# sourceURL=webpack:///./src/images/africa4.jpg?");

/***/ }),

/***/ "./src/images/africa6.jpg":
/*!********************************!*\
  !*** ./src/images/africa6.jpg ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"images/africa6.jpg\";\n\n//# sourceURL=webpack:///./src/images/africa6.jpg?");

/***/ }),

/***/ "./src/images/africa8.jpg":
/*!********************************!*\
  !*** ./src/images/africa8.jpg ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"images/africa8.jpg\";\n\n//# sourceURL=webpack:///./src/images/africa8.jpg?");

/***/ }),

/***/ "./src/images/africa9.jpg":
/*!********************************!*\
  !*** ./src/images/africa9.jpg ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"images/africa9.jpg\";\n\n//# sourceURL=webpack:///./src/images/africa9.jpg?");

/***/ }),

/***/ "./src/images/visit.jpg":
/*!******************************!*\
  !*** ./src/images/visit.jpg ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"images/visit.jpg\";\n\n//# sourceURL=webpack:///./src/images/visit.jpg?");

/***/ }),

/***/ "./src/images/visit1.jpg":
/*!*******************************!*\
  !*** ./src/images/visit1.jpg ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"images/visit1.jpg\";\n\n//# sourceURL=webpack:///./src/images/visit1.jpg?");

/***/ }),

/***/ "./src/images/visit2.jpg":
/*!*******************************!*\
  !*** ./src/images/visit2.jpg ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"images/visit2.jpg\";\n\n//# sourceURL=webpack:///./src/images/visit2.jpg?");

/***/ }),

/***/ "./src/images/visit3.jpg":
/*!*******************************!*\
  !*** ./src/images/visit3.jpg ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"images/visit3.jpg\";\n\n//# sourceURL=webpack:///./src/images/visit3.jpg?");

/***/ }),

/***/ "./src/images/visit4.jpg":
/*!*******************************!*\
  !*** ./src/images/visit4.jpg ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"images/visit4.jpg\";\n\n//# sourceURL=webpack:///./src/images/visit4.jpg?");

/***/ }),

/***/ "./src/images/visit5.jpg":
/*!*******************************!*\
  !*** ./src/images/visit5.jpg ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"images/visit5.jpg\";\n\n//# sourceURL=webpack:///./src/images/visit5.jpg?");

/***/ }),

/***/ "./src/images/visit6.jpg":
/*!*******************************!*\
  !*** ./src/images/visit6.jpg ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"images/visit6.jpg\";\n\n//# sourceURL=webpack:///./src/images/visit6.jpg?");

/***/ })

}]);