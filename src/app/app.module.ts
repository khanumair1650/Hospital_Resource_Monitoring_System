import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';

//added HttpClientModule
import{HttpClientModule} from '@angular/common/http';
import { GooglePlus } from '@ionic-native/google-plus/ngx';
import {environment} from '../environments/environment';
import {firebase, firebaseui, FirebaseUIModule} from 'firebaseui-angular';
import {AppRoutingModule} from './app-routing.module';
import { AngularFireModule } from "@angular/fire/compat";
import { AngularFireAuthModule } from '@angular/fire/compat/auth';

export const firebaseConfig={
  apiKey: "AIzaSyD9exnMdHxtkkhk9CIh0kLxPeShzm5sEYw",
  authDomain: "login-auth-2bbef.firebaseapp.com",
  projectId: "login-auth-2bbef",
  storageBucket: "login-auth-2bbef.appspot.com",
  messagingSenderId: "724908073542",
  appId: "1:724908073542:web:c2174f0426424082626047",
  measurementId: "G-WBDSW1K8Q0"
}
firebase.initializeApp(firebaseConfig)

const firebaseUiAuthConfig: firebaseui.auth.Config = {
  signInFlow: 'redirect',
  signInOptions: [
    firebase.auth.GoogleAuthProvider.PROVIDER_ID,
  ],
  credentialHelper: firebaseui.auth.CredentialHelper.NONE
};

@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [
    BrowserModule,
    HttpClientModule ,
    IonicModule.forRoot(),
    AppRoutingModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireAuthModule,
    FirebaseUIModule.forRoot(firebaseUiAuthConfig)
    ],
  providers: [
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    GooglePlus
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
