import { Component } from '@angular/core';
import { ListeTachesComponent } from './liste-taches/liste-taches.component';
import { BonjourComponent } from './bonjour/bonjour.component';
import { UtilisateurComponent } from './utilisateur/utilisateur.component';
import { CommonModule } from '@angular/common';
import { TacheService } from './tache.service';

@Component({
  selector: 'app-root',
  standalone: true, 
  imports: [ListeTachesComponent,BonjourComponent,UtilisateurComponent,CommonModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
taches: string[] = [];
constructor(private tachesevice: TacheService) {
  this.taches = this.tachesevice.getTaches();
}
AfficheID($event: number) {
throw new Error('Method not implemented.');
}
  title = 'mon-app';
}
