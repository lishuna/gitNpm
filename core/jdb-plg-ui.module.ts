import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { JdbPlgToastComponent } from './components/jdb-plg-toast/jdb-plg-toast.component';
import { JdbTabComponent } from './components/jdb-plg-tab/jdb-tab.component';
import { ShowPictureComponent } from './components/show-picture/show-picture.component';
import { PictureViewerComponent } from './components/picture-viewer/picture-viewer.component';
import { DragDirective } from './directive/drag.directive';
import { JdbPlgPaginationComponent } from './components/jdb-plg-pagination/jdb-plg-pagination.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { JdbPlgButtonComponent } from './components/jdb-plg-button/jdb-plg-button.component';
import { JdbPlgDialogComponent } from './components/jdb-plg-dialog/jdb-plg-dialog.component';
import { JdbPlgNewDialogComponent } from './components/jdb-plg-new-dialog/jdb-plg-new-dialog.component';

import { OnlyNumberDirective } from './directive/only-number.directive';
import { WatermarkDirective } from './directive/watermark.directive';
import { JdbPlgSelectComponent } from './components/jdb-plg-select/jdb-plg-select.component';
import { JdbPlgInputComponent } from './components/jdb-plg-input/jdb-plg-input.component';
// import { JdbPlgAutocompleteDirective } from './components/jdb-plg-autocomplete/jdb-plg-autocomplete.directive';
import { JdbPlgAutocompleteComponent } from './components/jdb-plg-autocomplete/jdb-plg-autocomplete.component';
import { JdbPlgBaseService } from './services/jdb-plg-base/jdb-plg-base.service';
import { FillTableService } from './services/jdb-plg-base/fill-table.service';
import { CommonMethodService } from './services/jdb-plg-base/common-method.service';
import { SendStatisticService } from './services/jdb-plg-base/send-statistic.service';
import { JdbModalService } from './services/jdb-plg-base/jdb-modal.service';

import { JdbPlgTableErrorComponent } from './components/jdb-plg-table-error/jdb-plg-table-error.component';
import { ProvinceReformPipe } from './pipe/province-reform.pipe';
import { AmountReformPipe } from './pipe/amount-reform.pipe';
import { JdbPlgTimelineItemComponent } from './components/jdb-plg-timeline-item/jdb-plg-timeline-item.component';
import { JdbPlgSwitchComponent } from './components/jdb-plg-switch/jdb-plg-switch.component';
import { from } from 'rxjs';

const MDL_MODULES = [
  ShowPictureComponent,
  PictureViewerComponent,
  DragDirective,
  WatermarkDirective,
  JdbPlgPaginationComponent,
  JdbPlgButtonComponent,
  JdbPlgDialogComponent,
  JdbPlgNewDialogComponent,
  JdbPlgSelectComponent,
  JdbPlgInputComponent,
  JdbPlgTimelineItemComponent,
  // JdbPlgAutocompleteDirective,
  JdbPlgAutocompleteComponent,
  JdbTabComponent,
  JdbPlgTableErrorComponent,
  ProvinceReformPipe,
  AmountReformPipe,
  JdbPlgSwitchComponent
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: MDL_MODULES,
  declarations: [
    JdbPlgToastComponent,
    JdbTabComponent,
    ShowPictureComponent,
    PictureViewerComponent,
    DragDirective,
    JdbPlgPaginationComponent,
    OnlyNumberDirective,
    WatermarkDirective,
    JdbPlgSelectComponent,
    JdbPlgButtonComponent,
    JdbPlgDialogComponent,
    JdbPlgNewDialogComponent,
    JdbPlgInputComponent,
    JdbPlgTimelineItemComponent,
    // JdbPlgAutocompleteDirective,
    JdbPlgAutocompleteComponent,
    JdbPlgTableErrorComponent,
    ProvinceReformPipe,
    AmountReformPipe,
    JdbPlgSwitchComponent,
  ],
  providers: [JdbPlgBaseService, CommonMethodService, FillTableService, SendStatisticService, JdbModalService],
  entryComponents: [JdbPlgToastComponent,JdbPlgNewDialogComponent,JdbPlgDialogComponent],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ]

})
export class JdbPlgUiModule {
}

export { JdbPlgBaseService } from './services/jdb-plg-base/jdb-plg-base.service';
export { FillTableService } from './services/jdb-plg-base/fill-table.service';

export { CommonMethodService } from './services/jdb-plg-base/common-method.service';

export { SendStatisticService } from './services/jdb-plg-base/send-statistic.service';
export { JdbModalService } from './services/jdb-plg-base/jdb-modal.service';
export { jQueryLikeParamSerializer } from './services/jdb-plg-base/query-string';
