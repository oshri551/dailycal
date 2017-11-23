import { Injectable } from '@angular/core';
// import { AngularFireDatabase } from 'angularfire2/database';
// import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase';
firebase.initializeApp({messagingSenderId: '379123304454'});
import 'rxjs/add/operator/take';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
@Injectable()
export class MessagingService {
  messaging = firebase.messaging();
  currentMessage = new BehaviorSubject(null);

  // private db: AngularFireDatabase, private afAuth: AngularFireAuth
  constructor() { }
  updateToken(token) {
    // this.afAuth.authState.take(1).subscribe(user => {
    //   if (!user) {
    //     return;
    //   }
    //   const data = { [user.uid]: token };
    //   // this.db.object('fcmTokens/').update(data);
    // });

    const data = { uid: token };
  }
  getPermission() {
      this.messaging.requestPermission()
      .then(() => {
        console.log('Notification permission granted.');
        return this.messaging.getToken();
      })
      .then(token => {
        console.log(token);
        this.updateToken(token);
      })
      .catch((err) => {
        console.log('Unable to get permission to notify.', err);
      });
    }
    receiveMessage() {
       this.messaging.onMessage((payload) => {
        console.log('Message received. ', payload);
        this.currentMessage.next(payload);
      });
    }
}
