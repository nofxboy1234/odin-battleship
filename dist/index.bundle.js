"use strict";
(self["webpackChunkwebpack_template"] = self["webpackChunkwebpack_template"] || []).push([["index"],{

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `* {
  box-sizing: border-box;
  margin: 0;
}

#main-layout {
  display: flex;
  justify-content: center;
  margin: 1rem;
}

#content-layout {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.button-container {
  display: flex;
  justify-content: center;
  gap: 1rem;
}

.board-label {
  display: flex;
  justify-content: center;
}

.gameboard {
  display: flex;
  justify-content: center;
}

.gameboard-0 {
  display: flex;
  flex-direction: column;
}

.gameboard-0-blank {
  width: 30px;
  height: 30px;
}

.gameboard-0-label {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 30px;
  height: 30px;
  border-right: 1px solid black;
}

.gameboard-1 {
  display: flex;
  flex-direction: column;
}

.gameboard-1-0 {
  display: flex;
}

.gameboard-1-0-label {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 30px;
  height: 30px;
  border-bottom: 1px solid black;
}

.gameboard-1-1 {
  display: grid;
  grid-template-columns: repeat(10, 30px);
  grid-template-rows: repeat(10, 30px);
}

.gameboard-1-1-cell {
  display: flex;
  justify-content: center;
  align-items: center;
  border-right: 1px solid black;
  border-bottom: 1px solid black;
  cursor: pointer;
}

.hover:hover {
  background-color: yellow;
}

.fill {
  background-color: black;
}

.hit {
  background-color: rgb(207, 255, 136);
}

.miss {
  background-color: rgb(255, 209, 123);
}

.disabled {
  filter: contrast(20%);
}

button {
  width: 100px;
}

#enemy-board-label {
  background-color: orange;
}

#human-board-label {
  background-color: greenyellow;
}

#message-container {
  display: flex;
  justify-content: center;
}

#message {
  color: blue;
}
`, "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;EACE,sBAAsB;EACtB,SAAS;AACX;;AAEA;EACE,aAAa;EACb,uBAAuB;EACvB,YAAY;AACd;;AAEA;EACE,aAAa;EACb,sBAAsB;EACtB,SAAS;AACX;;AAEA;EACE,aAAa;EACb,uBAAuB;EACvB,SAAS;AACX;;AAEA;EACE,aAAa;EACb,uBAAuB;AACzB;;AAEA;EACE,aAAa;EACb,uBAAuB;AACzB;;AAEA;EACE,aAAa;EACb,sBAAsB;AACxB;;AAEA;EACE,WAAW;EACX,YAAY;AACd;;AAEA;EACE,aAAa;EACb,uBAAuB;EACvB,mBAAmB;EACnB,WAAW;EACX,YAAY;EACZ,6BAA6B;AAC/B;;AAEA;EACE,aAAa;EACb,sBAAsB;AACxB;;AAEA;EACE,aAAa;AACf;;AAEA;EACE,aAAa;EACb,uBAAuB;EACvB,mBAAmB;EACnB,WAAW;EACX,YAAY;EACZ,8BAA8B;AAChC;;AAEA;EACE,aAAa;EACb,uCAAuC;EACvC,oCAAoC;AACtC;;AAEA;EACE,aAAa;EACb,uBAAuB;EACvB,mBAAmB;EACnB,6BAA6B;EAC7B,8BAA8B;EAC9B,eAAe;AACjB;;AAEA;EACE,wBAAwB;AAC1B;;AAEA;EACE,uBAAuB;AACzB;;AAEA;EACE,oCAAoC;AACtC;;AAEA;EACE,oCAAoC;AACtC;;AAEA;EACE,qBAAqB;AACvB;;AAEA;EACE,YAAY;AACd;;AAEA;EACE,wBAAwB;AAC1B;;AAEA;EACE,6BAA6B;AAC/B;;AAEA;EACE,aAAa;EACb,uBAAuB;AACzB;;AAEA;EACE,WAAW;AACb","sourcesContent":["* {\n  box-sizing: border-box;\n  margin: 0;\n}\n\n#main-layout {\n  display: flex;\n  justify-content: center;\n  margin: 1rem;\n}\n\n#content-layout {\n  display: flex;\n  flex-direction: column;\n  gap: 1rem;\n}\n\n.button-container {\n  display: flex;\n  justify-content: center;\n  gap: 1rem;\n}\n\n.board-label {\n  display: flex;\n  justify-content: center;\n}\n\n.gameboard {\n  display: flex;\n  justify-content: center;\n}\n\n.gameboard-0 {\n  display: flex;\n  flex-direction: column;\n}\n\n.gameboard-0-blank {\n  width: 30px;\n  height: 30px;\n}\n\n.gameboard-0-label {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  width: 30px;\n  height: 30px;\n  border-right: 1px solid black;\n}\n\n.gameboard-1 {\n  display: flex;\n  flex-direction: column;\n}\n\n.gameboard-1-0 {\n  display: flex;\n}\n\n.gameboard-1-0-label {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  width: 30px;\n  height: 30px;\n  border-bottom: 1px solid black;\n}\n\n.gameboard-1-1 {\n  display: grid;\n  grid-template-columns: repeat(10, 30px);\n  grid-template-rows: repeat(10, 30px);\n}\n\n.gameboard-1-1-cell {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  border-right: 1px solid black;\n  border-bottom: 1px solid black;\n  cursor: pointer;\n}\n\n.hover:hover {\n  background-color: yellow;\n}\n\n.fill {\n  background-color: black;\n}\n\n.hit {\n  background-color: rgb(207, 255, 136);\n}\n\n.miss {\n  background-color: rgb(255, 209, 123);\n}\n\n.disabled {\n  filter: contrast(20%);\n}\n\nbutton {\n  width: 100px;\n}\n\n#enemy-board-label {\n  background-color: orange;\n}\n\n#human-board-label {\n  background-color: greenyellow;\n}\n\n#message-container {\n  display: flex;\n  justify-content: center;\n}\n\n#message {\n  color: blue;\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];
function getIndexByIdentifier(identifier) {
  var result = -1;
  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }
  return result;
}
function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];
  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };
    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }
    identifiers.push(identifier);
  }
  return identifiers;
}
function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }
      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
  return updater;
}
module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];
    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }
    var newLastIdentifiers = modulesToDom(newList, options);
    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];
      var _index = getIndexByIdentifier(_identifier);
      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();
        stylesInDOM.splice(_index, 1);
      }
    }
    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }
    memo[target] = styleTarget;
  }
  return memo[target];
}

/* istanbul ignore next  */
function insertBySelector(insert, style) {
  var target = getTarget(insert);
  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }
  target.appendChild(style);
}
module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";
  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }
  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }
  var needLayer = typeof obj.layer !== "undefined";
  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }
  css += obj.css;
  if (needLayer) {
    css += "}";
  }
  if (obj.media) {
    css += "}";
  }
  if (obj.supports) {
    css += "}";
  }
  var sourceMap = obj.sourceMap;
  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  }

  // For old IE
  /* istanbul ignore if  */
  options.styleTagTransform(css, styleElement, options.options);
}
function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }
  styleElement.parentNode.removeChild(styleElement);
}

/* istanbul ignore next  */
function domAPI(options) {
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}
module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }
    styleElement.appendChild(document.createTextNode(css));
  }
}
module.exports = styleTagTransform;

/***/ }),

/***/ "./src/dom/cell.js":
/*!*************************!*\
  !*** ./src/dom/cell.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
class Cell {
  #element = document.createElement('div');

  constructor(x, y, disabled) {
    this.x = x;
    this.y = y;

    this.#element.classList.add('gameboard-1-1-cell');
    this.#element.textContent = `${x}, ${y}`;

    if (disabled) {
      this.disableHover();
    } else {
      this.enableHover();
    }

    this.#element.addEventListener('click', (event) => {
      this.#handleClick(event);
    });
  }

  render() {
    return this.#element;
  }

  enableFill() {
    this.#element.classList.add('fill');
  }

  enableMiss() {
    this.#element.classList.add('miss');
  }

  enableHit() {
    this.#element.classList.add('hit');
  }

  enableHover() {
    this.#element.classList.add('hover');
  }

  disableHover() {
    this.#element.classList.remove('hover');
  }

  #handleClick(event) {
    event.cell = this;
  }

  reset() {
    this.#disableFill();
    this.#disableHit();
    this.#disableMiss();
  }

  #disableFill() {
    this.#element.classList.remove('fill');
  }

  #disableMiss() {
    this.#element.classList.remove('miss');
  }

  #disableHit() {
    this.#element.classList.remove('hit');
  }
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Cell);


/***/ }),

/***/ "./src/dom/gameboard.js":
/*!******************************!*\
  !*** ./src/dom/gameboard.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _cell__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./cell */ "./src/dom/cell.js");
/* harmony import */ var _ship__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ship */ "./src/dom/ship.js");



class Gameboard {
  #element = document.createElement('div');
  #disabled = false;
  #cells = [];
  #ships = [];
  #controller = undefined;

  constructor(player, handleTurnCallback) {
    this.player = player;
    this.#controller = player.gameboard;
    this.handleTurnCallback = handleTurnCallback;

    this.#element.classList.add('gameboard');

    this.createLabelsLeftContainer();
    this.createLabelsLeft();

    this.createGameboard1();

    this.createLabelsTopContainer();
    this.createLabelsTop();

    this.createGrid();
    this.#createCells();
    this.renderCells();
  }

  render() {
    return this.#element;
  }

  appendChild(element) {
    this.#element.appendChild(element);
  }

  disable() {
    this.#disabled = true;
    this.#element.classList.add('disabled');

    this.disableHoverOnAllCells();
  }

  disableHoverOnAllCells() {
    this.#cells.forEach((cellDOM) => {
      cellDOM.disableHover();
    });
  }

  enable() {
    this.#disabled = false;
    this.#element.classList.remove('disabled');

    this.#enableHoverOnAllOpenCells();
  }

  isDisabled() {
    return this.#disabled;
  }

  createLabelsLeftContainer() {
    const element = document.createElement('div');
    element.classList.add('gameboard-0');
    this.appendChild(element);

    this.labelsLeftContainer = element;
  }

  createLabelsLeft() {
    const labels = ['', '1', '2', '3', '4', '5', '6', '7', '8', '9', '10'];

    labels.forEach((label, index) => {
      const element = document.createElement('div');

      if (index === 0) {
        element.classList.add('gameboard-0-blank');
      } else {
        element.classList.add('gameboard-0-label');
      }

      element.textContent = label;
      this.labelsLeftContainer.appendChild(element);
    });
  }

  createGameboard1() {
    const element = document.createElement('div');
    element.classList.add('gameboard-1');
    this.appendChild(element);

    this.gameboard_1 = element;
  }

  createLabelsTopContainer() {
    const element = document.createElement('div');
    element.classList.add('gameboard-1-0');
    this.gameboard_1.appendChild(element);

    this.labelsTopContainer = element;
  }

  createLabelsTop() {
    const labels = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J'];

    labels.forEach((label) => {
      const element = document.createElement('div');

      element.classList.add('gameboard-1-0-label');

      element.textContent = label;
      this.labelsTopContainer.appendChild(element);
    });
  }

  createGrid() {
    const element = document.createElement('div');
    element.classList.add('gameboard-1-1');
    this.gameboard_1.appendChild(element);

    this.gameboard_1_1 = element;

    this.gameboard_1_1.addEventListener('click', (event) => {
      this.#handleClick(event);
    });
  }

  createShips() {
    const ships = this.#controller.getShips();
    ships.forEach((ship) => {
      const cellDOMs = this.#getShipCellDOMs(ship);
      const shipDOM = new _ship__WEBPACK_IMPORTED_MODULE_1__["default"](ship.x, ship.y, ship.length, cellDOMs);
      this.#ships.push(shipDOM);
    });
  }

  getCellDOM(x, y) {
    return this.#cells.find((cellDOM) => {
      return cellDOM.x === x && cellDOM.y === y;
    });
  }

  renderCells() {
    this.#cells.forEach((cellDOM) => {
      this.gameboard_1_1.appendChild(cellDOM.render());
    });
  }

  renderShips() {
    this.#ships.forEach((shipDOM) => {
      const cellDOMs = shipDOM.cells;
      cellDOMs.forEach((cellDOM) => {
        cellDOM.enableFill();
      });
    });
  }

  reset() {
    this.#ships = [];
    this.#cells.forEach((cellDOM) => cellDOM.reset());
  }

  #createCells() {
    const cells = this.#controller.cells;

    cells.forEach((cell) => {
      const x = cell.x;
      const y = cell.y;
      const cellDOM = new _cell__WEBPACK_IMPORTED_MODULE_0__["default"](x, y, this.isDisabled());
      this.#cells.push(cellDOM);
    });
  }

  #enableHoverOnAllOpenCells() {
    this.#cells.forEach((cellDOM) => {
      if (!this.#controller.isExistingShot(cellDOM.x, cellDOM.y)) {
        cellDOM.enableHover();
      }
    });
  }

  #getShipCellDOMs(ship) {
    const shipBack = ship.back();
    const shipFront = ship.front();

    return this.#cells.filter((cellDOM) => {
      if (ship.orientation === 'horizontal') {
        return (
          cellDOM.x >= shipBack.x &&
          cellDOM.x <= shipFront.x &&
          cellDOM.y === ship.y
        );
      } else if (ship.orientation === 'vertical') {
        return (
          cellDOM.y >= shipBack.y &&
          cellDOM.y <= shipFront.y &&
          cellDOM.x === ship.x
        );
      }
    });
  }

  #handleClick(event) {
    const clickData = {};
    clickData.cell = event.cell;
    clickData.gameboard = {
      controller: this.#controller,
      owner: this.player,
      disabled: this.isDisabled(),
    };
    clickData.pointerType = event.pointerType;

    this.handleTurnCallback(clickData);
  }
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Gameboard);


/***/ }),

/***/ "./src/dom/message.js":
/*!****************************!*\
  !*** ./src/dom/message.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
let element;

const message = {
  setElement(div) {
    element = div;
  },
  setEnemyTurn() {
    element.textContent = "Enemy's turn!";
  },
  setHumanTurn() {
    element.textContent = 'Your turn!';
  },
  setEnemyWon() {
    element.textContent = 'Enemy won!';
  },
  setHumanWon() {
    element.textContent = 'You won!';
  },
  setInstruction() {
    element.textContent =
      "Randomize your ships until you're happy with their positions, then press Play!";
  },
  setLoadingShips() {
    element.textContent = 'Loading random ships...';
  },
  text() {
    return element.textContent;
  },
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (message);


/***/ }),

/***/ "./src/dom/ship.js":
/*!*************************!*\
  !*** ./src/dom/ship.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
class Ship {
  constructor(x, y, length, cells) {
    this.x = x;
    this.y = y;
    this.length = length;
    this.cells = cells;
  }
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Ship);


/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _logic_player__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./logic/player */ "./src/logic/player.js");
/* harmony import */ var _dom_gameboard__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./dom/gameboard */ "./src/dom/gameboard.js");
/* harmony import */ var _logic_gameboard__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./logic/gameboard */ "./src/logic/gameboard.js");
/* harmony import */ var _dom_message__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./dom/message */ "./src/dom/message.js");






