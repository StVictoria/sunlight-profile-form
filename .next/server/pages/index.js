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
var _jsxFileName = "C:\\Users\\vstepnova\\Desktop\\\u0442\u0435\u0441\u0442\u043E\u0432\u044B\u0435 \u0437\u0430\u0434\u0430\u043D\u0438\u044F\\test1\\components\\Dialog.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

const styles = {
  "MuiDialog-paper": {
    padding: 60
  }
};
function Dialog({
  isOpen,
  onClose
}) {
  return __jsx(_material_ui_core_Dialog__WEBPACK_IMPORTED_MODULE_1___default.a, {
    open: isOpen,
    style: styles["MuiDialog-Paper"],
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 5
    }
  }, "Dialog", __jsx("button", {
    onClick: onClose,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 7
    }
  }, "Close"));
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
var _jsxFileName = "C:\\Users\\vstepnova\\Desktop\\\u0442\u0435\u0441\u0442\u043E\u0432\u044B\u0435 \u0437\u0430\u0434\u0430\u043D\u0438\u044F\\test1\\components\\Header.js";

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
var _jsxFileName = "C:\\Users\\vstepnova\\Desktop\\\u0442\u0435\u0441\u0442\u043E\u0432\u044B\u0435 \u0437\u0430\u0434\u0430\u043D\u0438\u044F\\test1\\components\\Profile.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



