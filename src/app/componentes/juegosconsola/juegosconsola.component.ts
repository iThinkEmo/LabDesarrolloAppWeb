import { Component, OnInit } from '@angular/core';
// improtar el activatedRoute para obtener los params
import { ActivatedRoute } from '@angular/router';
// importar los servicios que vamos a utilizar
import {ConsolasService, Consola, Juego} from '../../servicios/consolas.service';

@Component({
  selector: 'app-juegosconsola',
  templateUrl: './juegosconsola.component.html',
  styleUrls: ['./juegosconsola.component.css']
})

export class JuegosconsolaComponent implements OnInit {
  juegos: Juego[] = [];
  idConsola: string;

  constructor(private activatedRoute: ActivatedRoute,
    private consolasService: ConsolasService) {
    this.activatedRoute.params.subscribe(params => {
      this.idConsola = params['id']
      console.log(this.idConsola);
    })
  }

  ngOnInit() {
    // Setear mi variable de juegos a lo que regresa obtieneJuegos
    // dado el id de la consola en la que estamos accediendo
    this.juegos = this.consolasService.obtieneJuegos(this.idConsola);
    console.log(this.juegos);
  }

}
