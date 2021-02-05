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
/* harmony import */ var _material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/Paper */ "./node_modules/@material-ui/core/esm/Paper/index.js");
/* harmony import */ var react_final_form__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-final-form */ "./node_modules/react-final-form/dist/react-final-form.es.js");
/* harmony import */ var _material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/TextField */ "./node_modules/@material-ui/core/esm/TextField/index.js");
/* harmony import */ var _styles_UserForm_module_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../styles/UserForm.module.scss */ "./styles/UserForm.module.scss");
/* harmony import */ var _styles_UserForm_module_scss__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_styles_UserForm_module_scss__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _utils_validate__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../utils/validate */ "./utils/validate.js");
/* harmony import */ var _ErrorMessage__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./ErrorMessage */ "./components/ErrorMessage.js");



var _jsxFileName = "C:\\Users\\vstepnova\\Desktop\\test sunlight\\components\\UserForm.js",
    _s = $RefreshSig$();


var __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;







var fields = [{
  id: 0,
  name: "userName",
  label: "Фамилия и имя",
  placeholder: "Укажите Вашу вамилию и имя",
  type: "text",
  iconPath: "/badge.png"
}, {
  id: 1,
  name: "email",
  label: "E-mail",
  placeholder: "ivanova@mail.ru",
  type: "email",
  iconPath: "/mail.png"
}, {
  id: 2,
  name: "phoneNumber",
  label: "Номер телефона",
  type: "tel",
  placeholder: "Укажите номер телефона",
  iconPath: "/phone.png"
}];
function UserForm(_ref) {
  _s();

  var _this = this;

  var handleDialogOpen = _ref.handleDialogOpen;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(false),
      isError = _useState[0],
      setError = _useState[1];

  var handleFormSubmit = function handleFormSubmit(values) {
    handleDialogOpen(); // axios
    //   .post("http://localhost:3005/api", JSON.stringify(values))
    //   .catch((error) => console.log(error.response));

    console.log(values);
  };

  var renderUserForm = function renderUserForm(fields) {
    return fields.map(function (field) {
      return __jsx(react__WEBPACK_IMPORTED_MODULE_2___default.a.Fragment, {
        key: field.id,
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 51,
          columnNumber: 7
        }
      }, __jsx(react_final_form__WEBPACK_IMPORTED_MODULE_4__["Field"], {
        name: field.name,
        className: _styles_UserForm_module_scss__WEBPACK_IMPORTED_MODULE_6___default.a.TextField,
        render: function render(_ref2) {
          var input = _ref2.input,
              meta = _ref2.meta,
              rest = Object(_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__["default"])(_ref2, ["input", "meta"]);

          return __jsx("div", {
            className: _styles_UserForm_module_scss__WEBPACK_IMPORTED_MODULE_6___default.a.FieldItem,
            __self: _this,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 56,
              columnNumber: 13
            }
          }, __jsx("label", {
            htmlFor: field.id,
            __self: _this,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 57,
              columnNumber: 15
            }
          }, __jsx("img", {
            src: field.iconPath,
            className: _styles_UserForm_module_scss__WEBPACK_IMPORTED_MODULE_6___default.a.FieldIcon,
            alt: field.label,
            __self: _this,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 58,
              columnNumber: 17
            }
          })), __jsx(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_5__["default"], Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
            id: field.name
          }, input, rest, {
            placeholder: field.placeholder,
            type: field.type,
            error: Object(_utils_validate__WEBPACK_IMPORTED_MODULE_7__["isFieldError"])(meta),
            label: field.label,
            className: _styles_UserForm_module_scss__WEBPACK_IMPORTED_MODULE_6___default.a.TextField,
            variant: "outlined",
            __self: _this,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 64,
              columnNumber: 15
            }
          })), __jsx(_ErrorMessage__WEBPACK_IMPORTED_MODULE_8__["default"], {
            meta: meta,
            __self: _this,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 75,
              columnNumber: 15
            }
          }));
        },
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 52,
          columnNumber: 9
        }
      }), fields.length - 1 !== field.id ? __jsx("div", {
        className: _styles_UserForm_module_scss__WEBPACK_IMPORTED_MODULE_6___default.a.Divider,
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 80,
          columnNumber: 11
        }
      }) : null);
    });
  };

  return __jsx(_material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_3__["default"], {
    className: _styles_UserForm_module_scss__WEBPACK_IMPORTED_MODULE_6___default.a.UserFormMuiPaper,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 86,
      columnNumber: 5
    }
  }, __jsx(react_final_form__WEBPACK_IMPORTED_MODULE_4__["Form"], {
    onSubmit: handleFormSubmit,
    validate: _utils_validate__WEBPACK_IMPORTED_MODULE_7__["validateForm"],
    render: function render(_ref3) {
      var handleSubmit = _ref3.handleSubmit,
          values = _ref3.values;
      return __jsx("form", {
        onSubmit: handleSubmit,
        className: _styles_UserForm_module_scss__WEBPACK_IMPORTED_MODULE_6___default.a.UserForm,
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 91,
          columnNumber: 11
        }
      }, __jsx("section", {
        className: _styles_UserForm_module_scss__WEBPACK_IMPORTED_MODULE_6___default.a.MainFormContent,
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 92,
          columnNumber: 13
        }
      }, renderUserForm(fields)), __jsx("button", {
        type: "submit",
        className: _styles_UserForm_module_scss__WEBPACK_IMPORTED_MODULE_6___default.a.SubmitButton,
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 96,
          columnNumber: 13
        }
      }, "\u0421\u043E\u0445\u0440\u0430\u043D\u0438\u0442\u044C \u0438\u0437\u043C\u0435\u043D\u0435\u043D\u0438\u044F"));
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 87,
      columnNumber: 7
    }
  }));
}

