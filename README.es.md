<div align="center">
  <h1>🤖 Agentic Next.js Monorepo Starter</h1>
  <p>Una plantilla monorepo moderna con Next.js lista para IA, equipada con PostgreSQL, Prisma, Better-Auth, Ultracite y soporte nativo para Agentes de IA (MCP y Skills).</p>

  <p>
    <a href="https://github.com/IvanTsxx/AI-Nextjs-Monorepo-Starter">
      <img src="https://img.shields.io/badge/GitHub-IvanTsxx%2FAI--Nextjs--Monorepo--Starter-181717?logo=github" alt="GitHub Repository" />
    </a>
    <img src="https://img.shields.io/badge/Next.js-15+-black?logo=nextdotjs" alt="Next.js 15+" />
    <img src="https://img.shields.io/badge/Bun-1.3+-F9F1E1?logo=bun" alt="Bun" />
    <img src="https://img.shields.io/badge/TypeScript-5+-3178C6?logo=typescript" alt="TypeScript" />
    <img src="https://img.shields.io/badge/Prisma-ORM-2D3748?logo=prisma" alt="Prisma" />
    <img src="https://img.shields.io/badge/Better--Auth-v1-6C47FF" alt="Better Auth" />
  </p>

  <p>
    <a href="./README.md">English</a> · <strong>Español</strong>
  </p>
</div>

---

## 📋 Tabla de Contenidos

