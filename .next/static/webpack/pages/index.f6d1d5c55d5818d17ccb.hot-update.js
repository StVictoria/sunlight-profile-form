webpackHotUpdate_N_E("pages/index",{

/***/ "./components/useDialogHook.js":
/*!*************************************!*\
  !*** ./components/useDialogHook.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return useDialogHook; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _s = $RefreshSig$();


function useDialogHook() {
  _s();

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false),
      isOpen = _useState[0],
      setDialogOpen = _useState[1];

  var handleDialogOpen = function handleDialogOpen() {
    setDialogOpen(true);
    console.log("open");
  };

  var handleDialogClose = function handleDialogClose() {
    return setDialogOpen(false);
  };

  return {
    isOpen: isOpen,
    handleDialogOpen: handleDialogOpen,
    handleDialogClose: handleDialogClose
  };
}

_s(useDialogHook, "6NH39cRQPF2qnAy3RRqsrIMPDI8=");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy91c2VEaWFsb2dIb29rLmpzIl0sIm5hbWVzIjpbInVzZURpYWxvZ0hvb2siLCJ1c2VTdGF0ZSIsImlzT3BlbiIsInNldERpYWxvZ09wZW4iLCJoYW5kbGVEaWFsb2dPcGVuIiwiY29uc29sZSIsImxvZyIsImhhbmRsZURpYWxvZ0Nsb3NlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFFZSxTQUFTQSxhQUFULEdBQXlCO0FBQUE7O0FBQUEsa0JBQ05DLHNEQUFRLENBQUMsS0FBRCxDQURGO0FBQUEsTUFDL0JDLE1BRCtCO0FBQUEsTUFDdkJDLGFBRHVCOztBQUd0QyxNQUFNQyxnQkFBZ0IsR0FBRyxTQUFuQkEsZ0JBQW1CLEdBQU07QUFDN0JELGlCQUFhLENBQUMsSUFBRCxDQUFiO0FBQ0FFLFdBQU8sQ0FBQ0MsR0FBUixDQUFZLE1BQVo7QUFDRCxHQUhEOztBQUlBLE1BQU1DLGlCQUFpQixHQUFHLFNBQXBCQSxpQkFBb0I7QUFBQSxXQUFNSixhQUFhLENBQUMsS0FBRCxDQUFuQjtBQUFBLEdBQTFCOztBQUVBLFNBQU87QUFBRUQsVUFBTSxFQUFOQSxNQUFGO0FBQVVFLG9CQUFnQixFQUFoQkEsZ0JBQVY7QUFBNEJHLHFCQUFpQixFQUFqQkE7QUFBNUIsR0FBUDtBQUNEOztHQVZ1QlAsYSIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC5mNmQxZDVjNTVkNTgxOGQxN2NjYi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHVzZURpYWxvZ0hvb2soKSB7XHJcbiAgY29uc3QgW2lzT3Blbiwgc2V0RGlhbG9nT3Blbl0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcblxyXG4gIGNvbnN0IGhhbmRsZURpYWxvZ09wZW4gPSAoKSA9PiB7XHJcbiAgICBzZXREaWFsb2dPcGVuKHRydWUpO1xyXG4gICAgY29uc29sZS5sb2coXCJvcGVuXCIpO1xyXG4gIH07XHJcbiAgY29uc3QgaGFuZGxlRGlhbG9nQ2xvc2UgPSAoKSA9PiBzZXREaWFsb2dPcGVuKGZhbHNlKTtcclxuXHJcbiAgcmV0dXJuIHsgaXNPcGVuLCBoYW5kbGVEaWFsb2dPcGVuLCBoYW5kbGVEaWFsb2dDbG9zZSB9O1xyXG59XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=