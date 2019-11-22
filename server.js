let http = require('http')
let users = [
  {id: 111, name: '1z1111pp1'},
  {id: 111, name: 'qz11z12'},
  {id: 111, name: 'qqqzzz3'}
]
let server = http.createServer((req, res) => {
  res.setHeader('Access-Control-Allow-Origin', '*')
  // Access-Control-Allow-Origin
  if (req.url === '/api') {
    res.end(JSON.stringify(users))
  } else {
    res.end('not found')
  }
})
server.listen(3000, () => {
  console.log('接口服务器 🍊 3000')
})