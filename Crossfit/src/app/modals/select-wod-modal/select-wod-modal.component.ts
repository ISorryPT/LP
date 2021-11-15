import { Component, Input, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-select-wod-modal',
  templateUrl: './select-wod-modal.component.html',
  styleUrls: ['./select-wod-modal.component.scss'],
})


export class SelectWodModalComponent implements OnInit {
 
  // Data passed in by componentProps
  @Input() data: Array<Object>;

  selectedWood = 0;

  constructor(private modalCtrl: ModalController) {}
    

  ngOnInit() {

  }

  dismissModal(){
    this.modalCtrl.dismiss();
  }

  select(index: number){
    this.modalCtrl.dismiss(index);
  }

}
