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
/* harmony import */ var _babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/Paper */ "./node_modules/@material-ui/core/esm/Paper/index.js");
/* harmony import */ var react_final_form__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-final-form */ "./node_modules/react-final-form/dist/react-final-form.es.js");
/* harmony import */ var _material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/TextField */ "./node_modules/@material-ui/core/esm/TextField/index.js");
/* harmony import */ var _xstate_react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @xstate/react */ "./node_modules/@xstate/react/es/index.js");
/* harmony import */ var xstate__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! xstate */ "./node_modules/xstate/es/index.js");
/* harmony import */ var _styles_UserForm_module_scss__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../styles/UserForm.module.scss */ "./styles/UserForm.module.scss");
/* harmony import */ var _styles_UserForm_module_scss__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_styles_UserForm_module_scss__WEBPACK_IMPORTED_MODULE_7__);

var _jsxFileName = "C:\\Users\\vstepnova\\Desktop\\test1\\components\\UserForm.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;





var userInfo = Object(xstate__WEBPACK_IMPORTED_MODULE_6__["Machine"])(config);

var _useMachine = Object(_xstate_react__WEBPACK_IMPORTED_MODULE_5__["useMachine"])(ramMachine),
    _useMachine2 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useMachine, 2),
    info = _useMachine2[0],
    send = _useMachine2[1];


var styles = {
  MuiPaper: {
    background: "#FFFFFF",
    padding: 45,
    boxSizing: "border-box",
    boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.15)",
    borderRadius: 10
  },
  TextField: {
    height: 57,
    width: 254,
    left: 0
  }
};
var fields = [{
  id: 0,
  name: "userName",
  label: "Фамилия и имя",
  iconPath: "/badge.png"
}, {
  id: 1,
  name: "email",
  label: "E-mail",
  iconPath: "/mail.png"
}, {
  id: 2,
  name: "phoneNumber",
  label: "Номер телефона",
  iconPath: "/phone.png"
}];
function UserForm() {
  var _this = this;

  var renderUserForm = function renderUserForm(fields) {
    return fields.map(function (field) {
      return __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, __jsx(react_final_form__WEBPACK_IMPORTED_MODULE_3__["Field"], {
        name: field.name,
        style: styles.TextField,
        render: function render() {
          return __jsx("div", {
            className: _styles_UserForm_module_scss__WEBPACK_IMPORTED_MODULE_7___default.a.FieldItem,
            __self: _this,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 45,
              columnNumber: 13
            }
          }, __jsx("label", {
            "for": field.id,
            __self: _this,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 46,
              columnNumber: 15
            }
          }, __jsx("img", {
            src: field.iconPath,
            className: _styles_UserForm_module_scss__WEBPACK_IMPORTED_MODULE_7___default.a.FieldIcon,
            alt: field.label,
            __self: _this,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 47,
              columnNumber: 17
            }
          })), __jsx(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_4__["default"], {
            id: field.id,
            label: field.label,
            style: styles.TextField,
            variant: "outlined",
            __self: _this,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 53,
              columnNumber: 15
            }
          }));
        },
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 41,
          columnNumber: 9
        }
      }), fields.length - 1 !== field.id ? __jsx("div", {
        className: _styles_UserForm_module_scss__WEBPACK_IMPORTED_MODULE_7___default.a.Divider,
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 63,
          columnNumber: 11
        }
      }) : null);
    });
  };

  return __jsx(_material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_2__["default"], {
    style: styles.MuiPaper,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 69,
      columnNumber: 5
    }
  }, __jsx(react_final_form__WEBPACK_IMPORTED_MODULE_3__["Form"], {
    onSubmit: function onSubmit() {
      return send({
        type: "SUBMIT"
      });
    } // validate={validate}
    ,
    render: function render(_ref) {
      var handleSubmit = _ref.handleSubmit;
      return __jsx("form", {
        onSubmit: handleSubmit,
        className: _styles_UserForm_module_scss__WEBPACK_IMPORTED_MODULE_7___default.a.UserForm,
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 74,
          columnNumber: 11
        }
      }, __jsx("section", {
        className: _styles_UserForm_module_scss__WEBPACK_IMPORTED_MODULE_7___default.a.MainFormContent,
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 75,
          columnNumber: 13
        }
      }, renderUserForm(fields)), __jsx("button", {
        type: "submit",
        className: _styles_UserForm_module_scss__WEBPACK_IMPORTED_MODULE_7___default.a.SubmitButton,
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 79,
          columnNumber: 13
        }
      }, "\u0421\u043E\u0445\u0440\u0430\u043D\u0438\u0442\u044C \u0438\u0437\u043C\u0435\u043D\u0435\u043D\u0438\u044F"));
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 70,
      columnNumber: 7
    }
  }));
}
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

/***/ "./node_modules/@xstate/react/es/index.js":
/*!************************************************!*\
  !*** ./node_modules/@xstate/react/es/index.js ***!
  \************************************************/
/*! exports provided: useMachine, asEffect, asLayoutEffect, useService, useActor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _useMachine__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./useMachine */ "./node_modules/@xstate/react/es/useMachine.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useMachine", function() { return _useMachine__WEBPACK_IMPORTED_MODULE_0__["useMachine"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "asEffect", function() { return _useMachine__WEBPACK_IMPORTED_MODULE_0__["asEffect"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "asLayoutEffect", function() { return _useMachine__WEBPACK_IMPORTED_MODULE_0__["asLayoutEffect"]; });

/* harmony import */ var _useService__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./useService */ "./node_modules/@xstate/react/es/useService.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useService", function() { return _useService__WEBPACK_IMPORTED_MODULE_1__["useService"]; });

/* harmony import */ var _useActor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./useActor */ "./node_modules/@xstate/react/es/useActor.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useActor", function() { return _useActor__WEBPACK_IMPORTED_MODULE_2__["useActor"]; });






/***/ }),

/***/ "./node_modules/@xstate/react/es/useActor.js":
/*!***************************************************!*\
  !*** ./node_modules/@xstate/react/es/useActor.js ***!
  \***************************************************/
/*! exports provided: useActor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useActor", function() { return useActor; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var __read = (undefined && undefined.__read) || function (o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
};

function useActor(actorRef, getSnapshot) {
    if (getSnapshot === void 0) { getSnapshot = function (a) {
        return 'state' in a ? a.state : undefined;
    }; }
    // const actor = useMemo(() => resolveActor(actorLike), [actorLike]);
    var deferredEventsRef = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])([]);
    var _a = __read(Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(function () { return getSnapshot(actorRef); }), 2), current = _a[0], setCurrent = _a[1];
    var send = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(function (event) {
        // If the previous actor is a deferred actor,
        // queue the events so that they can be replayed
        // on the non-deferred actor.
        if ('deferred' in actorRef && actorRef.deferred) {
            deferredEventsRef.current.push(event);
        }
        else {
            actorRef.send(event);
        }
    }, [actorRef]);
    Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
        setCurrent(getSnapshot(actorRef));
        var subscription = actorRef.subscribe(setCurrent);
        // Dequeue deferred events from the previous deferred actorRef
        while (deferredEventsRef.current.length > 0) {
            var deferredEvent = deferredEventsRef.current.shift();
            actorRef.send(deferredEvent);
        }
        return function () {
            subscription.unsubscribe();
        };
    }, [actorRef]);
    return [current, send];
}


/***/ }),

/***/ "./node_modules/@xstate/react/es/useConstant.js":
/*!******************************************************!*\
  !*** ./node_modules/@xstate/react/es/useConstant.js ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return useConstant; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

function useConstant(fn) {
    var ref = react__WEBPACK_IMPORTED_MODULE_0__["useRef"]();
    if (!ref.current) {
        ref.current = { v: fn() };
    }
    return ref.current.v;
}


/***/ }),

/***/ "./node_modules/@xstate/react/es/useMachine.js":
/*!*****************************************************!*\
  !*** ./node_modules/@xstate/react/es/useMachine.js ***!
  \*****************************************************/
/*! exports provided: asEffect, asLayoutEffect, useMachine */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "asEffect", function() { return asEffect; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "asLayoutEffect", function() { return asLayoutEffect; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useMachine", function() { return useMachine; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var use_isomorphic_layout_effect__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! use-isomorphic-layout-effect */ "./node_modules/use-isomorphic-layout-effect/dist/use-isomorphic-layout-effect.browser.esm.js");
/* harmony import */ var xstate__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! xstate */ "./node_modules/xstate/es/index.js");
/* harmony import */ var _useConstant__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./useConstant */ "./node_modules/@xstate/react/es/useConstant.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./utils */ "./node_modules/@xstate/react/es/utils.js");
var __assign = (undefined && undefined.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __rest = (undefined && undefined.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
var __read = (undefined && undefined.__read) || function (o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
};
var __spread = (undefined && undefined.__spread) || function () {
    for (var ar = [], i = 0; i < arguments.length; i++) ar = ar.concat(__read(arguments[i]));
    return ar;
};





var ReactEffectType;
(function (ReactEffectType) {
    ReactEffectType[ReactEffectType["Effect"] = 1] = "Effect";
    ReactEffectType[ReactEffectType["LayoutEffect"] = 2] = "LayoutEffect";
})(ReactEffectType || (ReactEffectType = {}));
function createReactActionFunction(exec, tag) {
    var effectExec = function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        // don't execute; just return
        return function () {
            return exec.apply(void 0, __spread(args));
        };
    };
    Object.defineProperties(effectExec, {
        name: { value: "effect:" + exec.name },
        __effect: { value: tag }
    });
    return effectExec;
}
function asEffect(exec) {
    return createReactActionFunction(exec, ReactEffectType.Effect);
}
function asLayoutEffect(exec) {
    return createReactActionFunction(exec, ReactEffectType.LayoutEffect);
}
function executeEffect(action, state) {
    var exec = action.exec;
    var originalExec = exec(state.context, state._event.data, {
        action: action,
        state: state,
        _event: state._event
    });
    originalExec();
}
function useMachine(getMachine, options) {
    if (options === void 0) { options = {}; }
    var machine = Object(_useConstant__WEBPACK_IMPORTED_MODULE_3__["default"])(function () {
        return typeof getMachine === 'function' ? getMachine() : getMachine;
    });
    if ( true &&
        typeof getMachine !== 'function') {
        var _a = __read(Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(machine), 1), initialMachine = _a[0];
        if (machine !== initialMachine) {
            console.warn('Machine given to `useMachine` has changed between renders. This is not supported and might lead to unexpected results.\n' +
                'Please make sure that you pass the same Machine as argument each time.');
        }
    }
    var context = options.context, guards = options.guards, actions = options.actions, activities = options.activities, services = options.services, delays = options.delays, rehydratedState = options.state, interpreterOptions = __rest(options, ["context", "guards", "actions", "activities", "services", "delays", "state"]);
    var _b = __read(Object(_useConstant__WEBPACK_IMPORTED_MODULE_3__["default"])(function () {
        var machineConfig = {
            context: context,
            guards: guards,
            actions: actions,
            activities: activities,
            services: services,
            delays: delays
        };
        var resolvedMachine = machine.withConfig(machineConfig, __assign(__assign({}, machine.context), context));
        return [
            resolvedMachine,
            Object(xstate__WEBPACK_IMPORTED_MODULE_2__["interpret"])(resolvedMachine, __assign({ deferEvents: true }, interpreterOptions))
        ];
    }), 2), resolvedMachine = _b[0], service = _b[1];
    var _c = __read(Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(function () {
        // Always read the initial state to properly initialize the machine
        // https://github.com/davidkpiano/xstate/issues/1334
        var initialState = resolvedMachine.initialState;
        return rehydratedState ? xstate__WEBPACK_IMPORTED_MODULE_2__["State"].create(rehydratedState) : initialState;
    }), 2), state = _c[0], setState = _c[1];
    var effectActionsRef = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])([]);
    var layoutEffectActionsRef = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])([]);
    Object(use_isomorphic_layout_effect__WEBPACK_IMPORTED_MODULE_1__["default"])(function () {
        service
            .onTransition(function (currentState) {
            var _a, _b;
            // Only change the current state if:
            // - the incoming state is the "live" initial state (since it might have new actors)
            // - OR the incoming state actually changed.
            //
            // The "live" initial state will have .changed === undefined.
            var initialStateChanged = currentState.changed === undefined &&
                Object.keys(currentState.children).length;
            if (currentState.changed || initialStateChanged) {
                setState(currentState);
            }
            if (currentState.actions.length) {
                var reactEffectActions = currentState.actions.filter(function (action) {
                    return (typeof action.exec === 'function' &&
                        '__effect' in
                            action.exec);
                });
                var _c = __read(Object(_utils__WEBPACK_IMPORTED_MODULE_4__["partition"])(reactEffectActions, function (action) {
                    return action.exec.__effect === ReactEffectType.Effect;
                }), 2), effectActions = _c[0], layoutEffectActions = _c[1];
                (_a = effectActionsRef.current).push.apply(_a, __spread(effectActions.map(function (effectAction) { return [effectAction, currentState]; })));
                (_b = layoutEffectActionsRef.current).push.apply(_b, __spread(layoutEffectActions.map(function (layoutEffectAction) { return [layoutEffectAction, currentState]; })));
            }
        })
            .start(rehydratedState ? xstate__WEBPACK_IMPORTED_MODULE_2__["State"].create(rehydratedState) : undefined);
        return function () {
            service.stop();
        };
    }, []);
    // Make sure actions and services are kept updated when they change.
    // This mutation assignment is safe because the service instance is only used
    // in one place -- this hook's caller.
    Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
        Object.assign(service.machine.options.actions, actions);
    }, [actions]);
    Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
        Object.assign(service.machine.options.services, services);
    }, [services]);
    // this is somewhat weird - this should always be flushed within useLayoutEffect
    // but we don't want to receive warnings about useLayoutEffect being used on the server
    // so we have to use `useIsomorphicLayoutEffect` to silence those warnings
    Object(use_isomorphic_layout_effect__WEBPACK_IMPORTED_MODULE_1__["default"])(function () {
        while (layoutEffectActionsRef.current.length) {
            var _a = __read(layoutEffectActionsRef.current.shift(), 2), layoutEffectAction = _a[0], effectState = _a[1];
            executeEffect(layoutEffectAction, effectState);
        }
    }, [state]); // https://github.com/davidkpiano/xstate/pull/1202#discussion_r429677773
    Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
        while (effectActionsRef.current.length) {
            var _a = __read(effectActionsRef.current.shift(), 2), effectAction = _a[0], effectState = _a[1];
            executeEffect(effectAction, effectState);
        }
    }, [state]);
    return [state, service.send, service];
}


/***/ }),

/***/ "./node_modules/@xstate/react/es/useService.js":
/*!*****************************************************!*\
  !*** ./node_modules/@xstate/react/es/useService.js ***!
  \*****************************************************/
/*! exports provided: fromService, useService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fromService", function() { return fromService; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useService", function() { return useService; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _useActor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./useActor */ "./node_modules/@xstate/react/es/useActor.js");


function fromService(service) {
    if ( true && !('machine' in service)) {
        throw new Error("Attempted to use an actor-like object instead of a service in the useService() hook. Please use the useActor() hook instead.");
    }
    var machine = service.machine;
    return {
        send: service.send.bind(service),
        subscribe: service.subscribe.bind(service),
        stop: service.stop,
        current: service.initialized ? service.state : machine.initialState,
        name: service.sessionId
    };
}
function useService(service) {
    var serviceActor = Object(react__WEBPACK_IMPORTED_MODULE_0__["useMemo"])(function () { return fromService(service); }, [service]);
    return Object(_useActor__WEBPACK_IMPORTED_MODULE_1__["useActor"])(serviceActor, function (actor) { return actor.current; });
}


/***/ }),

/***/ "./node_modules/@xstate/react/es/utils.js":
/*!************************************************!*\
  !*** ./node_modules/@xstate/react/es/utils.js ***!
  \************************************************/
/*! exports provided: partition */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "partition", function() { return partition; });
var __read = (undefined && undefined.__read) || function (o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
};
var __values = (undefined && undefined.__values) || function(o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
};
function partition(items, predicate) {
    var e_1, _a;
    var _b = __read([[], []], 2), truthy = _b[0], falsy = _b[1];
    try {
        for (var items_1 = __values(items), items_1_1 = items_1.next(); !items_1_1.done; items_1_1 = items_1.next()) {
            var item = items_1_1.value;
            if (predicate(item)) {
                truthy.push(item);
            }
            else {
                falsy.push(item);
            }
        }
    }
    catch (e_1_1) { e_1 = { error: e_1_1 }; }
    finally {
        try {
            if (items_1_1 && !items_1_1.done && (_a = items_1.return)) _a.call(items_1);
        }
        finally { if (e_1) throw e_1.error; }
    }
    return [truthy, falsy];
}


/***/ }),

/***/ "./node_modules/use-isomorphic-layout-effect/dist/use-isomorphic-layout-effect.browser.esm.js":
/*!****************************************************************************************************!*\
  !*** ./node_modules/use-isomorphic-layout-effect/dist/use-isomorphic-layout-effect.browser.esm.js ***!
  \****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);


var index =  react__WEBPACK_IMPORTED_MODULE_0__["useLayoutEffect"] ;

/* harmony default export */ __webpack_exports__["default"] = (index);


/***/ }),

/***/ "./node_modules/xstate/es/Actor.js":
/*!*****************************************!*\
  !*** ./node_modules/xstate/es/Actor.js ***!
  \*****************************************/
/*! exports provided: createDeferredActor, createInvocableActor, createNullActor, isActor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createDeferredActor", function() { return createDeferredActor; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createInvocableActor", function() { return createInvocableActor; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createNullActor", function() { return createNullActor; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isActor", function() { return isActor; });
/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils.js */ "./node_modules/xstate/es/utils.js");
/* harmony import */ var _serviceScope_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./serviceScope.js */ "./node_modules/xstate/es/serviceScope.js");



function createNullActor(id) {
  return {
    id: id,
    send: function () {
      return void 0;
    },
    subscribe: function () {
      return {
        unsubscribe: function () {
          return void 0;
        }
      };
    },
    toJSON: function () {
      return {
        id: id
      };
    }
  };
}
/**
 * Creates a deferred actor that is able to be invoked given the provided
 * invocation information in its `.meta` value.
 *
 * @param invokeDefinition The meta information needed to invoke the actor.
 */


function createInvocableActor(invokeDefinition, machine, context, _event) {
  var _a;

  var invokeSrc = Object(_utils_js__WEBPACK_IMPORTED_MODULE_0__["toInvokeSource"])(invokeDefinition.src);
  var serviceCreator = (_a = machine === null || machine === void 0 ? void 0 : machine.options.services) === null || _a === void 0 ? void 0 : _a[invokeSrc.type];
  var resolvedData = invokeDefinition.data ? Object(_utils_js__WEBPACK_IMPORTED_MODULE_0__["mapContext"])(invokeDefinition.data, context, _event) : undefined;
  var tempActor = serviceCreator ? createDeferredActor(serviceCreator, invokeDefinition.id, resolvedData) : createNullActor(invokeDefinition.id);
  tempActor.meta = invokeDefinition;
  return tempActor;
}

function createDeferredActor(entity, id, data) {
  var tempActor = createNullActor(id);
  tempActor.deferred = true;

  if (Object(_utils_js__WEBPACK_IMPORTED_MODULE_0__["isMachine"])(entity)) {
    // "mute" the existing service scope so potential spawned actors within the `.initialState` stay deferred here
    tempActor.state = Object(_serviceScope_js__WEBPACK_IMPORTED_MODULE_1__["provide"])(undefined, function () {
      return (data ? entity.withContext(data) : entity).initialState;
    });
  }

  return tempActor;
}

function isActor(item) {
  try {
    return typeof item.send === 'function';
  } catch (e) {
    return false;
  }
}



/***/ }),

/***/ "./node_modules/xstate/es/Machine.js":
/*!*******************************************!*\
  !*** ./node_modules/xstate/es/Machine.js ***!
  \*******************************************/
/*! exports provided: Machine, createMachine */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Machine", function() { return Machine; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createMachine", function() { return createMachine; });
/* harmony import */ var _StateNode_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./StateNode.js */ "./node_modules/xstate/es/StateNode.js");


function Machine(config, options, initialContext) {
  if (initialContext === void 0) {
    initialContext = config.context;
  }

  var resolvedInitialContext = typeof initialContext === 'function' ? initialContext() : initialContext;
  return new _StateNode_js__WEBPACK_IMPORTED_MODULE_0__["StateNode"](config, options, resolvedInitialContext);
}

function createMachine(config, options) {
  var resolvedInitialContext = typeof config.context === 'function' ? config.context() : config.context;
  return new _StateNode_js__WEBPACK_IMPORTED_MODULE_0__["StateNode"](config, options, resolvedInitialContext);
}



/***/ }),

/***/ "./node_modules/xstate/es/State.js":
/*!*****************************************!*\
  !*** ./node_modules/xstate/es/State.js ***!
  \*****************************************/
/*! exports provided: State, bindActionToState, isState, stateValuesEqual */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "State", function() { return State; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "bindActionToState", function() { return bindActionToState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isState", function() { return isState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "stateValuesEqual", function() { return stateValuesEqual; });
/* harmony import */ var _virtual_tslib_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_virtual/_tslib.js */ "./node_modules/xstate/es/_virtual/_tslib.js");
/* harmony import */ var _constants_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./constants.js */ "./node_modules/xstate/es/constants.js");
/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./utils.js */ "./node_modules/xstate/es/utils.js");
/* harmony import */ var _stateUtils_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./stateUtils.js */ "./node_modules/xstate/es/stateUtils.js");
/* harmony import */ var _actions_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./actions.js */ "./node_modules/xstate/es/actions.js");






function stateValuesEqual(a, b) {
  if (a === b) {
    return true;
  }

  if (a === undefined || b === undefined) {
    return false;
  }

  if (Object(_utils_js__WEBPACK_IMPORTED_MODULE_2__["isString"])(a) || Object(_utils_js__WEBPACK_IMPORTED_MODULE_2__["isString"])(b)) {
    return a === b;
  }

  var aKeys = Object(_utils_js__WEBPACK_IMPORTED_MODULE_2__["keys"])(a);
  var bKeys = Object(_utils_js__WEBPACK_IMPORTED_MODULE_2__["keys"])(b);
  return aKeys.length === bKeys.length && aKeys.every(function (key) {
    return stateValuesEqual(a[key], b[key]);
  });
}

function isState(state) {
  if (Object(_utils_js__WEBPACK_IMPORTED_MODULE_2__["isString"])(state)) {
    return false;
  }

  return 'value' in state && 'history' in state;
}

function bindActionToState(action, state) {
  var exec = action.exec;

  var boundAction = Object(_virtual_tslib_js__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(_virtual_tslib_js__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, action), {
    exec: exec !== undefined ? function () {
      return exec(state.context, state.event, {
        action: action,
        state: state,
        _event: state._event
      });
    } : undefined
  });

  return boundAction;
}

var State =
/*#__PURE__*/

/** @class */
function () {
  /**
   * Creates a new State instance.
   * @param value The state value
   * @param context The extended state
   * @param historyValue The tree representing historical values of the state nodes
   * @param history The previous state
   * @param actions An array of action objects to execute as side-effects
   * @param activities A mapping of activities and whether they are started (`true`) or stopped (`false`).
   * @param meta
   * @param events Internal event queue. Should be empty with run-to-completion semantics.
   * @param configuration
   */
  function State(config) {
    var _this = this;

    this.actions = [];
    this.activities = _constants_js__WEBPACK_IMPORTED_MODULE_1__["EMPTY_ACTIVITY_MAP"];
    this.meta = {};
    this.events = [];
    this.value = config.value;
    this.context = config.context;
    this._event = config._event;
    this._sessionid = config._sessionid;
    this.event = this._event.data;
    this.historyValue = config.historyValue;
    this.history = config.history;
    this.actions = config.actions || [];
    this.activities = config.activities || _constants_js__WEBPACK_IMPORTED_MODULE_1__["EMPTY_ACTIVITY_MAP"];
    this.meta = config.meta || {};
    this.events = config.events || [];
    this.matches = this.matches.bind(this);
    this.toStrings = this.toStrings.bind(this);
    this.configuration = config.configuration;
    this.transitions = config.transitions;
    this.children = config.children;
    this.done = !!config.done;
    Object.defineProperty(this, 'nextEvents', {
      get: function () {
        return Object(_stateUtils_js__WEBPACK_IMPORTED_MODULE_3__["nextEvents"])(_this.configuration);
      }
    });
  }
  /**
   * Creates a new State instance for the given `stateValue` and `context`.
   * @param stateValue
   * @param context
   */


  State.from = function (stateValue, context) {
    if (stateValue instanceof State) {
      if (stateValue.context !== context) {
        return new State({
          value: stateValue.value,
          context: context,
          _event: stateValue._event,
          _sessionid: null,
          historyValue: stateValue.historyValue,
          history: stateValue.history,
          actions: [],
          activities: stateValue.activities,
          meta: {},
          events: [],
          configuration: [],
          transitions: [],
          children: {}
        });
      }

      return stateValue;
    }

    var _event = _actions_js__WEBPACK_IMPORTED_MODULE_4__["initEvent"];
    return new State({
      value: stateValue,
      context: context,
      _event: _event,
      _sessionid: null,
      historyValue: undefined,
      history: undefined,
      actions: [],
      activities: undefined,
      meta: undefined,
      events: [],
      configuration: [],
      transitions: [],
      children: {}
    });
  };
  /**
   * Creates a new State instance for the given `config`.
   * @param config The state config
   */


  State.create = function (config) {
    return new State(config);
  };
  /**
   * Creates a new `State` instance for the given `stateValue` and `context` with no actions (side-effects).
   * @param stateValue
   * @param context
   */


  State.inert = function (stateValue, context) {
    if (stateValue instanceof State) {
      if (!stateValue.actions.length) {
        return stateValue;
      }

      var _event = _actions_js__WEBPACK_IMPORTED_MODULE_4__["initEvent"];
      return new State({
        value: stateValue.value,
        context: context,
        _event: _event,
        _sessionid: null,
        historyValue: stateValue.historyValue,
        history: stateValue.history,
        activities: stateValue.activities,
        configuration: stateValue.configuration,
        transitions: [],
        children: {}
      });
    }

    return State.from(stateValue, context);
  };
  /**
   * Returns an array of all the string leaf state node paths.
   * @param stateValue
   * @param delimiter The character(s) that separate each subpath in the string state node path.
   */


  State.prototype.toStrings = function (stateValue, delimiter) {
    var _this = this;

    if (stateValue === void 0) {
      stateValue = this.value;
    }

    if (delimiter === void 0) {
      delimiter = '.';
    }

    if (Object(_utils_js__WEBPACK_IMPORTED_MODULE_2__["isString"])(stateValue)) {
      return [stateValue];
    }

    var valueKeys = Object(_utils_js__WEBPACK_IMPORTED_MODULE_2__["keys"])(stateValue);
    return valueKeys.concat.apply(valueKeys, Object(_virtual_tslib_js__WEBPACK_IMPORTED_MODULE_0__["__spread"])(valueKeys.map(function (key) {
      return _this.toStrings(stateValue[key], delimiter).map(function (s) {
        return key + delimiter + s;
      });
    })));
  };

  State.prototype.toJSON = function () {
    var _a = this,
        configuration = _a.configuration,
        transitions = _a.transitions,
        jsonValues = Object(_virtual_tslib_js__WEBPACK_IMPORTED_MODULE_0__["__rest"])(_a, ["configuration", "transitions"]);

    return jsonValues;
  };
  /**
   * Whether the current state value is a subset of the given parent state value.
   * @param parentStateValue
   */


  State.prototype.matches = function (parentStateValue) {
    return Object(_utils_js__WEBPACK_IMPORTED_MODULE_2__["matchesState"])(parentStateValue, this.value);
  };

  return State;
}();



/***/ }),

/***/ "./node_modules/xstate/es/StateNode.js":
/*!*********************************************!*\
  !*** ./node_modules/xstate/es/StateNode.js ***!
  \*********************************************/
/*! exports provided: StateNode */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StateNode", function() { return StateNode; });
/* harmony import */ var _virtual_tslib_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_virtual/_tslib.js */ "./node_modules/xstate/es/_virtual/_tslib.js");
/* harmony import */ var _constants_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./constants.js */ "./node_modules/xstate/es/constants.js");
/* harmony import */ var _environment_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./environment.js */ "./node_modules/xstate/es/environment.js");
/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./utils.js */ "./node_modules/xstate/es/utils.js");
/* harmony import */ var _types_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./types.js */ "./node_modules/xstate/es/types.js");
/* harmony import */ var _stateUtils_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./stateUtils.js */ "./node_modules/xstate/es/stateUtils.js");
/* harmony import */ var _actionTypes_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./actionTypes.js */ "./node_modules/xstate/es/actionTypes.js");
/* harmony import */ var _actions_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./actions.js */ "./node_modules/xstate/es/actions.js");
/* harmony import */ var _State_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./State.js */ "./node_modules/xstate/es/State.js");
/* harmony import */ var _Actor_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./Actor.js */ "./node_modules/xstate/es/Actor.js");
/* harmony import */ var _invokeUtils_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./invokeUtils.js */ "./node_modules/xstate/es/invokeUtils.js");











var NULL_EVENT = '';
var STATE_IDENTIFIER = '#';
var WILDCARD = '*';
var EMPTY_OBJECT = {};

var isStateId = function (str) {
  return str[0] === STATE_IDENTIFIER;
};

var createDefaultOptions = function () {
  return {
    actions: {},
    guards: {},
    services: {},
    activities: {},
    delays: {}
  };
};

var validateArrayifiedTransitions = function (stateNode, event, transitions) {
  var hasNonLastUnguardedTarget = transitions.slice(0, -1).some(function (transition) {
    return !('cond' in transition) && !('in' in transition) && (Object(_utils_js__WEBPACK_IMPORTED_MODULE_3__["isString"])(transition.target) || Object(_utils_js__WEBPACK_IMPORTED_MODULE_3__["isMachine"])(transition.target));
  });
  var eventText = event === NULL_EVENT ? 'the transient event' : "event '" + event + "'";
  Object(_utils_js__WEBPACK_IMPORTED_MODULE_3__["warn"])(!hasNonLastUnguardedTarget, "One or more transitions for " + eventText + " on state '" + stateNode.id + "' are unreachable. " + "Make sure that the default transition is the last one defined.");
};

var StateNode =
/*#__PURE__*/

/** @class */
function () {
  function StateNode(
  /**
   * The raw config used to create the machine.
   */
  config, options,
  /**
   * The initial extended state
   */
  context) {
    var _this = this;

    this.config = config;
    this.context = context;
    /**
     * The order this state node appears. Corresponds to the implicit SCXML document order.
     */

    this.order = -1;
    this.__xstatenode = true;
    this.__cache = {
      events: undefined,
      relativeValue: new Map(),
      initialStateValue: undefined,
      initialState: undefined,
      on: undefined,
      transitions: undefined,
      candidates: {},
      delayedTransitions: undefined
    };
    this.idMap = {};
    this.options = Object.assign(createDefaultOptions(), options);
    this.parent = this.options._parent;
    this.key = this.config.key || this.options._key || this.config.id || '(machine)';
    this.machine = this.parent ? this.parent.machine : this;
    this.path = this.parent ? this.parent.path.concat(this.key) : [];
    this.delimiter = this.config.delimiter || (this.parent ? this.parent.delimiter : _constants_js__WEBPACK_IMPORTED_MODULE_1__["STATE_DELIMITER"]);
    this.id = this.config.id || Object(_virtual_tslib_js__WEBPACK_IMPORTED_MODULE_0__["__spread"])([this.machine.key], this.path).join(this.delimiter);
    this.version = this.parent ? this.parent.version : this.config.version;
    this.type = this.config.type || (this.config.parallel ? 'parallel' : this.config.states && Object(_utils_js__WEBPACK_IMPORTED_MODULE_3__["keys"])(this.config.states).length ? 'compound' : this.config.history ? 'history' : 'atomic');

    if (!_environment_js__WEBPACK_IMPORTED_MODULE_2__["IS_PRODUCTION"]) {
      Object(_utils_js__WEBPACK_IMPORTED_MODULE_3__["warn"])(!('parallel' in this.config), "The \"parallel\" property is deprecated and will be removed in version 4.1. " + (this.config.parallel ? "Replace with `type: 'parallel'`" : "Use `type: '" + this.type + "'`") + " in the config for state node '" + this.id + "' instead.");
    }

    this.initial = this.config.initial;
    this.states = this.config.states ? Object(_utils_js__WEBPACK_IMPORTED_MODULE_3__["mapValues"])(this.config.states, function (stateConfig, key) {
      var _a;

      var stateNode = new StateNode(stateConfig, {
        _parent: _this,
        _key: key
      });
      Object.assign(_this.idMap, Object(_virtual_tslib_js__WEBPACK_IMPORTED_MODULE_0__["__assign"])((_a = {}, _a[stateNode.id] = stateNode, _a), stateNode.idMap));
      return stateNode;
    }) : EMPTY_OBJECT; // Document order

    var order = 0;

    function dfs(stateNode) {
      var e_1, _a;

      stateNode.order = order++;

      try {
        for (var _b = Object(_virtual_tslib_js__WEBPACK_IMPORTED_MODULE_0__["__values"])(Object(_stateUtils_js__WEBPACK_IMPORTED_MODULE_5__["getChildren"])(stateNode)), _c = _b.next(); !_c.done; _c = _b.next()) {
          var child = _c.value;
          dfs(child);
        }
      } catch (e_1_1) {
        e_1 = {
          error: e_1_1
        };
      } finally {
        try {
          if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
        } finally {
          if (e_1) throw e_1.error;
        }
      }
    }

    dfs(this); // History config

    this.history = this.config.history === true ? 'shallow' : this.config.history || false;
    this._transient = !!this.config.always || (!this.config.on ? false : Array.isArray(this.config.on) ? this.config.on.some(function (_a) {
      var event = _a.event;
      return event === NULL_EVENT;
    }) : NULL_EVENT in this.config.on);
    this.strict = !!this.config.strict; // TODO: deprecate (entry)

    this.onEntry = Object(_utils_js__WEBPACK_IMPORTED_MODULE_3__["toArray"])(this.config.entry || this.config.onEntry).map(function (action) {
      return Object(_actions_js__WEBPACK_IMPORTED_MODULE_7__["toActionObject"])(action);
    }); // TODO: deprecate (exit)

    this.onExit = Object(_utils_js__WEBPACK_IMPORTED_MODULE_3__["toArray"])(this.config.exit || this.config.onExit).map(function (action) {
      return Object(_actions_js__WEBPACK_IMPORTED_MODULE_7__["toActionObject"])(action);
    });
    this.meta = this.config.meta;
    this.doneData = this.type === 'final' ? this.config.data : undefined;
    this.invoke = Object(_utils_js__WEBPACK_IMPORTED_MODULE_3__["toArray"])(this.config.invoke).map(function (invokeConfig, i) {
      var _a, _b;

      if (Object(_utils_js__WEBPACK_IMPORTED_MODULE_3__["isMachine"])(invokeConfig)) {
        _this.machine.options.services = Object(_virtual_tslib_js__WEBPACK_IMPORTED_MODULE_0__["__assign"])((_a = {}, _a[invokeConfig.id] = invokeConfig, _a), _this.machine.options.services);
        return Object(_invokeUtils_js__WEBPACK_IMPORTED_MODULE_10__["toInvokeDefinition"])({
          src: invokeConfig.id,
          id: invokeConfig.id
        });
      } else if (Object(_utils_js__WEBPACK_IMPORTED_MODULE_3__["isString"])(invokeConfig.src)) {
        return Object(_invokeUtils_js__WEBPACK_IMPORTED_MODULE_10__["toInvokeDefinition"])(Object(_virtual_tslib_js__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(_virtual_tslib_js__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, invokeConfig), {
          id: invokeConfig.id || invokeConfig.src,
          src: invokeConfig.src
        }));
      } else if (Object(_utils_js__WEBPACK_IMPORTED_MODULE_3__["isMachine"])(invokeConfig.src) || Object(_utils_js__WEBPACK_IMPORTED_MODULE_3__["isFunction"])(invokeConfig.src)) {
        var invokeSrc = _this.id + ":invocation[" + i + "]"; // TODO: util function

        _this.machine.options.services = Object(_virtual_tslib_js__WEBPACK_IMPORTED_MODULE_0__["__assign"])((_b = {}, _b[invokeSrc] = invokeConfig.src, _b), _this.machine.options.services);
        return Object(_invokeUtils_js__WEBPACK_IMPORTED_MODULE_10__["toInvokeDefinition"])(Object(_virtual_tslib_js__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(_virtual_tslib_js__WEBPACK_IMPORTED_MODULE_0__["__assign"])({
          id: invokeSrc
        }, invokeConfig), {
          src: invokeSrc
        }));
      } else {
        var invokeSource = invokeConfig.src;
        return Object(_invokeUtils_js__WEBPACK_IMPORTED_MODULE_10__["toInvokeDefinition"])(Object(_virtual_tslib_js__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(_virtual_tslib_js__WEBPACK_IMPORTED_MODULE_0__["__assign"])({
          id: invokeSource.type
        }, invokeConfig), {
          src: invokeSource
        }));
      }
    });
    this.activities = Object(_utils_js__WEBPACK_IMPORTED_MODULE_3__["toArray"])(this.config.activities).concat(this.invoke).map(function (activity) {
      return Object(_actions_js__WEBPACK_IMPORTED_MODULE_7__["toActivityDefinition"])(activity);
    });
    this.transition = this.transition.bind(this); // TODO: this is the real fix for initialization once
    // state node getters are deprecated
    // if (!this.parent) {
    //   this._init();
    // }
  }

  StateNode.prototype._init = function () {
    if (this.__cache.transitions) {
      return;
    }

    Object(_stateUtils_js__WEBPACK_IMPORTED_MODULE_5__["getAllStateNodes"])(this).forEach(function (stateNode) {
      return stateNode.on;
    });
  };
  /**
   * Clones this state machine with custom options and context.
   *
   * @param options Options (actions, guards, activities, services) to recursively merge with the existing options.
   * @param context Custom context (will override predefined context)
   */


  StateNode.prototype.withConfig = function (options, context) {
    if (context === void 0) {
      context = this.context;
    }

    var _a = this.options,
        actions = _a.actions,
        activities = _a.activities,
        guards = _a.guards,
        services = _a.services,
        delays = _a.delays;
    return new StateNode(this.config, {
      actions: Object(_virtual_tslib_js__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(_virtual_tslib_js__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, actions), options.actions),
      activities: Object(_virtual_tslib_js__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(_virtual_tslib_js__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, activities), options.activities),
      guards: Object(_virtual_tslib_js__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(_virtual_tslib_js__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, guards), options.guards),
      services: Object(_virtual_tslib_js__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(_virtual_tslib_js__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, services), options.services),
      delays: Object(_virtual_tslib_js__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(_virtual_tslib_js__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, delays), options.delays)
    }, context);
  };
  /**
   * Clones this state machine with custom context.
   *
   * @param context Custom context (will override predefined context, not recursive)
   */


  StateNode.prototype.withContext = function (context) {
    return new StateNode(this.config, this.options, context);
  };

  Object.defineProperty(StateNode.prototype, "definition", {
    /**
     * The well-structured state node definition.
     */
    get: function () {
      return {
        id: this.id,
        key: this.key,
        version: this.version,
        context: this.context,
        type: this.type,
        initial: this.initial,
        history: this.history,
        states: Object(_utils_js__WEBPACK_IMPORTED_MODULE_3__["mapValues"])(this.states, function (state) {
          return state.definition;
        }),
        on: this.on,
        transitions: this.transitions,
        entry: this.onEntry,
        exit: this.onExit,
        activities: this.activities || [],
        meta: this.meta,
        order: this.order || -1,
        data: this.doneData,
        invoke: this.invoke
      };
    },
    enumerable: false,
    configurable: true
  });

  StateNode.prototype.toJSON = function () {
    return this.definition;
  };

  Object.defineProperty(StateNode.prototype, "on", {
    /**
     * The mapping of events to transitions.
     */
    get: function () {
      if (this.__cache.on) {
        return this.__cache.on;
      }

      var transitions = this.transitions;
      return this.__cache.on = transitions.reduce(function (map, transition) {
        map[transition.eventType] = map[transition.eventType] || [];
        map[transition.eventType].push(transition);
        return map;
      }, {});
    },
    enumerable: false,
    configurable: true
  });
  Object.defineProperty(StateNode.prototype, "after", {
    get: function () {
      return this.__cache.delayedTransitions || (this.__cache.delayedTransitions = this.getDelayedTransitions(), this.__cache.delayedTransitions);
    },
    enumerable: false,
    configurable: true
  });
  Object.defineProperty(StateNode.prototype, "transitions", {
    /**
     * All the transitions that can be taken from this state node.
     */
    get: function () {
      return this.__cache.transitions || (this.__cache.transitions = this.formatTransitions(), this.__cache.transitions);
    },
    enumerable: false,
    configurable: true
  });

  StateNode.prototype.getCandidates = function (eventName) {
    if (this.__cache.candidates[eventName]) {
      return this.__cache.candidates[eventName];
    }

    var transient = eventName === NULL_EVENT;
    var candidates = this.transitions.filter(function (transition) {
      var sameEventType = transition.eventType === eventName; // null events should only match against eventless transitions

      return transient ? sameEventType : sameEventType || transition.eventType === WILDCARD;
    });
    this.__cache.candidates[eventName] = candidates;
    return candidates;
  };
  /**
   * All delayed transitions from the config.
   */


  StateNode.prototype.getDelayedTransitions = function () {
    var _this = this;

    var afterConfig = this.config.after;

    if (!afterConfig) {
      return [];
    }

    var mutateEntryExit = function (delay, i) {
      var delayRef = Object(_utils_js__WEBPACK_IMPORTED_MODULE_3__["isFunction"])(delay) ? _this.id + ":delay[" + i + "]" : delay;
      var eventType = Object(_actions_js__WEBPACK_IMPORTED_MODULE_7__["after"])(delayRef, _this.id);

      _this.onEntry.push(Object(_actions_js__WEBPACK_IMPORTED_MODULE_7__["send"])(eventType, {
        delay: delay
      }));

      _this.onExit.push(Object(_actions_js__WEBPACK_IMPORTED_MODULE_7__["cancel"])(eventType));

      return eventType;
    };

    var delayedTransitions = Object(_utils_js__WEBPACK_IMPORTED_MODULE_3__["isArray"])(afterConfig) ? afterConfig.map(function (transition, i) {
      var eventType = mutateEntryExit(transition.delay, i);
      return Object(_virtual_tslib_js__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(_virtual_tslib_js__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, transition), {
        event: eventType
      });
    }) : Object(_utils_js__WEBPACK_IMPORTED_MODULE_3__["flatten"])(Object(_utils_js__WEBPACK_IMPORTED_MODULE_3__["keys"])(afterConfig).map(function (delay, i) {
      var configTransition = afterConfig[delay];
      var resolvedTransition = Object(_utils_js__WEBPACK_IMPORTED_MODULE_3__["isString"])(configTransition) ? {
        target: configTransition
      } : configTransition;
      var resolvedDelay = !isNaN(+delay) ? +delay : delay;
      var eventType = mutateEntryExit(resolvedDelay, i);
      return Object(_utils_js__WEBPACK_IMPORTED_MODULE_3__["toArray"])(resolvedTransition).map(function (transition) {
        return Object(_virtual_tslib_js__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(_virtual_tslib_js__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, transition), {
          event: eventType,
          delay: resolvedDelay
        });
      });
    }));
    return delayedTransitions.map(function (delayedTransition) {
      var delay = delayedTransition.delay;
      return Object(_virtual_tslib_js__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(_virtual_tslib_js__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, _this.formatTransition(delayedTransition)), {
        delay: delay
      });
    });
  };
  /**
   * Returns the state nodes represented by the current state value.
   *
   * @param state The state value or State instance
   */


  StateNode.prototype.getStateNodes = function (state) {
    var _a;

    var _this = this;

    if (!state) {
      return [];
    }

    var stateValue = state instanceof _State_js__WEBPACK_IMPORTED_MODULE_8__["State"] ? state.value : Object(_utils_js__WEBPACK_IMPORTED_MODULE_3__["toStateValue"])(state, this.delimiter);

    if (Object(_utils_js__WEBPACK_IMPORTED_MODULE_3__["isString"])(stateValue)) {
      var initialStateValue = this.getStateNode(stateValue).initial;
      return initialStateValue !== undefined ? this.getStateNodes((_a = {}, _a[stateValue] = initialStateValue, _a)) : [this.states[stateValue]];
    }

    var subStateKeys = Object(_utils_js__WEBPACK_IMPORTED_MODULE_3__["keys"])(stateValue);
    var subStateNodes = subStateKeys.map(function (subStateKey) {
      return _this.getStateNode(subStateKey);
    });
    return subStateNodes.concat(subStateKeys.reduce(function (allSubStateNodes, subStateKey) {
      var subStateNode = _this.getStateNode(subStateKey).getStateNodes(stateValue[subStateKey]);

      return allSubStateNodes.concat(subStateNode);
    }, []));
  };
  /**
   * Returns `true` if this state node explicitly handles the given event.
   *
   * @param event The event in question
   */


  StateNode.prototype.handles = function (event) {
    var eventType = Object(_utils_js__WEBPACK_IMPORTED_MODULE_3__["getEventType"])(event);
    return this.events.includes(eventType);
  };
  /**
   * Resolves the given `state` to a new `State` instance relative to this machine.
   *
   * This ensures that `.events` and `.nextEvents` represent the correct values.
   *
   * @param state The state to resolve
   */


  StateNode.prototype.resolveState = function (state) {
    var configuration = Array.from(Object(_stateUtils_js__WEBPACK_IMPORTED_MODULE_5__["getConfiguration"])([], this.getStateNodes(state.value)));
    return new _State_js__WEBPACK_IMPORTED_MODULE_8__["State"](Object(_virtual_tslib_js__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(_virtual_tslib_js__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, state), {
      value: this.resolve(state.value),
      configuration: configuration
    }));
  };

  StateNode.prototype.transitionLeafNode = function (stateValue, state, _event) {
    var stateNode = this.getStateNode(stateValue);
    var next = stateNode.next(state, _event);

    if (!next || !next.transitions.length) {
      return this.next(state, _event);
    }

    return next;
  };

  StateNode.prototype.transitionCompoundNode = function (stateValue, state, _event) {
    var subStateKeys = Object(_utils_js__WEBPACK_IMPORTED_MODULE_3__["keys"])(stateValue);
    var stateNode = this.getStateNode(subStateKeys[0]);

    var next = stateNode._transition(stateValue[subStateKeys[0]], state, _event);

    if (!next || !next.transitions.length) {
      return this.next(state, _event);
    }

    return next;
  };

  StateNode.prototype.transitionParallelNode = function (stateValue, state, _event) {
    var e_2, _a;

    var transitionMap = {};

    try {
      for (var _b = Object(_virtual_tslib_js__WEBPACK_IMPORTED_MODULE_0__["__values"])(Object(_utils_js__WEBPACK_IMPORTED_MODULE_3__["keys"])(stateValue)), _c = _b.next(); !_c.done; _c = _b.next()) {
        var subStateKey = _c.value;
        var subStateValue = stateValue[subStateKey];

        if (!subStateValue) {
          continue;
        }

        var subStateNode = this.getStateNode(subStateKey);

        var next = subStateNode._transition(subStateValue, state, _event);

        if (next) {
          transitionMap[subStateKey] = next;
        }
      }
    } catch (e_2_1) {
      e_2 = {
        error: e_2_1
      };
    } finally {
      try {
        if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
      } finally {
        if (e_2) throw e_2.error;
      }
    }

    var stateTransitions = Object(_utils_js__WEBPACK_IMPORTED_MODULE_3__["keys"])(transitionMap).map(function (key) {
      return transitionMap[key];
    });
    var enabledTransitions = Object(_utils_js__WEBPACK_IMPORTED_MODULE_3__["flatten"])(stateTransitions.map(function (st) {
      return st.transitions;
    }));
    var willTransition = stateTransitions.some(function (st) {
      return st.transitions.length > 0;
    });

    if (!willTransition) {
      return this.next(state, _event);
    }

    var entryNodes = Object(_utils_js__WEBPACK_IMPORTED_MODULE_3__["flatten"])(stateTransitions.map(function (t) {
      return t.entrySet;
    }));
    var configuration = Object(_utils_js__WEBPACK_IMPORTED_MODULE_3__["flatten"])(Object(_utils_js__WEBPACK_IMPORTED_MODULE_3__["keys"])(transitionMap).map(function (key) {
      return transitionMap[key].configuration;
    }));
    return {
      transitions: enabledTransitions,
      entrySet: entryNodes,
      exitSet: Object(_utils_js__WEBPACK_IMPORTED_MODULE_3__["flatten"])(stateTransitions.map(function (t) {
        return t.exitSet;
      })),
      configuration: configuration,
      source: state,
      actions: Object(_utils_js__WEBPACK_IMPORTED_MODULE_3__["flatten"])(Object(_utils_js__WEBPACK_IMPORTED_MODULE_3__["keys"])(transitionMap).map(function (key) {
        return transitionMap[key].actions;
      }))
    };
  };

  StateNode.prototype._transition = function (stateValue, state, _event) {
    // leaf node
    if (Object(_utils_js__WEBPACK_IMPORTED_MODULE_3__["isString"])(stateValue)) {
      return this.transitionLeafNode(stateValue, state, _event);
    } // hierarchical node


    if (Object(_utils_js__WEBPACK_IMPORTED_MODULE_3__["keys"])(stateValue).length === 1) {
      return this.transitionCompoundNode(stateValue, state, _event);
    } // orthogonal node


    return this.transitionParallelNode(stateValue, state, _event);
  };

  StateNode.prototype.next = function (state, _event) {
    var e_3, _a;

    var _this = this;

    var eventName = _event.name;
    var actions = [];
    var nextStateNodes = [];
    var selectedTransition;

    try {
      for (var _b = Object(_virtual_tslib_js__WEBPACK_IMPORTED_MODULE_0__["__values"])(this.getCandidates(eventName)), _c = _b.next(); !_c.done; _c = _b.next()) {
        var candidate = _c.value;
        var cond = candidate.cond,
            stateIn = candidate.in;
        var resolvedContext = state.context;
        var isInState = stateIn ? Object(_utils_js__WEBPACK_IMPORTED_MODULE_3__["isString"])(stateIn) && isStateId(stateIn) ? // Check if in state by ID
        state.matches(Object(_utils_js__WEBPACK_IMPORTED_MODULE_3__["toStateValue"])(this.getStateNodeById(stateIn).path, this.delimiter)) : // Check if in state by relative grandparent
        Object(_utils_js__WEBPACK_IMPORTED_MODULE_3__["matchesState"])(Object(_utils_js__WEBPACK_IMPORTED_MODULE_3__["toStateValue"])(stateIn, this.delimiter), Object(_utils_js__WEBPACK_IMPORTED_MODULE_3__["path"])(this.path.slice(0, -2))(state.value)) : true;
        var guardPassed = false;

        try {
          guardPassed = !cond || Object(_utils_js__WEBPACK_IMPORTED_MODULE_3__["evaluateGuard"])(this.machine, cond, resolvedContext, _event, state);
        } catch (err) {
          throw new Error("Unable to evaluate guard '" + (cond.name || cond.type) + "' in transition for event '" + eventName + "' in state node '" + this.id + "':\n" + err.message);
        }

        if (guardPassed && isInState) {
          if (candidate.target !== undefined) {
            nextStateNodes = candidate.target;
          }

          actions.push.apply(actions, Object(_virtual_tslib_js__WEBPACK_IMPORTED_MODULE_0__["__spread"])(candidate.actions));
          selectedTransition = candidate;
          break;
        }
      }
    } catch (e_3_1) {
      e_3 = {
        error: e_3_1
      };
    } finally {
      try {
        if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
      } finally {
        if (e_3) throw e_3.error;
      }
    }

    if (!selectedTransition) {
      return undefined;
    }

    if (!nextStateNodes.length) {
      return {
        transitions: [selectedTransition],
        entrySet: [],
        exitSet: [],
        configuration: state.value ? [this] : [],
        source: state,
        actions: actions
      };
    }

    var allNextStateNodes = Object(_utils_js__WEBPACK_IMPORTED_MODULE_3__["flatten"])(nextStateNodes.map(function (stateNode) {
      return _this.getRelativeStateNodes(stateNode, state.historyValue);
    }));
    var isInternal = !!selectedTransition.internal;
    var reentryNodes = isInternal ? [] : Object(_utils_js__WEBPACK_IMPORTED_MODULE_3__["flatten"])(allNextStateNodes.map(function (n) {
      return _this.nodesFromChild(n);
    }));
    return {
      transitions: [selectedTransition],
      entrySet: reentryNodes,
      exitSet: isInternal ? [] : [this],
      configuration: allNextStateNodes,
      source: state,
      actions: actions
    };
  };

  StateNode.prototype.nodesFromChild = function (childStateNode) {
    if (childStateNode.escapes(this)) {
      return [];
    }

    var nodes = [];
    var marker = childStateNode;

    while (marker && marker !== this) {
      nodes.push(marker);
      marker = marker.parent;
    }

    nodes.push(this); // inclusive

    return nodes;
  };
  /**
   * Whether the given state node "escapes" this state node. If the `stateNode` is equal to or the parent of
   * this state node, it does not escape.
   */


  StateNode.prototype.escapes = function (stateNode) {
    if (this === stateNode) {
      return false;
    }

    var parent = this.parent;

    while (parent) {
      if (parent === stateNode) {
        return false;
      }

      parent = parent.parent;
    }

    return true;
  };

  StateNode.prototype.getActions = function (transition, currentContext, _event, prevState) {
    var e_4, _a, e_5, _b;

    var prevConfig = Object(_stateUtils_js__WEBPACK_IMPORTED_MODULE_5__["getConfiguration"])([], prevState ? this.getStateNodes(prevState.value) : [this]);
    var resolvedConfig = transition.configuration.length ? Object(_stateUtils_js__WEBPACK_IMPORTED_MODULE_5__["getConfiguration"])(prevConfig, transition.configuration) : prevConfig;

    try {
      for (var resolvedConfig_1 = Object(_virtual_tslib_js__WEBPACK_IMPORTED_MODULE_0__["__values"])(resolvedConfig), resolvedConfig_1_1 = resolvedConfig_1.next(); !resolvedConfig_1_1.done; resolvedConfig_1_1 = resolvedConfig_1.next()) {
        var sn = resolvedConfig_1_1.value;

        if (!Object(_stateUtils_js__WEBPACK_IMPORTED_MODULE_5__["has"])(prevConfig, sn)) {
          transition.entrySet.push(sn);
        }
      }
    } catch (e_4_1) {
      e_4 = {
        error: e_4_1
      };
    } finally {
      try {
        if (resolvedConfig_1_1 && !resolvedConfig_1_1.done && (_a = resolvedConfig_1.return)) _a.call(resolvedConfig_1);
      } finally {
        if (e_4) throw e_4.error;
      }
    }

    try {
      for (var prevConfig_1 = Object(_virtual_tslib_js__WEBPACK_IMPORTED_MODULE_0__["__values"])(prevConfig), prevConfig_1_1 = prevConfig_1.next(); !prevConfig_1_1.done; prevConfig_1_1 = prevConfig_1.next()) {
        var sn = prevConfig_1_1.value;

        if (!Object(_stateUtils_js__WEBPACK_IMPORTED_MODULE_5__["has"])(resolvedConfig, sn) || Object(_stateUtils_js__WEBPACK_IMPORTED_MODULE_5__["has"])(transition.exitSet, sn.parent)) {
          transition.exitSet.push(sn);
        }
      }
    } catch (e_5_1) {
      e_5 = {
        error: e_5_1
      };
    } finally {
      try {
        if (prevConfig_1_1 && !prevConfig_1_1.done && (_b = prevConfig_1.return)) _b.call(prevConfig_1);
      } finally {
        if (e_5) throw e_5.error;
      }
    }

    if (!transition.source) {
      transition.exitSet = []; // Ensure that root StateNode (machine) is entered

      transition.entrySet.push(this);
    }

    var doneEvents = Object(_utils_js__WEBPACK_IMPORTED_MODULE_3__["flatten"])(transition.entrySet.map(function (sn) {
      var events = [];

      if (sn.type !== 'final') {
        return events;
      }

      var parent = sn.parent;

      if (!parent.parent) {
        return events;
      }

      events.push(Object(_actions_js__WEBPACK_IMPORTED_MODULE_7__["done"])(sn.id, sn.doneData), // TODO: deprecate - final states should not emit done events for their own state.
      Object(_actions_js__WEBPACK_IMPORTED_MODULE_7__["done"])(parent.id, sn.doneData ? Object(_utils_js__WEBPACK_IMPORTED_MODULE_3__["mapContext"])(sn.doneData, currentContext, _event) : undefined));
      var grandparent = parent.parent;

      if (grandparent.type === 'parallel') {
        if (Object(_stateUtils_js__WEBPACK_IMPORTED_MODULE_5__["getChildren"])(grandparent).every(function (parentNode) {
          return Object(_stateUtils_js__WEBPACK_IMPORTED_MODULE_5__["isInFinalState"])(transition.configuration, parentNode);
        })) {
          events.push(Object(_actions_js__WEBPACK_IMPORTED_MODULE_7__["done"])(grandparent.id));
        }
      }

      return events;
    }));
    transition.exitSet.sort(function (a, b) {
      return b.order - a.order;
    });
    transition.entrySet.sort(function (a, b) {
      return a.order - b.order;
    });
    var entryStates = new Set(transition.entrySet);
    var exitStates = new Set(transition.exitSet);

    var _c = Object(_virtual_tslib_js__WEBPACK_IMPORTED_MODULE_0__["__read"])([Object(_utils_js__WEBPACK_IMPORTED_MODULE_3__["flatten"])(Array.from(entryStates).map(function (stateNode) {
      return Object(_virtual_tslib_js__WEBPACK_IMPORTED_MODULE_0__["__spread"])(stateNode.activities.map(function (activity) {
        return Object(_actions_js__WEBPACK_IMPORTED_MODULE_7__["start"])(activity);
      }), stateNode.onEntry);
    })).concat(doneEvents.map(_actions_js__WEBPACK_IMPORTED_MODULE_7__["raise"])), Object(_utils_js__WEBPACK_IMPORTED_MODULE_3__["flatten"])(Array.from(exitStates).map(function (stateNode) {
      return Object(_virtual_tslib_js__WEBPACK_IMPORTED_MODULE_0__["__spread"])(stateNode.onExit, stateNode.activities.map(function (activity) {
        return Object(_actions_js__WEBPACK_IMPORTED_MODULE_7__["stop"])(activity);
      }));
    }))], 2),
        entryActions = _c[0],
        exitActions = _c[1];

    var actions = Object(_actions_js__WEBPACK_IMPORTED_MODULE_7__["toActionObjects"])(exitActions.concat(transition.actions).concat(entryActions), this.machine.options.actions);
    return actions;
  };
  /**
   * Determines the next state given the current `state` and sent `event`.
   *
   * @param state The current State instance or state value
   * @param event The event that was sent at the current state
   * @param context The current context (extended state) of the current state
   */


  StateNode.prototype.transition = function (state, event, context) {
    if (state === void 0) {
      state = this.initialState;
    }

    var _event = Object(_utils_js__WEBPACK_IMPORTED_MODULE_3__["toSCXMLEvent"])(event);

    var currentState;

    if (state instanceof _State_js__WEBPACK_IMPORTED_MODULE_8__["State"]) {
      currentState = context === undefined ? state : this.resolveState(_State_js__WEBPACK_IMPORTED_MODULE_8__["State"].from(state, context));
    } else {
      var resolvedStateValue = Object(_utils_js__WEBPACK_IMPORTED_MODULE_3__["isString"])(state) ? this.resolve(Object(_utils_js__WEBPACK_IMPORTED_MODULE_3__["pathToStateValue"])(this.getResolvedPath(state))) : this.resolve(state);
      var resolvedContext = context ? context : this.machine.context;
      currentState = this.resolveState(_State_js__WEBPACK_IMPORTED_MODULE_8__["State"].from(resolvedStateValue, resolvedContext));
    }

    if (!_environment_js__WEBPACK_IMPORTED_MODULE_2__["IS_PRODUCTION"] && _event.name === WILDCARD) {
      throw new Error("An event cannot have the wildcard type ('" + WILDCARD + "')");
    }

    if (this.strict) {
      if (!this.events.includes(_event.name) && !Object(_utils_js__WEBPACK_IMPORTED_MODULE_3__["isBuiltInEvent"])(_event.name)) {
        throw new Error("Machine '" + this.id + "' does not accept event '" + _event.name + "'");
      }
    }

    var stateTransition = this._transition(currentState.value, currentState, _event) || {
      transitions: [],
      configuration: [],
      entrySet: [],
      exitSet: [],
      source: currentState,
      actions: []
    };
    var prevConfig = Object(_stateUtils_js__WEBPACK_IMPORTED_MODULE_5__["getConfiguration"])([], this.getStateNodes(currentState.value));
    var resolvedConfig = stateTransition.configuration.length ? Object(_stateUtils_js__WEBPACK_IMPORTED_MODULE_5__["getConfiguration"])(prevConfig, stateTransition.configuration) : prevConfig;
    stateTransition.configuration = Object(_virtual_tslib_js__WEBPACK_IMPORTED_MODULE_0__["__spread"])(resolvedConfig);
    return this.resolveTransition(stateTransition, currentState, _event);
  };

  StateNode.prototype.resolveRaisedTransition = function (state, _event, originalEvent) {
    var _a;

    var currentActions = state.actions;
    state = this.transition(state, _event); // Save original event to state
    // TODO: this should be the raised event! Delete in V5 (breaking)

    state._event = originalEvent;
    state.event = originalEvent.data;

    (_a = state.actions).unshift.apply(_a, Object(_virtual_tslib_js__WEBPACK_IMPORTED_MODULE_0__["__spread"])(currentActions));

    return state;
  };

  StateNode.prototype.resolveTransition = function (stateTransition, currentState, _event, context) {
    var e_6, _a;

    var _this = this;

    if (_event === void 0) {
      _event = _actions_js__WEBPACK_IMPORTED_MODULE_7__["initEvent"];
    }

    if (context === void 0) {
      context = this.machine.context;
    }

    var configuration = stateTransition.configuration; // Transition will "apply" if:
    // - this is the initial state (there is no current state)
    // - OR there are transitions

    var willTransition = !currentState || stateTransition.transitions.length > 0;
    var resolvedStateValue = willTransition ? Object(_stateUtils_js__WEBPACK_IMPORTED_MODULE_5__["getValue"])(this.machine, configuration) : undefined;
    var historyValue = currentState ? currentState.historyValue ? currentState.historyValue : stateTransition.source ? this.machine.historyValue(currentState.value) : undefined : undefined;
    var currentContext = currentState ? currentState.context : context;
    var actions = this.getActions(stateTransition, currentContext, _event, currentState);
    var activities = currentState ? Object(_virtual_tslib_js__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, currentState.activities) : {};

    try {
      for (var actions_1 = Object(_virtual_tslib_js__WEBPACK_IMPORTED_MODULE_0__["__values"])(actions), actions_1_1 = actions_1.next(); !actions_1_1.done; actions_1_1 = actions_1.next()) {
        var action = actions_1_1.value;

        if (action.type === _actionTypes_js__WEBPACK_IMPORTED_MODULE_6__["start"]) {
          activities[action.activity.id || action.activity.type] = action;
        } else if (action.type === _actionTypes_js__WEBPACK_IMPORTED_MODULE_6__["stop"]) {
          activities[action.activity.id || action.activity.type] = false;
        }
      }
    } catch (e_6_1) {
      e_6 = {
        error: e_6_1
      };
    } finally {
      try {
        if (actions_1_1 && !actions_1_1.done && (_a = actions_1.return)) _a.call(actions_1);
      } finally {
        if (e_6) throw e_6.error;
      }
    }

    var _b = Object(_virtual_tslib_js__WEBPACK_IMPORTED_MODULE_0__["__read"])(Object(_actions_js__WEBPACK_IMPORTED_MODULE_7__["resolveActions"])(this, currentState, currentContext, _event, actions), 2),
        resolvedActions = _b[0],
        updatedContext = _b[1];

    var _c = Object(_virtual_tslib_js__WEBPACK_IMPORTED_MODULE_0__["__read"])(Object(_utils_js__WEBPACK_IMPORTED_MODULE_3__["partition"])(resolvedActions, function (action) {
      return action.type === _actionTypes_js__WEBPACK_IMPORTED_MODULE_6__["raise"] || action.type === _actionTypes_js__WEBPACK_IMPORTED_MODULE_6__["send"] && action.to === _types_js__WEBPACK_IMPORTED_MODULE_4__["SpecialTargets"].Internal;
    }), 2),
        raisedEvents = _c[0],
        nonRaisedActions = _c[1];

    var invokeActions = resolvedActions.filter(function (action) {
      return action.type === _actionTypes_js__WEBPACK_IMPORTED_MODULE_6__["start"] && action.activity.type === _actionTypes_js__WEBPACK_IMPORTED_MODULE_6__["invoke"];
    });
    var children = invokeActions.reduce(function (acc, action) {
      acc[action.activity.id] = Object(_Actor_js__WEBPACK_IMPORTED_MODULE_9__["createInvocableActor"])(action.activity, _this.machine, updatedContext, _event);
      return acc;
    }, currentState ? Object(_virtual_tslib_js__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, currentState.children) : {});
    var resolvedConfiguration = resolvedStateValue ? stateTransition.configuration : currentState ? currentState.configuration : [];
    var meta = resolvedConfiguration.reduce(function (acc, stateNode) {
      if (stateNode.meta !== undefined) {
        acc[stateNode.id] = stateNode.meta;
      }

      return acc;
    }, {});
    var isDone = Object(_stateUtils_js__WEBPACK_IMPORTED_MODULE_5__["isInFinalState"])(resolvedConfiguration, this);
    var nextState = new _State_js__WEBPACK_IMPORTED_MODULE_8__["State"]({
      value: resolvedStateValue || currentState.value,
      context: updatedContext,
      _event: _event,
      // Persist _sessionid between states
      _sessionid: currentState ? currentState._sessionid : null,
      historyValue: resolvedStateValue ? historyValue ? Object(_utils_js__WEBPACK_IMPORTED_MODULE_3__["updateHistoryValue"])(historyValue, resolvedStateValue) : undefined : currentState ? currentState.historyValue : undefined,
      history: !resolvedStateValue || stateTransition.source ? currentState : undefined,
      actions: resolvedStateValue ? nonRaisedActions : [],
      activities: resolvedStateValue ? activities : currentState ? currentState.activities : {},
      meta: resolvedStateValue ? meta : currentState ? currentState.meta : undefined,
      events: [],
      configuration: resolvedConfiguration,
      transitions: stateTransition.transitions,
      children: children,
      done: isDone
    });
    var didUpdateContext = currentContext !== updatedContext;
    nextState.changed = _event.name === _actionTypes_js__WEBPACK_IMPORTED_MODULE_6__["update"] || didUpdateContext; // Dispose of penultimate histories to prevent memory leaks

    var history = nextState.history;

    if (history) {
      delete history.history;
    }

    if (!resolvedStateValue) {
      return nextState;
    }

    var maybeNextState = nextState;

    if (!isDone) {
      var isTransient = this._transient || configuration.some(function (stateNode) {
        return stateNode._transient;
      });

      if (isTransient) {
        maybeNextState = this.resolveRaisedTransition(maybeNextState, {
          type: _actionTypes_js__WEBPACK_IMPORTED_MODULE_6__["nullEvent"]
        }, _event);
      }

      while (raisedEvents.length) {
        var raisedEvent = raisedEvents.shift();
        maybeNextState = this.resolveRaisedTransition(maybeNextState, raisedEvent._event, _event);
      }
    } // Detect if state changed


    var changed = maybeNextState.changed || (history ? !!maybeNextState.actions.length || didUpdateContext || typeof history.value !== typeof maybeNextState.value || !Object(_State_js__WEBPACK_IMPORTED_MODULE_8__["stateValuesEqual"])(maybeNextState.value, history.value) : undefined);
    maybeNextState.changed = changed; // Preserve original history after raised events

    maybeNextState.historyValue = nextState.historyValue;
    maybeNextState.history = history;
    return maybeNextState;
  };
  /**
   * Returns the child state node from its relative `stateKey`, or throws.
   */


  StateNode.prototype.getStateNode = function (stateKey) {
    if (isStateId(stateKey)) {
      return this.machine.getStateNodeById(stateKey);
    }

    if (!this.states) {
      throw new Error("Unable to retrieve child state '" + stateKey + "' from '" + this.id + "'; no child states exist.");
    }

    var result = this.states[stateKey];

    if (!result) {
      throw new Error("Child state '" + stateKey + "' does not exist on '" + this.id + "'");
    }

    return result;
  };
  /**
   * Returns the state node with the given `stateId`, or throws.
   *
   * @param stateId The state ID. The prefix "#" is removed.
   */


  StateNode.prototype.getStateNodeById = function (stateId) {
    var resolvedStateId = isStateId(stateId) ? stateId.slice(STATE_IDENTIFIER.length) : stateId;

    if (resolvedStateId === this.id) {
      return this;
    }

    var stateNode = this.machine.idMap[resolvedStateId];

    if (!stateNode) {
      throw new Error("Child state node '#" + resolvedStateId + "' does not exist on machine '" + this.id + "'");
    }

    return stateNode;
  };
  /**
   * Returns the relative state node from the given `statePath`, or throws.
   *
   * @param statePath The string or string array relative path to the state node.
   */


  StateNode.prototype.getStateNodeByPath = function (statePath) {
    if (typeof statePath === 'string' && isStateId(statePath)) {
      try {
        return this.getStateNodeById(statePath.slice(1));
      } catch (e) {// try individual paths
        // throw e;
      }
    }

    var arrayStatePath = Object(_utils_js__WEBPACK_IMPORTED_MODULE_3__["toStatePath"])(statePath, this.delimiter).slice();
    var currentStateNode = this;

    while (arrayStatePath.length) {
      var key = arrayStatePath.shift();

      if (!key.length) {
        break;
      }

      currentStateNode = currentStateNode.getStateNode(key);
    }

    return currentStateNode;
  };
  /**
   * Resolves a partial state value with its full representation in this machine.
   *
   * @param stateValue The partial state value to resolve.
   */


  StateNode.prototype.resolve = function (stateValue) {
    var _a;

    var _this = this;

    if (!stateValue) {
      return this.initialStateValue || EMPTY_OBJECT; // TODO: type-specific properties
    }

    switch (this.type) {
      case 'parallel':
        return Object(_utils_js__WEBPACK_IMPORTED_MODULE_3__["mapValues"])(this.initialStateValue, function (subStateValue, subStateKey) {
          return subStateValue ? _this.getStateNode(subStateKey).resolve(stateValue[subStateKey] || subStateValue) : EMPTY_OBJECT;
        });

      case 'compound':
        if (Object(_utils_js__WEBPACK_IMPORTED_MODULE_3__["isString"])(stateValue)) {
          var subStateNode = this.getStateNode(stateValue);

          if (subStateNode.type === 'parallel' || subStateNode.type === 'compound') {
            return _a = {}, _a[stateValue] = subStateNode.initialStateValue, _a;
          }

          return stateValue;
        }

        if (!Object(_utils_js__WEBPACK_IMPORTED_MODULE_3__["keys"])(stateValue).length) {
          return this.initialStateValue || {};
        }

        return Object(_utils_js__WEBPACK_IMPORTED_MODULE_3__["mapValues"])(stateValue, function (subStateValue, subStateKey) {
          return subStateValue ? _this.getStateNode(subStateKey).resolve(subStateValue) : EMPTY_OBJECT;
        });

      default:
        return stateValue || EMPTY_OBJECT;
    }
  };

  StateNode.prototype.getResolvedPath = function (stateIdentifier) {
    if (isStateId(stateIdentifier)) {
      var stateNode = this.machine.idMap[stateIdentifier.slice(STATE_IDENTIFIER.length)];

      if (!stateNode) {
        throw new Error("Unable to find state node '" + stateIdentifier + "'");
      }

      return stateNode.path;
    }

    return Object(_utils_js__WEBPACK_IMPORTED_MODULE_3__["toStatePath"])(stateIdentifier, this.delimiter);
  };

  Object.defineProperty(StateNode.prototype, "initialStateValue", {
    get: function () {
      var _a;

      if (this.__cache.initialStateValue) {
        return this.__cache.initialStateValue;
      }

      var initialStateValue;

      if (this.type === 'parallel') {
        initialStateValue = Object(_utils_js__WEBPACK_IMPORTED_MODULE_3__["mapFilterValues"])(this.states, function (state) {
          return state.initialStateValue || EMPTY_OBJECT;
        }, function (stateNode) {
          return !(stateNode.type === 'history');
        });
      } else if (this.initial !== undefined) {
        if (!this.states[this.initial]) {
          throw new Error("Initial state '" + this.initial + "' not found on '" + this.key + "'");
        }

        initialStateValue = Object(_stateUtils_js__WEBPACK_IMPORTED_MODULE_5__["isLeafNode"])(this.states[this.initial]) ? this.initial : (_a = {}, _a[this.initial] = this.states[this.initial].initialStateValue, _a);
      }

      this.__cache.initialStateValue = initialStateValue;
      return this.__cache.initialStateValue;
    },
    enumerable: false,
    configurable: true
  });

  StateNode.prototype.getInitialState = function (stateValue, context) {
    var configuration = this.getStateNodes(stateValue);
    return this.resolveTransition({
      configuration: configuration,
      entrySet: configuration,
      exitSet: [],
      transitions: [],
      source: undefined,
      actions: []
    }, undefined, undefined, context);
  };

  Object.defineProperty(StateNode.prototype, "initialState", {
    /**
     * The initial State instance, which includes all actions to be executed from
     * entering the initial state.
     */
    get: function () {
      this._init(); // TODO: this should be in the constructor (see note in constructor)


      var initialStateValue = this.initialStateValue;

      if (!initialStateValue) {
        throw new Error("Cannot retrieve initial state from simple state '" + this.id + "'.");
      }

      return this.getInitialState(initialStateValue);
    },
    enumerable: false,
    configurable: true
  });
  Object.defineProperty(StateNode.prototype, "target", {
    /**
     * The target state value of the history state node, if it exists. This represents the
     * default state value to transition to if no history value exists yet.
     */
    get: function () {
      var target;

      if (this.type === 'history') {
        var historyConfig = this.config;

        if (Object(_utils_js__WEBPACK_IMPORTED_MODULE_3__["isString"])(historyConfig.target)) {
          target = isStateId(historyConfig.target) ? Object(_utils_js__WEBPACK_IMPORTED_MODULE_3__["pathToStateValue"])(this.machine.getStateNodeById(historyConfig.target).path.slice(this.path.length - 1)) : historyConfig.target;
        } else {
          target = historyConfig.target;
        }
      }

      return target;
    },
    enumerable: false,
    configurable: true
  });
  /**
   * Returns the leaf nodes from a state path relative to this state node.
   *
   * @param relativeStateId The relative state path to retrieve the state nodes
   * @param history The previous state to retrieve history
   * @param resolve Whether state nodes should resolve to initial child state nodes
   */

  StateNode.prototype.getRelativeStateNodes = function (relativeStateId, historyValue, resolve) {
    if (resolve === void 0) {
      resolve = true;
    }

    return resolve ? relativeStateId.type === 'history' ? relativeStateId.resolveHistory(historyValue) : relativeStateId.initialStateNodes : [relativeStateId];
  };

  Object.defineProperty(StateNode.prototype, "initialStateNodes", {
    get: function () {
      var _this = this;

      if (Object(_stateUtils_js__WEBPACK_IMPORTED_MODULE_5__["isLeafNode"])(this)) {
        return [this];
      } // Case when state node is compound but no initial state is defined


      if (this.type === 'compound' && !this.initial) {
        if (!_environment_js__WEBPACK_IMPORTED_MODULE_2__["IS_PRODUCTION"]) {
          Object(_utils_js__WEBPACK_IMPORTED_MODULE_3__["warn"])(false, "Compound state node '" + this.id + "' has no initial state.");
        }

        return [this];
      }

      var initialStateNodePaths = Object(_utils_js__WEBPACK_IMPORTED_MODULE_3__["toStatePaths"])(this.initialStateValue);
      return Object(_utils_js__WEBPACK_IMPORTED_MODULE_3__["flatten"])(initialStateNodePaths.map(function (initialPath) {
        return _this.getFromRelativePath(initialPath);
      }));
    },
    enumerable: false,
    configurable: true
  });
  /**
   * Retrieves state nodes from a relative path to this state node.
   *
   * @param relativePath The relative path from this state node
   * @param historyValue
   */

  StateNode.prototype.getFromRelativePath = function (relativePath) {
    if (!relativePath.length) {
      return [this];
    }

    var _a = Object(_virtual_tslib_js__WEBPACK_IMPORTED_MODULE_0__["__read"])(relativePath),
        stateKey = _a[0],
        childStatePath = _a.slice(1);

    if (!this.states) {
      throw new Error("Cannot retrieve subPath '" + stateKey + "' from node with no states");
    }

    var childStateNode = this.getStateNode(stateKey);

    if (childStateNode.type === 'history') {
      return childStateNode.resolveHistory();
    }

    if (!this.states[stateKey]) {
      throw new Error("Child state '" + stateKey + "' does not exist on '" + this.id + "'");
    }

    return this.states[stateKey].getFromRelativePath(childStatePath);
  };

  StateNode.prototype.historyValue = function (relativeStateValue) {
    if (!Object(_utils_js__WEBPACK_IMPORTED_MODULE_3__["keys"])(this.states).length) {
      return undefined;
    }

    return {
      current: relativeStateValue || this.initialStateValue,
      states: Object(_utils_js__WEBPACK_IMPORTED_MODULE_3__["mapFilterValues"])(this.states, function (stateNode, key) {
        if (!relativeStateValue) {
          return stateNode.historyValue();
        }

        var subStateValue = Object(_utils_js__WEBPACK_IMPORTED_MODULE_3__["isString"])(relativeStateValue) ? undefined : relativeStateValue[key];
        return stateNode.historyValue(subStateValue || stateNode.initialStateValue);
      }, function (stateNode) {
        return !stateNode.history;
      })
    };
  };
  /**
   * Resolves to the historical value(s) of the parent state node,
   * represented by state nodes.
   *
   * @param historyValue
   */


  StateNode.prototype.resolveHistory = function (historyValue) {
    var _this = this;

    if (this.type !== 'history') {
      return [this];
    }

    var parent = this.parent;

    if (!historyValue) {
      var historyTarget = this.target;
      return historyTarget ? Object(_utils_js__WEBPACK_IMPORTED_MODULE_3__["flatten"])(Object(_utils_js__WEBPACK_IMPORTED_MODULE_3__["toStatePaths"])(historyTarget).map(function (relativeChildPath) {
        return parent.getFromRelativePath(relativeChildPath);
      })) : parent.initialStateNodes;
    }

    var subHistoryValue = Object(_utils_js__WEBPACK_IMPORTED_MODULE_3__["nestedPath"])(parent.path, 'states')(historyValue).current;

    if (Object(_utils_js__WEBPACK_IMPORTED_MODULE_3__["isString"])(subHistoryValue)) {
      return [parent.getStateNode(subHistoryValue)];
    }

    return Object(_utils_js__WEBPACK_IMPORTED_MODULE_3__["flatten"])(Object(_utils_js__WEBPACK_IMPORTED_MODULE_3__["toStatePaths"])(subHistoryValue).map(function (subStatePath) {
      return _this.history === 'deep' ? parent.getFromRelativePath(subStatePath) : [parent.states[subStatePath[0]]];
    }));
  };

  Object.defineProperty(StateNode.prototype, "stateIds", {
    /**
     * All the state node IDs of this state node and its descendant state nodes.
     */
    get: function () {
      var _this = this;

      var childStateIds = Object(_utils_js__WEBPACK_IMPORTED_MODULE_3__["flatten"])(Object(_utils_js__WEBPACK_IMPORTED_MODULE_3__["keys"])(this.states).map(function (stateKey) {
        return _this.states[stateKey].stateIds;
      }));
      return [this.id].concat(childStateIds);
    },
    enumerable: false,
    configurable: true
  });
  Object.defineProperty(StateNode.prototype, "events", {
    /**
     * All the event types accepted by this state node and its descendants.
     */
    get: function () {
      var e_7, _a, e_8, _b;

      if (this.__cache.events) {
        return this.__cache.events;
      }

      var states = this.states;
      var events = new Set(this.ownEvents);

      if (states) {
        try {
          for (var _c = Object(_virtual_tslib_js__WEBPACK_IMPORTED_MODULE_0__["__values"])(Object(_utils_js__WEBPACK_IMPORTED_MODULE_3__["keys"])(states)), _d = _c.next(); !_d.done; _d = _c.next()) {
            var stateId = _d.value;
            var state = states[stateId];

            if (state.states) {
              try {
                for (var _e = (e_8 = void 0, Object(_virtual_tslib_js__WEBPACK_IMPORTED_MODULE_0__["__values"])(state.events)), _f = _e.next(); !_f.done; _f = _e.next()) {
                  var event_1 = _f.value;
                  events.add("" + event_1);
                }
              } catch (e_8_1) {
                e_8 = {
                  error: e_8_1
                };
              } finally {
                try {
                  if (_f && !_f.done && (_b = _e.return)) _b.call(_e);
                } finally {
                  if (e_8) throw e_8.error;
                }
              }
            }
          }
        } catch (e_7_1) {
          e_7 = {
            error: e_7_1
          };
        } finally {
          try {
            if (_d && !_d.done && (_a = _c.return)) _a.call(_c);
          } finally {
            if (e_7) throw e_7.error;
          }
        }
      }

      return this.__cache.events = Array.from(events);
    },
    enumerable: false,
    configurable: true
  });
  Object.defineProperty(StateNode.prototype, "ownEvents", {
    /**
     * All the events that have transitions directly from this state node.
     *
     * Excludes any inert events.
     */
    get: function () {
      var events = new Set(this.transitions.filter(function (transition) {
        return !(!transition.target && !transition.actions.length && transition.internal);
      }).map(function (transition) {
        return transition.eventType;
      }));
      return Array.from(events);
    },
    enumerable: false,
    configurable: true
  });

  StateNode.prototype.resolveTarget = function (_target) {
    var _this = this;

    if (_target === undefined) {
      // an undefined target signals that the state node should not transition from that state when receiving that event
      return undefined;
    }

    return _target.map(function (target) {
      if (!Object(_utils_js__WEBPACK_IMPORTED_MODULE_3__["isString"])(target)) {
        return target;
      }

      var isInternalTarget = target[0] === _this.delimiter; // If internal target is defined on machine,
      // do not include machine key on target

      if (isInternalTarget && !_this.parent) {
        return _this.getStateNodeByPath(target.slice(1));
      }

      var resolvedTarget = isInternalTarget ? _this.key + target : target;

      if (_this.parent) {
        try {
          var targetStateNode = _this.parent.getStateNodeByPath(resolvedTarget);

          return targetStateNode;
        } catch (err) {
          throw new Error("Invalid transition definition for state node '" + _this.id + "':\n" + err.message);
        }
      } else {
        return _this.getStateNodeByPath(resolvedTarget);
      }
    });
  };

  StateNode.prototype.formatTransition = function (transitionConfig) {
    var _this = this;

    var normalizedTarget = Object(_utils_js__WEBPACK_IMPORTED_MODULE_3__["normalizeTarget"])(transitionConfig.target);
    var internal = 'internal' in transitionConfig ? transitionConfig.internal : normalizedTarget ? normalizedTarget.some(function (_target) {
      return Object(_utils_js__WEBPACK_IMPORTED_MODULE_3__["isString"])(_target) && _target[0] === _this.delimiter;
    }) : true;
    var guards = this.machine.options.guards;
    var target = this.resolveTarget(normalizedTarget);

    var transition = Object(_virtual_tslib_js__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(_virtual_tslib_js__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, transitionConfig), {
      actions: Object(_actions_js__WEBPACK_IMPORTED_MODULE_7__["toActionObjects"])(Object(_utils_js__WEBPACK_IMPORTED_MODULE_3__["toArray"])(transitionConfig.actions)),
      cond: Object(_utils_js__WEBPACK_IMPORTED_MODULE_3__["toGuard"])(transitionConfig.cond, guards),
      target: target,
      source: this,
      internal: internal,
      eventType: transitionConfig.event,
      toJSON: function () {
        return Object(_virtual_tslib_js__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(_virtual_tslib_js__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, transition), {
          target: transition.target ? transition.target.map(function (t) {
            return "#" + t.id;
          }) : undefined,
          source: "#" + _this.id
        });
      }
    });

    return transition;
  };

  StateNode.prototype.formatTransitions = function () {
    var e_9, _a;

    var _this = this;

    var onConfig;

    if (!this.config.on) {
      onConfig = [];
    } else if (Array.isArray(this.config.on)) {
      onConfig = this.config.on;
    } else {
      var _b = this.config.on,
          _c = WILDCARD,
          _d = _b[_c],
          wildcardConfigs = _d === void 0 ? [] : _d,
          strictTransitionConfigs_1 = Object(_virtual_tslib_js__WEBPACK_IMPORTED_MODULE_0__["__rest"])(_b, [typeof _c === "symbol" ? _c : _c + ""]);

      onConfig = Object(_utils_js__WEBPACK_IMPORTED_MODULE_3__["flatten"])(Object(_utils_js__WEBPACK_IMPORTED_MODULE_3__["keys"])(strictTransitionConfigs_1).map(function (key) {
        if (!_environment_js__WEBPACK_IMPORTED_MODULE_2__["IS_PRODUCTION"] && key === NULL_EVENT) {
          Object(_utils_js__WEBPACK_IMPORTED_MODULE_3__["warn"])(false, "Empty string transition configs (e.g., `{ on: { '': ... }}`) for transient transitions are deprecated. Specify the transition in the `{ always: ... }` property instead. " + ("Please check the `on` configuration for \"#" + _this.id + "\"."));
        }

        var transitionConfigArray = Object(_utils_js__WEBPACK_IMPORTED_MODULE_3__["toTransitionConfigArray"])(key, strictTransitionConfigs_1[key]);

        if (!_environment_js__WEBPACK_IMPORTED_MODULE_2__["IS_PRODUCTION"]) {
          validateArrayifiedTransitions(_this, key, transitionConfigArray);
        }

        return transitionConfigArray;
      }).concat(Object(_utils_js__WEBPACK_IMPORTED_MODULE_3__["toTransitionConfigArray"])(WILDCARD, wildcardConfigs)));
    }

    var eventlessConfig = this.config.always ? Object(_utils_js__WEBPACK_IMPORTED_MODULE_3__["toTransitionConfigArray"])('', this.config.always) : [];
    var doneConfig = this.config.onDone ? Object(_utils_js__WEBPACK_IMPORTED_MODULE_3__["toTransitionConfigArray"])(String(Object(_actions_js__WEBPACK_IMPORTED_MODULE_7__["done"])(this.id)), this.config.onDone) : [];

    if (!_environment_js__WEBPACK_IMPORTED_MODULE_2__["IS_PRODUCTION"]) {
      Object(_utils_js__WEBPACK_IMPORTED_MODULE_3__["warn"])(!(this.config.onDone && !this.parent), "Root nodes cannot have an \".onDone\" transition. Please check the config of \"" + this.id + "\".");
    }

    var invokeConfig = Object(_utils_js__WEBPACK_IMPORTED_MODULE_3__["flatten"])(this.invoke.map(function (invokeDef) {
      var settleTransitions = [];

      if (invokeDef.onDone) {
        settleTransitions.push.apply(settleTransitions, Object(_virtual_tslib_js__WEBPACK_IMPORTED_MODULE_0__["__spread"])(Object(_utils_js__WEBPACK_IMPORTED_MODULE_3__["toTransitionConfigArray"])(String(Object(_actions_js__WEBPACK_IMPORTED_MODULE_7__["doneInvoke"])(invokeDef.id)), invokeDef.onDone)));
      }

      if (invokeDef.onError) {
        settleTransitions.push.apply(settleTransitions, Object(_virtual_tslib_js__WEBPACK_IMPORTED_MODULE_0__["__spread"])(Object(_utils_js__WEBPACK_IMPORTED_MODULE_3__["toTransitionConfigArray"])(String(Object(_actions_js__WEBPACK_IMPORTED_MODULE_7__["error"])(invokeDef.id)), invokeDef.onError)));
      }

      return settleTransitions;
    }));
    var delayedTransitions = this.after;
    var formattedTransitions = Object(_utils_js__WEBPACK_IMPORTED_MODULE_3__["flatten"])(Object(_virtual_tslib_js__WEBPACK_IMPORTED_MODULE_0__["__spread"])(doneConfig, invokeConfig, onConfig, eventlessConfig).map(function (transitionConfig) {
      return Object(_utils_js__WEBPACK_IMPORTED_MODULE_3__["toArray"])(transitionConfig).map(function (transition) {
        return _this.formatTransition(transition);
      });
    }));

    try {
      for (var delayedTransitions_1 = Object(_virtual_tslib_js__WEBPACK_IMPORTED_MODULE_0__["__values"])(delayedTransitions), delayedTransitions_1_1 = delayedTransitions_1.next(); !delayedTransitions_1_1.done; delayedTransitions_1_1 = delayedTransitions_1.next()) {
        var delayedTransition = delayedTransitions_1_1.value;
        formattedTransitions.push(delayedTransition);
      }
    } catch (e_9_1) {
      e_9 = {
        error: e_9_1
      };
    } finally {
      try {
        if (delayedTransitions_1_1 && !delayedTransitions_1_1.done && (_a = delayedTransitions_1.return)) _a.call(delayedTransitions_1);
      } finally {
        if (e_9) throw e_9.error;
      }
    }

    return formattedTransitions;
  };

  return StateNode;
}();



/***/ }),

/***/ "./node_modules/xstate/es/_virtual/_tslib.js":
/*!***************************************************!*\
  !*** ./node_modules/xstate/es/_virtual/_tslib.js ***!
  \***************************************************/
/*! exports provided: __assign, __read, __rest, __spread, __values */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__assign", function() { return __assign; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__read", function() { return __read; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__rest", function() { return __rest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spread", function() { return __spread; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__values", function() { return __values; });
/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */
var __assign = function () {
  __assign = Object.assign || function __assign(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
      s = arguments[i];

      for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
    }

    return t;
  };

  return __assign.apply(this, arguments);
};

function __rest(s, e) {
  var t = {};

  for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];

  if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
    if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
  }
  return t;
}

function __values(o) {
  var m = typeof Symbol === "function" && o[Symbol.iterator],
      i = 0;
  if (m) return m.call(o);
  return {
    next: function () {
      if (o && i >= o.length) o = void 0;
      return {
        value: o && o[i++],
        done: !o
      };
    }
  };
}

function __read(o, n) {
  var m = typeof Symbol === "function" && o[Symbol.iterator];
  if (!m) return o;
  var i = m.call(o),
      r,
      ar = [],
      e;

  try {
    while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
  } catch (error) {
    e = {
      error: error
    };
  } finally {
    try {
      if (r && !r.done && (m = i["return"])) m.call(i);
    } finally {
      if (e) throw e.error;
    }
  }

  return ar;
}

function __spread() {
  for (var ar = [], i = 0; i < arguments.length; i++) ar = ar.concat(__read(arguments[i]));

  return ar;
}



/***/ }),

/***/ "./node_modules/xstate/es/actionTypes.js":
/*!***********************************************!*\
  !*** ./node_modules/xstate/es/actionTypes.js ***!
  \***********************************************/
/*! exports provided: after, assign, cancel, choose, doneState, error, errorExecution, errorPlatform, init, invoke, log, nullEvent, pure, raise, send, start, stop, update */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "after", function() { return after; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "assign", function() { return assign; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "cancel", function() { return cancel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "choose", function() { return choose; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "doneState", function() { return doneState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "error", function() { return error; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "errorExecution", function() { return errorExecution; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "errorPlatform", function() { return errorPlatform; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "init", function() { return init; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "invoke", function() { return invoke; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "log", function() { return log; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "nullEvent", function() { return nullEvent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "pure", function() { return pure; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "raise", function() { return raise; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "send", function() { return send; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "start", function() { return start; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "stop", function() { return stop; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "update", function() { return update; });
/* harmony import */ var _types_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./types.js */ "./node_modules/xstate/es/types.js");
 // xstate-specific action types

var start = _types_js__WEBPACK_IMPORTED_MODULE_0__["ActionTypes"].Start;
var stop = _types_js__WEBPACK_IMPORTED_MODULE_0__["ActionTypes"].Stop;
var raise = _types_js__WEBPACK_IMPORTED_MODULE_0__["ActionTypes"].Raise;
var send = _types_js__WEBPACK_IMPORTED_MODULE_0__["ActionTypes"].Send;
var cancel = _types_js__WEBPACK_IMPORTED_MODULE_0__["ActionTypes"].Cancel;
var nullEvent = _types_js__WEBPACK_IMPORTED_MODULE_0__["ActionTypes"].NullEvent;
var assign = _types_js__WEBPACK_IMPORTED_MODULE_0__["ActionTypes"].Assign;
var after = _types_js__WEBPACK_IMPORTED_MODULE_0__["ActionTypes"].After;
var doneState = _types_js__WEBPACK_IMPORTED_MODULE_0__["ActionTypes"].DoneState;
var log = _types_js__WEBPACK_IMPORTED_MODULE_0__["ActionTypes"].Log;
var init = _types_js__WEBPACK_IMPORTED_MODULE_0__["ActionTypes"].Init;
var invoke = _types_js__WEBPACK_IMPORTED_MODULE_0__["ActionTypes"].Invoke;
var errorExecution = _types_js__WEBPACK_IMPORTED_MODULE_0__["ActionTypes"].ErrorExecution;
var errorPlatform = _types_js__WEBPACK_IMPORTED_MODULE_0__["ActionTypes"].ErrorPlatform;
var error = _types_js__WEBPACK_IMPORTED_MODULE_0__["ActionTypes"].ErrorCustom;
var update = _types_js__WEBPACK_IMPORTED_MODULE_0__["ActionTypes"].Update;
var choose = _types_js__WEBPACK_IMPORTED_MODULE_0__["ActionTypes"].Choose;
var pure = _types_js__WEBPACK_IMPORTED_MODULE_0__["ActionTypes"].Pure;


/***/ }),

/***/ "./node_modules/xstate/es/actions.js":
/*!*******************************************!*\
  !*** ./node_modules/xstate/es/actions.js ***!
  \*******************************************/
/*! exports provided: after, assign, cancel, choose, done, doneInvoke, error, escalate, forwardTo, getActionFunction, initEvent, log, pure, raise, resolveActions, resolveLog, resolveRaise, resolveSend, respond, send, sendParent, sendUpdate, start, stop, toActionObject, toActionObjects, toActivityDefinition */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "after", function() { return after; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "assign", function() { return assign; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "cancel", function() { return cancel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "choose", function() { return choose; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "done", function() { return done; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "doneInvoke", function() { return doneInvoke; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "error", function() { return error; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "escalate", function() { return escalate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "forwardTo", function() { return forwardTo; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getActionFunction", function() { return getActionFunction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initEvent", function() { return initEvent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "log", function() { return log; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "pure", function() { return pure; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "raise", function() { return raise; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "resolveActions", function() { return resolveActions; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "resolveLog", function() { return resolveLog; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "resolveRaise", function() { return resolveRaise; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "resolveSend", function() { return resolveSend; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "respond", function() { return respond; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "send", function() { return send; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sendParent", function() { return sendParent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sendUpdate", function() { return sendUpdate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "start", function() { return start; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "stop", function() { return stop; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "toActionObject", function() { return toActionObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "toActionObjects", function() { return toActionObjects; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "toActivityDefinition", function() { return toActivityDefinition; });
/* harmony import */ var _virtual_tslib_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_virtual/_tslib.js */ "./node_modules/xstate/es/_virtual/_tslib.js");
/* harmony import */ var _environment_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environment.js */ "./node_modules/xstate/es/environment.js");
/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./utils.js */ "./node_modules/xstate/es/utils.js");
/* harmony import */ var _types_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./types.js */ "./node_modules/xstate/es/types.js");
/* harmony import */ var _actionTypes_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./actionTypes.js */ "./node_modules/xstate/es/actionTypes.js");





var initEvent = /*#__PURE__*/Object(_utils_js__WEBPACK_IMPORTED_MODULE_2__["toSCXMLEvent"])({
  type: _actionTypes_js__WEBPACK_IMPORTED_MODULE_4__["init"]
});

function getActionFunction(actionType, actionFunctionMap) {
  return actionFunctionMap ? actionFunctionMap[actionType] || undefined : undefined;
}

function toActionObject(action, actionFunctionMap) {
  var actionObject;

  if (Object(_utils_js__WEBPACK_IMPORTED_MODULE_2__["isString"])(action) || typeof action === 'number') {
    var exec = getActionFunction(action, actionFunctionMap);

    if (Object(_utils_js__WEBPACK_IMPORTED_MODULE_2__["isFunction"])(exec)) {
      actionObject = {
        type: action,
        exec: exec
      };
    } else if (exec) {
      actionObject = exec;
    } else {
      actionObject = {
        type: action,
        exec: undefined
      };
    }
  } else if (Object(_utils_js__WEBPACK_IMPORTED_MODULE_2__["isFunction"])(action)) {
    actionObject = {
      // Convert action to string if unnamed
      type: action.name || action.toString(),
      exec: action
    };
  } else {
    var exec = getActionFunction(action.type, actionFunctionMap);

    if (Object(_utils_js__WEBPACK_IMPORTED_MODULE_2__["isFunction"])(exec)) {
      actionObject = Object(_virtual_tslib_js__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(_virtual_tslib_js__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, action), {
        exec: exec
      });
    } else if (exec) {
      var actionType = exec.type || action.type;
      actionObject = Object(_virtual_tslib_js__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(_virtual_tslib_js__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(_virtual_tslib_js__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, exec), action), {
        type: actionType
      });
    } else {
      actionObject = action;
    }
  }

  Object.defineProperty(actionObject, 'toString', {
    value: function () {
      return actionObject.type;
    },
    enumerable: false,
    configurable: true
  });
  return actionObject;
}

var toActionObjects = function (action, actionFunctionMap) {
  if (!action) {
    return [];
  }

  var actions = Object(_utils_js__WEBPACK_IMPORTED_MODULE_2__["isArray"])(action) ? action : [action];
  return actions.map(function (subAction) {
    return toActionObject(subAction, actionFunctionMap);
  });
};

function toActivityDefinition(action) {
  var actionObject = toActionObject(action);
  return Object(_virtual_tslib_js__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(_virtual_tslib_js__WEBPACK_IMPORTED_MODULE_0__["__assign"])({
    id: Object(_utils_js__WEBPACK_IMPORTED_MODULE_2__["isString"])(action) ? action : actionObject.id
  }, actionObject), {
    type: actionObject.type
  });
}
/**
 * Raises an event. This places the event in the internal event queue, so that
 * the event is immediately consumed by the machine in the current step.
 *
 * @param eventType The event to raise.
 */


function raise(event) {
  if (!Object(_utils_js__WEBPACK_IMPORTED_MODULE_2__["isString"])(event)) {
    return send(event, {
      to: _types_js__WEBPACK_IMPORTED_MODULE_3__["SpecialTargets"].Internal
    });
  }

  return {
    type: _actionTypes_js__WEBPACK_IMPORTED_MODULE_4__["raise"],
    event: event
  };
}

function resolveRaise(action) {
  return {
    type: _actionTypes_js__WEBPACK_IMPORTED_MODULE_4__["raise"],
    _event: Object(_utils_js__WEBPACK_IMPORTED_MODULE_2__["toSCXMLEvent"])(action.event)
  };
}
/**
 * Sends an event. This returns an action that will be read by an interpreter to
 * send the event in the next step, after the current step is finished executing.
 *
 * @param event The event to send.
 * @param options Options to pass into the send event:
 *  - `id` - The unique send event identifier (used with `cancel()`).
 *  - `delay` - The number of milliseconds to delay the sending of the event.
 *  - `to` - The target of this event (by default, the machine the event was sent from).
 */


function send(event, options) {
  return {
    to: options ? options.to : undefined,
    type: _actionTypes_js__WEBPACK_IMPORTED_MODULE_4__["send"],
    event: Object(_utils_js__WEBPACK_IMPORTED_MODULE_2__["isFunction"])(event) ? event : Object(_utils_js__WEBPACK_IMPORTED_MODULE_2__["toEventObject"])(event),
    delay: options ? options.delay : undefined,
    id: options && options.id !== undefined ? options.id : Object(_utils_js__WEBPACK_IMPORTED_MODULE_2__["isFunction"])(event) ? event.name : Object(_utils_js__WEBPACK_IMPORTED_MODULE_2__["getEventType"])(event)
  };
}

function resolveSend(action, ctx, _event, delaysMap) {
  var meta = {
    _event: _event
  }; // TODO: helper function for resolving Expr

  var resolvedEvent = Object(_utils_js__WEBPACK_IMPORTED_MODULE_2__["toSCXMLEvent"])(Object(_utils_js__WEBPACK_IMPORTED_MODULE_2__["isFunction"])(action.event) ? action.event(ctx, _event.data, meta) : action.event);
  var resolvedDelay;

  if (Object(_utils_js__WEBPACK_IMPORTED_MODULE_2__["isString"])(action.delay)) {
    var configDelay = delaysMap && delaysMap[action.delay];
    resolvedDelay = Object(_utils_js__WEBPACK_IMPORTED_MODULE_2__["isFunction"])(configDelay) ? configDelay(ctx, _event.data, meta) : configDelay;
  } else {
    resolvedDelay = Object(_utils_js__WEBPACK_IMPORTED_MODULE_2__["isFunction"])(action.delay) ? action.delay(ctx, _event.data, meta) : action.delay;
  }

  var resolvedTarget = Object(_utils_js__WEBPACK_IMPORTED_MODULE_2__["isFunction"])(action.to) ? action.to(ctx, _event.data, meta) : action.to;
  return Object(_virtual_tslib_js__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(_virtual_tslib_js__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, action), {
    to: resolvedTarget,
    _event: resolvedEvent,
    event: resolvedEvent.data,
    delay: resolvedDelay
  });
}
/**
 * Sends an event to this machine's parent.
 *
 * @param event The event to send to the parent machine.
 * @param options Options to pass into the send event.
 */


function sendParent(event, options) {
  return send(event, Object(_virtual_tslib_js__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(_virtual_tslib_js__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, options), {
    to: _types_js__WEBPACK_IMPORTED_MODULE_3__["SpecialTargets"].Parent
  }));
}
/**
 * Sends an update event to this machine's parent.
 */


function sendUpdate() {
  return sendParent(_actionTypes_js__WEBPACK_IMPORTED_MODULE_4__["update"]);
}
/**
 * Sends an event back to the sender of the original event.
 *
 * @param event The event to send back to the sender
 * @param options Options to pass into the send event
 */


function respond(event, options) {
  return send(event, Object(_virtual_tslib_js__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(_virtual_tslib_js__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, options), {
    to: function (_, __, _a) {
      var _event = _a._event;
      return _event.origin; // TODO: handle when _event.origin is undefined
    }
  }));
}

var defaultLogExpr = function (context, event) {
  return {
    context: context,
    event: event
  };
};
/**
 *
 * @param expr The expression function to evaluate which will be logged.
 *  Takes in 2 arguments:
 *  - `ctx` - the current state context
 *  - `event` - the event that caused this action to be executed.
 * @param label The label to give to the logged expression.
 */


function log(expr, label) {
  if (expr === void 0) {
    expr = defaultLogExpr;
  }

  return {
    type: _actionTypes_js__WEBPACK_IMPORTED_MODULE_4__["log"],
    label: label,
    expr: expr
  };
}

var resolveLog = function (action, ctx, _event) {
  return Object(_virtual_tslib_js__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(_virtual_tslib_js__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, action), {
    value: Object(_utils_js__WEBPACK_IMPORTED_MODULE_2__["isString"])(action.expr) ? action.expr : action.expr(ctx, _event.data, {
      _event: _event
    })
  });
};
/**
 * Cancels an in-flight `send(...)` action. A canceled sent action will not
 * be executed, nor will its event be sent, unless it has already been sent
 * (e.g., if `cancel(...)` is called after the `send(...)` action's `delay`).
 *
 * @param sendId The `id` of the `send(...)` action to cancel.
 */


var cancel = function (sendId) {
  return {
    type: _actionTypes_js__WEBPACK_IMPORTED_MODULE_4__["cancel"],
    sendId: sendId
  };
};
/**
 * Starts an activity.
 *
 * @param activity The activity to start.
 */


function start(activity) {
  var activityDef = toActivityDefinition(activity);
  return {
    type: _types_js__WEBPACK_IMPORTED_MODULE_3__["ActionTypes"].Start,
    activity: activityDef,
    exec: undefined
  };
}
/**
 * Stops an activity.
 *
 * @param activity The activity to stop.
 */


function stop(activity) {
  var activityDef = toActivityDefinition(activity);
  return {
    type: _types_js__WEBPACK_IMPORTED_MODULE_3__["ActionTypes"].Stop,
    activity: activityDef,
    exec: undefined
  };
}
/**
 * Updates the current context of the machine.
 *
 * @param assignment An object that represents the partial context to update.
 */


var assign = function (assignment) {
  return {
    type: _actionTypes_js__WEBPACK_IMPORTED_MODULE_4__["assign"],
    assignment: assignment
  };
};
/**
 * Returns an event type that represents an implicit event that
 * is sent after the specified `delay`.
 *
 * @param delayRef The delay in milliseconds
 * @param id The state node ID where this event is handled
 */


function after(delayRef, id) {
  var idSuffix = id ? "#" + id : '';
  return _types_js__WEBPACK_IMPORTED_MODULE_3__["ActionTypes"].After + "(" + delayRef + ")" + idSuffix;
}
/**
 * Returns an event that represents that a final state node
 * has been reached in the parent state node.
 *
 * @param id The final state node's parent state node `id`
 * @param data The data to pass into the event
 */


function done(id, data) {
  var type = _types_js__WEBPACK_IMPORTED_MODULE_3__["ActionTypes"].DoneState + "." + id;
  var eventObject = {
    type: type,
    data: data
  };

  eventObject.toString = function () {
    return type;
  };

  return eventObject;
}
/**
 * Returns an event that represents that an invoked service has terminated.
 *
 * An invoked service is terminated when it has reached a top-level final state node,
 * but not when it is canceled.
 *
 * @param id The final state node ID
 * @param data The data to pass into the event
 */


function doneInvoke(id, data) {
  var type = _types_js__WEBPACK_IMPORTED_MODULE_3__["ActionTypes"].DoneInvoke + "." + id;
  var eventObject = {
    type: type,
    data: data
  };

  eventObject.toString = function () {
    return type;
  };

  return eventObject;
}

function error(id, data) {
  var type = _types_js__WEBPACK_IMPORTED_MODULE_3__["ActionTypes"].ErrorPlatform + "." + id;
  var eventObject = {
    type: type,
    data: data
  };

  eventObject.toString = function () {
    return type;
  };

  return eventObject;
}

function pure(getActions) {
  return {
    type: _types_js__WEBPACK_IMPORTED_MODULE_3__["ActionTypes"].Pure,
    get: getActions
  };
}
/**
 * Forwards (sends) an event to a specified service.
 *
 * @param target The target service to forward the event to.
 * @param options Options to pass into the send action creator.
 */


function forwardTo(target, options) {
  return send(function (_, event) {
    return event;
  }, Object(_virtual_tslib_js__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(_virtual_tslib_js__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, options), {
    to: target
  }));
}
/**
 * Escalates an error by sending it as an event to this machine's parent.
 *
 * @param errorData The error data to send, or the expression function that
 * takes in the `context`, `event`, and `meta`, and returns the error data to send.
 * @param options Options to pass into the send action creator.
 */


function escalate(errorData, options) {
  return sendParent(function (context, event, meta) {
    return {
      type: _actionTypes_js__WEBPACK_IMPORTED_MODULE_4__["error"],
      data: Object(_utils_js__WEBPACK_IMPORTED_MODULE_2__["isFunction"])(errorData) ? errorData(context, event, meta) : errorData
    };
  }, Object(_virtual_tslib_js__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(_virtual_tslib_js__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, options), {
    to: _types_js__WEBPACK_IMPORTED_MODULE_3__["SpecialTargets"].Parent
  }));
}

function choose(conds) {
  return {
    type: _types_js__WEBPACK_IMPORTED_MODULE_3__["ActionTypes"].Choose,
    conds: conds
  };
}

function resolveActions(machine, currentState, currentContext, _event, actions) {
  var _a = Object(_virtual_tslib_js__WEBPACK_IMPORTED_MODULE_0__["__read"])(Object(_utils_js__WEBPACK_IMPORTED_MODULE_2__["partition"])(actions, function (action) {
    return action.type === _actionTypes_js__WEBPACK_IMPORTED_MODULE_4__["assign"];
  }), 2),
      assignActions = _a[0],
      otherActions = _a[1];

  var updatedContext = assignActions.length ? Object(_utils_js__WEBPACK_IMPORTED_MODULE_2__["updateContext"])(currentContext, _event, assignActions, currentState) : currentContext;
  var resolvedActions = Object(_utils_js__WEBPACK_IMPORTED_MODULE_2__["flatten"])(otherActions.map(function (actionObject) {
    var _a;

    switch (actionObject.type) {
      case _actionTypes_js__WEBPACK_IMPORTED_MODULE_4__["raise"]:
        return resolveRaise(actionObject);

      case _actionTypes_js__WEBPACK_IMPORTED_MODULE_4__["send"]:
        var sendAction = resolveSend(actionObject, updatedContext, _event, machine.options.delays); // TODO: fix ActionTypes.Init

        if (!_environment_js__WEBPACK_IMPORTED_MODULE_1__["IS_PRODUCTION"]) {
          // warn after resolving as we can create better contextual message here
          Object(_utils_js__WEBPACK_IMPORTED_MODULE_2__["warn"])(!Object(_utils_js__WEBPACK_IMPORTED_MODULE_2__["isString"])(actionObject.delay) || typeof sendAction.delay === 'number', // tslint:disable-next-line:max-line-length
          "No delay reference for delay expression '" + actionObject.delay + "' was found on machine '" + machine.id + "'");
        }

        return sendAction;

      case _actionTypes_js__WEBPACK_IMPORTED_MODULE_4__["log"]:
        return resolveLog(actionObject, updatedContext, _event);

      case _actionTypes_js__WEBPACK_IMPORTED_MODULE_4__["choose"]:
        {
          var chooseAction = actionObject;
          var matchedActions = (_a = chooseAction.conds.find(function (condition) {
            var guard = Object(_utils_js__WEBPACK_IMPORTED_MODULE_2__["toGuard"])(condition.cond, machine.options.guards);
            return !guard || Object(_utils_js__WEBPACK_IMPORTED_MODULE_2__["evaluateGuard"])(machine, guard, updatedContext, _event, currentState);
          })) === null || _a === void 0 ? void 0 : _a.actions;

          if (!matchedActions) {
            return [];
          }

          var resolved = resolveActions(machine, currentState, updatedContext, _event, toActionObjects(Object(_utils_js__WEBPACK_IMPORTED_MODULE_2__["toArray"])(matchedActions), machine.options.actions));
          updatedContext = resolved[1];
          return resolved[0];
        }

      case _actionTypes_js__WEBPACK_IMPORTED_MODULE_4__["pure"]:
        {
          var matchedActions = actionObject.get(updatedContext, _event.data);

          if (!matchedActions) {
            return [];
          }

          var resolved = resolveActions(machine, currentState, updatedContext, _event, toActionObjects(Object(_utils_js__WEBPACK_IMPORTED_MODULE_2__["toArray"])(matchedActions), machine.options.actions));
          updatedContext = resolved[1];
          return resolved[0];
        }

      default:
        return toActionObject(actionObject, machine.options.actions);
    }
  }));
  return [resolvedActions, updatedContext];
}



/***/ }),

/***/ "./node_modules/xstate/es/constants.js":
/*!*********************************************!*\
  !*** ./node_modules/xstate/es/constants.js ***!
  \*********************************************/
/*! exports provided: DEFAULT_GUARD_TYPE, EMPTY_ACTIVITY_MAP, STATE_DELIMITER, TARGETLESS_KEY */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DEFAULT_GUARD_TYPE", function() { return DEFAULT_GUARD_TYPE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EMPTY_ACTIVITY_MAP", function() { return EMPTY_ACTIVITY_MAP; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "STATE_DELIMITER", function() { return STATE_DELIMITER; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TARGETLESS_KEY", function() { return TARGETLESS_KEY; });
var STATE_DELIMITER = '.';
var EMPTY_ACTIVITY_MAP = {};
var DEFAULT_GUARD_TYPE = 'xstate.guard';
var TARGETLESS_KEY = '';


/***/ }),

/***/ "./node_modules/xstate/es/devTools.js":
/*!********************************************!*\
  !*** ./node_modules/xstate/es/devTools.js ***!
  \********************************************/
/*! exports provided: registerService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "registerService", function() { return registerService; });
/* harmony import */ var _environment_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./environment.js */ "./node_modules/xstate/es/environment.js");


function getDevTools() {
  var w = window;

  if (!!w.__xstate__) {
    return w.__xstate__;
  }

  return undefined;
}

function registerService(service) {
  if (_environment_js__WEBPACK_IMPORTED_MODULE_0__["IS_PRODUCTION"] || typeof window === 'undefined') {
    return;
  }

  var devTools = getDevTools();

  if (devTools) {
    devTools.register(service);
  }
}



/***/ }),

/***/ "./node_modules/xstate/es/environment.js":
/*!***********************************************!*\
  !*** ./node_modules/xstate/es/environment.js ***!
  \***********************************************/
/*! exports provided: IS_PRODUCTION */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IS_PRODUCTION", function() { return IS_PRODUCTION; });
var IS_PRODUCTION = "development" === 'production';


/***/ }),

/***/ "./node_modules/xstate/es/index.js":
/*!*****************************************!*\
  !*** ./node_modules/xstate/es/index.js ***!
  \*****************************************/
/*! exports provided: matchesState, mapState, ActionTypes, SpecialTargets, assign, doneInvoke, forwardTo, send, sendParent, sendUpdate, State, StateNode, Machine, createMachine, Interpreter, interpret, spawn, matchState, actions */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "actions", function() { return actions; });
/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils.js */ "./node_modules/xstate/es/utils.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "matchesState", function() { return _utils_js__WEBPACK_IMPORTED_MODULE_0__["matchesState"]; });

/* harmony import */ var _mapState_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./mapState.js */ "./node_modules/xstate/es/mapState.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "mapState", function() { return _mapState_js__WEBPACK_IMPORTED_MODULE_1__["mapState"]; });

/* harmony import */ var _types_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./types.js */ "./node_modules/xstate/es/types.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ActionTypes", function() { return _types_js__WEBPACK_IMPORTED_MODULE_2__["ActionTypes"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SpecialTargets", function() { return _types_js__WEBPACK_IMPORTED_MODULE_2__["SpecialTargets"]; });

/* harmony import */ var _actions_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./actions.js */ "./node_modules/xstate/es/actions.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "assign", function() { return _actions_js__WEBPACK_IMPORTED_MODULE_3__["assign"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "doneInvoke", function() { return _actions_js__WEBPACK_IMPORTED_MODULE_3__["doneInvoke"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "forwardTo", function() { return _actions_js__WEBPACK_IMPORTED_MODULE_3__["forwardTo"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "send", function() { return _actions_js__WEBPACK_IMPORTED_MODULE_3__["send"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "sendParent", function() { return _actions_js__WEBPACK_IMPORTED_MODULE_3__["sendParent"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "sendUpdate", function() { return _actions_js__WEBPACK_IMPORTED_MODULE_3__["sendUpdate"]; });

/* harmony import */ var _State_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./State.js */ "./node_modules/xstate/es/State.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "State", function() { return _State_js__WEBPACK_IMPORTED_MODULE_4__["State"]; });

/* harmony import */ var _StateNode_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./StateNode.js */ "./node_modules/xstate/es/StateNode.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "StateNode", function() { return _StateNode_js__WEBPACK_IMPORTED_MODULE_5__["StateNode"]; });

/* harmony import */ var _Machine_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./Machine.js */ "./node_modules/xstate/es/Machine.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Machine", function() { return _Machine_js__WEBPACK_IMPORTED_MODULE_6__["Machine"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "createMachine", function() { return _Machine_js__WEBPACK_IMPORTED_MODULE_6__["createMachine"]; });

/* harmony import */ var _interpreter_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./interpreter.js */ "./node_modules/xstate/es/interpreter.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Interpreter", function() { return _interpreter_js__WEBPACK_IMPORTED_MODULE_7__["Interpreter"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "interpret", function() { return _interpreter_js__WEBPACK_IMPORTED_MODULE_7__["interpret"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "spawn", function() { return _interpreter_js__WEBPACK_IMPORTED_MODULE_7__["spawn"]; });

/* harmony import */ var _match_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./match.js */ "./node_modules/xstate/es/match.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "matchState", function() { return _match_js__WEBPACK_IMPORTED_MODULE_8__["matchState"]; });











var actions = {
  raise: _actions_js__WEBPACK_IMPORTED_MODULE_3__["raise"],
  send: _actions_js__WEBPACK_IMPORTED_MODULE_3__["send"],
  sendParent: _actions_js__WEBPACK_IMPORTED_MODULE_3__["sendParent"],
  sendUpdate: _actions_js__WEBPACK_IMPORTED_MODULE_3__["sendUpdate"],
  log: _actions_js__WEBPACK_IMPORTED_MODULE_3__["log"],
  cancel: _actions_js__WEBPACK_IMPORTED_MODULE_3__["cancel"],
  start: _actions_js__WEBPACK_IMPORTED_MODULE_3__["start"],
  stop: _actions_js__WEBPACK_IMPORTED_MODULE_3__["stop"],
  assign: _actions_js__WEBPACK_IMPORTED_MODULE_3__["assign"],
  after: _actions_js__WEBPACK_IMPORTED_MODULE_3__["after"],
  done: _actions_js__WEBPACK_IMPORTED_MODULE_3__["done"],
  respond: _actions_js__WEBPACK_IMPORTED_MODULE_3__["respond"],
  forwardTo: _actions_js__WEBPACK_IMPORTED_MODULE_3__["forwardTo"],
  escalate: _actions_js__WEBPACK_IMPORTED_MODULE_3__["escalate"],
  choose: _actions_js__WEBPACK_IMPORTED_MODULE_3__["choose"],
  pure: _actions_js__WEBPACK_IMPORTED_MODULE_3__["pure"]
};


/***/ }),

/***/ "./node_modules/xstate/es/interpreter.js":
/*!***********************************************!*\
  !*** ./node_modules/xstate/es/interpreter.js ***!
  \***********************************************/
/*! exports provided: Interpreter, interpret, spawn */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(global) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Interpreter", function() { return Interpreter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "interpret", function() { return interpret; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "spawn", function() { return spawn; });
/* harmony import */ var _virtual_tslib_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_virtual/_tslib.js */ "./node_modules/xstate/es/_virtual/_tslib.js");
/* harmony import */ var _environment_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environment.js */ "./node_modules/xstate/es/environment.js");
/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./utils.js */ "./node_modules/xstate/es/utils.js");
/* harmony import */ var _types_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./types.js */ "./node_modules/xstate/es/types.js");
/* harmony import */ var _stateUtils_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./stateUtils.js */ "./node_modules/xstate/es/stateUtils.js");
/* harmony import */ var _actionTypes_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./actionTypes.js */ "./node_modules/xstate/es/actionTypes.js");
/* harmony import */ var _actions_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./actions.js */ "./node_modules/xstate/es/actions.js");
/* harmony import */ var _State_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./State.js */ "./node_modules/xstate/es/State.js");
/* harmony import */ var _serviceScope_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./serviceScope.js */ "./node_modules/xstate/es/serviceScope.js");
/* harmony import */ var _Actor_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./Actor.js */ "./node_modules/xstate/es/Actor.js");
/* harmony import */ var _scheduler_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./scheduler.js */ "./node_modules/xstate/es/scheduler.js");
/* harmony import */ var _registry_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./registry.js */ "./node_modules/xstate/es/registry.js");
/* harmony import */ var _devTools_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./devTools.js */ "./node_modules/xstate/es/devTools.js");













var DEFAULT_SPAWN_OPTIONS = {
  sync: false,
  autoForward: false
};
var InterpreterStatus;

(function (InterpreterStatus) {
  InterpreterStatus[InterpreterStatus["NotStarted"] = 0] = "NotStarted";
  InterpreterStatus[InterpreterStatus["Running"] = 1] = "Running";
  InterpreterStatus[InterpreterStatus["Stopped"] = 2] = "Stopped";
})(InterpreterStatus || (InterpreterStatus = {}));

var Interpreter =
/*#__PURE__*/

/** @class */
function () {
  /**
   * Creates a new Interpreter instance (i.e., service) for the given machine with the provided options, if any.
   *
   * @param machine The machine to be interpreted
   * @param options Interpreter options
   */
  function Interpreter(machine, options) {
    var _this = this;

    if (options === void 0) {
      options = Interpreter.defaultOptions;
    }

    this.machine = machine;
    this.scheduler = new _scheduler_js__WEBPACK_IMPORTED_MODULE_10__["Scheduler"]();
    this.delayedEventsMap = {};
    this.listeners = new Set();
    this.contextListeners = new Set();
    this.stopListeners = new Set();
    this.doneListeners = new Set();
    this.eventListeners = new Set();
    this.sendListeners = new Set();
    /**
     * Whether the service is started.
     */

    this.initialized = false;
    this._status = InterpreterStatus.NotStarted;
    this.children = new Map();
    this.forwardTo = new Set();
    /**
     * Alias for Interpreter.prototype.start
     */

    this.init = this.start;
    /**
     * Sends an event to the running interpreter to trigger a transition.
     *
     * An array of events (batched) can be sent as well, which will send all
     * batched events to the running interpreter. The listeners will be
     * notified only **once** when all events are processed.
     *
     * @param event The event(s) to send
     */

    this.send = function (event, payload) {
      if (Object(_utils_js__WEBPACK_IMPORTED_MODULE_2__["isArray"])(event)) {
        _this.batch(event);

        return _this.state;
      }

      var _event = Object(_utils_js__WEBPACK_IMPORTED_MODULE_2__["toSCXMLEvent"])(Object(_utils_js__WEBPACK_IMPORTED_MODULE_2__["toEventObject"])(event, payload));

      if (_this._status === InterpreterStatus.Stopped) {
        // do nothing
        if (!_environment_js__WEBPACK_IMPORTED_MODULE_1__["IS_PRODUCTION"]) {
          Object(_utils_js__WEBPACK_IMPORTED_MODULE_2__["warn"])(false, "Event \"" + _event.name + "\" was sent to stopped service \"" + _this.machine.id + "\". This service has already reached its final state, and will not transition.\nEvent: " + JSON.stringify(_event.data));
        }

        return _this.state;
      }

      if (_this._status === InterpreterStatus.NotStarted && _this.options.deferEvents) {
        // tslint:disable-next-line:no-console
        if (!_environment_js__WEBPACK_IMPORTED_MODULE_1__["IS_PRODUCTION"]) {
          Object(_utils_js__WEBPACK_IMPORTED_MODULE_2__["warn"])(false, "Event \"" + _event.name + "\" was sent to uninitialized service \"" + _this.machine.id + "\" and is deferred. Make sure .start() is called for this service.\nEvent: " + JSON.stringify(_event.data));
        }
      } else if (_this._status !== InterpreterStatus.Running) {
        throw new Error("Event \"" + _event.name + "\" was sent to uninitialized service \"" + _this.machine.id + "\". Make sure .start() is called for this service, or set { deferEvents: true } in the service options.\nEvent: " + JSON.stringify(_event.data));
      }

      _this.scheduler.schedule(function () {
        // Forward copy of event to child actors
        _this.forward(_event);

        var nextState = _this.nextState(_event);

        _this.update(nextState, _event);
      });

      return _this._state; // TODO: deprecate (should return void)
      // tslint:disable-next-line:semicolon
    };

    this.sendTo = function (event, to) {
      var isParent = _this.parent && (to === _types_js__WEBPACK_IMPORTED_MODULE_3__["SpecialTargets"].Parent || _this.parent.id === to);
      var target = isParent ? _this.parent : Object(_Actor_js__WEBPACK_IMPORTED_MODULE_9__["isActor"])(to) ? to : _this.children.get(to) || _registry_js__WEBPACK_IMPORTED_MODULE_11__["registry"].get(to);

      if (!target) {
        if (!isParent) {
          throw new Error("Unable to send event to child '" + to + "' from service '" + _this.id + "'.");
        } // tslint:disable-next-line:no-console


        if (!_environment_js__WEBPACK_IMPORTED_MODULE_1__["IS_PRODUCTION"]) {
          Object(_utils_js__WEBPACK_IMPORTED_MODULE_2__["warn"])(false, "Service '" + _this.id + "' has no parent: unable to send event " + event.type);
        }

        return;
      }

      if ('machine' in target) {
        // Send SCXML events to machines
        target.send(Object(_virtual_tslib_js__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(_virtual_tslib_js__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, event), {
          name: event.name === _actionTypes_js__WEBPACK_IMPORTED_MODULE_5__["error"] ? "" + Object(_actions_js__WEBPACK_IMPORTED_MODULE_6__["error"])(_this.id) : event.name,
          origin: _this.sessionId
        }));
      } else {
        // Send normal events to other targets
        target.send(event.data);
      }
    };

    var resolvedOptions = Object(_virtual_tslib_js__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(_virtual_tslib_js__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, Interpreter.defaultOptions), options);

    var clock = resolvedOptions.clock,
        logger = resolvedOptions.logger,
        parent = resolvedOptions.parent,
        id = resolvedOptions.id;
    var resolvedId = id !== undefined ? id : machine.id;
    this.id = resolvedId;
    this.logger = logger;
    this.clock = clock;
    this.parent = parent;
    this.options = resolvedOptions;
    this.scheduler = new _scheduler_js__WEBPACK_IMPORTED_MODULE_10__["Scheduler"]({
      deferEvents: this.options.deferEvents
    });
    this.sessionId = _registry_js__WEBPACK_IMPORTED_MODULE_11__["registry"].bookId();
  }

  Object.defineProperty(Interpreter.prototype, "initialState", {
    get: function () {
      var _this = this;

      if (this._initialState) {
        return this._initialState;
      }

      return Object(_serviceScope_js__WEBPACK_IMPORTED_MODULE_8__["provide"])(this, function () {
        _this._initialState = _this.machine.initialState;
        return _this._initialState;
      });
    },
    enumerable: false,
    configurable: true
  });
  Object.defineProperty(Interpreter.prototype, "state", {
    get: function () {
      if (!_environment_js__WEBPACK_IMPORTED_MODULE_1__["IS_PRODUCTION"]) {
        Object(_utils_js__WEBPACK_IMPORTED_MODULE_2__["warn"])(this._status !== InterpreterStatus.NotStarted, "Attempted to read state from uninitialized service '" + this.id + "'. Make sure the service is started first.");
      }

      return this._state;
    },
    enumerable: false,
    configurable: true
  });
  /**
   * Executes the actions of the given state, with that state's `context` and `event`.
   *
   * @param state The state whose actions will be executed
   * @param actionsConfig The action implementations to use
   */

  Interpreter.prototype.execute = function (state, actionsConfig) {
    var e_1, _a;

    try {
      for (var _b = Object(_virtual_tslib_js__WEBPACK_IMPORTED_MODULE_0__["__values"])(state.actions), _c = _b.next(); !_c.done; _c = _b.next()) {
        var action = _c.value;
        this.exec(action, state, actionsConfig);
      }
    } catch (e_1_1) {
      e_1 = {
        error: e_1_1
      };
    } finally {
      try {
        if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
      } finally {
        if (e_1) throw e_1.error;
      }
    }
  };

  Interpreter.prototype.update = function (state, _event) {
    var e_2, _a, e_3, _b, e_4, _c, e_5, _d;

    var _this = this; // Attach session ID to state


    state._sessionid = this.sessionId; // Update state

    this._state = state; // Execute actions

    if (this.options.execute) {
      this.execute(this.state);
    } // Dev tools


    if (this.devTools) {
      this.devTools.send(_event.data, state);
    } // Execute listeners


    if (state.event) {
      try {
        for (var _e = Object(_virtual_tslib_js__WEBPACK_IMPORTED_MODULE_0__["__values"])(this.eventListeners), _f = _e.next(); !_f.done; _f = _e.next()) {
          var listener = _f.value;
          listener(state.event);
        }
      } catch (e_2_1) {
        e_2 = {
          error: e_2_1
        };
      } finally {
        try {
          if (_f && !_f.done && (_a = _e.return)) _a.call(_e);
        } finally {
          if (e_2) throw e_2.error;
        }
      }
    }

    try {
      for (var _g = Object(_virtual_tslib_js__WEBPACK_IMPORTED_MODULE_0__["__values"])(this.listeners), _h = _g.next(); !_h.done; _h = _g.next()) {
        var listener = _h.value;
        listener(state, state.event);
      }
    } catch (e_3_1) {
      e_3 = {
        error: e_3_1
      };
    } finally {
      try {
        if (_h && !_h.done && (_b = _g.return)) _b.call(_g);
      } finally {
        if (e_3) throw e_3.error;
      }
    }

    try {
      for (var _j = Object(_virtual_tslib_js__WEBPACK_IMPORTED_MODULE_0__["__values"])(this.contextListeners), _k = _j.next(); !_k.done; _k = _j.next()) {
        var contextListener = _k.value;
        contextListener(this.state.context, this.state.history ? this.state.history.context : undefined);
      }
    } catch (e_4_1) {
      e_4 = {
        error: e_4_1
      };
    } finally {
      try {
        if (_k && !_k.done && (_c = _j.return)) _c.call(_j);
      } finally {
        if (e_4) throw e_4.error;
      }
    }

    var isDone = Object(_stateUtils_js__WEBPACK_IMPORTED_MODULE_4__["isInFinalState"])(state.configuration || [], this.machine);

    if (this.state.configuration && isDone) {
      // get final child state node
      var finalChildStateNode = state.configuration.find(function (sn) {
        return sn.type === 'final' && sn.parent === _this.machine;
      });
      var doneData = finalChildStateNode && finalChildStateNode.doneData ? Object(_utils_js__WEBPACK_IMPORTED_MODULE_2__["mapContext"])(finalChildStateNode.doneData, state.context, _event) : undefined;

      try {
        for (var _l = Object(_virtual_tslib_js__WEBPACK_IMPORTED_MODULE_0__["__values"])(this.doneListeners), _m = _l.next(); !_m.done; _m = _l.next()) {
          var listener = _m.value;
          listener(Object(_actions_js__WEBPACK_IMPORTED_MODULE_6__["doneInvoke"])(this.id, doneData));
        }
      } catch (e_5_1) {
        e_5 = {
          error: e_5_1
        };
      } finally {
        try {
          if (_m && !_m.done && (_d = _l.return)) _d.call(_l);
        } finally {
          if (e_5) throw e_5.error;
        }
      }

      this.stop();
    }
  };
  /*
   * Adds a listener that is notified whenever a state transition happens. The listener is called with
   * the next state and the event object that caused the state transition.
   *
   * @param listener The state listener
   */


  Interpreter.prototype.onTransition = function (listener) {
    this.listeners.add(listener); // Send current state to listener

    if (this._status === InterpreterStatus.Running) {
      listener(this.state, this.state.event);
    }

    return this;
  };

  Interpreter.prototype.subscribe = function (nextListenerOrObserver, _, // TODO: error listener
  completeListener) {
    var _this = this;

    if (!nextListenerOrObserver) {
      return {
        unsubscribe: function () {
          return void 0;
        }
      };
    }

    var listener;
    var resolvedCompleteListener = completeListener;

    if (typeof nextListenerOrObserver === 'function') {
      listener = nextListenerOrObserver;
    } else {
      listener = nextListenerOrObserver.next.bind(nextListenerOrObserver);
      resolvedCompleteListener = nextListenerOrObserver.complete.bind(nextListenerOrObserver);
    }

    this.listeners.add(listener); // Send current state to listener

    if (this._status === InterpreterStatus.Running) {
      listener(this.state);
    }

    if (resolvedCompleteListener) {
      this.onDone(resolvedCompleteListener);
    }

    return {
      unsubscribe: function () {
        listener && _this.listeners.delete(listener);
        resolvedCompleteListener && _this.doneListeners.delete(resolvedCompleteListener);
      }
    };
  };
  /**
   * Adds an event listener that is notified whenever an event is sent to the running interpreter.
   * @param listener The event listener
   */


  Interpreter.prototype.onEvent = function (listener) {
    this.eventListeners.add(listener);
    return this;
  };
  /**
   * Adds an event listener that is notified whenever a `send` event occurs.
   * @param listener The event listener
   */


  Interpreter.prototype.onSend = function (listener) {
    this.sendListeners.add(listener);
    return this;
  };
  /**
   * Adds a context listener that is notified whenever the state context changes.
   * @param listener The context listener
   */


  Interpreter.prototype.onChange = function (listener) {
    this.contextListeners.add(listener);
    return this;
  };
  /**
   * Adds a listener that is notified when the machine is stopped.
   * @param listener The listener
   */


  Interpreter.prototype.onStop = function (listener) {
    this.stopListeners.add(listener);
    return this;
  };
  /**
   * Adds a state listener that is notified when the statechart has reached its final state.
   * @param listener The state listener
   */


  Interpreter.prototype.onDone = function (listener) {
    this.doneListeners.add(listener);
    return this;
  };
  /**
   * Removes a listener.
   * @param listener The listener to remove
   */


  Interpreter.prototype.off = function (listener) {
    this.listeners.delete(listener);
    this.eventListeners.delete(listener);
    this.sendListeners.delete(listener);
    this.stopListeners.delete(listener);
    this.doneListeners.delete(listener);
    this.contextListeners.delete(listener);
    return this;
  };
  /**
   * Starts the interpreter from the given state, or the initial state.
   * @param initialState The state to start the statechart from
   */


  Interpreter.prototype.start = function (initialState) {
    var _this = this;

    if (this._status === InterpreterStatus.Running) {
      // Do not restart the service if it is already started
      return this;
    }

    _registry_js__WEBPACK_IMPORTED_MODULE_11__["registry"].register(this.sessionId, this);
    this.initialized = true;
    this._status = InterpreterStatus.Running;
    var resolvedState = initialState === undefined ? this.initialState : Object(_serviceScope_js__WEBPACK_IMPORTED_MODULE_8__["provide"])(this, function () {
      return Object(_State_js__WEBPACK_IMPORTED_MODULE_7__["isState"])(initialState) ? _this.machine.resolveState(initialState) : _this.machine.resolveState(_State_js__WEBPACK_IMPORTED_MODULE_7__["State"].from(initialState, _this.machine.context));
    });

    if (this.options.devTools) {
      this.attachDev();
    }

    this.scheduler.initialize(function () {
      _this.update(resolvedState, _actions_js__WEBPACK_IMPORTED_MODULE_6__["initEvent"]);
    });
    return this;
  };
  /**
   * Stops the interpreter and unsubscribe all listeners.
   *
   * This will also notify the `onStop` listeners.
   */


  Interpreter.prototype.stop = function () {
    var e_6, _a, e_7, _b, e_8, _c, e_9, _d, e_10, _e;

    try {
      for (var _f = Object(_virtual_tslib_js__WEBPACK_IMPORTED_MODULE_0__["__values"])(this.listeners), _g = _f.next(); !_g.done; _g = _f.next()) {
        var listener = _g.value;
        this.listeners.delete(listener);
      }
    } catch (e_6_1) {
      e_6 = {
        error: e_6_1
      };
    } finally {
      try {
        if (_g && !_g.done && (_a = _f.return)) _a.call(_f);
      } finally {
        if (e_6) throw e_6.error;
      }
    }

    try {
      for (var _h = Object(_virtual_tslib_js__WEBPACK_IMPORTED_MODULE_0__["__values"])(this.stopListeners), _j = _h.next(); !_j.done; _j = _h.next()) {
        var listener = _j.value; // call listener, then remove

        listener();
        this.stopListeners.delete(listener);
      }
    } catch (e_7_1) {
      e_7 = {
        error: e_7_1
      };
    } finally {
      try {
        if (_j && !_j.done && (_b = _h.return)) _b.call(_h);
      } finally {
        if (e_7) throw e_7.error;
      }
    }

    try {
      for (var _k = Object(_virtual_tslib_js__WEBPACK_IMPORTED_MODULE_0__["__values"])(this.contextListeners), _l = _k.next(); !_l.done; _l = _k.next()) {
        var listener = _l.value;
        this.contextListeners.delete(listener);
      }
    } catch (e_8_1) {
      e_8 = {
        error: e_8_1
      };
    } finally {
      try {
        if (_l && !_l.done && (_c = _k.return)) _c.call(_k);
      } finally {
        if (e_8) throw e_8.error;
      }
    }

    try {
      for (var _m = Object(_virtual_tslib_js__WEBPACK_IMPORTED_MODULE_0__["__values"])(this.doneListeners), _o = _m.next(); !_o.done; _o = _m.next()) {
        var listener = _o.value;
        this.doneListeners.delete(listener);
      }
    } catch (e_9_1) {
      e_9 = {
        error: e_9_1
      };
    } finally {
      try {
        if (_o && !_o.done && (_d = _m.return)) _d.call(_m);
      } finally {
        if (e_9) throw e_9.error;
      }
    } // Stop all children


    this.children.forEach(function (child) {
      if (Object(_utils_js__WEBPACK_IMPORTED_MODULE_2__["isFunction"])(child.stop)) {
        child.stop();
      }
    });

    try {
      // Cancel all delayed events
      for (var _p = Object(_virtual_tslib_js__WEBPACK_IMPORTED_MODULE_0__["__values"])(Object(_utils_js__WEBPACK_IMPORTED_MODULE_2__["keys"])(this.delayedEventsMap)), _q = _p.next(); !_q.done; _q = _p.next()) {
        var key = _q.value;
        this.clock.clearTimeout(this.delayedEventsMap[key]);
      }
    } catch (e_10_1) {
      e_10 = {
        error: e_10_1
      };
    } finally {
      try {
        if (_q && !_q.done && (_e = _p.return)) _e.call(_p);
      } finally {
        if (e_10) throw e_10.error;
      }
    }

    this.scheduler.clear();
    this.initialized = false;
    this._status = InterpreterStatus.Stopped;
    _registry_js__WEBPACK_IMPORTED_MODULE_11__["registry"].free(this.sessionId);
    return this;
  };

  Interpreter.prototype.batch = function (events) {
    var _this = this;

    if (this._status === InterpreterStatus.NotStarted && this.options.deferEvents) {
      // tslint:disable-next-line:no-console
      if (!_environment_js__WEBPACK_IMPORTED_MODULE_1__["IS_PRODUCTION"]) {
        Object(_utils_js__WEBPACK_IMPORTED_MODULE_2__["warn"])(false, events.length + " event(s) were sent to uninitialized service \"" + this.machine.id + "\" and are deferred. Make sure .start() is called for this service.\nEvent: " + JSON.stringify(event));
      }
    } else if (this._status !== InterpreterStatus.Running) {
      throw new Error( // tslint:disable-next-line:max-line-length
      events.length + " event(s) were sent to uninitialized service \"" + this.machine.id + "\". Make sure .start() is called for this service, or set { deferEvents: true } in the service options.");
    }

    this.scheduler.schedule(function () {
      var e_11, _a;

      var nextState = _this.state;
      var batchChanged = false;
      var batchedActions = [];

      var _loop_1 = function (event_1) {
        var _event = Object(_utils_js__WEBPACK_IMPORTED_MODULE_2__["toSCXMLEvent"])(event_1);

        _this.forward(_event);

        nextState = Object(_serviceScope_js__WEBPACK_IMPORTED_MODULE_8__["provide"])(_this, function () {
          return _this.machine.transition(nextState, _event);
        });
        batchedActions.push.apply(batchedActions, Object(_virtual_tslib_js__WEBPACK_IMPORTED_MODULE_0__["__spread"])(nextState.actions.map(function (a) {
          return Object(_State_js__WEBPACK_IMPORTED_MODULE_7__["bindActionToState"])(a, nextState);
        })));
        batchChanged = batchChanged || !!nextState.changed;
      };

      try {
        for (var events_1 = Object(_virtual_tslib_js__WEBPACK_IMPORTED_MODULE_0__["__values"])(events), events_1_1 = events_1.next(); !events_1_1.done; events_1_1 = events_1.next()) {
          var event_1 = events_1_1.value;

          _loop_1(event_1);
        }
      } catch (e_11_1) {
        e_11 = {
          error: e_11_1
        };
      } finally {
        try {
          if (events_1_1 && !events_1_1.done && (_a = events_1.return)) _a.call(events_1);
        } finally {
          if (e_11) throw e_11.error;
        }
      }

      nextState.changed = batchChanged;
      nextState.actions = batchedActions;

      _this.update(nextState, Object(_utils_js__WEBPACK_IMPORTED_MODULE_2__["toSCXMLEvent"])(events[events.length - 1]));
    });
  };
  /**
   * Returns a send function bound to this interpreter instance.
   *
   * @param event The event to be sent by the sender.
   */


  Interpreter.prototype.sender = function (event) {
    return this.send.bind(this, event);
  };
  /**
   * Returns the next state given the interpreter's current state and the event.
   *
   * This is a pure method that does _not_ update the interpreter's state.
   *
   * @param event The event to determine the next state
   */


  Interpreter.prototype.nextState = function (event) {
    var _this = this;

    var _event = Object(_utils_js__WEBPACK_IMPORTED_MODULE_2__["toSCXMLEvent"])(event);

    if (_event.name.indexOf(_actionTypes_js__WEBPACK_IMPORTED_MODULE_5__["errorPlatform"]) === 0 && !this.state.nextEvents.some(function (nextEvent) {
      return nextEvent.indexOf(_actionTypes_js__WEBPACK_IMPORTED_MODULE_5__["errorPlatform"]) === 0;
    })) {
      throw _event.data.data;
    }

    var nextState = Object(_serviceScope_js__WEBPACK_IMPORTED_MODULE_8__["provide"])(this, function () {
      return _this.machine.transition(_this.state, _event);
    });
    return nextState;
  };

  Interpreter.prototype.forward = function (event) {
    var e_12, _a;

    try {
      for (var _b = Object(_virtual_tslib_js__WEBPACK_IMPORTED_MODULE_0__["__values"])(this.forwardTo), _c = _b.next(); !_c.done; _c = _b.next()) {
        var id = _c.value;
        var child = this.children.get(id);

        if (!child) {
          throw new Error("Unable to forward event '" + event + "' from interpreter '" + this.id + "' to nonexistant child '" + id + "'.");
        }

        child.send(event);
      }
    } catch (e_12_1) {
      e_12 = {
        error: e_12_1
      };
    } finally {
      try {
        if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
      } finally {
        if (e_12) throw e_12.error;
      }
    }
  };

  Interpreter.prototype.defer = function (sendAction) {
    var _this = this;

    this.delayedEventsMap[sendAction.id] = this.clock.setTimeout(function () {
      if (sendAction.to) {
        _this.sendTo(sendAction._event, sendAction.to);
      } else {
        _this.send(sendAction._event);
      }
    }, sendAction.delay);
  };

  Interpreter.prototype.cancel = function (sendId) {
    this.clock.clearTimeout(this.delayedEventsMap[sendId]);
    delete this.delayedEventsMap[sendId];
  };

  Interpreter.prototype.exec = function (action, state, actionFunctionMap) {
    if (actionFunctionMap === void 0) {
      actionFunctionMap = this.machine.options.actions;
    }

    var context = state.context,
        _event = state._event;
    var actionOrExec = action.exec || Object(_actions_js__WEBPACK_IMPORTED_MODULE_6__["getActionFunction"])(action.type, actionFunctionMap);
    var exec = Object(_utils_js__WEBPACK_IMPORTED_MODULE_2__["isFunction"])(actionOrExec) ? actionOrExec : actionOrExec ? actionOrExec.exec : action.exec;

    if (exec) {
      try {
        return exec(context, _event.data, {
          action: action,
          state: this.state,
          _event: _event
        });
      } catch (err) {
        if (this.parent) {
          this.parent.send({
            type: 'xstate.error',
            data: err
          });
        }

        throw err;
      }
    }

    switch (action.type) {
      case _actionTypes_js__WEBPACK_IMPORTED_MODULE_5__["send"]:
        var sendAction = action;

        if (typeof sendAction.delay === 'number') {
          this.defer(sendAction);
          return;
        } else {
          if (sendAction.to) {
            this.sendTo(sendAction._event, sendAction.to);
          } else {
            this.send(sendAction._event);
          }
        }

        break;

      case _actionTypes_js__WEBPACK_IMPORTED_MODULE_5__["cancel"]:
        this.cancel(action.sendId);
        break;

      case _actionTypes_js__WEBPACK_IMPORTED_MODULE_5__["start"]:
        {
          var activity = action.activity; // If the activity will be stopped right after it's started
          // (such as in transient states)
          // don't bother starting the activity.

          if (!this.state.activities[activity.id || activity.type]) {
            break;
          } // Invoked services


          if (activity.type === _types_js__WEBPACK_IMPORTED_MODULE_3__["ActionTypes"].Invoke) {
            var invokeSource = Object(_utils_js__WEBPACK_IMPORTED_MODULE_2__["toInvokeSource"])(activity.src);
            var serviceCreator = this.machine.options.services ? this.machine.options.services[invokeSource.type] : undefined;
            var id = activity.id,
                data = activity.data;

            if (!_environment_js__WEBPACK_IMPORTED_MODULE_1__["IS_PRODUCTION"]) {
              Object(_utils_js__WEBPACK_IMPORTED_MODULE_2__["warn"])(!('forward' in activity), // tslint:disable-next-line:max-line-length
              "`forward` property is deprecated (found in invocation of '" + activity.src + "' in in machine '" + this.machine.id + "'). " + "Please use `autoForward` instead.");
            }

            var autoForward = 'autoForward' in activity ? activity.autoForward : !!activity.forward;

            if (!serviceCreator) {
              // tslint:disable-next-line:no-console
              if (!_environment_js__WEBPACK_IMPORTED_MODULE_1__["IS_PRODUCTION"]) {
                Object(_utils_js__WEBPACK_IMPORTED_MODULE_2__["warn"])(false, "No service found for invocation '" + activity.src + "' in machine '" + this.machine.id + "'.");
              }

              return;
            }

            var resolvedData = data ? Object(_utils_js__WEBPACK_IMPORTED_MODULE_2__["mapContext"])(data, context, _event) : undefined;
            var source = Object(_utils_js__WEBPACK_IMPORTED_MODULE_2__["isFunction"])(serviceCreator) ? serviceCreator(context, _event.data, {
              data: resolvedData,
              src: invokeSource
            }) : serviceCreator;

            if (Object(_utils_js__WEBPACK_IMPORTED_MODULE_2__["isPromiseLike"])(source)) {
              this.state.children[id] = this.spawnPromise(Promise.resolve(source), id);
            } else if (Object(_utils_js__WEBPACK_IMPORTED_MODULE_2__["isFunction"])(source)) {
              this.state.children[id] = this.spawnCallback(source, id);
            } else if (Object(_utils_js__WEBPACK_IMPORTED_MODULE_2__["isObservable"])(source)) {
              this.state.children[id] = this.spawnObservable(source, id);
            } else if (Object(_utils_js__WEBPACK_IMPORTED_MODULE_2__["isMachine"])(source)) {
              // TODO: try/catch here
              this.state.children[id] = this.spawnMachine(resolvedData ? source.withContext(resolvedData) : source, {
                id: id,
                autoForward: autoForward
              });
            }
          } else {
            this.spawnActivity(activity);
          }

          break;
        }

      case _actionTypes_js__WEBPACK_IMPORTED_MODULE_5__["stop"]:
        {
          this.stopChild(action.activity.id);
          break;
        }

      case _actionTypes_js__WEBPACK_IMPORTED_MODULE_5__["log"]:
        var label = action.label,
            value = action.value;

        if (label) {
          this.logger(label, value);
        } else {
          this.logger(value);
        }

        break;

      default:
        if (!_environment_js__WEBPACK_IMPORTED_MODULE_1__["IS_PRODUCTION"]) {
          Object(_utils_js__WEBPACK_IMPORTED_MODULE_2__["warn"])(false, "No implementation found for action type '" + action.type + "'");
        }

        break;
    }

    return undefined;
  };

  Interpreter.prototype.removeChild = function (childId) {
    this.children.delete(childId);
    this.forwardTo.delete(childId);
    delete this.state.children[childId];
  };

  Interpreter.prototype.stopChild = function (childId) {
    var child = this.children.get(childId);

    if (!child) {
      return;
    }

    this.removeChild(childId);

    if (Object(_utils_js__WEBPACK_IMPORTED_MODULE_2__["isFunction"])(child.stop)) {
      child.stop();
    }
  };

  Interpreter.prototype.spawn = function (entity, name, options) {
    if (Object(_utils_js__WEBPACK_IMPORTED_MODULE_2__["isPromiseLike"])(entity)) {
      return this.spawnPromise(Promise.resolve(entity), name);
    } else if (Object(_utils_js__WEBPACK_IMPORTED_MODULE_2__["isFunction"])(entity)) {
      return this.spawnCallback(entity, name);
    } else if (Object(_Actor_js__WEBPACK_IMPORTED_MODULE_9__["isActor"])(entity)) {
      return this.spawnActor(entity);
    } else if (Object(_utils_js__WEBPACK_IMPORTED_MODULE_2__["isObservable"])(entity)) {
      return this.spawnObservable(entity, name);
    } else if (Object(_utils_js__WEBPACK_IMPORTED_MODULE_2__["isMachine"])(entity)) {
      return this.spawnMachine(entity, Object(_virtual_tslib_js__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(_virtual_tslib_js__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, options), {
        id: name
      }));
    } else {
      throw new Error("Unable to spawn entity \"" + name + "\" of type \"" + typeof entity + "\".");
    }
  };

  Interpreter.prototype.spawnMachine = function (machine, options) {
    var _this = this;

    if (options === void 0) {
      options = {};
    }

    var childService = new Interpreter(machine, Object(_virtual_tslib_js__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(_virtual_tslib_js__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, this.options), {
      parent: this,
      id: options.id || machine.id
    }));

    var resolvedOptions = Object(_virtual_tslib_js__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(_virtual_tslib_js__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, DEFAULT_SPAWN_OPTIONS), options);

    if (resolvedOptions.sync) {
      childService.onTransition(function (state) {
        _this.send(_actionTypes_js__WEBPACK_IMPORTED_MODULE_5__["update"], {
          state: state,
          id: childService.id
        });
      });
    }

    var actor = childService;
    this.children.set(childService.id, actor);

    if (resolvedOptions.autoForward) {
      this.forwardTo.add(childService.id);
    }

    childService.onDone(function (doneEvent) {
      _this.removeChild(childService.id);

      _this.send(Object(_utils_js__WEBPACK_IMPORTED_MODULE_2__["toSCXMLEvent"])(doneEvent, {
        origin: childService.id
      }));
    }).start();
    return actor;
  };

  Interpreter.prototype.spawnPromise = function (promise, id) {
    var _this = this;

    var canceled = false;
    promise.then(function (response) {
      if (!canceled) {
        _this.removeChild(id);

        _this.send(Object(_utils_js__WEBPACK_IMPORTED_MODULE_2__["toSCXMLEvent"])(Object(_actions_js__WEBPACK_IMPORTED_MODULE_6__["doneInvoke"])(id, response), {
          origin: id
        }));
      }
    }, function (errorData) {
      if (!canceled) {
        _this.removeChild(id);

        var errorEvent = Object(_actions_js__WEBPACK_IMPORTED_MODULE_6__["error"])(id, errorData);

        try {
          // Send "error.platform.id" to this (parent).
          _this.send(Object(_utils_js__WEBPACK_IMPORTED_MODULE_2__["toSCXMLEvent"])(errorEvent, {
            origin: id
          }));
        } catch (error) {
          Object(_utils_js__WEBPACK_IMPORTED_MODULE_2__["reportUnhandledExceptionOnInvocation"])(errorData, error, id);

          if (_this.devTools) {
            _this.devTools.send(errorEvent, _this.state);
          }

          if (_this.machine.strict) {
            // it would be better to always stop the state machine if unhandled
            // exception/promise rejection happens but because we don't want to
            // break existing code so enforce it on strict mode only especially so
            // because documentation says that onError is optional
            _this.stop();
          }
        }
      }
    });
    var actor = {
      id: id,
      send: function () {
        return void 0;
      },
      subscribe: function (next, handleError, complete) {
        var unsubscribed = false;
        promise.then(function (response) {
          if (unsubscribed) {
            return;
          }

          next && next(response);

          if (unsubscribed) {
            return;
          }

          complete && complete();
        }, function (err) {
          if (unsubscribed) {
            return;
          }

          handleError(err);
        });
        return {
          unsubscribe: function () {
            return unsubscribed = true;
          }
        };
      },
      stop: function () {
        canceled = true;
      },
      toJSON: function () {
        return {
          id: id
        };
      }
    };
    this.children.set(id, actor);
    return actor;
  };

  Interpreter.prototype.spawnCallback = function (callback, id) {
    var _this = this;

    var canceled = false;
    var receivers = new Set();
    var listeners = new Set();

    var receive = function (e) {
      listeners.forEach(function (listener) {
        return listener(e);
      });

      if (canceled) {
        return;
      }

      _this.send(e);
    };

    var callbackStop;

    try {
      callbackStop = callback(receive, function (newListener) {
        receivers.add(newListener);
      });
    } catch (err) {
      this.send(Object(_actions_js__WEBPACK_IMPORTED_MODULE_6__["error"])(id, err));
    }

    if (Object(_utils_js__WEBPACK_IMPORTED_MODULE_2__["isPromiseLike"])(callbackStop)) {
      // it turned out to be an async function, can't reliably check this before calling `callback`
      // because transpiled async functions are not recognizable
      return this.spawnPromise(callbackStop, id);
    }

    var actor = {
      id: id,
      send: function (event) {
        return receivers.forEach(function (receiver) {
          return receiver(event);
        });
      },
      subscribe: function (next) {
        listeners.add(next);
        return {
          unsubscribe: function () {
            listeners.delete(next);
          }
        };
      },
      stop: function () {
        canceled = true;

        if (Object(_utils_js__WEBPACK_IMPORTED_MODULE_2__["isFunction"])(callbackStop)) {
          callbackStop();
        }
      },
      toJSON: function () {
        return {
          id: id
        };
      }
    };
    this.children.set(id, actor);
    return actor;
  };

  Interpreter.prototype.spawnObservable = function (source, id) {
    var _this = this;

    var subscription = source.subscribe(function (value) {
      _this.send(Object(_utils_js__WEBPACK_IMPORTED_MODULE_2__["toSCXMLEvent"])(value, {
        origin: id
      }));
    }, function (err) {
      _this.removeChild(id);

      _this.send(Object(_utils_js__WEBPACK_IMPORTED_MODULE_2__["toSCXMLEvent"])(Object(_actions_js__WEBPACK_IMPORTED_MODULE_6__["error"])(id, err), {
        origin: id
      }));
    }, function () {
      _this.removeChild(id);

      _this.send(Object(_utils_js__WEBPACK_IMPORTED_MODULE_2__["toSCXMLEvent"])(Object(_actions_js__WEBPACK_IMPORTED_MODULE_6__["doneInvoke"])(id), {
        origin: id
      }));
    });
    var actor = {
      id: id,
      send: function () {
        return void 0;
      },
      subscribe: function (next, handleError, complete) {
        return source.subscribe(next, handleError, complete);
      },
      stop: function () {
        return subscription.unsubscribe();
      },
      toJSON: function () {
        return {
          id: id
        };
      }
    };
    this.children.set(id, actor);
    return actor;
  };

  Interpreter.prototype.spawnActor = function (actor) {
    this.children.set(actor.id, actor);
    return actor;
  };

  Interpreter.prototype.spawnActivity = function (activity) {
    var implementation = this.machine.options && this.machine.options.activities ? this.machine.options.activities[activity.type] : undefined;

    if (!implementation) {
      if (!_environment_js__WEBPACK_IMPORTED_MODULE_1__["IS_PRODUCTION"]) {
        Object(_utils_js__WEBPACK_IMPORTED_MODULE_2__["warn"])(false, "No implementation found for activity '" + activity.type + "'");
      } // tslint:disable-next-line:no-console


      return;
    } // Start implementation


    var dispose = implementation(this.state.context, activity);
    this.spawnEffect(activity.id, dispose);
  };

  Interpreter.prototype.spawnEffect = function (id, dispose) {
    this.children.set(id, {
      id: id,
      send: function () {
        return void 0;
      },
      subscribe: function () {
        return {
          unsubscribe: function () {
            return void 0;
          }
        };
      },
      stop: dispose || undefined,
      toJSON: function () {
        return {
          id: id
        };
      }
    });
  };

  Interpreter.prototype.attachDev = function () {
    if (this.options.devTools && typeof window !== 'undefined') {
      if (window.__REDUX_DEVTOOLS_EXTENSION__) {
        var devToolsOptions = typeof this.options.devTools === 'object' ? this.options.devTools : undefined;
        this.devTools = window.__REDUX_DEVTOOLS_EXTENSION__.connect(Object(_virtual_tslib_js__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(_virtual_tslib_js__WEBPACK_IMPORTED_MODULE_0__["__assign"])({
          name: this.id,
          autoPause: true,
          stateSanitizer: function (state) {
            return {
              value: state.value,
              context: state.context,
              actions: state.actions
            };
          }
        }, devToolsOptions), {
          features: Object(_virtual_tslib_js__WEBPACK_IMPORTED_MODULE_0__["__assign"])({
            jump: false,
            skip: false
          }, devToolsOptions ? devToolsOptions.features : undefined)
        }), this.machine);
        this.devTools.init(this.state);
      } // add XState-specific dev tooling hook


      Object(_devTools_js__WEBPACK_IMPORTED_MODULE_12__["registerService"])(this);
    }
  };

  Interpreter.prototype.toJSON = function () {
    return {
      id: this.id
    };
  };

  Interpreter.prototype[_utils_js__WEBPACK_IMPORTED_MODULE_2__["symbolObservable"]] = function () {
    return this;
  };
  /**
   * The default interpreter options:
   *
   * - `clock` uses the global `setTimeout` and `clearTimeout` functions
   * - `logger` uses the global `console.log()` method
   */


  Interpreter.defaultOptions = /*#__PURE__*/function (global) {
    return {
      execute: true,
      deferEvents: true,
      clock: {
        setTimeout: function (fn, ms) {
          return global.setTimeout.call(null, fn, ms);
        },
        clearTimeout: function (id) {
          return global.clearTimeout.call(null, id);
        }
      },
      logger: global.console.log.bind(console),
      devTools: false
    };
  }(typeof self !== 'undefined' ? self : global);

  Interpreter.interpret = interpret;
  return Interpreter;
}();

var resolveSpawnOptions = function (nameOrOptions) {
  if (Object(_utils_js__WEBPACK_IMPORTED_MODULE_2__["isString"])(nameOrOptions)) {
    return Object(_virtual_tslib_js__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(_virtual_tslib_js__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, DEFAULT_SPAWN_OPTIONS), {
      name: nameOrOptions
    });
  }

  return Object(_virtual_tslib_js__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(_virtual_tslib_js__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(_virtual_tslib_js__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, DEFAULT_SPAWN_OPTIONS), {
    name: Object(_utils_js__WEBPACK_IMPORTED_MODULE_2__["uniqueId"])()
  }), nameOrOptions);
};

function spawn(entity, nameOrOptions) {
  var resolvedOptions = resolveSpawnOptions(nameOrOptions);
  return Object(_serviceScope_js__WEBPACK_IMPORTED_MODULE_8__["consume"])(function (service) {
    if (!_environment_js__WEBPACK_IMPORTED_MODULE_1__["IS_PRODUCTION"]) {
      var isLazyEntity = Object(_utils_js__WEBPACK_IMPORTED_MODULE_2__["isMachine"])(entity) || Object(_utils_js__WEBPACK_IMPORTED_MODULE_2__["isFunction"])(entity);
      Object(_utils_js__WEBPACK_IMPORTED_MODULE_2__["warn"])(!!service || isLazyEntity, "Attempted to spawn an Actor (ID: \"" + (Object(_utils_js__WEBPACK_IMPORTED_MODULE_2__["isMachine"])(entity) ? entity.id : 'undefined') + "\") outside of a service. This will have no effect.");
    }

    if (service) {
      return service.spawn(entity, resolvedOptions.name, resolvedOptions);
    } else {
      return Object(_Actor_js__WEBPACK_IMPORTED_MODULE_9__["createDeferredActor"])(entity, resolvedOptions.name);
    }
  });
}
/**
 * Creates a new Interpreter instance for the given machine with the provided options, if any.
 *
 * @param machine The machine to interpret
 * @param options Interpreter options
 */


function interpret(machine, options) {
  var interpreter = new Interpreter(machine, options);
  return interpreter;
}


/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./node_modules/xstate/es/invokeUtils.js":
/*!***********************************************!*\
  !*** ./node_modules/xstate/es/invokeUtils.js ***!
  \***********************************************/
/*! exports provided: toInvokeDefinition, toInvokeSource */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "toInvokeDefinition", function() { return toInvokeDefinition; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "toInvokeSource", function() { return toInvokeSource; });
/* harmony import */ var _virtual_tslib_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_virtual/_tslib.js */ "./node_modules/xstate/es/_virtual/_tslib.js");
/* harmony import */ var _actionTypes_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./actionTypes.js */ "./node_modules/xstate/es/actionTypes.js");
/* harmony import */ var _actions_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./actions.js */ "./node_modules/xstate/es/actions.js");




function toInvokeSource(src) {
  if (typeof src === 'string') {
    var simpleSrc = {
      type: src
    };

    simpleSrc.toString = function () {
      return src;
    }; // v4 compat - TODO: remove in v5


    return simpleSrc;
  }

  return src;
}

function toInvokeDefinition(invokeConfig) {
  return Object(_virtual_tslib_js__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(_virtual_tslib_js__WEBPACK_IMPORTED_MODULE_0__["__assign"])({
    type: _actionTypes_js__WEBPACK_IMPORTED_MODULE_1__["invoke"]
  }, invokeConfig), {
    toJSON: function () {
      var onDone = invokeConfig.onDone,
          onError = invokeConfig.onError,
          invokeDef = Object(_virtual_tslib_js__WEBPACK_IMPORTED_MODULE_0__["__rest"])(invokeConfig, ["onDone", "onError"]);

      return Object(_virtual_tslib_js__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(_virtual_tslib_js__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, invokeDef), {
        type: _actionTypes_js__WEBPACK_IMPORTED_MODULE_1__["invoke"],
        src: toInvokeSource(invokeConfig.src)
      });
    }
  });
}



/***/ }),

/***/ "./node_modules/xstate/es/mapState.js":
/*!********************************************!*\
  !*** ./node_modules/xstate/es/mapState.js ***!
  \********************************************/
/*! exports provided: mapState */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mapState", function() { return mapState; });
/* harmony import */ var _virtual_tslib_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_virtual/_tslib.js */ "./node_modules/xstate/es/_virtual/_tslib.js");
/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utils.js */ "./node_modules/xstate/es/utils.js");



function mapState(stateMap, stateId) {
  var e_1, _a;

  var foundStateId;

  try {
    for (var _b = Object(_virtual_tslib_js__WEBPACK_IMPORTED_MODULE_0__["__values"])(Object(_utils_js__WEBPACK_IMPORTED_MODULE_1__["keys"])(stateMap)), _c = _b.next(); !_c.done; _c = _b.next()) {
      var mappedStateId = _c.value;

      if (Object(_utils_js__WEBPACK_IMPORTED_MODULE_1__["matchesState"])(mappedStateId, stateId) && (!foundStateId || stateId.length > foundStateId.length)) {
        foundStateId = mappedStateId;
      }
    }
  } catch (e_1_1) {
    e_1 = {
      error: e_1_1
    };
  } finally {
    try {
      if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
    } finally {
      if (e_1) throw e_1.error;
    }
  }

  return stateMap[foundStateId];
}



/***/ }),

/***/ "./node_modules/xstate/es/match.js":
/*!*****************************************!*\
  !*** ./node_modules/xstate/es/match.js ***!
  \*****************************************/
/*! exports provided: matchState */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "matchState", function() { return matchState; });
/* harmony import */ var _virtual_tslib_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_virtual/_tslib.js */ "./node_modules/xstate/es/_virtual/_tslib.js");
/* harmony import */ var _State_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./State.js */ "./node_modules/xstate/es/State.js");



function matchState(state, patterns, defaultValue) {
  var e_1, _a;

  var resolvedState = _State_js__WEBPACK_IMPORTED_MODULE_1__["State"].from(state, state instanceof _State_js__WEBPACK_IMPORTED_MODULE_1__["State"] ? state.context : undefined);

  try {
    for (var patterns_1 = Object(_virtual_tslib_js__WEBPACK_IMPORTED_MODULE_0__["__values"])(patterns), patterns_1_1 = patterns_1.next(); !patterns_1_1.done; patterns_1_1 = patterns_1.next()) {
      var _b = Object(_virtual_tslib_js__WEBPACK_IMPORTED_MODULE_0__["__read"])(patterns_1_1.value, 2),
          stateValue = _b[0],
          getValue = _b[1];

      if (resolvedState.matches(stateValue)) {
        return getValue(resolvedState);
      }
    }
  } catch (e_1_1) {
    e_1 = {
      error: e_1_1
    };
  } finally {
    try {
      if (patterns_1_1 && !patterns_1_1.done && (_a = patterns_1.return)) _a.call(patterns_1);
    } finally {
      if (e_1) throw e_1.error;
    }
  }

  return defaultValue(resolvedState);
}



/***/ }),

/***/ "./node_modules/xstate/es/registry.js":
/*!********************************************!*\
  !*** ./node_modules/xstate/es/registry.js ***!
  \********************************************/
/*! exports provided: registry */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "registry", function() { return registry; });
var children = /*#__PURE__*/new Map();
var sessionIdIndex = 0;
var registry = {
  bookId: function () {
    return "x:" + sessionIdIndex++;
  },
  register: function (id, actor) {
    children.set(id, actor);
    return id;
  },
  get: function (id) {
    return children.get(id);
  },
  free: function (id) {
    children.delete(id);
  }
};


/***/ }),

/***/ "./node_modules/xstate/es/scheduler.js":
/*!*********************************************!*\
  !*** ./node_modules/xstate/es/scheduler.js ***!
  \*********************************************/
/*! exports provided: Scheduler */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Scheduler", function() { return Scheduler; });
/* harmony import */ var _virtual_tslib_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_virtual/_tslib.js */ "./node_modules/xstate/es/_virtual/_tslib.js");

var defaultOptions = {
  deferEvents: false
};

var Scheduler =
/*#__PURE__*/

/** @class */
function () {
  function Scheduler(options) {
    this.processingEvent = false;
    this.queue = [];
    this.initialized = false;
    this.options = Object(_virtual_tslib_js__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(_virtual_tslib_js__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, defaultOptions), options);
  }

  Scheduler.prototype.initialize = function (callback) {
    this.initialized = true;

    if (callback) {
      if (!this.options.deferEvents) {
        this.schedule(callback);
        return;
      }

      this.process(callback);
    }

    this.flushEvents();
  };

  Scheduler.prototype.schedule = function (task) {
    if (!this.initialized || this.processingEvent) {
      this.queue.push(task);
      return;
    }

    if (this.queue.length !== 0) {
      throw new Error('Event queue should be empty when it is not processing events');
    }

    this.process(task);
    this.flushEvents();
  };

  Scheduler.prototype.clear = function () {
    this.queue = [];
  };

  Scheduler.prototype.flushEvents = function () {
    var nextCallback = this.queue.shift();

    while (nextCallback) {
      this.process(nextCallback);
      nextCallback = this.queue.shift();
    }
  };

  Scheduler.prototype.process = function (callback) {
    this.processingEvent = true;

    try {
      callback();
    } catch (e) {
      // there is no use to keep the future events
      // as the situation is not anymore the same
      this.clear();
      throw e;
    } finally {
      this.processingEvent = false;
    }
  };

  return Scheduler;
}();



/***/ }),

/***/ "./node_modules/xstate/es/serviceScope.js":
/*!************************************************!*\
  !*** ./node_modules/xstate/es/serviceScope.js ***!
  \************************************************/
/*! exports provided: consume, provide */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "consume", function() { return consume; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "provide", function() { return provide; });
/**
 * Maintains a stack of the current service in scope.
 * This is used to provide the correct service to spawn().
 */
var serviceStack = [];

var provide = function (service, fn) {
  serviceStack.push(service);
  var result = fn(service);
  serviceStack.pop();
  return result;
};

var consume = function (fn) {
  return fn(serviceStack[serviceStack.length - 1]);
};



/***/ }),

/***/ "./node_modules/xstate/es/stateUtils.js":
/*!**********************************************!*\
  !*** ./node_modules/xstate/es/stateUtils.js ***!
  \**********************************************/
/*! exports provided: getAdjList, getAllStateNodes, getChildren, getConfiguration, getValue, has, isInFinalState, isLeafNode, nextEvents */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getAdjList", function() { return getAdjList; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getAllStateNodes", function() { return getAllStateNodes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getChildren", function() { return getChildren; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getConfiguration", function() { return getConfiguration; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getValue", function() { return getValue; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "has", function() { return has; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isInFinalState", function() { return isInFinalState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isLeafNode", function() { return isLeafNode; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "nextEvents", function() { return nextEvents; });
/* harmony import */ var _virtual_tslib_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_virtual/_tslib.js */ "./node_modules/xstate/es/_virtual/_tslib.js");
/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utils.js */ "./node_modules/xstate/es/utils.js");



var isLeafNode = function (stateNode) {
  return stateNode.type === 'atomic' || stateNode.type === 'final';
};

function getChildren(stateNode) {
  return Object(_utils_js__WEBPACK_IMPORTED_MODULE_1__["keys"])(stateNode.states).map(function (key) {
    return stateNode.states[key];
  });
}

function getAllStateNodes(stateNode) {
  var stateNodes = [stateNode];

  if (isLeafNode(stateNode)) {
    return stateNodes;
  }

  return stateNodes.concat(Object(_utils_js__WEBPACK_IMPORTED_MODULE_1__["flatten"])(getChildren(stateNode).map(getAllStateNodes)));
}

function getConfiguration(prevStateNodes, stateNodes) {
  var e_1, _a, e_2, _b, e_3, _c, e_4, _d;

  var prevConfiguration = new Set(prevStateNodes);
  var prevAdjList = getAdjList(prevConfiguration);
  var configuration = new Set(stateNodes);

  try {
    // add all ancestors
    for (var configuration_1 = Object(_virtual_tslib_js__WEBPACK_IMPORTED_MODULE_0__["__values"])(configuration), configuration_1_1 = configuration_1.next(); !configuration_1_1.done; configuration_1_1 = configuration_1.next()) {
      var s = configuration_1_1.value;
      var m = s.parent;

      while (m && !configuration.has(m)) {
        configuration.add(m);
        m = m.parent;
      }
    }
  } catch (e_1_1) {
    e_1 = {
      error: e_1_1
    };
  } finally {
    try {
      if (configuration_1_1 && !configuration_1_1.done && (_a = configuration_1.return)) _a.call(configuration_1);
    } finally {
      if (e_1) throw e_1.error;
    }
  }

  var adjList = getAdjList(configuration);

  try {
    // add descendants
    for (var configuration_2 = Object(_virtual_tslib_js__WEBPACK_IMPORTED_MODULE_0__["__values"])(configuration), configuration_2_1 = configuration_2.next(); !configuration_2_1.done; configuration_2_1 = configuration_2.next()) {
      var s = configuration_2_1.value; // if previously active, add existing child nodes

      if (s.type === 'compound' && (!adjList.get(s) || !adjList.get(s).length)) {
        if (prevAdjList.get(s)) {
          prevAdjList.get(s).forEach(function (sn) {
            return configuration.add(sn);
          });
        } else {
          s.initialStateNodes.forEach(function (sn) {
            return configuration.add(sn);
          });
        }
      } else {
        if (s.type === 'parallel') {
          try {
            for (var _e = (e_3 = void 0, Object(_virtual_tslib_js__WEBPACK_IMPORTED_MODULE_0__["__values"])(getChildren(s))), _f = _e.next(); !_f.done; _f = _e.next()) {
              var child = _f.value;

              if (child.type === 'history') {
                continue;
              }

              if (!configuration.has(child)) {
                configuration.add(child);

                if (prevAdjList.get(child)) {
                  prevAdjList.get(child).forEach(function (sn) {
                    return configuration.add(sn);
                  });
                } else {
                  child.initialStateNodes.forEach(function (sn) {
                    return configuration.add(sn);
                  });
                }
              }
            }
          } catch (e_3_1) {
            e_3 = {
              error: e_3_1
            };
          } finally {
            try {
              if (_f && !_f.done && (_c = _e.return)) _c.call(_e);
            } finally {
              if (e_3) throw e_3.error;
            }
          }
        }
      }
    }
  } catch (e_2_1) {
    e_2 = {
      error: e_2_1
    };
  } finally {
    try {
      if (configuration_2_1 && !configuration_2_1.done && (_b = configuration_2.return)) _b.call(configuration_2);
    } finally {
      if (e_2) throw e_2.error;
    }
  }

  try {
    // add all ancestors
    for (var configuration_3 = Object(_virtual_tslib_js__WEBPACK_IMPORTED_MODULE_0__["__values"])(configuration), configuration_3_1 = configuration_3.next(); !configuration_3_1.done; configuration_3_1 = configuration_3.next()) {
      var s = configuration_3_1.value;
      var m = s.parent;

      while (m && !configuration.has(m)) {
        configuration.add(m);
        m = m.parent;
      }
    }
  } catch (e_4_1) {
    e_4 = {
      error: e_4_1
    };
  } finally {
    try {
      if (configuration_3_1 && !configuration_3_1.done && (_d = configuration_3.return)) _d.call(configuration_3);
    } finally {
      if (e_4) throw e_4.error;
    }
  }

  return configuration;
}

function getValueFromAdj(baseNode, adjList) {
  var childStateNodes = adjList.get(baseNode);

  if (!childStateNodes) {
    return {}; // todo: fix?
  }

  if (baseNode.type === 'compound') {
    var childStateNode = childStateNodes[0];

    if (childStateNode) {
      if (isLeafNode(childStateNode)) {
        return childStateNode.key;
      }
    } else {
      return {};
    }
  }

  var stateValue = {};
  childStateNodes.forEach(function (csn) {
    stateValue[csn.key] = getValueFromAdj(csn, adjList);
  });
  return stateValue;
}

function getAdjList(configuration) {
  var e_5, _a;

  var adjList = new Map();

  try {
    for (var configuration_4 = Object(_virtual_tslib_js__WEBPACK_IMPORTED_MODULE_0__["__values"])(configuration), configuration_4_1 = configuration_4.next(); !configuration_4_1.done; configuration_4_1 = configuration_4.next()) {
      var s = configuration_4_1.value;

      if (!adjList.has(s)) {
        adjList.set(s, []);
      }

      if (s.parent) {
        if (!adjList.has(s.parent)) {
          adjList.set(s.parent, []);
        }

        adjList.get(s.parent).push(s);
      }
    }
  } catch (e_5_1) {
    e_5 = {
      error: e_5_1
    };
  } finally {
    try {
      if (configuration_4_1 && !configuration_4_1.done && (_a = configuration_4.return)) _a.call(configuration_4);
    } finally {
      if (e_5) throw e_5.error;
    }
  }

  return adjList;
}

function getValue(rootNode, configuration) {
  var config = getConfiguration([rootNode], configuration);
  return getValueFromAdj(rootNode, getAdjList(config));
}

function has(iterable, item) {
  if (Array.isArray(iterable)) {
    return iterable.some(function (member) {
      return member === item;
    });
  }

  if (iterable instanceof Set) {
    return iterable.has(item);
  }

  return false; // TODO: fix
}

function nextEvents(configuration) {
  return Object(_utils_js__WEBPACK_IMPORTED_MODULE_1__["flatten"])(Object(_virtual_tslib_js__WEBPACK_IMPORTED_MODULE_0__["__spread"])(new Set(configuration.map(function (sn) {
    return sn.ownEvents;
  }))));
}

function isInFinalState(configuration, stateNode) {
  if (stateNode.type === 'compound') {
    return getChildren(stateNode).some(function (s) {
      return s.type === 'final' && has(configuration, s);
    });
  }

  if (stateNode.type === 'parallel') {
    return getChildren(stateNode).every(function (sn) {
      return isInFinalState(configuration, sn);
    });
  }

  return false;
}



/***/ }),

/***/ "./node_modules/xstate/es/types.js":
/*!*****************************************!*\
  !*** ./node_modules/xstate/es/types.js ***!
  \*****************************************/
/*! exports provided: ActionTypes, SpecialTargets */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ActionTypes", function() { return ActionTypes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SpecialTargets", function() { return SpecialTargets; });
var ActionTypes;

(function (ActionTypes) {
  ActionTypes["Start"] = "xstate.start";
  ActionTypes["Stop"] = "xstate.stop";
  ActionTypes["Raise"] = "xstate.raise";
  ActionTypes["Send"] = "xstate.send";
  ActionTypes["Cancel"] = "xstate.cancel";
  ActionTypes["NullEvent"] = "";
  ActionTypes["Assign"] = "xstate.assign";
  ActionTypes["After"] = "xstate.after";
  ActionTypes["DoneState"] = "done.state";
  ActionTypes["DoneInvoke"] = "done.invoke";
  ActionTypes["Log"] = "xstate.log";
  ActionTypes["Init"] = "xstate.init";
  ActionTypes["Invoke"] = "xstate.invoke";
  ActionTypes["ErrorExecution"] = "error.execution";
  ActionTypes["ErrorCommunication"] = "error.communication";
  ActionTypes["ErrorPlatform"] = "error.platform";
  ActionTypes["ErrorCustom"] = "xstate.error";
  ActionTypes["Update"] = "xstate.update";
  ActionTypes["Pure"] = "xstate.pure";
  ActionTypes["Choose"] = "xstate.choose";
})(ActionTypes || (ActionTypes = {}));

var SpecialTargets;

(function (SpecialTargets) {
  SpecialTargets["Parent"] = "#_parent";
  SpecialTargets["Internal"] = "#_internal";
})(SpecialTargets || (SpecialTargets = {}));



/***/ }),

/***/ "./node_modules/xstate/es/utils.js":
/*!*****************************************!*\
  !*** ./node_modules/xstate/es/utils.js ***!
  \*****************************************/
/*! exports provided: evaluateGuard, flatten, getEventType, isArray, isBuiltInEvent, isFunction, isMachine, isObservable, isPromiseLike, isStateLike, isString, keys, mapContext, mapFilterValues, mapValues, matchesState, nestedPath, normalizeTarget, partition, path, pathToStateValue, reportUnhandledExceptionOnInvocation, symbolObservable, toArray, toArrayStrict, toEventObject, toGuard, toInvokeSource, toSCXMLEvent, toStatePath, toStatePaths, toStateValue, toTransitionConfigArray, uniqueId, updateContext, updateHistoryStates, updateHistoryValue, warn */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "evaluateGuard", function() { return evaluateGuard; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "flatten", function() { return flatten; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getEventType", function() { return getEventType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isArray", function() { return isArray; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isBuiltInEvent", function() { return isBuiltInEvent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isFunction", function() { return isFunction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isMachine", function() { return isMachine; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isObservable", function() { return isObservable; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isPromiseLike", function() { return isPromiseLike; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isStateLike", function() { return isStateLike; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isString", function() { return isString; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "keys", function() { return keys; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mapContext", function() { return mapContext; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mapFilterValues", function() { return mapFilterValues; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mapValues", function() { return mapValues; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "matchesState", function() { return matchesState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "nestedPath", function() { return nestedPath; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "normalizeTarget", function() { return normalizeTarget; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "partition", function() { return partition; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "path", function() { return path; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "pathToStateValue", function() { return pathToStateValue; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "reportUnhandledExceptionOnInvocation", function() { return reportUnhandledExceptionOnInvocation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "symbolObservable", function() { return symbolObservable; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "toArray", function() { return toArray; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "toArrayStrict", function() { return toArrayStrict; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "toEventObject", function() { return toEventObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "toGuard", function() { return toGuard; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "toInvokeSource", function() { return toInvokeSource; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "toSCXMLEvent", function() { return toSCXMLEvent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "toStatePath", function() { return toStatePath; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "toStatePaths", function() { return toStatePaths; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "toStateValue", function() { return toStateValue; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "toTransitionConfigArray", function() { return toTransitionConfigArray; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "uniqueId", function() { return uniqueId; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updateContext", function() { return updateContext; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updateHistoryStates", function() { return updateHistoryStates; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updateHistoryValue", function() { return updateHistoryValue; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "warn", function() { return warn; });
/* harmony import */ var _virtual_tslib_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_virtual/_tslib.js */ "./node_modules/xstate/es/_virtual/_tslib.js");
/* harmony import */ var _constants_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./constants.js */ "./node_modules/xstate/es/constants.js");
/* harmony import */ var _environment_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./environment.js */ "./node_modules/xstate/es/environment.js");




function keys(value) {
  return Object.keys(value);
}

function matchesState(parentStateId, childStateId, delimiter) {
  if (delimiter === void 0) {
    delimiter = _constants_js__WEBPACK_IMPORTED_MODULE_1__["STATE_DELIMITER"];
  }

  var parentStateValue = toStateValue(parentStateId, delimiter);
  var childStateValue = toStateValue(childStateId, delimiter);

  if (isString(childStateValue)) {
    if (isString(parentStateValue)) {
      return childStateValue === parentStateValue;
    } // Parent more specific than child


    return false;
  }

  if (isString(parentStateValue)) {
    return parentStateValue in childStateValue;
  }

  return keys(parentStateValue).every(function (key) {
    if (!(key in childStateValue)) {
      return false;
    }

    return matchesState(parentStateValue[key], childStateValue[key]);
  });
}

function getEventType(event) {
  try {
    return isString(event) || typeof event === 'number' ? "" + event : event.type;
  } catch (e) {
    throw new Error('Events must be strings or objects with a string event.type property.');
  }
}

function toStatePath(stateId, delimiter) {
  try {
    if (isArray(stateId)) {
      return stateId;
    }

    return stateId.toString().split(delimiter);
  } catch (e) {
    throw new Error("'" + stateId + "' is not a valid state path.");
  }
}

function isStateLike(state) {
  return typeof state === 'object' && 'value' in state && 'context' in state && 'event' in state && '_event' in state;
}

function toStateValue(stateValue, delimiter) {
  if (isStateLike(stateValue)) {
    return stateValue.value;
  }

  if (isArray(stateValue)) {
    return pathToStateValue(stateValue);
  }

  if (typeof stateValue !== 'string') {
    return stateValue;
  }

  var statePath = toStatePath(stateValue, delimiter);
  return pathToStateValue(statePath);
}

function pathToStateValue(statePath) {
  if (statePath.length === 1) {
    return statePath[0];
  }

  var value = {};
  var marker = value;

  for (var i = 0; i < statePath.length - 1; i++) {
    if (i === statePath.length - 2) {
      marker[statePath[i]] = statePath[i + 1];
    } else {
      marker[statePath[i]] = {};
      marker = marker[statePath[i]];
    }
  }

  return value;
}

function mapValues(collection, iteratee) {
  var result = {};
  var collectionKeys = keys(collection);

  for (var i = 0; i < collectionKeys.length; i++) {
    var key = collectionKeys[i];
    result[key] = iteratee(collection[key], key, collection, i);
  }

  return result;
}

function mapFilterValues(collection, iteratee, predicate) {
  var e_1, _a;

  var result = {};

  try {
    for (var _b = Object(_virtual_tslib_js__WEBPACK_IMPORTED_MODULE_0__["__values"])(keys(collection)), _c = _b.next(); !_c.done; _c = _b.next()) {
      var key = _c.value;
      var item = collection[key];

      if (!predicate(item)) {
        continue;
      }

      result[key] = iteratee(item, key, collection);
    }
  } catch (e_1_1) {
    e_1 = {
      error: e_1_1
    };
  } finally {
    try {
      if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
    } finally {
      if (e_1) throw e_1.error;
    }
  }

  return result;
}
/**
 * Retrieves a value at the given path.
 * @param props The deep path to the prop of the desired value
 */


var path = function (props) {
  return function (object) {
    var e_2, _a;

    var result = object;

    try {
      for (var props_1 = Object(_virtual_tslib_js__WEBPACK_IMPORTED_MODULE_0__["__values"])(props), props_1_1 = props_1.next(); !props_1_1.done; props_1_1 = props_1.next()) {
        var prop = props_1_1.value;
        result = result[prop];
      }
    } catch (e_2_1) {
      e_2 = {
        error: e_2_1
      };
    } finally {
      try {
        if (props_1_1 && !props_1_1.done && (_a = props_1.return)) _a.call(props_1);
      } finally {
        if (e_2) throw e_2.error;
      }
    }

    return result;
  };
};
/**
 * Retrieves a value at the given path via the nested accessor prop.
 * @param props The deep path to the prop of the desired value
 */


function nestedPath(props, accessorProp) {
  return function (object) {
    var e_3, _a;

    var result = object;

    try {
      for (var props_2 = Object(_virtual_tslib_js__WEBPACK_IMPORTED_MODULE_0__["__values"])(props), props_2_1 = props_2.next(); !props_2_1.done; props_2_1 = props_2.next()) {
        var prop = props_2_1.value;
        result = result[accessorProp][prop];
      }
    } catch (e_3_1) {
      e_3 = {
        error: e_3_1
      };
    } finally {
      try {
        if (props_2_1 && !props_2_1.done && (_a = props_2.return)) _a.call(props_2);
      } finally {
        if (e_3) throw e_3.error;
      }
    }

    return result;
  };
}

function toStatePaths(stateValue) {
  if (!stateValue) {
    return [[]];
  }

  if (isString(stateValue)) {
    return [[stateValue]];
  }

  var result = flatten(keys(stateValue).map(function (key) {
    var subStateValue = stateValue[key];

    if (typeof subStateValue !== 'string' && (!subStateValue || !Object.keys(subStateValue).length)) {
      return [[key]];
    }

    return toStatePaths(stateValue[key]).map(function (subPath) {
      return [key].concat(subPath);
    });
  }));
  return result;
}

function flatten(array) {
  var _a;

  return (_a = []).concat.apply(_a, Object(_virtual_tslib_js__WEBPACK_IMPORTED_MODULE_0__["__spread"])(array));
}

function toArrayStrict(value) {
  if (isArray(value)) {
    return value;
  }

  return [value];
}

function toArray(value) {
  if (value === undefined) {
    return [];
  }

  return toArrayStrict(value);
}

function mapContext(mapper, context, _event) {
  var e_5, _a;

  if (isFunction(mapper)) {
    return mapper(context, _event.data);
  }

  var result = {};

  try {
    for (var _b = Object(_virtual_tslib_js__WEBPACK_IMPORTED_MODULE_0__["__values"])(Object.keys(mapper)), _c = _b.next(); !_c.done; _c = _b.next()) {
      var key = _c.value;
      var subMapper = mapper[key];

      if (isFunction(subMapper)) {
        result[key] = subMapper(context, _event.data);
      } else {
        result[key] = subMapper;
      }
    }
  } catch (e_5_1) {
    e_5 = {
      error: e_5_1
    };
  } finally {
    try {
      if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
    } finally {
      if (e_5) throw e_5.error;
    }
  }

  return result;
}

function isBuiltInEvent(eventType) {
  return /^(done|error)\./.test(eventType);
}

function isPromiseLike(value) {
  if (value instanceof Promise) {
    return true;
  } // Check if shape matches the Promise/A+ specification for a "thenable".


  if (value !== null && (isFunction(value) || typeof value === 'object') && isFunction(value.then)) {
    return true;
  }

  return false;
}

function partition(items, predicate) {
  var e_6, _a;

  var _b = Object(_virtual_tslib_js__WEBPACK_IMPORTED_MODULE_0__["__read"])([[], []], 2),
      truthy = _b[0],
      falsy = _b[1];

  try {
    for (var items_1 = Object(_virtual_tslib_js__WEBPACK_IMPORTED_MODULE_0__["__values"])(items), items_1_1 = items_1.next(); !items_1_1.done; items_1_1 = items_1.next()) {
      var item = items_1_1.value;

      if (predicate(item)) {
        truthy.push(item);
      } else {
        falsy.push(item);
      }
    }
  } catch (e_6_1) {
    e_6 = {
      error: e_6_1
    };
  } finally {
    try {
      if (items_1_1 && !items_1_1.done && (_a = items_1.return)) _a.call(items_1);
    } finally {
      if (e_6) throw e_6.error;
    }
  }

  return [truthy, falsy];
}

function updateHistoryStates(hist, stateValue) {
  return mapValues(hist.states, function (subHist, key) {
    if (!subHist) {
      return undefined;
    }

    var subStateValue = (isString(stateValue) ? undefined : stateValue[key]) || (subHist ? subHist.current : undefined);

    if (!subStateValue) {
      return undefined;
    }

    return {
      current: subStateValue,
      states: updateHistoryStates(subHist, subStateValue)
    };
  });
}

function updateHistoryValue(hist, stateValue) {
  return {
    current: stateValue,
    states: updateHistoryStates(hist, stateValue)
  };
}

function updateContext(context, _event, assignActions, state) {
  if (!_environment_js__WEBPACK_IMPORTED_MODULE_2__["IS_PRODUCTION"]) {
    warn(!!context, 'Attempting to update undefined context');
  }

  var updatedContext = context ? assignActions.reduce(function (acc, assignAction) {
    var e_7, _a;

    var assignment = assignAction.assignment;
    var meta = {
      state: state,
      action: assignAction,
      _event: _event
    };
    var partialUpdate = {};

    if (isFunction(assignment)) {
      partialUpdate = assignment(acc, _event.data, meta);
    } else {
      try {
        for (var _b = Object(_virtual_tslib_js__WEBPACK_IMPORTED_MODULE_0__["__values"])(keys(assignment)), _c = _b.next(); !_c.done; _c = _b.next()) {
          var key = _c.value;
          var propAssignment = assignment[key];
          partialUpdate[key] = isFunction(propAssignment) ? propAssignment(acc, _event.data, meta) : propAssignment;
        }
      } catch (e_7_1) {
        e_7 = {
          error: e_7_1
        };
      } finally {
        try {
          if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
        } finally {
          if (e_7) throw e_7.error;
        }
      }
    }

    return Object.assign({}, acc, partialUpdate);
  }, context) : context;
  return updatedContext;
} // tslint:disable-next-line:no-empty


var warn = function () {};

if (!_environment_js__WEBPACK_IMPORTED_MODULE_2__["IS_PRODUCTION"]) {
  warn = function (condition, message) {
    var error = condition instanceof Error ? condition : undefined;

    if (!error && condition) {
      return;
    }

    if (console !== undefined) {
      var args = ["Warning: " + message];

      if (error) {
        args.push(error);
      } // tslint:disable-next-line:no-console


      console.warn.apply(console, args);
    }
  };
}

function isArray(value) {
  return Array.isArray(value);
} // tslint:disable-next-line:ban-types


function isFunction(value) {
  return typeof value === 'function';
}

function isString(value) {
  return typeof value === 'string';
} // export function memoizedGetter<T, TP extends { prototype: object }>(
//   o: TP,
//   property: string,
//   getter: () => T
// ): void {
//   Object.defineProperty(o.prototype, property, {
//     get: getter,
//     enumerable: false,
//     configurable: false
//   });
// }


function toGuard(condition, guardMap) {
  if (!condition) {
    return undefined;
  }

  if (isString(condition)) {
    return {
      type: _constants_js__WEBPACK_IMPORTED_MODULE_1__["DEFAULT_GUARD_TYPE"],
      name: condition,
      predicate: guardMap ? guardMap[condition] : undefined
    };
  }

  if (isFunction(condition)) {
    return {
      type: _constants_js__WEBPACK_IMPORTED_MODULE_1__["DEFAULT_GUARD_TYPE"],
      name: condition.name,
      predicate: condition
    };
  }

  return condition;
}

function isObservable(value) {
  try {
    return 'subscribe' in value && isFunction(value.subscribe);
  } catch (e) {
    return false;
  }
}

var symbolObservable = /*#__PURE__*/function () {
  return typeof Symbol === 'function' && Symbol.observable || '@@observable';
}();

function isMachine(value) {
  try {
    return '__xstatenode' in value;
  } catch (e) {
    return false;
  }
}

var uniqueId = /*#__PURE__*/function () {
  var currentId = 0;
  return function () {
    currentId++;
    return currentId.toString(16);
  };
}();

function toEventObject(event, payload // id?: TEvent['type']
) {
  if (isString(event) || typeof event === 'number') {
    return Object(_virtual_tslib_js__WEBPACK_IMPORTED_MODULE_0__["__assign"])({
      type: event
    }, payload);
  }

  return event;
}

function toSCXMLEvent(event, scxmlEvent) {
  if (!isString(event) && '$$type' in event && event.$$type === 'scxml') {
    return event;
  }

  var eventObject = toEventObject(event);
  return Object(_virtual_tslib_js__WEBPACK_IMPORTED_MODULE_0__["__assign"])({
    name: eventObject.type,
    data: eventObject,
    $$type: 'scxml',
    type: 'external'
  }, scxmlEvent);
}

function toTransitionConfigArray(event, configLike) {
  var transitions = toArrayStrict(configLike).map(function (transitionLike) {
    if (typeof transitionLike === 'undefined' || typeof transitionLike === 'string' || isMachine(transitionLike)) {
      return {
        target: transitionLike,
        event: event
      };
    }

    return Object(_virtual_tslib_js__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(_virtual_tslib_js__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, transitionLike), {
      event: event
    });
  });
  return transitions;
}

function normalizeTarget(target) {
  if (target === undefined || target === _constants_js__WEBPACK_IMPORTED_MODULE_1__["TARGETLESS_KEY"]) {
    return undefined;
  }

  return toArray(target);
}

function reportUnhandledExceptionOnInvocation(originalError, currentError, id) {
  if (!_environment_js__WEBPACK_IMPORTED_MODULE_2__["IS_PRODUCTION"]) {
    var originalStackTrace = originalError.stack ? " Stacktrace was '" + originalError.stack + "'" : '';

    if (originalError === currentError) {
      // tslint:disable-next-line:no-console
      console.error("Missing onError handler for invocation '" + id + "', error was '" + originalError + "'." + originalStackTrace);
    } else {
      var stackTrace = currentError.stack ? " Stacktrace was '" + currentError.stack + "'" : ''; // tslint:disable-next-line:no-console

      console.error("Missing onError handler and/or unhandled exception/promise rejection for invocation '" + id + "'. " + ("Original error: '" + originalError + "'. " + originalStackTrace + " Current error is '" + currentError + "'." + stackTrace));
    }
  }
}

function evaluateGuard(machine, guard, context, _event, state) {
  var guards = machine.options.guards;
  var guardMeta = {
    state: state,
    cond: guard,
    _event: _event
  }; // TODO: do not hardcode!

  if (guard.type === _constants_js__WEBPACK_IMPORTED_MODULE_1__["DEFAULT_GUARD_TYPE"]) {
    return guard.predicate(context, _event.data, guardMeta);
  }

  var condFn = guards[guard.type];

  if (!condFn) {
    throw new Error("Guard '" + guard.type + "' is not implemented on machine '" + machine.id + "'.");
  }

  return condFn(context, _event.data, guardMeta);
}

function toInvokeSource(src) {
  if (typeof src === 'string') {
    return {
      type: src
    };
  }

  return src;
}



/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Vc2VyRm9ybS5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL0B4c3RhdGUvcmVhY3QvZXMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9AeHN0YXRlL3JlYWN0L2VzL3VzZUFjdG9yLmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvQHhzdGF0ZS9yZWFjdC9lcy91c2VDb25zdGFudC5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL0B4c3RhdGUvcmVhY3QvZXMvdXNlTWFjaGluZS5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL0B4c3RhdGUvcmVhY3QvZXMvdXNlU2VydmljZS5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL0B4c3RhdGUvcmVhY3QvZXMvdXRpbHMuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy91c2UtaXNvbW9ycGhpYy1sYXlvdXQtZWZmZWN0L2Rpc3QvdXNlLWlzb21vcnBoaWMtbGF5b3V0LWVmZmVjdC5icm93c2VyLmVzbS5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL3hzdGF0ZS9lcy9BY3Rvci5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL3hzdGF0ZS9lcy9NYWNoaW5lLmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMveHN0YXRlL2VzL1N0YXRlLmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMveHN0YXRlL2VzL1N0YXRlTm9kZS5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL3hzdGF0ZS9lcy9fdmlydHVhbC9fdHNsaWIuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy94c3RhdGUvZXMvYWN0aW9uVHlwZXMuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy94c3RhdGUvZXMvYWN0aW9ucy5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL3hzdGF0ZS9lcy9jb25zdGFudHMuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy94c3RhdGUvZXMvZGV2VG9vbHMuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy94c3RhdGUvZXMvZW52aXJvbm1lbnQuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy94c3RhdGUvZXMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy94c3RhdGUvZXMvaW50ZXJwcmV0ZXIuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy94c3RhdGUvZXMvaW52b2tlVXRpbHMuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy94c3RhdGUvZXMvbWFwU3RhdGUuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy94c3RhdGUvZXMvbWF0Y2guanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy94c3RhdGUvZXMvcmVnaXN0cnkuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy94c3RhdGUvZXMvc2NoZWR1bGVyLmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMveHN0YXRlL2VzL3NlcnZpY2VTY29wZS5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL3hzdGF0ZS9lcy9zdGF0ZVV0aWxzLmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMveHN0YXRlL2VzL3R5cGVzLmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMveHN0YXRlL2VzL3V0aWxzLmpzIl0sIm5hbWVzIjpbInVzZXJJbmZvIiwiTWFjaGluZSIsImNvbmZpZyIsInVzZU1hY2hpbmUiLCJyYW1NYWNoaW5lIiwiaW5mbyIsInNlbmQiLCJzdHlsZXMiLCJNdWlQYXBlciIsImJhY2tncm91bmQiLCJwYWRkaW5nIiwiYm94U2l6aW5nIiwiYm94U2hhZG93IiwiYm9yZGVyUmFkaXVzIiwiVGV4dEZpZWxkIiwiaGVpZ2h0Iiwid2lkdGgiLCJsZWZ0IiwiZmllbGRzIiwiaWQiLCJuYW1lIiwibGFiZWwiLCJpY29uUGF0aCIsIlVzZXJGb3JtIiwicmVuZGVyVXNlckZvcm0iLCJtYXAiLCJmaWVsZCIsIlVzZXJGb3JtU3R5bGVzIiwiRmllbGRJdGVtIiwiRmllbGRJY29uIiwibGVuZ3RoIiwiRGl2aWRlciIsInR5cGUiLCJoYW5kbGVTdWJtaXQiLCJNYWluRm9ybUNvbnRlbnQiLCJTdWJtaXRCdXR0b24iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQU1BLFFBQVEsR0FBR0Msc0RBQU8sQ0FBQ0MsTUFBRCxDQUF4Qjs7a0JBQ3FCQyxnRUFBVSxDQUFDQyxVQUFELEM7O0lBQXhCQyxJO0lBQU1DLEk7O0FBRWI7QUFFQSxJQUFNQyxNQUFNLEdBQUc7QUFDYkMsVUFBUSxFQUFFO0FBQ1JDLGNBQVUsRUFBRSxTQURKO0FBRVJDLFdBQU8sRUFBRSxFQUZEO0FBR1JDLGFBQVMsRUFBRSxZQUhIO0FBSVJDLGFBQVMsRUFBRSxrQ0FKSDtBQUtSQyxnQkFBWSxFQUFFO0FBTE4sR0FERztBQVFiQyxXQUFTLEVBQUU7QUFDVEMsVUFBTSxFQUFFLEVBREM7QUFFVEMsU0FBSyxFQUFFLEdBRkU7QUFHVEMsUUFBSSxFQUFFO0FBSEc7QUFSRSxDQUFmO0FBZUEsSUFBTUMsTUFBTSxHQUFHLENBQ2I7QUFBRUMsSUFBRSxFQUFFLENBQU47QUFBU0MsTUFBSSxFQUFFLFVBQWY7QUFBMkJDLE9BQUssRUFBRSxlQUFsQztBQUFtREMsVUFBUSxFQUFFO0FBQTdELENBRGEsRUFFYjtBQUFFSCxJQUFFLEVBQUUsQ0FBTjtBQUFTQyxNQUFJLEVBQUUsT0FBZjtBQUF3QkMsT0FBSyxFQUFFLFFBQS9CO0FBQXlDQyxVQUFRLEVBQUU7QUFBbkQsQ0FGYSxFQUdi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Q0EsT0FBTyw2REFBYTtBQUNwQjs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0wsZ0dBQWdHOztBQUVoRztBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJOztBQUVKLHFCQUFxQixnRUFBa0I7QUFDdkM7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC5hMWM0NWJjZTdmZmQ3MDVjZDlhMC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFBhcGVyIGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZS9QYXBlclwiO1xyXG5pbXBvcnQgeyBGb3JtLCBGaWVsZCB9IGZyb20gXCJyZWFjdC1maW5hbC1mb3JtXCI7XHJcbmltcG9ydCBUZXh0RmllbGQgZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlL1RleHRGaWVsZFwiO1xyXG5pbXBvcnQgeyB1c2VNYWNoaW5lIH0gZnJvbSBcIkB4c3RhdGUvcmVhY3RcIjtcclxuaW1wb3J0IHsgTWFjaGluZSB9IGZyb20gXCJ4c3RhdGVcIjtcclxuY29uc3QgdXNlckluZm8gPSBNYWNoaW5lKGNvbmZpZyk7XHJcbmNvbnN0IFtpbmZvLCBzZW5kXSA9IHVzZU1hY2hpbmUocmFtTWFjaGluZSk7XHJcblxyXG5pbXBvcnQgVXNlckZvcm1TdHlsZXMgZnJvbSBcIi4uL3N0eWxlcy9Vc2VyRm9ybS5tb2R1bGUuc2Nzc1wiO1xyXG5cclxuY29uc3Qgc3R5bGVzID0ge1xyXG4gIE11aVBhcGVyOiB7XHJcbiAgICBiYWNrZ3JvdW5kOiBcIiNGRkZGRkZcIixcclxuICAgIHBhZGRpbmc6IDQ1LFxyXG4gICAgYm94U2l6aW5nOiBcImJvcmRlci1ib3hcIixcclxuICAgIGJveFNoYWRvdzogXCIwcHggNHB4IDEwcHggcmdiYSgwLCAwLCAwLCAwLjE1KVwiLFxyXG4gICAgYm9yZGVyUmFkaXVzOiAxMCxcclxuICB9LFxyXG4gIFRleHRGaWVsZDoge1xyXG4gICAgaGVpZ2h0OiA1NyxcclxuICAgIHdpZHRoOiAyNTQsXHJcbiAgICBsZWZ0OiAwLFxyXG4gIH0sXHJcbn07XHJcblxyXG5jb25zdCBmaWVsZHMgPSBbXHJcbiAgeyBpZDogMCwgbmFtZTogXCJ1c2VyTmFtZVwiLCBsYWJlbDogXCLQpNCw0LzQuNC70LjRjyDQuCDQuNC80Y9cIiwgaWNvblBhdGg6IFwiL2JhZGdlLnBuZ1wiIH0sXHJcbiAgeyBpZDogMSwgbmFtZTogXCJlbWFpbFwiLCBsYWJlbDogXCJFLW1haWxcIiwgaWNvblBhdGg6IFwiL21haWwucG5nXCIgfSxcclxuICB7XHJcbiAgICBpZDogMixcclxuICAgIG5hbWU6IFwicGhvbmVOdW1iZXJcIixcclxuICAgIGxhYmVsOiBcItCd0L7QvNC10YAg0YLQtdC70LXRhNC+0L3QsFwiLFxyXG4gICAgaWNvblBhdGg6IFwiL3Bob25lLnBuZ1wiLFxyXG4gIH0sXHJcbl07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBVc2VyRm9ybSgpIHtcclxuICBjb25zdCByZW5kZXJVc2VyRm9ybSA9IChmaWVsZHMpID0+XHJcbiAgICBmaWVsZHMubWFwKChmaWVsZCkgPT4gKFxyXG4gICAgICA8PlxyXG4gICAgICAgIDxGaWVsZFxyXG4gICAgICAgICAgbmFtZT17ZmllbGQubmFtZX1cclxuICAgICAgICAgIHN0eWxlPXtzdHlsZXMuVGV4dEZpZWxkfVxyXG4gICAgICAgICAgcmVuZGVyPXsoKSA9PiAoXHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtVc2VyRm9ybVN0eWxlcy5GaWVsZEl0ZW19PlxyXG4gICAgICAgICAgICAgIDxsYWJlbCBmb3I9e2ZpZWxkLmlkfT5cclxuICAgICAgICAgICAgICAgIDxpbWdcclxuICAgICAgICAgICAgICAgICAgc3JjPXtmaWVsZC5pY29uUGF0aH1cclxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtVc2VyRm9ybVN0eWxlcy5GaWVsZEljb259XHJcbiAgICAgICAgICAgICAgICAgIGFsdD17ZmllbGQubGFiZWx9XHJcbiAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgIDwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgPFRleHRGaWVsZFxyXG4gICAgICAgICAgICAgICAgaWQ9e2ZpZWxkLmlkfVxyXG4gICAgICAgICAgICAgICAgbGFiZWw9e2ZpZWxkLmxhYmVsfVxyXG4gICAgICAgICAgICAgICAgc3R5bGU9e3N0eWxlcy5UZXh0RmllbGR9XHJcbiAgICAgICAgICAgICAgICB2YXJpYW50PVwib3V0bGluZWRcIlxyXG4gICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgKX1cclxuICAgICAgICAvPlxyXG4gICAgICAgIHtmaWVsZHMubGVuZ3RoIC0gMSAhPT0gZmllbGQuaWQgPyAoXHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17VXNlckZvcm1TdHlsZXMuRGl2aWRlcn0gLz5cclxuICAgICAgICApIDogbnVsbH1cclxuICAgICAgPC8+XHJcbiAgICApKTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxQYXBlciBzdHlsZT17c3R5bGVzLk11aVBhcGVyfT5cclxuICAgICAgPEZvcm1cclxuICAgICAgICBvblN1Ym1pdD17KCkgPT4gc2VuZCh7IHR5cGU6IFwiU1VCTUlUXCIgfSl9XHJcbiAgICAgICAgLy8gdmFsaWRhdGU9e3ZhbGlkYXRlfVxyXG4gICAgICAgIHJlbmRlcj17KHsgaGFuZGxlU3VibWl0IH0pID0+IChcclxuICAgICAgICAgIDxmb3JtIG9uU3VibWl0PXtoYW5kbGVTdWJtaXR9IGNsYXNzTmFtZT17VXNlckZvcm1TdHlsZXMuVXNlckZvcm19PlxyXG4gICAgICAgICAgICA8c2VjdGlvbiBjbGFzc05hbWU9e1VzZXJGb3JtU3R5bGVzLk1haW5Gb3JtQ29udGVudH0+XHJcbiAgICAgICAgICAgICAge3JlbmRlclVzZXJGb3JtKGZpZWxkcyl9XHJcbiAgICAgICAgICAgIDwvc2VjdGlvbj5cclxuXHJcbiAgICAgICAgICAgIDxidXR0b24gdHlwZT1cInN1Ym1pdFwiIGNsYXNzTmFtZT17VXNlckZvcm1TdHlsZXMuU3VibWl0QnV0dG9ufT5cclxuICAgICAgICAgICAgICDQodC+0YXRgNCw0L3QuNGC0Ywg0LjQt9C80LXQvdC10L3QuNGPXHJcbiAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICB7LyogPHAgY2xhc3NOYW1lPXtVc2VyRm9ybVN0eWxlcy5TdWNjZXNzTWVzc2FnZX0+XHJcbiAgICAgICAgICAgICAg0JjQt9C80LXQvdC10L3QuNGPINGB0L7RhdGA0LDQvdC10L3RiyFcclxuICAgICAgICAgICAgPC9wPiAqL31cclxuICAgICAgICAgIDwvZm9ybT5cclxuICAgICAgICApfVxyXG4gICAgICAvPlxyXG4gICAgPC9QYXBlcj5cclxuICApO1xyXG59XHJcbiIsImV4cG9ydCB7IHVzZU1hY2hpbmUsIGFzRWZmZWN0LCBhc0xheW91dEVmZmVjdCB9IGZyb20gJy4vdXNlTWFjaGluZSc7XG5leHBvcnQgeyB1c2VTZXJ2aWNlIH0gZnJvbSAnLi91c2VTZXJ2aWNlJztcbmV4cG9ydCB7IHVzZUFjdG9yIH0gZnJvbSAnLi91c2VBY3Rvcic7XG4iLCJ2YXIgX19yZWFkID0gKHRoaXMgJiYgdGhpcy5fX3JlYWQpIHx8IGZ1bmN0aW9uIChvLCBuKSB7XG4gICAgdmFyIG0gPSB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgb1tTeW1ib2wuaXRlcmF0b3JdO1xuICAgIGlmICghbSkgcmV0dXJuIG87XG4gICAgdmFyIGkgPSBtLmNhbGwobyksIHIsIGFyID0gW10sIGU7XG4gICAgdHJ5IHtcbiAgICAgICAgd2hpbGUgKChuID09PSB2b2lkIDAgfHwgbi0tID4gMCkgJiYgIShyID0gaS5uZXh0KCkpLmRvbmUpIGFyLnB1c2goci52YWx1ZSk7XG4gICAgfVxuICAgIGNhdGNoIChlcnJvcikgeyBlID0geyBlcnJvcjogZXJyb3IgfTsgfVxuICAgIGZpbmFsbHkge1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgaWYgKHIgJiYgIXIuZG9uZSAmJiAobSA9IGlbXCJyZXR1cm5cIl0pKSBtLmNhbGwoaSk7XG4gICAgICAgIH1cbiAgICAgICAgZmluYWxseSB7IGlmIChlKSB0aHJvdyBlLmVycm9yOyB9XG4gICAgfVxuICAgIHJldHVybiBhcjtcbn07XG5pbXBvcnQgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0LCB1c2VSZWYsIHVzZUNhbGxiYWNrIH0gZnJvbSAncmVhY3QnO1xuZXhwb3J0IGZ1bmN0aW9uIHVzZUFjdG9yKGFjdG9yUmVmLCBnZXRTbmFwc2hvdCkge1xuICAgIGlmIChnZXRTbmFwc2hvdCA9PT0gdm9pZCAwKSB7IGdldFNuYXBzaG90ID0gZnVuY3Rpb24gKGEpIHtcbiAgICAgICAgcmV0dXJuICdzdGF0ZScgaW4gYSA/IGEuc3RhdGUgOiB1bmRlZmluZWQ7XG4gICAgfTsgfVxuICAgIC8vIGNvbnN0IGFjdG9yID0gdXNlTWVtbygoKSA9PiByZXNvbHZlQWN0b3IoYWN0b3JMaWtlKSwgW2FjdG9yTGlrZV0pO1xuICAgIHZhciBkZWZlcnJlZEV2ZW50c1JlZiA9IHVzZVJlZihbXSk7XG4gICAgdmFyIF9hID0gX19yZWFkKHVzZVN0YXRlKGZ1bmN0aW9uICgpIHsgcmV0dXJuIGdldFNuYXBzaG90KGFjdG9yUmVmKTsgfSksIDIpLCBjdXJyZW50ID0gX2FbMF0sIHNldEN1cnJlbnQgPSBfYVsxXTtcbiAgICB2YXIgc2VuZCA9IHVzZUNhbGxiYWNrKGZ1bmN0aW9uIChldmVudCkge1xuICAgICAgICAvLyBJZiB0aGUgcHJldmlvdXMgYWN0b3IgaXMgYSBkZWZlcnJlZCBhY3RvcixcbiAgICAgICAgLy8gcXVldWUgdGhlIGV2ZW50cyBzbyB0aGF0IHRoZXkgY2FuIGJlIHJlcGxheWVkXG4gICAgICAgIC8vIG9uIHRoZSBub24tZGVmZXJyZWQgYWN0b3IuXG4gICAgICAgIGlmICgnZGVmZXJyZWQnIGluIGFjdG9yUmVmICYmIGFjdG9yUmVmLmRlZmVycmVkKSB7XG4gICAgICAgICAgICBkZWZlcnJlZEV2ZW50c1JlZi5jdXJyZW50LnB1c2goZXZlbnQpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgYWN0b3JSZWYuc2VuZChldmVudCk7XG4gICAgICAgIH1cbiAgICB9LCBbYWN0b3JSZWZdKTtcbiAgICB1c2VFZmZlY3QoZnVuY3Rpb24gKCkge1xuICAgICAgICBzZXRDdXJyZW50KGdldFNuYXBzaG90KGFjdG9yUmVmKSk7XG4gICAgICAgIHZhciBzdWJzY3JpcHRpb24gPSBhY3RvclJlZi5zdWJzY3JpYmUoc2V0Q3VycmVudCk7XG4gICAgICAgIC8vIERlcXVldWUgZGVmZXJyZWQgZXZlbnRzIGZyb20gdGhlIHByZXZpb3VzIGRlZmVycmVkIGFjdG9yUmVmXG4gICAgICAgIHdoaWxlIChkZWZlcnJlZEV2ZW50c1JlZi5jdXJyZW50Lmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgIHZhciBkZWZlcnJlZEV2ZW50ID0gZGVmZXJyZWRFdmVudHNSZWYuY3VycmVudC5zaGlmdCgpO1xuICAgICAgICAgICAgYWN0b3JSZWYuc2VuZChkZWZlcnJlZEV2ZW50KTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgc3Vic2NyaXB0aW9uLnVuc3Vic2NyaWJlKCk7XG4gICAgICAgIH07XG4gICAgfSwgW2FjdG9yUmVmXSk7XG4gICAgcmV0dXJuIFtjdXJyZW50LCBzZW5kXTtcbn1cbiIsImltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0JztcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHVzZUNvbnN0YW50KGZuKSB7XG4gICAgdmFyIHJlZiA9IFJlYWN0LnVzZVJlZigpO1xuICAgIGlmICghcmVmLmN1cnJlbnQpIHtcbiAgICAgICAgcmVmLmN1cnJlbnQgPSB7IHY6IGZuKCkgfTtcbiAgICB9XG4gICAgcmV0dXJuIHJlZi5jdXJyZW50LnY7XG59XG4iLCJ2YXIgX19hc3NpZ24gPSAodGhpcyAmJiB0aGlzLl9fYXNzaWduKSB8fCBmdW5jdGlvbiAoKSB7XG4gICAgX19hc3NpZ24gPSBPYmplY3QuYXNzaWduIHx8IGZ1bmN0aW9uKHQpIHtcbiAgICAgICAgZm9yICh2YXIgcywgaSA9IDEsIG4gPSBhcmd1bWVudHMubGVuZ3RoOyBpIDwgbjsgaSsrKSB7XG4gICAgICAgICAgICBzID0gYXJndW1lbnRzW2ldO1xuICAgICAgICAgICAgZm9yICh2YXIgcCBpbiBzKSBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHMsIHApKVxuICAgICAgICAgICAgICAgIHRbcF0gPSBzW3BdO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0O1xuICAgIH07XG4gICAgcmV0dXJuIF9fYXNzaWduLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG59O1xudmFyIF9fcmVzdCA9ICh0aGlzICYmIHRoaXMuX19yZXN0KSB8fCBmdW5jdGlvbiAocywgZSkge1xuICAgIHZhciB0ID0ge307XG4gICAgZm9yICh2YXIgcCBpbiBzKSBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHMsIHApICYmIGUuaW5kZXhPZihwKSA8IDApXG4gICAgICAgIHRbcF0gPSBzW3BdO1xuICAgIGlmIChzICE9IG51bGwgJiYgdHlwZW9mIE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMgPT09IFwiZnVuY3Rpb25cIilcbiAgICAgICAgZm9yICh2YXIgaSA9IDAsIHAgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzKHMpOyBpIDwgcC5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgaWYgKGUuaW5kZXhPZihwW2ldKSA8IDAgJiYgT2JqZWN0LnByb3RvdHlwZS5wcm9wZXJ0eUlzRW51bWVyYWJsZS5jYWxsKHMsIHBbaV0pKVxuICAgICAgICAgICAgICAgIHRbcFtpXV0gPSBzW3BbaV1dO1xuICAgICAgICB9XG4gICAgcmV0dXJuIHQ7XG59O1xudmFyIF9fcmVhZCA9ICh0aGlzICYmIHRoaXMuX19yZWFkKSB8fCBmdW5jdGlvbiAobywgbikge1xuICAgIHZhciBtID0gdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIG9bU3ltYm9sLml0ZXJhdG9yXTtcbiAgICBpZiAoIW0pIHJldHVybiBvO1xuICAgIHZhciBpID0gbS5jYWxsKG8pLCByLCBhciA9IFtdLCBlO1xuICAgIHRyeSB7XG4gICAgICAgIHdoaWxlICgobiA9PT0gdm9pZCAwIHx8IG4tLSA+IDApICYmICEociA9IGkubmV4dCgpKS5kb25lKSBhci5wdXNoKHIudmFsdWUpO1xuICAgIH1cbiAgICBjYXRjaCAoZXJyb3IpIHsgZSA9IHsgZXJyb3I6IGVycm9yIH07IH1cbiAgICBmaW5hbGx5IHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIGlmIChyICYmICFyLmRvbmUgJiYgKG0gPSBpW1wicmV0dXJuXCJdKSkgbS5jYWxsKGkpO1xuICAgICAgICB9XG4gICAgICAgIGZpbmFsbHkgeyBpZiAoZSkgdGhyb3cgZS5lcnJvcjsgfVxuICAgIH1cbiAgICByZXR1cm4gYXI7XG59O1xudmFyIF9fc3ByZWFkID0gKHRoaXMgJiYgdGhpcy5fX3NwcmVhZCkgfHwgZnVuY3Rpb24gKCkge1xuICAgIGZvciAodmFyIGFyID0gW10sIGkgPSAwOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSBhciA9IGFyLmNvbmNhdChfX3JlYWQoYXJndW1lbnRzW2ldKSk7XG4gICAgcmV0dXJuIGFyO1xufTtcbmltcG9ydCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QsIHVzZVJlZiB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB1c2VJc29tb3JwaGljTGF5b3V0RWZmZWN0IGZyb20gJ3VzZS1pc29tb3JwaGljLWxheW91dC1lZmZlY3QnO1xuaW1wb3J0IHsgaW50ZXJwcmV0LCBTdGF0ZSB9IGZyb20gJ3hzdGF0ZSc7XG5pbXBvcnQgdXNlQ29uc3RhbnQgZnJvbSAnLi91c2VDb25zdGFudCc7XG5pbXBvcnQgeyBwYXJ0aXRpb24gfSBmcm9tICcuL3V0aWxzJztcbnZhciBSZWFjdEVmZmVjdFR5cGU7XG4oZnVuY3Rpb24gKFJlYWN0RWZmZWN0VHlwZSkge1xuICAgIFJlYWN0RWZmZWN0VHlwZVtSZWFjdEVmZmVjdFR5cGVbXCJFZmZlY3RcIl0gPSAxXSA9IFwiRWZmZWN0XCI7XG4gICAgUmVhY3RFZmZlY3RUeXBlW1JlYWN0RWZmZWN0VHlwZVtcIkxheW91dEVmZmVjdFwiXSA9IDJdID0gXCJMYXlvdXRFZmZlY3RcIjtcbn0pKFJlYWN0RWZmZWN0VHlwZSB8fCAoUmVhY3RFZmZlY3RUeXBlID0ge30pKTtcbmZ1bmN0aW9uIGNyZWF0ZVJlYWN0QWN0aW9uRnVuY3Rpb24oZXhlYywgdGFnKSB7XG4gICAgdmFyIGVmZmVjdEV4ZWMgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBhcmdzID0gW107XG4gICAgICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBhcmd1bWVudHMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICAgICAgICBhcmdzW19pXSA9IGFyZ3VtZW50c1tfaV07XG4gICAgICAgIH1cbiAgICAgICAgLy8gZG9uJ3QgZXhlY3V0ZTsganVzdCByZXR1cm5cbiAgICAgICAgcmV0dXJuIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHJldHVybiBleGVjLmFwcGx5KHZvaWQgMCwgX19zcHJlYWQoYXJncykpO1xuICAgICAgICB9O1xuICAgIH07XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnRpZXMoZWZmZWN0RXhlYywge1xuICAgICAgICBuYW1lOiB7IHZhbHVlOiBcImVmZmVjdDpcIiArIGV4ZWMubmFtZSB9LFxuICAgICAgICBfX2VmZmVjdDogeyB2YWx1ZTogdGFnIH1cbiAgICB9KTtcbiAgICByZXR1cm4gZWZmZWN0RXhlYztcbn1cbmV4cG9ydCBmdW5jdGlvbiBhc0VmZmVjdChleGVjKSB7XG4gICAgcmV0dXJuIGNyZWF0ZVJlYWN0QWN0aW9uRnVuY3Rpb24oZXhlYywgUmVhY3RFZmZlY3RUeXBlLkVmZmVjdCk7XG59XG5leHBvcnQgZnVuY3Rpb24gYXNMYXlvdXRFZmZlY3QoZXhlYykge1xuICAgIHJldHVybiBjcmVhdGVSZWFjdEFjdGlvbkZ1bmN0aW9uKGV4ZWMsIFJlYWN0RWZmZWN0VHlwZS5MYXlvdXRFZmZlY3QpO1xufVxuZnVuY3Rpb24gZXhlY3V0ZUVmZmVjdChhY3Rpb24sIHN0YXRlKSB7XG4gICAgdmFyIGV4ZWMgPSBhY3Rpb24uZXhlYztcbiAgICB2YXIgb3JpZ2luYWxFeGVjID0gZXhlYyhzdGF0ZS5jb250ZXh0LCBzdGF0ZS5fZXZlbnQuZGF0YSwge1xuICAgICAgICBhY3Rpb246IGFjdGlvbixcbiAgICAgICAgc3RhdGU6IHN0YXRlLFxuICAgICAgICBfZXZlbnQ6IHN0YXRlLl9ldmVudFxuICAgIH0pO1xuICAgIG9yaWdpbmFsRXhlYygpO1xufVxuZXhwb3J0IGZ1bmN0aW9uIHVzZU1hY2hpbmUoZ2V0TWFjaGluZSwgb3B0aW9ucykge1xuICAgIGlmIChvcHRpb25zID09PSB2b2lkIDApIHsgb3B0aW9ucyA9IHt9OyB9XG4gICAgdmFyIG1hY2hpbmUgPSB1c2VDb25zdGFudChmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiB0eXBlb2YgZ2V0TWFjaGluZSA9PT0gJ2Z1bmN0aW9uJyA/IGdldE1hY2hpbmUoKSA6IGdldE1hY2hpbmU7XG4gICAgfSk7XG4gICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicgJiZcbiAgICAgICAgdHlwZW9mIGdldE1hY2hpbmUgIT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgdmFyIF9hID0gX19yZWFkKHVzZVN0YXRlKG1hY2hpbmUpLCAxKSwgaW5pdGlhbE1hY2hpbmUgPSBfYVswXTtcbiAgICAgICAgaWYgKG1hY2hpbmUgIT09IGluaXRpYWxNYWNoaW5lKSB7XG4gICAgICAgICAgICBjb25zb2xlLndhcm4oJ01hY2hpbmUgZ2l2ZW4gdG8gYHVzZU1hY2hpbmVgIGhhcyBjaGFuZ2VkIGJldHdlZW4gcmVuZGVycy4gVGhpcyBpcyBub3Qgc3VwcG9ydGVkIGFuZCBtaWdodCBsZWFkIHRvIHVuZXhwZWN0ZWQgcmVzdWx0cy5cXG4nICtcbiAgICAgICAgICAgICAgICAnUGxlYXNlIG1ha2Ugc3VyZSB0aGF0IHlvdSBwYXNzIHRoZSBzYW1lIE1hY2hpbmUgYXMgYXJndW1lbnQgZWFjaCB0aW1lLicpO1xuICAgICAgICB9XG4gICAgfVxuICAgIHZhciBjb250ZXh0ID0gb3B0aW9ucy5jb250ZXh0LCBndWFyZHMgPSBvcHRpb25zLmd1YXJkcywgYWN0aW9ucyA9IG9wdGlvbnMuYWN0aW9ucywgYWN0aXZpdGllcyA9IG9wdGlvbnMuYWN0aXZpdGllcywgc2VydmljZXMgPSBvcHRpb25zLnNlcnZpY2VzLCBkZWxheXMgPSBvcHRpb25zLmRlbGF5cywgcmVoeWRyYXRlZFN0YXRlID0gb3B0aW9ucy5zdGF0ZSwgaW50ZXJwcmV0ZXJPcHRpb25zID0gX19yZXN0KG9wdGlvbnMsIFtcImNvbnRleHRcIiwgXCJndWFyZHNcIiwgXCJhY3Rpb25zXCIsIFwiYWN0aXZpdGllc1wiLCBcInNlcnZpY2VzXCIsIFwiZGVsYXlzXCIsIFwic3RhdGVcIl0pO1xuICAgIHZhciBfYiA9IF9fcmVhZCh1c2VDb25zdGFudChmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBtYWNoaW5lQ29uZmlnID0ge1xuICAgICAgICAgICAgY29udGV4dDogY29udGV4dCxcbiAgICAgICAgICAgIGd1YXJkczogZ3VhcmRzLFxuICAgICAgICAgICAgYWN0aW9uczogYWN0aW9ucyxcbiAgICAgICAgICAgIGFjdGl2aXRpZXM6IGFjdGl2aXRpZXMsXG4gICAgICAgICAgICBzZXJ2aWNlczogc2VydmljZXMsXG4gICAgICAgICAgICBkZWxheXM6IGRlbGF5c1xuICAgICAgICB9O1xuICAgICAgICB2YXIgcmVzb2x2ZWRNYWNoaW5lID0gbWFjaGluZS53aXRoQ29uZmlnKG1hY2hpbmVDb25maWcsIF9fYXNzaWduKF9fYXNzaWduKHt9LCBtYWNoaW5lLmNvbnRleHQpLCBjb250ZXh0KSk7XG4gICAgICAgIHJldHVybiBbXG4gICAgICAgICAgICByZXNvbHZlZE1hY2hpbmUsXG4gICAgICAgICAgICBpbnRlcnByZXQocmVzb2x2ZWRNYWNoaW5lLCBfX2Fzc2lnbih7IGRlZmVyRXZlbnRzOiB0cnVlIH0sIGludGVycHJldGVyT3B0aW9ucykpXG4gICAgICAgIF07XG4gICAgfSksIDIpLCByZXNvbHZlZE1hY2hpbmUgPSBfYlswXSwgc2VydmljZSA9IF9iWzFdO1xuICAgIHZhciBfYyA9IF9fcmVhZCh1c2VTdGF0ZShmdW5jdGlvbiAoKSB7XG4gICAgICAgIC8vIEFsd2F5cyByZWFkIHRoZSBpbml0aWFsIHN0YXRlIHRvIHByb3Blcmx5IGluaXRpYWxpemUgdGhlIG1hY2hpbmVcbiAgICAgICAgLy8gaHR0cHM6Ly9naXRodWIuY29tL2Rhdmlka3BpYW5vL3hzdGF0ZS9pc3N1ZXMvMTMzNFxuICAgICAgICB2YXIgaW5pdGlhbFN0YXRlID0gcmVzb2x2ZWRNYWNoaW5lLmluaXRpYWxTdGF0ZTtcbiAgICAgICAgcmV0dXJuIHJlaHlkcmF0ZWRTdGF0ZSA/IFN0YXRlLmNyZWF0ZShyZWh5ZHJhdGVkU3RhdGUpIDogaW5pdGlhbFN0YXRlO1xuICAgIH0pLCAyKSwgc3RhdGUgPSBfY1swXSwgc2V0U3RhdGUgPSBfY1sxXTtcbiAgICB2YXIgZWZmZWN0QWN0aW9uc1JlZiA9IHVzZVJlZihbXSk7XG4gICAgdmFyIGxheW91dEVmZmVjdEFjdGlvbnNSZWYgPSB1c2VSZWYoW10pO1xuICAgIHVzZUlzb21vcnBoaWNMYXlvdXRFZmZlY3QoZnVuY3Rpb24gKCkge1xuICAgICAgICBzZXJ2aWNlXG4gICAgICAgICAgICAub25UcmFuc2l0aW9uKGZ1bmN0aW9uIChjdXJyZW50U3RhdGUpIHtcbiAgICAgICAgICAgIHZhciBfYSwgX2I7XG4gICAgICAgICAgICAvLyBPbmx5IGNoYW5nZSB0aGUgY3VycmVudCBzdGF0ZSBpZjpcbiAgICAgICAgICAgIC8vIC0gdGhlIGluY29taW5nIHN0YXRlIGlzIHRoZSBcImxpdmVcIiBpbml0aWFsIHN0YXRlIChzaW5jZSBpdCBtaWdodCBoYXZlIG5ldyBhY3RvcnMpXG4gICAgICAgICAgICAvLyAtIE9SIHRoZSBpbmNvbWluZyBzdGF0ZSBhY3R1YWxseSBjaGFuZ2VkLlxuICAgICAgICAgICAgLy9cbiAgICAgICAgICAgIC8vIFRoZSBcImxpdmVcIiBpbml0aWFsIHN0YXRlIHdpbGwgaGF2ZSAuY2hhbmdlZCA9PT0gdW5kZWZpbmVkLlxuICAgICAgICAgICAgdmFyIGluaXRpYWxTdGF0ZUNoYW5nZWQgPSBjdXJyZW50U3RhdGUuY2hhbmdlZCA9PT0gdW5kZWZpbmVkICYmXG4gICAgICAgICAgICAgICAgT2JqZWN0LmtleXMoY3VycmVudFN0YXRlLmNoaWxkcmVuKS5sZW5ndGg7XG4gICAgICAgICAgICBpZiAoY3VycmVudFN0YXRlLmNoYW5nZWQgfHwgaW5pdGlhbFN0YXRlQ2hhbmdlZCkge1xuICAgICAgICAgICAgICAgIHNldFN0YXRlKGN1cnJlbnRTdGF0ZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoY3VycmVudFN0YXRlLmFjdGlvbnMubGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgdmFyIHJlYWN0RWZmZWN0QWN0aW9ucyA9IGN1cnJlbnRTdGF0ZS5hY3Rpb25zLmZpbHRlcihmdW5jdGlvbiAoYWN0aW9uKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiAodHlwZW9mIGFjdGlvbi5leGVjID09PSAnZnVuY3Rpb24nICYmXG4gICAgICAgICAgICAgICAgICAgICAgICAnX19lZmZlY3QnIGluXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYWN0aW9uLmV4ZWMpO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIHZhciBfYyA9IF9fcmVhZChwYXJ0aXRpb24ocmVhY3RFZmZlY3RBY3Rpb25zLCBmdW5jdGlvbiAoYWN0aW9uKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBhY3Rpb24uZXhlYy5fX2VmZmVjdCA9PT0gUmVhY3RFZmZlY3RUeXBlLkVmZmVjdDtcbiAgICAgICAgICAgICAgICB9KSwgMiksIGVmZmVjdEFjdGlvbnMgPSBfY1swXSwgbGF5b3V0RWZmZWN0QWN0aW9ucyA9IF9jWzFdO1xuICAgICAgICAgICAgICAgIChfYSA9IGVmZmVjdEFjdGlvbnNSZWYuY3VycmVudCkucHVzaC5hcHBseShfYSwgX19zcHJlYWQoZWZmZWN0QWN0aW9ucy5tYXAoZnVuY3Rpb24gKGVmZmVjdEFjdGlvbikgeyByZXR1cm4gW2VmZmVjdEFjdGlvbiwgY3VycmVudFN0YXRlXTsgfSkpKTtcbiAgICAgICAgICAgICAgICAoX2IgPSBsYXlvdXRFZmZlY3RBY3Rpb25zUmVmLmN1cnJlbnQpLnB1c2guYXBwbHkoX2IsIF9fc3ByZWFkKGxheW91dEVmZmVjdEFjdGlvbnMubWFwKGZ1bmN0aW9uIChsYXlvdXRFZmZlY3RBY3Rpb24pIHsgcmV0dXJuIFtsYXlvdXRFZmZlY3RBY3Rpb24sIGN1cnJlbnRTdGF0ZV07IH0pKSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pXG4gICAgICAgICAgICAuc3RhcnQocmVoeWRyYXRlZFN0YXRlID8gU3RhdGUuY3JlYXRlKHJlaHlkcmF0ZWRTdGF0ZSkgOiB1bmRlZmluZWQpO1xuICAgICAgICByZXR1cm4gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgc2VydmljZS5zdG9wKCk7XG4gICAgICAgIH07XG4gICAgfSwgW10pO1xuICAgIC8vIE1ha2Ugc3VyZSBhY3Rpb25zIGFuZCBzZXJ2aWNlcyBhcmUga2VwdCB1cGRhdGVkIHdoZW4gdGhleSBjaGFuZ2UuXG4gICAgLy8gVGhpcyBtdXRhdGlvbiBhc3NpZ25tZW50IGlzIHNhZmUgYmVjYXVzZSB0aGUgc2VydmljZSBpbnN0YW5jZSBpcyBvbmx5IHVzZWRcbiAgICAvLyBpbiBvbmUgcGxhY2UgLS0gdGhpcyBob29rJ3MgY2FsbGVyLlxuICAgIHVzZUVmZmVjdChmdW5jdGlvbiAoKSB7XG4gICAgICAgIE9iamVjdC5hc3NpZ24oc2VydmljZS5tYWNoaW5lLm9wdGlvbnMuYWN0aW9ucywgYWN0aW9ucyk7XG4gICAgfSwgW2FjdGlvbnNdKTtcbiAgICB1c2VFZmZlY3QoZnVuY3Rpb24gKCkge1xuICAgICAgICBPYmplY3QuYXNzaWduKHNlcnZpY2UubWFjaGluZS5vcHRpb25zLnNlcnZpY2VzLCBzZXJ2aWNlcyk7XG4gICAgfSwgW3NlcnZpY2VzXSk7XG4gICAgLy8gdGhpcyBpcyBzb21ld2hhdCB3ZWlyZCAtIHRoaXMgc2hvdWxkIGFsd2F5cyBiZSBmbHVzaGVkIHdpdGhpbiB1c2VMYXlvdXRFZmZlY3RcbiAgICAvLyBidXQgd2UgZG9uJ3Qgd2FudCB0byByZWNlaXZlIHdhcm5pbmdzIGFib3V0IHVzZUxheW91dEVmZmVjdCBiZWluZyB1c2VkIG9uIHRoZSBzZXJ2ZXJcbiAgICAvLyBzbyB3ZSBoYXZlIHRvIHVzZSBgdXNlSXNvbW9ycGhpY0xheW91dEVmZmVjdGAgdG8gc2lsZW5jZSB0aG9zZSB3YXJuaW5nc1xuICAgIHVzZUlzb21vcnBoaWNMYXlvdXRFZmZlY3QoZnVuY3Rpb24gKCkge1xuICAgICAgICB3aGlsZSAobGF5b3V0RWZmZWN0QWN0aW9uc1JlZi5jdXJyZW50Lmxlbmd0aCkge1xuICAgICAgICAgICAgdmFyIF9hID0gX19yZWFkKGxheW91dEVmZmVjdEFjdGlvbnNSZWYuY3VycmVudC5zaGlmdCgpLCAyKSwgbGF5b3V0RWZmZWN0QWN0aW9uID0gX2FbMF0sIGVmZmVjdFN0YXRlID0gX2FbMV07XG4gICAgICAgICAgICBleGVjdXRlRWZmZWN0KGxheW91dEVmZmVjdEFjdGlvbiwgZWZmZWN0U3RhdGUpO1xuICAgICAgICB9XG4gICAgfSwgW3N0YXRlXSk7IC8vIGh0dHBzOi8vZ2l0aHViLmNvbS9kYXZpZGtwaWFuby94c3RhdGUvcHVsbC8xMjAyI2Rpc2N1c3Npb25fcjQyOTY3Nzc3M1xuICAgIHVzZUVmZmVjdChmdW5jdGlvbiAoKSB7XG4gICAgICAgIHdoaWxlIChlZmZlY3RBY3Rpb25zUmVmLmN1cnJlbnQubGVuZ3RoKSB7XG4gICAgICAgICAgICB2YXIgX2EgPSBfX3JlYWQoZWZmZWN0QWN0aW9uc1JlZi5jdXJyZW50LnNoaWZ0KCksIDIpLCBlZmZlY3RBY3Rpb24gPSBfYVswXSwgZWZmZWN0U3RhdGUgPSBfYVsxXTtcbiAgICAgICAgICAgIGV4ZWN1dGVFZmZlY3QoZWZmZWN0QWN0aW9uLCBlZmZlY3RTdGF0ZSk7XG4gICAgICAgIH1cbiAgICB9LCBbc3RhdGVdKTtcbiAgICByZXR1cm4gW3N0YXRlLCBzZXJ2aWNlLnNlbmQsIHNlcnZpY2VdO1xufVxuIiwiaW1wb3J0IHsgdXNlTWVtbyB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IHVzZUFjdG9yIH0gZnJvbSAnLi91c2VBY3Rvcic7XG5leHBvcnQgZnVuY3Rpb24gZnJvbVNlcnZpY2Uoc2VydmljZSkge1xuICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nICYmICEoJ21hY2hpbmUnIGluIHNlcnZpY2UpKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihcIkF0dGVtcHRlZCB0byB1c2UgYW4gYWN0b3ItbGlrZSBvYmplY3QgaW5zdGVhZCBvZiBhIHNlcnZpY2UgaW4gdGhlIHVzZVNlcnZpY2UoKSBob29rLiBQbGVhc2UgdXNlIHRoZSB1c2VBY3RvcigpIGhvb2sgaW5zdGVhZC5cIik7XG4gICAgfVxuICAgIHZhciBtYWNoaW5lID0gc2VydmljZS5tYWNoaW5lO1xuICAgIHJldHVybiB7XG4gICAgICAgIHNlbmQ6IHNlcnZpY2Uuc2VuZC5iaW5kKHNlcnZpY2UpLFxuICAgICAgICBzdWJzY3JpYmU6IHNlcnZpY2Uuc3Vic2NyaWJlLmJpbmQoc2VydmljZSksXG4gICAgICAgIHN0b3A6IHNlcnZpY2Uuc3RvcCxcbiAgICAgICAgY3VycmVudDogc2VydmljZS5pbml0aWFsaXplZCA/IHNlcnZpY2Uuc3RhdGUgOiBtYWNoaW5lLmluaXRpYWxTdGF0ZSxcbiAgICAgICAgbmFtZTogc2VydmljZS5zZXNzaW9uSWRcbiAgICB9O1xufVxuZXhwb3J0IGZ1bmN0aW9uIHVzZVNlcnZpY2Uoc2VydmljZSkge1xuICAgIHZhciBzZXJ2aWNlQWN0b3IgPSB1c2VNZW1vKGZ1bmN0aW9uICgpIHsgcmV0dXJuIGZyb21TZXJ2aWNlKHNlcnZpY2UpOyB9LCBbc2VydmljZV0pO1xuICAgIHJldHVybiB1c2VBY3RvcihzZXJ2aWNlQWN0b3IsIGZ1bmN0aW9uIChhY3RvcikgeyByZXR1cm4gYWN0b3IuY3VycmVudDsgfSk7XG59XG4iLCJ2YXIgX19yZWFkID0gKHRoaXMgJiYgdGhpcy5fX3JlYWQpIHx8IGZ1bmN0aW9uIChvLCBuKSB7XG4gICAgdmFyIG0gPSB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgb1tTeW1ib2wuaXRlcmF0b3JdO1xuICAgIGlmICghbSkgcmV0dXJuIG87XG4gICAgdmFyIGkgPSBtLmNhbGwobyksIHIsIGFyID0gW10sIGU7XG4gICAgdHJ5IHtcbiAgICAgICAgd2hpbGUgKChuID09PSB2b2lkIDAgfHwgbi0tID4gMCkgJiYgIShyID0gaS5uZXh0KCkpLmRvbmUpIGFyLnB1c2goci52YWx1ZSk7XG4gICAgfVxuICAgIGNhdGNoIChlcnJvcikgeyBlID0geyBlcnJvcjogZXJyb3IgfTsgfVxuICAgIGZpbmFsbHkge1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgaWYgKHIgJiYgIXIuZG9uZSAmJiAobSA9IGlbXCJyZXR1cm5cIl0pKSBtLmNhbGwoaSk7XG4gICAgICAgIH1cbiAgICAgICAgZmluYWxseSB7IGlmIChlKSB0aHJvdyBlLmVycm9yOyB9XG4gICAgfVxuICAgIHJldHVybiBhcjtcbn07XG52YXIgX192YWx1ZXMgPSAodGhpcyAmJiB0aGlzLl9fdmFsdWVzKSB8fCBmdW5jdGlvbihvKSB7XG4gICAgdmFyIHMgPSB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgU3ltYm9sLml0ZXJhdG9yLCBtID0gcyAmJiBvW3NdLCBpID0gMDtcbiAgICBpZiAobSkgcmV0dXJuIG0uY2FsbChvKTtcbiAgICBpZiAobyAmJiB0eXBlb2Ygby5sZW5ndGggPT09IFwibnVtYmVyXCIpIHJldHVybiB7XG4gICAgICAgIG5leHQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIGlmIChvICYmIGkgPj0gby5sZW5ndGgpIG8gPSB2b2lkIDA7XG4gICAgICAgICAgICByZXR1cm4geyB2YWx1ZTogbyAmJiBvW2krK10sIGRvbmU6ICFvIH07XG4gICAgICAgIH1cbiAgICB9O1xuICAgIHRocm93IG5ldyBUeXBlRXJyb3IocyA/IFwiT2JqZWN0IGlzIG5vdCBpdGVyYWJsZS5cIiA6IFwiU3ltYm9sLml0ZXJhdG9yIGlzIG5vdCBkZWZpbmVkLlwiKTtcbn07XG5leHBvcnQgZnVuY3Rpb24gcGFydGl0aW9uKGl0ZW1zLCBwcmVkaWNhdGUpIHtcbiAgICB2YXIgZV8xLCBfYTtcbiAgICB2YXIgX2IgPSBfX3JlYWQoW1tdLCBbXV0sIDIpLCB0cnV0aHkgPSBfYlswXSwgZmFsc3kgPSBfYlsxXTtcbiAgICB0cnkge1xuICAgICAgICBmb3IgKHZhciBpdGVtc18xID0gX192YWx1ZXMoaXRlbXMpLCBpdGVtc18xXzEgPSBpdGVtc18xLm5leHQoKTsgIWl0ZW1zXzFfMS5kb25lOyBpdGVtc18xXzEgPSBpdGVtc18xLm5leHQoKSkge1xuICAgICAgICAgICAgdmFyIGl0ZW0gPSBpdGVtc18xXzEudmFsdWU7XG4gICAgICAgICAgICBpZiAocHJlZGljYXRlKGl0ZW0pKSB7XG4gICAgICAgICAgICAgICAgdHJ1dGh5LnB1c2goaXRlbSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICBmYWxzeS5wdXNoKGl0ZW0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuICAgIGNhdGNoIChlXzFfMSkgeyBlXzEgPSB7IGVycm9yOiBlXzFfMSB9OyB9XG4gICAgZmluYWxseSB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICBpZiAoaXRlbXNfMV8xICYmICFpdGVtc18xXzEuZG9uZSAmJiAoX2EgPSBpdGVtc18xLnJldHVybikpIF9hLmNhbGwoaXRlbXNfMSk7XG4gICAgICAgIH1cbiAgICAgICAgZmluYWxseSB7IGlmIChlXzEpIHRocm93IGVfMS5lcnJvcjsgfVxuICAgIH1cbiAgICByZXR1cm4gW3RydXRoeSwgZmFsc3ldO1xufVxuIiwiaW1wb3J0IHsgdXNlTGF5b3V0RWZmZWN0IH0gZnJvbSAncmVhY3QnO1xuXG52YXIgaW5kZXggPSAgdXNlTGF5b3V0RWZmZWN0IDtcblxuZXhwb3J0IGRlZmF1bHQgaW5kZXg7XG4iLCJpbXBvcnQgeyB0b0ludm9rZVNvdXJjZSwgbWFwQ29udGV4dCwgaXNNYWNoaW5lIH0gZnJvbSAnLi91dGlscy5qcyc7XG5pbXBvcnQgeyBwcm92aWRlIH0gZnJvbSAnLi9zZXJ2aWNlU2NvcGUuanMnO1xuXG5mdW5jdGlvbiBjcmVhdGVOdWxsQWN0b3IoaWQpIHtcbiAgcmV0dXJuIHtcbiAgICBpZDogaWQsXG4gICAgc2VuZDogZnVuY3Rpb24gKCkge1xuICAgICAgcmV0dXJuIHZvaWQgMDtcbiAgICB9LFxuICAgIHN1YnNjcmliZTogZnVuY3Rpb24gKCkge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgdW5zdWJzY3JpYmU6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICByZXR1cm4gdm9pZCAwO1xuICAgICAgICB9XG4gICAgICB9O1xuICAgIH0sXG4gICAgdG9KU09OOiBmdW5jdGlvbiAoKSB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICBpZDogaWRcbiAgICAgIH07XG4gICAgfVxuICB9O1xufVxuLyoqXHJcbiAqIENyZWF0ZXMgYSBkZWZlcnJlZCBhY3RvciB0aGF0IGlzIGFibGUgdG8gYmUgaW52b2tlZCBnaXZlbiB0aGUgcHJvdmlkZWRcclxuICogaW52b2NhdGlvbiBpbmZvcm1hdGlvbiBpbiBpdHMgYC5tZXRhYCB2YWx1ZS5cclxuICpcclxuICogQHBhcmFtIGludm9rZURlZmluaXRpb24gVGhlIG1ldGEgaW5mb3JtYXRpb24gbmVlZGVkIHRvIGludm9rZSB0aGUgYWN0b3IuXHJcbiAqL1xuXG5cbmZ1bmN0aW9uIGNyZWF0ZUludm9jYWJsZUFjdG9yKGludm9rZURlZmluaXRpb24sIG1hY2hpbmUsIGNvbnRleHQsIF9ldmVudCkge1xuICB2YXIgX2E7XG5cbiAgdmFyIGludm9rZVNyYyA9IHRvSW52b2tlU291cmNlKGludm9rZURlZmluaXRpb24uc3JjKTtcbiAgdmFyIHNlcnZpY2VDcmVhdG9yID0gKF9hID0gbWFjaGluZSA9PT0gbnVsbCB8fCBtYWNoaW5lID09PSB2b2lkIDAgPyB2b2lkIDAgOiBtYWNoaW5lLm9wdGlvbnMuc2VydmljZXMpID09PSBudWxsIHx8IF9hID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYVtpbnZva2VTcmMudHlwZV07XG4gIHZhciByZXNvbHZlZERhdGEgPSBpbnZva2VEZWZpbml0aW9uLmRhdGEgPyBtYXBDb250ZXh0KGludm9rZURlZmluaXRpb24uZGF0YSwgY29udGV4dCwgX2V2ZW50KSA6IHVuZGVmaW5lZDtcbiAgdmFyIHRlbXBBY3RvciA9IHNlcnZpY2VDcmVhdG9yID8gY3JlYXRlRGVmZXJyZWRBY3RvcihzZXJ2aWNlQ3JlYXRvciwgaW52b2tlRGVmaW5pdGlvbi5pZCwgcmVzb2x2ZWREYXRhKSA6IGNyZWF0ZU51bGxBY3RvcihpbnZva2VEZWZpbml0aW9uLmlkKTtcbiAgdGVtcEFjdG9yLm1ldGEgPSBpbnZva2VEZWZpbml0aW9uO1xuICByZXR1cm4gdGVtcEFjdG9yO1xufVxuXG5mdW5jdGlvbiBjcmVhdGVEZWZlcnJlZEFjdG9yKGVudGl0eSwgaWQsIGRhdGEpIHtcbiAgdmFyIHRlbXBBY3RvciA9IGNyZWF0ZU51bGxBY3RvcihpZCk7XG4gIHRlbXBBY3Rvci5kZWZlcnJlZCA9IHRydWU7XG5cbiAgaWYgKGlzTWFjaGluZShlbnRpdHkpKSB7XG4gICAgLy8gXCJtdXRlXCIgdGhlIGV4aXN0aW5nIHNlcnZpY2Ugc2NvcGUgc28gcG90ZW50aWFsIHNwYXduZWQgYWN0b3JzIHdpdGhpbiB0aGUgYC5pbml0aWFsU3RhdGVgIHN0YXkgZGVmZXJyZWQgaGVyZVxuICAgIHRlbXBBY3Rvci5zdGF0ZSA9IHByb3ZpZGUodW5kZWZpbmVkLCBmdW5jdGlvbiAoKSB7XG4gICAgICByZXR1cm4gKGRhdGEgPyBlbnRpdHkud2l0aENvbnRleHQoZGF0YSkgOiBlbnRpdHkpLmluaXRpYWxTdGF0ZTtcbiAgICB9KTtcbiAgfVxuXG4gIHJldHVybiB0ZW1wQWN0b3I7XG59XG5cbmZ1bmN0aW9uIGlzQWN0b3IoaXRlbSkge1xuICB0cnkge1xuICAgIHJldHVybiB0eXBlb2YgaXRlbS5zZW5kID09PSAnZnVuY3Rpb24nO1xuICB9IGNhdGNoIChlKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG59XG5cbmV4cG9ydCB7IGNyZWF0ZURlZmVycmVkQWN0b3IsIGNyZWF0ZUludm9jYWJsZUFjdG9yLCBjcmVhdGVOdWxsQWN0b3IsIGlzQWN0b3IgfTsiLCJpbXBvcnQgeyBTdGF0ZU5vZGUgfSBmcm9tICcuL1N0YXRlTm9kZS5qcyc7XG5cbmZ1bmN0aW9uIE1hY2hpbmUoY29uZmlnLCBvcHRpb25zLCBpbml0aWFsQ29udGV4dCkge1xuICBpZiAoaW5pdGlhbENvbnRleHQgPT09IHZvaWQgMCkge1xuICAgIGluaXRpYWxDb250ZXh0ID0gY29uZmlnLmNvbnRleHQ7XG4gIH1cblxuICB2YXIgcmVzb2x2ZWRJbml0aWFsQ29udGV4dCA9IHR5cGVvZiBpbml0aWFsQ29udGV4dCA9PT0gJ2Z1bmN0aW9uJyA/IGluaXRpYWxDb250ZXh0KCkgOiBpbml0aWFsQ29udGV4dDtcbiAgcmV0dXJuIG5ldyBTdGF0ZU5vZGUoY29uZmlnLCBvcHRpb25zLCByZXNvbHZlZEluaXRpYWxDb250ZXh0KTtcbn1cblxuZnVuY3Rpb24gY3JlYXRlTWFjaGluZShjb25maWcsIG9wdGlvbnMpIHtcbiAgdmFyIHJlc29sdmVkSW5pdGlhbENvbnRleHQgPSB0eXBlb2YgY29uZmlnLmNvbnRleHQgPT09ICdmdW5jdGlvbicgPyBjb25maWcuY29udGV4dCgpIDogY29uZmlnLmNvbnRleHQ7XG4gIHJldHVybiBuZXcgU3RhdGVOb2RlKGNvbmZpZywgb3B0aW9ucywgcmVzb2x2ZWRJbml0aWFsQ29udGV4dCk7XG59XG5cbmV4cG9ydCB7IE1hY2hpbmUsIGNyZWF0ZU1hY2hpbmUgfTsiLCJpbXBvcnQgeyBfX3NwcmVhZCwgX19yZXN0LCBfX2Fzc2lnbiB9IGZyb20gJy4vX3ZpcnR1YWwvX3RzbGliLmpzJztcbmltcG9ydCB7IEVNUFRZX0FDVElWSVRZX01BUCB9IGZyb20gJy4vY29uc3RhbnRzLmpzJztcbmltcG9ydCB7IGlzU3RyaW5nLCBtYXRjaGVzU3RhdGUsIGtleXMgfSBmcm9tICcuL3V0aWxzLmpzJztcbmltcG9ydCB7IG5leHRFdmVudHMgfSBmcm9tICcuL3N0YXRlVXRpbHMuanMnO1xuaW1wb3J0IHsgaW5pdEV2ZW50IH0gZnJvbSAnLi9hY3Rpb25zLmpzJztcblxuZnVuY3Rpb24gc3RhdGVWYWx1ZXNFcXVhbChhLCBiKSB7XG4gIGlmIChhID09PSBiKSB7XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cblxuICBpZiAoYSA9PT0gdW5kZWZpbmVkIHx8IGIgPT09IHVuZGVmaW5lZCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIGlmIChpc1N0cmluZyhhKSB8fCBpc1N0cmluZyhiKSkge1xuICAgIHJldHVybiBhID09PSBiO1xuICB9XG5cbiAgdmFyIGFLZXlzID0ga2V5cyhhKTtcbiAgdmFyIGJLZXlzID0ga2V5cyhiKTtcbiAgcmV0dXJuIGFLZXlzLmxlbmd0aCA9PT0gYktleXMubGVuZ3RoICYmIGFLZXlzLmV2ZXJ5KGZ1bmN0aW9uIChrZXkpIHtcbiAgICByZXR1cm4gc3RhdGVWYWx1ZXNFcXVhbChhW2tleV0sIGJba2V5XSk7XG4gIH0pO1xufVxuXG5mdW5jdGlvbiBpc1N0YXRlKHN0YXRlKSB7XG4gIGlmIChpc1N0cmluZyhzdGF0ZSkpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICByZXR1cm4gJ3ZhbHVlJyBpbiBzdGF0ZSAmJiAnaGlzdG9yeScgaW4gc3RhdGU7XG59XG5cbmZ1bmN0aW9uIGJpbmRBY3Rpb25Ub1N0YXRlKGFjdGlvbiwgc3RhdGUpIHtcbiAgdmFyIGV4ZWMgPSBhY3Rpb24uZXhlYztcblxuICB2YXIgYm91bmRBY3Rpb24gPSBfX2Fzc2lnbihfX2Fzc2lnbih7fSwgYWN0aW9uKSwge1xuICAgIGV4ZWM6IGV4ZWMgIT09IHVuZGVmaW5lZCA/IGZ1bmN0aW9uICgpIHtcbiAgICAgIHJldHVybiBleGVjKHN0YXRlLmNvbnRleHQsIHN0YXRlLmV2ZW50LCB7XG4gICAgICAgIGFjdGlvbjogYWN0aW9uLFxuICAgICAgICBzdGF0ZTogc3RhdGUsXG4gICAgICAgIF9ldmVudDogc3RhdGUuX2V2ZW50XG4gICAgICB9KTtcbiAgICB9IDogdW5kZWZpbmVkXG4gIH0pO1xuXG4gIHJldHVybiBib3VuZEFjdGlvbjtcbn1cblxudmFyIFN0YXRlID1cbi8qI19fUFVSRV9fKi9cblxuLyoqIEBjbGFzcyAqL1xuZnVuY3Rpb24gKCkge1xuICAvKipcclxuICAgKiBDcmVhdGVzIGEgbmV3IFN0YXRlIGluc3RhbmNlLlxyXG4gICAqIEBwYXJhbSB2YWx1ZSBUaGUgc3RhdGUgdmFsdWVcclxuICAgKiBAcGFyYW0gY29udGV4dCBUaGUgZXh0ZW5kZWQgc3RhdGVcclxuICAgKiBAcGFyYW0gaGlzdG9yeVZhbHVlIFRoZSB0cmVlIHJlcHJlc2VudGluZyBoaXN0b3JpY2FsIHZhbHVlcyBvZiB0aGUgc3RhdGUgbm9kZXNcclxuICAgKiBAcGFyYW0gaGlzdG9yeSBUaGUgcHJldmlvdXMgc3RhdGVcclxuICAgKiBAcGFyYW0gYWN0aW9ucyBBbiBhcnJheSBvZiBhY3Rpb24gb2JqZWN0cyB0byBleGVjdXRlIGFzIHNpZGUtZWZmZWN0c1xyXG4gICAqIEBwYXJhbSBhY3Rpdml0aWVzIEEgbWFwcGluZyBvZiBhY3Rpdml0aWVzIGFuZCB3aGV0aGVyIHRoZXkgYXJlIHN0YXJ0ZWQgKGB0cnVlYCkgb3Igc3RvcHBlZCAoYGZhbHNlYCkuXHJcbiAgICogQHBhcmFtIG1ldGFcclxuICAgKiBAcGFyYW0gZXZlbnRzIEludGVybmFsIGV2ZW50IHF1ZXVlLiBTaG91bGQgYmUgZW1wdHkgd2l0aCBydW4tdG8tY29tcGxldGlvbiBzZW1hbnRpY3MuXHJcbiAgICogQHBhcmFtIGNvbmZpZ3VyYXRpb25cclxuICAgKi9cbiAgZnVuY3Rpb24gU3RhdGUoY29uZmlnKSB7XG4gICAgdmFyIF90aGlzID0gdGhpcztcblxuICAgIHRoaXMuYWN0aW9ucyA9IFtdO1xuICAgIHRoaXMuYWN0aXZpdGllcyA9IEVNUFRZX0FDVElWSVRZX01BUDtcbiAgICB0aGlzLm1ldGEgPSB7fTtcbiAgICB0aGlzLmV2ZW50cyA9IFtdO1xuICAgIHRoaXMudmFsdWUgPSBjb25maWcudmFsdWU7XG4gICAgdGhpcy5jb250ZXh0ID0gY29uZmlnLmNvbnRleHQ7XG4gICAgdGhpcy5fZXZlbnQgPSBjb25maWcuX2V2ZW50O1xuICAgIHRoaXMuX3Nlc3Npb25pZCA9IGNvbmZpZy5fc2Vzc2lvbmlkO1xuICAgIHRoaXMuZXZlbnQgPSB0aGlzLl9ldmVudC5kYXRhO1xuICAgIHRoaXMuaGlzdG9yeVZhbHVlID0gY29uZmlnLmhpc3RvcnlWYWx1ZTtcbiAgICB0aGlzLmhpc3RvcnkgPSBjb25maWcuaGlzdG9yeTtcbiAgICB0aGlzLmFjdGlvbnMgPSBjb25maWcuYWN0aW9ucyB8fCBbXTtcbiAgICB0aGlzLmFjdGl2aXRpZXMgPSBjb25maWcuYWN0aXZpdGllcyB8fCBFTVBUWV9BQ1RJVklUWV9NQVA7XG4gICAgdGhpcy5tZXRhID0gY29uZmlnLm1ldGEgfHwge307XG4gICAgdGhpcy5ldmVudHMgPSBjb25maWcuZXZlbnRzIHx8IFtdO1xuICAgIHRoaXMubWF0Y2hlcyA9IHRoaXMubWF0Y2hlcy5iaW5kKHRoaXMpO1xuICAgIHRoaXMudG9TdHJpbmdzID0gdGhpcy50b1N0cmluZ3MuYmluZCh0aGlzKTtcbiAgICB0aGlzLmNvbmZpZ3VyYXRpb24gPSBjb25maWcuY29uZmlndXJhdGlvbjtcbiAgICB0aGlzLnRyYW5zaXRpb25zID0gY29uZmlnLnRyYW5zaXRpb25zO1xuICAgIHRoaXMuY2hpbGRyZW4gPSBjb25maWcuY2hpbGRyZW47XG4gICAgdGhpcy5kb25lID0gISFjb25maWcuZG9uZTtcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkodGhpcywgJ25leHRFdmVudHMnLCB7XG4gICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIG5leHRFdmVudHMoX3RoaXMuY29uZmlndXJhdGlvbik7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cbiAgLyoqXHJcbiAgICogQ3JlYXRlcyBhIG5ldyBTdGF0ZSBpbnN0YW5jZSBmb3IgdGhlIGdpdmVuIGBzdGF0ZVZhbHVlYCBhbmQgYGNvbnRleHRgLlxyXG4gICAqIEBwYXJhbSBzdGF0ZVZhbHVlXHJcbiAgICogQHBhcmFtIGNvbnRleHRcclxuICAgKi9cblxuXG4gIFN0YXRlLmZyb20gPSBmdW5jdGlvbiAoc3RhdGVWYWx1ZSwgY29udGV4dCkge1xuICAgIGlmIChzdGF0ZVZhbHVlIGluc3RhbmNlb2YgU3RhdGUpIHtcbiAgICAgIGlmIChzdGF0ZVZhbHVlLmNvbnRleHQgIT09IGNvbnRleHQpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBTdGF0ZSh7XG4gICAgICAgICAgdmFsdWU6IHN0YXRlVmFsdWUudmFsdWUsXG4gICAgICAgICAgY29udGV4dDogY29udGV4dCxcbiAgICAgICAgICBfZXZlbnQ6IHN0YXRlVmFsdWUuX2V2ZW50LFxuICAgICAgICAgIF9zZXNzaW9uaWQ6IG51bGwsXG4gICAgICAgICAgaGlzdG9yeVZhbHVlOiBzdGF0ZVZhbHVlLmhpc3RvcnlWYWx1ZSxcbiAgICAgICAgICBoaXN0b3J5OiBzdGF0ZVZhbHVlLmhpc3RvcnksXG4gICAgICAgICAgYWN0aW9uczogW10sXG4gICAgICAgICAgYWN0aXZpdGllczogc3RhdGVWYWx1ZS5hY3Rpdml0aWVzLFxuICAgICAgICAgIG1ldGE6IHt9LFxuICAgICAgICAgIGV2ZW50czogW10sXG4gICAgICAgICAgY29uZmlndXJhdGlvbjogW10sXG4gICAgICAgICAgdHJhbnNpdGlvbnM6IFtdLFxuICAgICAgICAgIGNoaWxkcmVuOiB7fVxuICAgICAgICB9KTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHN0YXRlVmFsdWU7XG4gICAgfVxuXG4gICAgdmFyIF9ldmVudCA9IGluaXRFdmVudDtcbiAgICByZXR1cm4gbmV3IFN0YXRlKHtcbiAgICAgIHZhbHVlOiBzdGF0ZVZhbHVlLFxuICAgICAgY29udGV4dDogY29udGV4dCxcbiAgICAgIF9ldmVudDogX2V2ZW50LFxuICAgICAgX3Nlc3Npb25pZDogbnVsbCxcbiAgICAgIGhpc3RvcnlWYWx1ZTogdW5kZWZpbmVkLFxuICAgICAgaGlzdG9yeTogdW5kZWZpbmVkLFxuICAgICAgYWN0aW9uczogW10sXG4gICAgICBhY3Rpdml0aWVzOiB1bmRlZmluZWQsXG4gICAgICBtZXRhOiB1bmRlZmluZWQsXG4gICAgICBldmVudHM6IFtdLFxuICAgICAgY29uZmlndXJhdGlvbjogW10sXG4gICAgICB0cmFuc2l0aW9uczogW10sXG4gICAgICBjaGlsZHJlbjoge31cbiAgICB9KTtcbiAgfTtcbiAgLyoqXHJcbiAgICogQ3JlYXRlcyBhIG5ldyBTdGF0ZSBpbnN0YW5jZSBmb3IgdGhlIGdpdmVuIGBjb25maWdgLlxyXG4gICAqIEBwYXJhbSBjb25maWcgVGhlIHN0YXRlIGNvbmZpZ1xyXG4gICAqL1xuXG5cbiAgU3RhdGUuY3JlYXRlID0gZnVuY3Rpb24gKGNvbmZpZykge1xuICAgIHJldHVybiBuZXcgU3RhdGUoY29uZmlnKTtcbiAgfTtcbiAgLyoqXHJcbiAgICogQ3JlYXRlcyBhIG5ldyBgU3RhdGVgIGluc3RhbmNlIGZvciB0aGUgZ2l2ZW4gYHN0YXRlVmFsdWVgIGFuZCBgY29udGV4dGAgd2l0aCBubyBhY3Rpb25zIChzaWRlLWVmZmVjdHMpLlxyXG4gICAqIEBwYXJhbSBzdGF0ZVZhbHVlXHJcbiAgICogQHBhcmFtIGNvbnRleHRcclxuICAgKi9cblxuXG4gIFN0YXRlLmluZXJ0ID0gZnVuY3Rpb24gKHN0YXRlVmFsdWUsIGNvbnRleHQpIHtcbiAgICBpZiAoc3RhdGVWYWx1ZSBpbnN0YW5jZW9mIFN0YXRlKSB7XG4gICAgICBpZiAoIXN0YXRlVmFsdWUuYWN0aW9ucy5sZW5ndGgpIHtcbiAgICAgICAgcmV0dXJuIHN0YXRlVmFsdWU7XG4gICAgICB9XG5cbiAgICAgIHZhciBfZXZlbnQgPSBpbml0RXZlbnQ7XG4gICAgICByZXR1cm4gbmV3IFN0YXRlKHtcbiAgICAgICAgdmFsdWU6IHN0YXRlVmFsdWUudmFsdWUsXG4gICAgICAgIGNvbnRleHQ6IGNvbnRleHQsXG4gICAgICAgIF9ldmVudDogX2V2ZW50LFxuICAgICAgICBfc2Vzc2lvbmlkOiBudWxsLFxuICAgICAgICBoaXN0b3J5VmFsdWU6IHN0YXRlVmFsdWUuaGlzdG9yeVZhbHVlLFxuICAgICAgICBoaXN0b3J5OiBzdGF0ZVZhbHVlLmhpc3RvcnksXG4gICAgICAgIGFjdGl2aXRpZXM6IHN0YXRlVmFsdWUuYWN0aXZpdGllcyxcbiAgICAgICAgY29uZmlndXJhdGlvbjogc3RhdGVWYWx1ZS5jb25maWd1cmF0aW9uLFxuICAgICAgICB0cmFuc2l0aW9uczogW10sXG4gICAgICAgIGNoaWxkcmVuOiB7fVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIFN0YXRlLmZyb20oc3RhdGVWYWx1ZSwgY29udGV4dCk7XG4gIH07XG4gIC8qKlxyXG4gICAqIFJldHVybnMgYW4gYXJyYXkgb2YgYWxsIHRoZSBzdHJpbmcgbGVhZiBzdGF0ZSBub2RlIHBhdGhzLlxyXG4gICAqIEBwYXJhbSBzdGF0ZVZhbHVlXHJcbiAgICogQHBhcmFtIGRlbGltaXRlciBUaGUgY2hhcmFjdGVyKHMpIHRoYXQgc2VwYXJhdGUgZWFjaCBzdWJwYXRoIGluIHRoZSBzdHJpbmcgc3RhdGUgbm9kZSBwYXRoLlxyXG4gICAqL1xuXG5cbiAgU3RhdGUucHJvdG90eXBlLnRvU3RyaW5ncyA9IGZ1bmN0aW9uIChzdGF0ZVZhbHVlLCBkZWxpbWl0ZXIpIHtcbiAgICB2YXIgX3RoaXMgPSB0aGlzO1xuXG4gICAgaWYgKHN0YXRlVmFsdWUgPT09IHZvaWQgMCkge1xuICAgICAgc3RhdGVWYWx1ZSA9IHRoaXMudmFsdWU7XG4gICAgfVxuXG4gICAgaWYgKGRlbGltaXRlciA9PT0gdm9pZCAwKSB7XG4gICAgICBkZWxpbWl0ZXIgPSAnLic7XG4gICAgfVxuXG4gICAgaWYgKGlzU3RyaW5nKHN0YXRlVmFsdWUpKSB7XG4gICAgICByZXR1cm4gW3N0YXRlVmFsdWVdO1xuICAgIH1cblxuICAgIHZhciB2YWx1ZUtleXMgPSBrZXlzKHN0YXRlVmFsdWUpO1xuICAgIHJldHVybiB2YWx1ZUtleXMuY29uY2F0LmFwcGx5KHZhbHVlS2V5cywgX19zcHJlYWQodmFsdWVLZXlzLm1hcChmdW5jdGlvbiAoa2V5KSB7XG4gICAgICByZXR1cm4gX3RoaXMudG9TdHJpbmdzKHN0YXRlVmFsdWVba2V5XSwgZGVsaW1pdGVyKS5tYXAoZnVuY3Rpb24gKHMpIHtcbiAgICAgICAgcmV0dXJuIGtleSArIGRlbGltaXRlciArIHM7XG4gICAgICB9KTtcbiAgICB9KSkpO1xuICB9O1xuXG4gIFN0YXRlLnByb3RvdHlwZS50b0pTT04gPSBmdW5jdGlvbiAoKSB7XG4gICAgdmFyIF9hID0gdGhpcyxcbiAgICAgICAgY29uZmlndXJhdGlvbiA9IF9hLmNvbmZpZ3VyYXRpb24sXG4gICAgICAgIHRyYW5zaXRpb25zID0gX2EudHJhbnNpdGlvbnMsXG4gICAgICAgIGpzb25WYWx1ZXMgPSBfX3Jlc3QoX2EsIFtcImNvbmZpZ3VyYXRpb25cIiwgXCJ0cmFuc2l0aW9uc1wiXSk7XG5cbiAgICByZXR1cm4ganNvblZhbHVlcztcbiAgfTtcbiAgLyoqXHJcbiAgICogV2hldGhlciB0aGUgY3VycmVudCBzdGF0ZSB2YWx1ZSBpcyBhIHN1YnNldCBvZiB0aGUgZ2l2ZW4gcGFyZW50IHN0YXRlIHZhbHVlLlxyXG4gICAqIEBwYXJhbSBwYXJlbnRTdGF0ZVZhbHVlXHJcbiAgICovXG5cblxuICBTdGF0ZS5wcm90b3R5cGUubWF0Y2hlcyA9IGZ1bmN0aW9uIChwYXJlbnRTdGF0ZVZhbHVlKSB7XG4gICAgcmV0dXJuIG1hdGNoZXNTdGF0ZShwYXJlbnRTdGF0ZVZhbHVlLCB0aGlzLnZhbHVlKTtcbiAgfTtcblxuICByZXR1cm4gU3RhdGU7XG59KCk7XG5cbmV4cG9ydCB7IFN0YXRlLCBiaW5kQWN0aW9uVG9TdGF0ZSwgaXNTdGF0ZSwgc3RhdGVWYWx1ZXNFcXVhbCB9OyIsImltcG9ydCB7IF9fYXNzaWduLCBfX3ZhbHVlcywgX19zcHJlYWQsIF9fcmVhZCwgX19yZXN0IH0gZnJvbSAnLi9fdmlydHVhbC9fdHNsaWIuanMnO1xuaW1wb3J0IHsgU1RBVEVfREVMSU1JVEVSIH0gZnJvbSAnLi9jb25zdGFudHMuanMnO1xuaW1wb3J0IHsgSVNfUFJPRFVDVElPTiB9IGZyb20gJy4vZW52aXJvbm1lbnQuanMnO1xuaW1wb3J0IHsgbWFwVmFsdWVzLCBpc0FycmF5LCBmbGF0dGVuLCBrZXlzLCB0b0FycmF5LCB0b1N0YXRlVmFsdWUsIGlzU3RyaW5nLCBnZXRFdmVudFR5cGUsIG1hdGNoZXNTdGF0ZSwgcGF0aCwgZXZhbHVhdGVHdWFyZCwgbWFwQ29udGV4dCwgdG9TQ1hNTEV2ZW50LCBwYXRoVG9TdGF0ZVZhbHVlLCBpc0J1aWx0SW5FdmVudCwgcGFydGl0aW9uLCB1cGRhdGVIaXN0b3J5VmFsdWUsIHRvU3RhdGVQYXRoLCBtYXBGaWx0ZXJWYWx1ZXMsIHdhcm4sIHRvU3RhdGVQYXRocywgbmVzdGVkUGF0aCwgbm9ybWFsaXplVGFyZ2V0LCB0b0d1YXJkLCB0b1RyYW5zaXRpb25Db25maWdBcnJheSwgaXNNYWNoaW5lLCBpc0Z1bmN0aW9uIH0gZnJvbSAnLi91dGlscy5qcyc7XG5pbXBvcnQgeyBTcGVjaWFsVGFyZ2V0cyB9IGZyb20gJy4vdHlwZXMuanMnO1xuaW1wb3J0IHsgZ2V0QWxsU3RhdGVOb2RlcywgZ2V0Q29uZmlndXJhdGlvbiwgaGFzLCBnZXRDaGlsZHJlbiwgaXNJbkZpbmFsU3RhdGUsIGdldFZhbHVlLCBpc0xlYWZOb2RlIH0gZnJvbSAnLi9zdGF0ZVV0aWxzLmpzJztcbmltcG9ydCB7IHN0YXJ0IGFzIHN0YXJ0JDEsIHN0b3AgYXMgc3RvcCQxLCBpbnZva2UsIHVwZGF0ZSwgbnVsbEV2ZW50LCByYWlzZSBhcyByYWlzZSQxLCBzZW5kIGFzIHNlbmQkMSB9IGZyb20gJy4vYWN0aW9uVHlwZXMuanMnO1xuaW1wb3J0IHsgZG9uZSwgc3RhcnQsIHJhaXNlLCBzdG9wLCB0b0FjdGlvbk9iamVjdHMsIHJlc29sdmVBY3Rpb25zLCBkb25lSW52b2tlLCBlcnJvciwgdG9BY3Rpb25PYmplY3QsIHRvQWN0aXZpdHlEZWZpbml0aW9uLCBhZnRlciwgc2VuZCwgY2FuY2VsLCBpbml0RXZlbnQgfSBmcm9tICcuL2FjdGlvbnMuanMnO1xuaW1wb3J0IHsgU3RhdGUsIHN0YXRlVmFsdWVzRXF1YWwgfSBmcm9tICcuL1N0YXRlLmpzJztcbmltcG9ydCB7IGNyZWF0ZUludm9jYWJsZUFjdG9yIH0gZnJvbSAnLi9BY3Rvci5qcyc7XG5pbXBvcnQgeyB0b0ludm9rZURlZmluaXRpb24gfSBmcm9tICcuL2ludm9rZVV0aWxzLmpzJztcbnZhciBOVUxMX0VWRU5UID0gJyc7XG52YXIgU1RBVEVfSURFTlRJRklFUiA9ICcjJztcbnZhciBXSUxEQ0FSRCA9ICcqJztcbnZhciBFTVBUWV9PQkpFQ1QgPSB7fTtcblxudmFyIGlzU3RhdGVJZCA9IGZ1bmN0aW9uIChzdHIpIHtcbiAgcmV0dXJuIHN0clswXSA9PT0gU1RBVEVfSURFTlRJRklFUjtcbn07XG5cbnZhciBjcmVhdGVEZWZhdWx0T3B0aW9ucyA9IGZ1bmN0aW9uICgpIHtcbiAgcmV0dXJuIHtcbiAgICBhY3Rpb25zOiB7fSxcbiAgICBndWFyZHM6IHt9LFxuICAgIHNlcnZpY2VzOiB7fSxcbiAgICBhY3Rpdml0aWVzOiB7fSxcbiAgICBkZWxheXM6IHt9XG4gIH07XG59O1xuXG52YXIgdmFsaWRhdGVBcnJheWlmaWVkVHJhbnNpdGlvbnMgPSBmdW5jdGlvbiAoc3RhdGVOb2RlLCBldmVudCwgdHJhbnNpdGlvbnMpIHtcbiAgdmFyIGhhc05vbkxhc3RVbmd1YXJkZWRUYXJnZXQgPSB0cmFuc2l0aW9ucy5zbGljZSgwLCAtMSkuc29tZShmdW5jdGlvbiAodHJhbnNpdGlvbikge1xuICAgIHJldHVybiAhKCdjb25kJyBpbiB0cmFuc2l0aW9uKSAmJiAhKCdpbicgaW4gdHJhbnNpdGlvbikgJiYgKGlzU3RyaW5nKHRyYW5zaXRpb24udGFyZ2V0KSB8fCBpc01hY2hpbmUodHJhbnNpdGlvbi50YXJnZXQpKTtcbiAgfSk7XG4gIHZhciBldmVudFRleHQgPSBldmVudCA9PT0gTlVMTF9FVkVOVCA/ICd0aGUgdHJhbnNpZW50IGV2ZW50JyA6IFwiZXZlbnQgJ1wiICsgZXZlbnQgKyBcIidcIjtcbiAgd2FybighaGFzTm9uTGFzdFVuZ3VhcmRlZFRhcmdldCwgXCJPbmUgb3IgbW9yZSB0cmFuc2l0aW9ucyBmb3IgXCIgKyBldmVudFRleHQgKyBcIiBvbiBzdGF0ZSAnXCIgKyBzdGF0ZU5vZGUuaWQgKyBcIicgYXJlIHVucmVhY2hhYmxlLiBcIiArIFwiTWFrZSBzdXJlIHRoYXQgdGhlIGRlZmF1bHQgdHJhbnNpdGlvbiBpcyB0aGUgbGFzdCBvbmUgZGVmaW5lZC5cIik7XG59O1xuXG52YXIgU3RhdGVOb2RlID1cbi8qI19fUFVSRV9fKi9cblxuLyoqIEBjbGFzcyAqL1xuZnVuY3Rpb24gKCkge1xuICBmdW5jdGlvbiBTdGF0ZU5vZGUoXG4gIC8qKlxyXG4gICAqIFRoZSByYXcgY29uZmlnIHVzZWQgdG8gY3JlYXRlIHRoZSBtYWNoaW5lLlxyXG4gICAqL1xuICBjb25maWcsIG9wdGlvbnMsXG4gIC8qKlxyXG4gICAqIFRoZSBpbml0aWFsIGV4dGVuZGVkIHN0YXRlXHJcbiAgICovXG4gIGNvbnRleHQpIHtcbiAgICB2YXIgX3RoaXMgPSB0aGlzO1xuXG4gICAgdGhpcy5jb25maWcgPSBjb25maWc7XG4gICAgdGhpcy5jb250ZXh0ID0gY29udGV4dDtcbiAgICAvKipcclxuICAgICAqIFRoZSBvcmRlciB0aGlzIHN0YXRlIG5vZGUgYXBwZWFycy4gQ29ycmVzcG9uZHMgdG8gdGhlIGltcGxpY2l0IFNDWE1MIGRvY3VtZW50IG9yZGVyLlxyXG4gICAgICovXG5cbiAgICB0aGlzLm9yZGVyID0gLTE7XG4gICAgdGhpcy5fX3hzdGF0ZW5vZGUgPSB0cnVlO1xuICAgIHRoaXMuX19jYWNoZSA9IHtcbiAgICAgIGV2ZW50czogdW5kZWZpbmVkLFxuICAgICAgcmVsYXRpdmVWYWx1ZTogbmV3IE1hcCgpLFxuICAgICAgaW5pdGlhbFN0YXRlVmFsdWU6IHVuZGVmaW5lZCxcbiAgICAgIGluaXRpYWxTdGF0ZTogdW5kZWZpbmVkLFxuICAgICAgb246IHVuZGVmaW5lZCxcbiAgICAgIHRyYW5zaXRpb25zOiB1bmRlZmluZWQsXG4gICAgICBjYW5kaWRhdGVzOiB7fSxcbiAgICAgIGRlbGF5ZWRUcmFuc2l0aW9uczogdW5kZWZpbmVkXG4gICAgfTtcbiAgICB0aGlzLmlkTWFwID0ge307XG4gICAgdGhpcy5vcHRpb25zID0gT2JqZWN0LmFzc2lnbihjcmVhdGVEZWZhdWx0T3B0aW9ucygpLCBvcHRpb25zKTtcbiAgICB0aGlzLnBhcmVudCA9IHRoaXMub3B0aW9ucy5fcGFyZW50O1xuICAgIHRoaXMua2V5ID0gdGhpcy5jb25maWcua2V5IHx8IHRoaXMub3B0aW9ucy5fa2V5IHx8IHRoaXMuY29uZmlnLmlkIHx8ICcobWFjaGluZSknO1xuICAgIHRoaXMubWFjaGluZSA9IHRoaXMucGFyZW50ID8gdGhpcy5wYXJlbnQubWFjaGluZSA6IHRoaXM7XG4gICAgdGhpcy5wYXRoID0gdGhpcy5wYXJlbnQgPyB0aGlzLnBhcmVudC5wYXRoLmNvbmNhdCh0aGlzLmtleSkgOiBbXTtcbiAgICB0aGlzLmRlbGltaXRlciA9IHRoaXMuY29uZmlnLmRlbGltaXRlciB8fCAodGhpcy5wYXJlbnQgPyB0aGlzLnBhcmVudC5kZWxpbWl0ZXIgOiBTVEFURV9ERUxJTUlURVIpO1xuICAgIHRoaXMuaWQgPSB0aGlzLmNvbmZpZy5pZCB8fCBfX3NwcmVhZChbdGhpcy5tYWNoaW5lLmtleV0sIHRoaXMucGF0aCkuam9pbih0aGlzLmRlbGltaXRlcik7XG4gICAgdGhpcy52ZXJzaW9uID0gdGhpcy5wYXJlbnQgPyB0aGlzLnBhcmVudC52ZXJzaW9uIDogdGhpcy5jb25maWcudmVyc2lvbjtcbiAgICB0aGlzLnR5cGUgPSB0aGlzLmNvbmZpZy50eXBlIHx8ICh0aGlzLmNvbmZpZy5wYXJhbGxlbCA/ICdwYXJhbGxlbCcgOiB0aGlzLmNvbmZpZy5zdGF0ZXMgJiYga2V5cyh0aGlzLmNvbmZpZy5zdGF0ZXMpLmxlbmd0aCA/ICdjb21wb3VuZCcgOiB0aGlzLmNvbmZpZy5oaXN0b3J5ID8gJ2hpc3RvcnknIDogJ2F0b21pYycpO1xuXG4gICAgaWYgKCFJU19QUk9EVUNUSU9OKSB7XG4gICAgICB3YXJuKCEoJ3BhcmFsbGVsJyBpbiB0aGlzLmNvbmZpZyksIFwiVGhlIFxcXCJwYXJhbGxlbFxcXCIgcHJvcGVydHkgaXMgZGVwcmVjYXRlZCBhbmQgd2lsbCBiZSByZW1vdmVkIGluIHZlcnNpb24gNC4xLiBcIiArICh0aGlzLmNvbmZpZy5wYXJhbGxlbCA/IFwiUmVwbGFjZSB3aXRoIGB0eXBlOiAncGFyYWxsZWwnYFwiIDogXCJVc2UgYHR5cGU6ICdcIiArIHRoaXMudHlwZSArIFwiJ2BcIikgKyBcIiBpbiB0aGUgY29uZmlnIGZvciBzdGF0ZSBub2RlICdcIiArIHRoaXMuaWQgKyBcIicgaW5zdGVhZC5cIik7XG4gICAgfVxuXG4gICAgdGhpcy5pbml0aWFsID0gdGhpcy5jb25maWcuaW5pdGlhbDtcbiAgICB0aGlzLnN0YXRlcyA9IHRoaXMuY29uZmlnLnN0YXRlcyA/IG1hcFZhbHVlcyh0aGlzLmNvbmZpZy5zdGF0ZXMsIGZ1bmN0aW9uIChzdGF0ZUNvbmZpZywga2V5KSB7XG4gICAgICB2YXIgX2E7XG5cbiAgICAgIHZhciBzdGF0ZU5vZGUgPSBuZXcgU3RhdGVOb2RlKHN0YXRlQ29uZmlnLCB7XG4gICAgICAgIF9wYXJlbnQ6IF90aGlzLFxuICAgICAgICBfa2V5OiBrZXlcbiAgICAgIH0pO1xuICAgICAgT2JqZWN0LmFzc2lnbihfdGhpcy5pZE1hcCwgX19hc3NpZ24oKF9hID0ge30sIF9hW3N0YXRlTm9kZS5pZF0gPSBzdGF0ZU5vZGUsIF9hKSwgc3RhdGVOb2RlLmlkTWFwKSk7XG4gICAgICByZXR1cm4gc3RhdGVOb2RlO1xuICAgIH0pIDogRU1QVFlfT0JKRUNUOyAvLyBEb2N1bWVudCBvcmRlclxuXG4gICAgdmFyIG9yZGVyID0gMDtcblxuICAgIGZ1bmN0aW9uIGRmcyhzdGF0ZU5vZGUpIHtcbiAgICAgIHZhciBlXzEsIF9hO1xuXG4gICAgICBzdGF0ZU5vZGUub3JkZXIgPSBvcmRlcisrO1xuXG4gICAgICB0cnkge1xuICAgICAgICBmb3IgKHZhciBfYiA9IF9fdmFsdWVzKGdldENoaWxkcmVuKHN0YXRlTm9kZSkpLCBfYyA9IF9iLm5leHQoKTsgIV9jLmRvbmU7IF9jID0gX2IubmV4dCgpKSB7XG4gICAgICAgICAgdmFyIGNoaWxkID0gX2MudmFsdWU7XG4gICAgICAgICAgZGZzKGNoaWxkKTtcbiAgICAgICAgfVxuICAgICAgfSBjYXRjaCAoZV8xXzEpIHtcbiAgICAgICAgZV8xID0ge1xuICAgICAgICAgIGVycm9yOiBlXzFfMVxuICAgICAgICB9O1xuICAgICAgfSBmaW5hbGx5IHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICBpZiAoX2MgJiYgIV9jLmRvbmUgJiYgKF9hID0gX2IucmV0dXJuKSkgX2EuY2FsbChfYik7XG4gICAgICAgIH0gZmluYWxseSB7XG4gICAgICAgICAgaWYgKGVfMSkgdGhyb3cgZV8xLmVycm9yO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgZGZzKHRoaXMpOyAvLyBIaXN0b3J5IGNvbmZpZ1xuXG4gICAgdGhpcy5oaXN0b3J5ID0gdGhpcy5jb25maWcuaGlzdG9yeSA9PT0gdHJ1ZSA/ICdzaGFsbG93JyA6IHRoaXMuY29uZmlnLmhpc3RvcnkgfHwgZmFsc2U7XG4gICAgdGhpcy5fdHJhbnNpZW50ID0gISF0aGlzLmNvbmZpZy5hbHdheXMgfHwgKCF0aGlzLmNvbmZpZy5vbiA/IGZhbHNlIDogQXJyYXkuaXNBcnJheSh0aGlzLmNvbmZpZy5vbikgPyB0aGlzLmNvbmZpZy5vbi5zb21lKGZ1bmN0aW9uIChfYSkge1xuICAgICAgdmFyIGV2ZW50ID0gX2EuZXZlbnQ7XG4gICAgICByZXR1cm4gZXZlbnQgPT09IE5VTExfRVZFTlQ7XG4gICAgfSkgOiBOVUxMX0VWRU5UIGluIHRoaXMuY29uZmlnLm9uKTtcbiAgICB0aGlzLnN0cmljdCA9ICEhdGhpcy5jb25maWcuc3RyaWN0OyAvLyBUT0RPOiBkZXByZWNhdGUgKGVudHJ5KVxuXG4gICAgdGhpcy5vbkVudHJ5ID0gdG9BcnJheSh0aGlzLmNvbmZpZy5lbnRyeSB8fCB0aGlzLmNvbmZpZy5vbkVudHJ5KS5tYXAoZnVuY3Rpb24gKGFjdGlvbikge1xuICAgICAgcmV0dXJuIHRvQWN0aW9uT2JqZWN0KGFjdGlvbik7XG4gICAgfSk7IC8vIFRPRE86IGRlcHJlY2F0ZSAoZXhpdClcblxuICAgIHRoaXMub25FeGl0ID0gdG9BcnJheSh0aGlzLmNvbmZpZy5leGl0IHx8IHRoaXMuY29uZmlnLm9uRXhpdCkubWFwKGZ1bmN0aW9uIChhY3Rpb24pIHtcbiAgICAgIHJldHVybiB0b0FjdGlvbk9iamVjdChhY3Rpb24pO1xuICAgIH0pO1xuICAgIHRoaXMubWV0YSA9IHRoaXMuY29uZmlnLm1ldGE7XG4gICAgdGhpcy5kb25lRGF0YSA9IHRoaXMudHlwZSA9PT0gJ2ZpbmFsJyA/IHRoaXMuY29uZmlnLmRhdGEgOiB1bmRlZmluZWQ7XG4gICAgdGhpcy5pbnZva2UgPSB0b0FycmF5KHRoaXMuY29uZmlnLmludm9rZSkubWFwKGZ1bmN0aW9uIChpbnZva2VDb25maWcsIGkpIHtcbiAgICAgIHZhciBfYSwgX2I7XG5cbiAgICAgIGlmIChpc01hY2hpbmUoaW52b2tlQ29uZmlnKSkge1xuICAgICAgICBfdGhpcy5tYWNoaW5lLm9wdGlvbnMuc2VydmljZXMgPSBfX2Fzc2lnbigoX2EgPSB7fSwgX2FbaW52b2tlQ29uZmlnLmlkXSA9IGludm9rZUNvbmZpZywgX2EpLCBfdGhpcy5tYWNoaW5lLm9wdGlvbnMuc2VydmljZXMpO1xuICAgICAgICByZXR1cm4gdG9JbnZva2VEZWZpbml0aW9uKHtcbiAgICAgICAgICBzcmM6IGludm9rZUNvbmZpZy5pZCxcbiAgICAgICAgICBpZDogaW52b2tlQ29uZmlnLmlkXG4gICAgICAgIH0pO1xuICAgICAgfSBlbHNlIGlmIChpc1N0cmluZyhpbnZva2VDb25maWcuc3JjKSkge1xuICAgICAgICByZXR1cm4gdG9JbnZva2VEZWZpbml0aW9uKF9fYXNzaWduKF9fYXNzaWduKHt9LCBpbnZva2VDb25maWcpLCB7XG4gICAgICAgICAgaWQ6IGludm9rZUNvbmZpZy5pZCB8fCBpbnZva2VDb25maWcuc3JjLFxuICAgICAgICAgIHNyYzogaW52b2tlQ29uZmlnLnNyY1xuICAgICAgICB9KSk7XG4gICAgICB9IGVsc2UgaWYgKGlzTWFjaGluZShpbnZva2VDb25maWcuc3JjKSB8fCBpc0Z1bmN0aW9uKGludm9rZUNvbmZpZy5zcmMpKSB7XG4gICAgICAgIHZhciBpbnZva2VTcmMgPSBfdGhpcy5pZCArIFwiOmludm9jYXRpb25bXCIgKyBpICsgXCJdXCI7IC8vIFRPRE86IHV0aWwgZnVuY3Rpb25cblxuICAgICAgICBfdGhpcy5tYWNoaW5lLm9wdGlvbnMuc2VydmljZXMgPSBfX2Fzc2lnbigoX2IgPSB7fSwgX2JbaW52b2tlU3JjXSA9IGludm9rZUNvbmZpZy5zcmMsIF9iKSwgX3RoaXMubWFjaGluZS5vcHRpb25zLnNlcnZpY2VzKTtcbiAgICAgICAgcmV0dXJuIHRvSW52b2tlRGVmaW5pdGlvbihfX2Fzc2lnbihfX2Fzc2lnbih7XG4gICAgICAgICAgaWQ6IGludm9rZVNyY1xuICAgICAgICB9LCBpbnZva2VDb25maWcpLCB7XG4gICAgICAgICAgc3JjOiBpbnZva2VTcmNcbiAgICAgICAgfSkpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdmFyIGludm9rZVNvdXJjZSA9IGludm9rZUNvbmZpZy5zcmM7XG4gICAgICAgIHJldHVybiB0b0ludm9rZURlZmluaXRpb24oX19hc3NpZ24oX19hc3NpZ24oe1xuICAgICAgICAgIGlkOiBpbnZva2VTb3VyY2UudHlwZVxuICAgICAgICB9LCBpbnZva2VDb25maWcpLCB7XG4gICAgICAgICAgc3JjOiBpbnZva2VTb3VyY2VcbiAgICAgICAgfSkpO1xuICAgICAgfVxuICAgIH0pO1xuICAgIHRoaXMuYWN0aXZpdGllcyA9IHRvQXJyYXkodGhpcy5jb25maWcuYWN0aXZpdGllcykuY29uY2F0KHRoaXMuaW52b2tlKS5tYXAoZnVuY3Rpb24gKGFjdGl2aXR5KSB7XG4gICAgICByZXR1cm4gdG9BY3Rpdml0eURlZmluaXRpb24oYWN0aXZpdHkpO1xuICAgIH0pO1xuICAgIHRoaXMudHJhbnNpdGlvbiA9IHRoaXMudHJhbnNpdGlvbi5iaW5kKHRoaXMpOyAvLyBUT0RPOiB0aGlzIGlzIHRoZSByZWFsIGZpeCBmb3IgaW5pdGlhbGl6YXRpb24gb25jZVxuICAgIC8vIHN0YXRlIG5vZGUgZ2V0dGVycyBhcmUgZGVwcmVjYXRlZFxuICAgIC8vIGlmICghdGhpcy5wYXJlbnQpIHtcbiAgICAvLyAgIHRoaXMuX2luaXQoKTtcbiAgICAvLyB9XG4gIH1cblxuICBTdGF0ZU5vZGUucHJvdG90eXBlLl9pbml0ID0gZnVuY3Rpb24gKCkge1xuICAgIGlmICh0aGlzLl9fY2FjaGUudHJhbnNpdGlvbnMpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBnZXRBbGxTdGF0ZU5vZGVzKHRoaXMpLmZvckVhY2goZnVuY3Rpb24gKHN0YXRlTm9kZSkge1xuICAgICAgcmV0dXJuIHN0YXRlTm9kZS5vbjtcbiAgICB9KTtcbiAgfTtcbiAgLyoqXHJcbiAgICogQ2xvbmVzIHRoaXMgc3RhdGUgbWFjaGluZSB3aXRoIGN1c3RvbSBvcHRpb25zIGFuZCBjb250ZXh0LlxyXG4gICAqXHJcbiAgICogQHBhcmFtIG9wdGlvbnMgT3B0aW9ucyAoYWN0aW9ucywgZ3VhcmRzLCBhY3Rpdml0aWVzLCBzZXJ2aWNlcykgdG8gcmVjdXJzaXZlbHkgbWVyZ2Ugd2l0aCB0aGUgZXhpc3Rpbmcgb3B0aW9ucy5cclxuICAgKiBAcGFyYW0gY29udGV4dCBDdXN0b20gY29udGV4dCAod2lsbCBvdmVycmlkZSBwcmVkZWZpbmVkIGNvbnRleHQpXHJcbiAgICovXG5cblxuICBTdGF0ZU5vZGUucHJvdG90eXBlLndpdGhDb25maWcgPSBmdW5jdGlvbiAob3B0aW9ucywgY29udGV4dCkge1xuICAgIGlmIChjb250ZXh0ID09PSB2b2lkIDApIHtcbiAgICAgIGNvbnRleHQgPSB0aGlzLmNvbnRleHQ7XG4gICAgfVxuXG4gICAgdmFyIF9hID0gdGhpcy5vcHRpb25zLFxuICAgICAgICBhY3Rpb25zID0gX2EuYWN0aW9ucyxcbiAgICAgICAgYWN0aXZpdGllcyA9IF9hLmFjdGl2aXRpZXMsXG4gICAgICAgIGd1YXJkcyA9IF9hLmd1YXJkcyxcbiAgICAgICAgc2VydmljZXMgPSBfYS5zZXJ2aWNlcyxcbiAgICAgICAgZGVsYXlzID0gX2EuZGVsYXlzO1xuICAgIHJldHVybiBuZXcgU3RhdGVOb2RlKHRoaXMuY29uZmlnLCB7XG4gICAgICBhY3Rpb25zOiBfX2Fzc2lnbihfX2Fzc2lnbih7fSwgYWN0aW9ucyksIG9wdGlvbnMuYWN0aW9ucyksXG4gICAgICBhY3Rpdml0aWVzOiBfX2Fzc2lnbihfX2Fzc2lnbih7fSwgYWN0aXZpdGllcyksIG9wdGlvbnMuYWN0aXZpdGllcyksXG4gICAgICBndWFyZHM6IF9fYXNzaWduKF9fYXNzaWduKHt9LCBndWFyZHMpLCBvcHRpb25zLmd1YXJkcyksXG4gICAgICBzZXJ2aWNlczogX19hc3NpZ24oX19hc3NpZ24oe30sIHNlcnZpY2VzKSwgb3B0aW9ucy5zZXJ2aWNlcyksXG4gICAgICBkZWxheXM6IF9fYXNzaWduKF9fYXNzaWduKHt9LCBkZWxheXMpLCBvcHRpb25zLmRlbGF5cylcbiAgICB9LCBjb250ZXh0KTtcbiAgfTtcbiAgLyoqXHJcbiAgICogQ2xvbmVzIHRoaXMgc3RhdGUgbWFjaGluZSB3aXRoIGN1c3RvbSBjb250ZXh0LlxyXG4gICAqXHJcbiAgICogQHBhcmFtIGNvbnRleHQgQ3VzdG9tIGNvbnRleHQgKHdpbGwgb3ZlcnJpZGUgcHJlZGVmaW5lZCBjb250ZXh0LCBub3QgcmVjdXJzaXZlKVxyXG4gICAqL1xuXG5cbiAgU3RhdGVOb2RlLnByb3RvdHlwZS53aXRoQ29udGV4dCA9IGZ1bmN0aW9uIChjb250ZXh0KSB7XG4gICAgcmV0dXJuIG5ldyBTdGF0ZU5vZGUodGhpcy5jb25maWcsIHRoaXMub3B0aW9ucywgY29udGV4dCk7XG4gIH07XG5cbiAgT2JqZWN0LmRlZmluZVByb3BlcnR5KFN0YXRlTm9kZS5wcm90b3R5cGUsIFwiZGVmaW5pdGlvblwiLCB7XG4gICAgLyoqXHJcbiAgICAgKiBUaGUgd2VsbC1zdHJ1Y3R1cmVkIHN0YXRlIG5vZGUgZGVmaW5pdGlvbi5cclxuICAgICAqL1xuICAgIGdldDogZnVuY3Rpb24gKCkge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgaWQ6IHRoaXMuaWQsXG4gICAgICAgIGtleTogdGhpcy5rZXksXG4gICAgICAgIHZlcnNpb246IHRoaXMudmVyc2lvbixcbiAgICAgICAgY29udGV4dDogdGhpcy5jb250ZXh0LFxuICAgICAgICB0eXBlOiB0aGlzLnR5cGUsXG4gICAgICAgIGluaXRpYWw6IHRoaXMuaW5pdGlhbCxcbiAgICAgICAgaGlzdG9yeTogdGhpcy5oaXN0b3J5LFxuICAgICAgICBzdGF0ZXM6IG1hcFZhbHVlcyh0aGlzLnN0YXRlcywgZnVuY3Rpb24gKHN0YXRlKSB7XG4gICAgICAgICAgcmV0dXJuIHN0YXRlLmRlZmluaXRpb247XG4gICAgICAgIH0pLFxuICAgICAgICBvbjogdGhpcy5vbixcbiAgICAgICAgdHJhbnNpdGlvbnM6IHRoaXMudHJhbnNpdGlvbnMsXG4gICAgICAgIGVudHJ5OiB0aGlzLm9uRW50cnksXG4gICAgICAgIGV4aXQ6IHRoaXMub25FeGl0LFxuICAgICAgICBhY3Rpdml0aWVzOiB0aGlzLmFjdGl2aXRpZXMgfHwgW10sXG4gICAgICAgIG1ldGE6IHRoaXMubWV0YSxcbiAgICAgICAgb3JkZXI6IHRoaXMub3JkZXIgfHwgLTEsXG4gICAgICAgIGRhdGE6IHRoaXMuZG9uZURhdGEsXG4gICAgICAgIGludm9rZTogdGhpcy5pbnZva2VcbiAgICAgIH07XG4gICAgfSxcbiAgICBlbnVtZXJhYmxlOiBmYWxzZSxcbiAgICBjb25maWd1cmFibGU6IHRydWVcbiAgfSk7XG5cbiAgU3RhdGVOb2RlLnByb3RvdHlwZS50b0pTT04gPSBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIHRoaXMuZGVmaW5pdGlvbjtcbiAgfTtcblxuICBPYmplY3QuZGVmaW5lUHJvcGVydHkoU3RhdGVOb2RlLnByb3RvdHlwZSwgXCJvblwiLCB7XG4gICAgLyoqXHJcbiAgICAgKiBUaGUgbWFwcGluZyBvZiBldmVudHMgdG8gdHJhbnNpdGlvbnMuXHJcbiAgICAgKi9cbiAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgIGlmICh0aGlzLl9fY2FjaGUub24pIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX19jYWNoZS5vbjtcbiAgICAgIH1cblxuICAgICAgdmFyIHRyYW5zaXRpb25zID0gdGhpcy50cmFuc2l0aW9ucztcbiAgICAgIHJldHVybiB0aGlzLl9fY2FjaGUub24gPSB0cmFuc2l0aW9ucy5yZWR1Y2UoZnVuY3Rpb24gKG1hcCwgdHJhbnNpdGlvbikge1xuICAgICAgICBtYXBbdHJhbnNpdGlvbi5ldmVudFR5cGVdID0gbWFwW3RyYW5zaXRpb24uZXZlbnRUeXBlXSB8fCBbXTtcbiAgICAgICAgbWFwW3RyYW5zaXRpb24uZXZlbnRUeXBlXS5wdXNoKHRyYW5zaXRpb24pO1xuICAgICAgICByZXR1cm4gbWFwO1xuICAgICAgfSwge30pO1xuICAgIH0sXG4gICAgZW51bWVyYWJsZTogZmFsc2UsXG4gICAgY29uZmlndXJhYmxlOiB0cnVlXG4gIH0pO1xuICBPYmplY3QuZGVmaW5lUHJvcGVydHkoU3RhdGVOb2RlLnByb3RvdHlwZSwgXCJhZnRlclwiLCB7XG4gICAgZ2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgICByZXR1cm4gdGhpcy5fX2NhY2hlLmRlbGF5ZWRUcmFuc2l0aW9ucyB8fCAodGhpcy5fX2NhY2hlLmRlbGF5ZWRUcmFuc2l0aW9ucyA9IHRoaXMuZ2V0RGVsYXllZFRyYW5zaXRpb25zKCksIHRoaXMuX19jYWNoZS5kZWxheWVkVHJhbnNpdGlvbnMpO1xuICAgIH0sXG4gICAgZW51bWVyYWJsZTogZmFsc2UsXG4gICAgY29uZmlndXJhYmxlOiB0cnVlXG4gIH0pO1xuICBPYmplY3QuZGVmaW5lUHJvcGVydHkoU3RhdGVOb2RlLnByb3RvdHlwZSwgXCJ0cmFuc2l0aW9uc1wiLCB7XG4gICAgLyoqXHJcbiAgICAgKiBBbGwgdGhlIHRyYW5zaXRpb25zIHRoYXQgY2FuIGJlIHRha2VuIGZyb20gdGhpcyBzdGF0ZSBub2RlLlxyXG4gICAgICovXG4gICAgZ2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgICByZXR1cm4gdGhpcy5fX2NhY2hlLnRyYW5zaXRpb25zIHx8ICh0aGlzLl9fY2FjaGUudHJhbnNpdGlvbnMgPSB0aGlzLmZvcm1hdFRyYW5zaXRpb25zKCksIHRoaXMuX19jYWNoZS50cmFuc2l0aW9ucyk7XG4gICAgfSxcbiAgICBlbnVtZXJhYmxlOiBmYWxzZSxcbiAgICBjb25maWd1cmFibGU6IHRydWVcbiAgfSk7XG5cbiAgU3RhdGVOb2RlLnByb3RvdHlwZS5nZXRDYW5kaWRhdGVzID0gZnVuY3Rpb24gKGV2ZW50TmFtZSkge1xuICAgIGlmICh0aGlzLl9fY2FjaGUuY2FuZGlkYXRlc1tldmVudE5hbWVdKSB7XG4gICAgICByZXR1cm4gdGhpcy5fX2NhY2hlLmNhbmRpZGF0ZXNbZXZlbnROYW1lXTtcbiAgICB9XG5cbiAgICB2YXIgdHJhbnNpZW50ID0gZXZlbnROYW1lID09PSBOVUxMX0VWRU5UO1xuICAgIHZhciBjYW5kaWRhdGVzID0gdGhpcy50cmFuc2l0aW9ucy5maWx0ZXIoZnVuY3Rpb24gKHRyYW5zaXRpb24pIHtcbiAgICAgIHZhciBzYW1lRXZlbnRUeXBlID0gdHJhbnNpdGlvbi5ldmVudFR5cGUgPT09IGV2ZW50TmFtZTsgLy8gbnVsbCBldmVudHMgc2hvdWxkIG9ubHkgbWF0Y2ggYWdhaW5zdCBldmVudGxlc3MgdHJhbnNpdGlvbnNcblxuICAgICAgcmV0dXJuIHRyYW5zaWVudCA/IHNhbWVFdmVudFR5cGUgOiBzYW1lRXZlbnRUeXBlIHx8IHRyYW5zaXRpb24uZXZlbnRUeXBlID09PSBXSUxEQ0FSRDtcbiAgICB9KTtcbiAgICB0aGlzLl9fY2FjaGUuY2FuZGlkYXRlc1tldmVudE5hbWVdID0gY2FuZGlkYXRlcztcbiAgICByZXR1cm4gY2FuZGlkYXRlcztcbiAgfTtcbiAgLyoqXHJcbiAgICogQWxsIGRlbGF5ZWQgdHJhbnNpdGlvbnMgZnJvbSB0aGUgY29uZmlnLlxyXG4gICAqL1xuXG5cbiAgU3RhdGVOb2RlLnByb3RvdHlwZS5nZXREZWxheWVkVHJhbnNpdGlvbnMgPSBmdW5jdGlvbiAoKSB7XG4gICAgdmFyIF90aGlzID0gdGhpcztcblxuICAgIHZhciBhZnRlckNvbmZpZyA9IHRoaXMuY29uZmlnLmFmdGVyO1xuXG4gICAgaWYgKCFhZnRlckNvbmZpZykge1xuICAgICAgcmV0dXJuIFtdO1xuICAgIH1cblxuICAgIHZhciBtdXRhdGVFbnRyeUV4aXQgPSBmdW5jdGlvbiAoZGVsYXksIGkpIHtcbiAgICAgIHZhciBkZWxheVJlZiA9IGlzRnVuY3Rpb24oZGVsYXkpID8gX3RoaXMuaWQgKyBcIjpkZWxheVtcIiArIGkgKyBcIl1cIiA6IGRlbGF5O1xuICAgICAgdmFyIGV2ZW50VHlwZSA9IGFmdGVyKGRlbGF5UmVmLCBfdGhpcy5pZCk7XG5cbiAgICAgIF90aGlzLm9uRW50cnkucHVzaChzZW5kKGV2ZW50VHlwZSwge1xuICAgICAgICBkZWxheTogZGVsYXlcbiAgICAgIH0pKTtcblxuICAgICAgX3RoaXMub25FeGl0LnB1c2goY2FuY2VsKGV2ZW50VHlwZSkpO1xuXG4gICAgICByZXR1cm4gZXZlbnRUeXBlO1xuICAgIH07XG5cbiAgICB2YXIgZGVsYXllZFRyYW5zaXRpb25zID0gaXNBcnJheShhZnRlckNvbmZpZykgPyBhZnRlckNvbmZpZy5tYXAoZnVuY3Rpb24gKHRyYW5zaXRpb24sIGkpIHtcbiAgICAgIHZhciBldmVudFR5cGUgPSBtdXRhdGVFbnRyeUV4aXQodHJhbnNpdGlvbi5kZWxheSwgaSk7XG4gICAgICByZXR1cm4gX19hc3NpZ24oX19hc3NpZ24oe30sIHRyYW5zaXRpb24pLCB7XG4gICAgICAgIGV2ZW50OiBldmVudFR5cGVcbiAgICAgIH0pO1xuICAgIH0pIDogZmxhdHRlbihrZXlzKGFmdGVyQ29uZmlnKS5tYXAoZnVuY3Rpb24gKGRlbGF5LCBpKSB7XG4gICAgICB2YXIgY29uZmlnVHJhbnNpdGlvbiA9IGFmdGVyQ29uZmlnW2RlbGF5XTtcbiAgICAgIHZhciByZXNvbHZlZFRyYW5zaXRpb24gPSBpc1N0cmluZyhjb25maWdUcmFuc2l0aW9uKSA/IHtcbiAgICAgICAgdGFyZ2V0OiBjb25maWdUcmFuc2l0aW9uXG4gICAgICB9IDogY29uZmlnVHJhbnNpdGlvbjtcbiAgICAgIHZhciByZXNvbHZlZERlbGF5ID0gIWlzTmFOKCtkZWxheSkgPyArZGVsYXkgOiBkZWxheTtcbiAgICAgIHZhciBldmVudFR5cGUgPSBtdXRhdGVFbnRyeUV4aXQocmVzb2x2ZWREZWxheSwgaSk7XG4gICAgICByZXR1cm4gdG9BcnJheShyZXNvbHZlZFRyYW5zaXRpb24pLm1hcChmdW5jdGlvbiAodHJhbnNpdGlvbikge1xuICAgICAgICByZXR1cm4gX19hc3NpZ24oX19hc3NpZ24oe30sIHRyYW5zaXRpb24pLCB7XG4gICAgICAgICAgZXZlbnQ6IGV2ZW50VHlwZSxcbiAgICAgICAgICBkZWxheTogcmVzb2x2ZWREZWxheVxuICAgICAgICB9KTtcbiAgICAgIH0pO1xuICAgIH0pKTtcbiAgICByZXR1cm4gZGVsYXllZFRyYW5zaXRpb25zLm1hcChmdW5jdGlvbiAoZGVsYXllZFRyYW5zaXRpb24pIHtcbiAgICAgIHZhciBkZWxheSA9IGRlbGF5ZWRUcmFuc2l0aW9uLmRlbGF5O1xuICAgICAgcmV0dXJuIF9fYXNzaWduKF9fYXNzaWduKHt9LCBfdGhpcy5mb3JtYXRUcmFuc2l0aW9uKGRlbGF5ZWRUcmFuc2l0aW9uKSksIHtcbiAgICAgICAgZGVsYXk6IGRlbGF5XG4gICAgICB9KTtcbiAgICB9KTtcbiAgfTtcbiAgLyoqXHJcbiAgICogUmV0dXJucyB0aGUgc3RhdGUgbm9kZXMgcmVwcmVzZW50ZWQgYnkgdGhlIGN1cnJlbnQgc3RhdGUgdmFsdWUuXHJcbiAgICpcclxuICAgKiBAcGFyYW0gc3RhdGUgVGhlIHN0YXRlIHZhbHVlIG9yIFN0YXRlIGluc3RhbmNlXHJcbiAgICovXG5cblxuICBTdGF0ZU5vZGUucHJvdG90eXBlLmdldFN0YXRlTm9kZXMgPSBmdW5jdGlvbiAoc3RhdGUpIHtcbiAgICB2YXIgX2E7XG5cbiAgICB2YXIgX3RoaXMgPSB0aGlzO1xuXG4gICAgaWYgKCFzdGF0ZSkge1xuICAgICAgcmV0dXJuIFtdO1xuICAgIH1cblxuICAgIHZhciBzdGF0ZVZhbHVlID0gc3RhdGUgaW5zdGFuY2VvZiBTdGF0ZSA/IHN0YXRlLnZhbHVlIDogdG9TdGF0ZVZhbHVlKHN0YXRlLCB0aGlzLmRlbGltaXRlcik7XG5cbiAgICBpZiAoaXNTdHJpbmcoc3RhdGVWYWx1ZSkpIHtcbiAgICAgIHZhciBpbml0aWFsU3RhdGVWYWx1ZSA9IHRoaXMuZ2V0U3RhdGVOb2RlKHN0YXRlVmFsdWUpLmluaXRpYWw7XG4gICAgICByZXR1cm4gaW5pdGlhbFN0YXRlVmFsdWUgIT09IHVuZGVmaW5lZCA/IHRoaXMuZ2V0U3RhdGVOb2RlcygoX2EgPSB7fSwgX2Fbc3RhdGVWYWx1ZV0gPSBpbml0aWFsU3RhdGVWYWx1ZSwgX2EpKSA6IFt0aGlzLnN0YXRlc1tzdGF0ZVZhbHVlXV07XG4gICAgfVxuXG4gICAgdmFyIHN1YlN0YXRlS2V5cyA9IGtleXMoc3RhdGVWYWx1ZSk7XG4gICAgdmFyIHN1YlN0YXRlTm9kZXMgPSBzdWJTdGF0ZUtleXMubWFwKGZ1bmN0aW9uIChzdWJTdGF0ZUtleSkge1xuICAgICAgcmV0dXJuIF90aGlzLmdldFN0YXRlTm9kZShzdWJTdGF0ZUtleSk7XG4gICAgfSk7XG4gICAgcmV0dXJuIHN1YlN0YXRlTm9kZXMuY29uY2F0KHN1YlN0YXRlS2V5cy5yZWR1Y2UoZnVuY3Rpb24gKGFsbFN1YlN0YXRlTm9kZXMsIHN1YlN0YXRlS2V5KSB7XG4gICAgICB2YXIgc3ViU3RhdGVOb2RlID0gX3RoaXMuZ2V0U3RhdGVOb2RlKHN1YlN0YXRlS2V5KS5nZXRTdGF0ZU5vZGVzKHN0YXRlVmFsdWVbc3ViU3RhdGVLZXldKTtcblxuICAgICAgcmV0dXJuIGFsbFN1YlN0YXRlTm9kZXMuY29uY2F0KHN1YlN0YXRlTm9kZSk7XG4gICAgfSwgW10pKTtcbiAgfTtcbiAgLyoqXHJcbiAgICogUmV0dXJucyBgdHJ1ZWAgaWYgdGhpcyBzdGF0ZSBub2RlIGV4cGxpY2l0bHkgaGFuZGxlcyB0aGUgZ2l2ZW4gZXZlbnQuXHJcbiAgICpcclxuICAgKiBAcGFyYW0gZXZlbnQgVGhlIGV2ZW50IGluIHF1ZXN0aW9uXHJcbiAgICovXG5cblxuICBTdGF0ZU5vZGUucHJvdG90eXBlLmhhbmRsZXMgPSBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICB2YXIgZXZlbnRUeXBlID0gZ2V0RXZlbnRUeXBlKGV2ZW50KTtcbiAgICByZXR1cm4gdGhpcy5ldmVudHMuaW5jbHVkZXMoZXZlbnRUeXBlKTtcbiAgfTtcbiAgLyoqXHJcbiAgICogUmVzb2x2ZXMgdGhlIGdpdmVuIGBzdGF0ZWAgdG8gYSBuZXcgYFN0YXRlYCBpbnN0YW5jZSByZWxhdGl2ZSB0byB0aGlzIG1hY2hpbmUuXHJcbiAgICpcclxuICAgKiBUaGlzIGVuc3VyZXMgdGhhdCBgLmV2ZW50c2AgYW5kIGAubmV4dEV2ZW50c2AgcmVwcmVzZW50IHRoZSBjb3JyZWN0IHZhbHVlcy5cclxuICAgKlxyXG4gICAqIEBwYXJhbSBzdGF0ZSBUaGUgc3RhdGUgdG8gcmVzb2x2ZVxyXG4gICAqL1xuXG5cbiAgU3RhdGVOb2RlLnByb3RvdHlwZS5yZXNvbHZlU3RhdGUgPSBmdW5jdGlvbiAoc3RhdGUpIHtcbiAgICB2YXIgY29uZmlndXJhdGlvbiA9IEFycmF5LmZyb20oZ2V0Q29uZmlndXJhdGlvbihbXSwgdGhpcy5nZXRTdGF0ZU5vZGVzKHN0YXRlLnZhbHVlKSkpO1xuICAgIHJldHVybiBuZXcgU3RhdGUoX19hc3NpZ24oX19hc3NpZ24oe30sIHN0YXRlKSwge1xuICAgICAgdmFsdWU6IHRoaXMucmVzb2x2ZShzdGF0ZS52YWx1ZSksXG4gICAgICBjb25maWd1cmF0aW9uOiBjb25maWd1cmF0aW9uXG4gICAgfSkpO1xuICB9O1xuXG4gIFN0YXRlTm9kZS5wcm90b3R5cGUudHJhbnNpdGlvbkxlYWZOb2RlID0gZnVuY3Rpb24gKHN0YXRlVmFsdWUsIHN0YXRlLCBfZXZlbnQpIHtcbiAgICB2YXIgc3RhdGVOb2RlID0gdGhpcy5nZXRTdGF0ZU5vZGUoc3RhdGVWYWx1ZSk7XG4gICAgdmFyIG5leHQgPSBzdGF0ZU5vZGUubmV4dChzdGF0ZSwgX2V2ZW50KTtcblxuICAgIGlmICghbmV4dCB8fCAhbmV4dC50cmFuc2l0aW9ucy5sZW5ndGgpIHtcbiAgICAgIHJldHVybiB0aGlzLm5leHQoc3RhdGUsIF9ldmVudCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIG5leHQ7XG4gIH07XG5cbiAgU3RhdGVOb2RlLnByb3RvdHlwZS50cmFuc2l0aW9uQ29tcG91bmROb2RlID0gZnVuY3Rpb24gKHN0YXRlVmFsdWUsIHN0YXRlLCBfZXZlbnQpIHtcbiAgICB2YXIgc3ViU3RhdGVLZXlzID0ga2V5cyhzdGF0ZVZhbHVlKTtcbiAgICB2YXIgc3RhdGVOb2RlID0gdGhpcy5nZXRTdGF0ZU5vZGUoc3ViU3RhdGVLZXlzWzBdKTtcblxuICAgIHZhciBuZXh0ID0gc3RhdGVOb2RlLl90cmFuc2l0aW9uKHN0YXRlVmFsdWVbc3ViU3RhdGVLZXlzWzBdXSwgc3RhdGUsIF9ldmVudCk7XG5cbiAgICBpZiAoIW5leHQgfHwgIW5leHQudHJhbnNpdGlvbnMubGVuZ3RoKSB7XG4gICAgICByZXR1cm4gdGhpcy5uZXh0KHN0YXRlLCBfZXZlbnQpO1xuICAgIH1cblxuICAgIHJldHVybiBuZXh0O1xuICB9O1xuXG4gIFN0YXRlTm9kZS5wcm90b3R5cGUudHJhbnNpdGlvblBhcmFsbGVsTm9kZSA9IGZ1bmN0aW9uIChzdGF0ZVZhbHVlLCBzdGF0ZSwgX2V2ZW50KSB7XG4gICAgdmFyIGVfMiwgX2E7XG5cbiAgICB2YXIgdHJhbnNpdGlvbk1hcCA9IHt9O1xuXG4gICAgdHJ5IHtcbiAgICAgIGZvciAodmFyIF9iID0gX192YWx1ZXMoa2V5cyhzdGF0ZVZhbHVlKSksIF9jID0gX2IubmV4dCgpOyAhX2MuZG9uZTsgX2MgPSBfYi5uZXh0KCkpIHtcbiAgICAgICAgdmFyIHN1YlN0YXRlS2V5ID0gX2MudmFsdWU7XG4gICAgICAgIHZhciBzdWJTdGF0ZVZhbHVlID0gc3RhdGVWYWx1ZVtzdWJTdGF0ZUtleV07XG5cbiAgICAgICAgaWYgKCFzdWJTdGF0ZVZhbHVlKSB7XG4gICAgICAgICAgY29udGludWU7XG4gICAgICAgIH1cblxuICAgICAgICB2YXIgc3ViU3RhdGVOb2RlID0gdGhpcy5nZXRTdGF0ZU5vZGUoc3ViU3RhdGVLZXkpO1xuXG4gICAgICAgIHZhciBuZXh0ID0gc3ViU3RhdGVOb2RlLl90cmFuc2l0aW9uKHN1YlN0YXRlVmFsdWUsIHN0YXRlLCBfZXZlbnQpO1xuXG4gICAgICAgIGlmIChuZXh0KSB7XG4gICAgICAgICAgdHJhbnNpdGlvbk1hcFtzdWJTdGF0ZUtleV0gPSBuZXh0O1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSBjYXRjaCAoZV8yXzEpIHtcbiAgICAgIGVfMiA9IHtcbiAgICAgICAgZXJyb3I6IGVfMl8xXG4gICAgICB9O1xuICAgIH0gZmluYWxseSB7XG4gICAgICB0cnkge1xuICAgICAgICBpZiAoX2MgJiYgIV9jLmRvbmUgJiYgKF9hID0gX2IucmV0dXJuKSkgX2EuY2FsbChfYik7XG4gICAgICB9IGZpbmFsbHkge1xuICAgICAgICBpZiAoZV8yKSB0aHJvdyBlXzIuZXJyb3I7XG4gICAgICB9XG4gICAgfVxuXG4gICAgdmFyIHN0YXRlVHJhbnNpdGlvbnMgPSBrZXlzKHRyYW5zaXRpb25NYXApLm1hcChmdW5jdGlvbiAoa2V5KSB7XG4gICAgICByZXR1cm4gdHJhbnNpdGlvbk1hcFtrZXldO1xuICAgIH0pO1xuICAgIHZhciBlbmFibGVkVHJhbnNpdGlvbnMgPSBmbGF0dGVuKHN0YXRlVHJhbnNpdGlvbnMubWFwKGZ1bmN0aW9uIChzdCkge1xuICAgICAgcmV0dXJuIHN0LnRyYW5zaXRpb25zO1xuICAgIH0pKTtcbiAgICB2YXIgd2lsbFRyYW5zaXRpb24gPSBzdGF0ZVRyYW5zaXRpb25zLnNvbWUoZnVuY3Rpb24gKHN0KSB7XG4gICAgICByZXR1cm4gc3QudHJhbnNpdGlvbnMubGVuZ3RoID4gMDtcbiAgICB9KTtcblxuICAgIGlmICghd2lsbFRyYW5zaXRpb24pIHtcbiAgICAgIHJldHVybiB0aGlzLm5leHQoc3RhdGUsIF9ldmVudCk7XG4gICAgfVxuXG4gICAgdmFyIGVudHJ5Tm9kZXMgPSBmbGF0dGVuKHN0YXRlVHJhbnNpdGlvbnMubWFwKGZ1bmN0aW9uICh0KSB7XG4gICAgICByZXR1cm4gdC5lbnRyeVNldDtcbiAgICB9KSk7XG4gICAgdmFyIGNvbmZpZ3VyYXRpb24gPSBmbGF0dGVuKGtleXModHJhbnNpdGlvbk1hcCkubWFwKGZ1bmN0aW9uIChrZXkpIHtcbiAgICAgIHJldHVybiB0cmFuc2l0aW9uTWFwW2tleV0uY29uZmlndXJhdGlvbjtcbiAgICB9KSk7XG4gICAgcmV0dXJuIHtcbiAgICAgIHRyYW5zaXRpb25zOiBlbmFibGVkVHJhbnNpdGlvbnMsXG4gICAgICBlbnRyeVNldDogZW50cnlOb2RlcyxcbiAgICAgIGV4aXRTZXQ6IGZsYXR0ZW4oc3RhdGVUcmFuc2l0aW9ucy5tYXAoZnVuY3Rpb24gKHQpIHtcbiAgICAgICAgcmV0dXJuIHQuZXhpdFNldDtcbiAgICAgIH0pKSxcbiAgICAgIGNvbmZpZ3VyYXRpb246IGNvbmZpZ3VyYXRpb24sXG4gICAgICBzb3VyY2U6IHN0YXRlLFxuICAgICAgYWN0aW9uczogZmxhdHRlbihrZXlzKHRyYW5zaXRpb25NYXApLm1hcChmdW5jdGlvbiAoa2V5KSB7XG4gICAgICAgIHJldHVybiB0cmFuc2l0aW9uTWFwW2tleV0uYWN0aW9ucztcbiAgICAgIH0pKVxuICAgIH07XG4gIH07XG5cbiAgU3RhdGVOb2RlLnByb3RvdHlwZS5fdHJhbnNpdGlvbiA9IGZ1bmN0aW9uIChzdGF0ZVZhbHVlLCBzdGF0ZSwgX2V2ZW50KSB7XG4gICAgLy8gbGVhZiBub2RlXG4gICAgaWYgKGlzU3RyaW5nKHN0YXRlVmFsdWUpKSB7XG4gICAgICByZXR1cm4gdGhpcy50cmFuc2l0aW9uTGVhZk5vZGUoc3RhdGVWYWx1ZSwgc3RhdGUsIF9ldmVudCk7XG4gICAgfSAvLyBoaWVyYXJjaGljYWwgbm9kZVxuXG5cbiAgICBpZiAoa2V5cyhzdGF0ZVZhbHVlKS5sZW5ndGggPT09IDEpIHtcbiAgICAgIHJldHVybiB0aGlzLnRyYW5zaXRpb25Db21wb3VuZE5vZGUoc3RhdGVWYWx1ZSwgc3RhdGUsIF9ldmVudCk7XG4gICAgfSAvLyBvcnRob2dvbmFsIG5vZGVcblxuXG4gICAgcmV0dXJuIHRoaXMudHJhbnNpdGlvblBhcmFsbGVsTm9kZShzdGF0ZVZhbHVlLCBzdGF0ZSwgX2V2ZW50KTtcbiAgfTtcblxuICBTdGF0ZU5vZGUucHJvdG90eXBlLm5leHQgPSBmdW5jdGlvbiAoc3RhdGUsIF9ldmVudCkge1xuICAgIHZhciBlXzMsIF9hO1xuXG4gICAgdmFyIF90aGlzID0gdGhpcztcblxuICAgIHZhciBldmVudE5hbWUgPSBfZXZlbnQubmFtZTtcbiAgICB2YXIgYWN0aW9ucyA9IFtdO1xuICAgIHZhciBuZXh0U3RhdGVOb2RlcyA9IFtdO1xuICAgIHZhciBzZWxlY3RlZFRyYW5zaXRpb247XG5cbiAgICB0cnkge1xuICAgICAgZm9yICh2YXIgX2IgPSBfX3ZhbHVlcyh0aGlzLmdldENhbmRpZGF0ZXMoZXZlbnROYW1lKSksIF9jID0gX2IubmV4dCgpOyAhX2MuZG9uZTsgX2MgPSBfYi5uZXh0KCkpIHtcbiAgICAgICAgdmFyIGNhbmRpZGF0ZSA9IF9jLnZhbHVlO1xuICAgICAgICB2YXIgY29uZCA9IGNhbmRpZGF0ZS5jb25kLFxuICAgICAgICAgICAgc3RhdGVJbiA9IGNhbmRpZGF0ZS5pbjtcbiAgICAgICAgdmFyIHJlc29sdmVkQ29udGV4dCA9IHN0YXRlLmNvbnRleHQ7XG4gICAgICAgIHZhciBpc0luU3RhdGUgPSBzdGF0ZUluID8gaXNTdHJpbmcoc3RhdGVJbikgJiYgaXNTdGF0ZUlkKHN0YXRlSW4pID8gLy8gQ2hlY2sgaWYgaW4gc3RhdGUgYnkgSURcbiAgICAgICAgc3RhdGUubWF0Y2hlcyh0b1N0YXRlVmFsdWUodGhpcy5nZXRTdGF0ZU5vZGVCeUlkKHN0YXRlSW4pLnBhdGgsIHRoaXMuZGVsaW1pdGVyKSkgOiAvLyBDaGVjayBpZiBpbiBzdGF0ZSBieSByZWxhdGl2ZSBncmFuZHBhcmVudFxuICAgICAgICBtYXRjaGVzU3RhdGUodG9TdGF0ZVZhbHVlKHN0YXRlSW4sIHRoaXMuZGVsaW1pdGVyKSwgcGF0aCh0aGlzLnBhdGguc2xpY2UoMCwgLTIpKShzdGF0ZS52YWx1ZSkpIDogdHJ1ZTtcbiAgICAgICAgdmFyIGd1YXJkUGFzc2VkID0gZmFsc2U7XG5cbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICBndWFyZFBhc3NlZCA9ICFjb25kIHx8IGV2YWx1YXRlR3VhcmQodGhpcy5tYWNoaW5lLCBjb25kLCByZXNvbHZlZENvbnRleHQsIF9ldmVudCwgc3RhdGUpO1xuICAgICAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJVbmFibGUgdG8gZXZhbHVhdGUgZ3VhcmQgJ1wiICsgKGNvbmQubmFtZSB8fCBjb25kLnR5cGUpICsgXCInIGluIHRyYW5zaXRpb24gZm9yIGV2ZW50ICdcIiArIGV2ZW50TmFtZSArIFwiJyBpbiBzdGF0ZSBub2RlICdcIiArIHRoaXMuaWQgKyBcIic6XFxuXCIgKyBlcnIubWVzc2FnZSk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoZ3VhcmRQYXNzZWQgJiYgaXNJblN0YXRlKSB7XG4gICAgICAgICAgaWYgKGNhbmRpZGF0ZS50YXJnZXQgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgbmV4dFN0YXRlTm9kZXMgPSBjYW5kaWRhdGUudGFyZ2V0O1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGFjdGlvbnMucHVzaC5hcHBseShhY3Rpb25zLCBfX3NwcmVhZChjYW5kaWRhdGUuYWN0aW9ucykpO1xuICAgICAgICAgIHNlbGVjdGVkVHJhbnNpdGlvbiA9IGNhbmRpZGF0ZTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0gY2F0Y2ggKGVfM18xKSB7XG4gICAgICBlXzMgPSB7XG4gICAgICAgIGVycm9yOiBlXzNfMVxuICAgICAgfTtcbiAgICB9IGZpbmFsbHkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgaWYgKF9jICYmICFfYy5kb25lICYmIChfYSA9IF9iLnJldHVybikpIF9hLmNhbGwoX2IpO1xuICAgICAgfSBmaW5hbGx5IHtcbiAgICAgICAgaWYgKGVfMykgdGhyb3cgZV8zLmVycm9yO1xuICAgICAgfVxuICAgIH1cblxuICAgIGlmICghc2VsZWN0ZWRUcmFuc2l0aW9uKSB7XG4gICAgICByZXR1cm4gdW5kZWZpbmVkO1xuICAgIH1cblxuICAgIGlmICghbmV4dFN0YXRlTm9kZXMubGVuZ3RoKSB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICB0cmFuc2l0aW9uczogW3NlbGVjdGVkVHJhbnNpdGlvbl0sXG4gICAgICAgIGVudHJ5U2V0OiBbXSxcbiAgICAgICAgZXhpdFNldDogW10sXG4gICAgICAgIGNvbmZpZ3VyYXRpb246IHN0YXRlLnZhbHVlID8gW3RoaXNdIDogW10sXG4gICAgICAgIHNvdXJjZTogc3RhdGUsXG4gICAgICAgIGFjdGlvbnM6IGFjdGlvbnNcbiAgICAgIH07XG4gICAgfVxuXG4gICAgdmFyIGFsbE5leHRTdGF0ZU5vZGVzID0gZmxhdHRlbihuZXh0U3RhdGVOb2Rlcy5tYXAoZnVuY3Rpb24gKHN0YXRlTm9kZSkge1xuICAgICAgcmV0dXJuIF90aGlzLmdldFJlbGF0aXZlU3RhdGVOb2RlcyhzdGF0ZU5vZGUsIHN0YXRlLmhpc3RvcnlWYWx1ZSk7XG4gICAgfSkpO1xuICAgIHZhciBpc0ludGVybmFsID0gISFzZWxlY3RlZFRyYW5zaXRpb24uaW50ZXJuYWw7XG4gICAgdmFyIHJlZW50cnlOb2RlcyA9IGlzSW50ZXJuYWwgPyBbXSA6IGZsYXR0ZW4oYWxsTmV4dFN0YXRlTm9kZXMubWFwKGZ1bmN0aW9uIChuKSB7XG4gICAgICByZXR1cm4gX3RoaXMubm9kZXNGcm9tQ2hpbGQobik7XG4gICAgfSkpO1xuICAgIHJldHVybiB7XG4gICAgICB0cmFuc2l0aW9uczogW3NlbGVjdGVkVHJhbnNpdGlvbl0sXG4gICAgICBlbnRyeVNldDogcmVlbnRyeU5vZGVzLFxuICAgICAgZXhpdFNldDogaXNJbnRlcm5hbCA/IFtdIDogW3RoaXNdLFxuICAgICAgY29uZmlndXJhdGlvbjogYWxsTmV4dFN0YXRlTm9kZXMsXG4gICAgICBzb3VyY2U6IHN0YXRlLFxuICAgICAgYWN0aW9uczogYWN0aW9uc1xuICAgIH07XG4gIH07XG5cbiAgU3RhdGVOb2RlLnByb3RvdHlwZS5ub2Rlc0Zyb21DaGlsZCA9IGZ1bmN0aW9uIChjaGlsZFN0YXRlTm9kZSkge1xuICAgIGlmIChjaGlsZFN0YXRlTm9kZS5lc2NhcGVzKHRoaXMpKSB7XG4gICAgICByZXR1cm4gW107XG4gICAgfVxuXG4gICAgdmFyIG5vZGVzID0gW107XG4gICAgdmFyIG1hcmtlciA9IGNoaWxkU3RhdGVOb2RlO1xuXG4gICAgd2hpbGUgKG1hcmtlciAmJiBtYXJrZXIgIT09IHRoaXMpIHtcbiAgICAgIG5vZGVzLnB1c2gobWFya2VyKTtcbiAgICAgIG1hcmtlciA9IG1hcmtlci5wYXJlbnQ7XG4gICAgfVxuXG4gICAgbm9kZXMucHVzaCh0aGlzKTsgLy8gaW5jbHVzaXZlXG5cbiAgICByZXR1cm4gbm9kZXM7XG4gIH07XG4gIC8qKlxyXG4gICAqIFdoZXRoZXIgdGhlIGdpdmVuIHN0YXRlIG5vZGUgXCJlc2NhcGVzXCIgdGhpcyBzdGF0ZSBub2RlLiBJZiB0aGUgYHN0YXRlTm9kZWAgaXMgZXF1YWwgdG8gb3IgdGhlIHBhcmVudCBvZlxyXG4gICAqIHRoaXMgc3RhdGUgbm9kZSwgaXQgZG9lcyBub3QgZXNjYXBlLlxyXG4gICAqL1xuXG5cbiAgU3RhdGVOb2RlLnByb3RvdHlwZS5lc2NhcGVzID0gZnVuY3Rpb24gKHN0YXRlTm9kZSkge1xuICAgIGlmICh0aGlzID09PSBzdGF0ZU5vZGUpIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG5cbiAgICB2YXIgcGFyZW50ID0gdGhpcy5wYXJlbnQ7XG5cbiAgICB3aGlsZSAocGFyZW50KSB7XG4gICAgICBpZiAocGFyZW50ID09PSBzdGF0ZU5vZGUpIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgfVxuXG4gICAgICBwYXJlbnQgPSBwYXJlbnQucGFyZW50O1xuICAgIH1cblxuICAgIHJldHVybiB0cnVlO1xuICB9O1xuXG4gIFN0YXRlTm9kZS5wcm90b3R5cGUuZ2V0QWN0aW9ucyA9IGZ1bmN0aW9uICh0cmFuc2l0aW9uLCBjdXJyZW50Q29udGV4dCwgX2V2ZW50LCBwcmV2U3RhdGUpIHtcbiAgICB2YXIgZV80LCBfYSwgZV81LCBfYjtcblxuICAgIHZhciBwcmV2Q29uZmlnID0gZ2V0Q29uZmlndXJhdGlvbihbXSwgcHJldlN0YXRlID8gdGhpcy5nZXRTdGF0ZU5vZGVzKHByZXZTdGF0ZS52YWx1ZSkgOiBbdGhpc10pO1xuICAgIHZhciByZXNvbHZlZENvbmZpZyA9IHRyYW5zaXRpb24uY29uZmlndXJhdGlvbi5sZW5ndGggPyBnZXRDb25maWd1cmF0aW9uKHByZXZDb25maWcsIHRyYW5zaXRpb24uY29uZmlndXJhdGlvbikgOiBwcmV2Q29uZmlnO1xuXG4gICAgdHJ5IHtcbiAgICAgIGZvciAodmFyIHJlc29sdmVkQ29uZmlnXzEgPSBfX3ZhbHVlcyhyZXNvbHZlZENvbmZpZyksIHJlc29sdmVkQ29uZmlnXzFfMSA9IHJlc29sdmVkQ29uZmlnXzEubmV4dCgpOyAhcmVzb2x2ZWRDb25maWdfMV8xLmRvbmU7IHJlc29sdmVkQ29uZmlnXzFfMSA9IHJlc29sdmVkQ29uZmlnXzEubmV4dCgpKSB7XG4gICAgICAgIHZhciBzbiA9IHJlc29sdmVkQ29uZmlnXzFfMS52YWx1ZTtcblxuICAgICAgICBpZiAoIWhhcyhwcmV2Q29uZmlnLCBzbikpIHtcbiAgICAgICAgICB0cmFuc2l0aW9uLmVudHJ5U2V0LnB1c2goc24pO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSBjYXRjaCAoZV80XzEpIHtcbiAgICAgIGVfNCA9IHtcbiAgICAgICAgZXJyb3I6IGVfNF8xXG4gICAgICB9O1xuICAgIH0gZmluYWxseSB7XG4gICAgICB0cnkge1xuICAgICAgICBpZiAocmVzb2x2ZWRDb25maWdfMV8xICYmICFyZXNvbHZlZENvbmZpZ18xXzEuZG9uZSAmJiAoX2EgPSByZXNvbHZlZENvbmZpZ18xLnJldHVybikpIF9hLmNhbGwocmVzb2x2ZWRDb25maWdfMSk7XG4gICAgICB9IGZpbmFsbHkge1xuICAgICAgICBpZiAoZV80KSB0aHJvdyBlXzQuZXJyb3I7XG4gICAgICB9XG4gICAgfVxuXG4gICAgdHJ5IHtcbiAgICAgIGZvciAodmFyIHByZXZDb25maWdfMSA9IF9fdmFsdWVzKHByZXZDb25maWcpLCBwcmV2Q29uZmlnXzFfMSA9IHByZXZDb25maWdfMS5uZXh0KCk7ICFwcmV2Q29uZmlnXzFfMS5kb25lOyBwcmV2Q29uZmlnXzFfMSA9IHByZXZDb25maWdfMS5uZXh0KCkpIHtcbiAgICAgICAgdmFyIHNuID0gcHJldkNvbmZpZ18xXzEudmFsdWU7XG5cbiAgICAgICAgaWYgKCFoYXMocmVzb2x2ZWRDb25maWcsIHNuKSB8fCBoYXModHJhbnNpdGlvbi5leGl0U2V0LCBzbi5wYXJlbnQpKSB7XG4gICAgICAgICAgdHJhbnNpdGlvbi5leGl0U2V0LnB1c2goc24pO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSBjYXRjaCAoZV81XzEpIHtcbiAgICAgIGVfNSA9IHtcbiAgICAgICAgZXJyb3I6IGVfNV8xXG4gICAgICB9O1xuICAgIH0gZmluYWxseSB7XG4gICAgICB0cnkge1xuICAgICAgICBpZiAocHJldkNvbmZpZ18xXzEgJiYgIXByZXZDb25maWdfMV8xLmRvbmUgJiYgKF9iID0gcHJldkNvbmZpZ18xLnJldHVybikpIF9iLmNhbGwocHJldkNvbmZpZ18xKTtcbiAgICAgIH0gZmluYWxseSB7XG4gICAgICAgIGlmIChlXzUpIHRocm93IGVfNS5lcnJvcjtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAoIXRyYW5zaXRpb24uc291cmNlKSB7XG4gICAgICB0cmFuc2l0aW9uLmV4aXRTZXQgPSBbXTsgLy8gRW5zdXJlIHRoYXQgcm9vdCBTdGF0ZU5vZGUgKG1hY2hpbmUpIGlzIGVudGVyZWRcblxuICAgICAgdHJhbnNpdGlvbi5lbnRyeVNldC5wdXNoKHRoaXMpO1xuICAgIH1cblxuICAgIHZhciBkb25lRXZlbnRzID0gZmxhdHRlbih0cmFuc2l0aW9uLmVudHJ5U2V0Lm1hcChmdW5jdGlvbiAoc24pIHtcbiAgICAgIHZhciBldmVudHMgPSBbXTtcblxuICAgICAgaWYgKHNuLnR5cGUgIT09ICdmaW5hbCcpIHtcbiAgICAgICAgcmV0dXJuIGV2ZW50cztcbiAgICAgIH1cblxuICAgICAgdmFyIHBhcmVudCA9IHNuLnBhcmVudDtcblxuICAgICAgaWYgKCFwYXJlbnQucGFyZW50KSB7XG4gICAgICAgIHJldHVybiBldmVudHM7XG4gICAgICB9XG5cbiAgICAgIGV2ZW50cy5wdXNoKGRvbmUoc24uaWQsIHNuLmRvbmVEYXRhKSwgLy8gVE9ETzogZGVwcmVjYXRlIC0gZmluYWwgc3RhdGVzIHNob3VsZCBub3QgZW1pdCBkb25lIGV2ZW50cyBmb3IgdGhlaXIgb3duIHN0YXRlLlxuICAgICAgZG9uZShwYXJlbnQuaWQsIHNuLmRvbmVEYXRhID8gbWFwQ29udGV4dChzbi5kb25lRGF0YSwgY3VycmVudENvbnRleHQsIF9ldmVudCkgOiB1bmRlZmluZWQpKTtcbiAgICAgIHZhciBncmFuZHBhcmVudCA9IHBhcmVudC5wYXJlbnQ7XG5cbiAgICAgIGlmIChncmFuZHBhcmVudC50eXBlID09PSAncGFyYWxsZWwnKSB7XG4gICAgICAgIGlmIChnZXRDaGlsZHJlbihncmFuZHBhcmVudCkuZXZlcnkoZnVuY3Rpb24gKHBhcmVudE5vZGUpIHtcbiAgICAgICAgICByZXR1cm4gaXNJbkZpbmFsU3RhdGUodHJhbnNpdGlvbi5jb25maWd1cmF0aW9uLCBwYXJlbnROb2RlKTtcbiAgICAgICAgfSkpIHtcbiAgICAgICAgICBldmVudHMucHVzaChkb25lKGdyYW5kcGFyZW50LmlkKSk7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGV2ZW50cztcbiAgICB9KSk7XG4gICAgdHJhbnNpdGlvbi5leGl0U2V0LnNvcnQoZnVuY3Rpb24gKGEsIGIpIHtcbiAgICAgIHJldHVybiBiLm9yZGVyIC0gYS5vcmRlcjtcbiAgICB9KTtcbiAgICB0cmFuc2l0aW9uLmVudHJ5U2V0LnNvcnQoZnVuY3Rpb24gKGEsIGIpIHtcbiAgICAgIHJldHVybiBhLm9yZGVyIC0gYi5vcmRlcjtcbiAgICB9KTtcbiAgICB2YXIgZW50cnlTdGF0ZXMgPSBuZXcgU2V0KHRyYW5zaXRpb24uZW50cnlTZXQpO1xuICAgIHZhciBleGl0U3RhdGVzID0gbmV3IFNldCh0cmFuc2l0aW9uLmV4aXRTZXQpO1xuXG4gICAgdmFyIF9jID0gX19yZWFkKFtmbGF0dGVuKEFycmF5LmZyb20oZW50cnlTdGF0ZXMpLm1hcChmdW5jdGlvbiAoc3RhdGVOb2RlKSB7XG4gICAgICByZXR1cm4gX19zcHJlYWQoc3RhdGVOb2RlLmFjdGl2aXRpZXMubWFwKGZ1bmN0aW9uIChhY3Rpdml0eSkge1xuICAgICAgICByZXR1cm4gc3RhcnQoYWN0aXZpdHkpO1xuICAgICAgfSksIHN0YXRlTm9kZS5vbkVudHJ5KTtcbiAgICB9KSkuY29uY2F0KGRvbmVFdmVudHMubWFwKHJhaXNlKSksIGZsYXR0ZW4oQXJyYXkuZnJvbShleGl0U3RhdGVzKS5tYXAoZnVuY3Rpb24gKHN0YXRlTm9kZSkge1xuICAgICAgcmV0dXJuIF9fc3ByZWFkKHN0YXRlTm9kZS5vbkV4aXQsIHN0YXRlTm9kZS5hY3Rpdml0aWVzLm1hcChmdW5jdGlvbiAoYWN0aXZpdHkpIHtcbiAgICAgICAgcmV0dXJuIHN0b3AoYWN0aXZpdHkpO1xuICAgICAgfSkpO1xuICAgIH0pKV0sIDIpLFxuICAgICAgICBlbnRyeUFjdGlvbnMgPSBfY1swXSxcbiAgICAgICAgZXhpdEFjdGlvbnMgPSBfY1sxXTtcblxuICAgIHZhciBhY3Rpb25zID0gdG9BY3Rpb25PYmplY3RzKGV4aXRBY3Rpb25zLmNvbmNhdCh0cmFuc2l0aW9uLmFjdGlvbnMpLmNvbmNhdChlbnRyeUFjdGlvbnMpLCB0aGlzLm1hY2hpbmUub3B0aW9ucy5hY3Rpb25zKTtcbiAgICByZXR1cm4gYWN0aW9ucztcbiAgfTtcbiAgLyoqXHJcbiAgICogRGV0ZXJtaW5lcyB0aGUgbmV4dCBzdGF0ZSBnaXZlbiB0aGUgY3VycmVudCBgc3RhdGVgIGFuZCBzZW50IGBldmVudGAuXHJcbiAgICpcclxuICAgKiBAcGFyYW0gc3RhdGUgVGhlIGN1cnJlbnQgU3RhdGUgaW5zdGFuY2Ugb3Igc3RhdGUgdmFsdWVcclxuICAgKiBAcGFyYW0gZXZlbnQgVGhlIGV2ZW50IHRoYXQgd2FzIHNlbnQgYXQgdGhlIGN1cnJlbnQgc3RhdGVcclxuICAgKiBAcGFyYW0gY29udGV4dCBUaGUgY3VycmVudCBjb250ZXh0IChleHRlbmRlZCBzdGF0ZSkgb2YgdGhlIGN1cnJlbnQgc3RhdGVcclxuICAgKi9cblxuXG4gIFN0YXRlTm9kZS5wcm90b3R5cGUudHJhbnNpdGlvbiA9IGZ1bmN0aW9uIChzdGF0ZSwgZXZlbnQsIGNvbnRleHQpIHtcbiAgICBpZiAoc3RhdGUgPT09IHZvaWQgMCkge1xuICAgICAgc3RhdGUgPSB0aGlzLmluaXRpYWxTdGF0ZTtcbiAgICB9XG5cbiAgICB2YXIgX2V2ZW50ID0gdG9TQ1hNTEV2ZW50KGV2ZW50KTtcblxuICAgIHZhciBjdXJyZW50U3RhdGU7XG5cbiAgICBpZiAoc3RhdGUgaW5zdGFuY2VvZiBTdGF0ZSkge1xuICAgICAgY3VycmVudFN0YXRlID0gY29udGV4dCA9PT0gdW5kZWZpbmVkID8gc3RhdGUgOiB0aGlzLnJlc29sdmVTdGF0ZShTdGF0ZS5mcm9tKHN0YXRlLCBjb250ZXh0KSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciByZXNvbHZlZFN0YXRlVmFsdWUgPSBpc1N0cmluZyhzdGF0ZSkgPyB0aGlzLnJlc29sdmUocGF0aFRvU3RhdGVWYWx1ZSh0aGlzLmdldFJlc29sdmVkUGF0aChzdGF0ZSkpKSA6IHRoaXMucmVzb2x2ZShzdGF0ZSk7XG4gICAgICB2YXIgcmVzb2x2ZWRDb250ZXh0ID0gY29udGV4dCA/IGNvbnRleHQgOiB0aGlzLm1hY2hpbmUuY29udGV4dDtcbiAgICAgIGN1cnJlbnRTdGF0ZSA9IHRoaXMucmVzb2x2ZVN0YXRlKFN0YXRlLmZyb20ocmVzb2x2ZWRTdGF0ZVZhbHVlLCByZXNvbHZlZENvbnRleHQpKTtcbiAgICB9XG5cbiAgICBpZiAoIUlTX1BST0RVQ1RJT04gJiYgX2V2ZW50Lm5hbWUgPT09IFdJTERDQVJEKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXCJBbiBldmVudCBjYW5ub3QgaGF2ZSB0aGUgd2lsZGNhcmQgdHlwZSAoJ1wiICsgV0lMRENBUkQgKyBcIicpXCIpO1xuICAgIH1cblxuICAgIGlmICh0aGlzLnN0cmljdCkge1xuICAgICAgaWYgKCF0aGlzLmV2ZW50cy5pbmNsdWRlcyhfZXZlbnQubmFtZSkgJiYgIWlzQnVpbHRJbkV2ZW50KF9ldmVudC5uYW1lKSkge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJNYWNoaW5lICdcIiArIHRoaXMuaWQgKyBcIicgZG9lcyBub3QgYWNjZXB0IGV2ZW50ICdcIiArIF9ldmVudC5uYW1lICsgXCInXCIpO1xuICAgICAgfVxuICAgIH1cblxuICAgIHZhciBzdGF0ZVRyYW5zaXRpb24gPSB0aGlzLl90cmFuc2l0aW9uKGN1cnJlbnRTdGF0ZS52YWx1ZSwgY3VycmVudFN0YXRlLCBfZXZlbnQpIHx8IHtcbiAgICAgIHRyYW5zaXRpb25zOiBbXSxcbiAgICAgIGNvbmZpZ3VyYXRpb246IFtdLFxuICAgICAgZW50cnlTZXQ6IFtdLFxuICAgICAgZXhpdFNldDogW10sXG4gICAgICBzb3VyY2U6IGN1cnJlbnRTdGF0ZSxcbiAgICAgIGFjdGlvbnM6IFtdXG4gICAgfTtcbiAgICB2YXIgcHJldkNvbmZpZyA9IGdldENvbmZpZ3VyYXRpb24oW10sIHRoaXMuZ2V0U3RhdGVOb2RlcyhjdXJyZW50U3RhdGUudmFsdWUpKTtcbiAgICB2YXIgcmVzb2x2ZWRDb25maWcgPSBzdGF0ZVRyYW5zaXRpb24uY29uZmlndXJhdGlvbi5sZW5ndGggPyBnZXRDb25maWd1cmF0aW9uKHByZXZDb25maWcsIHN0YXRlVHJhbnNpdGlvbi5jb25maWd1cmF0aW9uKSA6IHByZXZDb25maWc7XG4gICAgc3RhdGVUcmFuc2l0aW9uLmNvbmZpZ3VyYXRpb24gPSBfX3NwcmVhZChyZXNvbHZlZENvbmZpZyk7XG4gICAgcmV0dXJuIHRoaXMucmVzb2x2ZVRyYW5zaXRpb24oc3RhdGVUcmFuc2l0aW9uLCBjdXJyZW50U3RhdGUsIF9ldmVudCk7XG4gIH07XG5cbiAgU3RhdGVOb2RlLnByb3RvdHlwZS5yZXNvbHZlUmFpc2VkVHJhbnNpdGlvbiA9IGZ1bmN0aW9uIChzdGF0ZSwgX2V2ZW50LCBvcmlnaW5hbEV2ZW50KSB7XG4gICAgdmFyIF9hO1xuXG4gICAgdmFyIGN1cnJlbnRBY3Rpb25zID0gc3RhdGUuYWN0aW9ucztcbiAgICBzdGF0ZSA9IHRoaXMudHJhbnNpdGlvbihzdGF0ZSwgX2V2ZW50KTsgLy8gU2F2ZSBvcmlnaW5hbCBldmVudCB0byBzdGF0ZVxuICAgIC8vIFRPRE86IHRoaXMgc2hvdWxkIGJlIHRoZSByYWlzZWQgZXZlbnQhIERlbGV0ZSBpbiBWNSAoYnJlYWtpbmcpXG5cbiAgICBzdGF0ZS5fZXZlbnQgPSBvcmlnaW5hbEV2ZW50O1xuICAgIHN0YXRlLmV2ZW50ID0gb3JpZ2luYWxFdmVudC5kYXRhO1xuXG4gICAgKF9hID0gc3RhdGUuYWN0aW9ucykudW5zaGlmdC5hcHBseShfYSwgX19zcHJlYWQoY3VycmVudEFjdGlvbnMpKTtcblxuICAgIHJldHVybiBzdGF0ZTtcbiAgfTtcblxuICBTdGF0ZU5vZGUucHJvdG90eXBlLnJlc29sdmVUcmFuc2l0aW9uID0gZnVuY3Rpb24gKHN0YXRlVHJhbnNpdGlvbiwgY3VycmVudFN0YXRlLCBfZXZlbnQsIGNvbnRleHQpIHtcbiAgICB2YXIgZV82LCBfYTtcblxuICAgIHZhciBfdGhpcyA9IHRoaXM7XG5cbiAgICBpZiAoX2V2ZW50ID09PSB2b2lkIDApIHtcbiAgICAgIF9ldmVudCA9IGluaXRFdmVudDtcbiAgICB9XG5cbiAgICBpZiAoY29udGV4dCA9PT0gdm9pZCAwKSB7XG4gICAgICBjb250ZXh0ID0gdGhpcy5tYWNoaW5lLmNvbnRleHQ7XG4gICAgfVxuXG4gICAgdmFyIGNvbmZpZ3VyYXRpb24gPSBzdGF0ZVRyYW5zaXRpb24uY29uZmlndXJhdGlvbjsgLy8gVHJhbnNpdGlvbiB3aWxsIFwiYXBwbHlcIiBpZjpcbiAgICAvLyAtIHRoaXMgaXMgdGhlIGluaXRpYWwgc3RhdGUgKHRoZXJlIGlzIG5vIGN1cnJlbnQgc3RhdGUpXG4gICAgLy8gLSBPUiB0aGVyZSBhcmUgdHJhbnNpdGlvbnNcblxuICAgIHZhciB3aWxsVHJhbnNpdGlvbiA9ICFjdXJyZW50U3RhdGUgfHwgc3RhdGVUcmFuc2l0aW9uLnRyYW5zaXRpb25zLmxlbmd0aCA+IDA7XG4gICAgdmFyIHJlc29sdmVkU3RhdGVWYWx1ZSA9IHdpbGxUcmFuc2l0aW9uID8gZ2V0VmFsdWUodGhpcy5tYWNoaW5lLCBjb25maWd1cmF0aW9uKSA6IHVuZGVmaW5lZDtcbiAgICB2YXIgaGlzdG9yeVZhbHVlID0gY3VycmVudFN0YXRlID8gY3VycmVudFN0YXRlLmhpc3RvcnlWYWx1ZSA/IGN1cnJlbnRTdGF0ZS5oaXN0b3J5VmFsdWUgOiBzdGF0ZVRyYW5zaXRpb24uc291cmNlID8gdGhpcy5tYWNoaW5lLmhpc3RvcnlWYWx1ZShjdXJyZW50U3RhdGUudmFsdWUpIDogdW5kZWZpbmVkIDogdW5kZWZpbmVkO1xuICAgIHZhciBjdXJyZW50Q29udGV4dCA9IGN1cnJlbnRTdGF0ZSA/IGN1cnJlbnRTdGF0ZS5jb250ZXh0IDogY29udGV4dDtcbiAgICB2YXIgYWN0aW9ucyA9IHRoaXMuZ2V0QWN0aW9ucyhzdGF0ZVRyYW5zaXRpb24sIGN1cnJlbnRDb250ZXh0LCBfZXZlbnQsIGN1cnJlbnRTdGF0ZSk7XG4gICAgdmFyIGFjdGl2aXRpZXMgPSBjdXJyZW50U3RhdGUgPyBfX2Fzc2lnbih7fSwgY3VycmVudFN0YXRlLmFjdGl2aXRpZXMpIDoge307XG5cbiAgICB0cnkge1xuICAgICAgZm9yICh2YXIgYWN0aW9uc18xID0gX192YWx1ZXMoYWN0aW9ucyksIGFjdGlvbnNfMV8xID0gYWN0aW9uc18xLm5leHQoKTsgIWFjdGlvbnNfMV8xLmRvbmU7IGFjdGlvbnNfMV8xID0gYWN0aW9uc18xLm5leHQoKSkge1xuICAgICAgICB2YXIgYWN0aW9uID0gYWN0aW9uc18xXzEudmFsdWU7XG5cbiAgICAgICAgaWYgKGFjdGlvbi50eXBlID09PSBzdGFydCQxKSB7XG4gICAgICAgICAgYWN0aXZpdGllc1thY3Rpb24uYWN0aXZpdHkuaWQgfHwgYWN0aW9uLmFjdGl2aXR5LnR5cGVdID0gYWN0aW9uO1xuICAgICAgICB9IGVsc2UgaWYgKGFjdGlvbi50eXBlID09PSBzdG9wJDEpIHtcbiAgICAgICAgICBhY3Rpdml0aWVzW2FjdGlvbi5hY3Rpdml0eS5pZCB8fCBhY3Rpb24uYWN0aXZpdHkudHlwZV0gPSBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0gY2F0Y2ggKGVfNl8xKSB7XG4gICAgICBlXzYgPSB7XG4gICAgICAgIGVycm9yOiBlXzZfMVxuICAgICAgfTtcbiAgICB9IGZpbmFsbHkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgaWYgKGFjdGlvbnNfMV8xICYmICFhY3Rpb25zXzFfMS5kb25lICYmIChfYSA9IGFjdGlvbnNfMS5yZXR1cm4pKSBfYS5jYWxsKGFjdGlvbnNfMSk7XG4gICAgICB9IGZpbmFsbHkge1xuICAgICAgICBpZiAoZV82KSB0aHJvdyBlXzYuZXJyb3I7XG4gICAgICB9XG4gICAgfVxuXG4gICAgdmFyIF9iID0gX19yZWFkKHJlc29sdmVBY3Rpb25zKHRoaXMsIGN1cnJlbnRTdGF0ZSwgY3VycmVudENvbnRleHQsIF9ldmVudCwgYWN0aW9ucyksIDIpLFxuICAgICAgICByZXNvbHZlZEFjdGlvbnMgPSBfYlswXSxcbiAgICAgICAgdXBkYXRlZENvbnRleHQgPSBfYlsxXTtcblxuICAgIHZhciBfYyA9IF9fcmVhZChwYXJ0aXRpb24ocmVzb2x2ZWRBY3Rpb25zLCBmdW5jdGlvbiAoYWN0aW9uKSB7XG4gICAgICByZXR1cm4gYWN0aW9uLnR5cGUgPT09IHJhaXNlJDEgfHwgYWN0aW9uLnR5cGUgPT09IHNlbmQkMSAmJiBhY3Rpb24udG8gPT09IFNwZWNpYWxUYXJnZXRzLkludGVybmFsO1xuICAgIH0pLCAyKSxcbiAgICAgICAgcmFpc2VkRXZlbnRzID0gX2NbMF0sXG4gICAgICAgIG5vblJhaXNlZEFjdGlvbnMgPSBfY1sxXTtcblxuICAgIHZhciBpbnZva2VBY3Rpb25zID0gcmVzb2x2ZWRBY3Rpb25zLmZpbHRlcihmdW5jdGlvbiAoYWN0aW9uKSB7XG4gICAgICByZXR1cm4gYWN0aW9uLnR5cGUgPT09IHN0YXJ0JDEgJiYgYWN0aW9uLmFjdGl2aXR5LnR5cGUgPT09IGludm9rZTtcbiAgICB9KTtcbiAgICB2YXIgY2hpbGRyZW4gPSBpbnZva2VBY3Rpb25zLnJlZHVjZShmdW5jdGlvbiAoYWNjLCBhY3Rpb24pIHtcbiAgICAgIGFjY1thY3Rpb24uYWN0aXZpdHkuaWRdID0gY3JlYXRlSW52b2NhYmxlQWN0b3IoYWN0aW9uLmFjdGl2aXR5LCBfdGhpcy5tYWNoaW5lLCB1cGRhdGVkQ29udGV4dCwgX2V2ZW50KTtcbiAgICAgIHJldHVybiBhY2M7XG4gICAgfSwgY3VycmVudFN0YXRlID8gX19hc3NpZ24oe30sIGN1cnJlbnRTdGF0ZS5jaGlsZHJlbikgOiB7fSk7XG4gICAgdmFyIHJlc29sdmVkQ29uZmlndXJhdGlvbiA9IHJlc29sdmVkU3RhdGVWYWx1ZSA/IHN0YXRlVHJhbnNpdGlvbi5jb25maWd1cmF0aW9uIDogY3VycmVudFN0YXRlID8gY3VycmVudFN0YXRlLmNvbmZpZ3VyYXRpb24gOiBbXTtcbiAgICB2YXIgbWV0YSA9IHJlc29sdmVkQ29uZmlndXJhdGlvbi5yZWR1Y2UoZnVuY3Rpb24gKGFjYywgc3RhdGVOb2RlKSB7XG4gICAgICBpZiAoc3RhdGVOb2RlLm1ldGEgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICBhY2Nbc3RhdGVOb2RlLmlkXSA9IHN0YXRlTm9kZS5tZXRhO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gYWNjO1xuICAgIH0sIHt9KTtcbiAgICB2YXIgaXNEb25lID0gaXNJbkZpbmFsU3RhdGUocmVzb2x2ZWRDb25maWd1cmF0aW9uLCB0aGlzKTtcbiAgICB2YXIgbmV4dFN0YXRlID0gbmV3IFN0YXRlKHtcbiAgICAgIHZhbHVlOiByZXNvbHZlZFN0YXRlVmFsdWUgfHwgY3VycmVudFN0YXRlLnZhbHVlLFxuICAgICAgY29udGV4dDogdXBkYXRlZENvbnRleHQsXG4gICAgICBfZXZlbnQ6IF9ldmVudCxcbiAgICAgIC8vIFBlcnNpc3QgX3Nlc3Npb25pZCBiZXR3ZWVuIHN0YXRlc1xuICAgICAgX3Nlc3Npb25pZDogY3VycmVudFN0YXRlID8gY3VycmVudFN0YXRlLl9zZXNzaW9uaWQgOiBudWxsLFxuICAgICAgaGlzdG9yeVZhbHVlOiByZXNvbHZlZFN0YXRlVmFsdWUgPyBoaXN0b3J5VmFsdWUgPyB1cGRhdGVIaXN0b3J5VmFsdWUoaGlzdG9yeVZhbHVlLCByZXNvbHZlZFN0YXRlVmFsdWUpIDogdW5kZWZpbmVkIDogY3VycmVudFN0YXRlID8gY3VycmVudFN0YXRlLmhpc3RvcnlWYWx1ZSA6IHVuZGVmaW5lZCxcbiAgICAgIGhpc3Rvcnk6ICFyZXNvbHZlZFN0YXRlVmFsdWUgfHwgc3RhdGVUcmFuc2l0aW9uLnNvdXJjZSA/IGN1cnJlbnRTdGF0ZSA6IHVuZGVmaW5lZCxcbiAgICAgIGFjdGlvbnM6IHJlc29sdmVkU3RhdGVWYWx1ZSA/IG5vblJhaXNlZEFjdGlvbnMgOiBbXSxcbiAgICAgIGFjdGl2aXRpZXM6IHJlc29sdmVkU3RhdGVWYWx1ZSA/IGFjdGl2aXRpZXMgOiBjdXJyZW50U3RhdGUgPyBjdXJyZW50U3RhdGUuYWN0aXZpdGllcyA6IHt9LFxuICAgICAgbWV0YTogcmVzb2x2ZWRTdGF0ZVZhbHVlID8gbWV0YSA6IGN1cnJlbnRTdGF0ZSA/IGN1cnJlbnRTdGF0ZS5tZXRhIDogdW5kZWZpbmVkLFxuICAgICAgZXZlbnRzOiBbXSxcbiAgICAgIGNvbmZpZ3VyYXRpb246IHJlc29sdmVkQ29uZmlndXJhdGlvbixcbiAgICAgIHRyYW5zaXRpb25zOiBzdGF0ZVRyYW5zaXRpb24udHJhbnNpdGlvbnMsXG4gICAgICBjaGlsZHJlbjogY2hpbGRyZW4sXG4gICAgICBkb25lOiBpc0RvbmVcbiAgICB9KTtcbiAgICB2YXIgZGlkVXBkYXRlQ29udGV4dCA9IGN1cnJlbnRDb250ZXh0ICE9PSB1cGRhdGVkQ29udGV4dDtcbiAgICBuZXh0U3RhdGUuY2hhbmdlZCA9IF9ldmVudC5uYW1lID09PSB1cGRhdGUgfHwgZGlkVXBkYXRlQ29udGV4dDsgLy8gRGlzcG9zZSBvZiBwZW51bHRpbWF0ZSBoaXN0b3JpZXMgdG8gcHJldmVudCBtZW1vcnkgbGVha3NcblxuICAgIHZhciBoaXN0b3J5ID0gbmV4dFN0YXRlLmhpc3Rvcnk7XG5cbiAgICBpZiAoaGlzdG9yeSkge1xuICAgICAgZGVsZXRlIGhpc3RvcnkuaGlzdG9yeTtcbiAgICB9XG5cbiAgICBpZiAoIXJlc29sdmVkU3RhdGVWYWx1ZSkge1xuICAgICAgcmV0dXJuIG5leHRTdGF0ZTtcbiAgICB9XG5cbiAgICB2YXIgbWF5YmVOZXh0U3RhdGUgPSBuZXh0U3RhdGU7XG5cbiAgICBpZiAoIWlzRG9uZSkge1xuICAgICAgdmFyIGlzVHJhbnNpZW50ID0gdGhpcy5fdHJhbnNpZW50IHx8IGNvbmZpZ3VyYXRpb24uc29tZShmdW5jdGlvbiAoc3RhdGVOb2RlKSB7XG4gICAgICAgIHJldHVybiBzdGF0ZU5vZGUuX3RyYW5zaWVudDtcbiAgICAgIH0pO1xuXG4gICAgICBpZiAoaXNUcmFuc2llbnQpIHtcbiAgICAgICAgbWF5YmVOZXh0U3RhdGUgPSB0aGlzLnJlc29sdmVSYWlzZWRUcmFuc2l0aW9uKG1heWJlTmV4dFN0YXRlLCB7XG4gICAgICAgICAgdHlwZTogbnVsbEV2ZW50XG4gICAgICAgIH0sIF9ldmVudCk7XG4gICAgICB9XG5cbiAgICAgIHdoaWxlIChyYWlzZWRFdmVudHMubGVuZ3RoKSB7XG4gICAgICAgIHZhciByYWlzZWRFdmVudCA9IHJhaXNlZEV2ZW50cy5zaGlmdCgpO1xuICAgICAgICBtYXliZU5leHRTdGF0ZSA9IHRoaXMucmVzb2x2ZVJhaXNlZFRyYW5zaXRpb24obWF5YmVOZXh0U3RhdGUsIHJhaXNlZEV2ZW50Ll9ldmVudCwgX2V2ZW50KTtcbiAgICAgIH1cbiAgICB9IC8vIERldGVjdCBpZiBzdGF0ZSBjaGFuZ2VkXG5cblxuICAgIHZhciBjaGFuZ2VkID0gbWF5YmVOZXh0U3RhdGUuY2hhbmdlZCB8fCAoaGlzdG9yeSA/ICEhbWF5YmVOZXh0U3RhdGUuYWN0aW9ucy5sZW5ndGggfHwgZGlkVXBkYXRlQ29udGV4dCB8fCB0eXBlb2YgaGlzdG9yeS52YWx1ZSAhPT0gdHlwZW9mIG1heWJlTmV4dFN0YXRlLnZhbHVlIHx8ICFzdGF0ZVZhbHVlc0VxdWFsKG1heWJlTmV4dFN0YXRlLnZhbHVlLCBoaXN0b3J5LnZhbHVlKSA6IHVuZGVmaW5lZCk7XG4gICAgbWF5YmVOZXh0U3RhdGUuY2hhbmdlZCA9IGNoYW5nZWQ7IC8vIFByZXNlcnZlIG9yaWdpbmFsIGhpc3RvcnkgYWZ0ZXIgcmFpc2VkIGV2ZW50c1xuXG4gICAgbWF5YmVOZXh0U3RhdGUuaGlzdG9yeVZhbHVlID0gbmV4dFN0YXRlLmhpc3RvcnlWYWx1ZTtcbiAgICBtYXliZU5leHRTdGF0ZS5oaXN0b3J5ID0gaGlzdG9yeTtcbiAgICByZXR1cm4gbWF5YmVOZXh0U3RhdGU7XG4gIH07XG4gIC8qKlxyXG4gICAqIFJldHVybnMgdGhlIGNoaWxkIHN0YXRlIG5vZGUgZnJvbSBpdHMgcmVsYXRpdmUgYHN0YXRlS2V5YCwgb3IgdGhyb3dzLlxyXG4gICAqL1xuXG5cbiAgU3RhdGVOb2RlLnByb3RvdHlwZS5nZXRTdGF0ZU5vZGUgPSBmdW5jdGlvbiAoc3RhdGVLZXkpIHtcbiAgICBpZiAoaXNTdGF0ZUlkKHN0YXRlS2V5KSkge1xuICAgICAgcmV0dXJuIHRoaXMubWFjaGluZS5nZXRTdGF0ZU5vZGVCeUlkKHN0YXRlS2V5KTtcbiAgICB9XG5cbiAgICBpZiAoIXRoaXMuc3RhdGVzKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXCJVbmFibGUgdG8gcmV0cmlldmUgY2hpbGQgc3RhdGUgJ1wiICsgc3RhdGVLZXkgKyBcIicgZnJvbSAnXCIgKyB0aGlzLmlkICsgXCInOyBubyBjaGlsZCBzdGF0ZXMgZXhpc3QuXCIpO1xuICAgIH1cblxuICAgIHZhciByZXN1bHQgPSB0aGlzLnN0YXRlc1tzdGF0ZUtleV07XG5cbiAgICBpZiAoIXJlc3VsdCkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKFwiQ2hpbGQgc3RhdGUgJ1wiICsgc3RhdGVLZXkgKyBcIicgZG9lcyBub3QgZXhpc3Qgb24gJ1wiICsgdGhpcy5pZCArIFwiJ1wiKTtcbiAgICB9XG5cbiAgICByZXR1cm4gcmVzdWx0O1xuICB9O1xuICAvKipcclxuICAgKiBSZXR1cm5zIHRoZSBzdGF0ZSBub2RlIHdpdGggdGhlIGdpdmVuIGBzdGF0ZUlkYCwgb3IgdGhyb3dzLlxyXG4gICAqXHJcbiAgICogQHBhcmFtIHN0YXRlSWQgVGhlIHN0YXRlIElELiBUaGUgcHJlZml4IFwiI1wiIGlzIHJlbW92ZWQuXHJcbiAgICovXG5cblxuICBTdGF0ZU5vZGUucHJvdG90eXBlLmdldFN0YXRlTm9kZUJ5SWQgPSBmdW5jdGlvbiAoc3RhdGVJZCkge1xuICAgIHZhciByZXNvbHZlZFN0YXRlSWQgPSBpc1N0YXRlSWQoc3RhdGVJZCkgPyBzdGF0ZUlkLnNsaWNlKFNUQVRFX0lERU5USUZJRVIubGVuZ3RoKSA6IHN0YXRlSWQ7XG5cbiAgICBpZiAocmVzb2x2ZWRTdGF0ZUlkID09PSB0aGlzLmlkKSB7XG4gICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cbiAgICB2YXIgc3RhdGVOb2RlID0gdGhpcy5tYWNoaW5lLmlkTWFwW3Jlc29sdmVkU3RhdGVJZF07XG5cbiAgICBpZiAoIXN0YXRlTm9kZSkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKFwiQ2hpbGQgc3RhdGUgbm9kZSAnI1wiICsgcmVzb2x2ZWRTdGF0ZUlkICsgXCInIGRvZXMgbm90IGV4aXN0IG9uIG1hY2hpbmUgJ1wiICsgdGhpcy5pZCArIFwiJ1wiKTtcbiAgICB9XG5cbiAgICByZXR1cm4gc3RhdGVOb2RlO1xuICB9O1xuICAvKipcclxuICAgKiBSZXR1cm5zIHRoZSByZWxhdGl2ZSBzdGF0ZSBub2RlIGZyb20gdGhlIGdpdmVuIGBzdGF0ZVBhdGhgLCBvciB0aHJvd3MuXHJcbiAgICpcclxuICAgKiBAcGFyYW0gc3RhdGVQYXRoIFRoZSBzdHJpbmcgb3Igc3RyaW5nIGFycmF5IHJlbGF0aXZlIHBhdGggdG8gdGhlIHN0YXRlIG5vZGUuXHJcbiAgICovXG5cblxuICBTdGF0ZU5vZGUucHJvdG90eXBlLmdldFN0YXRlTm9kZUJ5UGF0aCA9IGZ1bmN0aW9uIChzdGF0ZVBhdGgpIHtcbiAgICBpZiAodHlwZW9mIHN0YXRlUGF0aCA9PT0gJ3N0cmluZycgJiYgaXNTdGF0ZUlkKHN0YXRlUGF0aCkpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIHJldHVybiB0aGlzLmdldFN0YXRlTm9kZUJ5SWQoc3RhdGVQYXRoLnNsaWNlKDEpKTtcbiAgICAgIH0gY2F0Y2ggKGUpIHsvLyB0cnkgaW5kaXZpZHVhbCBwYXRoc1xuICAgICAgICAvLyB0aHJvdyBlO1xuICAgICAgfVxuICAgIH1cblxuICAgIHZhciBhcnJheVN0YXRlUGF0aCA9IHRvU3RhdGVQYXRoKHN0YXRlUGF0aCwgdGhpcy5kZWxpbWl0ZXIpLnNsaWNlKCk7XG4gICAgdmFyIGN1cnJlbnRTdGF0ZU5vZGUgPSB0aGlzO1xuXG4gICAgd2hpbGUgKGFycmF5U3RhdGVQYXRoLmxlbmd0aCkge1xuICAgICAgdmFyIGtleSA9IGFycmF5U3RhdGVQYXRoLnNoaWZ0KCk7XG5cbiAgICAgIGlmICgha2V5Lmxlbmd0aCkge1xuICAgICAgICBicmVhaztcbiAgICAgIH1cblxuICAgICAgY3VycmVudFN0YXRlTm9kZSA9IGN1cnJlbnRTdGF0ZU5vZGUuZ2V0U3RhdGVOb2RlKGtleSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGN1cnJlbnRTdGF0ZU5vZGU7XG4gIH07XG4gIC8qKlxyXG4gICAqIFJlc29sdmVzIGEgcGFydGlhbCBzdGF0ZSB2YWx1ZSB3aXRoIGl0cyBmdWxsIHJlcHJlc2VudGF0aW9uIGluIHRoaXMgbWFjaGluZS5cclxuICAgKlxyXG4gICAqIEBwYXJhbSBzdGF0ZVZhbHVlIFRoZSBwYXJ0aWFsIHN0YXRlIHZhbHVlIHRvIHJlc29sdmUuXHJcbiAgICovXG5cblxuICBTdGF0ZU5vZGUucHJvdG90eXBlLnJlc29sdmUgPSBmdW5jdGlvbiAoc3RhdGVWYWx1ZSkge1xuICAgIHZhciBfYTtcblxuICAgIHZhciBfdGhpcyA9IHRoaXM7XG5cbiAgICBpZiAoIXN0YXRlVmFsdWUpIHtcbiAgICAgIHJldHVybiB0aGlzLmluaXRpYWxTdGF0ZVZhbHVlIHx8IEVNUFRZX09CSkVDVDsgLy8gVE9ETzogdHlwZS1zcGVjaWZpYyBwcm9wZXJ0aWVzXG4gICAgfVxuXG4gICAgc3dpdGNoICh0aGlzLnR5cGUpIHtcbiAgICAgIGNhc2UgJ3BhcmFsbGVsJzpcbiAgICAgICAgcmV0dXJuIG1hcFZhbHVlcyh0aGlzLmluaXRpYWxTdGF0ZVZhbHVlLCBmdW5jdGlvbiAoc3ViU3RhdGVWYWx1ZSwgc3ViU3RhdGVLZXkpIHtcbiAgICAgICAgICByZXR1cm4gc3ViU3RhdGVWYWx1ZSA/IF90aGlzLmdldFN0YXRlTm9kZShzdWJTdGF0ZUtleSkucmVzb2x2ZShzdGF0ZVZhbHVlW3N1YlN0YXRlS2V5XSB8fCBzdWJTdGF0ZVZhbHVlKSA6IEVNUFRZX09CSkVDVDtcbiAgICAgICAgfSk7XG5cbiAgICAgIGNhc2UgJ2NvbXBvdW5kJzpcbiAgICAgICAgaWYgKGlzU3RyaW5nKHN0YXRlVmFsdWUpKSB7XG4gICAgICAgICAgdmFyIHN1YlN0YXRlTm9kZSA9IHRoaXMuZ2V0U3RhdGVOb2RlKHN0YXRlVmFsdWUpO1xuXG4gICAgICAgICAgaWYgKHN1YlN0YXRlTm9kZS50eXBlID09PSAncGFyYWxsZWwnIHx8IHN1YlN0YXRlTm9kZS50eXBlID09PSAnY29tcG91bmQnKSB7XG4gICAgICAgICAgICByZXR1cm4gX2EgPSB7fSwgX2Fbc3RhdGVWYWx1ZV0gPSBzdWJTdGF0ZU5vZGUuaW5pdGlhbFN0YXRlVmFsdWUsIF9hO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIHJldHVybiBzdGF0ZVZhbHVlO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKCFrZXlzKHN0YXRlVmFsdWUpLmxlbmd0aCkge1xuICAgICAgICAgIHJldHVybiB0aGlzLmluaXRpYWxTdGF0ZVZhbHVlIHx8IHt9O1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIG1hcFZhbHVlcyhzdGF0ZVZhbHVlLCBmdW5jdGlvbiAoc3ViU3RhdGVWYWx1ZSwgc3ViU3RhdGVLZXkpIHtcbiAgICAgICAgICByZXR1cm4gc3ViU3RhdGVWYWx1ZSA/IF90aGlzLmdldFN0YXRlTm9kZShzdWJTdGF0ZUtleSkucmVzb2x2ZShzdWJTdGF0ZVZhbHVlKSA6IEVNUFRZX09CSkVDVDtcbiAgICAgICAgfSk7XG5cbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHJldHVybiBzdGF0ZVZhbHVlIHx8IEVNUFRZX09CSkVDVDtcbiAgICB9XG4gIH07XG5cbiAgU3RhdGVOb2RlLnByb3RvdHlwZS5nZXRSZXNvbHZlZFBhdGggPSBmdW5jdGlvbiAoc3RhdGVJZGVudGlmaWVyKSB7XG4gICAgaWYgKGlzU3RhdGVJZChzdGF0ZUlkZW50aWZpZXIpKSB7XG4gICAgICB2YXIgc3RhdGVOb2RlID0gdGhpcy5tYWNoaW5lLmlkTWFwW3N0YXRlSWRlbnRpZmllci5zbGljZShTVEFURV9JREVOVElGSUVSLmxlbmd0aCldO1xuXG4gICAgICBpZiAoIXN0YXRlTm9kZSkge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJVbmFibGUgdG8gZmluZCBzdGF0ZSBub2RlICdcIiArIHN0YXRlSWRlbnRpZmllciArIFwiJ1wiKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHN0YXRlTm9kZS5wYXRoO1xuICAgIH1cblxuICAgIHJldHVybiB0b1N0YXRlUGF0aChzdGF0ZUlkZW50aWZpZXIsIHRoaXMuZGVsaW1pdGVyKTtcbiAgfTtcblxuICBPYmplY3QuZGVmaW5lUHJvcGVydHkoU3RhdGVOb2RlLnByb3RvdHlwZSwgXCJpbml0aWFsU3RhdGVWYWx1ZVwiLCB7XG4gICAgZ2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgICB2YXIgX2E7XG5cbiAgICAgIGlmICh0aGlzLl9fY2FjaGUuaW5pdGlhbFN0YXRlVmFsdWUpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX19jYWNoZS5pbml0aWFsU3RhdGVWYWx1ZTtcbiAgICAgIH1cblxuICAgICAgdmFyIGluaXRpYWxTdGF0ZVZhbHVlO1xuXG4gICAgICBpZiAodGhpcy50eXBlID09PSAncGFyYWxsZWwnKSB7XG4gICAgICAgIGluaXRpYWxTdGF0ZVZhbHVlID0gbWFwRmlsdGVyVmFsdWVzKHRoaXMuc3RhdGVzLCBmdW5jdGlvbiAoc3RhdGUpIHtcbiAgICAgICAgICByZXR1cm4gc3RhdGUuaW5pdGlhbFN0YXRlVmFsdWUgfHwgRU1QVFlfT0JKRUNUO1xuICAgICAgICB9LCBmdW5jdGlvbiAoc3RhdGVOb2RlKSB7XG4gICAgICAgICAgcmV0dXJuICEoc3RhdGVOb2RlLnR5cGUgPT09ICdoaXN0b3J5Jyk7XG4gICAgICAgIH0pO1xuICAgICAgfSBlbHNlIGlmICh0aGlzLmluaXRpYWwgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICBpZiAoIXRoaXMuc3RhdGVzW3RoaXMuaW5pdGlhbF0pIHtcbiAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJJbml0aWFsIHN0YXRlICdcIiArIHRoaXMuaW5pdGlhbCArIFwiJyBub3QgZm91bmQgb24gJ1wiICsgdGhpcy5rZXkgKyBcIidcIik7XG4gICAgICAgIH1cblxuICAgICAgICBpbml0aWFsU3RhdGVWYWx1ZSA9IGlzTGVhZk5vZGUodGhpcy5zdGF0ZXNbdGhpcy5pbml0aWFsXSkgPyB0aGlzLmluaXRpYWwgOiAoX2EgPSB7fSwgX2FbdGhpcy5pbml0aWFsXSA9IHRoaXMuc3RhdGVzW3RoaXMuaW5pdGlhbF0uaW5pdGlhbFN0YXRlVmFsdWUsIF9hKTtcbiAgICAgIH1cblxuICAgICAgdGhpcy5fX2NhY2hlLmluaXRpYWxTdGF0ZVZhbHVlID0gaW5pdGlhbFN0YXRlVmFsdWU7XG4gICAgICByZXR1cm4gdGhpcy5fX2NhY2hlLmluaXRpYWxTdGF0ZVZhbHVlO1xuICAgIH0sXG4gICAgZW51bWVyYWJsZTogZmFsc2UsXG4gICAgY29uZmlndXJhYmxlOiB0cnVlXG4gIH0pO1xuXG4gIFN0YXRlTm9kZS5wcm90b3R5cGUuZ2V0SW5pdGlhbFN0YXRlID0gZnVuY3Rpb24gKHN0YXRlVmFsdWUsIGNvbnRleHQpIHtcbiAgICB2YXIgY29uZmlndXJhdGlvbiA9IHRoaXMuZ2V0U3RhdGVOb2RlcyhzdGF0ZVZhbHVlKTtcbiAgICByZXR1cm4gdGhpcy5yZXNvbHZlVHJhbnNpdGlvbih7XG4gICAgICBjb25maWd1cmF0aW9uOiBjb25maWd1cmF0aW9uLFxuICAgICAgZW50cnlTZXQ6IGNvbmZpZ3VyYXRpb24sXG4gICAgICBleGl0U2V0OiBbXSxcbiAgICAgIHRyYW5zaXRpb25zOiBbXSxcbiAgICAgIHNvdXJjZTogdW5kZWZpbmVkLFxuICAgICAgYWN0aW9uczogW11cbiAgICB9LCB1bmRlZmluZWQsIHVuZGVmaW5lZCwgY29udGV4dCk7XG4gIH07XG5cbiAgT2JqZWN0LmRlZmluZVByb3BlcnR5KFN0YXRlTm9kZS5wcm90b3R5cGUsIFwiaW5pdGlhbFN0YXRlXCIsIHtcbiAgICAvKipcclxuICAgICAqIFRoZSBpbml0aWFsIFN0YXRlIGluc3RhbmNlLCB3aGljaCBpbmNsdWRlcyBhbGwgYWN0aW9ucyB0byBiZSBleGVjdXRlZCBmcm9tXHJcbiAgICAgKiBlbnRlcmluZyB0aGUgaW5pdGlhbCBzdGF0ZS5cclxuICAgICAqL1xuICAgIGdldDogZnVuY3Rpb24gKCkge1xuICAgICAgdGhpcy5faW5pdCgpOyAvLyBUT0RPOiB0aGlzIHNob3VsZCBiZSBpbiB0aGUgY29uc3RydWN0b3IgKHNlZSBub3RlIGluIGNvbnN0cnVjdG9yKVxuXG5cbiAgICAgIHZhciBpbml0aWFsU3RhdGVWYWx1ZSA9IHRoaXMuaW5pdGlhbFN0YXRlVmFsdWU7XG5cbiAgICAgIGlmICghaW5pdGlhbFN0YXRlVmFsdWUpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiQ2Fubm90IHJldHJpZXZlIGluaXRpYWwgc3RhdGUgZnJvbSBzaW1wbGUgc3RhdGUgJ1wiICsgdGhpcy5pZCArIFwiJy5cIik7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiB0aGlzLmdldEluaXRpYWxTdGF0ZShpbml0aWFsU3RhdGVWYWx1ZSk7XG4gICAgfSxcbiAgICBlbnVtZXJhYmxlOiBmYWxzZSxcbiAgICBjb25maWd1cmFibGU6IHRydWVcbiAgfSk7XG4gIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShTdGF0ZU5vZGUucHJvdG90eXBlLCBcInRhcmdldFwiLCB7XG4gICAgLyoqXHJcbiAgICAgKiBUaGUgdGFyZ2V0IHN0YXRlIHZhbHVlIG9mIHRoZSBoaXN0b3J5IHN0YXRlIG5vZGUsIGlmIGl0IGV4aXN0cy4gVGhpcyByZXByZXNlbnRzIHRoZVxyXG4gICAgICogZGVmYXVsdCBzdGF0ZSB2YWx1ZSB0byB0cmFuc2l0aW9uIHRvIGlmIG5vIGhpc3RvcnkgdmFsdWUgZXhpc3RzIHlldC5cclxuICAgICAqL1xuICAgIGdldDogZnVuY3Rpb24gKCkge1xuICAgICAgdmFyIHRhcmdldDtcblxuICAgICAgaWYgKHRoaXMudHlwZSA9PT0gJ2hpc3RvcnknKSB7XG4gICAgICAgIHZhciBoaXN0b3J5Q29uZmlnID0gdGhpcy5jb25maWc7XG5cbiAgICAgICAgaWYgKGlzU3RyaW5nKGhpc3RvcnlDb25maWcudGFyZ2V0KSkge1xuICAgICAgICAgIHRhcmdldCA9IGlzU3RhdGVJZChoaXN0b3J5Q29uZmlnLnRhcmdldCkgPyBwYXRoVG9TdGF0ZVZhbHVlKHRoaXMubWFjaGluZS5nZXRTdGF0ZU5vZGVCeUlkKGhpc3RvcnlDb25maWcudGFyZ2V0KS5wYXRoLnNsaWNlKHRoaXMucGF0aC5sZW5ndGggLSAxKSkgOiBoaXN0b3J5Q29uZmlnLnRhcmdldDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB0YXJnZXQgPSBoaXN0b3J5Q29uZmlnLnRhcmdldDtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICByZXR1cm4gdGFyZ2V0O1xuICAgIH0sXG4gICAgZW51bWVyYWJsZTogZmFsc2UsXG4gICAgY29uZmlndXJhYmxlOiB0cnVlXG4gIH0pO1xuICAvKipcclxuICAgKiBSZXR1cm5zIHRoZSBsZWFmIG5vZGVzIGZyb20gYSBzdGF0ZSBwYXRoIHJlbGF0aXZlIHRvIHRoaXMgc3RhdGUgbm9kZS5cclxuICAgKlxyXG4gICAqIEBwYXJhbSByZWxhdGl2ZVN0YXRlSWQgVGhlIHJlbGF0aXZlIHN0YXRlIHBhdGggdG8gcmV0cmlldmUgdGhlIHN0YXRlIG5vZGVzXHJcbiAgICogQHBhcmFtIGhpc3RvcnkgVGhlIHByZXZpb3VzIHN0YXRlIHRvIHJldHJpZXZlIGhpc3RvcnlcclxuICAgKiBAcGFyYW0gcmVzb2x2ZSBXaGV0aGVyIHN0YXRlIG5vZGVzIHNob3VsZCByZXNvbHZlIHRvIGluaXRpYWwgY2hpbGQgc3RhdGUgbm9kZXNcclxuICAgKi9cblxuICBTdGF0ZU5vZGUucHJvdG90eXBlLmdldFJlbGF0aXZlU3RhdGVOb2RlcyA9IGZ1bmN0aW9uIChyZWxhdGl2ZVN0YXRlSWQsIGhpc3RvcnlWYWx1ZSwgcmVzb2x2ZSkge1xuICAgIGlmIChyZXNvbHZlID09PSB2b2lkIDApIHtcbiAgICAgIHJlc29sdmUgPSB0cnVlO1xuICAgIH1cblxuICAgIHJldHVybiByZXNvbHZlID8gcmVsYXRpdmVTdGF0ZUlkLnR5cGUgPT09ICdoaXN0b3J5JyA/IHJlbGF0aXZlU3RhdGVJZC5yZXNvbHZlSGlzdG9yeShoaXN0b3J5VmFsdWUpIDogcmVsYXRpdmVTdGF0ZUlkLmluaXRpYWxTdGF0ZU5vZGVzIDogW3JlbGF0aXZlU3RhdGVJZF07XG4gIH07XG5cbiAgT2JqZWN0LmRlZmluZVByb3BlcnR5KFN0YXRlTm9kZS5wcm90b3R5cGUsIFwiaW5pdGlhbFN0YXRlTm9kZXNcIiwge1xuICAgIGdldDogZnVuY3Rpb24gKCkge1xuICAgICAgdmFyIF90aGlzID0gdGhpcztcblxuICAgICAgaWYgKGlzTGVhZk5vZGUodGhpcykpIHtcbiAgICAgICAgcmV0dXJuIFt0aGlzXTtcbiAgICAgIH0gLy8gQ2FzZSB3aGVuIHN0YXRlIG5vZGUgaXMgY29tcG91bmQgYnV0IG5vIGluaXRpYWwgc3RhdGUgaXMgZGVmaW5lZFxuXG5cbiAgICAgIGlmICh0aGlzLnR5cGUgPT09ICdjb21wb3VuZCcgJiYgIXRoaXMuaW5pdGlhbCkge1xuICAgICAgICBpZiAoIUlTX1BST0RVQ1RJT04pIHtcbiAgICAgICAgICB3YXJuKGZhbHNlLCBcIkNvbXBvdW5kIHN0YXRlIG5vZGUgJ1wiICsgdGhpcy5pZCArIFwiJyBoYXMgbm8gaW5pdGlhbCBzdGF0ZS5cIik7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gW3RoaXNdO1xuICAgICAgfVxuXG4gICAgICB2YXIgaW5pdGlhbFN0YXRlTm9kZVBhdGhzID0gdG9TdGF0ZVBhdGhzKHRoaXMuaW5pdGlhbFN0YXRlVmFsdWUpO1xuICAgICAgcmV0dXJuIGZsYXR0ZW4oaW5pdGlhbFN0YXRlTm9kZVBhdGhzLm1hcChmdW5jdGlvbiAoaW5pdGlhbFBhdGgpIHtcbiAgICAgICAgcmV0dXJuIF90aGlzLmdldEZyb21SZWxhdGl2ZVBhdGgoaW5pdGlhbFBhdGgpO1xuICAgICAgfSkpO1xuICAgIH0sXG4gICAgZW51bWVyYWJsZTogZmFsc2UsXG4gICAgY29uZmlndXJhYmxlOiB0cnVlXG4gIH0pO1xuICAvKipcclxuICAgKiBSZXRyaWV2ZXMgc3RhdGUgbm9kZXMgZnJvbSBhIHJlbGF0aXZlIHBhdGggdG8gdGhpcyBzdGF0ZSBub2RlLlxyXG4gICAqXHJcbiAgICogQHBhcmFtIHJlbGF0aXZlUGF0aCBUaGUgcmVsYXRpdmUgcGF0aCBmcm9tIHRoaXMgc3RhdGUgbm9kZVxyXG4gICAqIEBwYXJhbSBoaXN0b3J5VmFsdWVcclxuICAgKi9cblxuICBTdGF0ZU5vZGUucHJvdG90eXBlLmdldEZyb21SZWxhdGl2ZVBhdGggPSBmdW5jdGlvbiAocmVsYXRpdmVQYXRoKSB7XG4gICAgaWYgKCFyZWxhdGl2ZVBhdGgubGVuZ3RoKSB7XG4gICAgICByZXR1cm4gW3RoaXNdO1xuICAgIH1cblxuICAgIHZhciBfYSA9IF9fcmVhZChyZWxhdGl2ZVBhdGgpLFxuICAgICAgICBzdGF0ZUtleSA9IF9hWzBdLFxuICAgICAgICBjaGlsZFN0YXRlUGF0aCA9IF9hLnNsaWNlKDEpO1xuXG4gICAgaWYgKCF0aGlzLnN0YXRlcykge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKFwiQ2Fubm90IHJldHJpZXZlIHN1YlBhdGggJ1wiICsgc3RhdGVLZXkgKyBcIicgZnJvbSBub2RlIHdpdGggbm8gc3RhdGVzXCIpO1xuICAgIH1cblxuICAgIHZhciBjaGlsZFN0YXRlTm9kZSA9IHRoaXMuZ2V0U3RhdGVOb2RlKHN0YXRlS2V5KTtcblxuICAgIGlmIChjaGlsZFN0YXRlTm9kZS50eXBlID09PSAnaGlzdG9yeScpIHtcbiAgICAgIHJldHVybiBjaGlsZFN0YXRlTm9kZS5yZXNvbHZlSGlzdG9yeSgpO1xuICAgIH1cblxuICAgIGlmICghdGhpcy5zdGF0ZXNbc3RhdGVLZXldKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXCJDaGlsZCBzdGF0ZSAnXCIgKyBzdGF0ZUtleSArIFwiJyBkb2VzIG5vdCBleGlzdCBvbiAnXCIgKyB0aGlzLmlkICsgXCInXCIpO1xuICAgIH1cblxuICAgIHJldHVybiB0aGlzLnN0YXRlc1tzdGF0ZUtleV0uZ2V0RnJvbVJlbGF0aXZlUGF0aChjaGlsZFN0YXRlUGF0aCk7XG4gIH07XG5cbiAgU3RhdGVOb2RlLnByb3RvdHlwZS5oaXN0b3J5VmFsdWUgPSBmdW5jdGlvbiAocmVsYXRpdmVTdGF0ZVZhbHVlKSB7XG4gICAgaWYgKCFrZXlzKHRoaXMuc3RhdGVzKS5sZW5ndGgpIHtcbiAgICAgIHJldHVybiB1bmRlZmluZWQ7XG4gICAgfVxuXG4gICAgcmV0dXJuIHtcbiAgICAgIGN1cnJlbnQ6IHJlbGF0aXZlU3RhdGVWYWx1ZSB8fCB0aGlzLmluaXRpYWxTdGF0ZVZhbHVlLFxuICAgICAgc3RhdGVzOiBtYXBGaWx0ZXJWYWx1ZXModGhpcy5zdGF0ZXMsIGZ1bmN0aW9uIChzdGF0ZU5vZGUsIGtleSkge1xuICAgICAgICBpZiAoIXJlbGF0aXZlU3RhdGVWYWx1ZSkge1xuICAgICAgICAgIHJldHVybiBzdGF0ZU5vZGUuaGlzdG9yeVZhbHVlKCk7XG4gICAgICAgIH1cblxuICAgICAgICB2YXIgc3ViU3RhdGVWYWx1ZSA9IGlzU3RyaW5nKHJlbGF0aXZlU3RhdGVWYWx1ZSkgPyB1bmRlZmluZWQgOiByZWxhdGl2ZVN0YXRlVmFsdWVba2V5XTtcbiAgICAgICAgcmV0dXJuIHN0YXRlTm9kZS5oaXN0b3J5VmFsdWUoc3ViU3RhdGVWYWx1ZSB8fCBzdGF0ZU5vZGUuaW5pdGlhbFN0YXRlVmFsdWUpO1xuICAgICAgfSwgZnVuY3Rpb24gKHN0YXRlTm9kZSkge1xuICAgICAgICByZXR1cm4gIXN0YXRlTm9kZS5oaXN0b3J5O1xuICAgICAgfSlcbiAgICB9O1xuICB9O1xuICAvKipcclxuICAgKiBSZXNvbHZlcyB0byB0aGUgaGlzdG9yaWNhbCB2YWx1ZShzKSBvZiB0aGUgcGFyZW50IHN0YXRlIG5vZGUsXHJcbiAgICogcmVwcmVzZW50ZWQgYnkgc3RhdGUgbm9kZXMuXHJcbiAgICpcclxuICAgKiBAcGFyYW0gaGlzdG9yeVZhbHVlXHJcbiAgICovXG5cblxuICBTdGF0ZU5vZGUucHJvdG90eXBlLnJlc29sdmVIaXN0b3J5ID0gZnVuY3Rpb24gKGhpc3RvcnlWYWx1ZSkge1xuICAgIHZhciBfdGhpcyA9IHRoaXM7XG5cbiAgICBpZiAodGhpcy50eXBlICE9PSAnaGlzdG9yeScpIHtcbiAgICAgIHJldHVybiBbdGhpc107XG4gICAgfVxuXG4gICAgdmFyIHBhcmVudCA9IHRoaXMucGFyZW50O1xuXG4gICAgaWYgKCFoaXN0b3J5VmFsdWUpIHtcbiAgICAgIHZhciBoaXN0b3J5VGFyZ2V0ID0gdGhpcy50YXJnZXQ7XG4gICAgICByZXR1cm4gaGlzdG9yeVRhcmdldCA/IGZsYXR0ZW4odG9TdGF0ZVBhdGhzKGhpc3RvcnlUYXJnZXQpLm1hcChmdW5jdGlvbiAocmVsYXRpdmVDaGlsZFBhdGgpIHtcbiAgICAgICAgcmV0dXJuIHBhcmVudC5nZXRGcm9tUmVsYXRpdmVQYXRoKHJlbGF0aXZlQ2hpbGRQYXRoKTtcbiAgICAgIH0pKSA6IHBhcmVudC5pbml0aWFsU3RhdGVOb2RlcztcbiAgICB9XG5cbiAgICB2YXIgc3ViSGlzdG9yeVZhbHVlID0gbmVzdGVkUGF0aChwYXJlbnQucGF0aCwgJ3N0YXRlcycpKGhpc3RvcnlWYWx1ZSkuY3VycmVudDtcblxuICAgIGlmIChpc1N0cmluZyhzdWJIaXN0b3J5VmFsdWUpKSB7XG4gICAgICByZXR1cm4gW3BhcmVudC5nZXRTdGF0ZU5vZGUoc3ViSGlzdG9yeVZhbHVlKV07XG4gICAgfVxuXG4gICAgcmV0dXJuIGZsYXR0ZW4odG9TdGF0ZVBhdGhzKHN1Ykhpc3RvcnlWYWx1ZSkubWFwKGZ1bmN0aW9uIChzdWJTdGF0ZVBhdGgpIHtcbiAgICAgIHJldHVybiBfdGhpcy5oaXN0b3J5ID09PSAnZGVlcCcgPyBwYXJlbnQuZ2V0RnJvbVJlbGF0aXZlUGF0aChzdWJTdGF0ZVBhdGgpIDogW3BhcmVudC5zdGF0ZXNbc3ViU3RhdGVQYXRoWzBdXV07XG4gICAgfSkpO1xuICB9O1xuXG4gIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShTdGF0ZU5vZGUucHJvdG90eXBlLCBcInN0YXRlSWRzXCIsIHtcbiAgICAvKipcclxuICAgICAqIEFsbCB0aGUgc3RhdGUgbm9kZSBJRHMgb2YgdGhpcyBzdGF0ZSBub2RlIGFuZCBpdHMgZGVzY2VuZGFudCBzdGF0ZSBub2Rlcy5cclxuICAgICAqL1xuICAgIGdldDogZnVuY3Rpb24gKCkge1xuICAgICAgdmFyIF90aGlzID0gdGhpcztcblxuICAgICAgdmFyIGNoaWxkU3RhdGVJZHMgPSBmbGF0dGVuKGtleXModGhpcy5zdGF0ZXMpLm1hcChmdW5jdGlvbiAoc3RhdGVLZXkpIHtcbiAgICAgICAgcmV0dXJuIF90aGlzLnN0YXRlc1tzdGF0ZUtleV0uc3RhdGVJZHM7XG4gICAgICB9KSk7XG4gICAgICByZXR1cm4gW3RoaXMuaWRdLmNvbmNhdChjaGlsZFN0YXRlSWRzKTtcbiAgICB9LFxuICAgIGVudW1lcmFibGU6IGZhbHNlLFxuICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxuICB9KTtcbiAgT2JqZWN0LmRlZmluZVByb3BlcnR5KFN0YXRlTm9kZS5wcm90b3R5cGUsIFwiZXZlbnRzXCIsIHtcbiAgICAvKipcclxuICAgICAqIEFsbCB0aGUgZXZlbnQgdHlwZXMgYWNjZXB0ZWQgYnkgdGhpcyBzdGF0ZSBub2RlIGFuZCBpdHMgZGVzY2VuZGFudHMuXHJcbiAgICAgKi9cbiAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgIHZhciBlXzcsIF9hLCBlXzgsIF9iO1xuXG4gICAgICBpZiAodGhpcy5fX2NhY2hlLmV2ZW50cykge1xuICAgICAgICByZXR1cm4gdGhpcy5fX2NhY2hlLmV2ZW50cztcbiAgICAgIH1cblxuICAgICAgdmFyIHN0YXRlcyA9IHRoaXMuc3RhdGVzO1xuICAgICAgdmFyIGV2ZW50cyA9IG5ldyBTZXQodGhpcy5vd25FdmVudHMpO1xuXG4gICAgICBpZiAoc3RhdGVzKSB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgZm9yICh2YXIgX2MgPSBfX3ZhbHVlcyhrZXlzKHN0YXRlcykpLCBfZCA9IF9jLm5leHQoKTsgIV9kLmRvbmU7IF9kID0gX2MubmV4dCgpKSB7XG4gICAgICAgICAgICB2YXIgc3RhdGVJZCA9IF9kLnZhbHVlO1xuICAgICAgICAgICAgdmFyIHN0YXRlID0gc3RhdGVzW3N0YXRlSWRdO1xuXG4gICAgICAgICAgICBpZiAoc3RhdGUuc3RhdGVzKSB7XG4gICAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgZm9yICh2YXIgX2UgPSAoZV84ID0gdm9pZCAwLCBfX3ZhbHVlcyhzdGF0ZS5ldmVudHMpKSwgX2YgPSBfZS5uZXh0KCk7ICFfZi5kb25lOyBfZiA9IF9lLm5leHQoKSkge1xuICAgICAgICAgICAgICAgICAgdmFyIGV2ZW50XzEgPSBfZi52YWx1ZTtcbiAgICAgICAgICAgICAgICAgIGV2ZW50cy5hZGQoXCJcIiArIGV2ZW50XzEpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfSBjYXRjaCAoZV84XzEpIHtcbiAgICAgICAgICAgICAgICBlXzggPSB7XG4gICAgICAgICAgICAgICAgICBlcnJvcjogZV84XzFcbiAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICB9IGZpbmFsbHkge1xuICAgICAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgICBpZiAoX2YgJiYgIV9mLmRvbmUgJiYgKF9iID0gX2UucmV0dXJuKSkgX2IuY2FsbChfZSk7XG4gICAgICAgICAgICAgICAgfSBmaW5hbGx5IHtcbiAgICAgICAgICAgICAgICAgIGlmIChlXzgpIHRocm93IGVfOC5lcnJvcjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH0gY2F0Y2ggKGVfN18xKSB7XG4gICAgICAgICAgZV83ID0ge1xuICAgICAgICAgICAgZXJyb3I6IGVfN18xXG4gICAgICAgICAgfTtcbiAgICAgICAgfSBmaW5hbGx5IHtcbiAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgaWYgKF9kICYmICFfZC5kb25lICYmIChfYSA9IF9jLnJldHVybikpIF9hLmNhbGwoX2MpO1xuICAgICAgICAgIH0gZmluYWxseSB7XG4gICAgICAgICAgICBpZiAoZV83KSB0aHJvdyBlXzcuZXJyb3I7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIHJldHVybiB0aGlzLl9fY2FjaGUuZXZlbnRzID0gQXJyYXkuZnJvbShldmVudHMpO1xuICAgIH0sXG4gICAgZW51bWVyYWJsZTogZmFsc2UsXG4gICAgY29uZmlndXJhYmxlOiB0cnVlXG4gIH0pO1xuICBPYmplY3QuZGVmaW5lUHJvcGVydHkoU3RhdGVOb2RlLnByb3RvdHlwZSwgXCJvd25FdmVudHNcIiwge1xuICAgIC8qKlxyXG4gICAgICogQWxsIHRoZSBldmVudHMgdGhhdCBoYXZlIHRyYW5zaXRpb25zIGRpcmVjdGx5IGZyb20gdGhpcyBzdGF0ZSBub2RlLlxyXG4gICAgICpcclxuICAgICAqIEV4Y2x1ZGVzIGFueSBpbmVydCBldmVudHMuXHJcbiAgICAgKi9cbiAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgIHZhciBldmVudHMgPSBuZXcgU2V0KHRoaXMudHJhbnNpdGlvbnMuZmlsdGVyKGZ1bmN0aW9uICh0cmFuc2l0aW9uKSB7XG4gICAgICAgIHJldHVybiAhKCF0cmFuc2l0aW9uLnRhcmdldCAmJiAhdHJhbnNpdGlvbi5hY3Rpb25zLmxlbmd0aCAmJiB0cmFuc2l0aW9uLmludGVybmFsKTtcbiAgICAgIH0pLm1hcChmdW5jdGlvbiAodHJhbnNpdGlvbikge1xuICAgICAgICByZXR1cm4gdHJhbnNpdGlvbi5ldmVudFR5cGU7XG4gICAgICB9KSk7XG4gICAgICByZXR1cm4gQXJyYXkuZnJvbShldmVudHMpO1xuICAgIH0sXG4gICAgZW51bWVyYWJsZTogZmFsc2UsXG4gICAgY29uZmlndXJhYmxlOiB0cnVlXG4gIH0pO1xuXG4gIFN0YXRlTm9kZS5wcm90b3R5cGUucmVzb2x2ZVRhcmdldCA9IGZ1bmN0aW9uIChfdGFyZ2V0KSB7XG4gICAgdmFyIF90aGlzID0gdGhpcztcblxuICAgIGlmIChfdGFyZ2V0ID09PSB1bmRlZmluZWQpIHtcbiAgICAgIC8vIGFuIHVuZGVmaW5lZCB0YXJnZXQgc2lnbmFscyB0aGF0IHRoZSBzdGF0ZSBub2RlIHNob3VsZCBub3QgdHJhbnNpdGlvbiBmcm9tIHRoYXQgc3RhdGUgd2hlbiByZWNlaXZpbmcgdGhhdCBldmVudFxuICAgICAgcmV0dXJuIHVuZGVmaW5lZDtcbiAgICB9XG5cbiAgICByZXR1cm4gX3RhcmdldC5tYXAoZnVuY3Rpb24gKHRhcmdldCkge1xuICAgICAgaWYgKCFpc1N0cmluZyh0YXJnZXQpKSB7XG4gICAgICAgIHJldHVybiB0YXJnZXQ7XG4gICAgICB9XG5cbiAgICAgIHZhciBpc0ludGVybmFsVGFyZ2V0ID0gdGFyZ2V0WzBdID09PSBfdGhpcy5kZWxpbWl0ZXI7IC8vIElmIGludGVybmFsIHRhcmdldCBpcyBkZWZpbmVkIG9uIG1hY2hpbmUsXG4gICAgICAvLyBkbyBub3QgaW5jbHVkZSBtYWNoaW5lIGtleSBvbiB0YXJnZXRcblxuICAgICAgaWYgKGlzSW50ZXJuYWxUYXJnZXQgJiYgIV90aGlzLnBhcmVudCkge1xuICAgICAgICByZXR1cm4gX3RoaXMuZ2V0U3RhdGVOb2RlQnlQYXRoKHRhcmdldC5zbGljZSgxKSk7XG4gICAgICB9XG5cbiAgICAgIHZhciByZXNvbHZlZFRhcmdldCA9IGlzSW50ZXJuYWxUYXJnZXQgPyBfdGhpcy5rZXkgKyB0YXJnZXQgOiB0YXJnZXQ7XG5cbiAgICAgIGlmIChfdGhpcy5wYXJlbnQpIHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICB2YXIgdGFyZ2V0U3RhdGVOb2RlID0gX3RoaXMucGFyZW50LmdldFN0YXRlTm9kZUJ5UGF0aChyZXNvbHZlZFRhcmdldCk7XG5cbiAgICAgICAgICByZXR1cm4gdGFyZ2V0U3RhdGVOb2RlO1xuICAgICAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJJbnZhbGlkIHRyYW5zaXRpb24gZGVmaW5pdGlvbiBmb3Igc3RhdGUgbm9kZSAnXCIgKyBfdGhpcy5pZCArIFwiJzpcXG5cIiArIGVyci5tZXNzYWdlKTtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIF90aGlzLmdldFN0YXRlTm9kZUJ5UGF0aChyZXNvbHZlZFRhcmdldCk7XG4gICAgICB9XG4gICAgfSk7XG4gIH07XG5cbiAgU3RhdGVOb2RlLnByb3RvdHlwZS5mb3JtYXRUcmFuc2l0aW9uID0gZnVuY3Rpb24gKHRyYW5zaXRpb25Db25maWcpIHtcbiAgICB2YXIgX3RoaXMgPSB0aGlzO1xuXG4gICAgdmFyIG5vcm1hbGl6ZWRUYXJnZXQgPSBub3JtYWxpemVUYXJnZXQodHJhbnNpdGlvbkNvbmZpZy50YXJnZXQpO1xuICAgIHZhciBpbnRlcm5hbCA9ICdpbnRlcm5hbCcgaW4gdHJhbnNpdGlvbkNvbmZpZyA/IHRyYW5zaXRpb25Db25maWcuaW50ZXJuYWwgOiBub3JtYWxpemVkVGFyZ2V0ID8gbm9ybWFsaXplZFRhcmdldC5zb21lKGZ1bmN0aW9uIChfdGFyZ2V0KSB7XG4gICAgICByZXR1cm4gaXNTdHJpbmcoX3RhcmdldCkgJiYgX3RhcmdldFswXSA9PT0gX3RoaXMuZGVsaW1pdGVyO1xuICAgIH0pIDogdHJ1ZTtcbiAgICB2YXIgZ3VhcmRzID0gdGhpcy5tYWNoaW5lLm9wdGlvbnMuZ3VhcmRzO1xuICAgIHZhciB0YXJnZXQgPSB0aGlzLnJlc29sdmVUYXJnZXQobm9ybWFsaXplZFRhcmdldCk7XG5cbiAgICB2YXIgdHJhbnNpdGlvbiA9IF9fYXNzaWduKF9fYXNzaWduKHt9LCB0cmFuc2l0aW9uQ29uZmlnKSwge1xuICAgICAgYWN0aW9uczogdG9BY3Rpb25PYmplY3RzKHRvQXJyYXkodHJhbnNpdGlvbkNvbmZpZy5hY3Rpb25zKSksXG4gICAgICBjb25kOiB0b0d1YXJkKHRyYW5zaXRpb25Db25maWcuY29uZCwgZ3VhcmRzKSxcbiAgICAgIHRhcmdldDogdGFyZ2V0LFxuICAgICAgc291cmNlOiB0aGlzLFxuICAgICAgaW50ZXJuYWw6IGludGVybmFsLFxuICAgICAgZXZlbnRUeXBlOiB0cmFuc2l0aW9uQ29uZmlnLmV2ZW50LFxuICAgICAgdG9KU09OOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiBfX2Fzc2lnbihfX2Fzc2lnbih7fSwgdHJhbnNpdGlvbiksIHtcbiAgICAgICAgICB0YXJnZXQ6IHRyYW5zaXRpb24udGFyZ2V0ID8gdHJhbnNpdGlvbi50YXJnZXQubWFwKGZ1bmN0aW9uICh0KSB7XG4gICAgICAgICAgICByZXR1cm4gXCIjXCIgKyB0LmlkO1xuICAgICAgICAgIH0pIDogdW5kZWZpbmVkLFxuICAgICAgICAgIHNvdXJjZTogXCIjXCIgKyBfdGhpcy5pZFxuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIHJldHVybiB0cmFuc2l0aW9uO1xuICB9O1xuXG4gIFN0YXRlTm9kZS5wcm90b3R5cGUuZm9ybWF0VHJhbnNpdGlvbnMgPSBmdW5jdGlvbiAoKSB7XG4gICAgdmFyIGVfOSwgX2E7XG5cbiAgICB2YXIgX3RoaXMgPSB0aGlzO1xuXG4gICAgdmFyIG9uQ29uZmlnO1xuXG4gICAgaWYgKCF0aGlzLmNvbmZpZy5vbikge1xuICAgICAgb25Db25maWcgPSBbXTtcbiAgICB9IGVsc2UgaWYgKEFycmF5LmlzQXJyYXkodGhpcy5jb25maWcub24pKSB7XG4gICAgICBvbkNvbmZpZyA9IHRoaXMuY29uZmlnLm9uO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgX2IgPSB0aGlzLmNvbmZpZy5vbixcbiAgICAgICAgICBfYyA9IFdJTERDQVJELFxuICAgICAgICAgIF9kID0gX2JbX2NdLFxuICAgICAgICAgIHdpbGRjYXJkQ29uZmlncyA9IF9kID09PSB2b2lkIDAgPyBbXSA6IF9kLFxuICAgICAgICAgIHN0cmljdFRyYW5zaXRpb25Db25maWdzXzEgPSBfX3Jlc3QoX2IsIFt0eXBlb2YgX2MgPT09IFwic3ltYm9sXCIgPyBfYyA6IF9jICsgXCJcIl0pO1xuXG4gICAgICBvbkNvbmZpZyA9IGZsYXR0ZW4oa2V5cyhzdHJpY3RUcmFuc2l0aW9uQ29uZmlnc18xKS5tYXAoZnVuY3Rpb24gKGtleSkge1xuICAgICAgICBpZiAoIUlTX1BST0RVQ1RJT04gJiYga2V5ID09PSBOVUxMX0VWRU5UKSB7XG4gICAgICAgICAgd2FybihmYWxzZSwgXCJFbXB0eSBzdHJpbmcgdHJhbnNpdGlvbiBjb25maWdzIChlLmcuLCBgeyBvbjogeyAnJzogLi4uIH19YCkgZm9yIHRyYW5zaWVudCB0cmFuc2l0aW9ucyBhcmUgZGVwcmVjYXRlZC4gU3BlY2lmeSB0aGUgdHJhbnNpdGlvbiBpbiB0aGUgYHsgYWx3YXlzOiAuLi4gfWAgcHJvcGVydHkgaW5zdGVhZC4gXCIgKyAoXCJQbGVhc2UgY2hlY2sgdGhlIGBvbmAgY29uZmlndXJhdGlvbiBmb3IgXFxcIiNcIiArIF90aGlzLmlkICsgXCJcXFwiLlwiKSk7XG4gICAgICAgIH1cblxuICAgICAgICB2YXIgdHJhbnNpdGlvbkNvbmZpZ0FycmF5ID0gdG9UcmFuc2l0aW9uQ29uZmlnQXJyYXkoa2V5LCBzdHJpY3RUcmFuc2l0aW9uQ29uZmlnc18xW2tleV0pO1xuXG4gICAgICAgIGlmICghSVNfUFJPRFVDVElPTikge1xuICAgICAgICAgIHZhbGlkYXRlQXJyYXlpZmllZFRyYW5zaXRpb25zKF90aGlzLCBrZXksIHRyYW5zaXRpb25Db25maWdBcnJheSk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gdHJhbnNpdGlvbkNvbmZpZ0FycmF5O1xuICAgICAgfSkuY29uY2F0KHRvVHJhbnNpdGlvbkNvbmZpZ0FycmF5KFdJTERDQVJELCB3aWxkY2FyZENvbmZpZ3MpKSk7XG4gICAgfVxuXG4gICAgdmFyIGV2ZW50bGVzc0NvbmZpZyA9IHRoaXMuY29uZmlnLmFsd2F5cyA/IHRvVHJhbnNpdGlvbkNvbmZpZ0FycmF5KCcnLCB0aGlzLmNvbmZpZy5hbHdheXMpIDogW107XG4gICAgdmFyIGRvbmVDb25maWcgPSB0aGlzLmNvbmZpZy5vbkRvbmUgPyB0b1RyYW5zaXRpb25Db25maWdBcnJheShTdHJpbmcoZG9uZSh0aGlzLmlkKSksIHRoaXMuY29uZmlnLm9uRG9uZSkgOiBbXTtcblxuICAgIGlmICghSVNfUFJPRFVDVElPTikge1xuICAgICAgd2FybighKHRoaXMuY29uZmlnLm9uRG9uZSAmJiAhdGhpcy5wYXJlbnQpLCBcIlJvb3Qgbm9kZXMgY2Fubm90IGhhdmUgYW4gXFxcIi5vbkRvbmVcXFwiIHRyYW5zaXRpb24uIFBsZWFzZSBjaGVjayB0aGUgY29uZmlnIG9mIFxcXCJcIiArIHRoaXMuaWQgKyBcIlxcXCIuXCIpO1xuICAgIH1cblxuICAgIHZhciBpbnZva2VDb25maWcgPSBmbGF0dGVuKHRoaXMuaW52b2tlLm1hcChmdW5jdGlvbiAoaW52b2tlRGVmKSB7XG4gICAgICB2YXIgc2V0dGxlVHJhbnNpdGlvbnMgPSBbXTtcblxuICAgICAgaWYgKGludm9rZURlZi5vbkRvbmUpIHtcbiAgICAgICAgc2V0dGxlVHJhbnNpdGlvbnMucHVzaC5hcHBseShzZXR0bGVUcmFuc2l0aW9ucywgX19zcHJlYWQodG9UcmFuc2l0aW9uQ29uZmlnQXJyYXkoU3RyaW5nKGRvbmVJbnZva2UoaW52b2tlRGVmLmlkKSksIGludm9rZURlZi5vbkRvbmUpKSk7XG4gICAgICB9XG5cbiAgICAgIGlmIChpbnZva2VEZWYub25FcnJvcikge1xuICAgICAgICBzZXR0bGVUcmFuc2l0aW9ucy5wdXNoLmFwcGx5KHNldHRsZVRyYW5zaXRpb25zLCBfX3NwcmVhZCh0b1RyYW5zaXRpb25Db25maWdBcnJheShTdHJpbmcoZXJyb3IoaW52b2tlRGVmLmlkKSksIGludm9rZURlZi5vbkVycm9yKSkpO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gc2V0dGxlVHJhbnNpdGlvbnM7XG4gICAgfSkpO1xuICAgIHZhciBkZWxheWVkVHJhbnNpdGlvbnMgPSB0aGlzLmFmdGVyO1xuICAgIHZhciBmb3JtYXR0ZWRUcmFuc2l0aW9ucyA9IGZsYXR0ZW4oX19zcHJlYWQoZG9uZUNvbmZpZywgaW52b2tlQ29uZmlnLCBvbkNvbmZpZywgZXZlbnRsZXNzQ29uZmlnKS5tYXAoZnVuY3Rpb24gKHRyYW5zaXRpb25Db25maWcpIHtcbiAgICAgIHJldHVybiB0b0FycmF5KHRyYW5zaXRpb25Db25maWcpLm1hcChmdW5jdGlvbiAodHJhbnNpdGlvbikge1xuICAgICAgICByZXR1cm4gX3RoaXMuZm9ybWF0VHJhbnNpdGlvbih0cmFuc2l0aW9uKTtcbiAgICAgIH0pO1xuICAgIH0pKTtcblxuICAgIHRyeSB7XG4gICAgICBmb3IgKHZhciBkZWxheWVkVHJhbnNpdGlvbnNfMSA9IF9fdmFsdWVzKGRlbGF5ZWRUcmFuc2l0aW9ucyksIGRlbGF5ZWRUcmFuc2l0aW9uc18xXzEgPSBkZWxheWVkVHJhbnNpdGlvbnNfMS5uZXh0KCk7ICFkZWxheWVkVHJhbnNpdGlvbnNfMV8xLmRvbmU7IGRlbGF5ZWRUcmFuc2l0aW9uc18xXzEgPSBkZWxheWVkVHJhbnNpdGlvbnNfMS5uZXh0KCkpIHtcbiAgICAgICAgdmFyIGRlbGF5ZWRUcmFuc2l0aW9uID0gZGVsYXllZFRyYW5zaXRpb25zXzFfMS52YWx1ZTtcbiAgICAgICAgZm9ybWF0dGVkVHJhbnNpdGlvbnMucHVzaChkZWxheWVkVHJhbnNpdGlvbik7XG4gICAgICB9XG4gICAgfSBjYXRjaCAoZV85XzEpIHtcbiAgICAgIGVfOSA9IHtcbiAgICAgICAgZXJyb3I6IGVfOV8xXG4gICAgICB9O1xuICAgIH0gZmluYWxseSB7XG4gICAgICB0cnkge1xuICAgICAgICBpZiAoZGVsYXllZFRyYW5zaXRpb25zXzFfMSAmJiAhZGVsYXllZFRyYW5zaXRpb25zXzFfMS5kb25lICYmIChfYSA9IGRlbGF5ZWRUcmFuc2l0aW9uc18xLnJldHVybikpIF9hLmNhbGwoZGVsYXllZFRyYW5zaXRpb25zXzEpO1xuICAgICAgfSBmaW5hbGx5IHtcbiAgICAgICAgaWYgKGVfOSkgdGhyb3cgZV85LmVycm9yO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBmb3JtYXR0ZWRUcmFuc2l0aW9ucztcbiAgfTtcblxuICByZXR1cm4gU3RhdGVOb2RlO1xufSgpO1xuXG5leHBvcnQgeyBTdGF0ZU5vZGUgfTsiLCIvKiEgKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcclxuQ29weXJpZ2h0IChjKSBNaWNyb3NvZnQgQ29ycG9yYXRpb24uIEFsbCByaWdodHMgcmVzZXJ2ZWQuXHJcbkxpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAgKHRoZSBcIkxpY2Vuc2VcIik7IHlvdSBtYXkgbm90IHVzZVxyXG50aGlzIGZpbGUgZXhjZXB0IGluIGNvbXBsaWFuY2Ugd2l0aCB0aGUgTGljZW5zZS4gWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZVxyXG5MaWNlbnNlIGF0IGh0dHA6Ly93d3cuYXBhY2hlLm9yZy9saWNlbnNlcy9MSUNFTlNFLTIuMFxyXG5cclxuVEhJUyBDT0RFIElTIFBST1ZJREVEIE9OIEFOICpBUyBJUyogQkFTSVMsIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWVxyXG5LSU5ELCBFSVRIRVIgRVhQUkVTUyBPUiBJTVBMSUVELCBJTkNMVURJTkcgV0lUSE9VVCBMSU1JVEFUSU9OIEFOWSBJTVBMSUVEXHJcbldBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBUSVRMRSwgRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UsXHJcbk1FUkNIQU5UQUJMSVRZIE9SIE5PTi1JTkZSSU5HRU1FTlQuXHJcblxyXG5TZWUgdGhlIEFwYWNoZSBWZXJzaW9uIDIuMCBMaWNlbnNlIGZvciBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnNcclxuYW5kIGxpbWl0YXRpb25zIHVuZGVyIHRoZSBMaWNlbnNlLlxyXG4qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiAqL1xudmFyIF9fYXNzaWduID0gZnVuY3Rpb24gKCkge1xuICBfX2Fzc2lnbiA9IE9iamVjdC5hc3NpZ24gfHwgZnVuY3Rpb24gX19hc3NpZ24odCkge1xuICAgIGZvciAodmFyIHMsIGkgPSAxLCBuID0gYXJndW1lbnRzLmxlbmd0aDsgaSA8IG47IGkrKykge1xuICAgICAgcyA9IGFyZ3VtZW50c1tpXTtcblxuICAgICAgZm9yICh2YXIgcCBpbiBzKSBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHMsIHApKSB0W3BdID0gc1twXTtcbiAgICB9XG5cbiAgICByZXR1cm4gdDtcbiAgfTtcblxuICByZXR1cm4gX19hc3NpZ24uYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbn07XG5cbmZ1bmN0aW9uIF9fcmVzdChzLCBlKSB7XG4gIHZhciB0ID0ge307XG5cbiAgZm9yICh2YXIgcCBpbiBzKSBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHMsIHApICYmIGUuaW5kZXhPZihwKSA8IDApIHRbcF0gPSBzW3BdO1xuXG4gIGlmIChzICE9IG51bGwgJiYgdHlwZW9mIE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMgPT09IFwiZnVuY3Rpb25cIikgZm9yICh2YXIgaSA9IDAsIHAgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzKHMpOyBpIDwgcC5sZW5ndGg7IGkrKykge1xuICAgIGlmIChlLmluZGV4T2YocFtpXSkgPCAwICYmIE9iamVjdC5wcm90b3R5cGUucHJvcGVydHlJc0VudW1lcmFibGUuY2FsbChzLCBwW2ldKSkgdFtwW2ldXSA9IHNbcFtpXV07XG4gIH1cbiAgcmV0dXJuIHQ7XG59XG5cbmZ1bmN0aW9uIF9fdmFsdWVzKG8pIHtcbiAgdmFyIG0gPSB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgb1tTeW1ib2wuaXRlcmF0b3JdLFxuICAgICAgaSA9IDA7XG4gIGlmIChtKSByZXR1cm4gbS5jYWxsKG8pO1xuICByZXR1cm4ge1xuICAgIG5leHQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgIGlmIChvICYmIGkgPj0gby5sZW5ndGgpIG8gPSB2b2lkIDA7XG4gICAgICByZXR1cm4ge1xuICAgICAgICB2YWx1ZTogbyAmJiBvW2krK10sXG4gICAgICAgIGRvbmU6ICFvXG4gICAgICB9O1xuICAgIH1cbiAgfTtcbn1cblxuZnVuY3Rpb24gX19yZWFkKG8sIG4pIHtcbiAgdmFyIG0gPSB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgb1tTeW1ib2wuaXRlcmF0b3JdO1xuICBpZiAoIW0pIHJldHVybiBvO1xuICB2YXIgaSA9IG0uY2FsbChvKSxcbiAgICAgIHIsXG4gICAgICBhciA9IFtdLFxuICAgICAgZTtcblxuICB0cnkge1xuICAgIHdoaWxlICgobiA9PT0gdm9pZCAwIHx8IG4tLSA+IDApICYmICEociA9IGkubmV4dCgpKS5kb25lKSBhci5wdXNoKHIudmFsdWUpO1xuICB9IGNhdGNoIChlcnJvcikge1xuICAgIGUgPSB7XG4gICAgICBlcnJvcjogZXJyb3JcbiAgICB9O1xuICB9IGZpbmFsbHkge1xuICAgIHRyeSB7XG4gICAgICBpZiAociAmJiAhci5kb25lICYmIChtID0gaVtcInJldHVyblwiXSkpIG0uY2FsbChpKTtcbiAgICB9IGZpbmFsbHkge1xuICAgICAgaWYgKGUpIHRocm93IGUuZXJyb3I7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGFyO1xufVxuXG5mdW5jdGlvbiBfX3NwcmVhZCgpIHtcbiAgZm9yICh2YXIgYXIgPSBbXSwgaSA9IDA7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIGFyID0gYXIuY29uY2F0KF9fcmVhZChhcmd1bWVudHNbaV0pKTtcblxuICByZXR1cm4gYXI7XG59XG5cbmV4cG9ydCB7IF9fYXNzaWduLCBfX3JlYWQsIF9fcmVzdCwgX19zcHJlYWQsIF9fdmFsdWVzIH07IiwiaW1wb3J0IHsgQWN0aW9uVHlwZXMgfSBmcm9tICcuL3R5cGVzLmpzJzsgLy8geHN0YXRlLXNwZWNpZmljIGFjdGlvbiB0eXBlc1xuXG52YXIgc3RhcnQgPSBBY3Rpb25UeXBlcy5TdGFydDtcbnZhciBzdG9wID0gQWN0aW9uVHlwZXMuU3RvcDtcbnZhciByYWlzZSA9IEFjdGlvblR5cGVzLlJhaXNlO1xudmFyIHNlbmQgPSBBY3Rpb25UeXBlcy5TZW5kO1xudmFyIGNhbmNlbCA9IEFjdGlvblR5cGVzLkNhbmNlbDtcbnZhciBudWxsRXZlbnQgPSBBY3Rpb25UeXBlcy5OdWxsRXZlbnQ7XG52YXIgYXNzaWduID0gQWN0aW9uVHlwZXMuQXNzaWduO1xudmFyIGFmdGVyID0gQWN0aW9uVHlwZXMuQWZ0ZXI7XG52YXIgZG9uZVN0YXRlID0gQWN0aW9uVHlwZXMuRG9uZVN0YXRlO1xudmFyIGxvZyA9IEFjdGlvblR5cGVzLkxvZztcbnZhciBpbml0ID0gQWN0aW9uVHlwZXMuSW5pdDtcbnZhciBpbnZva2UgPSBBY3Rpb25UeXBlcy5JbnZva2U7XG52YXIgZXJyb3JFeGVjdXRpb24gPSBBY3Rpb25UeXBlcy5FcnJvckV4ZWN1dGlvbjtcbnZhciBlcnJvclBsYXRmb3JtID0gQWN0aW9uVHlwZXMuRXJyb3JQbGF0Zm9ybTtcbnZhciBlcnJvciA9IEFjdGlvblR5cGVzLkVycm9yQ3VzdG9tO1xudmFyIHVwZGF0ZSA9IEFjdGlvblR5cGVzLlVwZGF0ZTtcbnZhciBjaG9vc2UgPSBBY3Rpb25UeXBlcy5DaG9vc2U7XG52YXIgcHVyZSA9IEFjdGlvblR5cGVzLlB1cmU7XG5leHBvcnQgeyBhZnRlciwgYXNzaWduLCBjYW5jZWwsIGNob29zZSwgZG9uZVN0YXRlLCBlcnJvciwgZXJyb3JFeGVjdXRpb24sIGVycm9yUGxhdGZvcm0sIGluaXQsIGludm9rZSwgbG9nLCBudWxsRXZlbnQsIHB1cmUsIHJhaXNlLCBzZW5kLCBzdGFydCwgc3RvcCwgdXBkYXRlIH07IiwiaW1wb3J0IHsgX19hc3NpZ24sIF9fcmVhZCB9IGZyb20gJy4vX3ZpcnR1YWwvX3RzbGliLmpzJztcbmltcG9ydCB7IElTX1BST0RVQ1RJT04gfSBmcm9tICcuL2Vudmlyb25tZW50LmpzJztcbmltcG9ydCB7IHRvU0NYTUxFdmVudCwgaXNGdW5jdGlvbiwgdG9FdmVudE9iamVjdCwgZ2V0RXZlbnRUeXBlLCBpc1N0cmluZywgcGFydGl0aW9uLCB1cGRhdGVDb250ZXh0LCBmbGF0dGVuLCB0b0FycmF5LCB0b0d1YXJkLCBldmFsdWF0ZUd1YXJkLCB3YXJuLCBpc0FycmF5IH0gZnJvbSAnLi91dGlscy5qcyc7XG5pbXBvcnQgeyBTcGVjaWFsVGFyZ2V0cywgQWN0aW9uVHlwZXMgfSBmcm9tICcuL3R5cGVzLmpzJztcbmltcG9ydCB7IHNlbmQgYXMgc2VuZCQxLCB1cGRhdGUsIGFzc2lnbiBhcyBhc3NpZ24kMSwgaW5pdCwgcmFpc2UgYXMgcmFpc2UkMSwgbG9nIGFzIGxvZyQxLCBjYW5jZWwgYXMgY2FuY2VsJDEsIGVycm9yIGFzIGVycm9yJDEsIHB1cmUgYXMgcHVyZSQxLCBjaG9vc2UgYXMgY2hvb3NlJDEgfSBmcm9tICcuL2FjdGlvblR5cGVzLmpzJztcbnZhciBpbml0RXZlbnQgPSAvKiNfX1BVUkVfXyovdG9TQ1hNTEV2ZW50KHtcbiAgdHlwZTogaW5pdFxufSk7XG5cbmZ1bmN0aW9uIGdldEFjdGlvbkZ1bmN0aW9uKGFjdGlvblR5cGUsIGFjdGlvbkZ1bmN0aW9uTWFwKSB7XG4gIHJldHVybiBhY3Rpb25GdW5jdGlvbk1hcCA/IGFjdGlvbkZ1bmN0aW9uTWFwW2FjdGlvblR5cGVdIHx8IHVuZGVmaW5lZCA6IHVuZGVmaW5lZDtcbn1cblxuZnVuY3Rpb24gdG9BY3Rpb25PYmplY3QoYWN0aW9uLCBhY3Rpb25GdW5jdGlvbk1hcCkge1xuICB2YXIgYWN0aW9uT2JqZWN0O1xuXG4gIGlmIChpc1N0cmluZyhhY3Rpb24pIHx8IHR5cGVvZiBhY3Rpb24gPT09ICdudW1iZXInKSB7XG4gICAgdmFyIGV4ZWMgPSBnZXRBY3Rpb25GdW5jdGlvbihhY3Rpb24sIGFjdGlvbkZ1bmN0aW9uTWFwKTtcblxuICAgIGlmIChpc0Z1bmN0aW9uKGV4ZWMpKSB7XG4gICAgICBhY3Rpb25PYmplY3QgPSB7XG4gICAgICAgIHR5cGU6IGFjdGlvbixcbiAgICAgICAgZXhlYzogZXhlY1xuICAgICAgfTtcbiAgICB9IGVsc2UgaWYgKGV4ZWMpIHtcbiAgICAgIGFjdGlvbk9iamVjdCA9IGV4ZWM7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFjdGlvbk9iamVjdCA9IHtcbiAgICAgICAgdHlwZTogYWN0aW9uLFxuICAgICAgICBleGVjOiB1bmRlZmluZWRcbiAgICAgIH07XG4gICAgfVxuICB9IGVsc2UgaWYgKGlzRnVuY3Rpb24oYWN0aW9uKSkge1xuICAgIGFjdGlvbk9iamVjdCA9IHtcbiAgICAgIC8vIENvbnZlcnQgYWN0aW9uIHRvIHN0cmluZyBpZiB1bm5hbWVkXG4gICAgICB0eXBlOiBhY3Rpb24ubmFtZSB8fCBhY3Rpb24udG9TdHJpbmcoKSxcbiAgICAgIGV4ZWM6IGFjdGlvblxuICAgIH07XG4gIH0gZWxzZSB7XG4gICAgdmFyIGV4ZWMgPSBnZXRBY3Rpb25GdW5jdGlvbihhY3Rpb24udHlwZSwgYWN0aW9uRnVuY3Rpb25NYXApO1xuXG4gICAgaWYgKGlzRnVuY3Rpb24oZXhlYykpIHtcbiAgICAgIGFjdGlvbk9iamVjdCA9IF9fYXNzaWduKF9fYXNzaWduKHt9LCBhY3Rpb24pLCB7XG4gICAgICAgIGV4ZWM6IGV4ZWNcbiAgICAgIH0pO1xuICAgIH0gZWxzZSBpZiAoZXhlYykge1xuICAgICAgdmFyIGFjdGlvblR5cGUgPSBleGVjLnR5cGUgfHwgYWN0aW9uLnR5cGU7XG4gICAgICBhY3Rpb25PYmplY3QgPSBfX2Fzc2lnbihfX2Fzc2lnbihfX2Fzc2lnbih7fSwgZXhlYyksIGFjdGlvbiksIHtcbiAgICAgICAgdHlwZTogYWN0aW9uVHlwZVxuICAgICAgfSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFjdGlvbk9iamVjdCA9IGFjdGlvbjtcbiAgICB9XG4gIH1cblxuICBPYmplY3QuZGVmaW5lUHJvcGVydHkoYWN0aW9uT2JqZWN0LCAndG9TdHJpbmcnLCB7XG4gICAgdmFsdWU6IGZ1bmN0aW9uICgpIHtcbiAgICAgIHJldHVybiBhY3Rpb25PYmplY3QudHlwZTtcbiAgICB9LFxuICAgIGVudW1lcmFibGU6IGZhbHNlLFxuICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxuICB9KTtcbiAgcmV0dXJuIGFjdGlvbk9iamVjdDtcbn1cblxudmFyIHRvQWN0aW9uT2JqZWN0cyA9IGZ1bmN0aW9uIChhY3Rpb24sIGFjdGlvbkZ1bmN0aW9uTWFwKSB7XG4gIGlmICghYWN0aW9uKSB7XG4gICAgcmV0dXJuIFtdO1xuICB9XG5cbiAgdmFyIGFjdGlvbnMgPSBpc0FycmF5KGFjdGlvbikgPyBhY3Rpb24gOiBbYWN0aW9uXTtcbiAgcmV0dXJuIGFjdGlvbnMubWFwKGZ1bmN0aW9uIChzdWJBY3Rpb24pIHtcbiAgICByZXR1cm4gdG9BY3Rpb25PYmplY3Qoc3ViQWN0aW9uLCBhY3Rpb25GdW5jdGlvbk1hcCk7XG4gIH0pO1xufTtcblxuZnVuY3Rpb24gdG9BY3Rpdml0eURlZmluaXRpb24oYWN0aW9uKSB7XG4gIHZhciBhY3Rpb25PYmplY3QgPSB0b0FjdGlvbk9iamVjdChhY3Rpb24pO1xuICByZXR1cm4gX19hc3NpZ24oX19hc3NpZ24oe1xuICAgIGlkOiBpc1N0cmluZyhhY3Rpb24pID8gYWN0aW9uIDogYWN0aW9uT2JqZWN0LmlkXG4gIH0sIGFjdGlvbk9iamVjdCksIHtcbiAgICB0eXBlOiBhY3Rpb25PYmplY3QudHlwZVxuICB9KTtcbn1cbi8qKlxyXG4gKiBSYWlzZXMgYW4gZXZlbnQuIFRoaXMgcGxhY2VzIHRoZSBldmVudCBpbiB0aGUgaW50ZXJuYWwgZXZlbnQgcXVldWUsIHNvIHRoYXRcclxuICogdGhlIGV2ZW50IGlzIGltbWVkaWF0ZWx5IGNvbnN1bWVkIGJ5IHRoZSBtYWNoaW5lIGluIHRoZSBjdXJyZW50IHN0ZXAuXHJcbiAqXHJcbiAqIEBwYXJhbSBldmVudFR5cGUgVGhlIGV2ZW50IHRvIHJhaXNlLlxyXG4gKi9cblxuXG5mdW5jdGlvbiByYWlzZShldmVudCkge1xuICBpZiAoIWlzU3RyaW5nKGV2ZW50KSkge1xuICAgIHJldHVybiBzZW5kKGV2ZW50LCB7XG4gICAgICB0bzogU3BlY2lhbFRhcmdldHMuSW50ZXJuYWxcbiAgICB9KTtcbiAgfVxuXG4gIHJldHVybiB7XG4gICAgdHlwZTogcmFpc2UkMSxcbiAgICBldmVudDogZXZlbnRcbiAgfTtcbn1cblxuZnVuY3Rpb24gcmVzb2x2ZVJhaXNlKGFjdGlvbikge1xuICByZXR1cm4ge1xuICAgIHR5cGU6IHJhaXNlJDEsXG4gICAgX2V2ZW50OiB0b1NDWE1MRXZlbnQoYWN0aW9uLmV2ZW50KVxuICB9O1xufVxuLyoqXHJcbiAqIFNlbmRzIGFuIGV2ZW50LiBUaGlzIHJldHVybnMgYW4gYWN0aW9uIHRoYXQgd2lsbCBiZSByZWFkIGJ5IGFuIGludGVycHJldGVyIHRvXHJcbiAqIHNlbmQgdGhlIGV2ZW50IGluIHRoZSBuZXh0IHN0ZXAsIGFmdGVyIHRoZSBjdXJyZW50IHN0ZXAgaXMgZmluaXNoZWQgZXhlY3V0aW5nLlxyXG4gKlxyXG4gKiBAcGFyYW0gZXZlbnQgVGhlIGV2ZW50IHRvIHNlbmQuXHJcbiAqIEBwYXJhbSBvcHRpb25zIE9wdGlvbnMgdG8gcGFzcyBpbnRvIHRoZSBzZW5kIGV2ZW50OlxyXG4gKiAgLSBgaWRgIC0gVGhlIHVuaXF1ZSBzZW5kIGV2ZW50IGlkZW50aWZpZXIgKHVzZWQgd2l0aCBgY2FuY2VsKClgKS5cclxuICogIC0gYGRlbGF5YCAtIFRoZSBudW1iZXIgb2YgbWlsbGlzZWNvbmRzIHRvIGRlbGF5IHRoZSBzZW5kaW5nIG9mIHRoZSBldmVudC5cclxuICogIC0gYHRvYCAtIFRoZSB0YXJnZXQgb2YgdGhpcyBldmVudCAoYnkgZGVmYXVsdCwgdGhlIG1hY2hpbmUgdGhlIGV2ZW50IHdhcyBzZW50IGZyb20pLlxyXG4gKi9cblxuXG5mdW5jdGlvbiBzZW5kKGV2ZW50LCBvcHRpb25zKSB7XG4gIHJldHVybiB7XG4gICAgdG86IG9wdGlvbnMgPyBvcHRpb25zLnRvIDogdW5kZWZpbmVkLFxuICAgIHR5cGU6IHNlbmQkMSxcbiAgICBldmVudDogaXNGdW5jdGlvbihldmVudCkgPyBldmVudCA6IHRvRXZlbnRPYmplY3QoZXZlbnQpLFxuICAgIGRlbGF5OiBvcHRpb25zID8gb3B0aW9ucy5kZWxheSA6IHVuZGVmaW5lZCxcbiAgICBpZDogb3B0aW9ucyAmJiBvcHRpb25zLmlkICE9PSB1bmRlZmluZWQgPyBvcHRpb25zLmlkIDogaXNGdW5jdGlvbihldmVudCkgPyBldmVudC5uYW1lIDogZ2V0RXZlbnRUeXBlKGV2ZW50KVxuICB9O1xufVxuXG5mdW5jdGlvbiByZXNvbHZlU2VuZChhY3Rpb24sIGN0eCwgX2V2ZW50LCBkZWxheXNNYXApIHtcbiAgdmFyIG1ldGEgPSB7XG4gICAgX2V2ZW50OiBfZXZlbnRcbiAgfTsgLy8gVE9ETzogaGVscGVyIGZ1bmN0aW9uIGZvciByZXNvbHZpbmcgRXhwclxuXG4gIHZhciByZXNvbHZlZEV2ZW50ID0gdG9TQ1hNTEV2ZW50KGlzRnVuY3Rpb24oYWN0aW9uLmV2ZW50KSA/IGFjdGlvbi5ldmVudChjdHgsIF9ldmVudC5kYXRhLCBtZXRhKSA6IGFjdGlvbi5ldmVudCk7XG4gIHZhciByZXNvbHZlZERlbGF5O1xuXG4gIGlmIChpc1N0cmluZyhhY3Rpb24uZGVsYXkpKSB7XG4gICAgdmFyIGNvbmZpZ0RlbGF5ID0gZGVsYXlzTWFwICYmIGRlbGF5c01hcFthY3Rpb24uZGVsYXldO1xuICAgIHJlc29sdmVkRGVsYXkgPSBpc0Z1bmN0aW9uKGNvbmZpZ0RlbGF5KSA/IGNvbmZpZ0RlbGF5KGN0eCwgX2V2ZW50LmRhdGEsIG1ldGEpIDogY29uZmlnRGVsYXk7XG4gIH0gZWxzZSB7XG4gICAgcmVzb2x2ZWREZWxheSA9IGlzRnVuY3Rpb24oYWN0aW9uLmRlbGF5KSA/IGFjdGlvbi5kZWxheShjdHgsIF9ldmVudC5kYXRhLCBtZXRhKSA6IGFjdGlvbi5kZWxheTtcbiAgfVxuXG4gIHZhciByZXNvbHZlZFRhcmdldCA9IGlzRnVuY3Rpb24oYWN0aW9uLnRvKSA/IGFjdGlvbi50byhjdHgsIF9ldmVudC5kYXRhLCBtZXRhKSA6IGFjdGlvbi50bztcbiAgcmV0dXJuIF9fYXNzaWduKF9fYXNzaWduKHt9LCBhY3Rpb24pLCB7XG4gICAgdG86IHJlc29sdmVkVGFyZ2V0LFxuICAgIF9ldmVudDogcmVzb2x2ZWRFdmVudCxcbiAgICBldmVudDogcmVzb2x2ZWRFdmVudC5kYXRhLFxuICAgIGRlbGF5OiByZXNvbHZlZERlbGF5XG4gIH0pO1xufVxuLyoqXHJcbiAqIFNlbmRzIGFuIGV2ZW50IHRvIHRoaXMgbWFjaGluZSdzIHBhcmVudC5cclxuICpcclxuICogQHBhcmFtIGV2ZW50IFRoZSBldmVudCB0byBzZW5kIHRvIHRoZSBwYXJlbnQgbWFjaGluZS5cclxuICogQHBhcmFtIG9wdGlvbnMgT3B0aW9ucyB0byBwYXNzIGludG8gdGhlIHNlbmQgZXZlbnQuXHJcbiAqL1xuXG5cbmZ1bmN0aW9uIHNlbmRQYXJlbnQoZXZlbnQsIG9wdGlvbnMpIHtcbiAgcmV0dXJuIHNlbmQoZXZlbnQsIF9fYXNzaWduKF9fYXNzaWduKHt9LCBvcHRpb25zKSwge1xuICAgIHRvOiBTcGVjaWFsVGFyZ2V0cy5QYXJlbnRcbiAgfSkpO1xufVxuLyoqXHJcbiAqIFNlbmRzIGFuIHVwZGF0ZSBldmVudCB0byB0aGlzIG1hY2hpbmUncyBwYXJlbnQuXHJcbiAqL1xuXG5cbmZ1bmN0aW9uIHNlbmRVcGRhdGUoKSB7XG4gIHJldHVybiBzZW5kUGFyZW50KHVwZGF0ZSk7XG59XG4vKipcclxuICogU2VuZHMgYW4gZXZlbnQgYmFjayB0byB0aGUgc2VuZGVyIG9mIHRoZSBvcmlnaW5hbCBldmVudC5cclxuICpcclxuICogQHBhcmFtIGV2ZW50IFRoZSBldmVudCB0byBzZW5kIGJhY2sgdG8gdGhlIHNlbmRlclxyXG4gKiBAcGFyYW0gb3B0aW9ucyBPcHRpb25zIHRvIHBhc3MgaW50byB0aGUgc2VuZCBldmVudFxyXG4gKi9cblxuXG5mdW5jdGlvbiByZXNwb25kKGV2ZW50LCBvcHRpb25zKSB7XG4gIHJldHVybiBzZW5kKGV2ZW50LCBfX2Fzc2lnbihfX2Fzc2lnbih7fSwgb3B0aW9ucyksIHtcbiAgICB0bzogZnVuY3Rpb24gKF8sIF9fLCBfYSkge1xuICAgICAgdmFyIF9ldmVudCA9IF9hLl9ldmVudDtcbiAgICAgIHJldHVybiBfZXZlbnQub3JpZ2luOyAvLyBUT0RPOiBoYW5kbGUgd2hlbiBfZXZlbnQub3JpZ2luIGlzIHVuZGVmaW5lZFxuICAgIH1cbiAgfSkpO1xufVxuXG52YXIgZGVmYXVsdExvZ0V4cHIgPSBmdW5jdGlvbiAoY29udGV4dCwgZXZlbnQpIHtcbiAgcmV0dXJuIHtcbiAgICBjb250ZXh0OiBjb250ZXh0LFxuICAgIGV2ZW50OiBldmVudFxuICB9O1xufTtcbi8qKlxyXG4gKlxyXG4gKiBAcGFyYW0gZXhwciBUaGUgZXhwcmVzc2lvbiBmdW5jdGlvbiB0byBldmFsdWF0ZSB3aGljaCB3aWxsIGJlIGxvZ2dlZC5cclxuICogIFRha2VzIGluIDIgYXJndW1lbnRzOlxyXG4gKiAgLSBgY3R4YCAtIHRoZSBjdXJyZW50IHN0YXRlIGNvbnRleHRcclxuICogIC0gYGV2ZW50YCAtIHRoZSBldmVudCB0aGF0IGNhdXNlZCB0aGlzIGFjdGlvbiB0byBiZSBleGVjdXRlZC5cclxuICogQHBhcmFtIGxhYmVsIFRoZSBsYWJlbCB0byBnaXZlIHRvIHRoZSBsb2dnZWQgZXhwcmVzc2lvbi5cclxuICovXG5cblxuZnVuY3Rpb24gbG9nKGV4cHIsIGxhYmVsKSB7XG4gIGlmIChleHByID09PSB2b2lkIDApIHtcbiAgICBleHByID0gZGVmYXVsdExvZ0V4cHI7XG4gIH1cblxuICByZXR1cm4ge1xuICAgIHR5cGU6IGxvZyQxLFxuICAgIGxhYmVsOiBsYWJlbCxcbiAgICBleHByOiBleHByXG4gIH07XG59XG5cbnZhciByZXNvbHZlTG9nID0gZnVuY3Rpb24gKGFjdGlvbiwgY3R4LCBfZXZlbnQpIHtcbiAgcmV0dXJuIF9fYXNzaWduKF9fYXNzaWduKHt9LCBhY3Rpb24pLCB7XG4gICAgdmFsdWU6IGlzU3RyaW5nKGFjdGlvbi5leHByKSA/IGFjdGlvbi5leHByIDogYWN0aW9uLmV4cHIoY3R4LCBfZXZlbnQuZGF0YSwge1xuICAgICAgX2V2ZW50OiBfZXZlbnRcbiAgICB9KVxuICB9KTtcbn07XG4vKipcclxuICogQ2FuY2VscyBhbiBpbi1mbGlnaHQgYHNlbmQoLi4uKWAgYWN0aW9uLiBBIGNhbmNlbGVkIHNlbnQgYWN0aW9uIHdpbGwgbm90XHJcbiAqIGJlIGV4ZWN1dGVkLCBub3Igd2lsbCBpdHMgZXZlbnQgYmUgc2VudCwgdW5sZXNzIGl0IGhhcyBhbHJlYWR5IGJlZW4gc2VudFxyXG4gKiAoZS5nLiwgaWYgYGNhbmNlbCguLi4pYCBpcyBjYWxsZWQgYWZ0ZXIgdGhlIGBzZW5kKC4uLilgIGFjdGlvbidzIGBkZWxheWApLlxyXG4gKlxyXG4gKiBAcGFyYW0gc2VuZElkIFRoZSBgaWRgIG9mIHRoZSBgc2VuZCguLi4pYCBhY3Rpb24gdG8gY2FuY2VsLlxyXG4gKi9cblxuXG52YXIgY2FuY2VsID0gZnVuY3Rpb24gKHNlbmRJZCkge1xuICByZXR1cm4ge1xuICAgIHR5cGU6IGNhbmNlbCQxLFxuICAgIHNlbmRJZDogc2VuZElkXG4gIH07XG59O1xuLyoqXHJcbiAqIFN0YXJ0cyBhbiBhY3Rpdml0eS5cclxuICpcclxuICogQHBhcmFtIGFjdGl2aXR5IFRoZSBhY3Rpdml0eSB0byBzdGFydC5cclxuICovXG5cblxuZnVuY3Rpb24gc3RhcnQoYWN0aXZpdHkpIHtcbiAgdmFyIGFjdGl2aXR5RGVmID0gdG9BY3Rpdml0eURlZmluaXRpb24oYWN0aXZpdHkpO1xuICByZXR1cm4ge1xuICAgIHR5cGU6IEFjdGlvblR5cGVzLlN0YXJ0LFxuICAgIGFjdGl2aXR5OiBhY3Rpdml0eURlZixcbiAgICBleGVjOiB1bmRlZmluZWRcbiAgfTtcbn1cbi8qKlxyXG4gKiBTdG9wcyBhbiBhY3Rpdml0eS5cclxuICpcclxuICogQHBhcmFtIGFjdGl2aXR5IFRoZSBhY3Rpdml0eSB0byBzdG9wLlxyXG4gKi9cblxuXG5mdW5jdGlvbiBzdG9wKGFjdGl2aXR5KSB7XG4gIHZhciBhY3Rpdml0eURlZiA9IHRvQWN0aXZpdHlEZWZpbml0aW9uKGFjdGl2aXR5KTtcbiAgcmV0dXJuIHtcbiAgICB0eXBlOiBBY3Rpb25UeXBlcy5TdG9wLFxuICAgIGFjdGl2aXR5OiBhY3Rpdml0eURlZixcbiAgICBleGVjOiB1bmRlZmluZWRcbiAgfTtcbn1cbi8qKlxyXG4gKiBVcGRhdGVzIHRoZSBjdXJyZW50IGNvbnRleHQgb2YgdGhlIG1hY2hpbmUuXHJcbiAqXHJcbiAqIEBwYXJhbSBhc3NpZ25tZW50IEFuIG9iamVjdCB0aGF0IHJlcHJlc2VudHMgdGhlIHBhcnRpYWwgY29udGV4dCB0byB1cGRhdGUuXHJcbiAqL1xuXG5cbnZhciBhc3NpZ24gPSBmdW5jdGlvbiAoYXNzaWdubWVudCkge1xuICByZXR1cm4ge1xuICAgIHR5cGU6IGFzc2lnbiQxLFxuICAgIGFzc2lnbm1lbnQ6IGFzc2lnbm1lbnRcbiAgfTtcbn07XG4vKipcclxuICogUmV0dXJucyBhbiBldmVudCB0eXBlIHRoYXQgcmVwcmVzZW50cyBhbiBpbXBsaWNpdCBldmVudCB0aGF0XHJcbiAqIGlzIHNlbnQgYWZ0ZXIgdGhlIHNwZWNpZmllZCBgZGVsYXlgLlxyXG4gKlxyXG4gKiBAcGFyYW0gZGVsYXlSZWYgVGhlIGRlbGF5IGluIG1pbGxpc2Vjb25kc1xyXG4gKiBAcGFyYW0gaWQgVGhlIHN0YXRlIG5vZGUgSUQgd2hlcmUgdGhpcyBldmVudCBpcyBoYW5kbGVkXHJcbiAqL1xuXG5cbmZ1bmN0aW9uIGFmdGVyKGRlbGF5UmVmLCBpZCkge1xuICB2YXIgaWRTdWZmaXggPSBpZCA/IFwiI1wiICsgaWQgOiAnJztcbiAgcmV0dXJuIEFjdGlvblR5cGVzLkFmdGVyICsgXCIoXCIgKyBkZWxheVJlZiArIFwiKVwiICsgaWRTdWZmaXg7XG59XG4vKipcclxuICogUmV0dXJucyBhbiBldmVudCB0aGF0IHJlcHJlc2VudHMgdGhhdCBhIGZpbmFsIHN0YXRlIG5vZGVcclxuICogaGFzIGJlZW4gcmVhY2hlZCBpbiB0aGUgcGFyZW50IHN0YXRlIG5vZGUuXHJcbiAqXHJcbiAqIEBwYXJhbSBpZCBUaGUgZmluYWwgc3RhdGUgbm9kZSdzIHBhcmVudCBzdGF0ZSBub2RlIGBpZGBcclxuICogQHBhcmFtIGRhdGEgVGhlIGRhdGEgdG8gcGFzcyBpbnRvIHRoZSBldmVudFxyXG4gKi9cblxuXG5mdW5jdGlvbiBkb25lKGlkLCBkYXRhKSB7XG4gIHZhciB0eXBlID0gQWN0aW9uVHlwZXMuRG9uZVN0YXRlICsgXCIuXCIgKyBpZDtcbiAgdmFyIGV2ZW50T2JqZWN0ID0ge1xuICAgIHR5cGU6IHR5cGUsXG4gICAgZGF0YTogZGF0YVxuICB9O1xuXG4gIGV2ZW50T2JqZWN0LnRvU3RyaW5nID0gZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiB0eXBlO1xuICB9O1xuXG4gIHJldHVybiBldmVudE9iamVjdDtcbn1cbi8qKlxyXG4gKiBSZXR1cm5zIGFuIGV2ZW50IHRoYXQgcmVwcmVzZW50cyB0aGF0IGFuIGludm9rZWQgc2VydmljZSBoYXMgdGVybWluYXRlZC5cclxuICpcclxuICogQW4gaW52b2tlZCBzZXJ2aWNlIGlzIHRlcm1pbmF0ZWQgd2hlbiBpdCBoYXMgcmVhY2hlZCBhIHRvcC1sZXZlbCBmaW5hbCBzdGF0ZSBub2RlLFxyXG4gKiBidXQgbm90IHdoZW4gaXQgaXMgY2FuY2VsZWQuXHJcbiAqXHJcbiAqIEBwYXJhbSBpZCBUaGUgZmluYWwgc3RhdGUgbm9kZSBJRFxyXG4gKiBAcGFyYW0gZGF0YSBUaGUgZGF0YSB0byBwYXNzIGludG8gdGhlIGV2ZW50XHJcbiAqL1xuXG5cbmZ1bmN0aW9uIGRvbmVJbnZva2UoaWQsIGRhdGEpIHtcbiAgdmFyIHR5cGUgPSBBY3Rpb25UeXBlcy5Eb25lSW52b2tlICsgXCIuXCIgKyBpZDtcbiAgdmFyIGV2ZW50T2JqZWN0ID0ge1xuICAgIHR5cGU6IHR5cGUsXG4gICAgZGF0YTogZGF0YVxuICB9O1xuXG4gIGV2ZW50T2JqZWN0LnRvU3RyaW5nID0gZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiB0eXBlO1xuICB9O1xuXG4gIHJldHVybiBldmVudE9iamVjdDtcbn1cblxuZnVuY3Rpb24gZXJyb3IoaWQsIGRhdGEpIHtcbiAgdmFyIHR5cGUgPSBBY3Rpb25UeXBlcy5FcnJvclBsYXRmb3JtICsgXCIuXCIgKyBpZDtcbiAgdmFyIGV2ZW50T2JqZWN0ID0ge1xuICAgIHR5cGU6IHR5cGUsXG4gICAgZGF0YTogZGF0YVxuICB9O1xuXG4gIGV2ZW50T2JqZWN0LnRvU3RyaW5nID0gZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiB0eXBlO1xuICB9O1xuXG4gIHJldHVybiBldmVudE9iamVjdDtcbn1cblxuZnVuY3Rpb24gcHVyZShnZXRBY3Rpb25zKSB7XG4gIHJldHVybiB7XG4gICAgdHlwZTogQWN0aW9uVHlwZXMuUHVyZSxcbiAgICBnZXQ6IGdldEFjdGlvbnNcbiAgfTtcbn1cbi8qKlxyXG4gKiBGb3J3YXJkcyAoc2VuZHMpIGFuIGV2ZW50IHRvIGEgc3BlY2lmaWVkIHNlcnZpY2UuXHJcbiAqXHJcbiAqIEBwYXJhbSB0YXJnZXQgVGhlIHRhcmdldCBzZXJ2aWNlIHRvIGZvcndhcmQgdGhlIGV2ZW50IHRvLlxyXG4gKiBAcGFyYW0gb3B0aW9ucyBPcHRpb25zIHRvIHBhc3MgaW50byB0aGUgc2VuZCBhY3Rpb24gY3JlYXRvci5cclxuICovXG5cblxuZnVuY3Rpb24gZm9yd2FyZFRvKHRhcmdldCwgb3B0aW9ucykge1xuICByZXR1cm4gc2VuZChmdW5jdGlvbiAoXywgZXZlbnQpIHtcbiAgICByZXR1cm4gZXZlbnQ7XG4gIH0sIF9fYXNzaWduKF9fYXNzaWduKHt9LCBvcHRpb25zKSwge1xuICAgIHRvOiB0YXJnZXRcbiAgfSkpO1xufVxuLyoqXHJcbiAqIEVzY2FsYXRlcyBhbiBlcnJvciBieSBzZW5kaW5nIGl0IGFzIGFuIGV2ZW50IHRvIHRoaXMgbWFjaGluZSdzIHBhcmVudC5cclxuICpcclxuICogQHBhcmFtIGVycm9yRGF0YSBUaGUgZXJyb3IgZGF0YSB0byBzZW5kLCBvciB0aGUgZXhwcmVzc2lvbiBmdW5jdGlvbiB0aGF0XHJcbiAqIHRha2VzIGluIHRoZSBgY29udGV4dGAsIGBldmVudGAsIGFuZCBgbWV0YWAsIGFuZCByZXR1cm5zIHRoZSBlcnJvciBkYXRhIHRvIHNlbmQuXHJcbiAqIEBwYXJhbSBvcHRpb25zIE9wdGlvbnMgdG8gcGFzcyBpbnRvIHRoZSBzZW5kIGFjdGlvbiBjcmVhdG9yLlxyXG4gKi9cblxuXG5mdW5jdGlvbiBlc2NhbGF0ZShlcnJvckRhdGEsIG9wdGlvbnMpIHtcbiAgcmV0dXJuIHNlbmRQYXJlbnQoZnVuY3Rpb24gKGNvbnRleHQsIGV2ZW50LCBtZXRhKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHR5cGU6IGVycm9yJDEsXG4gICAgICBkYXRhOiBpc0Z1bmN0aW9uKGVycm9yRGF0YSkgPyBlcnJvckRhdGEoY29udGV4dCwgZXZlbnQsIG1ldGEpIDogZXJyb3JEYXRhXG4gICAgfTtcbiAgfSwgX19hc3NpZ24oX19hc3NpZ24oe30sIG9wdGlvbnMpLCB7XG4gICAgdG86IFNwZWNpYWxUYXJnZXRzLlBhcmVudFxuICB9KSk7XG59XG5cbmZ1bmN0aW9uIGNob29zZShjb25kcykge1xuICByZXR1cm4ge1xuICAgIHR5cGU6IEFjdGlvblR5cGVzLkNob29zZSxcbiAgICBjb25kczogY29uZHNcbiAgfTtcbn1cblxuZnVuY3Rpb24gcmVzb2x2ZUFjdGlvbnMobWFjaGluZSwgY3VycmVudFN0YXRlLCBjdXJyZW50Q29udGV4dCwgX2V2ZW50LCBhY3Rpb25zKSB7XG4gIHZhciBfYSA9IF9fcmVhZChwYXJ0aXRpb24oYWN0aW9ucywgZnVuY3Rpb24gKGFjdGlvbikge1xuICAgIHJldHVybiBhY3Rpb24udHlwZSA9PT0gYXNzaWduJDE7XG4gIH0pLCAyKSxcbiAgICAgIGFzc2lnbkFjdGlvbnMgPSBfYVswXSxcbiAgICAgIG90aGVyQWN0aW9ucyA9IF9hWzFdO1xuXG4gIHZhciB1cGRhdGVkQ29udGV4dCA9IGFzc2lnbkFjdGlvbnMubGVuZ3RoID8gdXBkYXRlQ29udGV4dChjdXJyZW50Q29udGV4dCwgX2V2ZW50LCBhc3NpZ25BY3Rpb25zLCBjdXJyZW50U3RhdGUpIDogY3VycmVudENvbnRleHQ7XG4gIHZhciByZXNvbHZlZEFjdGlvbnMgPSBmbGF0dGVuKG90aGVyQWN0aW9ucy5tYXAoZnVuY3Rpb24gKGFjdGlvbk9iamVjdCkge1xuICAgIHZhciBfYTtcblxuICAgIHN3aXRjaCAoYWN0aW9uT2JqZWN0LnR5cGUpIHtcbiAgICAgIGNhc2UgcmFpc2UkMTpcbiAgICAgICAgcmV0dXJuIHJlc29sdmVSYWlzZShhY3Rpb25PYmplY3QpO1xuXG4gICAgICBjYXNlIHNlbmQkMTpcbiAgICAgICAgdmFyIHNlbmRBY3Rpb24gPSByZXNvbHZlU2VuZChhY3Rpb25PYmplY3QsIHVwZGF0ZWRDb250ZXh0LCBfZXZlbnQsIG1hY2hpbmUub3B0aW9ucy5kZWxheXMpOyAvLyBUT0RPOiBmaXggQWN0aW9uVHlwZXMuSW5pdFxuXG4gICAgICAgIGlmICghSVNfUFJPRFVDVElPTikge1xuICAgICAgICAgIC8vIHdhcm4gYWZ0ZXIgcmVzb2x2aW5nIGFzIHdlIGNhbiBjcmVhdGUgYmV0dGVyIGNvbnRleHR1YWwgbWVzc2FnZSBoZXJlXG4gICAgICAgICAgd2FybighaXNTdHJpbmcoYWN0aW9uT2JqZWN0LmRlbGF5KSB8fCB0eXBlb2Ygc2VuZEFjdGlvbi5kZWxheSA9PT0gJ251bWJlcicsIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTptYXgtbGluZS1sZW5ndGhcbiAgICAgICAgICBcIk5vIGRlbGF5IHJlZmVyZW5jZSBmb3IgZGVsYXkgZXhwcmVzc2lvbiAnXCIgKyBhY3Rpb25PYmplY3QuZGVsYXkgKyBcIicgd2FzIGZvdW5kIG9uIG1hY2hpbmUgJ1wiICsgbWFjaGluZS5pZCArIFwiJ1wiKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBzZW5kQWN0aW9uO1xuXG4gICAgICBjYXNlIGxvZyQxOlxuICAgICAgICByZXR1cm4gcmVzb2x2ZUxvZyhhY3Rpb25PYmplY3QsIHVwZGF0ZWRDb250ZXh0LCBfZXZlbnQpO1xuXG4gICAgICBjYXNlIGNob29zZSQxOlxuICAgICAgICB7XG4gICAgICAgICAgdmFyIGNob29zZUFjdGlvbiA9IGFjdGlvbk9iamVjdDtcbiAgICAgICAgICB2YXIgbWF0Y2hlZEFjdGlvbnMgPSAoX2EgPSBjaG9vc2VBY3Rpb24uY29uZHMuZmluZChmdW5jdGlvbiAoY29uZGl0aW9uKSB7XG4gICAgICAgICAgICB2YXIgZ3VhcmQgPSB0b0d1YXJkKGNvbmRpdGlvbi5jb25kLCBtYWNoaW5lLm9wdGlvbnMuZ3VhcmRzKTtcbiAgICAgICAgICAgIHJldHVybiAhZ3VhcmQgfHwgZXZhbHVhdGVHdWFyZChtYWNoaW5lLCBndWFyZCwgdXBkYXRlZENvbnRleHQsIF9ldmVudCwgY3VycmVudFN0YXRlKTtcbiAgICAgICAgICB9KSkgPT09IG51bGwgfHwgX2EgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9hLmFjdGlvbnM7XG5cbiAgICAgICAgICBpZiAoIW1hdGNoZWRBY3Rpb25zKSB7XG4gICAgICAgICAgICByZXR1cm4gW107XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgdmFyIHJlc29sdmVkID0gcmVzb2x2ZUFjdGlvbnMobWFjaGluZSwgY3VycmVudFN0YXRlLCB1cGRhdGVkQ29udGV4dCwgX2V2ZW50LCB0b0FjdGlvbk9iamVjdHModG9BcnJheShtYXRjaGVkQWN0aW9ucyksIG1hY2hpbmUub3B0aW9ucy5hY3Rpb25zKSk7XG4gICAgICAgICAgdXBkYXRlZENvbnRleHQgPSByZXNvbHZlZFsxXTtcbiAgICAgICAgICByZXR1cm4gcmVzb2x2ZWRbMF07XG4gICAgICAgIH1cblxuICAgICAgY2FzZSBwdXJlJDE6XG4gICAgICAgIHtcbiAgICAgICAgICB2YXIgbWF0Y2hlZEFjdGlvbnMgPSBhY3Rpb25PYmplY3QuZ2V0KHVwZGF0ZWRDb250ZXh0LCBfZXZlbnQuZGF0YSk7XG5cbiAgICAgICAgICBpZiAoIW1hdGNoZWRBY3Rpb25zKSB7XG4gICAgICAgICAgICByZXR1cm4gW107XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgdmFyIHJlc29sdmVkID0gcmVzb2x2ZUFjdGlvbnMobWFjaGluZSwgY3VycmVudFN0YXRlLCB1cGRhdGVkQ29udGV4dCwgX2V2ZW50LCB0b0FjdGlvbk9iamVjdHModG9BcnJheShtYXRjaGVkQWN0aW9ucyksIG1hY2hpbmUub3B0aW9ucy5hY3Rpb25zKSk7XG4gICAgICAgICAgdXBkYXRlZENvbnRleHQgPSByZXNvbHZlZFsxXTtcbiAgICAgICAgICByZXR1cm4gcmVzb2x2ZWRbMF07XG4gICAgICAgIH1cblxuICAgICAgZGVmYXVsdDpcbiAgICAgICAgcmV0dXJuIHRvQWN0aW9uT2JqZWN0KGFjdGlvbk9iamVjdCwgbWFjaGluZS5vcHRpb25zLmFjdGlvbnMpO1xuICAgIH1cbiAgfSkpO1xuICByZXR1cm4gW3Jlc29sdmVkQWN0aW9ucywgdXBkYXRlZENvbnRleHRdO1xufVxuXG5leHBvcnQgeyBhZnRlciwgYXNzaWduLCBjYW5jZWwsIGNob29zZSwgZG9uZSwgZG9uZUludm9rZSwgZXJyb3IsIGVzY2FsYXRlLCBmb3J3YXJkVG8sIGdldEFjdGlvbkZ1bmN0aW9uLCBpbml0RXZlbnQsIGxvZywgcHVyZSwgcmFpc2UsIHJlc29sdmVBY3Rpb25zLCByZXNvbHZlTG9nLCByZXNvbHZlUmFpc2UsIHJlc29sdmVTZW5kLCByZXNwb25kLCBzZW5kLCBzZW5kUGFyZW50LCBzZW5kVXBkYXRlLCBzdGFydCwgc3RvcCwgdG9BY3Rpb25PYmplY3QsIHRvQWN0aW9uT2JqZWN0cywgdG9BY3Rpdml0eURlZmluaXRpb24gfTsiLCJ2YXIgU1RBVEVfREVMSU1JVEVSID0gJy4nO1xudmFyIEVNUFRZX0FDVElWSVRZX01BUCA9IHt9O1xudmFyIERFRkFVTFRfR1VBUkRfVFlQRSA9ICd4c3RhdGUuZ3VhcmQnO1xudmFyIFRBUkdFVExFU1NfS0VZID0gJyc7XG5leHBvcnQgeyBERUZBVUxUX0dVQVJEX1RZUEUsIEVNUFRZX0FDVElWSVRZX01BUCwgU1RBVEVfREVMSU1JVEVSLCBUQVJHRVRMRVNTX0tFWSB9OyIsImltcG9ydCB7IElTX1BST0RVQ1RJT04gfSBmcm9tICcuL2Vudmlyb25tZW50LmpzJztcblxuZnVuY3Rpb24gZ2V0RGV2VG9vbHMoKSB7XG4gIHZhciB3ID0gd2luZG93O1xuXG4gIGlmICghIXcuX194c3RhdGVfXykge1xuICAgIHJldHVybiB3Ll9feHN0YXRlX187XG4gIH1cblxuICByZXR1cm4gdW5kZWZpbmVkO1xufVxuXG5mdW5jdGlvbiByZWdpc3RlclNlcnZpY2Uoc2VydmljZSkge1xuICBpZiAoSVNfUFJPRFVDVElPTiB8fCB0eXBlb2Ygd2luZG93ID09PSAndW5kZWZpbmVkJykge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIHZhciBkZXZUb29scyA9IGdldERldlRvb2xzKCk7XG5cbiAgaWYgKGRldlRvb2xzKSB7XG4gICAgZGV2VG9vbHMucmVnaXN0ZXIoc2VydmljZSk7XG4gIH1cbn1cblxuZXhwb3J0IHsgcmVnaXN0ZXJTZXJ2aWNlIH07IiwidmFyIElTX1BST0RVQ1RJT04gPSBwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gJ3Byb2R1Y3Rpb24nO1xuZXhwb3J0IHsgSVNfUFJPRFVDVElPTiB9OyIsImV4cG9ydCB7IG1hdGNoZXNTdGF0ZSB9IGZyb20gJy4vdXRpbHMuanMnO1xuZXhwb3J0IHsgbWFwU3RhdGUgfSBmcm9tICcuL21hcFN0YXRlLmpzJztcbmV4cG9ydCB7IEFjdGlvblR5cGVzLCBTcGVjaWFsVGFyZ2V0cyB9IGZyb20gJy4vdHlwZXMuanMnO1xuaW1wb3J0IHsgcmFpc2UsIHNlbmQsIHNlbmRQYXJlbnQsIHNlbmRVcGRhdGUsIGxvZywgY2FuY2VsLCBzdGFydCwgc3RvcCwgYXNzaWduLCBhZnRlciwgZG9uZSwgcmVzcG9uZCwgZm9yd2FyZFRvLCBlc2NhbGF0ZSwgY2hvb3NlLCBwdXJlIH0gZnJvbSAnLi9hY3Rpb25zLmpzJztcbmV4cG9ydCB7IGFzc2lnbiwgZG9uZUludm9rZSwgZm9yd2FyZFRvLCBzZW5kLCBzZW5kUGFyZW50LCBzZW5kVXBkYXRlIH0gZnJvbSAnLi9hY3Rpb25zLmpzJztcbmV4cG9ydCB7IFN0YXRlIH0gZnJvbSAnLi9TdGF0ZS5qcyc7XG5leHBvcnQgeyBTdGF0ZU5vZGUgfSBmcm9tICcuL1N0YXRlTm9kZS5qcyc7XG5leHBvcnQgeyBNYWNoaW5lLCBjcmVhdGVNYWNoaW5lIH0gZnJvbSAnLi9NYWNoaW5lLmpzJztcbmV4cG9ydCB7IEludGVycHJldGVyLCBpbnRlcnByZXQsIHNwYXduIH0gZnJvbSAnLi9pbnRlcnByZXRlci5qcyc7XG5leHBvcnQgeyBtYXRjaFN0YXRlIH0gZnJvbSAnLi9tYXRjaC5qcyc7XG52YXIgYWN0aW9ucyA9IHtcbiAgcmFpc2U6IHJhaXNlLFxuICBzZW5kOiBzZW5kLFxuICBzZW5kUGFyZW50OiBzZW5kUGFyZW50LFxuICBzZW5kVXBkYXRlOiBzZW5kVXBkYXRlLFxuICBsb2c6IGxvZyxcbiAgY2FuY2VsOiBjYW5jZWwsXG4gIHN0YXJ0OiBzdGFydCxcbiAgc3RvcDogc3RvcCxcbiAgYXNzaWduOiBhc3NpZ24sXG4gIGFmdGVyOiBhZnRlcixcbiAgZG9uZTogZG9uZSxcbiAgcmVzcG9uZDogcmVzcG9uZCxcbiAgZm9yd2FyZFRvOiBmb3J3YXJkVG8sXG4gIGVzY2FsYXRlOiBlc2NhbGF0ZSxcbiAgY2hvb3NlOiBjaG9vc2UsXG4gIHB1cmU6IHB1cmVcbn07XG5leHBvcnQgeyBhY3Rpb25zIH07IiwiaW1wb3J0IHsgX192YWx1ZXMsIF9fYXNzaWduLCBfX3NwcmVhZCB9IGZyb20gJy4vX3ZpcnR1YWwvX3RzbGliLmpzJztcbmltcG9ydCB7IElTX1BST0RVQ1RJT04gfSBmcm9tICcuL2Vudmlyb25tZW50LmpzJztcbmltcG9ydCB7IHdhcm4sIG1hcENvbnRleHQsIGlzRnVuY3Rpb24sIGtleXMsIHRvU0NYTUxFdmVudCwgdG9JbnZva2VTb3VyY2UsIGlzUHJvbWlzZUxpa2UsIGlzT2JzZXJ2YWJsZSwgaXNNYWNoaW5lLCByZXBvcnRVbmhhbmRsZWRFeGNlcHRpb25Pbkludm9jYXRpb24sIHN5bWJvbE9ic2VydmFibGUsIGlzQXJyYXksIHRvRXZlbnRPYmplY3QsIGlzU3RyaW5nLCB1bmlxdWVJZCB9IGZyb20gJy4vdXRpbHMuanMnO1xuaW1wb3J0IHsgQWN0aW9uVHlwZXMsIFNwZWNpYWxUYXJnZXRzIH0gZnJvbSAnLi90eXBlcy5qcyc7XG5pbXBvcnQgeyBpc0luRmluYWxTdGF0ZSB9IGZyb20gJy4vc3RhdGVVdGlscy5qcyc7XG5pbXBvcnQgeyBlcnJvclBsYXRmb3JtLCBsb2csIHN0b3AsIHN0YXJ0LCBjYW5jZWwsIHNlbmQsIHVwZGF0ZSwgZXJyb3IgYXMgZXJyb3IkMSB9IGZyb20gJy4vYWN0aW9uVHlwZXMuanMnO1xuaW1wb3J0IHsgZG9uZUludm9rZSwgaW5pdEV2ZW50LCBnZXRBY3Rpb25GdW5jdGlvbiwgZXJyb3IgfSBmcm9tICcuL2FjdGlvbnMuanMnO1xuaW1wb3J0IHsgaXNTdGF0ZSwgU3RhdGUsIGJpbmRBY3Rpb25Ub1N0YXRlIH0gZnJvbSAnLi9TdGF0ZS5qcyc7XG5pbXBvcnQgeyBwcm92aWRlLCBjb25zdW1lIH0gZnJvbSAnLi9zZXJ2aWNlU2NvcGUuanMnO1xuaW1wb3J0IHsgaXNBY3RvciwgY3JlYXRlRGVmZXJyZWRBY3RvciB9IGZyb20gJy4vQWN0b3IuanMnO1xuaW1wb3J0IHsgU2NoZWR1bGVyIH0gZnJvbSAnLi9zY2hlZHVsZXIuanMnO1xuaW1wb3J0IHsgcmVnaXN0cnkgfSBmcm9tICcuL3JlZ2lzdHJ5LmpzJztcbmltcG9ydCB7IHJlZ2lzdGVyU2VydmljZSB9IGZyb20gJy4vZGV2VG9vbHMuanMnO1xudmFyIERFRkFVTFRfU1BBV05fT1BUSU9OUyA9IHtcbiAgc3luYzogZmFsc2UsXG4gIGF1dG9Gb3J3YXJkOiBmYWxzZVxufTtcbnZhciBJbnRlcnByZXRlclN0YXR1cztcblxuKGZ1bmN0aW9uIChJbnRlcnByZXRlclN0YXR1cykge1xuICBJbnRlcnByZXRlclN0YXR1c1tJbnRlcnByZXRlclN0YXR1c1tcIk5vdFN0YXJ0ZWRcIl0gPSAwXSA9IFwiTm90U3RhcnRlZFwiO1xuICBJbnRlcnByZXRlclN0YXR1c1tJbnRlcnByZXRlclN0YXR1c1tcIlJ1bm5pbmdcIl0gPSAxXSA9IFwiUnVubmluZ1wiO1xuICBJbnRlcnByZXRlclN0YXR1c1tJbnRlcnByZXRlclN0YXR1c1tcIlN0b3BwZWRcIl0gPSAyXSA9IFwiU3RvcHBlZFwiO1xufSkoSW50ZXJwcmV0ZXJTdGF0dXMgfHwgKEludGVycHJldGVyU3RhdHVzID0ge30pKTtcblxudmFyIEludGVycHJldGVyID1cbi8qI19fUFVSRV9fKi9cblxuLyoqIEBjbGFzcyAqL1xuZnVuY3Rpb24gKCkge1xuICAvKipcclxuICAgKiBDcmVhdGVzIGEgbmV3IEludGVycHJldGVyIGluc3RhbmNlIChpLmUuLCBzZXJ2aWNlKSBmb3IgdGhlIGdpdmVuIG1hY2hpbmUgd2l0aCB0aGUgcHJvdmlkZWQgb3B0aW9ucywgaWYgYW55LlxyXG4gICAqXHJcbiAgICogQHBhcmFtIG1hY2hpbmUgVGhlIG1hY2hpbmUgdG8gYmUgaW50ZXJwcmV0ZWRcclxuICAgKiBAcGFyYW0gb3B0aW9ucyBJbnRlcnByZXRlciBvcHRpb25zXHJcbiAgICovXG4gIGZ1bmN0aW9uIEludGVycHJldGVyKG1hY2hpbmUsIG9wdGlvbnMpIHtcbiAgICB2YXIgX3RoaXMgPSB0aGlzO1xuXG4gICAgaWYgKG9wdGlvbnMgPT09IHZvaWQgMCkge1xuICAgICAgb3B0aW9ucyA9IEludGVycHJldGVyLmRlZmF1bHRPcHRpb25zO1xuICAgIH1cblxuICAgIHRoaXMubWFjaGluZSA9IG1hY2hpbmU7XG4gICAgdGhpcy5zY2hlZHVsZXIgPSBuZXcgU2NoZWR1bGVyKCk7XG4gICAgdGhpcy5kZWxheWVkRXZlbnRzTWFwID0ge307XG4gICAgdGhpcy5saXN0ZW5lcnMgPSBuZXcgU2V0KCk7XG4gICAgdGhpcy5jb250ZXh0TGlzdGVuZXJzID0gbmV3IFNldCgpO1xuICAgIHRoaXMuc3RvcExpc3RlbmVycyA9IG5ldyBTZXQoKTtcbiAgICB0aGlzLmRvbmVMaXN0ZW5lcnMgPSBuZXcgU2V0KCk7XG4gICAgdGhpcy5ldmVudExpc3RlbmVycyA9IG5ldyBTZXQoKTtcbiAgICB0aGlzLnNlbmRMaXN0ZW5lcnMgPSBuZXcgU2V0KCk7XG4gICAgLyoqXHJcbiAgICAgKiBXaGV0aGVyIHRoZSBzZXJ2aWNlIGlzIHN0YXJ0ZWQuXHJcbiAgICAgKi9cblxuICAgIHRoaXMuaW5pdGlhbGl6ZWQgPSBmYWxzZTtcbiAgICB0aGlzLl9zdGF0dXMgPSBJbnRlcnByZXRlclN0YXR1cy5Ob3RTdGFydGVkO1xuICAgIHRoaXMuY2hpbGRyZW4gPSBuZXcgTWFwKCk7XG4gICAgdGhpcy5mb3J3YXJkVG8gPSBuZXcgU2V0KCk7XG4gICAgLyoqXHJcbiAgICAgKiBBbGlhcyBmb3IgSW50ZXJwcmV0ZXIucHJvdG90eXBlLnN0YXJ0XHJcbiAgICAgKi9cblxuICAgIHRoaXMuaW5pdCA9IHRoaXMuc3RhcnQ7XG4gICAgLyoqXHJcbiAgICAgKiBTZW5kcyBhbiBldmVudCB0byB0aGUgcnVubmluZyBpbnRlcnByZXRlciB0byB0cmlnZ2VyIGEgdHJhbnNpdGlvbi5cclxuICAgICAqXHJcbiAgICAgKiBBbiBhcnJheSBvZiBldmVudHMgKGJhdGNoZWQpIGNhbiBiZSBzZW50IGFzIHdlbGwsIHdoaWNoIHdpbGwgc2VuZCBhbGxcclxuICAgICAqIGJhdGNoZWQgZXZlbnRzIHRvIHRoZSBydW5uaW5nIGludGVycHJldGVyLiBUaGUgbGlzdGVuZXJzIHdpbGwgYmVcclxuICAgICAqIG5vdGlmaWVkIG9ubHkgKipvbmNlKiogd2hlbiBhbGwgZXZlbnRzIGFyZSBwcm9jZXNzZWQuXHJcbiAgICAgKlxyXG4gICAgICogQHBhcmFtIGV2ZW50IFRoZSBldmVudChzKSB0byBzZW5kXHJcbiAgICAgKi9cblxuICAgIHRoaXMuc2VuZCA9IGZ1bmN0aW9uIChldmVudCwgcGF5bG9hZCkge1xuICAgICAgaWYgKGlzQXJyYXkoZXZlbnQpKSB7XG4gICAgICAgIF90aGlzLmJhdGNoKGV2ZW50KTtcblxuICAgICAgICByZXR1cm4gX3RoaXMuc3RhdGU7XG4gICAgICB9XG5cbiAgICAgIHZhciBfZXZlbnQgPSB0b1NDWE1MRXZlbnQodG9FdmVudE9iamVjdChldmVudCwgcGF5bG9hZCkpO1xuXG4gICAgICBpZiAoX3RoaXMuX3N0YXR1cyA9PT0gSW50ZXJwcmV0ZXJTdGF0dXMuU3RvcHBlZCkge1xuICAgICAgICAvLyBkbyBub3RoaW5nXG4gICAgICAgIGlmICghSVNfUFJPRFVDVElPTikge1xuICAgICAgICAgIHdhcm4oZmFsc2UsIFwiRXZlbnQgXFxcIlwiICsgX2V2ZW50Lm5hbWUgKyBcIlxcXCIgd2FzIHNlbnQgdG8gc3RvcHBlZCBzZXJ2aWNlIFxcXCJcIiArIF90aGlzLm1hY2hpbmUuaWQgKyBcIlxcXCIuIFRoaXMgc2VydmljZSBoYXMgYWxyZWFkeSByZWFjaGVkIGl0cyBmaW5hbCBzdGF0ZSwgYW5kIHdpbGwgbm90IHRyYW5zaXRpb24uXFxuRXZlbnQ6IFwiICsgSlNPTi5zdHJpbmdpZnkoX2V2ZW50LmRhdGEpKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBfdGhpcy5zdGF0ZTtcbiAgICAgIH1cblxuICAgICAgaWYgKF90aGlzLl9zdGF0dXMgPT09IEludGVycHJldGVyU3RhdHVzLk5vdFN0YXJ0ZWQgJiYgX3RoaXMub3B0aW9ucy5kZWZlckV2ZW50cykge1xuICAgICAgICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6bm8tY29uc29sZVxuICAgICAgICBpZiAoIUlTX1BST0RVQ1RJT04pIHtcbiAgICAgICAgICB3YXJuKGZhbHNlLCBcIkV2ZW50IFxcXCJcIiArIF9ldmVudC5uYW1lICsgXCJcXFwiIHdhcyBzZW50IHRvIHVuaW5pdGlhbGl6ZWQgc2VydmljZSBcXFwiXCIgKyBfdGhpcy5tYWNoaW5lLmlkICsgXCJcXFwiIGFuZCBpcyBkZWZlcnJlZC4gTWFrZSBzdXJlIC5zdGFydCgpIGlzIGNhbGxlZCBmb3IgdGhpcyBzZXJ2aWNlLlxcbkV2ZW50OiBcIiArIEpTT04uc3RyaW5naWZ5KF9ldmVudC5kYXRhKSk7XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSBpZiAoX3RoaXMuX3N0YXR1cyAhPT0gSW50ZXJwcmV0ZXJTdGF0dXMuUnVubmluZykge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJFdmVudCBcXFwiXCIgKyBfZXZlbnQubmFtZSArIFwiXFxcIiB3YXMgc2VudCB0byB1bmluaXRpYWxpemVkIHNlcnZpY2UgXFxcIlwiICsgX3RoaXMubWFjaGluZS5pZCArIFwiXFxcIi4gTWFrZSBzdXJlIC5zdGFydCgpIGlzIGNhbGxlZCBmb3IgdGhpcyBzZXJ2aWNlLCBvciBzZXQgeyBkZWZlckV2ZW50czogdHJ1ZSB9IGluIHRoZSBzZXJ2aWNlIG9wdGlvbnMuXFxuRXZlbnQ6IFwiICsgSlNPTi5zdHJpbmdpZnkoX2V2ZW50LmRhdGEpKTtcbiAgICAgIH1cblxuICAgICAgX3RoaXMuc2NoZWR1bGVyLnNjaGVkdWxlKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgLy8gRm9yd2FyZCBjb3B5IG9mIGV2ZW50IHRvIGNoaWxkIGFjdG9yc1xuICAgICAgICBfdGhpcy5mb3J3YXJkKF9ldmVudCk7XG5cbiAgICAgICAgdmFyIG5leHRTdGF0ZSA9IF90aGlzLm5leHRTdGF0ZShfZXZlbnQpO1xuXG4gICAgICAgIF90aGlzLnVwZGF0ZShuZXh0U3RhdGUsIF9ldmVudCk7XG4gICAgICB9KTtcblxuICAgICAgcmV0dXJuIF90aGlzLl9zdGF0ZTsgLy8gVE9ETzogZGVwcmVjYXRlIChzaG91bGQgcmV0dXJuIHZvaWQpXG4gICAgICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6c2VtaWNvbG9uXG4gICAgfTtcblxuICAgIHRoaXMuc2VuZFRvID0gZnVuY3Rpb24gKGV2ZW50LCB0bykge1xuICAgICAgdmFyIGlzUGFyZW50ID0gX3RoaXMucGFyZW50ICYmICh0byA9PT0gU3BlY2lhbFRhcmdldHMuUGFyZW50IHx8IF90aGlzLnBhcmVudC5pZCA9PT0gdG8pO1xuICAgICAgdmFyIHRhcmdldCA9IGlzUGFyZW50ID8gX3RoaXMucGFyZW50IDogaXNBY3Rvcih0bykgPyB0byA6IF90aGlzLmNoaWxkcmVuLmdldCh0bykgfHwgcmVnaXN0cnkuZ2V0KHRvKTtcblxuICAgICAgaWYgKCF0YXJnZXQpIHtcbiAgICAgICAgaWYgKCFpc1BhcmVudCkge1xuICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIlVuYWJsZSB0byBzZW5kIGV2ZW50IHRvIGNoaWxkICdcIiArIHRvICsgXCInIGZyb20gc2VydmljZSAnXCIgKyBfdGhpcy5pZCArIFwiJy5cIik7XG4gICAgICAgIH0gLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOm5vLWNvbnNvbGVcblxuXG4gICAgICAgIGlmICghSVNfUFJPRFVDVElPTikge1xuICAgICAgICAgIHdhcm4oZmFsc2UsIFwiU2VydmljZSAnXCIgKyBfdGhpcy5pZCArIFwiJyBoYXMgbm8gcGFyZW50OiB1bmFibGUgdG8gc2VuZCBldmVudCBcIiArIGV2ZW50LnR5cGUpO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBpZiAoJ21hY2hpbmUnIGluIHRhcmdldCkge1xuICAgICAgICAvLyBTZW5kIFNDWE1MIGV2ZW50cyB0byBtYWNoaW5lc1xuICAgICAgICB0YXJnZXQuc2VuZChfX2Fzc2lnbihfX2Fzc2lnbih7fSwgZXZlbnQpLCB7XG4gICAgICAgICAgbmFtZTogZXZlbnQubmFtZSA9PT0gZXJyb3IkMSA/IFwiXCIgKyBlcnJvcihfdGhpcy5pZCkgOiBldmVudC5uYW1lLFxuICAgICAgICAgIG9yaWdpbjogX3RoaXMuc2Vzc2lvbklkXG4gICAgICAgIH0pKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIC8vIFNlbmQgbm9ybWFsIGV2ZW50cyB0byBvdGhlciB0YXJnZXRzXG4gICAgICAgIHRhcmdldC5zZW5kKGV2ZW50LmRhdGEpO1xuICAgICAgfVxuICAgIH07XG5cbiAgICB2YXIgcmVzb2x2ZWRPcHRpb25zID0gX19hc3NpZ24oX19hc3NpZ24oe30sIEludGVycHJldGVyLmRlZmF1bHRPcHRpb25zKSwgb3B0aW9ucyk7XG5cbiAgICB2YXIgY2xvY2sgPSByZXNvbHZlZE9wdGlvbnMuY2xvY2ssXG4gICAgICAgIGxvZ2dlciA9IHJlc29sdmVkT3B0aW9ucy5sb2dnZXIsXG4gICAgICAgIHBhcmVudCA9IHJlc29sdmVkT3B0aW9ucy5wYXJlbnQsXG4gICAgICAgIGlkID0gcmVzb2x2ZWRPcHRpb25zLmlkO1xuICAgIHZhciByZXNvbHZlZElkID0gaWQgIT09IHVuZGVmaW5lZCA/IGlkIDogbWFjaGluZS5pZDtcbiAgICB0aGlzLmlkID0gcmVzb2x2ZWRJZDtcbiAgICB0aGlzLmxvZ2dlciA9IGxvZ2dlcjtcbiAgICB0aGlzLmNsb2NrID0gY2xvY2s7XG4gICAgdGhpcy5wYXJlbnQgPSBwYXJlbnQ7XG4gICAgdGhpcy5vcHRpb25zID0gcmVzb2x2ZWRPcHRpb25zO1xuICAgIHRoaXMuc2NoZWR1bGVyID0gbmV3IFNjaGVkdWxlcih7XG4gICAgICBkZWZlckV2ZW50czogdGhpcy5vcHRpb25zLmRlZmVyRXZlbnRzXG4gICAgfSk7XG4gICAgdGhpcy5zZXNzaW9uSWQgPSByZWdpc3RyeS5ib29rSWQoKTtcbiAgfVxuXG4gIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShJbnRlcnByZXRlci5wcm90b3R5cGUsIFwiaW5pdGlhbFN0YXRlXCIsIHtcbiAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG5cbiAgICAgIGlmICh0aGlzLl9pbml0aWFsU3RhdGUpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2luaXRpYWxTdGF0ZTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHByb3ZpZGUodGhpcywgZnVuY3Rpb24gKCkge1xuICAgICAgICBfdGhpcy5faW5pdGlhbFN0YXRlID0gX3RoaXMubWFjaGluZS5pbml0aWFsU3RhdGU7XG4gICAgICAgIHJldHVybiBfdGhpcy5faW5pdGlhbFN0YXRlO1xuICAgICAgfSk7XG4gICAgfSxcbiAgICBlbnVtZXJhYmxlOiBmYWxzZSxcbiAgICBjb25maWd1cmFibGU6IHRydWVcbiAgfSk7XG4gIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShJbnRlcnByZXRlci5wcm90b3R5cGUsIFwic3RhdGVcIiwge1xuICAgIGdldDogZnVuY3Rpb24gKCkge1xuICAgICAgaWYgKCFJU19QUk9EVUNUSU9OKSB7XG4gICAgICAgIHdhcm4odGhpcy5fc3RhdHVzICE9PSBJbnRlcnByZXRlclN0YXR1cy5Ob3RTdGFydGVkLCBcIkF0dGVtcHRlZCB0byByZWFkIHN0YXRlIGZyb20gdW5pbml0aWFsaXplZCBzZXJ2aWNlICdcIiArIHRoaXMuaWQgKyBcIicuIE1ha2Ugc3VyZSB0aGUgc2VydmljZSBpcyBzdGFydGVkIGZpcnN0LlwiKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHRoaXMuX3N0YXRlO1xuICAgIH0sXG4gICAgZW51bWVyYWJsZTogZmFsc2UsXG4gICAgY29uZmlndXJhYmxlOiB0cnVlXG4gIH0pO1xuICAvKipcclxuICAgKiBFeGVjdXRlcyB0aGUgYWN0aW9ucyBvZiB0aGUgZ2l2ZW4gc3RhdGUsIHdpdGggdGhhdCBzdGF0ZSdzIGBjb250ZXh0YCBhbmQgYGV2ZW50YC5cclxuICAgKlxyXG4gICAqIEBwYXJhbSBzdGF0ZSBUaGUgc3RhdGUgd2hvc2UgYWN0aW9ucyB3aWxsIGJlIGV4ZWN1dGVkXHJcbiAgICogQHBhcmFtIGFjdGlvbnNDb25maWcgVGhlIGFjdGlvbiBpbXBsZW1lbnRhdGlvbnMgdG8gdXNlXHJcbiAgICovXG5cbiAgSW50ZXJwcmV0ZXIucHJvdG90eXBlLmV4ZWN1dGUgPSBmdW5jdGlvbiAoc3RhdGUsIGFjdGlvbnNDb25maWcpIHtcbiAgICB2YXIgZV8xLCBfYTtcblxuICAgIHRyeSB7XG4gICAgICBmb3IgKHZhciBfYiA9IF9fdmFsdWVzKHN0YXRlLmFjdGlvbnMpLCBfYyA9IF9iLm5leHQoKTsgIV9jLmRvbmU7IF9jID0gX2IubmV4dCgpKSB7XG4gICAgICAgIHZhciBhY3Rpb24gPSBfYy52YWx1ZTtcbiAgICAgICAgdGhpcy5leGVjKGFjdGlvbiwgc3RhdGUsIGFjdGlvbnNDb25maWcpO1xuICAgICAgfVxuICAgIH0gY2F0Y2ggKGVfMV8xKSB7XG4gICAgICBlXzEgPSB7XG4gICAgICAgIGVycm9yOiBlXzFfMVxuICAgICAgfTtcbiAgICB9IGZpbmFsbHkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgaWYgKF9jICYmICFfYy5kb25lICYmIChfYSA9IF9iLnJldHVybikpIF9hLmNhbGwoX2IpO1xuICAgICAgfSBmaW5hbGx5IHtcbiAgICAgICAgaWYgKGVfMSkgdGhyb3cgZV8xLmVycm9yO1xuICAgICAgfVxuICAgIH1cbiAgfTtcblxuICBJbnRlcnByZXRlci5wcm90b3R5cGUudXBkYXRlID0gZnVuY3Rpb24gKHN0YXRlLCBfZXZlbnQpIHtcbiAgICB2YXIgZV8yLCBfYSwgZV8zLCBfYiwgZV80LCBfYywgZV81LCBfZDtcblxuICAgIHZhciBfdGhpcyA9IHRoaXM7IC8vIEF0dGFjaCBzZXNzaW9uIElEIHRvIHN0YXRlXG5cblxuICAgIHN0YXRlLl9zZXNzaW9uaWQgPSB0aGlzLnNlc3Npb25JZDsgLy8gVXBkYXRlIHN0YXRlXG5cbiAgICB0aGlzLl9zdGF0ZSA9IHN0YXRlOyAvLyBFeGVjdXRlIGFjdGlvbnNcblxuICAgIGlmICh0aGlzLm9wdGlvbnMuZXhlY3V0ZSkge1xuICAgICAgdGhpcy5leGVjdXRlKHRoaXMuc3RhdGUpO1xuICAgIH0gLy8gRGV2IHRvb2xzXG5cblxuICAgIGlmICh0aGlzLmRldlRvb2xzKSB7XG4gICAgICB0aGlzLmRldlRvb2xzLnNlbmQoX2V2ZW50LmRhdGEsIHN0YXRlKTtcbiAgICB9IC8vIEV4ZWN1dGUgbGlzdGVuZXJzXG5cblxuICAgIGlmIChzdGF0ZS5ldmVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgZm9yICh2YXIgX2UgPSBfX3ZhbHVlcyh0aGlzLmV2ZW50TGlzdGVuZXJzKSwgX2YgPSBfZS5uZXh0KCk7ICFfZi5kb25lOyBfZiA9IF9lLm5leHQoKSkge1xuICAgICAgICAgIHZhciBsaXN0ZW5lciA9IF9mLnZhbHVlO1xuICAgICAgICAgIGxpc3RlbmVyKHN0YXRlLmV2ZW50KTtcbiAgICAgICAgfVxuICAgICAgfSBjYXRjaCAoZV8yXzEpIHtcbiAgICAgICAgZV8yID0ge1xuICAgICAgICAgIGVycm9yOiBlXzJfMVxuICAgICAgICB9O1xuICAgICAgfSBmaW5hbGx5IHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICBpZiAoX2YgJiYgIV9mLmRvbmUgJiYgKF9hID0gX2UucmV0dXJuKSkgX2EuY2FsbChfZSk7XG4gICAgICAgIH0gZmluYWxseSB7XG4gICAgICAgICAgaWYgKGVfMikgdGhyb3cgZV8yLmVycm9yO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgdHJ5IHtcbiAgICAgIGZvciAodmFyIF9nID0gX192YWx1ZXModGhpcy5saXN0ZW5lcnMpLCBfaCA9IF9nLm5leHQoKTsgIV9oLmRvbmU7IF9oID0gX2cubmV4dCgpKSB7XG4gICAgICAgIHZhciBsaXN0ZW5lciA9IF9oLnZhbHVlO1xuICAgICAgICBsaXN0ZW5lcihzdGF0ZSwgc3RhdGUuZXZlbnQpO1xuICAgICAgfVxuICAgIH0gY2F0Y2ggKGVfM18xKSB7XG4gICAgICBlXzMgPSB7XG4gICAgICAgIGVycm9yOiBlXzNfMVxuICAgICAgfTtcbiAgICB9IGZpbmFsbHkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgaWYgKF9oICYmICFfaC5kb25lICYmIChfYiA9IF9nLnJldHVybikpIF9iLmNhbGwoX2cpO1xuICAgICAgfSBmaW5hbGx5IHtcbiAgICAgICAgaWYgKGVfMykgdGhyb3cgZV8zLmVycm9yO1xuICAgICAgfVxuICAgIH1cblxuICAgIHRyeSB7XG4gICAgICBmb3IgKHZhciBfaiA9IF9fdmFsdWVzKHRoaXMuY29udGV4dExpc3RlbmVycyksIF9rID0gX2oubmV4dCgpOyAhX2suZG9uZTsgX2sgPSBfai5uZXh0KCkpIHtcbiAgICAgICAgdmFyIGNvbnRleHRMaXN0ZW5lciA9IF9rLnZhbHVlO1xuICAgICAgICBjb250ZXh0TGlzdGVuZXIodGhpcy5zdGF0ZS5jb250ZXh0LCB0aGlzLnN0YXRlLmhpc3RvcnkgPyB0aGlzLnN0YXRlLmhpc3RvcnkuY29udGV4dCA6IHVuZGVmaW5lZCk7XG4gICAgICB9XG4gICAgfSBjYXRjaCAoZV80XzEpIHtcbiAgICAgIGVfNCA9IHtcbiAgICAgICAgZXJyb3I6IGVfNF8xXG4gICAgICB9O1xuICAgIH0gZmluYWxseSB7XG4gICAgICB0cnkge1xuICAgICAgICBpZiAoX2sgJiYgIV9rLmRvbmUgJiYgKF9jID0gX2oucmV0dXJuKSkgX2MuY2FsbChfaik7XG4gICAgICB9IGZpbmFsbHkge1xuICAgICAgICBpZiAoZV80KSB0aHJvdyBlXzQuZXJyb3I7XG4gICAgICB9XG4gICAgfVxuXG4gICAgdmFyIGlzRG9uZSA9IGlzSW5GaW5hbFN0YXRlKHN0YXRlLmNvbmZpZ3VyYXRpb24gfHwgW10sIHRoaXMubWFjaGluZSk7XG5cbiAgICBpZiAodGhpcy5zdGF0ZS5jb25maWd1cmF0aW9uICYmIGlzRG9uZSkge1xuICAgICAgLy8gZ2V0IGZpbmFsIGNoaWxkIHN0YXRlIG5vZGVcbiAgICAgIHZhciBmaW5hbENoaWxkU3RhdGVOb2RlID0gc3RhdGUuY29uZmlndXJhdGlvbi5maW5kKGZ1bmN0aW9uIChzbikge1xuICAgICAgICByZXR1cm4gc24udHlwZSA9PT0gJ2ZpbmFsJyAmJiBzbi5wYXJlbnQgPT09IF90aGlzLm1hY2hpbmU7XG4gICAgICB9KTtcbiAgICAgIHZhciBkb25lRGF0YSA9IGZpbmFsQ2hpbGRTdGF0ZU5vZGUgJiYgZmluYWxDaGlsZFN0YXRlTm9kZS5kb25lRGF0YSA/IG1hcENvbnRleHQoZmluYWxDaGlsZFN0YXRlTm9kZS5kb25lRGF0YSwgc3RhdGUuY29udGV4dCwgX2V2ZW50KSA6IHVuZGVmaW5lZDtcblxuICAgICAgdHJ5IHtcbiAgICAgICAgZm9yICh2YXIgX2wgPSBfX3ZhbHVlcyh0aGlzLmRvbmVMaXN0ZW5lcnMpLCBfbSA9IF9sLm5leHQoKTsgIV9tLmRvbmU7IF9tID0gX2wubmV4dCgpKSB7XG4gICAgICAgICAgdmFyIGxpc3RlbmVyID0gX20udmFsdWU7XG4gICAgICAgICAgbGlzdGVuZXIoZG9uZUludm9rZSh0aGlzLmlkLCBkb25lRGF0YSkpO1xuICAgICAgICB9XG4gICAgICB9IGNhdGNoIChlXzVfMSkge1xuICAgICAgICBlXzUgPSB7XG4gICAgICAgICAgZXJyb3I6IGVfNV8xXG4gICAgICAgIH07XG4gICAgICB9IGZpbmFsbHkge1xuICAgICAgICB0cnkge1xuICAgICAgICAgIGlmIChfbSAmJiAhX20uZG9uZSAmJiAoX2QgPSBfbC5yZXR1cm4pKSBfZC5jYWxsKF9sKTtcbiAgICAgICAgfSBmaW5hbGx5IHtcbiAgICAgICAgICBpZiAoZV81KSB0aHJvdyBlXzUuZXJyb3I7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgdGhpcy5zdG9wKCk7XG4gICAgfVxuICB9O1xuICAvKlxyXG4gICAqIEFkZHMgYSBsaXN0ZW5lciB0aGF0IGlzIG5vdGlmaWVkIHdoZW5ldmVyIGEgc3RhdGUgdHJhbnNpdGlvbiBoYXBwZW5zLiBUaGUgbGlzdGVuZXIgaXMgY2FsbGVkIHdpdGhcclxuICAgKiB0aGUgbmV4dCBzdGF0ZSBhbmQgdGhlIGV2ZW50IG9iamVjdCB0aGF0IGNhdXNlZCB0aGUgc3RhdGUgdHJhbnNpdGlvbi5cclxuICAgKlxyXG4gICAqIEBwYXJhbSBsaXN0ZW5lciBUaGUgc3RhdGUgbGlzdGVuZXJcclxuICAgKi9cblxuXG4gIEludGVycHJldGVyLnByb3RvdHlwZS5vblRyYW5zaXRpb24gPSBmdW5jdGlvbiAobGlzdGVuZXIpIHtcbiAgICB0aGlzLmxpc3RlbmVycy5hZGQobGlzdGVuZXIpOyAvLyBTZW5kIGN1cnJlbnQgc3RhdGUgdG8gbGlzdGVuZXJcblxuICAgIGlmICh0aGlzLl9zdGF0dXMgPT09IEludGVycHJldGVyU3RhdHVzLlJ1bm5pbmcpIHtcbiAgICAgIGxpc3RlbmVyKHRoaXMuc3RhdGUsIHRoaXMuc3RhdGUuZXZlbnQpO1xuICAgIH1cblxuICAgIHJldHVybiB0aGlzO1xuICB9O1xuXG4gIEludGVycHJldGVyLnByb3RvdHlwZS5zdWJzY3JpYmUgPSBmdW5jdGlvbiAobmV4dExpc3RlbmVyT3JPYnNlcnZlciwgXywgLy8gVE9ETzogZXJyb3IgbGlzdGVuZXJcbiAgY29tcGxldGVMaXN0ZW5lcikge1xuICAgIHZhciBfdGhpcyA9IHRoaXM7XG5cbiAgICBpZiAoIW5leHRMaXN0ZW5lck9yT2JzZXJ2ZXIpIHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIHVuc3Vic2NyaWJlOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgcmV0dXJuIHZvaWQgMDtcbiAgICAgICAgfVxuICAgICAgfTtcbiAgICB9XG5cbiAgICB2YXIgbGlzdGVuZXI7XG4gICAgdmFyIHJlc29sdmVkQ29tcGxldGVMaXN0ZW5lciA9IGNvbXBsZXRlTGlzdGVuZXI7XG5cbiAgICBpZiAodHlwZW9mIG5leHRMaXN0ZW5lck9yT2JzZXJ2ZXIgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgIGxpc3RlbmVyID0gbmV4dExpc3RlbmVyT3JPYnNlcnZlcjtcbiAgICB9IGVsc2Uge1xuICAgICAgbGlzdGVuZXIgPSBuZXh0TGlzdGVuZXJPck9ic2VydmVyLm5leHQuYmluZChuZXh0TGlzdGVuZXJPck9ic2VydmVyKTtcbiAgICAgIHJlc29sdmVkQ29tcGxldGVMaXN0ZW5lciA9IG5leHRMaXN0ZW5lck9yT2JzZXJ2ZXIuY29tcGxldGUuYmluZChuZXh0TGlzdGVuZXJPck9ic2VydmVyKTtcbiAgICB9XG5cbiAgICB0aGlzLmxpc3RlbmVycy5hZGQobGlzdGVuZXIpOyAvLyBTZW5kIGN1cnJlbnQgc3RhdGUgdG8gbGlzdGVuZXJcblxuICAgIGlmICh0aGlzLl9zdGF0dXMgPT09IEludGVycHJldGVyU3RhdHVzLlJ1bm5pbmcpIHtcbiAgICAgIGxpc3RlbmVyKHRoaXMuc3RhdGUpO1xuICAgIH1cblxuICAgIGlmIChyZXNvbHZlZENvbXBsZXRlTGlzdGVuZXIpIHtcbiAgICAgIHRoaXMub25Eb25lKHJlc29sdmVkQ29tcGxldGVMaXN0ZW5lcik7XG4gICAgfVxuXG4gICAgcmV0dXJuIHtcbiAgICAgIHVuc3Vic2NyaWJlOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGxpc3RlbmVyICYmIF90aGlzLmxpc3RlbmVycy5kZWxldGUobGlzdGVuZXIpO1xuICAgICAgICByZXNvbHZlZENvbXBsZXRlTGlzdGVuZXIgJiYgX3RoaXMuZG9uZUxpc3RlbmVycy5kZWxldGUocmVzb2x2ZWRDb21wbGV0ZUxpc3RlbmVyKTtcbiAgICAgIH1cbiAgICB9O1xuICB9O1xuICAvKipcclxuICAgKiBBZGRzIGFuIGV2ZW50IGxpc3RlbmVyIHRoYXQgaXMgbm90aWZpZWQgd2hlbmV2ZXIgYW4gZXZlbnQgaXMgc2VudCB0byB0aGUgcnVubmluZyBpbnRlcnByZXRlci5cclxuICAgKiBAcGFyYW0gbGlzdGVuZXIgVGhlIGV2ZW50IGxpc3RlbmVyXHJcbiAgICovXG5cblxuICBJbnRlcnByZXRlci5wcm90b3R5cGUub25FdmVudCA9IGZ1bmN0aW9uIChsaXN0ZW5lcikge1xuICAgIHRoaXMuZXZlbnRMaXN0ZW5lcnMuYWRkKGxpc3RlbmVyKTtcbiAgICByZXR1cm4gdGhpcztcbiAgfTtcbiAgLyoqXHJcbiAgICogQWRkcyBhbiBldmVudCBsaXN0ZW5lciB0aGF0IGlzIG5vdGlmaWVkIHdoZW5ldmVyIGEgYHNlbmRgIGV2ZW50IG9jY3Vycy5cclxuICAgKiBAcGFyYW0gbGlzdGVuZXIgVGhlIGV2ZW50IGxpc3RlbmVyXHJcbiAgICovXG5cblxuICBJbnRlcnByZXRlci5wcm90b3R5cGUub25TZW5kID0gZnVuY3Rpb24gKGxpc3RlbmVyKSB7XG4gICAgdGhpcy5zZW5kTGlzdGVuZXJzLmFkZChsaXN0ZW5lcik7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH07XG4gIC8qKlxyXG4gICAqIEFkZHMgYSBjb250ZXh0IGxpc3RlbmVyIHRoYXQgaXMgbm90aWZpZWQgd2hlbmV2ZXIgdGhlIHN0YXRlIGNvbnRleHQgY2hhbmdlcy5cclxuICAgKiBAcGFyYW0gbGlzdGVuZXIgVGhlIGNvbnRleHQgbGlzdGVuZXJcclxuICAgKi9cblxuXG4gIEludGVycHJldGVyLnByb3RvdHlwZS5vbkNoYW5nZSA9IGZ1bmN0aW9uIChsaXN0ZW5lcikge1xuICAgIHRoaXMuY29udGV4dExpc3RlbmVycy5hZGQobGlzdGVuZXIpO1xuICAgIHJldHVybiB0aGlzO1xuICB9O1xuICAvKipcclxuICAgKiBBZGRzIGEgbGlzdGVuZXIgdGhhdCBpcyBub3RpZmllZCB3aGVuIHRoZSBtYWNoaW5lIGlzIHN0b3BwZWQuXHJcbiAgICogQHBhcmFtIGxpc3RlbmVyIFRoZSBsaXN0ZW5lclxyXG4gICAqL1xuXG5cbiAgSW50ZXJwcmV0ZXIucHJvdG90eXBlLm9uU3RvcCA9IGZ1bmN0aW9uIChsaXN0ZW5lcikge1xuICAgIHRoaXMuc3RvcExpc3RlbmVycy5hZGQobGlzdGVuZXIpO1xuICAgIHJldHVybiB0aGlzO1xuICB9O1xuICAvKipcclxuICAgKiBBZGRzIGEgc3RhdGUgbGlzdGVuZXIgdGhhdCBpcyBub3RpZmllZCB3aGVuIHRoZSBzdGF0ZWNoYXJ0IGhhcyByZWFjaGVkIGl0cyBmaW5hbCBzdGF0ZS5cclxuICAgKiBAcGFyYW0gbGlzdGVuZXIgVGhlIHN0YXRlIGxpc3RlbmVyXHJcbiAgICovXG5cblxuICBJbnRlcnByZXRlci5wcm90b3R5cGUub25Eb25lID0gZnVuY3Rpb24gKGxpc3RlbmVyKSB7XG4gICAgdGhpcy5kb25lTGlzdGVuZXJzLmFkZChsaXN0ZW5lcik7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH07XG4gIC8qKlxyXG4gICAqIFJlbW92ZXMgYSBsaXN0ZW5lci5cclxuICAgKiBAcGFyYW0gbGlzdGVuZXIgVGhlIGxpc3RlbmVyIHRvIHJlbW92ZVxyXG4gICAqL1xuXG5cbiAgSW50ZXJwcmV0ZXIucHJvdG90eXBlLm9mZiA9IGZ1bmN0aW9uIChsaXN0ZW5lcikge1xuICAgIHRoaXMubGlzdGVuZXJzLmRlbGV0ZShsaXN0ZW5lcik7XG4gICAgdGhpcy5ldmVudExpc3RlbmVycy5kZWxldGUobGlzdGVuZXIpO1xuICAgIHRoaXMuc2VuZExpc3RlbmVycy5kZWxldGUobGlzdGVuZXIpO1xuICAgIHRoaXMuc3RvcExpc3RlbmVycy5kZWxldGUobGlzdGVuZXIpO1xuICAgIHRoaXMuZG9uZUxpc3RlbmVycy5kZWxldGUobGlzdGVuZXIpO1xuICAgIHRoaXMuY29udGV4dExpc3RlbmVycy5kZWxldGUobGlzdGVuZXIpO1xuICAgIHJldHVybiB0aGlzO1xuICB9O1xuICAvKipcclxuICAgKiBTdGFydHMgdGhlIGludGVycHJldGVyIGZyb20gdGhlIGdpdmVuIHN0YXRlLCBvciB0aGUgaW5pdGlhbCBzdGF0ZS5cclxuICAgKiBAcGFyYW0gaW5pdGlhbFN0YXRlIFRoZSBzdGF0ZSB0byBzdGFydCB0aGUgc3RhdGVjaGFydCBmcm9tXHJcbiAgICovXG5cblxuICBJbnRlcnByZXRlci5wcm90b3R5cGUuc3RhcnQgPSBmdW5jdGlvbiAoaW5pdGlhbFN0YXRlKSB7XG4gICAgdmFyIF90aGlzID0gdGhpcztcblxuICAgIGlmICh0aGlzLl9zdGF0dXMgPT09IEludGVycHJldGVyU3RhdHVzLlJ1bm5pbmcpIHtcbiAgICAgIC8vIERvIG5vdCByZXN0YXJ0IHRoZSBzZXJ2aWNlIGlmIGl0IGlzIGFscmVhZHkgc3RhcnRlZFxuICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG4gICAgcmVnaXN0cnkucmVnaXN0ZXIodGhpcy5zZXNzaW9uSWQsIHRoaXMpO1xuICAgIHRoaXMuaW5pdGlhbGl6ZWQgPSB0cnVlO1xuICAgIHRoaXMuX3N0YXR1cyA9IEludGVycHJldGVyU3RhdHVzLlJ1bm5pbmc7XG4gICAgdmFyIHJlc29sdmVkU3RhdGUgPSBpbml0aWFsU3RhdGUgPT09IHVuZGVmaW5lZCA/IHRoaXMuaW5pdGlhbFN0YXRlIDogcHJvdmlkZSh0aGlzLCBmdW5jdGlvbiAoKSB7XG4gICAgICByZXR1cm4gaXNTdGF0ZShpbml0aWFsU3RhdGUpID8gX3RoaXMubWFjaGluZS5yZXNvbHZlU3RhdGUoaW5pdGlhbFN0YXRlKSA6IF90aGlzLm1hY2hpbmUucmVzb2x2ZVN0YXRlKFN0YXRlLmZyb20oaW5pdGlhbFN0YXRlLCBfdGhpcy5tYWNoaW5lLmNvbnRleHQpKTtcbiAgICB9KTtcblxuICAgIGlmICh0aGlzLm9wdGlvbnMuZGV2VG9vbHMpIHtcbiAgICAgIHRoaXMuYXR0YWNoRGV2KCk7XG4gICAgfVxuXG4gICAgdGhpcy5zY2hlZHVsZXIuaW5pdGlhbGl6ZShmdW5jdGlvbiAoKSB7XG4gICAgICBfdGhpcy51cGRhdGUocmVzb2x2ZWRTdGF0ZSwgaW5pdEV2ZW50KTtcbiAgICB9KTtcbiAgICByZXR1cm4gdGhpcztcbiAgfTtcbiAgLyoqXHJcbiAgICogU3RvcHMgdGhlIGludGVycHJldGVyIGFuZCB1bnN1YnNjcmliZSBhbGwgbGlzdGVuZXJzLlxyXG4gICAqXHJcbiAgICogVGhpcyB3aWxsIGFsc28gbm90aWZ5IHRoZSBgb25TdG9wYCBsaXN0ZW5lcnMuXHJcbiAgICovXG5cblxuICBJbnRlcnByZXRlci5wcm90b3R5cGUuc3RvcCA9IGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgZV82LCBfYSwgZV83LCBfYiwgZV84LCBfYywgZV85LCBfZCwgZV8xMCwgX2U7XG5cbiAgICB0cnkge1xuICAgICAgZm9yICh2YXIgX2YgPSBfX3ZhbHVlcyh0aGlzLmxpc3RlbmVycyksIF9nID0gX2YubmV4dCgpOyAhX2cuZG9uZTsgX2cgPSBfZi5uZXh0KCkpIHtcbiAgICAgICAgdmFyIGxpc3RlbmVyID0gX2cudmFsdWU7XG4gICAgICAgIHRoaXMubGlzdGVuZXJzLmRlbGV0ZShsaXN0ZW5lcik7XG4gICAgICB9XG4gICAgfSBjYXRjaCAoZV82XzEpIHtcbiAgICAgIGVfNiA9IHtcbiAgICAgICAgZXJyb3I6IGVfNl8xXG4gICAgICB9O1xuICAgIH0gZmluYWxseSB7XG4gICAgICB0cnkge1xuICAgICAgICBpZiAoX2cgJiYgIV9nLmRvbmUgJiYgKF9hID0gX2YucmV0dXJuKSkgX2EuY2FsbChfZik7XG4gICAgICB9IGZpbmFsbHkge1xuICAgICAgICBpZiAoZV82KSB0aHJvdyBlXzYuZXJyb3I7XG4gICAgICB9XG4gICAgfVxuXG4gICAgdHJ5IHtcbiAgICAgIGZvciAodmFyIF9oID0gX192YWx1ZXModGhpcy5zdG9wTGlzdGVuZXJzKSwgX2ogPSBfaC5uZXh0KCk7ICFfai5kb25lOyBfaiA9IF9oLm5leHQoKSkge1xuICAgICAgICB2YXIgbGlzdGVuZXIgPSBfai52YWx1ZTsgLy8gY2FsbCBsaXN0ZW5lciwgdGhlbiByZW1vdmVcblxuICAgICAgICBsaXN0ZW5lcigpO1xuICAgICAgICB0aGlzLnN0b3BMaXN0ZW5lcnMuZGVsZXRlKGxpc3RlbmVyKTtcbiAgICAgIH1cbiAgICB9IGNhdGNoIChlXzdfMSkge1xuICAgICAgZV83ID0ge1xuICAgICAgICBlcnJvcjogZV83XzFcbiAgICAgIH07XG4gICAgfSBmaW5hbGx5IHtcbiAgICAgIHRyeSB7XG4gICAgICAgIGlmIChfaiAmJiAhX2ouZG9uZSAmJiAoX2IgPSBfaC5yZXR1cm4pKSBfYi5jYWxsKF9oKTtcbiAgICAgIH0gZmluYWxseSB7XG4gICAgICAgIGlmIChlXzcpIHRocm93IGVfNy5lcnJvcjtcbiAgICAgIH1cbiAgICB9XG5cbiAgICB0cnkge1xuICAgICAgZm9yICh2YXIgX2sgPSBfX3ZhbHVlcyh0aGlzLmNvbnRleHRMaXN0ZW5lcnMpLCBfbCA9IF9rLm5leHQoKTsgIV9sLmRvbmU7IF9sID0gX2submV4dCgpKSB7XG4gICAgICAgIHZhciBsaXN0ZW5lciA9IF9sLnZhbHVlO1xuICAgICAgICB0aGlzLmNvbnRleHRMaXN0ZW5lcnMuZGVsZXRlKGxpc3RlbmVyKTtcbiAgICAgIH1cbiAgICB9IGNhdGNoIChlXzhfMSkge1xuICAgICAgZV84ID0ge1xuICAgICAgICBlcnJvcjogZV84XzFcbiAgICAgIH07XG4gICAgfSBmaW5hbGx5IHtcbiAgICAgIHRyeSB7XG4gICAgICAgIGlmIChfbCAmJiAhX2wuZG9uZSAmJiAoX2MgPSBfay5yZXR1cm4pKSBfYy5jYWxsKF9rKTtcbiAgICAgIH0gZmluYWxseSB7XG4gICAgICAgIGlmIChlXzgpIHRocm93IGVfOC5lcnJvcjtcbiAgICAgIH1cbiAgICB9XG5cbiAgICB0cnkge1xuICAgICAgZm9yICh2YXIgX20gPSBfX3ZhbHVlcyh0aGlzLmRvbmVMaXN0ZW5lcnMpLCBfbyA9IF9tLm5leHQoKTsgIV9vLmRvbmU7IF9vID0gX20ubmV4dCgpKSB7XG4gICAgICAgIHZhciBsaXN0ZW5lciA9IF9vLnZhbHVlO1xuICAgICAgICB0aGlzLmRvbmVMaXN0ZW5lcnMuZGVsZXRlKGxpc3RlbmVyKTtcbiAgICAgIH1cbiAgICB9IGNhdGNoIChlXzlfMSkge1xuICAgICAgZV85ID0ge1xuICAgICAgICBlcnJvcjogZV85XzFcbiAgICAgIH07XG4gICAgfSBmaW5hbGx5IHtcbiAgICAgIHRyeSB7XG4gICAgICAgIGlmIChfbyAmJiAhX28uZG9uZSAmJiAoX2QgPSBfbS5yZXR1cm4pKSBfZC5jYWxsKF9tKTtcbiAgICAgIH0gZmluYWxseSB7XG4gICAgICAgIGlmIChlXzkpIHRocm93IGVfOS5lcnJvcjtcbiAgICAgIH1cbiAgICB9IC8vIFN0b3AgYWxsIGNoaWxkcmVuXG5cblxuICAgIHRoaXMuY2hpbGRyZW4uZm9yRWFjaChmdW5jdGlvbiAoY2hpbGQpIHtcbiAgICAgIGlmIChpc0Z1bmN0aW9uKGNoaWxkLnN0b3ApKSB7XG4gICAgICAgIGNoaWxkLnN0b3AoKTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIHRyeSB7XG4gICAgICAvLyBDYW5jZWwgYWxsIGRlbGF5ZWQgZXZlbnRzXG4gICAgICBmb3IgKHZhciBfcCA9IF9fdmFsdWVzKGtleXModGhpcy5kZWxheWVkRXZlbnRzTWFwKSksIF9xID0gX3AubmV4dCgpOyAhX3EuZG9uZTsgX3EgPSBfcC5uZXh0KCkpIHtcbiAgICAgICAgdmFyIGtleSA9IF9xLnZhbHVlO1xuICAgICAgICB0aGlzLmNsb2NrLmNsZWFyVGltZW91dCh0aGlzLmRlbGF5ZWRFdmVudHNNYXBba2V5XSk7XG4gICAgICB9XG4gICAgfSBjYXRjaCAoZV8xMF8xKSB7XG4gICAgICBlXzEwID0ge1xuICAgICAgICBlcnJvcjogZV8xMF8xXG4gICAgICB9O1xuICAgIH0gZmluYWxseSB7XG4gICAgICB0cnkge1xuICAgICAgICBpZiAoX3EgJiYgIV9xLmRvbmUgJiYgKF9lID0gX3AucmV0dXJuKSkgX2UuY2FsbChfcCk7XG4gICAgICB9IGZpbmFsbHkge1xuICAgICAgICBpZiAoZV8xMCkgdGhyb3cgZV8xMC5lcnJvcjtcbiAgICAgIH1cbiAgICB9XG5cbiAgICB0aGlzLnNjaGVkdWxlci5jbGVhcigpO1xuICAgIHRoaXMuaW5pdGlhbGl6ZWQgPSBmYWxzZTtcbiAgICB0aGlzLl9zdGF0dXMgPSBJbnRlcnByZXRlclN0YXR1cy5TdG9wcGVkO1xuICAgIHJlZ2lzdHJ5LmZyZWUodGhpcy5zZXNzaW9uSWQpO1xuICAgIHJldHVybiB0aGlzO1xuICB9O1xuXG4gIEludGVycHJldGVyLnByb3RvdHlwZS5iYXRjaCA9IGZ1bmN0aW9uIChldmVudHMpIHtcbiAgICB2YXIgX3RoaXMgPSB0aGlzO1xuXG4gICAgaWYgKHRoaXMuX3N0YXR1cyA9PT0gSW50ZXJwcmV0ZXJTdGF0dXMuTm90U3RhcnRlZCAmJiB0aGlzLm9wdGlvbnMuZGVmZXJFdmVudHMpIHtcbiAgICAgIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpuby1jb25zb2xlXG4gICAgICBpZiAoIUlTX1BST0RVQ1RJT04pIHtcbiAgICAgICAgd2FybihmYWxzZSwgZXZlbnRzLmxlbmd0aCArIFwiIGV2ZW50KHMpIHdlcmUgc2VudCB0byB1bmluaXRpYWxpemVkIHNlcnZpY2UgXFxcIlwiICsgdGhpcy5tYWNoaW5lLmlkICsgXCJcXFwiIGFuZCBhcmUgZGVmZXJyZWQuIE1ha2Ugc3VyZSAuc3RhcnQoKSBpcyBjYWxsZWQgZm9yIHRoaXMgc2VydmljZS5cXG5FdmVudDogXCIgKyBKU09OLnN0cmluZ2lmeShldmVudCkpO1xuICAgICAgfVxuICAgIH0gZWxzZSBpZiAodGhpcy5fc3RhdHVzICE9PSBJbnRlcnByZXRlclN0YXR1cy5SdW5uaW5nKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTptYXgtbGluZS1sZW5ndGhcbiAgICAgIGV2ZW50cy5sZW5ndGggKyBcIiBldmVudChzKSB3ZXJlIHNlbnQgdG8gdW5pbml0aWFsaXplZCBzZXJ2aWNlIFxcXCJcIiArIHRoaXMubWFjaGluZS5pZCArIFwiXFxcIi4gTWFrZSBzdXJlIC5zdGFydCgpIGlzIGNhbGxlZCBmb3IgdGhpcyBzZXJ2aWNlLCBvciBzZXQgeyBkZWZlckV2ZW50czogdHJ1ZSB9IGluIHRoZSBzZXJ2aWNlIG9wdGlvbnMuXCIpO1xuICAgIH1cblxuICAgIHRoaXMuc2NoZWR1bGVyLnNjaGVkdWxlKGZ1bmN0aW9uICgpIHtcbiAgICAgIHZhciBlXzExLCBfYTtcblxuICAgICAgdmFyIG5leHRTdGF0ZSA9IF90aGlzLnN0YXRlO1xuICAgICAgdmFyIGJhdGNoQ2hhbmdlZCA9IGZhbHNlO1xuICAgICAgdmFyIGJhdGNoZWRBY3Rpb25zID0gW107XG5cbiAgICAgIHZhciBfbG9vcF8xID0gZnVuY3Rpb24gKGV2ZW50XzEpIHtcbiAgICAgICAgdmFyIF9ldmVudCA9IHRvU0NYTUxFdmVudChldmVudF8xKTtcblxuICAgICAgICBfdGhpcy5mb3J3YXJkKF9ldmVudCk7XG5cbiAgICAgICAgbmV4dFN0YXRlID0gcHJvdmlkZShfdGhpcywgZnVuY3Rpb24gKCkge1xuICAgICAgICAgIHJldHVybiBfdGhpcy5tYWNoaW5lLnRyYW5zaXRpb24obmV4dFN0YXRlLCBfZXZlbnQpO1xuICAgICAgICB9KTtcbiAgICAgICAgYmF0Y2hlZEFjdGlvbnMucHVzaC5hcHBseShiYXRjaGVkQWN0aW9ucywgX19zcHJlYWQobmV4dFN0YXRlLmFjdGlvbnMubWFwKGZ1bmN0aW9uIChhKSB7XG4gICAgICAgICAgcmV0dXJuIGJpbmRBY3Rpb25Ub1N0YXRlKGEsIG5leHRTdGF0ZSk7XG4gICAgICAgIH0pKSk7XG4gICAgICAgIGJhdGNoQ2hhbmdlZCA9IGJhdGNoQ2hhbmdlZCB8fCAhIW5leHRTdGF0ZS5jaGFuZ2VkO1xuICAgICAgfTtcblxuICAgICAgdHJ5IHtcbiAgICAgICAgZm9yICh2YXIgZXZlbnRzXzEgPSBfX3ZhbHVlcyhldmVudHMpLCBldmVudHNfMV8xID0gZXZlbnRzXzEubmV4dCgpOyAhZXZlbnRzXzFfMS5kb25lOyBldmVudHNfMV8xID0gZXZlbnRzXzEubmV4dCgpKSB7XG4gICAgICAgICAgdmFyIGV2ZW50XzEgPSBldmVudHNfMV8xLnZhbHVlO1xuXG4gICAgICAgICAgX2xvb3BfMShldmVudF8xKTtcbiAgICAgICAgfVxuICAgICAgfSBjYXRjaCAoZV8xMV8xKSB7XG4gICAgICAgIGVfMTEgPSB7XG4gICAgICAgICAgZXJyb3I6IGVfMTFfMVxuICAgICAgICB9O1xuICAgICAgfSBmaW5hbGx5IHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICBpZiAoZXZlbnRzXzFfMSAmJiAhZXZlbnRzXzFfMS5kb25lICYmIChfYSA9IGV2ZW50c18xLnJldHVybikpIF9hLmNhbGwoZXZlbnRzXzEpO1xuICAgICAgICB9IGZpbmFsbHkge1xuICAgICAgICAgIGlmIChlXzExKSB0aHJvdyBlXzExLmVycm9yO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIG5leHRTdGF0ZS5jaGFuZ2VkID0gYmF0Y2hDaGFuZ2VkO1xuICAgICAgbmV4dFN0YXRlLmFjdGlvbnMgPSBiYXRjaGVkQWN0aW9ucztcblxuICAgICAgX3RoaXMudXBkYXRlKG5leHRTdGF0ZSwgdG9TQ1hNTEV2ZW50KGV2ZW50c1tldmVudHMubGVuZ3RoIC0gMV0pKTtcbiAgICB9KTtcbiAgfTtcbiAgLyoqXHJcbiAgICogUmV0dXJucyBhIHNlbmQgZnVuY3Rpb24gYm91bmQgdG8gdGhpcyBpbnRlcnByZXRlciBpbnN0YW5jZS5cclxuICAgKlxyXG4gICAqIEBwYXJhbSBldmVudCBUaGUgZXZlbnQgdG8gYmUgc2VudCBieSB0aGUgc2VuZGVyLlxyXG4gICAqL1xuXG5cbiAgSW50ZXJwcmV0ZXIucHJvdG90eXBlLnNlbmRlciA9IGZ1bmN0aW9uIChldmVudCkge1xuICAgIHJldHVybiB0aGlzLnNlbmQuYmluZCh0aGlzLCBldmVudCk7XG4gIH07XG4gIC8qKlxyXG4gICAqIFJldHVybnMgdGhlIG5leHQgc3RhdGUgZ2l2ZW4gdGhlIGludGVycHJldGVyJ3MgY3VycmVudCBzdGF0ZSBhbmQgdGhlIGV2ZW50LlxyXG4gICAqXHJcbiAgICogVGhpcyBpcyBhIHB1cmUgbWV0aG9kIHRoYXQgZG9lcyBfbm90XyB1cGRhdGUgdGhlIGludGVycHJldGVyJ3Mgc3RhdGUuXHJcbiAgICpcclxuICAgKiBAcGFyYW0gZXZlbnQgVGhlIGV2ZW50IHRvIGRldGVybWluZSB0aGUgbmV4dCBzdGF0ZVxyXG4gICAqL1xuXG5cbiAgSW50ZXJwcmV0ZXIucHJvdG90eXBlLm5leHRTdGF0ZSA9IGZ1bmN0aW9uIChldmVudCkge1xuICAgIHZhciBfdGhpcyA9IHRoaXM7XG5cbiAgICB2YXIgX2V2ZW50ID0gdG9TQ1hNTEV2ZW50KGV2ZW50KTtcblxuICAgIGlmIChfZXZlbnQubmFtZS5pbmRleE9mKGVycm9yUGxhdGZvcm0pID09PSAwICYmICF0aGlzLnN0YXRlLm5leHRFdmVudHMuc29tZShmdW5jdGlvbiAobmV4dEV2ZW50KSB7XG4gICAgICByZXR1cm4gbmV4dEV2ZW50LmluZGV4T2YoZXJyb3JQbGF0Zm9ybSkgPT09IDA7XG4gICAgfSkpIHtcbiAgICAgIHRocm93IF9ldmVudC5kYXRhLmRhdGE7XG4gICAgfVxuXG4gICAgdmFyIG5leHRTdGF0ZSA9IHByb3ZpZGUodGhpcywgZnVuY3Rpb24gKCkge1xuICAgICAgcmV0dXJuIF90aGlzLm1hY2hpbmUudHJhbnNpdGlvbihfdGhpcy5zdGF0ZSwgX2V2ZW50KTtcbiAgICB9KTtcbiAgICByZXR1cm4gbmV4dFN0YXRlO1xuICB9O1xuXG4gIEludGVycHJldGVyLnByb3RvdHlwZS5mb3J3YXJkID0gZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgdmFyIGVfMTIsIF9hO1xuXG4gICAgdHJ5IHtcbiAgICAgIGZvciAodmFyIF9iID0gX192YWx1ZXModGhpcy5mb3J3YXJkVG8pLCBfYyA9IF9iLm5leHQoKTsgIV9jLmRvbmU7IF9jID0gX2IubmV4dCgpKSB7XG4gICAgICAgIHZhciBpZCA9IF9jLnZhbHVlO1xuICAgICAgICB2YXIgY2hpbGQgPSB0aGlzLmNoaWxkcmVuLmdldChpZCk7XG5cbiAgICAgICAgaWYgKCFjaGlsZCkge1xuICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIlVuYWJsZSB0byBmb3J3YXJkIGV2ZW50ICdcIiArIGV2ZW50ICsgXCInIGZyb20gaW50ZXJwcmV0ZXIgJ1wiICsgdGhpcy5pZCArIFwiJyB0byBub25leGlzdGFudCBjaGlsZCAnXCIgKyBpZCArIFwiJy5cIik7XG4gICAgICAgIH1cblxuICAgICAgICBjaGlsZC5zZW5kKGV2ZW50KTtcbiAgICAgIH1cbiAgICB9IGNhdGNoIChlXzEyXzEpIHtcbiAgICAgIGVfMTIgPSB7XG4gICAgICAgIGVycm9yOiBlXzEyXzFcbiAgICAgIH07XG4gICAgfSBmaW5hbGx5IHtcbiAgICAgIHRyeSB7XG4gICAgICAgIGlmIChfYyAmJiAhX2MuZG9uZSAmJiAoX2EgPSBfYi5yZXR1cm4pKSBfYS5jYWxsKF9iKTtcbiAgICAgIH0gZmluYWxseSB7XG4gICAgICAgIGlmIChlXzEyKSB0aHJvdyBlXzEyLmVycm9yO1xuICAgICAgfVxuICAgIH1cbiAgfTtcblxuICBJbnRlcnByZXRlci5wcm90b3R5cGUuZGVmZXIgPSBmdW5jdGlvbiAoc2VuZEFjdGlvbikge1xuICAgIHZhciBfdGhpcyA9IHRoaXM7XG5cbiAgICB0aGlzLmRlbGF5ZWRFdmVudHNNYXBbc2VuZEFjdGlvbi5pZF0gPSB0aGlzLmNsb2NrLnNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xuICAgICAgaWYgKHNlbmRBY3Rpb24udG8pIHtcbiAgICAgICAgX3RoaXMuc2VuZFRvKHNlbmRBY3Rpb24uX2V2ZW50LCBzZW5kQWN0aW9uLnRvKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIF90aGlzLnNlbmQoc2VuZEFjdGlvbi5fZXZlbnQpO1xuICAgICAgfVxuICAgIH0sIHNlbmRBY3Rpb24uZGVsYXkpO1xuICB9O1xuXG4gIEludGVycHJldGVyLnByb3RvdHlwZS5jYW5jZWwgPSBmdW5jdGlvbiAoc2VuZElkKSB7XG4gICAgdGhpcy5jbG9jay5jbGVhclRpbWVvdXQodGhpcy5kZWxheWVkRXZlbnRzTWFwW3NlbmRJZF0pO1xuICAgIGRlbGV0ZSB0aGlzLmRlbGF5ZWRFdmVudHNNYXBbc2VuZElkXTtcbiAgfTtcblxuICBJbnRlcnByZXRlci5wcm90b3R5cGUuZXhlYyA9IGZ1bmN0aW9uIChhY3Rpb24sIHN0YXRlLCBhY3Rpb25GdW5jdGlvbk1hcCkge1xuICAgIGlmIChhY3Rpb25GdW5jdGlvbk1hcCA9PT0gdm9pZCAwKSB7XG4gICAgICBhY3Rpb25GdW5jdGlvbk1hcCA9IHRoaXMubWFjaGluZS5vcHRpb25zLmFjdGlvbnM7XG4gICAgfVxuXG4gICAgdmFyIGNvbnRleHQgPSBzdGF0ZS5jb250ZXh0LFxuICAgICAgICBfZXZlbnQgPSBzdGF0ZS5fZXZlbnQ7XG4gICAgdmFyIGFjdGlvbk9yRXhlYyA9IGFjdGlvbi5leGVjIHx8IGdldEFjdGlvbkZ1bmN0aW9uKGFjdGlvbi50eXBlLCBhY3Rpb25GdW5jdGlvbk1hcCk7XG4gICAgdmFyIGV4ZWMgPSBpc0Z1bmN0aW9uKGFjdGlvbk9yRXhlYykgPyBhY3Rpb25PckV4ZWMgOiBhY3Rpb25PckV4ZWMgPyBhY3Rpb25PckV4ZWMuZXhlYyA6IGFjdGlvbi5leGVjO1xuXG4gICAgaWYgKGV4ZWMpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIHJldHVybiBleGVjKGNvbnRleHQsIF9ldmVudC5kYXRhLCB7XG4gICAgICAgICAgYWN0aW9uOiBhY3Rpb24sXG4gICAgICAgICAgc3RhdGU6IHRoaXMuc3RhdGUsXG4gICAgICAgICAgX2V2ZW50OiBfZXZlbnRcbiAgICAgICAgfSk7XG4gICAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgICAgaWYgKHRoaXMucGFyZW50KSB7XG4gICAgICAgICAgdGhpcy5wYXJlbnQuc2VuZCh7XG4gICAgICAgICAgICB0eXBlOiAneHN0YXRlLmVycm9yJyxcbiAgICAgICAgICAgIGRhdGE6IGVyclxuICAgICAgICAgIH0pO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhyb3cgZXJyO1xuICAgICAgfVxuICAgIH1cblxuICAgIHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcbiAgICAgIGNhc2Ugc2VuZDpcbiAgICAgICAgdmFyIHNlbmRBY3Rpb24gPSBhY3Rpb247XG5cbiAgICAgICAgaWYgKHR5cGVvZiBzZW5kQWN0aW9uLmRlbGF5ID09PSAnbnVtYmVyJykge1xuICAgICAgICAgIHRoaXMuZGVmZXIoc2VuZEFjdGlvbik7XG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGlmIChzZW5kQWN0aW9uLnRvKSB7XG4gICAgICAgICAgICB0aGlzLnNlbmRUbyhzZW5kQWN0aW9uLl9ldmVudCwgc2VuZEFjdGlvbi50byk7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuc2VuZChzZW5kQWN0aW9uLl9ldmVudCk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgYnJlYWs7XG5cbiAgICAgIGNhc2UgY2FuY2VsOlxuICAgICAgICB0aGlzLmNhbmNlbChhY3Rpb24uc2VuZElkKTtcbiAgICAgICAgYnJlYWs7XG5cbiAgICAgIGNhc2Ugc3RhcnQ6XG4gICAgICAgIHtcbiAgICAgICAgICB2YXIgYWN0aXZpdHkgPSBhY3Rpb24uYWN0aXZpdHk7IC8vIElmIHRoZSBhY3Rpdml0eSB3aWxsIGJlIHN0b3BwZWQgcmlnaHQgYWZ0ZXIgaXQncyBzdGFydGVkXG4gICAgICAgICAgLy8gKHN1Y2ggYXMgaW4gdHJhbnNpZW50IHN0YXRlcylcbiAgICAgICAgICAvLyBkb24ndCBib3RoZXIgc3RhcnRpbmcgdGhlIGFjdGl2aXR5LlxuXG4gICAgICAgICAgaWYgKCF0aGlzLnN0YXRlLmFjdGl2aXRpZXNbYWN0aXZpdHkuaWQgfHwgYWN0aXZpdHkudHlwZV0pIHtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIH0gLy8gSW52b2tlZCBzZXJ2aWNlc1xuXG5cbiAgICAgICAgICBpZiAoYWN0aXZpdHkudHlwZSA9PT0gQWN0aW9uVHlwZXMuSW52b2tlKSB7XG4gICAgICAgICAgICB2YXIgaW52b2tlU291cmNlID0gdG9JbnZva2VTb3VyY2UoYWN0aXZpdHkuc3JjKTtcbiAgICAgICAgICAgIHZhciBzZXJ2aWNlQ3JlYXRvciA9IHRoaXMubWFjaGluZS5vcHRpb25zLnNlcnZpY2VzID8gdGhpcy5tYWNoaW5lLm9wdGlvbnMuc2VydmljZXNbaW52b2tlU291cmNlLnR5cGVdIDogdW5kZWZpbmVkO1xuICAgICAgICAgICAgdmFyIGlkID0gYWN0aXZpdHkuaWQsXG4gICAgICAgICAgICAgICAgZGF0YSA9IGFjdGl2aXR5LmRhdGE7XG5cbiAgICAgICAgICAgIGlmICghSVNfUFJPRFVDVElPTikge1xuICAgICAgICAgICAgICB3YXJuKCEoJ2ZvcndhcmQnIGluIGFjdGl2aXR5KSwgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOm1heC1saW5lLWxlbmd0aFxuICAgICAgICAgICAgICBcImBmb3J3YXJkYCBwcm9wZXJ0eSBpcyBkZXByZWNhdGVkIChmb3VuZCBpbiBpbnZvY2F0aW9uIG9mICdcIiArIGFjdGl2aXR5LnNyYyArIFwiJyBpbiBpbiBtYWNoaW5lICdcIiArIHRoaXMubWFjaGluZS5pZCArIFwiJykuIFwiICsgXCJQbGVhc2UgdXNlIGBhdXRvRm9yd2FyZGAgaW5zdGVhZC5cIik7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHZhciBhdXRvRm9yd2FyZCA9ICdhdXRvRm9yd2FyZCcgaW4gYWN0aXZpdHkgPyBhY3Rpdml0eS5hdXRvRm9yd2FyZCA6ICEhYWN0aXZpdHkuZm9yd2FyZDtcblxuICAgICAgICAgICAgaWYgKCFzZXJ2aWNlQ3JlYXRvcikge1xuICAgICAgICAgICAgICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6bm8tY29uc29sZVxuICAgICAgICAgICAgICBpZiAoIUlTX1BST0RVQ1RJT04pIHtcbiAgICAgICAgICAgICAgICB3YXJuKGZhbHNlLCBcIk5vIHNlcnZpY2UgZm91bmQgZm9yIGludm9jYXRpb24gJ1wiICsgYWN0aXZpdHkuc3JjICsgXCInIGluIG1hY2hpbmUgJ1wiICsgdGhpcy5tYWNoaW5lLmlkICsgXCInLlwiKTtcbiAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgdmFyIHJlc29sdmVkRGF0YSA9IGRhdGEgPyBtYXBDb250ZXh0KGRhdGEsIGNvbnRleHQsIF9ldmVudCkgOiB1bmRlZmluZWQ7XG4gICAgICAgICAgICB2YXIgc291cmNlID0gaXNGdW5jdGlvbihzZXJ2aWNlQ3JlYXRvcikgPyBzZXJ2aWNlQ3JlYXRvcihjb250ZXh0LCBfZXZlbnQuZGF0YSwge1xuICAgICAgICAgICAgICBkYXRhOiByZXNvbHZlZERhdGEsXG4gICAgICAgICAgICAgIHNyYzogaW52b2tlU291cmNlXG4gICAgICAgICAgICB9KSA6IHNlcnZpY2VDcmVhdG9yO1xuXG4gICAgICAgICAgICBpZiAoaXNQcm9taXNlTGlrZShzb3VyY2UpKSB7XG4gICAgICAgICAgICAgIHRoaXMuc3RhdGUuY2hpbGRyZW5baWRdID0gdGhpcy5zcGF3blByb21pc2UoUHJvbWlzZS5yZXNvbHZlKHNvdXJjZSksIGlkKTtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoaXNGdW5jdGlvbihzb3VyY2UpKSB7XG4gICAgICAgICAgICAgIHRoaXMuc3RhdGUuY2hpbGRyZW5baWRdID0gdGhpcy5zcGF3bkNhbGxiYWNrKHNvdXJjZSwgaWQpO1xuICAgICAgICAgICAgfSBlbHNlIGlmIChpc09ic2VydmFibGUoc291cmNlKSkge1xuICAgICAgICAgICAgICB0aGlzLnN0YXRlLmNoaWxkcmVuW2lkXSA9IHRoaXMuc3Bhd25PYnNlcnZhYmxlKHNvdXJjZSwgaWQpO1xuICAgICAgICAgICAgfSBlbHNlIGlmIChpc01hY2hpbmUoc291cmNlKSkge1xuICAgICAgICAgICAgICAvLyBUT0RPOiB0cnkvY2F0Y2ggaGVyZVxuICAgICAgICAgICAgICB0aGlzLnN0YXRlLmNoaWxkcmVuW2lkXSA9IHRoaXMuc3Bhd25NYWNoaW5lKHJlc29sdmVkRGF0YSA/IHNvdXJjZS53aXRoQ29udGV4dChyZXNvbHZlZERhdGEpIDogc291cmNlLCB7XG4gICAgICAgICAgICAgICAgaWQ6IGlkLFxuICAgICAgICAgICAgICAgIGF1dG9Gb3J3YXJkOiBhdXRvRm9yd2FyZFxuICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5zcGF3bkFjdGl2aXR5KGFjdGl2aXR5KTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuXG4gICAgICBjYXNlIHN0b3A6XG4gICAgICAgIHtcbiAgICAgICAgICB0aGlzLnN0b3BDaGlsZChhY3Rpb24uYWN0aXZpdHkuaWQpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG5cbiAgICAgIGNhc2UgbG9nOlxuICAgICAgICB2YXIgbGFiZWwgPSBhY3Rpb24ubGFiZWwsXG4gICAgICAgICAgICB2YWx1ZSA9IGFjdGlvbi52YWx1ZTtcblxuICAgICAgICBpZiAobGFiZWwpIHtcbiAgICAgICAgICB0aGlzLmxvZ2dlcihsYWJlbCwgdmFsdWUpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHRoaXMubG9nZ2VyKHZhbHVlKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGJyZWFrO1xuXG4gICAgICBkZWZhdWx0OlxuICAgICAgICBpZiAoIUlTX1BST0RVQ1RJT04pIHtcbiAgICAgICAgICB3YXJuKGZhbHNlLCBcIk5vIGltcGxlbWVudGF0aW9uIGZvdW5kIGZvciBhY3Rpb24gdHlwZSAnXCIgKyBhY3Rpb24udHlwZSArIFwiJ1wiKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGJyZWFrO1xuICAgIH1cblxuICAgIHJldHVybiB1bmRlZmluZWQ7XG4gIH07XG5cbiAgSW50ZXJwcmV0ZXIucHJvdG90eXBlLnJlbW92ZUNoaWxkID0gZnVuY3Rpb24gKGNoaWxkSWQpIHtcbiAgICB0aGlzLmNoaWxkcmVuLmRlbGV0ZShjaGlsZElkKTtcbiAgICB0aGlzLmZvcndhcmRUby5kZWxldGUoY2hpbGRJZCk7XG4gICAgZGVsZXRlIHRoaXMuc3RhdGUuY2hpbGRyZW5bY2hpbGRJZF07XG4gIH07XG5cbiAgSW50ZXJwcmV0ZXIucHJvdG90eXBlLnN0b3BDaGlsZCA9IGZ1bmN0aW9uIChjaGlsZElkKSB7XG4gICAgdmFyIGNoaWxkID0gdGhpcy5jaGlsZHJlbi5nZXQoY2hpbGRJZCk7XG5cbiAgICBpZiAoIWNoaWxkKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgdGhpcy5yZW1vdmVDaGlsZChjaGlsZElkKTtcblxuICAgIGlmIChpc0Z1bmN0aW9uKGNoaWxkLnN0b3ApKSB7XG4gICAgICBjaGlsZC5zdG9wKCk7XG4gICAgfVxuICB9O1xuXG4gIEludGVycHJldGVyLnByb3RvdHlwZS5zcGF3biA9IGZ1bmN0aW9uIChlbnRpdHksIG5hbWUsIG9wdGlvbnMpIHtcbiAgICBpZiAoaXNQcm9taXNlTGlrZShlbnRpdHkpKSB7XG4gICAgICByZXR1cm4gdGhpcy5zcGF3blByb21pc2UoUHJvbWlzZS5yZXNvbHZlKGVudGl0eSksIG5hbWUpO1xuICAgIH0gZWxzZSBpZiAoaXNGdW5jdGlvbihlbnRpdHkpKSB7XG4gICAgICByZXR1cm4gdGhpcy5zcGF3bkNhbGxiYWNrKGVudGl0eSwgbmFtZSk7XG4gICAgfSBlbHNlIGlmIChpc0FjdG9yKGVudGl0eSkpIHtcbiAgICAgIHJldHVybiB0aGlzLnNwYXduQWN0b3IoZW50aXR5KTtcbiAgICB9IGVsc2UgaWYgKGlzT2JzZXJ2YWJsZShlbnRpdHkpKSB7XG4gICAgICByZXR1cm4gdGhpcy5zcGF3bk9ic2VydmFibGUoZW50aXR5LCBuYW1lKTtcbiAgICB9IGVsc2UgaWYgKGlzTWFjaGluZShlbnRpdHkpKSB7XG4gICAgICByZXR1cm4gdGhpcy5zcGF3bk1hY2hpbmUoZW50aXR5LCBfX2Fzc2lnbihfX2Fzc2lnbih7fSwgb3B0aW9ucyksIHtcbiAgICAgICAgaWQ6IG5hbWVcbiAgICAgIH0pKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKFwiVW5hYmxlIHRvIHNwYXduIGVudGl0eSBcXFwiXCIgKyBuYW1lICsgXCJcXFwiIG9mIHR5cGUgXFxcIlwiICsgdHlwZW9mIGVudGl0eSArIFwiXFxcIi5cIik7XG4gICAgfVxuICB9O1xuXG4gIEludGVycHJldGVyLnByb3RvdHlwZS5zcGF3bk1hY2hpbmUgPSBmdW5jdGlvbiAobWFjaGluZSwgb3B0aW9ucykge1xuICAgIHZhciBfdGhpcyA9IHRoaXM7XG5cbiAgICBpZiAob3B0aW9ucyA9PT0gdm9pZCAwKSB7XG4gICAgICBvcHRpb25zID0ge307XG4gICAgfVxuXG4gICAgdmFyIGNoaWxkU2VydmljZSA9IG5ldyBJbnRlcnByZXRlcihtYWNoaW5lLCBfX2Fzc2lnbihfX2Fzc2lnbih7fSwgdGhpcy5vcHRpb25zKSwge1xuICAgICAgcGFyZW50OiB0aGlzLFxuICAgICAgaWQ6IG9wdGlvbnMuaWQgfHwgbWFjaGluZS5pZFxuICAgIH0pKTtcblxuICAgIHZhciByZXNvbHZlZE9wdGlvbnMgPSBfX2Fzc2lnbihfX2Fzc2lnbih7fSwgREVGQVVMVF9TUEFXTl9PUFRJT05TKSwgb3B0aW9ucyk7XG5cbiAgICBpZiAocmVzb2x2ZWRPcHRpb25zLnN5bmMpIHtcbiAgICAgIGNoaWxkU2VydmljZS5vblRyYW5zaXRpb24oZnVuY3Rpb24gKHN0YXRlKSB7XG4gICAgICAgIF90aGlzLnNlbmQodXBkYXRlLCB7XG4gICAgICAgICAgc3RhdGU6IHN0YXRlLFxuICAgICAgICAgIGlkOiBjaGlsZFNlcnZpY2UuaWRcbiAgICAgICAgfSk7XG4gICAgICB9KTtcbiAgICB9XG5cbiAgICB2YXIgYWN0b3IgPSBjaGlsZFNlcnZpY2U7XG4gICAgdGhpcy5jaGlsZHJlbi5zZXQoY2hpbGRTZXJ2aWNlLmlkLCBhY3Rvcik7XG5cbiAgICBpZiAocmVzb2x2ZWRPcHRpb25zLmF1dG9Gb3J3YXJkKSB7XG4gICAgICB0aGlzLmZvcndhcmRUby5hZGQoY2hpbGRTZXJ2aWNlLmlkKTtcbiAgICB9XG5cbiAgICBjaGlsZFNlcnZpY2Uub25Eb25lKGZ1bmN0aW9uIChkb25lRXZlbnQpIHtcbiAgICAgIF90aGlzLnJlbW92ZUNoaWxkKGNoaWxkU2VydmljZS5pZCk7XG5cbiAgICAgIF90aGlzLnNlbmQodG9TQ1hNTEV2ZW50KGRvbmVFdmVudCwge1xuICAgICAgICBvcmlnaW46IGNoaWxkU2VydmljZS5pZFxuICAgICAgfSkpO1xuICAgIH0pLnN0YXJ0KCk7XG4gICAgcmV0dXJuIGFjdG9yO1xuICB9O1xuXG4gIEludGVycHJldGVyLnByb3RvdHlwZS5zcGF3blByb21pc2UgPSBmdW5jdGlvbiAocHJvbWlzZSwgaWQpIHtcbiAgICB2YXIgX3RoaXMgPSB0aGlzO1xuXG4gICAgdmFyIGNhbmNlbGVkID0gZmFsc2U7XG4gICAgcHJvbWlzZS50aGVuKGZ1bmN0aW9uIChyZXNwb25zZSkge1xuICAgICAgaWYgKCFjYW5jZWxlZCkge1xuICAgICAgICBfdGhpcy5yZW1vdmVDaGlsZChpZCk7XG5cbiAgICAgICAgX3RoaXMuc2VuZCh0b1NDWE1MRXZlbnQoZG9uZUludm9rZShpZCwgcmVzcG9uc2UpLCB7XG4gICAgICAgICAgb3JpZ2luOiBpZFxuICAgICAgICB9KSk7XG4gICAgICB9XG4gICAgfSwgZnVuY3Rpb24gKGVycm9yRGF0YSkge1xuICAgICAgaWYgKCFjYW5jZWxlZCkge1xuICAgICAgICBfdGhpcy5yZW1vdmVDaGlsZChpZCk7XG5cbiAgICAgICAgdmFyIGVycm9yRXZlbnQgPSBlcnJvcihpZCwgZXJyb3JEYXRhKTtcblxuICAgICAgICB0cnkge1xuICAgICAgICAgIC8vIFNlbmQgXCJlcnJvci5wbGF0Zm9ybS5pZFwiIHRvIHRoaXMgKHBhcmVudCkuXG4gICAgICAgICAgX3RoaXMuc2VuZCh0b1NDWE1MRXZlbnQoZXJyb3JFdmVudCwge1xuICAgICAgICAgICAgb3JpZ2luOiBpZFxuICAgICAgICAgIH0pKTtcbiAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgICByZXBvcnRVbmhhbmRsZWRFeGNlcHRpb25Pbkludm9jYXRpb24oZXJyb3JEYXRhLCBlcnJvciwgaWQpO1xuXG4gICAgICAgICAgaWYgKF90aGlzLmRldlRvb2xzKSB7XG4gICAgICAgICAgICBfdGhpcy5kZXZUb29scy5zZW5kKGVycm9yRXZlbnQsIF90aGlzLnN0YXRlKTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBpZiAoX3RoaXMubWFjaGluZS5zdHJpY3QpIHtcbiAgICAgICAgICAgIC8vIGl0IHdvdWxkIGJlIGJldHRlciB0byBhbHdheXMgc3RvcCB0aGUgc3RhdGUgbWFjaGluZSBpZiB1bmhhbmRsZWRcbiAgICAgICAgICAgIC8vIGV4Y2VwdGlvbi9wcm9taXNlIHJlamVjdGlvbiBoYXBwZW5zIGJ1dCBiZWNhdXNlIHdlIGRvbid0IHdhbnQgdG9cbiAgICAgICAgICAgIC8vIGJyZWFrIGV4aXN0aW5nIGNvZGUgc28gZW5mb3JjZSBpdCBvbiBzdHJpY3QgbW9kZSBvbmx5IGVzcGVjaWFsbHkgc29cbiAgICAgICAgICAgIC8vIGJlY2F1c2UgZG9jdW1lbnRhdGlvbiBzYXlzIHRoYXQgb25FcnJvciBpcyBvcHRpb25hbFxuICAgICAgICAgICAgX3RoaXMuc3RvcCgpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0pO1xuICAgIHZhciBhY3RvciA9IHtcbiAgICAgIGlkOiBpZCxcbiAgICAgIHNlbmQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIHZvaWQgMDtcbiAgICAgIH0sXG4gICAgICBzdWJzY3JpYmU6IGZ1bmN0aW9uIChuZXh0LCBoYW5kbGVFcnJvciwgY29tcGxldGUpIHtcbiAgICAgICAgdmFyIHVuc3Vic2NyaWJlZCA9IGZhbHNlO1xuICAgICAgICBwcm9taXNlLnRoZW4oZnVuY3Rpb24gKHJlc3BvbnNlKSB7XG4gICAgICAgICAgaWYgKHVuc3Vic2NyaWJlZCkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIG5leHQgJiYgbmV4dChyZXNwb25zZSk7XG5cbiAgICAgICAgICBpZiAodW5zdWJzY3JpYmVkKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgY29tcGxldGUgJiYgY29tcGxldGUoKTtcbiAgICAgICAgfSwgZnVuY3Rpb24gKGVycikge1xuICAgICAgICAgIGlmICh1bnN1YnNjcmliZWQpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBoYW5kbGVFcnJvcihlcnIpO1xuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICB1bnN1YnNjcmliZTogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgcmV0dXJuIHVuc3Vic2NyaWJlZCA9IHRydWU7XG4gICAgICAgICAgfVxuICAgICAgICB9O1xuICAgICAgfSxcbiAgICAgIHN0b3A6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgY2FuY2VsZWQgPSB0cnVlO1xuICAgICAgfSxcbiAgICAgIHRvSlNPTjogZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgIGlkOiBpZFxuICAgICAgICB9O1xuICAgICAgfVxuICAgIH07XG4gICAgdGhpcy5jaGlsZHJlbi5zZXQoaWQsIGFjdG9yKTtcbiAgICByZXR1cm4gYWN0b3I7XG4gIH07XG5cbiAgSW50ZXJwcmV0ZXIucHJvdG90eXBlLnNwYXduQ2FsbGJhY2sgPSBmdW5jdGlvbiAoY2FsbGJhY2ssIGlkKSB7XG4gICAgdmFyIF90aGlzID0gdGhpcztcblxuICAgIHZhciBjYW5jZWxlZCA9IGZhbHNlO1xuICAgIHZhciByZWNlaXZlcnMgPSBuZXcgU2V0KCk7XG4gICAgdmFyIGxpc3RlbmVycyA9IG5ldyBTZXQoKTtcblxuICAgIHZhciByZWNlaXZlID0gZnVuY3Rpb24gKGUpIHtcbiAgICAgIGxpc3RlbmVycy5mb3JFYWNoKGZ1bmN0aW9uIChsaXN0ZW5lcikge1xuICAgICAgICByZXR1cm4gbGlzdGVuZXIoZSk7XG4gICAgICB9KTtcblxuICAgICAgaWYgKGNhbmNlbGVkKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgX3RoaXMuc2VuZChlKTtcbiAgICB9O1xuXG4gICAgdmFyIGNhbGxiYWNrU3RvcDtcblxuICAgIHRyeSB7XG4gICAgICBjYWxsYmFja1N0b3AgPSBjYWxsYmFjayhyZWNlaXZlLCBmdW5jdGlvbiAobmV3TGlzdGVuZXIpIHtcbiAgICAgICAgcmVjZWl2ZXJzLmFkZChuZXdMaXN0ZW5lcik7XG4gICAgICB9KTtcbiAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgIHRoaXMuc2VuZChlcnJvcihpZCwgZXJyKSk7XG4gICAgfVxuXG4gICAgaWYgKGlzUHJvbWlzZUxpa2UoY2FsbGJhY2tTdG9wKSkge1xuICAgICAgLy8gaXQgdHVybmVkIG91dCB0byBiZSBhbiBhc3luYyBmdW5jdGlvbiwgY2FuJ3QgcmVsaWFibHkgY2hlY2sgdGhpcyBiZWZvcmUgY2FsbGluZyBgY2FsbGJhY2tgXG4gICAgICAvLyBiZWNhdXNlIHRyYW5zcGlsZWQgYXN5bmMgZnVuY3Rpb25zIGFyZSBub3QgcmVjb2duaXphYmxlXG4gICAgICByZXR1cm4gdGhpcy5zcGF3blByb21pc2UoY2FsbGJhY2tTdG9wLCBpZCk7XG4gICAgfVxuXG4gICAgdmFyIGFjdG9yID0ge1xuICAgICAgaWQ6IGlkLFxuICAgICAgc2VuZDogZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgICAgIHJldHVybiByZWNlaXZlcnMuZm9yRWFjaChmdW5jdGlvbiAocmVjZWl2ZXIpIHtcbiAgICAgICAgICByZXR1cm4gcmVjZWl2ZXIoZXZlbnQpO1xuICAgICAgICB9KTtcbiAgICAgIH0sXG4gICAgICBzdWJzY3JpYmU6IGZ1bmN0aW9uIChuZXh0KSB7XG4gICAgICAgIGxpc3RlbmVycy5hZGQobmV4dCk7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgdW5zdWJzY3JpYmU6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIGxpc3RlbmVycy5kZWxldGUobmV4dCk7XG4gICAgICAgICAgfVxuICAgICAgICB9O1xuICAgICAgfSxcbiAgICAgIHN0b3A6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgY2FuY2VsZWQgPSB0cnVlO1xuXG4gICAgICAgIGlmIChpc0Z1bmN0aW9uKGNhbGxiYWNrU3RvcCkpIHtcbiAgICAgICAgICBjYWxsYmFja1N0b3AoKTtcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIHRvSlNPTjogZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgIGlkOiBpZFxuICAgICAgICB9O1xuICAgICAgfVxuICAgIH07XG4gICAgdGhpcy5jaGlsZHJlbi5zZXQoaWQsIGFjdG9yKTtcbiAgICByZXR1cm4gYWN0b3I7XG4gIH07XG5cbiAgSW50ZXJwcmV0ZXIucHJvdG90eXBlLnNwYXduT2JzZXJ2YWJsZSA9IGZ1bmN0aW9uIChzb3VyY2UsIGlkKSB7XG4gICAgdmFyIF90aGlzID0gdGhpcztcblxuICAgIHZhciBzdWJzY3JpcHRpb24gPSBzb3VyY2Uuc3Vic2NyaWJlKGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgICAgX3RoaXMuc2VuZCh0b1NDWE1MRXZlbnQodmFsdWUsIHtcbiAgICAgICAgb3JpZ2luOiBpZFxuICAgICAgfSkpO1xuICAgIH0sIGZ1bmN0aW9uIChlcnIpIHtcbiAgICAgIF90aGlzLnJlbW92ZUNoaWxkKGlkKTtcblxuICAgICAgX3RoaXMuc2VuZCh0b1NDWE1MRXZlbnQoZXJyb3IoaWQsIGVyciksIHtcbiAgICAgICAgb3JpZ2luOiBpZFxuICAgICAgfSkpO1xuICAgIH0sIGZ1bmN0aW9uICgpIHtcbiAgICAgIF90aGlzLnJlbW92ZUNoaWxkKGlkKTtcblxuICAgICAgX3RoaXMuc2VuZCh0b1NDWE1MRXZlbnQoZG9uZUludm9rZShpZCksIHtcbiAgICAgICAgb3JpZ2luOiBpZFxuICAgICAgfSkpO1xuICAgIH0pO1xuICAgIHZhciBhY3RvciA9IHtcbiAgICAgIGlkOiBpZCxcbiAgICAgIHNlbmQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIHZvaWQgMDtcbiAgICAgIH0sXG4gICAgICBzdWJzY3JpYmU6IGZ1bmN0aW9uIChuZXh0LCBoYW5kbGVFcnJvciwgY29tcGxldGUpIHtcbiAgICAgICAgcmV0dXJuIHNvdXJjZS5zdWJzY3JpYmUobmV4dCwgaGFuZGxlRXJyb3IsIGNvbXBsZXRlKTtcbiAgICAgIH0sXG4gICAgICBzdG9wOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiBzdWJzY3JpcHRpb24udW5zdWJzY3JpYmUoKTtcbiAgICAgIH0sXG4gICAgICB0b0pTT046IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICBpZDogaWRcbiAgICAgICAgfTtcbiAgICAgIH1cbiAgICB9O1xuICAgIHRoaXMuY2hpbGRyZW4uc2V0KGlkLCBhY3Rvcik7XG4gICAgcmV0dXJuIGFjdG9yO1xuICB9O1xuXG4gIEludGVycHJldGVyLnByb3RvdHlwZS5zcGF3bkFjdG9yID0gZnVuY3Rpb24gKGFjdG9yKSB7XG4gICAgdGhpcy5jaGlsZHJlbi5zZXQoYWN0b3IuaWQsIGFjdG9yKTtcbiAgICByZXR1cm4gYWN0b3I7XG4gIH07XG5cbiAgSW50ZXJwcmV0ZXIucHJvdG90eXBlLnNwYXduQWN0aXZpdHkgPSBmdW5jdGlvbiAoYWN0aXZpdHkpIHtcbiAgICB2YXIgaW1wbGVtZW50YXRpb24gPSB0aGlzLm1hY2hpbmUub3B0aW9ucyAmJiB0aGlzLm1hY2hpbmUub3B0aW9ucy5hY3Rpdml0aWVzID8gdGhpcy5tYWNoaW5lLm9wdGlvbnMuYWN0aXZpdGllc1thY3Rpdml0eS50eXBlXSA6IHVuZGVmaW5lZDtcblxuICAgIGlmICghaW1wbGVtZW50YXRpb24pIHtcbiAgICAgIGlmICghSVNfUFJPRFVDVElPTikge1xuICAgICAgICB3YXJuKGZhbHNlLCBcIk5vIGltcGxlbWVudGF0aW9uIGZvdW5kIGZvciBhY3Rpdml0eSAnXCIgKyBhY3Rpdml0eS50eXBlICsgXCInXCIpO1xuICAgICAgfSAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6bm8tY29uc29sZVxuXG5cbiAgICAgIHJldHVybjtcbiAgICB9IC8vIFN0YXJ0IGltcGxlbWVudGF0aW9uXG5cblxuICAgIHZhciBkaXNwb3NlID0gaW1wbGVtZW50YXRpb24odGhpcy5zdGF0ZS5jb250ZXh0LCBhY3Rpdml0eSk7XG4gICAgdGhpcy5zcGF3bkVmZmVjdChhY3Rpdml0eS5pZCwgZGlzcG9zZSk7XG4gIH07XG5cbiAgSW50ZXJwcmV0ZXIucHJvdG90eXBlLnNwYXduRWZmZWN0ID0gZnVuY3Rpb24gKGlkLCBkaXNwb3NlKSB7XG4gICAgdGhpcy5jaGlsZHJlbi5zZXQoaWQsIHtcbiAgICAgIGlkOiBpZCxcbiAgICAgIHNlbmQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIHZvaWQgMDtcbiAgICAgIH0sXG4gICAgICBzdWJzY3JpYmU6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICB1bnN1YnNjcmliZTogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgcmV0dXJuIHZvaWQgMDtcbiAgICAgICAgICB9XG4gICAgICAgIH07XG4gICAgICB9LFxuICAgICAgc3RvcDogZGlzcG9zZSB8fCB1bmRlZmluZWQsXG4gICAgICB0b0pTT046IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICBpZDogaWRcbiAgICAgICAgfTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfTtcblxuICBJbnRlcnByZXRlci5wcm90b3R5cGUuYXR0YWNoRGV2ID0gZnVuY3Rpb24gKCkge1xuICAgIGlmICh0aGlzLm9wdGlvbnMuZGV2VG9vbHMgJiYgdHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIGlmICh3aW5kb3cuX19SRURVWF9ERVZUT09MU19FWFRFTlNJT05fXykge1xuICAgICAgICB2YXIgZGV2VG9vbHNPcHRpb25zID0gdHlwZW9mIHRoaXMub3B0aW9ucy5kZXZUb29scyA9PT0gJ29iamVjdCcgPyB0aGlzLm9wdGlvbnMuZGV2VG9vbHMgOiB1bmRlZmluZWQ7XG4gICAgICAgIHRoaXMuZGV2VG9vbHMgPSB3aW5kb3cuX19SRURVWF9ERVZUT09MU19FWFRFTlNJT05fXy5jb25uZWN0KF9fYXNzaWduKF9fYXNzaWduKHtcbiAgICAgICAgICBuYW1lOiB0aGlzLmlkLFxuICAgICAgICAgIGF1dG9QYXVzZTogdHJ1ZSxcbiAgICAgICAgICBzdGF0ZVNhbml0aXplcjogZnVuY3Rpb24gKHN0YXRlKSB7XG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICB2YWx1ZTogc3RhdGUudmFsdWUsXG4gICAgICAgICAgICAgIGNvbnRleHQ6IHN0YXRlLmNvbnRleHQsXG4gICAgICAgICAgICAgIGFjdGlvbnM6IHN0YXRlLmFjdGlvbnNcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgfVxuICAgICAgICB9LCBkZXZUb29sc09wdGlvbnMpLCB7XG4gICAgICAgICAgZmVhdHVyZXM6IF9fYXNzaWduKHtcbiAgICAgICAgICAgIGp1bXA6IGZhbHNlLFxuICAgICAgICAgICAgc2tpcDogZmFsc2VcbiAgICAgICAgICB9LCBkZXZUb29sc09wdGlvbnMgPyBkZXZUb29sc09wdGlvbnMuZmVhdHVyZXMgOiB1bmRlZmluZWQpXG4gICAgICAgIH0pLCB0aGlzLm1hY2hpbmUpO1xuICAgICAgICB0aGlzLmRldlRvb2xzLmluaXQodGhpcy5zdGF0ZSk7XG4gICAgICB9IC8vIGFkZCBYU3RhdGUtc3BlY2lmaWMgZGV2IHRvb2xpbmcgaG9va1xuXG5cbiAgICAgIHJlZ2lzdGVyU2VydmljZSh0aGlzKTtcbiAgICB9XG4gIH07XG5cbiAgSW50ZXJwcmV0ZXIucHJvdG90eXBlLnRvSlNPTiA9IGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4ge1xuICAgICAgaWQ6IHRoaXMuaWRcbiAgICB9O1xuICB9O1xuXG4gIEludGVycHJldGVyLnByb3RvdHlwZVtzeW1ib2xPYnNlcnZhYmxlXSA9IGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gdGhpcztcbiAgfTtcbiAgLyoqXHJcbiAgICogVGhlIGRlZmF1bHQgaW50ZXJwcmV0ZXIgb3B0aW9uczpcclxuICAgKlxyXG4gICAqIC0gYGNsb2NrYCB1c2VzIHRoZSBnbG9iYWwgYHNldFRpbWVvdXRgIGFuZCBgY2xlYXJUaW1lb3V0YCBmdW5jdGlvbnNcclxuICAgKiAtIGBsb2dnZXJgIHVzZXMgdGhlIGdsb2JhbCBgY29uc29sZS5sb2coKWAgbWV0aG9kXHJcbiAgICovXG5cblxuICBJbnRlcnByZXRlci5kZWZhdWx0T3B0aW9ucyA9IC8qI19fUFVSRV9fKi9mdW5jdGlvbiAoZ2xvYmFsKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGV4ZWN1dGU6IHRydWUsXG4gICAgICBkZWZlckV2ZW50czogdHJ1ZSxcbiAgICAgIGNsb2NrOiB7XG4gICAgICAgIHNldFRpbWVvdXQ6IGZ1bmN0aW9uIChmbiwgbXMpIHtcbiAgICAgICAgICByZXR1cm4gZ2xvYmFsLnNldFRpbWVvdXQuY2FsbChudWxsLCBmbiwgbXMpO1xuICAgICAgICB9LFxuICAgICAgICBjbGVhclRpbWVvdXQ6IGZ1bmN0aW9uIChpZCkge1xuICAgICAgICAgIHJldHVybiBnbG9iYWwuY2xlYXJUaW1lb3V0LmNhbGwobnVsbCwgaWQpO1xuICAgICAgICB9XG4gICAgICB9LFxuICAgICAgbG9nZ2VyOiBnbG9iYWwuY29uc29sZS5sb2cuYmluZChjb25zb2xlKSxcbiAgICAgIGRldlRvb2xzOiBmYWxzZVxuICAgIH07XG4gIH0odHlwZW9mIHNlbGYgIT09ICd1bmRlZmluZWQnID8gc2VsZiA6IGdsb2JhbCk7XG5cbiAgSW50ZXJwcmV0ZXIuaW50ZXJwcmV0ID0gaW50ZXJwcmV0O1xuICByZXR1cm4gSW50ZXJwcmV0ZXI7XG59KCk7XG5cbnZhciByZXNvbHZlU3Bhd25PcHRpb25zID0gZnVuY3Rpb24gKG5hbWVPck9wdGlvbnMpIHtcbiAgaWYgKGlzU3RyaW5nKG5hbWVPck9wdGlvbnMpKSB7XG4gICAgcmV0dXJuIF9fYXNzaWduKF9fYXNzaWduKHt9LCBERUZBVUxUX1NQQVdOX09QVElPTlMpLCB7XG4gICAgICBuYW1lOiBuYW1lT3JPcHRpb25zXG4gICAgfSk7XG4gIH1cblxuICByZXR1cm4gX19hc3NpZ24oX19hc3NpZ24oX19hc3NpZ24oe30sIERFRkFVTFRfU1BBV05fT1BUSU9OUyksIHtcbiAgICBuYW1lOiB1bmlxdWVJZCgpXG4gIH0pLCBuYW1lT3JPcHRpb25zKTtcbn07XG5cbmZ1bmN0aW9uIHNwYXduKGVudGl0eSwgbmFtZU9yT3B0aW9ucykge1xuICB2YXIgcmVzb2x2ZWRPcHRpb25zID0gcmVzb2x2ZVNwYXduT3B0aW9ucyhuYW1lT3JPcHRpb25zKTtcbiAgcmV0dXJuIGNvbnN1bWUoZnVuY3Rpb24gKHNlcnZpY2UpIHtcbiAgICBpZiAoIUlTX1BST0RVQ1RJT04pIHtcbiAgICAgIHZhciBpc0xhenlFbnRpdHkgPSBpc01hY2hpbmUoZW50aXR5KSB8fCBpc0Z1bmN0aW9uKGVudGl0eSk7XG4gICAgICB3YXJuKCEhc2VydmljZSB8fCBpc0xhenlFbnRpdHksIFwiQXR0ZW1wdGVkIHRvIHNwYXduIGFuIEFjdG9yIChJRDogXFxcIlwiICsgKGlzTWFjaGluZShlbnRpdHkpID8gZW50aXR5LmlkIDogJ3VuZGVmaW5lZCcpICsgXCJcXFwiKSBvdXRzaWRlIG9mIGEgc2VydmljZS4gVGhpcyB3aWxsIGhhdmUgbm8gZWZmZWN0LlwiKTtcbiAgICB9XG5cbiAgICBpZiAoc2VydmljZSkge1xuICAgICAgcmV0dXJuIHNlcnZpY2Uuc3Bhd24oZW50aXR5LCByZXNvbHZlZE9wdGlvbnMubmFtZSwgcmVzb2x2ZWRPcHRpb25zKTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIGNyZWF0ZURlZmVycmVkQWN0b3IoZW50aXR5LCByZXNvbHZlZE9wdGlvbnMubmFtZSk7XG4gICAgfVxuICB9KTtcbn1cbi8qKlxyXG4gKiBDcmVhdGVzIGEgbmV3IEludGVycHJldGVyIGluc3RhbmNlIGZvciB0aGUgZ2l2ZW4gbWFjaGluZSB3aXRoIHRoZSBwcm92aWRlZCBvcHRpb25zLCBpZiBhbnkuXHJcbiAqXHJcbiAqIEBwYXJhbSBtYWNoaW5lIFRoZSBtYWNoaW5lIHRvIGludGVycHJldFxyXG4gKiBAcGFyYW0gb3B0aW9ucyBJbnRlcnByZXRlciBvcHRpb25zXHJcbiAqL1xuXG5cbmZ1bmN0aW9uIGludGVycHJldChtYWNoaW5lLCBvcHRpb25zKSB7XG4gIHZhciBpbnRlcnByZXRlciA9IG5ldyBJbnRlcnByZXRlcihtYWNoaW5lLCBvcHRpb25zKTtcbiAgcmV0dXJuIGludGVycHJldGVyO1xufVxuXG5leHBvcnQgeyBJbnRlcnByZXRlciwgaW50ZXJwcmV0LCBzcGF3biB9OyIsImltcG9ydCB7IF9fYXNzaWduLCBfX3Jlc3QgfSBmcm9tICcuL192aXJ0dWFsL190c2xpYi5qcyc7XG5pbXBvcnQgeyBpbnZva2UgfSBmcm9tICcuL2FjdGlvblR5cGVzLmpzJztcbmltcG9ydCAnLi9hY3Rpb25zLmpzJztcblxuZnVuY3Rpb24gdG9JbnZva2VTb3VyY2Uoc3JjKSB7XG4gIGlmICh0eXBlb2Ygc3JjID09PSAnc3RyaW5nJykge1xuICAgIHZhciBzaW1wbGVTcmMgPSB7XG4gICAgICB0eXBlOiBzcmNcbiAgICB9O1xuXG4gICAgc2ltcGxlU3JjLnRvU3RyaW5nID0gZnVuY3Rpb24gKCkge1xuICAgICAgcmV0dXJuIHNyYztcbiAgICB9OyAvLyB2NCBjb21wYXQgLSBUT0RPOiByZW1vdmUgaW4gdjVcblxuXG4gICAgcmV0dXJuIHNpbXBsZVNyYztcbiAgfVxuXG4gIHJldHVybiBzcmM7XG59XG5cbmZ1bmN0aW9uIHRvSW52b2tlRGVmaW5pdGlvbihpbnZva2VDb25maWcpIHtcbiAgcmV0dXJuIF9fYXNzaWduKF9fYXNzaWduKHtcbiAgICB0eXBlOiBpbnZva2VcbiAgfSwgaW52b2tlQ29uZmlnKSwge1xuICAgIHRvSlNPTjogZnVuY3Rpb24gKCkge1xuICAgICAgdmFyIG9uRG9uZSA9IGludm9rZUNvbmZpZy5vbkRvbmUsXG4gICAgICAgICAgb25FcnJvciA9IGludm9rZUNvbmZpZy5vbkVycm9yLFxuICAgICAgICAgIGludm9rZURlZiA9IF9fcmVzdChpbnZva2VDb25maWcsIFtcIm9uRG9uZVwiLCBcIm9uRXJyb3JcIl0pO1xuXG4gICAgICByZXR1cm4gX19hc3NpZ24oX19hc3NpZ24oe30sIGludm9rZURlZiksIHtcbiAgICAgICAgdHlwZTogaW52b2tlLFxuICAgICAgICBzcmM6IHRvSW52b2tlU291cmNlKGludm9rZUNvbmZpZy5zcmMpXG4gICAgICB9KTtcbiAgICB9XG4gIH0pO1xufVxuXG5leHBvcnQgeyB0b0ludm9rZURlZmluaXRpb24sIHRvSW52b2tlU291cmNlIH07IiwiaW1wb3J0IHsgX192YWx1ZXMgfSBmcm9tICcuL192aXJ0dWFsL190c2xpYi5qcyc7XG5pbXBvcnQgeyBrZXlzLCBtYXRjaGVzU3RhdGUgfSBmcm9tICcuL3V0aWxzLmpzJztcblxuZnVuY3Rpb24gbWFwU3RhdGUoc3RhdGVNYXAsIHN0YXRlSWQpIHtcbiAgdmFyIGVfMSwgX2E7XG5cbiAgdmFyIGZvdW5kU3RhdGVJZDtcblxuICB0cnkge1xuICAgIGZvciAodmFyIF9iID0gX192YWx1ZXMoa2V5cyhzdGF0ZU1hcCkpLCBfYyA9IF9iLm5leHQoKTsgIV9jLmRvbmU7IF9jID0gX2IubmV4dCgpKSB7XG4gICAgICB2YXIgbWFwcGVkU3RhdGVJZCA9IF9jLnZhbHVlO1xuXG4gICAgICBpZiAobWF0Y2hlc1N0YXRlKG1hcHBlZFN0YXRlSWQsIHN0YXRlSWQpICYmICghZm91bmRTdGF0ZUlkIHx8IHN0YXRlSWQubGVuZ3RoID4gZm91bmRTdGF0ZUlkLmxlbmd0aCkpIHtcbiAgICAgICAgZm91bmRTdGF0ZUlkID0gbWFwcGVkU3RhdGVJZDtcbiAgICAgIH1cbiAgICB9XG4gIH0gY2F0Y2ggKGVfMV8xKSB7XG4gICAgZV8xID0ge1xuICAgICAgZXJyb3I6IGVfMV8xXG4gICAgfTtcbiAgfSBmaW5hbGx5IHtcbiAgICB0cnkge1xuICAgICAgaWYgKF9jICYmICFfYy5kb25lICYmIChfYSA9IF9iLnJldHVybikpIF9hLmNhbGwoX2IpO1xuICAgIH0gZmluYWxseSB7XG4gICAgICBpZiAoZV8xKSB0aHJvdyBlXzEuZXJyb3I7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHN0YXRlTWFwW2ZvdW5kU3RhdGVJZF07XG59XG5cbmV4cG9ydCB7IG1hcFN0YXRlIH07IiwiaW1wb3J0IHsgX192YWx1ZXMsIF9fcmVhZCB9IGZyb20gJy4vX3ZpcnR1YWwvX3RzbGliLmpzJztcbmltcG9ydCB7IFN0YXRlIH0gZnJvbSAnLi9TdGF0ZS5qcyc7XG5cbmZ1bmN0aW9uIG1hdGNoU3RhdGUoc3RhdGUsIHBhdHRlcm5zLCBkZWZhdWx0VmFsdWUpIHtcbiAgdmFyIGVfMSwgX2E7XG5cbiAgdmFyIHJlc29sdmVkU3RhdGUgPSBTdGF0ZS5mcm9tKHN0YXRlLCBzdGF0ZSBpbnN0YW5jZW9mIFN0YXRlID8gc3RhdGUuY29udGV4dCA6IHVuZGVmaW5lZCk7XG5cbiAgdHJ5IHtcbiAgICBmb3IgKHZhciBwYXR0ZXJuc18xID0gX192YWx1ZXMocGF0dGVybnMpLCBwYXR0ZXJuc18xXzEgPSBwYXR0ZXJuc18xLm5leHQoKTsgIXBhdHRlcm5zXzFfMS5kb25lOyBwYXR0ZXJuc18xXzEgPSBwYXR0ZXJuc18xLm5leHQoKSkge1xuICAgICAgdmFyIF9iID0gX19yZWFkKHBhdHRlcm5zXzFfMS52YWx1ZSwgMiksXG4gICAgICAgICAgc3RhdGVWYWx1ZSA9IF9iWzBdLFxuICAgICAgICAgIGdldFZhbHVlID0gX2JbMV07XG5cbiAgICAgIGlmIChyZXNvbHZlZFN0YXRlLm1hdGNoZXMoc3RhdGVWYWx1ZSkpIHtcbiAgICAgICAgcmV0dXJuIGdldFZhbHVlKHJlc29sdmVkU3RhdGUpO1xuICAgICAgfVxuICAgIH1cbiAgfSBjYXRjaCAoZV8xXzEpIHtcbiAgICBlXzEgPSB7XG4gICAgICBlcnJvcjogZV8xXzFcbiAgICB9O1xuICB9IGZpbmFsbHkge1xuICAgIHRyeSB7XG4gICAgICBpZiAocGF0dGVybnNfMV8xICYmICFwYXR0ZXJuc18xXzEuZG9uZSAmJiAoX2EgPSBwYXR0ZXJuc18xLnJldHVybikpIF9hLmNhbGwocGF0dGVybnNfMSk7XG4gICAgfSBmaW5hbGx5IHtcbiAgICAgIGlmIChlXzEpIHRocm93IGVfMS5lcnJvcjtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gZGVmYXVsdFZhbHVlKHJlc29sdmVkU3RhdGUpO1xufVxuXG5leHBvcnQgeyBtYXRjaFN0YXRlIH07IiwidmFyIGNoaWxkcmVuID0gLyojX19QVVJFX18qL25ldyBNYXAoKTtcbnZhciBzZXNzaW9uSWRJbmRleCA9IDA7XG52YXIgcmVnaXN0cnkgPSB7XG4gIGJvb2tJZDogZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiBcIng6XCIgKyBzZXNzaW9uSWRJbmRleCsrO1xuICB9LFxuICByZWdpc3RlcjogZnVuY3Rpb24gKGlkLCBhY3Rvcikge1xuICAgIGNoaWxkcmVuLnNldChpZCwgYWN0b3IpO1xuICAgIHJldHVybiBpZDtcbiAgfSxcbiAgZ2V0OiBmdW5jdGlvbiAoaWQpIHtcbiAgICByZXR1cm4gY2hpbGRyZW4uZ2V0KGlkKTtcbiAgfSxcbiAgZnJlZTogZnVuY3Rpb24gKGlkKSB7XG4gICAgY2hpbGRyZW4uZGVsZXRlKGlkKTtcbiAgfVxufTtcbmV4cG9ydCB7IHJlZ2lzdHJ5IH07IiwiaW1wb3J0IHsgX19hc3NpZ24gfSBmcm9tICcuL192aXJ0dWFsL190c2xpYi5qcyc7XG52YXIgZGVmYXVsdE9wdGlvbnMgPSB7XG4gIGRlZmVyRXZlbnRzOiBmYWxzZVxufTtcblxudmFyIFNjaGVkdWxlciA9XG4vKiNfX1BVUkVfXyovXG5cbi8qKiBAY2xhc3MgKi9cbmZ1bmN0aW9uICgpIHtcbiAgZnVuY3Rpb24gU2NoZWR1bGVyKG9wdGlvbnMpIHtcbiAgICB0aGlzLnByb2Nlc3NpbmdFdmVudCA9IGZhbHNlO1xuICAgIHRoaXMucXVldWUgPSBbXTtcbiAgICB0aGlzLmluaXRpYWxpemVkID0gZmFsc2U7XG4gICAgdGhpcy5vcHRpb25zID0gX19hc3NpZ24oX19hc3NpZ24oe30sIGRlZmF1bHRPcHRpb25zKSwgb3B0aW9ucyk7XG4gIH1cblxuICBTY2hlZHVsZXIucHJvdG90eXBlLmluaXRpYWxpemUgPSBmdW5jdGlvbiAoY2FsbGJhY2spIHtcbiAgICB0aGlzLmluaXRpYWxpemVkID0gdHJ1ZTtcblxuICAgIGlmIChjYWxsYmFjaykge1xuICAgICAgaWYgKCF0aGlzLm9wdGlvbnMuZGVmZXJFdmVudHMpIHtcbiAgICAgICAgdGhpcy5zY2hlZHVsZShjYWxsYmFjayk7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgdGhpcy5wcm9jZXNzKGNhbGxiYWNrKTtcbiAgICB9XG5cbiAgICB0aGlzLmZsdXNoRXZlbnRzKCk7XG4gIH07XG5cbiAgU2NoZWR1bGVyLnByb3RvdHlwZS5zY2hlZHVsZSA9IGZ1bmN0aW9uICh0YXNrKSB7XG4gICAgaWYgKCF0aGlzLmluaXRpYWxpemVkIHx8IHRoaXMucHJvY2Vzc2luZ0V2ZW50KSB7XG4gICAgICB0aGlzLnF1ZXVlLnB1c2godGFzayk7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgaWYgKHRoaXMucXVldWUubGVuZ3RoICE9PSAwKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ0V2ZW50IHF1ZXVlIHNob3VsZCBiZSBlbXB0eSB3aGVuIGl0IGlzIG5vdCBwcm9jZXNzaW5nIGV2ZW50cycpO1xuICAgIH1cblxuICAgIHRoaXMucHJvY2Vzcyh0YXNrKTtcbiAgICB0aGlzLmZsdXNoRXZlbnRzKCk7XG4gIH07XG5cbiAgU2NoZWR1bGVyLnByb3RvdHlwZS5jbGVhciA9IGZ1bmN0aW9uICgpIHtcbiAgICB0aGlzLnF1ZXVlID0gW107XG4gIH07XG5cbiAgU2NoZWR1bGVyLnByb3RvdHlwZS5mbHVzaEV2ZW50cyA9IGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgbmV4dENhbGxiYWNrID0gdGhpcy5xdWV1ZS5zaGlmdCgpO1xuXG4gICAgd2hpbGUgKG5leHRDYWxsYmFjaykge1xuICAgICAgdGhpcy5wcm9jZXNzKG5leHRDYWxsYmFjayk7XG4gICAgICBuZXh0Q2FsbGJhY2sgPSB0aGlzLnF1ZXVlLnNoaWZ0KCk7XG4gICAgfVxuICB9O1xuXG4gIFNjaGVkdWxlci5wcm90b3R5cGUucHJvY2VzcyA9IGZ1bmN0aW9uIChjYWxsYmFjaykge1xuICAgIHRoaXMucHJvY2Vzc2luZ0V2ZW50ID0gdHJ1ZTtcblxuICAgIHRyeSB7XG4gICAgICBjYWxsYmFjaygpO1xuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgIC8vIHRoZXJlIGlzIG5vIHVzZSB0byBrZWVwIHRoZSBmdXR1cmUgZXZlbnRzXG4gICAgICAvLyBhcyB0aGUgc2l0dWF0aW9uIGlzIG5vdCBhbnltb3JlIHRoZSBzYW1lXG4gICAgICB0aGlzLmNsZWFyKCk7XG4gICAgICB0aHJvdyBlO1xuICAgIH0gZmluYWxseSB7XG4gICAgICB0aGlzLnByb2Nlc3NpbmdFdmVudCA9IGZhbHNlO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gU2NoZWR1bGVyO1xufSgpO1xuXG5leHBvcnQgeyBTY2hlZHVsZXIgfTsiLCIvKipcclxuICogTWFpbnRhaW5zIGEgc3RhY2sgb2YgdGhlIGN1cnJlbnQgc2VydmljZSBpbiBzY29wZS5cclxuICogVGhpcyBpcyB1c2VkIHRvIHByb3ZpZGUgdGhlIGNvcnJlY3Qgc2VydmljZSB0byBzcGF3bigpLlxyXG4gKi9cbnZhciBzZXJ2aWNlU3RhY2sgPSBbXTtcblxudmFyIHByb3ZpZGUgPSBmdW5jdGlvbiAoc2VydmljZSwgZm4pIHtcbiAgc2VydmljZVN0YWNrLnB1c2goc2VydmljZSk7XG4gIHZhciByZXN1bHQgPSBmbihzZXJ2aWNlKTtcbiAgc2VydmljZVN0YWNrLnBvcCgpO1xuICByZXR1cm4gcmVzdWx0O1xufTtcblxudmFyIGNvbnN1bWUgPSBmdW5jdGlvbiAoZm4pIHtcbiAgcmV0dXJuIGZuKHNlcnZpY2VTdGFja1tzZXJ2aWNlU3RhY2subGVuZ3RoIC0gMV0pO1xufTtcblxuZXhwb3J0IHsgY29uc3VtZSwgcHJvdmlkZSB9OyIsImltcG9ydCB7IF9fdmFsdWVzLCBfX3NwcmVhZCB9IGZyb20gJy4vX3ZpcnR1YWwvX3RzbGliLmpzJztcbmltcG9ydCB7IGtleXMsIGZsYXR0ZW4gfSBmcm9tICcuL3V0aWxzLmpzJztcblxudmFyIGlzTGVhZk5vZGUgPSBmdW5jdGlvbiAoc3RhdGVOb2RlKSB7XG4gIHJldHVybiBzdGF0ZU5vZGUudHlwZSA9PT0gJ2F0b21pYycgfHwgc3RhdGVOb2RlLnR5cGUgPT09ICdmaW5hbCc7XG59O1xuXG5mdW5jdGlvbiBnZXRDaGlsZHJlbihzdGF0ZU5vZGUpIHtcbiAgcmV0dXJuIGtleXMoc3RhdGVOb2RlLnN0YXRlcykubWFwKGZ1bmN0aW9uIChrZXkpIHtcbiAgICByZXR1cm4gc3RhdGVOb2RlLnN0YXRlc1trZXldO1xuICB9KTtcbn1cblxuZnVuY3Rpb24gZ2V0QWxsU3RhdGVOb2RlcyhzdGF0ZU5vZGUpIHtcbiAgdmFyIHN0YXRlTm9kZXMgPSBbc3RhdGVOb2RlXTtcblxuICBpZiAoaXNMZWFmTm9kZShzdGF0ZU5vZGUpKSB7XG4gICAgcmV0dXJuIHN0YXRlTm9kZXM7XG4gIH1cblxuICByZXR1cm4gc3RhdGVOb2Rlcy5jb25jYXQoZmxhdHRlbihnZXRDaGlsZHJlbihzdGF0ZU5vZGUpLm1hcChnZXRBbGxTdGF0ZU5vZGVzKSkpO1xufVxuXG5mdW5jdGlvbiBnZXRDb25maWd1cmF0aW9uKHByZXZTdGF0ZU5vZGVzLCBzdGF0ZU5vZGVzKSB7XG4gIHZhciBlXzEsIF9hLCBlXzIsIF9iLCBlXzMsIF9jLCBlXzQsIF9kO1xuXG4gIHZhciBwcmV2Q29uZmlndXJhdGlvbiA9IG5ldyBTZXQocHJldlN0YXRlTm9kZXMpO1xuICB2YXIgcHJldkFkakxpc3QgPSBnZXRBZGpMaXN0KHByZXZDb25maWd1cmF0aW9uKTtcbiAgdmFyIGNvbmZpZ3VyYXRpb24gPSBuZXcgU2V0KHN0YXRlTm9kZXMpO1xuXG4gIHRyeSB7XG4gICAgLy8gYWRkIGFsbCBhbmNlc3RvcnNcbiAgICBmb3IgKHZhciBjb25maWd1cmF0aW9uXzEgPSBfX3ZhbHVlcyhjb25maWd1cmF0aW9uKSwgY29uZmlndXJhdGlvbl8xXzEgPSBjb25maWd1cmF0aW9uXzEubmV4dCgpOyAhY29uZmlndXJhdGlvbl8xXzEuZG9uZTsgY29uZmlndXJhdGlvbl8xXzEgPSBjb25maWd1cmF0aW9uXzEubmV4dCgpKSB7XG4gICAgICB2YXIgcyA9IGNvbmZpZ3VyYXRpb25fMV8xLnZhbHVlO1xuICAgICAgdmFyIG0gPSBzLnBhcmVudDtcblxuICAgICAgd2hpbGUgKG0gJiYgIWNvbmZpZ3VyYXRpb24uaGFzKG0pKSB7XG4gICAgICAgIGNvbmZpZ3VyYXRpb24uYWRkKG0pO1xuICAgICAgICBtID0gbS5wYXJlbnQ7XG4gICAgICB9XG4gICAgfVxuICB9IGNhdGNoIChlXzFfMSkge1xuICAgIGVfMSA9IHtcbiAgICAgIGVycm9yOiBlXzFfMVxuICAgIH07XG4gIH0gZmluYWxseSB7XG4gICAgdHJ5IHtcbiAgICAgIGlmIChjb25maWd1cmF0aW9uXzFfMSAmJiAhY29uZmlndXJhdGlvbl8xXzEuZG9uZSAmJiAoX2EgPSBjb25maWd1cmF0aW9uXzEucmV0dXJuKSkgX2EuY2FsbChjb25maWd1cmF0aW9uXzEpO1xuICAgIH0gZmluYWxseSB7XG4gICAgICBpZiAoZV8xKSB0aHJvdyBlXzEuZXJyb3I7XG4gICAgfVxuICB9XG5cbiAgdmFyIGFkakxpc3QgPSBnZXRBZGpMaXN0KGNvbmZpZ3VyYXRpb24pO1xuXG4gIHRyeSB7XG4gICAgLy8gYWRkIGRlc2NlbmRhbnRzXG4gICAgZm9yICh2YXIgY29uZmlndXJhdGlvbl8yID0gX192YWx1ZXMoY29uZmlndXJhdGlvbiksIGNvbmZpZ3VyYXRpb25fMl8xID0gY29uZmlndXJhdGlvbl8yLm5leHQoKTsgIWNvbmZpZ3VyYXRpb25fMl8xLmRvbmU7IGNvbmZpZ3VyYXRpb25fMl8xID0gY29uZmlndXJhdGlvbl8yLm5leHQoKSkge1xuICAgICAgdmFyIHMgPSBjb25maWd1cmF0aW9uXzJfMS52YWx1ZTsgLy8gaWYgcHJldmlvdXNseSBhY3RpdmUsIGFkZCBleGlzdGluZyBjaGlsZCBub2Rlc1xuXG4gICAgICBpZiAocy50eXBlID09PSAnY29tcG91bmQnICYmICghYWRqTGlzdC5nZXQocykgfHwgIWFkakxpc3QuZ2V0KHMpLmxlbmd0aCkpIHtcbiAgICAgICAgaWYgKHByZXZBZGpMaXN0LmdldChzKSkge1xuICAgICAgICAgIHByZXZBZGpMaXN0LmdldChzKS5mb3JFYWNoKGZ1bmN0aW9uIChzbikge1xuICAgICAgICAgICAgcmV0dXJuIGNvbmZpZ3VyYXRpb24uYWRkKHNuKTtcbiAgICAgICAgICB9KTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBzLmluaXRpYWxTdGF0ZU5vZGVzLmZvckVhY2goZnVuY3Rpb24gKHNuKSB7XG4gICAgICAgICAgICByZXR1cm4gY29uZmlndXJhdGlvbi5hZGQoc24pO1xuICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBpZiAocy50eXBlID09PSAncGFyYWxsZWwnKSB7XG4gICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIGZvciAodmFyIF9lID0gKGVfMyA9IHZvaWQgMCwgX192YWx1ZXMoZ2V0Q2hpbGRyZW4ocykpKSwgX2YgPSBfZS5uZXh0KCk7ICFfZi5kb25lOyBfZiA9IF9lLm5leHQoKSkge1xuICAgICAgICAgICAgICB2YXIgY2hpbGQgPSBfZi52YWx1ZTtcblxuICAgICAgICAgICAgICBpZiAoY2hpbGQudHlwZSA9PT0gJ2hpc3RvcnknKSB7XG4gICAgICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICBpZiAoIWNvbmZpZ3VyYXRpb24uaGFzKGNoaWxkKSkge1xuICAgICAgICAgICAgICAgIGNvbmZpZ3VyYXRpb24uYWRkKGNoaWxkKTtcblxuICAgICAgICAgICAgICAgIGlmIChwcmV2QWRqTGlzdC5nZXQoY2hpbGQpKSB7XG4gICAgICAgICAgICAgICAgICBwcmV2QWRqTGlzdC5nZXQoY2hpbGQpLmZvckVhY2goZnVuY3Rpb24gKHNuKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBjb25maWd1cmF0aW9uLmFkZChzbik7XG4gICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgY2hpbGQuaW5pdGlhbFN0YXRlTm9kZXMuZm9yRWFjaChmdW5jdGlvbiAoc24pIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGNvbmZpZ3VyYXRpb24uYWRkKHNuKTtcbiAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH0gY2F0Y2ggKGVfM18xKSB7XG4gICAgICAgICAgICBlXzMgPSB7XG4gICAgICAgICAgICAgIGVycm9yOiBlXzNfMVxuICAgICAgICAgICAgfTtcbiAgICAgICAgICB9IGZpbmFsbHkge1xuICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgaWYgKF9mICYmICFfZi5kb25lICYmIChfYyA9IF9lLnJldHVybikpIF9jLmNhbGwoX2UpO1xuICAgICAgICAgICAgfSBmaW5hbGx5IHtcbiAgICAgICAgICAgICAgaWYgKGVfMykgdGhyb3cgZV8zLmVycm9yO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfSBjYXRjaCAoZV8yXzEpIHtcbiAgICBlXzIgPSB7XG4gICAgICBlcnJvcjogZV8yXzFcbiAgICB9O1xuICB9IGZpbmFsbHkge1xuICAgIHRyeSB7XG4gICAgICBpZiAoY29uZmlndXJhdGlvbl8yXzEgJiYgIWNvbmZpZ3VyYXRpb25fMl8xLmRvbmUgJiYgKF9iID0gY29uZmlndXJhdGlvbl8yLnJldHVybikpIF9iLmNhbGwoY29uZmlndXJhdGlvbl8yKTtcbiAgICB9IGZpbmFsbHkge1xuICAgICAgaWYgKGVfMikgdGhyb3cgZV8yLmVycm9yO1xuICAgIH1cbiAgfVxuXG4gIHRyeSB7XG4gICAgLy8gYWRkIGFsbCBhbmNlc3RvcnNcbiAgICBmb3IgKHZhciBjb25maWd1cmF0aW9uXzMgPSBfX3ZhbHVlcyhjb25maWd1cmF0aW9uKSwgY29uZmlndXJhdGlvbl8zXzEgPSBjb25maWd1cmF0aW9uXzMubmV4dCgpOyAhY29uZmlndXJhdGlvbl8zXzEuZG9uZTsgY29uZmlndXJhdGlvbl8zXzEgPSBjb25maWd1cmF0aW9uXzMubmV4dCgpKSB7XG4gICAgICB2YXIgcyA9IGNvbmZpZ3VyYXRpb25fM18xLnZhbHVlO1xuICAgICAgdmFyIG0gPSBzLnBhcmVudDtcblxuICAgICAgd2hpbGUgKG0gJiYgIWNvbmZpZ3VyYXRpb24uaGFzKG0pKSB7XG4gICAgICAgIGNvbmZpZ3VyYXRpb24uYWRkKG0pO1xuICAgICAgICBtID0gbS5wYXJlbnQ7XG4gICAgICB9XG4gICAgfVxuICB9IGNhdGNoIChlXzRfMSkge1xuICAgIGVfNCA9IHtcbiAgICAgIGVycm9yOiBlXzRfMVxuICAgIH07XG4gIH0gZmluYWxseSB7XG4gICAgdHJ5IHtcbiAgICAgIGlmIChjb25maWd1cmF0aW9uXzNfMSAmJiAhY29uZmlndXJhdGlvbl8zXzEuZG9uZSAmJiAoX2QgPSBjb25maWd1cmF0aW9uXzMucmV0dXJuKSkgX2QuY2FsbChjb25maWd1cmF0aW9uXzMpO1xuICAgIH0gZmluYWxseSB7XG4gICAgICBpZiAoZV80KSB0aHJvdyBlXzQuZXJyb3I7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGNvbmZpZ3VyYXRpb247XG59XG5cbmZ1bmN0aW9uIGdldFZhbHVlRnJvbUFkaihiYXNlTm9kZSwgYWRqTGlzdCkge1xuICB2YXIgY2hpbGRTdGF0ZU5vZGVzID0gYWRqTGlzdC5nZXQoYmFzZU5vZGUpO1xuXG4gIGlmICghY2hpbGRTdGF0ZU5vZGVzKSB7XG4gICAgcmV0dXJuIHt9OyAvLyB0b2RvOiBmaXg/XG4gIH1cblxuICBpZiAoYmFzZU5vZGUudHlwZSA9PT0gJ2NvbXBvdW5kJykge1xuICAgIHZhciBjaGlsZFN0YXRlTm9kZSA9IGNoaWxkU3RhdGVOb2Rlc1swXTtcblxuICAgIGlmIChjaGlsZFN0YXRlTm9kZSkge1xuICAgICAgaWYgKGlzTGVhZk5vZGUoY2hpbGRTdGF0ZU5vZGUpKSB7XG4gICAgICAgIHJldHVybiBjaGlsZFN0YXRlTm9kZS5rZXk7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiB7fTtcbiAgICB9XG4gIH1cblxuICB2YXIgc3RhdGVWYWx1ZSA9IHt9O1xuICBjaGlsZFN0YXRlTm9kZXMuZm9yRWFjaChmdW5jdGlvbiAoY3NuKSB7XG4gICAgc3RhdGVWYWx1ZVtjc24ua2V5XSA9IGdldFZhbHVlRnJvbUFkaihjc24sIGFkakxpc3QpO1xuICB9KTtcbiAgcmV0dXJuIHN0YXRlVmFsdWU7XG59XG5cbmZ1bmN0aW9uIGdldEFkakxpc3QoY29uZmlndXJhdGlvbikge1xuICB2YXIgZV81LCBfYTtcblxuICB2YXIgYWRqTGlzdCA9IG5ldyBNYXAoKTtcblxuICB0cnkge1xuICAgIGZvciAodmFyIGNvbmZpZ3VyYXRpb25fNCA9IF9fdmFsdWVzKGNvbmZpZ3VyYXRpb24pLCBjb25maWd1cmF0aW9uXzRfMSA9IGNvbmZpZ3VyYXRpb25fNC5uZXh0KCk7ICFjb25maWd1cmF0aW9uXzRfMS5kb25lOyBjb25maWd1cmF0aW9uXzRfMSA9IGNvbmZpZ3VyYXRpb25fNC5uZXh0KCkpIHtcbiAgICAgIHZhciBzID0gY29uZmlndXJhdGlvbl80XzEudmFsdWU7XG5cbiAgICAgIGlmICghYWRqTGlzdC5oYXMocykpIHtcbiAgICAgICAgYWRqTGlzdC5zZXQocywgW10pO1xuICAgICAgfVxuXG4gICAgICBpZiAocy5wYXJlbnQpIHtcbiAgICAgICAgaWYgKCFhZGpMaXN0LmhhcyhzLnBhcmVudCkpIHtcbiAgICAgICAgICBhZGpMaXN0LnNldChzLnBhcmVudCwgW10pO1xuICAgICAgICB9XG5cbiAgICAgICAgYWRqTGlzdC5nZXQocy5wYXJlbnQpLnB1c2gocyk7XG4gICAgICB9XG4gICAgfVxuICB9IGNhdGNoIChlXzVfMSkge1xuICAgIGVfNSA9IHtcbiAgICAgIGVycm9yOiBlXzVfMVxuICAgIH07XG4gIH0gZmluYWxseSB7XG4gICAgdHJ5IHtcbiAgICAgIGlmIChjb25maWd1cmF0aW9uXzRfMSAmJiAhY29uZmlndXJhdGlvbl80XzEuZG9uZSAmJiAoX2EgPSBjb25maWd1cmF0aW9uXzQucmV0dXJuKSkgX2EuY2FsbChjb25maWd1cmF0aW9uXzQpO1xuICAgIH0gZmluYWxseSB7XG4gICAgICBpZiAoZV81KSB0aHJvdyBlXzUuZXJyb3I7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGFkakxpc3Q7XG59XG5cbmZ1bmN0aW9uIGdldFZhbHVlKHJvb3ROb2RlLCBjb25maWd1cmF0aW9uKSB7XG4gIHZhciBjb25maWcgPSBnZXRDb25maWd1cmF0aW9uKFtyb290Tm9kZV0sIGNvbmZpZ3VyYXRpb24pO1xuICByZXR1cm4gZ2V0VmFsdWVGcm9tQWRqKHJvb3ROb2RlLCBnZXRBZGpMaXN0KGNvbmZpZykpO1xufVxuXG5mdW5jdGlvbiBoYXMoaXRlcmFibGUsIGl0ZW0pIHtcbiAgaWYgKEFycmF5LmlzQXJyYXkoaXRlcmFibGUpKSB7XG4gICAgcmV0dXJuIGl0ZXJhYmxlLnNvbWUoZnVuY3Rpb24gKG1lbWJlcikge1xuICAgICAgcmV0dXJuIG1lbWJlciA9PT0gaXRlbTtcbiAgICB9KTtcbiAgfVxuXG4gIGlmIChpdGVyYWJsZSBpbnN0YW5jZW9mIFNldCkge1xuICAgIHJldHVybiBpdGVyYWJsZS5oYXMoaXRlbSk7XG4gIH1cblxuICByZXR1cm4gZmFsc2U7IC8vIFRPRE86IGZpeFxufVxuXG5mdW5jdGlvbiBuZXh0RXZlbnRzKGNvbmZpZ3VyYXRpb24pIHtcbiAgcmV0dXJuIGZsYXR0ZW4oX19zcHJlYWQobmV3IFNldChjb25maWd1cmF0aW9uLm1hcChmdW5jdGlvbiAoc24pIHtcbiAgICByZXR1cm4gc24ub3duRXZlbnRzO1xuICB9KSkpKTtcbn1cblxuZnVuY3Rpb24gaXNJbkZpbmFsU3RhdGUoY29uZmlndXJhdGlvbiwgc3RhdGVOb2RlKSB7XG4gIGlmIChzdGF0ZU5vZGUudHlwZSA9PT0gJ2NvbXBvdW5kJykge1xuICAgIHJldHVybiBnZXRDaGlsZHJlbihzdGF0ZU5vZGUpLnNvbWUoZnVuY3Rpb24gKHMpIHtcbiAgICAgIHJldHVybiBzLnR5cGUgPT09ICdmaW5hbCcgJiYgaGFzKGNvbmZpZ3VyYXRpb24sIHMpO1xuICAgIH0pO1xuICB9XG5cbiAgaWYgKHN0YXRlTm9kZS50eXBlID09PSAncGFyYWxsZWwnKSB7XG4gICAgcmV0dXJuIGdldENoaWxkcmVuKHN0YXRlTm9kZSkuZXZlcnkoZnVuY3Rpb24gKHNuKSB7XG4gICAgICByZXR1cm4gaXNJbkZpbmFsU3RhdGUoY29uZmlndXJhdGlvbiwgc24pO1xuICAgIH0pO1xuICB9XG5cbiAgcmV0dXJuIGZhbHNlO1xufVxuXG5leHBvcnQgeyBnZXRBZGpMaXN0LCBnZXRBbGxTdGF0ZU5vZGVzLCBnZXRDaGlsZHJlbiwgZ2V0Q29uZmlndXJhdGlvbiwgZ2V0VmFsdWUsIGhhcywgaXNJbkZpbmFsU3RhdGUsIGlzTGVhZk5vZGUsIG5leHRFdmVudHMgfTsiLCJ2YXIgQWN0aW9uVHlwZXM7XG5cbihmdW5jdGlvbiAoQWN0aW9uVHlwZXMpIHtcbiAgQWN0aW9uVHlwZXNbXCJTdGFydFwiXSA9IFwieHN0YXRlLnN0YXJ0XCI7XG4gIEFjdGlvblR5cGVzW1wiU3RvcFwiXSA9IFwieHN0YXRlLnN0b3BcIjtcbiAgQWN0aW9uVHlwZXNbXCJSYWlzZVwiXSA9IFwieHN0YXRlLnJhaXNlXCI7XG4gIEFjdGlvblR5cGVzW1wiU2VuZFwiXSA9IFwieHN0YXRlLnNlbmRcIjtcbiAgQWN0aW9uVHlwZXNbXCJDYW5jZWxcIl0gPSBcInhzdGF0ZS5jYW5jZWxcIjtcbiAgQWN0aW9uVHlwZXNbXCJOdWxsRXZlbnRcIl0gPSBcIlwiO1xuICBBY3Rpb25UeXBlc1tcIkFzc2lnblwiXSA9IFwieHN0YXRlLmFzc2lnblwiO1xuICBBY3Rpb25UeXBlc1tcIkFmdGVyXCJdID0gXCJ4c3RhdGUuYWZ0ZXJcIjtcbiAgQWN0aW9uVHlwZXNbXCJEb25lU3RhdGVcIl0gPSBcImRvbmUuc3RhdGVcIjtcbiAgQWN0aW9uVHlwZXNbXCJEb25lSW52b2tlXCJdID0gXCJkb25lLmludm9rZVwiO1xuICBBY3Rpb25UeXBlc1tcIkxvZ1wiXSA9IFwieHN0YXRlLmxvZ1wiO1xuICBBY3Rpb25UeXBlc1tcIkluaXRcIl0gPSBcInhzdGF0ZS5pbml0XCI7XG4gIEFjdGlvblR5cGVzW1wiSW52b2tlXCJdID0gXCJ4c3RhdGUuaW52b2tlXCI7XG4gIEFjdGlvblR5cGVzW1wiRXJyb3JFeGVjdXRpb25cIl0gPSBcImVycm9yLmV4ZWN1dGlvblwiO1xuICBBY3Rpb25UeXBlc1tcIkVycm9yQ29tbXVuaWNhdGlvblwiXSA9IFwiZXJyb3IuY29tbXVuaWNhdGlvblwiO1xuICBBY3Rpb25UeXBlc1tcIkVycm9yUGxhdGZvcm1cIl0gPSBcImVycm9yLnBsYXRmb3JtXCI7XG4gIEFjdGlvblR5cGVzW1wiRXJyb3JDdXN0b21cIl0gPSBcInhzdGF0ZS5lcnJvclwiO1xuICBBY3Rpb25UeXBlc1tcIlVwZGF0ZVwiXSA9IFwieHN0YXRlLnVwZGF0ZVwiO1xuICBBY3Rpb25UeXBlc1tcIlB1cmVcIl0gPSBcInhzdGF0ZS5wdXJlXCI7XG4gIEFjdGlvblR5cGVzW1wiQ2hvb3NlXCJdID0gXCJ4c3RhdGUuY2hvb3NlXCI7XG59KShBY3Rpb25UeXBlcyB8fCAoQWN0aW9uVHlwZXMgPSB7fSkpO1xuXG52YXIgU3BlY2lhbFRhcmdldHM7XG5cbihmdW5jdGlvbiAoU3BlY2lhbFRhcmdldHMpIHtcbiAgU3BlY2lhbFRhcmdldHNbXCJQYXJlbnRcIl0gPSBcIiNfcGFyZW50XCI7XG4gIFNwZWNpYWxUYXJnZXRzW1wiSW50ZXJuYWxcIl0gPSBcIiNfaW50ZXJuYWxcIjtcbn0pKFNwZWNpYWxUYXJnZXRzIHx8IChTcGVjaWFsVGFyZ2V0cyA9IHt9KSk7XG5cbmV4cG9ydCB7IEFjdGlvblR5cGVzLCBTcGVjaWFsVGFyZ2V0cyB9OyIsImltcG9ydCB7IF9fc3ByZWFkLCBfX3ZhbHVlcywgX19yZWFkLCBfX2Fzc2lnbiB9IGZyb20gJy4vX3ZpcnR1YWwvX3RzbGliLmpzJztcbmltcG9ydCB7IERFRkFVTFRfR1VBUkRfVFlQRSwgVEFSR0VUTEVTU19LRVksIFNUQVRFX0RFTElNSVRFUiB9IGZyb20gJy4vY29uc3RhbnRzLmpzJztcbmltcG9ydCB7IElTX1BST0RVQ1RJT04gfSBmcm9tICcuL2Vudmlyb25tZW50LmpzJztcblxuZnVuY3Rpb24ga2V5cyh2YWx1ZSkge1xuICByZXR1cm4gT2JqZWN0LmtleXModmFsdWUpO1xufVxuXG5mdW5jdGlvbiBtYXRjaGVzU3RhdGUocGFyZW50U3RhdGVJZCwgY2hpbGRTdGF0ZUlkLCBkZWxpbWl0ZXIpIHtcbiAgaWYgKGRlbGltaXRlciA9PT0gdm9pZCAwKSB7XG4gICAgZGVsaW1pdGVyID0gU1RBVEVfREVMSU1JVEVSO1xuICB9XG5cbiAgdmFyIHBhcmVudFN0YXRlVmFsdWUgPSB0b1N0YXRlVmFsdWUocGFyZW50U3RhdGVJZCwgZGVsaW1pdGVyKTtcbiAgdmFyIGNoaWxkU3RhdGVWYWx1ZSA9IHRvU3RhdGVWYWx1ZShjaGlsZFN0YXRlSWQsIGRlbGltaXRlcik7XG5cbiAgaWYgKGlzU3RyaW5nKGNoaWxkU3RhdGVWYWx1ZSkpIHtcbiAgICBpZiAoaXNTdHJpbmcocGFyZW50U3RhdGVWYWx1ZSkpIHtcbiAgICAgIHJldHVybiBjaGlsZFN0YXRlVmFsdWUgPT09IHBhcmVudFN0YXRlVmFsdWU7XG4gICAgfSAvLyBQYXJlbnQgbW9yZSBzcGVjaWZpYyB0aGFuIGNoaWxkXG5cblxuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIGlmIChpc1N0cmluZyhwYXJlbnRTdGF0ZVZhbHVlKSkge1xuICAgIHJldHVybiBwYXJlbnRTdGF0ZVZhbHVlIGluIGNoaWxkU3RhdGVWYWx1ZTtcbiAgfVxuXG4gIHJldHVybiBrZXlzKHBhcmVudFN0YXRlVmFsdWUpLmV2ZXJ5KGZ1bmN0aW9uIChrZXkpIHtcbiAgICBpZiAoIShrZXkgaW4gY2hpbGRTdGF0ZVZhbHVlKSkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cblxuICAgIHJldHVybiBtYXRjaGVzU3RhdGUocGFyZW50U3RhdGVWYWx1ZVtrZXldLCBjaGlsZFN0YXRlVmFsdWVba2V5XSk7XG4gIH0pO1xufVxuXG5mdW5jdGlvbiBnZXRFdmVudFR5cGUoZXZlbnQpIHtcbiAgdHJ5IHtcbiAgICByZXR1cm4gaXNTdHJpbmcoZXZlbnQpIHx8IHR5cGVvZiBldmVudCA9PT0gJ251bWJlcicgPyBcIlwiICsgZXZlbnQgOiBldmVudC50eXBlO1xuICB9IGNhdGNoIChlKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdFdmVudHMgbXVzdCBiZSBzdHJpbmdzIG9yIG9iamVjdHMgd2l0aCBhIHN0cmluZyBldmVudC50eXBlIHByb3BlcnR5LicpO1xuICB9XG59XG5cbmZ1bmN0aW9uIHRvU3RhdGVQYXRoKHN0YXRlSWQsIGRlbGltaXRlcikge1xuICB0cnkge1xuICAgIGlmIChpc0FycmF5KHN0YXRlSWQpKSB7XG4gICAgICByZXR1cm4gc3RhdGVJZDtcbiAgICB9XG5cbiAgICByZXR1cm4gc3RhdGVJZC50b1N0cmluZygpLnNwbGl0KGRlbGltaXRlcik7XG4gIH0gY2F0Y2ggKGUpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCInXCIgKyBzdGF0ZUlkICsgXCInIGlzIG5vdCBhIHZhbGlkIHN0YXRlIHBhdGguXCIpO1xuICB9XG59XG5cbmZ1bmN0aW9uIGlzU3RhdGVMaWtlKHN0YXRlKSB7XG4gIHJldHVybiB0eXBlb2Ygc3RhdGUgPT09ICdvYmplY3QnICYmICd2YWx1ZScgaW4gc3RhdGUgJiYgJ2NvbnRleHQnIGluIHN0YXRlICYmICdldmVudCcgaW4gc3RhdGUgJiYgJ19ldmVudCcgaW4gc3RhdGU7XG59XG5cbmZ1bmN0aW9uIHRvU3RhdGVWYWx1ZShzdGF0ZVZhbHVlLCBkZWxpbWl0ZXIpIHtcbiAgaWYgKGlzU3RhdGVMaWtlKHN0YXRlVmFsdWUpKSB7XG4gICAgcmV0dXJuIHN0YXRlVmFsdWUudmFsdWU7XG4gIH1cblxuICBpZiAoaXNBcnJheShzdGF0ZVZhbHVlKSkge1xuICAgIHJldHVybiBwYXRoVG9TdGF0ZVZhbHVlKHN0YXRlVmFsdWUpO1xuICB9XG5cbiAgaWYgKHR5cGVvZiBzdGF0ZVZhbHVlICE9PSAnc3RyaW5nJykge1xuICAgIHJldHVybiBzdGF0ZVZhbHVlO1xuICB9XG5cbiAgdmFyIHN0YXRlUGF0aCA9IHRvU3RhdGVQYXRoKHN0YXRlVmFsdWUsIGRlbGltaXRlcik7XG4gIHJldHVybiBwYXRoVG9TdGF0ZVZhbHVlKHN0YXRlUGF0aCk7XG59XG5cbmZ1bmN0aW9uIHBhdGhUb1N0YXRlVmFsdWUoc3RhdGVQYXRoKSB7XG4gIGlmIChzdGF0ZVBhdGgubGVuZ3RoID09PSAxKSB7XG4gICAgcmV0dXJuIHN0YXRlUGF0aFswXTtcbiAgfVxuXG4gIHZhciB2YWx1ZSA9IHt9O1xuICB2YXIgbWFya2VyID0gdmFsdWU7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdGF0ZVBhdGgubGVuZ3RoIC0gMTsgaSsrKSB7XG4gICAgaWYgKGkgPT09IHN0YXRlUGF0aC5sZW5ndGggLSAyKSB7XG4gICAgICBtYXJrZXJbc3RhdGVQYXRoW2ldXSA9IHN0YXRlUGF0aFtpICsgMV07XG4gICAgfSBlbHNlIHtcbiAgICAgIG1hcmtlcltzdGF0ZVBhdGhbaV1dID0ge307XG4gICAgICBtYXJrZXIgPSBtYXJrZXJbc3RhdGVQYXRoW2ldXTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gdmFsdWU7XG59XG5cbmZ1bmN0aW9uIG1hcFZhbHVlcyhjb2xsZWN0aW9uLCBpdGVyYXRlZSkge1xuICB2YXIgcmVzdWx0ID0ge307XG4gIHZhciBjb2xsZWN0aW9uS2V5cyA9IGtleXMoY29sbGVjdGlvbik7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBjb2xsZWN0aW9uS2V5cy5sZW5ndGg7IGkrKykge1xuICAgIHZhciBrZXkgPSBjb2xsZWN0aW9uS2V5c1tpXTtcbiAgICByZXN1bHRba2V5XSA9IGl0ZXJhdGVlKGNvbGxlY3Rpb25ba2V5XSwga2V5LCBjb2xsZWN0aW9uLCBpKTtcbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIG1hcEZpbHRlclZhbHVlcyhjb2xsZWN0aW9uLCBpdGVyYXRlZSwgcHJlZGljYXRlKSB7XG4gIHZhciBlXzEsIF9hO1xuXG4gIHZhciByZXN1bHQgPSB7fTtcblxuICB0cnkge1xuICAgIGZvciAodmFyIF9iID0gX192YWx1ZXMoa2V5cyhjb2xsZWN0aW9uKSksIF9jID0gX2IubmV4dCgpOyAhX2MuZG9uZTsgX2MgPSBfYi5uZXh0KCkpIHtcbiAgICAgIHZhciBrZXkgPSBfYy52YWx1ZTtcbiAgICAgIHZhciBpdGVtID0gY29sbGVjdGlvbltrZXldO1xuXG4gICAgICBpZiAoIXByZWRpY2F0ZShpdGVtKSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgcmVzdWx0W2tleV0gPSBpdGVyYXRlZShpdGVtLCBrZXksIGNvbGxlY3Rpb24pO1xuICAgIH1cbiAgfSBjYXRjaCAoZV8xXzEpIHtcbiAgICBlXzEgPSB7XG4gICAgICBlcnJvcjogZV8xXzFcbiAgICB9O1xuICB9IGZpbmFsbHkge1xuICAgIHRyeSB7XG4gICAgICBpZiAoX2MgJiYgIV9jLmRvbmUgJiYgKF9hID0gX2IucmV0dXJuKSkgX2EuY2FsbChfYik7XG4gICAgfSBmaW5hbGx5IHtcbiAgICAgIGlmIChlXzEpIHRocm93IGVfMS5lcnJvcjtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxuLyoqXHJcbiAqIFJldHJpZXZlcyBhIHZhbHVlIGF0IHRoZSBnaXZlbiBwYXRoLlxyXG4gKiBAcGFyYW0gcHJvcHMgVGhlIGRlZXAgcGF0aCB0byB0aGUgcHJvcCBvZiB0aGUgZGVzaXJlZCB2YWx1ZVxyXG4gKi9cblxuXG52YXIgcGF0aCA9IGZ1bmN0aW9uIChwcm9wcykge1xuICByZXR1cm4gZnVuY3Rpb24gKG9iamVjdCkge1xuICAgIHZhciBlXzIsIF9hO1xuXG4gICAgdmFyIHJlc3VsdCA9IG9iamVjdDtcblxuICAgIHRyeSB7XG4gICAgICBmb3IgKHZhciBwcm9wc18xID0gX192YWx1ZXMocHJvcHMpLCBwcm9wc18xXzEgPSBwcm9wc18xLm5leHQoKTsgIXByb3BzXzFfMS5kb25lOyBwcm9wc18xXzEgPSBwcm9wc18xLm5leHQoKSkge1xuICAgICAgICB2YXIgcHJvcCA9IHByb3BzXzFfMS52YWx1ZTtcbiAgICAgICAgcmVzdWx0ID0gcmVzdWx0W3Byb3BdO1xuICAgICAgfVxuICAgIH0gY2F0Y2ggKGVfMl8xKSB7XG4gICAgICBlXzIgPSB7XG4gICAgICAgIGVycm9yOiBlXzJfMVxuICAgICAgfTtcbiAgICB9IGZpbmFsbHkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgaWYgKHByb3BzXzFfMSAmJiAhcHJvcHNfMV8xLmRvbmUgJiYgKF9hID0gcHJvcHNfMS5yZXR1cm4pKSBfYS5jYWxsKHByb3BzXzEpO1xuICAgICAgfSBmaW5hbGx5IHtcbiAgICAgICAgaWYgKGVfMikgdGhyb3cgZV8yLmVycm9yO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiByZXN1bHQ7XG4gIH07XG59O1xuLyoqXHJcbiAqIFJldHJpZXZlcyBhIHZhbHVlIGF0IHRoZSBnaXZlbiBwYXRoIHZpYSB0aGUgbmVzdGVkIGFjY2Vzc29yIHByb3AuXHJcbiAqIEBwYXJhbSBwcm9wcyBUaGUgZGVlcCBwYXRoIHRvIHRoZSBwcm9wIG9mIHRoZSBkZXNpcmVkIHZhbHVlXHJcbiAqL1xuXG5cbmZ1bmN0aW9uIG5lc3RlZFBhdGgocHJvcHMsIGFjY2Vzc29yUHJvcCkge1xuICByZXR1cm4gZnVuY3Rpb24gKG9iamVjdCkge1xuICAgIHZhciBlXzMsIF9hO1xuXG4gICAgdmFyIHJlc3VsdCA9IG9iamVjdDtcblxuICAgIHRyeSB7XG4gICAgICBmb3IgKHZhciBwcm9wc18yID0gX192YWx1ZXMocHJvcHMpLCBwcm9wc18yXzEgPSBwcm9wc18yLm5leHQoKTsgIXByb3BzXzJfMS5kb25lOyBwcm9wc18yXzEgPSBwcm9wc18yLm5leHQoKSkge1xuICAgICAgICB2YXIgcHJvcCA9IHByb3BzXzJfMS52YWx1ZTtcbiAgICAgICAgcmVzdWx0ID0gcmVzdWx0W2FjY2Vzc29yUHJvcF1bcHJvcF07XG4gICAgICB9XG4gICAgfSBjYXRjaCAoZV8zXzEpIHtcbiAgICAgIGVfMyA9IHtcbiAgICAgICAgZXJyb3I6IGVfM18xXG4gICAgICB9O1xuICAgIH0gZmluYWxseSB7XG4gICAgICB0cnkge1xuICAgICAgICBpZiAocHJvcHNfMl8xICYmICFwcm9wc18yXzEuZG9uZSAmJiAoX2EgPSBwcm9wc18yLnJldHVybikpIF9hLmNhbGwocHJvcHNfMik7XG4gICAgICB9IGZpbmFsbHkge1xuICAgICAgICBpZiAoZV8zKSB0aHJvdyBlXzMuZXJyb3I7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHJlc3VsdDtcbiAgfTtcbn1cblxuZnVuY3Rpb24gdG9TdGF0ZVBhdGhzKHN0YXRlVmFsdWUpIHtcbiAgaWYgKCFzdGF0ZVZhbHVlKSB7XG4gICAgcmV0dXJuIFtbXV07XG4gIH1cblxuICBpZiAoaXNTdHJpbmcoc3RhdGVWYWx1ZSkpIHtcbiAgICByZXR1cm4gW1tzdGF0ZVZhbHVlXV07XG4gIH1cblxuICB2YXIgcmVzdWx0ID0gZmxhdHRlbihrZXlzKHN0YXRlVmFsdWUpLm1hcChmdW5jdGlvbiAoa2V5KSB7XG4gICAgdmFyIHN1YlN0YXRlVmFsdWUgPSBzdGF0ZVZhbHVlW2tleV07XG5cbiAgICBpZiAodHlwZW9mIHN1YlN0YXRlVmFsdWUgIT09ICdzdHJpbmcnICYmICghc3ViU3RhdGVWYWx1ZSB8fCAhT2JqZWN0LmtleXMoc3ViU3RhdGVWYWx1ZSkubGVuZ3RoKSkge1xuICAgICAgcmV0dXJuIFtba2V5XV07XG4gICAgfVxuXG4gICAgcmV0dXJuIHRvU3RhdGVQYXRocyhzdGF0ZVZhbHVlW2tleV0pLm1hcChmdW5jdGlvbiAoc3ViUGF0aCkge1xuICAgICAgcmV0dXJuIFtrZXldLmNvbmNhdChzdWJQYXRoKTtcbiAgICB9KTtcbiAgfSkpO1xuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBmbGF0dGVuKGFycmF5KSB7XG4gIHZhciBfYTtcblxuICByZXR1cm4gKF9hID0gW10pLmNvbmNhdC5hcHBseShfYSwgX19zcHJlYWQoYXJyYXkpKTtcbn1cblxuZnVuY3Rpb24gdG9BcnJheVN0cmljdCh2YWx1ZSkge1xuICBpZiAoaXNBcnJheSh2YWx1ZSkpIHtcbiAgICByZXR1cm4gdmFsdWU7XG4gIH1cblxuICByZXR1cm4gW3ZhbHVlXTtcbn1cblxuZnVuY3Rpb24gdG9BcnJheSh2YWx1ZSkge1xuICBpZiAodmFsdWUgPT09IHVuZGVmaW5lZCkge1xuICAgIHJldHVybiBbXTtcbiAgfVxuXG4gIHJldHVybiB0b0FycmF5U3RyaWN0KHZhbHVlKTtcbn1cblxuZnVuY3Rpb24gbWFwQ29udGV4dChtYXBwZXIsIGNvbnRleHQsIF9ldmVudCkge1xuICB2YXIgZV81LCBfYTtcblxuICBpZiAoaXNGdW5jdGlvbihtYXBwZXIpKSB7XG4gICAgcmV0dXJuIG1hcHBlcihjb250ZXh0LCBfZXZlbnQuZGF0YSk7XG4gIH1cblxuICB2YXIgcmVzdWx0ID0ge307XG5cbiAgdHJ5IHtcbiAgICBmb3IgKHZhciBfYiA9IF9fdmFsdWVzKE9iamVjdC5rZXlzKG1hcHBlcikpLCBfYyA9IF9iLm5leHQoKTsgIV9jLmRvbmU7IF9jID0gX2IubmV4dCgpKSB7XG4gICAgICB2YXIga2V5ID0gX2MudmFsdWU7XG4gICAgICB2YXIgc3ViTWFwcGVyID0gbWFwcGVyW2tleV07XG5cbiAgICAgIGlmIChpc0Z1bmN0aW9uKHN1Yk1hcHBlcikpIHtcbiAgICAgICAgcmVzdWx0W2tleV0gPSBzdWJNYXBwZXIoY29udGV4dCwgX2V2ZW50LmRhdGEpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmVzdWx0W2tleV0gPSBzdWJNYXBwZXI7XG4gICAgICB9XG4gICAgfVxuICB9IGNhdGNoIChlXzVfMSkge1xuICAgIGVfNSA9IHtcbiAgICAgIGVycm9yOiBlXzVfMVxuICAgIH07XG4gIH0gZmluYWxseSB7XG4gICAgdHJ5IHtcbiAgICAgIGlmIChfYyAmJiAhX2MuZG9uZSAmJiAoX2EgPSBfYi5yZXR1cm4pKSBfYS5jYWxsKF9iKTtcbiAgICB9IGZpbmFsbHkge1xuICAgICAgaWYgKGVfNSkgdGhyb3cgZV81LmVycm9yO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIGlzQnVpbHRJbkV2ZW50KGV2ZW50VHlwZSkge1xuICByZXR1cm4gL14oZG9uZXxlcnJvcilcXC4vLnRlc3QoZXZlbnRUeXBlKTtcbn1cblxuZnVuY3Rpb24gaXNQcm9taXNlTGlrZSh2YWx1ZSkge1xuICBpZiAodmFsdWUgaW5zdGFuY2VvZiBQcm9taXNlKSB7XG4gICAgcmV0dXJuIHRydWU7XG4gIH0gLy8gQ2hlY2sgaWYgc2hhcGUgbWF0Y2hlcyB0aGUgUHJvbWlzZS9BKyBzcGVjaWZpY2F0aW9uIGZvciBhIFwidGhlbmFibGVcIi5cblxuXG4gIGlmICh2YWx1ZSAhPT0gbnVsbCAmJiAoaXNGdW5jdGlvbih2YWx1ZSkgfHwgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JykgJiYgaXNGdW5jdGlvbih2YWx1ZS50aGVuKSkge1xuICAgIHJldHVybiB0cnVlO1xuICB9XG5cbiAgcmV0dXJuIGZhbHNlO1xufVxuXG5mdW5jdGlvbiBwYXJ0aXRpb24oaXRlbXMsIHByZWRpY2F0ZSkge1xuICB2YXIgZV82LCBfYTtcblxuICB2YXIgX2IgPSBfX3JlYWQoW1tdLCBbXV0sIDIpLFxuICAgICAgdHJ1dGh5ID0gX2JbMF0sXG4gICAgICBmYWxzeSA9IF9iWzFdO1xuXG4gIHRyeSB7XG4gICAgZm9yICh2YXIgaXRlbXNfMSA9IF9fdmFsdWVzKGl0ZW1zKSwgaXRlbXNfMV8xID0gaXRlbXNfMS5uZXh0KCk7ICFpdGVtc18xXzEuZG9uZTsgaXRlbXNfMV8xID0gaXRlbXNfMS5uZXh0KCkpIHtcbiAgICAgIHZhciBpdGVtID0gaXRlbXNfMV8xLnZhbHVlO1xuXG4gICAgICBpZiAocHJlZGljYXRlKGl0ZW0pKSB7XG4gICAgICAgIHRydXRoeS5wdXNoKGl0ZW0pO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgZmFsc3kucHVzaChpdGVtKTtcbiAgICAgIH1cbiAgICB9XG4gIH0gY2F0Y2ggKGVfNl8xKSB7XG4gICAgZV82ID0ge1xuICAgICAgZXJyb3I6IGVfNl8xXG4gICAgfTtcbiAgfSBmaW5hbGx5IHtcbiAgICB0cnkge1xuICAgICAgaWYgKGl0ZW1zXzFfMSAmJiAhaXRlbXNfMV8xLmRvbmUgJiYgKF9hID0gaXRlbXNfMS5yZXR1cm4pKSBfYS5jYWxsKGl0ZW1zXzEpO1xuICAgIH0gZmluYWxseSB7XG4gICAgICBpZiAoZV82KSB0aHJvdyBlXzYuZXJyb3I7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIFt0cnV0aHksIGZhbHN5XTtcbn1cblxuZnVuY3Rpb24gdXBkYXRlSGlzdG9yeVN0YXRlcyhoaXN0LCBzdGF0ZVZhbHVlKSB7XG4gIHJldHVybiBtYXBWYWx1ZXMoaGlzdC5zdGF0ZXMsIGZ1bmN0aW9uIChzdWJIaXN0LCBrZXkpIHtcbiAgICBpZiAoIXN1Ykhpc3QpIHtcbiAgICAgIHJldHVybiB1bmRlZmluZWQ7XG4gICAgfVxuXG4gICAgdmFyIHN1YlN0YXRlVmFsdWUgPSAoaXNTdHJpbmcoc3RhdGVWYWx1ZSkgPyB1bmRlZmluZWQgOiBzdGF0ZVZhbHVlW2tleV0pIHx8IChzdWJIaXN0ID8gc3ViSGlzdC5jdXJyZW50IDogdW5kZWZpbmVkKTtcblxuICAgIGlmICghc3ViU3RhdGVWYWx1ZSkge1xuICAgICAgcmV0dXJuIHVuZGVmaW5lZDtcbiAgICB9XG5cbiAgICByZXR1cm4ge1xuICAgICAgY3VycmVudDogc3ViU3RhdGVWYWx1ZSxcbiAgICAgIHN0YXRlczogdXBkYXRlSGlzdG9yeVN0YXRlcyhzdWJIaXN0LCBzdWJTdGF0ZVZhbHVlKVxuICAgIH07XG4gIH0pO1xufVxuXG5mdW5jdGlvbiB1cGRhdGVIaXN0b3J5VmFsdWUoaGlzdCwgc3RhdGVWYWx1ZSkge1xuICByZXR1cm4ge1xuICAgIGN1cnJlbnQ6IHN0YXRlVmFsdWUsXG4gICAgc3RhdGVzOiB1cGRhdGVIaXN0b3J5U3RhdGVzKGhpc3QsIHN0YXRlVmFsdWUpXG4gIH07XG59XG5cbmZ1bmN0aW9uIHVwZGF0ZUNvbnRleHQoY29udGV4dCwgX2V2ZW50LCBhc3NpZ25BY3Rpb25zLCBzdGF0ZSkge1xuICBpZiAoIUlTX1BST0RVQ1RJT04pIHtcbiAgICB3YXJuKCEhY29udGV4dCwgJ0F0dGVtcHRpbmcgdG8gdXBkYXRlIHVuZGVmaW5lZCBjb250ZXh0Jyk7XG4gIH1cblxuICB2YXIgdXBkYXRlZENvbnRleHQgPSBjb250ZXh0ID8gYXNzaWduQWN0aW9ucy5yZWR1Y2UoZnVuY3Rpb24gKGFjYywgYXNzaWduQWN0aW9uKSB7XG4gICAgdmFyIGVfNywgX2E7XG5cbiAgICB2YXIgYXNzaWdubWVudCA9IGFzc2lnbkFjdGlvbi5hc3NpZ25tZW50O1xuICAgIHZhciBtZXRhID0ge1xuICAgICAgc3RhdGU6IHN0YXRlLFxuICAgICAgYWN0aW9uOiBhc3NpZ25BY3Rpb24sXG4gICAgICBfZXZlbnQ6IF9ldmVudFxuICAgIH07XG4gICAgdmFyIHBhcnRpYWxVcGRhdGUgPSB7fTtcblxuICAgIGlmIChpc0Z1bmN0aW9uKGFzc2lnbm1lbnQpKSB7XG4gICAgICBwYXJ0aWFsVXBkYXRlID0gYXNzaWdubWVudChhY2MsIF9ldmVudC5kYXRhLCBtZXRhKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdHJ5IHtcbiAgICAgICAgZm9yICh2YXIgX2IgPSBfX3ZhbHVlcyhrZXlzKGFzc2lnbm1lbnQpKSwgX2MgPSBfYi5uZXh0KCk7ICFfYy5kb25lOyBfYyA9IF9iLm5leHQoKSkge1xuICAgICAgICAgIHZhciBrZXkgPSBfYy52YWx1ZTtcbiAgICAgICAgICB2YXIgcHJvcEFzc2lnbm1lbnQgPSBhc3NpZ25tZW50W2tleV07XG4gICAgICAgICAgcGFydGlhbFVwZGF0ZVtrZXldID0gaXNGdW5jdGlvbihwcm9wQXNzaWdubWVudCkgPyBwcm9wQXNzaWdubWVudChhY2MsIF9ldmVudC5kYXRhLCBtZXRhKSA6IHByb3BBc3NpZ25tZW50O1xuICAgICAgICB9XG4gICAgICB9IGNhdGNoIChlXzdfMSkge1xuICAgICAgICBlXzcgPSB7XG4gICAgICAgICAgZXJyb3I6IGVfN18xXG4gICAgICAgIH07XG4gICAgICB9IGZpbmFsbHkge1xuICAgICAgICB0cnkge1xuICAgICAgICAgIGlmIChfYyAmJiAhX2MuZG9uZSAmJiAoX2EgPSBfYi5yZXR1cm4pKSBfYS5jYWxsKF9iKTtcbiAgICAgICAgfSBmaW5hbGx5IHtcbiAgICAgICAgICBpZiAoZV83KSB0aHJvdyBlXzcuZXJyb3I7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gT2JqZWN0LmFzc2lnbih7fSwgYWNjLCBwYXJ0aWFsVXBkYXRlKTtcbiAgfSwgY29udGV4dCkgOiBjb250ZXh0O1xuICByZXR1cm4gdXBkYXRlZENvbnRleHQ7XG59IC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpuby1lbXB0eVxuXG5cbnZhciB3YXJuID0gZnVuY3Rpb24gKCkge307XG5cbmlmICghSVNfUFJPRFVDVElPTikge1xuICB3YXJuID0gZnVuY3Rpb24gKGNvbmRpdGlvbiwgbWVzc2FnZSkge1xuICAgIHZhciBlcnJvciA9IGNvbmRpdGlvbiBpbnN0YW5jZW9mIEVycm9yID8gY29uZGl0aW9uIDogdW5kZWZpbmVkO1xuXG4gICAgaWYgKCFlcnJvciAmJiBjb25kaXRpb24pIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBpZiAoY29uc29sZSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICB2YXIgYXJncyA9IFtcIldhcm5pbmc6IFwiICsgbWVzc2FnZV07XG5cbiAgICAgIGlmIChlcnJvcikge1xuICAgICAgICBhcmdzLnB1c2goZXJyb3IpO1xuICAgICAgfSAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6bm8tY29uc29sZVxuXG5cbiAgICAgIGNvbnNvbGUud2Fybi5hcHBseShjb25zb2xlLCBhcmdzKTtcbiAgICB9XG4gIH07XG59XG5cbmZ1bmN0aW9uIGlzQXJyYXkodmFsdWUpIHtcbiAgcmV0dXJuIEFycmF5LmlzQXJyYXkodmFsdWUpO1xufSAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6YmFuLXR5cGVzXG5cblxuZnVuY3Rpb24gaXNGdW5jdGlvbih2YWx1ZSkge1xuICByZXR1cm4gdHlwZW9mIHZhbHVlID09PSAnZnVuY3Rpb24nO1xufVxuXG5mdW5jdGlvbiBpc1N0cmluZyh2YWx1ZSkge1xuICByZXR1cm4gdHlwZW9mIHZhbHVlID09PSAnc3RyaW5nJztcbn0gLy8gZXhwb3J0IGZ1bmN0aW9uIG1lbW9pemVkR2V0dGVyPFQsIFRQIGV4dGVuZHMgeyBwcm90b3R5cGU6IG9iamVjdCB9Pihcbi8vICAgbzogVFAsXG4vLyAgIHByb3BlcnR5OiBzdHJpbmcsXG4vLyAgIGdldHRlcjogKCkgPT4gVFxuLy8gKTogdm9pZCB7XG4vLyAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShvLnByb3RvdHlwZSwgcHJvcGVydHksIHtcbi8vICAgICBnZXQ6IGdldHRlcixcbi8vICAgICBlbnVtZXJhYmxlOiBmYWxzZSxcbi8vICAgICBjb25maWd1cmFibGU6IGZhbHNlXG4vLyAgIH0pO1xuLy8gfVxuXG5cbmZ1bmN0aW9uIHRvR3VhcmQoY29uZGl0aW9uLCBndWFyZE1hcCkge1xuICBpZiAoIWNvbmRpdGlvbikge1xuICAgIHJldHVybiB1bmRlZmluZWQ7XG4gIH1cblxuICBpZiAoaXNTdHJpbmcoY29uZGl0aW9uKSkge1xuICAgIHJldHVybiB7XG4gICAgICB0eXBlOiBERUZBVUxUX0dVQVJEX1RZUEUsXG4gICAgICBuYW1lOiBjb25kaXRpb24sXG4gICAgICBwcmVkaWNhdGU6IGd1YXJkTWFwID8gZ3VhcmRNYXBbY29uZGl0aW9uXSA6IHVuZGVmaW5lZFxuICAgIH07XG4gIH1cblxuICBpZiAoaXNGdW5jdGlvbihjb25kaXRpb24pKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHR5cGU6IERFRkFVTFRfR1VBUkRfVFlQRSxcbiAgICAgIG5hbWU6IGNvbmRpdGlvbi5uYW1lLFxuICAgICAgcHJlZGljYXRlOiBjb25kaXRpb25cbiAgICB9O1xuICB9XG5cbiAgcmV0dXJuIGNvbmRpdGlvbjtcbn1cblxuZnVuY3Rpb24gaXNPYnNlcnZhYmxlKHZhbHVlKSB7XG4gIHRyeSB7XG4gICAgcmV0dXJuICdzdWJzY3JpYmUnIGluIHZhbHVlICYmIGlzRnVuY3Rpb24odmFsdWUuc3Vic2NyaWJlKTtcbiAgfSBjYXRjaCAoZSkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxufVxuXG52YXIgc3ltYm9sT2JzZXJ2YWJsZSA9IC8qI19fUFVSRV9fKi9mdW5jdGlvbiAoKSB7XG4gIHJldHVybiB0eXBlb2YgU3ltYm9sID09PSAnZnVuY3Rpb24nICYmIFN5bWJvbC5vYnNlcnZhYmxlIHx8ICdAQG9ic2VydmFibGUnO1xufSgpO1xuXG5mdW5jdGlvbiBpc01hY2hpbmUodmFsdWUpIHtcbiAgdHJ5IHtcbiAgICByZXR1cm4gJ19feHN0YXRlbm9kZScgaW4gdmFsdWU7XG4gIH0gY2F0Y2ggKGUpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbn1cblxudmFyIHVuaXF1ZUlkID0gLyojX19QVVJFX18qL2Z1bmN0aW9uICgpIHtcbiAgdmFyIGN1cnJlbnRJZCA9IDA7XG4gIHJldHVybiBmdW5jdGlvbiAoKSB7XG4gICAgY3VycmVudElkKys7XG4gICAgcmV0dXJuIGN1cnJlbnRJZC50b1N0cmluZygxNik7XG4gIH07XG59KCk7XG5cbmZ1bmN0aW9uIHRvRXZlbnRPYmplY3QoZXZlbnQsIHBheWxvYWQgLy8gaWQ/OiBURXZlbnRbJ3R5cGUnXVxuKSB7XG4gIGlmIChpc1N0cmluZyhldmVudCkgfHwgdHlwZW9mIGV2ZW50ID09PSAnbnVtYmVyJykge1xuICAgIHJldHVybiBfX2Fzc2lnbih7XG4gICAgICB0eXBlOiBldmVudFxuICAgIH0sIHBheWxvYWQpO1xuICB9XG5cbiAgcmV0dXJuIGV2ZW50O1xufVxuXG5mdW5jdGlvbiB0b1NDWE1MRXZlbnQoZXZlbnQsIHNjeG1sRXZlbnQpIHtcbiAgaWYgKCFpc1N0cmluZyhldmVudCkgJiYgJyQkdHlwZScgaW4gZXZlbnQgJiYgZXZlbnQuJCR0eXBlID09PSAnc2N4bWwnKSB7XG4gICAgcmV0dXJuIGV2ZW50O1xuICB9XG5cbiAgdmFyIGV2ZW50T2JqZWN0ID0gdG9FdmVudE9iamVjdChldmVudCk7XG4gIHJldHVybiBfX2Fzc2lnbih7XG4gICAgbmFtZTogZXZlbnRPYmplY3QudHlwZSxcbiAgICBkYXRhOiBldmVudE9iamVjdCxcbiAgICAkJHR5cGU6ICdzY3htbCcsXG4gICAgdHlwZTogJ2V4dGVybmFsJ1xuICB9LCBzY3htbEV2ZW50KTtcbn1cblxuZnVuY3Rpb24gdG9UcmFuc2l0aW9uQ29uZmlnQXJyYXkoZXZlbnQsIGNvbmZpZ0xpa2UpIHtcbiAgdmFyIHRyYW5zaXRpb25zID0gdG9BcnJheVN0cmljdChjb25maWdMaWtlKS5tYXAoZnVuY3Rpb24gKHRyYW5zaXRpb25MaWtlKSB7XG4gICAgaWYgKHR5cGVvZiB0cmFuc2l0aW9uTGlrZSA9PT0gJ3VuZGVmaW5lZCcgfHwgdHlwZW9mIHRyYW5zaXRpb25MaWtlID09PSAnc3RyaW5nJyB8fCBpc01hY2hpbmUodHJhbnNpdGlvbkxpa2UpKSB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICB0YXJnZXQ6IHRyYW5zaXRpb25MaWtlLFxuICAgICAgICBldmVudDogZXZlbnRcbiAgICAgIH07XG4gICAgfVxuXG4gICAgcmV0dXJuIF9fYXNzaWduKF9fYXNzaWduKHt9LCB0cmFuc2l0aW9uTGlrZSksIHtcbiAgICAgIGV2ZW50OiBldmVudFxuICAgIH0pO1xuICB9KTtcbiAgcmV0dXJuIHRyYW5zaXRpb25zO1xufVxuXG5mdW5jdGlvbiBub3JtYWxpemVUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0YXJnZXQgPT09IHVuZGVmaW5lZCB8fCB0YXJnZXQgPT09IFRBUkdFVExFU1NfS0VZKSB7XG4gICAgcmV0dXJuIHVuZGVmaW5lZDtcbiAgfVxuXG4gIHJldHVybiB0b0FycmF5KHRhcmdldCk7XG59XG5cbmZ1bmN0aW9uIHJlcG9ydFVuaGFuZGxlZEV4Y2VwdGlvbk9uSW52b2NhdGlvbihvcmlnaW5hbEVycm9yLCBjdXJyZW50RXJyb3IsIGlkKSB7XG4gIGlmICghSVNfUFJPRFVDVElPTikge1xuICAgIHZhciBvcmlnaW5hbFN0YWNrVHJhY2UgPSBvcmlnaW5hbEVycm9yLnN0YWNrID8gXCIgU3RhY2t0cmFjZSB3YXMgJ1wiICsgb3JpZ2luYWxFcnJvci5zdGFjayArIFwiJ1wiIDogJyc7XG5cbiAgICBpZiAob3JpZ2luYWxFcnJvciA9PT0gY3VycmVudEVycm9yKSB7XG4gICAgICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6bm8tY29uc29sZVxuICAgICAgY29uc29sZS5lcnJvcihcIk1pc3Npbmcgb25FcnJvciBoYW5kbGVyIGZvciBpbnZvY2F0aW9uICdcIiArIGlkICsgXCInLCBlcnJvciB3YXMgJ1wiICsgb3JpZ2luYWxFcnJvciArIFwiJy5cIiArIG9yaWdpbmFsU3RhY2tUcmFjZSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciBzdGFja1RyYWNlID0gY3VycmVudEVycm9yLnN0YWNrID8gXCIgU3RhY2t0cmFjZSB3YXMgJ1wiICsgY3VycmVudEVycm9yLnN0YWNrICsgXCInXCIgOiAnJzsgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOm5vLWNvbnNvbGVcblxuICAgICAgY29uc29sZS5lcnJvcihcIk1pc3Npbmcgb25FcnJvciBoYW5kbGVyIGFuZC9vciB1bmhhbmRsZWQgZXhjZXB0aW9uL3Byb21pc2UgcmVqZWN0aW9uIGZvciBpbnZvY2F0aW9uICdcIiArIGlkICsgXCInLiBcIiArIChcIk9yaWdpbmFsIGVycm9yOiAnXCIgKyBvcmlnaW5hbEVycm9yICsgXCInLiBcIiArIG9yaWdpbmFsU3RhY2tUcmFjZSArIFwiIEN1cnJlbnQgZXJyb3IgaXMgJ1wiICsgY3VycmVudEVycm9yICsgXCInLlwiICsgc3RhY2tUcmFjZSkpO1xuICAgIH1cbiAgfVxufVxuXG5mdW5jdGlvbiBldmFsdWF0ZUd1YXJkKG1hY2hpbmUsIGd1YXJkLCBjb250ZXh0LCBfZXZlbnQsIHN0YXRlKSB7XG4gIHZhciBndWFyZHMgPSBtYWNoaW5lLm9wdGlvbnMuZ3VhcmRzO1xuICB2YXIgZ3VhcmRNZXRhID0ge1xuICAgIHN0YXRlOiBzdGF0ZSxcbiAgICBjb25kOiBndWFyZCxcbiAgICBfZXZlbnQ6IF9ldmVudFxuICB9OyAvLyBUT0RPOiBkbyBub3QgaGFyZGNvZGUhXG5cbiAgaWYgKGd1YXJkLnR5cGUgPT09IERFRkFVTFRfR1VBUkRfVFlQRSkge1xuICAgIHJldHVybiBndWFyZC5wcmVkaWNhdGUoY29udGV4dCwgX2V2ZW50LmRhdGEsIGd1YXJkTWV0YSk7XG4gIH1cblxuICB2YXIgY29uZEZuID0gZ3VhcmRzW2d1YXJkLnR5cGVdO1xuXG4gIGlmICghY29uZEZuKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiR3VhcmQgJ1wiICsgZ3VhcmQudHlwZSArIFwiJyBpcyBub3QgaW1wbGVtZW50ZWQgb24gbWFjaGluZSAnXCIgKyBtYWNoaW5lLmlkICsgXCInLlwiKTtcbiAgfVxuXG4gIHJldHVybiBjb25kRm4oY29udGV4dCwgX2V2ZW50LmRhdGEsIGd1YXJkTWV0YSk7XG59XG5cbmZ1bmN0aW9uIHRvSW52b2tlU291cmNlKHNyYykge1xuICBpZiAodHlwZW9mIHNyYyA9PT0gJ3N0cmluZycpIHtcbiAgICByZXR1cm4ge1xuICAgICAgdHlwZTogc3JjXG4gICAgfTtcbiAgfVxuXG4gIHJldHVybiBzcmM7XG59XG5cbmV4cG9ydCB7IGV2YWx1YXRlR3VhcmQsIGZsYXR0ZW4sIGdldEV2ZW50VHlwZSwgaXNBcnJheSwgaXNCdWlsdEluRXZlbnQsIGlzRnVuY3Rpb24sIGlzTWFjaGluZSwgaXNPYnNlcnZhYmxlLCBpc1Byb21pc2VMaWtlLCBpc1N0YXRlTGlrZSwgaXNTdHJpbmcsIGtleXMsIG1hcENvbnRleHQsIG1hcEZpbHRlclZhbHVlcywgbWFwVmFsdWVzLCBtYXRjaGVzU3RhdGUsIG5lc3RlZFBhdGgsIG5vcm1hbGl6ZVRhcmdldCwgcGFydGl0aW9uLCBwYXRoLCBwYXRoVG9TdGF0ZVZhbHVlLCByZXBvcnRVbmhhbmRsZWRFeGNlcHRpb25Pbkludm9jYXRpb24sIHN5bWJvbE9ic2VydmFibGUsIHRvQXJyYXksIHRvQXJyYXlTdHJpY3QsIHRvRXZlbnRPYmplY3QsIHRvR3VhcmQsIHRvSW52b2tlU291cmNlLCB0b1NDWE1MRXZlbnQsIHRvU3RhdGVQYXRoLCB0b1N0YXRlUGF0aHMsIHRvU3RhdGVWYWx1ZSwgdG9UcmFuc2l0aW9uQ29uZmlnQXJyYXksIHVuaXF1ZUlkLCB1cGRhdGVDb250ZXh0LCB1cGRhdGVIaXN0b3J5U3RhdGVzLCB1cGRhdGVIaXN0b3J5VmFsdWUsIHdhcm4gfTsiXSwic291cmNlUm9vdCI6IiJ9