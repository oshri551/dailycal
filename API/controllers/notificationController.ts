import { IController } from './IController';
import { Response} from '../objects';
import { MeetingsManager, NotificationManager } from '../services';
import { getConfiguration } from '../configurations';

export class NotificationController  {
    private static s_instance = null;
    private static s_tokenID = null;
    private constructor() {

    }

    public static getInstance():  NotificationController {
        if (this.s_instance === null) {
            this.s_instance = new NotificationController();
        }
        return this.s_instance;
    }

    public static setToken(tokenID: string) {
        this.s_tokenID = tokenID;
    }

    public sendNotifications(title: string, text: string , token: string): Promise<Response> {

        let postBody = {
            notification: {
                title,
                text
            },
            to: token
        };
        if (token !== '') {
            return NotificationManager.sendNotification(postBody);
        }
    }

    public sendNotificationsobj(body : any): Promise<Response> {
        return NotificationManager.sendNotification(body);
    }
   
    public getData(): Promise<Response> {
        return MeetingsManager.getMeetings();
    }
}