function removeGameboard(container) {
  const child = container.firstChild;
  if (child) {
    container.removeChild(child);
  }
}

function isPlayerClickingOwnGameboard(clickedGameboardElement, pointerType) {
  return (
    clickedGameboardElement.owner === currentPlayer ||
    (clickedGameboardElement.owner === human && pointerType === 'mouse') ||
    (clickedGameboardElement.owner === enemy && pointerType === '')
  );
}

function isHumanTakingAnotherShotAfterMissing(
  clickedGameboardElement,
  pointerType,
) {
  return (
    currentPlayer === enemy &&
    clickedGameboardElement.owner === enemy &&
    pointerType === 'mouse'
  );
}

function enemyPlay() {
  const cell = enemy.play(humanGameboard);
  const cellDOM = humanGameboardElement.getCellDOM(cell.x, cell.y);
  cellDOM.render().click();
}

async function delay(time) {
  await new Promise((resolve) => setTimeout(resolve, time));
}

async function nextTurn() {
  currentGameboardElement.disable();

  if (currentPlayer === enemy) {
    _dom_message__WEBPACK_IMPORTED_MODULE_4__["default"].setEnemyTurn();
    currentGameboardElement = humanGameboardElement;
    currentGameboardElement.enable();
    currentGameboardElement.disableHoverOnAllCells();

    await delay(2000);
    enemyPlay();
  } else {
    _dom_message__WEBPACK_IMPORTED_MODULE_4__["default"].setHumanTurn();
    currentGameboardElement = enemyGameboardElement;
    currentGameboardElement.enable();
  }
}

function isShotInvalid({ gameboard: gameboardElement, pointerType, cell }) {
  if (gameboardElement.disabled) {
    return true;
  }

  if (isHumanTakingAnotherShotAfterMissing(gameboardElement, pointerType)) {
    return true;
  }

  if (isPlayerClickingOwnGameboard(gameboardElement, pointerType)) {
    return true;
  }

  if (gameboardElement.controller.isExistingShot(cell.x, cell.y)) {
    return true;
  }

  return false;
}

function attackGameboard(gameboardElement, cell) {
  return gameboardElement.controller.receiveAttack(cell.x, cell.y);
}

async function handleTurn(clickData) {
  const { gameboard: gameboardElement, cell } = clickData;

  if (isShotInvalid(clickData)) {
    if (currentPlayer === enemy) {
      await delay(2000);
      enemyPlay();
    }

    return;
  }

  const hit = attackGameboard(gameboardElement, cell);

  if (hit) {
    renderHit(cell);

    if (currentPlayer === human) {
      if (enemyGameboard.allShipsSunk()) {
        _dom_message__WEBPACK_IMPORTED_MODULE_4__["default"].setHumanWon();
        disableBothGameboards();
        return;
      }
    }

    if (currentPlayer === enemy) {
      if (humanGameboard.allShipsSunk()) {
        _dom_message__WEBPACK_IMPORTED_MODULE_4__["default"].setEnemyWon();
        disableBothGameboards();
        return;
      }

      await delay(2000);
      enemyPlay();
    }
  } else {
    renderMiss(cell);
    setCurrentPlayer();

    await delay(2000);
    nextTurn();
  }
}

function setCurrentPlayer() {
  if (currentPlayer === human) {
    currentPlayer = enemy;
  } else {
    currentPlayer = human;
  }
}

function disableBothGameboards() {
  enemyGameboardElement.disable();
  humanGameboardElement.disable();
}

function renderMiss(cell) {
  cell.enableMiss();
  cell.disableHover();
}

function renderHit(cell) {
  cell.enableHit();
  cell.disableHover();
}

function randomizeGameboards() {
  randomizeComputerGameboard();
  randomizeHumanGameboard();
}

function play() {
  enemyGameboardElement.enable();
  _dom_message__WEBPACK_IMPORTED_MODULE_4__["default"].setHumanTurn();
  randomizeButton.disabled = true;
  playButton.disabled = true;
}

function setupHumanGameboardElement() {
  humanGameboardElement = new _dom_gameboard__WEBPACK_IMPORTED_MODULE_2__["default"](human, handleTurn);
  humanContainer.appendChild(humanGameboardElement.render());
}

function setupComputerGameboardElement() {
  enemyGameboardElement = new _dom_gameboard__WEBPACK_IMPORTED_MODULE_2__["default"](enemy, handleTurn);
  enemyContainer.appendChild(enemyGameboardElement.render());
}

function setupComputerPlayer() {
  enemyGameboard = new _logic_gameboard__WEBPACK_IMPORTED_MODULE_3__["default"]();
  enemy = new _logic_player__WEBPACK_IMPORTED_MODULE_1__["default"](enemyGameboard, 'enemy');
}

function setupHumanPlayer() {
  humanGameboard = new _logic_gameboard__WEBPACK_IMPORTED_MODULE_3__["default"]();
  human = new _logic_player__WEBPACK_IMPORTED_MODULE_1__["default"](humanGameboard, 'human');
}

function randomizeComputerGameboard() {
  enemyGameboard.reset();
  enemyGameboardElement.reset();

  enemy.placeRandomShips();
  enemyGameboardElement.createShips();
  enemyGameboardElement.renderShips();
}

function randomizeHumanGameboard() {
  humanGameboard.reset();
  humanGameboardElement.reset();

  human.placeRandomShips();
  humanGameboardElement.createShips();
  humanGameboardElement.renderShips();
}

function setupGame() {
  currentPlayer = human;
  enemyGameboardElement.disable();
  humanGameboardElement.disable();
  currentGameboardElement = enemyGameboardElement;

  randomizeButton.disabled = false;
  playButton.disabled = false;

  _dom_message__WEBPACK_IMPORTED_MODULE_4__["default"].setLoadingShips();
  setTimeout(() => randomizeGameboards());
  setTimeout(() => _dom_message__WEBPACK_IMPORTED_MODULE_4__["default"].setInstruction());
}

const newGameButton = document.getElementById('new-game-btn');
newGameButton.addEventListener('click', () => {
  setupGame();
});

const randomizeButton = document.getElementById('randomize-btn');
randomizeButton.addEventListener('click', () => {
  randomizeHumanGameboard();
});

const playButton = document.getElementById('play-btn');
playButton.addEventListener('click', play);

let enemyGameboardElement;
let humanGameboardElement;
let currentGameboardElement;
let enemyGameboard;
let humanGameboard;
let enemy;
let human;
let currentPlayer;
const enemyContainer = document.getElementById('gameboard-container-enemy');
const humanContainer = document.getElementById('gameboard-container-human');
_dom_message__WEBPACK_IMPORTED_MODULE_4__["default"].setElement(document.getElementById('message'));

setupHumanPlayer();
setupComputerPlayer();
setupComputerGameboardElement();
setupHumanGameboardElement();

setupGame();


/***/ }),

/***/ "./src/logic/battleship.js":
/*!*********************************!*\
  !*** ./src/logic/battleship.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _ship__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ship */ "./src/logic/ship.js");


class Battleship extends _ship__WEBPACK_IMPORTED_MODULE_0__["default"] {
  constructor() {
    super(4);
  }
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Battleship);


/***/ }),

/***/ "./src/logic/cell.js":
/*!***************************!*\
  !*** ./src/logic/cell.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
class Cell {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }

  offset(x, y) {
    return new Cell(this.x + x, this.y + y);
  }
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Cell);


/***/ }),

/***/ "./src/logic/destroyer.js":
/*!********************************!*\
  !*** ./src/logic/destroyer.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _ship__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ship */ "./src/logic/ship.js");


class Destroyer extends _ship__WEBPACK_IMPORTED_MODULE_0__["default"] {
  constructor() {
    super(3);
  }
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Destroyer);


/***/ }),

/***/ "./src/logic/gameboard.js":
/*!********************************!*\
  !*** ./src/logic/gameboard.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _cell__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./cell */ "./src/logic/cell.js");
/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./helpers */ "./src/logic/helpers.js");



class Gameboard {
  #ships = [];
  #misses = [];

  constructor(size = 10) {
    this.size = size;
    this.cells = [];
    this.#createCells();
  }

  placeShip(ship, x, y) {
    ship.place(x, y, this);
    this.#ships.push(ship);
  }

  receiveAttack(x, y) {
    const hitShip = this.#getShipOnCell(x, y);
    if (hitShip) {
      hitShip.hit(x, y);
      return true;
    } else {
      this.#misses.push(new _cell__WEBPACK_IMPORTED_MODULE_0__["default"](x, y));
      return false;
    }
  }

  allShipsSunk() {
    return this.#ships.every((ship) => ship.isSunk());
  }

  getShips() {
    return [...this.#ships];
  }

  getMisses() {
    return [...this.#misses];
  }

  getHits() {
    return this.#ships.flatMap((ship) => ship.getHits());
  }

  isShipOnCell(x, y) {
    return !!this.#getShipOnCell(x, y);
  }

  getCellAt(x, y) {
    return this.cells.find((cell) => cell.x === x && cell.y === y);
  }

  offsetCell(cell, x, y) {
    return this.getCellAt(cell.x + x, cell.y + y);
  }

  isExistingShot(x, y) {
    return !!this.#getHitOnCell(x, y) || !!this.#getMissOnCell(x, y);
  }

  getRandomPosition() {
    const x = (0,_helpers__WEBPACK_IMPORTED_MODULE_1__["default"])(this.size);
    const y = (0,_helpers__WEBPACK_IMPORTED_MODULE_1__["default"])(this.size);

    return [x, y];
  }

  reset() {
    this.#ships = [];
    this.#misses = [];
  }

  #createCells() {
    for (let y = 0; y < this.size; y++) {
      for (let x = 0; x < this.size; x++) {
        const cell = new _cell__WEBPACK_IMPORTED_MODULE_0__["default"](x, y);
        this.cells.push(cell);
      }
    }
  }

  #getHitOnCell(x, y) {
    const hits = this.getHits();
    return hits.find((cell) => x === cell.x && y === cell.y);
  }

  #getMissOnCell(x, y) {
    return this.#misses.find((cell) => x === cell.x && y === cell.y);
  }

  #getShipOnCell(x, y) {
    return this.#ships.find((ship) => {
      const shipBack = ship.back();
      const shipFront = ship.front();

      if (ship.orientation === 'horizontal') {
        return x >= shipBack.x && x <= shipFront.x && y === ship.y;
      } else if (ship.orientation === 'vertical') {
        return y >= shipBack.y && y <= shipFront.y && x === ship.x;
      }
    });
  }
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Gameboard);


/***/ }),

/***/ "./src/logic/helpers.js":
/*!******************************!*\
  !*** ./src/logic/helpers.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (getRandomInt);


/***/ }),

/***/ "./src/logic/patrolBoat.js":
/*!*********************************!*\
  !*** ./src/logic/patrolBoat.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _ship__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ship */ "./src/logic/ship.js");


class PatrolBoat extends _ship__WEBPACK_IMPORTED_MODULE_0__["default"] {
  constructor() {
    super(1);
  }
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (PatrolBoat);


/***/ }),

/***/ "./src/logic/player.js":
/*!*****************************!*\
  !*** ./src/logic/player.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./helpers */ "./src/logic/helpers.js");
/* harmony import */ var _rules__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./rules */ "./src/logic/rules.js");




class Player {
  constructor(gameboard, name) {
    this.gameboard = gameboard;
    this.name = name;
  }

  play(oppositionGameboard) {
    const hits = oppositionGameboard.getHits();
    const misses = oppositionGameboard.getMisses();
    const shots = hits.concat(misses);
    const availableCells = this.#getAvailableCells(oppositionGameboard, shots);

    const randomIndex = (0,_helpers__WEBPACK_IMPORTED_MODULE_0__["default"])(availableCells.length);
    const randomCell = availableCells[randomIndex];
    return randomCell;
  }

  placeShips(ships) {
    if (this.#allShipsInValidPositions(ships)) {
      ships.forEach((ship) => this.gameboard.placeShip(ship, ship.x, ship.y));
      return true;
    }

    return false;
  }

  placeRandomShips() {
    let shipsInValidPosition = false;

    while (!shipsInValidPosition) {
      const ships = this.#createRandomShips();

      if (this.#allShipsInValidPositions(ships)) {
        shipsInValidPosition = true;
        ships.forEach((ship) => this.gameboard.placeShip(ship, ship.x, ship.y));
      }
    }
  }

  #allShipsInValidPositions(ships) {
    return (
      !(0,_rules__WEBPACK_IMPORTED_MODULE_1__.hasOverlappingShips)(ships) &&
      !(0,_rules__WEBPACK_IMPORTED_MODULE_1__.hasOutOfBoundsShips)(ships, this.gameboard) &&
      !(0,_rules__WEBPACK_IMPORTED_MODULE_1__.hasAdjacentShips)(ships, this.gameboard)
    );
  }

  #createRandomShips() {
    const ships = [];

    _rules__WEBPACK_IMPORTED_MODULE_1__.gameboardShips.forEach((boardShip) => {
      for (let index = 0; index < boardShip.count; index++) {
        const ship = this.#createShipWithRandomOrientation(boardShip);
        const [x, y] = this.gameboard.getRandomPosition();
        ship.place(x, y, this.gameboard);
        ships.push(ship);
      }
    });

    return ships;
  }

  #createShipWithRandomOrientation(boardShip) {
    const ship = new boardShip.type();
    ship.setRandomOrientation();
    return ship;
  }

  #getAvailableCells(gameboard, shots) {
    return gameboard.cells.filter((cell) => {
      const found = shots.find((shot) => {
        return cell.x === shot.x && cell.y === shot.y;
      });
      return !found;
    });
  }
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Player);


/***/ }),

/***/ "./src/logic/rules.js":
/*!****************************!*\
  !*** ./src/logic/rules.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   gameboardShips: () => (/* binding */ gameboardShips),
/* harmony export */   hasAdjacentShips: () => (/* binding */ hasAdjacentShips),
/* harmony export */   hasOutOfBoundsShips: () => (/* binding */ hasOutOfBoundsShips),
/* harmony export */   hasOverlappingShips: () => (/* binding */ hasOverlappingShips)
/* harmony export */ });
/* harmony import */ var _battleship__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./battleship */ "./src/logic/battleship.js");
/* harmony import */ var _destroyer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./destroyer */ "./src/logic/destroyer.js");
/* harmony import */ var _patrolBoat__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./patrolBoat */ "./src/logic/patrolBoat.js");
/* harmony import */ var _submarine__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./submarine */ "./src/logic/submarine.js");





const gameboardShips = [
  {
    count: 1,
    type: _battleship__WEBPACK_IMPORTED_MODULE_0__["default"],
  },
  {
    count: 2,
    type: _destroyer__WEBPACK_IMPORTED_MODULE_1__["default"],
  },
  {
    count: 3,
    type: _submarine__WEBPACK_IMPORTED_MODULE_3__["default"],
  },
  {
    count: 4,
    type: _patrolBoat__WEBPACK_IMPORTED_MODULE_2__["default"],
  },
];

