import React from 'react';
let nombreTS: string = 'pepe';
let edadTS: number = 25;
let isAdminTS: boolean = false;
let nuloTS: null = null;
let undefineTS: undefined = undefined;

const leguajes: string[] = ['JavaScript', 'TypeScript', 'Python'];
const numeros: number[] = [1, 2, 3, 4, 5];

//array de objetos
const usuarios: {nombre: string, edad: number}[] = [
    { nombre: 'pepe', edad: 25 },
    { nombre: 'maria', edad: 30 },
    { nombre: 'juan', edad: 28 },
]

// objeto smple tipado
const persona: {nombre: string, edad: number, isAdmin: boolean} = {
    nombre: 'maria',
    edad: 25,
    isAdmin: true,
}

// si accedo a persona.apellidos <- Error, Property apellidos not exist

// ******* INTERFACES
// las interfaces son un 'contrato' que va a definir la forma que tiene un objeto
interface Usuario {
    id : number;
    nombre: string;
    email: string;
    edad?: number;  // edad es opcional, las demás obligatorias. Puede o no puede existir
    activo: boolean;
}

const usuario1: Usuario = {
    id: 1,
    nombre: 'mario',
    email: 'mario@email',
    activo: true,

    //la edad es opcional

}
const usuario2: Usuario = {
    id: 2,
    nombre: 'ana',
    email: 'ana@email',
    edad: 28,
    activo: false,
}

function sumar (a: number, b: number): number {
    return a + b;
}


function saludar(nombre:string): void{
    console.log('Bienvenido', nombre)
}

//funciones con parametros opcionales...
function crearUsuario(nombre:string, edad?:number): Usuario {
    return {
        id: Date.now(),
        nombre: nombre,
        email: nombre.toLowerCase() + '@email.com',
        edad: edad,
        activo: true,
    }
}

//uncion Types (posibles valores que puede tener una variable)
let id: string | number; // puede ser string o number
// id=true <- Error
type Tamano = 'small' | 'medium' | 'large';
let talla: Tamano = 'medium';

// ------ Cuando usar Types y cuando usar Interfaces
//Usar tyoes con primitivos y uniones
//Usar interfaces con los objetos
//Ejemplo:
type ID = string | number;
type Estado = 'cancelado' | 'completado' | 'pendiente';

interface Persona {
    nombre: string;
    edad: number;
}

interface Empleado extends Persona {
    idEmpleado: ID;
    estado: Estado;
}

const empleado1: Empleado = {
    nombre: 'Luis',
    edad: 35,
    idEmpleado: 1234,
    estado: 'completado',
}



const Recuerdo = () => {
    return (
        <div>   </div>
    );
}
export default Recuerdo;


// Ejercicio 1