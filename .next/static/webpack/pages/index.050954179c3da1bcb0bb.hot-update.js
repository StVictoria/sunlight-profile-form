webpackHotUpdate_N_E("pages/index",{

/***/ "./components/Profile.js":
/*!*******************************!*\
  !*** ./components/Profile.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Profile; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core/Paper */ "./node_modules/@material-ui/core/esm/Paper/index.js");
/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/Button */ "./node_modules/@material-ui/core/esm/Button/index.js");
/* harmony import */ var _material_ui_icons_Close__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/icons/Close */ "./node_modules/@material-ui/icons/Close.js");
/* harmony import */ var _material_ui_icons_Close__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Close__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _styles_Profile_module_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../styles/Profile.module.scss */ "./styles/Profile.module.scss");
/* harmony import */ var _styles_Profile_module_scss__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_styles_Profile_module_scss__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _UserForm_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./UserForm.js */ "./components/UserForm.js");
var _jsxFileName = "C:\\Users\\vstepnova\\Desktop\\test sunlight\\components\\Profile.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;





function Profile(_ref) {
  var isFormOpen = _ref.isFormOpen,
      onFormClose = _ref.onFormClose,
      handleDialogOpen = _ref.handleDialogOpen;
  return __jsx("section", {
    className: _styles_Profile_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a.Profile,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 5
    }
  }, __jsx(_material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_1__["default"], {
    className: _styles_Profile_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a.UserInfoMuiPaper,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 7
    }
  }, __jsx("section", {
    className: _styles_Profile_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a.MainInfo,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: "".concat(_styles_Profile_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a.ProfileUserIcon, " UserIcon"),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 11
    }
  }), __jsx("p", {
    className: _styles_Profile_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a.UserName,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 11
    }
  }, "\u0418\u0432\u0430\u043D\u043E\u0432\u0430 \u0410\u043D\u043D\u0430 \u041C\u0438\u0445\u0430\u0439\u043B\u043E\u0432\u043D\u0430")), __jsx(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_2__["default"], {
    className: _styles_Profile_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a.CloseButton,
    onClick: onFormClose,
    color: "primary",
    endIcon: __jsx(_material_ui_icons_Close__WEBPACK_IMPORTED_MODULE_3___default.a, {
      className: _styles_Profile_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a.CloseIcon,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 21,
        columnNumber: 20
      }
    }),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 9
    }
  }, isFormOpen ? "Закрыть" : "Открыть")), __jsx(_UserForm_js__WEBPACK_IMPORTED_MODULE_5__["default"], {
    handleDialogOpen: handleDialogOpen,
    isFormOpen: isFormOpen,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 7
    }
  }));
}
_c = Profile;

var _c;

