import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { NgModel } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-utilisateur',
  standalone: true,
  imports: [],
  template: '<p>bonjour, {{ nom }}</p> <button (click)="supprimerUtilisateur()">Changer le nom</button>',
  

})
export class UtilisateurComponent implements OnInit {
    message ="";
@Input() nom: string = '';

@Output() supprimer = new EventEmitter<number>();

supprimerUtilisateur(){
  this.supprimer.emit(1);
}

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.nom = this.route.snapshot.paramMap.get('nom') || '';
  }
}
