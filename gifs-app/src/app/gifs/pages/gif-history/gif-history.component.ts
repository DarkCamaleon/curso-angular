import { Component, computed, inject } from '@angular/core';
// Importa el decorador Component para definir el componente y la función inject para inyección de dependencias.

import { toSignal } from '@angular/core/rxjs-interop';
// Importa toSignal, que permite convertir un observable en una signal reactiva.

import { ActivatedRoute } from '@angular/router';
// Importa ActivatedRoute, que permite acceder a los parámetros de la ruta actual.

import { map } from 'rxjs';
// Importa el operador map de RxJS para transformar los valores emitidos por un observable.

import { GifService } from '../../services/gifs.service';
import { GifListComponent } from '../../components/gif-list/gif-list.component';

@Component({
  selector: 'app-gif-history', // Define el nombre del selector para usar el componente en plantillas.
  imports: [ GifListComponent], // Aquí se pueden agregar módulos que el componente necesita importar.
  templateUrl: './gif-history.component.html', // Indica la ruta del archivo de plantilla HTML del componente.
})
export default class GifHistoryComponent {

  gifService = inject(GifService);

  // Crea una signal llamada 'query' que contiene el valor del parámetro 'query' de la ruta.
  // - inject(ActivatedRoute) obtiene la instancia de ActivatedRoute.
  // - params es un observable que emite los parámetros de la ruta.
  // - map extrae el parámetro 'query' o asigna 'no query' si no existe.
  // - toSignal convierte el observable en una signal reactiva para usar en la plantilla.
  query = toSignal( inject(ActivatedRoute).params.pipe(
    map( params => params['query'] ?? 'no query' )
  ));

  // Alternativa comentada:
  // Se podría suscribir directamente al observable de params para ejecutar código cada vez que cambien los parámetros.
  // query2 = inject(ActivatedRoute).params.subscribe(
  //   (params) => {
  //     console.log(params['query']);
  //   }
  // )

  // El componente no tiene más lógica ni métodos adicionales.

  gifsByKey = computed( () => this.gifService.getHistoryGifs(this.query()));

}