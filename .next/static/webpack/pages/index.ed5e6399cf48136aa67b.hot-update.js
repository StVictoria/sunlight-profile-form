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
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectWithoutProperties */ "./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/Paper */ "./node_modules/@material-ui/core/esm/Paper/index.js");
/* harmony import */ var react_final_form__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-final-form */ "./node_modules/react-final-form/dist/react-final-form.es.js");
/* harmony import */ var _material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core/TextField */ "./node_modules/@material-ui/core/esm/TextField/index.js");
/* harmony import */ var _styles_UserForm_module_scss__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../styles/UserForm.module.scss */ "./styles/UserForm.module.scss");
/* harmony import */ var _styles_UserForm_module_scss__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_styles_UserForm_module_scss__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _components_useDialogHook__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/useDialogHook */ "./components/useDialogHook.js");



var _jsxFileName = "C:\\Users\\vstepnova\\Desktop\\\u0442\u0435\u0441\u0442\u043E\u0432\u044B\u0435 \u0437\u0430\u0434\u0430\u043D\u0438\u044F\\test1\\components\\UserForm.js",
    _s = $RefreshSig$();


var __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;






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

  var _useDialogHook = Object(_components_useDialogHook__WEBPACK_IMPORTED_MODULE_8__["default"])(),
      handleDialogOpen = _useDialogHook.handleDialogOpen;

  var handleFormSubmit = function handleFormSubmit(values) {
    axios__WEBPACK_IMPORTED_MODULE_3___default.a.post("http://localhost:3005/api", JSON.stringify(values), {
      headers: {
        "Content-Type": "application/json",
        "x-token-access": "random"
      }
    })["catch"](function (error) {
      return console.log(error.response);
    });
    console.log(values);
  };

  var renderUserForm = function renderUserForm(fields) {
    return fields.map(function (field) {
      return __jsx(react__WEBPACK_IMPORTED_MODULE_2___default.a.Fragment, {
        key: field.id,
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 53,
          columnNumber: 7
        }
      }, __jsx(react_final_form__WEBPACK_IMPORTED_MODULE_5__["Field"], {
        name: field.name,
        style: styles.TextField,
        render: function render(_ref) {
          var input = _ref.input,
              meta = _ref.meta,
              rest = Object(_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__["default"])(_ref, ["input", "meta"]);

          return __jsx("div", {
            className: _styles_UserForm_module_scss__WEBPACK_IMPORTED_MODULE_7___default.a.FieldItem,
            __self: _this,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 58,
              columnNumber: 13
            }
          }, __jsx("label", {
            htmlFor: field.id,
            __self: _this,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 59,
              columnNumber: 15
            }
          }, __jsx("img", {
            src: field.iconPath,
            className: _styles_UserForm_module_scss__WEBPACK_IMPORTED_MODULE_7___default.a.FieldIcon,
            alt: field.label,
            __self: _this,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 60,
              columnNumber: 17
            }
          })), __jsx(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_6__["default"], Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
            id: field.name
          }, input, rest, {
            label: field.label,
            style: styles.TextField,
            variant: "outlined",
            __self: _this,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 66,
              columnNumber: 15
            }
          })));
        },
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 54,
          columnNumber: 9
        }
      }), fields.length - 1 !== field.id ? __jsx("div", {
        className: _styles_UserForm_module_scss__WEBPACK_IMPORTED_MODULE_7___default.a.Divider,
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 78,
          columnNumber: 11
        }
      }) : null);
    });
  };

  return __jsx(_material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_4__["default"], {
    style: styles.MuiPaper,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 84,
      columnNumber: 5
    }
  }, __jsx(react_final_form__WEBPACK_IMPORTED_MODULE_5__["Form"], {
    onSubmit: handleFormSubmit // validate={validate}
    ,
    render: function render(_ref2) {
      var handleSubmit = _ref2.handleSubmit,
          values = _ref2.values;
      return __jsx("form", {
        onSubmit: handleSubmit,
        className: _styles_UserForm_module_scss__WEBPACK_IMPORTED_MODULE_7___default.a.UserForm,
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 89,
          columnNumber: 11
        }
      }, __jsx("section", {
        className: _styles_UserForm_module_scss__WEBPACK_IMPORTED_MODULE_7___default.a.MainFormContent,
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 90,
          columnNumber: 13
        }
      }, renderUserForm(fields)), __jsx("button", {
        type: "submit",
        className: _styles_UserForm_module_scss__WEBPACK_IMPORTED_MODULE_7___default.a.SubmitButton,
        onClick: handleDialogOpen,
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 94,
          columnNumber: 13
        }
      }, "\u0421\u043E\u0445\u0440\u0430\u043D\u0438\u0442\u044C \u0438\u0437\u043C\u0435\u043D\u0435\u043D\u0438\u044F"));
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 85,
      columnNumber: 7
    }
  }));
}

