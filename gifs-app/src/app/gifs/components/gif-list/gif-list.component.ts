import {  Component, input } from '@angular/core'; // Importa Component para definir el componente y input para recibir datos externos.
import { GifListItemComponent } from './gif-list-item/gif-list-item.component'; // Importa el componente de item individual.

@Component({
  selector: 'gif-list', // Selector para usar este componente.
  imports: [GifListItemComponent], // Importa el componente de item individual.
  templateUrl: './gif-list.component.html', // Ruta de la plantilla HTML.
})
export class GifListComponent {
  // input.required asegura que este input es obligatorio y de tipo string[].
  // Esto ayuda a prevenir errores en tiempo de compilación y garantiza que siempre se reciba el dato necesario.
  // El flujo de datos continúa hacia el componente hijo (GifListItemComponent).
  gifs = input.required<string[]>();
 }
