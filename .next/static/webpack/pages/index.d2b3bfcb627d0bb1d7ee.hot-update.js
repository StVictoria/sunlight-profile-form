webpackHotUpdate_N_E("pages/index",{

/***/ "./components/common/CustomButton.js":
/*!*******************************************!*\
  !*** ./components/common/CustomButton.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return CustomButton; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _styles_CustomButton_module_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../styles/CustomButton.module.scss */ "./styles/CustomButton.module.scss");
/* harmony import */ var _styles_CustomButton_module_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_CustomButton_module_scss__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _material_ui_core_CircularProgress__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/CircularProgress */ "./node_modules/@material-ui/core/esm/CircularProgress/index.js");
var _jsxFileName = "C:\\Users\\vstepnova\\Desktop\\test sunlight\\components\\common\\CustomButton.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


function CustomButton(_ref) {
  var isLoading = _ref.isLoading,
      name = _ref.name,
      type = _ref.type,
      onClick = _ref.onClick;
  return __jsx("button", {
    type: type,
    className: _styles_CustomButton_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.CustomButton,
    onClick: onClick,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6,
      columnNumber: 5
    }
  }, isLoading ? __jsx(_material_ui_core_CircularProgress__WEBPACK_IMPORTED_MODULE_2__["default"], {
    disableShrink: true,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 20
    }
  }) : name);
}
_c = CustomButton;

var _c;

$RefreshReg$(_c, "CustomButton");

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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/next/dist/compiled/webpack/harmony-module.js */ "./node_modules/next/dist/compiled/webpack/harmony-module.js")(module)))

/***/ }),

/***/ "./node_modules/@material-ui/core/esm/CircularProgress/CircularProgress.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/@material-ui/core/esm/CircularProgress/CircularProgress.js ***!
  \*********************************************************************************/
/*! exports provided: styles, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "styles", function() { return styles; });
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectWithoutProperties */ "./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! clsx */ "./node_modules/clsx/dist/clsx.m.js");
/* harmony import */ var _material_ui_utils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/utils */ "./node_modules/@material-ui/utils/esm/index.js");
/* harmony import */ var _styles_withStyles__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../styles/withStyles */ "./node_modules/@material-ui/core/esm/styles/withStyles.js");
/* harmony import */ var _utils_capitalize__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../utils/capitalize */ "./node_modules/@material-ui/core/esm/utils/capitalize.js");








var SIZE = 44;

function getRelativeValue(value, min, max) {
  return (Math.min(Math.max(min, value), max) - min) / (max - min);
}

function easeOut(t) {
  t = getRelativeValue(t, 0, 1); // https://gist.github.com/gre/1650294

  t = (t -= 1) * t * t + 1;
  return t;
}

function easeIn(t) {
  return t * t;
}

var styles = function styles(theme) {
  return {
    /* Styles applied to the root element. */
    root: {
      display: 'inline-block'
    },

    /* Styles applied to the root element if `variant="static"`. */
    static: {
      transition: theme.transitions.create('transform')
    },

    /* Styles applied to the root element if `variant="indeterminate"`. */
    indeterminate: {
      animation: '$circular-rotate 1.4s linear infinite'
    },

    /* Styles applied to the root element if `color="primary"`. */
    colorPrimary: {
      color: theme.palette.primary.main
    },

    /* Styles applied to the root element if `color="secondary"`. */
    colorSecondary: {
      color: theme.palette.secondary.main
    },

    /* Styles applied to the `svg` element. */
    svg: {
      display: 'block' // Keeps the progress centered

    },

    /* Styles applied to the `circle` svg path. */
    circle: {
      stroke: 'currentColor' // Use butt to follow the specification, by chance, it's already the default CSS value.
      // strokeLinecap: 'butt',

    },

    /* Styles applied to the `circle` svg path if `variant="static"`. */
    circleStatic: {
      transition: theme.transitions.create('stroke-dashoffset')
    },

    /* Styles applied to the `circle` svg path if `variant="indeterminate"`. */
    circleIndeterminate: {
      animation: '$circular-dash 1.4s ease-in-out infinite',
      // Some default value that looks fine waiting for the animation to kicks in.
      strokeDasharray: '80px, 200px',
      strokeDashoffset: '0px' // Add the unit to fix a Edge 16 and below bug.

    },
    '@keyframes circular-rotate': {
      '0%': {
        // Fix IE 11 wobbly
        transformOrigin: '50% 50%'
      },
      '100%': {
        transform: 'rotate(360deg)'
      }
    },
    '@keyframes circular-dash': {
      '0%': {
        strokeDasharray: '1px, 200px',
        strokeDashoffset: '0px'
      },
      '50%': {
        strokeDasharray: '100px, 200px',
        strokeDashoffset: '-15px'
      },
      '100%': {
        strokeDasharray: '100px, 200px',
        strokeDashoffset: '-125px'
      }
    },

    /* Styles applied to the `circle` svg path if `disableShrink={true}`. */
    circleDisableShrink: {
      animation: 'none'
    }
  };
};
/**
 * ## ARIA
 *
 * If the progress bar is describing the loading progress of a particular region of a page,
 * you should use `aria-describedby` to point to the progress bar, and set the `aria-busy`
 * attribute to `true` on that region until it has finished loading.
 */

