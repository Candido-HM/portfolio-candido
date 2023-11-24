import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass'],
  providers: []
})
export class AppComponent {
  title = 'portafolio-candido';
  currentYear: number = 0;
  constructor(){
    const year = new Date().getFullYear();
    this.currentYear = year;
  }

}
