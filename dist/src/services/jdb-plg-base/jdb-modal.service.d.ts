import { ComponentFactoryResolver, ComponentRef, Type, ViewContainerRef } from '@angular/core';
import { JdbPlgDialogComponent } from '../../components/jdb-plg-dialog/jdb-plg-dialog.component';
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
    text?: string;
    /**
     * 当默认内容为文本时，设置文本的类名
    */
    class?: string;
    /**
     * 当默认内容为文本时，设置文本的样式
     * class和style同时配置
     * 优先显示style
    */
    style?: Object;
    /**
     * 模板参数
     */
    componentParams?: Object;
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
    container: ViewContainerRef;
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
export declare class JdbModalService {
    private componentFactoryResolver;
    componentRef: ComponentRef<JdbPlgDialogComponent>;
    _componentRefList: any[];
    _options: Options;
    constructor(componentFactoryResolver: ComponentFactoryResolver);
    create(options: Options): ComponentRef<JdbPlgDialogComponent>;
    assignProps(componentRef: ComponentRef<JdbPlgDialogComponent>): void;
    destroy(): void;
    triggerOk(): void;
    triggerClose(): void;
    triggerCancel(): void;
}
