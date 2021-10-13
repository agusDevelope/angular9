import { Component, OnInit } from '@angular/core';
import { Persona } from '../persona';
import { PersonaService } from '../persona.service';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})


export class TableComponent implements OnInit {

  persona:Persona [] = [];
  getPersona: any;

  constructor(private personaService: PersonaService ) { }

  ngOnInit() {
    this.getPersona();
  }


  


}
