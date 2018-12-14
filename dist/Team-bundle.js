(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["Team"],{

/***/ "./src/components/TeamMember.jsx":
/*!***************************************!*\
  !*** ./src/components/TeamMember.jsx ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n\n\nvar TeamMember = function TeamMember(props) {\n  var image = props.image,\n      firstname = props.firstname,\n      fullname = props.fullname,\n      role = props.role,\n      bio = props.bio;\n  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: \"col-1-of-3\"\n  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: \"member\"\n  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: \"member__picture\"\n  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"img\", {\n    className: \"member__picture--img\",\n    src: image\n  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: \"member__information\"\n  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: \"member__information--name\"\n  }, fullname), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: \"member__information--role\"\n  }, role))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: \"member__bio\"\n  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"a\", {\n    href: \"#\".concat(firstname, \"Popup\"),\n    className: \"member__bio--link\"\n  }, \"Bio\")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    id: \"\".concat(firstname, \"Popup\"),\n    className: \"\".concat(firstname, \"Popup\")\n  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: \"\".concat(firstname, \"Popup__content\")\n  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: \"\".concat(firstname, \"Popup__right\")\n  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"a\", {\n    href: \"#section-team\",\n    className: \"\".concat(firstname, \"Popup__close\")\n  }, \"\\xD7\"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"figure\", {\n    className: \"\".concat(firstname, \"Popup__right--shape\")\n  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"img\", {\n    className: \"\".concat(firstname, \"Popup__right--img\"),\n    src: image,\n    alt: fullname\n  }))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: \"\".concat(firstname, \"Popup__left\")\n  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"p\", null, bio)))));\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (TeamMember);\n\n//# sourceURL=webpack:///./src/components/TeamMember.jsx?");

/***/ }),

/***/ "./src/components/views/Team.jsx":
/*!***************************************!*\
  !*** ./src/components/views/Team.jsx ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Team; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _Footer_jsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Footer.jsx */ \"./src/components/Footer.jsx\");\n/* harmony import */ var _TeamMember_jsx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../TeamMember.jsx */ \"./src/components/TeamMember.jsx\");\n/* harmony import */ var _ScrollToTop_jsx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../ScrollToTop.jsx */ \"./src/components/ScrollToTop.jsx\");\n/* harmony import */ var _teamInfo__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../teamInfo */ \"./src/teamInfo.js\");\nfunction _typeof(obj) { if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof(obj); }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nfunction _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === \"object\" || typeof call === \"function\")) { return call; } return _assertThisInitialized(self); }\n\nfunction _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function\"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }\n\nfunction _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }\n\nfunction _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return self; }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\n\n\n\n\n\n\nvar Team =\n/*#__PURE__*/\nfunction (_Component) {\n  _inherits(Team, _Component);\n\n  function Team() {\n    var _this;\n\n    _classCallCheck(this, Team);\n\n    _this = _possibleConstructorReturn(this, _getPrototypeOf(Team).call(this));\n\n    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), \"handleCloseBioPopup\", function () {\n      _this.setState({\n        popup: \"close\"\n      });\n\n      console.log(\"hello\");\n    });\n\n    _this.state = {\n      popup: \"close\"\n    };\n    return _this;\n  }\n\n  _createClass(Team, [{\n    key: \"handleBioPopup\",\n    value: function handleBioPopup() {\n      this.setState({\n        popup: \"open\"\n      });\n    }\n  }, {\n    key: \"render\",\n    value: function render() {\n      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_ScrollToTop_jsx__WEBPACK_IMPORTED_MODULE_3__[\"default\"], null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"header\", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n        className: \"team\"\n      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n        className: \"teamQuote\"\n      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n        className: \"primaryHeading\"\n      }, \"We believe everyone deserves a chance to learn\"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"section\", {\n        id: \"section-team\"\n      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n        className: \"teamHeading\"\n      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n        className: \"primaryHeading\"\n      }, \"Team\")), _teamInfo__WEBPACK_IMPORTED_MODULE_4__[\"teamMatrix\"].map(function (row) {\n        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n          className: \"row\"\n        }, row.map(function (col) {\n          return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_TeamMember_jsx__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n            image: col.image,\n            firstname: col.firstname,\n            fullname: col.fullname,\n            role: col.role,\n            bio: col.bio\n          });\n        }));\n      })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Footer_jsx__WEBPACK_IMPORTED_MODULE_1__[\"default\"], null));\n    }\n  }]);\n\n  return Team;\n}(react__WEBPACK_IMPORTED_MODULE_0__[\"Component\"]);\n\n\n\n//# sourceURL=webpack:///./src/components/views/Team.jsx?");

