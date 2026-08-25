"use client"; // Obligatorio en Next.js cuando nuestra pantalla va a ser interactiva (Frontend)

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function LoginPage() {
  // Estas dos variables de Frontend guardarán lo que el usuario escriba
  const [correo, setCorreo] = useState("");
  const [clave, setClave] = useState("");

  const router = useRouter();
  // Esta función tuya se ejecuta al darle clic al botón
  const simularEnvioAlBackend = (e: React.FormEvent) => {
    e.preventDefault();

    router.push("/cursos");
    // En el futuro, aquí enviaremos estos datos al Backend para que los revise.
  };

  return (
    <main className="flex min-h-screen items-center justify-center bg-gradient-to-br from-slate-50 to-slate-200 p-4">
      <div className="w-full max-w-md p-8 bg-white rounded-2xl shadow-xl border border-slate-100">

        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center w-12 h-12 bg-blue-600 rounded-xl mb-4 shadow-md">
            <span className="text-2xl font-bold text-white">U</span>
          </div>
          <h1 className="text-2xl font-bold text-slate-900 tracking-tight">Bienvenido de nuevo</h1>
          <p className="text-sm text-slate-500 mt-2">Ingresa tus credenciales para acceder a tus cursos</p>
        </div>

        {/* Agregamos onSubmit a la etiqueta form */}
        <form onSubmit={simularEnvioAlBackend} className="space-y-5">

          <div>
            <label className="block text-sm font-medium text-slate-700 mb-1">Correo institucional</label>
            <div className="relative">
              <input
                type="email"
                placeholder="usuario@utp.edu.pe"
                value={correo} // Conectamos la caja de texto a nuestra variable
                onChange={(e) => setCorreo(e.target.value)} // Cada vez que teclea, actualizamos la variable
                className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-lg focus:bg-white focus:outline-none focus:ring-2 focus:ring-blue-600 text-slate-900"
                required
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-slate-700 mb-1">Contraseña</label>
            <div className="relative">
              <input
                type="password"
                placeholder="••••••••"
                value={clave} // Conectamos la caja de contraseña a nuestra variable
                onChange={(e) => setClave(e.target.value)}
                className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-lg focus:bg-white focus:outline-none focus:ring-2 focus:ring-blue-600 text-slate-900"
                required
              />
            </div>
          </div>

          <button
            type="submit" // Cambiamos a submit para que lance el evento del formulario
            className="w-full py-2.5 px-4 text-white font-medium bg-blue-600 rounded-lg hover:bg-blue-700 hover:shadow-lg transition-all mt-2"
          >
            Ingresar a la plataforma
          </button>
        </form>

      </div>
    </main>
  );
}
