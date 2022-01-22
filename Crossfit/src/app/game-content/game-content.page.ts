import { Component, OnInit, ViewEncapsulation, ViewChild, OnDestroy,NgZone } from '@angular/core';
import { SwiperComponent, SwiperModule } from 'swiper/angular';
import { SwiperOptions } from 'swiper';
import { APIService } from '../services/api.service';


// import Swiper core and required modules
import SwiperCore, { EffectCards } from "swiper";
import { Game } from '../models/game';
import { Chronometer, StatusChonometer } from 'ngx-chronometer';
import { interval, Observable } from 'rxjs';
import { Router } from '@angular/router';
import { FullHistory } from '../models/fullHistory';

// install Swiper modules
SwiperCore.use([EffectCards]);

//Estado da aplicação
enum StatusTypes {
  STOPPED = "STOPPED",
  READY = "READY",
  PLAYING = "PLAYING",
  COUNTINGDOWN = "COUNTINGDOWN",
  PAUSED = "PAUSED",
}

@Component({
  selector: 'app-game-content',
  templateUrl: './game-content.page.html',
  styleUrls: ['./game-content.page.scss'],
})
export class GameContentPage implements OnInit, OnDestroy{
  @ViewChild('swiper') swiper: SwiperComponent;

  //Estado da Aplicação, iniicalmente STOP
  status = StatusTypes.STOPPED

  //dados do jogo completo
  gameToPlay : Game = {
    wodName:"a",
    cards:[
      {id:1,img:"",reps:0,exercise:""}
    ]
  };

  //dados do jogo completo
  gameStats: FullHistory ={
    id: undefined,
    relWod: {
      wod: undefined,
      numCartas: undefined,
      dataInicio: undefined,
      dataFim: undefined,
      duracao: undefined
    },
    relDetalhe: [{id:undefined,card:undefined, exercicio:undefined, duracao:undefined}]
  }

  
  //Slide para countDown
  countDown = 4;
  //carta atual
  actualCard = 0;
  numberOfCards = 0;
  
  indexCard = 0

  //Timer
  gameTimer: Chronometer = new Chronometer();
  //Timer
  cardTimer: Chronometer = new Chronometer();
  
  //Timer para o countDown
  countDownTimer;
  

  constructor(private API: APIService, private _zone: NgZone,private router: Router) {}

  ngOnInit() {
    this.API.getGame()
    .subscribe((res)=>{
      this.gameToPlay = res
      this.numberOfCards = res.cards.length
      //Adicionar cartas CountDown
      this.gameToPlay.cards.unshift({id:-1,img:"../../assets/card/go.png",reps:0,exercise:"Go"})
      this.gameToPlay.cards.unshift({id:-1,img:"../../assets/card/1.png",reps:0,exercise:"1"})
      this.gameToPlay.cards.unshift({id:-1,img:"../../assets/card/2.png",reps:0,exercise:"2"})
      this.gameToPlay.cards.unshift({id:-1,img:"../../assets/card/3.png",reps:0,exercise:"3"})
      this.gameToPlay.cards.unshift({id:-1,img:"../../assets/card/areYouReady.png",reps:0,exercise:"Ready"})
      this.gameToPlay.cards.push({id:-1,img:"../../assets/card/areYouReady.png",reps:0,exercise:"Done!"})
      this.status = StatusTypes.READY
    })
  }
  ngOnDestroy(){
    this.countDown = 5;
    this.actualCard = 0;
    this.indexCard = 0
    this.status = StatusTypes.STOPPED
  }

  next(){
    switch (this.status) {
      case StatusTypes.READY:
        this.showCountDown()
        break;

      case StatusTypes.PLAYING:
        this.cardTimer.restart();
        if(this.actualCard < this.numberOfCards){
          this.gameStats.relDetalhe.push({
            id:this.actualCard,
            card:this.gameToPlay.cards[this.indexCard].img,
            exercicio:this.gameToPlay.cards[this.indexCard].exercise,
            duracao: this.cardTimer.time.toString()
          })
          this.actualCard++
        }else{
          this.stopGame();
        }
        this.indexCard++;
        //this.swiper.swiperRef.slideNext()
        break;

      default:
        break;
    }
  }


  //Função para mostrar o countdown e iniciar o jogo no final
  showCountDown(){
    this.status = StatusTypes.COUNTINGDOWN

    this.countDownTimer = setInterval(() => {
      if(this.countDown > 0) {
        this.countDown--;
        this.indexCard++;
        this.swiper.swiperRef.slideNext()
      }else if(this.status == StatusTypes.COUNTINGDOWN){
        this._zone.run(()=>{
          this.startGame()
        });
        this.status = StatusTypes.PLAYING
        clearInterval(this.countDownTimer);
      }
    },1500)
  
  }

  //Iniciar o jogo
  startGame(){
      this.gameStats.relWod.dataInicio = Date().toString()
      this.gameTimer.start();
      this.cardTimer.start();
      this.actualCard = 1;
      this.indexCard = 5;
  }
  stopGame(){
    this.gameStats.relWod.dataFim = Date().toString()
    this.gameTimer.stop();
    this.cardTimer.stop();
    this.status = StatusTypes.STOPPED;
    console.log("STATS: ", this.gameStats)
    this.router.navigate(['end-game'])
}

  //Pausar o jogo
  pause(){
    if(this.status == StatusTypes.PLAYING){
      if(this.cardTimer.status == StatusChonometer.start && this.actualCard > 0){
        this.cardTimer.pause()
      }else{
        this.cardTimer.start()
      }
    }
  }

  log(text: string){
    console.log(text)
  }

  arePlaying(){
    if(this.status == StatusTypes.PLAYING){
      return true
    }else{
      return false
    }
  }

}
