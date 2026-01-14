import React, { useState } from 'react'

//Crear un ofmrulario llamado formularioUsuario que gestione el nombre, edad y email de los usuarios 

interface Usuario {
    nombre: string,
    edad: number,
    email: string,
}
export const FormularioUsuario = () => {
    const [usuario, setUsuario] = useState<Usuario>({nombre: "", edad:0, email:""})
    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

    }
    const actualizarCampo = (campo:keyof Usuario, valor: string | number) => {
        setUsuario({
            ...usuario,
            [campo]: valor
        })
    }
  return (
    // Formulario de datos
    <div className='max-w-md mx-auto p-6 bg-white rounded-xl shadow'>
        <h3 className='text-xl font-bold mb-4'>
            Registro de usuarios
        </h3>
        <form onSubmit={handleSubmit} className='space-y-4'>
            <div>
                <label className='block text-sm font-medium mb-2'> Nombre</label>
                <input onChange = {(e) =>{
                    actualizarCampo('nombre', e.target.value)
                }} type='text'  value= {usuario.nombre}className='w-full px-3 py-2 border border-gray-400 rounded docus:outline-none focus:ring-blue-500'> 
                </input>
            </div>
            <div>
                <label className='block text-sm font-medium mb-2'> Edad </label>
                <input onChange = {(e) =>{
                    actualizarCampo('edad', parseInt(e.target.value))
                }} type='number'  value= {usuario.edad}className='w-full px-3 py-2 border border-gray-400 rounded docus:outline-none focus:ring-blue-500'> 
             
                </input>
            </div>
            <div>
                <label className='block text-sm font-medium mb-2'> Email</label>
                <input  onChange = {(e) =>{
                    actualizarCampo('email', e.target.value)
                }} type='email' value= {usuario.email} className='w-full px-3 py-2 border border-gray-400 rounded docus:outline-none focus:ring-blue-500'> 
            
                </input>
            </div>
            <button type='submit' className='w-full bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition-colors'>
                Registrar
            </button>
            <div className = 'mt-6 mb-6 p-4 bg-gray-200 rounded'>
                <h4 className='font-semibold mb-2'> Datos Actuales: </h4>
                <pre className='test-sm ' >
                    {JSON.stringify(usuario)}
                </pre>

            </div>
        </form>
  
    </div>  
  )
}

export default FormularioUsuario;

//Crea un componente que gestione una lista de contactos el usuario debe poder agregar y eliminar contactos para ello los requisitos son: 
/*
-Crear una interfaz llamada contacto con el id, nombre, telefono y email
-Debe tener un formulario con 3 inputs nombre, tlf, email
-Boton para agregar el contacto
-Una lista para mostrar todos los contacos
-Boton eliminat contacto
-Funcionalidades:
- Agregar contacto a la lista (generar un id automatico con una libreria npm)
- Eliminar contacto de la lista por su id
- Limpiar el formulaio despues de agregar
- Mostrar un mensaje si la lista de contactos esta vacia


*/

// Crear un formualrio de login con validacion basica
/* 
Debe tener dos campos email y password
Hay qeu validar que los campos no esten vacios
Con alguna expresion regular que el formato del email sea correcto
Hay que mostrar/ocultar la password con un boton 
Hay que mostrar mensajes de error personalizados
*/