"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/@floating-ui+react-dom@2.1.2_react-dom@18.3.1_react@18.3.1__react@18.3.1";
exports.ids = ["vendor-chunks/@floating-ui+react-dom@2.1.2_react-dom@18.3.1_react@18.3.1__react@18.3.1"];
exports.modules = {

/***/ "(ssr)/../../node_modules/.pnpm/@floating-ui+react-dom@2.1.2_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@floating-ui/react-dom/dist/floating-ui.react-dom.mjs":
/*!****************************************************************************************************************************************************************************!*\
  !*** ../../node_modules/.pnpm/@floating-ui+react-dom@2.1.2_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@floating-ui/react-dom/dist/floating-ui.react-dom.mjs ***!
  \****************************************************************************************************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   arrow: () => (/* binding */ arrow),\n/* harmony export */   autoPlacement: () => (/* binding */ autoPlacement),\n/* harmony export */   autoUpdate: () => (/* reexport safe */ _floating_ui_dom__WEBPACK_IMPORTED_MODULE_0__.autoUpdate),\n/* harmony export */   computePosition: () => (/* reexport safe */ _floating_ui_dom__WEBPACK_IMPORTED_MODULE_0__.computePosition),\n/* harmony export */   detectOverflow: () => (/* reexport safe */ _floating_ui_dom__WEBPACK_IMPORTED_MODULE_0__.detectOverflow),\n/* harmony export */   flip: () => (/* binding */ flip),\n/* harmony export */   getOverflowAncestors: () => (/* reexport safe */ _floating_ui_dom__WEBPACK_IMPORTED_MODULE_1__.getOverflowAncestors),\n/* harmony export */   hide: () => (/* binding */ hide),\n/* harmony export */   inline: () => (/* binding */ inline),\n/* harmony export */   limitShift: () => (/* binding */ limitShift),\n/* harmony export */   offset: () => (/* binding */ offset),\n/* harmony export */   platform: () => (/* reexport safe */ _floating_ui_dom__WEBPACK_IMPORTED_MODULE_0__.platform),\n/* harmony export */   shift: () => (/* binding */ shift),\n/* harmony export */   size: () => (/* binding */ size),\n/* harmony export */   useFloating: () => (/* binding */ useFloating)\n/* harmony export */ });\n/* harmony import */ var _floating_ui_dom__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @floating-ui/dom */ \"(ssr)/../../node_modules/.pnpm/@floating-ui+dom@1.6.12/node_modules/@floating-ui/dom/dist/floating-ui.dom.mjs\");\n/* harmony import */ var _floating_ui_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @floating-ui/dom */ \"(ssr)/../../node_modules/.pnpm/@floating-ui+utils@0.2.8/node_modules/@floating-ui/utils/dist/floating-ui.utils.dom.mjs\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"(ssr)/../../node_modules/.pnpm/next@15.0.2_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js\");\n/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-dom */ \"(ssr)/../../node_modules/.pnpm/next@15.0.2_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-dom.js\");\n\n\n\n\n\n\nvar index = typeof document !== 'undefined' ? react__WEBPACK_IMPORTED_MODULE_2__.useLayoutEffect : react__WEBPACK_IMPORTED_MODULE_2__.useEffect;\n\n// Fork of `fast-deep-equal` that only does the comparisons we need and compares\n// functions\nfunction deepEqual(a, b) {\n  if (a === b) {\n    return true;\n  }\n  if (typeof a !== typeof b) {\n    return false;\n  }\n  if (typeof a === 'function' && a.toString() === b.toString()) {\n    return true;\n  }\n  let length;\n  let i;\n  let keys;\n  if (a && b && typeof a === 'object') {\n    if (Array.isArray(a)) {\n      length = a.length;\n      if (length !== b.length) return false;\n      for (i = length; i-- !== 0;) {\n        if (!deepEqual(a[i], b[i])) {\n          return false;\n        }\n      }\n      return true;\n    }\n    keys = Object.keys(a);\n    length = keys.length;\n    if (length !== Object.keys(b).length) {\n      return false;\n    }\n    for (i = length; i-- !== 0;) {\n      if (!{}.hasOwnProperty.call(b, keys[i])) {\n        return false;\n      }\n    }\n    for (i = length; i-- !== 0;) {\n      const key = keys[i];\n      if (key === '_owner' && a.$$typeof) {\n        continue;\n      }\n      if (!deepEqual(a[key], b[key])) {\n        return false;\n      }\n    }\n    return true;\n  }\n  return a !== a && b !== b;\n}\n\nfunction getDPR(element) {\n  if (typeof window === 'undefined') {\n    return 1;\n  }\n  const win = element.ownerDocument.defaultView || window;\n  return win.devicePixelRatio || 1;\n}\n\nfunction roundByDPR(element, value) {\n  const dpr = getDPR(element);\n  return Math.round(value * dpr) / dpr;\n}\n\nfunction useLatestRef(value) {\n  const ref = react__WEBPACK_IMPORTED_MODULE_2__.useRef(value);\n  index(() => {\n    ref.current = value;\n  });\n  return ref;\n}\n\n/**\n * Provides data to position a floating element.\n * @see https://floating-ui.com/docs/useFloating\n */\nfunction useFloating(options) {\n  if (options === void 0) {\n    options = {};\n  }\n  const {\n    placement = 'bottom',\n    strategy = 'absolute',\n    middleware = [],\n    platform,\n    elements: {\n      reference: externalReference,\n      floating: externalFloating\n    } = {},\n    transform = true,\n    whileElementsMounted,\n    open\n  } = options;\n  const [data, setData] = react__WEBPACK_IMPORTED_MODULE_2__.useState({\n    x: 0,\n    y: 0,\n    strategy,\n    placement,\n    middlewareData: {},\n    isPositioned: false\n  });\n  const [latestMiddleware, setLatestMiddleware] = react__WEBPACK_IMPORTED_MODULE_2__.useState(middleware);\n  if (!deepEqual(latestMiddleware, middleware)) {\n    setLatestMiddleware(middleware);\n  }\n  const [_reference, _setReference] = react__WEBPACK_IMPORTED_MODULE_2__.useState(null);\n  const [_floating, _setFloating] = react__WEBPACK_IMPORTED_MODULE_2__.useState(null);\n  const setReference = react__WEBPACK_IMPORTED_MODULE_2__.useCallback(node => {\n    if (node !== referenceRef.current) {\n      referenceRef.current = node;\n      _setReference(node);\n    }\n  }, []);\n  const setFloating = react__WEBPACK_IMPORTED_MODULE_2__.useCallback(node => {\n    if (node !== floatingRef.current) {\n      floatingRef.current = node;\n      _setFloating(node);\n    }\n  }, []);\n  const referenceEl = externalReference || _reference;\n  const floatingEl = externalFloating || _floating;\n  const referenceRef = react__WEBPACK_IMPORTED_MODULE_2__.useRef(null);\n  const floatingRef = react__WEBPACK_IMPORTED_MODULE_2__.useRef(null);\n  const dataRef = react__WEBPACK_IMPORTED_MODULE_2__.useRef(data);\n  const hasWhileElementsMounted = whileElementsMounted != null;\n  const whileElementsMountedRef = useLatestRef(whileElementsMounted);\n  const platformRef = useLatestRef(platform);\n  const openRef = useLatestRef(open);\n  const update = react__WEBPACK_IMPORTED_MODULE_2__.useCallback(() => {\n    if (!referenceRef.current || !floatingRef.current) {\n      return;\n    }\n    const config = {\n      placement,\n      strategy,\n      middleware: latestMiddleware\n    };\n    if (platformRef.current) {\n      config.platform = platformRef.current;\n    }\n    (0,_floating_ui_dom__WEBPACK_IMPORTED_MODULE_0__.computePosition)(referenceRef.current, floatingRef.current, config).then(data => {\n      const fullData = {\n        ...data,\n        // The floating element's position may be recomputed while it's closed\n        // but still mounted (such as when transitioning out). To ensure\n        // `isPositioned` will be `false` initially on the next open, avoid\n        // setting it to `true` when `open === false` (must be specified).\n        isPositioned: openRef.current !== false\n      };\n      if (isMountedRef.current && !deepEqual(dataRef.current, fullData)) {\n        dataRef.current = fullData;\n        react_dom__WEBPACK_IMPORTED_MODULE_3__.flushSync(() => {\n          setData(fullData);\n        });\n      }\n    });\n  }, [latestMiddleware, placement, strategy, platformRef, openRef]);\n  index(() => {\n    if (open === false && dataRef.current.isPositioned) {\n      dataRef.current.isPositioned = false;\n      setData(data => ({\n        ...data,\n        isPositioned: false\n      }));\n    }\n  }, [open]);\n  const isMountedRef = react__WEBPACK_IMPORTED_MODULE_2__.useRef(false);\n  index(() => {\n    isMountedRef.current = true;\n    return () => {\n      isMountedRef.current = false;\n    };\n  }, []);\n  index(() => {\n    if (referenceEl) referenceRef.current = referenceEl;\n    if (floatingEl) floatingRef.current = floatingEl;\n    if (referenceEl && floatingEl) {\n      if (whileElementsMountedRef.current) {\n        return whileElementsMountedRef.current(referenceEl, floatingEl, update);\n      }\n      update();\n    }\n  }, [referenceEl, floatingEl, update, whileElementsMountedRef, hasWhileElementsMounted]);\n  const refs = react__WEBPACK_IMPORTED_MODULE_2__.useMemo(() => ({\n    reference: referenceRef,\n    floating: floatingRef,\n    setReference,\n    setFloating\n  }), [setReference, setFloating]);\n  const elements = react__WEBPACK_IMPORTED_MODULE_2__.useMemo(() => ({\n    reference: referenceEl,\n    floating: floatingEl\n  }), [referenceEl, floatingEl]);\n  const floatingStyles = react__WEBPACK_IMPORTED_MODULE_2__.useMemo(() => {\n    const initialStyles = {\n      position: strategy,\n      left: 0,\n      top: 0\n    };\n    if (!elements.floating) {\n      return initialStyles;\n    }\n    const x = roundByDPR(elements.floating, data.x);\n    const y = roundByDPR(elements.floating, data.y);\n    if (transform) {\n      return {\n        ...initialStyles,\n        transform: \"translate(\" + x + \"px, \" + y + \"px)\",\n        ...(getDPR(elements.floating) >= 1.5 && {\n          willChange: 'transform'\n        })\n      };\n    }\n    return {\n      position: strategy,\n      left: x,\n      top: y\n    };\n  }, [strategy, transform, elements.floating, data.x, data.y]);\n  return react__WEBPACK_IMPORTED_MODULE_2__.useMemo(() => ({\n    ...data,\n    update,\n    refs,\n    elements,\n    floatingStyles\n  }), [data, update, refs, elements, floatingStyles]);\n}\n\n/**\n * Provides data to position an inner element of the floating element so that it\n * appears centered to the reference element.\n * This wraps the core `arrow` middleware to allow React refs as the element.\n * @see https://floating-ui.com/docs/arrow\n */\nconst arrow$1 = options => {\n  function isRef(value) {\n    return {}.hasOwnProperty.call(value, 'current');\n  }\n  return {\n    name: 'arrow',\n    options,\n    fn(state) {\n      const {\n        element,\n        padding\n      } = typeof options === 'function' ? options(state) : options;\n      if (element && isRef(element)) {\n        if (element.current != null) {\n          return (0,_floating_ui_dom__WEBPACK_IMPORTED_MODULE_0__.arrow)({\n            element: element.current,\n            padding\n          }).fn(state);\n        }\n        return {};\n      }\n      if (element) {\n        return (0,_floating_ui_dom__WEBPACK_IMPORTED_MODULE_0__.arrow)({\n          element,\n          padding\n        }).fn(state);\n      }\n      return {};\n    }\n  };\n};\n\n/**\n * Modifies the placement by translating the floating element along the\n * specified axes.\n * A number (shorthand for `mainAxis` or distance), or an axes configuration\n * object may be passed.\n * @see https://floating-ui.com/docs/offset\n */\nconst offset = (options, deps) => ({\n  ...(0,_floating_ui_dom__WEBPACK_IMPORTED_MODULE_0__.offset)(options),\n  options: [options, deps]\n});\n\n/**\n * Optimizes the visibility of the floating element by shifting it in order to\n * keep it in view when it will overflow the clipping boundary.\n * @see https://floating-ui.com/docs/shift\n */\nconst shift = (options, deps) => ({\n  ...(0,_floating_ui_dom__WEBPACK_IMPORTED_MODULE_0__.shift)(options),\n  options: [options, deps]\n});\n\n/**\n * Built-in `limiter` that will stop `shift()` at a certain point.\n */\nconst limitShift = (options, deps) => ({\n  ...(0,_floating_ui_dom__WEBPACK_IMPORTED_MODULE_0__.limitShift)(options),\n  options: [options, deps]\n});\n\n/**\n * Optimizes the visibility of the floating element by flipping the `placement`\n * in order to keep it in view when the preferred placement(s) will overflow the\n * clipping boundary. Alternative to `autoPlacement`.\n * @see https://floating-ui.com/docs/flip\n */\nconst flip = (options, deps) => ({\n  ...(0,_floating_ui_dom__WEBPACK_IMPORTED_MODULE_0__.flip)(options),\n  options: [options, deps]\n});\n\n/**\n * Provides data that allows you to change the size of the floating element —\n * for instance, prevent it from overflowing the clipping boundary or match the\n * width of the reference element.\n * @see https://floating-ui.com/docs/size\n */\nconst size = (options, deps) => ({\n  ...(0,_floating_ui_dom__WEBPACK_IMPORTED_MODULE_0__.size)(options),\n  options: [options, deps]\n});\n\n/**\n * Optimizes the visibility of the floating element by choosing the placement\n * that has the most space available automatically, without needing to specify a\n * preferred placement. Alternative to `flip`.\n * @see https://floating-ui.com/docs/autoPlacement\n */\nconst autoPlacement = (options, deps) => ({\n  ...(0,_floating_ui_dom__WEBPACK_IMPORTED_MODULE_0__.autoPlacement)(options),\n  options: [options, deps]\n});\n\n/**\n * Provides data to hide the floating element in applicable situations, such as\n * when it is not in the same clipping context as the reference element.\n * @see https://floating-ui.com/docs/hide\n */\nconst hide = (options, deps) => ({\n  ...(0,_floating_ui_dom__WEBPACK_IMPORTED_MODULE_0__.hide)(options),\n  options: [options, deps]\n});\n\n/**\n * Provides improved positioning for inline reference elements that can span\n * over multiple lines, such as hyperlinks or range selections.\n * @see https://floating-ui.com/docs/inline\n */\nconst inline = (options, deps) => ({\n  ...(0,_floating_ui_dom__WEBPACK_IMPORTED_MODULE_0__.inline)(options),\n  options: [options, deps]\n});\n\n/**\n * Provides data to position an inner element of the floating element so that it\n * appears centered to the reference element.\n * This wraps the core `arrow` middleware to allow React refs as the element.\n * @see https://floating-ui.com/docs/arrow\n */\nconst arrow = (options, deps) => ({\n  ...arrow$1(options),\n  options: [options, deps]\n});\n\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi4vLi4vbm9kZV9tb2R1bGVzLy5wbnBtL0BmbG9hdGluZy11aStyZWFjdC1kb21AMi4xLjJfcmVhY3QtZG9tQDE4LjMuMV9yZWFjdEAxOC4zLjFfX3JlYWN0QDE4LjMuMS9ub2RlX21vZHVsZXMvQGZsb2F0aW5nLXVpL3JlYWN0LWRvbS9kaXN0L2Zsb2F0aW5nLXVpLnJlYWN0LWRvbS5tanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUE2TztBQUM5SDtBQUNoRjtBQUNvQjtBQUNiOztBQUV0Qyw4Q0FBOEMsa0RBQWUsR0FBRyw0Q0FBUzs7QUFFekU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1QkFBdUIsVUFBVTtBQUNqQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCLFVBQVU7QUFDL0IsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQixVQUFVO0FBQy9CO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLGNBQWMseUNBQVk7QUFDMUI7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTSxJQUFJO0FBQ1Y7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKLDBCQUEwQiwyQ0FBYztBQUN4QztBQUNBO0FBQ0E7QUFDQTtBQUNBLHNCQUFzQjtBQUN0QjtBQUNBLEdBQUc7QUFDSCxrREFBa0QsMkNBQWM7QUFDaEU7QUFDQTtBQUNBO0FBQ0Esc0NBQXNDLDJDQUFjO0FBQ3BELG9DQUFvQywyQ0FBYztBQUNsRCx1QkFBdUIsOENBQWlCO0FBQ3hDO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNILHNCQUFzQiw4Q0FBaUI7QUFDdkM7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLHVCQUF1Qix5Q0FBWTtBQUNuQyxzQkFBc0IseUNBQVk7QUFDbEMsa0JBQWtCLHlDQUFZO0FBQzlCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCLDhDQUFpQjtBQUNsQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSSxpRUFBZTtBQUNuQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVEsZ0RBQWtCO0FBQzFCO0FBQ0EsU0FBUztBQUNUO0FBQ0EsS0FBSztBQUNMLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQSxHQUFHO0FBQ0gsdUJBQXVCLHlDQUFZO0FBQ25DO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNILGVBQWUsMENBQWE7QUFDNUI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0gsbUJBQW1CLDBDQUFhO0FBQ2hDO0FBQ0E7QUFDQSxHQUFHO0FBQ0gseUJBQXlCLDBDQUFhO0FBQ3RDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNILFNBQVMsMENBQWE7QUFDdEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRO0FBQ1I7QUFDQTtBQUNBLGlCQUFpQix1REFBTztBQUN4QjtBQUNBO0FBQ0EsV0FBVztBQUNYO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZUFBZSx1REFBTztBQUN0QjtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUssd0RBQVE7QUFDYjtBQUNBLENBQUM7O0FBRUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSyx1REFBTztBQUNaO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUssNERBQVk7QUFDakI7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSyxzREFBTTtBQUNYO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUssc0RBQU07QUFDWDtBQUNBLENBQUM7O0FBRUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLLCtEQUFlO0FBQ3BCO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLLHNEQUFNO0FBQ1g7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUssd0RBQVE7QUFDYjtBQUNBLENBQUM7O0FBRUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFaUciLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi4vLi4vbm9kZV9tb2R1bGVzLy5wbnBtL0BmbG9hdGluZy11aStyZWFjdC1kb21AMi4xLjJfcmVhY3QtZG9tQDE4LjMuMV9yZWFjdEAxOC4zLjFfX3JlYWN0QDE4LjMuMS9ub2RlX21vZHVsZXMvQGZsb2F0aW5nLXVpL3JlYWN0LWRvbS9kaXN0L2Zsb2F0aW5nLXVpLnJlYWN0LWRvbS5tanM/MzMyMCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBjb21wdXRlUG9zaXRpb24sIGFycm93IGFzIGFycm93JDIsIG9mZnNldCBhcyBvZmZzZXQkMSwgc2hpZnQgYXMgc2hpZnQkMSwgbGltaXRTaGlmdCBhcyBsaW1pdFNoaWZ0JDEsIGZsaXAgYXMgZmxpcCQxLCBzaXplIGFzIHNpemUkMSwgYXV0b1BsYWNlbWVudCBhcyBhdXRvUGxhY2VtZW50JDEsIGhpZGUgYXMgaGlkZSQxLCBpbmxpbmUgYXMgaW5saW5lJDEgfSBmcm9tICdAZmxvYXRpbmctdWkvZG9tJztcbmV4cG9ydCB7IGF1dG9VcGRhdGUsIGNvbXB1dGVQb3NpdGlvbiwgZGV0ZWN0T3ZlcmZsb3csIGdldE92ZXJmbG93QW5jZXN0b3JzLCBwbGF0Zm9ybSB9IGZyb20gJ0BmbG9hdGluZy11aS9kb20nO1xuaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgdXNlTGF5b3V0RWZmZWN0LCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgKiBhcyBSZWFjdERPTSBmcm9tICdyZWFjdC1kb20nO1xuXG52YXIgaW5kZXggPSB0eXBlb2YgZG9jdW1lbnQgIT09ICd1bmRlZmluZWQnID8gdXNlTGF5b3V0RWZmZWN0IDogdXNlRWZmZWN0O1xuXG4vLyBGb3JrIG9mIGBmYXN0LWRlZXAtZXF1YWxgIHRoYXQgb25seSBkb2VzIHRoZSBjb21wYXJpc29ucyB3ZSBuZWVkIGFuZCBjb21wYXJlc1xuLy8gZnVuY3Rpb25zXG5mdW5jdGlvbiBkZWVwRXF1YWwoYSwgYikge1xuICBpZiAoYSA9PT0gYikge1xuICAgIHJldHVybiB0cnVlO1xuICB9XG4gIGlmICh0eXBlb2YgYSAhPT0gdHlwZW9mIGIpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgaWYgKHR5cGVvZiBhID09PSAnZnVuY3Rpb24nICYmIGEudG9TdHJpbmcoKSA9PT0gYi50b1N0cmluZygpKSB7XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cbiAgbGV0IGxlbmd0aDtcbiAgbGV0IGk7XG4gIGxldCBrZXlzO1xuICBpZiAoYSAmJiBiICYmIHR5cGVvZiBhID09PSAnb2JqZWN0Jykge1xuICAgIGlmIChBcnJheS5pc0FycmF5KGEpKSB7XG4gICAgICBsZW5ndGggPSBhLmxlbmd0aDtcbiAgICAgIGlmIChsZW5ndGggIT09IGIubGVuZ3RoKSByZXR1cm4gZmFsc2U7XG4gICAgICBmb3IgKGkgPSBsZW5ndGg7IGktLSAhPT0gMDspIHtcbiAgICAgICAgaWYgKCFkZWVwRXF1YWwoYVtpXSwgYltpXSkpIHtcbiAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgICBrZXlzID0gT2JqZWN0LmtleXMoYSk7XG4gICAgbGVuZ3RoID0ga2V5cy5sZW5ndGg7XG4gICAgaWYgKGxlbmd0aCAhPT0gT2JqZWN0LmtleXMoYikubGVuZ3RoKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICAgIGZvciAoaSA9IGxlbmd0aDsgaS0tICE9PSAwOykge1xuICAgICAgaWYgKCF7fS5oYXNPd25Qcm9wZXJ0eS5jYWxsKGIsIGtleXNbaV0pKSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgIH1cbiAgICB9XG4gICAgZm9yIChpID0gbGVuZ3RoOyBpLS0gIT09IDA7KSB7XG4gICAgICBjb25zdCBrZXkgPSBrZXlzW2ldO1xuICAgICAgaWYgKGtleSA9PT0gJ19vd25lcicgJiYgYS4kJHR5cGVvZikge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmICghZGVlcEVxdWFsKGFba2V5XSwgYltrZXldKSkge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiB0cnVlO1xuICB9XG4gIHJldHVybiBhICE9PSBhICYmIGIgIT09IGI7XG59XG5cbmZ1bmN0aW9uIGdldERQUihlbGVtZW50KSB7XG4gIGlmICh0eXBlb2Ygd2luZG93ID09PSAndW5kZWZpbmVkJykge1xuICAgIHJldHVybiAxO1xuICB9XG4gIGNvbnN0IHdpbiA9IGVsZW1lbnQub3duZXJEb2N1bWVudC5kZWZhdWx0VmlldyB8fCB3aW5kb3c7XG4gIHJldHVybiB3aW4uZGV2aWNlUGl4ZWxSYXRpbyB8fCAxO1xufVxuXG5mdW5jdGlvbiByb3VuZEJ5RFBSKGVsZW1lbnQsIHZhbHVlKSB7XG4gIGNvbnN0IGRwciA9IGdldERQUihlbGVtZW50KTtcbiAgcmV0dXJuIE1hdGgucm91bmQodmFsdWUgKiBkcHIpIC8gZHByO1xufVxuXG5mdW5jdGlvbiB1c2VMYXRlc3RSZWYodmFsdWUpIHtcbiAgY29uc3QgcmVmID0gUmVhY3QudXNlUmVmKHZhbHVlKTtcbiAgaW5kZXgoKCkgPT4ge1xuICAgIHJlZi5jdXJyZW50ID0gdmFsdWU7XG4gIH0pO1xuICByZXR1cm4gcmVmO1xufVxuXG4vKipcbiAqIFByb3ZpZGVzIGRhdGEgdG8gcG9zaXRpb24gYSBmbG9hdGluZyBlbGVtZW50LlxuICogQHNlZSBodHRwczovL2Zsb2F0aW5nLXVpLmNvbS9kb2NzL3VzZUZsb2F0aW5nXG4gKi9cbmZ1bmN0aW9uIHVzZUZsb2F0aW5nKG9wdGlvbnMpIHtcbiAgaWYgKG9wdGlvbnMgPT09IHZvaWQgMCkge1xuICAgIG9wdGlvbnMgPSB7fTtcbiAgfVxuICBjb25zdCB7XG4gICAgcGxhY2VtZW50ID0gJ2JvdHRvbScsXG4gICAgc3RyYXRlZ3kgPSAnYWJzb2x1dGUnLFxuICAgIG1pZGRsZXdhcmUgPSBbXSxcbiAgICBwbGF0Zm9ybSxcbiAgICBlbGVtZW50czoge1xuICAgICAgcmVmZXJlbmNlOiBleHRlcm5hbFJlZmVyZW5jZSxcbiAgICAgIGZsb2F0aW5nOiBleHRlcm5hbEZsb2F0aW5nXG4gICAgfSA9IHt9LFxuICAgIHRyYW5zZm9ybSA9IHRydWUsXG4gICAgd2hpbGVFbGVtZW50c01vdW50ZWQsXG4gICAgb3BlblxuICB9ID0gb3B0aW9ucztcbiAgY29uc3QgW2RhdGEsIHNldERhdGFdID0gUmVhY3QudXNlU3RhdGUoe1xuICAgIHg6IDAsXG4gICAgeTogMCxcbiAgICBzdHJhdGVneSxcbiAgICBwbGFjZW1lbnQsXG4gICAgbWlkZGxld2FyZURhdGE6IHt9LFxuICAgIGlzUG9zaXRpb25lZDogZmFsc2VcbiAgfSk7XG4gIGNvbnN0IFtsYXRlc3RNaWRkbGV3YXJlLCBzZXRMYXRlc3RNaWRkbGV3YXJlXSA9IFJlYWN0LnVzZVN0YXRlKG1pZGRsZXdhcmUpO1xuICBpZiAoIWRlZXBFcXVhbChsYXRlc3RNaWRkbGV3YXJlLCBtaWRkbGV3YXJlKSkge1xuICAgIHNldExhdGVzdE1pZGRsZXdhcmUobWlkZGxld2FyZSk7XG4gIH1cbiAgY29uc3QgW19yZWZlcmVuY2UsIF9zZXRSZWZlcmVuY2VdID0gUmVhY3QudXNlU3RhdGUobnVsbCk7XG4gIGNvbnN0IFtfZmxvYXRpbmcsIF9zZXRGbG9hdGluZ10gPSBSZWFjdC51c2VTdGF0ZShudWxsKTtcbiAgY29uc3Qgc2V0UmVmZXJlbmNlID0gUmVhY3QudXNlQ2FsbGJhY2sobm9kZSA9PiB7XG4gICAgaWYgKG5vZGUgIT09IHJlZmVyZW5jZVJlZi5jdXJyZW50KSB7XG4gICAgICByZWZlcmVuY2VSZWYuY3VycmVudCA9IG5vZGU7XG4gICAgICBfc2V0UmVmZXJlbmNlKG5vZGUpO1xuICAgIH1cbiAgfSwgW10pO1xuICBjb25zdCBzZXRGbG9hdGluZyA9IFJlYWN0LnVzZUNhbGxiYWNrKG5vZGUgPT4ge1xuICAgIGlmIChub2RlICE9PSBmbG9hdGluZ1JlZi5jdXJyZW50KSB7XG4gICAgICBmbG9hdGluZ1JlZi5jdXJyZW50ID0gbm9kZTtcbiAgICAgIF9zZXRGbG9hdGluZyhub2RlKTtcbiAgICB9XG4gIH0sIFtdKTtcbiAgY29uc3QgcmVmZXJlbmNlRWwgPSBleHRlcm5hbFJlZmVyZW5jZSB8fCBfcmVmZXJlbmNlO1xuICBjb25zdCBmbG9hdGluZ0VsID0gZXh0ZXJuYWxGbG9hdGluZyB8fCBfZmxvYXRpbmc7XG4gIGNvbnN0IHJlZmVyZW5jZVJlZiA9IFJlYWN0LnVzZVJlZihudWxsKTtcbiAgY29uc3QgZmxvYXRpbmdSZWYgPSBSZWFjdC51c2VSZWYobnVsbCk7XG4gIGNvbnN0IGRhdGFSZWYgPSBSZWFjdC51c2VSZWYoZGF0YSk7XG4gIGNvbnN0IGhhc1doaWxlRWxlbWVudHNNb3VudGVkID0gd2hpbGVFbGVtZW50c01vdW50ZWQgIT0gbnVsbDtcbiAgY29uc3Qgd2hpbGVFbGVtZW50c01vdW50ZWRSZWYgPSB1c2VMYXRlc3RSZWYod2hpbGVFbGVtZW50c01vdW50ZWQpO1xuICBjb25zdCBwbGF0Zm9ybVJlZiA9IHVzZUxhdGVzdFJlZihwbGF0Zm9ybSk7XG4gIGNvbnN0IG9wZW5SZWYgPSB1c2VMYXRlc3RSZWYob3Blbik7XG4gIGNvbnN0IHVwZGF0ZSA9IFJlYWN0LnVzZUNhbGxiYWNrKCgpID0+IHtcbiAgICBpZiAoIXJlZmVyZW5jZVJlZi5jdXJyZW50IHx8ICFmbG9hdGluZ1JlZi5jdXJyZW50KSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGNvbnN0IGNvbmZpZyA9IHtcbiAgICAgIHBsYWNlbWVudCxcbiAgICAgIHN0cmF0ZWd5LFxuICAgICAgbWlkZGxld2FyZTogbGF0ZXN0TWlkZGxld2FyZVxuICAgIH07XG4gICAgaWYgKHBsYXRmb3JtUmVmLmN1cnJlbnQpIHtcbiAgICAgIGNvbmZpZy5wbGF0Zm9ybSA9IHBsYXRmb3JtUmVmLmN1cnJlbnQ7XG4gICAgfVxuICAgIGNvbXB1dGVQb3NpdGlvbihyZWZlcmVuY2VSZWYuY3VycmVudCwgZmxvYXRpbmdSZWYuY3VycmVudCwgY29uZmlnKS50aGVuKGRhdGEgPT4ge1xuICAgICAgY29uc3QgZnVsbERhdGEgPSB7XG4gICAgICAgIC4uLmRhdGEsXG4gICAgICAgIC8vIFRoZSBmbG9hdGluZyBlbGVtZW50J3MgcG9zaXRpb24gbWF5IGJlIHJlY29tcHV0ZWQgd2hpbGUgaXQncyBjbG9zZWRcbiAgICAgICAgLy8gYnV0IHN0aWxsIG1vdW50ZWQgKHN1Y2ggYXMgd2hlbiB0cmFuc2l0aW9uaW5nIG91dCkuIFRvIGVuc3VyZVxuICAgICAgICAvLyBgaXNQb3NpdGlvbmVkYCB3aWxsIGJlIGBmYWxzZWAgaW5pdGlhbGx5IG9uIHRoZSBuZXh0IG9wZW4sIGF2b2lkXG4gICAgICAgIC8vIHNldHRpbmcgaXQgdG8gYHRydWVgIHdoZW4gYG9wZW4gPT09IGZhbHNlYCAobXVzdCBiZSBzcGVjaWZpZWQpLlxuICAgICAgICBpc1Bvc2l0aW9uZWQ6IG9wZW5SZWYuY3VycmVudCAhPT0gZmFsc2VcbiAgICAgIH07XG4gICAgICBpZiAoaXNNb3VudGVkUmVmLmN1cnJlbnQgJiYgIWRlZXBFcXVhbChkYXRhUmVmLmN1cnJlbnQsIGZ1bGxEYXRhKSkge1xuICAgICAgICBkYXRhUmVmLmN1cnJlbnQgPSBmdWxsRGF0YTtcbiAgICAgICAgUmVhY3RET00uZmx1c2hTeW5jKCgpID0+IHtcbiAgICAgICAgICBzZXREYXRhKGZ1bGxEYXRhKTtcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfSk7XG4gIH0sIFtsYXRlc3RNaWRkbGV3YXJlLCBwbGFjZW1lbnQsIHN0cmF0ZWd5LCBwbGF0Zm9ybVJlZiwgb3BlblJlZl0pO1xuICBpbmRleCgoKSA9PiB7XG4gICAgaWYgKG9wZW4gPT09IGZhbHNlICYmIGRhdGFSZWYuY3VycmVudC5pc1Bvc2l0aW9uZWQpIHtcbiAgICAgIGRhdGFSZWYuY3VycmVudC5pc1Bvc2l0aW9uZWQgPSBmYWxzZTtcbiAgICAgIHNldERhdGEoZGF0YSA9PiAoe1xuICAgICAgICAuLi5kYXRhLFxuICAgICAgICBpc1Bvc2l0aW9uZWQ6IGZhbHNlXG4gICAgICB9KSk7XG4gICAgfVxuICB9LCBbb3Blbl0pO1xuICBjb25zdCBpc01vdW50ZWRSZWYgPSBSZWFjdC51c2VSZWYoZmFsc2UpO1xuICBpbmRleCgoKSA9PiB7XG4gICAgaXNNb3VudGVkUmVmLmN1cnJlbnQgPSB0cnVlO1xuICAgIHJldHVybiAoKSA9PiB7XG4gICAgICBpc01vdW50ZWRSZWYuY3VycmVudCA9IGZhbHNlO1xuICAgIH07XG4gIH0sIFtdKTtcbiAgaW5kZXgoKCkgPT4ge1xuICAgIGlmIChyZWZlcmVuY2VFbCkgcmVmZXJlbmNlUmVmLmN1cnJlbnQgPSByZWZlcmVuY2VFbDtcbiAgICBpZiAoZmxvYXRpbmdFbCkgZmxvYXRpbmdSZWYuY3VycmVudCA9IGZsb2F0aW5nRWw7XG4gICAgaWYgKHJlZmVyZW5jZUVsICYmIGZsb2F0aW5nRWwpIHtcbiAgICAgIGlmICh3aGlsZUVsZW1lbnRzTW91bnRlZFJlZi5jdXJyZW50KSB7XG4gICAgICAgIHJldHVybiB3aGlsZUVsZW1lbnRzTW91bnRlZFJlZi5jdXJyZW50KHJlZmVyZW5jZUVsLCBmbG9hdGluZ0VsLCB1cGRhdGUpO1xuICAgICAgfVxuICAgICAgdXBkYXRlKCk7XG4gICAgfVxuICB9LCBbcmVmZXJlbmNlRWwsIGZsb2F0aW5nRWwsIHVwZGF0ZSwgd2hpbGVFbGVtZW50c01vdW50ZWRSZWYsIGhhc1doaWxlRWxlbWVudHNNb3VudGVkXSk7XG4gIGNvbnN0IHJlZnMgPSBSZWFjdC51c2VNZW1vKCgpID0+ICh7XG4gICAgcmVmZXJlbmNlOiByZWZlcmVuY2VSZWYsXG4gICAgZmxvYXRpbmc6IGZsb2F0aW5nUmVmLFxuICAgIHNldFJlZmVyZW5jZSxcbiAgICBzZXRGbG9hdGluZ1xuICB9KSwgW3NldFJlZmVyZW5jZSwgc2V0RmxvYXRpbmddKTtcbiAgY29uc3QgZWxlbWVudHMgPSBSZWFjdC51c2VNZW1vKCgpID0+ICh7XG4gICAgcmVmZXJlbmNlOiByZWZlcmVuY2VFbCxcbiAgICBmbG9hdGluZzogZmxvYXRpbmdFbFxuICB9KSwgW3JlZmVyZW5jZUVsLCBmbG9hdGluZ0VsXSk7XG4gIGNvbnN0IGZsb2F0aW5nU3R5bGVzID0gUmVhY3QudXNlTWVtbygoKSA9PiB7XG4gICAgY29uc3QgaW5pdGlhbFN0eWxlcyA9IHtcbiAgICAgIHBvc2l0aW9uOiBzdHJhdGVneSxcbiAgICAgIGxlZnQ6IDAsXG4gICAgICB0b3A6IDBcbiAgICB9O1xuICAgIGlmICghZWxlbWVudHMuZmxvYXRpbmcpIHtcbiAgICAgIHJldHVybiBpbml0aWFsU3R5bGVzO1xuICAgIH1cbiAgICBjb25zdCB4ID0gcm91bmRCeURQUihlbGVtZW50cy5mbG9hdGluZywgZGF0YS54KTtcbiAgICBjb25zdCB5ID0gcm91bmRCeURQUihlbGVtZW50cy5mbG9hdGluZywgZGF0YS55KTtcbiAgICBpZiAodHJhbnNmb3JtKSB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICAuLi5pbml0aWFsU3R5bGVzLFxuICAgICAgICB0cmFuc2Zvcm06IFwidHJhbnNsYXRlKFwiICsgeCArIFwicHgsIFwiICsgeSArIFwicHgpXCIsXG4gICAgICAgIC4uLihnZXREUFIoZWxlbWVudHMuZmxvYXRpbmcpID49IDEuNSAmJiB7XG4gICAgICAgICAgd2lsbENoYW5nZTogJ3RyYW5zZm9ybSdcbiAgICAgICAgfSlcbiAgICAgIH07XG4gICAgfVxuICAgIHJldHVybiB7XG4gICAgICBwb3NpdGlvbjogc3RyYXRlZ3ksXG4gICAgICBsZWZ0OiB4LFxuICAgICAgdG9wOiB5XG4gICAgfTtcbiAgfSwgW3N0cmF0ZWd5LCB0cmFuc2Zvcm0sIGVsZW1lbnRzLmZsb2F0aW5nLCBkYXRhLngsIGRhdGEueV0pO1xuICByZXR1cm4gUmVhY3QudXNlTWVtbygoKSA9PiAoe1xuICAgIC4uLmRhdGEsXG4gICAgdXBkYXRlLFxuICAgIHJlZnMsXG4gICAgZWxlbWVudHMsXG4gICAgZmxvYXRpbmdTdHlsZXNcbiAgfSksIFtkYXRhLCB1cGRhdGUsIHJlZnMsIGVsZW1lbnRzLCBmbG9hdGluZ1N0eWxlc10pO1xufVxuXG4vKipcbiAqIFByb3ZpZGVzIGRhdGEgdG8gcG9zaXRpb24gYW4gaW5uZXIgZWxlbWVudCBvZiB0aGUgZmxvYXRpbmcgZWxlbWVudCBzbyB0aGF0IGl0XG4gKiBhcHBlYXJzIGNlbnRlcmVkIHRvIHRoZSByZWZlcmVuY2UgZWxlbWVudC5cbiAqIFRoaXMgd3JhcHMgdGhlIGNvcmUgYGFycm93YCBtaWRkbGV3YXJlIHRvIGFsbG93IFJlYWN0IHJlZnMgYXMgdGhlIGVsZW1lbnQuXG4gKiBAc2VlIGh0dHBzOi8vZmxvYXRpbmctdWkuY29tL2RvY3MvYXJyb3dcbiAqL1xuY29uc3QgYXJyb3ckMSA9IG9wdGlvbnMgPT4ge1xuICBmdW5jdGlvbiBpc1JlZih2YWx1ZSkge1xuICAgIHJldHVybiB7fS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHZhbHVlLCAnY3VycmVudCcpO1xuICB9XG4gIHJldHVybiB7XG4gICAgbmFtZTogJ2Fycm93JyxcbiAgICBvcHRpb25zLFxuICAgIGZuKHN0YXRlKSB7XG4gICAgICBjb25zdCB7XG4gICAgICAgIGVsZW1lbnQsXG4gICAgICAgIHBhZGRpbmdcbiAgICAgIH0gPSB0eXBlb2Ygb3B0aW9ucyA9PT0gJ2Z1bmN0aW9uJyA/IG9wdGlvbnMoc3RhdGUpIDogb3B0aW9ucztcbiAgICAgIGlmIChlbGVtZW50ICYmIGlzUmVmKGVsZW1lbnQpKSB7XG4gICAgICAgIGlmIChlbGVtZW50LmN1cnJlbnQgIT0gbnVsbCkge1xuICAgICAgICAgIHJldHVybiBhcnJvdyQyKHtcbiAgICAgICAgICAgIGVsZW1lbnQ6IGVsZW1lbnQuY3VycmVudCxcbiAgICAgICAgICAgIHBhZGRpbmdcbiAgICAgICAgICB9KS5mbihzdGF0ZSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHt9O1xuICAgICAgfVxuICAgICAgaWYgKGVsZW1lbnQpIHtcbiAgICAgICAgcmV0dXJuIGFycm93JDIoe1xuICAgICAgICAgIGVsZW1lbnQsXG4gICAgICAgICAgcGFkZGluZ1xuICAgICAgICB9KS5mbihzdGF0ZSk7XG4gICAgICB9XG4gICAgICByZXR1cm4ge307XG4gICAgfVxuICB9O1xufTtcblxuLyoqXG4gKiBNb2RpZmllcyB0aGUgcGxhY2VtZW50IGJ5IHRyYW5zbGF0aW5nIHRoZSBmbG9hdGluZyBlbGVtZW50IGFsb25nIHRoZVxuICogc3BlY2lmaWVkIGF4ZXMuXG4gKiBBIG51bWJlciAoc2hvcnRoYW5kIGZvciBgbWFpbkF4aXNgIG9yIGRpc3RhbmNlKSwgb3IgYW4gYXhlcyBjb25maWd1cmF0aW9uXG4gKiBvYmplY3QgbWF5IGJlIHBhc3NlZC5cbiAqIEBzZWUgaHR0cHM6Ly9mbG9hdGluZy11aS5jb20vZG9jcy9vZmZzZXRcbiAqL1xuY29uc3Qgb2Zmc2V0ID0gKG9wdGlvbnMsIGRlcHMpID0+ICh7XG4gIC4uLm9mZnNldCQxKG9wdGlvbnMpLFxuICBvcHRpb25zOiBbb3B0aW9ucywgZGVwc11cbn0pO1xuXG4vKipcbiAqIE9wdGltaXplcyB0aGUgdmlzaWJpbGl0eSBvZiB0aGUgZmxvYXRpbmcgZWxlbWVudCBieSBzaGlmdGluZyBpdCBpbiBvcmRlciB0b1xuICoga2VlcCBpdCBpbiB2aWV3IHdoZW4gaXQgd2lsbCBvdmVyZmxvdyB0aGUgY2xpcHBpbmcgYm91bmRhcnkuXG4gKiBAc2VlIGh0dHBzOi8vZmxvYXRpbmctdWkuY29tL2RvY3Mvc2hpZnRcbiAqL1xuY29uc3Qgc2hpZnQgPSAob3B0aW9ucywgZGVwcykgPT4gKHtcbiAgLi4uc2hpZnQkMShvcHRpb25zKSxcbiAgb3B0aW9uczogW29wdGlvbnMsIGRlcHNdXG59KTtcblxuLyoqXG4gKiBCdWlsdC1pbiBgbGltaXRlcmAgdGhhdCB3aWxsIHN0b3AgYHNoaWZ0KClgIGF0IGEgY2VydGFpbiBwb2ludC5cbiAqL1xuY29uc3QgbGltaXRTaGlmdCA9IChvcHRpb25zLCBkZXBzKSA9PiAoe1xuICAuLi5saW1pdFNoaWZ0JDEob3B0aW9ucyksXG4gIG9wdGlvbnM6IFtvcHRpb25zLCBkZXBzXVxufSk7XG5cbi8qKlxuICogT3B0aW1pemVzIHRoZSB2aXNpYmlsaXR5IG9mIHRoZSBmbG9hdGluZyBlbGVtZW50IGJ5IGZsaXBwaW5nIHRoZSBgcGxhY2VtZW50YFxuICogaW4gb3JkZXIgdG8ga2VlcCBpdCBpbiB2aWV3IHdoZW4gdGhlIHByZWZlcnJlZCBwbGFjZW1lbnQocykgd2lsbCBvdmVyZmxvdyB0aGVcbiAqIGNsaXBwaW5nIGJvdW5kYXJ5LiBBbHRlcm5hdGl2ZSB0byBgYXV0b1BsYWNlbWVudGAuXG4gKiBAc2VlIGh0dHBzOi8vZmxvYXRpbmctdWkuY29tL2RvY3MvZmxpcFxuICovXG5jb25zdCBmbGlwID0gKG9wdGlvbnMsIGRlcHMpID0+ICh7XG4gIC4uLmZsaXAkMShvcHRpb25zKSxcbiAgb3B0aW9uczogW29wdGlvbnMsIGRlcHNdXG59KTtcblxuLyoqXG4gKiBQcm92aWRlcyBkYXRhIHRoYXQgYWxsb3dzIHlvdSB0byBjaGFuZ2UgdGhlIHNpemUgb2YgdGhlIGZsb2F0aW5nIGVsZW1lbnQg4oCUXG4gKiBmb3IgaW5zdGFuY2UsIHByZXZlbnQgaXQgZnJvbSBvdmVyZmxvd2luZyB0aGUgY2xpcHBpbmcgYm91bmRhcnkgb3IgbWF0Y2ggdGhlXG4gKiB3aWR0aCBvZiB0aGUgcmVmZXJlbmNlIGVsZW1lbnQuXG4gKiBAc2VlIGh0dHBzOi8vZmxvYXRpbmctdWkuY29tL2RvY3Mvc2l6ZVxuICovXG5jb25zdCBzaXplID0gKG9wdGlvbnMsIGRlcHMpID0+ICh7XG4gIC4uLnNpemUkMShvcHRpb25zKSxcbiAgb3B0aW9uczogW29wdGlvbnMsIGRlcHNdXG59KTtcblxuLyoqXG4gKiBPcHRpbWl6ZXMgdGhlIHZpc2liaWxpdHkgb2YgdGhlIGZsb2F0aW5nIGVsZW1lbnQgYnkgY2hvb3NpbmcgdGhlIHBsYWNlbWVudFxuICogdGhhdCBoYXMgdGhlIG1vc3Qgc3BhY2UgYXZhaWxhYmxlIGF1dG9tYXRpY2FsbHksIHdpdGhvdXQgbmVlZGluZyB0byBzcGVjaWZ5IGFcbiAqIHByZWZlcnJlZCBwbGFjZW1lbnQuIEFsdGVybmF0aXZlIHRvIGBmbGlwYC5cbiAqIEBzZWUgaHR0cHM6Ly9mbG9hdGluZy11aS5jb20vZG9jcy9hdXRvUGxhY2VtZW50XG4gKi9cbmNvbnN0IGF1dG9QbGFjZW1lbnQgPSAob3B0aW9ucywgZGVwcykgPT4gKHtcbiAgLi4uYXV0b1BsYWNlbWVudCQxKG9wdGlvbnMpLFxuICBvcHRpb25zOiBbb3B0aW9ucywgZGVwc11cbn0pO1xuXG4vKipcbiAqIFByb3ZpZGVzIGRhdGEgdG8gaGlkZSB0aGUgZmxvYXRpbmcgZWxlbWVudCBpbiBhcHBsaWNhYmxlIHNpdHVhdGlvbnMsIHN1Y2ggYXNcbiAqIHdoZW4gaXQgaXMgbm90IGluIHRoZSBzYW1lIGNsaXBwaW5nIGNvbnRleHQgYXMgdGhlIHJlZmVyZW5jZSBlbGVtZW50LlxuICogQHNlZSBodHRwczovL2Zsb2F0aW5nLXVpLmNvbS9kb2NzL2hpZGVcbiAqL1xuY29uc3QgaGlkZSA9IChvcHRpb25zLCBkZXBzKSA9PiAoe1xuICAuLi5oaWRlJDEob3B0aW9ucyksXG4gIG9wdGlvbnM6IFtvcHRpb25zLCBkZXBzXVxufSk7XG5cbi8qKlxuICogUHJvdmlkZXMgaW1wcm92ZWQgcG9zaXRpb25pbmcgZm9yIGlubGluZSByZWZlcmVuY2UgZWxlbWVudHMgdGhhdCBjYW4gc3BhblxuICogb3ZlciBtdWx0aXBsZSBsaW5lcywgc3VjaCBhcyBoeXBlcmxpbmtzIG9yIHJhbmdlIHNlbGVjdGlvbnMuXG4gKiBAc2VlIGh0dHBzOi8vZmxvYXRpbmctdWkuY29tL2RvY3MvaW5saW5lXG4gKi9cbmNvbnN0IGlubGluZSA9IChvcHRpb25zLCBkZXBzKSA9PiAoe1xuICAuLi5pbmxpbmUkMShvcHRpb25zKSxcbiAgb3B0aW9uczogW29wdGlvbnMsIGRlcHNdXG59KTtcblxuLyoqXG4gKiBQcm92aWRlcyBkYXRhIHRvIHBvc2l0aW9uIGFuIGlubmVyIGVsZW1lbnQgb2YgdGhlIGZsb2F0aW5nIGVsZW1lbnQgc28gdGhhdCBpdFxuICogYXBwZWFycyBjZW50ZXJlZCB0byB0aGUgcmVmZXJlbmNlIGVsZW1lbnQuXG4gKiBUaGlzIHdyYXBzIHRoZSBjb3JlIGBhcnJvd2AgbWlkZGxld2FyZSB0byBhbGxvdyBSZWFjdCByZWZzIGFzIHRoZSBlbGVtZW50LlxuICogQHNlZSBodHRwczovL2Zsb2F0aW5nLXVpLmNvbS9kb2NzL2Fycm93XG4gKi9cbmNvbnN0IGFycm93ID0gKG9wdGlvbnMsIGRlcHMpID0+ICh7XG4gIC4uLmFycm93JDEob3B0aW9ucyksXG4gIG9wdGlvbnM6IFtvcHRpb25zLCBkZXBzXVxufSk7XG5cbmV4cG9ydCB7IGFycm93LCBhdXRvUGxhY2VtZW50LCBmbGlwLCBoaWRlLCBpbmxpbmUsIGxpbWl0U2hpZnQsIG9mZnNldCwgc2hpZnQsIHNpemUsIHVzZUZsb2F0aW5nIH07XG4iXSwibmFtZXMiOltdLCJpZ25vcmVMaXN0IjpbMF0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(ssr)/../../node_modules/.pnpm/@floating-ui+react-dom@2.1.2_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@floating-ui/react-dom/dist/floating-ui.react-dom.mjs\n");

/***/ })

};
;