/***/ }),

/***/ "./src/images/ColeMichaels.jpg":
/*!*************************************!*\
  !*** ./src/images/ColeMichaels.jpg ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"src/images/ColeMichaels.jpg\";\n\n//# sourceURL=webpack:///./src/images/ColeMichaels.jpg?");

/***/ }),

/***/ "./src/images/DanielMbogoh.jpg":
/*!*************************************!*\
  !*** ./src/images/DanielMbogoh.jpg ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"src/images/DanielMbogoh.jpg\";\n\n//# sourceURL=webpack:///./src/images/DanielMbogoh.jpg?");

/***/ }),

/***/ "./src/images/drjohn.jpg":
/*!*******************************!*\
  !*** ./src/images/drjohn.jpg ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"src/images/drjohn.jpg\";\n\n//# sourceURL=webpack:///./src/images/drjohn.jpg?");

/***/ }),

/***/ "./src/images/isabellasPicture.jpg":
/*!*****************************************!*\
  !*** ./src/images/isabellasPicture.jpg ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"src/images/isabellasPicture.jpg\";\n\n//# sourceURL=webpack:///./src/images/isabellasPicture.jpg?");

/***/ }),

/***/ "./src/images/jacob.jpg":
/*!******************************!*\
  !*** ./src/images/jacob.jpg ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"src/images/jacob.jpg\";\n\n//# sourceURL=webpack:///./src/images/jacob.jpg?");

/***/ }),

/***/ "./src/images/sam.jpg":
/*!****************************!*\
  !*** ./src/images/sam.jpg ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"src/images/sam.jpg\";\n\n//# sourceURL=webpack:///./src/images/sam.jpg?");

/***/ }),

/***/ "./src/images/vassia.jpg":
/*!*******************************!*\
  !*** ./src/images/vassia.jpg ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"src/images/vassia.jpg\";\n\n//# sourceURL=webpack:///./src/images/vassia.jpg?");

/***/ }),

/***/ "./src/teamInfo.js":
/*!*************************!*\
  !*** ./src/teamInfo.js ***!
  \*************************/
