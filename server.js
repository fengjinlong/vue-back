let http = require('http')
let users = [
  {id: 1, name: 'z111p11'},
  {id: 11, name: 'qzz11z12'},
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