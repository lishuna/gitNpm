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
export class JdbPlgBaseService {
    /**
     * @param {?} http
     * @param {?} componentFactoryResolver
     * @param {?} route
     */
    constructor(http, componentFactoryResolver, route) {
        this.http = http;
        this.componentFactoryResolver = componentFactoryResolver;
        this.route = route;
    }
    /**
     * @param {?} vRef
     * @return {?}
     */
    setRootViewContainerRef(vRef) {
        this.vRef = vRef;
    }
    /**
     * @param {?} msg
     * @param {?=} delayTime
     * @return {?}
     */
    toast(msg, delayTime = 3000) {
        //通过ComponentFactoryResolver 创建出动态组件的实例
        const /** @type {?} */ childComponent = this.componentFactoryResolver.resolveComponentFactory(JdbPlgToastComponent);
        let /** @type {?} */ comInstance = this.vRef.createComponent(childComponent);
        comInstance.instance.msg = msg;
        comInstance.changeDetectorRef.detectChanges();
        setTimeout(() => {
            comInstance.destroy();
        }, delayTime);
    }
    /**
     * @return {?}
     */
    test() {
        alert('jdb services....');
    }
    /**
     *
     * @param {?} apiName
     * @param {?} dataObj
     * @param {?} options
     * @return {?}
     */
    post(apiName, dataObj, options) {
        let /** @type {?} */ time = new Date().getTime();
        let /** @type {?} */ loginToken;
        let /** @type {?} */ loginWay;
        let /** @type {?} */ orgUid;
        if (options && options.tokenObj) {
            loginToken = localStorage.getItem(options.tokenObj.loginToken);
            loginWay = localStorage.getItem(options.tokenObj.loginWay);
            orgUid = localStorage.getItem(options.tokenObj.orgUid);
        }
        let /** @type {?} */ loginObj = {};
        let /** @type {?} */ data = {};
        let /** @type {?} */ currentRoute = location.hash.split('/')[1];
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
        let /** @type {?} */ headers = new Headers();
        headers.append('Content-Type', 'application/x-www-form-urlencoded;charset=utf-8');
        let /** @type {?} */ reqUrl = apiName;
        let /** @type {?} */ that = this;
        let /** @type {?} */ requestoptions = new RequestOptions({
            headers: headers,
            method: 'post',
            body: data || {}
        });
        console.log(this.http);
        return this.http.request(reqUrl, requestoptions)
            .map((res) => res.json())
            .filter((res) => {
            //校验接口返回的数据结构格式
            if (!(res.hasOwnProperty('data') && res.hasOwnProperty('error'))) {
                this.toast('系统接口格式错误！');
                options && options.reset && options.reset();
                return false;
            }
            if (options.fns && options.fns.length != 0) {
                let /** @type {?} */ len = options.fns.length;
                for (let /** @type {?} */ i = 0; i < len; i++) {
                    let /** @type {?} */ fn = options.fns[i];
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
                    this.toast(res && res.error && res.error.returnUserMessage);
                    return false;
                }
                else {
                    return true;
                }
            }
            //是否拦截处理
            if (options.isIntercept) {
                this.toast(res && res.error && res.error.returnUserMessage);
                return false;
            }
            else {
                return true;
            }
        })
            .catch((error) => {
            return Observable.throw(error || 'Server error');
        });
    }
    /**
     * @param {?} apiName
     * @param {?} dataObj
     * @return {?}
     */
    postJSON(apiName, dataObj) {
        // let headers = new Headers({
        //     'Content-Type': 'application/json',
        //     'withCredentials': true
        // });
        let /** @type {?} */ headers = new Headers();
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
        let /** @type {?} */ reqUrl = apiName;
        let /** @type {?} */ that = this;
        // let requestoptions = new RequestOptions({
        //     method: RequestMethod.Post,
        //     url: reqUrl,
        //     headers: headers,
        //     body: testData
        // })
        let /** @type {?} */ options = new RequestOptions({
            headers: headers,
            method: 'post',
            url: reqUrl,
            body: dataObj || {}
        });
        return this.http.request(reqUrl, options)
            .map((res) => res.json())
            .filter((res) => {
            if (res.error && res.error.returnCode * 1 == 0) {
                return true;
            }
            else {
                return false;
            }
        })
            .catch((error) => {
            return Observable.throw(error || 'Server error');
        });
    }
    /**
     * @param {?} stamp
     * @return {?}
     */
    stamp2string(stamp) {
        if (stamp) {
            let /** @type {?} */ date = new Date(stamp).toJSON();
            return date.split('T')[0];
        }
        return null;
    }
    /**
     * @param {?} apiName
     * @param {?} params
     * @return {?}
     */
    export(apiName, params) {
        let /** @type {?} */ cookieStr = Cookie.get('loginInfo');
        let /** @type {?} */ cookieObj = {};
        let /** @type {?} */ cookieData = {};
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
        let /** @type {?} */ paramsObj = objectAssign({}, cookieData, params);
        let /** @type {?} */ url = apiName + '?';
        for (let /** @type {?} */ key in paramsObj) {
            if (paramsObj[key]) {
                url += key + '=' + encodeURIComponent(paramsObj[key]) + '&';
            }
        }
        window.location.href = url;
    }
    /**
     * @param {?} file
     * @return {?}
     */
    getPicSize(file) {
        let /** @type {?} */ arr = {};
        let /** @type {?} */ reader = new FileReader();
        reader.onload = function (e) {
            let /** @type {?} */ data = e.target.result;
            //加载图片获取图片真实宽度和高度
            let /** @type {?} */ image = new Image();
            image.onload = function () {
                let /** @type {?} */ width = image.width;
                let /** @type {?} */ height = image.height;
                arr = {
                    height: height,
                    width: width
                };
                return arr;
            };
            image.src = data;
        };
        reader.readAsDataURL(file);
    }
}
JdbPlgBaseService.decorators = [
    { type: Injectable },
];
/** @nocollapse */
JdbPlgBaseService.ctorParameters = () => [
    { type: Http, },
    { type: ComponentFactoryResolver, },
    { type: Router, },
];
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiamRiLXBsZy1iYXNlLnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AdGVzdC11aS9jb3JlLyIsInNvdXJjZXMiOlsiY29yZS9zZXJ2aWNlcy9qZGItcGxnLWJhc2UvamRiLXBsZy1iYXNlLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBQyxNQUFNLEVBQUMsTUFBTSx5QkFBeUIsQ0FBQztBQUMvQyxPQUFPLEVBQUMsVUFBVSxFQUFFLHdCQUF3QixFQUFDLE1BQU0sZUFBZSxDQUFDO0FBQ25FLE9BQU8sRUFBQyxJQUFJLEVBQUUsT0FBTyxFQUFZLGNBQWMsRUFBaUMsTUFBTSxlQUFlLENBQUM7QUFDdEcsT0FBTyxFQUFDLFVBQVUsRUFBQyxNQUFNLFNBQVMsQ0FBQztBQUVuQyxPQUFPLEVBQUMsb0JBQW9CLEVBQUMsTUFBTSx3REFBd0QsQ0FBQztBQUM1RixPQUFPLEVBQUMseUJBQXlCLEVBQUMsTUFBTSxnQkFBZ0IsQ0FBQztBQUN6RCxPQUFPLEVBQUMsWUFBWSxFQUFDLE1BQU0saUJBQWlCLENBQUM7QUFDN0MsT0FBTyxFQUFDLE1BQU0sRUFBQyxNQUFNLGlCQUFpQixDQUFDO0FBT3ZDLE1BQU07Ozs7OztJQUdKLFlBQW9CLElBQVUsRUFBVSx3QkFBa0QsRUFBVSxLQUFhO1FBQTdGLFNBQUksR0FBSixJQUFJLENBQU07UUFBVSw2QkFBd0IsR0FBeEIsd0JBQXdCLENBQTBCO1FBQVUsVUFBSyxHQUFMLEtBQUssQ0FBUTtLQUNoSDs7Ozs7SUFjRCx1QkFBdUIsQ0FBQyxJQUFJO1FBQzFCLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDO0tBRWxCOzs7Ozs7SUFFRCxLQUFLLENBQUMsR0FBRyxFQUFFLFNBQVMsR0FBRyxJQUFJOztRQUV6Qix1QkFBTSxjQUFjLEdBQUcsSUFBSSxDQUFDLHdCQUF3QixDQUFDLHVCQUF1QixDQUFDLG9CQUFvQixDQUFDLENBQUM7UUFDbkcscUJBQUksV0FBVyxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsZUFBZSxDQUFDLGNBQWMsQ0FBQyxDQUFDO1FBQzVELFdBQVcsQ0FBQyxRQUFRLENBQUMsR0FBRyxHQUFHLEdBQUcsQ0FBQztRQUMvQixXQUFXLENBQUMsaUJBQWlCLENBQUMsYUFBYSxFQUFFLENBQUM7UUFDOUMsVUFBVSxDQUFDLEdBQUcsRUFBRTtZQUNkLFdBQVcsQ0FBQyxPQUFPLEVBQUUsQ0FBQztTQUN2QixFQUFFLFNBQVMsQ0FBQyxDQUFDO0tBQ2Y7Ozs7SUFFRCxJQUFJO1FBQ0YsS0FBSyxDQUFDLGtCQUFrQixDQUFDLENBQUM7S0FDM0I7Ozs7Ozs7O0lBUUQsSUFBSSxDQUFDLE9BQU8sRUFBRSxPQUFPLEVBQUUsT0FBTztRQUM1QixxQkFBSSxJQUFJLEdBQUcsSUFBSSxJQUFJLEVBQUUsQ0FBQyxPQUFPLEVBQUUsQ0FBQztRQUNoQyxxQkFBSSxVQUFVLENBQUM7UUFDZixxQkFBSSxRQUFRLENBQUM7UUFDYixxQkFBSSxNQUFNLENBQUM7UUFDWCxJQUFJLE9BQU8sSUFBSSxPQUFPLENBQUMsUUFBUSxFQUFFO1lBQy9CLFVBQVUsR0FBRyxZQUFZLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxRQUFRLENBQUMsVUFBVSxDQUFDLENBQUM7WUFDL0QsUUFBUSxHQUFHLFlBQVksQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUMsQ0FBQztZQUMzRCxNQUFNLEdBQUcsWUFBWSxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1NBQ3hEO1FBQ0QscUJBQUksUUFBUSxHQUFRLEVBQUUsQ0FBQztRQUN2QixxQkFBSSxJQUFJLEdBQVEsRUFBRSxDQUFDO1FBQ25CLHFCQUFJLFlBQVksR0FBRyxRQUFRLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUMvQyxJQUFJLFVBQVUsRUFBRTtZQUNkLElBQUksTUFBTSxFQUFFO2dCQUNWLFFBQVEsR0FBRztvQkFDVCxZQUFZLEVBQUUsVUFBVTtvQkFDeEIsVUFBVSxFQUFFLFFBQVE7b0JBQ3BCLFFBQVEsRUFBRSxNQUFNO29CQUNoQixjQUFjLEVBQUUsSUFBSSxHQUFHLEdBQUcsR0FBRyxRQUFRLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRSxHQUFHLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQyxHQUFHLENBQUMsR0FBRyxFQUFFLENBQUM7aUJBQzdFLENBQUM7YUFDSDtpQkFBTTtnQkFDTCxRQUFRLEdBQUc7b0JBQ1QsWUFBWSxFQUFFLFVBQVU7b0JBQ3hCLFVBQVUsRUFBRSxRQUFRO29CQUNwQixjQUFjLEVBQUUsSUFBSSxHQUFHLEdBQUcsR0FBRyxRQUFRLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRSxHQUFHLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQyxHQUFHLENBQUMsR0FBRyxFQUFFLENBQUM7aUJBQzdFLENBQUM7YUFDSDtZQUVELElBQUksR0FBRyxZQUFZLENBQUMsRUFBRSxFQUFFLFFBQVEsRUFBRSxPQUFPLENBQUMsQ0FBQztTQUM1QzthQUFNO1lBQ0wsSUFBSSxHQUFHLFlBQVksQ0FBQyxFQUFFLEVBQUUsT0FBTyxDQUFDLENBQUM7U0FDbEM7UUFDRCxJQUFJLEdBQUcseUJBQXlCLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDdkMscUJBQUksT0FBTyxHQUFHLElBQUksT0FBTyxFQUFFLENBQUM7UUFDNUIsT0FBTyxDQUFDLE1BQU0sQ0FBQyxjQUFjLEVBQUUsaURBQWlELENBQUMsQ0FBQztRQUNsRixxQkFBSSxNQUFNLEdBQUcsT0FBTyxDQUFDO1FBQ3JCLHFCQUFJLElBQUksR0FBRyxJQUFJLENBQUM7UUFDaEIscUJBQUksY0FBYyxHQUFHLElBQUksY0FBYyxDQUFDO1lBQ3RDLE9BQU8sRUFBRSxPQUFPO1lBQ2hCLE1BQU0sRUFBRSxNQUFNO1lBQ2QsSUFBSSxFQUFFLElBQUksSUFBSSxFQUFFO1NBQ2pCLENBQUMsQ0FBQztRQUNILE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ3ZCLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsTUFBTSxFQUFFLGNBQWMsQ0FBQzthQUM3QyxHQUFHLENBQUMsQ0FBQyxHQUFhLEVBQUUsRUFBRSxDQUFDLEdBQUcsQ0FBQyxJQUFJLEVBQUUsQ0FBQzthQUNsQyxNQUFNLENBQUMsQ0FBQyxHQUFRLEVBQUUsRUFBRTs7WUFHbkIsSUFBRyxDQUFDLENBQUMsR0FBRyxDQUFDLGNBQWMsQ0FBQyxNQUFNLENBQUMsSUFBSSxHQUFHLENBQUMsY0FBYyxDQUFDLE9BQU8sQ0FBQyxDQUFDLEVBQUM7Z0JBQzdELElBQUksQ0FBQyxLQUFLLENBQUMsV0FBVyxDQUFDLENBQUM7Z0JBQ3hCLE9BQU8sSUFBSSxPQUFPLENBQUMsS0FBSyxJQUFJLE9BQU8sQ0FBQyxLQUFLLEVBQUUsQ0FBQztnQkFDNUMsT0FBTyxLQUFLLENBQUM7YUFDZjtZQUNELElBQUksT0FBTyxDQUFDLEdBQUcsSUFBSSxPQUFPLENBQUMsR0FBRyxDQUFDLE1BQU0sSUFBSSxDQUFDLEVBQUU7Z0JBQzFDLHFCQUFJLEdBQUcsR0FBRyxPQUFPLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQztnQkFDN0IsS0FBSyxxQkFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxHQUFHLEVBQUUsQ0FBQyxFQUFFLEVBQUU7b0JBQzVCLHFCQUFJLEVBQUUsR0FBRyxPQUFPLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDO29CQUN4QixJQUFJLEdBQUcsQ0FBQyxLQUFLLElBQUksR0FBRyxDQUFDLEtBQUssQ0FBQyxVQUFVLEdBQUcsQ0FBQyxLQUFLLEVBQUUsQ0FBQyxVQUFVLElBQUksWUFBWSxJQUFJLE9BQU8sRUFBRTt3QkFDdEYsRUFBRSxDQUFDLFFBQVEsRUFBRSxDQUFDO3FCQUNmO2lCQUNGO2FBQ0Y7WUFDRCxJQUFJLEdBQUcsQ0FBQyxLQUFLLElBQUksR0FBRyxDQUFDLEtBQUssQ0FBQyxVQUFVLEdBQUcsQ0FBQyxJQUFJLENBQUMsRUFBRTtnQkFDOUMsT0FBTyxJQUFJLENBQUM7YUFDYjs7WUFFRCxJQUFHLE9BQU0sQ0FBQyxPQUFPLENBQUMsS0FBSyxTQUFTLEVBQUM7Z0JBQy9CLElBQUcsT0FBTyxFQUFDO29CQUNULElBQUksQ0FBQyxLQUFLLENBQUMsR0FBRyxJQUFJLEdBQUcsQ0FBQyxLQUFLLElBQUksR0FBRyxDQUFDLEtBQUssQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDO29CQUM1RCxPQUFPLEtBQUssQ0FBQztpQkFDZDtxQkFBSTtvQkFDSCxPQUFPLElBQUksQ0FBQztpQkFDYjthQUNGOztZQUVELElBQUcsT0FBTyxDQUFDLFdBQVcsRUFBQztnQkFDckIsSUFBSSxDQUFDLEtBQUssQ0FBQyxHQUFHLElBQUksR0FBRyxDQUFDLEtBQUssSUFBSSxHQUFHLENBQUMsS0FBSyxDQUFDLGlCQUFpQixDQUFDLENBQUM7Z0JBQzVELE9BQU8sS0FBSyxDQUFDO2FBQ2Q7aUJBQUs7Z0JBQ0osT0FBTyxJQUFJLENBQUM7YUFDYjtTQUVGLENBQUM7YUFDRCxLQUFLLENBQUMsQ0FBQyxLQUFVLEVBQUUsRUFBRTtZQUNwQixPQUFPLFVBQVUsQ0FBQyxLQUFLLENBQUMsS0FBSyxJQUFJLGNBQWMsQ0FBQyxDQUFDO1NBQ2xELENBQUMsQ0FBQztLQUNOOzs7Ozs7SUFFRCxRQUFRLENBQUMsT0FBTyxFQUFFLE9BQU87Ozs7O1FBTXZCLHFCQUFJLE9BQU8sR0FBRyxJQUFJLE9BQU8sRUFBRSxDQUFDOztRQUU1QixPQUFPLENBQUMsTUFBTSxDQUFDLGNBQWMsRUFBRSxnQ0FBZ0MsQ0FBQyxDQUFDOzs7Ozs7Ozs7O1FBWWpFLHFCQUFJLE1BQU0sR0FBRyxPQUFPLENBQUM7UUFDckIscUJBQUksSUFBSSxHQUFHLElBQUksQ0FBQzs7Ozs7OztRQU9oQixxQkFBSSxPQUFPLEdBQUcsSUFBSSxjQUFjLENBQUM7WUFDL0IsT0FBTyxFQUFFLE9BQU87WUFDaEIsTUFBTSxFQUFFLE1BQU07WUFDZCxHQUFHLEVBQUUsTUFBTTtZQUNYLElBQUksRUFBRSxPQUFPLElBQUksRUFBRTtTQUNwQixDQUFDLENBQUM7UUFDSCxPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLE1BQU0sRUFBRSxPQUFPLENBQUM7YUFDdEMsR0FBRyxDQUFDLENBQUMsR0FBYSxFQUFFLEVBQUUsQ0FBQyxHQUFHLENBQUMsSUFBSSxFQUFFLENBQUM7YUFDbEMsTUFBTSxDQUFDLENBQUMsR0FBUSxFQUFFLEVBQUU7WUFDbkIsSUFBSSxHQUFHLENBQUMsS0FBSyxJQUFJLEdBQUcsQ0FBQyxLQUFLLENBQUMsVUFBVSxHQUFHLENBQUMsSUFBSSxDQUFDLEVBQUU7Z0JBQzlDLE9BQU8sSUFBSSxDQUFDO2FBQ2I7aUJBQ0k7Z0JBQ0gsT0FBTyxLQUFLLENBQUM7YUFDZDtTQUVGLENBQUM7YUFDRCxLQUFLLENBQUMsQ0FBQyxLQUFVLEVBQUUsRUFBRTtZQUNwQixPQUFPLFVBQVUsQ0FBQyxLQUFLLENBQUMsS0FBSyxJQUFJLGNBQWMsQ0FBQyxDQUFDO1NBQ2xELENBQUMsQ0FBQztLQUNOOzs7OztJQUVELFlBQVksQ0FBQyxLQUFLO1FBQ2hCLElBQUksS0FBSyxFQUFFO1lBQ1QscUJBQUksSUFBSSxHQUFHLElBQUksSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLE1BQU0sRUFBRSxDQUFDO1lBQ3BDLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztTQUMzQjtRQUNELE9BQU8sSUFBSSxDQUFDO0tBQ2I7Ozs7OztJQUVELE1BQU0sQ0FBQyxPQUFPLEVBQUUsTUFBTTtRQUNwQixxQkFBSSxTQUFTLEdBQUcsTUFBTSxDQUFDLEdBQUcsQ0FBQyxXQUFXLENBQUMsQ0FBQztRQUN4QyxxQkFBSSxTQUFTLEdBQVEsRUFBRSxDQUFDO1FBQ3hCLHFCQUFJLFVBQVUsR0FBUSxFQUFFLENBQUM7UUFDekIsSUFBSSxTQUFTLEVBQUU7WUFDYixJQUFJO2dCQUNGLFNBQVMsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLFNBQVMsQ0FBQyxDQUFDO2dCQUNsQyxVQUFVLEdBQUc7b0JBQ1gsVUFBVSxFQUFFLFNBQVMsQ0FBQyxVQUFVO29CQUNoQyxVQUFVLEVBQUUsU0FBUyxDQUFDLEtBQUs7aUJBQzVCLENBQUM7YUFDSDtZQUNELHdCQUFPLENBQUMsRUFBRTtnQkFDUixPQUFPLENBQUMsR0FBRyxDQUFDLHVCQUF1QixDQUFDLENBQUM7YUFDdEM7U0FDRjtRQUVELHFCQUFJLFNBQVMsR0FBRyxZQUFZLENBQUMsRUFBRSxFQUFFLFVBQVUsRUFBRSxNQUFNLENBQUMsQ0FBQztRQUNyRCxxQkFBSSxHQUFHLEdBQUcsT0FBTyxHQUFHLEdBQUcsQ0FBQztRQUN4QixLQUFLLHFCQUFJLEdBQUcsSUFBSSxTQUFTLEVBQUU7WUFDekIsSUFBSSxTQUFTLENBQUMsR0FBRyxDQUFDLEVBQUU7Z0JBQ2xCLEdBQUcsSUFBSSxHQUFHLEdBQUcsR0FBRyxHQUFHLGtCQUFrQixDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxHQUFHLEdBQUcsQ0FBQzthQUM3RDtTQUNGO1FBQ0QsTUFBTSxDQUFDLFFBQVEsQ0FBQyxJQUFJLEdBQUcsR0FBRyxDQUFDO0tBQzVCOzs7OztJQUVELFVBQVUsQ0FBQyxJQUFJO1FBQ2IscUJBQUksR0FBRyxHQUFHLEVBQUUsQ0FBQztRQUNiLHFCQUFJLE1BQU0sR0FBRyxJQUFJLFVBQVUsRUFBRSxDQUFDO1FBQzlCLE1BQU0sQ0FBQyxNQUFNLEdBQUcsVUFBVSxDQUFNO1lBQzlCLHFCQUFJLElBQUksR0FBRyxDQUFDLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQzs7WUFFM0IscUJBQUksS0FBSyxHQUFHLElBQUksS0FBSyxFQUFFLENBQUM7WUFDeEIsS0FBSyxDQUFDLE1BQU0sR0FBRztnQkFDYixxQkFBSSxLQUFLLEdBQUcsS0FBSyxDQUFDLEtBQUssQ0FBQztnQkFDeEIscUJBQUksTUFBTSxHQUFHLEtBQUssQ0FBQyxNQUFNLENBQUM7Z0JBQzFCLEdBQUcsR0FBRztvQkFDSixNQUFNLEVBQUUsTUFBTTtvQkFDZCxLQUFLLEVBQUUsS0FBSztpQkFDYixDQUFDO2dCQUNGLE9BQU8sR0FBRyxDQUFDO2FBQ1osQ0FBQztZQUNGLEtBQUssQ0FBQyxHQUFHLEdBQUcsSUFBSSxDQUFDO1NBQ2xCLENBQUM7UUFDRixNQUFNLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxDQUFDO0tBQzVCOzs7WUE5T0YsVUFBVTs7OztZQVpILElBQUk7WUFEUSx3QkFBd0I7WUFPcEMsTUFBTSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29va2llfSBmcm9tICduZzItY29va2llcy9uZzItY29va2llcyc7XG5pbXBvcnQge0luamVjdGFibGUsIENvbXBvbmVudEZhY3RvcnlSZXNvbHZlcn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge0h0dHAsIEhlYWRlcnMsIFJlc3BvbnNlLCBSZXF1ZXN0T3B0aW9ucywgUmVxdWVzdE1ldGhvZCwgVVJMU2VhcmNoUGFyYW1zfSBmcm9tICdAYW5ndWxhci9odHRwJztcbmltcG9ydCB7T2JzZXJ2YWJsZX0gZnJvbSAncnhqcy9SeCc7XG4vLyBpbXBvcnQge2Vudmlyb25tZW50fSBmcm9tICcuLi8uLi8uLi8uLi8uLi9lbnZpcm9ubWVudHMvZW52aXJvbm1lbnQnO1xuaW1wb3J0IHtKZGJQbGdUb2FzdENvbXBvbmVudH0gZnJvbSAnLi4vLi4vY29tcG9uZW50cy9qZGItcGxnLXRvYXN0L2pkYi1wbGctdG9hc3QuY29tcG9uZW50JztcbmltcG9ydCB7alF1ZXJ5TGlrZVBhcmFtU2VyaWFsaXplcn0gZnJvbSAnLi9xdWVyeS1zdHJpbmcnO1xuaW1wb3J0IHtvYmplY3RBc3NpZ259IGZyb20gJy4vb2JqZWN0LWFzc2lnbic7XG5pbXBvcnQge1JvdXRlcn0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcblxuLy8gY29uc3QgREVGQVVMVEhPU1QgPSBlbnZpcm9ubWVudC5hcGlDb25maWcuZGVmYXVsdEhvc3Q7XG4vLyBjb25zdCBBUElTID0gZW52aXJvbm1lbnQuYXBpQ29uZmlnLmFwaXM7XG4vLyBjb25zdCBFTlYgPSBlbnZpcm9ubWVudC5lbnY7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBKZGJQbGdCYXNlU2VydmljZSB7XG4gIHZSZWY7XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBodHRwOiBIdHRwLCBwcml2YXRlIGNvbXBvbmVudEZhY3RvcnlSZXNvbHZlcjogQ29tcG9uZW50RmFjdG9yeVJlc29sdmVyLCBwcml2YXRlIHJvdXRlOiBSb3V0ZXIpIHtcbiAgfVxuXG4gIC8vIOWkhOeQhuS4jeWQjOeOr+Wig+eahFVybO+8jOWcqOWOn+adpeeahOWfuuehgOS4iuWBmuS6huS8mOWMllxuICAvLyBnZXRVcmwoYXBpTmFtZTogc3RyaW5nKSB7XG4gIC8vICAgbGV0IGFwaSA9IEFQSVNbYXBpTmFtZV07XG4gIC8vICAgaWYgKEVOViA9PSAnc2VydmUnICYmIGFwaS5zZXJ2ZSkge1xuICAvLyAgICAgcmV0dXJuIGFwaS5zZXJ2ZTtcbiAgLy8gICB9XG4gIC8vICAgaWYgKGFwaS5ob3N0ICYmIGFwaS5ob3N0W0VOVl0pIHtcbiAgLy8gICAgIHJldHVybiBhcGkuaG9zdFtFTlZdICsgYXBpLnBhdGg7XG4gIC8vICAgfVxuICAvLyAgIHJldHVybiBERUZBVUxUSE9TVFtFTlZdICsgYXBpLnBhdGg7XG4gIC8vIH1cblxuICBzZXRSb290Vmlld0NvbnRhaW5lclJlZih2UmVmKSB7XG4gICAgdGhpcy52UmVmID0gdlJlZjtcblxuICB9XG5cbiAgdG9hc3QobXNnLCBkZWxheVRpbWUgPSAzMDAwKSB7XG4gICAgLy/pgJrov4dDb21wb25lbnRGYWN0b3J5UmVzb2x2ZXIg5Yib5bu65Ye65Yqo5oCB57uE5Lu255qE5a6e5L6LXG4gICAgY29uc3QgY2hpbGRDb21wb25lbnQgPSB0aGlzLmNvbXBvbmVudEZhY3RvcnlSZXNvbHZlci5yZXNvbHZlQ29tcG9uZW50RmFjdG9yeShKZGJQbGdUb2FzdENvbXBvbmVudCk7XG4gICAgbGV0IGNvbUluc3RhbmNlID0gdGhpcy52UmVmLmNyZWF0ZUNvbXBvbmVudChjaGlsZENvbXBvbmVudCk7XG4gICAgY29tSW5zdGFuY2UuaW5zdGFuY2UubXNnID0gbXNnO1xuICAgIGNvbUluc3RhbmNlLmNoYW5nZURldGVjdG9yUmVmLmRldGVjdENoYW5nZXMoKTtcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIGNvbUluc3RhbmNlLmRlc3Ryb3koKTtcbiAgICB9LCBkZWxheVRpbWUpO1xuICB9XG5cbiAgdGVzdCgpIHtcbiAgICBhbGVydCgnamRiIHNlcnZpY2VzLi4uLicpO1xuICB9XG5cbiAgLyoqXG4gICAqXG4gICAqIEBwYXJhbSBhcGlOYW1lXG4gICAqIEBwYXJhbSBkYXRhT2JqXG4gICAqIEBwYXJhbSBpc0ludGVyY2VwdCDmmK/lkKbmi6bmiKrlpITnkIZyZXR1cm5Db2RlICE9IDAg55qE5oOF5Ya1XG4gICAqL1xuICBwb3N0KGFwaU5hbWUsIGRhdGFPYmosIG9wdGlvbnMpIHtcbiAgICBsZXQgdGltZSA9IG5ldyBEYXRlKCkuZ2V0VGltZSgpO1xuICAgIGxldCBsb2dpblRva2VuO1xuICAgIGxldCBsb2dpbldheTtcbiAgICBsZXQgb3JnVWlkO1xuICAgIGlmIChvcHRpb25zICYmIG9wdGlvbnMudG9rZW5PYmopIHtcbiAgICAgIGxvZ2luVG9rZW4gPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShvcHRpb25zLnRva2VuT2JqLmxvZ2luVG9rZW4pO1xuICAgICAgbG9naW5XYXkgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShvcHRpb25zLnRva2VuT2JqLmxvZ2luV2F5KTtcbiAgICAgIG9yZ1VpZCA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKG9wdGlvbnMudG9rZW5PYmoub3JnVWlkKTtcbiAgICB9XG4gICAgbGV0IGxvZ2luT2JqOiBhbnkgPSB7fTtcbiAgICBsZXQgZGF0YTogYW55ID0ge307XG4gICAgbGV0IGN1cnJlbnRSb3V0ZSA9IGxvY2F0aW9uLmhhc2guc3BsaXQoJy8nKVsxXTtcbiAgICBpZiAobG9naW5Ub2tlbikge1xuICAgICAgaWYgKG9yZ1VpZCkge1xuICAgICAgICBsb2dpbk9iaiA9IHtcbiAgICAgICAgICAnbG9naW5Ub2tlbic6IGxvZ2luVG9rZW4sXG4gICAgICAgICAgJ2xvZ2luV2F5JzogbG9naW5XYXksXG4gICAgICAgICAgJ29yZ1VpZCc6IG9yZ1VpZCxcbiAgICAgICAgICAnamRiRGhUcmFjZUlkJzogdGltZSArICctJyArIHBhcnNlSW50KE1hdGgucmFuZG9tKCkgKiAoMTAwMDAwICsgMSkgKyAxICsgJycpXG4gICAgICAgIH07XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBsb2dpbk9iaiA9IHtcbiAgICAgICAgICAnbG9naW5Ub2tlbic6IGxvZ2luVG9rZW4sXG4gICAgICAgICAgJ2xvZ2luV2F5JzogbG9naW5XYXksXG4gICAgICAgICAgJ2pkYkRoVHJhY2VJZCc6IHRpbWUgKyAnLScgKyBwYXJzZUludChNYXRoLnJhbmRvbSgpICogKDEwMDAwMCArIDEpICsgMSArICcnKVxuICAgICAgICB9O1xuICAgICAgfVxuXG4gICAgICBkYXRhID0gb2JqZWN0QXNzaWduKHt9LCBsb2dpbk9iaiwgZGF0YU9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGRhdGEgPSBvYmplY3RBc3NpZ24oe30sIGRhdGFPYmopO1xuICAgIH1cbiAgICBkYXRhID0galF1ZXJ5TGlrZVBhcmFtU2VyaWFsaXplcihkYXRhKTtcbiAgICBsZXQgaGVhZGVycyA9IG5ldyBIZWFkZXJzKCk7XG4gICAgaGVhZGVycy5hcHBlbmQoJ0NvbnRlbnQtVHlwZScsICdhcHBsaWNhdGlvbi94LXd3dy1mb3JtLXVybGVuY29kZWQ7Y2hhcnNldD11dGYtOCcpO1xuICAgIGxldCByZXFVcmwgPSBhcGlOYW1lO1xuICAgIGxldCB0aGF0ID0gdGhpcztcbiAgICBsZXQgcmVxdWVzdG9wdGlvbnMgPSBuZXcgUmVxdWVzdE9wdGlvbnMoe1xuICAgICAgaGVhZGVyczogaGVhZGVycyxcbiAgICAgIG1ldGhvZDogJ3Bvc3QnLFxuICAgICAgYm9keTogZGF0YSB8fCB7fVxuICAgIH0pO1xuICAgIGNvbnNvbGUubG9nKHRoaXMuaHR0cCk7XG4gICAgcmV0dXJuIHRoaXMuaHR0cC5yZXF1ZXN0KHJlcVVybCwgcmVxdWVzdG9wdGlvbnMpXG4gICAgICAubWFwKChyZXM6IFJlc3BvbnNlKSA9PiByZXMuanNvbigpKVxuICAgICAgLmZpbHRlcigocmVzOiBhbnkpID0+IHtcblxuICAgICAgICAvL+agoemqjOaOpeWPo+i/lOWbnueahOaVsOaNrue7k+aehOagvOW8j1xuICAgICAgICBpZighKHJlcy5oYXNPd25Qcm9wZXJ0eSgnZGF0YScpICYmIHJlcy5oYXNPd25Qcm9wZXJ0eSgnZXJyb3InKSkpe1xuICAgICAgICAgICB0aGlzLnRvYXN0KCfns7vnu5/mjqXlj6PmoLzlvI/plJnor6/vvIEnKTtcbiAgICAgICAgICAgb3B0aW9ucyAmJiBvcHRpb25zLnJlc2V0ICYmIG9wdGlvbnMucmVzZXQoKTtcbiAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgICAgIGlmIChvcHRpb25zLmZucyAmJiBvcHRpb25zLmZucy5sZW5ndGggIT0gMCkge1xuICAgICAgICAgIGxldCBsZW4gPSBvcHRpb25zLmZucy5sZW5ndGg7XG4gICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBsZW47IGkrKykge1xuICAgICAgICAgICAgbGV0IGZuID0gb3B0aW9ucy5mbnNbaV07XG4gICAgICAgICAgICBpZiAocmVzLmVycm9yICYmIHJlcy5lcnJvci5yZXR1cm5Db2RlICogMSA9PT0gZm4ucmV0dXJuQ29kZSAmJiBjdXJyZW50Um91dGUgIT0gJ2xvZ2luJykge1xuICAgICAgICAgICAgICBmbi5jYWxsYmFjaygpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBpZiAocmVzLmVycm9yICYmIHJlcy5lcnJvci5yZXR1cm5Db2RlICogMSA9PSAwKSB7XG4gICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cbiAgICAgICAgLy/lhbzlrrnnmbvlvZXnu4Tku7bkuK1xcmNvZGVBcGnlkoxsb2dpbkFwaeS4pOS4quaOpeWPo+iAgeeahOWGmeazlVxuICAgICAgICBpZih0eXBlb2Yob3B0aW9ucykgPT09ICdib29sZWFuJyl7XG4gICAgICAgICAgaWYob3B0aW9ucyl7XG4gICAgICAgICAgICB0aGlzLnRvYXN0KHJlcyAmJiByZXMuZXJyb3IgJiYgcmVzLmVycm9yLnJldHVyblVzZXJNZXNzYWdlKTtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICB9ZWxzZXtcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICAvL+aYr+WQpuaLpuaIquWkhOeQhlxuICAgICAgICBpZihvcHRpb25zLmlzSW50ZXJjZXB0KXtcbiAgICAgICAgICB0aGlzLnRvYXN0KHJlcyAmJiByZXMuZXJyb3IgJiYgcmVzLmVycm9yLnJldHVyblVzZXJNZXNzYWdlKTtcbiAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1lbHNlIHtcbiAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuXG4gICAgICB9KVxuICAgICAgLmNhdGNoKChlcnJvcjogYW55KSA9PiB7XG4gICAgICAgIHJldHVybiBPYnNlcnZhYmxlLnRocm93KGVycm9yIHx8ICdTZXJ2ZXIgZXJyb3InKTtcbiAgICAgIH0pO1xuICB9XG5cbiAgcG9zdEpTT04oYXBpTmFtZSwgZGF0YU9iaikge1xuICAgIC8vIGxldCBoZWFkZXJzID0gbmV3IEhlYWRlcnMoe1xuICAgIC8vICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nLFxuICAgIC8vICAgICAnd2l0aENyZWRlbnRpYWxzJzogdHJ1ZVxuICAgIC8vIH0pO1xuXG4gICAgbGV0IGhlYWRlcnMgPSBuZXcgSGVhZGVycygpO1xuICAgIC8vIGhlYWRlcnMuYXBwZW5kKCdDb250ZW50LVR5cGUnLCAnYXBwbGljYXRpb24veC13d3ctZm9ybS11cmxlbmNvZGVkO2NoYXJzZXQ9dXRmLTgnKTtcbiAgICBoZWFkZXJzLmFwcGVuZCgnQ29udGVudC1UeXBlJywgJ2FwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtOCcpO1xuXG4gICAgLy8gaGVhZGVycy5hcHBlbmQoJ3dpdGhDcmVkZW50aWFscycsJ3RydWUnKTtcbiAgICAvLyBsZXQgdXJsRGF0YSA9IG5ldyBVUkxTZWFyY2hQYXJhbXMoKTtcbiAgICAvLyBpZiAoT2JqZWN0LmtleXMoZGF0YU9iaikubGVuZ3RoID4gMCkge1xuICAgIC8vICAgICBmb3IgKGxldCBrZXkgaW4gZGF0YU9iaikge1xuICAgIC8vICAgICAgICAgdXJsRGF0YS5hcHBlbmQoa2V5LCBkYXRhT2JqW2tleV0pO1xuICAgIC8vICAgICB9XG4gICAgLy8gfVxuICAgIC8vIGxldCBsb2FuTWFya2V0VG9rZW4gPSBDb29raWUuZ2V0KCdsb2FuTWFya2V0VG9rZW4nKTtcbiAgICAvLyB1cmxEYXRhLmFwcGVuZCgnbG9hbk1hcmtldFRva2VuJywgbG9hbk1hcmtldFRva2VuKTtcblxuICAgIGxldCByZXFVcmwgPSBhcGlOYW1lO1xuICAgIGxldCB0aGF0ID0gdGhpcztcbiAgICAvLyBsZXQgcmVxdWVzdG9wdGlvbnMgPSBuZXcgUmVxdWVzdE9wdGlvbnMoe1xuICAgIC8vICAgICBtZXRob2Q6IFJlcXVlc3RNZXRob2QuUG9zdCxcbiAgICAvLyAgICAgdXJsOiByZXFVcmwsXG4gICAgLy8gICAgIGhlYWRlcnM6IGhlYWRlcnMsXG4gICAgLy8gICAgIGJvZHk6IHRlc3REYXRhXG4gICAgLy8gfSlcbiAgICBsZXQgb3B0aW9ucyA9IG5ldyBSZXF1ZXN0T3B0aW9ucyh7XG4gICAgICBoZWFkZXJzOiBoZWFkZXJzLFxuICAgICAgbWV0aG9kOiAncG9zdCcsXG4gICAgICB1cmw6IHJlcVVybCxcbiAgICAgIGJvZHk6IGRhdGFPYmogfHwge31cbiAgICB9KTtcbiAgICByZXR1cm4gdGhpcy5odHRwLnJlcXVlc3QocmVxVXJsLCBvcHRpb25zKVxuICAgICAgLm1hcCgocmVzOiBSZXNwb25zZSkgPT4gcmVzLmpzb24oKSlcbiAgICAgIC5maWx0ZXIoKHJlczogYW55KSA9PiB7XG4gICAgICAgIGlmIChyZXMuZXJyb3IgJiYgcmVzLmVycm9yLnJldHVybkNvZGUgKiAxID09IDApIHtcbiAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cblxuICAgICAgfSlcbiAgICAgIC5jYXRjaCgoZXJyb3I6IGFueSkgPT4ge1xuICAgICAgICByZXR1cm4gT2JzZXJ2YWJsZS50aHJvdyhlcnJvciB8fCAnU2VydmVyIGVycm9yJyk7XG4gICAgICB9KTtcbiAgfVxuXG4gIHN0YW1wMnN0cmluZyhzdGFtcCkge1xuICAgIGlmIChzdGFtcCkge1xuICAgICAgbGV0IGRhdGUgPSBuZXcgRGF0ZShzdGFtcCkudG9KU09OKCk7XG4gICAgICByZXR1cm4gZGF0ZS5zcGxpdCgnVCcpWzBdO1xuICAgIH1cbiAgICByZXR1cm4gbnVsbDtcbiAgfVxuXG4gIGV4cG9ydChhcGlOYW1lLCBwYXJhbXMpIHtcbiAgICBsZXQgY29va2llU3RyID0gQ29va2llLmdldCgnbG9naW5JbmZvJyk7XG4gICAgbGV0IGNvb2tpZU9iajogYW55ID0ge307XG4gICAgbGV0IGNvb2tpZURhdGE6IGFueSA9IHt9O1xuICAgIGlmIChjb29raWVTdHIpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIGNvb2tpZU9iaiA9IEpTT04ucGFyc2UoY29va2llU3RyKTtcbiAgICAgICAgY29va2llRGF0YSA9IHtcbiAgICAgICAgICBsb2dpblRva2VuOiBjb29raWVPYmoubG9naW5Ub2tlbixcbiAgICAgICAgICBlbXBsb3llZUlkOiBjb29raWVPYmouZW1wSWRcbiAgICAgICAgfTtcbiAgICAgIH1cbiAgICAgIGNhdGNoIChlKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKCdwYXJzZSBjb29raWUgZXJyb3IuLi4nKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBsZXQgcGFyYW1zT2JqID0gb2JqZWN0QXNzaWduKHt9LCBjb29raWVEYXRhLCBwYXJhbXMpO1xuICAgIGxldCB1cmwgPSBhcGlOYW1lICsgJz8nO1xuICAgIGZvciAobGV0IGtleSBpbiBwYXJhbXNPYmopIHtcbiAgICAgIGlmIChwYXJhbXNPYmpba2V5XSkge1xuICAgICAgICB1cmwgKz0ga2V5ICsgJz0nICsgZW5jb2RlVVJJQ29tcG9uZW50KHBhcmFtc09ialtrZXldKSArICcmJztcbiAgICAgIH1cbiAgICB9XG4gICAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSB1cmw7XG4gIH1cblxuICBnZXRQaWNTaXplKGZpbGUpIHtcbiAgICBsZXQgYXJyID0ge307XG4gICAgbGV0IHJlYWRlciA9IG5ldyBGaWxlUmVhZGVyKCk7XG4gICAgcmVhZGVyLm9ubG9hZCA9IGZ1bmN0aW9uIChlOiBhbnkpIHtcbiAgICAgIGxldCBkYXRhID0gZS50YXJnZXQucmVzdWx0O1xuICAgICAgLy/liqDovb3lm77niYfojrflj5blm77niYfnnJ/lrp7lrr3luqblkozpq5jluqZcbiAgICAgIGxldCBpbWFnZSA9IG5ldyBJbWFnZSgpO1xuICAgICAgaW1hZ2Uub25sb2FkID0gZnVuY3Rpb24gKCkge1xuICAgICAgICBsZXQgd2lkdGggPSBpbWFnZS53aWR0aDtcbiAgICAgICAgbGV0IGhlaWdodCA9IGltYWdlLmhlaWdodDtcbiAgICAgICAgYXJyID0ge1xuICAgICAgICAgIGhlaWdodDogaGVpZ2h0LFxuICAgICAgICAgIHdpZHRoOiB3aWR0aFxuICAgICAgICB9O1xuICAgICAgICByZXR1cm4gYXJyO1xuICAgICAgfTtcbiAgICAgIGltYWdlLnNyYyA9IGRhdGE7XG4gICAgfTtcbiAgICByZWFkZXIucmVhZEFzRGF0YVVSTChmaWxlKTtcbiAgfVxufVxuIl19