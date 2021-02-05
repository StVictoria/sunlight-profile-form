module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/CustomDialog.js":
/*!************************************!*\
  !*** ./components/CustomDialog.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return CustomDialog; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_core_Dialog__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core/Dialog */ "@material-ui/core/Dialog");
/* harmony import */ var _material_ui_core_Dialog__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Dialog__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _styles_CustomDialog_module_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../styles/CustomDialog.module.scss */ "./styles/CustomDialog.module.scss");
/* harmony import */ var _styles_CustomDialog_module_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styles_CustomDialog_module_scss__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _common_CustomButton__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./common/CustomButton */ "./components/common/CustomButton.js");
var _jsxFileName = "C:\\Users\\vstepnova\\Desktop\\test sunlight\\components\\CustomDialog.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



function CustomDialog({
  isOpen,
  onClose
}) {
  return __jsx(_material_ui_core_Dialog__WEBPACK_IMPORTED_MODULE_1___default.a, {
    open: isOpen,
    className: _styles_CustomDialog_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.Dialog,
    onClose: onClose,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 5
    }
  }, __jsx("h4", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 7
    }
  }, "\u0414\u0430\u043D\u043D\u044B\u0435 \u0443\u0441\u043F\u0435\u0448\u043D\u043E \u0441\u043E\u0445\u0440\u0430\u043D\u0435\u043D\u044B"), __jsx(_common_CustomButton__WEBPACK_IMPORTED_MODULE_3__["default"], {
    name: "\u0417\u0430\u043A\u0440\u044B\u0442\u044C",
    onClick: onClose,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 7
    }
  }));
}

/***/ }),

/***/ "./components/ErrorMessage.js":
/*!************************************!*\
  !*** ./components/ErrorMessage.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ErrorMessage; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_core_FormHelperText__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core/FormHelperText */ "@material-ui/core/FormHelperText");
/* harmony import */ var _material_ui_core_FormHelperText__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_FormHelperText__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _utils_validate__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/validate */ "./utils/validate.js");
var _jsxFileName = "C:\\Users\\vstepnova\\Desktop\\test sunlight\\components\\ErrorMessage.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



function ErrorMessage({
  meta,
  noErrorMessage
}) {
  if (noErrorMessage) {
    return null;
  }

  return Object(_utils_validate__WEBPACK_IMPORTED_MODULE_2__["isFieldError"])(meta) && meta.error !== _utils_validate__WEBPACK_IMPORTED_MODULE_2__["ValidateMessage"].REQUIRED && __jsx("div", {
    className: "ErrorMessage",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 7
    }
  }, __jsx(_material_ui_core_FormHelperText__WEBPACK_IMPORTED_MODULE_1___default.a, {
    error: true,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 9
    }
  }, meta.error));
}

/***/ }),

/***/ "./components/Header.js":
/*!******************************!*\
  !*** ./components/Header.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Header; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _styles_Header_module_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../styles/Header.module.scss */ "./styles/Header.module.scss");
/* harmony import */ var _styles_Header_module_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_Header_module_scss__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "C:\\Users\\vstepnova\\Desktop\\test sunlight\\components\\Header.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function Header() {
  return __jsx("section", {
    className: _styles_Header_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.Header,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5,
      columnNumber: 5
    }
  }, __jsx("img", {
    src: "/notification.png",
    className: _styles_Header_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.Notifications,
    alt: "notifications",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6,
      columnNumber: 7
    }
  }), __jsx("div", {
    className: _styles_Header_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.Divider,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 7
    }
  }), __jsx("section", {
    className: _styles_Header_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.HeaderUserInfo,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 7
    }
  }, __jsx("div", {
    className: `${_styles_Header_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.UserIcon} UserIcon`,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 9
    }
  }), __jsx("p", {
    className: _styles_Header_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.UserName,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 9
    }
  }, "\u0418\u0432\u0430\u043D\u043E\u0432\u0430 \u0410.")));
}

/***/ }),

/***/ "./components/Profile.js":
/*!*******************************!*\
  !*** ./components/Profile.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Profile; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core/Paper */ "@material-ui/core/Paper");
/* harmony import */ var _material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/Button */ "@material-ui/core/Button");
/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/IconButton */ "@material-ui/core/IconButton");
/* harmony import */ var _material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _material_ui_icons_Close__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/icons/Close */ "@material-ui/icons/Close");
/* harmony import */ var _material_ui_icons_Close__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Close__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _material_ui_icons_KeyboardArrowDown__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/icons/KeyboardArrowDown */ "@material-ui/icons/KeyboardArrowDown");
/* harmony import */ var _material_ui_icons_KeyboardArrowDown__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_KeyboardArrowDown__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _styles_Profile_module_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../styles/Profile.module.scss */ "./styles/Profile.module.scss");
/* harmony import */ var _styles_Profile_module_scss__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_styles_Profile_module_scss__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _UserForm_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./UserForm.js */ "./components/UserForm.js");
var _jsxFileName = "C:\\Users\\vstepnova\\Desktop\\test sunlight\\components\\Profile.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;







 //TODO: оптимизация

function useWindowSize() {
  // Initialize state with undefined width/height so server and client renders match
  // Learn more here: https://joshwcomeau.com/react/the-perils-of-rehydration/
  const {
    0: windowSize,
    1: setWindowSize
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])({
    width: undefined,
    height: undefined
  });
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    // only execute all the code below in client side
    if (false) {}
  }, []); // Empty array ensures that effect is only run on mount

  return windowSize;
}

function Profile({
  isFormOpen,
  onFormClose,
  handleDialogOpen
}) {
  const size = useWindowSize();
  console.log(size);
  return __jsx("section", {
    className: _styles_Profile_module_scss__WEBPACK_IMPORTED_MODULE_6___default.a.Profile,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50,
      columnNumber: 5
    }
  }, __jsx(_material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_1___default.a, {
    className: _styles_Profile_module_scss__WEBPACK_IMPORTED_MODULE_6___default.a.UserInfoMuiPaper,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51,
      columnNumber: 7
    }
  }, __jsx("section", {
    className: _styles_Profile_module_scss__WEBPACK_IMPORTED_MODULE_6___default.a.MainInfo,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: `${_styles_Profile_module_scss__WEBPACK_IMPORTED_MODULE_6___default.a.ProfileUserIcon} UserIcon`,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53,
      columnNumber: 11
    }
  }), __jsx("p", {
    className: _styles_Profile_module_scss__WEBPACK_IMPORTED_MODULE_6___default.a.UserName,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54,
      columnNumber: 11
    }
  }, size.width < 969 ? "Иванова А. М." : "Иванова Анна Михайловна")), size.width < 959 ? __jsx(_material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_3___default.a, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60,
      columnNumber: 11
    }
  }, __jsx(_material_ui_icons_Close__WEBPACK_IMPORTED_MODULE_4___default.a, {
    color: "primary",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61,
      columnNumber: 13
    }
  })) : __jsx(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_2___default.a, {
    className: _styles_Profile_module_scss__WEBPACK_IMPORTED_MODULE_6___default.a.CloseButton,
    onClick: onFormClose,
    color: "primary",
    endIcon: isFormOpen ? __jsx(_material_ui_icons_Close__WEBPACK_IMPORTED_MODULE_4___default.a, {
      className: _styles_Profile_module_scss__WEBPACK_IMPORTED_MODULE_6___default.a.CloseIcon,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 70,
        columnNumber: 17
      }
    }) : __jsx(_material_ui_icons_KeyboardArrowDown__WEBPACK_IMPORTED_MODULE_5___default.a, {
      className: _styles_Profile_module_scss__WEBPACK_IMPORTED_MODULE_6___default.a.CloseIcon,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 72,
        columnNumber: 17
      }
    }),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64,
      columnNumber: 11
    }
  }, isFormOpen ? "Закрыть" : "Открыть")), __jsx(_UserForm_js__WEBPACK_IMPORTED_MODULE_7__["default"], {
    handleDialogOpen: handleDialogOpen,
    isFormOpen: isFormOpen,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 80,
      columnNumber: 7
    }
  }));
}

/***/ }),

/***/ "./components/UserForm.js":
/*!********************************!*\
  !*** ./components/UserForm.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return UserForm; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/Paper */ "@material-ui/core/Paper");
