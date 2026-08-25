"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function MaterialesCursoPage({ params }: { params: { id: string } }) {
  const router = useRouter(); // <-- Router inicializado aquí

  const materiales = [
    { id: 1, tipo: "PDF", titulo: "Presentación de la Clase 1", tamaño: "2.4 MB" },
    { id: 2, tipo: "VID", titulo: "Grabación de la Sesión", tamaño: "150 MB" },
    { id: 3, tipo: "DOC", titulo: "Laboratorio Práctico", tamaño: "1.1 MB" },
  ];

  const [mensajeTexto, setMensajeTexto] = useState("");
  const [mensajes, setMensajes] = useState([
    { id: 1, emisor: "agente", texto: "¡Hola! Soy tu asistente de UTP. ¿En qué te puedo ayudar con este curso hoy?" }
  ]);

  const enviarMensaje = (e: React.FormEvent) => {
    e.preventDefault();
    if (!mensajeTexto.trim()) return;
    const nuevoMensajeUsuario = { id: Date.now(), emisor: "usuario", texto: mensajeTexto };
    const respuestaAgente = { id: Date.now() + 1, emisor: "agente", texto: "El backend procesará tu consulta pronto." };
    setMensajes([...mensajes, nuevoMensajeUsuario, respuestaAgente]);
    setMensajeTexto("");
  };

  return (
    <main className="min-h-screen bg-[#FAFAF9] flex font-sans">

      {/* Columna Izquierda */}
      <div className="flex-1 p-8 md:p-12 overflow-y-auto">

        {/* BOTÓN VOLVER INTELIGENTE */}
        <div className="mb-8">
          <button
            onClick={() => router.back()}
            className="inline-flex items-center gap-2 px-4 py-2.5 bg-white border border-zinc-200 rounded-lg text-zinc-600 font-bold hover:bg-zinc-50 hover:text-red-700 hover:border-red-200 transition-all shadow-sm text-sm group cursor-pointer"
          >
            <svg className="w-4 h-4 group-hover:-translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2.5"><path strokeLinecap="round" strokeLinejoin="round" d="M10 19l-7-7m0 0l7-7m-7 7h18"></path></svg>
            Volver a mis cursos
          </button>
        </div>

        <h1 className="text-3xl md:text-4xl font-black text-zinc-900 mb-3 tracking-tight">Materiales del Curso</h1>
        <p className="text-zinc-500 mb-10 text-lg font-medium">Descarga los recursos de tu clase o hazle consultas al agente.</p>

        <div className="bg-white rounded-2xl shadow-sm border border-zinc-200 overflow-hidden">
          <div className="bg-zinc-50 px-8 py-4 border-b border-zinc-200">
            <h3 className="font-bold text-zinc-700 uppercase tracking-widest text-xs">Recursos Disponibles</h3>
          </div>
          <ul className="divide-y divide-zinc-100">
            {materiales.map((mat) => (
              <li key={mat.id} className="p-6 md:px-8 flex items-center justify-between hover:bg-zinc-50 transition-colors group">
                <div className="flex items-center gap-5">
                  <div className="w-12 h-12 rounded-xl bg-red-50 text-red-700 flex items-center justify-center font-black text-xs shadow-inner border border-red-100">{mat.tipo}</div>
                  <div>
                    <h4 className="font-bold text-zinc-900 text-lg group-hover:text-red-700 transition-colors leading-tight">{mat.titulo}</h4>
                    <span className="text-sm font-semibold text-zinc-400">{mat.tamaño}</span>
                  </div>
                </div>
                <button className="flex items-center gap-2 text-zinc-600 font-bold hover:text-red-700 px-5 py-2.5 rounded-lg border border-zinc-200 hover:bg-red-50 hover:border-red-200 transition-all text-sm shadow-sm">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2.5"><path strokeLinecap="round" strokeLinejoin="round" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"></path></svg>
                  Descargar
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Columna Derecha (Chat) */}
      <div className="w-[400px] bg-white border-l border-zinc-200 flex flex-col shadow-2xl h-screen sticky top-0 hidden lg:flex">
        <div className="p-5 border-b border-zinc-200 bg-white flex items-center gap-4">
          <div className="w-12 h-12 rounded-xl bg-red-700 flex items-center justify-center text-2xl shadow-md border border-red-800">🤖</div>
          <div>
            <h3 className="font-black text-zinc-900 text-lg tracking-tight">Agente UTP</h3>
            <span className="text-xs text-green-600 font-bold flex items-center gap-1.5 uppercase tracking-wider mt-0.5">
              <span className="w-2 h-2 rounded-full bg-green-500 inline-block animate-pulse"></span> En línea
            </span>
          </div>
        </div>

        <div className="flex-1 p-5 overflow-y-auto bg-[#FAFAF9] flex flex-col gap-5">
          {mensajes.map((msg) => (
            <div key={msg.id} className={`flex ${msg.emisor === "usuario" ? "justify-end" : "justify-start"}`}>
              <div className={`max-w-[85%] rounded-2xl px-5 py-3.5 text-sm font-semibold shadow-sm leading-relaxed ${
                msg.emisor === "usuario" ? "bg-red-700 text-white rounded-tr-sm" : "bg-white border border-zinc-200 text-zinc-800 rounded-tl-sm"
              }`}>
                {msg.texto}
              </div>
            </div>
          ))}
        </div>

        <div className="p-4 bg-white border-t border-zinc-200">
          <form onSubmit={enviarMensaje} className="flex gap-2">
            <input type="text" placeholder="Escribe tu consulta aquí..." value={mensajeTexto} onChange={(e) => setMensajeTexto(e.target.value)} className="flex-1 px-5 py-3 border border-zinc-200 rounded-xl focus:outline-none focus:border-red-600 focus:ring-2 focus:ring-red-100 text-sm font-medium text-zinc-900 transition-all bg-zinc-50" />
            <button type="submit" className="w-12 h-12 rounded-xl bg-red-700 text-white flex items-center justify-center hover:bg-red-800 shadow-md transition-all">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2.5"><path strokeLinecap="round" strokeLinejoin="round" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"></path></svg>
            </button>
          </form>
        </div>
      </div>
    </main>
  );
}
