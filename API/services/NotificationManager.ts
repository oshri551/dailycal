import { getConfiguration, CONSTANTS } from '../configurations';
import { Response } from '../objects';
import { InternalHttpRequest } from '../utils'

export class NotificationManager {

      public static someAPI(idsid: string): Promise<Response> {
            let httpOptions = {
                method: 'GET',
                uri: `${getConfiguration().someServer.host}:${getConfiguration().someServer.port}/get`,
                json: true,
                resolveWithFullResponse: true
             };
             return InternalHttpRequest.httpCall(httpOptions);

      }

 
}