_s(UserForm, "BzDVJbf8pNYAC/oYHxbUdFnihvY=", false, function () {
  return [_components_useDialogHook__WEBPACK_IMPORTED_MODULE_8__["default"]];
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

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Vc2VyRm9ybS5qcyJdLCJuYW1lcyI6WyJzdHlsZXMiLCJNdWlQYXBlciIsImJhY2tncm91bmQiLCJwYWRkaW5nIiwiYm94U2l6aW5nIiwiYm94U2hhZG93IiwiYm9yZGVyUmFkaXVzIiwiVGV4dEZpZWxkIiwiaGVpZ2h0Iiwid2lkdGgiLCJsZWZ0IiwiZmllbGRzIiwiaWQiLCJuYW1lIiwibGFiZWwiLCJpY29uUGF0aCIsIlVzZXJGb3JtIiwidXNlRGlhbG9nSG9vayIsImhhbmRsZURpYWxvZ09wZW4iLCJoYW5kbGVGb3JtU3VibWl0IiwidmFsdWVzIiwiYXhpb3MiLCJwb3N0IiwiSlNPTiIsInN0cmluZ2lmeSIsImhlYWRlcnMiLCJlcnJvciIsImNvbnNvbGUiLCJsb2ciLCJyZXNwb25zZSIsInJlbmRlclVzZXJGb3JtIiwibWFwIiwiZmllbGQiLCJpbnB1dCIsIm1ldGEiLCJyZXN0IiwiVXNlckZvcm1TdHlsZXMiLCJGaWVsZEl0ZW0iLCJGaWVsZEljb24iLCJsZW5ndGgiLCJEaXZpZGVyIiwiaGFuZGxlU3VibWl0IiwiTWFpbkZvcm1Db250ZW50IiwiU3VibWl0QnV0dG9uIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBLElBQU1BLE1BQU0sR0FBRztBQUNiQyxVQUFRLEVBQUU7QUFDUkMsY0FBVSxFQUFFLFNBREo7QUFFUkMsV0FBTyxFQUFFLEVBRkQ7QUFHUkMsYUFBUyxFQUFFLFlBSEg7QUFJUkMsYUFBUyxFQUFFLGtDQUpIO0FBS1JDLGdCQUFZLEVBQUU7QUFMTixHQURHO0FBUWJDLFdBQVMsRUFBRTtBQUNUQyxVQUFNLEVBQUUsRUFEQztBQUVUQyxTQUFLLEVBQUUsR0FGRTtBQUdUQyxRQUFJLEVBQUU7QUFIRztBQVJFLENBQWY7QUFlQSxJQUFNQyxNQUFNLEdBQUcsQ0FDYjtBQUFFQyxJQUFFLEVB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QUEsR0FBdkI7O0FBZ0NBLFNBQ0UsTUFBQywrREFBRDtBQUFPLFNBQUssRUFBRXhDLE1BQU0sQ0FBQ0MsUUFBckI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLE1BQUMscURBQUQ7QUFDRSxZQUFRLEVBQUVrQixnQkFEWixDQUVFO0FBRkY7QUFHRSxVQUFNLEVBQUU7QUFBQSxVQUFHc0IsWUFBSCxTQUFHQSxZQUFIO0FBQUEsVUFBaUJyQixNQUFqQixTQUFpQkEsTUFBakI7QUFBQSxhQUNOO0FBQU0sZ0JBQVEsRUFBRXFCLFlBQWhCO0FBQThCLGlCQUFTLEVBQUVMLG1FQUFjLENBQUNwQixRQUF4RDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBQ0U7QUFBUyxpQkFBUyxFQUFFb0IsbUVBQWMsQ0FBQ00sZUFBbkM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxTQUNHWixjQUFjLENBQUNuQixNQUFELENBRGpCLENBREYsRUFLRTtBQUNFLFlBQUksRUFBQyxRQURQO0FBRUUsaUJBQVMsRUFBRXlCLG1FQUFjLENBQUNPLFlBRjVCO0FBR0UsZUFBTyxFQUFFekIsZ0JBSFg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSx5SEFMRixDQURNO0FBQUEsS0FIVjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREYsQ0FERjtBQTBCRDs7R0ExRXVCRixRO1VBQ09DLGlFOzs7S0FEUEQsUSIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC5lZDVlNjM5OWNmNDgxMzZhYTY3Yi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiO1xyXG5pbXBvcnQgUGFwZXIgZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlL1BhcGVyXCI7XHJcbmltcG9ydCB7IEZvcm0sIEZpZWxkIH0gZnJvbSBcInJlYWN0LWZpbmFsLWZvcm1cIjtcclxuaW1wb3J0IFRleHRGaWVsZCBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvVGV4dEZpZWxkXCI7XHJcblxyXG5pbXBvcnQgVXNlckZvcm1TdHlsZXMgZnJvbSBcIi4uL3N0eWxlcy9Vc2VyRm9ybS5tb2R1bGUuc2Nzc1wiO1xyXG5pbXBvcnQgdXNlRGlhbG9nSG9vayBmcm9tIFwiLi4vY29tcG9uZW50cy91c2VEaWFsb2dIb29rXCI7XHJcblxyXG5jb25zdCBzdHlsZXMgPSB7XHJcbiAgTXVpUGFwZXI6IHtcclxuICAgIGJhY2tncm91bmQ6IFwiI0ZGRkZGRlwiLFxyXG4gICAgcGFkZGluZzogNDUsXHJcbiAgICBib3hTaXppbmc6IFwiYm9yZGVyLWJveFwiLFxyXG4gICAgYm94U2hhZG93OiBcIjBweCA0cHggMTBweCByZ2JhKDAsIDAsIDAsIDAuMTUpXCIsXHJcbiAgICBib3JkZXJSYWRpdXM6IDEwLFxyXG4gIH0sXHJcbiAgVGV4dEZpZWxkOiB7XHJcbiAgICBoZWlnaHQ6IDU3LFxyXG4gICAgd2lkdGg6IDI1NCxcclxuICAgIGxlZnQ6IDAsXHJcbiAgfSxcclxufTtcclxuXHJcbmNvbnN0IGZpZWxkcyA9IFtcclxuICB7IGlkOiAwLCBuYW1lOiBcInVzZXJOYW1lXCIsIGxhYmVsOiBcItCk0LDQvNC40LvQuNGPINC4INC40LzRj1wiLCBpY29uUGF0aDogXCIvYmFkZ2UucG5nXCIgfSxcclxuICB7IGlkOiAxLCBuYW1lOiBcImVtYWlsXCIsIGxhYmVsOiBcIkUtbWFpbFwiLCBpY29uUGF0aDogXCIvbWFpbC5wbmdcIiB9LFxyXG4gIHtcclxuICAgIGlkOiAyLFxyXG4gICAgbmFtZTogXCJwaG9uZU51bWJlclwiLFxyXG4gICAgbGFiZWw6IFwi0J3QvtC80LXRgCDRgtC10LvQtdGE0L7QvdCwXCIsXHJcbiAgICBpY29uUGF0aDogXCIvcGhvbmUucG5nXCIsXHJcbiAgfSxcclxuXTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFVzZXJGb3JtKCkge1xyXG4gIGNvbnN0IHsgaGFuZGxlRGlhbG9nT3BlbiB9ID0gdXNlRGlhbG9nSG9vaygpO1xyXG5cclxuICBjb25zdCBoYW5kbGVGb3JtU3VibWl0ID0gKHZhbHVlcykgPT4ge1xyXG4gICAgYXhpb3NcclxuICAgICAgLnBvc3QoXCJodHRwOi8vbG9jYWxob3N0OjMwMDUvYXBpXCIsIEpTT04uc3RyaW5naWZ5KHZhbHVlcyksIHtcclxuICAgICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgICBcIkNvbnRlbnQtVHlwZVwiOiBcImFwcGxpY2F0aW9uL2pzb25cIixcclxuICAgICAgICAgIFwieC10b2tlbi1hY2Nlc3NcIjogXCJyYW5kb21cIixcclxuICAgICAgICB9LFxyXG4gICAgICB9KVxyXG4gICAgICAuY2F0Y2goKGVycm9yKSA9PiBjb25zb2xlLmxvZyhlcnJvci5yZXNwb25zZSkpO1xyXG5cclxuICAgIGNvbnNvbGUubG9nKHZhbHVlcyk7XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgcmVuZGVyVXNlckZvcm0gPSAoZmllbGRzKSA9PlxyXG4gICAgZmllbGRzLm1hcCgoZmllbGQpID0+IChcclxuICAgICAgPFJlYWN0LkZyYWdtZW50IGtleT17ZmllbGQuaWR9PlxyXG4gICAgICAgIDxGaWVsZFxyXG4gICAgICAgICAgbmFtZT17ZmllbGQubmFtZX1cclxuICAgICAgICAgIHN0eWxlPXtzdHlsZXMuVGV4dEZpZWxkfVxyXG4gICAgICAgICAgcmVuZGVyPXsoeyBpbnB1dCwgbWV0YSwgLi4ucmVzdCB9KSA9PiAoXHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtVc2VyRm9ybVN0eWxlcy5GaWVsZEl0ZW19PlxyXG4gICAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPXtmaWVsZC5pZH0+XHJcbiAgICAgICAgICAgICAgICA8aW1nXHJcbiAgICAgICAgICAgICAgICAgIHNyYz17ZmllbGQuaWNvblBhdGh9XHJcbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17VXNlckZvcm1TdHlsZXMuRmllbGRJY29ufVxyXG4gICAgICAgICAgICAgICAgICBhbHQ9e2ZpZWxkLmxhYmVsfVxyXG4gICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICA8L2xhYmVsPlxyXG4gICAgICAgICAgICAgIDxUZXh0RmllbGRcclxuICAgICAgICAgICAgICAgIGlkPXtmaWVsZC5uYW1lfVxyXG4gICAgICAgICAgICAgICAgey4uLmlucHV0fVxyXG4gICAgICAgICAgICAgICAgey4uLnJlc3R9XHJcbiAgICAgICAgICAgICAgICBsYWJlbD17ZmllbGQubGFiZWx9XHJcbiAgICAgICAgICAgICAgICBzdHlsZT17c3R5bGVzLlRleHRGaWVsZH1cclxuICAgICAgICAgICAgICAgIHZhcmlhbnQ9XCJvdXRsaW5lZFwiXHJcbiAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICApfVxyXG4gICAgICAgIC8+XHJcbiAgICAgICAge2ZpZWxkcy5sZW5ndGggLSAxICE9PSBmaWVsZC5pZCA/IChcclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtVc2VyRm9ybVN0eWxlcy5EaXZpZGVyfSAvPlxyXG4gICAgICAgICkgOiBudWxsfVxyXG4gICAgICA8L1JlYWN0LkZyYWdtZW50PlxyXG4gICAgKSk7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8UGFwZXIgc3R5bGU9e3N0eWxlcy5NdWlQYXBlcn0+XHJcbiAgICAgIDxGb3JtXHJcbiAgICAgICAgb25TdWJtaXQ9e2hhbmRsZUZvcm1TdWJtaXR9XHJcbiAgICAgICAgLy8gdmFsaWRhdGU9e3ZhbGlkYXRlfVxyXG4gICAgICAgIHJlbmRlcj17KHsgaGFuZGxlU3VibWl0LCB2YWx1ZXMgfSkgPT4gKFxyXG4gICAgICAgICAgPGZvcm0gb25TdWJtaXQ9e2hhbmRsZVN1Ym1pdH0gY2xhc3NOYW1lPXtVc2VyRm9ybVN0eWxlcy5Vc2VyRm9ybX0+XHJcbiAgICAgICAgICAgIDxzZWN0aW9uIGNsYXNzTmFtZT17VXNlckZvcm1TdHlsZXMuTWFpbkZvcm1Db250ZW50fT5cclxuICAgICAgICAgICAgICB7cmVuZGVyVXNlckZvcm0oZmllbGRzKX1cclxuICAgICAgICAgICAgPC9zZWN0aW9uPlxyXG5cclxuICAgICAgICAgICAgPGJ1dHRvblxyXG4gICAgICAgICAgICAgIHR5cGU9XCJzdWJtaXRcIlxyXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT17VXNlckZvcm1TdHlsZXMuU3VibWl0QnV0dG9ufVxyXG4gICAgICAgICAgICAgIG9uQ2xpY2s9e2hhbmRsZURpYWxvZ09wZW59XHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICDQodC+0YXRgNCw0L3QuNGC0Ywg0LjQt9C80LXQvdC10L3QuNGPXHJcbiAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICB7LyogPHAgY2xhc3NOYW1lPXtVc2VyRm9ybVN0eWxlcy5TdWNjZXNzTWVzc2FnZX0+XHJcbiAgICAgICAgICAgICAg0JjQt9C80LXQvdC10L3QuNGPINGB0L7RhdGA0LDQvdC10L3RiyEgKNC90L4g0Y3RgtC+INC90LUg0YLQvtGH0L3QvilcclxuICAgICAgICAgICAgPC9wPiAqL31cclxuICAgICAgICAgIDwvZm9ybT5cclxuICAgICAgICApfVxyXG4gICAgICAvPlxyXG4gICAgPC9QYXBlcj5cclxuICApO1xyXG59XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=