import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { ApiService } from '../servicios/api.service';

@Component({
  selector: 'app-paciente',
  templateUrl: './paciente.page.html',
  styleUrls: ['./paciente.page.scss'],
})
export class PacientePage implements OnInit {
  pacienteForm: FormGroup;
  list = [];
  searchText = '';
  searchResults = [];
  constructor(
    private fb: FormBuilder,
    private servicio: ApiService,
    private route: Router,
    private toastController: ToastController
  ) {}

  ngOnInit() {
    this.pacienteForm = this.fb.group({
      nombre: ['', Validators.required],
      apellido: ['', Validators.required],
      correo_electronico: ['', [Validators.required, Validators.email]],
      edad: ['', Validators.required],
      peso: ['', Validators.required],
      altura: ['', Validators.required],
      direccion: ['', Validators.required],
      numero_celular: ['', Validators.required],
      ci: ['', Validators.required],
    });
    this.getPaciente();
  }

  async onSubmit() {
    if (this.pacienteForm.valid) {
      const {
        nombre,
        apellido,
        correo_electronico,
        edad,
        peso,
        altura,
        direccion,
        numero_celular,
        ci,
      } = this.pacienteForm.value;

      this.servicio.Postpaciente(
        nombre,
        apellido,
        correo_electronico,
        edad,
        peso,
        altura,
        direccion,
        numero_celular,
        ci
      ).subscribe(
        async (response) => {
          const toast = await this.toastController.create({
            message: 'Paciente registrado exitosamente',
            duration: 2000,
            position: 'bottom',
          });
          toast.present();

        },
        async (error) => {
          const toast = await this.toastController.create({
            message: 'Error al registrar al paciente',
            duration: 2000,
            position: 'bottom',
          });
          toast.present();
        }
      );
    }
  }

  getPaciente() {
    this.servicio.getPacientes().subscribe(
      (response : any) => {
        this.list = response;
        console.log(this.list);
      },
      (error) => {
        console.log(error);
      }
    );
  }
  eliminarPaciente(id: number) {
    this.servicio.eliminarPaciente(id).subscribe(
      async (response) => {
        const toast = await this.toastController.create({
          message: 'Paciente eliminado exitosamente',
          duration: 2000,
          position: 'bottom',
        });
        toast.present();


        this.getPaciente();
      },
      async (error) => {
        const toast = await this.toastController.create({
          message: 'Error al eliminar al paciente',
          duration: 2000,
          position: 'bottom',
        });
        toast.present();
      }
    );
  }
  buscarPaciente() {
    const searchText = this.searchText.trim();

    if (searchText === '') {
      this.searchResults = this.list;
    } else {
      this.searchResults = this.list.filter((paciente) => {
        return (
          paciente.nombre.toLowerCase().includes(searchText.toLowerCase()) ||
          paciente.apellido.toLowerCase().includes(searchText.toLowerCase())
        );
      });
    }
  }
  

}