(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["VisitAfrica"],{

/***/ "./src/components/VisitAfrica.jsx":
/*!****************************************!*\
  !*** ./src/components/VisitAfrica.jsx ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("/* WEBPACK VAR INJECTION */(function(module) {\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _getPrototypeOf = __webpack_require__(/*! babel-runtime/core-js/object/get-prototype-of */ \"./node_modules/babel-runtime/core-js/object/get-prototype-of.js\");\n\nvar _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);\n\nvar _classCallCheck2 = __webpack_require__(/*! babel-runtime/helpers/classCallCheck */ \"./node_modules/babel-runtime/helpers/classCallCheck.js\");\n\nvar _classCallCheck3 = _interopRequireDefault(_classCallCheck2);\n\nvar _createClass2 = __webpack_require__(/*! babel-runtime/helpers/createClass */ \"./node_modules/babel-runtime/helpers/createClass.js\");\n\nvar _createClass3 = _interopRequireDefault(_createClass2);\n\nvar _possibleConstructorReturn2 = __webpack_require__(/*! babel-runtime/helpers/possibleConstructorReturn */ \"./node_modules/babel-runtime/helpers/possibleConstructorReturn.js\");\n\nvar _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);\n\nvar _inherits2 = __webpack_require__(/*! babel-runtime/helpers/inherits */ \"./node_modules/babel-runtime/helpers/inherits.js\");\n\nvar _inherits3 = _interopRequireDefault(_inherits2);\n\nvar _react = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _axios = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n\nvar _axios2 = _interopRequireDefault(_axios);\n\nvar _NavigationBar = __webpack_require__(/*! ./NavigationBar.jsx */ \"./src/components/NavigationBar.jsx\");\n\nvar _NavigationBar2 = _interopRequireDefault(_NavigationBar);\n\nvar _Footer = __webpack_require__(/*! ./Footer.jsx */ \"./src/components/Footer.jsx\");\n\nvar _Footer2 = _interopRequireDefault(_Footer);\n\nvar _visit = __webpack_require__(/*! ../images/visit.jpg */ \"./src/images/visit.jpg\");\n\nvar _visit2 = _interopRequireDefault(_visit);\n\nvar _visit3 = __webpack_require__(/*! ../images/visit1.jpg */ \"./src/images/visit1.jpg\");\n\nvar _visit4 = _interopRequireDefault(_visit3);\n\nvar _visit5 = __webpack_require__(/*! ../images/visit2.jpg */ \"./src/images/visit2.jpg\");\n\nvar _visit6 = _interopRequireDefault(_visit5);\n\nvar _visit7 = __webpack_require__(/*! ../images/visit3.jpg */ \"./src/images/visit3.jpg\");\n\nvar _visit8 = _interopRequireDefault(_visit7);\n\nvar _visit9 = __webpack_require__(/*! ../images/visit4.jpg */ \"./src/images/visit4.jpg\");\n\nvar _visit10 = _interopRequireDefault(_visit9);\n\nvar _visit11 = __webpack_require__(/*! ../images/visit5.jpg */ \"./src/images/visit5.jpg\");\n\nvar _visit12 = _interopRequireDefault(_visit11);\n\nvar _visit13 = __webpack_require__(/*! ../images/visit6.jpg */ \"./src/images/visit6.jpg\");\n\nvar _visit14 = _interopRequireDefault(_visit13);\n\nvar _africa = __webpack_require__(/*! ../images/africa1.jpg */ \"./src/images/africa1.jpg\");\n\nvar _africa2 = _interopRequireDefault(_africa);\n\nvar _africa3 = __webpack_require__(/*! ../images/africa2.jpg */ \"./src/images/africa2.jpg\");\n\nvar _africa4 = _interopRequireDefault(_africa3);\n\nvar _africa5 = __webpack_require__(/*! ../images/africa4.jpg */ \"./src/images/africa4.jpg\");\n\nvar _africa6 = _interopRequireDefault(_africa5);\n\nvar _africa7 = __webpack_require__(/*! ../images/africa6.jpg */ \"./src/images/africa6.jpg\");\n\nvar _africa8 = _interopRequireDefault(_africa7);\n\nvar _africa9 = __webpack_require__(/*! ../images/africa8.jpg */ \"./src/images/africa8.jpg\");\n\nvar _africa10 = _interopRequireDefault(_africa9);\n\nvar _africa11 = __webpack_require__(/*! ../images/africa9.jpg */ \"./src/images/africa9.jpg\");\n\nvar _africa12 = _interopRequireDefault(_africa11);\n\nvar _ScrollToTop = __webpack_require__(/*! ./ScrollToTop.jsx */ \"./src/components/ScrollToTop.jsx\");\n\nvar _ScrollToTop2 = _interopRequireDefault(_ScrollToTop);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\n(function () {\n  var enterModule = __webpack_require__(/*! react-hot-loader */ \"./node_modules/react-hot-loader/index.js\").enterModule;\n\n  enterModule && enterModule(module);\n})();\n\nvar VisitAfrica = function (_Component) {\n  (0, _inherits3.default)(VisitAfrica, _Component);\n\n  function VisitAfrica(props) {\n    (0, _classCallCheck3.default)(this, VisitAfrica);\n\n    var _this = (0, _possibleConstructorReturn3.default)(this, (VisitAfrica.__proto__ || (0, _getPrototypeOf2.default)(VisitAfrica)).call(this, props));\n\n    _this.state = {\n      meet: [_visit2.default, _visit4.default, _visit6.default, _visit8.default, _visit10.default, _visit12.default, _visit14.default],\n      meetCurrent: 0,\n      africa: [_africa2.default, _africa4.default, _africa6.default, _africa8.default, _africa10.default, _africa12.default],\n      expAfrica: 0\n    };\n    return _this;\n  }\n\n  (0, _createClass3.default)(VisitAfrica, [{\n    key: \"handleNextMeetArrow\",\n    value: function handleNextMeetArrow() {\n      if (this.state.meetCurrent === this.state.meet.length - 1) {\n        this.setState({\n          meetCurrent: 0\n        });\n      } else {\n        this.setState({\n          meetCurrent: this.state.meetCurrent + 1\n        });\n      }\n    }\n  }, {\n    key: \"handlePrevMeetArrow\",\n    value: function handlePrevMeetArrow() {\n      if (this.state.meetCurrent === 0) {\n        this.setState({\n          meetCurrent: this.state.meet.length - 1\n        });\n      } else {\n        this.setState({\n          meetCurrent: this.state.meetCurrent - 1\n        });\n      }\n    }\n  }, {\n    key: \"handleNextAfricaArrow\",\n    value: function handleNextAfricaArrow() {\n      if (this.state.expAfrica === this.state.africa.length - 1) {\n        this.setState({\n          expAfrica: 0\n        });\n      } else {\n        this.setState({\n          expAfrica: this.state.expAfrica + 1\n        });\n      }\n    }\n  }, {\n    key: \"handlePrevAfricaArrow\",\n    value: function handlePrevAfricaArrow() {\n      if (this.state.expAfrica === 0) {\n        this.setState({\n          expAfrica: this.state.africa.length - 1\n        });\n      } else {\n        this.setState({\n          expAfrica: this.state.expAfrica - 1\n        });\n      }\n    }\n  }, {\n    key: \"render\",\n    value: function render() {\n      return _react2.default.createElement(\n        \"div\",\n        null,\n        _react2.default.createElement(\n          \"div\",\n          null,\n          _react2.default.createElement(_ScrollToTop2.default, null),\n          _react2.default.createElement(_NavigationBar2.default, null)\n        ),\n        _react2.default.createElement(\n          \"main\",\n          null,\n          _react2.default.createElement(\n            \"div\",\n            { className: \"visitHeader\" },\n            _react2.default.createElement(\n              \"div\",\n              { className: \"visitBanner\" },\n              _react2.default.createElement(\n                \"div\",\n                { className: \"primaryHeading\" },\n                \"An inspiration vacation\"\n              ),\n              _react2.default.createElement(\n                \"div\",\n                { className: \"secondaryHeading\" },\n                \"Book a life changing visit to the children at Jijenge @ Nairobi.\"\n              ),\n              _react2.default.createElement(\n                \"div\",\n                { className: \"secondaryHeading\" },\n                \"Meet the children yourself while experiencing the world's best Safari tours and beach vacations!\"\n              ),\n              _react2.default.createElement(\n                \"div\",\n                { className: \"visitBanner__container\" },\n                _react2.default.createElement(\n                  \"div\",\n                  null,\n                  _react2.default.createElement(\n                    \"a\",\n                    {\n                      href: \"http://eepurl.com/dH3L6b\",\n                      className: \"visitBanner__container--btn\"\n                    },\n                    \"Tailor a trip to Kenya\"\n                  )\n                )\n              )\n            )\n          )\n        ),\n        _react2.default.createElement(\n          \"section\",\n          { className: \"section-slides\" },\n          _react2.default.createElement(\n            \"div\",\n            { className: \"section-slides__heading\" },\n            _react2.default.createElement(\n              \"div\",\n              { className: \"primaryHeading\" },\n              \"Meet the children\"\n            )\n          ),\n          _react2.default.createElement(\n            \"div\",\n            { className: \"slideshow-container\" },\n            _react2.default.createElement(\n              \"div\",\n              { className: \"mySlides fade\" },\n              _react2.default.createElement(\"img\", {\n                className: \"image\",\n                src: this.state.meet[this.state.meetCurrent]\n              })\n            ),\n            _react2.default.createElement(\n              \"div\",\n              { className: \"prev\", onClick: this.handlePrevMeetArrow.bind(this) },\n              \"\\u276E\"\n            ),\n            _react2.default.createElement(\n              \"div\",\n              { className: \"next\", onClick: this.handleNextMeetArrow.bind(this) },\n              \"\\u276F\"\n            )\n          )\n        ),\n        _react2.default.createElement(\n          \"section\",\n          { className: \"section-slides\" },\n          _react2.default.createElement(\n            \"div\",\n            { className: \"section-slides__heading\" },\n            _react2.default.createElement(\n              \"div\",\n              { className: \"primaryHeading\" },\n              \"Experience Africa\"\n            )\n          ),\n          _react2.default.createElement(\n            \"div\",\n            { className: \"slideshow-container\" },\n            _react2.default.createElement(\n              \"div\",\n              { className: \"mySlides fade\" },\n              _react2.default.createElement(\"img\", {\n                className: \"image\",\n                src: this.state.africa[this.state.expAfrica]\n              })\n            ),\n            _react2.default.createElement(\n              \"div\",\n              {\n                className: \"prev\",\n                onClick: this.handlePrevAfricaArrow.bind(this)\n              },\n              \"\\u276E\"\n            ),\n            _react2.default.createElement(\n              \"div\",\n              {\n                className: \"next\",\n                onClick: this.handleNextAfricaArrow.bind(this)\n              },\n              \"\\u276F\"\n            )\n          )\n        ),\n        _react2.default.createElement(\n          \"section\",\n          { className: \"section-experience\" },\n          _react2.default.createElement(\n            \"div\",\n            { className: \"section-experience__heading\" },\n            _react2.default.createElement(\n              \"div\",\n              { className: \"primaryHeading\" },\n              \"Experience the trip of a lifetime\"\n            )\n          ),\n          _react2.default.createElement(\n            \"div\",\n            { className: \"section-experience__container\" },\n            _react2.default.createElement(\n              \"div\",\n              { className: \"section-experience__container--form\" },\n              _react2.default.createElement(\n                \"a\",\n                {\n                  className: \"section-experience__container--btn\",\n                  href: \"http://eepurl.com/dH3L6b\"\n                },\n                \"Tailor a trip to Kenya\"\n              )\n            )\n          )\n        ),\n        _react2.default.createElement(\n          \"footer\",\n          null,\n          _react2.default.createElement(_Footer2.default, null)\n        )\n      );\n    }\n  }, {\n    key: \"__reactstandin__regenerateByEval\",\n    // @ts-ignore\n    value: function __reactstandin__regenerateByEval(key, code) {\n      // @ts-ignore\n      this[key] = eval(code);\n    }\n  }]);\n  return VisitAfrica;\n}(_react.Component);\n\nvar _default = VisitAfrica;\nexports.default = _default;\n;\n\n(function () {\n  var reactHotLoader = __webpack_require__(/*! react-hot-loader */ \"./node_modules/react-hot-loader/index.js\").default;\n\n  var leaveModule = __webpack_require__(/*! react-hot-loader */ \"./node_modules/react-hot-loader/index.js\").leaveModule;\n\n  if (!reactHotLoader) {\n    return;\n  }\n\n  reactHotLoader.register(VisitAfrica, \"VisitAfrica\", \"/Users/isabellabeltran/Code/super-duper-sniffle/src/components/VisitAfrica.jsx\");\n  reactHotLoader.register(_default, \"default\", \"/Users/isabellabeltran/Code/super-duper-sniffle/src/components/VisitAfrica.jsx\");\n  leaveModule(module);\n})();\n\n;\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/module.js */ \"./node_modules/webpack/buildin/module.js\")(module)))\n\n//# sourceURL=webpack:///./src/components/VisitAfrica.jsx?");

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