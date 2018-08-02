(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('rxjs/Observable'), require('@angular/platform-browser'), require('ng2-cookies/ng2-cookies'), require('rxjs/Rx'), require('@angular/router'), require('@angular/animations'), require('@angular/forms'), require('@angular/common'), require('@angular/common/http')) :
    typeof define === 'function' && define.amd ? define(['exports', '@angular/core', 'rxjs/Observable', '@angular/platform-browser', 'ng2-cookies/ng2-cookies', 'rxjs/Rx', '@angular/router', '@angular/animations', '@angular/forms', '@angular/common', '@angular/common/http'], factory) :
    (factory((global['jdb-plg-ui'] = {}),global.ng.core,global.Observable,global.ng.platformBrowser,global.Cookie,global.Observable,global.ng.router,global.ng.animations,global.ng.forms,global.ng.common,global.ng.common.http));
}(this, (function (exports,core,Observable,platformBrowser,ng2Cookies,Rx,router,animations,forms,common,http) { 'use strict';

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
    /* global Reflect, Promise */

    var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };

    function __extends(d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    }

    var __assign = function() {
        __assign = Object.assign || function __assign(t) {
            for (var s, i = 1, n = arguments.length; i < n; i++) {
                s = arguments[i];
                for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
            }
            return t;
        };
        return __assign.apply(this, arguments);
    };

    /**
     * @license Angular v5.2.11
     * (c) 2010-2018 Google, Inc. https://angular.io/
     * License: MIT
     */

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    /**
     * @license
     * Copyright Google Inc. All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
    /**
     * A backend for http that uses the `XMLHttpRequest` browser API.
     *
     * Take care not to evaluate this in non-browser contexts.
     *
     * @deprecated use \@angular/common/http instead
     */
    var BrowserXhr = /** @class */ (function () {
        function BrowserXhr() {
        }
        /**
         * @return {?}
         */
        BrowserXhr.prototype.build = /**
         * @return {?}
         */
        function () { return /** @type {?} */ ((new XMLHttpRequest())); };
        BrowserXhr.decorators = [
            { type: core.Injectable },
        ];
        /** @nocollapse */
        BrowserXhr.ctorParameters = function () { return []; };
        return BrowserXhr;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    /**
     * @license
     * Copyright Google Inc. All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
    /** @enum {number} */
    var RequestMethod = {
        Get: 0,
        Post: 1,
        Put: 2,
        Delete: 3,
        Options: 4,
        Head: 5,
        Patch: 6,
    };
    RequestMethod[RequestMethod.Get] = "Get";
    RequestMethod[RequestMethod.Post] = "Post";
    RequestMethod[RequestMethod.Put] = "Put";
    RequestMethod[RequestMethod.Delete] = "Delete";
    RequestMethod[RequestMethod.Options] = "Options";
    RequestMethod[RequestMethod.Head] = "Head";
    RequestMethod[RequestMethod.Patch] = "Patch";
    /** @enum {number} */
    var ReadyState = {
        Unsent: 0,
        Open: 1,
        HeadersReceived: 2,
        Loading: 3,
        Done: 4,
        Cancelled: 5,
    };
    ReadyState[ReadyState.Unsent] = "Unsent";
    ReadyState[ReadyState.Open] = "Open";
    ReadyState[ReadyState.HeadersReceived] = "HeadersReceived";
    ReadyState[ReadyState.Loading] = "Loading";
    ReadyState[ReadyState.Done] = "Done";
    ReadyState[ReadyState.Cancelled] = "Cancelled";
    /** @enum {number} */
    var ResponseType = {
        Basic: 0,
        Cors: 1,
        Default: 2,
        Error: 3,
        Opaque: 4,
    };
    ResponseType[ResponseType.Basic] = "Basic";
    ResponseType[ResponseType.Cors] = "Cors";
    ResponseType[ResponseType.Default] = "Default";
    ResponseType[ResponseType.Error] = "Error";
    ResponseType[ResponseType.Opaque] = "Opaque";
    /** @enum {number} */
    var ContentType = {
        NONE: 0,
        JSON: 1,
        FORM: 2,
        FORM_DATA: 3,
        TEXT: 4,
        BLOB: 5,
        ARRAY_BUFFER: 6,
    };
    ContentType[ContentType.NONE] = "NONE";
    ContentType[ContentType.JSON] = "JSON";
    ContentType[ContentType.FORM] = "FORM";
    ContentType[ContentType.FORM_DATA] = "FORM_DATA";
    ContentType[ContentType.TEXT] = "TEXT";
    ContentType[ContentType.BLOB] = "BLOB";
    ContentType[ContentType.ARRAY_BUFFER] = "ARRAY_BUFFER";
    /** @enum {number} */
    var ResponseContentType = {
        Text: 0,
        Json: 1,
        ArrayBuffer: 2,
        Blob: 3,
    };
    ResponseContentType[ResponseContentType.Text] = "Text";
    ResponseContentType[ResponseContentType.Json] = "Json";
    ResponseContentType[ResponseContentType.ArrayBuffer] = "ArrayBuffer";
    ResponseContentType[ResponseContentType.Blob] = "Blob";

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    /**
     * @license
     * Copyright Google Inc. All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
    /**
     * Polyfill for [Headers](https://developer.mozilla.org/en-US/docs/Web/API/Headers/Headers), as
     * specified in the [Fetch Spec](https://fetch.spec.whatwg.org/#headers-class).
     *
     * The only known difference between this `Headers` implementation and the spec is the
     * lack of an `entries` method.
     *
     * ### Example
     *
     * ```
     * import {Headers} from '\@angular/http';
     *
     * var firstHeaders = new Headers();
     * firstHeaders.append('Content-Type', 'image/jpeg');
     * console.log(firstHeaders.get('Content-Type')) //'image/jpeg'
     *
     * // Create headers from Plain Old JavaScript Object
     * var secondHeaders = new Headers({
     *   'X-My-Custom-Header': 'Angular'
     * });
     * console.log(secondHeaders.get('X-My-Custom-Header')); //'Angular'
     *
     * var thirdHeaders = new Headers(secondHeaders);
     * console.log(thirdHeaders.get('X-My-Custom-Header')); //'Angular'
     * ```
     *
     * @deprecated use \@angular/common/http instead
     */
    var Headers = /** @class */ (function () {
        // TODO(vicb): any -> string|string[]
        function Headers(headers) {
            var _this = this;
            /**
             * \@internal header names are lower case
             */
            this._headers = new Map();
            /**
             * \@internal map lower case names to actual names
             */
            this._normalizedNames = new Map();
            if (!headers) {
                return;
            }
            if (headers instanceof Headers) {
                headers.forEach(function (values, name) {
                    values.forEach(function (value) { return _this.append(name, value); });
                });
                return;
            }
            Object.keys(headers).forEach(function (name) {
                var /** @type {?} */ values = Array.isArray(headers[name]) ? headers[name] : [headers[name]];
                _this.delete(name);
                values.forEach(function (value) { return _this.append(name, value); });
            });
        }
        /**
         * Returns a new Headers instance from the given DOMString of Response Headers
         */
        /**
         * Returns a new Headers instance from the given DOMString of Response Headers
         * @param {?} headersString
         * @return {?}
         */
        Headers.fromResponseHeaderString = /**
         * Returns a new Headers instance from the given DOMString of Response Headers
         * @param {?} headersString
         * @return {?}
         */
        function (headersString) {
            var /** @type {?} */ headers = new Headers();
            headersString.split('\n').forEach(function (line) {
                var /** @type {?} */ index = line.indexOf(':');
                if (index > 0) {
                    var /** @type {?} */ name_1 = line.slice(0, index);
                    var /** @type {?} */ value = line.slice(index + 1).trim();
                    headers.set(name_1, value);
                }
            });
            return headers;
        };
        /**
         * Appends a header to existing list of header values for a given header name.
         */
        /**
         * Appends a header to existing list of header values for a given header name.
         * @param {?} name
         * @param {?} value
         * @return {?}
         */
        Headers.prototype.append = /**
         * Appends a header to existing list of header values for a given header name.
         * @param {?} name
         * @param {?} value
         * @return {?}
         */
        function (name, value) {
            var /** @type {?} */ values = this.getAll(name);
            if (values === null) {
                this.set(name, value);
            }
            else {
                values.push(value);
            }
        };
        /**
         * Deletes all header values for the given name.
         */
        /**
         * Deletes all header values for the given name.
         * @param {?} name
         * @return {?}
         */
        Headers.prototype.delete = /**
         * Deletes all header values for the given name.
         * @param {?} name
         * @return {?}
         */
        function (name) {
            var /** @type {?} */ lcName = name.toLowerCase();
            this._normalizedNames.delete(lcName);
            this._headers.delete(lcName);
        };
        /**
         * @param {?} fn
         * @return {?}
         */
        Headers.prototype.forEach = /**
         * @param {?} fn
         * @return {?}
         */
        function (fn) {
            var _this = this;
            this._headers.forEach(function (values, lcName) { return fn(values, _this._normalizedNames.get(lcName), _this._headers); });
        };
        /**
         * Returns first header that matches given name.
         */
        /**
         * Returns first header that matches given name.
         * @param {?} name
         * @return {?}
         */
        Headers.prototype.get = /**
         * Returns first header that matches given name.
         * @param {?} name
         * @return {?}
         */
        function (name) {
            var /** @type {?} */ values = this.getAll(name);
            if (values === null) {
                return null;
            }
            return values.length > 0 ? values[0] : null;
        };
        /**
         * Checks for existence of header by given name.
         */
        /**
         * Checks for existence of header by given name.
         * @param {?} name
         * @return {?}
         */
        Headers.prototype.has = /**
         * Checks for existence of header by given name.
         * @param {?} name
         * @return {?}
         */
        function (name) { return this._headers.has(name.toLowerCase()); };
        /**
         * Returns the names of the headers
         */
        /**
         * Returns the names of the headers
         * @return {?}
         */
        Headers.prototype.keys = /**
         * Returns the names of the headers
         * @return {?}
         */
        function () { return Array.from(this._normalizedNames.values()); };
        /**
         * Sets or overrides header value for given name.
         */
        /**
         * Sets or overrides header value for given name.
         * @param {?} name
         * @param {?} value
         * @return {?}
         */
        Headers.prototype.set = /**
         * Sets or overrides header value for given name.
         * @param {?} name
         * @param {?} value
         * @return {?}
         */
        function (name, value) {
            if (Array.isArray(value)) {
                if (value.length) {
                    this._headers.set(name.toLowerCase(), [value.join(',')]);
                }
            }
            else {
                this._headers.set(name.toLowerCase(), [value]);
            }
            this.mayBeSetNormalizedName(name);
        };
        /**
         * Returns values of all headers.
         */
        /**
         * Returns values of all headers.
         * @return {?}
         */
        Headers.prototype.values = /**
         * Returns values of all headers.
         * @return {?}
         */
        function () { return Array.from(this._headers.values()); };
        /**
         * Returns string of all headers.
         */
        // TODO(vicb): returns {[name: string]: string[]}
        /**
         * Returns string of all headers.
         * @return {?}
         */
        Headers.prototype.toJSON = /**
         * Returns string of all headers.
         * @return {?}
         */
        function () {
            var _this = this;
            var /** @type {?} */ serialized = {};
            this._headers.forEach(function (values, name) {
                var /** @type {?} */ split = [];
                values.forEach(function (v) { return split.push.apply(split, v.split(',')); });
                serialized[/** @type {?} */ ((_this._normalizedNames.get(name)))] = split;
            });
            return serialized;
        };
        /**
         * Returns list of header values for a given name.
         */
        /**
         * Returns list of header values for a given name.
         * @param {?} name
         * @return {?}
         */
        Headers.prototype.getAll = /**
         * Returns list of header values for a given name.
         * @param {?} name
         * @return {?}
         */
        function (name) {
            return this.has(name) ? this._headers.get(name.toLowerCase()) || null : null;
        };
        /**
         * This method is not implemented.
         */
        /**
         * This method is not implemented.
         * @return {?}
         */
        Headers.prototype.entries = /**
         * This method is not implemented.
         * @return {?}
         */
        function () { throw new Error('"entries" method is not implemented on Headers class'); };
        /**
         * @param {?} name
         * @return {?}
         */
        Headers.prototype.mayBeSetNormalizedName = /**
         * @param {?} name
         * @return {?}
         */
        function (name) {
            var /** @type {?} */ lcName = name.toLowerCase();
            if (!this._normalizedNames.has(lcName)) {
                this._normalizedNames.set(lcName, name);
            }
        };
        return Headers;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    /**
     * @license
     * Copyright Google Inc. All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
    /**
     * Creates a response options object to be optionally provided when instantiating a
     * {\@link Response}.
     *
     * This class is based on the `ResponseInit` description in the [Fetch
     * Spec](https://fetch.spec.whatwg.org/#responseinit).
     *
     * All values are null by default. Typical defaults can be found in the
     * {\@link BaseResponseOptions} class, which sub-classes `ResponseOptions`.
     *
     * This class may be used in tests to build {\@link Response Responses} for
     * mock responses (see {\@link MockBackend}).
     *
     * ### Example ([live demo](http://plnkr.co/edit/P9Jkk8e8cz6NVzbcxEsD?p=preview))
     *
     * ```typescript
     * import {ResponseOptions, Response} from '\@angular/http';
     *
     * var options = new ResponseOptions({
     *   body: '{"name":"Jeff"}'
     * });
     * var res = new Response(options);
     *
     * console.log('res.json():', res.json()); // Object {name: "Jeff"}
     * ```
     *
     * @deprecated use \@angular/common/http instead
     */
    var ResponseOptions = /** @class */ (function () {
        function ResponseOptions(opts) {
            if (opts === void 0) { opts = {}; }
            var body = opts.body, status = opts.status, headers = opts.headers, statusText = opts.statusText, type = opts.type, url = opts.url;
            this.body = body != null ? body : null;
            this.status = status != null ? status : null;
            this.headers = headers != null ? headers : null;
            this.statusText = statusText != null ? statusText : null;
            this.type = type != null ? type : null;
            this.url = url != null ? url : null;
        }
        /**
         * Creates a copy of the `ResponseOptions` instance, using the optional input as values to
         * override
         * existing values. This method will not change the values of the instance on which it is being
         * called.
         *
         * This may be useful when sharing a base `ResponseOptions` object inside tests,
         * where certain properties may change from test to test.
         *
         * ### Example ([live demo](http://plnkr.co/edit/1lXquqFfgduTFBWjNoRE?p=preview))
         *
         * ```typescript
         * import {ResponseOptions, Response} from '@angular/http';
         *
         * var options = new ResponseOptions({
         *   body: {name: 'Jeff'}
         * });
         * var res = new Response(options.merge({
         *   url: 'https://google.com'
         * }));
         * console.log('options.url:', options.url); // null
         * console.log('res.json():', res.json()); // Object {name: "Jeff"}
         * console.log('res.url:', res.url); // https://google.com
         * ```
         */
        /**
         * Creates a copy of the `ResponseOptions` instance, using the optional input as values to
         * override
         * existing values. This method will not change the values of the instance on which it is being
         * called.
         *
         * This may be useful when sharing a base `ResponseOptions` object inside tests,
         * where certain properties may change from test to test.
         *
         * ### Example ([live demo](http://plnkr.co/edit/1lXquqFfgduTFBWjNoRE?p=preview))
         *
         * ```typescript
         * import {ResponseOptions, Response} from '\@angular/http';
         *
         * var options = new ResponseOptions({
         *   body: {name: 'Jeff'}
         * });
         * var res = new Response(options.merge({
         *   url: 'https://google.com'
         * }));
         * console.log('options.url:', options.url); // null
         * console.log('res.json():', res.json()); // Object {name: "Jeff"}
         * console.log('res.url:', res.url); // https://google.com
         * ```
         * @param {?=} options
         * @return {?}
         */
        ResponseOptions.prototype.merge = /**
         * Creates a copy of the `ResponseOptions` instance, using the optional input as values to
         * override
         * existing values. This method will not change the values of the instance on which it is being
         * called.
         *
         * This may be useful when sharing a base `ResponseOptions` object inside tests,
         * where certain properties may change from test to test.
         *
         * ### Example ([live demo](http://plnkr.co/edit/1lXquqFfgduTFBWjNoRE?p=preview))
         *
         * ```typescript
         * import {ResponseOptions, Response} from '\@angular/http';
         *
         * var options = new ResponseOptions({
         *   body: {name: 'Jeff'}
         * });
         * var res = new Response(options.merge({
         *   url: 'https://google.com'
         * }));
         * console.log('options.url:', options.url); // null
         * console.log('res.json():', res.json()); // Object {name: "Jeff"}
         * console.log('res.url:', res.url); // https://google.com
         * ```
         * @param {?=} options
         * @return {?}
         */
        function (options) {
            return new ResponseOptions({
                body: options && options.body != null ? options.body : this.body,
                status: options && options.status != null ? options.status : this.status,
                headers: options && options.headers != null ? options.headers : this.headers,
                statusText: options && options.statusText != null ? options.statusText : this.statusText,
                type: options && options.type != null ? options.type : this.type,
                url: options && options.url != null ? options.url : this.url,
            });
        };
        return ResponseOptions;
    }());
    /**
     * Subclass of {\@link ResponseOptions}, with default values.
     *
     * Default values:
     *  * status: 200
     *  * headers: empty {\@link Headers} object
     *
     * This class could be extended and bound to the {\@link ResponseOptions} class
     * when configuring an {\@link Injector}, in order to override the default options
     * used by {\@link Http} to create {\@link Response Responses}.
     *
     * ### Example ([live demo](http://plnkr.co/edit/qv8DLT?p=preview))
     *
     * ```typescript
     * import {provide} from '\@angular/core';
     * import {bootstrap} from '\@angular/platform-browser/browser';
     * import {HTTP_PROVIDERS, Headers, Http, BaseResponseOptions, ResponseOptions} from
     * '\@angular/http';
     * import {App} from './myapp';
     *
     * class MyOptions extends BaseResponseOptions {
     *   headers:Headers = new Headers({network: 'github'});
     * }
     *
     * bootstrap(App, [HTTP_PROVIDERS, {provide: ResponseOptions, useClass: MyOptions}]);
     * ```
     *
     * The options could also be extended when manually creating a {\@link Response}
     * object.
     *
     * ### Example ([live demo](http://plnkr.co/edit/VngosOWiaExEtbstDoix?p=preview))
     *
     * ```
     * import {BaseResponseOptions, Response} from '\@angular/http';
     *
     * var options = new BaseResponseOptions();
     * var res = new Response(options.merge({
     *   body: 'Angular',
     *   headers: new Headers({framework: 'angular'})
     * }));
     * console.log('res.headers.get("framework"):', res.headers.get('framework')); // angular
     * console.log('res.text():', res.text()); // Angular;
     * ```
     *
     * @deprecated use \@angular/common/http instead
     */
    var BaseResponseOptions = /** @class */ (function (_super) {
        __extends(BaseResponseOptions, _super);
        function BaseResponseOptions() {
            return _super.call(this, { status: 200, statusText: 'Ok', type: ResponseType.Default, headers: new Headers() }) || this;
        }
        BaseResponseOptions.decorators = [
            { type: core.Injectable },
        ];
        /** @nocollapse */
        BaseResponseOptions.ctorParameters = function () { return []; };
        return BaseResponseOptions;
    }(ResponseOptions));

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    /**
     * @license
     * Copyright Google Inc. All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
    /**
     * Abstract class from which real backends are derived.
     *
     * The primary purpose of a `ConnectionBackend` is to create new connections to fulfill a given
     * {\@link Request}.
     *
     * @deprecated use \@angular/common/http instead
     * @abstract
     */
    var ConnectionBackend = /** @class */ (function () {
        function ConnectionBackend() {
        }
        return ConnectionBackend;
    }());
    /**
     * An XSRFStrategy configures XSRF protection (e.g. via headers) on an HTTP request.
     *
     * @deprecated use \@angular/common/http instead
     * @abstract
     */
    var XSRFStrategy = /** @class */ (function () {
        function XSRFStrategy() {
        }
        return XSRFStrategy;
    }());
    /**
     * Interface for options to construct a RequestOptions, based on
     * [RequestInit](https://fetch.spec.whatwg.org/#requestinit) from the Fetch spec.
     *
     * @deprecated use \@angular/common/http instead
     * @record
     */

    /**
     * Required structure when constructing new Request();
     * @record
     */

    /**
     * Interface for options to construct a Response, based on
     * [ResponseInit](https://fetch.spec.whatwg.org/#responseinit) from the Fetch spec.
     *
     * @deprecated use \@angular/common/http instead
     * @record
     */

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    /**
     * @license
     * Copyright Google Inc. All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
    /**
     * @param {?} method
     * @return {?}
     */
    function normalizeMethodName(method) {
        if (typeof method !== 'string')
            return method;
        switch (method.toUpperCase()) {
            case 'GET':
                return RequestMethod.Get;
            case 'POST':
                return RequestMethod.Post;
            case 'PUT':
                return RequestMethod.Put;
            case 'DELETE':
                return RequestMethod.Delete;
            case 'OPTIONS':
                return RequestMethod.Options;
            case 'HEAD':
                return RequestMethod.Head;
            case 'PATCH':
                return RequestMethod.Patch;
        }
        throw new Error("Invalid request method. The method \"" + method + "\" is not supported.");
    }
    var isSuccess = function (status) { return (status >= 200 && status < 300); };
    /**
     * @param {?} xhr
     * @return {?}
     */
    function getResponseURL(xhr) {
        if ('responseURL' in xhr) {
            return xhr.responseURL;
        }
        if (/^X-Request-URL:/m.test(xhr.getAllResponseHeaders())) {
            return xhr.getResponseHeader('X-Request-URL');
        }
        return null;
    }
    /**
     * @param {?} input
     * @return {?}
     */

    /**
     * @param {?} input
     * @return {?}
     */
    function stringToArrayBuffer(input) {
        var /** @type {?} */ view = new Uint16Array(input.length);
        for (var /** @type {?} */ i = 0, /** @type {?} */ strLen = input.length; i < strLen; i++) {
            view[i] = input.charCodeAt(i);
        }
        return view.buffer;
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    /**
     * @license
     * Copyright Google Inc. All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
    /**
     * @param {?=} rawParams
     * @return {?}
     */
    function paramParser(rawParams) {
        if (rawParams === void 0) { rawParams = ''; }
        var /** @type {?} */ map = new Map();
        if (rawParams.length > 0) {
            var /** @type {?} */ params = rawParams.split('&');
            params.forEach(function (param) {
                var /** @type {?} */ eqIdx = param.indexOf('=');
                var _a = eqIdx == -1 ? [param, ''] : [param.slice(0, eqIdx), param.slice(eqIdx + 1)], key = _a[0], val = _a[1];
                var /** @type {?} */ list = map.get(key) || [];
                list.push(val);
                map.set(key, list);
            });
        }
        return map;
    }
    /**
     * @deprecated use \@angular/common/http instead
     *
     */
    var QueryEncoder = /** @class */ (function () {
        function QueryEncoder() {
        }
        /**
         * @param {?} k
         * @return {?}
         */
        QueryEncoder.prototype.encodeKey = /**
         * @param {?} k
         * @return {?}
         */
        function (k) { return standardEncoding(k); };
        /**
         * @param {?} v
         * @return {?}
         */
        QueryEncoder.prototype.encodeValue = /**
         * @param {?} v
         * @return {?}
         */
        function (v) { return standardEncoding(v); };
        return QueryEncoder;
    }());
    /**
     * @param {?} v
     * @return {?}
     */
    function standardEncoding(v) {
        return encodeURIComponent(v)
            .replace(/%40/gi, '@')
            .replace(/%3A/gi, ':')
            .replace(/%24/gi, '$')
            .replace(/%2C/gi, ',')
            .replace(/%3B/gi, ';')
            .replace(/%2B/gi, '+')
            .replace(/%3D/gi, '=')
            .replace(/%3F/gi, '?')
            .replace(/%2F/gi, '/');
    }
    /**
     * Map-like representation of url search parameters, based on
     * [URLSearchParams](https://url.spec.whatwg.org/#urlsearchparams) in the url living standard,
     * with several extensions for merging URLSearchParams objects:
     *   - setAll()
     *   - appendAll()
     *   - replaceAll()
     *
     * This class accepts an optional second parameter of ${\@link QueryEncoder},
     * which is used to serialize parameters before making a request. By default,
     * `QueryEncoder` encodes keys and values of parameters using `encodeURIComponent`,
     * and then un-encodes certain characters that are allowed to be part of the query
     * according to IETF RFC 3986: https://tools.ietf.org/html/rfc3986.
     *
     * These are the characters that are not encoded: `! $ \' ( ) * + , ; A 9 - . _ ~ ? /`
     *
     * If the set of allowed query characters is not acceptable for a particular backend,
     * `QueryEncoder` can be subclassed and provided as the 2nd argument to URLSearchParams.
     *
     * ```
     * import {URLSearchParams, QueryEncoder} from '\@angular/http';
     * class MyQueryEncoder extends QueryEncoder {
     *   encodeKey(k: string): string {
     *     return myEncodingFunction(k);
     *   }
     *
     *   encodeValue(v: string): string {
     *     return myEncodingFunction(v);
     *   }
     * }
     *
     * let params = new URLSearchParams('', new MyQueryEncoder());
     * ```
     * @deprecated use \@angular/common/http instead
     */
    var URLSearchParams = /** @class */ (function () {
        function URLSearchParams(rawParams, queryEncoder) {
            if (rawParams === void 0) { rawParams = ''; }
            if (queryEncoder === void 0) { queryEncoder = new QueryEncoder(); }
            this.rawParams = rawParams;
            this.queryEncoder = queryEncoder;
            this.paramsMap = paramParser(rawParams);
        }
        /**
         * @return {?}
         */
        URLSearchParams.prototype.clone = /**
         * @return {?}
         */
        function () {
            var /** @type {?} */ clone = new URLSearchParams('', this.queryEncoder);
            clone.appendAll(this);
            return clone;
        };
        /**
         * @param {?} param
         * @return {?}
         */
        URLSearchParams.prototype.has = /**
         * @param {?} param
         * @return {?}
         */
        function (param) { return this.paramsMap.has(param); };
        /**
         * @param {?} param
         * @return {?}
         */
        URLSearchParams.prototype.get = /**
         * @param {?} param
         * @return {?}
         */
        function (param) {
            var /** @type {?} */ storedParam = this.paramsMap.get(param);
            return Array.isArray(storedParam) ? storedParam[0] : null;
        };
        /**
         * @param {?} param
         * @return {?}
         */
        URLSearchParams.prototype.getAll = /**
         * @param {?} param
         * @return {?}
         */
        function (param) { return this.paramsMap.get(param) || []; };
        /**
         * @param {?} param
         * @param {?} val
         * @return {?}
         */
        URLSearchParams.prototype.set = /**
         * @param {?} param
         * @param {?} val
         * @return {?}
         */
        function (param, val) {
            if (val === void 0 || val === null) {
                this.delete(param);
                return;
            }
            var /** @type {?} */ list = this.paramsMap.get(param) || [];
            list.length = 0;
            list.push(val);
            this.paramsMap.set(param, list);
        };
        // A merge operation
        // For each name-values pair in `searchParams`, perform `set(name, values[0])`
        //
        // E.g: "a=[1,2,3], c=[8]" + "a=[4,5,6], b=[7]" = "a=[4], c=[8], b=[7]"
        //
        // TODO(@caitp): document this better
        /**
         * @param {?} searchParams
         * @return {?}
         */
        URLSearchParams.prototype.setAll = /**
         * @param {?} searchParams
         * @return {?}
         */
        function (searchParams) {
            var _this = this;
            searchParams.paramsMap.forEach(function (value, param) {
                var /** @type {?} */ list = _this.paramsMap.get(param) || [];
                list.length = 0;
                list.push(value[0]);
                _this.paramsMap.set(param, list);
            });
        };
        /**
         * @param {?} param
         * @param {?} val
         * @return {?}
         */
        URLSearchParams.prototype.append = /**
         * @param {?} param
         * @param {?} val
         * @return {?}
         */
        function (param, val) {
            if (val === void 0 || val === null)
                return;
            var /** @type {?} */ list = this.paramsMap.get(param) || [];
            list.push(val);
            this.paramsMap.set(param, list);
        };
        // A merge operation
        // For each name-values pair in `searchParams`, perform `append(name, value)`
        // for each value in `values`.
        //
        // E.g: "a=[1,2], c=[8]" + "a=[3,4], b=[7]" = "a=[1,2,3,4], c=[8], b=[7]"
        //
        // TODO(@caitp): document this better
        /**
         * @param {?} searchParams
         * @return {?}
         */
        URLSearchParams.prototype.appendAll = /**
         * @param {?} searchParams
         * @return {?}
         */
        function (searchParams) {
            var _this = this;
            searchParams.paramsMap.forEach(function (value, param) {
                var /** @type {?} */ list = _this.paramsMap.get(param) || [];
                for (var /** @type {?} */ i = 0; i < value.length; ++i) {
                    list.push(value[i]);
                }
                _this.paramsMap.set(param, list);
            });
        };
        // A merge operation
        // For each name-values pair in `searchParams`, perform `delete(name)`,
        // followed by `set(name, values)`
        //
        // E.g: "a=[1,2,3], c=[8]" + "a=[4,5,6], b=[7]" = "a=[4,5,6], c=[8], b=[7]"
        //
        // TODO(@caitp): document this better
        /**
         * @param {?} searchParams
         * @return {?}
         */
        URLSearchParams.prototype.replaceAll = /**
         * @param {?} searchParams
         * @return {?}
         */
        function (searchParams) {
            var _this = this;
            searchParams.paramsMap.forEach(function (value, param) {
                var /** @type {?} */ list = _this.paramsMap.get(param) || [];
                list.length = 0;
                for (var /** @type {?} */ i = 0; i < value.length; ++i) {
                    list.push(value[i]);
                }
                _this.paramsMap.set(param, list);
            });
        };
        /**
         * @return {?}
         */
        URLSearchParams.prototype.toString = /**
         * @return {?}
         */
        function () {
            var _this = this;
            var /** @type {?} */ paramsList = [];
            this.paramsMap.forEach(function (values, k) {
                values.forEach(function (v) {
                    return paramsList.push(_this.queryEncoder.encodeKey(k) + '=' + _this.queryEncoder.encodeValue(v));
                });
            });
            return paramsList.join('&');
        };
        /**
         * @param {?} param
         * @return {?}
         */
        URLSearchParams.prototype.delete = /**
         * @param {?} param
         * @return {?}
         */
        function (param) { this.paramsMap.delete(param); };
        return URLSearchParams;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    /**
     * @license
     * Copyright Google Inc. All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
    /**
     * HTTP request body used by both {\@link Request} and {\@link Response}
     * https://fetch.spec.whatwg.org/#body
     * @abstract
     */
    var Body = /** @class */ (function () {
        function Body() {
        }
        /**
         * Attempts to return body as parsed `JSON` object, or raises an exception.
         */
        /**
         * Attempts to return body as parsed `JSON` object, or raises an exception.
         * @return {?}
         */
        Body.prototype.json = /**
         * Attempts to return body as parsed `JSON` object, or raises an exception.
         * @return {?}
         */
        function () {
            if (typeof this._body === 'string') {
                return JSON.parse(/** @type {?} */ (this._body));
            }
            if (this._body instanceof ArrayBuffer) {
                return JSON.parse(this.text());
            }
            return this._body;
        };
        /**
         * Returns the body as a string, presuming `toString()` can be called on the response body.
         *
         * When decoding an `ArrayBuffer`, the optional `encodingHint` parameter determines how the
         * bytes in the buffer will be interpreted. Valid values are:
         *
         * - `legacy` - incorrectly interpret the bytes as UTF-16 (technically, UCS-2). Only characters
         *   in the Basic Multilingual Plane are supported, surrogate pairs are not handled correctly.
         *   In addition, the endianness of the 16-bit octet pairs in the `ArrayBuffer` is not taken
         *   into consideration. This is the default behavior to avoid breaking apps, but should be
         *   considered deprecated.
         *
         * - `iso-8859` - interpret the bytes as ISO-8859 (which can be used for ASCII encoded text).
         */
        /**
         * Returns the body as a string, presuming `toString()` can be called on the response body.
         *
         * When decoding an `ArrayBuffer`, the optional `encodingHint` parameter determines how the
         * bytes in the buffer will be interpreted. Valid values are:
         *
         * - `legacy` - incorrectly interpret the bytes as UTF-16 (technically, UCS-2). Only characters
         *   in the Basic Multilingual Plane are supported, surrogate pairs are not handled correctly.
         *   In addition, the endianness of the 16-bit octet pairs in the `ArrayBuffer` is not taken
         *   into consideration. This is the default behavior to avoid breaking apps, but should be
         *   considered deprecated.
         *
         * - `iso-8859` - interpret the bytes as ISO-8859 (which can be used for ASCII encoded text).
         * @param {?=} encodingHint
         * @return {?}
         */
        Body.prototype.text = /**
         * Returns the body as a string, presuming `toString()` can be called on the response body.
         *
         * When decoding an `ArrayBuffer`, the optional `encodingHint` parameter determines how the
         * bytes in the buffer will be interpreted. Valid values are:
         *
         * - `legacy` - incorrectly interpret the bytes as UTF-16 (technically, UCS-2). Only characters
         *   in the Basic Multilingual Plane are supported, surrogate pairs are not handled correctly.
         *   In addition, the endianness of the 16-bit octet pairs in the `ArrayBuffer` is not taken
         *   into consideration. This is the default behavior to avoid breaking apps, but should be
         *   considered deprecated.
         *
         * - `iso-8859` - interpret the bytes as ISO-8859 (which can be used for ASCII encoded text).
         * @param {?=} encodingHint
         * @return {?}
         */
        function (encodingHint) {
            if (encodingHint === void 0) { encodingHint = 'legacy'; }
            if (this._body instanceof URLSearchParams) {
                return this._body.toString();
            }
            if (this._body instanceof ArrayBuffer) {
                switch (encodingHint) {
                    case 'legacy':
                        return String.fromCharCode.apply(null, new Uint16Array(/** @type {?} */ (this._body)));
                    case 'iso-8859':
                        return String.fromCharCode.apply(null, new Uint8Array(/** @type {?} */ (this._body)));
                    default:
                        throw new Error("Invalid value for encodingHint: " + encodingHint);
                }
            }
            if (this._body == null) {
                return '';
            }
            if (typeof this._body === 'object') {
                return JSON.stringify(this._body, null, 2);
            }
            return this._body.toString();
        };
        /**
         * Return the body as an ArrayBuffer
         */
        /**
         * Return the body as an ArrayBuffer
         * @return {?}
         */
        Body.prototype.arrayBuffer = /**
         * Return the body as an ArrayBuffer
         * @return {?}
         */
        function () {
            if (this._body instanceof ArrayBuffer) {
                return /** @type {?} */ (this._body);
            }
            return stringToArrayBuffer(this.text());
        };
        /**
          * Returns the request's body as a Blob, assuming that body exists.
          */
        /**
         * Returns the request's body as a Blob, assuming that body exists.
         * @return {?}
         */
        Body.prototype.blob = /**
         * Returns the request's body as a Blob, assuming that body exists.
         * @return {?}
         */
        function () {
            if (this._body instanceof Blob) {
                return /** @type {?} */ (this._body);
            }
            if (this._body instanceof ArrayBuffer) {
                return new Blob([this._body]);
            }
            throw new Error('The request body isn\'t either a blob or an array buffer');
        };
        return Body;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    /**
     * @license
     * Copyright Google Inc. All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
    /**
     * Creates `Response` instances from provided values.
     *
     * Though this object isn't
     * usually instantiated by end-users, it is the primary object interacted with when it comes time to
     * add data to a view.
     *
     * ### Example
     *
     * ```
     * http.request('my-friends.txt').subscribe(response => this.friends = response.text());
     * ```
     *
     * The Response's interface is inspired by the Response constructor defined in the [Fetch
     * Spec](https://fetch.spec.whatwg.org/#response-class), but is considered a static value whose body
     * can be accessed many times. There are other differences in the implementation, but this is the
     * most significant.
     *
     * @deprecated use \@angular/common/http instead
     */
    var Response = /** @class */ (function (_super) {
        __extends(Response, _super);
        function Response(responseOptions) {
            var _this = _super.call(this) || this;
            _this._body = responseOptions.body;
            _this.status = /** @type {?} */ ((responseOptions.status));
            _this.ok = (_this.status >= 200 && _this.status <= 299);
            _this.statusText = responseOptions.statusText;
            _this.headers = responseOptions.headers;
            _this.type = /** @type {?} */ ((responseOptions.type));
            _this.url = /** @type {?} */ ((responseOptions.url));
            return _this;
        }
        /**
         * @return {?}
         */
        Response.prototype.toString = /**
         * @return {?}
         */
        function () {
            return "Response with status: " + this.status + " " + this.statusText + " for URL: " + this.url;
        };
        return Response;
    }(Body));

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    /**
     * @license
     * Copyright Google Inc. All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
    var _nextRequestId = 0;
    var JSONP_HOME = '__ng_jsonp__';
    var _jsonpConnections = null;
    /**
     * @return {?}
     */
    function _getJsonpConnections() {
        var /** @type {?} */ w = typeof window == 'object' ? window : {};
        if (_jsonpConnections === null) {
            _jsonpConnections = w[JSONP_HOME] = {};
        }
        return _jsonpConnections;
    }
    var BrowserJsonp = /** @class */ (function () {
        function BrowserJsonp() {
        }
        // Construct a <script> element with the specified URL
        /**
         * @param {?} url
         * @return {?}
         */
        BrowserJsonp.prototype.build = /**
         * @param {?} url
         * @return {?}
         */
        function (url) {
            var /** @type {?} */ node = document.createElement('script');
            node.src = url;
            return node;
        };
        /**
         * @return {?}
         */
        BrowserJsonp.prototype.nextRequestID = /**
         * @return {?}
         */
        function () { return "__req" + _nextRequestId++; };
        /**
         * @param {?} id
         * @return {?}
         */
        BrowserJsonp.prototype.requestCallback = /**
         * @param {?} id
         * @return {?}
         */
        function (id) { return JSONP_HOME + "." + id + ".finished"; };
        /**
         * @param {?} id
         * @param {?} connection
         * @return {?}
         */
        BrowserJsonp.prototype.exposeConnection = /**
         * @param {?} id
         * @param {?} connection
         * @return {?}
         */
        function (id, connection) {
            var /** @type {?} */ connections = _getJsonpConnections();
            connections[id] = connection;
        };
        /**
         * @param {?} id
         * @return {?}
         */
        BrowserJsonp.prototype.removeConnection = /**
         * @param {?} id
         * @return {?}
         */
        function (id) {
            var /** @type {?} */ connections = _getJsonpConnections();
            connections[id] = null;
        };
        // Attach the <script> element to the DOM
        /**
         * @param {?} node
         * @return {?}
         */
        BrowserJsonp.prototype.send = /**
         * @param {?} node
         * @return {?}
         */
        function (node) { document.body.appendChild(/** @type {?} */ ((node))); };
        // Remove <script> element from the DOM
        /**
         * @param {?} node
         * @return {?}
         */
        BrowserJsonp.prototype.cleanup = /**
         * @param {?} node
         * @return {?}
         */
        function (node) {
            if (node.parentNode) {
                node.parentNode.removeChild(/** @type {?} */ ((node)));
            }
        };
        BrowserJsonp.decorators = [
            { type: core.Injectable },
        ];
        /** @nocollapse */
        BrowserJsonp.ctorParameters = function () { return []; };
        return BrowserJsonp;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    /**
     * @license
     * Copyright Google Inc. All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
    var JSONP_ERR_NO_CALLBACK = 'JSONP injected script did not invoke callback.';
    var JSONP_ERR_WRONG_METHOD = 'JSONP requests must use GET request method.';
    /**
     * Base class for an in-flight JSONP request.
     *
     * @deprecated use \@angular/common/http instead
     */
    var JSONPConnection = /** @class */ (function () {
        /** @internal */
        function JSONPConnection(req, _dom, baseResponseOptions) {
            var _this = this;
            this._dom = _dom;
            this.baseResponseOptions = baseResponseOptions;
            this._finished = false;
            if (req.method !== RequestMethod.Get) {
                throw new TypeError(JSONP_ERR_WRONG_METHOD);
            }
            this.request = req;
            this.response = new Observable.Observable(function (responseObserver) {
                _this.readyState = ReadyState.Loading;
                var /** @type {?} */ id = _this._id = _dom.nextRequestID();
                _dom.exposeConnection(id, _this);
                // Workaround Dart
                // url = url.replace(/=JSONP_CALLBACK(&|$)/, `generated method`);
                var /** @type {?} */ callback = _dom.requestCallback(_this._id);
                var /** @type {?} */ url = req.url;
                if (url.indexOf('=JSONP_CALLBACK&') > -1) {
                    url = url.replace('=JSONP_CALLBACK&', "=" + callback + "&");
                }
                else if (url.lastIndexOf('=JSONP_CALLBACK') === url.length - '=JSONP_CALLBACK'.length) {
                    url = url.substring(0, url.length - '=JSONP_CALLBACK'.length) + ("=" + callback);
                }
                var /** @type {?} */ script = _this._script = _dom.build(url);
                var /** @type {?} */ onLoad = function (event) {
                    if (_this.readyState === ReadyState.Cancelled)
                        return;
                    _this.readyState = ReadyState.Done;
                    _dom.cleanup(script);
                    if (!_this._finished) {
                        var /** @type {?} */ responseOptions_1 = new ResponseOptions({ body: JSONP_ERR_NO_CALLBACK, type: ResponseType.Error, url: url });
                        if (baseResponseOptions) {
                            responseOptions_1 = baseResponseOptions.merge(responseOptions_1);
                        }
                        responseObserver.error(new Response(responseOptions_1));
                        return;
                    }
                    var /** @type {?} */ responseOptions = new ResponseOptions({ body: _this._responseData, url: url });
                    if (_this.baseResponseOptions) {
                        responseOptions = _this.baseResponseOptions.merge(responseOptions);
                    }
                    responseObserver.next(new Response(responseOptions));
                    responseObserver.complete();
                };
                var /** @type {?} */ onError = function (error) {
                    if (_this.readyState === ReadyState.Cancelled)
                        return;
                    _this.readyState = ReadyState.Done;
                    _dom.cleanup(script);
                    var /** @type {?} */ responseOptions = new ResponseOptions({ body: error.message, type: ResponseType.Error });
                    if (baseResponseOptions) {
                        responseOptions = baseResponseOptions.merge(responseOptions);
                    }
                    responseObserver.error(new Response(responseOptions));
                };
                script.addEventListener('load', onLoad);
                script.addEventListener('error', onError);
                _dom.send(script);
                return function () {
                    _this.readyState = ReadyState.Cancelled;
                    script.removeEventListener('load', onLoad);
                    script.removeEventListener('error', onError);
                    _this._dom.cleanup(script);
                };
            });
        }
        /**
         * Callback called when the JSONP request completes, to notify the application
         * of the new data.
         */
        /**
         * Callback called when the JSONP request completes, to notify the application
         * of the new data.
         * @param {?=} data
         * @return {?}
         */
        JSONPConnection.prototype.finished = /**
         * Callback called when the JSONP request completes, to notify the application
         * of the new data.
         * @param {?=} data
         * @return {?}
         */
        function (data) {
            // Don't leak connections
            this._finished = true;
            this._dom.removeConnection(this._id);
            if (this.readyState === ReadyState.Cancelled)
                return;
            this._responseData = data;
        };
        return JSONPConnection;
    }());
    /**
     * A {\@link ConnectionBackend} that uses the JSONP strategy of making requests.
     *
     * @deprecated use \@angular/common/http instead
     */
    var JSONPBackend = /** @class */ (function (_super) {
        __extends(JSONPBackend, _super);
        /** @internal */
        function JSONPBackend(_browserJSONP, _baseResponseOptions) {
            var _this = _super.call(this) || this;
            _this._browserJSONP = _browserJSONP;
            _this._baseResponseOptions = _baseResponseOptions;
            return _this;
        }
        /**
         * @param {?} request
         * @return {?}
         */
        JSONPBackend.prototype.createConnection = /**
         * @param {?} request
         * @return {?}
         */
        function (request) {
            return new JSONPConnection(request, this._browserJSONP, this._baseResponseOptions);
        };
        JSONPBackend.decorators = [
            { type: core.Injectable },
        ];
        /** @nocollapse */
        JSONPBackend.ctorParameters = function () { return [
            { type: BrowserJsonp, },
            { type: ResponseOptions, },
        ]; };
        return JSONPBackend;
    }(ConnectionBackend));

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    /**
     * @license
     * Copyright Google Inc. All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
    var XSSI_PREFIX = /^\)\]\}',?\n/;
    /**
     * Creates connections using `XMLHttpRequest`. Given a fully-qualified
     * request, an `XHRConnection` will immediately create an `XMLHttpRequest` object and send the
     * request.
     *
     * This class would typically not be created or interacted with directly inside applications, though
     * the {\@link MockConnection} may be interacted with in tests.
     *
     * @deprecated use \@angular/common/http instead
     */
    var XHRConnection = /** @class */ (function () {
        function XHRConnection(req, browserXHR, baseResponseOptions) {
            var _this = this;
            this.request = req;
            this.response = new Observable.Observable(function (responseObserver) {
                var /** @type {?} */ _xhr = browserXHR.build();
                _xhr.open(RequestMethod[req.method].toUpperCase(), req.url);
                if (req.withCredentials != null) {
                    _xhr.withCredentials = req.withCredentials;
                }
                // load event handler
                var /** @type {?} */ onLoad = function () {
                    // normalize IE9 bug (http://bugs.jquery.com/ticket/1450)
                    var /** @type {?} */ status = _xhr.status === 1223 ? 204 : _xhr.status;
                    var /** @type {?} */ body = null;
                    // HTTP 204 means no content
                    if (status !== 204) {
                        // responseText is the old-school way of retrieving response (supported by IE8 & 9)
                        // response/responseType properties were introduced in ResourceLoader Level2 spec
                        // (supported by IE10)
                        body = (typeof _xhr.response === 'undefined') ? _xhr.responseText : _xhr.response;
                        // Implicitly strip a potential XSSI prefix.
                        if (typeof body === 'string') {
                            body = body.replace(XSSI_PREFIX, '');
                        }
                    }
                    // fix status code when it is 0 (0 status is undocumented).
                    // Occurs when accessing file resources or on Android 4.1 stock browser
                    // while retrieving files from application cache.
                    if (status === 0) {
                        status = body ? 200 : 0;
                    }
                    var /** @type {?} */ headers = Headers.fromResponseHeaderString(_xhr.getAllResponseHeaders());
                    // IE 9 does not provide the way to get URL of response
                    var /** @type {?} */ url = getResponseURL(_xhr) || req.url;
                    var /** @type {?} */ statusText = _xhr.statusText || 'OK';
                    var /** @type {?} */ responseOptions = new ResponseOptions({ body: body, status: status, headers: headers, statusText: statusText, url: url });
                    if (baseResponseOptions != null) {
                        responseOptions = baseResponseOptions.merge(responseOptions);
                    }
                    var /** @type {?} */ response = new Response(responseOptions);
                    response.ok = isSuccess(status);
                    if (response.ok) {
                        responseObserver.next(response);
                        // TODO(gdi2290): defer complete if array buffer until done
                        responseObserver.complete();
                        return;
                    }
                    responseObserver.error(response);
                };
                // error event handler
                var /** @type {?} */ onError = function (err) {
                    var /** @type {?} */ responseOptions = new ResponseOptions({
                        body: err,
                        type: ResponseType.Error,
                        status: _xhr.status,
                        statusText: _xhr.statusText,
                    });
                    if (baseResponseOptions != null) {
                        responseOptions = baseResponseOptions.merge(responseOptions);
                    }
                    responseObserver.error(new Response(responseOptions));
                };
                _this.setDetectedContentType(req, _xhr);
                if (req.headers == null) {
                    req.headers = new Headers();
                }
                if (!req.headers.has('Accept')) {
                    req.headers.append('Accept', 'application/json, text/plain, */*');
                }
                req.headers.forEach(function (values, name) { return _xhr.setRequestHeader(/** @type {?} */ ((name)), values.join(',')); });
                // Select the correct buffer type to store the response
                if (req.responseType != null && _xhr.responseType != null) {
                    switch (req.responseType) {
                        case ResponseContentType.ArrayBuffer:
                            _xhr.responseType = 'arraybuffer';
                            break;
                        case ResponseContentType.Json:
                            _xhr.responseType = 'json';
                            break;
                        case ResponseContentType.Text:
                            _xhr.responseType = 'text';
                            break;
                        case ResponseContentType.Blob:
                            _xhr.responseType = 'blob';
                            break;
                        default:
                            throw new Error('The selected responseType is not supported');
                    }
                }
                _xhr.addEventListener('load', onLoad);
                _xhr.addEventListener('error', onError);
                _xhr.send(_this.request.getBody());
                return function () {
                    _xhr.removeEventListener('load', onLoad);
                    _xhr.removeEventListener('error', onError);
                    _xhr.abort();
                };
            });
        }
        /**
         * @param {?} req
         * @param {?} _xhr
         * @return {?}
         */
        XHRConnection.prototype.setDetectedContentType = /**
         * @param {?} req
         * @param {?} _xhr
         * @return {?}
         */
        function (req /** TODO Request */, _xhr /** XMLHttpRequest */) {
            // Skip if a custom Content-Type header is provided
            if (req.headers != null && req.headers.get('Content-Type') != null) {
                return;
            }
            // Set the detected content type
            switch (req.contentType) {
                case ContentType.NONE:
                    break;
                case ContentType.JSON:
                    _xhr.setRequestHeader('content-type', 'application/json');
                    break;
                case ContentType.FORM:
                    _xhr.setRequestHeader('content-type', 'application/x-www-form-urlencoded;charset=UTF-8');
                    break;
                case ContentType.TEXT:
                    _xhr.setRequestHeader('content-type', 'text/plain');
                    break;
                case ContentType.BLOB:
                    var /** @type {?} */ blob = req.blob();
                    if (blob.type) {
                        _xhr.setRequestHeader('content-type', blob.type);
                    }
                    break;
            }
        };
        return XHRConnection;
    }());
    /**
     * `XSRFConfiguration` sets up Cross Site Request Forgery (XSRF) protection for the application
     * using a cookie. See https://www.owasp.org/index.php/Cross-Site_Request_Forgery_(CSRF)
     * for more information on XSRF.
     *
     * Applications can configure custom cookie and header names by binding an instance of this class
     * with different `cookieName` and `headerName` values. See the main HTTP documentation for more
     * details.
     *
     * @deprecated use \@angular/common/http instead
     */
    var CookieXSRFStrategy = /** @class */ (function () {
        function CookieXSRFStrategy(_cookieName, _headerName) {
            if (_cookieName === void 0) { _cookieName = 'XSRF-TOKEN'; }
            if (_headerName === void 0) { _headerName = 'X-XSRF-TOKEN'; }
            this._cookieName = _cookieName;
            this._headerName = _headerName;
        }
        /**
         * @param {?} req
         * @return {?}
         */
        CookieXSRFStrategy.prototype.configureRequest = /**
         * @param {?} req
         * @return {?}
         */
        function (req) {
            var /** @type {?} */ xsrfToken = platformBrowser.ɵgetDOM().getCookie(this._cookieName);
            if (xsrfToken) {
                req.headers.set(this._headerName, xsrfToken);
            }
        };
        return CookieXSRFStrategy;
    }());
    /**
     * Creates {\@link XHRConnection} instances.
     *
     * This class would typically not be used by end users, but could be
     * overridden if a different backend implementation should be used,
     * such as in a node backend.
     *
     * ### Example
     *
     * ```
     * import {Http, MyNodeBackend, HTTP_PROVIDERS, BaseRequestOptions} from '\@angular/http';
     * \@Component({
     *   viewProviders: [
     *     HTTP_PROVIDERS,
     *     {provide: Http, useFactory: (backend, options) => {
     *       return new Http(backend, options);
     *     }, deps: [MyNodeBackend, BaseRequestOptions]}]
     * })
     * class MyComponent {
     *   constructor(http:Http) {
     *     http.request('people.json').subscribe(res => this.people = res.json());
     *   }
     * }
     * ```
     * @deprecated use \@angular/common/http instead
     */
    var XHRBackend = /** @class */ (function () {
        function XHRBackend(_browserXHR, _baseResponseOptions, _xsrfStrategy) {
            this._browserXHR = _browserXHR;
            this._baseResponseOptions = _baseResponseOptions;
            this._xsrfStrategy = _xsrfStrategy;
        }
        /**
         * @param {?} request
         * @return {?}
         */
        XHRBackend.prototype.createConnection = /**
         * @param {?} request
         * @return {?}
         */
        function (request) {
            this._xsrfStrategy.configureRequest(request);
            return new XHRConnection(request, this._browserXHR, this._baseResponseOptions);
        };
        XHRBackend.decorators = [
            { type: core.Injectable },
        ];
        /** @nocollapse */
        XHRBackend.ctorParameters = function () { return [
            { type: BrowserXhr, },
            { type: ResponseOptions, },
            { type: XSRFStrategy, },
        ]; };
        return XHRBackend;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    /**
     * @license
     * Copyright Google Inc. All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
    /**
     * Creates a request options object to be optionally provided when instantiating a
     * {\@link Request}.
     *
     * This class is based on the `RequestInit` description in the [Fetch
     * Spec](https://fetch.spec.whatwg.org/#requestinit).
     *
     * All values are null by default. Typical defaults can be found in the {\@link BaseRequestOptions}
     * class, which sub-classes `RequestOptions`.
     *
     * ```typescript
     * import {RequestOptions, Request, RequestMethod} from '\@angular/http';
     *
     * const options = new RequestOptions({
     *   method: RequestMethod.Post,
     *   url: 'https://google.com'
     * });
     * const req = new Request(options);
     * console.log('req.method:', RequestMethod[req.method]); // Post
     * console.log('options.url:', options.url); // https://google.com
     * ```
     *
     * @deprecated use \@angular/common/http instead
     */
    var RequestOptions = /** @class */ (function () {
        // TODO(Dzmitry): remove search when this.search is removed
        function RequestOptions(opts) {
            if (opts === void 0) { opts = {}; }
            var method = opts.method, headers = opts.headers, body = opts.body, url = opts.url, search = opts.search, params = opts.params, withCredentials = opts.withCredentials, responseType = opts.responseType;
            this.method = method != null ? normalizeMethodName(method) : null;
            this.headers = headers != null ? headers : null;
            this.body = body != null ? body : null;
            this.url = url != null ? url : null;
            this.params = this._mergeSearchParams(params || search);
            this.withCredentials = withCredentials != null ? withCredentials : null;
            this.responseType = responseType != null ? responseType : null;
        }
        Object.defineProperty(RequestOptions.prototype, "search", {
            /**
             * @deprecated from 4.0.0. Use params instead.
             */
            get: /**
             * @deprecated from 4.0.0. Use params instead.
             * @return {?}
             */
            function () { return this.params; },
            /**
             * @deprecated from 4.0.0. Use params instead.
             */
            set: /**
             * @deprecated from 4.0.0. Use params instead.
             * @param {?} params
             * @return {?}
             */
            function (params) { this.params = params; },
            enumerable: true,
            configurable: true
        });
        /**
         * Creates a copy of the `RequestOptions` instance, using the optional input as values to override
         * existing values. This method will not change the values of the instance on which it is being
         * called.
         *
         * Note that `headers` and `search` will override existing values completely if present in
         * the `options` object. If these values should be merged, it should be done prior to calling
         * `merge` on the `RequestOptions` instance.
         *
         * ```typescript
         * import {RequestOptions, Request, RequestMethod} from '@angular/http';
         *
         * const options = new RequestOptions({
         *   method: RequestMethod.Post
         * });
         * const req = new Request(options.merge({
         *   url: 'https://google.com'
         * }));
         * console.log('req.method:', RequestMethod[req.method]); // Post
         * console.log('options.url:', options.url); // null
         * console.log('req.url:', req.url); // https://google.com
         * ```
         */
        /**
         * Creates a copy of the `RequestOptions` instance, using the optional input as values to override
         * existing values. This method will not change the values of the instance on which it is being
         * called.
         *
         * Note that `headers` and `search` will override existing values completely if present in
         * the `options` object. If these values should be merged, it should be done prior to calling
         * `merge` on the `RequestOptions` instance.
         *
         * ```typescript
         * import {RequestOptions, Request, RequestMethod} from '\@angular/http';
         *
         * const options = new RequestOptions({
         *   method: RequestMethod.Post
         * });
         * const req = new Request(options.merge({
         *   url: 'https://google.com'
         * }));
         * console.log('req.method:', RequestMethod[req.method]); // Post
         * console.log('options.url:', options.url); // null
         * console.log('req.url:', req.url); // https://google.com
         * ```
         * @param {?=} options
         * @return {?}
         */
        RequestOptions.prototype.merge = /**
         * Creates a copy of the `RequestOptions` instance, using the optional input as values to override
         * existing values. This method will not change the values of the instance on which it is being
         * called.
         *
         * Note that `headers` and `search` will override existing values completely if present in
         * the `options` object. If these values should be merged, it should be done prior to calling
         * `merge` on the `RequestOptions` instance.
         *
         * ```typescript
         * import {RequestOptions, Request, RequestMethod} from '\@angular/http';
         *
         * const options = new RequestOptions({
         *   method: RequestMethod.Post
         * });
         * const req = new Request(options.merge({
         *   url: 'https://google.com'
         * }));
         * console.log('req.method:', RequestMethod[req.method]); // Post
         * console.log('options.url:', options.url); // null
         * console.log('req.url:', req.url); // https://google.com
         * ```
         * @param {?=} options
         * @return {?}
         */
        function (options) {
            return new RequestOptions({
                method: options && options.method != null ? options.method : this.method,
                headers: options && options.headers != null ? options.headers : new Headers(this.headers),
                body: options && options.body != null ? options.body : this.body,
                url: options && options.url != null ? options.url : this.url,
                params: options && this._mergeSearchParams(options.params || options.search),
                withCredentials: options && options.withCredentials != null ? options.withCredentials :
                    this.withCredentials,
                responseType: options && options.responseType != null ? options.responseType :
                    this.responseType
            });
        };
        /**
         * @param {?=} params
         * @return {?}
         */
        RequestOptions.prototype._mergeSearchParams = /**
         * @param {?=} params
         * @return {?}
         */
        function (params) {
            if (!params)
                return this.params;
            if (params instanceof URLSearchParams) {
                return params.clone();
            }
            if (typeof params === 'string') {
                return new URLSearchParams(params);
            }
            return this._parseParams(params);
        };
        /**
         * @param {?=} objParams
         * @return {?}
         */
        RequestOptions.prototype._parseParams = /**
         * @param {?=} objParams
         * @return {?}
         */
        function (objParams) {
            var _this = this;
            if (objParams === void 0) { objParams = {}; }
            var /** @type {?} */ params = new URLSearchParams();
            Object.keys(objParams).forEach(function (key) {
                var /** @type {?} */ value = objParams[key];
                if (Array.isArray(value)) {
                    value.forEach(function (item) { return _this._appendParam(key, item, params); });
                }
                else {
                    _this._appendParam(key, value, params);
                }
            });
            return params;
        };
        /**
         * @param {?} key
         * @param {?} value
         * @param {?} params
         * @return {?}
         */
        RequestOptions.prototype._appendParam = /**
         * @param {?} key
         * @param {?} value
         * @param {?} params
         * @return {?}
         */
        function (key, value, params) {
            if (typeof value !== 'string') {
                value = JSON.stringify(value);
            }
            params.append(key, value);
        };
        return RequestOptions;
    }());
    /**
     * Subclass of {\@link RequestOptions}, with default values.
     *
     * Default values:
     *  * method: {\@link RequestMethod RequestMethod.Get}
     *  * headers: empty {\@link Headers} object
     *
     * This class could be extended and bound to the {\@link RequestOptions} class
     * when configuring an {\@link Injector}, in order to override the default options
     * used by {\@link Http} to create and send {\@link Request Requests}.
     *
     * ```typescript
     * import {BaseRequestOptions, RequestOptions} from '\@angular/http';
     *
     * class MyOptions extends BaseRequestOptions {
     *   search: string = 'coreTeam=true';
     * }
     *
     * {provide: RequestOptions, useClass: MyOptions};
     * ```
     *
     * The options could also be extended when manually creating a {\@link Request}
     * object.
     *
     * ```
     * import {BaseRequestOptions, Request, RequestMethod} from '\@angular/http';
     *
     * const options = new BaseRequestOptions();
     * const req = new Request(options.merge({
     *   method: RequestMethod.Post,
     *   url: 'https://google.com'
     * }));
     * console.log('req.method:', RequestMethod[req.method]); // Post
     * console.log('options.url:', options.url); // null
     * console.log('req.url:', req.url); // https://google.com
     * ```
     *
     * @deprecated use \@angular/common/http instead
     */
    var BaseRequestOptions = /** @class */ (function (_super) {
        __extends(BaseRequestOptions, _super);
        function BaseRequestOptions() {
            return _super.call(this, { method: RequestMethod.Get, headers: new Headers() }) || this;
        }
        BaseRequestOptions.decorators = [
            { type: core.Injectable },
        ];
        /** @nocollapse */
        BaseRequestOptions.ctorParameters = function () { return []; };
        return BaseRequestOptions;
    }(RequestOptions));

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    /**
     * @license
     * Copyright Google Inc. All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
    /**
     * Creates `Request` instances from provided values.
     *
     * The Request's interface is inspired by the Request constructor defined in the [Fetch
     * Spec](https://fetch.spec.whatwg.org/#request-class),
     * but is considered a static value whose body can be accessed many times. There are other
     * differences in the implementation, but this is the most significant.
     *
     * `Request` instances are typically created by higher-level classes, like {\@link Http} and
     * {\@link Jsonp}, but it may occasionally be useful to explicitly create `Request` instances.
     * One such example is when creating services that wrap higher-level services, like {\@link Http},
     * where it may be useful to generate a `Request` with arbitrary headers and search params.
     *
     * ```typescript
     * import {Injectable, Injector} from '\@angular/core';
     * import {HTTP_PROVIDERS, Http, Request, RequestMethod} from '\@angular/http';
     *
     * \@Injectable()
     * class AutoAuthenticator {
     *   constructor(public http:Http) {}
     *   request(url:string) {
     *     return this.http.request(new Request({
     *       method: RequestMethod.Get,
     *       url: url,
     *       search: 'password=123'
     *     }));
     *   }
     * }
     *
     * var injector = Injector.resolveAndCreate([HTTP_PROVIDERS, AutoAuthenticator]);
     * var authenticator = injector.get(AutoAuthenticator);
     * authenticator.request('people.json').subscribe(res => {
     *   //URL should have included '?password=123'
     *   console.log('people', res.json());
     * });
     * ```
     *
     * @deprecated use \@angular/common/http instead
     */
    var Request = /** @class */ (function (_super) {
        __extends(Request, _super);
        function Request(requestOptions) {
            var _this = _super.call(this) || this;
            // TODO: assert that url is present
            var /** @type {?} */ url = requestOptions.url;
            _this.url = /** @type {?} */ ((requestOptions.url));
            var /** @type {?} */ paramsArg = requestOptions.params || requestOptions.search;
            if (paramsArg) {
                var /** @type {?} */ params = void 0;
                if (typeof paramsArg === 'object' && !(paramsArg instanceof URLSearchParams)) {
                    params = urlEncodeParams(paramsArg).toString();
                }
                else {
                    params = paramsArg.toString();
                }
                if (params.length > 0) {
                    var /** @type {?} */ prefix = '?';
                    if (_this.url.indexOf('?') != -1) {
                        prefix = (_this.url[_this.url.length - 1] == '&') ? '' : '&';
                    }
                    // TODO: just delete search-query-looking string in url?
                    // TODO: just delete search-query-looking string in url?
                    _this.url = url + prefix + params;
                }
            }
            _this._body = requestOptions.body;
            _this.method = normalizeMethodName(/** @type {?} */ ((requestOptions.method)));
            // TODO(jeffbcross): implement behavior
            // Defaults to 'omit', consistent with browser
            // TODO(jeffbcross): implement behavior
            // Defaults to 'omit', consistent with browser
            _this.headers = new Headers(requestOptions.headers);
            _this.contentType = _this.detectContentType();
            _this.withCredentials = /** @type {?} */ ((requestOptions.withCredentials));
            _this.responseType = /** @type {?} */ ((requestOptions.responseType));
            return _this;
        }
        /**
         * Returns the content type enum based on header options.
         */
        /**
         * Returns the content type enum based on header options.
         * @return {?}
         */
        Request.prototype.detectContentType = /**
         * Returns the content type enum based on header options.
         * @return {?}
         */
        function () {
            switch (this.headers.get('content-type')) {
                case 'application/json':
                    return ContentType.JSON;
                case 'application/x-www-form-urlencoded':
                    return ContentType.FORM;
                case 'multipart/form-data':
                    return ContentType.FORM_DATA;
                case 'text/plain':
                case 'text/html':
                    return ContentType.TEXT;
                case 'application/octet-stream':
                    return this._body instanceof ArrayBuffer$1 ? ContentType.ARRAY_BUFFER : ContentType.BLOB;
                default:
                    return this.detectContentTypeFromBody();
            }
        };
        /**
         * Returns the content type of request's body based on its type.
         */
        /**
         * Returns the content type of request's body based on its type.
         * @return {?}
         */
        Request.prototype.detectContentTypeFromBody = /**
         * Returns the content type of request's body based on its type.
         * @return {?}
         */
        function () {
            if (this._body == null) {
                return ContentType.NONE;
            }
            else if (this._body instanceof URLSearchParams) {
                return ContentType.FORM;
            }
            else if (this._body instanceof FormData) {
                return ContentType.FORM_DATA;
            }
            else if (this._body instanceof Blob$1) {
                return ContentType.BLOB;
            }
            else if (this._body instanceof ArrayBuffer$1) {
                return ContentType.ARRAY_BUFFER;
            }
            else if (this._body && typeof this._body === 'object') {
                return ContentType.JSON;
            }
            else {
                return ContentType.TEXT;
            }
        };
        /**
         * Returns the request's body according to its type. If body is undefined, return
         * null.
         */
        /**
         * Returns the request's body according to its type. If body is undefined, return
         * null.
         * @return {?}
         */
        Request.prototype.getBody = /**
         * Returns the request's body according to its type. If body is undefined, return
         * null.
         * @return {?}
         */
        function () {
            switch (this.contentType) {
                case ContentType.JSON:
                    return this.text();
                case ContentType.FORM:
                    return this.text();
                case ContentType.FORM_DATA:
                    return this._body;
                case ContentType.TEXT:
                    return this.text();
                case ContentType.BLOB:
                    return this.blob();
                case ContentType.ARRAY_BUFFER:
                    return this.arrayBuffer();
                default:
                    return null;
            }
        };
        return Request;
    }(Body));
    /**
     * @param {?} params
     * @return {?}
     */
    function urlEncodeParams(params) {
        var /** @type {?} */ searchParams = new URLSearchParams();
        Object.keys(params).forEach(function (key) {
            var /** @type {?} */ value = params[key];
            if (value && Array.isArray(value)) {
                value.forEach(function (element) { return searchParams.append(key, element.toString()); });
            }
            else {
                searchParams.append(key, value.toString());
            }
        });
        return searchParams;
    }
    var noop = function () { };
    var w = typeof window == 'object' ? window : noop;
    var FormData = (/** @type {?} */ (w /** TODO #9100 */) /** TODO #9100 */)['FormData'] || noop;
    var Blob$1 = (/** @type {?} */ (w /** TODO #9100 */) /** TODO #9100 */)['Blob'] || noop;
    var ArrayBuffer$1 = (/** @type {?} */ (w /** TODO #9100 */) /** TODO #9100 */)['ArrayBuffer'] || noop;

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    /**
     * @license
     * Copyright Google Inc. All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
    /**
     * @param {?} backend
     * @param {?} request
     * @return {?}
     */
    function httpRequest(backend, request) {
        return backend.createConnection(request).response;
    }
    /**
     * @param {?} defaultOpts
     * @param {?} providedOpts
     * @param {?} method
     * @param {?} url
     * @return {?}
     */
    function mergeOptions(defaultOpts, providedOpts, method, url) {
        var /** @type {?} */ newOptions = defaultOpts;
        if (providedOpts) {
            // Hack so Dart can used named parameters
            return /** @type {?} */ (newOptions.merge(new RequestOptions({
                method: providedOpts.method || method,
                url: providedOpts.url || url,
                search: providedOpts.search,
                params: providedOpts.params,
                headers: providedOpts.headers,
                body: providedOpts.body,
                withCredentials: providedOpts.withCredentials,
                responseType: providedOpts.responseType
            })));
        }
        return /** @type {?} */ (newOptions.merge(new RequestOptions({ method: method, url: url })));
    }
    /**
     * Performs http requests using `XMLHttpRequest` as the default backend.
     *
     * `Http` is available as an injectable class, with methods to perform http requests. Calling
     * `request` returns an `Observable` which will emit a single {\@link Response} when a
     * response is received.
     *
     * ### Example
     *
     * ```typescript
     * import {Http, HTTP_PROVIDERS} from '\@angular/http';
     * import 'rxjs/add/operator/map'
     * \@Component({
     *   selector: 'http-app',
     *   viewProviders: [HTTP_PROVIDERS],
     *   templateUrl: 'people.html'
     * })
     * class PeopleComponent {
     *   constructor(http: Http) {
     *     http.get('people.json')
     *       // Call map on the response observable to get the parsed people object
     *       .map(res => res.json())
     *       // Subscribe to the observable to get the parsed people object and attach it to the
     *       // component
     *       .subscribe(people => this.people = people);
     *   }
     * }
     * ```
     *
     *
     * ### Example
     *
     * ```
     * http.get('people.json').subscribe((res:Response) => this.people = res.json());
     * ```
     *
     * The default construct used to perform requests, `XMLHttpRequest`, is abstracted as a "Backend" (
     * {\@link XHRBackend} in this case), which could be mocked with dependency injection by replacing
     * the {\@link XHRBackend} provider, as in the following example:
     *
     * ### Example
     *
     * ```typescript
     * import {BaseRequestOptions, Http} from '\@angular/http';
     * import {MockBackend} from '\@angular/http/testing';
     * var injector = Injector.resolveAndCreate([
     *   BaseRequestOptions,
     *   MockBackend,
     *   {provide: Http, useFactory:
     *       function(backend, defaultOptions) {
     *         return new Http(backend, defaultOptions);
     *       },
     *       deps: [MockBackend, BaseRequestOptions]}
     * ]);
     * var http = injector.get(Http);
     * http.get('request-from-mock-backend.json').subscribe((res:Response) => doSomething(res));
     * ```
     *
     * @deprecated use \@angular/common/http instead
     */
    var Http = /** @class */ (function () {
        function Http(_backend, _defaultOptions) {
            this._backend = _backend;
            this._defaultOptions = _defaultOptions;
        }
        /**
         * Performs any type of http request. First argument is required, and can either be a url or
         * a {@link Request} instance. If the first argument is a url, an optional {@link RequestOptions}
         * object can be provided as the 2nd argument. The options object will be merged with the values
         * of {@link BaseRequestOptions} before performing the request.
         */
        /**
         * Performs any type of http request. First argument is required, and can either be a url or
         * a {\@link Request} instance. If the first argument is a url, an optional {\@link RequestOptions}
         * object can be provided as the 2nd argument. The options object will be merged with the values
         * of {\@link BaseRequestOptions} before performing the request.
         * @param {?} url
         * @param {?=} options
         * @return {?}
         */
        Http.prototype.request = /**
         * Performs any type of http request. First argument is required, and can either be a url or
         * a {\@link Request} instance. If the first argument is a url, an optional {\@link RequestOptions}
         * object can be provided as the 2nd argument. The options object will be merged with the values
         * of {\@link BaseRequestOptions} before performing the request.
         * @param {?} url
         * @param {?=} options
         * @return {?}
         */
        function (url, options) {
            var /** @type {?} */ responseObservable;
            if (typeof url === 'string') {
                responseObservable = httpRequest(this._backend, new Request(mergeOptions(this._defaultOptions, options, RequestMethod.Get, /** @type {?} */ (url))));
            }
            else if (url instanceof Request) {
                responseObservable = httpRequest(this._backend, url);
            }
            else {
                throw new Error('First argument must be a url string or Request instance.');
            }
            return responseObservable;
        };
        /**
         * Performs a request with `get` http method.
         */
        /**
         * Performs a request with `get` http method.
         * @param {?} url
         * @param {?=} options
         * @return {?}
         */
        Http.prototype.get = /**
         * Performs a request with `get` http method.
         * @param {?} url
         * @param {?=} options
         * @return {?}
         */
        function (url, options) {
            return this.request(new Request(mergeOptions(this._defaultOptions, options, RequestMethod.Get, url)));
        };
        /**
         * Performs a request with `post` http method.
         */
        /**
         * Performs a request with `post` http method.
         * @param {?} url
         * @param {?} body
         * @param {?=} options
         * @return {?}
         */
        Http.prototype.post = /**
         * Performs a request with `post` http method.
         * @param {?} url
         * @param {?} body
         * @param {?=} options
         * @return {?}
         */
        function (url, body, options) {
            return this.request(new Request(mergeOptions(this._defaultOptions.merge(new RequestOptions({ body: body })), options, RequestMethod.Post, url)));
        };
        /**
         * Performs a request with `put` http method.
         */
        /**
         * Performs a request with `put` http method.
         * @param {?} url
         * @param {?} body
         * @param {?=} options
         * @return {?}
         */
        Http.prototype.put = /**
         * Performs a request with `put` http method.
         * @param {?} url
         * @param {?} body
         * @param {?=} options
         * @return {?}
         */
        function (url, body, options) {
            return this.request(new Request(mergeOptions(this._defaultOptions.merge(new RequestOptions({ body: body })), options, RequestMethod.Put, url)));
        };
        /**
         * Performs a request with `delete` http method.
         */
        /**
         * Performs a request with `delete` http method.
         * @param {?} url
         * @param {?=} options
         * @return {?}
         */
        Http.prototype.delete = /**
         * Performs a request with `delete` http method.
         * @param {?} url
         * @param {?=} options
         * @return {?}
         */
        function (url, options) {
            return this.request(new Request(mergeOptions(this._defaultOptions, options, RequestMethod.Delete, url)));
        };
        /**
         * Performs a request with `patch` http method.
         */
        /**
         * Performs a request with `patch` http method.
         * @param {?} url
         * @param {?} body
         * @param {?=} options
         * @return {?}
         */
        Http.prototype.patch = /**
         * Performs a request with `patch` http method.
         * @param {?} url
         * @param {?} body
         * @param {?=} options
         * @return {?}
         */
        function (url, body, options) {
            return this.request(new Request(mergeOptions(this._defaultOptions.merge(new RequestOptions({ body: body })), options, RequestMethod.Patch, url)));
        };
        /**
         * Performs a request with `head` http method.
         */
        /**
         * Performs a request with `head` http method.
         * @param {?} url
         * @param {?=} options
         * @return {?}
         */
        Http.prototype.head = /**
         * Performs a request with `head` http method.
         * @param {?} url
         * @param {?=} options
         * @return {?}
         */
        function (url, options) {
            return this.request(new Request(mergeOptions(this._defaultOptions, options, RequestMethod.Head, url)));
        };
        /**
         * Performs a request with `options` http method.
         */
        /**
         * Performs a request with `options` http method.
         * @param {?} url
         * @param {?=} options
         * @return {?}
         */
        Http.prototype.options = /**
         * Performs a request with `options` http method.
         * @param {?} url
         * @param {?=} options
         * @return {?}
         */
        function (url, options) {
            return this.request(new Request(mergeOptions(this._defaultOptions, options, RequestMethod.Options, url)));
        };
        Http.decorators = [
            { type: core.Injectable },
        ];
        /** @nocollapse */
        Http.ctorParameters = function () { return [
            { type: ConnectionBackend, },
            { type: RequestOptions, },
        ]; };
        return Http;
    }());
    /**
     * @deprecated use \@angular/common/http instead
     */
    var Jsonp = /** @class */ (function (_super) {
        __extends(Jsonp, _super);
        function Jsonp(backend, defaultOptions) {
            return _super.call(this, backend, defaultOptions) || this;
        }
        /**
         * Performs any type of http request. First argument is required, and can either be a url or
         * a {@link Request} instance. If the first argument is a url, an optional {@link RequestOptions}
         * object can be provided as the 2nd argument. The options object will be merged with the values
         * of {@link BaseRequestOptions} before performing the request.
         *
         * @security Regular XHR is the safest alternative to JSONP for most applications, and is
         * supported by all current browsers. Because JSONP creates a `<script>` element with
         * contents retrieved from a remote source, attacker-controlled data introduced by an untrusted
         * source could expose your application to XSS risks. Data exposed by JSONP may also be
         * readable by malicious third-party websites. In addition, JSONP introduces potential risk for
         * future security issues (e.g. content sniffing).  For more detail, see the
         * [Security Guide](http://g.co/ng/security).
         */
        /**
         * Performs any type of http request. First argument is required, and can either be a url or
         * a {\@link Request} instance. If the first argument is a url, an optional {\@link RequestOptions}
         * object can be provided as the 2nd argument. The options object will be merged with the values
         * of {\@link BaseRequestOptions} before performing the request.
         *
         * \@security Regular XHR is the safest alternative to JSONP for most applications, and is
         * supported by all current browsers. Because JSONP creates a `<script>` element with
         * contents retrieved from a remote source, attacker-controlled data introduced by an untrusted
         * source could expose your application to XSS risks. Data exposed by JSONP may also be
         * readable by malicious third-party websites. In addition, JSONP introduces potential risk for
         * future security issues (e.g. content sniffing).  For more detail, see the
         * [Security Guide](http://g.co/ng/security).
         * @param {?} url
         * @param {?=} options
         * @return {?}
         */
        Jsonp.prototype.request = /**
         * Performs any type of http request. First argument is required, and can either be a url or
         * a {\@link Request} instance. If the first argument is a url, an optional {\@link RequestOptions}
         * object can be provided as the 2nd argument. The options object will be merged with the values
         * of {\@link BaseRequestOptions} before performing the request.
         *
         * \@security Regular XHR is the safest alternative to JSONP for most applications, and is
         * supported by all current browsers. Because JSONP creates a `<script>` element with
         * contents retrieved from a remote source, attacker-controlled data introduced by an untrusted
         * source could expose your application to XSS risks. Data exposed by JSONP may also be
         * readable by malicious third-party websites. In addition, JSONP introduces potential risk for
         * future security issues (e.g. content sniffing).  For more detail, see the
         * [Security Guide](http://g.co/ng/security).
         * @param {?} url
         * @param {?=} options
         * @return {?}
         */
        function (url, options) {
            var /** @type {?} */ responseObservable;
            if (typeof url === 'string') {
                url =
                    new Request(mergeOptions(this._defaultOptions, options, RequestMethod.Get, /** @type {?} */ (url)));
            }
            if (url instanceof Request) {
                if (url.method !== RequestMethod.Get) {
                    throw new Error('JSONP requests must use GET request method.');
                }
                responseObservable = httpRequest(this._backend, url);
            }
            else {
                throw new Error('First argument must be a url string or Request instance.');
            }
            return responseObservable;
        };
        Jsonp.decorators = [
            { type: core.Injectable },
        ];
        /** @nocollapse */
        Jsonp.ctorParameters = function () { return [
            { type: ConnectionBackend, },
            { type: RequestOptions, },
        ]; };
        return Jsonp;
    }(Http));

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    /**
     * @license
     * Copyright Google Inc. All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
    /**
     * @return {?}
     */
    function _createDefaultCookieXSRFStrategy() {
        return new CookieXSRFStrategy();
    }
    /**
     * @param {?} xhrBackend
     * @param {?} requestOptions
     * @return {?}
     */
    function httpFactory(xhrBackend, requestOptions) {
        return new Http(xhrBackend, requestOptions);
    }
    /**
     * The module that includes http's providers
     *
     * @deprecated use \@angular/common/http instead
     */
    var HttpModule = /** @class */ (function () {
        function HttpModule() {
        }
        HttpModule.decorators = [
            { type: core.NgModule, args: [{
                        providers: [
                            // TODO(pascal): use factory type annotations once supported in DI
                            // issue: https://github.com/angular/angular/issues/3183
                            { provide: Http, useFactory: httpFactory, deps: [XHRBackend, RequestOptions] },
                            BrowserXhr,
                            { provide: RequestOptions, useClass: BaseRequestOptions },
                            { provide: ResponseOptions, useClass: BaseResponseOptions },
                            XHRBackend,
                            { provide: XSRFStrategy, useFactory: _createDefaultCookieXSRFStrategy },
                        ],
                    },] },
        ];
        /** @nocollapse */
        HttpModule.ctorParameters = function () { return []; };
        return HttpModule;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    /**
     * @license
     * Copyright Google Inc. All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
    /**
     * @deprecated use \@angular/common/http instead
     */
    var VERSION = new core.Version('5.2.11');

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    var JdbPlgToastComponent = /** @class */ (function () {
        function JdbPlgToastComponent() {
            this.msg = "";
        }
        /**
         * @return {?}
         */
        JdbPlgToastComponent.prototype.ngOnInit = /**
         * @return {?}
         */
        function () {
        };
        JdbPlgToastComponent.decorators = [
            { type: core.Component, args: [{
                        selector: 'app-jdb-plg-toast',
                        template: "<div class=\"toast-wraper\"> {{msg}} </div> ",
                    },] },
        ];
        /** @nocollapse */
        JdbPlgToastComponent.ctorParameters = function () { return []; };
        JdbPlgToastComponent.propDecorators = {
            "msg": [{ type: core.Input },],
        };
        return JdbPlgToastComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    var JdbTabComponent = /** @class */ (function () {
        function JdbTabComponent(componentFactoryResolver, _injector) {
            this.componentFactoryResolver = componentFactoryResolver;
            this._injector = _injector;
            this.onTabChange = new core.EventEmitter();
            this.onTabRemove = new core.EventEmitter();
            this.onTopComMsg = new core.EventEmitter();
            this.items = [];
            this.tabComs = [];
            this.curTabIndex = 0;
            this.tabIdComMap = {};
        }
        /**
         * @return {?}
         */
        JdbTabComponent.prototype.ngOnInit = /**
         * @return {?}
         */
        function () {
        };
        /**
         *
         * @param ChildComponent
         * @param attrs:{
         *     propery:value
         * ]
         * title:string
         * isCloseFlag
         */
        /**
         *
         * @param {?} ChildComponent
         * @param {?} attrs
         * @param {?} title
         * @param {?=} comId
         * @param {?=} isCloseFlag
         * @return {?}
         */
        JdbTabComponent.prototype.addItem = /**
         *
         * @param {?} ChildComponent
         * @param {?} attrs
         * @param {?} title
         * @param {?=} comId
         * @param {?=} isCloseFlag
         * @return {?}
         */
        function (ChildComponent, attrs, title, comId, isCloseFlag) {
            var _this = this;
            if (comId === void 0) { comId = ""; }
            if (isCloseFlag === void 0) { isCloseFlag = false; }
            if (comId && this.tabIdComMap[comId]) {
                var /** @type {?} */ com = this.tabIdComMap[comId];
                this.tabChange(com.index);
                return;
            }
            var /** @type {?} */ childComponent = this.componentFactoryResolver.resolveComponentFactory(ChildComponent);
            var /** @type {?} */ comInstance = this.target.createComponent(childComponent);
            var /** @type {?} */ keys = Object.keys(attrs);
            this.items.push({
                title: title,
                isCloseFlag: isCloseFlag
            });
            keys.forEach(function (value) {
                comInstance.instance[value] = attrs[value];
            });
            this.tabComs.push(comInstance);
            if (this.items.length > 1) {
                this.setOneComHide(this.curTabIndex);
            }
            this.tabSubs = comInstance.instance['onTopComMsg'] = new core.EventEmitter();
            this.tabSubs.subscribe(function (value) {
                _this.onTopComMsg.emit(value);
            });
            this.curTabIndex = this.items.length - 1;
            if (comId) {
                this.tabIdComMap[comId] = {
                    index: this.curTabIndex,
                    comInstance: comInstance.instance
                };
            }
            return comInstance;
        };
        /**
         * @param {?} tabIndex
         * @return {?}
         */
        JdbTabComponent.prototype.setOneComHide = /**
         * @param {?} tabIndex
         * @return {?}
         */
        function (tabIndex) {
            this.tabComs[tabIndex].location.nativeElement.style.display = "none";
        };
        /**
         * @param {?} tabIndex
         * @return {?}
         */
        JdbTabComponent.prototype.setOneComShow = /**
         * @param {?} tabIndex
         * @return {?}
         */
        function (tabIndex) {
            this.tabComs[tabIndex].location.nativeElement.style.display = "block";
        };
        /**
         * @param {?} index
         * @return {?}
         */
        JdbTabComponent.prototype.tabChange = /**
         * @param {?} index
         * @return {?}
         */
        function (index) {
            if (this.curTabIndex === index) {
                return;
            }
            this.setOneComHide(this.curTabIndex);
            this.setOneComShow(index);
            this.curTabIndex = index;
            this.onTabChange.emit(index);
            this.tabComs[index].instance.tabRefresh && this.tabComs[index].instance.tabRefresh({});
            // this.tabComs[index].destroy();
        };
        /**
         * @param {?} index
         * @return {?}
         */
        JdbTabComponent.prototype.setOneTabShow = /**
         * @param {?} index
         * @return {?}
         */
        function (index) {
            this.tabChange(index);
        };
        /**
         * @param {?} index
         * @return {?}
         */
        JdbTabComponent.prototype.removeTab = /**
         * @param {?} index
         * @return {?}
         */
        function (index) {
            this.tabComs[index].destroy();
            this.tabComs.splice(index, 1);
            this.items.splice(index, 1);
            if (index <= this.curTabIndex) {
                this.curTabIndex--;
            }
            if (this.curTabIndex < 0) {
                this.curTabIndex = 0;
            }
            this.setOneComShow(this.curTabIndex);
            this.onTabRemove.emit(index);
            var /** @type {?} */ tabIdComMap = this.tabIdComMap;
            for (var /** @type {?} */ key in tabIdComMap) {
                if (tabIdComMap[key].index == index) {
                    delete tabIdComMap[key];
                    break;
                }
            }
        };
        /**
         * @param {?} id
         * @return {?}
         */
        JdbTabComponent.prototype.removeTabById = /**
         * @param {?} id
         * @return {?}
         */
        function (id) {
            var /** @type {?} */ tabIdComMap = this.tabIdComMap;
            for (var /** @type {?} */ key in tabIdComMap) {
                if (key == id) {
                    this.removeTab(tabIdComMap[key]['index']);
                    break;
                }
            }
        };
        /**
         * @return {?}
         */
        JdbTabComponent.prototype.ngOnDestroy = /**
         * @return {?}
         */
        function () {
            if (this.target) {
                // this.target.destroy();
                this.target.clear();
            }
        };
        JdbTabComponent.decorators = [
            { type: core.Component, args: [{
                        selector: 'jdb-tab',
                        template: "<div class=\"tab-wraper\"> <div class=\"tab-nav-wraper\"> <div class=\"tab-item\" *ngFor=\"let item of items;let i = index;\" [ngClass]=\"{'tab-selected':i == curTabIndex}\" title='{{item.title}}'> <div (click)=\"tabChange(i)\" class=\"tab-text\"> {{item.title}}</div> <span class=\"close-btn\" (click)=\"removeTab(i)\" *ngIf=\"i !== 0 && item.isCloseFlag != true\">&times;</span> </div> </div> <div class=\"tab-content-wraper\"> <div #tabContent class=\"place-holder\"></div> </div> </div> ",
                    },] },
        ];
        /** @nocollapse */
        JdbTabComponent.ctorParameters = function () { return [
            { type: core.ComponentFactoryResolver, },
            { type: core.Injector, },
        ]; };
        JdbTabComponent.propDecorators = {
            "target": [{ type: core.ViewChild, args: ['tabContent', { read: core.ViewContainerRef },] },],
            "onTabChange": [{ type: core.Output },],
            "onTabRemove": [{ type: core.Output },],
            "onTopComMsg": [{ type: core.Output },],
        };
        return JdbTabComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    var ShowPictureComponent = /** @class */ (function () {
        function ShowPictureComponent() {
            this.update = new core.EventEmitter();
        }
        /**
         * @return {?}
         */
        ShowPictureComponent.prototype.ngOnInit = /**
         * @return {?}
         */
        function () {
        };
        /**
         * @return {?}
         */
        ShowPictureComponent.prototype.closeModel = /**
         * @return {?}
         */
        function () {
            this.update.emit({ status: false });
        };
        ShowPictureComponent.decorators = [
            { type: core.Component, args: [{
                        selector: 'app-show-picture',
                        template: "<div> <div class=\"img-mask\" (click)=\"closeModel()\"> <!-- \u906E\u7F69\u5C42 --> </div> <div class=\"img-content\"> <span class=\"close\" (click)=\"closeModel()\"> <img src=\"/assets/images/close-x.png\" alt=\"\"> </span> <img [src]=\"pictureUrl\" alt=\"\" style=\"max-height: 600px;max-width: 800px;\"> </div> </div> ",
                    },] },
        ];
        /** @nocollapse */
        ShowPictureComponent.ctorParameters = function () { return []; };
        ShowPictureComponent.propDecorators = {
            "pictureUrl": [{ type: core.Input },],
            "update": [{ type: core.Output },],
        };
        return ShowPictureComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    var PictureViewerComponent = /** @class */ (function () {
        function PictureViewerComponent(renderer) {
            this.renderer = renderer;
            this.pictureList = [];
            this.update = new core.EventEmitter();
            // 设置容器的默认宽高，可适配 可配置属性
            this.maxWidth = 800;
            this.maxHeight = 600;
            this.jdbShowType = 1;
            this._jdbMaster = true;
            this._jdbClear = true;
            this.dragStatus = false;
            this.current = 0;
            this.imgOperate = {
                num: 1,
                degnum: 0
            };
        }
        Object.defineProperty(PictureViewerComponent.prototype, "jdbMaster", {
            get: /**
             * @return {?}
             */
            function () {
                return this._jdbMaster;
            },
            set: /**
             * @param {?} value
             * @return {?}
             */
            function (value) {
                this._jdbMaster = this.toBoolean(value);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(PictureViewerComponent.prototype, "jdbClear", {
            get: /**
             * @return {?}
             */
            function () {
                return this._jdbClear;
            },
            set: /**
             * @param {?} value
             * @return {?}
             */
            function (value) {
                this._jdbClear = this.toBoolean(value);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(PictureViewerComponent.prototype, "jdbCurrent", {
            get: /**
             * @return {?}
             */
            function () {
                return this.current;
            },
            set: /**
             * @param {?} value
             * @return {?}
             */
            function (value) {
                if (value > this.pictureList.length || value < 0) {
                    this.current = 0;
                    return;
                }
                this.current = value;
            },
            enumerable: true,
            configurable: true
        });
        /**
         * @return {?}
         */
        PictureViewerComponent.prototype.ngOnInit = /**
         * @return {?}
         */
        function () {
            this.elem = this.imgBox.nativeElement.children; // 所有的li
        };
        /**
         * @return {?}
         */
        PictureViewerComponent.prototype.ngOnChanges = /**
         * @return {?}
         */
        function () {
            var _this = this;
            if (this.pictureList) {
                this.pictureList.forEach(function (element, index) {
                    _this.resetPosition(index);
                });
            }
        };
        // 设置元素样式
        /**
         * @return {?}
         */
        PictureViewerComponent.prototype.ngAfterViewInit = /**
         * @return {?}
         */
        function () {
            var /** @type {?} */ imgContent = this.imgContent.nativeElement;
            this.renderer.setElementStyle(imgContent, 'height', this.maxHeight + 'px');
            this.renderer.setElementStyle(imgContent, 'width', this.maxWidth + 'px');
            if (this.jdbShowType == 1) {
                this.renderer.setElementStyle(imgContent, 'margin-left', -this.maxWidth / 2 + 'px');
                this.renderer.setElementStyle(imgContent, 'margin-top', -this.maxHeight / 2 + 'px');
            }
        };
        // 重置图片位置
        /**
         * @param {?} index
         * @return {?}
         */
        PictureViewerComponent.prototype.resetPosition = /**
         * @param {?} index
         * @return {?}
         */
        function (index) {
            var _this = this;
            var /** @type {?} */ image = new Image();
            image.onload = function () {
                // 获取当前加载图片宽高
                var /** @type {?} */ w = image.width;
                var /** @type {?} */ h = image.height;
                var /** @type {?} */ hRatio;
                var /** @type {?} */ wRatio;
                // 设置默认比例以及容器宽高
                var /** @type {?} */ imgRate = w / h; // 图片宽高比
                // const maxWidth = 800;
                // const maxHeight = 600;
                wRatio = _this.maxWidth / w;
                hRatio = _this.maxHeight / h;
                if (wRatio > 1 && hRatio > 1) {
                    // 两者比例均大于1表示图为小图，宽高未达到800*600,则取原图大小
                    w = w;
                    h = h;
                }
                else if (wRatio < 1 && hRatio < 1) {
                    // 两者比例均小于1表示图为大图，宽高达到800*600,则取容器大小
                    if (imgRate > 1) {
                        // 宽图
                        w = _this.maxWidth;
                        h = w / imgRate;
                    }
                    else if (imgRate < 1) {
                        // 长图
                        h = _this.maxHeight;
                        w = h * imgRate;
                    }
                }
                else if (wRatio > 1 && hRatio < 1) {
                    // 表示为长图片，则高为600，宽等比例缩放取值
                    h = _this.maxHeight;
                    w = w * hRatio;
                }
                else if (wRatio < 1 && hRatio > 1) {
                    // 表示为宽图片，则宽为800，高等比例缩放取值
                    h = h * wRatio;
                    w = _this.maxWidth;
                }
                // 设置图片展示宽高
                // 设置图片展示宽高
                _this.renderer.setElementStyle(_this.elem[index].children[0], 'height', h + 'px');
                _this.renderer.setElementStyle(_this.elem[index].children[0], 'width', w + 'px');
                if (w === _this.maxWidth && h === _this.maxHeight) {
                    // 设置图片位置使其垂直水平居中
                    // 设置图片位置使其垂直水平居中
                    _this.renderer.setElementStyle(_this.elem[index].children[0], 'top', '0px');
                    _this.renderer.setElementStyle(_this.elem[index].children[0], 'left', '0px');
                }
                else {
                    // 设置图片位置使其垂直水平居中
                    // 设置图片位置使其垂直水平居中
                    _this.renderer.setElementStyle(_this.elem[index].children[0], 'top', (_this.maxHeight - h) / 2 + 'px');
                    _this.renderer.setElementStyle(_this.elem[index].children[0], 'left', (_this.maxWidth - w) / 2 + 'px');
                }
            };
            image.src = this.pictureList[index].imgUrl;
        };
        // 切换动画
        /**
         * @param {?} index
         * @return {?}
         */
        PictureViewerComponent.prototype.ImgState = /**
         * @param {?} index
         * @return {?}
         */
        function (index) {
            if (this.pictureList && this.pictureList.length) {
                if (this.current === 0) {
                    return index === 0 ? 'on' :
                        index === 1 ? 'next' :
                            index === this.pictureList.length - 1 ? 'prev' :
                                'off';
                }
                else if (this.current === this.pictureList.length - 1) {
                    return index === this.pictureList.length - 1 ? 'on' :
                        index === this.pictureList.length - 2 ? 'prev' :
                            index === 0 ? 'next' :
                                'off';
                }
                switch (index - this.current) {
                    case 0:
                        return 'on';
                    case 1:
                        return 'next';
                    case -1:
                        return 'prev';
                    default:
                        return 'off';
                }
            }
            else {
                return 'off';
            }
        };
        // 下一张图
        /**
         * @return {?}
         */
        PictureViewerComponent.prototype.Next = /**
         * @return {?}
         */
        function () {
            this.resetImgData();
            this.current = (this.current + 1) % this.pictureList.length;
            this.resetPosition(this.current - 1);
            // 修改状态，使拖动图片回到原来位置
            // this.dragStatus = true;
        };
        // 上一张图
        /**
         * @return {?}
         */
        PictureViewerComponent.prototype.Prev = /**
         * @return {?}
         */
        function () {
            this.resetImgData();
            this.current = this.current - 1 < 0 ? this.pictureList.length - 1 : this.current - 1;
            this.resetPosition(this.current + 1);
            // 修改状态，使拖动图片回到原来位置
            // this.dragStatus = true;
        };
        // 关闭图片查看器 __关闭弹框后再次打开所有拖拽后的位置都会自动归为，因为触发了onChanges方法
        /**
         * @return {?}
         */
        PictureViewerComponent.prototype.closeModel = /**
         * @return {?}
         */
        function () {
            this.resetImgData();
            this.update.emit({ status: false });
        };
        // 放大 50% 100% 200% 400%
        /**
         * @return {?}
         */
        PictureViewerComponent.prototype.scaleBig = /**
         * @return {?}
         */
        function () {
            this.imgOperate.num = this.imgOperate.num * 2;
            if (this.imgOperate.num > 4) {
                this.imgOperate.num = 4;
            }
            var /** @type {?} */ rate = 'scale(' + 1 * this.imgOperate.num + ',' + 1 * this.imgOperate.num + ') rotate(' + (-this.imgOperate.degnum * 90) + 'deg)';
            this.renderer.setElementStyle(this.elem[this.current].children[0], 'transform', rate);
        };
        // 缩小
        /**
         * @return {?}
         */
        PictureViewerComponent.prototype.scaleSmall = /**
         * @return {?}
         */
        function () {
            this.imgOperate.num = this.imgOperate.num / 2;
            if (this.imgOperate.num < 1) {
                this.imgOperate.num = 0.5;
            }
            var /** @type {?} */ rate = 'scale(' + 1 * this.imgOperate.num + ',' + 1 * this.imgOperate.num + ') rotate(' + (-this.imgOperate.degnum * 90) + 'deg)';
            this.renderer.setElementStyle(this.elem[this.current].children[0], 'transform', rate);
        };
        // 逆时针旋转
        /**
         * @return {?}
         */
        PictureViewerComponent.prototype.routateNi = /**
         * @return {?}
         */
        function () {
            this.imgOperate.degnum++;
            var /** @type {?} */ rate = 'scale(' + 1 * this.imgOperate.num + ',' + 1 * this.imgOperate.num + ') rotate(' + (-this.imgOperate.degnum * 90) + 'deg)';
            this.renderer.setElementStyle(this.elem[this.current].children[0], 'transform', rate);
        };
        // 顺时针旋转
        /**
         * @return {?}
         */
        PictureViewerComponent.prototype.routateShun = /**
         * @return {?}
         */
        function () {
            this.imgOperate.degnum--;
            var /** @type {?} */ rate = 'scale(' + 1 * this.imgOperate.num + ',' + 1 * this.imgOperate.num + ') rotate(' + (-this.imgOperate.degnum * 90) + 'deg)';
            this.renderer.setElementStyle(this.elem[this.current].children[0], 'transform', rate);
        };
        // 重置图片数据
        /**
         * @return {?}
         */
        PictureViewerComponent.prototype.resetImgData = /**
         * @return {?}
         */
        function () {
            this.imgOperate = {
                num: 1,
                degnum: 0
            };
            var /** @type {?} */ rate = 'scale(1,1) rotate(0deg)';
            this.renderer.setElementStyle(this.elem[this.current].children[0], 'transition', 'transform 0.2s linear 0.4s');
            this.renderer.setElementStyle(this.elem[this.current].children[0], 'transform', rate);
        };
        // 转换为boolean,即实现有这个字段就认为为true,没有即为false
        /**
         * @param {?} value
         * @return {?}
         */
        PictureViewerComponent.prototype.toBoolean = /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            return value === '' || (value && value !== 'false');
        };
        /**
         * @return {?}
         */
        PictureViewerComponent.prototype.ngOnDestroy = /**
         * @return {?}
         */
        function () {
            this.pictureList = null;
            this.imgBox = null;
            this.imgContent = null;
            this.current = null;
        };
        PictureViewerComponent.decorators = [
            { type: core.Component, args: [{
                        selector: 'app-picture-viewer',
                        template: "<div class=\"picture-viewer\"> <div class=\"img-mask\" *ngIf=\"_jdbMaster\" (click)=\"closeModel()\"> <!-- \u906E\u7F69\u5C42 --> </div> <div #imgContent [ngClass]=\"{'img-content-componet':jdbShowType==2}\" class=\"img-content\"> <!-- \u53F3\u4E0A\u89D2\u5173\u95ED\u6309\u94AE --> <div class=\"close\" *ngIf=\"_jdbClear\" (click)=\"closeModel()\"> <span class=\"icon-close\"></span> </div> <!-- \u56FE\u7247box --> <ul class=\"img-box\" #img> <!-- <li *ngFor=\"let item of pictureList;let i=index\" [@imgMove]=\"ImgState(i)\"> <img appDragDirective \u00A0[src]=\"item.imgUrl\" alt=\"\" style=\"max-height: 600px;max-width: 800px;\"> </li> --> </ul> <!-- \u4E0A\u4E00\u9875\u4E0B\u4E00\u9875 --> <div [hidden]=\"current==0\" class=\"prev-page\" (click)=\"Prev()\"> <span class=\"icon-pagination-prev\"></span> </div> <div [hidden]=\"current==pictureList.length-1\" class=\"next-page\" (click)=\"Next()\"> <span class=\"icon-pagination-next\"></span> </div> <!-- \u53F3\u4E0B\u89D2\u9875\u7801 --> <div class=\"img-index\">{{current+1}}/{{pictureList.length}}</div> <!-- \u7F29\u653E\u65CB\u8F6C\u6309\u94AE\u7EC4 --> <div class=\"btn-box\"> <span [ngClass]=\"{'hover-disabled':imgOperate.num===4}\" class=\"icon-picture-zoom-in scale-big\" (click)=\"scaleBig()\"></span> <span [ngClass]=\"{'hover-disabled':imgOperate.num==0.5}\" class=\"icon-picture-zoom-out  scale-small\" (click)=\"scaleSmall()\"></span> <span class=\"icon-picture-counterclockwise routate-ni\" (click)=\"routateNi()\"></span> <span class=\"icon-picture-clockwise routate-shun\" (click)=\"routateShun()\"></span> </div> </div> </div>",
                        // styleUrls:  ['./picture-viewer.component.scss'],
                        animations: [
                            core.trigger('imgMove', [
                                /** 不显示 */
                                core.state('off', core.style({ 'display': 'none', 'z-index': '0', 'transform': 'translateX(0)' })),
                                /** 上一张图片 */
                                core.state('prev', core.style({
                                    'z-index': '1',
                                    'transform': 'translateX(-100%)'
                                })),
                                /** 下一张图片 */
                                core.state('next', core.style({ 'z-index': '2', 'transform': 'translateX(100%)' })),
                                /** 当前图片 */
                                core.state('on', core.style({ 'z-index': '3', 'transform': 'translateX(0)' })),
                                core.transition('prev=>on', [
                                    core.animate('0.3s ease-in')
                                ]),
                                core.transition('next=>on', [
                                    core.animate('0.3s ease-in')
                                ]),
                                core.transition('on=>prev', [
                                    core.animate('0.3s ease-in')
                                ]),
                                core.transition('on=>next', [
                                    core.animate('0.3s ease-in')
                                ])
                            ])
                        ]
                    },] },
        ];
        /** @nocollapse */
        PictureViewerComponent.ctorParameters = function () { return [
            { type: core.Renderer, },
        ]; };
        PictureViewerComponent.propDecorators = {
            "pictureList": [{ type: core.Input },],
            "update": [{ type: core.Output },],
            "imgBox": [{ type: core.ViewChild, args: ['img',] },],
            "imgContent": [{ type: core.ViewChild, args: ['imgContent',] },],
            "maxWidth": [{ type: core.Input },],
            "maxHeight": [{ type: core.Input },],
            "jdbShowType": [{ type: core.Input },],
            "jdbMaster": [{ type: core.Input },],
            "jdbClear": [{ type: core.Input },],
            "jdbCurrent": [{ type: core.Input },],
        };
        return PictureViewerComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    var DragDirective = /** @class */ (function () {
        function DragDirective(elem, render) {
            //
            this.elem = elem;
            this.render = render;
            this.isDown = false;
        }
        /**
         * @param {?} event
         * @return {?}
         */
        DragDirective.prototype.onMousedown = /**
         * @param {?} event
         * @return {?}
         */
        function (event) {
            var /** @type {?} */ wRate = localStorage.getItem('dragWidth');
            var /** @type {?} */ hRate = localStorage.getItem('dragHeight');
            this.isDown = true;
            this.disLeft = this.elem.nativeElement.offsetLeft;
            this.disTop = this.elem.nativeElement.offsetTop;
            this.disX = event.clientX;
            this.disY = event.clientY;
            event.target.style.cursor = 'move';
            // event.preventDefault();
        };
        /**
         * @param {?} event
         * @return {?}
         */
        DragDirective.prototype.onMousemove = /**
         * @param {?} event
         * @return {?}
         */
        function (event) {
            event.preventDefault();
            // 判断该元素是否被点击了。
            if (this.isDown) {
                var /** @type {?} */ newdisX = event.clientX - this.disX;
                var /** @type {?} */ newdisY = event.clientY - this.disY;
                this.elem.nativeElement.style.left = newdisX + this.disLeft + 'px';
                this.elem.nativeElement.style.top = newdisY + this.disTop + 'px';
            }
            return false;
        };
        /**
         * @return {?}
         */
        DragDirective.prototype.onMouseup = /**
         * @return {?}
         */
        function () {
            // 只用当元素移动过了，离开函数体才会触发。
            if (this.isDown) {
                this.isDown = false;
                this.disLeft = this.elem.nativeElement.offsetLeft;
                this.disTop = this.elem.nativeElement.offsetTop;
            }
        };
        /**
         * @return {?}
         */
        DragDirective.prototype.onMouseleave = /**
         * @return {?}
         */
        function () {
            this.isDown = false;
        };
        /**
         * @return {?}
         */
        DragDirective.prototype.ngOnDestroy = /**
         * @return {?}
         */
        function () {
            //Called once, before the instance is destroyed.
            //Add 'implements OnDestroy' to the class.
        };
        DragDirective.decorators = [
            { type: core.Directive, args: [{
                        selector: 'img[appDragDirective]'
                    },] },
        ];
        /** @nocollapse */
        DragDirective.ctorParameters = function () { return [
            { type: core.ElementRef, },
            { type: core.Renderer, },
        ]; };
        DragDirective.propDecorators = {
            "onMousedown": [{ type: core.HostListener, args: ['mousedown', ['$event'],] },],
            "onMousemove": [{ type: core.HostListener, args: ['mousemove', ['$event'],] },],
            "onMouseup": [{ type: core.HostListener, args: ['mouseup', ['$event'],] },],
            "onMouseleave": [{ type: core.HostListener, args: ['mouseleave', ['$event'],] },],
        };
        return DragDirective;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    var JdbPlgPaginationComponent = /** @class */ (function () {
        function JdbPlgPaginationComponent(el, renderer2) {
            this.el = el;
            this.renderer2 = renderer2;
            this._current = 1;
            this._pageSize = 10;
            this._firstIndex = 1;
            this._lastIndex = Infinity;
            this._showTotal = false;
            this._showPageSize = false;
            this._showQuickJump = false;
            this.pages = [];
            // _options = [10, 20, 30, 40, 50]; // select默认数组
            // select默认数组
            this._options = [
                { value: 10, text: '10条/页' },
                { value: 20, text: '20条/页' },
                { value: 30, text: '30条/页' },
                { value: 40, text: '40条/页' },
                { value: 50, text: '50条/页' }
            ];
            this._jdbSimple = false;
            this.jdbPageSizeChange = new core.EventEmitter();
            this.jdbPageIndexChange = new core.EventEmitter();
        }
        Object.defineProperty(JdbPlgPaginationComponent.prototype, "jdbShowTotal", {
            get: /**
             * @return {?}
             */
            function () {
                return this._showTotal;
            },
            set: /**
             * @param {?} value
             * @return {?}
             */
            function (value) {
                this._showTotal = this.toBoolean(value);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(JdbPlgPaginationComponent.prototype, "jdbTotal", {
            get: /**
             * @return {?}
             */
            function () {
                return this._total;
            },
            set: /**
             * @param {?} value
             * @return {?}
             */
            function (value) {
                // 若传入值和当前total一致，则不触发操作
                if (value === this._total) {
                    return;
                }
                this._total = value;
                this.setPageNo();
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(JdbPlgPaginationComponent.prototype, "jdbPageIndex", {
            get: /**
             * @return {?}
             */
            function () {
                return this._current;
            },
            set: /**
             * @param {?} value
             * @return {?}
             */
            function (value) {
                if (this._current === value) {
                    return;
                }
                if (value > this._lastIndex || value < this._firstIndex) {
                    return;
                }
                this._current = Number(value);
                this.setPageNo();
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(JdbPlgPaginationComponent.prototype, "jdbShowPageSize", {
            get: /**
             * @return {?}
             */
            function () {
                return this._showPageSize;
            },
            set: /**
             * @param {?} value
             * @return {?}
             */
            function (value) {
                this._showPageSize = this.toBoolean(value);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(JdbPlgPaginationComponent.prototype, "jdbPageSize", {
            get: /**
             * @return {?}
             */
            function () {
                return this._pageSize;
            },
            set: /**
             * @param {?} value
             * @return {?}
             */
            function (value) {
                if (value === this._pageSize) {
                    return;
                }
                this._pageSize = value;
                this.setPageNo();
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(JdbPlgPaginationComponent.prototype, "jdbSizeOptions", {
            get: /**
             * @return {?}
             */
            function () {
                return this._options;
            },
            set: /**
             * @param {?} value
             * @return {?}
             */
            function (value) {
                // 若传入值和当前total一致，则不触发操作
                if (value === this._options) {
                    return;
                }
                // 判断是否为数组
                if (Object.prototype.toString.call(value) === '[object Array]') {
                    var /** @type {?} */ optionsArr_1 = [];
                    value.forEach(function (elem) {
                        var /** @type {?} */ obj = {
                            value: elem,
                            text: elem + '条/页'
                        };
                        optionsArr_1.push(obj);
                    });
                    this._options = optionsArr_1;
                }
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(JdbPlgPaginationComponent.prototype, "jdbShowQuickJump", {
            get: /**
             * @return {?}
             */
            function () {
                return this._showQuickJump;
            },
            set: /**
             * @param {?} value
             * @return {?}
             */
            function (value) {
                this._showQuickJump = this.toBoolean(value);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(JdbPlgPaginationComponent.prototype, "jdbSimple", {
            get: /**
             * @return {?}
             */
            function () {
                return this.jdbSimple;
            },
            set: /**
             * @param {?} value
             * @return {?}
             */
            function (value) {
                this._jdbSimple = this.toBoolean(value);
            },
            enumerable: true,
            configurable: true
        });
        // 创建页码
        /**
         * @return {?}
         */
        JdbPlgPaginationComponent.prototype.setPageNo = /**
         * @return {?}
         */
        function () {
            // 向上取整
            this._lastIndex = Math.ceil(this._total / this._pageSize);
            // 如果当前页码大于尾页，则等于尾页
            // if (this._current > this._lastIndex) {
            //   this.jdbPageIndex = this._lastIndex;
            //   this.jdbPageIndexChange.emit(this.jdbPageIndex);
            // }
            var /** @type {?} */ tmpPages = [];
            if (this._lastIndex <= 9) {
                // 若总页数不超过9，则全部展示在页面上
                for (var /** @type {?} */ i = 2; i <= this._lastIndex - 1; i++) {
                    tmpPages.push({
                        index: i
                    });
                }
            }
            else {
                var /** @type {?} */ current = +this._current;
                var /** @type {?} */ left = Math.max(2, current - 2);
                var /** @type {?} */ right = Math.min(current + 2, this._lastIndex - 1);
                // 特殊处理正数第五个数和倒数第五个数
                if (current === 5) {
                    left = 2;
                }
                else if (current === this._lastIndex - 4) {
                    right = this._lastIndex - 1;
                }
                if (current - 1 <= 3) {
                    right = 7;
                }
                if (this._lastIndex - current <= 3) {
                    left = this._lastIndex - 6;
                }
                for (var /** @type {?} */ i = left; i <= right; i++) {
                    tmpPages.push({ index: i });
                }
            }
            this.pages = tmpPages;
        };
        // status为true表示页码切换，num表示页码，false表示条数切换，num表示条数
        /**
         * @param {?} status
         * @param {?} num
         * @return {?}
         */
        JdbPlgPaginationComponent.prototype.dataChange = /**
         * @param {?} status
         * @param {?} num
         * @return {?}
         */
        function (status, num) {
            if (status) {
                if (num === this._firstIndex - 1 || num === this._lastIndex + 1) {
                    return;
                }
                // 清空输入框内容
                this.quickJumpPage = '';
                this.jdbPageIndex = num;
                this.jdbPageIndexChange.emit(this.jdbPageIndex);
            }
            else {
                // 清空输入框内容
                this.quickJumpPage = '';
                this.jdbPageSize = num;
                this.jdbPageSizeChange.emit(num);
                // 切换页数之后需要将页码重置为1
                this.jdbPageIndex = 1;
                this.jdbPageIndexChange.emit(this.jdbPageIndex);
                this.setPageNo();
            }
            // this.setPageNo();
        };
        // 点击跳转按钮快速跳转
        /**
         * @return {?}
         */
        JdbPlgPaginationComponent.prototype.quickJump = /**
         * @return {?}
         */
        function () {
            // 若是输入的页码大于最后一页页码，即超出范围不存在，则清空页码，并使输入框获取焦点
            if (this.quickJumpPage > this._lastIndex) {
                this.inputJump.nativeElement.focus();
                this.quickJumpPage = '';
                return;
            }
            // 若输入为空，则不能跳转
            if (!this.quickJumpPage) {
                return;
            }
            this.jdbPageIndex = this.quickJumpPage;
            this.jdbPageIndexChange.emit(this.jdbPageIndex);
        };
        // 点击左箭头(为什么使用条数除以2呢)
        /**
         * @param {?} pageSize
         * @return {?}
         */
        JdbPlgPaginationComponent.prototype.jumpBefore = /**
         * @param {?} pageSize
         * @return {?}
         */
        function (pageSize) {
            this.dataChange(true, this._current - Math.round(pageSize / 2));
        };
        // 点击右箭头
        /**
         * @param {?} pageSize
         * @return {?}
         */
        JdbPlgPaginationComponent.prototype.jumpAfter = /**
         * @param {?} pageSize
         * @return {?}
         */
        function (pageSize) {
            this.dataChange(true, this._current + Math.round(pageSize / 2));
        };
        // 转换为boolean,即实现有这个字段就认为为true,没有即为false
        /**
         * @param {?} value
         * @return {?}
         */
        JdbPlgPaginationComponent.prototype.toBoolean = /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            return value === '' || (value && value !== 'false');
        };
        // 校验是否为纯数字
        /**
         * @param {?} obj
         * @return {?}
         */
        JdbPlgPaginationComponent.prototype.isNumber = /**
         * @param {?} obj
         * @return {?}
         */
        function (obj) {
            var /** @type {?} */ reg = /^[0-9]*$/;
            return reg.test(obj);
        };
        JdbPlgPaginationComponent.decorators = [
            { type: core.Component, args: [{
                        selector: 'app-jdb-plg-pagination',
                        template: "<div class=\"jdb-plg-pagination\"> <!-- \u603B\u6761\u6570 --> <span *ngIf=\"_showTotal\" class=\"total-box\"> \u5171{{_total}}\u6761 </span> <div class=\"operate-box\"> <!-- \u6761\u6570\u5207\u6362 --> <div class=\"jdb-plg-pagination-options\" *ngIf=\"_showPageSize\"> <app-jdb-plg-select (ngModelChange)=\"dataChange(false,$event)\" [jdbSize]=\"'small'\" [jdbWidth]=\"'90px'\" [(ngModel)]=\"_pageSize\" [jdbSelectList]=\"_options\"></app-jdb-plg-select> </div> <!-- \u57FA\u672C\u5206\u9875\u6837\u5F0F --> <ul *ngIf=\"!_jdbSimple\" class=\"base-pagination\"> <!-- \u4E0A\u4E00\u9875\u6309\u94AE --> <li class=\"jdb-plg-pagination-prev\" title=\"\u4E0A\u4E00\u9875\" [ngClass]=\"{'disabled':_current===_firstIndex}\" (click)=\"dataChange(true,_current-1)\"> <span class=\"jdbIcon icon-pagination-prev\"></span> </li> <!-- \u9996\u9875\u6309\u94AE --> <li class=\"jdb-plg-pagination-first\" title=\"\u9996\u9875\" [ngClass]=\"{'active':_current===_firstIndex}\" (click)=\"dataChange(true,_firstIndex)\"> {{_firstIndex}} </li> <!-- \u7701\u7565\u53F7 --> <li class=\"jdb-plg-pagination-forward\" *ngIf=\"(_lastIndex >9)&&(_current-4>_firstIndex)\" (click)=\"jumpBefore(_pageSize)\"> <span class=\"icon-pagination-more\"></span> <span class=\"icon-pagination-jump-prev\"></span> </li> <!-- \u6309\u94AE --> <li class=\"jdb-plg-pagination-pager\" *ngFor=\"let page of pages\" [ngClass]=\"{'active':_current===page.index}\" (click)=\"dataChange(true,page.index)\"> {{page.index}} </li> <!-- \u7701\u7565\u53F7 --> <li class=\"jdb-plg-pagination-backward\" *ngIf=\"(_lastIndex >9)&&(_current+4<_lastIndex)\" (click)=\"jumpAfter(_pageSize)\"> <span class=\"icon-pagination-more\"></span> <span class=\"icon-pagination-jump-next\"></span> </li> <!-- \u5C3E\u9875\u6309\u94AE --> <li class=\"jdb-plg-pagination-last\" *ngIf=\"(_lastIndex>0)&&(_lastIndex!==_firstIndex)\" title=\"\u5C3E\u9875\" [ngClass]=\"{'active':_current===_lastIndex}\" (click)=\"dataChange(true,_lastIndex)\"> {{_lastIndex}} </li> <!-- \u4E0B\u4E00\u9875\u6309\u94AE --> <li class=\"jdb-plg-pagination-next\" title=\"\u4E0B\u4E00\u9875\" [ngClass]=\"{'disabled':_current===_lastIndex}\" (click)=\"dataChange(true,_current+1)\"> <span class=\"jdbIcon icon-pagination-next\"></span> </li> </ul> <!-- \u7B80\u5355\u5206\u9875\u6837\u5F0F --> <div class=\"simple-pagination\" *ngIf=\"_jdbSimple\"> <div class=\"left-box\"> <span class=\"icon-pagination-first\" [ngClass]=\"{'disabled':_current===_firstIndex}\" (click)=\"dataChange(true,_firstIndex)\"></span> <span class=\"icon-pagination-prev\" [ngClass]=\"{'disabled':_current===_firstIndex}\" (click)=\"dataChange(true,_current-1)\"></span> </div> <div class=\"center-box\"> {{_current}} / {{_lastIndex}} </div> <div class=\"right-box\"> <span class=\"icon-pagination-next\" [ngClass]=\"{'disabled':_current===_lastIndex}\" (click)=\"dataChange(true,_current+1)\"></span> <span class=\"icon-pagination-last\" [ngClass]=\"{'disabled':_current===_lastIndex}\" (click)=\"dataChange(true,_lastIndex)\"></span> </div> </div> <!-- \u5FEB\u901F\u8DF3\u8F6C --> <div *ngIf=\"_showQuickJump\" class=\"quick-jumper\"> \u7B2C <input #inputJump type=\"text\" [(ngModel)]=\"quickJumpPage\" (keyup.enter)=\"quickJump()\" appOnlyNumber=\"true\"> \u9875 <button (click)=\"quickJump()\">\u8DF3\u8F6C</button> </div> </div> </div>",
                    },] },
        ];
        /** @nocollapse */
        JdbPlgPaginationComponent.ctorParameters = function () { return [
            { type: core.ElementRef, },
            { type: core.Renderer2, },
        ]; };
        JdbPlgPaginationComponent.propDecorators = {
            "jdbPageSizeChange": [{ type: core.Output },],
            "jdbPageIndexChange": [{ type: core.Output },],
            "inputJump": [{ type: core.ViewChild, args: ['inputJump',] },],
            "jdbShowTotal": [{ type: core.Input },],
            "jdbTotal": [{ type: core.Input },],
            "jdbPageIndex": [{ type: core.Input },],
            "jdbShowPageSize": [{ type: core.Input },],
            "jdbPageSize": [{ type: core.Input },],
            "jdbSizeOptions": [{ type: core.Input },],
            "jdbShowQuickJump": [{ type: core.Input },],
            "jdbSimple": [{ type: core.Input },],
        };
        return JdbPlgPaginationComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    /**
     * @param {?} obj
     * @return {?}
     */
    function isArray(obj) {
        return Object.prototype.toString.call(obj) === "[object Array]";
    }
    /**
     * @param {?} obj
     * @return {?}
     */
    function isObject(obj) {
        return Object.prototype.toString.call(obj) === "[object Object]";
    }
    /**
     * @param {?} obj
     * @return {?}
     */
    function isDate(obj) {
        return Object.prototype.toString.call(obj) === "[object Date]";
    }
    /**
     * @param {?} value
     * @return {?}
     */
    function toJson(value) {
        var /** @type {?} */ jsonObj = {};
        try {
            jsonObj = JSON.parse(value);
        }
        catch (/** @type {?} */ e) {
            console.log('to json parse error');
        }
        return jsonObj;
    }
    /**
     * @param {?} v
     * @return {?}
     */
    function serializeValue(v) {
        if (isObject(v)) {
            return isDate(v) ? v.toISOString() : toJson(v);
        }
        return v;
    }
    /**
     * @param {?} val
     * @param {?=} pctEncodeSpaces
     * @return {?}
     */
    function encodeUriQuery(val, pctEncodeSpaces) {
        return encodeURIComponent(val).
            replace(/%40/gi, '@').
            replace(/%3A/gi, ':').
            replace(/%24/g, '$').
            replace(/%2C/gi, ',').
            replace(/%20/g, (pctEncodeSpaces ? '%20' : '+'));
    }
    /**
     * @param {?} params
     * @return {?}
     */
    function jQueryLikeParamSerializer(params) {
        if (!params)
            return '';
        var /** @type {?} */ parts = [];
        serialize(params, '', true);
        return parts.join('&');
        /**
         * @param {?} toSerialize
         * @param {?} prefix
         * @param {?=} topLevel
         * @return {?}
         */
        function serialize(toSerialize, prefix, topLevel) {
            if (isArray(toSerialize)) {
                toSerialize.forEach(function (value, index) {
                    serialize(value, prefix + '[' + (isObject(value) ? index : '') + ']');
                });
            }
            else if (isObject(toSerialize) && !isDate(toSerialize)) {
                for (var /** @type {?} */ key in toSerialize) {
                    serialize(toSerialize[key], prefix +
                        (topLevel ? '' : '.') +
                        key +
                        (topLevel ? '' : ''));
                    // serialize(toSerialize[key], prefix +
                    //     (topLevel ? '' : '[') +
                    //     key +
                    //     (topLevel ? '' : ']'));
                }
            }
            else {
                parts.push(encodeUriQuery(prefix) + '=' +
                    (toSerialize == null ? '' : encodeUriQuery(serializeValue(toSerialize))));
            }
        }
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    var /** @type {?} */ hasOwnProperty = Object.prototype.hasOwnProperty;
    var /** @type {?} */ propIsEnumerable = Object.prototype.propertyIsEnumerable;
    /**
     * @param {?} val
     * @return {?}
     */
    function toObject(val) {
        if (val === null || val === undefined) {
            throw new TypeError('Object.assign cannot be called with null or undefined');
        }
        return Object(val);
    }
    /**
     * @param {?} target
     * @param {...?} source
     * @return {?}
     */
    function objectAssign(target) {
        var source = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            source[_i - 1] = arguments[_i];
        }
        var /** @type {?} */ from;
        var /** @type {?} */ to = toObject(target);
        var /** @type {?} */ symbols;
        for (var /** @type {?} */ s = 1; s < arguments.length; s++) {
            from = Object(arguments[s]);
            for (var /** @type {?} */ key in from) {
                if (hasOwnProperty.call(from, key)) {
                    to[key] = from[key];
                }
            }
            if ((/** @type {?} */ (Object)).getOwnPropertySymbols) {
                symbols = (/** @type {?} */ (Object)).getOwnPropertySymbols(from);
                for (var /** @type {?} */ i = 0; i < symbols.length; i++) {
                    if (propIsEnumerable.call(from, symbols[i])) {
                        to[symbols[i]] = from[symbols[i]];
                    }
                }
            }
        }
        return to;
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    var JdbPlgBaseService = /** @class */ (function () {
        function JdbPlgBaseService(http$$1, componentFactoryResolver, route) {
            this.http = http$$1;
            this.componentFactoryResolver = componentFactoryResolver;
            this.route = route;
        }
        // 处理不同环境的Url，在原来的基础上做了优化
        // getUrl(apiName: string) {
        //   let api = APIS[apiName];
        //   if (ENV == 'serve' && api.serve) {
        //     return api.serve;
        //   }
        //   if (api.host && api.host[ENV]) {
        //     return api.host[ENV] + api.path;
        //   }
        //   return DEFAULTHOST[ENV] + api.path;
        // }
        /**
         * @param {?} vRef
         * @return {?}
         */
        JdbPlgBaseService.prototype.setRootViewContainerRef = /**
         * @param {?} vRef
         * @return {?}
         */
        function (vRef) {
            this.vRef = vRef;
        };
        /**
         * @param {?} msg
         * @param {?=} delayTime
         * @return {?}
         */
        JdbPlgBaseService.prototype.toast = /**
         * @param {?} msg
         * @param {?=} delayTime
         * @return {?}
         */
        function (msg, delayTime) {
            if (delayTime === void 0) { delayTime = 3000; }
            //通过ComponentFactoryResolver 创建出动态组件的实例
            var /** @type {?} */ childComponent = this.componentFactoryResolver.resolveComponentFactory(JdbPlgToastComponent);
            var /** @type {?} */ comInstance = this.vRef.createComponent(childComponent);
            comInstance.instance.msg = msg;
            comInstance.changeDetectorRef.detectChanges();
            setTimeout(function () {
                comInstance.destroy();
            }, delayTime);
        };
        /**
         * @return {?}
         */
        JdbPlgBaseService.prototype.test = /**
         * @return {?}
         */
        function () {
            alert('jdb services....');
        };
        /**
         *
         * @param apiName
         * @param dataObj
         * @param isIntercept 是否拦截处理returnCode != 0 的情况
         */
        /**
         *
         * @param {?} apiName
         * @param {?} dataObj
         * @param {?} options
         * @return {?}
         */
        JdbPlgBaseService.prototype.post = /**
         *
         * @param {?} apiName
         * @param {?} dataObj
         * @param {?} options
         * @return {?}
         */
        function (apiName, dataObj, options) {
            var _this = this;
            var /** @type {?} */ time = new Date().getTime();
            var /** @type {?} */ loginToken;
            var /** @type {?} */ loginWay;
            var /** @type {?} */ orgUid;
            if (options && options.tokenObj) {
                loginToken = localStorage.getItem(options.tokenObj.loginToken);
                loginWay = localStorage.getItem(options.tokenObj.loginWay);
                orgUid = localStorage.getItem(options.tokenObj.orgUid);
            }
            var /** @type {?} */ loginObj = {};
            var /** @type {?} */ data = {};
            var /** @type {?} */ currentRoute = location.hash.split('/')[1];
            if (loginToken) {
                if (orgUid) {
                    loginObj = {
                        'loginToken': loginToken,
                        'loginWay': loginWay,
                        'orgUid': orgUid,
                        'jdbDhTraceId': time + '-' + parseInt(Math.random() * (100000 + 1) + 1 + '')
                    };
                }
                else {
                    loginObj = {
                        'loginToken': loginToken,
                        'loginWay': loginWay,
                        'jdbDhTraceId': time + '-' + parseInt(Math.random() * (100000 + 1) + 1 + '')
                    };
                }
                data = objectAssign({}, loginObj, dataObj);
            }
            else {
                data = objectAssign({}, dataObj);
            }
            data = jQueryLikeParamSerializer(data);
            var /** @type {?} */ headers = new Headers();
            headers.append('Content-Type', 'application/x-www-form-urlencoded;charset=utf-8');
            var /** @type {?} */ reqUrl = apiName;
            var /** @type {?} */ requestoptions = new RequestOptions({
                headers: headers,
                method: 'post',
                body: data || {}
            });
            console.log(this.http);
            return this.http.request(reqUrl, requestoptions)
                .map(function (res) { return res.json(); })
                .filter(function (res) {
                //校验接口返回的数据结构格式
                if (!(res.hasOwnProperty('data') && res.hasOwnProperty('error'))) {
                    _this.toast('系统接口格式错误！');
                    options && options.reset && options.reset();
                    return false;
                }
                if (options.fns && options.fns.length != 0) {
                    var /** @type {?} */ len = options.fns.length;
                    for (var /** @type {?} */ i = 0; i < len; i++) {
                        var /** @type {?} */ fn = options.fns[i];
                        if (res.error && res.error.returnCode * 1 === fn.returnCode && currentRoute != 'login') {
                            fn.callback();
                        }
                    }
                }
                if (res.error && res.error.returnCode * 1 == 0) {
                    return true;
                }
                //兼容登录组件中qrcodeApi和loginApi两个接口老的写法
                if (typeof (options) === 'boolean') {
                    if (options) {
                        _this.toast(res && res.error && res.error.returnUserMessage);
                        return false;
                    }
                    else {
                        return true;
                    }
                }
                //是否拦截处理
                if (options.isIntercept) {
                    _this.toast(res && res.error && res.error.returnUserMessage);
                    return false;
                }
                else {
                    return true;
                }
            })
                .catch(function (error) {
                return Rx.Observable.throw(error || 'Server error');
            });
        };
        /**
         * @param {?} apiName
         * @param {?} dataObj
         * @return {?}
         */
        JdbPlgBaseService.prototype.postJSON = /**
         * @param {?} apiName
         * @param {?} dataObj
         * @return {?}
         */
        function (apiName, dataObj) {
            // let headers = new Headers({
            //     'Content-Type': 'application/json',
            //     'withCredentials': true
            // });
            var /** @type {?} */ headers = new Headers();
            // headers.append('Content-Type', 'application/x-www-form-urlencoded;charset=utf-8');
            headers.append('Content-Type', 'application/json;charset=utf-8');
            // headers.append('withCredentials','true');
            // let urlData = new URLSearchParams();
            // if (Object.keys(dataObj).length > 0) {
            //     for (let key in dataObj) {
            //         urlData.append(key, dataObj[key]);
            //     }
            // }
            // let loanMarketToken = Cookie.get('loanMarketToken');
            // urlData.append('loanMarketToken', loanMarketToken);
            var /** @type {?} */ reqUrl = apiName;
            // let requestoptions = new RequestOptions({
            //     method: RequestMethod.Post,
            //     url: reqUrl,
            //     headers: headers,
            //     body: testData
            // })
            var /** @type {?} */ options = new RequestOptions({
                headers: headers,
                method: 'post',
                url: reqUrl,
                body: dataObj || {}
            });
            return this.http.request(reqUrl, options)
                .map(function (res) { return res.json(); })
                .filter(function (res) {
                if (res.error && res.error.returnCode * 1 == 0) {
                    return true;
                }
                else {
                    return false;
                }
            })
                .catch(function (error) {
                return Rx.Observable.throw(error || 'Server error');
            });
        };
        /**
         * @param {?} stamp
         * @return {?}
         */
        JdbPlgBaseService.prototype.stamp2string = /**
         * @param {?} stamp
         * @return {?}
         */
        function (stamp) {
            if (stamp) {
                var /** @type {?} */ date = new Date(stamp).toJSON();
                return date.split('T')[0];
            }
            return null;
        };
        /**
         * @param {?} apiName
         * @param {?} params
         * @return {?}
         */
        JdbPlgBaseService.prototype.export = /**
         * @param {?} apiName
         * @param {?} params
         * @return {?}
         */
        function (apiName, params) {
            var /** @type {?} */ cookieStr = ng2Cookies.Cookie.get('loginInfo');
            var /** @type {?} */ cookieObj = {};
            var /** @type {?} */ cookieData = {};
            if (cookieStr) {
                try {
                    cookieObj = JSON.parse(cookieStr);
                    cookieData = {
                        loginToken: cookieObj.loginToken,
                        employeeId: cookieObj.empId
                    };
                }
                catch (/** @type {?} */ e) {
                    console.log('parse cookie error...');
                }
            }
            var /** @type {?} */ paramsObj = objectAssign({}, cookieData, params);
            var /** @type {?} */ url = apiName + '?';
            for (var /** @type {?} */ key in paramsObj) {
                if (paramsObj[key]) {
                    url += key + '=' + encodeURIComponent(paramsObj[key]) + '&';
                }
            }
            window.location.href = url;
        };
        /**
         * @param {?} file
         * @return {?}
         */
        JdbPlgBaseService.prototype.getPicSize = /**
         * @param {?} file
         * @return {?}
         */
        function (file) {
            var /** @type {?} */ arr = {};
            var /** @type {?} */ reader = new FileReader();
            reader.onload = function (e) {
                var /** @type {?} */ data = e.target.result;
                //加载图片获取图片真实宽度和高度
                var /** @type {?} */ image = new Image();
                image.onload = function () {
                    var /** @type {?} */ width = image.width;
                    var /** @type {?} */ height = image.height;
                    arr = {
                        height: height,
                        width: width
                    };
                    return arr;
                };
                image.src = data;
            };
            reader.readAsDataURL(file);
        };
        JdbPlgBaseService.decorators = [
            { type: core.Injectable },
        ];
        /** @nocollapse */
        JdbPlgBaseService.ctorParameters = function () { return [
            { type: Http, },
            { type: core.ComponentFactoryResolver, },
            { type: router.Router, },
        ]; };
        return JdbPlgBaseService;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    var JdbPlgButtonComponent = /** @class */ (function () {
        function JdbPlgButtonComponent(_elementRef, _renderer, jdbPlgBaseService) {
            this._elementRef = _elementRef;
            this._renderer = _renderer;
            this.jdbPlgBaseService = jdbPlgBaseService;
            this._prefixCls = 'jdb-plg-btn';
            this._el = this._elementRef.nativeElement;
            this.nativeElement = this._elementRef.nativeElement;
            this._renderer.addClass(this._el, this._prefixCls);
        }
        Object.defineProperty(JdbPlgButtonComponent.prototype, "jdbSize", {
            get: /**
             * @return {?}
             */
            function () {
                return this.size;
            },
            set: /**
             * @param {?} value
             * @return {?}
             */
            function (value) {
                if (!value) {
                    value = 'default';
                }
                this.size = value;
                // this._renderer.addClass(this._el, this.size);
                this._setClassMap(this.loading);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(JdbPlgButtonComponent.prototype, "jdbType", {
            get: /**
             * @return {?}
             */
            function () {
                return this.type;
            },
            set: /**
             * @param {?} value
             * @return {?}
             */
            function (value) {
                if (!value) {
                    value = 'primary';
                }
                this.type = value;
                // this._renderer.addClass(this._el, this.type);
                this._setClassMap(this.loading);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(JdbPlgButtonComponent.prototype, "jdbLoading", {
            get: /**
             * @return {?}
             */
            function () {
                return this.loading;
            },
            set: /**
             * @param {?} value
             * @return {?}
             */
            function (value) {
                value = value === '' || (value && value !== 'false');
                this.loading = value;
                this._setClassMap(this.loading);
            },
            enumerable: true,
            configurable: true
        });
        /**
         * @param {?} loading
         * @return {?}
         */
        JdbPlgButtonComponent.prototype._setClassMap = /**
         * @param {?} loading
         * @return {?}
         */
        function (loading) {
            this._renderer.removeClass(this._el, 'undefined');
            this._renderer.addClass(this._el, this.size);
            this._renderer.addClass(this._el, this.type);
            if (loading) {
                this._renderer.addClass(this._el, 'loading_disable');
            }
            else {
                this._renderer.removeClass(this._el, 'loading_disable');
            }
        };
        /**
         * @return {?}
         */
        JdbPlgButtonComponent.prototype.ngOnInit = /**
         * @return {?}
         */
        function () {
        };
        JdbPlgButtonComponent.decorators = [
            { type: core.Component, args: [{
                        selector: '[app-jdb-plg-button]',
                        template: "<i class=\"jdb-icon-loading action\" *ngIf=\"loading\"></i> <ng-content></ng-content>",
                    },] },
        ];
        /** @nocollapse */
        JdbPlgButtonComponent.ctorParameters = function () { return [
            { type: core.ElementRef, },
            { type: core.Renderer2, },
            { type: JdbPlgBaseService, },
        ]; };
        JdbPlgButtonComponent.propDecorators = {
            "jdbSize": [{ type: core.Input },],
            "jdbType": [{ type: core.Input },],
            "jdbLoading": [{ type: core.Input },],
        };
        return JdbPlgButtonComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    var JdbPlgDialogComponent = /** @class */ (function () {
        function JdbPlgDialogComponent(resolver) {
            this.resolver = resolver;
            this._customClass = '';
            this._maskClass = '';
            this._visible = false;
            this._title = '';
            this._closeable = true;
            this._animationStatus = '11';
            this._width = '400px';
            this._footerHide = false;
            this._isConfirm = false;
            this._okText = '';
            this._cancelText = '';
            this._RogerText = '';
            this._state = 'hideM';
            this.MvisibileChange = new core.EventEmitter();
            this.MOnOk = new core.EventEmitter();
            this.MOnCancel = new core.EventEmitter();
        }
        Object.defineProperty(JdbPlgDialogComponent.prototype, "Mvisible", {
            get: /**
             * @return {?}
             */
            function () {
                return this._visible;
            },
            set: /**
             * @param {?} value
             * @return {?}
             */
            function (value) {
                var /** @type {?} */ visible = this.toBoolean(value);
                if (this._visible === visible) {
                    return;
                }
                this._visible = visible;
                this.MvisibileChange.emit(this._visible);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(JdbPlgDialogComponent.prototype, "MfooterHiden", {
            get: /**
             * @return {?}
             */
            function () {
                return this._footerHide;
            },
            set: /**
             * @param {?} value
             * @return {?}
             */
            function (value) {
                var /** @type {?} */ visible = this.toBoolean(value);
                if (this._visible === visible) {
                    return;
                }
                this._footerHide = visible;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(JdbPlgDialogComponent.prototype, "Mtitle", {
            set: /**
             * @param {?} value
             * @return {?}
             */
            function (value) {
                if (value instanceof core.TemplateRef) {
                    this._titleTpl = value;
                }
                else {
                    this._title = value;
                }
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(JdbPlgDialogComponent.prototype, "Mcontent", {
            set: /**
             * @param {?} value
             * @return {?}
             */
            function (value) {
                if (value instanceof core.TemplateRef) {
                    this._contentTpl = value;
                }
                else {
                    this._content = value;
                }
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(JdbPlgDialogComponent.prototype, "Mfooter", {
            set: /**
             * @param {?} value
             * @return {?}
             */
            function (value) {
                if (value instanceof core.TemplateRef) {
                    this._footerTpl = value;
                }
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(JdbPlgDialogComponent.prototype, "Mwidth", {
            set: /**
             * @param {?} value
             * @return {?}
             */
            function (value) {
                this._width = typeof value === 'number' ? value + 'px' : value;
            },
            enumerable: true,
            configurable: true
        });
        // 定位modal位置和样式
        /**
         * @return {?}
         */
        JdbPlgDialogComponent.prototype.setStyle = /**
         * @return {?}
         */
        function () {
            var /** @type {?} */ el = this.contentEl.nativeElement;
            this._bodyStyleMap = __assign({ width: this._width });
        };
        /**
         * @param {?} e
         * @return {?}
         */
        JdbPlgDialogComponent.prototype.onEsc = /**
         * @param {?} e
         * @return {?}
         */
        function (e) {
            this.clickCancel(e);
        };
        Object.defineProperty(JdbPlgDialogComponent.prototype, "Mclass", {
            set: /**
             * @param {?} value
             * @return {?}
             */
            function (value) {
                this._customClass = value;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(JdbPlgDialogComponent.prototype, "MOkText", {
            set: /**
             * @param {?} value
             * @return {?}
             */
            function (value) {
                this._okText = value;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(JdbPlgDialogComponent.prototype, "McancelText", {
            set: /**
             * @param {?} value
             * @return {?}
             */
            function (value) {
                this._cancelText = value;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(JdbPlgDialogComponent.prototype, "MRogerText", {
            set: /**
             * @param {?} value
             * @return {?}
             */
            function (value) {
                this._isConfirm = true;
                this._RogerText = value;
            },
            enumerable: true,
            configurable: true
        });
        /**
         * @return {?}
         */
        JdbPlgDialogComponent.prototype.ngOnInit = /**
         * @return {?}
         */
        function () {
            this.setStyle();
        };
        /**
         * @param {?} component
         * @return {?}
         */
        JdbPlgDialogComponent.prototype.createDynamicComponent = /**
         * @param {?} component
         * @return {?}
         */
        function (component) {
            var /** @type {?} */ factory = this.resolver.resolveComponentFactory(/** @type {?} */ (this._content));
            this.bodyEl.createComponent(factory);
        };
        /**
         * @return {?}
         */
        JdbPlgDialogComponent.prototype.ngAfterViewInit = /**
         * @return {?}
         */
        function () {
        };
        /**
         * @param {?} changes
         * @return {?}
         */
        JdbPlgDialogComponent.prototype.ngOnChanges = /**
         * @param {?} changes
         * @return {?}
         */
        function (changes) {
            var _this = this;
            if (this._visible) {
                this._state = 'showM';
                setTimeout(function () {
                    _this.contentEl.nativeElement.parentNode.focus();
                }, 200);
            }
            else {
                this._state = 'hideM';
            }
        };
        /**
         * @param {?} e
         * @return {?}
         */
        JdbPlgDialogComponent.prototype.clickCancel = /**
         * @param {?} e
         * @return {?}
         */
        function (e) {
            this._visible = false;
            this._state = 'hideM';
            this.MOnCancel.emit(e);
        };
        /**
         * @param {?} e
         * @return {?}
         */
        JdbPlgDialogComponent.prototype.clickOk = /**
         * @param {?} e
         * @return {?}
         */
        function (e) {
            if (this.MOnOk) {
                this.MOnOk.emit(e);
            }
            else {
                this._visible = false;
                this._state = 'hideM';
            }
        };
        /**
         * @param {?} e
         * @return {?}
         */
        JdbPlgDialogComponent.prototype.closeModal = /**
         * @param {?} e
         * @return {?}
         */
        function (e) {
            if ((/** @type {?} */ (e.target)).getAttribute('role') === 'dialog') {
                this.clickCancel(e);
                this._state = 'hideM';
            }
        };
        /**
         * @param {?} value
         * @return {?}
         */
        JdbPlgDialogComponent.prototype.toBoolean = /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            return value === '' || (value && value !== false);
        };
        JdbPlgDialogComponent.decorators = [
            { type: core.Component, args: [{
                        selector: 'app-jdb-plg-dialog',
                        template: "<div [ngClass]=\"_customClass\"> <div class=\"_maskClass\" [ngClass]=\"{'hid':!_visible}\" [style.zIndex]=\"1000\"></div> <div class=\"jdb-modal\" tabindex=\"-1\" role=\"dialog\" [ngClass]=\"{'hid':!_visible}\" [ngStyle]=\"{'dispaly':!_visible}\" (click)=\"closeModal($event)\" class=\"_wrapClass\" [ngClass]=\"_wrapClass\" [style.zIndex]=\"1000\" [attr.aria-modalId]=\"modalId\"> <div #modal_content class=\"modal\" [@optionsState]=\"_state\" [ngStyle]=\"_bodyStyleMap\"> <div class=\"modal-content\"> <ng-template [ngIf]=\"_closeable\"> <button class=\"modal-close\" (click)=\"clickCancel($event)\"> <!-- <span class=\"modal-close-x\"></span> --> <span class=\"icon-close\"></span> </button> </ng-template> <div class=\"modal-header\" *ngIf=\"_title||_titleTpl\"> <div class=\"modal-title\" [attr.id]=\"modalId\"> <ng-template #defaultTitle> {{_title}} </ng-template> <ng-template [ngTemplateOutlet]=\"_titleTpl||defaultTitle\"> </ng-template> </div> </div> <div class=\"modal-body\"> <ng-template #defaultContent>{{_content}}</ng-template> <ng-template [ngTemplateOutlet]=\"_contentTpl||defaultContent\"></ng-template> <ng-template #modal_component></ng-template> </div> <div class=\"modal-footer\" *ngIf=\"!_footerHide\"> <ng-template #defalutFooter> <button *ngIf=\"!_isConfirm\" app-jdb-plg-button [jdbSize]=\"'default'\" [jdbType]=\"'white'\" (click)=\"clickCancel($event)\"><span>{{_cancelText||'\u53D6\u6D88'}}</span></button> <button *ngIf=\"!_isConfirm\" class=\"right-btn\" app-jdb-plg-button [jdbSize]=\"'default'\" [jdbType]=\"'primary'\" (click)=\"clickOk($event)\"><span>{{_okText||'\u786E\u8BA4'}}</span></button> <button *ngIf=\"_isConfirm\" class=\"right-btn\" app-jdb-plg-button [jdbSize]=\"'default'\" [jdbType]=\"'primary'\" (click)=\"clickOk($event)\" (click)=\"clickOk($event)\"><span>{{_RogerText}}</span></button> </ng-template> <ng-template [ngTemplateOutlet]=\"_footerTpl||defalutFooter\"></ng-template> </div> <div tabindex=\"0\" style=\"width:0px;height:0px;overflow:hidden;\">aaa</div> </div> </div> </div> </div>",
                        // styleUrls:  ['./jdb-plg-dialog.component.scss'],
                        animations: [
                            animations.trigger('optionsState', [
                                animations.state('showM', animations.style({
                                    transform: 'translate(-50%, -50%)',
                                    opacity: '1',
                                })),
                                animations.state('hideM', animations.style({
                                    transform: 'translate(-50%, -80%)',
                                    opacity: '0',
                                })),
                                animations.transition('showM <=> hideM', animations.animate('200ms ease-out'))
                            ])
                        ]
                    },] },
        ];
        /** @nocollapse */
        JdbPlgDialogComponent.ctorParameters = function () { return [
            { type: core.ComponentFactoryResolver, },
        ]; };
        JdbPlgDialogComponent.propDecorators = {
            "contentEl": [{ type: core.ViewChild, args: ['modal_content',] },],
            "bodyEl": [{ type: core.ViewChild, args: ['modal_component', { read: core.ViewContainerRef },] },],
            "MvisibileChange": [{ type: core.Output },],
            "MOnOk": [{ type: core.Output },],
            "MOnCancel": [{ type: core.Output },],
            "Mvisible": [{ type: core.Input },],
            "MfooterHiden": [{ type: core.Input },],
            "Mtitle": [{ type: core.Input },],
            "Mcontent": [{ type: core.Input },],
            "Mfooter": [{ type: core.Input },],
            "Mwidth": [{ type: core.Input },],
            "onEsc": [{ type: core.HostListener, args: ['keydown.esc', ['$event'],] },],
            "Mclass": [{ type: core.Input },],
            "MOkText": [{ type: core.Input },],
            "McancelText": [{ type: core.Input },],
            "MRogerText": [{ type: core.Input },],
        };
        return JdbPlgDialogComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    var OnlyNumberDirective = /** @class */ (function () {
        function OnlyNumberDirective(el) {
            this.el = el;
            this.regexStr = '^[0-9]*$';
        }
        /**
         * @param {?} event
         * @return {?}
         */
        OnlyNumberDirective.prototype.onKeyDown = /**
         * @param {?} event
         * @return {?}
         */
        function (event) {
            var /** @type {?} */ e = /** @type {?} */ (event);
            if (this.appOnlyNumber) {
                if ([46, 8, 9, 27, 13, 110, 190].indexOf(e.keyCode) !== -1 ||
                    // Allow: Ctrl+A
                    (e.keyCode === 65 && e.ctrlKey === true) ||
                    // Allow: Ctrl+C
                    (e.keyCode === 67 && e.ctrlKey === true) ||
                    // Allow: Ctrl+V
                    (e.keyCode === 86 && e.ctrlKey === true) ||
                    // Allow: Ctrl+X
                    (e.keyCode === 88 && e.ctrlKey === true) ||
                    // Allow: home, end, left, right
                    (e.keyCode >= 35 && e.keyCode <= 39)) {
                    // let it happen, don't do anything
                    return;
                }
                var /** @type {?} */ ch = String.fromCharCode(e.keyCode);
                var /** @type {?} */ regEx = new RegExp(this.regexStr);
                if (regEx.test(ch)) {
                    return;
                }
                else {
                    e.preventDefault();
                }
            }
        };
        /**
         * @param {?} event
         * @return {?}
         */
        OnlyNumberDirective.prototype.onKeyUp = /**
         * @param {?} event
         * @return {?}
         */
        function (event) {
            this.el.nativeElement.value = this.el.nativeElement.value.replace(/\D/g, '');
        };
        OnlyNumberDirective.decorators = [
            { type: core.Directive, args: [{
                        selector: '[appOnlyNumber]'
                    },] },
        ];
        /** @nocollapse */
        OnlyNumberDirective.ctorParameters = function () { return [
            { type: core.ElementRef, },
        ]; };
        OnlyNumberDirective.propDecorators = {
            "appOnlyNumber": [{ type: core.Input },],
            "onKeyDown": [{ type: core.HostListener, args: ['keydown', ['$event'],] },],
            "onKeyUp": [{ type: core.HostListener, args: ['keyup', ['$event'],] },],
        };
        return OnlyNumberDirective;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    var JdbPlgSelectComponent = /** @class */ (function () {
        function JdbPlgSelectComponent(renderer2, renderer) {
            this.renderer2 = renderer2;
            this.renderer = renderer;
            this._size = 'middle';
            this._optionText = 'text';
            this._optionValue = 'value';
            this.isShowClear = false;
            this._jdbClear = false;
            this._jdbDisabled = false;
            this._jdbMode = 'chooseOne';
            this._placeHolder = '请选择';
            this._chooseMoreArray = [];
            this._classMap = {};
            this.savaHeight = true;
            this.spaceFlex = true;
            this._showImgBox = false;
            this._jdbItemDisabled = 'disabled';
            this._jdbSureDisabled = 2;
            this._jdbNoDisabled = 1;
            // 自定义类名
            this.jdbClassName = '';
            this.show = false;
            this.ngModelValue = '';
            this.onChange = function () { return null; };
        }
        Object.defineProperty(JdbPlgSelectComponent.prototype, "jdbItemDisabled", {
            get: /**
             * @return {?}
             */
            function () {
                return this._jdbItemDisabled;
            },
            set: /**
             * @param {?} value
             * @return {?}
             */
            function (value) {
                this._jdbItemDisabled = value;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(JdbPlgSelectComponent.prototype, "jdbSureDisabled", {
            get: /**
             * @return {?}
             */
            function () {
                return this._jdbSureDisabled;
            },
            set: /**
             * @param {?} value
             * @return {?}
             */
            function (value) {
                this._jdbSureDisabled = value;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(JdbPlgSelectComponent.prototype, "jdbPlaceHolder", {
            get: /**
             * @return {?}
             */
            function () {
                return this._placeHolder;
            },
            set: /**
             * @param {?} value
             * @return {?}
             */
            function (value) {
                this._placeHolder = value;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(JdbPlgSelectComponent.prototype, "jdbClear", {
            get: /**
             * @return {?}
             */
            function () {
                return this._jdbClear;
            },
            set: /**
             * @param {?} value
             * @return {?}
             */
            function (value) {
                this._jdbClear = this.toBoolean(value);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(JdbPlgSelectComponent.prototype, "jdbSelectList", {
            get: /**
             * @return {?}
             */
            function () {
                return this._selectList;
            },
            set: /**
             * @param {?} value
             * @return {?}
             */
            function (value) {
                var _this = this;
                this._selectList = value;
                // 循环数组，判断是否需要展示带有图片下拉框
                if (this._selectList) {
                    this._selectList.forEach(function (element) {
                        if (element.imgUrl) {
                            _this._showImgBox = true;
                        }
                    });
                }
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(JdbPlgSelectComponent.prototype, "jdbSize", {
            get: /**
             * @return {?}
             */
            function () {
                return this._size;
            },
            set: /**
             * @param {?} value
             * @return {?}
             */
            function (value) {
                this._size = value;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(JdbPlgSelectComponent.prototype, "jdbWidth", {
            get: /**
             * @return {?}
             */
            function () {
                return this._width;
            },
            set: /**
             * @param {?} value
             * @return {?}
             */
            function (value) {
                this._width = value;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(JdbPlgSelectComponent.prototype, "jdbOptionText", {
            get: /**
             * @return {?}
             */
            function () {
                return this._optionText;
            },
            set: /**
             * @param {?} value
             * @return {?}
             */
            function (value) {
                this._optionText = value;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(JdbPlgSelectComponent.prototype, "jdbOptionValue", {
            get: /**
             * @return {?}
             */
            function () {
                return this._optionValue;
            },
            set: /**
             * @param {?} value
             * @return {?}
             */
            function (value) {
                this._optionValue = value;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(JdbPlgSelectComponent.prototype, "jdbDisabled", {
            get: /**
             * @return {?}
             */
            function () {
                return this._jdbDisabled;
            },
            set: /**
             * @param {?} value
             * @return {?}
             */
            function (value) {
                this._jdbDisabled = this.toBoolean(value);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(JdbPlgSelectComponent.prototype, "jdbMode", {
            get: /**
             * @return {?}
             */
            function () {
                return this._jdbMode;
            },
            set: /**
             * @param {?} value
             * @return {?}
             */
            function (value) {
                this._jdbMode = value;
            },
            enumerable: true,
            configurable: true
        });
        /**
         * @return {?}
         */
        JdbPlgSelectComponent.prototype.ngOnInit = /**
         * @return {?}
         */
        function () {
        };
        // tslint:disable-next-line:use-life-cycle-interface
        /**
         * @return {?}
         */
        JdbPlgSelectComponent.prototype.ngAfterViewInit = /**
         * @return {?}
         */
        function () {
            var _this = this;
            // 点击除下拉框以外位置，下拉框隐藏
            this.renderer2.listen('document', 'click', function () {
                _this.show = false;
                _this.renderer.setElementClass(_this.inputDom.nativeElement, 'jdb-plg-select-active', _this.show);
            });
            if (this._jdbClear && !this._jdbDisabled) {
                // 监听输入框元素，若有内容时则滑上显示x
                this.renderer2.listen(this.inputDom.nativeElement, 'mouseenter', function () {
                    // 若输入框不存在内容，则不做任何操作
                    if (_this._jdbMode === 'chooseOne' || _this._jdbMode === 'chooseNum') {
                        if (!_this.inputText || _this.show) {
                            return;
                        }
                    }
                    else if (_this._jdbMode === 'chooseMore') {
                        if (_this.inputText.length === 0 || _this.show) {
                            return;
                        }
                    }
                    _this.isShowClear = true;
                    _this.renderer.setElementClass(_this.inputDom.nativeElement, 'jdb-plg-select-active', _this.show);
                });
                this.renderer2.listen(this.inputDom.nativeElement, 'mouseleave', function () {
                    // 若输入框不存在内容，则不做任何操作
                    if (_this._jdbMode === 'chooseOne' || _this._jdbMode === 'chooseNum') {
                        if (!_this.inputText || _this.show) {
                            return;
                        }
                    }
                    else if (_this._jdbMode === 'chooseMore') {
                        if (_this.inputText.length === 0 || _this.show) {
                            return;
                        }
                    }
                    _this.isShowClear = false;
                    _this.renderer.setElementClass(_this.inputDom.nativeElement, 'jdb-plg-select-active', _this.show);
                });
            }
        };
        /**
         * @return {?}
         */
        JdbPlgSelectComponent.prototype.ngOnChanges = /**
         * @return {?}
         */
        function () {
            if (this._jdbMode === 'chooseOne') {
                this.inputText = '';
            }
            else if (this._jdbMode === 'chooseMore') {
                this.inputText = [];
            }
            else if (this._jdbMode === 'chooseNum') {
                this.inputText = 0;
            }
            this.setClassMap();
        };
        /**
         * @return {?}
         */
        JdbPlgSelectComponent.prototype.setClassMap = /**
         * @return {?}
         */
        function () {
            var _a, _b;
            if (this._jdbMode === 'chooseMore') {
                this._classMap = (_a = {},
                    _a["" + this._size] = true,
                    _a["jdb-plg-select-bottom-" + this._size] = this.inputText.length !== 0,
                    _a['jdb-plg-select-disabled'] = this._jdbDisabled,
                    _a[this.jdbClassName] = true,
                    _a);
            }
            else {
                this._classMap = (_b = {},
                    _b["" + this._size] = true,
                    _b['jdb-plg-select-disabled'] = this._jdbDisabled,
                    _b[this.jdbClassName] = true,
                    _b);
            }
        };
        // 点击x，清空内容
        /**
         * @param {?} e
         * @return {?}
         */
        JdbPlgSelectComponent.prototype.clearInputText = /**
         * @param {?} e
         * @return {?}
         */
        function (e) {
            e.stopPropagation();
            if (this._jdbMode === 'chooseOne') {
                this.inputText = '';
            }
            else if (this._jdbMode === 'chooseMore') {
                this.inputText = [];
                this._chooseMoreArray = [];
            }
            else if (this._jdbMode === 'chooseNum') {
                this.inputText = 0;
                this._chooseMoreArray = [];
            }
            this.isShowClear = !this.isShowClear;
            // 清空后输入需要重新告知父组件
            this.ngModelValue = '';
            this.onChange('');
            this.setClassMap();
        };
        // 点击输入框下拉菜单显隐
        /**
         * @param {?} e
         * @return {?}
         */
        JdbPlgSelectComponent.prototype.dialogShow = /**
         * @param {?} e
         * @return {?}
         */
        function (e) {
            e.stopPropagation();
            // 若外侧组件告知禁用，则点击没有任何效果
            if (this._jdbDisabled) {
                return;
            }
            this.isShowClear = false;
            this.show = !this.show;
            this.renderer.setElementClass(this.inputDom.nativeElement, 'jdb-plg-select-active', this.show);
            this.optionPosition(this.optionList.nativeElement.clientHeight);
        };
        // 浮层出现是在输入框上方还是下方
        /**
         * @param {?} listHeight
         * @return {?}
         */
        JdbPlgSelectComponent.prototype.optionPosition = /**
         * @param {?} listHeight
         * @return {?}
         */
        function (listHeight) {
            var /** @type {?} */ offetTop = this.getTop(this.inputDom.nativeElement); // 元素offetTop
            var /** @type {?} */ scrollTop = this.getScrollTop(this.inputDom.nativeElement.parentElement);
            var /** @type {?} */ clientHeight = document.documentElement.clientHeight || document.body.clientHeight; // 屏幕高度
            var /** @type {?} */ elemHeight = this.inputDom.nativeElement.clientHeight; // 元素高度
            var /** @type {?} */ paddingHeight;
            if (this.jdbSize === 'small') {
                paddingHeight = 2;
            }
            else if (this.jdbSize === 'large') {
                paddingHeight = 9;
            }
            else if (this.jdbSize === 'middle') {
                paddingHeight = 5;
            }
            var /** @type {?} */ flexHeight = clientHeight - offetTop - elemHeight - paddingHeight + scrollTop; // 剩余高度
            if (flexHeight < listHeight) {
                // 空间不足
                this.spaceFlex = false;
                this.renderer.setElementStyle(this.optionList.nativeElement, 'transform-origin', '100% 100%');
                if (listHeight < 188) {
                    this.renderer.setElementStyle(this.optionList.nativeElement, 'top', -listHeight - 5 + 'px');
                }
                else {
                    this.renderer.setElementStyle(this.optionList.nativeElement, 'top', -190 - paddingHeight + 'px');
                }
            }
            else {
                this.spaceFlex = true;
                this.renderer.setElementStyle(this.optionList.nativeElement, 'top', '');
                this.renderer.setElementStyle(this.optionList.nativeElement, 'transform-origin', '0% 0%');
            }
        };
        // ControlValueAccessor 自定义表单 与父组件的ngModel绑定起来
        /**
         * @param {?} value
         * @return {?}
         */
        JdbPlgSelectComponent.prototype.writeValue = /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this.ngModelValue = value;
            // 若有初始项，则需要处理一下
            // if (this._jdbMode === 'chooseOne') {
            //   this.forOneStart(value);
            // } else if (this._jdbMode === 'chooseMore') {
            //   this.forMoreStart(value);
            //   this.setClassMap();
            // } else if (this._jdbMode === 'chooseNum') {
            //   this.forNumStart(value);
            // }
            if (value === null || value === '' || value === undefined) {
                // 若传入值为null，则清空数据
                if (this._jdbMode === 'chooseMore') {
                    this.inputText = [];
                }
                else {
                    this.inputText = '';
                }
            }
            else {
                if (this._jdbMode === 'chooseOne') {
                    this.forOneStart(value);
                }
                else if (this._jdbMode === 'chooseMore') {
                    this.forMoreStart(value);
                    this.setClassMap();
                }
                else if (this._jdbMode === 'chooseNum') {
                    this.forNumStart(value);
                }
            }
        };
        /**
         * @param {?} fn
         * @return {?}
         */
        JdbPlgSelectComponent.prototype.registerOnChange = /**
         * @param {?} fn
         * @return {?}
         */
        function (fn) {
            this.onChange = fn;
        };
        /**
         * @param {?} fn
         * @return {?}
         */
        JdbPlgSelectComponent.prototype.registerOnTouched = /**
         * @param {?} fn
         * @return {?}
         */
        function (fn) {
        };
        /**
         * @param {?} isDisabled
         * @return {?}
         */
        JdbPlgSelectComponent.prototype.setDisabledState = /**
         * @param {?} isDisabled
         * @return {?}
         */
        function (isDisabled) {
        };
        // 单选，若有初始选项，则遍历数组
        /**
         * @param {?} value
         * @return {?}
         */
        JdbPlgSelectComponent.prototype.forOneStart = /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            var _this = this;
            this._selectList.forEach(function (elem) {
                if (elem[_this._optionValue] === value) {
                    _this.inputText = elem[_this._optionText];
                }
            });
        };
        // 多选，若有初始值则遍历数组
        /**
         * @param {?} value
         * @return {?}
         */
        JdbPlgSelectComponent.prototype.forMoreStart = /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            var _this = this;
            value = value.split(',');
            value.forEach(function (item) {
                _this._selectList.forEach(function (elem) {
                    if (elem[_this._optionValue] === item) {
                        // inputText为输入框中展示的内容
                        var /** @type {?} */ text = _this._optionText;
                        var /** @type {?} */ value_1 = _this._optionValue;
                        _this.inputText.push({
                            text: elem[_this._optionText],
                            value: elem[_this._optionValue]
                        });
                        // this._chooseMoreArray为传出去的数据
                        // this._chooseMoreArray为传出去的数据
                        _this._chooseMoreArray.push(elem[_this._optionValue]);
                        return;
                    }
                });
            });
        };
        // 选几项
        /**
         * @param {?} value
         * @return {?}
         */
        JdbPlgSelectComponent.prototype.forNumStart = /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            var _this = this;
            value = value.split(',');
            value.forEach(function (item) {
                _this._selectList.forEach(function (elem) {
                    if (elem[_this._optionValue] === item) {
                        _this.inputText++;
                        _this._chooseMoreArray.push(elem[_this._optionValue]);
                        return;
                    }
                });
            });
        };
        // 单选某一元素点击
        /**
         * @param {?} e
         * @param {?} item
         * @return {?}
         */
        JdbPlgSelectComponent.prototype.item = /**
         * @param {?} e
         * @param {?} item
         * @return {?}
         */
        function (e, item) {
            // 阻止事件冒泡
            e.stopPropagation();
            // 判断show是否为true
            if (!this.show) {
                return;
            }
            // 判断该项是否可点击
            if (item[this._jdbItemDisabled] === this._jdbSureDisabled) {
                return;
            }
            this.inputText = item[this._optionText];
            this.show = !this.show;
            this.renderer.setElementClass(this.inputDom.nativeElement, 'jdb-plg-select-active', this.show);
            this.ngModelValue = item[this._optionValue];
            this.onChange(item[this._optionValue]);
        };
        // 多选元素点击
        /**
         * @param {?} e
         * @param {?} item
         * @return {?}
         */
        JdbPlgSelectComponent.prototype.chooseMore = /**
         * @param {?} e
         * @param {?} item
         * @return {?}
         */
        function (e, item) {
            var _this = this;
            var /** @type {?} */ flag = false;
            // 阻止事件冒泡
            e.stopPropagation();
            // 判断show是否为true
            if (!this.show) {
                return;
            }
            // 判断该项是否可点击
            if (item[this._jdbItemDisabled] === this._jdbSureDisabled) {
                return;
            }
            // 判断是否存在
            this.inputText.forEach(function (element, index) {
                if (element[_this._optionValue] === item[_this._optionValue]) {
                    flag = true;
                    return;
                }
            });
            if (flag) {
                this.deleteMoreItem(e, item);
                return;
            }
            // inputText为输入框中展示的内容
            var /** @type {?} */ text = this._optionText;
            var /** @type {?} */ value = this._optionValue;
            this.inputText.push({
                text: item[this._optionText],
                value: item[this._optionValue]
            });
            // this._chooseMoreArray为传出去的数据
            this._chooseMoreArray.push(item[this._optionValue]);
            this.ngModelValue = this._chooseMoreArray.toString();
            this.onChange(this._chooseMoreArray);
            this.show = true;
            this.setClassMap();
        };
        // 选中多少项li点击
        /**
         * @param {?} e
         * @param {?} item
         * @return {?}
         */
        JdbPlgSelectComponent.prototype.numClick = /**
         * @param {?} e
         * @param {?} item
         * @return {?}
         */
        function (e, item) {
            var _this = this;
            var /** @type {?} */ flag = false;
            // 阻止事件冒泡
            e.stopPropagation();
            // 判断show是否为true
            if (!this.show) {
                return;
            }
            // 判断该项是否可点击
            if (item[this._jdbItemDisabled] === this._jdbSureDisabled) {
                return;
            }
            // 判断是否点击过
            this._chooseMoreArray.forEach(function (element, index) {
                if (element === item[_this._optionValue]) {
                    flag = true;
                    _this._chooseMoreArray.splice(index, 1);
                    return;
                }
            });
            if (flag) {
                this.inputText--;
                return;
            }
            this.inputText++;
            this.show = true;
            this._chooseMoreArray.push(item[this._optionValue]);
            this.ngModelValue = this._chooseMoreArray.toString();
            this.onChange(this._chooseMoreArray);
        };
        // 判断某一项是否存在于inputText中
        /**
         * @param {?} item
         * @return {?}
         */
        JdbPlgSelectComponent.prototype.moreIndex = /**
         * @param {?} item
         * @return {?}
         */
        function (item) {
            var _this = this;
            var /** @type {?} */ flag = false;
            this._chooseMoreArray.forEach(function (element, index) {
                if (element === item[_this._optionValue]) {
                    flag = true;
                    return;
                }
            });
            return flag;
        };
        // 删除某一项
        /**
         * @param {?} e
         * @param {?} item
         * @return {?}
         */
        JdbPlgSelectComponent.prototype.deleteMoreItem = /**
         * @param {?} e
         * @param {?} item
         * @return {?}
         */
        function (e, item) {
            var _this = this;
            e.stopPropagation();
            if (this._jdbDisabled) {
                return;
            }
            this.inputText.forEach(function (element, index) {
                if (element[_this._optionValue] === item[_this._optionValue]) {
                    _this.inputText.splice(index, 1);
                    return;
                }
            });
            this._chooseMoreArray.forEach(function (element, index) {
                if (element === item[_this._optionValue]) {
                    _this._chooseMoreArray.splice(index, 1);
                    return;
                }
            });
            this.ngModelValue = this._chooseMoreArray.toString();
            this.onChange(this._chooseMoreArray);
            this.setClassMap();
        };
        // 转换为boolean,即实现有这个字段就认为为true,没有即为false
        /**
         * @param {?} value
         * @return {?}
         */
        JdbPlgSelectComponent.prototype.toBoolean = /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            return value === '' || (value && value !== 'false');
        };
        // 计算某元素的offetTop
        /**
         * @param {?} e
         * @return {?}
         */
        JdbPlgSelectComponent.prototype.getTop = /**
         * @param {?} e
         * @return {?}
         */
        function (e) {
            var /** @type {?} */ offset = e.offsetTop;
            if (e.offsetParent != null) {
                //解析translateY
                if (e.style.transform) {
                    var /** @type {?} */ ret = this.parseTranslateY(e.style.transform);
                    offset += ret.isPercent ? e.clientHeight * ret.translateY / 100 : ret.translateY;
                }
                offset += this.getTop(e.offsetParent);
            }
            return offset;
        };
        // 计算某元素的scrollTop
        /**
         * @param {?} e
         * @return {?}
         */
        JdbPlgSelectComponent.prototype.getScrollTop = /**
         * @param {?} e
         * @return {?}
         */
        function (e) {
            var /** @type {?} */ offset = e.scrollTop;
            if (e.parentElement != null) {
                offset += this.getScrollTop(e.parentElement);
            }
            return offset;
        };
        //正则解析translateY
        /**
         * @param {?} val
         * @return {?}
         */
        JdbPlgSelectComponent.prototype.parseTranslateY = /**
         * @param {?} val
         * @return {?}
         */
        function (val) {
            var /** @type {?} */ reg = /\(([^()]+)\)/g;
            var /** @type {?} */ translate = reg.exec(val)[1];
            var /** @type {?} */ translatArr = translate.split(',');
            var /** @type {?} */ translateY;
            var /** @type {?} */ isPercent;
            //如果不包含translate
            if (val.indexOf('translate') === -1) {
                return {
                    isPercent: false,
                    translateY: 0
                };
            }
            //判断是translate还是translateY
            if (translatArr.length === 2) {
                translateY = translate.split(',')[1];
            }
            else if (translatArr.length === 1 && val.indexOf('translateY') !== -1) {
                translateY = translate;
            }
            //判断是百分比还是px
            if (translateY.indexOf('px') !== -1) {
                //截取px
                isPercent = false;
                translateY = Number(translateY.slice(0, -2));
            }
            else if (translateY.indexOf('%') !== -1) {
                isPercent = true;
                translateY = Number(translateY.slice(0, -1));
            }
            //返回百分比或普通number值
            return {
                isPercent: isPercent,
                translateY: translateY
            };
        };
        JdbPlgSelectComponent.decorators = [
            { type: core.Component, args: [{
                        selector: 'app-jdb-plg-select',
                        template: "<!-- \u5355\u9009 --> <div *ngIf=\"_jdbMode=='chooseOne'\" #inputDom class=\"jdb-plg-select-one\" (click)=\"dialogShow($event)\" [ngClass]=\"_classMap\" [ngStyle]=\"{'width':_width}\"> <!-- placeHolder --> <div class=\"jdb-plg-select-placeholder\" [hidden]=\"inputText!=''\">{{_placeHolder}}</div> <!-- \u5355\u9009 --> <!-- <span class=\"chooseOne\" [hidden]=\"inputText==''\">{{inputText}}</span> --> <input class=\"chooseOne chooseOneInput\" [hidden]=\"inputText==''\" type=\"text\" [(ngModel)]=\"inputText\" readonly> <ul #optionList [ngClass]=\"{ 'options-show':show, 'options-no-margin':!spaceFlex} \" class=\"options \"> <!-- \u5355\u9009 --> <li *ngFor=\"let option of _selectList \" (click)=\"item($event,option) \" [ngClass]=\"{active:ngModelValue===option[_optionValue],disabled:option[_jdbItemDisabled] === _jdbSureDisabled} \"> <img class=\"img-box\" *ngIf=\"_showImgBox&&option.imgUrl\" [src]=\"option.imgUrl\" alt=\"\"> <span class=\"img-box\" *ngIf=\"_showImgBox&&!option.imgUrl\"></span> <span class=\"text-box\">{{_optionText=='option'?option:option[_optionText]}}</span> </li> </ul> <!-- \u6E05\u7A7A\u56FE\u6807 --> <span class=\"close-icon icon-empty \" [hidden]=\"!isShowClear \" (click)=\"clearInputText($event) \"></span> <!-- \u5355\u9009\u65F6\u4E0B\u62C9\u56FE\u6807 --> <span class=\"select-icon icon-select-arrow \" [hidden]=\"isShowClear \"></span> </div> <!-- \u591A\u9009 --> <div *ngIf=\"_jdbMode=='chooseMore' \" #inputDom class=\"jdb-plg-select-more \" (click)=\"dialogShow($event) \" [ngClass]=\"_classMap \" [ngStyle]=\"{ 'width':_width} \"> <!-- placeHolder --> <div class=\"jdb-plg-select-placeholder \" [hidden]=\"inputText.length !=0 \">{{_placeHolder}}</div> <!-- \u591A\u9009item --> <ul class=\"chooseMore \"> <li *ngFor=\"let item of inputText \"> {{item.text}} <span class=\"item-delete icon-close \" (click)=\"deleteMoreItem($event,item) \"></span> </li> </ul> <ul #optionList [ngClass]=\"{ 'options-show':show, 'options-no-margin':!spaceFlex} \" class=\"options \"> <li class=\"choose-more \" *ngFor=\"let option of _selectList \" (click)=\"chooseMore($event,option) \" [ngClass]=\"{ 'active':moreIndex(option),disabled:option[_jdbItemDisabled] === _jdbSureDisabled} \"> <!-- {{_optionText=='option'?option:option[_optionText]}} --> <img class=\"img-box\" *ngIf=\"_showImgBox&&option.imgUrl\" [src]=\"option.imgUrl\" alt=\"\"> <span class=\"img-box\" *ngIf=\"_showImgBox&&!option.imgUrl\"></span> <span class=\"text-box\">{{_optionText=='option'?option:option[_optionText]}}</span> <span [hidden]=\"!moreIndex(option) \" class=\"choose-right icon-selected \"></span> </li> </ul> <!-- \u6E05\u7A7A\u56FE\u6807 --> <span class=\"close-icon icon-empty \" [hidden]=\"!isShowClear \" (click)=\"clearInputText($event) \"></span> </div> <!-- \u9009\u4E2D\u51E0\u9879 --> <div *ngIf=\"_jdbMode=='chooseNum' \" #inputDom class=\"jdb-plg-select-num \" (click)=\"dialogShow($event) \" [ngClass]=\"_classMap \" [ngStyle]=\"{ 'width':_width} \"> <!-- placeHolder --> <div class=\"jdb-plg-select-placeholder \" [hidden]=\"inputText!=0 \">{{_placeHolder}}</div> <span class=\"choose-tip \" [hidden]=\"inputText==0 \">\u5DF2\u9009\u4E2D{{inputText}}\u9879</span> <ul #optionList [ngClass]=\"{ 'options-show':show, 'options-no-margin':!spaceFlex} \" class=\"options \"> <li class=\"choose-more \" *ngFor=\"let option of _selectList \" (click)=\"numClick($event,option) \" [ngClass]=\"{ 'active':moreIndex(option),disabled:option[_jdbItemDisabled] === _jdbSureDisabled} \"> <!-- {{_optionText=='option'?option:option[_optionText]}} --> <img class=\"img-box\" *ngIf=\"_showImgBox&&option.imgUrl\" [src]=\"option.imgUrl\" alt=\"\"> <span class=\"img-box\" *ngIf=\"_showImgBox&&!option.imgUrl\"></span> <span class=\"text-box\">{{_optionText=='option'?option:option[_optionText]}}</span> <span [hidden]=\"!moreIndex(option) \" class=\"choose-right icon-selected \"></span> </li> </ul> <!-- \u6E05\u7A7A\u56FE\u6807 --> <span class=\"close-icon icon-empty \" [hidden]=\"!isShowClear \" (click)=\"clearInputText($event) \"></span> <span class=\"select-icon icon-select-arrow \" [hidden]=\"isShowClear \"></span> </div> <!-- \u906E\u7F69\u5C42 --> <div class=\"jdb-plg-select-master \" *ngIf=\"show \"></div>",
                        // styleUrls:  ['./jdb-plg-select.component.scss'],
                        providers: [
                            {
                                // 注册成为表单控件
                                provide: forms.NG_VALUE_ACCESSOR,
                                useExisting: core.forwardRef(function () { return JdbPlgSelectComponent; }),
                                multi: true
                            }
                        ]
                    },] },
        ];
        /** @nocollapse */
        JdbPlgSelectComponent.ctorParameters = function () { return [
            { type: core.Renderer2, },
            { type: core.Renderer, },
        ]; };
        JdbPlgSelectComponent.propDecorators = {
            "jdbClassName": [{ type: core.Input },],
            "jdbItemDisabled": [{ type: core.Input },],
            "jdbSureDisabled": [{ type: core.Input },],
            "jdbPlaceHolder": [{ type: core.Input },],
            "jdbClear": [{ type: core.Input },],
            "jdbSelectList": [{ type: core.Input },],
            "jdbSize": [{ type: core.Input },],
            "jdbWidth": [{ type: core.Input },],
            "jdbOptionText": [{ type: core.Input },],
            "jdbOptionValue": [{ type: core.Input },],
            "jdbDisabled": [{ type: core.Input },],
            "jdbMode": [{ type: core.Input },],
            "inputDom": [{ type: core.ViewChild, args: ['inputDom',] },],
            "optionList": [{ type: core.ViewChild, args: ['optionList',] },],
        };
        return JdbPlgSelectComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    var JdbPlgInputComponent = /** @class */ (function () {
        function JdbPlgInputComponent() {
            this._value = '';
            this._type = 'text';
            this._placeHolder = '';
            this._size = 'default';
            this._disabled = false;
            this._readonly = false;
            this._error = false;
            this._inputWrapClass = [];
            this._clear = false;
            this._autoPromptData = [];
            this._composing = false;
            this.width = '300px';
            // ngModel Access
            this.onChange = function () { return null; };
            this.jdbBlur = new core.EventEmitter();
            this.jdbFocus = new core.EventEmitter();
        }
        /**
         * @return {?}
         */
        JdbPlgInputComponent.prototype.ngOnInit = /**
         * @return {?}
         */
        function () {
            // this._inputWrapClass =[`input-text-wrap-${this._size}`];
            if (this._prefixContent) {
                this._inputWrapClass.push('prefix');
            }
        };
        /**
         * @param {?} e
         * @return {?}
         */
        JdbPlgInputComponent.prototype.compositionStart = /**
         * @param {?} e
         * @return {?}
         */
        function (e) {
            this._composing = true;
        };
        /**
         * @param {?} e
         * @return {?}
         */
        JdbPlgInputComponent.prototype.compositionEnd = /**
         * @param {?} e
         * @return {?}
         */
        function (e) {
            this._composing = false;
            this.onChange(this._value);
        };
        Object.defineProperty(JdbPlgInputComponent.prototype, "jdbType", {
            get: /**
             * @return {?}
             */
            function () {
                return this._type;
            },
            set: /**
             * @param {?} type
             * @return {?}
             */
            function (type) {
                this._type = type;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(JdbPlgInputComponent.prototype, "jdbPlaceHolder", {
            get: /**
             * @return {?}
             */
            function () {
                return this._placeHolder;
            },
            set: /**
             * @param {?} placeHolder
             * @return {?}
             */
            function (placeHolder) {
                this._placeHolder = placeHolder;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(JdbPlgInputComponent.prototype, "jdbSize", {
            get: /**
             * @return {?}
             */
            function () {
                return this._size;
            },
            set: /**
             * @param {?} size
             * @return {?}
             */
            function (size) {
                this._size = { large: 'lg', small: 'sm' }[size];
                this.setClassMap();
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(JdbPlgInputComponent.prototype, "jdbDisabled", {
            get: /**
             * @return {?}
             */
            function () {
                return this._disabled;
            },
            set: /**
             * @param {?} disabled
             * @return {?}
             */
            function (disabled) {
                this._disabled = this.toBoolean(disabled);
                this.setClassMap();
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(JdbPlgInputComponent.prototype, "jdbReadonly", {
            get: /**
             * @return {?}
             */
            function () {
                return this._readonly;
            },
            set: /**
             * @param {?} readonly
             * @return {?}
             */
            function (readonly) {
                this._readonly = this.toBoolean(readonly);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(JdbPlgInputComponent.prototype, "jdbValue", {
            get: /**
             * @return {?}
             */
            function () {
                if (this._value == '0') {
                    return '0';
                }
                return this._value || '';
            },
            set: /**
             * @param {?} value
             * @return {?}
             */
            function (value) {
                if ((this._value === value) || ((this._value == null) && (value == null))) {
                    return;
                }
                this._value = value;
                if (!this._composing) {
                    this.onChange(value);
                }
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(JdbPlgInputComponent.prototype, "jdbError", {
            get: /**
             * @return {?}
             */
            function () {
                return this._error;
            },
            set: /**
             * @param {?} value
             * @return {?}
             */
            function (value) {
                this._error = this.toBoolean(value);
                this.setClassMap();
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(JdbPlgInputComponent.prototype, "jdbClear", {
            get: /**
             * @return {?}
             */
            function () {
                return this._clear;
            },
            set: /**
             * @param {?} value
             * @return {?}
             */
            function (value) {
                this._clear = this.toBoolean(value);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(JdbPlgInputComponent.prototype, "jdbMaxLength", {
            get: /**
             * @return {?}
             */
            function () {
                return this._maxlength;
            },
            set: /**
             * @param {?} value
             * @return {?}
             */
            function (value) {
                this._maxlength = value;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(JdbPlgInputComponent.prototype, "jdbPromptData", {
            get: /**
             * @return {?}
             */
            function () {
                return this._autoPromptData;
            },
            set: /**
             * @param {?} value
             * @return {?}
             */
            function (value) {
                this._autoPromptData = value;
            },
            enumerable: true,
            configurable: true
        });
        /**
         * @param {?} value
         * @return {?}
         */
        JdbPlgInputComponent.prototype.writeValue = /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._value = value;
        };
        /**
         * @param {?} fn
         * @return {?}
         */
        JdbPlgInputComponent.prototype.registerOnChange = /**
         * @param {?} fn
         * @return {?}
         */
        function (fn) {
            this.onChange = fn;
        };
        /**
         * @param {?} fn
         * @return {?}
         */
        JdbPlgInputComponent.prototype.registerOnTouched = /**
         * @param {?} fn
         * @return {?}
         */
        function (fn) {
        };
        /**
         * @param {?} $event
         * @return {?}
         */
        JdbPlgInputComponent.prototype._emitBlur = /**
         * @param {?} $event
         * @return {?}
         */
        function ($event) {
            this.jdbBlur.emit($event);
        };
        /**
         * @param {?} $event
         * @return {?}
         */
        JdbPlgInputComponent.prototype._emitFocus = /**
         * @param {?} $event
         * @return {?}
         */
        function ($event) {
            this.jdbFocus.emit($event);
        };
        /**
         * @param {?} $event
         * @return {?}
         */
        JdbPlgInputComponent.prototype.textareaOnChange = /**
         * @param {?} $event
         * @return {?}
         */
        function ($event) {
        };
        /**
         * @return {?}
         */
        JdbPlgInputComponent.prototype.setClassMap = /**
         * @return {?}
         */
        function () {
            var _a;
            this._classMap = (_a = {},
                _a["input-" + this._type + "-" + this._size] = true,
                _a['input-disabled'] = this._disabled,
                _a['input-error'] = this._error,
                _a);
        };
        /**
         * @return {?}
         */
        JdbPlgInputComponent.prototype.clearTxt = /**
         * @return {?}
         */
        function () {
            this._value = '';
            this.onChange('');
        };
        /**
         * @param {?} value
         * @return {?}
         */
        JdbPlgInputComponent.prototype.toBoolean = /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            return value === '' || (value && value !== 'false');
        };
        JdbPlgInputComponent.decorators = [
            { type: core.Component, args: [{
                        selector: 'app-jdb-plg-input',
                        template: "<span class=\"input-group-addon\" *ngIf=\"_addOnContentBefore\"> <ng-template [ngTemplateOutlet]=\"_addOnContentBefore\"> </ng-template> </span> <ng-template [ngIf]=\"_type=='text'\"> <div class=\"input-text-wrap\" [ngClass]=\"_inputWrapClass\"> <span class=\"input-prefix\" *ngIf=\"_prefixContent\"> <ng-template [ngTemplateOutlet]=\"_prefixContent\"> </ng-template> </span> <input (blur)=\"_emitBlur($event)\" (focus)=\"_emitFocus($event)\" [disabled]=\"_disabled\" [readonly]=\"_readonly\" [attr.type]=\"_type\" class=\"input\" [ngClass]=\"_classMap\" [attr.placeholder]=\"_placeHolder\" [(ngModel)]=\"jdbValue\" [style.width]=\"width\" maxlength=\"{{jdbMaxLength}}\" /> <span class=\"input-clear\" *ngIf=\"_clear && _value && _type=='text'\" (click)=\"clearTxt()\"> <i class=\"close-icon icon-empty\"></i> </span> <span class=\"ant-input-suffix\" *ngIf=\"_suffixContent\"> <i class=\"iconfont icon-guanbi2fill\"></i> <ng-template [ngTemplateOutlet]=\"_suffixContent\"> </ng-template> </span> </div> <div class=\"input-error-tip\" *ngIf=\"jdbError && _errorContent\"> <i class=\"icon-message-error error-tip\"></i> <span> <ng-template [ngTemplateOutlet]=\"_errorContent\"> </ng-template> </span> </div> </ng-template> <span class=\"input-group-addon\" *ngIf=\"_addOnContentAfter\"> <ng-template [ngTemplateOutlet]=\"_addOnContentAfter\"> </ng-template> </span> <ng-template [ngIf]=\"_type=='textarea'\"> <div class=\"input-text-wrap\"> <textarea (blur)=\"_emitBlur($event)\" (focus)=\"_emitFocus($event)\" (input)=\"textareaOnChange($event)\" #inputTextarea [disabled]=\"_disabled\" [readonly]=\"_readonly\" type=\"textarea\" class=\"input input-textarea\" [ngClass]=\"_classMap\" [attr.placeholder]=\"jdbPlaceHolder\" [(ngModel)]=\"jdbValue\" maxlength=\"{{jdbMaxLength}}\" [style.width]=\"width\"></textarea> <span class=\"textarea-wc-tip\" [ngClass]=\"{'textarea-wc-tip-red': jdbValue&&jdbValue.length == jdbMaxLength}\" *ngIf=\"jdbMaxLength && !_disabled &&!_readonly\">{{(jdbValue&&jdbValue.length)||0}}/{{jdbMaxLength}}</span> </div> </ng-template>",
                        // styleUrls:  ['./jdb-plg-input.component.scss'],
                        encapsulation: core.ViewEncapsulation.None,
                        providers: [
                            {
                                provide: forms.NG_VALUE_ACCESSOR,
                                useExisting: core.forwardRef(function () { return JdbPlgInputComponent; }),
                                multi: true
                            }
                        ],
                    },] },
        ];
        /** @nocollapse */
        JdbPlgInputComponent.propDecorators = {
            "width": [{ type: core.Input },],
            "_errorContent": [{ type: core.ContentChild, args: ['jdbErrorContent',] },],
            "_addOnContentBefore": [{ type: core.ContentChild, args: ['addContentBefore',] },],
            "_addOnContentAfter": [{ type: core.ContentChild, args: ['addContentAfter',] },],
            "_prefixContent": [{ type: core.ContentChild, args: ['prefixContent',] },],
            "_suffixContent": [{ type: core.ContentChild, args: ['suffixContent',] },],
            "jdbBlur": [{ type: core.Output },],
            "jdbFocus": [{ type: core.Output },],
            "compositionStart": [{ type: core.HostListener, args: ['compositionstart', ['$event'],] },],
            "compositionEnd": [{ type: core.HostListener, args: ['compositionend', ['$event'],] },],
            "jdbType": [{ type: core.Input },],
            "jdbPlaceHolder": [{ type: core.Input },],
            "jdbSize": [{ type: core.Input },],
            "jdbDisabled": [{ type: core.Input },],
            "jdbReadonly": [{ type: core.Input },],
            "jdbValue": [{ type: core.Input },],
            "jdbError": [{ type: core.Input },],
            "jdbClear": [{ type: core.Input },],
            "jdbMaxLength": [{ type: core.Input },],
            "jdbPromptData": [{ type: core.Input },],
        };
        return JdbPlgInputComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    var FillTableService = /** @class */ (function () {
        function FillTableService() {
        }
        /*
            lines:number  表格展示的行数
            lists:Array<any>  异步获取的数据
            flag:boolean  是否在空白行栏展示操作按钮,默认取unShowOpt字段
        */
        /**
         * @param {?} lines
         * @param {?} lists
         * @param {?=} flag
         * @return {?}
         */
        FillTableService.prototype.fillTable = /**
         * @param {?} lines
         * @param {?} lists
         * @param {?=} flag
         * @return {?}
         */
        function (lines, lists, flag) {
            lines = lines || 10;
            lists = lists || [];
            flag = flag || true;
            var /** @type {?} */ aLength = lists.length;
            var /** @type {?} */ mLength = lines - aLength;
            var /** @type {?} */ fillObj = { unShowOpt: flag };
            var /** @type {?} */ keys;
            if (aLength !== 0) {
                lists.forEach(function (element) {
                    element.unShowOpt = !flag;
                });
                keys = Object.keys(lists[0]);
                if (keys.length !== 0) {
                    keys.forEach(function (element) {
                        if (element !== "unShowOpt") {
                            fillObj[element] = Object.prototype.toString.call(lists[0][element]) == "[object Array]" ? [] : '';
                        }
                    });
                }
            }
            if (aLength !== 0 && mLength > 0) {
                for (var /** @type {?} */ i = 0; i < mLength; i++) {
                    lists.push(fillObj);
                }
            }
            return lists;
        };
        FillTableService.decorators = [
            { type: core.Injectable },
        ];
        /** @nocollapse */
        FillTableService.ctorParameters = function () { return []; };
        return FillTableService;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    var CommonMethodService = /** @class */ (function () {
        function CommonMethodService(componentFactoryResolver) {
            this.componentFactoryResolver = componentFactoryResolver;
        }
        /*常用公共方法*/
        /*验证手机号是否合法
        * number 校验的手机号码*/
        /**
         * @param {?} number
         * @return {?}
         */
        CommonMethodService.prototype.testPhoneNumber = /**
         * @param {?} number
         * @return {?}
         */
        function (number) {
            var /** @type {?} */ phoneReg = /^[1][3,4,5,7,8][0-9]{9}$/;
            return phoneReg.test(number);
        };
        /**
         * @param {?} vRef
         * @return {?}
         */
        CommonMethodService.prototype.setRootViewContainerRef = /**
         * @param {?} vRef
         * @return {?}
         */
        function (vRef) {
            this.vRef = vRef;
        };
        /**
         * @param {?} msg
         * @param {?=} delayTime
         * @return {?}
         */
        CommonMethodService.prototype.toast = /**
         * @param {?} msg
         * @param {?=} delayTime
         * @return {?}
         */
        function (msg, delayTime) {
            if (delayTime === void 0) { delayTime = 3000; }
            //通过ComponentFactoryResolver 创建出动态组件的实例
            var /** @type {?} */ childComponent = this.componentFactoryResolver.resolveComponentFactory(JdbPlgToastComponent);
            var /** @type {?} */ comInstance = this.vRef.createComponent(childComponent);
            comInstance.instance.msg = msg;
            comInstance.changeDetectorRef.detectChanges();
            setTimeout(function () {
                comInstance.destroy();
            }, delayTime);
        };
        // 从数组删除指定元素
        /**
         * @param {?} list
         * @param {?=} node
         * @return {?}
         */
        CommonMethodService.prototype.removeNodeFromArray = /**
         * @param {?} list
         * @param {?=} node
         * @return {?}
         */
        function (list, node) {
            if (!node) {
                return list;
            }
            outFor: for (var /** @type {?} */ i = 0, /** @type {?} */ j = list.length; i < j; i++) {
                if (list[i] === node) {
                    list.splice(i, 1);
                    break outFor;
                }
            }
            return list;
        };
        CommonMethodService.decorators = [
            { type: core.Injectable },
        ];
        /** @nocollapse */
        CommonMethodService.ctorParameters = function () { return [
            { type: core.ComponentFactoryResolver, },
        ]; };
        return CommonMethodService;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    var JdbPlgTableErrorComponent = /** @class */ (function () {
        function JdbPlgTableErrorComponent() {
            /*
                功能：实现表格报错文案水平居中
              */
            this.tableErrorText = '暂无数据';
        }
        /**
         * @return {?}
         */
        JdbPlgTableErrorComponent.prototype.ngOnInit = /**
         * @return {?}
         */
        function () {
        };
        JdbPlgTableErrorComponent.decorators = [
            { type: core.Component, args: [{
                        selector: 'app-jdb-plg-table-error',
                        template: "<div class=\"jdb-plg-table-error\"> {{tableErrorText}} </div>",
                    },] },
        ];
        /** @nocollapse */
        JdbPlgTableErrorComponent.ctorParameters = function () { return []; };
        JdbPlgTableErrorComponent.propDecorators = {
            "tableErrorText": [{ type: core.Input },],
        };
        return JdbPlgTableErrorComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    var ProvinceReformPipe = /** @class */ (function () {
        function ProvinceReformPipe() {
        }
        /**
         * @param {?} val
         * @return {?}
         */
        ProvinceReformPipe.prototype.transform = /**
         * @param {?} val
         * @return {?}
         */
        function (val) {
            if (val.length === 0) {
                return '';
            }
            return val.join('、');
        };
        ProvinceReformPipe.decorators = [
            { type: core.Pipe, args: [{ name: 'provinceReformPipe' },] },
        ];
        return ProvinceReformPipe;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    var AmountReformPipe = /** @class */ (function () {
        function AmountReformPipe() {
        }
        /**
         * @param {?} val
         * @return {?}
         */
        AmountReformPipe.prototype.transform = /**
         * @param {?} val
         * @return {?}
         */
        function (val) {
            if (val === 0) {
                return '0.00';
            }
            if (!val) {
                return '';
            }
            return (val / 100).toFixed(2);
        };
        AmountReformPipe.decorators = [
            { type: core.Pipe, args: [{ name: 'amountReformPipe' },] },
        ];
        return AmountReformPipe;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    var /** @type {?} */ MDL_MODULES = [
        ShowPictureComponent,
        PictureViewerComponent,
        DragDirective,
        JdbPlgPaginationComponent,
        JdbPlgButtonComponent,
        JdbPlgDialogComponent,
        JdbPlgSelectComponent,
        JdbPlgInputComponent,
        JdbTabComponent,
        JdbPlgTableErrorComponent,
        ProvinceReformPipe,
        AmountReformPipe
    ];
    var JdbPlgUiModule = /** @class */ (function () {
        function JdbPlgUiModule() {
        }
        JdbPlgUiModule.decorators = [
            { type: core.NgModule, args: [{
                        imports: [
                            common.CommonModule,
                            forms.FormsModule,
                            forms.ReactiveFormsModule,
                            HttpModule,
                            http.HttpClientModule
                        ],
                        exports: MDL_MODULES,
                        declarations: [
                            JdbPlgToastComponent,
                            JdbTabComponent,
                            ShowPictureComponent,
                            PictureViewerComponent,
                            DragDirective,
                            JdbPlgPaginationComponent,
                            OnlyNumberDirective,
                            JdbPlgSelectComponent,
                            JdbPlgButtonComponent,
                            JdbPlgDialogComponent,
                            JdbPlgInputComponent,
                            JdbPlgTableErrorComponent,
                            ProvinceReformPipe,
                            AmountReformPipe
                        ],
                        providers: [JdbPlgBaseService, CommonMethodService, FillTableService],
                        entryComponents: [JdbPlgToastComponent]
                    },] },
        ];
        return JdbPlgUiModule;
    }());

    exports.JdbPlgUiModule = JdbPlgUiModule;
    exports.CommonMethodService = CommonMethodService;
    exports.FillTableService = FillTableService;
    exports.JdbPlgBaseService = JdbPlgBaseService;
    exports.JdbPlgButtonComponent = JdbPlgButtonComponent;
    exports.JdbPlgDialogComponent = JdbPlgDialogComponent;
    exports.JdbPlgInputComponent = JdbPlgInputComponent;
    exports.JdbPlgPaginationComponent = JdbPlgPaginationComponent;
    exports.JdbPlgSelectComponent = JdbPlgSelectComponent;
    exports.JdbTabComponent = JdbTabComponent;
    exports.JdbPlgTableErrorComponent = JdbPlgTableErrorComponent;
    exports.JdbPlgToastComponent = JdbPlgToastComponent;
    exports.PictureViewerComponent = PictureViewerComponent;
    exports.ShowPictureComponent = ShowPictureComponent;
    exports.ɵa = DragDirective;
    exports.ɵd = OnlyNumberDirective;
    exports.ɵc = AmountReformPipe;
    exports.ɵb = ProvinceReformPipe;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=jdb-plg-ui.umd.js.map
