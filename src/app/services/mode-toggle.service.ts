import { Inject, Injectable } from "@angular/core";
import { DOCUMENT } from "@angular/common";
import { BehaviorSubject, Observable } from "rxjs";
import { ModeStorage, MODE_STORAGE_SERVICE } from "./mode-storage.service";
import { Mode } from "./mode-theme";

@Injectable({
    providedIn: 'root'
})

export class ModeToggleService {

    private currentMode: Mode = Mode.LIGHT;
    private modeChangedSubject = new BehaviorSubject(this.currentMode);

    modeChanged$: Observable<Mode>;

    constructor(
        @Inject(DOCUMENT) private document: Document,
        @Inject(MODE_STORAGE_SERVICE) private modeStorage: ModeStorage
    ){
        this.modeChanged$ = this.modeChangedSubject.asObservable();
        this.init();
    }

    private updateCurrentMode(mode: Mode){
        this.currentMode = mode;
        this.modeChangedSubject.next(this.currentMode);
        this.modeStorage.save(this.currentMode);
    }

    private init() {
        //Detectar la preferencia de modo del color del dispositivo
        const deviceMode = window.matchMedia("(prefers-color-scheme: dark)");
        let initMode = this.modeStorage.get();

        if(!initMode){
            deviceMode.matches ? (initMode = Mode.DARK) : (initMode = Mode.LIGHT);
        }
        this.updateCurrentMode(initMode);
        this.document.body.classList.add(this.currentMode);
    }

    toggleMode() {
        this.document.body.classList.toggle(Mode.LIGHT);
        this.document.body.classList.toggle(Mode.DARK);
        if(this.currentMode === Mode.LIGHT){
            this.updateCurrentMode(Mode.DARK);
        } else {
            this.updateCurrentMode(Mode.LIGHT);
        }
    }
}