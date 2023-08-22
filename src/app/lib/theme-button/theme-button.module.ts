import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ModeStorageService, MODE_STORAGE_SERVICE } from "src/app/services/mode-storage.service";
import { ThemeButtonComponent } from "src/app/lib/theme-button/theme-button.component";
import { ModeToggleService } from "src/app/services/mode-toggle.service";

@NgModule({
    declarations: [ThemeButtonComponent],
    providers: [
        ModeToggleService,
        {
            provide: MODE_STORAGE_SERVICE,
            useClass: ModeStorageService
        },
    ],
    imports: [
        CommonModule
    ],
    exports: [ThemeButtonComponent]
})
export class ThemeButtonModule{}