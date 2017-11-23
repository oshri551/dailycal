"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const configurations_1 = require("../configurations");
const objects_1 = require("../objects");
class MeetingsManager {
    static getMeetings() {
        let response = new objects_1.Response();
        response.httpCode = configurations_1.CONSTANTS.HTTP_STATUS_CODE.OK;
        response.data = configurations_1.MEETINGS;
        response.status = true;
        return Promise.resolve(response);
    }
}
exports.MeetingsManager = MeetingsManager;
//# sourceMappingURL=MeetingsManager.js.map