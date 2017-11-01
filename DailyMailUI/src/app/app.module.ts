import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MaterialModule } from './material.module';

import { AppComponent } from './app.component';
import { MessagingService } from './services/messaging.service';
import { AngularFireModule, FirebaseAppConfig } from 'angularfire2';
import { HeaderComponent } from './header/header.component';
// import { AngularFireDatabaseModule } from 'angularfire2/database';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp({
      apiKey: 'AIzaSyCLKqu5ESdtXK5_BbyqMJMCUo7ZGJjFUq8',
      messagingSenderId: '379123304454'
    }, 'MainNotifications'),
    MaterialModule
  ],
  providers: [MessagingService],
  bootstrap: [AppComponent]
})
export class AppModule { }
