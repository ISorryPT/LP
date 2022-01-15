import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { Wod } from '../models/wod';
import { History } from '../models/history';
import { FullHistory } from '../models/fullHistory';

@Injectable({
  providedIn: 'root'
})
export class APIService {

  constructor(private http: HttpClient) { }

  apikey="dkwbdksd";

  getWods(){
    return this.http.get<Wod[]>('/assets/wods.json')
  }

  getHistory(){
    return this.http.get<History[]>('/assets/history.json')
  }

  getFullHistory(){
    return this.http.get<FullHistory>('/assets/history.json')
  }
}
