import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MaterialModule } from './material.module';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { MessagingService } from './services/messaging.service';
import { DataService } from './services/data.service';
import { AngularFireModule, FirebaseAppConfig } from 'angularfire2';
import { HeaderComponent } from './header/header.component';
import { AppointmentComponent } from './appointment/appointment.component';
import { AppointmentListComponent } from './appointment-list/appointment-list.component';
// import { AngularFireDatabaseModule } from 'angularfire2/database';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    AppointmentComponent,
    AppointmentListComponent
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp({
      apiKey: 'AIzaSyCLKqu5ESdtXK5_BbyqMJMCUo7ZGJjFUq8',
      messagingSenderId: '379123304454'
    }, 'MainNotifications'),
    MaterialModule,
    HttpModule
  ],
  providers: [MessagingService , DataService],
  bootstrap: [AppComponent],
})
export class AppModule { }
