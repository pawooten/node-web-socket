import * as express from "express";
import * as path from "path";

const app = express();

// app.use('/', function (request, response, next ) {
//   console.log('app.use() invoked for /');
//   Process the next middleware request
//   next();

//   response.sendFile(path.join(__dirname, '../static/hello-world.html'));
// })
app.use('/', express.static(path.join(__dirname, '..', 'static')));

// app.get('/', (request, response) => {
//     response.sendFile(path.join(__dirname, '../static/hello-world.html'));
// });

const server = app.listen(8000, "localhost", () => {
    const {address, port} = server.address();
    console.log('Listening on %s %s', address, port);
});