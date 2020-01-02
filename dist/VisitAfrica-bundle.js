(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["VisitAfrica"],{

/***/ "./node_modules/react-obfuscate/dist/obfuscate.js":
/*!********************************************************!*\
  !*** ./node_modules/react-obfuscate/dist/obfuscate.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _react = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n\nvar _react2 = _interopRequireDefault(_react);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar combineHeaders = function combineHeaders() {\n  var params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};\n\n  return Object.keys(params).map(function (key) {\n    return key + '=' + encodeURIComponent(params[key]);\n  }).join('&');\n};\n\nvar createContactLink = function createContactLink(tel, sms, facetime, email, headers) {\n  var link = void 0;\n  if (email) {\n    link = 'mailto:' + email;\n    if (headers) {\n      link += '?' + combineHeaders(headers);\n    }\n  } else if (tel) {\n    link = 'tel:' + tel;\n  } else if (sms) {\n    link = 'sms:' + sms;\n  } else if (facetime) {\n    link = 'facetime:' + facetime;\n  }\n  return link;\n};\n\nvar Obfuscate = function (_Component) {\n  _inherits(Obfuscate, _Component);\n\n  function Obfuscate(props) {\n    _classCallCheck(this, Obfuscate);\n\n    var _this = _possibleConstructorReturn(this, (Obfuscate.__proto__ || Object.getPrototypeOf(Obfuscate)).call(this, props));\n\n    _this.state = {\n      humanInteraction: false\n    };\n    return _this;\n  }\n\n  _createClass(Obfuscate, [{\n    key: 'render',\n    value: function render() {\n      return this.props.obfuscate === false ? this.renderLink() : this.renderObfuscatedLink();\n    }\n  }, {\n    key: 'renderLink',\n    value: function renderLink() {\n      var _props = this.props,\n          tel = _props.tel,\n          sms = _props.sms,\n          facetime = _props.facetime,\n          email = _props.email,\n          obfuscate = _props.obfuscate,\n          headers = _props.headers,\n          children = _props.children,\n          others = _objectWithoutProperties(_props, ['tel', 'sms', 'facetime', 'email', 'obfuscate', 'headers', 'children']);\n\n      return _react2.default.createElement(\n        'a',\n        _extends({\n          href: createContactLink(tel, sms, facetime, email, headers)\n        }, others),\n        children || tel || sms || facetime || email\n      );\n    }\n  }, {\n    key: 'reverse',\n    value: function reverse(s) {\n      return s.split('').reverse().join('');\n    }\n  }, {\n    key: 'renderObfuscatedLink',\n    value: function renderObfuscatedLink() {\n      var _this2 = this;\n\n      var _props2 = this.props,\n          tel = _props2.tel,\n          sms = _props2.sms,\n          facetime = _props2.facetime,\n          email = _props2.email,\n          obfuscate = _props2.obfuscate,\n          headers = _props2.headers,\n          children = _props2.children,\n          style = _props2.style,\n          linkText = _props2.linkText,\n          others = _objectWithoutProperties(_props2, ['tel', 'sms', 'facetime', 'email', 'obfuscate', 'headers', 'children', 'style', 'linkText']);\n\n      var obsStyle = this.state.humanInteraction === true || children ? _extends({}, style || {}, {\n        unicodeBidi: 'bidi-override',\n        display: 'inline-block',\n        direction: 'ltr'\n      }) : _extends({}, style || {}, {\n        unicodeBidi: 'bidi-override',\n        display: 'inline-block',\n        direction: 'rtl'\n      });\n\n      var link = function link(state) {\n        return _this2.state.humanInteraction === true ? children || tel || sms || facetime || email : children || _this2.reverse(tel || sms || facetime || email).replace('(', ')').replace(')', '(');\n      };\n\n      return _react2.default.createElement(\n        'a',\n        _extends({\n          onClick: this.handleClick.bind(this),\n          onFocus: this.handleCopiability.bind(this),\n          onMouseOver: this.handleCopiability.bind(this),\n          onContextMenu: this.handleCopiability.bind(this),\n          href: linkText || 'obfuscated'\n        }, others, {\n          style: obsStyle\n        }),\n        link()\n      );\n    }\n  }, {\n    key: 'handleClick',\n    value: function handleClick(event) {\n      event.preventDefault();\n      var _props3 = this.props,\n          tel = _props3.tel,\n          sms = _props3.sms,\n          facetime = _props3.facetime,\n          email = _props3.email,\n          headers = _props3.headers;\n\n      window.location.href = createContactLink(tel, sms, facetime, email, headers);\n    }\n  }, {\n    key: 'handleCopiability',\n    value: function handleCopiability() {\n      this.setState(function (state) {\n        return _extends({}, state, {\n          humanInteraction: true\n        });\n      });\n    }\n  }]);\n\n  return Obfuscate;\n}(_react.Component);\n\nexports.default = Obfuscate;\n\n//# sourceURL=webpack:///./node_modules/react-obfuscate/dist/obfuscate.js?");

/***/ }),

