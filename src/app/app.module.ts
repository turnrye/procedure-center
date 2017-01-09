import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { ProtocolsPage } from '../pages/protocols/protocols';
import { ProtocolPage } from '../pages/protocol/protocol';
import { ContactsPage } from '../pages/contacts/contacts';
import { SettingsPage } from '../pages/settings/settings';
import { ToolsPage } from '../pages/tools/tools';
import { ConfigurationProvider } from '../providers/configuration-provider';
import { UnescapePipe } from '../providers/unescape.pipe';
import { Storage } from '@ionic/storage';
import { MarkdownToHtmlModule } from 'markdown-to-html-pipe';
import { GlasgowComaScalePage } from '../pages/glasgow-coma-scale/glasgow-coma-scale';
import { RuleOf9sPage } from '../pages/rule-of-9s/rule-of-9s';
import { BLSCPRComponentsPage } from '../pages/bls-cpr-components/bls-cpr-components';
import { CincinnatiPrehospitalStrokeScalePage } from '../pages/cincinnati-prehospital-stroke-scale/cincinnati-prehospital-stroke-scale';
import { HelpPage } from '../pages/help/help';
import { ContactsPopoverPage } from '../pages/contacts-popover/contacts-popover';

@NgModule({
  declarations: [
    MyApp,
    ToolsPage,
    ProtocolsPage,
    ContactsPage,
    ProtocolPage,
    SettingsPage,
    GlasgowComaScalePage,
    RuleOf9sPage,
    UnescapePipe,
    HelpPage,
    CincinnatiPrehospitalStrokeScalePage,
    BLSCPRComponentsPage,
    ContactsPopoverPage
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
    ProtocolPage,
    SettingsPage,
    GlasgowComaScalePage,
    RuleOf9sPage,
    HelpPage,
    CincinnatiPrehospitalStrokeScalePage,
    BLSCPRComponentsPage,
    ContactsPopoverPage
  ],
  providers: [
    ConfigurationProvider,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    Storage
  ]
})
export class AppModule {}
