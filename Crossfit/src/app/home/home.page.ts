import { Component } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { SelectWodModalComponent } from '../modals/select-wod-modal/select-wod-modal.component';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(private modalCtrl: ModalController) {}

  async openWodModal(){
    const modalSelectWood = await this.modalCtrl.create({
      component: SelectWodModalComponent,
      cssClass: 'selectWodModal'
    });

    modalSelectWood.present();
  }
}
