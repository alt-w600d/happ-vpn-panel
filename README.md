# Happ VPN Panel

React + Vite frontend prototype for a personal Happ VPN dashboard.

## Included
- Responsive dark dashboard UI
- France and Ireland location cards
- Clear demo-state labels: no server is configured and no working VPN profile is generated
- No API keys, passwords, or other secrets

## Run locally
```bash
npm install
npm run dev
```

## Build
```bash
npm run build
```

## Deploy to Vercel
Import this repository into Vercel. Framework preset: Vite. Build command: `npm run build`; output directory: `dist`.

## Important
This is only the frontend. Vercel and Supabase do not route VPN traffic by themselves. A real VPN server and secure server-side provisioning will be needed before profiles can work in Happ. Never commit VPN private keys or Supabase service-role keys. Enable Row Level Security on exposed Supabase tables.
