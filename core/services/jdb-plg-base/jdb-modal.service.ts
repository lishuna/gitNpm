import { Injectable, ComponentFactoryResolver, ComponentRef, EmbeddedViewRef, Type, ViewContainerRef } from '@angular/core';
import { JdbPlgNewDialogComponent } from '../../components/jdb-plg-new-dialog/jdb-plg-new-dialog.component';

export interface Options {
    /**
     * 自定义父容器类，可选
     */
    customClass?: string;
    /**
     * 自定义遮罩类，可选
     */
    maskClass?: string;
    /**
     * 自定义模态框主体样式，可选
     */
    bodyStyle?: any;
    /**
     * 控制模态框显示/隐藏
     * true隐藏 fasle显示
     * 可选
     */
    visible?: boolean;
    /**
     * 弹框标题，可选
     */
    title?: string;

    /**
     * 是否显示右上角关闭按钮，默认显示
     * true隐藏 false不显示
     * 可选
     */
    closeable?: boolean;
    /**
     * 模态框内容模板，必选
     */
    component?: Type<any>;
    /**
     * 默认内容为文本
     * 组件模板component和文本模板同时配置
     * 优先显示组件模板
     */
    text?:string;
    /**
     * 当默认内容为文本时，设置文本的类名
    */
    class?:string;
    /**
     * 当默认内容为文本时，设置文本的样式
     * class和style同时配置
     * 优先显示style
    */
    style?:Object;
    /**
     * 模板参数
     */
    componentParams?:Object;
    /**
     * 模态框宽度
     * 默认400px
     */
    width?: number;
    /**
     * 是否显示/隐藏底部按钮，默认显示
     * true显示 false隐藏
     */
    footer?: boolean;
    /**
     * 是否是确认模态框，默认不是
     * true是 false不是
     */
    isConfirm?: boolean;
    /**
     * 确认按钮文案
     */
    okText?: string;
    /**
     * 取消按钮文案
     */
    cancelText?: string;
    /**
     * 自定义弹框关闭类型，默认为mask
     * mask:点击除模态框区域以外的位置关闭模态框
     * custom:自主触发关闭操作
     * 可选
     */
    closeType?: string;
    /**
     * 视图容器
     * 必选
     */
    container:ViewContainerRef;
    /**
     * 监听右上角关闭事件，默认为关闭模态框，没有额外的动作
     * 可选
     */
    onClose?: () => void;
    /**
     * 监听确认事件，默认为关闭模态框，没有额外的动作
     * 可选
     */
    onOk?: () => void;
    /**
     * 监听取消事件，默认为关闭模态框，没有额外的动作
     * 可选
     */
    onCancel?: () => void;

}

@Injectable()
export class JdbModalService {
    componentRef: ComponentRef<JdbPlgNewDialogComponent>;
    _componentRefList = [];
    _options: Options = {
        customClass: '',
        maskClass: '',
        bodyStyle: null,
        visible: false,
        title: '',
        closeable: true,
        component: null,
        text:'',
        componentParams:{},
        width: null,
        footer: true,
        container:null,
        isConfirm: false,
        okText: '',
        cancelText: '',
        class:'',
        style:null,
        onClose: () => {
            this.destroy();
        },
        onOk: () => {
            this.destroy();
        },
        onCancel: () => {
            this.destroy();
        }
    }
    constructor(
        private componentFactoryResolver: ComponentFactoryResolver
    ) { 


    }

    //动态创建模态框,返回模态框实例
    create(options: Options): ComponentRef<JdbPlgNewDialogComponent> {
        this._options = {
            customClass: '',
            maskClass: '',
            bodyStyle: null,
            visible: false,
            title: '',
            closeable: true,
            component: null,
            text:'',
            componentParams:{},
            width: null,
            footer: true,
            container:null,
            isConfirm: false,
            okText: '',
            cancelText: '',
            class:'',
            style:null,
            onClose: () => {
                this.destroy();
            },
            onOk: () => {
                this.destroy();
            },
            onCancel: () => {
                this.destroy();
            }
        }
        let componentFactory = this.componentFactoryResolver.resolveComponentFactory(JdbPlgNewDialogComponent);
        let componentRef = options.container.createComponent(componentFactory);
        this._componentRefList.push(componentRef);
        //assign配置
        if (options) {
            Object.assign(this._options, options);
        }
        this.assignProps(componentRef);
        //获取组件实例的根节点并append到body上
        window.document.body.appendChild((componentRef.hostView as EmbeddedViewRef<any>).rootNodes[0] as HTMLElement);
        return componentRef;
    }

    //模态框实例上添加属性
    assignProps(componentRef: ComponentRef<JdbPlgNewDialogComponent>): void {
        let _options = this._options;
        let ins = componentRef.instance;
        ins.visible = _options.visible || true;
        ins._title = _options.title || '提示';
        ins._width = _options.width ? `${_options.width}px` : '400px';
        ins._state = 'showM';
        ins._contentTpl = _options.component;
        ins._componentParams = _options.componentParams;
        ins._customClass = _options.customClass;
        ins._maskClass = _options.maskClass;
        ins._isConfirm = _options.isConfirm;
        ins._okText = _options.okText || '确认';
        ins._cancelText = _options.cancelText || '取消';
        ins._footer = _options.footer;
        ins._closeable = _options.closeable;
        ins._closeType = _options.closeType || 'mask';
        ins._text = _options.text || 'hello';
        ins._class = _options.class || 'defaultTextClass';
        ins._style = _options.style;
        ins.onClose.subscribe((e) => {
            _options.onClose();
        })
        ins.onOk.subscribe((e) => {
            _options.onOk();
        })
        ins.onCancel.subscribe((e) => {
            _options.onCancel();
        })
    }

    //销毁模态框
    destroy(): void {
        let len = this._componentRefList.length-1;
        if(this._componentRefList[len]){
            this._componentRefList[len].destroy();
        }
        this._componentRefList.pop();
    }

    //triggerOk
    triggerOk():void{
        this._options.onOk();
    }

    //triggerClose
    triggerClose():void{
        this._options.onClose();
    }

    //triggerCancel
    triggerCancel():void{
        this._options.onCancel();
    }
}

