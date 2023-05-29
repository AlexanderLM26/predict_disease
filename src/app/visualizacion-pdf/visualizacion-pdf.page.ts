import { Component, OnInit } from '@angular/core';
import { ApiService } from '../servicios/api.service';
import { ActivatedRoute } from '@angular/router';
import * as pdfMake from 'pdfmake/build/pdfmake';
import * as pdfFonts from 'pdfmake/build/vfs_fonts';

@Component({
  selector: 'app-visualizacion-pdf',
  templateUrl: 'visualizacion-pdf.page.html',
  styleUrls: ['visualizacion-pdf.page.scss'],
})
export class VisualizacionPdfPage implements OnInit {
  paciente: any;
  diabetesData: any;
  anemiaData: any;
  cancerData: any;
  mostrarPredicciones: boolean;

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.obtenerDatosDeRuta();
  }

  obtenerDatosDeRuta() {
    this.route.queryParams.subscribe((params) => {
      this.paciente = params.paciente;
      this.diabetesData = params.diabetesData;
      this.anemiaData = params.anemiaData;
      this.cancerData = params.cancerData;
      this.mostrarPredicciones = params.mostrarPredicciones;
    });
  }
}
  // usuario: any; // Variable para almacenar los datos del usuario seleccionado
  // enfermedad: string; // Variable para almacenar la enfermedad (diabetes o anemia)
  // pacienteId: number;
  // paciente: any;
  // historialFormularios: any[];
  // paciente: Paciente;

  // constructor(private activatedRoute: ActivatedRoute, private apiService: ApiService, private route: ActivatedRoute,) {}

  // ngOnInit() {
    // Obtener el parámetro de la URL (ID del usuario) y cargar los datos del usuario
    // this.activatedRoute.params.subscribe(params => {
    //   const id = params['id'];
    //   this.enfermedad = params['enfermedad'];
    //   this.obtenerDatosUsuario(id);
      
//     this.route.paramMap.subscribe(params => {
//       this.pacienteId = +params.get('id');
//       this.obtenerDetallesPaciente();
//       this.obtenerHistorialFormularios();
//     });
//   }
  
//   obtenerDetallesPaciente() {
//     this.apiService.obtenerDatosPaciente(this.pacienteId).subscribe(
//       (response: any) => {
//         this.paciente = response;
//       },
//       (error) => {
//         console.error('Error al obtener los detalles del paciente:', error);
//       }
//     );
//   }

//   obtenerHistorialFormularios() {
//     this.apiService.obtenerHistorialFormulariosPaciente(this.pacienteId).subscribe(
//       (response: any[]) => {
//         this.historialFormularios = response;
//       },
//       (error) => {
//         console.error('Error al obtener el historial de formularios:', error);
//       }
//     );
//   }
// }






//   obtenerDatosUsuario1(id: number) {
//     // Llamar al servicio API para obtener los datos del usuario por su ID y enfermedad
//     if (this.enfermedad === 'diabetes') {
//       this.apiService.obtenerDatosUsuarioDiabetes(id)
//         .subscribe((response: any) => {
//           this.usuario = response;
//         }, (error) => {
//           console.error('Error al obtener los datos del usuario:', error);
//         });
//     } else if (this.enfermedad === 'anemia') {
//       this.apiService.obtenerDatosUsuarioAnemia(id)
//         .subscribe((response: any) => {
//           this.usuario = response;
//         }, (error) => {
//           console.error('Error al obtener los datos del usuario:', error);
//         });
//     } else if (this.enfermedad === 'cancerPulmonar') {
//       this.apiService.obtenerDatosUsuariocancerpulmonar(id)
//         .subscribe((response: any) => {
//           this.usuario = response;
//         }, (error) => {
//           console.error('Error al obtener los datos del usuario:', error);
//         });
//     }
//   }
//   obtenerDatosUsuario(id: number){
//     this.apiService.obtenerDatosPacientes(id)
//     .subscribe((response: any) => {
//       this.usuario = response;
//     }, (error) => {
//       console.error('Error al obtener los datos del usuario:', error);
//     });
// }

 



