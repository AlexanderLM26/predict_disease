import { Component, OnInit } from '@angular/core';
import { ApiService } from '../servicios/api.service';

@Component({
  selector: 'app-diabetes',
  templateUrl: './diabetes.page.html',
  styleUrls: ['./diabetes.page.scss'],
})
export class DiabetesPage implements OnInit {

  genero: number;
  edad: number;
  hipertencion: number;
  cardiopatia: number;
  fumador: number;
  MCI: number;
  nivelesHemoglobina: number;
  nivelGlucosa: number;
  resultado: string;
  idPrediccionDiabetes:any;
  
  searchTerm: string = '';
  pacientes: any[] = [];
  pacienteSeleccionado: any;
  idPacienteSeleccionado: number;
  codigoPaciente: number;
  codigoDiabetes: number;


  constructor(private apiService: ApiService) {}

  ngOnInit() {}

  predecirDiabetes(datos: any): string {
    if (
      datos.hipertencion>=6 ||
      datos.cardiopatia>=7 ||
      datos.fumador>= 5 ||
      datos.MCI >= 7 ||
      datos.nivelesHemoglobina >= 6 ||
      datos.nivelGlucosa >= 8
    ) {
      return 'Tiene diabetes';
    } else {
      return 'No tiene diabetes';
    }
  }

 
    enviarFormulario() {
      if (this.pacienteSeleccionado) {
        const codigoPaciente = this.pacienteSeleccionado.id;
        console.log('Código de paciente:', codigoPaciente);
  
        this.resultado = this.predecirDiabetes({
          hipertencion: this.hipertencion,
          cardiopatia: this.cardiopatia,
          fumador: this.fumador,
          MCI: this.MCI,
          nivelesHemoglobina: this.nivelesHemoglobina,
          nivelGlucosa: this.nivelGlucosa,
        });
  
        this.apiService
          .enviarFormulario(
            this.idPacienteSeleccionado,
            this.genero, 
            this.edad, 
            this.hipertencion, 
            this.cardiopatia, 
            this.fumador, 
            this.MCI, 
            this.nivelesHemoglobina, 
            this.nivelGlucosa, 
            this.resultado
            )
          .subscribe(
            (response) => {
              this.idPrediccionDiabetes = response.id;
              console.log('Éxito', response);
              console.log('ID de la predicción de anemia', this.idPrediccionDiabetes);
  
              const codigoDiabetes = this.idPrediccionDiabetes;
              console.log('Código de anemia:', codigoDiabetes);
  
              const formulario = {
                  codigoPaciente: codigoPaciente,
                  codigoDiabetes: codigoDiabetes,
                  genero: this.genero,
                  edad: this.edad,
                  hipertencion: this.hipertencion,
                  cardiopatia: this.cardiopatia,
                  fumador: this.fumador,
                  MCI: this.MCI,
                  nivelesHemoglobina: this.nivelesHemoglobina,
                  nivelGlucosa: this.nivelGlucosa,
                  resultado: this.resultado,
              };
    
              this.apiService
                .relacionarPacienteConDiabetes(codigoPaciente, codigoDiabetes)
                .subscribe(
                  (relacionResponse) => {
                    console.log(
                      'Relación exitosa entre paciente y formulario de diabetes',
                      relacionResponse
                    );
  
                  },
                  (relacionError) => {
                    console.log(codigoDiabetes);
                    console.log(codigoPaciente);
                    console.error(
                      'Error al realizar la relación entre paciente y formulario de diabetes',
                      relacionError
                    );
                  }
                );
            },
            (error) => {
              console.error(error);
            }
          );
      } else {
        console.error('No se ha seleccionado ningún paciente');
      }
    }  
  buscarPacientes() {
    if (this.searchTerm.trim() !== '') {
      this.apiService.buscarPacientes(this.searchTerm)
        .subscribe((response: any) => {
          this.pacientes = response;
        }, (error) => {
          console.error('Error al buscar Paciente:', error);
        });
    } else {
      this.pacientes = []; 
    }
  }
  

  seleccionarPaciente(paciente: any) {
    this.pacienteSeleccionado = paciente;
    this.idPacienteSeleccionado = paciente.id;
    this.searchTerm = paciente.nombre;
  }
  
  


}

