/*
Explicación detallada paso a paso del código, siguiendo el flujo de lectura:

1. Se define una interfaz llamada Product. Esto es como un molde que indica que cualquier objeto de tipo producto debe tener dos propiedades: una descripción (description) y un precio (price).

2. Se crea un objeto llamado phone que sigue la estructura de la interfaz Product. Tiene la descripción "Nokia A1" y un precio de 150.

3. Se crea otro objeto, tablet, también siguiendo la interfaz Product, con la descripción "iPad Air" y precio 250.

4. Se define una nueva interfaz llamada TaxCalculationOptions. Esta sirve para agrupar dos datos: el porcentaje de impuesto (tax) y un arreglo de productos (products).

5. Se declara la función TaxCalculation, que recibe un objeto con los productos y el impuesto.
   - Inicializa una variable total en 0.
   - Extrae los productos y el impuesto del objeto recibido.
   - Imprime en consola los productos y el impuesto.
   - Recorre cada producto y suma su precio al total.
   - Finalmente, retorna un arreglo con el total de la compra y el monto del impuesto calculado (total multiplicado por el porcentaje de impuesto).

6. Se crea un arreglo llamado shoppingCart que contiene los productos phone y tablet.

7. Se define el porcentaje de impuesto como 0.15 (es decir, 15%).

8. Se llama a la función TaxCalculation pasando el carrito de compras y el impuesto. El resultado (un arreglo con el total y el impuesto) se desestructura en dos variables: total y totalTaxt.

9. Se imprime en consola el total de la compra y el monto del impuesto.

10. Se exporta un objeto vacío para que el archivo sea tratado como un módulo y evitar conflictos de variables globales.
*/
// 1. Definimos la interfaz Product, que representa un producto con una descripción y un precio
export interface Product {
  description: string;
  price: number;
}

// 2. Creamos un producto llamado phone, con sus propiedades
const phone: Product = {
    description: 'Nokia A1',
    price: 300,

}

// 3. Creamos otro producto llamado tablet, también con sus propiedades
const tablet: Product = {
    description: 'iPad Air',
    price: 250.0
}

// 4. Definimos una interfaz para agrupar los datos necesarios para calcular el impuesto
//    Incluye el porcentaje de impuesto y el arreglo de productos
 interface TaxCalculationOptions {
  tax: number; // Porcentaje de impuesto a aplicar (por ejemplo, 0.15 para 15%)
  products: Product[]; // Lista de productos a los que se les aplicará el impuesto
}

// 5. Esta función recibe un objeto con productos y el impuesto, y devuelve el total y el impuesto calculado
export function taxCalculation( options : TaxCalculationOptions):[number, number]{
  let total = 0;
  // Desestructuramos el objeto recibido para obtener los productos y el impuesto
  const { products, tax } = options;
  console.log(products, tax); // Mostramos en consola los productos y el impuesto recibido

  // Recorremos cada producto y sumamos su precio al total
  products.forEach( ({price}) => {
    total += price;
  });
  // Retornamos un arreglo: el total de la compra y el monto del impuesto calculado
  return [ total , total * tax];
}

// 6. Creamos un carrito de compras con los productos definidos
const shoppingCart = [phone, tablet];
// 7. Definimos el porcentaje de impuesto a aplicar
const tax = 0.15;

// 8. Llamamos a la función TaxCalculation y desestructuramos el resultado en total y totalTaxt
const [total, totalTaxt] = taxCalculation({
  products : shoppingCart,
  tax : tax,
});

// 9. Mostramos en consola el total de la compra y el impuesto calculado
console.log('Total: ', total);
console.log('Tax: ', totalTaxt);

// 10. Exportación vacía para tratar el archivo como módulo y evitar conflictos de variables globales
// export {}