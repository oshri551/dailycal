"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const configurations_1 = require("../configurations");
class Response {
    constructor() {
        this.m_status = false;
        this.m_messgae = '';
        this.m_data = null;
        this.m_httpCode = configurations_1.CONSTANTS.HTTP_STATUS_CODE.SERVER_ERROR;
    }
    set status(status) {
        this.m_status = status;
    }
    get status() {
        return this.m_status;
    }
    set httpCode(code) {
        this.m_httpCode = code;
    }
    get httpCode() {
        return this.m_httpCode;
    }
    set message(message) {
        this.m_messgae = message;
    }
    get message() {
        return this.m_messgae;
    }
    set data(data) {
        this.m_data = data;
    }
    get data() {
        return this.m_data;
    }
}
exports.Response = Response;
//# sourceMappingURL=Response.js.map