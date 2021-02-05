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
/* harmony import */ var C_Users_vstepnova_Desktop_test_sunlight_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/regenerator */ "./node_modules/next/node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var C_Users_vstepnova_Desktop_test_sunlight_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(C_Users_vstepnova_Desktop_test_sunlight_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var C_Users_vstepnova_Desktop_test_sunlight_node_modules_next_node_modules_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/extends */ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var C_Users_vstepnova_Desktop_test_sunlight_node_modules_next_node_modules_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties */ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js");
/* harmony import */ var C_Users_vstepnova_Desktop_test_sunlight_node_modules_next_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core/Paper */ "./node_modules/@material-ui/core/esm/Paper/index.js");
/* harmony import */ var react_final_form__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-final-form */ "./node_modules/react-final-form/dist/react-final-form.es.js");
/* harmony import */ var _material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/core/TextField */ "./node_modules/@material-ui/core/esm/TextField/index.js");
/* harmony import */ var _styles_UserForm_module_scss__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../styles/UserForm.module.scss */ "./styles/UserForm.module.scss");
/* harmony import */ var _styles_UserForm_module_scss__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_styles_UserForm_module_scss__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _utils_validate__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../utils/validate */ "./utils/validate.js");
/* harmony import */ var _ErrorMessage__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./ErrorMessage */ "./components/ErrorMessage.js");
/* harmony import */ var _common_CustomButton__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./common/CustomButton */ "./components/common/CustomButton.js");





var _jsxFileName = "C:\\Users\\vstepnova\\Desktop\\test sunlight\\components\\UserForm.js",
    _s = $RefreshSig$();


