import { HttpClient } from '@angular/common/http';
// Importa HttpClient para realizar peticiones HTTP.

import { computed, effect, inject, Injectable, signal } from '@angular/core';
// Importa funciones de Angular para inyección de dependencias y gestión reactiva.

import { environment } from '@environments/environment';
// Importa las variables de entorno, como la URL base y la API key.

import type { GiphyResponde } from '../interfaces/giphy.interfaces';
// Importa la interfaz que representa la respuesta de la API de Giphy.

import { Gif } from '../interfaces/gif.interface';
// Importa la interfaz interna para los objetos Gif.

import { GifMapper } from '../mapper/gif.mapper';
// Importa el mapeador para transformar datos de Giphy a la estructura interna.

import { map, tap } from 'rxjs';
// Importa operadores de RxJS para transformar y manipular observables.


const GIF_KEY = 'gifs';

const loadFromLocalStorage = ()=>{
  const gifsFromLocalStorage = localStorage.getItem(GIF_KEY) ?? '{}';
  const gifs = JSON.parse(gifsFromLocalStorage);
  console.log(gifs);
  return gifs;
};

// @Injectable hace que el servicio esté disponible en toda la aplicación.
@Injectable({providedIn: 'root'})
export class GifService {
  // Inyecta HttpClient para hacer peticiones HTTP.
  private http = inject(HttpClient);

  // Signal reactiva que almacena los gifs en tendencia.
  trendingGifs = signal<Gif[]>([]);
  // Signal booleana que indica si se están cargando los gifs en tendencia.
  trendingGifsLoading = signal(true);

  // Signal que almacena el historial de búsquedas: cada clave es el término y el valor es un arreglo de gifs.
  searchHistory = signal<Record<string, Gif[]>>(loadFromLocalStorage());
  // Computed que obtiene las claves del historial de búsqueda.
  searchHistoryKeys = computed(() => Object.keys(this.searchHistory()));

  constructor() {
    // Al crear el servicio, carga automáticamente los gifs en tendencia.
    this.loadTrendingGifs();
   }

   saveGifsToLocalStorage = effect( () =>{
    const hisotoryString = JSON.stringify(this.searchHistory());
    localStorage.setItem('gifs' , hisotoryString);
   });

  // Método para cargar los gifs en tendencia desde la API de Giphy.
  loadTrendingGifs(){

    this.http.get<GiphyResponde>( `${ environment.giphyUrl }/gifs/trending`,
      {
        params : {
          api_key : environment.apikey,
          limit : 20,
        }
      }
    ).subscribe( (resp) => {
      // Transforma los datos recibidos a la estructura interna de Gif.
      const gifs = GifMapper.mapGiphyItemsToGifArray(resp.data);
      // Actualiza la signal con los gifs en tendencia.
      this.trendingGifs.set(gifs);
      // Marca que ya no está cargando.
      this.trendingGifsLoading.set(false);
      // Imprime los gifs en consola para depuración.
      console.log({gifs});
    });

  }

  // Método para buscar gifs por término de búsqueda.
  searchGifs ( query : string ){
    return this.http.get<GiphyResponde>(`${ environment.giphyUrl}/gifs/search`,{
      params : {
        api_key : environment.apikey,
        q : query,
        limit : 20,
      }
    }).pipe(
      // Extrae solo la propiedad data de la respuesta.
      map( ({ data })=>data),
      // Mapea los datos a la estructura interna de Gif.
      map( (items )=> GifMapper.mapGiphyItemsToGifArray( items ) ),
      // Actualiza el historial de búsqueda con los resultados.
      tap(( items ) => {
        this.searchHistory.update( ( history ) => ({
          ...history,
          [query.toLowerCase()] : items ,
        }));
      })
    );
  }

  // Método para obtener los gifs guardados en el historial por término de búsqueda.
  getHistoryGifs( query: string) : Gif[]{
    // Devuelve el arreglo de gifs asociado al término, o vacío si no existe.
    return this.searchHistory()[query] ?? [];

  }

}

// Importaciones

// Se importan módulos y funciones necesarias de Angular, RxJS y archivos propios del proyecto.
// HttpClient para hacer peticiones HTTP.
// signal, computed, inject, Injectable para la gestión reactiva y de dependencias en Angular.
// Interfaces y mapeadores para trabajar con la respuesta de la API de Giphy.
// Decorador @Injectable

// El decorador @Injectable({providedIn: 'root'}) indica que el servicio estará disponible en toda la aplicación.
// Definición de la clase GifService

// Se crea la clase GifService que será el servicio encargado de gestionar los gifs.
// Propiedades principales

// http: instancia de HttpClient para hacer peticiones HTTP.
// trendingGifs: signal reactiva que almacena los gifs en tendencia.
// trendingGifsLoading: signal booleana para indicar si se están cargando los gifs en tendencia.
// searchHistory: signal que almacena el historial de búsquedas, donde cada clave es el término de búsqueda y el valor es un arreglo de gifs.
// searchHistoryKeys: computed que obtiene las claves del historial de búsqueda.
// Constructor

// Al crear la instancia del servicio, se llama a loadTrendingGifs() para cargar los gifs en tendencia automáticamente.
// Método loadTrendingGifs

// Realiza una petición HTTP GET a la API de Giphy para obtener los gifs en tendencia.
// Usa la API key y limita la respuesta a 20 gifs.
// Cuando recibe la respuesta, transforma los datos usando GifMapper, actualiza la signal trendingGifs y marca que ya no está cargando.
// Imprime los gifs en consola.
// Método searchGifs

// Recibe un término de búsqueda (query).
// Realiza una petición HTTP GET a la API de Giphy para buscar gifs relacionados con el término.
// Transforma la respuesta para obtener solo los datos relevantes y los mapea a la estructura interna.
// Actualiza el historial de búsqueda agregando el resultado bajo la clave del término buscado.
// Método getHistoryGifs

// Recibe un término de búsqueda (query).
// Devuelve el arreglo de gifs asociado a ese término en el historial, o un arreglo vacío si no existe.