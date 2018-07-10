"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var ng2_cookies_1 = require("ng2-cookies/ng2-cookies");
var core_1 = require("@angular/core");
var http_1 = require("@angular/http");
var Rx_1 = require("rxjs/Rx");
var jdb_plg_toast_component_1 = require("../../components/jdb-plg-toast/jdb-plg-toast.component");
var query_string_1 = require("./query-string");
var object_assign_1 = require("./object-assign");
var router_1 = require("@angular/router");
var JdbPlgBaseService = (function () {
    function JdbPlgBaseService(http, componentFactoryResolver, route) {
        this.http = http;
        this.componentFactoryResolver = componentFactoryResolver;
        this.route = route;
    }
    JdbPlgBaseService.prototype.setRootViewContainerRef = function (vRef) {
        this.vRef = vRef;
    };
    JdbPlgBaseService.prototype.toast = function (msg, delayTime) {
        if (delayTime === void 0) { delayTime = 3000; }
        var childComponent = this.componentFactoryResolver.resolveComponentFactory(jdb_plg_toast_component_1.JdbPlgToastComponent);
        var comInstance = this.vRef.createComponent(childComponent);
        comInstance.instance.msg = msg;
        comInstance.changeDetectorRef.detectChanges();
        setTimeout(function () {
            comInstance.destroy();
        }, delayTime);
    };
    JdbPlgBaseService.prototype.test = function () {
        alert('jdb services....');
    };
    JdbPlgBaseService.prototype.post = function (apiName, dataObj, options) {
        var _this = this;
        var time = new Date().getTime();
        var loginToken;
        var loginWay;
        var orgUid;
        if (options && options.tokenObj) {
            loginToken = localStorage.getItem(options.tokenObj.loginToken);
            loginWay = localStorage.getItem(options.tokenObj.loginWay);
            orgUid = localStorage.getItem(options.tokenObj.orgUid);
        }
        var loginObj = {};
        var data = {};
        var currentRoute = location.hash.split('/')[1];
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
            data = object_assign_1.objectAssign({}, loginObj, dataObj);
        }
        else {
            data = object_assign_1.objectAssign({}, dataObj);
        }
        data = query_string_1.jQueryLikeParamSerializer(data);
        var headers = new http_1.Headers();
        headers.append('Content-Type', 'application/x-www-form-urlencoded;charset=utf-8');
        var reqUrl = apiName;
        var that = this;
        var requestoptions = new http_1.RequestOptions({
            headers: headers,
            method: 'post',
            body: data || {}
        });
        console.log(this.http);
        return this.http.request(reqUrl, requestoptions)
            .map(function (res) { return res.json(); })
            .filter(function (res) {
            if (!(res.hasOwnProperty('data') && res.hasOwnProperty('error'))) {
                _this.toast('系统接口格式错误！');
                options && options.reset && options.reset();
                return false;
            }
            if (options.fns && options.fns.length != 0) {
                var len = options.fns.length;
                for (var i = 0; i < len; i++) {
                    var fn = options.fns[i];
                    if (res.error && res.error.returnCode * 1 === fn.returnCode && currentRoute != 'login') {
                        fn.callback();
                    }
                }
            }
            if (res.error && res.error.returnCode * 1 == 0) {
                return true;
            }
            if (typeof (options) === 'boolean') {
                if (options) {
                    _this.toast(res && res.error && res.error.returnUserMessage);
                    return false;
                }
                else {
                    return true;
                }
            }
            if (options.isIntercept) {
                _this.toast(res && res.error && res.error.returnUserMessage);
                return false;
            }
            else {
                return true;
            }
        })
            .catch(function (error) {
            return Rx_1.Observable.throw(error || 'Server error');
        });
    };
    JdbPlgBaseService.prototype.postJSON = function (apiName, dataObj) {
        var headers = new http_1.Headers();
        headers.append('Content-Type', 'application/json;charset=utf-8');
        var reqUrl = apiName;
        var that = this;
        var options = new http_1.RequestOptions({
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
            return Rx_1.Observable.throw(error || 'Server error');
        });
    };
    JdbPlgBaseService.prototype.stamp2string = function (stamp) {
        if (stamp) {
            var date = new Date(stamp).toJSON();
            return date.split('T')[0];
        }
        return null;
    };
    JdbPlgBaseService.prototype.export = function (apiName, params) {
        var cookieStr = ng2_cookies_1.Cookie.get('loginInfo');
        var cookieObj = {};
        var cookieData = {};
        if (cookieStr) {
            try {
                cookieObj = JSON.parse(cookieStr);
                cookieData = {
                    loginToken: cookieObj.loginToken,
                    employeeId: cookieObj.empId
                };
            }
            catch (e) {
                console.log('parse cookie error...');
            }
        }
        var paramsObj = object_assign_1.objectAssign({}, cookieData, params);
        var url = apiName + '?';
        for (var key in paramsObj) {
            if (paramsObj[key]) {
                url += key + '=' + encodeURIComponent(paramsObj[key]) + '&';
            }
        }
        window.location.href = url;
    };
    JdbPlgBaseService.prototype.getPicSize = function (file) {
        var arr = {};
        var reader = new FileReader();
        reader.onload = function (e) {
            var data = e.target.result;
            var image = new Image();
            image.onload = function () {
                var width = image.width;
                var height = image.height;
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
    JdbPlgBaseService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [http_1.Http, core_1.ComponentFactoryResolver, router_1.Router])
    ], JdbPlgBaseService);
    return JdbPlgBaseService;
}());
exports.JdbPlgBaseService = JdbPlgBaseService;
