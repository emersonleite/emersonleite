/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
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
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
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
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/@babel/polyfill/lib/index.js":
/*!***************************************************!*\
  !*** ./node_modules/@babel/polyfill/lib/index.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\n__webpack_require__(/*! ./noConflict */ \"./node_modules/@babel/polyfill/lib/noConflict.js\");\n\nvar _global = _interopRequireDefault(__webpack_require__(/*! core-js/library/fn/global */ \"./node_modules/core-js/library/fn/global.js\"));\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { \"default\": obj }; }\n\nif (_global[\"default\"]._babelPolyfill && typeof console !== \"undefined\" && console.warn) {\n  console.warn(\"@babel/polyfill is loaded more than once on this page. This is probably not desirable/intended \" + \"and may have consequences if different versions of the polyfills are applied sequentially. \" + \"If you do need to load the polyfill more than once, use @babel/polyfill/noConflict \" + \"instead to bypass the warning.\");\n}\n\n_global[\"default\"]._babelPolyfill = true;\n\n//# sourceURL=webpack:///./node_modules/@babel/polyfill/lib/index.js?");

/***/ }),

/***/ "./node_modules/@babel/polyfill/lib/noConflict.js":
/*!********************************************************!*\
  !*** ./node_modules/@babel/polyfill/lib/noConflict.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\n__webpack_require__(/*! core-js/es6 */ \"./node_modules/core-js/es6/index.js\");\n\n__webpack_require__(/*! core-js/fn/array/includes */ \"./node_modules/core-js/fn/array/includes.js\");\n\n__webpack_require__(/*! core-js/fn/array/flat-map */ \"./node_modules/core-js/fn/array/flat-map.js\");\n\n__webpack_require__(/*! core-js/fn/string/pad-start */ \"./node_modules/core-js/fn/string/pad-start.js\");\n\n__webpack_require__(/*! core-js/fn/string/pad-end */ \"./node_modules/core-js/fn/string/pad-end.js\");\n\n__webpack_require__(/*! core-js/fn/string/trim-start */ \"./node_modules/core-js/fn/string/trim-start.js\");\n\n__webpack_require__(/*! core-js/fn/string/trim-end */ \"./node_modules/core-js/fn/string/trim-end.js\");\n\n__webpack_require__(/*! core-js/fn/symbol/async-iterator */ \"./node_modules/core-js/fn/symbol/async-iterator.js\");\n\n__webpack_require__(/*! core-js/fn/object/get-own-property-descriptors */ \"./node_modules/core-js/fn/object/get-own-property-descriptors.js\");\n\n__webpack_require__(/*! core-js/fn/object/values */ \"./node_modules/core-js/fn/object/values.js\");\n\n__webpack_require__(/*! core-js/fn/object/entries */ \"./node_modules/core-js/fn/object/entries.js\");\n\n__webpack_require__(/*! core-js/fn/promise/finally */ \"./node_modules/core-js/fn/promise/finally.js\");\n\n__webpack_require__(/*! core-js/web */ \"./node_modules/core-js/web/index.js\");\n\n__webpack_require__(/*! regenerator-runtime/runtime */ \"./node_modules/regenerator-runtime/runtime.js\");\n\n//# sourceURL=webpack:///./node_modules/@babel/polyfill/lib/noConflict.js?");

/***/ }),

/***/ "./node_modules/algoliasearch-helper/index.js":
/*!****************************************************!*\
  !*** ./node_modules/algoliasearch-helper/index.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar AlgoliaSearchHelper = __webpack_require__(/*! ./src/algoliasearch.helper */ \"./node_modules/algoliasearch-helper/src/algoliasearch.helper.js\");\n\nvar SearchParameters = __webpack_require__(/*! ./src/SearchParameters */ \"./node_modules/algoliasearch-helper/src/SearchParameters/index.js\");\nvar SearchResults = __webpack_require__(/*! ./src/SearchResults */ \"./node_modules/algoliasearch-helper/src/SearchResults/index.js\");\n\n/**\n * The algoliasearchHelper module is the function that will let its\n * contains everything needed to use the Algoliasearch\n * Helper. It is a also a function that instanciate the helper.\n * To use the helper, you also need the Algolia JS client v3.\n * @example\n * //using the UMD build\n * var client = algoliasearch('latency', '6be0576ff61c053d5f9a3225e2a90f76');\n * var helper = algoliasearchHelper(client, 'bestbuy', {\n *   facets: ['shipping'],\n *   disjunctiveFacets: ['category']\n * });\n * helper.on('result', function(event) {\n *   console.log(event.results);\n * });\n * helper\n *   .toggleFacetRefinement('category', 'Movies & TV Shows')\n *   .toggleFacetRefinement('shipping', 'Free shipping')\n *   .search();\n * @example\n * // The helper is an event emitter using the node API\n * helper.on('result', updateTheResults);\n * helper.once('result', updateTheResults);\n * helper.removeListener('result', updateTheResults);\n * helper.removeAllListeners('result');\n * @module algoliasearchHelper\n * @param  {AlgoliaSearch} client an AlgoliaSearch client\n * @param  {string} index the name of the index to query\n * @param  {SearchParameters|object} opts an object defining the initial config of the search. It doesn't have to be a {SearchParameters}, just an object containing the properties you need from it.\n * @return {AlgoliaSearchHelper}\n */\nfunction algoliasearchHelper(client, index, opts) {\n  return new AlgoliaSearchHelper(client, index, opts);\n}\n\n/**\n * The version currently used\n * @member module:algoliasearchHelper.version\n * @type {number}\n */\nalgoliasearchHelper.version = __webpack_require__(/*! ./src/version.js */ \"./node_modules/algoliasearch-helper/src/version.js\");\n\n/**\n * Constructor for the Helper.\n * @member module:algoliasearchHelper.AlgoliaSearchHelper\n * @type {AlgoliaSearchHelper}\n */\nalgoliasearchHelper.AlgoliaSearchHelper = AlgoliaSearchHelper;\n\n/**\n * Constructor for the object containing all the parameters of the search.\n * @member module:algoliasearchHelper.SearchParameters\n * @type {SearchParameters}\n */\nalgoliasearchHelper.SearchParameters = SearchParameters;\n\n/**\n * Constructor for the object containing the results of the search.\n * @member module:algoliasearchHelper.SearchResults\n * @type {SearchResults}\n */\nalgoliasearchHelper.SearchResults = SearchResults;\n\nmodule.exports = algoliasearchHelper;\n\n\n//# sourceURL=webpack:///./node_modules/algoliasearch-helper/index.js?");

/***/ }),

/***/ "./node_modules/algoliasearch-helper/src/DerivedHelper/index.js":
/*!**********************************************************************!*\
  !*** ./node_modules/algoliasearch-helper/src/DerivedHelper/index.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar events = __webpack_require__(/*! events */ \"./node_modules/events/events.js\");\nvar inherits = __webpack_require__(/*! ../functions/inherits */ \"./node_modules/algoliasearch-helper/src/functions/inherits.js\");\n\n/**\n * A DerivedHelper is a way to create sub requests to\n * Algolia from a main helper.\n * @class\n * @classdesc The DerivedHelper provides an event based interface for search callbacks:\n *  - search: when a search is triggered using the `search()` method.\n *  - result: when the response is retrieved from Algolia and is processed.\n *    This event contains a {@link SearchResults} object and the\n *    {@link SearchParameters} corresponding to this answer.\n */\nfunction DerivedHelper(mainHelper, fn) {\n  this.main = mainHelper;\n  this.fn = fn;\n  this.lastResults = null;\n}\n\ninherits(DerivedHelper, events.EventEmitter);\n\n/**\n * Detach this helper from the main helper\n * @return {undefined}\n * @throws Error if the derived helper is already detached\n */\nDerivedHelper.prototype.detach = function() {\n  this.removeAllListeners();\n  this.main.detachDerivedHelper(this);\n};\n\nDerivedHelper.prototype.getModifiedState = function(parameters) {\n  return this.fn(parameters);\n};\n\nmodule.exports = DerivedHelper;\n\n\n//# sourceURL=webpack:///./node_modules/algoliasearch-helper/src/DerivedHelper/index.js?");

/***/ }),

/***/ "./node_modules/algoliasearch-helper/src/SearchParameters/RefinementList.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/algoliasearch-helper/src/SearchParameters/RefinementList.js ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\n/**\n * Functions to manipulate refinement lists\n *\n * The RefinementList is not formally defined through a prototype but is based\n * on a specific structure.\n *\n * @module SearchParameters.refinementList\n *\n * @typedef {string[]} SearchParameters.refinementList.Refinements\n * @typedef {Object.<string, SearchParameters.refinementList.Refinements>} SearchParameters.refinementList.RefinementList\n */\n\nvar defaultsPure = __webpack_require__(/*! ../functions/defaultsPure */ \"./node_modules/algoliasearch-helper/src/functions/defaultsPure.js\");\nvar omit = __webpack_require__(/*! ../functions/omit */ \"./node_modules/algoliasearch-helper/src/functions/omit.js\");\nvar objectHasKeys = __webpack_require__(/*! ../functions/objectHasKeys */ \"./node_modules/algoliasearch-helper/src/functions/objectHasKeys.js\");\n\nvar lib = {\n  /**\n   * Adds a refinement to a RefinementList\n   * @param {RefinementList} refinementList the initial list\n   * @param {string} attribute the attribute to refine\n   * @param {string} value the value of the refinement, if the value is not a string it will be converted\n   * @return {RefinementList} a new and updated refinement list\n   */\n  addRefinement: function addRefinement(refinementList, attribute, value) {\n    if (lib.isRefined(refinementList, attribute, value)) {\n      return refinementList;\n    }\n\n    var valueAsString = '' + value;\n\n    var facetRefinement = !refinementList[attribute] ?\n      [valueAsString] :\n      refinementList[attribute].concat(valueAsString);\n\n    var mod = {};\n\n    mod[attribute] = facetRefinement;\n\n    return defaultsPure({}, mod, refinementList);\n  },\n  /**\n   * Removes refinement(s) for an attribute:\n   *  - if the value is specified removes the refinement for the value on the attribute\n   *  - if no value is specified removes all the refinements for this attribute\n   * @param {RefinementList} refinementList the initial list\n   * @param {string} attribute the attribute to refine\n   * @param {string} [value] the value of the refinement\n   * @return {RefinementList} a new and updated refinement lst\n   */\n  removeRefinement: function removeRefinement(refinementList, attribute, value) {\n    if (value === undefined) {\n      // we use the \"filter\" form of clearRefinement, since it leaves empty values as-is\n      // the form with a string will remove the attribute completely\n      return lib.clearRefinement(refinementList, function(v, f) {\n        return attribute === f;\n      });\n    }\n\n    var valueAsString = '' + value;\n\n    return lib.clearRefinement(refinementList, function(v, f) {\n      return attribute === f && valueAsString === v;\n    });\n  },\n  /**\n   * Toggles the refinement value for an attribute.\n   * @param {RefinementList} refinementList the initial list\n   * @param {string} attribute the attribute to refine\n   * @param {string} value the value of the refinement\n   * @return {RefinementList} a new and updated list\n   */\n  toggleRefinement: function toggleRefinement(refinementList, attribute, value) {\n    if (value === undefined) throw new Error('toggleRefinement should be used with a value');\n\n    if (lib.isRefined(refinementList, attribute, value)) {\n      return lib.removeRefinement(refinementList, attribute, value);\n    }\n\n    return lib.addRefinement(refinementList, attribute, value);\n  },\n  /**\n   * Clear all or parts of a RefinementList. Depending on the arguments, three\n   * kinds of behavior can happen:\n   *  - if no attribute is provided: clears the whole list\n   *  - if an attribute is provided as a string: clears the list for the specific attribute\n   *  - if an attribute is provided as a function: discards the elements for which the function returns true\n   * @param {RefinementList} refinementList the initial list\n   * @param {string} [attribute] the attribute or function to discard\n   * @param {string} [refinementType] optional parameter to give more context to the attribute function\n   * @return {RefinementList} a new and updated refinement list\n   */\n  clearRefinement: function clearRefinement(refinementList, attribute, refinementType) {\n    if (attribute === undefined) {\n      if (!objectHasKeys(refinementList)) {\n        return refinementList;\n      }\n      return {};\n    } else if (typeof attribute === 'string') {\n      return omit(refinementList, attribute);\n    } else if (typeof attribute === 'function') {\n      var hasChanged = false;\n\n      var newRefinementList = Object.keys(refinementList).reduce(function(memo, key) {\n        var values = refinementList[key] || [];\n        var facetList = values.filter(function(value) {\n          return !attribute(value, key, refinementType);\n        });\n\n        if (facetList.length !== values.length) {\n          hasChanged = true;\n        }\n        memo[key] = facetList;\n\n        return memo;\n      }, {});\n\n      if (hasChanged) return newRefinementList;\n      return refinementList;\n    }\n  },\n  /**\n   * Test if the refinement value is used for the attribute. If no refinement value\n   * is provided, test if the refinementList contains any refinement for the\n   * given attribute.\n   * @param {RefinementList} refinementList the list of refinement\n   * @param {string} attribute name of the attribute\n   * @param {string} [refinementValue] value of the filter/refinement\n   * @return {boolean}\n   */\n  isRefined: function isRefined(refinementList, attribute, refinementValue) {\n    var containsRefinements = !!refinementList[attribute] &&\n      refinementList[attribute].length > 0;\n\n    if (refinementValue === undefined || !containsRefinements) {\n      return containsRefinements;\n    }\n\n    var refinementValueAsString = '' + refinementValue;\n\n    return refinementList[attribute].indexOf(refinementValueAsString) !== -1;\n  }\n};\n\nmodule.exports = lib;\n\n\n//# sourceURL=webpack:///./node_modules/algoliasearch-helper/src/SearchParameters/RefinementList.js?");

/***/ }),

/***/ "./node_modules/algoliasearch-helper/src/SearchParameters/index.js":
/*!*************************************************************************!*\
  !*** ./node_modules/algoliasearch-helper/src/SearchParameters/index.js ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar merge = __webpack_require__(/*! ../functions/merge */ \"./node_modules/algoliasearch-helper/src/functions/merge.js\");\nvar defaultsPure = __webpack_require__(/*! ../functions/defaultsPure */ \"./node_modules/algoliasearch-helper/src/functions/defaultsPure.js\");\nvar intersection = __webpack_require__(/*! ../functions/intersection */ \"./node_modules/algoliasearch-helper/src/functions/intersection.js\");\nvar find = __webpack_require__(/*! ../functions/find */ \"./node_modules/algoliasearch-helper/src/functions/find.js\");\nvar valToNumber = __webpack_require__(/*! ../functions/valToNumber */ \"./node_modules/algoliasearch-helper/src/functions/valToNumber.js\");\nvar omit = __webpack_require__(/*! ../functions/omit */ \"./node_modules/algoliasearch-helper/src/functions/omit.js\");\nvar objectHasKeys = __webpack_require__(/*! ../functions/objectHasKeys */ \"./node_modules/algoliasearch-helper/src/functions/objectHasKeys.js\");\n\nvar RefinementList = __webpack_require__(/*! ./RefinementList */ \"./node_modules/algoliasearch-helper/src/SearchParameters/RefinementList.js\");\n\n/**\n * isEqual, but only for numeric refinement values, possible values:\n * - 5\n * - [5]\n * - [[5]]\n * - [[5,5],[4]]\n */\nfunction isEqualNumericRefinement(a, b) {\n  if (Array.isArray(a) && Array.isArray(b)) {\n    return (\n      a.length === b.length &&\n      a.every(function(el, i) {\n        return isEqualNumericRefinement(b[i], el);\n      })\n    );\n  }\n  return a === b;\n}\n\n/**\n * like _.find but using deep equality to be able to use it\n * to find arrays.\n * @private\n * @param {any[]} array array to search into (elements are base or array of base)\n * @param {any} searchedValue the value we're looking for (base or array of base)\n * @return {any} the searched value or undefined\n */\nfunction findArray(array, searchedValue) {\n  return find(array, function(currentValue) {\n    return isEqualNumericRefinement(currentValue, searchedValue);\n  });\n}\n\n/**\n * The facet list is the structure used to store the list of values used to\n * filter a single attribute.\n * @typedef {string[]} SearchParameters.FacetList\n */\n\n/**\n * Structure to store numeric filters with the operator as the key. The supported operators\n * are `=`, `>`, `<`, `>=`, `<=` and `!=`.\n * @typedef {Object.<string, Array.<number|number[]>>} SearchParameters.OperatorList\n */\n\n/**\n * SearchParameters is the data structure that contains all the information\n * usable for making a search to Algolia API. It doesn't do the search itself,\n * nor does it contains logic about the parameters.\n * It is an immutable object, therefore it has been created in a way that each\n * changes does not change the object itself but returns a copy with the\n * modification.\n * This object should probably not be instantiated outside of the helper. It will\n * be provided when needed. This object is documented for reference as you'll\n * get it from events generated by the {@link AlgoliaSearchHelper}.\n * If need be, instantiate the Helper from the factory function {@link SearchParameters.make}\n * @constructor\n * @classdesc contains all the parameters of a search\n * @param {object|SearchParameters} newParameters existing parameters or partial object\n * for the properties of a new SearchParameters\n * @see SearchParameters.make\n * @example <caption>SearchParameters of the first query in\n *   <a href=\"http://demos.algolia.com/instant-search-demo/\">the instant search demo</a></caption>\n{\n   \"query\": \"\",\n   \"disjunctiveFacets\": [\n      \"customerReviewCount\",\n      \"category\",\n      \"salePrice_range\",\n      \"manufacturer\"\n  ],\n   \"maxValuesPerFacet\": 30,\n   \"page\": 0,\n   \"hitsPerPage\": 10,\n   \"facets\": [\n      \"type\",\n      \"shipping\"\n  ]\n}\n */\nfunction SearchParameters(newParameters) {\n  var params = newParameters ? SearchParameters._parseNumbers(newParameters) : {};\n\n  /**\n   * This attribute contains the list of all the conjunctive facets\n   * used. This list will be added to requested facets in the\n   * [facets attribute](https://www.algolia.com/doc/rest-api/search#param-facets) sent to algolia.\n   * @member {string[]}\n   */\n  this.facets = params.facets || [];\n  /**\n   * This attribute contains the list of all the disjunctive facets\n   * used. This list will be added to requested facets in the\n   * [facets attribute](https://www.algolia.com/doc/rest-api/search#param-facets) sent to algolia.\n   * @member {string[]}\n   */\n  this.disjunctiveFacets = params.disjunctiveFacets || [];\n  /**\n   * This attribute contains the list of all the hierarchical facets\n   * used. This list will be added to requested facets in the\n   * [facets attribute](https://www.algolia.com/doc/rest-api/search#param-facets) sent to algolia.\n   * Hierarchical facets are a sub type of disjunctive facets that\n   * let you filter faceted attributes hierarchically.\n   * @member {string[]|object[]}\n   */\n  this.hierarchicalFacets = params.hierarchicalFacets || [];\n\n  // Refinements\n  /**\n   * This attribute contains all the filters that need to be\n   * applied on the conjunctive facets. Each facet must be properly\n   * defined in the `facets` attribute.\n   *\n   * The key is the name of the facet, and the `FacetList` contains all\n   * filters selected for the associated facet name.\n   *\n   * When querying algolia, the values stored in this attribute will\n   * be translated into the `facetFilters` attribute.\n   * @member {Object.<string, SearchParameters.FacetList>}\n   */\n  this.facetsRefinements = params.facetsRefinements || {};\n  /**\n   * This attribute contains all the filters that need to be\n   * excluded from the conjunctive facets. Each facet must be properly\n   * defined in the `facets` attribute.\n   *\n   * The key is the name of the facet, and the `FacetList` contains all\n   * filters excluded for the associated facet name.\n   *\n   * When querying algolia, the values stored in this attribute will\n   * be translated into the `facetFilters` attribute.\n   * @member {Object.<string, SearchParameters.FacetList>}\n   */\n  this.facetsExcludes = params.facetsExcludes || {};\n  /**\n   * This attribute contains all the filters that need to be\n   * applied on the disjunctive facets. Each facet must be properly\n   * defined in the `disjunctiveFacets` attribute.\n   *\n   * The key is the name of the facet, and the `FacetList` contains all\n   * filters selected for the associated facet name.\n   *\n   * When querying algolia, the values stored in this attribute will\n   * be translated into the `facetFilters` attribute.\n   * @member {Object.<string, SearchParameters.FacetList>}\n   */\n  this.disjunctiveFacetsRefinements = params.disjunctiveFacetsRefinements || {};\n  /**\n   * This attribute contains all the filters that need to be\n   * applied on the numeric attributes.\n   *\n   * The key is the name of the attribute, and the value is the\n   * filters to apply to this attribute.\n   *\n   * When querying algolia, the values stored in this attribute will\n   * be translated into the `numericFilters` attribute.\n   * @member {Object.<string, SearchParameters.OperatorList>}\n   */\n  this.numericRefinements = params.numericRefinements || {};\n  /**\n   * This attribute contains all the tags used to refine the query.\n   *\n   * When querying algolia, the values stored in this attribute will\n   * be translated into the `tagFilters` attribute.\n   * @member {string[]}\n   */\n  this.tagRefinements = params.tagRefinements || [];\n  /**\n   * This attribute contains all the filters that need to be\n   * applied on the hierarchical facets. Each facet must be properly\n   * defined in the `hierarchicalFacets` attribute.\n   *\n   * The key is the name of the facet, and the `FacetList` contains all\n   * filters selected for the associated facet name. The FacetList values\n   * are structured as a string that contain the values for each level\n   * separated by the configured separator.\n   *\n   * When querying algolia, the values stored in this attribute will\n   * be translated into the `facetFilters` attribute.\n   * @member {Object.<string, SearchParameters.FacetList>}\n   */\n  this.hierarchicalFacetsRefinements = params.hierarchicalFacetsRefinements || {};\n\n  var self = this;\n  Object.keys(params).forEach(function(paramName) {\n    var isKeyKnown = SearchParameters.PARAMETERS.indexOf(paramName) !== -1;\n    var isValueDefined = params[paramName] !== undefined;\n\n    if (!isKeyKnown && isValueDefined) {\n      self[paramName] = params[paramName];\n    }\n  });\n}\n\n/**\n * List all the properties in SearchParameters and therefore all the known Algolia properties\n * This doesn't contain any beta/hidden features.\n * @private\n */\nSearchParameters.PARAMETERS = Object.keys(new SearchParameters());\n\n/**\n * @private\n * @param {object} partialState full or part of a state\n * @return {object} a new object with the number keys as number\n */\nSearchParameters._parseNumbers = function(partialState) {\n  // Do not reparse numbers in SearchParameters, they ought to be parsed already\n  if (partialState instanceof SearchParameters) return partialState;\n\n  var numbers = {};\n\n  var numberKeys = [\n    'aroundPrecision',\n    'aroundRadius',\n    'getRankingInfo',\n    'minWordSizefor2Typos',\n    'minWordSizefor1Typo',\n    'page',\n    'maxValuesPerFacet',\n    'distinct',\n    'minimumAroundRadius',\n    'hitsPerPage',\n    'minProximity'\n  ];\n\n  numberKeys.forEach(function(k) {\n    var value = partialState[k];\n    if (typeof value === 'string') {\n      var parsedValue = parseFloat(value);\n      // global isNaN is ok to use here, value is only number or NaN\n      numbers[k] = isNaN(parsedValue) ? value : parsedValue;\n    }\n  });\n\n  // there's two formats of insideBoundingBox, we need to parse\n  // the one which is an array of float geo rectangles\n  if (Array.isArray(partialState.insideBoundingBox)) {\n    numbers.insideBoundingBox = partialState.insideBoundingBox.map(function(geoRect) {\n      return geoRect.map(function(value) {\n        return parseFloat(value);\n      });\n    });\n  }\n\n  if (partialState.numericRefinements) {\n    var numericRefinements = {};\n    Object.keys(partialState.numericRefinements).forEach(function(attribute) {\n      var operators = partialState.numericRefinements[attribute] || {};\n      numericRefinements[attribute] = {};\n      Object.keys(operators).forEach(function(operator) {\n        var values = operators[operator];\n        var parsedValues = values.map(function(v) {\n          if (Array.isArray(v)) {\n            return v.map(function(vPrime) {\n              if (typeof vPrime === 'string') {\n                return parseFloat(vPrime);\n              }\n              return vPrime;\n            });\n          } else if (typeof v === 'string') {\n            return parseFloat(v);\n          }\n          return v;\n        });\n        numericRefinements[attribute][operator] = parsedValues;\n      });\n    });\n    numbers.numericRefinements = numericRefinements;\n  }\n\n  return merge({}, partialState, numbers);\n};\n\n/**\n * Factory for SearchParameters\n * @param {object|SearchParameters} newParameters existing parameters or partial\n * object for the properties of a new SearchParameters\n * @return {SearchParameters} frozen instance of SearchParameters\n */\nSearchParameters.make = function makeSearchParameters(newParameters) {\n  var instance = new SearchParameters(newParameters);\n\n  var hierarchicalFacets = newParameters.hierarchicalFacets || [];\n  hierarchicalFacets.forEach(function(facet) {\n    if (facet.rootPath) {\n      var currentRefinement = instance.getHierarchicalRefinement(facet.name);\n\n      if (currentRefinement.length > 0 && currentRefinement[0].indexOf(facet.rootPath) !== 0) {\n        instance = instance.clearRefinements(facet.name);\n      }\n\n      // get it again in case it has been cleared\n      currentRefinement = instance.getHierarchicalRefinement(facet.name);\n      if (currentRefinement.length === 0) {\n        instance = instance.toggleHierarchicalFacetRefinement(facet.name, facet.rootPath);\n      }\n    }\n  });\n\n  return instance;\n};\n\n/**\n * Validates the new parameters based on the previous state\n * @param {SearchParameters} currentState the current state\n * @param {object|SearchParameters} parameters the new parameters to set\n * @return {Error|null} Error if the modification is invalid, null otherwise\n */\nSearchParameters.validate = function(currentState, parameters) {\n  var params = parameters || {};\n\n  if (currentState.tagFilters && params.tagRefinements && params.tagRefinements.length > 0) {\n    return new Error(\n      '[Tags] Cannot switch from the managed tag API to the advanced API. It is probably ' +\n      'an error, if it is really what you want, you should first clear the tags with clearTags method.');\n  }\n\n  if (currentState.tagRefinements.length > 0 && params.tagFilters) {\n    return new Error(\n      '[Tags] Cannot switch from the advanced tag API to the managed API. It is probably ' +\n      'an error, if it is not, you should first clear the tags with clearTags method.');\n  }\n\n  if (\n    currentState.numericFilters &&\n    params.numericRefinements &&\n    objectHasKeys(params.numericRefinements)\n  ) {\n    return new Error(\n      \"[Numeric filters] Can't switch from the advanced to the managed API. It\" +\n        ' is probably an error, if this is really what you want, you have to first' +\n        ' clear the numeric filters.'\n    );\n  }\n\n  if (objectHasKeys(currentState.numericRefinements) && params.numericFilters) {\n    return new Error(\n      \"[Numeric filters] Can't switch from the managed API to the advanced. It\" +\n      ' is probably an error, if this is really what you want, you have to first' +\n      ' clear the numeric filters.');\n  }\n\n  return null;\n};\n\nSearchParameters.prototype = {\n  constructor: SearchParameters,\n\n  /**\n   * Remove all refinements (disjunctive + conjunctive + excludes + numeric filters)\n   * @method\n   * @param {undefined|string|SearchParameters.clearCallback} [attribute] optional string or function\n   * - If not given, means to clear all the filters.\n   * - If `string`, means to clear all refinements for the `attribute` named filter.\n   * - If `function`, means to clear all the refinements that return truthy values.\n   * @return {SearchParameters}\n   */\n  clearRefinements: function clearRefinements(attribute) {\n    var patch = {\n      numericRefinements: this._clearNumericRefinements(attribute),\n      facetsRefinements: RefinementList.clearRefinement(\n        this.facetsRefinements,\n        attribute,\n        'conjunctiveFacet'\n      ),\n      facetsExcludes: RefinementList.clearRefinement(\n        this.facetsExcludes,\n        attribute,\n        'exclude'\n      ),\n      disjunctiveFacetsRefinements: RefinementList.clearRefinement(\n        this.disjunctiveFacetsRefinements,\n        attribute,\n        'disjunctiveFacet'\n      ),\n      hierarchicalFacetsRefinements: RefinementList.clearRefinement(\n        this.hierarchicalFacetsRefinements,\n        attribute,\n        'hierarchicalFacet'\n      )\n    };\n    if (\n      patch.numericRefinements === this.numericRefinements &&\n      patch.facetsRefinements === this.facetsRefinements &&\n      patch.facetsExcludes === this.facetsExcludes &&\n      patch.disjunctiveFacetsRefinements === this.disjunctiveFacetsRefinements &&\n      patch.hierarchicalFacetsRefinements === this.hierarchicalFacetsRefinements\n    ) {\n      return this;\n    }\n    return this.setQueryParameters(patch);\n  },\n  /**\n   * Remove all the refined tags from the SearchParameters\n   * @method\n   * @return {SearchParameters}\n   */\n  clearTags: function clearTags() {\n    if (this.tagFilters === undefined && this.tagRefinements.length === 0) return this;\n\n    return this.setQueryParameters({\n      tagFilters: undefined,\n      tagRefinements: []\n    });\n  },\n  /**\n   * Set the index.\n   * @method\n   * @param {string} index the index name\n   * @return {SearchParameters}\n   */\n  setIndex: function setIndex(index) {\n    if (index === this.index) return this;\n\n    return this.setQueryParameters({\n      index: index\n    });\n  },\n  /**\n   * Query setter\n   * @method\n   * @param {string} newQuery value for the new query\n   * @return {SearchParameters}\n   */\n  setQuery: function setQuery(newQuery) {\n    if (newQuery === this.query) return this;\n\n    return this.setQueryParameters({\n      query: newQuery\n    });\n  },\n  /**\n   * Page setter\n   * @method\n   * @param {number} newPage new page number\n   * @return {SearchParameters}\n   */\n  setPage: function setPage(newPage) {\n    if (newPage === this.page) return this;\n\n    return this.setQueryParameters({\n      page: newPage\n    });\n  },\n  /**\n   * Facets setter\n   * The facets are the simple facets, used for conjunctive (and) faceting.\n   * @method\n   * @param {string[]} facets all the attributes of the algolia records used for conjunctive faceting\n   * @return {SearchParameters}\n   */\n  setFacets: function setFacets(facets) {\n    return this.setQueryParameters({\n      facets: facets\n    });\n  },\n  /**\n   * Disjunctive facets setter\n   * Change the list of disjunctive (or) facets the helper chan handle.\n   * @method\n   * @param {string[]} facets all the attributes of the algolia records used for disjunctive faceting\n   * @return {SearchParameters}\n   */\n  setDisjunctiveFacets: function setDisjunctiveFacets(facets) {\n    return this.setQueryParameters({\n      disjunctiveFacets: facets\n    });\n  },\n  /**\n   * HitsPerPage setter\n   * Hits per page represents the number of hits retrieved for this query\n   * @method\n   * @param {number} n number of hits retrieved per page of results\n   * @return {SearchParameters}\n   */\n  setHitsPerPage: function setHitsPerPage(n) {\n    if (this.hitsPerPage === n) return this;\n\n    return this.setQueryParameters({\n      hitsPerPage: n\n    });\n  },\n  /**\n   * typoTolerance setter\n   * Set the value of typoTolerance\n   * @method\n   * @param {string} typoTolerance new value of typoTolerance (\"true\", \"false\", \"min\" or \"strict\")\n   * @return {SearchParameters}\n   */\n  setTypoTolerance: function setTypoTolerance(typoTolerance) {\n    if (this.typoTolerance === typoTolerance) return this;\n\n    return this.setQueryParameters({\n      typoTolerance: typoTolerance\n    });\n  },\n  /**\n   * Add a numeric filter for a given attribute\n   * When value is an array, they are combined with OR\n   * When value is a single value, it will combined with AND\n   * @method\n   * @param {string} attribute attribute to set the filter on\n   * @param {string} operator operator of the filter (possible values: =, >, >=, <, <=, !=)\n   * @param {number | number[]} value value of the filter\n   * @return {SearchParameters}\n   * @example\n   * // for price = 50 or 40\n   * searchparameter.addNumericRefinement('price', '=', [50, 40]);\n   * @example\n   * // for size = 38 and 40\n   * searchparameter.addNumericRefinement('size', '=', 38);\n   * searchparameter.addNumericRefinement('size', '=', 40);\n   */\n  addNumericRefinement: function(attribute, operator, v) {\n    var value = valToNumber(v);\n\n    if (this.isNumericRefined(attribute, operator, value)) return this;\n\n    var mod = merge({}, this.numericRefinements);\n\n    mod[attribute] = merge({}, mod[attribute]);\n\n    if (mod[attribute][operator]) {\n      // Array copy\n      mod[attribute][operator] = mod[attribute][operator].slice();\n      // Add the element. Concat can't be used here because value can be an array.\n      mod[attribute][operator].push(value);\n    } else {\n      mod[attribute][operator] = [value];\n    }\n\n    return this.setQueryParameters({\n      numericRefinements: mod\n    });\n  },\n  /**\n   * Get the list of conjunctive refinements for a single facet\n   * @param {string} facetName name of the attribute used for faceting\n   * @return {string[]} list of refinements\n   */\n  getConjunctiveRefinements: function(facetName) {\n    if (!this.isConjunctiveFacet(facetName)) {\n      return [];\n    }\n    return this.facetsRefinements[facetName] || [];\n  },\n  /**\n   * Get the list of disjunctive refinements for a single facet\n   * @param {string} facetName name of the attribute used for faceting\n   * @return {string[]} list of refinements\n   */\n  getDisjunctiveRefinements: function(facetName) {\n    if (!this.isDisjunctiveFacet(facetName)) {\n      return [];\n    }\n    return this.disjunctiveFacetsRefinements[facetName] || [];\n  },\n  /**\n   * Get the list of hierarchical refinements for a single facet\n   * @param {string} facetName name of the attribute used for faceting\n   * @return {string[]} list of refinements\n   */\n  getHierarchicalRefinement: function(facetName) {\n    // we send an array but we currently do not support multiple\n    // hierarchicalRefinements for a hierarchicalFacet\n    return this.hierarchicalFacetsRefinements[facetName] || [];\n  },\n  /**\n   * Get the list of exclude refinements for a single facet\n   * @param {string} facetName name of the attribute used for faceting\n   * @return {string[]} list of refinements\n   */\n  getExcludeRefinements: function(facetName) {\n    if (!this.isConjunctiveFacet(facetName)) {\n      return [];\n    }\n    return this.facetsExcludes[facetName] || [];\n  },\n\n  /**\n   * Remove all the numeric filter for a given (attribute, operator)\n   * @method\n   * @param {string} attribute attribute to set the filter on\n   * @param {string} [operator] operator of the filter (possible values: =, >, >=, <, <=, !=)\n   * @param {number} [number] the value to be removed\n   * @return {SearchParameters}\n   */\n  removeNumericRefinement: function(attribute, operator, paramValue) {\n    if (paramValue !== undefined) {\n      if (!this.isNumericRefined(attribute, operator, paramValue)) {\n        return this;\n      }\n      return this.setQueryParameters({\n        numericRefinements: this._clearNumericRefinements(function(value, key) {\n          return (\n            key === attribute &&\n            value.op === operator &&\n            isEqualNumericRefinement(value.val, valToNumber(paramValue))\n          );\n        })\n      });\n    } else if (operator !== undefined) {\n      if (!this.isNumericRefined(attribute, operator)) return this;\n      return this.setQueryParameters({\n        numericRefinements: this._clearNumericRefinements(function(value, key) {\n          return key === attribute && value.op === operator;\n        })\n      });\n    }\n\n    if (!this.isNumericRefined(attribute)) return this;\n    return this.setQueryParameters({\n      numericRefinements: this._clearNumericRefinements(function(value, key) {\n        return key === attribute;\n      })\n    });\n  },\n  /**\n   * Get the list of numeric refinements for a single facet\n   * @param {string} facetName name of the attribute used for faceting\n   * @return {SearchParameters.OperatorList[]} list of refinements\n   */\n  getNumericRefinements: function(facetName) {\n    return this.numericRefinements[facetName] || {};\n  },\n  /**\n   * Return the current refinement for the (attribute, operator)\n   * @param {string} attribute attribute in the record\n   * @param {string} operator operator applied on the refined values\n   * @return {Array.<number|number[]>} refined values\n   */\n  getNumericRefinement: function(attribute, operator) {\n    return this.numericRefinements[attribute] && this.numericRefinements[attribute][operator];\n  },\n  /**\n   * Clear numeric filters.\n   * @method\n   * @private\n   * @param {string|SearchParameters.clearCallback} [attribute] optional string or function\n   * - If not given, means to clear all the filters.\n   * - If `string`, means to clear all refinements for the `attribute` named filter.\n   * - If `function`, means to clear all the refinements that return truthy values.\n   * @return {Object.<string, OperatorList>}\n   */\n  _clearNumericRefinements: function _clearNumericRefinements(attribute) {\n    if (attribute === undefined) {\n      if (!objectHasKeys(this.numericRefinements)) {\n        return this.numericRefinements;\n      }\n      return {};\n    } else if (typeof attribute === 'string') {\n      if (!objectHasKeys(this.numericRefinements[attribute])) {\n        return this.numericRefinements;\n      }\n      return omit(this.numericRefinements, attribute);\n    } else if (typeof attribute === 'function') {\n      var hasChanged = false;\n      var numericRefinements = this.numericRefinements;\n      var newNumericRefinements = Object.keys(numericRefinements).reduce(function(memo, key) {\n        var operators = numericRefinements[key];\n        var operatorList = {};\n\n        operators = operators || {};\n        Object.keys(operators).forEach(function(operator) {\n          var values = operators[operator] || [];\n          var outValues = [];\n          values.forEach(function(value) {\n            var predicateResult = attribute({val: value, op: operator}, key, 'numeric');\n            if (!predicateResult) outValues.push(value);\n          });\n          if (outValues.length !== values.length) {\n            hasChanged = true;\n          }\n          operatorList[operator] = outValues;\n        });\n\n        memo[key] = operatorList;\n\n        return memo;\n      }, {});\n\n      if (hasChanged) return newNumericRefinements;\n      return this.numericRefinements;\n    }\n  },\n  /**\n   * Add a facet to the facets attribute of the helper configuration, if it\n   * isn't already present.\n   * @method\n   * @param {string} facet facet name to add\n   * @return {SearchParameters}\n   */\n  addFacet: function addFacet(facet) {\n    if (this.isConjunctiveFacet(facet)) {\n      return this;\n    }\n\n    return this.setQueryParameters({\n      facets: this.facets.concat([facet])\n    });\n  },\n  /**\n   * Add a disjunctive facet to the disjunctiveFacets attribute of the helper\n   * configuration, if it isn't already present.\n   * @method\n   * @param {string} facet disjunctive facet name to add\n   * @return {SearchParameters}\n   */\n  addDisjunctiveFacet: function addDisjunctiveFacet(facet) {\n    if (this.isDisjunctiveFacet(facet)) {\n      return this;\n    }\n\n    return this.setQueryParameters({\n      disjunctiveFacets: this.disjunctiveFacets.concat([facet])\n    });\n  },\n  /**\n   * Add a hierarchical facet to the hierarchicalFacets attribute of the helper\n   * configuration.\n   * @method\n   * @param {object} hierarchicalFacet hierarchical facet to add\n   * @return {SearchParameters}\n   * @throws will throw an error if a hierarchical facet with the same name was already declared\n   */\n  addHierarchicalFacet: function addHierarchicalFacet(hierarchicalFacet) {\n    if (this.isHierarchicalFacet(hierarchicalFacet.name)) {\n      throw new Error(\n        'Cannot declare two hierarchical facets with the same name: `' + hierarchicalFacet.name + '`');\n    }\n\n    return this.setQueryParameters({\n      hierarchicalFacets: this.hierarchicalFacets.concat([hierarchicalFacet])\n    });\n  },\n  /**\n   * Add a refinement on a \"normal\" facet\n   * @method\n   * @param {string} facet attribute to apply the faceting on\n   * @param {string} value value of the attribute (will be converted to string)\n   * @return {SearchParameters}\n   */\n  addFacetRefinement: function addFacetRefinement(facet, value) {\n    if (!this.isConjunctiveFacet(facet)) {\n      throw new Error(facet + ' is not defined in the facets attribute of the helper configuration');\n    }\n    if (RefinementList.isRefined(this.facetsRefinements, facet, value)) return this;\n\n    return this.setQueryParameters({\n      facetsRefinements: RefinementList.addRefinement(this.facetsRefinements, facet, value)\n    });\n  },\n  /**\n   * Exclude a value from a \"normal\" facet\n   * @method\n   * @param {string} facet attribute to apply the exclusion on\n   * @param {string} value value of the attribute (will be converted to string)\n   * @return {SearchParameters}\n   */\n  addExcludeRefinement: function addExcludeRefinement(facet, value) {\n    if (!this.isConjunctiveFacet(facet)) {\n      throw new Error(facet + ' is not defined in the facets attribute of the helper configuration');\n    }\n    if (RefinementList.isRefined(this.facetsExcludes, facet, value)) return this;\n\n    return this.setQueryParameters({\n      facetsExcludes: RefinementList.addRefinement(this.facetsExcludes, facet, value)\n    });\n  },\n  /**\n   * Adds a refinement on a disjunctive facet.\n   * @method\n   * @param {string} facet attribute to apply the faceting on\n   * @param {string} value value of the attribute (will be converted to string)\n   * @return {SearchParameters}\n   */\n  addDisjunctiveFacetRefinement: function addDisjunctiveFacetRefinement(facet, value) {\n    if (!this.isDisjunctiveFacet(facet)) {\n      throw new Error(\n        facet + ' is not defined in the disjunctiveFacets attribute of the helper configuration');\n    }\n\n    if (RefinementList.isRefined(this.disjunctiveFacetsRefinements, facet, value)) return this;\n\n    return this.setQueryParameters({\n      disjunctiveFacetsRefinements: RefinementList.addRefinement(\n        this.disjunctiveFacetsRefinements, facet, value)\n    });\n  },\n  /**\n   * addTagRefinement adds a tag to the list used to filter the results\n   * @param {string} tag tag to be added\n   * @return {SearchParameters}\n   */\n  addTagRefinement: function addTagRefinement(tag) {\n    if (this.isTagRefined(tag)) return this;\n\n    var modification = {\n      tagRefinements: this.tagRefinements.concat(tag)\n    };\n\n    return this.setQueryParameters(modification);\n  },\n  /**\n   * Remove a facet from the facets attribute of the helper configuration, if it\n   * is present.\n   * @method\n   * @param {string} facet facet name to remove\n   * @return {SearchParameters}\n   */\n  removeFacet: function removeFacet(facet) {\n    if (!this.isConjunctiveFacet(facet)) {\n      return this;\n    }\n\n    return this.clearRefinements(facet).setQueryParameters({\n      facets: this.facets.filter(function(f) {\n        return f !== facet;\n      })\n    });\n  },\n  /**\n   * Remove a disjunctive facet from the disjunctiveFacets attribute of the\n   * helper configuration, if it is present.\n   * @method\n   * @param {string} facet disjunctive facet name to remove\n   * @return {SearchParameters}\n   */\n  removeDisjunctiveFacet: function removeDisjunctiveFacet(facet) {\n    if (!this.isDisjunctiveFacet(facet)) {\n      return this;\n    }\n\n    return this.clearRefinements(facet).setQueryParameters({\n      disjunctiveFacets: this.disjunctiveFacets.filter(function(f) {\n        return f !== facet;\n      })\n    });\n  },\n  /**\n   * Remove a hierarchical facet from the hierarchicalFacets attribute of the\n   * helper configuration, if it is present.\n   * @method\n   * @param {string} facet hierarchical facet name to remove\n   * @return {SearchParameters}\n   */\n  removeHierarchicalFacet: function removeHierarchicalFacet(facet) {\n    if (!this.isHierarchicalFacet(facet)) {\n      return this;\n    }\n\n    return this.clearRefinements(facet).setQueryParameters({\n      hierarchicalFacets: this.hierarchicalFacets.filter(function(f) {\n        return f.name !== facet;\n      })\n    });\n  },\n  /**\n   * Remove a refinement set on facet. If a value is provided, it will clear the\n   * refinement for the given value, otherwise it will clear all the refinement\n   * values for the faceted attribute.\n   * @method\n   * @param {string} facet name of the attribute used for faceting\n   * @param {string} [value] value used to filter\n   * @return {SearchParameters}\n   */\n  removeFacetRefinement: function removeFacetRefinement(facet, value) {\n    if (!this.isConjunctiveFacet(facet)) {\n      throw new Error(facet + ' is not defined in the facets attribute of the helper configuration');\n    }\n    if (!RefinementList.isRefined(this.facetsRefinements, facet, value)) return this;\n\n    return this.setQueryParameters({\n      facetsRefinements: RefinementList.removeRefinement(this.facetsRefinements, facet, value)\n    });\n  },\n  /**\n   * Remove a negative refinement on a facet\n   * @method\n   * @param {string} facet name of the attribute used for faceting\n   * @param {string} value value used to filter\n   * @return {SearchParameters}\n   */\n  removeExcludeRefinement: function removeExcludeRefinement(facet, value) {\n    if (!this.isConjunctiveFacet(facet)) {\n      throw new Error(facet + ' is not defined in the facets attribute of the helper configuration');\n    }\n    if (!RefinementList.isRefined(this.facetsExcludes, facet, value)) return this;\n\n    return this.setQueryParameters({\n      facetsExcludes: RefinementList.removeRefinement(this.facetsExcludes, facet, value)\n    });\n  },\n  /**\n   * Remove a refinement on a disjunctive facet\n   * @method\n   * @param {string} facet name of the attribute used for faceting\n   * @param {string} value value used to filter\n   * @return {SearchParameters}\n   */\n  removeDisjunctiveFacetRefinement: function removeDisjunctiveFacetRefinement(facet, value) {\n    if (!this.isDisjunctiveFacet(facet)) {\n      throw new Error(\n        facet + ' is not defined in the disjunctiveFacets attribute of the helper configuration');\n    }\n    if (!RefinementList.isRefined(this.disjunctiveFacetsRefinements, facet, value)) return this;\n\n    return this.setQueryParameters({\n      disjunctiveFacetsRefinements: RefinementList.removeRefinement(\n        this.disjunctiveFacetsRefinements, facet, value)\n    });\n  },\n  /**\n   * Remove a tag from the list of tag refinements\n   * @method\n   * @param {string} tag the tag to remove\n   * @return {SearchParameters}\n   */\n  removeTagRefinement: function removeTagRefinement(tag) {\n    if (!this.isTagRefined(tag)) return this;\n\n    var modification = {\n      tagRefinements: this.tagRefinements.filter(function(t) {\n        return t !== tag;\n      })\n    };\n\n    return this.setQueryParameters(modification);\n  },\n  /**\n   * Generic toggle refinement method to use with facet, disjunctive facets\n   * and hierarchical facets\n   * @param  {string} facet the facet to refine\n   * @param  {string} value the associated value\n   * @return {SearchParameters}\n   * @throws will throw an error if the facet is not declared in the settings of the helper\n   * @deprecated since version 2.19.0, see {@link SearchParameters#toggleFacetRefinement}\n   */\n  toggleRefinement: function toggleRefinement(facet, value) {\n    return this.toggleFacetRefinement(facet, value);\n  },\n  /**\n   * Generic toggle refinement method to use with facet, disjunctive facets\n   * and hierarchical facets\n   * @param  {string} facet the facet to refine\n   * @param  {string} value the associated value\n   * @return {SearchParameters}\n   * @throws will throw an error if the facet is not declared in the settings of the helper\n   */\n  toggleFacetRefinement: function toggleFacetRefinement(facet, value) {\n    if (this.isHierarchicalFacet(facet)) {\n      return this.toggleHierarchicalFacetRefinement(facet, value);\n    } else if (this.isConjunctiveFacet(facet)) {\n      return this.toggleConjunctiveFacetRefinement(facet, value);\n    } else if (this.isDisjunctiveFacet(facet)) {\n      return this.toggleDisjunctiveFacetRefinement(facet, value);\n    }\n\n    throw new Error('Cannot refine the undeclared facet ' + facet +\n      '; it should be added to the helper options facets, disjunctiveFacets or hierarchicalFacets');\n  },\n  /**\n   * Switch the refinement applied over a facet/value\n   * @method\n   * @param {string} facet name of the attribute used for faceting\n   * @param {value} value value used for filtering\n   * @return {SearchParameters}\n   */\n  toggleConjunctiveFacetRefinement: function toggleConjunctiveFacetRefinement(facet, value) {\n    if (!this.isConjunctiveFacet(facet)) {\n      throw new Error(facet + ' is not defined in the facets attribute of the helper configuration');\n    }\n\n    return this.setQueryParameters({\n      facetsRefinements: RefinementList.toggleRefinement(this.facetsRefinements, facet, value)\n    });\n  },\n  /**\n   * Switch the refinement applied over a facet/value\n   * @method\n   * @param {string} facet name of the attribute used for faceting\n   * @param {value} value value used for filtering\n   * @return {SearchParameters}\n   */\n  toggleExcludeFacetRefinement: function toggleExcludeFacetRefinement(facet, value) {\n    if (!this.isConjunctiveFacet(facet)) {\n      throw new Error(facet + ' is not defined in the facets attribute of the helper configuration');\n    }\n\n    return this.setQueryParameters({\n      facetsExcludes: RefinementList.toggleRefinement(this.facetsExcludes, facet, value)\n    });\n  },\n  /**\n   * Switch the refinement applied over a facet/value\n   * @method\n   * @param {string} facet name of the attribute used for faceting\n   * @param {value} value value used for filtering\n   * @return {SearchParameters}\n   */\n  toggleDisjunctiveFacetRefinement: function toggleDisjunctiveFacetRefinement(facet, value) {\n    if (!this.isDisjunctiveFacet(facet)) {\n      throw new Error(\n        facet + ' is not defined in the disjunctiveFacets attribute of the helper configuration');\n    }\n\n    return this.setQueryParameters({\n      disjunctiveFacetsRefinements: RefinementList.toggleRefinement(\n        this.disjunctiveFacetsRefinements, facet, value)\n    });\n  },\n  /**\n   * Switch the refinement applied over a facet/value\n   * @method\n   * @param {string} facet name of the attribute used for faceting\n   * @param {value} value value used for filtering\n   * @return {SearchParameters}\n   */\n  toggleHierarchicalFacetRefinement: function toggleHierarchicalFacetRefinement(facet, value) {\n    if (!this.isHierarchicalFacet(facet)) {\n      throw new Error(\n        facet + ' is not defined in the hierarchicalFacets attribute of the helper configuration');\n    }\n\n    var separator = this._getHierarchicalFacetSeparator(this.getHierarchicalFacetByName(facet));\n\n    var mod = {};\n\n    var upOneOrMultipleLevel = this.hierarchicalFacetsRefinements[facet] !== undefined &&\n      this.hierarchicalFacetsRefinements[facet].length > 0 && (\n      // remove current refinement:\n      // refinement was 'beer > IPA', call is toggleRefine('beer > IPA'), refinement should be `beer`\n      this.hierarchicalFacetsRefinements[facet][0] === value ||\n      // remove a parent refinement of the current refinement:\n      //  - refinement was 'beer > IPA > Flying dog'\n      //  - call is toggleRefine('beer > IPA')\n      //  - refinement should be `beer`\n      this.hierarchicalFacetsRefinements[facet][0].indexOf(value + separator) === 0\n    );\n\n    if (upOneOrMultipleLevel) {\n      if (value.indexOf(separator) === -1) {\n        // go back to root level\n        mod[facet] = [];\n      } else {\n        mod[facet] = [value.slice(0, value.lastIndexOf(separator))];\n      }\n    } else {\n      mod[facet] = [value];\n    }\n\n    return this.setQueryParameters({\n      hierarchicalFacetsRefinements: defaultsPure({}, mod, this.hierarchicalFacetsRefinements)\n    });\n  },\n\n  /**\n   * Adds a refinement on a hierarchical facet.\n   * @param {string} facet the facet name\n   * @param {string} path the hierarchical facet path\n   * @return {SearchParameter} the new state\n   * @throws Error if the facet is not defined or if the facet is refined\n   */\n  addHierarchicalFacetRefinement: function(facet, path) {\n    if (this.isHierarchicalFacetRefined(facet)) {\n      throw new Error(facet + ' is already refined.');\n    }\n    if (!this.isHierarchicalFacet(facet)) {\n      throw new Error(facet + ' is not defined in the hierarchicalFacets attribute of the helper configuration.');\n    }\n    var mod = {};\n    mod[facet] = [path];\n    return this.setQueryParameters({\n      hierarchicalFacetsRefinements: defaultsPure({}, mod, this.hierarchicalFacetsRefinements)\n    });\n  },\n\n  /**\n   * Removes the refinement set on a hierarchical facet.\n   * @param {string} facet the facet name\n   * @return {SearchParameter} the new state\n   * @throws Error if the facet is not defined or if the facet is not refined\n   */\n  removeHierarchicalFacetRefinement: function(facet) {\n    if (!this.isHierarchicalFacetRefined(facet)) {\n      return this;\n    }\n    var mod = {};\n    mod[facet] = [];\n    return this.setQueryParameters({\n      hierarchicalFacetsRefinements: defaultsPure({}, mod, this.hierarchicalFacetsRefinements)\n    });\n  },\n  /**\n   * Switch the tag refinement\n   * @method\n   * @param {string} tag the tag to remove or add\n   * @return {SearchParameters}\n   */\n  toggleTagRefinement: function toggleTagRefinement(tag) {\n    if (this.isTagRefined(tag)) {\n      return this.removeTagRefinement(tag);\n    }\n\n    return this.addTagRefinement(tag);\n  },\n  /**\n   * Test if the facet name is from one of the disjunctive facets\n   * @method\n   * @param {string} facet facet name to test\n   * @return {boolean}\n   */\n  isDisjunctiveFacet: function(facet) {\n    return this.disjunctiveFacets.indexOf(facet) > -1;\n  },\n  /**\n   * Test if the facet name is from one of the hierarchical facets\n   * @method\n   * @param {string} facetName facet name to test\n   * @return {boolean}\n   */\n  isHierarchicalFacet: function(facetName) {\n    return this.getHierarchicalFacetByName(facetName) !== undefined;\n  },\n  /**\n   * Test if the facet name is from one of the conjunctive/normal facets\n   * @method\n   * @param {string} facet facet name to test\n   * @return {boolean}\n   */\n  isConjunctiveFacet: function(facet) {\n    return this.facets.indexOf(facet) > -1;\n  },\n  /**\n   * Returns true if the facet is refined, either for a specific value or in\n   * general.\n   * @method\n   * @param {string} facet name of the attribute for used for faceting\n   * @param {string} value, optional value. If passed will test that this value\n   * is filtering the given facet.\n   * @return {boolean} returns true if refined\n   */\n  isFacetRefined: function isFacetRefined(facet, value) {\n    if (!this.isConjunctiveFacet(facet)) {\n      return false;\n    }\n    return RefinementList.isRefined(this.facetsRefinements, facet, value);\n  },\n  /**\n   * Returns true if the facet contains exclusions or if a specific value is\n   * excluded.\n   *\n   * @method\n   * @param {string} facet name of the attribute for used for faceting\n   * @param {string} [value] optional value. If passed will test that this value\n   * is filtering the given facet.\n   * @return {boolean} returns true if refined\n   */\n  isExcludeRefined: function isExcludeRefined(facet, value) {\n    if (!this.isConjunctiveFacet(facet)) {\n      return false;\n    }\n    return RefinementList.isRefined(this.facetsExcludes, facet, value);\n  },\n  /**\n   * Returns true if the facet contains a refinement, or if a value passed is a\n   * refinement for the facet.\n   * @method\n   * @param {string} facet name of the attribute for used for faceting\n   * @param {string} value optional, will test if the value is used for refinement\n   * if there is one, otherwise will test if the facet contains any refinement\n   * @return {boolean}\n   */\n  isDisjunctiveFacetRefined: function isDisjunctiveFacetRefined(facet, value) {\n    if (!this.isDisjunctiveFacet(facet)) {\n      return false;\n    }\n    return RefinementList.isRefined(this.disjunctiveFacetsRefinements, facet, value);\n  },\n  /**\n   * Returns true if the facet contains a refinement, or if a value passed is a\n   * refinement for the facet.\n   * @method\n   * @param {string} facet name of the attribute for used for faceting\n   * @param {string} value optional, will test if the value is used for refinement\n   * if there is one, otherwise will test if the facet contains any refinement\n   * @return {boolean}\n   */\n  isHierarchicalFacetRefined: function isHierarchicalFacetRefined(facet, value) {\n    if (!this.isHierarchicalFacet(facet)) {\n      return false;\n    }\n\n    var refinements = this.getHierarchicalRefinement(facet);\n\n    if (!value) {\n      return refinements.length > 0;\n    }\n\n    return refinements.indexOf(value) !== -1;\n  },\n  /**\n   * Test if the triple (attribute, operator, value) is already refined.\n   * If only the attribute and the operator are provided, it tests if the\n   * contains any refinement value.\n   * @method\n   * @param {string} attribute attribute for which the refinement is applied\n   * @param {string} [operator] operator of the refinement\n   * @param {string} [value] value of the refinement\n   * @return {boolean} true if it is refined\n   */\n  isNumericRefined: function isNumericRefined(attribute, operator, value) {\n    if (value === undefined && operator === undefined) {\n      return !!this.numericRefinements[attribute];\n    }\n\n    var isOperatorDefined =\n      this.numericRefinements[attribute] &&\n      this.numericRefinements[attribute][operator] !== undefined;\n\n    if (value === undefined || !isOperatorDefined) {\n      return isOperatorDefined;\n    }\n\n    var parsedValue = valToNumber(value);\n    var isAttributeValueDefined =\n      findArray(this.numericRefinements[attribute][operator], parsedValue) !==\n      undefined;\n\n    return isOperatorDefined && isAttributeValueDefined;\n  },\n  /**\n   * Returns true if the tag refined, false otherwise\n   * @method\n   * @param {string} tag the tag to check\n   * @return {boolean}\n   */\n  isTagRefined: function isTagRefined(tag) {\n    return this.tagRefinements.indexOf(tag) !== -1;\n  },\n  /**\n   * Returns the list of all disjunctive facets refined\n   * @method\n   * @param {string} facet name of the attribute used for faceting\n   * @param {value} value value used for filtering\n   * @return {string[]}\n   */\n  getRefinedDisjunctiveFacets: function getRefinedDisjunctiveFacets() {\n    var self = this;\n\n    // attributes used for numeric filter can also be disjunctive\n    var disjunctiveNumericRefinedFacets = intersection(\n      Object.keys(this.numericRefinements).filter(function(facet) {\n        return Object.keys(self.numericRefinements[facet]).length > 0;\n      }),\n      this.disjunctiveFacets\n    );\n\n    return Object.keys(this.disjunctiveFacetsRefinements).filter(function(facet) {\n      return self.disjunctiveFacetsRefinements[facet].length > 0;\n    })\n      .concat(disjunctiveNumericRefinedFacets)\n      .concat(this.getRefinedHierarchicalFacets());\n  },\n  /**\n   * Returns the list of all disjunctive facets refined\n   * @method\n   * @param {string} facet name of the attribute used for faceting\n   * @param {value} value value used for filtering\n   * @return {string[]}\n   */\n  getRefinedHierarchicalFacets: function getRefinedHierarchicalFacets() {\n    var self = this;\n    return intersection(\n      // enforce the order between the two arrays,\n      // so that refinement name index === hierarchical facet index\n      this.hierarchicalFacets.map(function(facet) { return facet.name; }),\n      Object.keys(this.hierarchicalFacetsRefinements).filter(function(facet) {\n        return self.hierarchicalFacetsRefinements[facet].length > 0;\n      })\n    );\n  },\n  /**\n   * Returned the list of all disjunctive facets not refined\n   * @method\n   * @return {string[]}\n   */\n  getUnrefinedDisjunctiveFacets: function() {\n    var refinedFacets = this.getRefinedDisjunctiveFacets();\n\n    return this.disjunctiveFacets.filter(function(f) {\n      return refinedFacets.indexOf(f) === -1;\n    });\n  },\n\n  managedParameters: [\n    'index',\n    'facets', 'disjunctiveFacets', 'facetsRefinements',\n    'facetsExcludes', 'disjunctiveFacetsRefinements',\n    'numericRefinements', 'tagRefinements', 'hierarchicalFacets', 'hierarchicalFacetsRefinements'\n  ],\n  getQueryParams: function getQueryParams() {\n    var managedParameters = this.managedParameters;\n\n    var queryParams = {};\n\n    var self = this;\n    Object.keys(this).forEach(function(paramName) {\n      var paramValue = self[paramName];\n      if (managedParameters.indexOf(paramName) === -1 && paramValue !== undefined) {\n        queryParams[paramName] = paramValue;\n      }\n    });\n\n    return queryParams;\n  },\n  /**\n   * Let the user set a specific value for a given parameter. Will return the\n   * same instance if the parameter is invalid or if the value is the same as the\n   * previous one.\n   * @method\n   * @param {string} parameter the parameter name\n   * @param {any} value the value to be set, must be compliant with the definition\n   * of the attribute on the object\n   * @return {SearchParameters} the updated state\n   */\n  setQueryParameter: function setParameter(parameter, value) {\n    if (this[parameter] === value) return this;\n\n    var modification = {};\n\n    modification[parameter] = value;\n\n    return this.setQueryParameters(modification);\n  },\n  /**\n   * Let the user set any of the parameters with a plain object.\n   * @method\n   * @param {object} params all the keys and the values to be updated\n   * @return {SearchParameters} a new updated instance\n   */\n  setQueryParameters: function setQueryParameters(params) {\n    if (!params) return this;\n\n    var error = SearchParameters.validate(this, params);\n\n    if (error) {\n      throw error;\n    }\n\n    var self = this;\n    var nextWithNumbers = SearchParameters._parseNumbers(params);\n    var previousPlainObject = Object.keys(this).reduce(function(acc, key) {\n      acc[key] = self[key];\n      return acc;\n    }, {});\n\n    var nextPlainObject = Object.keys(nextWithNumbers).reduce(\n      function(previous, key) {\n        var isPreviousValueDefined = previous[key] !== undefined;\n        var isNextValueDefined = nextWithNumbers[key] !== undefined;\n\n        if (isPreviousValueDefined && !isNextValueDefined) {\n          return omit(previous, [key]);\n        }\n\n        if (isNextValueDefined) {\n          previous[key] = nextWithNumbers[key];\n        }\n\n        return previous;\n      },\n      previousPlainObject\n    );\n\n    return new this.constructor(nextPlainObject);\n  },\n\n  /**\n   * Returns a new instance with the page reset. Two scenarios possible:\n   * the page is omitted -> return the given instance\n   * the page is set -> return a new instance with a page of 0\n   * @return {SearchParameters} a new updated instance\n   */\n  resetPage: function() {\n    if (this.page === undefined) {\n      return this;\n    }\n\n    return this.setPage(0);\n  },\n\n  /**\n   * Helper function to get the hierarchicalFacet separator or the default one (`>`)\n   * @param  {object} hierarchicalFacet\n   * @return {string} returns the hierarchicalFacet.separator or `>` as default\n   */\n  _getHierarchicalFacetSortBy: function(hierarchicalFacet) {\n    return hierarchicalFacet.sortBy || ['isRefined:desc', 'name:asc'];\n  },\n\n  /**\n   * Helper function to get the hierarchicalFacet separator or the default one (`>`)\n   * @private\n   * @param  {object} hierarchicalFacet\n   * @return {string} returns the hierarchicalFacet.separator or `>` as default\n   */\n  _getHierarchicalFacetSeparator: function(hierarchicalFacet) {\n    return hierarchicalFacet.separator || ' > ';\n  },\n\n  /**\n   * Helper function to get the hierarchicalFacet prefix path or null\n   * @private\n   * @param  {object} hierarchicalFacet\n   * @return {string} returns the hierarchicalFacet.rootPath or null as default\n   */\n  _getHierarchicalRootPath: function(hierarchicalFacet) {\n    return hierarchicalFacet.rootPath || null;\n  },\n\n  /**\n   * Helper function to check if we show the parent level of the hierarchicalFacet\n   * @private\n   * @param  {object} hierarchicalFacet\n   * @return {string} returns the hierarchicalFacet.showParentLevel or true as default\n   */\n  _getHierarchicalShowParentLevel: function(hierarchicalFacet) {\n    if (typeof hierarchicalFacet.showParentLevel === 'boolean') {\n      return hierarchicalFacet.showParentLevel;\n    }\n    return true;\n  },\n\n  /**\n   * Helper function to get the hierarchicalFacet by it's name\n   * @param  {string} hierarchicalFacetName\n   * @return {object} a hierarchicalFacet\n   */\n  getHierarchicalFacetByName: function(hierarchicalFacetName) {\n    return find(\n      this.hierarchicalFacets,\n      function(f) {\n        return f.name === hierarchicalFacetName;\n      }\n    );\n  },\n\n  /**\n   * Get the current breadcrumb for a hierarchical facet, as an array\n   * @param  {string} facetName Hierarchical facet name\n   * @return {array.<string>} the path as an array of string\n   */\n  getHierarchicalFacetBreadcrumb: function(facetName) {\n    if (!this.isHierarchicalFacet(facetName)) {\n      return [];\n    }\n\n    var refinement = this.getHierarchicalRefinement(facetName)[0];\n    if (!refinement) return [];\n\n    var separator = this._getHierarchicalFacetSeparator(\n      this.getHierarchicalFacetByName(facetName)\n    );\n    var path = refinement.split(separator);\n    return path.map(function(part) {\n      return part.trim();\n    });\n  },\n\n  toString: function() {\n    return JSON.stringify(this, null, 2);\n  }\n};\n\n/**\n * Callback used for clearRefinement method\n * @callback SearchParameters.clearCallback\n * @param {OperatorList|FacetList} value the value of the filter\n * @param {string} key the current attribute name\n * @param {string} type `numeric`, `disjunctiveFacet`, `conjunctiveFacet`, `hierarchicalFacet` or `exclude`\n * depending on the type of facet\n * @return {boolean} `true` if the element should be removed. `false` otherwise.\n */\nmodule.exports = SearchParameters;\n\n\n//# sourceURL=webpack:///./node_modules/algoliasearch-helper/src/SearchParameters/index.js?");

/***/ }),

/***/ "./node_modules/algoliasearch-helper/src/SearchResults/generate-hierarchical-tree.js":
/*!*******************************************************************************************!*\
  !*** ./node_modules/algoliasearch-helper/src/SearchResults/generate-hierarchical-tree.js ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nmodule.exports = generateTrees;\n\nvar orderBy = __webpack_require__(/*! ../functions/orderBy */ \"./node_modules/algoliasearch-helper/src/functions/orderBy.js\");\nvar find = __webpack_require__(/*! ../functions/find */ \"./node_modules/algoliasearch-helper/src/functions/find.js\");\nvar prepareHierarchicalFacetSortBy = __webpack_require__(/*! ../functions/formatSort */ \"./node_modules/algoliasearch-helper/src/functions/formatSort.js\");\n\nfunction generateTrees(state) {\n  return function generate(hierarchicalFacetResult, hierarchicalFacetIndex) {\n    var hierarchicalFacet = state.hierarchicalFacets[hierarchicalFacetIndex];\n    var hierarchicalFacetRefinement =\n      (state.hierarchicalFacetsRefinements[hierarchicalFacet.name] &&\n        state.hierarchicalFacetsRefinements[hierarchicalFacet.name][0]) ||\n      '';\n    var hierarchicalSeparator = state._getHierarchicalFacetSeparator(\n      hierarchicalFacet\n    );\n    var hierarchicalRootPath = state._getHierarchicalRootPath(\n      hierarchicalFacet\n    );\n    var hierarchicalShowParentLevel = state._getHierarchicalShowParentLevel(\n      hierarchicalFacet\n    );\n    var sortBy = prepareHierarchicalFacetSortBy(\n      state._getHierarchicalFacetSortBy(hierarchicalFacet)\n    );\n\n    var rootExhaustive = hierarchicalFacetResult.every(function(facetResult) {\n      return facetResult.exhaustive;\n    });\n\n    var generateTreeFn = generateHierarchicalTree(\n      sortBy,\n      hierarchicalSeparator,\n      hierarchicalRootPath,\n      hierarchicalShowParentLevel,\n      hierarchicalFacetRefinement\n    );\n\n    var results = hierarchicalFacetResult;\n\n    if (hierarchicalRootPath) {\n      results = hierarchicalFacetResult.slice(\n        hierarchicalRootPath.split(hierarchicalSeparator).length\n      );\n    }\n\n    return results.reduce(generateTreeFn, {\n      name: state.hierarchicalFacets[hierarchicalFacetIndex].name,\n      count: null, // root level, no count\n      isRefined: true, // root level, always refined\n      path: null, // root level, no path\n      exhaustive: rootExhaustive,\n      data: null\n    });\n  };\n}\n\nfunction generateHierarchicalTree(\n  sortBy,\n  hierarchicalSeparator,\n  hierarchicalRootPath,\n  hierarchicalShowParentLevel,\n  currentRefinement\n) {\n  return function generateTree(\n    hierarchicalTree,\n    hierarchicalFacetResult,\n    currentHierarchicalLevel\n  ) {\n    var parent = hierarchicalTree;\n\n    if (currentHierarchicalLevel > 0) {\n      var level = 0;\n\n      parent = hierarchicalTree;\n\n      while (level < currentHierarchicalLevel) {\n        /**\n         * @type {object[]]} hierarchical data\n         */\n        var data = parent && Array.isArray(parent.data) ? parent.data : [];\n        parent = find(data, function(subtree) {\n          return subtree.isRefined;\n        });\n        level++;\n      }\n    }\n\n    // we found a refined parent, let's add current level data under it\n    if (parent) {\n      // filter values in case an object has multiple categories:\n      //   {\n      //     categories: {\n      //       level0: ['beers', 'bières'],\n      //       level1: ['beers > IPA', 'bières > Belges']\n      //     }\n      //   }\n      //\n      // If parent refinement is `beers`, then we do not want to have `bières > Belges`\n      // showing up\n\n      var picked = Object.keys(hierarchicalFacetResult.data)\n        .map(function(facetValue) {\n          return [facetValue, hierarchicalFacetResult.data[facetValue]];\n        })\n        .filter(function(tuple) {\n          var facetValue = tuple[0];\n          return onlyMatchingTree(\n            facetValue,\n            parent.path || hierarchicalRootPath,\n            currentRefinement,\n            hierarchicalSeparator,\n            hierarchicalRootPath,\n            hierarchicalShowParentLevel\n          );\n        });\n\n      parent.data = orderBy(\n        picked.map(function(tuple) {\n          var facetValue = tuple[0];\n          var facetCount = tuple[1];\n\n          return format(\n            facetCount,\n            facetValue,\n            hierarchicalSeparator,\n            currentRefinement,\n            hierarchicalFacetResult.exhaustive\n          );\n        }),\n        sortBy[0],\n        sortBy[1]\n      );\n    }\n\n    return hierarchicalTree;\n  };\n}\n\nfunction onlyMatchingTree(\n  facetValue,\n  parentPath,\n  currentRefinement,\n  hierarchicalSeparator,\n  hierarchicalRootPath,\n  hierarchicalShowParentLevel\n) {\n  // we want the facetValue is a child of hierarchicalRootPath\n  if (\n    hierarchicalRootPath &&\n    (facetValue.indexOf(hierarchicalRootPath) !== 0 ||\n      hierarchicalRootPath === facetValue)\n  ) {\n    return false;\n  }\n\n  // we always want root levels (only when there is no prefix path)\n  return (\n    (!hierarchicalRootPath &&\n      facetValue.indexOf(hierarchicalSeparator) === -1) ||\n    // if there is a rootPath, being root level mean 1 level under rootPath\n    (hierarchicalRootPath &&\n      facetValue.split(hierarchicalSeparator).length -\n        hierarchicalRootPath.split(hierarchicalSeparator).length ===\n        1) ||\n    // if current refinement is a root level and current facetValue is a root level,\n    // keep the facetValue\n    (facetValue.indexOf(hierarchicalSeparator) === -1 &&\n      currentRefinement.indexOf(hierarchicalSeparator) === -1) ||\n    // currentRefinement is a child of the facet value\n    currentRefinement.indexOf(facetValue) === 0 ||\n    // facetValue is a child of the current parent, add it\n    (facetValue.indexOf(parentPath + hierarchicalSeparator) === 0 &&\n      (hierarchicalShowParentLevel ||\n        facetValue.indexOf(currentRefinement) === 0))\n  );\n}\n\nfunction format(\n  facetCount,\n  facetValue,\n  hierarchicalSeparator,\n  currentRefinement,\n  exhaustive\n) {\n  var parts = facetValue.split(hierarchicalSeparator);\n  return {\n    name: parts[parts.length - 1].trim(),\n    path: facetValue,\n    count: facetCount,\n    isRefined:\n      currentRefinement === facetValue ||\n      currentRefinement.indexOf(facetValue + hierarchicalSeparator) === 0,\n    exhaustive: exhaustive,\n    data: null\n  };\n}\n\n\n//# sourceURL=webpack:///./node_modules/algoliasearch-helper/src/SearchResults/generate-hierarchical-tree.js?");

/***/ }),

/***/ "./node_modules/algoliasearch-helper/src/SearchResults/index.js":
/*!**********************************************************************!*\
  !*** ./node_modules/algoliasearch-helper/src/SearchResults/index.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar merge = __webpack_require__(/*! ../functions/merge */ \"./node_modules/algoliasearch-helper/src/functions/merge.js\");\nvar defaultsPure = __webpack_require__(/*! ../functions/defaultsPure */ \"./node_modules/algoliasearch-helper/src/functions/defaultsPure.js\");\nvar orderBy = __webpack_require__(/*! ../functions/orderBy */ \"./node_modules/algoliasearch-helper/src/functions/orderBy.js\");\nvar compact = __webpack_require__(/*! ../functions/compact */ \"./node_modules/algoliasearch-helper/src/functions/compact.js\");\nvar find = __webpack_require__(/*! ../functions/find */ \"./node_modules/algoliasearch-helper/src/functions/find.js\");\nvar findIndex = __webpack_require__(/*! ../functions/findIndex */ \"./node_modules/algoliasearch-helper/src/functions/findIndex.js\");\nvar formatSort = __webpack_require__(/*! ../functions/formatSort */ \"./node_modules/algoliasearch-helper/src/functions/formatSort.js\");\n\nvar generateHierarchicalTree = __webpack_require__(/*! ./generate-hierarchical-tree */ \"./node_modules/algoliasearch-helper/src/SearchResults/generate-hierarchical-tree.js\");\n\n/**\n * @typedef SearchResults.Facet\n * @type {object}\n * @property {string} name name of the attribute in the record\n * @property {object} data the faceting data: value, number of entries\n * @property {object} stats undefined unless facet_stats is retrieved from algolia\n */\n\n/**\n * @typedef SearchResults.HierarchicalFacet\n * @type {object}\n * @property {string} name name of the current value given the hierarchical level, trimmed.\n * If root node, you get the facet name\n * @property {number} count number of objects matching this hierarchical value\n * @property {string} path the current hierarchical value full path\n * @property {boolean} isRefined `true` if the current value was refined, `false` otherwise\n * @property {HierarchicalFacet[]} data sub values for the current level\n */\n\n/**\n * @typedef SearchResults.FacetValue\n * @type {object}\n * @property {string} name the facet value itself\n * @property {number} count times this facet appears in the results\n * @property {boolean} isRefined is the facet currently selected\n * @property {boolean} isExcluded is the facet currently excluded (only for conjunctive facets)\n */\n\n/**\n * @typedef Refinement\n * @type {object}\n * @property {string} type the type of filter used:\n * `numeric`, `facet`, `exclude`, `disjunctive`, `hierarchical`\n * @property {string} attributeName name of the attribute used for filtering\n * @property {string} name the value of the filter\n * @property {number} numericValue the value as a number. Only for numeric filters.\n * @property {string} operator the operator used. Only for numeric filters.\n * @property {number} count the number of computed hits for this filter. Only on facets.\n * @property {boolean} exhaustive if the count is exhaustive\n */\n\n/**\n * @param {string[]} attributes\n */\nfunction getIndices(attributes) {\n  var indices = {};\n\n  attributes.forEach(function(val, idx) {\n    indices[val] = idx;\n  });\n\n  return indices;\n}\n\nfunction assignFacetStats(dest, facetStats, key) {\n  if (facetStats && facetStats[key]) {\n    dest.stats = facetStats[key];\n  }\n}\n\n/**\n * @typedef {Object} HierarchicalFacet\n * @property {string} name\n * @property {string[]} attributes\n */\n\n/**\n * @param {HierarchicalFacet[]} hierarchicalFacets\n * @param {string} hierarchicalAttributeName\n */\nfunction findMatchingHierarchicalFacetFromAttributeName(\n  hierarchicalFacets,\n  hierarchicalAttributeName\n) {\n  return find(hierarchicalFacets, function facetKeyMatchesAttribute(\n    hierarchicalFacet\n  ) {\n    var facetNames = hierarchicalFacet.attributes || [];\n    return facetNames.indexOf(hierarchicalAttributeName) > -1;\n  });\n}\n\n/*eslint-disable */\n/**\n * Constructor for SearchResults\n * @class\n * @classdesc SearchResults contains the results of a query to Algolia using the\n * {@link AlgoliaSearchHelper}.\n * @param {SearchParameters} state state that led to the response\n * @param {array.<object>} results the results from algolia client\n * @example <caption>SearchResults of the first query in\n * <a href=\"http://demos.algolia.com/instant-search-demo\">the instant search demo</a></caption>\n{\n   \"hitsPerPage\": 10,\n   \"processingTimeMS\": 2,\n   \"facets\": [\n      {\n         \"name\": \"type\",\n         \"data\": {\n            \"HardGood\": 6627,\n            \"BlackTie\": 550,\n            \"Music\": 665,\n            \"Software\": 131,\n            \"Game\": 456,\n            \"Movie\": 1571\n         },\n         \"exhaustive\": false\n      },\n      {\n         \"exhaustive\": false,\n         \"data\": {\n            \"Free shipping\": 5507\n         },\n         \"name\": \"shipping\"\n      }\n  ],\n   \"hits\": [\n      {\n         \"thumbnailImage\": \"http://img.bbystatic.com/BestBuy_US/images/products/1688/1688832_54x108_s.gif\",\n         \"_highlightResult\": {\n            \"shortDescription\": {\n               \"matchLevel\": \"none\",\n               \"value\": \"Safeguard your PC, Mac, Android and iOS devices with comprehensive Internet protection\",\n               \"matchedWords\": []\n            },\n            \"category\": {\n               \"matchLevel\": \"none\",\n               \"value\": \"Computer Security Software\",\n               \"matchedWords\": []\n            },\n            \"manufacturer\": {\n               \"matchedWords\": [],\n               \"value\": \"Webroot\",\n               \"matchLevel\": \"none\"\n            },\n            \"name\": {\n               \"value\": \"Webroot SecureAnywhere Internet Security (3-Device) (1-Year Subscription) - Mac/Windows\",\n               \"matchedWords\": [],\n               \"matchLevel\": \"none\"\n            }\n         },\n         \"image\": \"http://img.bbystatic.com/BestBuy_US/images/products/1688/1688832_105x210_sc.jpg\",\n         \"shipping\": \"Free shipping\",\n         \"bestSellingRank\": 4,\n         \"shortDescription\": \"Safeguard your PC, Mac, Android and iOS devices with comprehensive Internet protection\",\n         \"url\": \"http://www.bestbuy.com/site/webroot-secureanywhere-internet-security-3-devi…d=1219060687969&skuId=1688832&cmp=RMX&ky=2d3GfEmNIzjA0vkzveHdZEBgpPCyMnLTJ\",\n         \"name\": \"Webroot SecureAnywhere Internet Security (3-Device) (1-Year Subscription) - Mac/Windows\",\n         \"category\": \"Computer Security Software\",\n         \"salePrice_range\": \"1 - 50\",\n         \"objectID\": \"1688832\",\n         \"type\": \"Software\",\n         \"customerReviewCount\": 5980,\n         \"salePrice\": 49.99,\n         \"manufacturer\": \"Webroot\"\n      },\n      ....\n  ],\n   \"nbHits\": 10000,\n   \"disjunctiveFacets\": [\n      {\n         \"exhaustive\": false,\n         \"data\": {\n            \"5\": 183,\n            \"12\": 112,\n            \"7\": 149,\n            ...\n         },\n         \"name\": \"customerReviewCount\",\n         \"stats\": {\n            \"max\": 7461,\n            \"avg\": 157.939,\n            \"min\": 1\n         }\n      },\n      {\n         \"data\": {\n            \"Printer Ink\": 142,\n            \"Wireless Speakers\": 60,\n            \"Point & Shoot Cameras\": 48,\n            ...\n         },\n         \"name\": \"category\",\n         \"exhaustive\": false\n      },\n      {\n         \"exhaustive\": false,\n         \"data\": {\n            \"> 5000\": 2,\n            \"1 - 50\": 6524,\n            \"501 - 2000\": 566,\n            \"201 - 500\": 1501,\n            \"101 - 200\": 1360,\n            \"2001 - 5000\": 47\n         },\n         \"name\": \"salePrice_range\"\n      },\n      {\n         \"data\": {\n            \"Dynex™\": 202,\n            \"Insignia™\": 230,\n            \"PNY\": 72,\n            ...\n         },\n         \"name\": \"manufacturer\",\n         \"exhaustive\": false\n      }\n  ],\n   \"query\": \"\",\n   \"nbPages\": 100,\n   \"page\": 0,\n   \"index\": \"bestbuy\"\n}\n **/\n/*eslint-enable */\nfunction SearchResults(state, results) {\n  var mainSubResponse = results[0];\n\n  this._rawResults = results;\n\n  /**\n   * query used to generate the results\n   * @member {string}\n   */\n  this.query = mainSubResponse.query;\n  /**\n   * The query as parsed by the engine given all the rules.\n   * @member {string}\n   */\n  this.parsedQuery = mainSubResponse.parsedQuery;\n  /**\n   * all the records that match the search parameters. Each record is\n   * augmented with a new attribute `_highlightResult`\n   * which is an object keyed by attribute and with the following properties:\n   *  - `value` : the value of the facet highlighted (html)\n   *  - `matchLevel`: full, partial or none depending on how the query terms match\n   * @member {object[]}\n   */\n  this.hits = mainSubResponse.hits;\n  /**\n   * index where the results come from\n   * @member {string}\n   */\n  this.index = mainSubResponse.index;\n  /**\n   * number of hits per page requested\n   * @member {number}\n   */\n  this.hitsPerPage = mainSubResponse.hitsPerPage;\n  /**\n   * total number of hits of this query on the index\n   * @member {number}\n   */\n  this.nbHits = mainSubResponse.nbHits;\n  /**\n   * total number of pages with respect to the number of hits per page and the total number of hits\n   * @member {number}\n   */\n  this.nbPages = mainSubResponse.nbPages;\n  /**\n   * current page\n   * @member {number}\n   */\n  this.page = mainSubResponse.page;\n  /**\n   * sum of the processing time of all the queries\n   * @member {number}\n   */\n  this.processingTimeMS = results.reduce(function(sum, result) {\n    return result.processingTimeMS === undefined\n      ? sum\n      : sum + result.processingTimeMS;\n  }, 0);\n  /**\n   * The position if the position was guessed by IP.\n   * @member {string}\n   * @example \"48.8637,2.3615\",\n   */\n  this.aroundLatLng = mainSubResponse.aroundLatLng;\n  /**\n   * The radius computed by Algolia.\n   * @member {string}\n   * @example \"126792922\",\n   */\n  this.automaticRadius = mainSubResponse.automaticRadius;\n  /**\n   * String identifying the server used to serve this request.\n   *\n   * getRankingInfo needs to be set to `true` for this to be returned\n   *\n   * @member {string}\n   * @example \"c7-use-2.algolia.net\",\n   */\n  this.serverUsed = mainSubResponse.serverUsed;\n  /**\n   * Boolean that indicates if the computation of the counts did time out.\n   * @deprecated\n   * @member {boolean}\n   */\n  this.timeoutCounts = mainSubResponse.timeoutCounts;\n  /**\n   * Boolean that indicates if the computation of the hits did time out.\n   * @deprecated\n   * @member {boolean}\n   */\n  this.timeoutHits = mainSubResponse.timeoutHits;\n\n  /**\n   * True if the counts of the facets is exhaustive\n   * @member {boolean}\n   */\n  this.exhaustiveFacetsCount = mainSubResponse.exhaustiveFacetsCount;\n\n  /**\n   * True if the number of hits is exhaustive\n   * @member {boolean}\n   */\n  this.exhaustiveNbHits = mainSubResponse.exhaustiveNbHits;\n\n\n  /**\n   * Contains the userData if they are set by a [query rule](https://www.algolia.com/doc/guides/query-rules/query-rules-overview/).\n   * @member {object[]}\n   */\n  this.userData = mainSubResponse.userData;\n\n  /**\n   * queryID is the unique identifier of the query used to generate the current search results.\n   * This value is only available if the `clickAnalytics` search parameter is set to `true`.\n   * @member {string}\n   */\n  this.queryID = mainSubResponse.queryID;\n\n  /**\n   * disjunctive facets results\n   * @member {SearchResults.Facet[]}\n   */\n  this.disjunctiveFacets = [];\n  /**\n   * disjunctive facets results\n   * @member {SearchResults.HierarchicalFacet[]}\n   */\n  this.hierarchicalFacets = state.hierarchicalFacets.map(function initFutureTree() {\n    return [];\n  });\n  /**\n   * other facets results\n   * @member {SearchResults.Facet[]}\n   */\n  this.facets = [];\n\n  var disjunctiveFacets = state.getRefinedDisjunctiveFacets();\n\n  var facetsIndices = getIndices(state.facets);\n  var disjunctiveFacetsIndices = getIndices(state.disjunctiveFacets);\n  var nextDisjunctiveResult = 1;\n\n  var self = this;\n  // Since we send request only for disjunctive facets that have been refined,\n  // we get the facets information from the first, general, response.\n\n  var mainFacets = mainSubResponse.facets || {};\n\n  Object.keys(mainFacets).forEach(function(facetKey) {\n    var facetValueObject = mainFacets[facetKey];\n\n    var hierarchicalFacet = findMatchingHierarchicalFacetFromAttributeName(\n      state.hierarchicalFacets,\n      facetKey\n    );\n\n    if (hierarchicalFacet) {\n      // Place the hierarchicalFacet data at the correct index depending on\n      // the attributes order that was defined at the helper initialization\n      var facetIndex = hierarchicalFacet.attributes.indexOf(facetKey);\n      var idxAttributeName = findIndex(state.hierarchicalFacets, function(f) {\n        return f.name === hierarchicalFacet.name;\n      });\n      self.hierarchicalFacets[idxAttributeName][facetIndex] = {\n        attribute: facetKey,\n        data: facetValueObject,\n        exhaustive: mainSubResponse.exhaustiveFacetsCount\n      };\n    } else {\n      var isFacetDisjunctive = state.disjunctiveFacets.indexOf(facetKey) !== -1;\n      var isFacetConjunctive = state.facets.indexOf(facetKey) !== -1;\n      var position;\n\n      if (isFacetDisjunctive) {\n        position = disjunctiveFacetsIndices[facetKey];\n        self.disjunctiveFacets[position] = {\n          name: facetKey,\n          data: facetValueObject,\n          exhaustive: mainSubResponse.exhaustiveFacetsCount\n        };\n        assignFacetStats(self.disjunctiveFacets[position], mainSubResponse.facets_stats, facetKey);\n      }\n      if (isFacetConjunctive) {\n        position = facetsIndices[facetKey];\n        self.facets[position] = {\n          name: facetKey,\n          data: facetValueObject,\n          exhaustive: mainSubResponse.exhaustiveFacetsCount\n        };\n        assignFacetStats(self.facets[position], mainSubResponse.facets_stats, facetKey);\n      }\n    }\n  });\n\n  // Make sure we do not keep holes within the hierarchical facets\n  this.hierarchicalFacets = compact(this.hierarchicalFacets);\n\n  // aggregate the refined disjunctive facets\n  disjunctiveFacets.forEach(function(disjunctiveFacet) {\n    var result = results[nextDisjunctiveResult];\n    var facets = result && result.facets ? result.facets : {};\n    var hierarchicalFacet = state.getHierarchicalFacetByName(disjunctiveFacet);\n\n    // There should be only item in facets.\n    Object.keys(facets).forEach(function(dfacet) {\n      var facetResults = facets[dfacet];\n\n      var position;\n\n      if (hierarchicalFacet) {\n        position = findIndex(state.hierarchicalFacets, function(f) {\n          return f.name === hierarchicalFacet.name;\n        });\n        var attributeIndex = findIndex(self.hierarchicalFacets[position], function(f) {\n          return f.attribute === dfacet;\n        });\n\n        // previous refinements and no results so not able to find it\n        if (attributeIndex === -1) {\n          return;\n        }\n\n        self.hierarchicalFacets[position][attributeIndex].data = merge(\n          {},\n          self.hierarchicalFacets[position][attributeIndex].data,\n          facetResults\n        );\n      } else {\n        position = disjunctiveFacetsIndices[dfacet];\n\n        var dataFromMainRequest = mainSubResponse.facets && mainSubResponse.facets[dfacet] || {};\n\n        self.disjunctiveFacets[position] = {\n          name: dfacet,\n          data: defaultsPure({}, facetResults, dataFromMainRequest),\n          exhaustive: result.exhaustiveFacetsCount\n        };\n        assignFacetStats(self.disjunctiveFacets[position], result.facets_stats, dfacet);\n\n        if (state.disjunctiveFacetsRefinements[dfacet]) {\n          state.disjunctiveFacetsRefinements[dfacet].forEach(function(refinementValue) {\n            // add the disjunctive refinements if it is no more retrieved\n            if (!self.disjunctiveFacets[position].data[refinementValue] &&\n              state.disjunctiveFacetsRefinements[dfacet].indexOf(refinementValue) > -1) {\n              self.disjunctiveFacets[position].data[refinementValue] = 0;\n            }\n          });\n        }\n      }\n    });\n    nextDisjunctiveResult++;\n  });\n\n  // if we have some root level values for hierarchical facets, merge them\n  state.getRefinedHierarchicalFacets().forEach(function(refinedFacet) {\n    var hierarchicalFacet = state.getHierarchicalFacetByName(refinedFacet);\n    var separator = state._getHierarchicalFacetSeparator(hierarchicalFacet);\n\n    var currentRefinement = state.getHierarchicalRefinement(refinedFacet);\n    // if we are already at a root refinement (or no refinement at all), there is no\n    // root level values request\n    if (currentRefinement.length === 0 || currentRefinement[0].split(separator).length < 2) {\n      return;\n    }\n\n    var result = results[nextDisjunctiveResult];\n    var facets = result && result.facets\n      ? result.facets\n      : {};\n    Object.keys(facets).forEach(function(dfacet) {\n      var facetResults = facets[dfacet];\n      var position = findIndex(state.hierarchicalFacets, function(f) {\n        return f.name === hierarchicalFacet.name;\n      });\n      var attributeIndex = findIndex(self.hierarchicalFacets[position], function(f) {\n        return f.attribute === dfacet;\n      });\n\n      // previous refinements and no results so not able to find it\n      if (attributeIndex === -1) {\n        return;\n      }\n\n      // when we always get root levels, if the hits refinement is `beers > IPA` (count: 5),\n      // then the disjunctive values will be `beers` (count: 100),\n      // but we do not want to display\n      //   | beers (100)\n      //     > IPA (5)\n      // We want\n      //   | beers (5)\n      //     > IPA (5)\n      var defaultData = {};\n\n      if (currentRefinement.length > 0) {\n        var root = currentRefinement[0].split(separator)[0];\n        defaultData[root] = self.hierarchicalFacets[position][attributeIndex].data[root];\n      }\n\n      self.hierarchicalFacets[position][attributeIndex].data = defaultsPure(\n        defaultData,\n        facetResults,\n        self.hierarchicalFacets[position][attributeIndex].data\n      );\n    });\n\n    nextDisjunctiveResult++;\n  });\n\n  // add the excludes\n  Object.keys(state.facetsExcludes).forEach(function(facetName) {\n    var excludes = state.facetsExcludes[facetName];\n    var position = facetsIndices[facetName];\n\n    self.facets[position] = {\n      name: facetName,\n      data: mainSubResponse.facets[facetName],\n      exhaustive: mainSubResponse.exhaustiveFacetsCount\n    };\n    excludes.forEach(function(facetValue) {\n      self.facets[position] = self.facets[position] || {name: facetName};\n      self.facets[position].data = self.facets[position].data || {};\n      self.facets[position].data[facetValue] = 0;\n    });\n  });\n\n  /**\n   * @type {Array}\n   */\n  this.hierarchicalFacets = this.hierarchicalFacets.map(generateHierarchicalTree(state));\n\n  /**\n   * @type {Array}\n   */\n  this.facets = compact(this.facets);\n  /**\n   * @type {Array}\n   */\n  this.disjunctiveFacets = compact(this.disjunctiveFacets);\n\n  this._state = state;\n}\n\n/**\n * Get a facet object with its name\n * @deprecated\n * @param {string} name name of the faceted attribute\n * @return {SearchResults.Facet} the facet object\n */\nSearchResults.prototype.getFacetByName = function(name) {\n  function predicate(facet) {\n    return facet.name === name;\n  }\n\n  return find(this.facets, predicate) ||\n    find(this.disjunctiveFacets, predicate) ||\n    find(this.hierarchicalFacets, predicate);\n};\n\n/**\n * Get the facet values of a specified attribute from a SearchResults object.\n * @private\n * @param {SearchResults} results the search results to search in\n * @param {string} attribute name of the faceted attribute to search for\n * @return {array|object} facet values. For the hierarchical facets it is an object.\n */\nfunction extractNormalizedFacetValues(results, attribute) {\n  function predicate(facet) {\n    return facet.name === attribute;\n  }\n\n  if (results._state.isConjunctiveFacet(attribute)) {\n    var facet = find(results.facets, predicate);\n    if (!facet) return [];\n\n    return Object.keys(facet.data).map(function(name) {\n      return {\n        name: name,\n        count: facet.data[name],\n        isRefined: results._state.isFacetRefined(attribute, name),\n        isExcluded: results._state.isExcludeRefined(attribute, name)\n      };\n    });\n  } else if (results._state.isDisjunctiveFacet(attribute)) {\n    var disjunctiveFacet = find(results.disjunctiveFacets, predicate);\n    if (!disjunctiveFacet) return [];\n\n    return Object.keys(disjunctiveFacet.data).map(function(name) {\n      return {\n        name: name,\n        count: disjunctiveFacet.data[name],\n        isRefined: results._state.isDisjunctiveFacetRefined(attribute, name)\n      };\n    });\n  } else if (results._state.isHierarchicalFacet(attribute)) {\n    return find(results.hierarchicalFacets, predicate);\n  }\n}\n\n/**\n * Sort nodes of a hierarchical facet results\n * @private\n * @param {HierarchicalFacet} node node to upon which we want to apply the sort\n */\nfunction recSort(sortFn, node) {\n  if (!node.data || node.data.length === 0) {\n    return node;\n  }\n\n  var children = node.data.map(function(childNode) {\n    return recSort(sortFn, childNode);\n  });\n  var sortedChildren = sortFn(children);\n  var newNode = merge({}, node, {data: sortedChildren});\n  return newNode;\n}\n\nSearchResults.DEFAULT_SORT = ['isRefined:desc', 'count:desc', 'name:asc'];\n\nfunction vanillaSortFn(order, data) {\n  return data.sort(order);\n}\n\n/**\n * Get a the list of values for a given facet attribute. Those values are sorted\n * refinement first, descending count (bigger value on top), and name ascending\n * (alphabetical order). The sort formula can overridden using either string based\n * predicates or a function.\n *\n * This method will return all the values returned by the Algolia engine plus all\n * the values already refined. This means that it can happen that the\n * `maxValuesPerFacet` [configuration](https://www.algolia.com/doc/rest-api/search#param-maxValuesPerFacet)\n * might not be respected if you have facet values that are already refined.\n * @param {string} attribute attribute name\n * @param {object} opts configuration options.\n * @param {Array.<string> | function} opts.sortBy\n * When using strings, it consists of\n * the name of the [FacetValue](#SearchResults.FacetValue) or the\n * [HierarchicalFacet](#SearchResults.HierarchicalFacet) attributes with the\n * order (`asc` or `desc`). For example to order the value by count, the\n * argument would be `['count:asc']`.\n *\n * If only the attribute name is specified, the ordering defaults to the one\n * specified in the default value for this attribute.\n *\n * When not specified, the order is\n * ascending.  This parameter can also be a function which takes two facet\n * values and should return a number, 0 if equal, 1 if the first argument is\n * bigger or -1 otherwise.\n *\n * The default value for this attribute `['isRefined:desc', 'count:desc', 'name:asc']`\n * @return {FacetValue[]|HierarchicalFacet|undefined} depending on the type of facet of\n * the attribute requested (hierarchical, disjunctive or conjunctive)\n * @example\n * helper.on('result', function(event){\n *   //get values ordered only by name ascending using the string predicate\n *   event.results.getFacetValues('city', {sortBy: ['name:asc']});\n *   //get values  ordered only by count ascending using a function\n *   event.results.getFacetValues('city', {\n *     // this is equivalent to ['count:asc']\n *     sortBy: function(a, b) {\n *       if (a.count === b.count) return 0;\n *       if (a.count > b.count)   return 1;\n *       if (b.count > a.count)   return -1;\n *     }\n *   });\n * });\n */\nSearchResults.prototype.getFacetValues = function(attribute, opts) {\n  var facetValues = extractNormalizedFacetValues(this, attribute);\n  if (!facetValues) {\n    return undefined;\n  }\n\n  var options = defaultsPure({}, opts, {sortBy: SearchResults.DEFAULT_SORT});\n\n  if (Array.isArray(options.sortBy)) {\n    var order = formatSort(options.sortBy, SearchResults.DEFAULT_SORT);\n    if (Array.isArray(facetValues)) {\n      return orderBy(facetValues, order[0], order[1]);\n    }\n    // If facetValues is not an array, it's an object thus a hierarchical facet object\n    return recSort(function(hierarchicalFacetValues) {\n      return orderBy(hierarchicalFacetValues, order[0], order[1]);\n    }, facetValues);\n  } else if (typeof options.sortBy === 'function') {\n    if (Array.isArray(facetValues)) {\n      return facetValues.sort(options.sortBy);\n    }\n    // If facetValues is not an array, it's an object thus a hierarchical facet object\n    return recSort(function(data) {\n      return vanillaSortFn(options.sortBy, data);\n    }, facetValues);\n  }\n  throw new Error(\n    'options.sortBy is optional but if defined it must be ' +\n    'either an array of string (predicates) or a sorting function'\n  );\n};\n\n/**\n * Returns the facet stats if attribute is defined and the facet contains some.\n * Otherwise returns undefined.\n * @param {string} attribute name of the faceted attribute\n * @return {object} The stats of the facet\n */\nSearchResults.prototype.getFacetStats = function(attribute) {\n  if (this._state.isConjunctiveFacet(attribute)) {\n    return getFacetStatsIfAvailable(this.facets, attribute);\n  } else if (this._state.isDisjunctiveFacet(attribute)) {\n    return getFacetStatsIfAvailable(this.disjunctiveFacets, attribute);\n  }\n\n  return undefined;\n};\n\n/**\n * @typedef {Object} FacetListItem\n * @property {string} name\n */\n\n/**\n * @param {FacetListItem[]} facetList (has more items, but enough for here)\n * @param {string} facetName\n */\nfunction getFacetStatsIfAvailable(facetList, facetName) {\n  var data = find(facetList, function(facet) {\n    return facet.name === facetName;\n  });\n  return data && data.stats;\n}\n\n/**\n * Returns all refinements for all filters + tags. It also provides\n * additional information: count and exhaustiveness for each filter.\n *\n * See the [refinement type](#Refinement) for an exhaustive view of the available\n * data.\n *\n * Note that for a numeric refinement, results are grouped per operator, this\n * means that it will return responses for operators which are empty.\n *\n * @return {Array.<Refinement>} all the refinements\n */\nSearchResults.prototype.getRefinements = function() {\n  var state = this._state;\n  var results = this;\n  var res = [];\n\n  Object.keys(state.facetsRefinements).forEach(function(attributeName) {\n    state.facetsRefinements[attributeName].forEach(function(name) {\n      res.push(getRefinement(state, 'facet', attributeName, name, results.facets));\n    });\n  });\n\n  Object.keys(state.facetsExcludes).forEach(function(attributeName) {\n    state.facetsExcludes[attributeName].forEach(function(name) {\n      res.push(getRefinement(state, 'exclude', attributeName, name, results.facets));\n    });\n  });\n\n  Object.keys(state.disjunctiveFacetsRefinements).forEach(function(attributeName) {\n    state.disjunctiveFacetsRefinements[attributeName].forEach(function(name) {\n      res.push(getRefinement(state, 'disjunctive', attributeName, name, results.disjunctiveFacets));\n    });\n  });\n\n  Object.keys(state.hierarchicalFacetsRefinements).forEach(function(attributeName) {\n    state.hierarchicalFacetsRefinements[attributeName].forEach(function(name) {\n      res.push(getHierarchicalRefinement(state, attributeName, name, results.hierarchicalFacets));\n    });\n  });\n\n\n  Object.keys(state.numericRefinements).forEach(function(attributeName) {\n    var operators = state.numericRefinements[attributeName];\n    Object.keys(operators).forEach(function(operator) {\n      operators[operator].forEach(function(value) {\n        res.push({\n          type: 'numeric',\n          attributeName: attributeName,\n          name: value,\n          numericValue: value,\n          operator: operator\n        });\n      });\n    });\n  });\n\n  state.tagRefinements.forEach(function(name) {\n    res.push({type: 'tag', attributeName: '_tags', name: name});\n  });\n\n  return res;\n};\n\n/**\n * @typedef {Object} Facet\n * @property {string} name\n * @property {Object} data\n * @property {boolean} exhaustive\n */\n\n/**\n * @param {*} state\n * @param {*} type\n * @param {string} attributeName\n * @param {*} name\n * @param {Facet[]} resultsFacets\n */\nfunction getRefinement(state, type, attributeName, name, resultsFacets) {\n  var facet = find(resultsFacets, function(f) {\n    return f.name === attributeName;\n  });\n  var count = facet && facet.data && facet.data[name] ? facet.data[name] : 0;\n  var exhaustive = (facet && facet.exhaustive) || false;\n\n  return {\n    type: type,\n    attributeName: attributeName,\n    name: name,\n    count: count,\n    exhaustive: exhaustive\n  };\n}\n\n/**\n * @param {*} state\n * @param {string} attributeName\n * @param {*} name\n * @param {Facet[]} resultsFacets\n */\nfunction getHierarchicalRefinement(state, attributeName, name, resultsFacets) {\n  var facetDeclaration = state.getHierarchicalFacetByName(attributeName);\n  var separator = state._getHierarchicalFacetSeparator(facetDeclaration);\n  var split = name.split(separator);\n  var rootFacet = find(resultsFacets, function(facet) {\n    return facet.name === attributeName;\n  });\n\n  var facet = split.reduce(function(intermediateFacet, part) {\n    var newFacet =\n      intermediateFacet && find(intermediateFacet.data, function(f) {\n        return f.name === part;\n      });\n    return newFacet !== undefined ? newFacet : intermediateFacet;\n  }, rootFacet);\n\n  var count = (facet && facet.count) || 0;\n  var exhaustive = (facet && facet.exhaustive) || false;\n  var path = (facet && facet.path) || '';\n\n  return {\n    type: 'hierarchical',\n    attributeName: attributeName,\n    name: path,\n    count: count,\n    exhaustive: exhaustive\n  };\n}\n\nmodule.exports = SearchResults;\n\n\n//# sourceURL=webpack:///./node_modules/algoliasearch-helper/src/SearchResults/index.js?");

/***/ }),

/***/ "./node_modules/algoliasearch-helper/src/algoliasearch.helper.js":
/*!***********************************************************************!*\
  !*** ./node_modules/algoliasearch-helper/src/algoliasearch.helper.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar SearchParameters = __webpack_require__(/*! ./SearchParameters */ \"./node_modules/algoliasearch-helper/src/SearchParameters/index.js\");\nvar SearchResults = __webpack_require__(/*! ./SearchResults */ \"./node_modules/algoliasearch-helper/src/SearchResults/index.js\");\nvar DerivedHelper = __webpack_require__(/*! ./DerivedHelper */ \"./node_modules/algoliasearch-helper/src/DerivedHelper/index.js\");\nvar requestBuilder = __webpack_require__(/*! ./requestBuilder */ \"./node_modules/algoliasearch-helper/src/requestBuilder.js\");\n\nvar events = __webpack_require__(/*! events */ \"./node_modules/events/events.js\");\nvar inherits = __webpack_require__(/*! ./functions/inherits */ \"./node_modules/algoliasearch-helper/src/functions/inherits.js\");\nvar objectHasKeys = __webpack_require__(/*! ./functions/objectHasKeys */ \"./node_modules/algoliasearch-helper/src/functions/objectHasKeys.js\");\n\nvar version = __webpack_require__(/*! ./version */ \"./node_modules/algoliasearch-helper/src/version.js\");\n\n/**\n * Event triggered when a parameter is set or updated\n * @event AlgoliaSearchHelper#event:change\n * @property {object} event\n * @property {SearchParameters} event.state the current parameters with the latest changes applied\n * @property {SearchResults} event.results the previous results received from Algolia. `null` before the first request\n * @example\n * helper.on('change', function(event) {\n *   console.log('The parameters have changed');\n * });\n */\n\n/**\n * Event triggered when a main search is sent to Algolia\n * @event AlgoliaSearchHelper#event:search\n * @property {object} event\n * @property {SearchParameters} event.state the parameters used for this search\n * @property {SearchResults} event.results the results from the previous search. `null` if it is the first search.\n * @example\n * helper.on('search', function(event) {\n *   console.log('Search sent');\n * });\n */\n\n/**\n * Event triggered when a search using `searchForFacetValues` is sent to Algolia\n * @event AlgoliaSearchHelper#event:searchForFacetValues\n * @property {object} event\n * @property {SearchParameters} event.state the parameters used for this search it is the first search.\n * @property {string} event.facet the facet searched into\n * @property {string} event.query the query used to search in the facets\n * @example\n * helper.on('searchForFacetValues', function(event) {\n *   console.log('searchForFacetValues sent');\n * });\n */\n\n/**\n * Event triggered when a search using `searchOnce` is sent to Algolia\n * @event AlgoliaSearchHelper#event:searchOnce\n * @property {object} event\n * @property {SearchParameters} event.state the parameters used for this search it is the first search.\n * @example\n * helper.on('searchOnce', function(event) {\n *   console.log('searchOnce sent');\n * });\n */\n\n/**\n * Event triggered when the results are retrieved from Algolia\n * @event AlgoliaSearchHelper#event:result\n * @property {object} event\n * @property {SearchResults} event.results the results received from Algolia\n * @property {SearchParameters} event.state the parameters used to query Algolia. Those might be different from the one in the helper instance (for example if the network is unreliable).\n * @example\n * helper.on('result', function(event) {\n *   console.log('Search results received');\n * });\n */\n\n/**\n * Event triggered when Algolia sends back an error. For example, if an unknown parameter is\n * used, the error can be caught using this event.\n * @event AlgoliaSearchHelper#event:error\n * @property {object} event\n * @property {Error} event.error the error returned by the Algolia.\n * @example\n * helper.on('error', function(event) {\n *   console.log('Houston we got a problem.');\n * });\n */\n\n/**\n * Event triggered when the queue of queries have been depleted (with any result or outdated queries)\n * @event AlgoliaSearchHelper#event:searchQueueEmpty\n * @example\n * helper.on('searchQueueEmpty', function() {\n *   console.log('No more search pending');\n *   // This is received before the result event if we're not expecting new results\n * });\n *\n * helper.search();\n */\n\n/**\n * Initialize a new AlgoliaSearchHelper\n * @class\n * @classdesc The AlgoliaSearchHelper is a class that ease the management of the\n * search. It provides an event based interface for search callbacks:\n *  - change: when the internal search state is changed.\n *    This event contains a {@link SearchParameters} object and the\n *    {@link SearchResults} of the last result if any.\n *  - search: when a search is triggered using the `search()` method.\n *  - result: when the response is retrieved from Algolia and is processed.\n *    This event contains a {@link SearchResults} object and the\n *    {@link SearchParameters} corresponding to this answer.\n *  - error: when the response is an error. This event contains the error returned by the server.\n * @param  {AlgoliaSearch} client an AlgoliaSearch client\n * @param  {string} index the index name to query\n * @param  {SearchParameters | object} options an object defining the initial\n * config of the search. It doesn't have to be a {SearchParameters},\n * just an object containing the properties you need from it.\n */\nfunction AlgoliaSearchHelper(client, index, options) {\n  if (typeof client.addAlgoliaAgent === 'function') {\n    client.addAlgoliaAgent('JS Helper (' + version + ')');\n  }\n\n  this.setClient(client);\n  var opts = options || {};\n  opts.index = index;\n  this.state = SearchParameters.make(opts);\n  this.lastResults = null;\n  this._queryId = 0;\n  this._lastQueryIdReceived = -1;\n  this.derivedHelpers = [];\n  this._currentNbQueries = 0;\n}\n\ninherits(AlgoliaSearchHelper, events.EventEmitter);\n\n/**\n * Start the search with the parameters set in the state. When the\n * method is called, it triggers a `search` event. The results will\n * be available through the `result` event. If an error occurs, an\n * `error` will be fired instead.\n * @return {AlgoliaSearchHelper}\n * @fires search\n * @fires result\n * @fires error\n * @chainable\n */\nAlgoliaSearchHelper.prototype.search = function() {\n  this._search({onlyWithDerivedHelpers: false});\n  return this;\n};\n\nAlgoliaSearchHelper.prototype.searchOnlyWithDerivedHelpers = function() {\n  this._search({onlyWithDerivedHelpers: true});\n  return this;\n};\n\n/**\n * Gets the search query parameters that would be sent to the Algolia Client\n * for the hits\n * @return {object} Query Parameters\n */\nAlgoliaSearchHelper.prototype.getQuery = function() {\n  var state = this.state;\n  return requestBuilder._getHitsSearchParams(state);\n};\n\n/**\n * Start a search using a modified version of the current state. This method does\n * not trigger the helper lifecycle and does not modify the state kept internally\n * by the helper. This second aspect means that the next search call will be the\n * same as a search call before calling searchOnce.\n * @param {object} options can contain all the parameters that can be set to SearchParameters\n * plus the index\n * @param {function} [callback] optional callback executed when the response from the\n * server is back.\n * @return {promise|undefined} if a callback is passed the method returns undefined\n * otherwise it returns a promise containing an object with two keys :\n *  - content with a SearchResults\n *  - state with the state used for the query as a SearchParameters\n * @example\n * // Changing the number of records returned per page to 1\n * // This example uses the callback API\n * var state = helper.searchOnce({hitsPerPage: 1},\n *   function(error, content, state) {\n *     // if an error occurred it will be passed in error, otherwise its value is null\n *     // content contains the results formatted as a SearchResults\n *     // state is the instance of SearchParameters used for this search\n *   });\n * @example\n * // Changing the number of records returned per page to 1\n * // This example uses the promise API\n * var state1 = helper.searchOnce({hitsPerPage: 1})\n *                 .then(promiseHandler);\n *\n * function promiseHandler(res) {\n *   // res contains\n *   // {\n *   //   content : SearchResults\n *   //   state   : SearchParameters (the one used for this specific search)\n *   // }\n * }\n */\nAlgoliaSearchHelper.prototype.searchOnce = function(options, cb) {\n  var tempState = !options ? this.state : this.state.setQueryParameters(options);\n  var queries = requestBuilder._getQueries(tempState.index, tempState);\n  var self = this;\n\n  this._currentNbQueries++;\n\n  this.emit('searchOnce', {\n    state: tempState\n  });\n\n  if (cb) {\n    this.client\n      .search(queries)\n      .then(function(content) {\n        self._currentNbQueries--;\n        if (self._currentNbQueries === 0) {\n          self.emit('searchQueueEmpty');\n        }\n\n        cb(null, new SearchResults(tempState, content.results), tempState);\n      })\n      .catch(function(err) {\n        self._currentNbQueries--;\n        if (self._currentNbQueries === 0) {\n          self.emit('searchQueueEmpty');\n        }\n\n        cb(err, null, tempState);\n      });\n\n    return undefined;\n  }\n\n  return this.client.search(queries).then(function(content) {\n    self._currentNbQueries--;\n    if (self._currentNbQueries === 0) self.emit('searchQueueEmpty');\n    return {\n      content: new SearchResults(tempState, content.results),\n      state: tempState,\n      _originalResponse: content\n    };\n  }, function(e) {\n    self._currentNbQueries--;\n    if (self._currentNbQueries === 0) self.emit('searchQueueEmpty');\n    throw e;\n  });\n};\n\n/**\n * Structure of each result when using\n * [`searchForFacetValues()`](reference.html#AlgoliaSearchHelper#searchForFacetValues)\n * @typedef FacetSearchHit\n * @type {object}\n * @property {string} value the facet value\n * @property {string} highlighted the facet value highlighted with the query string\n * @property {number} count number of occurrence of this facet value\n * @property {boolean} isRefined true if the value is already refined\n */\n\n/**\n * Structure of the data resolved by the\n * [`searchForFacetValues()`](reference.html#AlgoliaSearchHelper#searchForFacetValues)\n * promise.\n * @typedef FacetSearchResult\n * @type {object}\n * @property {FacetSearchHit} facetHits the results for this search for facet values\n * @property {number} processingTimeMS time taken by the query inside the engine\n */\n\n/**\n * Search for facet values based on an query and the name of a faceted attribute. This\n * triggers a search and will return a promise. On top of using the query, it also sends\n * the parameters from the state so that the search is narrowed down to only the possible values.\n *\n * See the description of [FacetSearchResult](reference.html#FacetSearchResult)\n * @param {string} facet the name of the faceted attribute\n * @param {string} query the string query for the search\n * @param {number} [maxFacetHits] the maximum number values returned. Should be > 0 and <= 100\n * @param {object} [userState] the set of custom parameters to use on top of the current state. Setting a property to `undefined` removes\n * it in the generated query.\n * @return {promise.<FacetSearchResult>} the results of the search\n */\nAlgoliaSearchHelper.prototype.searchForFacetValues = function(facet, query, maxFacetHits, userState) {\n  var clientHasSFFV = typeof this.client.searchForFacetValues === 'function';\n  if (\n    !clientHasSFFV &&\n    typeof this.client.initIndex !== 'function'\n  ) {\n    throw new Error(\n      'search for facet values (searchable) was called, but this client does not have a function client.searchForFacetValues or client.initIndex(index).searchForFacetValues'\n    );\n  }\n  var state = this.state.setQueryParameters(userState || {});\n  var isDisjunctive = state.isDisjunctiveFacet(facet);\n  var algoliaQuery = requestBuilder.getSearchForFacetQuery(facet, query, maxFacetHits, state);\n\n  this._currentNbQueries++;\n  var self = this;\n\n  this.emit('searchForFacetValues', {\n    state: state,\n    facet: facet,\n    query: query\n  });\n\n  var searchForFacetValuesPromise = clientHasSFFV\n    ? this.client.searchForFacetValues([{indexName: state.index, params: algoliaQuery}])\n    : this.client.initIndex(state.index).searchForFacetValues(algoliaQuery);\n\n  return searchForFacetValuesPromise.then(function addIsRefined(content) {\n    self._currentNbQueries--;\n    if (self._currentNbQueries === 0) self.emit('searchQueueEmpty');\n\n    content = Array.isArray(content) ? content[0] : content;\n\n    content.facetHits.forEach(function(f) {\n      f.isRefined = isDisjunctive\n        ? state.isDisjunctiveFacetRefined(facet, f.value)\n        : state.isFacetRefined(facet, f.value);\n    });\n\n    return content;\n  }, function(e) {\n    self._currentNbQueries--;\n    if (self._currentNbQueries === 0) self.emit('searchQueueEmpty');\n    throw e;\n  });\n};\n\n/**\n * Sets the text query used for the search.\n *\n * This method resets the current page to 0.\n * @param  {string} q the user query\n * @return {AlgoliaSearchHelper}\n * @fires change\n * @chainable\n */\nAlgoliaSearchHelper.prototype.setQuery = function(q) {\n  this._change({\n    state: this.state.resetPage().setQuery(q),\n    isPageReset: true\n  });\n\n  return this;\n};\n\n/**\n * Remove all the types of refinements except tags. A string can be provided to remove\n * only the refinements of a specific attribute. For more advanced use case, you can\n * provide a function instead. This function should follow the\n * [clearCallback definition](#SearchParameters.clearCallback).\n *\n * This method resets the current page to 0.\n * @param {string} [name] optional name of the facet / attribute on which we want to remove all refinements\n * @return {AlgoliaSearchHelper}\n * @fires change\n * @chainable\n * @example\n * // Removing all the refinements\n * helper.clearRefinements().search();\n * @example\n * // Removing all the filters on a the category attribute.\n * helper.clearRefinements('category').search();\n * @example\n * // Removing only the exclude filters on the category facet.\n * helper.clearRefinements(function(value, attribute, type) {\n *   return type === 'exclude' && attribute === 'category';\n * }).search();\n */\nAlgoliaSearchHelper.prototype.clearRefinements = function(name) {\n  this._change({\n    state: this.state.resetPage().clearRefinements(name),\n    isPageReset: true\n  });\n\n  return this;\n};\n\n/**\n * Remove all the tag filters.\n *\n * This method resets the current page to 0.\n * @return {AlgoliaSearchHelper}\n * @fires change\n * @chainable\n */\nAlgoliaSearchHelper.prototype.clearTags = function() {\n  this._change({\n    state: this.state.resetPage().clearTags(),\n    isPageReset: true\n  });\n\n  return this;\n};\n\n/**\n * Adds a disjunctive filter to a faceted attribute with the `value` provided. If the\n * filter is already set, it doesn't change the filters.\n *\n * This method resets the current page to 0.\n * @param  {string} facet the facet to refine\n * @param  {string} value the associated value (will be converted to string)\n * @return {AlgoliaSearchHelper}\n * @fires change\n * @chainable\n */\nAlgoliaSearchHelper.prototype.addDisjunctiveFacetRefinement = function(facet, value) {\n  this._change({\n    state: this.state.resetPage().addDisjunctiveFacetRefinement(facet, value),\n    isPageReset: true\n  });\n\n  return this;\n};\n\n/**\n * @deprecated since version 2.4.0, see {@link AlgoliaSearchHelper#addDisjunctiveFacetRefinement}\n */\nAlgoliaSearchHelper.prototype.addDisjunctiveRefine = function() {\n  return this.addDisjunctiveFacetRefinement.apply(this, arguments);\n};\n\n/**\n * Adds a refinement on a hierarchical facet. It will throw\n * an exception if the facet is not defined or if the facet\n * is already refined.\n *\n * This method resets the current page to 0.\n * @param {string} facet the facet name\n * @param {string} path the hierarchical facet path\n * @return {AlgoliaSearchHelper}\n * @throws Error if the facet is not defined or if the facet is refined\n * @chainable\n * @fires change\n */\nAlgoliaSearchHelper.prototype.addHierarchicalFacetRefinement = function(facet, value) {\n  this._change({\n    state: this.state.resetPage().addHierarchicalFacetRefinement(facet, value),\n    isPageReset: true\n  });\n\n  return this;\n};\n\n/**\n * Adds a an numeric filter to an attribute with the `operator` and `value` provided. If the\n * filter is already set, it doesn't change the filters.\n *\n * This method resets the current page to 0.\n * @param  {string} attribute the attribute on which the numeric filter applies\n * @param  {string} operator the operator of the filter\n * @param  {number} value the value of the filter\n * @return {AlgoliaSearchHelper}\n * @fires change\n * @chainable\n */\nAlgoliaSearchHelper.prototype.addNumericRefinement = function(attribute, operator, value) {\n  this._change({\n    state: this.state.resetPage().addNumericRefinement(attribute, operator, value),\n    isPageReset: true\n  });\n\n  return this;\n};\n\n/**\n * Adds a filter to a faceted attribute with the `value` provided. If the\n * filter is already set, it doesn't change the filters.\n *\n * This method resets the current page to 0.\n * @param  {string} facet the facet to refine\n * @param  {string} value the associated value (will be converted to string)\n * @return {AlgoliaSearchHelper}\n * @fires change\n * @chainable\n */\nAlgoliaSearchHelper.prototype.addFacetRefinement = function(facet, value) {\n  this._change({\n    state: this.state.resetPage().addFacetRefinement(facet, value),\n    isPageReset: true\n  });\n\n  return this;\n};\n\n/**\n * @deprecated since version 2.4.0, see {@link AlgoliaSearchHelper#addFacetRefinement}\n */\nAlgoliaSearchHelper.prototype.addRefine = function() {\n  return this.addFacetRefinement.apply(this, arguments);\n};\n\n\n/**\n * Adds a an exclusion filter to a faceted attribute with the `value` provided. If the\n * filter is already set, it doesn't change the filters.\n *\n * This method resets the current page to 0.\n * @param  {string} facet the facet to refine\n * @param  {string} value the associated value (will be converted to string)\n * @return {AlgoliaSearchHelper}\n * @fires change\n * @chainable\n */\nAlgoliaSearchHelper.prototype.addFacetExclusion = function(facet, value) {\n  this._change({\n    state: this.state.resetPage().addExcludeRefinement(facet, value),\n    isPageReset: true\n  });\n\n  return this;\n};\n\n/**\n * @deprecated since version 2.4.0, see {@link AlgoliaSearchHelper#addFacetExclusion}\n */\nAlgoliaSearchHelper.prototype.addExclude = function() {\n  return this.addFacetExclusion.apply(this, arguments);\n};\n\n/**\n * Adds a tag filter with the `tag` provided. If the\n * filter is already set, it doesn't change the filters.\n *\n * This method resets the current page to 0.\n * @param {string} tag the tag to add to the filter\n * @return {AlgoliaSearchHelper}\n * @fires change\n * @chainable\n */\nAlgoliaSearchHelper.prototype.addTag = function(tag) {\n  this._change({\n    state: this.state.resetPage().addTagRefinement(tag),\n    isPageReset: true\n  });\n\n  return this;\n};\n\n/**\n * Removes an numeric filter to an attribute with the `operator` and `value` provided. If the\n * filter is not set, it doesn't change the filters.\n *\n * Some parameters are optional, triggering different behavior:\n *  - if the value is not provided, then all the numeric value will be removed for the\n *  specified attribute/operator couple.\n *  - if the operator is not provided either, then all the numeric filter on this attribute\n *  will be removed.\n *\n * This method resets the current page to 0.\n * @param  {string} attribute the attribute on which the numeric filter applies\n * @param  {string} [operator] the operator of the filter\n * @param  {number} [value] the value of the filter\n * @return {AlgoliaSearchHelper}\n * @fires change\n * @chainable\n */\nAlgoliaSearchHelper.prototype.removeNumericRefinement = function(attribute, operator, value) {\n  this._change({\n    state: this.state.resetPage().removeNumericRefinement(attribute, operator, value),\n    isPageReset: true\n  });\n\n  return this;\n};\n\n/**\n * Removes a disjunctive filter to a faceted attribute with the `value` provided. If the\n * filter is not set, it doesn't change the filters.\n *\n * If the value is omitted, then this method will remove all the filters for the\n * attribute.\n *\n * This method resets the current page to 0.\n * @param  {string} facet the facet to refine\n * @param  {string} [value] the associated value\n * @return {AlgoliaSearchHelper}\n * @fires change\n * @chainable\n */\nAlgoliaSearchHelper.prototype.removeDisjunctiveFacetRefinement = function(facet, value) {\n  this._change({\n    state: this.state.resetPage().removeDisjunctiveFacetRefinement(facet, value),\n    isPageReset: true\n  });\n\n  return this;\n};\n\n/**\n * @deprecated since version 2.4.0, see {@link AlgoliaSearchHelper#removeDisjunctiveFacetRefinement}\n */\nAlgoliaSearchHelper.prototype.removeDisjunctiveRefine = function() {\n  return this.removeDisjunctiveFacetRefinement.apply(this, arguments);\n};\n\n/**\n * Removes the refinement set on a hierarchical facet.\n * @param {string} facet the facet name\n * @return {AlgoliaSearchHelper}\n * @throws Error if the facet is not defined or if the facet is not refined\n * @fires change\n * @chainable\n */\nAlgoliaSearchHelper.prototype.removeHierarchicalFacetRefinement = function(facet) {\n  this._change({\n    state: this.state.resetPage().removeHierarchicalFacetRefinement(facet),\n    isPageReset: true\n  });\n\n  return this;\n};\n\n/**\n * Removes a filter to a faceted attribute with the `value` provided. If the\n * filter is not set, it doesn't change the filters.\n *\n * If the value is omitted, then this method will remove all the filters for the\n * attribute.\n *\n * This method resets the current page to 0.\n * @param  {string} facet the facet to refine\n * @param  {string} [value] the associated value\n * @return {AlgoliaSearchHelper}\n * @fires change\n * @chainable\n */\nAlgoliaSearchHelper.prototype.removeFacetRefinement = function(facet, value) {\n  this._change({\n    state: this.state.resetPage().removeFacetRefinement(facet, value),\n    isPageReset: true\n  });\n\n  return this;\n};\n\n/**\n * @deprecated since version 2.4.0, see {@link AlgoliaSearchHelper#removeFacetRefinement}\n */\nAlgoliaSearchHelper.prototype.removeRefine = function() {\n  return this.removeFacetRefinement.apply(this, arguments);\n};\n\n/**\n * Removes an exclusion filter to a faceted attribute with the `value` provided. If the\n * filter is not set, it doesn't change the filters.\n *\n * If the value is omitted, then this method will remove all the filters for the\n * attribute.\n *\n * This method resets the current page to 0.\n * @param  {string} facet the facet to refine\n * @param  {string} [value] the associated value\n * @return {AlgoliaSearchHelper}\n * @fires change\n * @chainable\n */\nAlgoliaSearchHelper.prototype.removeFacetExclusion = function(facet, value) {\n  this._change({\n    state: this.state.resetPage().removeExcludeRefinement(facet, value),\n    isPageReset: true\n  });\n\n  return this;\n};\n\n/**\n * @deprecated since version 2.4.0, see {@link AlgoliaSearchHelper#removeFacetExclusion}\n */\nAlgoliaSearchHelper.prototype.removeExclude = function() {\n  return this.removeFacetExclusion.apply(this, arguments);\n};\n\n/**\n * Removes a tag filter with the `tag` provided. If the\n * filter is not set, it doesn't change the filters.\n *\n * This method resets the current page to 0.\n * @param {string} tag tag to remove from the filter\n * @return {AlgoliaSearchHelper}\n * @fires change\n * @chainable\n */\nAlgoliaSearchHelper.prototype.removeTag = function(tag) {\n  this._change({\n    state: this.state.resetPage().removeTagRefinement(tag),\n    isPageReset: true\n  });\n\n  return this;\n};\n\n/**\n * Adds or removes an exclusion filter to a faceted attribute with the `value` provided. If\n * the value is set then it removes it, otherwise it adds the filter.\n *\n * This method resets the current page to 0.\n * @param  {string} facet the facet to refine\n * @param  {string} value the associated value\n * @return {AlgoliaSearchHelper}\n * @fires change\n * @chainable\n */\nAlgoliaSearchHelper.prototype.toggleFacetExclusion = function(facet, value) {\n  this._change({\n    state: this.state.resetPage().toggleExcludeFacetRefinement(facet, value),\n    isPageReset: true\n  });\n\n  return this;\n};\n\n/**\n * @deprecated since version 2.4.0, see {@link AlgoliaSearchHelper#toggleFacetExclusion}\n */\nAlgoliaSearchHelper.prototype.toggleExclude = function() {\n  return this.toggleFacetExclusion.apply(this, arguments);\n};\n\n/**\n * Adds or removes a filter to a faceted attribute with the `value` provided. If\n * the value is set then it removes it, otherwise it adds the filter.\n *\n * This method can be used for conjunctive, disjunctive and hierarchical filters.\n *\n * This method resets the current page to 0.\n * @param  {string} facet the facet to refine\n * @param  {string} value the associated value\n * @return {AlgoliaSearchHelper}\n * @throws Error will throw an error if the facet is not declared in the settings of the helper\n * @fires change\n * @chainable\n * @deprecated since version 2.19.0, see {@link AlgoliaSearchHelper#toggleFacetRefinement}\n */\nAlgoliaSearchHelper.prototype.toggleRefinement = function(facet, value) {\n  return this.toggleFacetRefinement(facet, value);\n};\n\n/**\n * Adds or removes a filter to a faceted attribute with the `value` provided. If\n * the value is set then it removes it, otherwise it adds the filter.\n *\n * This method can be used for conjunctive, disjunctive and hierarchical filters.\n *\n * This method resets the current page to 0.\n * @param  {string} facet the facet to refine\n * @param  {string} value the associated value\n * @return {AlgoliaSearchHelper}\n * @throws Error will throw an error if the facet is not declared in the settings of the helper\n * @fires change\n * @chainable\n */\nAlgoliaSearchHelper.prototype.toggleFacetRefinement = function(facet, value) {\n  this._change({\n    state: this.state.resetPage().toggleFacetRefinement(facet, value),\n    isPageReset: true\n  });\n\n  return this;\n};\n\n/**\n * @deprecated since version 2.4.0, see {@link AlgoliaSearchHelper#toggleFacetRefinement}\n */\nAlgoliaSearchHelper.prototype.toggleRefine = function() {\n  return this.toggleFacetRefinement.apply(this, arguments);\n};\n\n/**\n * Adds or removes a tag filter with the `value` provided. If\n * the value is set then it removes it, otherwise it adds the filter.\n *\n * This method resets the current page to 0.\n * @param {string} tag tag to remove or add\n * @return {AlgoliaSearchHelper}\n * @fires change\n * @chainable\n */\nAlgoliaSearchHelper.prototype.toggleTag = function(tag) {\n  this._change({\n    state: this.state.resetPage().toggleTagRefinement(tag),\n    isPageReset: true\n  });\n\n  return this;\n};\n\n/**\n * Increments the page number by one.\n * @return {AlgoliaSearchHelper}\n * @fires change\n * @chainable\n * @example\n * helper.setPage(0).nextPage().getPage();\n * // returns 1\n */\nAlgoliaSearchHelper.prototype.nextPage = function() {\n  var page = this.state.page || 0;\n  return this.setPage(page + 1);\n};\n\n/**\n * Decrements the page number by one.\n * @fires change\n * @return {AlgoliaSearchHelper}\n * @chainable\n * @example\n * helper.setPage(1).previousPage().getPage();\n * // returns 0\n */\nAlgoliaSearchHelper.prototype.previousPage = function() {\n  var page = this.state.page || 0;\n  return this.setPage(page - 1);\n};\n\n/**\n * @private\n */\nfunction setCurrentPage(page) {\n  if (page < 0) throw new Error('Page requested below 0.');\n\n  this._change({\n    state: this.state.setPage(page),\n    isPageReset: false\n  });\n\n  return this;\n}\n\n/**\n * Change the current page\n * @deprecated\n * @param  {number} page The page number\n * @return {AlgoliaSearchHelper}\n * @fires change\n * @chainable\n */\nAlgoliaSearchHelper.prototype.setCurrentPage = setCurrentPage;\n\n/**\n * Updates the current page.\n * @function\n * @param  {number} page The page number\n * @return {AlgoliaSearchHelper}\n * @fires change\n * @chainable\n */\nAlgoliaSearchHelper.prototype.setPage = setCurrentPage;\n\n/**\n * Updates the name of the index that will be targeted by the query.\n *\n * This method resets the current page to 0.\n * @param {string} name the index name\n * @return {AlgoliaSearchHelper}\n * @fires change\n * @chainable\n */\nAlgoliaSearchHelper.prototype.setIndex = function(name) {\n  this._change({\n    state: this.state.resetPage().setIndex(name),\n    isPageReset: true\n  });\n\n  return this;\n};\n\n/**\n * Update a parameter of the search. This method reset the page\n *\n * The complete list of parameters is available on the\n * [Algolia website](https://www.algolia.com/doc/rest#query-an-index).\n * The most commonly used parameters have their own [shortcuts](#query-parameters-shortcuts)\n * or benefit from higher-level APIs (all the kind of filters and facets have their own API)\n *\n * This method resets the current page to 0.\n * @param {string} parameter name of the parameter to update\n * @param {any} value new value of the parameter\n * @return {AlgoliaSearchHelper}\n * @fires change\n * @chainable\n * @example\n * helper.setQueryParameter('hitsPerPage', 20).search();\n */\nAlgoliaSearchHelper.prototype.setQueryParameter = function(parameter, value) {\n  this._change({\n    state: this.state.resetPage().setQueryParameter(parameter, value),\n    isPageReset: true\n  });\n\n  return this;\n};\n\n/**\n * Set the whole state (warning: will erase previous state)\n * @param {SearchParameters} newState the whole new state\n * @return {AlgoliaSearchHelper}\n * @fires change\n * @chainable\n */\nAlgoliaSearchHelper.prototype.setState = function(newState) {\n  this._change({\n    state: SearchParameters.make(newState),\n    isPageReset: false\n  });\n\n  return this;\n};\n\n/**\n * Override the current state without triggering a change event.\n * Do not use this method unless you know what you are doing. (see the example\n * for a legit use case)\n * @param {SearchParameters} newState the whole new state\n * @return {AlgoliaSearchHelper}\n * @example\n *  helper.on('change', function(state){\n *    // In this function you might want to find a way to store the state in the url/history\n *    updateYourURL(state)\n *  })\n *  window.onpopstate = function(event){\n *    // This is naive though as you should check if the state is really defined etc.\n *    helper.overrideStateWithoutTriggeringChangeEvent(event.state).search()\n *  }\n * @chainable\n */\nAlgoliaSearchHelper.prototype.overrideStateWithoutTriggeringChangeEvent = function(newState) {\n  this.state = new SearchParameters(newState);\n  return this;\n};\n\n/**\n * Check if an attribute has any numeric, conjunctive, disjunctive or hierarchical filters.\n * @param {string} attribute the name of the attribute\n * @return {boolean} true if the attribute is filtered by at least one value\n * @example\n * // hasRefinements works with numeric, conjunctive, disjunctive and hierarchical filters\n * helper.hasRefinements('price'); // false\n * helper.addNumericRefinement('price', '>', 100);\n * helper.hasRefinements('price'); // true\n *\n * helper.hasRefinements('color'); // false\n * helper.addFacetRefinement('color', 'blue');\n * helper.hasRefinements('color'); // true\n *\n * helper.hasRefinements('material'); // false\n * helper.addDisjunctiveFacetRefinement('material', 'plastic');\n * helper.hasRefinements('material'); // true\n *\n * helper.hasRefinements('categories'); // false\n * helper.toggleFacetRefinement('categories', 'kitchen > knife');\n * helper.hasRefinements('categories'); // true\n *\n */\nAlgoliaSearchHelper.prototype.hasRefinements = function(attribute) {\n  if (objectHasKeys(this.state.getNumericRefinements(attribute))) {\n    return true;\n  } else if (this.state.isConjunctiveFacet(attribute)) {\n    return this.state.isFacetRefined(attribute);\n  } else if (this.state.isDisjunctiveFacet(attribute)) {\n    return this.state.isDisjunctiveFacetRefined(attribute);\n  } else if (this.state.isHierarchicalFacet(attribute)) {\n    return this.state.isHierarchicalFacetRefined(attribute);\n  }\n\n  // there's currently no way to know that the user did call `addNumericRefinement` at some point\n  // thus we cannot distinguish if there once was a numeric refinement that was cleared\n  // so we will return false in every other situations to be consistent\n  // while what we should do here is throw because we did not find the attribute in any type\n  // of refinement\n  return false;\n};\n\n/**\n * Check if a value is excluded for a specific faceted attribute. If the value\n * is omitted then the function checks if there is any excluding refinements.\n *\n * @param  {string}  facet name of the attribute for used for faceting\n * @param  {string}  [value] optional value. If passed will test that this value\n   * is filtering the given facet.\n * @return {boolean} true if refined\n * @example\n * helper.isExcludeRefined('color'); // false\n * helper.isExcludeRefined('color', 'blue') // false\n * helper.isExcludeRefined('color', 'red') // false\n *\n * helper.addFacetExclusion('color', 'red');\n *\n * helper.isExcludeRefined('color'); // true\n * helper.isExcludeRefined('color', 'blue') // false\n * helper.isExcludeRefined('color', 'red') // true\n */\nAlgoliaSearchHelper.prototype.isExcluded = function(facet, value) {\n  return this.state.isExcludeRefined(facet, value);\n};\n\n/**\n * @deprecated since 2.4.0, see {@link AlgoliaSearchHelper#hasRefinements}\n */\nAlgoliaSearchHelper.prototype.isDisjunctiveRefined = function(facet, value) {\n  return this.state.isDisjunctiveFacetRefined(facet, value);\n};\n\n/**\n * Check if the string is a currently filtering tag.\n * @param {string} tag tag to check\n * @return {boolean}\n */\nAlgoliaSearchHelper.prototype.hasTag = function(tag) {\n  return this.state.isTagRefined(tag);\n};\n\n/**\n * @deprecated since 2.4.0, see {@link AlgoliaSearchHelper#hasTag}\n */\nAlgoliaSearchHelper.prototype.isTagRefined = function() {\n  return this.hasTagRefinements.apply(this, arguments);\n};\n\n\n/**\n * Get the name of the currently used index.\n * @return {string}\n * @example\n * helper.setIndex('highestPrice_products').getIndex();\n * // returns 'highestPrice_products'\n */\nAlgoliaSearchHelper.prototype.getIndex = function() {\n  return this.state.index;\n};\n\nfunction getCurrentPage() {\n  return this.state.page;\n}\n\n/**\n * Get the currently selected page\n * @deprecated\n * @return {number} the current page\n */\nAlgoliaSearchHelper.prototype.getCurrentPage = getCurrentPage;\n/**\n * Get the currently selected page\n * @function\n * @return {number} the current page\n */\nAlgoliaSearchHelper.prototype.getPage = getCurrentPage;\n\n/**\n * Get all the tags currently set to filters the results.\n *\n * @return {string[]} The list of tags currently set.\n */\nAlgoliaSearchHelper.prototype.getTags = function() {\n  return this.state.tagRefinements;\n};\n\n/**\n * Get the list of refinements for a given attribute. This method works with\n * conjunctive, disjunctive, excluding and numerical filters.\n *\n * See also SearchResults#getRefinements\n *\n * @param {string} facetName attribute name used for faceting\n * @return {Array.<FacetRefinement|NumericRefinement>} All Refinement are objects that contain a value, and\n * a type. Numeric also contains an operator.\n * @example\n * helper.addNumericRefinement('price', '>', 100);\n * helper.getRefinements('price');\n * // [\n * //   {\n * //     \"value\": [\n * //       100\n * //     ],\n * //     \"operator\": \">\",\n * //     \"type\": \"numeric\"\n * //   }\n * // ]\n * @example\n * helper.addFacetRefinement('color', 'blue');\n * helper.addFacetExclusion('color', 'red');\n * helper.getRefinements('color');\n * // [\n * //   {\n * //     \"value\": \"blue\",\n * //     \"type\": \"conjunctive\"\n * //   },\n * //   {\n * //     \"value\": \"red\",\n * //     \"type\": \"exclude\"\n * //   }\n * // ]\n * @example\n * helper.addDisjunctiveFacetRefinement('material', 'plastic');\n * // [\n * //   {\n * //     \"value\": \"plastic\",\n * //     \"type\": \"disjunctive\"\n * //   }\n * // ]\n */\nAlgoliaSearchHelper.prototype.getRefinements = function(facetName) {\n  var refinements = [];\n\n  if (this.state.isConjunctiveFacet(facetName)) {\n    var conjRefinements = this.state.getConjunctiveRefinements(facetName);\n\n    conjRefinements.forEach(function(r) {\n      refinements.push({\n        value: r,\n        type: 'conjunctive'\n      });\n    });\n\n    var excludeRefinements = this.state.getExcludeRefinements(facetName);\n\n    excludeRefinements.forEach(function(r) {\n      refinements.push({\n        value: r,\n        type: 'exclude'\n      });\n    });\n  } else if (this.state.isDisjunctiveFacet(facetName)) {\n    var disjRefinements = this.state.getDisjunctiveRefinements(facetName);\n\n    disjRefinements.forEach(function(r) {\n      refinements.push({\n        value: r,\n        type: 'disjunctive'\n      });\n    });\n  }\n\n  var numericRefinements = this.state.getNumericRefinements(facetName);\n\n  Object.keys(numericRefinements).forEach(function(operator) {\n    var value = numericRefinements[operator];\n\n    refinements.push({\n      value: value,\n      operator: operator,\n      type: 'numeric'\n    });\n  });\n\n  return refinements;\n};\n\n/**\n * Return the current refinement for the (attribute, operator)\n * @param {string} attribute attribute in the record\n * @param {string} operator operator applied on the refined values\n * @return {Array.<number|number[]>} refined values\n */\nAlgoliaSearchHelper.prototype.getNumericRefinement = function(attribute, operator) {\n  return this.state.getNumericRefinement(attribute, operator);\n};\n\n/**\n * Get the current breadcrumb for a hierarchical facet, as an array\n * @param  {string} facetName Hierarchical facet name\n * @return {array.<string>} the path as an array of string\n */\nAlgoliaSearchHelper.prototype.getHierarchicalFacetBreadcrumb = function(facetName) {\n  return this.state.getHierarchicalFacetBreadcrumb(facetName);\n};\n\n// /////////// PRIVATE\n\n/**\n * Perform the underlying queries\n * @private\n * @return {undefined}\n * @fires search\n * @fires result\n * @fires error\n */\nAlgoliaSearchHelper.prototype._search = function(options) {\n  var state = this.state;\n  var states = [];\n  var mainQueries = [];\n\n  if (!options.onlyWithDerivedHelpers) {\n    mainQueries = requestBuilder._getQueries(state.index, state);\n\n    states.push({\n      state: state,\n      queriesCount: mainQueries.length,\n      helper: this\n    });\n\n    this.emit('search', {\n      state: state,\n      results: this.lastResults\n    });\n  }\n\n  var derivedQueries = this.derivedHelpers.map(function(derivedHelper) {\n    var derivedState = derivedHelper.getModifiedState(state);\n    var derivedStateQueries = requestBuilder._getQueries(derivedState.index, derivedState);\n\n    states.push({\n      state: derivedState,\n      queriesCount: derivedStateQueries.length,\n      helper: derivedHelper\n    });\n\n    derivedHelper.emit('search', {\n      state: derivedState,\n      results: derivedHelper.lastResults\n    });\n\n    return derivedStateQueries;\n  });\n\n  var queries = Array.prototype.concat.apply(mainQueries, derivedQueries);\n  var queryId = this._queryId++;\n\n  this._currentNbQueries++;\n\n  try {\n    this.client.search(queries)\n      .then(this._dispatchAlgoliaResponse.bind(this, states, queryId))\n      .catch(this._dispatchAlgoliaError.bind(this, queryId));\n  } catch (error) {\n    // If we reach this part, we're in an internal error state\n    this.emit('error', {\n      error: error\n    });\n  }\n};\n\n/**\n * Transform the responses as sent by the server and transform them into a user\n * usable object that merge the results of all the batch requests. It will dispatch\n * over the different helper + derived helpers (when there are some).\n * @private\n * @param {array.<{SearchParameters, AlgoliaQueries, AlgoliaSearchHelper}>}\n *  state state used for to generate the request\n * @param {number} queryId id of the current request\n * @param {object} content content of the response\n * @return {undefined}\n */\nAlgoliaSearchHelper.prototype._dispatchAlgoliaResponse = function(states, queryId, content) {\n  // FIXME remove the number of outdated queries discarded instead of just one\n\n  if (queryId < this._lastQueryIdReceived) {\n    // Outdated answer\n    return;\n  }\n\n  this._currentNbQueries -= (queryId - this._lastQueryIdReceived);\n  this._lastQueryIdReceived = queryId;\n\n  if (this._currentNbQueries === 0) this.emit('searchQueueEmpty');\n\n  var results = content.results.slice();\n\n  states.forEach(function(s) {\n    var state = s.state;\n    var queriesCount = s.queriesCount;\n    var helper = s.helper;\n    var specificResults = results.splice(0, queriesCount);\n\n    var formattedResponse = helper.lastResults = new SearchResults(state, specificResults);\n\n    helper.emit('result', {\n      results: formattedResponse,\n      state: state\n    });\n  });\n};\n\nAlgoliaSearchHelper.prototype._dispatchAlgoliaError = function(queryId, error) {\n  if (queryId < this._lastQueryIdReceived) {\n    // Outdated answer\n    return;\n  }\n\n  this._currentNbQueries -= queryId - this._lastQueryIdReceived;\n  this._lastQueryIdReceived = queryId;\n\n  this.emit('error', {\n    error: error\n  });\n\n  if (this._currentNbQueries === 0) this.emit('searchQueueEmpty');\n};\n\nAlgoliaSearchHelper.prototype.containsRefinement = function(query, facetFilters, numericFilters, tagFilters) {\n  return query ||\n    facetFilters.length !== 0 ||\n    numericFilters.length !== 0 ||\n    tagFilters.length !== 0;\n};\n\n/**\n * Test if there are some disjunctive refinements on the facet\n * @private\n * @param {string} facet the attribute to test\n * @return {boolean}\n */\nAlgoliaSearchHelper.prototype._hasDisjunctiveRefinements = function(facet) {\n  return this.state.disjunctiveRefinements[facet] &&\n    this.state.disjunctiveRefinements[facet].length > 0;\n};\n\nAlgoliaSearchHelper.prototype._change = function(event) {\n  var state = event.state;\n  var isPageReset = event.isPageReset;\n\n  if (state !== this.state) {\n    this.state = state;\n\n    this.emit('change', {\n      state: this.state,\n      results: this.lastResults,\n      isPageReset: isPageReset\n    });\n  }\n};\n\n/**\n * Clears the cache of the underlying Algolia client.\n * @return {AlgoliaSearchHelper}\n */\nAlgoliaSearchHelper.prototype.clearCache = function() {\n  this.client.clearCache && this.client.clearCache();\n  return this;\n};\n\n/**\n * Updates the internal client instance. If the reference of the clients\n * are equal then no update is actually done.\n * @param  {AlgoliaSearch} newClient an AlgoliaSearch client\n * @return {AlgoliaSearchHelper}\n */\nAlgoliaSearchHelper.prototype.setClient = function(newClient) {\n  if (this.client === newClient) return this;\n\n  if (typeof newClient.addAlgoliaAgent === 'function') {\n    newClient.addAlgoliaAgent('JS Helper (' + version + ')');\n  }\n  this.client = newClient;\n\n  return this;\n};\n\n/**\n * Gets the instance of the currently used client.\n * @return {AlgoliaSearch}\n */\nAlgoliaSearchHelper.prototype.getClient = function() {\n  return this.client;\n};\n\n/**\n * Creates an derived instance of the Helper. A derived helper\n * is a way to request other indices synchronised with the lifecycle\n * of the main Helper. This mechanism uses the multiqueries feature\n * of Algolia to aggregate all the requests in a single network call.\n *\n * This method takes a function that is used to create a new SearchParameter\n * that will be used to create requests to Algolia. Those new requests\n * are created just before the `search` event. The signature of the function\n * is `SearchParameters -> SearchParameters`.\n *\n * This method returns a new DerivedHelper which is an EventEmitter\n * that fires the same `search`, `result` and `error` events. Those\n * events, however, will receive data specific to this DerivedHelper\n * and the SearchParameters that is returned by the call of the\n * parameter function.\n * @param {function} fn SearchParameters -> SearchParameters\n * @return {DerivedHelper}\n */\nAlgoliaSearchHelper.prototype.derive = function(fn) {\n  var derivedHelper = new DerivedHelper(this, fn);\n  this.derivedHelpers.push(derivedHelper);\n  return derivedHelper;\n};\n\n/**\n * This method detaches a derived Helper from the main one. Prefer using the one from the\n * derived helper itself, to remove the event listeners too.\n * @private\n * @return {undefined}\n * @throws Error\n */\nAlgoliaSearchHelper.prototype.detachDerivedHelper = function(derivedHelper) {\n  var pos = this.derivedHelpers.indexOf(derivedHelper);\n  if (pos === -1) throw new Error('Derived helper already detached');\n  this.derivedHelpers.splice(pos, 1);\n};\n\n/**\n * This method returns true if there is currently at least one on-going search.\n * @return {boolean} true if there is a search pending\n */\nAlgoliaSearchHelper.prototype.hasPendingRequests = function() {\n  return this._currentNbQueries > 0;\n};\n\n/**\n * @typedef AlgoliaSearchHelper.NumericRefinement\n * @type {object}\n * @property {number[]} value the numbers that are used for filtering this attribute with\n * the operator specified.\n * @property {string} operator the faceting data: value, number of entries\n * @property {string} type will be 'numeric'\n */\n\n/**\n * @typedef AlgoliaSearchHelper.FacetRefinement\n * @type {object}\n * @property {string} value the string use to filter the attribute\n * @property {string} type the type of filter: 'conjunctive', 'disjunctive', 'exclude'\n */\n\nmodule.exports = AlgoliaSearchHelper;\n\n\n//# sourceURL=webpack:///./node_modules/algoliasearch-helper/src/algoliasearch.helper.js?");

/***/ }),

/***/ "./node_modules/algoliasearch-helper/src/functions/compact.js":
/*!********************************************************************!*\
  !*** ./node_modules/algoliasearch-helper/src/functions/compact.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nmodule.exports = function compact(array) {\n  if (!Array.isArray(array)) {\n    return [];\n  }\n\n  return array.filter(Boolean);\n};\n\n\n//# sourceURL=webpack:///./node_modules/algoliasearch-helper/src/functions/compact.js?");

/***/ }),

/***/ "./node_modules/algoliasearch-helper/src/functions/defaultsPure.js":
/*!*************************************************************************!*\
  !*** ./node_modules/algoliasearch-helper/src/functions/defaultsPure.js ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\n// NOTE: this behaves like lodash/defaults, but doesn't mutate the target\nmodule.exports = function defaultsPure() {\n  var sources = Array.prototype.slice.call(arguments);\n  return sources.reduceRight(function(acc, source) {\n    Object.keys(Object(source)).forEach(function(key) {\n      if (source[key] !== undefined) {\n        acc[key] = source[key];\n      }\n    });\n    return acc;\n  }, {});\n};\n\n\n//# sourceURL=webpack:///./node_modules/algoliasearch-helper/src/functions/defaultsPure.js?");

/***/ }),

/***/ "./node_modules/algoliasearch-helper/src/functions/find.js":
/*!*****************************************************************!*\
  !*** ./node_modules/algoliasearch-helper/src/functions/find.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\n// @MAJOR can be replaced by native Array#find when we change support\nmodule.exports = function find(array, comparator) {\n  if (!Array.isArray(array)) {\n    return undefined;\n  }\n\n  for (var i = 0; i < array.length; i++) {\n    if (comparator(array[i])) {\n      return array[i];\n    }\n  }\n};\n\n\n//# sourceURL=webpack:///./node_modules/algoliasearch-helper/src/functions/find.js?");

/***/ }),

/***/ "./node_modules/algoliasearch-helper/src/functions/findIndex.js":
/*!**********************************************************************!*\
  !*** ./node_modules/algoliasearch-helper/src/functions/findIndex.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\n// @MAJOR can be replaced by native Array#findIndex when we change support\nmodule.exports = function find(array, comparator) {\n  if (!Array.isArray(array)) {\n    return -1;\n  }\n\n  for (var i = 0; i < array.length; i++) {\n    if (comparator(array[i])) {\n      return i;\n    }\n  }\n  return -1;\n};\n\n\n//# sourceURL=webpack:///./node_modules/algoliasearch-helper/src/functions/findIndex.js?");

/***/ }),

/***/ "./node_modules/algoliasearch-helper/src/functions/formatSort.js":
/*!***********************************************************************!*\
  !*** ./node_modules/algoliasearch-helper/src/functions/formatSort.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar find = __webpack_require__(/*! ./find */ \"./node_modules/algoliasearch-helper/src/functions/find.js\");\n\n/**\n * Transform sort format from user friendly notation to lodash format\n * @param {string[]} sortBy array of predicate of the form \"attribute:order\"\n * @param {string[]} [defaults] array of predicate of the form \"attribute:order\"\n * @return {array.<string[]>} array containing 2 elements : attributes, orders\n */\nmodule.exports = function formatSort(sortBy, defaults) {\n  var defaultInstructions = (defaults || []).map(function(sort) {\n    return sort.split(':');\n  });\n\n  return sortBy.reduce(\n    function preparePredicate(out, sort) {\n      var sortInstruction = sort.split(':');\n\n      var matchingDefault = find(defaultInstructions, function(\n        defaultInstruction\n      ) {\n        return defaultInstruction[0] === sortInstruction[0];\n      });\n\n      if (sortInstruction.length > 1 || !matchingDefault) {\n        out[0].push(sortInstruction[0]);\n        out[1].push(sortInstruction[1]);\n        return out;\n      }\n\n      out[0].push(matchingDefault[0]);\n      out[1].push(matchingDefault[1]);\n      return out;\n    },\n    [[], []]\n  );\n};\n\n\n//# sourceURL=webpack:///./node_modules/algoliasearch-helper/src/functions/formatSort.js?");

/***/ }),

/***/ "./node_modules/algoliasearch-helper/src/functions/inherits.js":
/*!*********************************************************************!*\
  !*** ./node_modules/algoliasearch-helper/src/functions/inherits.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nfunction inherits(ctor, superCtor) {\n  ctor.prototype = Object.create(superCtor.prototype, {\n    constructor: {\n      value: ctor,\n      enumerable: false,\n      writable: true,\n      configurable: true\n    }\n  });\n}\n\nmodule.exports = inherits;\n\n\n//# sourceURL=webpack:///./node_modules/algoliasearch-helper/src/functions/inherits.js?");

/***/ }),

/***/ "./node_modules/algoliasearch-helper/src/functions/intersection.js":
/*!*************************************************************************!*\
  !*** ./node_modules/algoliasearch-helper/src/functions/intersection.js ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nfunction intersection(arr1, arr2) {\n  return arr1.filter(function(value, index) {\n    return (\n      arr2.indexOf(value) > -1 &&\n      arr1.indexOf(value) === index /* skips duplicates */\n    );\n  });\n}\n\nmodule.exports = intersection;\n\n\n//# sourceURL=webpack:///./node_modules/algoliasearch-helper/src/functions/intersection.js?");

/***/ }),

/***/ "./node_modules/algoliasearch-helper/src/functions/merge.js":
/*!******************************************************************!*\
  !*** ./node_modules/algoliasearch-helper/src/functions/merge.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nfunction clone(value) {\n  if (typeof value === 'object' && value !== null) {\n    return _merge(Array.isArray(value) ? [] : {}, value);\n  }\n  return value;\n}\n\nfunction isObjectOrArrayOrFunction(value) {\n  return (\n    typeof value === 'function' ||\n    Array.isArray(value) ||\n    Object.prototype.toString.call(value) === '[object Object]'\n  );\n}\n\nfunction _merge(target, source) {\n  if (target === source) {\n    return target;\n  }\n\n  for (var key in source) {\n    if (!Object.prototype.hasOwnProperty.call(source, key)) {\n      continue;\n    }\n\n    var sourceVal = source[key];\n    var targetVal = target[key];\n\n    if (typeof targetVal !== 'undefined' && typeof sourceVal === 'undefined') {\n      continue;\n    }\n\n    if (isObjectOrArrayOrFunction(targetVal) && isObjectOrArrayOrFunction(sourceVal)) {\n      target[key] = _merge(targetVal, sourceVal);\n    } else {\n      target[key] = clone(sourceVal);\n    }\n  }\n  return target;\n}\n\n/**\n * This method is like Object.assign, but recursively merges own and inherited\n * enumerable keyed properties of source objects into the destination object.\n *\n * NOTE: this behaves like lodash/merge, but:\n * - does mutate functions if they are a source\n * - treats non-plain objects as plain\n * - does not work for circular objects\n * - treats sparse arrays as sparse\n * - does not convert Array-like objects (Arguments, NodeLists, etc.) to arrays\n *\n * @param {Object} object The destination object.\n * @param {...Object} [sources] The source objects.\n * @returns {Object} Returns `object`.\n */\n\nfunction merge(target) {\n  if (!isObjectOrArrayOrFunction(target)) {\n    target = {};\n  }\n\n  for (var i = 1, l = arguments.length; i < l; i++) {\n    var source = arguments[i];\n\n    if (isObjectOrArrayOrFunction(source)) {\n      _merge(target, source);\n    }\n  }\n  return target;\n}\n\nmodule.exports = merge;\n\n\n//# sourceURL=webpack:///./node_modules/algoliasearch-helper/src/functions/merge.js?");

/***/ }),

/***/ "./node_modules/algoliasearch-helper/src/functions/objectHasKeys.js":
/*!**************************************************************************!*\
  !*** ./node_modules/algoliasearch-helper/src/functions/objectHasKeys.js ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nfunction objectHasKeys(obj) {\n  return obj && Object.keys(obj).length > 0;\n}\n\nmodule.exports = objectHasKeys;\n\n\n//# sourceURL=webpack:///./node_modules/algoliasearch-helper/src/functions/objectHasKeys.js?");

/***/ }),

/***/ "./node_modules/algoliasearch-helper/src/functions/omit.js":
/*!*****************************************************************!*\
  !*** ./node_modules/algoliasearch-helper/src/functions/omit.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\n// https://github.com/babel/babel/blob/3aaafae053fa75febb3aa45d45b6f00646e30ba4/packages/babel-helpers/src/helpers.js#L604-L620\nfunction _objectWithoutPropertiesLoose(source, excluded) {\n  if (source === null) return {};\n  var target = {};\n  var sourceKeys = Object.keys(source);\n  var key;\n  var i;\n  for (i = 0; i < sourceKeys.length; i++) {\n    key = sourceKeys[i];\n    if (excluded.indexOf(key) >= 0) continue;\n    target[key] = source[key];\n  }\n  return target;\n}\n\nmodule.exports = _objectWithoutPropertiesLoose;\n\n\n//# sourceURL=webpack:///./node_modules/algoliasearch-helper/src/functions/omit.js?");

/***/ }),

/***/ "./node_modules/algoliasearch-helper/src/functions/orderBy.js":
/*!********************************************************************!*\
  !*** ./node_modules/algoliasearch-helper/src/functions/orderBy.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nfunction compareAscending(value, other) {\n  if (value !== other) {\n    var valIsDefined = value !== undefined;\n    var valIsNull = value === null;\n\n    var othIsDefined = other !== undefined;\n    var othIsNull = other === null;\n\n    if (\n      (!othIsNull && value > other) ||\n      (valIsNull && othIsDefined) ||\n      !valIsDefined\n    ) {\n      return 1;\n    }\n    if (\n      (!valIsNull && value < other) ||\n      (othIsNull && valIsDefined) ||\n      !othIsDefined\n    ) {\n      return -1;\n    }\n  }\n  return 0;\n}\n\n/**\n * @param {Array<object>} collection object with keys in attributes\n * @param {Array<string>} iteratees attributes\n * @param {Array<string>} orders asc | desc\n */\nfunction orderBy(collection, iteratees, orders) {\n  if (!Array.isArray(collection)) {\n    return [];\n  }\n\n  if (!Array.isArray(orders)) {\n    orders = [];\n  }\n\n  var result = collection.map(function(value, index) {\n    return {\n      criteria: iteratees.map(function(iteratee) {\n        return value[iteratee];\n      }),\n      index: index,\n      value: value\n    };\n  });\n\n  result.sort(function comparer(object, other) {\n    var index = -1;\n\n    while (++index < object.criteria.length) {\n      var res = compareAscending(object.criteria[index], other.criteria[index]);\n      if (res) {\n        if (index >= orders.length) {\n          return res;\n        }\n        if (orders[index] === 'desc') {\n          return -res;\n        }\n        return res;\n      }\n    }\n\n    // This ensures a stable sort in V8 and other engines.\n    // See https://bugs.chromium.org/p/v8/issues/detail?id=90 for more details.\n    return object.index - other.index;\n  });\n\n  return result.map(function(res) {\n    return res.value;\n  });\n}\n\nmodule.exports = orderBy;\n\n\n//# sourceURL=webpack:///./node_modules/algoliasearch-helper/src/functions/orderBy.js?");

/***/ }),

/***/ "./node_modules/algoliasearch-helper/src/functions/valToNumber.js":
/*!************************************************************************!*\
  !*** ./node_modules/algoliasearch-helper/src/functions/valToNumber.js ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nfunction valToNumber(v) {\n  if (typeof v === 'number') {\n    return v;\n  } else if (typeof v === 'string') {\n    return parseFloat(v);\n  } else if (Array.isArray(v)) {\n    return v.map(valToNumber);\n  }\n\n  throw new Error('The value should be a number, a parsable string or an array of those.');\n}\n\nmodule.exports = valToNumber;\n\n\n//# sourceURL=webpack:///./node_modules/algoliasearch-helper/src/functions/valToNumber.js?");

/***/ }),

/***/ "./node_modules/algoliasearch-helper/src/requestBuilder.js":
/*!*****************************************************************!*\
  !*** ./node_modules/algoliasearch-helper/src/requestBuilder.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar merge = __webpack_require__(/*! ./functions/merge */ \"./node_modules/algoliasearch-helper/src/functions/merge.js\");\n\nvar requestBuilder = {\n  /**\n   * Get all the queries to send to the client, those queries can used directly\n   * with the Algolia client.\n   * @private\n   * @return {object[]} The queries\n   */\n  _getQueries: function getQueries(index, state) {\n    var queries = [];\n\n    // One query for the hits\n    queries.push({\n      indexName: index,\n      params: requestBuilder._getHitsSearchParams(state)\n    });\n\n    // One for each disjunctive facets\n    state.getRefinedDisjunctiveFacets().forEach(function(refinedFacet) {\n      queries.push({\n        indexName: index,\n        params: requestBuilder._getDisjunctiveFacetSearchParams(state, refinedFacet)\n      });\n    });\n\n    // maybe more to get the root level of hierarchical facets when activated\n    state.getRefinedHierarchicalFacets().forEach(function(refinedFacet) {\n      var hierarchicalFacet = state.getHierarchicalFacetByName(refinedFacet);\n\n      var currentRefinement = state.getHierarchicalRefinement(refinedFacet);\n      // if we are deeper than level 0 (starting from `beer > IPA`)\n      // we want to get the root values\n      var separator = state._getHierarchicalFacetSeparator(hierarchicalFacet);\n      if (currentRefinement.length > 0 && currentRefinement[0].split(separator).length > 1) {\n        queries.push({\n          indexName: index,\n          params: requestBuilder._getDisjunctiveFacetSearchParams(state, refinedFacet, true)\n        });\n      }\n    });\n\n    return queries;\n  },\n\n  /**\n   * Build search parameters used to fetch hits\n   * @private\n   * @return {object.<string, any>}\n   */\n  _getHitsSearchParams: function(state) {\n    var facets = state.facets\n      .concat(state.disjunctiveFacets)\n      .concat(requestBuilder._getHitsHierarchicalFacetsAttributes(state));\n\n\n    var facetFilters = requestBuilder._getFacetFilters(state);\n    var numericFilters = requestBuilder._getNumericFilters(state);\n    var tagFilters = requestBuilder._getTagFilters(state);\n    var additionalParams = {\n      facets: facets,\n      tagFilters: tagFilters\n    };\n\n    if (facetFilters.length > 0) {\n      additionalParams.facetFilters = facetFilters;\n    }\n\n    if (numericFilters.length > 0) {\n      additionalParams.numericFilters = numericFilters;\n    }\n\n    return merge({}, state.getQueryParams(), additionalParams);\n  },\n\n  /**\n   * Build search parameters used to fetch a disjunctive facet\n   * @private\n   * @param  {string} facet the associated facet name\n   * @param  {boolean} hierarchicalRootLevel ?? FIXME\n   * @return {object}\n   */\n  _getDisjunctiveFacetSearchParams: function(state, facet, hierarchicalRootLevel) {\n    var facetFilters = requestBuilder._getFacetFilters(state, facet, hierarchicalRootLevel);\n    var numericFilters = requestBuilder._getNumericFilters(state, facet);\n    var tagFilters = requestBuilder._getTagFilters(state);\n    var additionalParams = {\n      hitsPerPage: 1,\n      page: 0,\n      attributesToRetrieve: [],\n      attributesToHighlight: [],\n      attributesToSnippet: [],\n      tagFilters: tagFilters,\n      analytics: false,\n      clickAnalytics: false\n    };\n\n    var hierarchicalFacet = state.getHierarchicalFacetByName(facet);\n\n    if (hierarchicalFacet) {\n      additionalParams.facets = requestBuilder._getDisjunctiveHierarchicalFacetAttribute(\n        state,\n        hierarchicalFacet,\n        hierarchicalRootLevel\n      );\n    } else {\n      additionalParams.facets = facet;\n    }\n\n    if (numericFilters.length > 0) {\n      additionalParams.numericFilters = numericFilters;\n    }\n\n    if (facetFilters.length > 0) {\n      additionalParams.facetFilters = facetFilters;\n    }\n\n    return merge({}, state.getQueryParams(), additionalParams);\n  },\n\n  /**\n   * Return the numeric filters in an algolia request fashion\n   * @private\n   * @param {string} [facetName] the name of the attribute for which the filters should be excluded\n   * @return {string[]} the numeric filters in the algolia format\n   */\n  _getNumericFilters: function(state, facetName) {\n    if (state.numericFilters) {\n      return state.numericFilters;\n    }\n\n    var numericFilters = [];\n\n    Object.keys(state.numericRefinements).forEach(function(attribute) {\n      var operators = state.numericRefinements[attribute] || {};\n      Object.keys(operators).forEach(function(operator) {\n        var values = operators[operator] || [];\n        if (facetName !== attribute) {\n          values.forEach(function(value) {\n            if (Array.isArray(value)) {\n              var vs = value.map(function(v) {\n                return attribute + operator + v;\n              });\n              numericFilters.push(vs);\n            } else {\n              numericFilters.push(attribute + operator + value);\n            }\n          });\n        }\n      });\n    });\n\n    return numericFilters;\n  },\n\n  /**\n   * Return the tags filters depending\n   * @private\n   * @return {string}\n   */\n  _getTagFilters: function(state) {\n    if (state.tagFilters) {\n      return state.tagFilters;\n    }\n\n    return state.tagRefinements.join(',');\n  },\n\n\n  /**\n   * Build facetFilters parameter based on current refinements. The array returned\n   * contains strings representing the facet filters in the algolia format.\n   * @private\n   * @param  {string} [facet] if set, the current disjunctive facet\n   * @return {array.<string>}\n   */\n  _getFacetFilters: function(state, facet, hierarchicalRootLevel) {\n    var facetFilters = [];\n\n    var facetsRefinements = state.facetsRefinements || {};\n    Object.keys(facetsRefinements).forEach(function(facetName) {\n      var facetValues = facetsRefinements[facetName] || [];\n      facetValues.forEach(function(facetValue) {\n        facetFilters.push(facetName + ':' + facetValue);\n      });\n    });\n\n    var facetsExcludes = state.facetsExcludes || {};\n    Object.keys(facetsExcludes).forEach(function(facetName) {\n      var facetValues = facetsExcludes[facetName] || [];\n      facetValues.forEach(function(facetValue) {\n        facetFilters.push(facetName + ':-' + facetValue);\n      });\n    });\n\n    var disjunctiveFacetsRefinements = state.disjunctiveFacetsRefinements || {};\n    Object.keys(disjunctiveFacetsRefinements).forEach(function(facetName) {\n      var facetValues = disjunctiveFacetsRefinements[facetName] || [];\n      if (facetName === facet || !facetValues || facetValues.length === 0) {\n        return;\n      }\n      var orFilters = [];\n\n      facetValues.forEach(function(facetValue) {\n        orFilters.push(facetName + ':' + facetValue);\n      });\n\n      facetFilters.push(orFilters);\n    });\n\n    var hierarchicalFacetsRefinements = state.hierarchicalFacetsRefinements || {};\n    Object.keys(hierarchicalFacetsRefinements).forEach(function(facetName) {\n      var facetValues = hierarchicalFacetsRefinements[facetName] || [];\n      var facetValue = facetValues[0];\n\n      if (facetValue === undefined) {\n        return;\n      }\n\n      var hierarchicalFacet = state.getHierarchicalFacetByName(facetName);\n      var separator = state._getHierarchicalFacetSeparator(hierarchicalFacet);\n      var rootPath = state._getHierarchicalRootPath(hierarchicalFacet);\n      var attributeToRefine;\n      var attributesIndex;\n\n      // we ask for parent facet values only when the `facet` is the current hierarchical facet\n      if (facet === facetName) {\n        // if we are at the root level already, no need to ask for facet values, we get them from\n        // the hits query\n        if (facetValue.indexOf(separator) === -1 || (!rootPath && hierarchicalRootLevel === true) ||\n          (rootPath && rootPath.split(separator).length === facetValue.split(separator).length)) {\n          return;\n        }\n\n        if (!rootPath) {\n          attributesIndex = facetValue.split(separator).length - 2;\n          facetValue = facetValue.slice(0, facetValue.lastIndexOf(separator));\n        } else {\n          attributesIndex = rootPath.split(separator).length - 1;\n          facetValue = rootPath;\n        }\n\n        attributeToRefine = hierarchicalFacet.attributes[attributesIndex];\n      } else {\n        attributesIndex = facetValue.split(separator).length - 1;\n\n        attributeToRefine = hierarchicalFacet.attributes[attributesIndex];\n      }\n\n      if (attributeToRefine) {\n        facetFilters.push([attributeToRefine + ':' + facetValue]);\n      }\n    });\n\n    return facetFilters;\n  },\n\n  _getHitsHierarchicalFacetsAttributes: function(state) {\n    var out = [];\n\n    return state.hierarchicalFacets.reduce(\n      // ask for as much levels as there's hierarchical refinements\n      function getHitsAttributesForHierarchicalFacet(allAttributes, hierarchicalFacet) {\n        var hierarchicalRefinement = state.getHierarchicalRefinement(hierarchicalFacet.name)[0];\n\n        // if no refinement, ask for root level\n        if (!hierarchicalRefinement) {\n          allAttributes.push(hierarchicalFacet.attributes[0]);\n          return allAttributes;\n        }\n\n        var separator = state._getHierarchicalFacetSeparator(hierarchicalFacet);\n        var level = hierarchicalRefinement.split(separator).length;\n        var newAttributes = hierarchicalFacet.attributes.slice(0, level + 1);\n\n        return allAttributes.concat(newAttributes);\n      }, out);\n  },\n\n  _getDisjunctiveHierarchicalFacetAttribute: function(state, hierarchicalFacet, rootLevel) {\n    var separator = state._getHierarchicalFacetSeparator(hierarchicalFacet);\n    if (rootLevel === true) {\n      var rootPath = state._getHierarchicalRootPath(hierarchicalFacet);\n      var attributeIndex = 0;\n\n      if (rootPath) {\n        attributeIndex = rootPath.split(separator).length;\n      }\n      return [hierarchicalFacet.attributes[attributeIndex]];\n    }\n\n    var hierarchicalRefinement = state.getHierarchicalRefinement(hierarchicalFacet.name)[0] || '';\n    // if refinement is 'beers > IPA > Flying dog',\n    // then we want `facets: ['beers > IPA']` as disjunctive facet (parent level values)\n\n    var parentLevel = hierarchicalRefinement.split(separator).length - 1;\n    return hierarchicalFacet.attributes.slice(0, parentLevel + 1);\n  },\n\n  getSearchForFacetQuery: function(facetName, query, maxFacetHits, state) {\n    var stateForSearchForFacetValues = state.isDisjunctiveFacet(facetName) ?\n      state.clearRefinements(facetName) :\n      state;\n    var searchForFacetSearchParameters = {\n      facetQuery: query,\n      facetName: facetName\n    };\n    if (typeof maxFacetHits === 'number') {\n      searchForFacetSearchParameters.maxFacetHits = maxFacetHits;\n    }\n    return merge(\n      {},\n      requestBuilder._getHitsSearchParams(stateForSearchForFacetValues),\n      searchForFacetSearchParameters\n    );\n  }\n};\n\nmodule.exports = requestBuilder;\n\n\n//# sourceURL=webpack:///./node_modules/algoliasearch-helper/src/requestBuilder.js?");

/***/ }),

/***/ "./node_modules/algoliasearch-helper/src/version.js":
/*!**********************************************************!*\
  !*** ./node_modules/algoliasearch-helper/src/version.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nmodule.exports = '3.1.0';\n\n\n//# sourceURL=webpack:///./node_modules/algoliasearch-helper/src/version.js?");

/***/ }),

/***/ "./node_modules/core-js/es6/index.js":
/*!*******************************************!*\
  !*** ./node_modules/core-js/es6/index.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("__webpack_require__(/*! ../modules/es6.symbol */ \"./node_modules/core-js/modules/es6.symbol.js\");\n__webpack_require__(/*! ../modules/es6.object.create */ \"./node_modules/core-js/modules/es6.object.create.js\");\n__webpack_require__(/*! ../modules/es6.object.define-property */ \"./node_modules/core-js/modules/es6.object.define-property.js\");\n__webpack_require__(/*! ../modules/es6.object.define-properties */ \"./node_modules/core-js/modules/es6.object.define-properties.js\");\n__webpack_require__(/*! ../modules/es6.object.get-own-property-descriptor */ \"./node_modules/core-js/modules/es6.object.get-own-property-descriptor.js\");\n__webpack_require__(/*! ../modules/es6.object.get-prototype-of */ \"./node_modules/core-js/modules/es6.object.get-prototype-of.js\");\n__webpack_require__(/*! ../modules/es6.object.keys */ \"./node_modules/core-js/modules/es6.object.keys.js\");\n__webpack_require__(/*! ../modules/es6.object.get-own-property-names */ \"./node_modules/core-js/modules/es6.object.get-own-property-names.js\");\n__webpack_require__(/*! ../modules/es6.object.freeze */ \"./node_modules/core-js/modules/es6.object.freeze.js\");\n__webpack_require__(/*! ../modules/es6.object.seal */ \"./node_modules/core-js/modules/es6.object.seal.js\");\n__webpack_require__(/*! ../modules/es6.object.prevent-extensions */ \"./node_modules/core-js/modules/es6.object.prevent-extensions.js\");\n__webpack_require__(/*! ../modules/es6.object.is-frozen */ \"./node_modules/core-js/modules/es6.object.is-frozen.js\");\n__webpack_require__(/*! ../modules/es6.object.is-sealed */ \"./node_modules/core-js/modules/es6.object.is-sealed.js\");\n__webpack_require__(/*! ../modules/es6.object.is-extensible */ \"./node_modules/core-js/modules/es6.object.is-extensible.js\");\n__webpack_require__(/*! ../modules/es6.object.assign */ \"./node_modules/core-js/modules/es6.object.assign.js\");\n__webpack_require__(/*! ../modules/es6.object.is */ \"./node_modules/core-js/modules/es6.object.is.js\");\n__webpack_require__(/*! ../modules/es6.object.set-prototype-of */ \"./node_modules/core-js/modules/es6.object.set-prototype-of.js\");\n__webpack_require__(/*! ../modules/es6.object.to-string */ \"./node_modules/core-js/modules/es6.object.to-string.js\");\n__webpack_require__(/*! ../modules/es6.function.bind */ \"./node_modules/core-js/modules/es6.function.bind.js\");\n__webpack_require__(/*! ../modules/es6.function.name */ \"./node_modules/core-js/modules/es6.function.name.js\");\n__webpack_require__(/*! ../modules/es6.function.has-instance */ \"./node_modules/core-js/modules/es6.function.has-instance.js\");\n__webpack_require__(/*! ../modules/es6.parse-int */ \"./node_modules/core-js/modules/es6.parse-int.js\");\n__webpack_require__(/*! ../modules/es6.parse-float */ \"./node_modules/core-js/modules/es6.parse-float.js\");\n__webpack_require__(/*! ../modules/es6.number.constructor */ \"./node_modules/core-js/modules/es6.number.constructor.js\");\n__webpack_require__(/*! ../modules/es6.number.to-fixed */ \"./node_modules/core-js/modules/es6.number.to-fixed.js\");\n__webpack_require__(/*! ../modules/es6.number.to-precision */ \"./node_modules/core-js/modules/es6.number.to-precision.js\");\n__webpack_require__(/*! ../modules/es6.number.epsilon */ \"./node_modules/core-js/modules/es6.number.epsilon.js\");\n__webpack_require__(/*! ../modules/es6.number.is-finite */ \"./node_modules/core-js/modules/es6.number.is-finite.js\");\n__webpack_require__(/*! ../modules/es6.number.is-integer */ \"./node_modules/core-js/modules/es6.number.is-integer.js\");\n__webpack_require__(/*! ../modules/es6.number.is-nan */ \"./node_modules/core-js/modules/es6.number.is-nan.js\");\n__webpack_require__(/*! ../modules/es6.number.is-safe-integer */ \"./node_modules/core-js/modules/es6.number.is-safe-integer.js\");\n__webpack_require__(/*! ../modules/es6.number.max-safe-integer */ \"./node_modules/core-js/modules/es6.number.max-safe-integer.js\");\n__webpack_require__(/*! ../modules/es6.number.min-safe-integer */ \"./node_modules/core-js/modules/es6.number.min-safe-integer.js\");\n__webpack_require__(/*! ../modules/es6.number.parse-float */ \"./node_modules/core-js/modules/es6.number.parse-float.js\");\n__webpack_require__(/*! ../modules/es6.number.parse-int */ \"./node_modules/core-js/modules/es6.number.parse-int.js\");\n__webpack_require__(/*! ../modules/es6.math.acosh */ \"./node_modules/core-js/modules/es6.math.acosh.js\");\n__webpack_require__(/*! ../modules/es6.math.asinh */ \"./node_modules/core-js/modules/es6.math.asinh.js\");\n__webpack_require__(/*! ../modules/es6.math.atanh */ \"./node_modules/core-js/modules/es6.math.atanh.js\");\n__webpack_require__(/*! ../modules/es6.math.cbrt */ \"./node_modules/core-js/modules/es6.math.cbrt.js\");\n__webpack_require__(/*! ../modules/es6.math.clz32 */ \"./node_modules/core-js/modules/es6.math.clz32.js\");\n__webpack_require__(/*! ../modules/es6.math.cosh */ \"./node_modules/core-js/modules/es6.math.cosh.js\");\n__webpack_require__(/*! ../modules/es6.math.expm1 */ \"./node_modules/core-js/modules/es6.math.expm1.js\");\n__webpack_require__(/*! ../modules/es6.math.fround */ \"./node_modules/core-js/modules/es6.math.fround.js\");\n__webpack_require__(/*! ../modules/es6.math.hypot */ \"./node_modules/core-js/modules/es6.math.hypot.js\");\n__webpack_require__(/*! ../modules/es6.math.imul */ \"./node_modules/core-js/modules/es6.math.imul.js\");\n__webpack_require__(/*! ../modules/es6.math.log10 */ \"./node_modules/core-js/modules/es6.math.log10.js\");\n__webpack_require__(/*! ../modules/es6.math.log1p */ \"./node_modules/core-js/modules/es6.math.log1p.js\");\n__webpack_require__(/*! ../modules/es6.math.log2 */ \"./node_modules/core-js/modules/es6.math.log2.js\");\n__webpack_require__(/*! ../modules/es6.math.sign */ \"./node_modules/core-js/modules/es6.math.sign.js\");\n__webpack_require__(/*! ../modules/es6.math.sinh */ \"./node_modules/core-js/modules/es6.math.sinh.js\");\n__webpack_require__(/*! ../modules/es6.math.tanh */ \"./node_modules/core-js/modules/es6.math.tanh.js\");\n__webpack_require__(/*! ../modules/es6.math.trunc */ \"./node_modules/core-js/modules/es6.math.trunc.js\");\n__webpack_require__(/*! ../modules/es6.string.from-code-point */ \"./node_modules/core-js/modules/es6.string.from-code-point.js\");\n__webpack_require__(/*! ../modules/es6.string.raw */ \"./node_modules/core-js/modules/es6.string.raw.js\");\n__webpack_require__(/*! ../modules/es6.string.trim */ \"./node_modules/core-js/modules/es6.string.trim.js\");\n__webpack_require__(/*! ../modules/es6.string.iterator */ \"./node_modules/core-js/modules/es6.string.iterator.js\");\n__webpack_require__(/*! ../modules/es6.string.code-point-at */ \"./node_modules/core-js/modules/es6.string.code-point-at.js\");\n__webpack_require__(/*! ../modules/es6.string.ends-with */ \"./node_modules/core-js/modules/es6.string.ends-with.js\");\n__webpack_require__(/*! ../modules/es6.string.includes */ \"./node_modules/core-js/modules/es6.string.includes.js\");\n__webpack_require__(/*! ../modules/es6.string.repeat */ \"./node_modules/core-js/modules/es6.string.repeat.js\");\n__webpack_require__(/*! ../modules/es6.string.starts-with */ \"./node_modules/core-js/modules/es6.string.starts-with.js\");\n__webpack_require__(/*! ../modules/es6.string.anchor */ \"./node_modules/core-js/modules/es6.string.anchor.js\");\n__webpack_require__(/*! ../modules/es6.string.big */ \"./node_modules/core-js/modules/es6.string.big.js\");\n__webpack_require__(/*! ../modules/es6.string.blink */ \"./node_modules/core-js/modules/es6.string.blink.js\");\n__webpack_require__(/*! ../modules/es6.string.bold */ \"./node_modules/core-js/modules/es6.string.bold.js\");\n__webpack_require__(/*! ../modules/es6.string.fixed */ \"./node_modules/core-js/modules/es6.string.fixed.js\");\n__webpack_require__(/*! ../modules/es6.string.fontcolor */ \"./node_modules/core-js/modules/es6.string.fontcolor.js\");\n__webpack_require__(/*! ../modules/es6.string.fontsize */ \"./node_modules/core-js/modules/es6.string.fontsize.js\");\n__webpack_require__(/*! ../modules/es6.string.italics */ \"./node_modules/core-js/modules/es6.string.italics.js\");\n__webpack_require__(/*! ../modules/es6.string.link */ \"./node_modules/core-js/modules/es6.string.link.js\");\n__webpack_require__(/*! ../modules/es6.string.small */ \"./node_modules/core-js/modules/es6.string.small.js\");\n__webpack_require__(/*! ../modules/es6.string.strike */ \"./node_modules/core-js/modules/es6.string.strike.js\");\n__webpack_require__(/*! ../modules/es6.string.sub */ \"./node_modules/core-js/modules/es6.string.sub.js\");\n__webpack_require__(/*! ../modules/es6.string.sup */ \"./node_modules/core-js/modules/es6.string.sup.js\");\n__webpack_require__(/*! ../modules/es6.date.now */ \"./node_modules/core-js/modules/es6.date.now.js\");\n__webpack_require__(/*! ../modules/es6.date.to-json */ \"./node_modules/core-js/modules/es6.date.to-json.js\");\n__webpack_require__(/*! ../modules/es6.date.to-iso-string */ \"./node_modules/core-js/modules/es6.date.to-iso-string.js\");\n__webpack_require__(/*! ../modules/es6.date.to-string */ \"./node_modules/core-js/modules/es6.date.to-string.js\");\n__webpack_require__(/*! ../modules/es6.date.to-primitive */ \"./node_modules/core-js/modules/es6.date.to-primitive.js\");\n__webpack_require__(/*! ../modules/es6.array.is-array */ \"./node_modules/core-js/modules/es6.array.is-array.js\");\n__webpack_require__(/*! ../modules/es6.array.from */ \"./node_modules/core-js/modules/es6.array.from.js\");\n__webpack_require__(/*! ../modules/es6.array.of */ \"./node_modules/core-js/modules/es6.array.of.js\");\n__webpack_require__(/*! ../modules/es6.array.join */ \"./node_modules/core-js/modules/es6.array.join.js\");\n__webpack_require__(/*! ../modules/es6.array.slice */ \"./node_modules/core-js/modules/es6.array.slice.js\");\n__webpack_require__(/*! ../modules/es6.array.sort */ \"./node_modules/core-js/modules/es6.array.sort.js\");\n__webpack_require__(/*! ../modules/es6.array.for-each */ \"./node_modules/core-js/modules/es6.array.for-each.js\");\n__webpack_require__(/*! ../modules/es6.array.map */ \"./node_modules/core-js/modules/es6.array.map.js\");\n__webpack_require__(/*! ../modules/es6.array.filter */ \"./node_modules/core-js/modules/es6.array.filter.js\");\n__webpack_require__(/*! ../modules/es6.array.some */ \"./node_modules/core-js/modules/es6.array.some.js\");\n__webpack_require__(/*! ../modules/es6.array.every */ \"./node_modules/core-js/modules/es6.array.every.js\");\n__webpack_require__(/*! ../modules/es6.array.reduce */ \"./node_modules/core-js/modules/es6.array.reduce.js\");\n__webpack_require__(/*! ../modules/es6.array.reduce-right */ \"./node_modules/core-js/modules/es6.array.reduce-right.js\");\n__webpack_require__(/*! ../modules/es6.array.index-of */ \"./node_modules/core-js/modules/es6.array.index-of.js\");\n__webpack_require__(/*! ../modules/es6.array.last-index-of */ \"./node_modules/core-js/modules/es6.array.last-index-of.js\");\n__webpack_require__(/*! ../modules/es6.array.copy-within */ \"./node_modules/core-js/modules/es6.array.copy-within.js\");\n__webpack_require__(/*! ../modules/es6.array.fill */ \"./node_modules/core-js/modules/es6.array.fill.js\");\n__webpack_require__(/*! ../modules/es6.array.find */ \"./node_modules/core-js/modules/es6.array.find.js\");\n__webpack_require__(/*! ../modules/es6.array.find-index */ \"./node_modules/core-js/modules/es6.array.find-index.js\");\n__webpack_require__(/*! ../modules/es6.array.species */ \"./node_modules/core-js/modules/es6.array.species.js\");\n__webpack_require__(/*! ../modules/es6.array.iterator */ \"./node_modules/core-js/modules/es6.array.iterator.js\");\n__webpack_require__(/*! ../modules/es6.regexp.constructor */ \"./node_modules/core-js/modules/es6.regexp.constructor.js\");\n__webpack_require__(/*! ../modules/es6.regexp.exec */ \"./node_modules/core-js/modules/es6.regexp.exec.js\");\n__webpack_require__(/*! ../modules/es6.regexp.to-string */ \"./node_modules/core-js/modules/es6.regexp.to-string.js\");\n__webpack_require__(/*! ../modules/es6.regexp.flags */ \"./node_modules/core-js/modules/es6.regexp.flags.js\");\n__webpack_require__(/*! ../modules/es6.regexp.match */ \"./node_modules/core-js/modules/es6.regexp.match.js\");\n__webpack_require__(/*! ../modules/es6.regexp.replace */ \"./node_modules/core-js/modules/es6.regexp.replace.js\");\n__webpack_require__(/*! ../modules/es6.regexp.search */ \"./node_modules/core-js/modules/es6.regexp.search.js\");\n__webpack_require__(/*! ../modules/es6.regexp.split */ \"./node_modules/core-js/modules/es6.regexp.split.js\");\n__webpack_require__(/*! ../modules/es6.promise */ \"./node_modules/core-js/modules/es6.promise.js\");\n__webpack_require__(/*! ../modules/es6.map */ \"./node_modules/core-js/modules/es6.map.js\");\n__webpack_require__(/*! ../modules/es6.set */ \"./node_modules/core-js/modules/es6.set.js\");\n__webpack_require__(/*! ../modules/es6.weak-map */ \"./node_modules/core-js/modules/es6.weak-map.js\");\n__webpack_require__(/*! ../modules/es6.weak-set */ \"./node_modules/core-js/modules/es6.weak-set.js\");\n__webpack_require__(/*! ../modules/es6.typed.array-buffer */ \"./node_modules/core-js/modules/es6.typed.array-buffer.js\");\n__webpack_require__(/*! ../modules/es6.typed.data-view */ \"./node_modules/core-js/modules/es6.typed.data-view.js\");\n__webpack_require__(/*! ../modules/es6.typed.int8-array */ \"./node_modules/core-js/modules/es6.typed.int8-array.js\");\n__webpack_require__(/*! ../modules/es6.typed.uint8-array */ \"./node_modules/core-js/modules/es6.typed.uint8-array.js\");\n__webpack_require__(/*! ../modules/es6.typed.uint8-clamped-array */ \"./node_modules/core-js/modules/es6.typed.uint8-clamped-array.js\");\n__webpack_require__(/*! ../modules/es6.typed.int16-array */ \"./node_modules/core-js/modules/es6.typed.int16-array.js\");\n__webpack_require__(/*! ../modules/es6.typed.uint16-array */ \"./node_modules/core-js/modules/es6.typed.uint16-array.js\");\n__webpack_require__(/*! ../modules/es6.typed.int32-array */ \"./node_modules/core-js/modules/es6.typed.int32-array.js\");\n__webpack_require__(/*! ../modules/es6.typed.uint32-array */ \"./node_modules/core-js/modules/es6.typed.uint32-array.js\");\n__webpack_require__(/*! ../modules/es6.typed.float32-array */ \"./node_modules/core-js/modules/es6.typed.float32-array.js\");\n__webpack_require__(/*! ../modules/es6.typed.float64-array */ \"./node_modules/core-js/modules/es6.typed.float64-array.js\");\n__webpack_require__(/*! ../modules/es6.reflect.apply */ \"./node_modules/core-js/modules/es6.reflect.apply.js\");\n__webpack_require__(/*! ../modules/es6.reflect.construct */ \"./node_modules/core-js/modules/es6.reflect.construct.js\");\n__webpack_require__(/*! ../modules/es6.reflect.define-property */ \"./node_modules/core-js/modules/es6.reflect.define-property.js\");\n__webpack_require__(/*! ../modules/es6.reflect.delete-property */ \"./node_modules/core-js/modules/es6.reflect.delete-property.js\");\n__webpack_require__(/*! ../modules/es6.reflect.enumerate */ \"./node_modules/core-js/modules/es6.reflect.enumerate.js\");\n__webpack_require__(/*! ../modules/es6.reflect.get */ \"./node_modules/core-js/modules/es6.reflect.get.js\");\n__webpack_require__(/*! ../modules/es6.reflect.get-own-property-descriptor */ \"./node_modules/core-js/modules/es6.reflect.get-own-property-descriptor.js\");\n__webpack_require__(/*! ../modules/es6.reflect.get-prototype-of */ \"./node_modules/core-js/modules/es6.reflect.get-prototype-of.js\");\n__webpack_require__(/*! ../modules/es6.reflect.has */ \"./node_modules/core-js/modules/es6.reflect.has.js\");\n__webpack_require__(/*! ../modules/es6.reflect.is-extensible */ \"./node_modules/core-js/modules/es6.reflect.is-extensible.js\");\n__webpack_require__(/*! ../modules/es6.reflect.own-keys */ \"./node_modules/core-js/modules/es6.reflect.own-keys.js\");\n__webpack_require__(/*! ../modules/es6.reflect.prevent-extensions */ \"./node_modules/core-js/modules/es6.reflect.prevent-extensions.js\");\n__webpack_require__(/*! ../modules/es6.reflect.set */ \"./node_modules/core-js/modules/es6.reflect.set.js\");\n__webpack_require__(/*! ../modules/es6.reflect.set-prototype-of */ \"./node_modules/core-js/modules/es6.reflect.set-prototype-of.js\");\nmodule.exports = __webpack_require__(/*! ../modules/_core */ \"./node_modules/core-js/modules/_core.js\");\n\n\n//# sourceURL=webpack:///./node_modules/core-js/es6/index.js?");

/***/ }),

/***/ "./node_modules/core-js/fn/array/flat-map.js":
/*!***************************************************!*\
  !*** ./node_modules/core-js/fn/array/flat-map.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("__webpack_require__(/*! ../../modules/es7.array.flat-map */ \"./node_modules/core-js/modules/es7.array.flat-map.js\");\nmodule.exports = __webpack_require__(/*! ../../modules/_core */ \"./node_modules/core-js/modules/_core.js\").Array.flatMap;\n\n\n//# sourceURL=webpack:///./node_modules/core-js/fn/array/flat-map.js?");

/***/ }),

/***/ "./node_modules/core-js/fn/array/includes.js":
/*!***************************************************!*\
  !*** ./node_modules/core-js/fn/array/includes.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("__webpack_require__(/*! ../../modules/es7.array.includes */ \"./node_modules/core-js/modules/es7.array.includes.js\");\nmodule.exports = __webpack_require__(/*! ../../modules/_core */ \"./node_modules/core-js/modules/_core.js\").Array.includes;\n\n\n//# sourceURL=webpack:///./node_modules/core-js/fn/array/includes.js?");

/***/ }),

/***/ "./node_modules/core-js/fn/object/entries.js":
/*!***************************************************!*\
  !*** ./node_modules/core-js/fn/object/entries.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("__webpack_require__(/*! ../../modules/es7.object.entries */ \"./node_modules/core-js/modules/es7.object.entries.js\");\nmodule.exports = __webpack_require__(/*! ../../modules/_core */ \"./node_modules/core-js/modules/_core.js\").Object.entries;\n\n\n//# sourceURL=webpack:///./node_modules/core-js/fn/object/entries.js?");

/***/ }),

/***/ "./node_modules/core-js/fn/object/get-own-property-descriptors.js":
/*!************************************************************************!*\
  !*** ./node_modules/core-js/fn/object/get-own-property-descriptors.js ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("__webpack_require__(/*! ../../modules/es7.object.get-own-property-descriptors */ \"./node_modules/core-js/modules/es7.object.get-own-property-descriptors.js\");\nmodule.exports = __webpack_require__(/*! ../../modules/_core */ \"./node_modules/core-js/modules/_core.js\").Object.getOwnPropertyDescriptors;\n\n\n//# sourceURL=webpack:///./node_modules/core-js/fn/object/get-own-property-descriptors.js?");

/***/ }),

/***/ "./node_modules/core-js/fn/object/values.js":
/*!**************************************************!*\
  !*** ./node_modules/core-js/fn/object/values.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("__webpack_require__(/*! ../../modules/es7.object.values */ \"./node_modules/core-js/modules/es7.object.values.js\");\nmodule.exports = __webpack_require__(/*! ../../modules/_core */ \"./node_modules/core-js/modules/_core.js\").Object.values;\n\n\n//# sourceURL=webpack:///./node_modules/core-js/fn/object/values.js?");

/***/ }),

/***/ "./node_modules/core-js/fn/promise/finally.js":
/*!****************************************************!*\
  !*** ./node_modules/core-js/fn/promise/finally.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n__webpack_require__(/*! ../../modules/es6.promise */ \"./node_modules/core-js/modules/es6.promise.js\");\n__webpack_require__(/*! ../../modules/es7.promise.finally */ \"./node_modules/core-js/modules/es7.promise.finally.js\");\nmodule.exports = __webpack_require__(/*! ../../modules/_core */ \"./node_modules/core-js/modules/_core.js\").Promise['finally'];\n\n\n//# sourceURL=webpack:///./node_modules/core-js/fn/promise/finally.js?");

/***/ }),

/***/ "./node_modules/core-js/fn/string/pad-end.js":
/*!***************************************************!*\
  !*** ./node_modules/core-js/fn/string/pad-end.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("__webpack_require__(/*! ../../modules/es7.string.pad-end */ \"./node_modules/core-js/modules/es7.string.pad-end.js\");\nmodule.exports = __webpack_require__(/*! ../../modules/_core */ \"./node_modules/core-js/modules/_core.js\").String.padEnd;\n\n\n//# sourceURL=webpack:///./node_modules/core-js/fn/string/pad-end.js?");

/***/ }),

/***/ "./node_modules/core-js/fn/string/pad-start.js":
/*!*****************************************************!*\
  !*** ./node_modules/core-js/fn/string/pad-start.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("__webpack_require__(/*! ../../modules/es7.string.pad-start */ \"./node_modules/core-js/modules/es7.string.pad-start.js\");\nmodule.exports = __webpack_require__(/*! ../../modules/_core */ \"./node_modules/core-js/modules/_core.js\").String.padStart;\n\n\n//# sourceURL=webpack:///./node_modules/core-js/fn/string/pad-start.js?");

/***/ }),

/***/ "./node_modules/core-js/fn/string/trim-end.js":
/*!****************************************************!*\
  !*** ./node_modules/core-js/fn/string/trim-end.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("__webpack_require__(/*! ../../modules/es7.string.trim-right */ \"./node_modules/core-js/modules/es7.string.trim-right.js\");\nmodule.exports = __webpack_require__(/*! ../../modules/_core */ \"./node_modules/core-js/modules/_core.js\").String.trimRight;\n\n\n//# sourceURL=webpack:///./node_modules/core-js/fn/string/trim-end.js?");

/***/ }),

/***/ "./node_modules/core-js/fn/string/trim-start.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/fn/string/trim-start.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("__webpack_require__(/*! ../../modules/es7.string.trim-left */ \"./node_modules/core-js/modules/es7.string.trim-left.js\");\nmodule.exports = __webpack_require__(/*! ../../modules/_core */ \"./node_modules/core-js/modules/_core.js\").String.trimLeft;\n\n\n//# sourceURL=webpack:///./node_modules/core-js/fn/string/trim-start.js?");

/***/ }),

/***/ "./node_modules/core-js/fn/symbol/async-iterator.js":
/*!**********************************************************!*\
  !*** ./node_modules/core-js/fn/symbol/async-iterator.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("__webpack_require__(/*! ../../modules/es7.symbol.async-iterator */ \"./node_modules/core-js/modules/es7.symbol.async-iterator.js\");\nmodule.exports = __webpack_require__(/*! ../../modules/_wks-ext */ \"./node_modules/core-js/modules/_wks-ext.js\").f('asyncIterator');\n\n\n//# sourceURL=webpack:///./node_modules/core-js/fn/symbol/async-iterator.js?");

/***/ }),

/***/ "./node_modules/core-js/library/fn/global.js":
/*!***************************************************!*\
  !*** ./node_modules/core-js/library/fn/global.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("__webpack_require__(/*! ../modules/es7.global */ \"./node_modules/core-js/library/modules/es7.global.js\");\nmodule.exports = __webpack_require__(/*! ../modules/_core */ \"./node_modules/core-js/library/modules/_core.js\").global;\n\n\n//# sourceURL=webpack:///./node_modules/core-js/library/fn/global.js?");

/***/ }),

/***/ "./node_modules/core-js/library/modules/_a-function.js":
/*!*************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_a-function.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = function (it) {\n  if (typeof it != 'function') throw TypeError(it + ' is not a function!');\n  return it;\n};\n\n\n//# sourceURL=webpack:///./node_modules/core-js/library/modules/_a-function.js?");

/***/ }),

/***/ "./node_modules/core-js/library/modules/_an-object.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_an-object.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var isObject = __webpack_require__(/*! ./_is-object */ \"./node_modules/core-js/library/modules/_is-object.js\");\nmodule.exports = function (it) {\n  if (!isObject(it)) throw TypeError(it + ' is not an object!');\n  return it;\n};\n\n\n//# sourceURL=webpack:///./node_modules/core-js/library/modules/_an-object.js?");

/***/ }),

/***/ "./node_modules/core-js/library/modules/_core.js":
/*!*******************************************************!*\
  !*** ./node_modules/core-js/library/modules/_core.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("var core = module.exports = { version: '2.6.11' };\nif (typeof __e == 'number') __e = core; // eslint-disable-line no-undef\n\n\n//# sourceURL=webpack:///./node_modules/core-js/library/modules/_core.js?");

/***/ }),

/***/ "./node_modules/core-js/library/modules/_ctx.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/library/modules/_ctx.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// optional / simple context binding\nvar aFunction = __webpack_require__(/*! ./_a-function */ \"./node_modules/core-js/library/modules/_a-function.js\");\nmodule.exports = function (fn, that, length) {\n  aFunction(fn);\n  if (that === undefined) return fn;\n  switch (length) {\n    case 1: return function (a) {\n      return fn.call(that, a);\n    };\n    case 2: return function (a, b) {\n      return fn.call(that, a, b);\n    };\n    case 3: return function (a, b, c) {\n      return fn.call(that, a, b, c);\n    };\n  }\n  return function (/* ...args */) {\n    return fn.apply(that, arguments);\n  };\n};\n\n\n//# sourceURL=webpack:///./node_modules/core-js/library/modules/_ctx.js?");

/***/ }),

/***/ "./node_modules/core-js/library/modules/_descriptors.js":
/*!**************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_descriptors.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// Thank's IE8 for his funny defineProperty\nmodule.exports = !__webpack_require__(/*! ./_fails */ \"./node_modules/core-js/library/modules/_fails.js\")(function () {\n  return Object.defineProperty({}, 'a', { get: function () { return 7; } }).a != 7;\n});\n\n\n//# sourceURL=webpack:///./node_modules/core-js/library/modules/_descriptors.js?");

/***/ }),

/***/ "./node_modules/core-js/library/modules/_dom-create.js":
/*!*************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_dom-create.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var isObject = __webpack_require__(/*! ./_is-object */ \"./node_modules/core-js/library/modules/_is-object.js\");\nvar document = __webpack_require__(/*! ./_global */ \"./node_modules/core-js/library/modules/_global.js\").document;\n// typeof document.createElement is 'object' in old IE\nvar is = isObject(document) && isObject(document.createElement);\nmodule.exports = function (it) {\n  return is ? document.createElement(it) : {};\n};\n\n\n//# sourceURL=webpack:///./node_modules/core-js/library/modules/_dom-create.js?");

/***/ }),

/***/ "./node_modules/core-js/library/modules/_export.js":
/*!*********************************************************!*\
  !*** ./node_modules/core-js/library/modules/_export.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var global = __webpack_require__(/*! ./_global */ \"./node_modules/core-js/library/modules/_global.js\");\nvar core = __webpack_require__(/*! ./_core */ \"./node_modules/core-js/library/modules/_core.js\");\nvar ctx = __webpack_require__(/*! ./_ctx */ \"./node_modules/core-js/library/modules/_ctx.js\");\nvar hide = __webpack_require__(/*! ./_hide */ \"./node_modules/core-js/library/modules/_hide.js\");\nvar has = __webpack_require__(/*! ./_has */ \"./node_modules/core-js/library/modules/_has.js\");\nvar PROTOTYPE = 'prototype';\n\nvar $export = function (type, name, source) {\n  var IS_FORCED = type & $export.F;\n  var IS_GLOBAL = type & $export.G;\n  var IS_STATIC = type & $export.S;\n  var IS_PROTO = type & $export.P;\n  var IS_BIND = type & $export.B;\n  var IS_WRAP = type & $export.W;\n  var exports = IS_GLOBAL ? core : core[name] || (core[name] = {});\n  var expProto = exports[PROTOTYPE];\n  var target = IS_GLOBAL ? global : IS_STATIC ? global[name] : (global[name] || {})[PROTOTYPE];\n  var key, own, out;\n  if (IS_GLOBAL) source = name;\n  for (key in source) {\n    // contains in native\n    own = !IS_FORCED && target && target[key] !== undefined;\n    if (own && has(exports, key)) continue;\n    // export native or passed\n    out = own ? target[key] : source[key];\n    // prevent global pollution for namespaces\n    exports[key] = IS_GLOBAL && typeof target[key] != 'function' ? source[key]\n    // bind timers to global for call from export context\n    : IS_BIND && own ? ctx(out, global)\n    // wrap global constructors for prevent change them in library\n    : IS_WRAP && target[key] == out ? (function (C) {\n      var F = function (a, b, c) {\n        if (this instanceof C) {\n          switch (arguments.length) {\n            case 0: return new C();\n            case 1: return new C(a);\n            case 2: return new C(a, b);\n          } return new C(a, b, c);\n        } return C.apply(this, arguments);\n      };\n      F[PROTOTYPE] = C[PROTOTYPE];\n      return F;\n    // make static versions for prototype methods\n    })(out) : IS_PROTO && typeof out == 'function' ? ctx(Function.call, out) : out;\n    // export proto methods to core.%CONSTRUCTOR%.methods.%NAME%\n    if (IS_PROTO) {\n      (exports.virtual || (exports.virtual = {}))[key] = out;\n      // export proto methods to core.%CONSTRUCTOR%.prototype.%NAME%\n      if (type & $export.R && expProto && !expProto[key]) hide(expProto, key, out);\n    }\n  }\n};\n// type bitmap\n$export.F = 1;   // forced\n$export.G = 2;   // global\n$export.S = 4;   // static\n$export.P = 8;   // proto\n$export.B = 16;  // bind\n$export.W = 32;  // wrap\n$export.U = 64;  // safe\n$export.R = 128; // real proto method for `library`\nmodule.exports = $export;\n\n\n//# sourceURL=webpack:///./node_modules/core-js/library/modules/_export.js?");

/***/ }),

/***/ "./node_modules/core-js/library/modules/_fails.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js/library/modules/_fails.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = function (exec) {\n  try {\n    return !!exec();\n  } catch (e) {\n    return true;\n  }\n};\n\n\n//# sourceURL=webpack:///./node_modules/core-js/library/modules/_fails.js?");

/***/ }),

/***/ "./node_modules/core-js/library/modules/_global.js":
/*!*********************************************************!*\
  !*** ./node_modules/core-js/library/modules/_global.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028\nvar global = module.exports = typeof window != 'undefined' && window.Math == Math\n  ? window : typeof self != 'undefined' && self.Math == Math ? self\n  // eslint-disable-next-line no-new-func\n  : Function('return this')();\nif (typeof __g == 'number') __g = global; // eslint-disable-line no-undef\n\n\n//# sourceURL=webpack:///./node_modules/core-js/library/modules/_global.js?");

/***/ }),

/***/ "./node_modules/core-js/library/modules/_has.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/library/modules/_has.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("var hasOwnProperty = {}.hasOwnProperty;\nmodule.exports = function (it, key) {\n  return hasOwnProperty.call(it, key);\n};\n\n\n//# sourceURL=webpack:///./node_modules/core-js/library/modules/_has.js?");

/***/ }),

/***/ "./node_modules/core-js/library/modules/_hide.js":
/*!*******************************************************!*\
  !*** ./node_modules/core-js/library/modules/_hide.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var dP = __webpack_require__(/*! ./_object-dp */ \"./node_modules/core-js/library/modules/_object-dp.js\");\nvar createDesc = __webpack_require__(/*! ./_property-desc */ \"./node_modules/core-js/library/modules/_property-desc.js\");\nmodule.exports = __webpack_require__(/*! ./_descriptors */ \"./node_modules/core-js/library/modules/_descriptors.js\") ? function (object, key, value) {\n  return dP.f(object, key, createDesc(1, value));\n} : function (object, key, value) {\n  object[key] = value;\n  return object;\n};\n\n\n//# sourceURL=webpack:///./node_modules/core-js/library/modules/_hide.js?");

/***/ }),

/***/ "./node_modules/core-js/library/modules/_ie8-dom-define.js":
/*!*****************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_ie8-dom-define.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = !__webpack_require__(/*! ./_descriptors */ \"./node_modules/core-js/library/modules/_descriptors.js\") && !__webpack_require__(/*! ./_fails */ \"./node_modules/core-js/library/modules/_fails.js\")(function () {\n  return Object.defineProperty(__webpack_require__(/*! ./_dom-create */ \"./node_modules/core-js/library/modules/_dom-create.js\")('div'), 'a', { get: function () { return 7; } }).a != 7;\n});\n\n\n//# sourceURL=webpack:///./node_modules/core-js/library/modules/_ie8-dom-define.js?");

/***/ }),

/***/ "./node_modules/core-js/library/modules/_is-object.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_is-object.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = function (it) {\n  return typeof it === 'object' ? it !== null : typeof it === 'function';\n};\n\n\n//# sourceURL=webpack:///./node_modules/core-js/library/modules/_is-object.js?");

/***/ }),

/***/ "./node_modules/core-js/library/modules/_object-dp.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_object-dp.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var anObject = __webpack_require__(/*! ./_an-object */ \"./node_modules/core-js/library/modules/_an-object.js\");\nvar IE8_DOM_DEFINE = __webpack_require__(/*! ./_ie8-dom-define */ \"./node_modules/core-js/library/modules/_ie8-dom-define.js\");\nvar toPrimitive = __webpack_require__(/*! ./_to-primitive */ \"./node_modules/core-js/library/modules/_to-primitive.js\");\nvar dP = Object.defineProperty;\n\nexports.f = __webpack_require__(/*! ./_descriptors */ \"./node_modules/core-js/library/modules/_descriptors.js\") ? Object.defineProperty : function defineProperty(O, P, Attributes) {\n  anObject(O);\n  P = toPrimitive(P, true);\n  anObject(Attributes);\n  if (IE8_DOM_DEFINE) try {\n    return dP(O, P, Attributes);\n  } catch (e) { /* empty */ }\n  if ('get' in Attributes || 'set' in Attributes) throw TypeError('Accessors not supported!');\n  if ('value' in Attributes) O[P] = Attributes.value;\n  return O;\n};\n\n\n//# sourceURL=webpack:///./node_modules/core-js/library/modules/_object-dp.js?");

/***/ }),

/***/ "./node_modules/core-js/library/modules/_property-desc.js":
/*!****************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_property-desc.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = function (bitmap, value) {\n  return {\n    enumerable: !(bitmap & 1),\n    configurable: !(bitmap & 2),\n    writable: !(bitmap & 4),\n    value: value\n  };\n};\n\n\n//# sourceURL=webpack:///./node_modules/core-js/library/modules/_property-desc.js?");

/***/ }),

/***/ "./node_modules/core-js/library/modules/_to-primitive.js":
/*!***************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_to-primitive.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// 7.1.1 ToPrimitive(input [, PreferredType])\nvar isObject = __webpack_require__(/*! ./_is-object */ \"./node_modules/core-js/library/modules/_is-object.js\");\n// instead of the ES6 spec version, we didn't implement @@toPrimitive case\n// and the second argument - flag - preferred type is a string\nmodule.exports = function (it, S) {\n  if (!isObject(it)) return it;\n  var fn, val;\n  if (S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;\n  if (typeof (fn = it.valueOf) == 'function' && !isObject(val = fn.call(it))) return val;\n  if (!S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;\n  throw TypeError(\"Can't convert object to primitive value\");\n};\n\n\n//# sourceURL=webpack:///./node_modules/core-js/library/modules/_to-primitive.js?");

/***/ }),

/***/ "./node_modules/core-js/library/modules/es7.global.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js/library/modules/es7.global.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// https://github.com/tc39/proposal-global\nvar $export = __webpack_require__(/*! ./_export */ \"./node_modules/core-js/library/modules/_export.js\");\n\n$export($export.G, { global: __webpack_require__(/*! ./_global */ \"./node_modules/core-js/library/modules/_global.js\") });\n\n\n//# sourceURL=webpack:///./node_modules/core-js/library/modules/es7.global.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/_a-function.js":
/*!*****************************************************!*\
  !*** ./node_modules/core-js/modules/_a-function.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = function (it) {\n  if (typeof it != 'function') throw TypeError(it + ' is not a function!');\n  return it;\n};\n\n\n//# sourceURL=webpack:///./node_modules/core-js/modules/_a-function.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/_a-number-value.js":
/*!*********************************************************!*\
  !*** ./node_modules/core-js/modules/_a-number-value.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var cof = __webpack_require__(/*! ./_cof */ \"./node_modules/core-js/modules/_cof.js\");\nmodule.exports = function (it, msg) {\n  if (typeof it != 'number' && cof(it) != 'Number') throw TypeError(msg);\n  return +it;\n};\n\n\n//# sourceURL=webpack:///./node_modules/core-js/modules/_a-number-value.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/_add-to-unscopables.js":
/*!*************************************************************!*\
  !*** ./node_modules/core-js/modules/_add-to-unscopables.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// 22.1.3.31 Array.prototype[@@unscopables]\nvar UNSCOPABLES = __webpack_require__(/*! ./_wks */ \"./node_modules/core-js/modules/_wks.js\")('unscopables');\nvar ArrayProto = Array.prototype;\nif (ArrayProto[UNSCOPABLES] == undefined) __webpack_require__(/*! ./_hide */ \"./node_modules/core-js/modules/_hide.js\")(ArrayProto, UNSCOPABLES, {});\nmodule.exports = function (key) {\n  ArrayProto[UNSCOPABLES][key] = true;\n};\n\n\n//# sourceURL=webpack:///./node_modules/core-js/modules/_add-to-unscopables.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/_advance-string-index.js":
/*!***************************************************************!*\
  !*** ./node_modules/core-js/modules/_advance-string-index.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar at = __webpack_require__(/*! ./_string-at */ \"./node_modules/core-js/modules/_string-at.js\")(true);\n\n // `AdvanceStringIndex` abstract operation\n// https://tc39.github.io/ecma262/#sec-advancestringindex\nmodule.exports = function (S, index, unicode) {\n  return index + (unicode ? at(S, index).length : 1);\n};\n\n\n//# sourceURL=webpack:///./node_modules/core-js/modules/_advance-string-index.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/_an-instance.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/modules/_an-instance.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = function (it, Constructor, name, forbiddenField) {\n  if (!(it instanceof Constructor) || (forbiddenField !== undefined && forbiddenField in it)) {\n    throw TypeError(name + ': incorrect invocation!');\n  } return it;\n};\n\n\n//# sourceURL=webpack:///./node_modules/core-js/modules/_an-instance.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/_an-object.js":
/*!****************************************************!*\
  !*** ./node_modules/core-js/modules/_an-object.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var isObject = __webpack_require__(/*! ./_is-object */ \"./node_modules/core-js/modules/_is-object.js\");\nmodule.exports = function (it) {\n  if (!isObject(it)) throw TypeError(it + ' is not an object!');\n  return it;\n};\n\n\n//# sourceURL=webpack:///./node_modules/core-js/modules/_an-object.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/_array-copy-within.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js/modules/_array-copy-within.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("// 22.1.3.3 Array.prototype.copyWithin(target, start, end = this.length)\n\nvar toObject = __webpack_require__(/*! ./_to-object */ \"./node_modules/core-js/modules/_to-object.js\");\nvar toAbsoluteIndex = __webpack_require__(/*! ./_to-absolute-index */ \"./node_modules/core-js/modules/_to-absolute-index.js\");\nvar toLength = __webpack_require__(/*! ./_to-length */ \"./node_modules/core-js/modules/_to-length.js\");\n\nmodule.exports = [].copyWithin || function copyWithin(target /* = 0 */, start /* = 0, end = @length */) {\n  var O = toObject(this);\n  var len = toLength(O.length);\n  var to = toAbsoluteIndex(target, len);\n  var from = toAbsoluteIndex(start, len);\n  var end = arguments.length > 2 ? arguments[2] : undefined;\n  var count = Math.min((end === undefined ? len : toAbsoluteIndex(end, len)) - from, len - to);\n  var inc = 1;\n  if (from < to && to < from + count) {\n    inc = -1;\n    from += count - 1;\n    to += count - 1;\n  }\n  while (count-- > 0) {\n    if (from in O) O[to] = O[from];\n    else delete O[to];\n    to += inc;\n    from += inc;\n  } return O;\n};\n\n\n//# sourceURL=webpack:///./node_modules/core-js/modules/_array-copy-within.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/_array-fill.js":
/*!*****************************************************!*\
  !*** ./node_modules/core-js/modules/_array-fill.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("// 22.1.3.6 Array.prototype.fill(value, start = 0, end = this.length)\n\nvar toObject = __webpack_require__(/*! ./_to-object */ \"./node_modules/core-js/modules/_to-object.js\");\nvar toAbsoluteIndex = __webpack_require__(/*! ./_to-absolute-index */ \"./node_modules/core-js/modules/_to-absolute-index.js\");\nvar toLength = __webpack_require__(/*! ./_to-length */ \"./node_modules/core-js/modules/_to-length.js\");\nmodule.exports = function fill(value /* , start = 0, end = @length */) {\n  var O = toObject(this);\n  var length = toLength(O.length);\n  var aLen = arguments.length;\n  var index = toAbsoluteIndex(aLen > 1 ? arguments[1] : undefined, length);\n  var end = aLen > 2 ? arguments[2] : undefined;\n  var endPos = end === undefined ? length : toAbsoluteIndex(end, length);\n  while (endPos > index) O[index++] = value;\n  return O;\n};\n\n\n//# sourceURL=webpack:///./node_modules/core-js/modules/_array-fill.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/_array-includes.js":
/*!*********************************************************!*\
  !*** ./node_modules/core-js/modules/_array-includes.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// false -> Array#indexOf\n// true  -> Array#includes\nvar toIObject = __webpack_require__(/*! ./_to-iobject */ \"./node_modules/core-js/modules/_to-iobject.js\");\nvar toLength = __webpack_require__(/*! ./_to-length */ \"./node_modules/core-js/modules/_to-length.js\");\nvar toAbsoluteIndex = __webpack_require__(/*! ./_to-absolute-index */ \"./node_modules/core-js/modules/_to-absolute-index.js\");\nmodule.exports = function (IS_INCLUDES) {\n  return function ($this, el, fromIndex) {\n    var O = toIObject($this);\n    var length = toLength(O.length);\n    var index = toAbsoluteIndex(fromIndex, length);\n    var value;\n    // Array#includes uses SameValueZero equality algorithm\n    // eslint-disable-next-line no-self-compare\n    if (IS_INCLUDES && el != el) while (length > index) {\n      value = O[index++];\n      // eslint-disable-next-line no-self-compare\n      if (value != value) return true;\n    // Array#indexOf ignores holes, Array#includes - not\n    } else for (;length > index; index++) if (IS_INCLUDES || index in O) {\n      if (O[index] === el) return IS_INCLUDES || index || 0;\n    } return !IS_INCLUDES && -1;\n  };\n};\n\n\n//# sourceURL=webpack:///./node_modules/core-js/modules/_array-includes.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/_array-methods.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js/modules/_array-methods.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// 0 -> Array#forEach\n// 1 -> Array#map\n// 2 -> Array#filter\n// 3 -> Array#some\n// 4 -> Array#every\n// 5 -> Array#find\n// 6 -> Array#findIndex\nvar ctx = __webpack_require__(/*! ./_ctx */ \"./node_modules/core-js/modules/_ctx.js\");\nvar IObject = __webpack_require__(/*! ./_iobject */ \"./node_modules/core-js/modules/_iobject.js\");\nvar toObject = __webpack_require__(/*! ./_to-object */ \"./node_modules/core-js/modules/_to-object.js\");\nvar toLength = __webpack_require__(/*! ./_to-length */ \"./node_modules/core-js/modules/_to-length.js\");\nvar asc = __webpack_require__(/*! ./_array-species-create */ \"./node_modules/core-js/modules/_array-species-create.js\");\nmodule.exports = function (TYPE, $create) {\n  var IS_MAP = TYPE == 1;\n  var IS_FILTER = TYPE == 2;\n  var IS_SOME = TYPE == 3;\n  var IS_EVERY = TYPE == 4;\n  var IS_FIND_INDEX = TYPE == 6;\n  var NO_HOLES = TYPE == 5 || IS_FIND_INDEX;\n  var create = $create || asc;\n  return function ($this, callbackfn, that) {\n    var O = toObject($this);\n    var self = IObject(O);\n    var f = ctx(callbackfn, that, 3);\n    var length = toLength(self.length);\n    var index = 0;\n    var result = IS_MAP ? create($this, length) : IS_FILTER ? create($this, 0) : undefined;\n    var val, res;\n    for (;length > index; index++) if (NO_HOLES || index in self) {\n      val = self[index];\n      res = f(val, index, O);\n      if (TYPE) {\n        if (IS_MAP) result[index] = res;   // map\n        else if (res) switch (TYPE) {\n          case 3: return true;             // some\n          case 5: return val;              // find\n          case 6: return index;            // findIndex\n          case 2: result.push(val);        // filter\n        } else if (IS_EVERY) return false; // every\n      }\n    }\n    return IS_FIND_INDEX ? -1 : IS_SOME || IS_EVERY ? IS_EVERY : result;\n  };\n};\n\n\n//# sourceURL=webpack:///./node_modules/core-js/modules/_array-methods.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/_array-reduce.js":
/*!*******************************************************!*\
  !*** ./node_modules/core-js/modules/_array-reduce.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var aFunction = __webpack_require__(/*! ./_a-function */ \"./node_modules/core-js/modules/_a-function.js\");\nvar toObject = __webpack_require__(/*! ./_to-object */ \"./node_modules/core-js/modules/_to-object.js\");\nvar IObject = __webpack_require__(/*! ./_iobject */ \"./node_modules/core-js/modules/_iobject.js\");\nvar toLength = __webpack_require__(/*! ./_to-length */ \"./node_modules/core-js/modules/_to-length.js\");\n\nmodule.exports = function (that, callbackfn, aLen, memo, isRight) {\n  aFunction(callbackfn);\n  var O = toObject(that);\n  var self = IObject(O);\n  var length = toLength(O.length);\n  var index = isRight ? length - 1 : 0;\n  var i = isRight ? -1 : 1;\n  if (aLen < 2) for (;;) {\n    if (index in self) {\n      memo = self[index];\n      index += i;\n      break;\n    }\n    index += i;\n    if (isRight ? index < 0 : length <= index) {\n      throw TypeError('Reduce of empty array with no initial value');\n    }\n  }\n  for (;isRight ? index >= 0 : length > index; index += i) if (index in self) {\n    memo = callbackfn(memo, self[index], index, O);\n  }\n  return memo;\n};\n\n\n//# sourceURL=webpack:///./node_modules/core-js/modules/_array-reduce.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/_array-species-constructor.js":
/*!********************************************************************!*\
  !*** ./node_modules/core-js/modules/_array-species-constructor.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var isObject = __webpack_require__(/*! ./_is-object */ \"./node_modules/core-js/modules/_is-object.js\");\nvar isArray = __webpack_require__(/*! ./_is-array */ \"./node_modules/core-js/modules/_is-array.js\");\nvar SPECIES = __webpack_require__(/*! ./_wks */ \"./node_modules/core-js/modules/_wks.js\")('species');\n\nmodule.exports = function (original) {\n  var C;\n  if (isArray(original)) {\n    C = original.constructor;\n    // cross-realm fallback\n    if (typeof C == 'function' && (C === Array || isArray(C.prototype))) C = undefined;\n    if (isObject(C)) {\n      C = C[SPECIES];\n      if (C === null) C = undefined;\n    }\n  } return C === undefined ? Array : C;\n};\n\n\n//# sourceURL=webpack:///./node_modules/core-js/modules/_array-species-constructor.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/_array-species-create.js":
/*!***************************************************************!*\
  !*** ./node_modules/core-js/modules/_array-species-create.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// 9.4.2.3 ArraySpeciesCreate(originalArray, length)\nvar speciesConstructor = __webpack_require__(/*! ./_array-species-constructor */ \"./node_modules/core-js/modules/_array-species-constructor.js\");\n\nmodule.exports = function (original, length) {\n  return new (speciesConstructor(original))(length);\n};\n\n\n//# sourceURL=webpack:///./node_modules/core-js/modules/_array-species-create.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/_bind.js":
/*!***********************************************!*\
  !*** ./node_modules/core-js/modules/_bind.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar aFunction = __webpack_require__(/*! ./_a-function */ \"./node_modules/core-js/modules/_a-function.js\");\nvar isObject = __webpack_require__(/*! ./_is-object */ \"./node_modules/core-js/modules/_is-object.js\");\nvar invoke = __webpack_require__(/*! ./_invoke */ \"./node_modules/core-js/modules/_invoke.js\");\nvar arraySlice = [].slice;\nvar factories = {};\n\nvar construct = function (F, len, args) {\n  if (!(len in factories)) {\n    for (var n = [], i = 0; i < len; i++) n[i] = 'a[' + i + ']';\n    // eslint-disable-next-line no-new-func\n    factories[len] = Function('F,a', 'return new F(' + n.join(',') + ')');\n  } return factories[len](F, args);\n};\n\nmodule.exports = Function.bind || function bind(that /* , ...args */) {\n  var fn = aFunction(this);\n  var partArgs = arraySlice.call(arguments, 1);\n  var bound = function (/* args... */) {\n    var args = partArgs.concat(arraySlice.call(arguments));\n    return this instanceof bound ? construct(fn, args.length, args) : invoke(fn, args, that);\n  };\n  if (isObject(fn.prototype)) bound.prototype = fn.prototype;\n  return bound;\n};\n\n\n//# sourceURL=webpack:///./node_modules/core-js/modules/_bind.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/_classof.js":
/*!**************************************************!*\
  !*** ./node_modules/core-js/modules/_classof.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// getting tag from 19.1.3.6 Object.prototype.toString()\nvar cof = __webpack_require__(/*! ./_cof */ \"./node_modules/core-js/modules/_cof.js\");\nvar TAG = __webpack_require__(/*! ./_wks */ \"./node_modules/core-js/modules/_wks.js\")('toStringTag');\n// ES3 wrong here\nvar ARG = cof(function () { return arguments; }()) == 'Arguments';\n\n// fallback for IE11 Script Access Denied error\nvar tryGet = function (it, key) {\n  try {\n    return it[key];\n  } catch (e) { /* empty */ }\n};\n\nmodule.exports = function (it) {\n  var O, T, B;\n  return it === undefined ? 'Undefined' : it === null ? 'Null'\n    // @@toStringTag case\n    : typeof (T = tryGet(O = Object(it), TAG)) == 'string' ? T\n    // builtinTag case\n    : ARG ? cof(O)\n    // ES3 arguments fallback\n    : (B = cof(O)) == 'Object' && typeof O.callee == 'function' ? 'Arguments' : B;\n};\n\n\n//# sourceURL=webpack:///./node_modules/core-js/modules/_classof.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/_cof.js":
/*!**********************************************!*\
  !*** ./node_modules/core-js/modules/_cof.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("var toString = {}.toString;\n\nmodule.exports = function (it) {\n  return toString.call(it).slice(8, -1);\n};\n\n\n//# sourceURL=webpack:///./node_modules/core-js/modules/_cof.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/_collection-strong.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js/modules/_collection-strong.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar dP = __webpack_require__(/*! ./_object-dp */ \"./node_modules/core-js/modules/_object-dp.js\").f;\nvar create = __webpack_require__(/*! ./_object-create */ \"./node_modules/core-js/modules/_object-create.js\");\nvar redefineAll = __webpack_require__(/*! ./_redefine-all */ \"./node_modules/core-js/modules/_redefine-all.js\");\nvar ctx = __webpack_require__(/*! ./_ctx */ \"./node_modules/core-js/modules/_ctx.js\");\nvar anInstance = __webpack_require__(/*! ./_an-instance */ \"./node_modules/core-js/modules/_an-instance.js\");\nvar forOf = __webpack_require__(/*! ./_for-of */ \"./node_modules/core-js/modules/_for-of.js\");\nvar $iterDefine = __webpack_require__(/*! ./_iter-define */ \"./node_modules/core-js/modules/_iter-define.js\");\nvar step = __webpack_require__(/*! ./_iter-step */ \"./node_modules/core-js/modules/_iter-step.js\");\nvar setSpecies = __webpack_require__(/*! ./_set-species */ \"./node_modules/core-js/modules/_set-species.js\");\nvar DESCRIPTORS = __webpack_require__(/*! ./_descriptors */ \"./node_modules/core-js/modules/_descriptors.js\");\nvar fastKey = __webpack_require__(/*! ./_meta */ \"./node_modules/core-js/modules/_meta.js\").fastKey;\nvar validate = __webpack_require__(/*! ./_validate-collection */ \"./node_modules/core-js/modules/_validate-collection.js\");\nvar SIZE = DESCRIPTORS ? '_s' : 'size';\n\nvar getEntry = function (that, key) {\n  // fast case\n  var index = fastKey(key);\n  var entry;\n  if (index !== 'F') return that._i[index];\n  // frozen object case\n  for (entry = that._f; entry; entry = entry.n) {\n    if (entry.k == key) return entry;\n  }\n};\n\nmodule.exports = {\n  getConstructor: function (wrapper, NAME, IS_MAP, ADDER) {\n    var C = wrapper(function (that, iterable) {\n      anInstance(that, C, NAME, '_i');\n      that._t = NAME;         // collection type\n      that._i = create(null); // index\n      that._f = undefined;    // first entry\n      that._l = undefined;    // last entry\n      that[SIZE] = 0;         // size\n      if (iterable != undefined) forOf(iterable, IS_MAP, that[ADDER], that);\n    });\n    redefineAll(C.prototype, {\n      // 23.1.3.1 Map.prototype.clear()\n      // 23.2.3.2 Set.prototype.clear()\n      clear: function clear() {\n        for (var that = validate(this, NAME), data = that._i, entry = that._f; entry; entry = entry.n) {\n          entry.r = true;\n          if (entry.p) entry.p = entry.p.n = undefined;\n          delete data[entry.i];\n        }\n        that._f = that._l = undefined;\n        that[SIZE] = 0;\n      },\n      // 23.1.3.3 Map.prototype.delete(key)\n      // 23.2.3.4 Set.prototype.delete(value)\n      'delete': function (key) {\n        var that = validate(this, NAME);\n        var entry = getEntry(that, key);\n        if (entry) {\n          var next = entry.n;\n          var prev = entry.p;\n          delete that._i[entry.i];\n          entry.r = true;\n          if (prev) prev.n = next;\n          if (next) next.p = prev;\n          if (that._f == entry) that._f = next;\n          if (that._l == entry) that._l = prev;\n          that[SIZE]--;\n        } return !!entry;\n      },\n      // 23.2.3.6 Set.prototype.forEach(callbackfn, thisArg = undefined)\n      // 23.1.3.5 Map.prototype.forEach(callbackfn, thisArg = undefined)\n      forEach: function forEach(callbackfn /* , that = undefined */) {\n        validate(this, NAME);\n        var f = ctx(callbackfn, arguments.length > 1 ? arguments[1] : undefined, 3);\n        var entry;\n        while (entry = entry ? entry.n : this._f) {\n          f(entry.v, entry.k, this);\n          // revert to the last existing entry\n          while (entry && entry.r) entry = entry.p;\n        }\n      },\n      // 23.1.3.7 Map.prototype.has(key)\n      // 23.2.3.7 Set.prototype.has(value)\n      has: function has(key) {\n        return !!getEntry(validate(this, NAME), key);\n      }\n    });\n    if (DESCRIPTORS) dP(C.prototype, 'size', {\n      get: function () {\n        return validate(this, NAME)[SIZE];\n      }\n    });\n    return C;\n  },\n  def: function (that, key, value) {\n    var entry = getEntry(that, key);\n    var prev, index;\n    // change existing entry\n    if (entry) {\n      entry.v = value;\n    // create new entry\n    } else {\n      that._l = entry = {\n        i: index = fastKey(key, true), // <- index\n        k: key,                        // <- key\n        v: value,                      // <- value\n        p: prev = that._l,             // <- previous entry\n        n: undefined,                  // <- next entry\n        r: false                       // <- removed\n      };\n      if (!that._f) that._f = entry;\n      if (prev) prev.n = entry;\n      that[SIZE]++;\n      // add to index\n      if (index !== 'F') that._i[index] = entry;\n    } return that;\n  },\n  getEntry: getEntry,\n  setStrong: function (C, NAME, IS_MAP) {\n    // add .keys, .values, .entries, [@@iterator]\n    // 23.1.3.4, 23.1.3.8, 23.1.3.11, 23.1.3.12, 23.2.3.5, 23.2.3.8, 23.2.3.10, 23.2.3.11\n    $iterDefine(C, NAME, function (iterated, kind) {\n      this._t = validate(iterated, NAME); // target\n      this._k = kind;                     // kind\n      this._l = undefined;                // previous\n    }, function () {\n      var that = this;\n      var kind = that._k;\n      var entry = that._l;\n      // revert to the last existing entry\n      while (entry && entry.r) entry = entry.p;\n      // get next entry\n      if (!that._t || !(that._l = entry = entry ? entry.n : that._t._f)) {\n        // or finish the iteration\n        that._t = undefined;\n        return step(1);\n      }\n      // return step by kind\n      if (kind == 'keys') return step(0, entry.k);\n      if (kind == 'values') return step(0, entry.v);\n      return step(0, [entry.k, entry.v]);\n    }, IS_MAP ? 'entries' : 'values', !IS_MAP, true);\n\n    // add [@@species], 23.1.2.2, 23.2.2.2\n    setSpecies(NAME);\n  }\n};\n\n\n//# sourceURL=webpack:///./node_modules/core-js/modules/_collection-strong.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/_collection-weak.js":
/*!**********************************************************!*\
  !*** ./node_modules/core-js/modules/_collection-weak.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar redefineAll = __webpack_require__(/*! ./_redefine-all */ \"./node_modules/core-js/modules/_redefine-all.js\");\nvar getWeak = __webpack_require__(/*! ./_meta */ \"./node_modules/core-js/modules/_meta.js\").getWeak;\nvar anObject = __webpack_require__(/*! ./_an-object */ \"./node_modules/core-js/modules/_an-object.js\");\nvar isObject = __webpack_require__(/*! ./_is-object */ \"./node_modules/core-js/modules/_is-object.js\");\nvar anInstance = __webpack_require__(/*! ./_an-instance */ \"./node_modules/core-js/modules/_an-instance.js\");\nvar forOf = __webpack_require__(/*! ./_for-of */ \"./node_modules/core-js/modules/_for-of.js\");\nvar createArrayMethod = __webpack_require__(/*! ./_array-methods */ \"./node_modules/core-js/modules/_array-methods.js\");\nvar $has = __webpack_require__(/*! ./_has */ \"./node_modules/core-js/modules/_has.js\");\nvar validate = __webpack_require__(/*! ./_validate-collection */ \"./node_modules/core-js/modules/_validate-collection.js\");\nvar arrayFind = createArrayMethod(5);\nvar arrayFindIndex = createArrayMethod(6);\nvar id = 0;\n\n// fallback for uncaught frozen keys\nvar uncaughtFrozenStore = function (that) {\n  return that._l || (that._l = new UncaughtFrozenStore());\n};\nvar UncaughtFrozenStore = function () {\n  this.a = [];\n};\nvar findUncaughtFrozen = function (store, key) {\n  return arrayFind(store.a, function (it) {\n    return it[0] === key;\n  });\n};\nUncaughtFrozenStore.prototype = {\n  get: function (key) {\n    var entry = findUncaughtFrozen(this, key);\n    if (entry) return entry[1];\n  },\n  has: function (key) {\n    return !!findUncaughtFrozen(this, key);\n  },\n  set: function (key, value) {\n    var entry = findUncaughtFrozen(this, key);\n    if (entry) entry[1] = value;\n    else this.a.push([key, value]);\n  },\n  'delete': function (key) {\n    var index = arrayFindIndex(this.a, function (it) {\n      return it[0] === key;\n    });\n    if (~index) this.a.splice(index, 1);\n    return !!~index;\n  }\n};\n\nmodule.exports = {\n  getConstructor: function (wrapper, NAME, IS_MAP, ADDER) {\n    var C = wrapper(function (that, iterable) {\n      anInstance(that, C, NAME, '_i');\n      that._t = NAME;      // collection type\n      that._i = id++;      // collection id\n      that._l = undefined; // leak store for uncaught frozen objects\n      if (iterable != undefined) forOf(iterable, IS_MAP, that[ADDER], that);\n    });\n    redefineAll(C.prototype, {\n      // 23.3.3.2 WeakMap.prototype.delete(key)\n      // 23.4.3.3 WeakSet.prototype.delete(value)\n      'delete': function (key) {\n        if (!isObject(key)) return false;\n        var data = getWeak(key);\n        if (data === true) return uncaughtFrozenStore(validate(this, NAME))['delete'](key);\n        return data && $has(data, this._i) && delete data[this._i];\n      },\n      // 23.3.3.4 WeakMap.prototype.has(key)\n      // 23.4.3.4 WeakSet.prototype.has(value)\n      has: function has(key) {\n        if (!isObject(key)) return false;\n        var data = getWeak(key);\n        if (data === true) return uncaughtFrozenStore(validate(this, NAME)).has(key);\n        return data && $has(data, this._i);\n      }\n    });\n    return C;\n  },\n  def: function (that, key, value) {\n    var data = getWeak(anObject(key), true);\n    if (data === true) uncaughtFrozenStore(that).set(key, value);\n    else data[that._i] = value;\n    return that;\n  },\n  ufstore: uncaughtFrozenStore\n};\n\n\n//# sourceURL=webpack:///./node_modules/core-js/modules/_collection-weak.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/_collection.js":
/*!*****************************************************!*\
  !*** ./node_modules/core-js/modules/_collection.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar global = __webpack_require__(/*! ./_global */ \"./node_modules/core-js/modules/_global.js\");\nvar $export = __webpack_require__(/*! ./_export */ \"./node_modules/core-js/modules/_export.js\");\nvar redefine = __webpack_require__(/*! ./_redefine */ \"./node_modules/core-js/modules/_redefine.js\");\nvar redefineAll = __webpack_require__(/*! ./_redefine-all */ \"./node_modules/core-js/modules/_redefine-all.js\");\nvar meta = __webpack_require__(/*! ./_meta */ \"./node_modules/core-js/modules/_meta.js\");\nvar forOf = __webpack_require__(/*! ./_for-of */ \"./node_modules/core-js/modules/_for-of.js\");\nvar anInstance = __webpack_require__(/*! ./_an-instance */ \"./node_modules/core-js/modules/_an-instance.js\");\nvar isObject = __webpack_require__(/*! ./_is-object */ \"./node_modules/core-js/modules/_is-object.js\");\nvar fails = __webpack_require__(/*! ./_fails */ \"./node_modules/core-js/modules/_fails.js\");\nvar $iterDetect = __webpack_require__(/*! ./_iter-detect */ \"./node_modules/core-js/modules/_iter-detect.js\");\nvar setToStringTag = __webpack_require__(/*! ./_set-to-string-tag */ \"./node_modules/core-js/modules/_set-to-string-tag.js\");\nvar inheritIfRequired = __webpack_require__(/*! ./_inherit-if-required */ \"./node_modules/core-js/modules/_inherit-if-required.js\");\n\nmodule.exports = function (NAME, wrapper, methods, common, IS_MAP, IS_WEAK) {\n  var Base = global[NAME];\n  var C = Base;\n  var ADDER = IS_MAP ? 'set' : 'add';\n  var proto = C && C.prototype;\n  var O = {};\n  var fixMethod = function (KEY) {\n    var fn = proto[KEY];\n    redefine(proto, KEY,\n      KEY == 'delete' ? function (a) {\n        return IS_WEAK && !isObject(a) ? false : fn.call(this, a === 0 ? 0 : a);\n      } : KEY == 'has' ? function has(a) {\n        return IS_WEAK && !isObject(a) ? false : fn.call(this, a === 0 ? 0 : a);\n      } : KEY == 'get' ? function get(a) {\n        return IS_WEAK && !isObject(a) ? undefined : fn.call(this, a === 0 ? 0 : a);\n      } : KEY == 'add' ? function add(a) { fn.call(this, a === 0 ? 0 : a); return this; }\n        : function set(a, b) { fn.call(this, a === 0 ? 0 : a, b); return this; }\n    );\n  };\n  if (typeof C != 'function' || !(IS_WEAK || proto.forEach && !fails(function () {\n    new C().entries().next();\n  }))) {\n    // create collection constructor\n    C = common.getConstructor(wrapper, NAME, IS_MAP, ADDER);\n    redefineAll(C.prototype, methods);\n    meta.NEED = true;\n  } else {\n    var instance = new C();\n    // early implementations not supports chaining\n    var HASNT_CHAINING = instance[ADDER](IS_WEAK ? {} : -0, 1) != instance;\n    // V8 ~  Chromium 40- weak-collections throws on primitives, but should return false\n    var THROWS_ON_PRIMITIVES = fails(function () { instance.has(1); });\n    // most early implementations doesn't supports iterables, most modern - not close it correctly\n    var ACCEPT_ITERABLES = $iterDetect(function (iter) { new C(iter); }); // eslint-disable-line no-new\n    // for early implementations -0 and +0 not the same\n    var BUGGY_ZERO = !IS_WEAK && fails(function () {\n      // V8 ~ Chromium 42- fails only with 5+ elements\n      var $instance = new C();\n      var index = 5;\n      while (index--) $instance[ADDER](index, index);\n      return !$instance.has(-0);\n    });\n    if (!ACCEPT_ITERABLES) {\n      C = wrapper(function (target, iterable) {\n        anInstance(target, C, NAME);\n        var that = inheritIfRequired(new Base(), target, C);\n        if (iterable != undefined) forOf(iterable, IS_MAP, that[ADDER], that);\n        return that;\n      });\n      C.prototype = proto;\n      proto.constructor = C;\n    }\n    if (THROWS_ON_PRIMITIVES || BUGGY_ZERO) {\n      fixMethod('delete');\n      fixMethod('has');\n      IS_MAP && fixMethod('get');\n    }\n    if (BUGGY_ZERO || HASNT_CHAINING) fixMethod(ADDER);\n    // weak collections should not contains .clear method\n    if (IS_WEAK && proto.clear) delete proto.clear;\n  }\n\n  setToStringTag(C, NAME);\n\n  O[NAME] = C;\n  $export($export.G + $export.W + $export.F * (C != Base), O);\n\n  if (!IS_WEAK) common.setStrong(C, NAME, IS_MAP);\n\n  return C;\n};\n\n\n//# sourceURL=webpack:///./node_modules/core-js/modules/_collection.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/_core.js":
/*!***********************************************!*\
  !*** ./node_modules/core-js/modules/_core.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("var core = module.exports = { version: '2.6.11' };\nif (typeof __e == 'number') __e = core; // eslint-disable-line no-undef\n\n\n//# sourceURL=webpack:///./node_modules/core-js/modules/_core.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/_create-property.js":
/*!**********************************************************!*\
  !*** ./node_modules/core-js/modules/_create-property.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar $defineProperty = __webpack_require__(/*! ./_object-dp */ \"./node_modules/core-js/modules/_object-dp.js\");\nvar createDesc = __webpack_require__(/*! ./_property-desc */ \"./node_modules/core-js/modules/_property-desc.js\");\n\nmodule.exports = function (object, index, value) {\n  if (index in object) $defineProperty.f(object, index, createDesc(0, value));\n  else object[index] = value;\n};\n\n\n//# sourceURL=webpack:///./node_modules/core-js/modules/_create-property.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/_ctx.js":
/*!**********************************************!*\
  !*** ./node_modules/core-js/modules/_ctx.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// optional / simple context binding\nvar aFunction = __webpack_require__(/*! ./_a-function */ \"./node_modules/core-js/modules/_a-function.js\");\nmodule.exports = function (fn, that, length) {\n  aFunction(fn);\n  if (that === undefined) return fn;\n  switch (length) {\n    case 1: return function (a) {\n      return fn.call(that, a);\n    };\n    case 2: return function (a, b) {\n      return fn.call(that, a, b);\n    };\n    case 3: return function (a, b, c) {\n      return fn.call(that, a, b, c);\n    };\n  }\n  return function (/* ...args */) {\n    return fn.apply(that, arguments);\n  };\n};\n\n\n//# sourceURL=webpack:///./node_modules/core-js/modules/_ctx.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/_date-to-iso-string.js":
/*!*************************************************************!*\
  !*** ./node_modules/core-js/modules/_date-to-iso-string.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n// 20.3.4.36 / 15.9.5.43 Date.prototype.toISOString()\nvar fails = __webpack_require__(/*! ./_fails */ \"./node_modules/core-js/modules/_fails.js\");\nvar getTime = Date.prototype.getTime;\nvar $toISOString = Date.prototype.toISOString;\n\nvar lz = function (num) {\n  return num > 9 ? num : '0' + num;\n};\n\n// PhantomJS / old WebKit has a broken implementations\nmodule.exports = (fails(function () {\n  return $toISOString.call(new Date(-5e13 - 1)) != '0385-07-25T07:06:39.999Z';\n}) || !fails(function () {\n  $toISOString.call(new Date(NaN));\n})) ? function toISOString() {\n  if (!isFinite(getTime.call(this))) throw RangeError('Invalid time value');\n  var d = this;\n  var y = d.getUTCFullYear();\n  var m = d.getUTCMilliseconds();\n  var s = y < 0 ? '-' : y > 9999 ? '+' : '';\n  return s + ('00000' + Math.abs(y)).slice(s ? -6 : -4) +\n    '-' + lz(d.getUTCMonth() + 1) + '-' + lz(d.getUTCDate()) +\n    'T' + lz(d.getUTCHours()) + ':' + lz(d.getUTCMinutes()) +\n    ':' + lz(d.getUTCSeconds()) + '.' + (m > 99 ? m : '0' + lz(m)) + 'Z';\n} : $toISOString;\n\n\n//# sourceURL=webpack:///./node_modules/core-js/modules/_date-to-iso-string.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/_date-to-primitive.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js/modules/_date-to-primitive.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar anObject = __webpack_require__(/*! ./_an-object */ \"./node_modules/core-js/modules/_an-object.js\");\nvar toPrimitive = __webpack_require__(/*! ./_to-primitive */ \"./node_modules/core-js/modules/_to-primitive.js\");\nvar NUMBER = 'number';\n\nmodule.exports = function (hint) {\n  if (hint !== 'string' && hint !== NUMBER && hint !== 'default') throw TypeError('Incorrect hint');\n  return toPrimitive(anObject(this), hint != NUMBER);\n};\n\n\n//# sourceURL=webpack:///./node_modules/core-js/modules/_date-to-primitive.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/_defined.js":
/*!**************************************************!*\
  !*** ./node_modules/core-js/modules/_defined.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// 7.2.1 RequireObjectCoercible(argument)\nmodule.exports = function (it) {\n  if (it == undefined) throw TypeError(\"Can't call method on  \" + it);\n  return it;\n};\n\n\n//# sourceURL=webpack:///./node_modules/core-js/modules/_defined.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/_descriptors.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/modules/_descriptors.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// Thank's IE8 for his funny defineProperty\nmodule.exports = !__webpack_require__(/*! ./_fails */ \"./node_modules/core-js/modules/_fails.js\")(function () {\n  return Object.defineProperty({}, 'a', { get: function () { return 7; } }).a != 7;\n});\n\n\n//# sourceURL=webpack:///./node_modules/core-js/modules/_descriptors.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/_dom-create.js":
/*!*****************************************************!*\
  !*** ./node_modules/core-js/modules/_dom-create.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var isObject = __webpack_require__(/*! ./_is-object */ \"./node_modules/core-js/modules/_is-object.js\");\nvar document = __webpack_require__(/*! ./_global */ \"./node_modules/core-js/modules/_global.js\").document;\n// typeof document.createElement is 'object' in old IE\nvar is = isObject(document) && isObject(document.createElement);\nmodule.exports = function (it) {\n  return is ? document.createElement(it) : {};\n};\n\n\n//# sourceURL=webpack:///./node_modules/core-js/modules/_dom-create.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/_enum-bug-keys.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js/modules/_enum-bug-keys.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// IE 8- don't enum bug keys\nmodule.exports = (\n  'constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf'\n).split(',');\n\n\n//# sourceURL=webpack:///./node_modules/core-js/modules/_enum-bug-keys.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/_enum-keys.js":
/*!****************************************************!*\
  !*** ./node_modules/core-js/modules/_enum-keys.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// all enumerable object keys, includes symbols\nvar getKeys = __webpack_require__(/*! ./_object-keys */ \"./node_modules/core-js/modules/_object-keys.js\");\nvar gOPS = __webpack_require__(/*! ./_object-gops */ \"./node_modules/core-js/modules/_object-gops.js\");\nvar pIE = __webpack_require__(/*! ./_object-pie */ \"./node_modules/core-js/modules/_object-pie.js\");\nmodule.exports = function (it) {\n  var result = getKeys(it);\n  var getSymbols = gOPS.f;\n  if (getSymbols) {\n    var symbols = getSymbols(it);\n    var isEnum = pIE.f;\n    var i = 0;\n    var key;\n    while (symbols.length > i) if (isEnum.call(it, key = symbols[i++])) result.push(key);\n  } return result;\n};\n\n\n//# sourceURL=webpack:///./node_modules/core-js/modules/_enum-keys.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/_export.js":
/*!*************************************************!*\
  !*** ./node_modules/core-js/modules/_export.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var global = __webpack_require__(/*! ./_global */ \"./node_modules/core-js/modules/_global.js\");\nvar core = __webpack_require__(/*! ./_core */ \"./node_modules/core-js/modules/_core.js\");\nvar hide = __webpack_require__(/*! ./_hide */ \"./node_modules/core-js/modules/_hide.js\");\nvar redefine = __webpack_require__(/*! ./_redefine */ \"./node_modules/core-js/modules/_redefine.js\");\nvar ctx = __webpack_require__(/*! ./_ctx */ \"./node_modules/core-js/modules/_ctx.js\");\nvar PROTOTYPE = 'prototype';\n\nvar $export = function (type, name, source) {\n  var IS_FORCED = type & $export.F;\n  var IS_GLOBAL = type & $export.G;\n  var IS_STATIC = type & $export.S;\n  var IS_PROTO = type & $export.P;\n  var IS_BIND = type & $export.B;\n  var target = IS_GLOBAL ? global : IS_STATIC ? global[name] || (global[name] = {}) : (global[name] || {})[PROTOTYPE];\n  var exports = IS_GLOBAL ? core : core[name] || (core[name] = {});\n  var expProto = exports[PROTOTYPE] || (exports[PROTOTYPE] = {});\n  var key, own, out, exp;\n  if (IS_GLOBAL) source = name;\n  for (key in source) {\n    // contains in native\n    own = !IS_FORCED && target && target[key] !== undefined;\n    // export native or passed\n    out = (own ? target : source)[key];\n    // bind timers to global for call from export context\n    exp = IS_BIND && own ? ctx(out, global) : IS_PROTO && typeof out == 'function' ? ctx(Function.call, out) : out;\n    // extend global\n    if (target) redefine(target, key, out, type & $export.U);\n    // export\n    if (exports[key] != out) hide(exports, key, exp);\n    if (IS_PROTO && expProto[key] != out) expProto[key] = out;\n  }\n};\nglobal.core = core;\n// type bitmap\n$export.F = 1;   // forced\n$export.G = 2;   // global\n$export.S = 4;   // static\n$export.P = 8;   // proto\n$export.B = 16;  // bind\n$export.W = 32;  // wrap\n$export.U = 64;  // safe\n$export.R = 128; // real proto method for `library`\nmodule.exports = $export;\n\n\n//# sourceURL=webpack:///./node_modules/core-js/modules/_export.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/_fails-is-regexp.js":
/*!**********************************************************!*\
  !*** ./node_modules/core-js/modules/_fails-is-regexp.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var MATCH = __webpack_require__(/*! ./_wks */ \"./node_modules/core-js/modules/_wks.js\")('match');\nmodule.exports = function (KEY) {\n  var re = /./;\n  try {\n    '/./'[KEY](re);\n  } catch (e) {\n    try {\n      re[MATCH] = false;\n      return !'/./'[KEY](re);\n    } catch (f) { /* empty */ }\n  } return true;\n};\n\n\n//# sourceURL=webpack:///./node_modules/core-js/modules/_fails-is-regexp.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/_fails.js":
/*!************************************************!*\
  !*** ./node_modules/core-js/modules/_fails.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = function (exec) {\n  try {\n    return !!exec();\n  } catch (e) {\n    return true;\n  }\n};\n\n\n//# sourceURL=webpack:///./node_modules/core-js/modules/_fails.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/_fix-re-wks.js":
/*!*****************************************************!*\
  !*** ./node_modules/core-js/modules/_fix-re-wks.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n__webpack_require__(/*! ./es6.regexp.exec */ \"./node_modules/core-js/modules/es6.regexp.exec.js\");\nvar redefine = __webpack_require__(/*! ./_redefine */ \"./node_modules/core-js/modules/_redefine.js\");\nvar hide = __webpack_require__(/*! ./_hide */ \"./node_modules/core-js/modules/_hide.js\");\nvar fails = __webpack_require__(/*! ./_fails */ \"./node_modules/core-js/modules/_fails.js\");\nvar defined = __webpack_require__(/*! ./_defined */ \"./node_modules/core-js/modules/_defined.js\");\nvar wks = __webpack_require__(/*! ./_wks */ \"./node_modules/core-js/modules/_wks.js\");\nvar regexpExec = __webpack_require__(/*! ./_regexp-exec */ \"./node_modules/core-js/modules/_regexp-exec.js\");\n\nvar SPECIES = wks('species');\n\nvar REPLACE_SUPPORTS_NAMED_GROUPS = !fails(function () {\n  // #replace needs built-in support for named groups.\n  // #match works fine because it just return the exec results, even if it has\n  // a \"grops\" property.\n  var re = /./;\n  re.exec = function () {\n    var result = [];\n    result.groups = { a: '7' };\n    return result;\n  };\n  return ''.replace(re, '$<a>') !== '7';\n});\n\nvar SPLIT_WORKS_WITH_OVERWRITTEN_EXEC = (function () {\n  // Chrome 51 has a buggy \"split\" implementation when RegExp#exec !== nativeExec\n  var re = /(?:)/;\n  var originalExec = re.exec;\n  re.exec = function () { return originalExec.apply(this, arguments); };\n  var result = 'ab'.split(re);\n  return result.length === 2 && result[0] === 'a' && result[1] === 'b';\n})();\n\nmodule.exports = function (KEY, length, exec) {\n  var SYMBOL = wks(KEY);\n\n  var DELEGATES_TO_SYMBOL = !fails(function () {\n    // String methods call symbol-named RegEp methods\n    var O = {};\n    O[SYMBOL] = function () { return 7; };\n    return ''[KEY](O) != 7;\n  });\n\n  var DELEGATES_TO_EXEC = DELEGATES_TO_SYMBOL ? !fails(function () {\n    // Symbol-named RegExp methods call .exec\n    var execCalled = false;\n    var re = /a/;\n    re.exec = function () { execCalled = true; return null; };\n    if (KEY === 'split') {\n      // RegExp[@@split] doesn't call the regex's exec method, but first creates\n      // a new one. We need to return the patched regex when creating the new one.\n      re.constructor = {};\n      re.constructor[SPECIES] = function () { return re; };\n    }\n    re[SYMBOL]('');\n    return !execCalled;\n  }) : undefined;\n\n  if (\n    !DELEGATES_TO_SYMBOL ||\n    !DELEGATES_TO_EXEC ||\n    (KEY === 'replace' && !REPLACE_SUPPORTS_NAMED_GROUPS) ||\n    (KEY === 'split' && !SPLIT_WORKS_WITH_OVERWRITTEN_EXEC)\n  ) {\n    var nativeRegExpMethod = /./[SYMBOL];\n    var fns = exec(\n      defined,\n      SYMBOL,\n      ''[KEY],\n      function maybeCallNative(nativeMethod, regexp, str, arg2, forceStringMethod) {\n        if (regexp.exec === regexpExec) {\n          if (DELEGATES_TO_SYMBOL && !forceStringMethod) {\n            // The native String method already delegates to @@method (this\n            // polyfilled function), leasing to infinite recursion.\n            // We avoid it by directly calling the native @@method method.\n            return { done: true, value: nativeRegExpMethod.call(regexp, str, arg2) };\n          }\n          return { done: true, value: nativeMethod.call(str, regexp, arg2) };\n        }\n        return { done: false };\n      }\n    );\n    var strfn = fns[0];\n    var rxfn = fns[1];\n\n    redefine(String.prototype, KEY, strfn);\n    hide(RegExp.prototype, SYMBOL, length == 2\n      // 21.2.5.8 RegExp.prototype[@@replace](string, replaceValue)\n      // 21.2.5.11 RegExp.prototype[@@split](string, limit)\n      ? function (string, arg) { return rxfn.call(string, this, arg); }\n      // 21.2.5.6 RegExp.prototype[@@match](string)\n      // 21.2.5.9 RegExp.prototype[@@search](string)\n      : function (string) { return rxfn.call(string, this); }\n    );\n  }\n};\n\n\n//# sourceURL=webpack:///./node_modules/core-js/modules/_fix-re-wks.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/_flags.js":
/*!************************************************!*\
  !*** ./node_modules/core-js/modules/_flags.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n// 21.2.5.3 get RegExp.prototype.flags\nvar anObject = __webpack_require__(/*! ./_an-object */ \"./node_modules/core-js/modules/_an-object.js\");\nmodule.exports = function () {\n  var that = anObject(this);\n  var result = '';\n  if (that.global) result += 'g';\n  if (that.ignoreCase) result += 'i';\n  if (that.multiline) result += 'm';\n  if (that.unicode) result += 'u';\n  if (that.sticky) result += 'y';\n  return result;\n};\n\n\n//# sourceURL=webpack:///./node_modules/core-js/modules/_flags.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/_flatten-into-array.js":
/*!*************************************************************!*\
  !*** ./node_modules/core-js/modules/_flatten-into-array.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n// https://tc39.github.io/proposal-flatMap/#sec-FlattenIntoArray\nvar isArray = __webpack_require__(/*! ./_is-array */ \"./node_modules/core-js/modules/_is-array.js\");\nvar isObject = __webpack_require__(/*! ./_is-object */ \"./node_modules/core-js/modules/_is-object.js\");\nvar toLength = __webpack_require__(/*! ./_to-length */ \"./node_modules/core-js/modules/_to-length.js\");\nvar ctx = __webpack_require__(/*! ./_ctx */ \"./node_modules/core-js/modules/_ctx.js\");\nvar IS_CONCAT_SPREADABLE = __webpack_require__(/*! ./_wks */ \"./node_modules/core-js/modules/_wks.js\")('isConcatSpreadable');\n\nfunction flattenIntoArray(target, original, source, sourceLen, start, depth, mapper, thisArg) {\n  var targetIndex = start;\n  var sourceIndex = 0;\n  var mapFn = mapper ? ctx(mapper, thisArg, 3) : false;\n  var element, spreadable;\n\n  while (sourceIndex < sourceLen) {\n    if (sourceIndex in source) {\n      element = mapFn ? mapFn(source[sourceIndex], sourceIndex, original) : source[sourceIndex];\n\n      spreadable = false;\n      if (isObject(element)) {\n        spreadable = element[IS_CONCAT_SPREADABLE];\n        spreadable = spreadable !== undefined ? !!spreadable : isArray(element);\n      }\n\n      if (spreadable && depth > 0) {\n        targetIndex = flattenIntoArray(target, original, element, toLength(element.length), targetIndex, depth - 1) - 1;\n      } else {\n        if (targetIndex >= 0x1fffffffffffff) throw TypeError();\n        target[targetIndex] = element;\n      }\n\n      targetIndex++;\n    }\n    sourceIndex++;\n  }\n  return targetIndex;\n}\n\nmodule.exports = flattenIntoArray;\n\n\n//# sourceURL=webpack:///./node_modules/core-js/modules/_flatten-into-array.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/_for-of.js":
/*!*************************************************!*\
  !*** ./node_modules/core-js/modules/_for-of.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var ctx = __webpack_require__(/*! ./_ctx */ \"./node_modules/core-js/modules/_ctx.js\");\nvar call = __webpack_require__(/*! ./_iter-call */ \"./node_modules/core-js/modules/_iter-call.js\");\nvar isArrayIter = __webpack_require__(/*! ./_is-array-iter */ \"./node_modules/core-js/modules/_is-array-iter.js\");\nvar anObject = __webpack_require__(/*! ./_an-object */ \"./node_modules/core-js/modules/_an-object.js\");\nvar toLength = __webpack_require__(/*! ./_to-length */ \"./node_modules/core-js/modules/_to-length.js\");\nvar getIterFn = __webpack_require__(/*! ./core.get-iterator-method */ \"./node_modules/core-js/modules/core.get-iterator-method.js\");\nvar BREAK = {};\nvar RETURN = {};\nvar exports = module.exports = function (iterable, entries, fn, that, ITERATOR) {\n  var iterFn = ITERATOR ? function () { return iterable; } : getIterFn(iterable);\n  var f = ctx(fn, that, entries ? 2 : 1);\n  var index = 0;\n  var length, step, iterator, result;\n  if (typeof iterFn != 'function') throw TypeError(iterable + ' is not iterable!');\n  // fast case for arrays with default iterator\n  if (isArrayIter(iterFn)) for (length = toLength(iterable.length); length > index; index++) {\n    result = entries ? f(anObject(step = iterable[index])[0], step[1]) : f(iterable[index]);\n    if (result === BREAK || result === RETURN) return result;\n  } else for (iterator = iterFn.call(iterable); !(step = iterator.next()).done;) {\n    result = call(iterator, f, step.value, entries);\n    if (result === BREAK || result === RETURN) return result;\n  }\n};\nexports.BREAK = BREAK;\nexports.RETURN = RETURN;\n\n\n//# sourceURL=webpack:///./node_modules/core-js/modules/_for-of.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/_function-to-string.js":
/*!*************************************************************!*\
  !*** ./node_modules/core-js/modules/_function-to-string.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__(/*! ./_shared */ \"./node_modules/core-js/modules/_shared.js\")('native-function-to-string', Function.toString);\n\n\n//# sourceURL=webpack:///./node_modules/core-js/modules/_function-to-string.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/_global.js":
/*!*************************************************!*\
  !*** ./node_modules/core-js/modules/_global.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028\nvar global = module.exports = typeof window != 'undefined' && window.Math == Math\n  ? window : typeof self != 'undefined' && self.Math == Math ? self\n  // eslint-disable-next-line no-new-func\n  : Function('return this')();\nif (typeof __g == 'number') __g = global; // eslint-disable-line no-undef\n\n\n//# sourceURL=webpack:///./node_modules/core-js/modules/_global.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/_has.js":
/*!**********************************************!*\
  !*** ./node_modules/core-js/modules/_has.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("var hasOwnProperty = {}.hasOwnProperty;\nmodule.exports = function (it, key) {\n  return hasOwnProperty.call(it, key);\n};\n\n\n//# sourceURL=webpack:///./node_modules/core-js/modules/_has.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/_hide.js":
/*!***********************************************!*\
  !*** ./node_modules/core-js/modules/_hide.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var dP = __webpack_require__(/*! ./_object-dp */ \"./node_modules/core-js/modules/_object-dp.js\");\nvar createDesc = __webpack_require__(/*! ./_property-desc */ \"./node_modules/core-js/modules/_property-desc.js\");\nmodule.exports = __webpack_require__(/*! ./_descriptors */ \"./node_modules/core-js/modules/_descriptors.js\") ? function (object, key, value) {\n  return dP.f(object, key, createDesc(1, value));\n} : function (object, key, value) {\n  object[key] = value;\n  return object;\n};\n\n\n//# sourceURL=webpack:///./node_modules/core-js/modules/_hide.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/_html.js":
/*!***********************************************!*\
  !*** ./node_modules/core-js/modules/_html.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var document = __webpack_require__(/*! ./_global */ \"./node_modules/core-js/modules/_global.js\").document;\nmodule.exports = document && document.documentElement;\n\n\n//# sourceURL=webpack:///./node_modules/core-js/modules/_html.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/_ie8-dom-define.js":
/*!*********************************************************!*\
  !*** ./node_modules/core-js/modules/_ie8-dom-define.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = !__webpack_require__(/*! ./_descriptors */ \"./node_modules/core-js/modules/_descriptors.js\") && !__webpack_require__(/*! ./_fails */ \"./node_modules/core-js/modules/_fails.js\")(function () {\n  return Object.defineProperty(__webpack_require__(/*! ./_dom-create */ \"./node_modules/core-js/modules/_dom-create.js\")('div'), 'a', { get: function () { return 7; } }).a != 7;\n});\n\n\n//# sourceURL=webpack:///./node_modules/core-js/modules/_ie8-dom-define.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/_inherit-if-required.js":
/*!**************************************************************!*\
  !*** ./node_modules/core-js/modules/_inherit-if-required.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var isObject = __webpack_require__(/*! ./_is-object */ \"./node_modules/core-js/modules/_is-object.js\");\nvar setPrototypeOf = __webpack_require__(/*! ./_set-proto */ \"./node_modules/core-js/modules/_set-proto.js\").set;\nmodule.exports = function (that, target, C) {\n  var S = target.constructor;\n  var P;\n  if (S !== C && typeof S == 'function' && (P = S.prototype) !== C.prototype && isObject(P) && setPrototypeOf) {\n    setPrototypeOf(that, P);\n  } return that;\n};\n\n\n//# sourceURL=webpack:///./node_modules/core-js/modules/_inherit-if-required.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/_invoke.js":
/*!*************************************************!*\
  !*** ./node_modules/core-js/modules/_invoke.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// fast apply, http://jsperf.lnkit.com/fast-apply/5\nmodule.exports = function (fn, args, that) {\n  var un = that === undefined;\n  switch (args.length) {\n    case 0: return un ? fn()\n                      : fn.call(that);\n    case 1: return un ? fn(args[0])\n                      : fn.call(that, args[0]);\n    case 2: return un ? fn(args[0], args[1])\n                      : fn.call(that, args[0], args[1]);\n    case 3: return un ? fn(args[0], args[1], args[2])\n                      : fn.call(that, args[0], args[1], args[2]);\n    case 4: return un ? fn(args[0], args[1], args[2], args[3])\n                      : fn.call(that, args[0], args[1], args[2], args[3]);\n  } return fn.apply(that, args);\n};\n\n\n//# sourceURL=webpack:///./node_modules/core-js/modules/_invoke.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/_iobject.js":
/*!**************************************************!*\
  !*** ./node_modules/core-js/modules/_iobject.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// fallback for non-array-like ES3 and non-enumerable old V8 strings\nvar cof = __webpack_require__(/*! ./_cof */ \"./node_modules/core-js/modules/_cof.js\");\n// eslint-disable-next-line no-prototype-builtins\nmodule.exports = Object('z').propertyIsEnumerable(0) ? Object : function (it) {\n  return cof(it) == 'String' ? it.split('') : Object(it);\n};\n\n\n//# sourceURL=webpack:///./node_modules/core-js/modules/_iobject.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/_is-array-iter.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js/modules/_is-array-iter.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// check on default Array iterator\nvar Iterators = __webpack_require__(/*! ./_iterators */ \"./node_modules/core-js/modules/_iterators.js\");\nvar ITERATOR = __webpack_require__(/*! ./_wks */ \"./node_modules/core-js/modules/_wks.js\")('iterator');\nvar ArrayProto = Array.prototype;\n\nmodule.exports = function (it) {\n  return it !== undefined && (Iterators.Array === it || ArrayProto[ITERATOR] === it);\n};\n\n\n//# sourceURL=webpack:///./node_modules/core-js/modules/_is-array-iter.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/_is-array.js":
/*!***************************************************!*\
  !*** ./node_modules/core-js/modules/_is-array.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// 7.2.2 IsArray(argument)\nvar cof = __webpack_require__(/*! ./_cof */ \"./node_modules/core-js/modules/_cof.js\");\nmodule.exports = Array.isArray || function isArray(arg) {\n  return cof(arg) == 'Array';\n};\n\n\n//# sourceURL=webpack:///./node_modules/core-js/modules/_is-array.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/_is-integer.js":
/*!*****************************************************!*\
  !*** ./node_modules/core-js/modules/_is-integer.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// 20.1.2.3 Number.isInteger(number)\nvar isObject = __webpack_require__(/*! ./_is-object */ \"./node_modules/core-js/modules/_is-object.js\");\nvar floor = Math.floor;\nmodule.exports = function isInteger(it) {\n  return !isObject(it) && isFinite(it) && floor(it) === it;\n};\n\n\n//# sourceURL=webpack:///./node_modules/core-js/modules/_is-integer.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/_is-object.js":
/*!****************************************************!*\
  !*** ./node_modules/core-js/modules/_is-object.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = function (it) {\n  return typeof it === 'object' ? it !== null : typeof it === 'function';\n};\n\n\n//# sourceURL=webpack:///./node_modules/core-js/modules/_is-object.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/_is-regexp.js":
/*!****************************************************!*\
  !*** ./node_modules/core-js/modules/_is-regexp.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// 7.2.8 IsRegExp(argument)\nvar isObject = __webpack_require__(/*! ./_is-object */ \"./node_modules/core-js/modules/_is-object.js\");\nvar cof = __webpack_require__(/*! ./_cof */ \"./node_modules/core-js/modules/_cof.js\");\nvar MATCH = __webpack_require__(/*! ./_wks */ \"./node_modules/core-js/modules/_wks.js\")('match');\nmodule.exports = function (it) {\n  var isRegExp;\n  return isObject(it) && ((isRegExp = it[MATCH]) !== undefined ? !!isRegExp : cof(it) == 'RegExp');\n};\n\n\n//# sourceURL=webpack:///./node_modules/core-js/modules/_is-regexp.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/_iter-call.js":
/*!****************************************************!*\
  !*** ./node_modules/core-js/modules/_iter-call.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// call something on iterator step with safe closing on error\nvar anObject = __webpack_require__(/*! ./_an-object */ \"./node_modules/core-js/modules/_an-object.js\");\nmodule.exports = function (iterator, fn, value, entries) {\n  try {\n    return entries ? fn(anObject(value)[0], value[1]) : fn(value);\n  // 7.4.6 IteratorClose(iterator, completion)\n  } catch (e) {\n    var ret = iterator['return'];\n    if (ret !== undefined) anObject(ret.call(iterator));\n    throw e;\n  }\n};\n\n\n//# sourceURL=webpack:///./node_modules/core-js/modules/_iter-call.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/_iter-create.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/modules/_iter-create.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar create = __webpack_require__(/*! ./_object-create */ \"./node_modules/core-js/modules/_object-create.js\");\nvar descriptor = __webpack_require__(/*! ./_property-desc */ \"./node_modules/core-js/modules/_property-desc.js\");\nvar setToStringTag = __webpack_require__(/*! ./_set-to-string-tag */ \"./node_modules/core-js/modules/_set-to-string-tag.js\");\nvar IteratorPrototype = {};\n\n// 25.1.2.1.1 %IteratorPrototype%[@@iterator]()\n__webpack_require__(/*! ./_hide */ \"./node_modules/core-js/modules/_hide.js\")(IteratorPrototype, __webpack_require__(/*! ./_wks */ \"./node_modules/core-js/modules/_wks.js\")('iterator'), function () { return this; });\n\nmodule.exports = function (Constructor, NAME, next) {\n  Constructor.prototype = create(IteratorPrototype, { next: descriptor(1, next) });\n  setToStringTag(Constructor, NAME + ' Iterator');\n};\n\n\n//# sourceURL=webpack:///./node_modules/core-js/modules/_iter-create.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/_iter-define.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/modules/_iter-define.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar LIBRARY = __webpack_require__(/*! ./_library */ \"./node_modules/core-js/modules/_library.js\");\nvar $export = __webpack_require__(/*! ./_export */ \"./node_modules/core-js/modules/_export.js\");\nvar redefine = __webpack_require__(/*! ./_redefine */ \"./node_modules/core-js/modules/_redefine.js\");\nvar hide = __webpack_require__(/*! ./_hide */ \"./node_modules/core-js/modules/_hide.js\");\nvar Iterators = __webpack_require__(/*! ./_iterators */ \"./node_modules/core-js/modules/_iterators.js\");\nvar $iterCreate = __webpack_require__(/*! ./_iter-create */ \"./node_modules/core-js/modules/_iter-create.js\");\nvar setToStringTag = __webpack_require__(/*! ./_set-to-string-tag */ \"./node_modules/core-js/modules/_set-to-string-tag.js\");\nvar getPrototypeOf = __webpack_require__(/*! ./_object-gpo */ \"./node_modules/core-js/modules/_object-gpo.js\");\nvar ITERATOR = __webpack_require__(/*! ./_wks */ \"./node_modules/core-js/modules/_wks.js\")('iterator');\nvar BUGGY = !([].keys && 'next' in [].keys()); // Safari has buggy iterators w/o `next`\nvar FF_ITERATOR = '@@iterator';\nvar KEYS = 'keys';\nvar VALUES = 'values';\n\nvar returnThis = function () { return this; };\n\nmodule.exports = function (Base, NAME, Constructor, next, DEFAULT, IS_SET, FORCED) {\n  $iterCreate(Constructor, NAME, next);\n  var getMethod = function (kind) {\n    if (!BUGGY && kind in proto) return proto[kind];\n    switch (kind) {\n      case KEYS: return function keys() { return new Constructor(this, kind); };\n      case VALUES: return function values() { return new Constructor(this, kind); };\n    } return function entries() { return new Constructor(this, kind); };\n  };\n  var TAG = NAME + ' Iterator';\n  var DEF_VALUES = DEFAULT == VALUES;\n  var VALUES_BUG = false;\n  var proto = Base.prototype;\n  var $native = proto[ITERATOR] || proto[FF_ITERATOR] || DEFAULT && proto[DEFAULT];\n  var $default = $native || getMethod(DEFAULT);\n  var $entries = DEFAULT ? !DEF_VALUES ? $default : getMethod('entries') : undefined;\n  var $anyNative = NAME == 'Array' ? proto.entries || $native : $native;\n  var methods, key, IteratorPrototype;\n  // Fix native\n  if ($anyNative) {\n    IteratorPrototype = getPrototypeOf($anyNative.call(new Base()));\n    if (IteratorPrototype !== Object.prototype && IteratorPrototype.next) {\n      // Set @@toStringTag to native iterators\n      setToStringTag(IteratorPrototype, TAG, true);\n      // fix for some old engines\n      if (!LIBRARY && typeof IteratorPrototype[ITERATOR] != 'function') hide(IteratorPrototype, ITERATOR, returnThis);\n    }\n  }\n  // fix Array#{values, @@iterator}.name in V8 / FF\n  if (DEF_VALUES && $native && $native.name !== VALUES) {\n    VALUES_BUG = true;\n    $default = function values() { return $native.call(this); };\n  }\n  // Define iterator\n  if ((!LIBRARY || FORCED) && (BUGGY || VALUES_BUG || !proto[ITERATOR])) {\n    hide(proto, ITERATOR, $default);\n  }\n  // Plug for library\n  Iterators[NAME] = $default;\n  Iterators[TAG] = returnThis;\n  if (DEFAULT) {\n    methods = {\n      values: DEF_VALUES ? $default : getMethod(VALUES),\n      keys: IS_SET ? $default : getMethod(KEYS),\n      entries: $entries\n    };\n    if (FORCED) for (key in methods) {\n      if (!(key in proto)) redefine(proto, key, methods[key]);\n    } else $export($export.P + $export.F * (BUGGY || VALUES_BUG), NAME, methods);\n  }\n  return methods;\n};\n\n\n//# sourceURL=webpack:///./node_modules/core-js/modules/_iter-define.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/_iter-detect.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/modules/_iter-detect.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var ITERATOR = __webpack_require__(/*! ./_wks */ \"./node_modules/core-js/modules/_wks.js\")('iterator');\nvar SAFE_CLOSING = false;\n\ntry {\n  var riter = [7][ITERATOR]();\n  riter['return'] = function () { SAFE_CLOSING = true; };\n  // eslint-disable-next-line no-throw-literal\n  Array.from(riter, function () { throw 2; });\n} catch (e) { /* empty */ }\n\nmodule.exports = function (exec, skipClosing) {\n  if (!skipClosing && !SAFE_CLOSING) return false;\n  var safe = false;\n  try {\n    var arr = [7];\n    var iter = arr[ITERATOR]();\n    iter.next = function () { return { done: safe = true }; };\n    arr[ITERATOR] = function () { return iter; };\n    exec(arr);\n  } catch (e) { /* empty */ }\n  return safe;\n};\n\n\n//# sourceURL=webpack:///./node_modules/core-js/modules/_iter-detect.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/_iter-step.js":
/*!****************************************************!*\
  !*** ./node_modules/core-js/modules/_iter-step.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = function (done, value) {\n  return { value: value, done: !!done };\n};\n\n\n//# sourceURL=webpack:///./node_modules/core-js/modules/_iter-step.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/_iterators.js":
/*!****************************************************!*\
  !*** ./node_modules/core-js/modules/_iterators.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = {};\n\n\n//# sourceURL=webpack:///./node_modules/core-js/modules/_iterators.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/_library.js":
/*!**************************************************!*\
  !*** ./node_modules/core-js/modules/_library.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = false;\n\n\n//# sourceURL=webpack:///./node_modules/core-js/modules/_library.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/_math-expm1.js":
/*!*****************************************************!*\
  !*** ./node_modules/core-js/modules/_math-expm1.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// 20.2.2.14 Math.expm1(x)\nvar $expm1 = Math.expm1;\nmodule.exports = (!$expm1\n  // Old FF bug\n  || $expm1(10) > 22025.465794806719 || $expm1(10) < 22025.4657948067165168\n  // Tor Browser bug\n  || $expm1(-2e-17) != -2e-17\n) ? function expm1(x) {\n  return (x = +x) == 0 ? x : x > -1e-6 && x < 1e-6 ? x + x * x / 2 : Math.exp(x) - 1;\n} : $expm1;\n\n\n//# sourceURL=webpack:///./node_modules/core-js/modules/_math-expm1.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/_math-fround.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/modules/_math-fround.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// 20.2.2.16 Math.fround(x)\nvar sign = __webpack_require__(/*! ./_math-sign */ \"./node_modules/core-js/modules/_math-sign.js\");\nvar pow = Math.pow;\nvar EPSILON = pow(2, -52);\nvar EPSILON32 = pow(2, -23);\nvar MAX32 = pow(2, 127) * (2 - EPSILON32);\nvar MIN32 = pow(2, -126);\n\nvar roundTiesToEven = function (n) {\n  return n + 1 / EPSILON - 1 / EPSILON;\n};\n\nmodule.exports = Math.fround || function fround(x) {\n  var $abs = Math.abs(x);\n  var $sign = sign(x);\n  var a, result;\n  if ($abs < MIN32) return $sign * roundTiesToEven($abs / MIN32 / EPSILON32) * MIN32 * EPSILON32;\n  a = (1 + EPSILON32 / EPSILON) * $abs;\n  result = a - (a - $abs);\n  // eslint-disable-next-line no-self-compare\n  if (result > MAX32 || result != result) return $sign * Infinity;\n  return $sign * result;\n};\n\n\n//# sourceURL=webpack:///./node_modules/core-js/modules/_math-fround.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/_math-log1p.js":
/*!*****************************************************!*\
  !*** ./node_modules/core-js/modules/_math-log1p.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// 20.2.2.20 Math.log1p(x)\nmodule.exports = Math.log1p || function log1p(x) {\n  return (x = +x) > -1e-8 && x < 1e-8 ? x - x * x / 2 : Math.log(1 + x);\n};\n\n\n//# sourceURL=webpack:///./node_modules/core-js/modules/_math-log1p.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/_math-sign.js":
/*!****************************************************!*\
  !*** ./node_modules/core-js/modules/_math-sign.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// 20.2.2.28 Math.sign(x)\nmodule.exports = Math.sign || function sign(x) {\n  // eslint-disable-next-line no-self-compare\n  return (x = +x) == 0 || x != x ? x : x < 0 ? -1 : 1;\n};\n\n\n//# sourceURL=webpack:///./node_modules/core-js/modules/_math-sign.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/_meta.js":
/*!***********************************************!*\
  !*** ./node_modules/core-js/modules/_meta.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var META = __webpack_require__(/*! ./_uid */ \"./node_modules/core-js/modules/_uid.js\")('meta');\nvar isObject = __webpack_require__(/*! ./_is-object */ \"./node_modules/core-js/modules/_is-object.js\");\nvar has = __webpack_require__(/*! ./_has */ \"./node_modules/core-js/modules/_has.js\");\nvar setDesc = __webpack_require__(/*! ./_object-dp */ \"./node_modules/core-js/modules/_object-dp.js\").f;\nvar id = 0;\nvar isExtensible = Object.isExtensible || function () {\n  return true;\n};\nvar FREEZE = !__webpack_require__(/*! ./_fails */ \"./node_modules/core-js/modules/_fails.js\")(function () {\n  return isExtensible(Object.preventExtensions({}));\n});\nvar setMeta = function (it) {\n  setDesc(it, META, { value: {\n    i: 'O' + ++id, // object ID\n    w: {}          // weak collections IDs\n  } });\n};\nvar fastKey = function (it, create) {\n  // return primitive with prefix\n  if (!isObject(it)) return typeof it == 'symbol' ? it : (typeof it == 'string' ? 'S' : 'P') + it;\n  if (!has(it, META)) {\n    // can't set metadata to uncaught frozen object\n    if (!isExtensible(it)) return 'F';\n    // not necessary to add metadata\n    if (!create) return 'E';\n    // add missing metadata\n    setMeta(it);\n  // return object ID\n  } return it[META].i;\n};\nvar getWeak = function (it, create) {\n  if (!has(it, META)) {\n    // can't set metadata to uncaught frozen object\n    if (!isExtensible(it)) return true;\n    // not necessary to add metadata\n    if (!create) return false;\n    // add missing metadata\n    setMeta(it);\n  // return hash weak collections IDs\n  } return it[META].w;\n};\n// add metadata on freeze-family methods calling\nvar onFreeze = function (it) {\n  if (FREEZE && meta.NEED && isExtensible(it) && !has(it, META)) setMeta(it);\n  return it;\n};\nvar meta = module.exports = {\n  KEY: META,\n  NEED: false,\n  fastKey: fastKey,\n  getWeak: getWeak,\n  onFreeze: onFreeze\n};\n\n\n//# sourceURL=webpack:///./node_modules/core-js/modules/_meta.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/_microtask.js":
/*!****************************************************!*\
  !*** ./node_modules/core-js/modules/_microtask.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var global = __webpack_require__(/*! ./_global */ \"./node_modules/core-js/modules/_global.js\");\nvar macrotask = __webpack_require__(/*! ./_task */ \"./node_modules/core-js/modules/_task.js\").set;\nvar Observer = global.MutationObserver || global.WebKitMutationObserver;\nvar process = global.process;\nvar Promise = global.Promise;\nvar isNode = __webpack_require__(/*! ./_cof */ \"./node_modules/core-js/modules/_cof.js\")(process) == 'process';\n\nmodule.exports = function () {\n  var head, last, notify;\n\n  var flush = function () {\n    var parent, fn;\n    if (isNode && (parent = process.domain)) parent.exit();\n    while (head) {\n      fn = head.fn;\n      head = head.next;\n      try {\n        fn();\n      } catch (e) {\n        if (head) notify();\n        else last = undefined;\n        throw e;\n      }\n    } last = undefined;\n    if (parent) parent.enter();\n  };\n\n  // Node.js\n  if (isNode) {\n    notify = function () {\n      process.nextTick(flush);\n    };\n  // browsers with MutationObserver, except iOS Safari - https://github.com/zloirock/core-js/issues/339\n  } else if (Observer && !(global.navigator && global.navigator.standalone)) {\n    var toggle = true;\n    var node = document.createTextNode('');\n    new Observer(flush).observe(node, { characterData: true }); // eslint-disable-line no-new\n    notify = function () {\n      node.data = toggle = !toggle;\n    };\n  // environments with maybe non-completely correct, but existent Promise\n  } else if (Promise && Promise.resolve) {\n    // Promise.resolve without an argument throws an error in LG WebOS 2\n    var promise = Promise.resolve(undefined);\n    notify = function () {\n      promise.then(flush);\n    };\n  // for other environments - macrotask based on:\n  // - setImmediate\n  // - MessageChannel\n  // - window.postMessag\n  // - onreadystatechange\n  // - setTimeout\n  } else {\n    notify = function () {\n      // strange IE + webpack dev server bug - use .call(global)\n      macrotask.call(global, flush);\n    };\n  }\n\n  return function (fn) {\n    var task = { fn: fn, next: undefined };\n    if (last) last.next = task;\n    if (!head) {\n      head = task;\n      notify();\n    } last = task;\n  };\n};\n\n\n//# sourceURL=webpack:///./node_modules/core-js/modules/_microtask.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/_new-promise-capability.js":
/*!*****************************************************************!*\
  !*** ./node_modules/core-js/modules/_new-promise-capability.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n// 25.4.1.5 NewPromiseCapability(C)\nvar aFunction = __webpack_require__(/*! ./_a-function */ \"./node_modules/core-js/modules/_a-function.js\");\n\nfunction PromiseCapability(C) {\n  var resolve, reject;\n  this.promise = new C(function ($$resolve, $$reject) {\n    if (resolve !== undefined || reject !== undefined) throw TypeError('Bad Promise constructor');\n    resolve = $$resolve;\n    reject = $$reject;\n  });\n  this.resolve = aFunction(resolve);\n  this.reject = aFunction(reject);\n}\n\nmodule.exports.f = function (C) {\n  return new PromiseCapability(C);\n};\n\n\n//# sourceURL=webpack:///./node_modules/core-js/modules/_new-promise-capability.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/_object-assign.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js/modules/_object-assign.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n// 19.1.2.1 Object.assign(target, source, ...)\nvar DESCRIPTORS = __webpack_require__(/*! ./_descriptors */ \"./node_modules/core-js/modules/_descriptors.js\");\nvar getKeys = __webpack_require__(/*! ./_object-keys */ \"./node_modules/core-js/modules/_object-keys.js\");\nvar gOPS = __webpack_require__(/*! ./_object-gops */ \"./node_modules/core-js/modules/_object-gops.js\");\nvar pIE = __webpack_require__(/*! ./_object-pie */ \"./node_modules/core-js/modules/_object-pie.js\");\nvar toObject = __webpack_require__(/*! ./_to-object */ \"./node_modules/core-js/modules/_to-object.js\");\nvar IObject = __webpack_require__(/*! ./_iobject */ \"./node_modules/core-js/modules/_iobject.js\");\nvar $assign = Object.assign;\n\n// should work with symbols and should have deterministic property order (V8 bug)\nmodule.exports = !$assign || __webpack_require__(/*! ./_fails */ \"./node_modules/core-js/modules/_fails.js\")(function () {\n  var A = {};\n  var B = {};\n  // eslint-disable-next-line no-undef\n  var S = Symbol();\n  var K = 'abcdefghijklmnopqrst';\n  A[S] = 7;\n  K.split('').forEach(function (k) { B[k] = k; });\n  return $assign({}, A)[S] != 7 || Object.keys($assign({}, B)).join('') != K;\n}) ? function assign(target, source) { // eslint-disable-line no-unused-vars\n  var T = toObject(target);\n  var aLen = arguments.length;\n  var index = 1;\n  var getSymbols = gOPS.f;\n  var isEnum = pIE.f;\n  while (aLen > index) {\n    var S = IObject(arguments[index++]);\n    var keys = getSymbols ? getKeys(S).concat(getSymbols(S)) : getKeys(S);\n    var length = keys.length;\n    var j = 0;\n    var key;\n    while (length > j) {\n      key = keys[j++];\n      if (!DESCRIPTORS || isEnum.call(S, key)) T[key] = S[key];\n    }\n  } return T;\n} : $assign;\n\n\n//# sourceURL=webpack:///./node_modules/core-js/modules/_object-assign.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/_object-create.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js/modules/_object-create.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])\nvar anObject = __webpack_require__(/*! ./_an-object */ \"./node_modules/core-js/modules/_an-object.js\");\nvar dPs = __webpack_require__(/*! ./_object-dps */ \"./node_modules/core-js/modules/_object-dps.js\");\nvar enumBugKeys = __webpack_require__(/*! ./_enum-bug-keys */ \"./node_modules/core-js/modules/_enum-bug-keys.js\");\nvar IE_PROTO = __webpack_require__(/*! ./_shared-key */ \"./node_modules/core-js/modules/_shared-key.js\")('IE_PROTO');\nvar Empty = function () { /* empty */ };\nvar PROTOTYPE = 'prototype';\n\n// Create object with fake `null` prototype: use iframe Object with cleared prototype\nvar createDict = function () {\n  // Thrash, waste and sodomy: IE GC bug\n  var iframe = __webpack_require__(/*! ./_dom-create */ \"./node_modules/core-js/modules/_dom-create.js\")('iframe');\n  var i = enumBugKeys.length;\n  var lt = '<';\n  var gt = '>';\n  var iframeDocument;\n  iframe.style.display = 'none';\n  __webpack_require__(/*! ./_html */ \"./node_modules/core-js/modules/_html.js\").appendChild(iframe);\n  iframe.src = 'javascript:'; // eslint-disable-line no-script-url\n  // createDict = iframe.contentWindow.Object;\n  // html.removeChild(iframe);\n  iframeDocument = iframe.contentWindow.document;\n  iframeDocument.open();\n  iframeDocument.write(lt + 'script' + gt + 'document.F=Object' + lt + '/script' + gt);\n  iframeDocument.close();\n  createDict = iframeDocument.F;\n  while (i--) delete createDict[PROTOTYPE][enumBugKeys[i]];\n  return createDict();\n};\n\nmodule.exports = Object.create || function create(O, Properties) {\n  var result;\n  if (O !== null) {\n    Empty[PROTOTYPE] = anObject(O);\n    result = new Empty();\n    Empty[PROTOTYPE] = null;\n    // add \"__proto__\" for Object.getPrototypeOf polyfill\n    result[IE_PROTO] = O;\n  } else result = createDict();\n  return Properties === undefined ? result : dPs(result, Properties);\n};\n\n\n//# sourceURL=webpack:///./node_modules/core-js/modules/_object-create.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/_object-dp.js":
/*!****************************************************!*\
  !*** ./node_modules/core-js/modules/_object-dp.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var anObject = __webpack_require__(/*! ./_an-object */ \"./node_modules/core-js/modules/_an-object.js\");\nvar IE8_DOM_DEFINE = __webpack_require__(/*! ./_ie8-dom-define */ \"./node_modules/core-js/modules/_ie8-dom-define.js\");\nvar toPrimitive = __webpack_require__(/*! ./_to-primitive */ \"./node_modules/core-js/modules/_to-primitive.js\");\nvar dP = Object.defineProperty;\n\nexports.f = __webpack_require__(/*! ./_descriptors */ \"./node_modules/core-js/modules/_descriptors.js\") ? Object.defineProperty : function defineProperty(O, P, Attributes) {\n  anObject(O);\n  P = toPrimitive(P, true);\n  anObject(Attributes);\n  if (IE8_DOM_DEFINE) try {\n    return dP(O, P, Attributes);\n  } catch (e) { /* empty */ }\n  if ('get' in Attributes || 'set' in Attributes) throw TypeError('Accessors not supported!');\n  if ('value' in Attributes) O[P] = Attributes.value;\n  return O;\n};\n\n\n//# sourceURL=webpack:///./node_modules/core-js/modules/_object-dp.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/_object-dps.js":
/*!*****************************************************!*\
  !*** ./node_modules/core-js/modules/_object-dps.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var dP = __webpack_require__(/*! ./_object-dp */ \"./node_modules/core-js/modules/_object-dp.js\");\nvar anObject = __webpack_require__(/*! ./_an-object */ \"./node_modules/core-js/modules/_an-object.js\");\nvar getKeys = __webpack_require__(/*! ./_object-keys */ \"./node_modules/core-js/modules/_object-keys.js\");\n\nmodule.exports = __webpack_require__(/*! ./_descriptors */ \"./node_modules/core-js/modules/_descriptors.js\") ? Object.defineProperties : function defineProperties(O, Properties) {\n  anObject(O);\n  var keys = getKeys(Properties);\n  var length = keys.length;\n  var i = 0;\n  var P;\n  while (length > i) dP.f(O, P = keys[i++], Properties[P]);\n  return O;\n};\n\n\n//# sourceURL=webpack:///./node_modules/core-js/modules/_object-dps.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/_object-gopd.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/modules/_object-gopd.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var pIE = __webpack_require__(/*! ./_object-pie */ \"./node_modules/core-js/modules/_object-pie.js\");\nvar createDesc = __webpack_require__(/*! ./_property-desc */ \"./node_modules/core-js/modules/_property-desc.js\");\nvar toIObject = __webpack_require__(/*! ./_to-iobject */ \"./node_modules/core-js/modules/_to-iobject.js\");\nvar toPrimitive = __webpack_require__(/*! ./_to-primitive */ \"./node_modules/core-js/modules/_to-primitive.js\");\nvar has = __webpack_require__(/*! ./_has */ \"./node_modules/core-js/modules/_has.js\");\nvar IE8_DOM_DEFINE = __webpack_require__(/*! ./_ie8-dom-define */ \"./node_modules/core-js/modules/_ie8-dom-define.js\");\nvar gOPD = Object.getOwnPropertyDescriptor;\n\nexports.f = __webpack_require__(/*! ./_descriptors */ \"./node_modules/core-js/modules/_descriptors.js\") ? gOPD : function getOwnPropertyDescriptor(O, P) {\n  O = toIObject(O);\n  P = toPrimitive(P, true);\n  if (IE8_DOM_DEFINE) try {\n    return gOPD(O, P);\n  } catch (e) { /* empty */ }\n  if (has(O, P)) return createDesc(!pIE.f.call(O, P), O[P]);\n};\n\n\n//# sourceURL=webpack:///./node_modules/core-js/modules/_object-gopd.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/_object-gopn-ext.js":
/*!**********************************************************!*\
  !*** ./node_modules/core-js/modules/_object-gopn-ext.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// fallback for IE11 buggy Object.getOwnPropertyNames with iframe and window\nvar toIObject = __webpack_require__(/*! ./_to-iobject */ \"./node_modules/core-js/modules/_to-iobject.js\");\nvar gOPN = __webpack_require__(/*! ./_object-gopn */ \"./node_modules/core-js/modules/_object-gopn.js\").f;\nvar toString = {}.toString;\n\nvar windowNames = typeof window == 'object' && window && Object.getOwnPropertyNames\n  ? Object.getOwnPropertyNames(window) : [];\n\nvar getWindowNames = function (it) {\n  try {\n    return gOPN(it);\n  } catch (e) {\n    return windowNames.slice();\n  }\n};\n\nmodule.exports.f = function getOwnPropertyNames(it) {\n  return windowNames && toString.call(it) == '[object Window]' ? getWindowNames(it) : gOPN(toIObject(it));\n};\n\n\n//# sourceURL=webpack:///./node_modules/core-js/modules/_object-gopn-ext.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/_object-gopn.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/modules/_object-gopn.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// 19.1.2.7 / 15.2.3.4 Object.getOwnPropertyNames(O)\nvar $keys = __webpack_require__(/*! ./_object-keys-internal */ \"./node_modules/core-js/modules/_object-keys-internal.js\");\nvar hiddenKeys = __webpack_require__(/*! ./_enum-bug-keys */ \"./node_modules/core-js/modules/_enum-bug-keys.js\").concat('length', 'prototype');\n\nexports.f = Object.getOwnPropertyNames || function getOwnPropertyNames(O) {\n  return $keys(O, hiddenKeys);\n};\n\n\n//# sourceURL=webpack:///./node_modules/core-js/modules/_object-gopn.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/_object-gops.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/modules/_object-gops.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("exports.f = Object.getOwnPropertySymbols;\n\n\n//# sourceURL=webpack:///./node_modules/core-js/modules/_object-gops.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/_object-gpo.js":
/*!*****************************************************!*\
  !*** ./node_modules/core-js/modules/_object-gpo.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// 19.1.2.9 / 15.2.3.2 Object.getPrototypeOf(O)\nvar has = __webpack_require__(/*! ./_has */ \"./node_modules/core-js/modules/_has.js\");\nvar toObject = __webpack_require__(/*! ./_to-object */ \"./node_modules/core-js/modules/_to-object.js\");\nvar IE_PROTO = __webpack_require__(/*! ./_shared-key */ \"./node_modules/core-js/modules/_shared-key.js\")('IE_PROTO');\nvar ObjectProto = Object.prototype;\n\nmodule.exports = Object.getPrototypeOf || function (O) {\n  O = toObject(O);\n  if (has(O, IE_PROTO)) return O[IE_PROTO];\n  if (typeof O.constructor == 'function' && O instanceof O.constructor) {\n    return O.constructor.prototype;\n  } return O instanceof Object ? ObjectProto : null;\n};\n\n\n//# sourceURL=webpack:///./node_modules/core-js/modules/_object-gpo.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/_object-keys-internal.js":
/*!***************************************************************!*\
  !*** ./node_modules/core-js/modules/_object-keys-internal.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var has = __webpack_require__(/*! ./_has */ \"./node_modules/core-js/modules/_has.js\");\nvar toIObject = __webpack_require__(/*! ./_to-iobject */ \"./node_modules/core-js/modules/_to-iobject.js\");\nvar arrayIndexOf = __webpack_require__(/*! ./_array-includes */ \"./node_modules/core-js/modules/_array-includes.js\")(false);\nvar IE_PROTO = __webpack_require__(/*! ./_shared-key */ \"./node_modules/core-js/modules/_shared-key.js\")('IE_PROTO');\n\nmodule.exports = function (object, names) {\n  var O = toIObject(object);\n  var i = 0;\n  var result = [];\n  var key;\n  for (key in O) if (key != IE_PROTO) has(O, key) && result.push(key);\n  // Don't enum bug & hidden keys\n  while (names.length > i) if (has(O, key = names[i++])) {\n    ~arrayIndexOf(result, key) || result.push(key);\n  }\n  return result;\n};\n\n\n//# sourceURL=webpack:///./node_modules/core-js/modules/_object-keys-internal.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/_object-keys.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/modules/_object-keys.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// 19.1.2.14 / 15.2.3.14 Object.keys(O)\nvar $keys = __webpack_require__(/*! ./_object-keys-internal */ \"./node_modules/core-js/modules/_object-keys-internal.js\");\nvar enumBugKeys = __webpack_require__(/*! ./_enum-bug-keys */ \"./node_modules/core-js/modules/_enum-bug-keys.js\");\n\nmodule.exports = Object.keys || function keys(O) {\n  return $keys(O, enumBugKeys);\n};\n\n\n//# sourceURL=webpack:///./node_modules/core-js/modules/_object-keys.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/_object-pie.js":
/*!*****************************************************!*\
  !*** ./node_modules/core-js/modules/_object-pie.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("exports.f = {}.propertyIsEnumerable;\n\n\n//# sourceURL=webpack:///./node_modules/core-js/modules/_object-pie.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/_object-sap.js":
/*!*****************************************************!*\
  !*** ./node_modules/core-js/modules/_object-sap.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// most Object methods by ES6 should accept primitives\nvar $export = __webpack_require__(/*! ./_export */ \"./node_modules/core-js/modules/_export.js\");\nvar core = __webpack_require__(/*! ./_core */ \"./node_modules/core-js/modules/_core.js\");\nvar fails = __webpack_require__(/*! ./_fails */ \"./node_modules/core-js/modules/_fails.js\");\nmodule.exports = function (KEY, exec) {\n  var fn = (core.Object || {})[KEY] || Object[KEY];\n  var exp = {};\n  exp[KEY] = exec(fn);\n  $export($export.S + $export.F * fails(function () { fn(1); }), 'Object', exp);\n};\n\n\n//# sourceURL=webpack:///./node_modules/core-js/modules/_object-sap.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/_object-to-array.js":
/*!**********************************************************!*\
  !*** ./node_modules/core-js/modules/_object-to-array.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var DESCRIPTORS = __webpack_require__(/*! ./_descriptors */ \"./node_modules/core-js/modules/_descriptors.js\");\nvar getKeys = __webpack_require__(/*! ./_object-keys */ \"./node_modules/core-js/modules/_object-keys.js\");\nvar toIObject = __webpack_require__(/*! ./_to-iobject */ \"./node_modules/core-js/modules/_to-iobject.js\");\nvar isEnum = __webpack_require__(/*! ./_object-pie */ \"./node_modules/core-js/modules/_object-pie.js\").f;\nmodule.exports = function (isEntries) {\n  return function (it) {\n    var O = toIObject(it);\n    var keys = getKeys(O);\n    var length = keys.length;\n    var i = 0;\n    var result = [];\n    var key;\n    while (length > i) {\n      key = keys[i++];\n      if (!DESCRIPTORS || isEnum.call(O, key)) {\n        result.push(isEntries ? [key, O[key]] : O[key]);\n      }\n    }\n    return result;\n  };\n};\n\n\n//# sourceURL=webpack:///./node_modules/core-js/modules/_object-to-array.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/_own-keys.js":
/*!***************************************************!*\
  !*** ./node_modules/core-js/modules/_own-keys.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// all object keys, includes non-enumerable and symbols\nvar gOPN = __webpack_require__(/*! ./_object-gopn */ \"./node_modules/core-js/modules/_object-gopn.js\");\nvar gOPS = __webpack_require__(/*! ./_object-gops */ \"./node_modules/core-js/modules/_object-gops.js\");\nvar anObject = __webpack_require__(/*! ./_an-object */ \"./node_modules/core-js/modules/_an-object.js\");\nvar Reflect = __webpack_require__(/*! ./_global */ \"./node_modules/core-js/modules/_global.js\").Reflect;\nmodule.exports = Reflect && Reflect.ownKeys || function ownKeys(it) {\n  var keys = gOPN.f(anObject(it));\n  var getSymbols = gOPS.f;\n  return getSymbols ? keys.concat(getSymbols(it)) : keys;\n};\n\n\n//# sourceURL=webpack:///./node_modules/core-js/modules/_own-keys.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/_parse-float.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/modules/_parse-float.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var $parseFloat = __webpack_require__(/*! ./_global */ \"./node_modules/core-js/modules/_global.js\").parseFloat;\nvar $trim = __webpack_require__(/*! ./_string-trim */ \"./node_modules/core-js/modules/_string-trim.js\").trim;\n\nmodule.exports = 1 / $parseFloat(__webpack_require__(/*! ./_string-ws */ \"./node_modules/core-js/modules/_string-ws.js\") + '-0') !== -Infinity ? function parseFloat(str) {\n  var string = $trim(String(str), 3);\n  var result = $parseFloat(string);\n  return result === 0 && string.charAt(0) == '-' ? -0 : result;\n} : $parseFloat;\n\n\n//# sourceURL=webpack:///./node_modules/core-js/modules/_parse-float.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/_parse-int.js":
/*!****************************************************!*\
  !*** ./node_modules/core-js/modules/_parse-int.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var $parseInt = __webpack_require__(/*! ./_global */ \"./node_modules/core-js/modules/_global.js\").parseInt;\nvar $trim = __webpack_require__(/*! ./_string-trim */ \"./node_modules/core-js/modules/_string-trim.js\").trim;\nvar ws = __webpack_require__(/*! ./_string-ws */ \"./node_modules/core-js/modules/_string-ws.js\");\nvar hex = /^[-+]?0[xX]/;\n\nmodule.exports = $parseInt(ws + '08') !== 8 || $parseInt(ws + '0x16') !== 22 ? function parseInt(str, radix) {\n  var string = $trim(String(str), 3);\n  return $parseInt(string, (radix >>> 0) || (hex.test(string) ? 16 : 10));\n} : $parseInt;\n\n\n//# sourceURL=webpack:///./node_modules/core-js/modules/_parse-int.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/_perform.js":
/*!**************************************************!*\
  !*** ./node_modules/core-js/modules/_perform.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = function (exec) {\n  try {\n    return { e: false, v: exec() };\n  } catch (e) {\n    return { e: true, v: e };\n  }\n};\n\n\n//# sourceURL=webpack:///./node_modules/core-js/modules/_perform.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/_promise-resolve.js":
/*!**********************************************************!*\
  !*** ./node_modules/core-js/modules/_promise-resolve.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var anObject = __webpack_require__(/*! ./_an-object */ \"./node_modules/core-js/modules/_an-object.js\");\nvar isObject = __webpack_require__(/*! ./_is-object */ \"./node_modules/core-js/modules/_is-object.js\");\nvar newPromiseCapability = __webpack_require__(/*! ./_new-promise-capability */ \"./node_modules/core-js/modules/_new-promise-capability.js\");\n\nmodule.exports = function (C, x) {\n  anObject(C);\n  if (isObject(x) && x.constructor === C) return x;\n  var promiseCapability = newPromiseCapability.f(C);\n  var resolve = promiseCapability.resolve;\n  resolve(x);\n  return promiseCapability.promise;\n};\n\n\n//# sourceURL=webpack:///./node_modules/core-js/modules/_promise-resolve.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/_property-desc.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js/modules/_property-desc.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = function (bitmap, value) {\n  return {\n    enumerable: !(bitmap & 1),\n    configurable: !(bitmap & 2),\n    writable: !(bitmap & 4),\n    value: value\n  };\n};\n\n\n//# sourceURL=webpack:///./node_modules/core-js/modules/_property-desc.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/_redefine-all.js":
/*!*******************************************************!*\
  !*** ./node_modules/core-js/modules/_redefine-all.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var redefine = __webpack_require__(/*! ./_redefine */ \"./node_modules/core-js/modules/_redefine.js\");\nmodule.exports = function (target, src, safe) {\n  for (var key in src) redefine(target, key, src[key], safe);\n  return target;\n};\n\n\n//# sourceURL=webpack:///./node_modules/core-js/modules/_redefine-all.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/_redefine.js":
/*!***************************************************!*\
  !*** ./node_modules/core-js/modules/_redefine.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var global = __webpack_require__(/*! ./_global */ \"./node_modules/core-js/modules/_global.js\");\nvar hide = __webpack_require__(/*! ./_hide */ \"./node_modules/core-js/modules/_hide.js\");\nvar has = __webpack_require__(/*! ./_has */ \"./node_modules/core-js/modules/_has.js\");\nvar SRC = __webpack_require__(/*! ./_uid */ \"./node_modules/core-js/modules/_uid.js\")('src');\nvar $toString = __webpack_require__(/*! ./_function-to-string */ \"./node_modules/core-js/modules/_function-to-string.js\");\nvar TO_STRING = 'toString';\nvar TPL = ('' + $toString).split(TO_STRING);\n\n__webpack_require__(/*! ./_core */ \"./node_modules/core-js/modules/_core.js\").inspectSource = function (it) {\n  return $toString.call(it);\n};\n\n(module.exports = function (O, key, val, safe) {\n  var isFunction = typeof val == 'function';\n  if (isFunction) has(val, 'name') || hide(val, 'name', key);\n  if (O[key] === val) return;\n  if (isFunction) has(val, SRC) || hide(val, SRC, O[key] ? '' + O[key] : TPL.join(String(key)));\n  if (O === global) {\n    O[key] = val;\n  } else if (!safe) {\n    delete O[key];\n    hide(O, key, val);\n  } else if (O[key]) {\n    O[key] = val;\n  } else {\n    hide(O, key, val);\n  }\n// add fake Function#toString for correct work wrapped methods / constructors with methods like LoDash isNative\n})(Function.prototype, TO_STRING, function toString() {\n  return typeof this == 'function' && this[SRC] || $toString.call(this);\n});\n\n\n//# sourceURL=webpack:///./node_modules/core-js/modules/_redefine.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/_regexp-exec-abstract.js":
/*!***************************************************************!*\
  !*** ./node_modules/core-js/modules/_regexp-exec-abstract.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar classof = __webpack_require__(/*! ./_classof */ \"./node_modules/core-js/modules/_classof.js\");\nvar builtinExec = RegExp.prototype.exec;\n\n // `RegExpExec` abstract operation\n// https://tc39.github.io/ecma262/#sec-regexpexec\nmodule.exports = function (R, S) {\n  var exec = R.exec;\n  if (typeof exec === 'function') {\n    var result = exec.call(R, S);\n    if (typeof result !== 'object') {\n      throw new TypeError('RegExp exec method returned something other than an Object or null');\n    }\n    return result;\n  }\n  if (classof(R) !== 'RegExp') {\n    throw new TypeError('RegExp#exec called on incompatible receiver');\n  }\n  return builtinExec.call(R, S);\n};\n\n\n//# sourceURL=webpack:///./node_modules/core-js/modules/_regexp-exec-abstract.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/_regexp-exec.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/modules/_regexp-exec.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar regexpFlags = __webpack_require__(/*! ./_flags */ \"./node_modules/core-js/modules/_flags.js\");\n\nvar nativeExec = RegExp.prototype.exec;\n// This always refers to the native implementation, because the\n// String#replace polyfill uses ./fix-regexp-well-known-symbol-logic.js,\n// which loads this file before patching the method.\nvar nativeReplace = String.prototype.replace;\n\nvar patchedExec = nativeExec;\n\nvar LAST_INDEX = 'lastIndex';\n\nvar UPDATES_LAST_INDEX_WRONG = (function () {\n  var re1 = /a/,\n      re2 = /b*/g;\n  nativeExec.call(re1, 'a');\n  nativeExec.call(re2, 'a');\n  return re1[LAST_INDEX] !== 0 || re2[LAST_INDEX] !== 0;\n})();\n\n// nonparticipating capturing group, copied from es5-shim's String#split patch.\nvar NPCG_INCLUDED = /()??/.exec('')[1] !== undefined;\n\nvar PATCH = UPDATES_LAST_INDEX_WRONG || NPCG_INCLUDED;\n\nif (PATCH) {\n  patchedExec = function exec(str) {\n    var re = this;\n    var lastIndex, reCopy, match, i;\n\n    if (NPCG_INCLUDED) {\n      reCopy = new RegExp('^' + re.source + '$(?!\\\\s)', regexpFlags.call(re));\n    }\n    if (UPDATES_LAST_INDEX_WRONG) lastIndex = re[LAST_INDEX];\n\n    match = nativeExec.call(re, str);\n\n    if (UPDATES_LAST_INDEX_WRONG && match) {\n      re[LAST_INDEX] = re.global ? match.index + match[0].length : lastIndex;\n    }\n    if (NPCG_INCLUDED && match && match.length > 1) {\n      // Fix browsers whose `exec` methods don't consistently return `undefined`\n      // for NPCG, like IE8. NOTE: This doesn' work for /(.?)?/\n      // eslint-disable-next-line no-loop-func\n      nativeReplace.call(match[0], reCopy, function () {\n        for (i = 1; i < arguments.length - 2; i++) {\n          if (arguments[i] === undefined) match[i] = undefined;\n        }\n      });\n    }\n\n    return match;\n  };\n}\n\nmodule.exports = patchedExec;\n\n\n//# sourceURL=webpack:///./node_modules/core-js/modules/_regexp-exec.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/_same-value.js":
/*!*****************************************************!*\
  !*** ./node_modules/core-js/modules/_same-value.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// 7.2.9 SameValue(x, y)\nmodule.exports = Object.is || function is(x, y) {\n  // eslint-disable-next-line no-self-compare\n  return x === y ? x !== 0 || 1 / x === 1 / y : x != x && y != y;\n};\n\n\n//# sourceURL=webpack:///./node_modules/core-js/modules/_same-value.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/_set-proto.js":
/*!****************************************************!*\
  !*** ./node_modules/core-js/modules/_set-proto.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// Works with __proto__ only. Old v8 can't work with null proto objects.\n/* eslint-disable no-proto */\nvar isObject = __webpack_require__(/*! ./_is-object */ \"./node_modules/core-js/modules/_is-object.js\");\nvar anObject = __webpack_require__(/*! ./_an-object */ \"./node_modules/core-js/modules/_an-object.js\");\nvar check = function (O, proto) {\n  anObject(O);\n  if (!isObject(proto) && proto !== null) throw TypeError(proto + \": can't set as prototype!\");\n};\nmodule.exports = {\n  set: Object.setPrototypeOf || ('__proto__' in {} ? // eslint-disable-line\n    function (test, buggy, set) {\n      try {\n        set = __webpack_require__(/*! ./_ctx */ \"./node_modules/core-js/modules/_ctx.js\")(Function.call, __webpack_require__(/*! ./_object-gopd */ \"./node_modules/core-js/modules/_object-gopd.js\").f(Object.prototype, '__proto__').set, 2);\n        set(test, []);\n        buggy = !(test instanceof Array);\n      } catch (e) { buggy = true; }\n      return function setPrototypeOf(O, proto) {\n        check(O, proto);\n        if (buggy) O.__proto__ = proto;\n        else set(O, proto);\n        return O;\n      };\n    }({}, false) : undefined),\n  check: check\n};\n\n\n//# sourceURL=webpack:///./node_modules/core-js/modules/_set-proto.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/_set-species.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/modules/_set-species.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar global = __webpack_require__(/*! ./_global */ \"./node_modules/core-js/modules/_global.js\");\nvar dP = __webpack_require__(/*! ./_object-dp */ \"./node_modules/core-js/modules/_object-dp.js\");\nvar DESCRIPTORS = __webpack_require__(/*! ./_descriptors */ \"./node_modules/core-js/modules/_descriptors.js\");\nvar SPECIES = __webpack_require__(/*! ./_wks */ \"./node_modules/core-js/modules/_wks.js\")('species');\n\nmodule.exports = function (KEY) {\n  var C = global[KEY];\n  if (DESCRIPTORS && C && !C[SPECIES]) dP.f(C, SPECIES, {\n    configurable: true,\n    get: function () { return this; }\n  });\n};\n\n\n//# sourceURL=webpack:///./node_modules/core-js/modules/_set-species.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/_set-to-string-tag.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js/modules/_set-to-string-tag.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var def = __webpack_require__(/*! ./_object-dp */ \"./node_modules/core-js/modules/_object-dp.js\").f;\nvar has = __webpack_require__(/*! ./_has */ \"./node_modules/core-js/modules/_has.js\");\nvar TAG = __webpack_require__(/*! ./_wks */ \"./node_modules/core-js/modules/_wks.js\")('toStringTag');\n\nmodule.exports = function (it, tag, stat) {\n  if (it && !has(it = stat ? it : it.prototype, TAG)) def(it, TAG, { configurable: true, value: tag });\n};\n\n\n//# sourceURL=webpack:///./node_modules/core-js/modules/_set-to-string-tag.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/_shared-key.js":
/*!*****************************************************!*\
  !*** ./node_modules/core-js/modules/_shared-key.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var shared = __webpack_require__(/*! ./_shared */ \"./node_modules/core-js/modules/_shared.js\")('keys');\nvar uid = __webpack_require__(/*! ./_uid */ \"./node_modules/core-js/modules/_uid.js\");\nmodule.exports = function (key) {\n  return shared[key] || (shared[key] = uid(key));\n};\n\n\n//# sourceURL=webpack:///./node_modules/core-js/modules/_shared-key.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/_shared.js":
/*!*************************************************!*\
  !*** ./node_modules/core-js/modules/_shared.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var core = __webpack_require__(/*! ./_core */ \"./node_modules/core-js/modules/_core.js\");\nvar global = __webpack_require__(/*! ./_global */ \"./node_modules/core-js/modules/_global.js\");\nvar SHARED = '__core-js_shared__';\nvar store = global[SHARED] || (global[SHARED] = {});\n\n(module.exports = function (key, value) {\n  return store[key] || (store[key] = value !== undefined ? value : {});\n})('versions', []).push({\n  version: core.version,\n  mode: __webpack_require__(/*! ./_library */ \"./node_modules/core-js/modules/_library.js\") ? 'pure' : 'global',\n  copyright: '© 2019 Denis Pushkarev (zloirock.ru)'\n});\n\n\n//# sourceURL=webpack:///./node_modules/core-js/modules/_shared.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/_species-constructor.js":
/*!**************************************************************!*\
  !*** ./node_modules/core-js/modules/_species-constructor.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// 7.3.20 SpeciesConstructor(O, defaultConstructor)\nvar anObject = __webpack_require__(/*! ./_an-object */ \"./node_modules/core-js/modules/_an-object.js\");\nvar aFunction = __webpack_require__(/*! ./_a-function */ \"./node_modules/core-js/modules/_a-function.js\");\nvar SPECIES = __webpack_require__(/*! ./_wks */ \"./node_modules/core-js/modules/_wks.js\")('species');\nmodule.exports = function (O, D) {\n  var C = anObject(O).constructor;\n  var S;\n  return C === undefined || (S = anObject(C)[SPECIES]) == undefined ? D : aFunction(S);\n};\n\n\n//# sourceURL=webpack:///./node_modules/core-js/modules/_species-constructor.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/_strict-method.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js/modules/_strict-method.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar fails = __webpack_require__(/*! ./_fails */ \"./node_modules/core-js/modules/_fails.js\");\n\nmodule.exports = function (method, arg) {\n  return !!method && fails(function () {\n    // eslint-disable-next-line no-useless-call\n    arg ? method.call(null, function () { /* empty */ }, 1) : method.call(null);\n  });\n};\n\n\n//# sourceURL=webpack:///./node_modules/core-js/modules/_strict-method.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/_string-at.js":
/*!****************************************************!*\
  !*** ./node_modules/core-js/modules/_string-at.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var toInteger = __webpack_require__(/*! ./_to-integer */ \"./node_modules/core-js/modules/_to-integer.js\");\nvar defined = __webpack_require__(/*! ./_defined */ \"./node_modules/core-js/modules/_defined.js\");\n// true  -> String#at\n// false -> String#codePointAt\nmodule.exports = function (TO_STRING) {\n  return function (that, pos) {\n    var s = String(defined(that));\n    var i = toInteger(pos);\n    var l = s.length;\n    var a, b;\n    if (i < 0 || i >= l) return TO_STRING ? '' : undefined;\n    a = s.charCodeAt(i);\n    return a < 0xd800 || a > 0xdbff || i + 1 === l || (b = s.charCodeAt(i + 1)) < 0xdc00 || b > 0xdfff\n      ? TO_STRING ? s.charAt(i) : a\n      : TO_STRING ? s.slice(i, i + 2) : (a - 0xd800 << 10) + (b - 0xdc00) + 0x10000;\n  };\n};\n\n\n//# sourceURL=webpack:///./node_modules/core-js/modules/_string-at.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/_string-context.js":
/*!*********************************************************!*\
  !*** ./node_modules/core-js/modules/_string-context.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// helper for String#{startsWith, endsWith, includes}\nvar isRegExp = __webpack_require__(/*! ./_is-regexp */ \"./node_modules/core-js/modules/_is-regexp.js\");\nvar defined = __webpack_require__(/*! ./_defined */ \"./node_modules/core-js/modules/_defined.js\");\n\nmodule.exports = function (that, searchString, NAME) {\n  if (isRegExp(searchString)) throw TypeError('String#' + NAME + \" doesn't accept regex!\");\n  return String(defined(that));\n};\n\n\n//# sourceURL=webpack:///./node_modules/core-js/modules/_string-context.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/_string-html.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/modules/_string-html.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var $export = __webpack_require__(/*! ./_export */ \"./node_modules/core-js/modules/_export.js\");\nvar fails = __webpack_require__(/*! ./_fails */ \"./node_modules/core-js/modules/_fails.js\");\nvar defined = __webpack_require__(/*! ./_defined */ \"./node_modules/core-js/modules/_defined.js\");\nvar quot = /\"/g;\n// B.2.3.2.1 CreateHTML(string, tag, attribute, value)\nvar createHTML = function (string, tag, attribute, value) {\n  var S = String(defined(string));\n  var p1 = '<' + tag;\n  if (attribute !== '') p1 += ' ' + attribute + '=\"' + String(value).replace(quot, '&quot;') + '\"';\n  return p1 + '>' + S + '</' + tag + '>';\n};\nmodule.exports = function (NAME, exec) {\n  var O = {};\n  O[NAME] = exec(createHTML);\n  $export($export.P + $export.F * fails(function () {\n    var test = ''[NAME]('\"');\n    return test !== test.toLowerCase() || test.split('\"').length > 3;\n  }), 'String', O);\n};\n\n\n//# sourceURL=webpack:///./node_modules/core-js/modules/_string-html.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/_string-pad.js":
/*!*****************************************************!*\
  !*** ./node_modules/core-js/modules/_string-pad.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// https://github.com/tc39/proposal-string-pad-start-end\nvar toLength = __webpack_require__(/*! ./_to-length */ \"./node_modules/core-js/modules/_to-length.js\");\nvar repeat = __webpack_require__(/*! ./_string-repeat */ \"./node_modules/core-js/modules/_string-repeat.js\");\nvar defined = __webpack_require__(/*! ./_defined */ \"./node_modules/core-js/modules/_defined.js\");\n\nmodule.exports = function (that, maxLength, fillString, left) {\n  var S = String(defined(that));\n  var stringLength = S.length;\n  var fillStr = fillString === undefined ? ' ' : String(fillString);\n  var intMaxLength = toLength(maxLength);\n  if (intMaxLength <= stringLength || fillStr == '') return S;\n  var fillLen = intMaxLength - stringLength;\n  var stringFiller = repeat.call(fillStr, Math.ceil(fillLen / fillStr.length));\n  if (stringFiller.length > fillLen) stringFiller = stringFiller.slice(0, fillLen);\n  return left ? stringFiller + S : S + stringFiller;\n};\n\n\n//# sourceURL=webpack:///./node_modules/core-js/modules/_string-pad.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/_string-repeat.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js/modules/_string-repeat.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar toInteger = __webpack_require__(/*! ./_to-integer */ \"./node_modules/core-js/modules/_to-integer.js\");\nvar defined = __webpack_require__(/*! ./_defined */ \"./node_modules/core-js/modules/_defined.js\");\n\nmodule.exports = function repeat(count) {\n  var str = String(defined(this));\n  var res = '';\n  var n = toInteger(count);\n  if (n < 0 || n == Infinity) throw RangeError(\"Count can't be negative\");\n  for (;n > 0; (n >>>= 1) && (str += str)) if (n & 1) res += str;\n  return res;\n};\n\n\n//# sourceURL=webpack:///./node_modules/core-js/modules/_string-repeat.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/_string-trim.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/modules/_string-trim.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var $export = __webpack_require__(/*! ./_export */ \"./node_modules/core-js/modules/_export.js\");\nvar defined = __webpack_require__(/*! ./_defined */ \"./node_modules/core-js/modules/_defined.js\");\nvar fails = __webpack_require__(/*! ./_fails */ \"./node_modules/core-js/modules/_fails.js\");\nvar spaces = __webpack_require__(/*! ./_string-ws */ \"./node_modules/core-js/modules/_string-ws.js\");\nvar space = '[' + spaces + ']';\nvar non = '\\u200b\\u0085';\nvar ltrim = RegExp('^' + space + space + '*');\nvar rtrim = RegExp(space + space + '*$');\n\nvar exporter = function (KEY, exec, ALIAS) {\n  var exp = {};\n  var FORCE = fails(function () {\n    return !!spaces[KEY]() || non[KEY]() != non;\n  });\n  var fn = exp[KEY] = FORCE ? exec(trim) : spaces[KEY];\n  if (ALIAS) exp[ALIAS] = fn;\n  $export($export.P + $export.F * FORCE, 'String', exp);\n};\n\n// 1 -> String#trimLeft\n// 2 -> String#trimRight\n// 3 -> String#trim\nvar trim = exporter.trim = function (string, TYPE) {\n  string = String(defined(string));\n  if (TYPE & 1) string = string.replace(ltrim, '');\n  if (TYPE & 2) string = string.replace(rtrim, '');\n  return string;\n};\n\nmodule.exports = exporter;\n\n\n//# sourceURL=webpack:///./node_modules/core-js/modules/_string-trim.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/_string-ws.js":
/*!****************************************************!*\
  !*** ./node_modules/core-js/modules/_string-ws.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = '\\x09\\x0A\\x0B\\x0C\\x0D\\x20\\xA0\\u1680\\u180E\\u2000\\u2001\\u2002\\u2003' +\n  '\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200A\\u202F\\u205F\\u3000\\u2028\\u2029\\uFEFF';\n\n\n//# sourceURL=webpack:///./node_modules/core-js/modules/_string-ws.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/_task.js":
/*!***********************************************!*\
  !*** ./node_modules/core-js/modules/_task.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var ctx = __webpack_require__(/*! ./_ctx */ \"./node_modules/core-js/modules/_ctx.js\");\nvar invoke = __webpack_require__(/*! ./_invoke */ \"./node_modules/core-js/modules/_invoke.js\");\nvar html = __webpack_require__(/*! ./_html */ \"./node_modules/core-js/modules/_html.js\");\nvar cel = __webpack_require__(/*! ./_dom-create */ \"./node_modules/core-js/modules/_dom-create.js\");\nvar global = __webpack_require__(/*! ./_global */ \"./node_modules/core-js/modules/_global.js\");\nvar process = global.process;\nvar setTask = global.setImmediate;\nvar clearTask = global.clearImmediate;\nvar MessageChannel = global.MessageChannel;\nvar Dispatch = global.Dispatch;\nvar counter = 0;\nvar queue = {};\nvar ONREADYSTATECHANGE = 'onreadystatechange';\nvar defer, channel, port;\nvar run = function () {\n  var id = +this;\n  // eslint-disable-next-line no-prototype-builtins\n  if (queue.hasOwnProperty(id)) {\n    var fn = queue[id];\n    delete queue[id];\n    fn();\n  }\n};\nvar listener = function (event) {\n  run.call(event.data);\n};\n// Node.js 0.9+ & IE10+ has setImmediate, otherwise:\nif (!setTask || !clearTask) {\n  setTask = function setImmediate(fn) {\n    var args = [];\n    var i = 1;\n    while (arguments.length > i) args.push(arguments[i++]);\n    queue[++counter] = function () {\n      // eslint-disable-next-line no-new-func\n      invoke(typeof fn == 'function' ? fn : Function(fn), args);\n    };\n    defer(counter);\n    return counter;\n  };\n  clearTask = function clearImmediate(id) {\n    delete queue[id];\n  };\n  // Node.js 0.8-\n  if (__webpack_require__(/*! ./_cof */ \"./node_modules/core-js/modules/_cof.js\")(process) == 'process') {\n    defer = function (id) {\n      process.nextTick(ctx(run, id, 1));\n    };\n  // Sphere (JS game engine) Dispatch API\n  } else if (Dispatch && Dispatch.now) {\n    defer = function (id) {\n      Dispatch.now(ctx(run, id, 1));\n    };\n  // Browsers with MessageChannel, includes WebWorkers\n  } else if (MessageChannel) {\n    channel = new MessageChannel();\n    port = channel.port2;\n    channel.port1.onmessage = listener;\n    defer = ctx(port.postMessage, port, 1);\n  // Browsers with postMessage, skip WebWorkers\n  // IE8 has postMessage, but it's sync & typeof its postMessage is 'object'\n  } else if (global.addEventListener && typeof postMessage == 'function' && !global.importScripts) {\n    defer = function (id) {\n      global.postMessage(id + '', '*');\n    };\n    global.addEventListener('message', listener, false);\n  // IE8-\n  } else if (ONREADYSTATECHANGE in cel('script')) {\n    defer = function (id) {\n      html.appendChild(cel('script'))[ONREADYSTATECHANGE] = function () {\n        html.removeChild(this);\n        run.call(id);\n      };\n    };\n  // Rest old browsers\n  } else {\n    defer = function (id) {\n      setTimeout(ctx(run, id, 1), 0);\n    };\n  }\n}\nmodule.exports = {\n  set: setTask,\n  clear: clearTask\n};\n\n\n//# sourceURL=webpack:///./node_modules/core-js/modules/_task.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/_to-absolute-index.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js/modules/_to-absolute-index.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var toInteger = __webpack_require__(/*! ./_to-integer */ \"./node_modules/core-js/modules/_to-integer.js\");\nvar max = Math.max;\nvar min = Math.min;\nmodule.exports = function (index, length) {\n  index = toInteger(index);\n  return index < 0 ? max(index + length, 0) : min(index, length);\n};\n\n\n//# sourceURL=webpack:///./node_modules/core-js/modules/_to-absolute-index.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/_to-index.js":
/*!***************************************************!*\
  !*** ./node_modules/core-js/modules/_to-index.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// https://tc39.github.io/ecma262/#sec-toindex\nvar toInteger = __webpack_require__(/*! ./_to-integer */ \"./node_modules/core-js/modules/_to-integer.js\");\nvar toLength = __webpack_require__(/*! ./_to-length */ \"./node_modules/core-js/modules/_to-length.js\");\nmodule.exports = function (it) {\n  if (it === undefined) return 0;\n  var number = toInteger(it);\n  var length = toLength(number);\n  if (number !== length) throw RangeError('Wrong length!');\n  return length;\n};\n\n\n//# sourceURL=webpack:///./node_modules/core-js/modules/_to-index.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/_to-integer.js":
/*!*****************************************************!*\
  !*** ./node_modules/core-js/modules/_to-integer.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// 7.1.4 ToInteger\nvar ceil = Math.ceil;\nvar floor = Math.floor;\nmodule.exports = function (it) {\n  return isNaN(it = +it) ? 0 : (it > 0 ? floor : ceil)(it);\n};\n\n\n//# sourceURL=webpack:///./node_modules/core-js/modules/_to-integer.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/_to-iobject.js":
/*!*****************************************************!*\
  !*** ./node_modules/core-js/modules/_to-iobject.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// to indexed object, toObject with fallback for non-array-like ES3 strings\nvar IObject = __webpack_require__(/*! ./_iobject */ \"./node_modules/core-js/modules/_iobject.js\");\nvar defined = __webpack_require__(/*! ./_defined */ \"./node_modules/core-js/modules/_defined.js\");\nmodule.exports = function (it) {\n  return IObject(defined(it));\n};\n\n\n//# sourceURL=webpack:///./node_modules/core-js/modules/_to-iobject.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/_to-length.js":
/*!****************************************************!*\
  !*** ./node_modules/core-js/modules/_to-length.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// 7.1.15 ToLength\nvar toInteger = __webpack_require__(/*! ./_to-integer */ \"./node_modules/core-js/modules/_to-integer.js\");\nvar min = Math.min;\nmodule.exports = function (it) {\n  return it > 0 ? min(toInteger(it), 0x1fffffffffffff) : 0; // pow(2, 53) - 1 == 9007199254740991\n};\n\n\n//# sourceURL=webpack:///./node_modules/core-js/modules/_to-length.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/_to-object.js":
/*!****************************************************!*\
  !*** ./node_modules/core-js/modules/_to-object.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// 7.1.13 ToObject(argument)\nvar defined = __webpack_require__(/*! ./_defined */ \"./node_modules/core-js/modules/_defined.js\");\nmodule.exports = function (it) {\n  return Object(defined(it));\n};\n\n\n//# sourceURL=webpack:///./node_modules/core-js/modules/_to-object.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/_to-primitive.js":
/*!*******************************************************!*\
  !*** ./node_modules/core-js/modules/_to-primitive.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// 7.1.1 ToPrimitive(input [, PreferredType])\nvar isObject = __webpack_require__(/*! ./_is-object */ \"./node_modules/core-js/modules/_is-object.js\");\n// instead of the ES6 spec version, we didn't implement @@toPrimitive case\n// and the second argument - flag - preferred type is a string\nmodule.exports = function (it, S) {\n  if (!isObject(it)) return it;\n  var fn, val;\n  if (S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;\n  if (typeof (fn = it.valueOf) == 'function' && !isObject(val = fn.call(it))) return val;\n  if (!S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;\n  throw TypeError(\"Can't convert object to primitive value\");\n};\n\n\n//# sourceURL=webpack:///./node_modules/core-js/modules/_to-primitive.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/_typed-array.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/modules/_typed-array.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nif (__webpack_require__(/*! ./_descriptors */ \"./node_modules/core-js/modules/_descriptors.js\")) {\n  var LIBRARY = __webpack_require__(/*! ./_library */ \"./node_modules/core-js/modules/_library.js\");\n  var global = __webpack_require__(/*! ./_global */ \"./node_modules/core-js/modules/_global.js\");\n  var fails = __webpack_require__(/*! ./_fails */ \"./node_modules/core-js/modules/_fails.js\");\n  var $export = __webpack_require__(/*! ./_export */ \"./node_modules/core-js/modules/_export.js\");\n  var $typed = __webpack_require__(/*! ./_typed */ \"./node_modules/core-js/modules/_typed.js\");\n  var $buffer = __webpack_require__(/*! ./_typed-buffer */ \"./node_modules/core-js/modules/_typed-buffer.js\");\n  var ctx = __webpack_require__(/*! ./_ctx */ \"./node_modules/core-js/modules/_ctx.js\");\n  var anInstance = __webpack_require__(/*! ./_an-instance */ \"./node_modules/core-js/modules/_an-instance.js\");\n  var propertyDesc = __webpack_require__(/*! ./_property-desc */ \"./node_modules/core-js/modules/_property-desc.js\");\n  var hide = __webpack_require__(/*! ./_hide */ \"./node_modules/core-js/modules/_hide.js\");\n  var redefineAll = __webpack_require__(/*! ./_redefine-all */ \"./node_modules/core-js/modules/_redefine-all.js\");\n  var toInteger = __webpack_require__(/*! ./_to-integer */ \"./node_modules/core-js/modules/_to-integer.js\");\n  var toLength = __webpack_require__(/*! ./_to-length */ \"./node_modules/core-js/modules/_to-length.js\");\n  var toIndex = __webpack_require__(/*! ./_to-index */ \"./node_modules/core-js/modules/_to-index.js\");\n  var toAbsoluteIndex = __webpack_require__(/*! ./_to-absolute-index */ \"./node_modules/core-js/modules/_to-absolute-index.js\");\n  var toPrimitive = __webpack_require__(/*! ./_to-primitive */ \"./node_modules/core-js/modules/_to-primitive.js\");\n  var has = __webpack_require__(/*! ./_has */ \"./node_modules/core-js/modules/_has.js\");\n  var classof = __webpack_require__(/*! ./_classof */ \"./node_modules/core-js/modules/_classof.js\");\n  var isObject = __webpack_require__(/*! ./_is-object */ \"./node_modules/core-js/modules/_is-object.js\");\n  var toObject = __webpack_require__(/*! ./_to-object */ \"./node_modules/core-js/modules/_to-object.js\");\n  var isArrayIter = __webpack_require__(/*! ./_is-array-iter */ \"./node_modules/core-js/modules/_is-array-iter.js\");\n  var create = __webpack_require__(/*! ./_object-create */ \"./node_modules/core-js/modules/_object-create.js\");\n  var getPrototypeOf = __webpack_require__(/*! ./_object-gpo */ \"./node_modules/core-js/modules/_object-gpo.js\");\n  var gOPN = __webpack_require__(/*! ./_object-gopn */ \"./node_modules/core-js/modules/_object-gopn.js\").f;\n  var getIterFn = __webpack_require__(/*! ./core.get-iterator-method */ \"./node_modules/core-js/modules/core.get-iterator-method.js\");\n  var uid = __webpack_require__(/*! ./_uid */ \"./node_modules/core-js/modules/_uid.js\");\n  var wks = __webpack_require__(/*! ./_wks */ \"./node_modules/core-js/modules/_wks.js\");\n  var createArrayMethod = __webpack_require__(/*! ./_array-methods */ \"./node_modules/core-js/modules/_array-methods.js\");\n  var createArrayIncludes = __webpack_require__(/*! ./_array-includes */ \"./node_modules/core-js/modules/_array-includes.js\");\n  var speciesConstructor = __webpack_require__(/*! ./_species-constructor */ \"./node_modules/core-js/modules/_species-constructor.js\");\n  var ArrayIterators = __webpack_require__(/*! ./es6.array.iterator */ \"./node_modules/core-js/modules/es6.array.iterator.js\");\n  var Iterators = __webpack_require__(/*! ./_iterators */ \"./node_modules/core-js/modules/_iterators.js\");\n  var $iterDetect = __webpack_require__(/*! ./_iter-detect */ \"./node_modules/core-js/modules/_iter-detect.js\");\n  var setSpecies = __webpack_require__(/*! ./_set-species */ \"./node_modules/core-js/modules/_set-species.js\");\n  var arrayFill = __webpack_require__(/*! ./_array-fill */ \"./node_modules/core-js/modules/_array-fill.js\");\n  var arrayCopyWithin = __webpack_require__(/*! ./_array-copy-within */ \"./node_modules/core-js/modules/_array-copy-within.js\");\n  var $DP = __webpack_require__(/*! ./_object-dp */ \"./node_modules/core-js/modules/_object-dp.js\");\n  var $GOPD = __webpack_require__(/*! ./_object-gopd */ \"./node_modules/core-js/modules/_object-gopd.js\");\n  var dP = $DP.f;\n  var gOPD = $GOPD.f;\n  var RangeError = global.RangeError;\n  var TypeError = global.TypeError;\n  var Uint8Array = global.Uint8Array;\n  var ARRAY_BUFFER = 'ArrayBuffer';\n  var SHARED_BUFFER = 'Shared' + ARRAY_BUFFER;\n  var BYTES_PER_ELEMENT = 'BYTES_PER_ELEMENT';\n  var PROTOTYPE = 'prototype';\n  var ArrayProto = Array[PROTOTYPE];\n  var $ArrayBuffer = $buffer.ArrayBuffer;\n  var $DataView = $buffer.DataView;\n  var arrayForEach = createArrayMethod(0);\n  var arrayFilter = createArrayMethod(2);\n  var arraySome = createArrayMethod(3);\n  var arrayEvery = createArrayMethod(4);\n  var arrayFind = createArrayMethod(5);\n  var arrayFindIndex = createArrayMethod(6);\n  var arrayIncludes = createArrayIncludes(true);\n  var arrayIndexOf = createArrayIncludes(false);\n  var arrayValues = ArrayIterators.values;\n  var arrayKeys = ArrayIterators.keys;\n  var arrayEntries = ArrayIterators.entries;\n  var arrayLastIndexOf = ArrayProto.lastIndexOf;\n  var arrayReduce = ArrayProto.reduce;\n  var arrayReduceRight = ArrayProto.reduceRight;\n  var arrayJoin = ArrayProto.join;\n  var arraySort = ArrayProto.sort;\n  var arraySlice = ArrayProto.slice;\n  var arrayToString = ArrayProto.toString;\n  var arrayToLocaleString = ArrayProto.toLocaleString;\n  var ITERATOR = wks('iterator');\n  var TAG = wks('toStringTag');\n  var TYPED_CONSTRUCTOR = uid('typed_constructor');\n  var DEF_CONSTRUCTOR = uid('def_constructor');\n  var ALL_CONSTRUCTORS = $typed.CONSTR;\n  var TYPED_ARRAY = $typed.TYPED;\n  var VIEW = $typed.VIEW;\n  var WRONG_LENGTH = 'Wrong length!';\n\n  var $map = createArrayMethod(1, function (O, length) {\n    return allocate(speciesConstructor(O, O[DEF_CONSTRUCTOR]), length);\n  });\n\n  var LITTLE_ENDIAN = fails(function () {\n    // eslint-disable-next-line no-undef\n    return new Uint8Array(new Uint16Array([1]).buffer)[0] === 1;\n  });\n\n  var FORCED_SET = !!Uint8Array && !!Uint8Array[PROTOTYPE].set && fails(function () {\n    new Uint8Array(1).set({});\n  });\n\n  var toOffset = function (it, BYTES) {\n    var offset = toInteger(it);\n    if (offset < 0 || offset % BYTES) throw RangeError('Wrong offset!');\n    return offset;\n  };\n\n  var validate = function (it) {\n    if (isObject(it) && TYPED_ARRAY in it) return it;\n    throw TypeError(it + ' is not a typed array!');\n  };\n\n  var allocate = function (C, length) {\n    if (!(isObject(C) && TYPED_CONSTRUCTOR in C)) {\n      throw TypeError('It is not a typed array constructor!');\n    } return new C(length);\n  };\n\n  var speciesFromList = function (O, list) {\n    return fromList(speciesConstructor(O, O[DEF_CONSTRUCTOR]), list);\n  };\n\n  var fromList = function (C, list) {\n    var index = 0;\n    var length = list.length;\n    var result = allocate(C, length);\n    while (length > index) result[index] = list[index++];\n    return result;\n  };\n\n  var addGetter = function (it, key, internal) {\n    dP(it, key, { get: function () { return this._d[internal]; } });\n  };\n\n  var $from = function from(source /* , mapfn, thisArg */) {\n    var O = toObject(source);\n    var aLen = arguments.length;\n    var mapfn = aLen > 1 ? arguments[1] : undefined;\n    var mapping = mapfn !== undefined;\n    var iterFn = getIterFn(O);\n    var i, length, values, result, step, iterator;\n    if (iterFn != undefined && !isArrayIter(iterFn)) {\n      for (iterator = iterFn.call(O), values = [], i = 0; !(step = iterator.next()).done; i++) {\n        values.push(step.value);\n      } O = values;\n    }\n    if (mapping && aLen > 2) mapfn = ctx(mapfn, arguments[2], 2);\n    for (i = 0, length = toLength(O.length), result = allocate(this, length); length > i; i++) {\n      result[i] = mapping ? mapfn(O[i], i) : O[i];\n    }\n    return result;\n  };\n\n  var $of = function of(/* ...items */) {\n    var index = 0;\n    var length = arguments.length;\n    var result = allocate(this, length);\n    while (length > index) result[index] = arguments[index++];\n    return result;\n  };\n\n  // iOS Safari 6.x fails here\n  var TO_LOCALE_BUG = !!Uint8Array && fails(function () { arrayToLocaleString.call(new Uint8Array(1)); });\n\n  var $toLocaleString = function toLocaleString() {\n    return arrayToLocaleString.apply(TO_LOCALE_BUG ? arraySlice.call(validate(this)) : validate(this), arguments);\n  };\n\n  var proto = {\n    copyWithin: function copyWithin(target, start /* , end */) {\n      return arrayCopyWithin.call(validate(this), target, start, arguments.length > 2 ? arguments[2] : undefined);\n    },\n    every: function every(callbackfn /* , thisArg */) {\n      return arrayEvery(validate(this), callbackfn, arguments.length > 1 ? arguments[1] : undefined);\n    },\n    fill: function fill(value /* , start, end */) { // eslint-disable-line no-unused-vars\n      return arrayFill.apply(validate(this), arguments);\n    },\n    filter: function filter(callbackfn /* , thisArg */) {\n      return speciesFromList(this, arrayFilter(validate(this), callbackfn,\n        arguments.length > 1 ? arguments[1] : undefined));\n    },\n    find: function find(predicate /* , thisArg */) {\n      return arrayFind(validate(this), predicate, arguments.length > 1 ? arguments[1] : undefined);\n    },\n    findIndex: function findIndex(predicate /* , thisArg */) {\n      return arrayFindIndex(validate(this), predicate, arguments.length > 1 ? arguments[1] : undefined);\n    },\n    forEach: function forEach(callbackfn /* , thisArg */) {\n      arrayForEach(validate(this), callbackfn, arguments.length > 1 ? arguments[1] : undefined);\n    },\n    indexOf: function indexOf(searchElement /* , fromIndex */) {\n      return arrayIndexOf(validate(this), searchElement, arguments.length > 1 ? arguments[1] : undefined);\n    },\n    includes: function includes(searchElement /* , fromIndex */) {\n      return arrayIncludes(validate(this), searchElement, arguments.length > 1 ? arguments[1] : undefined);\n    },\n    join: function join(separator) { // eslint-disable-line no-unused-vars\n      return arrayJoin.apply(validate(this), arguments);\n    },\n    lastIndexOf: function lastIndexOf(searchElement /* , fromIndex */) { // eslint-disable-line no-unused-vars\n      return arrayLastIndexOf.apply(validate(this), arguments);\n    },\n    map: function map(mapfn /* , thisArg */) {\n      return $map(validate(this), mapfn, arguments.length > 1 ? arguments[1] : undefined);\n    },\n    reduce: function reduce(callbackfn /* , initialValue */) { // eslint-disable-line no-unused-vars\n      return arrayReduce.apply(validate(this), arguments);\n    },\n    reduceRight: function reduceRight(callbackfn /* , initialValue */) { // eslint-disable-line no-unused-vars\n      return arrayReduceRight.apply(validate(this), arguments);\n    },\n    reverse: function reverse() {\n      var that = this;\n      var length = validate(that).length;\n      var middle = Math.floor(length / 2);\n      var index = 0;\n      var value;\n      while (index < middle) {\n        value = that[index];\n        that[index++] = that[--length];\n        that[length] = value;\n      } return that;\n    },\n    some: function some(callbackfn /* , thisArg */) {\n      return arraySome(validate(this), callbackfn, arguments.length > 1 ? arguments[1] : undefined);\n    },\n    sort: function sort(comparefn) {\n      return arraySort.call(validate(this), comparefn);\n    },\n    subarray: function subarray(begin, end) {\n      var O = validate(this);\n      var length = O.length;\n      var $begin = toAbsoluteIndex(begin, length);\n      return new (speciesConstructor(O, O[DEF_CONSTRUCTOR]))(\n        O.buffer,\n        O.byteOffset + $begin * O.BYTES_PER_ELEMENT,\n        toLength((end === undefined ? length : toAbsoluteIndex(end, length)) - $begin)\n      );\n    }\n  };\n\n  var $slice = function slice(start, end) {\n    return speciesFromList(this, arraySlice.call(validate(this), start, end));\n  };\n\n  var $set = function set(arrayLike /* , offset */) {\n    validate(this);\n    var offset = toOffset(arguments[1], 1);\n    var length = this.length;\n    var src = toObject(arrayLike);\n    var len = toLength(src.length);\n    var index = 0;\n    if (len + offset > length) throw RangeError(WRONG_LENGTH);\n    while (index < len) this[offset + index] = src[index++];\n  };\n\n  var $iterators = {\n    entries: function entries() {\n      return arrayEntries.call(validate(this));\n    },\n    keys: function keys() {\n      return arrayKeys.call(validate(this));\n    },\n    values: function values() {\n      return arrayValues.call(validate(this));\n    }\n  };\n\n  var isTAIndex = function (target, key) {\n    return isObject(target)\n      && target[TYPED_ARRAY]\n      && typeof key != 'symbol'\n      && key in target\n      && String(+key) == String(key);\n  };\n  var $getDesc = function getOwnPropertyDescriptor(target, key) {\n    return isTAIndex(target, key = toPrimitive(key, true))\n      ? propertyDesc(2, target[key])\n      : gOPD(target, key);\n  };\n  var $setDesc = function defineProperty(target, key, desc) {\n    if (isTAIndex(target, key = toPrimitive(key, true))\n      && isObject(desc)\n      && has(desc, 'value')\n      && !has(desc, 'get')\n      && !has(desc, 'set')\n      // TODO: add validation descriptor w/o calling accessors\n      && !desc.configurable\n      && (!has(desc, 'writable') || desc.writable)\n      && (!has(desc, 'enumerable') || desc.enumerable)\n    ) {\n      target[key] = desc.value;\n      return target;\n    } return dP(target, key, desc);\n  };\n\n  if (!ALL_CONSTRUCTORS) {\n    $GOPD.f = $getDesc;\n    $DP.f = $setDesc;\n  }\n\n  $export($export.S + $export.F * !ALL_CONSTRUCTORS, 'Object', {\n    getOwnPropertyDescriptor: $getDesc,\n    defineProperty: $setDesc\n  });\n\n  if (fails(function () { arrayToString.call({}); })) {\n    arrayToString = arrayToLocaleString = function toString() {\n      return arrayJoin.call(this);\n    };\n  }\n\n  var $TypedArrayPrototype$ = redefineAll({}, proto);\n  redefineAll($TypedArrayPrototype$, $iterators);\n  hide($TypedArrayPrototype$, ITERATOR, $iterators.values);\n  redefineAll($TypedArrayPrototype$, {\n    slice: $slice,\n    set: $set,\n    constructor: function () { /* noop */ },\n    toString: arrayToString,\n    toLocaleString: $toLocaleString\n  });\n  addGetter($TypedArrayPrototype$, 'buffer', 'b');\n  addGetter($TypedArrayPrototype$, 'byteOffset', 'o');\n  addGetter($TypedArrayPrototype$, 'byteLength', 'l');\n  addGetter($TypedArrayPrototype$, 'length', 'e');\n  dP($TypedArrayPrototype$, TAG, {\n    get: function () { return this[TYPED_ARRAY]; }\n  });\n\n  // eslint-disable-next-line max-statements\n  module.exports = function (KEY, BYTES, wrapper, CLAMPED) {\n    CLAMPED = !!CLAMPED;\n    var NAME = KEY + (CLAMPED ? 'Clamped' : '') + 'Array';\n    var GETTER = 'get' + KEY;\n    var SETTER = 'set' + KEY;\n    var TypedArray = global[NAME];\n    var Base = TypedArray || {};\n    var TAC = TypedArray && getPrototypeOf(TypedArray);\n    var FORCED = !TypedArray || !$typed.ABV;\n    var O = {};\n    var TypedArrayPrototype = TypedArray && TypedArray[PROTOTYPE];\n    var getter = function (that, index) {\n      var data = that._d;\n      return data.v[GETTER](index * BYTES + data.o, LITTLE_ENDIAN);\n    };\n    var setter = function (that, index, value) {\n      var data = that._d;\n      if (CLAMPED) value = (value = Math.round(value)) < 0 ? 0 : value > 0xff ? 0xff : value & 0xff;\n      data.v[SETTER](index * BYTES + data.o, value, LITTLE_ENDIAN);\n    };\n    var addElement = function (that, index) {\n      dP(that, index, {\n        get: function () {\n          return getter(this, index);\n        },\n        set: function (value) {\n          return setter(this, index, value);\n        },\n        enumerable: true\n      });\n    };\n    if (FORCED) {\n      TypedArray = wrapper(function (that, data, $offset, $length) {\n        anInstance(that, TypedArray, NAME, '_d');\n        var index = 0;\n        var offset = 0;\n        var buffer, byteLength, length, klass;\n        if (!isObject(data)) {\n          length = toIndex(data);\n          byteLength = length * BYTES;\n          buffer = new $ArrayBuffer(byteLength);\n        } else if (data instanceof $ArrayBuffer || (klass = classof(data)) == ARRAY_BUFFER || klass == SHARED_BUFFER) {\n          buffer = data;\n          offset = toOffset($offset, BYTES);\n          var $len = data.byteLength;\n          if ($length === undefined) {\n            if ($len % BYTES) throw RangeError(WRONG_LENGTH);\n            byteLength = $len - offset;\n            if (byteLength < 0) throw RangeError(WRONG_LENGTH);\n          } else {\n            byteLength = toLength($length) * BYTES;\n            if (byteLength + offset > $len) throw RangeError(WRONG_LENGTH);\n          }\n          length = byteLength / BYTES;\n        } else if (TYPED_ARRAY in data) {\n          return fromList(TypedArray, data);\n        } else {\n          return $from.call(TypedArray, data);\n        }\n        hide(that, '_d', {\n          b: buffer,\n          o: offset,\n          l: byteLength,\n          e: length,\n          v: new $DataView(buffer)\n        });\n        while (index < length) addElement(that, index++);\n      });\n      TypedArrayPrototype = TypedArray[PROTOTYPE] = create($TypedArrayPrototype$);\n      hide(TypedArrayPrototype, 'constructor', TypedArray);\n    } else if (!fails(function () {\n      TypedArray(1);\n    }) || !fails(function () {\n      new TypedArray(-1); // eslint-disable-line no-new\n    }) || !$iterDetect(function (iter) {\n      new TypedArray(); // eslint-disable-line no-new\n      new TypedArray(null); // eslint-disable-line no-new\n      new TypedArray(1.5); // eslint-disable-line no-new\n      new TypedArray(iter); // eslint-disable-line no-new\n    }, true)) {\n      TypedArray = wrapper(function (that, data, $offset, $length) {\n        anInstance(that, TypedArray, NAME);\n        var klass;\n        // `ws` module bug, temporarily remove validation length for Uint8Array\n        // https://github.com/websockets/ws/pull/645\n        if (!isObject(data)) return new Base(toIndex(data));\n        if (data instanceof $ArrayBuffer || (klass = classof(data)) == ARRAY_BUFFER || klass == SHARED_BUFFER) {\n          return $length !== undefined\n            ? new Base(data, toOffset($offset, BYTES), $length)\n            : $offset !== undefined\n              ? new Base(data, toOffset($offset, BYTES))\n              : new Base(data);\n        }\n        if (TYPED_ARRAY in data) return fromList(TypedArray, data);\n        return $from.call(TypedArray, data);\n      });\n      arrayForEach(TAC !== Function.prototype ? gOPN(Base).concat(gOPN(TAC)) : gOPN(Base), function (key) {\n        if (!(key in TypedArray)) hide(TypedArray, key, Base[key]);\n      });\n      TypedArray[PROTOTYPE] = TypedArrayPrototype;\n      if (!LIBRARY) TypedArrayPrototype.constructor = TypedArray;\n    }\n    var $nativeIterator = TypedArrayPrototype[ITERATOR];\n    var CORRECT_ITER_NAME = !!$nativeIterator\n      && ($nativeIterator.name == 'values' || $nativeIterator.name == undefined);\n    var $iterator = $iterators.values;\n    hide(TypedArray, TYPED_CONSTRUCTOR, true);\n    hide(TypedArrayPrototype, TYPED_ARRAY, NAME);\n    hide(TypedArrayPrototype, VIEW, true);\n    hide(TypedArrayPrototype, DEF_CONSTRUCTOR, TypedArray);\n\n    if (CLAMPED ? new TypedArray(1)[TAG] != NAME : !(TAG in TypedArrayPrototype)) {\n      dP(TypedArrayPrototype, TAG, {\n        get: function () { return NAME; }\n      });\n    }\n\n    O[NAME] = TypedArray;\n\n    $export($export.G + $export.W + $export.F * (TypedArray != Base), O);\n\n    $export($export.S, NAME, {\n      BYTES_PER_ELEMENT: BYTES\n    });\n\n    $export($export.S + $export.F * fails(function () { Base.of.call(TypedArray, 1); }), NAME, {\n      from: $from,\n      of: $of\n    });\n\n    if (!(BYTES_PER_ELEMENT in TypedArrayPrototype)) hide(TypedArrayPrototype, BYTES_PER_ELEMENT, BYTES);\n\n    $export($export.P, NAME, proto);\n\n    setSpecies(NAME);\n\n    $export($export.P + $export.F * FORCED_SET, NAME, { set: $set });\n\n    $export($export.P + $export.F * !CORRECT_ITER_NAME, NAME, $iterators);\n\n    if (!LIBRARY && TypedArrayPrototype.toString != arrayToString) TypedArrayPrototype.toString = arrayToString;\n\n    $export($export.P + $export.F * fails(function () {\n      new TypedArray(1).slice();\n    }), NAME, { slice: $slice });\n\n    $export($export.P + $export.F * (fails(function () {\n      return [1, 2].toLocaleString() != new TypedArray([1, 2]).toLocaleString();\n    }) || !fails(function () {\n      TypedArrayPrototype.toLocaleString.call([1, 2]);\n    })), NAME, { toLocaleString: $toLocaleString });\n\n    Iterators[NAME] = CORRECT_ITER_NAME ? $nativeIterator : $iterator;\n    if (!LIBRARY && !CORRECT_ITER_NAME) hide(TypedArrayPrototype, ITERATOR, $iterator);\n  };\n} else module.exports = function () { /* empty */ };\n\n\n//# sourceURL=webpack:///./node_modules/core-js/modules/_typed-array.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/_typed-buffer.js":
/*!*******************************************************!*\
  !*** ./node_modules/core-js/modules/_typed-buffer.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar global = __webpack_require__(/*! ./_global */ \"./node_modules/core-js/modules/_global.js\");\nvar DESCRIPTORS = __webpack_require__(/*! ./_descriptors */ \"./node_modules/core-js/modules/_descriptors.js\");\nvar LIBRARY = __webpack_require__(/*! ./_library */ \"./node_modules/core-js/modules/_library.js\");\nvar $typed = __webpack_require__(/*! ./_typed */ \"./node_modules/core-js/modules/_typed.js\");\nvar hide = __webpack_require__(/*! ./_hide */ \"./node_modules/core-js/modules/_hide.js\");\nvar redefineAll = __webpack_require__(/*! ./_redefine-all */ \"./node_modules/core-js/modules/_redefine-all.js\");\nvar fails = __webpack_require__(/*! ./_fails */ \"./node_modules/core-js/modules/_fails.js\");\nvar anInstance = __webpack_require__(/*! ./_an-instance */ \"./node_modules/core-js/modules/_an-instance.js\");\nvar toInteger = __webpack_require__(/*! ./_to-integer */ \"./node_modules/core-js/modules/_to-integer.js\");\nvar toLength = __webpack_require__(/*! ./_to-length */ \"./node_modules/core-js/modules/_to-length.js\");\nvar toIndex = __webpack_require__(/*! ./_to-index */ \"./node_modules/core-js/modules/_to-index.js\");\nvar gOPN = __webpack_require__(/*! ./_object-gopn */ \"./node_modules/core-js/modules/_object-gopn.js\").f;\nvar dP = __webpack_require__(/*! ./_object-dp */ \"./node_modules/core-js/modules/_object-dp.js\").f;\nvar arrayFill = __webpack_require__(/*! ./_array-fill */ \"./node_modules/core-js/modules/_array-fill.js\");\nvar setToStringTag = __webpack_require__(/*! ./_set-to-string-tag */ \"./node_modules/core-js/modules/_set-to-string-tag.js\");\nvar ARRAY_BUFFER = 'ArrayBuffer';\nvar DATA_VIEW = 'DataView';\nvar PROTOTYPE = 'prototype';\nvar WRONG_LENGTH = 'Wrong length!';\nvar WRONG_INDEX = 'Wrong index!';\nvar $ArrayBuffer = global[ARRAY_BUFFER];\nvar $DataView = global[DATA_VIEW];\nvar Math = global.Math;\nvar RangeError = global.RangeError;\n// eslint-disable-next-line no-shadow-restricted-names\nvar Infinity = global.Infinity;\nvar BaseBuffer = $ArrayBuffer;\nvar abs = Math.abs;\nvar pow = Math.pow;\nvar floor = Math.floor;\nvar log = Math.log;\nvar LN2 = Math.LN2;\nvar BUFFER = 'buffer';\nvar BYTE_LENGTH = 'byteLength';\nvar BYTE_OFFSET = 'byteOffset';\nvar $BUFFER = DESCRIPTORS ? '_b' : BUFFER;\nvar $LENGTH = DESCRIPTORS ? '_l' : BYTE_LENGTH;\nvar $OFFSET = DESCRIPTORS ? '_o' : BYTE_OFFSET;\n\n// IEEE754 conversions based on https://github.com/feross/ieee754\nfunction packIEEE754(value, mLen, nBytes) {\n  var buffer = new Array(nBytes);\n  var eLen = nBytes * 8 - mLen - 1;\n  var eMax = (1 << eLen) - 1;\n  var eBias = eMax >> 1;\n  var rt = mLen === 23 ? pow(2, -24) - pow(2, -77) : 0;\n  var i = 0;\n  var s = value < 0 || value === 0 && 1 / value < 0 ? 1 : 0;\n  var e, m, c;\n  value = abs(value);\n  // eslint-disable-next-line no-self-compare\n  if (value != value || value === Infinity) {\n    // eslint-disable-next-line no-self-compare\n    m = value != value ? 1 : 0;\n    e = eMax;\n  } else {\n    e = floor(log(value) / LN2);\n    if (value * (c = pow(2, -e)) < 1) {\n      e--;\n      c *= 2;\n    }\n    if (e + eBias >= 1) {\n      value += rt / c;\n    } else {\n      value += rt * pow(2, 1 - eBias);\n    }\n    if (value * c >= 2) {\n      e++;\n      c /= 2;\n    }\n    if (e + eBias >= eMax) {\n      m = 0;\n      e = eMax;\n    } else if (e + eBias >= 1) {\n      m = (value * c - 1) * pow(2, mLen);\n      e = e + eBias;\n    } else {\n      m = value * pow(2, eBias - 1) * pow(2, mLen);\n      e = 0;\n    }\n  }\n  for (; mLen >= 8; buffer[i++] = m & 255, m /= 256, mLen -= 8);\n  e = e << mLen | m;\n  eLen += mLen;\n  for (; eLen > 0; buffer[i++] = e & 255, e /= 256, eLen -= 8);\n  buffer[--i] |= s * 128;\n  return buffer;\n}\nfunction unpackIEEE754(buffer, mLen, nBytes) {\n  var eLen = nBytes * 8 - mLen - 1;\n  var eMax = (1 << eLen) - 1;\n  var eBias = eMax >> 1;\n  var nBits = eLen - 7;\n  var i = nBytes - 1;\n  var s = buffer[i--];\n  var e = s & 127;\n  var m;\n  s >>= 7;\n  for (; nBits > 0; e = e * 256 + buffer[i], i--, nBits -= 8);\n  m = e & (1 << -nBits) - 1;\n  e >>= -nBits;\n  nBits += mLen;\n  for (; nBits > 0; m = m * 256 + buffer[i], i--, nBits -= 8);\n  if (e === 0) {\n    e = 1 - eBias;\n  } else if (e === eMax) {\n    return m ? NaN : s ? -Infinity : Infinity;\n  } else {\n    m = m + pow(2, mLen);\n    e = e - eBias;\n  } return (s ? -1 : 1) * m * pow(2, e - mLen);\n}\n\nfunction unpackI32(bytes) {\n  return bytes[3] << 24 | bytes[2] << 16 | bytes[1] << 8 | bytes[0];\n}\nfunction packI8(it) {\n  return [it & 0xff];\n}\nfunction packI16(it) {\n  return [it & 0xff, it >> 8 & 0xff];\n}\nfunction packI32(it) {\n  return [it & 0xff, it >> 8 & 0xff, it >> 16 & 0xff, it >> 24 & 0xff];\n}\nfunction packF64(it) {\n  return packIEEE754(it, 52, 8);\n}\nfunction packF32(it) {\n  return packIEEE754(it, 23, 4);\n}\n\nfunction addGetter(C, key, internal) {\n  dP(C[PROTOTYPE], key, { get: function () { return this[internal]; } });\n}\n\nfunction get(view, bytes, index, isLittleEndian) {\n  var numIndex = +index;\n  var intIndex = toIndex(numIndex);\n  if (intIndex + bytes > view[$LENGTH]) throw RangeError(WRONG_INDEX);\n  var store = view[$BUFFER]._b;\n  var start = intIndex + view[$OFFSET];\n  var pack = store.slice(start, start + bytes);\n  return isLittleEndian ? pack : pack.reverse();\n}\nfunction set(view, bytes, index, conversion, value, isLittleEndian) {\n  var numIndex = +index;\n  var intIndex = toIndex(numIndex);\n  if (intIndex + bytes > view[$LENGTH]) throw RangeError(WRONG_INDEX);\n  var store = view[$BUFFER]._b;\n  var start = intIndex + view[$OFFSET];\n  var pack = conversion(+value);\n  for (var i = 0; i < bytes; i++) store[start + i] = pack[isLittleEndian ? i : bytes - i - 1];\n}\n\nif (!$typed.ABV) {\n  $ArrayBuffer = function ArrayBuffer(length) {\n    anInstance(this, $ArrayBuffer, ARRAY_BUFFER);\n    var byteLength = toIndex(length);\n    this._b = arrayFill.call(new Array(byteLength), 0);\n    this[$LENGTH] = byteLength;\n  };\n\n  $DataView = function DataView(buffer, byteOffset, byteLength) {\n    anInstance(this, $DataView, DATA_VIEW);\n    anInstance(buffer, $ArrayBuffer, DATA_VIEW);\n    var bufferLength = buffer[$LENGTH];\n    var offset = toInteger(byteOffset);\n    if (offset < 0 || offset > bufferLength) throw RangeError('Wrong offset!');\n    byteLength = byteLength === undefined ? bufferLength - offset : toLength(byteLength);\n    if (offset + byteLength > bufferLength) throw RangeError(WRONG_LENGTH);\n    this[$BUFFER] = buffer;\n    this[$OFFSET] = offset;\n    this[$LENGTH] = byteLength;\n  };\n\n  if (DESCRIPTORS) {\n    addGetter($ArrayBuffer, BYTE_LENGTH, '_l');\n    addGetter($DataView, BUFFER, '_b');\n    addGetter($DataView, BYTE_LENGTH, '_l');\n    addGetter($DataView, BYTE_OFFSET, '_o');\n  }\n\n  redefineAll($DataView[PROTOTYPE], {\n    getInt8: function getInt8(byteOffset) {\n      return get(this, 1, byteOffset)[0] << 24 >> 24;\n    },\n    getUint8: function getUint8(byteOffset) {\n      return get(this, 1, byteOffset)[0];\n    },\n    getInt16: function getInt16(byteOffset /* , littleEndian */) {\n      var bytes = get(this, 2, byteOffset, arguments[1]);\n      return (bytes[1] << 8 | bytes[0]) << 16 >> 16;\n    },\n    getUint16: function getUint16(byteOffset /* , littleEndian */) {\n      var bytes = get(this, 2, byteOffset, arguments[1]);\n      return bytes[1] << 8 | bytes[0];\n    },\n    getInt32: function getInt32(byteOffset /* , littleEndian */) {\n      return unpackI32(get(this, 4, byteOffset, arguments[1]));\n    },\n    getUint32: function getUint32(byteOffset /* , littleEndian */) {\n      return unpackI32(get(this, 4, byteOffset, arguments[1])) >>> 0;\n    },\n    getFloat32: function getFloat32(byteOffset /* , littleEndian */) {\n      return unpackIEEE754(get(this, 4, byteOffset, arguments[1]), 23, 4);\n    },\n    getFloat64: function getFloat64(byteOffset /* , littleEndian */) {\n      return unpackIEEE754(get(this, 8, byteOffset, arguments[1]), 52, 8);\n    },\n    setInt8: function setInt8(byteOffset, value) {\n      set(this, 1, byteOffset, packI8, value);\n    },\n    setUint8: function setUint8(byteOffset, value) {\n      set(this, 1, byteOffset, packI8, value);\n    },\n    setInt16: function setInt16(byteOffset, value /* , littleEndian */) {\n      set(this, 2, byteOffset, packI16, value, arguments[2]);\n    },\n    setUint16: function setUint16(byteOffset, value /* , littleEndian */) {\n      set(this, 2, byteOffset, packI16, value, arguments[2]);\n    },\n    setInt32: function setInt32(byteOffset, value /* , littleEndian */) {\n      set(this, 4, byteOffset, packI32, value, arguments[2]);\n    },\n    setUint32: function setUint32(byteOffset, value /* , littleEndian */) {\n      set(this, 4, byteOffset, packI32, value, arguments[2]);\n    },\n    setFloat32: function setFloat32(byteOffset, value /* , littleEndian */) {\n      set(this, 4, byteOffset, packF32, value, arguments[2]);\n    },\n    setFloat64: function setFloat64(byteOffset, value /* , littleEndian */) {\n      set(this, 8, byteOffset, packF64, value, arguments[2]);\n    }\n  });\n} else {\n  if (!fails(function () {\n    $ArrayBuffer(1);\n  }) || !fails(function () {\n    new $ArrayBuffer(-1); // eslint-disable-line no-new\n  }) || fails(function () {\n    new $ArrayBuffer(); // eslint-disable-line no-new\n    new $ArrayBuffer(1.5); // eslint-disable-line no-new\n    new $ArrayBuffer(NaN); // eslint-disable-line no-new\n    return $ArrayBuffer.name != ARRAY_BUFFER;\n  })) {\n    $ArrayBuffer = function ArrayBuffer(length) {\n      anInstance(this, $ArrayBuffer);\n      return new BaseBuffer(toIndex(length));\n    };\n    var ArrayBufferProto = $ArrayBuffer[PROTOTYPE] = BaseBuffer[PROTOTYPE];\n    for (var keys = gOPN(BaseBuffer), j = 0, key; keys.length > j;) {\n      if (!((key = keys[j++]) in $ArrayBuffer)) hide($ArrayBuffer, key, BaseBuffer[key]);\n    }\n    if (!LIBRARY) ArrayBufferProto.constructor = $ArrayBuffer;\n  }\n  // iOS Safari 7.x bug\n  var view = new $DataView(new $ArrayBuffer(2));\n  var $setInt8 = $DataView[PROTOTYPE].setInt8;\n  view.setInt8(0, 2147483648);\n  view.setInt8(1, 2147483649);\n  if (view.getInt8(0) || !view.getInt8(1)) redefineAll($DataView[PROTOTYPE], {\n    setInt8: function setInt8(byteOffset, value) {\n      $setInt8.call(this, byteOffset, value << 24 >> 24);\n    },\n    setUint8: function setUint8(byteOffset, value) {\n      $setInt8.call(this, byteOffset, value << 24 >> 24);\n    }\n  }, true);\n}\nsetToStringTag($ArrayBuffer, ARRAY_BUFFER);\nsetToStringTag($DataView, DATA_VIEW);\nhide($DataView[PROTOTYPE], $typed.VIEW, true);\nexports[ARRAY_BUFFER] = $ArrayBuffer;\nexports[DATA_VIEW] = $DataView;\n\n\n//# sourceURL=webpack:///./node_modules/core-js/modules/_typed-buffer.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/_typed.js":
/*!************************************************!*\
  !*** ./node_modules/core-js/modules/_typed.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var global = __webpack_require__(/*! ./_global */ \"./node_modules/core-js/modules/_global.js\");\nvar hide = __webpack_require__(/*! ./_hide */ \"./node_modules/core-js/modules/_hide.js\");\nvar uid = __webpack_require__(/*! ./_uid */ \"./node_modules/core-js/modules/_uid.js\");\nvar TYPED = uid('typed_array');\nvar VIEW = uid('view');\nvar ABV = !!(global.ArrayBuffer && global.DataView);\nvar CONSTR = ABV;\nvar i = 0;\nvar l = 9;\nvar Typed;\n\nvar TypedArrayConstructors = (\n  'Int8Array,Uint8Array,Uint8ClampedArray,Int16Array,Uint16Array,Int32Array,Uint32Array,Float32Array,Float64Array'\n).split(',');\n\nwhile (i < l) {\n  if (Typed = global[TypedArrayConstructors[i++]]) {\n    hide(Typed.prototype, TYPED, true);\n    hide(Typed.prototype, VIEW, true);\n  } else CONSTR = false;\n}\n\nmodule.exports = {\n  ABV: ABV,\n  CONSTR: CONSTR,\n  TYPED: TYPED,\n  VIEW: VIEW\n};\n\n\n//# sourceURL=webpack:///./node_modules/core-js/modules/_typed.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/_uid.js":
/*!**********************************************!*\
  !*** ./node_modules/core-js/modules/_uid.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("var id = 0;\nvar px = Math.random();\nmodule.exports = function (key) {\n  return 'Symbol('.concat(key === undefined ? '' : key, ')_', (++id + px).toString(36));\n};\n\n\n//# sourceURL=webpack:///./node_modules/core-js/modules/_uid.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/_user-agent.js":
/*!*****************************************************!*\
  !*** ./node_modules/core-js/modules/_user-agent.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var global = __webpack_require__(/*! ./_global */ \"./node_modules/core-js/modules/_global.js\");\nvar navigator = global.navigator;\n\nmodule.exports = navigator && navigator.userAgent || '';\n\n\n//# sourceURL=webpack:///./node_modules/core-js/modules/_user-agent.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/_validate-collection.js":
/*!**************************************************************!*\
  !*** ./node_modules/core-js/modules/_validate-collection.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var isObject = __webpack_require__(/*! ./_is-object */ \"./node_modules/core-js/modules/_is-object.js\");\nmodule.exports = function (it, TYPE) {\n  if (!isObject(it) || it._t !== TYPE) throw TypeError('Incompatible receiver, ' + TYPE + ' required!');\n  return it;\n};\n\n\n//# sourceURL=webpack:///./node_modules/core-js/modules/_validate-collection.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/_wks-define.js":
/*!*****************************************************!*\
  !*** ./node_modules/core-js/modules/_wks-define.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var global = __webpack_require__(/*! ./_global */ \"./node_modules/core-js/modules/_global.js\");\nvar core = __webpack_require__(/*! ./_core */ \"./node_modules/core-js/modules/_core.js\");\nvar LIBRARY = __webpack_require__(/*! ./_library */ \"./node_modules/core-js/modules/_library.js\");\nvar wksExt = __webpack_require__(/*! ./_wks-ext */ \"./node_modules/core-js/modules/_wks-ext.js\");\nvar defineProperty = __webpack_require__(/*! ./_object-dp */ \"./node_modules/core-js/modules/_object-dp.js\").f;\nmodule.exports = function (name) {\n  var $Symbol = core.Symbol || (core.Symbol = LIBRARY ? {} : global.Symbol || {});\n  if (name.charAt(0) != '_' && !(name in $Symbol)) defineProperty($Symbol, name, { value: wksExt.f(name) });\n};\n\n\n//# sourceURL=webpack:///./node_modules/core-js/modules/_wks-define.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/_wks-ext.js":
/*!**************************************************!*\
  !*** ./node_modules/core-js/modules/_wks-ext.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("exports.f = __webpack_require__(/*! ./_wks */ \"./node_modules/core-js/modules/_wks.js\");\n\n\n//# sourceURL=webpack:///./node_modules/core-js/modules/_wks-ext.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/_wks.js":
/*!**********************************************!*\
  !*** ./node_modules/core-js/modules/_wks.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var store = __webpack_require__(/*! ./_shared */ \"./node_modules/core-js/modules/_shared.js\")('wks');\nvar uid = __webpack_require__(/*! ./_uid */ \"./node_modules/core-js/modules/_uid.js\");\nvar Symbol = __webpack_require__(/*! ./_global */ \"./node_modules/core-js/modules/_global.js\").Symbol;\nvar USE_SYMBOL = typeof Symbol == 'function';\n\nvar $exports = module.exports = function (name) {\n  return store[name] || (store[name] =\n    USE_SYMBOL && Symbol[name] || (USE_SYMBOL ? Symbol : uid)('Symbol.' + name));\n};\n\n$exports.store = store;\n\n\n//# sourceURL=webpack:///./node_modules/core-js/modules/_wks.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/core.get-iterator-method.js":
/*!******************************************************************!*\
  !*** ./node_modules/core-js/modules/core.get-iterator-method.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var classof = __webpack_require__(/*! ./_classof */ \"./node_modules/core-js/modules/_classof.js\");\nvar ITERATOR = __webpack_require__(/*! ./_wks */ \"./node_modules/core-js/modules/_wks.js\")('iterator');\nvar Iterators = __webpack_require__(/*! ./_iterators */ \"./node_modules/core-js/modules/_iterators.js\");\nmodule.exports = __webpack_require__(/*! ./_core */ \"./node_modules/core-js/modules/_core.js\").getIteratorMethod = function (it) {\n  if (it != undefined) return it[ITERATOR]\n    || it['@@iterator']\n    || Iterators[classof(it)];\n};\n\n\n//# sourceURL=webpack:///./node_modules/core-js/modules/core.get-iterator-method.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/es6.array.copy-within.js":
/*!***************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.array.copy-within.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// 22.1.3.3 Array.prototype.copyWithin(target, start, end = this.length)\nvar $export = __webpack_require__(/*! ./_export */ \"./node_modules/core-js/modules/_export.js\");\n\n$export($export.P, 'Array', { copyWithin: __webpack_require__(/*! ./_array-copy-within */ \"./node_modules/core-js/modules/_array-copy-within.js\") });\n\n__webpack_require__(/*! ./_add-to-unscopables */ \"./node_modules/core-js/modules/_add-to-unscopables.js\")('copyWithin');\n\n\n//# sourceURL=webpack:///./node_modules/core-js/modules/es6.array.copy-within.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/es6.array.every.js":
/*!*********************************************************!*\
  !*** ./node_modules/core-js/modules/es6.array.every.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar $export = __webpack_require__(/*! ./_export */ \"./node_modules/core-js/modules/_export.js\");\nvar $every = __webpack_require__(/*! ./_array-methods */ \"./node_modules/core-js/modules/_array-methods.js\")(4);\n\n$export($export.P + $export.F * !__webpack_require__(/*! ./_strict-method */ \"./node_modules/core-js/modules/_strict-method.js\")([].every, true), 'Array', {\n  // 22.1.3.5 / 15.4.4.16 Array.prototype.every(callbackfn [, thisArg])\n  every: function every(callbackfn /* , thisArg */) {\n    return $every(this, callbackfn, arguments[1]);\n  }\n});\n\n\n//# sourceURL=webpack:///./node_modules/core-js/modules/es6.array.every.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/es6.array.fill.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js/modules/es6.array.fill.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// 22.1.3.6 Array.prototype.fill(value, start = 0, end = this.length)\nvar $export = __webpack_require__(/*! ./_export */ \"./node_modules/core-js/modules/_export.js\");\n\n$export($export.P, 'Array', { fill: __webpack_require__(/*! ./_array-fill */ \"./node_modules/core-js/modules/_array-fill.js\") });\n\n__webpack_require__(/*! ./_add-to-unscopables */ \"./node_modules/core-js/modules/_add-to-unscopables.js\")('fill');\n\n\n//# sourceURL=webpack:///./node_modules/core-js/modules/es6.array.fill.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/es6.array.filter.js":
/*!**********************************************************!*\
  !*** ./node_modules/core-js/modules/es6.array.filter.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar $export = __webpack_require__(/*! ./_export */ \"./node_modules/core-js/modules/_export.js\");\nvar $filter = __webpack_require__(/*! ./_array-methods */ \"./node_modules/core-js/modules/_array-methods.js\")(2);\n\n$export($export.P + $export.F * !__webpack_require__(/*! ./_strict-method */ \"./node_modules/core-js/modules/_strict-method.js\")([].filter, true), 'Array', {\n  // 22.1.3.7 / 15.4.4.20 Array.prototype.filter(callbackfn [, thisArg])\n  filter: function filter(callbackfn /* , thisArg */) {\n    return $filter(this, callbackfn, arguments[1]);\n  }\n});\n\n\n//# sourceURL=webpack:///./node_modules/core-js/modules/es6.array.filter.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/es6.array.find-index.js":
/*!**************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.array.find-index.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n// 22.1.3.9 Array.prototype.findIndex(predicate, thisArg = undefined)\nvar $export = __webpack_require__(/*! ./_export */ \"./node_modules/core-js/modules/_export.js\");\nvar $find = __webpack_require__(/*! ./_array-methods */ \"./node_modules/core-js/modules/_array-methods.js\")(6);\nvar KEY = 'findIndex';\nvar forced = true;\n// Shouldn't skip holes\nif (KEY in []) Array(1)[KEY](function () { forced = false; });\n$export($export.P + $export.F * forced, 'Array', {\n  findIndex: function findIndex(callbackfn /* , that = undefined */) {\n    return $find(this, callbackfn, arguments.length > 1 ? arguments[1] : undefined);\n  }\n});\n__webpack_require__(/*! ./_add-to-unscopables */ \"./node_modules/core-js/modules/_add-to-unscopables.js\")(KEY);\n\n\n//# sourceURL=webpack:///./node_modules/core-js/modules/es6.array.find-index.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/es6.array.find.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js/modules/es6.array.find.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n// 22.1.3.8 Array.prototype.find(predicate, thisArg = undefined)\nvar $export = __webpack_require__(/*! ./_export */ \"./node_modules/core-js/modules/_export.js\");\nvar $find = __webpack_require__(/*! ./_array-methods */ \"./node_modules/core-js/modules/_array-methods.js\")(5);\nvar KEY = 'find';\nvar forced = true;\n// Shouldn't skip holes\nif (KEY in []) Array(1)[KEY](function () { forced = false; });\n$export($export.P + $export.F * forced, 'Array', {\n  find: function find(callbackfn /* , that = undefined */) {\n    return $find(this, callbackfn, arguments.length > 1 ? arguments[1] : undefined);\n  }\n});\n__webpack_require__(/*! ./_add-to-unscopables */ \"./node_modules/core-js/modules/_add-to-unscopables.js\")(KEY);\n\n\n//# sourceURL=webpack:///./node_modules/core-js/modules/es6.array.find.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/es6.array.for-each.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.array.for-each.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar $export = __webpack_require__(/*! ./_export */ \"./node_modules/core-js/modules/_export.js\");\nvar $forEach = __webpack_require__(/*! ./_array-methods */ \"./node_modules/core-js/modules/_array-methods.js\")(0);\nvar STRICT = __webpack_require__(/*! ./_strict-method */ \"./node_modules/core-js/modules/_strict-method.js\")([].forEach, true);\n\n$export($export.P + $export.F * !STRICT, 'Array', {\n  // 22.1.3.10 / 15.4.4.18 Array.prototype.forEach(callbackfn [, thisArg])\n  forEach: function forEach(callbackfn /* , thisArg */) {\n    return $forEach(this, callbackfn, arguments[1]);\n  }\n});\n\n\n//# sourceURL=webpack:///./node_modules/core-js/modules/es6.array.for-each.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/es6.array.from.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js/modules/es6.array.from.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar ctx = __webpack_require__(/*! ./_ctx */ \"./node_modules/core-js/modules/_ctx.js\");\nvar $export = __webpack_require__(/*! ./_export */ \"./node_modules/core-js/modules/_export.js\");\nvar toObject = __webpack_require__(/*! ./_to-object */ \"./node_modules/core-js/modules/_to-object.js\");\nvar call = __webpack_require__(/*! ./_iter-call */ \"./node_modules/core-js/modules/_iter-call.js\");\nvar isArrayIter = __webpack_require__(/*! ./_is-array-iter */ \"./node_modules/core-js/modules/_is-array-iter.js\");\nvar toLength = __webpack_require__(/*! ./_to-length */ \"./node_modules/core-js/modules/_to-length.js\");\nvar createProperty = __webpack_require__(/*! ./_create-property */ \"./node_modules/core-js/modules/_create-property.js\");\nvar getIterFn = __webpack_require__(/*! ./core.get-iterator-method */ \"./node_modules/core-js/modules/core.get-iterator-method.js\");\n\n$export($export.S + $export.F * !__webpack_require__(/*! ./_iter-detect */ \"./node_modules/core-js/modules/_iter-detect.js\")(function (iter) { Array.from(iter); }), 'Array', {\n  // 22.1.2.1 Array.from(arrayLike, mapfn = undefined, thisArg = undefined)\n  from: function from(arrayLike /* , mapfn = undefined, thisArg = undefined */) {\n    var O = toObject(arrayLike);\n    var C = typeof this == 'function' ? this : Array;\n    var aLen = arguments.length;\n    var mapfn = aLen > 1 ? arguments[1] : undefined;\n    var mapping = mapfn !== undefined;\n    var index = 0;\n    var iterFn = getIterFn(O);\n    var length, result, step, iterator;\n    if (mapping) mapfn = ctx(mapfn, aLen > 2 ? arguments[2] : undefined, 2);\n    // if object isn't iterable or it's array with default iterator - use simple case\n    if (iterFn != undefined && !(C == Array && isArrayIter(iterFn))) {\n      for (iterator = iterFn.call(O), result = new C(); !(step = iterator.next()).done; index++) {\n        createProperty(result, index, mapping ? call(iterator, mapfn, [step.value, index], true) : step.value);\n      }\n    } else {\n      length = toLength(O.length);\n      for (result = new C(length); length > index; index++) {\n        createProperty(result, index, mapping ? mapfn(O[index], index) : O[index]);\n      }\n    }\n    result.length = index;\n    return result;\n  }\n});\n\n\n//# sourceURL=webpack:///./node_modules/core-js/modules/es6.array.from.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/es6.array.index-of.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.array.index-of.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar $export = __webpack_require__(/*! ./_export */ \"./node_modules/core-js/modules/_export.js\");\nvar $indexOf = __webpack_require__(/*! ./_array-includes */ \"./node_modules/core-js/modules/_array-includes.js\")(false);\nvar $native = [].indexOf;\nvar NEGATIVE_ZERO = !!$native && 1 / [1].indexOf(1, -0) < 0;\n\n$export($export.P + $export.F * (NEGATIVE_ZERO || !__webpack_require__(/*! ./_strict-method */ \"./node_modules/core-js/modules/_strict-method.js\")($native)), 'Array', {\n  // 22.1.3.11 / 15.4.4.14 Array.prototype.indexOf(searchElement [, fromIndex])\n  indexOf: function indexOf(searchElement /* , fromIndex = 0 */) {\n    return NEGATIVE_ZERO\n      // convert -0 to +0\n      ? $native.apply(this, arguments) || 0\n      : $indexOf(this, searchElement, arguments[1]);\n  }\n});\n\n\n//# sourceURL=webpack:///./node_modules/core-js/modules/es6.array.index-of.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/es6.array.is-array.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.array.is-array.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// 22.1.2.2 / 15.4.3.2 Array.isArray(arg)\nvar $export = __webpack_require__(/*! ./_export */ \"./node_modules/core-js/modules/_export.js\");\n\n$export($export.S, 'Array', { isArray: __webpack_require__(/*! ./_is-array */ \"./node_modules/core-js/modules/_is-array.js\") });\n\n\n//# sourceURL=webpack:///./node_modules/core-js/modules/es6.array.is-array.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/es6.array.iterator.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.array.iterator.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar addToUnscopables = __webpack_require__(/*! ./_add-to-unscopables */ \"./node_modules/core-js/modules/_add-to-unscopables.js\");\nvar step = __webpack_require__(/*! ./_iter-step */ \"./node_modules/core-js/modules/_iter-step.js\");\nvar Iterators = __webpack_require__(/*! ./_iterators */ \"./node_modules/core-js/modules/_iterators.js\");\nvar toIObject = __webpack_require__(/*! ./_to-iobject */ \"./node_modules/core-js/modules/_to-iobject.js\");\n\n// 22.1.3.4 Array.prototype.entries()\n// 22.1.3.13 Array.prototype.keys()\n// 22.1.3.29 Array.prototype.values()\n// 22.1.3.30 Array.prototype[@@iterator]()\nmodule.exports = __webpack_require__(/*! ./_iter-define */ \"./node_modules/core-js/modules/_iter-define.js\")(Array, 'Array', function (iterated, kind) {\n  this._t = toIObject(iterated); // target\n  this._i = 0;                   // next index\n  this._k = kind;                // kind\n// 22.1.5.2.1 %ArrayIteratorPrototype%.next()\n}, function () {\n  var O = this._t;\n  var kind = this._k;\n  var index = this._i++;\n  if (!O || index >= O.length) {\n    this._t = undefined;\n    return step(1);\n  }\n  if (kind == 'keys') return step(0, index);\n  if (kind == 'values') return step(0, O[index]);\n  return step(0, [index, O[index]]);\n}, 'values');\n\n// argumentsList[@@iterator] is %ArrayProto_values% (9.4.4.6, 9.4.4.7)\nIterators.Arguments = Iterators.Array;\n\naddToUnscopables('keys');\naddToUnscopables('values');\naddToUnscopables('entries');\n\n\n//# sourceURL=webpack:///./node_modules/core-js/modules/es6.array.iterator.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/es6.array.join.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js/modules/es6.array.join.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n// 22.1.3.13 Array.prototype.join(separator)\nvar $export = __webpack_require__(/*! ./_export */ \"./node_modules/core-js/modules/_export.js\");\nvar toIObject = __webpack_require__(/*! ./_to-iobject */ \"./node_modules/core-js/modules/_to-iobject.js\");\nvar arrayJoin = [].join;\n\n// fallback for not array-like strings\n$export($export.P + $export.F * (__webpack_require__(/*! ./_iobject */ \"./node_modules/core-js/modules/_iobject.js\") != Object || !__webpack_require__(/*! ./_strict-method */ \"./node_modules/core-js/modules/_strict-method.js\")(arrayJoin)), 'Array', {\n  join: function join(separator) {\n    return arrayJoin.call(toIObject(this), separator === undefined ? ',' : separator);\n  }\n});\n\n\n//# sourceURL=webpack:///./node_modules/core-js/modules/es6.array.join.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/es6.array.last-index-of.js":
/*!*****************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.array.last-index-of.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar $export = __webpack_require__(/*! ./_export */ \"./node_modules/core-js/modules/_export.js\");\nvar toIObject = __webpack_require__(/*! ./_to-iobject */ \"./node_modules/core-js/modules/_to-iobject.js\");\nvar toInteger = __webpack_require__(/*! ./_to-integer */ \"./node_modules/core-js/modules/_to-integer.js\");\nvar toLength = __webpack_require__(/*! ./_to-length */ \"./node_modules/core-js/modules/_to-length.js\");\nvar $native = [].lastIndexOf;\nvar NEGATIVE_ZERO = !!$native && 1 / [1].lastIndexOf(1, -0) < 0;\n\n$export($export.P + $export.F * (NEGATIVE_ZERO || !__webpack_require__(/*! ./_strict-method */ \"./node_modules/core-js/modules/_strict-method.js\")($native)), 'Array', {\n  // 22.1.3.14 / 15.4.4.15 Array.prototype.lastIndexOf(searchElement [, fromIndex])\n  lastIndexOf: function lastIndexOf(searchElement /* , fromIndex = @[*-1] */) {\n    // convert -0 to +0\n    if (NEGATIVE_ZERO) return $native.apply(this, arguments) || 0;\n    var O = toIObject(this);\n    var length = toLength(O.length);\n    var index = length - 1;\n    if (arguments.length > 1) index = Math.min(index, toInteger(arguments[1]));\n    if (index < 0) index = length + index;\n    for (;index >= 0; index--) if (index in O) if (O[index] === searchElement) return index || 0;\n    return -1;\n  }\n});\n\n\n//# sourceURL=webpack:///./node_modules/core-js/modules/es6.array.last-index-of.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/es6.array.map.js":
/*!*******************************************************!*\
  !*** ./node_modules/core-js/modules/es6.array.map.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar $export = __webpack_require__(/*! ./_export */ \"./node_modules/core-js/modules/_export.js\");\nvar $map = __webpack_require__(/*! ./_array-methods */ \"./node_modules/core-js/modules/_array-methods.js\")(1);\n\n$export($export.P + $export.F * !__webpack_require__(/*! ./_strict-method */ \"./node_modules/core-js/modules/_strict-method.js\")([].map, true), 'Array', {\n  // 22.1.3.15 / 15.4.4.19 Array.prototype.map(callbackfn [, thisArg])\n  map: function map(callbackfn /* , thisArg */) {\n    return $map(this, callbackfn, arguments[1]);\n  }\n});\n\n\n//# sourceURL=webpack:///./node_modules/core-js/modules/es6.array.map.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/es6.array.of.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/modules/es6.array.of.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar $export = __webpack_require__(/*! ./_export */ \"./node_modules/core-js/modules/_export.js\");\nvar createProperty = __webpack_require__(/*! ./_create-property */ \"./node_modules/core-js/modules/_create-property.js\");\n\n// WebKit Array.of isn't generic\n$export($export.S + $export.F * __webpack_require__(/*! ./_fails */ \"./node_modules/core-js/modules/_fails.js\")(function () {\n  function F() { /* empty */ }\n  return !(Array.of.call(F) instanceof F);\n}), 'Array', {\n  // 22.1.2.3 Array.of( ...items)\n  of: function of(/* ...args */) {\n    var index = 0;\n    var aLen = arguments.length;\n    var result = new (typeof this == 'function' ? this : Array)(aLen);\n    while (aLen > index) createProperty(result, index, arguments[index++]);\n    result.length = aLen;\n    return result;\n  }\n});\n\n\n//# sourceURL=webpack:///./node_modules/core-js/modules/es6.array.of.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/es6.array.reduce-right.js":
/*!****************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.array.reduce-right.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar $export = __webpack_require__(/*! ./_export */ \"./node_modules/core-js/modules/_export.js\");\nvar $reduce = __webpack_require__(/*! ./_array-reduce */ \"./node_modules/core-js/modules/_array-reduce.js\");\n\n$export($export.P + $export.F * !__webpack_require__(/*! ./_strict-method */ \"./node_modules/core-js/modules/_strict-method.js\")([].reduceRight, true), 'Array', {\n  // 22.1.3.19 / 15.4.4.22 Array.prototype.reduceRight(callbackfn [, initialValue])\n  reduceRight: function reduceRight(callbackfn /* , initialValue */) {\n    return $reduce(this, callbackfn, arguments.length, arguments[1], true);\n  }\n});\n\n\n//# sourceURL=webpack:///./node_modules/core-js/modules/es6.array.reduce-right.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/es6.array.reduce.js":
/*!**********************************************************!*\
  !*** ./node_modules/core-js/modules/es6.array.reduce.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar $export = __webpack_require__(/*! ./_export */ \"./node_modules/core-js/modules/_export.js\");\nvar $reduce = __webpack_require__(/*! ./_array-reduce */ \"./node_modules/core-js/modules/_array-reduce.js\");\n\n$export($export.P + $export.F * !__webpack_require__(/*! ./_strict-method */ \"./node_modules/core-js/modules/_strict-method.js\")([].reduce, true), 'Array', {\n  // 22.1.3.18 / 15.4.4.21 Array.prototype.reduce(callbackfn [, initialValue])\n  reduce: function reduce(callbackfn /* , initialValue */) {\n    return $reduce(this, callbackfn, arguments.length, arguments[1], false);\n  }\n});\n\n\n//# sourceURL=webpack:///./node_modules/core-js/modules/es6.array.reduce.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/es6.array.slice.js":
/*!*********************************************************!*\
  !*** ./node_modules/core-js/modules/es6.array.slice.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar $export = __webpack_require__(/*! ./_export */ \"./node_modules/core-js/modules/_export.js\");\nvar html = __webpack_require__(/*! ./_html */ \"./node_modules/core-js/modules/_html.js\");\nvar cof = __webpack_require__(/*! ./_cof */ \"./node_modules/core-js/modules/_cof.js\");\nvar toAbsoluteIndex = __webpack_require__(/*! ./_to-absolute-index */ \"./node_modules/core-js/modules/_to-absolute-index.js\");\nvar toLength = __webpack_require__(/*! ./_to-length */ \"./node_modules/core-js/modules/_to-length.js\");\nvar arraySlice = [].slice;\n\n// fallback for not array-like ES3 strings and DOM objects\n$export($export.P + $export.F * __webpack_require__(/*! ./_fails */ \"./node_modules/core-js/modules/_fails.js\")(function () {\n  if (html) arraySlice.call(html);\n}), 'Array', {\n  slice: function slice(begin, end) {\n    var len = toLength(this.length);\n    var klass = cof(this);\n    end = end === undefined ? len : end;\n    if (klass == 'Array') return arraySlice.call(this, begin, end);\n    var start = toAbsoluteIndex(begin, len);\n    var upTo = toAbsoluteIndex(end, len);\n    var size = toLength(upTo - start);\n    var cloned = new Array(size);\n    var i = 0;\n    for (; i < size; i++) cloned[i] = klass == 'String'\n      ? this.charAt(start + i)\n      : this[start + i];\n    return cloned;\n  }\n});\n\n\n//# sourceURL=webpack:///./node_modules/core-js/modules/es6.array.slice.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/es6.array.some.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js/modules/es6.array.some.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar $export = __webpack_require__(/*! ./_export */ \"./node_modules/core-js/modules/_export.js\");\nvar $some = __webpack_require__(/*! ./_array-methods */ \"./node_modules/core-js/modules/_array-methods.js\")(3);\n\n$export($export.P + $export.F * !__webpack_require__(/*! ./_strict-method */ \"./node_modules/core-js/modules/_strict-method.js\")([].some, true), 'Array', {\n  // 22.1.3.23 / 15.4.4.17 Array.prototype.some(callbackfn [, thisArg])\n  some: function some(callbackfn /* , thisArg */) {\n    return $some(this, callbackfn, arguments[1]);\n  }\n});\n\n\n//# sourceURL=webpack:///./node_modules/core-js/modules/es6.array.some.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/es6.array.sort.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js/modules/es6.array.sort.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar $export = __webpack_require__(/*! ./_export */ \"./node_modules/core-js/modules/_export.js\");\nvar aFunction = __webpack_require__(/*! ./_a-function */ \"./node_modules/core-js/modules/_a-function.js\");\nvar toObject = __webpack_require__(/*! ./_to-object */ \"./node_modules/core-js/modules/_to-object.js\");\nvar fails = __webpack_require__(/*! ./_fails */ \"./node_modules/core-js/modules/_fails.js\");\nvar $sort = [].sort;\nvar test = [1, 2, 3];\n\n$export($export.P + $export.F * (fails(function () {\n  // IE8-\n  test.sort(undefined);\n}) || !fails(function () {\n  // V8 bug\n  test.sort(null);\n  // Old WebKit\n}) || !__webpack_require__(/*! ./_strict-method */ \"./node_modules/core-js/modules/_strict-method.js\")($sort)), 'Array', {\n  // 22.1.3.25 Array.prototype.sort(comparefn)\n  sort: function sort(comparefn) {\n    return comparefn === undefined\n      ? $sort.call(toObject(this))\n      : $sort.call(toObject(this), aFunction(comparefn));\n  }\n});\n\n\n//# sourceURL=webpack:///./node_modules/core-js/modules/es6.array.sort.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/es6.array.species.js":
/*!***********************************************************!*\
  !*** ./node_modules/core-js/modules/es6.array.species.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("__webpack_require__(/*! ./_set-species */ \"./node_modules/core-js/modules/_set-species.js\")('Array');\n\n\n//# sourceURL=webpack:///./node_modules/core-js/modules/es6.array.species.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/es6.date.now.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/modules/es6.date.now.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// 20.3.3.1 / 15.9.4.4 Date.now()\nvar $export = __webpack_require__(/*! ./_export */ \"./node_modules/core-js/modules/_export.js\");\n\n$export($export.S, 'Date', { now: function () { return new Date().getTime(); } });\n\n\n//# sourceURL=webpack:///./node_modules/core-js/modules/es6.date.now.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/es6.date.to-iso-string.js":
/*!****************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.date.to-iso-string.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// 20.3.4.36 / 15.9.5.43 Date.prototype.toISOString()\nvar $export = __webpack_require__(/*! ./_export */ \"./node_modules/core-js/modules/_export.js\");\nvar toISOString = __webpack_require__(/*! ./_date-to-iso-string */ \"./node_modules/core-js/modules/_date-to-iso-string.js\");\n\n// PhantomJS / old WebKit has a broken implementations\n$export($export.P + $export.F * (Date.prototype.toISOString !== toISOString), 'Date', {\n  toISOString: toISOString\n});\n\n\n//# sourceURL=webpack:///./node_modules/core-js/modules/es6.date.to-iso-string.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/es6.date.to-json.js":
/*!**********************************************************!*\
  !*** ./node_modules/core-js/modules/es6.date.to-json.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar $export = __webpack_require__(/*! ./_export */ \"./node_modules/core-js/modules/_export.js\");\nvar toObject = __webpack_require__(/*! ./_to-object */ \"./node_modules/core-js/modules/_to-object.js\");\nvar toPrimitive = __webpack_require__(/*! ./_to-primitive */ \"./node_modules/core-js/modules/_to-primitive.js\");\n\n$export($export.P + $export.F * __webpack_require__(/*! ./_fails */ \"./node_modules/core-js/modules/_fails.js\")(function () {\n  return new Date(NaN).toJSON() !== null\n    || Date.prototype.toJSON.call({ toISOString: function () { return 1; } }) !== 1;\n}), 'Date', {\n  // eslint-disable-next-line no-unused-vars\n  toJSON: function toJSON(key) {\n    var O = toObject(this);\n    var pv = toPrimitive(O);\n    return typeof pv == 'number' && !isFinite(pv) ? null : O.toISOString();\n  }\n});\n\n\n//# sourceURL=webpack:///./node_modules/core-js/modules/es6.date.to-json.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/es6.date.to-primitive.js":
/*!***************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.date.to-primitive.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var TO_PRIMITIVE = __webpack_require__(/*! ./_wks */ \"./node_modules/core-js/modules/_wks.js\")('toPrimitive');\nvar proto = Date.prototype;\n\nif (!(TO_PRIMITIVE in proto)) __webpack_require__(/*! ./_hide */ \"./node_modules/core-js/modules/_hide.js\")(proto, TO_PRIMITIVE, __webpack_require__(/*! ./_date-to-primitive */ \"./node_modules/core-js/modules/_date-to-primitive.js\"));\n\n\n//# sourceURL=webpack:///./node_modules/core-js/modules/es6.date.to-primitive.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/es6.date.to-string.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.date.to-string.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var DateProto = Date.prototype;\nvar INVALID_DATE = 'Invalid Date';\nvar TO_STRING = 'toString';\nvar $toString = DateProto[TO_STRING];\nvar getTime = DateProto.getTime;\nif (new Date(NaN) + '' != INVALID_DATE) {\n  __webpack_require__(/*! ./_redefine */ \"./node_modules/core-js/modules/_redefine.js\")(DateProto, TO_STRING, function toString() {\n    var value = getTime.call(this);\n    // eslint-disable-next-line no-self-compare\n    return value === value ? $toString.call(this) : INVALID_DATE;\n  });\n}\n\n\n//# sourceURL=webpack:///./node_modules/core-js/modules/es6.date.to-string.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/es6.function.bind.js":
/*!***********************************************************!*\
  !*** ./node_modules/core-js/modules/es6.function.bind.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// 19.2.3.2 / 15.3.4.5 Function.prototype.bind(thisArg, args...)\nvar $export = __webpack_require__(/*! ./_export */ \"./node_modules/core-js/modules/_export.js\");\n\n$export($export.P, 'Function', { bind: __webpack_require__(/*! ./_bind */ \"./node_modules/core-js/modules/_bind.js\") });\n\n\n//# sourceURL=webpack:///./node_modules/core-js/modules/es6.function.bind.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/es6.function.has-instance.js":
/*!*******************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.function.has-instance.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar isObject = __webpack_require__(/*! ./_is-object */ \"./node_modules/core-js/modules/_is-object.js\");\nvar getPrototypeOf = __webpack_require__(/*! ./_object-gpo */ \"./node_modules/core-js/modules/_object-gpo.js\");\nvar HAS_INSTANCE = __webpack_require__(/*! ./_wks */ \"./node_modules/core-js/modules/_wks.js\")('hasInstance');\nvar FunctionProto = Function.prototype;\n// 19.2.3.6 Function.prototype[@@hasInstance](V)\nif (!(HAS_INSTANCE in FunctionProto)) __webpack_require__(/*! ./_object-dp */ \"./node_modules/core-js/modules/_object-dp.js\").f(FunctionProto, HAS_INSTANCE, { value: function (O) {\n  if (typeof this != 'function' || !isObject(O)) return false;\n  if (!isObject(this.prototype)) return O instanceof this;\n  // for environment w/o native `@@hasInstance` logic enough `instanceof`, but add this:\n  while (O = getPrototypeOf(O)) if (this.prototype === O) return true;\n  return false;\n} });\n\n\n//# sourceURL=webpack:///./node_modules/core-js/modules/es6.function.has-instance.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/es6.function.name.js":
/*!***********************************************************!*\
  !*** ./node_modules/core-js/modules/es6.function.name.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var dP = __webpack_require__(/*! ./_object-dp */ \"./node_modules/core-js/modules/_object-dp.js\").f;\nvar FProto = Function.prototype;\nvar nameRE = /^\\s*function ([^ (]*)/;\nvar NAME = 'name';\n\n// 19.2.4.2 name\nNAME in FProto || __webpack_require__(/*! ./_descriptors */ \"./node_modules/core-js/modules/_descriptors.js\") && dP(FProto, NAME, {\n  configurable: true,\n  get: function () {\n    try {\n      return ('' + this).match(nameRE)[1];\n    } catch (e) {\n      return '';\n    }\n  }\n});\n\n\n//# sourceURL=webpack:///./node_modules/core-js/modules/es6.function.name.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/es6.map.js":
/*!*************************************************!*\
  !*** ./node_modules/core-js/modules/es6.map.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar strong = __webpack_require__(/*! ./_collection-strong */ \"./node_modules/core-js/modules/_collection-strong.js\");\nvar validate = __webpack_require__(/*! ./_validate-collection */ \"./node_modules/core-js/modules/_validate-collection.js\");\nvar MAP = 'Map';\n\n// 23.1 Map Objects\nmodule.exports = __webpack_require__(/*! ./_collection */ \"./node_modules/core-js/modules/_collection.js\")(MAP, function (get) {\n  return function Map() { return get(this, arguments.length > 0 ? arguments[0] : undefined); };\n}, {\n  // 23.1.3.6 Map.prototype.get(key)\n  get: function get(key) {\n    var entry = strong.getEntry(validate(this, MAP), key);\n    return entry && entry.v;\n  },\n  // 23.1.3.9 Map.prototype.set(key, value)\n  set: function set(key, value) {\n    return strong.def(validate(this, MAP), key === 0 ? 0 : key, value);\n  }\n}, strong, true);\n\n\n//# sourceURL=webpack:///./node_modules/core-js/modules/es6.map.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/es6.math.acosh.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js/modules/es6.math.acosh.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// 20.2.2.3 Math.acosh(x)\nvar $export = __webpack_require__(/*! ./_export */ \"./node_modules/core-js/modules/_export.js\");\nvar log1p = __webpack_require__(/*! ./_math-log1p */ \"./node_modules/core-js/modules/_math-log1p.js\");\nvar sqrt = Math.sqrt;\nvar $acosh = Math.acosh;\n\n$export($export.S + $export.F * !($acosh\n  // V8 bug: https://code.google.com/p/v8/issues/detail?id=3509\n  && Math.floor($acosh(Number.MAX_VALUE)) == 710\n  // Tor Browser bug: Math.acosh(Infinity) -> NaN\n  && $acosh(Infinity) == Infinity\n), 'Math', {\n  acosh: function acosh(x) {\n    return (x = +x) < 1 ? NaN : x > 94906265.62425156\n      ? Math.log(x) + Math.LN2\n      : log1p(x - 1 + sqrt(x - 1) * sqrt(x + 1));\n  }\n});\n\n\n//# sourceURL=webpack:///./node_modules/core-js/modules/es6.math.acosh.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/es6.math.asinh.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js/modules/es6.math.asinh.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// 20.2.2.5 Math.asinh(x)\nvar $export = __webpack_require__(/*! ./_export */ \"./node_modules/core-js/modules/_export.js\");\nvar $asinh = Math.asinh;\n\nfunction asinh(x) {\n  return !isFinite(x = +x) || x == 0 ? x : x < 0 ? -asinh(-x) : Math.log(x + Math.sqrt(x * x + 1));\n}\n\n// Tor Browser bug: Math.asinh(0) -> -0\n$export($export.S + $export.F * !($asinh && 1 / $asinh(0) > 0), 'Math', { asinh: asinh });\n\n\n//# sourceURL=webpack:///./node_modules/core-js/modules/es6.math.asinh.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/es6.math.atanh.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js/modules/es6.math.atanh.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// 20.2.2.7 Math.atanh(x)\nvar $export = __webpack_require__(/*! ./_export */ \"./node_modules/core-js/modules/_export.js\");\nvar $atanh = Math.atanh;\n\n// Tor Browser bug: Math.atanh(-0) -> 0\n$export($export.S + $export.F * !($atanh && 1 / $atanh(-0) < 0), 'Math', {\n  atanh: function atanh(x) {\n    return (x = +x) == 0 ? x : Math.log((1 + x) / (1 - x)) / 2;\n  }\n});\n\n\n//# sourceURL=webpack:///./node_modules/core-js/modules/es6.math.atanh.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/es6.math.cbrt.js":
/*!*******************************************************!*\
  !*** ./node_modules/core-js/modules/es6.math.cbrt.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// 20.2.2.9 Math.cbrt(x)\nvar $export = __webpack_require__(/*! ./_export */ \"./node_modules/core-js/modules/_export.js\");\nvar sign = __webpack_require__(/*! ./_math-sign */ \"./node_modules/core-js/modules/_math-sign.js\");\n\n$export($export.S, 'Math', {\n  cbrt: function cbrt(x) {\n    return sign(x = +x) * Math.pow(Math.abs(x), 1 / 3);\n  }\n});\n\n\n//# sourceURL=webpack:///./node_modules/core-js/modules/es6.math.cbrt.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/es6.math.clz32.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js/modules/es6.math.clz32.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// 20.2.2.11 Math.clz32(x)\nvar $export = __webpack_require__(/*! ./_export */ \"./node_modules/core-js/modules/_export.js\");\n\n$export($export.S, 'Math', {\n  clz32: function clz32(x) {\n    return (x >>>= 0) ? 31 - Math.floor(Math.log(x + 0.5) * Math.LOG2E) : 32;\n  }\n});\n\n\n//# sourceURL=webpack:///./node_modules/core-js/modules/es6.math.clz32.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/es6.math.cosh.js":
/*!*******************************************************!*\
  !*** ./node_modules/core-js/modules/es6.math.cosh.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// 20.2.2.12 Math.cosh(x)\nvar $export = __webpack_require__(/*! ./_export */ \"./node_modules/core-js/modules/_export.js\");\nvar exp = Math.exp;\n\n$export($export.S, 'Math', {\n  cosh: function cosh(x) {\n    return (exp(x = +x) + exp(-x)) / 2;\n  }\n});\n\n\n//# sourceURL=webpack:///./node_modules/core-js/modules/es6.math.cosh.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/es6.math.expm1.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js/modules/es6.math.expm1.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// 20.2.2.14 Math.expm1(x)\nvar $export = __webpack_require__(/*! ./_export */ \"./node_modules/core-js/modules/_export.js\");\nvar $expm1 = __webpack_require__(/*! ./_math-expm1 */ \"./node_modules/core-js/modules/_math-expm1.js\");\n\n$export($export.S + $export.F * ($expm1 != Math.expm1), 'Math', { expm1: $expm1 });\n\n\n//# sourceURL=webpack:///./node_modules/core-js/modules/es6.math.expm1.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/es6.math.fround.js":
/*!*********************************************************!*\
  !*** ./node_modules/core-js/modules/es6.math.fround.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// 20.2.2.16 Math.fround(x)\nvar $export = __webpack_require__(/*! ./_export */ \"./node_modules/core-js/modules/_export.js\");\n\n$export($export.S, 'Math', { fround: __webpack_require__(/*! ./_math-fround */ \"./node_modules/core-js/modules/_math-fround.js\") });\n\n\n//# sourceURL=webpack:///./node_modules/core-js/modules/es6.math.fround.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/es6.math.hypot.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js/modules/es6.math.hypot.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// 20.2.2.17 Math.hypot([value1[, value2[, … ]]])\nvar $export = __webpack_require__(/*! ./_export */ \"./node_modules/core-js/modules/_export.js\");\nvar abs = Math.abs;\n\n$export($export.S, 'Math', {\n  hypot: function hypot(value1, value2) { // eslint-disable-line no-unused-vars\n    var sum = 0;\n    var i = 0;\n    var aLen = arguments.length;\n    var larg = 0;\n    var arg, div;\n    while (i < aLen) {\n      arg = abs(arguments[i++]);\n      if (larg < arg) {\n        div = larg / arg;\n        sum = sum * div * div + 1;\n        larg = arg;\n      } else if (arg > 0) {\n        div = arg / larg;\n        sum += div * div;\n      } else sum += arg;\n    }\n    return larg === Infinity ? Infinity : larg * Math.sqrt(sum);\n  }\n});\n\n\n//# sourceURL=webpack:///./node_modules/core-js/modules/es6.math.hypot.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/es6.math.imul.js":
/*!*******************************************************!*\
  !*** ./node_modules/core-js/modules/es6.math.imul.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// 20.2.2.18 Math.imul(x, y)\nvar $export = __webpack_require__(/*! ./_export */ \"./node_modules/core-js/modules/_export.js\");\nvar $imul = Math.imul;\n\n// some WebKit versions fails with big numbers, some has wrong arity\n$export($export.S + $export.F * __webpack_require__(/*! ./_fails */ \"./node_modules/core-js/modules/_fails.js\")(function () {\n  return $imul(0xffffffff, 5) != -5 || $imul.length != 2;\n}), 'Math', {\n  imul: function imul(x, y) {\n    var UINT16 = 0xffff;\n    var xn = +x;\n    var yn = +y;\n    var xl = UINT16 & xn;\n    var yl = UINT16 & yn;\n    return 0 | xl * yl + ((UINT16 & xn >>> 16) * yl + xl * (UINT16 & yn >>> 16) << 16 >>> 0);\n  }\n});\n\n\n//# sourceURL=webpack:///./node_modules/core-js/modules/es6.math.imul.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/es6.math.log10.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js/modules/es6.math.log10.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// 20.2.2.21 Math.log10(x)\nvar $export = __webpack_require__(/*! ./_export */ \"./node_modules/core-js/modules/_export.js\");\n\n$export($export.S, 'Math', {\n  log10: function log10(x) {\n    return Math.log(x) * Math.LOG10E;\n  }\n});\n\n\n//# sourceURL=webpack:///./node_modules/core-js/modules/es6.math.log10.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/es6.math.log1p.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js/modules/es6.math.log1p.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// 20.2.2.20 Math.log1p(x)\nvar $export = __webpack_require__(/*! ./_export */ \"./node_modules/core-js/modules/_export.js\");\n\n$export($export.S, 'Math', { log1p: __webpack_require__(/*! ./_math-log1p */ \"./node_modules/core-js/modules/_math-log1p.js\") });\n\n\n//# sourceURL=webpack:///./node_modules/core-js/modules/es6.math.log1p.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/es6.math.log2.js":
/*!*******************************************************!*\
  !*** ./node_modules/core-js/modules/es6.math.log2.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// 20.2.2.22 Math.log2(x)\nvar $export = __webpack_require__(/*! ./_export */ \"./node_modules/core-js/modules/_export.js\");\n\n$export($export.S, 'Math', {\n  log2: function log2(x) {\n    return Math.log(x) / Math.LN2;\n  }\n});\n\n\n//# sourceURL=webpack:///./node_modules/core-js/modules/es6.math.log2.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/es6.math.sign.js":
/*!*******************************************************!*\
  !*** ./node_modules/core-js/modules/es6.math.sign.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// 20.2.2.28 Math.sign(x)\nvar $export = __webpack_require__(/*! ./_export */ \"./node_modules/core-js/modules/_export.js\");\n\n$export($export.S, 'Math', { sign: __webpack_require__(/*! ./_math-sign */ \"./node_modules/core-js/modules/_math-sign.js\") });\n\n\n//# sourceURL=webpack:///./node_modules/core-js/modules/es6.math.sign.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/es6.math.sinh.js":
/*!*******************************************************!*\
  !*** ./node_modules/core-js/modules/es6.math.sinh.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// 20.2.2.30 Math.sinh(x)\nvar $export = __webpack_require__(/*! ./_export */ \"./node_modules/core-js/modules/_export.js\");\nvar expm1 = __webpack_require__(/*! ./_math-expm1 */ \"./node_modules/core-js/modules/_math-expm1.js\");\nvar exp = Math.exp;\n\n// V8 near Chromium 38 has a problem with very small numbers\n$export($export.S + $export.F * __webpack_require__(/*! ./_fails */ \"./node_modules/core-js/modules/_fails.js\")(function () {\n  return !Math.sinh(-2e-17) != -2e-17;\n}), 'Math', {\n  sinh: function sinh(x) {\n    return Math.abs(x = +x) < 1\n      ? (expm1(x) - expm1(-x)) / 2\n      : (exp(x - 1) - exp(-x - 1)) * (Math.E / 2);\n  }\n});\n\n\n//# sourceURL=webpack:///./node_modules/core-js/modules/es6.math.sinh.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/es6.math.tanh.js":
/*!*******************************************************!*\
  !*** ./node_modules/core-js/modules/es6.math.tanh.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// 20.2.2.33 Math.tanh(x)\nvar $export = __webpack_require__(/*! ./_export */ \"./node_modules/core-js/modules/_export.js\");\nvar expm1 = __webpack_require__(/*! ./_math-expm1 */ \"./node_modules/core-js/modules/_math-expm1.js\");\nvar exp = Math.exp;\n\n$export($export.S, 'Math', {\n  tanh: function tanh(x) {\n    var a = expm1(x = +x);\n    var b = expm1(-x);\n    return a == Infinity ? 1 : b == Infinity ? -1 : (a - b) / (exp(x) + exp(-x));\n  }\n});\n\n\n//# sourceURL=webpack:///./node_modules/core-js/modules/es6.math.tanh.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/es6.math.trunc.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js/modules/es6.math.trunc.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// 20.2.2.34 Math.trunc(x)\nvar $export = __webpack_require__(/*! ./_export */ \"./node_modules/core-js/modules/_export.js\");\n\n$export($export.S, 'Math', {\n  trunc: function trunc(it) {\n    return (it > 0 ? Math.floor : Math.ceil)(it);\n  }\n});\n\n\n//# sourceURL=webpack:///./node_modules/core-js/modules/es6.math.trunc.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/es6.number.constructor.js":
/*!****************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.number.constructor.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar global = __webpack_require__(/*! ./_global */ \"./node_modules/core-js/modules/_global.js\");\nvar has = __webpack_require__(/*! ./_has */ \"./node_modules/core-js/modules/_has.js\");\nvar cof = __webpack_require__(/*! ./_cof */ \"./node_modules/core-js/modules/_cof.js\");\nvar inheritIfRequired = __webpack_require__(/*! ./_inherit-if-required */ \"./node_modules/core-js/modules/_inherit-if-required.js\");\nvar toPrimitive = __webpack_require__(/*! ./_to-primitive */ \"./node_modules/core-js/modules/_to-primitive.js\");\nvar fails = __webpack_require__(/*! ./_fails */ \"./node_modules/core-js/modules/_fails.js\");\nvar gOPN = __webpack_require__(/*! ./_object-gopn */ \"./node_modules/core-js/modules/_object-gopn.js\").f;\nvar gOPD = __webpack_require__(/*! ./_object-gopd */ \"./node_modules/core-js/modules/_object-gopd.js\").f;\nvar dP = __webpack_require__(/*! ./_object-dp */ \"./node_modules/core-js/modules/_object-dp.js\").f;\nvar $trim = __webpack_require__(/*! ./_string-trim */ \"./node_modules/core-js/modules/_string-trim.js\").trim;\nvar NUMBER = 'Number';\nvar $Number = global[NUMBER];\nvar Base = $Number;\nvar proto = $Number.prototype;\n// Opera ~12 has broken Object#toString\nvar BROKEN_COF = cof(__webpack_require__(/*! ./_object-create */ \"./node_modules/core-js/modules/_object-create.js\")(proto)) == NUMBER;\nvar TRIM = 'trim' in String.prototype;\n\n// 7.1.3 ToNumber(argument)\nvar toNumber = function (argument) {\n  var it = toPrimitive(argument, false);\n  if (typeof it == 'string' && it.length > 2) {\n    it = TRIM ? it.trim() : $trim(it, 3);\n    var first = it.charCodeAt(0);\n    var third, radix, maxCode;\n    if (first === 43 || first === 45) {\n      third = it.charCodeAt(2);\n      if (third === 88 || third === 120) return NaN; // Number('+0x1') should be NaN, old V8 fix\n    } else if (first === 48) {\n      switch (it.charCodeAt(1)) {\n        case 66: case 98: radix = 2; maxCode = 49; break; // fast equal /^0b[01]+$/i\n        case 79: case 111: radix = 8; maxCode = 55; break; // fast equal /^0o[0-7]+$/i\n        default: return +it;\n      }\n      for (var digits = it.slice(2), i = 0, l = digits.length, code; i < l; i++) {\n        code = digits.charCodeAt(i);\n        // parseInt parses a string to a first unavailable symbol\n        // but ToNumber should return NaN if a string contains unavailable symbols\n        if (code < 48 || code > maxCode) return NaN;\n      } return parseInt(digits, radix);\n    }\n  } return +it;\n};\n\nif (!$Number(' 0o1') || !$Number('0b1') || $Number('+0x1')) {\n  $Number = function Number(value) {\n    var it = arguments.length < 1 ? 0 : value;\n    var that = this;\n    return that instanceof $Number\n      // check on 1..constructor(foo) case\n      && (BROKEN_COF ? fails(function () { proto.valueOf.call(that); }) : cof(that) != NUMBER)\n        ? inheritIfRequired(new Base(toNumber(it)), that, $Number) : toNumber(it);\n  };\n  for (var keys = __webpack_require__(/*! ./_descriptors */ \"./node_modules/core-js/modules/_descriptors.js\") ? gOPN(Base) : (\n    // ES3:\n    'MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,' +\n    // ES6 (in case, if modules with ES6 Number statics required before):\n    'EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,' +\n    'MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger'\n  ).split(','), j = 0, key; keys.length > j; j++) {\n    if (has(Base, key = keys[j]) && !has($Number, key)) {\n      dP($Number, key, gOPD(Base, key));\n    }\n  }\n  $Number.prototype = proto;\n  proto.constructor = $Number;\n  __webpack_require__(/*! ./_redefine */ \"./node_modules/core-js/modules/_redefine.js\")(global, NUMBER, $Number);\n}\n\n\n//# sourceURL=webpack:///./node_modules/core-js/modules/es6.number.constructor.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/es6.number.epsilon.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.number.epsilon.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// 20.1.2.1 Number.EPSILON\nvar $export = __webpack_require__(/*! ./_export */ \"./node_modules/core-js/modules/_export.js\");\n\n$export($export.S, 'Number', { EPSILON: Math.pow(2, -52) });\n\n\n//# sourceURL=webpack:///./node_modules/core-js/modules/es6.number.epsilon.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/es6.number.is-finite.js":
/*!**************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.number.is-finite.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// 20.1.2.2 Number.isFinite(number)\nvar $export = __webpack_require__(/*! ./_export */ \"./node_modules/core-js/modules/_export.js\");\nvar _isFinite = __webpack_require__(/*! ./_global */ \"./node_modules/core-js/modules/_global.js\").isFinite;\n\n$export($export.S, 'Number', {\n  isFinite: function isFinite(it) {\n    return typeof it == 'number' && _isFinite(it);\n  }\n});\n\n\n//# sourceURL=webpack:///./node_modules/core-js/modules/es6.number.is-finite.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/es6.number.is-integer.js":
/*!***************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.number.is-integer.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// 20.1.2.3 Number.isInteger(number)\nvar $export = __webpack_require__(/*! ./_export */ \"./node_modules/core-js/modules/_export.js\");\n\n$export($export.S, 'Number', { isInteger: __webpack_require__(/*! ./_is-integer */ \"./node_modules/core-js/modules/_is-integer.js\") });\n\n\n//# sourceURL=webpack:///./node_modules/core-js/modules/es6.number.is-integer.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/es6.number.is-nan.js":
/*!***********************************************************!*\
  !*** ./node_modules/core-js/modules/es6.number.is-nan.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// 20.1.2.4 Number.isNaN(number)\nvar $export = __webpack_require__(/*! ./_export */ \"./node_modules/core-js/modules/_export.js\");\n\n$export($export.S, 'Number', {\n  isNaN: function isNaN(number) {\n    // eslint-disable-next-line no-self-compare\n    return number != number;\n  }\n});\n\n\n//# sourceURL=webpack:///./node_modules/core-js/modules/es6.number.is-nan.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/es6.number.is-safe-integer.js":
/*!********************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.number.is-safe-integer.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// 20.1.2.5 Number.isSafeInteger(number)\nvar $export = __webpack_require__(/*! ./_export */ \"./node_modules/core-js/modules/_export.js\");\nvar isInteger = __webpack_require__(/*! ./_is-integer */ \"./node_modules/core-js/modules/_is-integer.js\");\nvar abs = Math.abs;\n\n$export($export.S, 'Number', {\n  isSafeInteger: function isSafeInteger(number) {\n    return isInteger(number) && abs(number) <= 0x1fffffffffffff;\n  }\n});\n\n\n//# sourceURL=webpack:///./node_modules/core-js/modules/es6.number.is-safe-integer.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/es6.number.max-safe-integer.js":
/*!*********************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.number.max-safe-integer.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// 20.1.2.6 Number.MAX_SAFE_INTEGER\nvar $export = __webpack_require__(/*! ./_export */ \"./node_modules/core-js/modules/_export.js\");\n\n$export($export.S, 'Number', { MAX_SAFE_INTEGER: 0x1fffffffffffff });\n\n\n//# sourceURL=webpack:///./node_modules/core-js/modules/es6.number.max-safe-integer.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/es6.number.min-safe-integer.js":
/*!*********************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.number.min-safe-integer.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// 20.1.2.10 Number.MIN_SAFE_INTEGER\nvar $export = __webpack_require__(/*! ./_export */ \"./node_modules/core-js/modules/_export.js\");\n\n$export($export.S, 'Number', { MIN_SAFE_INTEGER: -0x1fffffffffffff });\n\n\n//# sourceURL=webpack:///./node_modules/core-js/modules/es6.number.min-safe-integer.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/es6.number.parse-float.js":
/*!****************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.number.parse-float.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var $export = __webpack_require__(/*! ./_export */ \"./node_modules/core-js/modules/_export.js\");\nvar $parseFloat = __webpack_require__(/*! ./_parse-float */ \"./node_modules/core-js/modules/_parse-float.js\");\n// 20.1.2.12 Number.parseFloat(string)\n$export($export.S + $export.F * (Number.parseFloat != $parseFloat), 'Number', { parseFloat: $parseFloat });\n\n\n//# sourceURL=webpack:///./node_modules/core-js/modules/es6.number.parse-float.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/es6.number.parse-int.js":
/*!**************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.number.parse-int.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var $export = __webpack_require__(/*! ./_export */ \"./node_modules/core-js/modules/_export.js\");\nvar $parseInt = __webpack_require__(/*! ./_parse-int */ \"./node_modules/core-js/modules/_parse-int.js\");\n// 20.1.2.13 Number.parseInt(string, radix)\n$export($export.S + $export.F * (Number.parseInt != $parseInt), 'Number', { parseInt: $parseInt });\n\n\n//# sourceURL=webpack:///./node_modules/core-js/modules/es6.number.parse-int.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/es6.number.to-fixed.js":
/*!*************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.number.to-fixed.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar $export = __webpack_require__(/*! ./_export */ \"./node_modules/core-js/modules/_export.js\");\nvar toInteger = __webpack_require__(/*! ./_to-integer */ \"./node_modules/core-js/modules/_to-integer.js\");\nvar aNumberValue = __webpack_require__(/*! ./_a-number-value */ \"./node_modules/core-js/modules/_a-number-value.js\");\nvar repeat = __webpack_require__(/*! ./_string-repeat */ \"./node_modules/core-js/modules/_string-repeat.js\");\nvar $toFixed = 1.0.toFixed;\nvar floor = Math.floor;\nvar data = [0, 0, 0, 0, 0, 0];\nvar ERROR = 'Number.toFixed: incorrect invocation!';\nvar ZERO = '0';\n\nvar multiply = function (n, c) {\n  var i = -1;\n  var c2 = c;\n  while (++i < 6) {\n    c2 += n * data[i];\n    data[i] = c2 % 1e7;\n    c2 = floor(c2 / 1e7);\n  }\n};\nvar divide = function (n) {\n  var i = 6;\n  var c = 0;\n  while (--i >= 0) {\n    c += data[i];\n    data[i] = floor(c / n);\n    c = (c % n) * 1e7;\n  }\n};\nvar numToString = function () {\n  var i = 6;\n  var s = '';\n  while (--i >= 0) {\n    if (s !== '' || i === 0 || data[i] !== 0) {\n      var t = String(data[i]);\n      s = s === '' ? t : s + repeat.call(ZERO, 7 - t.length) + t;\n    }\n  } return s;\n};\nvar pow = function (x, n, acc) {\n  return n === 0 ? acc : n % 2 === 1 ? pow(x, n - 1, acc * x) : pow(x * x, n / 2, acc);\n};\nvar log = function (x) {\n  var n = 0;\n  var x2 = x;\n  while (x2 >= 4096) {\n    n += 12;\n    x2 /= 4096;\n  }\n  while (x2 >= 2) {\n    n += 1;\n    x2 /= 2;\n  } return n;\n};\n\n$export($export.P + $export.F * (!!$toFixed && (\n  0.00008.toFixed(3) !== '0.000' ||\n  0.9.toFixed(0) !== '1' ||\n  1.255.toFixed(2) !== '1.25' ||\n  1000000000000000128.0.toFixed(0) !== '1000000000000000128'\n) || !__webpack_require__(/*! ./_fails */ \"./node_modules/core-js/modules/_fails.js\")(function () {\n  // V8 ~ Android 4.3-\n  $toFixed.call({});\n})), 'Number', {\n  toFixed: function toFixed(fractionDigits) {\n    var x = aNumberValue(this, ERROR);\n    var f = toInteger(fractionDigits);\n    var s = '';\n    var m = ZERO;\n    var e, z, j, k;\n    if (f < 0 || f > 20) throw RangeError(ERROR);\n    // eslint-disable-next-line no-self-compare\n    if (x != x) return 'NaN';\n    if (x <= -1e21 || x >= 1e21) return String(x);\n    if (x < 0) {\n      s = '-';\n      x = -x;\n    }\n    if (x > 1e-21) {\n      e = log(x * pow(2, 69, 1)) - 69;\n      z = e < 0 ? x * pow(2, -e, 1) : x / pow(2, e, 1);\n      z *= 0x10000000000000;\n      e = 52 - e;\n      if (e > 0) {\n        multiply(0, z);\n        j = f;\n        while (j >= 7) {\n          multiply(1e7, 0);\n          j -= 7;\n        }\n        multiply(pow(10, j, 1), 0);\n        j = e - 1;\n        while (j >= 23) {\n          divide(1 << 23);\n          j -= 23;\n        }\n        divide(1 << j);\n        multiply(1, 1);\n        divide(2);\n        m = numToString();\n      } else {\n        multiply(0, z);\n        multiply(1 << -e, 0);\n        m = numToString() + repeat.call(ZERO, f);\n      }\n    }\n    if (f > 0) {\n      k = m.length;\n      m = s + (k <= f ? '0.' + repeat.call(ZERO, f - k) + m : m.slice(0, k - f) + '.' + m.slice(k - f));\n    } else {\n      m = s + m;\n    } return m;\n  }\n});\n\n\n//# sourceURL=webpack:///./node_modules/core-js/modules/es6.number.to-fixed.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/es6.number.to-precision.js":
/*!*****************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.number.to-precision.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar $export = __webpack_require__(/*! ./_export */ \"./node_modules/core-js/modules/_export.js\");\nvar $fails = __webpack_require__(/*! ./_fails */ \"./node_modules/core-js/modules/_fails.js\");\nvar aNumberValue = __webpack_require__(/*! ./_a-number-value */ \"./node_modules/core-js/modules/_a-number-value.js\");\nvar $toPrecision = 1.0.toPrecision;\n\n$export($export.P + $export.F * ($fails(function () {\n  // IE7-\n  return $toPrecision.call(1, undefined) !== '1';\n}) || !$fails(function () {\n  // V8 ~ Android 4.3-\n  $toPrecision.call({});\n})), 'Number', {\n  toPrecision: function toPrecision(precision) {\n    var that = aNumberValue(this, 'Number#toPrecision: incorrect invocation!');\n    return precision === undefined ? $toPrecision.call(that) : $toPrecision.call(that, precision);\n  }\n});\n\n\n//# sourceURL=webpack:///./node_modules/core-js/modules/es6.number.to-precision.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/es6.object.assign.js":
/*!***********************************************************!*\
  !*** ./node_modules/core-js/modules/es6.object.assign.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// 19.1.3.1 Object.assign(target, source)\nvar $export = __webpack_require__(/*! ./_export */ \"./node_modules/core-js/modules/_export.js\");\n\n$export($export.S + $export.F, 'Object', { assign: __webpack_require__(/*! ./_object-assign */ \"./node_modules/core-js/modules/_object-assign.js\") });\n\n\n//# sourceURL=webpack:///./node_modules/core-js/modules/es6.object.assign.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/es6.object.create.js":
/*!***********************************************************!*\
  !*** ./node_modules/core-js/modules/es6.object.create.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var $export = __webpack_require__(/*! ./_export */ \"./node_modules/core-js/modules/_export.js\");\n// 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])\n$export($export.S, 'Object', { create: __webpack_require__(/*! ./_object-create */ \"./node_modules/core-js/modules/_object-create.js\") });\n\n\n//# sourceURL=webpack:///./node_modules/core-js/modules/es6.object.create.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/es6.object.define-properties.js":
/*!**********************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.object.define-properties.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var $export = __webpack_require__(/*! ./_export */ \"./node_modules/core-js/modules/_export.js\");\n// 19.1.2.3 / 15.2.3.7 Object.defineProperties(O, Properties)\n$export($export.S + $export.F * !__webpack_require__(/*! ./_descriptors */ \"./node_modules/core-js/modules/_descriptors.js\"), 'Object', { defineProperties: __webpack_require__(/*! ./_object-dps */ \"./node_modules/core-js/modules/_object-dps.js\") });\n\n\n//# sourceURL=webpack:///./node_modules/core-js/modules/es6.object.define-properties.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/es6.object.define-property.js":
/*!********************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.object.define-property.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var $export = __webpack_require__(/*! ./_export */ \"./node_modules/core-js/modules/_export.js\");\n// 19.1.2.4 / 15.2.3.6 Object.defineProperty(O, P, Attributes)\n$export($export.S + $export.F * !__webpack_require__(/*! ./_descriptors */ \"./node_modules/core-js/modules/_descriptors.js\"), 'Object', { defineProperty: __webpack_require__(/*! ./_object-dp */ \"./node_modules/core-js/modules/_object-dp.js\").f });\n\n\n//# sourceURL=webpack:///./node_modules/core-js/modules/es6.object.define-property.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/es6.object.freeze.js":
/*!***********************************************************!*\
  !*** ./node_modules/core-js/modules/es6.object.freeze.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// 19.1.2.5 Object.freeze(O)\nvar isObject = __webpack_require__(/*! ./_is-object */ \"./node_modules/core-js/modules/_is-object.js\");\nvar meta = __webpack_require__(/*! ./_meta */ \"./node_modules/core-js/modules/_meta.js\").onFreeze;\n\n__webpack_require__(/*! ./_object-sap */ \"./node_modules/core-js/modules/_object-sap.js\")('freeze', function ($freeze) {\n  return function freeze(it) {\n    return $freeze && isObject(it) ? $freeze(meta(it)) : it;\n  };\n});\n\n\n//# sourceURL=webpack:///./node_modules/core-js/modules/es6.object.freeze.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/es6.object.get-own-property-descriptor.js":
/*!********************************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.object.get-own-property-descriptor.js ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// 19.1.2.6 Object.getOwnPropertyDescriptor(O, P)\nvar toIObject = __webpack_require__(/*! ./_to-iobject */ \"./node_modules/core-js/modules/_to-iobject.js\");\nvar $getOwnPropertyDescriptor = __webpack_require__(/*! ./_object-gopd */ \"./node_modules/core-js/modules/_object-gopd.js\").f;\n\n__webpack_require__(/*! ./_object-sap */ \"./node_modules/core-js/modules/_object-sap.js\")('getOwnPropertyDescriptor', function () {\n  return function getOwnPropertyDescriptor(it, key) {\n    return $getOwnPropertyDescriptor(toIObject(it), key);\n  };\n});\n\n\n//# sourceURL=webpack:///./node_modules/core-js/modules/es6.object.get-own-property-descriptor.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/es6.object.get-own-property-names.js":
/*!***************************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.object.get-own-property-names.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// 19.1.2.7 Object.getOwnPropertyNames(O)\n__webpack_require__(/*! ./_object-sap */ \"./node_modules/core-js/modules/_object-sap.js\")('getOwnPropertyNames', function () {\n  return __webpack_require__(/*! ./_object-gopn-ext */ \"./node_modules/core-js/modules/_object-gopn-ext.js\").f;\n});\n\n\n//# sourceURL=webpack:///./node_modules/core-js/modules/es6.object.get-own-property-names.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/es6.object.get-prototype-of.js":
/*!*********************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.object.get-prototype-of.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// 19.1.2.9 Object.getPrototypeOf(O)\nvar toObject = __webpack_require__(/*! ./_to-object */ \"./node_modules/core-js/modules/_to-object.js\");\nvar $getPrototypeOf = __webpack_require__(/*! ./_object-gpo */ \"./node_modules/core-js/modules/_object-gpo.js\");\n\n__webpack_require__(/*! ./_object-sap */ \"./node_modules/core-js/modules/_object-sap.js\")('getPrototypeOf', function () {\n  return function getPrototypeOf(it) {\n    return $getPrototypeOf(toObject(it));\n  };\n});\n\n\n//# sourceURL=webpack:///./node_modules/core-js/modules/es6.object.get-prototype-of.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/es6.object.is-extensible.js":
/*!******************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.object.is-extensible.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// 19.1.2.11 Object.isExtensible(O)\nvar isObject = __webpack_require__(/*! ./_is-object */ \"./node_modules/core-js/modules/_is-object.js\");\n\n__webpack_require__(/*! ./_object-sap */ \"./node_modules/core-js/modules/_object-sap.js\")('isExtensible', function ($isExtensible) {\n  return function isExtensible(it) {\n    return isObject(it) ? $isExtensible ? $isExtensible(it) : true : false;\n  };\n});\n\n\n//# sourceURL=webpack:///./node_modules/core-js/modules/es6.object.is-extensible.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/es6.object.is-frozen.js":
/*!**************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.object.is-frozen.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// 19.1.2.12 Object.isFrozen(O)\nvar isObject = __webpack_require__(/*! ./_is-object */ \"./node_modules/core-js/modules/_is-object.js\");\n\n__webpack_require__(/*! ./_object-sap */ \"./node_modules/core-js/modules/_object-sap.js\")('isFrozen', function ($isFrozen) {\n  return function isFrozen(it) {\n    return isObject(it) ? $isFrozen ? $isFrozen(it) : false : true;\n  };\n});\n\n\n//# sourceURL=webpack:///./node_modules/core-js/modules/es6.object.is-frozen.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/es6.object.is-sealed.js":
/*!**************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.object.is-sealed.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// 19.1.2.13 Object.isSealed(O)\nvar isObject = __webpack_require__(/*! ./_is-object */ \"./node_modules/core-js/modules/_is-object.js\");\n\n__webpack_require__(/*! ./_object-sap */ \"./node_modules/core-js/modules/_object-sap.js\")('isSealed', function ($isSealed) {\n  return function isSealed(it) {\n    return isObject(it) ? $isSealed ? $isSealed(it) : false : true;\n  };\n});\n\n\n//# sourceURL=webpack:///./node_modules/core-js/modules/es6.object.is-sealed.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/es6.object.is.js":
/*!*******************************************************!*\
  !*** ./node_modules/core-js/modules/es6.object.is.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// 19.1.3.10 Object.is(value1, value2)\nvar $export = __webpack_require__(/*! ./_export */ \"./node_modules/core-js/modules/_export.js\");\n$export($export.S, 'Object', { is: __webpack_require__(/*! ./_same-value */ \"./node_modules/core-js/modules/_same-value.js\") });\n\n\n//# sourceURL=webpack:///./node_modules/core-js/modules/es6.object.is.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/es6.object.keys.js":
/*!*********************************************************!*\
  !*** ./node_modules/core-js/modules/es6.object.keys.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// 19.1.2.14 Object.keys(O)\nvar toObject = __webpack_require__(/*! ./_to-object */ \"./node_modules/core-js/modules/_to-object.js\");\nvar $keys = __webpack_require__(/*! ./_object-keys */ \"./node_modules/core-js/modules/_object-keys.js\");\n\n__webpack_require__(/*! ./_object-sap */ \"./node_modules/core-js/modules/_object-sap.js\")('keys', function () {\n  return function keys(it) {\n    return $keys(toObject(it));\n  };\n});\n\n\n//# sourceURL=webpack:///./node_modules/core-js/modules/es6.object.keys.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/es6.object.prevent-extensions.js":
/*!***********************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.object.prevent-extensions.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// 19.1.2.15 Object.preventExtensions(O)\nvar isObject = __webpack_require__(/*! ./_is-object */ \"./node_modules/core-js/modules/_is-object.js\");\nvar meta = __webpack_require__(/*! ./_meta */ \"./node_modules/core-js/modules/_meta.js\").onFreeze;\n\n__webpack_require__(/*! ./_object-sap */ \"./node_modules/core-js/modules/_object-sap.js\")('preventExtensions', function ($preventExtensions) {\n  return function preventExtensions(it) {\n    return $preventExtensions && isObject(it) ? $preventExtensions(meta(it)) : it;\n  };\n});\n\n\n//# sourceURL=webpack:///./node_modules/core-js/modules/es6.object.prevent-extensions.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/es6.object.seal.js":
/*!*********************************************************!*\
  !*** ./node_modules/core-js/modules/es6.object.seal.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// 19.1.2.17 Object.seal(O)\nvar isObject = __webpack_require__(/*! ./_is-object */ \"./node_modules/core-js/modules/_is-object.js\");\nvar meta = __webpack_require__(/*! ./_meta */ \"./node_modules/core-js/modules/_meta.js\").onFreeze;\n\n__webpack_require__(/*! ./_object-sap */ \"./node_modules/core-js/modules/_object-sap.js\")('seal', function ($seal) {\n  return function seal(it) {\n    return $seal && isObject(it) ? $seal(meta(it)) : it;\n  };\n});\n\n\n//# sourceURL=webpack:///./node_modules/core-js/modules/es6.object.seal.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/es6.object.set-prototype-of.js":
/*!*********************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.object.set-prototype-of.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// 19.1.3.19 Object.setPrototypeOf(O, proto)\nvar $export = __webpack_require__(/*! ./_export */ \"./node_modules/core-js/modules/_export.js\");\n$export($export.S, 'Object', { setPrototypeOf: __webpack_require__(/*! ./_set-proto */ \"./node_modules/core-js/modules/_set-proto.js\").set });\n\n\n//# sourceURL=webpack:///./node_modules/core-js/modules/es6.object.set-prototype-of.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/es6.object.to-string.js":
/*!**************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.object.to-string.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n// 19.1.3.6 Object.prototype.toString()\nvar classof = __webpack_require__(/*! ./_classof */ \"./node_modules/core-js/modules/_classof.js\");\nvar test = {};\ntest[__webpack_require__(/*! ./_wks */ \"./node_modules/core-js/modules/_wks.js\")('toStringTag')] = 'z';\nif (test + '' != '[object z]') {\n  __webpack_require__(/*! ./_redefine */ \"./node_modules/core-js/modules/_redefine.js\")(Object.prototype, 'toString', function toString() {\n    return '[object ' + classof(this) + ']';\n  }, true);\n}\n\n\n//# sourceURL=webpack:///./node_modules/core-js/modules/es6.object.to-string.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/es6.parse-float.js":
/*!*********************************************************!*\
  !*** ./node_modules/core-js/modules/es6.parse-float.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var $export = __webpack_require__(/*! ./_export */ \"./node_modules/core-js/modules/_export.js\");\nvar $parseFloat = __webpack_require__(/*! ./_parse-float */ \"./node_modules/core-js/modules/_parse-float.js\");\n// 18.2.4 parseFloat(string)\n$export($export.G + $export.F * (parseFloat != $parseFloat), { parseFloat: $parseFloat });\n\n\n//# sourceURL=webpack:///./node_modules/core-js/modules/es6.parse-float.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/es6.parse-int.js":
/*!*******************************************************!*\
  !*** ./node_modules/core-js/modules/es6.parse-int.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var $export = __webpack_require__(/*! ./_export */ \"./node_modules/core-js/modules/_export.js\");\nvar $parseInt = __webpack_require__(/*! ./_parse-int */ \"./node_modules/core-js/modules/_parse-int.js\");\n// 18.2.5 parseInt(string, radix)\n$export($export.G + $export.F * (parseInt != $parseInt), { parseInt: $parseInt });\n\n\n//# sourceURL=webpack:///./node_modules/core-js/modules/es6.parse-int.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/es6.promise.js":
/*!*****************************************************!*\
  !*** ./node_modules/core-js/modules/es6.promise.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar LIBRARY = __webpack_require__(/*! ./_library */ \"./node_modules/core-js/modules/_library.js\");\nvar global = __webpack_require__(/*! ./_global */ \"./node_modules/core-js/modules/_global.js\");\nvar ctx = __webpack_require__(/*! ./_ctx */ \"./node_modules/core-js/modules/_ctx.js\");\nvar classof = __webpack_require__(/*! ./_classof */ \"./node_modules/core-js/modules/_classof.js\");\nvar $export = __webpack_require__(/*! ./_export */ \"./node_modules/core-js/modules/_export.js\");\nvar isObject = __webpack_require__(/*! ./_is-object */ \"./node_modules/core-js/modules/_is-object.js\");\nvar aFunction = __webpack_require__(/*! ./_a-function */ \"./node_modules/core-js/modules/_a-function.js\");\nvar anInstance = __webpack_require__(/*! ./_an-instance */ \"./node_modules/core-js/modules/_an-instance.js\");\nvar forOf = __webpack_require__(/*! ./_for-of */ \"./node_modules/core-js/modules/_for-of.js\");\nvar speciesConstructor = __webpack_require__(/*! ./_species-constructor */ \"./node_modules/core-js/modules/_species-constructor.js\");\nvar task = __webpack_require__(/*! ./_task */ \"./node_modules/core-js/modules/_task.js\").set;\nvar microtask = __webpack_require__(/*! ./_microtask */ \"./node_modules/core-js/modules/_microtask.js\")();\nvar newPromiseCapabilityModule = __webpack_require__(/*! ./_new-promise-capability */ \"./node_modules/core-js/modules/_new-promise-capability.js\");\nvar perform = __webpack_require__(/*! ./_perform */ \"./node_modules/core-js/modules/_perform.js\");\nvar userAgent = __webpack_require__(/*! ./_user-agent */ \"./node_modules/core-js/modules/_user-agent.js\");\nvar promiseResolve = __webpack_require__(/*! ./_promise-resolve */ \"./node_modules/core-js/modules/_promise-resolve.js\");\nvar PROMISE = 'Promise';\nvar TypeError = global.TypeError;\nvar process = global.process;\nvar versions = process && process.versions;\nvar v8 = versions && versions.v8 || '';\nvar $Promise = global[PROMISE];\nvar isNode = classof(process) == 'process';\nvar empty = function () { /* empty */ };\nvar Internal, newGenericPromiseCapability, OwnPromiseCapability, Wrapper;\nvar newPromiseCapability = newGenericPromiseCapability = newPromiseCapabilityModule.f;\n\nvar USE_NATIVE = !!function () {\n  try {\n    // correct subclassing with @@species support\n    var promise = $Promise.resolve(1);\n    var FakePromise = (promise.constructor = {})[__webpack_require__(/*! ./_wks */ \"./node_modules/core-js/modules/_wks.js\")('species')] = function (exec) {\n      exec(empty, empty);\n    };\n    // unhandled rejections tracking support, NodeJS Promise without it fails @@species test\n    return (isNode || typeof PromiseRejectionEvent == 'function')\n      && promise.then(empty) instanceof FakePromise\n      // v8 6.6 (Node 10 and Chrome 66) have a bug with resolving custom thenables\n      // https://bugs.chromium.org/p/chromium/issues/detail?id=830565\n      // we can't detect it synchronously, so just check versions\n      && v8.indexOf('6.6') !== 0\n      && userAgent.indexOf('Chrome/66') === -1;\n  } catch (e) { /* empty */ }\n}();\n\n// helpers\nvar isThenable = function (it) {\n  var then;\n  return isObject(it) && typeof (then = it.then) == 'function' ? then : false;\n};\nvar notify = function (promise, isReject) {\n  if (promise._n) return;\n  promise._n = true;\n  var chain = promise._c;\n  microtask(function () {\n    var value = promise._v;\n    var ok = promise._s == 1;\n    var i = 0;\n    var run = function (reaction) {\n      var handler = ok ? reaction.ok : reaction.fail;\n      var resolve = reaction.resolve;\n      var reject = reaction.reject;\n      var domain = reaction.domain;\n      var result, then, exited;\n      try {\n        if (handler) {\n          if (!ok) {\n            if (promise._h == 2) onHandleUnhandled(promise);\n            promise._h = 1;\n          }\n          if (handler === true) result = value;\n          else {\n            if (domain) domain.enter();\n            result = handler(value); // may throw\n            if (domain) {\n              domain.exit();\n              exited = true;\n            }\n          }\n          if (result === reaction.promise) {\n            reject(TypeError('Promise-chain cycle'));\n          } else if (then = isThenable(result)) {\n            then.call(result, resolve, reject);\n          } else resolve(result);\n        } else reject(value);\n      } catch (e) {\n        if (domain && !exited) domain.exit();\n        reject(e);\n      }\n    };\n    while (chain.length > i) run(chain[i++]); // variable length - can't use forEach\n    promise._c = [];\n    promise._n = false;\n    if (isReject && !promise._h) onUnhandled(promise);\n  });\n};\nvar onUnhandled = function (promise) {\n  task.call(global, function () {\n    var value = promise._v;\n    var unhandled = isUnhandled(promise);\n    var result, handler, console;\n    if (unhandled) {\n      result = perform(function () {\n        if (isNode) {\n          process.emit('unhandledRejection', value, promise);\n        } else if (handler = global.onunhandledrejection) {\n          handler({ promise: promise, reason: value });\n        } else if ((console = global.console) && console.error) {\n          console.error('Unhandled promise rejection', value);\n        }\n      });\n      // Browsers should not trigger `rejectionHandled` event if it was handled here, NodeJS - should\n      promise._h = isNode || isUnhandled(promise) ? 2 : 1;\n    } promise._a = undefined;\n    if (unhandled && result.e) throw result.v;\n  });\n};\nvar isUnhandled = function (promise) {\n  return promise._h !== 1 && (promise._a || promise._c).length === 0;\n};\nvar onHandleUnhandled = function (promise) {\n  task.call(global, function () {\n    var handler;\n    if (isNode) {\n      process.emit('rejectionHandled', promise);\n    } else if (handler = global.onrejectionhandled) {\n      handler({ promise: promise, reason: promise._v });\n    }\n  });\n};\nvar $reject = function (value) {\n  var promise = this;\n  if (promise._d) return;\n  promise._d = true;\n  promise = promise._w || promise; // unwrap\n  promise._v = value;\n  promise._s = 2;\n  if (!promise._a) promise._a = promise._c.slice();\n  notify(promise, true);\n};\nvar $resolve = function (value) {\n  var promise = this;\n  var then;\n  if (promise._d) return;\n  promise._d = true;\n  promise = promise._w || promise; // unwrap\n  try {\n    if (promise === value) throw TypeError(\"Promise can't be resolved itself\");\n    if (then = isThenable(value)) {\n      microtask(function () {\n        var wrapper = { _w: promise, _d: false }; // wrap\n        try {\n          then.call(value, ctx($resolve, wrapper, 1), ctx($reject, wrapper, 1));\n        } catch (e) {\n          $reject.call(wrapper, e);\n        }\n      });\n    } else {\n      promise._v = value;\n      promise._s = 1;\n      notify(promise, false);\n    }\n  } catch (e) {\n    $reject.call({ _w: promise, _d: false }, e); // wrap\n  }\n};\n\n// constructor polyfill\nif (!USE_NATIVE) {\n  // 25.4.3.1 Promise(executor)\n  $Promise = function Promise(executor) {\n    anInstance(this, $Promise, PROMISE, '_h');\n    aFunction(executor);\n    Internal.call(this);\n    try {\n      executor(ctx($resolve, this, 1), ctx($reject, this, 1));\n    } catch (err) {\n      $reject.call(this, err);\n    }\n  };\n  // eslint-disable-next-line no-unused-vars\n  Internal = function Promise(executor) {\n    this._c = [];             // <- awaiting reactions\n    this._a = undefined;      // <- checked in isUnhandled reactions\n    this._s = 0;              // <- state\n    this._d = false;          // <- done\n    this._v = undefined;      // <- value\n    this._h = 0;              // <- rejection state, 0 - default, 1 - handled, 2 - unhandled\n    this._n = false;          // <- notify\n  };\n  Internal.prototype = __webpack_require__(/*! ./_redefine-all */ \"./node_modules/core-js/modules/_redefine-all.js\")($Promise.prototype, {\n    // 25.4.5.3 Promise.prototype.then(onFulfilled, onRejected)\n    then: function then(onFulfilled, onRejected) {\n      var reaction = newPromiseCapability(speciesConstructor(this, $Promise));\n      reaction.ok = typeof onFulfilled == 'function' ? onFulfilled : true;\n      reaction.fail = typeof onRejected == 'function' && onRejected;\n      reaction.domain = isNode ? process.domain : undefined;\n      this._c.push(reaction);\n      if (this._a) this._a.push(reaction);\n      if (this._s) notify(this, false);\n      return reaction.promise;\n    },\n    // 25.4.5.1 Promise.prototype.catch(onRejected)\n    'catch': function (onRejected) {\n      return this.then(undefined, onRejected);\n    }\n  });\n  OwnPromiseCapability = function () {\n    var promise = new Internal();\n    this.promise = promise;\n    this.resolve = ctx($resolve, promise, 1);\n    this.reject = ctx($reject, promise, 1);\n  };\n  newPromiseCapabilityModule.f = newPromiseCapability = function (C) {\n    return C === $Promise || C === Wrapper\n      ? new OwnPromiseCapability(C)\n      : newGenericPromiseCapability(C);\n  };\n}\n\n$export($export.G + $export.W + $export.F * !USE_NATIVE, { Promise: $Promise });\n__webpack_require__(/*! ./_set-to-string-tag */ \"./node_modules/core-js/modules/_set-to-string-tag.js\")($Promise, PROMISE);\n__webpack_require__(/*! ./_set-species */ \"./node_modules/core-js/modules/_set-species.js\")(PROMISE);\nWrapper = __webpack_require__(/*! ./_core */ \"./node_modules/core-js/modules/_core.js\")[PROMISE];\n\n// statics\n$export($export.S + $export.F * !USE_NATIVE, PROMISE, {\n  // 25.4.4.5 Promise.reject(r)\n  reject: function reject(r) {\n    var capability = newPromiseCapability(this);\n    var $$reject = capability.reject;\n    $$reject(r);\n    return capability.promise;\n  }\n});\n$export($export.S + $export.F * (LIBRARY || !USE_NATIVE), PROMISE, {\n  // 25.4.4.6 Promise.resolve(x)\n  resolve: function resolve(x) {\n    return promiseResolve(LIBRARY && this === Wrapper ? $Promise : this, x);\n  }\n});\n$export($export.S + $export.F * !(USE_NATIVE && __webpack_require__(/*! ./_iter-detect */ \"./node_modules/core-js/modules/_iter-detect.js\")(function (iter) {\n  $Promise.all(iter)['catch'](empty);\n})), PROMISE, {\n  // 25.4.4.1 Promise.all(iterable)\n  all: function all(iterable) {\n    var C = this;\n    var capability = newPromiseCapability(C);\n    var resolve = capability.resolve;\n    var reject = capability.reject;\n    var result = perform(function () {\n      var values = [];\n      var index = 0;\n      var remaining = 1;\n      forOf(iterable, false, function (promise) {\n        var $index = index++;\n        var alreadyCalled = false;\n        values.push(undefined);\n        remaining++;\n        C.resolve(promise).then(function (value) {\n          if (alreadyCalled) return;\n          alreadyCalled = true;\n          values[$index] = value;\n          --remaining || resolve(values);\n        }, reject);\n      });\n      --remaining || resolve(values);\n    });\n    if (result.e) reject(result.v);\n    return capability.promise;\n  },\n  // 25.4.4.4 Promise.race(iterable)\n  race: function race(iterable) {\n    var C = this;\n    var capability = newPromiseCapability(C);\n    var reject = capability.reject;\n    var result = perform(function () {\n      forOf(iterable, false, function (promise) {\n        C.resolve(promise).then(capability.resolve, reject);\n      });\n    });\n    if (result.e) reject(result.v);\n    return capability.promise;\n  }\n});\n\n\n//# sourceURL=webpack:///./node_modules/core-js/modules/es6.promise.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/es6.reflect.apply.js":
/*!***********************************************************!*\
  !*** ./node_modules/core-js/modules/es6.reflect.apply.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// 26.1.1 Reflect.apply(target, thisArgument, argumentsList)\nvar $export = __webpack_require__(/*! ./_export */ \"./node_modules/core-js/modules/_export.js\");\nvar aFunction = __webpack_require__(/*! ./_a-function */ \"./node_modules/core-js/modules/_a-function.js\");\nvar anObject = __webpack_require__(/*! ./_an-object */ \"./node_modules/core-js/modules/_an-object.js\");\nvar rApply = (__webpack_require__(/*! ./_global */ \"./node_modules/core-js/modules/_global.js\").Reflect || {}).apply;\nvar fApply = Function.apply;\n// MS Edge argumentsList argument is optional\n$export($export.S + $export.F * !__webpack_require__(/*! ./_fails */ \"./node_modules/core-js/modules/_fails.js\")(function () {\n  rApply(function () { /* empty */ });\n}), 'Reflect', {\n  apply: function apply(target, thisArgument, argumentsList) {\n    var T = aFunction(target);\n    var L = anObject(argumentsList);\n    return rApply ? rApply(T, thisArgument, L) : fApply.call(T, thisArgument, L);\n  }\n});\n\n\n//# sourceURL=webpack:///./node_modules/core-js/modules/es6.reflect.apply.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/es6.reflect.construct.js":
/*!***************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.reflect.construct.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// 26.1.2 Reflect.construct(target, argumentsList [, newTarget])\nvar $export = __webpack_require__(/*! ./_export */ \"./node_modules/core-js/modules/_export.js\");\nvar create = __webpack_require__(/*! ./_object-create */ \"./node_modules/core-js/modules/_object-create.js\");\nvar aFunction = __webpack_require__(/*! ./_a-function */ \"./node_modules/core-js/modules/_a-function.js\");\nvar anObject = __webpack_require__(/*! ./_an-object */ \"./node_modules/core-js/modules/_an-object.js\");\nvar isObject = __webpack_require__(/*! ./_is-object */ \"./node_modules/core-js/modules/_is-object.js\");\nvar fails = __webpack_require__(/*! ./_fails */ \"./node_modules/core-js/modules/_fails.js\");\nvar bind = __webpack_require__(/*! ./_bind */ \"./node_modules/core-js/modules/_bind.js\");\nvar rConstruct = (__webpack_require__(/*! ./_global */ \"./node_modules/core-js/modules/_global.js\").Reflect || {}).construct;\n\n// MS Edge supports only 2 arguments and argumentsList argument is optional\n// FF Nightly sets third argument as `new.target`, but does not create `this` from it\nvar NEW_TARGET_BUG = fails(function () {\n  function F() { /* empty */ }\n  return !(rConstruct(function () { /* empty */ }, [], F) instanceof F);\n});\nvar ARGS_BUG = !fails(function () {\n  rConstruct(function () { /* empty */ });\n});\n\n$export($export.S + $export.F * (NEW_TARGET_BUG || ARGS_BUG), 'Reflect', {\n  construct: function construct(Target, args /* , newTarget */) {\n    aFunction(Target);\n    anObject(args);\n    var newTarget = arguments.length < 3 ? Target : aFunction(arguments[2]);\n    if (ARGS_BUG && !NEW_TARGET_BUG) return rConstruct(Target, args, newTarget);\n    if (Target == newTarget) {\n      // w/o altered newTarget, optimization for 0-4 arguments\n      switch (args.length) {\n        case 0: return new Target();\n        case 1: return new Target(args[0]);\n        case 2: return new Target(args[0], args[1]);\n        case 3: return new Target(args[0], args[1], args[2]);\n        case 4: return new Target(args[0], args[1], args[2], args[3]);\n      }\n      // w/o altered newTarget, lot of arguments case\n      var $args = [null];\n      $args.push.apply($args, args);\n      return new (bind.apply(Target, $args))();\n    }\n    // with altered newTarget, not support built-in constructors\n    var proto = newTarget.prototype;\n    var instance = create(isObject(proto) ? proto : Object.prototype);\n    var result = Function.apply.call(Target, instance, args);\n    return isObject(result) ? result : instance;\n  }\n});\n\n\n//# sourceURL=webpack:///./node_modules/core-js/modules/es6.reflect.construct.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/es6.reflect.define-property.js":
/*!*********************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.reflect.define-property.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// 26.1.3 Reflect.defineProperty(target, propertyKey, attributes)\nvar dP = __webpack_require__(/*! ./_object-dp */ \"./node_modules/core-js/modules/_object-dp.js\");\nvar $export = __webpack_require__(/*! ./_export */ \"./node_modules/core-js/modules/_export.js\");\nvar anObject = __webpack_require__(/*! ./_an-object */ \"./node_modules/core-js/modules/_an-object.js\");\nvar toPrimitive = __webpack_require__(/*! ./_to-primitive */ \"./node_modules/core-js/modules/_to-primitive.js\");\n\n// MS Edge has broken Reflect.defineProperty - throwing instead of returning false\n$export($export.S + $export.F * __webpack_require__(/*! ./_fails */ \"./node_modules/core-js/modules/_fails.js\")(function () {\n  // eslint-disable-next-line no-undef\n  Reflect.defineProperty(dP.f({}, 1, { value: 1 }), 1, { value: 2 });\n}), 'Reflect', {\n  defineProperty: function defineProperty(target, propertyKey, attributes) {\n    anObject(target);\n    propertyKey = toPrimitive(propertyKey, true);\n    anObject(attributes);\n    try {\n      dP.f(target, propertyKey, attributes);\n      return true;\n    } catch (e) {\n      return false;\n    }\n  }\n});\n\n\n//# sourceURL=webpack:///./node_modules/core-js/modules/es6.reflect.define-property.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/es6.reflect.delete-property.js":
/*!*********************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.reflect.delete-property.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// 26.1.4 Reflect.deleteProperty(target, propertyKey)\nvar $export = __webpack_require__(/*! ./_export */ \"./node_modules/core-js/modules/_export.js\");\nvar gOPD = __webpack_require__(/*! ./_object-gopd */ \"./node_modules/core-js/modules/_object-gopd.js\").f;\nvar anObject = __webpack_require__(/*! ./_an-object */ \"./node_modules/core-js/modules/_an-object.js\");\n\n$export($export.S, 'Reflect', {\n  deleteProperty: function deleteProperty(target, propertyKey) {\n    var desc = gOPD(anObject(target), propertyKey);\n    return desc && !desc.configurable ? false : delete target[propertyKey];\n  }\n});\n\n\n//# sourceURL=webpack:///./node_modules/core-js/modules/es6.reflect.delete-property.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/es6.reflect.enumerate.js":
/*!***************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.reflect.enumerate.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n// 26.1.5 Reflect.enumerate(target)\nvar $export = __webpack_require__(/*! ./_export */ \"./node_modules/core-js/modules/_export.js\");\nvar anObject = __webpack_require__(/*! ./_an-object */ \"./node_modules/core-js/modules/_an-object.js\");\nvar Enumerate = function (iterated) {\n  this._t = anObject(iterated); // target\n  this._i = 0;                  // next index\n  var keys = this._k = [];      // keys\n  var key;\n  for (key in iterated) keys.push(key);\n};\n__webpack_require__(/*! ./_iter-create */ \"./node_modules/core-js/modules/_iter-create.js\")(Enumerate, 'Object', function () {\n  var that = this;\n  var keys = that._k;\n  var key;\n  do {\n    if (that._i >= keys.length) return { value: undefined, done: true };\n  } while (!((key = keys[that._i++]) in that._t));\n  return { value: key, done: false };\n});\n\n$export($export.S, 'Reflect', {\n  enumerate: function enumerate(target) {\n    return new Enumerate(target);\n  }\n});\n\n\n//# sourceURL=webpack:///./node_modules/core-js/modules/es6.reflect.enumerate.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/es6.reflect.get-own-property-descriptor.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.reflect.get-own-property-descriptor.js ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// 26.1.7 Reflect.getOwnPropertyDescriptor(target, propertyKey)\nvar gOPD = __webpack_require__(/*! ./_object-gopd */ \"./node_modules/core-js/modules/_object-gopd.js\");\nvar $export = __webpack_require__(/*! ./_export */ \"./node_modules/core-js/modules/_export.js\");\nvar anObject = __webpack_require__(/*! ./_an-object */ \"./node_modules/core-js/modules/_an-object.js\");\n\n$export($export.S, 'Reflect', {\n  getOwnPropertyDescriptor: function getOwnPropertyDescriptor(target, propertyKey) {\n    return gOPD.f(anObject(target), propertyKey);\n  }\n});\n\n\n//# sourceURL=webpack:///./node_modules/core-js/modules/es6.reflect.get-own-property-descriptor.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/es6.reflect.get-prototype-of.js":
/*!**********************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.reflect.get-prototype-of.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// 26.1.8 Reflect.getPrototypeOf(target)\nvar $export = __webpack_require__(/*! ./_export */ \"./node_modules/core-js/modules/_export.js\");\nvar getProto = __webpack_require__(/*! ./_object-gpo */ \"./node_modules/core-js/modules/_object-gpo.js\");\nvar anObject = __webpack_require__(/*! ./_an-object */ \"./node_modules/core-js/modules/_an-object.js\");\n\n$export($export.S, 'Reflect', {\n  getPrototypeOf: function getPrototypeOf(target) {\n    return getProto(anObject(target));\n  }\n});\n\n\n//# sourceURL=webpack:///./node_modules/core-js/modules/es6.reflect.get-prototype-of.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/es6.reflect.get.js":
/*!*********************************************************!*\
  !*** ./node_modules/core-js/modules/es6.reflect.get.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// 26.1.6 Reflect.get(target, propertyKey [, receiver])\nvar gOPD = __webpack_require__(/*! ./_object-gopd */ \"./node_modules/core-js/modules/_object-gopd.js\");\nvar getPrototypeOf = __webpack_require__(/*! ./_object-gpo */ \"./node_modules/core-js/modules/_object-gpo.js\");\nvar has = __webpack_require__(/*! ./_has */ \"./node_modules/core-js/modules/_has.js\");\nvar $export = __webpack_require__(/*! ./_export */ \"./node_modules/core-js/modules/_export.js\");\nvar isObject = __webpack_require__(/*! ./_is-object */ \"./node_modules/core-js/modules/_is-object.js\");\nvar anObject = __webpack_require__(/*! ./_an-object */ \"./node_modules/core-js/modules/_an-object.js\");\n\nfunction get(target, propertyKey /* , receiver */) {\n  var receiver = arguments.length < 3 ? target : arguments[2];\n  var desc, proto;\n  if (anObject(target) === receiver) return target[propertyKey];\n  if (desc = gOPD.f(target, propertyKey)) return has(desc, 'value')\n    ? desc.value\n    : desc.get !== undefined\n      ? desc.get.call(receiver)\n      : undefined;\n  if (isObject(proto = getPrototypeOf(target))) return get(proto, propertyKey, receiver);\n}\n\n$export($export.S, 'Reflect', { get: get });\n\n\n//# sourceURL=webpack:///./node_modules/core-js/modules/es6.reflect.get.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/es6.reflect.has.js":
/*!*********************************************************!*\
  !*** ./node_modules/core-js/modules/es6.reflect.has.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// 26.1.9 Reflect.has(target, propertyKey)\nvar $export = __webpack_require__(/*! ./_export */ \"./node_modules/core-js/modules/_export.js\");\n\n$export($export.S, 'Reflect', {\n  has: function has(target, propertyKey) {\n    return propertyKey in target;\n  }\n});\n\n\n//# sourceURL=webpack:///./node_modules/core-js/modules/es6.reflect.has.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/es6.reflect.is-extensible.js":
/*!*******************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.reflect.is-extensible.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// 26.1.10 Reflect.isExtensible(target)\nvar $export = __webpack_require__(/*! ./_export */ \"./node_modules/core-js/modules/_export.js\");\nvar anObject = __webpack_require__(/*! ./_an-object */ \"./node_modules/core-js/modules/_an-object.js\");\nvar $isExtensible = Object.isExtensible;\n\n$export($export.S, 'Reflect', {\n  isExtensible: function isExtensible(target) {\n    anObject(target);\n    return $isExtensible ? $isExtensible(target) : true;\n  }\n});\n\n\n//# sourceURL=webpack:///./node_modules/core-js/modules/es6.reflect.is-extensible.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/es6.reflect.own-keys.js":
/*!**************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.reflect.own-keys.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// 26.1.11 Reflect.ownKeys(target)\nvar $export = __webpack_require__(/*! ./_export */ \"./node_modules/core-js/modules/_export.js\");\n\n$export($export.S, 'Reflect', { ownKeys: __webpack_require__(/*! ./_own-keys */ \"./node_modules/core-js/modules/_own-keys.js\") });\n\n\n//# sourceURL=webpack:///./node_modules/core-js/modules/es6.reflect.own-keys.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/es6.reflect.prevent-extensions.js":
/*!************************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.reflect.prevent-extensions.js ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// 26.1.12 Reflect.preventExtensions(target)\nvar $export = __webpack_require__(/*! ./_export */ \"./node_modules/core-js/modules/_export.js\");\nvar anObject = __webpack_require__(/*! ./_an-object */ \"./node_modules/core-js/modules/_an-object.js\");\nvar $preventExtensions = Object.preventExtensions;\n\n$export($export.S, 'Reflect', {\n  preventExtensions: function preventExtensions(target) {\n    anObject(target);\n    try {\n      if ($preventExtensions) $preventExtensions(target);\n      return true;\n    } catch (e) {\n      return false;\n    }\n  }\n});\n\n\n//# sourceURL=webpack:///./node_modules/core-js/modules/es6.reflect.prevent-extensions.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/es6.reflect.set-prototype-of.js":
/*!**********************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.reflect.set-prototype-of.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// 26.1.14 Reflect.setPrototypeOf(target, proto)\nvar $export = __webpack_require__(/*! ./_export */ \"./node_modules/core-js/modules/_export.js\");\nvar setProto = __webpack_require__(/*! ./_set-proto */ \"./node_modules/core-js/modules/_set-proto.js\");\n\nif (setProto) $export($export.S, 'Reflect', {\n  setPrototypeOf: function setPrototypeOf(target, proto) {\n    setProto.check(target, proto);\n    try {\n      setProto.set(target, proto);\n      return true;\n    } catch (e) {\n      return false;\n    }\n  }\n});\n\n\n//# sourceURL=webpack:///./node_modules/core-js/modules/es6.reflect.set-prototype-of.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/es6.reflect.set.js":
/*!*********************************************************!*\
  !*** ./node_modules/core-js/modules/es6.reflect.set.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// 26.1.13 Reflect.set(target, propertyKey, V [, receiver])\nvar dP = __webpack_require__(/*! ./_object-dp */ \"./node_modules/core-js/modules/_object-dp.js\");\nvar gOPD = __webpack_require__(/*! ./_object-gopd */ \"./node_modules/core-js/modules/_object-gopd.js\");\nvar getPrototypeOf = __webpack_require__(/*! ./_object-gpo */ \"./node_modules/core-js/modules/_object-gpo.js\");\nvar has = __webpack_require__(/*! ./_has */ \"./node_modules/core-js/modules/_has.js\");\nvar $export = __webpack_require__(/*! ./_export */ \"./node_modules/core-js/modules/_export.js\");\nvar createDesc = __webpack_require__(/*! ./_property-desc */ \"./node_modules/core-js/modules/_property-desc.js\");\nvar anObject = __webpack_require__(/*! ./_an-object */ \"./node_modules/core-js/modules/_an-object.js\");\nvar isObject = __webpack_require__(/*! ./_is-object */ \"./node_modules/core-js/modules/_is-object.js\");\n\nfunction set(target, propertyKey, V /* , receiver */) {\n  var receiver = arguments.length < 4 ? target : arguments[3];\n  var ownDesc = gOPD.f(anObject(target), propertyKey);\n  var existingDescriptor, proto;\n  if (!ownDesc) {\n    if (isObject(proto = getPrototypeOf(target))) {\n      return set(proto, propertyKey, V, receiver);\n    }\n    ownDesc = createDesc(0);\n  }\n  if (has(ownDesc, 'value')) {\n    if (ownDesc.writable === false || !isObject(receiver)) return false;\n    if (existingDescriptor = gOPD.f(receiver, propertyKey)) {\n      if (existingDescriptor.get || existingDescriptor.set || existingDescriptor.writable === false) return false;\n      existingDescriptor.value = V;\n      dP.f(receiver, propertyKey, existingDescriptor);\n    } else dP.f(receiver, propertyKey, createDesc(0, V));\n    return true;\n  }\n  return ownDesc.set === undefined ? false : (ownDesc.set.call(receiver, V), true);\n}\n\n$export($export.S, 'Reflect', { set: set });\n\n\n//# sourceURL=webpack:///./node_modules/core-js/modules/es6.reflect.set.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/es6.regexp.constructor.js":
/*!****************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.regexp.constructor.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var global = __webpack_require__(/*! ./_global */ \"./node_modules/core-js/modules/_global.js\");\nvar inheritIfRequired = __webpack_require__(/*! ./_inherit-if-required */ \"./node_modules/core-js/modules/_inherit-if-required.js\");\nvar dP = __webpack_require__(/*! ./_object-dp */ \"./node_modules/core-js/modules/_object-dp.js\").f;\nvar gOPN = __webpack_require__(/*! ./_object-gopn */ \"./node_modules/core-js/modules/_object-gopn.js\").f;\nvar isRegExp = __webpack_require__(/*! ./_is-regexp */ \"./node_modules/core-js/modules/_is-regexp.js\");\nvar $flags = __webpack_require__(/*! ./_flags */ \"./node_modules/core-js/modules/_flags.js\");\nvar $RegExp = global.RegExp;\nvar Base = $RegExp;\nvar proto = $RegExp.prototype;\nvar re1 = /a/g;\nvar re2 = /a/g;\n// \"new\" creates a new object, old webkit buggy here\nvar CORRECT_NEW = new $RegExp(re1) !== re1;\n\nif (__webpack_require__(/*! ./_descriptors */ \"./node_modules/core-js/modules/_descriptors.js\") && (!CORRECT_NEW || __webpack_require__(/*! ./_fails */ \"./node_modules/core-js/modules/_fails.js\")(function () {\n  re2[__webpack_require__(/*! ./_wks */ \"./node_modules/core-js/modules/_wks.js\")('match')] = false;\n  // RegExp constructor can alter flags and IsRegExp works correct with @@match\n  return $RegExp(re1) != re1 || $RegExp(re2) == re2 || $RegExp(re1, 'i') != '/a/i';\n}))) {\n  $RegExp = function RegExp(p, f) {\n    var tiRE = this instanceof $RegExp;\n    var piRE = isRegExp(p);\n    var fiU = f === undefined;\n    return !tiRE && piRE && p.constructor === $RegExp && fiU ? p\n      : inheritIfRequired(CORRECT_NEW\n        ? new Base(piRE && !fiU ? p.source : p, f)\n        : Base((piRE = p instanceof $RegExp) ? p.source : p, piRE && fiU ? $flags.call(p) : f)\n      , tiRE ? this : proto, $RegExp);\n  };\n  var proxy = function (key) {\n    key in $RegExp || dP($RegExp, key, {\n      configurable: true,\n      get: function () { return Base[key]; },\n      set: function (it) { Base[key] = it; }\n    });\n  };\n  for (var keys = gOPN(Base), i = 0; keys.length > i;) proxy(keys[i++]);\n  proto.constructor = $RegExp;\n  $RegExp.prototype = proto;\n  __webpack_require__(/*! ./_redefine */ \"./node_modules/core-js/modules/_redefine.js\")(global, 'RegExp', $RegExp);\n}\n\n__webpack_require__(/*! ./_set-species */ \"./node_modules/core-js/modules/_set-species.js\")('RegExp');\n\n\n//# sourceURL=webpack:///./node_modules/core-js/modules/es6.regexp.constructor.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/es6.regexp.exec.js":
/*!*********************************************************!*\
  !*** ./node_modules/core-js/modules/es6.regexp.exec.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar regexpExec = __webpack_require__(/*! ./_regexp-exec */ \"./node_modules/core-js/modules/_regexp-exec.js\");\n__webpack_require__(/*! ./_export */ \"./node_modules/core-js/modules/_export.js\")({\n  target: 'RegExp',\n  proto: true,\n  forced: regexpExec !== /./.exec\n}, {\n  exec: regexpExec\n});\n\n\n//# sourceURL=webpack:///./node_modules/core-js/modules/es6.regexp.exec.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/es6.regexp.flags.js":
/*!**********************************************************!*\
  !*** ./node_modules/core-js/modules/es6.regexp.flags.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// 21.2.5.3 get RegExp.prototype.flags()\nif (__webpack_require__(/*! ./_descriptors */ \"./node_modules/core-js/modules/_descriptors.js\") && /./g.flags != 'g') __webpack_require__(/*! ./_object-dp */ \"./node_modules/core-js/modules/_object-dp.js\").f(RegExp.prototype, 'flags', {\n  configurable: true,\n  get: __webpack_require__(/*! ./_flags */ \"./node_modules/core-js/modules/_flags.js\")\n});\n\n\n//# sourceURL=webpack:///./node_modules/core-js/modules/es6.regexp.flags.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/es6.regexp.match.js":
/*!**********************************************************!*\
  !*** ./node_modules/core-js/modules/es6.regexp.match.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar anObject = __webpack_require__(/*! ./_an-object */ \"./node_modules/core-js/modules/_an-object.js\");\nvar toLength = __webpack_require__(/*! ./_to-length */ \"./node_modules/core-js/modules/_to-length.js\");\nvar advanceStringIndex = __webpack_require__(/*! ./_advance-string-index */ \"./node_modules/core-js/modules/_advance-string-index.js\");\nvar regExpExec = __webpack_require__(/*! ./_regexp-exec-abstract */ \"./node_modules/core-js/modules/_regexp-exec-abstract.js\");\n\n// @@match logic\n__webpack_require__(/*! ./_fix-re-wks */ \"./node_modules/core-js/modules/_fix-re-wks.js\")('match', 1, function (defined, MATCH, $match, maybeCallNative) {\n  return [\n    // `String.prototype.match` method\n    // https://tc39.github.io/ecma262/#sec-string.prototype.match\n    function match(regexp) {\n      var O = defined(this);\n      var fn = regexp == undefined ? undefined : regexp[MATCH];\n      return fn !== undefined ? fn.call(regexp, O) : new RegExp(regexp)[MATCH](String(O));\n    },\n    // `RegExp.prototype[@@match]` method\n    // https://tc39.github.io/ecma262/#sec-regexp.prototype-@@match\n    function (regexp) {\n      var res = maybeCallNative($match, regexp, this);\n      if (res.done) return res.value;\n      var rx = anObject(regexp);\n      var S = String(this);\n      if (!rx.global) return regExpExec(rx, S);\n      var fullUnicode = rx.unicode;\n      rx.lastIndex = 0;\n      var A = [];\n      var n = 0;\n      var result;\n      while ((result = regExpExec(rx, S)) !== null) {\n        var matchStr = String(result[0]);\n        A[n] = matchStr;\n        if (matchStr === '') rx.lastIndex = advanceStringIndex(S, toLength(rx.lastIndex), fullUnicode);\n        n++;\n      }\n      return n === 0 ? null : A;\n    }\n  ];\n});\n\n\n//# sourceURL=webpack:///./node_modules/core-js/modules/es6.regexp.match.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/es6.regexp.replace.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.regexp.replace.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar anObject = __webpack_require__(/*! ./_an-object */ \"./node_modules/core-js/modules/_an-object.js\");\nvar toObject = __webpack_require__(/*! ./_to-object */ \"./node_modules/core-js/modules/_to-object.js\");\nvar toLength = __webpack_require__(/*! ./_to-length */ \"./node_modules/core-js/modules/_to-length.js\");\nvar toInteger = __webpack_require__(/*! ./_to-integer */ \"./node_modules/core-js/modules/_to-integer.js\");\nvar advanceStringIndex = __webpack_require__(/*! ./_advance-string-index */ \"./node_modules/core-js/modules/_advance-string-index.js\");\nvar regExpExec = __webpack_require__(/*! ./_regexp-exec-abstract */ \"./node_modules/core-js/modules/_regexp-exec-abstract.js\");\nvar max = Math.max;\nvar min = Math.min;\nvar floor = Math.floor;\nvar SUBSTITUTION_SYMBOLS = /\\$([$&`']|\\d\\d?|<[^>]*>)/g;\nvar SUBSTITUTION_SYMBOLS_NO_NAMED = /\\$([$&`']|\\d\\d?)/g;\n\nvar maybeToString = function (it) {\n  return it === undefined ? it : String(it);\n};\n\n// @@replace logic\n__webpack_require__(/*! ./_fix-re-wks */ \"./node_modules/core-js/modules/_fix-re-wks.js\")('replace', 2, function (defined, REPLACE, $replace, maybeCallNative) {\n  return [\n    // `String.prototype.replace` method\n    // https://tc39.github.io/ecma262/#sec-string.prototype.replace\n    function replace(searchValue, replaceValue) {\n      var O = defined(this);\n      var fn = searchValue == undefined ? undefined : searchValue[REPLACE];\n      return fn !== undefined\n        ? fn.call(searchValue, O, replaceValue)\n        : $replace.call(String(O), searchValue, replaceValue);\n    },\n    // `RegExp.prototype[@@replace]` method\n    // https://tc39.github.io/ecma262/#sec-regexp.prototype-@@replace\n    function (regexp, replaceValue) {\n      var res = maybeCallNative($replace, regexp, this, replaceValue);\n      if (res.done) return res.value;\n\n      var rx = anObject(regexp);\n      var S = String(this);\n      var functionalReplace = typeof replaceValue === 'function';\n      if (!functionalReplace) replaceValue = String(replaceValue);\n      var global = rx.global;\n      if (global) {\n        var fullUnicode = rx.unicode;\n        rx.lastIndex = 0;\n      }\n      var results = [];\n      while (true) {\n        var result = regExpExec(rx, S);\n        if (result === null) break;\n        results.push(result);\n        if (!global) break;\n        var matchStr = String(result[0]);\n        if (matchStr === '') rx.lastIndex = advanceStringIndex(S, toLength(rx.lastIndex), fullUnicode);\n      }\n      var accumulatedResult = '';\n      var nextSourcePosition = 0;\n      for (var i = 0; i < results.length; i++) {\n        result = results[i];\n        var matched = String(result[0]);\n        var position = max(min(toInteger(result.index), S.length), 0);\n        var captures = [];\n        // NOTE: This is equivalent to\n        //   captures = result.slice(1).map(maybeToString)\n        // but for some reason `nativeSlice.call(result, 1, result.length)` (called in\n        // the slice polyfill when slicing native arrays) \"doesn't work\" in safari 9 and\n        // causes a crash (https://pastebin.com/N21QzeQA) when trying to debug it.\n        for (var j = 1; j < result.length; j++) captures.push(maybeToString(result[j]));\n        var namedCaptures = result.groups;\n        if (functionalReplace) {\n          var replacerArgs = [matched].concat(captures, position, S);\n          if (namedCaptures !== undefined) replacerArgs.push(namedCaptures);\n          var replacement = String(replaceValue.apply(undefined, replacerArgs));\n        } else {\n          replacement = getSubstitution(matched, S, position, captures, namedCaptures, replaceValue);\n        }\n        if (position >= nextSourcePosition) {\n          accumulatedResult += S.slice(nextSourcePosition, position) + replacement;\n          nextSourcePosition = position + matched.length;\n        }\n      }\n      return accumulatedResult + S.slice(nextSourcePosition);\n    }\n  ];\n\n    // https://tc39.github.io/ecma262/#sec-getsubstitution\n  function getSubstitution(matched, str, position, captures, namedCaptures, replacement) {\n    var tailPos = position + matched.length;\n    var m = captures.length;\n    var symbols = SUBSTITUTION_SYMBOLS_NO_NAMED;\n    if (namedCaptures !== undefined) {\n      namedCaptures = toObject(namedCaptures);\n      symbols = SUBSTITUTION_SYMBOLS;\n    }\n    return $replace.call(replacement, symbols, function (match, ch) {\n      var capture;\n      switch (ch.charAt(0)) {\n        case '$': return '$';\n        case '&': return matched;\n        case '`': return str.slice(0, position);\n        case \"'\": return str.slice(tailPos);\n        case '<':\n          capture = namedCaptures[ch.slice(1, -1)];\n          break;\n        default: // \\d\\d?\n          var n = +ch;\n          if (n === 0) return match;\n          if (n > m) {\n            var f = floor(n / 10);\n            if (f === 0) return match;\n            if (f <= m) return captures[f - 1] === undefined ? ch.charAt(1) : captures[f - 1] + ch.charAt(1);\n            return match;\n          }\n          capture = captures[n - 1];\n      }\n      return capture === undefined ? '' : capture;\n    });\n  }\n});\n\n\n//# sourceURL=webpack:///./node_modules/core-js/modules/es6.regexp.replace.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/es6.regexp.search.js":
/*!***********************************************************!*\
  !*** ./node_modules/core-js/modules/es6.regexp.search.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar anObject = __webpack_require__(/*! ./_an-object */ \"./node_modules/core-js/modules/_an-object.js\");\nvar sameValue = __webpack_require__(/*! ./_same-value */ \"./node_modules/core-js/modules/_same-value.js\");\nvar regExpExec = __webpack_require__(/*! ./_regexp-exec-abstract */ \"./node_modules/core-js/modules/_regexp-exec-abstract.js\");\n\n// @@search logic\n__webpack_require__(/*! ./_fix-re-wks */ \"./node_modules/core-js/modules/_fix-re-wks.js\")('search', 1, function (defined, SEARCH, $search, maybeCallNative) {\n  return [\n    // `String.prototype.search` method\n    // https://tc39.github.io/ecma262/#sec-string.prototype.search\n    function search(regexp) {\n      var O = defined(this);\n      var fn = regexp == undefined ? undefined : regexp[SEARCH];\n      return fn !== undefined ? fn.call(regexp, O) : new RegExp(regexp)[SEARCH](String(O));\n    },\n    // `RegExp.prototype[@@search]` method\n    // https://tc39.github.io/ecma262/#sec-regexp.prototype-@@search\n    function (regexp) {\n      var res = maybeCallNative($search, regexp, this);\n      if (res.done) return res.value;\n      var rx = anObject(regexp);\n      var S = String(this);\n      var previousLastIndex = rx.lastIndex;\n      if (!sameValue(previousLastIndex, 0)) rx.lastIndex = 0;\n      var result = regExpExec(rx, S);\n      if (!sameValue(rx.lastIndex, previousLastIndex)) rx.lastIndex = previousLastIndex;\n      return result === null ? -1 : result.index;\n    }\n  ];\n});\n\n\n//# sourceURL=webpack:///./node_modules/core-js/modules/es6.regexp.search.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/es6.regexp.split.js":
/*!**********************************************************!*\
  !*** ./node_modules/core-js/modules/es6.regexp.split.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar isRegExp = __webpack_require__(/*! ./_is-regexp */ \"./node_modules/core-js/modules/_is-regexp.js\");\nvar anObject = __webpack_require__(/*! ./_an-object */ \"./node_modules/core-js/modules/_an-object.js\");\nvar speciesConstructor = __webpack_require__(/*! ./_species-constructor */ \"./node_modules/core-js/modules/_species-constructor.js\");\nvar advanceStringIndex = __webpack_require__(/*! ./_advance-string-index */ \"./node_modules/core-js/modules/_advance-string-index.js\");\nvar toLength = __webpack_require__(/*! ./_to-length */ \"./node_modules/core-js/modules/_to-length.js\");\nvar callRegExpExec = __webpack_require__(/*! ./_regexp-exec-abstract */ \"./node_modules/core-js/modules/_regexp-exec-abstract.js\");\nvar regexpExec = __webpack_require__(/*! ./_regexp-exec */ \"./node_modules/core-js/modules/_regexp-exec.js\");\nvar fails = __webpack_require__(/*! ./_fails */ \"./node_modules/core-js/modules/_fails.js\");\nvar $min = Math.min;\nvar $push = [].push;\nvar $SPLIT = 'split';\nvar LENGTH = 'length';\nvar LAST_INDEX = 'lastIndex';\nvar MAX_UINT32 = 0xffffffff;\n\n// babel-minify transpiles RegExp('x', 'y') -> /x/y and it causes SyntaxError\nvar SUPPORTS_Y = !fails(function () { RegExp(MAX_UINT32, 'y'); });\n\n// @@split logic\n__webpack_require__(/*! ./_fix-re-wks */ \"./node_modules/core-js/modules/_fix-re-wks.js\")('split', 2, function (defined, SPLIT, $split, maybeCallNative) {\n  var internalSplit;\n  if (\n    'abbc'[$SPLIT](/(b)*/)[1] == 'c' ||\n    'test'[$SPLIT](/(?:)/, -1)[LENGTH] != 4 ||\n    'ab'[$SPLIT](/(?:ab)*/)[LENGTH] != 2 ||\n    '.'[$SPLIT](/(.?)(.?)/)[LENGTH] != 4 ||\n    '.'[$SPLIT](/()()/)[LENGTH] > 1 ||\n    ''[$SPLIT](/.?/)[LENGTH]\n  ) {\n    // based on es5-shim implementation, need to rework it\n    internalSplit = function (separator, limit) {\n      var string = String(this);\n      if (separator === undefined && limit === 0) return [];\n      // If `separator` is not a regex, use native split\n      if (!isRegExp(separator)) return $split.call(string, separator, limit);\n      var output = [];\n      var flags = (separator.ignoreCase ? 'i' : '') +\n                  (separator.multiline ? 'm' : '') +\n                  (separator.unicode ? 'u' : '') +\n                  (separator.sticky ? 'y' : '');\n      var lastLastIndex = 0;\n      var splitLimit = limit === undefined ? MAX_UINT32 : limit >>> 0;\n      // Make `global` and avoid `lastIndex` issues by working with a copy\n      var separatorCopy = new RegExp(separator.source, flags + 'g');\n      var match, lastIndex, lastLength;\n      while (match = regexpExec.call(separatorCopy, string)) {\n        lastIndex = separatorCopy[LAST_INDEX];\n        if (lastIndex > lastLastIndex) {\n          output.push(string.slice(lastLastIndex, match.index));\n          if (match[LENGTH] > 1 && match.index < string[LENGTH]) $push.apply(output, match.slice(1));\n          lastLength = match[0][LENGTH];\n          lastLastIndex = lastIndex;\n          if (output[LENGTH] >= splitLimit) break;\n        }\n        if (separatorCopy[LAST_INDEX] === match.index) separatorCopy[LAST_INDEX]++; // Avoid an infinite loop\n      }\n      if (lastLastIndex === string[LENGTH]) {\n        if (lastLength || !separatorCopy.test('')) output.push('');\n      } else output.push(string.slice(lastLastIndex));\n      return output[LENGTH] > splitLimit ? output.slice(0, splitLimit) : output;\n    };\n  // Chakra, V8\n  } else if ('0'[$SPLIT](undefined, 0)[LENGTH]) {\n    internalSplit = function (separator, limit) {\n      return separator === undefined && limit === 0 ? [] : $split.call(this, separator, limit);\n    };\n  } else {\n    internalSplit = $split;\n  }\n\n  return [\n    // `String.prototype.split` method\n    // https://tc39.github.io/ecma262/#sec-string.prototype.split\n    function split(separator, limit) {\n      var O = defined(this);\n      var splitter = separator == undefined ? undefined : separator[SPLIT];\n      return splitter !== undefined\n        ? splitter.call(separator, O, limit)\n        : internalSplit.call(String(O), separator, limit);\n    },\n    // `RegExp.prototype[@@split]` method\n    // https://tc39.github.io/ecma262/#sec-regexp.prototype-@@split\n    //\n    // NOTE: This cannot be properly polyfilled in engines that don't support\n    // the 'y' flag.\n    function (regexp, limit) {\n      var res = maybeCallNative(internalSplit, regexp, this, limit, internalSplit !== $split);\n      if (res.done) return res.value;\n\n      var rx = anObject(regexp);\n      var S = String(this);\n      var C = speciesConstructor(rx, RegExp);\n\n      var unicodeMatching = rx.unicode;\n      var flags = (rx.ignoreCase ? 'i' : '') +\n                  (rx.multiline ? 'm' : '') +\n                  (rx.unicode ? 'u' : '') +\n                  (SUPPORTS_Y ? 'y' : 'g');\n\n      // ^(? + rx + ) is needed, in combination with some S slicing, to\n      // simulate the 'y' flag.\n      var splitter = new C(SUPPORTS_Y ? rx : '^(?:' + rx.source + ')', flags);\n      var lim = limit === undefined ? MAX_UINT32 : limit >>> 0;\n      if (lim === 0) return [];\n      if (S.length === 0) return callRegExpExec(splitter, S) === null ? [S] : [];\n      var p = 0;\n      var q = 0;\n      var A = [];\n      while (q < S.length) {\n        splitter.lastIndex = SUPPORTS_Y ? q : 0;\n        var z = callRegExpExec(splitter, SUPPORTS_Y ? S : S.slice(q));\n        var e;\n        if (\n          z === null ||\n          (e = $min(toLength(splitter.lastIndex + (SUPPORTS_Y ? 0 : q)), S.length)) === p\n        ) {\n          q = advanceStringIndex(S, q, unicodeMatching);\n        } else {\n          A.push(S.slice(p, q));\n          if (A.length === lim) return A;\n          for (var i = 1; i <= z.length - 1; i++) {\n            A.push(z[i]);\n            if (A.length === lim) return A;\n          }\n          q = p = e;\n        }\n      }\n      A.push(S.slice(p));\n      return A;\n    }\n  ];\n});\n\n\n//# sourceURL=webpack:///./node_modules/core-js/modules/es6.regexp.split.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/es6.regexp.to-string.js":
/*!**************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.regexp.to-string.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n__webpack_require__(/*! ./es6.regexp.flags */ \"./node_modules/core-js/modules/es6.regexp.flags.js\");\nvar anObject = __webpack_require__(/*! ./_an-object */ \"./node_modules/core-js/modules/_an-object.js\");\nvar $flags = __webpack_require__(/*! ./_flags */ \"./node_modules/core-js/modules/_flags.js\");\nvar DESCRIPTORS = __webpack_require__(/*! ./_descriptors */ \"./node_modules/core-js/modules/_descriptors.js\");\nvar TO_STRING = 'toString';\nvar $toString = /./[TO_STRING];\n\nvar define = function (fn) {\n  __webpack_require__(/*! ./_redefine */ \"./node_modules/core-js/modules/_redefine.js\")(RegExp.prototype, TO_STRING, fn, true);\n};\n\n// 21.2.5.14 RegExp.prototype.toString()\nif (__webpack_require__(/*! ./_fails */ \"./node_modules/core-js/modules/_fails.js\")(function () { return $toString.call({ source: 'a', flags: 'b' }) != '/a/b'; })) {\n  define(function toString() {\n    var R = anObject(this);\n    return '/'.concat(R.source, '/',\n      'flags' in R ? R.flags : !DESCRIPTORS && R instanceof RegExp ? $flags.call(R) : undefined);\n  });\n// FF44- RegExp#toString has a wrong name\n} else if ($toString.name != TO_STRING) {\n  define(function toString() {\n    return $toString.call(this);\n  });\n}\n\n\n//# sourceURL=webpack:///./node_modules/core-js/modules/es6.regexp.to-string.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/es6.set.js":
/*!*************************************************!*\
  !*** ./node_modules/core-js/modules/es6.set.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar strong = __webpack_require__(/*! ./_collection-strong */ \"./node_modules/core-js/modules/_collection-strong.js\");\nvar validate = __webpack_require__(/*! ./_validate-collection */ \"./node_modules/core-js/modules/_validate-collection.js\");\nvar SET = 'Set';\n\n// 23.2 Set Objects\nmodule.exports = __webpack_require__(/*! ./_collection */ \"./node_modules/core-js/modules/_collection.js\")(SET, function (get) {\n  return function Set() { return get(this, arguments.length > 0 ? arguments[0] : undefined); };\n}, {\n  // 23.2.3.1 Set.prototype.add(value)\n  add: function add(value) {\n    return strong.def(validate(this, SET), value = value === 0 ? 0 : value, value);\n  }\n}, strong);\n\n\n//# sourceURL=webpack:///./node_modules/core-js/modules/es6.set.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/es6.string.anchor.js":
/*!***********************************************************!*\
  !*** ./node_modules/core-js/modules/es6.string.anchor.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n// B.2.3.2 String.prototype.anchor(name)\n__webpack_require__(/*! ./_string-html */ \"./node_modules/core-js/modules/_string-html.js\")('anchor', function (createHTML) {\n  return function anchor(name) {\n    return createHTML(this, 'a', 'name', name);\n  };\n});\n\n\n//# sourceURL=webpack:///./node_modules/core-js/modules/es6.string.anchor.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/es6.string.big.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js/modules/es6.string.big.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n// B.2.3.3 String.prototype.big()\n__webpack_require__(/*! ./_string-html */ \"./node_modules/core-js/modules/_string-html.js\")('big', function (createHTML) {\n  return function big() {\n    return createHTML(this, 'big', '', '');\n  };\n});\n\n\n//# sourceURL=webpack:///./node_modules/core-js/modules/es6.string.big.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/es6.string.blink.js":
/*!**********************************************************!*\
  !*** ./node_modules/core-js/modules/es6.string.blink.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n// B.2.3.4 String.prototype.blink()\n__webpack_require__(/*! ./_string-html */ \"./node_modules/core-js/modules/_string-html.js\")('blink', function (createHTML) {\n  return function blink() {\n    return createHTML(this, 'blink', '', '');\n  };\n});\n\n\n//# sourceURL=webpack:///./node_modules/core-js/modules/es6.string.blink.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/es6.string.bold.js":
/*!*********************************************************!*\
  !*** ./node_modules/core-js/modules/es6.string.bold.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n// B.2.3.5 String.prototype.bold()\n__webpack_require__(/*! ./_string-html */ \"./node_modules/core-js/modules/_string-html.js\")('bold', function (createHTML) {\n  return function bold() {\n    return createHTML(this, 'b', '', '');\n  };\n});\n\n\n//# sourceURL=webpack:///./node_modules/core-js/modules/es6.string.bold.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/es6.string.code-point-at.js":
/*!******************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.string.code-point-at.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar $export = __webpack_require__(/*! ./_export */ \"./node_modules/core-js/modules/_export.js\");\nvar $at = __webpack_require__(/*! ./_string-at */ \"./node_modules/core-js/modules/_string-at.js\")(false);\n$export($export.P, 'String', {\n  // 21.1.3.3 String.prototype.codePointAt(pos)\n  codePointAt: function codePointAt(pos) {\n    return $at(this, pos);\n  }\n});\n\n\n//# sourceURL=webpack:///./node_modules/core-js/modules/es6.string.code-point-at.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/es6.string.ends-with.js":
/*!**************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.string.ends-with.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("// 21.1.3.6 String.prototype.endsWith(searchString [, endPosition])\n\nvar $export = __webpack_require__(/*! ./_export */ \"./node_modules/core-js/modules/_export.js\");\nvar toLength = __webpack_require__(/*! ./_to-length */ \"./node_modules/core-js/modules/_to-length.js\");\nvar context = __webpack_require__(/*! ./_string-context */ \"./node_modules/core-js/modules/_string-context.js\");\nvar ENDS_WITH = 'endsWith';\nvar $endsWith = ''[ENDS_WITH];\n\n$export($export.P + $export.F * __webpack_require__(/*! ./_fails-is-regexp */ \"./node_modules/core-js/modules/_fails-is-regexp.js\")(ENDS_WITH), 'String', {\n  endsWith: function endsWith(searchString /* , endPosition = @length */) {\n    var that = context(this, searchString, ENDS_WITH);\n    var endPosition = arguments.length > 1 ? arguments[1] : undefined;\n    var len = toLength(that.length);\n    var end = endPosition === undefined ? len : Math.min(toLength(endPosition), len);\n    var search = String(searchString);\n    return $endsWith\n      ? $endsWith.call(that, search, end)\n      : that.slice(end - search.length, end) === search;\n  }\n});\n\n\n//# sourceURL=webpack:///./node_modules/core-js/modules/es6.string.ends-with.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/es6.string.fixed.js":
/*!**********************************************************!*\
  !*** ./node_modules/core-js/modules/es6.string.fixed.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n// B.2.3.6 String.prototype.fixed()\n__webpack_require__(/*! ./_string-html */ \"./node_modules/core-js/modules/_string-html.js\")('fixed', function (createHTML) {\n  return function fixed() {\n    return createHTML(this, 'tt', '', '');\n  };\n});\n\n\n//# sourceURL=webpack:///./node_modules/core-js/modules/es6.string.fixed.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/es6.string.fontcolor.js":
/*!**************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.string.fontcolor.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n// B.2.3.7 String.prototype.fontcolor(color)\n__webpack_require__(/*! ./_string-html */ \"./node_modules/core-js/modules/_string-html.js\")('fontcolor', function (createHTML) {\n  return function fontcolor(color) {\n    return createHTML(this, 'font', 'color', color);\n  };\n});\n\n\n//# sourceURL=webpack:///./node_modules/core-js/modules/es6.string.fontcolor.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/es6.string.fontsize.js":
/*!*************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.string.fontsize.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n// B.2.3.8 String.prototype.fontsize(size)\n__webpack_require__(/*! ./_string-html */ \"./node_modules/core-js/modules/_string-html.js\")('fontsize', function (createHTML) {\n  return function fontsize(size) {\n    return createHTML(this, 'font', 'size', size);\n  };\n});\n\n\n//# sourceURL=webpack:///./node_modules/core-js/modules/es6.string.fontsize.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/es6.string.from-code-point.js":
/*!********************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.string.from-code-point.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var $export = __webpack_require__(/*! ./_export */ \"./node_modules/core-js/modules/_export.js\");\nvar toAbsoluteIndex = __webpack_require__(/*! ./_to-absolute-index */ \"./node_modules/core-js/modules/_to-absolute-index.js\");\nvar fromCharCode = String.fromCharCode;\nvar $fromCodePoint = String.fromCodePoint;\n\n// length should be 1, old FF problem\n$export($export.S + $export.F * (!!$fromCodePoint && $fromCodePoint.length != 1), 'String', {\n  // 21.1.2.2 String.fromCodePoint(...codePoints)\n  fromCodePoint: function fromCodePoint(x) { // eslint-disable-line no-unused-vars\n    var res = [];\n    var aLen = arguments.length;\n    var i = 0;\n    var code;\n    while (aLen > i) {\n      code = +arguments[i++];\n      if (toAbsoluteIndex(code, 0x10ffff) !== code) throw RangeError(code + ' is not a valid code point');\n      res.push(code < 0x10000\n        ? fromCharCode(code)\n        : fromCharCode(((code -= 0x10000) >> 10) + 0xd800, code % 0x400 + 0xdc00)\n      );\n    } return res.join('');\n  }\n});\n\n\n//# sourceURL=webpack:///./node_modules/core-js/modules/es6.string.from-code-point.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/es6.string.includes.js":
/*!*************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.string.includes.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("// 21.1.3.7 String.prototype.includes(searchString, position = 0)\n\nvar $export = __webpack_require__(/*! ./_export */ \"./node_modules/core-js/modules/_export.js\");\nvar context = __webpack_require__(/*! ./_string-context */ \"./node_modules/core-js/modules/_string-context.js\");\nvar INCLUDES = 'includes';\n\n$export($export.P + $export.F * __webpack_require__(/*! ./_fails-is-regexp */ \"./node_modules/core-js/modules/_fails-is-regexp.js\")(INCLUDES), 'String', {\n  includes: function includes(searchString /* , position = 0 */) {\n    return !!~context(this, searchString, INCLUDES)\n      .indexOf(searchString, arguments.length > 1 ? arguments[1] : undefined);\n  }\n});\n\n\n//# sourceURL=webpack:///./node_modules/core-js/modules/es6.string.includes.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/es6.string.italics.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.string.italics.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n// B.2.3.9 String.prototype.italics()\n__webpack_require__(/*! ./_string-html */ \"./node_modules/core-js/modules/_string-html.js\")('italics', function (createHTML) {\n  return function italics() {\n    return createHTML(this, 'i', '', '');\n  };\n});\n\n\n//# sourceURL=webpack:///./node_modules/core-js/modules/es6.string.italics.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/es6.string.iterator.js":
/*!*************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.string.iterator.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar $at = __webpack_require__(/*! ./_string-at */ \"./node_modules/core-js/modules/_string-at.js\")(true);\n\n// 21.1.3.27 String.prototype[@@iterator]()\n__webpack_require__(/*! ./_iter-define */ \"./node_modules/core-js/modules/_iter-define.js\")(String, 'String', function (iterated) {\n  this._t = String(iterated); // target\n  this._i = 0;                // next index\n// 21.1.5.2.1 %StringIteratorPrototype%.next()\n}, function () {\n  var O = this._t;\n  var index = this._i;\n  var point;\n  if (index >= O.length) return { value: undefined, done: true };\n  point = $at(O, index);\n  this._i += point.length;\n  return { value: point, done: false };\n});\n\n\n//# sourceURL=webpack:///./node_modules/core-js/modules/es6.string.iterator.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/es6.string.link.js":
/*!*********************************************************!*\
  !*** ./node_modules/core-js/modules/es6.string.link.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n// B.2.3.10 String.prototype.link(url)\n__webpack_require__(/*! ./_string-html */ \"./node_modules/core-js/modules/_string-html.js\")('link', function (createHTML) {\n  return function link(url) {\n    return createHTML(this, 'a', 'href', url);\n  };\n});\n\n\n//# sourceURL=webpack:///./node_modules/core-js/modules/es6.string.link.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/es6.string.raw.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js/modules/es6.string.raw.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var $export = __webpack_require__(/*! ./_export */ \"./node_modules/core-js/modules/_export.js\");\nvar toIObject = __webpack_require__(/*! ./_to-iobject */ \"./node_modules/core-js/modules/_to-iobject.js\");\nvar toLength = __webpack_require__(/*! ./_to-length */ \"./node_modules/core-js/modules/_to-length.js\");\n\n$export($export.S, 'String', {\n  // 21.1.2.4 String.raw(callSite, ...substitutions)\n  raw: function raw(callSite) {\n    var tpl = toIObject(callSite.raw);\n    var len = toLength(tpl.length);\n    var aLen = arguments.length;\n    var res = [];\n    var i = 0;\n    while (len > i) {\n      res.push(String(tpl[i++]));\n      if (i < aLen) res.push(String(arguments[i]));\n    } return res.join('');\n  }\n});\n\n\n//# sourceURL=webpack:///./node_modules/core-js/modules/es6.string.raw.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/es6.string.repeat.js":
/*!***********************************************************!*\
  !*** ./node_modules/core-js/modules/es6.string.repeat.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var $export = __webpack_require__(/*! ./_export */ \"./node_modules/core-js/modules/_export.js\");\n\n$export($export.P, 'String', {\n  // 21.1.3.13 String.prototype.repeat(count)\n  repeat: __webpack_require__(/*! ./_string-repeat */ \"./node_modules/core-js/modules/_string-repeat.js\")\n});\n\n\n//# sourceURL=webpack:///./node_modules/core-js/modules/es6.string.repeat.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/es6.string.small.js":
/*!**********************************************************!*\
  !*** ./node_modules/core-js/modules/es6.string.small.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n// B.2.3.11 String.prototype.small()\n__webpack_require__(/*! ./_string-html */ \"./node_modules/core-js/modules/_string-html.js\")('small', function (createHTML) {\n  return function small() {\n    return createHTML(this, 'small', '', '');\n  };\n});\n\n\n//# sourceURL=webpack:///./node_modules/core-js/modules/es6.string.small.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/es6.string.starts-with.js":
/*!****************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.string.starts-with.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("// 21.1.3.18 String.prototype.startsWith(searchString [, position ])\n\nvar $export = __webpack_require__(/*! ./_export */ \"./node_modules/core-js/modules/_export.js\");\nvar toLength = __webpack_require__(/*! ./_to-length */ \"./node_modules/core-js/modules/_to-length.js\");\nvar context = __webpack_require__(/*! ./_string-context */ \"./node_modules/core-js/modules/_string-context.js\");\nvar STARTS_WITH = 'startsWith';\nvar $startsWith = ''[STARTS_WITH];\n\n$export($export.P + $export.F * __webpack_require__(/*! ./_fails-is-regexp */ \"./node_modules/core-js/modules/_fails-is-regexp.js\")(STARTS_WITH), 'String', {\n  startsWith: function startsWith(searchString /* , position = 0 */) {\n    var that = context(this, searchString, STARTS_WITH);\n    var index = toLength(Math.min(arguments.length > 1 ? arguments[1] : undefined, that.length));\n    var search = String(searchString);\n    return $startsWith\n      ? $startsWith.call(that, search, index)\n      : that.slice(index, index + search.length) === search;\n  }\n});\n\n\n//# sourceURL=webpack:///./node_modules/core-js/modules/es6.string.starts-with.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/es6.string.strike.js":
/*!***********************************************************!*\
  !*** ./node_modules/core-js/modules/es6.string.strike.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n// B.2.3.12 String.prototype.strike()\n__webpack_require__(/*! ./_string-html */ \"./node_modules/core-js/modules/_string-html.js\")('strike', function (createHTML) {\n  return function strike() {\n    return createHTML(this, 'strike', '', '');\n  };\n});\n\n\n//# sourceURL=webpack:///./node_modules/core-js/modules/es6.string.strike.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/es6.string.sub.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js/modules/es6.string.sub.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n// B.2.3.13 String.prototype.sub()\n__webpack_require__(/*! ./_string-html */ \"./node_modules/core-js/modules/_string-html.js\")('sub', function (createHTML) {\n  return function sub() {\n    return createHTML(this, 'sub', '', '');\n  };\n});\n\n\n//# sourceURL=webpack:///./node_modules/core-js/modules/es6.string.sub.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/es6.string.sup.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js/modules/es6.string.sup.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n// B.2.3.14 String.prototype.sup()\n__webpack_require__(/*! ./_string-html */ \"./node_modules/core-js/modules/_string-html.js\")('sup', function (createHTML) {\n  return function sup() {\n    return createHTML(this, 'sup', '', '');\n  };\n});\n\n\n//# sourceURL=webpack:///./node_modules/core-js/modules/es6.string.sup.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/es6.string.trim.js":
/*!*********************************************************!*\
  !*** ./node_modules/core-js/modules/es6.string.trim.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n// 21.1.3.25 String.prototype.trim()\n__webpack_require__(/*! ./_string-trim */ \"./node_modules/core-js/modules/_string-trim.js\")('trim', function ($trim) {\n  return function trim() {\n    return $trim(this, 3);\n  };\n});\n\n\n//# sourceURL=webpack:///./node_modules/core-js/modules/es6.string.trim.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/es6.symbol.js":
/*!****************************************************!*\
  !*** ./node_modules/core-js/modules/es6.symbol.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n// ECMAScript 6 symbols shim\nvar global = __webpack_require__(/*! ./_global */ \"./node_modules/core-js/modules/_global.js\");\nvar has = __webpack_require__(/*! ./_has */ \"./node_modules/core-js/modules/_has.js\");\nvar DESCRIPTORS = __webpack_require__(/*! ./_descriptors */ \"./node_modules/core-js/modules/_descriptors.js\");\nvar $export = __webpack_require__(/*! ./_export */ \"./node_modules/core-js/modules/_export.js\");\nvar redefine = __webpack_require__(/*! ./_redefine */ \"./node_modules/core-js/modules/_redefine.js\");\nvar META = __webpack_require__(/*! ./_meta */ \"./node_modules/core-js/modules/_meta.js\").KEY;\nvar $fails = __webpack_require__(/*! ./_fails */ \"./node_modules/core-js/modules/_fails.js\");\nvar shared = __webpack_require__(/*! ./_shared */ \"./node_modules/core-js/modules/_shared.js\");\nvar setToStringTag = __webpack_require__(/*! ./_set-to-string-tag */ \"./node_modules/core-js/modules/_set-to-string-tag.js\");\nvar uid = __webpack_require__(/*! ./_uid */ \"./node_modules/core-js/modules/_uid.js\");\nvar wks = __webpack_require__(/*! ./_wks */ \"./node_modules/core-js/modules/_wks.js\");\nvar wksExt = __webpack_require__(/*! ./_wks-ext */ \"./node_modules/core-js/modules/_wks-ext.js\");\nvar wksDefine = __webpack_require__(/*! ./_wks-define */ \"./node_modules/core-js/modules/_wks-define.js\");\nvar enumKeys = __webpack_require__(/*! ./_enum-keys */ \"./node_modules/core-js/modules/_enum-keys.js\");\nvar isArray = __webpack_require__(/*! ./_is-array */ \"./node_modules/core-js/modules/_is-array.js\");\nvar anObject = __webpack_require__(/*! ./_an-object */ \"./node_modules/core-js/modules/_an-object.js\");\nvar isObject = __webpack_require__(/*! ./_is-object */ \"./node_modules/core-js/modules/_is-object.js\");\nvar toObject = __webpack_require__(/*! ./_to-object */ \"./node_modules/core-js/modules/_to-object.js\");\nvar toIObject = __webpack_require__(/*! ./_to-iobject */ \"./node_modules/core-js/modules/_to-iobject.js\");\nvar toPrimitive = __webpack_require__(/*! ./_to-primitive */ \"./node_modules/core-js/modules/_to-primitive.js\");\nvar createDesc = __webpack_require__(/*! ./_property-desc */ \"./node_modules/core-js/modules/_property-desc.js\");\nvar _create = __webpack_require__(/*! ./_object-create */ \"./node_modules/core-js/modules/_object-create.js\");\nvar gOPNExt = __webpack_require__(/*! ./_object-gopn-ext */ \"./node_modules/core-js/modules/_object-gopn-ext.js\");\nvar $GOPD = __webpack_require__(/*! ./_object-gopd */ \"./node_modules/core-js/modules/_object-gopd.js\");\nvar $GOPS = __webpack_require__(/*! ./_object-gops */ \"./node_modules/core-js/modules/_object-gops.js\");\nvar $DP = __webpack_require__(/*! ./_object-dp */ \"./node_modules/core-js/modules/_object-dp.js\");\nvar $keys = __webpack_require__(/*! ./_object-keys */ \"./node_modules/core-js/modules/_object-keys.js\");\nvar gOPD = $GOPD.f;\nvar dP = $DP.f;\nvar gOPN = gOPNExt.f;\nvar $Symbol = global.Symbol;\nvar $JSON = global.JSON;\nvar _stringify = $JSON && $JSON.stringify;\nvar PROTOTYPE = 'prototype';\nvar HIDDEN = wks('_hidden');\nvar TO_PRIMITIVE = wks('toPrimitive');\nvar isEnum = {}.propertyIsEnumerable;\nvar SymbolRegistry = shared('symbol-registry');\nvar AllSymbols = shared('symbols');\nvar OPSymbols = shared('op-symbols');\nvar ObjectProto = Object[PROTOTYPE];\nvar USE_NATIVE = typeof $Symbol == 'function' && !!$GOPS.f;\nvar QObject = global.QObject;\n// Don't use setters in Qt Script, https://github.com/zloirock/core-js/issues/173\nvar setter = !QObject || !QObject[PROTOTYPE] || !QObject[PROTOTYPE].findChild;\n\n// fallback for old Android, https://code.google.com/p/v8/issues/detail?id=687\nvar setSymbolDesc = DESCRIPTORS && $fails(function () {\n  return _create(dP({}, 'a', {\n    get: function () { return dP(this, 'a', { value: 7 }).a; }\n  })).a != 7;\n}) ? function (it, key, D) {\n  var protoDesc = gOPD(ObjectProto, key);\n  if (protoDesc) delete ObjectProto[key];\n  dP(it, key, D);\n  if (protoDesc && it !== ObjectProto) dP(ObjectProto, key, protoDesc);\n} : dP;\n\nvar wrap = function (tag) {\n  var sym = AllSymbols[tag] = _create($Symbol[PROTOTYPE]);\n  sym._k = tag;\n  return sym;\n};\n\nvar isSymbol = USE_NATIVE && typeof $Symbol.iterator == 'symbol' ? function (it) {\n  return typeof it == 'symbol';\n} : function (it) {\n  return it instanceof $Symbol;\n};\n\nvar $defineProperty = function defineProperty(it, key, D) {\n  if (it === ObjectProto) $defineProperty(OPSymbols, key, D);\n  anObject(it);\n  key = toPrimitive(key, true);\n  anObject(D);\n  if (has(AllSymbols, key)) {\n    if (!D.enumerable) {\n      if (!has(it, HIDDEN)) dP(it, HIDDEN, createDesc(1, {}));\n      it[HIDDEN][key] = true;\n    } else {\n      if (has(it, HIDDEN) && it[HIDDEN][key]) it[HIDDEN][key] = false;\n      D = _create(D, { enumerable: createDesc(0, false) });\n    } return setSymbolDesc(it, key, D);\n  } return dP(it, key, D);\n};\nvar $defineProperties = function defineProperties(it, P) {\n  anObject(it);\n  var keys = enumKeys(P = toIObject(P));\n  var i = 0;\n  var l = keys.length;\n  var key;\n  while (l > i) $defineProperty(it, key = keys[i++], P[key]);\n  return it;\n};\nvar $create = function create(it, P) {\n  return P === undefined ? _create(it) : $defineProperties(_create(it), P);\n};\nvar $propertyIsEnumerable = function propertyIsEnumerable(key) {\n  var E = isEnum.call(this, key = toPrimitive(key, true));\n  if (this === ObjectProto && has(AllSymbols, key) && !has(OPSymbols, key)) return false;\n  return E || !has(this, key) || !has(AllSymbols, key) || has(this, HIDDEN) && this[HIDDEN][key] ? E : true;\n};\nvar $getOwnPropertyDescriptor = function getOwnPropertyDescriptor(it, key) {\n  it = toIObject(it);\n  key = toPrimitive(key, true);\n  if (it === ObjectProto && has(AllSymbols, key) && !has(OPSymbols, key)) return;\n  var D = gOPD(it, key);\n  if (D && has(AllSymbols, key) && !(has(it, HIDDEN) && it[HIDDEN][key])) D.enumerable = true;\n  return D;\n};\nvar $getOwnPropertyNames = function getOwnPropertyNames(it) {\n  var names = gOPN(toIObject(it));\n  var result = [];\n  var i = 0;\n  var key;\n  while (names.length > i) {\n    if (!has(AllSymbols, key = names[i++]) && key != HIDDEN && key != META) result.push(key);\n  } return result;\n};\nvar $getOwnPropertySymbols = function getOwnPropertySymbols(it) {\n  var IS_OP = it === ObjectProto;\n  var names = gOPN(IS_OP ? OPSymbols : toIObject(it));\n  var result = [];\n  var i = 0;\n  var key;\n  while (names.length > i) {\n    if (has(AllSymbols, key = names[i++]) && (IS_OP ? has(ObjectProto, key) : true)) result.push(AllSymbols[key]);\n  } return result;\n};\n\n// 19.4.1.1 Symbol([description])\nif (!USE_NATIVE) {\n  $Symbol = function Symbol() {\n    if (this instanceof $Symbol) throw TypeError('Symbol is not a constructor!');\n    var tag = uid(arguments.length > 0 ? arguments[0] : undefined);\n    var $set = function (value) {\n      if (this === ObjectProto) $set.call(OPSymbols, value);\n      if (has(this, HIDDEN) && has(this[HIDDEN], tag)) this[HIDDEN][tag] = false;\n      setSymbolDesc(this, tag, createDesc(1, value));\n    };\n    if (DESCRIPTORS && setter) setSymbolDesc(ObjectProto, tag, { configurable: true, set: $set });\n    return wrap(tag);\n  };\n  redefine($Symbol[PROTOTYPE], 'toString', function toString() {\n    return this._k;\n  });\n\n  $GOPD.f = $getOwnPropertyDescriptor;\n  $DP.f = $defineProperty;\n  __webpack_require__(/*! ./_object-gopn */ \"./node_modules/core-js/modules/_object-gopn.js\").f = gOPNExt.f = $getOwnPropertyNames;\n  __webpack_require__(/*! ./_object-pie */ \"./node_modules/core-js/modules/_object-pie.js\").f = $propertyIsEnumerable;\n  $GOPS.f = $getOwnPropertySymbols;\n\n  if (DESCRIPTORS && !__webpack_require__(/*! ./_library */ \"./node_modules/core-js/modules/_library.js\")) {\n    redefine(ObjectProto, 'propertyIsEnumerable', $propertyIsEnumerable, true);\n  }\n\n  wksExt.f = function (name) {\n    return wrap(wks(name));\n  };\n}\n\n$export($export.G + $export.W + $export.F * !USE_NATIVE, { Symbol: $Symbol });\n\nfor (var es6Symbols = (\n  // 19.4.2.2, 19.4.2.3, 19.4.2.4, 19.4.2.6, 19.4.2.8, 19.4.2.9, 19.4.2.10, 19.4.2.11, 19.4.2.12, 19.4.2.13, 19.4.2.14\n  'hasInstance,isConcatSpreadable,iterator,match,replace,search,species,split,toPrimitive,toStringTag,unscopables'\n).split(','), j = 0; es6Symbols.length > j;)wks(es6Symbols[j++]);\n\nfor (var wellKnownSymbols = $keys(wks.store), k = 0; wellKnownSymbols.length > k;) wksDefine(wellKnownSymbols[k++]);\n\n$export($export.S + $export.F * !USE_NATIVE, 'Symbol', {\n  // 19.4.2.1 Symbol.for(key)\n  'for': function (key) {\n    return has(SymbolRegistry, key += '')\n      ? SymbolRegistry[key]\n      : SymbolRegistry[key] = $Symbol(key);\n  },\n  // 19.4.2.5 Symbol.keyFor(sym)\n  keyFor: function keyFor(sym) {\n    if (!isSymbol(sym)) throw TypeError(sym + ' is not a symbol!');\n    for (var key in SymbolRegistry) if (SymbolRegistry[key] === sym) return key;\n  },\n  useSetter: function () { setter = true; },\n  useSimple: function () { setter = false; }\n});\n\n$export($export.S + $export.F * !USE_NATIVE, 'Object', {\n  // 19.1.2.2 Object.create(O [, Properties])\n  create: $create,\n  // 19.1.2.4 Object.defineProperty(O, P, Attributes)\n  defineProperty: $defineProperty,\n  // 19.1.2.3 Object.defineProperties(O, Properties)\n  defineProperties: $defineProperties,\n  // 19.1.2.6 Object.getOwnPropertyDescriptor(O, P)\n  getOwnPropertyDescriptor: $getOwnPropertyDescriptor,\n  // 19.1.2.7 Object.getOwnPropertyNames(O)\n  getOwnPropertyNames: $getOwnPropertyNames,\n  // 19.1.2.8 Object.getOwnPropertySymbols(O)\n  getOwnPropertySymbols: $getOwnPropertySymbols\n});\n\n// Chrome 38 and 39 `Object.getOwnPropertySymbols` fails on primitives\n// https://bugs.chromium.org/p/v8/issues/detail?id=3443\nvar FAILS_ON_PRIMITIVES = $fails(function () { $GOPS.f(1); });\n\n$export($export.S + $export.F * FAILS_ON_PRIMITIVES, 'Object', {\n  getOwnPropertySymbols: function getOwnPropertySymbols(it) {\n    return $GOPS.f(toObject(it));\n  }\n});\n\n// 24.3.2 JSON.stringify(value [, replacer [, space]])\n$JSON && $export($export.S + $export.F * (!USE_NATIVE || $fails(function () {\n  var S = $Symbol();\n  // MS Edge converts symbol values to JSON as {}\n  // WebKit converts symbol values to JSON as null\n  // V8 throws on boxed symbols\n  return _stringify([S]) != '[null]' || _stringify({ a: S }) != '{}' || _stringify(Object(S)) != '{}';\n})), 'JSON', {\n  stringify: function stringify(it) {\n    var args = [it];\n    var i = 1;\n    var replacer, $replacer;\n    while (arguments.length > i) args.push(arguments[i++]);\n    $replacer = replacer = args[1];\n    if (!isObject(replacer) && it === undefined || isSymbol(it)) return; // IE8 returns string on undefined\n    if (!isArray(replacer)) replacer = function (key, value) {\n      if (typeof $replacer == 'function') value = $replacer.call(this, key, value);\n      if (!isSymbol(value)) return value;\n    };\n    args[1] = replacer;\n    return _stringify.apply($JSON, args);\n  }\n});\n\n// 19.4.3.4 Symbol.prototype[@@toPrimitive](hint)\n$Symbol[PROTOTYPE][TO_PRIMITIVE] || __webpack_require__(/*! ./_hide */ \"./node_modules/core-js/modules/_hide.js\")($Symbol[PROTOTYPE], TO_PRIMITIVE, $Symbol[PROTOTYPE].valueOf);\n// 19.4.3.5 Symbol.prototype[@@toStringTag]\nsetToStringTag($Symbol, 'Symbol');\n// 20.2.1.9 Math[@@toStringTag]\nsetToStringTag(Math, 'Math', true);\n// 24.3.3 JSON[@@toStringTag]\nsetToStringTag(global.JSON, 'JSON', true);\n\n\n//# sourceURL=webpack:///./node_modules/core-js/modules/es6.symbol.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/es6.typed.array-buffer.js":
/*!****************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.typed.array-buffer.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar $export = __webpack_require__(/*! ./_export */ \"./node_modules/core-js/modules/_export.js\");\nvar $typed = __webpack_require__(/*! ./_typed */ \"./node_modules/core-js/modules/_typed.js\");\nvar buffer = __webpack_require__(/*! ./_typed-buffer */ \"./node_modules/core-js/modules/_typed-buffer.js\");\nvar anObject = __webpack_require__(/*! ./_an-object */ \"./node_modules/core-js/modules/_an-object.js\");\nvar toAbsoluteIndex = __webpack_require__(/*! ./_to-absolute-index */ \"./node_modules/core-js/modules/_to-absolute-index.js\");\nvar toLength = __webpack_require__(/*! ./_to-length */ \"./node_modules/core-js/modules/_to-length.js\");\nvar isObject = __webpack_require__(/*! ./_is-object */ \"./node_modules/core-js/modules/_is-object.js\");\nvar ArrayBuffer = __webpack_require__(/*! ./_global */ \"./node_modules/core-js/modules/_global.js\").ArrayBuffer;\nvar speciesConstructor = __webpack_require__(/*! ./_species-constructor */ \"./node_modules/core-js/modules/_species-constructor.js\");\nvar $ArrayBuffer = buffer.ArrayBuffer;\nvar $DataView = buffer.DataView;\nvar $isView = $typed.ABV && ArrayBuffer.isView;\nvar $slice = $ArrayBuffer.prototype.slice;\nvar VIEW = $typed.VIEW;\nvar ARRAY_BUFFER = 'ArrayBuffer';\n\n$export($export.G + $export.W + $export.F * (ArrayBuffer !== $ArrayBuffer), { ArrayBuffer: $ArrayBuffer });\n\n$export($export.S + $export.F * !$typed.CONSTR, ARRAY_BUFFER, {\n  // 24.1.3.1 ArrayBuffer.isView(arg)\n  isView: function isView(it) {\n    return $isView && $isView(it) || isObject(it) && VIEW in it;\n  }\n});\n\n$export($export.P + $export.U + $export.F * __webpack_require__(/*! ./_fails */ \"./node_modules/core-js/modules/_fails.js\")(function () {\n  return !new $ArrayBuffer(2).slice(1, undefined).byteLength;\n}), ARRAY_BUFFER, {\n  // 24.1.4.3 ArrayBuffer.prototype.slice(start, end)\n  slice: function slice(start, end) {\n    if ($slice !== undefined && end === undefined) return $slice.call(anObject(this), start); // FF fix\n    var len = anObject(this).byteLength;\n    var first = toAbsoluteIndex(start, len);\n    var fin = toAbsoluteIndex(end === undefined ? len : end, len);\n    var result = new (speciesConstructor(this, $ArrayBuffer))(toLength(fin - first));\n    var viewS = new $DataView(this);\n    var viewT = new $DataView(result);\n    var index = 0;\n    while (first < fin) {\n      viewT.setUint8(index++, viewS.getUint8(first++));\n    } return result;\n  }\n});\n\n__webpack_require__(/*! ./_set-species */ \"./node_modules/core-js/modules/_set-species.js\")(ARRAY_BUFFER);\n\n\n//# sourceURL=webpack:///./node_modules/core-js/modules/es6.typed.array-buffer.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/es6.typed.data-view.js":
/*!*************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.typed.data-view.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var $export = __webpack_require__(/*! ./_export */ \"./node_modules/core-js/modules/_export.js\");\n$export($export.G + $export.W + $export.F * !__webpack_require__(/*! ./_typed */ \"./node_modules/core-js/modules/_typed.js\").ABV, {\n  DataView: __webpack_require__(/*! ./_typed-buffer */ \"./node_modules/core-js/modules/_typed-buffer.js\").DataView\n});\n\n\n//# sourceURL=webpack:///./node_modules/core-js/modules/es6.typed.data-view.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/es6.typed.float32-array.js":
/*!*****************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.typed.float32-array.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("__webpack_require__(/*! ./_typed-array */ \"./node_modules/core-js/modules/_typed-array.js\")('Float32', 4, function (init) {\n  return function Float32Array(data, byteOffset, length) {\n    return init(this, data, byteOffset, length);\n  };\n});\n\n\n//# sourceURL=webpack:///./node_modules/core-js/modules/es6.typed.float32-array.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/es6.typed.float64-array.js":
/*!*****************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.typed.float64-array.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("__webpack_require__(/*! ./_typed-array */ \"./node_modules/core-js/modules/_typed-array.js\")('Float64', 8, function (init) {\n  return function Float64Array(data, byteOffset, length) {\n    return init(this, data, byteOffset, length);\n  };\n});\n\n\n//# sourceURL=webpack:///./node_modules/core-js/modules/es6.typed.float64-array.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/es6.typed.int16-array.js":
/*!***************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.typed.int16-array.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("__webpack_require__(/*! ./_typed-array */ \"./node_modules/core-js/modules/_typed-array.js\")('Int16', 2, function (init) {\n  return function Int16Array(data, byteOffset, length) {\n    return init(this, data, byteOffset, length);\n  };\n});\n\n\n//# sourceURL=webpack:///./node_modules/core-js/modules/es6.typed.int16-array.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/es6.typed.int32-array.js":
/*!***************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.typed.int32-array.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("__webpack_require__(/*! ./_typed-array */ \"./node_modules/core-js/modules/_typed-array.js\")('Int32', 4, function (init) {\n  return function Int32Array(data, byteOffset, length) {\n    return init(this, data, byteOffset, length);\n  };\n});\n\n\n//# sourceURL=webpack:///./node_modules/core-js/modules/es6.typed.int32-array.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/es6.typed.int8-array.js":
/*!**************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.typed.int8-array.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("__webpack_require__(/*! ./_typed-array */ \"./node_modules/core-js/modules/_typed-array.js\")('Int8', 1, function (init) {\n  return function Int8Array(data, byteOffset, length) {\n    return init(this, data, byteOffset, length);\n  };\n});\n\n\n//# sourceURL=webpack:///./node_modules/core-js/modules/es6.typed.int8-array.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/es6.typed.uint16-array.js":
/*!****************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.typed.uint16-array.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("__webpack_require__(/*! ./_typed-array */ \"./node_modules/core-js/modules/_typed-array.js\")('Uint16', 2, function (init) {\n  return function Uint16Array(data, byteOffset, length) {\n    return init(this, data, byteOffset, length);\n  };\n});\n\n\n//# sourceURL=webpack:///./node_modules/core-js/modules/es6.typed.uint16-array.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/es6.typed.uint32-array.js":
/*!****************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.typed.uint32-array.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("__webpack_require__(/*! ./_typed-array */ \"./node_modules/core-js/modules/_typed-array.js\")('Uint32', 4, function (init) {\n  return function Uint32Array(data, byteOffset, length) {\n    return init(this, data, byteOffset, length);\n  };\n});\n\n\n//# sourceURL=webpack:///./node_modules/core-js/modules/es6.typed.uint32-array.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/es6.typed.uint8-array.js":
/*!***************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.typed.uint8-array.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("__webpack_require__(/*! ./_typed-array */ \"./node_modules/core-js/modules/_typed-array.js\")('Uint8', 1, function (init) {\n  return function Uint8Array(data, byteOffset, length) {\n    return init(this, data, byteOffset, length);\n  };\n});\n\n\n//# sourceURL=webpack:///./node_modules/core-js/modules/es6.typed.uint8-array.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/es6.typed.uint8-clamped-array.js":
/*!***********************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.typed.uint8-clamped-array.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("__webpack_require__(/*! ./_typed-array */ \"./node_modules/core-js/modules/_typed-array.js\")('Uint8', 1, function (init) {\n  return function Uint8ClampedArray(data, byteOffset, length) {\n    return init(this, data, byteOffset, length);\n  };\n}, true);\n\n\n//# sourceURL=webpack:///./node_modules/core-js/modules/es6.typed.uint8-clamped-array.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/es6.weak-map.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/modules/es6.weak-map.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar global = __webpack_require__(/*! ./_global */ \"./node_modules/core-js/modules/_global.js\");\nvar each = __webpack_require__(/*! ./_array-methods */ \"./node_modules/core-js/modules/_array-methods.js\")(0);\nvar redefine = __webpack_require__(/*! ./_redefine */ \"./node_modules/core-js/modules/_redefine.js\");\nvar meta = __webpack_require__(/*! ./_meta */ \"./node_modules/core-js/modules/_meta.js\");\nvar assign = __webpack_require__(/*! ./_object-assign */ \"./node_modules/core-js/modules/_object-assign.js\");\nvar weak = __webpack_require__(/*! ./_collection-weak */ \"./node_modules/core-js/modules/_collection-weak.js\");\nvar isObject = __webpack_require__(/*! ./_is-object */ \"./node_modules/core-js/modules/_is-object.js\");\nvar validate = __webpack_require__(/*! ./_validate-collection */ \"./node_modules/core-js/modules/_validate-collection.js\");\nvar NATIVE_WEAK_MAP = __webpack_require__(/*! ./_validate-collection */ \"./node_modules/core-js/modules/_validate-collection.js\");\nvar IS_IE11 = !global.ActiveXObject && 'ActiveXObject' in global;\nvar WEAK_MAP = 'WeakMap';\nvar getWeak = meta.getWeak;\nvar isExtensible = Object.isExtensible;\nvar uncaughtFrozenStore = weak.ufstore;\nvar InternalMap;\n\nvar wrapper = function (get) {\n  return function WeakMap() {\n    return get(this, arguments.length > 0 ? arguments[0] : undefined);\n  };\n};\n\nvar methods = {\n  // 23.3.3.3 WeakMap.prototype.get(key)\n  get: function get(key) {\n    if (isObject(key)) {\n      var data = getWeak(key);\n      if (data === true) return uncaughtFrozenStore(validate(this, WEAK_MAP)).get(key);\n      return data ? data[this._i] : undefined;\n    }\n  },\n  // 23.3.3.5 WeakMap.prototype.set(key, value)\n  set: function set(key, value) {\n    return weak.def(validate(this, WEAK_MAP), key, value);\n  }\n};\n\n// 23.3 WeakMap Objects\nvar $WeakMap = module.exports = __webpack_require__(/*! ./_collection */ \"./node_modules/core-js/modules/_collection.js\")(WEAK_MAP, wrapper, methods, weak, true, true);\n\n// IE11 WeakMap frozen keys fix\nif (NATIVE_WEAK_MAP && IS_IE11) {\n  InternalMap = weak.getConstructor(wrapper, WEAK_MAP);\n  assign(InternalMap.prototype, methods);\n  meta.NEED = true;\n  each(['delete', 'has', 'get', 'set'], function (key) {\n    var proto = $WeakMap.prototype;\n    var method = proto[key];\n    redefine(proto, key, function (a, b) {\n      // store frozen objects on internal weakmap shim\n      if (isObject(a) && !isExtensible(a)) {\n        if (!this._f) this._f = new InternalMap();\n        var result = this._f[key](a, b);\n        return key == 'set' ? this : result;\n      // store all the rest on native weakmap\n      } return method.call(this, a, b);\n    });\n  });\n}\n\n\n//# sourceURL=webpack:///./node_modules/core-js/modules/es6.weak-map.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/es6.weak-set.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/modules/es6.weak-set.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar weak = __webpack_require__(/*! ./_collection-weak */ \"./node_modules/core-js/modules/_collection-weak.js\");\nvar validate = __webpack_require__(/*! ./_validate-collection */ \"./node_modules/core-js/modules/_validate-collection.js\");\nvar WEAK_SET = 'WeakSet';\n\n// 23.4 WeakSet Objects\n__webpack_require__(/*! ./_collection */ \"./node_modules/core-js/modules/_collection.js\")(WEAK_SET, function (get) {\n  return function WeakSet() { return get(this, arguments.length > 0 ? arguments[0] : undefined); };\n}, {\n  // 23.4.3.1 WeakSet.prototype.add(value)\n  add: function add(value) {\n    return weak.def(validate(this, WEAK_SET), value, true);\n  }\n}, weak, false, true);\n\n\n//# sourceURL=webpack:///./node_modules/core-js/modules/es6.weak-set.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/es7.array.flat-map.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js/modules/es7.array.flat-map.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n// https://tc39.github.io/proposal-flatMap/#sec-Array.prototype.flatMap\nvar $export = __webpack_require__(/*! ./_export */ \"./node_modules/core-js/modules/_export.js\");\nvar flattenIntoArray = __webpack_require__(/*! ./_flatten-into-array */ \"./node_modules/core-js/modules/_flatten-into-array.js\");\nvar toObject = __webpack_require__(/*! ./_to-object */ \"./node_modules/core-js/modules/_to-object.js\");\nvar toLength = __webpack_require__(/*! ./_to-length */ \"./node_modules/core-js/modules/_to-length.js\");\nvar aFunction = __webpack_require__(/*! ./_a-function */ \"./node_modules/core-js/modules/_a-function.js\");\nvar arraySpeciesCreate = __webpack_require__(/*! ./_array-species-create */ \"./node_modules/core-js/modules/_array-species-create.js\");\n\n$export($export.P, 'Array', {\n  flatMap: function flatMap(callbackfn /* , thisArg */) {\n    var O = toObject(this);\n    var sourceLen, A;\n    aFunction(callbackfn);\n    sourceLen = toLength(O.length);\n    A = arraySpeciesCreate(O, 0);\n    flattenIntoArray(A, O, O, sourceLen, 0, 1, callbackfn, arguments[1]);\n    return A;\n  }\n});\n\n__webpack_require__(/*! ./_add-to-unscopables */ \"./node_modules/core-js/modules/_add-to-unscopables.js\")('flatMap');\n\n\n//# sourceURL=webpack:///./node_modules/core-js/modules/es7.array.flat-map.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/es7.array.includes.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js/modules/es7.array.includes.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n// https://github.com/tc39/Array.prototype.includes\nvar $export = __webpack_require__(/*! ./_export */ \"./node_modules/core-js/modules/_export.js\");\nvar $includes = __webpack_require__(/*! ./_array-includes */ \"./node_modules/core-js/modules/_array-includes.js\")(true);\n\n$export($export.P, 'Array', {\n  includes: function includes(el /* , fromIndex = 0 */) {\n    return $includes(this, el, arguments.length > 1 ? arguments[1] : undefined);\n  }\n});\n\n__webpack_require__(/*! ./_add-to-unscopables */ \"./node_modules/core-js/modules/_add-to-unscopables.js\")('includes');\n\n\n//# sourceURL=webpack:///./node_modules/core-js/modules/es7.array.includes.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/es7.object.entries.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js/modules/es7.object.entries.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// https://github.com/tc39/proposal-object-values-entries\nvar $export = __webpack_require__(/*! ./_export */ \"./node_modules/core-js/modules/_export.js\");\nvar $entries = __webpack_require__(/*! ./_object-to-array */ \"./node_modules/core-js/modules/_object-to-array.js\")(true);\n\n$export($export.S, 'Object', {\n  entries: function entries(it) {\n    return $entries(it);\n  }\n});\n\n\n//# sourceURL=webpack:///./node_modules/core-js/modules/es7.object.entries.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/es7.object.get-own-property-descriptors.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/core-js/modules/es7.object.get-own-property-descriptors.js ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// https://github.com/tc39/proposal-object-getownpropertydescriptors\nvar $export = __webpack_require__(/*! ./_export */ \"./node_modules/core-js/modules/_export.js\");\nvar ownKeys = __webpack_require__(/*! ./_own-keys */ \"./node_modules/core-js/modules/_own-keys.js\");\nvar toIObject = __webpack_require__(/*! ./_to-iobject */ \"./node_modules/core-js/modules/_to-iobject.js\");\nvar gOPD = __webpack_require__(/*! ./_object-gopd */ \"./node_modules/core-js/modules/_object-gopd.js\");\nvar createProperty = __webpack_require__(/*! ./_create-property */ \"./node_modules/core-js/modules/_create-property.js\");\n\n$export($export.S, 'Object', {\n  getOwnPropertyDescriptors: function getOwnPropertyDescriptors(object) {\n    var O = toIObject(object);\n    var getDesc = gOPD.f;\n    var keys = ownKeys(O);\n    var result = {};\n    var i = 0;\n    var key, desc;\n    while (keys.length > i) {\n      desc = getDesc(O, key = keys[i++]);\n      if (desc !== undefined) createProperty(result, key, desc);\n    }\n    return result;\n  }\n});\n\n\n//# sourceURL=webpack:///./node_modules/core-js/modules/es7.object.get-own-property-descriptors.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/es7.object.values.js":
/*!***********************************************************!*\
  !*** ./node_modules/core-js/modules/es7.object.values.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// https://github.com/tc39/proposal-object-values-entries\nvar $export = __webpack_require__(/*! ./_export */ \"./node_modules/core-js/modules/_export.js\");\nvar $values = __webpack_require__(/*! ./_object-to-array */ \"./node_modules/core-js/modules/_object-to-array.js\")(false);\n\n$export($export.S, 'Object', {\n  values: function values(it) {\n    return $values(it);\n  }\n});\n\n\n//# sourceURL=webpack:///./node_modules/core-js/modules/es7.object.values.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/es7.promise.finally.js":
/*!*************************************************************!*\
  !*** ./node_modules/core-js/modules/es7.promise.finally.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("// https://github.com/tc39/proposal-promise-finally\n\nvar $export = __webpack_require__(/*! ./_export */ \"./node_modules/core-js/modules/_export.js\");\nvar core = __webpack_require__(/*! ./_core */ \"./node_modules/core-js/modules/_core.js\");\nvar global = __webpack_require__(/*! ./_global */ \"./node_modules/core-js/modules/_global.js\");\nvar speciesConstructor = __webpack_require__(/*! ./_species-constructor */ \"./node_modules/core-js/modules/_species-constructor.js\");\nvar promiseResolve = __webpack_require__(/*! ./_promise-resolve */ \"./node_modules/core-js/modules/_promise-resolve.js\");\n\n$export($export.P + $export.R, 'Promise', { 'finally': function (onFinally) {\n  var C = speciesConstructor(this, core.Promise || global.Promise);\n  var isFunction = typeof onFinally == 'function';\n  return this.then(\n    isFunction ? function (x) {\n      return promiseResolve(C, onFinally()).then(function () { return x; });\n    } : onFinally,\n    isFunction ? function (e) {\n      return promiseResolve(C, onFinally()).then(function () { throw e; });\n    } : onFinally\n  );\n} });\n\n\n//# sourceURL=webpack:///./node_modules/core-js/modules/es7.promise.finally.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/es7.string.pad-end.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js/modules/es7.string.pad-end.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n// https://github.com/tc39/proposal-string-pad-start-end\nvar $export = __webpack_require__(/*! ./_export */ \"./node_modules/core-js/modules/_export.js\");\nvar $pad = __webpack_require__(/*! ./_string-pad */ \"./node_modules/core-js/modules/_string-pad.js\");\nvar userAgent = __webpack_require__(/*! ./_user-agent */ \"./node_modules/core-js/modules/_user-agent.js\");\n\n// https://github.com/zloirock/core-js/issues/280\nvar WEBKIT_BUG = /Version\\/10\\.\\d+(\\.\\d+)?( Mobile\\/\\w+)? Safari\\//.test(userAgent);\n\n$export($export.P + $export.F * WEBKIT_BUG, 'String', {\n  padEnd: function padEnd(maxLength /* , fillString = ' ' */) {\n    return $pad(this, maxLength, arguments.length > 1 ? arguments[1] : undefined, false);\n  }\n});\n\n\n//# sourceURL=webpack:///./node_modules/core-js/modules/es7.string.pad-end.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/es7.string.pad-start.js":
/*!**************************************************************!*\
  !*** ./node_modules/core-js/modules/es7.string.pad-start.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n// https://github.com/tc39/proposal-string-pad-start-end\nvar $export = __webpack_require__(/*! ./_export */ \"./node_modules/core-js/modules/_export.js\");\nvar $pad = __webpack_require__(/*! ./_string-pad */ \"./node_modules/core-js/modules/_string-pad.js\");\nvar userAgent = __webpack_require__(/*! ./_user-agent */ \"./node_modules/core-js/modules/_user-agent.js\");\n\n// https://github.com/zloirock/core-js/issues/280\nvar WEBKIT_BUG = /Version\\/10\\.\\d+(\\.\\d+)?( Mobile\\/\\w+)? Safari\\//.test(userAgent);\n\n$export($export.P + $export.F * WEBKIT_BUG, 'String', {\n  padStart: function padStart(maxLength /* , fillString = ' ' */) {\n    return $pad(this, maxLength, arguments.length > 1 ? arguments[1] : undefined, true);\n  }\n});\n\n\n//# sourceURL=webpack:///./node_modules/core-js/modules/es7.string.pad-start.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/es7.string.trim-left.js":
/*!**************************************************************!*\
  !*** ./node_modules/core-js/modules/es7.string.trim-left.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n// https://github.com/sebmarkbage/ecmascript-string-left-right-trim\n__webpack_require__(/*! ./_string-trim */ \"./node_modules/core-js/modules/_string-trim.js\")('trimLeft', function ($trim) {\n  return function trimLeft() {\n    return $trim(this, 1);\n  };\n}, 'trimStart');\n\n\n//# sourceURL=webpack:///./node_modules/core-js/modules/es7.string.trim-left.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/es7.string.trim-right.js":
/*!***************************************************************!*\
  !*** ./node_modules/core-js/modules/es7.string.trim-right.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n// https://github.com/sebmarkbage/ecmascript-string-left-right-trim\n__webpack_require__(/*! ./_string-trim */ \"./node_modules/core-js/modules/_string-trim.js\")('trimRight', function ($trim) {\n  return function trimRight() {\n    return $trim(this, 2);\n  };\n}, 'trimEnd');\n\n\n//# sourceURL=webpack:///./node_modules/core-js/modules/es7.string.trim-right.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/es7.symbol.async-iterator.js":
/*!*******************************************************************!*\
  !*** ./node_modules/core-js/modules/es7.symbol.async-iterator.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("__webpack_require__(/*! ./_wks-define */ \"./node_modules/core-js/modules/_wks-define.js\")('asyncIterator');\n\n\n//# sourceURL=webpack:///./node_modules/core-js/modules/es7.symbol.async-iterator.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/web.dom.iterable.js":
/*!**********************************************************!*\
  !*** ./node_modules/core-js/modules/web.dom.iterable.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var $iterators = __webpack_require__(/*! ./es6.array.iterator */ \"./node_modules/core-js/modules/es6.array.iterator.js\");\nvar getKeys = __webpack_require__(/*! ./_object-keys */ \"./node_modules/core-js/modules/_object-keys.js\");\nvar redefine = __webpack_require__(/*! ./_redefine */ \"./node_modules/core-js/modules/_redefine.js\");\nvar global = __webpack_require__(/*! ./_global */ \"./node_modules/core-js/modules/_global.js\");\nvar hide = __webpack_require__(/*! ./_hide */ \"./node_modules/core-js/modules/_hide.js\");\nvar Iterators = __webpack_require__(/*! ./_iterators */ \"./node_modules/core-js/modules/_iterators.js\");\nvar wks = __webpack_require__(/*! ./_wks */ \"./node_modules/core-js/modules/_wks.js\");\nvar ITERATOR = wks('iterator');\nvar TO_STRING_TAG = wks('toStringTag');\nvar ArrayValues = Iterators.Array;\n\nvar DOMIterables = {\n  CSSRuleList: true, // TODO: Not spec compliant, should be false.\n  CSSStyleDeclaration: false,\n  CSSValueList: false,\n  ClientRectList: false,\n  DOMRectList: false,\n  DOMStringList: false,\n  DOMTokenList: true,\n  DataTransferItemList: false,\n  FileList: false,\n  HTMLAllCollection: false,\n  HTMLCollection: false,\n  HTMLFormElement: false,\n  HTMLSelectElement: false,\n  MediaList: true, // TODO: Not spec compliant, should be false.\n  MimeTypeArray: false,\n  NamedNodeMap: false,\n  NodeList: true,\n  PaintRequestList: false,\n  Plugin: false,\n  PluginArray: false,\n  SVGLengthList: false,\n  SVGNumberList: false,\n  SVGPathSegList: false,\n  SVGPointList: false,\n  SVGStringList: false,\n  SVGTransformList: false,\n  SourceBufferList: false,\n  StyleSheetList: true, // TODO: Not spec compliant, should be false.\n  TextTrackCueList: false,\n  TextTrackList: false,\n  TouchList: false\n};\n\nfor (var collections = getKeys(DOMIterables), i = 0; i < collections.length; i++) {\n  var NAME = collections[i];\n  var explicit = DOMIterables[NAME];\n  var Collection = global[NAME];\n  var proto = Collection && Collection.prototype;\n  var key;\n  if (proto) {\n    if (!proto[ITERATOR]) hide(proto, ITERATOR, ArrayValues);\n    if (!proto[TO_STRING_TAG]) hide(proto, TO_STRING_TAG, NAME);\n    Iterators[NAME] = ArrayValues;\n    if (explicit) for (key in $iterators) if (!proto[key]) redefine(proto, key, $iterators[key], true);\n  }\n}\n\n\n//# sourceURL=webpack:///./node_modules/core-js/modules/web.dom.iterable.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/web.immediate.js":
/*!*******************************************************!*\
  !*** ./node_modules/core-js/modules/web.immediate.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var $export = __webpack_require__(/*! ./_export */ \"./node_modules/core-js/modules/_export.js\");\nvar $task = __webpack_require__(/*! ./_task */ \"./node_modules/core-js/modules/_task.js\");\n$export($export.G + $export.B, {\n  setImmediate: $task.set,\n  clearImmediate: $task.clear\n});\n\n\n//# sourceURL=webpack:///./node_modules/core-js/modules/web.immediate.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/web.timers.js":
/*!****************************************************!*\
  !*** ./node_modules/core-js/modules/web.timers.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// ie9- setTimeout & setInterval additional parameters fix\nvar global = __webpack_require__(/*! ./_global */ \"./node_modules/core-js/modules/_global.js\");\nvar $export = __webpack_require__(/*! ./_export */ \"./node_modules/core-js/modules/_export.js\");\nvar userAgent = __webpack_require__(/*! ./_user-agent */ \"./node_modules/core-js/modules/_user-agent.js\");\nvar slice = [].slice;\nvar MSIE = /MSIE .\\./.test(userAgent); // <- dirty ie9- check\nvar wrap = function (set) {\n  return function (fn, time /* , ...args */) {\n    var boundArgs = arguments.length > 2;\n    var args = boundArgs ? slice.call(arguments, 2) : false;\n    return set(boundArgs ? function () {\n      // eslint-disable-next-line no-new-func\n      (typeof fn == 'function' ? fn : Function(fn)).apply(this, args);\n    } : fn, time);\n  };\n};\n$export($export.G + $export.B + $export.F * MSIE, {\n  setTimeout: wrap(global.setTimeout),\n  setInterval: wrap(global.setInterval)\n});\n\n\n//# sourceURL=webpack:///./node_modules/core-js/modules/web.timers.js?");

/***/ }),

/***/ "./node_modules/core-js/web/index.js":
/*!*******************************************!*\
  !*** ./node_modules/core-js/web/index.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("__webpack_require__(/*! ../modules/web.timers */ \"./node_modules/core-js/modules/web.timers.js\");\n__webpack_require__(/*! ../modules/web.immediate */ \"./node_modules/core-js/modules/web.immediate.js\");\n__webpack_require__(/*! ../modules/web.dom.iterable */ \"./node_modules/core-js/modules/web.dom.iterable.js\");\nmodule.exports = __webpack_require__(/*! ../modules/_core */ \"./node_modules/core-js/modules/_core.js\");\n\n\n//# sourceURL=webpack:///./node_modules/core-js/web/index.js?");

/***/ }),

/***/ "./node_modules/events/events.js":
/*!***************************************!*\
  !*** ./node_modules/events/events.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("// Copyright Joyent, Inc. and other Node contributors.\n//\n// Permission is hereby granted, free of charge, to any person obtaining a\n// copy of this software and associated documentation files (the\n// \"Software\"), to deal in the Software without restriction, including\n// without limitation the rights to use, copy, modify, merge, publish,\n// distribute, sublicense, and/or sell copies of the Software, and to permit\n// persons to whom the Software is furnished to do so, subject to the\n// following conditions:\n//\n// The above copyright notice and this permission notice shall be included\n// in all copies or substantial portions of the Software.\n//\n// THE SOFTWARE IS PROVIDED \"AS IS\", WITHOUT WARRANTY OF ANY KIND, EXPRESS\n// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF\n// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN\n// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,\n// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR\n// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE\n// USE OR OTHER DEALINGS IN THE SOFTWARE.\n\n\n\nvar R = typeof Reflect === 'object' ? Reflect : null\nvar ReflectApply = R && typeof R.apply === 'function'\n  ? R.apply\n  : function ReflectApply(target, receiver, args) {\n    return Function.prototype.apply.call(target, receiver, args);\n  }\n\nvar ReflectOwnKeys\nif (R && typeof R.ownKeys === 'function') {\n  ReflectOwnKeys = R.ownKeys\n} else if (Object.getOwnPropertySymbols) {\n  ReflectOwnKeys = function ReflectOwnKeys(target) {\n    return Object.getOwnPropertyNames(target)\n      .concat(Object.getOwnPropertySymbols(target));\n  };\n} else {\n  ReflectOwnKeys = function ReflectOwnKeys(target) {\n    return Object.getOwnPropertyNames(target);\n  };\n}\n\nfunction ProcessEmitWarning(warning) {\n  if (console && console.warn) console.warn(warning);\n}\n\nvar NumberIsNaN = Number.isNaN || function NumberIsNaN(value) {\n  return value !== value;\n}\n\nfunction EventEmitter() {\n  EventEmitter.init.call(this);\n}\nmodule.exports = EventEmitter;\n\n// Backwards-compat with node 0.10.x\nEventEmitter.EventEmitter = EventEmitter;\n\nEventEmitter.prototype._events = undefined;\nEventEmitter.prototype._eventsCount = 0;\nEventEmitter.prototype._maxListeners = undefined;\n\n// By default EventEmitters will print a warning if more than 10 listeners are\n// added to it. This is a useful default which helps finding memory leaks.\nvar defaultMaxListeners = 10;\n\nfunction checkListener(listener) {\n  if (typeof listener !== 'function') {\n    throw new TypeError('The \"listener\" argument must be of type Function. Received type ' + typeof listener);\n  }\n}\n\nObject.defineProperty(EventEmitter, 'defaultMaxListeners', {\n  enumerable: true,\n  get: function() {\n    return defaultMaxListeners;\n  },\n  set: function(arg) {\n    if (typeof arg !== 'number' || arg < 0 || NumberIsNaN(arg)) {\n      throw new RangeError('The value of \"defaultMaxListeners\" is out of range. It must be a non-negative number. Received ' + arg + '.');\n    }\n    defaultMaxListeners = arg;\n  }\n});\n\nEventEmitter.init = function() {\n\n  if (this._events === undefined ||\n      this._events === Object.getPrototypeOf(this)._events) {\n    this._events = Object.create(null);\n    this._eventsCount = 0;\n  }\n\n  this._maxListeners = this._maxListeners || undefined;\n};\n\n// Obviously not all Emitters should be limited to 10. This function allows\n// that to be increased. Set to zero for unlimited.\nEventEmitter.prototype.setMaxListeners = function setMaxListeners(n) {\n  if (typeof n !== 'number' || n < 0 || NumberIsNaN(n)) {\n    throw new RangeError('The value of \"n\" is out of range. It must be a non-negative number. Received ' + n + '.');\n  }\n  this._maxListeners = n;\n  return this;\n};\n\nfunction _getMaxListeners(that) {\n  if (that._maxListeners === undefined)\n    return EventEmitter.defaultMaxListeners;\n  return that._maxListeners;\n}\n\nEventEmitter.prototype.getMaxListeners = function getMaxListeners() {\n  return _getMaxListeners(this);\n};\n\nEventEmitter.prototype.emit = function emit(type) {\n  var args = [];\n  for (var i = 1; i < arguments.length; i++) args.push(arguments[i]);\n  var doError = (type === 'error');\n\n  var events = this._events;\n  if (events !== undefined)\n    doError = (doError && events.error === undefined);\n  else if (!doError)\n    return false;\n\n  // If there is no 'error' event listener then throw.\n  if (doError) {\n    var er;\n    if (args.length > 0)\n      er = args[0];\n    if (er instanceof Error) {\n      // Note: The comments on the `throw` lines are intentional, they show\n      // up in Node's output if this results in an unhandled exception.\n      throw er; // Unhandled 'error' event\n    }\n    // At least give some kind of context to the user\n    var err = new Error('Unhandled error.' + (er ? ' (' + er.message + ')' : ''));\n    err.context = er;\n    throw err; // Unhandled 'error' event\n  }\n\n  var handler = events[type];\n\n  if (handler === undefined)\n    return false;\n\n  if (typeof handler === 'function') {\n    ReflectApply(handler, this, args);\n  } else {\n    var len = handler.length;\n    var listeners = arrayClone(handler, len);\n    for (var i = 0; i < len; ++i)\n      ReflectApply(listeners[i], this, args);\n  }\n\n  return true;\n};\n\nfunction _addListener(target, type, listener, prepend) {\n  var m;\n  var events;\n  var existing;\n\n  checkListener(listener);\n\n  events = target._events;\n  if (events === undefined) {\n    events = target._events = Object.create(null);\n    target._eventsCount = 0;\n  } else {\n    // To avoid recursion in the case that type === \"newListener\"! Before\n    // adding it to the listeners, first emit \"newListener\".\n    if (events.newListener !== undefined) {\n      target.emit('newListener', type,\n                  listener.listener ? listener.listener : listener);\n\n      // Re-assign `events` because a newListener handler could have caused the\n      // this._events to be assigned to a new object\n      events = target._events;\n    }\n    existing = events[type];\n  }\n\n  if (existing === undefined) {\n    // Optimize the case of one listener. Don't need the extra array object.\n    existing = events[type] = listener;\n    ++target._eventsCount;\n  } else {\n    if (typeof existing === 'function') {\n      // Adding the second element, need to change to array.\n      existing = events[type] =\n        prepend ? [listener, existing] : [existing, listener];\n      // If we've already got an array, just append.\n    } else if (prepend) {\n      existing.unshift(listener);\n    } else {\n      existing.push(listener);\n    }\n\n    // Check for listener leak\n    m = _getMaxListeners(target);\n    if (m > 0 && existing.length > m && !existing.warned) {\n      existing.warned = true;\n      // No error code for this since it is a Warning\n      // eslint-disable-next-line no-restricted-syntax\n      var w = new Error('Possible EventEmitter memory leak detected. ' +\n                          existing.length + ' ' + String(type) + ' listeners ' +\n                          'added. Use emitter.setMaxListeners() to ' +\n                          'increase limit');\n      w.name = 'MaxListenersExceededWarning';\n      w.emitter = target;\n      w.type = type;\n      w.count = existing.length;\n      ProcessEmitWarning(w);\n    }\n  }\n\n  return target;\n}\n\nEventEmitter.prototype.addListener = function addListener(type, listener) {\n  return _addListener(this, type, listener, false);\n};\n\nEventEmitter.prototype.on = EventEmitter.prototype.addListener;\n\nEventEmitter.prototype.prependListener =\n    function prependListener(type, listener) {\n      return _addListener(this, type, listener, true);\n    };\n\nfunction onceWrapper() {\n  if (!this.fired) {\n    this.target.removeListener(this.type, this.wrapFn);\n    this.fired = true;\n    if (arguments.length === 0)\n      return this.listener.call(this.target);\n    return this.listener.apply(this.target, arguments);\n  }\n}\n\nfunction _onceWrap(target, type, listener) {\n  var state = { fired: false, wrapFn: undefined, target: target, type: type, listener: listener };\n  var wrapped = onceWrapper.bind(state);\n  wrapped.listener = listener;\n  state.wrapFn = wrapped;\n  return wrapped;\n}\n\nEventEmitter.prototype.once = function once(type, listener) {\n  checkListener(listener);\n  this.on(type, _onceWrap(this, type, listener));\n  return this;\n};\n\nEventEmitter.prototype.prependOnceListener =\n    function prependOnceListener(type, listener) {\n      checkListener(listener);\n      this.prependListener(type, _onceWrap(this, type, listener));\n      return this;\n    };\n\n// Emits a 'removeListener' event if and only if the listener was removed.\nEventEmitter.prototype.removeListener =\n    function removeListener(type, listener) {\n      var list, events, position, i, originalListener;\n\n      checkListener(listener);\n\n      events = this._events;\n      if (events === undefined)\n        return this;\n\n      list = events[type];\n      if (list === undefined)\n        return this;\n\n      if (list === listener || list.listener === listener) {\n        if (--this._eventsCount === 0)\n          this._events = Object.create(null);\n        else {\n          delete events[type];\n          if (events.removeListener)\n            this.emit('removeListener', type, list.listener || listener);\n        }\n      } else if (typeof list !== 'function') {\n        position = -1;\n\n        for (i = list.length - 1; i >= 0; i--) {\n          if (list[i] === listener || list[i].listener === listener) {\n            originalListener = list[i].listener;\n            position = i;\n            break;\n          }\n        }\n\n        if (position < 0)\n          return this;\n\n        if (position === 0)\n          list.shift();\n        else {\n          spliceOne(list, position);\n        }\n\n        if (list.length === 1)\n          events[type] = list[0];\n\n        if (events.removeListener !== undefined)\n          this.emit('removeListener', type, originalListener || listener);\n      }\n\n      return this;\n    };\n\nEventEmitter.prototype.off = EventEmitter.prototype.removeListener;\n\nEventEmitter.prototype.removeAllListeners =\n    function removeAllListeners(type) {\n      var listeners, events, i;\n\n      events = this._events;\n      if (events === undefined)\n        return this;\n\n      // not listening for removeListener, no need to emit\n      if (events.removeListener === undefined) {\n        if (arguments.length === 0) {\n          this._events = Object.create(null);\n          this._eventsCount = 0;\n        } else if (events[type] !== undefined) {\n          if (--this._eventsCount === 0)\n            this._events = Object.create(null);\n          else\n            delete events[type];\n        }\n        return this;\n      }\n\n      // emit removeListener for all listeners on all events\n      if (arguments.length === 0) {\n        var keys = Object.keys(events);\n        var key;\n        for (i = 0; i < keys.length; ++i) {\n          key = keys[i];\n          if (key === 'removeListener') continue;\n          this.removeAllListeners(key);\n        }\n        this.removeAllListeners('removeListener');\n        this._events = Object.create(null);\n        this._eventsCount = 0;\n        return this;\n      }\n\n      listeners = events[type];\n\n      if (typeof listeners === 'function') {\n        this.removeListener(type, listeners);\n      } else if (listeners !== undefined) {\n        // LIFO order\n        for (i = listeners.length - 1; i >= 0; i--) {\n          this.removeListener(type, listeners[i]);\n        }\n      }\n\n      return this;\n    };\n\nfunction _listeners(target, type, unwrap) {\n  var events = target._events;\n\n  if (events === undefined)\n    return [];\n\n  var evlistener = events[type];\n  if (evlistener === undefined)\n    return [];\n\n  if (typeof evlistener === 'function')\n    return unwrap ? [evlistener.listener || evlistener] : [evlistener];\n\n  return unwrap ?\n    unwrapListeners(evlistener) : arrayClone(evlistener, evlistener.length);\n}\n\nEventEmitter.prototype.listeners = function listeners(type) {\n  return _listeners(this, type, true);\n};\n\nEventEmitter.prototype.rawListeners = function rawListeners(type) {\n  return _listeners(this, type, false);\n};\n\nEventEmitter.listenerCount = function(emitter, type) {\n  if (typeof emitter.listenerCount === 'function') {\n    return emitter.listenerCount(type);\n  } else {\n    return listenerCount.call(emitter, type);\n  }\n};\n\nEventEmitter.prototype.listenerCount = listenerCount;\nfunction listenerCount(type) {\n  var events = this._events;\n\n  if (events !== undefined) {\n    var evlistener = events[type];\n\n    if (typeof evlistener === 'function') {\n      return 1;\n    } else if (evlistener !== undefined) {\n      return evlistener.length;\n    }\n  }\n\n  return 0;\n}\n\nEventEmitter.prototype.eventNames = function eventNames() {\n  return this._eventsCount > 0 ? ReflectOwnKeys(this._events) : [];\n};\n\nfunction arrayClone(arr, n) {\n  var copy = new Array(n);\n  for (var i = 0; i < n; ++i)\n    copy[i] = arr[i];\n  return copy;\n}\n\nfunction spliceOne(list, index) {\n  for (; index + 1 < list.length; index++)\n    list[index] = list[index + 1];\n  list.pop();\n}\n\nfunction unwrapListeners(arr) {\n  var ret = new Array(arr.length);\n  for (var i = 0; i < ret.length; ++i) {\n    ret[i] = arr[i].listener || arr[i];\n  }\n  return ret;\n}\n\n\n//# sourceURL=webpack:///./node_modules/events/events.js?");

/***/ }),

/***/ "./node_modules/hogan.js/lib/compiler.js":
/*!***********************************************!*\
  !*** ./node_modules/hogan.js/lib/compiler.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("/*\n *  Copyright 2011 Twitter, Inc.\n *  Licensed under the Apache License, Version 2.0 (the \"License\");\n *  you may not use this file except in compliance with the License.\n *  You may obtain a copy of the License at\n *\n *  http://www.apache.org/licenses/LICENSE-2.0\n *\n *  Unless required by applicable law or agreed to in writing, software\n *  distributed under the License is distributed on an \"AS IS\" BASIS,\n *  WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.\n *  See the License for the specific language governing permissions and\n *  limitations under the License.\n */\n\n(function (Hogan) {\n  // Setup regex  assignments\n  // remove whitespace according to Mustache spec\n  var rIsWhitespace = /\\S/,\n      rQuot = /\\\"/g,\n      rNewline =  /\\n/g,\n      rCr = /\\r/g,\n      rSlash = /\\\\/g,\n      rLineSep = /\\u2028/,\n      rParagraphSep = /\\u2029/;\n\n  Hogan.tags = {\n    '#': 1, '^': 2, '<': 3, '$': 4,\n    '/': 5, '!': 6, '>': 7, '=': 8, '_v': 9,\n    '{': 10, '&': 11, '_t': 12\n  };\n\n  Hogan.scan = function scan(text, delimiters) {\n    var len = text.length,\n        IN_TEXT = 0,\n        IN_TAG_TYPE = 1,\n        IN_TAG = 2,\n        state = IN_TEXT,\n        tagType = null,\n        tag = null,\n        buf = '',\n        tokens = [],\n        seenTag = false,\n        i = 0,\n        lineStart = 0,\n        otag = '{{',\n        ctag = '}}';\n\n    function addBuf() {\n      if (buf.length > 0) {\n        tokens.push({tag: '_t', text: new String(buf)});\n        buf = '';\n      }\n    }\n\n    function lineIsWhitespace() {\n      var isAllWhitespace = true;\n      for (var j = lineStart; j < tokens.length; j++) {\n        isAllWhitespace =\n          (Hogan.tags[tokens[j].tag] < Hogan.tags['_v']) ||\n          (tokens[j].tag == '_t' && tokens[j].text.match(rIsWhitespace) === null);\n        if (!isAllWhitespace) {\n          return false;\n        }\n      }\n\n      return isAllWhitespace;\n    }\n\n    function filterLine(haveSeenTag, noNewLine) {\n      addBuf();\n\n      if (haveSeenTag && lineIsWhitespace()) {\n        for (var j = lineStart, next; j < tokens.length; j++) {\n          if (tokens[j].text) {\n            if ((next = tokens[j+1]) && next.tag == '>') {\n              // set indent to token value\n              next.indent = tokens[j].text.toString()\n            }\n            tokens.splice(j, 1);\n          }\n        }\n      } else if (!noNewLine) {\n        tokens.push({tag:'\\n'});\n      }\n\n      seenTag = false;\n      lineStart = tokens.length;\n    }\n\n    function changeDelimiters(text, index) {\n      var close = '=' + ctag,\n          closeIndex = text.indexOf(close, index),\n          delimiters = trim(\n            text.substring(text.indexOf('=', index) + 1, closeIndex)\n          ).split(' ');\n\n      otag = delimiters[0];\n      ctag = delimiters[delimiters.length - 1];\n\n      return closeIndex + close.length - 1;\n    }\n\n    if (delimiters) {\n      delimiters = delimiters.split(' ');\n      otag = delimiters[0];\n      ctag = delimiters[1];\n    }\n\n    for (i = 0; i < len; i++) {\n      if (state == IN_TEXT) {\n        if (tagChange(otag, text, i)) {\n          --i;\n          addBuf();\n          state = IN_TAG_TYPE;\n        } else {\n          if (text.charAt(i) == '\\n') {\n            filterLine(seenTag);\n          } else {\n            buf += text.charAt(i);\n          }\n        }\n      } else if (state == IN_TAG_TYPE) {\n        i += otag.length - 1;\n        tag = Hogan.tags[text.charAt(i + 1)];\n        tagType = tag ? text.charAt(i + 1) : '_v';\n        if (tagType == '=') {\n          i = changeDelimiters(text, i);\n          state = IN_TEXT;\n        } else {\n          if (tag) {\n            i++;\n          }\n          state = IN_TAG;\n        }\n        seenTag = i;\n      } else {\n        if (tagChange(ctag, text, i)) {\n          tokens.push({tag: tagType, n: trim(buf), otag: otag, ctag: ctag,\n                       i: (tagType == '/') ? seenTag - otag.length : i + ctag.length});\n          buf = '';\n          i += ctag.length - 1;\n          state = IN_TEXT;\n          if (tagType == '{') {\n            if (ctag == '}}') {\n              i++;\n            } else {\n              cleanTripleStache(tokens[tokens.length - 1]);\n            }\n          }\n        } else {\n          buf += text.charAt(i);\n        }\n      }\n    }\n\n    filterLine(seenTag, true);\n\n    return tokens;\n  }\n\n  function cleanTripleStache(token) {\n    if (token.n.substr(token.n.length - 1) === '}') {\n      token.n = token.n.substring(0, token.n.length - 1);\n    }\n  }\n\n  function trim(s) {\n    if (s.trim) {\n      return s.trim();\n    }\n\n    return s.replace(/^\\s*|\\s*$/g, '');\n  }\n\n  function tagChange(tag, text, index) {\n    if (text.charAt(index) != tag.charAt(0)) {\n      return false;\n    }\n\n    for (var i = 1, l = tag.length; i < l; i++) {\n      if (text.charAt(index + i) != tag.charAt(i)) {\n        return false;\n      }\n    }\n\n    return true;\n  }\n\n  // the tags allowed inside super templates\n  var allowedInSuper = {'_t': true, '\\n': true, '$': true, '/': true};\n\n  function buildTree(tokens, kind, stack, customTags) {\n    var instructions = [],\n        opener = null,\n        tail = null,\n        token = null;\n\n    tail = stack[stack.length - 1];\n\n    while (tokens.length > 0) {\n      token = tokens.shift();\n\n      if (tail && tail.tag == '<' && !(token.tag in allowedInSuper)) {\n        throw new Error('Illegal content in < super tag.');\n      }\n\n      if (Hogan.tags[token.tag] <= Hogan.tags['$'] || isOpener(token, customTags)) {\n        stack.push(token);\n        token.nodes = buildTree(tokens, token.tag, stack, customTags);\n      } else if (token.tag == '/') {\n        if (stack.length === 0) {\n          throw new Error('Closing tag without opener: /' + token.n);\n        }\n        opener = stack.pop();\n        if (token.n != opener.n && !isCloser(token.n, opener.n, customTags)) {\n          throw new Error('Nesting error: ' + opener.n + ' vs. ' + token.n);\n        }\n        opener.end = token.i;\n        return instructions;\n      } else if (token.tag == '\\n') {\n        token.last = (tokens.length == 0) || (tokens[0].tag == '\\n');\n      }\n\n      instructions.push(token);\n    }\n\n    if (stack.length > 0) {\n      throw new Error('missing closing tag: ' + stack.pop().n);\n    }\n\n    return instructions;\n  }\n\n  function isOpener(token, tags) {\n    for (var i = 0, l = tags.length; i < l; i++) {\n      if (tags[i].o == token.n) {\n        token.tag = '#';\n        return true;\n      }\n    }\n  }\n\n  function isCloser(close, open, tags) {\n    for (var i = 0, l = tags.length; i < l; i++) {\n      if (tags[i].c == close && tags[i].o == open) {\n        return true;\n      }\n    }\n  }\n\n  function stringifySubstitutions(obj) {\n    var items = [];\n    for (var key in obj) {\n      items.push('\"' + esc(key) + '\": function(c,p,t,i) {' + obj[key] + '}');\n    }\n    return \"{ \" + items.join(\",\") + \" }\";\n  }\n\n  function stringifyPartials(codeObj) {\n    var partials = [];\n    for (var key in codeObj.partials) {\n      partials.push('\"' + esc(key) + '\":{name:\"' + esc(codeObj.partials[key].name) + '\", ' + stringifyPartials(codeObj.partials[key]) + \"}\");\n    }\n    return \"partials: {\" + partials.join(\",\") + \"}, subs: \" + stringifySubstitutions(codeObj.subs);\n  }\n\n  Hogan.stringify = function(codeObj, text, options) {\n    return \"{code: function (c,p,i) { \" + Hogan.wrapMain(codeObj.code) + \" },\" + stringifyPartials(codeObj) +  \"}\";\n  }\n\n  var serialNo = 0;\n  Hogan.generate = function(tree, text, options) {\n    serialNo = 0;\n    var context = { code: '', subs: {}, partials: {} };\n    Hogan.walk(tree, context);\n\n    if (options.asString) {\n      return this.stringify(context, text, options);\n    }\n\n    return this.makeTemplate(context, text, options);\n  }\n\n  Hogan.wrapMain = function(code) {\n    return 'var t=this;t.b(i=i||\"\");' + code + 'return t.fl();';\n  }\n\n  Hogan.template = Hogan.Template;\n\n  Hogan.makeTemplate = function(codeObj, text, options) {\n    var template = this.makePartials(codeObj);\n    template.code = new Function('c', 'p', 'i', this.wrapMain(codeObj.code));\n    return new this.template(template, text, this, options);\n  }\n\n  Hogan.makePartials = function(codeObj) {\n    var key, template = {subs: {}, partials: codeObj.partials, name: codeObj.name};\n    for (key in template.partials) {\n      template.partials[key] = this.makePartials(template.partials[key]);\n    }\n    for (key in codeObj.subs) {\n      template.subs[key] = new Function('c', 'p', 't', 'i', codeObj.subs[key]);\n    }\n    return template;\n  }\n\n  function esc(s) {\n    return s.replace(rSlash, '\\\\\\\\')\n            .replace(rQuot, '\\\\\\\"')\n            .replace(rNewline, '\\\\n')\n            .replace(rCr, '\\\\r')\n            .replace(rLineSep, '\\\\u2028')\n            .replace(rParagraphSep, '\\\\u2029');\n  }\n\n  function chooseMethod(s) {\n    return (~s.indexOf('.')) ? 'd' : 'f';\n  }\n\n  function createPartial(node, context) {\n    var prefix = \"<\" + (context.prefix || \"\");\n    var sym = prefix + node.n + serialNo++;\n    context.partials[sym] = {name: node.n, partials: {}};\n    context.code += 't.b(t.rp(\"' +  esc(sym) + '\",c,p,\"' + (node.indent || '') + '\"));';\n    return sym;\n  }\n\n  Hogan.codegen = {\n    '#': function(node, context) {\n      context.code += 'if(t.s(t.' + chooseMethod(node.n) + '(\"' + esc(node.n) + '\",c,p,1),' +\n                      'c,p,0,' + node.i + ',' + node.end + ',\"' + node.otag + \" \" + node.ctag + '\")){' +\n                      't.rs(c,p,' + 'function(c,p,t){';\n      Hogan.walk(node.nodes, context);\n      context.code += '});c.pop();}';\n    },\n\n    '^': function(node, context) {\n      context.code += 'if(!t.s(t.' + chooseMethod(node.n) + '(\"' + esc(node.n) + '\",c,p,1),c,p,1,0,0,\"\")){';\n      Hogan.walk(node.nodes, context);\n      context.code += '};';\n    },\n\n    '>': createPartial,\n    '<': function(node, context) {\n      var ctx = {partials: {}, code: '', subs: {}, inPartial: true};\n      Hogan.walk(node.nodes, ctx);\n      var template = context.partials[createPartial(node, context)];\n      template.subs = ctx.subs;\n      template.partials = ctx.partials;\n    },\n\n    '$': function(node, context) {\n      var ctx = {subs: {}, code: '', partials: context.partials, prefix: node.n};\n      Hogan.walk(node.nodes, ctx);\n      context.subs[node.n] = ctx.code;\n      if (!context.inPartial) {\n        context.code += 't.sub(\"' + esc(node.n) + '\",c,p,i);';\n      }\n    },\n\n    '\\n': function(node, context) {\n      context.code += write('\"\\\\n\"' + (node.last ? '' : ' + i'));\n    },\n\n    '_v': function(node, context) {\n      context.code += 't.b(t.v(t.' + chooseMethod(node.n) + '(\"' + esc(node.n) + '\",c,p,0)));';\n    },\n\n    '_t': function(node, context) {\n      context.code += write('\"' + esc(node.text) + '\"');\n    },\n\n    '{': tripleStache,\n\n    '&': tripleStache\n  }\n\n  function tripleStache(node, context) {\n    context.code += 't.b(t.t(t.' + chooseMethod(node.n) + '(\"' + esc(node.n) + '\",c,p,0)));';\n  }\n\n  function write(s) {\n    return 't.b(' + s + ');';\n  }\n\n  Hogan.walk = function(nodelist, context) {\n    var func;\n    for (var i = 0, l = nodelist.length; i < l; i++) {\n      func = Hogan.codegen[nodelist[i].tag];\n      func && func(nodelist[i], context);\n    }\n    return context;\n  }\n\n  Hogan.parse = function(tokens, text, options) {\n    options = options || {};\n    return buildTree(tokens, '', [], options.sectionTags || []);\n  }\n\n  Hogan.cache = {};\n\n  Hogan.cacheKey = function(text, options) {\n    return [text, !!options.asString, !!options.disableLambda, options.delimiters, !!options.modelGet].join('||');\n  }\n\n  Hogan.compile = function(text, options) {\n    options = options || {};\n    var key = Hogan.cacheKey(text, options);\n    var template = this.cache[key];\n\n    if (template) {\n      var partials = template.partials;\n      for (var name in partials) {\n        delete partials[name].instance;\n      }\n      return template;\n    }\n\n    template = this.generate(this.parse(this.scan(text, options.delimiters), text, options), text, options);\n    return this.cache[key] = template;\n  }\n})( true ? exports : undefined);\n\n\n//# sourceURL=webpack:///./node_modules/hogan.js/lib/compiler.js?");

/***/ }),

/***/ "./node_modules/hogan.js/lib/hogan.js":
/*!********************************************!*\
  !*** ./node_modules/hogan.js/lib/hogan.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("/*\n *  Copyright 2011 Twitter, Inc.\n *  Licensed under the Apache License, Version 2.0 (the \"License\");\n *  you may not use this file except in compliance with the License.\n *  You may obtain a copy of the License at\n *\n *  http://www.apache.org/licenses/LICENSE-2.0\n *\n *  Unless required by applicable law or agreed to in writing, software\n *  distributed under the License is distributed on an \"AS IS\" BASIS,\n *  WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.\n *  See the License for the specific language governing permissions and\n *  limitations under the License.\n */\n\n// This file is for use with Node.js. See dist/ for browser files.\n\nvar Hogan = __webpack_require__(/*! ./compiler */ \"./node_modules/hogan.js/lib/compiler.js\");\nHogan.Template = __webpack_require__(/*! ./template */ \"./node_modules/hogan.js/lib/template.js\").Template;\nHogan.template = Hogan.Template;\nmodule.exports = Hogan;\n\n\n//# sourceURL=webpack:///./node_modules/hogan.js/lib/hogan.js?");

/***/ }),

/***/ "./node_modules/hogan.js/lib/template.js":
/*!***********************************************!*\
  !*** ./node_modules/hogan.js/lib/template.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("/*\n *  Copyright 2011 Twitter, Inc.\n *  Licensed under the Apache License, Version 2.0 (the \"License\");\n *  you may not use this file except in compliance with the License.\n *  You may obtain a copy of the License at\n *\n *  http://www.apache.org/licenses/LICENSE-2.0\n *\n *  Unless required by applicable law or agreed to in writing, software\n *  distributed under the License is distributed on an \"AS IS\" BASIS,\n *  WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.\n *  See the License for the specific language governing permissions and\n *  limitations under the License.\n */\n\nvar Hogan = {};\n\n(function (Hogan) {\n  Hogan.Template = function (codeObj, text, compiler, options) {\n    codeObj = codeObj || {};\n    this.r = codeObj.code || this.r;\n    this.c = compiler;\n    this.options = options || {};\n    this.text = text || '';\n    this.partials = codeObj.partials || {};\n    this.subs = codeObj.subs || {};\n    this.buf = '';\n  }\n\n  Hogan.Template.prototype = {\n    // render: replaced by generated code.\n    r: function (context, partials, indent) { return ''; },\n\n    // variable escaping\n    v: hoganEscape,\n\n    // triple stache\n    t: coerceToString,\n\n    render: function render(context, partials, indent) {\n      return this.ri([context], partials || {}, indent);\n    },\n\n    // render internal -- a hook for overrides that catches partials too\n    ri: function (context, partials, indent) {\n      return this.r(context, partials, indent);\n    },\n\n    // ensurePartial\n    ep: function(symbol, partials) {\n      var partial = this.partials[symbol];\n\n      // check to see that if we've instantiated this partial before\n      var template = partials[partial.name];\n      if (partial.instance && partial.base == template) {\n        return partial.instance;\n      }\n\n      if (typeof template == 'string') {\n        if (!this.c) {\n          throw new Error(\"No compiler available.\");\n        }\n        template = this.c.compile(template, this.options);\n      }\n\n      if (!template) {\n        return null;\n      }\n\n      // We use this to check whether the partials dictionary has changed\n      this.partials[symbol].base = template;\n\n      if (partial.subs) {\n        // Make sure we consider parent template now\n        if (!partials.stackText) partials.stackText = {};\n        for (key in partial.subs) {\n          if (!partials.stackText[key]) {\n            partials.stackText[key] = (this.activeSub !== undefined && partials.stackText[this.activeSub]) ? partials.stackText[this.activeSub] : this.text;\n          }\n        }\n        template = createSpecializedPartial(template, partial.subs, partial.partials,\n          this.stackSubs, this.stackPartials, partials.stackText);\n      }\n      this.partials[symbol].instance = template;\n\n      return template;\n    },\n\n    // tries to find a partial in the current scope and render it\n    rp: function(symbol, context, partials, indent) {\n      var partial = this.ep(symbol, partials);\n      if (!partial) {\n        return '';\n      }\n\n      return partial.ri(context, partials, indent);\n    },\n\n    // render a section\n    rs: function(context, partials, section) {\n      var tail = context[context.length - 1];\n\n      if (!isArray(tail)) {\n        section(context, partials, this);\n        return;\n      }\n\n      for (var i = 0; i < tail.length; i++) {\n        context.push(tail[i]);\n        section(context, partials, this);\n        context.pop();\n      }\n    },\n\n    // maybe start a section\n    s: function(val, ctx, partials, inverted, start, end, tags) {\n      var pass;\n\n      if (isArray(val) && val.length === 0) {\n        return false;\n      }\n\n      if (typeof val == 'function') {\n        val = this.ms(val, ctx, partials, inverted, start, end, tags);\n      }\n\n      pass = !!val;\n\n      if (!inverted && pass && ctx) {\n        ctx.push((typeof val == 'object') ? val : ctx[ctx.length - 1]);\n      }\n\n      return pass;\n    },\n\n    // find values with dotted names\n    d: function(key, ctx, partials, returnFound) {\n      var found,\n          names = key.split('.'),\n          val = this.f(names[0], ctx, partials, returnFound),\n          doModelGet = this.options.modelGet,\n          cx = null;\n\n      if (key === '.' && isArray(ctx[ctx.length - 2])) {\n        val = ctx[ctx.length - 1];\n      } else {\n        for (var i = 1; i < names.length; i++) {\n          found = findInScope(names[i], val, doModelGet);\n          if (found !== undefined) {\n            cx = val;\n            val = found;\n          } else {\n            val = '';\n          }\n        }\n      }\n\n      if (returnFound && !val) {\n        return false;\n      }\n\n      if (!returnFound && typeof val == 'function') {\n        ctx.push(cx);\n        val = this.mv(val, ctx, partials);\n        ctx.pop();\n      }\n\n      return val;\n    },\n\n    // find values with normal names\n    f: function(key, ctx, partials, returnFound) {\n      var val = false,\n          v = null,\n          found = false,\n          doModelGet = this.options.modelGet;\n\n      for (var i = ctx.length - 1; i >= 0; i--) {\n        v = ctx[i];\n        val = findInScope(key, v, doModelGet);\n        if (val !== undefined) {\n          found = true;\n          break;\n        }\n      }\n\n      if (!found) {\n        return (returnFound) ? false : \"\";\n      }\n\n      if (!returnFound && typeof val == 'function') {\n        val = this.mv(val, ctx, partials);\n      }\n\n      return val;\n    },\n\n    // higher order templates\n    ls: function(func, cx, partials, text, tags) {\n      var oldTags = this.options.delimiters;\n\n      this.options.delimiters = tags;\n      this.b(this.ct(coerceToString(func.call(cx, text)), cx, partials));\n      this.options.delimiters = oldTags;\n\n      return false;\n    },\n\n    // compile text\n    ct: function(text, cx, partials) {\n      if (this.options.disableLambda) {\n        throw new Error('Lambda features disabled.');\n      }\n      return this.c.compile(text, this.options).render(cx, partials);\n    },\n\n    // template result buffering\n    b: function(s) { this.buf += s; },\n\n    fl: function() { var r = this.buf; this.buf = ''; return r; },\n\n    // method replace section\n    ms: function(func, ctx, partials, inverted, start, end, tags) {\n      var textSource,\n          cx = ctx[ctx.length - 1],\n          result = func.call(cx);\n\n      if (typeof result == 'function') {\n        if (inverted) {\n          return true;\n        } else {\n          textSource = (this.activeSub && this.subsText && this.subsText[this.activeSub]) ? this.subsText[this.activeSub] : this.text;\n          return this.ls(result, cx, partials, textSource.substring(start, end), tags);\n        }\n      }\n\n      return result;\n    },\n\n    // method replace variable\n    mv: function(func, ctx, partials) {\n      var cx = ctx[ctx.length - 1];\n      var result = func.call(cx);\n\n      if (typeof result == 'function') {\n        return this.ct(coerceToString(result.call(cx)), cx, partials);\n      }\n\n      return result;\n    },\n\n    sub: function(name, context, partials, indent) {\n      var f = this.subs[name];\n      if (f) {\n        this.activeSub = name;\n        f(context, partials, this, indent);\n        this.activeSub = false;\n      }\n    }\n\n  };\n\n  //Find a key in an object\n  function findInScope(key, scope, doModelGet) {\n    var val;\n\n    if (scope && typeof scope == 'object') {\n\n      if (scope[key] !== undefined) {\n        val = scope[key];\n\n      // try lookup with get for backbone or similar model data\n      } else if (doModelGet && scope.get && typeof scope.get == 'function') {\n        val = scope.get(key);\n      }\n    }\n\n    return val;\n  }\n\n  function createSpecializedPartial(instance, subs, partials, stackSubs, stackPartials, stackText) {\n    function PartialTemplate() {};\n    PartialTemplate.prototype = instance;\n    function Substitutions() {};\n    Substitutions.prototype = instance.subs;\n    var key;\n    var partial = new PartialTemplate();\n    partial.subs = new Substitutions();\n    partial.subsText = {};  //hehe. substext.\n    partial.buf = '';\n\n    stackSubs = stackSubs || {};\n    partial.stackSubs = stackSubs;\n    partial.subsText = stackText;\n    for (key in subs) {\n      if (!stackSubs[key]) stackSubs[key] = subs[key];\n    }\n    for (key in stackSubs) {\n      partial.subs[key] = stackSubs[key];\n    }\n\n    stackPartials = stackPartials || {};\n    partial.stackPartials = stackPartials;\n    for (key in partials) {\n      if (!stackPartials[key]) stackPartials[key] = partials[key];\n    }\n    for (key in stackPartials) {\n      partial.partials[key] = stackPartials[key];\n    }\n\n    return partial;\n  }\n\n  var rAmp = /&/g,\n      rLt = /</g,\n      rGt = />/g,\n      rApos = /\\'/g,\n      rQuot = /\\\"/g,\n      hChars = /[&<>\\\"\\']/;\n\n  function coerceToString(val) {\n    return String((val === null || val === undefined) ? '' : val);\n  }\n\n  function hoganEscape(str) {\n    str = coerceToString(str);\n    return hChars.test(str) ?\n      str\n        .replace(rAmp, '&amp;')\n        .replace(rLt, '&lt;')\n        .replace(rGt, '&gt;')\n        .replace(rApos, '&#39;')\n        .replace(rQuot, '&quot;') :\n      str;\n  }\n\n  var isArray = Array.isArray || function(a) {\n    return Object.prototype.toString.call(a) === '[object Array]';\n  };\n\n})( true ? exports : undefined);\n\n\n//# sourceURL=webpack:///./node_modules/hogan.js/lib/template.js?");

/***/ }),

/***/ "./node_modules/instantsearch.js/es/helpers/get-insights-anonymous-user-token.js":
/*!***************************************************************************************!*\
  !*** ./node_modules/instantsearch.js/es/helpers/get-insights-anonymous-user-token.js ***!
  \***************************************************************************************/
/*! exports provided: ANONYMOUS_TOKEN_COOKIE_KEY, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"ANONYMOUS_TOKEN_COOKIE_KEY\", function() { return ANONYMOUS_TOKEN_COOKIE_KEY; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return getInsightsAnonymousUserToken; });\nvar ANONYMOUS_TOKEN_COOKIE_KEY = '_ALGOLIA';\n\nfunction getCookie(name) {\n  var prefix = \"\".concat(name, \"=\");\n  var cookies = document.cookie.split(';');\n\n  for (var i = 0; i < cookies.length; i++) {\n    var cookie = cookies[i];\n\n    while (cookie.charAt(0) === ' ') {\n      cookie = cookie.substring(1);\n    }\n\n    if (cookie.indexOf(prefix) === 0) {\n      return cookie.substring(prefix.length, cookie.length);\n    }\n  }\n\n  return undefined;\n}\n\nfunction getInsightsAnonymousUserToken() {\n  return getCookie(ANONYMOUS_TOKEN_COOKIE_KEY);\n}\n\n//# sourceURL=webpack:///./node_modules/instantsearch.js/es/helpers/get-insights-anonymous-user-token.js?");

/***/ }),

/***/ "./node_modules/instantsearch.js/es/helpers/highlight.js":
/*!***************************************************************!*\
  !*** ./node_modules/instantsearch.js/es/helpers/highlight.js ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return highlight; });\n/* harmony import */ var _lib_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../lib/utils */ \"./node_modules/instantsearch.js/es/lib/utils/index.js\");\n/* harmony import */ var _lib_escape_highlight__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../lib/escape-highlight */ \"./node_modules/instantsearch.js/es/lib/escape-highlight.js\");\n/* harmony import */ var _lib_suit__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../lib/suit */ \"./node_modules/instantsearch.js/es/lib/suit.js\");\n\n\n\nvar suit = Object(_lib_suit__WEBPACK_IMPORTED_MODULE_2__[\"component\"])('Highlight');\nfunction highlight(_ref) {\n  var attribute = _ref.attribute,\n      _ref$highlightedTagNa = _ref.highlightedTagName,\n      highlightedTagName = _ref$highlightedTagNa === void 0 ? 'mark' : _ref$highlightedTagNa,\n      hit = _ref.hit;\n  var attributeValue = Object(_lib_utils__WEBPACK_IMPORTED_MODULE_0__[\"getPropertyByPath\"])(hit, \"_highlightResult.\".concat(attribute, \".value\")) || '';\n  var className = suit({\n    descendantName: 'highlighted'\n  });\n  return attributeValue.replace(new RegExp(_lib_escape_highlight__WEBPACK_IMPORTED_MODULE_1__[\"TAG_REPLACEMENT\"].highlightPreTag, 'g'), \"<\".concat(highlightedTagName, \" class=\\\"\").concat(className, \"\\\">\")).replace(new RegExp(_lib_escape_highlight__WEBPACK_IMPORTED_MODULE_1__[\"TAG_REPLACEMENT\"].highlightPostTag, 'g'), \"</\".concat(highlightedTagName, \">\"));\n}\n\n//# sourceURL=webpack:///./node_modules/instantsearch.js/es/helpers/highlight.js?");

/***/ }),

/***/ "./node_modules/instantsearch.js/es/helpers/index.js":
/*!***********************************************************!*\
  !*** ./node_modules/instantsearch.js/es/helpers/index.js ***!
  \***********************************************************/
/*! exports provided: highlight, snippet, insights, getInsightsAnonymousUserToken */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _highlight__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./highlight */ \"./node_modules/instantsearch.js/es/helpers/highlight.js\");\n/* empty/unused harmony star reexport *//* harmony import */ var _snippet__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./snippet */ \"./node_modules/instantsearch.js/es/helpers/snippet.js\");\n/* empty/unused harmony star reexport *//* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"highlight\", function() { return _highlight__WEBPACK_IMPORTED_MODULE_0__[\"default\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"snippet\", function() { return _snippet__WEBPACK_IMPORTED_MODULE_1__[\"default\"]; });\n\n/* harmony import */ var _insights__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./insights */ \"./node_modules/instantsearch.js/es/helpers/insights.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"insights\", function() { return _insights__WEBPACK_IMPORTED_MODULE_2__[\"default\"]; });\n\n/* harmony import */ var _get_insights_anonymous_user_token__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./get-insights-anonymous-user-token */ \"./node_modules/instantsearch.js/es/helpers/get-insights-anonymous-user-token.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"getInsightsAnonymousUserToken\", function() { return _get_insights_anonymous_user_token__WEBPACK_IMPORTED_MODULE_3__[\"default\"]; });\n\n\n\n\n\n\n\n\n//# sourceURL=webpack:///./node_modules/instantsearch.js/es/helpers/index.js?");

/***/ }),

/***/ "./node_modules/instantsearch.js/es/helpers/insights.js":
/*!**************************************************************!*\
  !*** ./node_modules/instantsearch.js/es/helpers/insights.js ***!
  \**************************************************************/
/*! exports provided: readDataAttributes, hasDataAttributes, writeDataAttributes, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"readDataAttributes\", function() { return readDataAttributes; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"hasDataAttributes\", function() { return hasDataAttributes; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"writeDataAttributes\", function() { return writeDataAttributes; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return insights; });\nfunction _typeof(obj) { if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof(obj); }\n\nfunction readDataAttributes(domElement) {\n  var method = domElement.getAttribute('data-insights-method');\n  var serializedPayload = domElement.getAttribute('data-insights-payload');\n\n  if (typeof serializedPayload !== 'string') {\n    throw new Error('The insights helper expects `data-insights-payload` to be a base64-encoded JSON string.');\n  }\n\n  try {\n    var payload = JSON.parse(atob(serializedPayload));\n    return {\n      method: method,\n      payload: payload\n    };\n  } catch (error) {\n    throw new Error('The insights helper was unable to parse `data-insights-payload`.');\n  }\n}\nfunction hasDataAttributes(domElement) {\n  return domElement.hasAttribute('data-insights-method');\n}\nfunction writeDataAttributes(_ref) {\n  var method = _ref.method,\n      payload = _ref.payload;\n\n  if (_typeof(payload) !== 'object') {\n    throw new Error(\"The insights helper expects the payload to be an object.\");\n  }\n\n  var serializedPayload;\n\n  try {\n    serializedPayload = btoa(JSON.stringify(payload));\n  } catch (error) {\n    throw new Error(\"Could not JSON serialize the payload object.\");\n  }\n\n  return \"data-insights-method=\\\"\".concat(method, \"\\\" data-insights-payload=\\\"\").concat(serializedPayload, \"\\\"\");\n}\nfunction insights(method, payload) {\n  return writeDataAttributes({\n    method: method,\n    payload: payload\n  });\n}\n\n//# sourceURL=webpack:///./node_modules/instantsearch.js/es/helpers/insights.js?");

/***/ }),

/***/ "./node_modules/instantsearch.js/es/helpers/snippet.js":
/*!*************************************************************!*\
  !*** ./node_modules/instantsearch.js/es/helpers/snippet.js ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return snippet; });\n/* harmony import */ var _lib_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../lib/utils */ \"./node_modules/instantsearch.js/es/lib/utils/index.js\");\n/* harmony import */ var _lib_escape_highlight__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../lib/escape-highlight */ \"./node_modules/instantsearch.js/es/lib/escape-highlight.js\");\n/* harmony import */ var _lib_suit__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../lib/suit */ \"./node_modules/instantsearch.js/es/lib/suit.js\");\n\n\n\nvar suit = Object(_lib_suit__WEBPACK_IMPORTED_MODULE_2__[\"component\"])('Snippet');\nfunction snippet(_ref) {\n  var attribute = _ref.attribute,\n      _ref$highlightedTagNa = _ref.highlightedTagName,\n      highlightedTagName = _ref$highlightedTagNa === void 0 ? 'mark' : _ref$highlightedTagNa,\n      hit = _ref.hit;\n  var attributeValue = Object(_lib_utils__WEBPACK_IMPORTED_MODULE_0__[\"getPropertyByPath\"])(hit, \"_snippetResult.\".concat(attribute, \".value\")) || '';\n  var className = suit({\n    descendantName: 'highlighted'\n  });\n  return attributeValue.replace(new RegExp(_lib_escape_highlight__WEBPACK_IMPORTED_MODULE_1__[\"TAG_REPLACEMENT\"].highlightPreTag, 'g'), \"<\".concat(highlightedTagName, \" class=\\\"\").concat(className, \"\\\">\")).replace(new RegExp(_lib_escape_highlight__WEBPACK_IMPORTED_MODULE_1__[\"TAG_REPLACEMENT\"].highlightPostTag, 'g'), \"</\".concat(highlightedTagName, \">\"));\n}\n\n//# sourceURL=webpack:///./node_modules/instantsearch.js/es/helpers/snippet.js?");

/***/ }),

/***/ "./node_modules/instantsearch.js/es/index.js":
/*!***************************************************!*\
  !*** ./node_modules/instantsearch.js/es/index.js ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _lib_InstantSearch__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./lib/InstantSearch */ \"./node_modules/instantsearch.js/es/lib/InstantSearch.js\");\n/* harmony import */ var _lib_version__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./lib/version */ \"./node_modules/instantsearch.js/es/lib/version.js\");\n/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./helpers */ \"./node_modules/instantsearch.js/es/helpers/index.js\");\n\n\n\n\nvar instantsearch = function instantsearch(options) {\n  return new _lib_InstantSearch__WEBPACK_IMPORTED_MODULE_0__[\"default\"](options);\n};\n\ninstantsearch.version = _lib_version__WEBPACK_IMPORTED_MODULE_1__[\"default\"];\ninstantsearch.snippet = _helpers__WEBPACK_IMPORTED_MODULE_2__[\"snippet\"];\ninstantsearch.highlight = _helpers__WEBPACK_IMPORTED_MODULE_2__[\"highlight\"];\ninstantsearch.insights = _helpers__WEBPACK_IMPORTED_MODULE_2__[\"insights\"];\ninstantsearch.getInsightsAnonymousUserToken = _helpers__WEBPACK_IMPORTED_MODULE_2__[\"getInsightsAnonymousUserToken\"];\nObject.defineProperty(instantsearch, 'widgets', {\n  get: function get() {\n    throw new ReferenceError(\"\\\"instantsearch.widgets\\\" are not available from the ES build.\\n\\nTo import the widgets:\\n\\nimport { searchBox } from 'instantsearch.js/es/widgets'\");\n  }\n});\nObject.defineProperty(instantsearch, 'connectors', {\n  get: function get() {\n    throw new ReferenceError(\"\\\"instantsearch.connectors\\\" are not available from the ES build.\\n\\nTo import the connectors:\\n\\nimport { connectSearchBox } from 'instantsearch.js/es/connectors'\");\n  }\n});\n/* harmony default export */ __webpack_exports__[\"default\"] = (instantsearch);\n\n\n//# sourceURL=webpack:///./node_modules/instantsearch.js/es/index.js?");

/***/ }),

/***/ "./node_modules/instantsearch.js/es/lib/InstantSearch.js":
/*!***************************************************************!*\
  !*** ./node_modules/instantsearch.js/es/lib/InstantSearch.js ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var algoliasearch_helper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! algoliasearch-helper */ \"./node_modules/algoliasearch-helper/index.js\");\n/* harmony import */ var algoliasearch_helper__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(algoliasearch_helper__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var events__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! events */ \"./node_modules/events/events.js\");\n/* harmony import */ var events__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(events__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _widgets_index_index__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../widgets/index/index */ \"./node_modules/instantsearch.js/es/widgets/index/index.js\");\n/* harmony import */ var _version__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./version */ \"./node_modules/instantsearch.js/es/lib/version.js\");\n/* harmony import */ var _createHelpers__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./createHelpers */ \"./node_modules/instantsearch.js/es/lib/createHelpers.js\");\n/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./utils */ \"./node_modules/instantsearch.js/es/lib/utils/index.js\");\n/* harmony import */ var _utils_detect_insights_client__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./utils/detect-insights-client */ \"./node_modules/instantsearch.js/es/lib/utils/detect-insights-client.js\");\n/* harmony import */ var _middleware_createRouter__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../middleware/createRouter */ \"./node_modules/instantsearch.js/es/middleware/createRouter.js\");\nfunction _typeof(obj) { if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof(obj); }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nfunction _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === \"object\" || typeof call === \"function\")) { return call; } return _assertThisInitialized(self); }\n\nfunction _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }\n\nfunction _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function\"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }\n\nfunction _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\n\n\n\n\n\n\n\n\nvar withUsage = Object(_utils__WEBPACK_IMPORTED_MODULE_5__[\"createDocumentationMessageGenerator\"])({\n  name: 'instantsearch'\n});\n\nfunction defaultCreateURL() {\n  return '#';\n}\n/**\n * Global options for an InstantSearch instance.\n */\n\n\n/**\n * The actual implementation of the InstantSearch. This is\n * created using the `instantsearch` factory function.\n * It emits the 'render' event every time a search is done\n */\nvar InstantSearch =\n/*#__PURE__*/\nfunction (_EventEmitter) {\n  _inherits(InstantSearch, _EventEmitter);\n\n  function InstantSearch(options) {\n    var _this;\n\n    _classCallCheck(this, InstantSearch);\n\n    _this = _possibleConstructorReturn(this, _getPrototypeOf(InstantSearch).call(this));\n\n    _defineProperty(_assertThisInitialized(_this), \"client\", void 0);\n\n    _defineProperty(_assertThisInitialized(_this), \"indexName\", void 0);\n\n    _defineProperty(_assertThisInitialized(_this), \"insightsClient\", void 0);\n\n    _defineProperty(_assertThisInitialized(_this), \"helper\", void 0);\n\n    _defineProperty(_assertThisInitialized(_this), \"mainHelper\", void 0);\n\n    _defineProperty(_assertThisInitialized(_this), \"mainIndex\", void 0);\n\n    _defineProperty(_assertThisInitialized(_this), \"started\", void 0);\n\n    _defineProperty(_assertThisInitialized(_this), \"templatesConfig\", void 0);\n\n    _defineProperty(_assertThisInitialized(_this), \"_stalledSearchDelay\", void 0);\n\n    _defineProperty(_assertThisInitialized(_this), \"_searchStalledTimer\", void 0);\n\n    _defineProperty(_assertThisInitialized(_this), \"_isSearchStalled\", void 0);\n\n    _defineProperty(_assertThisInitialized(_this), \"_initialUiState\", void 0);\n\n    _defineProperty(_assertThisInitialized(_this), \"_createURL\", void 0);\n\n    _defineProperty(_assertThisInitialized(_this), \"_searchFunction\", void 0);\n\n    _defineProperty(_assertThisInitialized(_this), \"_mainHelperSearch\", void 0);\n\n    _defineProperty(_assertThisInitialized(_this), \"middleware\", []);\n\n    _defineProperty(_assertThisInitialized(_this), \"scheduleSearch\", Object(_utils__WEBPACK_IMPORTED_MODULE_5__[\"defer\"])(function () {\n      _this.mainHelper.search();\n    }));\n\n    _defineProperty(_assertThisInitialized(_this), \"scheduleRender\", Object(_utils__WEBPACK_IMPORTED_MODULE_5__[\"defer\"])(function () {\n      if (!_this.mainHelper.hasPendingRequests()) {\n        clearTimeout(_this._searchStalledTimer);\n        _this._searchStalledTimer = null;\n        _this._isSearchStalled = false;\n      }\n\n      _this.mainIndex.render({\n        instantSearchInstance: _assertThisInitialized(_this)\n      });\n\n      _this.emit('render');\n    }));\n\n    _defineProperty(_assertThisInitialized(_this), \"onStateChange\", function () {\n      var nextUiState = _this.mainIndex.getWidgetState({});\n\n      _this.middleware.forEach(function (m) {\n        m.onStateChange({\n          state: nextUiState\n        });\n      });\n    });\n\n    var _options$indexName = options.indexName,\n        indexName = _options$indexName === void 0 ? null : _options$indexName,\n        numberLocale = options.numberLocale,\n        _options$initialUiSta = options.initialUiState,\n        initialUiState = _options$initialUiSta === void 0 ? {} : _options$initialUiSta,\n        _options$routing = options.routing,\n        routing = _options$routing === void 0 ? null : _options$routing,\n        searchFunction = options.searchFunction,\n        _options$stalledSearc = options.stalledSearchDelay,\n        stalledSearchDelay = _options$stalledSearc === void 0 ? 200 : _options$stalledSearc,\n        _options$searchClient = options.searchClient,\n        searchClient = _options$searchClient === void 0 ? null : _options$searchClient,\n        _options$insightsClie = options.insightsClient,\n        insightsClient = _options$insightsClie === void 0 ? null : _options$insightsClie;\n\n    if (indexName === null) {\n      throw new Error(withUsage('The `indexName` option is required.'));\n    }\n\n    if (searchClient === null) {\n      throw new Error(withUsage('The `searchClient` option is required.'));\n    }\n\n    if (typeof searchClient.search !== 'function') {\n      throw new Error(\"The `searchClient` must implement a `search` method.\\n\\nSee: https://www.algolia.com/doc/guides/building-search-ui/going-further/backend-search/in-depth/backend-instantsearch/js/\");\n    }\n\n    if (typeof searchClient.addAlgoliaAgent === 'function') {\n      searchClient.addAlgoliaAgent(\"instantsearch.js (\".concat(_version__WEBPACK_IMPORTED_MODULE_3__[\"default\"], \")\"));\n    }\n\n     true ? Object(_utils__WEBPACK_IMPORTED_MODULE_5__[\"warning\"])(Boolean(insightsClient) || !Object(_utils_detect_insights_client__WEBPACK_IMPORTED_MODULE_6__[\"default\"])(), withUsage(\"InstantSearch detected the Insights client in the global scope.\\nTo connect InstantSearch to the Insights client, make sure to specify the `insightsClient` option:\\n\\nconst search = instantsearch({\\n  /* ... */\\n  insightsClient: window.aa,\\n});\")) : undefined;\n\n    if (insightsClient && typeof insightsClient !== 'function') {\n      throw new Error(withUsage('The `insightsClient` option should be a function.'));\n    }\n\n     true ? Object(_utils__WEBPACK_IMPORTED_MODULE_5__[\"warning\"])(!options.searchParameters, \"The `searchParameters` option is deprecated and will not be supported in InstantSearch.js 4.x.\\n\\nYou can replace it with the `configure` widget:\\n\\n```\\nsearch.addWidgets([\\n  configure(\".concat(JSON.stringify(options.searchParameters, null, 2), \")\\n]);\\n```\\n\\nSee \").concat(Object(_utils__WEBPACK_IMPORTED_MODULE_5__[\"createDocumentationLink\"])({\n      name: 'configure'\n    }))) : undefined;\n    _this.client = searchClient;\n    _this.insightsClient = insightsClient;\n    _this.indexName = indexName;\n    _this.helper = null;\n    _this.mainHelper = null;\n    _this.mainIndex = Object(_widgets_index_index__WEBPACK_IMPORTED_MODULE_2__[\"default\"])({\n      indexName: indexName\n    });\n    _this.started = false;\n    _this.templatesConfig = {\n      helpers: Object(_createHelpers__WEBPACK_IMPORTED_MODULE_4__[\"default\"])({\n        numberLocale: numberLocale\n      }),\n      compileOptions: {}\n    };\n    _this._stalledSearchDelay = stalledSearchDelay;\n    _this._searchStalledTimer = null;\n    _this._isSearchStalled = false;\n    _this._createURL = defaultCreateURL;\n    _this._initialUiState = initialUiState;\n\n    if (searchFunction) {\n      _this._searchFunction = searchFunction;\n    }\n\n    if (routing) {\n      var routerOptions = typeof routing === 'boolean' ? undefined : routing;\n\n      _this.EXPERIMENTAL_use(Object(_middleware_createRouter__WEBPACK_IMPORTED_MODULE_7__[\"createRouter\"])(routerOptions));\n    }\n\n    return _this;\n  }\n  /**\n   * Hooks a middleware into the InstantSearch lifecycle.\n   *\n   * This method is considered as experimental and is subject to change in\n   * minor versions.\n   */\n\n\n  _createClass(InstantSearch, [{\n    key: \"EXPERIMENTAL_use\",\n    value: function EXPERIMENTAL_use() {\n      var _this2 = this;\n\n      for (var _len = arguments.length, middleware = new Array(_len), _key = 0; _key < _len; _key++) {\n        middleware[_key] = arguments[_key];\n      }\n\n      var newMiddlewareList = middleware.map(function (fn) {\n        var newMiddleware = fn({\n          instantSearchInstance: _this2\n        });\n\n        _this2.middleware.push(newMiddleware);\n\n        return newMiddleware;\n      }); // If the instance has already started, we directly subscribe the\n      // middleware so they're notified of changes.\n\n      if (this.started) {\n        newMiddlewareList.forEach(function (m) {\n          m.subscribe();\n        });\n      }\n\n      return this;\n    }\n    /**\n     * Adds a widget to the search instance.\n     * A widget can be added either before or after InstantSearch has started.\n     * @param widget The widget to add to InstantSearch.\n     *\n     * @deprecated This method will still be supported in 4.x releases, but not further. It is replaced by `addWidgets([widget])`.\n     */\n\n  }, {\n    key: \"addWidget\",\n    value: function addWidget(widget) {\n       true ? Object(_utils__WEBPACK_IMPORTED_MODULE_5__[\"warning\"])(false, 'addWidget will still be supported in 4.x releases, but not further. It is replaced by `addWidgets([widget])`') : undefined;\n      return this.addWidgets([widget]);\n    }\n    /**\n     * Adds multiple widgets to the search instance.\n     * Widgets can be added either before or after InstantSearch has started.\n     * @param widgets The array of widgets to add to InstantSearch.\n     */\n\n  }, {\n    key: \"addWidgets\",\n    value: function addWidgets(widgets) {\n      if (!Array.isArray(widgets)) {\n        throw new Error(withUsage('The `addWidgets` method expects an array of widgets. Please use `addWidget`.'));\n      }\n\n      if (widgets.some(function (widget) {\n        return typeof widget.init !== 'function' && typeof widget.render !== 'function';\n      })) {\n        throw new Error(withUsage('The widget definition expects a `render` and/or an `init` method.'));\n      }\n\n      this.mainIndex.addWidgets(widgets);\n      return this;\n    }\n    /**\n     * Removes a widget from the search instance.\n     * @deprecated This method will still be supported in 4.x releases, but not further. It is replaced by `removeWidgets([widget])`\n     * @param widget The widget instance to remove from InstantSearch.\n     *\n     * The widget must implement a `dispose()` method to clear its state.\n     */\n\n  }, {\n    key: \"removeWidget\",\n    value: function removeWidget(widget) {\n       true ? Object(_utils__WEBPACK_IMPORTED_MODULE_5__[\"warning\"])(false, 'removeWidget will still be supported in 4.x releases, but not further. It is replaced by `removeWidgets([widget])`') : undefined;\n      return this.removeWidgets([widget]);\n    }\n    /**\n     * Removes multiple widgets from the search instance.\n     * @param widgets Array of widgets instances to remove from InstantSearch.\n     *\n     * The widgets must implement a `dispose()` method to clear their states.\n     */\n\n  }, {\n    key: \"removeWidgets\",\n    value: function removeWidgets(widgets) {\n      if (!Array.isArray(widgets)) {\n        throw new Error(withUsage('The `removeWidgets` method expects an array of widgets. Please use `removeWidget`.'));\n      }\n\n      if (widgets.some(function (widget) {\n        return typeof widget.dispose !== 'function';\n      })) {\n        throw new Error(withUsage('The widget definition expects a `dispose` method.'));\n      }\n\n      this.mainIndex.removeWidgets(widgets);\n      return this;\n    }\n    /**\n     * Ends the initialization of InstantSearch.js and triggers the\n     * first search. This method should be called after all widgets have been added\n     * to the instance of InstantSearch.js. InstantSearch.js also supports adding and removing\n     * widgets after the start as an **EXPERIMENTAL** feature.\n     */\n\n  }, {\n    key: \"start\",\n    value: function start() {\n      var _this3 = this;\n\n      if (this.started) {\n        throw new Error(withUsage('The `start` method has already been called once.'));\n      } // This Helper is used for the queries, we don't care about its state. The\n      // states are managed at the `index` level. We use this Helper to create\n      // DerivedHelper scoped into the `index` widgets.\n\n\n      var mainHelper = algoliasearch_helper__WEBPACK_IMPORTED_MODULE_0___default()(this.client, this.indexName);\n\n      mainHelper.search = function () {\n        // This solution allows us to keep the exact same API for the users but\n        // under the hood, we have a different implementation. It should be\n        // completely transparent for the rest of the codebase. Only this module\n        // is impacted.\n        return mainHelper.searchOnlyWithDerivedHelpers();\n      };\n\n      if (this._searchFunction) {\n        // this client isn't used to actually search, but required for the helper\n        // to not throw errors\n        var fakeClient = {\n          search: function search() {\n            return new Promise(_utils__WEBPACK_IMPORTED_MODULE_5__[\"noop\"]);\n          }\n        };\n        this._mainHelperSearch = mainHelper.search.bind(mainHelper);\n\n        mainHelper.search = function () {\n          var mainIndexHelper = _this3.mainIndex.getHelper();\n\n          var searchFunctionHelper = algoliasearch_helper__WEBPACK_IMPORTED_MODULE_0___default()(fakeClient, mainIndexHelper.state.index, mainIndexHelper.state);\n          searchFunctionHelper.once('search', function (_ref) {\n            var state = _ref.state;\n            mainIndexHelper.overrideStateWithoutTriggeringChangeEvent(state);\n\n            _this3._mainHelperSearch();\n          }); // Forward state changes from `searchFunctionHelper` to `mainIndexHelper`\n\n          searchFunctionHelper.on('change', function (_ref2) {\n            var state = _ref2.state;\n            mainIndexHelper.setState(state);\n          });\n\n          _this3._searchFunction(searchFunctionHelper);\n\n          return mainHelper;\n        };\n      } // Only the \"main\" Helper emits the `error` event vs the one for `search`\n      // and `results` that are also emitted on the derived one.\n\n\n      mainHelper.on('error', function (_ref3) {\n        var error = _ref3.error;\n\n        _this3.emit('error', {\n          error: error\n        });\n      });\n      this.mainHelper = mainHelper;\n      this.middleware.forEach(function (m) {\n        m.subscribe();\n      });\n      this.mainIndex.init({\n        instantSearchInstance: this,\n        parent: null,\n        uiState: this._initialUiState\n      });\n      mainHelper.search(); // Keep the previous reference for legacy purpose, some pattern use\n      // the direct Helper access `search.helper` (e.g multi-index).\n\n      this.helper = this.mainIndex.getHelper(); // track we started the search if we add more widgets,\n      // to init them directly after add\n\n      this.started = true;\n    }\n    /**\n     * Removes all widgets without triggering a search afterwards. This is an **EXPERIMENTAL** feature,\n     * if you find an issue with it, please\n     * [open an issue](https://github.com/algolia/instantsearch.js/issues/new?title=Problem%20with%20dispose).\n     * @return {undefined} This method does not return anything\n     */\n\n  }, {\n    key: \"dispose\",\n    value: function dispose() {\n      this.scheduleSearch.cancel();\n      this.scheduleRender.cancel();\n      clearTimeout(this._searchStalledTimer);\n      this.removeWidgets(this.mainIndex.getWidgets());\n      this.mainIndex.dispose(); // You can not start an instance two times, therefore a disposed instance\n      // needs to set started as false otherwise this can not be restarted at a\n      // later point.\n\n      this.started = false; // The helper needs to be reset to perform the next search from a fresh state.\n      // If not reset, it would use the state stored before calling `dispose()`.\n\n      this.removeAllListeners();\n      this.mainHelper.removeAllListeners();\n      this.mainHelper = null;\n      this.helper = null;\n      this.middleware.forEach(function (m) {\n        m.unsubscribe();\n      });\n    }\n  }, {\n    key: \"scheduleStalledRender\",\n    value: function scheduleStalledRender() {\n      var _this4 = this;\n\n      if (!this._searchStalledTimer) {\n        this._searchStalledTimer = setTimeout(function () {\n          _this4._isSearchStalled = true;\n\n          _this4.scheduleRender();\n        }, this._stalledSearchDelay);\n      }\n    }\n  }, {\n    key: \"createURL\",\n    value: function createURL() {\n      var nextState = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};\n\n      if (!this.started) {\n        throw new Error(withUsage('The `start` method needs to be called before `createURL`.'));\n      }\n\n      return this._createURL(nextState);\n    }\n  }, {\n    key: \"refresh\",\n    value: function refresh() {\n      if (!this.mainHelper) {\n        throw new Error(withUsage('The `start` method needs to be called before `refresh`.'));\n      }\n\n      this.mainHelper.clearCache().search();\n    }\n  }]);\n\n  return InstantSearch;\n}(events__WEBPACK_IMPORTED_MODULE_1___default.a);\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (InstantSearch);\n\n//# sourceURL=webpack:///./node_modules/instantsearch.js/es/lib/InstantSearch.js?");

/***/ }),

/***/ "./node_modules/instantsearch.js/es/lib/createHelpers.js":
/*!***************************************************************!*\
  !*** ./node_modules/instantsearch.js/es/lib/createHelpers.js ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return hoganHelpers; });\n/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../helpers */ \"./node_modules/instantsearch.js/es/helpers/index.js\");\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\n\nfunction hoganHelpers(_ref) {\n  var numberLocale = _ref.numberLocale;\n  return {\n    formatNumber: function formatNumber(value, render) {\n      return Number(render(value)).toLocaleString(numberLocale);\n    },\n    highlight: function highlight(options, render) {\n      try {\n        var highlightOptions = JSON.parse(options);\n        return render(Object(_helpers__WEBPACK_IMPORTED_MODULE_0__[\"highlight\"])(_objectSpread({}, highlightOptions, {\n          hit: this\n        })));\n      } catch (error) {\n        throw new Error(\"\\nThe highlight helper expects a JSON object of the format:\\n{ \\\"attribute\\\": \\\"name\\\", \\\"highlightedTagName\\\": \\\"mark\\\" }\");\n      }\n    },\n    snippet: function snippet(options, render) {\n      try {\n        var snippetOptions = JSON.parse(options);\n        return render(Object(_helpers__WEBPACK_IMPORTED_MODULE_0__[\"snippet\"])(_objectSpread({}, snippetOptions, {\n          hit: this\n        })));\n      } catch (error) {\n        throw new Error(\"\\nThe snippet helper expects a JSON object of the format:\\n{ \\\"attribute\\\": \\\"name\\\", \\\"highlightedTagName\\\": \\\"mark\\\" }\");\n      }\n    },\n    insights: function insights(options, render) {\n      try {\n        var _JSON$parse = JSON.parse(options),\n            method = _JSON$parse.method,\n            payload = _JSON$parse.payload;\n\n        return render(Object(_helpers__WEBPACK_IMPORTED_MODULE_0__[\"insights\"])(method, _objectSpread({\n          objectIDs: [this.objectID]\n        }, payload)));\n      } catch (error) {\n        throw new Error(\"\\nThe insights helper expects a JSON object of the format:\\n{ \\\"method\\\": \\\"method-name\\\", \\\"payload\\\": { \\\"eventName\\\": \\\"name of the event\\\" } }\");\n      }\n    }\n  };\n}\n\n//# sourceURL=webpack:///./node_modules/instantsearch.js/es/lib/createHelpers.js?");

/***/ }),

/***/ "./node_modules/instantsearch.js/es/lib/escape-highlight.js":
/*!******************************************************************!*\
  !*** ./node_modules/instantsearch.js/es/lib/escape-highlight.js ***!
  \******************************************************************/
/*! exports provided: TAG_PLACEHOLDER, TAG_REPLACEMENT, default, escapeFacets */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"TAG_PLACEHOLDER\", function() { return TAG_PLACEHOLDER; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"TAG_REPLACEMENT\", function() { return TAG_REPLACEMENT; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return escapeHits; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"escapeFacets\", function() { return escapeFacets; });\n/* harmony import */ var _lib_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../lib/utils */ \"./node_modules/instantsearch.js/es/lib/utils/index.js\");\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\n\nvar TAG_PLACEHOLDER = {\n  highlightPreTag: '__ais-highlight__',\n  highlightPostTag: '__/ais-highlight__'\n};\nvar TAG_REPLACEMENT = {\n  highlightPreTag: '<mark>',\n  highlightPostTag: '</mark>'\n};\n\nfunction replaceTagsAndEscape(value) {\n  return Object(_lib_utils__WEBPACK_IMPORTED_MODULE_0__[\"escape\"])(value).replace(new RegExp(TAG_PLACEHOLDER.highlightPreTag, 'g'), TAG_REPLACEMENT.highlightPreTag).replace(new RegExp(TAG_PLACEHOLDER.highlightPostTag, 'g'), TAG_REPLACEMENT.highlightPostTag);\n}\n\nfunction recursiveEscape(input) {\n  if (Object(_lib_utils__WEBPACK_IMPORTED_MODULE_0__[\"isPlainObject\"])(input) && typeof input.value !== 'string') {\n    return Object.keys(input).reduce(function (acc, key) {\n      return _objectSpread({}, acc, _defineProperty({}, key, recursiveEscape(input[key])));\n    }, {});\n  }\n\n  if (Array.isArray(input)) {\n    return input.map(recursiveEscape);\n  }\n\n  return _objectSpread({}, input, {\n    value: replaceTagsAndEscape(input.value)\n  });\n}\n\nfunction escapeHits(hits) {\n  if (hits.__escaped === undefined) {\n    hits = hits.map(function (hit) {\n      if (hit._highlightResult) {\n        hit._highlightResult = recursiveEscape(hit._highlightResult);\n      }\n\n      if (hit._snippetResult) {\n        hit._snippetResult = recursiveEscape(hit._snippetResult);\n      }\n\n      return hit;\n    });\n    hits.__escaped = true;\n  }\n\n  return hits;\n}\nfunction escapeFacets(facetHits) {\n  return facetHits.map(function (h) {\n    return _objectSpread({}, h, {\n      highlighted: replaceTagsAndEscape(h.highlighted)\n    });\n  });\n}\n\n//# sourceURL=webpack:///./node_modules/instantsearch.js/es/lib/escape-highlight.js?");

/***/ }),

/***/ "./node_modules/instantsearch.js/es/lib/routers/history.js":
/*!*****************************************************************!*\
  !*** ./node_modules/instantsearch.js/es/lib/routers/history.js ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var qs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! qs */ \"./node_modules/qs/lib/index.js\");\n/* harmony import */ var qs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(qs__WEBPACK_IMPORTED_MODULE_0__);\nfunction isNativeReflectConstruct() { if (typeof Reflect === \"undefined\" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === \"function\") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }\n\nfunction _construct(Parent, args, Class) { if (isNativeReflectConstruct()) { _construct = Reflect.construct; } else { _construct = function _construct(Parent, args, Class) { var a = [null]; a.push.apply(a, args); var Constructor = Function.bind.apply(Parent, a); var instance = new Constructor(); if (Class) _setPrototypeOf(instance, Class.prototype); return instance; }; } return _construct.apply(null, arguments); }\n\nfunction _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\n\n\nvar defaultCreateURL = function defaultCreateURL(_ref) {\n  var qsModule = _ref.qsModule,\n      routeState = _ref.routeState,\n      location = _ref.location;\n  var protocol = location.protocol,\n      hostname = location.hostname,\n      _location$port = location.port,\n      port = _location$port === void 0 ? '' : _location$port,\n      pathname = location.pathname,\n      hash = location.hash;\n  var queryString = qsModule.stringify(routeState);\n  var portWithPrefix = port === '' ? '' : \":\".concat(port); // IE <= 11 has no proper `location.origin` so we cannot rely on it.\n\n  if (!queryString) {\n    return \"\".concat(protocol, \"//\").concat(hostname).concat(portWithPrefix).concat(pathname).concat(hash);\n  }\n\n  return \"\".concat(protocol, \"//\").concat(hostname).concat(portWithPrefix).concat(pathname, \"?\").concat(queryString).concat(hash);\n};\n\nvar defaultParseURL = function defaultParseURL(_ref2) {\n  var qsModule = _ref2.qsModule,\n      location = _ref2.location;\n  // `qs` by default converts arrays with more than 20 items to an object.\n  // We want to avoid this because the data structure manipulated can therefore vary.\n  // Setting the limit to `100` seems a good number because the engine's default is 100\n  // (it can go up to 1000 but it is very unlikely to select more than 100 items in the UI).\n  //\n  // Using an `arrayLimit` of `n` allows `n + 1` items.\n  //\n  // See:\n  //   - https://github.com/ljharb/qs#parsing-arrays\n  //   - https://www.algolia.com/doc/api-reference/api-parameters/maxValuesPerFacet/\n  return qsModule.parse(location.search.slice(1), {\n    arrayLimit: 99\n  });\n};\n\nvar setWindowTitle = function setWindowTitle(title) {\n  if (title) {\n    window.document.title = title;\n  }\n};\n\nvar BrowserHistory =\n/*#__PURE__*/\nfunction () {\n  /**\n   * Initializes a new storage provider that syncs the search state to the URL\n   * using web APIs (`window.location.pushState` and `onpopstate` event).\n   */\n  function BrowserHistory() {\n    var _ref3 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},\n        windowTitle = _ref3.windowTitle,\n        _ref3$writeDelay = _ref3.writeDelay,\n        writeDelay = _ref3$writeDelay === void 0 ? 400 : _ref3$writeDelay,\n        _ref3$createURL = _ref3.createURL,\n        createURL = _ref3$createURL === void 0 ? defaultCreateURL : _ref3$createURL,\n        _ref3$parseURL = _ref3.parseURL,\n        parseURL = _ref3$parseURL === void 0 ? defaultParseURL : _ref3$parseURL;\n\n    _classCallCheck(this, BrowserHistory);\n\n    _defineProperty(this, \"windowTitle\", void 0);\n\n    _defineProperty(this, \"writeDelay\", void 0);\n\n    _defineProperty(this, \"_createURL\", void 0);\n\n    _defineProperty(this, \"parseURL\", void 0);\n\n    _defineProperty(this, \"writeTimer\", void 0);\n\n    this.windowTitle = windowTitle;\n    this.writeTimer = undefined;\n    this.writeDelay = writeDelay;\n    this._createURL = createURL;\n    this.parseURL = parseURL;\n    var title = this.windowTitle && this.windowTitle(this.read());\n    setWindowTitle(title);\n  }\n  /**\n   * Reads the URL and returns a syncable UI search state.\n   */\n\n\n  _createClass(BrowserHistory, [{\n    key: \"read\",\n    value: function read() {\n      return this.parseURL({\n        qsModule: qs__WEBPACK_IMPORTED_MODULE_0___default.a,\n        location: window.location\n      });\n    }\n    /**\n     * Pushes a search state into the URL.\n     */\n\n  }, {\n    key: \"write\",\n    value: function write(routeState) {\n      var _this = this;\n\n      var url = this.createURL(routeState);\n      var title = this.windowTitle && this.windowTitle(routeState);\n\n      if (this.writeTimer) {\n        window.clearTimeout(this.writeTimer);\n      }\n\n      this.writeTimer = window.setTimeout(function () {\n        setWindowTitle(title);\n        window.history.pushState(routeState, title || '', url);\n        _this.writeTimer = undefined;\n      }, this.writeDelay);\n    }\n    /**\n     * Sets a callback on the `onpopstate` event of the history API of the current page.\n     * It enables the URL sync to keep track of the changes.\n     */\n\n  }, {\n    key: \"onUpdate\",\n    value: function onUpdate(callback) {\n      var _this2 = this;\n\n      this._onPopState = function (event) {\n        if (_this2.writeTimer) {\n          window.clearTimeout(_this2.writeTimer);\n          _this2.writeTimer = undefined;\n        }\n\n        var routeState = event.state; // At initial load, the state is read from the URL without update.\n        // Therefore the state object is not available.\n        // In this case, we fallback and read the URL.\n\n        if (!routeState) {\n          callback(_this2.read());\n        } else {\n          callback(routeState);\n        }\n      };\n\n      window.addEventListener('popstate', this._onPopState);\n    }\n    /**\n     * Creates a complete URL from a given syncable UI state.\n     *\n     * It always generates the full URL, not a relative one.\n     * This allows to handle cases like using a <base href>.\n     * See: https://github.com/algolia/instantsearch.js/issues/790\n     */\n\n  }, {\n    key: \"createURL\",\n    value: function createURL(routeState) {\n      return this._createURL({\n        qsModule: qs__WEBPACK_IMPORTED_MODULE_0___default.a,\n        routeState: routeState,\n        location: window.location\n      });\n    }\n    /**\n     * Removes the event listener and cleans up the URL.\n     */\n\n  }, {\n    key: \"dispose\",\n    value: function dispose() {\n      if (this._onPopState) {\n        window.removeEventListener('popstate', this._onPopState);\n      }\n\n      if (this.writeTimer) {\n        window.clearTimeout(this.writeTimer);\n      }\n\n      this.write({});\n    }\n  }]);\n\n  return BrowserHistory;\n}();\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (function () {\n  for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {\n    args[_key] = arguments[_key];\n  }\n\n  return _construct(BrowserHistory, args);\n});\n\n//# sourceURL=webpack:///./node_modules/instantsearch.js/es/lib/routers/history.js?");

/***/ }),

/***/ "./node_modules/instantsearch.js/es/lib/stateMappings/simple.js":
/*!**********************************************************************!*\
  !*** ./node_modules/instantsearch.js/es/lib/stateMappings/simple.js ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return simpleStateMapping; });\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\nfunction _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }\n\nfunction _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }\n\nfunction getIndexStateWithoutConfigure(uiState) {\n  var configure = uiState.configure,\n      trackedUiState = _objectWithoutProperties(uiState, [\"configure\"]);\n\n  return trackedUiState;\n} // technically a URL could contain any key, since users provide it,\n// which is why the input to this function is UiState, not something\n// which excludes \"configure\" as this function does.\n\n\nfunction simpleStateMapping() {\n  return {\n    stateToRoute: function stateToRoute(uiState) {\n      return Object.keys(uiState).reduce(function (state, indexId) {\n        return _objectSpread({}, state, _defineProperty({}, indexId, getIndexStateWithoutConfigure(uiState[indexId])));\n      }, {});\n    },\n    routeToState: function routeToState() {\n      var routeState = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};\n      return Object.keys(routeState).reduce(function (state, indexId) {\n        return _objectSpread({}, state, _defineProperty({}, indexId, getIndexStateWithoutConfigure(routeState[indexId])));\n      }, {});\n    }\n  };\n}\n\n//# sourceURL=webpack:///./node_modules/instantsearch.js/es/lib/stateMappings/simple.js?");

/***/ }),

/***/ "./node_modules/instantsearch.js/es/lib/suit.js":
/*!******************************************************!*\
  !*** ./node_modules/instantsearch.js/es/lib/suit.js ***!
  \******************************************************/
/*! exports provided: component */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"component\", function() { return component; });\nvar NAMESPACE = 'ais';\nvar component = function component(componentName) {\n  return function () {\n    var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},\n        descendantName = _ref.descendantName,\n        modifierName = _ref.modifierName;\n\n    var descendent = descendantName ? \"-\".concat(descendantName) : '';\n    var modifier = modifierName ? \"--\".concat(modifierName) : '';\n    return \"\".concat(NAMESPACE, \"-\").concat(componentName).concat(descendent).concat(modifier);\n  };\n};\n\n//# sourceURL=webpack:///./node_modules/instantsearch.js/es/lib/suit.js?");

/***/ }),

/***/ "./node_modules/instantsearch.js/es/lib/utils/capitalize.js":
/*!******************************************************************!*\
  !*** ./node_modules/instantsearch.js/es/lib/utils/capitalize.js ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nfunction capitalize(text) {\n  return text.toString().charAt(0).toUpperCase() + text.toString().slice(1);\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (capitalize);\n\n//# sourceURL=webpack:///./node_modules/instantsearch.js/es/lib/utils/capitalize.js?");

/***/ }),

/***/ "./node_modules/instantsearch.js/es/lib/utils/checkRendering.js":
/*!**********************************************************************!*\
  !*** ./node_modules/instantsearch.js/es/lib/utils/checkRendering.js ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _getObjectType__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./getObjectType */ \"./node_modules/instantsearch.js/es/lib/utils/getObjectType.js\");\n\n\nfunction checkRendering(rendering, usage) {\n  if (rendering === undefined || typeof rendering !== 'function') {\n    throw new Error(\"The render function is not valid (received type \".concat(Object(_getObjectType__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(rendering), \").\\n\\n\").concat(usage));\n  }\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (checkRendering);\n\n//# sourceURL=webpack:///./node_modules/instantsearch.js/es/lib/utils/checkRendering.js?");

/***/ }),

/***/ "./node_modules/instantsearch.js/es/lib/utils/clearRefinements.js":
/*!************************************************************************!*\
  !*** ./node_modules/instantsearch.js/es/lib/utils/clearRefinements.js ***!
  \************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/**\n * Clears the refinements of a SearchParameters object based on rules provided.\n * The included attributes list is applied before the excluded attributes list. If the list\n * is not provided, this list of all the currently refined attributes is used as included attributes.\n * @param {object} $0 parameters\n * @param {Helper} $0.helper instance of the Helper\n * @param {string[]} [$0.attributesToClear = []] list of parameters to clear\n * @returns {SearchParameters} search parameters with refinements cleared\n */\nfunction clearRefinements(_ref) {\n  var helper = _ref.helper,\n      _ref$attributesToClea = _ref.attributesToClear,\n      attributesToClear = _ref$attributesToClea === void 0 ? [] : _ref$attributesToClea;\n  var finalState = helper.state.setPage(0);\n  finalState = attributesToClear.reduce(function (state, attribute) {\n    if (finalState.isNumericRefined(attribute)) {\n      return state.removeNumericRefinement(attribute);\n    }\n\n    if (finalState.isHierarchicalFacet(attribute)) {\n      return state.removeHierarchicalFacetRefinement(attribute);\n    }\n\n    if (finalState.isDisjunctiveFacet(attribute)) {\n      return state.removeDisjunctiveFacetRefinement(attribute);\n    }\n\n    if (finalState.isConjunctiveFacet(attribute)) {\n      return state.removeFacetRefinement(attribute);\n    }\n\n    return state;\n  }, finalState);\n\n  if (attributesToClear.indexOf('query') !== -1) {\n    finalState = finalState.setQuery('');\n  }\n\n  return finalState;\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (clearRefinements);\n\n//# sourceURL=webpack:///./node_modules/instantsearch.js/es/lib/utils/clearRefinements.js?");

/***/ }),

/***/ "./node_modules/instantsearch.js/es/lib/utils/defer.js":
/*!*************************************************************!*\
  !*** ./node_modules/instantsearch.js/es/lib/utils/defer.js ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nvar nextMicroTask = Promise.resolve();\n\nvar defer = function defer(callback) {\n  var progress = null;\n  var cancelled = false;\n\n  var fn = function fn() {\n    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {\n      args[_key] = arguments[_key];\n    }\n\n    if (progress !== null) {\n      return;\n    }\n\n    progress = nextMicroTask.then(function () {\n      progress = null;\n\n      if (cancelled) {\n        cancelled = false;\n        return;\n      }\n\n      callback.apply(void 0, args);\n    });\n  };\n\n  fn.wait = function () {\n    if (progress === null) {\n      throw new Error('The deferred function should be called before calling `wait()`');\n    }\n\n    return progress;\n  };\n\n  fn.cancel = function () {\n    if (progress === null) {\n      return;\n    }\n\n    cancelled = true;\n  };\n\n  return fn;\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (defer);\n\n//# sourceURL=webpack:///./node_modules/instantsearch.js/es/lib/utils/defer.js?");

/***/ }),

/***/ "./node_modules/instantsearch.js/es/lib/utils/detect-insights-client.js":
/*!******************************************************************************!*\
  !*** ./node_modules/instantsearch.js/es/lib/utils/detect-insights-client.js ***!
  \******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return hasDetectedInsightsClient; });\nfunction hasDetectedInsightsClient() {\n  return typeof window !== 'undefined' && Boolean(window.AlgoliaAnalyticsObject);\n}\n\n//# sourceURL=webpack:///./node_modules/instantsearch.js/es/lib/utils/detect-insights-client.js?");

/***/ }),

/***/ "./node_modules/instantsearch.js/es/lib/utils/documentation.js":
/*!*********************************************************************!*\
  !*** ./node_modules/instantsearch.js/es/lib/utils/documentation.js ***!
  \*********************************************************************/
/*! exports provided: createDocumentationLink, createDocumentationMessageGenerator */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"createDocumentationLink\", function() { return createDocumentationLink; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"createDocumentationMessageGenerator\", function() { return createDocumentationMessageGenerator; });\nvar createDocumentationLink = function createDocumentationLink(_ref) {\n  var name = _ref.name,\n      _ref$connector = _ref.connector,\n      connector = _ref$connector === void 0 ? false : _ref$connector;\n  return ['https://www.algolia.com/doc/api-reference/widgets/', name, '/js/', connector ? '#connector' : ''].join('');\n};\nvar createDocumentationMessageGenerator = function createDocumentationMessageGenerator() {\n  for (var _len = arguments.length, widgets = new Array(_len), _key = 0; _key < _len; _key++) {\n    widgets[_key] = arguments[_key];\n  }\n\n  var links = widgets.map(function (widget) {\n    return createDocumentationLink(widget);\n  }).join(', ');\n  return function (message) {\n    return [message, \"See documentation: \".concat(links)].filter(Boolean).join('\\n\\n');\n  };\n};\n\n//# sourceURL=webpack:///./node_modules/instantsearch.js/es/lib/utils/documentation.js?");

/***/ }),

/***/ "./node_modules/instantsearch.js/es/lib/utils/escape.js":
/*!**************************************************************!*\
  !*** ./node_modules/instantsearch.js/es/lib/utils/escape.js ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/**\n * This implementation is taken from Lodash implementation.\n * See: https://github.com/lodash/lodash/blob/4.17.11-npm/escape.js\n */\n// Used to map characters to HTML entities.\nvar htmlEscapes = {\n  '&': '&amp;',\n  '<': '&lt;',\n  '>': '&gt;',\n  '\"': '&quot;',\n  \"'\": '&#39;'\n}; // Used to match HTML entities and HTML characters.\n\nvar regexUnescapedHtml = /[&<>\"']/g;\nvar regexHasUnescapedHtml = RegExp(regexUnescapedHtml.source);\n/**\n * Converts the characters \"&\", \"<\", \">\", '\"', and \"'\" in `string` to their\n * corresponding HTML entities.\n */\n\nfunction escape(value) {\n  return value && regexHasUnescapedHtml.test(value) ? value.replace(regexUnescapedHtml, function (character) {\n    return htmlEscapes[character];\n  }) : value;\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (escape);\n\n//# sourceURL=webpack:///./node_modules/instantsearch.js/es/lib/utils/escape.js?");

/***/ }),

/***/ "./node_modules/instantsearch.js/es/lib/utils/escapeRefinement.js":
/*!************************************************************************!*\
  !*** ./node_modules/instantsearch.js/es/lib/utils/escapeRefinement.js ***!
  \************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nfunction escapeRefinement(value) {\n  if (typeof value === 'number' && value < 0) {\n    value = String(value).replace(/^-/, '\\\\-');\n  }\n\n  return value;\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (escapeRefinement);\n\n//# sourceURL=webpack:///./node_modules/instantsearch.js/es/lib/utils/escapeRefinement.js?");

/***/ }),

/***/ "./node_modules/instantsearch.js/es/lib/utils/find.js":
/*!************************************************************!*\
  !*** ./node_modules/instantsearch.js/es/lib/utils/find.js ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n// We aren't using the native `Array.prototype.find` because the refactor away from Lodash is not\n// published as a major version.\n// Relying on the `find` polyfill on user-land, which before was only required for niche use-cases,\n// was decided as too risky.\n// @MAJOR Replace with the native `Array.prototype.find` method\n// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/find\nfunction find(items, predicate, thisArg) {\n  if (!Array.prototype.find) {\n    return items.filter(predicate, thisArg)[0];\n  }\n\n  return items.find(predicate, thisArg);\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (find);\n\n//# sourceURL=webpack:///./node_modules/instantsearch.js/es/lib/utils/find.js?");

/***/ }),

/***/ "./node_modules/instantsearch.js/es/lib/utils/findIndex.js":
/*!*****************************************************************!*\
  !*** ./node_modules/instantsearch.js/es/lib/utils/findIndex.js ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n// We aren't using the native `Array.prototype.findIndex` because the refactor away from Lodash is not\n// published as a major version.\n// Relying on the `findIndex` polyfill on user-land, which before was only required for niche use-cases,\n// was decided as too risky.\n// @MAJOR Replace with the native `Array.prototype.findIndex` method\n// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/findIndex\nfunction findIndex(array, comparator) {\n  if (!Array.isArray(array)) {\n    return -1;\n  }\n\n  for (var i = 0; i < array.length; i++) {\n    if (comparator(array[i])) {\n      return i;\n    }\n  }\n\n  return -1;\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (findIndex);\n\n//# sourceURL=webpack:///./node_modules/instantsearch.js/es/lib/utils/findIndex.js?");

/***/ }),

/***/ "./node_modules/instantsearch.js/es/lib/utils/geo-search.js":
/*!******************************************************************!*\
  !*** ./node_modules/instantsearch.js/es/lib/utils/geo-search.js ***!
  \******************************************************************/
/*! exports provided: aroundLatLngToPosition, insideBoundingBoxArrayToBoundingBox, insideBoundingBoxStringToBoundingBox, insideBoundingBoxToBoundingBox */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"aroundLatLngToPosition\", function() { return aroundLatLngToPosition; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"insideBoundingBoxArrayToBoundingBox\", function() { return insideBoundingBoxArrayToBoundingBox; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"insideBoundingBoxStringToBoundingBox\", function() { return insideBoundingBoxStringToBoundingBox; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"insideBoundingBoxToBoundingBox\", function() { return insideBoundingBoxToBoundingBox; });\nfunction _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }\n\nfunction _nonIterableRest() { throw new TypeError(\"Invalid attempt to destructure non-iterable instance\"); }\n\nfunction _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === \"[object Arguments]\")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i[\"return\"] != null) _i[\"return\"](); } finally { if (_d) throw _e; } } return _arr; }\n\nfunction _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }\n\nvar latLngRegExp = /^(-?\\d+(?:\\.\\d+)?),\\s*(-?\\d+(?:\\.\\d+)?)$/;\nfunction aroundLatLngToPosition(value) {\n  var pattern = value.match(latLngRegExp); // Since the value provided is the one send with the request, the API should\n  // throw an error due to the wrong format. So throw an error should be safe.\n\n  if (!pattern) {\n    throw new Error(\"Invalid value for \\\"aroundLatLng\\\" parameter: \\\"\".concat(value, \"\\\"\"));\n  }\n\n  return {\n    lat: parseFloat(pattern[1]),\n    lng: parseFloat(pattern[2])\n  };\n}\nfunction insideBoundingBoxArrayToBoundingBox(value) {\n  var _value = _slicedToArray(value, 1),\n      _value$ = _value[0];\n\n  _value$ = _value$ === void 0 ? [undefined, undefined, undefined, undefined] : _value$;\n\n  var _value$2 = _slicedToArray(_value$, 4),\n      neLat = _value$2[0],\n      neLng = _value$2[1],\n      swLat = _value$2[2],\n      swLng = _value$2[3]; // Since the value provided is the one send with the request, the API should\n  // throw an error due to the wrong format. So throw an error should be safe.\n\n\n  if (!neLat || !neLng || !swLat || !swLng) {\n    throw new Error(\"Invalid value for \\\"insideBoundingBox\\\" parameter: [\".concat(value, \"]\"));\n  }\n\n  return {\n    northEast: {\n      lat: neLat,\n      lng: neLng\n    },\n    southWest: {\n      lat: swLat,\n      lng: swLng\n    }\n  };\n}\nfunction insideBoundingBoxStringToBoundingBox(value) {\n  var _value$split$map = value.split(',').map(parseFloat),\n      _value$split$map2 = _slicedToArray(_value$split$map, 4),\n      neLat = _value$split$map2[0],\n      neLng = _value$split$map2[1],\n      swLat = _value$split$map2[2],\n      swLng = _value$split$map2[3]; // Since the value provided is the one send with the request, the API should\n  // throw an error due to the wrong format. So throw an error should be safe.\n\n\n  if (!neLat || !neLng || !swLat || !swLng) {\n    throw new Error(\"Invalid value for \\\"insideBoundingBox\\\" parameter: \\\"\".concat(value, \"\\\"\"));\n  }\n\n  return {\n    northEast: {\n      lat: neLat,\n      lng: neLng\n    },\n    southWest: {\n      lat: swLat,\n      lng: swLng\n    }\n  };\n}\nfunction insideBoundingBoxToBoundingBox(value) {\n  if (Array.isArray(value)) {\n    return insideBoundingBoxArrayToBoundingBox(value);\n  }\n\n  return insideBoundingBoxStringToBoundingBox(value);\n}\n\n//# sourceURL=webpack:///./node_modules/instantsearch.js/es/lib/utils/geo-search.js?");

/***/ }),

/***/ "./node_modules/instantsearch.js/es/lib/utils/getContainerNode.js":
/*!************************************************************************!*\
  !*** ./node_modules/instantsearch.js/es/lib/utils/getContainerNode.js ***!
  \************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _isDomElement__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./isDomElement */ \"./node_modules/instantsearch.js/es/lib/utils/isDomElement.js\");\n\n/**\n * Return the container. If it's a string, it is considered a\n * css selector and retrieves the first matching element. Otherwise\n * test if it validates that it's a correct DOMElement.\n *\n * @param {string|HTMLElement} selectorOrHTMLElement CSS Selector or container node.\n * @return {HTMLElement} Container node\n * @throws Error when the type is not correct\n */\n\nfunction getContainerNode(selectorOrHTMLElement) {\n  var isSelectorString = typeof selectorOrHTMLElement === 'string';\n  var domElement = isSelectorString ? document.querySelector(selectorOrHTMLElement) : selectorOrHTMLElement;\n\n  if (!Object(_isDomElement__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(domElement)) {\n    var errorMessage = 'Container must be `string` or `HTMLElement`.';\n\n    if (isSelectorString) {\n      errorMessage += \" Unable to find \".concat(selectorOrHTMLElement);\n    }\n\n    throw new Error(errorMessage);\n  }\n\n  return domElement;\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (getContainerNode);\n\n//# sourceURL=webpack:///./node_modules/instantsearch.js/es/lib/utils/getContainerNode.js?");

/***/ }),

/***/ "./node_modules/instantsearch.js/es/lib/utils/getObjectType.js":
/*!*********************************************************************!*\
  !*** ./node_modules/instantsearch.js/es/lib/utils/getObjectType.js ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nfunction getObjectType(object) {\n  return Object.prototype.toString.call(object).slice(8, -1);\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (getObjectType);\n\n//# sourceURL=webpack:///./node_modules/instantsearch.js/es/lib/utils/getObjectType.js?");

/***/ }),

/***/ "./node_modules/instantsearch.js/es/lib/utils/getPropertyByPath.js":
/*!*************************************************************************!*\
  !*** ./node_modules/instantsearch.js/es/lib/utils/getPropertyByPath.js ***!
  \*************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nfunction getPropertyByPath(object, path) {\n  var parts = path.split('.');\n  return parts.reduce(function (current, key) {\n    return current && current[key];\n  }, object);\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (getPropertyByPath);\n\n//# sourceURL=webpack:///./node_modules/instantsearch.js/es/lib/utils/getPropertyByPath.js?");

/***/ }),

/***/ "./node_modules/instantsearch.js/es/lib/utils/getRefinements.js":
/*!**********************************************************************!*\
  !*** ./node_modules/instantsearch.js/es/lib/utils/getRefinements.js ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _find__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./find */ \"./node_modules/instantsearch.js/es/lib/utils/find.js\");\n/* harmony import */ var _unescapeRefinement__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./unescapeRefinement */ \"./node_modules/instantsearch.js/es/lib/utils/unescapeRefinement.js\");\n\n\n\nfunction getRefinement(state, type, attribute, name) {\n  var resultsFacets = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : [];\n  var res = {\n    type: type,\n    attribute: attribute,\n    name: name\n  };\n  var facet = Object(_find__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(resultsFacets, function (resultsFacet) {\n    return resultsFacet.name === attribute;\n  });\n  var count;\n\n  if (type === 'hierarchical') {\n    (function () {\n      var facetDeclaration = state.getHierarchicalFacetByName(attribute);\n      var nameParts = name.split(facetDeclaration.separator);\n\n      var getFacetRefinement = function getFacetRefinement(facetData) {\n        return function (refinementKey) {\n          return facetData[refinementKey];\n        };\n      };\n\n      var _loop = function _loop(i) {\n        facet = facet && facet.data && Object(_find__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(Object.keys(facet.data).map(getFacetRefinement(facet.data)), function (refinement) {\n          return refinement.name === nameParts[i];\n        });\n      };\n\n      for (var i = 0; facet !== undefined && i < nameParts.length; ++i) {\n        _loop(i);\n      }\n\n      count = facet && facet.count;\n    })();\n  } else {\n    count = facet && facet.data && facet.data[res.name];\n  }\n\n  var exhaustive = facet && facet.exhaustive;\n\n  if (count !== undefined) {\n    res.count = count;\n  }\n\n  if (exhaustive !== undefined) {\n    res.exhaustive = exhaustive;\n  }\n\n  return res;\n}\n\nfunction getRefinements(results, state) {\n  var clearsQuery = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;\n  var refinements = [];\n  var _state$facetsRefineme = state.facetsRefinements,\n      facetsRefinements = _state$facetsRefineme === void 0 ? {} : _state$facetsRefineme,\n      _state$facetsExcludes = state.facetsExcludes,\n      facetsExcludes = _state$facetsExcludes === void 0 ? {} : _state$facetsExcludes,\n      _state$disjunctiveFac = state.disjunctiveFacetsRefinements,\n      disjunctiveFacetsRefinements = _state$disjunctiveFac === void 0 ? {} : _state$disjunctiveFac,\n      _state$hierarchicalFa = state.hierarchicalFacetsRefinements,\n      hierarchicalFacetsRefinements = _state$hierarchicalFa === void 0 ? {} : _state$hierarchicalFa,\n      _state$numericRefinem = state.numericRefinements,\n      numericRefinements = _state$numericRefinem === void 0 ? {} : _state$numericRefinem,\n      _state$tagRefinements = state.tagRefinements,\n      tagRefinements = _state$tagRefinements === void 0 ? [] : _state$tagRefinements;\n  Object.keys(facetsRefinements).forEach(function (attribute) {\n    var refinementNames = facetsRefinements[attribute];\n    refinementNames.forEach(function (refinementName) {\n      refinements.push(getRefinement(state, 'facet', attribute, refinementName, results.facets));\n    });\n  });\n  Object.keys(facetsExcludes).forEach(function (attribute) {\n    var refinementNames = facetsExcludes[attribute];\n    refinementNames.forEach(function (refinementName) {\n      refinements.push({\n        type: 'exclude',\n        attribute: attribute,\n        name: refinementName,\n        exclude: true\n      });\n    });\n  });\n  Object.keys(disjunctiveFacetsRefinements).forEach(function (attribute) {\n    var refinementNames = disjunctiveFacetsRefinements[attribute];\n    refinementNames.forEach(function (refinementName) {\n      refinements.push(getRefinement(state, 'disjunctive', attribute, // We unescape any disjunctive refined values with `unescapeRefinement` because\n      // they can be escaped on negative numeric values with `escapeRefinement`.\n      Object(_unescapeRefinement__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(refinementName), results.disjunctiveFacets));\n    });\n  });\n  Object.keys(hierarchicalFacetsRefinements).forEach(function (attribute) {\n    var refinementNames = hierarchicalFacetsRefinements[attribute];\n    refinementNames.forEach(function (refinement) {\n      refinements.push(getRefinement(state, 'hierarchical', attribute, refinement, results.hierarchicalFacets));\n    });\n  });\n  Object.keys(numericRefinements).forEach(function (attribute) {\n    var operators = numericRefinements[attribute];\n    Object.keys(operators).forEach(function (operatorOriginal) {\n      var operator = operatorOriginal;\n      var valueOrValues = operators[operator];\n      var refinementNames = Array.isArray(valueOrValues) ? valueOrValues : [valueOrValues];\n      refinementNames.forEach(function (refinementName) {\n        refinements.push({\n          type: 'numeric',\n          attribute: attribute,\n          name: \"\".concat(refinementName),\n          numericValue: refinementName,\n          operator: operator\n        });\n      });\n    });\n  });\n  tagRefinements.forEach(function (refinementName) {\n    refinements.push({\n      type: 'tag',\n      attribute: '_tags',\n      name: refinementName\n    });\n  });\n\n  if (clearsQuery && state.query && state.query.trim()) {\n    refinements.push({\n      attribute: 'query',\n      type: 'query',\n      name: state.query,\n      query: state.query\n    });\n  }\n\n  return refinements;\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (getRefinements);\n\n//# sourceURL=webpack:///./node_modules/instantsearch.js/es/lib/utils/getRefinements.js?");

/***/ }),

/***/ "./node_modules/instantsearch.js/es/lib/utils/hits-absolute-position.js":
/*!******************************************************************************!*\
  !*** ./node_modules/instantsearch.js/es/lib/utils/hits-absolute-position.js ***!
  \******************************************************************************/
/*! exports provided: addAbsolutePosition */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"addAbsolutePosition\", function() { return addAbsolutePosition; });\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\nvar addAbsolutePosition = function addAbsolutePosition(hits, page, hitsPerPage) {\n  return hits.map(function (hit, idx) {\n    return _objectSpread({}, hit, {\n      __position: hitsPerPage * page + idx + 1\n    });\n  });\n};\n\n//# sourceURL=webpack:///./node_modules/instantsearch.js/es/lib/utils/hits-absolute-position.js?");

/***/ }),

/***/ "./node_modules/instantsearch.js/es/lib/utils/hits-query-id.js":
/*!*********************************************************************!*\
  !*** ./node_modules/instantsearch.js/es/lib/utils/hits-query-id.js ***!
  \*********************************************************************/
/*! exports provided: addQueryID */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"addQueryID\", function() { return addQueryID; });\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\nvar addQueryID = function addQueryID(hits, queryID) {\n  if (!queryID) {\n    return hits;\n  }\n\n  return hits.map(function (hit) {\n    return _objectSpread({}, hit, {\n      __queryID: queryID\n    });\n  });\n};\n\n//# sourceURL=webpack:///./node_modules/instantsearch.js/es/lib/utils/hits-query-id.js?");

/***/ }),

/***/ "./node_modules/instantsearch.js/es/lib/utils/index.js":
/*!*************************************************************!*\
  !*** ./node_modules/instantsearch.js/es/lib/utils/index.js ***!
  \*************************************************************/
/*! exports provided: capitalize, defer, isDomElement, getContainerNode, isSpecialClick, prepareTemplateProps, renderTemplate, getRefinements, clearRefinements, escapeRefinement, unescapeRefinement, checkRendering, getPropertyByPath, getObjectType, noop, isFiniteNumber, isPlainObject, uniq, range, isEqual, escape, find, findIndex, mergeSearchParameters, resolveSearchParameters, warning, deprecate, createDocumentationLink, createDocumentationMessageGenerator, aroundLatLngToPosition, insideBoundingBoxToBoundingBox, addAbsolutePosition, addQueryID */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _capitalize__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./capitalize */ \"./node_modules/instantsearch.js/es/lib/utils/capitalize.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"capitalize\", function() { return _capitalize__WEBPACK_IMPORTED_MODULE_0__[\"default\"]; });\n\n/* harmony import */ var _defer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./defer */ \"./node_modules/instantsearch.js/es/lib/utils/defer.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"defer\", function() { return _defer__WEBPACK_IMPORTED_MODULE_1__[\"default\"]; });\n\n/* harmony import */ var _isDomElement__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./isDomElement */ \"./node_modules/instantsearch.js/es/lib/utils/isDomElement.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"isDomElement\", function() { return _isDomElement__WEBPACK_IMPORTED_MODULE_2__[\"default\"]; });\n\n/* harmony import */ var _getContainerNode__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./getContainerNode */ \"./node_modules/instantsearch.js/es/lib/utils/getContainerNode.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"getContainerNode\", function() { return _getContainerNode__WEBPACK_IMPORTED_MODULE_3__[\"default\"]; });\n\n/* harmony import */ var _isSpecialClick__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./isSpecialClick */ \"./node_modules/instantsearch.js/es/lib/utils/isSpecialClick.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"isSpecialClick\", function() { return _isSpecialClick__WEBPACK_IMPORTED_MODULE_4__[\"default\"]; });\n\n/* harmony import */ var _prepareTemplateProps__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./prepareTemplateProps */ \"./node_modules/instantsearch.js/es/lib/utils/prepareTemplateProps.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"prepareTemplateProps\", function() { return _prepareTemplateProps__WEBPACK_IMPORTED_MODULE_5__[\"default\"]; });\n\n/* harmony import */ var _renderTemplate__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./renderTemplate */ \"./node_modules/instantsearch.js/es/lib/utils/renderTemplate.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"renderTemplate\", function() { return _renderTemplate__WEBPACK_IMPORTED_MODULE_6__[\"default\"]; });\n\n/* harmony import */ var _getRefinements__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./getRefinements */ \"./node_modules/instantsearch.js/es/lib/utils/getRefinements.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"getRefinements\", function() { return _getRefinements__WEBPACK_IMPORTED_MODULE_7__[\"default\"]; });\n\n/* harmony import */ var _clearRefinements__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./clearRefinements */ \"./node_modules/instantsearch.js/es/lib/utils/clearRefinements.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"clearRefinements\", function() { return _clearRefinements__WEBPACK_IMPORTED_MODULE_8__[\"default\"]; });\n\n/* harmony import */ var _escapeRefinement__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./escapeRefinement */ \"./node_modules/instantsearch.js/es/lib/utils/escapeRefinement.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"escapeRefinement\", function() { return _escapeRefinement__WEBPACK_IMPORTED_MODULE_9__[\"default\"]; });\n\n/* harmony import */ var _unescapeRefinement__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./unescapeRefinement */ \"./node_modules/instantsearch.js/es/lib/utils/unescapeRefinement.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"unescapeRefinement\", function() { return _unescapeRefinement__WEBPACK_IMPORTED_MODULE_10__[\"default\"]; });\n\n/* harmony import */ var _checkRendering__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./checkRendering */ \"./node_modules/instantsearch.js/es/lib/utils/checkRendering.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"checkRendering\", function() { return _checkRendering__WEBPACK_IMPORTED_MODULE_11__[\"default\"]; });\n\n/* harmony import */ var _getPropertyByPath__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./getPropertyByPath */ \"./node_modules/instantsearch.js/es/lib/utils/getPropertyByPath.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"getPropertyByPath\", function() { return _getPropertyByPath__WEBPACK_IMPORTED_MODULE_12__[\"default\"]; });\n\n/* harmony import */ var _getObjectType__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./getObjectType */ \"./node_modules/instantsearch.js/es/lib/utils/getObjectType.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"getObjectType\", function() { return _getObjectType__WEBPACK_IMPORTED_MODULE_13__[\"default\"]; });\n\n/* harmony import */ var _noop__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./noop */ \"./node_modules/instantsearch.js/es/lib/utils/noop.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"noop\", function() { return _noop__WEBPACK_IMPORTED_MODULE_14__[\"default\"]; });\n\n/* harmony import */ var _isFiniteNumber__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./isFiniteNumber */ \"./node_modules/instantsearch.js/es/lib/utils/isFiniteNumber.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"isFiniteNumber\", function() { return _isFiniteNumber__WEBPACK_IMPORTED_MODULE_15__[\"default\"]; });\n\n/* harmony import */ var _isPlainObject__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./isPlainObject */ \"./node_modules/instantsearch.js/es/lib/utils/isPlainObject.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"isPlainObject\", function() { return _isPlainObject__WEBPACK_IMPORTED_MODULE_16__[\"default\"]; });\n\n/* harmony import */ var _uniq__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./uniq */ \"./node_modules/instantsearch.js/es/lib/utils/uniq.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"uniq\", function() { return _uniq__WEBPACK_IMPORTED_MODULE_17__[\"default\"]; });\n\n/* harmony import */ var _range__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./range */ \"./node_modules/instantsearch.js/es/lib/utils/range.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"range\", function() { return _range__WEBPACK_IMPORTED_MODULE_18__[\"default\"]; });\n\n/* harmony import */ var _isEqual__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./isEqual */ \"./node_modules/instantsearch.js/es/lib/utils/isEqual.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"isEqual\", function() { return _isEqual__WEBPACK_IMPORTED_MODULE_19__[\"default\"]; });\n\n/* harmony import */ var _escape__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./escape */ \"./node_modules/instantsearch.js/es/lib/utils/escape.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"escape\", function() { return _escape__WEBPACK_IMPORTED_MODULE_20__[\"default\"]; });\n\n/* harmony import */ var _find__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./find */ \"./node_modules/instantsearch.js/es/lib/utils/find.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"find\", function() { return _find__WEBPACK_IMPORTED_MODULE_21__[\"default\"]; });\n\n/* harmony import */ var _findIndex__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./findIndex */ \"./node_modules/instantsearch.js/es/lib/utils/findIndex.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"findIndex\", function() { return _findIndex__WEBPACK_IMPORTED_MODULE_22__[\"default\"]; });\n\n/* harmony import */ var _mergeSearchParameters__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./mergeSearchParameters */ \"./node_modules/instantsearch.js/es/lib/utils/mergeSearchParameters.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"mergeSearchParameters\", function() { return _mergeSearchParameters__WEBPACK_IMPORTED_MODULE_23__[\"default\"]; });\n\n/* harmony import */ var _resolveSearchParameters__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./resolveSearchParameters */ \"./node_modules/instantsearch.js/es/lib/utils/resolveSearchParameters.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"resolveSearchParameters\", function() { return _resolveSearchParameters__WEBPACK_IMPORTED_MODULE_24__[\"default\"]; });\n\n/* harmony import */ var _logger__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./logger */ \"./node_modules/instantsearch.js/es/lib/utils/logger.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"warning\", function() { return _logger__WEBPACK_IMPORTED_MODULE_25__[\"warning\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"deprecate\", function() { return _logger__WEBPACK_IMPORTED_MODULE_25__[\"deprecate\"]; });\n\n/* harmony import */ var _documentation__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./documentation */ \"./node_modules/instantsearch.js/es/lib/utils/documentation.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"createDocumentationLink\", function() { return _documentation__WEBPACK_IMPORTED_MODULE_26__[\"createDocumentationLink\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"createDocumentationMessageGenerator\", function() { return _documentation__WEBPACK_IMPORTED_MODULE_26__[\"createDocumentationMessageGenerator\"]; });\n\n/* harmony import */ var _geo_search__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./geo-search */ \"./node_modules/instantsearch.js/es/lib/utils/geo-search.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"aroundLatLngToPosition\", function() { return _geo_search__WEBPACK_IMPORTED_MODULE_27__[\"aroundLatLngToPosition\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"insideBoundingBoxToBoundingBox\", function() { return _geo_search__WEBPACK_IMPORTED_MODULE_27__[\"insideBoundingBoxToBoundingBox\"]; });\n\n/* harmony import */ var _hits_absolute_position__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./hits-absolute-position */ \"./node_modules/instantsearch.js/es/lib/utils/hits-absolute-position.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"addAbsolutePosition\", function() { return _hits_absolute_position__WEBPACK_IMPORTED_MODULE_28__[\"addAbsolutePosition\"]; });\n\n/* harmony import */ var _hits_query_id__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./hits-query-id */ \"./node_modules/instantsearch.js/es/lib/utils/hits-query-id.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"addQueryID\", function() { return _hits_query_id__WEBPACK_IMPORTED_MODULE_29__[\"addQueryID\"]; });\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n//# sourceURL=webpack:///./node_modules/instantsearch.js/es/lib/utils/index.js?");

/***/ }),

/***/ "./node_modules/instantsearch.js/es/lib/utils/isDomElement.js":
/*!********************************************************************!*\
  !*** ./node_modules/instantsearch.js/es/lib/utils/isDomElement.js ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nfunction isDomElement(object) {\n  return object instanceof HTMLElement || Boolean(object) && object.nodeType > 0;\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (isDomElement);\n\n//# sourceURL=webpack:///./node_modules/instantsearch.js/es/lib/utils/isDomElement.js?");

/***/ }),

/***/ "./node_modules/instantsearch.js/es/lib/utils/isEqual.js":
/*!***************************************************************!*\
  !*** ./node_modules/instantsearch.js/es/lib/utils/isEqual.js ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nfunction isPrimitive(obj) {\n  return obj !== Object(obj);\n}\n\nfunction isEqual(first, second) {\n  if (first === second) {\n    return true;\n  }\n\n  if (isPrimitive(first) || isPrimitive(second) || typeof first === 'function' || typeof second === 'function') {\n    return first === second;\n  }\n\n  if (Object.keys(first).length !== Object.keys(second).length) {\n    return false;\n  }\n\n  for (var _i = 0, _Object$keys = Object.keys(first); _i < _Object$keys.length; _i++) {\n    var key = _Object$keys[_i];\n\n    if (!(key in second)) {\n      return false;\n    }\n\n    if (!isEqual(first[key], second[key])) {\n      return false;\n    }\n  }\n\n  return true;\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (isEqual);\n\n//# sourceURL=webpack:///./node_modules/instantsearch.js/es/lib/utils/isEqual.js?");

/***/ }),

/***/ "./node_modules/instantsearch.js/es/lib/utils/isFiniteNumber.js":
/*!**********************************************************************!*\
  !*** ./node_modules/instantsearch.js/es/lib/utils/isFiniteNumber.js ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n// This is the `Number.isFinite()` polyfill recommended by MDN.\n// We do not provide any tests for this function.\n// See: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/isFinite#Polyfill\nfunction isFiniteNumber(value) {\n  return typeof value === 'number' && isFinite(value);\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (isFiniteNumber);\n\n//# sourceURL=webpack:///./node_modules/instantsearch.js/es/lib/utils/isFiniteNumber.js?");

/***/ }),

/***/ "./node_modules/instantsearch.js/es/lib/utils/isPlainObject.js":
/*!*********************************************************************!*\
  !*** ./node_modules/instantsearch.js/es/lib/utils/isPlainObject.js ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nfunction _typeof(obj) { if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof(obj); }\n\n/**\n * This implementation is taken from Lodash implementation.\n * See: https://github.com/lodash/lodash/blob/master/isPlainObject.js\n */\nfunction getTag(value) {\n  if (value === null) {\n    return value === undefined ? '[object Undefined]' : '[object Null]';\n  }\n\n  return Object.prototype.toString.call(value);\n}\n\nfunction isObjectLike(value) {\n  return _typeof(value) === 'object' && value !== null;\n}\n/**\n * Checks if `value` is a plain object.\n *\n * A plain object is an object created by the `Object`\n * constructor or with a `[[Prototype]]` of `null`.\n */\n\n\nfunction isPlainObject(value) {\n  if (!isObjectLike(value) || getTag(value) !== '[object Object]') {\n    return false;\n  }\n\n  if (Object.getPrototypeOf(value) === null) {\n    return true;\n  }\n\n  var proto = value;\n\n  while (Object.getPrototypeOf(proto) !== null) {\n    proto = Object.getPrototypeOf(proto);\n  }\n\n  return Object.getPrototypeOf(value) === proto;\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (isPlainObject);\n\n//# sourceURL=webpack:///./node_modules/instantsearch.js/es/lib/utils/isPlainObject.js?");

/***/ }),

/***/ "./node_modules/instantsearch.js/es/lib/utils/isSpecialClick.js":
/*!**********************************************************************!*\
  !*** ./node_modules/instantsearch.js/es/lib/utils/isSpecialClick.js ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nfunction isSpecialClick(event) {\n  var isMiddleClick = event.button === 1;\n  return isMiddleClick || event.altKey || event.ctrlKey || event.metaKey || event.shiftKey;\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (isSpecialClick);\n\n//# sourceURL=webpack:///./node_modules/instantsearch.js/es/lib/utils/isSpecialClick.js?");

/***/ }),

/***/ "./node_modules/instantsearch.js/es/lib/utils/logger.js":
/*!**************************************************************!*\
  !*** ./node_modules/instantsearch.js/es/lib/utils/logger.js ***!
  \**************************************************************/
/*! exports provided: warn, deprecate, warning */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"warn\", function() { return warn; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"deprecate\", function() { return deprecate; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"warning\", function() { return _warning; });\n/* harmony import */ var _noop__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./noop */ \"./node_modules/instantsearch.js/es/lib/utils/noop.js\");\n\n\n/**\n * Logs a warning when this function is called, in development environment only.\n */\nvar deprecate = function deprecate(fn) {\n  return fn;\n};\n/**\n * Logs a warning\n * This is used to log issues in development environment only.\n */\n\n\nvar warn = _noop__WEBPACK_IMPORTED_MODULE_0__[\"default\"];\n/**\n * Logs a warning if the condition is not met.\n * This is used to log issues in development environment only.\n */\n\nvar _warning = _noop__WEBPACK_IMPORTED_MODULE_0__[\"default\"];\n\nif (true) {\n  warn = function warn(message) {\n    // eslint-disable-next-line no-console\n    console.warn(\"[InstantSearch.js]: \".concat(message.trim()));\n  };\n\n  deprecate = function deprecate(fn, message) {\n    var hasAlreadyPrinted = false;\n    return function () {\n      if (!hasAlreadyPrinted) {\n        hasAlreadyPrinted = true;\n        warn(message);\n      }\n\n      return fn.apply(void 0, arguments);\n    };\n  };\n\n  _warning = function warning(condition, message) {\n    if (condition) {\n      return;\n    }\n\n    var hasAlreadyPrinted = _warning.cache[message];\n\n    if (!hasAlreadyPrinted) {\n      _warning.cache[message] = true;\n      warn(message);\n    }\n  };\n\n  _warning.cache = {};\n}\n\n\n\n//# sourceURL=webpack:///./node_modules/instantsearch.js/es/lib/utils/logger.js?");

/***/ }),

/***/ "./node_modules/instantsearch.js/es/lib/utils/mergeSearchParameters.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/instantsearch.js/es/lib/utils/mergeSearchParameters.js ***!
  \*****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _findIndex__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./findIndex */ \"./node_modules/instantsearch.js/es/lib/utils/findIndex.js\");\n/* harmony import */ var _uniq__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./uniq */ \"./node_modules/instantsearch.js/es/lib/utils/uniq.js\");\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\nfunction _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }\n\nfunction _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }\n\n\n\n\nvar mergeWithRest = function mergeWithRest(left, right) {\n  var facets = right.facets,\n      disjunctiveFacets = right.disjunctiveFacets,\n      facetsRefinements = right.facetsRefinements,\n      facetsExcludes = right.facetsExcludes,\n      disjunctiveFacetsRefinements = right.disjunctiveFacetsRefinements,\n      numericRefinements = right.numericRefinements,\n      tagRefinements = right.tagRefinements,\n      hierarchicalFacets = right.hierarchicalFacets,\n      hierarchicalFacetsRefinements = right.hierarchicalFacetsRefinements,\n      ruleContexts = right.ruleContexts,\n      rest = _objectWithoutProperties(right, [\"facets\", \"disjunctiveFacets\", \"facetsRefinements\", \"facetsExcludes\", \"disjunctiveFacetsRefinements\", \"numericRefinements\", \"tagRefinements\", \"hierarchicalFacets\", \"hierarchicalFacetsRefinements\", \"ruleContexts\"]);\n\n  return left.setQueryParameters(rest);\n}; // Merge facets\n\n\nvar mergeFacets = function mergeFacets(left, right) {\n  return right.facets.reduce(function (_, name) {\n    return _.addFacet(name);\n  }, left);\n};\n\nvar mergeDisjunctiveFacets = function mergeDisjunctiveFacets(left, right) {\n  return right.disjunctiveFacets.reduce(function (_, name) {\n    return _.addDisjunctiveFacet(name);\n  }, left);\n};\n\nvar mergeHierarchicalFacets = function mergeHierarchicalFacets(left, right) {\n  return left.setQueryParameters({\n    hierarchicalFacets: right.hierarchicalFacets.reduce(function (facets, facet) {\n      var index = Object(_findIndex__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(facets, function (_) {\n        return _.name === facet.name;\n      });\n\n      if (index === -1) {\n        return facets.concat(facet);\n      }\n\n      var nextFacets = facets.slice();\n      nextFacets.splice(index, 1, facet);\n      return nextFacets;\n    }, left.hierarchicalFacets)\n  });\n}; // Merge facet refinements\n\n\nvar mergeTagRefinements = function mergeTagRefinements(left, right) {\n  return right.tagRefinements.reduce(function (_, value) {\n    return _.addTagRefinement(value);\n  }, left);\n};\n\nvar mergeFacetRefinements = function mergeFacetRefinements(left, right) {\n  return left.setQueryParameters({\n    facetsRefinements: _objectSpread({}, left.facetsRefinements, {}, right.facetsRefinements)\n  });\n};\n\nvar mergeFacetsExcludes = function mergeFacetsExcludes(left, right) {\n  return left.setQueryParameters({\n    facetsExcludes: _objectSpread({}, left.facetsExcludes, {}, right.facetsExcludes)\n  });\n};\n\nvar mergeDisjunctiveFacetsRefinements = function mergeDisjunctiveFacetsRefinements(left, right) {\n  return left.setQueryParameters({\n    disjunctiveFacetsRefinements: _objectSpread({}, left.disjunctiveFacetsRefinements, {}, right.disjunctiveFacetsRefinements)\n  });\n};\n\nvar mergeNumericRefinements = function mergeNumericRefinements(left, right) {\n  return left.setQueryParameters({\n    numericRefinements: _objectSpread({}, left.numericRefinements, {}, right.numericRefinements)\n  });\n};\n\nvar mergeHierarchicalFacetsRefinements = function mergeHierarchicalFacetsRefinements(left, right) {\n  return left.setQueryParameters({\n    hierarchicalFacetsRefinements: _objectSpread({}, left.hierarchicalFacetsRefinements, {}, right.hierarchicalFacetsRefinements)\n  });\n};\n\nvar mergeRuleContexts = function mergeRuleContexts(left, right) {\n  var ruleContexts = Object(_uniq__WEBPACK_IMPORTED_MODULE_1__[\"default\"])([].concat(left.ruleContexts).concat(right.ruleContexts).filter(Boolean));\n\n  if (ruleContexts.length > 0) {\n    return left.setQueryParameters({\n      ruleContexts: ruleContexts\n    });\n  }\n\n  return left;\n};\n\nvar merge = function merge() {\n  for (var _len = arguments.length, parameters = new Array(_len), _key = 0; _key < _len; _key++) {\n    parameters[_key] = arguments[_key];\n  }\n\n  return parameters.reduce(function (left, right) {\n    var hierarchicalFacetsRefinementsMerged = mergeHierarchicalFacetsRefinements(left, right);\n    var hierarchicalFacetsMerged = mergeHierarchicalFacets(hierarchicalFacetsRefinementsMerged, right);\n    var tagRefinementsMerged = mergeTagRefinements(hierarchicalFacetsMerged, right);\n    var numericRefinementsMerged = mergeNumericRefinements(tagRefinementsMerged, right);\n    var disjunctiveFacetsRefinementsMerged = mergeDisjunctiveFacetsRefinements(numericRefinementsMerged, right);\n    var facetsExcludesMerged = mergeFacetsExcludes(disjunctiveFacetsRefinementsMerged, right);\n    var facetRefinementsMerged = mergeFacetRefinements(facetsExcludesMerged, right);\n    var disjunctiveFacetsMerged = mergeDisjunctiveFacets(facetRefinementsMerged, right);\n    var ruleContextsMerged = mergeRuleContexts(disjunctiveFacetsMerged, right);\n    var facetsMerged = mergeFacets(ruleContextsMerged, right);\n    return mergeWithRest(facetsMerged, right);\n  });\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (merge);\n\n//# sourceURL=webpack:///./node_modules/instantsearch.js/es/lib/utils/mergeSearchParameters.js?");

/***/ }),

/***/ "./node_modules/instantsearch.js/es/lib/utils/noop.js":
/*!************************************************************!*\
  !*** ./node_modules/instantsearch.js/es/lib/utils/noop.js ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nfunction noop() {}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (noop);\n\n//# sourceURL=webpack:///./node_modules/instantsearch.js/es/lib/utils/noop.js?");

/***/ }),

/***/ "./node_modules/instantsearch.js/es/lib/utils/prepareTemplateProps.js":
/*!****************************************************************************!*\
  !*** ./node_modules/instantsearch.js/es/lib/utils/prepareTemplateProps.js ***!
  \****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _uniq__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./uniq */ \"./node_modules/instantsearch.js/es/lib/utils/uniq.js\");\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\nfunction _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }\n\nfunction _nonIterableSpread() { throw new TypeError(\"Invalid attempt to spread non-iterable instance\"); }\n\nfunction _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === \"[object Arguments]\") return Array.from(iter); }\n\nfunction _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }\n\n\n\nfunction prepareTemplates() {\n  var defaultTemplates = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};\n  var templates = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};\n  var allKeys = Object(_uniq__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([].concat(_toConsumableArray(Object.keys(defaultTemplates)), _toConsumableArray(Object.keys(templates))));\n  return allKeys.reduce(function (config, key) {\n    var defaultTemplate = defaultTemplates[key];\n    var customTemplate = templates[key];\n    var isCustomTemplate = customTemplate !== undefined && customTemplate !== defaultTemplate;\n    config.templates[key] = isCustomTemplate ? customTemplate : defaultTemplate;\n    config.useCustomCompileOptions[key] = isCustomTemplate;\n    return config;\n  }, {\n    templates: {},\n    useCustomCompileOptions: {}\n  });\n}\n/**\n * Prepares an object to be passed to the Template widget\n */\n\n\nfunction prepareTemplateProps(_ref) {\n  var defaultTemplates = _ref.defaultTemplates,\n      templates = _ref.templates,\n      templatesConfig = _ref.templatesConfig;\n  var preparedTemplates = prepareTemplates(defaultTemplates, templates);\n  return _objectSpread({\n    templatesConfig: templatesConfig\n  }, preparedTemplates);\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (prepareTemplateProps);\n\n//# sourceURL=webpack:///./node_modules/instantsearch.js/es/lib/utils/prepareTemplateProps.js?");

/***/ }),

/***/ "./node_modules/instantsearch.js/es/lib/utils/range.js":
/*!*************************************************************!*\
  !*** ./node_modules/instantsearch.js/es/lib/utils/range.js ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nfunction _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }\n\nfunction _nonIterableSpread() { throw new TypeError(\"Invalid attempt to spread non-iterable instance\"); }\n\nfunction _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === \"[object Arguments]\") return Array.from(iter); }\n\nfunction _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }\n\nfunction range(_ref) {\n  var _ref$start = _ref.start,\n      start = _ref$start === void 0 ? 0 : _ref$start,\n      end = _ref.end,\n      _ref$step = _ref.step,\n      step = _ref$step === void 0 ? 1 : _ref$step;\n  // We can't divide by 0 so we re-assign the step to 1 if it happens.\n  var limitStep = step === 0 ? 1 : step; // In some cases the array to create has a decimal length.\n  // We therefore need to round the value.\n  // Example:\n  //   { start: 1, end: 5000, step: 500 }\n  //   => Array length = (5000 - 1) / 500 = 9.998\n\n  var arrayLength = Math.round((end - start) / limitStep);\n  return _toConsumableArray(Array(arrayLength)).map(function (_, current) {\n    return (start + current) * limitStep;\n  });\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (range);\n\n//# sourceURL=webpack:///./node_modules/instantsearch.js/es/lib/utils/range.js?");

/***/ }),

/***/ "./node_modules/instantsearch.js/es/lib/utils/renderTemplate.js":
/*!**********************************************************************!*\
  !*** ./node_modules/instantsearch.js/es/lib/utils/renderTemplate.js ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var hogan_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! hogan.js */ \"./node_modules/hogan.js/lib/hogan.js\");\n/* harmony import */ var hogan_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(hogan_js__WEBPACK_IMPORTED_MODULE_0__);\nfunction _typeof(obj) { if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof(obj); }\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\n // We add all our template helper methods to the template as lambdas. Note\n// that lambdas in Mustache are supposed to accept a second argument of\n// `render` to get the rendered value, not the literal `{{value}}`. But\n// this is currently broken (see https://github.com/twitter/hogan.js/issues/222).\n\nfunction transformHelpersToHogan() {\n  var helpers = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};\n  var compileOptions = arguments.length > 1 ? arguments[1] : undefined;\n  var data = arguments.length > 2 ? arguments[2] : undefined;\n  return Object.keys(helpers).reduce(function (acc, helperKey) {\n    return _objectSpread({}, acc, _defineProperty({}, helperKey, function () {\n      var _this = this;\n\n      return function (text) {\n        var render = function render(value) {\n          return hogan_js__WEBPACK_IMPORTED_MODULE_0___default.a.compile(value, compileOptions).render(_this);\n        };\n\n        return helpers[helperKey].call(data, text, render);\n      };\n    }));\n  }, {});\n}\n\nfunction renderTemplate(_ref) {\n  var templates = _ref.templates,\n      templateKey = _ref.templateKey,\n      compileOptions = _ref.compileOptions,\n      helpers = _ref.helpers,\n      data = _ref.data;\n  var template = templates[templateKey];\n\n  var templateType = _typeof(template);\n\n  var isTemplateString = templateType === 'string';\n  var isTemplateFunction = templateType === 'function';\n\n  if (!isTemplateString && !isTemplateFunction) {\n    throw new Error(\"Template must be 'string' or 'function', was '\".concat(templateType, \"' (key: \").concat(templateKey, \")\"));\n  }\n\n  if (isTemplateFunction) {\n    return template(data);\n  }\n\n  var transformedHelpers = transformHelpersToHogan(helpers, compileOptions, data);\n  return hogan_js__WEBPACK_IMPORTED_MODULE_0___default.a.compile(template, compileOptions).render(_objectSpread({}, data, {\n    helpers: transformedHelpers\n  })).replace(/[ \\n\\r\\t\\f\\xA0]+/g, function (spaces) {\n    return spaces.replace(/(^|\\xA0+)[^\\xA0]+/g, '$1 ');\n  }).trim();\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (renderTemplate);\n\n//# sourceURL=webpack:///./node_modules/instantsearch.js/es/lib/utils/renderTemplate.js?");

/***/ }),

/***/ "./node_modules/instantsearch.js/es/lib/utils/resolveSearchParameters.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/instantsearch.js/es/lib/utils/resolveSearchParameters.js ***!
  \*******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nvar resolveSearchParameters = function resolveSearchParameters(current) {\n  var parent = current.getParent();\n  var states = [current.getHelper().state];\n\n  while (parent !== null) {\n    states = [parent.getHelper().state].concat(states);\n    parent = parent.getParent();\n  }\n\n  return states;\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (resolveSearchParameters);\n\n//# sourceURL=webpack:///./node_modules/instantsearch.js/es/lib/utils/resolveSearchParameters.js?");

/***/ }),

/***/ "./node_modules/instantsearch.js/es/lib/utils/unescapeRefinement.js":
/*!**************************************************************************!*\
  !*** ./node_modules/instantsearch.js/es/lib/utils/unescapeRefinement.js ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nfunction unescapeRefinement(value) {\n  return String(value).replace(/^\\\\-/, '-');\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (unescapeRefinement);\n\n//# sourceURL=webpack:///./node_modules/instantsearch.js/es/lib/utils/unescapeRefinement.js?");

/***/ }),

/***/ "./node_modules/instantsearch.js/es/lib/utils/uniq.js":
/*!************************************************************!*\
  !*** ./node_modules/instantsearch.js/es/lib/utils/uniq.js ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nfunction uniq(array) {\n  return array.filter(function (value, index, self) {\n    return self.indexOf(value) === index;\n  });\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (uniq);\n\n//# sourceURL=webpack:///./node_modules/instantsearch.js/es/lib/utils/uniq.js?");

/***/ }),

/***/ "./node_modules/instantsearch.js/es/lib/version.js":
/*!*********************************************************!*\
  !*** ./node_modules/instantsearch.js/es/lib/version.js ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = ('4.2.0');\n\n//# sourceURL=webpack:///./node_modules/instantsearch.js/es/lib/version.js?");

/***/ }),

/***/ "./node_modules/instantsearch.js/es/middleware/createRouter.js":
/*!*********************************************************************!*\
  !*** ./node_modules/instantsearch.js/es/middleware/createRouter.js ***!
  \*********************************************************************/
/*! exports provided: createRouter */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"createRouter\", function() { return createRouter; });\n/* harmony import */ var _lib_stateMappings_simple__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../lib/stateMappings/simple */ \"./node_modules/instantsearch.js/es/lib/stateMappings/simple.js\");\n/* harmony import */ var _lib_routers_history__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../lib/routers/history */ \"./node_modules/instantsearch.js/es/lib/routers/history.js\");\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\n\n\n\nvar walk = function walk(current, callback) {\n  callback(current);\n  current.getWidgets().filter(function (widget) {\n    return widget.$$type === 'ais.index';\n  }).forEach(function (innerIndex) {\n    walk(innerIndex, callback);\n  });\n};\n\nvar createRouter = function createRouter() {\n  var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};\n  var _props$router = props.router,\n      router = _props$router === void 0 ? Object(_lib_routers_history__WEBPACK_IMPORTED_MODULE_1__[\"default\"])() : _props$router,\n      _props$stateMapping = props.stateMapping,\n      stateMapping = _props$stateMapping === void 0 ? Object(_lib_stateMappings_simple__WEBPACK_IMPORTED_MODULE_0__[\"default\"])() : _props$stateMapping;\n  return function (_ref) {\n    var instantSearchInstance = _ref.instantSearchInstance;\n\n    function topLevelCreateURL(nextState) {\n      var uiState = Object.keys(nextState).reduce(function (acc, indexId) {\n        return _objectSpread({}, acc, _defineProperty({}, indexId, nextState[indexId]));\n      }, instantSearchInstance.mainIndex.getWidgetState({}));\n      var route = stateMapping.stateToRoute(uiState);\n      return router.createURL(route);\n    }\n\n    instantSearchInstance._createURL = topLevelCreateURL;\n    instantSearchInstance._initialUiState = _objectSpread({}, instantSearchInstance._initialUiState, {}, stateMapping.routeToState(router.read()));\n    return {\n      onStateChange: function onStateChange(_ref2) {\n        var state = _ref2.state;\n        var route = stateMapping.stateToRoute(state);\n        router.write(route);\n      },\n      subscribe: function subscribe() {\n        router.onUpdate(function (route) {\n          var uiState = stateMapping.routeToState(route);\n          walk(instantSearchInstance.mainIndex, function (current) {\n            var widgets = current.getWidgets();\n            var indexUiState = uiState[current.getIndexId()] || {};\n            var searchParameters = widgets.reduce(function (parameters, widget) {\n              if (!widget.getWidgetSearchParameters) {\n                return parameters;\n              }\n\n              return widget.getWidgetSearchParameters(parameters, {\n                uiState: indexUiState\n              });\n            }, current.getHelper().state);\n            current.getHelper().overrideStateWithoutTriggeringChangeEvent(searchParameters);\n            instantSearchInstance.scheduleSearch();\n          });\n        });\n      },\n      unsubscribe: function unsubscribe() {\n        router.dispose();\n      }\n    };\n  };\n};\n\n//# sourceURL=webpack:///./node_modules/instantsearch.js/es/middleware/createRouter.js?");

/***/ }),

/***/ "./node_modules/instantsearch.js/es/widgets/index/index.js":
/*!*****************************************************************!*\
  !*** ./node_modules/instantsearch.js/es/widgets/index/index.js ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var algoliasearch_helper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! algoliasearch-helper */ \"./node_modules/algoliasearch-helper/index.js\");\n/* harmony import */ var algoliasearch_helper__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(algoliasearch_helper__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _lib_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../lib/utils */ \"./node_modules/instantsearch.js/es/lib/utils/index.js\");\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\nfunction _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }\n\nfunction _nonIterableRest() { throw new TypeError(\"Invalid attempt to destructure non-iterable instance\"); }\n\nfunction _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === \"[object Arguments]\")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i[\"return\"] != null) _i[\"return\"](); } finally { if (_d) throw _e; } } return _arr; }\n\nfunction _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\nfunction _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }\n\nfunction _nonIterableSpread() { throw new TypeError(\"Invalid attempt to spread non-iterable instance\"); }\n\nfunction _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === \"[object Arguments]\") return Array.from(iter); }\n\nfunction _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }\n\nfunction _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }\n\nfunction _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }\n\n\n\nvar withUsage = Object(_lib_utils__WEBPACK_IMPORTED_MODULE_1__[\"createDocumentationMessageGenerator\"])({\n  name: 'index-widget'\n});\n\nfunction isIndexWidget(widget) {\n  return widget.$$type === 'ais.index';\n}\n\nfunction getLocalWidgetsState(widgets, widgetStateOptions) {\n  return widgets.filter(function (widget) {\n    return !isIndexWidget(widget);\n  }).reduce(function (uiState, widget) {\n    if (!widget.getWidgetState) {\n      return uiState;\n    }\n\n    return widget.getWidgetState(uiState, widgetStateOptions);\n  }, {});\n}\n\nfunction getLocalWidgetsSearchParameters(widgets, widgetSearchParametersOptions) {\n  var initialSearchParameters = widgetSearchParametersOptions.initialSearchParameters,\n      rest = _objectWithoutProperties(widgetSearchParametersOptions, [\"initialSearchParameters\"]);\n\n  return widgets.filter(function (widget) {\n    return !isIndexWidget(widget);\n  }).reduce(function (state, widget) {\n    if (!widget.getWidgetSearchParameters) {\n      return state;\n    }\n\n    return widget.getWidgetSearchParameters(state, rest);\n  }, initialSearchParameters);\n}\n\nfunction resetPageFromWidgets(widgets) {\n  var indexWidgets = widgets.filter(isIndexWidget);\n\n  if (indexWidgets.length === 0) {\n    return;\n  }\n\n  indexWidgets.forEach(function (widget) {\n    var widgetHelper = widget.getHelper(); // @ts-ignore @TODO: remove \"ts-ignore\" once `resetPage()` is typed in the helper\n\n    widgetHelper.setState(widgetHelper.state.resetPage());\n    resetPageFromWidgets(widget.getWidgets());\n  });\n}\n\nfunction resolveScopedResultsFromWidgets(widgets) {\n  var indexWidgets = widgets.filter(isIndexWidget);\n  return indexWidgets.reduce(function (scopedResults, current) {\n    return scopedResults.concat.apply(scopedResults, [{\n      indexId: current.getIndexId(),\n      results: current.getResults(),\n      helper: current.getHelper()\n    }].concat(_toConsumableArray(resolveScopedResultsFromWidgets(current.getWidgets()))));\n  }, []);\n}\n\nfunction resolveScopedResultsFromIndex(widget) {\n  var widgetParent = widget.getParent(); // If the widget is the root, we consider itself as the only sibling.\n\n  var widgetSiblings = widgetParent ? widgetParent.getWidgets() : [widget];\n  return resolveScopedResultsFromWidgets(widgetSiblings);\n}\n\nvar index = function index(props) {\n  if (props === undefined || props.indexName === undefined) {\n    throw new Error(withUsage('The `indexName` option is required.'));\n  }\n\n  var indexName = props.indexName,\n      _props$indexId = props.indexId,\n      indexId = _props$indexId === void 0 ? indexName : _props$indexId;\n  var localWidgets = [];\n  var localUiState = {};\n  var localInstantSearchInstance = null;\n  var localParent = null;\n  var helper = null;\n  var derivedHelper = null;\n\n  var createURL = function createURL(nextState) {\n    return localInstantSearchInstance._createURL(_defineProperty({}, indexId, getLocalWidgetsState(localWidgets, {\n      searchParameters: nextState,\n      helper: helper\n    })));\n  };\n\n  return {\n    $$type: 'ais.index',\n    getIndexName: function getIndexName() {\n      return indexName;\n    },\n    getIndexId: function getIndexId() {\n      return indexId;\n    },\n    getHelper: function getHelper() {\n      return helper;\n    },\n    getResults: function getResults() {\n      return derivedHelper && derivedHelper.lastResults;\n    },\n    getParent: function getParent() {\n      return localParent;\n    },\n    getWidgets: function getWidgets() {\n      return localWidgets;\n    },\n    addWidgets: function addWidgets(widgets) {\n      var _this = this;\n\n      if (!Array.isArray(widgets)) {\n        throw new Error(withUsage('The `addWidgets` method expects an array of widgets.'));\n      }\n\n      if (widgets.some(function (widget) {\n        return typeof widget.init !== 'function' && typeof widget.render !== 'function';\n      })) {\n        throw new Error(withUsage('The widget definition expects a `render` and/or an `init` method.'));\n      }\n\n      localWidgets = localWidgets.concat(widgets);\n\n      if (localInstantSearchInstance && Boolean(widgets.length)) {\n        helper.setState(getLocalWidgetsSearchParameters(localWidgets, {\n          uiState: localUiState,\n          initialSearchParameters: helper.state\n        }));\n        widgets.forEach(function (widget) {\n          if (localInstantSearchInstance && widget.init) {\n            widget.init({\n              helper: helper,\n              parent: _this,\n              uiState: {},\n              instantSearchInstance: localInstantSearchInstance,\n              state: helper.state,\n              templatesConfig: localInstantSearchInstance.templatesConfig,\n              createURL: createURL\n            });\n          }\n        });\n        localInstantSearchInstance.scheduleSearch();\n      }\n\n      return this;\n    },\n    removeWidgets: function removeWidgets(widgets) {\n      if (!Array.isArray(widgets)) {\n        throw new Error(withUsage('The `removeWidgets` method expects an array of widgets.'));\n      }\n\n      if (widgets.some(function (widget) {\n        return typeof widget.dispose !== 'function';\n      })) {\n        throw new Error(withUsage('The widget definition expects a `dispose` method.'));\n      }\n\n      localWidgets = localWidgets.filter(function (widget) {\n        return widgets.indexOf(widget) === -1;\n      });\n\n      if (localInstantSearchInstance && Boolean(widgets.length)) {\n        var nextState = widgets.reduce(function (state, widget) {\n          // the `dispose` method exists at this point we already assert it\n          var next = widget.dispose({\n            helper: helper,\n            state: state\n          });\n          return next || state;\n        }, helper.state);\n        localUiState = getLocalWidgetsState(localWidgets, {\n          searchParameters: nextState,\n          helper: helper\n        });\n        helper.setState(getLocalWidgetsSearchParameters(localWidgets, {\n          uiState: localUiState,\n          initialSearchParameters: nextState\n        }));\n\n        if (localWidgets.length) {\n          localInstantSearchInstance.scheduleSearch();\n        }\n      }\n\n      return this;\n    },\n    init: function init(_ref) {\n      var _this2 = this;\n\n      var instantSearchInstance = _ref.instantSearchInstance,\n          parent = _ref.parent,\n          uiState = _ref.uiState;\n      localInstantSearchInstance = instantSearchInstance;\n      localParent = parent;\n      localUiState = uiState[indexId] || {}; // The `mainHelper` is already defined at this point. The instance is created\n      // inside InstantSearch at the `start` method, which occurs before the `init`\n      // step.\n\n      var mainHelper = instantSearchInstance.mainHelper;\n      var parameters = getLocalWidgetsSearchParameters(localWidgets, {\n        uiState: localUiState,\n        initialSearchParameters: new algoliasearch_helper__WEBPACK_IMPORTED_MODULE_0___default.a.SearchParameters({\n          index: indexName\n        })\n      }); // This Helper is only used for state management we do not care about the\n      // `searchClient`. Only the \"main\" Helper created at the `InstantSearch`\n      // level is aware of the client.\n\n      helper = algoliasearch_helper__WEBPACK_IMPORTED_MODULE_0___default()({}, parameters.index, parameters); // We forward the call to `search` to the \"main\" instance of the Helper\n      // which is responsible for managing the queries (it's the only one that is\n      // aware of the `searchClient`).\n\n      helper.search = function () {\n        return mainHelper.search();\n      }; // We use the same pattern for the `searchForFacetValues`.\n\n\n      helper.searchForFacetValues = function (facetName, facetValue, maxFacetHits, userState) {\n        var state = helper.state.setQueryParameters(userState);\n        return mainHelper.searchForFacetValues(facetName, facetValue, maxFacetHits, state);\n      };\n\n      derivedHelper = mainHelper.derive(function () {\n        return _lib_utils__WEBPACK_IMPORTED_MODULE_1__[\"mergeSearchParameters\"].apply(void 0, _toConsumableArray(Object(_lib_utils__WEBPACK_IMPORTED_MODULE_1__[\"resolveSearchParameters\"])(_this2)));\n      }); // Subscribe to the Helper state changes for the page before widgets\n      // are initialized. This behavior mimics the original one of the Helper.\n      // It makes sense to replicate it at the `init` step. We have another\n      // listener on `change` below, once `init` is done.\n\n      helper.on('change', function (_ref2) {\n        var isPageReset = _ref2.isPageReset;\n\n        if (isPageReset) {\n          resetPageFromWidgets(localWidgets);\n        }\n      });\n      derivedHelper.on('search', function () {\n        // The index does not manage the \"staleness\" of the search. This is the\n        // responsibility of the main instance. It does not make sense to manage\n        // it at the index level because it's either: all of them or none of them\n        // that are stalled. The queries are performed into a single network request.\n        instantSearchInstance.scheduleStalledRender();\n\n        if (true) {\n          // Some connectors are responsible for multiple widgets so we need\n          // to map them.\n          // eslint-disable-next-line no-inner-declarations\n          var getWidgetNames = function getWidgetNames(connectorName) {\n            switch (connectorName) {\n              case 'range':\n                return ['rangeInput', 'rangeSlider'];\n\n              case 'menu':\n                return ['menu', 'menuSelect'];\n\n              default:\n                return [connectorName];\n            }\n          };\n\n          var stateToWidgetsMap = {\n            query: {\n              connectors: ['connectSearchBox'],\n              widgets: ['ais.searchBox', 'ais.autocomplete', 'ais.voiceSearch']\n            },\n            refinementList: {\n              connectors: ['connectRefinementList'],\n              widgets: ['ais.refinementList']\n            },\n            menu: {\n              connectors: ['connectMenu'],\n              widgets: ['ais.menu']\n            },\n            hierarchicalMenu: {\n              connectors: ['connectHierarchicalMenu'],\n              widgets: ['ais.hierarchicalMenu']\n            },\n            numericMenu: {\n              connectors: ['connectNumericMenu'],\n              widgets: ['ais.numericMenu']\n            },\n            ratingMenu: {\n              connectors: ['connectRatingMenu'],\n              widgets: ['ais.ratingMenu']\n            },\n            range: {\n              connectors: ['connectRange'],\n              widgets: ['ais.rangeInput', 'ais.rangeSlider']\n            },\n            toggle: {\n              connectors: ['connectToggleRefinement'],\n              widgets: ['ais.toggleRefinement']\n            },\n            geoSearch: {\n              connectors: ['connectGeoSearch'],\n              widgets: ['ais.geoSearch']\n            },\n            sortBy: {\n              connectors: ['connectSortBy'],\n              widgets: ['ais.sortBy']\n            },\n            page: {\n              connectors: ['connectPagination'],\n              widgets: ['ais.pagination', 'ais.infiniteHits']\n            },\n            hitsPerPage: {\n              connectors: ['connectHitsPerPage'],\n              widgets: ['ais.hitsPerPage']\n            },\n            configure: {\n              connectors: ['connectConfigure'],\n              widgets: ['ais.configure']\n            },\n            places: {\n              connectors: [],\n              widgets: ['ais.places']\n            }\n          };\n\n          var mountedWidgets = _this2.getWidgets().map(function (widget) {\n            return widget.$$type;\n          }).filter(Boolean);\n\n          var missingWidgets = Object.keys(localUiState).reduce(function (acc, parameter) {\n            var requiredWidgets = stateToWidgetsMap[parameter] && stateToWidgetsMap[parameter].widgets;\n\n            if (requiredWidgets && !requiredWidgets.some(function (requiredWidget) {\n              return mountedWidgets.includes(requiredWidget);\n            })) {\n              acc.push([parameter, {\n                connectors: stateToWidgetsMap[parameter].connectors,\n                widgets: stateToWidgetsMap[parameter].widgets.map(function (widgetIdentifier) {\n                  return widgetIdentifier.split('ais.')[1];\n                })\n              }]);\n            }\n\n            return acc;\n          }, []);\n           true ? Object(_lib_utils__WEBPACK_IMPORTED_MODULE_1__[\"warning\"])(missingWidgets.length === 0, \"The UI state for the index \\\"\".concat(_this2.getIndexId(), \"\\\" is not consistent with the widgets mounted.\\n\\nThis can happen when the UI state is specified via `initialUiState` or `routing` but that the widgets responsible for this state were not added. This results in those query parameters not being sent to the API.\\n\\nTo fully reflect the state, some widgets need to be added to the index \\\"\").concat(_this2.getIndexId(), \"\\\":\\n\\n\").concat(missingWidgets.map(function (_ref3) {\n            var _ref5;\n\n            var _ref4 = _slicedToArray(_ref3, 2),\n                stateParameter = _ref4[0],\n                widgets = _ref4[1].widgets;\n\n            return \"- `\".concat(stateParameter, \"` needs one of these widgets: \").concat((_ref5 = []).concat.apply(_ref5, _toConsumableArray(widgets.map(function (name) {\n              return getWidgetNames(name);\n            }))).map(function (name) {\n              return \"\\\"\".concat(name, \"\\\"\");\n            }).join(', '));\n          }).join('\\n'), \"\\n\\nIf you do not wish to display widgets but still want to support their search parameters, you can mount \\\"virtual widgets\\\" that don't render anything:\\n\\n```\\n\").concat(missingWidgets.filter(function (_ref6) {\n            var _ref7 = _slicedToArray(_ref6, 2),\n                _stateParameter = _ref7[0],\n                connectors = _ref7[1].connectors;\n\n            return connectors.length > 0;\n          }).map(function (_ref8) {\n            var _ref9 = _slicedToArray(_ref8, 2),\n                _stateParameter = _ref9[0],\n                _ref9$ = _ref9[1],\n                connectors = _ref9$.connectors,\n                widgets = _ref9$.widgets;\n\n            var capitalizedWidget = Object(_lib_utils__WEBPACK_IMPORTED_MODULE_1__[\"capitalize\"])(widgets[0]);\n            var connectorName = connectors[0];\n            return \"const virtual\".concat(capitalizedWidget, \" = \").concat(connectorName, \"(() => null);\");\n          }).join('\\n'), \"\\n\\nsearch.addWidgets([\\n  \").concat(missingWidgets.filter(function (_ref10) {\n            var _ref11 = _slicedToArray(_ref10, 2),\n                _stateParameter = _ref11[0],\n                connectors = _ref11[1].connectors;\n\n            return connectors.length > 0;\n          }).map(function (_ref12) {\n            var _ref13 = _slicedToArray(_ref12, 2),\n                _stateParameter = _ref13[0],\n                widgets = _ref13[1].widgets;\n\n            var capitalizedWidget = Object(_lib_utils__WEBPACK_IMPORTED_MODULE_1__[\"capitalize\"])(widgets[0]);\n            return \"virtual\".concat(capitalizedWidget, \"({ /* ... */ })\");\n          }).join(',\\n  '), \"\\n]);\\n```\\n\\nIf you're using custom widgets that do set these query parameters, we recommend using connectors instead.\\n\\nSee https://www.algolia.com/doc/guides/building-search-ui/widgets/customize-an-existing-widget/js/#customize-the-complete-ui-of-the-widgets\")) : undefined;\n        }\n      });\n      derivedHelper.on('result', function (_ref14) {\n        var results = _ref14.results;\n        // The index does not render the results it schedules a new render\n        // to let all the other indices emit their own results. It allows us to\n        // run the render process in one pass.\n        instantSearchInstance.scheduleRender(); // the derived helper is the one which actually searches, but the helper\n        // which is exposed e.g. via instance.helper, doesn't search, and thus\n        // does not have access to lastResults, which it used to in pre-federated\n        // search behavior.\n\n        helper.lastResults = results;\n      });\n      localWidgets.forEach(function (widget) {\n        if (widget.init) {\n          widget.init({\n            uiState: uiState,\n            helper: helper,\n            parent: _this2,\n            instantSearchInstance: instantSearchInstance,\n            state: helper.state,\n            templatesConfig: instantSearchInstance.templatesConfig,\n            createURL: createURL\n          });\n        }\n      }); // Subscribe to the Helper state changes for the `uiState` once widgets\n      // are initialized. Until the first render, state changes are part of the\n      // configuration step. This is mainly for backward compatibility with custom\n      // widgets. When the subscription happens before the `init` step, the (static)\n      // configuration of the widget is pushed in the URL. That's what we want to avoid.\n      // https://github.com/algolia/instantsearch.js/pull/994/commits/4a672ae3fd78809e213de0368549ef12e9dc9454\n\n      helper.on('change', function (_ref15) {\n        var state = _ref15.state;\n        localUiState = getLocalWidgetsState(localWidgets, {\n          searchParameters: state,\n          helper: helper\n        });\n        instantSearchInstance.onStateChange();\n      });\n    },\n    render: function render(_ref16) {\n      var _this3 = this;\n\n      var instantSearchInstance = _ref16.instantSearchInstance;\n      localWidgets.forEach(function (widget) {\n        // At this point, all the variables used below are set. Both `helper`\n        // and `derivedHelper` have been created at the `init` step. The attribute\n        // `lastResults` might be `null` though. It's possible that a stalled render\n        // happens before the result e.g with a dynamically added index the request might\n        // be delayed. The render is triggered for the complete tree but some parts do\n        // not have results yet.\n        if (widget.render && derivedHelper.lastResults) {\n          widget.render({\n            helper: helper,\n            instantSearchInstance: instantSearchInstance,\n            results: derivedHelper.lastResults,\n            scopedResults: resolveScopedResultsFromIndex(_this3),\n            state: derivedHelper.lastResults._state,\n            templatesConfig: instantSearchInstance.templatesConfig,\n            createURL: createURL,\n            searchMetadata: {\n              isSearchStalled: instantSearchInstance._isSearchStalled\n            }\n          });\n        }\n      });\n    },\n    dispose: function dispose() {\n      localWidgets.forEach(function (widget) {\n        if (widget.dispose) {\n          // The dispose function is always called once the instance is started\n          // (it's an effect of `removeWidgets`). The index is initialized and\n          // the Helper is available. We don't care about the return value of\n          // `dispose` because the index is removed. We can't call `removeWidgets`\n          // because we want to keep the widgets on the instance, to allow idempotent\n          // operations on `add` & `remove`.\n          widget.dispose({\n            helper: helper,\n            state: helper.state\n          });\n        }\n      });\n      localInstantSearchInstance = null;\n      localParent = null;\n      helper.removeAllListeners();\n      helper = null;\n      derivedHelper.detach();\n      derivedHelper = null;\n    },\n    getWidgetState: function getWidgetState(uiState) {\n      return localWidgets.filter(isIndexWidget).reduce(function (previousUiState, innerIndex) {\n        return innerIndex.getWidgetState(previousUiState);\n      }, _objectSpread({}, uiState, _defineProperty({}, this.getIndexId(), localUiState)));\n    }\n  };\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (index);\n\n//# sourceURL=webpack:///./node_modules/instantsearch.js/es/widgets/index/index.js?");

/***/ }),

/***/ "./node_modules/qs/lib/formats.js":
/*!****************************************!*\
  !*** ./node_modules/qs/lib/formats.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar replace = String.prototype.replace;\nvar percentTwenties = /%20/g;\n\nvar util = __webpack_require__(/*! ./utils */ \"./node_modules/qs/lib/utils.js\");\n\nvar Format = {\n    RFC1738: 'RFC1738',\n    RFC3986: 'RFC3986'\n};\n\nmodule.exports = util.assign(\n    {\n        'default': Format.RFC3986,\n        formatters: {\n            RFC1738: function (value) {\n                return replace.call(value, percentTwenties, '+');\n            },\n            RFC3986: function (value) {\n                return String(value);\n            }\n        }\n    },\n    Format\n);\n\n\n//# sourceURL=webpack:///./node_modules/qs/lib/formats.js?");

/***/ }),

/***/ "./node_modules/qs/lib/index.js":
/*!**************************************!*\
  !*** ./node_modules/qs/lib/index.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar stringify = __webpack_require__(/*! ./stringify */ \"./node_modules/qs/lib/stringify.js\");\nvar parse = __webpack_require__(/*! ./parse */ \"./node_modules/qs/lib/parse.js\");\nvar formats = __webpack_require__(/*! ./formats */ \"./node_modules/qs/lib/formats.js\");\n\nmodule.exports = {\n    formats: formats,\n    parse: parse,\n    stringify: stringify\n};\n\n\n//# sourceURL=webpack:///./node_modules/qs/lib/index.js?");

/***/ }),

/***/ "./node_modules/qs/lib/parse.js":
/*!**************************************!*\
  !*** ./node_modules/qs/lib/parse.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar utils = __webpack_require__(/*! ./utils */ \"./node_modules/qs/lib/utils.js\");\n\nvar has = Object.prototype.hasOwnProperty;\nvar isArray = Array.isArray;\n\nvar defaults = {\n    allowDots: false,\n    allowPrototypes: false,\n    arrayLimit: 20,\n    charset: 'utf-8',\n    charsetSentinel: false,\n    comma: false,\n    decoder: utils.decode,\n    delimiter: '&',\n    depth: 5,\n    ignoreQueryPrefix: false,\n    interpretNumericEntities: false,\n    parameterLimit: 1000,\n    parseArrays: true,\n    plainObjects: false,\n    strictNullHandling: false\n};\n\nvar interpretNumericEntities = function (str) {\n    return str.replace(/&#(\\d+);/g, function ($0, numberStr) {\n        return String.fromCharCode(parseInt(numberStr, 10));\n    });\n};\n\n// This is what browsers will submit when the ✓ character occurs in an\n// application/x-www-form-urlencoded body and the encoding of the page containing\n// the form is iso-8859-1, or when the submitted form has an accept-charset\n// attribute of iso-8859-1. Presumably also with other charsets that do not contain\n// the ✓ character, such as us-ascii.\nvar isoSentinel = 'utf8=%26%2310003%3B'; // encodeURIComponent('&#10003;')\n\n// These are the percent-encoded utf-8 octets representing a checkmark, indicating that the request actually is utf-8 encoded.\nvar charsetSentinel = 'utf8=%E2%9C%93'; // encodeURIComponent('✓')\n\nvar parseValues = function parseQueryStringValues(str, options) {\n    var obj = {};\n    var cleanStr = options.ignoreQueryPrefix ? str.replace(/^\\?/, '') : str;\n    var limit = options.parameterLimit === Infinity ? undefined : options.parameterLimit;\n    var parts = cleanStr.split(options.delimiter, limit);\n    var skipIndex = -1; // Keep track of where the utf8 sentinel was found\n    var i;\n\n    var charset = options.charset;\n    if (options.charsetSentinel) {\n        for (i = 0; i < parts.length; ++i) {\n            if (parts[i].indexOf('utf8=') === 0) {\n                if (parts[i] === charsetSentinel) {\n                    charset = 'utf-8';\n                } else if (parts[i] === isoSentinel) {\n                    charset = 'iso-8859-1';\n                }\n                skipIndex = i;\n                i = parts.length; // The eslint settings do not allow break;\n            }\n        }\n    }\n\n    for (i = 0; i < parts.length; ++i) {\n        if (i === skipIndex) {\n            continue;\n        }\n        var part = parts[i];\n\n        var bracketEqualsPos = part.indexOf(']=');\n        var pos = bracketEqualsPos === -1 ? part.indexOf('=') : bracketEqualsPos + 1;\n\n        var key, val;\n        if (pos === -1) {\n            key = options.decoder(part, defaults.decoder, charset, 'key');\n            val = options.strictNullHandling ? null : '';\n        } else {\n            key = options.decoder(part.slice(0, pos), defaults.decoder, charset, 'key');\n            val = options.decoder(part.slice(pos + 1), defaults.decoder, charset, 'value');\n        }\n\n        if (val && options.interpretNumericEntities && charset === 'iso-8859-1') {\n            val = interpretNumericEntities(val);\n        }\n\n        if (val && typeof val === 'string' && options.comma && val.indexOf(',') > -1) {\n            val = val.split(',');\n        }\n\n        if (part.indexOf('[]=') > -1) {\n            val = isArray(val) ? [val] : val;\n        }\n\n        if (has.call(obj, key)) {\n            obj[key] = utils.combine(obj[key], val);\n        } else {\n            obj[key] = val;\n        }\n    }\n\n    return obj;\n};\n\nvar parseObject = function (chain, val, options) {\n    var leaf = val;\n\n    for (var i = chain.length - 1; i >= 0; --i) {\n        var obj;\n        var root = chain[i];\n\n        if (root === '[]' && options.parseArrays) {\n            obj = [].concat(leaf);\n        } else {\n            obj = options.plainObjects ? Object.create(null) : {};\n            var cleanRoot = root.charAt(0) === '[' && root.charAt(root.length - 1) === ']' ? root.slice(1, -1) : root;\n            var index = parseInt(cleanRoot, 10);\n            if (!options.parseArrays && cleanRoot === '') {\n                obj = { 0: leaf };\n            } else if (\n                !isNaN(index)\n                && root !== cleanRoot\n                && String(index) === cleanRoot\n                && index >= 0\n                && (options.parseArrays && index <= options.arrayLimit)\n            ) {\n                obj = [];\n                obj[index] = leaf;\n            } else {\n                obj[cleanRoot] = leaf;\n            }\n        }\n\n        leaf = obj;\n    }\n\n    return leaf;\n};\n\nvar parseKeys = function parseQueryStringKeys(givenKey, val, options) {\n    if (!givenKey) {\n        return;\n    }\n\n    // Transform dot notation to bracket notation\n    var key = options.allowDots ? givenKey.replace(/\\.([^.[]+)/g, '[$1]') : givenKey;\n\n    // The regex chunks\n\n    var brackets = /(\\[[^[\\]]*])/;\n    var child = /(\\[[^[\\]]*])/g;\n\n    // Get the parent\n\n    var segment = options.depth > 0 && brackets.exec(key);\n    var parent = segment ? key.slice(0, segment.index) : key;\n\n    // Stash the parent if it exists\n\n    var keys = [];\n    if (parent) {\n        // If we aren't using plain objects, optionally prefix keys that would overwrite object prototype properties\n        if (!options.plainObjects && has.call(Object.prototype, parent)) {\n            if (!options.allowPrototypes) {\n                return;\n            }\n        }\n\n        keys.push(parent);\n    }\n\n    // Loop through children appending to the array until we hit depth\n\n    var i = 0;\n    while (options.depth > 0 && (segment = child.exec(key)) !== null && i < options.depth) {\n        i += 1;\n        if (!options.plainObjects && has.call(Object.prototype, segment[1].slice(1, -1))) {\n            if (!options.allowPrototypes) {\n                return;\n            }\n        }\n        keys.push(segment[1]);\n    }\n\n    // If there's a remainder, just add whatever is left\n\n    if (segment) {\n        keys.push('[' + key.slice(segment.index) + ']');\n    }\n\n    return parseObject(keys, val, options);\n};\n\nvar normalizeParseOptions = function normalizeParseOptions(opts) {\n    if (!opts) {\n        return defaults;\n    }\n\n    if (opts.decoder !== null && opts.decoder !== undefined && typeof opts.decoder !== 'function') {\n        throw new TypeError('Decoder has to be a function.');\n    }\n\n    if (typeof opts.charset !== 'undefined' && opts.charset !== 'utf-8' && opts.charset !== 'iso-8859-1') {\n        throw new Error('The charset option must be either utf-8, iso-8859-1, or undefined');\n    }\n    var charset = typeof opts.charset === 'undefined' ? defaults.charset : opts.charset;\n\n    return {\n        allowDots: typeof opts.allowDots === 'undefined' ? defaults.allowDots : !!opts.allowDots,\n        allowPrototypes: typeof opts.allowPrototypes === 'boolean' ? opts.allowPrototypes : defaults.allowPrototypes,\n        arrayLimit: typeof opts.arrayLimit === 'number' ? opts.arrayLimit : defaults.arrayLimit,\n        charset: charset,\n        charsetSentinel: typeof opts.charsetSentinel === 'boolean' ? opts.charsetSentinel : defaults.charsetSentinel,\n        comma: typeof opts.comma === 'boolean' ? opts.comma : defaults.comma,\n        decoder: typeof opts.decoder === 'function' ? opts.decoder : defaults.decoder,\n        delimiter: typeof opts.delimiter === 'string' || utils.isRegExp(opts.delimiter) ? opts.delimiter : defaults.delimiter,\n        // eslint-disable-next-line no-implicit-coercion, no-extra-parens\n        depth: (typeof opts.depth === 'number' || opts.depth === false) ? +opts.depth : defaults.depth,\n        ignoreQueryPrefix: opts.ignoreQueryPrefix === true,\n        interpretNumericEntities: typeof opts.interpretNumericEntities === 'boolean' ? opts.interpretNumericEntities : defaults.interpretNumericEntities,\n        parameterLimit: typeof opts.parameterLimit === 'number' ? opts.parameterLimit : defaults.parameterLimit,\n        parseArrays: opts.parseArrays !== false,\n        plainObjects: typeof opts.plainObjects === 'boolean' ? opts.plainObjects : defaults.plainObjects,\n        strictNullHandling: typeof opts.strictNullHandling === 'boolean' ? opts.strictNullHandling : defaults.strictNullHandling\n    };\n};\n\nmodule.exports = function (str, opts) {\n    var options = normalizeParseOptions(opts);\n\n    if (str === '' || str === null || typeof str === 'undefined') {\n        return options.plainObjects ? Object.create(null) : {};\n    }\n\n    var tempObj = typeof str === 'string' ? parseValues(str, options) : str;\n    var obj = options.plainObjects ? Object.create(null) : {};\n\n    // Iterate over the keys and setup the new object\n\n    var keys = Object.keys(tempObj);\n    for (var i = 0; i < keys.length; ++i) {\n        var key = keys[i];\n        var newObj = parseKeys(key, tempObj[key], options);\n        obj = utils.merge(obj, newObj, options);\n    }\n\n    return utils.compact(obj);\n};\n\n\n//# sourceURL=webpack:///./node_modules/qs/lib/parse.js?");

/***/ }),

/***/ "./node_modules/qs/lib/stringify.js":
/*!******************************************!*\
  !*** ./node_modules/qs/lib/stringify.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar utils = __webpack_require__(/*! ./utils */ \"./node_modules/qs/lib/utils.js\");\nvar formats = __webpack_require__(/*! ./formats */ \"./node_modules/qs/lib/formats.js\");\nvar has = Object.prototype.hasOwnProperty;\n\nvar arrayPrefixGenerators = {\n    brackets: function brackets(prefix) {\n        return prefix + '[]';\n    },\n    comma: 'comma',\n    indices: function indices(prefix, key) {\n        return prefix + '[' + key + ']';\n    },\n    repeat: function repeat(prefix) {\n        return prefix;\n    }\n};\n\nvar isArray = Array.isArray;\nvar push = Array.prototype.push;\nvar pushToArray = function (arr, valueOrArray) {\n    push.apply(arr, isArray(valueOrArray) ? valueOrArray : [valueOrArray]);\n};\n\nvar toISO = Date.prototype.toISOString;\n\nvar defaultFormat = formats['default'];\nvar defaults = {\n    addQueryPrefix: false,\n    allowDots: false,\n    charset: 'utf-8',\n    charsetSentinel: false,\n    delimiter: '&',\n    encode: true,\n    encoder: utils.encode,\n    encodeValuesOnly: false,\n    format: defaultFormat,\n    formatter: formats.formatters[defaultFormat],\n    // deprecated\n    indices: false,\n    serializeDate: function serializeDate(date) {\n        return toISO.call(date);\n    },\n    skipNulls: false,\n    strictNullHandling: false\n};\n\nvar isNonNullishPrimitive = function isNonNullishPrimitive(v) {\n    return typeof v === 'string'\n        || typeof v === 'number'\n        || typeof v === 'boolean'\n        || typeof v === 'symbol'\n        || typeof v === 'bigint';\n};\n\nvar stringify = function stringify(\n    object,\n    prefix,\n    generateArrayPrefix,\n    strictNullHandling,\n    skipNulls,\n    encoder,\n    filter,\n    sort,\n    allowDots,\n    serializeDate,\n    formatter,\n    encodeValuesOnly,\n    charset\n) {\n    var obj = object;\n    if (typeof filter === 'function') {\n        obj = filter(prefix, obj);\n    } else if (obj instanceof Date) {\n        obj = serializeDate(obj);\n    } else if (generateArrayPrefix === 'comma' && isArray(obj)) {\n        obj = obj.join(',');\n    }\n\n    if (obj === null) {\n        if (strictNullHandling) {\n            return encoder && !encodeValuesOnly ? encoder(prefix, defaults.encoder, charset, 'key') : prefix;\n        }\n\n        obj = '';\n    }\n\n    if (isNonNullishPrimitive(obj) || utils.isBuffer(obj)) {\n        if (encoder) {\n            var keyValue = encodeValuesOnly ? prefix : encoder(prefix, defaults.encoder, charset, 'key');\n            return [formatter(keyValue) + '=' + formatter(encoder(obj, defaults.encoder, charset, 'value'))];\n        }\n        return [formatter(prefix) + '=' + formatter(String(obj))];\n    }\n\n    var values = [];\n\n    if (typeof obj === 'undefined') {\n        return values;\n    }\n\n    var objKeys;\n    if (isArray(filter)) {\n        objKeys = filter;\n    } else {\n        var keys = Object.keys(obj);\n        objKeys = sort ? keys.sort(sort) : keys;\n    }\n\n    for (var i = 0; i < objKeys.length; ++i) {\n        var key = objKeys[i];\n\n        if (skipNulls && obj[key] === null) {\n            continue;\n        }\n\n        if (isArray(obj)) {\n            pushToArray(values, stringify(\n                obj[key],\n                typeof generateArrayPrefix === 'function' ? generateArrayPrefix(prefix, key) : prefix,\n                generateArrayPrefix,\n                strictNullHandling,\n                skipNulls,\n                encoder,\n                filter,\n                sort,\n                allowDots,\n                serializeDate,\n                formatter,\n                encodeValuesOnly,\n                charset\n            ));\n        } else {\n            pushToArray(values, stringify(\n                obj[key],\n                prefix + (allowDots ? '.' + key : '[' + key + ']'),\n                generateArrayPrefix,\n                strictNullHandling,\n                skipNulls,\n                encoder,\n                filter,\n                sort,\n                allowDots,\n                serializeDate,\n                formatter,\n                encodeValuesOnly,\n                charset\n            ));\n        }\n    }\n\n    return values;\n};\n\nvar normalizeStringifyOptions = function normalizeStringifyOptions(opts) {\n    if (!opts) {\n        return defaults;\n    }\n\n    if (opts.encoder !== null && opts.encoder !== undefined && typeof opts.encoder !== 'function') {\n        throw new TypeError('Encoder has to be a function.');\n    }\n\n    var charset = opts.charset || defaults.charset;\n    if (typeof opts.charset !== 'undefined' && opts.charset !== 'utf-8' && opts.charset !== 'iso-8859-1') {\n        throw new TypeError('The charset option must be either utf-8, iso-8859-1, or undefined');\n    }\n\n    var format = formats['default'];\n    if (typeof opts.format !== 'undefined') {\n        if (!has.call(formats.formatters, opts.format)) {\n            throw new TypeError('Unknown format option provided.');\n        }\n        format = opts.format;\n    }\n    var formatter = formats.formatters[format];\n\n    var filter = defaults.filter;\n    if (typeof opts.filter === 'function' || isArray(opts.filter)) {\n        filter = opts.filter;\n    }\n\n    return {\n        addQueryPrefix: typeof opts.addQueryPrefix === 'boolean' ? opts.addQueryPrefix : defaults.addQueryPrefix,\n        allowDots: typeof opts.allowDots === 'undefined' ? defaults.allowDots : !!opts.allowDots,\n        charset: charset,\n        charsetSentinel: typeof opts.charsetSentinel === 'boolean' ? opts.charsetSentinel : defaults.charsetSentinel,\n        delimiter: typeof opts.delimiter === 'undefined' ? defaults.delimiter : opts.delimiter,\n        encode: typeof opts.encode === 'boolean' ? opts.encode : defaults.encode,\n        encoder: typeof opts.encoder === 'function' ? opts.encoder : defaults.encoder,\n        encodeValuesOnly: typeof opts.encodeValuesOnly === 'boolean' ? opts.encodeValuesOnly : defaults.encodeValuesOnly,\n        filter: filter,\n        formatter: formatter,\n        serializeDate: typeof opts.serializeDate === 'function' ? opts.serializeDate : defaults.serializeDate,\n        skipNulls: typeof opts.skipNulls === 'boolean' ? opts.skipNulls : defaults.skipNulls,\n        sort: typeof opts.sort === 'function' ? opts.sort : null,\n        strictNullHandling: typeof opts.strictNullHandling === 'boolean' ? opts.strictNullHandling : defaults.strictNullHandling\n    };\n};\n\nmodule.exports = function (object, opts) {\n    var obj = object;\n    var options = normalizeStringifyOptions(opts);\n\n    var objKeys;\n    var filter;\n\n    if (typeof options.filter === 'function') {\n        filter = options.filter;\n        obj = filter('', obj);\n    } else if (isArray(options.filter)) {\n        filter = options.filter;\n        objKeys = filter;\n    }\n\n    var keys = [];\n\n    if (typeof obj !== 'object' || obj === null) {\n        return '';\n    }\n\n    var arrayFormat;\n    if (opts && opts.arrayFormat in arrayPrefixGenerators) {\n        arrayFormat = opts.arrayFormat;\n    } else if (opts && 'indices' in opts) {\n        arrayFormat = opts.indices ? 'indices' : 'repeat';\n    } else {\n        arrayFormat = 'indices';\n    }\n\n    var generateArrayPrefix = arrayPrefixGenerators[arrayFormat];\n\n    if (!objKeys) {\n        objKeys = Object.keys(obj);\n    }\n\n    if (options.sort) {\n        objKeys.sort(options.sort);\n    }\n\n    for (var i = 0; i < objKeys.length; ++i) {\n        var key = objKeys[i];\n\n        if (options.skipNulls && obj[key] === null) {\n            continue;\n        }\n        pushToArray(keys, stringify(\n            obj[key],\n            key,\n            generateArrayPrefix,\n            options.strictNullHandling,\n            options.skipNulls,\n            options.encode ? options.encoder : null,\n            options.filter,\n            options.sort,\n            options.allowDots,\n            options.serializeDate,\n            options.formatter,\n            options.encodeValuesOnly,\n            options.charset\n        ));\n    }\n\n    var joined = keys.join(options.delimiter);\n    var prefix = options.addQueryPrefix === true ? '?' : '';\n\n    if (options.charsetSentinel) {\n        if (options.charset === 'iso-8859-1') {\n            // encodeURIComponent('&#10003;'), the \"numeric entity\" representation of a checkmark\n            prefix += 'utf8=%26%2310003%3B&';\n        } else {\n            // encodeURIComponent('✓')\n            prefix += 'utf8=%E2%9C%93&';\n        }\n    }\n\n    return joined.length > 0 ? prefix + joined : '';\n};\n\n\n//# sourceURL=webpack:///./node_modules/qs/lib/stringify.js?");

/***/ }),

/***/ "./node_modules/qs/lib/utils.js":
/*!**************************************!*\
  !*** ./node_modules/qs/lib/utils.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar has = Object.prototype.hasOwnProperty;\nvar isArray = Array.isArray;\n\nvar hexTable = (function () {\n    var array = [];\n    for (var i = 0; i < 256; ++i) {\n        array.push('%' + ((i < 16 ? '0' : '') + i.toString(16)).toUpperCase());\n    }\n\n    return array;\n}());\n\nvar compactQueue = function compactQueue(queue) {\n    while (queue.length > 1) {\n        var item = queue.pop();\n        var obj = item.obj[item.prop];\n\n        if (isArray(obj)) {\n            var compacted = [];\n\n            for (var j = 0; j < obj.length; ++j) {\n                if (typeof obj[j] !== 'undefined') {\n                    compacted.push(obj[j]);\n                }\n            }\n\n            item.obj[item.prop] = compacted;\n        }\n    }\n};\n\nvar arrayToObject = function arrayToObject(source, options) {\n    var obj = options && options.plainObjects ? Object.create(null) : {};\n    for (var i = 0; i < source.length; ++i) {\n        if (typeof source[i] !== 'undefined') {\n            obj[i] = source[i];\n        }\n    }\n\n    return obj;\n};\n\nvar merge = function merge(target, source, options) {\n    /* eslint no-param-reassign: 0 */\n    if (!source) {\n        return target;\n    }\n\n    if (typeof source !== 'object') {\n        if (isArray(target)) {\n            target.push(source);\n        } else if (target && typeof target === 'object') {\n            if ((options && (options.plainObjects || options.allowPrototypes)) || !has.call(Object.prototype, source)) {\n                target[source] = true;\n            }\n        } else {\n            return [target, source];\n        }\n\n        return target;\n    }\n\n    if (!target || typeof target !== 'object') {\n        return [target].concat(source);\n    }\n\n    var mergeTarget = target;\n    if (isArray(target) && !isArray(source)) {\n        mergeTarget = arrayToObject(target, options);\n    }\n\n    if (isArray(target) && isArray(source)) {\n        source.forEach(function (item, i) {\n            if (has.call(target, i)) {\n                var targetItem = target[i];\n                if (targetItem && typeof targetItem === 'object' && item && typeof item === 'object') {\n                    target[i] = merge(targetItem, item, options);\n                } else {\n                    target.push(item);\n                }\n            } else {\n                target[i] = item;\n            }\n        });\n        return target;\n    }\n\n    return Object.keys(source).reduce(function (acc, key) {\n        var value = source[key];\n\n        if (has.call(acc, key)) {\n            acc[key] = merge(acc[key], value, options);\n        } else {\n            acc[key] = value;\n        }\n        return acc;\n    }, mergeTarget);\n};\n\nvar assign = function assignSingleSource(target, source) {\n    return Object.keys(source).reduce(function (acc, key) {\n        acc[key] = source[key];\n        return acc;\n    }, target);\n};\n\nvar decode = function (str, decoder, charset) {\n    var strWithoutPlus = str.replace(/\\+/g, ' ');\n    if (charset === 'iso-8859-1') {\n        // unescape never throws, no try...catch needed:\n        return strWithoutPlus.replace(/%[0-9a-f]{2}/gi, unescape);\n    }\n    // utf-8\n    try {\n        return decodeURIComponent(strWithoutPlus);\n    } catch (e) {\n        return strWithoutPlus;\n    }\n};\n\nvar encode = function encode(str, defaultEncoder, charset) {\n    // This code was originally written by Brian White (mscdex) for the io.js core querystring library.\n    // It has been adapted here for stricter adherence to RFC 3986\n    if (str.length === 0) {\n        return str;\n    }\n\n    var string = str;\n    if (typeof str === 'symbol') {\n        string = Symbol.prototype.toString.call(str);\n    } else if (typeof str !== 'string') {\n        string = String(str);\n    }\n\n    if (charset === 'iso-8859-1') {\n        return escape(string).replace(/%u[0-9a-f]{4}/gi, function ($0) {\n            return '%26%23' + parseInt($0.slice(2), 16) + '%3B';\n        });\n    }\n\n    var out = '';\n    for (var i = 0; i < string.length; ++i) {\n        var c = string.charCodeAt(i);\n\n        if (\n            c === 0x2D // -\n            || c === 0x2E // .\n            || c === 0x5F // _\n            || c === 0x7E // ~\n            || (c >= 0x30 && c <= 0x39) // 0-9\n            || (c >= 0x41 && c <= 0x5A) // a-z\n            || (c >= 0x61 && c <= 0x7A) // A-Z\n        ) {\n            out += string.charAt(i);\n            continue;\n        }\n\n        if (c < 0x80) {\n            out = out + hexTable[c];\n            continue;\n        }\n\n        if (c < 0x800) {\n            out = out + (hexTable[0xC0 | (c >> 6)] + hexTable[0x80 | (c & 0x3F)]);\n            continue;\n        }\n\n        if (c < 0xD800 || c >= 0xE000) {\n            out = out + (hexTable[0xE0 | (c >> 12)] + hexTable[0x80 | ((c >> 6) & 0x3F)] + hexTable[0x80 | (c & 0x3F)]);\n            continue;\n        }\n\n        i += 1;\n        c = 0x10000 + (((c & 0x3FF) << 10) | (string.charCodeAt(i) & 0x3FF));\n        out += hexTable[0xF0 | (c >> 18)]\n            + hexTable[0x80 | ((c >> 12) & 0x3F)]\n            + hexTable[0x80 | ((c >> 6) & 0x3F)]\n            + hexTable[0x80 | (c & 0x3F)];\n    }\n\n    return out;\n};\n\nvar compact = function compact(value) {\n    var queue = [{ obj: { o: value }, prop: 'o' }];\n    var refs = [];\n\n    for (var i = 0; i < queue.length; ++i) {\n        var item = queue[i];\n        var obj = item.obj[item.prop];\n\n        var keys = Object.keys(obj);\n        for (var j = 0; j < keys.length; ++j) {\n            var key = keys[j];\n            var val = obj[key];\n            if (typeof val === 'object' && val !== null && refs.indexOf(val) === -1) {\n                queue.push({ obj: obj, prop: key });\n                refs.push(val);\n            }\n        }\n    }\n\n    compactQueue(queue);\n\n    return value;\n};\n\nvar isRegExp = function isRegExp(obj) {\n    return Object.prototype.toString.call(obj) === '[object RegExp]';\n};\n\nvar isBuffer = function isBuffer(obj) {\n    if (!obj || typeof obj !== 'object') {\n        return false;\n    }\n\n    return !!(obj.constructor && obj.constructor.isBuffer && obj.constructor.isBuffer(obj));\n};\n\nvar combine = function combine(a, b) {\n    return [].concat(a, b);\n};\n\nmodule.exports = {\n    arrayToObject: arrayToObject,\n    assign: assign,\n    combine: combine,\n    compact: compact,\n    decode: decode,\n    encode: encode,\n    isBuffer: isBuffer,\n    isRegExp: isRegExp,\n    merge: merge\n};\n\n\n//# sourceURL=webpack:///./node_modules/qs/lib/utils.js?");

/***/ }),

/***/ "./node_modules/regenerator-runtime/runtime.js":
/*!*****************************************************!*\
  !*** ./node_modules/regenerator-runtime/runtime.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("/**\n * Copyright (c) 2014-present, Facebook, Inc.\n *\n * This source code is licensed under the MIT license found in the\n * LICENSE file in the root directory of this source tree.\n */\n\nvar runtime = (function (exports) {\n  \"use strict\";\n\n  var Op = Object.prototype;\n  var hasOwn = Op.hasOwnProperty;\n  var undefined; // More compressible than void 0.\n  var $Symbol = typeof Symbol === \"function\" ? Symbol : {};\n  var iteratorSymbol = $Symbol.iterator || \"@@iterator\";\n  var asyncIteratorSymbol = $Symbol.asyncIterator || \"@@asyncIterator\";\n  var toStringTagSymbol = $Symbol.toStringTag || \"@@toStringTag\";\n\n  function wrap(innerFn, outerFn, self, tryLocsList) {\n    // If outerFn provided and outerFn.prototype is a Generator, then outerFn.prototype instanceof Generator.\n    var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator;\n    var generator = Object.create(protoGenerator.prototype);\n    var context = new Context(tryLocsList || []);\n\n    // The ._invoke method unifies the implementations of the .next,\n    // .throw, and .return methods.\n    generator._invoke = makeInvokeMethod(innerFn, self, context);\n\n    return generator;\n  }\n  exports.wrap = wrap;\n\n  // Try/catch helper to minimize deoptimizations. Returns a completion\n  // record like context.tryEntries[i].completion. This interface could\n  // have been (and was previously) designed to take a closure to be\n  // invoked without arguments, but in all the cases we care about we\n  // already have an existing method we want to call, so there's no need\n  // to create a new function object. We can even get away with assuming\n  // the method takes exactly one argument, since that happens to be true\n  // in every case, so we don't have to touch the arguments object. The\n  // only additional allocation required is the completion record, which\n  // has a stable shape and so hopefully should be cheap to allocate.\n  function tryCatch(fn, obj, arg) {\n    try {\n      return { type: \"normal\", arg: fn.call(obj, arg) };\n    } catch (err) {\n      return { type: \"throw\", arg: err };\n    }\n  }\n\n  var GenStateSuspendedStart = \"suspendedStart\";\n  var GenStateSuspendedYield = \"suspendedYield\";\n  var GenStateExecuting = \"executing\";\n  var GenStateCompleted = \"completed\";\n\n  // Returning this object from the innerFn has the same effect as\n  // breaking out of the dispatch switch statement.\n  var ContinueSentinel = {};\n\n  // Dummy constructor functions that we use as the .constructor and\n  // .constructor.prototype properties for functions that return Generator\n  // objects. For full spec compliance, you may wish to configure your\n  // minifier not to mangle the names of these two functions.\n  function Generator() {}\n  function GeneratorFunction() {}\n  function GeneratorFunctionPrototype() {}\n\n  // This is a polyfill for %IteratorPrototype% for environments that\n  // don't natively support it.\n  var IteratorPrototype = {};\n  IteratorPrototype[iteratorSymbol] = function () {\n    return this;\n  };\n\n  var getProto = Object.getPrototypeOf;\n  var NativeIteratorPrototype = getProto && getProto(getProto(values([])));\n  if (NativeIteratorPrototype &&\n      NativeIteratorPrototype !== Op &&\n      hasOwn.call(NativeIteratorPrototype, iteratorSymbol)) {\n    // This environment has a native %IteratorPrototype%; use it instead\n    // of the polyfill.\n    IteratorPrototype = NativeIteratorPrototype;\n  }\n\n  var Gp = GeneratorFunctionPrototype.prototype =\n    Generator.prototype = Object.create(IteratorPrototype);\n  GeneratorFunction.prototype = Gp.constructor = GeneratorFunctionPrototype;\n  GeneratorFunctionPrototype.constructor = GeneratorFunction;\n  GeneratorFunctionPrototype[toStringTagSymbol] =\n    GeneratorFunction.displayName = \"GeneratorFunction\";\n\n  // Helper for defining the .next, .throw, and .return methods of the\n  // Iterator interface in terms of a single ._invoke method.\n  function defineIteratorMethods(prototype) {\n    [\"next\", \"throw\", \"return\"].forEach(function(method) {\n      prototype[method] = function(arg) {\n        return this._invoke(method, arg);\n      };\n    });\n  }\n\n  exports.isGeneratorFunction = function(genFun) {\n    var ctor = typeof genFun === \"function\" && genFun.constructor;\n    return ctor\n      ? ctor === GeneratorFunction ||\n        // For the native GeneratorFunction constructor, the best we can\n        // do is to check its .name property.\n        (ctor.displayName || ctor.name) === \"GeneratorFunction\"\n      : false;\n  };\n\n  exports.mark = function(genFun) {\n    if (Object.setPrototypeOf) {\n      Object.setPrototypeOf(genFun, GeneratorFunctionPrototype);\n    } else {\n      genFun.__proto__ = GeneratorFunctionPrototype;\n      if (!(toStringTagSymbol in genFun)) {\n        genFun[toStringTagSymbol] = \"GeneratorFunction\";\n      }\n    }\n    genFun.prototype = Object.create(Gp);\n    return genFun;\n  };\n\n  // Within the body of any async function, `await x` is transformed to\n  // `yield regeneratorRuntime.awrap(x)`, so that the runtime can test\n  // `hasOwn.call(value, \"__await\")` to determine if the yielded value is\n  // meant to be awaited.\n  exports.awrap = function(arg) {\n    return { __await: arg };\n  };\n\n  function AsyncIterator(generator) {\n    function invoke(method, arg, resolve, reject) {\n      var record = tryCatch(generator[method], generator, arg);\n      if (record.type === \"throw\") {\n        reject(record.arg);\n      } else {\n        var result = record.arg;\n        var value = result.value;\n        if (value &&\n            typeof value === \"object\" &&\n            hasOwn.call(value, \"__await\")) {\n          return Promise.resolve(value.__await).then(function(value) {\n            invoke(\"next\", value, resolve, reject);\n          }, function(err) {\n            invoke(\"throw\", err, resolve, reject);\n          });\n        }\n\n        return Promise.resolve(value).then(function(unwrapped) {\n          // When a yielded Promise is resolved, its final value becomes\n          // the .value of the Promise<{value,done}> result for the\n          // current iteration.\n          result.value = unwrapped;\n          resolve(result);\n        }, function(error) {\n          // If a rejected Promise was yielded, throw the rejection back\n          // into the async generator function so it can be handled there.\n          return invoke(\"throw\", error, resolve, reject);\n        });\n      }\n    }\n\n    var previousPromise;\n\n    function enqueue(method, arg) {\n      function callInvokeWithMethodAndArg() {\n        return new Promise(function(resolve, reject) {\n          invoke(method, arg, resolve, reject);\n        });\n      }\n\n      return previousPromise =\n        // If enqueue has been called before, then we want to wait until\n        // all previous Promises have been resolved before calling invoke,\n        // so that results are always delivered in the correct order. If\n        // enqueue has not been called before, then it is important to\n        // call invoke immediately, without waiting on a callback to fire,\n        // so that the async generator function has the opportunity to do\n        // any necessary setup in a predictable way. This predictability\n        // is why the Promise constructor synchronously invokes its\n        // executor callback, and why async functions synchronously\n        // execute code before the first await. Since we implement simple\n        // async functions in terms of async generators, it is especially\n        // important to get this right, even though it requires care.\n        previousPromise ? previousPromise.then(\n          callInvokeWithMethodAndArg,\n          // Avoid propagating failures to Promises returned by later\n          // invocations of the iterator.\n          callInvokeWithMethodAndArg\n        ) : callInvokeWithMethodAndArg();\n    }\n\n    // Define the unified helper method that is used to implement .next,\n    // .throw, and .return (see defineIteratorMethods).\n    this._invoke = enqueue;\n  }\n\n  defineIteratorMethods(AsyncIterator.prototype);\n  AsyncIterator.prototype[asyncIteratorSymbol] = function () {\n    return this;\n  };\n  exports.AsyncIterator = AsyncIterator;\n\n  // Note that simple async functions are implemented on top of\n  // AsyncIterator objects; they just return a Promise for the value of\n  // the final result produced by the iterator.\n  exports.async = function(innerFn, outerFn, self, tryLocsList) {\n    var iter = new AsyncIterator(\n      wrap(innerFn, outerFn, self, tryLocsList)\n    );\n\n    return exports.isGeneratorFunction(outerFn)\n      ? iter // If outerFn is a generator, return the full iterator.\n      : iter.next().then(function(result) {\n          return result.done ? result.value : iter.next();\n        });\n  };\n\n  function makeInvokeMethod(innerFn, self, context) {\n    var state = GenStateSuspendedStart;\n\n    return function invoke(method, arg) {\n      if (state === GenStateExecuting) {\n        throw new Error(\"Generator is already running\");\n      }\n\n      if (state === GenStateCompleted) {\n        if (method === \"throw\") {\n          throw arg;\n        }\n\n        // Be forgiving, per 25.3.3.3.3 of the spec:\n        // https://people.mozilla.org/~jorendorff/es6-draft.html#sec-generatorresume\n        return doneResult();\n      }\n\n      context.method = method;\n      context.arg = arg;\n\n      while (true) {\n        var delegate = context.delegate;\n        if (delegate) {\n          var delegateResult = maybeInvokeDelegate(delegate, context);\n          if (delegateResult) {\n            if (delegateResult === ContinueSentinel) continue;\n            return delegateResult;\n          }\n        }\n\n        if (context.method === \"next\") {\n          // Setting context._sent for legacy support of Babel's\n          // function.sent implementation.\n          context.sent = context._sent = context.arg;\n\n        } else if (context.method === \"throw\") {\n          if (state === GenStateSuspendedStart) {\n            state = GenStateCompleted;\n            throw context.arg;\n          }\n\n          context.dispatchException(context.arg);\n\n        } else if (context.method === \"return\") {\n          context.abrupt(\"return\", context.arg);\n        }\n\n        state = GenStateExecuting;\n\n        var record = tryCatch(innerFn, self, context);\n        if (record.type === \"normal\") {\n          // If an exception is thrown from innerFn, we leave state ===\n          // GenStateExecuting and loop back for another invocation.\n          state = context.done\n            ? GenStateCompleted\n            : GenStateSuspendedYield;\n\n          if (record.arg === ContinueSentinel) {\n            continue;\n          }\n\n          return {\n            value: record.arg,\n            done: context.done\n          };\n\n        } else if (record.type === \"throw\") {\n          state = GenStateCompleted;\n          // Dispatch the exception by looping back around to the\n          // context.dispatchException(context.arg) call above.\n          context.method = \"throw\";\n          context.arg = record.arg;\n        }\n      }\n    };\n  }\n\n  // Call delegate.iterator[context.method](context.arg) and handle the\n  // result, either by returning a { value, done } result from the\n  // delegate iterator, or by modifying context.method and context.arg,\n  // setting context.delegate to null, and returning the ContinueSentinel.\n  function maybeInvokeDelegate(delegate, context) {\n    var method = delegate.iterator[context.method];\n    if (method === undefined) {\n      // A .throw or .return when the delegate iterator has no .throw\n      // method always terminates the yield* loop.\n      context.delegate = null;\n\n      if (context.method === \"throw\") {\n        // Note: [\"return\"] must be used for ES3 parsing compatibility.\n        if (delegate.iterator[\"return\"]) {\n          // If the delegate iterator has a return method, give it a\n          // chance to clean up.\n          context.method = \"return\";\n          context.arg = undefined;\n          maybeInvokeDelegate(delegate, context);\n\n          if (context.method === \"throw\") {\n            // If maybeInvokeDelegate(context) changed context.method from\n            // \"return\" to \"throw\", let that override the TypeError below.\n            return ContinueSentinel;\n          }\n        }\n\n        context.method = \"throw\";\n        context.arg = new TypeError(\n          \"The iterator does not provide a 'throw' method\");\n      }\n\n      return ContinueSentinel;\n    }\n\n    var record = tryCatch(method, delegate.iterator, context.arg);\n\n    if (record.type === \"throw\") {\n      context.method = \"throw\";\n      context.arg = record.arg;\n      context.delegate = null;\n      return ContinueSentinel;\n    }\n\n    var info = record.arg;\n\n    if (! info) {\n      context.method = \"throw\";\n      context.arg = new TypeError(\"iterator result is not an object\");\n      context.delegate = null;\n      return ContinueSentinel;\n    }\n\n    if (info.done) {\n      // Assign the result of the finished delegate to the temporary\n      // variable specified by delegate.resultName (see delegateYield).\n      context[delegate.resultName] = info.value;\n\n      // Resume execution at the desired location (see delegateYield).\n      context.next = delegate.nextLoc;\n\n      // If context.method was \"throw\" but the delegate handled the\n      // exception, let the outer generator proceed normally. If\n      // context.method was \"next\", forget context.arg since it has been\n      // \"consumed\" by the delegate iterator. If context.method was\n      // \"return\", allow the original .return call to continue in the\n      // outer generator.\n      if (context.method !== \"return\") {\n        context.method = \"next\";\n        context.arg = undefined;\n      }\n\n    } else {\n      // Re-yield the result returned by the delegate method.\n      return info;\n    }\n\n    // The delegate iterator is finished, so forget it and continue with\n    // the outer generator.\n    context.delegate = null;\n    return ContinueSentinel;\n  }\n\n  // Define Generator.prototype.{next,throw,return} in terms of the\n  // unified ._invoke helper method.\n  defineIteratorMethods(Gp);\n\n  Gp[toStringTagSymbol] = \"Generator\";\n\n  // A Generator should always return itself as the iterator object when the\n  // @@iterator function is called on it. Some browsers' implementations of the\n  // iterator prototype chain incorrectly implement this, causing the Generator\n  // object to not be returned from this call. This ensures that doesn't happen.\n  // See https://github.com/facebook/regenerator/issues/274 for more details.\n  Gp[iteratorSymbol] = function() {\n    return this;\n  };\n\n  Gp.toString = function() {\n    return \"[object Generator]\";\n  };\n\n  function pushTryEntry(locs) {\n    var entry = { tryLoc: locs[0] };\n\n    if (1 in locs) {\n      entry.catchLoc = locs[1];\n    }\n\n    if (2 in locs) {\n      entry.finallyLoc = locs[2];\n      entry.afterLoc = locs[3];\n    }\n\n    this.tryEntries.push(entry);\n  }\n\n  function resetTryEntry(entry) {\n    var record = entry.completion || {};\n    record.type = \"normal\";\n    delete record.arg;\n    entry.completion = record;\n  }\n\n  function Context(tryLocsList) {\n    // The root entry object (effectively a try statement without a catch\n    // or a finally block) gives us a place to store values thrown from\n    // locations where there is no enclosing try statement.\n    this.tryEntries = [{ tryLoc: \"root\" }];\n    tryLocsList.forEach(pushTryEntry, this);\n    this.reset(true);\n  }\n\n  exports.keys = function(object) {\n    var keys = [];\n    for (var key in object) {\n      keys.push(key);\n    }\n    keys.reverse();\n\n    // Rather than returning an object with a next method, we keep\n    // things simple and return the next function itself.\n    return function next() {\n      while (keys.length) {\n        var key = keys.pop();\n        if (key in object) {\n          next.value = key;\n          next.done = false;\n          return next;\n        }\n      }\n\n      // To avoid creating an additional object, we just hang the .value\n      // and .done properties off the next function object itself. This\n      // also ensures that the minifier will not anonymize the function.\n      next.done = true;\n      return next;\n    };\n  };\n\n  function values(iterable) {\n    if (iterable) {\n      var iteratorMethod = iterable[iteratorSymbol];\n      if (iteratorMethod) {\n        return iteratorMethod.call(iterable);\n      }\n\n      if (typeof iterable.next === \"function\") {\n        return iterable;\n      }\n\n      if (!isNaN(iterable.length)) {\n        var i = -1, next = function next() {\n          while (++i < iterable.length) {\n            if (hasOwn.call(iterable, i)) {\n              next.value = iterable[i];\n              next.done = false;\n              return next;\n            }\n          }\n\n          next.value = undefined;\n          next.done = true;\n\n          return next;\n        };\n\n        return next.next = next;\n      }\n    }\n\n    // Return an iterator with no values.\n    return { next: doneResult };\n  }\n  exports.values = values;\n\n  function doneResult() {\n    return { value: undefined, done: true };\n  }\n\n  Context.prototype = {\n    constructor: Context,\n\n    reset: function(skipTempReset) {\n      this.prev = 0;\n      this.next = 0;\n      // Resetting context._sent for legacy support of Babel's\n      // function.sent implementation.\n      this.sent = this._sent = undefined;\n      this.done = false;\n      this.delegate = null;\n\n      this.method = \"next\";\n      this.arg = undefined;\n\n      this.tryEntries.forEach(resetTryEntry);\n\n      if (!skipTempReset) {\n        for (var name in this) {\n          // Not sure about the optimal order of these conditions:\n          if (name.charAt(0) === \"t\" &&\n              hasOwn.call(this, name) &&\n              !isNaN(+name.slice(1))) {\n            this[name] = undefined;\n          }\n        }\n      }\n    },\n\n    stop: function() {\n      this.done = true;\n\n      var rootEntry = this.tryEntries[0];\n      var rootRecord = rootEntry.completion;\n      if (rootRecord.type === \"throw\") {\n        throw rootRecord.arg;\n      }\n\n      return this.rval;\n    },\n\n    dispatchException: function(exception) {\n      if (this.done) {\n        throw exception;\n      }\n\n      var context = this;\n      function handle(loc, caught) {\n        record.type = \"throw\";\n        record.arg = exception;\n        context.next = loc;\n\n        if (caught) {\n          // If the dispatched exception was caught by a catch block,\n          // then let that catch block handle the exception normally.\n          context.method = \"next\";\n          context.arg = undefined;\n        }\n\n        return !! caught;\n      }\n\n      for (var i = this.tryEntries.length - 1; i >= 0; --i) {\n        var entry = this.tryEntries[i];\n        var record = entry.completion;\n\n        if (entry.tryLoc === \"root\") {\n          // Exception thrown outside of any try block that could handle\n          // it, so set the completion value of the entire function to\n          // throw the exception.\n          return handle(\"end\");\n        }\n\n        if (entry.tryLoc <= this.prev) {\n          var hasCatch = hasOwn.call(entry, \"catchLoc\");\n          var hasFinally = hasOwn.call(entry, \"finallyLoc\");\n\n          if (hasCatch && hasFinally) {\n            if (this.prev < entry.catchLoc) {\n              return handle(entry.catchLoc, true);\n            } else if (this.prev < entry.finallyLoc) {\n              return handle(entry.finallyLoc);\n            }\n\n          } else if (hasCatch) {\n            if (this.prev < entry.catchLoc) {\n              return handle(entry.catchLoc, true);\n            }\n\n          } else if (hasFinally) {\n            if (this.prev < entry.finallyLoc) {\n              return handle(entry.finallyLoc);\n            }\n\n          } else {\n            throw new Error(\"try statement without catch or finally\");\n          }\n        }\n      }\n    },\n\n    abrupt: function(type, arg) {\n      for (var i = this.tryEntries.length - 1; i >= 0; --i) {\n        var entry = this.tryEntries[i];\n        if (entry.tryLoc <= this.prev &&\n            hasOwn.call(entry, \"finallyLoc\") &&\n            this.prev < entry.finallyLoc) {\n          var finallyEntry = entry;\n          break;\n        }\n      }\n\n      if (finallyEntry &&\n          (type === \"break\" ||\n           type === \"continue\") &&\n          finallyEntry.tryLoc <= arg &&\n          arg <= finallyEntry.finallyLoc) {\n        // Ignore the finally entry if control is not jumping to a\n        // location outside the try/catch block.\n        finallyEntry = null;\n      }\n\n      var record = finallyEntry ? finallyEntry.completion : {};\n      record.type = type;\n      record.arg = arg;\n\n      if (finallyEntry) {\n        this.method = \"next\";\n        this.next = finallyEntry.finallyLoc;\n        return ContinueSentinel;\n      }\n\n      return this.complete(record);\n    },\n\n    complete: function(record, afterLoc) {\n      if (record.type === \"throw\") {\n        throw record.arg;\n      }\n\n      if (record.type === \"break\" ||\n          record.type === \"continue\") {\n        this.next = record.arg;\n      } else if (record.type === \"return\") {\n        this.rval = this.arg = record.arg;\n        this.method = \"return\";\n        this.next = \"end\";\n      } else if (record.type === \"normal\" && afterLoc) {\n        this.next = afterLoc;\n      }\n\n      return ContinueSentinel;\n    },\n\n    finish: function(finallyLoc) {\n      for (var i = this.tryEntries.length - 1; i >= 0; --i) {\n        var entry = this.tryEntries[i];\n        if (entry.finallyLoc === finallyLoc) {\n          this.complete(entry.completion, entry.afterLoc);\n          resetTryEntry(entry);\n          return ContinueSentinel;\n        }\n      }\n    },\n\n    \"catch\": function(tryLoc) {\n      for (var i = this.tryEntries.length - 1; i >= 0; --i) {\n        var entry = this.tryEntries[i];\n        if (entry.tryLoc === tryLoc) {\n          var record = entry.completion;\n          if (record.type === \"throw\") {\n            var thrown = record.arg;\n            resetTryEntry(entry);\n          }\n          return thrown;\n        }\n      }\n\n      // The context.catch method must only be called with a location\n      // argument that corresponds to a known catch block.\n      throw new Error(\"illegal catch attempt\");\n    },\n\n    delegateYield: function(iterable, resultName, nextLoc) {\n      this.delegate = {\n        iterator: values(iterable),\n        resultName: resultName,\n        nextLoc: nextLoc\n      };\n\n      if (this.method === \"next\") {\n        // Deliberately forget the last sent value so that we don't\n        // accidentally pass it on to the delegate.\n        this.arg = undefined;\n      }\n\n      return ContinueSentinel;\n    }\n  };\n\n  // Regardless of whether this script is executing as a CommonJS module\n  // or not, return the runtime object so that we can declare the variable\n  // regeneratorRuntime in the outer scope, which allows this module to be\n  // injected easily by `bin/regenerator --include-runtime script.js`.\n  return exports;\n\n}(\n  // If this script is executing as a CommonJS module, use module.exports\n  // as the regeneratorRuntime namespace. Otherwise create a new empty\n  // object. Either way, the resulting object will be used to initialize\n  // the regeneratorRuntime variable at the top of this file.\n   true ? module.exports : undefined\n));\n\ntry {\n  regeneratorRuntime = runtime;\n} catch (accidentalStrictMode) {\n  // This module should not be running in strict mode, so the above\n  // assignment should always work unless something is misconfigured. Just\n  // in case runtime.js accidentally runs in strict mode, we can escape\n  // strict mode using a global Function call. This could conceivably fail\n  // if a Content Security Policy forbids using Function, but in that case\n  // the proper solution is to fix the accidental strict mode problem. If\n  // you've misconfigured your bundler to force strict mode and applied a\n  // CSP to forbid Function, and you're not willing to fix either of those\n  // problems, please detail your unique predicament in a GitHub issue.\n  Function(\"r\", \"regeneratorRuntime = r\")(runtime);\n}\n\n\n//# sourceURL=webpack:///./node_modules/regenerator-runtime/runtime.js?");

/***/ }),

/***/ "./node_modules/whatwg-fetch/fetch.js":
/*!********************************************!*\
  !*** ./node_modules/whatwg-fetch/fetch.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("(function(self) {\n  'use strict';\n\n  if (self.fetch) {\n    return\n  }\n\n  var support = {\n    searchParams: 'URLSearchParams' in self,\n    iterable: 'Symbol' in self && 'iterator' in Symbol,\n    blob: 'FileReader' in self && 'Blob' in self && (function() {\n      try {\n        new Blob()\n        return true\n      } catch(e) {\n        return false\n      }\n    })(),\n    formData: 'FormData' in self,\n    arrayBuffer: 'ArrayBuffer' in self\n  }\n\n  if (support.arrayBuffer) {\n    var viewClasses = [\n      '[object Int8Array]',\n      '[object Uint8Array]',\n      '[object Uint8ClampedArray]',\n      '[object Int16Array]',\n      '[object Uint16Array]',\n      '[object Int32Array]',\n      '[object Uint32Array]',\n      '[object Float32Array]',\n      '[object Float64Array]'\n    ]\n\n    var isDataView = function(obj) {\n      return obj && DataView.prototype.isPrototypeOf(obj)\n    }\n\n    var isArrayBufferView = ArrayBuffer.isView || function(obj) {\n      return obj && viewClasses.indexOf(Object.prototype.toString.call(obj)) > -1\n    }\n  }\n\n  function normalizeName(name) {\n    if (typeof name !== 'string') {\n      name = String(name)\n    }\n    if (/[^a-z0-9\\-#$%&'*+.\\^_`|~]/i.test(name)) {\n      throw new TypeError('Invalid character in header field name')\n    }\n    return name.toLowerCase()\n  }\n\n  function normalizeValue(value) {\n    if (typeof value !== 'string') {\n      value = String(value)\n    }\n    return value\n  }\n\n  // Build a destructive iterator for the value list\n  function iteratorFor(items) {\n    var iterator = {\n      next: function() {\n        var value = items.shift()\n        return {done: value === undefined, value: value}\n      }\n    }\n\n    if (support.iterable) {\n      iterator[Symbol.iterator] = function() {\n        return iterator\n      }\n    }\n\n    return iterator\n  }\n\n  function Headers(headers) {\n    this.map = {}\n\n    if (headers instanceof Headers) {\n      headers.forEach(function(value, name) {\n        this.append(name, value)\n      }, this)\n    } else if (Array.isArray(headers)) {\n      headers.forEach(function(header) {\n        this.append(header[0], header[1])\n      }, this)\n    } else if (headers) {\n      Object.getOwnPropertyNames(headers).forEach(function(name) {\n        this.append(name, headers[name])\n      }, this)\n    }\n  }\n\n  Headers.prototype.append = function(name, value) {\n    name = normalizeName(name)\n    value = normalizeValue(value)\n    var oldValue = this.map[name]\n    this.map[name] = oldValue ? oldValue+','+value : value\n  }\n\n  Headers.prototype['delete'] = function(name) {\n    delete this.map[normalizeName(name)]\n  }\n\n  Headers.prototype.get = function(name) {\n    name = normalizeName(name)\n    return this.has(name) ? this.map[name] : null\n  }\n\n  Headers.prototype.has = function(name) {\n    return this.map.hasOwnProperty(normalizeName(name))\n  }\n\n  Headers.prototype.set = function(name, value) {\n    this.map[normalizeName(name)] = normalizeValue(value)\n  }\n\n  Headers.prototype.forEach = function(callback, thisArg) {\n    for (var name in this.map) {\n      if (this.map.hasOwnProperty(name)) {\n        callback.call(thisArg, this.map[name], name, this)\n      }\n    }\n  }\n\n  Headers.prototype.keys = function() {\n    var items = []\n    this.forEach(function(value, name) { items.push(name) })\n    return iteratorFor(items)\n  }\n\n  Headers.prototype.values = function() {\n    var items = []\n    this.forEach(function(value) { items.push(value) })\n    return iteratorFor(items)\n  }\n\n  Headers.prototype.entries = function() {\n    var items = []\n    this.forEach(function(value, name) { items.push([name, value]) })\n    return iteratorFor(items)\n  }\n\n  if (support.iterable) {\n    Headers.prototype[Symbol.iterator] = Headers.prototype.entries\n  }\n\n  function consumed(body) {\n    if (body.bodyUsed) {\n      return Promise.reject(new TypeError('Already read'))\n    }\n    body.bodyUsed = true\n  }\n\n  function fileReaderReady(reader) {\n    return new Promise(function(resolve, reject) {\n      reader.onload = function() {\n        resolve(reader.result)\n      }\n      reader.onerror = function() {\n        reject(reader.error)\n      }\n    })\n  }\n\n  function readBlobAsArrayBuffer(blob) {\n    var reader = new FileReader()\n    var promise = fileReaderReady(reader)\n    reader.readAsArrayBuffer(blob)\n    return promise\n  }\n\n  function readBlobAsText(blob) {\n    var reader = new FileReader()\n    var promise = fileReaderReady(reader)\n    reader.readAsText(blob)\n    return promise\n  }\n\n  function readArrayBufferAsText(buf) {\n    var view = new Uint8Array(buf)\n    var chars = new Array(view.length)\n\n    for (var i = 0; i < view.length; i++) {\n      chars[i] = String.fromCharCode(view[i])\n    }\n    return chars.join('')\n  }\n\n  function bufferClone(buf) {\n    if (buf.slice) {\n      return buf.slice(0)\n    } else {\n      var view = new Uint8Array(buf.byteLength)\n      view.set(new Uint8Array(buf))\n      return view.buffer\n    }\n  }\n\n  function Body() {\n    this.bodyUsed = false\n\n    this._initBody = function(body) {\n      this._bodyInit = body\n      if (!body) {\n        this._bodyText = ''\n      } else if (typeof body === 'string') {\n        this._bodyText = body\n      } else if (support.blob && Blob.prototype.isPrototypeOf(body)) {\n        this._bodyBlob = body\n      } else if (support.formData && FormData.prototype.isPrototypeOf(body)) {\n        this._bodyFormData = body\n      } else if (support.searchParams && URLSearchParams.prototype.isPrototypeOf(body)) {\n        this._bodyText = body.toString()\n      } else if (support.arrayBuffer && support.blob && isDataView(body)) {\n        this._bodyArrayBuffer = bufferClone(body.buffer)\n        // IE 10-11 can't handle a DataView body.\n        this._bodyInit = new Blob([this._bodyArrayBuffer])\n      } else if (support.arrayBuffer && (ArrayBuffer.prototype.isPrototypeOf(body) || isArrayBufferView(body))) {\n        this._bodyArrayBuffer = bufferClone(body)\n      } else {\n        throw new Error('unsupported BodyInit type')\n      }\n\n      if (!this.headers.get('content-type')) {\n        if (typeof body === 'string') {\n          this.headers.set('content-type', 'text/plain;charset=UTF-8')\n        } else if (this._bodyBlob && this._bodyBlob.type) {\n          this.headers.set('content-type', this._bodyBlob.type)\n        } else if (support.searchParams && URLSearchParams.prototype.isPrototypeOf(body)) {\n          this.headers.set('content-type', 'application/x-www-form-urlencoded;charset=UTF-8')\n        }\n      }\n    }\n\n    if (support.blob) {\n      this.blob = function() {\n        var rejected = consumed(this)\n        if (rejected) {\n          return rejected\n        }\n\n        if (this._bodyBlob) {\n          return Promise.resolve(this._bodyBlob)\n        } else if (this._bodyArrayBuffer) {\n          return Promise.resolve(new Blob([this._bodyArrayBuffer]))\n        } else if (this._bodyFormData) {\n          throw new Error('could not read FormData body as blob')\n        } else {\n          return Promise.resolve(new Blob([this._bodyText]))\n        }\n      }\n\n      this.arrayBuffer = function() {\n        if (this._bodyArrayBuffer) {\n          return consumed(this) || Promise.resolve(this._bodyArrayBuffer)\n        } else {\n          return this.blob().then(readBlobAsArrayBuffer)\n        }\n      }\n    }\n\n    this.text = function() {\n      var rejected = consumed(this)\n      if (rejected) {\n        return rejected\n      }\n\n      if (this._bodyBlob) {\n        return readBlobAsText(this._bodyBlob)\n      } else if (this._bodyArrayBuffer) {\n        return Promise.resolve(readArrayBufferAsText(this._bodyArrayBuffer))\n      } else if (this._bodyFormData) {\n        throw new Error('could not read FormData body as text')\n      } else {\n        return Promise.resolve(this._bodyText)\n      }\n    }\n\n    if (support.formData) {\n      this.formData = function() {\n        return this.text().then(decode)\n      }\n    }\n\n    this.json = function() {\n      return this.text().then(JSON.parse)\n    }\n\n    return this\n  }\n\n  // HTTP methods whose capitalization should be normalized\n  var methods = ['DELETE', 'GET', 'HEAD', 'OPTIONS', 'POST', 'PUT']\n\n  function normalizeMethod(method) {\n    var upcased = method.toUpperCase()\n    return (methods.indexOf(upcased) > -1) ? upcased : method\n  }\n\n  function Request(input, options) {\n    options = options || {}\n    var body = options.body\n\n    if (input instanceof Request) {\n      if (input.bodyUsed) {\n        throw new TypeError('Already read')\n      }\n      this.url = input.url\n      this.credentials = input.credentials\n      if (!options.headers) {\n        this.headers = new Headers(input.headers)\n      }\n      this.method = input.method\n      this.mode = input.mode\n      if (!body && input._bodyInit != null) {\n        body = input._bodyInit\n        input.bodyUsed = true\n      }\n    } else {\n      this.url = String(input)\n    }\n\n    this.credentials = options.credentials || this.credentials || 'omit'\n    if (options.headers || !this.headers) {\n      this.headers = new Headers(options.headers)\n    }\n    this.method = normalizeMethod(options.method || this.method || 'GET')\n    this.mode = options.mode || this.mode || null\n    this.referrer = null\n\n    if ((this.method === 'GET' || this.method === 'HEAD') && body) {\n      throw new TypeError('Body not allowed for GET or HEAD requests')\n    }\n    this._initBody(body)\n  }\n\n  Request.prototype.clone = function() {\n    return new Request(this, { body: this._bodyInit })\n  }\n\n  function decode(body) {\n    var form = new FormData()\n    body.trim().split('&').forEach(function(bytes) {\n      if (bytes) {\n        var split = bytes.split('=')\n        var name = split.shift().replace(/\\+/g, ' ')\n        var value = split.join('=').replace(/\\+/g, ' ')\n        form.append(decodeURIComponent(name), decodeURIComponent(value))\n      }\n    })\n    return form\n  }\n\n  function parseHeaders(rawHeaders) {\n    var headers = new Headers()\n    // Replace instances of \\r\\n and \\n followed by at least one space or horizontal tab with a space\n    // https://tools.ietf.org/html/rfc7230#section-3.2\n    var preProcessedHeaders = rawHeaders.replace(/\\r?\\n[\\t ]+/g, ' ')\n    preProcessedHeaders.split(/\\r?\\n/).forEach(function(line) {\n      var parts = line.split(':')\n      var key = parts.shift().trim()\n      if (key) {\n        var value = parts.join(':').trim()\n        headers.append(key, value)\n      }\n    })\n    return headers\n  }\n\n  Body.call(Request.prototype)\n\n  function Response(bodyInit, options) {\n    if (!options) {\n      options = {}\n    }\n\n    this.type = 'default'\n    this.status = options.status === undefined ? 200 : options.status\n    this.ok = this.status >= 200 && this.status < 300\n    this.statusText = 'statusText' in options ? options.statusText : 'OK'\n    this.headers = new Headers(options.headers)\n    this.url = options.url || ''\n    this._initBody(bodyInit)\n  }\n\n  Body.call(Response.prototype)\n\n  Response.prototype.clone = function() {\n    return new Response(this._bodyInit, {\n      status: this.status,\n      statusText: this.statusText,\n      headers: new Headers(this.headers),\n      url: this.url\n    })\n  }\n\n  Response.error = function() {\n    var response = new Response(null, {status: 0, statusText: ''})\n    response.type = 'error'\n    return response\n  }\n\n  var redirectStatuses = [301, 302, 303, 307, 308]\n\n  Response.redirect = function(url, status) {\n    if (redirectStatuses.indexOf(status) === -1) {\n      throw new RangeError('Invalid status code')\n    }\n\n    return new Response(null, {status: status, headers: {location: url}})\n  }\n\n  self.Headers = Headers\n  self.Request = Request\n  self.Response = Response\n\n  self.fetch = function(input, init) {\n    return new Promise(function(resolve, reject) {\n      var request = new Request(input, init)\n      var xhr = new XMLHttpRequest()\n\n      xhr.onload = function() {\n        var options = {\n          status: xhr.status,\n          statusText: xhr.statusText,\n          headers: parseHeaders(xhr.getAllResponseHeaders() || '')\n        }\n        options.url = 'responseURL' in xhr ? xhr.responseURL : options.headers.get('X-Request-URL')\n        var body = 'response' in xhr ? xhr.response : xhr.responseText\n        resolve(new Response(body, options))\n      }\n\n      xhr.onerror = function() {\n        reject(new TypeError('Network request failed'))\n      }\n\n      xhr.ontimeout = function() {\n        reject(new TypeError('Network request failed'))\n      }\n\n      xhr.open(request.method, request.url, true)\n\n      if (request.credentials === 'include') {\n        xhr.withCredentials = true\n      } else if (request.credentials === 'omit') {\n        xhr.withCredentials = false\n      }\n\n      if ('responseType' in xhr && support.blob) {\n        xhr.responseType = 'blob'\n      }\n\n      request.headers.forEach(function(value, name) {\n        xhr.setRequestHeader(name, value)\n      })\n\n      xhr.send(typeof request._bodyInit === 'undefined' ? null : request._bodyInit)\n    })\n  }\n  self.fetch.polyfill = true\n})(typeof self !== 'undefined' ? self : this);\n\n\n//# sourceURL=webpack:///./node_modules/whatwg-fetch/fetch.js?");

/***/ }),

/***/ "./webpack/home.js":
/*!*************************!*\
  !*** ./webpack/home.js ***!
  \*************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _module_accordion_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./module/accordion.js */ \"./webpack/module/accordion.js\");\n/* harmony import */ var _module_modal_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./module/modal.js */ \"./webpack/module/modal.js\");\n/* harmony import */ var _module_shine_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./module/shine.js */ \"./webpack/module/shine.js\");\n/* harmony import */ var _module_tooltip_foto_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./module/tooltip-foto.js */ \"./webpack/module/tooltip-foto.js\");\n/* harmony import */ var _module_tooltip_cheat_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./module/tooltip-cheat.js */ \"./webpack/module/tooltip-cheat.js\");\n/* harmony import */ var _module_countdown__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./module/countdown */ \"./webpack/module/countdown.js\");\n/* harmony import */ var _module_changeImage_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./module/changeImage.js */ \"./webpack/module/changeImage.js\");\nvar instantsearch = __webpack_require__(/*! instantsearch.js */ \"./node_modules/instantsearch.js/es/index.js\");\n\n\n\n\n\n\n\n/* import ChangeImageLogo from './module/changeImageLogo.js' */\n\n\nObject(_module_accordion_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\nObject(_module_modal_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\n/* shine(); */\n\nObject(_module_tooltip_foto_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"])();\nObject(_module_tooltip_cheat_js__WEBPACK_IMPORTED_MODULE_4__[\"default\"])();\nvar Images = new _module_changeImage_js__WEBPACK_IMPORTED_MODULE_6__[\"default\"]();\nImages.init();\nvar inicioSite = new _module_countdown__WEBPACK_IMPORTED_MODULE_5__[\"default\"](\"29 February 2020 23:59:59 GMT-0300\");\nvar search = instantsearch({\n  appId: '2ASI6PELEP',\n  apiKey: '72edcee285e2dc9b9dda7824e25b7131',\n  indexName: 'emersonleite',\n  routing: true\n});\nsearch.start();\n\n//# sourceURL=webpack:///./webpack/home.js?");

/***/ }),

/***/ "./webpack/module/accordion.js":
/*!*************************************!*\
  !*** ./webpack/module/accordion.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return accordion; });\nfunction accordion() {\n  //Selecionando elementos\n  var elemento = document.querySelectorAll(\"[data-accordion-boolean='true']\");\n  var accordion = \"data-accordion\";\n  elemento.forEach(function (item) {\n    item.parentElement.nextElementSibling.setAttribute(accordion, \"\");\n  }); //Add event listener\n\n  elemento.forEach(function (item) {\n    item.addEventListener(\"click\", function () {\n      if (item.parentElement.nextElementSibling.getAttribute(accordion)) {\n        item.parentElement.nextElementSibling.setAttribute(accordion, \"\");\n      } else {\n        item.parentElement.nextElementSibling.setAttribute(accordion, \"ativo\");\n      }\n    });\n  });\n}\n\n//# sourceURL=webpack:///./webpack/module/accordion.js?");

/***/ }),

/***/ "./webpack/module/changeImage.js":
/*!***************************************!*\
  !*** ./webpack/module/changeImage.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return changeImage; });\nfunction _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }\n\nfunction _nonIterableSpread() { throw new TypeError(\"Invalid attempt to spread non-iterable instance\"); }\n\nfunction _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === \"[object Arguments]\") return Array.from(iter); }\n\nfunction _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nvar changeImage =\n/*#__PURE__*/\nfunction () {\n  function changeImage() {\n    _classCallCheck(this, changeImage);\n\n    this.images = document.querySelectorAll(\".social-image\");\n  }\n\n  _createClass(changeImage, [{\n    key: \"addEventImages\",\n    value: function addEventImages() {\n      var _this = this;\n\n      this.imagesArray.forEach(function (img) {\n        img.addEventListener(\"mouseover\", _this.changeSrc);\n      });\n    }\n  }, {\n    key: \"addEventImagesLeave\",\n    value: function addEventImagesLeave() {\n      this.imagesArray.forEach(function (img) {\n        img.addEventListener(\"mouseleave\", function (event) {\n          event.currentTarget.src = event.currentTarget.src.replace(\"-hover.svg\", \".svg\");\n        });\n      });\n    }\n  }, {\n    key: \"changeSrc\",\n    value: function changeSrc(event) {\n      console.log(event.currentTarget.src);\n      event.currentTarget.src = event.currentTarget.src.replace(\".svg\", \"-hover.svg\");\n    }\n  }, {\n    key: \"init\",\n    value: function init() {\n      this.imagesArray = _toConsumableArray(this.images);\n      this.addEventImages();\n      this.addEventImagesLeave();\n    }\n  }]);\n\n  return changeImage;\n}();\n\n\n\n//# sourceURL=webpack:///./webpack/module/changeImage.js?");

/***/ }),

/***/ "./webpack/module/countdown.js":
/*!*************************************!*\
  !*** ./webpack/module/countdown.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Countdown; });\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nvar Countdown =\n/*#__PURE__*/\nfunction () {\n  function Countdown(futureDate) {\n    _classCallCheck(this, Countdown);\n\n    this.futureDate = futureDate;\n  }\n\n  _createClass(Countdown, [{\n    key: \"_actualDate\",\n    get: function get() {\n      return new Date();\n    }\n  }, {\n    key: \"_futureDate\",\n    get: function get() {\n      return new Date(this.futureDate);\n    }\n  }, {\n    key: \"_timeStampDiff\",\n    get: function get() {\n      return this._futureDate.getTime() - this._actualDate.getTime();\n    }\n  }, {\n    key: \"days\",\n    get: function get() {\n      return Math.floor(this._timeStampDiff / (24 * 60 * 60 * 1000));\n    }\n  }, {\n    key: \"hours\",\n    get: function get() {\n      return Math.floor(this._timeStampDiff / (60 * 60 * 1000));\n    }\n  }, {\n    key: \"minutes\",\n    get: function get() {\n      return Math.floor(this._timeStampDiff / (60 * 1000));\n    }\n  }, {\n    key: \"seconds\",\n    get: function get() {\n      return Math.floor(this._timeStampDiff / 1000);\n    }\n  }, {\n    key: \"total\",\n    get: function get() {\n      var days = this.days;\n      var hours = this.hours % 24;\n      var minutes = this.minutes % 60;\n      var seconds = this.seconds % 60;\n      return {\n        days: days,\n        hours: hours,\n        // simplificando, pois o nome da chave e valor são iguais\n        minutes: minutes,\n        seconds: seconds\n      };\n    }\n  }]);\n\n  return Countdown;\n}();\n\n\n\n//# sourceURL=webpack:///./webpack/module/countdown.js?");

/***/ }),

/***/ "./webpack/module/modal.js":
/*!*********************************!*\
  !*** ./webpack/module/modal.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return modal; });\nfunction modal() {\n  // Função de callback para Teclas CRTL + Alt + 'd'\n  function callback() {\n    var lastSection = document.querySelector(\"footer\");\n    var body = document.body; // Criando nova seção...\n\n    var newSection = document.createElement(\"section\");\n    newSection.setAttribute(\"data-modal\", \"true\");\n    var newDiv = document.createElement(\"div\");\n    newSection.appendChild(newDiv); // criando novo notão de fechamento de janela\n\n    var newButton = document.createElement(\"div\");\n    newButton.innerHTML = \"<p>X</p>\";\n    newDiv.appendChild(newButton); //lastSection.append(newSection);\n\n    body.insertBefore(newSection, lastSection); // Evento de fechamento da janela\n\n    newButton.addEventListener(\"click\", function () {\n      window.addEventListener(\"keyup\", keyupCallback);\n      newSection.remove();\n    }); // Evento de click fora da div de conteúdo\n\n    newSection.addEventListener(\"click\", function (event) {\n      if (event.target === newSection) {\n        newSection.remove();\n        window.addEventListener(\"keyup\", keyupCallback);\n      }\n    });\n    sectionObject.element = newSection;\n  } // Função de callbak para evento de botão\n\n\n  var callbackPrevent = function callbackPrevent(event) {\n    event.preventDefault();\n    callback();\n\n    if (sectionObject.element) {\n      window.removeEventListener(\"keyup\", keyupCallback);\n    }\n  }; // Criando janela de DOC com botão\n\n\n  var docButton = document.querySelector('[href^=\"/#doc\"]');\n  docButton.addEventListener(\"click\", callbackPrevent); // Criando janela de DOC com Teclas CRTL + Alt + 'd'\n\n  function keyupCallback(event) {\n    if (event.ctrlKey && event.altKey && event.key === \"d\") {\n      callback();\n    }\n\n    if (sectionObject.element) {\n      window.removeEventListener(\"keyup\", keyupCallback);\n    }\n  }\n\n  window.addEventListener(\"keyup\", keyupCallback);\n  var sectionObject = {\n    element: \"\"\n  };\n}\n\n//# sourceURL=webpack:///./webpack/module/modal.js?");

/***/ }),

/***/ "./webpack/module/shine.js":
/*!*********************************!*\
  !*** ./webpack/module/shine.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return shine; });\nfunction shine() {\n  console.log(\"ola\");\n  var foto = document.querySelector(\"img[src^='img/logo.svg']\");\n\n  var callback = function callback() {\n    console.log(\"clicado\");\n    foto.classList.add(\"ativo\");\n  };\n\n  var inativo = function inativo() {\n    foto.classList.remove(\"ativo\");\n  };\n\n  foto.addEventListener(\"mouseover\", callback);\n  foto.addEventListener(\"mouseleave\", inativo);\n}\n\n//# sourceURL=webpack:///./webpack/module/shine.js?");

/***/ }),

/***/ "./webpack/module/tooltip-cheat.js":
/*!*****************************************!*\
  !*** ./webpack/module/tooltip-cheat.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return tooltipCheat; });\nfunction tooltipCheat() {\n  var anchor = document.querySelector(\"a[href='/#doc']\");\n  var divCheat = document.querySelector(\".cheat-sheet\");\n  var maior = window.innerWidth >= 1300;\n  var coordenada = {\n    X: \"\",\n    Y: \"\",\n    Xalterada: \"\",\n    Yalterada: \"\"\n  };\n\n  if (maior) {\n    coordenada.Y = divCheat.offsetTop + anchor.clientHeight / 2;\n    coordenada.X = divCheat.offsetLeft + anchor.clientWidth;\n  } else {\n    coordenada.Y = divCheat.offsetTop + anchor.clientHeight;\n    coordenada.X = divCheat.offsetLeft + anchor.clientWidth / 2;\n  }\n\n  anchor.addEventListener(\"mouseover\", onMouseOver);\n  var onMouseLeave = {\n    element: \"\",\n    handleEvent: function handleEvent() {\n      this.element.remove();\n      anchor.removeEventListener(\"mouseleave\", onMouseLeave);\n    }\n  };\n\n  function onMouseOver(event) {\n    var tooltip = criarTooltipBox(this);\n    coordenada.tooltipElement = tooltip;\n    console.log(coordenada.tooltipElement);\n    /* */\n\n    var largura = tooltip.clientWidth;\n    console.log(largura);\n    console.log(tooltip.clientHeight);\n\n    if (maior) {\n      tooltip.style.top = coordenada.Y - tooltip.clientHeight / 2 - 10 + \"px\";\n      tooltip.style.left = coordenada.X + 10 + \"px\";\n    } else {\n      tooltip.style.top = coordenada.Y - tooltip.clientHeight + 20 + \"px\";\n      tooltip.style.left = coordenada.X - tooltip.clientWidth / 2 + \"px\";\n    }\n\n    onMouseLeave.element = tooltip;\n    anchor.addEventListener(\"mouseleave\", onMouseLeave);\n  }\n\n  function criarTooltipBox(element) {\n    var box = document.createElement(\"div\");\n    var text = element.getAttribute(\"aria-label\");\n    box.classList.add(\"tooltip\");\n    box.innerText = text;\n    document.body.appendChild(box);\n    return box;\n  }\n}\n\n//# sourceURL=webpack:///./webpack/module/tooltip-cheat.js?");

/***/ }),

/***/ "./webpack/module/tooltip-foto.js":
/*!****************************************!*\
  !*** ./webpack/module/tooltip-foto.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return tooltip; });\nfunction tooltip() {\n  var photo = document.querySelector('img[src=\"img/Foto.png\"]');\n  var divFoto = document.querySelector(\".div-foto\");\n  var maior620 = window.innerWidth >= 620;\n  var coordenada = {\n    X: \"\",\n    Y: \"\",\n    Xalterada: \"\",\n    Yalterada: \"\"\n  };\n\n  if (maior620) {\n    coordenada.Y = divFoto.offsetTop + photo.clientHeight / 2;\n    coordenada.X = divFoto.offsetLeft + photo.clientWidth;\n  } else {\n    coordenada.Y = divFoto.offsetTop + photo.clientHeight;\n    coordenada.X = divFoto.offsetLeft + photo.clientWidth / 2;\n  }\n\n  photo.addEventListener(\"mouseover\", onMouseOver);\n  var onMouseLeave = {\n    element: \"\",\n    handleEvent: function handleEvent() {\n      this.element.remove();\n      photo.removeEventListener(\"mouseleave\", onMouseLeave);\n    }\n  };\n\n  function onMouseOver(event) {\n    var tooltip = criarTooltipBox(this);\n    coordenada.tooltipElement = tooltip;\n    console.log(coordenada.tooltipElement);\n    var largura = tooltip.clientWidth;\n    console.log(largura);\n    console.log(tooltip.clientHeight);\n\n    if (maior620) {\n      tooltip.style.top = coordenada.Y - tooltip.clientHeight / 2 + \"px\";\n      tooltip.style.left = coordenada.X + 2 + \"px\";\n    } else {\n      tooltip.style.top = coordenada.Y + 2 + \"px\";\n      tooltip.style.left = coordenada.X - tooltip.clientWidth / 2 + \"px\";\n    }\n\n    onMouseLeave.element = tooltip;\n    photo.addEventListener(\"mouseleave\", onMouseLeave);\n  }\n\n  function criarTooltipBox(element) {\n    var box = document.createElement(\"div\");\n    var text = element.getAttribute(\"aria-label\");\n    box.classList.add(\"tooltip\");\n    box.innerText = text;\n    document.body.appendChild(box);\n    return box;\n  }\n}\n\n//# sourceURL=webpack:///./webpack/module/tooltip-foto.js?");

/***/ }),

/***/ 0:
/*!************************************************************!*\
  !*** multi @babel/polyfill whatwg-fetch ./webpack/home.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("__webpack_require__(/*! @babel/polyfill */\"./node_modules/@babel/polyfill/lib/index.js\");\n__webpack_require__(/*! whatwg-fetch */\"./node_modules/whatwg-fetch/fetch.js\");\nmodule.exports = __webpack_require__(/*! ./webpack/home.js */\"./webpack/home.js\");\n\n\n//# sourceURL=webpack:///multi_@babel/polyfill_whatwg-fetch_./webpack/home.js?");

/***/ })

/******/ });