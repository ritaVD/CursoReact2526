import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";

interface Contacto {
  id: string;
  nombre: string;
  telefono: string;
  email: string;
}

export const ListaContactos = () => {
  const [contactos, setContactos] = useState<Contacto[]>([]);
  const [form, setForm] = useState({
    nombre: "",
    telefono: "",
    email: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const agregarContacto = (e: React.FormEvent) => {
    e.preventDefault();

    const nuevo: Contacto = {
      id: uuidv4(),
      nombre: form.nombre,
      telefono: form.telefono,
      email: form.email,
    };

    setContactos((prev) => [...prev, nuevo]);

    // limpiar formulario
    setForm({ nombre: "", telefono: "", email: "" });
  };

  const eliminarContacto = (id: string) => {
    setContactos((prev) => prev.filter((c) => c.id !== id));
  };

  return (
    <div className="max-w-md mx-auto p-6 bg-white rounded-xl shadow">
      <h3 className="text-xl font-bold mb-4">Lista de contactos</h3>

      <form onSubmit={agregarContacto} className="space-y-3">
        <input
          name="nombre"
          placeholder="Nombre"
          value={form.nombre}
          onChange={handleChange}
          className="w-full px-3 py-2 border rounded"
        />
        <input
          name="telefono"
          placeholder="Teléfono"
          value={form.telefono}
          onChange={handleChange}
          className="w-full px-3 py-2 border rounded"
        />
        <input
          name="email"
          placeholder="Email"
          value={form.email}
          onChange={handleChange}
          className="w-full px-3 py-2 border rounded"
        />

        <button className="w-full bg-blue-500 text-white px-4 py-2 rounded">
          Agregar contacto
        </button>
      </form>

      <div className="mt-6">
        {contactos.length === 0 ? (
          <p className="text-gray-600">No hay contactos todavía.</p>
        ) : (
          <ul className="space-y-2">
            {contactos.map((c) => (
              <li
                key={c.id}
                className="p-3 border rounded flex items-center justify-between"
              >
                <div>
                  <p className="font-semibold">{c.nombre}</p>
                  <p className="text-sm">{c.telefono}</p>
                  <p className="text-sm">{c.email}</p>
                </div>

                <button
                  onClick={() => eliminarContacto(c.id)}
                  className="bg-red-500 text-white px-3 py-1 rounded"
                >
                  Eliminar
                </button>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default ListaContactos;