/*! exports provided: teamMatrix */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"teamMatrix\", function() { return teamMatrix; });\n////////////////////////////\n// Put all team info here //\n////////////////////////////\nvar DrJohn = {\n  image: __webpack_require__(/*! ./images/drjohn.jpg */ \"./src/images/drjohn.jpg\"),\n  firstname: \"John\",\n  fullname: \"Dr. John Mucoki\",\n  role: \"Program Manager & Dean of Students\",\n  bio: \"John is a Physician, humanitarian and liaison. He has great\\n  passion in uplifting the vulnerable in some of the most hard\\n  to reach and under-served communities in order for them to\\n  get necessary skills to uplift their lives. Jijenge Academy\\n  came up as a result of the gap that John saw from high\\n  school graduates in the orphanages struggling to get college\\n  education or even jobs having no employability skills. He\\n  coordinates the program to ensure it runs smoothly, reaches\\n  out to potential local donors to support the students with\\n  basic needs, and scouts for internship opportunities as well\\n  as apprenticeship for the high school graduates.\"\n};\nvar Vassiliki = {\n  image: __webpack_require__(/*! ./images/vassia.jpg */ \"./src/images/vassia.jpg\"),\n  firstname: \"Vassiliki\",\n  fullname: \"Vassiliki Daskalakis\",\n  role: \"CEO\",\n  bio: \"My name is Vas, I'm a former JPM investment banker who moved\\n  from NY to Nairobi to raise Series A rounds for startups &\\n  SMEs across East Africa with I-Dev International. Jijenge\\n  Academy developed organically from our work with a local\\n  orphanage to stop graduated high school students from\\n  returning back to the slums from which they were rescued.\\n  I've been on the ground in Nairobi for the past year,\\n  training students in employability and positioning Jijenge\\n  as a pipeline partner to feed our candidates to high growth\\n  Kenyan Tech Companies.\"\n};\nvar Jacob = {\n  image: __webpack_require__(/*! ./images/jacob.jpg */ \"./src/images/jacob.jpg\"),\n  firstname: \"Jacob\",\n  fullname: \"Jacob Reisch\",\n  role: \"Board Member\",\n  bio: \"Jake Reisch is a Forbes 30 Under 30 entrepreneur and CEO of\\n  Eversound, a specialized audio technology for the 75+. Jake\\n  started building startups during his Junior year at Cornell\\n  University when he founded Party Headphones, an audio\\n  provider for the special events industry. Jake was selected\\n  as a Young Global Shaper by the World Economic Forum, was\\n  the 2016 SBA Young Entrepreneur of the Year for New England\\n  and is a member of Cornell University\\u2019s\\n  Entrepreneurship@Cornell Advisory Council.\"\n};\nvar Isabella = {\n  image: __webpack_require__(/*! ./images/isabellasPicture.jpg */ \"./src/images/isabellasPicture.jpg\"),\n  firstname: \"Isabella\",\n  fullname: \"Isabella Beltran\",\n  role: \"Software Engineer\",\n  bio: \"I\\u2019m a full-stack software engineer helping impactful\\n  organizations reach their highest potential.\"\n};\nvar Sam = {\n  image: __webpack_require__(/*! ./images/sam.jpg */ \"./src/images/sam.jpg\"),\n  firstname: \"Sam\",\n  fullname: \"Sam Langer\",\n  role: \"Board Member\",\n  bio: \"Sam Langer graduated from Cornell University with a degree\\n  in Psychology and Religious studies. Sam teaches meditation\\n  and is involved in organizing events in the New York area\\n  based around improving well being. Sam believes in a world\\n  where every human has the opportunity to live their highest\\n  dream.\"\n};\nvar Daniel = {\n  image: __webpack_require__(/*! ./images/DanielMbogoh.jpg */ \"./src/images/DanielMbogoh.jpg\"),\n  firstname: \"Daniel\",\n  fullname: \"Daniel Mbogoh\",\n  role: \"Director of Communications\",\n  bio: \"Daniel Mbogoh is a community development professional with\\n  exceptional leadership skills and 10+ years of experience in\\n  implementing innovative community development programs. His\\n  commitment to a career in community development work has\\n  connected him to his passion\\u2014creating positive and\\n  meaningful change in people's lives. Currently, he is\\n  working as the programmes manager for Village Voices\\u2014a\\n  community-based organization working to empower rural women\\n  in Kenya.Village Voices programmes are focused on providing\\n  women with the knowledge, skills, tools and resources\\n  necessary to not only actively participate in, but grow to\\n  lead community development projects. Daniel is also the\\n  founder and director of FilmCity International, a nonprofit\\n  film organization dedicated to telling the stories of\\n  charitable and not-for-profit organizations, advocacy and\\n  educational groups, youth and women\\u2019s projects and other\\n  non-profit organizations in Kenya through film.\"\n};\nvar Cole = {\n  image: __webpack_require__(/*! ./images/ColeMichaels.jpg */ \"./src/images/ColeMichaels.jpg\"),\n  firstname: \"Cole\",\n  fullname: \"Cole Michaels\",\n  role: \"Full Stack Engineer\",\n  bio: \"I began programming in Java while caregiving. As my clients \\n  slept I taught myself Java fundamentals which lead to me going to \\n  and completing the Hack Reactor bootcamp in Los Angeles.\"\n}; //////////////////////////////////////////////\n// Keep each row to a max of 3 team members //\n//////////////////////////////////////////////\n\nvar teamMatrix = [[DrJohn, Vassiliki, Jacob], [Isabella, Sam, Daniel], [Cole]];\n\n//# sourceURL=webpack:///./src/teamInfo.js?");

/***/ })

}]);