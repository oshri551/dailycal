import { Injectable } from '@angular/core';
import { Http, RequestOptions, Response } from '@angular/http';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class DataService {
  private apiBaseUrl = 'http://localhost:3000';


  constructor(private http: Http) {
   }

   private extractData(res: Response, name: string, toastr?: {message: string, title: string}) {
    const body = res.json();
    return body.m_data || { };
  }

  private handleError (error: Response | any, name: string, toastrTitle?: string) {
    // In a real world app, you might use a remote logging infrastructure
    let errMsg: string;
    let err: string;
    if (error instanceof Response) {
      const body = error.json() || '';
      err = body.m_message || JSON.stringify(body);
      errMsg = `${body.status} - ${body.statusText || ''} ${err}`;
    } else {
      errMsg = error.message ? error.message : error.toString();
    }
    return Observable.throw(errMsg);
  }


   getAppointments() {
    const url = `${this.apiBaseUrl}/rest/v1/meetings`;

    return this.http.get(url )
                    .map(data => this.extractData(data, 'getDeviceHistory'))
                    .catch(err => this.handleError(err, 'getDevice', 'Get Device'));
  }

  register(token: string) {
    const url = `${this.apiBaseUrl}/rest/v1/register/${token}`;

    return this.http.get(url)
                    .map(data => this.extractData(data, 'getDeviceHistory'))
                    .catch(err => this.handleError(err, 'getDevice', 'Get Device'));
  }

}
