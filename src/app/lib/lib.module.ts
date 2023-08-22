import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ThemeButtonModule } from "./theme-button/theme-button.module";

@NgModule({
    declarations: [],
    imports: [CommonModule, ThemeButtonModule],
    exports: [ThemeButtonModule]
})
export class LibModule { }