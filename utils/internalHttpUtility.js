"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let httpRequest = require('request-promise');
const configurations_1 = require("../configurations");
const Response_1 = require("../objects/Response");
class InternalHttpRequest {
    static httpCallToken(httpOptions) {
        let response = new Response_1.Response();
        return httpRequest(httpOptions)
            .then((res) => {
            response.message = res.body;
            response.httpCode = configurations_1.CONSTANTS.HTTP_STATUS_CODE.OK;
            response.status = true;
            return Promise.resolve(response);
        })
            .catch((res) => {
            return Promise.reject(response);
        });
    }
}
exports.InternalHttpRequest = InternalHttpRequest;
//# sourceMappingURL=internalHttpUtility.js.map