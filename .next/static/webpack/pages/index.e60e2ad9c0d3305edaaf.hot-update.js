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


var _jsxFileName = "C:\\Users\\vstepnova\\Desktop\\\u0442\u0435\u0441\u0442\u043E\u0432\u044B\u0435 \u0437\u0430\u0434\u0430\u043D\u0438\u044F\\test1\\components\\UserForm.js";

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
  var _this = this;

  var handleFormSubmit = function handleFormSubmit(values) {
    axios__WEBPACK_IMPORTED_MODULE_3___default.a.egt("http://localhost:3005/api", JSON.stringify(values), {
      headers: {
        "Content-Type": "application/json",
        "x-token-access": "random"
      }
    })["catch"](function (error) {
      return console.log(error.response);
    });
  };

  var renderUserForm = function renderUserForm(fields) {
    return fields.map(function (field) {
      return __jsx(react__WEBPACK_IMPORTED_MODULE_2___default.a.Fragment, {
        key: field.id,
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 50,
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
              lineNumber: 55,
              columnNumber: 13
            }
          }, __jsx("label", {
            htmlFor: field.id,
            __self: _this,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 56,
              columnNumber: 15
            }
          }, __jsx("img", {
            src: field.iconPath,
            className: _styles_UserForm_module_scss__WEBPACK_IMPORTED_MODULE_7___default.a.FieldIcon,
            alt: field.label,
            __self: _this,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 57,
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
              lineNumber: 63,
              columnNumber: 15
            }
          })));
        },
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 51,
          columnNumber: 9
        }
      }), fields.length - 1 !== field.id ? __jsx("div", {
        className: _styles_UserForm_module_scss__WEBPACK_IMPORTED_MODULE_7___default.a.Divider,
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 75,
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
      lineNumber: 81,
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
          lineNumber: 86,
          columnNumber: 11
        }
      }, __jsx("section", {
        className: _styles_UserForm_module_scss__WEBPACK_IMPORTED_MODULE_7___default.a.MainFormContent,
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 87,
          columnNumber: 13
        }
      }, renderUserForm(fields)), __jsx("button", {
        type: "submit",
        className: _styles_UserForm_module_scss__WEBPACK_IMPORTED_MODULE_7___default.a.SubmitButton,
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 91,
          columnNumber: 13
        }
      }, "\u0421\u043E\u0445\u0440\u0430\u043D\u0438\u0442\u044C \u0438\u0437\u043C\u0435\u043D\u0435\u043D\u0438\u044F"));
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 82,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Vc2VyRm9ybS5qcyJdLCJuYW1lcyI6WyJzdHlsZXMiLCJNdWlQYXBlciIsImJhY2tncm91bmQiLCJwYWRkaW5nIiwiYm94U2l6aW5nIiwiYm94U2hhZG93IiwiYm9yZGVyUmFkaXVzIiwiVGV4dEZpZWxkIiwiaGVpZ2h0Iiwid2lkdGgiLCJsZWZ0IiwiZmllbGRzIiwiaWQiLCJuYW1lIiwibGFiZWwiLCJpY29uUGF0aCIsIlVzZXJGb3JtIiwiaGFuZGxlRm9ybVN1Ym1pdCIsInZhbHVlcyIsImF4aW9zIiwiZWd0IiwiSlNPTiIsInN0cmluZ2lmeSIsImhlYWRlcnMiLCJlcnJvciIsImNvbnNvbGUiLCJsb2ciLCJyZXNwb25zZSIsInJlbmRlclVzZXJGb3JtIiwibWFwIiwiZmllbGQiLCJpbnB1dCIsIm1ldGEiLCJyZXN0IiwiVXNlckZvcm1TdHlsZXMiLCJGaWVsZEl0ZW0iLCJGaWVsZEljb24iLCJsZW5ndGgiLCJEaXZpZGVyIiwiaGFuZGxlU3VibWl0IiwiTWFpbkZvcm1Db250ZW50IiwiU3VibWl0QnV0dG9uIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUVBLElBQU1BLE1BQU0sR0FBRztBQUNiQyxVQUFRLEVBQUU7QUFDUkMsY0FBVSxFQUFFLFNBREo7QUFFUkMsV0FBTyxFQUFFLEVBRkQ7QUFHUkMsYUFBUyxFQUFFLFlBSEg7QUFJUkMsYUFBUyxFQUFFLGtDQUpIO0FBS1JDLGdCQUFZLEVBQUU7QUFMTixHQURHO0FBUWJDLFdBQVMsRUFBRTtBQUNUQyxVQUFNLEVBQUUsRUFEQztBQUVUQyxTQUFLLEVBQUUsR0FGRTtBQUdUQyxRQUFJLEVBQUU7QUFIRztBQVJFLENBQWY7QUFlQSxJQUFNQyxNQUFNLEdBQUcsQ0FDYjtBQUFFQyxJQUFFLEVBQUUsQ0FBTjtBQUFTQyxNQUFJLEVBQUUsVUFBZjtBQUEyQkMsT0FBSyxFQUFF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O0FBR0UsVUFBTSxFQUFFO0FBQUEsVUFBR3NCLFlBQUgsU0FBR0EsWUFBSDtBQUFBLFVBQWlCckIsTUFBakIsU0FBaUJBLE1BQWpCO0FBQUEsYUFDTjtBQUFNLGdCQUFRLEVBQUVxQixZQUFoQjtBQUE4QixpQkFBUyxFQUFFTCxtRUFBYyxDQUFDbEIsUUFBeEQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxTQUNFO0FBQVMsaUJBQVMsRUFBRWtCLG1FQUFjLENBQUNNLGVBQW5DO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0FDR1osY0FBYyxDQUFDakIsTUFBRCxDQURqQixDQURGLEVBS0U7QUFBUSxZQUFJLEVBQUMsUUFBYjtBQUFzQixpQkFBUyxFQUFFdUIsbUVBQWMsQ0FBQ08sWUFBaEQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSx5SEFMRixDQURNO0FBQUEsS0FIVjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREYsQ0FERjtBQXNCRDtLQXBFdUJ6QixRIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LmU2MGUyYWQ5YzBkMzMwNWVkYWFmLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCI7XHJcbmltcG9ydCBQYXBlciBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvUGFwZXJcIjtcclxuaW1wb3J0IHsgRm9ybSwgRmllbGQgfSBmcm9tIFwicmVhY3QtZmluYWwtZm9ybVwiO1xyXG5pbXBvcnQgVGV4dEZpZWxkIGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZS9UZXh0RmllbGRcIjtcclxuXHJcbmltcG9ydCBVc2VyRm9ybVN0eWxlcyBmcm9tIFwiLi4vc3R5bGVzL1VzZXJGb3JtLm1vZHVsZS5zY3NzXCI7XHJcblxyXG5jb25zdCBzdHlsZXMgPSB7XHJcbiAgTXVpUGFwZXI6IHtcclxuICAgIGJhY2tncm91bmQ6IFwiI0ZGRkZGRlwiLFxyXG4gICAgcGFkZGluZzogNDUsXHJcbiAgICBib3hTaXppbmc6IFwiYm9yZGVyLWJveFwiLFxyXG4gICAgYm94U2hhZG93OiBcIjBweCA0cHggMTBweCByZ2JhKDAsIDAsIDAsIDAuMTUpXCIsXHJcbiAgICBib3JkZXJSYWRpdXM6IDEwLFxyXG4gIH0sXHJcbiAgVGV4dEZpZWxkOiB7XHJcbiAgICBoZWlnaHQ6IDU3LFxyXG4gICAgd2lkdGg6IDI1NCxcclxuICAgIGxlZnQ6IDAsXHJcbiAgfSxcclxufTtcclxuXHJcbmNvbnN0IGZpZWxkcyA9IFtcclxuICB7IGlkOiAwLCBuYW1lOiBcInVzZXJOYW1lXCIsIGxhYmVsOiBcItCk0LDQvNC40LvQuNGPINC4INC40LzRj1wiLCBpY29uUGF0aDogXCIvYmFkZ2UucG5nXCIgfSxcclxuICB7IGlkOiAxLCBuYW1lOiBcImVtYWlsXCIsIGxhYmVsOiBcIkUtbWFpbFwiLCBpY29uUGF0aDogXCIvbWFpbC5wbmdcIiB9LFxyXG4gIHtcclxuICAgIGlkOiAyLFxyXG4gICAgbmFtZTogXCJwaG9uZU51bWJlclwiLFxyXG4gICAgbGFiZWw6IFwi0J3QvtC80LXRgCDRgtC10LvQtdGE0L7QvdCwXCIsXHJcbiAgICBpY29uUGF0aDogXCIvcGhvbmUucG5nXCIsXHJcbiAgfSxcclxuXTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFVzZXJGb3JtKCkge1xyXG4gIGNvbnN0IGhhbmRsZUZvcm1TdWJtaXQgPSAodmFsdWVzKSA9PiB7XHJcbiAgICBheGlvcy5lZ3QoXHJcbiAgICAgIFwiaHR0cDovL2xvY2FsaG9zdDozMDA1L2FwaVwiLFxyXG4gICAgICBKU09OLnN0cmluZ2lmeSh2YWx1ZXMpLFxyXG4gICAgICB7XHJcbiAgICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgICAgXCJDb250ZW50LVR5cGVcIjogXCJhcHBsaWNhdGlvbi9qc29uXCIsXHJcbiAgICAgICAgICBcIngtdG9rZW4tYWNjZXNzXCI6IFwicmFuZG9tXCIsXHJcbiAgICAgICAgfSxcclxuICAgICAgfVxyXG4gICAgKS5jYXRjaChlcnJvcj0+Y29uc29sZS5sb2coZXJyb3IucmVzcG9uc2UpKVxyXG4gIH07XHJcblxyXG4gIGNvbnN0IHJlbmRlclVzZXJGb3JtID0gKGZpZWxkcykgPT5cclxuICAgIGZpZWxkcy5tYXAoKGZpZWxkKSA9PiAoXHJcbiAgICAgIDxSZWFjdC5GcmFnbWVudCBrZXk9e2ZpZWxkLmlkfT5cclxuICAgICAgICA8RmllbGRcclxuICAgICAgICAgIG5hbWU9e2ZpZWxkLm5hbWV9XHJcbiAgICAgICAgICBzdHlsZT17c3R5bGVzLlRleHRGaWVsZH1cclxuICAgICAgICAgIHJlbmRlcj17KHsgaW5wdXQsIG1ldGEsIC4uLnJlc3QgfSkgPT4gKFxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17VXNlckZvcm1TdHlsZXMuRmllbGRJdGVtfT5cclxuICAgICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj17ZmllbGQuaWR9PlxyXG4gICAgICAgICAgICAgICAgPGltZ1xyXG4gICAgICAgICAgICAgICAgICBzcmM9e2ZpZWxkLmljb25QYXRofVxyXG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e1VzZXJGb3JtU3R5bGVzLkZpZWxkSWNvbn1cclxuICAgICAgICAgICAgICAgICAgYWx0PXtmaWVsZC5sYWJlbH1cclxuICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgPC9sYWJlbD5cclxuICAgICAgICAgICAgICA8VGV4dEZpZWxkXHJcbiAgICAgICAgICAgICAgICBpZD17ZmllbGQubmFtZX1cclxuICAgICAgICAgICAgICAgIHsuLi5pbnB1dH1cclxuICAgICAgICAgICAgICAgIHsuLi5yZXN0fVxyXG4gICAgICAgICAgICAgICAgbGFiZWw9e2ZpZWxkLmxhYmVsfVxyXG4gICAgICAgICAgICAgICAgc3R5bGU9e3N0eWxlcy5UZXh0RmllbGR9XHJcbiAgICAgICAgICAgICAgICB2YXJpYW50PVwib3V0bGluZWRcIlxyXG4gICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgKX1cclxuICAgICAgICAvPlxyXG4gICAgICAgIHtmaWVsZHMubGVuZ3RoIC0gMSAhPT0gZmllbGQuaWQgPyAoXHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17VXNlckZvcm1TdHlsZXMuRGl2aWRlcn0gLz5cclxuICAgICAgICApIDogbnVsbH1cclxuICAgICAgPC9SZWFjdC5GcmFnbWVudD5cclxuICAgICkpO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPFBhcGVyIHN0eWxlPXtzdHlsZXMuTXVpUGFwZXJ9PlxyXG4gICAgICA8Rm9ybVxyXG4gICAgICAgIG9uU3VibWl0PXtoYW5kbGVGb3JtU3VibWl0fVxyXG4gICAgICAgIC8vIHZhbGlkYXRlPXt2YWxpZGF0ZX1cclxuICAgICAgICByZW5kZXI9eyh7IGhhbmRsZVN1Ym1pdCwgdmFsdWVzIH0pID0+IChcclxuICAgICAgICAgIDxmb3JtIG9uU3VibWl0PXtoYW5kbGVTdWJtaXR9IGNsYXNzTmFtZT17VXNlckZvcm1TdHlsZXMuVXNlckZvcm19PlxyXG4gICAgICAgICAgICA8c2VjdGlvbiBjbGFzc05hbWU9e1VzZXJGb3JtU3R5bGVzLk1haW5Gb3JtQ29udGVudH0+XHJcbiAgICAgICAgICAgICAge3JlbmRlclVzZXJGb3JtKGZpZWxkcyl9XHJcbiAgICAgICAgICAgIDwvc2VjdGlvbj5cclxuXHJcbiAgICAgICAgICAgIDxidXR0b24gdHlwZT1cInN1Ym1pdFwiIGNsYXNzTmFtZT17VXNlckZvcm1TdHlsZXMuU3VibWl0QnV0dG9ufT5cclxuICAgICAgICAgICAgICDQodC+0YXRgNCw0L3QuNGC0Ywg0LjQt9C80LXQvdC10L3QuNGPXHJcbiAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICB7LyogPHAgY2xhc3NOYW1lPXtVc2VyRm9ybVN0eWxlcy5TdWNjZXNzTWVzc2FnZX0+XHJcbiAgICAgICAgICAgICAg0JjQt9C80LXQvdC10L3QuNGPINGB0L7RhdGA0LDQvdC10L3RiyEgKNC90L4g0Y3RgtC+INC90LUg0YLQvtGH0L3QvilcclxuICAgICAgICAgICAgPC9wPiAqL31cclxuICAgICAgICAgIDwvZm9ybT5cclxuICAgICAgICApfVxyXG4gICAgICAvPlxyXG4gICAgPC9QYXBlcj5cclxuICApO1xyXG59XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=