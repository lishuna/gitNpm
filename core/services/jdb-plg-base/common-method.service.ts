import {Injectable, ComponentFactoryResolver, ViewContainerRef} from '@angular/core';
import {JdbPlgToastComponent} from '../../components/jdb-plg-toast/jdb-plg-toast.component';

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
    const phoneReg = /^[1][3,4,5,7,8][0-9]{9}$/;
    return phoneReg.test(number);
  }


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

  // 从数组删除指定元素
  removeNodeFromArray(list, node?) {
    if (!node) {
      return list;
    }
    outFor:
    for (let i = 0, j = list.length; i < j; i++) {
      if (list[i] === node) {
        list.splice(i, 1);
        break outFor;
      }
    }
    return list;
  }

}
