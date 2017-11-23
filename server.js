"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const bodyParser = require("body-parser");
const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
class Server {
    constructor() {
        this.m_app = express();
        this.m_app.use(bodyParser.json());
        this.m_app.use(bodyParser.urlencoded({
            extended: true
        }));
        this.m_app.use(cors());
    }
    set port(port) {
        this.m_port = port;
        this.m_app.set('port', this.m_port);
    }
    get port() {
        return this.m_port;
    }
    setRouter(path, route) {
        this.m_app.use(path, route);
        this.m_app.use(express.static(__dirname + '/dist'));
        this.m_app.get('*', (req, res) => {
            res.sendFile(__dirname + '/dist');
        });
    }
    startServer(host) {
        this.m_app.listen(this.m_port, host, () => {
        });
    }
    startConsoleLogging() {
        this.m_app.use(morgan('common'));
    }
}
exports.Server = Server;
//# sourceMappingURL=server.js.map