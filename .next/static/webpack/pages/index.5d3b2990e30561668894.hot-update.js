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
      return __jsx("div", {
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 33,
          columnNumber: 7
        }
      }, __jsx("label", {
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 34,
          columnNumber: 9
        }
      }, __jsx("img", {
        src: field.iconPath,
        alt: field.label,
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 35,
          columnNumber: 11
        }
      })), __jsx(react_final_form__WEBPACK_IMPORTED_MODULE_3__["Field"], {
        name: field.name,
        conponent: __jsx(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_4__["default"], {
          label: label,
          variant: "outlined",
          __self: _this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 39,
            columnNumber: 22
          }
        }),
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 37,
          columnNumber: 9
        }
      }));
    });
  };

  return __jsx(_material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_2__["default"], {
    style: styles.MuiPaper,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45,
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
          lineNumber: 50,
          columnNumber: 11
        }
      }, __jsx("section", {
        className: _styles_UserForm_module_scss__WEBPACK_IMPORTED_MODULE_5___default.a.MainFormContent,
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 51,
          columnNumber: 13
        }
      }, __jsx("div", {
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 52,
          columnNumber: 15
        }
      }, __jsx("label", {
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 53,
          columnNumber: 17
        }
      }, __jsx("img", {
        src: "/badge.png",
        alt: "user name",
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 54,
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
          lineNumber: 56,
          columnNumber: 17
        }
      })), __jsx("div", {
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 62,
          columnNumber: 15
        }
      }, __jsx("label", {
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 63,
          columnNumber: 17
        }
      }, "Interests"), __jsx(react_final_form__WEBPACK_IMPORTED_MODULE_3__["Field"], {
        name: "interests",
        component: _material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_4__["default"],
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 64,
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
              lineNumber: 70,
              columnNumber: 19
            }
          }, __jsx("label", {
            __self: _this,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 71,
              columnNumber: 21
            }
          }, "Bio"), __jsx("textarea", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, input, {
            __self: _this,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 72,
              columnNumber: 21
            }
          })), meta.touched && meta.error && __jsx("span", {
            __self: _this,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 73,
              columnNumber: 52
            }
          }, meta.error));
        },
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 67,
          columnNumber: 15
        }
      }), __jsx("h2", {
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 78,
          columnNumber: 15
        }
      }, "Render Function as Children"), __jsx(react_final_form__WEBPACK_IMPORTED_MODULE_3__["Field"], {
        name: "phone",
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 79,
          columnNumber: 15
        }
      }, function (_ref3) {
        var input = _ref3.input,
            meta = _ref3.meta;
        return __jsx("div", {
          __self: _this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 81,
            columnNumber: 19
          }
        }, __jsx("label", {
          __self: _this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 82,
            columnNumber: 21
          }
        }, "Phone"), __jsx("input", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
          type: "text"
        }, input, {
          placeholder: "Phone",
          __self: _this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 83,
            columnNumber: 21
          }
        })), meta.touched && meta.error && __jsx("span", {
          __self: _this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 84,
            columnNumber: 52
          }
        }, meta.error));
      })), __jsx("button", {
        type: "submit",
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 90,
          columnNumber: 13
        }
      }, "Submit"));
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Vc2VyRm9ybS5qcyJdLCJuYW1lcyI6WyJzdHlsZXMiLCJNdWlQYXBlciIsImJhY2tncm91bmQiLCJwYWRkaW5nIiwiYm94U2l6aW5nIiwiYm94U2hhZG93IiwiYm9yZGVyUmFkaXVzIiwiZmllbGRzIiwiaWQiLCJuYW1lIiwibGFiZWwiLCJpY29uUGF0aCIsIlVzZXJGb3JtIiwiaGFuZGxlRm9ybVN1Ym1pdCIsImNvbnNvbGUiLCJsb2ciLCJyZW5kZXJVc2VyRm9ybSIsIm1hcCIsImZpZWxkIiwiaGFuZGxlU3VibWl0IiwiVXNlckZvcm1TdHlsZXMiLCJNYWluRm9ybUNvbnRlbnQiLCJVc2VySW5mb0ZpZWxkIiwiVGV4dEZpZWxkIiwiaW5wdXQiLCJtZXRhIiwidG91Y2hlZCIsImVycm9yIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFFQTtBQUVBLElBQU1BLE1BQU0sR0FBRztBQUNiQyxVQUFRLEVBQUU7QUFDUkMsY0FBVSxFQUFFLFNBREo7QUFFUkMsV0FBTyxFQUFFLEVBRkQ7QUFHUkMsYUFBUyxFQUFFLFlBSEg7QUFJUkMsYUFBUyxFQUFFLGtDQUpIO0FBS1JDLGdCQUFZLEVBQUU7QUFMTjtBQURHLENBQWY7QUFVQSxJQUFNQyxNQUFNLEdBQUcsQ0FDYjtBQUFFQyxJQUFFLEVBQUUsQ0FBTjtBQUFTQyxNQUFJLEVBQUUsVUFBZjtBQUEyQkMsT0FBSyxFQUFFLGVBQWxDO0FBQW1EQyxVQUFRLEVBQUU7QUFBN0QsQ0FEYSxFQUViO0FBQUVILElBQUUsRUFBRSxDQUFOO0FBQVNDLE1BQUksRUFBRSxPQUFmO0FBQXdCQyxPQUFLLEVBQUUsUUFBL0I7QUFBeUNDLFVBQVEsRUFBRTtBQUFuRCxDQUZhLEVBR2I7QUFDRUgsSUFBRSxFQUFFLENBRE47QUFFRUMsTUFBSSxFQUFFLGFBRlI7QUFHRUMsT0FBSyxFQUFFLGdCQUhUO0FBSUVDLFVBQVEsRUFBRTtB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O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQUFPRixJQUFJLENBQUNFLEtBQVosQ0FIakMsQ0FETTtBQUFBLFNBRlY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxRQWhCRixFQTJCRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHVDQTNCRixFQTRCRSxNQUFDLHNEQUFEO0FBQU8sWUFBSSxFQUFDLE9BQVo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxTQUNHO0FBQUEsWUFBR0gsS0FBSCxTQUFHQSxLQUFIO0FBQUEsWUFBVUMsSUFBVixTQUFVQSxJQUFWO0FBQUEsZUFDQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFERixFQUVFO0FBQU8sY0FBSSxFQUFDO0FBQVosV0FBdUJELEtBQXZCO0FBQThCLHFCQUFXLEVBQUMsT0FBMUM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQUZGLEVBR0dDLElBQUksQ0FBQ0MsT0FBTCxJQUFnQkQsSUFBSSxDQUFDRSxLQUFyQixJQUE4QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBQU9GLElBQUksQ0FBQ0UsS0FBWixDQUhqQyxDQUREO0FBQUEsT0FESCxDQTVCRixDQURGLEVBd0NFO0FBQVEsWUFBSSxFQUFDLFFBQWI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkF4Q0YsQ0FETTtBQUFBLEtBSFY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURGLENBREY7QUFvREQ7S0FwRXVCZixRIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LjVkM2IyOTkwZTMwNTYxNjY4ODk0LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUGFwZXIgZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlL1BhcGVyXCI7XHJcbmltcG9ydCB7IEZvcm0sIEZpZWxkIH0gZnJvbSBcInJlYWN0LWZpbmFsLWZvcm1cIjtcclxuaW1wb3J0IFRleHRGaWVsZCBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvVGV4dEZpZWxkXCI7XHJcblxyXG5pbXBvcnQgVXNlckZvcm1TdHlsZXMgZnJvbSBcIi4uL3N0eWxlcy9Vc2VyRm9ybS5tb2R1bGUuc2Nzc1wiO1xyXG5cclxuY29uc3Qgc3R5bGVzID0ge1xyXG4gIE11aVBhcGVyOiB7XHJcbiAgICBiYWNrZ3JvdW5kOiBcIiNGRkZGRkZcIixcclxuICAgIHBhZGRpbmc6IDQ1LFxyXG4gICAgYm94U2l6aW5nOiBcImJvcmRlci1ib3hcIixcclxuICAgIGJveFNoYWRvdzogXCIwcHggNHB4IDEwcHggcmdiYSgwLCAwLCAwLCAwLjE1KVwiLFxyXG4gICAgYm9yZGVyUmFkaXVzOiAxMCxcclxuICB9LFxyXG59O1xyXG5cclxuY29uc3QgZmllbGRzID0gW1xyXG4gIHsgaWQ6IDEsIG5hbWU6IFwidXNlck5hbWVcIiwgbGFiZWw6IFwi0KTQsNC80LjQu9C40Y8g0Lgg0LjQvNGPXCIsIGljb25QYXRoOiBcIi9iYWRnZS5wbmdcIiB9LFxyXG4gIHsgaWQ6IDIsIG5hbWU6IFwiZW1haWxcIiwgbGFiZWw6IFwiRS1tYWlsXCIsIGljb25QYXRoOiBcIi9tYWlsLnBuZ1wiIH0sXHJcbiAge1xyXG4gICAgaWQ6IDMsXHJcbiAgICBuYW1lOiBcInBob25lTnVtYmVyXCIsXHJcbiAgICBsYWJlbDogXCLQndC+0LzQtdGAINGC0LXQu9C10YTQvtC90LBcIixcclxuICAgIGljb25QYXRoOiBcIi9waG9uZS5wbmdcIixcclxuICB9LFxyXG5dO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gVXNlckZvcm0oKSB7XHJcbiAgY29uc3QgaGFuZGxlRm9ybVN1Ym1pdCA9ICgpID0+IGNvbnNvbGUubG9nKFwiaGFuZGxlRm9ybVN1Ym1pdFwiKTtcclxuXHJcbiAgY29uc3QgcmVuZGVyVXNlckZvcm0gPSAoZmllbGRzKSA9PlxyXG4gICAgZmllbGRzLm1hcCgoZmllbGQpID0+IChcclxuICAgICAgPGRpdj5cclxuICAgICAgICA8bGFiZWw+XHJcbiAgICAgICAgICA8aW1nIHNyYz17ZmllbGQuaWNvblBhdGh9IGFsdD17ZmllbGQubGFiZWx9IC8+XHJcbiAgICAgICAgPC9sYWJlbD5cclxuICAgICAgICA8RmllbGRcclxuICAgICAgICAgIG5hbWU9e2ZpZWxkLm5hbWV9XHJcbiAgICAgICAgICBjb25wb25lbnQ9ezxUZXh0RmllbGQgbGFiZWw9e2xhYmVsfSB2YXJpYW50PVwib3V0bGluZWRcIiAvPn1cclxuICAgICAgICAvPlxyXG4gICAgICA8L2Rpdj5cclxuICAgICkpO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPFBhcGVyIHN0eWxlPXtzdHlsZXMuTXVpUGFwZXJ9PlxyXG4gICAgICA8Rm9ybVxyXG4gICAgICAgIG9uU3VibWl0PXtoYW5kbGVGb3JtU3VibWl0fVxyXG4gICAgICAgIC8vIHZhbGlkYXRlPXt2YWxpZGF0ZX1cclxuICAgICAgICByZW5kZXI9eyh7IGhhbmRsZVN1Ym1pdCB9KSA9PiAoXHJcbiAgICAgICAgICA8Zm9ybSBvblN1Ym1pdD17aGFuZGxlU3VibWl0fT5cclxuICAgICAgICAgICAgPHNlY3Rpb24gY2xhc3NOYW1lPXtVc2VyRm9ybVN0eWxlcy5NYWluRm9ybUNvbnRlbnR9PlxyXG4gICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICA8bGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPVwiL2JhZGdlLnBuZ1wiIGFsdD1cInVzZXIgbmFtZVwiIC8+XHJcbiAgICAgICAgICAgICAgICA8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgPEZpZWxkXHJcbiAgICAgICAgICAgICAgICAgIG5hbWU9XCJ1c2VyTmFtZVwiXHJcbiAgICAgICAgICAgICAgICAgIHJlbmRlcj17KCkgPT4gVXNlckluZm9GaWVsZChcItCk0LDQvNC40LvQuNGPINC4INC40LzRj1wiKX1cclxuICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICA8bGFiZWw+SW50ZXJlc3RzPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgIDxGaWVsZCBuYW1lPVwiaW50ZXJlc3RzXCIgY29tcG9uZW50PXtUZXh0RmllbGR9IC8+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgIDxGaWVsZFxyXG4gICAgICAgICAgICAgICAgbmFtZT1cImJpb1wiXHJcbiAgICAgICAgICAgICAgICByZW5kZXI9eyh7IGlucHV0LCBtZXRhIH0pID0+IChcclxuICAgICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgICAgICA8bGFiZWw+QmlvPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICA8dGV4dGFyZWEgey4uLmlucHV0fSAvPlxyXG4gICAgICAgICAgICAgICAgICAgIHttZXRhLnRvdWNoZWQgJiYgbWV0YS5lcnJvciAmJiA8c3Bhbj57bWV0YS5lcnJvcn08L3NwYW4+fVxyXG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgLz5cclxuXHJcbiAgICAgICAgICAgICAgPGgyPlJlbmRlciBGdW5jdGlvbiBhcyBDaGlsZHJlbjwvaDI+XHJcbiAgICAgICAgICAgICAgPEZpZWxkIG5hbWU9XCJwaG9uZVwiPlxyXG4gICAgICAgICAgICAgICAgeyh7IGlucHV0LCBtZXRhIH0pID0+IChcclxuICAgICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgICAgICA8bGFiZWw+UGhvbmU8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIHsuLi5pbnB1dH0gcGxhY2Vob2xkZXI9XCJQaG9uZVwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAge21ldGEudG91Y2hlZCAmJiBtZXRhLmVycm9yICYmIDxzcGFuPnttZXRhLmVycm9yfTwvc3Bhbj59XHJcbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICA8L0ZpZWxkPlxyXG4gICAgICAgICAgICA8L3NlY3Rpb24+XHJcblxyXG4gICAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJzdWJtaXRcIj5TdWJtaXQ8L2J1dHRvbj5cclxuICAgICAgICAgIDwvZm9ybT5cclxuICAgICAgICApfVxyXG4gICAgICAvPlxyXG4gICAgPC9QYXBlcj5cclxuICApO1xyXG59XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=