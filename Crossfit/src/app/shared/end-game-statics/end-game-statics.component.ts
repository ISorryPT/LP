import { Component, OnInit } from '@angular/core';
import { History } from '../../models/history';
import { APIService } from '../../services/api.service';

@Component({
  selector: 'app-end-game-statics',
  templateUrl: './end-game-statics.component.html',
  styleUrls: ['./end-game-statics.component.scss'],
})
export class EndGameStaticsComponent implements OnInit {

  history : History[] = [{id:1,img:"",tipoTreino:"",duracao:{hours:1,minutes:30}}];

  constructor(private API: APIService) { }

  ngOnInit() {
    this.API.getWods()
    .subscribe((res)=>{
      this.history = res['data']
    })
  }

}
