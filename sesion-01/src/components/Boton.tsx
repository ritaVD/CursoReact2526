import React from 'react'
type TipoBoton = 'Primary' | 'Secondary' | 'Danger'
interface BotonProps {
    texto: string,
    tipo: TipoBoton,
    submit: boolean,
    onClick?: () => void,

}
const Boton = ({ texto, tipo, submit, onClick }: BotonProps) => {

    const estilos = {
        Primary: 'bg-blue-500 hover:bg-blue-700 text-white ',
        Secondary: 'bg-gray-500 hover:bg-gray-700 text-white ',
        Danger: 'bg-red-500 hover:bg-red-700 text-white ',
    }
    return (
        <button
            type={submit ? "submit" : "button"}
            className={`px-4 py-2 rounded font-semibold shadow transition ${estilos[tipo]}`}
            onClick={onClick}
        >
            {texto}
        </button>
    )
} 

export default Boton;