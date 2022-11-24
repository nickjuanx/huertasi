import { Component, OnInit } from '@angular/core';
import {
  FormGroup,
  FormControl,
  Validators,
  FormBuilder
} from '@angular/forms';
import { AlertController, NavController } from '@ionic/angular';
import { UsuariosService } from '../usuarios.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  formularioLogin: FormGroup;

  constructor(public fb: FormBuilder,
   private inicioS:UsuariosService,
   private navegador:NavController,
    public alertController: AlertController) { 

    this.formularioLogin = this.fb.group({
      'nombre': new FormControl("",Validators.required),
      'contraseña': new FormControl("",Validators.required)
    })

  }

  ngOnInit() {
  }

  async ingresar(){
    let f = this.formularioLogin.value;
    
   

    const usuarios=await this.inicioS.getUsuarios()
    

    //console es mi objeto
    //funciones y metodos con parentesis

  const usuario= usuarios.find((usuario)=> usuario.nombre == f.nombre && usuario.contraseña == f.contraseña  )
  console.log(usuario)

   if(usuario){
     console.log('Ingresado'); 
     this.navegador.navigateRoot('/tabs/tab1');

                                }else{
       const alert = await this.alertController.create({
        header: 'Datos incorrectos',
        message: 'Los datos que ingresaste son incorrectos.',
        buttons: ['Aceptar']
      });
  
      await alert.present();
    }
   }

}
