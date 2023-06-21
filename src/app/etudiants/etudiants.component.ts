import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-etudiantss',
  templateUrl: './etudiants.component.html',
  styleUrls: ['./etudiants.component.css']
})
export class EtudiantsComponent implements OnInit {
  
un_etudiant:{nom: String,prenom:String,tel:{ind:number,tel:number}}=
{nom: "",prenom:"",tel:{ind:0,tel:0}}
les_etudiants:{nom:String,prenom:String}[]=[]


  constructor() {
    
   }

  ngOnInit(): void {
  }
ajouter(){
  this.les_etudiants.push(this.un_etudiant)
  this.un_etudiant={nom:"",prenom:"",tel:{ind:0,tel:0}}
}
}