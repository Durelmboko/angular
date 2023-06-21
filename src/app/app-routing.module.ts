import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccueilComponent } from './accueil/accueil.component';
import { AjoutComponent } from './ajout/ajout.component';

const routes: Routes = [
  {path: '', pathMatch: "full", redirectTo: "accueil"},
  {path: 'accueil', component:AccueilComponent},
  {path: 'ajout', component:AjoutComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
