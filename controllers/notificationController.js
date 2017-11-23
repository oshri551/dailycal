"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const services_1 = require("../services");
class NotificationController {
    constructor() {
    }
    static getInstance() {
        if (this.s_instance === null) {
            this.s_instance = new NotificationController();
        }
        return this.s_instance;
    }
    static setToken(tokenID) {
        this.s_tokenID = tokenID;
    }
    sendNotifications(title, text, token) {
        let postBody = {
            notification: {
                title,
                text
            },
            to: token
        };
        if (token !== '') {
            return services_1.NotificationManager.sendNotification(postBody);
        }
    }
    sendNotificationsobj(body) {
        return services_1.NotificationManager.sendNotification(body);
    }
    getData() {
        return services_1.MeetingsManager.getMeetings();
    }
}
NotificationController.s_instance = null;
NotificationController.s_tokenID = `exHk5g3hdyU:APA91bG1KqSI_b7LRR72bJDVfaOq9uM5YxL8Zrif6SajHDqRBfaAuvt3OHcQm11QYs2h6xqUeclQOdG6wS9l4KIsXK8nbpbe3j-ItUT4fpoKmtpgXF7Lsp8jzx1zv-8I8r_hN2WDBhN3`;
exports.NotificationController = NotificationController;
//# sourceMappingURL=notificationController.js.map