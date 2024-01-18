const http = require('http')
PORT=5000

http.createServer((request, response)=>{
    response.end('<html><h2>Helloooo node !!!</h2></html>')
}).listen(PORT)

console.log(`server is running on http://127.0.0.1:${PORT}`)