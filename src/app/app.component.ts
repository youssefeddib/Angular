import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { BonjourComponent } from "./bonjour/bonjour.component";
import { UtilisateurComponent } from './utilisateur/utilisateur.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [UtilisateurComponent, BonjourComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'nom-du-projet';

  AfficheID(id: number){
    console.log('ID :', id)
  }
}
