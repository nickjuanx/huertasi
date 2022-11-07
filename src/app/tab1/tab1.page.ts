
import { Component } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { modalController } from '@ionic/core';


@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'] 
})
export class Tab1Page {

  constructor() {}

  

    isModalOpen = false;
  
    setOpen(isOpen: boolean) {
      this.isModalOpen = isOpen;
    }
  
  }


