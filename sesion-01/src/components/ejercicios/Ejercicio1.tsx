// crear una interfaz llamada producto que tenga id, nombre, precio, disponible y opcionalmente categoria
// implementar una fucnion llamada calcularTotal que reciba un array de tipo producto y retorne un numero  y sume todos los precios de los productos disponibles 
// crear un array de productos con al menos 3 productos diferentes 
// probar la funcion
import React from 'react'
interface Producto {
    //id: number,
    nombre: string,
    precio: number,
    disponible: boolean,
    categoria?: string,
}

function calcularTotal(productos: Producto[]): number {
    let total: number = 0;
    for (const producto of productos) {
        if (producto.disponible) {
            total += producto.precio;
        }
    }
    return total;

}

const productos: Producto[] = [
    //{ id: 1, nombre: 'Laptop', precio: 1000, disponible: true, categoria: 'Electrónica' },
    //{ id: 2, nombre: 'Teléfono', precio: 500, disponible: false },
    //{ id: 3, nombre: 'Tablet', precio: 300, disponible: true, categoria: 'Electrónica' },
];

const total = calcularTotal(productos);
console.log('Total:', total);


export const Ejercicio1 = () => {
  return (
    <div>Ejercicio1</div>
  )
}
