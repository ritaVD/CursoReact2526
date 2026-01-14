import React, { useState } from 'react'
// Uso de rendereizado condicional en componentes y propiedades
interface TarjetaProps {
    title: string,
    description: string,
    image?: string,
    favorite?: boolean,
}

export const Tarjeta = ({
    title,
    description,
    image,
    favorite = false
}:TarjetaProps) => {
    //Con un click la imagen tiene q cambiar de estado de favorito a sin favorito y viceversa
    const [isFavorite, setIsFavorite] = useState(favorite);
    const esFavorito = () => {
        setIsFavorite(!isFavorite);
    }
  return (

    <div onClick={esFavorito} className={`rounded-lg shadow-md p-6 ${isFavorite ? 'bg-yellow-100 border-2 border-amber-600' : 'bg-white'}`}>
        
        {/* pinto la image si existe la url */}
        {image && (  
            <img className = 'w-full h-48 object-cover rounded-md' src={image} alt={title}  />
        )}
        <h3 className='text-xl font-bold mb-2'> {title}</h3>
        <p className='text-gray-500'>{description}</p>
        {isFavorite && (
            <span > ⭐️</span>
        )}


    </div>
  )
} 
export default Tarjeta;

