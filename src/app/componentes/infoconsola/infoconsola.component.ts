import { Component, OnInit } from '@angular/core';
// Nos sirve para recuperar la funcionalidad del subscribe
// además de conocer los parámetros que nos son eviados
import { ActivatedRoute } from '@angular/router';

// importar nuestro servicio de consolasService
import { ConsolasService, Consola } from '../../servicios/consolas.service';


@Component({
  selector: 'app-infoconsola',
  templateUrl: './infoconsola.component.html',
  styleUrls: ['./infoconsola.component.css']
})
export class InfoconsolaComponent implements OnInit {

  consola: any = {};
  idConsola: string;

  constructor(private activatedRoute: ActivatedRoute,
    private consolasService: ConsolasService) {
    this.activatedRoute.params.subscribe(params => {
      console.log(params['id']);
      this.idConsola = params['id'];
    })
  }

  ngOnInit() {
    this.consola = this.consolasService.obtieneConsola(this.idConsola);
  }
}
