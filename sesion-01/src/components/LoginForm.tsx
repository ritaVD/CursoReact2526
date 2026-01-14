import React, { useState } from "react";

export const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const [errors, setErrors] = useState<{ email?: string; password?: string }>(
    {}
  );

  const validar = () => {
    const nuevos: { email?: string; password?: string } = {};

    if (!email.trim()) {
      nuevos.email = "El email es obligatorio.";
    } else {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(email)) {
        nuevos.email = "El formato del email no es válido.";
      }
    }

    if (!password.trim()) {
      nuevos.password = "La contraseña es obligatoria.";
    } else if (password.length < 6) {
      nuevos.password = "La contraseña debe tener al menos 6 caracteres.";
    }

    setErrors(nuevos);
    return Object.keys(nuevos).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validar()) return;

    console.log("Login correcto:", { email, password });
  };

  return (
    <div className="max-w-md mx-auto p-6 bg-white rounded-xl shadow">
      <h3 className="text-xl font-bold mb-4">Login</h3>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-sm font-medium mb-1">Email</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full px-3 py-2 border rounded"
          />
          {errors.email && (
            <p className="text-red-600 text-sm mt-1">{errors.email}</p>
          )}
        </div>

        <div>
          <label className="block text-sm font-medium mb-1">Contraseña</label>
          <div className="flex gap-2">
            <input
              type={showPassword ? "text" : "password"}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-3 py-2 border rounded"
            />
            <button
              type="button"
              onClick={() => setShowPassword((prev) => !prev)}
              className="px-3 py-2 border rounded"
            >
              {showPassword ? "Ocultar" : "Ver"}
            </button>
          </div>

          {errors.password && (
            <p className="text-red-600 text-sm mt-1">{errors.password}</p>
          )}
        </div>

        <button className="w-full bg-blue-500 text-white px-4 py-2 rounded">
          Entrar
        </button>
      </form>
    </div>
  );
};

export default LoginForm;
