import * as cron from 'cron';
import { CronJob }from 'cron';
import { ITask } from './';
import { CONSTANTS , MEETINGS  } from '../configurations';
import { Response } from '../objects';
import { NotificationController } from '../controllers/notificationController';




export class PushNotifications implements ITask {
    private static s_instance: PushNotifications = null;

    public static getInstance(): PushNotifications {

        if (this.s_instance === null) {
            this.s_instance = new PushNotifications();
        }
        return this.s_instance;
    }

    public start() {
        let cronJob: CronJob = new CronJob('00 * * * * *', () => { 
            let currentDate = new Date();
            let promiseArray: Array<Promise<Response>> = [];
            let notificationController = NotificationController.getInstance();
            MEETINGS.forEach( meeting => {
               let x =  new Date(meeting.startTime);
               let body = {
                notification: {
                    title: meeting.location,
                    text: `Meeting starts at ${meeting.startTime}`
                },
                to: NotificationController.getToken()
               };
               let timeDiff = Math.round( (x - currentDate) % 86400000 % 3600000 / 60000);
               if (timeDiff == 1) {
                   promiseArray.push(notificationController.sendNotificationsobj(body));
               }
            });
        Promise.all(promiseArray)
        .then(res => {
            console.log("success");
            return Promise.resolve(res);
        })
        .catch(res => {
            console.log("fail");
            return Promise.reject(res);
        });
    });
    cronJob.start();

             /*if (currentDate.getTime() - x.getTime() <1 ) {
                     return notificationController.sendNotificationsobj(
                        {
                            notification:{
                                title: meeting.location,
                                text: `Meeting start at ${meeting.startTime}`
                            },
                            to: NotificationController.getToken()
                        }
                        )
                        .then(res =>{
                            console.log("success");
                            return Promise.resolve(res);
                        })
                        .catch(res => {
                            console.log("fail");
                            return Promise.reject(res);
                        });
                    }*/

}
