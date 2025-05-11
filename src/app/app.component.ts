import { Component } from '@angular/core';
import { ListeTachesComponent } from './liste-taches/liste-taches.component'; 

@Component({
  selector: 'app-root',
  standalone: true, 
  imports: [ListeTachesComponent], 
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'mon-app';
}
