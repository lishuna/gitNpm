import { CommonMethodService } from './common-method.service';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { StatisticData } from '../../config/statistic.config';
import { SendStatisticService } from './send-statistic.service';
export declare class JdbPlgBaseService {
    private http;
    private commonService;
    private sendStatisticService;
    vRef: any;
    timer: any;
    newStatisticData: StatisticData;
    baseObj: any;
    constructor(http: HttpClient, commonService: CommonMethodService, sendStatisticService: SendStatisticService);
    setRootViewContainerRef(vRef: any): void;
    /**
     *
     * @param apiName
     * @param dataObj
     * @param isIntercept 是否拦截处理returnCode != 0 的情况
     */
    post(apiName: any, dataObj: any, options: any): Observable<any>;
    stamp2string(stamp: any): string;
    download(apiName: any, params: any): void;
    getPicSize(file: any): void;
}
