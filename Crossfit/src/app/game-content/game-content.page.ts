import { Component, OnInit, ViewEncapsulation, ViewChild } from '@angular/core';
import { SwiperComponent, SwiperModule } from 'swiper/angular';
import { SwiperOptions } from 'swiper';
import { APIService } from '../services/api.service';


// import Swiper core and required modules
import SwiperCore, { EffectCards } from "swiper";
import { Game } from '../models/game';
import { Chronometer, StatusChonometer } from 'ngx-chronometer';

// install Swiper modules
SwiperCore.use([EffectCards]);

@Component({
  selector: 'app-game-content',
  templateUrl: './game-content.page.html',
  styleUrls: ['./game-content.page.scss'],
})
export class GameContentPage implements OnInit {
  @ViewChild('swiper') swiper: SwiperComponent;

  //dados do jogo completo
  gameToPlay : Game = {
    wodName:"a",
    cards:[{id:1,img:"",reps:0,exercise:""}
  ]};

  //carta atual
  actualCard = 0;

  //Slide para countDown
  countDown = 5;

  //Timer
  gameTimer: Chronometer = new Chronometer({
    id: 1,
    status: StatusChonometer.stop
  });
  //Timer
  cardTimer: Chronometer = new Chronometer({
    id: 2,
    status: StatusChonometer.stop
  });

  //Timer para o countDown
  countDownTimer;

  constructor(private API: APIService) { }

  ngOnInit() {
    this.API.getGame()
    .subscribe((res)=>{
      this.gameToPlay = res
      this.gameToPlay.cards.unshift({id:-1,img:"../../assets/card/blank.jpg",reps:0,exercise:"|1"})
      this.gameToPlay.cards.unshift({id:-1,img:"../../assets/card/blank.jpg",reps:0,exercise:"|2"})
      this.gameToPlay.cards.unshift({id:-1,img:"../../assets/card/blank.jpg",reps:0,exercise:"|3"})
      this.gameToPlay.cards.unshift({id:-1,img:"../../assets/card/blank.jpg",reps:0,exercise:"|4"})
      this.gameToPlay.cards.unshift({id:-1,img:"../../assets/card/blank.jpg",reps:0,exercise:"|5"})
      this.showCountDown()
    })
  }

  next(){
    if(this.actualCard < (this.gameToPlay.cards.length -5)){
      this.cardTimer.restart()
      this.actualCard++;
      this.swiper.swiperRef.slideNext()
    }
  }

  //Função para mostrar o countdown e iniciar o jogo no final
  showCountDown(){
    this.countDownTimer = setInterval(() => {
      if(this.countDown > 0) {
        this.countDown--;
        this.swiper.swiperRef.slideNext()
      }else{
        this.startGame();
        clearInterval(this.countDownTimer);
      }
    },1500)
  }

  //Iniciar o jogo
  startGame(){
    this.actualCard=1;
    this.gameTimer.start()
    this.cardTimer.start()
  }

  //Pausar o jogo
  pause(){
    if(this.gameTimer.status == StatusChonometer.start){
      this.gameTimer.pause()
    }else{
      this.gameTimer.start()
    }
  }

}
