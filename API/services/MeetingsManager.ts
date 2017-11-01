import { getConfiguration, CONSTANTS } from '../configurations';
import { Response, MeetingData } from '../objects';
import { InternalHttpRequest } from '../utils'

export class MeetingsManager {

      public static someAPI(idsid: string): Promise<Response> {
            let httpOptions = {
                method: 'GET',
                uri: `${getConfiguration().someServer.host}:${getConfiguration().someServer.port}/get`,
                json: true,
                resolveWithFullResponse: true
             };
             return InternalHttpRequest.httpCall(httpOptions);

      }

      public static getMeetings(): Promise<Response> {
            let meetingData : MeetingData = new MeetingData();
            let response: Response = new Response();
            meetingData.m_startTime = '09:00';
            meetingData.m_endTime = '10:00';
            meetingData.m_location = 'l105'
            
            response.httpCode = CONSTANTS.HTTP_STATUS_CODE.OK;
            response.data = meetingData;
            response.status = true;
            return Promise.resolve(response);
      }

 
}
