import { getConfiguration, CONSTANTS, MEETINGS } from '../configurations';
import { Response, MeetingData } from '../objects';
import { InternalHttpRequest } from '../utils'

export class MeetingsManager {

      public static getMeetings(): Promise<Response> {
            let response: Response = new Response();
  
            response.httpCode = CONSTANTS.HTTP_STATUS_CODE.OK;
            response.data = MEETINGS;
            response.status = true;
            return Promise.resolve(response);
      }

 
}
