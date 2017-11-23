let httpRequest = require('request-promise');
import { getConfiguration, CONSTANTS } from '../configurations';
import { Response } from '../objects/Response';

export class InternalHttpRequest {

      public static httpCallToken(httpOptions): Promise<Response> {
      
            let response: Response = new Response();
            
            return httpRequest(httpOptions)
             .then((res) => {
                response.message = res.body;
                response.httpCode = CONSTANTS.HTTP_STATUS_CODE.OK;
                response.status = true;
                return Promise.resolve(response);
             })
             .catch((res) => {
                return Promise.reject(response);
             });
      }
}
