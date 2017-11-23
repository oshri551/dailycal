"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const cron_1 = require("cron");
const configurations_1 = require("../configurations");
const notificationController_1 = require("../controllers/notificationController");
class PushNotifications {
    static getInstance() {
        if (this.s_instance === null) {
            this.s_instance = new PushNotifications();
        }
        return this.s_instance;
    }
    start() {
        let cronJob = new cron_1.CronJob('00 * * * * *', () => {
            let currentDate = new Date();
            let promiseArray = [];
            let notificationController = notificationController_1.NotificationController.getInstance();
            configurations_1.MEETINGS.forEach(meeting => {
                let x = new Date(meeting.startTime);
                let body = {
                    notification: {
                        title: meeting.location,
                        text: `Meeting starts at ${meeting.startTime}`
                    },
                    to: notificationController_1.NotificationController.getToken()
                };
                let timeDiff = Math.round((x - currentDate) % 86400000 % 3600000 / 60000);
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
}
PushNotifications.s_instance = null;
exports.PushNotifications = PushNotifications;
//# sourceMappingURL=pushNotifications.js.map