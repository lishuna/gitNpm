import { Pipe,PipeTransform } from '@angular/core';

@Pipe({name:'amountReformPipe'})
export class AmountReformPipe implements PipeTransform{
    transform(val:any):string{
        if(val === 0){
            return '0.00';
        }
        if(!val){
            return '';
        }
        return (val/100).toFixed(2);
    }
}