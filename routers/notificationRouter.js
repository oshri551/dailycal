"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const bodyParser = require("body-parser");
const notificationController_1 = require("../controllers/notificationController");
const routerBase_1 = require("./routerBase");
class NotificationRouter extends routerBase_1.RouterBase {
    static getInstance() {
        if (this.s_instance === null) {
            this.s_instance = new NotificationRouter();
        }
        return this.s_instance;
    }
    init() {
        this.m_expressRouter = express.Router();
        let notificationController = notificationController_1.NotificationController.getInstance();
        this.m_expressRouter.use(bodyParser.json());
        this.m_expressRouter.route('/notification/send')
            .all((req, res, next) => {
            // do your authorization and session management here
            next();
        })
            .post((req, res, next) => {
            notificationController.sendNotificationsobj(req.body)
                .then((result) => {
                this.returnSuccessResult(res, result);
            })
                .catch((result) => {
                this.returnFailureResult(res, result);
            });
        });
        this.m_expressRouter.route('/meetings')
            .get((req, res, next) => {
            notificationController.getData()
                .then((result) => {
                this.returnSuccessResult(res, result);
            })
                .catch((result) => {
                this.returnFailureResult(res, result);
            });
        });
        this.m_expressRouter.route('/register/:tokenID')
            .get((req, res, next) => {
            console.log(req.params.tokenID);
            notificationController_1.NotificationController.setToken(req.params.tokenID);
            notificationController_1.NotificationController.getInstance().sendNotifications('Intel Calendar', 'You have a meeting...', req.params.tokenID);
        })
            .delete((req, res, next) => {
            console.log(req.params.tokenID);
            notificationController_1.NotificationController.setToken('');
        });
    }
}
exports.NotificationRouter = NotificationRouter;
//# sourceMappingURL=notificationRouter.js.map