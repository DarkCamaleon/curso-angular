import { Component, signal } from '@angular/core'; // Importa Component para definir el componente y signal para crear señales reactivas.
import { GifListComponent } from '../../components/gif-list/gif-list.component'; // Importa el componente de lista de gifs.

// Las signals en Angular permiten manejar datos de forma reactiva.
// Si el array imageUrls cambiara, la vista se actualizaría automáticamente.
// Esto es útil para aplicaciones dinámicas y reactivas.
const imageUrls: string[] = [
  "https://flowbite.s3.amazonaws.com/docs/gallery/square/image.jpg",
  "https://flowbite.s3.amazonaws.com/docs/gallery/square/image-1.jpg",
  "https://flowbite.s3.amazonaws.com/docs/gallery/square/image-2.jpg",
  "https://flowbite.s3.amazonaws.com/docs/gallery/square/image-3.jpg",
  "https://flowbite.s3.amazonaws.com/docs/gallery/square/image-4.jpg",
  "https://flowbite.s3.amazonaws.com/docs/gallery/square/image-5.jpg",
  "https://flowbite.s3.amazonaws.com/docs/gallery/square/image-6.jpg",
  "https://flowbite.s3.amazonaws.com/docs/gallery/square/image-7.jpg",
  "https://flowbite.s3.amazonaws.com/docs/gallery/square/image-8.jpg",
  "https://flowbite.s3.amazonaws.com/docs/gallery/square/image-9.jpg",
  "https://flowbite.s3.amazonaws.com/docs/gallery/square/image-10.jpg",
  "https://flowbite.s3.amazonaws.com/docs/gallery/square/image-11.jpg"
];

@Component({
  selector: 'app-treding', // Nombre del selector para usar este componente en plantillas.
  imports : [GifListComponent], // Importa el componente GifListComponent para usarlo en la plantilla.
  templateUrl: './treding.component.html', // Ruta de la plantilla HTML asociada.
})
export default class TredingComponent {
  // La señal gifs contiene el array de imágenes y se pasa como input al componente hijo.
  // Esto permite un flujo de datos unidireccional y reactivo (padre → hijo).
  gifs = signal(imageUrls);
  // Buenas prácticas: separar la lógica en componentes pequeños y usar tipado estricto mejora el mantenimiento y la escalabilidad.
}
