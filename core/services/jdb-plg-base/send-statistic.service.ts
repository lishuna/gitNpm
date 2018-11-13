import { Injectable } from '@angular/core';
import { Subject, Observable } from 'rxjs';

@Injectable()
export class SendStatisticService {
    private emitStatistic = new Subject();
    StatisticOutPut$ = this.emitStatistic.asObservable();
    constructor() {

    }

    emitStatisticData(value) {
        if (value.length !== 0) {
            this.emitStatistic.next(value);
        }
    }
}