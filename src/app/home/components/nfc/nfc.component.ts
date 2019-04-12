import { Component, OnInit } from '@angular/core';

import { NFC, Ndef } from '@ionic-native/nfc/ngx';

@Component({
  selector: 'app-nfc',
  templateUrl: './nfc.component.html',
  styleUrls: ['./nfc.component.scss'],
})
export class NfcComponent implements OnInit {
    tagEvent;

  constructor(private nfc: NFC, private ndef: Ndef) { }

  ngOnInit() {
      this.nfc.addNdefListener(() => {
          console.log('successfully attached ndef listener');
      }, (err) => {
          console.log('error attaching ndef listener', err);
      }).subscribe((event) => {
          this.tagEvent = event;
          console.log('received ndef message. the tag contains: ', event.tag);
          console.log('decoded tag id', this.nfc.bytesToHexString(event.tag.id));

          let message = this.ndef.textRecord('Hello world');
          this.nfc.share([message]).then(onSuccess).catch(onError);

          function onSuccess(data) {
              this.tagEvent = data;
          }
          function onError(error) {
              this.tagEvent = error;
          }
      });
  }
}
