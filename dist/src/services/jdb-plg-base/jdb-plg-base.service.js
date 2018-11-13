/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { CommonMethodService } from './common-method.service';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, catchError } from 'rxjs/operators';
import { jQueryLikeParamSerializer } from './query-string';
import { objectAssign } from './object-assign';
import { SendStatisticService } from './send-statistic.service';
var /** @type {?} */ statisticList = [];
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
        this.commonService.setRootViewContainerRef(this.vRef);
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
        // 系统来源
        var /** @type {?} */ from;
        // 获取接口的apiException
        this.newStatisticData.service.apiException = {
            requestTime: null,
            url: '',
            params: null,
            resCode: null,
            resMessage: '',
            errorMessage: ''
        };
        var /** @type {?} */ apiException = JSON.parse(JSON.stringify(this.newStatisticData.service.apiException));
        this.newStatisticData.service.apiException = apiException;
        if (options && options.tokenObj) {
            loginToken = localStorage.getItem(options.tokenObj.loginToken);
            loginWay = localStorage.getItem(options.tokenObj.loginWay);
            orgUid = localStorage.getItem(options.tokenObj.orgUid);
            from = localStorage.getItem(options.tokenObj.from);
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
        // 請求參數
        apiException.params = data;
        data = jQueryLikeParamSerializer(data);
        var /** @type {?} */ headers = new HttpHeaders({ 'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8' });
        var /** @type {?} */ requestoptions = {
            headers: headers
        };
        var /** @type {?} */ reqUrl = apiName;
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
            var /** @type {?} */ endTime = new Date().getTime();
            //统计接口请求时长
            apiException.requestTime = endTime - time;
            //校验接口返回的数据结构格式
            if (!(res.hasOwnProperty('data') && res.hasOwnProperty('error'))) {
                _this.commonService.toast('系统接口格式错误！');
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
    JdbPlgBaseService.prototype.download = /**
     * @param {?} apiName
     * @param {?} params
     * @return {?}
     */
    function (apiName, params) {
        // let cookieStr = Cookie.get('loginInfo');
        var /** @type {?} */ cookieObj = {};
        var /** @type {?} */ cookieData = {};
        // if (cookieStr) {
        //   try {
        //     cookieObj = JSON.parse(cookieStr);
        //     cookieData = {
        //       loginToken: cookieObj.loginToken,
        //       employeeId: cookieObj.empId
        //     };
        //   }
        //   catch (e) {
        //     console.log('parse cookie error...');
        //   }
        // }
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
        { type: HttpClient, },
        { type: CommonMethodService, },
        { type: SendStatisticService, },
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