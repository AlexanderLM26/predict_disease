import { Component, OnInit } from '@angular/core';
import { Router} from '@angular/router';
import { Storage } from '@ionic/storage';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-mis-casas',
  templateUrl: './mis-casas.page.html',
  styleUrls: ['./mis-casas.page.scss'],
})
  export class MisCasasPage implements OnInit {
    constructor() { }
    
    ngOnInit() {
  }
  }
  //   username: any;
  //   email: any;
  //   users: any; // Agrega esta línea para la variable users
  
  //   constructor(private storage: Storage, private router: Router, private http: HttpClient) { }
  
  //   ngOnInit() {
  //     this.storage.create().then(() => {
  //       this.storage.get('username').then((data) => {
  //         if (data) {
  //           this.username = data.usser_info.username;
  //           this.email = data.usser_info.email;
  //         }
  //       });
  //     });
  
  //     this.http.get('https://django-pwvr.onrender.com/api').subscribe(
  //       (response) => {
  //         this.users = response;
  //       },
  //       (error) => {
  //         console.error(error);
  //       }
  //     );
  //   }
  
  //   logout() {
  //     this.storage.remove('username');
  //     this.router.navigate(['/login']);
  //   }
  // }
  