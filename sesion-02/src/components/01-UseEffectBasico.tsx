import React, { useEffect, useState } from 'react';

const UseEffectBasico = () => {
    //hook
    const [isTabActive, setIsTabActive] = useState(true);

    //efectos
    useEffect(() => {
        //const active = document.visibilityState === 'visible';
        //setIsTabActive(active);
        //document.title = active ? "React 19 " : "🐕";


    }, [])

    //funciones

    return (
        <div className= {`p-8 rounded-3xl transition-all duration-300 border-2
        ${isTabActive ? 'bg-white border-e-sky-500 shadow-md' : 'bg-slate-50 border-slate-600 opacity-60'}`}>
            <h2 className='text-2xl font-bold text-slate-800'> La pestaña está {isTabActive ? 'activa' : 'inactiva'}</h2>
        </div>
    ) 

}
export default UseEffectBasico;