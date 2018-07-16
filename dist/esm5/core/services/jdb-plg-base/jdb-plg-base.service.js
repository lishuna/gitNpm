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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiamRiLXBsZy1iYXNlLnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AdGVzdC11aS9jb3JlLyIsInNvdXJjZXMiOlsiY29yZS9zZXJ2aWNlcy9qZGItcGxnLWJhc2UvamRiLXBsZy1iYXNlLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBQyxNQUFNLEVBQUMsTUFBTSx5QkFBeUIsQ0FBQztBQUMvQyxPQUFPLEVBQUMsVUFBVSxFQUFFLHdCQUF3QixFQUFDLE1BQU0sZUFBZSxDQUFDO0FBQ25FLE9BQU8sRUFBQyxJQUFJLEVBQUUsT0FBTyxFQUFZLGNBQWMsRUFBaUMsTUFBTSxlQUFlLENBQUM7QUFDdEcsT0FBTyxFQUFDLFVBQVUsRUFBQyxNQUFNLFNBQVMsQ0FBQztBQUVuQyxPQUFPLEVBQUMsb0JBQW9CLEVBQUMsTUFBTSx3REFBd0QsQ0FBQztBQUM1RixPQUFPLEVBQUMseUJBQXlCLEVBQUMsTUFBTSxnQkFBZ0IsQ0FBQztBQUN6RCxPQUFPLEVBQUMsWUFBWSxFQUFDLE1BQU0saUJBQWlCLENBQUM7QUFDN0MsT0FBTyxFQUFDLE1BQU0sRUFBQyxNQUFNLGlCQUFpQixDQUFDOztJQVVyQywyQkFBb0IsSUFBVSxFQUFVLHdCQUFrRCxFQUFVLEtBQWE7UUFBN0YsU0FBSSxHQUFKLElBQUksQ0FBTTtRQUFVLDZCQUF3QixHQUF4Qix3QkFBd0IsQ0FBMEI7UUFBVSxVQUFLLEdBQUwsS0FBSyxDQUFRO0tBQ2hIO0lBRUQseUJBQXlCO0lBQ3pCLDRCQUE0QjtJQUM1Qiw2QkFBNkI7SUFDN0IsdUNBQXVDO0lBQ3ZDLHdCQUF3QjtJQUN4QixNQUFNO0lBQ04scUNBQXFDO0lBQ3JDLHVDQUF1QztJQUN2QyxNQUFNO0lBQ04sd0NBQXdDO0lBQ3hDLElBQUk7Ozs7O0lBRUosbURBQXVCOzs7O0lBQXZCLFVBQXdCLElBQUk7UUFDMUIsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUM7S0FFbEI7Ozs7OztJQUVELGlD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RUFBRSxDQUFDO1lBQ3hCLEtBQUssQ0FBQyxNQUFNLEdBQUc7Z0JBQ2IscUJBQUksS0FBSyxHQUFHLEtBQUssQ0FBQyxLQUFLLENBQUM7Z0JBQ3hCLHFCQUFJLE1BQU0sR0FBRyxLQUFLLENBQUMsTUFBTSxDQUFDO2dCQUMxQixHQUFHLEdBQUc7b0JBQ0osTUFBTSxFQUFFLE1BQU07b0JBQ2QsS0FBSyxFQUFFLEtBQUs7aUJBQ2IsQ0FBQztnQkFDRixPQUFPLEdBQUcsQ0FBQzthQUNaLENBQUM7WUFDRixLQUFLLENBQUMsR0FBRyxHQUFHLElBQUksQ0FBQztTQUNsQixDQUFDO1FBQ0YsTUFBTSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsQ0FBQztLQUM1Qjs7Z0JBOU9GLFVBQVU7Ozs7Z0JBWkgsSUFBSTtnQkFEUSx3QkFBd0I7Z0JBT3BDLE1BQU07OzRCQVJkOztTQWVhLGlCQUFpQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29va2llfSBmcm9tICduZzItY29va2llcy9uZzItY29va2llcyc7XG5pbXBvcnQge0luamVjdGFibGUsIENvbXBvbmVudEZhY3RvcnlSZXNvbHZlcn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge0h0dHAsIEhlYWRlcnMsIFJlc3BvbnNlLCBSZXF1ZXN0T3B0aW9ucywgUmVxdWVzdE1ldGhvZCwgVVJMU2VhcmNoUGFyYW1zfSBmcm9tICdAYW5ndWxhci9odHRwJztcbmltcG9ydCB7T2JzZXJ2YWJsZX0gZnJvbSAncnhqcy9SeCc7XG4vLyBpbXBvcnQge2Vudmlyb25tZW50fSBmcm9tICcuLi8uLi8uLi8uLi8uLi9lbnZpcm9ubWVudHMvZW52aXJvbm1lbnQnO1xuaW1wb3J0IHtKZGJQbGdUb2FzdENvbXBvbmVudH0gZnJvbSAnLi4vLi4vY29tcG9uZW50cy9qZGItcGxnLXRvYXN0L2pkYi1wbGctdG9hc3QuY29tcG9uZW50JztcbmltcG9ydCB7alF1ZXJ5TGlrZVBhcmFtU2VyaWFsaXplcn0gZnJvbSAnLi9xdWVyeS1zdHJpbmcnO1xuaW1wb3J0IHtvYmplY3RBc3NpZ259IGZyb20gJy4vb2JqZWN0LWFzc2lnbic7XG5pbXBvcnQge1JvdXRlcn0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcblxuLy8gY29uc3QgREVGQVVMVEhPU1QgPSBlbnZpcm9ubWVudC5hcGlDb25maWcuZGVmYXVsdEhvc3Q7XG4vLyBjb25zdCBBUElTID0gZW52aXJvbm1lbnQuYXBpQ29uZmlnLmFwaXM7XG4vLyBjb25zdCBFTlYgPSBlbnZpcm9ubWVudC5lbnY7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBKZGJQbGdCYXNlU2VydmljZSB7XG4gIHZSZWY7XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBodHRwOiBIdHRwLCBwcml2YXRlIGNvbXBvbmVudEZhY3RvcnlSZXNvbHZlcjogQ29tcG9uZW50RmFjdG9yeVJlc29sdmVyLCBwcml2YXRlIHJvdXRlOiBSb3V0ZXIpIHtcbiAgfVxuXG4gIC8vIOWkhOeQhuS4jeWQjOeOr+Wig+eahFVybO+8jOWcqOWOn+adpeeahOWfuuehgOS4iuWBmuS6huS8mOWMllxuICAvLyBnZXRVcmwoYXBpTmFtZTogc3RyaW5nKSB7XG4gIC8vICAgbGV0IGFwaSA9IEFQSVNbYXBpTmFtZV07XG4gIC8vICAgaWYgKEVOViA9PSAnc2VydmUnICYmIGFwaS5zZXJ2ZSkge1xuICAvLyAgICAgcmV0dXJuIGFwaS5zZXJ2ZTtcbiAgLy8gICB9XG4gIC8vICAgaWYgKGFwaS5ob3N0ICYmIGFwaS5ob3N0W0VOVl0pIHtcbiAgLy8gICAgIHJldHVybiBhcGkuaG9zdFtFTlZdICsgYXBpLnBhdGg7XG4gIC8vICAgfVxuICAvLyAgIHJldHVybiBERUZBVUxUSE9TVFtFTlZdICsgYXBpLnBhdGg7XG4gIC8vIH1cblxuICBzZXRSb290Vmlld0NvbnRhaW5lclJlZih2UmVmKSB7XG4gICAgdGhpcy52UmVmID0gdlJlZjtcblxuICB9XG5cbiAgdG9hc3QobXNnLCBkZWxheVRpbWUgPSAzMDAwKSB7XG4gICAgLy/pgJrov4dDb21wb25lbnRGYWN0b3J5UmVzb2x2ZXIg5Yib5bu65Ye65Yqo5oCB57uE5Lu255qE5a6e5L6LXG4gICAgY29uc3QgY2hpbGRDb21wb25lbnQgPSB0aGlzLmNvbXBvbmVudEZhY3RvcnlSZXNvbHZlci5yZXNvbHZlQ29tcG9uZW50RmFjdG9yeShKZGJQbGdUb2FzdENvbXBvbmVudCk7XG4gICAgbGV0IGNvbUluc3RhbmNlID0gdGhpcy52UmVmLmNyZWF0ZUNvbXBvbmVudChjaGlsZENvbXBvbmVudCk7XG4gICAgY29tSW5zdGFuY2UuaW5zdGFuY2UubXNnID0gbXNnO1xuICAgIGNvbUluc3RhbmNlLmNoYW5nZURldGVjdG9yUmVmLmRldGVjdENoYW5nZXMoKTtcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIGNvbUluc3RhbmNlLmRlc3Ryb3koKTtcbiAgICB9LCBkZWxheVRpbWUpO1xuICB9XG5cbiAgdGVzdCgpIHtcbiAgICBhbGVydCgnamRiIHNlcnZpY2VzLi4uLicpO1xuICB9XG5cbiAgLyoqXG4gICAqXG4gICAqIEBwYXJhbSBhcGlOYW1lXG4gICAqIEBwYXJhbSBkYXRhT2JqXG4gICAqIEBwYXJhbSBpc0ludGVyY2VwdCDmmK/lkKbmi6bmiKrlpITnkIZyZXR1cm5Db2RlICE9IDAg55qE5oOF5Ya1XG4gICAqL1xuICBwb3N0KGFwaU5hbWUsIGRhdGFPYmosIG9wdGlvbnMpIHtcbiAgICBsZXQgdGltZSA9IG5ldyBEYXRlKCkuZ2V0VGltZSgpO1xuICAgIGxldCBsb2dpblRva2VuO1xuICAgIGxldCBsb2dpbldheTtcbiAgICBsZXQgb3JnVWlkO1xuICAgIGlmIChvcHRpb25zICYmIG9wdGlvbnMudG9rZW5PYmopIHtcbiAgICAgIGxvZ2luVG9rZW4gPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShvcHRpb25zLnRva2VuT2JqLmxvZ2luVG9rZW4pO1xuICAgICAgbG9naW5XYXkgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShvcHRpb25zLnRva2VuT2JqLmxvZ2luV2F5KTtcbiAgICAgIG9yZ1VpZCA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKG9wdGlvbnMudG9rZW5PYmoub3JnVWlkKTtcbiAgICB9XG4gICAgbGV0IGxvZ2luT2JqOiBhbnkgPSB7fTtcbiAgICBsZXQgZGF0YTogYW55ID0ge307XG4gICAgbGV0IGN1cnJlbnRSb3V0ZSA9IGxvY2F0aW9uLmhhc2guc3BsaXQoJy8nKVsxXTtcbiAgICBpZiAobG9naW5Ub2tlbikge1xuICAgICAgaWYgKG9yZ1VpZCkge1xuICAgICAgICBsb2dpbk9iaiA9IHtcbiAgICAgICAgICAnbG9naW5Ub2tlbic6IGxvZ2luVG9rZW4sXG4gICAgICAgICAgJ2xvZ2luV2F5JzogbG9naW5XYXksXG4gICAgICAgICAgJ29yZ1VpZCc6IG9yZ1VpZCxcbiAgICAgICAgICAnamRiRGhUcmFjZUlkJzogdGltZSArICctJyArIHBhcnNlSW50KE1hdGgucmFuZG9tKCkgKiAoMTAwMDAwICsgMSkgKyAxICsgJycpXG4gICAgICAgIH07XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBsb2dpbk9iaiA9IHtcbiAgICAgICAgICAnbG9naW5Ub2tlbic6IGxvZ2luVG9rZW4sXG4gICAgICAgICAgJ2xvZ2luV2F5JzogbG9naW5XYXksXG4gICAgICAgICAgJ2pkYkRoVHJhY2VJZCc6IHRpbWUgKyAnLScgKyBwYXJzZUludChNYXRoLnJhbmRvbSgpICogKDEwMDAwMCArIDEpICsgMSArICcnKVxuICAgICAgICB9O1xuICAgICAgfVxuXG4gICAgICBkYXRhID0gb2JqZWN0QXNzaWduKHt9LCBsb2dpbk9iaiwgZGF0YU9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGRhdGEgPSBvYmplY3RBc3NpZ24oe30sIGRhdGFPYmopO1xuICAgIH1cbiAgICBkYXRhID0galF1ZXJ5TGlrZVBhcmFtU2VyaWFsaXplcihkYXRhKTtcbiAgICBsZXQgaGVhZGVycyA9IG5ldyBIZWFkZXJzKCk7XG4gICAgaGVhZGVycy5hcHBlbmQoJ0NvbnRlbnQtVHlwZScsICdhcHBsaWNhdGlvbi94LXd3dy1mb3JtLXVybGVuY29kZWQ7Y2hhcnNldD11dGYtOCcpO1xuICAgIGxldCByZXFVcmwgPSBhcGlOYW1lO1xuICAgIGxldCB0aGF0ID0gdGhpcztcbiAgICBsZXQgcmVxdWVzdG9wdGlvbnMgPSBuZXcgUmVxdWVzdE9wdGlvbnMoe1xuICAgICAgaGVhZGVyczogaGVhZGVycyxcbiAgICAgIG1ldGhvZDogJ3Bvc3QnLFxuICAgICAgYm9keTogZGF0YSB8fCB7fVxuICAgIH0pO1xuICAgIGNvbnNvbGUubG9nKHRoaXMuaHR0cCk7XG4gICAgcmV0dXJuIHRoaXMuaHR0cC5yZXF1ZXN0KHJlcVVybCwgcmVxdWVzdG9wdGlvbnMpXG4gICAgICAubWFwKChyZXM6IFJlc3BvbnNlKSA9PiByZXMuanNvbigpKVxuICAgICAgLmZpbHRlcigocmVzOiBhbnkpID0+IHtcblxuICAgICAgICAvL+agoemqjOaOpeWPo+i/lOWbnueahOaVsOaNrue7k+aehOagvOW8j1xuICAgICAgICBpZighKHJlcy5oYXNPd25Qcm9wZXJ0eSgnZGF0YScpICYmIHJlcy5oYXNPd25Qcm9wZXJ0eSgnZXJyb3InKSkpe1xuICAgICAgICAgICB0aGlzLnRvYXN0KCfns7vnu5/mjqXlj6PmoLzlvI/plJnor6/vvIEnKTtcbiAgICAgICAgICAgb3B0aW9ucyAmJiBvcHRpb25zLnJlc2V0ICYmIG9wdGlvbnMucmVzZXQoKTtcbiAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgICAgIGlmIChvcHRpb25zLmZucyAmJiBvcHRpb25zLmZucy5sZW5ndGggIT0gMCkge1xuICAgICAgICAgIGxldCBsZW4gPSBvcHRpb25zLmZucy5sZW5ndGg7XG4gICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBsZW47IGkrKykge1xuICAgICAgICAgICAgbGV0IGZuID0gb3B0aW9ucy5mbnNbaV07XG4gICAgICAgICAgICBpZiAocmVzLmVycm9yICYmIHJlcy5lcnJvci5yZXR1cm5Db2RlICogMSA9PT0gZm4ucmV0dXJuQ29kZSAmJiBjdXJyZW50Um91dGUgIT0gJ2xvZ2luJykge1xuICAgICAgICAgICAgICBmbi5jYWxsYmFjaygpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBpZiAocmVzLmVycm9yICYmIHJlcy5lcnJvci5yZXR1cm5Db2RlICogMSA9PSAwKSB7XG4gICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cbiAgICAgICAgLy/lhbzlrrnnmbvlvZXnu4Tku7bkuK1xcmNvZGVBcGnlkoxsb2dpbkFwaeS4pOS4quaOpeWPo+iAgeeahOWGmeazlVxuICAgICAgICBpZih0eXBlb2Yob3B0aW9ucykgPT09ICdib29sZWFuJyl7XG4gICAgICAgICAgaWYob3B0aW9ucyl7XG4gICAgICAgICAgICB0aGlzLnRvYXN0KHJlcyAmJiByZXMuZXJyb3IgJiYgcmVzLmVycm9yLnJldHVyblVzZXJNZXNzYWdlKTtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICB9ZWxzZXtcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICAvL+aYr+WQpuaLpuaIquWkhOeQhlxuICAgICAgICBpZihvcHRpb25zLmlzSW50ZXJjZXB0KXtcbiAgICAgICAgICB0aGlzLnRvYXN0KHJlcyAmJiByZXMuZXJyb3IgJiYgcmVzLmVycm9yLnJldHVyblVzZXJNZXNzYWdlKTtcbiAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1lbHNlIHtcbiAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuXG4gICAgICB9KVxuICAgICAgLmNhdGNoKChlcnJvcjogYW55KSA9PiB7XG4gICAgICAgIHJldHVybiBPYnNlcnZhYmxlLnRocm93KGVycm9yIHx8ICdTZXJ2ZXIgZXJyb3InKTtcbiAgICAgIH0pO1xuICB9XG5cbiAgcG9zdEpTT04oYXBpTmFtZSwgZGF0YU9iaikge1xuICAgIC8vIGxldCBoZWFkZXJzID0gbmV3IEhlYWRlcnMoe1xuICAgIC8vICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nLFxuICAgIC8vICAgICAnd2l0aENyZWRlbnRpYWxzJzogdHJ1ZVxuICAgIC8vIH0pO1xuXG4gICAgbGV0IGhlYWRlcnMgPSBuZXcgSGVhZGVycygpO1xuICAgIC8vIGhlYWRlcnMuYXBwZW5kKCdDb250ZW50LVR5cGUnLCAnYXBwbGljYXRpb24veC13d3ctZm9ybS11cmxlbmNvZGVkO2NoYXJzZXQ9dXRmLTgnKTtcbiAgICBoZWFkZXJzLmFwcGVuZCgnQ29udGVudC1UeXBlJywgJ2FwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtOCcpO1xuXG4gICAgLy8gaGVhZGVycy5hcHBlbmQoJ3dpdGhDcmVkZW50aWFscycsJ3RydWUnKTtcbiAgICAvLyBsZXQgdXJsRGF0YSA9IG5ldyBVUkxTZWFyY2hQYXJhbXMoKTtcbiAgICAvLyBpZiAoT2JqZWN0LmtleXMoZGF0YU9iaikubGVuZ3RoID4gMCkge1xuICAgIC8vICAgICBmb3IgKGxldCBrZXkgaW4gZGF0YU9iaikge1xuICAgIC8vICAgICAgICAgdXJsRGF0YS5hcHBlbmQoa2V5LCBkYXRhT2JqW2tleV0pO1xuICAgIC8vICAgICB9XG4gICAgLy8gfVxuICAgIC8vIGxldCBsb2FuTWFya2V0VG9rZW4gPSBDb29raWUuZ2V0KCdsb2FuTWFya2V0VG9rZW4nKTtcbiAgICAvLyB1cmxEYXRhLmFwcGVuZCgnbG9hbk1hcmtldFRva2VuJywgbG9hbk1hcmtldFRva2VuKTtcblxuICAgIGxldCByZXFVcmwgPSBhcGlOYW1lO1xuICAgIGxldCB0aGF0ID0gdGhpcztcbiAgICAvLyBsZXQgcmVxdWVzdG9wdGlvbnMgPSBuZXcgUmVxdWVzdE9wdGlvbnMoe1xuICAgIC8vICAgICBtZXRob2Q6IFJlcXVlc3RNZXRob2QuUG9zdCxcbiAgICAvLyAgICAgdXJsOiByZXFVcmwsXG4gICAgLy8gICAgIGhlYWRlcnM6IGhlYWRlcnMsXG4gICAgLy8gICAgIGJvZHk6IHRlc3REYXRhXG4gICAgLy8gfSlcbiAgICBsZXQgb3B0aW9ucyA9IG5ldyBSZXF1ZXN0T3B0aW9ucyh7XG4gICAgICBoZWFkZXJzOiBoZWFkZXJzLFxuICAgICAgbWV0aG9kOiAncG9zdCcsXG4gICAgICB1cmw6IHJlcVVybCxcbiAgICAgIGJvZHk6IGRhdGFPYmogfHwge31cbiAgICB9KTtcbiAgICByZXR1cm4gdGhpcy5odHRwLnJlcXVlc3QocmVxVXJsLCBvcHRpb25zKVxuICAgICAgLm1hcCgocmVzOiBSZXNwb25zZSkgPT4gcmVzLmpzb24oKSlcbiAgICAgIC5maWx0ZXIoKHJlczogYW55KSA9PiB7XG4gICAgICAgIGlmIChyZXMuZXJyb3IgJiYgcmVzLmVycm9yLnJldHVybkNvZGUgKiAxID09IDApIHtcbiAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cblxuICAgICAgfSlcbiAgICAgIC5jYXRjaCgoZXJyb3I6IGFueSkgPT4ge1xuICAgICAgICByZXR1cm4gT2JzZXJ2YWJsZS50aHJvdyhlcnJvciB8fCAnU2VydmVyIGVycm9yJyk7XG4gICAgICB9KTtcbiAgfVxuXG4gIHN0YW1wMnN0cmluZyhzdGFtcCkge1xuICAgIGlmIChzdGFtcCkge1xuICAgICAgbGV0IGRhdGUgPSBuZXcgRGF0ZShzdGFtcCkudG9KU09OKCk7XG4gICAgICByZXR1cm4gZGF0ZS5zcGxpdCgnVCcpWzBdO1xuICAgIH1cbiAgICByZXR1cm4gbnVsbDtcbiAgfVxuXG4gIGV4cG9ydChhcGlOYW1lLCBwYXJhbXMpIHtcbiAgICBsZXQgY29va2llU3RyID0gQ29va2llLmdldCgnbG9naW5JbmZvJyk7XG4gICAgbGV0IGNvb2tpZU9iajogYW55ID0ge307XG4gICAgbGV0IGNvb2tpZURhdGE6IGFueSA9IHt9O1xuICAgIGlmIChjb29raWVTdHIpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIGNvb2tpZU9iaiA9IEpTT04ucGFyc2UoY29va2llU3RyKTtcbiAgICAgICAgY29va2llRGF0YSA9IHtcbiAgICAgICAgICBsb2dpblRva2VuOiBjb29raWVPYmoubG9naW5Ub2tlbixcbiAgICAgICAgICBlbXBsb3llZUlkOiBjb29raWVPYmouZW1wSWRcbiAgICAgICAgfTtcbiAgICAgIH1cbiAgICAgIGNhdGNoIChlKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKCdwYXJzZSBjb29raWUgZXJyb3IuLi4nKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBsZXQgcGFyYW1zT2JqID0gb2JqZWN0QXNzaWduKHt9LCBjb29raWVEYXRhLCBwYXJhbXMpO1xuICAgIGxldCB1cmwgPSBhcGlOYW1lICsgJz8nO1xuICAgIGZvciAobGV0IGtleSBpbiBwYXJhbXNPYmopIHtcbiAgICAgIGlmIChwYXJhbXNPYmpba2V5XSkge1xuICAgICAgICB1cmwgKz0ga2V5ICsgJz0nICsgZW5jb2RlVVJJQ29tcG9uZW50KHBhcmFtc09ialtrZXldKSArICcmJztcbiAgICAgIH1cbiAgICB9XG4gICAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSB1cmw7XG4gIH1cblxuICBnZXRQaWNTaXplKGZpbGUpIHtcbiAgICBsZXQgYXJyID0ge307XG4gICAgbGV0IHJlYWRlciA9IG5ldyBGaWxlUmVhZGVyKCk7XG4gICAgcmVhZGVyLm9ubG9hZCA9IGZ1bmN0aW9uIChlOiBhbnkpIHtcbiAgICAgIGxldCBkYXRhID0gZS50YXJnZXQucmVzdWx0O1xuICAgICAgLy/liqDovb3lm77niYfojrflj5blm77niYfnnJ/lrp7lrr3luqblkozpq5jluqZcbiAgICAgIGxldCBpbWFnZSA9IG5ldyBJbWFnZSgpO1xuICAgICAgaW1hZ2Uub25sb2FkID0gZnVuY3Rpb24gKCkge1xuICAgICAgICBsZXQgd2lkdGggPSBpbWFnZS53aWR0aDtcbiAgICAgICAgbGV0IGhlaWdodCA9IGltYWdlLmhlaWdodDtcbiAgICAgICAgYXJyID0ge1xuICAgICAgICAgIGhlaWdodDogaGVpZ2h0LFxuICAgICAgICAgIHdpZHRoOiB3aWR0aFxuICAgICAgICB9O1xuICAgICAgICByZXR1cm4gYXJyO1xuICAgICAgfTtcbiAgICAgIGltYWdlLnNyYyA9IGRhdGE7XG4gICAgfTtcbiAgICByZWFkZXIucmVhZEFzRGF0YVVSTChmaWxlKTtcbiAgfVxufVxuIl19