var __jsx = react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement;









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

  var isFormOpen = _ref.isFormOpen,
      handleDialogOpen = _ref.handleDialogOpen;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])(false),
      isLoading = _useState[0],
      setLoading = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])(false),
      isError = _useState2[0],
      setError = _useState2[1];

  function handleFormSubmit(_x) {
    return _handleFormSubmit.apply(this, arguments);
  }

  function _handleFormSubmit() {
    _handleFormSubmit = Object(C_Users_vstepnova_Desktop_test_sunlight_node_modules_next_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__["default"])( /*#__PURE__*/C_Users_vstepnova_Desktop_test_sunlight_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(values) {
      var _response;

      return C_Users_vstepnova_Desktop_test_sunlight_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.prev = 0;
              _context.next = 3;
              return axios__WEBPACK_IMPORTED_MODULE_5___default.a.post("http://localhost:3005/api", JSON.stringify(values));

            case 3:
              _response = _context.sent;
              setLoading(true);
              _context.next = 11;
              break;

            case 7:
              _context.prev = 7;
              _context.t0 = _context["catch"](0);
              console.log(_context.t0);
              setLoading(false);

            case 11:
              setLoading(false);
              handleDialogOpen();
              console.log(response);

            case 14:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, null, [[0, 7]]);
    }));
    return _handleFormSubmit.apply(this, arguments);
  }

  var renderUserForm = function renderUserForm(fields) {
    return fields.map(function (field) {
      return __jsx(react__WEBPACK_IMPORTED_MODULE_4___default.a.Fragment, {
        key: field.id,
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 62,
          columnNumber: 7
        }
      }, __jsx(react_final_form__WEBPACK_IMPORTED_MODULE_7__["Field"], {
        name: field.name,
        className: _styles_UserForm_module_scss__WEBPACK_IMPORTED_MODULE_9___default.a.TextField,
        render: function render(_ref2) {
          var input = _ref2.input,
              meta = _ref2.meta,
              rest = Object(C_Users_vstepnova_Desktop_test_sunlight_node_modules_next_node_modules_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_2__["default"])(_ref2, ["input", "meta"]);

          return __jsx("div", {
            className: _styles_UserForm_module_scss__WEBPACK_IMPORTED_MODULE_9___default.a.FieldItem,
            __self: _this,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 67,
              columnNumber: 13
            }
          }, __jsx("label", {
            htmlFor: field.id,
            __self: _this,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 68,
              columnNumber: 15
            }
          }, __jsx("img", {
            src: field.iconPath,
            className: _styles_UserForm_module_scss__WEBPACK_IMPORTED_MODULE_9___default.a.FieldIcon,
            alt: field.label,
            __self: _this,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 69,
              columnNumber: 17
            }
          })), __jsx(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_8__["default"], Object(C_Users_vstepnova_Desktop_test_sunlight_node_modules_next_node_modules_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({
            id: field.name
          }, input, rest, {
            placeholder: field.placeholder,
            type: field.type,
            error: Object(_utils_validate__WEBPACK_IMPORTED_MODULE_10__["isFieldError"])(meta),
            label: field.label,
            className: _styles_UserForm_module_scss__WEBPACK_IMPORTED_MODULE_9___default.a.TextField,
            variant: "outlined",
            __self: _this,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 75,
              columnNumber: 15
            }
          })), __jsx(_ErrorMessage__WEBPACK_IMPORTED_MODULE_11__["default"], {
            meta: meta,
            __self: _this,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 86,
              columnNumber: 15
            }
          }));
        },
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 63,
          columnNumber: 9
        }
      }), fields.length - 1 !== field.id ? __jsx("div", {
        className: _styles_UserForm_module_scss__WEBPACK_IMPORTED_MODULE_9___default.a.Divider,
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 91,
          columnNumber: 11
        }
      }) : null);
    });
  };

  return __jsx(_material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_6__["default"], {
    className: _styles_UserForm_module_scss__WEBPACK_IMPORTED_MODULE_9___default.a.UserFormMuiPaper,
    style: isFormOpen ? {
      display: "block"
    } : {
      display: "none"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 97,
      columnNumber: 5
    }
  }, __jsx(react_final_form__WEBPACK_IMPORTED_MODULE_7__["Form"], {
    onSubmit: handleFormSubmit,
    validate: _utils_validate__WEBPACK_IMPORTED_MODULE_10__["validateForm"],
    render: function render(_ref3) {
      var handleSubmit = _ref3.handleSubmit,
          values = _ref3.values;
      return __jsx("form", {
        onSubmit: handleSubmit,
        className: _styles_UserForm_module_scss__WEBPACK_IMPORTED_MODULE_9___default.a.UserForm,
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 105,
          columnNumber: 11
        }
      }, __jsx("section", {
        className: _styles_UserForm_module_scss__WEBPACK_IMPORTED_MODULE_9___default.a.MainFormContent,
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 106,
          columnNumber: 13
        }
      }, renderUserForm(fields)), __jsx(_common_CustomButton__WEBPACK_IMPORTED_MODULE_12__["default"], {
        isLoading: isLoading,
        name: "\u0421\u043E\u0445\u0440\u0430\u043D\u0438\u0442\u044C \u0438\u0437\u043C\u0435\u043D\u0435\u043D\u0438\u044F",
        type: "submit",
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 110,
          columnNumber: 13
        }
      }));
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 101,
      columnNumber: 7
    }
  }));
}

