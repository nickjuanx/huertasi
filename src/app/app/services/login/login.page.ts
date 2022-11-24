import { Component, OnInit } from '@angular/core';
import {
  //clases creadas:
  FormGroup,
  FormControl,
  Validators,
  FormBuilder
} from '@angular/forms';
import { AlertController, NavController } from '@ionic/angular';
import { UsuariosService } from '../usuarios.service';

//aqui seleccionamos las plantillas y estilos que creamos en nuestro .html y .css
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
    //aqui, lo que hacemos es una vez puesto los datos, compararlos con los datos en nuestra base de datos

  const usuario= usuarios.find((usuario)=> usuario.nombre == f.nombre && usuario.contraseña == f.contraseña  )
  console.log(usuario)

   if(usuario){
     console.log('Ingresado'); 
     this.navegador.navigateRoot('/tabs/tab1');
//navigateRoot nos permite que si al coincidir los datos con ingresados con los de la base de datos, nos lleve al tab1
//en este caso nuestro INICIO

                                }else{
                                  //pero con el else, en el caso de que esos datos esten mal o no coincidan
                                  //nos dara emitira un alerta con lo ingresado debajo
       const alert = await this.alertController.create({
        header: 'Datos incorrectos',
        message: 'Los datos que ingresaste son incorrectos.',
        buttons: ['Aceptar']
      });
  
      await alert.present();
    }
   }

}
