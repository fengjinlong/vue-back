let http = require('http')
let users = [
  {id: 1, name: '111'},
  {id: 2, name: '222'},
  {id: 3, name: '333'}
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