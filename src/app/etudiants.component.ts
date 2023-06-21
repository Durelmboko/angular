import { Component } from '@angular/core';

import { Etudiant } from '../etud';

@Component({
  selector: 'app-etudiants',
  templateUrl: './etudiants.component.html',
  styleUrls: ['./etudiants.component.css']
})
export class EtudiantsComponent {

  condition: boolean = false
  toggle: string = "afficher"

  nom: string = ''
  prenom: string = ''
  age: number = 0
  notes: number = 0
  indicatif: string = ''
  tel: string = ''

  element = new Etudiant('mboko', 'durel', 22, 20, '221', '765433443')

  model: Etudiant[] = [this.element];

  newEtudiant() {
    this.element = new Etudiant(this.nom, this.prenom, this.age, this.notes, this.indicatif, this.tel)
    this.model.push(this.element)
    this.nom = '',
    this.prenom = '',
    this.age = 0,
    this.notes = 0,
    this.indicatif = '',
    this.tel = ''
  }

  show() {
    this.condition = !this.condition
    this.toggle = "masquer"
  }

}
