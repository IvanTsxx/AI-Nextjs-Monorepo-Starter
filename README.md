<div align="center">
  <h1>🤖 Agentic Next.js Monorepo Starter</h1>
  <p>A modern, AI-first Next.js monorepo template equipped with PostgreSQL, Prisma, Better-Auth, Ultracite, and native support for AI Agents (MCP & Skills).</p>

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
    <strong>English</strong> · <a href="./README.es.md">Español</a>
  </p>
</div>

---

## 📋 Table of Contents

- [What is this?](#-what-is-this)
- [Tech Stack](#-tech-stack)
- [AI Integrations & Tooling](#-ai-integrations--tooling)
  - [AI Skills](#ai-skills-agentsskills)
  - [MCP Servers](#mcp-servers-mcpjson)
  - [Global AI Config Files](#global-ai-config-files)
- [Monorepo Structure](#-monorepo-structure)
- [Quickstart](#-quickstart)
- [Environment Variables](#-environment-variables)
- [Files You Need to Edit](#-files-you-need-to-edit)
- [Available Scripts](#-available-scripts)
- [Database Commands](#-database-commands)
- [Code Quality](#-code-quality)
- [Contributing](#-contributing)
- [License](#-license)

---

## 🧭 What is this?

**Agentic Next.js Monorepo Starter** is a production-ready monorepo template built for developers who want to ship fast, with quality guardrails and first-class AI assistant support baked in from day one.

It combines a curated set of modern tools into a single, coherent setup so you don't have to wire everything together yourself. Beyond the typical tech stack, what makes this template unique is its native support for **AI Coding Assistants** — it ships with pre-configured skills, MCP servers, and global prompt files that teach AI agents about your architecture so they give better, more context-aware suggestions out of the box.

---

## 🚀 Tech Stack

| Tool                                                        | Purpose                                                         |
| ----------------------------------------------------------- | --------------------------------------------------------------- |
| **[Next.js 15+](https://nextjs.org/)**                      | React framework — App Router, Server Components, Server Actions |
| **[PostgreSQL](https://www.postgresql.org/)**               | Relational database engine                                      |
| **[Prisma ORM](https://www.prisma.io/)**                    | Type-safe database client and migration tool                    |
| **[Better Auth](https://better-auth.com/)**                 | Comprehensive TypeScript-first authentication library           |
| **[Bun](https://bun.sh/)**                                  | Fast JavaScript runtime, bundler & package manager              |
| **[Turborepo](https://turbo.build/)**                       | High-performance monorepo build system                          |
| **[Ultracite](https://github.com/haydenbleasel/ultracite)** | Zero-config linting + formatting preset (Oxlint + Oxfmt)        |
| **[Ruler](https://github.com/intellectronica/ruler)**       | Centralized standards for agentic workspaces                    |
| **[shadcn/ui](https://ui.shadcn.com/)**                     | Accessible, unstyled component library                          |
| **[Zod](https://zod.dev/)**                                 | Schema validation for environment variables and forms           |
| **[Husky](https://typicode.github.io/husky/)**              | Modern native git hooks for code quality checks                 |
| **[Docker](https://www.docker.com/)**                       | Local PostgreSQL via Docker Compose                             |

---

## 🧠 AI Integrations & Tooling

This repository is uniquely optimized for **AI Coding Assistants** (Antigravity, GitHub Copilot, Cursor, Windsurf, Claude Code, Cline, etc.).

### AI Skills (`.agents/skills/`)

Pre-configured sub-agent skill packs that give AI assistants deep, domain-specific knowledge about this codebase. When activated, they guide the AI to follow project conventions without repetitive prompting.

| Skill                         | Description                                         |
| ----------------------------- | --------------------------------------------------- |
| `architect-nextjs`            | Screaming Architecture + Scope Rule for Next.js 15+ |
| `better-auth-best-practices`  | Auth config, sessions, plugins, environment setup   |
| `interface-design`            | Dashboards, admin panels, app UI design             |
| `next-best-practices`         | File conventions, RSC, data patterns, async APIs    |
| `next-cache-components`       | PPR, `use cache`, `cacheLife`, `cacheTag`           |
| `prisma-cli`                  | Prisma CLI commands reference                       |
| `prisma-client-api`           | CRUD queries, filters, transactions                 |
| `prisma-database-setup`       | Database provider configuration                     |
| `turborepo`                   | Task pipelines, caching, monorepo best practices    |
| `ultracite`                   | Linting, formatting, Oxlint configuration           |
| `vercel-composition-patterns` | Compound components, render props, React 19         |
| `vercel-react-best-practices` | Performance patterns from Vercel Engineering        |
| `web-design-guidelines`       | Accessibility, UX auditing                          |
| `opentui`                     | Terminal UI with OpenTUI                            |

### MCP Servers (`.mcp.json`)

Model Context Protocol servers pre-configured for this project. These connect AI models to live documentation, component registries, and development tools:

| Server                                  | Purpose                                         |
| --------------------------------------- | ----------------------------------------------- |
| **Context7** (`@upstash/context7-mcp`)  | Live, version-accurate library documentation    |
| **shadcn** (`shadcn@latest mcp`)        | Browse and install shadcn/ui components         |
| **next-devtools** (`next-devtools-mcp`) | Next.js runtime diagnostics and error reporting |
| **better-auth** (`mcp.inkeep.com`)      | Better Auth documentation and API reference     |

### Global AI Config Files

| File             | Applies To           | Purpose                                         |
| ---------------- | -------------------- | ----------------------------------------------- |
| `GEMINI.md`      | Gemini / Antigravity | Code standards, Ultracite rules, React patterns |
| `AGENTS.md`      | Codex / OpenAI       | Global agent behavior rules                     |
| `CLAUDE.md`      | Claude / Claude Code | Global agent behavior rules                     |
| `.cursor/rules/` | Cursor               | Editor-level agent rules                        |
| `.windsurf/`     | Windsurf             | Editor-level agent rules                        |
| `.kilocode/`     | Kilocode             | Editor-level agent rules                        |

---

## 📁 Monorepo Structure

```
.
├── apps/
│   └── web/                    # Next.js 15 application
│       ├── app/                # App Router routes & layouts
│       ├── components/         # UI components
│       └── ...
├── packages/
│   ├── auth/                   # Better Auth server & client config
│   ├── config/                 # Shared TypeScript/tool configs
│   ├── db/                     # Prisma schema, migrations, Docker Compose
│   └── env/                    # Typed environment variables (t3-env + Zod)
├── .agents/skills/             # AI agent skills (domain knowledge packs)
├── .mcp.json                   # MCP server definitions
├── GEMINI.md                   # AI config for Gemini
├── AGENTS.md                   # AI config for Codex/OpenAI agents
├── CLAUDE.md                   # AI config for Claude
├── turbo.json                  # Turborepo task pipeline
└── package.json                # Root workspace
```

---

## ⚡ Quickstart

> **Prerequisites:** [Bun](https://bun.sh/) ≥ 1.3, [Docker](https://www.docker.com/) (for local PostgreSQL)

### 1. Clone the repo

```bash
git clone https://github.com/IvanTsxx/AI-Nextjs-Monorepo-Starter.git my-app
cd my-app
```

> [!IMPORTANT]
> Once you have cloned the repository, remember to replace all occurrences of `your-repo-name` (or the original project name) with your actual repository name in the root `package.json` and other configuration files.

### 2. Install dependencies

```bash
bun install
```

### 3. Set up environment variables

Copy the example below into a `.env` file at the root **and** in `apps/web/`:

```env
# Database
DATABASE_URL="postgresql://postgres:password@localhost:5432/mydb"

# Better Auth
BETTER_AUTH_SECRET="your-secret-at-least-32-chars-long"
BETTER_AUTH_URL="http://localhost:3001"

# CORS
CORS_ORIGIN="http://localhost:3001"
NODE_ENV="development"
```

> See the [Environment Variables](#-environment-variables) section for the full reference.

### 4. Start the database

```bash
bun run db:start   # starts PostgreSQL via Docker Compose
```

### 5. Generate the Prisma client

```bash
bun run db:generate    # generates the Prisma client
```

### 6. Push the database schema

```bash
bun run db:push    # syncs Prisma schema to your database
```

### 7. Start the dev server

```bash
bun run dev        # starts all apps in the monorepo
# or just the web app:
bun run dev:web
```

Open [http://localhost:3001](http://localhost:3001) 🎉

---

## 🔐 Environment Variables

All environment variables are validated at runtime using [t3-env](https://github.com/t3-oss/t3-env) + Zod. Defined in `packages/env/src/server.ts`.

| Variable             | Required | Description                                                        |
| -------------------- | -------- | ------------------------------------------------------------------ |
| `DATABASE_URL`       | ✅       | PostgreSQL connection string                                       |
| `BETTER_AUTH_SECRET` | ✅       | Secret key (min. 32 chars) for auth token signing                  |
| `BETTER_AUTH_URL`    | ✅       | Full URL where your app is hosted (e.g., `http://localhost:3001`)  |
| `CORS_ORIGIN`        | ✅       | Allowed CORS origin URL                                            |
| `NODE_ENV`           | ✅       | `development`, `production`, or `test` (defaults to `development`) |

---

## ✏️ Files You Need to Edit

When customizing this template for your own project, focus on these files:

| File / Path                             | What to change                                                               |
| --------------------------------------- | ---------------------------------------------------------------------------- |
| `package.json`                          | **Project name**, description, **repository URL** (replace `your-repo-name`) |
| `apps/web/app/layout.tsx`               | App name, metadata (title, description)                                      |
| `packages/env/src/server.ts`            | Add / remove environment variables                                           |
| `packages/db/prisma/schema.prisma`      | Add your own data models                                                     |
| `packages/db/docker-compose.yml`        | Database name, port, credentials                                             |
| `packages/auth/src/`                    | Auth plugins, OAuth providers, session config                                |
| `.mcp.json`                             | Add or remove MCP servers for your AI tools                                  |
| `.agents/skills/`                       | Add custom skills for your domain                                            |
| `GEMINI.md` / `AGENTS.md` / `CLAUDE.md` | Project-specific AI coding rules                                             |
| `turbo.json`                            | Add new pipeline tasks if you add packages                                   |

---

## 📜 Available Scripts

Run from the **root** of the monorepo:

```bash
bun run dev           # Start all apps in development mode
bun run dev:web       # Start only the web app
bun run build         # Build all apps for production
bun run check-types   # TypeScript type-check across the monorepo
bun run check         # Lint & format check (Ultracite)
bun run fix           # Auto-fix lint & formatting issues (Ultracite)
bun run ruler:apply   # Apply Ruler standards (local only)
bun run prepare       # Set up Husky git hooks
```

---

## ⚓ Git Hooks

This repository uses **Husky** to enforce code quality before every commit.

- **Pre-commit:** Runs `lint-staged`, which executes `ultracite fix` on changed files to ensure all committed code is properly formatted and linted according to project standards.

---

## 🗄️ Database Commands

```bash
bun run db:start      # Start PostgreSQL container (Docker)
bun run db:stop       # Stop PostgreSQL container
bun run db:down       # Stop and remove PostgreSQL container
bun run db:push       # Sync Prisma schema → database (no migration file)
bun run db:migrate    # Create and apply a migration
bun run db:generate   # Regenerate Prisma Client after schema changes
bun run db:studio     # Open Prisma Studio (visual DB browser)
bun run db:watch      # Watch for schema changes
```

---

## 🛡️ Code Quality

This project uses **[Ultracite](https://github.com/haydenbleasel/ultracite)** — a zero-config preset for Oxlint + Oxfmt.

```bash
bun run check         # Check for issues
bun run fix           # Auto-fix all fixable issues
bun x ultracite doctor  # Diagnose setup problems
```

> See `GEMINI.md` for the full coding standards reference used by both the team and AI assistants.

---

## 🤝 Contributing

Contributions, issues, and feature requests are welcome! Feel free to check the [issues page](https://github.com/IvanTsxx/AI-Nextjs-Monorepo-Starter/issues).

1. Fork the repo
2. Create your feature branch: `git checkout -b feat/amazing-feature`
3. Commit changes: `git commit -m 'feat: add amazing feature'`
4. Push and open a Pull Request

---

## 📄 License

MIT © [IvanTsxx](https://github.com/IvanTsxx)
