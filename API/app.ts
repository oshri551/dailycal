import * as Passport from 'passport-azure-ad'
import { Router }  from 'express';
import { Server } from './server';
import {NotificationRouter } from './routers';
import { getConfiguration } from './configurations/config';

// ###################      Start Here       ################
let OIDCStrategy = Passport.OIDCStrategy;
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
    let notificationRouter: NotificationRouter = NotificationRouter.getInstance();
    notificationRouter.init();
    serverInstance.setRouter('/rest/v1', notificationRouter.router);
}