/***/ "./src/components/Footer/EmailPopup.jsx":
/*!**********************************************!*\
  !*** ./src/components/Footer/EmailPopup.jsx ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @fortawesome/react-fontawesome */ \"./node_modules/@fortawesome/react-fontawesome/index.es.js\");\n/* harmony import */ var react_obfuscate__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-obfuscate */ \"./node_modules/react-obfuscate/dist/obfuscate.js\");\n/* harmony import */ var react_obfuscate__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_obfuscate__WEBPACK_IMPORTED_MODULE_2__);\n/////////////////////////////////////////////////////////////////\n// EmailPopup rendered to the Footer component across the site //\n/////////////////////////////////////////////////////////////////\n\n\n\n\nvar EmailPopup = function EmailPopup() {\n  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: \"email\"\n  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"a\", {\n    className: \"email__icon\"\n  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_1__[\"FontAwesomeIcon\"], {\n    icon: \"envelope\",\n    size: \"3x\",\n    color: \"white\"\n  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: \"email__address\"\n  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_obfuscate__WEBPACK_IMPORTED_MODULE_2___default.a, {\n    email: \"jijengeacademy@gmail.com\",\n    headers: {\n      subject: \"Information Request\"\n    }\n  })));\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (EmailPopup);\n\n//# sourceURL=webpack:///./src/components/Footer/EmailPopup.jsx?");

/***/ }),

/***/ "./src/components/Footer/Footer.jsx":
/*!******************************************!*\
  !*** ./src/components/Footer/Footer.jsx ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Footer; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _EmailPopup_jsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./EmailPopup.jsx */ \"./src/components/Footer/EmailPopup.jsx\");\nfunction _typeof(obj) { if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof(obj); }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nfunction _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === \"object\" || typeof call === \"function\")) { return call; } return _assertThisInitialized(self); }\n\nfunction _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return self; }\n\nfunction _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function\"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }\n\nfunction _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }\n\n////////////////////////////////////\n// Footer rendered upon Home page //\n////////////////////////////////////\n\n\n\nvar Footer =\n/*#__PURE__*/\nfunction (_Component) {\n  _inherits(Footer, _Component);\n\n  function Footer(props) {\n    _classCallCheck(this, Footer);\n\n    return _possibleConstructorReturn(this, _getPrototypeOf(Footer).call(this, props));\n  }\n\n  _createClass(Footer, [{\n    key: \"render\",\n    value: function render() {\n      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"footer\", {\n        className: \"footer\"\n      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"h3\", {\n        className: \"footer__logo\"\n      }, \"Jijenge\"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n        className: \"footer__container\"\n      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"section\", {\n        className: \"footer__container--application\"\n      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", null, \"Jijenge is a 501(c)(3)\"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", null, \"not for profit\"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", null, \"organization\")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"section\", {\n        className: \"footer__container--social\"\n      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n        className: \"footer__container--social-email\"\n      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_EmailPopup_jsx__WEBPACK_IMPORTED_MODULE_1__[\"default\"], null))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"section\", {\n        className: \"footer__container--form\"\n      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", null, \"115 Kingston St. Floor 6\"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", null, \"Boston, MA 02111\"))));\n    }\n  }]);\n\n  return Footer;\n}(react__WEBPACK_IMPORTED_MODULE_0__[\"Component\"]);\n\n\n\n//# sourceURL=webpack:///./src/components/Footer/Footer.jsx?");

