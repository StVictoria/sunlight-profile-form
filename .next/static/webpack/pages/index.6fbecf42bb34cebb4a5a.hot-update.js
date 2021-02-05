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
  }
};
var fields = [{
  id: 1,
  name: "userName",
  label: "Фамилия и имя",
  iconPath: "/badge.png"
}, {
  id: 2,
  name: "email",
  label: "E-mail",
  iconPath: "/mail.png"
}, {
  id: 3,
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
      return __jsx(react_final_form__WEBPACK_IMPORTED_MODULE_2__["Field"], {
        name: field.name,
        render: function render() {
          return __jsx("div", {
            className: _styles_UserForm_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a.FieldItem,
            __self: _this,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 36,
              columnNumber: 11
            }
          }, __jsx("label", {
            "for": field.id,
            __self: _this,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 37,
              columnNumber: 13
            }
          }, __jsx("img", {
            src: field.iconPath,
            className: _styles_UserForm_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a.FieldIcon,
            alt: field.label,
            __self: _this,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 38,
              columnNumber: 15
            }
          })), __jsx(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_3__["default"], {
            id: field.id,
            label: field.label,
            variant: "outlined",
            __self: _this,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 44,
              columnNumber: 13
            }
          }));
        },
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 33,
          columnNumber: 7
        }
      });
    });
  };

  return __jsx(_material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_1__["default"], {
    style: styles.MuiPaper,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51,
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
          lineNumber: 56,
          columnNumber: 11
        }
      }, __jsx("section", {
        className: _styles_UserForm_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a.MainFormContent,
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 57,
          columnNumber: 13
        }
      }, renderUserForm(fields)), __jsx("button", {
        type: "submit",
        className: _styles_UserForm_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a.SubmitButton,
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 61,
          columnNumber: 13
        }
      }, "\u0421\u043E\u0445\u0440\u0430\u043D\u0438\u0442\u044C \u0438\u0437\u043C\u0435\u043D\u0435\u043D\u0438\u044F"));
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Vc2VyRm9ybS5qcyJdLCJuYW1lcyI6WyJzdHlsZXMiLCJNdWlQYXBlciIsImJhY2tncm91bmQiLCJwYWRkaW5nIiwiYm94U2l6aW5nIiwiYm94U2hhZG93IiwiYm9yZGVyUmFkaXVzIiwiZmllbGRzIiwiaWQiLCJuYW1lIiwibGFiZWwiLCJpY29uUGF0aCIsIlVzZXJGb3JtIiwiaGFuZGxlRm9ybVN1Ym1pdCIsImNvbnNvbGUiLCJsb2ciLCJyZW5kZXJVc2VyRm9ybSIsIm1hcCIsImZpZWxkIiwiVXNlckZvcm1TdHlsZXMiLCJGaWVsZEl0ZW0iLCJGaWVsZEljb24iLCJoYW5kbGVTdWJtaXQiLCJNYWluRm9ybUNvbnRlbnQiLCJTdWJtaXRCdXR0b24iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFFQTtBQUVBLElBQU1BLE1BQU0sR0FBRztBQUNiQyxVQUFRLEVBQUU7QUFDUkMsY0FBVSxFQUFFLFNBREo7QUFFUkMsV0FBTyxFQUFFLEVBRkQ7QUFHUkMsYUFBUyxFQUFFLFlBSEg7QUFJUkMsYUFBUyxFQUFFLGtDQUpIO0FBS1JDLGdCQUFZLEVBQUU7QUFMTjtBQURHLENBQWY7QUFVQSxJQUFNQyxNQUFNLEdBQUcsQ0FDYjtBQUFFQyxJQUFFLEVBQUUsQ0FBTjtBQUFTQyxNQUFJLEVBQUUsVUFBZjtBQUEyQkMsT0FBSyxFQUFFLGVBQWxDO0FBQW1EQyxVQUFRLEVBQUU7QUFBN0QsQ0FEYSxFQUViO0FBQUVILElBQUUsRUFBRSxDQUFOO0FBQVNDLE1BQUksRUFBRSxPQUFmO0FBQXdCQyxPQUFLLEVBQUUsUUFBL0I7QUFBeUNDLFVBQVEsRUFBRTtBQUFuRCxDQUZhLEVBR2I7QUFDRUgsSUFBRSxFQUFFLENBRE47QUFFRUMsTUFBSSxFQUFFLGFBRlI7QUFHRUMsT0FBSyxFQUFFLGdCQUhUO0FBSUVDLFVBQVEsRUFBRTtBQUpaLENBSGEsQ0FBZjtBQVdlLFNBQVNDLFFBQVQsR0FBb0I7QUFBQTs7QUFDakMsTUFBTUMsZ0JBQWdCLEdBQUcsU0FBbkJBLGdCQUFtQjtBQUFBLFdBQU1DLE9BQU8sQ0FBQ0MsR0FBUixDQUFZLGtCQUFaLENBQU47QUFBQSxHQUF6Qjs7QUFFQSxNQUFNQyxjQUFjLEdBQUcsU0FBakJBLGNBQWlCLENBQUNULE1BQUQ7QUFBQSxXQUNyQkEsTUFBTSxDQUFDVSxHQUFQLENBQVcsVUFBQ0MsS0FBRDtBQUFBLGFBQ1QsTUFBQyxzREFBRDtBQUNFLFlBQUksRUFBRUEsS0FBSyxDQUFDVCxJQURkO0FBRUUsY0FBTSxFQUFFO0FBQUEsaUJBQ047QUFBSyxxQkFBUyxFQUFFVSxtRUFBYyxDQUFDQyxTQUEvQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBQ0U7QUFBTyxtQkFBS0YsS0FBSyxDQUFDVixFQUFsQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBQ0U7QUFDRSxlQUFHLEVBQUVVLEtBQUssQ0FBQ1AsUUFEYjtBQUVFLHFCQUFTLEVBQUVRLG1FQUFjLENBQUNFLFNBRjVCO0FBR0UsZUFBRyxFQUFFSCxLQUFLLENBQUNSLEtBSGI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQURGLENBREYsRUFRRSxNQUFDLG1FQUFEO0FBQVcsY0FBRSxFQUFFUSxLQUFLLENBQUNWLEVBQXJCO0FBQXlCLGlCQUFLLEVBQUVVLEtBQUssQ0FBQ1IsS0FBdEM7QUFBNkMsbUJBQU8sRUFBQyxVQUFyRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBUkYsQ0FETTtBQUFBLFNBRlY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxRQURTO0FBQUEsS0FBWCxDQURxQjtBQUFBLEdBQXZCOztBQW1CQSxTQUNFLE1BQUMsK0RBQUQ7QUFBTyxTQUFLLEVBQUVWLE1BQU0sQ0FBQ0MsUUFBckI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLE1BQUMscURBQUQ7QUFDRSxZQUFRLEVBQUVZLGdCQURaLENBRUU7QUFGRjtBQUdFLFVBQU0sRUFBRTtBQUFBLFVBQUdTLFlBQUgsUUFBR0EsWUFBSDtBQUFBLGFBQ047QUFBTSxnQkFBUSxFQUFFQSxZQUFoQjtBQUE4QixpQkFBUyxFQUFFSCxtRUFBYyxDQUFDUCxRQUF4RDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBQ0U7QUFBUyxpQkFBUyxFQUFFTyxtRUFBYyxDQUFDSSxlQUFuQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBQ0dQLGNBQWMsQ0FBQ1QsTUFBRCxDQURqQixDQURGLEVBS0U7QUFBUSxZQUFJLEVBQUMsUUFBYjtBQUFzQixpQkFBUyxFQUFFWSxtRUFBYyxDQUFDSyxZQUFoRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHlIQUxGLENBRE07QUFBQSxLQUhWO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFERixDQURGO0FBbUJEO0tBekN1QlosUSIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC42ZmJlY2Y0MmJiMzRjZWJiNGE1YS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFBhcGVyIGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZS9QYXBlclwiO1xyXG5pbXBvcnQgeyBGb3JtLCBGaWVsZCB9IGZyb20gXCJyZWFjdC1maW5hbC1mb3JtXCI7XHJcbmltcG9ydCBUZXh0RmllbGQgZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlL1RleHRGaWVsZFwiO1xyXG5cclxuaW1wb3J0IFVzZXJGb3JtU3R5bGVzIGZyb20gXCIuLi9zdHlsZXMvVXNlckZvcm0ubW9kdWxlLnNjc3NcIjtcclxuXHJcbmNvbnN0IHN0eWxlcyA9IHtcclxuICBNdWlQYXBlcjoge1xyXG4gICAgYmFja2dyb3VuZDogXCIjRkZGRkZGXCIsXHJcbiAgICBwYWRkaW5nOiA0NSxcclxuICAgIGJveFNpemluZzogXCJib3JkZXItYm94XCIsXHJcbiAgICBib3hTaGFkb3c6IFwiMHB4IDRweCAxMHB4IHJnYmEoMCwgMCwgMCwgMC4xNSlcIixcclxuICAgIGJvcmRlclJhZGl1czogMTAsXHJcbiAgfSxcclxufTtcclxuXHJcbmNvbnN0IGZpZWxkcyA9IFtcclxuICB7IGlkOiAxLCBuYW1lOiBcInVzZXJOYW1lXCIsIGxhYmVsOiBcItCk0LDQvNC40LvQuNGPINC4INC40LzRj1wiLCBpY29uUGF0aDogXCIvYmFkZ2UucG5nXCIgfSxcclxuICB7IGlkOiAyLCBuYW1lOiBcImVtYWlsXCIsIGxhYmVsOiBcIkUtbWFpbFwiLCBpY29uUGF0aDogXCIvbWFpbC5wbmdcIiB9LFxyXG4gIHtcclxuICAgIGlkOiAzLFxyXG4gICAgbmFtZTogXCJwaG9uZU51bWJlclwiLFxyXG4gICAgbGFiZWw6IFwi0J3QvtC80LXRgCDRgtC10LvQtdGE0L7QvdCwXCIsXHJcbiAgICBpY29uUGF0aDogXCIvcGhvbmUucG5nXCIsXHJcbiAgfSxcclxuXTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFVzZXJGb3JtKCkge1xyXG4gIGNvbnN0IGhhbmRsZUZvcm1TdWJtaXQgPSAoKSA9PiBjb25zb2xlLmxvZyhcImhhbmRsZUZvcm1TdWJtaXRcIik7XHJcblxyXG4gIGNvbnN0IHJlbmRlclVzZXJGb3JtID0gKGZpZWxkcykgPT5cclxuICAgIGZpZWxkcy5tYXAoKGZpZWxkKSA9PiAoXHJcbiAgICAgIDxGaWVsZFxyXG4gICAgICAgIG5hbWU9e2ZpZWxkLm5hbWV9XHJcbiAgICAgICAgcmVuZGVyPXsoKSA9PiAoXHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17VXNlckZvcm1TdHlsZXMuRmllbGRJdGVtfT5cclxuICAgICAgICAgICAgPGxhYmVsIGZvcj17ZmllbGQuaWR9PlxyXG4gICAgICAgICAgICAgIDxpbWdcclxuICAgICAgICAgICAgICAgIHNyYz17ZmllbGQuaWNvblBhdGh9XHJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9e1VzZXJGb3JtU3R5bGVzLkZpZWxkSWNvbn1cclxuICAgICAgICAgICAgICAgIGFsdD17ZmllbGQubGFiZWx9XHJcbiAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPC9sYWJlbD5cclxuICAgICAgICAgICAgPFRleHRGaWVsZCBpZD17ZmllbGQuaWR9IGxhYmVsPXtmaWVsZC5sYWJlbH0gdmFyaWFudD1cIm91dGxpbmVkXCIgLz5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICl9XHJcbiAgICAgIC8+XHJcbiAgICApKTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxQYXBlciBzdHlsZT17c3R5bGVzLk11aVBhcGVyfT5cclxuICAgICAgPEZvcm1cclxuICAgICAgICBvblN1Ym1pdD17aGFuZGxlRm9ybVN1Ym1pdH1cclxuICAgICAgICAvLyB2YWxpZGF0ZT17dmFsaWRhdGV9XHJcbiAgICAgICAgcmVuZGVyPXsoeyBoYW5kbGVTdWJtaXQgfSkgPT4gKFxyXG4gICAgICAgICAgPGZvcm0gb25TdWJtaXQ9e2hhbmRsZVN1Ym1pdH0gY2xhc3NOYW1lPXtVc2VyRm9ybVN0eWxlcy5Vc2VyRm9ybX0+XHJcbiAgICAgICAgICAgIDxzZWN0aW9uIGNsYXNzTmFtZT17VXNlckZvcm1TdHlsZXMuTWFpbkZvcm1Db250ZW50fT5cclxuICAgICAgICAgICAgICB7cmVuZGVyVXNlckZvcm0oZmllbGRzKX1cclxuICAgICAgICAgICAgPC9zZWN0aW9uPlxyXG5cclxuICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwic3VibWl0XCIgY2xhc3NOYW1lPXtVc2VyRm9ybVN0eWxlcy5TdWJtaXRCdXR0b259PlxyXG4gICAgICAgICAgICAgINCh0L7RhdGA0LDQvdC40YLRjCDQuNC30LzQtdC90LXQvdC40Y9cclxuICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICA8L2Zvcm0+XHJcbiAgICAgICAgKX1cclxuICAgICAgLz5cclxuICAgIDwvUGFwZXI+XHJcbiAgKTtcclxufVxyXG4iXSwic291cmNlUm9vdCI6IiJ9