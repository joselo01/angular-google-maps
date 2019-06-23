import { Injectable } from '@angular/core';
import { Marcador} from '../interfaces/marcador.interface';

@Injectable({
  providedIn: 'root'
})
export class MapasService {

  marcadores: Marcador [] = [];

  constructor() {
    const nuevoMarcador: Marcador = {
        lat: 51.678418,
        lng: 7.809007,
        titulo: 'Titulo Nuevo Marcador',
        desc: 'Nueva descripcion por marcador',
        draggable: true
    }

    this.marcadores.push(nuevoMarcador);

  }

    insertarMarcador (marcador:Marcador) {
      this.marcadores.push(marcador);
      this.guardarMarcadores();
    }

    borrarMarcador( idx:number ) {
      this.marcadores.splice(idx,1);
      this.guardarMarcadores();
    }

    guardarMarcadores() {
      localStorage.setItem('marcadores', JSON.stringify(this.marcadores))
    }

    cargarMarcadores() {
      if (localStorage.getItem('marcadores')) {
        this.marcadores = JSON.parse(localStorage.getItem('marcadores'));
      }else {
        this.marcadores = [];
      }
    }

}
