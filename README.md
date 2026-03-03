<div align="center">
  <h1>🤖 Agentic Next.js Monorepo Stack</h1>
  <p>🇬🇧 A modern, AI-first Next.js monorepo template equipped with PostgreSQL, Prisma, Better-Auth, Ultracite, and native support for AI Agents (MCP and Skills).</p>
  <p>🇪🇸 Una plantilla monorepo moderna con Next.js lista para IA, equipada con PostgreSQL, Prisma, Better-Auth, Ultracite y soporte nativo para Agentes de IA (MCP and Skills).</p>
</div>

## 🇬🇧 English

Welcome to the **Agentic Next.js Monorepo Stack**. This template is designed to give you a robust, scalable, and AI-ready foundation for modern web applications. It leverages the best tools in the ecosystem alongside custom configurations that make it easier for LLMs and AI Agents to understand, navigate, and contribute to the codebase.

### 🚀 Technologies

- **[Next.js](https://nextjs.org/)**: React framework with App Router, Server Components & Server Actions.
- **[PostgreSQL](https://www.postgresql.org/)**: Relational database engine.
- **[Prisma ORM](https://www.prisma.io/)**: Next-generation Node.js and TypeScript ORM.
- **[Better Auth](https://better-auth.com/)**: Comprehensive Authentication for Typescript.
- **[Bun](https://bun.sh/)**: Extremely fast JavaScript runtime, bundler, and package manager.
- **[Turborepo](https://turbo.build/)**: High-performance build system for JavaScript and TypeScript codebases.
- **[Ultracite](https://github.com/tony/ultracite)**: Zero-config preset enforcing strict code quality standards through automated formatting and linting (Oxlint + Oxfmt).
- **[Ruler](https://github.com/intellectronica/ruler)**: Centralized configuration and standards enforcement for agentic workspaces.

### 🧠 AI Integrations & Tooling

This repository is uniquely optimized for **AI Coding Assistants** (like Antigravity, GitHub Copilot, Cursor, Windsurf, Claude Code, Cline, etc.).

- **AI Skills (`.agents/skills/`)**: Pre-configured sub-agents/skills containing explicit instructions, constraints, and operational knowledge (e.g., `architect-nextjs`, `interface-design`, `better-auth-best-practices`).
- **`agents.md` & `gemini.md`**: Global prompting and behavior rules for AI assistants, ensuring they follow predefined team standards without repetitive prompting.
- **MCP (Model Context Protocol)**: Seamless contextual integration for connecting AI models to external tools, editors, and environments natively.

### 📦 Setup

1. Clone this repository to your local machine.
2. Install dependencies: `bun install`
3. Push database schema: `bun run db:push`
4. Start development server: `bun run dev`

---

## 🇪🇸 Español

Bienvenido al **Agentic Next.js Monorepo Stack**. Esta plantilla está diseñada para proporcionarte una base sólida, escalable y lista para IA ("AI-ready") al construir aplicaciones web modernas. Aprovecha las mejores herramientas del ecosistema, junto con configuraciones personalizadas que facilitan a los LLMs y a los agentes de inteligencia artificial la compresión y la aportación al código.

### 🚀 Tecnologías

- **[Next.js](https://nextjs.org/)**: Framework de React con App Router, Server Components y Server Actions.
- **[PostgreSQL](https://www.postgresql.org/)**: Motor de base de datos relacional.
- **[Prisma ORM](https://www.prisma.io/)**: El ORM de nueva generación para Node.js y TypeScript.
- **[Better Auth](https://better-auth.com/)**: Solución completa y tipada de autenticación para TypeScript.
- **[Bun](https://bun.sh/)**: Entorno de ejecución de JavaScript, empaquetador y gestor de paquetes extremadamente rápido.
- **[Turborepo](https://turbo.build/)**: Sistema de compilación de alto rendimiento para proyectos monorepo en JS/TS.
- **[Ultracite](https://github.com/tony/ultracite)**: Preset "zero-config" que impone estándares estrictos de calidad del código mediante formateo automático y linter (basado en Oxlint + Oxfmt).
- **[Ruler](https://github.com/intellectronica/ruler)**: Gestión centralizada de configuración y estándares en entornos de trabajo basados en agentes.

### 🧠 Integraciones con IA y Herramientas

Este repositorio está optimizado al máximo para **asistentes de programación por IA** (como Antigravity, GitHub Copilot, Cursor, Windsurf, Claude Code, Cline, etc.).

- **AI Skills (`.agents/skills/`)**: Sub-agentes preparados por defecto, que proveen contexto, restricciones y conocimiento operacional (ej. `architect-nextjs`, `interface-design`, `better-auth-best-practices`).
- **`agents.md` y `gemini.md`**: Reglas globales de comportamiento y formato para que los asistentes sigan siempre los estándares del proyecto de forma autómatica.
- **MCP (Model Context Protocol)**: Integración contextual que permite a los modelos de inteligencia artificial hablar con el entorno de desarrollo y herramientas externas de forma controlada.

### 📦 Configuración Inicial

1. Clona este repositorio en tu máquina local.
2. Instala las dependencias: `bun install`
3. Levanta el esquema en bd: `bun run db:push`
4. Inicia el servidor local: `bun run dev`