$RefreshReg$(_c, "Profile");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Qcm9maWxlLmpzIl0sIm5hbWVzIjpbIlByb2ZpbGUiLCJpc0Zvcm1PcGVuIiwib25Gb3JtQ2xvc2UiLCJoYW5kbGVEaWFsb2dPcGVuIiwiUHJvZmlsZVN0eWxlcyIsIlVzZXJJbmZvTXVpUGFwZXIiLCJNYWluSW5mbyIsIlByb2ZpbGVVc2VySWNvbiIsIlVzZXJOYW1lIiwiQ2xvc2VCdXR0b24iLCJDbG9zZUljb24iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFZSxTQUFTQSxPQUFULE9BQWdFO0FBQUEsTUFBN0NDLFVBQTZDLFFBQTdDQSxVQUE2QztBQUFBLE1BQWpDQyxXQUFpQyxRQUFqQ0EsV0FBaUM7QUFBQSxNQUFwQkMsZ0JBQW9CLFFBQXBCQSxnQkFBb0I7QUFDN0UsU0FDRTtBQUFTLGFBQVMsRUFBRUMsa0VBQWEsQ0FBQ0osT0FBbEM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLE1BQUMsK0RBQUQ7QUFBTyxhQUFTLEVBQUVJLGtFQUFhLENBQUNDLGdCQUFoQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBUyxhQUFTLEVBQUVELGtFQUFhLENBQUNFLFFBQWxDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFLLGFBQVMsWUFBS0Ysa0VBQWEsQ0FBQ0csZUFBbkIsY0FBZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREYsRUFFRTtBQUFHLGFBQVMsRUFBRUgsa0VBQWEsQ0FBQ0ksUUFBNUI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSx3SUFGRixDQURGLEVBTUUsTUFBQyxnRUFBRDtBQUNFLGFBQVMsRUFBRUosa0VBQWEsQ0FBQ0ssV0FEM0I7QUFFRSxXQUFPLEVBQUVQLFdBRlg7QUFHRSxTQUFLLEVBQUMsU0FIUjtBQUlFLFdBQU8sRUFBRSxNQUFDLCtEQUFEO0FBQVcsZUFBUyxFQUFFRSxrRUFBYSxDQUFDTSxTQUFwQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE1BSlg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQU1HVCxVQUFVLEdBQUcsU0FBSCxHQUFlLFNBTjVCLENBTkYsQ0FERixFQWdCRSxNQUFDLG9EQUFEO0FBQVUsb0JBQWdCLEVBQUVFLGdCQUE1QjtBQUE4QyxjQUFVLEVBQUVGLFVBQTFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFoQkYsQ0FERjtBQW9CRDtLQXJCdUJELE8iLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguMDUwOTU0MTc5YzNkYTFiY2IwYmIuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBQYXBlciBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvUGFwZXJcIjtcclxuaW1wb3J0IEJ1dHRvbiBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvQnV0dG9uXCI7XHJcbmltcG9ydCBDbG9zZUljb24gZnJvbSBcIkBtYXRlcmlhbC11aS9pY29ucy9DbG9zZVwiO1xyXG5cclxuaW1wb3J0IFByb2ZpbGVTdHlsZXMgZnJvbSBcIi4uL3N0eWxlcy9Qcm9maWxlLm1vZHVsZS5zY3NzXCI7XHJcbmltcG9ydCBVc2VyRm9ybSBmcm9tIFwiLi9Vc2VyRm9ybS5qc1wiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gUHJvZmlsZSh7IGlzRm9ybU9wZW4sIG9uRm9ybUNsb3NlLCBoYW5kbGVEaWFsb2dPcGVuIH0pIHtcclxuICByZXR1cm4gKFxyXG4gICAgPHNlY3Rpb24gY2xhc3NOYW1lPXtQcm9maWxlU3R5bGVzLlByb2ZpbGV9PlxyXG4gICAgICA8UGFwZXIgY2xhc3NOYW1lPXtQcm9maWxlU3R5bGVzLlVzZXJJbmZvTXVpUGFwZXJ9PlxyXG4gICAgICAgIDxzZWN0aW9uIGNsYXNzTmFtZT17UHJvZmlsZVN0eWxlcy5NYWluSW5mb30+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17YCR7UHJvZmlsZVN0eWxlcy5Qcm9maWxlVXNlckljb259IFVzZXJJY29uYH0gLz5cclxuICAgICAgICAgIDxwIGNsYXNzTmFtZT17UHJvZmlsZVN0eWxlcy5Vc2VyTmFtZX0+0JjQstCw0L3QvtCy0LAg0JDQvdC90LAg0JzQuNGF0LDQudC70L7QstC90LA8L3A+XHJcbiAgICAgICAgPC9zZWN0aW9uPlxyXG5cclxuICAgICAgICA8QnV0dG9uXHJcbiAgICAgICAgICBjbGFzc05hbWU9e1Byb2ZpbGVTdHlsZXMuQ2xvc2VCdXR0b259XHJcbiAgICAgICAgICBvbkNsaWNrPXtvbkZvcm1DbG9zZX1cclxuICAgICAgICAgIGNvbG9yPVwicHJpbWFyeVwiXHJcbiAgICAgICAgICBlbmRJY29uPXs8Q2xvc2VJY29uIGNsYXNzTmFtZT17UHJvZmlsZVN0eWxlcy5DbG9zZUljb259IC8+fVxyXG4gICAgICAgID5cclxuICAgICAgICAgIHtpc0Zvcm1PcGVuID8gXCLQl9Cw0LrRgNGL0YLRjFwiIDogXCLQntGC0LrRgNGL0YLRjFwifVxyXG4gICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICA8L1BhcGVyPlxyXG4gICAgICA8VXNlckZvcm0gaGFuZGxlRGlhbG9nT3Blbj17aGFuZGxlRGlhbG9nT3Blbn0gaXNGb3JtT3Blbj17aXNGb3JtT3Blbn0gLz5cclxuICAgIDwvc2VjdGlvbj5cclxuICApO1xyXG59XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=