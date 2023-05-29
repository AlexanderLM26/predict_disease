// import { Component, OnInit } from '@angular/core';
// import { ApiService } from '../servicios/api.service';
// @Component({
//   selector: 'app-prediccion',
//   templateUrl: './prediccion.page.html',
//   styleUrls: ['./prediccion.page.scss'],
// })
// export class PrediccionPage implements OnInit {


//   constructor(private apiService: ApiService) {}
//   ngOnInit() {
//   }


// enfermedad: string;
// enfermedadSeleccionada: string;
// datoEnfermedad1: string;
// datoEnfermedad2: string;
// datoEnfermedad3: string;
// datoEspecifico: string;

// mostrarDatosEnfermedad() {
// if (this.enfermedad === 'Diabetes') {
//   this.enfermedadSeleccionada = 'Diabetes';
//   this.datoEspecifico = this.datoEnfermedad1;
// } 
// else if (this.enfermedad === 'Anemia') {
//   this.enfermedadSeleccionada = 'Anemia';
//   this.datoEspecifico = this.datoEnfermedad2;
// } 
// else if (this.enfermedad === 'CancerdePulmon') {
//   this.enfermedadSeleccionada = 'CancerdePulmon';
//   this.datoEspecifico = this.datoEnfermedad3;
// }
// }
//   genero: number;
//   nombre: string;
//   apellido: string;
//   edad: number;
//   hipertension: number;
//   enfermedadCardiaca: number;
//   tabaquismo: number;
//   inc: number;
//   hba1cLevel: number;
//   glucosaSangre: number;
//   resultadoPrediccion: string;
// RealizarPrediccion() {
//   const datos = {
//     nombreUsuario: this.nombre,
//     hipertencion: this.hipertension,
//     cardiopatia: this.enfermedadCardiaca,
//     fumador: this.tabaquismo,
//     MCI: this.inc,
//     nivelesHemoglobina: this.hba1cLevel,
//     nivelGlucosa: this.glucosaSangre,
//     resultado: this.resultadoPrediccion
//   };

//   this.apiService.realizarPrediccion(
//     datos.nombreUsuario,
//     datos.hipertencion,
//     datos.cardiopatia,
//     datos.fumador,
//     datos.MCI,
//     datos.nivelesHemoglobina,
//     datos.nivelGlucosa,
//     datos.resultado
//   ).subscribe(
//       (data: any) => {
//         this.resultadoPrediccion = data; // Puedes asignar el resultado recibido a una variable para mostrarlo en tu página
//       },
//       (error: any) => {
//         console.error(error);
//       }
//     );
//   }
//   realizarPrediccion() {
//     // Realizar aquí la lógica de predicción basada en los datos ingresados
//     // Por ejemplo, aquí hay un código de ejemplo para realizar una predicción simple
//     if (this.glucosaSangre > 7 || this.hba1cLevel > 6.5 || this.inc > 30) {
//       this.resultadoPrediccion = 'Tiene un alto riesgo de diabetes';
//     } else {
//       this.resultadoPrediccion = 'No tiene un alto riesgo de diabetes';
//     }
//   }
// }



import { Component, OnInit } from '@angular/core';
// import { ApiService } from '../servicios/api.service';

@Component({
  selector: 'app-prediccion',
  templateUrl: './prediccion.page.html',
  styleUrls: ['./prediccion.page.scss'],
})
export class PrediccionPage implements OnInit {

  constructor() {}

  ngOnInit() {}
}
  // mostrarDatosEnfermedad() {
  //   if (this.enfermedad === 'Diabetes') {
  //     this.enfermedadSeleccionada = 'Diabetes';
  //     this.datoEspecifico = this.datoEnfermedad1;
  //   } else if (this.enfermedad === 'Anemia') {
  //     this.enfermedadSeleccionada = 'Anemia';
  //     this.datoEspecifico = this.datoEnfermedad2;
  //   } else if (this.enfermedad === 'CancerdePulmon') {
  //     this.enfermedadSeleccionada = 'CancerdePulmon';
  //     this.datoEspecifico = this.datoEnfermedad3;
  //   }
  // }

  // realizarPrediccion() {
  //   // Realizar aquí la lógica de predicción basada en los datos ingresados
  //   // Por ejemplo, aquí hay un código de ejemplo para realizar una predicción simple
  //   if (this.glucosaSangre > 7 || this.hba1cLevel > 6.5 || this.inc > 30) {
  //     this.resultadoPrediccion = 'Tiene un alto riesgo de diabetes';
  //   } else {
  //     this.resultadoPrediccion = 'No tiene un alto riesgo de diabetes';
  //   }
  // }
  // RealizarPrediccion() {
  //   const datos = {
  //     nombreUsuario: this.nombre,
  //     genero:this.genero,
  //     hipertencion: this.hipertension,
  //     cardiopatia: this.enfermedadCardiaca,
  //     fumador: this.tabaquismo,
  //     MCI: this.inc,
  //     nivelesHemoglobina: this.hba1cLevel,
  //     nivelGlucosa: this.glucosaSangre,
  //     resultado: this.resultadoPrediccion,
  //   };

//     this.apiService.RealizarPrediccion(
//        datos
//       ).subscribe(
//         (data: any) => {
//           console.log('Datos guardados en la base de datos:', data);
//         },
//         (error: any) => {
//           console.error('Error al guardar los datos:', error);
//         }
//       );
      
//   }
// }
