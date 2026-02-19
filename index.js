const http = require('http');
const https = require('https');

const server = http.createServer((req, res) => {
  if (req.url === '/sub') {
    https.get('https://mori-sub.cr7-mori.workers.dev/sub', (proxyRes) => {
      res.writeHead(proxyRes.statusCode, { 'Content-Type': 'text/plain; charset=utf-8' });
      proxyRes.pipe(res);
    }).on('error', (e) => {
      res.writeHead(500);
      res.end("Error: " + e.message);
    });
  } else {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end("Mori-Center is Active.");
  }
});

server.listen(process.env.PORT || 3000);
