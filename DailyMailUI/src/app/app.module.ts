import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MessagingService } from './services/messaging.service';
import { AngularFireModule, FirebaseAppConfig } from 'angularfire2';
// import { AngularFireDatabaseModule } from 'angularfire2/database';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp({
      apiKey: 'AIzaSyCLKqu5ESdtXK5_BbyqMJMCUo7ZGJjFUq8',
      messagingSenderId: '379123304454'
    }, 'MainNotifications')
    // AngularFireDatabaseModule
  ],
  providers: [MessagingService],
  bootstrap: [AppComponent]
})
export class AppModule { }
