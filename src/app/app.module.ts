import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { MyApp } from './app.component';
import { ProtocolsPage } from '../pages/protocols/protocols';
import { ProtocolPage } from '../pages/protocol/protocol';
import { ContactsPage } from '../pages/contacts/contacts';
import { SettingsPage } from '../pages/settings/settings';
import { ToolsPage } from '../pages/tools/tools';
import { OnboardingPage } from '../pages/onboarding/onboarding';
import { ConfigurationProvider } from '../providers/configuration-provider';
import { UserProfileProvider } from '../providers/user-profile-provider';
import { StartTriagePage } from '../pages/start-triage/start-triage';
import { UnescapePipe } from '../providers/unescape.pipe';
import { IonicStorageModule } from '@ionic/storage';
import { MarkdownToHtmlModule } from 'markdown-to-html-pipe';
import { GlasgowComaScalePage } from '../pages/glasgow-coma-scale/glasgow-coma-scale';
import { TraumaTriagePage } from '../pages/trauma-triage/trauma-triage';
import { RuleOf9sPage } from '../pages/rule-of-9s/rule-of-9s';
import { BLSCPRComponentsPage } from '../pages/bls-cpr-components/bls-cpr-components';
import { CincinnatiPrehospitalStrokeScalePage } from '../pages/cincinnati-prehospital-stroke-scale/cincinnati-prehospital-stroke-scale';
import { HelpPage } from '../pages/help/help';
import { ContactsPopoverPage } from '../pages/contacts-popover/contacts-popover';
import { FacesPainScaleHelpPage } from '../pages/faces-pain-scale-help/faces-pain-scale-help';
import { ApgarScorePage } from '../pages/apgar-score/apgar-score';
import { FacesPainScalePage } from '../pages/faces-pain-scale/faces-pain-scale';
import { RevisedTraumaScorePage } from '../pages/revised-trauma-score/revised-trauma-score';
import { PediatricTraumaScorePage } from '../pages/pediatric-trauma-score/pediatric-trauma-score';

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
    ContactsPopoverPage,
    ApgarScorePage,
    FacesPainScalePage,
    FacesPainScaleHelpPage,
    OnboardingPage,
    RevisedTraumaScorePage,
    StartTriagePage,
    TraumaTriagePage,
    PediatricTraumaScorePage
  ],
  imports: [
    MarkdownToHtmlModule,
    BrowserModule,
    HttpModule,
    IonicModule.forRoot(MyApp),
    IonicStorageModule.forRoot()
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
    ContactsPopoverPage,
    ApgarScorePage,
    FacesPainScalePage,
    FacesPainScaleHelpPage,
    OnboardingPage,
    RevisedTraumaScorePage,
    StartTriagePage,
    TraumaTriagePage,
    PediatricTraumaScorePage
  ],
  providers: [
    ConfigurationProvider,
    UserProfileProvider,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
