import * as httpRequest from 'request-promise';
import { getConfiguration, CONSTANTS } from '../configurations';
import { Response } from '../objects/Response';

export class InternalHttpRequest {

      public static httpCall(httpOptions): Promise<Response> {
            let response: Response = new Response();

            return httpRequest(httpOptions)
             .then((res) => {
                if (res.body) {
                    response.data = res.body;
                    response.httpCode = CONSTANTS.HTTP_STATUS_CODE.OK;
                    response.status = true;
                    return response;
                } else {
                     response.httpCode = CONSTANTS.HTTP_STATUS_CODE.CLIENT_ERROR;
                     response.status = false;
                     return Promise.reject(response);
                }
             })
             .catch((error) => {
                    response.httpCode = CONSTANTS.HTTP_STATUS_CODE.SERVER_ERROR;
                   response.status = false;
                   return Promise.reject(response);
             });
      }
}
