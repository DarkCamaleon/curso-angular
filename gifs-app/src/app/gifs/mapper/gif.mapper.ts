import { Gif } from "../interfaces/gif.interface";
// Importa la interfaz Gif, que representa la estructura interna de un gif en la aplicación.

import { GiphyItem } from "../interfaces/giphy.interfaces";
// Importa la interfaz GiphyItem, que representa la estructura de un gif recibido desde la API de Giphy.

export class GifMapper {
  // Clase utilitaria para transformar objetos de la API de Giphy a la estructura interna Gif.

  // Método estático que transforma un solo objeto GiphyItem a un objeto Gif.
  static mapGiphyItemToGif(item: GiphyItem): Gif {
    return {
      id: item.id, // Copia el id del gif desde el objeto de Giphy.
      title: item.title, // Copia el título del gif.
      url: item.images.original.url, // Extrae la URL de la imagen original del gif.
    }
  }

  // Método estático que transforma un arreglo de GiphyItem a un arreglo de Gif.
  static mapGiphyItemsToGifArray(items: GiphyItem[]): Gif[] {
    // Utiliza el método map de los arreglos para transformar cada elemento usando mapGiphyItemToGif.
    return items.map(this.mapGiphyItemToGif);
  }
}