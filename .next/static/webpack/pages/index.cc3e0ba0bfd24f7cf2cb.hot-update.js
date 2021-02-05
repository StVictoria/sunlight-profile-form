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
      isOpen = _useDialogHook.isOpen,
      handleDialogOpen = _useDialogHook.handleDialogOpen,
      handleDialogClose = _useDialogHook.handleDialogClose;

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

_s(UserForm, "trafa2EU4oS+l0aeKQoEr+gifZo=", false, function () {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Vc2VyRm9ybS5qcyJdLCJuYW1lcyI6WyJzdHlsZXMiLCJNdWlQYXBlciIsImJhY2tncm91bmQiLCJwYWRkaW5nIiwiYm94U2l6aW5nIiwiYm94U2hhZG93IiwiYm9yZGVyUmFkaXVzIiwiVGV4dEZpZWxkIiwiaGVpZ2h0Iiwid2lkdGgiLCJsZWZ0IiwiZmllbGRzIiwiaWQiLCJuYW1lIiwibGFiZWwiLCJpY29uUGF0aCIsIlVzZXJGb3JtIiwidXNlRGlhbG9nSG9vayIsImlzT3BlbiIsImhhbmRsZURpYWxvZ09wZW4iLCJoYW5kbGVEaWFsb2dDbG9zZSIsImhhbmRsZUZvcm1TdWJtaXQiLCJ2YWx1ZXMiLCJheGlvcyIsInBvc3QiLCJKU09OIiwic3RyaW5naWZ5IiwiaGVhZGVycyIsImVycm9yIiwiY29uc29sZSIsImxvZyIsInJlc3BvbnNlIiwicmVuZGVyVXNlckZvcm0iLCJtYXAiLCJmaWVsZCIsImlucHV0IiwibWV0YSIsInJlc3QiLCJVc2VyRm9ybVN0eWxlcyIsIkZpZWxkSXRlbSIsIkZpZWxkSWNvbiIsImxlbmd0aCIsIkRpdmlkZXIiLCJoYW5kbGVTdWJtaXQiLCJNYWluRm9ybUNvbnRlbnQiLCJTdWJtaXRCdXR0b24iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUEsSUFBTUEsTUFBTSxHQUFHO0FBQ2JDLFVBQVEsRUFBRTtBQUNSQyxjQUFVLEVBQUUsU0FESjtBQUVSQyxXQUFPLEVBQUUsRUFGRDtBQUdSQyxhQUFTLEVBQUUsWUFISDtBQUlSQyxhQUFTLEVBQUUsa0NBSkg7QUFLUkMsZ0JBQVksRUFBRTtBQUxOLEdBREc7QUFRYkMsV0FBUyxFQUFFO0FBQ1RDLFVBQU0sRUFBRSxFQURDO0FBRVRDLFNBQUssRUFBRSxHQUZFO0FBR1RDLFFBQUksRUFBRTtBQUhHO0FBUkUsQ0FBZjtBQWVBLElBQU1D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LG1FQUFjLENBQUNJLE9BQS9CO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsUUFERCxHQUVHLElBMUJOLENBRFM7QUFBQSxLQUFYLENBRHFCO0FBQUEsR0FBdkI7O0FBZ0NBLFNBQ0UsTUFBQywrREFBRDtBQUFPLFNBQUssRUFBRTFDLE1BQU0sQ0FBQ0MsUUFBckI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLE1BQUMscURBQUQ7QUFDRSxZQUFRLEVBQUVvQixnQkFEWixDQUVFO0FBRkY7QUFHRSxVQUFNLEVBQUU7QUFBQSxVQUFHc0IsWUFBSCxTQUFHQSxZQUFIO0FBQUEsVUFBaUJyQixNQUFqQixTQUFpQkEsTUFBakI7QUFBQSxhQUNOO0FBQU0sZ0JBQVEsRUFBRXFCLFlBQWhCO0FBQThCLGlCQUFTLEVBQUVMLG1FQUFjLENBQUN0QixRQUF4RDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBQ0U7QUFBUyxpQkFBUyxFQUFFc0IsbUVBQWMsQ0FBQ00sZUFBbkM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxTQUNHWixjQUFjLENBQUNyQixNQUFELENBRGpCLENBREYsRUFLRTtBQUFRLFlBQUksRUFBQyxRQUFiO0FBQXNCLGlCQUFTLEVBQUUyQixtRUFBYyxDQUFDTyxZQUFoRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHlIQUxGLENBRE07QUFBQSxLQUhWO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFERixDQURGO0FBc0JEOztHQXRFdUI3QixRO1VBQ2tDQyxpRTs7O0tBRGxDRCxRIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LmNjM2UwYmEwYmZkMjRmN2NmMmNiLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCI7XHJcbmltcG9ydCBQYXBlciBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvUGFwZXJcIjtcclxuaW1wb3J0IHsgRm9ybSwgRmllbGQgfSBmcm9tIFwicmVhY3QtZmluYWwtZm9ybVwiO1xyXG5pbXBvcnQgVGV4dEZpZWxkIGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZS9UZXh0RmllbGRcIjtcclxuXHJcbmltcG9ydCBVc2VyRm9ybVN0eWxlcyBmcm9tIFwiLi4vc3R5bGVzL1VzZXJGb3JtLm1vZHVsZS5zY3NzXCI7XHJcbmltcG9ydCB1c2VEaWFsb2dIb29rIGZyb20gXCIuLi9jb21wb25lbnRzL3VzZURpYWxvZ0hvb2tcIjtcclxuXHJcbmNvbnN0IHN0eWxlcyA9IHtcclxuICBNdWlQYXBlcjoge1xyXG4gICAgYmFja2dyb3VuZDogXCIjRkZGRkZGXCIsXHJcbiAgICBwYWRkaW5nOiA0NSxcclxuICAgIGJveFNpemluZzogXCJib3JkZXItYm94XCIsXHJcbiAgICBib3hTaGFkb3c6IFwiMHB4IDRweCAxMHB4IHJnYmEoMCwgMCwgMCwgMC4xNSlcIixcclxuICAgIGJvcmRlclJhZGl1czogMTAsXHJcbiAgfSxcclxuICBUZXh0RmllbGQ6IHtcclxuICAgIGhlaWdodDogNTcsXHJcbiAgICB3aWR0aDogMjU0LFxyXG4gICAgbGVmdDogMCxcclxuICB9LFxyXG59O1xyXG5cclxuY29uc3QgZmllbGRzID0gW1xyXG4gIHsgaWQ6IDAsIG5hbWU6IFwidXNlck5hbWVcIiwgbGFiZWw6IFwi0KTQsNC80LjQu9C40Y8g0Lgg0LjQvNGPXCIsIGljb25QYXRoOiBcIi9iYWRnZS5wbmdcIiB9LFxyXG4gIHsgaWQ6IDEsIG5hbWU6IFwiZW1haWxcIiwgbGFiZWw6IFwiRS1tYWlsXCIsIGljb25QYXRoOiBcIi9tYWlsLnBuZ1wiIH0sXHJcbiAge1xyXG4gICAgaWQ6IDIsXHJcbiAgICBuYW1lOiBcInBob25lTnVtYmVyXCIsXHJcbiAgICBsYWJlbDogXCLQndC+0LzQtdGAINGC0LXQu9C10YTQvtC90LBcIixcclxuICAgIGljb25QYXRoOiBcIi9waG9uZS5wbmdcIixcclxuICB9LFxyXG5dO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gVXNlckZvcm0oKSB7XHJcbiAgY29uc3QgeyBpc09wZW4sIGhhbmRsZURpYWxvZ09wZW4sIGhhbmRsZURpYWxvZ0Nsb3NlIH0gPSB1c2VEaWFsb2dIb29rKCk7XHJcblxyXG4gIGNvbnN0IGhhbmRsZUZvcm1TdWJtaXQgPSAodmFsdWVzKSA9PiB7XHJcbiAgICBheGlvc1xyXG4gICAgICAucG9zdChcImh0dHA6Ly9sb2NhbGhvc3Q6MzAwNS9hcGlcIiwgSlNPTi5zdHJpbmdpZnkodmFsdWVzKSwge1xyXG4gICAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICAgIFwiQ29udGVudC1UeXBlXCI6IFwiYXBwbGljYXRpb24vanNvblwiLFxyXG4gICAgICAgICAgXCJ4LXRva2VuLWFjY2Vzc1wiOiBcInJhbmRvbVwiLFxyXG4gICAgICAgIH0sXHJcbiAgICAgIH0pXHJcbiAgICAgIC5jYXRjaCgoZXJyb3IpID0+IGNvbnNvbGUubG9nKGVycm9yLnJlc3BvbnNlKSk7XHJcblxyXG4gICAgY29uc29sZS5sb2codmFsdWVzKTtcclxuICB9O1xyXG5cclxuICBjb25zdCByZW5kZXJVc2VyRm9ybSA9IChmaWVsZHMpID0+XHJcbiAgICBmaWVsZHMubWFwKChmaWVsZCkgPT4gKFxyXG4gICAgICA8UmVhY3QuRnJhZ21lbnQga2V5PXtmaWVsZC5pZH0+XHJcbiAgICAgICAgPEZpZWxkXHJcbiAgICAgICAgICBuYW1lPXtmaWVsZC5uYW1lfVxyXG4gICAgICAgICAgc3R5bGU9e3N0eWxlcy5UZXh0RmllbGR9XHJcbiAgICAgICAgICByZW5kZXI9eyh7IGlucHV0LCBtZXRhLCAuLi5yZXN0IH0pID0+IChcclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e1VzZXJGb3JtU3R5bGVzLkZpZWxkSXRlbX0+XHJcbiAgICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9e2ZpZWxkLmlkfT5cclxuICAgICAgICAgICAgICAgIDxpbWdcclxuICAgICAgICAgICAgICAgICAgc3JjPXtmaWVsZC5pY29uUGF0aH1cclxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtVc2VyRm9ybVN0eWxlcy5GaWVsZEljb259XHJcbiAgICAgICAgICAgICAgICAgIGFsdD17ZmllbGQubGFiZWx9XHJcbiAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgIDwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgPFRleHRGaWVsZFxyXG4gICAgICAgICAgICAgICAgaWQ9e2ZpZWxkLm5hbWV9XHJcbiAgICAgICAgICAgICAgICB7Li4uaW5wdXR9XHJcbiAgICAgICAgICAgICAgICB7Li4ucmVzdH1cclxuICAgICAgICAgICAgICAgIGxhYmVsPXtmaWVsZC5sYWJlbH1cclxuICAgICAgICAgICAgICAgIHN0eWxlPXtzdHlsZXMuVGV4dEZpZWxkfVxyXG4gICAgICAgICAgICAgICAgdmFyaWFudD1cIm91dGxpbmVkXCJcclxuICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICl9XHJcbiAgICAgICAgLz5cclxuICAgICAgICB7ZmllbGRzLmxlbmd0aCAtIDEgIT09IGZpZWxkLmlkID8gKFxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9e1VzZXJGb3JtU3R5bGVzLkRpdmlkZXJ9IC8+XHJcbiAgICAgICAgKSA6IG51bGx9XHJcbiAgICAgIDwvUmVhY3QuRnJhZ21lbnQ+XHJcbiAgICApKTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxQYXBlciBzdHlsZT17c3R5bGVzLk11aVBhcGVyfT5cclxuICAgICAgPEZvcm1cclxuICAgICAgICBvblN1Ym1pdD17aGFuZGxlRm9ybVN1Ym1pdH1cclxuICAgICAgICAvLyB2YWxpZGF0ZT17dmFsaWRhdGV9XHJcbiAgICAgICAgcmVuZGVyPXsoeyBoYW5kbGVTdWJtaXQsIHZhbHVlcyB9KSA9PiAoXHJcbiAgICAgICAgICA8Zm9ybSBvblN1Ym1pdD17aGFuZGxlU3VibWl0fSBjbGFzc05hbWU9e1VzZXJGb3JtU3R5bGVzLlVzZXJGb3JtfT5cclxuICAgICAgICAgICAgPHNlY3Rpb24gY2xhc3NOYW1lPXtVc2VyRm9ybVN0eWxlcy5NYWluRm9ybUNvbnRlbnR9PlxyXG4gICAgICAgICAgICAgIHtyZW5kZXJVc2VyRm9ybShmaWVsZHMpfVxyXG4gICAgICAgICAgICA8L3NlY3Rpb24+XHJcblxyXG4gICAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJzdWJtaXRcIiBjbGFzc05hbWU9e1VzZXJGb3JtU3R5bGVzLlN1Ym1pdEJ1dHRvbn0+XHJcbiAgICAgICAgICAgICAg0KHQvtGF0YDQsNC90LjRgtGMINC40LfQvNC10L3QtdC90LjRj1xyXG4gICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgey8qIDxwIGNsYXNzTmFtZT17VXNlckZvcm1TdHlsZXMuU3VjY2Vzc01lc3NhZ2V9PlxyXG4gICAgICAgICAgICAgINCY0LfQvNC10L3QtdC90LjRjyDRgdC+0YXRgNCw0L3QtdC90YshICjQvdC+INGN0YLQviDQvdC1INGC0L7Rh9C90L4pXHJcbiAgICAgICAgICAgIDwvcD4gKi99XHJcbiAgICAgICAgICA8L2Zvcm0+XHJcbiAgICAgICAgKX1cclxuICAgICAgLz5cclxuICAgIDwvUGFwZXI+XHJcbiAgKTtcclxufVxyXG4iXSwic291cmNlUm9vdCI6IiJ9