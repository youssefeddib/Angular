import { Component, Input, Output, EventEmitter } from '@angular/core';
import { NgModel } from '@angular/forms';

@Component({
  selector: 'app-utilisateur',
  standalone: true,
  imports: [],
  template: '<p>bonjour, {{ nom }}</p> <button (click)="supprimerUtilisateur()">Changer le nom</button>',
  // templateUrl: './utilisateur.component.html',

})
  export class UtilisateurComponent {
@Input() nom: string = '';

@Output() supprimer = new EventEmitter<number>();

supprimerUtilisateur(){
  this.supprimer.emit(1);
}




}
