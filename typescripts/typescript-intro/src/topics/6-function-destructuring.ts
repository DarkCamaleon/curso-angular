// Definición de la interfaz Product para representar un producto con descripción y precio
export interface Product {
  description: string;
  price: number;
}

// Creación de un objeto phone de tipo Product
const phone: Product = {
    description: 'Nokia A1',
    price: 150.0
}

// Creación de un objeto tablet de tipo Product
const tablet: Product = {
    description: 'iPad Air',
    price: 250.0
}

// Interfaz para las opciones de cálculo de impuestos
interface TaxCalculationOptions {
  tax: number; // porcentaje de impuesto
  products: Product[]; // arreglo de productos
}

// Función que calcula el total y el impuesto a partir de un arreglo de productos y un porcentaje de impuesto
function TaxCalculation( options : TaxCalculationOptions):[number, number]{

  let total = 0;
  // Desestructuración de las opciones para obtener productos e impuesto
  const{ products, tax } = options;
  console.log(products, tax);

  // Suma el precio de cada producto al total
  products.forEach( ({price}) => {
    total += price;
  });
  // Retorna el total y el impuesto calculado
  return [ total , total * tax];

}

// Arreglo de productos que representa el carrito de compras
const shoppingCart = [phone, tablet];
// Porcentaje de impuesto
const tax = 0.15;

// Llamada a la función TaxCalculation usando desestructuración para obtener el total y el impuesto
const [total, totalTaxt] = TaxCalculation({
  products : shoppingCart,
  tax : tax,
});

// Muestra en consola el total y el impuesto
console.log('Total: ', total);
console.log('Tax: ', totalTaxt);

// Exportación vacía para evitar conflictos de variables globales
export {}