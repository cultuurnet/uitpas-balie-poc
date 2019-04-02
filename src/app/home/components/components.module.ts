import {NgModule} from '@angular/core';
import {LocationHeaderComponent} from './location-header/location-header.component';
import {IonicModule} from '@ionic/angular';
import {CommonModule} from '@angular/common';
import {SmartphoneComponent} from './smartphone/smartphone.component';
import {NfcComponent} from './nfc/nfc.component';

@NgModule({
    imports: [
        IonicModule,
        CommonModule
    ],
    declarations: [
        LocationHeaderComponent,
        SmartphoneComponent,
        NfcComponent
    ],
    exports: [
        LocationHeaderComponent,
        SmartphoneComponent,
        NfcComponent
    ]
})

export class ComponentsModule {}
