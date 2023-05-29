import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ApiService } from '../servicios/api.service';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {
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
      codigoHospital:['', Validators.required],
      nombre: ['', Validators.required],
      apellido: ['', Validators.required],
      correoElectronico: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(8)]],
      numero_celular: ['', [Validators.required, Validators.pattern('^[0-9]+$')]],
      ci: ['', Validators.required],
      especialidad: ['', Validators.required],
      rol: ['', Validators.required]
    });
  }

  // register(form: FormGroup) {
  //   this.submitted = true;

  //   if (form.valid) {
  //     this.servicio.register(form.value.username, form.value.email, form.value.password).subscribe(
  //       (data) => {
  //         console.log(data);
  //         this.registroExitoso = true;
  //         this.presentToast('Usuario registrado exitosamente');
  //         this.route.navigateByUrl('/login');
  //       },
  //       (error) => {
  //         console.error('Error de registro:', error);
  //       }
  //     );
  //   }
  // }
  register(form: FormGroup) {
    this.submitted = true;
  
    if (form.invalid) {
      return;
    }
    const codigoHospital = form.value.codigoHospital;
    const nombre = form.value.nombre;
    const apellido = form.value.apellido;
    const correoElectronico = form.value.correoElectronico;
    const password = form.value.password;
    const numero_celular = form.value.numero_celular;
    const ci = form.value.ci;
    const especialidad = form.value.especialidad;
    const rol = form.value.rol;
  
    this.servicio.registerMedico(codigoHospital, nombre, apellido, correoElectronico, password, numero_celular, ci, especialidad, rol)
      .subscribe(
        (data) => {
          console.log(data);
          let mensaje = '';
  
          if (rol === 'medico') {
            mensaje = 'Médico registrado exitosamente';
          } else if (rol === 'enfermero') {
            mensaje = 'Enfermero registrado exitosamente';
          }
  
          this.presentToast(mensaje);
          form.reset(); 
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
