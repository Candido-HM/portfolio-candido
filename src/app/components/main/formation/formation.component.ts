import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-formation',
  templateUrl: './formation.component.html',
  styleUrls: ['./formation.component.sass']
})
export class FormationComponent implements OnInit {

  ngOnInit(): void {
    window.scrollTo(0, 0);
  }
  
}