/***/ }),

/***/ "./src/components/ScrollToTop.jsx":
/*!****************************************!*\
  !*** ./src/components/ScrollToTop.jsx ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return ScrollToTopOnMount; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\nfunction _typeof(obj) { if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof(obj); }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nfunction _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === \"object\" || typeof call === \"function\")) { return call; } return _assertThisInitialized(self); }\n\nfunction _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return self; }\n\nfunction _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function\"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }\n\nfunction _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }\n\n//////////////////////////////////////////////////////////////////////////////\n// When this is place on a pages DOM, the scroll will be set to top of page //\n//////////////////////////////////////////////////////////////////////////////\n\n\nvar ScrollToTopOnMount =\n/*#__PURE__*/\nfunction (_Component) {\n  _inherits(ScrollToTopOnMount, _Component);\n\n  function ScrollToTopOnMount() {\n    _classCallCheck(this, ScrollToTopOnMount);\n\n    return _possibleConstructorReturn(this, _getPrototypeOf(ScrollToTopOnMount).apply(this, arguments));\n  }\n\n  _createClass(ScrollToTopOnMount, [{\n    key: \"componentDidMount\",\n    value: function componentDidMount() {\n      window.scrollTo(0, 0);\n    }\n  }, {\n    key: \"render\",\n    value: function render() {\n      return null;\n    }\n  }]);\n\n  return ScrollToTopOnMount;\n}(react__WEBPACK_IMPORTED_MODULE_0__[\"Component\"]);\n\n\n\n//# sourceURL=webpack:///./src/components/ScrollToTop.jsx?");

/***/ }),

/***/ "./src/components/views/VisitAfrica.jsx":
/*!**********************************************!*\
  !*** ./src/components/views/VisitAfrica.jsx ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return VisitAfrica; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _Footer_Footer_jsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Footer/Footer.jsx */ \"./src/components/Footer/Footer.jsx\");\n/* harmony import */ var _images_visit_jpg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../images/visit.jpg */ \"./src/images/visit.jpg\");\n/* harmony import */ var _images_visit_jpg__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_images_visit_jpg__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _images_visit1_jpg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../images/visit1.jpg */ \"./src/images/visit1.jpg\");\n/* harmony import */ var _images_visit1_jpg__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_images_visit1_jpg__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _images_visit2_jpg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../images/visit2.jpg */ \"./src/images/visit2.jpg\");\n/* harmony import */ var _images_visit2_jpg__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_images_visit2_jpg__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _images_visit3_jpg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../images/visit3.jpg */ \"./src/images/visit3.jpg\");\n/* harmony import */ var _images_visit3_jpg__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_images_visit3_jpg__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _images_visit4_jpg__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../images/visit4.jpg */ \"./src/images/visit4.jpg\");\n/* harmony import */ var _images_visit4_jpg__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_images_visit4_jpg__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var _images_visit5_jpg__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../images/visit5.jpg */ \"./src/images/visit5.jpg\");\n/* harmony import */ var _images_visit5_jpg__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_images_visit5_jpg__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var _images_visit6_jpg__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../images/visit6.jpg */ \"./src/images/visit6.jpg\");\n/* harmony import */ var _images_visit6_jpg__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_images_visit6_jpg__WEBPACK_IMPORTED_MODULE_8__);\n/* harmony import */ var _images_africa1_jpg__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../images/africa1.jpg */ \"./src/images/africa1.jpg\");\n/* harmony import */ var _images_africa1_jpg__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_images_africa1_jpg__WEBPACK_IMPORTED_MODULE_9__);\n/* harmony import */ var _images_africa2_jpg__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../images/africa2.jpg */ \"./src/images/africa2.jpg\");\n/* harmony import */ var _images_africa2_jpg__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_images_africa2_jpg__WEBPACK_IMPORTED_MODULE_10__);\n/* harmony import */ var _images_africa4_jpg__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../images/africa4.jpg */ \"./src/images/africa4.jpg\");\n/* harmony import */ var _images_africa4_jpg__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_images_africa4_jpg__WEBPACK_IMPORTED_MODULE_11__);\n/* harmony import */ var _images_africa6_jpg__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../images/africa6.jpg */ \"./src/images/africa6.jpg\");\n/* harmony import */ var _images_africa6_jpg__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_images_africa6_jpg__WEBPACK_IMPORTED_MODULE_12__);\n/* harmony import */ var _images_africa8_jpg__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../images/africa8.jpg */ \"./src/images/africa8.jpg\");\n/* harmony import */ var _images_africa8_jpg__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(_images_africa8_jpg__WEBPACK_IMPORTED_MODULE_13__);\n/* harmony import */ var _images_africa9_jpg__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../images/africa9.jpg */ \"./src/images/africa9.jpg\");\n/* harmony import */ var _images_africa9_jpg__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(_images_africa9_jpg__WEBPACK_IMPORTED_MODULE_14__);\n/* harmony import */ var _ScrollToTop_jsx__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../ScrollToTop.jsx */ \"./src/components/ScrollToTop.jsx\");\nfunction _typeof(obj) { if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof(obj); }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nfunction _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === \"object\" || typeof call === \"function\")) { return call; } return _assertThisInitialized(self); }\n\nfunction _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return self; }\n\nfunction _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function\"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }\n\nfunction _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }\n\n//////////////////////////////////////////////////////////////////////\n// Visit Africa page, links go to Mail Chimp - Mail Chimp MUST WORK //\n//////////////////////////////////////////////////////////////////////\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\nvar VisitAfrica =\n/*#__PURE__*/\nfunction (_Component) {\n  _inherits(VisitAfrica, _Component);\n\n  function VisitAfrica(props) {\n    var _this;\n\n    _classCallCheck(this, VisitAfrica);\n\n    _this = _possibleConstructorReturn(this, _getPrototypeOf(VisitAfrica).call(this, props));\n    _this.state = {\n      meet: [_images_visit_jpg__WEBPACK_IMPORTED_MODULE_2___default.a, _images_visit1_jpg__WEBPACK_IMPORTED_MODULE_3___default.a, _images_visit2_jpg__WEBPACK_IMPORTED_MODULE_4___default.a, _images_visit3_jpg__WEBPACK_IMPORTED_MODULE_5___default.a, _images_visit4_jpg__WEBPACK_IMPORTED_MODULE_6___default.a, _images_visit5_jpg__WEBPACK_IMPORTED_MODULE_7___default.a, _images_visit6_jpg__WEBPACK_IMPORTED_MODULE_8___default.a],\n      meetCurrent: 0,\n      africa: [_images_africa1_jpg__WEBPACK_IMPORTED_MODULE_9___default.a, _images_africa2_jpg__WEBPACK_IMPORTED_MODULE_10___default.a, _images_africa4_jpg__WEBPACK_IMPORTED_MODULE_11___default.a, _images_africa6_jpg__WEBPACK_IMPORTED_MODULE_12___default.a, _images_africa8_jpg__WEBPACK_IMPORTED_MODULE_13___default.a, _images_africa9_jpg__WEBPACK_IMPORTED_MODULE_14___default.a],\n      expAfrica: 0\n    };\n    return _this;\n  }\n\n  _createClass(VisitAfrica, [{\n    key: \"handleNextMeetArrow\",\n    value: function handleNextMeetArrow() {\n      if (this.state.meetCurrent === this.state.meet.length - 1) {\n        this.setState({\n          meetCurrent: 0\n        });\n      } else {\n        this.setState({\n          meetCurrent: this.state.meetCurrent + 1\n        });\n      }\n    }\n  }, {\n    key: \"handlePrevMeetArrow\",\n    value: function handlePrevMeetArrow() {\n      if (this.state.meetCurrent === 0) {\n        this.setState({\n          meetCurrent: this.state.meet.length - 1\n        });\n      } else {\n        this.setState({\n          meetCurrent: this.state.meetCurrent - 1\n        });\n      }\n    }\n  }, {\n    key: \"handleNextAfricaArrow\",\n    value: function handleNextAfricaArrow() {\n      if (this.state.expAfrica === this.state.africa.length - 1) {\n        this.setState({\n          expAfrica: 0\n        });\n      } else {\n        this.setState({\n          expAfrica: this.state.expAfrica + 1\n        });\n      }\n    }\n  }, {\n    key: \"handlePrevAfricaArrow\",\n    value: function handlePrevAfricaArrow() {\n      if (this.state.expAfrica === 0) {\n        this.setState({\n          expAfrica: this.state.africa.length - 1\n        });\n      } else {\n        this.setState({\n          expAfrica: this.state.expAfrica - 1\n        });\n      }\n    }\n  }, {\n    key: \"render\",\n    value: function render() {\n      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"main\", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_ScrollToTop_jsx__WEBPACK_IMPORTED_MODULE_15__[\"default\"], null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"section\", {\n        className: \"visitHeader\"\n      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n        className: \"visitBanner\"\n      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"h3\", {\n        className: \"primaryHeading\"\n      }, \"An inspiration vacation\"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"h3\", {\n        className: \"secondaryHeading\"\n      }, \"Book a life changing visit to the children at Jijenge @ Nairobi.\"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"h3\", {\n        className: \"secondaryHeading\"\n      }, \"Meet the children yourself while experiencing the world's best Safari tours and beach vacations!\"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n        className: \"visitBanner__container\"\n      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"a\", {\n        href: \"http://eepurl.com/dH3L6b\",\n        className: \"visitBanner__container--btn\"\n      }, \"Tailor a trip to Kenya\")))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"section\", {\n        className: \"section-slides\"\n      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n        className: \"section-slides__heading\"\n      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"h3\", {\n        className: \"primaryHeading\"\n      }, \"Meet the children\")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"section\", {\n        className: \"slideshow-container\"\n      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n        className: \"mySlides fade\"\n      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"img\", {\n        className: \"image\",\n        src: this.state.meet[this.state.meetCurrent]\n      })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n        className: \"prev\",\n        onClick: this.handlePrevMeetArrow.bind(this)\n      }, \"\\u276E\"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n        className: \"next\",\n        onClick: this.handleNextMeetArrow.bind(this)\n      }, \"\\u276F\"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"section\", {\n        className: \"section-slides\"\n      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n        className: \"section-slides__heading\"\n      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"h3\", {\n        className: \"primaryHeading\"\n      }, \"Experience Africa\")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"section\", {\n        className: \"slideshow-container\"\n      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n        className: \"mySlides fade\"\n      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"img\", {\n        className: \"image\",\n        src: this.state.africa[this.state.expAfrica]\n      })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n        className: \"prev\",\n        onClick: this.handlePrevAfricaArrow.bind(this)\n      }, \"\\u276E\"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n        className: \"next\",\n        onClick: this.handleNextAfricaArrow.bind(this)\n      }, \"\\u276F\"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"section\", {\n        className: \"section-experience\"\n      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n        className: \"section-experience__heading\"\n      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"h3\", {\n        className: \"primaryHeading\"\n      }, \"Experience the trip of a lifetime\")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"section\", {\n        className: \"section-experience__container\"\n      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n        className: \"section-experience__container--form\"\n      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"a\", {\n        className: \"section-experience__container--btn\",\n        href: \"http://eepurl.com/dH3L6b\"\n      }, \"Tailor a trip to Kenya\")))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Footer_Footer_jsx__WEBPACK_IMPORTED_MODULE_1__[\"default\"], null));\n    }\n  }]);\n\n  return VisitAfrica;\n}(react__WEBPACK_IMPORTED_MODULE_0__[\"Component\"]);\n\n\n\n//# sourceURL=webpack:///./src/components/views/VisitAfrica.jsx?");

