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
            style: styles.TextField,
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
    className: _styles_UserForm_module_scss__WEBPACK_IMPORTED_MODULE_6___default.a.MuiPaper,
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

/***/ }),

/***/ "./node_modules/axios/index.js":
false,

/***/ "./node_modules/axios/lib/adapters/xhr.js":
false,

/***/ "./node_modules/axios/lib/axios.js":
false,

/***/ "./node_modules/axios/lib/cancel/Cancel.js":
false,

/***/ "./node_modules/axios/lib/cancel/CancelToken.js":
false,

/***/ "./node_modules/axios/lib/cancel/isCancel.js":
false,

/***/ "./node_modules/axios/lib/core/Axios.js":
false,

/***/ "./node_modules/axios/lib/core/InterceptorManager.js":
false,

/***/ "./node_modules/axios/lib/core/buildFullPath.js":
false,

/***/ "./node_modules/axios/lib/core/createError.js":
false,

/***/ "./node_modules/axios/lib/core/dispatchRequest.js":
false,

/***/ "./node_modules/axios/lib/core/enhanceError.js":
false,

/***/ "./node_modules/axios/lib/core/mergeConfig.js":
false,

/***/ "./node_modules/axios/lib/core/settle.js":
false,

/***/ "./node_modules/axios/lib/core/transformData.js":
false,

/***/ "./node_modules/axios/lib/defaults.js":
false,

/***/ "./node_modules/axios/lib/helpers/bind.js":
false,

/***/ "./node_modules/axios/lib/helpers/buildURL.js":
false,

/***/ "./node_modules/axios/lib/helpers/combineURLs.js":
false,

/***/ "./node_modules/axios/lib/helpers/cookies.js":
false,

/***/ "./node_modules/axios/lib/helpers/isAbsoluteURL.js":
false,

/***/ "./node_modules/axios/lib/helpers/isURLSameOrigin.js":
false,

/***/ "./node_modules/axios/lib/helpers/normalizeHeaderName.js":
false,

/***/ "./node_modules/axios/lib/helpers/parseHeaders.js":
false,

/***/ "./node_modules/axios/lib/helpers/spread.js":
false,

/***/ "./node_modules/axios/lib/utils.js":
false,

