# Cómo contribuir a practimentor-web

## Flujo de trabajo

Usamos **GitHub Flow**: una sola rama permanente, `main`, siempre estable.

1. Toma un issue del tablero del proyecto y asígnatelo.
2. Crea una rama corta desde `main` con el patrón `feature/<tema>`, `fix/<tema>` o `docs/<tema>`.
3. Haz commits pequeños y push de tu rama.
4. Abre un Pull Request hacia `main` que cierre el issue (`Closes #N`).
5. Espera a que el CI pase y a la revisión. Se integra con *merge commit*.

Nadie sube directamente a `main`.

## Mensajes de commit

Formato `tipo(ámbito): resumen`, en imperativo y en español. Tipos: `feat`, `fix`, `docs`, `test`, `refactor`, `chore`, `ci`, `build`.

```text
feat(web): agregar validación del formulario de perfil
```

## Seguridad

No subas contraseñas, llaves, tokens ni cadenas de conexión. Usa variables de entorno y mantén un `.env.example` sin valores reales.
