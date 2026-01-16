import React from 'react'
import type { Plato } from '../utils/api'

interface PlatoCardProps{
    plato: Plato
}
const PlatosCard = ({ plato }: PlatoCardProps) => {
  return (
    <div>
        <div>
            <img src= {`https://192.168.50.120:1492${plato.imagen}`} alt= {`{PlatosCard.nombre}`} />
            <div>
                {plato.nombre}
            </div>
        </div>
    </div>
  )
}

export default PlatosCard;