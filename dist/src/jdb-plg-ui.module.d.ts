import { ModuleWithProviders } from '@angular/core';
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
export declare class JdbPlgUiModule {
    /**
   * @deprecated Use `NgZorroAntdModule` instead.
   */
    static forRoot(): ModuleWithProviders;
}
export { JdbPlgBaseService } from './core/services/jdb-plg-base/jdb-plg-base.service';
export { FillTableService } from './core/services/jdb-plg-base/fill-table.service';
export { CommonMethodService } from './core/services/jdb-plg-base/common-method.service';
