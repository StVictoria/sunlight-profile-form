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
/* harmony import */ var _styles_Profile_module_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../styles/Profile.module.scss */ "./styles/Profile.module.scss");
/* harmony import */ var _styles_Profile_module_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styles_Profile_module_scss__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _UserForm_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./UserForm.js */ "./components/UserForm.js");
var _jsxFileName = "C:\\Users\\vstepnova\\Desktop\\test1\\components\\Profile.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



var styles = {
  MuiPaper: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    height: 128,
    background: "linear-gradient(270deg, #1A78C2 0%, #1A78C2 101.06%)",
    padding: 40,
    marginTop: 31,
    marginBottom: 24,
    boxSizing: "border-box",
    borderRadius: 10,
    boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.15)"
  }
};
function Profile() {
  return __jsx("section", {
    className: _styles_Profile_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.Profile,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 5
    }
  }, __jsx(_material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_1__["default"], {
    style: styles.MuiPaper,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 7
    }
  }, __jsx("section", {
    className: _styles_Profile_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.MainInfo,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: "".concat(_styles_Profile_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.ProfileUserIcon, " UserIcon"),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 11
    }
  }), __jsx("p", {
    className: _styles_Profile_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.UserName,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 11
    }
  }, "\u0418\u0432\u0430\u043D\u043E\u0432\u0430 \u0410\u043D\u043D\u0430 \u041C\u0438\u0445\u0430\u0439\u043B\u043E\u0432\u043D\u0430")), __jsx("div", {
    className: _styles_Profile_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.Close,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 9
    }
  }, __jsx("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 11
    }
  }, "\u0417\u0430\u043A\u0440\u044B\u0442\u044C "), __jsx("img", {
    src: "/cross.png",
    className: _styles_Profile_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.CloseImg,
    alt: "close",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 11
    }
  }))), __jsx(_UserForm_js__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Qcm9maWxlLmpzIl0sIm5hbWVzIjpbInN0eWxlcyIsIk11aVBhcGVyIiwiZGlzcGxheSIsImFsaWduSXRlbXMiLCJqdXN0aWZ5Q29udGVudCIsImhlaWdodCIsImJhY2tncm91bmQiLCJwYWRkaW5nIiwibWFyZ2luVG9wIiwibWFyZ2luQm90dG9tIiwiYm94U2l6aW5nIiwiYm9yZGVyUmFkaXVzIiwiYm94U2hhZG93IiwiUHJvZmlsZSIsIlByb2ZpbGVTdHlsZXMiLCJNYWluSW5mbyIsIlByb2ZpbGVVc2VySWNvbiIsIlVzZXJOYW1lIiwiQ2xvc2UiLCJDbG9zZUltZyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFFQTtBQUNBO0FBRUEsSUFBTUEsTUFBTSxHQUFHO0FBQ2JDLFVBQVEsRUFBRTtBQUNSQyxXQUFPLEVBQUUsTUFERDtBQUVSQyxjQUFVLEVBQUUsUUFGSjtBQUdSQyxrQkFBYyxFQUFFLGVBSFI7QUFJUkMsVUFBTSxFQUFFLEdBSkE7QUFLUkMsY0FBVSxFQUFFLHNEQUxKO0FBTVJDLFdBQU8sRUFBRSxFQU5EO0FBT1JDLGFBQVMsRUFBRSxFQVBIO0FBUVJDLGdCQUFZLEVBQUUsRUFSTjtBQVNSQyxhQUFTLEVBQUUsWUFUSDtBQVVSQyxnQkFBWSxFQUFFLEVBVk47QUFXUkMsYUFBUyxFQUFFO0FBWEg7QUFERyxDQUFmO0FBZ0JlLFNBQVNDLE9BQVQsR0FBbUI7QUFDaEMsU0FDRTtBQUFTLGFBQVMsRUFBRUMsa0VBQWEsQ0FBQ0QsT0FBbEM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLE1BQUMsK0RBQUQ7QUFBTyxTQUFLLEVBQUViLE1BQU0sQ0FBQ0MsUUFBckI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQVMsYUFBUyxFQUFFYSxrRUFBYSxDQUFDQyxRQUFsQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBSyxhQUFTLFlBQUtELGtFQUFhLENBQUNFLGVBQW5CLGNBQWQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURGLEVBRUU7QUFBRyxhQUFTLEVBQUVGLGtFQUFhLENBQUNHLFFBQTVCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsd0lBRkYsQ0FERixFQU1FO0FBQUssYUFBUyxFQUFFSCxrRUFBYSxDQUFDSSxLQUE5QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtREFERixFQUVFO0FBQ0UsT0FBRyxFQUFDLFlBRE47QUFFRSxhQUFTLEVBQUVKLGtFQUFhLENBQUNLLFFBRjNCO0FBR0UsT0FBRyxFQUFDLE9BSE47QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQUZGLENBTkYsQ0FERixFQWdCRSxNQUFDLG9EQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFoQkYsQ0FERjtBQW9CRDtLQXJCdUJOLE8iLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguMDQ2OWU5OWE2NzkxZTg3NTgwOTIuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBQYXBlciBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvUGFwZXJcIjtcclxuXHJcbmltcG9ydCBQcm9maWxlU3R5bGVzIGZyb20gXCIuLi9zdHlsZXMvUHJvZmlsZS5tb2R1bGUuc2Nzc1wiO1xyXG5pbXBvcnQgVXNlckZvcm0gZnJvbSBcIi4vVXNlckZvcm0uanNcIjtcclxuXHJcbmNvbnN0IHN0eWxlcyA9IHtcclxuICBNdWlQYXBlcjoge1xyXG4gICAgZGlzcGxheTogXCJmbGV4XCIsXHJcbiAgICBhbGlnbkl0ZW1zOiBcImNlbnRlclwiLFxyXG4gICAganVzdGlmeUNvbnRlbnQ6IFwic3BhY2UtYmV0d2VlblwiLFxyXG4gICAgaGVpZ2h0OiAxMjgsXHJcbiAgICBiYWNrZ3JvdW5kOiBcImxpbmVhci1ncmFkaWVudCgyNzBkZWcsICMxQTc4QzIgMCUsICMxQTc4QzIgMTAxLjA2JSlcIixcclxuICAgIHBhZGRpbmc6IDQwLFxyXG4gICAgbWFyZ2luVG9wOiAzMSxcclxuICAgIG1hcmdpbkJvdHRvbTogMjQsXHJcbiAgICBib3hTaXppbmc6IFwiYm9yZGVyLWJveFwiLFxyXG4gICAgYm9yZGVyUmFkaXVzOiAxMCxcclxuICAgIGJveFNoYWRvdzogXCIwcHggNHB4IDEwcHggcmdiYSgwLCAwLCAwLCAwLjE1KVwiLFxyXG4gIH0sXHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBQcm9maWxlKCkge1xyXG4gIHJldHVybiAoXHJcbiAgICA8c2VjdGlvbiBjbGFzc05hbWU9e1Byb2ZpbGVTdHlsZXMuUHJvZmlsZX0+XHJcbiAgICAgIDxQYXBlciBzdHlsZT17c3R5bGVzLk11aVBhcGVyfT5cclxuICAgICAgICA8c2VjdGlvbiBjbGFzc05hbWU9e1Byb2ZpbGVTdHlsZXMuTWFpbkluZm99PlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2Ake1Byb2ZpbGVTdHlsZXMuUHJvZmlsZVVzZXJJY29ufSBVc2VySWNvbmB9IC8+XHJcbiAgICAgICAgICA8cCBjbGFzc05hbWU9e1Byb2ZpbGVTdHlsZXMuVXNlck5hbWV9PtCY0LLQsNC90L7QstCwINCQ0L3QvdCwINCc0LjRhdCw0LnQu9C+0LLQvdCwPC9wPlxyXG4gICAgICAgIDwvc2VjdGlvbj5cclxuXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e1Byb2ZpbGVTdHlsZXMuQ2xvc2V9PlxyXG4gICAgICAgICAgPHA+0JfQsNC60YDRi9GC0YwgPC9wPlxyXG4gICAgICAgICAgPGltZ1xyXG4gICAgICAgICAgICBzcmM9XCIvY3Jvc3MucG5nXCJcclxuICAgICAgICAgICAgY2xhc3NOYW1lPXtQcm9maWxlU3R5bGVzLkNsb3NlSW1nfVxyXG4gICAgICAgICAgICBhbHQ9XCJjbG9zZVwiXHJcbiAgICAgICAgICAvPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L1BhcGVyPlxyXG4gICAgICA8VXNlckZvcm0gLz5cclxuICAgIDwvc2VjdGlvbj5cclxuICApO1xyXG59XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=