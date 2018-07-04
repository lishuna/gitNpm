import { Injectable, ComponentFactoryResolver } from '@angular/core';
@Injectable()
export class FillTableService {
    constructor() {
    }
    /*
        lines:number  表格展示的行数
        lists:Array<any>  异步获取的数据
        flag:boolean  是否在空白行栏展示操作按钮,默认取unShowOpt字段
    */
    fillTable(lines: number, lists:Array<any>, flag?:boolean) {
        lines = lines || 10;
        lists = lists || [];
        flag = flag || true;
        let aLength = lists.length;
        let mLength = lines - aLength;
        let fillObj = {unShowOpt:flag};
        let keys;
        if (aLength !== 0) {
            lists.forEach(element => {
                element.unShowOpt = !flag;
            });
            keys = Object.keys(lists[0]);
            if (keys.length !== 0) {
                keys.forEach(element => {
                    if(element !== "unShowOpt"){
                        fillObj[element] = Object.prototype.toString.call(lists[0][element]) == "[object Array]" ? [] : '';
                    }
                });
            }
        }
        if (aLength !== 0 && mLength>0) {
            for(let i=0;i<mLength;i++){
                lists.push(fillObj);
            }
        }
        return lists;
    }
}
