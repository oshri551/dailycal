import { Injectable } from '@angular/core';
import { Http, RequestOptions, Response } from '@angular/http';


@Injectable()
export class DataService {
  private apiBaseUrl = 'ddd';
  

  constructor(private http: Http) {
   }

   private extractData(res: Response, name: string, toastr?: {message: string, title: string}) {
    const body = res.json();
    return body.m_data || { };
  }


   getAppointments() {
    const url = `${this.apiBaseUrl}/rest/v1/meetings`;

    return this.http.get(url)
                    .map(data => this.extractData(data, 'getDeviceHistory'))
                    .catch(err => console.log('error'));
  }

  public register() {
    const url = `${this.apiBaseUrl}/rest/v1/register/:tokenID'`;


    return this.http.get(url)
                    .map(data => this.extractData(data, 'getDeviceHistory'))
                    .catch(err => console.log('error'));
  }

}
