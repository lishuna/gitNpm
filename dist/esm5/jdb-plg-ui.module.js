/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { NgModule } from '@angular/core';
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
import { JdbPlgBaseService } from './core/services/jdb-plg-base/jdb-plg-base.service';
import { FillTableService } from './core/services/jdb-plg-base/fill-table.service';
import { CommonMethodService } from './core/services/jdb-plg-base/common-method.service';
import { JdbPlgTableErrorComponent } from './core/components/jdb-plg-table-error/jdb-plg-table-error.component';
import { ProvinceReformPipe } from './core/pipe/province-reform.pipe';
import { AmountReformPipe } from './core/pipe/amount-reform.pipe';
// export * from './core/components/jdb-plg-autocomplete/jdb-plg-autocomplete.component';
export { JdbPlgButtonComponent } from './core/components/jdb-plg-button/jdb-plg-button.component';
export { JdbPlgDialogComponent } from './core/components/jdb-plg-dialog/jdb-plg-dialog.component';
export { JdbPlgInputComponent } from './core/components/jdb-plg-input/jdb-plg-input.component';
export { JdbPlgPaginationComponent } from './core/components/jdb-plg-pagination/jdb-plg-pagination.component';
export { JdbPlgSelectComponent } from './core/components/jdb-plg-select/jdb-plg-select.component';
export { JdbTabComponent } from './core/components/jdb-plg-tab/jdb-tab.component';
export { JdbPlgTableErrorComponent } from './core/components/jdb-plg-table-error/jdb-plg-table-error.component';
export { JdbPlgToastComponent } from './core/components/jdb-plg-toast/jdb-plg-toast.component';
export { PictureViewerComponent } from './core/components/picture-viewer/picture-viewer.component';
export { ShowPictureComponent } from './core/components/show-picture/show-picture.component';
var /** @type {?} */ MDL_MODULES = [
    ShowPictureComponent,
    PictureViewerComponent,
    DragDirective,
    JdbPlgPaginationComponent,
    JdbPlgButtonComponent,
    JdbPlgDialogComponent,
    JdbPlgSelectComponent,
    JdbPlgInputComponent,
    JdbTabComponent,
    JdbPlgTableErrorComponent,
    ProvinceReformPipe,
    AmountReformPipe
];
var JdbPlgUiModule = /** @class */ (function () {
    function JdbPlgUiModule() {
    }
    JdbPlgUiModule.decorators = [
        { type: NgModule, args: [{
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
                        JdbPlgTableErrorComponent,
                        ProvinceReformPipe,
                        AmountReformPipe
                    ],
                    providers: [JdbPlgBaseService, CommonMethodService, FillTableService],
                    entryComponents: [JdbPlgToastComponent]
                },] },
    ];
    return JdbPlgUiModule;
}());
export { JdbPlgUiModule };
function JdbPlgUiModule_tsickle_Closure_declarations() {
    /** @type {!Array<{type: !Function, args: (undefined|!Array<?>)}>} */
    JdbPlgUiModule.decorators;
    /**
     * @nocollapse
     * @type {function(): !Array<(null|{type: ?, decorators: (undefined|!Array<{type: !Function, args: (undefined|!Array<?>)}>)})>}
     */
    JdbPlgUiModule.ctorParameters;
}
export { JdbPlgBaseService } from './core/services/jdb-plg-base/jdb-plg-base.service';
export { FillTableService } from './core/services/jdb-plg-base/fill-table.service';
export { CommonMethodService } from './core/services/jdb-plg-base/common-method.service';
// TODO 暴露服务方式

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiamRiLXBsZy11aS5tb2R1bGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AdGVzdC11aS9jb3JlLyIsInNvdXJjZXMiOlsiamRiLXBsZy11aS5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxRQUFRLEVBQXVCLE1BQU0sZUFBZSxDQUFDO0FBQzlELE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMvQyxPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSx5REFBeUQsQ0FBQztBQUMvRixPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0saURBQWlELENBQUM7QUFDbEYsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0sdURBQXVELENBQUM7QUFDN0YsT0FBTyxFQUFFLHNCQUFzQixFQUFFLE1BQU0sMkRBQTJELENBQUM7QUFDbkcsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLGlDQUFpQyxDQUFDO0FBQ2hFLE9BQU8sRUFBRSx5QkFBeUIsRUFBRSxNQUFNLG1FQUFtRSxDQUFDO0FBQzlHLE9BQU8sRUFBRSxXQUFXLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUNsRSxPQUFPLEVBQUUscUJBQXFCLEVBQUUsTUFBTSwyREFBMkQsQ0FBQztBQUNsRyxPQUFPLEVBQUUscUJBQXFCLEVBQUUsTUFBTSwyREFBMkQsQ0FBQztBQUNsRyxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSx3Q0FBd0MsQ0FBQztBQUM3RSxPQUFPLEVBQUUscUJBQXFCLEVBQUUsTUFBTSwyREFBMkQsQ0FBQztBQUNsRyxPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSx5REFBeUQsQ0FBQztBQUcvRixPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxtREFBbUQsQ0FBQztBQUN0RixPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxpREFBaUQsQ0FBQztBQUNuRixPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSxvREFBb0QsQ0FBQztBQUV6RixPQUFPLEVBQUUseUJBQXlCLEVBQUUsTUFBTSxxRUFBcUUsQ0FBQztBQUNoSCxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSxrQ0FBa0MsQ0FBQztBQUN0RSxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxnQ0FBZ0MsQ0FBQzs7QUFJbEUsc0NBQWMsMkRBQTJELENBQUM7QUFDMUUsc0NBQWMsMkRBQTJELENBQUM7QUFDMUUscUNBQWMseURBQXlELENBQUM7QUFDeEUsMENBQWMsbUVBQW1FLENBQUM7QUFDbEYsc0NBQWMsMkRBQTJELENBQUM7QUFDMUUsZ0NBQWMsaURBQWlELENBQUM7QUFDaEUsMENBQWMscUVBQXFFLENBQUM7QUFDcEYscUNBQWMseURBQXlELENBQUM7QUFDeEUsdUNBQWMsMkRBQTJELENBQUM7QUFDMUUscUNBQWMsdURBQXVELENBQUM7QUFHdEUscUJBQU0sV0FBVyxHQUFHO0lBQ2xCLG9CQUFvQjtJQUNwQixzQkFBc0I7SUFDdEIsYUFBYTtJQUNiLHlCQUF5QjtJQUN6QixxQkFBcUI7SUFDckIscUJBQXFCO0lBQ3JCLHFCQUFxQjtJQUNyQixvQkFBb0I7SUFHcEIsZUFBZTtJQUNmLHlCQUF5QjtJQUN6QixrQkFBa0I7SUFDbEIsZ0JBQWdCO0NBQ2pCLENBQUM7Ozs7O2dCQUNELFFBQVEsU0FBQztvQkFDUixPQUFPLEVBQUU7d0JBQ1AsWUFBWTt3QkFDWixXQUFXO3dCQUNYLG1CQUFtQjtxQkFDcEI7b0JBQ0QsT0FBTyxFQUFFLFdBQVc7b0JBQ3BCLFlBQVksRUFBRTt3QkFDWixvQkFBb0I7d0JBQ3BCLGVBQWU7d0JBQ2Ysb0JBQW9CO3dCQUNwQixzQkFBc0I7d0JBQ3RCLGFBQWE7d0JBQ2IseUJBQXlCO3dCQUN6QixtQkFBbUI7d0JBQ25CLHFCQUFxQjt3QkFDckIscUJBQXFCO3dCQUNyQixxQkFBcUI7d0JBQ3JCLG9CQUFvQjt3QkFHcEIseUJBQXlCO3dCQUN6QixrQkFBa0I7d0JBQ2xCLGdCQUFnQjtxQkFDakI7b0JBQ0QsU0FBUyxFQUFFLENBQUMsaUJBQWlCLEVBQUUsbUJBQW1CLEVBQUUsZ0JBQWdCLENBQUM7b0JBQ3JFLGVBQWUsRUFBRSxDQUFDLG9CQUFvQixDQUFDO2lCQUN4Qzs7eUJBakZEOztTQWtGYSxjQUFjOzs7Ozs7Ozs7O0FBVTNCLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLG1EQUFtRCxDQUFDO0FBQ3RGLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLGlEQUFpRCxDQUFDO0FBQ25GLE9BQU8sRUFBQyxtQkFBbUIsRUFBQyxNQUFNLG9EQUFvRCxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUsIE1vZHVsZVdpdGhQcm92aWRlcnMgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBKZGJQbGdUb2FzdENvbXBvbmVudCB9IGZyb20gJy4vY29yZS9jb21wb25lbnRzL2pkYi1wbGctdG9hc3QvamRiLXBsZy10b2FzdC5jb21wb25lbnQnO1xuaW1wb3J0IHsgSmRiVGFiQ29tcG9uZW50IH0gZnJvbSAnLi9jb3JlL2NvbXBvbmVudHMvamRiLXBsZy10YWIvamRiLXRhYi5jb21wb25lbnQnO1xuaW1wb3J0IHsgU2hvd1BpY3R1cmVDb21wb25lbnQgfSBmcm9tICcuL2NvcmUvY29tcG9uZW50cy9zaG93LXBpY3R1cmUvc2hvdy1waWN0dXJlLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBQaWN0dXJlVmlld2VyQ29tcG9uZW50IH0gZnJvbSAnLi9jb3JlL2NvbXBvbmVudHMvcGljdHVyZS12aWV3ZXIvcGljdHVyZS12aWV3ZXIuY29tcG9uZW50JztcbmltcG9ydCB7IERyYWdEaXJlY3RpdmUgfSBmcm9tICcuL2NvcmUvZGlyZWN0aXZlL2RyYWcuZGlyZWN0aXZlJztcbmltcG9ydCB7IEpkYlBsZ1BhZ2luYXRpb25Db21wb25lbnQgfSBmcm9tICcuL2NvcmUvY29tcG9uZW50cy9qZGItcGxnLXBhZ2luYXRpb24vamRiLXBsZy1wYWdpbmF0aW9uLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBGb3Jtc01vZHVsZSwgUmVhY3RpdmVGb3Jtc01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcbmltcG9ydCB7IEpkYlBsZ0J1dHRvbkNvbXBvbmVudCB9IGZyb20gJy4vY29yZS9jb21wb25lbnRzL2pkYi1wbGctYnV0dG9uL2pkYi1wbGctYnV0dG9uLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBKZGJQbGdEaWFsb2dDb21wb25lbnQgfSBmcm9tICcuL2NvcmUvY29tcG9uZW50cy9qZGItcGxnLWRpYWxvZy9qZGItcGxnLWRpYWxvZy5jb21wb25lbnQnO1xuaW1wb3J0IHsgT25seU51bWJlckRpcmVjdGl2ZSB9IGZyb20gJy4vY29yZS9kaXJlY3RpdmUvb25seS1udW1iZXIuZGlyZWN0aXZlJztcbmltcG9ydCB7IEpkYlBsZ1NlbGVjdENvbXBvbmVudCB9IGZyb20gJy4vY29yZS9jb21wb25lbnRzL2pkYi1wbGctc2VsZWN0L2pkYi1wbGctc2VsZWN0LmNvbXBvbmVudCc7XG5pbXBvcnQgeyBKZGJQbGdJbnB1dENvbXBvbmVudCB9IGZyb20gJy4vY29yZS9jb21wb25lbnRzL2pkYi1wbGctaW5wdXQvamRiLXBsZy1pbnB1dC5jb21wb25lbnQnO1xuLy9pbXBvcnQgeyBKZGJQbGdBdXRvY29tcGxldGVEaXJlY3RpdmUgfSBmcm9tICcuL2NvcmUvY29tcG9uZW50cy9qZGItcGxnLWF1dG9jb21wbGV0ZS9qZGItcGxnLWF1dG9jb21wbGV0ZS5kaXJlY3RpdmUnO1xuLy9pbXBvcnQgeyBKZGJQbGdBdXRvY29tcGxldGVDb21wb25lbnQgfSBmcm9tICcuL2NvcmUvY29tcG9uZW50cy9qZGItcGxnLWF1dG9jb21wbGV0ZS9qZGItcGxnLWF1dG9jb21wbGV0ZS5jb21wb25lbnQnO1xuaW1wb3J0IHsgSmRiUGxnQmFzZVNlcnZpY2UgfSBmcm9tICcuL2NvcmUvc2VydmljZXMvamRiLXBsZy1iYXNlL2pkYi1wbGctYmFzZS5zZXJ2aWNlJztcbmltcG9ydCB7IEZpbGxUYWJsZVNlcnZpY2UgfSBmcm9tICcuL2NvcmUvc2VydmljZXMvamRiLXBsZy1iYXNlL2ZpbGwtdGFibGUuc2VydmljZSc7XG5pbXBvcnQgeyBDb21tb25NZXRob2RTZXJ2aWNlIH0gZnJvbSAnLi9jb3JlL3NlcnZpY2VzL2pkYi1wbGctYmFzZS9jb21tb24tbWV0aG9kLnNlcnZpY2UnO1xuXG5pbXBvcnQgeyBKZGJQbGdUYWJsZUVycm9yQ29tcG9uZW50IH0gZnJvbSAnLi9jb3JlL2NvbXBvbmVudHMvamRiLXBsZy10YWJsZS1lcnJvci9qZGItcGxnLXRhYmxlLWVycm9yLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBQcm92aW5jZVJlZm9ybVBpcGUgfSBmcm9tICcuL2NvcmUvcGlwZS9wcm92aW5jZS1yZWZvcm0ucGlwZSc7XG5pbXBvcnQgeyBBbW91bnRSZWZvcm1QaXBlIH0gZnJvbSAnLi9jb3JlL3BpcGUvYW1vdW50LXJlZm9ybS5waXBlJztcblxuXG4vLyBleHBvcnQgKiBmcm9tICcuL2NvcmUvY29tcG9uZW50cy9qZGItcGxnLWF1dG9jb21wbGV0ZS9qZGItcGxnLWF1dG9jb21wbGV0ZS5jb21wb25lbnQnO1xuZXhwb3J0ICogZnJvbSAnLi9jb3JlL2NvbXBvbmVudHMvamRiLXBsZy1idXR0b24vamRiLXBsZy1idXR0b24uY29tcG9uZW50JztcbmV4cG9ydCAqIGZyb20gJy4vY29yZS9jb21wb25lbnRzL2pkYi1wbGctZGlhbG9nL2pkYi1wbGctZGlhbG9nLmNvbXBvbmVudCc7XG5leHBvcnQgKiBmcm9tICcuL2NvcmUvY29tcG9uZW50cy9qZGItcGxnLWlucHV0L2pkYi1wbGctaW5wdXQuY29tcG9uZW50JztcbmV4cG9ydCAqIGZyb20gJy4vY29yZS9jb21wb25lbnRzL2pkYi1wbGctcGFnaW5hdGlvbi9qZGItcGxnLXBhZ2luYXRpb24uY29tcG9uZW50JztcbmV4cG9ydCAqIGZyb20gJy4vY29yZS9jb21wb25lbnRzL2pkYi1wbGctc2VsZWN0L2pkYi1wbGctc2VsZWN0LmNvbXBvbmVudCc7XG5leHBvcnQgKiBmcm9tICcuL2NvcmUvY29tcG9uZW50cy9qZGItcGxnLXRhYi9qZGItdGFiLmNvbXBvbmVudCc7XG5leHBvcnQgKiBmcm9tICcuL2NvcmUvY29tcG9uZW50cy9qZGItcGxnLXRhYmxlLWVycm9yL2pkYi1wbGctdGFibGUtZXJyb3IuY29tcG9uZW50JztcbmV4cG9ydCAqIGZyb20gJy4vY29yZS9jb21wb25lbnRzL2pkYi1wbGctdG9hc3QvamRiLXBsZy10b2FzdC5jb21wb25lbnQnO1xuZXhwb3J0ICogZnJvbSAnLi9jb3JlL2NvbXBvbmVudHMvcGljdHVyZS12aWV3ZXIvcGljdHVyZS12aWV3ZXIuY29tcG9uZW50JztcbmV4cG9ydCAqIGZyb20gJy4vY29yZS9jb21wb25lbnRzL3Nob3ctcGljdHVyZS9zaG93LXBpY3R1cmUuY29tcG9uZW50JztcblxuXG5jb25zdCBNRExfTU9EVUxFUyA9IFtcbiAgU2hvd1BpY3R1cmVDb21wb25lbnQsXG4gIFBpY3R1cmVWaWV3ZXJDb21wb25lbnQsXG4gIERyYWdEaXJlY3RpdmUsXG4gIEpkYlBsZ1BhZ2luYXRpb25Db21wb25lbnQsXG4gIEpkYlBsZ0J1dHRvbkNvbXBvbmVudCxcbiAgSmRiUGxnRGlhbG9nQ29tcG9uZW50LFxuICBKZGJQbGdTZWxlY3RDb21wb25lbnQsXG4gIEpkYlBsZ0lucHV0Q29tcG9uZW50LFxuIC8vIEpkYlBsZ0F1dG9jb21wbGV0ZURpcmVjdGl2ZSxcbiAgLy9KZGJQbGdBdXRvY29tcGxldGVDb21wb25lbnQsXG4gIEpkYlRhYkNvbXBvbmVudCxcbiAgSmRiUGxnVGFibGVFcnJvckNvbXBvbmVudCxcbiAgUHJvdmluY2VSZWZvcm1QaXBlLFxuICBBbW91bnRSZWZvcm1QaXBlXG5dO1xuQE5nTW9kdWxlKHtcbiAgaW1wb3J0czogW1xuICAgIENvbW1vbk1vZHVsZSxcbiAgICBGb3Jtc01vZHVsZSxcbiAgICBSZWFjdGl2ZUZvcm1zTW9kdWxlXG4gIF0sXG4gIGV4cG9ydHM6IE1ETF9NT0RVTEVTLFxuICBkZWNsYXJhdGlvbnM6IFtcbiAgICBKZGJQbGdUb2FzdENvbXBvbmVudCxcbiAgICBKZGJUYWJDb21wb25lbnQsXG4gICAgU2hvd1BpY3R1cmVDb21wb25lbnQsXG4gICAgUGljdHVyZVZpZXdlckNvbXBvbmVudCxcbiAgICBEcmFnRGlyZWN0aXZlLFxuICAgIEpkYlBsZ1BhZ2luYXRpb25Db21wb25lbnQsXG4gICAgT25seU51bWJlckRpcmVjdGl2ZSxcbiAgICBKZGJQbGdTZWxlY3RDb21wb25lbnQsXG4gICAgSmRiUGxnQnV0dG9uQ29tcG9uZW50LFxuICAgIEpkYlBsZ0RpYWxvZ0NvbXBvbmVudCxcbiAgICBKZGJQbGdJbnB1dENvbXBvbmVudCxcbiAgICAvL0pkYlBsZ0F1dG9jb21wbGV0ZURpcmVjdGl2ZSxcbiAgICAvL0pkYlBsZ0F1dG9jb21wbGV0ZUNvbXBvbmVudCxcbiAgICBKZGJQbGdUYWJsZUVycm9yQ29tcG9uZW50LFxuICAgIFByb3ZpbmNlUmVmb3JtUGlwZSxcbiAgICBBbW91bnRSZWZvcm1QaXBlXG4gIF0sXG4gIHByb3ZpZGVyczogW0pkYlBsZ0Jhc2VTZXJ2aWNlLCBDb21tb25NZXRob2RTZXJ2aWNlLCBGaWxsVGFibGVTZXJ2aWNlXSxcbiAgZW50cnlDb21wb25lbnRzOiBbSmRiUGxnVG9hc3RDb21wb25lbnRdXG59KVxuZXhwb3J0IGNsYXNzIEpkYlBsZ1VpTW9kdWxlIHsgXG4gICAgLyoqXG4vLyAgICAqIEBkZXByZWNhdGVkIFVzZSBgTmdab3Jyb0FudGRNb2R1bGVgIGluc3RlYWQuXG4vLyAgICAqL1xuLy8gICBzdGF0aWMgZm9yUm9vdCgpOiBNb2R1bGVXaXRoUHJvdmlkZXJzIHtcbi8vICAgICByZXR1cm4ge1xuLy8gICAgICAgbmdNb2R1bGU6IEpkYlBsZ1VpTW9kdWxlXG4vLyAgICAgfTtcbi8vICAgfVxufVxuZXhwb3J0IHsgSmRiUGxnQmFzZVNlcnZpY2UgfSBmcm9tICcuL2NvcmUvc2VydmljZXMvamRiLXBsZy1iYXNlL2pkYi1wbGctYmFzZS5zZXJ2aWNlJztcbmV4cG9ydCB7IEZpbGxUYWJsZVNlcnZpY2UgfSBmcm9tICcuL2NvcmUvc2VydmljZXMvamRiLXBsZy1iYXNlL2ZpbGwtdGFibGUuc2VydmljZSc7XG5leHBvcnQge0NvbW1vbk1ldGhvZFNlcnZpY2V9IGZyb20gJy4vY29yZS9zZXJ2aWNlcy9qZGItcGxnLWJhc2UvY29tbW9uLW1ldGhvZC5zZXJ2aWNlJztcblxuLy8gVE9ETyDmmrTpnLLmnI3liqHmlrnlvI9cbiJdfQ==