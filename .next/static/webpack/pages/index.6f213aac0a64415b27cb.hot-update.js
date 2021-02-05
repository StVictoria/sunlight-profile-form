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
var _jsxFileName = "C:\\Users\\vstepnova\\Desktop\\\u0442\u0435\u0441\u0442\u043E\u0432\u044B\u0435 \u0437\u0430\u0434\u0430\u043D\u0438\u044F\\test1\\components\\Profile.js";

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
function Profile(_ref) {
  var handleDialogOpen = _ref.handleDialogOpen;
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
  }, "\u0418\u0432\u0430\u043D\u043E\u0432\u0430 \u0410\u043D\u043D\u0430 \u041C\u0438\u0445\u0430\u0439\u043B\u043E\u0432\u043D\u0430")), __jsx("button", {
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
    handleDialogOpen: handleDialogOpen,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Qcm9maWxlLmpzIl0sIm5hbWVzIjpbInN0eWxlcyIsIk11aVBhcGVyIiwiZGlzcGxheSIsImFsaWduSXRlbXMiLCJqdXN0aWZ5Q29udGVudCIsImhlaWdodCIsImJhY2tncm91bmQiLCJwYWRkaW5nIiwibWFyZ2luVG9wIiwibWFyZ2luQm90dG9tIiwiYm94U2l6aW5nIiwiYm9yZGVyUmFkaXVzIiwiYm94U2hhZG93IiwiUHJvZmlsZSIsImhhbmRsZURpYWxvZ09wZW4iLCJQcm9maWxlU3R5bGVzIiwiTWFpbkluZm8iLCJQcm9maWxlVXNlckljb24iLCJVc2VyTmFtZSIsIkNsb3NlIiwiQ2xvc2VJbWciXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBRUE7QUFDQTtBQUVBLElBQU1BLE1BQU0sR0FBRztBQUNiQyxVQUFRLEVBQUU7QUFDUkMsV0FBTyxFQUFFLE1BREQ7QUFFUkMsY0FBVSxFQUFFLFFBRko7QUFHUkMsa0JBQWMsRUFBRSxlQUhSO0FBSVJDLFVBQU0sRUFBRSxHQUpBO0FBS1JDLGNBQVUsRUFBRSxzREFMSjtBQU1SQyxXQUFPLEVBQUUsRUFORDtBQU9SQyxhQUFTLEVBQUUsRUFQSDtBQVFSQyxnQkFBWSxFQUFFLEVBUk47QUFTUkMsYUFBUyxFQUFFLFlBVEg7QUFVUkMsZ0JBQVksRUFBRSxFQVZOO0FBV1JDLGFBQVMsRUFBRTtBQVhIO0FBREcsQ0FBZjtBQWdCZSxTQUFTQyxPQUFULE9BQXVDO0FBQUEsTUFBcEJDLGdCQUFvQixRQUFwQkEsZ0JBQW9CO0FBQ3BELFNBQ0U7QUFBUyxhQUFTLEVBQUVDLGtFQUFhLENBQUNGLE9BQWxDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRSxNQUFDLCtEQUFEO0FBQU8sU0FBSyxFQUFFYixNQUFNLENBQUNDLFFBQXJCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFTLGFBQVMsRUFBRWMsa0VBQWEsQ0FBQ0MsUUFBbEM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUssYUFBUyxZQUFLRCxrRUFBYSxDQUFDRSxlQUFuQixjQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFERixFQUVFO0FBQUcsYUFBUyxFQUFFRixrRUFBYSxDQUFDRyxRQUE1QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHdJQUZGLENBREYsRUFNRTtBQUFRLGFBQVMsRUFBRUgsa0VBQWEsQ0FBQ0ksS0FBakM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbURBREYsRUFFRTtBQUNFLE9BQUcsRUFBQyxZQUROO0FBRUUsYUFBUyxFQUFFSixrRUFBYSxDQUFDSyxRQUYzQjtBQUdFLE9BQUcsRUFBQyxPQUhOO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFGRixDQU5GLENBREYsRUFnQkUsTUFBQyxvREFBRDtBQUFVLG9CQUFnQixFQUFFTixnQkFBNUI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQWhCRixDQURGO0FBb0JEO0tBckJ1QkQsTyIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC42ZjIxM2FhYzBhNjQ0MTViMjdjYi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFBhcGVyIGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZS9QYXBlclwiO1xyXG5cclxuaW1wb3J0IFByb2ZpbGVTdHlsZXMgZnJvbSBcIi4uL3N0eWxlcy9Qcm9maWxlLm1vZHVsZS5zY3NzXCI7XHJcbmltcG9ydCBVc2VyRm9ybSBmcm9tIFwiLi9Vc2VyRm9ybS5qc1wiO1xyXG5cclxuY29uc3Qgc3R5bGVzID0ge1xyXG4gIE11aVBhcGVyOiB7XHJcbiAgICBkaXNwbGF5OiBcImZsZXhcIixcclxuICAgIGFsaWduSXRlbXM6IFwiY2VudGVyXCIsXHJcbiAgICBqdXN0aWZ5Q29udGVudDogXCJzcGFjZS1iZXR3ZWVuXCIsXHJcbiAgICBoZWlnaHQ6IDEyOCxcclxuICAgIGJhY2tncm91bmQ6IFwibGluZWFyLWdyYWRpZW50KDI3MGRlZywgIzFBNzhDMiAwJSwgIzFBNzhDMiAxMDEuMDYlKVwiLFxyXG4gICAgcGFkZGluZzogNDAsXHJcbiAgICBtYXJnaW5Ub3A6IDMxLFxyXG4gICAgbWFyZ2luQm90dG9tOiAyNCxcclxuICAgIGJveFNpemluZzogXCJib3JkZXItYm94XCIsXHJcbiAgICBib3JkZXJSYWRpdXM6IDEwLFxyXG4gICAgYm94U2hhZG93OiBcIjBweCA0cHggMTBweCByZ2JhKDAsIDAsIDAsIDAuMTUpXCIsXHJcbiAgfSxcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFByb2ZpbGUoeyBoYW5kbGVEaWFsb2dPcGVuIH0pIHtcclxuICByZXR1cm4gKFxyXG4gICAgPHNlY3Rpb24gY2xhc3NOYW1lPXtQcm9maWxlU3R5bGVzLlByb2ZpbGV9PlxyXG4gICAgICA8UGFwZXIgc3R5bGU9e3N0eWxlcy5NdWlQYXBlcn0+XHJcbiAgICAgICAgPHNlY3Rpb24gY2xhc3NOYW1lPXtQcm9maWxlU3R5bGVzLk1haW5JbmZvfT5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtgJHtQcm9maWxlU3R5bGVzLlByb2ZpbGVVc2VySWNvbn0gVXNlckljb25gfSAvPlxyXG4gICAgICAgICAgPHAgY2xhc3NOYW1lPXtQcm9maWxlU3R5bGVzLlVzZXJOYW1lfT7QmNCy0LDQvdC+0LLQsCDQkNC90L3QsCDQnNC40YXQsNC50LvQvtCy0L3QsDwvcD5cclxuICAgICAgICA8L3NlY3Rpb24+XHJcblxyXG4gICAgICAgIDxidXR0b24gY2xhc3NOYW1lPXtQcm9maWxlU3R5bGVzLkNsb3NlfT5cclxuICAgICAgICAgIDxwPtCX0LDQutGA0YvRgtGMIDwvcD5cclxuICAgICAgICAgIDxpbWdcclxuICAgICAgICAgICAgc3JjPVwiL2Nyb3NzLnBuZ1wiXHJcbiAgICAgICAgICAgIGNsYXNzTmFtZT17UHJvZmlsZVN0eWxlcy5DbG9zZUltZ31cclxuICAgICAgICAgICAgYWx0PVwiY2xvc2VcIlxyXG4gICAgICAgICAgLz5cclxuICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgPC9QYXBlcj5cclxuICAgICAgPFVzZXJGb3JtIGhhbmRsZURpYWxvZ09wZW49e2hhbmRsZURpYWxvZ09wZW59IC8+XHJcbiAgICA8L3NlY3Rpb24+XHJcbiAgKTtcclxufVxyXG4iXSwic291cmNlUm9vdCI6IiJ9