"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const configurations_1 = require("../configurations");
class RouterBase {
    constructor() {
        this.m_expressRouter = null;
    }
    returnSuccessResult(res, result) {
        result.httpCode = configurations_1.CONSTANTS.HTTP_STATUS_CODE.OK;
        res.writeHead(configurations_1.CONSTANTS.HTTP_STATUS_CODE.OK, { 'content-type': 'text/json' });
        res.end(JSON.stringify(result));
    }
    returnFailureResult(res, result) {
        res.writeHead(result.httpCode, { 'content-type': 'text/json' });
        res.end(JSON.stringify(result));
    }
    get router() {
        return this.m_expressRouter;
    }
}
RouterBase.s_instance = null;
exports.RouterBase = RouterBase;
//# sourceMappingURL=routerBase.js.map