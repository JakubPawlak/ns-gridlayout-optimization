import {NgModule, NO_ERRORS_SCHEMA} from "@angular/core";
import {NativeScriptCommonModule} from "nativescript-angular/common";

import {HomeComponent} from "~/home/home.component";
import {HomeRoutingModule} from "~/home/home-routing.module";
import {UnoptimizedLayoutModule} from "~/unoptimized/unoptimized-layout.module";
import {OptimizedLayoutModule} from "~/optimized/optimized-layout.module";

@NgModule({
    imports: [
        NativeScriptCommonModule,
        HomeRoutingModule,
        UnoptimizedLayoutModule,
        OptimizedLayoutModule
    ],
    declarations: [
        HomeComponent
    ],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})
export class HomeModule {
}
