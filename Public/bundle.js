/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./public/js/index.js":
/*!****************************!*\
  !*** ./public/js/index.js ***!
  \****************************/
/***/ (() => {

eval("const addPlace = document.querySelector(\".add-place\");\r\nconst close = document.querySelector(\".close\");\r\nconst tellMe = document.querySelector(\".tell-me\");\r\n\r\nconsole.log('hello world')\r\n\r\nlet placeIsVisible =false\r\n\r\naddPlace.addEventListener(\"click\", (e) => {\r\n  openModal();\r\n});\r\n\r\n// close.addEventListener(\"click\", () => {\r\n//   closeModal();\r\n// });\r\n\r\ntellMe.addEventListener(\"click\", (e) => {\r\n    console.log(e.target)   \r\n  filteredPlace()\r\n});\r\n\r\nconst openModal = () => {\r\n  document.querySelector(\".overlay\").classList.add(\"active\");\r\n  document.querySelector(\".login-modal\").classList.add(\"active\");\r\n};\r\nconst closeModal = () => {\r\n  document.querySelector(\".overlay\").classList.remove(\"active\");\r\n  document.querySelector(\".login-modal\").classList.remove(\"active\");\r\n};\r\n\r\n\r\nconst playgif = () => {\r\n  document.getElementsByClassName(\"plane-img\")[0].style.display = \"none\";\r\n  const gif = document.getElementsByClassName(\"gif\")[0];\r\n  gif.style.display = \"block\";\r\n  setTimeout(() => {\r\n    gif.style.display = \"none\";\r\n  }, 5000);\r\n};\r\n\r\n\r\nconst filteredPlace = () => {\r\n    const place = document.querySelector('.text-wrapper')\r\n    if(placeIsVisible === false){\r\n        playgif()\r\n        setTimeout(() => {\r\n            place.classList.remove('inactive')\r\n        }, 5000);\r\n        place.classList.add('inactive')\r\n    }\r\n}\n\n//# sourceURL=webpack://time-to-have-fun/./public/js/index.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./public/js/index.js"]();
/******/ 	
/******/ })()
;