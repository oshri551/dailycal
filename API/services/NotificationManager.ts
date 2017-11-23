import { getConfiguration, CONSTANTS } from '../configurations';
import { Response } from '../objects';
import { InternalHttpRequest } from '../utils';

export class NotificationManager {



    public static  sendNotification(body: any ): Promise<Response> {
        let res: Response = new Response();

        if (body.to !== '') {
            let httpOptions = {
                method: 'POST',
                uri: `${getConfiguration().notificationServer.host}:${getConfiguration().notificationServer.port}/fcm/send`,
                json: true,
                body: body,
                resolveWithFullResponse: true
                };
                return InternalHttpRequest.httpCallToken(httpOptions);
        } else {
            res.status = true;
            res.httpCode = CONSTANTS.HTTP_STATUS_CODE.OK;
            return Promise.resolve(res);
        }
    }
}
