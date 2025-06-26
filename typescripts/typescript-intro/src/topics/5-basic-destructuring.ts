// Definición de la interfaz AudioPlayer con sus propiedades
interface AudioPlayer {
  audioVolume: number;
  songDuration: number;
  song: string;
  details: Details;
}

// Definición de la interfaz Details para los detalles de la canción
interface Details {
  author: string;
  year: number;
}

// Creación de un objeto audioPlayer con valores específicos
const audioPlayer: AudioPlayer = {
  audioVolume: 90,
  songDuration: 36,
  song: "Mess",
  details: {
      author: 'Ed Sheeran',
      year: 2015
  }
}

// Variable local song que no se usa en la desestructuración
const song = 'New Song';

// Desestructuración del objeto audioPlayer, renombrando song a anotherSong y songDuration a duration
const { song:anotherSong, songDuration:duration, details } = audioPlayer;
// Desestructuración del objeto details para obtener el autor
const { author } = details;

// Ejemplo de desestructuración de arreglos con valor por defecto
const [ , , trunks = 'Not found' ]: string[] = ['Goku','Vegeta'];

// Imprime en consola el valor de trunks, que será 'Not found' porque no hay tercer elemento
console.error('Personaje 3:', trunks );

// Exportación vacía para convertir el archivo en un módulo y evitar conflictos de variables globales
export {};