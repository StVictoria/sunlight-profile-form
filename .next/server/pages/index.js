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
/* harmony import */ var _material_ui_icons_Close__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/icons/Close */ "@material-ui/icons/Close");
/* harmony import */ var _material_ui_icons_Close__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Close__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _styles_Profile_module_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../styles/Profile.module.scss */ "./styles/Profile.module.scss");
/* harmony import */ var _styles_Profile_module_scss__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_styles_Profile_module_scss__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _UserForm_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./UserForm.js */ "./components/UserForm.js");
var _jsxFileName = "C:\\Users\\vstepnova\\Desktop\\test sunlight\\components\\Profile.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;





function Profile({
  isFormOpen,
  onFormClose,
  handleDialogOpen
}) {
  return __jsx("section", {
    className: _styles_Profile_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a.Profile,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 5
    }
  }, __jsx(_material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_1___default.a, {
    className: _styles_Profile_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a.UserInfoMuiPaper,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 7
    }
  }, __jsx("section", {
    className: _styles_Profile_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a.MainInfo,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: `${_styles_Profile_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a.ProfileUserIcon} UserIcon`,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 11
    }
  }), __jsx("p", {
    className: _styles_Profile_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a.UserName,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 11
    }
  }, "\u0418\u0432\u0430\u043D\u043E\u0432\u0430 \u0410\u043D\u043D\u0430 \u041C\u0438\u0445\u0430\u0439\u043B\u043E\u0432\u043D\u0430")), __jsx(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_2___default.a, {
    className: _styles_Profile_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a.CloseButton,
    onClick: onFormClose,
    color: "primary",
    endIcon: __jsx(_material_ui_icons_Close__WEBPACK_IMPORTED_MODULE_3___default.a, {
      className: _styles_Profile_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a.CloseIcon,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 21,
        columnNumber: 20
      }
    }),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 9
    }
  }, isFormOpen ? "Закрыть" : "Открыть")), __jsx(_UserForm_js__WEBPACK_IMPORTED_MODULE_5__["default"], {
    handleDialogOpen: handleDialogOpen,
    isFormOpen: isFormOpen,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9DdXN0b21EaWFsb2cuanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9FcnJvck1lc3NhZ2UuanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9IZWFkZXIuanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9Qcm9maWxlLmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvVXNlckZvcm0uanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9jb21tb24vQ3VzdG9tQnV0dG9uLmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvdXNlRGlhbG9nSG9vay5qcyIsIndlYnBhY2s6Ly8vLi9wYWdlcy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zdHlsZXMvQXBwLm1vZHVsZS5zY3NzIiwid2VicGFjazovLy8uL3N0eWxlcy9DdXN0b21CdXR0b24ubW9kdWxlLnNjc3MiLCJ3ZWJwYWNrOi8vLy4vc3R5bGVzL0N1c3RvbURpYWxvZy5tb2R1bGUuc2NzcyIsIndlYnBhY2s6Ly8vLi9zdHlsZXMvSGVhZGVyLm1vZHVsZS5zY3NzIiwid2VicGFjazovLy8uL3N0eWxlcy9Qcm9maWxlLm1vZHVsZS5zY3NzIiwid2VicGFjazovLy8uL3N0eWxlcy9Vc2VyRm9ybS5tb2R1bGUuc2NzcyIsIndlYnBhY2s6Ly8vLi91dGlscy92YWxpZGF0ZS5qcyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAbWF0ZXJpYWwtdWkvY29yZS9CdXR0b25cIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAbWF0ZXJpYWwtdWkvY29yZS9DaXJjdWxhclByb2dyZXNzXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQG1hdGVyaWFsLXVpL2NvcmUvRGlhbG9nXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQG1hdGVyaWFsLXVpL2NvcmUvRm9ybUhlbHBlclRleHRcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAbWF0ZXJpYWwtdWkvY29yZS9QYXBlclwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBtYXRlcmlhbC11aS9jb3JlL1RleHRGaWVsZFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBtYXRlcmlhbC11aS9pY29ucy9DbG9zZVwiIiwid2VicGFjazovLy9leHRlcm5hbCBcImF4aW9zXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibmV4dC9oZWFkXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3RcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC1maW5hbC1mb3JtXCIiXSwibmFtZXMiOlsiQ3VzdG9tRGlhbG9nIiwiaXNPcGVuIiwib25DbG9zZSIsIkN1c3RvbURpYWxvZ1N0eWxlcyIsIkRpYWxvZyIsIkVycm9yTWVzc2FnZSIsIm1ldGEiLCJub0Vycm9yTWVzc2FnZSIsImlzRmllbGRFcnJvciIsImVycm9yIiwiVmFsaWRhdGVNZXNzYWdlIiwiUkVRVUlSRUQiLCJIZWFkZXIiLCJIZWFkZXJTdHlsZXMiLCJOb3RpZmljYXRpb25zIiwiRGl2aWRlciIsIkhlYWRlclVzZXJJbmZvIiwiVXNlckljb24iLCJVc2VyTmFtZSIsIlByb2ZpbGUiLCJpc0Zvcm1PcGVuIiwib25Gb3JtQ2xvc2UiLCJoYW5kbGVEaWFsb2dPcGVuIiwiUHJvZmlsZVN0eWxlcyIsIlVzZXJJbmZvTXVpUGFwZXIiLCJNYWluSW5mbyIsIlByb2ZpbGVVc2VySWNvbiIsIkNsb3NlQnV0dG9uIiwiQ2xvc2VJY29uIiwiZmllbGRzIiwiaWQiLCJuYW1lIiwibGFiZWwiLCJwbGFjZWhvbGRlciIsInR5cGUiLCJpY29uUGF0aCIsIlVzZXJGb3JtIiwiaXNMb2FkaW5nIiwic2V0TG9hZGluZyIsInVzZVN0YXRlIiwiaXNFcnJvciIsInNldEVycm9yIiwiaGFuZGxlRm9ybVN1Ym1pdCIsInZhbHVlcyIsInJlc3BvbnNlIiwiYXhpb3MiLCJwb3N0IiwiSlNPTiIsInN0cmluZ2lmeSIsImNvbnNvbGUiLCJsb2ciLCJyZW5kZXJVc2VyRm9ybSIsIm1hcCIsImZpZWxkIiwiVXNlckZvcm1TdHlsZXMiLCJUZXh0RmllbGQiLCJpbnB1dCIsInJlc3QiLCJGaWVsZEl0ZW0iLCJGaWVsZEljb24iLCJsZW5ndGgiLCJVc2VyRm9ybU11aVBhcGVyIiwiZGlzcGxheSIsInZhbGlkYXRlRm9ybSIsImhhbmRsZVN1Ym1pdCIsIk1haW5Gb3JtQ29udGVudCIsIkN1c3RvbUJ1dHRvbiIsIm9uQ2xpY2siLCJDdXN0b21CdXR0b25TdHlsZXMiLCJ1c2VEaWFsb2dIb29rIiwic2V0RGlhbG9nT3BlbiIsImhhbmRsZURpYWxvZ0Nsb3NlIiwiQXBwIiwic2V0Rm9ybUNsb3NlIiwiaGFuZGxlRm9ybUNsb3NlIiwiQXBwU3R5bGVzIiwiTWFpbkNvbnRlbnQiLCJQcm9maWxlSGVhZGVyIiwiUHJvZmlsZVJvdXRlc0hlYWRlciIsIk5BTUUiLCJFTUFJTCIsIlBIT05FIiwiQm9vbGVhbiIsInN1Ym1pdEZhaWxlZCIsImVycm9ycyIsInVzZXJOYW1lIiwicGhvbmVOdW1iZXIiLCJlbWFpbCJdLCJtYXBwaW5ncyI6Ijs7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLElBQUk7UUFDSjtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EseUNBQXlDLGlDQUFpQztRQUMxRSxnSEFBZ0gsbUJBQW1CLEVBQUU7UUFDckk7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFD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ZTdFLGVBQWUsQ0FBQ0MsUUFBL0I7QUFDRDs7QUFDRCxNQUFJZ0MsTUFBTSxDQUFDMEMsUUFBUCxJQUFtQjFDLE1BQU0sQ0FBQzBDLFFBQVAsSUFBbUIsS0FBMUMsRUFBaUQ7QUFDL0NELFVBQU0sQ0FBQ0MsUUFBUCxHQUFrQjNFLGVBQWUsQ0FBQ3FFLElBQWxDO0FBQ0Q7O0FBQ0QsU0FBT0ssTUFBUDtBQUNELENBWE0sQzs7Ozs7Ozs7Ozs7QUNUUCxxRDs7Ozs7Ozs7Ozs7QUNBQSwrRDs7Ozs7Ozs7Ozs7QUNBQSxxRDs7Ozs7Ozs7Ozs7QUNBQSw2RDs7Ozs7Ozs7Ozs7QUNBQSxvRDs7Ozs7Ozs7Ozs7QUNBQSx3RDs7Ozs7Ozs7Ozs7QUNBQSxxRDs7Ozs7Ozs7Ozs7QUNBQSxrQzs7Ozs7Ozs7Ozs7QUNBQSxzQzs7Ozs7Ozs7Ozs7QUNBQSxrQzs7Ozs7Ozs7Ozs7QUNBQSw2QyIsImZpbGUiOiJwYWdlcy9pbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0gcmVxdWlyZSgnLi4vc3NyLW1vZHVsZS1jYWNoZS5qcycpO1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHR2YXIgdGhyZXcgPSB0cnVlO1xuIFx0XHR0cnkge1xuIFx0XHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuIFx0XHRcdHRocmV3ID0gZmFsc2U7XG4gXHRcdH0gZmluYWxseSB7XG4gXHRcdFx0aWYodGhyZXcpIGRlbGV0ZSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXTtcbiBcdFx0fVxuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vcGFnZXMvaW5kZXguanNcIik7XG4iLCJpbXBvcnQgRGlhbG9nIGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZS9EaWFsb2dcIjtcclxuXHJcbmltcG9ydCBDdXN0b21EaWFsb2dTdHlsZXMgZnJvbSBcIi4uL3N0eWxlcy9DdXN0b21EaWFsb2cubW9kdWxlLnNjc3NcIjtcclxuaW1wb3J0IEN1c3RvbUJ1dHRvbiBmcm9tIFwiLi9jb21tb24vQ3VzdG9tQnV0dG9uXCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBDdXN0b21EaWFsb2coeyBpc09wZW4sIG9uQ2xvc2UgfSkge1xyXG4gIHJldHVybiAoXHJcbiAgICA8RGlhbG9nXHJcbiAgICAgIG9wZW49e2lzT3Blbn1cclxuICAgICAgY2xhc3NOYW1lPXtDdXN0b21EaWFsb2dTdHlsZXMuRGlhbG9nfVxyXG4gICAgICBvbkNsb3NlPXtvbkNsb3NlfVxyXG4gICAgPlxyXG4gICAgICA8aDQ+0JTQsNC90L3Ri9C1INGD0YHQv9C10YjQvdC+INGB0L7RhdGA0LDQvdC10L3RizwvaDQ+XHJcbiAgICAgIDxDdXN0b21CdXR0b24gbmFtZT1cItCX0LDQutGA0YvRgtGMXCIgb25DbGljaz17b25DbG9zZX0gLz5cclxuICAgIDwvRGlhbG9nPlxyXG4gICk7XHJcbn1cclxuIiwiaW1wb3J0IEZvcm1IZWxwZXJUZXh0IGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZS9Gb3JtSGVscGVyVGV4dFwiO1xyXG5cclxuaW1wb3J0IHsgaXNGaWVsZEVycm9yIH0gZnJvbSBcIi4uL3V0aWxzL3ZhbGlkYXRlXCI7XHJcbmltcG9ydCB7IFZhbGlkYXRlTWVzc2FnZSB9IGZyb20gXCIuLi91dGlscy92YWxpZGF0ZVwiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gRXJyb3JNZXNzYWdlKHsgbWV0YSwgbm9FcnJvck1lc3NhZ2UgfSkge1xyXG4gIGlmIChub0Vycm9yTWVzc2FnZSkge1xyXG4gICAgcmV0dXJuIG51bGw7XHJcbiAgfVxyXG4gIHJldHVybiAoXHJcbiAgICBpc0ZpZWxkRXJyb3IobWV0YSkgJiZcclxuICAgIG1ldGEuZXJyb3IgIT09IFZhbGlkYXRlTWVzc2FnZS5SRVFVSVJFRCAmJiAoXHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiRXJyb3JNZXNzYWdlXCI+XHJcbiAgICAgICAgPEZvcm1IZWxwZXJUZXh0IGVycm9yPnttZXRhLmVycm9yfTwvRm9ybUhlbHBlclRleHQ+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgKVxyXG4gICk7XHJcbn1cclxuIiwiaW1wb3J0IEhlYWRlclN0eWxlcyBmcm9tIFwiLi4vc3R5bGVzL0hlYWRlci5tb2R1bGUuc2Nzc1wiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSGVhZGVyKCkge1xyXG4gIHJldHVybiAoXHJcbiAgICA8c2VjdGlvbiBjbGFzc05hbWU9e0hlYWRlclN0eWxlcy5IZWFkZXJ9PlxyXG4gICAgICA8aW1nXHJcbiAgICAgICAgc3JjPVwiL25vdGlmaWNhdGlvbi5wbmdcIlxyXG4gICAgICAgIGNsYXNzTmFtZT17SGVhZGVyU3R5bGVzLk5vdGlmaWNhdGlvbnN9XHJcbiAgICAgICAgYWx0PVwibm90aWZpY2F0aW9uc1wiXHJcbiAgICAgIC8+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtIZWFkZXJTdHlsZXMuRGl2aWRlcn0gLz5cclxuICAgICAgPHNlY3Rpb24gY2xhc3NOYW1lPXtIZWFkZXJTdHlsZXMuSGVhZGVyVXNlckluZm99PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtgJHtIZWFkZXJTdHlsZXMuVXNlckljb259IFVzZXJJY29uYH0gLz5cclxuICAgICAgICA8cCBjbGFzc05hbWU9e0hlYWRlclN0eWxlcy5Vc2VyTmFtZX0+0JjQstCw0L3QvtCy0LAg0JAuPC9wPlxyXG4gICAgICA8L3NlY3Rpb24+XHJcbiAgICA8L3NlY3Rpb24+XHJcbiAgKTtcclxufVxyXG4iLCJpbXBvcnQgUGFwZXIgZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlL1BhcGVyXCI7XHJcbmltcG9ydCBCdXR0b24gZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlL0J1dHRvblwiO1xyXG5pbXBvcnQgQ2xvc2VJY29uIGZyb20gXCJAbWF0ZXJpYWwtdWkvaWNvbnMvQ2xvc2VcIjtcclxuXHJcbmltcG9ydCBQcm9maWxlU3R5bGVzIGZyb20gXCIuLi9zdHlsZXMvUHJvZmlsZS5tb2R1bGUuc2Nzc1wiO1xyXG5pbXBvcnQgVXNlckZvcm0gZnJvbSBcIi4vVXNlckZvcm0uanNcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFByb2ZpbGUoeyBpc0Zvcm1PcGVuLCBvbkZvcm1DbG9zZSwgaGFuZGxlRGlhbG9nT3BlbiB9KSB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxzZWN0aW9uIGNsYXNzTmFtZT17UHJvZmlsZVN0eWxlcy5Qcm9maWxlfT5cclxuICAgICAgPFBhcGVyIGNsYXNzTmFtZT17UHJvZmlsZVN0eWxlcy5Vc2VySW5mb011aVBhcGVyfT5cclxuICAgICAgICA8c2VjdGlvbiBjbGFzc05hbWU9e1Byb2ZpbGVTdHlsZXMuTWFpbkluZm99PlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2Ake1Byb2ZpbGVTdHlsZXMuUHJvZmlsZVVzZXJJY29ufSBVc2VySWNvbmB9IC8+XHJcbiAgICAgICAgICA8cCBjbGFzc05hbWU9e1Byb2ZpbGVTdHlsZXMuVXNlck5hbWV9PtCY0LLQsNC90L7QstCwINCQ0L3QvdCwINCc0LjRhdCw0LnQu9C+0LLQvdCwPC9wPlxyXG4gICAgICAgIDwvc2VjdGlvbj5cclxuXHJcbiAgICAgICAgPEJ1dHRvblxyXG4gICAgICAgICAgY2xhc3NOYW1lPXtQcm9maWxlU3R5bGVzLkNsb3NlQnV0dG9ufVxyXG4gICAgICAgICAgb25DbGljaz17b25Gb3JtQ2xvc2V9XHJcbiAgICAgICAgICBjb2xvcj1cInByaW1hcnlcIlxyXG4gICAgICAgICAgZW5kSWNvbj17PENsb3NlSWNvbiBjbGFzc05hbWU9e1Byb2ZpbGVTdHlsZXMuQ2xvc2VJY29ufSAvPn1cclxuICAgICAgICA+XHJcbiAgICAgICAgICB7aXNGb3JtT3BlbiA/IFwi0JfQsNC60YDRi9GC0YxcIiA6IFwi0J7RgtC60YDRi9GC0YxcIn1cclxuICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgPC9QYXBlcj5cclxuICAgICAgPFVzZXJGb3JtIGhhbmRsZURpYWxvZ09wZW49e2hhbmRsZURpYWxvZ09wZW59IGlzRm9ybU9wZW49e2lzRm9ybU9wZW59IC8+XHJcbiAgICA8L3NlY3Rpb24+XHJcbiAgKTtcclxufVxyXG4iLCJpbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCI7XHJcbmltcG9ydCBQYXBlciBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvUGFwZXJcIjtcclxuaW1wb3J0IHsgRm9ybSwgRmllbGQgfSBmcm9tIFwicmVhY3QtZmluYWwtZm9ybVwiO1xyXG5pbXBvcnQgVGV4dEZpZWxkIGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZS9UZXh0RmllbGRcIjtcclxuXHJcbmltcG9ydCBVc2VyRm9ybVN0eWxlcyBmcm9tIFwiLi4vc3R5bGVzL1VzZXJGb3JtLm1vZHVsZS5zY3NzXCI7XHJcbmltcG9ydCB7IHZhbGlkYXRlRm9ybSwgaXNGaWVsZEVycm9yIH0gZnJvbSBcIi4uL3V0aWxzL3ZhbGlkYXRlXCI7XHJcbmltcG9ydCBFcnJvck1lc3NhZ2UgZnJvbSBcIi4vRXJyb3JNZXNzYWdlXCI7XHJcbmltcG9ydCBDdXN0b21CdXR0b24gZnJvbSBcIi4vY29tbW9uL0N1c3RvbUJ1dHRvblwiO1xyXG5cclxuY29uc3QgZmllbGRzID0gW1xyXG4gIHtcclxuICAgIGlkOiAwLFxyXG4gICAgbmFtZTogXCJ1c2VyTmFtZVwiLFxyXG4gICAgbGFiZWw6IFwi0KTQsNC80LjQu9C40Y8g0Lgg0LjQvNGPXCIsXHJcbiAgICBwbGFjZWhvbGRlcjogXCLQo9C60LDQttC40YLQtSDQktCw0YjRgyDQstCw0LzQuNC70LjRjiDQuCDQuNC80Y9cIixcclxuICAgIHR5cGU6IFwidGV4dFwiLFxyXG4gICAgaWNvblBhdGg6IFwiL2JhZGdlLnBuZ1wiLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgaWQ6IDEsXHJcbiAgICBuYW1lOiBcImVtYWlsXCIsXHJcbiAgICBsYWJlbDogXCJFLW1haWxcIixcclxuICAgIHBsYWNlaG9sZGVyOiBcIml2YW5vdmFAbWFpbC5ydVwiLFxyXG4gICAgdHlwZTogXCJlbWFpbFwiLFxyXG4gICAgaWNvblBhdGg6IFwiL21haWwucG5nXCIsXHJcbiAgfSxcclxuICB7XHJcbiAgICBpZDogMixcclxuICAgIG5hbWU6IFwicGhvbmVOdW1iZXJcIixcclxuICAgIGxhYmVsOiBcItCd0L7QvNC10YAg0YLQtdC70LXRhNC+0L3QsFwiLFxyXG4gICAgdHlwZTogXCJ0ZWxcIixcclxuICAgIHBsYWNlaG9sZGVyOiBcItCj0LrQsNC20LjRgtC1INC90L7QvNC10YAg0YLQtdC70LXRhNC+0L3QsFwiLFxyXG4gICAgaWNvblBhdGg6IFwiL3Bob25lLnBuZ1wiLFxyXG4gIH0sXHJcbl07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBVc2VyRm9ybSh7IGlzRm9ybU9wZW4sIGhhbmRsZURpYWxvZ09wZW4gfSkge1xyXG4gIGNvbnN0IFtpc0xvYWRpbmcsIHNldExvYWRpbmddID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gIGNvbnN0IFtpc0Vycm9yLCBzZXRFcnJvcl0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcblxyXG4gIGFzeW5jIGZ1bmN0aW9uIGhhbmRsZUZvcm1TdWJtaXQodmFsdWVzKSB7XHJcbiAgICB0cnkge1xyXG4gICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGF4aW9zLnBvc3QoXHJcbiAgICAgICAgXCJodHRwOi8vbG9jYWxob3N0OjMwMDUvYXBpXCIsXHJcbiAgICAgICAgSlNPTi5zdHJpbmdpZnkodmFsdWVzKVxyXG4gICAgICApO1xyXG4gICAgICBzZXRMb2FkaW5nKHRydWUpO1xyXG4gICAgICBjb25zb2xlLmxvZyhyZXNwb25zZSk7XHJcbiAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICBjb25zb2xlLmxvZyhlcnJvcik7XHJcbiAgICAgIHNldExvYWRpbmcoZmFsc2UpO1xyXG4gICAgfVxyXG4gICAgc2V0TG9hZGluZyhmYWxzZSk7XHJcbiAgICBoYW5kbGVEaWFsb2dPcGVuKCk7XHJcbiAgfVxyXG5cclxuICBjb25zdCByZW5kZXJVc2VyRm9ybSA9IChmaWVsZHMpID0+XHJcbiAgICBmaWVsZHMubWFwKChmaWVsZCkgPT4gKFxyXG4gICAgICA8UmVhY3QuRnJhZ21lbnQga2V5PXtmaWVsZC5pZH0+XHJcbiAgICAgICAgPEZpZWxkXHJcbiAgICAgICAgICBuYW1lPXtmaWVsZC5uYW1lfVxyXG4gICAgICAgICAgY2xhc3NOYW1lPXtVc2VyRm9ybVN0eWxlcy5UZXh0RmllbGR9XHJcbiAgICAgICAgICByZW5kZXI9eyh7IGlucHV0LCBtZXRhLCAuLi5yZXN0IH0pID0+IChcclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e1VzZXJGb3JtU3R5bGVzLkZpZWxkSXRlbX0+XHJcbiAgICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9e2ZpZWxkLmlkfT5cclxuICAgICAgICAgICAgICAgIDxpbWdcclxuICAgICAgICAgICAgICAgICAgc3JjPXtmaWVsZC5pY29uUGF0aH1cclxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtVc2VyRm9ybVN0eWxlcy5GaWVsZEljb259XHJcbiAgICAgICAgICAgICAgICAgIGFsdD17ZmllbGQubGFiZWx9XHJcbiAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgIDwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgPFRleHRGaWVsZFxyXG4gICAgICAgICAgICAgICAgaWQ9e2ZpZWxkLm5hbWV9XHJcbiAgICAgICAgICAgICAgICB7Li4uaW5wdXR9XHJcbiAgICAgICAgICAgICAgICB7Li4ucmVzdH1cclxuICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPXtmaWVsZC5wbGFjZWhvbGRlcn1cclxuICAgICAgICAgICAgICAgIHR5cGU9e2ZpZWxkLnR5cGV9XHJcbiAgICAgICAgICAgICAgICBlcnJvcj17aXNGaWVsZEVycm9yKG1ldGEpfVxyXG4gICAgICAgICAgICAgICAgbGFiZWw9e2ZpZWxkLmxhYmVsfVxyXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtVc2VyRm9ybVN0eWxlcy5UZXh0RmllbGR9XHJcbiAgICAgICAgICAgICAgICB2YXJpYW50PVwib3V0bGluZWRcIlxyXG4gICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgPEVycm9yTWVzc2FnZSBtZXRhPXttZXRhfSAvPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICl9XHJcbiAgICAgICAgLz5cclxuICAgICAgICB7ZmllbGRzLmxlbmd0aCAtIDEgIT09IGZpZWxkLmlkID8gKFxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9e1VzZXJGb3JtU3R5bGVzLkRpdmlkZXJ9IC8+XHJcbiAgICAgICAgKSA6IG51bGx9XHJcbiAgICAgIDwvUmVhY3QuRnJhZ21lbnQ+XHJcbiAgICApKTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxQYXBlclxyXG4gICAgICBjbGFzc05hbWU9e1VzZXJGb3JtU3R5bGVzLlVzZXJGb3JtTXVpUGFwZXJ9XHJcbiAgICAgIHN0eWxlPXtpc0Zvcm1PcGVuID8geyBkaXNwbGF5OiBcImJsb2NrXCIgfSA6IHsgZGlzcGxheTogXCJub25lXCIgfX1cclxuICAgID5cclxuICAgICAgPEZvcm1cclxuICAgICAgICBvblN1Ym1pdD17aGFuZGxlRm9ybVN1Ym1pdH1cclxuICAgICAgICB2YWxpZGF0ZT17dmFsaWRhdGVGb3JtfVxyXG4gICAgICAgIHJlbmRlcj17KHsgaGFuZGxlU3VibWl0LCB2YWx1ZXMgfSkgPT4gKFxyXG4gICAgICAgICAgPGZvcm0gb25TdWJtaXQ9e2hhbmRsZVN1Ym1pdH0gY2xhc3NOYW1lPXtVc2VyRm9ybVN0eWxlcy5Vc2VyRm9ybX0+XHJcbiAgICAgICAgICAgIDxzZWN0aW9uIGNsYXNzTmFtZT17VXNlckZvcm1TdHlsZXMuTWFpbkZvcm1Db250ZW50fT5cclxuICAgICAgICAgICAgICB7cmVuZGVyVXNlckZvcm0oZmllbGRzKX1cclxuICAgICAgICAgICAgPC9zZWN0aW9uPlxyXG5cclxuICAgICAgICAgICAgPEN1c3RvbUJ1dHRvblxyXG4gICAgICAgICAgICAgIGlzTG9hZGluZz17aXNMb2FkaW5nfVxyXG4gICAgICAgICAgICAgIG5hbWU9XCLQodC+0YXRgNCw0L3QuNGC0Ywg0LjQt9C80LXQvdC10L3QuNGPXCJcclxuICAgICAgICAgICAgICB0eXBlPVwic3VibWl0XCJcclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgIDwvZm9ybT5cclxuICAgICAgICApfVxyXG4gICAgICAvPlxyXG4gICAgPC9QYXBlcj5cclxuICApO1xyXG59XHJcbiIsImltcG9ydCBDdXN0b21CdXR0b25TdHlsZXMgZnJvbSBcIi4uLy4uL3N0eWxlcy9DdXN0b21CdXR0b24ubW9kdWxlLnNjc3NcIjtcclxuaW1wb3J0IENpcmN1bGFyUHJvZ3Jlc3MgZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlL0NpcmN1bGFyUHJvZ3Jlc3NcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEN1c3RvbUJ1dHRvbih7IGlzTG9hZGluZywgbmFtZSwgdHlwZSwgb25DbGljayB9KSB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxidXR0b25cclxuICAgICAgdHlwZT17dHlwZX1cclxuICAgICAgY2xhc3NOYW1lPXtDdXN0b21CdXR0b25TdHlsZXMuQ3VzdG9tQnV0dG9ufVxyXG4gICAgICBvbkNsaWNrPXtvbkNsaWNrfVxyXG4gICAgPlxyXG4gICAgICB7aXNMb2FkaW5nID8gPENpcmN1bGFyUHJvZ3Jlc3MgZGlzYWJsZVNocmluayAvPiA6IG5hbWV9XHJcbiAgICA8L2J1dHRvbj5cclxuICApO1xyXG59XHJcbiIsImltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiB1c2VEaWFsb2dIb29rKCkge1xyXG4gIGNvbnN0IFtpc09wZW4sIHNldERpYWxvZ09wZW5dID0gdXNlU3RhdGUoZmFsc2UpO1xyXG5cclxuICBjb25zdCBoYW5kbGVEaWFsb2dPcGVuID0gKCkgPT4ge1xyXG4gICAgc2V0RGlhbG9nT3Blbih0cnVlKTtcclxuICAgIGNvbnNvbGUubG9nKFwib3BlblwiKTtcclxuICB9O1xyXG4gIGNvbnN0IGhhbmRsZURpYWxvZ0Nsb3NlID0gKCkgPT4gc2V0RGlhbG9nT3BlbihmYWxzZSk7XHJcblxyXG4gIHJldHVybiB7IGlzT3BlbiwgaGFuZGxlRGlhbG9nT3BlbiwgaGFuZGxlRGlhbG9nQ2xvc2UgfTtcclxufVxyXG4iLCJpbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgSGVhZCBmcm9tIFwibmV4dC9oZWFkXCI7XHJcblxyXG5pbXBvcnQgQXBwU3R5bGVzIGZyb20gXCIuLi9zdHlsZXMvQXBwLm1vZHVsZS5zY3NzXCI7XHJcbmltcG9ydCB1c2VEaWFsb2dIb29rIGZyb20gXCIuLi9jb21wb25lbnRzL3VzZURpYWxvZ0hvb2tcIjtcclxuaW1wb3J0IFByb2ZpbGUgZnJvbSBcIi4uL2NvbXBvbmVudHMvUHJvZmlsZVwiO1xyXG5pbXBvcnQgSGVhZGVyIGZyb20gXCIuLi9jb21wb25lbnRzL0hlYWRlclwiO1xyXG5pbXBvcnQgRGlhbG9nIGZyb20gXCIuLi9jb21wb25lbnRzL0N1c3RvbURpYWxvZ1wiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQXBwKCkge1xyXG4gIGNvbnN0IFtpc0Zvcm1PcGVuLCBzZXRGb3JtQ2xvc2VdID0gdXNlU3RhdGUodHJ1ZSk7XHJcbiAgY29uc3QgeyBpc09wZW4sIGhhbmRsZURpYWxvZ09wZW4sIGhhbmRsZURpYWxvZ0Nsb3NlIH0gPSB1c2VEaWFsb2dIb29rKCk7XHJcblxyXG4gIGNvbnN0IGhhbmRsZUZvcm1DbG9zZSA9ICgpID0+IHNldEZvcm1DbG9zZSghaXNGb3JtT3Blbik7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8c2VjdGlvbiBjbGFzc05hbWU9XCJBcHBcIj5cclxuICAgICAgPEhlYWQ+XHJcbiAgICAgICAgPHRpdGxlPlRlc3QgRnVsb2d5PC90aXRsZT5cclxuICAgICAgICA8bGlua1xyXG4gICAgICAgICAgaHJlZj1cImh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9T3BlbitTYW5zOndnaHRAMzAwOzQwMDs2MDAmZGlzcGxheT1zd2FwXCJcclxuICAgICAgICAgIHJlbD1cInN0eWxlc2hlZXRcIlxyXG4gICAgICAgID48L2xpbms+XHJcbiAgICAgICAgey8qIDxsaW5rIHJlbD1cImljb25cIiBocmVmPVwiL2Zhdmljb24uaWNvXCIgLz4gKi99XHJcbiAgICAgIDwvSGVhZD5cclxuICAgICAgPG1haW4+XHJcbiAgICAgICAgPGgxIGNsYXNzTmFtZT1cIkhpZGRlblwiPtCk0L7RgNC80LA8L2gxPlxyXG4gICAgICAgIDxzZWN0aW9uIGNsYXNzTmFtZT17QXBwU3R5bGVzLk1haW5Db250ZW50fT5cclxuICAgICAgICAgIDxIZWFkZXIgLz5cclxuICAgICAgICAgIDxoMiBjbGFzc05hbWU9e0FwcFN0eWxlcy5Qcm9maWxlSGVhZGVyfT7Qm9C40YfQvdGL0Lkg0L/RgNC+0YTQuNC70Yw8L2gyPlxyXG4gICAgICAgICAgPGgzIGNsYXNzTmFtZT17QXBwU3R5bGVzLlByb2ZpbGVSb3V0ZXNIZWFkZXJ9PlxyXG4gICAgICAgICAgICDQk9C70LDQstC90LDRjy/Qm9C40YfQvdGL0Lkg0L/RgNC+0YTQuNC70YxcclxuICAgICAgICAgIDwvaDM+XHJcbiAgICAgICAgICA8UHJvZmlsZVxyXG4gICAgICAgICAgICBoYW5kbGVEaWFsb2dPcGVuPXtoYW5kbGVEaWFsb2dPcGVufVxyXG4gICAgICAgICAgICBpc0Zvcm1PcGVuPXtpc0Zvcm1PcGVufVxyXG4gICAgICAgICAgICBvbkZvcm1DbG9zZT17aGFuZGxlRm9ybUNsb3NlfVxyXG4gICAgICAgICAgLz5cclxuICAgICAgICAgIDxEaWFsb2cgaXNPcGVuPXtpc09wZW59IG9uQ2xvc2U9e2hhbmRsZURpYWxvZ0Nsb3NlfSAvPlxyXG4gICAgICAgIDwvc2VjdGlvbj5cclxuICAgICAgPC9tYWluPlxyXG4gICAgPC9zZWN0aW9uPlxyXG4gICk7XHJcbn1cclxuIiwiLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSB7XG5cdFwiQXBwXCI6IFwiQXBwX0FwcF9fM0xTTjBcIixcblx0XCJQcm9maWxlSGVhZGVyXCI6IFwiQXBwX1Byb2ZpbGVIZWFkZXJfXzNuQVhlXCIsXG5cdFwiUHJvZmlsZVJvdXRlc0hlYWRlclwiOiBcIkFwcF9Qcm9maWxlUm91dGVzSGVhZGVyX18ycmg4LVwiLFxuXHRcIk1haW5Db250ZW50XCI6IFwiQXBwX01haW5Db250ZW50X18ySFZxR1wiXG59O1xuIiwiLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSB7XG5cdFwiQ3VzdG9tQnV0dG9uXCI6IFwiQ3VzdG9tQnV0dG9uX0N1c3RvbUJ1dHRvbl9fMXdOT3NcIlxufTtcbiIsIi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0ge1xuXHRcIkRpYWxvZ1wiOiBcIkN1c3RvbURpYWxvZ19EaWFsb2dfXzFGTVhSXCJcbn07XG4iLCIvLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IHtcblx0XCJIZWFkZXJcIjogXCJIZWFkZXJfSGVhZGVyX18xN1ZKbFwiLFxuXHRcIk5vdGlmaWNhdGlvbnNcIjogXCJIZWFkZXJfTm90aWZpY2F0aW9uc19fbHd2d2dcIixcblx0XCJEaXZpZGVyXCI6IFwiSGVhZGVyX0RpdmlkZXJfXzNzRXpZXCIsXG5cdFwiSGVhZGVyVXNlckluZm9cIjogXCJIZWFkZXJfSGVhZGVyVXNlckluZm9fXzJqbmJGXCIsXG5cdFwiVXNlckljb25cIjogXCJIZWFkZXJfVXNlckljb25fX3NSdFpkXCJcbn07XG4iLCIvLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IHtcblx0XCJQcm9maWxlXCI6IFwiUHJvZmlsZV9Qcm9maWxlX18ydmhoclwiLFxuXHRcIlVzZXJJbmZvTXVpUGFwZXJcIjogXCJQcm9maWxlX1VzZXJJbmZvTXVpUGFwZXJfX1QtbGFSXCIsXG5cdFwiTWFpbkluZm9cIjogXCJQcm9maWxlX01haW5JbmZvX18zMjlaZ1wiLFxuXHRcIlByb2ZpbGVVc2VySWNvblwiOiBcIlByb2ZpbGVfUHJvZmlsZVVzZXJJY29uX19GVjZsOVwiLFxuXHRcIlVzZXJOYW1lXCI6IFwiUHJvZmlsZV9Vc2VyTmFtZV9fM3BESWtcIixcblx0XCJDbG9zZUJ1dHRvblwiOiBcIlByb2ZpbGVfQ2xvc2VCdXR0b25fX3RHMUtjXCIsXG5cdFwiQ2xvc2VJY29uXCI6IFwiUHJvZmlsZV9DbG9zZUljb25fXzEwRE1MXCJcbn07XG4iLCIvLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IHtcblx0XCJVc2VyRm9ybU11aVBhcGVyXCI6IFwiVXNlckZvcm1fVXNlckZvcm1NdWlQYXBlcl9fMklUbDZcIixcblx0XCJVc2VyRm9ybVwiOiBcIlVzZXJGb3JtX1VzZXJGb3JtX18zZkxtcFwiLFxuXHRcIk1haW5Gb3JtQ29udGVudFwiOiBcIlVzZXJGb3JtX01haW5Gb3JtQ29udGVudF9fM2xGMnhcIixcblx0XCJUZXh0RmllbGRcIjogXCJVc2VyRm9ybV9UZXh0RmllbGRfX2U0YXpLXCIsXG5cdFwiRmllbGRJdGVtXCI6IFwiVXNlckZvcm1fRmllbGRJdGVtX181QnZKQlwiLFxuXHRcIkZpZWxkSWNvblwiOiBcIlVzZXJGb3JtX0ZpZWxkSWNvbl9fMzZBZkpcIixcblx0XCJEaXZpZGVyXCI6IFwiVXNlckZvcm1fRGl2aWRlcl9fbEdPbDNcIixcblx0XCJTdWNjZXNzTWVzc2FnZVwiOiBcIlVzZXJGb3JtX1N1Y2Nlc3NNZXNzYWdlX18xQUtpUlwiXG59O1xuIiwiZXhwb3J0IGNvbnN0IFZhbGlkYXRlTWVzc2FnZSA9IHtcclxuICBSRVFVSVJFRDogXCJyZXF1aXJlZFwiLFxyXG4gIE5BTUU6IFwi0J3QtdCy0LXRgNC90L7QtSDQuNC80Y9cIixcclxuICBFTUFJTDogXCLQndC10LLQtdGA0L3Ri9C5INCw0LTRgNC10YFcIixcclxuICBQSE9ORTogXCLQndC10LLQtdGA0L3Ri9C5INC90L7QvNC10YAg0YLQtdC70LXRhNC+0L3QsFwiLFxyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IGlzRmllbGRFcnJvciA9IChtZXRhKSA9PiBCb29sZWFuKG1ldGEuZXJyb3IgJiYgbWV0YS5zdWJtaXRGYWlsZWQpO1xyXG5cclxuZXhwb3J0IGNvbnN0IHZhbGlkYXRlRm9ybSA9ICh2YWx1ZXMpID0+IHtcclxuICBjb25zdCBlcnJvcnMgPSB7fTtcclxuICBpZiAoIXZhbHVlcy51c2VyTmFtZSAmJiAhdmFsdWVzLnBob25lTnVtYmVyICYmICF2YWx1ZXMuZW1haWwpIHtcclxuICAgIGVycm9ycy51c2VyTmFtZSA9IFZhbGlkYXRlTWVzc2FnZS5SRVFVSVJFRDtcclxuICAgIGVycm9ycy5waG9uZU51bWJlciA9IFZhbGlkYXRlTWVzc2FnZS5SRVFVSVJFRDtcclxuICAgIGVycm9ycy5lbWFpbCA9IFZhbGlkYXRlTWVzc2FnZS5SRVFVSVJFRDtcclxuICB9XHJcbiAgaWYgKHZhbHVlcy51c2VyTmFtZSAmJiB2YWx1ZXMudXNlck5hbWUgPT0gXCLQuNC80Y9cIikge1xyXG4gICAgZXJyb3JzLnVzZXJOYW1lID0gVmFsaWRhdGVNZXNzYWdlLk5BTUU7XHJcbiAgfVxyXG4gIHJldHVybiBlcnJvcnM7XHJcbn07XHJcbiIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBtYXRlcmlhbC11aS9jb3JlL0J1dHRvblwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAbWF0ZXJpYWwtdWkvY29yZS9DaXJjdWxhclByb2dyZXNzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBtYXRlcmlhbC11aS9jb3JlL0RpYWxvZ1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAbWF0ZXJpYWwtdWkvY29yZS9Gb3JtSGVscGVyVGV4dFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAbWF0ZXJpYWwtdWkvY29yZS9QYXBlclwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAbWF0ZXJpYWwtdWkvY29yZS9UZXh0RmllbGRcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQG1hdGVyaWFsLXVpL2ljb25zL0Nsb3NlXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImF4aW9zXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvaGVhZFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC1maW5hbC1mb3JtXCIpOyJdLCJzb3VyY2VSb290IjoiIn0=