import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],

})

export class HomePage  implements OnInit {
  typedText: string = '';

  progress: number = 0;
  progressInterval: any;
  constructor(private router: Router) {}

  ionViewDidEnter() {
    this.progressInterval = setInterval(() => {
      this.progress += 10;
      if (this.progress > 100) {
        clearInterval(this.progressInterval);
        this.router.navigate(['tabs/categorias']); 
      }
    }, 200);
  }
  ngOnInit() {
    const text = 'Predict Disease';
    let index = 0;
    const typingInterval = setInterval(() => {
      if (index < text.length) {
        this.typedText += text[index];
        index++;
      } else {
        clearInterval(typingInterval);
      }
    }, 100);
  }
}