_s(UserForm, "4P7KcR+/j0aEKeTIpJdOMtDvB9E=");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Vc2VyRm9ybS5qcyJdLCJuYW1lcyI6WyJmaWVsZHMiLCJpZCIsIm5hbWUiLCJsYWJlbCIsInBsYWNlaG9sZGVyIiwidHlwZSIsImljb25QYXRoIiwiVXNlckZvcm0iLCJoYW5kbGVEaWFsb2dPcGVuIiwidXNlU3RhdGUiLCJpc0Vycm9yIiwic2V0RXJyb3IiLCJoYW5kbGVGb3JtU3VibWl0IiwidmFsdWVzIiwiY29uc29sZSIsImxvZyIsInJlbmRlclVzZXJGb3JtIiwibWFwIiwiZmllbGQiLCJVc2VyRm9ybVN0eWxlcyIsIlRleHRGaWVsZCIsImlucHV0IiwibWV0YSIsInJlc3QiLCJGaWVsZEl0ZW0iLCJGaWVsZEljb24iLCJpc0ZpZWxkRXJyb3IiLCJsZW5ndGgiLCJEaXZpZGVyIiwiVXNlckZvcm1NdWlQYXBlciIsInZhbGlkYXRlRm9ybSIsImhhbmRsZVN1Ym1pdCIsIk1haW5Gb3JtQ29udGVudCIsIlN1Ym1pdEJ1dHRvbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUEsSUFBTUEsTUFBTSxHQUFHLENBQ2I7QUFDRUMsSUFBRSxFQUFFLENBRE47QUFFRUMsTUFBSSxFQUFFLFVBRlI7QUFHRUMsT0FBSyxFQUFFLGVBSFQ7QUFJRUMsYUFBVyxFQUFFLDRCQUpmO0FBS0VDLE1BQUksRUFBRSxNQUxSO0FBTUVDLFVBQVEsRUFBRTtBQU5aLENBRGEsRUFTYjtBQUNFTCxJQUFFLEVBQUUsQ0FETjtBQUVFQyxNQUFJLEVBQUUsT0FGUjtBQUdFQyxPQUFLLEVBQUUsUUFIVDtBQUlFQyxhQUFXLEVBQUUsaUJBSmY7QUFLRUMsTUFBSSxFQUFFLE9BTFI7QUFNRUMsVUFBUSxFQUFFO0FBTlosQ0FUYSxFQWlCYjtBQUNFTCxJQUFFLEVBQUUsQ0FETjtBQUVFQyxNQUFJLEVBQUUsYUFGUjtBQUdFQyxPQUFLLEVB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LFlBQVEsRUFBRWtCLDREQUZaO0FBR0UsVUFBTSxFQUFFO0FBQUEsVUFBR0MsWUFBSCxTQUFHQSxZQUFIO0FBQUEsVUFBaUJsQixNQUFqQixTQUFpQkEsTUFBakI7QUFBQSxhQUNOO0FBQU0sZ0JBQVEsRUFBRWtCLFlBQWhCO0FBQThCLGlCQUFTLEVBQUVaLG1FQUFjLENBQUNaLFFBQXhEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0FDRTtBQUFTLGlCQUFTLEVBQUVZLG1FQUFjLENBQUNhLGVBQW5DO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0FDR2hCLGNBQWMsQ0FBQ2hCLE1BQUQsQ0FEakIsQ0FERixFQUtFO0FBQVEsWUFBSSxFQUFDLFFBQWI7QUFBc0IsaUJBQVMsRUFBRW1CLG1FQUFjLENBQUNjLFlBQWhEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEseUhBTEYsQ0FETTtBQUFBLEtBSFY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURGLENBREY7QUFzQkQ7O0dBdEV1QjFCLFE7O0tBQUFBLFEiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguZDlhNDM4MTJmMDI4ODA1YjYyNDAuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBQYXBlciBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvUGFwZXJcIjtcclxuaW1wb3J0IHsgRm9ybSwgRmllbGQgfSBmcm9tIFwicmVhY3QtZmluYWwtZm9ybVwiO1xyXG5pbXBvcnQgVGV4dEZpZWxkIGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZS9UZXh0RmllbGRcIjtcclxuXHJcbmltcG9ydCBVc2VyRm9ybVN0eWxlcyBmcm9tIFwiLi4vc3R5bGVzL1VzZXJGb3JtLm1vZHVsZS5zY3NzXCI7XHJcbmltcG9ydCB7IHZhbGlkYXRlRm9ybSwgaXNGaWVsZEVycm9yIH0gZnJvbSBcIi4uL3V0aWxzL3ZhbGlkYXRlXCI7XHJcbmltcG9ydCBFcnJvck1lc3NhZ2UgZnJvbSBcIi4vRXJyb3JNZXNzYWdlXCI7XHJcblxyXG5jb25zdCBmaWVsZHMgPSBbXHJcbiAge1xyXG4gICAgaWQ6IDAsXHJcbiAgICBuYW1lOiBcInVzZXJOYW1lXCIsXHJcbiAgICBsYWJlbDogXCLQpNCw0LzQuNC70LjRjyDQuCDQuNC80Y9cIixcclxuICAgIHBsYWNlaG9sZGVyOiBcItCj0LrQsNC20LjRgtC1INCS0LDRiNGDINCy0LDQvNC40LvQuNGOINC4INC40LzRj1wiLFxyXG4gICAgdHlwZTogXCJ0ZXh0XCIsXHJcbiAgICBpY29uUGF0aDogXCIvYmFkZ2UucG5nXCIsXHJcbiAgfSxcclxuICB7XHJcbiAgICBpZDogMSxcclxuICAgIG5hbWU6IFwiZW1haWxcIixcclxuICAgIGxhYmVsOiBcIkUtbWFpbFwiLFxyXG4gICAgcGxhY2Vob2xkZXI6IFwiaXZhbm92YUBtYWlsLnJ1XCIsXHJcbiAgICB0eXBlOiBcImVtYWlsXCIsXHJcbiAgICBpY29uUGF0aDogXCIvbWFpbC5wbmdcIixcclxuICB9LFxyXG4gIHtcclxuICAgIGlkOiAyLFxyXG4gICAgbmFtZTogXCJwaG9uZU51bWJlclwiLFxyXG4gICAgbGFiZWw6IFwi0J3QvtC80LXRgCDRgtC10LvQtdGE0L7QvdCwXCIsXHJcbiAgICB0eXBlOiBcInRlbFwiLFxyXG4gICAgcGxhY2Vob2xkZXI6IFwi0KPQutCw0LbQuNGC0LUg0L3QvtC80LXRgCDRgtC10LvQtdGE0L7QvdCwXCIsXHJcbiAgICBpY29uUGF0aDogXCIvcGhvbmUucG5nXCIsXHJcbiAgfSxcclxuXTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFVzZXJGb3JtKHsgaGFuZGxlRGlhbG9nT3BlbiB9KSB7XHJcbiAgY29uc3QgW2lzRXJyb3IsIHNldEVycm9yXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuXHJcbiAgY29uc3QgaGFuZGxlRm9ybVN1Ym1pdCA9ICh2YWx1ZXMpID0+IHtcclxuICAgIGhhbmRsZURpYWxvZ09wZW4oKTtcclxuICAgIC8vIGF4aW9zXHJcbiAgICAvLyAgIC5wb3N0KFwiaHR0cDovL2xvY2FsaG9zdDozMDA1L2FwaVwiLCBKU09OLnN0cmluZ2lmeSh2YWx1ZXMpKVxyXG4gICAgLy8gICAuY2F0Y2goKGVycm9yKSA9PiBjb25zb2xlLmxvZyhlcnJvci5yZXNwb25zZSkpO1xyXG5cclxuICAgIGNvbnNvbGUubG9nKHZhbHVlcyk7XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgcmVuZGVyVXNlckZvcm0gPSAoZmllbGRzKSA9PlxyXG4gICAgZmllbGRzLm1hcCgoZmllbGQpID0+IChcclxuICAgICAgPFJlYWN0LkZyYWdtZW50IGtleT17ZmllbGQuaWR9PlxyXG4gICAgICAgIDxGaWVsZFxyXG4gICAgICAgICAgbmFtZT17ZmllbGQubmFtZX1cclxuICAgICAgICAgIGNsYXNzTmFtZT17VXNlckZvcm1TdHlsZXMuVGV4dEZpZWxkfVxyXG4gICAgICAgICAgcmVuZGVyPXsoeyBpbnB1dCwgbWV0YSwgLi4ucmVzdCB9KSA9PiAoXHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtVc2VyRm9ybVN0eWxlcy5GaWVsZEl0ZW19PlxyXG4gICAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPXtmaWVsZC5pZH0+XHJcbiAgICAgICAgICAgICAgICA8aW1nXHJcbiAgICAgICAgICAgICAgICAgIHNyYz17ZmllbGQuaWNvblBhdGh9XHJcbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17VXNlckZvcm1TdHlsZXMuRmllbGRJY29ufVxyXG4gICAgICAgICAgICAgICAgICBhbHQ9e2ZpZWxkLmxhYmVsfVxyXG4gICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICA8L2xhYmVsPlxyXG4gICAgICAgICAgICAgIDxUZXh0RmllbGRcclxuICAgICAgICAgICAgICAgIGlkPXtmaWVsZC5uYW1lfVxyXG4gICAgICAgICAgICAgICAgey4uLmlucHV0fVxyXG4gICAgICAgICAgICAgICAgey4uLnJlc3R9XHJcbiAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj17ZmllbGQucGxhY2Vob2xkZXJ9XHJcbiAgICAgICAgICAgICAgICB0eXBlPXtmaWVsZC50eXBlfVxyXG4gICAgICAgICAgICAgICAgZXJyb3I9e2lzRmllbGRFcnJvcihtZXRhKX1cclxuICAgICAgICAgICAgICAgIGxhYmVsPXtmaWVsZC5sYWJlbH1cclxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17VXNlckZvcm1TdHlsZXMuVGV4dEZpZWxkfVxyXG4gICAgICAgICAgICAgICAgdmFyaWFudD1cIm91dGxpbmVkXCJcclxuICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgIDxFcnJvck1lc3NhZ2UgbWV0YT17bWV0YX0gLz5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICApfVxyXG4gICAgICAgIC8+XHJcbiAgICAgICAge2ZpZWxkcy5sZW5ndGggLSAxICE9PSBmaWVsZC5pZCA/IChcclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtVc2VyRm9ybVN0eWxlcy5EaXZpZGVyfSAvPlxyXG4gICAgICAgICkgOiBudWxsfVxyXG4gICAgICA8L1JlYWN0LkZyYWdtZW50PlxyXG4gICAgKSk7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8UGFwZXIgY2xhc3NOYW1lPXtVc2VyRm9ybVN0eWxlcy5Vc2VyRm9ybU11aVBhcGVyfT5cclxuICAgICAgPEZvcm1cclxuICAgICAgICBvblN1Ym1pdD17aGFuZGxlRm9ybVN1Ym1pdH1cclxuICAgICAgICB2YWxpZGF0ZT17dmFsaWRhdGVGb3JtfVxyXG4gICAgICAgIHJlbmRlcj17KHsgaGFuZGxlU3VibWl0LCB2YWx1ZXMgfSkgPT4gKFxyXG4gICAgICAgICAgPGZvcm0gb25TdWJtaXQ9e2hhbmRsZVN1Ym1pdH0gY2xhc3NOYW1lPXtVc2VyRm9ybVN0eWxlcy5Vc2VyRm9ybX0+XHJcbiAgICAgICAgICAgIDxzZWN0aW9uIGNsYXNzTmFtZT17VXNlckZvcm1TdHlsZXMuTWFpbkZvcm1Db250ZW50fT5cclxuICAgICAgICAgICAgICB7cmVuZGVyVXNlckZvcm0oZmllbGRzKX1cclxuICAgICAgICAgICAgPC9zZWN0aW9uPlxyXG5cclxuICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwic3VibWl0XCIgY2xhc3NOYW1lPXtVc2VyRm9ybVN0eWxlcy5TdWJtaXRCdXR0b259PlxyXG4gICAgICAgICAgICAgINCh0L7RhdGA0LDQvdC40YLRjCDQuNC30LzQtdC90LXQvdC40Y9cclxuICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgIHsvKiA8cCBjbGFzc05hbWU9e1VzZXJGb3JtU3R5bGVzLlN1Y2Nlc3NNZXNzYWdlfT5cclxuICAgICAgICAgICAgICDQmNC30LzQtdC90LXQvdC40Y8g0YHQvtGF0YDQsNC90LXQvdGLISAo0L3QviDRjdGC0L4g0L3QtSDRgtC+0YfQvdC+KVxyXG4gICAgICAgICAgICA8L3A+ICovfVxyXG4gICAgICAgICAgPC9mb3JtPlxyXG4gICAgICAgICl9XHJcbiAgICAgIC8+XHJcbiAgICA8L1BhcGVyPlxyXG4gICk7XHJcbn1cclxuIl0sInNvdXJjZVJvb3QiOiIifQ==