- [¿Qué es esto?](#-qué-es-esto)
- [Stack Tecnológico](#-stack-tecnológico)
- [Integraciones con IA y Herramientas](#-integraciones-con-ia-y-herramientas)
  - [AI Skills](#ai-skills-agentsskills)
  - [Servidores MCP](#servidores-mcp-mcpjson)
  - [Archivos de Configuración Global para IA](#archivos-de-configuración-global-para-ia)
- [Estructura del Monorepo](#-estructura-del-monorepo)
- [Inicio Rápido](#-inicio-rápido)
- [Variables de Entorno](#-variables-de-entorno)
- [Archivos que Debes Editar](#-archivos-que-debes-editar)
- [Scripts Disponibles](#-scripts-disponibles)
- [Comandos de Base de Datos](#-comandos-de-base-de-datos)
- [Calidad de Código](#-calidad-de-código)
- [Contribuir](#-contribuir)
- [Licencia](#-licencia)

---

## 🧭 ¿Qué es esto?

**Agentic Next.js Monorepo Starter** es una plantilla monorepo lista para producción, pensada para desarrolladores que quieren lanzar proyectos rápido, con garantías de calidad y soporte de primera clase para asistentes de IA, todo incluido desde el primer momento.

Combina un conjunto curado de herramientas modernas en una configuración única y coherente para que no tengas que conectarlo todo tú mismo. Más allá del stack técnico habitual, lo que hace única a esta plantilla es su soporte nativo para **asistentes de programación con IA**: incluye skills preconfigurables, servidores MCP y archivos de prompt globales que le enseñan a los agentes de IA sobre tu arquitectura, para que den sugerencias más precisas y contextuales desde el primer uso.

---

## 🚀 Stack Tecnológico

| Herramienta                                                 | Propósito                                                            |
| ----------------------------------------------------------- | -------------------------------------------------------------------- |
| **[Next.js 15+](https://nextjs.org/)**                      | Framework React — App Router, Server Components, Server Actions      |
| **[PostgreSQL](https://www.postgresql.org/)**               | Motor de base de datos relacional                                    |
| **[Prisma ORM](https://www.prisma.io/)**                    | Cliente de base de datos tipado y herramienta de migraciones         |
| **[Better Auth](https://better-auth.com/)**                 | Librería de autenticación completa y orientada a TypeScript          |
| **[Bun](https://bun.sh/)**                                  | Runtime JavaScript, bundler y gestor de paquetes ultra-rápido        |
| **[Turborepo](https://turbo.build/)**                       | Sistema de build de alto rendimiento para monorepos                  |
| **[Ultracite](https://github.com/haydenbleasel/ultracite)** | Preset zero-config de linting + formateo (Oxlint + Oxfmt)            |
| **[Ruler](https://github.com/intellectronica/ruler)**       | Estándares centralizados para entornos de trabajo basados en agentes |
| **[shadcn/ui](https://ui.shadcn.com/)**                     | Biblioteca de componentes accesibles y sin estilos impuestos         |
| **[Zod](https://zod.dev/)**                                 | Validación de esquemas para variables de entorno y formularios       |
| **[Husky](https://typicode.github.io/husky/)**              | Git hooks modernos para comprobaciones de calidad de código          |
| **[Docker](https://www.docker.com/)**                       | PostgreSQL local mediante Docker Compose                             |

---

## 🧠 Integraciones con IA y Herramientas

Este repositorio está optimizado al máximo para **asistentes de programación con IA** (Antigravity, GitHub Copilot, Cursor, Windsurf, Claude Code, Cline, etc.).

### AI Skills (`.agents/skills/`)

Packs de conocimiento preconfigurados para sub-agentes que le dan a los asistentes de IA un profundo conocimiento específico sobre este proyecto. Al activarse, guían a la IA para seguir las convenciones del proyecto sin necesidad de repetir instrucciones constantemente.

| Skill                         | Descripción                                                    |
| ----------------------------- | -------------------------------------------------------------- |
| `architect-nextjs`            | Screaming Architecture + Scope Rule para Next.js 15+           |
| `better-auth-best-practices`  | Configuración de auth, sesiones, plugins, variables de entorno |
| `interface-design`            | Dashboards, paneles de administración, diseño de UI            |
| `next-best-practices`         | Convenciones de archivos, RSC, patrones de datos, APIs async   |
| `next-cache-components`       | PPR, `use cache`, `cacheLife`, `cacheTag`                      |
| `prisma-cli`                  | Referencia de comandos de la CLI de Prisma                     |
| `prisma-client-api`           | Consultas CRUD, filtros, transacciones                         |
| `prisma-database-setup`       | Configuración de proveedores de base de datos                  |
| `turborepo`                   | Pipelines de tareas, caché, buenas prácticas en monorepos      |
| `ultracite`                   | Linting, formateo, configuración de Oxlint                     |
| `vercel-composition-patterns` | Compound components, render props, React 19                    |
| `vercel-react-best-practices` | Patrones de rendimiento de Vercel Engineering                  |
| `web-design-guidelines`       | Accesibilidad, auditoría UX                                    |
| `opentui`                     | Interfaces de terminal con OpenTUI                             |

### Servidores MCP (`.mcp.json`)

Servidores del Protocolo de Contexto de Modelo (MCP) preconfigurados para este proyecto. Conectan los modelos de IA a documentación en vivo, registros de componentes y herramientas de desarrollo:

| Servidor                                | Propósito                                                           |
| --------------------------------------- | ------------------------------------------------------------------- |
| **Context7** (`@upstash/context7-mcp`)  | Documentación de librerías precisa y actualizada por versión        |
| **shadcn** (`shadcn@latest mcp`)        | Explorar e instalar componentes de shadcn/ui                        |
| **next-devtools** (`next-devtools-mcp`) | Diagnósticos en tiempo de ejecución y reporte de errores de Next.js |
| **better-auth** (`mcp.inkeep.com`)      | Documentación y referencia de API de Better Auth                    |

### Archivos de Configuración Global para IA

| Archivo          | Aplica a             | Propósito                                                 |
| ---------------- | -------------------- | --------------------------------------------------------- |
| `GEMINI.md`      | Gemini / Antigravity | Estándares de código, reglas de Ultracite, patrones React |
| `AGENTS.md`      | Codex / OpenAI       | Reglas globales de comportamiento del agente              |
| `CLAUDE.md`      | Claude / Claude Code | Reglas globales de comportamiento del agente              |
| `.cursor/rules/` | Cursor               | Reglas del agente a nivel de editor                       |
| `.windsurf/`     | Windsurf             | Reglas del agente a nivel de editor                       |
| `.kilocode/`     | Kilocode             | Reglas del agente a nivel de editor                       |

---

## 📁 Estructura del Monorepo

```
.
├── apps/
│   └── web/                    # Aplicación Next.js 15
│       ├── app/                # Rutas y layouts del App Router
│       ├── components/         # Componentes de UI
│       └── ...
├── packages/
│   ├── auth/                   # Configuración del servidor y cliente de Better Auth
│   ├── config/                 # Configs compartidas de TypeScript y herramientas
│   ├── db/                     # Esquema Prisma, migraciones, Docker Compose
│   └── env/                    # Variables de entorno tipadas (t3-env + Zod)
├── .agents/skills/             # Skills para agentes de IA (packs de conocimiento)
├── .mcp.json                   # Definiciones de servidores MCP
├── GEMINI.md                   # Config de IA para Gemini
├── AGENTS.md                   # Config de IA para agentes Codex/OpenAI
├── CLAUDE.md                   # Config de IA para Claude
├── turbo.json                  # Pipeline de tareas de Turborepo
└── package.json                # Workspace raíz
```

---

## ⚡ Inicio Rápido

> **Requisitos previos:** [Bun](https://bun.sh/) ≥ 1.3, [Docker](https://www.docker.com/) (para PostgreSQL local)

### 1. Clonar el repositorio

```bash
git clone https://github.com/IvanTsxx/AI-Nextjs-Monorepo-Starter.git mi-app
cd mi-app
```

> [!IMPORTANT]
> Una vez que hayas clonado el repositorio, recuerda reemplazar todas las ocurrencias de `your-repo-name` (o el nombre original del proyecto) con el nombre real de tu repositorio en el archivo `package.json` raíz y otros archivos de configuración.

### 2. Instalar dependencias

```bash
bun install
```

### 3. Configurar las variables de entorno

Copia el ejemplo de abajo en un archivo `.env` en la raíz **y** en `apps/web/`:

```env
# Base de datos
DATABASE_URL="postgresql://postgres:password@localhost:5432/mydb"

# Better Auth
BETTER_AUTH_SECRET="tu-secreto-con-al-menos-32-caracteres"
BETTER_AUTH_URL="http://localhost:3001"

# CORS
CORS_ORIGIN="http://localhost:3001"
NODE_ENV="development"
```

> Consulta la sección de [Variables de Entorno](#-variables-de-entorno) para la referencia completa.

### 4. Iniciar la base de datos

```bash
bun run db:start   # Levanta PostgreSQL con Docker Compose
```

### 5. Generar el cliente de Prisma

```bash
bun run db:generate    # Genera el cliente de Prisma
```

### 6. Sincronizar el esquema de la base de datos

```bash
bun run db:push    # Aplica el esquema de Prisma a la base de datos
```

### 7. Iniciar el servidor de desarrollo

```bash
bun run dev        # Inicia todas las apps del monorepo
# o solo la app web:
bun run dev:web
```

Abre [http://localhost:3001](http://localhost:3001) 🎉

---

## 🔐 Variables de Entorno

Todas las variables de entorno son validadas en tiempo de ejecución usando [t3-env](https://github.com/t3-oss/t3-env) + Zod. Están definidas en `packages/env/src/server.ts`.

| Variable             | Requerida | Descripción                                                          |
| -------------------- | --------- | -------------------------------------------------------------------- |
| `DATABASE_URL`       | ✅        | Cadena de conexión a PostgreSQL                                      |
| `BETTER_AUTH_SECRET` | ✅        | Clave secreta (mín. 32 chars) para firma de tokens                   |
| `BETTER_AUTH_URL`    | ✅        | URL completa donde está alojada la app (ej. `http://localhost:3001`) |
| `CORS_ORIGIN`        | ✅        | URL de origen CORS permitida                                         |
| `NODE_ENV`           | ✅        | `development`, `production`, o `test` (por defecto `development`)    |

---

## ✏️ Archivos que Debes Editar

Al personalizar esta plantilla para tu propio proyecto, enfócate en estos archivos:

| Archivo / Ruta                          | Qué cambiar                                                                                 |
| --------------------------------------- | ------------------------------------------------------------------------------------------- |
| `package.json`                          | **Nombre del proyecto**, descripción, **URL del repositorio** (reemplazar `your-repo-name`) |
| `apps/web/app/layout.tsx`               | Nombre de la app, metadata (título, descripción)                                            |
| `packages/env/src/server.ts`            | Agregar o quitar variables de entorno                                                       |
| `packages/db/prisma/schema.prisma`      | Agregar tus propios modelos de datos                                                        |
| `packages/db/docker-compose.yml`        | Nombre de la base de datos, puerto, credenciales                                            |
| `packages/auth/src/`                    | Plugins de auth, proveedores OAuth, configuración de sesión                                 |
| `.mcp.json`                             | Agregar o quitar servidores MCP para tus herramientas de IA                                 |
| `.agents/skills/`                       | Agregar skills personalizadas para tu dominio                                               |
| `GEMINI.md` / `AGENTS.md` / `CLAUDE.md` | Reglas de codificación con IA específicas del proyecto                                      |
| `turbo.json`                            | Agregar nuevas tareas al pipeline si agregas paquetes                                       |

---

## 📜 Scripts Disponibles

Ejecutar desde la **raíz** del monorepo:

```bash
bun run dev           # Inicia todas las apps en modo desarrollo
bun run dev:web       # Inicia solo la app web
bun run build         # Compilar todas las apps para producción
bun run check-types   # Verificar tipos TypeScript en todo el monorepo
bun run check         # Verificar linting y formateo (Ultracite)
bun run fix           # Corregir automáticamente problemas de lint y formato
bun run ruler:apply   # Aplicar estándares de Ruler (solo local)
bun run prepare       # Configurar los git hooks de Husky
```

---

## ⚓ Git Hooks

Este repositorio utiliza **Husky** para garantizar la calidad del código antes de cada commit.

- **Pre-commit:** Ejecuta `lint-staged`, que a su vez ejecuta `ultracite fix` en los archivos modificados para asegurar que todo el código enviado esté correctamente formateado y validado según los estándares del proyecto.

---

## 🗄️ Comandos de Base de Datos

```bash
bun run db:start      # Iniciar contenedor PostgreSQL (Docker)
bun run db:stop       # Detener el contenedor PostgreSQL
bun run db:down       # Detener y eliminar el contenedor PostgreSQL
bun run db:push       # Sincronizar esquema Prisma → base de datos (sin archivo de migración)
bun run db:migrate    # Crear y aplicar una migración
bun run db:generate   # Regenerar el cliente Prisma tras cambios en el esquema
bun run db:studio     # Abrir Prisma Studio (navegador visual de la BD)
bun run db:watch      # Observar cambios en el esquema
```

---

## 🛡️ Calidad de Código

Este proyecto usa **[Ultracite](https://github.com/haydenbleasel/ultracite)** — un preset zero-config para Oxlint + Oxfmt.

```bash
bun run check           # Verificar problemas
bun run fix             # Corregir automáticamente todos los problemas resolubles
bun x ultracite doctor  # Diagnosticar problemas de configuración
```

> Consulta `GEMINI.md` para la referencia completa de estándares de código usados tanto por el equipo como por los asistentes de IA.

---

## 🤝 Contribuir

¡Las contribuciones, issues y solicitudes de funcionalidades son bienvenidas! No dudes en consultar la [página de issues](https://github.com/IvanTsxx/AI-Nextjs-Monorepo-Starter/issues).

1. Haz un fork del repositorio
2. Crea tu rama: `git checkout -b feat/nueva-funcionalidad`
3. Haz commit de los cambios: `git commit -m 'feat: agregar nueva funcionalidad'`
4. Haz push y abre un Pull Request

---

## 📄 Licencia

MIT © [IvanTsxx](https://github.com/IvanTsxx)
