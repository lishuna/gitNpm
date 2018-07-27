import { Component, OnInit, AfterViewInit,Input } from '@angular/core';

@Component({
  selector: 'app-jdb-plg-toast',
  template: `<div class="toast-wraper"> {{msg}} </div> `,
  styleUrls: ['./jdb-plg-toast.component.scss']
})
export class JdbPlgToastComponent implements OnInit {

  @Input() msg:string = "";
  constructor() {
   }

  ngOnInit() {
  }
}



