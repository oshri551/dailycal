"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Passport = require("passport-azure-ad");
const server_1 = require("./server");
const routers_1 = require("./routers");
// import {  PushNotifications } from './tasks/pushNotifications';
const config_1 = require("./configurations/config");
// ###################      Start Here       ################
let OIDCStrategy = Passport.OIDCStrategy;
let serverInstance = new server_1.Server();
// configure the port
serverInstance.port = process.env.PORT || config_1.getConfiguration().port;
// start logging to console
serverInstance.startConsoleLogging();
// routing configured in this function
configureRouting(serverInstance);
// starting the server
serverInstance.startServer('0.0.0.0');
console.log(`TestServer is up and running, port: ${config_1.getConfiguration().port}`);
function configureRouting(serverInstance) {
    let notificationRouter = routers_1.NotificationRouter.getInstance();
    notificationRouter.init();
    serverInstance.setRouter('/rest/v1', notificationRouter.router);
}
// configure tasks
// let taskSchedular: PushNotifications = PushNotifications.getInstance();
// taskSchedular.start();
//# sourceMappingURL=app.js.map