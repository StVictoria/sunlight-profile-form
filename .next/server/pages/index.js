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

/***/ "./components/Dialog.js":
/*!******************************!*\
  !*** ./components/Dialog.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Dialog; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_core_Dialog__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core/Dialog */ "@material-ui/core/Dialog");
/* harmony import */ var _material_ui_core_Dialog__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Dialog__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _styles_Dialog_module_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../styles/Dialog.module.scss */ "./styles/Dialog.module.scss");
/* harmony import */ var _styles_Dialog_module_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styles_Dialog_module_scss__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "C:\\Users\\vstepnova\\Desktop\\test sunlight\\components\\Dialog.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


function Dialog({
  isOpen,
  onClose
}) {
  return __jsx(_material_ui_core_Dialog__WEBPACK_IMPORTED_MODULE_1___default.a, {
    open: isOpen,
    className: _styles_Dialog_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a["MuiDialog-paper"],
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 5
    }
  }, "Dialog", __jsx("button", {
    onClick: onClose,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 7
    }
  }, "Close"));
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
/* harmony import */ var _material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core/Paper */ "@material-ui/core/Paper");
/* harmony import */ var _material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_final_form__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-final-form */ "react-final-form");
/* harmony import */ var react_final_form__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_final_form__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/TextField */ "@material-ui/core/TextField");
/* harmony import */ var _material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _styles_UserForm_module_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../styles/UserForm.module.scss */ "./styles/UserForm.module.scss");
/* harmony import */ var _styles_UserForm_module_scss__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_styles_UserForm_module_scss__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _utils_validate__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../utils/validate */ "./utils/validate.js");
/* harmony import */ var _ErrorMessage__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./ErrorMessage */ "./components/ErrorMessage.js");
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
    0: isError,
    1: setError
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);

  const handleFormSubmit = values => {
    handleDialogOpen(); // axios
    //   .post("http://localhost:3005/api", JSON.stringify(values))
    //   .catch((error) => console.log(error.response));

    console.log(values);
  };

  const renderUserForm = fields => fields.map(field => __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, {
    key: field.id,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51,
      columnNumber: 7
    }
  }, __jsx(react_final_form__WEBPACK_IMPORTED_MODULE_2__["Field"], {
    name: field.name,
    className: _styles_UserForm_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a.TextField,
    render: (_ref) => {
      let {
        input,
        meta
      } = _ref,
          rest = _objectWithoutProperties(_ref, ["input", "meta"]);

      return __jsx("div", {
        className: _styles_UserForm_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a.FieldItem,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 56,
          columnNumber: 13
        }
      }, __jsx("label", {
        htmlFor: field.id,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 57,
          columnNumber: 15
        }
      }, __jsx("img", {
        src: field.iconPath,
        className: _styles_UserForm_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a.FieldIcon,
        alt: field.label,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 58,
          columnNumber: 17
        }
      })), __jsx(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_3___default.a, _extends({
        id: field.name
      }, input, rest, {
        placeholder: field.placeholder,
        type: field.type,
        error: Object(_utils_validate__WEBPACK_IMPORTED_MODULE_5__["isFieldError"])(meta),
        label: field.label,
        className: _styles_UserForm_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a.TextField,
        variant: "outlined",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 64,
          columnNumber: 15
        }
      })), __jsx(_ErrorMessage__WEBPACK_IMPORTED_MODULE_6__["default"], {
        meta: meta,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 75,
          columnNumber: 15
        }
      }));
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52,
      columnNumber: 9
    }
  }), fields.length - 1 !== field.id ? __jsx("div", {
    className: _styles_UserForm_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a.Divider,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 80,
      columnNumber: 11
    }
  }) : null));

  return __jsx(_material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_1___default.a, {
    className: _styles_UserForm_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a.UserFormMuiPaper,
    style: isFormOpen ? {
      display: "block"
    } : {
      display: "none"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 86,
      columnNumber: 5
    }
  }, __jsx(react_final_form__WEBPACK_IMPORTED_MODULE_2__["Form"], {
    onSubmit: handleFormSubmit,
    validate: _utils_validate__WEBPACK_IMPORTED_MODULE_5__["validateForm"],
    render: ({
      handleSubmit,
      values
    }) => __jsx("form", {
      onSubmit: handleSubmit,
      className: _styles_UserForm_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a.UserForm,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 94,
        columnNumber: 11
      }
    }, __jsx("section", {
      className: _styles_UserForm_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a.MainFormContent,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 95,
        columnNumber: 13
      }
    }, renderUserForm(fields)), __jsx("button", {
      type: "submit",
      className: _styles_UserForm_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a.SubmitButton,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 99,
        columnNumber: 13
      }
    }, "\u0421\u043E\u0445\u0440\u0430\u043D\u0438\u0442\u044C \u0438\u0437\u043C\u0435\u043D\u0435\u043D\u0438\u044F")),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 90,
      columnNumber: 7
    }
  }));
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
/* harmony import */ var _components_Dialog__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/Dialog */ "./components/Dialog.js");
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
  }), __jsx(_components_Dialog__WEBPACK_IMPORTED_MODULE_6__["default"], {
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

/***/ "./styles/Dialog.module.scss":
/*!***********************************!*\
  !*** ./styles/Dialog.module.scss ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

// Exports
module.exports = {
	"MuiDialog-paper": "Dialog_MuiDialog-paper__2Dxjz"
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
	"SubmitButton": "UserForm_SubmitButton__2hUJg",
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9EaWFsb2cuanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9FcnJvck1lc3NhZ2UuanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9IZWFkZXIuanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9Qcm9maWxlLmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvVXNlckZvcm0uanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy91c2VEaWFsb2dIb29rLmpzIiwid2VicGFjazovLy8uL3BhZ2VzL2luZGV4LmpzIiwid2VicGFjazovLy8uL3N0eWxlcy9BcHAubW9kdWxlLnNjc3MiLCJ3ZWJwYWNrOi8vLy4vc3R5bGVzL0RpYWxvZy5tb2R1bGUuc2NzcyIsIndlYnBhY2s6Ly8vLi9zdHlsZXMvSGVhZGVyLm1vZHVsZS5zY3NzIiwid2VicGFjazovLy8uL3N0eWxlcy9Qcm9maWxlLm1vZHVsZS5zY3NzIiwid2VicGFjazovLy8uL3N0eWxlcy9Vc2VyRm9ybS5tb2R1bGUuc2NzcyIsIndlYnBhY2s6Ly8vLi91dGlscy92YWxpZGF0ZS5qcyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAbWF0ZXJpYWwtdWkvY29yZS9CdXR0b25cIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAbWF0ZXJpYWwtdWkvY29yZS9EaWFsb2dcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAbWF0ZXJpYWwtdWkvY29yZS9Gb3JtSGVscGVyVGV4dFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBtYXRlcmlhbC11aS9jb3JlL1BhcGVyXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQG1hdGVyaWFsLXVpL2NvcmUvVGV4dEZpZWxkXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQG1hdGVyaWFsLXVpL2ljb25zL0Nsb3NlXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibmV4dC9oZWFkXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3RcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC1maW5hbC1mb3JtXCIiXSwibmFtZXMiOlsiRGlhbG9nIiwiaXNPcGVuIiwib25DbG9zZSIsIkRpYWxvZ1N0eWxlcyIsIkVycm9yTWVzc2FnZSIsIm1ldGEiLCJub0Vycm9yTWVzc2FnZSIsImlzRmllbGRFcnJvciIsImVycm9yIiwiVmFsaWRhdGVNZXNzYWdlIiwiUkVRVUlSRUQiLCJIZWFkZXIiLCJIZWFkZXJTdHlsZXMiLCJOb3RpZmljYXRpb25zIiwiRGl2aWRlciIsIkhlYWRlclVzZXJJbmZvIiwiVXNlckljb24iLCJVc2VyTmFtZSIsIlByb2ZpbGUiLCJpc0Zvcm1PcGVuIiwib25Gb3JtQ2xvc2UiLCJoYW5kbGVEaWFsb2dPcGVuIiwiUHJvZmlsZVN0eWxlcyIsIlVzZXJJbmZvTXVpUGFwZXIiLCJNYWluSW5mbyIsIlByb2ZpbGVVc2VySWNvbiIsIkNsb3NlQnV0dG9uIiwiQ2xvc2VJY29uIiwiZmllbGRzIiwiaWQiLCJuYW1lIiwibGFiZWwiLCJwbGFjZWhvbGRlciIsInR5cGUiLCJpY29uUGF0aCIsIlVzZXJGb3JtIiwiaXNFcnJvciIsInNldEVycm9yIiwidXNlU3RhdGUiLCJoYW5kbGVGb3JtU3VibWl0IiwidmFsdWVzIiwiY29uc29sZSIsImxvZyIsInJlbmRlclVzZXJGb3JtIiwibWFwIiwiZmllbGQiLCJVc2VyRm9ybVN0eWxlcyIsIlRleHRGaWVsZCIsImlucHV0IiwicmVzdCIsIkZpZWxkSXRlbSIsIkZpZWxkSWNvbiIsImxlbmd0aCIsIlVzZXJGb3JtTXVpUGFwZXIiLCJkaXNwbGF5IiwidmFsaWRhdGVGb3JtIiwiaGFuZGxlU3VibWl0IiwiTWFpbkZvcm1Db250ZW50IiwiU3VibWl0QnV0dG9uIiwidXNlRGlhbG9nSG9vayIsInNldERpYWxvZ09wZW4iLCJoYW5kbGVEaWFsb2dDbG9zZSIsIkFwcCIsInNldEZvcm1DbG9zZSIsImhhbmRsZUZvcm1DbG9zZSIsIkFwcFN0eWxlcyIsIk1haW5Db250ZW50IiwiUHJvZmlsZUhlYWRlciIsIlByb2ZpbGVSb3V0ZXNIZWFkZXIiLCJOQU1FIiwiRU1BSUwiLCJQSE9ORSIsIkJvb2xlYW4iLCJzdWJtaXRGYWlsZWQiLCJlcnJvcnMiLCJ1c2VyTmFtZSIsInBob25lTnVtYmVyIiwiZW1haWwiXSwibWFwcGluZ3MiOiI7O1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSxJQUFJO1FBQ0o7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLHlDQUF5QyxpQ0FBaUM7UUFDMUUsZ0hBQWdILG1CQUFtQixFQUFFO1FBQ3JJO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMkJBQTJCLDBCQUEwQixFQUFFO1FBQ3ZELGlDQUFpQyxlQUFlO1FBQ2hEO1FBQ0E7UUFDQTs7UUFFQTtRQUNBLHNEQUFzRCwrREFBK0Q7O1FBRXJIO1FBQ0E7OztRQUdBO1FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3hGQTtBQUVBO0FBRWUsU0FBU0EsTUFBVCxDQUFnQjtBQUFFQyxRQUFGO0FBQVVDO0FBQVYsQ0FBaEIsRUFBcUM7QUFDbEQsU0FDRSxNQUFDLCtEQUFEO0FBQVcsUUFBSSxFQUFFRCxNQUFqQjtBQUF5QixhQUFTLEVBQUVFLGlFQUFZLENBQUMsaUJBQUQsQ0FBaEQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQUVFO0FBQVEs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Q0FBLHdEOzs7Ozs7Ozs7OztBQ0FBLHFEOzs7Ozs7Ozs7OztBQ0FBLHNDOzs7Ozs7Ozs7OztBQ0FBLGtDOzs7Ozs7Ozs7OztBQ0FBLDZDIiwiZmlsZSI6InBhZ2VzL2luZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSByZXF1aXJlKCcuLi9zc3ItbW9kdWxlLWNhY2hlLmpzJyk7XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdHZhciB0aHJldyA9IHRydWU7XG4gXHRcdHRyeSB7XG4gXHRcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG4gXHRcdFx0dGhyZXcgPSBmYWxzZTtcbiBcdFx0fSBmaW5hbGx5IHtcbiBcdFx0XHRpZih0aHJldykgZGVsZXRlIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdO1xuIFx0XHR9XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9wYWdlcy9pbmRleC5qc1wiKTtcbiIsImltcG9ydCBNdWlEaWFsb2cgZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlL0RpYWxvZ1wiO1xyXG5cclxuaW1wb3J0IERpYWxvZ1N0eWxlcyBmcm9tIFwiLi4vc3R5bGVzL0RpYWxvZy5tb2R1bGUuc2Nzc1wiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gRGlhbG9nKHsgaXNPcGVuLCBvbkNsb3NlIH0pIHtcclxuICByZXR1cm4gKFxyXG4gICAgPE11aURpYWxvZyBvcGVuPXtpc09wZW59IGNsYXNzTmFtZT17RGlhbG9nU3R5bGVzW1wiTXVpRGlhbG9nLXBhcGVyXCJdfT5cclxuICAgICAgRGlhbG9nXHJcbiAgICAgIDxidXR0b24gb25DbGljaz17b25DbG9zZX0+Q2xvc2U8L2J1dHRvbj5cclxuICAgIDwvTXVpRGlhbG9nPlxyXG4gICk7XHJcbn1cclxuIiwiaW1wb3J0IEZvcm1IZWxwZXJUZXh0IGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZS9Gb3JtSGVscGVyVGV4dFwiO1xyXG5cclxuaW1wb3J0IHsgaXNGaWVsZEVycm9yIH0gZnJvbSBcIi4uL3V0aWxzL3ZhbGlkYXRlXCI7XHJcbmltcG9ydCB7IFZhbGlkYXRlTWVzc2FnZSB9IGZyb20gXCIuLi91dGlscy92YWxpZGF0ZVwiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gRXJyb3JNZXNzYWdlKHsgbWV0YSwgbm9FcnJvck1lc3NhZ2UgfSkge1xyXG4gIGlmIChub0Vycm9yTWVzc2FnZSkge1xyXG4gICAgcmV0dXJuIG51bGw7XHJcbiAgfVxyXG4gIHJldHVybiAoXHJcbiAgICBpc0ZpZWxkRXJyb3IobWV0YSkgJiZcclxuICAgIG1ldGEuZXJyb3IgIT09IFZhbGlkYXRlTWVzc2FnZS5SRVFVSVJFRCAmJiAoXHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiRXJyb3JNZXNzYWdlXCI+XHJcbiAgICAgICAgPEZvcm1IZWxwZXJUZXh0IGVycm9yPnttZXRhLmVycm9yfTwvRm9ybUhlbHBlclRleHQ+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgKVxyXG4gICk7XHJcbn1cclxuIiwiaW1wb3J0IEhlYWRlclN0eWxlcyBmcm9tIFwiLi4vc3R5bGVzL0hlYWRlci5tb2R1bGUuc2Nzc1wiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSGVhZGVyKCkge1xyXG4gIHJldHVybiAoXHJcbiAgICA8c2VjdGlvbiBjbGFzc05hbWU9e0hlYWRlclN0eWxlcy5IZWFkZXJ9PlxyXG4gICAgICA8aW1nXHJcbiAgICAgICAgc3JjPVwiL25vdGlmaWNhdGlvbi5wbmdcIlxyXG4gICAgICAgIGNsYXNzTmFtZT17SGVhZGVyU3R5bGVzLk5vdGlmaWNhdGlvbnN9XHJcbiAgICAgICAgYWx0PVwibm90aWZpY2F0aW9uc1wiXHJcbiAgICAgIC8+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtIZWFkZXJTdHlsZXMuRGl2aWRlcn0gLz5cclxuICAgICAgPHNlY3Rpb24gY2xhc3NOYW1lPXtIZWFkZXJTdHlsZXMuSGVhZGVyVXNlckluZm99PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtgJHtIZWFkZXJTdHlsZXMuVXNlckljb259IFVzZXJJY29uYH0gLz5cclxuICAgICAgICA8cCBjbGFzc05hbWU9e0hlYWRlclN0eWxlcy5Vc2VyTmFtZX0+0JjQstCw0L3QvtCy0LAg0JAuPC9wPlxyXG4gICAgICA8L3NlY3Rpb24+XHJcbiAgICA8L3NlY3Rpb24+XHJcbiAgKTtcclxufVxyXG4iLCJpbXBvcnQgUGFwZXIgZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlL1BhcGVyXCI7XHJcbmltcG9ydCBCdXR0b24gZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlL0J1dHRvblwiO1xyXG5pbXBvcnQgQ2xvc2VJY29uIGZyb20gXCJAbWF0ZXJpYWwtdWkvaWNvbnMvQ2xvc2VcIjtcclxuXHJcbmltcG9ydCBQcm9maWxlU3R5bGVzIGZyb20gXCIuLi9zdHlsZXMvUHJvZmlsZS5tb2R1bGUuc2Nzc1wiO1xyXG5pbXBvcnQgVXNlckZvcm0gZnJvbSBcIi4vVXNlckZvcm0uanNcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFByb2ZpbGUoeyBpc0Zvcm1PcGVuLCBvbkZvcm1DbG9zZSwgaGFuZGxlRGlhbG9nT3BlbiB9KSB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxzZWN0aW9uIGNsYXNzTmFtZT17UHJvZmlsZVN0eWxlcy5Qcm9maWxlfT5cclxuICAgICAgPFBhcGVyIGNsYXNzTmFtZT17UHJvZmlsZVN0eWxlcy5Vc2VySW5mb011aVBhcGVyfT5cclxuICAgICAgICA8c2VjdGlvbiBjbGFzc05hbWU9e1Byb2ZpbGVTdHlsZXMuTWFpbkluZm99PlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2Ake1Byb2ZpbGVTdHlsZXMuUHJvZmlsZVVzZXJJY29ufSBVc2VySWNvbmB9IC8+XHJcbiAgICAgICAgICA8cCBjbGFzc05hbWU9e1Byb2ZpbGVTdHlsZXMuVXNlck5hbWV9PtCY0LLQsNC90L7QstCwINCQ0L3QvdCwINCc0LjRhdCw0LnQu9C+0LLQvdCwPC9wPlxyXG4gICAgICAgIDwvc2VjdGlvbj5cclxuXHJcbiAgICAgICAgPEJ1dHRvblxyXG4gICAgICAgICAgY2xhc3NOYW1lPXtQcm9maWxlU3R5bGVzLkNsb3NlQnV0dG9ufVxyXG4gICAgICAgICAgb25DbGljaz17b25Gb3JtQ2xvc2V9XHJcbiAgICAgICAgICBjb2xvcj1cInByaW1hcnlcIlxyXG4gICAgICAgICAgZW5kSWNvbj17PENsb3NlSWNvbiBjbGFzc05hbWU9e1Byb2ZpbGVTdHlsZXMuQ2xvc2VJY29ufSAvPn1cclxuICAgICAgICA+XHJcbiAgICAgICAgICB7aXNGb3JtT3BlbiA/IFwi0JfQsNC60YDRi9GC0YxcIiA6IFwi0J7RgtC60YDRi9GC0YxcIn1cclxuICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgPC9QYXBlcj5cclxuICAgICAgPFVzZXJGb3JtIGhhbmRsZURpYWxvZ09wZW49e2hhbmRsZURpYWxvZ09wZW59IGlzRm9ybU9wZW49e2lzRm9ybU9wZW59IC8+XHJcbiAgICA8L3NlY3Rpb24+XHJcbiAgKTtcclxufVxyXG4iLCJpbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgUGFwZXIgZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlL1BhcGVyXCI7XHJcbmltcG9ydCB7IEZvcm0sIEZpZWxkIH0gZnJvbSBcInJlYWN0LWZpbmFsLWZvcm1cIjtcclxuaW1wb3J0IFRleHRGaWVsZCBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvVGV4dEZpZWxkXCI7XHJcblxyXG5pbXBvcnQgVXNlckZvcm1TdHlsZXMgZnJvbSBcIi4uL3N0eWxlcy9Vc2VyRm9ybS5tb2R1bGUuc2Nzc1wiO1xyXG5pbXBvcnQgeyB2YWxpZGF0ZUZvcm0sIGlzRmllbGRFcnJvciB9IGZyb20gXCIuLi91dGlscy92YWxpZGF0ZVwiO1xyXG5pbXBvcnQgRXJyb3JNZXNzYWdlIGZyb20gXCIuL0Vycm9yTWVzc2FnZVwiO1xyXG5cclxuY29uc3QgZmllbGRzID0gW1xyXG4gIHtcclxuICAgIGlkOiAwLFxyXG4gICAgbmFtZTogXCJ1c2VyTmFtZVwiLFxyXG4gICAgbGFiZWw6IFwi0KTQsNC80LjQu9C40Y8g0Lgg0LjQvNGPXCIsXHJcbiAgICBwbGFjZWhvbGRlcjogXCLQo9C60LDQttC40YLQtSDQktCw0YjRgyDQstCw0LzQuNC70LjRjiDQuCDQuNC80Y9cIixcclxuICAgIHR5cGU6IFwidGV4dFwiLFxyXG4gICAgaWNvblBhdGg6IFwiL2JhZGdlLnBuZ1wiLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgaWQ6IDEsXHJcbiAgICBuYW1lOiBcImVtYWlsXCIsXHJcbiAgICBsYWJlbDogXCJFLW1haWxcIixcclxuICAgIHBsYWNlaG9sZGVyOiBcIml2YW5vdmFAbWFpbC5ydVwiLFxyXG4gICAgdHlwZTogXCJlbWFpbFwiLFxyXG4gICAgaWNvblBhdGg6IFwiL21haWwucG5nXCIsXHJcbiAgfSxcclxuICB7XHJcbiAgICBpZDogMixcclxuICAgIG5hbWU6IFwicGhvbmVOdW1iZXJcIixcclxuICAgIGxhYmVsOiBcItCd0L7QvNC10YAg0YLQtdC70LXRhNC+0L3QsFwiLFxyXG4gICAgdHlwZTogXCJ0ZWxcIixcclxuICAgIHBsYWNlaG9sZGVyOiBcItCj0LrQsNC20LjRgtC1INC90L7QvNC10YAg0YLQtdC70LXRhNC+0L3QsFwiLFxyXG4gICAgaWNvblBhdGg6IFwiL3Bob25lLnBuZ1wiLFxyXG4gIH0sXHJcbl07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBVc2VyRm9ybSh7IGlzRm9ybU9wZW4sIGhhbmRsZURpYWxvZ09wZW4gfSkge1xyXG4gIGNvbnN0IFtpc0Vycm9yLCBzZXRFcnJvcl0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcblxyXG4gIGNvbnN0IGhhbmRsZUZvcm1TdWJtaXQgPSAodmFsdWVzKSA9PiB7XHJcbiAgICBoYW5kbGVEaWFsb2dPcGVuKCk7XHJcbiAgICAvLyBheGlvc1xyXG4gICAgLy8gICAucG9zdChcImh0dHA6Ly9sb2NhbGhvc3Q6MzAwNS9hcGlcIiwgSlNPTi5zdHJpbmdpZnkodmFsdWVzKSlcclxuICAgIC8vICAgLmNhdGNoKChlcnJvcikgPT4gY29uc29sZS5sb2coZXJyb3IucmVzcG9uc2UpKTtcclxuXHJcbiAgICBjb25zb2xlLmxvZyh2YWx1ZXMpO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IHJlbmRlclVzZXJGb3JtID0gKGZpZWxkcykgPT5cclxuICAgIGZpZWxkcy5tYXAoKGZpZWxkKSA9PiAoXHJcbiAgICAgIDxSZWFjdC5GcmFnbWVudCBrZXk9e2ZpZWxkLmlkfT5cclxuICAgICAgICA8RmllbGRcclxuICAgICAgICAgIG5hbWU9e2ZpZWxkLm5hbWV9XHJcbiAgICAgICAgICBjbGFzc05hbWU9e1VzZXJGb3JtU3R5bGVzLlRleHRGaWVsZH1cclxuICAgICAgICAgIHJlbmRlcj17KHsgaW5wdXQsIG1ldGEsIC4uLnJlc3QgfSkgPT4gKFxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17VXNlckZvcm1TdHlsZXMuRmllbGRJdGVtfT5cclxuICAgICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj17ZmllbGQuaWR9PlxyXG4gICAgICAgICAgICAgICAgPGltZ1xyXG4gICAgICAgICAgICAgICAgICBzcmM9e2ZpZWxkLmljb25QYXRofVxyXG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e1VzZXJGb3JtU3R5bGVzLkZpZWxkSWNvbn1cclxuICAgICAgICAgICAgICAgICAgYWx0PXtmaWVsZC5sYWJlbH1cclxuICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgPC9sYWJlbD5cclxuICAgICAgICAgICAgICA8VGV4dEZpZWxkXHJcbiAgICAgICAgICAgICAgICBpZD17ZmllbGQubmFtZX1cclxuICAgICAgICAgICAgICAgIHsuLi5pbnB1dH1cclxuICAgICAgICAgICAgICAgIHsuLi5yZXN0fVxyXG4gICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9e2ZpZWxkLnBsYWNlaG9sZGVyfVxyXG4gICAgICAgICAgICAgICAgdHlwZT17ZmllbGQudHlwZX1cclxuICAgICAgICAgICAgICAgIGVycm9yPXtpc0ZpZWxkRXJyb3IobWV0YSl9XHJcbiAgICAgICAgICAgICAgICBsYWJlbD17ZmllbGQubGFiZWx9XHJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9e1VzZXJGb3JtU3R5bGVzLlRleHRGaWVsZH1cclxuICAgICAgICAgICAgICAgIHZhcmlhbnQ9XCJvdXRsaW5lZFwiXHJcbiAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICA8RXJyb3JNZXNzYWdlIG1ldGE9e21ldGF9IC8+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgKX1cclxuICAgICAgICAvPlxyXG4gICAgICAgIHtmaWVsZHMubGVuZ3RoIC0gMSAhPT0gZmllbGQuaWQgPyAoXHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17VXNlckZvcm1TdHlsZXMuRGl2aWRlcn0gLz5cclxuICAgICAgICApIDogbnVsbH1cclxuICAgICAgPC9SZWFjdC5GcmFnbWVudD5cclxuICAgICkpO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPFBhcGVyXHJcbiAgICAgIGNsYXNzTmFtZT17VXNlckZvcm1TdHlsZXMuVXNlckZvcm1NdWlQYXBlcn1cclxuICAgICAgc3R5bGU9e2lzRm9ybU9wZW4gPyB7IGRpc3BsYXk6IFwiYmxvY2tcIiB9IDogeyBkaXNwbGF5OiBcIm5vbmVcIiB9fVxyXG4gICAgPlxyXG4gICAgICA8Rm9ybVxyXG4gICAgICAgIG9uU3VibWl0PXtoYW5kbGVGb3JtU3VibWl0fVxyXG4gICAgICAgIHZhbGlkYXRlPXt2YWxpZGF0ZUZvcm19XHJcbiAgICAgICAgcmVuZGVyPXsoeyBoYW5kbGVTdWJtaXQsIHZhbHVlcyB9KSA9PiAoXHJcbiAgICAgICAgICA8Zm9ybSBvblN1Ym1pdD17aGFuZGxlU3VibWl0fSBjbGFzc05hbWU9e1VzZXJGb3JtU3R5bGVzLlVzZXJGb3JtfT5cclxuICAgICAgICAgICAgPHNlY3Rpb24gY2xhc3NOYW1lPXtVc2VyRm9ybVN0eWxlcy5NYWluRm9ybUNvbnRlbnR9PlxyXG4gICAgICAgICAgICAgIHtyZW5kZXJVc2VyRm9ybShmaWVsZHMpfVxyXG4gICAgICAgICAgICA8L3NlY3Rpb24+XHJcblxyXG4gICAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJzdWJtaXRcIiBjbGFzc05hbWU9e1VzZXJGb3JtU3R5bGVzLlN1Ym1pdEJ1dHRvbn0+XHJcbiAgICAgICAgICAgICAg0KHQvtGF0YDQsNC90LjRgtGMINC40LfQvNC10L3QtdC90LjRj1xyXG4gICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgey8qIDxwIGNsYXNzTmFtZT17VXNlckZvcm1TdHlsZXMuU3VjY2Vzc01lc3NhZ2V9PlxyXG4gICAgICAgICAgICAgINCY0LfQvNC10L3QtdC90LjRjyDRgdC+0YXRgNCw0L3QtdC90YshICjQvdC+INGN0YLQviDQvdC1INGC0L7Rh9C90L4pXHJcbiAgICAgICAgICAgIDwvcD4gKi99XHJcbiAgICAgICAgICA8L2Zvcm0+XHJcbiAgICAgICAgKX1cclxuICAgICAgLz5cclxuICAgIDwvUGFwZXI+XHJcbiAgKTtcclxufVxyXG4iLCJpbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gdXNlRGlhbG9nSG9vaygpIHtcclxuICBjb25zdCBbaXNPcGVuLCBzZXREaWFsb2dPcGVuXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuXHJcbiAgY29uc3QgaGFuZGxlRGlhbG9nT3BlbiA9ICgpID0+IHtcclxuICAgIHNldERpYWxvZ09wZW4odHJ1ZSk7XHJcbiAgICBjb25zb2xlLmxvZyhcIm9wZW5cIik7XHJcbiAgfTtcclxuICBjb25zdCBoYW5kbGVEaWFsb2dDbG9zZSA9ICgpID0+IHNldERpYWxvZ09wZW4oZmFsc2UpO1xyXG5cclxuICByZXR1cm4geyBpc09wZW4sIGhhbmRsZURpYWxvZ09wZW4sIGhhbmRsZURpYWxvZ0Nsb3NlIH07XHJcbn1cclxuIiwiaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IEhlYWQgZnJvbSBcIm5leHQvaGVhZFwiO1xyXG5cclxuaW1wb3J0IEFwcFN0eWxlcyBmcm9tIFwiLi4vc3R5bGVzL0FwcC5tb2R1bGUuc2Nzc1wiO1xyXG5pbXBvcnQgdXNlRGlhbG9nSG9vayBmcm9tIFwiLi4vY29tcG9uZW50cy91c2VEaWFsb2dIb29rXCI7XHJcbmltcG9ydCBQcm9maWxlIGZyb20gXCIuLi9jb21wb25lbnRzL1Byb2ZpbGVcIjtcclxuaW1wb3J0IEhlYWRlciBmcm9tIFwiLi4vY29tcG9uZW50cy9IZWFkZXJcIjtcclxuaW1wb3J0IERpYWxvZyBmcm9tIFwiLi4vY29tcG9uZW50cy9EaWFsb2dcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEFwcCgpIHtcclxuICBjb25zdCBbaXNGb3JtT3Blbiwgc2V0Rm9ybUNsb3NlXSA9IHVzZVN0YXRlKHRydWUpO1xyXG4gIGNvbnN0IHsgaXNPcGVuLCBoYW5kbGVEaWFsb2dPcGVuLCBoYW5kbGVEaWFsb2dDbG9zZSB9ID0gdXNlRGlhbG9nSG9vaygpO1xyXG5cclxuICBjb25zdCBoYW5kbGVGb3JtQ2xvc2UgPSAoKSA9PiBzZXRGb3JtQ2xvc2UoIWlzRm9ybU9wZW4pO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPHNlY3Rpb24gY2xhc3NOYW1lPVwiQXBwXCI+XHJcbiAgICAgIDxIZWFkPlxyXG4gICAgICAgIDx0aXRsZT5UZXN0IEZ1bG9neTwvdGl0bGU+XHJcbiAgICAgICAgPGxpbmtcclxuICAgICAgICAgIGhyZWY9XCJodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PU9wZW4rU2Fuczp3Z2h0QDMwMDs0MDA7NjAwJmRpc3BsYXk9c3dhcFwiXHJcbiAgICAgICAgICByZWw9XCJzdHlsZXNoZWV0XCJcclxuICAgICAgICA+PC9saW5rPlxyXG4gICAgICAgIHsvKiA8bGluayByZWw9XCJpY29uXCIgaHJlZj1cIi9mYXZpY29uLmljb1wiIC8+ICovfVxyXG4gICAgICA8L0hlYWQ+XHJcbiAgICAgIDxtYWluPlxyXG4gICAgICAgIDxoMSBjbGFzc05hbWU9XCJIaWRkZW5cIj7QpNC+0YDQvNCwPC9oMT5cclxuICAgICAgICA8c2VjdGlvbiBjbGFzc05hbWU9e0FwcFN0eWxlcy5NYWluQ29udGVudH0+XHJcbiAgICAgICAgICA8SGVhZGVyIC8+XHJcbiAgICAgICAgICA8aDIgY2xhc3NOYW1lPXtBcHBTdHlsZXMuUHJvZmlsZUhlYWRlcn0+0JvQuNGH0L3Ri9C5INC/0YDQvtGE0LjQu9GMPC9oMj5cclxuICAgICAgICAgIDxoMyBjbGFzc05hbWU9e0FwcFN0eWxlcy5Qcm9maWxlUm91dGVzSGVhZGVyfT5cclxuICAgICAgICAgICAg0JPQu9Cw0LLQvdCw0Y8v0JvQuNGH0L3Ri9C5INC/0YDQvtGE0LjQu9GMXHJcbiAgICAgICAgICA8L2gzPlxyXG4gICAgICAgICAgPFByb2ZpbGVcclxuICAgICAgICAgICAgaGFuZGxlRGlhbG9nT3Blbj17aGFuZGxlRGlhbG9nT3Blbn1cclxuICAgICAgICAgICAgaXNGb3JtT3Blbj17aXNGb3JtT3Blbn1cclxuICAgICAgICAgICAgb25Gb3JtQ2xvc2U9e2hhbmRsZUZvcm1DbG9zZX1cclxuICAgICAgICAgIC8+XHJcbiAgICAgICAgICA8RGlhbG9nIGlzT3Blbj17aXNPcGVufSBvbkNsb3NlPXtoYW5kbGVEaWFsb2dDbG9zZX0gLz5cclxuICAgICAgICA8L3NlY3Rpb24+XHJcbiAgICAgIDwvbWFpbj5cclxuICAgIDwvc2VjdGlvbj5cclxuICApO1xyXG59XHJcbiIsIi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0ge1xuXHRcIkFwcFwiOiBcIkFwcF9BcHBfXzNMU04wXCIsXG5cdFwiUHJvZmlsZUhlYWRlclwiOiBcIkFwcF9Qcm9maWxlSGVhZGVyX18zbkFYZVwiLFxuXHRcIlByb2ZpbGVSb3V0ZXNIZWFkZXJcIjogXCJBcHBfUHJvZmlsZVJvdXRlc0hlYWRlcl9fMnJoOC1cIixcblx0XCJNYWluQ29udGVudFwiOiBcIkFwcF9NYWluQ29udGVudF9fMkhWcUdcIlxufTtcbiIsIi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0ge1xuXHRcIk11aURpYWxvZy1wYXBlclwiOiBcIkRpYWxvZ19NdWlEaWFsb2ctcGFwZXJfXzJEeGp6XCJcbn07XG4iLCIvLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IHtcblx0XCJIZWFkZXJcIjogXCJIZWFkZXJfSGVhZGVyX18xN1ZKbFwiLFxuXHRcIk5vdGlmaWNhdGlvbnNcIjogXCJIZWFkZXJfTm90aWZpY2F0aW9uc19fbHd2d2dcIixcblx0XCJEaXZpZGVyXCI6IFwiSGVhZGVyX0RpdmlkZXJfXzNzRXpZXCIsXG5cdFwiSGVhZGVyVXNlckluZm9cIjogXCJIZWFkZXJfSGVhZGVyVXNlckluZm9fXzJqbmJGXCIsXG5cdFwiVXNlckljb25cIjogXCJIZWFkZXJfVXNlckljb25fX3NSdFpkXCJcbn07XG4iLCIvLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IHtcblx0XCJQcm9maWxlXCI6IFwiUHJvZmlsZV9Qcm9maWxlX18ydmhoclwiLFxuXHRcIlVzZXJJbmZvTXVpUGFwZXJcIjogXCJQcm9maWxlX1VzZXJJbmZvTXVpUGFwZXJfX1QtbGFSXCIsXG5cdFwiTWFpbkluZm9cIjogXCJQcm9maWxlX01haW5JbmZvX18zMjlaZ1wiLFxuXHRcIlByb2ZpbGVVc2VySWNvblwiOiBcIlByb2ZpbGVfUHJvZmlsZVVzZXJJY29uX19GVjZsOVwiLFxuXHRcIlVzZXJOYW1lXCI6IFwiUHJvZmlsZV9Vc2VyTmFtZV9fM3BESWtcIixcblx0XCJDbG9zZUJ1dHRvblwiOiBcIlByb2ZpbGVfQ2xvc2VCdXR0b25fX3RHMUtjXCIsXG5cdFwiQ2xvc2VJY29uXCI6IFwiUHJvZmlsZV9DbG9zZUljb25fXzEwRE1MXCJcbn07XG4iLCIvLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IHtcblx0XCJVc2VyRm9ybU11aVBhcGVyXCI6IFwiVXNlckZvcm1fVXNlckZvcm1NdWlQYXBlcl9fMklUbDZcIixcblx0XCJVc2VyRm9ybVwiOiBcIlVzZXJGb3JtX1VzZXJGb3JtX18zZkxtcFwiLFxuXHRcIk1haW5Gb3JtQ29udGVudFwiOiBcIlVzZXJGb3JtX01haW5Gb3JtQ29udGVudF9fM2xGMnhcIixcblx0XCJUZXh0RmllbGRcIjogXCJVc2VyRm9ybV9UZXh0RmllbGRfX2U0YXpLXCIsXG5cdFwiRmllbGRJdGVtXCI6IFwiVXNlckZvcm1fRmllbGRJdGVtX181QnZKQlwiLFxuXHRcIkZpZWxkSWNvblwiOiBcIlVzZXJGb3JtX0ZpZWxkSWNvbl9fMzZBZkpcIixcblx0XCJEaXZpZGVyXCI6IFwiVXNlckZvcm1fRGl2aWRlcl9fbEdPbDNcIixcblx0XCJTdWJtaXRCdXR0b25cIjogXCJVc2VyRm9ybV9TdWJtaXRCdXR0b25fXzJoVUpnXCIsXG5cdFwiU3VjY2Vzc01lc3NhZ2VcIjogXCJVc2VyRm9ybV9TdWNjZXNzTWVzc2FnZV9fMUFLaVJcIlxufTtcbiIsImV4cG9ydCBjb25zdCBWYWxpZGF0ZU1lc3NhZ2UgPSB7XHJcbiAgUkVRVUlSRUQ6IFwicmVxdWlyZWRcIixcclxuICBOQU1FOiBcItCd0LXQstC10YDQvdC+0LUg0LjQvNGPXCIsXHJcbiAgRU1BSUw6IFwi0J3QtdCy0LXRgNC90YvQuSDQsNC00YDQtdGBXCIsXHJcbiAgUEhPTkU6IFwi0J3QtdCy0LXRgNC90YvQuSDQvdC+0LzQtdGAINGC0LXQu9C10YTQvtC90LBcIixcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBpc0ZpZWxkRXJyb3IgPSAobWV0YSkgPT4gQm9vbGVhbihtZXRhLmVycm9yICYmIG1ldGEuc3VibWl0RmFpbGVkKTtcclxuXHJcbmV4cG9ydCBjb25zdCB2YWxpZGF0ZUZvcm0gPSAodmFsdWVzKSA9PiB7XHJcbiAgY29uc3QgZXJyb3JzID0ge307XHJcbiAgaWYgKCF2YWx1ZXMudXNlck5hbWUgJiYgIXZhbHVlcy5waG9uZU51bWJlciAmJiAhdmFsdWVzLmVtYWlsKSB7XHJcbiAgICBlcnJvcnMudXNlck5hbWUgPSBWYWxpZGF0ZU1lc3NhZ2UuUkVRVUlSRUQ7XHJcbiAgICBlcnJvcnMucGhvbmVOdW1iZXIgPSBWYWxpZGF0ZU1lc3NhZ2UuUkVRVUlSRUQ7XHJcbiAgICBlcnJvcnMuZW1haWwgPSBWYWxpZGF0ZU1lc3NhZ2UuUkVRVUlSRUQ7XHJcbiAgfVxyXG4gIGlmICh2YWx1ZXMudXNlck5hbWUgJiYgdmFsdWVzLnVzZXJOYW1lID09IFwi0LjQvNGPXCIpIHtcclxuICAgIGVycm9ycy51c2VyTmFtZSA9IFZhbGlkYXRlTWVzc2FnZS5OQU1FO1xyXG4gIH1cclxuICByZXR1cm4gZXJyb3JzO1xyXG59O1xyXG4iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAbWF0ZXJpYWwtdWkvY29yZS9CdXR0b25cIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQG1hdGVyaWFsLXVpL2NvcmUvRGlhbG9nXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBtYXRlcmlhbC11aS9jb3JlL0Zvcm1IZWxwZXJUZXh0XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBtYXRlcmlhbC11aS9jb3JlL1BhcGVyXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBtYXRlcmlhbC11aS9jb3JlL1RleHRGaWVsZFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAbWF0ZXJpYWwtdWkvaWNvbnMvQ2xvc2VcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9oZWFkXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0LWZpbmFsLWZvcm1cIik7Il0sInNvdXJjZVJvb3QiOiIifQ==