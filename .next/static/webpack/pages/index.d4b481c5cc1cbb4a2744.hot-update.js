webpackHotUpdate_N_E("pages/index",{

/***/ "./xstate/userInfo.js":
/*!****************************!*\
  !*** ./xstate/userInfo.js ***!
  \****************************/
/*! exports provided: userInfoConfig */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "userInfoConfig", function() { return userInfoConfig; });
/* harmony import */ var xstate__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! xstate */ "./node_modules/xstate/es/index.js");

var userInfoConfig = {
  id: "saveChanges",
  context: {
    name: "",
    results: []
  },
  initial: "ready",
  states: {
    ready: {
      on: {
        INPUT_NAME: {
          actions: Object(xstate__WEBPACK_IMPORTED_MODULE_0__["assign"])(function (ctx, evt) {
            return {
              name: evt.name
            };
          })
        },
        SUBMIT: {
          target: "searching"
        }
      }
    },
    error: {},
    searching: {},
    success: {}
  }
};

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4veHN0YXRlL3VzZXJJbmZvLmpzIl0sIm5hbWVzIjpbInVzZXJJbmZvQ29uZmlnIiwiaWQiLCJjb250ZXh0IiwibmFtZSIsInJlc3VsdHMiLCJpbml0aWFsIiwic3RhdGVzIiwicmVhZHkiLCJvbiIsIklOUFVUX05BTUUiLCJhY3Rpb25zIiwiYXNzaWduIiwiY3R4IiwiZXZ0IiwiU1VCTUlUIiwidGFyZ2V0IiwiZXJyb3IiLCJzZWFyY2hpbmciLCJzdWNjZXNzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFFTyxJQUFNQSxjQUFjLEdBQUc7QUFDNUJDLElBQUUsRUFBRSxhQUR3QjtBQUU1QkMsU0FBTyxFQUFFO0FBQ1BDLFFBQUksRUFBRSxFQURDO0FBRVBDLFdBQU8sRUFBRTtBQUZGLEdBRm1CO0FBTTVCQyxTQUFPLEVBQUUsT0FObUI7QUFPNUJDLFFBQU0sRUFBRTtBQUNOQyxTQUFLLEVBQUU7QUFDTEMsUUFBRSxFQUFFO0FBQ0ZDLGtCQUFVLEVBQUU7QUFDVkMsaUJBQU8sRUFBRUMscURBQU0sQ0FBQyxVQUFDQyxHQUFELEVBQU1DLEdBQU47QUFBQSxtQkFBZTtBQUM3QlYsa0JBQUksRUFBRVUsR0FBRyxDQUFDVjtBQURtQixhQUFmO0FBQUEsV0FBRDtBQURMLFNBRFY7QUFNRlcsY0FBTSxFQUFFO0FBQ05DLGdCQUFNLEVBQUU7QUFERjtBQU5OO0FBREMsS0FERDtBQWFOQyxTQUFLLEVBQUUsRUFiRDtBQWNOQyxhQUFTLEVBQUUsRUFkTDtBQWVOQyxXQUFPLEVBQUU7QUFmSDtBQVBvQixDQUF2QiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC5kNGI0ODFjNWNjMWNiYjRhMjc0NC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgYXNzaWduIH0gZnJvbSBcInhzdGF0ZVwiO1xyXG5cclxuZXhwb3J0IGNvbnN0IHVzZXJJbmZvQ29uZmlnID0ge1xyXG4gIGlkOiBcInNhdmVDaGFuZ2VzXCIsXHJcbiAgY29udGV4dDoge1xyXG4gICAgbmFtZTogXCJcIixcclxuICAgIHJlc3VsdHM6IFtdLFxyXG4gIH0sXHJcbiAgaW5pdGlhbDogXCJyZWFkeVwiLFxyXG4gIHN0YXRlczoge1xyXG4gICAgcmVhZHk6IHtcclxuICAgICAgb246IHtcclxuICAgICAgICBJTlBVVF9OQU1FOiB7XHJcbiAgICAgICAgICBhY3Rpb25zOiBhc3NpZ24oKGN0eCwgZXZ0KSA9PiAoe1xyXG4gICAgICAgICAgICBuYW1lOiBldnQubmFtZSxcclxuICAgICAgICAgIH0pKSxcclxuICAgICAgICB9LFxyXG4gICAgICAgIFNVQk1JVDoge1xyXG4gICAgICAgICAgdGFyZ2V0OiBcInNlYXJjaGluZ1wiLFxyXG4gICAgICAgIH0sXHJcbiAgICAgIH0sXHJcbiAgICB9LFxyXG4gICAgZXJyb3I6IHt9LFxyXG4gICAgc2VhcmNoaW5nOiB7fSxcclxuICAgIHN1Y2Nlc3M6IHt9LFxyXG4gIH0sXHJcbn07XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=