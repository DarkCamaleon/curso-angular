// Definimos la interfaz Passenger, que representa a un pasajero
// name: nombre del pasajero (obligatorio)
// children?: arreglo de nombres de hijos (opcional)
export interface Passenger {
  name: string;
  children?: string[];
}

// Creamos un pasajero llamado Fernando, sin hijos (no se incluye la propiedad children)
const passenger1: Passenger = {
  name: 'Fernando',
}

// Creamos un pasajero llamado Melissa, con dos hijas: Natalia y Elizabeth
const passenger2: Passenger = {
  name: 'Melissa',
  children: ['Natalia','Elizabeth'],
}

// Función que recibe un pasajero y retorna la cantidad de hijos que tiene
const returnChildrenNumber = ( passenger: Passenger ): number => {

  // Usamos el operador de encadenamiento opcional (?.) para obtener la cantidad de hijos
  // Si children existe, toma su longitud; si no existe, retorna 0
  const howManyChildren = passenger.children?.length || 0;
  // Alternativa: forzar a que children existe (puede causar error si no existe)
  // const howManyChildren = passenger.children!.length;

  // Imprime el nombre del pasajero y la cantidad de hijos
  console.log( passenger.name, howManyChildren);

  // Retorna la cantidad de hijos
  return howManyChildren;
}

// Llamamos a la función con passenger1 (sin hijos), imprimirá 'Fernando 0' y retornará 0
returnChildrenNumber( passenger1 );
