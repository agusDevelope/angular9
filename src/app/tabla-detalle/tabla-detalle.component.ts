import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService } from '../shared/data.service';

@Component({
  selector: 'app-tabla-detalle',
  templateUrl: './tabla-detalle.component.html',
  styleUrls: ['./tabla-detalle.component.css']
})
export class TablaDetalleComponent implements OnInit {
  public persona:any  = {};

  constructor(private route: ActivatedRoute, private dataSvc : DataService) { }

  ngOnInit(): void {
    const personId = this.route.snapshot.paramMap.get('id');
    this.persona = this.dataSvc.getPersonsByid(personId);

  }

}
