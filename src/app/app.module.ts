import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { ProtocolsPage } from '../pages/protocols/protocols';
import { ProtocolPage } from '../pages/protocol/protocol';
import { ProtocolGroupsPage } from '../pages/protocol-groups/protocol-groups';
import { ContactsPage } from '../pages/contacts/contacts';
import { SettingsPage } from '../pages/settings/settings';
import { ToolsPage } from '../pages/tools/tools';
import { DrugsPage } from '../pages/drugs/drugs';
import { LoginPage } from '../pages/login/login';
import { Agency } from '../providers/agency';
import { Storage } from '@ionic/storage';
import { MarkdownToHtmlModule } from 'markdown-to-html-pipe';
import { GlasgowComaScalePage } from '../pages/glasgow-coma-scale/glasgow-coma-scale';
import { RuleOf9sPage } from '../pages/rule-of-9s/rule-of-9s';

@NgModule({
  declarations: [
    MyApp,
    ToolsPage,
    ProtocolsPage,
    ContactsPage,
    DrugsPage,
    LoginPage,
    ProtocolGroupsPage,
    ProtocolPage,
    SettingsPage,
    GlasgowComaScalePage,
    RuleOf9sPage
  ],
  imports: [
    MarkdownToHtmlModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    ToolsPage,
    ProtocolsPage,
    ContactsPage,
    DrugsPage,
    LoginPage,
    ProtocolGroupsPage,
    ProtocolPage,
    SettingsPage,
    GlasgowComaScalePage,
    RuleOf9sPage
  ],
  providers: [
    Agency,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    Storage
  ]
})
export class AppModule {}
