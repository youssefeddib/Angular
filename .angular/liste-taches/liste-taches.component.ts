import { Component } from '@angular/core';

@Component({
  selector: 'app-liste-taches',
  standalone: true, // 👈 هذا مهم
  templateUrl: './liste-taches.component.html',
  styleUrls: ['./liste-taches.component.css']
})
export class ListeTachesComponent {
  taches: string[] = [
    'Faire les courses',
    'Étudier Angular',
    'Aller courir',
    'Lire un livre'
  ];
}
