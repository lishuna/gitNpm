import { CommonMethodService } from './common-method.service';
//import { Cookie } from 'ng2-cookies';
// let Cookie = require('ng2-cookies');

import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, catchError } from 'rxjs/operators';
// import 'rxjs/add/operator/filter';
// import 'rxjs/add/operator/catch';
import { jQueryLikeParamSerializer } from './query-string';
import { objectAssign } from './object-assign';

import { StatisticData } from '../../config/statistic.config';
import { SendStatisticService } from './send-statistic.service';

let statisticList = [];
@Injectable()
export class JdbPlgBaseService {
  vRef;
  timer: any = null;
  //收集的每一个接口的数据结构
  newStatisticData: StatisticData = {
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
  baseObj: any = {
    from: null,
    operator: null,
    memberId: null,
  };

  constructor(
    private http: HttpClient,
    private commonService: CommonMethodService,
    private sendStatisticService: SendStatisticService
  ) {
    if (this.timer) {
      clearInterval(this.timer);
    }
    //轮询去发送数据，并清空队列
    this.timer = setInterval(() => {
      this.sendStatisticService.emitStatisticData(statisticList);
      statisticList = [];
    }, 10000);
  }

  setRootViewContainerRef(vRef) {
    this.vRef = vRef;
    this.commonService.setRootViewContainerRef(this.vRef);
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
    // 系统来源
    let from;
    // 获取接口的apiException
    this.newStatisticData.service.apiException = {
      requestTime: null,
      url: '',
      params: null,
      resCode: null,
      resMessage: '',
      errorMessage: ''
    };
    let apiException = JSON.parse(JSON.stringify(this.newStatisticData.service.apiException));
    this.newStatisticData.service.apiException = apiException;
    if (options && options.tokenObj) {
      loginToken = localStorage.getItem(options.tokenObj.loginToken);
      loginWay = localStorage.getItem(options.tokenObj.loginWay);
      orgUid = localStorage.getItem(options.tokenObj.orgUid);
      from = localStorage.getItem(options.tokenObj.from);
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
    // 請求參數
    apiException.params = data;
    data = jQueryLikeParamSerializer(data);
    const headers = new HttpHeaders({ 'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8' });
    const requestoptions = {
      headers: headers
    };
    let reqUrl = apiName;
    //统计数据添加from和operator字段
    this.baseObj.from = from;
    this.baseObj.operator = localStorage.getItem('nickName');
    this.baseObj.memberId = localStorage.getItem('memberId');
    //统计数据添加请求url
    apiException.url = reqUrl;
    return this.http.post(reqUrl, data || {}, requestoptions)
      .pipe(filter((res: any) => {
        // 根据joinTraceId是否为true 判断是否需要拼接日志号 （目前只有电催系统需要）
        if ( currentRoute != 'login' && options && options.joinTraceId) {
          res.error.returnUserMessage = res.error.returnUserMessage + '<br/>(日志号:' + loginObj.jdbDhTraceId + ')';
        }
        const endTime = new Date().getTime();
        //统计接口请求时长
        apiException.requestTime = endTime - time;
        //校验接口返回的数据结构格式
        if (!(res.hasOwnProperty('data') && res.hasOwnProperty('error'))) {
          this.commonService.toast('系统接口格式错误！');
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
          //统计数据添加returnCode，returnUserMessage信息
          apiException.resCode = res.error.returnCode;
          apiException.resMessage = res.error.returnUserMessage;
          //拷贝公共信息
          this.newStatisticData = Object.assign(this.newStatisticData, this.baseObj);
          //去除logDataApi、loginApi、qrcodeApi三个接口
          if (options && !options.noLog) {
            statisticList.push(this.newStatisticData);
          }
          return true;
        }
        // 统计数据添加returnCode，returnUserMessage信息
        apiException.resCode = res.error.returnCode;
        apiException.resMessage = res.error.returnUserMessage;
        this.newStatisticData = Object.assign(this.newStatisticData, this.baseObj);
        if (options && !options.noLog ) {
          statisticList.push(this.newStatisticData);
        }
        //兼容登录组件中qrcodeApi和loginApi两个接口老的写法
        if (typeof (options) === 'boolean') {
          if (options) {
            this.commonService.toast(res && res.error && res.error.returnUserMessage);
            return false;
          } else {
            return true;
          }
        }
        //是否拦截处理
        if (options.isIntercept) {
          this.commonService.toast(res && res.error && res.error.returnUserMessage);
          return false;
        } else {
          return true;
        }
      }))
      .pipe(catchError((error: any) => {
        // 统计错误信息
        apiException.errorMessage = error;
        this.newStatisticData = Object.assign(this.newStatisticData, this.baseObj);
        if (options && !options.noLog ) {
          statisticList.push(this.newStatisticData);
        }
        return Observable.throw(error || 'Server error');
      }));
  }



  stamp2string(stamp) {
    if (stamp) {
      let date = new Date(stamp).toJSON();
      return date.split('T')[0];
    }
    return null;
  }

  download(apiName, params) {
    // let cookieStr = Cookie.get('loginInfo');
    let cookieObj: any = {};
    let cookieData: any = {};
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
