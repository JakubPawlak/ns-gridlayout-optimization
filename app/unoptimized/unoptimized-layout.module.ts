import {NgModule, NO_ERRORS_SCHEMA} from "@angular/core";
import {NativeScriptCommonModule} from "nativescript-angular/common";

import {UnoptimizedLayoutComponent} from "./unoptimized-layout.component";

@NgModule({
    imports: [
        NativeScriptCommonModule
    ],
    declarations: [
        UnoptimizedLayoutComponent
    ],
    exports: [
        UnoptimizedLayoutComponent
    ],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})
export class UnoptimizedLayoutModule {
}