/***/ "./node_modules/process/browser.js":
false

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Vc2VyRm9ybS5qcyJdLCJuYW1lcyI6WyJmaWVsZHMiLCJpZCIsIm5hbWUiLCJsYWJlbCIsInBsYWNlaG9sZGVyIiwidHlwZSIsImljb25QYXRoIiwiVXNlckZvcm0iLCJoYW5kbGVEaWFsb2dPcGVuIiwidXNlU3RhdGUiLCJpc0Vycm9yIiwic2V0RXJyb3IiLCJoYW5kbGVGb3JtU3VibWl0IiwidmFsdWVzIiwiY29uc29sZSIsImxvZyIsInJlbmRlclVzZXJGb3JtIiwibWFwIiwiZmllbGQiLCJVc2VyRm9ybVN0eWxlcyIsIlRleHRGaWVsZCIsImlucHV0IiwibWV0YSIsInJlc3QiLCJGaWVsZEl0ZW0iLCJGaWVsZEljb24iLCJpc0ZpZWxkRXJyb3IiLCJzdHlsZXMiLCJsZW5ndGgiLCJEaXZpZGVyIiwiTXVpUGFwZXIiLCJ2YWxpZGF0ZUZvcm0iLCJoYW5kbGVTdWJtaXQiLCJNYWluRm9ybUNvbnRlbnQiLCJTdWJtaXRCdXR0b24iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBLElBQU1BLE1BQU0sR0FBRyxDQUNiO0FBQ0VDLElBQUUsRUFBRSxDQUROO0FBRUVDLE1BQUksRUFBRSxVQUZSO0FBR0VDLE9BQUssRUFBRSxlQUhUO0FBSUVDLGFBQVcsRUFBRSw0QkFKZjtBQUtFQyxNQUFJLEVBQUUsTUFMUjtBQU1FQyxVQUFRLEVBQUU7QUFOWixDQURhLEVBU2I7QUFDRUwsSUFBRSxFQUFFLENBRE47QUFFRUMsTUFBSSxFQUFFLE9BRlI7QUFHRUMsT0FBSyxFQUFFLFFBSFQ7QUFJRUMsYUFBVyxFQUFFLGlCQUpmO0FBS0VDLE1BQUksRUFBRSxPQUxSO0FBTUVDLFVBQVEsRUFBRTtBQU5aLENBVGEsRUFpQmI7QUFDRUwsSUFBRSxFQUFFLENBRE47QUFFRUMsTUFBSSxFQUFFLGFBRlI7QUFHRUMsT0FBSyxF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WUFBUSxFQUFFbUIsNERBRlo7QUFHRSxVQUFNLEVBQUU7QUFBQSxVQUFHQyxZQUFILFNBQUdBLFlBQUg7QUFBQSxVQUFpQm5CLE1BQWpCLFNBQWlCQSxNQUFqQjtBQUFBLGFBQ047QUFBTSxnQkFBUSxFQUFFbUIsWUFBaEI7QUFBOEIsaUJBQVMsRUFBRWIsbUVBQWMsQ0FBQ1osUUFBeEQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxTQUNFO0FBQVMsaUJBQVMsRUFBRVksbUVBQWMsQ0FBQ2MsZUFBbkM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxTQUNHakIsY0FBYyxDQUFDaEIsTUFBRCxDQURqQixDQURGLEVBS0U7QUFBUSxZQUFJLEVBQUMsUUFBYjtBQUFzQixpQkFBUyxFQUFFbUIsbUVBQWMsQ0FBQ2UsWUFBaEQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSx5SEFMRixDQURNO0FBQUEsS0FIVjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREYsQ0FERjtBQXNCRDs7R0F0RXVCM0IsUTs7S0FBQUEsUSIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC4xNDc4ZDc4NTNmOGU3NTYzYjUzNC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IFBhcGVyIGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZS9QYXBlclwiO1xyXG5pbXBvcnQgeyBGb3JtLCBGaWVsZCB9IGZyb20gXCJyZWFjdC1maW5hbC1mb3JtXCI7XHJcbmltcG9ydCBUZXh0RmllbGQgZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlL1RleHRGaWVsZFwiO1xyXG5cclxuaW1wb3J0IFVzZXJGb3JtU3R5bGVzIGZyb20gXCIuLi9zdHlsZXMvVXNlckZvcm0ubW9kdWxlLnNjc3NcIjtcclxuaW1wb3J0IHsgdmFsaWRhdGVGb3JtLCBpc0ZpZWxkRXJyb3IgfSBmcm9tIFwiLi4vdXRpbHMvdmFsaWRhdGVcIjtcclxuaW1wb3J0IEVycm9yTWVzc2FnZSBmcm9tIFwiLi9FcnJvck1lc3NhZ2VcIjtcclxuXHJcbmNvbnN0IGZpZWxkcyA9IFtcclxuICB7XHJcbiAgICBpZDogMCxcclxuICAgIG5hbWU6IFwidXNlck5hbWVcIixcclxuICAgIGxhYmVsOiBcItCk0LDQvNC40LvQuNGPINC4INC40LzRj1wiLFxyXG4gICAgcGxhY2Vob2xkZXI6IFwi0KPQutCw0LbQuNGC0LUg0JLQsNGI0YMg0LLQsNC80LjQu9C40Y4g0Lgg0LjQvNGPXCIsXHJcbiAgICB0eXBlOiBcInRleHRcIixcclxuICAgIGljb25QYXRoOiBcIi9iYWRnZS5wbmdcIixcclxuICB9LFxyXG4gIHtcclxuICAgIGlkOiAxLFxyXG4gICAgbmFtZTogXCJlbWFpbFwiLFxyXG4gICAgbGFiZWw6IFwiRS1tYWlsXCIsXHJcbiAgICBwbGFjZWhvbGRlcjogXCJpdmFub3ZhQG1haWwucnVcIixcclxuICAgIHR5cGU6IFwiZW1haWxcIixcclxuICAgIGljb25QYXRoOiBcIi9tYWlsLnBuZ1wiLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgaWQ6IDIsXHJcbiAgICBuYW1lOiBcInBob25lTnVtYmVyXCIsXHJcbiAgICBsYWJlbDogXCLQndC+0LzQtdGAINGC0LXQu9C10YTQvtC90LBcIixcclxuICAgIHR5cGU6IFwidGVsXCIsXHJcbiAgICBwbGFjZWhvbGRlcjogXCLQo9C60LDQttC40YLQtSDQvdC+0LzQtdGAINGC0LXQu9C10YTQvtC90LBcIixcclxuICAgIGljb25QYXRoOiBcIi9waG9uZS5wbmdcIixcclxuICB9LFxyXG5dO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gVXNlckZvcm0oeyBoYW5kbGVEaWFsb2dPcGVuIH0pIHtcclxuICBjb25zdCBbaXNFcnJvciwgc2V0RXJyb3JdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG5cclxuICBjb25zdCBoYW5kbGVGb3JtU3VibWl0ID0gKHZhbHVlcykgPT4ge1xyXG4gICAgaGFuZGxlRGlhbG9nT3BlbigpO1xyXG4gICAgLy8gYXhpb3NcclxuICAgIC8vICAgLnBvc3QoXCJodHRwOi8vbG9jYWxob3N0OjMwMDUvYXBpXCIsIEpTT04uc3RyaW5naWZ5KHZhbHVlcykpXHJcbiAgICAvLyAgIC5jYXRjaCgoZXJyb3IpID0+IGNvbnNvbGUubG9nKGVycm9yLnJlc3BvbnNlKSk7XHJcblxyXG4gICAgY29uc29sZS5sb2codmFsdWVzKTtcclxuICB9O1xyXG5cclxuICBjb25zdCByZW5kZXJVc2VyRm9ybSA9IChmaWVsZHMpID0+XHJcbiAgICBmaWVsZHMubWFwKChmaWVsZCkgPT4gKFxyXG4gICAgICA8UmVhY3QuRnJhZ21lbnQga2V5PXtmaWVsZC5pZH0+XHJcbiAgICAgICAgPEZpZWxkXHJcbiAgICAgICAgICBuYW1lPXtmaWVsZC5uYW1lfVxyXG4gICAgICAgICAgY2xhc3NOYW1lPXtVc2VyRm9ybVN0eWxlcy5UZXh0RmllbGR9XHJcbiAgICAgICAgICByZW5kZXI9eyh7IGlucHV0LCBtZXRhLCAuLi5yZXN0IH0pID0+IChcclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e1VzZXJGb3JtU3R5bGVzLkZpZWxkSXRlbX0+XHJcbiAgICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9e2ZpZWxkLmlkfT5cclxuICAgICAgICAgICAgICAgIDxpbWdcclxuICAgICAgICAgICAgICAgICAgc3JjPXtmaWVsZC5pY29uUGF0aH1cclxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtVc2VyRm9ybVN0eWxlcy5GaWVsZEljb259XHJcbiAgICAgICAgICAgICAgICAgIGFsdD17ZmllbGQubGFiZWx9XHJcbiAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgIDwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgPFRleHRGaWVsZFxyXG4gICAgICAgICAgICAgICAgaWQ9e2ZpZWxkLm5hbWV9XHJcbiAgICAgICAgICAgICAgICB7Li4uaW5wdXR9XHJcbiAgICAgICAgICAgICAgICB7Li4ucmVzdH1cclxuICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPXtmaWVsZC5wbGFjZWhvbGRlcn1cclxuICAgICAgICAgICAgICAgIHR5cGU9e2ZpZWxkLnR5cGV9XHJcbiAgICAgICAgICAgICAgICBlcnJvcj17aXNGaWVsZEVycm9yKG1ldGEpfVxyXG4gICAgICAgICAgICAgICAgbGFiZWw9e2ZpZWxkLmxhYmVsfVxyXG4gICAgICAgICAgICAgICAgc3R5bGU9e3N0eWxlcy5UZXh0RmllbGR9XHJcbiAgICAgICAgICAgICAgICB2YXJpYW50PVwib3V0bGluZWRcIlxyXG4gICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgPEVycm9yTWVzc2FnZSBtZXRhPXttZXRhfSAvPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICl9XHJcbiAgICAgICAgLz5cclxuICAgICAgICB7ZmllbGRzLmxlbmd0aCAtIDEgIT09IGZpZWxkLmlkID8gKFxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9e1VzZXJGb3JtU3R5bGVzLkRpdmlkZXJ9IC8+XHJcbiAgICAgICAgKSA6IG51bGx9XHJcbiAgICAgIDwvUmVhY3QuRnJhZ21lbnQ+XHJcbiAgICApKTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxQYXBlciBjbGFzc05hbWU9e1VzZXJGb3JtU3R5bGVzLk11aVBhcGVyfT5cclxuICAgICAgPEZvcm1cclxuICAgICAgICBvblN1Ym1pdD17aGFuZGxlRm9ybVN1Ym1pdH1cclxuICAgICAgICB2YWxpZGF0ZT17dmFsaWRhdGVGb3JtfVxyXG4gICAgICAgIHJlbmRlcj17KHsgaGFuZGxlU3VibWl0LCB2YWx1ZXMgfSkgPT4gKFxyXG4gICAgICAgICAgPGZvcm0gb25TdWJtaXQ9e2hhbmRsZVN1Ym1pdH0gY2xhc3NOYW1lPXtVc2VyRm9ybVN0eWxlcy5Vc2VyRm9ybX0+XHJcbiAgICAgICAgICAgIDxzZWN0aW9uIGNsYXNzTmFtZT17VXNlckZvcm1TdHlsZXMuTWFpbkZvcm1Db250ZW50fT5cclxuICAgICAgICAgICAgICB7cmVuZGVyVXNlckZvcm0oZmllbGRzKX1cclxuICAgICAgICAgICAgPC9zZWN0aW9uPlxyXG5cclxuICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwic3VibWl0XCIgY2xhc3NOYW1lPXtVc2VyRm9ybVN0eWxlcy5TdWJtaXRCdXR0b259PlxyXG4gICAgICAgICAgICAgINCh0L7RhdGA0LDQvdC40YLRjCDQuNC30LzQtdC90LXQvdC40Y9cclxuICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgIHsvKiA8cCBjbGFzc05hbWU9e1VzZXJGb3JtU3R5bGVzLlN1Y2Nlc3NNZXNzYWdlfT5cclxuICAgICAgICAgICAgICDQmNC30LzQtdC90LXQvdC40Y8g0YHQvtGF0YDQsNC90LXQvdGLISAo0L3QviDRjdGC0L4g0L3QtSDRgtC+0YfQvdC+KVxyXG4gICAgICAgICAgICA8L3A+ICovfVxyXG4gICAgICAgICAgPC9mb3JtPlxyXG4gICAgICAgICl9XHJcbiAgICAgIC8+XHJcbiAgICA8L1BhcGVyPlxyXG4gICk7XHJcbn1cclxuIl0sInNvdXJjZVJvb3QiOiIifQ==