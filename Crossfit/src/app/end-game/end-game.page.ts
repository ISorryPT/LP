import { Component, OnInit } from '@angular/core';
import { History } from '../models/history';
import { APIService } from '../services/api.service';

@Component({
  selector: 'app-end-game',
  templateUrl: './end-game.page.html',
  styleUrls: ['./end-game.page.scss'],
})
export class EndGamePage implements OnInit {

  //history : History[] = [{id:1,img:"",tipoTreino:"",data: new Date()}];

  constructor(private API: APIService) {}

  ngOnInit() {
    //this.API.getWods()
    //.subscribe((res)=>{
    //  this.history = res['data']
    //})
  }

}