var CircularProgress = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__["forwardRef"](function CircularProgress(props, ref) {
  var classes = props.classes,
      className = props.className,
      _props$color = props.color,
      color = _props$color === void 0 ? 'primary' : _props$color,
      _props$disableShrink = props.disableShrink,
      disableShrink = _props$disableShrink === void 0 ? false : _props$disableShrink,
      _props$size = props.size,
      size = _props$size === void 0 ? 40 : _props$size,
      style = props.style,
      _props$thickness = props.thickness,
      thickness = _props$thickness === void 0 ? 3.6 : _props$thickness,
      _props$value = props.value,
      value = _props$value === void 0 ? 0 : _props$value,
      _props$variant = props.variant,
      variant = _props$variant === void 0 ? 'indeterminate' : _props$variant,
      other = Object(_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__["default"])(props, ["classes", "className", "color", "disableShrink", "size", "style", "thickness", "value", "variant"]);

  var circleStyle = {};
  var rootStyle = {};
  var rootProps = {};

  if (variant === 'determinate' || variant === 'static') {
    var circumference = 2 * Math.PI * ((SIZE - thickness) / 2);
    circleStyle.strokeDasharray = circumference.toFixed(3);
    rootProps['aria-valuenow'] = Math.round(value);

    if (variant === 'static') {
      circleStyle.strokeDashoffset = "".concat(((100 - value) / 100 * circumference).toFixed(3), "px");
      rootStyle.transform = 'rotate(-90deg)';
    } else {
      circleStyle.strokeDashoffset = "".concat((easeIn((100 - value) / 100) * circumference).toFixed(3), "px");
      rootStyle.transform = "rotate(".concat((easeOut(value / 70) * 270).toFixed(3), "deg)");
    }
  }

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__["createElement"]("div", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    className: Object(clsx__WEBPACK_IMPORTED_MODULE_4__["default"])(classes.root, className, color !== 'inherit' && classes["color".concat(Object(_utils_capitalize__WEBPACK_IMPORTED_MODULE_7__["default"])(color))], {
      'indeterminate': classes.indeterminate,
      'static': classes.static
    }[variant]),
    style: Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
      width: size,
      height: size
    }, rootStyle, style),
    ref: ref,
    role: "progressbar"
  }, rootProps, other), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__["createElement"]("svg", {
    className: classes.svg,
    viewBox: "".concat(SIZE / 2, " ").concat(SIZE / 2, " ").concat(SIZE, " ").concat(SIZE)
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__["createElement"]("circle", {
    className: Object(clsx__WEBPACK_IMPORTED_MODULE_4__["default"])(classes.circle, disableShrink && classes.circleDisableShrink, {
      'indeterminate': classes.circleIndeterminate,
      'static': classes.circleStatic
    }[variant]),
    style: circleStyle,
    cx: SIZE,
    cy: SIZE,
    r: (SIZE - thickness) / 2,
    fill: "none",
    strokeWidth: thickness
  })));
});
 true ? CircularProgress.propTypes = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // |     To update them edit the d.ts file and run "yarn proptypes"     |
  // ----------------------------------------------------------------------

  /**
   * Override or extend the styles applied to the component.
   * See [CSS API](#css) below for more details.
   */
  classes: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.object,

  /**
   * @ignore
   */
  className: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string,

  /**
   * The color of the component. It supports those theme colors that make sense for this component.
   */
  color: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.oneOf(['inherit', 'primary', 'secondary']),

  /**
   * If `true`, the shrink animation is disabled.
   * This only works if variant is `indeterminate`.
   */
  disableShrink: Object(_material_ui_utils__WEBPACK_IMPORTED_MODULE_5__["chainPropTypes"])(prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.bool, function (props) {
    if (props.disableShrink && props.variant && props.variant !== 'indeterminate') {
      return new Error('Material-UI: You have provided the `disableShrink` prop ' + 'with a variant other than `indeterminate`. This will have no effect.');
    }

    return null;
  }),

  /**
   * The size of the circle.
   * If using a number, the pixel unit is assumed.
   * If using a string, you need to provide the CSS unit, e.g '3rem'.
   */
  size: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.number, prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string]),

  /**
   * @ignore
   */
  style: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.object,

  /**
   * The thickness of the circle.
   */
  thickness: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.number,

  /**
   * The value of the progress indicator for the determinate and static variants.
   * Value between 0 and 100.
   */
  value: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.number,

  /**
   * The variant to use.
   * Use indeterminate when there is no progress value.
   */
  variant: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.oneOf(['determinate', 'indeterminate', 'static'])
} : undefined;
/* harmony default export */ __webpack_exports__["default"] = (Object(_styles_withStyles__WEBPACK_IMPORTED_MODULE_6__["default"])(styles, {
  name: 'MuiCircularProgress',
  flip: false
})(CircularProgress));

/***/ }),

