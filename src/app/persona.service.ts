import { Injectable } from '@angular/core';
import { Persona} from './persona';
import { PersonaList} from './lista-persona';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PersonaService {
  getPersonas() {
    throw new Error('Method not implemented.');
  }

  constructor() { }
  getBetsellers(): Observable<Persona[]> {
    return of(PersonaList);
  }
  getBetseller(nombre: string): Observable<Persona> {
    return of(PersonaList.find(Persona => Persona.nombre === nombre));
  }
}
