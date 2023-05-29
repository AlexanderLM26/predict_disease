import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { ApiService } from '../servicios/api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list-user',
  templateUrl: './list-user.page.html',
  styleUrls: ['./list-user.page.scss'],
})
export class ListUserPage implements OnInit {
  listMedicos: any[];
  searchTerm: string = '';

  constructor(private navCtrl: NavController, private apiService: ApiService, private router: Router) {}

  ngOnInit() {
    this.obtenerListaMedicos();
  }

  obtenerListaMedicos() {
    this.apiService.obtenerListaMedicos().subscribe(
      (response: any[]) => {
        this.listMedicos = response;
      },
      (error) => {
        console.error('Error al obtener la lista de médicos:', error);
      }
    );
  }

  verDetallesMedico(id: number) {
    this.router.navigate(['/registromedicos/medico', id]);
  }
}
