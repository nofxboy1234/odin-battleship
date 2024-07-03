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

async function isShotInvalid({
  gameboard: gameboardElement,
  pointerType,
  cell,
}) {
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
    if (currentPlayer === enemy) {
      await delay(2000);
      enemyPlay();
    }

    return true;
  }

  return false;
}

async function handleTurn(clickData) {
  const { gameboard: gameboardElement, cell, pointerType } = clickData;

  if (isShotInvalid(clickData)) {
    return;
  }

  gameboardElement.controller.receiveAttack(cell.x, cell.y);

  if (gameboardElement.controller.isShipOnCell(cell.x, cell.y)) {
    cell.enableHit();
    cell.disableHover();

    if (currentPlayer === human) {
      if (enemyGameboard.allShipsSunk()) {
        _dom_message__WEBPACK_IMPORTED_MODULE_4__["default"].setHumanWon();
        enemyGameboardElement.disable();
        humanGameboardElement.disable();
        return;
      }
    }

    if (currentPlayer === enemy) {
      if (humanGameboard.allShipsSunk()) {
        _dom_message__WEBPACK_IMPORTED_MODULE_4__["default"].setEnemyWon();
        enemyGameboardElement.disable();
        humanGameboardElement.disable();
        return;
      }

      await delay(2000);
      enemyPlay();
    }
  } else {
    cell.enableMiss();
    cell.disableHover();

    if (currentPlayer === human) {
      currentPlayer = enemy;
    } else {
      currentPlayer = human;
    }

    await delay(2000);
    nextTurn();
  }
}

function newGame() {
  removeGameboard(enemyContainer);
  removeGameboard(humanContainer);

  setupComputerPlayer();
  setupComputerGameboardElement();
  randomizeComputerGameboard();

  setupHumanPlayer();
  setupHumanGameboardElement();
  randomizeHumanGameboard();

  _dom_message__WEBPACK_IMPORTED_MODULE_4__["default"].setInstruction();

  randomizeButton.disabled = false;
  playButton.disabled = false;
}

function play() {
  enemyGameboardElement.enable();
  _dom_message__WEBPACK_IMPORTED_MODULE_4__["default"].setHumanTurn();
  randomizeButton.disabled = true;
  playButton.disabled = true;
}

function setupHumanGameboardElement() {
  humanGameboardElement = new _dom_gameboard__WEBPACK_IMPORTED_MODULE_2__["default"](human, handleTurn);
  humanGameboardElement.disable();
}

function setupComputerGameboardElement() {
  enemyGameboardElement = new _dom_gameboard__WEBPACK_IMPORTED_MODULE_2__["default"](enemy, handleTurn);
  enemyGameboardElement.disable();
  currentGameboardElement = enemyGameboardElement;
}

function setupComputerPlayer() {
  enemyGameboard = new _logic_gameboard__WEBPACK_IMPORTED_MODULE_3__["default"]();
  enemy = new _logic_player__WEBPACK_IMPORTED_MODULE_1__["default"](enemyGameboard, 'enemy');
}

function setupHumanPlayer() {
  humanGameboard = new _logic_gameboard__WEBPACK_IMPORTED_MODULE_3__["default"]();
  human = new _logic_player__WEBPACK_IMPORTED_MODULE_1__["default"](humanGameboard, 'human');
  currentPlayer = human;
}

function randomizeComputerGameboard() {
  enemyGameboard.reset();
  enemyGameboardElement.reset();

  enemy.placeRandomShips();
  enemyGameboardElement.createShips();
  enemyGameboardElement.renderShips();
  enemyContainer.appendChild(enemyGameboardElement.render());
}

function randomizeHumanGameboard() {
  humanGameboard.reset();
  humanGameboardElement.reset();

  human.placeRandomShips();
  humanGameboardElement.createShips();
  humanGameboardElement.renderShips();
  humanContainer.appendChild(humanGameboardElement.render());
}

