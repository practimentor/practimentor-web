import Link from "next/link";

export default function CursosPage() {
  const misCursos = [
    { id: 1, nombre: "Herramientas de Desarrollo", codigo: "ING-101", color: "bg-red-700" },
    { id: 2, nombre: "Arquitectura de Software", codigo: "ING-102", color: "bg-zinc-900" },
    { id: 3, nombre: "Inteligencia Artificial", codigo: "ING-103", color: "bg-red-600" },
  ];

  const iconos: Record<number, JSX.Element> = {
    1: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M14.7 6.3a1 1 0 000 1.4l1.6 1.6a1 1 0 001.4 0l3.77-3.77a6 6 0 01-7.94 7.94l-6.91 6.91a2.12 2.12 0 01-3-3l6.91-6.91a6 6 0 017.94-7.94l-3.76 3.76z" />,
    2: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 7.5l-9-5.25L3 7.5m18 0l-9 5.25M21 7.5v9l-9 5.25M3 7.5l9 5.25M3 7.5v9l9 5.25m0-9v9" />,
    3: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 3.75H7.5A2.25 2.25 0 005.25 6v1.5M9 3.75h6M9 3.75v1.5m9-1.5H16.5A2.25 2.25 0 0014.25 6v1.5m4.5-3.75v1.5m0 15v1.5m0-1.5H16.5a2.25 2.25 0 01-2.25-2.25V16.5m4.5 3.75h1.5A2.25 2.25 0 0021 18v-1.5M9 20.25H7.5A2.25 2.25 0 015.25 18v-1.5m3.75 3.75v-1.5m6-4.5h-6a1.5 1.5 0 00-1.5 1.5v3a1.5 1.5 0 001.5 1.5h6a1.5 1.5 0 001.5-1.5v-3a1.5 1.5 0 00-1.5-1.5z" />,
  };

  return (
    <main className="min-h-screen bg-[#FAFAF9] font-sans">
      <nav className="sticky top-0 z-10 bg-white/80 backdrop-blur-md border-b border-zinc-200 px-6 md:px-8 py-4 flex justify-between items-center">
        <h1 className="text-2xl font-black text-zinc-900 tracking-tighter flex items-center gap-2">
          <span className="w-8 h-8 rounded-md bg-red-700 text-white flex items-center justify-center text-sm">U</span>
          <span><span className="text-red-700">UTP</span> Agent</span>
        </h1>
      </nav>

      <div className="max-w-6xl mx-auto px-6 md:px-8 py-10 md:py-14">
        <div className="mb-12 flex flex-col md:flex-row md:items-end md:justify-between gap-4">
          <div>
            <p className="text-red-700 text-xs font-bold tracking-[0.2em] uppercase mb-2">Panel académico</p>
            <h2 className="text-3xl md:text-4xl font-black text-zinc-900 tracking-tight">Mis Cursos</h2>
            <p className="text-zinc-500 mt-2 text-base md:text-lg font-medium max-w-md">Selecciona un curso para acceder a los materiales.</p>
          </div>
          <div className="flex items-center gap-2 bg-white border border-zinc-200 rounded-xl px-4 py-3 self-start shadow-sm">
            <span className="text-2xl font-black text-zinc-900">{misCursos.length}</span>
            <span className="text-xs font-semibold text-zinc-500 leading-tight">cursos<br />activos</span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {misCursos.map((curso) => (
            <div key={curso.id} className="bg-white rounded-2xl border border-zinc-200 overflow-hidden shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group">
              <div className={`${curso.color} relative h-32 p-5 flex flex-col justify-between overflow-hidden`} style={{ backgroundImage: "linear-gradient(rgba(255,255,255,0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.08) 1px, transparent 1px)", backgroundSize: "16px 16px" }}>
                <div className="flex justify-between items-start relative z-10">
                  <span className="text-white/90 text-xs font-bold tracking-widest uppercase bg-black/20 rounded-md px-2.5 py-1 backdrop-blur-sm border border-white/10">{curso.codigo}</span>
                  <svg className="w-6 h-6 text-white/80" fill="none" viewBox="0 0 24 24" stroke="currentColor">{iconos[curso.id]}</svg>
                </div>
                <div className="absolute -bottom-6 -right-6 w-24 h-24 rounded-full bg-white/10 group-hover:scale-125 transition-transform duration-500" />
              </div>

              <div className="p-6">
                <h3 className="text-lg font-extrabold text-zinc-900 mb-6 leading-snug group-hover:text-red-700 transition-colors">{curso.nombre}</h3>
                <Link href={`/cursos/${curso.id}`} className="flex items-center justify-center w-full py-3 px-4 bg-zinc-50 border border-zinc-200 rounded-lg text-zinc-700 font-bold text-sm hover:bg-red-700 hover:text-white hover:border-red-700 transition-all duration-200">
                  Ver materiales <span className="ml-1.5 group-hover:translate-x-1 transition-transform">&rarr;</span>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
