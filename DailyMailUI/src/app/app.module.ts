import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MessagingService } from './services/messaging.service';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    // AngularFireModule.initializeApp({
    //   apiKey: 'AIzaSyCLKqu5ESdtXK5_BbyqMJMCUo7ZGJjFUq8'
    // })
    // AngularFireDatabaseModule
  ],
  providers: [MessagingService],
  bootstrap: [AppComponent]
})
export class AppModule { }