/***/ }),

/***/ "./src/images/africa1.jpg":
/*!********************************!*\
  !*** ./src/images/africa1.jpg ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"src/images/africa1.jpg\";\n\n//# sourceURL=webpack:///./src/images/africa1.jpg?");

/***/ }),

/***/ "./src/images/africa2.jpg":
/*!********************************!*\
  !*** ./src/images/africa2.jpg ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"src/images/africa2.jpg\";\n\n//# sourceURL=webpack:///./src/images/africa2.jpg?");

/***/ }),

/***/ "./src/images/africa4.jpg":
/*!********************************!*\
  !*** ./src/images/africa4.jpg ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"src/images/africa4.jpg\";\n\n//# sourceURL=webpack:///./src/images/africa4.jpg?");

/***/ }),

/***/ "./src/images/africa6.jpg":
/*!********************************!*\
  !*** ./src/images/africa6.jpg ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"src/images/africa6.jpg\";\n\n//# sourceURL=webpack:///./src/images/africa6.jpg?");

/***/ }),

/***/ "./src/images/africa8.jpg":
/*!********************************!*\
  !*** ./src/images/africa8.jpg ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"src/images/africa8.jpg\";\n\n//# sourceURL=webpack:///./src/images/africa8.jpg?");

/***/ }),