function hasOutOfBoundsShips(ships, gameboard) {
  const someShipGoesOutOfBounds = ships.some((ship) => {
    if (ship.orientation === 'horizontal') {
      return ship.x > gameboard.size - ship.length;
    } else if (ship.orientation === 'vertical') {
      return ship.y > gameboard.size - ship.length;
    }
  });

  return someShipGoesOutOfBounds;
}

function hasOverlappingShips(ships) {
  const someShipOverlapsAnotherShip = ships.some((ship) => {
    const otherShips = ships.filter((otherShip) => otherShip !== ship);

    const someCellsOverlap = otherShips.some((otherShip) => {
      return otherShip.cells.some((cell) => ship.cells.includes(cell));
    });

    return someCellsOverlap;
  });

  return someShipOverlapsAnotherShip;
}

function hasAdjacentShips(ships, gameboard) {
  return (
    someShipIsToTheRight(ships, gameboard) ||
    someShipIsAtTheTop(ships, gameboard)
  );
}

function someShipIsToTheRight(ships, gameboard) {
  return ships.some((ship) => {
    if (shipAgainstRightWall(ship, gameboard)) {
      return false;
    }

    const otherShips = ships.filter((otherShip) => otherShip !== ship);
    const rightCells = getCellsToTheRight(gameboard, ship);

    const someShipCellIsToTheRight = otherShips.some((otherShip) => {
      return rightCells.some((rightCell) =>
        otherShip.cells.includes(rightCell),
      );
    });

    return someShipCellIsToTheRight;
  });
}

function getCellsToTheRight(gameboard, ship) {
  const rightCells = [];
  let rightCell;

  if (ship.orientation === 'horizontal') {
    const shipFront = ship.front();

    rightCell = gameboard.offsetCell(shipFront, 1, -1);
    rightCells.push(rightCell);

    rightCell = gameboard.offsetCell(shipFront, 1, 0);
    rightCells.push(rightCell);

    rightCell = gameboard.offsetCell(shipFront, 1, 1);
    rightCells.push(rightCell);

    return rightCells;
  } else if (ship.orientation === 'vertical') {
    ship.cells.forEach((cell) => {
      rightCell = gameboard.offsetCell(cell, 1, 0);
      rightCells.push(rightCell);
    });

    return rightCells;
  }
}

function someShipIsAtTheTop(ships, gameboard) {
  return ships.some((ship) => {
    if (shipAgainstTopWall(ship)) {
      return false;
    }

    const otherShips = ships.filter((otherShip) => otherShip !== ship);
    const topCells = getCellsAtTheTop(gameboard, ship);

    const someShipCellIsAtTheTop = otherShips.some((otherShip) => {
      return topCells.some((topCell) => otherShip.cells.includes(topCell));
    });

    return someShipCellIsAtTheTop;
  });
}

function getCellsAtTheTop(gameboard, ship) {
  const topCells = [];
  let topCell;

  if (ship.orientation === 'horizontal') {
    ship.cells.forEach((cell) => {
      topCell = gameboard.offsetCell(cell, 0, -1);
      topCells.push(topCell);
    });

    return topCells;
  } else if (ship.orientation === 'vertical') {
    const shipBack = ship.back();

    topCell = gameboard.offsetCell(shipBack, -1, -1);
    topCells.push(topCell);

    topCell = gameboard.offsetCell(shipBack, 0, -1);
    topCells.push(topCell);

    topCell = gameboard.offsetCell(shipBack, 1, -1);
    topCells.push(topCell);

    return topCells;
  }
}

function shipAgainstRightWall(ship, gameboard) {
  return ship.front().x === gameboard.size - 1;
}

function shipAgainstTopWall(ship) {
  return ship.y === 0;
}




/***/ }),

/***/ "./src/logic/ship.js":
/*!***************************!*\
  !*** ./src/logic/ship.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _cell__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./cell */ "./src/logic/cell.js");
/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./helpers */ "./src/logic/helpers.js");



class Ship {
  #hits = [];

  constructor(length = 1) {
    this.length = length;
    this.orientation = 'horizontal';
    this.#hits = [];
  }

  hit(x, y) {
    this.#hits.push(new _cell__WEBPACK_IMPORTED_MODULE_0__["default"](x, y));
  }

  isSunk() {
    return this.#hits.length === this.length;
  }

  place(x, y, gameboard) {
    this.x = x;
    this.y = y;

    this.#setCells(gameboard);
  }

  getHits() {
    return [...this.#hits];
  }

  setVertical() {
    this.orientation = 'vertical';
  }

  setHorizontal() {
    this.orientation = 'horizontal';
  }

  setRandomOrientation() {
    const orientations = ['horizontal', 'vertical'];
    const index = (0,_helpers__WEBPACK_IMPORTED_MODULE_1__["default"])(orientations.length);
    this.orientation = orientations[index];
  }

  front() {
    return this.cells.at(-1);
  }

  back() {
    return this.cells.at(0);
  }

  #setCells(gameboard) {
    this.cells = gameboard.cells.filter((cell) => {
      if (this.orientation === 'horizontal') {
        const back = this.x;
        const front = this.x + this.length - 1;

        return cell.x >= back && cell.x <= front && cell.y === this.y;
      } else if (this.orientation === 'vertical') {
        const back = this.y;
        const front = this.y + this.length - 1;

        return cell.y >= back && cell.y <= front && cell.x === this.x;
      }
    });
  }
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Ship);


/***/ }),

/***/ "./src/logic/submarine.js":
/*!********************************!*\
  !*** ./src/logic/submarine.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _ship__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ship */ "./src/logic/ship.js");


class Submarine extends _ship__WEBPACK_IMPORTED_MODULE_0__["default"] {
  constructor() {
    super(2);
  }
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Submarine);


