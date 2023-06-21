import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AproposComponent } from './apropos/apropos.component';
import { MenuComponent } from './menu/menu.component';
import { FooterComponent } from './footer/footer.component';
import { ListeComponent } from './liste/liste.component';
import { FormsModule } from '@angular/forms';
import { EtudiantComponent } from './etudiant/etudiant.component';
import { EtudiantsComponent } from './etudiants/etudiants.component';
import { AccueilComponent } from './accueil/accueil.component';
import { AjoutComponent } from './ajout/ajout.component';

@NgModule({
  declarations: [
    AppComponent,
    AproposComponent,
    MenuComponent,
    FooterComponent,
    ListeComponent,
    EtudiantComponent,
    EtudiantsComponent,
    AccueilComponent,
    AjoutComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
