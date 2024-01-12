const http = require('http')

const port = 8080;

const server = http.createServer((req, res) => {
  if (req.url === '/') {
    res.writeHead(200, { 'Content-Type': 'text/html' })
    res.end('<h1>Hello World</h1>')
  }
  if (req.url === '/users') {
    const users = [
      {
        name: 'Nicolas Castela',
        email: 'nickcastela@hotmail.com'
      },
      {
        name: 'Marcel Gayzin',
        email: 'marcelgay@hotmail.com'
      }
    ];
    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify(users));
  }
});
  server.listen(port, () => console.log(`Rodando na porta ${port}`));
