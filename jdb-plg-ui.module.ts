import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { JdbPlgToastComponent } from './core/components/jdb-plg-toast/jdb-plg-toast.component';
import { JdbTabComponent } from './core/components/jdb-plg-tab/jdb-tab.component';
import { ShowPictureComponent } from './core/components/show-picture/show-picture.component';
import { PictureViewerComponent } from './core/components/picture-viewer/picture-viewer.component';
import { DragDirective } from './core/directive/drag.directive';
import { JdbPlgPaginationComponent } from './core/components/jdb-plg-pagination/jdb-plg-pagination.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { JdbPlgButtonComponent } from './core/components/jdb-plg-button/jdb-plg-button.component';
import { JdbPlgDialogComponent } from './core/components/jdb-plg-dialog/jdb-plg-dialog.component';
import { OnlyNumberDirective } from './core/directive/only-number.directive';
import { JdbPlgSelectComponent } from './core/components/jdb-plg-select/jdb-plg-select.component';
import { JdbPlgInputComponent } from './core/components/jdb-plg-input/jdb-plg-input.component';
//import { JdbPlgAutocompleteDirective } from './core/components/jdb-plg-autocomplete/jdb-plg-autocomplete.directive';
//import { JdbPlgAutocompleteComponent } from './core/components/jdb-plg-autocomplete/jdb-plg-autocomplete.component';
import { JdbPlgBaseService } from './core/services/jdb-plg-base/jdb-plg-base.service';
import { FillTableService } from './core/services/jdb-plg-base/fill-table.service';
import { CommonMethodService } from './core/services/jdb-plg-base/common-method.service';

import { JdbPlgTableErrorComponent } from './core/components/jdb-plg-table-error/jdb-plg-table-error.component';
import { ProvinceReformPipe } from './core/pipe/province-reform.pipe';
import { AmountReformPipe } from './core/pipe/amount-reform.pipe';


// export * from './core/components/jdb-plg-autocomplete/jdb-plg-autocomplete.component';
export * from './core/components/jdb-plg-button/jdb-plg-button.component';
export * from './core/components/jdb-plg-dialog/jdb-plg-dialog.component';
export * from './core/components/jdb-plg-input/jdb-plg-input.component';
export * from './core/components/jdb-plg-pagination/jdb-plg-pagination.component';
export * from './core/components/jdb-plg-select/jdb-plg-select.component';
export * from './core/components/jdb-plg-tab/jdb-tab.component';
export * from './core/components/jdb-plg-table-error/jdb-plg-table-error.component';
export * from './core/components/jdb-plg-toast/jdb-plg-toast.component';
export * from './core/components/picture-viewer/picture-viewer.component';
export * from './core/components/show-picture/show-picture.component';


const MDL_MODULES = [
  ShowPictureComponent,
  PictureViewerComponent,
  DragDirective,
  JdbPlgPaginationComponent,
  JdbPlgButtonComponent,
  JdbPlgDialogComponent,
  JdbPlgSelectComponent,
  JdbPlgInputComponent,
 // JdbPlgAutocompleteDirective,
  //JdbPlgAutocompleteComponent,
  JdbTabComponent,
  JdbPlgTableErrorComponent,
  ProvinceReformPipe,
  AmountReformPipe
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
    JdbPlgSelectComponent,
    JdbPlgButtonComponent,
    JdbPlgDialogComponent,
    JdbPlgInputComponent,
    //JdbPlgAutocompleteDirective,
    //JdbPlgAutocompleteComponent,
    JdbPlgTableErrorComponent,
    ProvinceReformPipe,
    AmountReformPipe
  ],
  providers: [JdbPlgBaseService, CommonMethodService, FillTableService],
  entryComponents: [JdbPlgToastComponent]
})
export class JdbPlgUiModule { 
    /**
//    * @deprecated Use `NgZorroAntdModule` instead.
//    */
//   static forRoot(): ModuleWithProviders {
//     return {
//       ngModule: JdbPlgUiModule
//     };
//   }
}
export { JdbPlgBaseService } from './core/services/jdb-plg-base/jdb-plg-base.service';
export { FillTableService } from './core/services/jdb-plg-base/fill-table.service';
export {CommonMethodService} from './core/services/jdb-plg-base/common-method.service';

// TODO 暴露服务方式
