import { IController } from './IController';
import { Response} from '../objects';
import { MeetingsManager, NotificationManager } from '../services';
import { getConfiguration } from '../configurations';

export class NotificationController  {
    private static s_instance = null;
    private static s_tokenID = `exHk5g3hdyU:APA91bG1KqSI_b7LRR72bJDVfaOq9uM5YxL8Zrif6SajHDqRBfaAuvt3OHcQm11QYs2h6xqUeclQOdG6wS9l4KIsXK8nbpbe3j-ItUT4fpoKmtpgXF7Lsp8jzx1zv-8I8r_hN2WDBhN3`;
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

    public static getToken(): string {
        return this.s_tokenID;
    }

    /*public sendNotifications(titel: string, text: string , token: string): Promise<Response> {
        
        token= getConfiguration().token;
        
        let postBody = {
            titel: titel,
            body:  text,
            to: token
        };
        if(token !== "") {
            return NotificationManager.sendNotification(postBody);
        }
    
    }*/

    public sendNotificationsobj(body : any): Promise<Response> {
        return NotificationManager.sendNotification(body);
    }

   
    public getData(): Promise<Response> {
        return MeetingsManager.getMeetings();
    }
}
