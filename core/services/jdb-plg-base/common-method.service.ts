import { Injectable, ComponentFactoryResolver, ViewContainerRef } from '@angular/core';
import { JdbPlgToastComponent } from '../../components/jdb-plg-toast/jdb-plg-toast.component';

@Injectable()
export class CommonMethodService {

  vRef;

  constructor(
    private componentFactoryResolver: ComponentFactoryResolver,
  ) {
  }

  /*常用公共方法*/

  /*验证手机号是否合法
  * number 校验的手机号码*/
  testPhoneNumber(number: string) {
    const phoneReg = /^[1][0-9]{10}$/;
    return phoneReg.test(number);
  }

  /*验证姓名是否合法
   name 校验的姓名*/
  testName(name: string) {
    const nameReg = /^[\u4E00-\u9FA5·]{2,20}$/;
    return nameReg.test(name);
  }

  /*验证代偿金额是否为最大1亿，最小一元，只可以两位小数
  num单位为分*/
  testRepayAmount(num) {
    const nameReg = /^([1-9][0-9]{2,9}|10000000000)$/;
    return nameReg.test(num);
  }

  /*数字格式化为千位分隔
  num单位为分*/
  numFormat(num) {
    num = num / 100;
    return num.toFixed(2).replace(/\d{1,3}(?=(\d{3})+(\.\d*)?$)/g, '$&,');
  }

  /**
   * @method 将'yyyy-MM-dd~yyyy-MM-dd'格式，转化为startTime、endTime（10位时间戳）
   * @param value 'yyyy-MM-dd~yyyy-MM-dd'格式字符串
   */
  toTimestamp(value) {
    const timeObj = {};
    if (value) {
      const arrDate = value.split('~');
      timeObj['startTime'] = new Date(arrDate[0]).getTime() / 1000;
      timeObj['endTime'] = new Date(arrDate[1]).getTime() / 1000;
    } else {
      timeObj['startTime'] = '';
      timeObj['endTime'] = '';
    }
    return timeObj;
  }


  /* 将时间戳转化为不同时间格式
  * @param time必传 10位的时间戳
  * @param type选传 默认'yyyy-MM-dd HH:mm:ss'格式  type为1 'yyyy-MM-dd HH:mm:ss'; type为2 'yyyy-MM-dd HH:mm'; type为3 'yyyy-MM-dd'; type为4 'yyyy-MM'; type为5 'yyyy';
  */
  toDate(time, type = 1) {
    const myDate = new Date(time * 1000);
    const year = myDate.getFullYear();
    const month = this.add0(myDate.getMonth() + 1);
    const day = this.add0(myDate.getDate());
    const hour = this.add0(myDate.getHours());
    const minute = this.add0(myDate.getMinutes());
    const second = this.add0(myDate.getSeconds());
    switch (type) {
      case 1:
        return `${year}-${month}-${day} ${hour}:${minute}:${second}`;
      case 2:
        return `${year}-${month}-${day} ${hour}:${minute}`;
      case 3:
        return `${year}-${month}-${day}`;
      case 4:
        return `${year}-${month}`;
      case 5:
        return `${year}`;
    }
  }
  add0(m) {
    return m < 10 ? `0${+m}` : m;
  }

  /* 
    参数1: 当前日期的前/后几天，n<0是为当前日期的后几天，反之为当前日期的前几天,默认为0;
    参数2: 拼接的符号，符号'-'(2018-07-16),符号'/'(2018/07/16),默认为'-';
    参数3: 是否返回的是时间戳格式，默认是时间戳格式
    返回值: n=0时，返回当前日期的数组，否则第一个元素为当前日期，第二个元素为目标日期。
  */
  getTarDate(n = 0, joinStr = '-', isTimeStamp = true) {
    let date = new Date();
    let tarYear, tarMonth, tarDay, curYear, curMonth, curDay, curDate, tarDate;
    //获取当前年月日
    curYear = date.getFullYear();
    curMonth = date.getMonth() + 1;
    curDay = date.getDate();
    //获取当前前n天或后n天的年月日
    date.setDate(date.getDate() - n);
    tarYear = date.getFullYear();
    tarMonth = date.getMonth() + 1;
    tarDay = date.getDate();
    curDate = curYear + joinStr + (curMonth < 10 ? ('0' + curMonth) : curMonth) + joinStr + (curDay < 10 ? ('0' + curDay) : curDay);
    tarDate = tarYear + joinStr + (tarMonth < 10 ? ('0' + tarMonth) : tarMonth) + joinStr + (tarDay < 10 ? ('0' + tarDay) : tarDay);
    if (!isTimeStamp) {
      return n === 0 ? [curDate] : [curDate, tarDate];
    }
    if (joinStr !== '-') {
      let reg = new RegExp(joinStr, "g");
      curDate = curDate.replace(reg, '-');
      tarDate = tarDate.replace(reg, '-');
    }
    return n === 0 ? [new Date(curDate + ' 00:00:00').getTime()] : [new Date(curDate + ' 00:00:00').getTime(), new Date(tarDate + ' 23:59:59').getTime()];
  }


  setRootViewContainerRef(vRef) {
    this.vRef = vRef;
  }

  toast(msg, delayTime = 3000) {
    // 通过ComponentFactoryResolver 创建出动态组件的实例
    const childComponent = this.componentFactoryResolver.resolveComponentFactory(JdbPlgToastComponent);
    const comInstance = this.vRef.createComponent(childComponent);
    comInstance.instance.msg = msg;
    comInstance.changeDetectorRef.detectChanges();
    setTimeout(() => {
      comInstance.destroy();
    }, delayTime);
  }
  //方式丢失精度四种算法
  //乘法
  accMul(arg1, arg2) {
    let m = 0, s1 = arg1.toString(), s2 = arg2.toString();
    try { m += s1.split(".")[1].length } catch (e) { }
    try { m += s2.split(".")[1].length } catch (e) { }
    return Number(s1.replace(".", "")) * Number(s2.replace(".", "")) / Math.pow(10, m)
  }
  //除法
  accDiv(arg1, arg2) {
    let t1 = 0, t2 = 0, r1, r2;
    try { t1 = arg1.toString().split(".")[1].length } catch (e) { }
    try { t2 = arg2.toString().split(".")[1].length } catch (e) { }
    r1 = Number(arg1.toString().replace(".", ""))
    r2 = Number(arg2.toString().replace(".", ""))
    return this.accMul((r1 / r2), Math.pow(10, t2 - t1));
  }
  //加法
  accAdd(arg1, arg2) {
    let r1, r2, m;
    try { r1 = arg1.toString().split(".")[1].length } catch (e) { r1 = 0 }
    try { r2 = arg2.toString().split(".")[1].length } catch (e) { r2 = 0 }
    m = Math.pow(10, Math.max(r1, r2))
    return (arg1 * m + arg2 * m) / m
  }
  //减法
  accSubtr(arg1, arg2) {
    let r1, r2, m, n;
    try { r1 = arg1.toString().split(".")[1].length } catch (e) { r1 = 0 }
    try { r2 = arg2.toString().split(".")[1].length } catch (e) { r2 = 0 }
    m = Math.pow(10, Math.max(r1, r2));
    n = (r1 >= r2) ? r1 : r2;
    return ((arg1 * m - arg2 * m) / m).toFixed(n);
  }

}
