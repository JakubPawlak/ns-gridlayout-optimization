import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptCommonModule } from "nativescript-angular/common";

import { OptimizedLayoutComponent } from "./optimized-layout.component";

@NgModule({
    imports: [
        NativeScriptCommonModule
    ],
    declarations: [
        OptimizedLayoutComponent
    ],
    exports: [
        OptimizedLayoutComponent
    ],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})
export class OptimizedLayoutModule { }
