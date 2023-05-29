import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '@env/environment';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private url= "https://django2-468o.onrender.com";
  private enfermedadurl= "https://django2-468o.onrender.com";

  constructor(private http: HttpClient , public route: Router) { }

  public login(username: string , password: string ): Observable<any>{
    console.log("datos autentificacion",username,password); 
    const loginData = {
      username: username,
      password: password
    };
    return this.http.post(this.url +'/login/',loginData);
  }
  // public register(username: string,email: string,password: string): Observable<any>{
  //   return this.http.post(this.url+'/register/',{username,email,password});
  // }
  registerMedico(codigoHospital:string, nombre: string, apellido: string, correoElectronico: string,password:string, numero_celular: number, ci: number, especialidad: string, rol: string): Observable<any> {
    const form = {
      codigoHospital,
      nombre,
      apellido,
      correoElectronico,
      password,
      numero_celular,
      ci,
      especialidad,
      rol
    };
  
    return this.http.post(this.url + '/medico/', form);
  }  
  

  public registerHospital(nombre: string,direccion: string,correoElectronico: string,telefono:number): Observable<any>{
    return this.http.post(this.url+'/hospital/',{nombre,direccion,correoElectronico,telefono});
  }

  public obtenerListaMedicos(){
    return this.http.get(this.url+'/medico/');
  }
  public enviarFormulario(pacienteId:number,genero: number, edad:number,
    hipertencion:number, cardiopatia: number, fumador: number, MCI: number, nivelesHemoglobina: number, nivelGlucosa:number, resultado:string  ): Observable<any> {
    const formData = {
    pacienteId:pacienteId,
    genero: genero,
    edad: edad,
    hipertencion: hipertencion,
    cardiopatia: cardiopatia,
    fumador: fumador,
    MCI: MCI,
    nivelesHemoglobina: nivelesHemoglobina,
    nivelGlucosa: nivelGlucosa,
    resultado: resultado
    };
    return this.http.post(this.enfermedadurl + '/diabetes/', formData);
  }

  public enviarFormulario2(nombreUsuario: string, genero: number, 
    Hemogobina:number, MCH:number, MCHC:number, MCV:number, edad:number, Resultado:string  ): Observable<any> {
    const formData = {
    nombreUsuario: nombreUsuario,
    genero: genero,
    Hemogobina:Hemogobina,
    MCH:MCH,
    MCHC:MCHC,
    MCV:MCV,
    edad: edad,
    Resultado: Resultado
    };
    return this.http.post(this.enfermedadurl + '/anemia/', formData);
  }
  public enviarFormulario3(nombreUsuario: string, edad:number, Genero: number, ConsumoAlcohol: number, AlergiaPolvo: number, RegistroGenetico: number,
    EnfermedadPulmonar: number, DietaEquilibrada: number, Obesidad: number, Tabaquismo: number, FumadorPasivo: number,
    DolorPecho: number, TosConSangre: number, fatiga: number, PerdidaPeso: number, DificultadRespirar: number,
    Sibilancia: number, DificultadTragar: number, TosSeca: number, resultados: string): Observable<any> {
    
    const formData = {
      nombreUsuario: nombreUsuario,
      edad:edad,
      Genero: Genero,
      ConsumoAlcohol: ConsumoAlcohol,
      AlergiaPolvo: AlergiaPolvo,
      RegistroGenetico: RegistroGenetico,
      EnfermedadPulmonar: EnfermedadPulmonar,
      DietaEquilibrada: DietaEquilibrada,
      Obesidad: Obesidad,
      Tabaquismo: Tabaquismo,
      FumadorPasivo: FumadorPasivo,
      DolorPecho: DolorPecho,
      TosConSangre: TosConSangre,
      fatiga: fatiga,
      PerdidaPeso: PerdidaPeso,
      DificultadRespirar: DificultadRespirar,
      Sibilancia: Sibilancia,
      DificultadTragar: DificultadTragar,
      TosSeca: TosSeca,
      resultados: resultados
    };
  
    return this.http.post(this.enfermedadurl + '/cancerPulmonar/', formData);
  }

  public getUsuariosDiabetes(): Observable<any> {
    return this.http.get(`${this.enfermedadurl}/diabetes/`);
  }

  public getUsuariosAnemia(): Observable<any> {
    return this.http.get(`${this.enfermedadurl}/anemia/`);
  }
  public getUsuarioscancerpulmonar(): Observable<any> {
    return this.http.get(`${this.enfermedadurl}/cancerPulmonar/`);
  }

  public obtenerDatosUsuarioDiabetes(codigoPaciente: number): Observable<any> {
    return this.http.get(`${this.enfermedadurl}/diabetes/${codigoPaciente}/`);
  }
  
  public obtenerDatosUsuarioAnemia(codigoPaciente: number): Observable<any> {
    return this.http.get(`${this.enfermedadurl}/anemia/${codigoPaciente}/`);
  }

  // public obtenerDatosUsuariocancerpulmonar(id: number): Observable<any> {
  //   return this.http.get(`${this.enfermedadurl}/cancerPulmonar/${id}/`);
  // }

  public obtenerDatosMedico(id: number): Observable<any> {
    return this.http.get(`${this.url}/medico/${id}/`);
  }
  public getMedicos(id: number): Observable<any> {
    return this.http.get(`${this.url}/medico/${id}/`);
  }
  public buscarPacientes(searchTerm: string): Observable<any> {
    const url = `${this.url}/search/?q=${encodeURIComponent(searchTerm)}`;
    console.log('/search/?q=', url);
    return this.http.get(url);
  }
  
  // public buscarMedicos(searchTerm: string): Observable<any> {
  //   return this.http.get(`${this.url}/search/?q=${encodeURIComponent(searchTerm)}`);
  //   console.log('/search/?q=:', url);
  // }
  public obtenerListaPacientes(){
    return this.http.get(this.url+'/paciente/');
  }
  // public getPacientes(id: number): Observable<any> {
  //   return this.http.get(`${this.url}/medico/${id}/`);
  // }
  public Postpaciente(
    nombre: string,
    apellido: string,
    correo_electronico: string,
    edad: number,
    peso: number,
    altura: number,
    direccion: string,
    numero_celular: string,
    ci: string
  ): Observable<any> {
    const paciente = {
      id: 2,
      nombre: nombre,
      apellido: apellido,
      correo_electronico: correo_electronico,
      edad: edad,
      peso: peso,
      altura: altura,
      direccion: direccion,
      numero_celular: numero_celular,
      ci: ci
    };
    return this.http.post(this.enfermedadurl + '/paciente/', paciente);
  }
  eliminarPaciente(id: number): Observable<any> {
    const url = `${this.enfermedadurl}/paciente/${id}`;
    return this.http.delete<any>(url);
  }
  getPacientes(): Observable<any> {
    const url = `${this.enfermedadurl}/paciente/`; 
    return this.http.get(url);
  }

  public obtenerDatosPacientes(id:number): Observable<any>{
    return this.http.get(`${this.url}/medico/${id}/`);
  }

  public relacionarPacienteConAnemia(codigoPaciente: number, codigoAnemia: number): Observable<any>{
    const body = {
      codigoPaciente: codigoPaciente,
      codigoAnemia: codigoAnemia
    };
    return this.http.post(`${this.url}/enfermedades/anemia/`,body);
  }
  public relacionarPacienteConDiabetes(codigoPaciente: number, codigoDiabetes: number): Observable<any>{
    const body = {
      codigoPaciente: codigoPaciente,
      codigoDiabetes: codigoDiabetes
    };
    return this.http.post(`${this.url}/enfermedades/diabetes/`,body);
  }
  public relacionarPacienteConCancer (codigoPaciente: number, codigoCancer_pulmonar: number): Observable<any>{
    const body = {
      codigoPaciente: codigoPaciente,
      codigoCancer_pulmonar: codigoCancer_pulmonar
    };
    return this.http.post(`${this.url}/enfermedades/cancerPulmonar/`,body);
  
  }


  public obtenerHistorialFormulariosPaciente(pacienteId: number) {
    const url = `${this.url}/historial?paciente=${pacienteId}`;
    return this.http.get(url);
  }
 
  
  public obtenerDatosPaciente(codigoPaciente: number): Observable<any> {
    const url = `${this.url}/paciente/${codigoPaciente}/`;
    return this.http.get(url);
}

public obtenerDatosUsuariocancerpulmonar(codigoCancer_pulmonar: number): Observable<any> {
  const url = `${this.enfermedadurl}/cancerPulmonar/${codigoCancer_pulmonar}/`;
  return this.http.get(url);
}

}