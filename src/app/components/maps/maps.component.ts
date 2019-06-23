import { Component, OnInit } from '@angular/core';
import { MapasService } from '../../services/mapas.service';
import { Marcador } from '../../interfaces/marcador.interface';

@Component({
  selector: 'app-maps',
  templateUrl: './maps.component.html',
  styleUrls: ['./maps.component.css']
})
export class MapsComponent implements OnInit {

  lat = 51.678418;
  lng = 7.809007;
  zoom = 16;

  marcadorSel:any = null;
  draggable:string = "1";

  constructor( public ms: MapasService) {
    this.ms.cargarMarcadores();
   }

   
  onChoseLocation(event) {
    const nuevoMarcador: Marcador = {
      lat: event.coords.lat,
      lng: event.coords.lng,
      titulo:'Ingrese Titulo',
      desc: 'Ingrese una descripción',
      draggable: true
    }
    
    console.log(event);

    this.ms.insertarMarcador(nuevoMarcador);

  }

  clickMarcador(marcador:Marcador, i:number) {
    console.log(marcador, i);
    this.marcadorSel = marcador;

    if (this.marcadorSel.draggable) {
      this.draggable = "1";
    }else {
      this.draggable = "0";
    }
  }

  cambiarDraggable() {
    console.log(this.draggable);
    if (this.draggable == "1") {
      this.marcadorSel.draggable = true;
    }else {
      this.marcadorSel.draggable = false;
    }
  }

  dragEndMarcador( marcador:Marcador, event) {
    console.log(marcador, event);
    let lat = event.coords.lat;
    let lng = event.coords.lng;

    marcador.lat = lat;
    marcador.lng = lng;

    this.ms.guardarMarcadores();
  }

  ngOnInit() {
  }

}
