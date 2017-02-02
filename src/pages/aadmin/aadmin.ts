import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';
import {AtransfertsPage} from "../atransferts/atransferts";
import {AcomptesPage} from "../acomptes/acomptes";
import {AnotifsPage} from "../anotifs/anotifs";

@Component({
  selector: 'page-aadmin',
  templateUrl: 'aadmin.html'
})
export class AadminPage {

  constructor(public navCtrl: NavController) {

  }

  aComptesList(){
    this.navCtrl.push(AcomptesPage);
  }

  aTransfertsList(){
    this.navCtrl.push(AtransfertsPage);
  }

  aNotifsList(){
    this.navCtrl.push(AnotifsPage);
  }

}