/* harmony import */ var _material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_final_form__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-final-form */ "react-final-form");
/* harmony import */ var react_final_form__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_final_form__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/TextField */ "@material-ui/core/TextField");
/* harmony import */ var _material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _styles_UserForm_module_scss__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../styles/UserForm.module.scss */ "./styles/UserForm.module.scss");
/* harmony import */ var _styles_UserForm_module_scss__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_styles_UserForm_module_scss__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _utils_validate__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../utils/validate */ "./utils/validate.js");
/* harmony import */ var _ErrorMessage__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./ErrorMessage */ "./components/ErrorMessage.js");
/* harmony import */ var _common_CustomButton__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./common/CustomButton */ "./components/common/CustomButton.js");
var _jsxFileName = "C:\\Users\\vstepnova\\Desktop\\test sunlight\\components\\UserForm.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }










const fields = [{
  id: 0,
  name: "userName",
  label: "Фамилия и имя",
  placeholder: "Укажите Вашу вамилию и имя",
  type: "text",
  iconPath: "/badge.png"
}, {
  id: 1,
  name: "email",
  label: "E-mail",
  placeholder: "ivanova@mail.ru",
  type: "email",
  iconPath: "/mail.png"
}, {
  id: 2,
  name: "phoneNumber",
  label: "Номер телефона",
  type: "tel",
  placeholder: "Укажите номер телефона",
  iconPath: "/phone.png"
}];
function UserForm({
  isFormOpen,
  handleDialogOpen
}) {
  const {
    0: isLoading,
    1: setLoading
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);
  const {
    0: isError,
    1: setError
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);

  async function handleFormSubmit(values) {
    try {
      const response = await axios__WEBPACK_IMPORTED_MODULE_1___default.a.post("http://localhost:3005/api", JSON.stringify(values));
      setLoading(true);
      console.log(response);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }

    setLoading(false);
    handleDialogOpen();
  }

  const renderUserForm = fields => fields.map(field => __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, {
    key: field.id,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61,
      columnNumber: 7
    }
  }, __jsx(react_final_form__WEBPACK_IMPORTED_MODULE_3__["Field"], {
    name: field.name,
    className: _styles_UserForm_module_scss__WEBPACK_IMPORTED_MODULE_5___default.a.TextField,
    render: (_ref) => {
      let {
        input,
        meta
      } = _ref,
          rest = _objectWithoutProperties(_ref, ["input", "meta"]);

      return __jsx("div", {
        className: _styles_UserForm_module_scss__WEBPACK_IMPORTED_MODULE_5___default.a.FieldItem,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 66,
          columnNumber: 13
        }
      }, __jsx("label", {
        htmlFor: field.id,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 67,
          columnNumber: 15
        }
      }, __jsx("img", {
        src: field.iconPath,
        className: _styles_UserForm_module_scss__WEBPACK_IMPORTED_MODULE_5___default.a.FieldIcon,
        alt: field.label,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 68,
          columnNumber: 17
        }
      })), __jsx(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_4___default.a, _extends({
        id: field.name
      }, input, rest, {
        placeholder: field.placeholder,
        type: field.type,
        error: Object(_utils_validate__WEBPACK_IMPORTED_MODULE_6__["isFieldError"])(meta),
        label: field.label,
        className: _styles_UserForm_module_scss__WEBPACK_IMPORTED_MODULE_5___default.a.TextField,
        variant: "outlined",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 74,
          columnNumber: 15
        }
      })), __jsx(_ErrorMessage__WEBPACK_IMPORTED_MODULE_7__["default"], {
        meta: meta,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 85,
          columnNumber: 15
        }
      }));
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62,
      columnNumber: 9
    }
  }), fields.length - 1 !== field.id ? __jsx("div", {
    className: _styles_UserForm_module_scss__WEBPACK_IMPORTED_MODULE_5___default.a.Divider,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 90,
      columnNumber: 11
    }
  }) : null));

  return __jsx(_material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_2___default.a, {
    className: _styles_UserForm_module_scss__WEBPACK_IMPORTED_MODULE_5___default.a.UserFormMuiPaper,
    style: isFormOpen ? {
      display: "block"
    } : {
      display: "none"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 96,
      columnNumber: 5
    }
  }, __jsx(react_final_form__WEBPACK_IMPORTED_MODULE_3__["Form"], {
    onSubmit: handleFormSubmit,
    validate: _utils_validate__WEBPACK_IMPORTED_MODULE_6__["validateForm"],
    render: ({
      handleSubmit,
      values
    }) => __jsx("form", {
      onSubmit: handleSubmit,
      className: _styles_UserForm_module_scss__WEBPACK_IMPORTED_MODULE_5___default.a.UserForm,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 104,
        columnNumber: 11
      }
    }, __jsx("section", {
      className: _styles_UserForm_module_scss__WEBPACK_IMPORTED_MODULE_5___default.a.MainFormContent,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 105,
        columnNumber: 13
      }
    }, renderUserForm(fields)), __jsx(_common_CustomButton__WEBPACK_IMPORTED_MODULE_8__["default"], {
      isLoading: isLoading,
      name: "\u0421\u043E\u0445\u0440\u0430\u043D\u0438\u0442\u044C \u0438\u0437\u043C\u0435\u043D\u0435\u043D\u0438\u044F",
      type: "submit",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 109,
        columnNumber: 13
      }
    })),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 100,
      columnNumber: 7
    }
  }));
}

/***/ }),

/***/ "./components/common/CustomButton.js":
/*!*******************************************!*\
  !*** ./components/common/CustomButton.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return CustomButton; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _styles_CustomButton_module_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../styles/CustomButton.module.scss */ "./styles/CustomButton.module.scss");
/* harmony import */ var _styles_CustomButton_module_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_CustomButton_module_scss__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _material_ui_core_CircularProgress__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/CircularProgress */ "@material-ui/core/CircularProgress");
/* harmony import */ var _material_ui_core_CircularProgress__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_CircularProgress__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "C:\\Users\\vstepnova\\Desktop\\test sunlight\\components\\common\\CustomButton.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


function CustomButton({
  isLoading,
  name,
  type,
  onClick
}) {
  return __jsx("button", {
    type: type,
    className: _styles_CustomButton_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.CustomButton,
    onClick: onClick,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6,
      columnNumber: 5
    }
  }, isLoading ? __jsx(_material_ui_core_CircularProgress__WEBPACK_IMPORTED_MODULE_2___default.a, {
    disableShrink: true,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 20
    }
  }) : name);
}

/***/ }),

/***/ "./components/useDialogHook.js":
/*!*************************************!*\
  !*** ./components/useDialogHook.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return useDialogHook; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

function useDialogHook() {
  const {
    0: isOpen,
    1: setDialogOpen
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);

  const handleDialogOpen = () => {
    setDialogOpen(true);
    console.log("open");
  };

  const handleDialogClose = () => setDialogOpen(false);

  return {
    isOpen,
    handleDialogOpen,
    handleDialogClose
  };
}

/***/ }),

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return App; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ "next/head");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _styles_App_module_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../styles/App.module.scss */ "./styles/App.module.scss");
/* harmony import */ var _styles_App_module_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styles_App_module_scss__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_useDialogHook__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/useDialogHook */ "./components/useDialogHook.js");
/* harmony import */ var _components_Profile__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/Profile */ "./components/Profile.js");
/* harmony import */ var _components_Header__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/Header */ "./components/Header.js");
/* harmony import */ var _components_CustomDialog__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/CustomDialog */ "./components/CustomDialog.js");
var _jsxFileName = "C:\\Users\\vstepnova\\Desktop\\test sunlight\\pages\\index.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;







function App() {
  const {
    0: isFormOpen,
    1: setFormClose
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(true);
  const {
    isOpen,
    handleDialogOpen,
    handleDialogClose
  } = Object(_components_useDialogHook__WEBPACK_IMPORTED_MODULE_3__["default"])();

  const handleFormClose = () => setFormClose(!isFormOpen);

  return __jsx("section", {
    className: "App",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 5
    }
  }, __jsx(next_head__WEBPACK_IMPORTED_MODULE_1___default.a, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 7
    }
  }, __jsx("title", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 9
    }
  }, "Test Fulogy"), __jsx("link", {
    href: "https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400;600&display=swap",
    rel: "stylesheet",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 9
    }
  })), __jsx("main", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 7
    }
  }, __jsx("h1", {
    className: "Hidden",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 9
    }
  }, "\u0424\u043E\u0440\u043C\u0430"), __jsx("section", {
    className: _styles_App_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.MainContent,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 9
    }
  }, __jsx(_components_Header__WEBPACK_IMPORTED_MODULE_5__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 11
    }
  }), __jsx("h2", {
    className: _styles_App_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.ProfileHeader,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 11
    }
  }, "\u041B\u0438\u0447\u043D\u044B\u0439 \u043F\u0440\u043E\u0444\u0438\u043B\u044C"), __jsx("h3", {
    className: _styles_App_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.ProfileRoutesHeader,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 11
    }
  }, "\u0413\u043B\u0430\u0432\u043D\u0430\u044F/\u041B\u0438\u0447\u043D\u044B\u0439 \u043F\u0440\u043E\u0444\u0438\u043B\u044C"), __jsx(_components_Profile__WEBPACK_IMPORTED_MODULE_4__["default"], {
    handleDialogOpen: handleDialogOpen,
    isFormOpen: isFormOpen,
    onFormClose: handleFormClose,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 11
    }
  }), __jsx(_components_CustomDialog__WEBPACK_IMPORTED_MODULE_6__["default"], {
    isOpen: isOpen,
    onClose: handleDialogClose,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 11
    }
  }))));
}

