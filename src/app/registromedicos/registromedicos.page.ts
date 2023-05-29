import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from '../servicios/api.service';

@Component({
  selector: 'app-registromedicos',
  templateUrl: './registromedicos.page.html',
  styleUrls: ['./registromedicos.page.scss'],
})
export class RegistromedicosPage implements OnInit {
  medico: any;

  constructor(private activatedRoute: ActivatedRoute, private apiService: ApiService) {}

  ngOnInit() {
    this.activatedRoute.params.subscribe((params) => {
      const id = params['id'];
      this.obtenerDatosMedico(id);
    });
  }

  obtenerDatosMedico(id: number) {
    this.apiService.obtenerDatosMedico(id).subscribe(
      (response: any) => {
        this.medico = response;
      },
      (error) => {
        console.error('Error al obtener los datos del médico:', error);
      }
    );
  }
}
