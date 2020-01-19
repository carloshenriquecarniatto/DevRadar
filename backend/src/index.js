const express = require('express');
const mongoose = require('mongoose');
const routes = require('./routes');
const cors = require('cors');
const http = require('http');
const { setupwebSocket } = require('./websocket');

const app = express();
const server = http.Server(app);

setupwebSocket(server);
mongoose.connect('mongodb+srv://carlos:SyZB9SQ5Z193bChY@devradar-zh8mg.mongodb.net/week10?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
mongoose.set('useCreateIndex', true)
app.use(cors());
app.use(express.json());
app.use(routes);
server.listen(3333);

