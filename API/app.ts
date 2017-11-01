import { Router }  from 'express';
import { Server } from './server';
import { SomeRouter } from './routers';
import { getConfiguration } from './configurations/config';


// ###################      Start Here       ################

let serverInstance: Server = new Server();

// configure the port
serverInstance.port = process.env.PORT || getConfiguration().port;

// start logging to console
serverInstance.startConsoleLogging();

// routing configured in this function
configureRouting(serverInstance);

// starting the server
serverInstance.startServer('0.0.0.0');
console.log(`TestServer is up and running, port: ${getConfiguration().port}`);

function configureRouting(serverInstance: Server) {
    let someRouter: SomeRouter = SomeRouter.getInstance();
    someRouter.init();
    serverInstance.setRouter('/rest/v1/SomeRouter', someRouter.router);
}