// generarPDF() {
//     // Configurar la definición del documento PDF utilizando los datos del usuario
//     let docDefinition;
//     if (this.enfermedad === 'diabetes') {
//       docDefinition = {
//         content: [
//           { text: 'Informe de Diabetes', style: 'header' },
//           { text: `Nombre: ${this.usuario.nombreUsuario}`, style: 'subheader' },
//           { text: `Género: ${this.usuario.genero}`, style: 'content' },
//           { text: `Hipertensión: ${this.usuario.hipertencion}`, style: 'content' },
//           { text: `Cardiopatía: ${this.usuario.cardiopatia}`, style: 'content' },
//           { text: `Fumador: ${this.usuario.fumador}`, style: 'content' },
//           { text: `MCI: ${this.usuario.MCI}`, style: 'content' },
//           { text: `Niveles de Hemoglobina: ${this.usuario.nivelesHemoglobina}`, style: 'content' },
//           { text: `Nivel de Glucosa: ${this.usuario.nivelGlucosa}`, style: 'content' },
//           { text: `Edad: ${this.usuario.edad}`, style: 'content' },
//           { text: `Resultado: ${this.usuario.resultado}`, style: 'content' },
//           // Agrega más campos específicos para diabetes
//         ],
//         styles: {
//           header: {
//             fontSize: 20,
//             bold: true,
//             margin: [0, 0, 0, 10], // Margen inferior de 10 unidades
//             alignment: 'center'
//           },
//           subheader: {
//             fontSize: 16,
//             bold: true,
//             margin: [0, 10, 0, 5], // Margen inferior de 5 unidades y superior de 10 unidades
//             alignment: 'center'
//           },
//           content: {
//             fontSize: 12,
//             margin: [0, 0, 0, 5] // Margen inferior de 5 unidades
//           }
//         }
//       };
//     } else if (this.enfermedad === 'anemia') {
//       docDefinition = {
//         content: [
//           { text: 'Informe de Anemia', style: 'header' },
//           { text: `Nombre: ${this.usuario.nombreUsuario}`, style: 'subheader' },
//           { text: `Género: ${this.usuario.genero}`, style: 'content' },
//           { text: `Hemoglobina: ${this.usuario.Hemogobina}`, style: 'content' },
//           { text: `MCH: ${this.usuario.MCH}`, style: 'content' },
//           { text: `MCHC: ${this.usuario.MCHC}`, style: 'content' },
//           { text: `MCV: ${this.usuario.MCV}`, style: 'content' },
//           { text: `Resultado: ${this.usuario.Resultado}`, style: 'content' },
//           // Agrega más campos específicos para anemia
//         ],
//         styles: {
//           header: {
//             fontSize: 20,
//             bold: true,
//             margin: [0, 0, 0, 10], // Margen inferior de 10 unidades
//             alignment: 'center'
//           },
//           subheader: {
//             fontSize: 16,
//             bold: true,
//             margin: [0, 10, 0, 5], // Margen inferior de 5 unidades y superior de 10 unidades
//             alignment: 'center'
//           },
//           content: {
//             fontSize: 12,
//             margin: [0, 0, 0, 5] // Margen inferior de 5 unidades
//           }
//         }
//       };
//     } else if (this.enfermedad === 'cancerPulmonar') {
//       docDefinition = {
//         content: [
//           { text: 'Informe de Cáncer Pulmonar', style: 'header' },
//           { text: `Nombre: ${this.usuario.nombreUsuario}`, style: 'subheader' },
//           { text: `Género: ${this.usuario.Genero}`, style: 'content' },
//           { text: `Edad: ${this.usuario.edad}`, style: 'content' },
//           { text: `Consumo de Alcohol: ${this.usuario.ConsumoAlcohol}`, style: 'content' },
//           { text: `Alergia al Polvo: ${this.usuario.AlergiaPolvo}`, style: 'content' },
//           { text: `Registro Genético: ${this.usuario.RegistroGenetico}`, style: 'content' },
//           { text: `Enfermedad Pulmonar: ${this.usuario.EnfermedadPulmonar}`, style: 'content' },
//           { text: `Dieta Equilibrada: ${this.usuario.DietaEquilibrada}`, style: 'content' },
//           { text: `Obesidad: ${this.usuario.Obesidad}`, style: 'content' },
//           { text: `Tabaquismo: ${this.usuario.Tabaquismo}`, style: 'content' },
//           { text: `Fumador Pasivo: ${this.usuario.FumadorPasivo}`, style: 'content' },
//           { text: `Dolor en el Pecho: ${this.usuario.DolorPecho}`, style: 'content' },
//           { text: `Tos con Sangre: ${this.usuario.TosConSangre}`, style: 'content' },
//           { text: `Fatiga: ${this.usuario.fatiga}`, style: 'content' },
//           { text: `Pérdida de Peso: ${this.usuario.PerdidaPeso}`, style: 'content' },
//           { text: `Dificultad para Respirar: ${this.usuario.DificultadRespirar}`, style: 'content' },
//           { text: `Sibilancia: ${this.usuario.Sibilancia}`, style: 'content' },
//           { text: `Dificultad para Tragar: ${this.usuario.DificultadTragar}`, style: 'content' },
//           { text: `Tos Seca: ${this.usuario.TosSeca}`, style: 'content' },
//           { text: `Resultados: ${this.usuario.resultados}`, style: 'content' },
//         ],
//         styles: {
//           header: {
//             fontSize: 20,
//             bold: true,
//             margin: [0, 0, 0, 10], // Margen inferior de 10 unidades
//             alignment: 'center'
//           },
//           subheader: {
//             fontSize: 16,
//             bold: true,
//             margin: [0, 10, 0, 5], // Margen inferior de 5 unidades y superior de 10 unidades
//             alignment: 'center'
//           },
//           content: {
//             fontSize: 12,
//             margin: [0, 0, 0, 5] // Margen inferior de 5 unidades
//           }
//         }
//       };
//     }

  
//     // Generar el PDF
//     pdfMake.createPdf(docDefinition).open();
//   }
// }
//   pdfMake.vfs = pdfFonts.pdfMake.vfs; 

























