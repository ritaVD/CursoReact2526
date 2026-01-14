import React from 'react'
import { Header } from './components/Header'
import { Saludo } from './components/Saludo'
import  Tarjeta from './components/Tarjeta'
import FormularioUsuario from './components/FormularioUsuario'
import FormularioLoginCorregido from './components/FormularioLoginCorregido'

export const App = () => {
  return (
    
    <div className='min-h-screen bg-gray-300'>
      <Header/>
      <main className='container bg-gray-100 mx-auto p-4'>
        <Saludo nombre="Juan" edad={30} />
        <Saludo nombre="Maria" edad={25} />
        <Saludo nombre="Pedro" edad={35} />
        <Saludo nombre="Ana" edad={28} />
      </main>
      <FormularioUsuario/>
      <div className='mt-8 grid grid-cols1 md:grid-cols-2 lg:grid-cols-4'>
        <Tarjeta title='React 19' description='Ultima version de la libreria React para JavaScript' image='https://plus.unsplash.com/premium_photo-1675873580220-049c6cf7fde4?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'/>
        <Tarjeta title='React 19' description='Ultima version de la libreria React para JavaScript' image='https://plus.unsplash.com/premium_photo-1675873580220-049c6cf7fde4?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' favorite={true}/>
        <Tarjeta title='React 19' description='Ultima version de la libreria React para JavaScript' favorite={true} />
        <Tarjeta title='React 19' description='Ultima version de la libreria React para JavaScript' image='https://plus.unsplash.com/premium_photo-1675873580220-049c6cf7fde4?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'/>

      </div>
      <FormularioLoginCorregido/> 

    </div>
    
  )
}
export default App