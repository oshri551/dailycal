import * as express from 'express' ;
import * as bodyParser from 'body-parser';
import { MainController } from '../controllers/mainController';
import { RouterBase } from './routerBase';
import { Response } from '../objects/Response';


export class SomeRouter extends RouterBase {


    public static getInstance(): SomeRouter {
        if (this.s_instance === null) {
            this.s_instance = new SomeRouter();
        }
        return this.s_instance;
    }

    public init(): void {
        this.m_expressRouter = express.Router();
        let mainController = MainController.getInstance();
        this.m_expressRouter.use(bodyParser.json());
        this.m_expressRouter.route('/:inputparameter')

        .all((req, res, next) => {
           // do your authorization and session management here
           next();
        })

        .get((req, res, next) => {
             mainController.someAPI(req.params.inputparameter)
            .then((result: Response) => {
                    this.returnSuccessResult(res, result);
            })
            .catch((result: Response) => {
                this.returnFailureResult(res, result);
            });
        });
    }
}
