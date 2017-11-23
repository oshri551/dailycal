"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const configurations_1 = require("../configurations");
const objects_1 = require("../objects");
const utils_1 = require("../utils");
class NotificationManager {
    static sendNotification(body) {
        let res = new objects_1.Response();
        if (body.to !== '') {
            let httpOptions = {
                method: 'POST',
                uri: `${configurations_1.getConfiguration().notificationServer.host}:${configurations_1.getConfiguration().notificationServer.port}/fcm/send`,
                json: true,
                body: body,
                resolveWithFullResponse: true
            };
            httpOptions['headers'] = {
                Authorization: `key=AAAAWEWCiAY:APA91bE7Bomi89TySQqkIPEppHKDl4Fs0eld99GOwE6QCaPjjlanjbsFGl5LvWxsUIbtUqcLpt3svJMoshIrkPQqb9mT2HEUowOZPpjT3XMx2MgY5fpnP7vSnBN9j1gEH7fujRlXBUnT`
            };
            return utils_1.InternalHttpRequest.httpCallToken(httpOptions);
        }
        else {
            res.status = true;
            res.httpCode = configurations_1.CONSTANTS.HTTP_STATUS_CODE.OK;
            return Promise.resolve(res);
        }
    }
}
exports.NotificationManager = NotificationManager;
//# sourceMappingURL=NotificationManager.js.map