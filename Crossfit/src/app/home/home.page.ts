import { Component } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { SelectWodModalComponent } from '../modals/select-wod-modal/select-wod-modal.component';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  selectedWood = 0;
  wods = [
    {id:1,name:"Pernas",numCards:35,copas:"Push Press",paus:"Ring Cenas",ouros:"Muita Brita",espadas:"Salto Corda"},
    {id:2,name:"Braços",numCards:40,copas:"Bissep",paus:"Ring Cenas",ouros:"Muita Brita",espadas:"Salto Corda"},
    {id:3,name:"Funcional",numCards:20,copas:"Strong",paus:"Ring Cenas",ouros:"Muita Brita",espadas:"Salto Corda"},
    {id:4,name:"Peso",numCards:100,copas:"Squats",paus:"Ring Cenas",ouros:"Muita Brita",espadas:"Salto Corda"},
    {id:5,name:"Cardio",numCards:14,copas:"Push Press",paus:"Ring Cenas",ouros:"Muita Brita",espadas:"Salto Corda"}
  ]

  constructor(private modalCtrl: ModalController) {}

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
}
