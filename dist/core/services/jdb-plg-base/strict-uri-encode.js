"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function strictUriEncode(str) {
    return encodeURIComponent(str).replace(/[!'()*]/g, function (c) {
        return '%' + c.charCodeAt(0).toString(16).toUpperCase();
    });
}
exports.strictUriEncode = strictUriEncode;
