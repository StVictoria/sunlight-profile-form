webpackHotUpdate_N_E("pages/index",{

/***/ "./components/UserForm.js":
/*!********************************!*\
  !*** ./components/UserForm.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return UserForm; });
/* harmony import */ var _babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/Paper */ "./node_modules/@material-ui/core/esm/Paper/index.js");
/* harmony import */ var react_final_form__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-final-form */ "./node_modules/react-final-form/dist/react-final-form.es.js");
/* harmony import */ var _material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/TextField */ "./node_modules/@material-ui/core/esm/TextField/index.js");
/* harmony import */ var _xstate_react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @xstate/react */ "./node_modules/@xstate/react/es/index.js");
/* harmony import */ var xstate__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! xstate */ "./node_modules/xstate/es/index.js");
/* harmony import */ var _styles_UserForm_module_scss__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../styles/UserForm.module.scss */ "./styles/UserForm.module.scss");
/* harmony import */ var _styles_UserForm_module_scss__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_styles_UserForm_module_scss__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _xstate_userInfo__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../xstate/userInfo */ "./xstate/userInfo.js");


var _jsxFileName = "C:\\Users\\vstepnova\\Desktop\\test1\\components\\UserForm.js",
    _s = $RefreshSig$();


var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;







var styles = {
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
var fields = [{
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
function UserForm() {
  _s();

  var _this = this;

  var userInfo = Object(xstate__WEBPACK_IMPORTED_MODULE_6__["Machine"])(_xstate_userInfo__WEBPACK_IMPORTED_MODULE_8__["userInfoConfig"]);

  var _useMachine = Object(_xstate_react__WEBPACK_IMPORTED_MODULE_5__["useMachine"])(ramMachine),
      _useMachine2 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useMachine, 2),
      info = _useMachine2[0],
      send = _useMachine2[1];

  var renderUserForm = function renderUserForm(fields) {
    return fields.map(function (field) {
      return __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, __jsx(react_final_form__WEBPACK_IMPORTED_MODULE_3__["Field"], {
        name: field.name,
        style: styles.TextField,
        render: function render() {
          return __jsx("div", {
            className: _styles_UserForm_module_scss__WEBPACK_IMPORTED_MODULE_7___default.a.FieldItem,
            __self: _this,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 47,
              columnNumber: 13
            }
          }, __jsx("label", {
            "for": field.id,
            __self: _this,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 48,
              columnNumber: 15
            }
          }, __jsx("img", {
            src: field.iconPath,
            className: _styles_UserForm_module_scss__WEBPACK_IMPORTED_MODULE_7___default.a.FieldIcon,
            alt: field.label,
            __self: _this,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 49,
              columnNumber: 17
            }
          })), __jsx(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_4__["default"], {
            id: field.id,
            label: field.label,
            style: styles.TextField,
            variant: "outlined",
            __self: _this,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 55,
              columnNumber: 15
            }
          }));
        },
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 43,
          columnNumber: 9
        }
      }), fields.length - 1 !== field.id ? __jsx("div", {
        className: _styles_UserForm_module_scss__WEBPACK_IMPORTED_MODULE_7___default.a.Divider,
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 65,
          columnNumber: 11
        }
      }) : null);
    });
  };

  return __jsx(_material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_2__["default"], {
    style: styles.MuiPaper,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 71,
      columnNumber: 5
    }
  }, __jsx(react_final_form__WEBPACK_IMPORTED_MODULE_3__["Form"], {
    onSubmit: function onSubmit() {
      return send({
        type: "SUBMIT"
      });
    } // validate={validate}
    ,
    render: function render(_ref) {
      var handleSubmit = _ref.handleSubmit;
      return __jsx("form", {
        onSubmit: handleSubmit,
        className: _styles_UserForm_module_scss__WEBPACK_IMPORTED_MODULE_7___default.a.UserForm,
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 76,
          columnNumber: 11
        }
      }, __jsx("section", {
        className: _styles_UserForm_module_scss__WEBPACK_IMPORTED_MODULE_7___default.a.MainFormContent,
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 77,
          columnNumber: 13
        }
      }, renderUserForm(fields)), __jsx("button", {
        type: "submit",
        className: _styles_UserForm_module_scss__WEBPACK_IMPORTED_MODULE_7___default.a.SubmitButton,
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 81,
          columnNumber: 13
        }
      }, "\u0421\u043E\u0445\u0440\u0430\u043D\u0438\u0442\u044C \u0438\u0437\u043C\u0435\u043D\u0435\u043D\u0438\u044F"));
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 72,
      columnNumber: 7
    }
  }));
}

