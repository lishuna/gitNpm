/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { Injectable, ComponentFactoryResolver } from '@angular/core';
import { JdbPlgToastComponent } from '../../components/jdb-plg-toast/jdb-plg-toast.component';
var CommonMethodService = /** @class */ (function () {
    function CommonMethodService(componentFactoryResolver) {
        this.componentFactoryResolver = componentFactoryResolver;
    }
    /*常用公共方法*/
    /*验证手机号是否合法
    * number 校验的手机号码*/
    /**
     * @param {?} number
     * @return {?}
     */
    CommonMethodService.prototype.testPhoneNumber = /**
     * @param {?} number
     * @return {?}
     */
    function (number) {
        /** @type {?} */
        var phoneReg = /^[1][0-9]{10}$/;
        return phoneReg.test(number);
    };
    /*验证姓名是否合法
     name 校验的姓名*/
    /**
     * @param {?} name
     * @return {?}
     */
    CommonMethodService.prototype.testName = /**
     * @param {?} name
     * @return {?}
     */
    function (name) {
        /** @type {?} */
        var nameReg = /^[\u4E00-\u9FA5·]{2,20}$/;
        return nameReg.test(name);
    };
    /*验证代偿金额是否为最大1亿，最小一元，只可以两位小数
    num单位为分*/
    /**
     * @param {?} num
     * @return {?}
     */
    CommonMethodService.prototype.testRepayAmount = /**
     * @param {?} num
     * @return {?}
     */
    function (num) {
        /** @type {?} */
        var nameReg = /^([1-9][0-9]{2,9}|10000000000)$/;
        return nameReg.test(num);
    };
    /*数字格式化为千位分隔
    num单位为分*/
    /**
     * @param {?} num
     * @return {?}
     */
    CommonMethodService.prototype.numFormat = /**
     * @param {?} num
     * @return {?}
     */
    function (num) {
        num = num / 100;
        return num.toFixed(2).replace(/\d{1,3}(?=(\d{3})+(\.\d*)?$)/g, '$&,');
    };
    /**
     * @method 将'yyyy-MM-dd~yyyy-MM-dd'格式，转化为startTime、endTime（10位时间戳）
     * @param value 'yyyy-MM-dd~yyyy-MM-dd'格式字符串
     */
    /**
     * \@method 将'yyyy-MM-dd~yyyy-MM-dd'格式，转化为startTime、endTime（10位时间戳）
     * @param {?} value 'yyyy-MM-dd~yyyy-MM-dd'格式字符串
     * @return {?}
     */
    CommonMethodService.prototype.toTimestamp = /**
     * \@method 将'yyyy-MM-dd~yyyy-MM-dd'格式，转化为startTime、endTime（10位时间戳）
     * @param {?} value 'yyyy-MM-dd~yyyy-MM-dd'格式字符串
     * @return {?}
     */
    function (value) {
        /** @type {?} */
        var timeObj = {};
        if (value) {
            /** @type {?} */
            var arrDate = value.split('~');
            timeObj['startTime'] = new Date(arrDate[0]).getTime() / 1000;
            timeObj['endTime'] = new Date(arrDate[1]).getTime() / 1000;
        }
        else {
            timeObj['startTime'] = '';
            timeObj['endTime'] = '';
        }
        return timeObj;
    };
    /* 将时间戳转化为不同时间格式
    * @param time必传 10位的时间戳
    * @param type选传 默认'yyyy-MM-dd HH:mm:ss'格式  type为1 'yyyy-MM-dd HH:mm:ss'; type为2 'yyyy-MM-dd HH:mm'; type为3 'yyyy-MM-dd'; type为4 'yyyy-MM'; type为5 'yyyy';
    */
    /**
     * @param {?} time
     * @param {?=} type
     * @return {?}
     */
    CommonMethodService.prototype.toDate = /**
     * @param {?} time
     * @param {?=} type
     * @return {?}
     */
    function (time, type) {
        if (type === void 0) { type = 1; }
        /** @type {?} */
        var myDate = new Date(time * 1000);
        /** @type {?} */
        var year = myDate.getFullYear();
        /** @type {?} */
        var month = this.add0(myDate.getMonth() + 1);
        /** @type {?} */
        var day = this.add0(myDate.getDate());
        /** @type {?} */
        var hour = this.add0(myDate.getHours());
        /** @type {?} */
        var minute = this.add0(myDate.getMinutes());
        /** @type {?} */
        var second = this.add0(myDate.getSeconds());
        switch (type) {
            case 1:
                return year + "-" + month + "-" + day + " " + hour + ":" + minute + ":" + second;
            case 2:
                return year + "-" + month + "-" + day + " " + hour + ":" + minute;
            case 3:
                return year + "-" + month + "-" + day;
            case 4:
                return year + "-" + month;
            case 5:
                return "" + year;
        }
    };
    /**
     * @param {?} m
     * @return {?}
     */
    CommonMethodService.prototype.add0 = /**
     * @param {?} m
     * @return {?}
     */
    function (m) {
        return m < 10 ? "0" + +m : m;
    };
    /*
      参数1: 当前日期的前/后几天，n<0是为当前日期的后几天，反之为当前日期的前几天,默认为0;
      参数2: 拼接的符号，符号'-'(2018-07-16),符号'/'(2018/07/16),默认为'-';
      参数3: 是否返回的是时间戳格式，默认是时间戳格式
      返回值: n=0时，返回当前日期的数组，否则第一个元素为当前日期，第二个元素为目标日期。
    */
    /**
     * @param {?=} n
     * @param {?=} joinStr
     * @param {?=} isTimeStamp
     * @return {?}
     */
    CommonMethodService.prototype.getTarDate = /**
     * @param {?=} n
     * @param {?=} joinStr
     * @param {?=} isTimeStamp
     * @return {?}
     */
    function (n, joinStr, isTimeStamp) {
        if (n === void 0) { n = 0; }
        if (joinStr === void 0) { joinStr = '-'; }
        if (isTimeStamp === void 0) { isTimeStamp = true; }
        /** @type {?} */
        var date = new Date();
        /** @type {?} */
        var tarYear;
        /** @type {?} */
        var tarMonth;
        /** @type {?} */
        var tarDay;
        /** @type {?} */
        var curYear;
        /** @type {?} */
        var curMonth;
        /** @type {?} */
        var curDay;
        /** @type {?} */
        var curDate;
        /** @type {?} */
        var tarDate;
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
            /** @type {?} */
            var reg = new RegExp(joinStr, "g");
            curDate = curDate.replace(reg, '-');
            tarDate = tarDate.replace(reg, '-');
        }
        return n === 0 ? [new Date(curDate + ' 00:00:00').getTime()] : [new Date(curDate + ' 00:00:00').getTime(), new Date(tarDate + ' 23:59:59').getTime()];
    };
    /**
     * @param {?} vRef
     * @return {?}
     */
    CommonMethodService.prototype.setRootViewContainerRef = /**
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
    CommonMethodService.prototype.toast = /**
     * @param {?} msg
     * @param {?=} delayTime
     * @return {?}
     */
    function (msg, delayTime) {
        if (delayTime === void 0) { delayTime = 3000; }
        /** @type {?} */
        var childComponent = this.componentFactoryResolver.resolveComponentFactory(JdbPlgToastComponent);
        /** @type {?} */
        var comInstance = this.vRef.createComponent(childComponent);
        comInstance.instance.msg = msg;
        comInstance.changeDetectorRef.detectChanges();
        setTimeout(function () {
            comInstance.destroy();
        }, delayTime);
    };
    //方式丢失精度四种算法
    //乘法
    /**
     * @param {?} arg1
     * @param {?} arg2
     * @return {?}
     */
    CommonMethodService.prototype.accMul = /**
     * @param {?} arg1
     * @param {?} arg2
     * @return {?}
     */
    function (arg1, arg2) {
        /** @type {?} */
        var m = 0;
        /** @type {?} */
        var s1 = arg1.toString();
        /** @type {?} */
        var s2 = arg2.toString();
        try {
            m += s1.split(".")[1].length;
        }
        catch (e) { }
        try {
            m += s2.split(".")[1].length;
        }
        catch (e) { }
        return Number(s1.replace(".", "")) * Number(s2.replace(".", "")) / Math.pow(10, m);
    };
    //除法
    /**
     * @param {?} arg1
     * @param {?} arg2
     * @return {?}
     */
    CommonMethodService.prototype.accDiv = /**
     * @param {?} arg1
     * @param {?} arg2
     * @return {?}
     */
    function (arg1, arg2) {
        /** @type {?} */
        var t1 = 0;
        /** @type {?} */
        var t2 = 0;
        /** @type {?} */
        var r1;
        /** @type {?} */
        var r2;
        try {
            t1 = arg1.toString().split(".")[1].length;
        }
        catch (e) { }
        try {
            t2 = arg2.toString().split(".")[1].length;
        }
        catch (e) { }
        r1 = Number(arg1.toString().replace(".", ""));
        r2 = Number(arg2.toString().replace(".", ""));
        return this.accMul((r1 / r2), Math.pow(10, t2 - t1));
    };
    //加法
    /**
     * @param {?} arg1
     * @param {?} arg2
     * @return {?}
     */
    CommonMethodService.prototype.accAdd = /**
     * @param {?} arg1
     * @param {?} arg2
     * @return {?}
     */
    function (arg1, arg2) {
        /** @type {?} */
        var r1;
        /** @type {?} */
        var r2;
        /** @type {?} */
        var m;
        try {
            r1 = arg1.toString().split(".")[1].length;
        }
        catch (e) {
            r1 = 0;
        }
        try {
            r2 = arg2.toString().split(".")[1].length;
        }
        catch (e) {
            r2 = 0;
        }
        m = Math.pow(10, Math.max(r1, r2));
        return (arg1 * m + arg2 * m) / m;
    };
    //减法
    /**
     * @param {?} arg1
     * @param {?} arg2
     * @return {?}
     */
    CommonMethodService.prototype.accSubtr = /**
     * @param {?} arg1
     * @param {?} arg2
     * @return {?}
     */
    function (arg1, arg2) {
        /** @type {?} */
        var r1;
        /** @type {?} */
        var r2;
        /** @type {?} */
        var m;
        /** @type {?} */
        var n;
        try {
            r1 = arg1.toString().split(".")[1].length;
        }
        catch (e) {
            r1 = 0;
        }
        try {
            r2 = arg2.toString().split(".")[1].length;
        }
        catch (e) {
            r2 = 0;
        }
        m = Math.pow(10, Math.max(r1, r2));
        n = (r1 >= r2) ? r1 : r2;
        return ((arg1 * m - arg2 * m) / m).toFixed(n);
    };
    CommonMethodService.decorators = [
        { type: Injectable },
    ];
    /** @nocollapse */
    CommonMethodService.ctorParameters = function () { return [
        { type: ComponentFactoryResolver }
    ]; };
    return CommonMethodService;
}());
export { CommonMethodService };
if (false) {
    /** @type {?} */
    CommonMethodService.prototype.vRef;
    /** @type {?} */
    CommonMethodService.prototype.componentFactoryResolver;
}
//# sourceMappingURL=common-method.service.js.map