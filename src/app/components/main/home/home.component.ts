import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.sass']
})
export class HomeComponent {

  public messageWelcome: string;

  constructor() {
    this.messageWelcome = "Siempre me ha gustado aprender sobre tecnología y el desarrollo web me ha"+
    "permitido crear proyectos que sean útiles, atractivos y funcionales. En este sitio, compartiré mis proyectos"+ 
    "personales, que son una excelente manera de practicar mis habilidades.";
  }

  ngOnInit(): void {
    window.scrollTo(0, 0);
  }

}
