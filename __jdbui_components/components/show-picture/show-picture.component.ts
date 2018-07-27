import { Component, OnInit, Input, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-show-picture',
  template: `<div> <div class="img-mask" (click)="closeModel()"> <!-- 遮罩层 --> </div> <div class="img-content"> <span class="close" (click)="closeModel()"> <img src="/assets/images/close-x.png" alt=""> </span> <img [src]="pictureUrl" alt="" style="max-height: 600px;max-width: 800px;"> </div> </div> `,
  styleUrls: ['./show-picture.component.scss']
})
export class ShowPictureComponent implements OnInit {
  @Input() pictureUrl: string;
  @Output() update = new EventEmitter<{status: boolean}>();
  constructor() { }

  ngOnInit() {

  }
  closeModel(){
    this.update.emit({status: false})
  }
}
