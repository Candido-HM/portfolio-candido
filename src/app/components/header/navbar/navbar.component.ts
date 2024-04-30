import { Component, HostListener  } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.sass']
})
export class NavbarComponent {
  
  isFixedMenu:boolean = false;

  @HostListener('window:scroll', ['$event'])
  onWindowsScroll(event: any) {
    // Obtener la posición actual del scroll
    const scrollPosition = window.pageXOffset || document.documentElement.scrollTop || 0;

    // Si el scroll es mayor a cierta posición 
    this.isFixedMenu = scrollPosition > 0;
  }

}
