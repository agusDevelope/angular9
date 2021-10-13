import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

   private personas = [
    {
      id:1,
      nombre: 'José Pérez',
       curp: 'JOPE910112HDFRPG00',
       rfc: 'JOPE910112',
       edad: 25
      },
    {
      id:2,
      nombre: 'Juan Escutia',
     curp: 'JAES840512HDFRPG00',
     rfc: 'JAES840512',
      edad: 35
    },
    {
      id:3,
      nombre: 'Martha Rodríguez',
    curp: 'MARO740512HDFRPG00',
    rfc: 'MARO740512',
    edad: 45},
    {
      id:4,
      nombre: 'Lisa Simpson',
    curp: 'SILA640512HDFRPG00',
    rfc: 'SILA640512',
    edad: 60},
   ];

   getAllPersons(){
     return this.personas;
   }
   getPersonsByid(id){
    return this.personas.filter((personas) => personas.id === id)
   }
}
