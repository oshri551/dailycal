import * as Passport from 'passport-azure-ad'
import { Router }  from 'express';
import { Server } from './server';
import { MainRouter } from './routers';
import { getConfiguration } from './configurations/config';

// ###################      Start Here       ################
let OIDCStrategy = Passport.OIDCStrategy;
let serverInstance: Server = new Server();

OIDCStrategy.use( new OIDCStrategy({
    callbackURL: getConfiguration.creds.returnURL,
    realm: config.creds.realm,
    clientID: config.creds.clientID,
    clientSecret: config.creds.clientSecret,
    oidcIssuer: config.creds.issuer,
    identityMetadata: config.creds.identityMetadata,
    responseType: config.creds.responseType,
    responseMode: config.creds.responseMode,
    skipUserProfile: config.creds.skipUserProfile
    scope: config.creds.scope
  },

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
    let mainRouter: MainRouter = MainRouter.getInstance();
    mainRouter.init();
    serverInstance.setRouter('/rest/v1', mainRouter.router);
}

