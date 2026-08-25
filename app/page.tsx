"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function LoginPage() {
  const [nombre, setNombre] = useState("");
  const [correo, setCorreo] = useState("");
  const [clave, setClave] = useState("");
  const [mostrarClave, setMostrarClave] = useState(false); // 2. Mostrar/ocultar contraseña
  const [cargando, setCargando] = useState(false); // 3. Estado de carga

  const router = useRouter();

  const simularEnvioAlBackend = (e: React.FormEvent) => {
    e.preventDefault();
    setCargando(true);

    // Simulamos el tiempo de respuesta del backend antes de redirigir
    setTimeout(() => {
      router.push("/cursos");
    }, 600);
    // Cuando tu compañero tenga el backend listo, aquí se envían { nombre, correo, clave } a la API real.
  };

  return (
    <main className="min-h-screen flex bg-[#FAFAF9]">
      {/* PANEL IZQUIERDO — branding, oculto en mobile */}
      <div
        className="hidden md:flex md:w-1/2 relative flex-col justify-between p-12 overflow-hidden"
        style={{
          backgroundImage:
            "linear-gradient(to bottom right, #991b1b, #b91c1c, #18181b), linear-gradient(rgba(255,255,255,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.06) 1px, transparent 1px)",
          backgroundSize: "auto, 22px 22px, 22px 22px",
        }}
      >
        <div className="relative z-10 flex items-center gap-2">
          <span className="w-9 h-9 rounded-md bg-white/15 backdrop-blur text-white flex items-center justify-center text-sm font-black">
            U
          </span>
          <span className="text-white font-black tracking-tighter text-xl">
            UTP <span className="text-white/70 font-bold">Agent</span>
          </span>
        </div>

        <div className="relative z-10">
          <h2 className="text-3xl font-black text-white leading-tight mb-4 tracking-tight">
            Tu campus,<br />siempre contigo.
          </h2>
          <p className="text-white/70 text-sm font-medium max-w-xs mb-6">
            Accede a tus cursos, materiales y avances académicos desde un solo lugar.
          </p>

          {/* Bullets */}
          <ul className="space-y-3">
            <li className="flex items-center gap-2.5 text-white/85 text-sm font-semibold">
              <span className="w-5 h-5 rounded-full bg-white/15 flex items-center justify-center shrink-0">
                <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={3}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                </svg>
              </span>
              Materiales disponibles al instante
            </li>
            <li className="flex items-center gap-2.5 text-white/85 text-sm font-semibold">
              <span className="w-5 h-5 rounded-full bg-white/15 flex items-center justify-center shrink-0">
                <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={3}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                </svg>
              </span>
              Asistente con IA en cada curso
            </li>
            <li className="flex items-center gap-2.5 text-white/85 text-sm font-semibold">
              <span className="w-5 h-5 rounded-full bg-white/15 flex items-center justify-center shrink-0">
                <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={3}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                </svg>
              </span>
              Todo tu progreso académico en un solo lugar
            </li>
          </ul>
        </div>

        <p className="relative z-10 text-white/40 text-xs font-semibold tracking-wide">
          © {new Date().getFullYear()} Universidad Tecnológica del Perú
        </p>

        <div className="absolute -bottom-16 -right-16 w-72 h-72 rounded-full bg-white/5" />
      </div>

      {/* PANEL DERECHO — formulario */}
      <div className="flex w-full md:w-1/2 items-center justify-center p-6 sm:p-10">
        <div className="w-full max-w-sm">

          <div className="flex md:hidden items-center gap-2 mb-8 justify-center">
            <span className="w-9 h-9 rounded-md bg-red-700 text-white flex items-center justify-center text-sm font-black">
              U
            </span>
            <span className="text-zinc-900 font-black tracking-tighter text-xl">
              UTP <span className="text-red-700">Agent</span>
            </span>
          </div>

          <div className="mb-8">
            <h1 className="text-2xl font-black text-zinc-900 tracking-tight">Accede a tu cuenta</h1>
            <p className="text-sm text-zinc-500 mt-2 font-medium">
              Completa tus datos para ingresar a tus cursos.
            </p>
          </div>

          <form onSubmit={simularEnvioAlBackend} className="space-y-5">

            <div>
              <label className="block text-sm font-bold text-zinc-700 mb-1.5">Nombre completo</label>
              <div className="relative">
                <svg className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4.5 h-4.5 text-zinc-400" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
                </svg>
                <input
                  type="text"
                  placeholder="Nombre."
                  value={nombre}
                  onChange={(e) => setNombre(e.target.value)}
                  className="w-full pl-10 pr-4 py-2.5 bg-zinc-50 border border-zinc-200 rounded-lg focus:bg-white focus:outline-none focus:ring-2 focus:ring-red-700 focus:border-red-700 text-zinc-900 transition-all autofill:!bg-white autofill:!shadow-[0_0_0_30px_white_inset]"
                  required
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-bold text-zinc-700 mb-1.5">Correo institucional</label>
              <div className="relative">
                <svg className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4.5 h-4.5 text-zinc-400" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75l9.75 6.75 9.75-6.75M4.5 19.5h15a2.25 2.25 0 002.25-2.25V6.75A2.25 2.25 0 0019.5 4.5h-15A2.25 2.25 0 002.25 6.75v10.5A2.25 2.25 0 004.5 19.5z" />
                </svg>
                <input
                  type="email"
                  placeholder="usuario@utp.edu.pe"
                  value={correo}
                  onChange={(e) => setCorreo(e.target.value)}
                  className="w-full pl-10 pr-4 py-2.5 bg-zinc-50 border border-zinc-200 rounded-lg focus:bg-white focus:outline-none focus:ring-2 focus:ring-red-700 focus:border-red-700 text-zinc-900 transition-all autofill:!bg-white autofill:!shadow-[0_0_0_30px_white_inset]"
                  required
                />
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between mb-1.5">
                <label className="block text-sm font-bold text-zinc-700">Contraseña</label>
                <a href="#" className="text-xs font-semibold text-red-700 hover:text-red-800">
                  ¿Olvidaste tu clave?
                </a>
              </div>
              <div className="relative">
                <svg className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4.5 h-4.5 text-zinc-400" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z" />
                </svg>
                <input
                  type={mostrarClave ? "text" : "password"}
                  placeholder="••••••••"
                  value={clave}
                  onChange={(e) => setClave(e.target.value)}
                  className="w-full pl-10 pr-11 py-2.5 bg-zinc-50 border border-zinc-200 rounded-lg focus:bg-white focus:outline-none focus:ring-2 focus:ring-red-700 focus:border-red-700 text-zinc-900 transition-all autofill:!bg-white autofill:!shadow-[0_0_0_30px_white_inset]"
                  required
                />
                <button
                  type="button"
                  onClick={() => setMostrarClave((v) => !v)}
                  className="absolute right-3.5 top-1/2 -translate-y-1/2 text-zinc-400 hover:text-zinc-600"
                  aria-label={mostrarClave ? "Ocultar contraseña" : "Mostrar contraseña"}
                >
                  {mostrarClave ? (
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M3.98 8.223A10.477 10.477 0 001.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.45 10.45 0 0112 4.5c4.756 0 8.773 3.162 10.065 7.498a10.523 10.523 0 01-4.293 5.774M6.228 6.228L3 3m3.228 3.228l3.65 3.65m7.894 7.894L21 21m-3.228-3.228l-3.65-3.65m0 0a3 3 0 10-4.243-4.243m4.242 4.242L9.88 9.88" />
                    </svg>
                  ) : (
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12s3.75-7.5 9.75-7.5 9.75 7.5 9.75 7.5-3.75 7.5-9.75 7.5S2.25 12 2.25 12z" />
                      <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  )}
                </button>
              </div>
            </div>

            <button
              type="submit"
              disabled={cargando}
              className="w-full py-2.5 px-4 text-white font-bold bg-red-700 rounded-lg hover:bg-red-800 hover:shadow-lg hover:shadow-red-700/20 transition-all mt-2 disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center gap-2"
            >
              {cargando ? (
                <>
                  <svg className="animate-spin h-4 w-4 text-white" viewBox="0 0 24 24" fill="none">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                  </svg>
                  Ingresando...
                </>
              ) : (
                "Ingresar a la plataforma"
              )}
            </button>
          </form>

          <p className="text-center text-xs text-zinc-400 font-medium mt-8">
            ¿Problemas para ingresar? Contacta a soporte académico.
          </p>
        </div>
      </div>
    </main>
  );
}
