import { Component } from '@angular/core';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {
  handlerMessage = '';
  roleMessage = '';

  constructor(private toastController: ToastController) {}

  async presentToast() {
    const toast = await this.toastController.create({
      message: 'Gracias por regarnos!',
      duration: 3000,
      buttons: [
        {
          text: 'Listo',
          role: 'info',
          handler: () => { this.handlerMessage = 'More Info clicked'; }
        },
        {
          text: 'Mas informacion',
          role: 'cancel',
          handler: () => { this.handlerMessage = 'Dismiss clicked'; }
        }
      ]
    });

    await toast.present();

    const { role } = await toast.onDidDismiss();
    this.roleMessage = `Dismissed with role: ${role}`;
  }

  
  

}







  


























  
    


