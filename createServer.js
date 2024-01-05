/** @format */

const http = require("http");

const server = http.createServer((req, res) => {
    if(req.url == '/'){
        res.end('Hello this is Home page.');
    }
    else if(req.url =='/about'){
        res.end('Welcome to about page......');
    }
    else{
        res.end('Requested page not found');
    }
});

server.listen(2008, function (req,res){
    console.log("server is running");
});
                            