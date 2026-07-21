# Portfolio Contribution Guide

## Project Principles

- This is a small personal portfolio. Prefer the smallest clear solution that fits the existing structure.
- Do not introduce unnecessary abstractions, dependencies, state management, backend services, or build tooling.
- Preserve the established visual language and component patterns unless the requested change requires otherwise.
- Keep code, code comments, documentation, commit messages, and other AI-generated artifacts in English.
- Update this file whenever an application change makes these instructions inaccurate or incomplete. Split detailed, stable guidance into `docs/` only when this file can no longer remain concise.

## Project Structure

- `src/app/` contains App Router routes, the root layout, global loading UI, static SEO routes, and portfolio sections.
- `src/app/components/` contains components owned by the portfolio page, such as `Header`, `AboutMe`, and `Footer`.
- `src/components/` contains generic UI primitives that can be used anywhere, such as `Button`, `Card`, `Divider`, `Heading`, and `Spinner`.
- `src/translation/` contains locale detection, the translation provider, and locale JSON files.
- `src/core/config.ts` is the single source for build-time site configuration, including `BASE_PATH`, `SITE_URL`, and `GTAG`.
- `src/styles/` contains global Sass, font declarations, and the Tailwind entrypoint. Use Tailwind utilities for component styling; keep global styles limited to application-wide concerns.
- `public/` contains static assets. `projects.json` and `src/util/colors.ts` are legacy files with no current consumer; do not build new features around them without first establishing a real use case.

## Components

- Organize each component in a PascalCase directory and use `index.tsx` as its entry file.
- Shared components belong in `src/components/<ComponentName>/index.tsx`.
- Page-specific sections belong in `src/app/components/<ComponentName>/index.tsx`.
- When a component needs implementation details that are not reusable elsewhere, place them in `components/` within that component directory. For example: `src/app/components/Header/components/Contact/index.tsx`.
- Do not promote a nested component to `src/components/` unless it has a genuine use outside its current feature.
- Use default exports, typed local props interfaces when props are needed, and the existing `@/*` aliases.
- Add `'use client'` only when a component requires client-side React hooks, browser APIs, or event handling. Keep browser-only APIs inside client component boundaries.
- Existing shared primitives still use legacy `<ComponentName>.tsx` filenames. Use `index.tsx` for all new component work; migrate a legacy primitive only when it is otherwise being substantially changed.

## Static Export and GitHub Pages

- The site is deployed through GitHub Pages and must remain compatible with Next.js static export.
- Keep `output: 'export'` in `next.config.ts`.
- Do not use server-only runtime features, including API routes, Server Actions, middleware, request-time rendering, or dependencies on runtime environment access in browser code.
- Every route and asset must work with `CONFIG.basePath`; use the existing configuration instead of hardcoding repository paths.
- Keep SEO route handlers (`sitemap.ts` and `robots.ts`) statically generated.
- Verify static-export compatibility with `yarn build` after changes that affect pages, routes, metadata, assets, or Next.js configuration.

## Internationalization and Content

- All user-visible copy must use the translation system.
- This includes visible text, accessible labels, image alternatives, and metadata when they are user-facing.
- Add matching keys and equivalent content to both `src/translation/locales/en-us.json` and `src/translation/locales/pt-br.json`; their key sets must remain identical.
- Do not add hardcoded user-visible strings to React components, layouts, or metadata.
- Keep translation keys flat, descriptive, stable, and grouped by page or component with dotted names such as `aboutMe.title`.
- Remove locale keys when the associated feature is removed.

## Code Style

- Use TypeScript and follow the existing `@/*` import alias and Prettier configuration.
- Format code with 2 spaces, single quotes, semicolons, and no trailing commas.
- Keep components focused and colocate feature-specific code with the feature.
- Prefer existing primitives and Tailwind utilities over custom CSS or new dependencies. Use `twMerge` and the existing variant patterns when extending shared primitives.
- Do not edit generated output such as `.next/` or `out/`.
- Do not manually edit `yarn.lock`; let Yarn update it only when dependencies change.

## Commits and Versioning

- Only create a commit when explicitly requested.
- Use Conventional Commits: `feat:`, `fix:`, `docs:`, `style:`, `refactor:`, `test:`, `build:`, or `chore:`.
- Every requested commit must update the `version` in `package.json` using Semantic Versioning:
  - Increment `PATCH` for fixes and internal non-breaking maintenance.
- Increment `MINOR` for backward-compatible features.
- Increment `MAJOR` for breaking changes.
- Update `yarn.lock` only when dependency changes require it.

## Validation

- Use Yarn Classic because `yarn.lock` is the project lockfile.
- Run the relevant validation before finishing work. Use `yarn build` whenever static-export behavior could be affected.
- Before committing, inspect the intended diff and run the applicable checks.
- The current project has no automated test suite. Do not claim tests were run unless a test command was actually added and executed.

## Local Servers

- Always stop every local application server started during a task before finishing. Never leave a development server or an open application port running in the background.
