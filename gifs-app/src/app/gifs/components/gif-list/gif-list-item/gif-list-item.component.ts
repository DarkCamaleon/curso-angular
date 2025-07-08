import { Component, input } from '@angular/core'; // Importa Component y input.

@Component({
  selector: 'gif-list-item', // Selector para usar este componente.
  imports: [],
  templateUrl: './gif-list-item.component.html', // Ruta de la plantilla HTML.
})
export class GifListItemComponent {
  // input.required<string>() obliga a que siempre se reciba una URL de imagen válida.
  // Esto garantiza que el componente siempre tenga los datos necesarios para renderizar la imagen.
  imageUrl = input.required<string>();
}
