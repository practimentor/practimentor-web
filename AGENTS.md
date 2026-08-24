# AGENTS.md — utp-agent-web

Frontend del proyecto **utp-agent**. Next.js con TypeScript y App Router.
Responsable: **Mafer**.

## Si alguien se presenta por primera vez

Cuando el usuario diga algo como "hola, soy Mafer":

1. Lee `docs/onboarding.md` del repo `utp-agent-platform` y ubica su sección.
2. Verifica qué le falta instalar ejecutando: `node --version`, `git --version`.
3. Guíalo instalando **una herramienta a la vez**, esperando que confirme antes
   de seguir. No le des todos los comandos de golpe.
4. Cuando el entorno esté listo, pídele el número de issue asignado y trabaja
   solo dentro de lo que ese issue autoriza.
5. Si algo no está en el issue, detente y dile que comente en el issue.

## Git lo ejecuta la persona, no tú

No ejecutes `git add`, `commit`, `push`, `pull`, `merge`, `rebase`, `reset` ni
`checkout` por tu cuenta. Puedes leer con `status`, `log`, `diff` y `show`.

Cuando haga falta una operación de escritura, **no digas "haz commit"**. Escribe
el comando exacto y completo, listo para copiar, con el mensaje de commit ya
redactado, y explica en una línea qué hace:

```bash
git add src/components/CourseCard.tsx
git commit -m "feat(web): agregar tarjeta de curso al listado"
git push
```

Solo ejecútalos tú si la persona te lo pide explícitamente.

## Comandos

El proyecto Next.js todavía no está creado — se hace en el Sprint 1.

```bash
npm install          # instalar dependencias
npm run dev          # servidor de desarrollo en http://localhost:3000
npm run build        # compilar para produccion
npm run lint         # revisar estilo y errores
npm test             # pruebas unitarias
```

## Qué hace este servicio

Es **toda la interfaz que ve el usuario**: iniciar sesión, ver sus cursos, abrir
materiales, subir PDFs (si es docente) y conversar con el agente.

También actúa como **BFF** (*Backend For Frontend*): sus Route Handlers pueden
agregar datos de varios servicios antes de devolverlos al navegador.

## Qué NO le corresponde

- **No decide permisos.** Quién puede ver qué lo resuelve `utp-agent-api-academic`.
- **No habla directamente con la base de datos** ni con Qdrant ni con MinIO.
- **No contiene reglas de negocio** ni claves de API. El navegador ve todo lo que
  pongas aquí.

## Dependencias clave

- **Next.js** con App Router y TypeScript
- **Tailwind CSS** para estilos
- **Keycloak** para autenticación, vía OpenID Connect

## Convenciones

**Estrategia de ramificación: GitHub Flow con ramas personales.** `main` es la
única rama permanente compartida y siempre debe quedar ejecutable. No existe rama
`develop`. Cada integrante trabaja en su rama propia `dev/<nombre>`, que **no se
borra** al fusionar. Antes de cada tarea nueva se trae `main` a la rama propia.
Un Pull Request **por tarea**, con `Closes #NN`. Detalle completo en el ADR
2026-08-23-02 del repo `utp-agent-platform`.

- Componentes en `PascalCase`, un componente por archivo
- Tu rama: `dev/mafer`. Nunca trabajes sobre `main`
- Commits convencionales con ámbito `web`: `feat(web): ...`
- Nadie trabaja directo sobre `main`; todo entra por Pull Request con una aprobación

## Prohibido sin confirmación explícita

- No agregar ni actualizar dependencias de npm.
- No modificar `next.config.js`, `tsconfig.json` ni `tailwind.config.ts`.
- No modificar workflows de `.github/`.
- No renombrar componentes, rutas ni archivos existentes.
- No escribir claves, tokens ni URLs de servicios internos en el código.
- Si crees que necesitas hacer algo de esta lista, detente y comenta en el issue.
