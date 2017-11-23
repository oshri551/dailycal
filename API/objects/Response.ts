import { CONSTANTS } from '../configurations';
export class Response {
    private m_status: boolean;
    private m_data: object;
    private m_messgae: string;
    private m_httpCode: number;
    public constructor() {
        this.m_status = false;
        this.m_messgae = '';
        this.m_data = null;
        this.m_httpCode = CONSTANTS.HTTP_STATUS_CODE.SERVER_ERROR;
    }

    set status(status: boolean){
        this.m_status = status;
    }

    get status(): boolean{
        return this.m_status;
    }

    set httpCode(code: number){
        this.m_httpCode = code;
    }

    get httpCode(): number{
        return this.m_httpCode;
    }

    set message(message: string){
        this.m_messgae = message;
    }
    get message(): string{
        return this.m_messgae
    }

    set data(data: object){
        this.m_data=data;
    }
    get data(): object{
        return this.m_data;
    }

}