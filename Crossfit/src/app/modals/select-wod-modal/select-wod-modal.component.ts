import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-select-wod-modal',
  templateUrl: './select-wod-modal.component.html',
  styleUrls: ['./select-wod-modal.component.scss'],
})
export class SelectWodModalComponent implements OnInit {

  constructor(private modalCtrl: ModalController) { }

  ngOnInit() {}

  dismissModal(){
    this.modalCtrl.dismiss();
  }

}
