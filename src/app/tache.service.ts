import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TacheService {
  getTaches() {
    return ['Faire les courses', 'Coder un composant', 'Lire un livre'];
  }
}
