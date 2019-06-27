import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import {IntroductionPage} from '../pages/introduction/introduction'
import { IonicStorageModule } from '@ionic/storage';
import {TestPage} from "../pages/test/test"
import  {CardPage} from "../pages/card/card" ;

@NgModule({
  declarations: [
    MyApp,
    HomePage, IntroductionPage,TestPage, CardPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    IonicStorageModule.forRoot()
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage, IntroductionPage , TestPage, CardPage
  ],
  providers: [
    StatusBar,Storage ,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
