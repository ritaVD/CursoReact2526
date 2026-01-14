import React from 'react'

//Mande un saludo personalizado a traves de las props

//interface
interface SaludoProps {
    nombre: string,
    edad: number,
}


export const Saludo = ({nombre, edad}: SaludoProps) => {
  return (
    <div className='p-4 bg-yellow-200 rounded-lg shadow'>
        <h2 className='text-xl font-semibold'>
            Bienvenid@ {nombre}
        </h2>
        <p className='text-gray-700 font-medium'>
                Edad: {edad} años
                
        </p>
    </div>
  )
}
