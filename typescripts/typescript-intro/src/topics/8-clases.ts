/*
Explicación detallada paso a paso del código:

1. Se define la clase Person, que representa a una persona con nombre, apellido y dirección (opcional, por defecto 'No Address'). El constructor inicializa estas propiedades. Los nombres son públicos y accesibles desde fuera, la dirección es privada.

2. Se define la clase Hero, que representa a un héroe. Su constructor recibe:
   - alterEgo: el nombre alternativo del héroe (público)
   - age: la edad del héroe (público)
   - realName: el nombre real del héroe (público)
   - person: un objeto de tipo Person asociado al héroe (público)
   El constructor inicializa estas propiedades.

3. Se crea una instancia de Person llamada ironman, con nombre 'jano' y apellido 'venegas'.

4. Se crea una instancia de Hero llamada tony, con alterEgo 'janodinenno', edad 36, nombre real 'alejandro' y asociando la persona ironman.

5. Finalmente, se imprime en consola el objeto tony, mostrando todas sus propiedades, incluyendo el objeto person que contiene los datos de la persona asociada.
*/

export class Person {

  // Constructor de la clase Person
  constructor(
    public firstName: string , // Nombre de la persona
    public lastName: string ,  // Apellido de la persona
    private address:string = 'No Address' // Dirección privada, valor por defecto
  ) {
    // Aquí se inicializan las propiedades de la persona
  }
}

// Definición de la clase Hero, que NO hereda de Person, pero recibe un objeto Person
export class Hero {

  // Constructor de la clase Hero
  constructor(
      public alterEgo: string, // Nombre alternativo del héroe
      public age: number,      // Edad del héroe
      public realName: string, // Nombre real del héroe
      public person: Person,   // Objeto de tipo Person asociado al héroe
  ) {
    // Aquí se inicializan las propiedades del héroe
  }
}

// Se crea una instancia de Person llamada ironman
const ironman = new Person('jano', 'venegas');

// Se crea una instancia de Hero llamada tony, asociando la persona ironman
const tony = new Hero('janodinenno', 36, 'alejandro', ironman);

// Se imprime en consola el objeto tony, mostrando todas sus propiedades
console.log(tony);


