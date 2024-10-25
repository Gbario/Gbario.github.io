const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {
res.setHeader('Content-Type', 'text/html');
console.log('request recieved');

// Routing
let path = './html/';
switch(req.url){
    case '/':
        path += 'Menu.html';
        break;

    case '/paginaprincipal':
        path += 'PaginaPrincipal.html';
        break;
    
    case '/PaginaSecundaria':
        path += 'PaginaSecundaria.html';
        break;

    default:
        path += 'error.html';
        break;

}

fs.readFile(path, (err, data) => {
    if(err){
        console.log(err);
        res.end();
    }else{

       res.write(data);
        res.end();
    }
})

});

server.listen(3000, 'localhost', () => {
    console.log('listening');
});