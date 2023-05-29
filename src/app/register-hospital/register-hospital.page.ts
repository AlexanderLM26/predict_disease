import { Component, NgModule, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ApiService } from '../servicios/api.service';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';


@Component({
  selector: 'app-register-hospital',
  templateUrl: './register-hospital.page.html',
  styleUrls: ['./register-hospital.page.scss'],
})

export class RegisterHospitalPage implements OnInit {
  formularioregistro: FormGroup;
  submitted = false;
  registroExitoso = false;

  constructor(
    private fb: FormBuilder,
    private servicio: ApiService,
    private route: Router,
    private toastController: ToastController
  ) {}

  ngOnInit() {
    this.formularioregistro = this.fb.group({
      nombre: ['', Validators.required],
      direccion: ['', Validators.required],
      correoElectronico: ['', [Validators.required, Validators.email, Validators.pattern('[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,}')]],
      telefono: ['', [Validators.required, Validators.pattern('^[0-9]+$')]],
    });
  }

  register(form: FormGroup) {
    this.submitted = true;

    if (form.valid) {
      const datosRegistro = {
        nombre: form.value.nombre,
        direccion: form.value.direccion,
        correoElectronico: form.value.correoElectronico,
        telefono: form.value.telefono
      };
      this.servicio.registerHospital(
        datosRegistro.nombre,
        datosRegistro.direccion,
        datosRegistro.correoElectronico,
        datosRegistro.telefono
        ).subscribe(
        (data) => {
          console.log(data);
          this.registroExitoso = true;
          this.presentToast('Hospital registrado exitosamente');
          this.submitted = false;
          this.formularioregistro.markAsPristine(); 
          this.formularioregistro.markAsUntouched(); 
          this.formularioregistro.updateValueAndValidity(); 
          this.route.navigateByUrl('/login');
        },
        (error) => {
          console.error('Error de registro:', error);
        }
      );
    }
  }

  async presentToast(message: string) {
    const toast = await this.toastController.create({
      message: message,
      duration: 2000,
      position: 'middle',
      cssClass: 'custom-toast',
      buttons: [
        {
          text: 'Cerrar',
          role: 'cancel'
        }
      ]
    });

    toast.present();
  }
}










// import { Component, OnInit } from '@angular/core';
// import { FormBuilder, FormGroup, Validators } from '@angular/forms';
// import { ApiService } from '../servicios/api.service';
// import { Router } from '@angular/router';
// import { ToastController } from '@ionic/angular';

// @Component({
//   selector: 'app-register-hospital',
//   templateUrl: './register-hospital.page.html',
//   styleUrls: ['./register-hospital.page.scss'],
// })
// export class RegisterHospitalPage implements OnInit {
//   formularioregistro: FormGroup;
//   submitted = false;
//   registroExitoso = false;
//   correoExistente = false;

//   constructor(
//     private fb: FormBuilder,
//     private servicio: ApiService,
//     private route: Router,
//     private toastController: ToastController
//   ) {}

//   ngOnInit() {
//     this.formularioregistro = this.fb.group({
//       nombre: ['', Validators.required],
//       direccion: ['', Validators.required],
//       correoElectronico: ['', [Validators.required, Validators.email, Validators.pattern('^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,}$')]],
//       telefono: ['', Validators.required],
//     });
//   }

//   register(form: FormGroup) {
//     this.submitted = true;

//     if (form.valid) {
//       // Verificar si el correo electrónico ya ha sido utilizado
//       const correoElectronico = form.value.correoElectronico;
//       this.servicio.verificarCorreo(correoElectronico).subscribe(
//         (data) => {
//           if (data.existe) {
//             this.correoExistente = true;
//           } else {
//             this.servicio.registerHospital(
//               form.value.nombre,
//               form.value.direccion,
//               form.value.correoElectronico,
//               form.value.telefono
//               ).subscribe((data) => {
//                 console.log(data);
//                 this.registroExitoso = true;
//                 this.presentToast('Hospital registrado exitosamente');
//                 this.route.navigateByUrl('/login');
//               },
//               (error) => {
//                 console.error('Error de registro:', error);
//               }
//             );
//           }
//         },
//         (error) => {
//           console.error('Error al verificar el correo electrónico:', error);
//         }
//       );
//     }
//   }

//   async presentToast(message: string) {
//     const toast = await this.toastController.create({
//       message: message,
//       duration: 3000,
//       position: 'middle',
//       cssClass: 'custom-toast',
//       buttons: [
//         {
//           text: 'Cerrar',
//           role: 'cancel'
//         }
//       ]
//     });

//     toast.present();
//   }
// }

