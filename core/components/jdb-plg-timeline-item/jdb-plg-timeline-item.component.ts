import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-jdb-plg-timeline-item',
  templateUrl: './jdb-plg-timeline-item.component.html',
  // styleUrls: ['./jdb-plg-timeline-item.component.scss']
})
export class JdbPlgTimelineItemComponent implements OnInit {

  constructor() { }

  isLast: boolean;
  optTime = 0;
  @Input() cardBoxWidth;
  @Input() cardBgc;

  @Input()
  get timeNum() {
    return this.optTime;
  }
  set timeNum(time) {
    if (!time) {
      time = 0;
    }
    this.optTime = time;
  }
  @Input()
  get lastItem() {
    return this.isLast;
  }
  set lastItem(item) {
    this.isLast = item;
  }
  ngOnInit() {
  }

}
