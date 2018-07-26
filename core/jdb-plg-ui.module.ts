import { NgModule, ModuleWithProviders } from '@angular/core';
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
import { OnlyNumberDirective } from './directive/only-number.directive';
import { JdbPlgSelectComponent } from './components/jdb-plg-select/jdb-plg-select.component';
import { JdbPlgInputComponent } from './components/jdb-plg-input/jdb-plg-input.component';
//import { JdbPlgAutocompleteDirective } from './components/jdb-plg-autocomplete/jdb-plg-autocomplete.directive';
//import { JdbPlgAutocompleteComponent } from './components/jdb-plg-autocomplete/jdb-plg-autocomplete.component';
import { JdbPlgBaseService } from './services/jdb-plg-base/jdb-plg-base.service';
import { FillTableService } from './services/jdb-plg-base/fill-table.service';
import { CommonMethodService } from './services/jdb-plg-base/common-method.service';

import { JdbPlgTableErrorComponent } from './components/jdb-plg-table-error/jdb-plg-table-error.component';
import { ProvinceReformPipe } from './pipe/province-reform.pipe';
import { AmountReformPipe } from './pipe/amount-reform.pipe';


// export * from './components/jdb-plg-autocomplete/jdb-plg-autocomplete.component';
export * from './components/jdb-plg-button/jdb-plg-button.component';
export * from './components/jdb-plg-dialog/jdb-plg-dialog.component';
export * from './components/jdb-plg-input/jdb-plg-input.component';
export * from './components/jdb-plg-pagination/jdb-plg-pagination.component';
export * from './components/jdb-plg-select/jdb-plg-select.component';
export * from './components/jdb-plg-tab/jdb-tab.component';
export * from './components/jdb-plg-table-error/jdb-plg-table-error.component';
export * from './components/jdb-plg-toast/jdb-plg-toast.component';
export * from './components/picture-viewer/picture-viewer.component';
export * from './components/show-picture/show-picture.component';


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

// TODO 暴露服务方式
