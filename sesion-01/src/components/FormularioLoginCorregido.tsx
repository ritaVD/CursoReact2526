import React, { useState } from 'react'
import Boton from './Boton'

interface Credenciales{
    email: string,
    password: string,
}
const FormularioLoginCorregido = () => {
    //hooks
    const [credenciales, setCredenciales] = useState<Credenciales>({
        email: "",
        password: "",
    })
    const [errores, setErrores] = useState({email:"", password:""})
    const [showPassword, setShowPassword] = useState(false) 

    //efectos 
    //funciones
    
    const emailValido = (email:string): boolean =>{
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
        return regex.test(email)  
    }
    const validarFormulario = ():boolean => {
        if(!credenciales.email.trim()){
            setErrores(({...errores, email: "El email es obligatorio" }))
            return false;
        }else if (!emailValido(credenciales.email)){
            setErrores(({...errores, email: "Email no es valido"}))
            return false
        }
        if(!credenciales.password.trim()){
            setErrores(({...errores, password: "La contraseña es obligatoria"}))
            return false;
        }else if (credenciales.password.length < 6){
            setErrores(({...errores, password: "La contraseña debe tener al menos 6 caracteres"}))  
            return false;
        }
        return true;
    } 
    function handleSubmit (e: React.FormEvent) {
        e.preventDefault()
    }
    return (
    <div className="max-w-md mx-auto p-6 bg-amber-100 rounded-lg shadow">
      <h2 className="text-2xl font-bold mb-6 text-center">
        Login
      </h2>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-sm font-medium mb-1">Email:</label>
          <input
            type="email"
            className="w-full px-3 py-2 border rounded focus:outline-none focus:ring-4"
            placeholder="tu@gmail.com"
            value={credenciales.email}
            onChange={(e) =>
              setCredenciales({ ...credenciales, email: e.target.value })
            }
          />
        </div>

        <div>
          <label className="block text-sm font-medium mb-1">Password:</label>
          <input
            type={showPassword ? "text" : "password"}
            className="w-full px-3 py-2 border rounded focus:outline-none focus:ring-4"
            placeholder="Introduzca contraseña"
            value={credenciales.password}
            onChange={(e) =>
              setCredenciales({ ...credenciales, password: e.target.value })
            }
          />
        </div>

        <div className="space-y-2">
          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            className="w-full border px-4 py-2 rounded"
          >
            {showPassword ? "Ocultar password" : "Mostrar password"}
          </button>

          {/* Si quieres usar tu componente Boton, que sea submit o que llame a handleSubmit bien */}
          <Boton tipo="Primary" onClick={()=>handleSubmit} texto="Enviar" submit={true} />

          {/* Si no quieres el Boton, deja solo este submit (pero no ambos) */}
          {/* <button type="submit" className="w-full bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition-colors">
            Enviar
          </button> */}
        </div>
      </form>
    </div>
  )
}

//Crear un componente llamado botón que le pase como props un texto, el tipo de boton y el evento onClick.
//El tipo de boton lo llamare tipoBoton y sera de tipo Type con las opciones de Primary, Secondary y Danger

//Si es primary sera un bg-blue-500 y cuando me ponga encima hoover azul-700 
//Si es Secondary tendra un bg-gray-500 y hoover gray-700
// Si es danger red-500 y red-700

//Todos tendran texto blanco de letra 
//<Boton tipo=primary onClick=handleSubmit texto=enviar submit= 
export default FormularioLoginCorregido