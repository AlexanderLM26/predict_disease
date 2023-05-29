import { Component,OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { fromEvent } from 'rxjs';
import { debounceTime, map } from 'rxjs/operators';
import { Alert } from 'selenium-webdriver';
import { MensajesService } from './proveedores/mensajes.service';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent implements OnInit {
  public netStatus: string;

  constructor(

    private router: Router,) {}


  ngOnInit() {




  }

}