/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/index.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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O0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxRQUFRO0FBQ1I7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMEJBQTBCLDZDQUFJO0FBQzlCO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUCxLQUFLO0FBQ0w7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSwwQkFBMEIsNkNBQUk7QUFDOUI7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRO0FBQ1I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUEsaUVBQWUsU0FBUyxFQUFDOzs7Ozs7Ozs7Ozs7Ozs7QUN6TnpCOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7O0FBRUEsaUVBQWUsT0FBTyxFQUFDOzs7Ozs7Ozs7Ozs7Ozs7QUM5QnZCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsaUVBQWUsSUFBSSxFQUFDOzs7Ozs7Ozs7Ozs7Ozs7OztBQ1RDO0FBQ2U7QUFDVztBQUNMO0FBQ047O0FBRXBDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0EsSUFBSSxvREFBTztBQUNYO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsSUFBSTtBQUNKLElBQUksb0RBQU87QUFDWDtBQUNBO0FBQ0E7QUFDQTs7QUFFQSx5QkFBeUIsZ0RBQWdEO0FBQ3pFO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLFVBQVUsb0NBQW9DOztBQUU5QztBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsUUFBUSxvREFBTztBQUNmO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxRQUFRLG9EQUFPO0FBQ2Y7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEVBQUUsb0RBQU87QUFDVDtBQUNBO0FBQ0E7O0FBRUE7QUFDQSw4QkFBOEIsc0RBQWdCO0FBQzlDO0FBQ0E7O0FBRUE7QUFDQSw4QkFBOEIsc0RBQWdCO0FBQzlDO0FBQ0E7O0FBRUE7QUFDQSx1QkFBdUIsd0RBQVM7QUFDaEMsY0FBYyxxREFBTTtBQUNwQjs7QUFFQTtBQUNBLHVCQUF1Qix3REFBUztBQUNoQyxjQUFjLHFEQUFNO0FBQ3BCOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBLEVBQUUsb0RBQU87QUFDVDtBQUNBLG1CQUFtQixvREFBTztBQUMxQjs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBLENBQUM7O0FBRUQ7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9EQUFPOztBQUVQO0FBQ0E7QUFDQTtBQUNBOztBQUVBOzs7Ozs7Ozs7Ozs7Ozs7O0FDclAwQjs7QUFFMUIseUJBQXlCLDZDQUFJO0FBQzdCO0FBQ0E7QUFDQTtBQUNBOztBQUVBLGlFQUFlLFVBQVUsRUFBQzs7Ozs7Ozs7Ozs7Ozs7O0FDUjFCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsaUVBQWUsSUFBSSxFQUFDOzs7Ozs7Ozs7Ozs7Ozs7O0FDWE07O0FBRTFCLHdCQUF3Qiw2Q0FBSTtBQUM1QjtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxpRUFBZSxTQUFTLEVBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDUkM7QUFDVzs7QUFFckM7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTiw0QkFBNEIsNkNBQUk7QUFDaEM7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxjQUFjLG9EQUFZO0FBQzFCLGNBQWMsb0RBQVk7O0FBRTFCO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxvQkFBb0IsZUFBZTtBQUNuQyxzQkFBc0IsZUFBZTtBQUNyQyx5QkFBeUIsNkNBQUk7QUFDN0I7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxRQUFRO0FBQ1I7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBOztBQUVBLGlFQUFlLFNBQVMsRUFBQzs7Ozs7Ozs7Ozs7Ozs7O0FDekd6QjtBQUNBO0FBQ0E7O0FBRUEsaUVBQWUsWUFBWSxFQUFDOzs7Ozs7Ozs7Ozs7Ozs7O0FDSkY7O0FBRTFCLHlCQUF5Qiw2Q0FBSTtBQUM3QjtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxpRUFBZSxVQUFVLEVBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDUlc7QUFDc0I7QUFDUTs7QUFFbkU7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLHdCQUF3QixvREFBWTtBQUNwQztBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLE9BQU8sMkRBQW1CO0FBQzFCLE9BQU8sMkRBQW1CO0FBQzFCLE9BQU8sd0RBQWdCO0FBQ3ZCO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQSxJQUFJLGtEQUFjO0FBQ2xCLDBCQUEwQix5QkFBeUI7QUFDbkQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0EsS0FBSztBQUNMO0FBQ0E7O0FBRUEsaUVBQWUsTUFBTSxFQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDbEZnQjtBQUNGO0FBQ0U7QUFDRjs7QUFFcEM7QUFDQTtBQUNBO0FBQ0EsVUFBVSxtREFBVTtBQUNwQixHQUFHO0FBQ0g7QUFDQTtBQUNBLFVBQVUsa0RBQVM7QUFDbkIsR0FBRztBQUNIO0FBQ0E7QUFDQSxVQUFVLGtEQUFTO0FBQ25CLEdBQUc7QUFDSDtBQUNBO0FBQ0EsVUFBVSxtREFBVTtBQUNwQixHQUFHO0FBQ0g7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQSxHQUFHOztBQUVIO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQSxHQUFHO0FBQ0g7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0EsR0FBRztBQUNIOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQSxJQUFJO0FBQ0o7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBT0U7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDaEt3QjtBQUNXOztBQUVyQztBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSx3QkFBd0IsNkNBQUk7QUFDNUI7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxrQkFBa0Isb0RBQVk7QUFDOUI7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxRQUFRO0FBQ1I7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7O0FBRUEsaUVBQWUsSUFBSSxFQUFDOzs7Ozs7Ozs7Ozs7Ozs7O0FDdEVNOztBQUUxQix3QkFBd0IsNkNBQUk7QUFDNUI7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsaUVBQWUsU0FBUyxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vd2VicGFjay10ZW1wbGF0ZS8uL3NyYy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vd2VicGFjay10ZW1wbGF0ZS8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vd2VicGFjay10ZW1wbGF0ZS8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL3dlYnBhY2stdGVtcGxhdGUvLi9zcmMvc3R5bGUuY3NzPzcxNjMiLCJ3ZWJwYWNrOi8vd2VicGFjay10ZW1wbGF0ZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLXRlbXBsYXRlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLXRlbXBsYXRlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL3dlYnBhY2stdGVtcGxhdGUvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vd2VicGFjay10ZW1wbGF0ZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL3dlYnBhY2stdGVtcGxhdGUvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLXRlbXBsYXRlLy4vc3JjL2RvbS9jZWxsLmpzIiwid2VicGFjazovL3dlYnBhY2stdGVtcGxhdGUvLi9zcmMvZG9tL2dhbWVib2FyZC5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLXRlbXBsYXRlLy4vc3JjL2RvbS9tZXNzYWdlLmpzIiwid2VicGFjazovL3dlYnBhY2stdGVtcGxhdGUvLi9zcmMvZG9tL3NoaXAuanMiLCJ3ZWJwYWNrOi8vd2VicGFjay10ZW1wbGF0ZS8uL3NyYy9pbmRleC5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLXRlbXBsYXRlLy4vc3JjL2xvZ2ljL2JhdHRsZXNoaXAuanMiLCJ3ZWJwYWNrOi8vd2VicGFjay10ZW1wbGF0ZS8uL3NyYy9sb2dpYy9jZWxsLmpzIiwid2VicGFjazovL3dlYnBhY2stdGVtcGxhdGUvLi9zcmMvbG9naWMvZGVzdHJveWVyLmpzIiwid2VicGFjazovL3dlYnBhY2stdGVtcGxhdGUvLi9zcmMvbG9naWMvZ2FtZWJvYXJkLmpzIiwid2VicGFjazovL3dlYnBhY2stdGVtcGxhdGUvLi9zcmMvbG9naWMvaGVscGVycy5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLXRlbXBsYXRlLy4vc3JjL2xvZ2ljL3BhdHJvbEJvYXQuanMiLCJ3ZWJwYWNrOi8vd2VicGFjay10ZW1wbGF0ZS8uL3NyYy9sb2dpYy9wbGF5ZXIuanMiLCJ3ZWJwYWNrOi8vd2VicGFjay10ZW1wbGF0ZS8uL3NyYy9sb2dpYy9ydWxlcy5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLXRlbXBsYXRlLy4vc3JjL2xvZ2ljL3NoaXAuanMiLCJ3ZWJwYWNrOi8vd2VicGFjay10ZW1wbGF0ZS8uL3NyYy9sb2dpYy9zdWJtYXJpbmUuanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgYCoge1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICBtYXJnaW46IDA7XG59XG5cbiNtYWluLWxheW91dCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBtYXJnaW46IDFyZW07XG59XG5cbiNjb250ZW50LWxheW91dCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGdhcDogMXJlbTtcbn1cblxuLmJ1dHRvbi1jb250YWluZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgZ2FwOiAxcmVtO1xufVxuXG4uYm9hcmQtbGFiZWwge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn1cblxuLmdhbWVib2FyZCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuXG4uZ2FtZWJvYXJkLTAge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xufVxuXG4uZ2FtZWJvYXJkLTAtYmxhbmsge1xuICB3aWR0aDogMzBweDtcbiAgaGVpZ2h0OiAzMHB4O1xufVxuXG4uZ2FtZWJvYXJkLTAtbGFiZWwge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgd2lkdGg6IDMwcHg7XG4gIGhlaWdodDogMzBweDtcbiAgYm9yZGVyLXJpZ2h0OiAxcHggc29saWQgYmxhY2s7XG59XG5cbi5nYW1lYm9hcmQtMSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG59XG5cbi5nYW1lYm9hcmQtMS0wIHtcbiAgZGlzcGxheTogZmxleDtcbn1cblxuLmdhbWVib2FyZC0xLTAtbGFiZWwge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgd2lkdGg6IDMwcHg7XG4gIGhlaWdodDogMzBweDtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIGJsYWNrO1xufVxuXG4uZ2FtZWJvYXJkLTEtMSB7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDEwLCAzMHB4KTtcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiByZXBlYXQoMTAsIDMwcHgpO1xufVxuXG4uZ2FtZWJvYXJkLTEtMS1jZWxsIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGJvcmRlci1yaWdodDogMXB4IHNvbGlkIGJsYWNrO1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgYmxhY2s7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLmhvdmVyOmhvdmVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogeWVsbG93O1xufVxuXG4uZmlsbCB7XG4gIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xufVxuXG4uaGl0IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDIwNywgMjU1LCAxMzYpO1xufVxuXG4ubWlzcyB7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigyNTUsIDIwOSwgMTIzKTtcbn1cblxuLmRpc2FibGVkIHtcbiAgZmlsdGVyOiBjb250cmFzdCgyMCUpO1xufVxuXG5idXR0b24ge1xuICB3aWR0aDogMTAwcHg7XG59XG5cbiNlbmVteS1ib2FyZC1sYWJlbCB7XG4gIGJhY2tncm91bmQtY29sb3I6IG9yYW5nZTtcbn1cblxuI2h1bWFuLWJvYXJkLWxhYmVsIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogZ3JlZW55ZWxsb3c7XG59XG5cbiNtZXNzYWdlLWNvbnRhaW5lciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuXG4jbWVzc2FnZSB7XG4gIGNvbG9yOiBibHVlO1xufVxuYCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0VBQ0Usc0JBQXNCO0VBQ3RCLFNBQVM7QUFDWDs7QUFFQTtFQUNFLGFBQWE7RUFDYix1QkFBdUI7RUFDdkIsWUFBWTtBQUNkOztBQUVBO0VBQ0UsYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixTQUFTO0FBQ1g7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsdUJBQXVCO0VBQ3ZCLFNBQVM7QUFDWDs7QUFFQTtFQUNFLGFBQWE7RUFDYix1QkFBdUI7QUFDekI7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsdUJBQXVCO0FBQ3pCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLHNCQUFzQjtBQUN4Qjs7QUFFQTtFQUNFLFdBQVc7RUFDWCxZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsdUJBQXVCO0VBQ3ZCLG1CQUFtQjtFQUNuQixXQUFXO0VBQ1gsWUFBWTtFQUNaLDZCQUE2QjtBQUMvQjs7QUFFQTtFQUNFLGFBQWE7RUFDYixzQkFBc0I7QUFDeEI7O0FBRUE7RUFDRSxhQUFhO0FBQ2Y7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsdUJBQXVCO0VBQ3ZCLG1CQUFtQjtFQUNuQixXQUFXO0VBQ1gsWUFBWTtFQUNaLDhCQUE4QjtBQUNoQzs7QUFFQTtFQUNFLGFBQWE7RUFDYix1Q0FBdUM7RUFDdkMsb0NBQW9DO0FBQ3RDOztBQUVBO0VBQ0UsYUFBYTtFQUNiLHVCQUF1QjtFQUN2QixtQkFBbUI7RUFDbkIsNkJBQTZCO0VBQzdCLDhCQUE4QjtFQUM5QixlQUFlO0FBQ2pCOztBQUVBO0VBQ0Usd0JBQXdCO0FBQzFCOztBQUVBO0VBQ0UsdUJBQXVCO0FBQ3pCOztBQUVBO0VBQ0Usb0NBQW9DO0FBQ3RDOztBQUVBO0VBQ0Usb0NBQW9DO0FBQ3RDOztBQUVBO0VBQ0UscUJBQXFCO0FBQ3ZCOztBQUVBO0VBQ0UsWUFBWTtBQUNkOztBQUVBO0VBQ0Usd0JBQXdCO0FBQzFCOztBQUVBO0VBQ0UsNkJBQTZCO0FBQy9COztBQUVBO0VBQ0UsYUFBYTtFQUNiLHVCQUF1QjtBQUN6Qjs7QUFFQTtFQUNFLFdBQVc7QUFDYlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIqIHtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICBtYXJnaW46IDA7XFxufVxcblxcbiNtYWluLWxheW91dCB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBtYXJnaW46IDFyZW07XFxufVxcblxcbiNjb250ZW50LWxheW91dCB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGdhcDogMXJlbTtcXG59XFxuXFxuLmJ1dHRvbi1jb250YWluZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgZ2FwOiAxcmVtO1xcbn1cXG5cXG4uYm9hcmQtbGFiZWwge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbn1cXG5cXG4uZ2FtZWJvYXJkIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG59XFxuXFxuLmdhbWVib2FyZC0wIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbn1cXG5cXG4uZ2FtZWJvYXJkLTAtYmxhbmsge1xcbiAgd2lkdGg6IDMwcHg7XFxuICBoZWlnaHQ6IDMwcHg7XFxufVxcblxcbi5nYW1lYm9hcmQtMC1sYWJlbCB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgd2lkdGg6IDMwcHg7XFxuICBoZWlnaHQ6IDMwcHg7XFxuICBib3JkZXItcmlnaHQ6IDFweCBzb2xpZCBibGFjaztcXG59XFxuXFxuLmdhbWVib2FyZC0xIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbn1cXG5cXG4uZ2FtZWJvYXJkLTEtMCB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbn1cXG5cXG4uZ2FtZWJvYXJkLTEtMC1sYWJlbCB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgd2lkdGg6IDMwcHg7XFxuICBoZWlnaHQ6IDMwcHg7XFxuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgYmxhY2s7XFxufVxcblxcbi5nYW1lYm9hcmQtMS0xIHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgxMCwgMzBweCk7XFxuICBncmlkLXRlbXBsYXRlLXJvd3M6IHJlcGVhdCgxMCwgMzBweCk7XFxufVxcblxcbi5nYW1lYm9hcmQtMS0xLWNlbGwge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGJvcmRlci1yaWdodDogMXB4IHNvbGlkIGJsYWNrO1xcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIGJsYWNrO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4uaG92ZXI6aG92ZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogeWVsbG93O1xcbn1cXG5cXG4uZmlsbCB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcXG59XFxuXFxuLmhpdCB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjA3LCAyNTUsIDEzNik7XFxufVxcblxcbi5taXNzIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigyNTUsIDIwOSwgMTIzKTtcXG59XFxuXFxuLmRpc2FibGVkIHtcXG4gIGZpbHRlcjogY29udHJhc3QoMjAlKTtcXG59XFxuXFxuYnV0dG9uIHtcXG4gIHdpZHRoOiAxMDBweDtcXG59XFxuXFxuI2VuZW15LWJvYXJkLWxhYmVsIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IG9yYW5nZTtcXG59XFxuXFxuI2h1bWFuLWJvYXJkLWxhYmVsIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IGdyZWVueWVsbG93O1xcbn1cXG5cXG4jbWVzc2FnZS1jb250YWluZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbn1cXG5cXG4jbWVzc2FnZSB7XFxuICBjb2xvcjogYmx1ZTtcXG59XFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdO1xuXG4gIC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9O1xuXG4gIC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gdXBkYXRlcjtcbn1cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTtcblxuICAgIC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuICBjc3MgKz0gb2JqLmNzcztcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfVxuXG4gIC8vIEZvciBvbGQgSUVcbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgaWYgKHR5cGVvZiBkb2N1bWVudCA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHJldHVybiB7XG4gICAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZSgpIHt9LFxuICAgICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7fVxuICAgIH07XG4gIH1cbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImNsYXNzIENlbGwge1xuICAjZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuXG4gIGNvbnN0cnVjdG9yKHgsIHksIGRpc2FibGVkKSB7XG4gICAgdGhpcy54ID0geDtcbiAgICB0aGlzLnkgPSB5O1xuXG4gICAgdGhpcy4jZWxlbWVudC5jbGFzc0xpc3QuYWRkKCdnYW1lYm9hcmQtMS0xLWNlbGwnKTtcbiAgICB0aGlzLiNlbGVtZW50LnRleHRDb250ZW50ID0gYCR7eH0sICR7eX1gO1xuXG4gICAgaWYgKGRpc2FibGVkKSB7XG4gICAgICB0aGlzLmRpc2FibGVIb3ZlcigpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmVuYWJsZUhvdmVyKCk7XG4gICAgfVxuXG4gICAgdGhpcy4jZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChldmVudCkgPT4ge1xuICAgICAgdGhpcy4jaGFuZGxlQ2xpY2soZXZlbnQpO1xuICAgIH0pO1xuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiB0aGlzLiNlbGVtZW50O1xuICB9XG5cbiAgZW5hYmxlRmlsbCgpIHtcbiAgICB0aGlzLiNlbGVtZW50LmNsYXNzTGlzdC5hZGQoJ2ZpbGwnKTtcbiAgfVxuXG4gIGVuYWJsZU1pc3MoKSB7XG4gICAgdGhpcy4jZWxlbWVudC5jbGFzc0xpc3QuYWRkKCdtaXNzJyk7XG4gIH1cblxuICBlbmFibGVIaXQoKSB7XG4gICAgdGhpcy4jZWxlbWVudC5jbGFzc0xpc3QuYWRkKCdoaXQnKTtcbiAgfVxuXG4gIGVuYWJsZUhvdmVyKCkge1xuICAgIHRoaXMuI2VsZW1lbnQuY2xhc3NMaXN0LmFkZCgnaG92ZXInKTtcbiAgfVxuXG4gIGRpc2FibGVIb3ZlcigpIHtcbiAgICB0aGlzLiNlbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoJ2hvdmVyJyk7XG4gIH1cblxuICAjaGFuZGxlQ2xpY2soZXZlbnQpIHtcbiAgICBldmVudC5jZWxsID0gdGhpcztcbiAgfVxuXG4gIHJlc2V0KCkge1xuICAgIHRoaXMuI2Rpc2FibGVGaWxsKCk7XG4gICAgdGhpcy4jZGlzYWJsZUhpdCgpO1xuICAgIHRoaXMuI2Rpc2FibGVNaXNzKCk7XG4gIH1cblxuICAjZGlzYWJsZUZpbGwoKSB7XG4gICAgdGhpcy4jZWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKCdmaWxsJyk7XG4gIH1cblxuICAjZGlzYWJsZU1pc3MoKSB7XG4gICAgdGhpcy4jZWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKCdtaXNzJyk7XG4gIH1cblxuICAjZGlzYWJsZUhpdCgpIHtcbiAgICB0aGlzLiNlbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoJ2hpdCcpO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IENlbGw7XG4iLCJpbXBvcnQgQ2VsbCBmcm9tICcuL2NlbGwnO1xuaW1wb3J0IFNoaXAgZnJvbSAnLi9zaGlwJztcblxuY2xhc3MgR2FtZWJvYXJkIHtcbiAgI2VsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgI2Rpc2FibGVkID0gZmFsc2U7XG4gICNjZWxscyA9IFtdO1xuICAjc2hpcHMgPSBbXTtcbiAgI2NvbnRyb2xsZXIgPSB1bmRlZmluZWQ7XG5cbiAgY29uc3RydWN0b3IocGxheWVyLCBoYW5kbGVUdXJuQ2FsbGJhY2spIHtcbiAgICB0aGlzLnBsYXllciA9IHBsYXllcjtcbiAgICB0aGlzLiNjb250cm9sbGVyID0gcGxheWVyLmdhbWVib2FyZDtcbiAgICB0aGlzLmhhbmRsZVR1cm5DYWxsYmFjayA9IGhhbmRsZVR1cm5DYWxsYmFjaztcblxuICAgIHRoaXMuI2VsZW1lbnQuY2xhc3NMaXN0LmFkZCgnZ2FtZWJvYXJkJyk7XG5cbiAgICB0aGlzLmNyZWF0ZUxhYmVsc0xlZnRDb250YWluZXIoKTtcbiAgICB0aGlzLmNyZWF0ZUxhYmVsc0xlZnQoKTtcblxuICAgIHRoaXMuY3JlYXRlR2FtZWJvYXJkMSgpO1xuXG4gICAgdGhpcy5jcmVhdGVMYWJlbHNUb3BDb250YWluZXIoKTtcbiAgICB0aGlzLmNyZWF0ZUxhYmVsc1RvcCgpO1xuXG4gICAgdGhpcy5jcmVhdGVHcmlkKCk7XG4gICAgdGhpcy4jY3JlYXRlQ2VsbHMoKTtcbiAgICB0aGlzLnJlbmRlckNlbGxzKCk7XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuIHRoaXMuI2VsZW1lbnQ7XG4gIH1cblxuICBhcHBlbmRDaGlsZChlbGVtZW50KSB7XG4gICAgdGhpcy4jZWxlbWVudC5hcHBlbmRDaGlsZChlbGVtZW50KTtcbiAgfVxuXG4gIGRpc2FibGUoKSB7XG4gICAgdGhpcy4jZGlzYWJsZWQgPSB0cnVlO1xuICAgIHRoaXMuI2VsZW1lbnQuY2xhc3NMaXN0LmFkZCgnZGlzYWJsZWQnKTtcblxuICAgIHRoaXMuZGlzYWJsZUhvdmVyT25BbGxDZWxscygpO1xuICB9XG5cbiAgZGlzYWJsZUhvdmVyT25BbGxDZWxscygpIHtcbiAgICB0aGlzLiNjZWxscy5mb3JFYWNoKChjZWxsRE9NKSA9PiB7XG4gICAgICBjZWxsRE9NLmRpc2FibGVIb3ZlcigpO1xuICAgIH0pO1xuICB9XG5cbiAgZW5hYmxlKCkge1xuICAgIHRoaXMuI2Rpc2FibGVkID0gZmFsc2U7XG4gICAgdGhpcy4jZWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKCdkaXNhYmxlZCcpO1xuXG4gICAgdGhpcy4jZW5hYmxlSG92ZXJPbkFsbE9wZW5DZWxscygpO1xuICB9XG5cbiAgaXNEaXNhYmxlZCgpIHtcbiAgICByZXR1cm4gdGhpcy4jZGlzYWJsZWQ7XG4gIH1cblxuICBjcmVhdGVMYWJlbHNMZWZ0Q29udGFpbmVyKCkge1xuICAgIGNvbnN0IGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBlbGVtZW50LmNsYXNzTGlzdC5hZGQoJ2dhbWVib2FyZC0wJyk7XG4gICAgdGhpcy5hcHBlbmRDaGlsZChlbGVtZW50KTtcblxuICAgIHRoaXMubGFiZWxzTGVmdENvbnRhaW5lciA9IGVsZW1lbnQ7XG4gIH1cblxuICBjcmVhdGVMYWJlbHNMZWZ0KCkge1xuICAgIGNvbnN0IGxhYmVscyA9IFsnJywgJzEnLCAnMicsICczJywgJzQnLCAnNScsICc2JywgJzcnLCAnOCcsICc5JywgJzEwJ107XG5cbiAgICBsYWJlbHMuZm9yRWFjaCgobGFiZWwsIGluZGV4KSA9PiB7XG4gICAgICBjb25zdCBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5cbiAgICAgIGlmIChpbmRleCA9PT0gMCkge1xuICAgICAgICBlbGVtZW50LmNsYXNzTGlzdC5hZGQoJ2dhbWVib2FyZC0wLWJsYW5rJyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBlbGVtZW50LmNsYXNzTGlzdC5hZGQoJ2dhbWVib2FyZC0wLWxhYmVsJyk7XG4gICAgICB9XG5cbiAgICAgIGVsZW1lbnQudGV4dENvbnRlbnQgPSBsYWJlbDtcbiAgICAgIHRoaXMubGFiZWxzTGVmdENvbnRhaW5lci5hcHBlbmRDaGlsZChlbGVtZW50KTtcbiAgICB9KTtcbiAgfVxuXG4gIGNyZWF0ZUdhbWVib2FyZDEoKSB7XG4gICAgY29uc3QgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGVsZW1lbnQuY2xhc3NMaXN0LmFkZCgnZ2FtZWJvYXJkLTEnKTtcbiAgICB0aGlzLmFwcGVuZENoaWxkKGVsZW1lbnQpO1xuXG4gICAgdGhpcy5nYW1lYm9hcmRfMSA9IGVsZW1lbnQ7XG4gIH1cblxuICBjcmVhdGVMYWJlbHNUb3BDb250YWluZXIoKSB7XG4gICAgY29uc3QgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGVsZW1lbnQuY2xhc3NMaXN0LmFkZCgnZ2FtZWJvYXJkLTEtMCcpO1xuICAgIHRoaXMuZ2FtZWJvYXJkXzEuYXBwZW5kQ2hpbGQoZWxlbWVudCk7XG5cbiAgICB0aGlzLmxhYmVsc1RvcENvbnRhaW5lciA9IGVsZW1lbnQ7XG4gIH1cblxuICBjcmVhdGVMYWJlbHNUb3AoKSB7XG4gICAgY29uc3QgbGFiZWxzID0gWydBJywgJ0InLCAnQycsICdEJywgJ0UnLCAnRicsICdHJywgJ0gnLCAnSScsICdKJ107XG5cbiAgICBsYWJlbHMuZm9yRWFjaCgobGFiZWwpID0+IHtcbiAgICAgIGNvbnN0IGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcblxuICAgICAgZWxlbWVudC5jbGFzc0xpc3QuYWRkKCdnYW1lYm9hcmQtMS0wLWxhYmVsJyk7XG5cbiAgICAgIGVsZW1lbnQudGV4dENvbnRlbnQgPSBsYWJlbDtcbiAgICAgIHRoaXMubGFiZWxzVG9wQ29udGFpbmVyLmFwcGVuZENoaWxkKGVsZW1lbnQpO1xuICAgIH0pO1xuICB9XG5cbiAgY3JlYXRlR3JpZCgpIHtcbiAgICBjb25zdCBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgZWxlbWVudC5jbGFzc0xpc3QuYWRkKCdnYW1lYm9hcmQtMS0xJyk7XG4gICAgdGhpcy5nYW1lYm9hcmRfMS5hcHBlbmRDaGlsZChlbGVtZW50KTtcblxuICAgIHRoaXMuZ2FtZWJvYXJkXzFfMSA9IGVsZW1lbnQ7XG5cbiAgICB0aGlzLmdhbWVib2FyZF8xXzEuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZXZlbnQpID0+IHtcbiAgICAgIHRoaXMuI2hhbmRsZUNsaWNrKGV2ZW50KTtcbiAgICB9KTtcbiAgfVxuXG4gIGNyZWF0ZVNoaXBzKCkge1xuICAgIGNvbnN0IHNoaXBzID0gdGhpcy4jY29udHJvbGxlci5nZXRTaGlwcygpO1xuICAgIHNoaXBzLmZvckVhY2goKHNoaXApID0+IHtcbiAgICAgIGNvbnN0IGNlbGxET01zID0gdGhpcy4jZ2V0U2hpcENlbGxET01zKHNoaXApO1xuICAgICAgY29uc3Qgc2hpcERPTSA9IG5ldyBTaGlwKHNoaXAueCwgc2hpcC55LCBzaGlwLmxlbmd0aCwgY2VsbERPTXMpO1xuICAgICAgdGhpcy4jc2hpcHMucHVzaChzaGlwRE9NKTtcbiAgICB9KTtcbiAgfVxuXG4gIGdldENlbGxET00oeCwgeSkge1xuICAgIHJldHVybiB0aGlzLiNjZWxscy5maW5kKChjZWxsRE9NKSA9PiB7XG4gICAgICByZXR1cm4gY2VsbERPTS54ID09PSB4ICYmIGNlbGxET00ueSA9PT0geTtcbiAgICB9KTtcbiAgfVxuXG4gIHJlbmRlckNlbGxzKCkge1xuICAgIHRoaXMuI2NlbGxzLmZvckVhY2goKGNlbGxET00pID0+IHtcbiAgICAgIHRoaXMuZ2FtZWJvYXJkXzFfMS5hcHBlbmRDaGlsZChjZWxsRE9NLnJlbmRlcigpKTtcbiAgICB9KTtcbiAgfVxuXG4gIHJlbmRlclNoaXBzKCkge1xuICAgIHRoaXMuI3NoaXBzLmZvckVhY2goKHNoaXBET00pID0+IHtcbiAgICAgIGNvbnN0IGNlbGxET01zID0gc2hpcERPTS5jZWxscztcbiAgICAgIGNlbGxET01zLmZvckVhY2goKGNlbGxET00pID0+IHtcbiAgICAgICAgY2VsbERPTS5lbmFibGVGaWxsKCk7XG4gICAgICB9KTtcbiAgICB9KTtcbiAgfVxuXG4gIHJlc2V0KCkge1xuICAgIHRoaXMuI3NoaXBzID0gW107XG4gICAgdGhpcy4jY2VsbHMuZm9yRWFjaCgoY2VsbERPTSkgPT4gY2VsbERPTS5yZXNldCgpKTtcbiAgfVxuXG4gICNjcmVhdGVDZWxscygpIHtcbiAgICBjb25zdCBjZWxscyA9IHRoaXMuI2NvbnRyb2xsZXIuY2VsbHM7XG5cbiAgICBjZWxscy5mb3JFYWNoKChjZWxsKSA9PiB7XG4gICAgICBjb25zdCB4ID0gY2VsbC54O1xuICAgICAgY29uc3QgeSA9IGNlbGwueTtcbiAgICAgIGNvbnN0IGNlbGxET00gPSBuZXcgQ2VsbCh4LCB5LCB0aGlzLmlzRGlzYWJsZWQoKSk7XG4gICAgICB0aGlzLiNjZWxscy5wdXNoKGNlbGxET00pO1xuICAgIH0pO1xuICB9XG5cbiAgI2VuYWJsZUhvdmVyT25BbGxPcGVuQ2VsbHMoKSB7XG4gICAgdGhpcy4jY2VsbHMuZm9yRWFjaCgoY2VsbERPTSkgPT4ge1xuICAgICAgaWYgKCF0aGlzLiNjb250cm9sbGVyLmlzRXhpc3RpbmdTaG90KGNlbGxET00ueCwgY2VsbERPTS55KSkge1xuICAgICAgICBjZWxsRE9NLmVuYWJsZUhvdmVyKCk7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICAjZ2V0U2hpcENlbGxET01zKHNoaXApIHtcbiAgICBjb25zdCBzaGlwQmFjayA9IHNoaXAuYmFjaygpO1xuICAgIGNvbnN0IHNoaXBGcm9udCA9IHNoaXAuZnJvbnQoKTtcblxuICAgIHJldHVybiB0aGlzLiNjZWxscy5maWx0ZXIoKGNlbGxET00pID0+IHtcbiAgICAgIGlmIChzaGlwLm9yaWVudGF0aW9uID09PSAnaG9yaXpvbnRhbCcpIHtcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICBjZWxsRE9NLnggPj0gc2hpcEJhY2sueCAmJlxuICAgICAgICAgIGNlbGxET00ueCA8PSBzaGlwRnJvbnQueCAmJlxuICAgICAgICAgIGNlbGxET00ueSA9PT0gc2hpcC55XG4gICAgICAgICk7XG4gICAgICB9IGVsc2UgaWYgKHNoaXAub3JpZW50YXRpb24gPT09ICd2ZXJ0aWNhbCcpIHtcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICBjZWxsRE9NLnkgPj0gc2hpcEJhY2sueSAmJlxuICAgICAgICAgIGNlbGxET00ueSA8PSBzaGlwRnJvbnQueSAmJlxuICAgICAgICAgIGNlbGxET00ueCA9PT0gc2hpcC54XG4gICAgICAgICk7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICAjaGFuZGxlQ2xpY2soZXZlbnQpIHtcbiAgICBjb25zdCBjbGlja0RhdGEgPSB7fTtcbiAgICBjbGlja0RhdGEuY2VsbCA9IGV2ZW50LmNlbGw7XG4gICAgY2xpY2tEYXRhLmdhbWVib2FyZCA9IHtcbiAgICAgIGNvbnRyb2xsZXI6IHRoaXMuI2NvbnRyb2xsZXIsXG4gICAgICBvd25lcjogdGhpcy5wbGF5ZXIsXG4gICAgICBkaXNhYmxlZDogdGhpcy5pc0Rpc2FibGVkKCksXG4gICAgfTtcbiAgICBjbGlja0RhdGEucG9pbnRlclR5cGUgPSBldmVudC5wb2ludGVyVHlwZTtcblxuICAgIHRoaXMuaGFuZGxlVHVybkNhbGxiYWNrKGNsaWNrRGF0YSk7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgR2FtZWJvYXJkO1xuIiwibGV0IGVsZW1lbnQ7XG5cbmNvbnN0IG1lc3NhZ2UgPSB7XG4gIHNldEVsZW1lbnQoZGl2KSB7XG4gICAgZWxlbWVudCA9IGRpdjtcbiAgfSxcbiAgc2V0RW5lbXlUdXJuKCkge1xuICAgIGVsZW1lbnQudGV4dENvbnRlbnQgPSBcIkVuZW15J3MgdHVybiFcIjtcbiAgfSxcbiAgc2V0SHVtYW5UdXJuKCkge1xuICAgIGVsZW1lbnQudGV4dENvbnRlbnQgPSAnWW91ciB0dXJuISc7XG4gIH0sXG4gIHNldEVuZW15V29uKCkge1xuICAgIGVsZW1lbnQudGV4dENvbnRlbnQgPSAnRW5lbXkgd29uISc7XG4gIH0sXG4gIHNldEh1bWFuV29uKCkge1xuICAgIGVsZW1lbnQudGV4dENvbnRlbnQgPSAnWW91IHdvbiEnO1xuICB9LFxuICBzZXRJbnN0cnVjdGlvbigpIHtcbiAgICBlbGVtZW50LnRleHRDb250ZW50ID1cbiAgICAgIFwiUmFuZG9taXplIHlvdXIgc2hpcHMgdW50aWwgeW91J3JlIGhhcHB5IHdpdGggdGhlaXIgcG9zaXRpb25zLCB0aGVuIHByZXNzIFBsYXkhXCI7XG4gIH0sXG4gIHNldExvYWRpbmdTaGlwcygpIHtcbiAgICBlbGVtZW50LnRleHRDb250ZW50ID0gJ0xvYWRpbmcgcmFuZG9tIHNoaXBzLi4uJztcbiAgfSxcbiAgdGV4dCgpIHtcbiAgICByZXR1cm4gZWxlbWVudC50ZXh0Q29udGVudDtcbiAgfSxcbn07XG5cbmV4cG9ydCBkZWZhdWx0IG1lc3NhZ2U7XG4iLCJjbGFzcyBTaGlwIHtcbiAgY29uc3RydWN0b3IoeCwgeSwgbGVuZ3RoLCBjZWxscykge1xuICAgIHRoaXMueCA9IHg7XG4gICAgdGhpcy55ID0geTtcbiAgICB0aGlzLmxlbmd0aCA9IGxlbmd0aDtcbiAgICB0aGlzLmNlbGxzID0gY2VsbHM7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgU2hpcDtcbiIsImltcG9ydCAnLi9zdHlsZS5jc3MnO1xuaW1wb3J0IFBsYXllciBmcm9tICcuL2xvZ2ljL3BsYXllcic7XG5pbXBvcnQgR2FtZWJvYXJkRWxlbWVudCBmcm9tICcuL2RvbS9nYW1lYm9hcmQnO1xuaW1wb3J0IEdhbWVib2FyZCBmcm9tICcuL2xvZ2ljL2dhbWVib2FyZCc7XG5pbXBvcnQgbWVzc2FnZSBmcm9tICcuL2RvbS9tZXNzYWdlJztcblxuZnVuY3Rpb24gcmVtb3ZlR2FtZWJvYXJkKGNvbnRhaW5lcikge1xuICBjb25zdCBjaGlsZCA9IGNvbnRhaW5lci5maXJzdENoaWxkO1xuICBpZiAoY2hpbGQpIHtcbiAgICBjb250YWluZXIucmVtb3ZlQ2hpbGQoY2hpbGQpO1xuICB9XG59XG5cbmZ1bmN0aW9uIGlzUGxheWVyQ2xpY2tpbmdPd25HYW1lYm9hcmQoY2xpY2tlZEdhbWVib2FyZEVsZW1lbnQsIHBvaW50ZXJUeXBlKSB7XG4gIHJldHVybiAoXG4gICAgY2xpY2tlZEdhbWVib2FyZEVsZW1lbnQub3duZXIgPT09IGN1cnJlbnRQbGF5ZXIgfHxcbiAgICAoY2xpY2tlZEdhbWVib2FyZEVsZW1lbnQub3duZXIgPT09IGh1bWFuICYmIHBvaW50ZXJUeXBlID09PSAnbW91c2UnKSB8fFxuICAgIChjbGlja2VkR2FtZWJvYXJkRWxlbWVudC5vd25lciA9PT0gZW5lbXkgJiYgcG9pbnRlclR5cGUgPT09ICcnKVxuICApO1xufVxuXG5mdW5jdGlvbiBpc0h1bWFuVGFraW5nQW5vdGhlclNob3RBZnRlck1pc3NpbmcoXG4gIGNsaWNrZWRHYW1lYm9hcmRFbGVtZW50LFxuICBwb2ludGVyVHlwZSxcbikge1xuICByZXR1cm4gKFxuICAgIGN1cnJlbnRQbGF5ZXIgPT09IGVuZW15ICYmXG4gICAgY2xpY2tlZEdhbWVib2FyZEVsZW1lbnQub3duZXIgPT09IGVuZW15ICYmXG4gICAgcG9pbnRlclR5cGUgPT09ICdtb3VzZSdcbiAgKTtcbn1cblxuZnVuY3Rpb24gZW5lbXlQbGF5KCkge1xuICBjb25zdCBjZWxsID0gZW5lbXkucGxheShodW1hbkdhbWVib2FyZCk7XG4gIGNvbnN0IGNlbGxET00gPSBodW1hbkdhbWVib2FyZEVsZW1lbnQuZ2V0Q2VsbERPTShjZWxsLngsIGNlbGwueSk7XG4gIGNlbGxET00ucmVuZGVyKCkuY2xpY2soKTtcbn1cblxuYXN5bmMgZnVuY3Rpb24gZGVsYXkodGltZSkge1xuICBhd2FpdCBuZXcgUHJvbWlzZSgocmVzb2x2ZSkgPT4gc2V0VGltZW91dChyZXNvbHZlLCB0aW1lKSk7XG59XG5cbmFzeW5jIGZ1bmN0aW9uIG5leHRUdXJuKCkge1xuICBjdXJyZW50R2FtZWJvYXJkRWxlbWVudC5kaXNhYmxlKCk7XG5cbiAgaWYgKGN1cnJlbnRQbGF5ZXIgPT09IGVuZW15KSB7XG4gICAgbWVzc2FnZS5zZXRFbmVteVR1cm4oKTtcbiAgICBjdXJyZW50R2FtZWJvYXJkRWxlbWVudCA9IGh1bWFuR2FtZWJvYXJkRWxlbWVudDtcbiAgICBjdXJyZW50R2FtZWJvYXJkRWxlbWVudC5lbmFibGUoKTtcbiAgICBjdXJyZW50R2FtZWJvYXJkRWxlbWVudC5kaXNhYmxlSG92ZXJPbkFsbENlbGxzKCk7XG5cbiAgICBhd2FpdCBkZWxheSgyMDAwKTtcbiAgICBlbmVteVBsYXkoKTtcbiAgfSBlbHNlIHtcbiAgICBtZXNzYWdlLnNldEh1bWFuVHVybigpO1xuICAgIGN1cnJlbnRHYW1lYm9hcmRFbGVtZW50ID0gZW5lbXlHYW1lYm9hcmRFbGVtZW50O1xuICAgIGN1cnJlbnRHYW1lYm9hcmRFbGVtZW50LmVuYWJsZSgpO1xuICB9XG59XG5cbmZ1bmN0aW9uIGlzU2hvdEludmFsaWQoeyBnYW1lYm9hcmQ6IGdhbWVib2FyZEVsZW1lbnQsIHBvaW50ZXJUeXBlLCBjZWxsIH0pIHtcbiAgaWYgKGdhbWVib2FyZEVsZW1lbnQuZGlzYWJsZWQpIHtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuXG4gIGlmIChpc0h1bWFuVGFraW5nQW5vdGhlclNob3RBZnRlck1pc3NpbmcoZ2FtZWJvYXJkRWxlbWVudCwgcG9pbnRlclR5cGUpKSB7XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cblxuICBpZiAoaXNQbGF5ZXJDbGlja2luZ093bkdhbWVib2FyZChnYW1lYm9hcmRFbGVtZW50LCBwb2ludGVyVHlwZSkpIHtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuXG4gIGlmIChnYW1lYm9hcmRFbGVtZW50LmNvbnRyb2xsZXIuaXNFeGlzdGluZ1Nob3QoY2VsbC54LCBjZWxsLnkpKSB7XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cblxuICByZXR1cm4gZmFsc2U7XG59XG5cbmZ1bmN0aW9uIGF0dGFja0dhbWVib2FyZChnYW1lYm9hcmRFbGVtZW50LCBjZWxsKSB7XG4gIHJldHVybiBnYW1lYm9hcmRFbGVtZW50LmNvbnRyb2xsZXIucmVjZWl2ZUF0dGFjayhjZWxsLngsIGNlbGwueSk7XG59XG5cbmFzeW5jIGZ1bmN0aW9uIGhhbmRsZVR1cm4oY2xpY2tEYXRhKSB7XG4gIGNvbnN0IHsgZ2FtZWJvYXJkOiBnYW1lYm9hcmRFbGVtZW50LCBjZWxsIH0gPSBjbGlja0RhdGE7XG5cbiAgaWYgKGlzU2hvdEludmFsaWQoY2xpY2tEYXRhKSkge1xuICAgIGlmIChjdXJyZW50UGxheWVyID09PSBlbmVteSkge1xuICAgICAgYXdhaXQgZGVsYXkoMjAwMCk7XG4gICAgICBlbmVteVBsYXkoKTtcbiAgICB9XG5cbiAgICByZXR1cm47XG4gIH1cblxuICBjb25zdCBoaXQgPSBhdHRhY2tHYW1lYm9hcmQoZ2FtZWJvYXJkRWxlbWVudCwgY2VsbCk7XG5cbiAgaWYgKGhpdCkge1xuICAgIHJlbmRlckhpdChjZWxsKTtcblxuICAgIGlmIChjdXJyZW50UGxheWVyID09PSBodW1hbikge1xuICAgICAgaWYgKGVuZW15R2FtZWJvYXJkLmFsbFNoaXBzU3VuaygpKSB7XG4gICAgICAgIG1lc3NhZ2Uuc2V0SHVtYW5Xb24oKTtcbiAgICAgICAgZGlzYWJsZUJvdGhHYW1lYm9hcmRzKCk7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAoY3VycmVudFBsYXllciA9PT0gZW5lbXkpIHtcbiAgICAgIGlmIChodW1hbkdhbWVib2FyZC5hbGxTaGlwc1N1bmsoKSkge1xuICAgICAgICBtZXNzYWdlLnNldEVuZW15V29uKCk7XG4gICAgICAgIGRpc2FibGVCb3RoR2FtZWJvYXJkcygpO1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGF3YWl0IGRlbGF5KDIwMDApO1xuICAgICAgZW5lbXlQbGF5KCk7XG4gICAgfVxuICB9IGVsc2Uge1xuICAgIHJlbmRlck1pc3MoY2VsbCk7XG4gICAgc2V0Q3VycmVudFBsYXllcigpO1xuXG4gICAgYXdhaXQgZGVsYXkoMjAwMCk7XG4gICAgbmV4dFR1cm4oKTtcbiAgfVxufVxuXG5mdW5jdGlvbiBzZXRDdXJyZW50UGxheWVyKCkge1xuICBpZiAoY3VycmVudFBsYXllciA9PT0gaHVtYW4pIHtcbiAgICBjdXJyZW50UGxheWVyID0gZW5lbXk7XG4gIH0gZWxzZSB7XG4gICAgY3VycmVudFBsYXllciA9IGh1bWFuO1xuICB9XG59XG5cbmZ1bmN0aW9uIGRpc2FibGVCb3RoR2FtZWJvYXJkcygpIHtcbiAgZW5lbXlHYW1lYm9hcmRFbGVtZW50LmRpc2FibGUoKTtcbiAgaHVtYW5HYW1lYm9hcmRFbGVtZW50LmRpc2FibGUoKTtcbn1cblxuZnVuY3Rpb24gcmVuZGVyTWlzcyhjZWxsKSB7XG4gIGNlbGwuZW5hYmxlTWlzcygpO1xuICBjZWxsLmRpc2FibGVIb3ZlcigpO1xufVxuXG5mdW5jdGlvbiByZW5kZXJIaXQoY2VsbCkge1xuICBjZWxsLmVuYWJsZUhpdCgpO1xuICBjZWxsLmRpc2FibGVIb3ZlcigpO1xufVxuXG5mdW5jdGlvbiByYW5kb21pemVHYW1lYm9hcmRzKCkge1xuICByYW5kb21pemVDb21wdXRlckdhbWVib2FyZCgpO1xuICByYW5kb21pemVIdW1hbkdhbWVib2FyZCgpO1xufVxuXG5mdW5jdGlvbiBwbGF5KCkge1xuICBlbmVteUdhbWVib2FyZEVsZW1lbnQuZW5hYmxlKCk7XG4gIG1lc3NhZ2Uuc2V0SHVtYW5UdXJuKCk7XG4gIHJhbmRvbWl6ZUJ1dHRvbi5kaXNhYmxlZCA9IHRydWU7XG4gIHBsYXlCdXR0b24uZGlzYWJsZWQgPSB0cnVlO1xufVxuXG5mdW5jdGlvbiBzZXR1cEh1bWFuR2FtZWJvYXJkRWxlbWVudCgpIHtcbiAgaHVtYW5HYW1lYm9hcmRFbGVtZW50ID0gbmV3IEdhbWVib2FyZEVsZW1lbnQoaHVtYW4sIGhhbmRsZVR1cm4pO1xuICBodW1hbkNvbnRhaW5lci5hcHBlbmRDaGlsZChodW1hbkdhbWVib2FyZEVsZW1lbnQucmVuZGVyKCkpO1xufVxuXG5mdW5jdGlvbiBzZXR1cENvbXB1dGVyR2FtZWJvYXJkRWxlbWVudCgpIHtcbiAgZW5lbXlHYW1lYm9hcmRFbGVtZW50ID0gbmV3IEdhbWVib2FyZEVsZW1lbnQoZW5lbXksIGhhbmRsZVR1cm4pO1xuICBlbmVteUNvbnRhaW5lci5hcHBlbmRDaGlsZChlbmVteUdhbWVib2FyZEVsZW1lbnQucmVuZGVyKCkpO1xufVxuXG5mdW5jdGlvbiBzZXR1cENvbXB1dGVyUGxheWVyKCkge1xuICBlbmVteUdhbWVib2FyZCA9IG5ldyBHYW1lYm9hcmQoKTtcbiAgZW5lbXkgPSBuZXcgUGxheWVyKGVuZW15R2FtZWJvYXJkLCAnZW5lbXknKTtcbn1cblxuZnVuY3Rpb24gc2V0dXBIdW1hblBsYXllcigpIHtcbiAgaHVtYW5HYW1lYm9hcmQgPSBuZXcgR2FtZWJvYXJkKCk7XG4gIGh1bWFuID0gbmV3IFBsYXllcihodW1hbkdhbWVib2FyZCwgJ2h1bWFuJyk7XG59XG5cbmZ1bmN0aW9uIHJhbmRvbWl6ZUNvbXB1dGVyR2FtZWJvYXJkKCkge1xuICBlbmVteUdhbWVib2FyZC5yZXNldCgpO1xuICBlbmVteUdhbWVib2FyZEVsZW1lbnQucmVzZXQoKTtcblxuICBlbmVteS5wbGFjZVJhbmRvbVNoaXBzKCk7XG4gIGVuZW15R2FtZWJvYXJkRWxlbWVudC5jcmVhdGVTaGlwcygpO1xuICBlbmVteUdhbWVib2FyZEVsZW1lbnQucmVuZGVyU2hpcHMoKTtcbn1cblxuZnVuY3Rpb24gcmFuZG9taXplSHVtYW5HYW1lYm9hcmQoKSB7XG4gIGh1bWFuR2FtZWJvYXJkLnJlc2V0KCk7XG4gIGh1bWFuR2FtZWJvYXJkRWxlbWVudC5yZXNldCgpO1xuXG4gIGh1bWFuLnBsYWNlUmFuZG9tU2hpcHMoKTtcbiAgaHVtYW5HYW1lYm9hcmRFbGVtZW50LmNyZWF0ZVNoaXBzKCk7XG4gIGh1bWFuR2FtZWJvYXJkRWxlbWVudC5yZW5kZXJTaGlwcygpO1xufVxuXG5mdW5jdGlvbiBzZXR1cEdhbWUoKSB7XG4gIGN1cnJlbnRQbGF5ZXIgPSBodW1hbjtcbiAgZW5lbXlHYW1lYm9hcmRFbGVtZW50LmRpc2FibGUoKTtcbiAgaHVtYW5HYW1lYm9hcmRFbGVtZW50LmRpc2FibGUoKTtcbiAgY3VycmVudEdhbWVib2FyZEVsZW1lbnQgPSBlbmVteUdhbWVib2FyZEVsZW1lbnQ7XG5cbiAgcmFuZG9taXplQnV0dG9uLmRpc2FibGVkID0gZmFsc2U7XG4gIHBsYXlCdXR0b24uZGlzYWJsZWQgPSBmYWxzZTtcblxuICBtZXNzYWdlLnNldExvYWRpbmdTaGlwcygpO1xuICBzZXRUaW1lb3V0KCgpID0+IHJhbmRvbWl6ZUdhbWVib2FyZHMoKSk7XG4gIHNldFRpbWVvdXQoKCkgPT4gbWVzc2FnZS5zZXRJbnN0cnVjdGlvbigpKTtcbn1cblxuY29uc3QgbmV3R2FtZUJ1dHRvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCduZXctZ2FtZS1idG4nKTtcbm5ld0dhbWVCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gIHNldHVwR2FtZSgpO1xufSk7XG5cbmNvbnN0IHJhbmRvbWl6ZUJ1dHRvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdyYW5kb21pemUtYnRuJyk7XG5yYW5kb21pemVCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gIHJhbmRvbWl6ZUh1bWFuR2FtZWJvYXJkKCk7XG59KTtcblxuY29uc3QgcGxheUJ1dHRvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwbGF5LWJ0bicpO1xucGxheUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHBsYXkpO1xuXG5sZXQgZW5lbXlHYW1lYm9hcmRFbGVtZW50O1xubGV0IGh1bWFuR2FtZWJvYXJkRWxlbWVudDtcbmxldCBjdXJyZW50R2FtZWJvYXJkRWxlbWVudDtcbmxldCBlbmVteUdhbWVib2FyZDtcbmxldCBodW1hbkdhbWVib2FyZDtcbmxldCBlbmVteTtcbmxldCBodW1hbjtcbmxldCBjdXJyZW50UGxheWVyO1xuY29uc3QgZW5lbXlDb250YWluZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZ2FtZWJvYXJkLWNvbnRhaW5lci1lbmVteScpO1xuY29uc3QgaHVtYW5Db250YWluZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZ2FtZWJvYXJkLWNvbnRhaW5lci1odW1hbicpO1xubWVzc2FnZS5zZXRFbGVtZW50KGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdtZXNzYWdlJykpO1xuXG5zZXR1cEh1bWFuUGxheWVyKCk7XG5zZXR1cENvbXB1dGVyUGxheWVyKCk7XG5zZXR1cENvbXB1dGVyR2FtZWJvYXJkRWxlbWVudCgpO1xuc2V0dXBIdW1hbkdhbWVib2FyZEVsZW1lbnQoKTtcblxuc2V0dXBHYW1lKCk7XG4iLCJpbXBvcnQgU2hpcCBmcm9tICcuL3NoaXAnO1xuXG5jbGFzcyBCYXR0bGVzaGlwIGV4dGVuZHMgU2hpcCB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHN1cGVyKDQpO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEJhdHRsZXNoaXA7XG4iLCJjbGFzcyBDZWxsIHtcbiAgY29uc3RydWN0b3IoeCwgeSkge1xuICAgIHRoaXMueCA9IHg7XG4gICAgdGhpcy55ID0geTtcbiAgfVxuXG4gIG9mZnNldCh4LCB5KSB7XG4gICAgcmV0dXJuIG5ldyBDZWxsKHRoaXMueCArIHgsIHRoaXMueSArIHkpO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IENlbGw7XG4iLCJpbXBvcnQgU2hpcCBmcm9tICcuL3NoaXAnO1xuXG5jbGFzcyBEZXN0cm95ZXIgZXh0ZW5kcyBTaGlwIHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgc3VwZXIoMyk7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgRGVzdHJveWVyO1xuIiwiaW1wb3J0IENlbGwgZnJvbSAnLi9jZWxsJztcbmltcG9ydCBnZXRSYW5kb21JbnQgZnJvbSAnLi9oZWxwZXJzJztcblxuY2xhc3MgR2FtZWJvYXJkIHtcbiAgI3NoaXBzID0gW107XG4gICNtaXNzZXMgPSBbXTtcblxuICBjb25zdHJ1Y3RvcihzaXplID0gMTApIHtcbiAgICB0aGlzLnNpemUgPSBzaXplO1xuICAgIHRoaXMuY2VsbHMgPSBbXTtcbiAgICB0aGlzLiNjcmVhdGVDZWxscygpO1xuICB9XG5cbiAgcGxhY2VTaGlwKHNoaXAsIHgsIHkpIHtcbiAgICBzaGlwLnBsYWNlKHgsIHksIHRoaXMpO1xuICAgIHRoaXMuI3NoaXBzLnB1c2goc2hpcCk7XG4gIH1cblxuICByZWNlaXZlQXR0YWNrKHgsIHkpIHtcbiAgICBjb25zdCBoaXRTaGlwID0gdGhpcy4jZ2V0U2hpcE9uQ2VsbCh4LCB5KTtcbiAgICBpZiAoaGl0U2hpcCkge1xuICAgICAgaGl0U2hpcC5oaXQoeCwgeSk7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy4jbWlzc2VzLnB1c2gobmV3IENlbGwoeCwgeSkpO1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgfVxuXG4gIGFsbFNoaXBzU3VuaygpIHtcbiAgICByZXR1cm4gdGhpcy4jc2hpcHMuZXZlcnkoKHNoaXApID0+IHNoaXAuaXNTdW5rKCkpO1xuICB9XG5cbiAgZ2V0U2hpcHMoKSB7XG4gICAgcmV0dXJuIFsuLi50aGlzLiNzaGlwc107XG4gIH1cblxuICBnZXRNaXNzZXMoKSB7XG4gICAgcmV0dXJuIFsuLi50aGlzLiNtaXNzZXNdO1xuICB9XG5cbiAgZ2V0SGl0cygpIHtcbiAgICByZXR1cm4gdGhpcy4jc2hpcHMuZmxhdE1hcCgoc2hpcCkgPT4gc2hpcC5nZXRIaXRzKCkpO1xuICB9XG5cbiAgaXNTaGlwT25DZWxsKHgsIHkpIHtcbiAgICByZXR1cm4gISF0aGlzLiNnZXRTaGlwT25DZWxsKHgsIHkpO1xuICB9XG5cbiAgZ2V0Q2VsbEF0KHgsIHkpIHtcbiAgICByZXR1cm4gdGhpcy5jZWxscy5maW5kKChjZWxsKSA9PiBjZWxsLnggPT09IHggJiYgY2VsbC55ID09PSB5KTtcbiAgfVxuXG4gIG9mZnNldENlbGwoY2VsbCwgeCwgeSkge1xuICAgIHJldHVybiB0aGlzLmdldENlbGxBdChjZWxsLnggKyB4LCBjZWxsLnkgKyB5KTtcbiAgfVxuXG4gIGlzRXhpc3RpbmdTaG90KHgsIHkpIHtcbiAgICByZXR1cm4gISF0aGlzLiNnZXRIaXRPbkNlbGwoeCwgeSkgfHwgISF0aGlzLiNnZXRNaXNzT25DZWxsKHgsIHkpO1xuICB9XG5cbiAgZ2V0UmFuZG9tUG9zaXRpb24oKSB7XG4gICAgY29uc3QgeCA9IGdldFJhbmRvbUludCh0aGlzLnNpemUpO1xuICAgIGNvbnN0IHkgPSBnZXRSYW5kb21JbnQodGhpcy5zaXplKTtcblxuICAgIHJldHVybiBbeCwgeV07XG4gIH1cblxuICByZXNldCgpIHtcbiAgICB0aGlzLiNzaGlwcyA9IFtdO1xuICAgIHRoaXMuI21pc3NlcyA9IFtdO1xuICB9XG5cbiAgI2NyZWF0ZUNlbGxzKCkge1xuICAgIGZvciAobGV0IHkgPSAwOyB5IDwgdGhpcy5zaXplOyB5KyspIHtcbiAgICAgIGZvciAobGV0IHggPSAwOyB4IDwgdGhpcy5zaXplOyB4KyspIHtcbiAgICAgICAgY29uc3QgY2VsbCA9IG5ldyBDZWxsKHgsIHkpO1xuICAgICAgICB0aGlzLmNlbGxzLnB1c2goY2VsbCk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgI2dldEhpdE9uQ2VsbCh4LCB5KSB7XG4gICAgY29uc3QgaGl0cyA9IHRoaXMuZ2V0SGl0cygpO1xuICAgIHJldHVybiBoaXRzLmZpbmQoKGNlbGwpID0+IHggPT09IGNlbGwueCAmJiB5ID09PSBjZWxsLnkpO1xuICB9XG5cbiAgI2dldE1pc3NPbkNlbGwoeCwgeSkge1xuICAgIHJldHVybiB0aGlzLiNtaXNzZXMuZmluZCgoY2VsbCkgPT4geCA9PT0gY2VsbC54ICYmIHkgPT09IGNlbGwueSk7XG4gIH1cblxuICAjZ2V0U2hpcE9uQ2VsbCh4LCB5KSB7XG4gICAgcmV0dXJuIHRoaXMuI3NoaXBzLmZpbmQoKHNoaXApID0+IHtcbiAgICAgIGNvbnN0IHNoaXBCYWNrID0gc2hpcC5iYWNrKCk7XG4gICAgICBjb25zdCBzaGlwRnJvbnQgPSBzaGlwLmZyb250KCk7XG5cbiAgICAgIGlmIChzaGlwLm9yaWVudGF0aW9uID09PSAnaG9yaXpvbnRhbCcpIHtcbiAgICAgICAgcmV0dXJuIHggPj0gc2hpcEJhY2sueCAmJiB4IDw9IHNoaXBGcm9udC54ICYmIHkgPT09IHNoaXAueTtcbiAgICAgIH0gZWxzZSBpZiAoc2hpcC5vcmllbnRhdGlvbiA9PT0gJ3ZlcnRpY2FsJykge1xuICAgICAgICByZXR1cm4geSA+PSBzaGlwQmFjay55ICYmIHkgPD0gc2hpcEZyb250LnkgJiYgeCA9PT0gc2hpcC54O1xuICAgICAgfVxuICAgIH0pO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEdhbWVib2FyZDtcbiIsImZ1bmN0aW9uIGdldFJhbmRvbUludChtYXgpIHtcbiAgcmV0dXJuIE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIG1heCk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGdldFJhbmRvbUludDtcbiIsImltcG9ydCBTaGlwIGZyb20gJy4vc2hpcCc7XG5cbmNsYXNzIFBhdHJvbEJvYXQgZXh0ZW5kcyBTaGlwIHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgc3VwZXIoMSk7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgUGF0cm9sQm9hdDtcbiIsImltcG9ydCBnZXRSYW5kb21JbnQgZnJvbSAnLi9oZWxwZXJzJztcbmltcG9ydCB7IGdhbWVib2FyZFNoaXBzLCBoYXNBZGphY2VudFNoaXBzIH0gZnJvbSAnLi9ydWxlcyc7XG5pbXBvcnQgeyBoYXNPdmVybGFwcGluZ1NoaXBzLCBoYXNPdXRPZkJvdW5kc1NoaXBzIH0gZnJvbSAnLi9ydWxlcyc7XG5cbmNsYXNzIFBsYXllciB7XG4gIGNvbnN0cnVjdG9yKGdhbWVib2FyZCwgbmFtZSkge1xuICAgIHRoaXMuZ2FtZWJvYXJkID0gZ2FtZWJvYXJkO1xuICAgIHRoaXMubmFtZSA9IG5hbWU7XG4gIH1cblxuICBwbGF5KG9wcG9zaXRpb25HYW1lYm9hcmQpIHtcbiAgICBjb25zdCBoaXRzID0gb3Bwb3NpdGlvbkdhbWVib2FyZC5nZXRIaXRzKCk7XG4gICAgY29uc3QgbWlzc2VzID0gb3Bwb3NpdGlvbkdhbWVib2FyZC5nZXRNaXNzZXMoKTtcbiAgICBjb25zdCBzaG90cyA9IGhpdHMuY29uY2F0KG1pc3Nlcyk7XG4gICAgY29uc3QgYXZhaWxhYmxlQ2VsbHMgPSB0aGlzLiNnZXRBdmFpbGFibGVDZWxscyhvcHBvc2l0aW9uR2FtZWJvYXJkLCBzaG90cyk7XG5cbiAgICBjb25zdCByYW5kb21JbmRleCA9IGdldFJhbmRvbUludChhdmFpbGFibGVDZWxscy5sZW5ndGgpO1xuICAgIGNvbnN0IHJhbmRvbUNlbGwgPSBhdmFpbGFibGVDZWxsc1tyYW5kb21JbmRleF07XG4gICAgcmV0dXJuIHJhbmRvbUNlbGw7XG4gIH1cblxuICBwbGFjZVNoaXBzKHNoaXBzKSB7XG4gICAgaWYgKHRoaXMuI2FsbFNoaXBzSW5WYWxpZFBvc2l0aW9ucyhzaGlwcykpIHtcbiAgICAgIHNoaXBzLmZvckVhY2goKHNoaXApID0+IHRoaXMuZ2FtZWJvYXJkLnBsYWNlU2hpcChzaGlwLCBzaGlwLngsIHNoaXAueSkpO1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuXG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgcGxhY2VSYW5kb21TaGlwcygpIHtcbiAgICBsZXQgc2hpcHNJblZhbGlkUG9zaXRpb24gPSBmYWxzZTtcblxuICAgIHdoaWxlICghc2hpcHNJblZhbGlkUG9zaXRpb24pIHtcbiAgICAgIGNvbnN0IHNoaXBzID0gdGhpcy4jY3JlYXRlUmFuZG9tU2hpcHMoKTtcblxuICAgICAgaWYgKHRoaXMuI2FsbFNoaXBzSW5WYWxpZFBvc2l0aW9ucyhzaGlwcykpIHtcbiAgICAgICAgc2hpcHNJblZhbGlkUG9zaXRpb24gPSB0cnVlO1xuICAgICAgICBzaGlwcy5mb3JFYWNoKChzaGlwKSA9PiB0aGlzLmdhbWVib2FyZC5wbGFjZVNoaXAoc2hpcCwgc2hpcC54LCBzaGlwLnkpKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAjYWxsU2hpcHNJblZhbGlkUG9zaXRpb25zKHNoaXBzKSB7XG4gICAgcmV0dXJuIChcbiAgICAgICFoYXNPdmVybGFwcGluZ1NoaXBzKHNoaXBzKSAmJlxuICAgICAgIWhhc091dE9mQm91bmRzU2hpcHMoc2hpcHMsIHRoaXMuZ2FtZWJvYXJkKSAmJlxuICAgICAgIWhhc0FkamFjZW50U2hpcHMoc2hpcHMsIHRoaXMuZ2FtZWJvYXJkKVxuICAgICk7XG4gIH1cblxuICAjY3JlYXRlUmFuZG9tU2hpcHMoKSB7XG4gICAgY29uc3Qgc2hpcHMgPSBbXTtcblxuICAgIGdhbWVib2FyZFNoaXBzLmZvckVhY2goKGJvYXJkU2hpcCkgPT4ge1xuICAgICAgZm9yIChsZXQgaW5kZXggPSAwOyBpbmRleCA8IGJvYXJkU2hpcC5jb3VudDsgaW5kZXgrKykge1xuICAgICAgICBjb25zdCBzaGlwID0gdGhpcy4jY3JlYXRlU2hpcFdpdGhSYW5kb21PcmllbnRhdGlvbihib2FyZFNoaXApO1xuICAgICAgICBjb25zdCBbeCwgeV0gPSB0aGlzLmdhbWVib2FyZC5nZXRSYW5kb21Qb3NpdGlvbigpO1xuICAgICAgICBzaGlwLnBsYWNlKHgsIHksIHRoaXMuZ2FtZWJvYXJkKTtcbiAgICAgICAgc2hpcHMucHVzaChzaGlwKTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIHJldHVybiBzaGlwcztcbiAgfVxuXG4gICNjcmVhdGVTaGlwV2l0aFJhbmRvbU9yaWVudGF0aW9uKGJvYXJkU2hpcCkge1xuICAgIGNvbnN0IHNoaXAgPSBuZXcgYm9hcmRTaGlwLnR5cGUoKTtcbiAgICBzaGlwLnNldFJhbmRvbU9yaWVudGF0aW9uKCk7XG4gICAgcmV0dXJuIHNoaXA7XG4gIH1cblxuICAjZ2V0QXZhaWxhYmxlQ2VsbHMoZ2FtZWJvYXJkLCBzaG90cykge1xuICAgIHJldHVybiBnYW1lYm9hcmQuY2VsbHMuZmlsdGVyKChjZWxsKSA9PiB7XG4gICAgICBjb25zdCBmb3VuZCA9IHNob3RzLmZpbmQoKHNob3QpID0+IHtcbiAgICAgICAgcmV0dXJuIGNlbGwueCA9PT0gc2hvdC54ICYmIGNlbGwueSA9PT0gc2hvdC55O1xuICAgICAgfSk7XG4gICAgICByZXR1cm4gIWZvdW5kO1xuICAgIH0pO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFBsYXllcjtcbiIsImltcG9ydCBCYXR0bGVzaGlwIGZyb20gJy4vYmF0dGxlc2hpcCc7XG5pbXBvcnQgRGVzdHJveWVyIGZyb20gJy4vZGVzdHJveWVyJztcbmltcG9ydCBQYXRyb2xCb2F0IGZyb20gJy4vcGF0cm9sQm9hdCc7XG5pbXBvcnQgU3VibWFyaW5lIGZyb20gJy4vc3VibWFyaW5lJztcblxuY29uc3QgZ2FtZWJvYXJkU2hpcHMgPSBbXG4gIHtcbiAgICBjb3VudDogMSxcbiAgICB0eXBlOiBCYXR0bGVzaGlwLFxuICB9LFxuICB7XG4gICAgY291bnQ6IDIsXG4gICAgdHlwZTogRGVzdHJveWVyLFxuICB9LFxuICB7XG4gICAgY291bnQ6IDMsXG4gICAgdHlwZTogU3VibWFyaW5lLFxuICB9LFxuICB7XG4gICAgY291bnQ6IDQsXG4gICAgdHlwZTogUGF0cm9sQm9hdCxcbiAgfSxcbl07XG5cbmZ1bmN0aW9uIGhhc091dE9mQm91bmRzU2hpcHMoc2hpcHMsIGdhbWVib2FyZCkge1xuICBjb25zdCBzb21lU2hpcEdvZXNPdXRPZkJvdW5kcyA9IHNoaXBzLnNvbWUoKHNoaXApID0+IHtcbiAgICBpZiAoc2hpcC5vcmllbnRhdGlvbiA9PT0gJ2hvcml6b250YWwnKSB7XG4gICAgICByZXR1cm4gc2hpcC54ID4gZ2FtZWJvYXJkLnNpemUgLSBzaGlwLmxlbmd0aDtcbiAgICB9IGVsc2UgaWYgKHNoaXAub3JpZW50YXRpb24gPT09ICd2ZXJ0aWNhbCcpIHtcbiAgICAgIHJldHVybiBzaGlwLnkgPiBnYW1lYm9hcmQuc2l6ZSAtIHNoaXAubGVuZ3RoO1xuICAgIH1cbiAgfSk7XG5cbiAgcmV0dXJuIHNvbWVTaGlwR29lc091dE9mQm91bmRzO1xufVxuXG5mdW5jdGlvbiBoYXNPdmVybGFwcGluZ1NoaXBzKHNoaXBzKSB7XG4gIGNvbnN0IHNvbWVTaGlwT3ZlcmxhcHNBbm90aGVyU2hpcCA9IHNoaXBzLnNvbWUoKHNoaXApID0+IHtcbiAgICBjb25zdCBvdGhlclNoaXBzID0gc2hpcHMuZmlsdGVyKChvdGhlclNoaXApID0+IG90aGVyU2hpcCAhPT0gc2hpcCk7XG5cbiAgICBjb25zdCBzb21lQ2VsbHNPdmVybGFwID0gb3RoZXJTaGlwcy5zb21lKChvdGhlclNoaXApID0+IHtcbiAgICAgIHJldHVybiBvdGhlclNoaXAuY2VsbHMuc29tZSgoY2VsbCkgPT4gc2hpcC5jZWxscy5pbmNsdWRlcyhjZWxsKSk7XG4gICAgfSk7XG5cbiAgICByZXR1cm4gc29tZUNlbGxzT3ZlcmxhcDtcbiAgfSk7XG5cbiAgcmV0dXJuIHNvbWVTaGlwT3ZlcmxhcHNBbm90aGVyU2hpcDtcbn1cblxuZnVuY3Rpb24gaGFzQWRqYWNlbnRTaGlwcyhzaGlwcywgZ2FtZWJvYXJkKSB7XG4gIHJldHVybiAoXG4gICAgc29tZVNoaXBJc1RvVGhlUmlnaHQoc2hpcHMsIGdhbWVib2FyZCkgfHxcbiAgICBzb21lU2hpcElzQXRUaGVUb3Aoc2hpcHMsIGdhbWVib2FyZClcbiAgKTtcbn1cblxuZnVuY3Rpb24gc29tZVNoaXBJc1RvVGhlUmlnaHQoc2hpcHMsIGdhbWVib2FyZCkge1xuICByZXR1cm4gc2hpcHMuc29tZSgoc2hpcCkgPT4ge1xuICAgIGlmIChzaGlwQWdhaW5zdFJpZ2h0V2FsbChzaGlwLCBnYW1lYm9hcmQpKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuXG4gICAgY29uc3Qgb3RoZXJTaGlwcyA9IHNoaXBzLmZpbHRlcigob3RoZXJTaGlwKSA9PiBvdGhlclNoaXAgIT09IHNoaXApO1xuICAgIGNvbnN0IHJpZ2h0Q2VsbHMgPSBnZXRDZWxsc1RvVGhlUmlnaHQoZ2FtZWJvYXJkLCBzaGlwKTtcblxuICAgIGNvbnN0IHNvbWVTaGlwQ2VsbElzVG9UaGVSaWdodCA9IG90aGVyU2hpcHMuc29tZSgob3RoZXJTaGlwKSA9PiB7XG4gICAgICByZXR1cm4gcmlnaHRDZWxscy5zb21lKChyaWdodENlbGwpID0+XG4gICAgICAgIG90aGVyU2hpcC5jZWxscy5pbmNsdWRlcyhyaWdodENlbGwpLFxuICAgICAgKTtcbiAgICB9KTtcblxuICAgIHJldHVybiBzb21lU2hpcENlbGxJc1RvVGhlUmlnaHQ7XG4gIH0pO1xufVxuXG5mdW5jdGlvbiBnZXRDZWxsc1RvVGhlUmlnaHQoZ2FtZWJvYXJkLCBzaGlwKSB7XG4gIGNvbnN0IHJpZ2h0Q2VsbHMgPSBbXTtcbiAgbGV0IHJpZ2h0Q2VsbDtcblxuICBpZiAoc2hpcC5vcmllbnRhdGlvbiA9PT0gJ2hvcml6b250YWwnKSB7XG4gICAgY29uc3Qgc2hpcEZyb250ID0gc2hpcC5mcm9udCgpO1xuXG4gICAgcmlnaHRDZWxsID0gZ2FtZWJvYXJkLm9mZnNldENlbGwoc2hpcEZyb250LCAxLCAtMSk7XG4gICAgcmlnaHRDZWxscy5wdXNoKHJpZ2h0Q2VsbCk7XG5cbiAgICByaWdodENlbGwgPSBnYW1lYm9hcmQub2Zmc2V0Q2VsbChzaGlwRnJvbnQsIDEsIDApO1xuICAgIHJpZ2h0Q2VsbHMucHVzaChyaWdodENlbGwpO1xuXG4gICAgcmlnaHRDZWxsID0gZ2FtZWJvYXJkLm9mZnNldENlbGwoc2hpcEZyb250LCAxLCAxKTtcbiAgICByaWdodENlbGxzLnB1c2gocmlnaHRDZWxsKTtcblxuICAgIHJldHVybiByaWdodENlbGxzO1xuICB9IGVsc2UgaWYgKHNoaXAub3JpZW50YXRpb24gPT09ICd2ZXJ0aWNhbCcpIHtcbiAgICBzaGlwLmNlbGxzLmZvckVhY2goKGNlbGwpID0+IHtcbiAgICAgIHJpZ2h0Q2VsbCA9IGdhbWVib2FyZC5vZmZzZXRDZWxsKGNlbGwsIDEsIDApO1xuICAgICAgcmlnaHRDZWxscy5wdXNoKHJpZ2h0Q2VsbCk7XG4gICAgfSk7XG5cbiAgICByZXR1cm4gcmlnaHRDZWxscztcbiAgfVxufVxuXG5mdW5jdGlvbiBzb21lU2hpcElzQXRUaGVUb3Aoc2hpcHMsIGdhbWVib2FyZCkge1xuICByZXR1cm4gc2hpcHMuc29tZSgoc2hpcCkgPT4ge1xuICAgIGlmIChzaGlwQWdhaW5zdFRvcFdhbGwoc2hpcCkpIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG5cbiAgICBjb25zdCBvdGhlclNoaXBzID0gc2hpcHMuZmlsdGVyKChvdGhlclNoaXApID0+IG90aGVyU2hpcCAhPT0gc2hpcCk7XG4gICAgY29uc3QgdG9wQ2VsbHMgPSBnZXRDZWxsc0F0VGhlVG9wKGdhbWVib2FyZCwgc2hpcCk7XG5cbiAgICBjb25zdCBzb21lU2hpcENlbGxJc0F0VGhlVG9wID0gb3RoZXJTaGlwcy5zb21lKChvdGhlclNoaXApID0+IHtcbiAgICAgIHJldHVybiB0b3BDZWxscy5zb21lKCh0b3BDZWxsKSA9PiBvdGhlclNoaXAuY2VsbHMuaW5jbHVkZXModG9wQ2VsbCkpO1xuICAgIH0pO1xuXG4gICAgcmV0dXJuIHNvbWVTaGlwQ2VsbElzQXRUaGVUb3A7XG4gIH0pO1xufVxuXG5mdW5jdGlvbiBnZXRDZWxsc0F0VGhlVG9wKGdhbWVib2FyZCwgc2hpcCkge1xuICBjb25zdCB0b3BDZWxscyA9IFtdO1xuICBsZXQgdG9wQ2VsbDtcblxuICBpZiAoc2hpcC5vcmllbnRhdGlvbiA9PT0gJ2hvcml6b250YWwnKSB7XG4gICAgc2hpcC5jZWxscy5mb3JFYWNoKChjZWxsKSA9PiB7XG4gICAgICB0b3BDZWxsID0gZ2FtZWJvYXJkLm9mZnNldENlbGwoY2VsbCwgMCwgLTEpO1xuICAgICAgdG9wQ2VsbHMucHVzaCh0b3BDZWxsKTtcbiAgICB9KTtcblxuICAgIHJldHVybiB0b3BDZWxscztcbiAgfSBlbHNlIGlmIChzaGlwLm9yaWVudGF0aW9uID09PSAndmVydGljYWwnKSB7XG4gICAgY29uc3Qgc2hpcEJhY2sgPSBzaGlwLmJhY2soKTtcblxuICAgIHRvcENlbGwgPSBnYW1lYm9hcmQub2Zmc2V0Q2VsbChzaGlwQmFjaywgLTEsIC0xKTtcbiAgICB0b3BDZWxscy5wdXNoKHRvcENlbGwpO1xuXG4gICAgdG9wQ2VsbCA9IGdhbWVib2FyZC5vZmZzZXRDZWxsKHNoaXBCYWNrLCAwLCAtMSk7XG4gICAgdG9wQ2VsbHMucHVzaCh0b3BDZWxsKTtcblxuICAgIHRvcENlbGwgPSBnYW1lYm9hcmQub2Zmc2V0Q2VsbChzaGlwQmFjaywgMSwgLTEpO1xuICAgIHRvcENlbGxzLnB1c2godG9wQ2VsbCk7XG5cbiAgICByZXR1cm4gdG9wQ2VsbHM7XG4gIH1cbn1cblxuZnVuY3Rpb24gc2hpcEFnYWluc3RSaWdodFdhbGwoc2hpcCwgZ2FtZWJvYXJkKSB7XG4gIHJldHVybiBzaGlwLmZyb250KCkueCA9PT0gZ2FtZWJvYXJkLnNpemUgLSAxO1xufVxuXG5mdW5jdGlvbiBzaGlwQWdhaW5zdFRvcFdhbGwoc2hpcCkge1xuICByZXR1cm4gc2hpcC55ID09PSAwO1xufVxuXG5leHBvcnQge1xuICBnYW1lYm9hcmRTaGlwcyxcbiAgaGFzT3ZlcmxhcHBpbmdTaGlwcyxcbiAgaGFzT3V0T2ZCb3VuZHNTaGlwcyxcbiAgaGFzQWRqYWNlbnRTaGlwcyxcbn07XG4iLCJpbXBvcnQgQ2VsbCBmcm9tICcuL2NlbGwnO1xuaW1wb3J0IGdldFJhbmRvbUludCBmcm9tICcuL2hlbHBlcnMnO1xuXG5jbGFzcyBTaGlwIHtcbiAgI2hpdHMgPSBbXTtcblxuICBjb25zdHJ1Y3RvcihsZW5ndGggPSAxKSB7XG4gICAgdGhpcy5sZW5ndGggPSBsZW5ndGg7XG4gICAgdGhpcy5vcmllbnRhdGlvbiA9ICdob3Jpem9udGFsJztcbiAgICB0aGlzLiNoaXRzID0gW107XG4gIH1cblxuICBoaXQoeCwgeSkge1xuICAgIHRoaXMuI2hpdHMucHVzaChuZXcgQ2VsbCh4LCB5KSk7XG4gIH1cblxuICBpc1N1bmsoKSB7XG4gICAgcmV0dXJuIHRoaXMuI2hpdHMubGVuZ3RoID09PSB0aGlzLmxlbmd0aDtcbiAgfVxuXG4gIHBsYWNlKHgsIHksIGdhbWVib2FyZCkge1xuICAgIHRoaXMueCA9IHg7XG4gICAgdGhpcy55ID0geTtcblxuICAgIHRoaXMuI3NldENlbGxzKGdhbWVib2FyZCk7XG4gIH1cblxuICBnZXRIaXRzKCkge1xuICAgIHJldHVybiBbLi4udGhpcy4jaGl0c107XG4gIH1cblxuICBzZXRWZXJ0aWNhbCgpIHtcbiAgICB0aGlzLm9yaWVudGF0aW9uID0gJ3ZlcnRpY2FsJztcbiAgfVxuXG4gIHNldEhvcml6b250YWwoKSB7XG4gICAgdGhpcy5vcmllbnRhdGlvbiA9ICdob3Jpem9udGFsJztcbiAgfVxuXG4gIHNldFJhbmRvbU9yaWVudGF0aW9uKCkge1xuICAgIGNvbnN0IG9yaWVudGF0aW9ucyA9IFsnaG9yaXpvbnRhbCcsICd2ZXJ0aWNhbCddO1xuICAgIGNvbnN0IGluZGV4ID0gZ2V0UmFuZG9tSW50KG9yaWVudGF0aW9ucy5sZW5ndGgpO1xuICAgIHRoaXMub3JpZW50YXRpb24gPSBvcmllbnRhdGlvbnNbaW5kZXhdO1xuICB9XG5cbiAgZnJvbnQoKSB7XG4gICAgcmV0dXJuIHRoaXMuY2VsbHMuYXQoLTEpO1xuICB9XG5cbiAgYmFjaygpIHtcbiAgICByZXR1cm4gdGhpcy5jZWxscy5hdCgwKTtcbiAgfVxuXG4gICNzZXRDZWxscyhnYW1lYm9hcmQpIHtcbiAgICB0aGlzLmNlbGxzID0gZ2FtZWJvYXJkLmNlbGxzLmZpbHRlcigoY2VsbCkgPT4ge1xuICAgICAgaWYgKHRoaXMub3JpZW50YXRpb24gPT09ICdob3Jpem9udGFsJykge1xuICAgICAgICBjb25zdCBiYWNrID0gdGhpcy54O1xuICAgICAgICBjb25zdCBmcm9udCA9IHRoaXMueCArIHRoaXMubGVuZ3RoIC0gMTtcblxuICAgICAgICByZXR1cm4gY2VsbC54ID49IGJhY2sgJiYgY2VsbC54IDw9IGZyb250ICYmIGNlbGwueSA9PT0gdGhpcy55O1xuICAgICAgfSBlbHNlIGlmICh0aGlzLm9yaWVudGF0aW9uID09PSAndmVydGljYWwnKSB7XG4gICAgICAgIGNvbnN0IGJhY2sgPSB0aGlzLnk7XG4gICAgICAgIGNvbnN0IGZyb250ID0gdGhpcy55ICsgdGhpcy5sZW5ndGggLSAxO1xuXG4gICAgICAgIHJldHVybiBjZWxsLnkgPj0gYmFjayAmJiBjZWxsLnkgPD0gZnJvbnQgJiYgY2VsbC54ID09PSB0aGlzLng7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgU2hpcDtcbiIsImltcG9ydCBTaGlwIGZyb20gJy4vc2hpcCc7XG5cbmNsYXNzIFN1Ym1hcmluZSBleHRlbmRzIFNoaXAge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICBzdXBlcigyKTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBTdWJtYXJpbmU7XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=