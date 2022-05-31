import { Component, OnInit } from '@angular/core';
import {ServicioService} from "../../services/servicio.service";

@Component({
  selector: 'app-componente-b',
  templateUrl: './componente-b.component.html',
  styleUrls: ['./componente-b.component.scss']
})
export class ComponenteBComponent implements OnInit {
  public lista:Array<any> = [];
  constructor(private servicioServive: ServicioService) { }

  ngOnInit(): void {
    this.mostrarLista()
  }
  mostrarLista(): void {
    this.lista= this.servicioServive.entregarLista();
  }
}
