import * as express from 'express' ;
import * as bodyParser from 'body-parser';
import { IRouter } from './IRouter';
import { Response } from '../objects/Response';
import { CONSTANTS } from '../configurations';

export abstract class RouterBase implements IRouter {

    protected static s_instance: RouterBase = null;
    protected m_expressRouter: express.Router = null;


     protected returnSuccessResult(res, result: Response) {
        result.httpCode = CONSTANTS.HTTP_STATUS_CODE.OK;
        res.writeHead(CONSTANTS.HTTP_STATUS_CODE.OK, {'content-type': 'text/json'});
        res.end(JSON.stringify(result));
    }

    protected returnFailureResult(res, result: Response) {
         res.writeHead(result.httpCode, {'content-type': 'text/json'});
         res.end(JSON.stringify(result));
    }

    public abstract init(): void;

    get router(): express.Router {
        return this.m_expressRouter;
    }

}











