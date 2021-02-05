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
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core/Paper */ "./node_modules/@material-ui/core/esm/Paper/index.js");
/* harmony import */ var react_final_form__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-final-form */ "./node_modules/react-final-form/dist/react-final-form.es.js");
/* harmony import */ var _material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/TextField */ "./node_modules/@material-ui/core/esm/TextField/index.js");
/* harmony import */ var _styles_UserForm_module_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../styles/UserForm.module.scss */ "./styles/UserForm.module.scss");
/* harmony import */ var _styles_UserForm_module_scss__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_styles_UserForm_module_scss__WEBPACK_IMPORTED_MODULE_4__);
var _jsxFileName = "C:\\Users\\vstepnova\\Desktop\\test1\\components\\UserForm.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




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
  var _this = this;

  var handleFormSubmit = function handleFormSubmit() {
    return console.log("handleFormSubmit");
  };

  var renderUserForm = function renderUserForm(fields) {
    return fields.map(function (field) {
      return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(react_final_form__WEBPACK_IMPORTED_MODULE_2__["Field"], {
        name: field.name,
        style: styles.TextField,
        render: function render() {
          return __jsx("div", {
            className: _styles_UserForm_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a.FieldItem,
            __self: _this,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 43,
              columnNumber: 13
            }
          }, __jsx("label", {
            "for": field.id,
            __self: _this,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 44,
              columnNumber: 15
            }
          }, __jsx("img", {
            src: field.iconPath,
            className: _styles_UserForm_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a.FieldIcon,
            alt: field.label,
            __self: _this,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 45,
              columnNumber: 17
            }
          })), __jsx(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_3__["default"], {
            id: field.id,
            label: field.label,
            style: styles.TextField,
            variant: "outlined",
            __self: _this,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 51,
              columnNumber: 15
            }
          }));
        },
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 39,
          columnNumber: 9
        }
      }), fields.length - 1 !== field.id ? __jsx("div", {
        className: _styles_UserForm_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a.Divider,
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 61,
          columnNumber: 11
        }
      }) : null);
    });
  };

  return __jsx(_material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_1__["default"], {
    style: styles.MuiPaper,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67,
      columnNumber: 5
    }
  }, __jsx(react_final_form__WEBPACK_IMPORTED_MODULE_2__["Form"], {
    onSubmit: handleFormSubmit // validate={validate}
    ,
    render: function render(_ref) {
      var handleSubmit = _ref.handleSubmit;
      return __jsx("form", {
        onSubmit: handleSubmit,
        className: _styles_UserForm_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a.UserForm,
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 72,
          columnNumber: 11
        }
      }, __jsx("section", {
        className: _styles_UserForm_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a.MainFormContent,
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 73,
          columnNumber: 13
        }
      }, renderUserForm(fields)), __jsx("button", {
        type: "submit",
        className: _styles_UserForm_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a.SubmitButton,
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 77,
          columnNumber: 13
        }
      }, "\u0421\u043E\u0445\u0440\u0430\u043D\u0438\u0442\u044C \u0438\u0437\u043C\u0435\u043D\u0435\u043D\u0438\u044F"));
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Vc2VyRm9ybS5qcyJdLCJuYW1lcyI6WyJzdHlsZXMiLCJNdWlQYXBlciIsImJhY2tncm91bmQiLCJwYWRkaW5nIiwiYm94U2l6aW5nIiwiYm94U2hhZG93IiwiYm9yZGVyUmFkaXVzIiwiVGV4dEZpZWxkIiwiaGVpZ2h0Iiwid2lkdGgiLCJsZWZ0IiwiZmllbGRzIiwiaWQiLCJuYW1lIiwibGFiZWwiLCJpY29uUGF0aCIsIlVzZXJGb3JtIiwiaGFuZGxlRm9ybVN1Ym1pdCIsImNvbnNvbGUiLCJsb2ciLCJyZW5kZXJVc2VyRm9ybSIsIm1hcCIsImZpZWxkIiwiVXNlckZvcm1TdHlsZXMiLCJGaWVsZEl0ZW0iLCJGaWVsZEljb24iLCJsZW5ndGgiLCJEaXZpZGVyIiwiaGFuZGxlU3VibWl0IiwiTWFpbkZvcm1Db250ZW50IiwiU3VibWl0QnV0dG9uIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBRUE7QUFFQSxJQUFNQSxNQUFNLEdBQUc7QUFDYkMsVUFBUSxFQUFFO0FBQ1JDLGNBQVUsRUFBRSxTQURKO0FBRVJDLFdBQU8sRUFBRSxFQUZEO0FBR1JDLGFBQVMsRUFBRSxZQUhIO0FBSVJDLGFBQVMsRUFBRSxrQ0FKSDtBQUtSQyxnQkFBWSxFQUFFO0FBTE4sR0FERztBQVFiQyxXQUFTLEVBQUU7QUFDVEMsVUFBTSxFQUFFLEVBREM7QUFFVEMsU0FBSyxFQUFFLEdBRkU7QUFHVEMsUUFBSSxFQUFFO0FBSEc7QUFSRSxDQUFmO0FBZUEsSUFBTUMsTUFBTSxHQUFHLENBQ2I7QUFBRUMsSUFBRSxFQUFFLENBQU47QUFBU0MsTUFBSSxFQUFFLFVBQWY7QUFBMkJDLE9BQUssRUFBRSxlQUFsQztBQUFtREMsVUFBUSxFQUFFO0FBQTdELENBRGEsRUFFYjtBQUFFSCxJQUFFLEVBQUUsQ0FBTjtBQUFTQyxNQUFJLEVBQUUsT0FBZjtBQUF3QkMsT0FBSyxFQUFFLFFBQS9C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anMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUGFwZXIgZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlL1BhcGVyXCI7XHJcbmltcG9ydCB7IEZvcm0sIEZpZWxkIH0gZnJvbSBcInJlYWN0LWZpbmFsLWZvcm1cIjtcclxuaW1wb3J0IFRleHRGaWVsZCBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvVGV4dEZpZWxkXCI7XHJcblxyXG5pbXBvcnQgVXNlckZvcm1TdHlsZXMgZnJvbSBcIi4uL3N0eWxlcy9Vc2VyRm9ybS5tb2R1bGUuc2Nzc1wiO1xyXG5cclxuY29uc3Qgc3R5bGVzID0ge1xyXG4gIE11aVBhcGVyOiB7XHJcbiAgICBiYWNrZ3JvdW5kOiBcIiNGRkZGRkZcIixcclxuICAgIHBhZGRpbmc6IDQ1LFxyXG4gICAgYm94U2l6aW5nOiBcImJvcmRlci1ib3hcIixcclxuICAgIGJveFNoYWRvdzogXCIwcHggNHB4IDEwcHggcmdiYSgwLCAwLCAwLCAwLjE1KVwiLFxyXG4gICAgYm9yZGVyUmFkaXVzOiAxMCxcclxuICB9LFxyXG4gIFRleHRGaWVsZDoge1xyXG4gICAgaGVpZ2h0OiA1NyxcclxuICAgIHdpZHRoOiAyNTQsXHJcbiAgICBsZWZ0OiAwLFxyXG4gIH0sXHJcbn07XHJcblxyXG5jb25zdCBmaWVsZHMgPSBbXHJcbiAgeyBpZDogMCwgbmFtZTogXCJ1c2VyTmFtZVwiLCBsYWJlbDogXCLQpNCw0LzQuNC70LjRjyDQuCDQuNC80Y9cIiwgaWNvblBhdGg6IFwiL2JhZGdlLnBuZ1wiIH0sXHJcbiAgeyBpZDogMSwgbmFtZTogXCJlbWFpbFwiLCBsYWJlbDogXCJFLW1haWxcIiwgaWNvblBhdGg6IFwiL21haWwucG5nXCIgfSxcclxuICB7XHJcbiAgICBpZDogMixcclxuICAgIG5hbWU6IFwicGhvbmVOdW1iZXJcIixcclxuICAgIGxhYmVsOiBcItCd0L7QvNC10YAg0YLQtdC70LXRhNC+0L3QsFwiLFxyXG4gICAgaWNvblBhdGg6IFwiL3Bob25lLnBuZ1wiLFxyXG4gIH0sXHJcbl07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBVc2VyRm9ybSgpIHtcclxuICBjb25zdCBoYW5kbGVGb3JtU3VibWl0ID0gKCkgPT4gY29uc29sZS5sb2coXCJoYW5kbGVGb3JtU3VibWl0XCIpO1xyXG5cclxuICBjb25zdCByZW5kZXJVc2VyRm9ybSA9IChmaWVsZHMpID0+XHJcbiAgICBmaWVsZHMubWFwKChmaWVsZCkgPT4gKFxyXG4gICAgICA8PlxyXG4gICAgICAgIDxGaWVsZFxyXG4gICAgICAgICAgbmFtZT17ZmllbGQubmFtZX1cclxuICAgICAgICAgIHN0eWxlPXtzdHlsZXMuVGV4dEZpZWxkfVxyXG4gICAgICAgICAgcmVuZGVyPXsoKSA9PiAoXHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtVc2VyRm9ybVN0eWxlcy5GaWVsZEl0ZW19PlxyXG4gICAgICAgICAgICAgIDxsYWJlbCBmb3I9e2ZpZWxkLmlkfT5cclxuICAgICAgICAgICAgICAgIDxpbWdcclxuICAgICAgICAgICAgICAgICAgc3JjPXtmaWVsZC5pY29uUGF0aH1cclxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtVc2VyRm9ybVN0eWxlcy5GaWVsZEljb259XHJcbiAgICAgICAgICAgICAgICAgIGFsdD17ZmllbGQubGFiZWx9XHJcbiAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgIDwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgPFRleHRGaWVsZFxyXG4gICAgICAgICAgICAgICAgaWQ9e2ZpZWxkLmlkfVxyXG4gICAgICAgICAgICAgICAgbGFiZWw9e2ZpZWxkLmxhYmVsfVxyXG4gICAgICAgICAgICAgICAgc3R5bGU9e3N0eWxlcy5UZXh0RmllbGR9XHJcbiAgICAgICAgICAgICAgICB2YXJpYW50PVwib3V0bGluZWRcIlxyXG4gICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgKX1cclxuICAgICAgICAvPlxyXG4gICAgICAgIHtmaWVsZHMubGVuZ3RoIC0gMSAhPT0gZmllbGQuaWQgPyAoXHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17VXNlckZvcm1TdHlsZXMuRGl2aWRlcn0gLz5cclxuICAgICAgICApIDogbnVsbH1cclxuICAgICAgPC8+XHJcbiAgICApKTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxQYXBlciBzdHlsZT17c3R5bGVzLk11aVBhcGVyfT5cclxuICAgICAgPEZvcm1cclxuICAgICAgICBvblN1Ym1pdD17aGFuZGxlRm9ybVN1Ym1pdH1cclxuICAgICAgICAvLyB2YWxpZGF0ZT17dmFsaWRhdGV9XHJcbiAgICAgICAgcmVuZGVyPXsoeyBoYW5kbGVTdWJtaXQgfSkgPT4gKFxyXG4gICAgICAgICAgPGZvcm0gb25TdWJtaXQ9e2hhbmRsZVN1Ym1pdH0gY2xhc3NOYW1lPXtVc2VyRm9ybVN0eWxlcy5Vc2VyRm9ybX0+XHJcbiAgICAgICAgICAgIDxzZWN0aW9uIGNsYXNzTmFtZT17VXNlckZvcm1TdHlsZXMuTWFpbkZvcm1Db250ZW50fT5cclxuICAgICAgICAgICAgICB7cmVuZGVyVXNlckZvcm0oZmllbGRzKX1cclxuICAgICAgICAgICAgPC9zZWN0aW9uPlxyXG5cclxuICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwic3VibWl0XCIgY2xhc3NOYW1lPXtVc2VyRm9ybVN0eWxlcy5TdWJtaXRCdXR0b259PlxyXG4gICAgICAgICAgICAgINCh0L7RhdGA0LDQvdC40YLRjCDQuNC30LzQtdC90LXQvdC40Y9cclxuICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICA8L2Zvcm0+XHJcbiAgICAgICAgKX1cclxuICAgICAgLz5cclxuICAgIDwvUGFwZXI+XHJcbiAgKTtcclxufVxyXG4iXSwic291cmNlUm9vdCI6IiJ9