/***/ }),

/***/ "./styles/App.module.scss":
/*!********************************!*\
  !*** ./styles/App.module.scss ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

// Exports
module.exports = {
	"App": "App_App__3LSN0",
	"ProfileHeader": "App_ProfileHeader__3nAXe",
	"ProfileRoutesHeader": "App_ProfileRoutesHeader__2rh8-",
	"MainContent": "App_MainContent__2HVqG"
};


/***/ }),

/***/ "./styles/CustomButton.module.scss":
/*!*****************************************!*\
  !*** ./styles/CustomButton.module.scss ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// Exports
module.exports = {
	"CustomButton": "CustomButton_CustomButton__1wNOs"
};


/***/ }),

/***/ "./styles/CustomDialog.module.scss":
/*!*****************************************!*\
  !*** ./styles/CustomDialog.module.scss ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// Exports
module.exports = {
	"Dialog": "CustomDialog_Dialog__1FMXR"
};


/***/ }),

/***/ "./styles/Header.module.scss":
/*!***********************************!*\
  !*** ./styles/Header.module.scss ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

// Exports
module.exports = {
	"Header": "Header_Header__17VJl",
	"Notifications": "Header_Notifications__lwvwg",
	"Divider": "Header_Divider__3sEzY",
	"HeaderUserInfo": "Header_HeaderUserInfo__2jnbF",
	"UserIcon": "Header_UserIcon__sRtZd"
};


/***/ }),

/***/ "./styles/Profile.module.scss":
/*!************************************!*\
  !*** ./styles/Profile.module.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// Exports
module.exports = {
	"Profile": "Profile_Profile__2vhhr",
	"UserInfoMuiPaper": "Profile_UserInfoMuiPaper__T-laR",
	"MainInfo": "Profile_MainInfo__329Zg",
	"ProfileUserIcon": "Profile_ProfileUserIcon__FV6l9",
	"UserName": "Profile_UserName__3pDIk",
	"CloseButton": "Profile_CloseButton__tG1Kc",
	"CloseIcon": "Profile_CloseIcon__10DML"
};


/***/ }),

/***/ "./styles/UserForm.module.scss":
/*!*************************************!*\
  !*** ./styles/UserForm.module.scss ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// Exports
module.exports = {
	"UserFormMuiPaper": "UserForm_UserFormMuiPaper__2ITl6",
	"UserForm": "UserForm_UserForm__3fLmp",
	"MainFormContent": "UserForm_MainFormContent__3lF2x",
	"TextField": "UserForm_TextField__e4azK",
	"FieldItem": "UserForm_FieldItem__5BvJB",
	"FieldIcon": "UserForm_FieldIcon__36AfJ",
	"Divider": "UserForm_Divider__lGOl3",
	"SuccessMessage": "UserForm_SuccessMessage__1AKiR"
};


/***/ }),

/***/ "./utils/validate.js":
/*!***************************!*\
  !*** ./utils/validate.js ***!
  \***************************/
/*! exports provided: ValidateMessage, isFieldError, validateForm */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ValidateMessage", function() { return ValidateMessage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isFieldError", function() { return isFieldError; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "validateForm", function() { return validateForm; });
const ValidateMessage = {
  REQUIRED: "required",
  NAME: "Неверное имя",
  EMAIL: "Неверный адрес",
  PHONE: "Неверный номер телефона"
};
const isFieldError = meta => Boolean(meta.error && meta.submitFailed);
const validateForm = values => {
  const errors = {};

  if (!values.userName && !values.phoneNumber && !values.email) {
    errors.userName = ValidateMessage.REQUIRED;
    errors.phoneNumber = ValidateMessage.REQUIRED;
    errors.email = ValidateMessage.REQUIRED;
  }

  if (values.userName && values.userName == "имя") {
    errors.userName = ValidateMessage.NAME;
  }

  return errors;
};

/***/ }),

/***/ "@material-ui/core/Button":
/*!*******************************************!*\
  !*** external "@material-ui/core/Button" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Button");

/***/ }),

/***/ "@material-ui/core/CircularProgress":
/*!*****************************************************!*\
  !*** external "@material-ui/core/CircularProgress" ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/CircularProgress");

/***/ }),

/***/ "@material-ui/core/Dialog":
/*!*******************************************!*\
  !*** external "@material-ui/core/Dialog" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Dialog");

/***/ }),

/***/ "@material-ui/core/FormHelperText":
/*!***************************************************!*\
  !*** external "@material-ui/core/FormHelperText" ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/FormHelperText");

/***/ }),

/***/ "@material-ui/core/IconButton":
/*!***********************************************!*\
  !*** external "@material-ui/core/IconButton" ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/IconButton");

/***/ }),

/***/ "@material-ui/core/Paper":
/*!******************************************!*\
  !*** external "@material-ui/core/Paper" ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Paper");

/***/ }),

/***/ "@material-ui/core/TextField":
/*!**********************************************!*\
  !*** external "@material-ui/core/TextField" ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/TextField");

/***/ }),

/***/ "@material-ui/icons/Close":
/*!*******************************************!*\
  !*** external "@material-ui/icons/Close" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/Close");

/***/ }),