_s(UserForm, "3RU67kwD1uNEShwlg+fQRaUFmYI=", false, function () {
  return [_xstate_react__WEBPACK_IMPORTED_MODULE_5__["useMachine"]];
});

_c = UserForm;

var _c;

$RefreshReg$(_c, "UserForm");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./xstate/userInfo.js":
/*!****************************!*\
  !*** ./xstate/userInfo.js ***!
  \****************************/
/*! exports provided: userInfoConfig */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "userInfoConfig", function() { return userInfoConfig; });
/* harmony import */ var xstate__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! xstate */ "./node_modules/xstate/es/index.js");

var userInfoConfig = {
  id: "charSearch",
  context: {
    name: "",
    results: []
  },
  initial: "ready",
  states: {
    ready: {
      on: {
        INPUT_NAME: {
          actions: Object(xstate__WEBPACK_IMPORTED_MODULE_0__["assign"])(function (ctx, evt) {
            return {
              name: evt.name
            };
          })
        },
        SUBMIT: {
          target: "searching"
        }
      }
    },
    error: {},
    searching: {},
    success: {}
  }
};

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Vc2VyRm9ybS5qcyIsIndlYnBhY2s6Ly9fTl9FLy4veHN0YXRlL3VzZXJJbmZvLmpzIl0sIm5hbWVzIjpbInN0eWxlcyIsIk11aVBhcGVyIiwiYmFja2dyb3VuZCIsInBhZGRpbmciLCJib3hTaXppbmciLCJib3hTaGFkb3ciLCJib3JkZXJSYWRpdXMiLCJUZXh0RmllbGQiLCJoZWlnaHQiLCJ3aWR0aCIsImxlZnQiLCJmaWVsZHMiLCJpZCIsIm5hbWUiLCJsYWJlbCIsImljb25QYXRoIiwiVXNlckZvcm0iLCJ1c2VySW5mbyIsIk1hY2hpbmUiLCJ1c2VySW5mb0NvbmZpZyIsInVzZU1hY2hpbmUiLCJyYW1NYWNoaW5lIiwiaW5mbyIsInNlbmQiLCJyZW5kZXJVc2VyRm9ybSIsIm1hcCIsImZpZWxkIiwiVXNlckZvcm1TdHlsZXMiLCJGaWVsZEl0ZW0iLCJGaWVsZEljb24iLCJsZW5ndGgiLCJEaXZpZGVyIiwidHlwZSIsImhhbmRsZVN1Ym1pdCIsIk1haW5Gb3JtQ29udGVudCIsIlN1Ym1pdEJ1dHRvbiIsImNvbnRleHQiLCJyZXN1bHRzIiwiaW5pdGlhbCIsInN0YXRlcyIsInJlYWR5Iiwib24iLCJJTlBVVF9OQU1FIiwiYWN0aW9ucyIsImFzc2lnbiIsImN0eCIsImV2dCIsIlNVQk1JVCIsInRhcmdldCIsImVycm9yIiwic2VhcmNoaW5nIiwic3VjY2VzcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQSxJQUFNQSxNQUFNLEdBQUc7QUFDYkMsVUFBUSxFQUFFO0FBQ1JDLGNBQVUsRUFBRSxTQURKO0FBRVJDLFdBQU8sRUFBRSxFQUZEO0FBR1JDLGFBQVMsRUFBRSxZQUhIO0FBSVJDLGFBQVMsRUFBRSxrQ0FKSDtBQUtSQyxnQkFBWSxFQUFFO0FBTE4sR0FERztBQVFiQyxXQUFTLEVBQUU7QUFDVEMs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NTQ1NDZmOWQ2Ny5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFBhcGVyIGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZS9QYXBlclwiO1xyXG5pbXBvcnQgeyBGb3JtLCBGaWVsZCB9IGZyb20gXCJyZWFjdC1maW5hbC1mb3JtXCI7XHJcbmltcG9ydCBUZXh0RmllbGQgZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlL1RleHRGaWVsZFwiO1xyXG5pbXBvcnQgeyB1c2VNYWNoaW5lIH0gZnJvbSBcIkB4c3RhdGUvcmVhY3RcIjtcclxuaW1wb3J0IHsgTWFjaGluZSB9IGZyb20gXCJ4c3RhdGVcIjtcclxuXHJcbmltcG9ydCBVc2VyRm9ybVN0eWxlcyBmcm9tIFwiLi4vc3R5bGVzL1VzZXJGb3JtLm1vZHVsZS5zY3NzXCI7XHJcbmltcG9ydCB7IHVzZXJJbmZvQ29uZmlnIH0gZnJvbSBcIi4uL3hzdGF0ZS91c2VySW5mb1wiO1xyXG5cclxuY29uc3Qgc3R5bGVzID0ge1xyXG4gIE11aVBhcGVyOiB7XHJcbiAgICBiYWNrZ3JvdW5kOiBcIiNGRkZGRkZcIixcclxuICAgIHBhZGRpbmc6IDQ1LFxyXG4gICAgYm94U2l6aW5nOiBcImJvcmRlci1ib3hcIixcclxuICAgIGJveFNoYWRvdzogXCIwcHggNHB4IDEwcHggcmdiYSgwLCAwLCAwLCAwLjE1KVwiLFxyXG4gICAgYm9yZGVyUmFkaXVzOiAxMCxcclxuICB9LFxyXG4gIFRleHRGaWVsZDoge1xyXG4gICAgaGVpZ2h0OiA1NyxcclxuICAgIHdpZHRoOiAyNTQsXHJcbiAgICBsZWZ0OiAwLFxyXG4gIH0sXHJcbn07XHJcblxyXG5jb25zdCBmaWVsZHMgPSBbXHJcbiAgeyBpZDogMCwgbmFtZTogXCJ1c2VyTmFtZVwiLCBsYWJlbDogXCLQpNCw0LzQuNC70LjRjyDQuCDQuNC80Y9cIiwgaWNvblBhdGg6IFwiL2JhZGdlLnBuZ1wiIH0sXHJcbiAgeyBpZDogMSwgbmFtZTogXCJlbWFpbFwiLCBsYWJlbDogXCJFLW1haWxcIiwgaWNvblBhdGg6IFwiL21haWwucG5nXCIgfSxcclxuICB7XHJcbiAgICBpZDogMixcclxuICAgIG5hbWU6IFwicGhvbmVOdW1iZXJcIixcclxuICAgIGxhYmVsOiBcItCd0L7QvNC10YAg0YLQtdC70LXRhNC+0L3QsFwiLFxyXG4gICAgaWNvblBhdGg6IFwiL3Bob25lLnBuZ1wiLFxyXG4gIH0sXHJcbl07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBVc2VyRm9ybSgpIHtcclxuICBjb25zdCB1c2VySW5mbyA9IE1hY2hpbmUodXNlckluZm9Db25maWcpO1xyXG4gIGNvbnN0IFtpbmZvLCBzZW5kXSA9IHVzZU1hY2hpbmUocmFtTWFjaGluZSk7XHJcblxyXG4gIGNvbnN0IHJlbmRlclVzZXJGb3JtID0gKGZpZWxkcykgPT5cclxuICAgIGZpZWxkcy5tYXAoKGZpZWxkKSA9PiAoXHJcbiAgICAgIDw+XHJcbiAgICAgICAgPEZpZWxkXHJcbiAgICAgICAgICBuYW1lPXtmaWVsZC5uYW1lfVxyXG4gICAgICAgICAgc3R5bGU9e3N0eWxlcy5UZXh0RmllbGR9XHJcbiAgICAgICAgICByZW5kZXI9eygpID0+IChcclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e1VzZXJGb3JtU3R5bGVzLkZpZWxkSXRlbX0+XHJcbiAgICAgICAgICAgICAgPGxhYmVsIGZvcj17ZmllbGQuaWR9PlxyXG4gICAgICAgICAgICAgICAgPGltZ1xyXG4gICAgICAgICAgICAgICAgICBzcmM9e2ZpZWxkLmljb25QYXRofVxyXG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e1VzZXJGb3JtU3R5bGVzLkZpZWxkSWNvbn1cclxuICAgICAgICAgICAgICAgICAgYWx0PXtmaWVsZC5sYWJlbH1cclxuICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgPC9sYWJlbD5cclxuICAgICAgICAgICAgICA8VGV4dEZpZWxkXHJcbiAgICAgICAgICAgICAgICBpZD17ZmllbGQuaWR9XHJcbiAgICAgICAgICAgICAgICBsYWJlbD17ZmllbGQubGFiZWx9XHJcbiAgICAgICAgICAgICAgICBzdHlsZT17c3R5bGVzLlRleHRGaWVsZH1cclxuICAgICAgICAgICAgICAgIHZhcmlhbnQ9XCJvdXRsaW5lZFwiXHJcbiAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICApfVxyXG4gICAgICAgIC8+XHJcbiAgICAgICAge2ZpZWxkcy5sZW5ndGggLSAxICE9PSBmaWVsZC5pZCA/IChcclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtVc2VyRm9ybVN0eWxlcy5EaXZpZGVyfSAvPlxyXG4gICAgICAgICkgOiBudWxsfVxyXG4gICAgICA8Lz5cclxuICAgICkpO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPFBhcGVyIHN0eWxlPXtzdHlsZXMuTXVpUGFwZXJ9PlxyXG4gICAgICA8Rm9ybVxyXG4gICAgICAgIG9uU3VibWl0PXsoKSA9PiBzZW5kKHsgdHlwZTogXCJTVUJNSVRcIiB9KX1cclxuICAgICAgICAvLyB2YWxpZGF0ZT17dmFsaWRhdGV9XHJcbiAgICAgICAgcmVuZGVyPXsoeyBoYW5kbGVTdWJtaXQgfSkgPT4gKFxyXG4gICAgICAgICAgPGZvcm0gb25TdWJtaXQ9e2hhbmRsZVN1Ym1pdH0gY2xhc3NOYW1lPXtVc2VyRm9ybVN0eWxlcy5Vc2VyRm9ybX0+XHJcbiAgICAgICAgICAgIDxzZWN0aW9uIGNsYXNzTmFtZT17VXNlckZvcm1TdHlsZXMuTWFpbkZvcm1Db250ZW50fT5cclxuICAgICAgICAgICAgICB7cmVuZGVyVXNlckZvcm0oZmllbGRzKX1cclxuICAgICAgICAgICAgPC9zZWN0aW9uPlxyXG5cclxuICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwic3VibWl0XCIgY2xhc3NOYW1lPXtVc2VyRm9ybVN0eWxlcy5TdWJtaXRCdXR0b259PlxyXG4gICAgICAgICAgICAgINCh0L7RhdGA0LDQvdC40YLRjCDQuNC30LzQtdC90LXQvdC40Y9cclxuICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgIHsvKiA8cCBjbGFzc05hbWU9e1VzZXJGb3JtU3R5bGVzLlN1Y2Nlc3NNZXNzYWdlfT5cclxuICAgICAgICAgICAgICDQmNC30LzQtdC90LXQvdC40Y8g0YHQvtGF0YDQsNC90LXQvdGLIVxyXG4gICAgICAgICAgICA8L3A+ICovfVxyXG4gICAgICAgICAgPC9mb3JtPlxyXG4gICAgICAgICl9XHJcbiAgICAgIC8+XHJcbiAgICA8L1BhcGVyPlxyXG4gICk7XHJcbn1cclxuIiwiaW1wb3J0IHsgYXNzaWduIH0gZnJvbSBcInhzdGF0ZVwiO1xyXG5cclxuZXhwb3J0IGNvbnN0IHVzZXJJbmZvQ29uZmlnID0ge1xyXG4gIGlkOiBcImNoYXJTZWFyY2hcIixcclxuICBjb250ZXh0OiB7XHJcbiAgICBuYW1lOiBcIlwiLFxyXG4gICAgcmVzdWx0czogW10sXHJcbiAgfSxcclxuICBpbml0aWFsOiBcInJlYWR5XCIsXHJcbiAgc3RhdGVzOiB7XHJcbiAgICByZWFkeToge1xyXG4gICAgICBvbjoge1xyXG4gICAgICAgIElOUFVUX05BTUU6IHtcclxuICAgICAgICAgIGFjdGlvbnM6IGFzc2lnbigoY3R4LCBldnQpID0+ICh7XHJcbiAgICAgICAgICAgIG5hbWU6IGV2dC5uYW1lLFxyXG4gICAgICAgICAgfSkpLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgU1VCTUlUOiB7XHJcbiAgICAgICAgICB0YXJnZXQ6IFwic2VhcmNoaW5nXCIsXHJcbiAgICAgICAgfSxcclxuICAgICAgfSxcclxuICAgIH0sXHJcbiAgICBlcnJvcjoge30sXHJcbiAgICBzZWFyY2hpbmc6IHt9LFxyXG4gICAgc3VjY2Vzczoge30sXHJcbiAgfSxcclxufTtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==