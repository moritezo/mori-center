const http = require('http');
const server = http.createServer((req, res) => {
  const uuid = "UUID-اختصاصی-تو"; // این را بعداً با UUID خودت عوض کن
  const cleanIP = "104.18.15.10";
  const host = "mori-center.b4a.run";

  if (req.url === '/sub') {
    let config = `vless://${uuid}@${cleanIP}:443?encryption=none&security=tls&sni=${host}&type=ws&host=${host}&path=%2f#Mori-PurVPN`;
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.end(Buffer.from(config).toString('base64'));
  } else {
    res.writeHead(200);
    res.end("PurVPN Center is Active!");
  }
});
server.listen(process.env.PORT || 3000);
