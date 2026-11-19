# PractiMentor — Web

Interfaz web del estudiante: perfil profesional con evidencias, análisis de CV, práctica de entrevistas y recomendaciones. Next.js con TypeScript, App Router y Tailwind CSS.

Parte del proyecto **PractiMentor**, plataforma web de empleabilidad con inteligencia artificial para estudiantes universitarios (curso Herramientas de Desarrollo, UTP). Documentación y decisiones: [`practimentor-platform`](https://github.com/practimentor/practimentor-platform).

## Qué no le corresponde

No decide permisos ni contiene reglas de negocio ni claves: eso lo resuelve `practimentor-api-core`. No se conecta directamente a bases de datos.

## Cómo ejecutarlo

```bash
npm install
npm run dev     # http://localhost:3000
npm run build
npm run lint
```
El proyecto Next.js se incorpora a `main` mediante Pull Request.

## Cómo contribuir

Lee [`CONTRIBUTING.md`](CONTRIBUTING.md).

## Integración continua

El workflow `.github/workflows/ci.yml` se ejecuta en cada Pull Request hacia `main` y en cada push a `main`. Instala las dependencias con `npm ci`, revisa el estilo con ESLint y compila la aplicación. La rama `main` exige que el check `lint-y-build` pase antes de fusionar.

Para reproducirlo en local:

```bash
npm ci
npm run lint
npm run build
```
