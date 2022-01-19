import { Component, OnInit } from '@angular/core';
import { FullHistory } from '../models/fullHistory';
import { APIService } from '../services/api.service';

@Component({
  selector: 'app-end-game',
  templateUrl: './end-game.page.html',
  styleUrls: ['./end-game.page.scss'],
})
export class EndGamePage implements OnInit {

  fullHistory : FullHistory = {
    id: 1,
    relWod: {
      wod: "undefined",
      numCartas: "undefined",
      dataInicio: "undefined",
      dataFim: "undefined",
      duracao: "undefined"
    },
    relDetalhe: [{id:1,card:"ACopas.jpg",exercicio:"Pull UP > 00:20:40",duracao:"27464"}]
  };

  constructor(private API: APIService) {}

  ngOnInit() {
    this.API.getFullHistory()
    .subscribe((res)=>{
      this.fullHistory = res
    })
  }

  getFulImagePath(img){
    return "../../assets/card/" + img
  }

}
