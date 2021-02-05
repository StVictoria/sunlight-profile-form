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
/* harmony import */ var _styles_Profile_module_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../styles/Profile.module.scss */ "./styles/Profile.module.scss");
/* harmony import */ var _styles_Profile_module_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styles_Profile_module_scss__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _UserForm_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./UserForm.js */ "./components/UserForm.js");
var _jsxFileName = "C:\\Users\\vstepnova\\Desktop\\test sunlight\\components\\Profile.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



function Profile({
  handleDialogOpen
}) {
  return __jsx("section", {
    className: _styles_Profile_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.Profile,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 5
    }
  }, __jsx(_material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_1___default.a, {
    className: _styles_Profile_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.UserInfoMuiPaper,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 7
    }
  }, __jsx("section", {
    className: _styles_Profile_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.MainInfo,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: `${_styles_Profile_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.ProfileUserIcon} UserIcon`,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 11
    }
  }), __jsx("p", {
    className: _styles_Profile_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.UserName,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 11
    }
  }, "\u0418\u0432\u0430\u043D\u043E\u0432\u0430 \u0410\u043D\u043D\u0430 \u041C\u0438\u0445\u0430\u0439\u043B\u043E\u0432\u043D\u0430")), __jsx("button", {
    className: _styles_Profile_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.Close,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 9
    }
  }, __jsx("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 11
    }
  }, "\u0417\u0430\u043A\u0440\u044B\u0442\u044C "), __jsx("img", {
    src: "/cross.png",
    className: _styles_Profile_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.CloseImg,
    alt: "close",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 11
    }
  }))), __jsx(_UserForm_js__WEBPACK_IMPORTED_MODULE_3__["default"], {
    handleDialogOpen: handleDialogOpen,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24,
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
        lineNumber: 91,
        columnNumber: 11
      }
    }, __jsx("section", {
      className: _styles_UserForm_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a.MainFormContent,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 92,
        columnNumber: 13
      }
    }, renderUserForm(fields)), __jsx("button", {
      type: "submit",
      className: _styles_UserForm_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a.SubmitButton,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 96,
        columnNumber: 13
      }
    }, "\u0421\u043E\u0445\u0440\u0430\u043D\u0438\u0442\u044C \u0438\u0437\u043C\u0435\u043D\u0435\u043D\u0438\u044F")),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 87,
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
    isOpen,
    handleDialogOpen,
    handleDialogClose
  } = Object(_components_useDialogHook__WEBPACK_IMPORTED_MODULE_3__["default"])();
  return __jsx("section", {
    className: "App",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 5
    }
  }, __jsx(next_head__WEBPACK_IMPORTED_MODULE_1___default.a, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 7
    }
  }, __jsx("title", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 9
    }
  }, "Test Fulogy"), __jsx("link", {
    href: "https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400;600&display=swap",
    rel: "stylesheet",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 9
    }
  })), __jsx("main", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 7
    }
  }, __jsx("h1", {
    className: "Hidden",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 9
    }
  }, "\u0424\u043E\u0440\u043C\u0430"), __jsx("section", {
    className: _styles_App_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.MainContent,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 9
    }
  }, __jsx(_components_Header__WEBPACK_IMPORTED_MODULE_5__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 11
    }
  }), __jsx("h2", {
    className: _styles_App_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.ProfileHeader,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 11
    }
  }, "\u041B\u0438\u0447\u043D\u044B\u0439 \u043F\u0440\u043E\u0444\u0438\u043B\u044C"), __jsx("h3", {
    className: _styles_App_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.ProfileRoutesHeader,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 11
    }
  }, "\u0413\u043B\u0430\u0432\u043D\u0430\u044F/\u041B\u0438\u0447\u043D\u044B\u0439 \u043F\u0440\u043E\u0444\u0438\u043B\u044C"), __jsx(_components_Profile__WEBPACK_IMPORTED_MODULE_4__["default"], {
    handleDialogOpen: handleDialogOpen,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 11
    }
  }), __jsx(_components_Dialog__WEBPACK_IMPORTED_MODULE_6__["default"], {
    isOpen: isOpen,
    onClose: handleDialogClose,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31,
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
	"Close": "Profile_Close__3qzxD",
	"CloseImg": "Profile_CloseImg__29mGC"
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9EaWFsb2cuanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9FcnJvck1lc3NhZ2UuanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9IZWFkZXIuanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9Qcm9maWxlLmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvVXNlckZvcm0uanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy91c2VEaWFsb2dIb29rLmpzIiwid2VicGFjazovLy8uL3BhZ2VzL2luZGV4LmpzIiwid2VicGFjazovLy8uL3N0eWxlcy9BcHAubW9kdWxlLnNjc3MiLCJ3ZWJwYWNrOi8vLy4vc3R5bGVzL0RpYWxvZy5tb2R1bGUuc2NzcyIsIndlYnBhY2s6Ly8vLi9zdHlsZXMvSGVhZGVyLm1vZHVsZS5zY3NzIiwid2VicGFjazovLy8uL3N0eWxlcy9Qcm9maWxlLm1vZHVsZS5zY3NzIiwid2VicGFjazovLy8uL3N0eWxlcy9Vc2VyRm9ybS5tb2R1bGUuc2NzcyIsIndlYnBhY2s6Ly8vLi91dGlscy92YWxpZGF0ZS5qcyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAbWF0ZXJpYWwtdWkvY29yZS9EaWFsb2dcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAbWF0ZXJpYWwtdWkvY29yZS9Gb3JtSGVscGVyVGV4dFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBtYXRlcmlhbC11aS9jb3JlL1BhcGVyXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQG1hdGVyaWFsLXVpL2NvcmUvVGV4dEZpZWxkXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibmV4dC9oZWFkXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3RcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC1maW5hbC1mb3JtXCIiXSwibmFtZXMiOlsiRGlhbG9nIiwiaXNPcGVuIiwib25DbG9zZSIsIkRpYWxvZ1N0eWxlcyIsIkVycm9yTWVzc2FnZSIsIm1ldGEiLCJub0Vycm9yTWVzc2FnZSIsImlzRmllbGRFcnJvciIsImVycm9yIiwiVmFsaWRhdGVNZXNzYWdlIiwiUkVRVUlSRUQiLCJIZWFkZXIiLCJIZWFkZXJTdHlsZXMiLCJOb3RpZmljYXRpb25zIiwiRGl2aWRlciIsIkhlYWRlclVzZXJJbmZvIiwiVXNlckljb24iLCJVc2VyTmFtZSIsIlByb2ZpbGUiLCJoYW5kbGVEaWFsb2dPcGVuIiwiUHJvZmlsZVN0eWxlcyIsIlVzZXJJbmZvTXVpUGFwZXIiLCJNYWluSW5mbyIsIlByb2ZpbGVVc2VySWNvbiIsIkNsb3NlIiwiQ2xvc2VJbWciLCJmaWVsZHMiLCJpZCIsIm5hbWUiLCJsYWJlbCIsInBsYWNlaG9sZGVyIiwidHlwZSIsImljb25QYXRoIiwiVXNlckZvcm0iLCJpc0Vycm9yIiwic2V0RXJyb3IiLCJ1c2VTdGF0ZSIsImhhbmRsZUZvcm1TdWJtaXQiLCJ2YWx1ZXMiLCJjb25zb2xlIiwibG9nIiwicmVuZGVyVXNlckZvcm0iLCJtYXAiLCJmaWVsZCIsIlVzZXJGb3JtU3R5bGVzIiwiVGV4dEZpZWxkIiwiaW5wdXQiLCJyZXN0IiwiRmllbGRJdGVtIiwiRmllbGRJY29uIiwibGVuZ3RoIiwiVXNlckZvcm1NdWlQYXBlciIsInZhbGlkYXRlRm9ybSIsImhhbmRsZVN1Ym1pdCIsIk1haW5Gb3JtQ29udGVudCIsIlN1Ym1pdEJ1dHRvbiIsInVzZURpYWxvZ0hvb2siLCJzZXREaWFsb2dPcGVuIiwiaGFuZGxlRGlhbG9nQ2xvc2UiLCJBcHAiLCJBcHBTdHlsZXMiLCJNYWluQ29udGVudCIsIlByb2ZpbGVIZWFkZXIiLCJQcm9maWxlUm91dGVzSGVhZGVyIiwiTkFNRSIsIkVNQUlMIiwiUEhPTkUiLCJCb29sZWFuIiwic3VibWl0RmFpbGVkIiwiZXJyb3JzIiwidXNlck5hbWUiLCJwaG9uZU51bWJlciIsImVtYWlsIl0sIm1hcHBpbmdzIjoiOztRQUFBO1FBQ0E7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N0QsZUFBZSxDQUFDQyxRQUFsQztBQUNBMkQsVUFBTSxDQUFDRSxXQUFQLEdBQXFCOUQsZUFBZSxDQUFDQyxRQUFyQztBQUNBMkQsVUFBTSxDQUFDRyxLQUFQLEdBQWUvRCxlQUFlLENBQUNDLFFBQS9CO0FBQ0Q7O0FBQ0QsTUFBSTRCLE1BQU0sQ0FBQ2dDLFFBQVAsSUFBbUJoQyxNQUFNLENBQUNnQyxRQUFQLElBQW1CLEtBQTFDLEVBQWlEO0FBQy9DRCxVQUFNLENBQUNDLFFBQVAsR0FBa0I3RCxlQUFlLENBQUN1RCxJQUFsQztBQUNEOztBQUNELFNBQU9LLE1BQVA7QUFDRCxDQVhNLEM7Ozs7Ozs7Ozs7O0FDVFAscUQ7Ozs7Ozs7Ozs7O0FDQUEsNkQ7Ozs7Ozs7Ozs7O0FDQUEsb0Q7Ozs7Ozs7Ozs7O0FDQUEsd0Q7Ozs7Ozs7Ozs7O0FDQUEsc0M7Ozs7Ozs7Ozs7O0FDQUEsa0M7Ozs7Ozs7Ozs7O0FDQUEsNkMiLCJmaWxlIjoicGFnZXMvaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHJlcXVpcmUoJy4uL3Nzci1tb2R1bGUtY2FjaGUuanMnKTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0dmFyIHRocmV3ID0gdHJ1ZTtcbiBcdFx0dHJ5IHtcbiBcdFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcbiBcdFx0XHR0aHJldyA9IGZhbHNlO1xuIFx0XHR9IGZpbmFsbHkge1xuIFx0XHRcdGlmKHRocmV3KSBkZWxldGUgaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF07XG4gXHRcdH1cblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3BhZ2VzL2luZGV4LmpzXCIpO1xuIiwiaW1wb3J0IE11aURpYWxvZyBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvRGlhbG9nXCI7XHJcblxyXG5pbXBvcnQgRGlhbG9nU3R5bGVzIGZyb20gXCIuLi9zdHlsZXMvRGlhbG9nLm1vZHVsZS5zY3NzXCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBEaWFsb2coeyBpc09wZW4sIG9uQ2xvc2UgfSkge1xyXG4gIHJldHVybiAoXHJcbiAgICA8TXVpRGlhbG9nIG9wZW49e2lzT3Blbn0gY2xhc3NOYW1lPXtEaWFsb2dTdHlsZXNbXCJNdWlEaWFsb2ctcGFwZXJcIl19PlxyXG4gICAgICBEaWFsb2dcclxuICAgICAgPGJ1dHRvbiBvbkNsaWNrPXtvbkNsb3NlfT5DbG9zZTwvYnV0dG9uPlxyXG4gICAgPC9NdWlEaWFsb2c+XHJcbiAgKTtcclxufVxyXG4iLCJpbXBvcnQgRm9ybUhlbHBlclRleHQgZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlL0Zvcm1IZWxwZXJUZXh0XCI7XHJcblxyXG5pbXBvcnQgeyBpc0ZpZWxkRXJyb3IgfSBmcm9tIFwiLi4vdXRpbHMvdmFsaWRhdGVcIjtcclxuaW1wb3J0IHsgVmFsaWRhdGVNZXNzYWdlIH0gZnJvbSBcIi4uL3V0aWxzL3ZhbGlkYXRlXCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBFcnJvck1lc3NhZ2UoeyBtZXRhLCBub0Vycm9yTWVzc2FnZSB9KSB7XHJcbiAgaWYgKG5vRXJyb3JNZXNzYWdlKSB7XHJcbiAgICByZXR1cm4gbnVsbDtcclxuICB9XHJcbiAgcmV0dXJuIChcclxuICAgIGlzRmllbGRFcnJvcihtZXRhKSAmJlxyXG4gICAgbWV0YS5lcnJvciAhPT0gVmFsaWRhdGVNZXNzYWdlLlJFUVVJUkVEICYmIChcclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJFcnJvck1lc3NhZ2VcIj5cclxuICAgICAgICA8Rm9ybUhlbHBlclRleHQgZXJyb3I+e21ldGEuZXJyb3J9PC9Gb3JtSGVscGVyVGV4dD5cclxuICAgICAgPC9kaXY+XHJcbiAgICApXHJcbiAgKTtcclxufVxyXG4iLCJpbXBvcnQgSGVhZGVyU3R5bGVzIGZyb20gXCIuLi9zdHlsZXMvSGVhZGVyLm1vZHVsZS5zY3NzXCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBIZWFkZXIoKSB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxzZWN0aW9uIGNsYXNzTmFtZT17SGVhZGVyU3R5bGVzLkhlYWRlcn0+XHJcbiAgICAgIDxpbWdcclxuICAgICAgICBzcmM9XCIvbm90aWZpY2F0aW9uLnBuZ1wiXHJcbiAgICAgICAgY2xhc3NOYW1lPXtIZWFkZXJTdHlsZXMuTm90aWZpY2F0aW9uc31cclxuICAgICAgICBhbHQ9XCJub3RpZmljYXRpb25zXCJcclxuICAgICAgLz5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9e0hlYWRlclN0eWxlcy5EaXZpZGVyfSAvPlxyXG4gICAgICA8c2VjdGlvbiBjbGFzc05hbWU9e0hlYWRlclN0eWxlcy5IZWFkZXJVc2VySW5mb30+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e2Ake0hlYWRlclN0eWxlcy5Vc2VySWNvbn0gVXNlckljb25gfSAvPlxyXG4gICAgICAgIDxwIGNsYXNzTmFtZT17SGVhZGVyU3R5bGVzLlVzZXJOYW1lfT7QmNCy0LDQvdC+0LLQsCDQkC48L3A+XHJcbiAgICAgIDwvc2VjdGlvbj5cclxuICAgIDwvc2VjdGlvbj5cclxuICApO1xyXG59XHJcbiIsImltcG9ydCBQYXBlciBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvUGFwZXJcIjtcclxuXHJcbmltcG9ydCBQcm9maWxlU3R5bGVzIGZyb20gXCIuLi9zdHlsZXMvUHJvZmlsZS5tb2R1bGUuc2Nzc1wiO1xyXG5pbXBvcnQgVXNlckZvcm0gZnJvbSBcIi4vVXNlckZvcm0uanNcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFByb2ZpbGUoeyBoYW5kbGVEaWFsb2dPcGVuIH0pIHtcclxuICByZXR1cm4gKFxyXG4gICAgPHNlY3Rpb24gY2xhc3NOYW1lPXtQcm9maWxlU3R5bGVzLlByb2ZpbGV9PlxyXG4gICAgICA8UGFwZXIgY2xhc3NOYW1lPXtQcm9maWxlU3R5bGVzLlVzZXJJbmZvTXVpUGFwZXJ9PlxyXG4gICAgICAgIDxzZWN0aW9uIGNsYXNzTmFtZT17UHJvZmlsZVN0eWxlcy5NYWluSW5mb30+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17YCR7UHJvZmlsZVN0eWxlcy5Qcm9maWxlVXNlckljb259IFVzZXJJY29uYH0gLz5cclxuICAgICAgICAgIDxwIGNsYXNzTmFtZT17UHJvZmlsZVN0eWxlcy5Vc2VyTmFtZX0+0JjQstCw0L3QvtCy0LAg0JDQvdC90LAg0JzQuNGF0LDQudC70L7QstC90LA8L3A+XHJcbiAgICAgICAgPC9zZWN0aW9uPlxyXG5cclxuICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT17UHJvZmlsZVN0eWxlcy5DbG9zZX0+XHJcbiAgICAgICAgICA8cD7Ql9Cw0LrRgNGL0YLRjCA8L3A+XHJcbiAgICAgICAgICA8aW1nXHJcbiAgICAgICAgICAgIHNyYz1cIi9jcm9zcy5wbmdcIlxyXG4gICAgICAgICAgICBjbGFzc05hbWU9e1Byb2ZpbGVTdHlsZXMuQ2xvc2VJbWd9XHJcbiAgICAgICAgICAgIGFsdD1cImNsb3NlXCJcclxuICAgICAgICAgIC8+XHJcbiAgICAgICAgPC9idXR0b24+XHJcbiAgICAgIDwvUGFwZXI+XHJcbiAgICAgIDxVc2VyRm9ybSBoYW5kbGVEaWFsb2dPcGVuPXtoYW5kbGVEaWFsb2dPcGVufSAvPlxyXG4gICAgPC9zZWN0aW9uPlxyXG4gICk7XHJcbn1cclxuIiwiaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IFBhcGVyIGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZS9QYXBlclwiO1xyXG5pbXBvcnQgeyBGb3JtLCBGaWVsZCB9IGZyb20gXCJyZWFjdC1maW5hbC1mb3JtXCI7XHJcbmltcG9ydCBUZXh0RmllbGQgZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlL1RleHRGaWVsZFwiO1xyXG5cclxuaW1wb3J0IFVzZXJGb3JtU3R5bGVzIGZyb20gXCIuLi9zdHlsZXMvVXNlckZvcm0ubW9kdWxlLnNjc3NcIjtcclxuaW1wb3J0IHsgdmFsaWRhdGVGb3JtLCBpc0ZpZWxkRXJyb3IgfSBmcm9tIFwiLi4vdXRpbHMvdmFsaWRhdGVcIjtcclxuaW1wb3J0IEVycm9yTWVzc2FnZSBmcm9tIFwiLi9FcnJvck1lc3NhZ2VcIjtcclxuXHJcbmNvbnN0IGZpZWxkcyA9IFtcclxuICB7XHJcbiAgICBpZDogMCxcclxuICAgIG5hbWU6IFwidXNlck5hbWVcIixcclxuICAgIGxhYmVsOiBcItCk0LDQvNC40LvQuNGPINC4INC40LzRj1wiLFxyXG4gICAgcGxhY2Vob2xkZXI6IFwi0KPQutCw0LbQuNGC0LUg0JLQsNGI0YMg0LLQsNC80LjQu9C40Y4g0Lgg0LjQvNGPXCIsXHJcbiAgICB0eXBlOiBcInRleHRcIixcclxuICAgIGljb25QYXRoOiBcIi9iYWRnZS5wbmdcIixcclxuICB9LFxyXG4gIHtcclxuICAgIGlkOiAxLFxyXG4gICAgbmFtZTogXCJlbWFpbFwiLFxyXG4gICAgbGFiZWw6IFwiRS1tYWlsXCIsXHJcbiAgICBwbGFjZWhvbGRlcjogXCJpdmFub3ZhQG1haWwucnVcIixcclxuICAgIHR5cGU6IFwiZW1haWxcIixcclxuICAgIGljb25QYXRoOiBcIi9tYWlsLnBuZ1wiLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgaWQ6IDIsXHJcbiAgICBuYW1lOiBcInBob25lTnVtYmVyXCIsXHJcbiAgICBsYWJlbDogXCLQndC+0LzQtdGAINGC0LXQu9C10YTQvtC90LBcIixcclxuICAgIHR5cGU6IFwidGVsXCIsXHJcbiAgICBwbGFjZWhvbGRlcjogXCLQo9C60LDQttC40YLQtSDQvdC+0LzQtdGAINGC0LXQu9C10YTQvtC90LBcIixcclxuICAgIGljb25QYXRoOiBcIi9waG9uZS5wbmdcIixcclxuICB9LFxyXG5dO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gVXNlckZvcm0oeyBoYW5kbGVEaWFsb2dPcGVuIH0pIHtcclxuICBjb25zdCBbaXNFcnJvciwgc2V0RXJyb3JdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG5cclxuICBjb25zdCBoYW5kbGVGb3JtU3VibWl0ID0gKHZhbHVlcykgPT4ge1xyXG4gICAgaGFuZGxlRGlhbG9nT3BlbigpO1xyXG4gICAgLy8gYXhpb3NcclxuICAgIC8vICAgLnBvc3QoXCJodHRwOi8vbG9jYWxob3N0OjMwMDUvYXBpXCIsIEpTT04uc3RyaW5naWZ5KHZhbHVlcykpXHJcbiAgICAvLyAgIC5jYXRjaCgoZXJyb3IpID0+IGNvbnNvbGUubG9nKGVycm9yLnJlc3BvbnNlKSk7XHJcblxyXG4gICAgY29uc29sZS5sb2codmFsdWVzKTtcclxuICB9O1xyXG5cclxuICBjb25zdCByZW5kZXJVc2VyRm9ybSA9IChmaWVsZHMpID0+XHJcbiAgICBmaWVsZHMubWFwKChmaWVsZCkgPT4gKFxyXG4gICAgICA8UmVhY3QuRnJhZ21lbnQga2V5PXtmaWVsZC5pZH0+XHJcbiAgICAgICAgPEZpZWxkXHJcbiAgICAgICAgICBuYW1lPXtmaWVsZC5uYW1lfVxyXG4gICAgICAgICAgY2xhc3NOYW1lPXtVc2VyRm9ybVN0eWxlcy5UZXh0RmllbGR9XHJcbiAgICAgICAgICByZW5kZXI9eyh7IGlucHV0LCBtZXRhLCAuLi5yZXN0IH0pID0+IChcclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e1VzZXJGb3JtU3R5bGVzLkZpZWxkSXRlbX0+XHJcbiAgICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9e2ZpZWxkLmlkfT5cclxuICAgICAgICAgICAgICAgIDxpbWdcclxuICAgICAgICAgICAgICAgICAgc3JjPXtmaWVsZC5pY29uUGF0aH1cclxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtVc2VyRm9ybVN0eWxlcy5GaWVsZEljb259XHJcbiAgICAgICAgICAgICAgICAgIGFsdD17ZmllbGQubGFiZWx9XHJcbiAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgIDwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgPFRleHRGaWVsZFxyXG4gICAgICAgICAgICAgICAgaWQ9e2ZpZWxkLm5hbWV9XHJcbiAgICAgICAgICAgICAgICB7Li4uaW5wdXR9XHJcbiAgICAgICAgICAgICAgICB7Li4ucmVzdH1cclxuICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPXtmaWVsZC5wbGFjZWhvbGRlcn1cclxuICAgICAgICAgICAgICAgIHR5cGU9e2ZpZWxkLnR5cGV9XHJcbiAgICAgICAgICAgICAgICBlcnJvcj17aXNGaWVsZEVycm9yKG1ldGEpfVxyXG4gICAgICAgICAgICAgICAgbGFiZWw9e2ZpZWxkLmxhYmVsfVxyXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtVc2VyRm9ybVN0eWxlcy5UZXh0RmllbGR9XHJcbiAgICAgICAgICAgICAgICB2YXJpYW50PVwib3V0bGluZWRcIlxyXG4gICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgPEVycm9yTWVzc2FnZSBtZXRhPXttZXRhfSAvPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICl9XHJcbiAgICAgICAgLz5cclxuICAgICAgICB7ZmllbGRzLmxlbmd0aCAtIDEgIT09IGZpZWxkLmlkID8gKFxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9e1VzZXJGb3JtU3R5bGVzLkRpdmlkZXJ9IC8+XHJcbiAgICAgICAgKSA6IG51bGx9XHJcbiAgICAgIDwvUmVhY3QuRnJhZ21lbnQ+XHJcbiAgICApKTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxQYXBlciBjbGFzc05hbWU9e1VzZXJGb3JtU3R5bGVzLlVzZXJGb3JtTXVpUGFwZXJ9PlxyXG4gICAgICA8Rm9ybVxyXG4gICAgICAgIG9uU3VibWl0PXtoYW5kbGVGb3JtU3VibWl0fVxyXG4gICAgICAgIHZhbGlkYXRlPXt2YWxpZGF0ZUZvcm19XHJcbiAgICAgICAgcmVuZGVyPXsoeyBoYW5kbGVTdWJtaXQsIHZhbHVlcyB9KSA9PiAoXHJcbiAgICAgICAgICA8Zm9ybSBvblN1Ym1pdD17aGFuZGxlU3VibWl0fSBjbGFzc05hbWU9e1VzZXJGb3JtU3R5bGVzLlVzZXJGb3JtfT5cclxuICAgICAgICAgICAgPHNlY3Rpb24gY2xhc3NOYW1lPXtVc2VyRm9ybVN0eWxlcy5NYWluRm9ybUNvbnRlbnR9PlxyXG4gICAgICAgICAgICAgIHtyZW5kZXJVc2VyRm9ybShmaWVsZHMpfVxyXG4gICAgICAgICAgICA8L3NlY3Rpb24+XHJcblxyXG4gICAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJzdWJtaXRcIiBjbGFzc05hbWU9e1VzZXJGb3JtU3R5bGVzLlN1Ym1pdEJ1dHRvbn0+XHJcbiAgICAgICAgICAgICAg0KHQvtGF0YDQsNC90LjRgtGMINC40LfQvNC10L3QtdC90LjRj1xyXG4gICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgey8qIDxwIGNsYXNzTmFtZT17VXNlckZvcm1TdHlsZXMuU3VjY2Vzc01lc3NhZ2V9PlxyXG4gICAgICAgICAgICAgINCY0LfQvNC10L3QtdC90LjRjyDRgdC+0YXRgNCw0L3QtdC90YshICjQvdC+INGN0YLQviDQvdC1INGC0L7Rh9C90L4pXHJcbiAgICAgICAgICAgIDwvcD4gKi99XHJcbiAgICAgICAgICA8L2Zvcm0+XHJcbiAgICAgICAgKX1cclxuICAgICAgLz5cclxuICAgIDwvUGFwZXI+XHJcbiAgKTtcclxufVxyXG4iLCJpbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gdXNlRGlhbG9nSG9vaygpIHtcclxuICBjb25zdCBbaXNPcGVuLCBzZXREaWFsb2dPcGVuXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuXHJcbiAgY29uc3QgaGFuZGxlRGlhbG9nT3BlbiA9ICgpID0+IHtcclxuICAgIHNldERpYWxvZ09wZW4odHJ1ZSk7XHJcbiAgICBjb25zb2xlLmxvZyhcIm9wZW5cIik7XHJcbiAgfTtcclxuICBjb25zdCBoYW5kbGVEaWFsb2dDbG9zZSA9ICgpID0+IHNldERpYWxvZ09wZW4oZmFsc2UpO1xyXG5cclxuICByZXR1cm4geyBpc09wZW4sIGhhbmRsZURpYWxvZ09wZW4sIGhhbmRsZURpYWxvZ0Nsb3NlIH07XHJcbn1cclxuIiwiaW1wb3J0IEhlYWQgZnJvbSBcIm5leHQvaGVhZFwiO1xyXG5cclxuaW1wb3J0IEFwcFN0eWxlcyBmcm9tIFwiLi4vc3R5bGVzL0FwcC5tb2R1bGUuc2Nzc1wiO1xyXG5pbXBvcnQgdXNlRGlhbG9nSG9vayBmcm9tIFwiLi4vY29tcG9uZW50cy91c2VEaWFsb2dIb29rXCI7XHJcbmltcG9ydCBQcm9maWxlIGZyb20gXCIuLi9jb21wb25lbnRzL1Byb2ZpbGVcIjtcclxuaW1wb3J0IEhlYWRlciBmcm9tIFwiLi4vY29tcG9uZW50cy9IZWFkZXJcIjtcclxuaW1wb3J0IERpYWxvZyBmcm9tIFwiLi4vY29tcG9uZW50cy9EaWFsb2dcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEFwcCgpIHtcclxuICBjb25zdCB7IGlzT3BlbiwgaGFuZGxlRGlhbG9nT3BlbiwgaGFuZGxlRGlhbG9nQ2xvc2UgfSA9IHVzZURpYWxvZ0hvb2soKTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxzZWN0aW9uIGNsYXNzTmFtZT1cIkFwcFwiPlxyXG4gICAgICA8SGVhZD5cclxuICAgICAgICA8dGl0bGU+VGVzdCBGdWxvZ3k8L3RpdGxlPlxyXG4gICAgICAgIDxsaW5rXHJcbiAgICAgICAgICBocmVmPVwiaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1PcGVuK1NhbnM6d2dodEAzMDA7NDAwOzYwMCZkaXNwbGF5PXN3YXBcIlxyXG4gICAgICAgICAgcmVsPVwic3R5bGVzaGVldFwiXHJcbiAgICAgICAgPjwvbGluaz5cclxuICAgICAgICB7LyogPGxpbmsgcmVsPVwiaWNvblwiIGhyZWY9XCIvZmF2aWNvbi5pY29cIiAvPiAqL31cclxuICAgICAgPC9IZWFkPlxyXG4gICAgICA8bWFpbj5cclxuICAgICAgICA8aDEgY2xhc3NOYW1lPVwiSGlkZGVuXCI+0KTQvtGA0LzQsDwvaDE+XHJcbiAgICAgICAgPHNlY3Rpb24gY2xhc3NOYW1lPXtBcHBTdHlsZXMuTWFpbkNvbnRlbnR9PlxyXG4gICAgICAgICAgPEhlYWRlciAvPlxyXG4gICAgICAgICAgPGgyIGNsYXNzTmFtZT17QXBwU3R5bGVzLlByb2ZpbGVIZWFkZXJ9PtCb0LjRh9C90YvQuSDQv9GA0L7RhNC40LvRjDwvaDI+XHJcbiAgICAgICAgICA8aDMgY2xhc3NOYW1lPXtBcHBTdHlsZXMuUHJvZmlsZVJvdXRlc0hlYWRlcn0+XHJcbiAgICAgICAgICAgINCT0LvQsNCy0L3QsNGPL9Cb0LjRh9C90YvQuSDQv9GA0L7RhNC40LvRjFxyXG4gICAgICAgICAgPC9oMz5cclxuICAgICAgICAgIDxQcm9maWxlIGhhbmRsZURpYWxvZ09wZW49e2hhbmRsZURpYWxvZ09wZW59IC8+XHJcbiAgICAgICAgICA8RGlhbG9nIGlzT3Blbj17aXNPcGVufSBvbkNsb3NlPXtoYW5kbGVEaWFsb2dDbG9zZX0gLz5cclxuICAgICAgICA8L3NlY3Rpb24+XHJcbiAgICAgIDwvbWFpbj5cclxuICAgIDwvc2VjdGlvbj5cclxuICApO1xyXG59XHJcbiIsIi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0ge1xuXHRcIkFwcFwiOiBcIkFwcF9BcHBfXzNMU04wXCIsXG5cdFwiUHJvZmlsZUhlYWRlclwiOiBcIkFwcF9Qcm9maWxlSGVhZGVyX18zbkFYZVwiLFxuXHRcIlByb2ZpbGVSb3V0ZXNIZWFkZXJcIjogXCJBcHBfUHJvZmlsZVJvdXRlc0hlYWRlcl9fMnJoOC1cIixcblx0XCJNYWluQ29udGVudFwiOiBcIkFwcF9NYWluQ29udGVudF9fMkhWcUdcIlxufTtcbiIsIi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0ge1xuXHRcIk11aURpYWxvZy1wYXBlclwiOiBcIkRpYWxvZ19NdWlEaWFsb2ctcGFwZXJfXzJEeGp6XCJcbn07XG4iLCIvLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IHtcblx0XCJIZWFkZXJcIjogXCJIZWFkZXJfSGVhZGVyX18xN1ZKbFwiLFxuXHRcIk5vdGlmaWNhdGlvbnNcIjogXCJIZWFkZXJfTm90aWZpY2F0aW9uc19fbHd2d2dcIixcblx0XCJEaXZpZGVyXCI6IFwiSGVhZGVyX0RpdmlkZXJfXzNzRXpZXCIsXG5cdFwiSGVhZGVyVXNlckluZm9cIjogXCJIZWFkZXJfSGVhZGVyVXNlckluZm9fXzJqbmJGXCIsXG5cdFwiVXNlckljb25cIjogXCJIZWFkZXJfVXNlckljb25fX3NSdFpkXCJcbn07XG4iLCIvLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IHtcblx0XCJQcm9maWxlXCI6IFwiUHJvZmlsZV9Qcm9maWxlX18ydmhoclwiLFxuXHRcIlVzZXJJbmZvTXVpUGFwZXJcIjogXCJQcm9maWxlX1VzZXJJbmZvTXVpUGFwZXJfX1QtbGFSXCIsXG5cdFwiTWFpbkluZm9cIjogXCJQcm9maWxlX01haW5JbmZvX18zMjlaZ1wiLFxuXHRcIlByb2ZpbGVVc2VySWNvblwiOiBcIlByb2ZpbGVfUHJvZmlsZVVzZXJJY29uX19GVjZsOVwiLFxuXHRcIlVzZXJOYW1lXCI6IFwiUHJvZmlsZV9Vc2VyTmFtZV9fM3BESWtcIixcblx0XCJDbG9zZVwiOiBcIlByb2ZpbGVfQ2xvc2VfXzNxenhEXCIsXG5cdFwiQ2xvc2VJbWdcIjogXCJQcm9maWxlX0Nsb3NlSW1nX18yOW1HQ1wiXG59O1xuIiwiLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSB7XG5cdFwiVXNlckZvcm1NdWlQYXBlclwiOiBcIlVzZXJGb3JtX1VzZXJGb3JtTXVpUGFwZXJfXzJJVGw2XCIsXG5cdFwiVXNlckZvcm1cIjogXCJVc2VyRm9ybV9Vc2VyRm9ybV9fM2ZMbXBcIixcblx0XCJNYWluRm9ybUNvbnRlbnRcIjogXCJVc2VyRm9ybV9NYWluRm9ybUNvbnRlbnRfXzNsRjJ4XCIsXG5cdFwiVGV4dEZpZWxkXCI6IFwiVXNlckZvcm1fVGV4dEZpZWxkX19lNGF6S1wiLFxuXHRcIkZpZWxkSXRlbVwiOiBcIlVzZXJGb3JtX0ZpZWxkSXRlbV9fNUJ2SkJcIixcblx0XCJGaWVsZEljb25cIjogXCJVc2VyRm9ybV9GaWVsZEljb25fXzM2QWZKXCIsXG5cdFwiRGl2aWRlclwiOiBcIlVzZXJGb3JtX0RpdmlkZXJfX2xHT2wzXCIsXG5cdFwiU3VibWl0QnV0dG9uXCI6IFwiVXNlckZvcm1fU3VibWl0QnV0dG9uX18yaFVKZ1wiLFxuXHRcIlN1Y2Nlc3NNZXNzYWdlXCI6IFwiVXNlckZvcm1fU3VjY2Vzc01lc3NhZ2VfXzFBS2lSXCJcbn07XG4iLCJleHBvcnQgY29uc3QgVmFsaWRhdGVNZXNzYWdlID0ge1xyXG4gIFJFUVVJUkVEOiBcInJlcXVpcmVkXCIsXHJcbiAgTkFNRTogXCLQndC10LLQtdGA0L3QvtC1INC40LzRj1wiLFxyXG4gIEVNQUlMOiBcItCd0LXQstC10YDQvdGL0Lkg0LDQtNGA0LXRgVwiLFxyXG4gIFBIT05FOiBcItCd0LXQstC10YDQvdGL0Lkg0L3QvtC80LXRgCDRgtC10LvQtdGE0L7QvdCwXCIsXHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgaXNGaWVsZEVycm9yID0gKG1ldGEpID0+IEJvb2xlYW4obWV0YS5lcnJvciAmJiBtZXRhLnN1Ym1pdEZhaWxlZCk7XHJcblxyXG5leHBvcnQgY29uc3QgdmFsaWRhdGVGb3JtID0gKHZhbHVlcykgPT4ge1xyXG4gIGNvbnN0IGVycm9ycyA9IHt9O1xyXG4gIGlmICghdmFsdWVzLnVzZXJOYW1lICYmICF2YWx1ZXMucGhvbmVOdW1iZXIgJiYgIXZhbHVlcy5lbWFpbCkge1xyXG4gICAgZXJyb3JzLnVzZXJOYW1lID0gVmFsaWRhdGVNZXNzYWdlLlJFUVVJUkVEO1xyXG4gICAgZXJyb3JzLnBob25lTnVtYmVyID0gVmFsaWRhdGVNZXNzYWdlLlJFUVVJUkVEO1xyXG4gICAgZXJyb3JzLmVtYWlsID0gVmFsaWRhdGVNZXNzYWdlLlJFUVVJUkVEO1xyXG4gIH1cclxuICBpZiAodmFsdWVzLnVzZXJOYW1lICYmIHZhbHVlcy51c2VyTmFtZSA9PSBcItC40LzRj1wiKSB7XHJcbiAgICBlcnJvcnMudXNlck5hbWUgPSBWYWxpZGF0ZU1lc3NhZ2UuTkFNRTtcclxuICB9XHJcbiAgcmV0dXJuIGVycm9ycztcclxufTtcclxuIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQG1hdGVyaWFsLXVpL2NvcmUvRGlhbG9nXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBtYXRlcmlhbC11aS9jb3JlL0Zvcm1IZWxwZXJUZXh0XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBtYXRlcmlhbC11aS9jb3JlL1BhcGVyXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBtYXRlcmlhbC11aS9jb3JlL1RleHRGaWVsZFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L2hlYWRcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3RcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QtZmluYWwtZm9ybVwiKTsiXSwic291cmNlUm9vdCI6IiJ9