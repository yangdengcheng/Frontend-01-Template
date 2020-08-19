const http = require('http');
const fs = require('fs');
const unzip = require('unzipper');

// Create an HTTP server
const server = http.createServer((req, res) => {
    // let matched = req.url.match(/filename=([^&]+)/);
    // let filename = matched && matched[1];
    // if(!filename) return ;
    // let writeStream = fs.createWriteStream("../server/public/" + filename);
    // req.pipe(writeStream);

    let writeStream = unzip.Extract({path: "../server/public"})
    req.pipe(writeStream);
    req.on("end", () => {
        res.writeHead(200, { 'Content-Type': 'text/plain' });
        res.end('okay');
    })
});

// Now that server is running
server.listen(8081);