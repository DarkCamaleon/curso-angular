// 1. Definición del decorador de clase:
//    - Esta función recibe el constructor de una clase.
//    - Retorna una nueva clase que extiende la original y agrega dos propiedades nuevas.
function classDecorator<T extends { new (...args:any[]): {} }>(
  constructor: T
) {
  // Retorna una clase anónima que extiende la clase original.
  return class extends constructor {
      newProperty = 'New Property'; // Nueva propiedad agregada por el decorador.
      hello = 'override';           // Otra propiedad agregada por el decorador.
  }
}

// 2. Aplicación del decorador a la clase SuperClass:
//    - El decorador modifica la clase para agregarle las nuevas propiedades.
@classDecorator
export class SuperClass {

  // 3. Definición de la clase original:
  //    - Tiene una propiedad pública y un método.
  public myProperty: string = 'Abc123';

  print() {
      console.log('Hola Mundo') // Método que imprime un mensaje en consola.
  }
}

// 4. Impresión en consola:
//    - Se imprime la referencia a la clase decorada.
console.log( SuperClass );

//    - Se crea una instancia de la clase y se imprime.
//    - La instancia tendrá tanto las propiedades originales como las agregadas por el decorador.
const myClass = new SuperClass();
console.log( myClass );