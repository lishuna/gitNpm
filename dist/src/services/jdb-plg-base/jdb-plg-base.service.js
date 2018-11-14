/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { CommonMethodService } from './common-method.service';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, catchError } from 'rxjs/operators';
import { jQueryLikeParamSerializer } from './query-string';
import { objectAssign } from './object-assign';
import { SendStatisticService } from './send-statistic.service';
/** @type {?} */
var statisticList = [];
var JdbPlgBaseService = /** @class */ (function () {
    function JdbPlgBaseService(http, commonService, sendStatisticService) {
        var _this = this;
        this.http = http;
        this.commonService = commonService;
        this.sendStatisticService = sendStatisticService;
        this.timer = null;
        //收集的每一个接口的数据结构
        this.newStatisticData = {
            from: '',
            operator: '',
            memberId: '',
            service: {
                apiException: {
                    requestTime: null,
                    url: '',
                    params: null,
                    resCode: null,
                    resMessage: '',
                    errorMessage: ''
                }
            }
        };
        //收集的每一个接口的公共信息
        this.baseObj = {
            from: null,
            operator: null,
            memberId: null,
        };
        if (this.timer) {
            clearInterval(this.timer);
        }
        //轮询去发送数据，并清空队列
        this.timer = setInterval(function () {
            _this.sendStatisticService.emitStatisticData(statisticList);
            statisticList = [];
        }, 10000);
    }
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
        this.commonService.setRootViewContainerRef(vRef);
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
        /** @type {?} */
        var time = new Date().getTime();
        /** @type {?} */
        var loginToken;
        /** @type {?} */
        var loginWay;
        /** @type {?} */
        var orgUid;
        /** @type {?} */
        var from;
        // 获取接口的apiException
        this.newStatisticData.service.apiException = {
            requestTime: null,
            url: '',
            params: null,
            resCode: null,
            resMessage: '',
            errorMessage: ''
        };
        /** @type {?} */
        var apiException = JSON.parse(JSON.stringify(this.newStatisticData.service.apiException));
        this.newStatisticData.service.apiException = apiException;
        if (options && options.tokenObj) {
            loginToken = localStorage.getItem(options.tokenObj.loginToken);
            loginWay = localStorage.getItem(options.tokenObj.loginWay);
            orgUid = localStorage.getItem(options.tokenObj.orgUid);
            from = localStorage.getItem(options.tokenObj.from);
        }
        /** @type {?} */
        var loginObj = {};
        /** @type {?} */
        var data = {};
        /** @type {?} */
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
            data = objectAssign({}, loginObj, dataObj);
        }
        else {
            data = objectAssign({}, dataObj);
        }
        // 請求參數
        apiException.params = data;
        data = jQueryLikeParamSerializer(data);
        /** @type {?} */
        var headers = new HttpHeaders({ 'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8' });
        /** @type {?} */
        var requestoptions = {
            headers: headers
        };
        /** @type {?} */
        var reqUrl = apiName;
        //统计数据添加from和operator字段
        this.baseObj.from = from;
        this.baseObj.operator = localStorage.getItem('nickName');
        this.baseObj.memberId = localStorage.getItem('memberId');
        //统计数据添加请求url
        apiException.url = reqUrl;
        return this.http.post(reqUrl, data || {}, requestoptions)
            .pipe(filter(function (res) {
            // 根据joinTraceId是否为true 判断是否需要拼接日志号 （目前只有电催系统需要）
            if (currentRoute != 'login' && options && options.joinTraceId) {
                res.error.returnUserMessage = res.error.returnUserMessage + '<br/>(日志号:' + loginObj.jdbDhTraceId + ')';
            }
            /** @type {?} */
            var endTime = new Date().getTime();
            //统计接口请求时长
            apiException.requestTime = endTime - time;
            //校验接口返回的数据结构格式
            if (!(res.hasOwnProperty('data') && res.hasOwnProperty('error'))) {
                _this.commonService.toast('系统接口格式错误！');
                options && options.reset && options.reset();
                return false;
            }
            if (options.fns && options.fns.length != 0) {
                /** @type {?} */
                var len = options.fns.length;
                for (var i = 0; i < len; i++) {
                    /** @type {?} */
                    var fn = options.fns[i];
                    if (res.error && res.error.returnCode * 1 === fn.returnCode && currentRoute != 'login') {
                        fn.callback();
                    }
                }
            }
            if (res.error && res.error.returnCode * 1 == 0) {
                //统计数据添加returnCode，returnUserMessage信息
                apiException.resCode = res.error.returnCode;
                apiException.resMessage = res.error.returnUserMessage;
                //拷贝公共信息
                //拷贝公共信息
                _this.newStatisticData = Object.assign(_this.newStatisticData, _this.baseObj);
                //去除logDataApi、loginApi、qrcodeApi三个接口
                if (options && !options.noLog) {
                    statisticList.push(_this.newStatisticData);
                }
                return true;
            }
            // 统计数据添加returnCode，returnUserMessage信息
            apiException.resCode = res.error.returnCode;
            apiException.resMessage = res.error.returnUserMessage;
            _this.newStatisticData = Object.assign(_this.newStatisticData, _this.baseObj);
            if (options && !options.noLog) {
                statisticList.push(_this.newStatisticData);
            }
            //兼容登录组件中qrcodeApi和loginApi两个接口老的写法
            if (typeof (options) === 'boolean') {
                if (options) {
                    _this.commonService.toast(res && res.error && res.error.returnUserMessage);
                    return false;
                }
                else {
                    return true;
                }
            }
            //是否拦截处理
            if (options.isIntercept) {
                _this.commonService.toast(res && res.error && res.error.returnUserMessage);
                return false;
            }
            else {
                return true;
            }
        }))
            .pipe(catchError(function (error) {
            // 统计错误信息
            apiException.errorMessage = error;
            _this.newStatisticData = Object.assign(_this.newStatisticData, _this.baseObj);
            if (options && !options.noLog) {
                statisticList.push(_this.newStatisticData);
            }
            return Observable.throw(error || 'Server error');
        }));
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
            /** @type {?} */
            var date = new Date(stamp).toJSON();
            return date.split('T')[0];
        }
        return null;
    };
    /**
     * @param {?} apiName
     * @param {?} params
     * @return {?}
     */
    JdbPlgBaseService.prototype.download = /**
     * @param {?} apiName
     * @param {?} params
     * @return {?}
     */
    function (apiName, params) {
        /** @type {?} */
        var cookieObj = {};
        /** @type {?} */
        var cookieData = {};
        /** @type {?} */
        var paramsObj = objectAssign({}, cookieData, params);
        /** @type {?} */
        var url = apiName + '?';
        for (var key in paramsObj) {
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
        /** @type {?} */
        var arr = {};
        /** @type {?} */
        var reader = new FileReader();
        reader.onload = function (e) {
            /** @type {?} */
            var data = e.target.result;
            /** @type {?} */
            var image = new Image();
            image.onload = function () {
                /** @type {?} */
                var width = image.width;
                /** @type {?} */
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
    JdbPlgBaseService.decorators = [
        { type: Injectable },
    ];
    /** @nocollapse */
    JdbPlgBaseService.ctorParameters = function () { return [
        { type: HttpClient },
        { type: CommonMethodService },
        { type: SendStatisticService }
    ]; };
    return JdbPlgBaseService;
}());
export { JdbPlgBaseService };
if (false) {
    /** @type {?} */
    JdbPlgBaseService.prototype.vRef;
    /** @type {?} */
    JdbPlgBaseService.prototype.timer;
    /** @type {?} */
    JdbPlgBaseService.prototype.newStatisticData;
    /** @type {?} */
    JdbPlgBaseService.prototype.baseObj;
    /** @type {?} */
    JdbPlgBaseService.prototype.http;
    /** @type {?} */
    JdbPlgBaseService.prototype.commonService;
    /** @type {?} */
    JdbPlgBaseService.prototype.sendStatisticService;
}
//# sourceMappingURL=jdb-plg-base.service.js.map