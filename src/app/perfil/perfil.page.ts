import { Component, OnInit } from '@angular/core';
import { Storage } from '@ionic/storage';
import { Router } from '@angular/router';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.page.html',
  styleUrls: ['./perfil.page.scss'],
})
export class PerfilPage implements OnInit {
  username: any;
  email: any;


  constructor(private storage: Storage, private router: Router) { }
  ngOnInit() {
    this.storage.create().then(() => {
      this.storage.get('username').then((data) => {
        if (data) {
          this.username = data.usser_info.username;
          this.email = data.usser_info.email;
        }
      });
    });
  }

  logout() {
    this.storage.remove('username');
    this.router.navigate(['/login']);
  }
}
