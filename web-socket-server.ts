import * as express from "express";
import * as path from "path";
import {Server} from "ws";

const app = express();

// Serve http content
app.get('/', (request, response) => {
  console.log('get / ');
    response.sendFile(path.join(__dirname, '../static/index.html'));
});

app.use('/', express.static(path.join(__dirname, '..', 'static')));
app.use('/node_modules', express.static(path.join(__dirname, '..', 'node_modules')));

const httpServer = app.listen(8000, "localhost", () => {
    const {address, port} = httpServer.address();
    console.log('HTTP Server is listening on %s %s', address, port);
});

// WebSocket Server
var wsServer: Server = new Server({port:8085});
console.log('WebSocket server is listening on port 8085');
wsServer.on('connection', webSocket => webSocket.send('This message was pushed by the WebSocket server'));