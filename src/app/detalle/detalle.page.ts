import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from '../servicios/api.service';

@Component({
  selector: 'app-detalle',
  templateUrl: './detalle.page.html',
  styleUrls: ['./detalle.page.scss']
})
export class DetallePage implements OnInit {
  nombreUsuario: string;
  usuario: any;

  constructor() {}

  ngOnInit() {}
}