/***/ "./src/images/africa9.jpg":
/*!********************************!*\
  !*** ./src/images/africa9.jpg ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"src/images/africa9.jpg\";\n\n//# sourceURL=webpack:///./src/images/africa9.jpg?");

/***/ }),

/***/ "./src/images/visit.jpg":
/*!******************************!*\
  !*** ./src/images/visit.jpg ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"src/images/visit.jpg\";\n\n//# sourceURL=webpack:///./src/images/visit.jpg?");

/***/ }),

/***/ "./src/images/visit1.jpg":
/*!*******************************!*\
  !*** ./src/images/visit1.jpg ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"src/images/visit1.jpg\";\n\n//# sourceURL=webpack:///./src/images/visit1.jpg?");

/***/ }),

/***/ "./src/images/visit2.jpg":
/*!*******************************!*\
  !*** ./src/images/visit2.jpg ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"src/images/visit2.jpg\";\n\n//# sourceURL=webpack:///./src/images/visit2.jpg?");

/***/ }),

/***/ "./src/images/visit3.jpg":
/*!*******************************!*\
  !*** ./src/images/visit3.jpg ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"src/images/visit3.jpg\";\n\n//# sourceURL=webpack:///./src/images/visit3.jpg?");

/***/ }),

/***/ "./src/images/visit4.jpg":
/*!*******************************!*\
  !*** ./src/images/visit4.jpg ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"src/images/visit4.jpg\";\n\n//# sourceURL=webpack:///./src/images/visit4.jpg?");

/***/ }),

/***/ "./src/images/visit5.jpg":
/*!*******************************!*\
  !*** ./src/images/visit5.jpg ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"src/images/visit5.jpg\";\n\n//# sourceURL=webpack:///./src/images/visit5.jpg?");

/***/ }),

/***/ "./src/images/visit6.jpg":
/*!*******************************!*\
  !*** ./src/images/visit6.jpg ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"src/images/visit6.jpg\";\n\n//# sourceURL=webpack:///./src/images/visit6.jpg?");

/***/ })

}]);