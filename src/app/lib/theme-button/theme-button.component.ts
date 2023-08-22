import { Component } from '@angular/core';
import { ModeToggleService } from 'src/app/services/mode-toggle.service';

@Component({
  selector: 'app-theme-button',
  templateUrl: './theme-button.component.html',
  styleUrls: ['./theme-button.component.sass']
})
export class ThemeButtonComponent {

  constructor(private modeToggleService: ModeToggleService){ }

  toggle() {
    this.modeToggleService.toggleMode();
  }
}
