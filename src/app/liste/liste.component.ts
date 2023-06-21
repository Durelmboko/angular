import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-liste',
  templateUrl: './liste.component.html',
  styleUrls: ['./liste.component.css']
})

export class ListeComponent implements OnInit {

  listes:string[] = []  ;
  condition:boolean =false
  item:string=''
  constructor() { }
  ajouter():void{
    this.listes.push(this.item);
    this.item="";
  }
  supprimer():void{
    this.listes.pop();
  }
  delete(element:string){
    let i=this.listes.indexOf(element)
    this.listes.splice(i,1)
    console.log(element,"",i)
  }
  toggle(){
    this.condition=!this.condition
    console.log('dfghjjk')
  }
  ngOnInit(): void {
  }

}

