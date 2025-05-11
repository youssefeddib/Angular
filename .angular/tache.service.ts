
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class TacheService {
  private taches: string[] = [
    'Faire les courses',
    'Étudier Angular',
    'Aller courir',
    'Lire un livre'
  ];

  constructor() {}

  getTaches(): string[] {
    return this.taches;
  }
}