const styles = {
  MuiPaper: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    height: 128,
    background: "linear-gradient(270deg, #1A78C2 0%, #1A78C2 101.06%)",
    padding: 40,
    marginTop: 31,
    marginBottom: 24,
    boxSizing: "border-box",
    borderRadius: 10,
    boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.15)"
  }
};
function Profile({
  handleDialogOpen
}) {
  return __jsx("section", {
    className: _styles_Profile_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.Profile,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 5
    }
  }, __jsx(_material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_1___default.a, {
    style: styles.MuiPaper,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 7
    }
  }, __jsx("section", {
    className: _styles_Profile_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.MainInfo,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: `${_styles_Profile_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.ProfileUserIcon} UserIcon`,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 11
    }
  }), __jsx("p", {
    className: _styles_Profile_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.UserName,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 11
    }
  }, "\u0418\u0432\u0430\u043D\u043E\u0432\u0430 \u0410\u043D\u043D\u0430 \u041C\u0438\u0445\u0430\u0439\u043B\u043E\u0432\u043D\u0430")), __jsx("button", {
    className: _styles_Profile_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.Close,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 9
    }
  }, __jsx("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 11
    }
  }, "\u0417\u0430\u043A\u0440\u044B\u0442\u044C "), __jsx("img", {
    src: "/cross.png",
    className: _styles_Profile_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.CloseImg,
    alt: "close",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 11
    }
  }))), __jsx(_UserForm_js__WEBPACK_IMPORTED_MODULE_3__["default"], {
    handleDialogOpen: handleDialogOpen,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40,
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
var _jsxFileName = "C:\\Users\\vstepnova\\Desktop\\\u0442\u0435\u0441\u0442\u043E\u0432\u044B\u0435 \u0437\u0430\u0434\u0430\u043D\u0438\u044F\\test1\\components\\UserForm.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }






const styles = {
  MuiPaper: {
    background: "#FFFFFF",
    padding: 45,
    boxSizing: "border-box",
    boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.15)",
    borderRadius: 10
  },
  TextField: {
    height: 57,
    width: 254,
    left: 0
  }
};
const fields = [{
  id: 0,
  name: "userName",
  label: "Фамилия и имя",
  iconPath: "/badge.png"
}, {
  id: 1,
  name: "email",
  label: "E-mail",
  iconPath: "/mail.png"
}, {
  id: 2,
  name: "phoneNumber",
  label: "Номер телефона",
  iconPath: "/phone.png"
}];
function UserForm({
  handleDialogOpen
}) {
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
      lineNumber: 46,
      columnNumber: 7
    }
  }, __jsx(react_final_form__WEBPACK_IMPORTED_MODULE_3__["Field"], {
    name: field.name,
    style: styles.TextField,
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
          lineNumber: 51,
          columnNumber: 13
        }
      }, __jsx("label", {
        htmlFor: field.id,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 52,
          columnNumber: 15
        }
      }, __jsx("img", {
        src: field.iconPath,
        className: _styles_UserForm_module_scss__WEBPACK_IMPORTED_MODULE_5___default.a.FieldIcon,
        alt: field.label,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 53,
          columnNumber: 17
        }
      })), __jsx(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_4___default.a, _extends({
        id: field.name
      }, input, rest, {
        label: field.label,
        style: styles.TextField,
        variant: "outlined",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 59,
          columnNumber: 15
        }
      })));
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47,
      columnNumber: 9
    }
  }), fields.length - 1 !== field.id ? __jsx("div", {
    className: _styles_UserForm_module_scss__WEBPACK_IMPORTED_MODULE_5___default.a.Divider,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 71,
      columnNumber: 11
    }
  }) : null));

  return __jsx(_material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_2___default.a, {
    style: styles.MuiPaper,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 77,
      columnNumber: 5
    }
  }, __jsx(react_final_form__WEBPACK_IMPORTED_MODULE_3__["Form"], {
    onSubmit: handleFormSubmit // validate={validate}
    ,
    render: ({
      handleSubmit,
      values
    }) => __jsx("form", {
      onSubmit: handleSubmit,
      className: _styles_UserForm_module_scss__WEBPACK_IMPORTED_MODULE_5___default.a.UserForm,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 82,
        columnNumber: 11
      }
    }, __jsx("section", {
      className: _styles_UserForm_module_scss__WEBPACK_IMPORTED_MODULE_5___default.a.MainFormContent,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 83,
        columnNumber: 13
      }
    }, renderUserForm(fields)), __jsx("button", {
      type: "submit",
      className: _styles_UserForm_module_scss__WEBPACK_IMPORTED_MODULE_5___default.a.SubmitButton,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 87,
        columnNumber: 13
      }
    }, "\u0421\u043E\u0445\u0440\u0430\u043D\u0438\u0442\u044C \u0438\u0437\u043C\u0435\u043D\u0435\u043D\u0438\u044F")),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 78,
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
var _jsxFileName = "C:\\Users\\vstepnova\\Desktop\\\u0442\u0435\u0441\u0442\u043E\u0432\u044B\u0435 \u0437\u0430\u0434\u0430\u043D\u0438\u044F\\test1\\pages\\index.js";

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
	"UserForm": "UserForm_UserForm__3fLmp",
	"MainFormContent": "UserForm_MainFormContent__3lF2x",
	"FieldItem": "UserForm_FieldItem__5BvJB",
	"FieldIcon": "UserForm_FieldIcon__36AfJ",
	"Divider": "UserForm_Divider__lGOl3",
	"SubmitButton": "UserForm_SubmitButton__2hUJg",
	"SuccessMessage": "UserForm_SuccessMessage__1AKiR"
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9EaWFsb2cuanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9IZWFkZXIuanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9Qcm9maWxlLmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvVXNlckZvcm0uanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy91c2VEaWFsb2dIb29rLmpzIiwid2VicGFjazovLy8uL3BhZ2VzL2luZGV4LmpzIiwid2VicGFjazovLy8uL3N0eWxlcy9BcHAubW9kdWxlLnNjc3MiLCJ3ZWJwYWNrOi8vLy4vc3R5bGVzL0hlYWRlci5tb2R1bGUuc2NzcyIsIndlYnBhY2s6Ly8vLi9zdHlsZXMvUHJvZmlsZS5tb2R1bGUuc2NzcyIsIndlYnBhY2s6Ly8vLi9zdHlsZXMvVXNlckZvcm0ubW9kdWxlLnNjc3MiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQG1hdGVyaWFsLXVpL2NvcmUvRGlhbG9nXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQG1hdGVyaWFsLXVpL2NvcmUvUGFwZXJcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAbWF0ZXJpYWwtdWkvY29yZS9UZXh0RmllbGRcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJheGlvc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcIm5leHQvaGVhZFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3QtZmluYWwtZm9ybVwiIl0sIm5hbWVzIjpbInN0eWxlcyIsInBhZGRpbmciLCJEaWFsb2ciLCJpc09wZW4iLCJvbkNsb3NlIiwiSGVhZGVyIiwiSGVhZGVyU3R5bGVzIiwiTm90aWZpY2F0aW9ucyIsIkRpdmlkZXIiLCJIZWFkZXJVc2VySW5mbyIsIlVzZXJJY29uIiwiVXNlck5hbWUiLCJNdWlQYXBlciIsImRpc3BsYXkiLCJhbGlnbkl0ZW1zIiwianVzdGlmeUNvbnRlbnQiLCJoZWlnaHQiLCJiYWNrZ3JvdW5kIiwibWFyZ2luVG9wIiwibWFyZ2luQm90dG9tIiwiYm94U2l6aW5nIiwiYm9yZGVyUmFkaXVzIiwiYm94U2hhZG93IiwiUHJvZmlsZSIsImhhbmRsZURpYWxvZ09wZW4iLCJQcm9maWxlU3R5bGVzIiwiTWFpbkluZm8iLCJQcm9maWxlVXNlckljb24iLCJDbG9zZSIsIkNsb3NlSW1nIiwiVGV4dEZpZWxkIiwid2lkdGgiLCJsZWZ0IiwiZmllbGRzIiwiaWQiLCJuYW1lIiwibGFiZWwiLCJpY29uUGF0aCIsIlVzZXJGb3JtIiwiaGFuZGxlRm9ybVN1Ym1pdCIsInZhbHVlcyIsImNvbnNvbGUiLCJsb2ciLCJyZW5kZXJVc2VyRm9ybSIsIm1hcCIsImZpZWxkIiwiaW5wdXQiLCJtZXRhIiwicmVzdCIsIlVzZXJGb3JtU3R5bGVzIiwiRmllbGRJdGVtIiwiRmllbGRJY29uIiwibGVuZ3RoIiwiaGFuZGxlU3VibWl0IiwiTWFpbkZvcm1Db250ZW50IiwiU3VibWl0QnV0dG9uIiwidXNlRGlhbG9nSG9vayIsInNldERpYWxvZ09wZW4iLCJ1c2VTdGF0ZSIsImhhbmRsZURpYWxvZ0Nsb3NlIiwiQXBwIiwiQXBwU3R5bGVzIiwiTWFpbkNvbnRlbnQiLCJQcm9maWxlSGVhZGVyIiwiUHJvZmlsZVJvdXRlc0hlYWRlciJdLCJtYXBwaW5ncyI6Ijs7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLElBQUk7UUFDSjtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFB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Ozs7QUNBQSxrQzs7Ozs7Ozs7Ozs7QUNBQSxzQzs7Ozs7Ozs7Ozs7QUNBQSxrQzs7Ozs7Ozs7Ozs7QUNBQSw2QyIsImZpbGUiOiJwYWdlcy9pbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0gcmVxdWlyZSgnLi4vc3NyLW1vZHVsZS1jYWNoZS5qcycpO1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHR2YXIgdGhyZXcgPSB0cnVlO1xuIFx0XHR0cnkge1xuIFx0XHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuIFx0XHRcdHRocmV3ID0gZmFsc2U7XG4gXHRcdH0gZmluYWxseSB7XG4gXHRcdFx0aWYodGhyZXcpIGRlbGV0ZSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXTtcbiBcdFx0fVxuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vcGFnZXMvaW5kZXguanNcIik7XG4iLCJpbXBvcnQgTXVpRGlhbG9nIGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZS9EaWFsb2dcIjtcclxuXHJcbmNvbnN0IHN0eWxlcyA9IHtcclxuICBcIk11aURpYWxvZy1wYXBlclwiOiB7XHJcbiAgICBwYWRkaW5nOiA2MCxcclxuICB9LFxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gRGlhbG9nKHsgaXNPcGVuLCBvbkNsb3NlIH0pIHtcclxuICByZXR1cm4gKFxyXG4gICAgPE11aURpYWxvZyBvcGVuPXtpc09wZW59IHN0eWxlPXtzdHlsZXNbXCJNdWlEaWFsb2ctUGFwZXJcIl19PlxyXG4gICAgICBEaWFsb2dcclxuICAgICAgPGJ1dHRvbiBvbkNsaWNrPXtvbkNsb3NlfT5DbG9zZTwvYnV0dG9uPlxyXG4gICAgPC9NdWlEaWFsb2c+XHJcbiAgKTtcclxufVxyXG4iLCJpbXBvcnQgSGVhZGVyU3R5bGVzIGZyb20gXCIuLi9zdHlsZXMvSGVhZGVyLm1vZHVsZS5zY3NzXCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBIZWFkZXIoKSB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxzZWN0aW9uIGNsYXNzTmFtZT17SGVhZGVyU3R5bGVzLkhlYWRlcn0+XHJcbiAgICAgIDxpbWdcclxuICAgICAgICBzcmM9XCIvbm90aWZpY2F0aW9uLnBuZ1wiXHJcbiAgICAgICAgY2xhc3NOYW1lPXtIZWFkZXJTdHlsZXMuTm90aWZpY2F0aW9uc31cclxuICAgICAgICBhbHQ9XCJub3RpZmljYXRpb25zXCJcclxuICAgICAgLz5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9e0hlYWRlclN0eWxlcy5EaXZpZGVyfSAvPlxyXG4gICAgICA8c2VjdGlvbiBjbGFzc05hbWU9e0hlYWRlclN0eWxlcy5IZWFkZXJVc2VySW5mb30+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e2Ake0hlYWRlclN0eWxlcy5Vc2VySWNvbn0gVXNlckljb25gfSAvPlxyXG4gICAgICAgIDxwIGNsYXNzTmFtZT17SGVhZGVyU3R5bGVzLlVzZXJOYW1lfT7QmNCy0LDQvdC+0LLQsCDQkC48L3A+XHJcbiAgICAgIDwvc2VjdGlvbj5cclxuICAgIDwvc2VjdGlvbj5cclxuICApO1xyXG59XHJcbiIsImltcG9ydCBQYXBlciBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvUGFwZXJcIjtcclxuXHJcbmltcG9ydCBQcm9maWxlU3R5bGVzIGZyb20gXCIuLi9zdHlsZXMvUHJvZmlsZS5tb2R1bGUuc2Nzc1wiO1xyXG5pbXBvcnQgVXNlckZvcm0gZnJvbSBcIi4vVXNlckZvcm0uanNcIjtcclxuXHJcbmNvbnN0IHN0eWxlcyA9IHtcclxuICBNdWlQYXBlcjoge1xyXG4gICAgZGlzcGxheTogXCJmbGV4XCIsXHJcbiAgICBhbGlnbkl0ZW1zOiBcImNlbnRlclwiLFxyXG4gICAganVzdGlmeUNvbnRlbnQ6IFwic3BhY2UtYmV0d2VlblwiLFxyXG4gICAgaGVpZ2h0OiAxMjgsXHJcbiAgICBiYWNrZ3JvdW5kOiBcImxpbmVhci1ncmFkaWVudCgyNzBkZWcsICMxQTc4QzIgMCUsICMxQTc4QzIgMTAxLjA2JSlcIixcclxuICAgIHBhZGRpbmc6IDQwLFxyXG4gICAgbWFyZ2luVG9wOiAzMSxcclxuICAgIG1hcmdpbkJvdHRvbTogMjQsXHJcbiAgICBib3hTaXppbmc6IFwiYm9yZGVyLWJveFwiLFxyXG4gICAgYm9yZGVyUmFkaXVzOiAxMCxcclxuICAgIGJveFNoYWRvdzogXCIwcHggNHB4IDEwcHggcmdiYSgwLCAwLCAwLCAwLjE1KVwiLFxyXG4gIH0sXHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBQcm9maWxlKHsgaGFuZGxlRGlhbG9nT3BlbiB9KSB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxzZWN0aW9uIGNsYXNzTmFtZT17UHJvZmlsZVN0eWxlcy5Qcm9maWxlfT5cclxuICAgICAgPFBhcGVyIHN0eWxlPXtzdHlsZXMuTXVpUGFwZXJ9PlxyXG4gICAgICAgIDxzZWN0aW9uIGNsYXNzTmFtZT17UHJvZmlsZVN0eWxlcy5NYWluSW5mb30+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17YCR7UHJvZmlsZVN0eWxlcy5Qcm9maWxlVXNlckljb259IFVzZXJJY29uYH0gLz5cclxuICAgICAgICAgIDxwIGNsYXNzTmFtZT17UHJvZmlsZVN0eWxlcy5Vc2VyTmFtZX0+0JjQstCw0L3QvtCy0LAg0JDQvdC90LAg0JzQuNGF0LDQudC70L7QstC90LA8L3A+XHJcbiAgICAgICAgPC9zZWN0aW9uPlxyXG5cclxuICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT17UHJvZmlsZVN0eWxlcy5DbG9zZX0+XHJcbiAgICAgICAgICA8cD7Ql9Cw0LrRgNGL0YLRjCA8L3A+XHJcbiAgICAgICAgICA8aW1nXHJcbiAgICAgICAgICAgIHNyYz1cIi9jcm9zcy5wbmdcIlxyXG4gICAgICAgICAgICBjbGFzc05hbWU9e1Byb2ZpbGVTdHlsZXMuQ2xvc2VJbWd9XHJcbiAgICAgICAgICAgIGFsdD1cImNsb3NlXCJcclxuICAgICAgICAgIC8+XHJcbiAgICAgICAgPC9idXR0b24+XHJcbiAgICAgIDwvUGFwZXI+XHJcbiAgICAgIDxVc2VyRm9ybSBoYW5kbGVEaWFsb2dPcGVuPXtoYW5kbGVEaWFsb2dPcGVufSAvPlxyXG4gICAgPC9zZWN0aW9uPlxyXG4gICk7XHJcbn1cclxuIiwiaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiO1xyXG5pbXBvcnQgUGFwZXIgZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlL1BhcGVyXCI7XHJcbmltcG9ydCB7IEZvcm0sIEZpZWxkIH0gZnJvbSBcInJlYWN0LWZpbmFsLWZvcm1cIjtcclxuaW1wb3J0IFRleHRGaWVsZCBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvVGV4dEZpZWxkXCI7XHJcblxyXG5pbXBvcnQgVXNlckZvcm1TdHlsZXMgZnJvbSBcIi4uL3N0eWxlcy9Vc2VyRm9ybS5tb2R1bGUuc2Nzc1wiO1xyXG5cclxuY29uc3Qgc3R5bGVzID0ge1xyXG4gIE11aVBhcGVyOiB7XHJcbiAgICBiYWNrZ3JvdW5kOiBcIiNGRkZGRkZcIixcclxuICAgIHBhZGRpbmc6IDQ1LFxyXG4gICAgYm94U2l6aW5nOiBcImJvcmRlci1ib3hcIixcclxuICAgIGJveFNoYWRvdzogXCIwcHggNHB4IDEwcHggcmdiYSgwLCAwLCAwLCAwLjE1KVwiLFxyXG4gICAgYm9yZGVyUmFkaXVzOiAxMCxcclxuICB9LFxyXG4gIFRleHRGaWVsZDoge1xyXG4gICAgaGVpZ2h0OiA1NyxcclxuICAgIHdpZHRoOiAyNTQsXHJcbiAgICBsZWZ0OiAwLFxyXG4gIH0sXHJcbn07XHJcblxyXG5jb25zdCBmaWVsZHMgPSBbXHJcbiAgeyBpZDogMCwgbmFtZTogXCJ1c2VyTmFtZVwiLCBsYWJlbDogXCLQpNCw0LzQuNC70LjRjyDQuCDQuNC80Y9cIiwgaWNvblBhdGg6IFwiL2JhZGdlLnBuZ1wiIH0sXHJcbiAgeyBpZDogMSwgbmFtZTogXCJlbWFpbFwiLCBsYWJlbDogXCJFLW1haWxcIiwgaWNvblBhdGg6IFwiL21haWwucG5nXCIgfSxcclxuICB7XHJcbiAgICBpZDogMixcclxuICAgIG5hbWU6IFwicGhvbmVOdW1iZXJcIixcclxuICAgIGxhYmVsOiBcItCd0L7QvNC10YAg0YLQtdC70LXRhNC+0L3QsFwiLFxyXG4gICAgaWNvblBhdGg6IFwiL3Bob25lLnBuZ1wiLFxyXG4gIH0sXHJcbl07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBVc2VyRm9ybSh7IGhhbmRsZURpYWxvZ09wZW4gfSkge1xyXG4gIGNvbnN0IGhhbmRsZUZvcm1TdWJtaXQgPSAodmFsdWVzKSA9PiB7XHJcbiAgICBoYW5kbGVEaWFsb2dPcGVuKCk7XHJcbiAgICAvLyBheGlvc1xyXG4gICAgLy8gICAucG9zdChcImh0dHA6Ly9sb2NhbGhvc3Q6MzAwNS9hcGlcIiwgSlNPTi5zdHJpbmdpZnkodmFsdWVzKSlcclxuICAgIC8vICAgLmNhdGNoKChlcnJvcikgPT4gY29uc29sZS5sb2coZXJyb3IucmVzcG9uc2UpKTtcclxuXHJcbiAgICBjb25zb2xlLmxvZyh2YWx1ZXMpO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IHJlbmRlclVzZXJGb3JtID0gKGZpZWxkcykgPT5cclxuICAgIGZpZWxkcy5tYXAoKGZpZWxkKSA9PiAoXHJcbiAgICAgIDxSZWFjdC5GcmFnbWVudCBrZXk9e2ZpZWxkLmlkfT5cclxuICAgICAgICA8RmllbGRcclxuICAgICAgICAgIG5hbWU9e2ZpZWxkLm5hbWV9XHJcbiAgICAgICAgICBzdHlsZT17c3R5bGVzLlRleHRGaWVsZH1cclxuICAgICAgICAgIHJlbmRlcj17KHsgaW5wdXQsIG1ldGEsIC4uLnJlc3QgfSkgPT4gKFxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17VXNlckZvcm1TdHlsZXMuRmllbGRJdGVtfT5cclxuICAgICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj17ZmllbGQuaWR9PlxyXG4gICAgICAgICAgICAgICAgPGltZ1xyXG4gICAgICAgICAgICAgICAgICBzcmM9e2ZpZWxkLmljb25QYXRofVxyXG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e1VzZXJGb3JtU3R5bGVzLkZpZWxkSWNvbn1cclxuICAgICAgICAgICAgICAgICAgYWx0PXtmaWVsZC5sYWJlbH1cclxuICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgPC9sYWJlbD5cclxuICAgICAgICAgICAgICA8VGV4dEZpZWxkXHJcbiAgICAgICAgICAgICAgICBpZD17ZmllbGQubmFtZX1cclxuICAgICAgICAgICAgICAgIHsuLi5pbnB1dH1cclxuICAgICAgICAgICAgICAgIHsuLi5yZXN0fVxyXG4gICAgICAgICAgICAgICAgbGFiZWw9e2ZpZWxkLmxhYmVsfVxyXG4gICAgICAgICAgICAgICAgc3R5bGU9e3N0eWxlcy5UZXh0RmllbGR9XHJcbiAgICAgICAgICAgICAgICB2YXJpYW50PVwib3V0bGluZWRcIlxyXG4gICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgKX1cclxuICAgICAgICAvPlxyXG4gICAgICAgIHtmaWVsZHMubGVuZ3RoIC0gMSAhPT0gZmllbGQuaWQgPyAoXHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17VXNlckZvcm1TdHlsZXMuRGl2aWRlcn0gLz5cclxuICAgICAgICApIDogbnVsbH1cclxuICAgICAgPC9SZWFjdC5GcmFnbWVudD5cclxuICAgICkpO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPFBhcGVyIHN0eWxlPXtzdHlsZXMuTXVpUGFwZXJ9PlxyXG4gICAgICA8Rm9ybVxyXG4gICAgICAgIG9uU3VibWl0PXtoYW5kbGVGb3JtU3VibWl0fVxyXG4gICAgICAgIC8vIHZhbGlkYXRlPXt2YWxpZGF0ZX1cclxuICAgICAgICByZW5kZXI9eyh7IGhhbmRsZVN1Ym1pdCwgdmFsdWVzIH0pID0+IChcclxuICAgICAgICAgIDxmb3JtIG9uU3VibWl0PXtoYW5kbGVTdWJtaXR9IGNsYXNzTmFtZT17VXNlckZvcm1TdHlsZXMuVXNlckZvcm19PlxyXG4gICAgICAgICAgICA8c2VjdGlvbiBjbGFzc05hbWU9e1VzZXJGb3JtU3R5bGVzLk1haW5Gb3JtQ29udGVudH0+XHJcbiAgICAgICAgICAgICAge3JlbmRlclVzZXJGb3JtKGZpZWxkcyl9XHJcbiAgICAgICAgICAgIDwvc2VjdGlvbj5cclxuXHJcbiAgICAgICAgICAgIDxidXR0b24gdHlwZT1cInN1Ym1pdFwiIGNsYXNzTmFtZT17VXNlckZvcm1TdHlsZXMuU3VibWl0QnV0dG9ufT5cclxuICAgICAgICAgICAgICDQodC+0YXRgNCw0L3QuNGC0Ywg0LjQt9C80LXQvdC10L3QuNGPXHJcbiAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICB7LyogPHAgY2xhc3NOYW1lPXtVc2VyRm9ybVN0eWxlcy5TdWNjZXNzTWVzc2FnZX0+XHJcbiAgICAgICAgICAgICAg0JjQt9C80LXQvdC10L3QuNGPINGB0L7RhdGA0LDQvdC10L3RiyEgKNC90L4g0Y3RgtC+INC90LUg0YLQvtGH0L3QvilcclxuICAgICAgICAgICAgPC9wPiAqL31cclxuICAgICAgICAgIDwvZm9ybT5cclxuICAgICAgICApfVxyXG4gICAgICAvPlxyXG4gICAgPC9QYXBlcj5cclxuICApO1xyXG59XHJcbiIsImltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiB1c2VEaWFsb2dIb29rKCkge1xyXG4gIGNvbnN0IFtpc09wZW4sIHNldERpYWxvZ09wZW5dID0gdXNlU3RhdGUoZmFsc2UpO1xyXG5cclxuICBjb25zdCBoYW5kbGVEaWFsb2dPcGVuID0gKCkgPT4ge1xyXG4gICAgc2V0RGlhbG9nT3Blbih0cnVlKTtcclxuICAgIGNvbnNvbGUubG9nKFwib3BlblwiKTtcclxuICB9O1xyXG4gIGNvbnN0IGhhbmRsZURpYWxvZ0Nsb3NlID0gKCkgPT4gc2V0RGlhbG9nT3BlbihmYWxzZSk7XHJcblxyXG4gIHJldHVybiB7IGlzT3BlbiwgaGFuZGxlRGlhbG9nT3BlbiwgaGFuZGxlRGlhbG9nQ2xvc2UgfTtcclxufVxyXG4iLCJpbXBvcnQgSGVhZCBmcm9tIFwibmV4dC9oZWFkXCI7XHJcblxyXG5pbXBvcnQgQXBwU3R5bGVzIGZyb20gXCIuLi9zdHlsZXMvQXBwLm1vZHVsZS5zY3NzXCI7XHJcbmltcG9ydCB1c2VEaWFsb2dIb29rIGZyb20gXCIuLi9jb21wb25lbnRzL3VzZURpYWxvZ0hvb2tcIjtcclxuaW1wb3J0IFByb2ZpbGUgZnJvbSBcIi4uL2NvbXBvbmVudHMvUHJvZmlsZVwiO1xyXG5pbXBvcnQgSGVhZGVyIGZyb20gXCIuLi9jb21wb25lbnRzL0hlYWRlclwiO1xyXG5pbXBvcnQgRGlhbG9nIGZyb20gXCIuLi9jb21wb25lbnRzL0RpYWxvZ1wiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQXBwKCkge1xyXG4gIGNvbnN0IHsgaXNPcGVuLCBoYW5kbGVEaWFsb2dPcGVuLCBoYW5kbGVEaWFsb2dDbG9zZSB9ID0gdXNlRGlhbG9nSG9vaygpO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPHNlY3Rpb24gY2xhc3NOYW1lPVwiQXBwXCI+XHJcbiAgICAgIDxIZWFkPlxyXG4gICAgICAgIDx0aXRsZT5UZXN0IEZ1bG9neTwvdGl0bGU+XHJcbiAgICAgICAgPGxpbmtcclxuICAgICAgICAgIGhyZWY9XCJodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PU9wZW4rU2Fuczp3Z2h0QDMwMDs0MDA7NjAwJmRpc3BsYXk9c3dhcFwiXHJcbiAgICAgICAgICByZWw9XCJzdHlsZXNoZWV0XCJcclxuICAgICAgICA+PC9saW5rPlxyXG4gICAgICAgIHsvKiA8bGluayByZWw9XCJpY29uXCIgaHJlZj1cIi9mYXZpY29uLmljb1wiIC8+ICovfVxyXG4gICAgICA8L0hlYWQ+XHJcbiAgICAgIDxtYWluPlxyXG4gICAgICAgIDxoMSBjbGFzc05hbWU9XCJIaWRkZW5cIj7QpNC+0YDQvNCwPC9oMT5cclxuICAgICAgICA8c2VjdGlvbiBjbGFzc05hbWU9e0FwcFN0eWxlcy5NYWluQ29udGVudH0+XHJcbiAgICAgICAgICA8SGVhZGVyIC8+XHJcbiAgICAgICAgICA8aDIgY2xhc3NOYW1lPXtBcHBTdHlsZXMuUHJvZmlsZUhlYWRlcn0+0JvQuNGH0L3Ri9C5INC/0YDQvtGE0LjQu9GMPC9oMj5cclxuICAgICAgICAgIDxoMyBjbGFzc05hbWU9e0FwcFN0eWxlcy5Qcm9maWxlUm91dGVzSGVhZGVyfT5cclxuICAgICAgICAgICAg0JPQu9Cw0LLQvdCw0Y8v0JvQuNGH0L3Ri9C5INC/0YDQvtGE0LjQu9GMXHJcbiAgICAgICAgICA8L2gzPlxyXG4gICAgICAgICAgPFByb2ZpbGUgaGFuZGxlRGlhbG9nT3Blbj17aGFuZGxlRGlhbG9nT3Blbn0gLz5cclxuICAgICAgICAgIDxEaWFsb2cgaXNPcGVuPXtpc09wZW59IG9uQ2xvc2U9e2hhbmRsZURpYWxvZ0Nsb3NlfSAvPlxyXG4gICAgICAgIDwvc2VjdGlvbj5cclxuICAgICAgPC9tYWluPlxyXG4gICAgPC9zZWN0aW9uPlxyXG4gICk7XHJcbn1cclxuIiwiLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSB7XG5cdFwiQXBwXCI6IFwiQXBwX0FwcF9fM0xTTjBcIixcblx0XCJQcm9maWxlSGVhZGVyXCI6IFwiQXBwX1Byb2ZpbGVIZWFkZXJfXzNuQVhlXCIsXG5cdFwiUHJvZmlsZVJvdXRlc0hlYWRlclwiOiBcIkFwcF9Qcm9maWxlUm91dGVzSGVhZGVyX18ycmg4LVwiLFxuXHRcIk1haW5Db250ZW50XCI6IFwiQXBwX01haW5Db250ZW50X18ySFZxR1wiXG59O1xuIiwiLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSB7XG5cdFwiSGVhZGVyXCI6IFwiSGVhZGVyX0hlYWRlcl9fMTdWSmxcIixcblx0XCJOb3RpZmljYXRpb25zXCI6IFwiSGVhZGVyX05vdGlmaWNhdGlvbnNfX2x3dndnXCIsXG5cdFwiRGl2aWRlclwiOiBcIkhlYWRlcl9EaXZpZGVyX18zc0V6WVwiLFxuXHRcIkhlYWRlclVzZXJJbmZvXCI6IFwiSGVhZGVyX0hlYWRlclVzZXJJbmZvX18yam5iRlwiLFxuXHRcIlVzZXJJY29uXCI6IFwiSGVhZGVyX1VzZXJJY29uX19zUnRaZFwiXG59O1xuIiwiLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSB7XG5cdFwiUHJvZmlsZVwiOiBcIlByb2ZpbGVfUHJvZmlsZV9fMnZoaHJcIixcblx0XCJNYWluSW5mb1wiOiBcIlByb2ZpbGVfTWFpbkluZm9fXzMyOVpnXCIsXG5cdFwiUHJvZmlsZVVzZXJJY29uXCI6IFwiUHJvZmlsZV9Qcm9maWxlVXNlckljb25fX0ZWNmw5XCIsXG5cdFwiVXNlck5hbWVcIjogXCJQcm9maWxlX1VzZXJOYW1lX18zcERJa1wiLFxuXHRcIkNsb3NlXCI6IFwiUHJvZmlsZV9DbG9zZV9fM3F6eERcIixcblx0XCJDbG9zZUltZ1wiOiBcIlByb2ZpbGVfQ2xvc2VJbWdfXzI5bUdDXCJcbn07XG4iLCIvLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IHtcblx0XCJVc2VyRm9ybVwiOiBcIlVzZXJGb3JtX1VzZXJGb3JtX18zZkxtcFwiLFxuXHRcIk1haW5Gb3JtQ29udGVudFwiOiBcIlVzZXJGb3JtX01haW5Gb3JtQ29udGVudF9fM2xGMnhcIixcblx0XCJGaWVsZEl0ZW1cIjogXCJVc2VyRm9ybV9GaWVsZEl0ZW1fXzVCdkpCXCIsXG5cdFwiRmllbGRJY29uXCI6IFwiVXNlckZvcm1fRmllbGRJY29uX18zNkFmSlwiLFxuXHRcIkRpdmlkZXJcIjogXCJVc2VyRm9ybV9EaXZpZGVyX19sR09sM1wiLFxuXHRcIlN1Ym1pdEJ1dHRvblwiOiBcIlVzZXJGb3JtX1N1Ym1pdEJ1dHRvbl9fMmhVSmdcIixcblx0XCJTdWNjZXNzTWVzc2FnZVwiOiBcIlVzZXJGb3JtX1N1Y2Nlc3NNZXNzYWdlX18xQUtpUlwiXG59O1xuIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQG1hdGVyaWFsLXVpL2NvcmUvRGlhbG9nXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBtYXRlcmlhbC11aS9jb3JlL1BhcGVyXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBtYXRlcmlhbC11aS9jb3JlL1RleHRGaWVsZFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJheGlvc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L2hlYWRcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3RcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QtZmluYWwtZm9ybVwiKTsiXSwic291cmNlUm9vdCI6IiJ9