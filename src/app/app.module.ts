import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';

import {AadminPage} from "../pages/aadmin/aadmin";
import {AnotifsPage} from "../pages/anotifs/anotifs";
import {AcomptesPage} from "../pages/acomptes/acomptes";
import {AnotifsaddPage} from "../pages/anotifsadd/anotifsadd";
import {AcompteaddPage} from "../pages/acompteadd/acompteadd";
import {AtransfertsPage} from "../pages/atransferts/atransferts";
import {AtransfertaddPage} from "../pages/atransfertadd/atransfertadd";
import {AcomptedeatailsPage} from "../pages/acomptedetails/acomptedetails";
import {AtransfertsdeatailsPage} from "../pages/atransfertsdetails/atransfertsdetails";
import {UnotifsPage} from "../pages/unotifs/unotifs";
import {UcomptesPage} from "../pages/ucomptes/ucomptes";
import {UtransfertsPage} from "../pages/utransferts/utransferts";
import {UtransfertaddPage} from "../pages/utransfertadd/utransfertadd";

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    AadminPage,
    AcomptesPage,
    AnotifsPage,
    AnotifsaddPage,
    AtransfertsPage,
    AtransfertaddPage,
    AcompteaddPage,
    AcomptedeatailsPage,
    AtransfertsdeatailsPage,
    UcomptesPage,
    UnotifsPage,
    UtransfertaddPage,
    UtransfertsPage
  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    AadminPage,
    AcomptesPage,
    AnotifsPage,
    AnotifsaddPage,
    AtransfertsPage,
    AtransfertaddPage,
    AcompteaddPage,
    AcomptedeatailsPage,
    AtransfertsdeatailsPage,
    UcomptesPage,
    UnotifsPage,
    UtransfertaddPage,
    UtransfertsPage
  ],
  providers: [{provide: ErrorHandler, useClass: IonicErrorHandler}]
})
export class AppModule {}
