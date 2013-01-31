var app = require('http').createServer(handler)
    , fs = require('fs')

app.listen(3000);

function handler (req, res) {
    fs.readFile('jquery.html',
        function (err, data) {
            if (err) {
                res.writeHead(500);
                return res.end('Error loading jquery.htm');
            }

            res.writeHead(200);
            res.end(data);
        });
}

console.log("Server listening on port 3000");
