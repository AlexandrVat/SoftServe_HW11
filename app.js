let os = require('os');
let path = require('path');
let mytime = require('./personalmodule'); 

let tsStr = mytime.ntime(os.userInfo().username);

let  resstr = `<h2> System information </h2>`
resstr += `<p> Current user name : ${os.userInfo().username} </p>`;
resstr += `<p> OS type : ${os.type()} </p>`;
resstr += `<p> System work time : ${os.uptime()} </p>`;
resstr += `<p> Current work directory : ${path.resolve(__dirname, '')} </p>`;
resstr += `<p> Server file name : ${path.basename(__filename)} </p> <br>`;
resstr += `<h2> Task 2 </h2>`
resstr += ` ${tsStr} `;

const http = require('http');
const hostname = '127.0.0.1';
const port = 3000;


const server = http.createServer((req, res) => {  
  
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/html');
  res.end(resstr);

});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);

});

