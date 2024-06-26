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

.gameboard {
  display: flex;
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
  filter: contrast(50%);
}
`, "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;EACE,sBAAsB;EACtB,SAAS;AACX;;AAEA;EACE,aAAa;AACf;;AAEA;EACE,aAAa;EACb,sBAAsB;AACxB;;AAEA;EACE,WAAW;EACX,YAAY;AACd;;AAEA;EACE,aAAa;EACb,uBAAuB;EACvB,mBAAmB;EACnB,WAAW;EACX,YAAY;EACZ,6BAA6B;AAC/B;;AAEA;EACE,aAAa;EACb,sBAAsB;AACxB;;AAEA;EACE,aAAa;AACf;;AAEA;EACE,aAAa;EACb,uBAAuB;EACvB,mBAAmB;EACnB,WAAW;EACX,YAAY;EACZ,8BAA8B;AAChC;;AAEA;EACE,aAAa;EACb,uCAAuC;EACvC,oCAAoC;AACtC;;AAEA;EACE,aAAa;EACb,uBAAuB;EACvB,mBAAmB;EACnB,6BAA6B;EAC7B,8BAA8B;EAC9B,eAAe;AACjB;;AAEA;EACE,wBAAwB;AAC1B;;AAEA;EACE,uBAAuB;AACzB;;AAEA;EACE,oCAAoC;AACtC;;AAEA;EACE,oCAAoC;AACtC;;AAEA;EACE,qBAAqB;AACvB","sourcesContent":["* {\n  box-sizing: border-box;\n  margin: 0;\n}\n\n.gameboard {\n  display: flex;\n}\n\n.gameboard-0 {\n  display: flex;\n  flex-direction: column;\n}\n\n.gameboard-0-blank {\n  width: 30px;\n  height: 30px;\n}\n\n.gameboard-0-label {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  width: 30px;\n  height: 30px;\n  border-right: 1px solid black;\n}\n\n.gameboard-1 {\n  display: flex;\n  flex-direction: column;\n}\n\n.gameboard-1-0 {\n  display: flex;\n}\n\n.gameboard-1-0-label {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  width: 30px;\n  height: 30px;\n  border-bottom: 1px solid black;\n}\n\n.gameboard-1-1 {\n  display: grid;\n  grid-template-columns: repeat(10, 30px);\n  grid-template-rows: repeat(10, 30px);\n}\n\n.gameboard-1-1-cell {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  border-right: 1px solid black;\n  border-bottom: 1px solid black;\n  cursor: pointer;\n}\n\n.hover:hover {\n  background-color: yellow;\n}\n\n.fill {\n  background-color: black;\n}\n\n.hit {\n  background-color: rgb(207, 255, 136);\n}\n\n.miss {\n  background-color: rgb(255, 209, 123);\n}\n\n.disabled {\n  filter: contrast(50%);\n}\n"],"sourceRoot":""}]);
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
      this.handleClick(event);
    });
  }

  render() {
    return this.#element;
  }

  enableFill() {
    this.#element.classList.add('fill');
  }

  disableFill() {
    this.#element.classList.remove('fill');
  }

  enableMiss() {
    this.#element.classList.add('miss');
  }

  disableMiss() {
    this.#element.classList.remove('miss');
  }

  enableHit() {
    this.#element.classList.add('hit');
  }

  disableHit() {
    this.#element.classList.remove('hit');
  }

  enableHover() {
    this.#element.classList.add('hover');
  }

  disableHover() {
    this.#element.classList.remove('hover');
  }

  toggleHover() {
    this.#element.classList.toggle('hover');
  }

  handleClick(event) {
    event.cell = this;
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

    this.enableHoverOnAllCells();
  }

  enableHoverOnAllCells() {
    this.#cells.forEach((cellDOM) => {
      cellDOM.enableHover();
    });
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
      this.handleClick(event);
    });
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

  createShips() {
    const ships = this.#controller.getShips();
    ships.forEach((ship) => {
      const cellDOMs = this.getShipCellDOMs(ship);
      const shipDOM = new _ship__WEBPACK_IMPORTED_MODULE_1__["default"](ship.x, ship.y, ship.length, cellDOMs);
      this.#ships.push(shipDOM);
    });
  }

  getCellDOM(x, y) {
    return this.#cells.find((cellDOM) => {
      return cellDOM.x === x && cellDOM.y === y;
    });
  }

  getShipCellDOMs(ship) {
    return this.#cells.filter((cellDOM) => {
      if (ship.orientation === 'horizontal') {
        const shipBack = ship.x;
        const shipFront = ship.x + ship.length;

        return (
          cellDOM.x >= shipBack && cellDOM.x < shipFront && cellDOM.y === ship.y
        );
      } else if (ship.orientation === 'vertical') {
        const shipBack = ship.y;
        const shipFront = ship.y + ship.length;

        return (
          cellDOM.y >= shipBack && cellDOM.y < shipFront && cellDOM.x === ship.x
        );
      }
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

  handleClick(event) {
    const clickData = {};
    clickData.cell = event.cell;
    clickData.gameboard = {
      controller: this.#controller,
      player: this.player,
      disabled: this.isDisabled(),
    };

    this.handleTurnCallback(clickData);
  }
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Gameboard);


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

  render() {}
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






function removeGameboard(container) {
  const child = container.firstChild;
  if (child) {
    container.removeChild(child);
  }
}

function isPlayerClickingOwnGameboard(clickedGameboardElement) {
  return clickedGameboardElement.player === currentPlayer;
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
  if (currentGameboardElement === enemyGameboardElement) {
    currentPlayer = enemy;
    currentGameboardElement = humanGameboardElement;
    humanGameboardElement.enable();

    await delay(2000);
    enemyPlay();
  } else {
    currentPlayer = human;
    currentGameboardElement = enemyGameboardElement;
    enemyGameboardElement.enable();
  }
}

async function handleTurn(clickData) {
  const cell = clickData.cell;
  const gameboardElement = clickData.gameboard;

  if (gameboardElement.disabled) {
    return;
  }

  if (isPlayerClickingOwnGameboard(gameboardElement)) {
    return;
  }

  if (gameboardElement.controller.isExistingShot(cell.x, cell.y)) {
    if (currentPlayer === enemy) {
      await delay(2000);
      enemyPlay();
    }

    return;
  }

  gameboardElement.controller.receiveAttack(cell.x, cell.y);

  if (gameboardElement.controller.isShipOnCell(cell.x, cell.y)) {
    cell.enableHit();

    if (currentPlayer === human) {
      if (enemyGameboard.allShipsSunk()) {
        console.log('human won!');
        enemyGameboardElement.disable();
        humanGameboardElement.disable();
        return;
      }
    }

    if (currentPlayer === enemy) {
      if (humanGameboard.allShipsSunk()) {
        console.log('enemy won!');
        enemyGameboardElement.disable();
        humanGameboardElement.disable();
        return;
      }

      await delay(2000);
      enemyPlay();
    }
  } else {
    cell.enableMiss();
    nextTurn();
  }
}

function newGame() {
  removeGameboard(enemyContainer);
  removeGameboard(humanContainer);

  enemyGameboard = new _logic_gameboard__WEBPACK_IMPORTED_MODULE_3__["default"]();
  humanGameboard = new _logic_gameboard__WEBPACK_IMPORTED_MODULE_3__["default"]();

  enemy = new _logic_player__WEBPACK_IMPORTED_MODULE_1__["default"](enemyGameboard, 'enemy');
  enemy.placeShipsRandomly();
  enemyGameboardElement = new _dom_gameboard__WEBPACK_IMPORTED_MODULE_2__["default"](enemy, handleTurn);
  enemyGameboardElement.createShips();
  enemyGameboardElement.renderShips();
  enemyContainer.appendChild(enemyGameboardElement.render());

  human = new _logic_player__WEBPACK_IMPORTED_MODULE_1__["default"](humanGameboard, 'human');
  currentPlayer = human;
  currentGameboardElement = enemyGameboardElement;

  humanGameboardElement = new _dom_gameboard__WEBPACK_IMPORTED_MODULE_2__["default"](human, handleTurn);
  humanGameboardElement.disable();
  humanContainer.appendChild(humanGameboardElement.render());

  addRandomizeButton();
}

function addRandomizeButton() {
  const randomizeButton = document.createElement('button');
  randomizeButton.textContent = 'Randomize';
  randomizeButton.id = 'randomize-btn';
  document.body.appendChild(randomizeButton);
  randomizeButton.addEventListener('click', () => {
    randomize();
  });
}

function randomize() {
  human.placeShipsRandomly();
  humanGameboardElement.createShips();
  humanGameboardElement.renderShips();
}

const newGameButton = document.getElementById('new-game-btn');
newGameButton.addEventListener('click', () => {
  newGame();
});

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
    ship.place(x, y);
    this.#ships.push(ship);
  }

  receiveAttack(x, y) {
    const hitShip = this.getShipOnCell(x, y);
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
    return !!this.getShipOnCell(x, y);
  }

  getShipOnCell(x, y) {
    return this.#ships.find((ship) => {
      if (ship.orientation === 'horizontal') {
        const shipBack = ship.x;
        const shipFront = ship.x + ship.length;

        return x >= shipBack && x < shipFront && y === ship.y;
      } else if (ship.orientation === 'vertical') {
        const shipBack = ship.y;
        const shipFront = ship.y + ship.length;

        return y >= shipBack && y < shipFront && x === ship.x;
      }
    });
  }

  isExistingShot(x, y) {
    return !!this.#getHitOnCell(x, y) || !!this.#getMissOnCell(x, y);
  }

  getRandomPosition() {
    const x = (0,_helpers__WEBPACK_IMPORTED_MODULE_1__["default"])(this.size);
    const y = (0,_helpers__WEBPACK_IMPORTED_MODULE_1__["default"])(this.size);

    return [x, y];
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
/* harmony import */ var _ship__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ship */ "./src/logic/ship.js");
/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./helpers */ "./src/logic/helpers.js");
/* harmony import */ var _rules__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./rules */ "./src/logic/rules.js");




class Player {
  constructor(gameboard, name) {
    this.gameboard = gameboard;
    this.name = name;
  }

  play(enemyGameboard) {
    const hits = enemyGameboard.getHits();
    const misses = enemyGameboard.getMisses();
    const shots = hits.concat(misses);

    const availableCells = enemyGameboard.cells.filter((cell) => {
      const found = shots.find((shot) => {
        return cell.x === shot.x && cell.y === shot.y;
      });
      return !found;
    });

    const randomIndex = (0,_helpers__WEBPACK_IMPORTED_MODULE_1__["default"])(availableCells.length);
    const randomCell = availableCells[randomIndex];
    return randomCell;
  }

  placeShipsRandomly() {
    // - don't overlap other ships
    // -- None of a ship's cells should be the same as another ship's cells

    // - don't let ship length go off board

    // - keep 1 space margin around each ship

    let shipsInValidPosition = false;
    // while (!shipsInValidPosition) {
    const ships = [];

    _rules__WEBPACK_IMPORTED_MODULE_2__["default"].forEach((boardShip) => {
      for (let index = 0; index < boardShip.count; index++) {
        const ship = this.#createShipWithRandomOrientation(boardShip);
        const [x, y] = this.gameboard.getRandomPosition();
        ship.place(x, y);
        ships.push(ship);
      }
    });

    if (this.#noShipsOverlapping(ships)) {
      shipsInValidPosition = true;
      ships.forEach((ship) => this.gameboard.placeShip(ship, ship.x, ship.y));
    }
    // }
  }

  #createShipWithRandomOrientation(boardShip) {
    const ship = new boardShip.type();
    ship.setRandomOrientation();
    return ship;
  }

  #noShipsOverlapping(ships) {
    const results = [];

    ships.forEach((ship) => {
      const otherShips = ships.filter((otherShip) => otherShip !== ship);
      const allCellsDifferent = otherShips.every((otherShip) => {
        return (
          otherShip.getCells(this.gameboard) !== ship.getCells(this.gameboard)
        );
      });
      results.push(allCellsDifferent);
    });

    return results.every((result) => result);
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
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
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

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (gameboardShips);


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

  place(x, y) {
    this.x = x;
    this.y = y;
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

  getCells(gameboard) {
    return gameboard.cells.filter((cell) => {
      if (this.orientation === 'horizontal') {
        const back = this.x;
        const front = this.x + this.length;

        return cell.x >= back && cell.x < front && cell.y === this.y;
      } else if (this.orientation === 'vertical') {
        const shipBack = this.y;
        const shipFront = this.y + this.length;

        return cell.y >= shipBack && cell.y < shipFront && cell.x === this.x;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Q0EsTUFBTTtBQUNOO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsaUVBQWUsSUFBSSxFQUFDOzs7Ozs7Ozs7Ozs7Ozs7OztBQ2xFTTtBQUNBOztBQUUxQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLFFBQVE7QUFDUjtBQUNBOztBQUVBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSwwQkFBMEIsNkNBQUk7QUFDOUI7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSwwQkFBMEIsNkNBQUk7QUFDOUI7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsUUFBUTtBQUNSO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1AsS0FBSztBQUNMOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBLGlFQUFlLFNBQVMsRUFBQzs7Ozs7Ozs7Ozs7Ozs7O0FDaE56QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBLGlFQUFlLElBQUksRUFBQzs7Ozs7Ozs7Ozs7Ozs7OztBQ1hDO0FBQ2U7O0FBRVc7QUFDTDs7QUFFMUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQSx1QkFBdUIsd0RBQVM7QUFDaEMsdUJB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QVU7QUFDcEIsR0FBRztBQUNIOztBQUVBLGlFQUFlLGNBQWMsRUFBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN4Qko7QUFDVzs7QUFFckM7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0Esd0JBQXdCLDZDQUFJO0FBQzVCOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0Esa0JBQWtCLG9EQUFZO0FBQzlCO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLFFBQVE7QUFDUjtBQUNBOztBQUVBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTs7QUFFQSxpRUFBZSxJQUFJLEVBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7QUM1RE07O0FBRTFCLHdCQUF3Qiw2Q0FBSTtBQUM1QjtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxpRUFBZSxTQUFTLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly93ZWJwYWNrLXRlbXBsYXRlLy4vc3JjL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly93ZWJwYWNrLXRlbXBsYXRlLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLXRlbXBsYXRlLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vd2VicGFjay10ZW1wbGF0ZS8uL3NyYy9zdHlsZS5jc3M/NzE2MyIsIndlYnBhY2s6Ly93ZWJwYWNrLXRlbXBsYXRlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL3dlYnBhY2stdGVtcGxhdGUvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL3dlYnBhY2stdGVtcGxhdGUvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vd2VicGFjay10ZW1wbGF0ZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLXRlbXBsYXRlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vd2VicGFjay10ZW1wbGF0ZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL3dlYnBhY2stdGVtcGxhdGUvLi9zcmMvZG9tL2NlbGwuanMiLCJ3ZWJwYWNrOi8vd2VicGFjay10ZW1wbGF0ZS8uL3NyYy9kb20vZ2FtZWJvYXJkLmpzIiwid2VicGFjazovL3dlYnBhY2stdGVtcGxhdGUvLi9zcmMvZG9tL3NoaXAuanMiLCJ3ZWJwYWNrOi8vd2VicGFjay10ZW1wbGF0ZS8uL3NyYy9pbmRleC5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLXRlbXBsYXRlLy4vc3JjL2xvZ2ljL2JhdHRsZXNoaXAuanMiLCJ3ZWJwYWNrOi8vd2VicGFjay10ZW1wbGF0ZS8uL3NyYy9sb2dpYy9jZWxsLmpzIiwid2VicGFjazovL3dlYnBhY2stdGVtcGxhdGUvLi9zcmMvbG9naWMvZGVzdHJveWVyLmpzIiwid2VicGFjazovL3dlYnBhY2stdGVtcGxhdGUvLi9zcmMvbG9naWMvZ2FtZWJvYXJkLmpzIiwid2VicGFjazovL3dlYnBhY2stdGVtcGxhdGUvLi9zcmMvbG9naWMvaGVscGVycy5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLXRlbXBsYXRlLy4vc3JjL2xvZ2ljL3BhdHJvbEJvYXQuanMiLCJ3ZWJwYWNrOi8vd2VicGFjay10ZW1wbGF0ZS8uL3NyYy9sb2dpYy9wbGF5ZXIuanMiLCJ3ZWJwYWNrOi8vd2VicGFjay10ZW1wbGF0ZS8uL3NyYy9sb2dpYy9ydWxlcy5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLXRlbXBsYXRlLy4vc3JjL2xvZ2ljL3NoaXAuanMiLCJ3ZWJwYWNrOi8vd2VicGFjay10ZW1wbGF0ZS8uL3NyYy9sb2dpYy9zdWJtYXJpbmUuanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgYCoge1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICBtYXJnaW46IDA7XG59XG5cbi5nYW1lYm9hcmQge1xuICBkaXNwbGF5OiBmbGV4O1xufVxuXG4uZ2FtZWJvYXJkLTAge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xufVxuXG4uZ2FtZWJvYXJkLTAtYmxhbmsge1xuICB3aWR0aDogMzBweDtcbiAgaGVpZ2h0OiAzMHB4O1xufVxuXG4uZ2FtZWJvYXJkLTAtbGFiZWwge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgd2lkdGg6IDMwcHg7XG4gIGhlaWdodDogMzBweDtcbiAgYm9yZGVyLXJpZ2h0OiAxcHggc29saWQgYmxhY2s7XG59XG5cbi5nYW1lYm9hcmQtMSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG59XG5cbi5nYW1lYm9hcmQtMS0wIHtcbiAgZGlzcGxheTogZmxleDtcbn1cblxuLmdhbWVib2FyZC0xLTAtbGFiZWwge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgd2lkdGg6IDMwcHg7XG4gIGhlaWdodDogMzBweDtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIGJsYWNrO1xufVxuXG4uZ2FtZWJvYXJkLTEtMSB7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDEwLCAzMHB4KTtcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiByZXBlYXQoMTAsIDMwcHgpO1xufVxuXG4uZ2FtZWJvYXJkLTEtMS1jZWxsIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGJvcmRlci1yaWdodDogMXB4IHNvbGlkIGJsYWNrO1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgYmxhY2s7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLmhvdmVyOmhvdmVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogeWVsbG93O1xufVxuXG4uZmlsbCB7XG4gIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xufVxuXG4uaGl0IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDIwNywgMjU1LCAxMzYpO1xufVxuXG4ubWlzcyB7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigyNTUsIDIwOSwgMTIzKTtcbn1cblxuLmRpc2FibGVkIHtcbiAgZmlsdGVyOiBjb250cmFzdCg1MCUpO1xufVxuYCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0VBQ0Usc0JBQXNCO0VBQ3RCLFNBQVM7QUFDWDs7QUFFQTtFQUNFLGFBQWE7QUFDZjs7QUFFQTtFQUNFLGFBQWE7RUFDYixzQkFBc0I7QUFDeEI7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsWUFBWTtBQUNkOztBQUVBO0VBQ0UsYUFBYTtFQUNiLHVCQUF1QjtFQUN2QixtQkFBbUI7RUFDbkIsV0FBVztFQUNYLFlBQVk7RUFDWiw2QkFBNkI7QUFDL0I7O0FBRUE7RUFDRSxhQUFhO0VBQ2Isc0JBQXNCO0FBQ3hCOztBQUVBO0VBQ0UsYUFBYTtBQUNmOztBQUVBO0VBQ0UsYUFBYTtFQUNiLHVCQUF1QjtFQUN2QixtQkFBbUI7RUFDbkIsV0FBVztFQUNYLFlBQVk7RUFDWiw4QkFBOEI7QUFDaEM7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsdUNBQXVDO0VBQ3ZDLG9DQUFvQztBQUN0Qzs7QUFFQTtFQUNFLGFBQWE7RUFDYix1QkFBdUI7RUFDdkIsbUJBQW1CO0VBQ25CLDZCQUE2QjtFQUM3Qiw4QkFBOEI7RUFDOUIsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLHdCQUF3QjtBQUMxQjs7QUFFQTtFQUNFLHVCQUF1QjtBQUN6Qjs7QUFFQTtFQUNFLG9DQUFvQztBQUN0Qzs7QUFFQTtFQUNFLG9DQUFvQztBQUN0Qzs7QUFFQTtFQUNFLHFCQUFxQjtBQUN2QlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIqIHtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICBtYXJnaW46IDA7XFxufVxcblxcbi5nYW1lYm9hcmQge1xcbiAgZGlzcGxheTogZmxleDtcXG59XFxuXFxuLmdhbWVib2FyZC0wIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbn1cXG5cXG4uZ2FtZWJvYXJkLTAtYmxhbmsge1xcbiAgd2lkdGg6IDMwcHg7XFxuICBoZWlnaHQ6IDMwcHg7XFxufVxcblxcbi5nYW1lYm9hcmQtMC1sYWJlbCB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgd2lkdGg6IDMwcHg7XFxuICBoZWlnaHQ6IDMwcHg7XFxuICBib3JkZXItcmlnaHQ6IDFweCBzb2xpZCBibGFjaztcXG59XFxuXFxuLmdhbWVib2FyZC0xIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbn1cXG5cXG4uZ2FtZWJvYXJkLTEtMCB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbn1cXG5cXG4uZ2FtZWJvYXJkLTEtMC1sYWJlbCB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgd2lkdGg6IDMwcHg7XFxuICBoZWlnaHQ6IDMwcHg7XFxuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgYmxhY2s7XFxufVxcblxcbi5nYW1lYm9hcmQtMS0xIHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgxMCwgMzBweCk7XFxuICBncmlkLXRlbXBsYXRlLXJvd3M6IHJlcGVhdCgxMCwgMzBweCk7XFxufVxcblxcbi5nYW1lYm9hcmQtMS0xLWNlbGwge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGJvcmRlci1yaWdodDogMXB4IHNvbGlkIGJsYWNrO1xcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIGJsYWNrO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4uaG92ZXI6aG92ZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogeWVsbG93O1xcbn1cXG5cXG4uZmlsbCB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcXG59XFxuXFxuLmhpdCB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjA3LCAyNTUsIDEzNik7XFxufVxcblxcbi5taXNzIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigyNTUsIDIwOSwgMTIzKTtcXG59XFxuXFxuLmRpc2FibGVkIHtcXG4gIGZpbHRlcjogY29udHJhc3QoNTAlKTtcXG59XFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdO1xuXG4gIC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9O1xuXG4gIC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gdXBkYXRlcjtcbn1cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTtcblxuICAgIC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuICBjc3MgKz0gb2JqLmNzcztcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfVxuXG4gIC8vIEZvciBvbGQgSUVcbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgaWYgKHR5cGVvZiBkb2N1bWVudCA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHJldHVybiB7XG4gICAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZSgpIHt9LFxuICAgICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7fVxuICAgIH07XG4gIH1cbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImNsYXNzIENlbGwge1xuICAjZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuXG4gIGNvbnN0cnVjdG9yKHgsIHksIGRpc2FibGVkKSB7XG4gICAgdGhpcy54ID0geDtcbiAgICB0aGlzLnkgPSB5O1xuXG4gICAgdGhpcy4jZWxlbWVudC5jbGFzc0xpc3QuYWRkKCdnYW1lYm9hcmQtMS0xLWNlbGwnKTtcbiAgICB0aGlzLiNlbGVtZW50LnRleHRDb250ZW50ID0gYCR7eH0sICR7eX1gO1xuXG4gICAgaWYgKGRpc2FibGVkKSB7XG4gICAgICB0aGlzLmRpc2FibGVIb3ZlcigpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmVuYWJsZUhvdmVyKCk7XG4gICAgfVxuXG4gICAgdGhpcy4jZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChldmVudCkgPT4ge1xuICAgICAgdGhpcy5oYW5kbGVDbGljayhldmVudCk7XG4gICAgfSk7XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuIHRoaXMuI2VsZW1lbnQ7XG4gIH1cblxuICBlbmFibGVGaWxsKCkge1xuICAgIHRoaXMuI2VsZW1lbnQuY2xhc3NMaXN0LmFkZCgnZmlsbCcpO1xuICB9XG5cbiAgZGlzYWJsZUZpbGwoKSB7XG4gICAgdGhpcy4jZWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKCdmaWxsJyk7XG4gIH1cblxuICBlbmFibGVNaXNzKCkge1xuICAgIHRoaXMuI2VsZW1lbnQuY2xhc3NMaXN0LmFkZCgnbWlzcycpO1xuICB9XG5cbiAgZGlzYWJsZU1pc3MoKSB7XG4gICAgdGhpcy4jZWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKCdtaXNzJyk7XG4gIH1cblxuICBlbmFibGVIaXQoKSB7XG4gICAgdGhpcy4jZWxlbWVudC5jbGFzc0xpc3QuYWRkKCdoaXQnKTtcbiAgfVxuXG4gIGRpc2FibGVIaXQoKSB7XG4gICAgdGhpcy4jZWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKCdoaXQnKTtcbiAgfVxuXG4gIGVuYWJsZUhvdmVyKCkge1xuICAgIHRoaXMuI2VsZW1lbnQuY2xhc3NMaXN0LmFkZCgnaG92ZXInKTtcbiAgfVxuXG4gIGRpc2FibGVIb3ZlcigpIHtcbiAgICB0aGlzLiNlbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoJ2hvdmVyJyk7XG4gIH1cblxuICB0b2dnbGVIb3ZlcigpIHtcbiAgICB0aGlzLiNlbGVtZW50LmNsYXNzTGlzdC50b2dnbGUoJ2hvdmVyJyk7XG4gIH1cblxuICBoYW5kbGVDbGljayhldmVudCkge1xuICAgIGV2ZW50LmNlbGwgPSB0aGlzO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IENlbGw7XG4iLCJpbXBvcnQgQ2VsbCBmcm9tICcuL2NlbGwnO1xuaW1wb3J0IFNoaXAgZnJvbSAnLi9zaGlwJztcblxuY2xhc3MgR2FtZWJvYXJkIHtcbiAgI2VsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgI2Rpc2FibGVkID0gZmFsc2U7XG4gICNjZWxscyA9IFtdO1xuICAjc2hpcHMgPSBbXTtcbiAgI2NvbnRyb2xsZXIgPSB1bmRlZmluZWQ7XG5cbiAgY29uc3RydWN0b3IocGxheWVyLCBoYW5kbGVUdXJuQ2FsbGJhY2spIHtcbiAgICB0aGlzLnBsYXllciA9IHBsYXllcjtcbiAgICB0aGlzLiNjb250cm9sbGVyID0gcGxheWVyLmdhbWVib2FyZDtcbiAgICB0aGlzLmhhbmRsZVR1cm5DYWxsYmFjayA9IGhhbmRsZVR1cm5DYWxsYmFjaztcblxuICAgIHRoaXMuI2VsZW1lbnQuY2xhc3NMaXN0LmFkZCgnZ2FtZWJvYXJkJyk7XG5cbiAgICB0aGlzLmNyZWF0ZUxhYmVsc0xlZnRDb250YWluZXIoKTtcbiAgICB0aGlzLmNyZWF0ZUxhYmVsc0xlZnQoKTtcblxuICAgIHRoaXMuY3JlYXRlR2FtZWJvYXJkMSgpO1xuXG4gICAgdGhpcy5jcmVhdGVMYWJlbHNUb3BDb250YWluZXIoKTtcbiAgICB0aGlzLmNyZWF0ZUxhYmVsc1RvcCgpO1xuXG4gICAgdGhpcy5jcmVhdGVHcmlkKCk7XG4gICAgdGhpcy4jY3JlYXRlQ2VsbHMoKTtcbiAgICB0aGlzLnJlbmRlckNlbGxzKCk7XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuIHRoaXMuI2VsZW1lbnQ7XG4gIH1cblxuICBhcHBlbmRDaGlsZChlbGVtZW50KSB7XG4gICAgdGhpcy4jZWxlbWVudC5hcHBlbmRDaGlsZChlbGVtZW50KTtcbiAgfVxuXG4gIGRpc2FibGUoKSB7XG4gICAgdGhpcy4jZGlzYWJsZWQgPSB0cnVlO1xuICAgIHRoaXMuI2VsZW1lbnQuY2xhc3NMaXN0LmFkZCgnZGlzYWJsZWQnKTtcblxuICAgIHRoaXMuZGlzYWJsZUhvdmVyT25BbGxDZWxscygpO1xuICB9XG5cbiAgZGlzYWJsZUhvdmVyT25BbGxDZWxscygpIHtcbiAgICB0aGlzLiNjZWxscy5mb3JFYWNoKChjZWxsRE9NKSA9PiB7XG4gICAgICBjZWxsRE9NLmRpc2FibGVIb3ZlcigpO1xuICAgIH0pO1xuICB9XG5cbiAgZW5hYmxlKCkge1xuICAgIHRoaXMuI2Rpc2FibGVkID0gZmFsc2U7XG4gICAgdGhpcy4jZWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKCdkaXNhYmxlZCcpO1xuXG4gICAgdGhpcy5lbmFibGVIb3Zlck9uQWxsQ2VsbHMoKTtcbiAgfVxuXG4gIGVuYWJsZUhvdmVyT25BbGxDZWxscygpIHtcbiAgICB0aGlzLiNjZWxscy5mb3JFYWNoKChjZWxsRE9NKSA9PiB7XG4gICAgICBjZWxsRE9NLmVuYWJsZUhvdmVyKCk7XG4gICAgfSk7XG4gIH1cblxuICBpc0Rpc2FibGVkKCkge1xuICAgIHJldHVybiB0aGlzLiNkaXNhYmxlZDtcbiAgfVxuXG4gIGNyZWF0ZUxhYmVsc0xlZnRDb250YWluZXIoKSB7XG4gICAgY29uc3QgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGVsZW1lbnQuY2xhc3NMaXN0LmFkZCgnZ2FtZWJvYXJkLTAnKTtcbiAgICB0aGlzLmFwcGVuZENoaWxkKGVsZW1lbnQpO1xuXG4gICAgdGhpcy5sYWJlbHNMZWZ0Q29udGFpbmVyID0gZWxlbWVudDtcbiAgfVxuXG4gIGNyZWF0ZUxhYmVsc0xlZnQoKSB7XG4gICAgY29uc3QgbGFiZWxzID0gWycnLCAnMScsICcyJywgJzMnLCAnNCcsICc1JywgJzYnLCAnNycsICc4JywgJzknLCAnMTAnXTtcblxuICAgIGxhYmVscy5mb3JFYWNoKChsYWJlbCwgaW5kZXgpID0+IHtcbiAgICAgIGNvbnN0IGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcblxuICAgICAgaWYgKGluZGV4ID09PSAwKSB7XG4gICAgICAgIGVsZW1lbnQuY2xhc3NMaXN0LmFkZCgnZ2FtZWJvYXJkLTAtYmxhbmsnKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGVsZW1lbnQuY2xhc3NMaXN0LmFkZCgnZ2FtZWJvYXJkLTAtbGFiZWwnKTtcbiAgICAgIH1cblxuICAgICAgZWxlbWVudC50ZXh0Q29udGVudCA9IGxhYmVsO1xuICAgICAgdGhpcy5sYWJlbHNMZWZ0Q29udGFpbmVyLmFwcGVuZENoaWxkKGVsZW1lbnQpO1xuICAgIH0pO1xuICB9XG5cbiAgY3JlYXRlR2FtZWJvYXJkMSgpIHtcbiAgICBjb25zdCBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgZWxlbWVudC5jbGFzc0xpc3QuYWRkKCdnYW1lYm9hcmQtMScpO1xuICAgIHRoaXMuYXBwZW5kQ2hpbGQoZWxlbWVudCk7XG5cbiAgICB0aGlzLmdhbWVib2FyZF8xID0gZWxlbWVudDtcbiAgfVxuXG4gIGNyZWF0ZUxhYmVsc1RvcENvbnRhaW5lcigpIHtcbiAgICBjb25zdCBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgZWxlbWVudC5jbGFzc0xpc3QuYWRkKCdnYW1lYm9hcmQtMS0wJyk7XG4gICAgdGhpcy5nYW1lYm9hcmRfMS5hcHBlbmRDaGlsZChlbGVtZW50KTtcblxuICAgIHRoaXMubGFiZWxzVG9wQ29udGFpbmVyID0gZWxlbWVudDtcbiAgfVxuXG4gIGNyZWF0ZUxhYmVsc1RvcCgpIHtcbiAgICBjb25zdCBsYWJlbHMgPSBbJ0EnLCAnQicsICdDJywgJ0QnLCAnRScsICdGJywgJ0cnLCAnSCcsICdJJywgJ0onXTtcblxuICAgIGxhYmVscy5mb3JFYWNoKChsYWJlbCkgPT4ge1xuICAgICAgY29uc3QgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuXG4gICAgICBlbGVtZW50LmNsYXNzTGlzdC5hZGQoJ2dhbWVib2FyZC0xLTAtbGFiZWwnKTtcblxuICAgICAgZWxlbWVudC50ZXh0Q29udGVudCA9IGxhYmVsO1xuICAgICAgdGhpcy5sYWJlbHNUb3BDb250YWluZXIuYXBwZW5kQ2hpbGQoZWxlbWVudCk7XG4gICAgfSk7XG4gIH1cblxuICBjcmVhdGVHcmlkKCkge1xuICAgIGNvbnN0IGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBlbGVtZW50LmNsYXNzTGlzdC5hZGQoJ2dhbWVib2FyZC0xLTEnKTtcbiAgICB0aGlzLmdhbWVib2FyZF8xLmFwcGVuZENoaWxkKGVsZW1lbnQpO1xuXG4gICAgdGhpcy5nYW1lYm9hcmRfMV8xID0gZWxlbWVudDtcblxuICAgIHRoaXMuZ2FtZWJvYXJkXzFfMS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChldmVudCkgPT4ge1xuICAgICAgdGhpcy5oYW5kbGVDbGljayhldmVudCk7XG4gICAgfSk7XG4gIH1cblxuICAjY3JlYXRlQ2VsbHMoKSB7XG4gICAgY29uc3QgY2VsbHMgPSB0aGlzLiNjb250cm9sbGVyLmNlbGxzO1xuXG4gICAgY2VsbHMuZm9yRWFjaCgoY2VsbCkgPT4ge1xuICAgICAgY29uc3QgeCA9IGNlbGwueDtcbiAgICAgIGNvbnN0IHkgPSBjZWxsLnk7XG4gICAgICBjb25zdCBjZWxsRE9NID0gbmV3IENlbGwoeCwgeSwgdGhpcy5pc0Rpc2FibGVkKCkpO1xuICAgICAgdGhpcy4jY2VsbHMucHVzaChjZWxsRE9NKTtcbiAgICB9KTtcbiAgfVxuXG4gIGNyZWF0ZVNoaXBzKCkge1xuICAgIGNvbnN0IHNoaXBzID0gdGhpcy4jY29udHJvbGxlci5nZXRTaGlwcygpO1xuICAgIHNoaXBzLmZvckVhY2goKHNoaXApID0+IHtcbiAgICAgIGNvbnN0IGNlbGxET01zID0gdGhpcy5nZXRTaGlwQ2VsbERPTXMoc2hpcCk7XG4gICAgICBjb25zdCBzaGlwRE9NID0gbmV3IFNoaXAoc2hpcC54LCBzaGlwLnksIHNoaXAubGVuZ3RoLCBjZWxsRE9Ncyk7XG4gICAgICB0aGlzLiNzaGlwcy5wdXNoKHNoaXBET00pO1xuICAgIH0pO1xuICB9XG5cbiAgZ2V0Q2VsbERPTSh4LCB5KSB7XG4gICAgcmV0dXJuIHRoaXMuI2NlbGxzLmZpbmQoKGNlbGxET00pID0+IHtcbiAgICAgIHJldHVybiBjZWxsRE9NLnggPT09IHggJiYgY2VsbERPTS55ID09PSB5O1xuICAgIH0pO1xuICB9XG5cbiAgZ2V0U2hpcENlbGxET01zKHNoaXApIHtcbiAgICByZXR1cm4gdGhpcy4jY2VsbHMuZmlsdGVyKChjZWxsRE9NKSA9PiB7XG4gICAgICBpZiAoc2hpcC5vcmllbnRhdGlvbiA9PT0gJ2hvcml6b250YWwnKSB7XG4gICAgICAgIGNvbnN0IHNoaXBCYWNrID0gc2hpcC54O1xuICAgICAgICBjb25zdCBzaGlwRnJvbnQgPSBzaGlwLnggKyBzaGlwLmxlbmd0aDtcblxuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgIGNlbGxET00ueCA+PSBzaGlwQmFjayAmJiBjZWxsRE9NLnggPCBzaGlwRnJvbnQgJiYgY2VsbERPTS55ID09PSBzaGlwLnlcbiAgICAgICAgKTtcbiAgICAgIH0gZWxzZSBpZiAoc2hpcC5vcmllbnRhdGlvbiA9PT0gJ3ZlcnRpY2FsJykge1xuICAgICAgICBjb25zdCBzaGlwQmFjayA9IHNoaXAueTtcbiAgICAgICAgY29uc3Qgc2hpcEZyb250ID0gc2hpcC55ICsgc2hpcC5sZW5ndGg7XG5cbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICBjZWxsRE9NLnkgPj0gc2hpcEJhY2sgJiYgY2VsbERPTS55IDwgc2hpcEZyb250ICYmIGNlbGxET00ueCA9PT0gc2hpcC54XG4gICAgICAgICk7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICByZW5kZXJDZWxscygpIHtcbiAgICB0aGlzLiNjZWxscy5mb3JFYWNoKChjZWxsRE9NKSA9PiB7XG4gICAgICB0aGlzLmdhbWVib2FyZF8xXzEuYXBwZW5kQ2hpbGQoY2VsbERPTS5yZW5kZXIoKSk7XG4gICAgfSk7XG4gIH1cblxuICByZW5kZXJTaGlwcygpIHtcbiAgICB0aGlzLiNzaGlwcy5mb3JFYWNoKChzaGlwRE9NKSA9PiB7XG4gICAgICBjb25zdCBjZWxsRE9NcyA9IHNoaXBET00uY2VsbHM7XG4gICAgICBjZWxsRE9Ncy5mb3JFYWNoKChjZWxsRE9NKSA9PiB7XG4gICAgICAgIGNlbGxET00uZW5hYmxlRmlsbCgpO1xuICAgICAgfSk7XG4gICAgfSk7XG4gIH1cblxuICBoYW5kbGVDbGljayhldmVudCkge1xuICAgIGNvbnN0IGNsaWNrRGF0YSA9IHt9O1xuICAgIGNsaWNrRGF0YS5jZWxsID0gZXZlbnQuY2VsbDtcbiAgICBjbGlja0RhdGEuZ2FtZWJvYXJkID0ge1xuICAgICAgY29udHJvbGxlcjogdGhpcy4jY29udHJvbGxlcixcbiAgICAgIHBsYXllcjogdGhpcy5wbGF5ZXIsXG4gICAgICBkaXNhYmxlZDogdGhpcy5pc0Rpc2FibGVkKCksXG4gICAgfTtcblxuICAgIHRoaXMuaGFuZGxlVHVybkNhbGxiYWNrKGNsaWNrRGF0YSk7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgR2FtZWJvYXJkO1xuIiwiY2xhc3MgU2hpcCB7XG4gIGNvbnN0cnVjdG9yKHgsIHksIGxlbmd0aCwgY2VsbHMpIHtcbiAgICB0aGlzLnggPSB4O1xuICAgIHRoaXMueSA9IHk7XG4gICAgdGhpcy5sZW5ndGggPSBsZW5ndGg7XG4gICAgdGhpcy5jZWxscyA9IGNlbGxzO1xuICB9XG5cbiAgcmVuZGVyKCkge31cbn1cblxuZXhwb3J0IGRlZmF1bHQgU2hpcDtcbiIsImltcG9ydCAnLi9zdHlsZS5jc3MnO1xuaW1wb3J0IFBsYXllciBmcm9tICcuL2xvZ2ljL3BsYXllcic7XG5cbmltcG9ydCBHYW1lYm9hcmRFbGVtZW50IGZyb20gJy4vZG9tL2dhbWVib2FyZCc7XG5pbXBvcnQgR2FtZWJvYXJkIGZyb20gJy4vbG9naWMvZ2FtZWJvYXJkJztcblxuZnVuY3Rpb24gcmVtb3ZlR2FtZWJvYXJkKGNvbnRhaW5lcikge1xuICBjb25zdCBjaGlsZCA9IGNvbnRhaW5lci5maXJzdENoaWxkO1xuICBpZiAoY2hpbGQpIHtcbiAgICBjb250YWluZXIucmVtb3ZlQ2hpbGQoY2hpbGQpO1xuICB9XG59XG5cbmZ1bmN0aW9uIGlzUGxheWVyQ2xpY2tpbmdPd25HYW1lYm9hcmQoY2xpY2tlZEdhbWVib2FyZEVsZW1lbnQpIHtcbiAgcmV0dXJuIGNsaWNrZWRHYW1lYm9hcmRFbGVtZW50LnBsYXllciA9PT0gY3VycmVudFBsYXllcjtcbn1cblxuZnVuY3Rpb24gZW5lbXlQbGF5KCkge1xuICBjb25zdCBjZWxsID0gZW5lbXkucGxheShodW1hbkdhbWVib2FyZCk7XG4gIGNvbnN0IGNlbGxET00gPSBodW1hbkdhbWVib2FyZEVsZW1lbnQuZ2V0Q2VsbERPTShjZWxsLngsIGNlbGwueSk7XG4gIGNlbGxET00ucmVuZGVyKCkuY2xpY2soKTtcbn1cblxuYXN5bmMgZnVuY3Rpb24gZGVsYXkodGltZSkge1xuICBhd2FpdCBuZXcgUHJvbWlzZSgocmVzb2x2ZSkgPT4gc2V0VGltZW91dChyZXNvbHZlLCB0aW1lKSk7XG59XG5cbmFzeW5jIGZ1bmN0aW9uIG5leHRUdXJuKCkge1xuICBjdXJyZW50R2FtZWJvYXJkRWxlbWVudC5kaXNhYmxlKCk7XG4gIGlmIChjdXJyZW50R2FtZWJvYXJkRWxlbWVudCA9PT0gZW5lbXlHYW1lYm9hcmRFbGVtZW50KSB7XG4gICAgY3VycmVudFBsYXllciA9IGVuZW15O1xuICAgIGN1cnJlbnRHYW1lYm9hcmRFbGVtZW50ID0gaHVtYW5HYW1lYm9hcmRFbGVtZW50O1xuICAgIGh1bWFuR2FtZWJvYXJkRWxlbWVudC5lbmFibGUoKTtcblxuICAgIGF3YWl0IGRlbGF5KDIwMDApO1xuICAgIGVuZW15UGxheSgpO1xuICB9IGVsc2Uge1xuICAgIGN1cnJlbnRQbGF5ZXIgPSBodW1hbjtcbiAgICBjdXJyZW50R2FtZWJvYXJkRWxlbWVudCA9IGVuZW15R2FtZWJvYXJkRWxlbWVudDtcbiAgICBlbmVteUdhbWVib2FyZEVsZW1lbnQuZW5hYmxlKCk7XG4gIH1cbn1cblxuYXN5bmMgZnVuY3Rpb24gaGFuZGxlVHVybihjbGlja0RhdGEpIHtcbiAgY29uc3QgY2VsbCA9IGNsaWNrRGF0YS5jZWxsO1xuICBjb25zdCBnYW1lYm9hcmRFbGVtZW50ID0gY2xpY2tEYXRhLmdhbWVib2FyZDtcblxuICBpZiAoZ2FtZWJvYXJkRWxlbWVudC5kaXNhYmxlZCkge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIGlmIChpc1BsYXllckNsaWNraW5nT3duR2FtZWJvYXJkKGdhbWVib2FyZEVsZW1lbnQpKSB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgaWYgKGdhbWVib2FyZEVsZW1lbnQuY29udHJvbGxlci5pc0V4aXN0aW5nU2hvdChjZWxsLngsIGNlbGwueSkpIHtcbiAgICBpZiAoY3VycmVudFBsYXllciA9PT0gZW5lbXkpIHtcbiAgICAgIGF3YWl0IGRlbGF5KDIwMDApO1xuICAgICAgZW5lbXlQbGF5KCk7XG4gICAgfVxuXG4gICAgcmV0dXJuO1xuICB9XG5cbiAgZ2FtZWJvYXJkRWxlbWVudC5jb250cm9sbGVyLnJlY2VpdmVBdHRhY2soY2VsbC54LCBjZWxsLnkpO1xuXG4gIGlmIChnYW1lYm9hcmRFbGVtZW50LmNvbnRyb2xsZXIuaXNTaGlwT25DZWxsKGNlbGwueCwgY2VsbC55KSkge1xuICAgIGNlbGwuZW5hYmxlSGl0KCk7XG5cbiAgICBpZiAoY3VycmVudFBsYXllciA9PT0gaHVtYW4pIHtcbiAgICAgIGlmIChlbmVteUdhbWVib2FyZC5hbGxTaGlwc1N1bmsoKSkge1xuICAgICAgICBjb25zb2xlLmxvZygnaHVtYW4gd29uIScpO1xuICAgICAgICBlbmVteUdhbWVib2FyZEVsZW1lbnQuZGlzYWJsZSgpO1xuICAgICAgICBodW1hbkdhbWVib2FyZEVsZW1lbnQuZGlzYWJsZSgpO1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKGN1cnJlbnRQbGF5ZXIgPT09IGVuZW15KSB7XG4gICAgICBpZiAoaHVtYW5HYW1lYm9hcmQuYWxsU2hpcHNTdW5rKCkpIHtcbiAgICAgICAgY29uc29sZS5sb2coJ2VuZW15IHdvbiEnKTtcbiAgICAgICAgZW5lbXlHYW1lYm9hcmRFbGVtZW50LmRpc2FibGUoKTtcbiAgICAgICAgaHVtYW5HYW1lYm9hcmRFbGVtZW50LmRpc2FibGUoKTtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBhd2FpdCBkZWxheSgyMDAwKTtcbiAgICAgIGVuZW15UGxheSgpO1xuICAgIH1cbiAgfSBlbHNlIHtcbiAgICBjZWxsLmVuYWJsZU1pc3MoKTtcbiAgICBuZXh0VHVybigpO1xuICB9XG59XG5cbmZ1bmN0aW9uIG5ld0dhbWUoKSB7XG4gIHJlbW92ZUdhbWVib2FyZChlbmVteUNvbnRhaW5lcik7XG4gIHJlbW92ZUdhbWVib2FyZChodW1hbkNvbnRhaW5lcik7XG5cbiAgZW5lbXlHYW1lYm9hcmQgPSBuZXcgR2FtZWJvYXJkKCk7XG4gIGh1bWFuR2FtZWJvYXJkID0gbmV3IEdhbWVib2FyZCgpO1xuXG4gIGVuZW15ID0gbmV3IFBsYXllcihlbmVteUdhbWVib2FyZCwgJ2VuZW15Jyk7XG4gIGVuZW15LnBsYWNlU2hpcHNSYW5kb21seSgpO1xuICBlbmVteUdhbWVib2FyZEVsZW1lbnQgPSBuZXcgR2FtZWJvYXJkRWxlbWVudChlbmVteSwgaGFuZGxlVHVybik7XG4gIGVuZW15R2FtZWJvYXJkRWxlbWVudC5jcmVhdGVTaGlwcygpO1xuICBlbmVteUdhbWVib2FyZEVsZW1lbnQucmVuZGVyU2hpcHMoKTtcbiAgZW5lbXlDb250YWluZXIuYXBwZW5kQ2hpbGQoZW5lbXlHYW1lYm9hcmRFbGVtZW50LnJlbmRlcigpKTtcblxuICBodW1hbiA9IG5ldyBQbGF5ZXIoaHVtYW5HYW1lYm9hcmQsICdodW1hbicpO1xuICBjdXJyZW50UGxheWVyID0gaHVtYW47XG4gIGN1cnJlbnRHYW1lYm9hcmRFbGVtZW50ID0gZW5lbXlHYW1lYm9hcmRFbGVtZW50O1xuXG4gIGh1bWFuR2FtZWJvYXJkRWxlbWVudCA9IG5ldyBHYW1lYm9hcmRFbGVtZW50KGh1bWFuLCBoYW5kbGVUdXJuKTtcbiAgaHVtYW5HYW1lYm9hcmRFbGVtZW50LmRpc2FibGUoKTtcbiAgaHVtYW5Db250YWluZXIuYXBwZW5kQ2hpbGQoaHVtYW5HYW1lYm9hcmRFbGVtZW50LnJlbmRlcigpKTtcblxuICBhZGRSYW5kb21pemVCdXR0b24oKTtcbn1cblxuZnVuY3Rpb24gYWRkUmFuZG9taXplQnV0dG9uKCkge1xuICBjb25zdCByYW5kb21pemVCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgcmFuZG9taXplQnV0dG9uLnRleHRDb250ZW50ID0gJ1JhbmRvbWl6ZSc7XG4gIHJhbmRvbWl6ZUJ1dHRvbi5pZCA9ICdyYW5kb21pemUtYnRuJztcbiAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChyYW5kb21pemVCdXR0b24pO1xuICByYW5kb21pemVCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgcmFuZG9taXplKCk7XG4gIH0pO1xufVxuXG5mdW5jdGlvbiByYW5kb21pemUoKSB7XG4gIGh1bWFuLnBsYWNlU2hpcHNSYW5kb21seSgpO1xuICBodW1hbkdhbWVib2FyZEVsZW1lbnQuY3JlYXRlU2hpcHMoKTtcbiAgaHVtYW5HYW1lYm9hcmRFbGVtZW50LnJlbmRlclNoaXBzKCk7XG59XG5cbmNvbnN0IG5ld0dhbWVCdXR0b24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbmV3LWdhbWUtYnRuJyk7XG5uZXdHYW1lQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICBuZXdHYW1lKCk7XG59KTtcblxubGV0IGVuZW15R2FtZWJvYXJkRWxlbWVudDtcbmxldCBodW1hbkdhbWVib2FyZEVsZW1lbnQ7XG5sZXQgY3VycmVudEdhbWVib2FyZEVsZW1lbnQ7XG5sZXQgZW5lbXlHYW1lYm9hcmQ7XG5sZXQgaHVtYW5HYW1lYm9hcmQ7XG5sZXQgZW5lbXk7XG5sZXQgaHVtYW47XG5sZXQgY3VycmVudFBsYXllcjtcbmNvbnN0IGVuZW15Q29udGFpbmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2dhbWVib2FyZC1jb250YWluZXItZW5lbXknKTtcbmNvbnN0IGh1bWFuQ29udGFpbmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2dhbWVib2FyZC1jb250YWluZXItaHVtYW4nKTtcbiIsImltcG9ydCBTaGlwIGZyb20gJy4vc2hpcCc7XG5cbmNsYXNzIEJhdHRsZXNoaXAgZXh0ZW5kcyBTaGlwIHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgc3VwZXIoNCk7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgQmF0dGxlc2hpcDtcbiIsImNsYXNzIENlbGwge1xuICBjb25zdHJ1Y3Rvcih4LCB5KSB7XG4gICAgdGhpcy54ID0geDtcbiAgICB0aGlzLnkgPSB5O1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IENlbGw7XG4iLCJpbXBvcnQgU2hpcCBmcm9tICcuL3NoaXAnO1xuXG5jbGFzcyBEZXN0cm95ZXIgZXh0ZW5kcyBTaGlwIHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgc3VwZXIoMyk7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgRGVzdHJveWVyO1xuIiwiaW1wb3J0IENlbGwgZnJvbSAnLi9jZWxsJztcbmltcG9ydCBnZXRSYW5kb21JbnQgZnJvbSAnLi9oZWxwZXJzJztcblxuY2xhc3MgR2FtZWJvYXJkIHtcbiAgI3NoaXBzID0gW107XG4gICNtaXNzZXMgPSBbXTtcblxuICBjb25zdHJ1Y3RvcihzaXplID0gMTApIHtcbiAgICB0aGlzLnNpemUgPSBzaXplO1xuICAgIHRoaXMuY2VsbHMgPSBbXTtcbiAgICB0aGlzLiNjcmVhdGVDZWxscygpO1xuICB9XG5cbiAgcGxhY2VTaGlwKHNoaXAsIHgsIHkpIHtcbiAgICBzaGlwLnBsYWNlKHgsIHkpO1xuICAgIHRoaXMuI3NoaXBzLnB1c2goc2hpcCk7XG4gIH1cblxuICByZWNlaXZlQXR0YWNrKHgsIHkpIHtcbiAgICBjb25zdCBoaXRTaGlwID0gdGhpcy5nZXRTaGlwT25DZWxsKHgsIHkpO1xuICAgIGlmIChoaXRTaGlwKSB7XG4gICAgICBoaXRTaGlwLmhpdCh4LCB5KTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy4jbWlzc2VzLnB1c2gobmV3IENlbGwoeCwgeSkpO1xuICAgIH1cbiAgfVxuXG4gIGFsbFNoaXBzU3VuaygpIHtcbiAgICByZXR1cm4gdGhpcy4jc2hpcHMuZXZlcnkoKHNoaXApID0+IHNoaXAuaXNTdW5rKCkpO1xuICB9XG5cbiAgZ2V0U2hpcHMoKSB7XG4gICAgcmV0dXJuIFsuLi50aGlzLiNzaGlwc107XG4gIH1cblxuICBnZXRNaXNzZXMoKSB7XG4gICAgcmV0dXJuIFsuLi50aGlzLiNtaXNzZXNdO1xuICB9XG5cbiAgZ2V0SGl0cygpIHtcbiAgICByZXR1cm4gdGhpcy4jc2hpcHMuZmxhdE1hcCgoc2hpcCkgPT4gc2hpcC5nZXRIaXRzKCkpO1xuICB9XG5cbiAgaXNTaGlwT25DZWxsKHgsIHkpIHtcbiAgICByZXR1cm4gISF0aGlzLmdldFNoaXBPbkNlbGwoeCwgeSk7XG4gIH1cblxuICBnZXRTaGlwT25DZWxsKHgsIHkpIHtcbiAgICByZXR1cm4gdGhpcy4jc2hpcHMuZmluZCgoc2hpcCkgPT4ge1xuICAgICAgaWYgKHNoaXAub3JpZW50YXRpb24gPT09ICdob3Jpem9udGFsJykge1xuICAgICAgICBjb25zdCBzaGlwQmFjayA9IHNoaXAueDtcbiAgICAgICAgY29uc3Qgc2hpcEZyb250ID0gc2hpcC54ICsgc2hpcC5sZW5ndGg7XG5cbiAgICAgICAgcmV0dXJuIHggPj0gc2hpcEJhY2sgJiYgeCA8IHNoaXBGcm9udCAmJiB5ID09PSBzaGlwLnk7XG4gICAgICB9IGVsc2UgaWYgKHNoaXAub3JpZW50YXRpb24gPT09ICd2ZXJ0aWNhbCcpIHtcbiAgICAgICAgY29uc3Qgc2hpcEJhY2sgPSBzaGlwLnk7XG4gICAgICAgIGNvbnN0IHNoaXBGcm9udCA9IHNoaXAueSArIHNoaXAubGVuZ3RoO1xuXG4gICAgICAgIHJldHVybiB5ID49IHNoaXBCYWNrICYmIHkgPCBzaGlwRnJvbnQgJiYgeCA9PT0gc2hpcC54O1xuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgaXNFeGlzdGluZ1Nob3QoeCwgeSkge1xuICAgIHJldHVybiAhIXRoaXMuI2dldEhpdE9uQ2VsbCh4LCB5KSB8fCAhIXRoaXMuI2dldE1pc3NPbkNlbGwoeCwgeSk7XG4gIH1cblxuICBnZXRSYW5kb21Qb3NpdGlvbigpIHtcbiAgICBjb25zdCB4ID0gZ2V0UmFuZG9tSW50KHRoaXMuc2l6ZSk7XG4gICAgY29uc3QgeSA9IGdldFJhbmRvbUludCh0aGlzLnNpemUpO1xuXG4gICAgcmV0dXJuIFt4LCB5XTtcbiAgfVxuXG4gICNjcmVhdGVDZWxscygpIHtcbiAgICBmb3IgKGxldCB5ID0gMDsgeSA8IHRoaXMuc2l6ZTsgeSsrKSB7XG4gICAgICBmb3IgKGxldCB4ID0gMDsgeCA8IHRoaXMuc2l6ZTsgeCsrKSB7XG4gICAgICAgIGNvbnN0IGNlbGwgPSBuZXcgQ2VsbCh4LCB5KTtcbiAgICAgICAgdGhpcy5jZWxscy5wdXNoKGNlbGwpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gICNnZXRIaXRPbkNlbGwoeCwgeSkge1xuICAgIGNvbnN0IGhpdHMgPSB0aGlzLmdldEhpdHMoKTtcbiAgICByZXR1cm4gaGl0cy5maW5kKChjZWxsKSA9PiB4ID09PSBjZWxsLnggJiYgeSA9PT0gY2VsbC55KTtcbiAgfVxuXG4gICNnZXRNaXNzT25DZWxsKHgsIHkpIHtcbiAgICByZXR1cm4gdGhpcy4jbWlzc2VzLmZpbmQoKGNlbGwpID0+IHggPT09IGNlbGwueCAmJiB5ID09PSBjZWxsLnkpO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEdhbWVib2FyZDtcbiIsImZ1bmN0aW9uIGdldFJhbmRvbUludChtYXgpIHtcbiAgcmV0dXJuIE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIG1heCk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGdldFJhbmRvbUludDtcbiIsImltcG9ydCBTaGlwIGZyb20gJy4vc2hpcCc7XG5cbmNsYXNzIFBhdHJvbEJvYXQgZXh0ZW5kcyBTaGlwIHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgc3VwZXIoMSk7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgUGF0cm9sQm9hdDtcbiIsImltcG9ydCBTaGlwIGZyb20gJy4vc2hpcCc7XG5pbXBvcnQgZ2V0UmFuZG9tSW50IGZyb20gJy4vaGVscGVycyc7XG5pbXBvcnQgZ2FtZWJvYXJkU2hpcHMgZnJvbSAnLi9ydWxlcyc7XG5cbmNsYXNzIFBsYXllciB7XG4gIGNvbnN0cnVjdG9yKGdhbWVib2FyZCwgbmFtZSkge1xuICAgIHRoaXMuZ2FtZWJvYXJkID0gZ2FtZWJvYXJkO1xuICAgIHRoaXMubmFtZSA9IG5hbWU7XG4gIH1cblxuICBwbGF5KGVuZW15R2FtZWJvYXJkKSB7XG4gICAgY29uc3QgaGl0cyA9IGVuZW15R2FtZWJvYXJkLmdldEhpdHMoKTtcbiAgICBjb25zdCBtaXNzZXMgPSBlbmVteUdhbWVib2FyZC5nZXRNaXNzZXMoKTtcbiAgICBjb25zdCBzaG90cyA9IGhpdHMuY29uY2F0KG1pc3Nlcyk7XG5cbiAgICBjb25zdCBhdmFpbGFibGVDZWxscyA9IGVuZW15R2FtZWJvYXJkLmNlbGxzLmZpbHRlcigoY2VsbCkgPT4ge1xuICAgICAgY29uc3QgZm91bmQgPSBzaG90cy5maW5kKChzaG90KSA9PiB7XG4gICAgICAgIHJldHVybiBjZWxsLnggPT09IHNob3QueCAmJiBjZWxsLnkgPT09IHNob3QueTtcbiAgICAgIH0pO1xuICAgICAgcmV0dXJuICFmb3VuZDtcbiAgICB9KTtcblxuICAgIGNvbnN0IHJhbmRvbUluZGV4ID0gZ2V0UmFuZG9tSW50KGF2YWlsYWJsZUNlbGxzLmxlbmd0aCk7XG4gICAgY29uc3QgcmFuZG9tQ2VsbCA9IGF2YWlsYWJsZUNlbGxzW3JhbmRvbUluZGV4XTtcbiAgICByZXR1cm4gcmFuZG9tQ2VsbDtcbiAgfVxuXG4gIHBsYWNlU2hpcHNSYW5kb21seSgpIHtcbiAgICAvLyAtIGRvbid0IG92ZXJsYXAgb3RoZXIgc2hpcHNcbiAgICAvLyAtLSBOb25lIG9mIGEgc2hpcCdzIGNlbGxzIHNob3VsZCBiZSB0aGUgc2FtZSBhcyBhbm90aGVyIHNoaXAncyBjZWxsc1xuXG4gICAgLy8gLSBkb24ndCBsZXQgc2hpcCBsZW5ndGggZ28gb2ZmIGJvYXJkXG5cbiAgICAvLyAtIGtlZXAgMSBzcGFjZSBtYXJnaW4gYXJvdW5kIGVhY2ggc2hpcFxuXG4gICAgbGV0IHNoaXBzSW5WYWxpZFBvc2l0aW9uID0gZmFsc2U7XG4gICAgLy8gd2hpbGUgKCFzaGlwc0luVmFsaWRQb3NpdGlvbikge1xuICAgIGNvbnN0IHNoaXBzID0gW107XG5cbiAgICBnYW1lYm9hcmRTaGlwcy5mb3JFYWNoKChib2FyZFNoaXApID0+IHtcbiAgICAgIGZvciAobGV0IGluZGV4ID0gMDsgaW5kZXggPCBib2FyZFNoaXAuY291bnQ7IGluZGV4KyspIHtcbiAgICAgICAgY29uc3Qgc2hpcCA9IHRoaXMuI2NyZWF0ZVNoaXBXaXRoUmFuZG9tT3JpZW50YXRpb24oYm9hcmRTaGlwKTtcbiAgICAgICAgY29uc3QgW3gsIHldID0gdGhpcy5nYW1lYm9hcmQuZ2V0UmFuZG9tUG9zaXRpb24oKTtcbiAgICAgICAgc2hpcC5wbGFjZSh4LCB5KTtcbiAgICAgICAgc2hpcHMucHVzaChzaGlwKTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIGlmICh0aGlzLiNub1NoaXBzT3ZlcmxhcHBpbmcoc2hpcHMpKSB7XG4gICAgICBzaGlwc0luVmFsaWRQb3NpdGlvbiA9IHRydWU7XG4gICAgICBzaGlwcy5mb3JFYWNoKChzaGlwKSA9PiB0aGlzLmdhbWVib2FyZC5wbGFjZVNoaXAoc2hpcCwgc2hpcC54LCBzaGlwLnkpKTtcbiAgICB9XG4gICAgLy8gfVxuICB9XG5cbiAgI2NyZWF0ZVNoaXBXaXRoUmFuZG9tT3JpZW50YXRpb24oYm9hcmRTaGlwKSB7XG4gICAgY29uc3Qgc2hpcCA9IG5ldyBib2FyZFNoaXAudHlwZSgpO1xuICAgIHNoaXAuc2V0UmFuZG9tT3JpZW50YXRpb24oKTtcbiAgICByZXR1cm4gc2hpcDtcbiAgfVxuXG4gICNub1NoaXBzT3ZlcmxhcHBpbmcoc2hpcHMpIHtcbiAgICBjb25zdCByZXN1bHRzID0gW107XG5cbiAgICBzaGlwcy5mb3JFYWNoKChzaGlwKSA9PiB7XG4gICAgICBjb25zdCBvdGhlclNoaXBzID0gc2hpcHMuZmlsdGVyKChvdGhlclNoaXApID0+IG90aGVyU2hpcCAhPT0gc2hpcCk7XG4gICAgICBjb25zdCBhbGxDZWxsc0RpZmZlcmVudCA9IG90aGVyU2hpcHMuZXZlcnkoKG90aGVyU2hpcCkgPT4ge1xuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgIG90aGVyU2hpcC5nZXRDZWxscyh0aGlzLmdhbWVib2FyZCkgIT09IHNoaXAuZ2V0Q2VsbHModGhpcy5nYW1lYm9hcmQpXG4gICAgICAgICk7XG4gICAgICB9KTtcbiAgICAgIHJlc3VsdHMucHVzaChhbGxDZWxsc0RpZmZlcmVudCk7XG4gICAgfSk7XG5cbiAgICByZXR1cm4gcmVzdWx0cy5ldmVyeSgocmVzdWx0KSA9PiByZXN1bHQpO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFBsYXllcjtcbiIsImltcG9ydCBCYXR0bGVzaGlwIGZyb20gJy4vYmF0dGxlc2hpcCc7XG5pbXBvcnQgRGVzdHJveWVyIGZyb20gJy4vZGVzdHJveWVyJztcbmltcG9ydCBQYXRyb2xCb2F0IGZyb20gJy4vcGF0cm9sQm9hdCc7XG5pbXBvcnQgU3VibWFyaW5lIGZyb20gJy4vc3VibWFyaW5lJztcblxuY29uc3QgZ2FtZWJvYXJkU2hpcHMgPSBbXG4gIHtcbiAgICBjb3VudDogMSxcbiAgICB0eXBlOiBCYXR0bGVzaGlwLFxuICB9LFxuICB7XG4gICAgY291bnQ6IDIsXG4gICAgdHlwZTogRGVzdHJveWVyLFxuICB9LFxuICB7XG4gICAgY291bnQ6IDMsXG4gICAgdHlwZTogU3VibWFyaW5lLFxuICB9LFxuICB7XG4gICAgY291bnQ6IDQsXG4gICAgdHlwZTogUGF0cm9sQm9hdCxcbiAgfSxcbl07XG5cbmV4cG9ydCBkZWZhdWx0IGdhbWVib2FyZFNoaXBzO1xuIiwiaW1wb3J0IENlbGwgZnJvbSAnLi9jZWxsJztcbmltcG9ydCBnZXRSYW5kb21JbnQgZnJvbSAnLi9oZWxwZXJzJztcblxuY2xhc3MgU2hpcCB7XG4gICNoaXRzID0gW107XG5cbiAgY29uc3RydWN0b3IobGVuZ3RoID0gMSkge1xuICAgIHRoaXMubGVuZ3RoID0gbGVuZ3RoO1xuICAgIHRoaXMub3JpZW50YXRpb24gPSAnaG9yaXpvbnRhbCc7XG4gICAgdGhpcy4jaGl0cyA9IFtdO1xuICB9XG5cbiAgaGl0KHgsIHkpIHtcbiAgICB0aGlzLiNoaXRzLnB1c2gobmV3IENlbGwoeCwgeSkpO1xuICB9XG5cbiAgaXNTdW5rKCkge1xuICAgIHJldHVybiB0aGlzLiNoaXRzLmxlbmd0aCA9PT0gdGhpcy5sZW5ndGg7XG4gIH1cblxuICBwbGFjZSh4LCB5KSB7XG4gICAgdGhpcy54ID0geDtcbiAgICB0aGlzLnkgPSB5O1xuICB9XG5cbiAgZ2V0SGl0cygpIHtcbiAgICByZXR1cm4gWy4uLnRoaXMuI2hpdHNdO1xuICB9XG5cbiAgc2V0VmVydGljYWwoKSB7XG4gICAgdGhpcy5vcmllbnRhdGlvbiA9ICd2ZXJ0aWNhbCc7XG4gIH1cblxuICBzZXRIb3Jpem9udGFsKCkge1xuICAgIHRoaXMub3JpZW50YXRpb24gPSAnaG9yaXpvbnRhbCc7XG4gIH1cblxuICBzZXRSYW5kb21PcmllbnRhdGlvbigpIHtcbiAgICBjb25zdCBvcmllbnRhdGlvbnMgPSBbJ2hvcml6b250YWwnLCAndmVydGljYWwnXTtcbiAgICBjb25zdCBpbmRleCA9IGdldFJhbmRvbUludChvcmllbnRhdGlvbnMubGVuZ3RoKTtcbiAgICB0aGlzLm9yaWVudGF0aW9uID0gb3JpZW50YXRpb25zW2luZGV4XTtcbiAgfVxuXG4gIGdldENlbGxzKGdhbWVib2FyZCkge1xuICAgIHJldHVybiBnYW1lYm9hcmQuY2VsbHMuZmlsdGVyKChjZWxsKSA9PiB7XG4gICAgICBpZiAodGhpcy5vcmllbnRhdGlvbiA9PT0gJ2hvcml6b250YWwnKSB7XG4gICAgICAgIGNvbnN0IGJhY2sgPSB0aGlzLng7XG4gICAgICAgIGNvbnN0IGZyb250ID0gdGhpcy54ICsgdGhpcy5sZW5ndGg7XG5cbiAgICAgICAgcmV0dXJuIGNlbGwueCA+PSBiYWNrICYmIGNlbGwueCA8IGZyb250ICYmIGNlbGwueSA9PT0gdGhpcy55O1xuICAgICAgfSBlbHNlIGlmICh0aGlzLm9yaWVudGF0aW9uID09PSAndmVydGljYWwnKSB7XG4gICAgICAgIGNvbnN0IHNoaXBCYWNrID0gdGhpcy55O1xuICAgICAgICBjb25zdCBzaGlwRnJvbnQgPSB0aGlzLnkgKyB0aGlzLmxlbmd0aDtcblxuICAgICAgICByZXR1cm4gY2VsbC55ID49IHNoaXBCYWNrICYmIGNlbGwueSA8IHNoaXBGcm9udCAmJiBjZWxsLnggPT09IHRoaXMueDtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBTaGlwO1xuIiwiaW1wb3J0IFNoaXAgZnJvbSAnLi9zaGlwJztcblxuY2xhc3MgU3VibWFyaW5lIGV4dGVuZHMgU2hpcCB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHN1cGVyKDIpO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFN1Ym1hcmluZTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==