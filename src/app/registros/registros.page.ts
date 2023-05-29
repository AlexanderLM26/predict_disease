// import { Component, OnInit} from '@angular/core';
// import { ApiService } from '../servicios/api.service';
// import { Router } from '@angular/router';
// @Component({
//   selector: 'app-registros',
//   templateUrl: './registros.page.html',
//   styleUrls: ['./registros.page.scss']

// })
// export class RegistrosPage implements OnInit {
  // usuariosDiabetes: string[] = [];
  // usuariosAnemia: string[] = [];
  // usuariosCancerPulmon: string[] = [];
  // listaPacientes: any[];
  // searchTerm: string = '';
  // constructor(private apiService: ApiService, private router: Router) {}

  // ngOnInit() {
  //   this.obtenerListaPacientes();
    // this.obtenerUsuariosDiabetes();
    // this.obtenerUsuariosAnemia();
    // this.obtenerUsuarioscancerpulmonar();
  // }

  // obtenerUsuariosDiabetes() {
  //   this.apiService.getUsuariosDiabetes()
  //     .subscribe((response: any) => {
  //       this.usuariosDiabetes = response;
  //     }, (error) => {
  //       console.error('Error al obtener los usuarios de diabetes:', error);
  //     });
  // }

  // obtenerUsuariosAnemia() {
  //   this.apiService.getUsuariosAnemia()
  //     .subscribe((response: any) => {
  //       this.usuariosAnemia = response;
  //     }, (error) => {
  //       console.error('Error al obtener los usuarios de anemia:', error);
  //     });
  // }

  // obtenerUsuarioscancerpulmonar() {
  //   this.apiService.getUsuarioscancerpulmonar()
  //     .subscribe((response: any) => {
  //       this.usuariosCancerPulmon = response;
  //     }, (error) => {
  //       console.error('Error al obtener los usuarios de cancer:', error);
  //     });
  // }
  // obtenerListaPacientes() {
  //   this.apiService.obtenerListaPacientes().subscribe(
  //     (response: any[]) => {
  //       this.listaPacientes = response;
  //     },
  //     (error) => {
  //       console.error('Error al obtener la lista de pacienetes:', error);
  //     }
  //   );
  // }

// registro.page.ts
import { Component, OnInit } from '@angular/core';
import { ApiService } from '../servicios/api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registros',
  templateUrl: './registros.page.html',
  styleUrls: ['./registros.page.scss']
})
export class RegistrosPage implements OnInit {
  listaPacientes: any[];

  constructor(private apiService: ApiService, private router: Router) {}

  ngOnInit() {
    this.obtenerListaPacientes();
  }

  obtenerListaPacientes() {
    this.apiService.obtenerListaPacientes().subscribe(
      (response: any[]) => {
        this.listaPacientes = response;
      },
      (error) => {
        console.error('Error al obtener la lista de pacientes:', error);
      }
    );
  }

  verDetallesPaciente(codigoPaciente: number) {
    // Obtener datos del paciente
    this.apiService.obtenerDatosPaciente(codigoPaciente).subscribe(
      (paciente: any) => {
        // Obtener el ID del formulario de cáncer pulmonar correspondiente al paciente
        const cancerFormularioId = paciente.cancer_pulmonar;

        // Verificar si el paciente tiene un formulario de cáncer pulmonar asociado
        if (cancerFormularioId) {
          // Obtener datos de la enfermedad de cáncer pulmonar
          this.apiService.obtenerDatosUsuariocancerpulmonar(cancerFormularioId).subscribe(
            (cancerData: any) => {
              // Obtener datos de la enfermedad de diabetes
              this.apiService.obtenerDatosUsuarioDiabetes(paciente.diabetes).subscribe(
                (diabetesData: any) => {
                  // Obtener datos de la enfermedad de anemia
                  this.apiService.obtenerDatosUsuarioAnemia(paciente.anemia).subscribe(
                    (anemiaData: any) => {
                      const mostrarPredicciones = paciente.anemia === anemiaData.id || paciente.diabetes === diabetesData.id || paciente.cancer_pulmonar === cancerData.id;

                      // Navegar a la página de detalle del paciente y pasar los datos como parámetros
                      this.router.navigate(['/visualizacion-pdf'], {
                        state: {
                          paciente: paciente,
                          diabetesData: diabetesData,
                          anemiaData: anemiaData,
                          cancerData: cancerData,
                          mostrarPredicciones: mostrarPredicciones
                        }
                      });
                    },
                    (error) => {
                      console.error('Error al obtener los datos de la enfermedad de anemia:', error);
                    }
                  );
                },
                (error) => {
                  console.error('Error al obtener los datos de la enfermedad de diabetes:', error);
                }
              );
            },
            (error) => {
              console.error('Error al obtener los datos de la enfermedad de cáncer pulmonar:', error);
            }
          );
        } else {
          console.error('El paciente no tiene un formulario de cáncer pulmonar asociado.');
        }
      },
      (error) => {
        console.error('Error al obtener los datos del paciente:', error);
      }
    );
  }
}

  // verDetallesUsuario(pacienteid:number) {
  //   this.router.navigate(['/visualizacion-pdf', { pacienteid }]);
  // }
//   buscarPacientes() {
//     this.apiService.buscarPacientes(this.searchTerm)
//       .subscribe((response: any) => {
//         this.listaPacientes= response;
//       }, (error) => {
//         console.error('Error al buscar Paciente:', error);
//       });
//   }
// }
 