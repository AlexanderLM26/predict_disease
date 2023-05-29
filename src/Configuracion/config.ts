import { Injectable } from '@angular/core';

import { Storage } from '@ionic/storage';
import { Platform } from '@ionic/angular';
import { Observable } from 'rxjs';

@Injectable()

export class ConfigDatosApp{

  constructor(
    private storage: Storage,
    private platform: Platform
  ){

    this.storage.create();
  }



}
