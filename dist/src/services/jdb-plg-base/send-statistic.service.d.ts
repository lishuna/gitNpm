import { Observable } from 'rxjs';
export declare class SendStatisticService {
    private emitStatistic;
    StatisticOutPut$: Observable<{}>;
    constructor();
    emitStatisticData(value: any): void;
}
