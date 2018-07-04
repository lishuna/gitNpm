"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var common_1 = require("@angular/common");
var jdb_plg_toast_component_1 = require("./core/components/jdb-plg-toast/jdb-plg-toast.component");
var jdb_tab_component_1 = require("./core/components/jdb-plg-tab/jdb-tab.component");
var show_picture_component_1 = require("./core/components/show-picture/show-picture.component");
var picture_viewer_component_1 = require("./core/components/picture-viewer/picture-viewer.component");
var drag_directive_1 = require("./core/directive/drag.directive");
var jdb_plg_pagination_component_1 = require("./core/components/jdb-plg-pagination/jdb-plg-pagination.component");
var forms_1 = require("@angular/forms");
var jdb_plg_button_component_1 = require("./core/components/jdb-plg-button/jdb-plg-button.component");
var jdb_plg_dialog_component_1 = require("./core/components/jdb-plg-dialog/jdb-plg-dialog.component");
var only_number_directive_1 = require("./core/directive/only-number.directive");
var jdb_plg_select_component_1 = require("./core/components/jdb-plg-select/jdb-plg-select.component");
var jdb_plg_input_component_1 = require("./core/components/jdb-plg-input/jdb-plg-input.component");
var jdb_plg_base_service_1 = require("./core/services/jdb-plg-base/jdb-plg-base.service");
var fill_table_service_1 = require("./core/services/jdb-plg-base/fill-table.service");
var common_method_service_1 = require("./core/services/jdb-plg-base/common-method.service");
var jdb_plg_table_error_component_1 = require("./core/components/jdb-plg-table-error/jdb-plg-table-error.component");
var province_reform_pipe_1 = require("./core/pipe/province-reform.pipe");
var amount_reform_pipe_1 = require("./core/pipe/amount-reform.pipe");
var MDL_MODULES = [
    show_picture_component_1.ShowPictureComponent,
    picture_viewer_component_1.PictureViewerComponent,
    drag_directive_1.DragDirective,
    jdb_plg_pagination_component_1.JdbPlgPaginationComponent,
    jdb_plg_button_component_1.JdbPlgButtonComponent,
    jdb_plg_dialog_component_1.JdbPlgDialogComponent,
    jdb_plg_select_component_1.JdbPlgSelectComponent,
    jdb_plg_input_component_1.JdbPlgInputComponent,
    jdb_tab_component_1.JdbTabComponent,
    jdb_plg_table_error_component_1.JdbPlgTableErrorComponent,
    province_reform_pipe_1.ProvinceReformPipe,
    amount_reform_pipe_1.AmountReformPipe
];
var JdbPlgUiModule = (function () {
    function JdbPlgUiModule() {
    }
    JdbPlgUiModule = __decorate([
        core_1.NgModule({
            imports: [
                common_1.CommonModule,
                forms_1.FormsModule,
                forms_1.ReactiveFormsModule
            ],
            exports: MDL_MODULES,
            declarations: [
                jdb_plg_toast_component_1.JdbPlgToastComponent,
                jdb_tab_component_1.JdbTabComponent,
                show_picture_component_1.ShowPictureComponent,
                picture_viewer_component_1.PictureViewerComponent,
                drag_directive_1.DragDirective,
                jdb_plg_pagination_component_1.JdbPlgPaginationComponent,
                only_number_directive_1.OnlyNumberDirective,
                jdb_plg_select_component_1.JdbPlgSelectComponent,
                jdb_plg_button_component_1.JdbPlgButtonComponent,
                jdb_plg_dialog_component_1.JdbPlgDialogComponent,
                jdb_plg_input_component_1.JdbPlgInputComponent,
                jdb_plg_table_error_component_1.JdbPlgTableErrorComponent,
                province_reform_pipe_1.ProvinceReformPipe,
                amount_reform_pipe_1.AmountReformPipe
            ],
            providers: [jdb_plg_base_service_1.JdbPlgBaseService, common_method_service_1.CommonMethodService, fill_table_service_1.FillTableService],
            entryComponents: [jdb_plg_toast_component_1.JdbPlgToastComponent]
        })
    ], JdbPlgUiModule);
    return JdbPlgUiModule;
}());
exports.JdbPlgUiModule = JdbPlgUiModule;
var jdb_plg_base_service_2 = require("./core/services/jdb-plg-base/jdb-plg-base.service");
exports.JdbPlgBaseService = jdb_plg_base_service_2.JdbPlgBaseService;
var fill_table_service_2 = require("./core/services/jdb-plg-base/fill-table.service");
exports.FillTableService = fill_table_service_2.FillTableService;
var common_method_service_2 = require("./core/services/jdb-plg-base/common-method.service");
exports.CommonMethodService = common_method_service_2.CommonMethodService;
//# sourceMappingURL=jdb-plg-ui.module.js.map