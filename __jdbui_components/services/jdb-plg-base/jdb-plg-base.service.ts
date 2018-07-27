import {Cookie} from 'ng2-cookies/ng2-cookies';
import {Injectable, ComponentFactoryResolver} from '@angular/core';
import {Http, Headers, Response, RequestOptions, RequestMethod, URLSearchParams} from '@angular/http';
import {Observable} from 'rxjs/Rx';
// import {environment} from '../../../../../environments/environment';
import {JdbPlgToastComponent} from '../../components/jdb-plg-toast/jdb-plg-toast.component';
import {jQueryLikeParamSerializer} from './query-string';
import {objectAssign} from './object-assign';
import {Router} from '@angular/router';

// const DEFAULTHOST = environment.apiConfig.defaultHost;
// const APIS = environment.apiConfig.apis;
// const ENV = environment.env;

@Injectable()
export class JdbPlgBaseService {
  vRef;

  constructor(private http: Http, private componentFactoryResolver: ComponentFactoryResolver, private route: Router) {
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

  setRootViewContainerRef(vRef) {
    this.vRef = vRef;

  }

  toast(msg, delayTime = 3000) {
    //通过ComponentFactoryResolver 创建出动态组件的实例
    const childComponent = this.componentFactoryResolver.resolveComponentFactory(JdbPlgToastComponent);
    let comInstance = this.vRef.createComponent(childComponent);
    comInstance.instance.msg = msg;
    comInstance.changeDetectorRef.detectChanges();
    setTimeout(() => {
      comInstance.destroy();
    }, delayTime);
  }

  test() {
    alert('jdb services....');
  }

  /**
   *
   * @param apiName
   * @param dataObj
   * @param isIntercept 是否拦截处理returnCode != 0 的情况
   */
  post(apiName, dataObj, options) {
    let time = new Date().getTime();
    let loginToken;
    let loginWay;
    let orgUid;
    if (options && options.tokenObj) {
      loginToken = localStorage.getItem(options.tokenObj.loginToken);
      loginWay = localStorage.getItem(options.tokenObj.loginWay);
      orgUid = localStorage.getItem(options.tokenObj.orgUid);
    }
    let loginObj: any = {};
    let data: any = {};
    let currentRoute = location.hash.split('/')[1];
    if (loginToken) {
      if (orgUid) {
        loginObj = {
          'loginToken': loginToken,
          'loginWay': loginWay,
          'orgUid': orgUid,
          'jdbDhTraceId': time + '-' + parseInt(Math.random() * (100000 + 1) + 1 + '')
        };
      } else {
        loginObj = {
          'loginToken': loginToken,
          'loginWay': loginWay,
          'jdbDhTraceId': time + '-' + parseInt(Math.random() * (100000 + 1) + 1 + '')
        };
      }

      data = objectAssign({}, loginObj, dataObj);
    } else {
      data = objectAssign({}, dataObj);
    }
    data = jQueryLikeParamSerializer(data);
    let headers = new Headers();
    headers.append('Content-Type', 'application/x-www-form-urlencoded;charset=utf-8');
    let reqUrl = apiName;
    let that = this;
    let requestoptions = new RequestOptions({
      headers: headers,
      method: 'post',
      body: data || {}
    });
    console.log(this.http);
    return this.http.request(reqUrl, requestoptions)
      .map((res: Response) => res.json())
      .filter((res: any) => {

        //校验接口返回的数据结构格式
        if(!(res.hasOwnProperty('data') && res.hasOwnProperty('error'))){
           this.toast('系统接口格式错误！');
           options && options.reset && options.reset();
           return false;
        }
        if (options.fns && options.fns.length != 0) {
          let len = options.fns.length;
          for (let i = 0; i < len; i++) {
            let fn = options.fns[i];
            if (res.error && res.error.returnCode * 1 === fn.returnCode && currentRoute != 'login') {
              fn.callback();
            }
          }
        }
        if (res.error && res.error.returnCode * 1 == 0) {
          return true;
        }
        //兼容登录组件中qrcodeApi和loginApi两个接口老的写法
        if(typeof(options) === 'boolean'){
          if(options){
            this.toast(res && res.error && res.error.returnUserMessage);
            return false;
          }else{
            return true;
          }
        }
        //是否拦截处理
        if(options.isIntercept){
          this.toast(res && res.error && res.error.returnUserMessage);
          return false;
        }else {
          return true;
        }

      })
      .catch((error: any) => {
        return Observable.throw(error || 'Server error');
      });
  }

  postJSON(apiName, dataObj) {
    // let headers = new Headers({
    //     'Content-Type': 'application/json',
    //     'withCredentials': true
    // });

    let headers = new Headers();
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

    let reqUrl = apiName;
    let that = this;
    // let requestoptions = new RequestOptions({
    //     method: RequestMethod.Post,
    //     url: reqUrl,
    //     headers: headers,
    //     body: testData
    // })
    let options = new RequestOptions({
      headers: headers,
      method: 'post',
      url: reqUrl,
      body: dataObj || {}
    });
    return this.http.request(reqUrl, options)
      .map((res: Response) => res.json())
      .filter((res: any) => {
        if (res.error && res.error.returnCode * 1 == 0) {
          return true;
        }
        else {
          return false;
        }

      })
      .catch((error: any) => {
        return Observable.throw(error || 'Server error');
      });
  }

  stamp2string(stamp) {
    if (stamp) {
      let date = new Date(stamp).toJSON();
      return date.split('T')[0];
    }
    return null;
  }

  export(apiName, params) {
    let cookieStr = Cookie.get('loginInfo');
    let cookieObj: any = {};
    let cookieData: any = {};
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

    let paramsObj = objectAssign({}, cookieData, params);
    let url = apiName + '?';
    for (let key in paramsObj) {
      if (paramsObj[key]) {
        url += key + '=' + encodeURIComponent(paramsObj[key]) + '&';
      }
    }
    window.location.href = url;
  }

  getPicSize(file) {
    let arr = {};
    let reader = new FileReader();
    reader.onload = function (e: any) {
      let data = e.target.result;
      //加载图片获取图片真实宽度和高度
      let image = new Image();
      image.onload = function () {
        let width = image.width;
        let height = image.height;
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
