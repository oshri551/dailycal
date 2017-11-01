let httpRequest = require('request-promise');
import { getConfiguration, CONSTANTS } from '../configurations';
import { Response } from '../objects/Response';

export class InternalHttpRequest {

      public static httpCallToken(httpOptions): Promise<Response> {
      
            let response: Response = new Response();
            httpOptions.headers = {
                authorization : `key= ${getConfiguration().account.token}`
            };

            return httpRequest(httpOptions)
             .then((res) => {
                response.message = res.body.m_message;
                response.httpCode = res.body.m_httpCode;
                response.status = res.body.m_status;
                if (response.httpCode === CONSTANTS.HTTP_STATUS_CODE.OK) { 
                    if (res.body.m_status) {
                        response.data = res.body.m_data;
                        return Promise.resolve(response);
                    } else {
                        return Promise.resolve(response);
                    }
                } else {
                    response.httpCode = CONSTANTS.HTTP_STATUS_CODE.CLIENT_ERROR;
                    return Promise.reject(response);
                }
             })
             .catch((res) => {
                response.message = res.error.m_message;
                response.httpCode = res.error.m_httpCode;
                return Promise.reject(response);
             });
      }
}
