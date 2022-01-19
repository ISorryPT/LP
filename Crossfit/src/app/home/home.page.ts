import { Component, OnInit, ViewChild } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { SelectWodModalComponent } from '../modals/select-wod-modal/select-wod-modal.component';
import { SwiperComponent, SwiperModule } from 'swiper/angular';
import { SwiperOptions } from 'swiper';
import { APIService } from '../services/api.service';
import { Wod } from '../models/wod';
import { History } from '../models/history';



@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit{
  @ViewChild('swiper') swiper: SwiperComponent;

  config: SwiperOptions = {

  }

  selectedMenu = "wod";
  selectedWood = 0;
  wods : Wod[] = [{"id":0,"name":"","numCards":0,"copas":"","paus":"","ouros":"","espadas":""}];
  history : History[];

  constructor(private modalCtrl: ModalController, private API: APIService) {}

  ngOnInit(): void {
    this.API.getWods()
    .subscribe((res)=>{
      this.wods = res['data']
    })

    this.API.getHistory()
    .subscribe((res)=>{
      this.history = res['data']
    })
  }

  async openWodModal(){
    const modalSelectWood = await this.modalCtrl.create({
      component: SelectWodModalComponent,
      cssClass: 'selectWodModal',
      backdropDismiss: true,
      mode: "md",
      componentProps: {data: this.wods}
    });

    modalSelectWood.present();

    let {data: index} =await modalSelectWood.onWillDismiss()
    if(index){
      this.selectedWood = index;
    }
  }

  sliderChange(e){
    console.log(e.activeIndex);
    
    }
    
  slideTo(index){
    console.log("Slide to ", index)
    switch (this.selectedMenu) {
      case "wod":
        this.selectedMenu = "wod";
        this.swiper.swiperRef.slideTo(0);
        break;
      case "history":
        this.selectedMenu = "history";
        this.swiper.swiperRef.slideTo(1);
        break;
      default:
        break;
    }
  }

  
}
