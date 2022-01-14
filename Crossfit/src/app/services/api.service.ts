import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class APIService {

  constructor(private http: HttpClient) { }

  apikey="dkwbdksd";

  getWods(){
    return this.http.get('/assets/wods.json')
  }
}
