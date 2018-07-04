import { ComponentFactoryResolver } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import { Router } from '@angular/router';
export declare class JdbPlgBaseService {
    private http;
    private componentFactoryResolver;
    private route;
    vRef: any;
    constructor(http: Http, componentFactoryResolver: ComponentFactoryResolver, route: Router);
    setRootViewContainerRef(vRef: any): void;
    toast(msg: any, delayTime?: number): void;
    test(): void;
    post(apiName: any, dataObj: any, options: any): Observable<any>;
    postJSON(apiName: any, dataObj: any): Observable<any>;
    stamp2string(stamp: any): string;
    export(apiName: any, params: any): void;
    getPicSize(file: any): void;
}
