import { Component, OnInit } from '@angular/core';
import { Persona } from '../persona';
import { PersonaService } from '../persona.service';


@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})


export class TableComponent implements OnInit {

  datos= [
    { id:1,nombre: 'José Pérez', curp: 'JOPE910112HDFRPG00', rfc: 'JOPE910112', edad: 25},
    {id:2,nombre: 'Juan Escutia', curp: 'JAES840512HDFRPG00', rfc: 'JAES840512', edad: 35},
    {id:3, nombre: 'Martha Rodríguez', curp: 'MARO740512HDFRPG00', rfc: 'MARO740512', edad: 45},
    {id:4,nombre: 'Lisa Simpson', curp: 'SILA640512HDFRPG00', rfc: 'SILA640512', edad: 60},
  ];

  constructor( ) { }

  ngOnInit() {

  }





}
