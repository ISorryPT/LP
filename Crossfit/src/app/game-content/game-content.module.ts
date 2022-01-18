import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GameContentPageRoutingModule } from './game-content-routing.module';

import { GameContentPage } from './game-content.page';
import { ComponentModule } from '../shared/components.module';

import { SwiperModule } from "swiper/angular";
import { NgxChronometerModule } from 'ngx-chronometer';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ComponentModule,
    IonicModule,
    GameContentPageRoutingModule,
    SwiperModule,
    NgxChronometerModule
  ],
  declarations: [GameContentPage]
})
export class GameContentPageModule {}
