import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { ToolsPage } from '../pages/tools/tools';
import { ProtocolsPage } from '../pages/protocols/protocols';
import { HospitalsPage } from '../pages/hospitals/hospitals';
import { DrugsPage } from '../pages/drugs/drugs';
import { LoginPage } from '../pages/login/login';
import { Agency } from '../providers/agency';
import { ValuesPipe } from '../pipes/values-pipe';

@NgModule({
  declarations: [
    MyApp,
    ToolsPage,
    ProtocolsPage,
    HospitalsPage,
    DrugsPage,
    LoginPage
  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    ToolsPage,
    ProtocolsPage,
    HospitalsPage,
    DrugsPage,
    LoginPage
  ],
  providers: [Agency, {provide: ErrorHandler, useClass: IonicErrorHandler}]
})
export class AppModule {}
