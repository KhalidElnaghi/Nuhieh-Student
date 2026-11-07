# Nuhieh Student

Nuhieh Student dashboard, built with **Next.js 14 (App Router)**, **Material-UI v5**, **TanStack React Query v5**, and **i18next** (Arabic/English with RTL support).

## Getting Started

```bash
npm install
cp .env.example .env   # then set NEXT_PUBLIC_HOST_API
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

### Environment Variables

| Variable | Description |
|---|---|
| `NEXT_PUBLIC_HOST_API` | API base URL |
| `NEXT_PUBLIC_ASSETS_API` | Assets base URL (optional) |
| `NEXT_PUBLIC_LANGUAGE` | Default language: `ar` or `en` |

## Project Structure

```
src/
├── api/          # API client functions & query-keys factory
├── app/          # App Router: (auth) and (dashboard) route groups
├── auth/         # Auth context & route guards
├── components/   # Reusable UI components
├── hooks/        # Custom hooks (queries, responsive, etc.)
├── layouts/      # Dashboard layouts & navigation config
├── locales/      # Translations (en, ar)
├── sections/     # Page views
├── theme/        # MUI theme, palette, typography
├── utils/        # Axios instance (endpoints), helpers
└── paths.ts      # Route paths
```

## Scripts

| Command | Purpose |
|---|---|
| `npm run dev` | Start the dev server |
| `npm run build` | Production build |
| `npm run start` | Run the production build |
| `npm run ts` | Type check |
| `npm run lint` | Lint |
| `npm run prettier` | Format |
