const http = require('http');

const server = http.createServer((req,res)=>{
    res.statusCode(400)
})


server.listen(3000,()=> console.log('le serveur se toutnr su http://localhost'));