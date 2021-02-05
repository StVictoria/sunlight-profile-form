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
      lineNumber: 48,
      columnNumber: 5
    }
  }, __jsx(_material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_1___default.a, {
    className: _styles_Profile_module_scss__WEBPACK_IMPORTED_MODULE_6___default.a.UserInfoMuiPaper,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49,
      columnNumber: 7
    }
  }, __jsx("section", {
    className: _styles_Profile_module_scss__WEBPACK_IMPORTED_MODULE_6___default.a.MainInfo,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: `${_styles_Profile_module_scss__WEBPACK_IMPORTED_MODULE_6___default.a.ProfileUserIcon} UserIcon`,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51,
      columnNumber: 11
    }
  }), __jsx("p", {
    className: _styles_Profile_module_scss__WEBPACK_IMPORTED_MODULE_6___default.a.UserName,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52,
      columnNumber: 11
    }
  }, size.width < 969 ? "Иванова А. М." : "Иванова Анна Михайловна")), size.width < 959 ? __jsx(_material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_3___default.a, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58,
      columnNumber: 11
    }
  }, __jsx(_material_ui_icons_Close__WEBPACK_IMPORTED_MODULE_4___default.a, {
    color: "primary",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59,
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
        lineNumber: 68,
        columnNumber: 17
      }
    }) : __jsx(_material_ui_icons_KeyboardArrowDown__WEBPACK_IMPORTED_MODULE_5___default.a, {
      className: _styles_Profile_module_scss__WEBPACK_IMPORTED_MODULE_6___default.a.CloseIcon,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 70,
        columnNumber: 17
      }
    }),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62,
      columnNumber: 11
    }
  }, isFormOpen ? "Закрыть" : "Открыть")), __jsx(_UserForm_js__WEBPACK_IMPORTED_MODULE_7__["default"], {
    handleDialogOpen: handleDialogOpen,
    isFormOpen: isFormOpen,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 78,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9DdXN0b21EaWFsb2cuanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9FcnJvck1lc3NhZ2UuanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9IZWFkZXIuanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9Qcm9maWxlLmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvVXNlckZvcm0uanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9jb21tb24vQ3VzdG9tQnV0dG9uLmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvdXNlRGlhbG9nSG9vay5qcyIsIndlYnBhY2s6Ly8vLi9wYWdlcy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zdHlsZXMvQXBwLm1vZHVsZS5zY3NzIiwid2VicGFjazovLy8uL3N0eWxlcy9DdXN0b21CdXR0b24ubW9kdWxlLnNjc3MiLCJ3ZWJwYWNrOi8vLy4vc3R5bGVzL0N1c3RvbURpYWxvZy5tb2R1bGUuc2NzcyIsIndlYnBhY2s6Ly8vLi9zdHlsZXMvSGVhZGVyLm1vZHVsZS5zY3NzIiwid2VicGFjazovLy8uL3N0eWxlcy9Qcm9maWxlLm1vZHVsZS5zY3NzIiwid2VicGFjazovLy8uL3N0eWxlcy9Vc2VyRm9ybS5tb2R1bGUuc2NzcyIsIndlYnBhY2s6Ly8vLi91dGlscy92YWxpZGF0ZS5qcyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAbWF0ZXJpYWwtdWkvY29yZS9CdXR0b25cIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAbWF0ZXJpYWwtdWkvY29yZS9DaXJjdWxhclByb2dyZXNzXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQG1hdGVyaWFsLXVpL2NvcmUvRGlhbG9nXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQG1hdGVyaWFsLXVpL2NvcmUvRm9ybUhlbHBlclRleHRcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAbWF0ZXJpYWwtdWkvY29yZS9JY29uQnV0dG9uXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQG1hdGVyaWFsLXVpL2NvcmUvUGFwZXJcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAbWF0ZXJpYWwtdWkvY29yZS9UZXh0RmllbGRcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAbWF0ZXJpYWwtdWkvaWNvbnMvQ2xvc2VcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAbWF0ZXJpYWwtdWkvaWNvbnMvS2V5Ym9hcmRBcnJvd0Rvd25cIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJheGlvc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcIm5leHQvaGVhZFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3QtZmluYWwtZm9ybVwiIl0sIm5hbWVzIjpbIkN1c3RvbURpYWxvZyIsImlzT3BlbiIsIm9uQ2xvc2UiLCJDdXN0b21EaWFsb2dTdHlsZXMiLCJEaWFsb2ciLCJFcnJvck1lc3NhZ2UiLCJtZXRhIiwibm9FcnJvck1lc3NhZ2UiLCJpc0ZpZWxkRXJyb3IiLCJlcnJvciIsIlZhbGlkYXRlTWVzc2FnZSIsIlJFUVVJUkVEIiwiSGVhZGVyIiwiSGVhZGVyU3R5bGVzIiwiTm90aWZpY2F0aW9ucyIsIkRpdmlkZXIiLCJIZWFkZXJVc2VySW5mbyIsIlVzZXJJY29uIiwiVXNlck5hbWUiLCJ1c2VXaW5kb3dTaXplIiwid2luZG93U2l6ZSIsInNldFdpbmRvd1NpemUiLCJ1c2VTdGF0ZSIsIndpZHRoIiwidW5kZWZpbmVkIiwiaGVpZ2h0IiwidXNlRWZmZWN0IiwiUHJvZmlsZSIsImlzRm9ybU9wZW4iLCJvbkZvcm1DbG9zZSIsImhhbmRsZURpYWxvZ09wZW4iLCJzaXplIiwiY29uc29sZSIsImxvZyIsIlByb2ZpbGVTdHlsZXMiLCJVc2VySW5mb011aVBhcGVyIiwiTWFpbkluZm8iLCJQcm9maWxlVXNlckljb24iLCJDbG9zZUJ1dHRvbiIsIkNsb3NlSWNvbiIsImZpZWxkcyIsImlkIiwibmFtZSIsImxhYmVsIiwicGxhY2Vob2xkZXIiLCJ0eXBlIiwiaWNvblBhdGgiLCJVc2VyRm9ybSIsImlzTG9hZGluZyIsInNldExvYWRpbmciLCJpc0Vycm9yIiwic2V0RXJyb3IiLCJoYW5kbGVGb3JtU3VibWl0IiwidmFsdWVzIiwicmVzcG9uc2UiLCJheGlvcyIsInBvc3QiLCJKU09OIiwic3RyaW5naWZ5IiwicmVuZGVyVXNlckZvcm0iLCJtYXAiLCJmaWVsZCIsIlVzZXJGb3JtU3R5bGVzIiwiVGV4dEZpZWxkIiwiaW5wdXQiLCJyZXN0IiwiRmllbGRJdGVtIiwiRmllbGRJY29uIiwibGVuZ3RoIiwiVXNlckZvcm1NdWlQYXBlciIsImRpc3BsYXkiLCJ2YWxpZGF0ZUZvcm0iLCJoYW5kbGVTdWJtaXQiLCJNYWluRm9ybUNvbnRlbnQiLCJDdXN0b21CdXR0b24iLCJvbkNsaWNrIiwiQ3VzdG9tQnV0dG9uU3R5bGVzIiwidXNlRGlhbG9nSG9vayIsInNldERpYWxvZ09wZW4iLCJoYW5kbGVEaWFsb2dDbG9zZSIsIkFwcCIsInNldEZvcm1DbG9zZSIsImhhbmRsZUZvcm1DbG9zZSIsIkFwcFN0eWxlcyIsIk1haW5Db250ZW50IiwiUHJvZmlsZUhlYWRlciIsIlByb2ZpbGVSb3V0ZXNIZWFkZXIiLCJOQU1FIiwiRU1BSUwiLCJQSE9ORSIsIkJvb2xlYW4iLCJzdWJtaXRGYWlsZWQiLCJlcnJvcnMiLCJ1c2VyTmFtZSIsInBob25lTnVtYmVyIiwiZW1haWwiXSwibWFwcGluZ3MiOiI7O1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSxJQUFJO1FBQ0o7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxn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QUEvQjtBQUNEOztBQUNELE1BQUkwQyxNQUFNLENBQUN3QyxRQUFQLElBQW1CeEMsTUFBTSxDQUFDd0MsUUFBUCxJQUFtQixLQUExQyxFQUFpRDtBQUMvQ0QsVUFBTSxDQUFDQyxRQUFQLEdBQWtCbkYsZUFBZSxDQUFDNkUsSUFBbEM7QUFDRDs7QUFDRCxTQUFPSyxNQUFQO0FBQ0QsQ0FYTSxDOzs7Ozs7Ozs7OztBQ1RQLHFEOzs7Ozs7Ozs7OztBQ0FBLCtEOzs7Ozs7Ozs7OztBQ0FBLHFEOzs7Ozs7Ozs7OztBQ0FBLDZEOzs7Ozs7Ozs7OztBQ0FBLHlEOzs7Ozs7Ozs7OztBQ0FBLG9EOzs7Ozs7Ozs7OztBQ0FBLHdEOzs7Ozs7Ozs7OztBQ0FBLHFEOzs7Ozs7Ozs7OztBQ0FBLGlFOzs7Ozs7Ozs7OztBQ0FBLGtDOzs7Ozs7Ozs7OztBQ0FBLHNDOzs7Ozs7Ozs7OztBQ0FBLGtDOzs7Ozs7Ozs7OztBQ0FBLDZDIiwiZmlsZSI6InBhZ2VzL2luZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSByZXF1aXJlKCcuLi9zc3ItbW9kdWxlLWNhY2hlLmpzJyk7XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdHZhciB0aHJldyA9IHRydWU7XG4gXHRcdHRyeSB7XG4gXHRcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG4gXHRcdFx0dGhyZXcgPSBmYWxzZTtcbiBcdFx0fSBmaW5hbGx5IHtcbiBcdFx0XHRpZih0aHJldykgZGVsZXRlIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdO1xuIFx0XHR9XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9wYWdlcy9pbmRleC5qc1wiKTtcbiIsImltcG9ydCBEaWFsb2cgZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlL0RpYWxvZ1wiO1xyXG5cclxuaW1wb3J0IEN1c3RvbURpYWxvZ1N0eWxlcyBmcm9tIFwiLi4vc3R5bGVzL0N1c3RvbURpYWxvZy5tb2R1bGUuc2Nzc1wiO1xyXG5pbXBvcnQgQ3VzdG9tQnV0dG9uIGZyb20gXCIuL2NvbW1vbi9DdXN0b21CdXR0b25cIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEN1c3RvbURpYWxvZyh7IGlzT3Blbiwgb25DbG9zZSB9KSB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxEaWFsb2dcclxuICAgICAgb3Blbj17aXNPcGVufVxyXG4gICAgICBjbGFzc05hbWU9e0N1c3RvbURpYWxvZ1N0eWxlcy5EaWFsb2d9XHJcbiAgICAgIG9uQ2xvc2U9e29uQ2xvc2V9XHJcbiAgICA+XHJcbiAgICAgIDxoND7QlNCw0L3QvdGL0LUg0YPRgdC/0LXRiNC90L4g0YHQvtGF0YDQsNC90LXQvdGLPC9oND5cclxuICAgICAgPEN1c3RvbUJ1dHRvbiBuYW1lPVwi0JfQsNC60YDRi9GC0YxcIiBvbkNsaWNrPXtvbkNsb3NlfSAvPlxyXG4gICAgPC9EaWFsb2c+XHJcbiAgKTtcclxufVxyXG4iLCJpbXBvcnQgRm9ybUhlbHBlclRleHQgZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlL0Zvcm1IZWxwZXJUZXh0XCI7XHJcblxyXG5pbXBvcnQgeyBpc0ZpZWxkRXJyb3IgfSBmcm9tIFwiLi4vdXRpbHMvdmFsaWRhdGVcIjtcclxuaW1wb3J0IHsgVmFsaWRhdGVNZXNzYWdlIH0gZnJvbSBcIi4uL3V0aWxzL3ZhbGlkYXRlXCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBFcnJvck1lc3NhZ2UoeyBtZXRhLCBub0Vycm9yTWVzc2FnZSB9KSB7XHJcbiAgaWYgKG5vRXJyb3JNZXNzYWdlKSB7XHJcbiAgICByZXR1cm4gbnVsbDtcclxuICB9XHJcbiAgcmV0dXJuIChcclxuICAgIGlzRmllbGRFcnJvcihtZXRhKSAmJlxyXG4gICAgbWV0YS5lcnJvciAhPT0gVmFsaWRhdGVNZXNzYWdlLlJFUVVJUkVEICYmIChcclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJFcnJvck1lc3NhZ2VcIj5cclxuICAgICAgICA8Rm9ybUhlbHBlclRleHQgZXJyb3I+e21ldGEuZXJyb3J9PC9Gb3JtSGVscGVyVGV4dD5cclxuICAgICAgPC9kaXY+XHJcbiAgICApXHJcbiAgKTtcclxufVxyXG4iLCJpbXBvcnQgSGVhZGVyU3R5bGVzIGZyb20gXCIuLi9zdHlsZXMvSGVhZGVyLm1vZHVsZS5zY3NzXCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBIZWFkZXIoKSB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxzZWN0aW9uIGNsYXNzTmFtZT17SGVhZGVyU3R5bGVzLkhlYWRlcn0+XHJcbiAgICAgIDxpbWdcclxuICAgICAgICBzcmM9XCIvbm90aWZpY2F0aW9uLnBuZ1wiXHJcbiAgICAgICAgY2xhc3NOYW1lPXtIZWFkZXJTdHlsZXMuTm90aWZpY2F0aW9uc31cclxuICAgICAgICBhbHQ9XCJub3RpZmljYXRpb25zXCJcclxuICAgICAgLz5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9e0hlYWRlclN0eWxlcy5EaXZpZGVyfSAvPlxyXG4gICAgICA8c2VjdGlvbiBjbGFzc05hbWU9e0hlYWRlclN0eWxlcy5IZWFkZXJVc2VySW5mb30+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e2Ake0hlYWRlclN0eWxlcy5Vc2VySWNvbn0gVXNlckljb25gfSAvPlxyXG4gICAgICAgIDxwIGNsYXNzTmFtZT17SGVhZGVyU3R5bGVzLlVzZXJOYW1lfT7QmNCy0LDQvdC+0LLQsCDQkC48L3A+XHJcbiAgICAgIDwvc2VjdGlvbj5cclxuICAgIDwvc2VjdGlvbj5cclxuICApO1xyXG59XHJcbiIsImltcG9ydCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IFBhcGVyIGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZS9QYXBlclwiO1xyXG5pbXBvcnQgQnV0dG9uIGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZS9CdXR0b25cIjtcclxuaW1wb3J0IEljb25CdXR0b24gZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlL0ljb25CdXR0b25cIjtcclxuaW1wb3J0IENsb3NlSWNvbiBmcm9tIFwiQG1hdGVyaWFsLXVpL2ljb25zL0Nsb3NlXCI7XHJcbmltcG9ydCBLZXlib2FyZEFycm93RG93bkljb24gZnJvbSBcIkBtYXRlcmlhbC11aS9pY29ucy9LZXlib2FyZEFycm93RG93blwiO1xyXG5cclxuaW1wb3J0IFByb2ZpbGVTdHlsZXMgZnJvbSBcIi4uL3N0eWxlcy9Qcm9maWxlLm1vZHVsZS5zY3NzXCI7XHJcbmltcG9ydCBVc2VyRm9ybSBmcm9tIFwiLi9Vc2VyRm9ybS5qc1wiO1xyXG5cclxuZnVuY3Rpb24gdXNlV2luZG93U2l6ZSgpIHtcclxuICAvLyBJbml0aWFsaXplIHN0YXRlIHdpdGggdW5kZWZpbmVkIHdpZHRoL2hlaWdodCBzbyBzZXJ2ZXIgYW5kIGNsaWVudCByZW5kZXJzIG1hdGNoXHJcbiAgLy8gTGVhcm4gbW9yZSBoZXJlOiBodHRwczovL2pvc2h3Y29tZWF1LmNvbS9yZWFjdC90aGUtcGVyaWxzLW9mLXJlaHlkcmF0aW9uL1xyXG4gIGNvbnN0IFt3aW5kb3dTaXplLCBzZXRXaW5kb3dTaXplXSA9IHVzZVN0YXRlKHtcclxuICAgIHdpZHRoOiB1bmRlZmluZWQsXHJcbiAgICBoZWlnaHQ6IHVuZGVmaW5lZCxcclxuICB9KTtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIC8vIG9ubHkgZXhlY3V0ZSBhbGwgdGhlIGNvZGUgYmVsb3cgaW4gY2xpZW50IHNpZGVcclxuICAgIGlmICh0eXBlb2Ygd2luZG93ICE9PSBcInVuZGVmaW5lZFwiKSB7XHJcbiAgICAgIC8vIEhhbmRsZXIgdG8gY2FsbCBvbiB3aW5kb3cgcmVzaXplXHJcbiAgICAgIGZ1bmN0aW9uIGhhbmRsZVJlc2l6ZSgpIHtcclxuICAgICAgICAvLyBTZXQgd2luZG93IHdpZHRoL2hlaWdodCB0byBzdGF0ZVxyXG4gICAgICAgIHNldFdpbmRvd1NpemUoe1xyXG4gICAgICAgICAgd2lkdGg6IHdpbmRvdy5pbm5lcldpZHRoLFxyXG4gICAgICAgICAgaGVpZ2h0OiB3aW5kb3cuaW5uZXJIZWlnaHQsXHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC8vIEFkZCBldmVudCBsaXN0ZW5lclxyXG4gICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcInJlc2l6ZVwiLCBoYW5kbGVSZXNpemUpO1xyXG5cclxuICAgICAgLy8gQ2FsbCBoYW5kbGVyIHJpZ2h0IGF3YXkgc28gc3RhdGUgZ2V0cyB1cGRhdGVkIHdpdGggaW5pdGlhbCB3aW5kb3cgc2l6ZVxyXG4gICAgICBoYW5kbGVSZXNpemUoKTtcclxuXHJcbiAgICAgIC8vIFJlbW92ZSBldmVudCBsaXN0ZW5lciBvbiBjbGVhbnVwXHJcbiAgICAgIHJldHVybiAoKSA9PiB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcihcInJlc2l6ZVwiLCBoYW5kbGVSZXNpemUpO1xyXG4gICAgfVxyXG4gIH0sIFtdKTsgLy8gRW1wdHkgYXJyYXkgZW5zdXJlcyB0aGF0IGVmZmVjdCBpcyBvbmx5IHJ1biBvbiBtb3VudFxyXG4gIHJldHVybiB3aW5kb3dTaXplO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBQcm9maWxlKHsgaXNGb3JtT3Blbiwgb25Gb3JtQ2xvc2UsIGhhbmRsZURpYWxvZ09wZW4gfSkge1xyXG4gIGNvbnN0IHNpemUgPSB1c2VXaW5kb3dTaXplKCk7XHJcbiAgY29uc29sZS5sb2coc2l6ZSk7XHJcbiAgcmV0dXJuIChcclxuICAgIDxzZWN0aW9uIGNsYXNzTmFtZT17UHJvZmlsZVN0eWxlcy5Qcm9maWxlfT5cclxuICAgICAgPFBhcGVyIGNsYXNzTmFtZT17UHJvZmlsZVN0eWxlcy5Vc2VySW5mb011aVBhcGVyfT5cclxuICAgICAgICA8c2VjdGlvbiBjbGFzc05hbWU9e1Byb2ZpbGVTdHlsZXMuTWFpbkluZm99PlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2Ake1Byb2ZpbGVTdHlsZXMuUHJvZmlsZVVzZXJJY29ufSBVc2VySWNvbmB9IC8+XHJcbiAgICAgICAgICA8cCBjbGFzc05hbWU9e1Byb2ZpbGVTdHlsZXMuVXNlck5hbWV9PlxyXG4gICAgICAgICAgICB7c2l6ZS53aWR0aCA8IDk2OSA/IFwi0JjQstCw0L3QvtCy0LAg0JAuINCcLlwiIDogXCLQmNCy0LDQvdC+0LLQsCDQkNC90L3QsCDQnNC40YXQsNC50LvQvtCy0L3QsFwifVxyXG4gICAgICAgICAgPC9wPlxyXG4gICAgICAgIDwvc2VjdGlvbj5cclxuXHJcbiAgICAgICAge3NpemUud2lkdGggPCA5NTkgPyAoXHJcbiAgICAgICAgICA8SWNvbkJ1dHRvbj5cclxuICAgICAgICAgICAgPENsb3NlSWNvbiBjb2xvcj1cInByaW1hcnlcIiAvPlxyXG4gICAgICAgICAgPC9JY29uQnV0dG9uPlxyXG4gICAgICAgICkgOiAoXHJcbiAgICAgICAgICA8QnV0dG9uXHJcbiAgICAgICAgICAgIGNsYXNzTmFtZT17UHJvZmlsZVN0eWxlcy5DbG9zZUJ1dHRvbn1cclxuICAgICAgICAgICAgb25DbGljaz17b25Gb3JtQ2xvc2V9XHJcbiAgICAgICAgICAgIGNvbG9yPVwicHJpbWFyeVwiXHJcbiAgICAgICAgICAgIGVuZEljb249e1xyXG4gICAgICAgICAgICAgIGlzRm9ybU9wZW4gPyAoXHJcbiAgICAgICAgICAgICAgICA8Q2xvc2VJY29uIGNsYXNzTmFtZT17UHJvZmlsZVN0eWxlcy5DbG9zZUljb259IC8+XHJcbiAgICAgICAgICAgICAgKSA6IChcclxuICAgICAgICAgICAgICAgIDxLZXlib2FyZEFycm93RG93bkljb24gY2xhc3NOYW1lPXtQcm9maWxlU3R5bGVzLkNsb3NlSWNvbn0gLz5cclxuICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgID5cclxuICAgICAgICAgICAge2lzRm9ybU9wZW4gPyBcItCX0LDQutGA0YvRgtGMXCIgOiBcItCe0YLQutGA0YvRgtGMXCJ9XHJcbiAgICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgICApfVxyXG4gICAgICA8L1BhcGVyPlxyXG4gICAgICA8VXNlckZvcm0gaGFuZGxlRGlhbG9nT3Blbj17aGFuZGxlRGlhbG9nT3Blbn0gaXNGb3JtT3Blbj17aXNGb3JtT3Blbn0gLz5cclxuICAgIDwvc2VjdGlvbj5cclxuICApO1xyXG59XHJcbiIsImltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIjtcclxuaW1wb3J0IFBhcGVyIGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZS9QYXBlclwiO1xyXG5pbXBvcnQgeyBGb3JtLCBGaWVsZCB9IGZyb20gXCJyZWFjdC1maW5hbC1mb3JtXCI7XHJcbmltcG9ydCBUZXh0RmllbGQgZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlL1RleHRGaWVsZFwiO1xyXG5cclxuaW1wb3J0IFVzZXJGb3JtU3R5bGVzIGZyb20gXCIuLi9zdHlsZXMvVXNlckZvcm0ubW9kdWxlLnNjc3NcIjtcclxuaW1wb3J0IHsgdmFsaWRhdGVGb3JtLCBpc0ZpZWxkRXJyb3IgfSBmcm9tIFwiLi4vdXRpbHMvdmFsaWRhdGVcIjtcclxuaW1wb3J0IEVycm9yTWVzc2FnZSBmcm9tIFwiLi9FcnJvck1lc3NhZ2VcIjtcclxuaW1wb3J0IEN1c3RvbUJ1dHRvbiBmcm9tIFwiLi9jb21tb24vQ3VzdG9tQnV0dG9uXCI7XHJcblxyXG5jb25zdCBmaWVsZHMgPSBbXHJcbiAge1xyXG4gICAgaWQ6IDAsXHJcbiAgICBuYW1lOiBcInVzZXJOYW1lXCIsXHJcbiAgICBsYWJlbDogXCLQpNCw0LzQuNC70LjRjyDQuCDQuNC80Y9cIixcclxuICAgIHBsYWNlaG9sZGVyOiBcItCj0LrQsNC20LjRgtC1INCS0LDRiNGDINCy0LDQvNC40LvQuNGOINC4INC40LzRj1wiLFxyXG4gICAgdHlwZTogXCJ0ZXh0XCIsXHJcbiAgICBpY29uUGF0aDogXCIvYmFkZ2UucG5nXCIsXHJcbiAgfSxcclxuICB7XHJcbiAgICBpZDogMSxcclxuICAgIG5hbWU6IFwiZW1haWxcIixcclxuICAgIGxhYmVsOiBcIkUtbWFpbFwiLFxyXG4gICAgcGxhY2Vob2xkZXI6IFwiaXZhbm92YUBtYWlsLnJ1XCIsXHJcbiAgICB0eXBlOiBcImVtYWlsXCIsXHJcbiAgICBpY29uUGF0aDogXCIvbWFpbC5wbmdcIixcclxuICB9LFxyXG4gIHtcclxuICAgIGlkOiAyLFxyXG4gICAgbmFtZTogXCJwaG9uZU51bWJlclwiLFxyXG4gICAgbGFiZWw6IFwi0J3QvtC80LXRgCDRgtC10LvQtdGE0L7QvdCwXCIsXHJcbiAgICB0eXBlOiBcInRlbFwiLFxyXG4gICAgcGxhY2Vob2xkZXI6IFwi0KPQutCw0LbQuNGC0LUg0L3QvtC80LXRgCDRgtC10LvQtdGE0L7QvdCwXCIsXHJcbiAgICBpY29uUGF0aDogXCIvcGhvbmUucG5nXCIsXHJcbiAgfSxcclxuXTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFVzZXJGb3JtKHsgaXNGb3JtT3BlbiwgaGFuZGxlRGlhbG9nT3BlbiB9KSB7XHJcbiAgY29uc3QgW2lzTG9hZGluZywgc2V0TG9hZGluZ10gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgY29uc3QgW2lzRXJyb3IsIHNldEVycm9yXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuXHJcbiAgYXN5bmMgZnVuY3Rpb24gaGFuZGxlRm9ybVN1Ym1pdCh2YWx1ZXMpIHtcclxuICAgIHRyeSB7XHJcbiAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgYXhpb3MucG9zdChcclxuICAgICAgICBcImh0dHA6Ly9sb2NhbGhvc3Q6MzAwNS9hcGlcIixcclxuICAgICAgICBKU09OLnN0cmluZ2lmeSh2YWx1ZXMpXHJcbiAgICAgICk7XHJcbiAgICAgIHNldExvYWRpbmcodHJ1ZSk7XHJcbiAgICAgIGNvbnNvbGUubG9nKHJlc3BvbnNlKTtcclxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgIGNvbnNvbGUubG9nKGVycm9yKTtcclxuICAgICAgc2V0TG9hZGluZyhmYWxzZSk7XHJcbiAgICB9XHJcbiAgICBzZXRMb2FkaW5nKGZhbHNlKTtcclxuICAgIGhhbmRsZURpYWxvZ09wZW4oKTtcclxuICB9XHJcblxyXG4gIGNvbnN0IHJlbmRlclVzZXJGb3JtID0gKGZpZWxkcykgPT5cclxuICAgIGZpZWxkcy5tYXAoKGZpZWxkKSA9PiAoXHJcbiAgICAgIDxSZWFjdC5GcmFnbWVudCBrZXk9e2ZpZWxkLmlkfT5cclxuICAgICAgICA8RmllbGRcclxuICAgICAgICAgIG5hbWU9e2ZpZWxkLm5hbWV9XHJcbiAgICAgICAgICBjbGFzc05hbWU9e1VzZXJGb3JtU3R5bGVzLlRleHRGaWVsZH1cclxuICAgICAgICAgIHJlbmRlcj17KHsgaW5wdXQsIG1ldGEsIC4uLnJlc3QgfSkgPT4gKFxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17VXNlckZvcm1TdHlsZXMuRmllbGRJdGVtfT5cclxuICAgICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj17ZmllbGQuaWR9PlxyXG4gICAgICAgICAgICAgICAgPGltZ1xyXG4gICAgICAgICAgICAgICAgICBzcmM9e2ZpZWxkLmljb25QYXRofVxyXG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e1VzZXJGb3JtU3R5bGVzLkZpZWxkSWNvbn1cclxuICAgICAgICAgICAgICAgICAgYWx0PXtmaWVsZC5sYWJlbH1cclxuICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgPC9sYWJlbD5cclxuICAgICAgICAgICAgICA8VGV4dEZpZWxkXHJcbiAgICAgICAgICAgICAgICBpZD17ZmllbGQubmFtZX1cclxuICAgICAgICAgICAgICAgIHsuLi5pbnB1dH1cclxuICAgICAgICAgICAgICAgIHsuLi5yZXN0fVxyXG4gICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9e2ZpZWxkLnBsYWNlaG9sZGVyfVxyXG4gICAgICAgICAgICAgICAgdHlwZT17ZmllbGQudHlwZX1cclxuICAgICAgICAgICAgICAgIGVycm9yPXtpc0ZpZWxkRXJyb3IobWV0YSl9XHJcbiAgICAgICAgICAgICAgICBsYWJlbD17ZmllbGQubGFiZWx9XHJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9e1VzZXJGb3JtU3R5bGVzLlRleHRGaWVsZH1cclxuICAgICAgICAgICAgICAgIHZhcmlhbnQ9XCJvdXRsaW5lZFwiXHJcbiAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICA8RXJyb3JNZXNzYWdlIG1ldGE9e21ldGF9IC8+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgKX1cclxuICAgICAgICAvPlxyXG4gICAgICAgIHtmaWVsZHMubGVuZ3RoIC0gMSAhPT0gZmllbGQuaWQgPyAoXHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17VXNlckZvcm1TdHlsZXMuRGl2aWRlcn0gLz5cclxuICAgICAgICApIDogbnVsbH1cclxuICAgICAgPC9SZWFjdC5GcmFnbWVudD5cclxuICAgICkpO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPFBhcGVyXHJcbiAgICAgIGNsYXNzTmFtZT17VXNlckZvcm1TdHlsZXMuVXNlckZvcm1NdWlQYXBlcn1cclxuICAgICAgc3R5bGU9e2lzRm9ybU9wZW4gPyB7IGRpc3BsYXk6IFwiYmxvY2tcIiB9IDogeyBkaXNwbGF5OiBcIm5vbmVcIiB9fVxyXG4gICAgPlxyXG4gICAgICA8Rm9ybVxyXG4gICAgICAgIG9uU3VibWl0PXtoYW5kbGVGb3JtU3VibWl0fVxyXG4gICAgICAgIHZhbGlkYXRlPXt2YWxpZGF0ZUZvcm19XHJcbiAgICAgICAgcmVuZGVyPXsoeyBoYW5kbGVTdWJtaXQsIHZhbHVlcyB9KSA9PiAoXHJcbiAgICAgICAgICA8Zm9ybSBvblN1Ym1pdD17aGFuZGxlU3VibWl0fSBjbGFzc05hbWU9e1VzZXJGb3JtU3R5bGVzLlVzZXJGb3JtfT5cclxuICAgICAgICAgICAgPHNlY3Rpb24gY2xhc3NOYW1lPXtVc2VyRm9ybVN0eWxlcy5NYWluRm9ybUNvbnRlbnR9PlxyXG4gICAgICAgICAgICAgIHtyZW5kZXJVc2VyRm9ybShmaWVsZHMpfVxyXG4gICAgICAgICAgICA8L3NlY3Rpb24+XHJcblxyXG4gICAgICAgICAgICA8Q3VzdG9tQnV0dG9uXHJcbiAgICAgICAgICAgICAgaXNMb2FkaW5nPXtpc0xvYWRpbmd9XHJcbiAgICAgICAgICAgICAgbmFtZT1cItCh0L7RhdGA0LDQvdC40YLRjCDQuNC30LzQtdC90LXQvdC40Y9cIlxyXG4gICAgICAgICAgICAgIHR5cGU9XCJzdWJtaXRcIlxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgPC9mb3JtPlxyXG4gICAgICAgICl9XHJcbiAgICAgIC8+XHJcbiAgICA8L1BhcGVyPlxyXG4gICk7XHJcbn1cclxuIiwiaW1wb3J0IEN1c3RvbUJ1dHRvblN0eWxlcyBmcm9tIFwiLi4vLi4vc3R5bGVzL0N1c3RvbUJ1dHRvbi5tb2R1bGUuc2Nzc1wiO1xyXG5pbXBvcnQgQ2lyY3VsYXJQcm9ncmVzcyBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvQ2lyY3VsYXJQcm9ncmVzc1wiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQ3VzdG9tQnV0dG9uKHsgaXNMb2FkaW5nLCBuYW1lLCB0eXBlLCBvbkNsaWNrIH0pIHtcclxuICByZXR1cm4gKFxyXG4gICAgPGJ1dHRvblxyXG4gICAgICB0eXBlPXt0eXBlfVxyXG4gICAgICBjbGFzc05hbWU9e0N1c3RvbUJ1dHRvblN0eWxlcy5DdXN0b21CdXR0b259XHJcbiAgICAgIG9uQ2xpY2s9e29uQ2xpY2t9XHJcbiAgICA+XHJcbiAgICAgIHtpc0xvYWRpbmcgPyA8Q2lyY3VsYXJQcm9ncmVzcyBkaXNhYmxlU2hyaW5rIC8+IDogbmFtZX1cclxuICAgIDwvYnV0dG9uPlxyXG4gICk7XHJcbn1cclxuIiwiaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHVzZURpYWxvZ0hvb2soKSB7XHJcbiAgY29uc3QgW2lzT3Blbiwgc2V0RGlhbG9nT3Blbl0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcblxyXG4gIGNvbnN0IGhhbmRsZURpYWxvZ09wZW4gPSAoKSA9PiB7XHJcbiAgICBzZXREaWFsb2dPcGVuKHRydWUpO1xyXG4gICAgY29uc29sZS5sb2coXCJvcGVuXCIpO1xyXG4gIH07XHJcbiAgY29uc3QgaGFuZGxlRGlhbG9nQ2xvc2UgPSAoKSA9PiBzZXREaWFsb2dPcGVuKGZhbHNlKTtcclxuXHJcbiAgcmV0dXJuIHsgaXNPcGVuLCBoYW5kbGVEaWFsb2dPcGVuLCBoYW5kbGVEaWFsb2dDbG9zZSB9O1xyXG59XHJcbiIsImltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBIZWFkIGZyb20gXCJuZXh0L2hlYWRcIjtcclxuXHJcbmltcG9ydCBBcHBTdHlsZXMgZnJvbSBcIi4uL3N0eWxlcy9BcHAubW9kdWxlLnNjc3NcIjtcclxuaW1wb3J0IHVzZURpYWxvZ0hvb2sgZnJvbSBcIi4uL2NvbXBvbmVudHMvdXNlRGlhbG9nSG9va1wiO1xyXG5pbXBvcnQgUHJvZmlsZSBmcm9tIFwiLi4vY29tcG9uZW50cy9Qcm9maWxlXCI7XHJcbmltcG9ydCBIZWFkZXIgZnJvbSBcIi4uL2NvbXBvbmVudHMvSGVhZGVyXCI7XHJcbmltcG9ydCBEaWFsb2cgZnJvbSBcIi4uL2NvbXBvbmVudHMvQ3VzdG9tRGlhbG9nXCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBBcHAoKSB7XHJcbiAgY29uc3QgW2lzRm9ybU9wZW4sIHNldEZvcm1DbG9zZV0gPSB1c2VTdGF0ZSh0cnVlKTtcclxuICBjb25zdCB7IGlzT3BlbiwgaGFuZGxlRGlhbG9nT3BlbiwgaGFuZGxlRGlhbG9nQ2xvc2UgfSA9IHVzZURpYWxvZ0hvb2soKTtcclxuXHJcbiAgY29uc3QgaGFuZGxlRm9ybUNsb3NlID0gKCkgPT4gc2V0Rm9ybUNsb3NlKCFpc0Zvcm1PcGVuKTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxzZWN0aW9uIGNsYXNzTmFtZT1cIkFwcFwiPlxyXG4gICAgICA8SGVhZD5cclxuICAgICAgICA8dGl0bGU+VGVzdCBGdWxvZ3k8L3RpdGxlPlxyXG4gICAgICAgIDxsaW5rXHJcbiAgICAgICAgICBocmVmPVwiaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1PcGVuK1NhbnM6d2dodEAzMDA7NDAwOzYwMCZkaXNwbGF5PXN3YXBcIlxyXG4gICAgICAgICAgcmVsPVwic3R5bGVzaGVldFwiXHJcbiAgICAgICAgPjwvbGluaz5cclxuICAgICAgICB7LyogPGxpbmsgcmVsPVwiaWNvblwiIGhyZWY9XCIvZmF2aWNvbi5pY29cIiAvPiAqL31cclxuICAgICAgPC9IZWFkPlxyXG4gICAgICA8bWFpbj5cclxuICAgICAgICA8aDEgY2xhc3NOYW1lPVwiSGlkZGVuXCI+0KTQvtGA0LzQsDwvaDE+XHJcbiAgICAgICAgPHNlY3Rpb24gY2xhc3NOYW1lPXtBcHBTdHlsZXMuTWFpbkNvbnRlbnR9PlxyXG4gICAgICAgICAgPEhlYWRlciAvPlxyXG4gICAgICAgICAgPGgyIGNsYXNzTmFtZT17QXBwU3R5bGVzLlByb2ZpbGVIZWFkZXJ9PtCb0LjRh9C90YvQuSDQv9GA0L7RhNC40LvRjDwvaDI+XHJcbiAgICAgICAgICA8aDMgY2xhc3NOYW1lPXtBcHBTdHlsZXMuUHJvZmlsZVJvdXRlc0hlYWRlcn0+XHJcbiAgICAgICAgICAgINCT0LvQsNCy0L3QsNGPL9Cb0LjRh9C90YvQuSDQv9GA0L7RhNC40LvRjFxyXG4gICAgICAgICAgPC9oMz5cclxuICAgICAgICAgIDxQcm9maWxlXHJcbiAgICAgICAgICAgIGhhbmRsZURpYWxvZ09wZW49e2hhbmRsZURpYWxvZ09wZW59XHJcbiAgICAgICAgICAgIGlzRm9ybU9wZW49e2lzRm9ybU9wZW59XHJcbiAgICAgICAgICAgIG9uRm9ybUNsb3NlPXtoYW5kbGVGb3JtQ2xvc2V9XHJcbiAgICAgICAgICAvPlxyXG4gICAgICAgICAgPERpYWxvZyBpc09wZW49e2lzT3Blbn0gb25DbG9zZT17aGFuZGxlRGlhbG9nQ2xvc2V9IC8+XHJcbiAgICAgICAgPC9zZWN0aW9uPlxyXG4gICAgICA8L21haW4+XHJcbiAgICA8L3NlY3Rpb24+XHJcbiAgKTtcclxufVxyXG4iLCIvLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IHtcblx0XCJBcHBcIjogXCJBcHBfQXBwX18zTFNOMFwiLFxuXHRcIlByb2ZpbGVIZWFkZXJcIjogXCJBcHBfUHJvZmlsZUhlYWRlcl9fM25BWGVcIixcblx0XCJQcm9maWxlUm91dGVzSGVhZGVyXCI6IFwiQXBwX1Byb2ZpbGVSb3V0ZXNIZWFkZXJfXzJyaDgtXCIsXG5cdFwiTWFpbkNvbnRlbnRcIjogXCJBcHBfTWFpbkNvbnRlbnRfXzJIVnFHXCJcbn07XG4iLCIvLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IHtcblx0XCJDdXN0b21CdXR0b25cIjogXCJDdXN0b21CdXR0b25fQ3VzdG9tQnV0dG9uX18xd05Pc1wiXG59O1xuIiwiLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSB7XG5cdFwiRGlhbG9nXCI6IFwiQ3VzdG9tRGlhbG9nX0RpYWxvZ19fMUZNWFJcIlxufTtcbiIsIi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0ge1xuXHRcIkhlYWRlclwiOiBcIkhlYWRlcl9IZWFkZXJfXzE3VkpsXCIsXG5cdFwiTm90aWZpY2F0aW9uc1wiOiBcIkhlYWRlcl9Ob3RpZmljYXRpb25zX19sd3Z3Z1wiLFxuXHRcIkRpdmlkZXJcIjogXCJIZWFkZXJfRGl2aWRlcl9fM3NFellcIixcblx0XCJIZWFkZXJVc2VySW5mb1wiOiBcIkhlYWRlcl9IZWFkZXJVc2VySW5mb19fMmpuYkZcIixcblx0XCJVc2VySWNvblwiOiBcIkhlYWRlcl9Vc2VySWNvbl9fc1J0WmRcIlxufTtcbiIsIi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0ge1xuXHRcIlByb2ZpbGVcIjogXCJQcm9maWxlX1Byb2ZpbGVfXzJ2aGhyXCIsXG5cdFwiVXNlckluZm9NdWlQYXBlclwiOiBcIlByb2ZpbGVfVXNlckluZm9NdWlQYXBlcl9fVC1sYVJcIixcblx0XCJNYWluSW5mb1wiOiBcIlByb2ZpbGVfTWFpbkluZm9fXzMyOVpnXCIsXG5cdFwiUHJvZmlsZVVzZXJJY29uXCI6IFwiUHJvZmlsZV9Qcm9maWxlVXNlckljb25fX0ZWNmw5XCIsXG5cdFwiVXNlck5hbWVcIjogXCJQcm9maWxlX1VzZXJOYW1lX18zcERJa1wiLFxuXHRcIkNsb3NlQnV0dG9uXCI6IFwiUHJvZmlsZV9DbG9zZUJ1dHRvbl9fdEcxS2NcIixcblx0XCJDbG9zZUljb25cIjogXCJQcm9maWxlX0Nsb3NlSWNvbl9fMTBETUxcIlxufTtcbiIsIi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0ge1xuXHRcIlVzZXJGb3JtTXVpUGFwZXJcIjogXCJVc2VyRm9ybV9Vc2VyRm9ybU11aVBhcGVyX18ySVRsNlwiLFxuXHRcIlVzZXJGb3JtXCI6IFwiVXNlckZvcm1fVXNlckZvcm1fXzNmTG1wXCIsXG5cdFwiTWFpbkZvcm1Db250ZW50XCI6IFwiVXNlckZvcm1fTWFpbkZvcm1Db250ZW50X18zbEYyeFwiLFxuXHRcIlRleHRGaWVsZFwiOiBcIlVzZXJGb3JtX1RleHRGaWVsZF9fZTRhektcIixcblx0XCJGaWVsZEl0ZW1cIjogXCJVc2VyRm9ybV9GaWVsZEl0ZW1fXzVCdkpCXCIsXG5cdFwiRmllbGRJY29uXCI6IFwiVXNlckZvcm1fRmllbGRJY29uX18zNkFmSlwiLFxuXHRcIkRpdmlkZXJcIjogXCJVc2VyRm9ybV9EaXZpZGVyX19sR09sM1wiLFxuXHRcIlN1Y2Nlc3NNZXNzYWdlXCI6IFwiVXNlckZvcm1fU3VjY2Vzc01lc3NhZ2VfXzFBS2lSXCJcbn07XG4iLCJleHBvcnQgY29uc3QgVmFsaWRhdGVNZXNzYWdlID0ge1xyXG4gIFJFUVVJUkVEOiBcInJlcXVpcmVkXCIsXHJcbiAgTkFNRTogXCLQndC10LLQtdGA0L3QvtC1INC40LzRj1wiLFxyXG4gIEVNQUlMOiBcItCd0LXQstC10YDQvdGL0Lkg0LDQtNGA0LXRgVwiLFxyXG4gIFBIT05FOiBcItCd0LXQstC10YDQvdGL0Lkg0L3QvtC80LXRgCDRgtC10LvQtdGE0L7QvdCwXCIsXHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgaXNGaWVsZEVycm9yID0gKG1ldGEpID0+IEJvb2xlYW4obWV0YS5lcnJvciAmJiBtZXRhLnN1Ym1pdEZhaWxlZCk7XHJcblxyXG5leHBvcnQgY29uc3QgdmFsaWRhdGVGb3JtID0gKHZhbHVlcykgPT4ge1xyXG4gIGNvbnN0IGVycm9ycyA9IHt9O1xyXG4gIGlmICghdmFsdWVzLnVzZXJOYW1lICYmICF2YWx1ZXMucGhvbmVOdW1iZXIgJiYgIXZhbHVlcy5lbWFpbCkge1xyXG4gICAgZXJyb3JzLnVzZXJOYW1lID0gVmFsaWRhdGVNZXNzYWdlLlJFUVVJUkVEO1xyXG4gICAgZXJyb3JzLnBob25lTnVtYmVyID0gVmFsaWRhdGVNZXNzYWdlLlJFUVVJUkVEO1xyXG4gICAgZXJyb3JzLmVtYWlsID0gVmFsaWRhdGVNZXNzYWdlLlJFUVVJUkVEO1xyXG4gIH1cclxuICBpZiAodmFsdWVzLnVzZXJOYW1lICYmIHZhbHVlcy51c2VyTmFtZSA9PSBcItC40LzRj1wiKSB7XHJcbiAgICBlcnJvcnMudXNlck5hbWUgPSBWYWxpZGF0ZU1lc3NhZ2UuTkFNRTtcclxuICB9XHJcbiAgcmV0dXJuIGVycm9ycztcclxufTtcclxuIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQG1hdGVyaWFsLXVpL2NvcmUvQnV0dG9uXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBtYXRlcmlhbC11aS9jb3JlL0NpcmN1bGFyUHJvZ3Jlc3NcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQG1hdGVyaWFsLXVpL2NvcmUvRGlhbG9nXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBtYXRlcmlhbC11aS9jb3JlL0Zvcm1IZWxwZXJUZXh0XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBtYXRlcmlhbC11aS9jb3JlL0ljb25CdXR0b25cIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQG1hdGVyaWFsLXVpL2NvcmUvUGFwZXJcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQG1hdGVyaWFsLXVpL2NvcmUvVGV4dEZpZWxkXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBtYXRlcmlhbC11aS9pY29ucy9DbG9zZVwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAbWF0ZXJpYWwtdWkvaWNvbnMvS2V5Ym9hcmRBcnJvd0Rvd25cIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiYXhpb3NcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9oZWFkXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0LWZpbmFsLWZvcm1cIik7Il0sInNvdXJjZVJvb3QiOiIifQ==