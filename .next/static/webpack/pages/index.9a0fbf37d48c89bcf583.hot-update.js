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
/* harmony import */ var _material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/IconButton */ "./node_modules/@material-ui/core/esm/IconButton/index.js");
/* harmony import */ var _material_ui_icons_Close__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/icons/Close */ "./node_modules/@material-ui/icons/Close.js");
/* harmony import */ var _material_ui_icons_Close__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Close__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _material_ui_icons_KeyboardArrowDown__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/icons/KeyboardArrowDown */ "./node_modules/@material-ui/icons/KeyboardArrowDown.js");
/* harmony import */ var _material_ui_icons_KeyboardArrowDown__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_KeyboardArrowDown__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _styles_Profile_module_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../styles/Profile.module.scss */ "./styles/Profile.module.scss");
/* harmony import */ var _styles_Profile_module_scss__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_styles_Profile_module_scss__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _UserForm_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./UserForm.js */ "./components/UserForm.js");
var _jsxFileName = "C:\\Users\\vstepnova\\Desktop\\test sunlight\\components\\Profile.js",
    _s = $RefreshSig$(),
    _s2 = $RefreshSig$();


var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;







 //TODO: оптимизация

function useWindowSize() {
  _s();

  // Initialize state with undefined width/height so server and client renders match
  // Learn more here: https://joshwcomeau.com/react/the-perils-of-rehydration/
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])({
    width: undefined,
    height: undefined
  }),
      windowSize = _useState[0],
      setWindowSize = _useState[1];

  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    // only execute all the code below in client side
    if (true) {
      // Handler to call on window resize
      var handleResize = function handleResize() {
        // Set window width/height to state
        setWindowSize({
          width: window.innerWidth,
          height: window.innerHeight
        });
      }; // Add event listener


      window.addEventListener("resize", handleResize); // Call handler right away so state gets updated with initial window size

      handleResize(); // Remove event listener on cleanup

      return function () {
        return window.removeEventListener("resize", handleResize);
      };
    }
  }, []); // Empty array ensures that effect is only run on mount

  return windowSize;
}

_s(useWindowSize, "c4qf3T3ntwaWr7rmXJcJwcTfMJk=");

function Profile(_ref) {
  _s2();

  var isFormOpen = _ref.isFormOpen,
      onFormClose = _ref.onFormClose,
      handleDialogOpen = _ref.handleDialogOpen;
  var size = useWindowSize();
  console.log(size);
  return __jsx("section", {
    className: _styles_Profile_module_scss__WEBPACK_IMPORTED_MODULE_6___default.a.Profile,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50,
      columnNumber: 5
    }
  }, __jsx(_material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_1__["default"], {
    className: _styles_Profile_module_scss__WEBPACK_IMPORTED_MODULE_6___default.a.UserInfoMuiPaper,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51,
      columnNumber: 7
    }
  }, __jsx("section", {
    className: _styles_Profile_module_scss__WEBPACK_IMPORTED_MODULE_6___default.a.MainInfo,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: "".concat(_styles_Profile_module_scss__WEBPACK_IMPORTED_MODULE_6___default.a.ProfileUserIcon, " UserIcon"),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53,
      columnNumber: 11
    }
  }), __jsx("p", {
    className: _styles_Profile_module_scss__WEBPACK_IMPORTED_MODULE_6___default.a.UserName,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54,
      columnNumber: 11
    }
  }, size.width < 969 ? "Иванова А. М." : "Иванова Анна Михайловна")), size.width < 959 ? __jsx(_material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60,
      columnNumber: 11
    }
  }, __jsx(_material_ui_icons_Close__WEBPACK_IMPORTED_MODULE_4___default.a, {
    color: "primary",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61,
      columnNumber: 13
    }
  })) : __jsx(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_2__["default"], {
    className: _styles_Profile_module_scss__WEBPACK_IMPORTED_MODULE_6___default.a.CloseButton,
    onClick: onFormClose,
    color: "primary",
    endIcon: isFormOpen ? __jsx(_material_ui_icons_Close__WEBPACK_IMPORTED_MODULE_4___default.a, {
      className: _styles_Profile_module_scss__WEBPACK_IMPORTED_MODULE_6___default.a.CloseIcon,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 70,
        columnNumber: 17
      }
    }) : __jsx(_material_ui_icons_KeyboardArrowDown__WEBPACK_IMPORTED_MODULE_5___default.a, {
      className: _styles_Profile_module_scss__WEBPACK_IMPORTED_MODULE_6___default.a.CloseIcon,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 72,
        columnNumber: 17
      }
    }),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64,
      columnNumber: 11
    }
  }, isFormOpen ? "Закрыть" : "Открыть")), __jsx(_UserForm_js__WEBPACK_IMPORTED_MODULE_7__["default"], {
    handleDialogOpen: handleDialogOpen,
    isFormOpen: isFormOpen,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 80,
      columnNumber: 7
    }
  }));
}

