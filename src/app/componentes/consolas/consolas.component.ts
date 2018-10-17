import { Component, OnInit } from '@angular/core';
// importar el servicio que vamos a utilizar
import { ConsolasService, Consola } from '../../servicios/consolas.service';

@Component({
  selector: 'app-consolas',
  templateUrl: './consolas.component.html',
  styleUrls: ['./consolas.component.css']
})

export class ConsolasComponent implements OnInit {

  consolas: Consola[] = [];

  constructor(private consolasService: ConsolasService) { }

  ngOnInit() {
    // Setear a mi variable de consolas lo que regresa obtieneConsolas
    this.consolas = this.consolasService.obtieneConsolas();
    // Muestra en la consola del navegador la lista de consolas
    console.log(this.consolas);
  }
}