_s(UserForm, "PZuJpiiq6lo7fLijO15XRQGvkno=");

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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/next/dist/compiled/webpack/harmony-module.js */ "./node_modules/next/dist/compiled/webpack/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Vc2VyRm9ybS5qcyJdLCJuYW1lcyI6WyJmaWVsZHMiLCJpZCIsIm5hbWUiLCJsYWJlbCIsInBsYWNlaG9sZGVyIiwidHlwZSIsImljb25QYXRoIiwiVXNlckZvcm0iLCJpc0Zvcm1PcGVuIiwiaGFuZGxlRGlhbG9nT3BlbiIsInVzZVN0YXRlIiwiaXNMb2FkaW5nIiwic2V0TG9hZGluZyIsImlzRXJyb3IiLCJzZXRFcnJvciIsImhhbmRsZUZvcm1TdWJtaXQiLCJ2YWx1ZXMiLCJheGlvcyIsInBvc3QiLCJKU09OIiwic3RyaW5naWZ5IiwicmVzcG9uc2UiLCJjb25zb2xlIiwibG9nIiwicmVuZGVyVXNlckZvcm0iLCJtYXAiLCJmaWVsZCIsIlVzZXJGb3JtU3R5bGVzIiwiVGV4dEZpZWxkIiwiaW5wdXQiLCJtZXRhIiwicmVzdCIsIkZpZWxkSXRlbSIsIkZpZWxkSWNvbiIsImlzRmllbGRFcnJvciIsImxlbmd0aCIsIkRpdmlkZXIiLCJVc2VyRm9ybU11aVBhcGVyIiwiZGlzcGxheSIsInZhbGlkYXRlRm9ybSIsImhhbmRsZVN1Ym1pdCIsIk1haW5Gb3JtQ29udGVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUEsSUFBTUEsTUFBTSxHQUFHLENBQ2I7QUFDRUMsSUFBRSxFQUFFLENBRE47QUFFRUMsTUFBSSxFQUFFLFVBRlI7QUFHRUMsT0FBSyxFQUFFLGVBSFQ7QUFJRUMsYUFBVyxFQUFFLDRCQUpmO0FBS0VDLE1BQUksRUFBRSxNQUxSO0FBTUVDLFVBQVEsRUFBRTtBQU5aLENBRGEsRUFTYjtBQUNFTCxJQUFFLEVBQUUsQ0FETjtBQUVFQyxNQUFJLEVBQUUsT0FGUjtBQUdFQyxPQUFLLEVBQUUsUUFIVDtBQUlFQyxhQUFXLEVBQUUsaUJBSmY7QUFLRUMsTUFBSSxF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LENBRGpCLENBREYsRUFLRSxNQUFDLDZEQUFEO0FBQ0UsaUJBQVMsRUFBRVcsU0FEYjtBQUVFLFlBQUksRUFBQywrR0FGUDtBQUdFLFlBQUksRUFBQyxRQUhQO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsUUFMRixDQURNO0FBQUEsS0FIVjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBSkYsQ0FERjtBQXdCRDs7R0FqRnVCSixROztLQUFBQSxRIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LjM3NjAyYTI4MDlmYjE3N2I5YmM2LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCI7XHJcbmltcG9ydCBQYXBlciBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvUGFwZXJcIjtcclxuaW1wb3J0IHsgRm9ybSwgRmllbGQgfSBmcm9tIFwicmVhY3QtZmluYWwtZm9ybVwiO1xyXG5pbXBvcnQgVGV4dEZpZWxkIGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZS9UZXh0RmllbGRcIjtcclxuXHJcbmltcG9ydCBVc2VyRm9ybVN0eWxlcyBmcm9tIFwiLi4vc3R5bGVzL1VzZXJGb3JtLm1vZHVsZS5zY3NzXCI7XHJcbmltcG9ydCB7IHZhbGlkYXRlRm9ybSwgaXNGaWVsZEVycm9yIH0gZnJvbSBcIi4uL3V0aWxzL3ZhbGlkYXRlXCI7XHJcbmltcG9ydCBFcnJvck1lc3NhZ2UgZnJvbSBcIi4vRXJyb3JNZXNzYWdlXCI7XHJcbmltcG9ydCBDdXN0b21CdXR0b24gZnJvbSBcIi4vY29tbW9uL0N1c3RvbUJ1dHRvblwiO1xyXG5cclxuY29uc3QgZmllbGRzID0gW1xyXG4gIHtcclxuICAgIGlkOiAwLFxyXG4gICAgbmFtZTogXCJ1c2VyTmFtZVwiLFxyXG4gICAgbGFiZWw6IFwi0KTQsNC80LjQu9C40Y8g0Lgg0LjQvNGPXCIsXHJcbiAgICBwbGFjZWhvbGRlcjogXCLQo9C60LDQttC40YLQtSDQktCw0YjRgyDQstCw0LzQuNC70LjRjiDQuCDQuNC80Y9cIixcclxuICAgIHR5cGU6IFwidGV4dFwiLFxyXG4gICAgaWNvblBhdGg6IFwiL2JhZGdlLnBuZ1wiLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgaWQ6IDEsXHJcbiAgICBuYW1lOiBcImVtYWlsXCIsXHJcbiAgICBsYWJlbDogXCJFLW1haWxcIixcclxuICAgIHBsYWNlaG9sZGVyOiBcIml2YW5vdmFAbWFpbC5ydVwiLFxyXG4gICAgdHlwZTogXCJlbWFpbFwiLFxyXG4gICAgaWNvblBhdGg6IFwiL21haWwucG5nXCIsXHJcbiAgfSxcclxuICB7XHJcbiAgICBpZDogMixcclxuICAgIG5hbWU6IFwicGhvbmVOdW1iZXJcIixcclxuICAgIGxhYmVsOiBcItCd0L7QvNC10YAg0YLQtdC70LXRhNC+0L3QsFwiLFxyXG4gICAgdHlwZTogXCJ0ZWxcIixcclxuICAgIHBsYWNlaG9sZGVyOiBcItCj0LrQsNC20LjRgtC1INC90L7QvNC10YAg0YLQtdC70LXRhNC+0L3QsFwiLFxyXG4gICAgaWNvblBhdGg6IFwiL3Bob25lLnBuZ1wiLFxyXG4gIH0sXHJcbl07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBVc2VyRm9ybSh7IGlzRm9ybU9wZW4sIGhhbmRsZURpYWxvZ09wZW4gfSkge1xyXG4gIGNvbnN0IFtpc0xvYWRpbmcsIHNldExvYWRpbmddID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gIGNvbnN0IFtpc0Vycm9yLCBzZXRFcnJvcl0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcblxyXG4gIGFzeW5jIGZ1bmN0aW9uIGhhbmRsZUZvcm1TdWJtaXQodmFsdWVzKSB7XHJcbiAgICB0cnkge1xyXG4gICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGF4aW9zLnBvc3QoXHJcbiAgICAgICAgXCJodHRwOi8vbG9jYWxob3N0OjMwMDUvYXBpXCIsXHJcbiAgICAgICAgSlNPTi5zdHJpbmdpZnkodmFsdWVzKVxyXG4gICAgICApO1xyXG4gICAgICBzZXRMb2FkaW5nKHRydWUpO1xyXG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgY29uc29sZS5sb2coZXJyb3IpO1xyXG4gICAgICBzZXRMb2FkaW5nKGZhbHNlKTtcclxuICAgIH1cclxuICAgIHNldExvYWRpbmcoZmFsc2UpO1xyXG4gICAgaGFuZGxlRGlhbG9nT3BlbigpO1xyXG5cclxuICAgIGNvbnNvbGUubG9nKHJlc3BvbnNlKTtcclxuICB9XHJcblxyXG4gIGNvbnN0IHJlbmRlclVzZXJGb3JtID0gKGZpZWxkcykgPT5cclxuICAgIGZpZWxkcy5tYXAoKGZpZWxkKSA9PiAoXHJcbiAgICAgIDxSZWFjdC5GcmFnbWVudCBrZXk9e2ZpZWxkLmlkfT5cclxuICAgICAgICA8RmllbGRcclxuICAgICAgICAgIG5hbWU9e2ZpZWxkLm5hbWV9XHJcbiAgICAgICAgICBjbGFzc05hbWU9e1VzZXJGb3JtU3R5bGVzLlRleHRGaWVsZH1cclxuICAgICAgICAgIHJlbmRlcj17KHsgaW5wdXQsIG1ldGEsIC4uLnJlc3QgfSkgPT4gKFxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17VXNlckZvcm1TdHlsZXMuRmllbGRJdGVtfT5cclxuICAgICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj17ZmllbGQuaWR9PlxyXG4gICAgICAgICAgICAgICAgPGltZ1xyXG4gICAgICAgICAgICAgICAgICBzcmM9e2ZpZWxkLmljb25QYXRofVxyXG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e1VzZXJGb3JtU3R5bGVzLkZpZWxkSWNvbn1cclxuICAgICAgICAgICAgICAgICAgYWx0PXtmaWVsZC5sYWJlbH1cclxuICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgPC9sYWJlbD5cclxuICAgICAgICAgICAgICA8VGV4dEZpZWxkXHJcbiAgICAgICAgICAgICAgICBpZD17ZmllbGQubmFtZX1cclxuICAgICAgICAgICAgICAgIHsuLi5pbnB1dH1cclxuICAgICAgICAgICAgICAgIHsuLi5yZXN0fVxyXG4gICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9e2ZpZWxkLnBsYWNlaG9sZGVyfVxyXG4gICAgICAgICAgICAgICAgdHlwZT17ZmllbGQudHlwZX1cclxuICAgICAgICAgICAgICAgIGVycm9yPXtpc0ZpZWxkRXJyb3IobWV0YSl9XHJcbiAgICAgICAgICAgICAgICBsYWJlbD17ZmllbGQubGFiZWx9XHJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9e1VzZXJGb3JtU3R5bGVzLlRleHRGaWVsZH1cclxuICAgICAgICAgICAgICAgIHZhcmlhbnQ9XCJvdXRsaW5lZFwiXHJcbiAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICA8RXJyb3JNZXNzYWdlIG1ldGE9e21ldGF9IC8+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgKX1cclxuICAgICAgICAvPlxyXG4gICAgICAgIHtmaWVsZHMubGVuZ3RoIC0gMSAhPT0gZmllbGQuaWQgPyAoXHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17VXNlckZvcm1TdHlsZXMuRGl2aWRlcn0gLz5cclxuICAgICAgICApIDogbnVsbH1cclxuICAgICAgPC9SZWFjdC5GcmFnbWVudD5cclxuICAgICkpO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPFBhcGVyXHJcbiAgICAgIGNsYXNzTmFtZT17VXNlckZvcm1TdHlsZXMuVXNlckZvcm1NdWlQYXBlcn1cclxuICAgICAgc3R5bGU9e2lzRm9ybU9wZW4gPyB7IGRpc3BsYXk6IFwiYmxvY2tcIiB9IDogeyBkaXNwbGF5OiBcIm5vbmVcIiB9fVxyXG4gICAgPlxyXG4gICAgICA8Rm9ybVxyXG4gICAgICAgIG9uU3VibWl0PXtoYW5kbGVGb3JtU3VibWl0fVxyXG4gICAgICAgIHZhbGlkYXRlPXt2YWxpZGF0ZUZvcm19XHJcbiAgICAgICAgcmVuZGVyPXsoeyBoYW5kbGVTdWJtaXQsIHZhbHVlcyB9KSA9PiAoXHJcbiAgICAgICAgICA8Zm9ybSBvblN1Ym1pdD17aGFuZGxlU3VibWl0fSBjbGFzc05hbWU9e1VzZXJGb3JtU3R5bGVzLlVzZXJGb3JtfT5cclxuICAgICAgICAgICAgPHNlY3Rpb24gY2xhc3NOYW1lPXtVc2VyRm9ybVN0eWxlcy5NYWluRm9ybUNvbnRlbnR9PlxyXG4gICAgICAgICAgICAgIHtyZW5kZXJVc2VyRm9ybShmaWVsZHMpfVxyXG4gICAgICAgICAgICA8L3NlY3Rpb24+XHJcblxyXG4gICAgICAgICAgICA8Q3VzdG9tQnV0dG9uXHJcbiAgICAgICAgICAgICAgaXNMb2FkaW5nPXtpc0xvYWRpbmd9XHJcbiAgICAgICAgICAgICAgbmFtZT1cItCh0L7RhdGA0LDQvdC40YLRjCDQuNC30LzQtdC90LXQvdC40Y9cIlxyXG4gICAgICAgICAgICAgIHR5cGU9XCJzdWJtaXRcIlxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgPC9mb3JtPlxyXG4gICAgICAgICl9XHJcbiAgICAgIC8+XHJcbiAgICA8L1BhcGVyPlxyXG4gICk7XHJcbn1cclxuIl0sInNvdXJjZVJvb3QiOiIifQ==