import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { BonjourComponent } from "./bonjour/bonjour.component";
import { UtilisateurComponent } from './utilisateur/utilisateur.component';
import { CommonModule } from '@angular/common';
import { TacheService } from './tache.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [UtilisateurComponent, BonjourComponent,CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit{
  taches : String[] = [];
  title = 'nom-du-projet';

  AfficheID(id: number){
    console.log('ID :', id)
  }
  constructor(private tacheservice: TacheService){}
  ngOnInit(): void {
   this.taches = this.tacheservice.getTaches();
  }
  

}
