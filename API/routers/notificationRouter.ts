import * as express from 'express' ;
import * as bodyParser from 'body-parser';
import { NotificationController } from '../controllers/notificationController';
import { RouterBase } from './routerBase';
import { Response } from '../objects/Response';


export class NotificationRouter extends RouterBase {


    public static getInstance(): NotificationRouter {
        if (this.s_instance === null) {
            this.s_instance = new NotificationRouter();
        }
        return this.s_instance;
    }

    public init(): void {
        this.m_expressRouter = express.Router();
        let notificationController = NotificationController.getInstance();
        this.m_expressRouter.use(bodyParser.json());
        this.m_expressRouter.route('/notification/send')
        .all((req, res, next) => {
           // do your authorization and session management here
           next();
        })
        .post((req, res, next) => {
            notificationController.sendNotificationsobj(req.body)
            .then((result: Response) => {
                    this.returnSuccessResult(res, result);
            })
            .catch((result: Response) => {
                this.returnFailureResult(res, result);
            });
        });


        this.m_expressRouter.route('/meetings')
        .get((req, res, next) => {
            notificationController.getData()
           .then((result: Response) => {
                   this.returnSuccessResult(res, result);
           })
           .catch((result: Response) => {
               this.returnFailureResult(res, result);
           });
       });

       this.m_expressRouter.route('/register/:tokenID')
       .get((req, res, next) => {
           console.log(req.params.tokenID);
           NotificationController.setToken(req.params.tokenID);
           NotificationController.getInstance().sendNotifications('Intel Calendar', 'You have a meeting...', req.params.tokenID);
      })
      .delete((req, res, next) => {
        console.log(req.params.tokenID);
        NotificationController.setToken('');
     });

    }
}
