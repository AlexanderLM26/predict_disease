import { Component, OnInit } from '@angular/core';
import { ApiService } from '../servicios/api.service';

@Component({
  selector: 'app-anemia',
  templateUrl: './anemia.page.html',
  styleUrls: ['./anemia.page.scss'],
})
export class AnemiaPage implements OnInit {
  nombreUsuario: string;
  genero: number;
  Hemogobina: number;
  MCH: number;
  MCHC: number;
  MCV: number;
  edad: number;
  Resultado: string;
  idPrediccionAnemia: any;

  searchTerm: string = '';
  pacientes: any[] = [];
  pacienteSeleccionado: any;
  idPacienteSeleccionado: number;
  codigoPaciente: number;
  codigoAnemia: number;

  constructor(private apiService: ApiService) {}

  ngOnInit() {}

  predecirAnemia(datos: any): string {
    if (datos.Hemogobina <= 4 || datos.MCH <= 2 || datos.MCHC <= 3 || datos.MCV <= 4) {
      return 'Tiene anemia';
    } else {
      return 'No tiene anemia';
    }
  }

  enviarFormulario2() {
    if (this.pacienteSeleccionado) {
      const codigoPaciente = this.pacienteSeleccionado.id;
      console.log('Código de paciente:', codigoPaciente);

      this.Resultado = this.predecirAnemia({
        Hemogobina: this.Hemogobina,
        MCH: this.MCH,
        MCHC: this.MCHC,
        MCV: this.MCV
      });
      this.apiService
        .enviarFormulario2(
          this.nombreUsuario,
          this.genero,
          this.Hemogobina,
          this.MCH,
          this.MCHC,
          this.MCV,
          this.edad,
          this.Resultado
        )
        .subscribe(
          (response) => {
            this.idPrediccionAnemia = response.id;
            console.log('Éxito', response);
            console.log('ID de la predicción de anemia', this.idPrediccionAnemia);

            const codigoAnemia = this.idPrediccionAnemia;
            console.log('Código de anemia:', codigoAnemia);

            const formulario = {
              codigoPaciente: codigoPaciente,
              codigoAnemia: codigoAnemia,
              nombreUsuario: this.nombreUsuario,
              genero: this.genero,
              Hemogobina: this.Hemogobina,
              MCH: this.MCH,
              MCHC: this.MCHC,
              MCV: this.MCV,
              edad: this.edad,
              Resultado:this.Resultado
              
            };
  
            // Realizar la relación entre paciente y formulario de anemia
            this.apiService
              .relacionarPacienteConAnemia(codigoPaciente, codigoAnemia)
              .subscribe(
                (relacionResponse) => {
                  console.log(
                    'Relación exitosa entre paciente y formulario de anemia',
                    relacionResponse
                  );

                },
                (relacionError) => {
                  console.log(codigoAnemia);
                  console.log(codigoPaciente);
                  console.error(
                    'Error al realizar la relación entre paciente y formulario de anemia',
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
      this.apiService.buscarPacientes(this.searchTerm).subscribe(
        (response: any) => {
          this.pacientes = response;
        },
        (error) => {
          console.error('Error al buscar Paciente:', error);
        }
      );
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














// import { Component, OnInit } from '@angular/core';
// import { ApiService } from '../servicios/api.service';

// @Component({
//   selector: 'app-anemia',
//   templateUrl: './anemia.page.html',
//   styleUrls: ['./anemia.page.scss'],
// })
// export class AnemiaPage implements OnInit {
//   nombreUsuario: string;
//   genero: number;
//   Hemogobina: number;
//   MCH: number;
//   MCHC: number;
//   MCV: number;
//   edad: number;
//   Resultado: string;
//   idPrediccionAnemia: any;

//   searchTerm: string = '';
//   pacientes: any[] = [];
//   pacienteSeleccionado: any;
//   idPacienteSeleccionado: number;
//   codigoPaciente: number;
//   codigoAnemia: number;

//   constructor(private apiService: ApiService) {}

//   ngOnInit() {}

//   predecirAnemia(datos: any): string {
//     if (datos.Hemogobina <= 4) {
//       return 'Tiene anemia';
//     } else if (datos.MCH <= 2) {
//       return 'Tiene anemia';
//     } else if (datos.MCHC <= 3) {
//       return 'Tiene anemia';
//     } else if (datos.MCV <= 4) {
//       return 'Tiene anemia';
//     } else {
//       return 'No tiene anemia';
//     }
//   }

//   enviarFormulario2() {
//     if (this.pacienteSeleccionado) {
//       const codigoPaciente = this.pacienteSeleccionado.id;
//       console.log('Código de paciente:', codigoPaciente);

//       // Verificar si this.Resultado está definido y tiene un valor
//       if (!this.Resultado) {
//         // Asignar un valor predeterminado si no está definido
//         this.Resultado = 'No se ha proporcionado un resultado';
//       }

//       this.apiService
//         .enviarFormulario2(
//           this.nombreUsuario,
//           this.genero,
//           this.Hemogobina,
//           this.MCH,
//           this.MCHC,
//           this.MCV,
//           this.edad,
//           this.Resultado
//         )
//         .subscribe(
//           (response) => {
//             this.idPrediccionAnemia = response.id;
//             console.log('Éxito', response);
//             console.log('ID de la predicción de anemia', this.idPrediccionAnemia);

//             const codigoAnemia = this.idPrediccionAnemia;
//             console.log('Código de anemia:', codigoAnemia);

//             const formulario = {
//               codigoPaciente: codigoPaciente,
//               codigoAnemia: codigoAnemia,
//               nombreUsuario: this.nombreUsuario,
//               genero: this.genero,
//               Hemogobina: this.Hemogobina,
//               MCH: this.MCH,
//               MCHC: this.MCHC,
//               MCV: this.MCV,
//               edad: this.edad,
//               Resultado: this.Resultado,
//             };

//             this.Resultado = this.predecirAnemia(formulario);

//             // Realizar la relación entre paciente y formulario de anemia
//             this.apiService
//               .relacionarPacienteConAnemia(codigoPaciente, codigoAnemia)
//               .subscribe(
//                 (relacionResponse) => {
//                   console.log(
//                     'Relación exitosa entre paciente y formulario de anemia',
//                     relacionResponse
//                   );

//                 },
//                 (relacionError) => {
//                   console.log(codigoAnemia);
//                   console.log(codigoPaciente);
//                   console.error(
//                     'Error al realizar la relación entre paciente y formulario de anemia',
//                     relacionError
//                   );
//                 }
//               );
//           },
//           (error) => {
//             console.error(error);
//           }
//         );
//     } else {
//       console.error('No se ha seleccionado ningún paciente');
//     }
//   }

//   buscarPacientes() {
//     if (this.searchTerm.trim() !== '') {
//       this.apiService.buscarPacientes(this.searchTerm).subscribe(
//         (response: any) => {
//           this.pacientes = response;
//         },
//         (error) => {
//           console.error('Error al buscar Paciente:', error);
//         }
//       );
//     } else {
//       this.pacientes = [];
//     }
//   }

//   seleccionarPaciente(paciente: any) {
//     this.pacienteSeleccionado = paciente;
//     this.idPacienteSeleccionado = paciente.id;
//     this.searchTerm = paciente.nombre;
//   }

// }