_s2(Profile, "/dTDjnwlNGsRzu12Dr5t7HJe8sA=", false, function () {
  return [useWindowSize];
});

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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/next/dist/compiled/webpack/harmony-module.js */ "./node_modules/next/dist/compiled/webpack/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Qcm9maWxlLmpzIl0sIm5hbWVzIjpbInVzZVdpbmRvd1NpemUiLCJ1c2VTdGF0ZSIsIndpZHRoIiwidW5kZWZpbmVkIiwiaGVpZ2h0Iiwid2luZG93U2l6ZSIsInNldFdpbmRvd1NpemUiLCJ1c2VFZmZlY3QiLCJoYW5kbGVSZXNpemUiLCJ3aW5kb3ciLCJpbm5lcldpZHRoIiwiaW5uZXJIZWlnaHQiLCJhZGRFdmVudExpc3RlbmVyIiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsIlByb2ZpbGUiLCJpc0Zvcm1PcGVuIiwib25Gb3JtQ2xvc2UiLCJoYW5kbGVEaWFsb2dPcGVuIiwic2l6ZSIsImNvbnNvbGUiLCJsb2ciLCJQcm9maWxlU3R5bGVzIiwiVXNlckluZm9NdWlQYXBlciIsIk1haW5JbmZvIiwiUHJvZmlsZVVzZXJJY29uIiwiVXNlck5hbWUiLCJDbG9zZUJ1dHRvbiIsIkNsb3NlSWNvbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7Q0FHQTs7QUFFQSxTQUFTQSxhQUFULEdBQXlCO0FBQUE7O0FBQ3ZCO0FBQ0E7QUFGdUIsa0JBR2FDLHNEQUFRLENBQUM7QUFDM0NDLFNBQUssRUFBRUMsU0FEb0M7QUFFM0NDLFVBQU0sRUFBRUQ7QUFGbUMsR0FBRCxDQUhyQjtBQUFBLE1BR2hCRSxVQUhnQjtBQUFBLE1BR0pDLGFBSEk7O0FBUXZCQyx5REFBUyxDQUFDLFlBQU07QUFDZDtBQUNBLGNBQW1DO0FBQ2pDO0FBRGlDLFVBRXhCQyxZQUZ3QixHQUVqQyxTQUFTQSxZQUFULEdBQXdCO0FBQ3RCO0FBQ0FGLHFCQUFhLENBQUM7QUFDWkosZUFBSyxFQUFFTyxNQUFNLENBQUNDLFVBREY7QUFFWk4sZ0JBQU0sRUFBRUssTUFBTSxDQUFDRTtBQUZILFNBQUQsQ0FBYjtBQUlELE9BUmdDLEVBVWpDOzs7QUFDQUYsWUFBTSxDQUFDRyxnQkFBUCxDQUF3QixRQUF4QixFQUFrQ0osWUFBbEMsRUFYaUMsQ0FhakM7O0FBQ0FBLGtCQUFZLEdBZHFCLENBZ0JqQzs7QUFDQSxhQUFPO0FBQUEsZUFBTUMsTUFBTSxDQUFDSSxtQkFBUCxDQUEyQixRQUEzQixFQUFxQ0wsWUFBckMsQ0FBTjtBQUFBLE9BQVA7QUFDRDtBQUNGLEdBckJRLEVBcUJOLEVBckJNLENBQVQsQ0FSdUIsQ0E2QmY7O0FBQ1IsU0FBT0gsVUFBUDtBQUNEOztHQS9CUUwsYTs7QUFpQ00sU0FBU2MsT0FBVCxPQUFnRTtBQUFBOztBQUFBLE1BQTdDQyxVQUE2QyxRQUE3Q0EsVUFBNkM7QUFBQSxNQUFqQ0MsV0FBaUMsUUFBakNBLFdBQWlDO0FBQUEsTUFBcEJDLGdCQUFvQixRQUFwQkEsZ0JBQW9CO0FBQzdFLE1BQU1DLElBQUksR0FBR2xCLGFBQWEsRUFBMUI7QUFDQW1CLFNBQU8sQ0FBQ0MsR0FBUixDQUFZRixJQUFaO0FBQ0EsU0FDRTtBQUFTLGFBQVMsRUFBRUcsa0VBQWEsQ0FBQ1AsT0FBbEM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLE1BQUMsK0RBQUQ7QUFBTyxhQUFTLEVBQUVPLGtFQUFhLENBQUNDLGdCQUFoQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBUyxhQUFTLEVBQUVELGtFQUFhLENBQUNFLFFBQWxDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFLLGFBQVMsWUFBS0Ysa0VBQWEsQ0FBQ0csZUFBbkIsY0FBZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREYsRUFFRTtBQUFHLGFBQVMsRUFBRUgsa0VBQWEsQ0FBQ0ksUUFBNUI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNHUCxJQUFJLENBQUNoQixLQUFMLEdBQWEsR0FBYixHQUFtQixlQUFuQixHQUFxQyx5QkFEeEMsQ0FGRixDQURGLEVBUUdnQixJQUFJLENBQUNoQixLQUFMLEdBQWEsR0FBYixHQUNDLE1BQUMsb0VBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLE1BQUMsK0RBQUQ7QUFBVyxTQUFLLEVBQUMsU0FBakI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURGLENBREQsR0FLQyxNQUFDLGdFQUFEO0FBQ0UsYUFBUyxFQUFFbUIsa0VBQWEsQ0FBQ0ssV0FEM0I7QUFFRSxXQUFPLEVBQUVWLFdBRlg7QUFHRSxTQUFLLEVBQUMsU0FIUjtBQUlFLFdBQU8sRUFDTEQsVUFBVSxHQUNSLE1BQUMsK0RBQUQ7QUFBVyxlQUFTLEVBQUVNLGtFQUFhLENBQUNNLFNBQXBDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsTUFEUSxHQUdSLE1BQUMsMkVBQUQ7QUFBdUIsZUFBUyxFQUFFTixrRUFBYSxDQUFDTSxTQUFoRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE1BUk47QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQVlHWixVQUFVLEdBQUcsU0FBSCxHQUFlLFNBWjVCLENBYkosQ0FERixFQThCRSxNQUFDLG9EQUFEO0FBQVUsb0JBQWdCLEVBQUVFLGdCQUE1QjtBQUE4QyxjQUFVLEVBQUVGLFVBQTFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUE5QkYsQ0FERjtBQWtDRDs7SUFyQ3VCRCxPO1VBQ1RkLGE7OztLQURTYyxPIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LjlhMGZiZjM3ZDQ4Yzg5YmNmNTgzLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBQYXBlciBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvUGFwZXJcIjtcclxuaW1wb3J0IEJ1dHRvbiBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvQnV0dG9uXCI7XHJcbmltcG9ydCBJY29uQnV0dG9uIGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZS9JY29uQnV0dG9uXCI7XHJcbmltcG9ydCBDbG9zZUljb24gZnJvbSBcIkBtYXRlcmlhbC11aS9pY29ucy9DbG9zZVwiO1xyXG5pbXBvcnQgS2V5Ym9hcmRBcnJvd0Rvd25JY29uIGZyb20gXCJAbWF0ZXJpYWwtdWkvaWNvbnMvS2V5Ym9hcmRBcnJvd0Rvd25cIjtcclxuXHJcbmltcG9ydCBQcm9maWxlU3R5bGVzIGZyb20gXCIuLi9zdHlsZXMvUHJvZmlsZS5tb2R1bGUuc2Nzc1wiO1xyXG5pbXBvcnQgVXNlckZvcm0gZnJvbSBcIi4vVXNlckZvcm0uanNcIjtcclxuXHJcbi8vVE9ETzog0L7Qv9GC0LjQvNC40LfQsNGG0LjRj1xyXG5cclxuZnVuY3Rpb24gdXNlV2luZG93U2l6ZSgpIHtcclxuICAvLyBJbml0aWFsaXplIHN0YXRlIHdpdGggdW5kZWZpbmVkIHdpZHRoL2hlaWdodCBzbyBzZXJ2ZXIgYW5kIGNsaWVudCByZW5kZXJzIG1hdGNoXHJcbiAgLy8gTGVhcm4gbW9yZSBoZXJlOiBodHRwczovL2pvc2h3Y29tZWF1LmNvbS9yZWFjdC90aGUtcGVyaWxzLW9mLXJlaHlkcmF0aW9uL1xyXG4gIGNvbnN0IFt3aW5kb3dTaXplLCBzZXRXaW5kb3dTaXplXSA9IHVzZVN0YXRlKHtcclxuICAgIHdpZHRoOiB1bmRlZmluZWQsXHJcbiAgICBoZWlnaHQ6IHVuZGVmaW5lZCxcclxuICB9KTtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIC8vIG9ubHkgZXhlY3V0ZSBhbGwgdGhlIGNvZGUgYmVsb3cgaW4gY2xpZW50IHNpZGVcclxuICAgIGlmICh0eXBlb2Ygd2luZG93ICE9PSBcInVuZGVmaW5lZFwiKSB7XHJcbiAgICAgIC8vIEhhbmRsZXIgdG8gY2FsbCBvbiB3aW5kb3cgcmVzaXplXHJcbiAgICAgIGZ1bmN0aW9uIGhhbmRsZVJlc2l6ZSgpIHtcclxuICAgICAgICAvLyBTZXQgd2luZG93IHdpZHRoL2hlaWdodCB0byBzdGF0ZVxyXG4gICAgICAgIHNldFdpbmRvd1NpemUoe1xyXG4gICAgICAgICAgd2lkdGg6IHdpbmRvdy5pbm5lcldpZHRoLFxyXG4gICAgICAgICAgaGVpZ2h0OiB3aW5kb3cuaW5uZXJIZWlnaHQsXHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC8vIEFkZCBldmVudCBsaXN0ZW5lclxyXG4gICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcInJlc2l6ZVwiLCBoYW5kbGVSZXNpemUpO1xyXG5cclxuICAgICAgLy8gQ2FsbCBoYW5kbGVyIHJpZ2h0IGF3YXkgc28gc3RhdGUgZ2V0cyB1cGRhdGVkIHdpdGggaW5pdGlhbCB3aW5kb3cgc2l6ZVxyXG4gICAgICBoYW5kbGVSZXNpemUoKTtcclxuXHJcbiAgICAgIC8vIFJlbW92ZSBldmVudCBsaXN0ZW5lciBvbiBjbGVhbnVwXHJcbiAgICAgIHJldHVybiAoKSA9PiB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcihcInJlc2l6ZVwiLCBoYW5kbGVSZXNpemUpO1xyXG4gICAgfVxyXG4gIH0sIFtdKTsgLy8gRW1wdHkgYXJyYXkgZW5zdXJlcyB0aGF0IGVmZmVjdCBpcyBvbmx5IHJ1biBvbiBtb3VudFxyXG4gIHJldHVybiB3aW5kb3dTaXplO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBQcm9maWxlKHsgaXNGb3JtT3Blbiwgb25Gb3JtQ2xvc2UsIGhhbmRsZURpYWxvZ09wZW4gfSkge1xyXG4gIGNvbnN0IHNpemUgPSB1c2VXaW5kb3dTaXplKCk7XHJcbiAgY29uc29sZS5sb2coc2l6ZSk7XHJcbiAgcmV0dXJuIChcclxuICAgIDxzZWN0aW9uIGNsYXNzTmFtZT17UHJvZmlsZVN0eWxlcy5Qcm9maWxlfT5cclxuICAgICAgPFBhcGVyIGNsYXNzTmFtZT17UHJvZmlsZVN0eWxlcy5Vc2VySW5mb011aVBhcGVyfT5cclxuICAgICAgICA8c2VjdGlvbiBjbGFzc05hbWU9e1Byb2ZpbGVTdHlsZXMuTWFpbkluZm99PlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2Ake1Byb2ZpbGVTdHlsZXMuUHJvZmlsZVVzZXJJY29ufSBVc2VySWNvbmB9IC8+XHJcbiAgICAgICAgICA8cCBjbGFzc05hbWU9e1Byb2ZpbGVTdHlsZXMuVXNlck5hbWV9PlxyXG4gICAgICAgICAgICB7c2l6ZS53aWR0aCA8IDk2OSA/IFwi0JjQstCw0L3QvtCy0LAg0JAuINCcLlwiIDogXCLQmNCy0LDQvdC+0LLQsCDQkNC90L3QsCDQnNC40YXQsNC50LvQvtCy0L3QsFwifVxyXG4gICAgICAgICAgPC9wPlxyXG4gICAgICAgIDwvc2VjdGlvbj5cclxuXHJcbiAgICAgICAge3NpemUud2lkdGggPCA5NTkgPyAoXHJcbiAgICAgICAgICA8SWNvbkJ1dHRvbj5cclxuICAgICAgICAgICAgPENsb3NlSWNvbiBjb2xvcj1cInByaW1hcnlcIiAvPlxyXG4gICAgICAgICAgPC9JY29uQnV0dG9uPlxyXG4gICAgICAgICkgOiAoXHJcbiAgICAgICAgICA8QnV0dG9uXHJcbiAgICAgICAgICAgIGNsYXNzTmFtZT17UHJvZmlsZVN0eWxlcy5DbG9zZUJ1dHRvbn1cclxuICAgICAgICAgICAgb25DbGljaz17b25Gb3JtQ2xvc2V9XHJcbiAgICAgICAgICAgIGNvbG9yPVwicHJpbWFyeVwiXHJcbiAgICAgICAgICAgIGVuZEljb249e1xyXG4gICAgICAgICAgICAgIGlzRm9ybU9wZW4gPyAoXHJcbiAgICAgICAgICAgICAgICA8Q2xvc2VJY29uIGNsYXNzTmFtZT17UHJvZmlsZVN0eWxlcy5DbG9zZUljb259IC8+XHJcbiAgICAgICAgICAgICAgKSA6IChcclxuICAgICAgICAgICAgICAgIDxLZXlib2FyZEFycm93RG93bkljb24gY2xhc3NOYW1lPXtQcm9maWxlU3R5bGVzLkNsb3NlSWNvbn0gLz5cclxuICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgID5cclxuICAgICAgICAgICAge2lzRm9ybU9wZW4gPyBcItCX0LDQutGA0YvRgtGMXCIgOiBcItCe0YLQutGA0YvRgtGMXCJ9XHJcbiAgICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgICApfVxyXG4gICAgICA8L1BhcGVyPlxyXG4gICAgICA8VXNlckZvcm0gaGFuZGxlRGlhbG9nT3Blbj17aGFuZGxlRGlhbG9nT3Blbn0gaXNGb3JtT3Blbj17aXNGb3JtT3Blbn0gLz5cclxuICAgIDwvc2VjdGlvbj5cclxuICApO1xyXG59XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=