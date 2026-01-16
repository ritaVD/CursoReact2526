import React from 'react'
import './App.css'
import PlatosList from './components/PlatosList'

function App() {
 

  return (
    <>
      <div className='min-h-screen bg-gray-50 py-8 sm:px-6 lg:px-8'>
        <div className='max-w-7xl mx-auto'>
        <header >
          <h1 className='text-4xl font-extrabold text-slate-900 sm'>  Menu platos
            <span className='text-orange-600'> Premium </span>
          </h1>
          <p> Explora nuestra carta de platos internacionales
            <code className='text-orange-300 px-2 rounded'></code>
          </p>
        </header>
        <main>
          <PlatosList />

        </main>
      </div>
      </div>
    </>
  )
}

export default App
