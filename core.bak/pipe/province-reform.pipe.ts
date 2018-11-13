import { Pipe,PipeTransform } from '@angular/core';

@Pipe({name:'provinceReformPipe'})
export class ProvinceReformPipe implements PipeTransform{
    transform(val:any):any{
        if(val.length === 0){
            return '';
        }
        return val.join('、');
    }
}