const newGameButton = document.getElementById('new-game-btn');
newGameButton.addEventListener('click', () => {
  newGame();
  console.log('New game done!');
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

newGame();


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
    } else {
      this.#misses.push(new _cell__WEBPACK_IMPORTED_MODULE_0__["default"](x, y));
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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O0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxRQUFRO0FBQ1I7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMEJBQTBCLDZDQUFJO0FBQzlCO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUCxLQUFLO0FBQ0w7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSwwQkFBMEIsNkNBQUk7QUFDOUI7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRO0FBQ1I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Es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RUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBLEdBQUc7QUFDSDs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0EsSUFBSTtBQUNKOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQU9FOzs7Ozs7Ozs7Ozs7Ozs7OztBQ2hLd0I7QUFDVzs7QUFFckM7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0Esd0JBQXdCLDZDQUFJO0FBQzVCOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0Esa0JBQWtCLG9EQUFZO0FBQzlCO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsUUFBUTtBQUNSO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBOztBQUVBLGlFQUFlLElBQUksRUFBQzs7Ozs7Ozs7Ozs7Ozs7OztBQ3RFTTs7QUFFMUIsd0JBQXdCLDZDQUFJO0FBQzVCO0FBQ0E7QUFDQTtBQUNBOztBQUVBLGlFQUFlLFNBQVMsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL3dlYnBhY2stdGVtcGxhdGUvLi9zcmMvc3R5bGUuY3NzIiwid2VicGFjazovL3dlYnBhY2stdGVtcGxhdGUvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL3dlYnBhY2stdGVtcGxhdGUvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLXRlbXBsYXRlLy4vc3JjL3N0eWxlLmNzcz83MTYzIiwid2VicGFjazovL3dlYnBhY2stdGVtcGxhdGUvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vd2VicGFjay10ZW1wbGF0ZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vd2VicGFjay10ZW1wbGF0ZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLXRlbXBsYXRlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL3dlYnBhY2stdGVtcGxhdGUvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLXRlbXBsYXRlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vd2VicGFjay10ZW1wbGF0ZS8uL3NyYy9kb20vY2VsbC5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLXRlbXBsYXRlLy4vc3JjL2RvbS9nYW1lYm9hcmQuanMiLCJ3ZWJwYWNrOi8vd2VicGFjay10ZW1wbGF0ZS8uL3NyYy9kb20vbWVzc2FnZS5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLXRlbXBsYXRlLy4vc3JjL2RvbS9zaGlwLmpzIiwid2VicGFjazovL3dlYnBhY2stdGVtcGxhdGUvLi9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vd2VicGFjay10ZW1wbGF0ZS8uL3NyYy9sb2dpYy9iYXR0bGVzaGlwLmpzIiwid2VicGFjazovL3dlYnBhY2stdGVtcGxhdGUvLi9zcmMvbG9naWMvY2VsbC5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLXRlbXBsYXRlLy4vc3JjL2xvZ2ljL2Rlc3Ryb3llci5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLXRlbXBsYXRlLy4vc3JjL2xvZ2ljL2dhbWVib2FyZC5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLXRlbXBsYXRlLy4vc3JjL2xvZ2ljL2hlbHBlcnMuanMiLCJ3ZWJwYWNrOi8vd2VicGFjay10ZW1wbGF0ZS8uL3NyYy9sb2dpYy9wYXRyb2xCb2F0LmpzIiwid2VicGFjazovL3dlYnBhY2stdGVtcGxhdGUvLi9zcmMvbG9naWMvcGxheWVyLmpzIiwid2VicGFjazovL3dlYnBhY2stdGVtcGxhdGUvLi9zcmMvbG9naWMvcnVsZXMuanMiLCJ3ZWJwYWNrOi8vd2VicGFjay10ZW1wbGF0ZS8uL3NyYy9sb2dpYy9zaGlwLmpzIiwid2VicGFjazovL3dlYnBhY2stdGVtcGxhdGUvLi9zcmMvbG9naWMvc3VibWFyaW5lLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIGAqIHtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgbWFyZ2luOiAwO1xufVxuXG4jbWFpbi1sYXlvdXQge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgbWFyZ2luOiAxcmVtO1xufVxuXG4jY29udGVudC1sYXlvdXQge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBnYXA6IDFyZW07XG59XG5cbi5idXR0b24tY29udGFpbmVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGdhcDogMXJlbTtcbn1cblxuLmJvYXJkLWxhYmVsIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG5cbi5nYW1lYm9hcmQge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn1cblxuLmdhbWVib2FyZC0wIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbn1cblxuLmdhbWVib2FyZC0wLWJsYW5rIHtcbiAgd2lkdGg6IDMwcHg7XG4gIGhlaWdodDogMzBweDtcbn1cblxuLmdhbWVib2FyZC0wLWxhYmVsIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIHdpZHRoOiAzMHB4O1xuICBoZWlnaHQ6IDMwcHg7XG4gIGJvcmRlci1yaWdodDogMXB4IHNvbGlkIGJsYWNrO1xufVxuXG4uZ2FtZWJvYXJkLTEge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xufVxuXG4uZ2FtZWJvYXJkLTEtMCB7XG4gIGRpc3BsYXk6IGZsZXg7XG59XG5cbi5nYW1lYm9hcmQtMS0wLWxhYmVsIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIHdpZHRoOiAzMHB4O1xuICBoZWlnaHQ6IDMwcHg7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCBibGFjaztcbn1cblxuLmdhbWVib2FyZC0xLTEge1xuICBkaXNwbGF5OiBncmlkO1xuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgxMCwgMzBweCk7XG4gIGdyaWQtdGVtcGxhdGUtcm93czogcmVwZWF0KDEwLCAzMHB4KTtcbn1cblxuLmdhbWVib2FyZC0xLTEtY2VsbCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBib3JkZXItcmlnaHQ6IDFweCBzb2xpZCBibGFjaztcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIGJsYWNrO1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi5ob3Zlcjpob3ZlciB7XG4gIGJhY2tncm91bmQtY29sb3I6IHllbGxvdztcbn1cblxuLmZpbGwge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcbn1cblxuLmhpdCB7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigyMDcsIDI1NSwgMTM2KTtcbn1cblxuLm1pc3Mge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjU1LCAyMDksIDEyMyk7XG59XG5cbi5kaXNhYmxlZCB7XG4gIGZpbHRlcjogY29udHJhc3QoMjAlKTtcbn1cblxuYnV0dG9uIHtcbiAgd2lkdGg6IDEwMHB4O1xufVxuXG4jZW5lbXktYm9hcmQtbGFiZWwge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBvcmFuZ2U7XG59XG5cbiNodW1hbi1ib2FyZC1sYWJlbCB7XG4gIGJhY2tncm91bmQtY29sb3I6IGdyZWVueWVsbG93O1xufVxuXG4jbWVzc2FnZS1jb250YWluZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn1cblxuI21lc3NhZ2Uge1xuICBjb2xvcjogYmx1ZTtcbn1cbmAsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtFQUNFLHNCQUFzQjtFQUN0QixTQUFTO0FBQ1g7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsdUJBQXVCO0VBQ3ZCLFlBQVk7QUFDZDs7QUFFQTtFQUNFLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsU0FBUztBQUNYOztBQUVBO0VBQ0UsYUFBYTtFQUNiLHVCQUF1QjtFQUN2QixTQUFTO0FBQ1g7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsdUJBQXVCO0FBQ3pCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLHVCQUF1QjtBQUN6Qjs7QUFFQTtFQUNFLGFBQWE7RUFDYixzQkFBc0I7QUFDeEI7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsWUFBWTtBQUNkOztBQUVBO0VBQ0UsYUFBYTtFQUNiLHVCQUF1QjtFQUN2QixtQkFBbUI7RUFDbkIsV0FBVztFQUNYLFlBQVk7RUFDWiw2QkFBNkI7QUFDL0I7O0FBRUE7RUFDRSxhQUFhO0VBQ2Isc0JBQXNCO0FBQ3hCOztBQUVBO0VBQ0UsYUFBYTtBQUNmOztBQUVBO0VBQ0UsYUFBYTtFQUNiLHVCQUF1QjtFQUN2QixtQkFBbUI7RUFDbkIsV0FBVztFQUNYLFlBQVk7RUFDWiw4QkFBOEI7QUFDaEM7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsdUNBQXVDO0VBQ3ZDLG9DQUFvQztBQUN0Qzs7QUFFQTtFQUNFLGFBQWE7RUFDYix1QkFBdUI7RUFDdkIsbUJBQW1CO0VBQ25CLDZCQUE2QjtFQUM3Qiw4QkFBOEI7RUFDOUIsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLHdCQUF3QjtBQUMxQjs7QUFFQTtFQUNFLHVCQUF1QjtBQUN6Qjs7QUFFQTtFQUNFLG9DQUFvQztBQUN0Qzs7QUFFQTtFQUNFLG9DQUFvQztBQUN0Qzs7QUFFQTtFQUNFLHFCQUFxQjtBQUN2Qjs7QUFFQTtFQUNFLFlBQVk7QUFDZDs7QUFFQTtFQUNFLHdCQUF3QjtBQUMxQjs7QUFFQTtFQUNFLDZCQUE2QjtBQUMvQjs7QUFFQTtFQUNFLGFBQWE7RUFDYix1QkFBdUI7QUFDekI7O0FBRUE7RUFDRSxXQUFXO0FBQ2JcIixcInNvdXJjZXNDb250ZW50XCI6W1wiKiB7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgbWFyZ2luOiAwO1xcbn1cXG5cXG4jbWFpbi1sYXlvdXQge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgbWFyZ2luOiAxcmVtO1xcbn1cXG5cXG4jY29udGVudC1sYXlvdXQge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBnYXA6IDFyZW07XFxufVxcblxcbi5idXR0b24tY29udGFpbmVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGdhcDogMXJlbTtcXG59XFxuXFxuLmJvYXJkLWxhYmVsIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG59XFxuXFxuLmdhbWVib2FyZCB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxufVxcblxcbi5nYW1lYm9hcmQtMCB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG59XFxuXFxuLmdhbWVib2FyZC0wLWJsYW5rIHtcXG4gIHdpZHRoOiAzMHB4O1xcbiAgaGVpZ2h0OiAzMHB4O1xcbn1cXG5cXG4uZ2FtZWJvYXJkLTAtbGFiZWwge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIHdpZHRoOiAzMHB4O1xcbiAgaGVpZ2h0OiAzMHB4O1xcbiAgYm9yZGVyLXJpZ2h0OiAxcHggc29saWQgYmxhY2s7XFxufVxcblxcbi5nYW1lYm9hcmQtMSB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG59XFxuXFxuLmdhbWVib2FyZC0xLTAge1xcbiAgZGlzcGxheTogZmxleDtcXG59XFxuXFxuLmdhbWVib2FyZC0xLTAtbGFiZWwge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIHdpZHRoOiAzMHB4O1xcbiAgaGVpZ2h0OiAzMHB4O1xcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIGJsYWNrO1xcbn1cXG5cXG4uZ2FtZWJvYXJkLTEtMSB7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMTAsIDMwcHgpO1xcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiByZXBlYXQoMTAsIDMwcHgpO1xcbn1cXG5cXG4uZ2FtZWJvYXJkLTEtMS1jZWxsIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBib3JkZXItcmlnaHQ6IDFweCBzb2xpZCBibGFjaztcXG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCBibGFjaztcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLmhvdmVyOmhvdmVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHllbGxvdztcXG59XFxuXFxuLmZpbGwge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XFxufVxcblxcbi5oaXQge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDIwNywgMjU1LCAxMzYpO1xcbn1cXG5cXG4ubWlzcyB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjU1LCAyMDksIDEyMyk7XFxufVxcblxcbi5kaXNhYmxlZCB7XFxuICBmaWx0ZXI6IGNvbnRyYXN0KDIwJSk7XFxufVxcblxcbmJ1dHRvbiB7XFxuICB3aWR0aDogMTAwcHg7XFxufVxcblxcbiNlbmVteS1ib2FyZC1sYWJlbCB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBvcmFuZ2U7XFxufVxcblxcbiNodW1hbi1ib2FyZC1sYWJlbCB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBncmVlbnllbGxvdztcXG59XFxuXFxuI21lc3NhZ2UtY29udGFpbmVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG59XFxuXFxuI21lc3NhZ2Uge1xcbiAgY29sb3I6IGJsdWU7XFxufVxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTtcblxuICAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTtcblxuICAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7XG5cbiAgICAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cbiAgY3NzICs9IG9iai5jc3M7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH1cblxuICAvLyBGb3Igb2xkIElFXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIGlmICh0eXBlb2YgZG9jdW1lbnQgPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICByZXR1cm4ge1xuICAgICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUoKSB7fSxcbiAgICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge31cbiAgICB9O1xuICB9XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJjbGFzcyBDZWxsIHtcbiAgI2VsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcblxuICBjb25zdHJ1Y3Rvcih4LCB5LCBkaXNhYmxlZCkge1xuICAgIHRoaXMueCA9IHg7XG4gICAgdGhpcy55ID0geTtcblxuICAgIHRoaXMuI2VsZW1lbnQuY2xhc3NMaXN0LmFkZCgnZ2FtZWJvYXJkLTEtMS1jZWxsJyk7XG4gICAgdGhpcy4jZWxlbWVudC50ZXh0Q29udGVudCA9IGAke3h9LCAke3l9YDtcblxuICAgIGlmIChkaXNhYmxlZCkge1xuICAgICAgdGhpcy5kaXNhYmxlSG92ZXIoKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5lbmFibGVIb3ZlcigpO1xuICAgIH1cblxuICAgIHRoaXMuI2VsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZXZlbnQpID0+IHtcbiAgICAgIHRoaXMuI2hhbmRsZUNsaWNrKGV2ZW50KTtcbiAgICB9KTtcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gdGhpcy4jZWxlbWVudDtcbiAgfVxuXG4gIGVuYWJsZUZpbGwoKSB7XG4gICAgdGhpcy4jZWxlbWVudC5jbGFzc0xpc3QuYWRkKCdmaWxsJyk7XG4gIH1cblxuICBlbmFibGVNaXNzKCkge1xuICAgIHRoaXMuI2VsZW1lbnQuY2xhc3NMaXN0LmFkZCgnbWlzcycpO1xuICB9XG5cbiAgZW5hYmxlSGl0KCkge1xuICAgIHRoaXMuI2VsZW1lbnQuY2xhc3NMaXN0LmFkZCgnaGl0Jyk7XG4gIH1cblxuICBlbmFibGVIb3ZlcigpIHtcbiAgICB0aGlzLiNlbGVtZW50LmNsYXNzTGlzdC5hZGQoJ2hvdmVyJyk7XG4gIH1cblxuICBkaXNhYmxlSG92ZXIoKSB7XG4gICAgdGhpcy4jZWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKCdob3ZlcicpO1xuICB9XG5cbiAgI2hhbmRsZUNsaWNrKGV2ZW50KSB7XG4gICAgZXZlbnQuY2VsbCA9IHRoaXM7XG4gIH1cblxuICByZXNldCgpIHtcbiAgICB0aGlzLiNkaXNhYmxlRmlsbCgpO1xuICAgIHRoaXMuI2Rpc2FibGVIaXQoKTtcbiAgICB0aGlzLiNkaXNhYmxlTWlzcygpO1xuICB9XG5cbiAgI2Rpc2FibGVGaWxsKCkge1xuICAgIHRoaXMuI2VsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZSgnZmlsbCcpO1xuICB9XG5cbiAgI2Rpc2FibGVNaXNzKCkge1xuICAgIHRoaXMuI2VsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZSgnbWlzcycpO1xuICB9XG5cbiAgI2Rpc2FibGVIaXQoKSB7XG4gICAgdGhpcy4jZWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKCdoaXQnKTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBDZWxsO1xuIiwiaW1wb3J0IENlbGwgZnJvbSAnLi9jZWxsJztcbmltcG9ydCBTaGlwIGZyb20gJy4vc2hpcCc7XG5cbmNsYXNzIEdhbWVib2FyZCB7XG4gICNlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICNkaXNhYmxlZCA9IGZhbHNlO1xuICAjY2VsbHMgPSBbXTtcbiAgI3NoaXBzID0gW107XG4gICNjb250cm9sbGVyID0gdW5kZWZpbmVkO1xuXG4gIGNvbnN0cnVjdG9yKHBsYXllciwgaGFuZGxlVHVybkNhbGxiYWNrKSB7XG4gICAgdGhpcy5wbGF5ZXIgPSBwbGF5ZXI7XG4gICAgdGhpcy4jY29udHJvbGxlciA9IHBsYXllci5nYW1lYm9hcmQ7XG4gICAgdGhpcy5oYW5kbGVUdXJuQ2FsbGJhY2sgPSBoYW5kbGVUdXJuQ2FsbGJhY2s7XG5cbiAgICB0aGlzLiNlbGVtZW50LmNsYXNzTGlzdC5hZGQoJ2dhbWVib2FyZCcpO1xuXG4gICAgdGhpcy5jcmVhdGVMYWJlbHNMZWZ0Q29udGFpbmVyKCk7XG4gICAgdGhpcy5jcmVhdGVMYWJlbHNMZWZ0KCk7XG5cbiAgICB0aGlzLmNyZWF0ZUdhbWVib2FyZDEoKTtcblxuICAgIHRoaXMuY3JlYXRlTGFiZWxzVG9wQ29udGFpbmVyKCk7XG4gICAgdGhpcy5jcmVhdGVMYWJlbHNUb3AoKTtcblxuICAgIHRoaXMuY3JlYXRlR3JpZCgpO1xuICAgIHRoaXMuI2NyZWF0ZUNlbGxzKCk7XG4gICAgdGhpcy5yZW5kZXJDZWxscygpO1xuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiB0aGlzLiNlbGVtZW50O1xuICB9XG5cbiAgYXBwZW5kQ2hpbGQoZWxlbWVudCkge1xuICAgIHRoaXMuI2VsZW1lbnQuYXBwZW5kQ2hpbGQoZWxlbWVudCk7XG4gIH1cblxuICBkaXNhYmxlKCkge1xuICAgIHRoaXMuI2Rpc2FibGVkID0gdHJ1ZTtcbiAgICB0aGlzLiNlbGVtZW50LmNsYXNzTGlzdC5hZGQoJ2Rpc2FibGVkJyk7XG5cbiAgICB0aGlzLmRpc2FibGVIb3Zlck9uQWxsQ2VsbHMoKTtcbiAgfVxuXG4gIGRpc2FibGVIb3Zlck9uQWxsQ2VsbHMoKSB7XG4gICAgdGhpcy4jY2VsbHMuZm9yRWFjaCgoY2VsbERPTSkgPT4ge1xuICAgICAgY2VsbERPTS5kaXNhYmxlSG92ZXIoKTtcbiAgICB9KTtcbiAgfVxuXG4gIGVuYWJsZSgpIHtcbiAgICB0aGlzLiNkaXNhYmxlZCA9IGZhbHNlO1xuICAgIHRoaXMuI2VsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZSgnZGlzYWJsZWQnKTtcblxuICAgIHRoaXMuI2VuYWJsZUhvdmVyT25BbGxPcGVuQ2VsbHMoKTtcbiAgfVxuXG4gIGlzRGlzYWJsZWQoKSB7XG4gICAgcmV0dXJuIHRoaXMuI2Rpc2FibGVkO1xuICB9XG5cbiAgY3JlYXRlTGFiZWxzTGVmdENvbnRhaW5lcigpIHtcbiAgICBjb25zdCBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgZWxlbWVudC5jbGFzc0xpc3QuYWRkKCdnYW1lYm9hcmQtMCcpO1xuICAgIHRoaXMuYXBwZW5kQ2hpbGQoZWxlbWVudCk7XG5cbiAgICB0aGlzLmxhYmVsc0xlZnRDb250YWluZXIgPSBlbGVtZW50O1xuICB9XG5cbiAgY3JlYXRlTGFiZWxzTGVmdCgpIHtcbiAgICBjb25zdCBsYWJlbHMgPSBbJycsICcxJywgJzInLCAnMycsICc0JywgJzUnLCAnNicsICc3JywgJzgnLCAnOScsICcxMCddO1xuXG4gICAgbGFiZWxzLmZvckVhY2goKGxhYmVsLCBpbmRleCkgPT4ge1xuICAgICAgY29uc3QgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuXG4gICAgICBpZiAoaW5kZXggPT09IDApIHtcbiAgICAgICAgZWxlbWVudC5jbGFzc0xpc3QuYWRkKCdnYW1lYm9hcmQtMC1ibGFuaycpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgZWxlbWVudC5jbGFzc0xpc3QuYWRkKCdnYW1lYm9hcmQtMC1sYWJlbCcpO1xuICAgICAgfVxuXG4gICAgICBlbGVtZW50LnRleHRDb250ZW50ID0gbGFiZWw7XG4gICAgICB0aGlzLmxhYmVsc0xlZnRDb250YWluZXIuYXBwZW5kQ2hpbGQoZWxlbWVudCk7XG4gICAgfSk7XG4gIH1cblxuICBjcmVhdGVHYW1lYm9hcmQxKCkge1xuICAgIGNvbnN0IGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBlbGVtZW50LmNsYXNzTGlzdC5hZGQoJ2dhbWVib2FyZC0xJyk7XG4gICAgdGhpcy5hcHBlbmRDaGlsZChlbGVtZW50KTtcblxuICAgIHRoaXMuZ2FtZWJvYXJkXzEgPSBlbGVtZW50O1xuICB9XG5cbiAgY3JlYXRlTGFiZWxzVG9wQ29udGFpbmVyKCkge1xuICAgIGNvbnN0IGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBlbGVtZW50LmNsYXNzTGlzdC5hZGQoJ2dhbWVib2FyZC0xLTAnKTtcbiAgICB0aGlzLmdhbWVib2FyZF8xLmFwcGVuZENoaWxkKGVsZW1lbnQpO1xuXG4gICAgdGhpcy5sYWJlbHNUb3BDb250YWluZXIgPSBlbGVtZW50O1xuICB9XG5cbiAgY3JlYXRlTGFiZWxzVG9wKCkge1xuICAgIGNvbnN0IGxhYmVscyA9IFsnQScsICdCJywgJ0MnLCAnRCcsICdFJywgJ0YnLCAnRycsICdIJywgJ0knLCAnSiddO1xuXG4gICAgbGFiZWxzLmZvckVhY2goKGxhYmVsKSA9PiB7XG4gICAgICBjb25zdCBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5cbiAgICAgIGVsZW1lbnQuY2xhc3NMaXN0LmFkZCgnZ2FtZWJvYXJkLTEtMC1sYWJlbCcpO1xuXG4gICAgICBlbGVtZW50LnRleHRDb250ZW50ID0gbGFiZWw7XG4gICAgICB0aGlzLmxhYmVsc1RvcENvbnRhaW5lci5hcHBlbmRDaGlsZChlbGVtZW50KTtcbiAgICB9KTtcbiAgfVxuXG4gIGNyZWF0ZUdyaWQoKSB7XG4gICAgY29uc3QgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGVsZW1lbnQuY2xhc3NMaXN0LmFkZCgnZ2FtZWJvYXJkLTEtMScpO1xuICAgIHRoaXMuZ2FtZWJvYXJkXzEuYXBwZW5kQ2hpbGQoZWxlbWVudCk7XG5cbiAgICB0aGlzLmdhbWVib2FyZF8xXzEgPSBlbGVtZW50O1xuXG4gICAgdGhpcy5nYW1lYm9hcmRfMV8xLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGV2ZW50KSA9PiB7XG4gICAgICB0aGlzLiNoYW5kbGVDbGljayhldmVudCk7XG4gICAgfSk7XG4gIH1cblxuICBjcmVhdGVTaGlwcygpIHtcbiAgICBjb25zdCBzaGlwcyA9IHRoaXMuI2NvbnRyb2xsZXIuZ2V0U2hpcHMoKTtcbiAgICBzaGlwcy5mb3JFYWNoKChzaGlwKSA9PiB7XG4gICAgICBjb25zdCBjZWxsRE9NcyA9IHRoaXMuI2dldFNoaXBDZWxsRE9NcyhzaGlwKTtcbiAgICAgIGNvbnN0IHNoaXBET00gPSBuZXcgU2hpcChzaGlwLngsIHNoaXAueSwgc2hpcC5sZW5ndGgsIGNlbGxET01zKTtcbiAgICAgIHRoaXMuI3NoaXBzLnB1c2goc2hpcERPTSk7XG4gICAgfSk7XG4gIH1cblxuICBnZXRDZWxsRE9NKHgsIHkpIHtcbiAgICByZXR1cm4gdGhpcy4jY2VsbHMuZmluZCgoY2VsbERPTSkgPT4ge1xuICAgICAgcmV0dXJuIGNlbGxET00ueCA9PT0geCAmJiBjZWxsRE9NLnkgPT09IHk7XG4gICAgfSk7XG4gIH1cblxuICByZW5kZXJDZWxscygpIHtcbiAgICB0aGlzLiNjZWxscy5mb3JFYWNoKChjZWxsRE9NKSA9PiB7XG4gICAgICB0aGlzLmdhbWVib2FyZF8xXzEuYXBwZW5kQ2hpbGQoY2VsbERPTS5yZW5kZXIoKSk7XG4gICAgfSk7XG4gIH1cblxuICByZW5kZXJTaGlwcygpIHtcbiAgICB0aGlzLiNzaGlwcy5mb3JFYWNoKChzaGlwRE9NKSA9PiB7XG4gICAgICBjb25zdCBjZWxsRE9NcyA9IHNoaXBET00uY2VsbHM7XG4gICAgICBjZWxsRE9Ncy5mb3JFYWNoKChjZWxsRE9NKSA9PiB7XG4gICAgICAgIGNlbGxET00uZW5hYmxlRmlsbCgpO1xuICAgICAgfSk7XG4gICAgfSk7XG4gIH1cblxuICByZXNldCgpIHtcbiAgICB0aGlzLiNzaGlwcyA9IFtdO1xuICAgIHRoaXMuI2NlbGxzLmZvckVhY2goKGNlbGxET00pID0+IGNlbGxET00ucmVzZXQoKSk7XG4gIH1cblxuICAjY3JlYXRlQ2VsbHMoKSB7XG4gICAgY29uc3QgY2VsbHMgPSB0aGlzLiNjb250cm9sbGVyLmNlbGxzO1xuXG4gICAgY2VsbHMuZm9yRWFjaCgoY2VsbCkgPT4ge1xuICAgICAgY29uc3QgeCA9IGNlbGwueDtcbiAgICAgIGNvbnN0IHkgPSBjZWxsLnk7XG4gICAgICBjb25zdCBjZWxsRE9NID0gbmV3IENlbGwoeCwgeSwgdGhpcy5pc0Rpc2FibGVkKCkpO1xuICAgICAgdGhpcy4jY2VsbHMucHVzaChjZWxsRE9NKTtcbiAgICB9KTtcbiAgfVxuXG4gICNlbmFibGVIb3Zlck9uQWxsT3BlbkNlbGxzKCkge1xuICAgIHRoaXMuI2NlbGxzLmZvckVhY2goKGNlbGxET00pID0+IHtcbiAgICAgIGlmICghdGhpcy4jY29udHJvbGxlci5pc0V4aXN0aW5nU2hvdChjZWxsRE9NLngsIGNlbGxET00ueSkpIHtcbiAgICAgICAgY2VsbERPTS5lbmFibGVIb3ZlcigpO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgI2dldFNoaXBDZWxsRE9NcyhzaGlwKSB7XG4gICAgY29uc3Qgc2hpcEJhY2sgPSBzaGlwLmJhY2soKTtcbiAgICBjb25zdCBzaGlwRnJvbnQgPSBzaGlwLmZyb250KCk7XG5cbiAgICByZXR1cm4gdGhpcy4jY2VsbHMuZmlsdGVyKChjZWxsRE9NKSA9PiB7XG4gICAgICBpZiAoc2hpcC5vcmllbnRhdGlvbiA9PT0gJ2hvcml6b250YWwnKSB7XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgY2VsbERPTS54ID49IHNoaXBCYWNrLnggJiZcbiAgICAgICAgICBjZWxsRE9NLnggPD0gc2hpcEZyb250LnggJiZcbiAgICAgICAgICBjZWxsRE9NLnkgPT09IHNoaXAueVxuICAgICAgICApO1xuICAgICAgfSBlbHNlIGlmIChzaGlwLm9yaWVudGF0aW9uID09PSAndmVydGljYWwnKSB7XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgY2VsbERPTS55ID49IHNoaXBCYWNrLnkgJiZcbiAgICAgICAgICBjZWxsRE9NLnkgPD0gc2hpcEZyb250LnkgJiZcbiAgICAgICAgICBjZWxsRE9NLnggPT09IHNoaXAueFxuICAgICAgICApO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgI2hhbmRsZUNsaWNrKGV2ZW50KSB7XG4gICAgY29uc3QgY2xpY2tEYXRhID0ge307XG4gICAgY2xpY2tEYXRhLmNlbGwgPSBldmVudC5jZWxsO1xuICAgIGNsaWNrRGF0YS5nYW1lYm9hcmQgPSB7XG4gICAgICBjb250cm9sbGVyOiB0aGlzLiNjb250cm9sbGVyLFxuICAgICAgb3duZXI6IHRoaXMucGxheWVyLFxuICAgICAgZGlzYWJsZWQ6IHRoaXMuaXNEaXNhYmxlZCgpLFxuICAgIH07XG4gICAgY2xpY2tEYXRhLnBvaW50ZXJUeXBlID0gZXZlbnQucG9pbnRlclR5cGU7XG5cbiAgICB0aGlzLmhhbmRsZVR1cm5DYWxsYmFjayhjbGlja0RhdGEpO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEdhbWVib2FyZDtcbiIsImxldCBlbGVtZW50O1xuXG5jb25zdCBtZXNzYWdlID0ge1xuICBzZXRFbGVtZW50KGRpdikge1xuICAgIGVsZW1lbnQgPSBkaXY7XG4gIH0sXG4gIHNldEVuZW15VHVybigpIHtcbiAgICBlbGVtZW50LnRleHRDb250ZW50ID0gXCJFbmVteSdzIHR1cm4hXCI7XG4gIH0sXG4gIHNldEh1bWFuVHVybigpIHtcbiAgICBlbGVtZW50LnRleHRDb250ZW50ID0gJ1lvdXIgdHVybiEnO1xuICB9LFxuICBzZXRFbmVteVdvbigpIHtcbiAgICBlbGVtZW50LnRleHRDb250ZW50ID0gJ0VuZW15IHdvbiEnO1xuICB9LFxuICBzZXRIdW1hbldvbigpIHtcbiAgICBlbGVtZW50LnRleHRDb250ZW50ID0gJ1lvdSB3b24hJztcbiAgfSxcbiAgc2V0SW5zdHJ1Y3Rpb24oKSB7XG4gICAgZWxlbWVudC50ZXh0Q29udGVudCA9XG4gICAgICBcIlJhbmRvbWl6ZSB5b3VyIHNoaXBzIHVudGlsIHlvdSdyZSBoYXBweSB3aXRoIHRoZWlyIHBvc2l0aW9ucywgdGhlbiBwcmVzcyBQbGF5IVwiO1xuICB9LFxuICB0ZXh0KCkge1xuICAgIHJldHVybiBlbGVtZW50LnRleHRDb250ZW50O1xuICB9LFxufTtcblxuZXhwb3J0IGRlZmF1bHQgbWVzc2FnZTtcbiIsImNsYXNzIFNoaXAge1xuICBjb25zdHJ1Y3Rvcih4LCB5LCBsZW5ndGgsIGNlbGxzKSB7XG4gICAgdGhpcy54ID0geDtcbiAgICB0aGlzLnkgPSB5O1xuICAgIHRoaXMubGVuZ3RoID0gbGVuZ3RoO1xuICAgIHRoaXMuY2VsbHMgPSBjZWxscztcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBTaGlwO1xuIiwiaW1wb3J0ICcuL3N0eWxlLmNzcyc7XG5pbXBvcnQgUGxheWVyIGZyb20gJy4vbG9naWMvcGxheWVyJztcbmltcG9ydCBHYW1lYm9hcmRFbGVtZW50IGZyb20gJy4vZG9tL2dhbWVib2FyZCc7XG5pbXBvcnQgR2FtZWJvYXJkIGZyb20gJy4vbG9naWMvZ2FtZWJvYXJkJztcbmltcG9ydCBtZXNzYWdlIGZyb20gJy4vZG9tL21lc3NhZ2UnO1xuXG5mdW5jdGlvbiByZW1vdmVHYW1lYm9hcmQoY29udGFpbmVyKSB7XG4gIGNvbnN0IGNoaWxkID0gY29udGFpbmVyLmZpcnN0Q2hpbGQ7XG4gIGlmIChjaGlsZCkge1xuICAgIGNvbnRhaW5lci5yZW1vdmVDaGlsZChjaGlsZCk7XG4gIH1cbn1cblxuZnVuY3Rpb24gaXNQbGF5ZXJDbGlja2luZ093bkdhbWVib2FyZChjbGlja2VkR2FtZWJvYXJkRWxlbWVudCwgcG9pbnRlclR5cGUpIHtcbiAgcmV0dXJuIChcbiAgICBjbGlja2VkR2FtZWJvYXJkRWxlbWVudC5vd25lciA9PT0gY3VycmVudFBsYXllciB8fFxuICAgIChjbGlja2VkR2FtZWJvYXJkRWxlbWVudC5vd25lciA9PT0gaHVtYW4gJiYgcG9pbnRlclR5cGUgPT09ICdtb3VzZScpIHx8XG4gICAgKGNsaWNrZWRHYW1lYm9hcmRFbGVtZW50Lm93bmVyID09PSBlbmVteSAmJiBwb2ludGVyVHlwZSA9PT0gJycpXG4gICk7XG59XG5cbmZ1bmN0aW9uIGlzSHVtYW5UYWtpbmdBbm90aGVyU2hvdEFmdGVyTWlzc2luZyhcbiAgY2xpY2tlZEdhbWVib2FyZEVsZW1lbnQsXG4gIHBvaW50ZXJUeXBlLFxuKSB7XG4gIHJldHVybiAoXG4gICAgY3VycmVudFBsYXllciA9PT0gZW5lbXkgJiZcbiAgICBjbGlja2VkR2FtZWJvYXJkRWxlbWVudC5vd25lciA9PT0gZW5lbXkgJiZcbiAgICBwb2ludGVyVHlwZSA9PT0gJ21vdXNlJ1xuICApO1xufVxuXG5mdW5jdGlvbiBlbmVteVBsYXkoKSB7XG4gIGNvbnN0IGNlbGwgPSBlbmVteS5wbGF5KGh1bWFuR2FtZWJvYXJkKTtcbiAgY29uc3QgY2VsbERPTSA9IGh1bWFuR2FtZWJvYXJkRWxlbWVudC5nZXRDZWxsRE9NKGNlbGwueCwgY2VsbC55KTtcbiAgY2VsbERPTS5yZW5kZXIoKS5jbGljaygpO1xufVxuXG5hc3luYyBmdW5jdGlvbiBkZWxheSh0aW1lKSB7XG4gIGF3YWl0IG5ldyBQcm9taXNlKChyZXNvbHZlKSA9PiBzZXRUaW1lb3V0KHJlc29sdmUsIHRpbWUpKTtcbn1cblxuYXN5bmMgZnVuY3Rpb24gbmV4dFR1cm4oKSB7XG4gIGN1cnJlbnRHYW1lYm9hcmRFbGVtZW50LmRpc2FibGUoKTtcblxuICBpZiAoY3VycmVudFBsYXllciA9PT0gZW5lbXkpIHtcbiAgICBtZXNzYWdlLnNldEVuZW15VHVybigpO1xuICAgIGN1cnJlbnRHYW1lYm9hcmRFbGVtZW50ID0gaHVtYW5HYW1lYm9hcmRFbGVtZW50O1xuICAgIGN1cnJlbnRHYW1lYm9hcmRFbGVtZW50LmVuYWJsZSgpO1xuICAgIGN1cnJlbnRHYW1lYm9hcmRFbGVtZW50LmRpc2FibGVIb3Zlck9uQWxsQ2VsbHMoKTtcblxuICAgIGF3YWl0IGRlbGF5KDIwMDApO1xuICAgIGVuZW15UGxheSgpO1xuICB9IGVsc2Uge1xuICAgIG1lc3NhZ2Uuc2V0SHVtYW5UdXJuKCk7XG4gICAgY3VycmVudEdhbWVib2FyZEVsZW1lbnQgPSBlbmVteUdhbWVib2FyZEVsZW1lbnQ7XG4gICAgY3VycmVudEdhbWVib2FyZEVsZW1lbnQuZW5hYmxlKCk7XG4gIH1cbn1cblxuYXN5bmMgZnVuY3Rpb24gaXNTaG90SW52YWxpZCh7XG4gIGdhbWVib2FyZDogZ2FtZWJvYXJkRWxlbWVudCxcbiAgcG9pbnRlclR5cGUsXG4gIGNlbGwsXG59KSB7XG4gIGlmIChnYW1lYm9hcmRFbGVtZW50LmRpc2FibGVkKSB7XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cblxuICBpZiAoaXNIdW1hblRha2luZ0Fub3RoZXJTaG90QWZ0ZXJNaXNzaW5nKGdhbWVib2FyZEVsZW1lbnQsIHBvaW50ZXJUeXBlKSkge1xuICAgIHJldHVybiB0cnVlO1xuICB9XG5cbiAgaWYgKGlzUGxheWVyQ2xpY2tpbmdPd25HYW1lYm9hcmQoZ2FtZWJvYXJkRWxlbWVudCwgcG9pbnRlclR5cGUpKSB7XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cblxuICBpZiAoZ2FtZWJvYXJkRWxlbWVudC5jb250cm9sbGVyLmlzRXhpc3RpbmdTaG90KGNlbGwueCwgY2VsbC55KSkge1xuICAgIGlmIChjdXJyZW50UGxheWVyID09PSBlbmVteSkge1xuICAgICAgYXdhaXQgZGVsYXkoMjAwMCk7XG4gICAgICBlbmVteVBsYXkoKTtcbiAgICB9XG5cbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuXG4gIHJldHVybiBmYWxzZTtcbn1cblxuYXN5bmMgZnVuY3Rpb24gaGFuZGxlVHVybihjbGlja0RhdGEpIHtcbiAgY29uc3QgeyBnYW1lYm9hcmQ6IGdhbWVib2FyZEVsZW1lbnQsIGNlbGwsIHBvaW50ZXJUeXBlIH0gPSBjbGlja0RhdGE7XG5cbiAgaWYgKGlzU2hvdEludmFsaWQoY2xpY2tEYXRhKSkge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIGdhbWVib2FyZEVsZW1lbnQuY29udHJvbGxlci5yZWNlaXZlQXR0YWNrKGNlbGwueCwgY2VsbC55KTtcblxuICBpZiAoZ2FtZWJvYXJkRWxlbWVudC5jb250cm9sbGVyLmlzU2hpcE9uQ2VsbChjZWxsLngsIGNlbGwueSkpIHtcbiAgICBjZWxsLmVuYWJsZUhpdCgpO1xuICAgIGNlbGwuZGlzYWJsZUhvdmVyKCk7XG5cbiAgICBpZiAoY3VycmVudFBsYXllciA9PT0gaHVtYW4pIHtcbiAgICAgIGlmIChlbmVteUdhbWVib2FyZC5hbGxTaGlwc1N1bmsoKSkge1xuICAgICAgICBtZXNzYWdlLnNldEh1bWFuV29uKCk7XG4gICAgICAgIGVuZW15R2FtZWJvYXJkRWxlbWVudC5kaXNhYmxlKCk7XG4gICAgICAgIGh1bWFuR2FtZWJvYXJkRWxlbWVudC5kaXNhYmxlKCk7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAoY3VycmVudFBsYXllciA9PT0gZW5lbXkpIHtcbiAgICAgIGlmIChodW1hbkdhbWVib2FyZC5hbGxTaGlwc1N1bmsoKSkge1xuICAgICAgICBtZXNzYWdlLnNldEVuZW15V29uKCk7XG4gICAgICAgIGVuZW15R2FtZWJvYXJkRWxlbWVudC5kaXNhYmxlKCk7XG4gICAgICAgIGh1bWFuR2FtZWJvYXJkRWxlbWVudC5kaXNhYmxlKCk7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgYXdhaXQgZGVsYXkoMjAwMCk7XG4gICAgICBlbmVteVBsYXkoKTtcbiAgICB9XG4gIH0gZWxzZSB7XG4gICAgY2VsbC5lbmFibGVNaXNzKCk7XG4gICAgY2VsbC5kaXNhYmxlSG92ZXIoKTtcblxuICAgIGlmIChjdXJyZW50UGxheWVyID09PSBodW1hbikge1xuICAgICAgY3VycmVudFBsYXllciA9IGVuZW15O1xuICAgIH0gZWxzZSB7XG4gICAgICBjdXJyZW50UGxheWVyID0gaHVtYW47XG4gICAgfVxuXG4gICAgYXdhaXQgZGVsYXkoMjAwMCk7XG4gICAgbmV4dFR1cm4oKTtcbiAgfVxufVxuXG5mdW5jdGlvbiBuZXdHYW1lKCkge1xuICByZW1vdmVHYW1lYm9hcmQoZW5lbXlDb250YWluZXIpO1xuICByZW1vdmVHYW1lYm9hcmQoaHVtYW5Db250YWluZXIpO1xuXG4gIHNldHVwQ29tcHV0ZXJQbGF5ZXIoKTtcbiAgc2V0dXBDb21wdXRlckdhbWVib2FyZEVsZW1lbnQoKTtcbiAgcmFuZG9taXplQ29tcHV0ZXJHYW1lYm9hcmQoKTtcblxuICBzZXR1cEh1bWFuUGxheWVyKCk7XG4gIHNldHVwSHVtYW5HYW1lYm9hcmRFbGVtZW50KCk7XG4gIHJhbmRvbWl6ZUh1bWFuR2FtZWJvYXJkKCk7XG5cbiAgbWVzc2FnZS5zZXRJbnN0cnVjdGlvbigpO1xuXG4gIHJhbmRvbWl6ZUJ1dHRvbi5kaXNhYmxlZCA9IGZhbHNlO1xuICBwbGF5QnV0dG9uLmRpc2FibGVkID0gZmFsc2U7XG59XG5cbmZ1bmN0aW9uIHBsYXkoKSB7XG4gIGVuZW15R2FtZWJvYXJkRWxlbWVudC5lbmFibGUoKTtcbiAgbWVzc2FnZS5zZXRIdW1hblR1cm4oKTtcbiAgcmFuZG9taXplQnV0dG9uLmRpc2FibGVkID0gdHJ1ZTtcbiAgcGxheUJ1dHRvbi5kaXNhYmxlZCA9IHRydWU7XG59XG5cbmZ1bmN0aW9uIHNldHVwSHVtYW5HYW1lYm9hcmRFbGVtZW50KCkge1xuICBodW1hbkdhbWVib2FyZEVsZW1lbnQgPSBuZXcgR2FtZWJvYXJkRWxlbWVudChodW1hbiwgaGFuZGxlVHVybik7XG4gIGh1bWFuR2FtZWJvYXJkRWxlbWVudC5kaXNhYmxlKCk7XG59XG5cbmZ1bmN0aW9uIHNldHVwQ29tcHV0ZXJHYW1lYm9hcmRFbGVtZW50KCkge1xuICBlbmVteUdhbWVib2FyZEVsZW1lbnQgPSBuZXcgR2FtZWJvYXJkRWxlbWVudChlbmVteSwgaGFuZGxlVHVybik7XG4gIGVuZW15R2FtZWJvYXJkRWxlbWVudC5kaXNhYmxlKCk7XG4gIGN1cnJlbnRHYW1lYm9hcmRFbGVtZW50ID0gZW5lbXlHYW1lYm9hcmRFbGVtZW50O1xufVxuXG5mdW5jdGlvbiBzZXR1cENvbXB1dGVyUGxheWVyKCkge1xuICBlbmVteUdhbWVib2FyZCA9IG5ldyBHYW1lYm9hcmQoKTtcbiAgZW5lbXkgPSBuZXcgUGxheWVyKGVuZW15R2FtZWJvYXJkLCAnZW5lbXknKTtcbn1cblxuZnVuY3Rpb24gc2V0dXBIdW1hblBsYXllcigpIHtcbiAgaHVtYW5HYW1lYm9hcmQgPSBuZXcgR2FtZWJvYXJkKCk7XG4gIGh1bWFuID0gbmV3IFBsYXllcihodW1hbkdhbWVib2FyZCwgJ2h1bWFuJyk7XG4gIGN1cnJlbnRQbGF5ZXIgPSBodW1hbjtcbn1cblxuZnVuY3Rpb24gcmFuZG9taXplQ29tcHV0ZXJHYW1lYm9hcmQoKSB7XG4gIGVuZW15R2FtZWJvYXJkLnJlc2V0KCk7XG4gIGVuZW15R2FtZWJvYXJkRWxlbWVudC5yZXNldCgpO1xuXG4gIGVuZW15LnBsYWNlUmFuZG9tU2hpcHMoKTtcbiAgZW5lbXlHYW1lYm9hcmRFbGVtZW50LmNyZWF0ZVNoaXBzKCk7XG4gIGVuZW15R2FtZWJvYXJkRWxlbWVudC5yZW5kZXJTaGlwcygpO1xuICBlbmVteUNvbnRhaW5lci5hcHBlbmRDaGlsZChlbmVteUdhbWVib2FyZEVsZW1lbnQucmVuZGVyKCkpO1xufVxuXG5mdW5jdGlvbiByYW5kb21pemVIdW1hbkdhbWVib2FyZCgpIHtcbiAgaHVtYW5HYW1lYm9hcmQucmVzZXQoKTtcbiAgaHVtYW5HYW1lYm9hcmRFbGVtZW50LnJlc2V0KCk7XG5cbiAgaHVtYW4ucGxhY2VSYW5kb21TaGlwcygpO1xuICBodW1hbkdhbWVib2FyZEVsZW1lbnQuY3JlYXRlU2hpcHMoKTtcbiAgaHVtYW5HYW1lYm9hcmRFbGVtZW50LnJlbmRlclNoaXBzKCk7XG4gIGh1bWFuQ29udGFpbmVyLmFwcGVuZENoaWxkKGh1bWFuR2FtZWJvYXJkRWxlbWVudC5yZW5kZXIoKSk7XG59XG5cbmNvbnN0IG5ld0dhbWVCdXR0b24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbmV3LWdhbWUtYnRuJyk7XG5uZXdHYW1lQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICBuZXdHYW1lKCk7XG4gIGNvbnNvbGUubG9nKCdOZXcgZ2FtZSBkb25lIScpO1xufSk7XG5cbmNvbnN0IHJhbmRvbWl6ZUJ1dHRvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdyYW5kb21pemUtYnRuJyk7XG5yYW5kb21pemVCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gIHJhbmRvbWl6ZUh1bWFuR2FtZWJvYXJkKCk7XG59KTtcblxuY29uc3QgcGxheUJ1dHRvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwbGF5LWJ0bicpO1xucGxheUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHBsYXkpO1xuXG5sZXQgZW5lbXlHYW1lYm9hcmRFbGVtZW50O1xubGV0IGh1bWFuR2FtZWJvYXJkRWxlbWVudDtcbmxldCBjdXJyZW50R2FtZWJvYXJkRWxlbWVudDtcbmxldCBlbmVteUdhbWVib2FyZDtcbmxldCBodW1hbkdhbWVib2FyZDtcbmxldCBlbmVteTtcbmxldCBodW1hbjtcbmxldCBjdXJyZW50UGxheWVyO1xuY29uc3QgZW5lbXlDb250YWluZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZ2FtZWJvYXJkLWNvbnRhaW5lci1lbmVteScpO1xuY29uc3QgaHVtYW5Db250YWluZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZ2FtZWJvYXJkLWNvbnRhaW5lci1odW1hbicpO1xubWVzc2FnZS5zZXRFbGVtZW50KGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdtZXNzYWdlJykpO1xuXG5uZXdHYW1lKCk7XG4iLCJpbXBvcnQgU2hpcCBmcm9tICcuL3NoaXAnO1xuXG5jbGFzcyBCYXR0bGVzaGlwIGV4dGVuZHMgU2hpcCB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHN1cGVyKDQpO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEJhdHRsZXNoaXA7XG4iLCJjbGFzcyBDZWxsIHtcbiAgY29uc3RydWN0b3IoeCwgeSkge1xuICAgIHRoaXMueCA9IHg7XG4gICAgdGhpcy55ID0geTtcbiAgfVxuXG4gIG9mZnNldCh4LCB5KSB7XG4gICAgcmV0dXJuIG5ldyBDZWxsKHRoaXMueCArIHgsIHRoaXMueSArIHkpO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IENlbGw7XG4iLCJpbXBvcnQgU2hpcCBmcm9tICcuL3NoaXAnO1xuXG5jbGFzcyBEZXN0cm95ZXIgZXh0ZW5kcyBTaGlwIHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgc3VwZXIoMyk7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgRGVzdHJveWVyO1xuIiwiaW1wb3J0IENlbGwgZnJvbSAnLi9jZWxsJztcbmltcG9ydCBnZXRSYW5kb21JbnQgZnJvbSAnLi9oZWxwZXJzJztcblxuY2xhc3MgR2FtZWJvYXJkIHtcbiAgI3NoaXBzID0gW107XG4gICNtaXNzZXMgPSBbXTtcblxuICBjb25zdHJ1Y3RvcihzaXplID0gMTApIHtcbiAgICB0aGlzLnNpemUgPSBzaXplO1xuICAgIHRoaXMuY2VsbHMgPSBbXTtcbiAgICB0aGlzLiNjcmVhdGVDZWxscygpO1xuICB9XG5cbiAgcGxhY2VTaGlwKHNoaXAsIHgsIHkpIHtcbiAgICBzaGlwLnBsYWNlKHgsIHksIHRoaXMpO1xuICAgIHRoaXMuI3NoaXBzLnB1c2goc2hpcCk7XG4gIH1cblxuICByZWNlaXZlQXR0YWNrKHgsIHkpIHtcbiAgICBjb25zdCBoaXRTaGlwID0gdGhpcy4jZ2V0U2hpcE9uQ2VsbCh4LCB5KTtcbiAgICBpZiAoaGl0U2hpcCkge1xuICAgICAgaGl0U2hpcC5oaXQoeCwgeSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuI21pc3Nlcy5wdXNoKG5ldyBDZWxsKHgsIHkpKTtcbiAgICB9XG4gIH1cblxuICBhbGxTaGlwc1N1bmsoKSB7XG4gICAgcmV0dXJuIHRoaXMuI3NoaXBzLmV2ZXJ5KChzaGlwKSA9PiBzaGlwLmlzU3VuaygpKTtcbiAgfVxuXG4gIGdldFNoaXBzKCkge1xuICAgIHJldHVybiBbLi4udGhpcy4jc2hpcHNdO1xuICB9XG5cbiAgZ2V0TWlzc2VzKCkge1xuICAgIHJldHVybiBbLi4udGhpcy4jbWlzc2VzXTtcbiAgfVxuXG4gIGdldEhpdHMoKSB7XG4gICAgcmV0dXJuIHRoaXMuI3NoaXBzLmZsYXRNYXAoKHNoaXApID0+IHNoaXAuZ2V0SGl0cygpKTtcbiAgfVxuXG4gIGlzU2hpcE9uQ2VsbCh4LCB5KSB7XG4gICAgcmV0dXJuICEhdGhpcy4jZ2V0U2hpcE9uQ2VsbCh4LCB5KTtcbiAgfVxuXG4gIGdldENlbGxBdCh4LCB5KSB7XG4gICAgcmV0dXJuIHRoaXMuY2VsbHMuZmluZCgoY2VsbCkgPT4gY2VsbC54ID09PSB4ICYmIGNlbGwueSA9PT0geSk7XG4gIH1cblxuICBvZmZzZXRDZWxsKGNlbGwsIHgsIHkpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRDZWxsQXQoY2VsbC54ICsgeCwgY2VsbC55ICsgeSk7XG4gIH1cblxuICBpc0V4aXN0aW5nU2hvdCh4LCB5KSB7XG4gICAgcmV0dXJuICEhdGhpcy4jZ2V0SGl0T25DZWxsKHgsIHkpIHx8ICEhdGhpcy4jZ2V0TWlzc09uQ2VsbCh4LCB5KTtcbiAgfVxuXG4gIGdldFJhbmRvbVBvc2l0aW9uKCkge1xuICAgIGNvbnN0IHggPSBnZXRSYW5kb21JbnQodGhpcy5zaXplKTtcbiAgICBjb25zdCB5ID0gZ2V0UmFuZG9tSW50KHRoaXMuc2l6ZSk7XG5cbiAgICByZXR1cm4gW3gsIHldO1xuICB9XG5cbiAgcmVzZXQoKSB7XG4gICAgdGhpcy4jc2hpcHMgPSBbXTtcbiAgICB0aGlzLiNtaXNzZXMgPSBbXTtcbiAgfVxuXG4gICNjcmVhdGVDZWxscygpIHtcbiAgICBmb3IgKGxldCB5ID0gMDsgeSA8IHRoaXMuc2l6ZTsgeSsrKSB7XG4gICAgICBmb3IgKGxldCB4ID0gMDsgeCA8IHRoaXMuc2l6ZTsgeCsrKSB7XG4gICAgICAgIGNvbnN0IGNlbGwgPSBuZXcgQ2VsbCh4LCB5KTtcbiAgICAgICAgdGhpcy5jZWxscy5wdXNoKGNlbGwpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gICNnZXRIaXRPbkNlbGwoeCwgeSkge1xuICAgIGNvbnN0IGhpdHMgPSB0aGlzLmdldEhpdHMoKTtcbiAgICByZXR1cm4gaGl0cy5maW5kKChjZWxsKSA9PiB4ID09PSBjZWxsLnggJiYgeSA9PT0gY2VsbC55KTtcbiAgfVxuXG4gICNnZXRNaXNzT25DZWxsKHgsIHkpIHtcbiAgICByZXR1cm4gdGhpcy4jbWlzc2VzLmZpbmQoKGNlbGwpID0+IHggPT09IGNlbGwueCAmJiB5ID09PSBjZWxsLnkpO1xuICB9XG5cbiAgI2dldFNoaXBPbkNlbGwoeCwgeSkge1xuICAgIHJldHVybiB0aGlzLiNzaGlwcy5maW5kKChzaGlwKSA9PiB7XG4gICAgICBjb25zdCBzaGlwQmFjayA9IHNoaXAuYmFjaygpO1xuICAgICAgY29uc3Qgc2hpcEZyb250ID0gc2hpcC5mcm9udCgpO1xuXG4gICAgICBpZiAoc2hpcC5vcmllbnRhdGlvbiA9PT0gJ2hvcml6b250YWwnKSB7XG4gICAgICAgIHJldHVybiB4ID49IHNoaXBCYWNrLnggJiYgeCA8PSBzaGlwRnJvbnQueCAmJiB5ID09PSBzaGlwLnk7XG4gICAgICB9IGVsc2UgaWYgKHNoaXAub3JpZW50YXRpb24gPT09ICd2ZXJ0aWNhbCcpIHtcbiAgICAgICAgcmV0dXJuIHkgPj0gc2hpcEJhY2sueSAmJiB5IDw9IHNoaXBGcm9udC55ICYmIHggPT09IHNoaXAueDtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBHYW1lYm9hcmQ7XG4iLCJmdW5jdGlvbiBnZXRSYW5kb21JbnQobWF4KSB7XG4gIHJldHVybiBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiBtYXgpO1xufVxuXG5leHBvcnQgZGVmYXVsdCBnZXRSYW5kb21JbnQ7XG4iLCJpbXBvcnQgU2hpcCBmcm9tICcuL3NoaXAnO1xuXG5jbGFzcyBQYXRyb2xCb2F0IGV4dGVuZHMgU2hpcCB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHN1cGVyKDEpO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFBhdHJvbEJvYXQ7XG4iLCJpbXBvcnQgZ2V0UmFuZG9tSW50IGZyb20gJy4vaGVscGVycyc7XG5pbXBvcnQgeyBnYW1lYm9hcmRTaGlwcywgaGFzQWRqYWNlbnRTaGlwcyB9IGZyb20gJy4vcnVsZXMnO1xuaW1wb3J0IHsgaGFzT3ZlcmxhcHBpbmdTaGlwcywgaGFzT3V0T2ZCb3VuZHNTaGlwcyB9IGZyb20gJy4vcnVsZXMnO1xuXG5jbGFzcyBQbGF5ZXIge1xuICBjb25zdHJ1Y3RvcihnYW1lYm9hcmQsIG5hbWUpIHtcbiAgICB0aGlzLmdhbWVib2FyZCA9IGdhbWVib2FyZDtcbiAgICB0aGlzLm5hbWUgPSBuYW1lO1xuICB9XG5cbiAgcGxheShvcHBvc2l0aW9uR2FtZWJvYXJkKSB7XG4gICAgY29uc3QgaGl0cyA9IG9wcG9zaXRpb25HYW1lYm9hcmQuZ2V0SGl0cygpO1xuICAgIGNvbnN0IG1pc3NlcyA9IG9wcG9zaXRpb25HYW1lYm9hcmQuZ2V0TWlzc2VzKCk7XG4gICAgY29uc3Qgc2hvdHMgPSBoaXRzLmNvbmNhdChtaXNzZXMpO1xuICAgIGNvbnN0IGF2YWlsYWJsZUNlbGxzID0gdGhpcy4jZ2V0QXZhaWxhYmxlQ2VsbHMob3Bwb3NpdGlvbkdhbWVib2FyZCwgc2hvdHMpO1xuXG4gICAgY29uc3QgcmFuZG9tSW5kZXggPSBnZXRSYW5kb21JbnQoYXZhaWxhYmxlQ2VsbHMubGVuZ3RoKTtcbiAgICBjb25zdCByYW5kb21DZWxsID0gYXZhaWxhYmxlQ2VsbHNbcmFuZG9tSW5kZXhdO1xuICAgIHJldHVybiByYW5kb21DZWxsO1xuICB9XG5cbiAgcGxhY2VTaGlwcyhzaGlwcykge1xuICAgIGlmICh0aGlzLiNhbGxTaGlwc0luVmFsaWRQb3NpdGlvbnMoc2hpcHMpKSB7XG4gICAgICBzaGlwcy5mb3JFYWNoKChzaGlwKSA9PiB0aGlzLmdhbWVib2FyZC5wbGFjZVNoaXAoc2hpcCwgc2hpcC54LCBzaGlwLnkpKTtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cblxuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHBsYWNlUmFuZG9tU2hpcHMoKSB7XG4gICAgbGV0IHNoaXBzSW5WYWxpZFBvc2l0aW9uID0gZmFsc2U7XG5cbiAgICB3aGlsZSAoIXNoaXBzSW5WYWxpZFBvc2l0aW9uKSB7XG4gICAgICBjb25zdCBzaGlwcyA9IHRoaXMuI2NyZWF0ZVJhbmRvbVNoaXBzKCk7XG5cbiAgICAgIGlmICh0aGlzLiNhbGxTaGlwc0luVmFsaWRQb3NpdGlvbnMoc2hpcHMpKSB7XG4gICAgICAgIHNoaXBzSW5WYWxpZFBvc2l0aW9uID0gdHJ1ZTtcbiAgICAgICAgc2hpcHMuZm9yRWFjaCgoc2hpcCkgPT4gdGhpcy5nYW1lYm9hcmQucGxhY2VTaGlwKHNoaXAsIHNoaXAueCwgc2hpcC55KSk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgI2FsbFNoaXBzSW5WYWxpZFBvc2l0aW9ucyhzaGlwcykge1xuICAgIHJldHVybiAoXG4gICAgICAhaGFzT3ZlcmxhcHBpbmdTaGlwcyhzaGlwcykgJiZcbiAgICAgICFoYXNPdXRPZkJvdW5kc1NoaXBzKHNoaXBzLCB0aGlzLmdhbWVib2FyZCkgJiZcbiAgICAgICFoYXNBZGphY2VudFNoaXBzKHNoaXBzLCB0aGlzLmdhbWVib2FyZClcbiAgICApO1xuICB9XG5cbiAgI2NyZWF0ZVJhbmRvbVNoaXBzKCkge1xuICAgIGNvbnN0IHNoaXBzID0gW107XG5cbiAgICBnYW1lYm9hcmRTaGlwcy5mb3JFYWNoKChib2FyZFNoaXApID0+IHtcbiAgICAgIGZvciAobGV0IGluZGV4ID0gMDsgaW5kZXggPCBib2FyZFNoaXAuY291bnQ7IGluZGV4KyspIHtcbiAgICAgICAgY29uc3Qgc2hpcCA9IHRoaXMuI2NyZWF0ZVNoaXBXaXRoUmFuZG9tT3JpZW50YXRpb24oYm9hcmRTaGlwKTtcbiAgICAgICAgY29uc3QgW3gsIHldID0gdGhpcy5nYW1lYm9hcmQuZ2V0UmFuZG9tUG9zaXRpb24oKTtcbiAgICAgICAgc2hpcC5wbGFjZSh4LCB5LCB0aGlzLmdhbWVib2FyZCk7XG4gICAgICAgIHNoaXBzLnB1c2goc2hpcCk7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICByZXR1cm4gc2hpcHM7XG4gIH1cblxuICAjY3JlYXRlU2hpcFdpdGhSYW5kb21PcmllbnRhdGlvbihib2FyZFNoaXApIHtcbiAgICBjb25zdCBzaGlwID0gbmV3IGJvYXJkU2hpcC50eXBlKCk7XG4gICAgc2hpcC5zZXRSYW5kb21PcmllbnRhdGlvbigpO1xuICAgIHJldHVybiBzaGlwO1xuICB9XG5cbiAgI2dldEF2YWlsYWJsZUNlbGxzKGdhbWVib2FyZCwgc2hvdHMpIHtcbiAgICByZXR1cm4gZ2FtZWJvYXJkLmNlbGxzLmZpbHRlcigoY2VsbCkgPT4ge1xuICAgICAgY29uc3QgZm91bmQgPSBzaG90cy5maW5kKChzaG90KSA9PiB7XG4gICAgICAgIHJldHVybiBjZWxsLnggPT09IHNob3QueCAmJiBjZWxsLnkgPT09IHNob3QueTtcbiAgICAgIH0pO1xuICAgICAgcmV0dXJuICFmb3VuZDtcbiAgICB9KTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBQbGF5ZXI7XG4iLCJpbXBvcnQgQmF0dGxlc2hpcCBmcm9tICcuL2JhdHRsZXNoaXAnO1xuaW1wb3J0IERlc3Ryb3llciBmcm9tICcuL2Rlc3Ryb3llcic7XG5pbXBvcnQgUGF0cm9sQm9hdCBmcm9tICcuL3BhdHJvbEJvYXQnO1xuaW1wb3J0IFN1Ym1hcmluZSBmcm9tICcuL3N1Ym1hcmluZSc7XG5cbmNvbnN0IGdhbWVib2FyZFNoaXBzID0gW1xuICB7XG4gICAgY291bnQ6IDEsXG4gICAgdHlwZTogQmF0dGxlc2hpcCxcbiAgfSxcbiAge1xuICAgIGNvdW50OiAyLFxuICAgIHR5cGU6IERlc3Ryb3llcixcbiAgfSxcbiAge1xuICAgIGNvdW50OiAzLFxuICAgIHR5cGU6IFN1Ym1hcmluZSxcbiAgfSxcbiAge1xuICAgIGNvdW50OiA0LFxuICAgIHR5cGU6IFBhdHJvbEJvYXQsXG4gIH0sXG5dO1xuXG5mdW5jdGlvbiBoYXNPdXRPZkJvdW5kc1NoaXBzKHNoaXBzLCBnYW1lYm9hcmQpIHtcbiAgY29uc3Qgc29tZVNoaXBHb2VzT3V0T2ZCb3VuZHMgPSBzaGlwcy5zb21lKChzaGlwKSA9PiB7XG4gICAgaWYgKHNoaXAub3JpZW50YXRpb24gPT09ICdob3Jpem9udGFsJykge1xuICAgICAgcmV0dXJuIHNoaXAueCA+IGdhbWVib2FyZC5zaXplIC0gc2hpcC5sZW5ndGg7XG4gICAgfSBlbHNlIGlmIChzaGlwLm9yaWVudGF0aW9uID09PSAndmVydGljYWwnKSB7XG4gICAgICByZXR1cm4gc2hpcC55ID4gZ2FtZWJvYXJkLnNpemUgLSBzaGlwLmxlbmd0aDtcbiAgICB9XG4gIH0pO1xuXG4gIHJldHVybiBzb21lU2hpcEdvZXNPdXRPZkJvdW5kcztcbn1cblxuZnVuY3Rpb24gaGFzT3ZlcmxhcHBpbmdTaGlwcyhzaGlwcykge1xuICBjb25zdCBzb21lU2hpcE92ZXJsYXBzQW5vdGhlclNoaXAgPSBzaGlwcy5zb21lKChzaGlwKSA9PiB7XG4gICAgY29uc3Qgb3RoZXJTaGlwcyA9IHNoaXBzLmZpbHRlcigob3RoZXJTaGlwKSA9PiBvdGhlclNoaXAgIT09IHNoaXApO1xuXG4gICAgY29uc3Qgc29tZUNlbGxzT3ZlcmxhcCA9IG90aGVyU2hpcHMuc29tZSgob3RoZXJTaGlwKSA9PiB7XG4gICAgICByZXR1cm4gb3RoZXJTaGlwLmNlbGxzLnNvbWUoKGNlbGwpID0+IHNoaXAuY2VsbHMuaW5jbHVkZXMoY2VsbCkpO1xuICAgIH0pO1xuXG4gICAgcmV0dXJuIHNvbWVDZWxsc092ZXJsYXA7XG4gIH0pO1xuXG4gIHJldHVybiBzb21lU2hpcE92ZXJsYXBzQW5vdGhlclNoaXA7XG59XG5cbmZ1bmN0aW9uIGhhc0FkamFjZW50U2hpcHMoc2hpcHMsIGdhbWVib2FyZCkge1xuICByZXR1cm4gKFxuICAgIHNvbWVTaGlwSXNUb1RoZVJpZ2h0KHNoaXBzLCBnYW1lYm9hcmQpIHx8XG4gICAgc29tZVNoaXBJc0F0VGhlVG9wKHNoaXBzLCBnYW1lYm9hcmQpXG4gICk7XG59XG5cbmZ1bmN0aW9uIHNvbWVTaGlwSXNUb1RoZVJpZ2h0KHNoaXBzLCBnYW1lYm9hcmQpIHtcbiAgcmV0dXJuIHNoaXBzLnNvbWUoKHNoaXApID0+IHtcbiAgICBpZiAoc2hpcEFnYWluc3RSaWdodFdhbGwoc2hpcCwgZ2FtZWJvYXJkKSkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cblxuICAgIGNvbnN0IG90aGVyU2hpcHMgPSBzaGlwcy5maWx0ZXIoKG90aGVyU2hpcCkgPT4gb3RoZXJTaGlwICE9PSBzaGlwKTtcbiAgICBjb25zdCByaWdodENlbGxzID0gZ2V0Q2VsbHNUb1RoZVJpZ2h0KGdhbWVib2FyZCwgc2hpcCk7XG5cbiAgICBjb25zdCBzb21lU2hpcENlbGxJc1RvVGhlUmlnaHQgPSBvdGhlclNoaXBzLnNvbWUoKG90aGVyU2hpcCkgPT4ge1xuICAgICAgcmV0dXJuIHJpZ2h0Q2VsbHMuc29tZSgocmlnaHRDZWxsKSA9PlxuICAgICAgICBvdGhlclNoaXAuY2VsbHMuaW5jbHVkZXMocmlnaHRDZWxsKSxcbiAgICAgICk7XG4gICAgfSk7XG5cbiAgICByZXR1cm4gc29tZVNoaXBDZWxsSXNUb1RoZVJpZ2h0O1xuICB9KTtcbn1cblxuZnVuY3Rpb24gZ2V0Q2VsbHNUb1RoZVJpZ2h0KGdhbWVib2FyZCwgc2hpcCkge1xuICBjb25zdCByaWdodENlbGxzID0gW107XG4gIGxldCByaWdodENlbGw7XG5cbiAgaWYgKHNoaXAub3JpZW50YXRpb24gPT09ICdob3Jpem9udGFsJykge1xuICAgIGNvbnN0IHNoaXBGcm9udCA9IHNoaXAuZnJvbnQoKTtcblxuICAgIHJpZ2h0Q2VsbCA9IGdhbWVib2FyZC5vZmZzZXRDZWxsKHNoaXBGcm9udCwgMSwgLTEpO1xuICAgIHJpZ2h0Q2VsbHMucHVzaChyaWdodENlbGwpO1xuXG4gICAgcmlnaHRDZWxsID0gZ2FtZWJvYXJkLm9mZnNldENlbGwoc2hpcEZyb250LCAxLCAwKTtcbiAgICByaWdodENlbGxzLnB1c2gocmlnaHRDZWxsKTtcblxuICAgIHJpZ2h0Q2VsbCA9IGdhbWVib2FyZC5vZmZzZXRDZWxsKHNoaXBGcm9udCwgMSwgMSk7XG4gICAgcmlnaHRDZWxscy5wdXNoKHJpZ2h0Q2VsbCk7XG5cbiAgICByZXR1cm4gcmlnaHRDZWxscztcbiAgfSBlbHNlIGlmIChzaGlwLm9yaWVudGF0aW9uID09PSAndmVydGljYWwnKSB7XG4gICAgc2hpcC5jZWxscy5mb3JFYWNoKChjZWxsKSA9PiB7XG4gICAgICByaWdodENlbGwgPSBnYW1lYm9hcmQub2Zmc2V0Q2VsbChjZWxsLCAxLCAwKTtcbiAgICAgIHJpZ2h0Q2VsbHMucHVzaChyaWdodENlbGwpO1xuICAgIH0pO1xuXG4gICAgcmV0dXJuIHJpZ2h0Q2VsbHM7XG4gIH1cbn1cblxuZnVuY3Rpb24gc29tZVNoaXBJc0F0VGhlVG9wKHNoaXBzLCBnYW1lYm9hcmQpIHtcbiAgcmV0dXJuIHNoaXBzLnNvbWUoKHNoaXApID0+IHtcbiAgICBpZiAoc2hpcEFnYWluc3RUb3BXYWxsKHNoaXApKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuXG4gICAgY29uc3Qgb3RoZXJTaGlwcyA9IHNoaXBzLmZpbHRlcigob3RoZXJTaGlwKSA9PiBvdGhlclNoaXAgIT09IHNoaXApO1xuICAgIGNvbnN0IHRvcENlbGxzID0gZ2V0Q2VsbHNBdFRoZVRvcChnYW1lYm9hcmQsIHNoaXApO1xuXG4gICAgY29uc3Qgc29tZVNoaXBDZWxsSXNBdFRoZVRvcCA9IG90aGVyU2hpcHMuc29tZSgob3RoZXJTaGlwKSA9PiB7XG4gICAgICByZXR1cm4gdG9wQ2VsbHMuc29tZSgodG9wQ2VsbCkgPT4gb3RoZXJTaGlwLmNlbGxzLmluY2x1ZGVzKHRvcENlbGwpKTtcbiAgICB9KTtcblxuICAgIHJldHVybiBzb21lU2hpcENlbGxJc0F0VGhlVG9wO1xuICB9KTtcbn1cblxuZnVuY3Rpb24gZ2V0Q2VsbHNBdFRoZVRvcChnYW1lYm9hcmQsIHNoaXApIHtcbiAgY29uc3QgdG9wQ2VsbHMgPSBbXTtcbiAgbGV0IHRvcENlbGw7XG5cbiAgaWYgKHNoaXAub3JpZW50YXRpb24gPT09ICdob3Jpem9udGFsJykge1xuICAgIHNoaXAuY2VsbHMuZm9yRWFjaCgoY2VsbCkgPT4ge1xuICAgICAgdG9wQ2VsbCA9IGdhbWVib2FyZC5vZmZzZXRDZWxsKGNlbGwsIDAsIC0xKTtcbiAgICAgIHRvcENlbGxzLnB1c2godG9wQ2VsbCk7XG4gICAgfSk7XG5cbiAgICByZXR1cm4gdG9wQ2VsbHM7XG4gIH0gZWxzZSBpZiAoc2hpcC5vcmllbnRhdGlvbiA9PT0gJ3ZlcnRpY2FsJykge1xuICAgIGNvbnN0IHNoaXBCYWNrID0gc2hpcC5iYWNrKCk7XG5cbiAgICB0b3BDZWxsID0gZ2FtZWJvYXJkLm9mZnNldENlbGwoc2hpcEJhY2ssIC0xLCAtMSk7XG4gICAgdG9wQ2VsbHMucHVzaCh0b3BDZWxsKTtcblxuICAgIHRvcENlbGwgPSBnYW1lYm9hcmQub2Zmc2V0Q2VsbChzaGlwQmFjaywgMCwgLTEpO1xuICAgIHRvcENlbGxzLnB1c2godG9wQ2VsbCk7XG5cbiAgICB0b3BDZWxsID0gZ2FtZWJvYXJkLm9mZnNldENlbGwoc2hpcEJhY2ssIDEsIC0xKTtcbiAgICB0b3BDZWxscy5wdXNoKHRvcENlbGwpO1xuXG4gICAgcmV0dXJuIHRvcENlbGxzO1xuICB9XG59XG5cbmZ1bmN0aW9uIHNoaXBBZ2FpbnN0UmlnaHRXYWxsKHNoaXAsIGdhbWVib2FyZCkge1xuICByZXR1cm4gc2hpcC5mcm9udCgpLnggPT09IGdhbWVib2FyZC5zaXplIC0gMTtcbn1cblxuZnVuY3Rpb24gc2hpcEFnYWluc3RUb3BXYWxsKHNoaXApIHtcbiAgcmV0dXJuIHNoaXAueSA9PT0gMDtcbn1cblxuZXhwb3J0IHtcbiAgZ2FtZWJvYXJkU2hpcHMsXG4gIGhhc092ZXJsYXBwaW5nU2hpcHMsXG4gIGhhc091dE9mQm91bmRzU2hpcHMsXG4gIGhhc0FkamFjZW50U2hpcHMsXG59O1xuIiwiaW1wb3J0IENlbGwgZnJvbSAnLi9jZWxsJztcbmltcG9ydCBnZXRSYW5kb21JbnQgZnJvbSAnLi9oZWxwZXJzJztcblxuY2xhc3MgU2hpcCB7XG4gICNoaXRzID0gW107XG5cbiAgY29uc3RydWN0b3IobGVuZ3RoID0gMSkge1xuICAgIHRoaXMubGVuZ3RoID0gbGVuZ3RoO1xuICAgIHRoaXMub3JpZW50YXRpb24gPSAnaG9yaXpvbnRhbCc7XG4gICAgdGhpcy4jaGl0cyA9IFtdO1xuICB9XG5cbiAgaGl0KHgsIHkpIHtcbiAgICB0aGlzLiNoaXRzLnB1c2gobmV3IENlbGwoeCwgeSkpO1xuICB9XG5cbiAgaXNTdW5rKCkge1xuICAgIHJldHVybiB0aGlzLiNoaXRzLmxlbmd0aCA9PT0gdGhpcy5sZW5ndGg7XG4gIH1cblxuICBwbGFjZSh4LCB5LCBnYW1lYm9hcmQpIHtcbiAgICB0aGlzLnggPSB4O1xuICAgIHRoaXMueSA9IHk7XG5cbiAgICB0aGlzLiNzZXRDZWxscyhnYW1lYm9hcmQpO1xuICB9XG5cbiAgZ2V0SGl0cygpIHtcbiAgICByZXR1cm4gWy4uLnRoaXMuI2hpdHNdO1xuICB9XG5cbiAgc2V0VmVydGljYWwoKSB7XG4gICAgdGhpcy5vcmllbnRhdGlvbiA9ICd2ZXJ0aWNhbCc7XG4gIH1cblxuICBzZXRIb3Jpem9udGFsKCkge1xuICAgIHRoaXMub3JpZW50YXRpb24gPSAnaG9yaXpvbnRhbCc7XG4gIH1cblxuICBzZXRSYW5kb21PcmllbnRhdGlvbigpIHtcbiAgICBjb25zdCBvcmllbnRhdGlvbnMgPSBbJ2hvcml6b250YWwnLCAndmVydGljYWwnXTtcbiAgICBjb25zdCBpbmRleCA9IGdldFJhbmRvbUludChvcmllbnRhdGlvbnMubGVuZ3RoKTtcbiAgICB0aGlzLm9yaWVudGF0aW9uID0gb3JpZW50YXRpb25zW2luZGV4XTtcbiAgfVxuXG4gIGZyb250KCkge1xuICAgIHJldHVybiB0aGlzLmNlbGxzLmF0KC0xKTtcbiAgfVxuXG4gIGJhY2soKSB7XG4gICAgcmV0dXJuIHRoaXMuY2VsbHMuYXQoMCk7XG4gIH1cblxuICAjc2V0Q2VsbHMoZ2FtZWJvYXJkKSB7XG4gICAgdGhpcy5jZWxscyA9IGdhbWVib2FyZC5jZWxscy5maWx0ZXIoKGNlbGwpID0+IHtcbiAgICAgIGlmICh0aGlzLm9yaWVudGF0aW9uID09PSAnaG9yaXpvbnRhbCcpIHtcbiAgICAgICAgY29uc3QgYmFjayA9IHRoaXMueDtcbiAgICAgICAgY29uc3QgZnJvbnQgPSB0aGlzLnggKyB0aGlzLmxlbmd0aCAtIDE7XG5cbiAgICAgICAgcmV0dXJuIGNlbGwueCA+PSBiYWNrICYmIGNlbGwueCA8PSBmcm9udCAmJiBjZWxsLnkgPT09IHRoaXMueTtcbiAgICAgIH0gZWxzZSBpZiAodGhpcy5vcmllbnRhdGlvbiA9PT0gJ3ZlcnRpY2FsJykge1xuICAgICAgICBjb25zdCBiYWNrID0gdGhpcy55O1xuICAgICAgICBjb25zdCBmcm9udCA9IHRoaXMueSArIHRoaXMubGVuZ3RoIC0gMTtcblxuICAgICAgICByZXR1cm4gY2VsbC55ID49IGJhY2sgJiYgY2VsbC55IDw9IGZyb250ICYmIGNlbGwueCA9PT0gdGhpcy54O1xuICAgICAgfVxuICAgIH0pO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFNoaXA7XG4iLCJpbXBvcnQgU2hpcCBmcm9tICcuL3NoaXAnO1xuXG5jbGFzcyBTdWJtYXJpbmUgZXh0ZW5kcyBTaGlwIHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgc3VwZXIoMik7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgU3VibWFyaW5lO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9