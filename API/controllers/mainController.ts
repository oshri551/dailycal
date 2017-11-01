import { IController } from './IController';
import { Response} from '../objects';
import { MeetingsManager, NotificationManager } from '../services';
import { getConfiguration } from '../configurations';

export class MainController implements IController {
    private static s_instance = null;
    private constructor() {

    }

    public static getInstance(): MainController {
        if (this.s_instance === null) {
            this.s_instance = new MainController();
        }
        return this.s_instance;
    }

    public setNotifications(Action: string): Promise<Response> {
        return NotificationManager.someAPI(Action);
    }
   
    public getData(): Promise<Response> {
        return MeetingsManager.getMeetings();
    }
}