/***/ "@material-ui/icons/KeyboardArrowDown":
/*!*******************************************************!*\
  !*** external "@material-ui/icons/KeyboardArrowDown" ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/KeyboardArrowDown");

/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("axios");

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react-final-form":
/*!***********************************!*\
  !*** external "react-final-form" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-final-form");

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9DdXN0b21EaWFsb2cuanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9FcnJvck1lc3NhZ2UuanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9IZWFkZXIuanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9Qcm9maWxlLmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvVXNlckZvcm0uanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9jb21tb24vQ3VzdG9tQnV0dG9uLmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvdXNlRGlhbG9nSG9vay5qcyIsIndlYnBhY2s6Ly8vLi9wYWdlcy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zdHlsZXMvQXBwLm1vZHVsZS5zY3NzIiwid2VicGFjazovLy8uL3N0eWxlcy9DdXN0b21CdXR0b24ubW9kdWxlLnNjc3MiLCJ3ZWJwYWNrOi8vLy4vc3R5bGVzL0N1c3RvbURpYWxvZy5tb2R1bGUuc2NzcyIsIndlYnBhY2s6Ly8vLi9zdHlsZXMvSGVhZGVyLm1vZHVsZS5zY3NzIiwid2VicGFjazovLy8uL3N0eWxlcy9Qcm9maWxlLm1vZHVsZS5zY3NzIiwid2VicGFjazovLy8uL3N0eWxlcy9Vc2VyRm9ybS5tb2R1bGUuc2NzcyIsIndlYnBhY2s6Ly8vLi91dGlscy92YWxpZGF0ZS5qcyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAbWF0ZXJpYWwtdWkvY29yZS9CdXR0b25cIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAbWF0ZXJpYWwtdWkvY29yZS9DaXJjdWxhclByb2dyZXNzXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQG1hdGVyaWFsLXVpL2NvcmUvRGlhbG9nXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQG1hdGVyaWFsLXVpL2NvcmUvRm9ybUhlbHBlclRleHRcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAbWF0ZXJpYWwtdWkvY29yZS9JY29uQnV0dG9uXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQG1hdGVyaWFsLXVpL2NvcmUvUGFwZXJcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAbWF0ZXJpYWwtdWkvY29yZS9UZXh0RmllbGRcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAbWF0ZXJpYWwtdWkvaWNvbnMvQ2xvc2VcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAbWF0ZXJpYWwtdWkvaWNvbnMvS2V5Ym9hcmRBcnJvd0Rvd25cIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJheGlvc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcIm5leHQvaGVhZFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3QtZmluYWwtZm9ybVwiIl0sIm5hbWVzIjpbIkN1c3RvbURpYWxvZyIsImlzT3BlbiIsIm9uQ2xvc2UiLCJDdXN0b21EaWFsb2dTdHlsZXMiLCJEaWFsb2ciLCJFcnJvck1lc3NhZ2UiLCJtZXRhIiwibm9FcnJvck1lc3NhZ2UiLCJpc0ZpZWxkRXJyb3IiLCJlcnJvciIsIlZhbGlkYXRlTWVzc2FnZSIsIlJFUVVJUkVEIiwiSGVhZGVyIiwiSGVhZGVyU3R5bGVzIiwiTm90aWZpY2F0aW9ucyIsIkRpdmlkZXIiLCJIZWFkZXJVc2VySW5mbyIsIlVzZXJJY29uIiwiVXNlck5hbWUiLCJ1c2VXaW5kb3dTaXplIiwid2luZG93U2l6ZSIsInNldFdpbmRvd1NpemUiLCJ1c2VTdGF0ZSIsIndpZHRoIiwidW5kZWZpbmVkIiwiaGVpZ2h0IiwidXNlRWZmZWN0IiwiUHJvZmlsZSIsImlzRm9ybU9wZW4iLCJvbkZvcm1DbG9zZSIsImhhbmRsZURpYWxvZ09wZW4iLCJzaXplIiwiY29uc29sZSIsImxvZyIsIlByb2ZpbGVTdHlsZXMiLCJVc2VySW5mb011aVBhcGVyIiwiTWFpbkluZm8iLCJQcm9maWxlVXNlckljb24iLCJDbG9zZUJ1dHRvbiIsIkNsb3NlSWNvbiIsImZpZWxkcyIsImlkIiwibmFtZSIsImxhYmVsIiwicGxhY2Vob2xkZXIiLCJ0eXBlIiwiaWNvblBhdGgiLCJVc2VyRm9ybSIsImlzTG9hZGluZyIsInNldExvYWRpbmciLCJpc0Vycm9yIiwic2V0RXJyb3IiLCJoYW5kbGVGb3JtU3VibWl0IiwidmFsdWVzIiwicmVzcG9uc2UiLCJheGlvcyIsInBvc3QiLCJKU09OIiwic3RyaW5naWZ5IiwicmVuZGVyVXNlckZvcm0iLCJtYXAiLCJmaWVsZCIsIlVzZXJGb3JtU3R5bGVzIiwiVGV4dEZpZWxkIiwiaW5wdXQiLCJyZXN0IiwiRmllbGRJdGVtIiwiRmllbGRJY29uIiwibGVuZ3RoIiwiVXNlckZvcm1NdWlQYXBlciIsImRpc3BsYXkiLCJ2YWxpZGF0ZUZvcm0iLCJoYW5kbGVTdWJtaXQiLCJNYWluRm9ybUNvbnRlbnQiLCJDdXN0b21CdXR0b24iLCJvbkNsaWNrIiwiQ3VzdG9tQnV0dG9uU3R5bGVzIiwidXNlRGlhbG9nSG9vayIsInNldERpYWxvZ09wZW4iLCJoYW5kbGVEaWFsb2dDbG9zZSIsIkFwcCIsInNldEZvcm1DbG9zZSIsImhhbmRsZUZvcm1DbG9zZSIsIkFwcFN0eWxlcyIsIk1haW5Db250ZW50IiwiUHJvZmlsZUhlYWRlciIsIlByb2ZpbGVSb3V0ZXNIZWFkZXIiLCJOQU1FIiwiRU1BSUwiLCJQSE9ORSIsIkJvb2xlYW4iLCJzdWJtaXRGYWlsZWQiLCJlcnJvcnMiLCJ1c2VyTmFtZSIsInBob25lTnVtYmVyIiwiZW1haWwiXSwibWFwcGluZ3MiOiI7O1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSxJQUFJO1FBQ0o7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxn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QUEvQjtBQUNEOztBQUNELE1BQUkwQyxNQUFNLENBQUN3QyxRQUFQLElBQW1CeEMsTUFBTSxDQUFDd0MsUUFBUCxJQUFtQixLQUExQyxFQUFpRDtBQUMvQ0QsVUFBTSxDQUFDQyxRQUFQLEdBQWtCbkYsZUFBZSxDQUFDNkUsSUFBbEM7QUFDRDs7QUFDRCxTQUFPSyxNQUFQO0FBQ0QsQ0FYTSxDOzs7Ozs7Ozs7OztBQ1RQLHFEOzs7Ozs7Ozs7OztBQ0FBLCtEOzs7Ozs7Ozs7OztBQ0FBLHFEOzs7Ozs7Ozs7OztBQ0FBLDZEOzs7Ozs7Ozs7OztBQ0FBLHlEOzs7Ozs7Ozs7OztBQ0FBLG9EOzs7Ozs7Ozs7OztBQ0FBLHdEOzs7Ozs7Ozs7OztBQ0FBLHFEOzs7Ozs7Ozs7OztBQ0FBLGlFOzs7Ozs7Ozs7OztBQ0FBLGtDOzs7Ozs7Ozs7OztBQ0FBLHNDOzs7Ozs7Ozs7OztBQ0FBLGtDOzs7Ozs7Ozs7OztBQ0FBLDZDIiwiZmlsZSI6InBhZ2VzL2luZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSByZXF1aXJlKCcuLi9zc3ItbW9kdWxlLWNhY2hlLmpzJyk7XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdHZhciB0aHJldyA9IHRydWU7XG4gXHRcdHRyeSB7XG4gXHRcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG4gXHRcdFx0dGhyZXcgPSBmYWxzZTtcbiBcdFx0fSBmaW5hbGx5IHtcbiBcdFx0XHRpZih0aHJldykgZGVsZXRlIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdO1xuIFx0XHR9XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9wYWdlcy9pbmRleC5qc1wiKTtcbiIsImltcG9ydCBEaWFsb2cgZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlL0RpYWxvZ1wiO1xyXG5cclxuaW1wb3J0IEN1c3RvbURpYWxvZ1N0eWxlcyBmcm9tIFwiLi4vc3R5bGVzL0N1c3RvbURpYWxvZy5tb2R1bGUuc2Nzc1wiO1xyXG5pbXBvcnQgQ3VzdG9tQnV0dG9uIGZyb20gXCIuL2NvbW1vbi9DdXN0b21CdXR0b25cIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEN1c3RvbURpYWxvZyh7IGlzT3Blbiwgb25DbG9zZSB9KSB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxEaWFsb2dcclxuICAgICAgb3Blbj17aXNPcGVufVxyXG4gICAgICBjbGFzc05hbWU9e0N1c3RvbURpYWxvZ1N0eWxlcy5EaWFsb2d9XHJcbiAgICAgIG9uQ2xvc2U9e29uQ2xvc2V9XHJcbiAgICA+XHJcbiAgICAgIDxoND7QlNCw0L3QvdGL0LUg0YPRgdC/0LXRiNC90L4g0YHQvtGF0YDQsNC90LXQvdGLPC9oND5cclxuICAgICAgPEN1c3RvbUJ1dHRvbiBuYW1lPVwi0JfQsNC60YDRi9GC0YxcIiBvbkNsaWNrPXtvbkNsb3NlfSAvPlxyXG4gICAgPC9EaWFsb2c+XHJcbiAgKTtcclxufVxyXG4iLCJpbXBvcnQgRm9ybUhlbHBlclRleHQgZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlL0Zvcm1IZWxwZXJUZXh0XCI7XHJcblxyXG5pbXBvcnQgeyBpc0ZpZWxkRXJyb3IgfSBmcm9tIFwiLi4vdXRpbHMvdmFsaWRhdGVcIjtcclxuaW1wb3J0IHsgVmFsaWRhdGVNZXNzYWdlIH0gZnJvbSBcIi4uL3V0aWxzL3ZhbGlkYXRlXCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBFcnJvck1lc3NhZ2UoeyBtZXRhLCBub0Vycm9yTWVzc2FnZSB9KSB7XHJcbiAgaWYgKG5vRXJyb3JNZXNzYWdlKSB7XHJcbiAgICByZXR1cm4gbnVsbDtcclxuICB9XHJcbiAgcmV0dXJuIChcclxuICAgIGlzRmllbGRFcnJvcihtZXRhKSAmJlxyXG4gICAgbWV0YS5lcnJvciAhPT0gVmFsaWRhdGVNZXNzYWdlLlJFUVVJUkVEICYmIChcclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJFcnJvck1lc3NhZ2VcIj5cclxuICAgICAgICA8Rm9ybUhlbHBlclRleHQgZXJyb3I+e21ldGEuZXJyb3J9PC9Gb3JtSGVscGVyVGV4dD5cclxuICAgICAgPC9kaXY+XHJcbiAgICApXHJcbiAgKTtcclxufVxyXG4iLCJpbXBvcnQgSGVhZGVyU3R5bGVzIGZyb20gXCIuLi9zdHlsZXMvSGVhZGVyLm1vZHVsZS5zY3NzXCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBIZWFkZXIoKSB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxzZWN0aW9uIGNsYXNzTmFtZT17SGVhZGVyU3R5bGVzLkhlYWRlcn0+XHJcbiAgICAgIDxpbWdcclxuICAgICAgICBzcmM9XCIvbm90aWZpY2F0aW9uLnBuZ1wiXHJcbiAgICAgICAgY2xhc3NOYW1lPXtIZWFkZXJTdHlsZXMuTm90aWZpY2F0aW9uc31cclxuICAgICAgICBhbHQ9XCJub3RpZmljYXRpb25zXCJcclxuICAgICAgLz5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9e0hlYWRlclN0eWxlcy5EaXZpZGVyfSAvPlxyXG4gICAgICA8c2VjdGlvbiBjbGFzc05hbWU9e0hlYWRlclN0eWxlcy5IZWFkZXJVc2VySW5mb30+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e2Ake0hlYWRlclN0eWxlcy5Vc2VySWNvbn0gVXNlckljb25gfSAvPlxyXG4gICAgICAgIDxwIGNsYXNzTmFtZT17SGVhZGVyU3R5bGVzLlVzZXJOYW1lfT7QmNCy0LDQvdC+0LLQsCDQkC48L3A+XHJcbiAgICAgIDwvc2VjdGlvbj5cclxuICAgIDwvc2VjdGlvbj5cclxuICApO1xyXG59XHJcbiIsImltcG9ydCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IFBhcGVyIGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZS9QYXBlclwiO1xyXG5pbXBvcnQgQnV0dG9uIGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZS9CdXR0b25cIjtcclxuaW1wb3J0IEljb25CdXR0b24gZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlL0ljb25CdXR0b25cIjtcclxuaW1wb3J0IENsb3NlSWNvbiBmcm9tIFwiQG1hdGVyaWFsLXVpL2ljb25zL0Nsb3NlXCI7XHJcbmltcG9ydCBLZXlib2FyZEFycm93RG93bkljb24gZnJvbSBcIkBtYXRlcmlhbC11aS9pY29ucy9LZXlib2FyZEFycm93RG93blwiO1xyXG5cclxuaW1wb3J0IFByb2ZpbGVTdHlsZXMgZnJvbSBcIi4uL3N0eWxlcy9Qcm9maWxlLm1vZHVsZS5zY3NzXCI7XHJcbmltcG9ydCBVc2VyRm9ybSBmcm9tIFwiLi9Vc2VyRm9ybS5qc1wiO1xyXG5cclxuLy9UT0RPOiDQvtC/0YLQuNC80LjQt9Cw0YbQuNGPXHJcblxyXG5mdW5jdGlvbiB1c2VXaW5kb3dTaXplKCkge1xyXG4gIC8vIEluaXRpYWxpemUgc3RhdGUgd2l0aCB1bmRlZmluZWQgd2lkdGgvaGVpZ2h0IHNvIHNlcnZlciBhbmQgY2xpZW50IHJlbmRlcnMgbWF0Y2hcclxuICAvLyBMZWFybiBtb3JlIGhlcmU6IGh0dHBzOi8vam9zaHdjb21lYXUuY29tL3JlYWN0L3RoZS1wZXJpbHMtb2YtcmVoeWRyYXRpb24vXHJcbiAgY29uc3QgW3dpbmRvd1NpemUsIHNldFdpbmRvd1NpemVdID0gdXNlU3RhdGUoe1xyXG4gICAgd2lkdGg6IHVuZGVmaW5lZCxcclxuICAgIGhlaWdodDogdW5kZWZpbmVkLFxyXG4gIH0pO1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgLy8gb25seSBleGVjdXRlIGFsbCB0aGUgY29kZSBiZWxvdyBpbiBjbGllbnQgc2lkZVxyXG4gICAgaWYgKHR5cGVvZiB3aW5kb3cgIT09IFwidW5kZWZpbmVkXCIpIHtcclxuICAgICAgLy8gSGFuZGxlciB0byBjYWxsIG9uIHdpbmRvdyByZXNpemVcclxuICAgICAgZnVuY3Rpb24gaGFuZGxlUmVzaXplKCkge1xyXG4gICAgICAgIC8vIFNldCB3aW5kb3cgd2lkdGgvaGVpZ2h0IHRvIHN0YXRlXHJcbiAgICAgICAgc2V0V2luZG93U2l6ZSh7XHJcbiAgICAgICAgICB3aWR0aDogd2luZG93LmlubmVyV2lkdGgsXHJcbiAgICAgICAgICBoZWlnaHQ6IHdpbmRvdy5pbm5lckhlaWdodCxcclxuICAgICAgICB9KTtcclxuICAgICAgfVxyXG5cclxuICAgICAgLy8gQWRkIGV2ZW50IGxpc3RlbmVyXHJcbiAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwicmVzaXplXCIsIGhhbmRsZVJlc2l6ZSk7XHJcblxyXG4gICAgICAvLyBDYWxsIGhhbmRsZXIgcmlnaHQgYXdheSBzbyBzdGF0ZSBnZXRzIHVwZGF0ZWQgd2l0aCBpbml0aWFsIHdpbmRvdyBzaXplXHJcbiAgICAgIGhhbmRsZVJlc2l6ZSgpO1xyXG5cclxuICAgICAgLy8gUmVtb3ZlIGV2ZW50IGxpc3RlbmVyIG9uIGNsZWFudXBcclxuICAgICAgcmV0dXJuICgpID0+IHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKFwicmVzaXplXCIsIGhhbmRsZVJlc2l6ZSk7XHJcbiAgICB9XHJcbiAgfSwgW10pOyAvLyBFbXB0eSBhcnJheSBlbnN1cmVzIHRoYXQgZWZmZWN0IGlzIG9ubHkgcnVuIG9uIG1vdW50XHJcbiAgcmV0dXJuIHdpbmRvd1NpemU7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFByb2ZpbGUoeyBpc0Zvcm1PcGVuLCBvbkZvcm1DbG9zZSwgaGFuZGxlRGlhbG9nT3BlbiB9KSB7XHJcbiAgY29uc3Qgc2l6ZSA9IHVzZVdpbmRvd1NpemUoKTtcclxuICBjb25zb2xlLmxvZyhzaXplKTtcclxuICByZXR1cm4gKFxyXG4gICAgPHNlY3Rpb24gY2xhc3NOYW1lPXtQcm9maWxlU3R5bGVzLlByb2ZpbGV9PlxyXG4gICAgICA8UGFwZXIgY2xhc3NOYW1lPXtQcm9maWxlU3R5bGVzLlVzZXJJbmZvTXVpUGFwZXJ9PlxyXG4gICAgICAgIDxzZWN0aW9uIGNsYXNzTmFtZT17UHJvZmlsZVN0eWxlcy5NYWluSW5mb30+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17YCR7UHJvZmlsZVN0eWxlcy5Qcm9maWxlVXNlckljb259IFVzZXJJY29uYH0gLz5cclxuICAgICAgICAgIDxwIGNsYXNzTmFtZT17UHJvZmlsZVN0eWxlcy5Vc2VyTmFtZX0+XHJcbiAgICAgICAgICAgIHtzaXplLndpZHRoIDwgOTY5ID8gXCLQmNCy0LDQvdC+0LLQsCDQkC4g0JwuXCIgOiBcItCY0LLQsNC90L7QstCwINCQ0L3QvdCwINCc0LjRhdCw0LnQu9C+0LLQvdCwXCJ9XHJcbiAgICAgICAgICA8L3A+XHJcbiAgICAgICAgPC9zZWN0aW9uPlxyXG5cclxuICAgICAgICB7c2l6ZS53aWR0aCA8IDk1OSA/IChcclxuICAgICAgICAgIDxJY29uQnV0dG9uPlxyXG4gICAgICAgICAgICA8Q2xvc2VJY29uIGNvbG9yPVwicHJpbWFyeVwiIC8+XHJcbiAgICAgICAgICA8L0ljb25CdXR0b24+XHJcbiAgICAgICAgKSA6IChcclxuICAgICAgICAgIDxCdXR0b25cclxuICAgICAgICAgICAgY2xhc3NOYW1lPXtQcm9maWxlU3R5bGVzLkNsb3NlQnV0dG9ufVxyXG4gICAgICAgICAgICBvbkNsaWNrPXtvbkZvcm1DbG9zZX1cclxuICAgICAgICAgICAgY29sb3I9XCJwcmltYXJ5XCJcclxuICAgICAgICAgICAgZW5kSWNvbj17XHJcbiAgICAgICAgICAgICAgaXNGb3JtT3BlbiA/IChcclxuICAgICAgICAgICAgICAgIDxDbG9zZUljb24gY2xhc3NOYW1lPXtQcm9maWxlU3R5bGVzLkNsb3NlSWNvbn0gLz5cclxuICAgICAgICAgICAgICApIDogKFxyXG4gICAgICAgICAgICAgICAgPEtleWJvYXJkQXJyb3dEb3duSWNvbiBjbGFzc05hbWU9e1Byb2ZpbGVTdHlsZXMuQ2xvc2VJY29ufSAvPlxyXG4gICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgPlxyXG4gICAgICAgICAgICB7aXNGb3JtT3BlbiA/IFwi0JfQsNC60YDRi9GC0YxcIiA6IFwi0J7RgtC60YDRi9GC0YxcIn1cclxuICAgICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICAgICl9XHJcbiAgICAgIDwvUGFwZXI+XHJcbiAgICAgIDxVc2VyRm9ybSBoYW5kbGVEaWFsb2dPcGVuPXtoYW5kbGVEaWFsb2dPcGVufSBpc0Zvcm1PcGVuPXtpc0Zvcm1PcGVufSAvPlxyXG4gICAgPC9zZWN0aW9uPlxyXG4gICk7XHJcbn1cclxuIiwiaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiO1xyXG5pbXBvcnQgUGFwZXIgZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlL1BhcGVyXCI7XHJcbmltcG9ydCB7IEZvcm0sIEZpZWxkIH0gZnJvbSBcInJlYWN0LWZpbmFsLWZvcm1cIjtcclxuaW1wb3J0IFRleHRGaWVsZCBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvVGV4dEZpZWxkXCI7XHJcblxyXG5pbXBvcnQgVXNlckZvcm1TdHlsZXMgZnJvbSBcIi4uL3N0eWxlcy9Vc2VyRm9ybS5tb2R1bGUuc2Nzc1wiO1xyXG5pbXBvcnQgeyB2YWxpZGF0ZUZvcm0sIGlzRmllbGRFcnJvciB9IGZyb20gXCIuLi91dGlscy92YWxpZGF0ZVwiO1xyXG5pbXBvcnQgRXJyb3JNZXNzYWdlIGZyb20gXCIuL0Vycm9yTWVzc2FnZVwiO1xyXG5pbXBvcnQgQ3VzdG9tQnV0dG9uIGZyb20gXCIuL2NvbW1vbi9DdXN0b21CdXR0b25cIjtcclxuXHJcbmNvbnN0IGZpZWxkcyA9IFtcclxuICB7XHJcbiAgICBpZDogMCxcclxuICAgIG5hbWU6IFwidXNlck5hbWVcIixcclxuICAgIGxhYmVsOiBcItCk0LDQvNC40LvQuNGPINC4INC40LzRj1wiLFxyXG4gICAgcGxhY2Vob2xkZXI6IFwi0KPQutCw0LbQuNGC0LUg0JLQsNGI0YMg0LLQsNC80LjQu9C40Y4g0Lgg0LjQvNGPXCIsXHJcbiAgICB0eXBlOiBcInRleHRcIixcclxuICAgIGljb25QYXRoOiBcIi9iYWRnZS5wbmdcIixcclxuICB9LFxyXG4gIHtcclxuICAgIGlkOiAxLFxyXG4gICAgbmFtZTogXCJlbWFpbFwiLFxyXG4gICAgbGFiZWw6IFwiRS1tYWlsXCIsXHJcbiAgICBwbGFjZWhvbGRlcjogXCJpdmFub3ZhQG1haWwucnVcIixcclxuICAgIHR5cGU6IFwiZW1haWxcIixcclxuICAgIGljb25QYXRoOiBcIi9tYWlsLnBuZ1wiLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgaWQ6IDIsXHJcbiAgICBuYW1lOiBcInBob25lTnVtYmVyXCIsXHJcbiAgICBsYWJlbDogXCLQndC+0LzQtdGAINGC0LXQu9C10YTQvtC90LBcIixcclxuICAgIHR5cGU6IFwidGVsXCIsXHJcbiAgICBwbGFjZWhvbGRlcjogXCLQo9C60LDQttC40YLQtSDQvdC+0LzQtdGAINGC0LXQu9C10YTQvtC90LBcIixcclxuICAgIGljb25QYXRoOiBcIi9waG9uZS5wbmdcIixcclxuICB9LFxyXG5dO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gVXNlckZvcm0oeyBpc0Zvcm1PcGVuLCBoYW5kbGVEaWFsb2dPcGVuIH0pIHtcclxuICBjb25zdCBbaXNMb2FkaW5nLCBzZXRMb2FkaW5nXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICBjb25zdCBbaXNFcnJvciwgc2V0RXJyb3JdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG5cclxuICBhc3luYyBmdW5jdGlvbiBoYW5kbGVGb3JtU3VibWl0KHZhbHVlcykge1xyXG4gICAgdHJ5IHtcclxuICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBheGlvcy5wb3N0KFxyXG4gICAgICAgIFwiaHR0cDovL2xvY2FsaG9zdDozMDA1L2FwaVwiLFxyXG4gICAgICAgIEpTT04uc3RyaW5naWZ5KHZhbHVlcylcclxuICAgICAgKTtcclxuICAgICAgc2V0TG9hZGluZyh0cnVlKTtcclxuICAgICAgY29uc29sZS5sb2cocmVzcG9uc2UpO1xyXG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgY29uc29sZS5sb2coZXJyb3IpO1xyXG4gICAgICBzZXRMb2FkaW5nKGZhbHNlKTtcclxuICAgIH1cclxuICAgIHNldExvYWRpbmcoZmFsc2UpO1xyXG4gICAgaGFuZGxlRGlhbG9nT3BlbigpO1xyXG4gIH1cclxuXHJcbiAgY29uc3QgcmVuZGVyVXNlckZvcm0gPSAoZmllbGRzKSA9PlxyXG4gICAgZmllbGRzLm1hcCgoZmllbGQpID0+IChcclxuICAgICAgPFJlYWN0LkZyYWdtZW50IGtleT17ZmllbGQuaWR9PlxyXG4gICAgICAgIDxGaWVsZFxyXG4gICAgICAgICAgbmFtZT17ZmllbGQubmFtZX1cclxuICAgICAgICAgIGNsYXNzTmFtZT17VXNlckZvcm1TdHlsZXMuVGV4dEZpZWxkfVxyXG4gICAgICAgICAgcmVuZGVyPXsoeyBpbnB1dCwgbWV0YSwgLi4ucmVzdCB9KSA9PiAoXHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtVc2VyRm9ybVN0eWxlcy5GaWVsZEl0ZW19PlxyXG4gICAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPXtmaWVsZC5pZH0+XHJcbiAgICAgICAgICAgICAgICA8aW1nXHJcbiAgICAgICAgICAgICAgICAgIHNyYz17ZmllbGQuaWNvblBhdGh9XHJcbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17VXNlckZvcm1TdHlsZXMuRmllbGRJY29ufVxyXG4gICAgICAgICAgICAgICAgICBhbHQ9e2ZpZWxkLmxhYmVsfVxyXG4gICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICA8L2xhYmVsPlxyXG4gICAgICAgICAgICAgIDxUZXh0RmllbGRcclxuICAgICAgICAgICAgICAgIGlkPXtmaWVsZC5uYW1lfVxyXG4gICAgICAgICAgICAgICAgey4uLmlucHV0fVxyXG4gICAgICAgICAgICAgICAgey4uLnJlc3R9XHJcbiAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj17ZmllbGQucGxhY2Vob2xkZXJ9XHJcbiAgICAgICAgICAgICAgICB0eXBlPXtmaWVsZC50eXBlfVxyXG4gICAgICAgICAgICAgICAgZXJyb3I9e2lzRmllbGRFcnJvcihtZXRhKX1cclxuICAgICAgICAgICAgICAgIGxhYmVsPXtmaWVsZC5sYWJlbH1cclxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17VXNlckZvcm1TdHlsZXMuVGV4dEZpZWxkfVxyXG4gICAgICAgICAgICAgICAgdmFyaWFudD1cIm91dGxpbmVkXCJcclxuICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgIDxFcnJvck1lc3NhZ2UgbWV0YT17bWV0YX0gLz5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICApfVxyXG4gICAgICAgIC8+XHJcbiAgICAgICAge2ZpZWxkcy5sZW5ndGggLSAxICE9PSBmaWVsZC5pZCA/IChcclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtVc2VyRm9ybVN0eWxlcy5EaXZpZGVyfSAvPlxyXG4gICAgICAgICkgOiBudWxsfVxyXG4gICAgICA8L1JlYWN0LkZyYWdtZW50PlxyXG4gICAgKSk7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8UGFwZXJcclxuICAgICAgY2xhc3NOYW1lPXtVc2VyRm9ybVN0eWxlcy5Vc2VyRm9ybU11aVBhcGVyfVxyXG4gICAgICBzdHlsZT17aXNGb3JtT3BlbiA/IHsgZGlzcGxheTogXCJibG9ja1wiIH0gOiB7IGRpc3BsYXk6IFwibm9uZVwiIH19XHJcbiAgICA+XHJcbiAgICAgIDxGb3JtXHJcbiAgICAgICAgb25TdWJtaXQ9e2hhbmRsZUZvcm1TdWJtaXR9XHJcbiAgICAgICAgdmFsaWRhdGU9e3ZhbGlkYXRlRm9ybX1cclxuICAgICAgICByZW5kZXI9eyh7IGhhbmRsZVN1Ym1pdCwgdmFsdWVzIH0pID0+IChcclxuICAgICAgICAgIDxmb3JtIG9uU3VibWl0PXtoYW5kbGVTdWJtaXR9IGNsYXNzTmFtZT17VXNlckZvcm1TdHlsZXMuVXNlckZvcm19PlxyXG4gICAgICAgICAgICA8c2VjdGlvbiBjbGFzc05hbWU9e1VzZXJGb3JtU3R5bGVzLk1haW5Gb3JtQ29udGVudH0+XHJcbiAgICAgICAgICAgICAge3JlbmRlclVzZXJGb3JtKGZpZWxkcyl9XHJcbiAgICAgICAgICAgIDwvc2VjdGlvbj5cclxuXHJcbiAgICAgICAgICAgIDxDdXN0b21CdXR0b25cclxuICAgICAgICAgICAgICBpc0xvYWRpbmc9e2lzTG9hZGluZ31cclxuICAgICAgICAgICAgICBuYW1lPVwi0KHQvtGF0YDQsNC90LjRgtGMINC40LfQvNC10L3QtdC90LjRj1wiXHJcbiAgICAgICAgICAgICAgdHlwZT1cInN1Ym1pdFwiXHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICA8L2Zvcm0+XHJcbiAgICAgICAgKX1cclxuICAgICAgLz5cclxuICAgIDwvUGFwZXI+XHJcbiAgKTtcclxufVxyXG4iLCJpbXBvcnQgQ3VzdG9tQnV0dG9uU3R5bGVzIGZyb20gXCIuLi8uLi9zdHlsZXMvQ3VzdG9tQnV0dG9uLm1vZHVsZS5zY3NzXCI7XHJcbmltcG9ydCBDaXJjdWxhclByb2dyZXNzIGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZS9DaXJjdWxhclByb2dyZXNzXCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBDdXN0b21CdXR0b24oeyBpc0xvYWRpbmcsIG5hbWUsIHR5cGUsIG9uQ2xpY2sgfSkge1xyXG4gIHJldHVybiAoXHJcbiAgICA8YnV0dG9uXHJcbiAgICAgIHR5cGU9e3R5cGV9XHJcbiAgICAgIGNsYXNzTmFtZT17Q3VzdG9tQnV0dG9uU3R5bGVzLkN1c3RvbUJ1dHRvbn1cclxuICAgICAgb25DbGljaz17b25DbGlja31cclxuICAgID5cclxuICAgICAge2lzTG9hZGluZyA/IDxDaXJjdWxhclByb2dyZXNzIGRpc2FibGVTaHJpbmsgLz4gOiBuYW1lfVxyXG4gICAgPC9idXR0b24+XHJcbiAgKTtcclxufVxyXG4iLCJpbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gdXNlRGlhbG9nSG9vaygpIHtcclxuICBjb25zdCBbaXNPcGVuLCBzZXREaWFsb2dPcGVuXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuXHJcbiAgY29uc3QgaGFuZGxlRGlhbG9nT3BlbiA9ICgpID0+IHtcclxuICAgIHNldERpYWxvZ09wZW4odHJ1ZSk7XHJcbiAgICBjb25zb2xlLmxvZyhcIm9wZW5cIik7XHJcbiAgfTtcclxuICBjb25zdCBoYW5kbGVEaWFsb2dDbG9zZSA9ICgpID0+IHNldERpYWxvZ09wZW4oZmFsc2UpO1xyXG5cclxuICByZXR1cm4geyBpc09wZW4sIGhhbmRsZURpYWxvZ09wZW4sIGhhbmRsZURpYWxvZ0Nsb3NlIH07XHJcbn1cclxuIiwiaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IEhlYWQgZnJvbSBcIm5leHQvaGVhZFwiO1xyXG5cclxuaW1wb3J0IEFwcFN0eWxlcyBmcm9tIFwiLi4vc3R5bGVzL0FwcC5tb2R1bGUuc2Nzc1wiO1xyXG5pbXBvcnQgdXNlRGlhbG9nSG9vayBmcm9tIFwiLi4vY29tcG9uZW50cy91c2VEaWFsb2dIb29rXCI7XHJcbmltcG9ydCBQcm9maWxlIGZyb20gXCIuLi9jb21wb25lbnRzL1Byb2ZpbGVcIjtcclxuaW1wb3J0IEhlYWRlciBmcm9tIFwiLi4vY29tcG9uZW50cy9IZWFkZXJcIjtcclxuaW1wb3J0IERpYWxvZyBmcm9tIFwiLi4vY29tcG9uZW50cy9DdXN0b21EaWFsb2dcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEFwcCgpIHtcclxuICBjb25zdCBbaXNGb3JtT3Blbiwgc2V0Rm9ybUNsb3NlXSA9IHVzZVN0YXRlKHRydWUpO1xyXG4gIGNvbnN0IHsgaXNPcGVuLCBoYW5kbGVEaWFsb2dPcGVuLCBoYW5kbGVEaWFsb2dDbG9zZSB9ID0gdXNlRGlhbG9nSG9vaygpO1xyXG5cclxuICBjb25zdCBoYW5kbGVGb3JtQ2xvc2UgPSAoKSA9PiBzZXRGb3JtQ2xvc2UoIWlzRm9ybU9wZW4pO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPHNlY3Rpb24gY2xhc3NOYW1lPVwiQXBwXCI+XHJcbiAgICAgIDxIZWFkPlxyXG4gICAgICAgIDx0aXRsZT5UZXN0IEZ1bG9neTwvdGl0bGU+XHJcbiAgICAgICAgPGxpbmtcclxuICAgICAgICAgIGhyZWY9XCJodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PU9wZW4rU2Fuczp3Z2h0QDMwMDs0MDA7NjAwJmRpc3BsYXk9c3dhcFwiXHJcbiAgICAgICAgICByZWw9XCJzdHlsZXNoZWV0XCJcclxuICAgICAgICA+PC9saW5rPlxyXG4gICAgICAgIHsvKiA8bGluayByZWw9XCJpY29uXCIgaHJlZj1cIi9mYXZpY29uLmljb1wiIC8+ICovfVxyXG4gICAgICA8L0hlYWQ+XHJcbiAgICAgIDxtYWluPlxyXG4gICAgICAgIDxoMSBjbGFzc05hbWU9XCJIaWRkZW5cIj7QpNC+0YDQvNCwPC9oMT5cclxuICAgICAgICA8c2VjdGlvbiBjbGFzc05hbWU9e0FwcFN0eWxlcy5NYWluQ29udGVudH0+XHJcbiAgICAgICAgICA8SGVhZGVyIC8+XHJcbiAgICAgICAgICA8aDIgY2xhc3NOYW1lPXtBcHBTdHlsZXMuUHJvZmlsZUhlYWRlcn0+0JvQuNGH0L3Ri9C5INC/0YDQvtGE0LjQu9GMPC9oMj5cclxuICAgICAgICAgIDxoMyBjbGFzc05hbWU9e0FwcFN0eWxlcy5Qcm9maWxlUm91dGVzSGVhZGVyfT5cclxuICAgICAgICAgICAg0JPQu9Cw0LLQvdCw0Y8v0JvQuNGH0L3Ri9C5INC/0YDQvtGE0LjQu9GMXHJcbiAgICAgICAgICA8L2gzPlxyXG4gICAgICAgICAgPFByb2ZpbGVcclxuICAgICAgICAgICAgaGFuZGxlRGlhbG9nT3Blbj17aGFuZGxlRGlhbG9nT3Blbn1cclxuICAgICAgICAgICAgaXNGb3JtT3Blbj17aXNGb3JtT3Blbn1cclxuICAgICAgICAgICAgb25Gb3JtQ2xvc2U9e2hhbmRsZUZvcm1DbG9zZX1cclxuICAgICAgICAgIC8+XHJcbiAgICAgICAgICA8RGlhbG9nIGlzT3Blbj17aXNPcGVufSBvbkNsb3NlPXtoYW5kbGVEaWFsb2dDbG9zZX0gLz5cclxuICAgICAgICA8L3NlY3Rpb24+XHJcbiAgICAgIDwvbWFpbj5cclxuICAgIDwvc2VjdGlvbj5cclxuICApO1xyXG59XHJcbiIsIi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0ge1xuXHRcIkFwcFwiOiBcIkFwcF9BcHBfXzNMU04wXCIsXG5cdFwiUHJvZmlsZUhlYWRlclwiOiBcIkFwcF9Qcm9maWxlSGVhZGVyX18zbkFYZVwiLFxuXHRcIlByb2ZpbGVSb3V0ZXNIZWFkZXJcIjogXCJBcHBfUHJvZmlsZVJvdXRlc0hlYWRlcl9fMnJoOC1cIixcblx0XCJNYWluQ29udGVudFwiOiBcIkFwcF9NYWluQ29udGVudF9fMkhWcUdcIlxufTtcbiIsIi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0ge1xuXHRcIkN1c3RvbUJ1dHRvblwiOiBcIkN1c3RvbUJ1dHRvbl9DdXN0b21CdXR0b25fXzF3Tk9zXCJcbn07XG4iLCIvLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IHtcblx0XCJEaWFsb2dcIjogXCJDdXN0b21EaWFsb2dfRGlhbG9nX18xRk1YUlwiXG59O1xuIiwiLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSB7XG5cdFwiSGVhZGVyXCI6IFwiSGVhZGVyX0hlYWRlcl9fMTdWSmxcIixcblx0XCJOb3RpZmljYXRpb25zXCI6IFwiSGVhZGVyX05vdGlmaWNhdGlvbnNfX2x3dndnXCIsXG5cdFwiRGl2aWRlclwiOiBcIkhlYWRlcl9EaXZpZGVyX18zc0V6WVwiLFxuXHRcIkhlYWRlclVzZXJJbmZvXCI6IFwiSGVhZGVyX0hlYWRlclVzZXJJbmZvX18yam5iRlwiLFxuXHRcIlVzZXJJY29uXCI6IFwiSGVhZGVyX1VzZXJJY29uX19zUnRaZFwiXG59O1xuIiwiLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSB7XG5cdFwiUHJvZmlsZVwiOiBcIlByb2ZpbGVfUHJvZmlsZV9fMnZoaHJcIixcblx0XCJVc2VySW5mb011aVBhcGVyXCI6IFwiUHJvZmlsZV9Vc2VySW5mb011aVBhcGVyX19ULWxhUlwiLFxuXHRcIk1haW5JbmZvXCI6IFwiUHJvZmlsZV9NYWluSW5mb19fMzI5WmdcIixcblx0XCJQcm9maWxlVXNlckljb25cIjogXCJQcm9maWxlX1Byb2ZpbGVVc2VySWNvbl9fRlY2bDlcIixcblx0XCJVc2VyTmFtZVwiOiBcIlByb2ZpbGVfVXNlck5hbWVfXzNwRElrXCIsXG5cdFwiQ2xvc2VCdXR0b25cIjogXCJQcm9maWxlX0Nsb3NlQnV0dG9uX190RzFLY1wiLFxuXHRcIkNsb3NlSWNvblwiOiBcIlByb2ZpbGVfQ2xvc2VJY29uX18xMERNTFwiXG59O1xuIiwiLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSB7XG5cdFwiVXNlckZvcm1NdWlQYXBlclwiOiBcIlVzZXJGb3JtX1VzZXJGb3JtTXVpUGFwZXJfXzJJVGw2XCIsXG5cdFwiVXNlckZvcm1cIjogXCJVc2VyRm9ybV9Vc2VyRm9ybV9fM2ZMbXBcIixcblx0XCJNYWluRm9ybUNvbnRlbnRcIjogXCJVc2VyRm9ybV9NYWluRm9ybUNvbnRlbnRfXzNsRjJ4XCIsXG5cdFwiVGV4dEZpZWxkXCI6IFwiVXNlckZvcm1fVGV4dEZpZWxkX19lNGF6S1wiLFxuXHRcIkZpZWxkSXRlbVwiOiBcIlVzZXJGb3JtX0ZpZWxkSXRlbV9fNUJ2SkJcIixcblx0XCJGaWVsZEljb25cIjogXCJVc2VyRm9ybV9GaWVsZEljb25fXzM2QWZKXCIsXG5cdFwiRGl2aWRlclwiOiBcIlVzZXJGb3JtX0RpdmlkZXJfX2xHT2wzXCIsXG5cdFwiU3VjY2Vzc01lc3NhZ2VcIjogXCJVc2VyRm9ybV9TdWNjZXNzTWVzc2FnZV9fMUFLaVJcIlxufTtcbiIsImV4cG9ydCBjb25zdCBWYWxpZGF0ZU1lc3NhZ2UgPSB7XHJcbiAgUkVRVUlSRUQ6IFwicmVxdWlyZWRcIixcclxuICBOQU1FOiBcItCd0LXQstC10YDQvdC+0LUg0LjQvNGPXCIsXHJcbiAgRU1BSUw6IFwi0J3QtdCy0LXRgNC90YvQuSDQsNC00YDQtdGBXCIsXHJcbiAgUEhPTkU6IFwi0J3QtdCy0LXRgNC90YvQuSDQvdC+0LzQtdGAINGC0LXQu9C10YTQvtC90LBcIixcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBpc0ZpZWxkRXJyb3IgPSAobWV0YSkgPT4gQm9vbGVhbihtZXRhLmVycm9yICYmIG1ldGEuc3VibWl0RmFpbGVkKTtcclxuXHJcbmV4cG9ydCBjb25zdCB2YWxpZGF0ZUZvcm0gPSAodmFsdWVzKSA9PiB7XHJcbiAgY29uc3QgZXJyb3JzID0ge307XHJcbiAgaWYgKCF2YWx1ZXMudXNlck5hbWUgJiYgIXZhbHVlcy5waG9uZU51bWJlciAmJiAhdmFsdWVzLmVtYWlsKSB7XHJcbiAgICBlcnJvcnMudXNlck5hbWUgPSBWYWxpZGF0ZU1lc3NhZ2UuUkVRVUlSRUQ7XHJcbiAgICBlcnJvcnMucGhvbmVOdW1iZXIgPSBWYWxpZGF0ZU1lc3NhZ2UuUkVRVUlSRUQ7XHJcbiAgICBlcnJvcnMuZW1haWwgPSBWYWxpZGF0ZU1lc3NhZ2UuUkVRVUlSRUQ7XHJcbiAgfVxyXG4gIGlmICh2YWx1ZXMudXNlck5hbWUgJiYgdmFsdWVzLnVzZXJOYW1lID09IFwi0LjQvNGPXCIpIHtcclxuICAgIGVycm9ycy51c2VyTmFtZSA9IFZhbGlkYXRlTWVzc2FnZS5OQU1FO1xyXG4gIH1cclxuICByZXR1cm4gZXJyb3JzO1xyXG59O1xyXG4iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAbWF0ZXJpYWwtdWkvY29yZS9CdXR0b25cIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQG1hdGVyaWFsLXVpL2NvcmUvQ2lyY3VsYXJQcm9ncmVzc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAbWF0ZXJpYWwtdWkvY29yZS9EaWFsb2dcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQG1hdGVyaWFsLXVpL2NvcmUvRm9ybUhlbHBlclRleHRcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQG1hdGVyaWFsLXVpL2NvcmUvSWNvbkJ1dHRvblwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAbWF0ZXJpYWwtdWkvY29yZS9QYXBlclwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAbWF0ZXJpYWwtdWkvY29yZS9UZXh0RmllbGRcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQG1hdGVyaWFsLXVpL2ljb25zL0Nsb3NlXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBtYXRlcmlhbC11aS9pY29ucy9LZXlib2FyZEFycm93RG93blwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJheGlvc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L2hlYWRcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3RcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QtZmluYWwtZm9ybVwiKTsiXSwic291cmNlUm9vdCI6IiJ9