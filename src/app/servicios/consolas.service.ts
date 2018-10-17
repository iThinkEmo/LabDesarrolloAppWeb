// probar que nuestra implementación de servicio es correcta

import { Injectable } from '@angular/core';
@Injectable()
export class ConsolasService {
  // Variable de objetos JSON tipo Consola
  private consolas: Consola[] = [
    {
      nombre: "PC Master Race",
      descripcion: "Juegos para PC",
      caracteristicas: "Texto y listado de las características de la consola PC Master Race...",
      imagen: "assets/pcmr.jpg",
      juegos: [
        {
          imagen: "assets/rust.jpg",
          nombre: "Rust",
          developer: "Facepunch Studios",
          lanzamiento: "February 8, 2018"
        },
        {
          imagen: "assets/empires.jpg",
          nombre: "Age of Empires: Definitive Edition",
          developer: "Forgotten Empires",
          lanzamiento: "February 20, 2018"
        },
        {
          imagen: "assets/dauntless.jpg",
          nombre: "Dauntless",
          developer: "Phoenix Labs",
          lanzamiento: "May 24, 2018"
        }
      ]
    },
    {
      nombre: "Playstation 4",
      descripcion: "Juegos para PS4",
      caracteristicas: "PlayStation 4 (PS4) is a line of eighth-generation home video game consoles developed by Sony Interactive Entertainment. Announced as the successor to the PlayStation 3 during a press conference on February 20, 2013, it was launched on November 15 in North America, November 29 in Europe, South America and Australia; and February 22, 2014, in Japan. It competes with Nintendo's Wii U and Switch, and Microsoft's Xbox One.",
      imagen: "assets/ps4.jpg",
      juegos: [
        {
          imagen: "assets/spiderman.jpg",
          nombre: "Marvel's Spider-Man",
          developer: "Insomniac Games",
          lanzamiento: "September 7, 2018"
        },
        {
          imagen: "assets/alienation.jpg",
          nombre: "Alienation",
          developer: "Housemarque",
          lanzamiento: "April 26, 2016"
        },
        {
          imagen: "assets/rapture.jpeg",
          nombre: "Everybody's Gone To The Rapture",
          developer: "The Chinese Room, SIE Santa Monica Studio",
          lanzamiento: "August 11, 2015"
        }
      ]
    },
    {
      nombre: "Xbox One",
      descripcion: "Juegos para Xbox One",
      caracteristicas: "Texto y listado de las características de la consola Xbox One...",
      imagen: "assets/xboxone.jpg",
      juegos: [
        {
          imagen: "assets/rock.jpg",
          nombre: "Deep Rock Galactic",
          developer: "Ghost Ship Games",
          lanzamiento: "February 28, 2018"
        },
        {
          imagen: "assets/thieves.jpg",
          nombre: "Sea of Thieves",
          developer: "Rare",
          lanzamiento: "March 20, 2018"
        },
        {
          imagen: "assets/horizon.jpg",
          nombre: "Forza Horizon 4",
          developer: "Playground Games",
          lanzamiento: "September 28, 2018"
        }
      ]
    },
    {
      nombre: "Nintendo Switch",
      descripcion: "Juegos para Nintendo Switch",
      caracteristicas: "Texto y listado de las características de la consola Nintendo Switch...",
      imagen: "assets/nswitch.jpg",
      juegos:[
        {
          imagen: "assets/kirby.jpg",
          nombre: "Kirby Star Allies",
          developer: "HAL Laboratory",
          lanzamiento: "March 16, 2018"
        },
        {
          imagen: "assets/labo.jpg",
          nombre: "Nintendo Labo",
          developer: "Nintendo",
          lanzamiento: "April 20, 2018"
        },
        {
          imagen: "assets/tenis.jpg",
          nombre: "Mario Tennis Aces",
          developer: "Camelot",
          lanzamiento: "June 22, 2018"
        }
      ]
    }
  ];
  constructor() {
    console.log("ConsolasService Creado...");
  }

  obtieneConsolas(): Consola[] {
    return this.consolas;
  }

  obtieneConsola(id: string) {
    return this.consolas[id];
  }

  // Se manda el id de la consola en específico
  // para regresar su arreglo de juegos
  obtieneJuegos(id: string): Juego[] {
    return this.consolas[id]['juegos'];
  }

  obtieneJuego(id_consola: string, id_juego: string): Juego{
    return this.consolas[id_consola].juegos[id_juego];
  }

}

// Declaración de la interfaz --> me dice que cualquier objeto Consola debe tener esto
export interface Consola {
  nombre: string;
  descripcion: string;
  caracteristicas: string;
  imagen: string;
  juegos: Juego[];
}

export interface Juego {
  imagen: string;
  nombre: string;
  developer: string;
  lanzamiento: string;
}
