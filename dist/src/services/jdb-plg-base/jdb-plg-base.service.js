/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { Cookie } from 'ng2-cookies/ng2-cookies';
import { Injectable, ComponentFactoryResolver } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import { JdbPlgToastComponent } from '../../components/jdb-plg-toast/jdb-plg-toast.component';
import { jQueryLikeParamSerializer } from './query-string';
import { objectAssign } from './object-assign';
import { Router } from '@angular/router';
var JdbPlgBaseService = /** @class */ (function () {
    function JdbPlgBaseService(http, componentFactoryResolver, route) {
        this.http = http;
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
        var /** @type {?} */ that = this;
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
            return Observable.throw(error || 'Server error');
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
        var /** @type {?} */ that = this;
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
            return Observable.throw(error || 'Server error');
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
        var /** @type {?} */ cookieStr = Cookie.get('loginInfo');
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
        { type: Injectable },
    ];
    /** @nocollapse */
    JdbPlgBaseService.ctorParameters = function () { return [
        { type: Http, },
        { type: ComponentFactoryResolver, },
        { type: Router, },
    ]; };
    return JdbPlgBaseService;
}());
export { JdbPlgBaseService };
function JdbPlgBaseService_tsickle_Closure_declarations() {
    /** @type {!Array<{type: !Function, args: (undefined|!Array<?>)}>} */
    JdbPlgBaseService.decorators;
    /**
     * @nocollapse
     * @type {function(): !Array<(null|{type: ?, decorators: (undefined|!Array<{type: !Function, args: (undefined|!Array<?>)}>)})>}
     */
    JdbPlgBaseService.ctorParameters;
    /** @type {?} */
    JdbPlgBaseService.prototype.vRef;
    /** @type {?} */
    JdbPlgBaseService.prototype.http;
    /** @type {?} */
    JdbPlgBaseService.prototype.componentFactoryResolver;
    /** @type {?} */
    JdbPlgBaseService.prototype.route;
}
//# sourceMappingURL=jdb-plg-base.service.js.map