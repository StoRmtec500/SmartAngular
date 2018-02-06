/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 2);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("Object.defineProperty(__webpack_exports__, \"__esModule\", { value: true });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"login\", function() { return login; });\n\r\n\r\nlet login = function login(usrname, password) {\r\n    if (usrname !== 'admin' || password !== 'radical') {\r\n        console.log('incorrect login');\r\n    } else {\r\n        console.log('logged in');\r\n    }\r\n}\r\n\r\n\r\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi93d3dyb290L2RlbW9zL2Jhc2ljcy9qcy9sb2dpbi5qcz9kZmIxIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBOztBQUVRIiwiZmlsZSI6IjAuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuXHJcbmxldCBsb2dpbiA9IGZ1bmN0aW9uIGxvZ2luKHVzcm5hbWUsIHBhc3N3b3JkKSB7XHJcbiAgICBpZiAodXNybmFtZSAhPT0gJ2FkbWluJyB8fCBwYXNzd29yZCAhPT0gJ3JhZGljYWwnKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coJ2luY29ycmVjdCBsb2dpbicpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgICBjb25zb2xlLmxvZygnbG9nZ2VkIGluJyk7XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCB7bG9naW4gfVxyXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3d3d3Jvb3QvZGVtb3MvYmFzaWNzL2pzL2xvZ2luLmpzXG4vLyBtb2R1bGUgaWQgPSAwXG4vLyBtb2R1bGUgY2h1bmtzID0gMCJdLCJzb3VyY2VSb290IjoiIn0=");

/***/ }),
/* 1 */
/***/ (function(module, exports) {

eval("// This is global JS provided to all apps.\r\nconsole.log('logging from the utils.js file...');//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi93d3dyb290L2RlbW9zL2Jhc2ljcy9qcy91dGlscy5qcz9mNTg2Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0EiLCJmaWxlIjoiMS5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIFRoaXMgaXMgZ2xvYmFsIEpTIHByb3ZpZGVkIHRvIGFsbCBhcHBzLlxyXG5jb25zb2xlLmxvZygnbG9nZ2luZyBmcm9tIHRoZSB1dGlscy5qcyBmaWxlLi4uJyk7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi93d3dyb290L2RlbW9zL2Jhc2ljcy9qcy91dGlscy5qc1xuLy8gbW9kdWxlIGlkID0gMVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiXSwic291cmNlUm9vdCI6IiJ9");

/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("Object.defineProperty(__webpack_exports__, \"__esModule\", { value: true });\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__login_js__ = __webpack_require__(0);\n__webpack_require__(1);\r\n__webpack_require__(0);\r\n\r\n\r\ndebugger;\r\n__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__login_js__[\"login\"])('admin', 'radical');\r\ndocument.write(\"Welcome to Big Hair Concerts!!\");\r\nconsole.log('App loaded');//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi93d3dyb290L2RlbW9zL2Jhc2ljcy9qcy9hcHAuanM/NDNlYSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBO0FBQ0E7QUFDYzs7QUFFZDtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiIyLmpzIiwic291cmNlc0NvbnRlbnQiOlsicmVxdWlyZSgnLi91dGlscy5qcycpO1xyXG5yZXF1aXJlKCcuL2xvZ2luLmpzJyk7XHJcbmltcG9ydCB7bG9naW59IGZyb20gXCIuL2xvZ2luLmpzXCJcclxuXHJcbmRlYnVnZ2VyO1xyXG5sb2dpbignYWRtaW4nLCAncmFkaWNhbCcpO1xyXG5kb2N1bWVudC53cml0ZShcIldlbGNvbWUgdG8gQmlnIEhhaXIgQ29uY2VydHMhIVwiKTtcclxuY29uc29sZS5sb2coJ0FwcCBsb2FkZWQnKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3d3d3Jvb3QvZGVtb3MvYmFzaWNzL2pzL2FwcC5qc1xuLy8gbW9kdWxlIGlkID0gMlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiXSwic291cmNlUm9vdCI6IiJ9");

/***/ })
/******/ ]);