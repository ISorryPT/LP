import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GameContentPageRoutingModule } from './game-content-routing.module';

import { GameContentPage } from './game-content.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GameContentPageRoutingModule
  ],
  declarations: [GameContentPage]
})
export class GameContentPageModule {}
