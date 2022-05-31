import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServicioService {
  public objetos: Array<any> =[
    {
      "nombre": "Perro",
      "apellido": "Pushy",
      "referencia": "Los Simpsons"
    },
    {
      "nombre": "Gato",
      "apellido": "Garfield",
      "referencia": "Garfield"
    }
    ]
;
  constructor() { }

  public entregarLista(){
    console.log('Mostrar lista de Objetos')
    return this.objetos;
  }
}
