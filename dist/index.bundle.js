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
  #disabled = true;
  #disableClick = true;
  #cells = [];
  #ships = [];
  controller = undefined;

  constructor(owner, handleTurnCallback) {
    this.owner = owner;
    this.controller = owner.gameboard;
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

  disableClick() {
    this.#disableClick = true;
  }

  enableClick() {
    this.#disableClick = false;
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
    const ships = this.controller.getShips();
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
    const cells = this.controller.cells;

    cells.forEach((cell) => {
      const x = cell.x;
      const y = cell.y;
      const cellDOM = new _cell__WEBPACK_IMPORTED_MODULE_0__["default"](x, y, this.isDisabled());
      this.#cells.push(cellDOM);
    });
  }

  #enableHoverOnAllOpenCells() {
    this.#cells.forEach((cellDOM) => {
      if (!this.controller.isExistingShot(cellDOM.x, cellDOM.y)) {
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
    if (this.#disableClick) {
      return;
    }

    const clickData = {};
    clickData.cell = event.cell;
    clickData.gameboard = {
      controller: this.controller,
      owner: this.owner,
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






function isPlayerClickingOwnGameboard(clickedGameboardElement, clicker) {
  const humanClickedOwnGameboard =
    clickedGameboardElement.owner === human && clicker === human;

  const computerClickedOwnGameboard =
    clickedGameboardElement.owner === enemy && clicker === enemy;

  return humanClickedOwnGameboard || computerClickedOwnGameboard;
}

function enemyPlay() {
  enemy.play(humanGameboard, humanGameboardElement);
}

async function delay(time) {
  await new Promise((resolve) => setTimeout(resolve, time));
}

async function nextTurn() {
  currentGameboardElement.disable();
  setNextPlayer();

  if (currentPlayer === enemy) {
    _dom_message__WEBPACK_IMPORTED_MODULE_4__["default"].setEnemyTurn();
    currentGameboardElement = humanGameboardElement;
    currentGameboardElement.enable();
    currentGameboardElement.enableClick();
    currentGameboardElement.disableHoverOnAllCells();

    await delay(2000);
    enemyPlay();
  } else {
    _dom_message__WEBPACK_IMPORTED_MODULE_4__["default"].setHumanTurn();
    currentGameboardElement = enemyGameboardElement;
    currentGameboardElement.enable();
    currentGameboardElement.enableClick();
  }
}

function validateShot({ gameboard: gameboardElement, pointerType, cell }) {
  const result = {
    valid: true,
  };

  if (pointerType === 'mouse') {
    result.clicker = human;
  } else if (pointerType === '') {
    result.clicker = enemy;
  }

  const playerClickingOwnGameboard = isPlayerClickingOwnGameboard(
    gameboardElement,
    result.clicker,
  );

  if (playerClickingOwnGameboard) {
    result.valid = false;
    result.reason = 'playerClickingOwnGameboard';
    return result;
  }

  // if (gameboardElement.disabled) {
  //   return true;
  // }

  if (gameboardElement.controller.isExistingShot(cell.x, cell.y)) {
    result.valid = false;
    result.reason = 'isExistingShot';
    return result;
  }
}

function attackGameboard(gameboardElement, cell) {
  return gameboardElement.controller.receiveAttack(cell.x, cell.y);
}

async function handleTurn(clickData) {
  const { gameboard: gameboardElement, cell } = clickData;

  const validityResult = validateShot(clickData);

  if (!validityResult.valid) {
    if (validityResult.reason === 'playerClickingOwnGameboard') {
      if (validityResult.clicker === enemy) {
        enemyPlay();
        return;
      }

      if (validityResult.clicker === human) {
        return;
      }
    }

    if (validityResult.reason === 'isExistingShot') {
      if (validityResult.clicker === enemy) {
        enemyPlay();
        return;
      }

      if (validityResult.clicker === human) {
        return;
      }
    }
  }

  const attackResult = attackGameboard(gameboardElement, cell);

  if (attackResult.hit) {
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
      } else {
        if (attackResult.ship.isSunk()) {
          // --clear any stored shipToSink in enemy player
          enemy.shipToSink.reset();
        } else {
          // -- store the shipToSink in player to continue searching for hits on next turn if they miss with the next shot
          enemy.shipToSink.ship = attackResult.ship;
        }

        await delay(2000);
        enemyPlay();
      }
    }
  } else {
    renderMiss(cell);
    currentGameboardElement.disableClick();
    await delay(2000);
    nextTurn();
  }
}

function setNextPlayer() {
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

function play() {
  enemyGameboardElement.enable();
  enemyGameboardElement.enableClick();
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

function randomizeGameboard(gameboardElement) {
  _dom_message__WEBPACK_IMPORTED_MODULE_4__["default"].setLoadingShips();
  setTimeout(() => {
    gameboardElement.controller.reset();
    gameboardElement.reset();

    gameboardElement.owner.placeRandomShips();
    gameboardElement.createShips();
    gameboardElement.renderShips();
  });
  setTimeout(() => _dom_message__WEBPACK_IMPORTED_MODULE_4__["default"].setInstruction());
}

function setupGame() {
  currentPlayer = human;
  enemyGameboardElement.disable();
  humanGameboardElement.disable();
  currentGameboardElement = enemyGameboardElement;

  randomizeButton.disabled = false;
  playButton.disabled = false;

  randomizeGameboard(enemyGameboardElement);
  randomizeGameboard(humanGameboardElement);
}

const newGameButton = document.getElementById('new-game-btn');
newGameButton.addEventListener('click', () => {
  setupGame();
});

const randomizeButton = document.getElementById('randomize-btn');
randomizeButton.addEventListener('click', () => {
  randomizeGameboard(humanGameboardElement);
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
      return { hit: true, ship: hitShip };
    } else {
      this.#misses.push(new _cell__WEBPACK_IMPORTED_MODULE_0__["default"](x, y));
      return { hit: false, ship: undefined };
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
    this.shipToSink = {
      ship: undefined,
      shots: [],
      reset() {
        this.ship = undefined;
        this.shots.length = 0;
      },
    };
  }

  #hitAgainstTopWall(hit) {
    return hit.y === 0;
  }

  #hitAgainstRightWall(hit, gameboard) {
    return hit.x === gameboard.size - 1;
  }

  #hitAgainstBottomWall(hit, gameboard) {
    return hit.y === gameboard.size - 1;
  }

  #hitAgainstLeftWall(hit) {
    return hit.x === 0;
  }

  play(targetGameboard, targetGameboardElement) {
    let nextShot;

    if (this.shipToSink.ship) {
      // ships with length >= 2 && ships with hit >= 1
      const ship = this.shipToSink.ship;
      const shots = this.shipToSink.shots;
      const hits = ship.getHits();

      if (hits.length === 1) {
        const onlyHit = hits.at(0);
        const top = targetGameboard.offsetCell(onlyHit, 0, -1);
        const right = targetGameboard.offsetCell(onlyHit, 1, 0);
        const bottom = targetGameboard.offsetCell(onlyHit, 0, 1);
        const left = targetGameboard.offsetCell(onlyHit, -1, 0);

        const potentialHits = [];
        if (!this.#hitAgainstTopWall(onlyHit) && !shots.includes(top)) {
          potentialHits.push(top);
        }
        if (
          !this.#hitAgainstRightWall(onlyHit, targetGameboard) &&
          !shots.includes(right)
        ) {
          potentialHits.push(right);
        }
        if (
          !this.#hitAgainstBottomWall(onlyHit, targetGameboard) &&
          !shots.includes(bottom)
        ) {
          potentialHits.push(bottom);
        }
        if (!this.#hitAgainstLeftWall(onlyHit) && !shots.includes(left)) {
          potentialHits.push(left);
        }

        const randomIndex = (0,_helpers__WEBPACK_IMPORTED_MODULE_0__["default"])(potentialHits.length);
        nextShot = potentialHits[randomIndex];
      } else {
        // --if hit array length is > 1
        if (ship.orientation === 'horizontal') {
          // ---order hits by x
          const xHits = hits.toSorted((a, b) => Math.sign(a.x - b.x));
          const firstHit = xHits.at(0);
          const lastHit = xHits.at(-1);
          const left = targetGameboard.offsetCell(firstHit, -1, 0);
          const right = targetGameboard.offsetCell(lastHit, 1, 0);

          const potentialHits = [];
          if (!this.#hitAgainstLeftWall(firstHit) && !shots.includes(left)) {
            potentialHits.push(left);
          }
          if (
            !this.#hitAgainstRightWall(lastHit, targetGameboard) &&
            !shots.includes(right)
          ) {
            potentialHits.push(right);
          }

          const randomIndex = (0,_helpers__WEBPACK_IMPORTED_MODULE_0__["default"])(potentialHits.length);
          nextShot = potentialHits[randomIndex];
        }

        if (ship.orientation === 'vertical') {
          // ---order hits by y
          const yHits = hits.toSorted((a, b) => Math.sign(a.y - b.y));
          const firstHit = yHits.at(0);
          const lastHit = yHits.at(-1);
          const top = targetGameboard.offsetCell(firstHit, 0, -1);
          const bottom = targetGameboard.offsetCell(lastHit, 0, 1);

          const potentialHits = [];
          if (!this.#hitAgainstTopWall(firstHit) && !shots.includes(top)) {
            potentialHits.push(top);
          }
          if (
            !this.#hitAgainstBottomWall(lastHit, targetGameboard) &&
            !shots.includes(bottom)
          ) {
            potentialHits.push(bottom);
          }

          const randomIndex = (0,_helpers__WEBPACK_IMPORTED_MODULE_0__["default"])(potentialHits.length);
          nextShot = potentialHits[randomIndex];
        }
      }

      this.shipToSink.shots.push(nextShot);
    } else {
      const hits = targetGameboard.getHits();
      const misses = targetGameboard.getMisses();
      const shots = hits.concat(misses);
      const availableCells = this.#getAvailableCells(targetGameboard, shots);

      const randomIndex = (0,_helpers__WEBPACK_IMPORTED_MODULE_0__["default"])(availableCells.length);
      nextShot = availableCells[randomIndex];
    }

    const cellDOM = targetGameboardElement.getCellDOM(nextShot.x, nextShot.y);
    cellDOM.render().click();
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
/* harmony export */   hasOverlappingShips: () => (/* binding */ hasOverlappingShips),
/* harmony export */   shipAgainstBottomWall: () => (/* binding */ shipAgainstBottomWall),
/* harmony export */   shipAgainstLeftWall: () => (/* binding */ shipAgainstLeftWall),
/* harmony export */   shipAgainstRightWall: () => (/* binding */ shipAgainstRightWall),
/* harmony export */   shipAgainstTopWall: () => (/* binding */ shipAgainstTopWall)
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

function shipAgainstTopWall(ship) {
  return ship.y === 0;
}

function shipAgainstRightWall(ship, gameboard) {
  return ship.front().x === gameboard.size - 1;
}

function shipAgainstBottomWall(ship, gameboard) {
  return ship.front().y === gameboard.size - 1;
}

function shipAgainstLeftWall(ship) {
  return ship.x === 0;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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O0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsUUFBUTtBQUNSO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDBCQUEwQiw2Q0FBSTtBQUM5QjtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1AsS0FBSztBQUNMOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsMEJBQTBCLDZDQUFJO0FBQzlCO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFB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QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQSxJQUFJO0FBQ0o7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFXRTs7Ozs7Ozs7Ozs7Ozs7Ozs7QUM1S3dCO0FBQ1c7O0FBRXJDO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLHdCQUF3Qiw2Q0FBSTtBQUM1Qjs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLGtCQUFrQixvREFBWTtBQUM5QjtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLFFBQVE7QUFDUjtBQUNBOztBQUVBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTs7QUFFQSxpRUFBZSxJQUFJLEVBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7QUN0RU07O0FBRTFCLHdCQUF3Qiw2Q0FBSTtBQUM1QjtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxpRUFBZSxTQUFTLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly93ZWJwYWNrLXRlbXBsYXRlLy4vc3JjL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly93ZWJwYWNrLXRlbXBsYXRlLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLXRlbXBsYXRlLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vd2VicGFjay10ZW1wbGF0ZS8uL3NyYy9zdHlsZS5jc3M/NzE2MyIsIndlYnBhY2s6Ly93ZWJwYWNrLXRlbXBsYXRlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL3dlYnBhY2stdGVtcGxhdGUvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL3dlYnBhY2stdGVtcGxhdGUvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vd2VicGFjay10ZW1wbGF0ZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLXRlbXBsYXRlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vd2VicGFjay10ZW1wbGF0ZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL3dlYnBhY2stdGVtcGxhdGUvLi9zcmMvZG9tL2NlbGwuanMiLCJ3ZWJwYWNrOi8vd2VicGFjay10ZW1wbGF0ZS8uL3NyYy9kb20vZ2FtZWJvYXJkLmpzIiwid2VicGFjazovL3dlYnBhY2stdGVtcGxhdGUvLi9zcmMvZG9tL21lc3NhZ2UuanMiLCJ3ZWJwYWNrOi8vd2VicGFjay10ZW1wbGF0ZS8uL3NyYy9kb20vc2hpcC5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLXRlbXBsYXRlLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovL3dlYnBhY2stdGVtcGxhdGUvLi9zcmMvbG9naWMvYmF0dGxlc2hpcC5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLXRlbXBsYXRlLy4vc3JjL2xvZ2ljL2NlbGwuanMiLCJ3ZWJwYWNrOi8vd2VicGFjay10ZW1wbGF0ZS8uL3NyYy9sb2dpYy9kZXN0cm95ZXIuanMiLCJ3ZWJwYWNrOi8vd2VicGFjay10ZW1wbGF0ZS8uL3NyYy9sb2dpYy9nYW1lYm9hcmQuanMiLCJ3ZWJwYWNrOi8vd2VicGFjay10ZW1wbGF0ZS8uL3NyYy9sb2dpYy9oZWxwZXJzLmpzIiwid2VicGFjazovL3dlYnBhY2stdGVtcGxhdGUvLi9zcmMvbG9naWMvcGF0cm9sQm9hdC5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLXRlbXBsYXRlLy4vc3JjL2xvZ2ljL3BsYXllci5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLXRlbXBsYXRlLy4vc3JjL2xvZ2ljL3J1bGVzLmpzIiwid2VicGFjazovL3dlYnBhY2stdGVtcGxhdGUvLi9zcmMvbG9naWMvc2hpcC5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLXRlbXBsYXRlLy4vc3JjL2xvZ2ljL3N1Ym1hcmluZS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBgKiB7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIG1hcmdpbjogMDtcbn1cblxuI21haW4tbGF5b3V0IHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIG1hcmdpbjogMXJlbTtcbn1cblxuI2NvbnRlbnQtbGF5b3V0IHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgZ2FwOiAxcmVtO1xufVxuXG4uYnV0dG9uLWNvbnRhaW5lciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBnYXA6IDFyZW07XG59XG5cbi5ib2FyZC1sYWJlbCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuXG4uZ2FtZWJvYXJkIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG5cbi5nYW1lYm9hcmQtMCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG59XG5cbi5nYW1lYm9hcmQtMC1ibGFuayB7XG4gIHdpZHRoOiAzMHB4O1xuICBoZWlnaHQ6IDMwcHg7XG59XG5cbi5nYW1lYm9hcmQtMC1sYWJlbCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICB3aWR0aDogMzBweDtcbiAgaGVpZ2h0OiAzMHB4O1xuICBib3JkZXItcmlnaHQ6IDFweCBzb2xpZCBibGFjaztcbn1cblxuLmdhbWVib2FyZC0xIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbn1cblxuLmdhbWVib2FyZC0xLTAge1xuICBkaXNwbGF5OiBmbGV4O1xufVxuXG4uZ2FtZWJvYXJkLTEtMC1sYWJlbCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICB3aWR0aDogMzBweDtcbiAgaGVpZ2h0OiAzMHB4O1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgYmxhY2s7XG59XG5cbi5nYW1lYm9hcmQtMS0xIHtcbiAgZGlzcGxheTogZ3JpZDtcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMTAsIDMwcHgpO1xuICBncmlkLXRlbXBsYXRlLXJvd3M6IHJlcGVhdCgxMCwgMzBweCk7XG59XG5cbi5nYW1lYm9hcmQtMS0xLWNlbGwge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgYm9yZGVyLXJpZ2h0OiAxcHggc29saWQgYmxhY2s7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCBibGFjaztcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4uaG92ZXI6aG92ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB5ZWxsb3c7XG59XG5cbi5maWxsIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XG59XG5cbi5oaXQge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjA3LCAyNTUsIDEzNik7XG59XG5cbi5taXNzIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI1NSwgMjA5LCAxMjMpO1xufVxuXG4uZGlzYWJsZWQge1xuICBmaWx0ZXI6IGNvbnRyYXN0KDIwJSk7XG59XG5cbmJ1dHRvbiB7XG4gIHdpZHRoOiAxMDBweDtcbn1cblxuI2VuZW15LWJvYXJkLWxhYmVsIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogb3JhbmdlO1xufVxuXG4jaHVtYW4tYm9hcmQtbGFiZWwge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBncmVlbnllbGxvdztcbn1cblxuI21lc3NhZ2UtY29udGFpbmVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG5cbiNtZXNzYWdlIHtcbiAgY29sb3I6IGJsdWU7XG59XG5gLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7RUFDRSxzQkFBc0I7RUFDdEIsU0FBUztBQUNYOztBQUVBO0VBQ0UsYUFBYTtFQUNiLHVCQUF1QjtFQUN2QixZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLFNBQVM7QUFDWDs7QUFFQTtFQUNFLGFBQWE7RUFDYix1QkFBdUI7RUFDdkIsU0FBUztBQUNYOztBQUVBO0VBQ0UsYUFBYTtFQUNiLHVCQUF1QjtBQUN6Qjs7QUFFQTtFQUNFLGFBQWE7RUFDYix1QkFBdUI7QUFDekI7O0FBRUE7RUFDRSxhQUFhO0VBQ2Isc0JBQXNCO0FBQ3hCOztBQUVBO0VBQ0UsV0FBVztFQUNYLFlBQVk7QUFDZDs7QUFFQTtFQUNFLGFBQWE7RUFDYix1QkFBdUI7RUFDdkIsbUJBQW1CO0VBQ25CLFdBQVc7RUFDWCxZQUFZO0VBQ1osNkJBQTZCO0FBQy9COztBQUVBO0VBQ0UsYUFBYTtFQUNiLHNCQUFzQjtBQUN4Qjs7QUFFQTtFQUNFLGFBQWE7QUFDZjs7QUFFQTtFQUNFLGFBQWE7RUFDYix1QkFBdUI7RUFDdkIsbUJBQW1CO0VBQ25CLFdBQVc7RUFDWCxZQUFZO0VBQ1osOEJBQThCO0FBQ2hDOztBQUVBO0VBQ0UsYUFBYTtFQUNiLHVDQUF1QztFQUN2QyxvQ0FBb0M7QUFDdEM7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsdUJBQXVCO0VBQ3ZCLG1CQUFtQjtFQUNuQiw2QkFBNkI7RUFDN0IsOEJBQThCO0VBQzlCLGVBQWU7QUFDakI7O0FBRUE7RUFDRSx3QkFBd0I7QUFDMUI7O0FBRUE7RUFDRSx1QkFBdUI7QUFDekI7O0FBRUE7RUFDRSxvQ0FBb0M7QUFDdEM7O0FBRUE7RUFDRSxvQ0FBb0M7QUFDdEM7O0FBRUE7RUFDRSxxQkFBcUI7QUFDdkI7O0FBRUE7RUFDRSxZQUFZO0FBQ2Q7O0FBRUE7RUFDRSx3QkFBd0I7QUFDMUI7O0FBRUE7RUFDRSw2QkFBNkI7QUFDL0I7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsdUJBQXVCO0FBQ3pCOztBQUVBO0VBQ0UsV0FBVztBQUNiXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIioge1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gIG1hcmdpbjogMDtcXG59XFxuXFxuI21haW4tbGF5b3V0IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIG1hcmdpbjogMXJlbTtcXG59XFxuXFxuI2NvbnRlbnQtbGF5b3V0IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgZ2FwOiAxcmVtO1xcbn1cXG5cXG4uYnV0dG9uLWNvbnRhaW5lciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBnYXA6IDFyZW07XFxufVxcblxcbi5ib2FyZC1sYWJlbCB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxufVxcblxcbi5nYW1lYm9hcmQge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbn1cXG5cXG4uZ2FtZWJvYXJkLTAge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxufVxcblxcbi5nYW1lYm9hcmQtMC1ibGFuayB7XFxuICB3aWR0aDogMzBweDtcXG4gIGhlaWdodDogMzBweDtcXG59XFxuXFxuLmdhbWVib2FyZC0wLWxhYmVsIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICB3aWR0aDogMzBweDtcXG4gIGhlaWdodDogMzBweDtcXG4gIGJvcmRlci1yaWdodDogMXB4IHNvbGlkIGJsYWNrO1xcbn1cXG5cXG4uZ2FtZWJvYXJkLTEge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxufVxcblxcbi5nYW1lYm9hcmQtMS0wIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxufVxcblxcbi5nYW1lYm9hcmQtMS0wLWxhYmVsIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICB3aWR0aDogMzBweDtcXG4gIGhlaWdodDogMzBweDtcXG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCBibGFjaztcXG59XFxuXFxuLmdhbWVib2FyZC0xLTEge1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDEwLCAzMHB4KTtcXG4gIGdyaWQtdGVtcGxhdGUtcm93czogcmVwZWF0KDEwLCAzMHB4KTtcXG59XFxuXFxuLmdhbWVib2FyZC0xLTEtY2VsbCB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgYm9yZGVyLXJpZ2h0OiAxcHggc29saWQgYmxhY2s7XFxuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgYmxhY2s7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi5ob3Zlcjpob3ZlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB5ZWxsb3c7XFxufVxcblxcbi5maWxsIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xcbn1cXG5cXG4uaGl0IHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigyMDcsIDI1NSwgMTM2KTtcXG59XFxuXFxuLm1pc3Mge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI1NSwgMjA5LCAxMjMpO1xcbn1cXG5cXG4uZGlzYWJsZWQge1xcbiAgZmlsdGVyOiBjb250cmFzdCgyMCUpO1xcbn1cXG5cXG5idXR0b24ge1xcbiAgd2lkdGg6IDEwMHB4O1xcbn1cXG5cXG4jZW5lbXktYm9hcmQtbGFiZWwge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogb3JhbmdlO1xcbn1cXG5cXG4jaHVtYW4tYm9hcmQtbGFiZWwge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogZ3JlZW55ZWxsb3c7XFxufVxcblxcbiNtZXNzYWdlLWNvbnRhaW5lciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxufVxcblxcbiNtZXNzYWdlIHtcXG4gIGNvbG9yOiBibHVlO1xcbn1cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107XG5cbiAgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07XG5cbiAgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiB1cGRhdGVyO1xufVxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpO1xuXG4gICAgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG4gIGNzcyArPSBvYmouY3NzO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9XG5cbiAgLy8gRm9yIG9sZCBJRVxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICBpZiAodHlwZW9mIGRvY3VtZW50ID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKCkge30sXG4gICAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHt9XG4gICAgfTtcbiAgfVxuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiY2xhc3MgQ2VsbCB7XG4gICNlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5cbiAgY29uc3RydWN0b3IoeCwgeSwgZGlzYWJsZWQpIHtcbiAgICB0aGlzLnggPSB4O1xuICAgIHRoaXMueSA9IHk7XG5cbiAgICB0aGlzLiNlbGVtZW50LmNsYXNzTGlzdC5hZGQoJ2dhbWVib2FyZC0xLTEtY2VsbCcpO1xuICAgIHRoaXMuI2VsZW1lbnQudGV4dENvbnRlbnQgPSBgJHt4fSwgJHt5fWA7XG5cbiAgICBpZiAoZGlzYWJsZWQpIHtcbiAgICAgIHRoaXMuZGlzYWJsZUhvdmVyKCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuZW5hYmxlSG92ZXIoKTtcbiAgICB9XG5cbiAgICB0aGlzLiNlbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGV2ZW50KSA9PiB7XG4gICAgICB0aGlzLiNoYW5kbGVDbGljayhldmVudCk7XG4gICAgfSk7XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuIHRoaXMuI2VsZW1lbnQ7XG4gIH1cblxuICBlbmFibGVGaWxsKCkge1xuICAgIHRoaXMuI2VsZW1lbnQuY2xhc3NMaXN0LmFkZCgnZmlsbCcpO1xuICB9XG5cbiAgZW5hYmxlTWlzcygpIHtcbiAgICB0aGlzLiNlbGVtZW50LmNsYXNzTGlzdC5hZGQoJ21pc3MnKTtcbiAgfVxuXG4gIGVuYWJsZUhpdCgpIHtcbiAgICB0aGlzLiNlbGVtZW50LmNsYXNzTGlzdC5hZGQoJ2hpdCcpO1xuICB9XG5cbiAgZW5hYmxlSG92ZXIoKSB7XG4gICAgdGhpcy4jZWxlbWVudC5jbGFzc0xpc3QuYWRkKCdob3ZlcicpO1xuICB9XG5cbiAgZGlzYWJsZUhvdmVyKCkge1xuICAgIHRoaXMuI2VsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZSgnaG92ZXInKTtcbiAgfVxuXG4gICNoYW5kbGVDbGljayhldmVudCkge1xuICAgIGV2ZW50LmNlbGwgPSB0aGlzO1xuICB9XG5cbiAgcmVzZXQoKSB7XG4gICAgdGhpcy4jZGlzYWJsZUZpbGwoKTtcbiAgICB0aGlzLiNkaXNhYmxlSGl0KCk7XG4gICAgdGhpcy4jZGlzYWJsZU1pc3MoKTtcbiAgfVxuXG4gICNkaXNhYmxlRmlsbCgpIHtcbiAgICB0aGlzLiNlbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoJ2ZpbGwnKTtcbiAgfVxuXG4gICNkaXNhYmxlTWlzcygpIHtcbiAgICB0aGlzLiNlbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoJ21pc3MnKTtcbiAgfVxuXG4gICNkaXNhYmxlSGl0KCkge1xuICAgIHRoaXMuI2VsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZSgnaGl0Jyk7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgQ2VsbDtcbiIsImltcG9ydCBDZWxsIGZyb20gJy4vY2VsbCc7XG5pbXBvcnQgU2hpcCBmcm9tICcuL3NoaXAnO1xuXG5jbGFzcyBHYW1lYm9hcmQge1xuICAjZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAjZGlzYWJsZWQgPSB0cnVlO1xuICAjZGlzYWJsZUNsaWNrID0gdHJ1ZTtcbiAgI2NlbGxzID0gW107XG4gICNzaGlwcyA9IFtdO1xuICBjb250cm9sbGVyID0gdW5kZWZpbmVkO1xuXG4gIGNvbnN0cnVjdG9yKG93bmVyLCBoYW5kbGVUdXJuQ2FsbGJhY2spIHtcbiAgICB0aGlzLm93bmVyID0gb3duZXI7XG4gICAgdGhpcy5jb250cm9sbGVyID0gb3duZXIuZ2FtZWJvYXJkO1xuICAgIHRoaXMuaGFuZGxlVHVybkNhbGxiYWNrID0gaGFuZGxlVHVybkNhbGxiYWNrO1xuXG4gICAgdGhpcy4jZWxlbWVudC5jbGFzc0xpc3QuYWRkKCdnYW1lYm9hcmQnKTtcblxuICAgIHRoaXMuY3JlYXRlTGFiZWxzTGVmdENvbnRhaW5lcigpO1xuICAgIHRoaXMuY3JlYXRlTGFiZWxzTGVmdCgpO1xuXG4gICAgdGhpcy5jcmVhdGVHYW1lYm9hcmQxKCk7XG5cbiAgICB0aGlzLmNyZWF0ZUxhYmVsc1RvcENvbnRhaW5lcigpO1xuICAgIHRoaXMuY3JlYXRlTGFiZWxzVG9wKCk7XG5cbiAgICB0aGlzLmNyZWF0ZUdyaWQoKTtcbiAgICB0aGlzLiNjcmVhdGVDZWxscygpO1xuICAgIHRoaXMucmVuZGVyQ2VsbHMoKTtcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gdGhpcy4jZWxlbWVudDtcbiAgfVxuXG4gIGFwcGVuZENoaWxkKGVsZW1lbnQpIHtcbiAgICB0aGlzLiNlbGVtZW50LmFwcGVuZENoaWxkKGVsZW1lbnQpO1xuICB9XG5cbiAgZGlzYWJsZUNsaWNrKCkge1xuICAgIHRoaXMuI2Rpc2FibGVDbGljayA9IHRydWU7XG4gIH1cblxuICBlbmFibGVDbGljaygpIHtcbiAgICB0aGlzLiNkaXNhYmxlQ2xpY2sgPSBmYWxzZTtcbiAgfVxuXG4gIGRpc2FibGUoKSB7XG4gICAgdGhpcy4jZGlzYWJsZWQgPSB0cnVlO1xuICAgIHRoaXMuI2VsZW1lbnQuY2xhc3NMaXN0LmFkZCgnZGlzYWJsZWQnKTtcblxuICAgIHRoaXMuZGlzYWJsZUhvdmVyT25BbGxDZWxscygpO1xuICB9XG5cbiAgZGlzYWJsZUhvdmVyT25BbGxDZWxscygpIHtcbiAgICB0aGlzLiNjZWxscy5mb3JFYWNoKChjZWxsRE9NKSA9PiB7XG4gICAgICBjZWxsRE9NLmRpc2FibGVIb3ZlcigpO1xuICAgIH0pO1xuICB9XG5cbiAgZW5hYmxlKCkge1xuICAgIHRoaXMuI2Rpc2FibGVkID0gZmFsc2U7XG4gICAgdGhpcy4jZWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKCdkaXNhYmxlZCcpO1xuXG4gICAgdGhpcy4jZW5hYmxlSG92ZXJPbkFsbE9wZW5DZWxscygpO1xuICB9XG5cbiAgaXNEaXNhYmxlZCgpIHtcbiAgICByZXR1cm4gdGhpcy4jZGlzYWJsZWQ7XG4gIH1cblxuICBjcmVhdGVMYWJlbHNMZWZ0Q29udGFpbmVyKCkge1xuICAgIGNvbnN0IGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBlbGVtZW50LmNsYXNzTGlzdC5hZGQoJ2dhbWVib2FyZC0wJyk7XG4gICAgdGhpcy5hcHBlbmRDaGlsZChlbGVtZW50KTtcblxuICAgIHRoaXMubGFiZWxzTGVmdENvbnRhaW5lciA9IGVsZW1lbnQ7XG4gIH1cblxuICBjcmVhdGVMYWJlbHNMZWZ0KCkge1xuICAgIGNvbnN0IGxhYmVscyA9IFsnJywgJzEnLCAnMicsICczJywgJzQnLCAnNScsICc2JywgJzcnLCAnOCcsICc5JywgJzEwJ107XG5cbiAgICBsYWJlbHMuZm9yRWFjaCgobGFiZWwsIGluZGV4KSA9PiB7XG4gICAgICBjb25zdCBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5cbiAgICAgIGlmIChpbmRleCA9PT0gMCkge1xuICAgICAgICBlbGVtZW50LmNsYXNzTGlzdC5hZGQoJ2dhbWVib2FyZC0wLWJsYW5rJyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBlbGVtZW50LmNsYXNzTGlzdC5hZGQoJ2dhbWVib2FyZC0wLWxhYmVsJyk7XG4gICAgICB9XG5cbiAgICAgIGVsZW1lbnQudGV4dENvbnRlbnQgPSBsYWJlbDtcbiAgICAgIHRoaXMubGFiZWxzTGVmdENvbnRhaW5lci5hcHBlbmRDaGlsZChlbGVtZW50KTtcbiAgICB9KTtcbiAgfVxuXG4gIGNyZWF0ZUdhbWVib2FyZDEoKSB7XG4gICAgY29uc3QgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGVsZW1lbnQuY2xhc3NMaXN0LmFkZCgnZ2FtZWJvYXJkLTEnKTtcbiAgICB0aGlzLmFwcGVuZENoaWxkKGVsZW1lbnQpO1xuXG4gICAgdGhpcy5nYW1lYm9hcmRfMSA9IGVsZW1lbnQ7XG4gIH1cblxuICBjcmVhdGVMYWJlbHNUb3BDb250YWluZXIoKSB7XG4gICAgY29uc3QgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGVsZW1lbnQuY2xhc3NMaXN0LmFkZCgnZ2FtZWJvYXJkLTEtMCcpO1xuICAgIHRoaXMuZ2FtZWJvYXJkXzEuYXBwZW5kQ2hpbGQoZWxlbWVudCk7XG5cbiAgICB0aGlzLmxhYmVsc1RvcENvbnRhaW5lciA9IGVsZW1lbnQ7XG4gIH1cblxuICBjcmVhdGVMYWJlbHNUb3AoKSB7XG4gICAgY29uc3QgbGFiZWxzID0gWydBJywgJ0InLCAnQycsICdEJywgJ0UnLCAnRicsICdHJywgJ0gnLCAnSScsICdKJ107XG5cbiAgICBsYWJlbHMuZm9yRWFjaCgobGFiZWwpID0+IHtcbiAgICAgIGNvbnN0IGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcblxuICAgICAgZWxlbWVudC5jbGFzc0xpc3QuYWRkKCdnYW1lYm9hcmQtMS0wLWxhYmVsJyk7XG5cbiAgICAgIGVsZW1lbnQudGV4dENvbnRlbnQgPSBsYWJlbDtcbiAgICAgIHRoaXMubGFiZWxzVG9wQ29udGFpbmVyLmFwcGVuZENoaWxkKGVsZW1lbnQpO1xuICAgIH0pO1xuICB9XG5cbiAgY3JlYXRlR3JpZCgpIHtcbiAgICBjb25zdCBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgZWxlbWVudC5jbGFzc0xpc3QuYWRkKCdnYW1lYm9hcmQtMS0xJyk7XG4gICAgdGhpcy5nYW1lYm9hcmRfMS5hcHBlbmRDaGlsZChlbGVtZW50KTtcblxuICAgIHRoaXMuZ2FtZWJvYXJkXzFfMSA9IGVsZW1lbnQ7XG5cbiAgICB0aGlzLmdhbWVib2FyZF8xXzEuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZXZlbnQpID0+IHtcbiAgICAgIHRoaXMuI2hhbmRsZUNsaWNrKGV2ZW50KTtcbiAgICB9KTtcbiAgfVxuXG4gIGNyZWF0ZVNoaXBzKCkge1xuICAgIGNvbnN0IHNoaXBzID0gdGhpcy5jb250cm9sbGVyLmdldFNoaXBzKCk7XG4gICAgc2hpcHMuZm9yRWFjaCgoc2hpcCkgPT4ge1xuICAgICAgY29uc3QgY2VsbERPTXMgPSB0aGlzLiNnZXRTaGlwQ2VsbERPTXMoc2hpcCk7XG4gICAgICBjb25zdCBzaGlwRE9NID0gbmV3IFNoaXAoc2hpcC54LCBzaGlwLnksIHNoaXAubGVuZ3RoLCBjZWxsRE9Ncyk7XG4gICAgICB0aGlzLiNzaGlwcy5wdXNoKHNoaXBET00pO1xuICAgIH0pO1xuICB9XG5cbiAgZ2V0Q2VsbERPTSh4LCB5KSB7XG4gICAgcmV0dXJuIHRoaXMuI2NlbGxzLmZpbmQoKGNlbGxET00pID0+IHtcbiAgICAgIHJldHVybiBjZWxsRE9NLnggPT09IHggJiYgY2VsbERPTS55ID09PSB5O1xuICAgIH0pO1xuICB9XG5cbiAgcmVuZGVyQ2VsbHMoKSB7XG4gICAgdGhpcy4jY2VsbHMuZm9yRWFjaCgoY2VsbERPTSkgPT4ge1xuICAgICAgdGhpcy5nYW1lYm9hcmRfMV8xLmFwcGVuZENoaWxkKGNlbGxET00ucmVuZGVyKCkpO1xuICAgIH0pO1xuICB9XG5cbiAgcmVuZGVyU2hpcHMoKSB7XG4gICAgdGhpcy4jc2hpcHMuZm9yRWFjaCgoc2hpcERPTSkgPT4ge1xuICAgICAgY29uc3QgY2VsbERPTXMgPSBzaGlwRE9NLmNlbGxzO1xuICAgICAgY2VsbERPTXMuZm9yRWFjaCgoY2VsbERPTSkgPT4ge1xuICAgICAgICBjZWxsRE9NLmVuYWJsZUZpbGwoKTtcbiAgICAgIH0pO1xuICAgIH0pO1xuICB9XG5cbiAgcmVzZXQoKSB7XG4gICAgdGhpcy4jc2hpcHMgPSBbXTtcbiAgICB0aGlzLiNjZWxscy5mb3JFYWNoKChjZWxsRE9NKSA9PiBjZWxsRE9NLnJlc2V0KCkpO1xuICB9XG5cbiAgI2NyZWF0ZUNlbGxzKCkge1xuICAgIGNvbnN0IGNlbGxzID0gdGhpcy5jb250cm9sbGVyLmNlbGxzO1xuXG4gICAgY2VsbHMuZm9yRWFjaCgoY2VsbCkgPT4ge1xuICAgICAgY29uc3QgeCA9IGNlbGwueDtcbiAgICAgIGNvbnN0IHkgPSBjZWxsLnk7XG4gICAgICBjb25zdCBjZWxsRE9NID0gbmV3IENlbGwoeCwgeSwgdGhpcy5pc0Rpc2FibGVkKCkpO1xuICAgICAgdGhpcy4jY2VsbHMucHVzaChjZWxsRE9NKTtcbiAgICB9KTtcbiAgfVxuXG4gICNlbmFibGVIb3Zlck9uQWxsT3BlbkNlbGxzKCkge1xuICAgIHRoaXMuI2NlbGxzLmZvckVhY2goKGNlbGxET00pID0+IHtcbiAgICAgIGlmICghdGhpcy5jb250cm9sbGVyLmlzRXhpc3RpbmdTaG90KGNlbGxET00ueCwgY2VsbERPTS55KSkge1xuICAgICAgICBjZWxsRE9NLmVuYWJsZUhvdmVyKCk7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICAjZ2V0U2hpcENlbGxET01zKHNoaXApIHtcbiAgICBjb25zdCBzaGlwQmFjayA9IHNoaXAuYmFjaygpO1xuICAgIGNvbnN0IHNoaXBGcm9udCA9IHNoaXAuZnJvbnQoKTtcblxuICAgIHJldHVybiB0aGlzLiNjZWxscy5maWx0ZXIoKGNlbGxET00pID0+IHtcbiAgICAgIGlmIChzaGlwLm9yaWVudGF0aW9uID09PSAnaG9yaXpvbnRhbCcpIHtcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICBjZWxsRE9NLnggPj0gc2hpcEJhY2sueCAmJlxuICAgICAgICAgIGNlbGxET00ueCA8PSBzaGlwRnJvbnQueCAmJlxuICAgICAgICAgIGNlbGxET00ueSA9PT0gc2hpcC55XG4gICAgICAgICk7XG4gICAgICB9IGVsc2UgaWYgKHNoaXAub3JpZW50YXRpb24gPT09ICd2ZXJ0aWNhbCcpIHtcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICBjZWxsRE9NLnkgPj0gc2hpcEJhY2sueSAmJlxuICAgICAgICAgIGNlbGxET00ueSA8PSBzaGlwRnJvbnQueSAmJlxuICAgICAgICAgIGNlbGxET00ueCA9PT0gc2hpcC54XG4gICAgICAgICk7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICAjaGFuZGxlQ2xpY2soZXZlbnQpIHtcbiAgICBpZiAodGhpcy4jZGlzYWJsZUNsaWNrKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgY29uc3QgY2xpY2tEYXRhID0ge307XG4gICAgY2xpY2tEYXRhLmNlbGwgPSBldmVudC5jZWxsO1xuICAgIGNsaWNrRGF0YS5nYW1lYm9hcmQgPSB7XG4gICAgICBjb250cm9sbGVyOiB0aGlzLmNvbnRyb2xsZXIsXG4gICAgICBvd25lcjogdGhpcy5vd25lcixcbiAgICAgIGRpc2FibGVkOiB0aGlzLmlzRGlzYWJsZWQoKSxcbiAgICB9O1xuICAgIGNsaWNrRGF0YS5wb2ludGVyVHlwZSA9IGV2ZW50LnBvaW50ZXJUeXBlO1xuXG4gICAgdGhpcy5oYW5kbGVUdXJuQ2FsbGJhY2soY2xpY2tEYXRhKTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBHYW1lYm9hcmQ7XG4iLCJsZXQgZWxlbWVudDtcblxuY29uc3QgbWVzc2FnZSA9IHtcbiAgc2V0RWxlbWVudChkaXYpIHtcbiAgICBlbGVtZW50ID0gZGl2O1xuICB9LFxuICBzZXRFbmVteVR1cm4oKSB7XG4gICAgZWxlbWVudC50ZXh0Q29udGVudCA9IFwiRW5lbXkncyB0dXJuIVwiO1xuICB9LFxuICBzZXRIdW1hblR1cm4oKSB7XG4gICAgZWxlbWVudC50ZXh0Q29udGVudCA9ICdZb3VyIHR1cm4hJztcbiAgfSxcbiAgc2V0RW5lbXlXb24oKSB7XG4gICAgZWxlbWVudC50ZXh0Q29udGVudCA9ICdFbmVteSB3b24hJztcbiAgfSxcbiAgc2V0SHVtYW5Xb24oKSB7XG4gICAgZWxlbWVudC50ZXh0Q29udGVudCA9ICdZb3Ugd29uISc7XG4gIH0sXG4gIHNldEluc3RydWN0aW9uKCkge1xuICAgIGVsZW1lbnQudGV4dENvbnRlbnQgPVxuICAgICAgXCJSYW5kb21pemUgeW91ciBzaGlwcyB1bnRpbCB5b3UncmUgaGFwcHkgd2l0aCB0aGVpciBwb3NpdGlvbnMsIHRoZW4gcHJlc3MgUGxheSFcIjtcbiAgfSxcbiAgc2V0TG9hZGluZ1NoaXBzKCkge1xuICAgIGVsZW1lbnQudGV4dENvbnRlbnQgPSAnTG9hZGluZyByYW5kb20gc2hpcHMuLi4nO1xuICB9LFxuICB0ZXh0KCkge1xuICAgIHJldHVybiBlbGVtZW50LnRleHRDb250ZW50O1xuICB9LFxufTtcblxuZXhwb3J0IGRlZmF1bHQgbWVzc2FnZTtcbiIsImNsYXNzIFNoaXAge1xuICBjb25zdHJ1Y3Rvcih4LCB5LCBsZW5ndGgsIGNlbGxzKSB7XG4gICAgdGhpcy54ID0geDtcbiAgICB0aGlzLnkgPSB5O1xuICAgIHRoaXMubGVuZ3RoID0gbGVuZ3RoO1xuICAgIHRoaXMuY2VsbHMgPSBjZWxscztcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBTaGlwO1xuIiwiaW1wb3J0ICcuL3N0eWxlLmNzcyc7XG5pbXBvcnQgUGxheWVyIGZyb20gJy4vbG9naWMvcGxheWVyJztcbmltcG9ydCBHYW1lYm9hcmRFbGVtZW50IGZyb20gJy4vZG9tL2dhbWVib2FyZCc7XG5pbXBvcnQgR2FtZWJvYXJkIGZyb20gJy4vbG9naWMvZ2FtZWJvYXJkJztcbmltcG9ydCBtZXNzYWdlIGZyb20gJy4vZG9tL21lc3NhZ2UnO1xuXG5mdW5jdGlvbiBpc1BsYXllckNsaWNraW5nT3duR2FtZWJvYXJkKGNsaWNrZWRHYW1lYm9hcmRFbGVtZW50LCBjbGlja2VyKSB7XG4gIGNvbnN0IGh1bWFuQ2xpY2tlZE93bkdhbWVib2FyZCA9XG4gICAgY2xpY2tlZEdhbWVib2FyZEVsZW1lbnQub3duZXIgPT09IGh1bWFuICYmIGNsaWNrZXIgPT09IGh1bWFuO1xuXG4gIGNvbnN0IGNvbXB1dGVyQ2xpY2tlZE93bkdhbWVib2FyZCA9XG4gICAgY2xpY2tlZEdhbWVib2FyZEVsZW1lbnQub3duZXIgPT09IGVuZW15ICYmIGNsaWNrZXIgPT09IGVuZW15O1xuXG4gIHJldHVybiBodW1hbkNsaWNrZWRPd25HYW1lYm9hcmQgfHwgY29tcHV0ZXJDbGlja2VkT3duR2FtZWJvYXJkO1xufVxuXG5mdW5jdGlvbiBlbmVteVBsYXkoKSB7XG4gIGVuZW15LnBsYXkoaHVtYW5HYW1lYm9hcmQsIGh1bWFuR2FtZWJvYXJkRWxlbWVudCk7XG59XG5cbmFzeW5jIGZ1bmN0aW9uIGRlbGF5KHRpbWUpIHtcbiAgYXdhaXQgbmV3IFByb21pc2UoKHJlc29sdmUpID0+IHNldFRpbWVvdXQocmVzb2x2ZSwgdGltZSkpO1xufVxuXG5hc3luYyBmdW5jdGlvbiBuZXh0VHVybigpIHtcbiAgY3VycmVudEdhbWVib2FyZEVsZW1lbnQuZGlzYWJsZSgpO1xuICBzZXROZXh0UGxheWVyKCk7XG5cbiAgaWYgKGN1cnJlbnRQbGF5ZXIgPT09IGVuZW15KSB7XG4gICAgbWVzc2FnZS5zZXRFbmVteVR1cm4oKTtcbiAgICBjdXJyZW50R2FtZWJvYXJkRWxlbWVudCA9IGh1bWFuR2FtZWJvYXJkRWxlbWVudDtcbiAgICBjdXJyZW50R2FtZWJvYXJkRWxlbWVudC5lbmFibGUoKTtcbiAgICBjdXJyZW50R2FtZWJvYXJkRWxlbWVudC5lbmFibGVDbGljaygpO1xuICAgIGN1cnJlbnRHYW1lYm9hcmRFbGVtZW50LmRpc2FibGVIb3Zlck9uQWxsQ2VsbHMoKTtcblxuICAgIGF3YWl0IGRlbGF5KDIwMDApO1xuICAgIGVuZW15UGxheSgpO1xuICB9IGVsc2Uge1xuICAgIG1lc3NhZ2Uuc2V0SHVtYW5UdXJuKCk7XG4gICAgY3VycmVudEdhbWVib2FyZEVsZW1lbnQgPSBlbmVteUdhbWVib2FyZEVsZW1lbnQ7XG4gICAgY3VycmVudEdhbWVib2FyZEVsZW1lbnQuZW5hYmxlKCk7XG4gICAgY3VycmVudEdhbWVib2FyZEVsZW1lbnQuZW5hYmxlQ2xpY2soKTtcbiAgfVxufVxuXG5mdW5jdGlvbiB2YWxpZGF0ZVNob3QoeyBnYW1lYm9hcmQ6IGdhbWVib2FyZEVsZW1lbnQsIHBvaW50ZXJUeXBlLCBjZWxsIH0pIHtcbiAgY29uc3QgcmVzdWx0ID0ge1xuICAgIHZhbGlkOiB0cnVlLFxuICB9O1xuXG4gIGlmIChwb2ludGVyVHlwZSA9PT0gJ21vdXNlJykge1xuICAgIHJlc3VsdC5jbGlja2VyID0gaHVtYW47XG4gIH0gZWxzZSBpZiAocG9pbnRlclR5cGUgPT09ICcnKSB7XG4gICAgcmVzdWx0LmNsaWNrZXIgPSBlbmVteTtcbiAgfVxuXG4gIGNvbnN0IHBsYXllckNsaWNraW5nT3duR2FtZWJvYXJkID0gaXNQbGF5ZXJDbGlja2luZ093bkdhbWVib2FyZChcbiAgICBnYW1lYm9hcmRFbGVtZW50LFxuICAgIHJlc3VsdC5jbGlja2VyLFxuICApO1xuXG4gIGlmIChwbGF5ZXJDbGlja2luZ093bkdhbWVib2FyZCkge1xuICAgIHJlc3VsdC52YWxpZCA9IGZhbHNlO1xuICAgIHJlc3VsdC5yZWFzb24gPSAncGxheWVyQ2xpY2tpbmdPd25HYW1lYm9hcmQnO1xuICAgIHJldHVybiByZXN1bHQ7XG4gIH1cblxuICAvLyBpZiAoZ2FtZWJvYXJkRWxlbWVudC5kaXNhYmxlZCkge1xuICAvLyAgIHJldHVybiB0cnVlO1xuICAvLyB9XG5cbiAgaWYgKGdhbWVib2FyZEVsZW1lbnQuY29udHJvbGxlci5pc0V4aXN0aW5nU2hvdChjZWxsLngsIGNlbGwueSkpIHtcbiAgICByZXN1bHQudmFsaWQgPSBmYWxzZTtcbiAgICByZXN1bHQucmVhc29uID0gJ2lzRXhpc3RpbmdTaG90JztcbiAgICByZXR1cm4gcmVzdWx0O1xuICB9XG59XG5cbmZ1bmN0aW9uIGF0dGFja0dhbWVib2FyZChnYW1lYm9hcmRFbGVtZW50LCBjZWxsKSB7XG4gIHJldHVybiBnYW1lYm9hcmRFbGVtZW50LmNvbnRyb2xsZXIucmVjZWl2ZUF0dGFjayhjZWxsLngsIGNlbGwueSk7XG59XG5cbmFzeW5jIGZ1bmN0aW9uIGhhbmRsZVR1cm4oY2xpY2tEYXRhKSB7XG4gIGNvbnN0IHsgZ2FtZWJvYXJkOiBnYW1lYm9hcmRFbGVtZW50LCBjZWxsIH0gPSBjbGlja0RhdGE7XG5cbiAgY29uc3QgdmFsaWRpdHlSZXN1bHQgPSB2YWxpZGF0ZVNob3QoY2xpY2tEYXRhKTtcblxuICBpZiAoIXZhbGlkaXR5UmVzdWx0LnZhbGlkKSB7XG4gICAgaWYgKHZhbGlkaXR5UmVzdWx0LnJlYXNvbiA9PT0gJ3BsYXllckNsaWNraW5nT3duR2FtZWJvYXJkJykge1xuICAgICAgaWYgKHZhbGlkaXR5UmVzdWx0LmNsaWNrZXIgPT09IGVuZW15KSB7XG4gICAgICAgIGVuZW15UGxheSgpO1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGlmICh2YWxpZGl0eVJlc3VsdC5jbGlja2VyID09PSBodW1hbikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKHZhbGlkaXR5UmVzdWx0LnJlYXNvbiA9PT0gJ2lzRXhpc3RpbmdTaG90Jykge1xuICAgICAgaWYgKHZhbGlkaXR5UmVzdWx0LmNsaWNrZXIgPT09IGVuZW15KSB7XG4gICAgICAgIGVuZW15UGxheSgpO1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGlmICh2YWxpZGl0eVJlc3VsdC5jbGlja2VyID09PSBodW1hbikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgY29uc3QgYXR0YWNrUmVzdWx0ID0gYXR0YWNrR2FtZWJvYXJkKGdhbWVib2FyZEVsZW1lbnQsIGNlbGwpO1xuXG4gIGlmIChhdHRhY2tSZXN1bHQuaGl0KSB7XG4gICAgcmVuZGVySGl0KGNlbGwpO1xuXG4gICAgaWYgKGN1cnJlbnRQbGF5ZXIgPT09IGh1bWFuKSB7XG4gICAgICBpZiAoZW5lbXlHYW1lYm9hcmQuYWxsU2hpcHNTdW5rKCkpIHtcbiAgICAgICAgbWVzc2FnZS5zZXRIdW1hbldvbigpO1xuICAgICAgICBkaXNhYmxlQm90aEdhbWVib2FyZHMoKTtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgIH1cblxuICAgIGlmIChjdXJyZW50UGxheWVyID09PSBlbmVteSkge1xuICAgICAgaWYgKGh1bWFuR2FtZWJvYXJkLmFsbFNoaXBzU3VuaygpKSB7XG4gICAgICAgIG1lc3NhZ2Uuc2V0RW5lbXlXb24oKTtcbiAgICAgICAgZGlzYWJsZUJvdGhHYW1lYm9hcmRzKCk7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGlmIChhdHRhY2tSZXN1bHQuc2hpcC5pc1N1bmsoKSkge1xuICAgICAgICAgIC8vIC0tY2xlYXIgYW55IHN0b3JlZCBzaGlwVG9TaW5rIGluIGVuZW15IHBsYXllclxuICAgICAgICAgIGVuZW15LnNoaXBUb1NpbmsucmVzZXQoKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAvLyAtLSBzdG9yZSB0aGUgc2hpcFRvU2luayBpbiBwbGF5ZXIgdG8gY29udGludWUgc2VhcmNoaW5nIGZvciBoaXRzIG9uIG5leHQgdHVybiBpZiB0aGV5IG1pc3Mgd2l0aCB0aGUgbmV4dCBzaG90XG4gICAgICAgICAgZW5lbXkuc2hpcFRvU2luay5zaGlwID0gYXR0YWNrUmVzdWx0LnNoaXA7XG4gICAgICAgIH1cblxuICAgICAgICBhd2FpdCBkZWxheSgyMDAwKTtcbiAgICAgICAgZW5lbXlQbGF5KCk7XG4gICAgICB9XG4gICAgfVxuICB9IGVsc2Uge1xuICAgIHJlbmRlck1pc3MoY2VsbCk7XG4gICAgY3VycmVudEdhbWVib2FyZEVsZW1lbnQuZGlzYWJsZUNsaWNrKCk7XG4gICAgYXdhaXQgZGVsYXkoMjAwMCk7XG4gICAgbmV4dFR1cm4oKTtcbiAgfVxufVxuXG5mdW5jdGlvbiBzZXROZXh0UGxheWVyKCkge1xuICBpZiAoY3VycmVudFBsYXllciA9PT0gaHVtYW4pIHtcbiAgICBjdXJyZW50UGxheWVyID0gZW5lbXk7XG4gIH0gZWxzZSB7XG4gICAgY3VycmVudFBsYXllciA9IGh1bWFuO1xuICB9XG59XG5cbmZ1bmN0aW9uIGRpc2FibGVCb3RoR2FtZWJvYXJkcygpIHtcbiAgZW5lbXlHYW1lYm9hcmRFbGVtZW50LmRpc2FibGUoKTtcbiAgaHVtYW5HYW1lYm9hcmRFbGVtZW50LmRpc2FibGUoKTtcbn1cblxuZnVuY3Rpb24gcmVuZGVyTWlzcyhjZWxsKSB7XG4gIGNlbGwuZW5hYmxlTWlzcygpO1xuICBjZWxsLmRpc2FibGVIb3ZlcigpO1xufVxuXG5mdW5jdGlvbiByZW5kZXJIaXQoY2VsbCkge1xuICBjZWxsLmVuYWJsZUhpdCgpO1xuICBjZWxsLmRpc2FibGVIb3ZlcigpO1xufVxuXG5mdW5jdGlvbiBwbGF5KCkge1xuICBlbmVteUdhbWVib2FyZEVsZW1lbnQuZW5hYmxlKCk7XG4gIGVuZW15R2FtZWJvYXJkRWxlbWVudC5lbmFibGVDbGljaygpO1xuICBtZXNzYWdlLnNldEh1bWFuVHVybigpO1xuICByYW5kb21pemVCdXR0b24uZGlzYWJsZWQgPSB0cnVlO1xuICBwbGF5QnV0dG9uLmRpc2FibGVkID0gdHJ1ZTtcbn1cblxuZnVuY3Rpb24gc2V0dXBIdW1hbkdhbWVib2FyZEVsZW1lbnQoKSB7XG4gIGh1bWFuR2FtZWJvYXJkRWxlbWVudCA9IG5ldyBHYW1lYm9hcmRFbGVtZW50KGh1bWFuLCBoYW5kbGVUdXJuKTtcbiAgaHVtYW5Db250YWluZXIuYXBwZW5kQ2hpbGQoaHVtYW5HYW1lYm9hcmRFbGVtZW50LnJlbmRlcigpKTtcbn1cblxuZnVuY3Rpb24gc2V0dXBDb21wdXRlckdhbWVib2FyZEVsZW1lbnQoKSB7XG4gIGVuZW15R2FtZWJvYXJkRWxlbWVudCA9IG5ldyBHYW1lYm9hcmRFbGVtZW50KGVuZW15LCBoYW5kbGVUdXJuKTtcbiAgZW5lbXlDb250YWluZXIuYXBwZW5kQ2hpbGQoZW5lbXlHYW1lYm9hcmRFbGVtZW50LnJlbmRlcigpKTtcbn1cblxuZnVuY3Rpb24gc2V0dXBDb21wdXRlclBsYXllcigpIHtcbiAgZW5lbXlHYW1lYm9hcmQgPSBuZXcgR2FtZWJvYXJkKCk7XG4gIGVuZW15ID0gbmV3IFBsYXllcihlbmVteUdhbWVib2FyZCwgJ2VuZW15Jyk7XG59XG5cbmZ1bmN0aW9uIHNldHVwSHVtYW5QbGF5ZXIoKSB7XG4gIGh1bWFuR2FtZWJvYXJkID0gbmV3IEdhbWVib2FyZCgpO1xuICBodW1hbiA9IG5ldyBQbGF5ZXIoaHVtYW5HYW1lYm9hcmQsICdodW1hbicpO1xufVxuXG5mdW5jdGlvbiByYW5kb21pemVHYW1lYm9hcmQoZ2FtZWJvYXJkRWxlbWVudCkge1xuICBtZXNzYWdlLnNldExvYWRpbmdTaGlwcygpO1xuICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICBnYW1lYm9hcmRFbGVtZW50LmNvbnRyb2xsZXIucmVzZXQoKTtcbiAgICBnYW1lYm9hcmRFbGVtZW50LnJlc2V0KCk7XG5cbiAgICBnYW1lYm9hcmRFbGVtZW50Lm93bmVyLnBsYWNlUmFuZG9tU2hpcHMoKTtcbiAgICBnYW1lYm9hcmRFbGVtZW50LmNyZWF0ZVNoaXBzKCk7XG4gICAgZ2FtZWJvYXJkRWxlbWVudC5yZW5kZXJTaGlwcygpO1xuICB9KTtcbiAgc2V0VGltZW91dCgoKSA9PiBtZXNzYWdlLnNldEluc3RydWN0aW9uKCkpO1xufVxuXG5mdW5jdGlvbiBzZXR1cEdhbWUoKSB7XG4gIGN1cnJlbnRQbGF5ZXIgPSBodW1hbjtcbiAgZW5lbXlHYW1lYm9hcmRFbGVtZW50LmRpc2FibGUoKTtcbiAgaHVtYW5HYW1lYm9hcmRFbGVtZW50LmRpc2FibGUoKTtcbiAgY3VycmVudEdhbWVib2FyZEVsZW1lbnQgPSBlbmVteUdhbWVib2FyZEVsZW1lbnQ7XG5cbiAgcmFuZG9taXplQnV0dG9uLmRpc2FibGVkID0gZmFsc2U7XG4gIHBsYXlCdXR0b24uZGlzYWJsZWQgPSBmYWxzZTtcblxuICByYW5kb21pemVHYW1lYm9hcmQoZW5lbXlHYW1lYm9hcmRFbGVtZW50KTtcbiAgcmFuZG9taXplR2FtZWJvYXJkKGh1bWFuR2FtZWJvYXJkRWxlbWVudCk7XG59XG5cbmNvbnN0IG5ld0dhbWVCdXR0b24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbmV3LWdhbWUtYnRuJyk7XG5uZXdHYW1lQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICBzZXR1cEdhbWUoKTtcbn0pO1xuXG5jb25zdCByYW5kb21pemVCdXR0b24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncmFuZG9taXplLWJ0bicpO1xucmFuZG9taXplQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICByYW5kb21pemVHYW1lYm9hcmQoaHVtYW5HYW1lYm9hcmRFbGVtZW50KTtcbn0pO1xuXG5jb25zdCBwbGF5QnV0dG9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3BsYXktYnRuJyk7XG5wbGF5QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgcGxheSk7XG5cbmxldCBlbmVteUdhbWVib2FyZEVsZW1lbnQ7XG5sZXQgaHVtYW5HYW1lYm9hcmRFbGVtZW50O1xubGV0IGN1cnJlbnRHYW1lYm9hcmRFbGVtZW50O1xubGV0IGVuZW15R2FtZWJvYXJkO1xubGV0IGh1bWFuR2FtZWJvYXJkO1xubGV0IGVuZW15O1xubGV0IGh1bWFuO1xubGV0IGN1cnJlbnRQbGF5ZXI7XG5jb25zdCBlbmVteUNvbnRhaW5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdnYW1lYm9hcmQtY29udGFpbmVyLWVuZW15Jyk7XG5jb25zdCBodW1hbkNvbnRhaW5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdnYW1lYm9hcmQtY29udGFpbmVyLWh1bWFuJyk7XG5tZXNzYWdlLnNldEVsZW1lbnQoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ21lc3NhZ2UnKSk7XG5cbnNldHVwSHVtYW5QbGF5ZXIoKTtcbnNldHVwQ29tcHV0ZXJQbGF5ZXIoKTtcbnNldHVwQ29tcHV0ZXJHYW1lYm9hcmRFbGVtZW50KCk7XG5zZXR1cEh1bWFuR2FtZWJvYXJkRWxlbWVudCgpO1xuXG5zZXR1cEdhbWUoKTtcbiIsImltcG9ydCBTaGlwIGZyb20gJy4vc2hpcCc7XG5cbmNsYXNzIEJhdHRsZXNoaXAgZXh0ZW5kcyBTaGlwIHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgc3VwZXIoNCk7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgQmF0dGxlc2hpcDtcbiIsImNsYXNzIENlbGwge1xuICBjb25zdHJ1Y3Rvcih4LCB5KSB7XG4gICAgdGhpcy54ID0geDtcbiAgICB0aGlzLnkgPSB5O1xuICB9XG5cbiAgb2Zmc2V0KHgsIHkpIHtcbiAgICByZXR1cm4gbmV3IENlbGwodGhpcy54ICsgeCwgdGhpcy55ICsgeSk7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgQ2VsbDtcbiIsImltcG9ydCBTaGlwIGZyb20gJy4vc2hpcCc7XG5cbmNsYXNzIERlc3Ryb3llciBleHRlbmRzIFNoaXAge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICBzdXBlcigzKTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBEZXN0cm95ZXI7XG4iLCJpbXBvcnQgQ2VsbCBmcm9tICcuL2NlbGwnO1xuaW1wb3J0IGdldFJhbmRvbUludCBmcm9tICcuL2hlbHBlcnMnO1xuXG5jbGFzcyBHYW1lYm9hcmQge1xuICAjc2hpcHMgPSBbXTtcbiAgI21pc3NlcyA9IFtdO1xuXG4gIGNvbnN0cnVjdG9yKHNpemUgPSAxMCkge1xuICAgIHRoaXMuc2l6ZSA9IHNpemU7XG4gICAgdGhpcy5jZWxscyA9IFtdO1xuICAgIHRoaXMuI2NyZWF0ZUNlbGxzKCk7XG4gIH1cblxuICBwbGFjZVNoaXAoc2hpcCwgeCwgeSkge1xuICAgIHNoaXAucGxhY2UoeCwgeSwgdGhpcyk7XG4gICAgdGhpcy4jc2hpcHMucHVzaChzaGlwKTtcbiAgfVxuXG4gIHJlY2VpdmVBdHRhY2soeCwgeSkge1xuICAgIGNvbnN0IGhpdFNoaXAgPSB0aGlzLiNnZXRTaGlwT25DZWxsKHgsIHkpO1xuICAgIGlmIChoaXRTaGlwKSB7XG4gICAgICBoaXRTaGlwLmhpdCh4LCB5KTtcbiAgICAgIHJldHVybiB7IGhpdDogdHJ1ZSwgc2hpcDogaGl0U2hpcCB9O1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLiNtaXNzZXMucHVzaChuZXcgQ2VsbCh4LCB5KSk7XG4gICAgICByZXR1cm4geyBoaXQ6IGZhbHNlLCBzaGlwOiB1bmRlZmluZWQgfTtcbiAgICB9XG4gIH1cblxuICBhbGxTaGlwc1N1bmsoKSB7XG4gICAgcmV0dXJuIHRoaXMuI3NoaXBzLmV2ZXJ5KChzaGlwKSA9PiBzaGlwLmlzU3VuaygpKTtcbiAgfVxuXG4gIGdldFNoaXBzKCkge1xuICAgIHJldHVybiBbLi4udGhpcy4jc2hpcHNdO1xuICB9XG5cbiAgZ2V0TWlzc2VzKCkge1xuICAgIHJldHVybiBbLi4udGhpcy4jbWlzc2VzXTtcbiAgfVxuXG4gIGdldEhpdHMoKSB7XG4gICAgcmV0dXJuIHRoaXMuI3NoaXBzLmZsYXRNYXAoKHNoaXApID0+IHNoaXAuZ2V0SGl0cygpKTtcbiAgfVxuXG4gIGlzU2hpcE9uQ2VsbCh4LCB5KSB7XG4gICAgcmV0dXJuICEhdGhpcy4jZ2V0U2hpcE9uQ2VsbCh4LCB5KTtcbiAgfVxuXG4gIGdldENlbGxBdCh4LCB5KSB7XG4gICAgcmV0dXJuIHRoaXMuY2VsbHMuZmluZCgoY2VsbCkgPT4gY2VsbC54ID09PSB4ICYmIGNlbGwueSA9PT0geSk7XG4gIH1cblxuICBvZmZzZXRDZWxsKGNlbGwsIHgsIHkpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRDZWxsQXQoY2VsbC54ICsgeCwgY2VsbC55ICsgeSk7XG4gIH1cblxuICBpc0V4aXN0aW5nU2hvdCh4LCB5KSB7XG4gICAgcmV0dXJuICEhdGhpcy4jZ2V0SGl0T25DZWxsKHgsIHkpIHx8ICEhdGhpcy4jZ2V0TWlzc09uQ2VsbCh4LCB5KTtcbiAgfVxuXG4gIGdldFJhbmRvbVBvc2l0aW9uKCkge1xuICAgIGNvbnN0IHggPSBnZXRSYW5kb21JbnQodGhpcy5zaXplKTtcbiAgICBjb25zdCB5ID0gZ2V0UmFuZG9tSW50KHRoaXMuc2l6ZSk7XG5cbiAgICByZXR1cm4gW3gsIHldO1xuICB9XG5cbiAgcmVzZXQoKSB7XG4gICAgdGhpcy4jc2hpcHMgPSBbXTtcbiAgICB0aGlzLiNtaXNzZXMgPSBbXTtcbiAgfVxuXG4gICNjcmVhdGVDZWxscygpIHtcbiAgICBmb3IgKGxldCB5ID0gMDsgeSA8IHRoaXMuc2l6ZTsgeSsrKSB7XG4gICAgICBmb3IgKGxldCB4ID0gMDsgeCA8IHRoaXMuc2l6ZTsgeCsrKSB7XG4gICAgICAgIGNvbnN0IGNlbGwgPSBuZXcgQ2VsbCh4LCB5KTtcbiAgICAgICAgdGhpcy5jZWxscy5wdXNoKGNlbGwpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gICNnZXRIaXRPbkNlbGwoeCwgeSkge1xuICAgIGNvbnN0IGhpdHMgPSB0aGlzLmdldEhpdHMoKTtcbiAgICByZXR1cm4gaGl0cy5maW5kKChjZWxsKSA9PiB4ID09PSBjZWxsLnggJiYgeSA9PT0gY2VsbC55KTtcbiAgfVxuXG4gICNnZXRNaXNzT25DZWxsKHgsIHkpIHtcbiAgICByZXR1cm4gdGhpcy4jbWlzc2VzLmZpbmQoKGNlbGwpID0+IHggPT09IGNlbGwueCAmJiB5ID09PSBjZWxsLnkpO1xuICB9XG5cbiAgI2dldFNoaXBPbkNlbGwoeCwgeSkge1xuICAgIHJldHVybiB0aGlzLiNzaGlwcy5maW5kKChzaGlwKSA9PiB7XG4gICAgICBjb25zdCBzaGlwQmFjayA9IHNoaXAuYmFjaygpO1xuICAgICAgY29uc3Qgc2hpcEZyb250ID0gc2hpcC5mcm9udCgpO1xuXG4gICAgICBpZiAoc2hpcC5vcmllbnRhdGlvbiA9PT0gJ2hvcml6b250YWwnKSB7XG4gICAgICAgIHJldHVybiB4ID49IHNoaXBCYWNrLnggJiYgeCA8PSBzaGlwRnJvbnQueCAmJiB5ID09PSBzaGlwLnk7XG4gICAgICB9IGVsc2UgaWYgKHNoaXAub3JpZW50YXRpb24gPT09ICd2ZXJ0aWNhbCcpIHtcbiAgICAgICAgcmV0dXJuIHkgPj0gc2hpcEJhY2sueSAmJiB5IDw9IHNoaXBGcm9udC55ICYmIHggPT09IHNoaXAueDtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBHYW1lYm9hcmQ7XG4iLCJmdW5jdGlvbiBnZXRSYW5kb21JbnQobWF4KSB7XG4gIHJldHVybiBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiBtYXgpO1xufVxuXG5leHBvcnQgZGVmYXVsdCBnZXRSYW5kb21JbnQ7XG4iLCJpbXBvcnQgU2hpcCBmcm9tICcuL3NoaXAnO1xuXG5jbGFzcyBQYXRyb2xCb2F0IGV4dGVuZHMgU2hpcCB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHN1cGVyKDEpO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFBhdHJvbEJvYXQ7XG4iLCJpbXBvcnQgZ2V0UmFuZG9tSW50IGZyb20gJy4vaGVscGVycyc7XG5pbXBvcnQgeyBnYW1lYm9hcmRTaGlwcywgaGFzQWRqYWNlbnRTaGlwcyB9IGZyb20gJy4vcnVsZXMnO1xuaW1wb3J0IHtcbiAgaGFzT3ZlcmxhcHBpbmdTaGlwcyxcbiAgaGFzT3V0T2ZCb3VuZHNTaGlwcyxcbiAgc2hpcEFnYWluc3RUb3BXYWxsLFxuICBzaGlwQWdhaW5zdFJpZ2h0V2FsbCxcbiAgc2hpcEFnYWluc3RCb3R0b21XYWxsLFxuICBzaGlwQWdhaW5zdExlZnRXYWxsLFxufSBmcm9tICcuL3J1bGVzJztcblxuY2xhc3MgUGxheWVyIHtcbiAgY29uc3RydWN0b3IoZ2FtZWJvYXJkLCBuYW1lKSB7XG4gICAgdGhpcy5nYW1lYm9hcmQgPSBnYW1lYm9hcmQ7XG4gICAgdGhpcy5uYW1lID0gbmFtZTtcbiAgICB0aGlzLnNoaXBUb1NpbmsgPSB7XG4gICAgICBzaGlwOiB1bmRlZmluZWQsXG4gICAgICBzaG90czogW10sXG4gICAgICByZXNldCgpIHtcbiAgICAgICAgdGhpcy5zaGlwID0gdW5kZWZpbmVkO1xuICAgICAgICB0aGlzLnNob3RzLmxlbmd0aCA9IDA7XG4gICAgICB9LFxuICAgIH07XG4gIH1cblxuICAjaGl0QWdhaW5zdFRvcFdhbGwoaGl0KSB7XG4gICAgcmV0dXJuIGhpdC55ID09PSAwO1xuICB9XG5cbiAgI2hpdEFnYWluc3RSaWdodFdhbGwoaGl0LCBnYW1lYm9hcmQpIHtcbiAgICByZXR1cm4gaGl0LnggPT09IGdhbWVib2FyZC5zaXplIC0gMTtcbiAgfVxuXG4gICNoaXRBZ2FpbnN0Qm90dG9tV2FsbChoaXQsIGdhbWVib2FyZCkge1xuICAgIHJldHVybiBoaXQueSA9PT0gZ2FtZWJvYXJkLnNpemUgLSAxO1xuICB9XG5cbiAgI2hpdEFnYWluc3RMZWZ0V2FsbChoaXQpIHtcbiAgICByZXR1cm4gaGl0LnggPT09IDA7XG4gIH1cblxuICBwbGF5KHRhcmdldEdhbWVib2FyZCwgdGFyZ2V0R2FtZWJvYXJkRWxlbWVudCkge1xuICAgIGxldCBuZXh0U2hvdDtcblxuICAgIGlmICh0aGlzLnNoaXBUb1Npbmsuc2hpcCkge1xuICAgICAgLy8gc2hpcHMgd2l0aCBsZW5ndGggPj0gMiAmJiBzaGlwcyB3aXRoIGhpdCA+PSAxXG4gICAgICBjb25zdCBzaGlwID0gdGhpcy5zaGlwVG9TaW5rLnNoaXA7XG4gICAgICBjb25zdCBzaG90cyA9IHRoaXMuc2hpcFRvU2luay5zaG90cztcbiAgICAgIGNvbnN0IGhpdHMgPSBzaGlwLmdldEhpdHMoKTtcblxuICAgICAgaWYgKGhpdHMubGVuZ3RoID09PSAxKSB7XG4gICAgICAgIGNvbnN0IG9ubHlIaXQgPSBoaXRzLmF0KDApO1xuICAgICAgICBjb25zdCB0b3AgPSB0YXJnZXRHYW1lYm9hcmQub2Zmc2V0Q2VsbChvbmx5SGl0LCAwLCAtMSk7XG4gICAgICAgIGNvbnN0IHJpZ2h0ID0gdGFyZ2V0R2FtZWJvYXJkLm9mZnNldENlbGwob25seUhpdCwgMSwgMCk7XG4gICAgICAgIGNvbnN0IGJvdHRvbSA9IHRhcmdldEdhbWVib2FyZC5vZmZzZXRDZWxsKG9ubHlIaXQsIDAsIDEpO1xuICAgICAgICBjb25zdCBsZWZ0ID0gdGFyZ2V0R2FtZWJvYXJkLm9mZnNldENlbGwob25seUhpdCwgLTEsIDApO1xuXG4gICAgICAgIGNvbnN0IHBvdGVudGlhbEhpdHMgPSBbXTtcbiAgICAgICAgaWYgKCF0aGlzLiNoaXRBZ2FpbnN0VG9wV2FsbChvbmx5SGl0KSAmJiAhc2hvdHMuaW5jbHVkZXModG9wKSkge1xuICAgICAgICAgIHBvdGVudGlhbEhpdHMucHVzaCh0b3ApO1xuICAgICAgICB9XG4gICAgICAgIGlmIChcbiAgICAgICAgICAhdGhpcy4jaGl0QWdhaW5zdFJpZ2h0V2FsbChvbmx5SGl0LCB0YXJnZXRHYW1lYm9hcmQpICYmXG4gICAgICAgICAgIXNob3RzLmluY2x1ZGVzKHJpZ2h0KVxuICAgICAgICApIHtcbiAgICAgICAgICBwb3RlbnRpYWxIaXRzLnB1c2gocmlnaHQpO1xuICAgICAgICB9XG4gICAgICAgIGlmIChcbiAgICAgICAgICAhdGhpcy4jaGl0QWdhaW5zdEJvdHRvbVdhbGwob25seUhpdCwgdGFyZ2V0R2FtZWJvYXJkKSAmJlxuICAgICAgICAgICFzaG90cy5pbmNsdWRlcyhib3R0b20pXG4gICAgICAgICkge1xuICAgICAgICAgIHBvdGVudGlhbEhpdHMucHVzaChib3R0b20pO1xuICAgICAgICB9XG4gICAgICAgIGlmICghdGhpcy4jaGl0QWdhaW5zdExlZnRXYWxsKG9ubHlIaXQpICYmICFzaG90cy5pbmNsdWRlcyhsZWZ0KSkge1xuICAgICAgICAgIHBvdGVudGlhbEhpdHMucHVzaChsZWZ0KTtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IHJhbmRvbUluZGV4ID0gZ2V0UmFuZG9tSW50KHBvdGVudGlhbEhpdHMubGVuZ3RoKTtcbiAgICAgICAgbmV4dFNob3QgPSBwb3RlbnRpYWxIaXRzW3JhbmRvbUluZGV4XTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIC8vIC0taWYgaGl0IGFycmF5IGxlbmd0aCBpcyA+IDFcbiAgICAgICAgaWYgKHNoaXAub3JpZW50YXRpb24gPT09ICdob3Jpem9udGFsJykge1xuICAgICAgICAgIC8vIC0tLW9yZGVyIGhpdHMgYnkgeFxuICAgICAgICAgIGNvbnN0IHhIaXRzID0gaGl0cy50b1NvcnRlZCgoYSwgYikgPT4gTWF0aC5zaWduKGEueCAtIGIueCkpO1xuICAgICAgICAgIGNvbnN0IGZpcnN0SGl0ID0geEhpdHMuYXQoMCk7XG4gICAgICAgICAgY29uc3QgbGFzdEhpdCA9IHhIaXRzLmF0KC0xKTtcbiAgICAgICAgICBjb25zdCBsZWZ0ID0gdGFyZ2V0R2FtZWJvYXJkLm9mZnNldENlbGwoZmlyc3RIaXQsIC0xLCAwKTtcbiAgICAgICAgICBjb25zdCByaWdodCA9IHRhcmdldEdhbWVib2FyZC5vZmZzZXRDZWxsKGxhc3RIaXQsIDEsIDApO1xuXG4gICAgICAgICAgY29uc3QgcG90ZW50aWFsSGl0cyA9IFtdO1xuICAgICAgICAgIGlmICghdGhpcy4jaGl0QWdhaW5zdExlZnRXYWxsKGZpcnN0SGl0KSAmJiAhc2hvdHMuaW5jbHVkZXMobGVmdCkpIHtcbiAgICAgICAgICAgIHBvdGVudGlhbEhpdHMucHVzaChsZWZ0KTtcbiAgICAgICAgICB9XG4gICAgICAgICAgaWYgKFxuICAgICAgICAgICAgIXRoaXMuI2hpdEFnYWluc3RSaWdodFdhbGwobGFzdEhpdCwgdGFyZ2V0R2FtZWJvYXJkKSAmJlxuICAgICAgICAgICAgIXNob3RzLmluY2x1ZGVzKHJpZ2h0KVxuICAgICAgICAgICkge1xuICAgICAgICAgICAgcG90ZW50aWFsSGl0cy5wdXNoKHJpZ2h0KTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBjb25zdCByYW5kb21JbmRleCA9IGdldFJhbmRvbUludChwb3RlbnRpYWxIaXRzLmxlbmd0aCk7XG4gICAgICAgICAgbmV4dFNob3QgPSBwb3RlbnRpYWxIaXRzW3JhbmRvbUluZGV4XTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChzaGlwLm9yaWVudGF0aW9uID09PSAndmVydGljYWwnKSB7XG4gICAgICAgICAgLy8gLS0tb3JkZXIgaGl0cyBieSB5XG4gICAgICAgICAgY29uc3QgeUhpdHMgPSBoaXRzLnRvU29ydGVkKChhLCBiKSA9PiBNYXRoLnNpZ24oYS55IC0gYi55KSk7XG4gICAgICAgICAgY29uc3QgZmlyc3RIaXQgPSB5SGl0cy5hdCgwKTtcbiAgICAgICAgICBjb25zdCBsYXN0SGl0ID0geUhpdHMuYXQoLTEpO1xuICAgICAgICAgIGNvbnN0IHRvcCA9IHRhcmdldEdhbWVib2FyZC5vZmZzZXRDZWxsKGZpcnN0SGl0LCAwLCAtMSk7XG4gICAgICAgICAgY29uc3QgYm90dG9tID0gdGFyZ2V0R2FtZWJvYXJkLm9mZnNldENlbGwobGFzdEhpdCwgMCwgMSk7XG5cbiAgICAgICAgICBjb25zdCBwb3RlbnRpYWxIaXRzID0gW107XG4gICAgICAgICAgaWYgKCF0aGlzLiNoaXRBZ2FpbnN0VG9wV2FsbChmaXJzdEhpdCkgJiYgIXNob3RzLmluY2x1ZGVzKHRvcCkpIHtcbiAgICAgICAgICAgIHBvdGVudGlhbEhpdHMucHVzaCh0b3ApO1xuICAgICAgICAgIH1cbiAgICAgICAgICBpZiAoXG4gICAgICAgICAgICAhdGhpcy4jaGl0QWdhaW5zdEJvdHRvbVdhbGwobGFzdEhpdCwgdGFyZ2V0R2FtZWJvYXJkKSAmJlxuICAgICAgICAgICAgIXNob3RzLmluY2x1ZGVzKGJvdHRvbSlcbiAgICAgICAgICApIHtcbiAgICAgICAgICAgIHBvdGVudGlhbEhpdHMucHVzaChib3R0b20pO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGNvbnN0IHJhbmRvbUluZGV4ID0gZ2V0UmFuZG9tSW50KHBvdGVudGlhbEhpdHMubGVuZ3RoKTtcbiAgICAgICAgICBuZXh0U2hvdCA9IHBvdGVudGlhbEhpdHNbcmFuZG9tSW5kZXhdO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIHRoaXMuc2hpcFRvU2luay5zaG90cy5wdXNoKG5leHRTaG90KTtcbiAgICB9IGVsc2Uge1xuICAgICAgY29uc3QgaGl0cyA9IHRhcmdldEdhbWVib2FyZC5nZXRIaXRzKCk7XG4gICAgICBjb25zdCBtaXNzZXMgPSB0YXJnZXRHYW1lYm9hcmQuZ2V0TWlzc2VzKCk7XG4gICAgICBjb25zdCBzaG90cyA9IGhpdHMuY29uY2F0KG1pc3Nlcyk7XG4gICAgICBjb25zdCBhdmFpbGFibGVDZWxscyA9IHRoaXMuI2dldEF2YWlsYWJsZUNlbGxzKHRhcmdldEdhbWVib2FyZCwgc2hvdHMpO1xuXG4gICAgICBjb25zdCByYW5kb21JbmRleCA9IGdldFJhbmRvbUludChhdmFpbGFibGVDZWxscy5sZW5ndGgpO1xuICAgICAgbmV4dFNob3QgPSBhdmFpbGFibGVDZWxsc1tyYW5kb21JbmRleF07XG4gICAgfVxuXG4gICAgY29uc3QgY2VsbERPTSA9IHRhcmdldEdhbWVib2FyZEVsZW1lbnQuZ2V0Q2VsbERPTShuZXh0U2hvdC54LCBuZXh0U2hvdC55KTtcbiAgICBjZWxsRE9NLnJlbmRlcigpLmNsaWNrKCk7XG4gIH1cblxuICBwbGFjZVNoaXBzKHNoaXBzKSB7XG4gICAgaWYgKHRoaXMuI2FsbFNoaXBzSW5WYWxpZFBvc2l0aW9ucyhzaGlwcykpIHtcbiAgICAgIHNoaXBzLmZvckVhY2goKHNoaXApID0+IHRoaXMuZ2FtZWJvYXJkLnBsYWNlU2hpcChzaGlwLCBzaGlwLngsIHNoaXAueSkpO1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuXG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgcGxhY2VSYW5kb21TaGlwcygpIHtcbiAgICBsZXQgc2hpcHNJblZhbGlkUG9zaXRpb24gPSBmYWxzZTtcblxuICAgIHdoaWxlICghc2hpcHNJblZhbGlkUG9zaXRpb24pIHtcbiAgICAgIGNvbnN0IHNoaXBzID0gdGhpcy4jY3JlYXRlUmFuZG9tU2hpcHMoKTtcblxuICAgICAgaWYgKHRoaXMuI2FsbFNoaXBzSW5WYWxpZFBvc2l0aW9ucyhzaGlwcykpIHtcbiAgICAgICAgc2hpcHNJblZhbGlkUG9zaXRpb24gPSB0cnVlO1xuICAgICAgICBzaGlwcy5mb3JFYWNoKChzaGlwKSA9PiB0aGlzLmdhbWVib2FyZC5wbGFjZVNoaXAoc2hpcCwgc2hpcC54LCBzaGlwLnkpKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAjYWxsU2hpcHNJblZhbGlkUG9zaXRpb25zKHNoaXBzKSB7XG4gICAgcmV0dXJuIChcbiAgICAgICFoYXNPdmVybGFwcGluZ1NoaXBzKHNoaXBzKSAmJlxuICAgICAgIWhhc091dE9mQm91bmRzU2hpcHMoc2hpcHMsIHRoaXMuZ2FtZWJvYXJkKSAmJlxuICAgICAgIWhhc0FkamFjZW50U2hpcHMoc2hpcHMsIHRoaXMuZ2FtZWJvYXJkKVxuICAgICk7XG4gIH1cblxuICAjY3JlYXRlUmFuZG9tU2hpcHMoKSB7XG4gICAgY29uc3Qgc2hpcHMgPSBbXTtcblxuICAgIGdhbWVib2FyZFNoaXBzLmZvckVhY2goKGJvYXJkU2hpcCkgPT4ge1xuICAgICAgZm9yIChsZXQgaW5kZXggPSAwOyBpbmRleCA8IGJvYXJkU2hpcC5jb3VudDsgaW5kZXgrKykge1xuICAgICAgICBjb25zdCBzaGlwID0gdGhpcy4jY3JlYXRlU2hpcFdpdGhSYW5kb21PcmllbnRhdGlvbihib2FyZFNoaXApO1xuICAgICAgICBjb25zdCBbeCwgeV0gPSB0aGlzLmdhbWVib2FyZC5nZXRSYW5kb21Qb3NpdGlvbigpO1xuICAgICAgICBzaGlwLnBsYWNlKHgsIHksIHRoaXMuZ2FtZWJvYXJkKTtcbiAgICAgICAgc2hpcHMucHVzaChzaGlwKTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIHJldHVybiBzaGlwcztcbiAgfVxuXG4gICNjcmVhdGVTaGlwV2l0aFJhbmRvbU9yaWVudGF0aW9uKGJvYXJkU2hpcCkge1xuICAgIGNvbnN0IHNoaXAgPSBuZXcgYm9hcmRTaGlwLnR5cGUoKTtcbiAgICBzaGlwLnNldFJhbmRvbU9yaWVudGF0aW9uKCk7XG4gICAgcmV0dXJuIHNoaXA7XG4gIH1cblxuICAjZ2V0QXZhaWxhYmxlQ2VsbHMoZ2FtZWJvYXJkLCBzaG90cykge1xuICAgIHJldHVybiBnYW1lYm9hcmQuY2VsbHMuZmlsdGVyKChjZWxsKSA9PiB7XG4gICAgICBjb25zdCBmb3VuZCA9IHNob3RzLmZpbmQoKHNob3QpID0+IHtcbiAgICAgICAgcmV0dXJuIGNlbGwueCA9PT0gc2hvdC54ICYmIGNlbGwueSA9PT0gc2hvdC55O1xuICAgICAgfSk7XG4gICAgICByZXR1cm4gIWZvdW5kO1xuICAgIH0pO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFBsYXllcjtcbiIsImltcG9ydCBCYXR0bGVzaGlwIGZyb20gJy4vYmF0dGxlc2hpcCc7XG5pbXBvcnQgRGVzdHJveWVyIGZyb20gJy4vZGVzdHJveWVyJztcbmltcG9ydCBQYXRyb2xCb2F0IGZyb20gJy4vcGF0cm9sQm9hdCc7XG5pbXBvcnQgU3VibWFyaW5lIGZyb20gJy4vc3VibWFyaW5lJztcblxuY29uc3QgZ2FtZWJvYXJkU2hpcHMgPSBbXG4gIHtcbiAgICBjb3VudDogMSxcbiAgICB0eXBlOiBCYXR0bGVzaGlwLFxuICB9LFxuICB7XG4gICAgY291bnQ6IDIsXG4gICAgdHlwZTogRGVzdHJveWVyLFxuICB9LFxuICB7XG4gICAgY291bnQ6IDMsXG4gICAgdHlwZTogU3VibWFyaW5lLFxuICB9LFxuICB7XG4gICAgY291bnQ6IDQsXG4gICAgdHlwZTogUGF0cm9sQm9hdCxcbiAgfSxcbl07XG5cbmZ1bmN0aW9uIGhhc091dE9mQm91bmRzU2hpcHMoc2hpcHMsIGdhbWVib2FyZCkge1xuICBjb25zdCBzb21lU2hpcEdvZXNPdXRPZkJvdW5kcyA9IHNoaXBzLnNvbWUoKHNoaXApID0+IHtcbiAgICBpZiAoc2hpcC5vcmllbnRhdGlvbiA9PT0gJ2hvcml6b250YWwnKSB7XG4gICAgICByZXR1cm4gc2hpcC54ID4gZ2FtZWJvYXJkLnNpemUgLSBzaGlwLmxlbmd0aDtcbiAgICB9IGVsc2UgaWYgKHNoaXAub3JpZW50YXRpb24gPT09ICd2ZXJ0aWNhbCcpIHtcbiAgICAgIHJldHVybiBzaGlwLnkgPiBnYW1lYm9hcmQuc2l6ZSAtIHNoaXAubGVuZ3RoO1xuICAgIH1cbiAgfSk7XG5cbiAgcmV0dXJuIHNvbWVTaGlwR29lc091dE9mQm91bmRzO1xufVxuXG5mdW5jdGlvbiBoYXNPdmVybGFwcGluZ1NoaXBzKHNoaXBzKSB7XG4gIGNvbnN0IHNvbWVTaGlwT3ZlcmxhcHNBbm90aGVyU2hpcCA9IHNoaXBzLnNvbWUoKHNoaXApID0+IHtcbiAgICBjb25zdCBvdGhlclNoaXBzID0gc2hpcHMuZmlsdGVyKChvdGhlclNoaXApID0+IG90aGVyU2hpcCAhPT0gc2hpcCk7XG5cbiAgICBjb25zdCBzb21lQ2VsbHNPdmVybGFwID0gb3RoZXJTaGlwcy5zb21lKChvdGhlclNoaXApID0+IHtcbiAgICAgIHJldHVybiBvdGhlclNoaXAuY2VsbHMuc29tZSgoY2VsbCkgPT4gc2hpcC5jZWxscy5pbmNsdWRlcyhjZWxsKSk7XG4gICAgfSk7XG5cbiAgICByZXR1cm4gc29tZUNlbGxzT3ZlcmxhcDtcbiAgfSk7XG5cbiAgcmV0dXJuIHNvbWVTaGlwT3ZlcmxhcHNBbm90aGVyU2hpcDtcbn1cblxuZnVuY3Rpb24gaGFzQWRqYWNlbnRTaGlwcyhzaGlwcywgZ2FtZWJvYXJkKSB7XG4gIHJldHVybiAoXG4gICAgc29tZVNoaXBJc1RvVGhlUmlnaHQoc2hpcHMsIGdhbWVib2FyZCkgfHxcbiAgICBzb21lU2hpcElzQXRUaGVUb3Aoc2hpcHMsIGdhbWVib2FyZClcbiAgKTtcbn1cblxuZnVuY3Rpb24gc29tZVNoaXBJc1RvVGhlUmlnaHQoc2hpcHMsIGdhbWVib2FyZCkge1xuICByZXR1cm4gc2hpcHMuc29tZSgoc2hpcCkgPT4ge1xuICAgIGlmIChzaGlwQWdhaW5zdFJpZ2h0V2FsbChzaGlwLCBnYW1lYm9hcmQpKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuXG4gICAgY29uc3Qgb3RoZXJTaGlwcyA9IHNoaXBzLmZpbHRlcigob3RoZXJTaGlwKSA9PiBvdGhlclNoaXAgIT09IHNoaXApO1xuICAgIGNvbnN0IHJpZ2h0Q2VsbHMgPSBnZXRDZWxsc1RvVGhlUmlnaHQoZ2FtZWJvYXJkLCBzaGlwKTtcblxuICAgIGNvbnN0IHNvbWVTaGlwQ2VsbElzVG9UaGVSaWdodCA9IG90aGVyU2hpcHMuc29tZSgob3RoZXJTaGlwKSA9PiB7XG4gICAgICByZXR1cm4gcmlnaHRDZWxscy5zb21lKChyaWdodENlbGwpID0+XG4gICAgICAgIG90aGVyU2hpcC5jZWxscy5pbmNsdWRlcyhyaWdodENlbGwpLFxuICAgICAgKTtcbiAgICB9KTtcblxuICAgIHJldHVybiBzb21lU2hpcENlbGxJc1RvVGhlUmlnaHQ7XG4gIH0pO1xufVxuXG5mdW5jdGlvbiBnZXRDZWxsc1RvVGhlUmlnaHQoZ2FtZWJvYXJkLCBzaGlwKSB7XG4gIGNvbnN0IHJpZ2h0Q2VsbHMgPSBbXTtcbiAgbGV0IHJpZ2h0Q2VsbDtcblxuICBpZiAoc2hpcC5vcmllbnRhdGlvbiA9PT0gJ2hvcml6b250YWwnKSB7XG4gICAgY29uc3Qgc2hpcEZyb250ID0gc2hpcC5mcm9udCgpO1xuXG4gICAgcmlnaHRDZWxsID0gZ2FtZWJvYXJkLm9mZnNldENlbGwoc2hpcEZyb250LCAxLCAtMSk7XG4gICAgcmlnaHRDZWxscy5wdXNoKHJpZ2h0Q2VsbCk7XG5cbiAgICByaWdodENlbGwgPSBnYW1lYm9hcmQub2Zmc2V0Q2VsbChzaGlwRnJvbnQsIDEsIDApO1xuICAgIHJpZ2h0Q2VsbHMucHVzaChyaWdodENlbGwpO1xuXG4gICAgcmlnaHRDZWxsID0gZ2FtZWJvYXJkLm9mZnNldENlbGwoc2hpcEZyb250LCAxLCAxKTtcbiAgICByaWdodENlbGxzLnB1c2gocmlnaHRDZWxsKTtcblxuICAgIHJldHVybiByaWdodENlbGxzO1xuICB9IGVsc2UgaWYgKHNoaXAub3JpZW50YXRpb24gPT09ICd2ZXJ0aWNhbCcpIHtcbiAgICBzaGlwLmNlbGxzLmZvckVhY2goKGNlbGwpID0+IHtcbiAgICAgIHJpZ2h0Q2VsbCA9IGdhbWVib2FyZC5vZmZzZXRDZWxsKGNlbGwsIDEsIDApO1xuICAgICAgcmlnaHRDZWxscy5wdXNoKHJpZ2h0Q2VsbCk7XG4gICAgfSk7XG5cbiAgICByZXR1cm4gcmlnaHRDZWxscztcbiAgfVxufVxuXG5mdW5jdGlvbiBzb21lU2hpcElzQXRUaGVUb3Aoc2hpcHMsIGdhbWVib2FyZCkge1xuICByZXR1cm4gc2hpcHMuc29tZSgoc2hpcCkgPT4ge1xuICAgIGlmIChzaGlwQWdhaW5zdFRvcFdhbGwoc2hpcCkpIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG5cbiAgICBjb25zdCBvdGhlclNoaXBzID0gc2hpcHMuZmlsdGVyKChvdGhlclNoaXApID0+IG90aGVyU2hpcCAhPT0gc2hpcCk7XG4gICAgY29uc3QgdG9wQ2VsbHMgPSBnZXRDZWxsc0F0VGhlVG9wKGdhbWVib2FyZCwgc2hpcCk7XG5cbiAgICBjb25zdCBzb21lU2hpcENlbGxJc0F0VGhlVG9wID0gb3RoZXJTaGlwcy5zb21lKChvdGhlclNoaXApID0+IHtcbiAgICAgIHJldHVybiB0b3BDZWxscy5zb21lKCh0b3BDZWxsKSA9PiBvdGhlclNoaXAuY2VsbHMuaW5jbHVkZXModG9wQ2VsbCkpO1xuICAgIH0pO1xuXG4gICAgcmV0dXJuIHNvbWVTaGlwQ2VsbElzQXRUaGVUb3A7XG4gIH0pO1xufVxuXG5mdW5jdGlvbiBnZXRDZWxsc0F0VGhlVG9wKGdhbWVib2FyZCwgc2hpcCkge1xuICBjb25zdCB0b3BDZWxscyA9IFtdO1xuICBsZXQgdG9wQ2VsbDtcblxuICBpZiAoc2hpcC5vcmllbnRhdGlvbiA9PT0gJ2hvcml6b250YWwnKSB7XG4gICAgc2hpcC5jZWxscy5mb3JFYWNoKChjZWxsKSA9PiB7XG4gICAgICB0b3BDZWxsID0gZ2FtZWJvYXJkLm9mZnNldENlbGwoY2VsbCwgMCwgLTEpO1xuICAgICAgdG9wQ2VsbHMucHVzaCh0b3BDZWxsKTtcbiAgICB9KTtcblxuICAgIHJldHVybiB0b3BDZWxscztcbiAgfSBlbHNlIGlmIChzaGlwLm9yaWVudGF0aW9uID09PSAndmVydGljYWwnKSB7XG4gICAgY29uc3Qgc2hpcEJhY2sgPSBzaGlwLmJhY2soKTtcblxuICAgIHRvcENlbGwgPSBnYW1lYm9hcmQub2Zmc2V0Q2VsbChzaGlwQmFjaywgLTEsIC0xKTtcbiAgICB0b3BDZWxscy5wdXNoKHRvcENlbGwpO1xuXG4gICAgdG9wQ2VsbCA9IGdhbWVib2FyZC5vZmZzZXRDZWxsKHNoaXBCYWNrLCAwLCAtMSk7XG4gICAgdG9wQ2VsbHMucHVzaCh0b3BDZWxsKTtcblxuICAgIHRvcENlbGwgPSBnYW1lYm9hcmQub2Zmc2V0Q2VsbChzaGlwQmFjaywgMSwgLTEpO1xuICAgIHRvcENlbGxzLnB1c2godG9wQ2VsbCk7XG5cbiAgICByZXR1cm4gdG9wQ2VsbHM7XG4gIH1cbn1cblxuZnVuY3Rpb24gc2hpcEFnYWluc3RUb3BXYWxsKHNoaXApIHtcbiAgcmV0dXJuIHNoaXAueSA9PT0gMDtcbn1cblxuZnVuY3Rpb24gc2hpcEFnYWluc3RSaWdodFdhbGwoc2hpcCwgZ2FtZWJvYXJkKSB7XG4gIHJldHVybiBzaGlwLmZyb250KCkueCA9PT0gZ2FtZWJvYXJkLnNpemUgLSAxO1xufVxuXG5mdW5jdGlvbiBzaGlwQWdhaW5zdEJvdHRvbVdhbGwoc2hpcCwgZ2FtZWJvYXJkKSB7XG4gIHJldHVybiBzaGlwLmZyb250KCkueSA9PT0gZ2FtZWJvYXJkLnNpemUgLSAxO1xufVxuXG5mdW5jdGlvbiBzaGlwQWdhaW5zdExlZnRXYWxsKHNoaXApIHtcbiAgcmV0dXJuIHNoaXAueCA9PT0gMDtcbn1cblxuZXhwb3J0IHtcbiAgZ2FtZWJvYXJkU2hpcHMsXG4gIGhhc092ZXJsYXBwaW5nU2hpcHMsXG4gIGhhc091dE9mQm91bmRzU2hpcHMsXG4gIGhhc0FkamFjZW50U2hpcHMsXG4gIHNoaXBBZ2FpbnN0VG9wV2FsbCxcbiAgc2hpcEFnYWluc3RSaWdodFdhbGwsXG4gIHNoaXBBZ2FpbnN0Qm90dG9tV2FsbCxcbiAgc2hpcEFnYWluc3RMZWZ0V2FsbCxcbn07XG4iLCJpbXBvcnQgQ2VsbCBmcm9tICcuL2NlbGwnO1xuaW1wb3J0IGdldFJhbmRvbUludCBmcm9tICcuL2hlbHBlcnMnO1xuXG5jbGFzcyBTaGlwIHtcbiAgI2hpdHMgPSBbXTtcblxuICBjb25zdHJ1Y3RvcihsZW5ndGggPSAxKSB7XG4gICAgdGhpcy5sZW5ndGggPSBsZW5ndGg7XG4gICAgdGhpcy5vcmllbnRhdGlvbiA9ICdob3Jpem9udGFsJztcbiAgICB0aGlzLiNoaXRzID0gW107XG4gIH1cblxuICBoaXQoeCwgeSkge1xuICAgIHRoaXMuI2hpdHMucHVzaChuZXcgQ2VsbCh4LCB5KSk7XG4gIH1cblxuICBpc1N1bmsoKSB7XG4gICAgcmV0dXJuIHRoaXMuI2hpdHMubGVuZ3RoID09PSB0aGlzLmxlbmd0aDtcbiAgfVxuXG4gIHBsYWNlKHgsIHksIGdhbWVib2FyZCkge1xuICAgIHRoaXMueCA9IHg7XG4gICAgdGhpcy55ID0geTtcblxuICAgIHRoaXMuI3NldENlbGxzKGdhbWVib2FyZCk7XG4gIH1cblxuICBnZXRIaXRzKCkge1xuICAgIHJldHVybiBbLi4udGhpcy4jaGl0c107XG4gIH1cblxuICBzZXRWZXJ0aWNhbCgpIHtcbiAgICB0aGlzLm9yaWVudGF0aW9uID0gJ3ZlcnRpY2FsJztcbiAgfVxuXG4gIHNldEhvcml6b250YWwoKSB7XG4gICAgdGhpcy5vcmllbnRhdGlvbiA9ICdob3Jpem9udGFsJztcbiAgfVxuXG4gIHNldFJhbmRvbU9yaWVudGF0aW9uKCkge1xuICAgIGNvbnN0IG9yaWVudGF0aW9ucyA9IFsnaG9yaXpvbnRhbCcsICd2ZXJ0aWNhbCddO1xuICAgIGNvbnN0IGluZGV4ID0gZ2V0UmFuZG9tSW50KG9yaWVudGF0aW9ucy5sZW5ndGgpO1xuICAgIHRoaXMub3JpZW50YXRpb24gPSBvcmllbnRhdGlvbnNbaW5kZXhdO1xuICB9XG5cbiAgZnJvbnQoKSB7XG4gICAgcmV0dXJuIHRoaXMuY2VsbHMuYXQoLTEpO1xuICB9XG5cbiAgYmFjaygpIHtcbiAgICByZXR1cm4gdGhpcy5jZWxscy5hdCgwKTtcbiAgfVxuXG4gICNzZXRDZWxscyhnYW1lYm9hcmQpIHtcbiAgICB0aGlzLmNlbGxzID0gZ2FtZWJvYXJkLmNlbGxzLmZpbHRlcigoY2VsbCkgPT4ge1xuICAgICAgaWYgKHRoaXMub3JpZW50YXRpb24gPT09ICdob3Jpem9udGFsJykge1xuICAgICAgICBjb25zdCBiYWNrID0gdGhpcy54O1xuICAgICAgICBjb25zdCBmcm9udCA9IHRoaXMueCArIHRoaXMubGVuZ3RoIC0gMTtcblxuICAgICAgICByZXR1cm4gY2VsbC54ID49IGJhY2sgJiYgY2VsbC54IDw9IGZyb250ICYmIGNlbGwueSA9PT0gdGhpcy55O1xuICAgICAgfSBlbHNlIGlmICh0aGlzLm9yaWVudGF0aW9uID09PSAndmVydGljYWwnKSB7XG4gICAgICAgIGNvbnN0IGJhY2sgPSB0aGlzLnk7XG4gICAgICAgIGNvbnN0IGZyb250ID0gdGhpcy55ICsgdGhpcy5sZW5ndGggLSAxO1xuXG4gICAgICAgIHJldHVybiBjZWxsLnkgPj0gYmFjayAmJiBjZWxsLnkgPD0gZnJvbnQgJiYgY2VsbC54ID09PSB0aGlzLng7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgU2hpcDtcbiIsImltcG9ydCBTaGlwIGZyb20gJy4vc2hpcCc7XG5cbmNsYXNzIFN1Ym1hcmluZSBleHRlbmRzIFNoaXAge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICBzdXBlcigyKTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBTdWJtYXJpbmU7XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=