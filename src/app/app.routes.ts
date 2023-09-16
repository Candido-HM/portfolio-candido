import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { HomeComponent } from "./components/main/home/home.component";
import { FormationComponent } from "./components/main/formation/formation.component";
import { ExperienceComponent } from "./components/main/experience/experience.component";
import { ContactComponent } from "./components/main/contact/contact.component";

const routes: Routes = [
    {path: 'home', component: HomeComponent},
    {path: 'formacion', component: FormationComponent},
    {path: 'experiencia', component: ExperienceComponent},
    {path: 'contacto', component: ContactComponent},
    {path: '', pathMatch: 'full', redirectTo: 'home'},
    {path: '**', pathMatch: 'full', redirectTo: 'home'}
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutesModule{}