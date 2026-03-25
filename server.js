require('dotenv').config();
const express = require('express');
const path = require('path');
const app = express();

app.use(express.json());
app.use(express.static(__dirname));

const demoRankings = [
  { keyword: 'pressure washing charlotte', position: 3, change: +2, trend: 'up', volume: '880/mo' },
  { keyword: 'best pressure washer near me', position: 7, change: +5, trend: 'up', volume: '1,200/mo' },
  { keyword: 'driveway cleaning charlotte nc', position: 4, change: +1, trend: 'up', volume: '320/mo' },
  { keyword: 'commercial pressure washing', position: 12, change: -1, trend: 'down', volume: '590/mo' },
  { keyword: 'roof soft wash charlotte', position: 2, change: +3, trend: 'up', volume: '260/mo' },
  { keyword: 'power washing near me', position: 9, change: 0, trend: 'flat', volume: '2,400/mo' },
];

const demoAudit = {
  score: 62,
  url: 'https://704pressurewashing.com',
  issues: [
    { severity: 'critical', icon: '❌', text: 'No mobile viewport meta tag' },
    { severity: 'critical', icon: '❌', text: 'Page loads in 8.2s (target: <3s)' },
    { severity: 'critical', icon: '❌', text: 'Missing Google Business Profile' },
    { severity: 'medium', icon: '⚠️', text: 'No meta descriptions on 4 pages' },
    { severity: 'medium', icon: '⚠️', text: 'Images missing alt text' },
    { severity: 'good', icon: '✅', text: 'HTTPS enabled' },
    { severity: 'good', icon: '✅', text: 'Mobile-friendly design' },
  ]
};

app.get('/', (req, res) => res.sendFile(path.join(__dirname, 'index.html')));

app.get('/api/demo/rankings', (req, res) => res.json(demoRankings));

app.get('/api/demo/audit', (req, res) => res.json(demoAudit));

app.post('/api/scan', (req, res) => {
  const { url, keywords } = req.body;
  if (!url) return res.status(400).json({ error: 'url is required' });
  res.json({
    scanId: `scan_${Date.now()}`,
    url,
    keywordsQueued: keywords?.length || 0,
    estimatedTime: '2-3 minutes',
    message: 'Scan queued. Check back shortly for results.',
  });
});

app.get('/health', (req, res) => res.json({ status: 'ok', service: 'stranex-rank' }));

const PORT = process.env.PORT || 4002;
app.listen(PORT, () => console.log(`\n📊 Stranex Rank running at http://localhost:${PORT}\n`));
module.exports = app;
