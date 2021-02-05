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
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/Paper */ "./node_modules/@material-ui/core/esm/Paper/index.js");
/* harmony import */ var react_final_form__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-final-form */ "./node_modules/react-final-form/dist/react-final-form.es.js");
/* harmony import */ var _material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/TextField */ "./node_modules/@material-ui/core/esm/TextField/index.js");
/* harmony import */ var _styles_UserForm_module_scss__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../styles/UserForm.module.scss */ "./styles/UserForm.module.scss");
/* harmony import */ var _styles_UserForm_module_scss__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_styles_UserForm_module_scss__WEBPACK_IMPORTED_MODULE_5__);

var _jsxFileName = "C:\\Users\\vstepnova\\Desktop\\test1\\components\\UserForm.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;




var styles = {
  MuiPaper: {
    background: "#FFFFFF",
    padding: 45,
    boxSizing: "border-box",
    boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.15)",
    borderRadius: 10
  }
};
var fields = [{
  id: 1,
  label: "Фамилия и имя",
  icon: "/badge.png"
}, {
  id: 2,
  label: "E-mail",
  icon: "/mail.png"
}, {
  id: 3,
  label: "Номер телефона",
  icon: "/phone.png"
}];
function UserForm() {
  var _this = this;

  var handleFormSubmit = function handleFormSubmit() {
    return console.log("handleFormSubmit");
  };

  var UserInfoField = function UserInfoField(label) {
    return __jsx(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_4__["default"], {
      label: label,
      variant: "outlined",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 27,
        columnNumber: 5
      }
    });
  };

  return __jsx(_material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_2__["default"], {
    style: styles.MuiPaper,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 5
    }
  }, __jsx(react_final_form__WEBPACK_IMPORTED_MODULE_3__["Form"], {
    onSubmit: handleFormSubmit // validate={validate}
    ,
    render: function render(_ref) {
      var handleSubmit = _ref.handleSubmit;
      return __jsx("form", {
        onSubmit: handleSubmit,
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 36,
          columnNumber: 11
        }
      }, __jsx("section", {
        className: _styles_UserForm_module_scss__WEBPACK_IMPORTED_MODULE_5___default.a.MainFormContent,
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 37,
          columnNumber: 13
        }
      }, __jsx("div", {
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 38,
          columnNumber: 15
        }
      }, __jsx("label", {
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 39,
          columnNumber: 17
        }
      }, __jsx("img", {
        src: "/badge.png",
        alt: "user name",
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 40,
          columnNumber: 19
        }
      })), __jsx(react_final_form__WEBPACK_IMPORTED_MODULE_3__["Field"], {
        name: "userName",
        render: function render() {
          return UserInfoField("Фамилия и имя");
        },
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 42,
          columnNumber: 17
        }
      })), __jsx("div", {
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 48,
          columnNumber: 15
        }
      }, __jsx("label", {
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 49,
          columnNumber: 17
        }
      }, "Interests"), __jsx(react_final_form__WEBPACK_IMPORTED_MODULE_3__["Field"], {
        name: "interests",
        component: _material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_4__["default"],
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 50,
          columnNumber: 17
        }
      })), __jsx(react_final_form__WEBPACK_IMPORTED_MODULE_3__["Field"], {
        name: "bio",
        render: function render(_ref2) {
          var input = _ref2.input,
              meta = _ref2.meta;
          return __jsx("div", {
            __self: _this,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 56,
              columnNumber: 19
            }
          }, __jsx("label", {
            __self: _this,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 57,
              columnNumber: 21
            }
          }, "Bio"), __jsx("textarea", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, input, {
            __self: _this,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 58,
              columnNumber: 21
            }
          })), meta.touched && meta.error && __jsx("span", {
            __self: _this,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 59,
              columnNumber: 52
            }
          }, meta.error));
        },
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 53,
          columnNumber: 15
        }
      }), __jsx("h2", {
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 64,
          columnNumber: 15
        }
      }, "Render Function as Children"), __jsx(react_final_form__WEBPACK_IMPORTED_MODULE_3__["Field"], {
        name: "phone",
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 65,
          columnNumber: 15
        }
      }, function (_ref3) {
        var input = _ref3.input,
            meta = _ref3.meta;
        return __jsx("div", {
          __self: _this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 67,
            columnNumber: 19
          }
        }, __jsx("label", {
          __self: _this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 68,
            columnNumber: 21
          }
        }, "Phone"), __jsx("input", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
          type: "text"
        }, input, {
          placeholder: "Phone",
          __self: _this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 69,
            columnNumber: 21
          }
        })), meta.touched && meta.error && __jsx("span", {
          __self: _this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 70,
            columnNumber: 52
          }
        }, meta.error));
      })), __jsx("button", {
        type: "submit",
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 76,
          columnNumber: 13
        }
      }, "Submit"));
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 7
    }
  }));
}
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Vc2VyRm9ybS5qcyJdLCJuYW1lcyI6WyJzdHlsZXMiLCJNdWlQYXBlciIsImJhY2tncm91bmQiLCJwYWRkaW5nIiwiYm94U2l6aW5nIiwiYm94U2hhZG93IiwiYm9yZGVyUmFkaXVzIiwiZmllbGRzIiwiaWQiLCJsYWJlbCIsImljb24iLCJVc2VyRm9ybSIsImhhbmRsZUZvcm1TdWJtaXQiLCJjb25zb2xlIiwibG9nIiwiVXNlckluZm9GaWVsZCIsImhhbmRsZVN1Ym1pdCIsIlVzZXJGb3JtU3R5bGVzIiwiTWFpbkZvcm1Db250ZW50IiwiVGV4dEZpZWxkIiwiaW5wdXQiLCJtZXRhIiwidG91Y2hlZCIsImVycm9yIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFFQTtBQUVBLElBQU1BLE1BQU0sR0FBRztBQUNiQyxVQUFRLEVBQUU7QUFDUkMsY0FBVSxFQUFFLFNBREo7QUFFUkMsV0FBTyxFQUFFLEVBRkQ7QUFHUkMsYUFBUyxFQUFFLFlBSEg7QUFJUkMsYUFBUyxFQUFFLGtDQUpIO0FBS1JDLGdCQUFZLEVBQUU7QUFMTjtBQURHLENBQWY7QUFVQSxJQUFNQyxNQUFNLEdBQUcsQ0FDYjtBQUFFQyxJQUFFLEVBQUUsQ0FBTjtBQUFTQyxPQUFLLEVBQUUsZUFBaEI7QUFBaUNDLE1BQUksRUFBRTtBQUF2QyxDQURhLEVBRWI7QUFBRUYsSUFBRSxFQUFFLENBQU47QUFBU0MsT0FBSyxFQUFFLFFBQWhCO0FBQTBCQyxNQUFJLEVBQUU7QUFBaEMsQ0FGYSxFQUdiO0FBQUVGLElBQUUsRUFBRSxDQUFOO0FBQVNDLE9BQUssRUFBRSxnQkFBaEI7QUFBa0NDLE1BQUksRUFBRTtBQUF4QyxDQUhhLENBQWY7QUFNZSxTQUFTQyxRQUFULEdBQW9CO0FBQUE7O0FBQ2pDLE1BQU1DLGdCQUFnQixHQUFHLFNBQW5CQSxnQkFBbUI7QUFBQSxXQUFNQyxPQUFPLENBQUNDLEdB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QTtBQUFBO0FBQUEsV0FGRixFQUdHQyxJQUFJLENBQUNDLE9BQUwsSUFBZ0JELElBQUksQ0FBQ0UsS0FBckIsSUFBOEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQUFPRixJQUFJLENBQUNFLEtBQVosQ0FIakMsQ0FERDtBQUFBLE9BREgsQ0E1QkYsQ0FERixFQXdDRTtBQUFRLFlBQUksRUFBQyxRQUFiO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBeENGLENBRE07QUFBQSxLQUhWO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFERixDQURGO0FBb0REO0tBM0R1QlosUSIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC5mMDNiMjQyZTE5ZWJjOTJkZTczNS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFBhcGVyIGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZS9QYXBlclwiO1xyXG5pbXBvcnQgeyBGb3JtLCBGaWVsZCB9IGZyb20gXCJyZWFjdC1maW5hbC1mb3JtXCI7XHJcbmltcG9ydCBUZXh0RmllbGQgZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlL1RleHRGaWVsZFwiO1xyXG5cclxuaW1wb3J0IFVzZXJGb3JtU3R5bGVzIGZyb20gXCIuLi9zdHlsZXMvVXNlckZvcm0ubW9kdWxlLnNjc3NcIjtcclxuXHJcbmNvbnN0IHN0eWxlcyA9IHtcclxuICBNdWlQYXBlcjoge1xyXG4gICAgYmFja2dyb3VuZDogXCIjRkZGRkZGXCIsXHJcbiAgICBwYWRkaW5nOiA0NSxcclxuICAgIGJveFNpemluZzogXCJib3JkZXItYm94XCIsXHJcbiAgICBib3hTaGFkb3c6IFwiMHB4IDRweCAxMHB4IHJnYmEoMCwgMCwgMCwgMC4xNSlcIixcclxuICAgIGJvcmRlclJhZGl1czogMTAsXHJcbiAgfSxcclxufTtcclxuXHJcbmNvbnN0IGZpZWxkcyA9IFtcclxuICB7IGlkOiAxLCBsYWJlbDogXCLQpNCw0LzQuNC70LjRjyDQuCDQuNC80Y9cIiwgaWNvbjogXCIvYmFkZ2UucG5nXCIgfSxcclxuICB7IGlkOiAyLCBsYWJlbDogXCJFLW1haWxcIiwgaWNvbjogXCIvbWFpbC5wbmdcIiB9LFxyXG4gIHsgaWQ6IDMsIGxhYmVsOiBcItCd0L7QvNC10YAg0YLQtdC70LXRhNC+0L3QsFwiLCBpY29uOiBcIi9waG9uZS5wbmdcIiB9LFxyXG5dO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gVXNlckZvcm0oKSB7XHJcbiAgY29uc3QgaGFuZGxlRm9ybVN1Ym1pdCA9ICgpID0+IGNvbnNvbGUubG9nKFwiaGFuZGxlRm9ybVN1Ym1pdFwiKTtcclxuXHJcbiAgY29uc3QgVXNlckluZm9GaWVsZCA9IChsYWJlbCkgPT4gKFxyXG4gICAgPFRleHRGaWVsZCBsYWJlbD17bGFiZWx9IHZhcmlhbnQ9XCJvdXRsaW5lZFwiIC8+XHJcbiAgKTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxQYXBlciBzdHlsZT17c3R5bGVzLk11aVBhcGVyfT5cclxuICAgICAgPEZvcm1cclxuICAgICAgICBvblN1Ym1pdD17aGFuZGxlRm9ybVN1Ym1pdH1cclxuICAgICAgICAvLyB2YWxpZGF0ZT17dmFsaWRhdGV9XHJcbiAgICAgICAgcmVuZGVyPXsoeyBoYW5kbGVTdWJtaXQgfSkgPT4gKFxyXG4gICAgICAgICAgPGZvcm0gb25TdWJtaXQ9e2hhbmRsZVN1Ym1pdH0+XHJcbiAgICAgICAgICAgIDxzZWN0aW9uIGNsYXNzTmFtZT17VXNlckZvcm1TdHlsZXMuTWFpbkZvcm1Db250ZW50fT5cclxuICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgPGxhYmVsPlxyXG4gICAgICAgICAgICAgICAgICA8aW1nIHNyYz1cIi9iYWRnZS5wbmdcIiBhbHQ9XCJ1c2VyIG5hbWVcIiAvPlxyXG4gICAgICAgICAgICAgICAgPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgIDxGaWVsZFxyXG4gICAgICAgICAgICAgICAgICBuYW1lPVwidXNlck5hbWVcIlxyXG4gICAgICAgICAgICAgICAgICByZW5kZXI9eygpID0+IFVzZXJJbmZvRmllbGQoXCLQpNCw0LzQuNC70LjRjyDQuCDQuNC80Y9cIil9XHJcbiAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgPGxhYmVsPkludGVyZXN0czwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICA8RmllbGQgbmFtZT1cImludGVyZXN0c1wiIGNvbXBvbmVudD17VGV4dEZpZWxkfSAvPlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICA8RmllbGRcclxuICAgICAgICAgICAgICAgIG5hbWU9XCJiaW9cIlxyXG4gICAgICAgICAgICAgICAgcmVuZGVyPXsoeyBpbnB1dCwgbWV0YSB9KSA9PiAoXHJcbiAgICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGxhYmVsPkJpbzwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgPHRleHRhcmVhIHsuLi5pbnB1dH0gLz5cclxuICAgICAgICAgICAgICAgICAgICB7bWV0YS50b3VjaGVkICYmIG1ldGEuZXJyb3IgJiYgPHNwYW4+e21ldGEuZXJyb3J9PC9zcGFuPn1cclxuICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgIC8+XHJcblxyXG4gICAgICAgICAgICAgIDxoMj5SZW5kZXIgRnVuY3Rpb24gYXMgQ2hpbGRyZW48L2gyPlxyXG4gICAgICAgICAgICAgIDxGaWVsZCBuYW1lPVwicGhvbmVcIj5cclxuICAgICAgICAgICAgICAgIHsoeyBpbnB1dCwgbWV0YSB9KSA9PiAoXHJcbiAgICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGxhYmVsPlBob25lPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiB7Li4uaW5wdXR9IHBsYWNlaG9sZGVyPVwiUGhvbmVcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgIHttZXRhLnRvdWNoZWQgJiYgbWV0YS5lcnJvciAmJiA8c3Bhbj57bWV0YS5lcnJvcn08L3NwYW4+fVxyXG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgPC9GaWVsZD5cclxuICAgICAgICAgICAgPC9zZWN0aW9uPlxyXG5cclxuICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwic3VibWl0XCI+U3VibWl0PC9idXR0b24+XHJcbiAgICAgICAgICA8L2Zvcm0+XHJcbiAgICAgICAgKX1cclxuICAgICAgLz5cclxuICAgIDwvUGFwZXI+XHJcbiAgKTtcclxufVxyXG4iXSwic291cmNlUm9vdCI6IiJ9