// import { Component, OnInit } from '@angular/core';
// import { ApiService } from '../servicios/api.service';
// import { ActivatedRoute } from '@angular/router';
// import * as pdfMake from 'pdfmake/build/pdfmake';

// @Component({
//   selector: 'app-visualizacion-pdf',
//   templateUrl: 'visualizacion-pdf.page.html',
//   styleUrls: ['visualizacion-pdf.page.scss'],
// })
// export class VisualizacionPdfPage implements OnInit {
//   usuario: any; // Variable para almacenar los datos del usuario seleccionado
//   enfermedad: string; // Variable para almacenar la enfermedad (diabetes o anemia)

//   constructor(private activatedRoute: ActivatedRoute, private apiService: ApiService) {}

//   ngOnInit() {
//     // Obtener el parámetro de la URL (ID del usuario) y cargar los datos del usuario
//     this.activatedRoute.params.subscribe(params => {
//       const id = params['id'];
//       this.enfermedad = params['enfermedad'];
//       this.obtenerDatosUsuario(id);
//     });
//   }

//   obtenerDatosUsuario(id: number) {
//     // Llamar al servicio API para obtener los datos del usuario por su ID y enfermedad
//     if (this.enfermedad === 'diabetes') {
//       this.apiService.obtenerDatosUsuarioDiabetes(id)
//         .subscribe((response: any) => {
//           this.usuario = response;
//         }, (error) => {
//           console.error('Error al obtener los datos del usuario:', error);
//         });
//     } else if (this.enfermedad === 'anemia') {
//       this.apiService.obtenerDatosUsuarioAnemia(id)
//         .subscribe((response: any) => {
//           this.usuario = response;
//         }, (error) => {
//           console.error('Error al obtener los datos del usuario:', error);
//         });
//     }
//   }

//   exportarPDF() {
//     // Configurar la definición del documento PDF utilizando los datos del usuario
//     const docDefinition = {
//       content: [
//         { text: `Nombre: ${this.usuario.nombreUsuario}`, fontSize: 16, bold: true },
//         { text: `Género: ${this.usuario.genero}`, fontSize: 12 },
//         // Agrega más campos según los datos que desees mostrar en el PDF
//       ],
//     };

//     // Generar el PDF y descargarlo
//     pdfMake.createPdf(docDefinition).download();
//   }
// }

// <ion-content>
//   <!-- Contenido de tu página -->
//   <button (click)="exportarPDF()">Exportar a PDF</button>
// </ion-content>
