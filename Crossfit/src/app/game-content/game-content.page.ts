import { Component, OnInit, ViewEncapsulation, ViewChild } from '@angular/core';
import { SwiperComponent, SwiperModule } from 'swiper/angular';
import { SwiperOptions } from 'swiper';
import { APIService } from '../services/api.service';

// import Swiper core and required modules
import SwiperCore, { EffectCards } from "swiper";
import { Game } from '../models/game';

// install Swiper modules
SwiperCore.use([EffectCards]);

@Component({
  selector: 'app-game-content',
  templateUrl: './game-content.page.html',
  styleUrls: ['./game-content.page.scss'],
})
export class GameContentPage implements OnInit {
  @ViewChild('swiper') swiper: SwiperComponent;

  gameToPlay : Game = {
    wodName:"a",
    cards:[{id:1,img:"",reps:0,exercise:""}
  ]};

  constructor(private API: APIService) { }

  ngOnInit() {
    this.API.getGame()
    .subscribe((res)=>{
      this.gameToPlay = res
    })
  }

  slideTo(){
    this.swiper.swiperRef.slideTo(1);
  }

}