/***/ "./node_modules/@material-ui/core/esm/CircularProgress/index.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@material-ui/core/esm/CircularProgress/index.js ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _CircularProgress__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./CircularProgress */ "./node_modules/@material-ui/core/esm/CircularProgress/CircularProgress.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _CircularProgress__WEBPACK_IMPORTED_MODULE_0__["default"]; });



/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9jb21tb24vQ3VzdG9tQnV0dG9uLmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvQG1hdGVyaWFsLXVpL2NvcmUvZXNtL0NpcmN1bGFyUHJvZ3Jlc3MvQ2lyY3VsYXJQcm9ncmVzcy5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL0BtYXRlcmlhbC11aS9jb3JlL2VzbS9DaXJjdWxhclByb2dyZXNzL2luZGV4LmpzIl0sIm5hbWVzIjpbIkN1c3RvbUJ1dHRvbiIsImlzTG9hZGluZyIsIm5hbWUiLCJ0eXBlIiwib25DbGljayIsIkN1c3RvbUJ1dHRvblN0eWxlcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBRWUsU0FBU0EsWUFBVCxPQUEwRDtBQUFBLE1BQWxDQyxTQUFrQyxRQUFsQ0EsU0FBa0M7QUFBQSxNQUF2QkMsSUFBdUIsUUFBdkJBLElBQXVCO0FBQUEsTUFBakJDLElBQWlCLFFBQWpCQSxJQUFpQjtBQUFBLE1BQVhDLE9BQVcsUUFBWEEsT0FBVztBQUN2RSxTQUNFO0FBQ0UsUUFBSSxFQUFFRCxJQURSO0FBRUUsYUFBUyxFQUFFRSx1RUFBa0IsQ0FBQ0wsWUFGaEM7QUFHRSxXQUFPLEVBQUVJLE9BSFg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUtHSCxTQUFTLEdBQUcsTUFBQywwRUFBRDtBQUFrQixpQkFBYSxNQUEvQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBQUgsR0FBd0NDLElBTHBELENBREY7QUFTRDtLQVZ1QkYsWTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0h4QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBMEQ7QUFDZ0M7QUFDM0Q7QUFDSTtBQUNYO0FBQzRCO0FBQ047QUFDRDtBQUM3Qzs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxnQ0FBZ0M7O0FBRWhDO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7O0FBRUEsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTCxrRUFBa0UsS0FBSztBQUN2RTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsb0NBQW9DLGdEQUFnQjtBQUNwRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxjQUFjLGtHQUF3Qjs7QUFFdEM7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxzQkFBc0IsbURBQW1CLFFBQVEsa0ZBQVE7QUFDekQsZUFBZSxvREFBSSx3RUFBd0UsaUVBQVU7QUFDckc7QUFDQTtBQUNBLEtBQUs7QUFDTCxXQUFXLGtGQUFRO0FBQ25CO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLEdBQUcsa0NBQWtDLG1EQUFtQjtBQUN4RDtBQUNBO0FBQ0EsR0FBRyxlQUFlLG1EQUFtQjtBQUNyQyxlQUFlLG9EQUFJO0FBQ25CO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNILENBQUM7QUFDRCxLQUFxQztBQUNyQztBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsaURBQVM7O0FBRXBCO0FBQ0E7QUFDQTtBQUNBLGFBQWEsaURBQVM7O0FBRXRCO0FBQ0E7QUFDQTtBQUNBLFNBQVMsaURBQVM7O0FBRWxCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCLHlFQUFjLENBQUMsaURBQVM7QUFDekM7QUFDQTtBQUNBOztBQUVBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUSxpREFBUyxZQUFZLGlEQUFTLFNBQVMsaURBQVM7O0FBRXhEO0FBQ0E7QUFDQTtBQUNBLFNBQVMsaURBQVM7O0FBRWxCO0FBQ0E7QUFDQTtBQUNBLGFBQWEsaURBQVM7O0FBRXRCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUyxpREFBUzs7QUFFbEI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLGlEQUFTO0FBQ3BCLENBQUMsR0FBRyxTQUFNO0FBQ0ssaUlBQVU7QUFDekI7QUFDQTtBQUNBLENBQUMsbUJBQW1CLEU7Ozs7Ozs7Ozs7OztBQ3JQcEI7QUFBQTtBQUFBO0FBQUEiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguZDJiM2JmY2I2MjdkMGJiMWQ3ZWUuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBDdXN0b21CdXR0b25TdHlsZXMgZnJvbSBcIi4uLy4uL3N0eWxlcy9DdXN0b21CdXR0b24ubW9kdWxlLnNjc3NcIjtcclxuaW1wb3J0IENpcmN1bGFyUHJvZ3Jlc3MgZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlL0NpcmN1bGFyUHJvZ3Jlc3NcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEN1c3RvbUJ1dHRvbih7IGlzTG9hZGluZywgbmFtZSwgdHlwZSwgb25DbGljayB9KSB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxidXR0b25cclxuICAgICAgdHlwZT17dHlwZX1cclxuICAgICAgY2xhc3NOYW1lPXtDdXN0b21CdXR0b25TdHlsZXMuQ3VzdG9tQnV0dG9ufVxyXG4gICAgICBvbkNsaWNrPXtvbkNsaWNrfVxyXG4gICAgPlxyXG4gICAgICB7aXNMb2FkaW5nID8gPENpcmN1bGFyUHJvZ3Jlc3MgZGlzYWJsZVNocmluayAvPiA6IG5hbWV9XHJcbiAgICA8L2J1dHRvbj5cclxuICApO1xyXG59XHJcbiIsImltcG9ydCBfZXh0ZW5kcyBmcm9tIFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vZXh0ZW5kc1wiO1xuaW1wb3J0IF9vYmplY3RXaXRob3V0UHJvcGVydGllcyBmcm9tIFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vb2JqZWN0V2l0aG91dFByb3BlcnRpZXNcIjtcbmltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQgY2xzeCBmcm9tICdjbHN4JztcbmltcG9ydCB7IGNoYWluUHJvcFR5cGVzIH0gZnJvbSAnQG1hdGVyaWFsLXVpL3V0aWxzJztcbmltcG9ydCB3aXRoU3R5bGVzIGZyb20gJy4uL3N0eWxlcy93aXRoU3R5bGVzJztcbmltcG9ydCBjYXBpdGFsaXplIGZyb20gJy4uL3V0aWxzL2NhcGl0YWxpemUnO1xudmFyIFNJWkUgPSA0NDtcblxuZnVuY3Rpb24gZ2V0UmVsYXRpdmVWYWx1ZSh2YWx1ZSwgbWluLCBtYXgpIHtcbiAgcmV0dXJuIChNYXRoLm1pbihNYXRoLm1heChtaW4sIHZhbHVlKSwgbWF4KSAtIG1pbikgLyAobWF4IC0gbWluKTtcbn1cblxuZnVuY3Rpb24gZWFzZU91dCh0KSB7XG4gIHQgPSBnZXRSZWxhdGl2ZVZhbHVlKHQsIDAsIDEpOyAvLyBodHRwczovL2dpc3QuZ2l0aHViLmNvbS9ncmUvMTY1MDI5NFxuXG4gIHQgPSAodCAtPSAxKSAqIHQgKiB0ICsgMTtcbiAgcmV0dXJuIHQ7XG59XG5cbmZ1bmN0aW9uIGVhc2VJbih0KSB7XG4gIHJldHVybiB0ICogdDtcbn1cblxuZXhwb3J0IHZhciBzdHlsZXMgPSBmdW5jdGlvbiBzdHlsZXModGhlbWUpIHtcbiAgcmV0dXJuIHtcbiAgICAvKiBTdHlsZXMgYXBwbGllZCB0byB0aGUgcm9vdCBlbGVtZW50LiAqL1xuICAgIHJvb3Q6IHtcbiAgICAgIGRpc3BsYXk6ICdpbmxpbmUtYmxvY2snXG4gICAgfSxcblxuICAgIC8qIFN0eWxlcyBhcHBsaWVkIHRvIHRoZSByb290IGVsZW1lbnQgaWYgYHZhcmlhbnQ9XCJzdGF0aWNcImAuICovXG4gICAgc3RhdGljOiB7XG4gICAgICB0cmFuc2l0aW9uOiB0aGVtZS50cmFuc2l0aW9ucy5jcmVhdGUoJ3RyYW5zZm9ybScpXG4gICAgfSxcblxuICAgIC8qIFN0eWxlcyBhcHBsaWVkIHRvIHRoZSByb290IGVsZW1lbnQgaWYgYHZhcmlhbnQ9XCJpbmRldGVybWluYXRlXCJgLiAqL1xuICAgIGluZGV0ZXJtaW5hdGU6IHtcbiAgICAgIGFuaW1hdGlvbjogJyRjaXJjdWxhci1yb3RhdGUgMS40cyBsaW5lYXIgaW5maW5pdGUnXG4gICAgfSxcblxuICAgIC8qIFN0eWxlcyBhcHBsaWVkIHRvIHRoZSByb290IGVsZW1lbnQgaWYgYGNvbG9yPVwicHJpbWFyeVwiYC4gKi9cbiAgICBjb2xvclByaW1hcnk6IHtcbiAgICAgIGNvbG9yOiB0aGVtZS5wYWxldHRlLnByaW1hcnkubWFpblxuICAgIH0sXG5cbiAgICAvKiBTdHlsZXMgYXBwbGllZCB0byB0aGUgcm9vdCBlbGVtZW50IGlmIGBjb2xvcj1cInNlY29uZGFyeVwiYC4gKi9cbiAgICBjb2xvclNlY29uZGFyeToge1xuICAgICAgY29sb3I6IHRoZW1lLnBhbGV0dGUuc2Vjb25kYXJ5Lm1haW5cbiAgICB9LFxuXG4gICAgLyogU3R5bGVzIGFwcGxpZWQgdG8gdGhlIGBzdmdgIGVsZW1lbnQuICovXG4gICAgc3ZnOiB7XG4gICAgICBkaXNwbGF5OiAnYmxvY2snIC8vIEtlZXBzIHRoZSBwcm9ncmVzcyBjZW50ZXJlZFxuXG4gICAgfSxcblxuICAgIC8qIFN0eWxlcyBhcHBsaWVkIHRvIHRoZSBgY2lyY2xlYCBzdmcgcGF0aC4gKi9cbiAgICBjaXJjbGU6IHtcbiAgICAgIHN0cm9rZTogJ2N1cnJlbnRDb2xvcicgLy8gVXNlIGJ1dHQgdG8gZm9sbG93IHRoZSBzcGVjaWZpY2F0aW9uLCBieSBjaGFuY2UsIGl0J3MgYWxyZWFkeSB0aGUgZGVmYXVsdCBDU1MgdmFsdWUuXG4gICAgICAvLyBzdHJva2VMaW5lY2FwOiAnYnV0dCcsXG5cbiAgICB9LFxuXG4gICAgLyogU3R5bGVzIGFwcGxpZWQgdG8gdGhlIGBjaXJjbGVgIHN2ZyBwYXRoIGlmIGB2YXJpYW50PVwic3RhdGljXCJgLiAqL1xuICAgIGNpcmNsZVN0YXRpYzoge1xuICAgICAgdHJhbnNpdGlvbjogdGhlbWUudHJhbnNpdGlvbnMuY3JlYXRlKCdzdHJva2UtZGFzaG9mZnNldCcpXG4gICAgfSxcblxuICAgIC8qIFN0eWxlcyBhcHBsaWVkIHRvIHRoZSBgY2lyY2xlYCBzdmcgcGF0aCBpZiBgdmFyaWFudD1cImluZGV0ZXJtaW5hdGVcImAuICovXG4gICAgY2lyY2xlSW5kZXRlcm1pbmF0ZToge1xuICAgICAgYW5pbWF0aW9uOiAnJGNpcmN1bGFyLWRhc2ggMS40cyBlYXNlLWluLW91dCBpbmZpbml0ZScsXG4gICAgICAvLyBTb21lIGRlZmF1bHQgdmFsdWUgdGhhdCBsb29rcyBmaW5lIHdhaXRpbmcgZm9yIHRoZSBhbmltYXRpb24gdG8ga2lja3MgaW4uXG4gICAgICBzdHJva2VEYXNoYXJyYXk6ICc4MHB4LCAyMDBweCcsXG4gICAgICBzdHJva2VEYXNob2Zmc2V0OiAnMHB4JyAvLyBBZGQgdGhlIHVuaXQgdG8gZml4IGEgRWRnZSAxNiBhbmQgYmVsb3cgYnVnLlxuXG4gICAgfSxcbiAgICAnQGtleWZyYW1lcyBjaXJjdWxhci1yb3RhdGUnOiB7XG4gICAgICAnMCUnOiB7XG4gICAgICAgIC8vIEZpeCBJRSAxMSB3b2JibHlcbiAgICAgICAgdHJhbnNmb3JtT3JpZ2luOiAnNTAlIDUwJSdcbiAgICAgIH0sXG4gICAgICAnMTAwJSc6IHtcbiAgICAgICAgdHJhbnNmb3JtOiAncm90YXRlKDM2MGRlZyknXG4gICAgICB9XG4gICAgfSxcbiAgICAnQGtleWZyYW1lcyBjaXJjdWxhci1kYXNoJzoge1xuICAgICAgJzAlJzoge1xuICAgICAgICBzdHJva2VEYXNoYXJyYXk6ICcxcHgsIDIwMHB4JyxcbiAgICAgICAgc3Ryb2tlRGFzaG9mZnNldDogJzBweCdcbiAgICAgIH0sXG4gICAgICAnNTAlJzoge1xuICAgICAgICBzdHJva2VEYXNoYXJyYXk6ICcxMDBweCwgMjAwcHgnLFxuICAgICAgICBzdHJva2VEYXNob2Zmc2V0OiAnLTE1cHgnXG4gICAgICB9LFxuICAgICAgJzEwMCUnOiB7XG4gICAgICAgIHN0cm9rZURhc2hhcnJheTogJzEwMHB4LCAyMDBweCcsXG4gICAgICAgIHN0cm9rZURhc2hvZmZzZXQ6ICctMTI1cHgnXG4gICAgICB9XG4gICAgfSxcblxuICAgIC8qIFN0eWxlcyBhcHBsaWVkIHRvIHRoZSBgY2lyY2xlYCBzdmcgcGF0aCBpZiBgZGlzYWJsZVNocmluaz17dHJ1ZX1gLiAqL1xuICAgIGNpcmNsZURpc2FibGVTaHJpbms6IHtcbiAgICAgIGFuaW1hdGlvbjogJ25vbmUnXG4gICAgfVxuICB9O1xufTtcbi8qKlxuICogIyMgQVJJQVxuICpcbiAqIElmIHRoZSBwcm9ncmVzcyBiYXIgaXMgZGVzY3JpYmluZyB0aGUgbG9hZGluZyBwcm9ncmVzcyBvZiBhIHBhcnRpY3VsYXIgcmVnaW9uIG9mIGEgcGFnZSxcbiAqIHlvdSBzaG91bGQgdXNlIGBhcmlhLWRlc2NyaWJlZGJ5YCB0byBwb2ludCB0byB0aGUgcHJvZ3Jlc3MgYmFyLCBhbmQgc2V0IHRoZSBgYXJpYS1idXN5YFxuICogYXR0cmlidXRlIHRvIGB0cnVlYCBvbiB0aGF0IHJlZ2lvbiB1bnRpbCBpdCBoYXMgZmluaXNoZWQgbG9hZGluZy5cbiAqL1xuXG52YXIgQ2lyY3VsYXJQcm9ncmVzcyA9IC8qI19fUFVSRV9fKi9SZWFjdC5mb3J3YXJkUmVmKGZ1bmN0aW9uIENpcmN1bGFyUHJvZ3Jlc3MocHJvcHMsIHJlZikge1xuICB2YXIgY2xhc3NlcyA9IHByb3BzLmNsYXNzZXMsXG4gICAgICBjbGFzc05hbWUgPSBwcm9wcy5jbGFzc05hbWUsXG4gICAgICBfcHJvcHMkY29sb3IgPSBwcm9wcy5jb2xvcixcbiAgICAgIGNvbG9yID0gX3Byb3BzJGNvbG9yID09PSB2b2lkIDAgPyAncHJpbWFyeScgOiBfcHJvcHMkY29sb3IsXG4gICAgICBfcHJvcHMkZGlzYWJsZVNocmluayA9IHByb3BzLmRpc2FibGVTaHJpbmssXG4gICAgICBkaXNhYmxlU2hyaW5rID0gX3Byb3BzJGRpc2FibGVTaHJpbmsgPT09IHZvaWQgMCA/IGZhbHNlIDogX3Byb3BzJGRpc2FibGVTaHJpbmssXG4gICAgICBfcHJvcHMkc2l6ZSA9IHByb3BzLnNpemUsXG4gICAgICBzaXplID0gX3Byb3BzJHNpemUgPT09IHZvaWQgMCA/IDQwIDogX3Byb3BzJHNpemUsXG4gICAgICBzdHlsZSA9IHByb3BzLnN0eWxlLFxuICAgICAgX3Byb3BzJHRoaWNrbmVzcyA9IHByb3BzLnRoaWNrbmVzcyxcbiAgICAgIHRoaWNrbmVzcyA9IF9wcm9wcyR0aGlja25lc3MgPT09IHZvaWQgMCA/IDMuNiA6IF9wcm9wcyR0aGlja25lc3MsXG4gICAgICBfcHJvcHMkdmFsdWUgPSBwcm9wcy52YWx1ZSxcbiAgICAgIHZhbHVlID0gX3Byb3BzJHZhbHVlID09PSB2b2lkIDAgPyAwIDogX3Byb3BzJHZhbHVlLFxuICAgICAgX3Byb3BzJHZhcmlhbnQgPSBwcm9wcy52YXJpYW50LFxuICAgICAgdmFyaWFudCA9IF9wcm9wcyR2YXJpYW50ID09PSB2b2lkIDAgPyAnaW5kZXRlcm1pbmF0ZScgOiBfcHJvcHMkdmFyaWFudCxcbiAgICAgIG90aGVyID0gX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzKHByb3BzLCBbXCJjbGFzc2VzXCIsIFwiY2xhc3NOYW1lXCIsIFwiY29sb3JcIiwgXCJkaXNhYmxlU2hyaW5rXCIsIFwic2l6ZVwiLCBcInN0eWxlXCIsIFwidGhpY2tuZXNzXCIsIFwidmFsdWVcIiwgXCJ2YXJpYW50XCJdKTtcblxuICB2YXIgY2lyY2xlU3R5bGUgPSB7fTtcbiAgdmFyIHJvb3RTdHlsZSA9IHt9O1xuICB2YXIgcm9vdFByb3BzID0ge307XG5cbiAgaWYgKHZhcmlhbnQgPT09ICdkZXRlcm1pbmF0ZScgfHwgdmFyaWFudCA9PT0gJ3N0YXRpYycpIHtcbiAgICB2YXIgY2lyY3VtZmVyZW5jZSA9IDIgKiBNYXRoLlBJICogKChTSVpFIC0gdGhpY2tuZXNzKSAvIDIpO1xuICAgIGNpcmNsZVN0eWxlLnN0cm9rZURhc2hhcnJheSA9IGNpcmN1bWZlcmVuY2UudG9GaXhlZCgzKTtcbiAgICByb290UHJvcHNbJ2FyaWEtdmFsdWVub3cnXSA9IE1hdGgucm91bmQodmFsdWUpO1xuXG4gICAgaWYgKHZhcmlhbnQgPT09ICdzdGF0aWMnKSB7XG4gICAgICBjaXJjbGVTdHlsZS5zdHJva2VEYXNob2Zmc2V0ID0gXCJcIi5jb25jYXQoKCgxMDAgLSB2YWx1ZSkgLyAxMDAgKiBjaXJjdW1mZXJlbmNlKS50b0ZpeGVkKDMpLCBcInB4XCIpO1xuICAgICAgcm9vdFN0eWxlLnRyYW5zZm9ybSA9ICdyb3RhdGUoLTkwZGVnKSc7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNpcmNsZVN0eWxlLnN0cm9rZURhc2hvZmZzZXQgPSBcIlwiLmNvbmNhdCgoZWFzZUluKCgxMDAgLSB2YWx1ZSkgLyAxMDApICogY2lyY3VtZmVyZW5jZSkudG9GaXhlZCgzKSwgXCJweFwiKTtcbiAgICAgIHJvb3RTdHlsZS50cmFuc2Zvcm0gPSBcInJvdGF0ZShcIi5jb25jYXQoKGVhc2VPdXQodmFsdWUgLyA3MCkgKiAyNzApLnRvRml4ZWQoMyksIFwiZGVnKVwiKTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwgX2V4dGVuZHMoe1xuICAgIGNsYXNzTmFtZTogY2xzeChjbGFzc2VzLnJvb3QsIGNsYXNzTmFtZSwgY29sb3IgIT09ICdpbmhlcml0JyAmJiBjbGFzc2VzW1wiY29sb3JcIi5jb25jYXQoY2FwaXRhbGl6ZShjb2xvcikpXSwge1xuICAgICAgJ2luZGV0ZXJtaW5hdGUnOiBjbGFzc2VzLmluZGV0ZXJtaW5hdGUsXG4gICAgICAnc3RhdGljJzogY2xhc3Nlcy5zdGF0aWNcbiAgICB9W3ZhcmlhbnRdKSxcbiAgICBzdHlsZTogX2V4dGVuZHMoe1xuICAgICAgd2lkdGg6IHNpemUsXG4gICAgICBoZWlnaHQ6IHNpemVcbiAgICB9LCByb290U3R5bGUsIHN0eWxlKSxcbiAgICByZWY6IHJlZixcbiAgICByb2xlOiBcInByb2dyZXNzYmFyXCJcbiAgfSwgcm9vdFByb3BzLCBvdGhlciksIC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KFwic3ZnXCIsIHtcbiAgICBjbGFzc05hbWU6IGNsYXNzZXMuc3ZnLFxuICAgIHZpZXdCb3g6IFwiXCIuY29uY2F0KFNJWkUgLyAyLCBcIiBcIikuY29uY2F0KFNJWkUgLyAyLCBcIiBcIikuY29uY2F0KFNJWkUsIFwiIFwiKS5jb25jYXQoU0laRSlcbiAgfSwgLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoXCJjaXJjbGVcIiwge1xuICAgIGNsYXNzTmFtZTogY2xzeChjbGFzc2VzLmNpcmNsZSwgZGlzYWJsZVNocmluayAmJiBjbGFzc2VzLmNpcmNsZURpc2FibGVTaHJpbmssIHtcbiAgICAgICdpbmRldGVybWluYXRlJzogY2xhc3Nlcy5jaXJjbGVJbmRldGVybWluYXRlLFxuICAgICAgJ3N0YXRpYyc6IGNsYXNzZXMuY2lyY2xlU3RhdGljXG4gICAgfVt2YXJpYW50XSksXG4gICAgc3R5bGU6IGNpcmNsZVN0eWxlLFxuICAgIGN4OiBTSVpFLFxuICAgIGN5OiBTSVpFLFxuICAgIHI6IChTSVpFIC0gdGhpY2tuZXNzKSAvIDIsXG4gICAgZmlsbDogXCJub25lXCIsXG4gICAgc3Ryb2tlV2lkdGg6IHRoaWNrbmVzc1xuICB9KSkpO1xufSk7XG5wcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIgPyBDaXJjdWxhclByb2dyZXNzLnByb3BUeXBlcyA9IHtcbiAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gV2FybmluZyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAvLyB8IFRoZXNlIFByb3BUeXBlcyBhcmUgZ2VuZXJhdGVkIGZyb20gdGhlIFR5cGVTY3JpcHQgdHlwZSBkZWZpbml0aW9ucyB8XG4gIC8vIHwgICAgIFRvIHVwZGF0ZSB0aGVtIGVkaXQgdGhlIGQudHMgZmlsZSBhbmQgcnVuIFwieWFybiBwcm9wdHlwZXNcIiAgICAgfFxuICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cbiAgLyoqXG4gICAqIE92ZXJyaWRlIG9yIGV4dGVuZCB0aGUgc3R5bGVzIGFwcGxpZWQgdG8gdGhlIGNvbXBvbmVudC5cbiAgICogU2VlIFtDU1MgQVBJXSgjY3NzKSBiZWxvdyBmb3IgbW9yZSBkZXRhaWxzLlxuICAgKi9cbiAgY2xhc3NlczogUHJvcFR5cGVzLm9iamVjdCxcblxuICAvKipcbiAgICogQGlnbm9yZVxuICAgKi9cbiAgY2xhc3NOYW1lOiBQcm9wVHlwZXMuc3RyaW5nLFxuXG4gIC8qKlxuICAgKiBUaGUgY29sb3Igb2YgdGhlIGNvbXBvbmVudC4gSXQgc3VwcG9ydHMgdGhvc2UgdGhlbWUgY29sb3JzIHRoYXQgbWFrZSBzZW5zZSBmb3IgdGhpcyBjb21wb25lbnQuXG4gICAqL1xuICBjb2xvcjogUHJvcFR5cGVzLm9uZU9mKFsnaW5oZXJpdCcsICdwcmltYXJ5JywgJ3NlY29uZGFyeSddKSxcblxuICAvKipcbiAgICogSWYgYHRydWVgLCB0aGUgc2hyaW5rIGFuaW1hdGlvbiBpcyBkaXNhYmxlZC5cbiAgICogVGhpcyBvbmx5IHdvcmtzIGlmIHZhcmlhbnQgaXMgYGluZGV0ZXJtaW5hdGVgLlxuICAgKi9cbiAgZGlzYWJsZVNocmluazogY2hhaW5Qcm9wVHlwZXMoUHJvcFR5cGVzLmJvb2wsIGZ1bmN0aW9uIChwcm9wcykge1xuICAgIGlmIChwcm9wcy5kaXNhYmxlU2hyaW5rICYmIHByb3BzLnZhcmlhbnQgJiYgcHJvcHMudmFyaWFudCAhPT0gJ2luZGV0ZXJtaW5hdGUnKSB7XG4gICAgICByZXR1cm4gbmV3IEVycm9yKCdNYXRlcmlhbC1VSTogWW91IGhhdmUgcHJvdmlkZWQgdGhlIGBkaXNhYmxlU2hyaW5rYCBwcm9wICcgKyAnd2l0aCBhIHZhcmlhbnQgb3RoZXIgdGhhbiBgaW5kZXRlcm1pbmF0ZWAuIFRoaXMgd2lsbCBoYXZlIG5vIGVmZmVjdC4nKTtcbiAgICB9XG5cbiAgICByZXR1cm4gbnVsbDtcbiAgfSksXG5cbiAgLyoqXG4gICAqIFRoZSBzaXplIG9mIHRoZSBjaXJjbGUuXG4gICAqIElmIHVzaW5nIGEgbnVtYmVyLCB0aGUgcGl4ZWwgdW5pdCBpcyBhc3N1bWVkLlxuICAgKiBJZiB1c2luZyBhIHN0cmluZywgeW91IG5lZWQgdG8gcHJvdmlkZSB0aGUgQ1NTIHVuaXQsIGUuZyAnM3JlbScuXG4gICAqL1xuICBzaXplOiBQcm9wVHlwZXMub25lT2ZUeXBlKFtQcm9wVHlwZXMubnVtYmVyLCBQcm9wVHlwZXMuc3RyaW5nXSksXG5cbiAgLyoqXG4gICAqIEBpZ25vcmVcbiAgICovXG4gIHN0eWxlOiBQcm9wVHlwZXMub2JqZWN0LFxuXG4gIC8qKlxuICAgKiBUaGUgdGhpY2tuZXNzIG9mIHRoZSBjaXJjbGUuXG4gICAqL1xuICB0aGlja25lc3M6IFByb3BUeXBlcy5udW1iZXIsXG5cbiAgLyoqXG4gICAqIFRoZSB2YWx1ZSBvZiB0aGUgcHJvZ3Jlc3MgaW5kaWNhdG9yIGZvciB0aGUgZGV0ZXJtaW5hdGUgYW5kIHN0YXRpYyB2YXJpYW50cy5cbiAgICogVmFsdWUgYmV0d2VlbiAwIGFuZCAxMDAuXG4gICAqL1xuICB2YWx1ZTogUHJvcFR5cGVzLm51bWJlcixcblxuICAvKipcbiAgICogVGhlIHZhcmlhbnQgdG8gdXNlLlxuICAgKiBVc2UgaW5kZXRlcm1pbmF0ZSB3aGVuIHRoZXJlIGlzIG5vIHByb2dyZXNzIHZhbHVlLlxuICAgKi9cbiAgdmFyaWFudDogUHJvcFR5cGVzLm9uZU9mKFsnZGV0ZXJtaW5hdGUnLCAnaW5kZXRlcm1pbmF0ZScsICdzdGF0aWMnXSlcbn0gOiB2b2lkIDA7XG5leHBvcnQgZGVmYXVsdCB3aXRoU3R5bGVzKHN0eWxlcywge1xuICBuYW1lOiAnTXVpQ2lyY3VsYXJQcm9ncmVzcycsXG4gIGZsaXA6IGZhbHNlXG59KShDaXJjdWxhclByb2dyZXNzKTsiLCJleHBvcnQgeyBkZWZhdWx0IH0gZnJvbSAnLi9DaXJjdWxhclByb2dyZXNzJzsiXSwic291cmNlUm9vdCI6IiJ9