"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/index";
exports.ids = ["pages/index"];
exports.modules = {

/***/ "./api/build-client.js":
/*!*****************************!*\
  !*** ./api/build-client.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ \"axios\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (({ req  })=>{\n    if (true) {\n        // we are on server\n        return axios__WEBPACK_IMPORTED_MODULE_0___default().create({\n            // if using kubernetes 'http://ingress-nginx.ingress.svc.cluster.local'\n            baseURL: \"http://localhost:5000\",\n            headers: req.headers\n        });\n    } else {}\n});\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9hcGkvYnVpbGQtY2xpZW50LmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7OztBQUEwQjtBQUUxQixpRUFBZSxDQUFDLEVBQUVDLEdBQUcsR0FBRSxHQUFLO0lBQzFCLElBQUksSUFBNkIsRUFBRTtRQUNqQyxtQkFBbUI7UUFDbkIsT0FBT0QsbURBQVksQ0FBQztZQUNsQix1RUFBdUU7WUFDdkVHLE9BQU8sRUFBRSx1QkFBdUI7WUFDaENDLE9BQU8sRUFBRUgsR0FBRyxDQUFDRyxPQUFPO1NBQ3JCLENBQUMsQ0FBQztLQUNKLE1BQU0sRUFJTjtDQUNGLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9mcm9udGVuZC8uL2FwaS9idWlsZC1jbGllbnQuanM/YzZmMCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCAoeyByZXEgfSkgPT4ge1xyXG4gIGlmICh0eXBlb2Ygd2luZG93ID09PSBcInVuZGVmaW5lZFwiKSB7XHJcbiAgICAvLyB3ZSBhcmUgb24gc2VydmVyXHJcbiAgICByZXR1cm4gYXhpb3MuY3JlYXRlKHtcclxuICAgICAgLy8gaWYgdXNpbmcga3ViZXJuZXRlcyAnaHR0cDovL2luZ3Jlc3MtbmdpbnguaW5ncmVzcy5zdmMuY2x1c3Rlci5sb2NhbCdcclxuICAgICAgYmFzZVVSTDogXCJodHRwOi8vbG9jYWxob3N0OjUwMDBcIixcclxuICAgICAgaGVhZGVyczogcmVxLmhlYWRlcnMsXHJcbiAgICB9KTtcclxuICB9IGVsc2Uge1xyXG4gICAgcmV0dXJuIGF4aW9zLmNyZWF0ZSh7XHJcbiAgICAgIGJhc2VVUkw6IFwiaHR0cDovL2xvY2FsaG9zdDo1MDAwXCIsXHJcbiAgICB9KTtcclxuICB9XHJcbn07XHJcbiJdLCJuYW1lcyI6WyJheGlvcyIsInJlcSIsImNyZWF0ZSIsImJhc2VVUkwiLCJoZWFkZXJzIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./api/build-client.js\n");

/***/ }),

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _api_build_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../api/build-client */ \"./api/build-client.js\");\n\n\nconst LandingPage = ({ currentUser  })=>{\n    // console.log(currentUser);\n    return currentUser ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n        children: \"You are signed in\"\n    }, void 0, false, {\n        fileName: \"E:\\\\REACT_JS\\\\PROJECTS\\\\microservices\\\\second_app_ticket_sell\\\\frontend\\\\pages\\\\index.js\",\n        lineNumber: 5,\n        columnNumber: 24\n    }, undefined) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n        children: \"You are not signed\"\n    }, void 0, false, {\n        fileName: \"E:\\\\REACT_JS\\\\PROJECTS\\\\microservices\\\\second_app_ticket_sell\\\\frontend\\\\pages\\\\index.js\",\n        lineNumber: 5,\n        columnNumber: 53\n    }, undefined);\n};\nLandingPage.getInitialProps = async (context)=>{\n    // context mai hoga sb\n    const client = (0,_api_build_client__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(context);\n    const { data  } = await client.get(\"/api/users/currentuser\");\n    return data;\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (LandingPage); /* console.log(req.headers.cookie);\r\n we are using axios rather then useRequest hook (self created)\r\n   because hooks are used inside the component.. getInitialProps is\r\n   plain function outside of component\r\n\r\n  \r\n If we are using docker and kubernetes for hosting of our microservice\r\n\r\n  if(typeof window === 'undefined')\r\n  {\r\n     we are on the server! (when we dorectly load this page..so at that tym browser cannot make request..as this is building inside the server)\r\n     request should be made to http://ingress-nginx.ingress.....sfdgsfg\r\n     as only '/' mean...localhost of that specific container..so we need \r\n     make call to our ingress controller\r\n    ( we are not using ticketing.dev as base coz we can't make call to loadbalancer as it is outside of cluster ...\"!maybe!\")\r\n    const {data} = await axios.get('http://SERVICENAME.NAMESPACE.svc.cluster.local/api/users/currentuser',{\r\n      headers:{\r\n        Host: 'ticketing.dev'\r\n      }\r\n    })\r\n     we using this header coz the host mention in url is not known by ingress controller \r\n     so by specifying host in header ingress can know which host we trying to access\r\n   return data;\r\n  }\r\n  else\r\n  {\r\n     we are on the browser! (when we navigate to this page from another page..so at that tym req will be made by the browser)\r\n     requests can be made with a base url of ''\r\n  }\r\n\r\n */ \n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmRleC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7QUFBOEM7QUFFOUMsTUFBTUMsV0FBVyxHQUFHLENBQUMsRUFBRUMsV0FBVyxHQUFFLEdBQUs7SUFDdkMsNEJBQTRCO0lBQzVCLE9BQU9BLFdBQVcsaUJBQUcsOERBQUNDLElBQUU7a0JBQUMsbUJBQWlCOzs7OztpQkFBSyxpQkFBRyw4REFBQ0EsSUFBRTtrQkFBQyxvQkFBa0I7Ozs7O2lCQUFLLENBQUM7Q0FDL0U7QUFFREYsV0FBVyxDQUFDRyxlQUFlLEdBQUcsT0FBT0MsT0FBTyxHQUFLO0lBQy9DLHNCQUFzQjtJQUN0QixNQUFNQyxNQUFNLEdBQUdOLDZEQUFXLENBQUNLLE9BQU8sQ0FBQztJQUNuQyxNQUFNLEVBQUVFLElBQUksR0FBRSxHQUFHLE1BQU1ELE1BQU0sQ0FBQ0UsR0FBRyxDQUFDLHdCQUF3QixDQUFDO0lBQzNELE9BQU9ELElBQUksQ0FBQztDQUNiLENBQUM7QUFFRixpRUFBZU4sV0FBVyxFQUFDLENBRTNCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZnJvbnRlbmQvLi9wYWdlcy9pbmRleC5qcz9iZWU3Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBidWlsZENsaWVudCBmcm9tIFwiLi4vYXBpL2J1aWxkLWNsaWVudFwiO1xyXG5cclxuY29uc3QgTGFuZGluZ1BhZ2UgPSAoeyBjdXJyZW50VXNlciB9KSA9PiB7XHJcbiAgLy8gY29uc29sZS5sb2coY3VycmVudFVzZXIpO1xyXG4gIHJldHVybiBjdXJyZW50VXNlciA/IDxoMT5Zb3UgYXJlIHNpZ25lZCBpbjwvaDE+IDogPGgxPllvdSBhcmUgbm90IHNpZ25lZDwvaDE+O1xyXG59O1xyXG5cclxuTGFuZGluZ1BhZ2UuZ2V0SW5pdGlhbFByb3BzID0gYXN5bmMgKGNvbnRleHQpID0+IHtcclxuICAvLyBjb250ZXh0IG1haSBob2dhIHNiXHJcbiAgY29uc3QgY2xpZW50ID0gYnVpbGRDbGllbnQoY29udGV4dCk7XHJcbiAgY29uc3QgeyBkYXRhIH0gPSBhd2FpdCBjbGllbnQuZ2V0KFwiL2FwaS91c2Vycy9jdXJyZW50dXNlclwiKTtcclxuICByZXR1cm4gZGF0YTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IExhbmRpbmdQYWdlO1xyXG5cclxuLyogY29uc29sZS5sb2cocmVxLmhlYWRlcnMuY29va2llKTtcclxuIHdlIGFyZSB1c2luZyBheGlvcyByYXRoZXIgdGhlbiB1c2VSZXF1ZXN0IGhvb2sgKHNlbGYgY3JlYXRlZClcclxuICAgYmVjYXVzZSBob29rcyBhcmUgdXNlZCBpbnNpZGUgdGhlIGNvbXBvbmVudC4uIGdldEluaXRpYWxQcm9wcyBpc1xyXG4gICBwbGFpbiBmdW5jdGlvbiBvdXRzaWRlIG9mIGNvbXBvbmVudFxyXG5cclxuICBcclxuIElmIHdlIGFyZSB1c2luZyBkb2NrZXIgYW5kIGt1YmVybmV0ZXMgZm9yIGhvc3Rpbmcgb2Ygb3VyIG1pY3Jvc2VydmljZVxyXG5cclxuICBpZih0eXBlb2Ygd2luZG93ID09PSAndW5kZWZpbmVkJylcclxuICB7XHJcbiAgICAgd2UgYXJlIG9uIHRoZSBzZXJ2ZXIhICh3aGVuIHdlIGRvcmVjdGx5IGxvYWQgdGhpcyBwYWdlLi5zbyBhdCB0aGF0IHR5bSBicm93c2VyIGNhbm5vdCBtYWtlIHJlcXVlc3QuLmFzIHRoaXMgaXMgYnVpbGRpbmcgaW5zaWRlIHRoZSBzZXJ2ZXIpXHJcbiAgICAgcmVxdWVzdCBzaG91bGQgYmUgbWFkZSB0byBodHRwOi8vaW5ncmVzcy1uZ2lueC5pbmdyZXNzLi4uLi5zZmRnc2ZnXHJcbiAgICAgYXMgb25seSAnLycgbWVhbi4uLmxvY2FsaG9zdCBvZiB0aGF0IHNwZWNpZmljIGNvbnRhaW5lci4uc28gd2UgbmVlZCBcclxuICAgICBtYWtlIGNhbGwgdG8gb3VyIGluZ3Jlc3MgY29udHJvbGxlclxyXG4gICAgKCB3ZSBhcmUgbm90IHVzaW5nIHRpY2tldGluZy5kZXYgYXMgYmFzZSBjb3ogd2UgY2FuJ3QgbWFrZSBjYWxsIHRvIGxvYWRiYWxhbmNlciBhcyBpdCBpcyBvdXRzaWRlIG9mIGNsdXN0ZXIgLi4uXCIhbWF5YmUhXCIpXHJcbiAgICBjb25zdCB7ZGF0YX0gPSBhd2FpdCBheGlvcy5nZXQoJ2h0dHA6Ly9TRVJWSUNFTkFNRS5OQU1FU1BBQ0Uuc3ZjLmNsdXN0ZXIubG9jYWwvYXBpL3VzZXJzL2N1cnJlbnR1c2VyJyx7XHJcbiAgICAgIGhlYWRlcnM6e1xyXG4gICAgICAgIEhvc3Q6ICd0aWNrZXRpbmcuZGV2J1xyXG4gICAgICB9XHJcbiAgICB9KVxyXG4gICAgIHdlIHVzaW5nIHRoaXMgaGVhZGVyIGNveiB0aGUgaG9zdCBtZW50aW9uIGluIHVybCBpcyBub3Qga25vd24gYnkgaW5ncmVzcyBjb250cm9sbGVyIFxyXG4gICAgIHNvIGJ5IHNwZWNpZnlpbmcgaG9zdCBpbiBoZWFkZXIgaW5ncmVzcyBjYW4ga25vdyB3aGljaCBob3N0IHdlIHRyeWluZyB0byBhY2Nlc3NcclxuICAgcmV0dXJuIGRhdGE7XHJcbiAgfVxyXG4gIGVsc2VcclxuICB7XHJcbiAgICAgd2UgYXJlIG9uIHRoZSBicm93c2VyISAod2hlbiB3ZSBuYXZpZ2F0ZSB0byB0aGlzIHBhZ2UgZnJvbSBhbm90aGVyIHBhZ2UuLnNvIGF0IHRoYXQgdHltIHJlcSB3aWxsIGJlIG1hZGUgYnkgdGhlIGJyb3dzZXIpXHJcbiAgICAgcmVxdWVzdHMgY2FuIGJlIG1hZGUgd2l0aCBhIGJhc2UgdXJsIG9mICcnXHJcbiAgfVxyXG5cclxuICovXHJcbiJdLCJuYW1lcyI6WyJidWlsZENsaWVudCIsIkxhbmRpbmdQYWdlIiwiY3VycmVudFVzZXIiLCJoMSIsImdldEluaXRpYWxQcm9wcyIsImNvbnRleHQiLCJjbGllbnQiLCJkYXRhIiwiZ2V0Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/index.js\n");

/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/***/ ((module) => {

module.exports = require("axios");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

module.exports = require("react/jsx-dev-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/index.js"));
module.exports = __webpack_exports__;

})();