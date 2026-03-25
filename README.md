# Stranex Rank

Local SEO rank tracking and weekly audit reports for service businesses.

## Setup

```bash
npm install
cp .env.example .env
npm start
# → http://localhost:4002
```

## API
- `GET /` — Landing page
- `GET /api/demo/rankings` — Demo keyword rankings
- `GET /api/demo/audit` — Demo site audit
- `POST /api/scan` — Queue a scan: `{url, keywords: []}`
- `GET /health` — Health check
