const ciclo = [
  "Perfil",
  "Brecha",
  "Plan",
  "Práctica diaria",
  "Evidencia",
  "Oferta relevante",
  "Seguimiento",
];

const agentes = [
  {
    titulo: "Diagnóstico de perfil",
    texto:
      "Detecta tus fortalezas, tus brechas y los datos que aún no registraste.",
  },
  {
    titulo: "Mejora de CV",
    texto:
      "Propone cambios sección por sección. Tú revisas y decides cuáles aplicar.",
  },
  {
    titulo: "Simulación de entrevista",
    texto:
      "Practica con un entrevistador simulado y recibe retroalimentación por criterio.",
  },
  {
    titulo: "Habilidades blandas",
    texto:
      "Entrena comunicación, negociación y manejo de conflictos con escenarios de rol.",
  },
];

const principios = [
  {
    titulo: "Tú decides",
    texto:
      "Los agentes recomiendan. Nunca postulan, envían mensajes ni cambian tu perfil sin tu confirmación.",
  },
  {
    titulo: "Nada inventado",
    texto:
      "Ninguna sugerencia agrega experiencia, certificados o datos que tú no hayas registrado.",
  },
  {
    titulo: "Todo es trazable",
    texto:
      "Cada recomendación indica qué agente la generó, cuándo y en qué se basó.",
  },
];

export default function Home() {
  return (
    <>
      <header className="border-b border-slate-200 dark:border-slate-800">
        <nav
          aria-label="Principal"
          className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4"
        >
          <span className="text-lg font-semibold tracking-tight">
            PractiMentor
          </span>
          <ul className="hidden gap-6 text-sm sm:flex">
            <li>
              <a className="hover:underline" href="#como-funciona">
                Cómo funciona
              </a>
            </li>
            <li>
              <a className="hover:underline" href="#agentes">
                Agentes
              </a>
            </li>
            <li>
              <a className="hover:underline" href="#principios">
                Principios
              </a>
            </li>
          </ul>
        </nav>
      </header>

      <main className="flex-1">
        <section className="mx-auto max-w-5xl px-6 py-20 sm:py-28">
          <p className="mb-4 text-sm font-medium uppercase tracking-wide text-indigo-600 dark:text-indigo-400">
            Para estudiantes y recién egresados
          </p>
          <h1 className="max-w-3xl text-4xl font-semibold leading-tight tracking-tight sm:text-5xl">
            Consigue tu primera práctica o empleo junior con un plan, no con
            suerte.
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600 dark:text-slate-300">
            PractiMentor detecta qué te falta, te entrena cada día, te ayuda a
            demostrarlo y te avisa de las oportunidades que realmente encajan
            contigo.
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            <a
              href="#como-funciona"
              className="rounded-lg bg-indigo-600 px-6 py-3 text-sm font-medium text-white hover:bg-indigo-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Ver cómo funciona
            </a>
            <a
              href="https://github.com/practimentor"
              className="rounded-lg border border-slate-300 px-6 py-3 text-sm font-medium hover:bg-slate-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 dark:border-slate-700 dark:hover:bg-slate-800"
            >
              Seguir el proyecto en GitHub
            </a>
          </div>
        </section>

        <section
          id="como-funciona"
          className="border-t border-slate-200 bg-slate-50 py-20 dark:border-slate-800 dark:bg-slate-900"
        >
          <div className="mx-auto max-w-5xl px-6">
            <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">
              Un ciclo completo, no solo una lista de vacantes
            </h2>
            <p className="mt-4 max-w-2xl text-slate-600 dark:text-slate-300">
              Los portales publican ofertas pero no te acompañan. Los
              asistentes genéricos escriben rápido pero no conocen tu contexto.
              PractiMentor conecta cada paso con el siguiente.
            </p>
            <ol className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
              {ciclo.map((paso, i) => (
                <li
                  key={paso}
                  className="flex items-center gap-3 rounded-lg border border-slate-200 bg-white px-4 py-3 dark:border-slate-700 dark:bg-slate-950"
                >
                  <span
                    aria-hidden="true"
                    className="flex h-7 w-7 items-center justify-center rounded-full bg-indigo-600 text-xs font-semibold text-white"
                  >
                    {i + 1}
                  </span>
                  <span className="text-sm font-medium">{paso}</span>
                </li>
              ))}
            </ol>
          </div>
        </section>

        <section id="agentes" className="mx-auto max-w-5xl px-6 py-20">
          <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">
            Agentes de IA que te acompañan
          </h2>
          <div className="mt-10 grid gap-6 sm:grid-cols-2">
            {agentes.map((a) => (
              <article
                key={a.titulo}
                className="rounded-xl border border-slate-200 p-6 dark:border-slate-800"
              >
                <h3 className="text-lg font-semibold">{a.titulo}</h3>
                <p className="mt-2 text-slate-600 dark:text-slate-300">
                  {a.texto}
                </p>
              </article>
            ))}
          </div>
        </section>

        <section
          id="principios"
          className="border-t border-slate-200 bg-slate-50 py-20 dark:border-slate-800 dark:bg-slate-900"
        >
          <div className="mx-auto max-w-5xl px-6">
            <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">
              Principios que no se negocian
            </h2>
            <div className="mt-10 grid gap-6 sm:grid-cols-3">
              {principios.map((p) => (
                <div key={p.titulo}>
                  <h3 className="text-lg font-semibold">{p.titulo}</h3>
                  <p className="mt-2 text-slate-600 dark:text-slate-300">
                    {p.texto}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-slate-200 py-8 text-sm text-slate-600 dark:border-slate-800 dark:text-slate-400">
        <div className="mx-auto max-w-5xl px-6">
          PractiMentor es un proyecto académico del curso Herramientas de
          Desarrollo, UTP. Está en construcción.
        </div>
      </footer>
    </>
  );
}
