import { Component } from '@angular/core';

@Component({
  selector: 'app-introduction',
  templateUrl: './introduction.component.html',
  styleUrls: ['./introduction.component.sass'],
  providers: []
})
export class IntroductionComponent {

  public name: string;
  public occupation: string;

  constructor(){
    this.name = '¡Hola! Soy Candido Hernandez Martin';
    this.occupation = 'Ingeniero en Informática';
  }

}
