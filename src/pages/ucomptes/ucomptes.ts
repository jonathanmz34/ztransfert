import {Component, OnInit, ViewChild} from '@angular/core';
import { NavController,NavParams } from 'ionic-angular';
import {UtransfertsPage} from "../utransferts/utransferts";
import {UnotifsPage} from "../unotifs/unotifs";
/*import {UtransfertsPage} from "../utransferts/utransferts";
import {UnotifsPage} from "../unotifs/unotifs";*/

@Component({
  selector: 'ucomptes-about',
  templateUrl: 'ucomptes.html',

})
export class UcomptesPage {
  public parameter1;
  public parameter2;

  constructor(public navCtrl: NavController, private navParams: NavParams) {

  }

  ngAfterViewInit() {
    // After the view is initialized, this.userProfile will be available
    this.parameter1 = this.navParams.get('param1');
    this.parameter2 = this.navParams.get('param2');
  }

  goMestransferts() {
    this.navCtrl.push(UtransfertsPage,{param1: this.parameter1 });
  }

  goMesnotifications() {
    this.navCtrl.push(UnotifsPage,{param1: this.parameter1, param2: this.parameter2 });
  }
}

