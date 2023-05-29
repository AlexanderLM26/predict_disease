import { Component, OnInit } from '@angular/core';
import { ApiService } from '../servicios/api.service';
@Component({
  selector: 'app-cancer-pulmonar',
  templateUrl: './cancer-pulmonar.page.html',
  styleUrls: ['./cancer-pulmonar.page.scss'],
})

export class CancerPulmonarPage implements OnInit {
  nombreUsuario: string
  edad: number;
  Genero: number;
  ConsumoAlcohol: number;
  AlergiaPolvo: number;
  RegistroGenetico: number;
  EnfermedadPulmonar: number;
  DietaEquilibrada: number;
  Obesidad: number;
  Tabaquismo: number;
  FumadorPasivo: number;
  DolorPecho: number;
  TosConSangre: number;
  fatiga: number;
  PerdidaPeso: number;
  DificultadRespirar: number;
  Sibilancia: number;
  DificultadTragar: number;
  TosSeca: number;
  resultados: string;

  idPrediccionCancerPulmonar:any;
  searchTerm: string = '';
  pacientes: any[] = [];
  pacienteSeleccionado: any;
  idPacienteSeleccionado: number;
  codigoPaciente: number;
  codigoCancer_pulmonar: number;

  constructor(private apiService: ApiService) {
  }

  ngOnInit() {
  }

  predecirCancerPulmonar(datos: any): string {
    if (
      datos.ConsumoAlcohol ||
      datos.AlergiaPolvo ||
      datos.RegistroGenetico ||
      datos.EnfermedadPulmonar ||
      datos.DietaEquilibrada ||
      datos.Obesidad ||
      datos.Tabaquismo ||
      datos.FumadorPasivo ||
      datos.DolorPecho ||
      datos.TosConSangre ||
      datos.fatiga ||
      datos.PerdidaPeso ||
      datos.DificultadRespirar ||
      datos.Sibilancia ||
      datos.DificultadTragar ||
      datos.TosSeca
    ) {
      return 'Tiene Cancer de Pulmon';
    } else {
      return 'No tiene Cancer de pulmon';
    }
  }
  

  enviarFormulario3() {
    if (this.pacienteSeleccionado) {
      const codigoPaciente = this.pacienteSeleccionado.id;
      console.log('Código de paciente:', codigoPaciente);

      this.resultados = this.predecirCancerPulmonar({
        ConsumoAlcohol: this.ConsumoAlcohol,
        AlergiaPolvo: this.AlergiaPolvo,
        RegistroGenetico: this.RegistroGenetico,
        EnfermedadPulmonar: this.EnfermedadPulmonar,
        DietaEquilibrada: this.DietaEquilibrada,
        Obesidad: this.Obesidad,
        Tabaquismo: this.Tabaquismo,
        FumadorPasivo: this.FumadorPasivo,
        DolorPecho: this.DolorPecho,
        TosConSangre: this.TosConSangre,
        fatiga: this.fatiga,
        PerdidaPeso: this.PerdidaPeso,
        DificultadRespirar: this.DificultadRespirar,
        Sibilancia: this.Sibilancia,
        DificultadTragar: this.DificultadTragar,
        TosSeca: this.TosSeca,
      });

      this.apiService
        .enviarFormulario3(
          this.nombreUsuario,
          this.edad,
          this.Genero,
          this.ConsumoAlcohol,
          this.AlergiaPolvo,
          this.RegistroGenetico,
          this.EnfermedadPulmonar,
          this.DietaEquilibrada,
          this.Obesidad,
          this.Tabaquismo,
          this.FumadorPasivo,
          this.DolorPecho,
          this.TosConSangre,
          this.fatiga,
          this.PerdidaPeso,
          this.DificultadRespirar,
          this.Sibilancia,
          this.DificultadTragar,
          this.TosSeca,
          this.resultados
        )
        .subscribe(
          (response) => {
            this.idPrediccionCancerPulmonar = response.id;
            console.log('Éxito', response);
            console.log('ID de la predicción de cancer', this.idPrediccionCancerPulmonar);

            const codigoCancer_pulmonar = this.idPrediccionCancerPulmonar;
            console.log('Código de cancer:', codigoCancer_pulmonar);
            
            const formulario = {
              nombreUsuario: this.nombreUsuario,
              edad: this.edad,
              Genero: this.Genero,
              ConsumoAlcohol: this.ConsumoAlcohol,
              AlergiaPolvo: this.AlergiaPolvo,
              RegistroGenetico: this.RegistroGenetico,
              EnfermedadPulmonar: this.EnfermedadPulmonar,
              DietaEquilibrada: this.DietaEquilibrada,
              Obesidad: this.Obesidad,
              Tabaquismo: this.Tabaquismo,
              FumadorPasivo: this.FumadorPasivo,
              DolorPecho: this.DolorPecho,
              TosConSangre: this.TosConSangre,
              fatiga: this.fatiga,
              PerdidaPeso: this.PerdidaPeso,
              DificultadRespirar: this.DificultadRespirar,
              Sibilancia: this.Sibilancia,
              DificultadTragar: this.DificultadTragar,
              TosSeca: this.TosSeca,
              resultados:this.resultados
              
            };
            
            // aqui se hace la relación entre paciente y formulario de anemia
            this.apiService
              .relacionarPacienteConCancer(codigoPaciente, codigoCancer_pulmonar)
              .subscribe(
                (relacionResponse) => {
                  console.log(
                    'Relación exitosa entre paciente y formulario de cancer',
                    relacionResponse
                  );

                },
                (relacionError) => {
                  console.log(codigoCancer_pulmonar);
                  console.log(codigoPaciente);
                  console.error(
                    'Error al realizar la relación entre paciente y formulario de cancer',
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