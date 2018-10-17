import { Component, OnInit } from '@angular/core';
// improtar el activatedRoute para obtener los params
import { ActivatedRoute } from '@angular/router';
// importar los servicios que vamos a utilizar
import {ConsolasService, Consola, Juego} from '../../servicios/consolas.service';

@Component({
  selector: 'app-juego',
  templateUrl: './juego.component.html',
  styleUrls: ['./juego.component.css']
})

export class JuegoComponent implements OnInit {
  juego: Juego;
  idConsola: string;
  idJuego: string;

  constructor(private activatedRoute: ActivatedRoute,
    private consolasService: ConsolasService) {
      this.activatedRoute.params.subscribe(params => {
        this.idConsola = params['idConsola']
        this.idJuego = params['idJuego']
      })
    }

  ngOnInit() {
    // Setear mi variable de juegos a lo que regresa obtieneJuegos
    // dado el id de la consola en la que estamos accediendo
    this.juego = this.consolasService.obtieneJuego(this.idConsola, this.idJuego);
    console.log(this.juego);
  }

}
