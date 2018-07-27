import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-jdb-plg-table-error',
  template: `<div class="jdb-plg-table-error"> {{tableErrorText}} </div>`,
  styleUrls: ['./jdb-plg-table-error.component.scss']
})
export class JdbPlgTableErrorComponent implements OnInit {

  /*
    功能：实现表格报错文案水平居中
  */

  @Input() tableErrorText = '暂无数据';

  constructor() { }

  ngOnInit() {
  }

}
