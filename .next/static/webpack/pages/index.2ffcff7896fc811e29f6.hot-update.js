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
    axios__WEBPACK_IMPORTED_MODULE_3___default.a.post("http://localhost:3005/api", JSON.stringify(values))["catch"](function (error) {
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
          lineNumber: 48,
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
              lineNumber: 53,
              columnNumber: 13
            }
          }, __jsx("label", {
            htmlFor: field.id,
            __self: _this,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 54,
              columnNumber: 15
            }
          }, __jsx("img", {
            src: field.iconPath,
            className: _styles_UserForm_module_scss__WEBPACK_IMPORTED_MODULE_7___default.a.FieldIcon,
            alt: field.label,
            __self: _this,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 55,
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
              lineNumber: 61,
              columnNumber: 15
            }
          })));
        },
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 49,
          columnNumber: 9
        }
      }), fields.length - 1 !== field.id ? __jsx("div", {
        className: _styles_UserForm_module_scss__WEBPACK_IMPORTED_MODULE_7___default.a.Divider,
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 73,
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
      lineNumber: 79,
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
          lineNumber: 84,
          columnNumber: 11
        }
      }, __jsx("section", {
        className: _styles_UserForm_module_scss__WEBPACK_IMPORTED_MODULE_7___default.a.MainFormContent,
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 85,
          columnNumber: 13
        }
      }, renderUserForm(fields)), __jsx("button", {
        type: "submit",
        className: _styles_UserForm_module_scss__WEBPACK_IMPORTED_MODULE_7___default.a.SubmitButton,
        onSubmit: handleDialogOpen,
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 89,
          columnNumber: 13
        }
      }, "\u0421\u043E\u0445\u0440\u0430\u043D\u0438\u0442\u044C \u0438\u0437\u043C\u0435\u043D\u0435\u043D\u0438\u044F"));
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 80,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Vc2VyRm9ybS5qcyJdLCJuYW1lcyI6WyJzdHlsZXMiLCJNdWlQYXBlciIsImJhY2tncm91bmQiLCJwYWRkaW5nIiwiYm94U2l6aW5nIiwiYm94U2hhZG93IiwiYm9yZGVyUmFkaXVzIiwiVGV4dEZpZWxkIiwiaGVpZ2h0Iiwid2lkdGgiLCJsZWZ0IiwiZmllbGRzIiwiaWQiLCJuYW1lIiwibGFiZWwiLCJpY29uUGF0aCIsIlVzZXJGb3JtIiwidXNlRGlhbG9nSG9vayIsImhhbmRsZURpYWxvZ09wZW4iLCJoYW5kbGVGb3JtU3VibWl0IiwidmFsdWVzIiwiYXhpb3MiLCJwb3N0IiwiSlNPTiIsInN0cmluZ2lmeSIsImVycm9yIiwiY29uc29sZSIsImxvZyIsInJlc3BvbnNlIiwicmVuZGVyVXNlckZvcm0iLCJtYXAiLCJmaWVsZCIsImlucHV0IiwibWV0YSIsInJlc3QiLCJVc2VyRm9ybVN0eWxlcyIsIkZpZWxkSXRlbSIsIkZpZWxkSWNvbiIsImxlbmd0aCIsIkRpdmlkZXIiLCJoYW5kbGVTdWJtaXQiLCJNYWluRm9ybUNvbnRlbnQiLCJTdWJtaXRCdXR0b24iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUEsSUFBTUEsTUFBTSxHQUFHO0FBQ2JDLFVBQVEsRUFBRTtBQUNSQyxjQUFVLEVBQUUsU0FESjtBQUVSQyxXQUFPLEVBQUUsRUFGRDtBQUdSQyxhQUFTLEVBQUUsWUFISDtBQUlSQyxhQUFTLEVBQUUsa0NBSkg7QUFLUkMsZ0JBQVksRUFBRTtBQUxOLEdBREc7QUFRYkMsV0FBUyxFQUFFO0FBQ1RDLFVBQU0sRUFBRSxFQURDO0FBRVRDLFNBQUssRUFBRSxHQUZFO0FBR1RDLFFBQUksRUFBRTtBQUhHO0FBUkUsQ0FBZjtBQWVBLElBQU1DLE1BQU0sR0FBRyxDQUNiO0FBQUVDLElBQUUsRUFBRSxDQUFOO0FB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O0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRSxNQUFDLHFEQUFEO0FBQ0UsWUFBUSxFQUFFa0IsZ0JBRFosQ0FFRTtBQUZGO0FBR0UsVUFBTSxFQUFFO0FBQUEsVUFBR3FCLFlBQUgsU0FBR0EsWUFBSDtBQUFBLFVBQWlCcEIsTUFBakIsU0FBaUJBLE1BQWpCO0FBQUEsYUFDTjtBQUFNLGdCQUFRLEVBQUVvQixZQUFoQjtBQUE4QixpQkFBUyxFQUFFTCxtRUFBYyxDQUFDbkIsUUFBeEQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxTQUNFO0FBQVMsaUJBQVMsRUFBRW1CLG1FQUFjLENBQUNNLGVBQW5DO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0FDR1osY0FBYyxDQUFDbEIsTUFBRCxDQURqQixDQURGLEVBS0U7QUFDRSxZQUFJLEVBQUMsUUFEUDtBQUVFLGlCQUFTLEVBQUV3QixtRUFBYyxDQUFDTyxZQUY1QjtBQUdFLGdCQUFRLEVBQUV4QixnQkFIWjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHlIQUxGLENBRE07QUFBQSxLQUhWO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFERixDQURGO0FBMEJEOztHQXJFdUJGLFE7VUFDT0MsaUU7OztLQURQRCxRIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LjJmZmNmZjc4OTZmYzgxMWUyOWY2LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCI7XHJcbmltcG9ydCBQYXBlciBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvUGFwZXJcIjtcclxuaW1wb3J0IHsgRm9ybSwgRmllbGQgfSBmcm9tIFwicmVhY3QtZmluYWwtZm9ybVwiO1xyXG5pbXBvcnQgVGV4dEZpZWxkIGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZS9UZXh0RmllbGRcIjtcclxuXHJcbmltcG9ydCBVc2VyRm9ybVN0eWxlcyBmcm9tIFwiLi4vc3R5bGVzL1VzZXJGb3JtLm1vZHVsZS5zY3NzXCI7XHJcbmltcG9ydCB1c2VEaWFsb2dIb29rIGZyb20gXCIuLi9jb21wb25lbnRzL3VzZURpYWxvZ0hvb2tcIjtcclxuXHJcbmNvbnN0IHN0eWxlcyA9IHtcclxuICBNdWlQYXBlcjoge1xyXG4gICAgYmFja2dyb3VuZDogXCIjRkZGRkZGXCIsXHJcbiAgICBwYWRkaW5nOiA0NSxcclxuICAgIGJveFNpemluZzogXCJib3JkZXItYm94XCIsXHJcbiAgICBib3hTaGFkb3c6IFwiMHB4IDRweCAxMHB4IHJnYmEoMCwgMCwgMCwgMC4xNSlcIixcclxuICAgIGJvcmRlclJhZGl1czogMTAsXHJcbiAgfSxcclxuICBUZXh0RmllbGQ6IHtcclxuICAgIGhlaWdodDogNTcsXHJcbiAgICB3aWR0aDogMjU0LFxyXG4gICAgbGVmdDogMCxcclxuICB9LFxyXG59O1xyXG5cclxuY29uc3QgZmllbGRzID0gW1xyXG4gIHsgaWQ6IDAsIG5hbWU6IFwidXNlck5hbWVcIiwgbGFiZWw6IFwi0KTQsNC80LjQu9C40Y8g0Lgg0LjQvNGPXCIsIGljb25QYXRoOiBcIi9iYWRnZS5wbmdcIiB9LFxyXG4gIHsgaWQ6IDEsIG5hbWU6IFwiZW1haWxcIiwgbGFiZWw6IFwiRS1tYWlsXCIsIGljb25QYXRoOiBcIi9tYWlsLnBuZ1wiIH0sXHJcbiAge1xyXG4gICAgaWQ6IDIsXHJcbiAgICBuYW1lOiBcInBob25lTnVtYmVyXCIsXHJcbiAgICBsYWJlbDogXCLQndC+0LzQtdGAINGC0LXQu9C10YTQvtC90LBcIixcclxuICAgIGljb25QYXRoOiBcIi9waG9uZS5wbmdcIixcclxuICB9LFxyXG5dO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gVXNlckZvcm0oKSB7XHJcbiAgY29uc3QgeyBoYW5kbGVEaWFsb2dPcGVuIH0gPSB1c2VEaWFsb2dIb29rKCk7XHJcblxyXG4gIGNvbnN0IGhhbmRsZUZvcm1TdWJtaXQgPSAodmFsdWVzKSA9PiB7XHJcbiAgICBheGlvc1xyXG4gICAgICAucG9zdChcImh0dHA6Ly9sb2NhbGhvc3Q6MzAwNS9hcGlcIiwgSlNPTi5zdHJpbmdpZnkodmFsdWVzKSlcclxuICAgICAgLmNhdGNoKChlcnJvcikgPT4gY29uc29sZS5sb2coZXJyb3IucmVzcG9uc2UpKTtcclxuXHJcbiAgICBjb25zb2xlLmxvZyh2YWx1ZXMpO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IHJlbmRlclVzZXJGb3JtID0gKGZpZWxkcykgPT5cclxuICAgIGZpZWxkcy5tYXAoKGZpZWxkKSA9PiAoXHJcbiAgICAgIDxSZWFjdC5GcmFnbWVudCBrZXk9e2ZpZWxkLmlkfT5cclxuICAgICAgICA8RmllbGRcclxuICAgICAgICAgIG5hbWU9e2ZpZWxkLm5hbWV9XHJcbiAgICAgICAgICBzdHlsZT17c3R5bGVzLlRleHRGaWVsZH1cclxuICAgICAgICAgIHJlbmRlcj17KHsgaW5wdXQsIG1ldGEsIC4uLnJlc3QgfSkgPT4gKFxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17VXNlckZvcm1TdHlsZXMuRmllbGRJdGVtfT5cclxuICAgICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj17ZmllbGQuaWR9PlxyXG4gICAgICAgICAgICAgICAgPGltZ1xyXG4gICAgICAgICAgICAgICAgICBzcmM9e2ZpZWxkLmljb25QYXRofVxyXG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e1VzZXJGb3JtU3R5bGVzLkZpZWxkSWNvbn1cclxuICAgICAgICAgICAgICAgICAgYWx0PXtmaWVsZC5sYWJlbH1cclxuICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgPC9sYWJlbD5cclxuICAgICAgICAgICAgICA8VGV4dEZpZWxkXHJcbiAgICAgICAgICAgICAgICBpZD17ZmllbGQubmFtZX1cclxuICAgICAgICAgICAgICAgIHsuLi5pbnB1dH1cclxuICAgICAgICAgICAgICAgIHsuLi5yZXN0fVxyXG4gICAgICAgICAgICAgICAgbGFiZWw9e2ZpZWxkLmxhYmVsfVxyXG4gICAgICAgICAgICAgICAgc3R5bGU9e3N0eWxlcy5UZXh0RmllbGR9XHJcbiAgICAgICAgICAgICAgICB2YXJpYW50PVwib3V0bGluZWRcIlxyXG4gICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgKX1cclxuICAgICAgICAvPlxyXG4gICAgICAgIHtmaWVsZHMubGVuZ3RoIC0gMSAhPT0gZmllbGQuaWQgPyAoXHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17VXNlckZvcm1TdHlsZXMuRGl2aWRlcn0gLz5cclxuICAgICAgICApIDogbnVsbH1cclxuICAgICAgPC9SZWFjdC5GcmFnbWVudD5cclxuICAgICkpO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPFBhcGVyIHN0eWxlPXtzdHlsZXMuTXVpUGFwZXJ9PlxyXG4gICAgICA8Rm9ybVxyXG4gICAgICAgIG9uU3VibWl0PXtoYW5kbGVGb3JtU3VibWl0fVxyXG4gICAgICAgIC8vIHZhbGlkYXRlPXt2YWxpZGF0ZX1cclxuICAgICAgICByZW5kZXI9eyh7IGhhbmRsZVN1Ym1pdCwgdmFsdWVzIH0pID0+IChcclxuICAgICAgICAgIDxmb3JtIG9uU3VibWl0PXtoYW5kbGVTdWJtaXR9IGNsYXNzTmFtZT17VXNlckZvcm1TdHlsZXMuVXNlckZvcm19PlxyXG4gICAgICAgICAgICA8c2VjdGlvbiBjbGFzc05hbWU9e1VzZXJGb3JtU3R5bGVzLk1haW5Gb3JtQ29udGVudH0+XHJcbiAgICAgICAgICAgICAge3JlbmRlclVzZXJGb3JtKGZpZWxkcyl9XHJcbiAgICAgICAgICAgIDwvc2VjdGlvbj5cclxuXHJcbiAgICAgICAgICAgIDxidXR0b25cclxuICAgICAgICAgICAgICB0eXBlPVwic3VibWl0XCJcclxuICAgICAgICAgICAgICBjbGFzc05hbWU9e1VzZXJGb3JtU3R5bGVzLlN1Ym1pdEJ1dHRvbn1cclxuICAgICAgICAgICAgICBvblN1Ym1pdD17aGFuZGxlRGlhbG9nT3Blbn1cclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgINCh0L7RhdGA0LDQvdC40YLRjCDQuNC30LzQtdC90LXQvdC40Y9cclxuICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgIHsvKiA8cCBjbGFzc05hbWU9e1VzZXJGb3JtU3R5bGVzLlN1Y2Nlc3NNZXNzYWdlfT5cclxuICAgICAgICAgICAgICDQmNC30LzQtdC90LXQvdC40Y8g0YHQvtGF0YDQsNC90LXQvdGLISAo0L3QviDRjdGC0L4g0L3QtSDRgtC+0YfQvdC+KVxyXG4gICAgICAgICAgICA8L3A+ICovfVxyXG4gICAgICAgICAgPC9mb3JtPlxyXG4gICAgICAgICl9XHJcbiAgICAgIC8+XHJcbiAgICA8L1BhcGVyPlxyXG4gICk7XHJcbn1cclxuIl0sInNvdXJjZVJvb3QiOiIifQ==