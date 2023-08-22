import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { LibModule } from './lib/lib.module';

// Componentes padres
import { AppComponent } from './app.component';
import { HomeComponent } from './components/main/home/home.component';
import { FormationComponent } from './components/main/formation/formation.component';
import { ExperienceComponent } from './components/main/experience/experience.component';
import { ContactComponent } from './components/main/contact/contact.component';

//Componentes hijos
import { IntroductionComponent } from './components/header/introduction/introduction.component';
import { NavbarComponent } from './components/header/navbar/navbar.component';

//Rutas
import { AppRoutesModule } from './app.routes';

@NgModule({
  declarations: [
    AppComponent,
    IntroductionComponent,
    NavbarComponent,
    HomeComponent,
    FormationComponent,
    ExperienceComponent,
    ContactComponent
  ],
  imports: [
    BrowserModule,
    AppRoutesModule,
    LibModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
