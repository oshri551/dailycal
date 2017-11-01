import * as express from 'express' ;
import * as bodyParser from 'body-parser';
import { MainController } from '../controllers/mainController';
import { RouterBase } from './routerBase';
import { Response } from '../objects/Response';


export class MainRouter extends RouterBase {


    public static getInstance(): MainRouter {
        if (this.s_instance === null) {
            this.s_instance = new MainRouter();
        }
        return this.s_instance;
    }

    public init(): void {
        this.m_expressRouter = express.Router();
        let mainController = MainController.getInstance();
        this.m_expressRouter.use(bodyParser.json());
        this.m_expressRouter.route('/notification/:action')

        .all((req, res, next) => {
           // do your authorization and session management here
           next();
        })

        .post((req, res, next) => {
             mainController.setNotifications(req.params.action)
            .then((result: Response) => {
                    this.returnSuccessResult(res, result);
            })
            .catch((result: Response) => {
                this.returnFailureResult(res, result);
            });
        });
        this.m_expressRouter.route('/meetings')
        .get((req, res, next) => {
            mainController.getData()
           .then((result: Response) => {
                   this.returnSuccessResult(res, result);
           })
           .catch((result: Response) => {
               this.returnFailureResult(res, result);
           });
       });
    }
}
