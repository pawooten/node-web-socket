import * as express from "express";
import * as path from "path";
import {Server} from "ws";

const app = express();

app.use('/', express.static(path.join(__dirname, '..', 'static')));
app.use('/node_modules', express.static(path.join(__dirname, '..', 'node_modules')));

// app.get('/', (request, response) => {
//     response.sendFile(path.join(__dirname, '../static/hello-world.html'));
// });

const server = app.listen(8000, "localhost", () => {
    const {address, port} = server.address();
    console.log('Listening on %s %s', address, port);
});